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
    "5cm1tK7dBkzf5Cs957hj6fBVFHFsY8FkjmZVnS7UETfuvTnKvkteQSQXWyFWGh181tDmQv4QN4ygHPRwkn42ZPdV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rwzgGWvgcPcoiSDfUXKsEBxQ9eEuno3kfHE1Ciru6izqGmDqScvCHX5dRfToDtBnRu7oyz392WbKHHbu6ixr5V2",
  "key1": "3EG8yudXyKKZ5T2koxaS5LbdHtK42aB8CCV6CWgX2PvkJUYRD1Z9ho7H15G8ZcEDgVsUTgqWZWsN9nW5UNLr9Dxz",
  "key2": "56r3rKrTiP6HcpogiPJbHq22hQSiSoD7n9zyVqdhLQLkcooQiaB3KyBq7u5c2GFwCrkD4t7gbETeQzz731mo3Lxx",
  "key3": "3sZaskDocWoKF3TZp4wBoMdCQny7LU7pqiZyC9agpsqunxQU2f4Vh5H4eTtyr5e4XkztG35mDCMe3Ux4HtvM7yLT",
  "key4": "4aUyXhsgPnj8uhSDb7SaHC5JmrrHSypftGG2z5jqv81MGxVk6GmZ6QxSQZiXv3cqBEaECzP5Fxkvy54QjyA8s9D6",
  "key5": "5Am5DW28VgrEgh9UqPX4MF2zpeymxLK2i38gaCzJYP8N1uWuZDuUeQfsdecQ94ugbvXhC6qZcGvZjUEVaWuSmKGw",
  "key6": "aCJiWbvBtThhMwPkqPQiHufPdk8KBKiksHYGq9ceUBus6iBbgg1CJf9pDgQLmijeSiB7p2BCre3ZGSjGiwd9EGZ",
  "key7": "SUzgyxbgGJVEzUqfmVLEfF3sjANSP3sxrQ283LRtixqFZyoH38b8wevzYt7pGLSLdcnvBxCjnpvx9WwY25hkEq8",
  "key8": "M4RZiwk2VCmZLTJVmFP7KdTNZCNgsgy177BoFpzm13zkxttxbaeXNDcKTuHjxspmwMGHuKsyFUyhjmJCHwLaa85",
  "key9": "2d841upB3KdrMTKk8zMiNYa9u5JNZ5xvoHJnMnwgpbmDKJTe3PfcXvKUFXKp4qcm31WWQCx72rXyesjdUEbVDc9t",
  "key10": "3yH9bTopRcpcftnN4MUMXE8vibvJVzCSKCdMUMAaQRRactJ5X9TBdEE6xuuGQiPGXWybA8eePdF1YuTuLGpUTbht",
  "key11": "3f6s3bvLqCzwXVqnnUn8d8wdLubqLbHqn8TQMrts3osCtL6fUiehJ4FVXxYeKM1EDKNriY3ouma8hiUTjPSVMxZY",
  "key12": "2xU7KZ3E2HrbhVpTpaRGWMFvjsLF2vTAzdjapXJwn9HGa4apMSe78xgmB6aiuchULE5SbsJbapVSPm1K9dkQ9VTM",
  "key13": "2v9Sge4SpbZD9haBEba68wiVFaYJu7vicFquwWvn7kmrSusJfQPjhCGXTH4zBiWTnwfomA3wsKWpUgSKaPL2iHww",
  "key14": "3pexmZSmtK5YWYHk3QG244RcQeJYA5QZyWK3XxVT63Ry3dZAUh7oYk9UgeUjrUNzbeNM2jiXWBHbcd3TD49gcziN",
  "key15": "Pd5K9k6qNd4Lwj7KJr6vTX1bcrARiuz4eA7qVwZC3nToUtLDKESC5Ydmz7EYtqmHzChHJt95hXRG2FXcBK6Ynkp",
  "key16": "eC8oN12afqVMWnb2pNJNEVjhpWEkcHxsBKgbYRqGnioJkMDrAnzKQcFfXPmmdZGHj8dZGvprZyWy9fjCnZrZchC",
  "key17": "5tGV76zttkYmsDWpJQSWWhSuh5tq4U6CnYtsESktaxKg2gkExyE47nB4THnkUAZqzFiSWVtJ2ob8LLEkwGUtWNyr",
  "key18": "25wKwkmXiRtMvBShQHWivzi3UAaFKTs1UjW8Q6Z5fg8cY1HNzYwTBs8G9J9ruUtV2xa7X74uD4i74PTubgRUYhfk",
  "key19": "d2zPrksHowaqrhqYLv8QWBzXLGm4remWUbZZcACJM3ivYn1ocMNsxZKZ3aBAMpnaf7cEtBMuRkWowzRukgjHpuW",
  "key20": "2E6jiouLqLKgPJPcCVBewanxWkWVSy9d3WMsa2P7Y3HtUNAcCwMPpZpLXkT9KrUqDqovc6vD2toGRunCETWDDqyU",
  "key21": "4wMCfTYBXdTzPnb5bDRS7bwNMMA6ah3eNG3TJyQ2Xwct43D9DjBiqzU44e2SnHLy11CddoD29jgKD6zJFzM2S6jn",
  "key22": "3hPm6K3AagddZTqDWKGZmKUq1vaueCb6LWrk8oq9vr9mNkNJZm4RhdGQASj4bLu1jCjGXRrUArJ7N8rrakiNtZCc",
  "key23": "W8GTAzjHCemDZPgxorpSKAmUxYdTrSRYiLvCDbyeFda9976V6Hn1veZM7sQvgZ5KuJCjDEYckuzg5d2JnbXk6hk",
  "key24": "5oEZwJKJPfcAKcVhMuYj48Tg7PzMubN5eM1XuyHq2jQ2CSMaG1SPUe1zZczdLMxgmQAZFMtgkmeeHknRfPb4srKt",
  "key25": "2fp7QmYpZWa9USeMYFJgpT4ZoqcDFvMfiojWhRd74A2znhSJKe7fbK9vcmLBqVvnPVC22WriNxoznF5VbtTJf61D",
  "key26": "4KMpL1YqnGxrusjDxBy3t3JCo8M8uPqbkG9s3rwzfiAspJ4LNL5Ktqib2BX12Y4d22Ymb8Q8XmKtKTKdabo7L9Sr",
  "key27": "3yLr2jiN2sNP755jp9robuZs9VLfSknqtnuEQw3KZtW8oYvTDZJ7oZ2tWsfazpzGe9y7aQ5kxrBbwPy32U1YKeV2",
  "key28": "CBCUnTWEtMo1Unm43W55R8UX5QbdLmGQRtHPwrUEEwJRVqNGgYmPZ3rkGf3Lh67FBuxye6gciB1sFkXJDCCLhqf",
  "key29": "gDhN9TggKTMET2FCDmrAUM5fpBnj32qbteFF3szFPqGXzUnEh2yTBQvauFm9nC4Z3cPusMuniZgEE6TMpXDGTsz",
  "key30": "536QtaQhp7bTvqCxA7PuxdaJwvHGP1Kzejh74owM85qcSoHmiXzqxV4QaJoL7fP351xgvBTC983PonppQi6BtzTw",
  "key31": "5YPV227Q2R7sRzjKZbhFqGpXFjMX8adpYzkyVTQNxr2fGNzGq9QbogTswT3tqfLrKxCXw8WrTpmMFmdgNRbL9THp",
  "key32": "2BhQhiHnjpN5Y3PS7LTqTKsqiWTkEmdYj5UzKEi6UdVyszLGpYdpeqQUftteM2Y3bXUPFVMTjmN5V24cq6mskUeV",
  "key33": "KnJtD78sewvr78ktStENufEQEX1zv9dK6yvrT8jJjJE4Rr8znwDcq5estFXQXt4eKKkfS1v8yxbKBuQA2hEktzU",
  "key34": "4WaLRtNVniZfD84D16pZUpy6798U3W1JNnhqDJSYsBusrJUEzhyHBKMseRRQPJiBFhKoYA12spey76DMsTDmGm9c",
  "key35": "bA9YKZiEmdV8z3Ws4krDsnoy2rU2CKyKi7QHW3F5s9cPsPGQULGTRFCxwamzPUgdghfP7rHxk3Ctd4epE6sG6eU"
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
