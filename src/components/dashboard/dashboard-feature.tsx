/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "3hX43djvaoHyNNTFKdCKBwUjLzcf48JKB52Ne4ytmV6Z7cBAuvSC5CbT9HZN5x55D3c2mV5bqrvCVLyrWbC9rYvn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24RJAPK3zM2h5nJjbe21jdXRfX4ENWCQLzMtXWJDXeGC6fNsCrqraXQrLuTNEozic8M4EWktoiZqjhjvcpR2AFxD",
  "key1": "5Gq81Por7d6Sxwu9s322BFJZ6ptSJTVHZik21Y5HMFD1xy26XrjCsH7812mwzoed3Ga3bXx4kQrWeaseZ5R1jknv",
  "key2": "3tezbsY9pZuMuPtuA4PkvznE3xr13ALT2qvpWhUvFV8VNJjaFyAy8q9rUmncHkauMuCtFqiuhQNk36Jddmp9ZL3C",
  "key3": "62i2B4qLCvSGtH3ekgBhaM9P3ycj1W1UqJks4M4YE1oTHpBVXaiDnnFfyf79q74abRaSaBgw8rYPN6dsyUyLHri",
  "key4": "2LgSpXtgM751vQUNVe7g6WQF92kKaHfwGBaLrvpfEMx5y66hGiAK7SAZiTAVE5HvgVHUqTXL9tcWhUz9UCiaZwD5",
  "key5": "5VW9k6f6iTdj6obW4sCbLXiuK353FH6T7LH1JxhEyV7h2DngwwxyS4pUP9SVNAQGcu6AtX7uDtMoo26gqUsjsMH9",
  "key6": "5nxaCB7h9EJhush1eJicgU7HfNRFCrwUPwQYsb63DZan9XtC5ox54aFsaQVBGcatAcv9Gu594ezL7L9dfwbJGrwH",
  "key7": "43fQSG4yGf7XzVYuSKMKZRmQyJaKCusx9npo669ijmTdcmeFa4B7o2V1RpH3Nh3XhS5EcTR63uJgWA5tdxbdzxZR",
  "key8": "5ShGvnBf6WVaURoWJnTtohYUz6cnruYqGuedK1JyvxEMApD2wgU5mVtkzd1HVXqUsyAmi7xumuDjviv9S3ttzq8R",
  "key9": "5SQXknA5kWTpE3ZGcvouwLRDexGDxZ2awvPf6k5ACePbcfQ4f1MnXvPL3QCrLv1uDE8Jtz1ny8nveh1DTMz69mC2",
  "key10": "pAi7Z7Yiqe3H4g9HLw1YrYgXZ9Q6ifRzPZJWUoGXciN9zCwXrnHDghjmezWoVHDajD315uFrMFrVRpfxbHujg68",
  "key11": "NhV8dwS4jYfv77zvTborb7idcwWR7ape4xFaQBkigir4Wji5uMu4BSNV1ZWRVRRA95P7xKdJtJEeJ2ukKFVAt3W",
  "key12": "5YjC7uhuusjpumCAT5bsm5jdLg7byFbvoUYPCvRVc3gFGWUSFmE2QJjcErCZeBsW8bUbfPeHh6uFrE5hUhzFUDSV",
  "key13": "5Efy1hqTkXYP9YucRQDarAWLGKPZTxsBEN7xzMhvAzSNf2oXdLjWbVMDFu22w4QYTUUaXnsvVtRW6QQBvZGK7cfr",
  "key14": "4PJa8xF7YbxUi93bwnqbLEL4EeSWjiJj3Jaz14kuxashoV1nBrNVZd6BBcQLZpcpJp1P7NZtVpPnH4hD3PcSr8md",
  "key15": "2fUjLjMNq8M4J3zbeB4svzzcLqWv6bAHzPiyBd8Aw67eGNBMkws1NkswGgAtqMnPBLS74k2riHnEwSqpSiYuu4Yq",
  "key16": "33BhLqoh9nweTnqa77g9HC2hg8tfKPBMVq6Xprzrcr6BS1pXgJst5MbWdGLNB9nGoUaDDLbqHrNJ5aXSGNfosUD4",
  "key17": "4fCLrMSCzXwiid9FB966VWmUxAt6hziML91kMSEPeHHb4MoV1M3eHVqb5A6n9TemdW7p8SbM55DcBrdwyTtiZynj",
  "key18": "7LVtKcNrcsdtxXh9Pjb466LjrrsZS3BqCcYSCXLZMQS3YkRjX7UGDnRf2GFM2yUw1Z2Udd1L5RRQDEPMyxwp3Gt",
  "key19": "5zATT7xmGx2w9UQ1PxK3KKnbKW3eNA7c76ec6SYzmuARZiSaQTaytfexLSK9Dc7mirrvHkxTikdWQVacgpa6axTk",
  "key20": "5jkq4LFfrCyRLYCCqhQMLWs2LzGzGyeLrTnVUR8inkTAbzW47t6RGE5E8MPhApaTqRkQqHjHfA7K38f2WgY53zkp",
  "key21": "4SLy7C2WUbGf2tqQcQbcm5q3GSzdYauWKbV3ixwdCmN1kSyvRMhN6LSWAd7sN21t1rqhHCqdstJXU1J7628wERW6",
  "key22": "5d795rCX6E68eUgGWrn8haSwY1F6M8BtYaTf5HMXyFdAojaZRouTueQgbaEzXagfTtJK151MxZ3wJSfiSLjVqCad",
  "key23": "4xu1C9PBpzsF7nV2xucAtapGzf4UM1CAM6eXWd5kQj7t7fZv2pJK987VCNHWYRmtrFy3ZDq6pVz576RUhTGjaT1s",
  "key24": "2jUnLeEBmxXQsFwCKPiarh6XSPp6UauV6tgLMn8CeciS9NsvWg6npunPhiGzgMFFYG8s1gb4o4rtbBsyF4WJ7pF7",
  "key25": "3yH1RMDsXEdcY4qKABkxX6bYRMYbHFaWMfpRsVLw36W2dHLr3ihAbi4m1tx6pbV2vaa6me4gz685EqpPtidZW1Eb",
  "key26": "33e35CN6NU4Fo7BsonmEqAFd6PqsbGpN4G4RVK92tuMLGGnEGkzQoQuA3QrGdxujxwTKGzqRVsE13V99By1Vxurm",
  "key27": "3tTAiNFK6VjuJSdRNxChahbKZDax2LzWCyPefeSVs1zSQeVaArvBWLo4hvwJBfSGMdxm7rf6ESRh2cmzFstmMdwf",
  "key28": "m5wDQ1uNERjspgyn6YHeCL5UcqErEWy3GM39P75f7EG81w8SndRWSv81enyMshwZAK59Pbd7KZmHt5WcSnkCRH8"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
