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
    "4iHUefCzryJhYKefVjVRsQ2S5tbiAhqL8d3TJMT6KUp4MQGLr5Z3ZkquaDhGgSXhxoZKkp4chBoPC9oqrvH1PqCg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p4VY5FB46GLWdkfV2SGqSP9BnVGC89gQnxaKikZfjLF7y4NyGp7v85VGmq1GZMbaD2bJjBRVkhQQRePnPSt1SEv",
  "key1": "4LD4kyhufRpAv1qF7gCMAuigg5GQRt5pyCSAhucVJpVXyx6saFuWYmmjoze6wUsH5CTHJpvWSywFFcYA1CgYFJnD",
  "key2": "2jQ1VNPuM6ptx9A1Sd8F7Vw2qDd4vJ6WComP17hD3xiuM5p2xPyfLtEWAYgmUr3XAhXR66Um6Q1AbDKkWwKKnzGn",
  "key3": "5UY98SidExHYvotjidGqkwPXfLE4R1riZduoQNTCWiSZzPjztaq9MEU8vtCR2oNxDCsqXFWPBYCS3CKjb9J94kcc",
  "key4": "apy3uWhea7LvbeTqF2nJ6BkH9KHUtVzb52wDW7u8UGRtuxfiqeuna9SvT5wLroYZmv4j5fgfybsLi6HvBG57XQz",
  "key5": "47ZNo5h5Q64zBeJVVTeLUDW6Z1td16Uwf19UJrn9jXHqRwLTYPeDE3KUV4Kkevw45xt5zdSEbzqPk9VhditxHa7U",
  "key6": "5sYxXvy9CicVW3Hd1V5gs89Fxk8qFYmJmSekaX39yM2iZoEwPaEf4Cbk85r42xZKfm3743qYkGy36ajwafU6eiJa",
  "key7": "42seKS3xmkLuB5SEhN7f1oKmSXJms74CkiK2oR2gvorFa1zhRraGeUr8bg3P6Z3oRHgHMpP3BpKHBi4KdhMu2eXW",
  "key8": "2ZzwZuWXpj3VBzyReuDge4PauDgbz6dS774RDwrY9H7Xgzt62dcf7GcxPFzE1dzWWsUMhAUUALrqmi56wkVkPzxg",
  "key9": "3HzNRjMNTV7P4pFkus6rbt3GMA2pAgkj2L2wYu6E9mwRfUUNRYATvatPzr24PZuryJM9A3GgFbXf4Hkmpbqq4kXE",
  "key10": "5vnEzAFgAZRnTkXaS6wpuoQDGBeHwd7vZkpESSZys5yuUfBA459C1o2D6Rhk1iUZasMhR6h18xoEnC15kZUvRNRE",
  "key11": "5t21Rod81zFnqRMG71D5KPJo43RxVWuhPqaDdpVyd7NBaLgCerFPv39g4rCnMmYJrsvqb2DCacygCiCtso7A1vbm",
  "key12": "w6Brph6w4PLFruqnmt3gRWNYJHvGq1vGrZsEsFdVNQZusvoPxoVaGnHBjy5k21dPy4ZqNHe5PB2KAvSwit8ES6J",
  "key13": "4SY6F2unzjUpwVFKHqCBiJWLj66WYJhv5ApzTEccgKyg8XjJDF2HwRNiBL1J4uyAUAMSGYBfiYcS79mmsCyLNtCf",
  "key14": "48zZprrBL1rrHiRAciXapMSGurg4qDSm48D4QhrhTE3qoTxSxpPiLoj5rdF4XT2MPmwmvpLXB7xmsN5Fd8cH9mZq",
  "key15": "me4pB4eFbUcTC9Wx3wEPZP6eSp93jZwTaT3rMC5ogamBExViBu55xVdWLrTGCyHbqRuQfN7EVy5eDGEB7skBh4y",
  "key16": "41GcVSrHR1MEj2tyeNNnmJBYUBFsZG9eSdrBWWjSoPvh4h6mLDPRE6ujs3LgpsUikL3SNMU9PCKwonJWzvokEnfP",
  "key17": "3FudBcnbiEA3rXsfAc1jduZ5oGMHAhGbRov9FkoHqrQn7xaHVhNZWToiw9rLRNPqhnagT1HwEsmEKppNXfDUGF4S",
  "key18": "3Wf9cm2rezmQPmzqLpth6aF8f2uzWdSLeM3b1wzRNcTJGTDZt8sLM1ZdAqBbN7S3G66iCnLJZKj1cryrR2Axbqt8",
  "key19": "4Jw3JiDUtLZccCXzuhmm3aAQ29p8skNsMcPyvkcWYTzhAK41AhwUB885wEZybvjR9Sw84734qD5CZ5ftNAgKo7fC",
  "key20": "4MuLpYCfLpeJwGPrpvkRjD2ouX9z35H8cEchoYvLfAhnH1hTKyM8i4xjs6Gis9MtjbBwLzHLLSVCDSofu9guuNXZ",
  "key21": "2ZwDEBmLVKzmrMQ9jftgC82eaqvionmdQzFzGrK79biKxDnsNpQ4Lf6eKUc2hqvdyWbxyQcPn7kD22xm3Ek7JnEF",
  "key22": "YooSZUT6GYfRVNgdY1fRW3YpkPoQF64cdQ4mwiruowrDej7pm6G7XVzXhgZQErgBkzaZ9TdiwBey5iJhAg6h3rz",
  "key23": "fusT37pw9h3sZDdcg2X76ueQJiXgE3MZK44hdZz2GRaqoJmJ5R87aymuvahEs2ceMWz7NNkWJS34xmntRfgAxSd",
  "key24": "DR7CPRKQ3mPoiaegmFGd9aJpZZZEUR2yJULXqJhYJy8qi7GvuJuqhgZgEXBpjxP4xayb9gL5sQfSWpnEyuVvJAJ",
  "key25": "5niLkBoqaiEUiZDALgKgjS2dV6jiixYvRfzBz9ST1rreZYqmxEk8TndcGZ8AFdEFuqqt8xodDg6xXRNK6ARV5Hme",
  "key26": "4M2ME72en8DVDPak8BzTK5tUfHVLfEVT5PqPgtDph6V5i2SFKeHDrSjqf7Yk1CPZMULsYuL4mtebatPVYEZvsV8z",
  "key27": "qVPoVDpNwf1oFxnLsbfTgg2Fk82LUBHWwkWkqMUdYjs35n1cqj8TxnLCp9Zzg2yWPMMvjQCkvJd3wVSaJsfDM1a"
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
