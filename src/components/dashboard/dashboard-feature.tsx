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
    "577aDyKhhSMtegNT1UFxD4DRrv5UURSdjKGzHVHn7oEMp1tZB9APxUEawotMy7RjuLa1aPViax7wdHr2o4JxMBGX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SZXrLnGxAmy2jp9iq49KMXwirNKXzv4DbSztZQPBSEUJ7HLD2Moekdp5pHUvwZudKmyWcYjG3ic9LrRT3TRSPM8",
  "key1": "4CxyPd1XW9i5zADgvr9LvzE5yDz2Gv9CPhgy6LFq24Pf6HRGo5mRuFKhuuuhAfbXjkBRK6mbCsF6bLYnxHvZSMwh",
  "key2": "4yV8rG7JHp2tygztTPgN5Qn7rJJyd2WTzvG9XTLg8CAHTUjgQ1GQmVkuoeYaYENCpXe5Rt6aVdr7wGEBrAVSw39u",
  "key3": "7Wv4RgxkozfMz4G4coW51c9ijWbYTwaVobZTaVkSg2KNcX9Nxrj4ADLhaC6eeT25AtRyPaVakup3hN2uUmzmQSt",
  "key4": "3DFnaSw33zAWqLgF4Q5Rpi2DgDjnjAR9vV2pcvDazswZf7rps9eWDe1wB1sDBDTmnFQ4LWVAP9jRoZ6h1LZKRiQT",
  "key5": "2mYndvWh23U2WkTGHm4cb6sobTCwjFTvMejy3hC4dpRFMAyGm4hdx3WkRF3mvex9n1L6zp9vepYZZ5ygEz9LRRFc",
  "key6": "Tb99BSNXapAwGgYYjJu9qAUrBWQBouJ2JEuZB3E53frY6jG4iZouA3VxQQX4ytQXeSFXgWbxSeztk6t5oYeRGsB",
  "key7": "3ph5bJ82RGA8XCJFtYJube9YXgZjhLf4M7SmqpWtjTcWxo57TVY3qkAngtZsNqvd4bxXranCv6YYhHKsiTgbGzTp",
  "key8": "3dRo9m9PsKfD85pxi1PRtKNiKhfhp6kn7rVabH5auuPjktezNjLY5q44jMnEbmhH4R96sLAFWVqrjU2MJ6XX4dAb",
  "key9": "5kB3KUDH9XrKQV1q4SFQrTsXU7p64px87EFmFzMD7f3bNWYFNWheDCpnTA75VAcbvoUjxhpEPE8VobPvG3H3pZzf",
  "key10": "ts9jcuhhP4MJi3A5S3LSXUQ6VagdNWRjQoJLtxET8NNta6QFbYhHUfPm1jpxPjr6WbAGH7t1k1SQFKrP61Jk6eT",
  "key11": "4KLBbsti3BnSWXZZuF5YcP63KmcrBHhXshd2yPP3FzAvqMqDVT7fQBmgCeRTkH6mPq2sCHaZJGnBQst8uDLzi6pV",
  "key12": "5KKuNcEAo3tokfX57nAnJ41wqEeSvAjgaBZPkoW15cPewpjoU5JgP8Mw3xRWjX943C17kns6MQzn14sunjcGiboP",
  "key13": "31jVa956iw9x3bo77BYK2iBvyVDf73GA1rFfzmutCrhas3odnbaPehaabwj62CduVa8478chJLLtVvxzvxnxKT95",
  "key14": "KfWKhb4GzjNpKevCitU7HcNyf6NAh9rWer51EL16Z8GyYKQD2q2MVdf6FpG4MGntKef59kh9KuLnGFyrucPdYpH",
  "key15": "5zUxMG4tXLuq7vJi4Dk7hNUYp3R17dhciB4jyA1VsVJ4wAcdBimRYV7B9cnTYWVTWSrs9jasAmWovydHm3651xhY",
  "key16": "4aJaCkt1giFpBxejmh9MThGfKKP1Jf21KCm2w7Asgh6eTTKd4YSBNkpNcR3uTpP2u5UXBwyXYUhuPjtsESrspo8w",
  "key17": "vD1FKj5JpkvSpRqvxiw598jrZfanms7CbX9aCP6MgRfWBcLBRV9wt6UXQNV8FQGsq2PR5FxzFfQsVx9JBxKwL83",
  "key18": "EW3GKv8mkCfxZtYM2RzygG7kBNZtQ1d6SGoMiKfLMqWUbpsZD8e34gv5KBACxCkc12K1Ug44x6inqd8WpCQzYb7",
  "key19": "5j1gTcdbvwD7FtWTwvGYSAHbLBfPEFY75zu9nBRXzyBqwB2gVneMrkZZ44A62oh3K2Ytkia7HLt5eZzaNnqLR5kf",
  "key20": "gAqzr2hwwvXFcxBCn2R2YfrvHyeKPQWE7FAfyAHj2DdbaiNNdXhYfUd4QrYhFsHC9GEzz3VkoknQBLv6YeR6oyn",
  "key21": "2b9QAE5KN4pywg8morUXpz4aVQsKWcZtigZBUcc4wQygMrVL1U4nrr9raZpTcr1QEjv8sK9eLXKW5HscVSPNvLQp",
  "key22": "qZCfzWKrWhtmGAhBviQfv9CxEdSYink3egyDrN4nTjkTHEb1TyQZNwF8GjhKzCCoUCspV3czsKnqZYtMedHP2n4",
  "key23": "2MC1Fxu1j2Kj1MJZri7o78DotFRPb1KAeyk8pnePRm6PA3R3wKJuPyddsGs9ZGvHzNpF6k888PxopvNStBoZo8rv",
  "key24": "2YmgkSK1tLJyviSeC8Q6gxhK3fcA9yhnehQheuWBz3DNaNFX3dXnoSa3vHbqJwhnUwdhVWmLbNQLLZrA26bB5yiw",
  "key25": "5sZQrAxwjSTXsA8CgcEP7MPPK7Mpsgp7Pj7YiD2kv11Gnfe4pSthrM5k2XJFJ18phs4azGi8A79B76TGSCUmGJ7S",
  "key26": "5vuLUY9apiMKbeUgczBz1yJfTMBnJpz1XpUgArGuLJ2HyQKQ6YWhvzgJfmXXiYZRaX4s5nDZJp1oRVh1dQPfbPPr",
  "key27": "2Q6G2hFnkoXHWGZJid5DYRbtcjsXif64PY1oVHLp3Wf483mrcYuSmycm3uXUV6LvgUGGp13MeaYuFmWaYxjbdTnR",
  "key28": "5cvSRdjq7D259FCJcPuREnz4KyjCnFWhfbzHcrKhe5xD6YgsoK1mgjQW6Y8xHJvADsYGFHcnybWWqcuebrRuykE7"
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
