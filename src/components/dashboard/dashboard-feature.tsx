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
    "5KW7QJN5VTGpbi6HV4zwDN8D3BbCtq7GL7SZQadPXF8tCuUi2QbevU8hv5mFPNviusLvZAWehAUSUSSyy8DqTDZJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hzLNPpzEGAtmXUskh316NytQYo8hf6EswUbPZW1oJiEREVq69D76BZzJUoQPpeJFhN3vg7rbnwgcYwrkJ9j2ic9",
  "key1": "3ziyzsXoURuu4Zc1jK8UpncoDakJniSBNi3gGxs9oT9YZnLwaN7uDJCsQbHs63xs9ihFtQcitSGeT5mLM498Dv76",
  "key2": "4FPKnQh9ZpfsT5CNvnABqwTYhYXhNMwFopDj3vrCqFJce9GJT1qjyG6WQZpaqZVqnxT4sdkw5QysSxfTb15w7rPc",
  "key3": "3XahXstnbBbpzi76YCxF67oGL5JXTqiVfu8rTgWCNCmFtjfaxHkcEMAfc6XbiTQQjXA833WSA4YW9r1R14d8kAW1",
  "key4": "4xrWs7bZ8pU62QmWZqjbWoQikYYhhpSSLbWWwzSmdewhKequKMq4f4VdB7fzkspPqM5jYFNSejvVy8CQ2kdwwcbV",
  "key5": "2Cp4UNJgHxQc2SeCxzVa8x86YqRvbpPC58HPKzdEkWjBgjPSkjn1vwkg8JPGA4BFkViWt3H3VjqPx1JdhxS2Hv38",
  "key6": "2djeKX9EqQPfRFeWtC3HV9SjM3UwEgcgE2W2arQunGq4cruLYRHSPZ4q2nXXRHfcxctmqw7HXXpPzL1mXNETbaMB",
  "key7": "5cS56YapsF5FJtjqzVpVeZZrJYDNrbhgZWZtwFXHdVYDZXyBQNwMgMQJ1Q4esduHni2Nb5U6NvB48fKwm9iBqexg",
  "key8": "5JTH2ivkxgj8xRu1DRMYWLHzpRZXvxCzDymQToZdPXnBtrMCgrJ9vK4aMoyE1UiE7W9eqMfEXEqj65NBpq3y8xki",
  "key9": "52og3SaBnmW2Qw3UYFoMqBYQtbPeQUUUY6ZSVR4pb1gb5Vqea49JaS3V2R8FaEdQ2mqJyrvRdjmyg9XWmvEcwHiL",
  "key10": "45pr93pRjnUXKd7VAWhfK7oVQ1bJYxX5WPMYQ4w6aWMcf7nvcZUiDb8bLtNELRytnTCL7aPeznuBcu7Qrnr6mPVC",
  "key11": "2VANkR7DnNq7cV4CWJQ4kVhyd2G2CFYB9CqGF1bcVeJx8P3uDXxSHDFkLHz1ZQ2iNQGigHhh3jRmVEvdmYxLiNjY",
  "key12": "4K7ria4yKR2NVCMCgCdUHJR7YoMgVBCJ2toFVY8Y4QF1Lw1zajWAvVwbUBnVng4hdNbebpSDgJcVFAp2UnLzZDXy",
  "key13": "5HBtBJKWZgER3RZzyRakmVyxZByfgU2haBJf7WqgTXLxPv9WmyVi4sQ8QpWwsauH9PSTf4KHGUkc3foAJPNAkZfw",
  "key14": "pis6kpD5fofHtgb4XVWYTxGFTaijTRgxUPr8j7LGzGzzHEySHmuaaVrGS3YSasHnwQCUzEtKaaa2tMwhgNZtyoj",
  "key15": "5w1dStR1BbrJrWhTB5JNoZcWZEVgYYvmMQ3bhgXCZ2j1syeiozkqE7WR9nW5E6FuzKaBXy1LsdZzCNQgrEtY2Cyn",
  "key16": "5ARKTpJkQAPc69UGUsqYngz11ifrfWASUENgBdsmKrHbURMzzrHLEjzfk7gxfwiFwvAR2zdksmewWQPrPy5fg2jU",
  "key17": "525eWsY9ZFqVJtgPe331KtqrVuv6Mq8eJykV6GpzHnxJP3BhpVpvanrvnNfLpJp92jMt8NoWr5f2xzXcnti3Dzqm",
  "key18": "5TTwej8L82zkb8ihoM3tKWbfQq4N6DggAry1wk2z5xPta5qF31U6Hu8GovTkKf9x8U12ZUXvBpB1shEJBQy5Yp4y",
  "key19": "2npCeDSEesgvMxMQnPoj75i5mwTrMteqE7DQ6EMCReuJR3xdbFc3xfAUQsznrF11ExmPS1sWYMoJm4YbfiaB8q84",
  "key20": "3wYmFm3HUPYMGeibTwS6Rr7iTUSw4biqHvGLAoZtRgAy9xpre57LES9r24HQwAu7dXWhBuZ96F1SP41ckuZqEggj",
  "key21": "PuTg2B6cHTvToj5bcCoofoqDB49Y8LnCSdEyNp2rQKNBZRJFuga1E7FfaPFGUPT65w3cXxBuQvxFfgQ7Rrob3sa",
  "key22": "2coB8tXrCHBdVRWjpxXqYmhPEu3ZqL8kd2hp2HKxq42GbaS5q3Z4pD1a3Qswoswq8qR6jedXLFosP9yQ3pzV2t3G",
  "key23": "4wsKJx7qzxC8KhY6n2o9Pnw8PGKZrKHF2uCXH6GB2123mw3miLiWpHkQkgPMqyfZMAxhU9dgbWkCMj5GVETecwjn",
  "key24": "5y6TEBau1DJFipexQMDnWzSoSZhMeGyiyKqPe1MfNT6N2bE1XeQEtZykK4oLCz2LHyeoPC7JSFpAmJBiBarrXhFe",
  "key25": "3QU8idEgjy6q4cyYV8a8b871x4nkA4mhX27eBtLRC84tBPmRcGAH8o6dFgdRuf5xRmRR7o3hQ6TKtRNgdiVb9KhM",
  "key26": "5Dff7Cc3SWtsmV3BRavEjJVr44SjYNt1SvJqG36HEKcpZWoTC2U1CLv9e5hW12E5ptmPot6vcvPGEYDk8dUnZ9wr",
  "key27": "5hBbVyc9pmod4txco7RZGPWt2U9wbCkW5wiPy6RNc6ghua78F2parVnTR49p3DR67hXwMVdzNeCEraeq1F9KXYxp",
  "key28": "2AMTxqAKvZi2ma3R5cPgf2pRxh8njFhQ3pphq7da8adePED2xnH4VH2VFUc2hdJ5Q9cHN8rCx1VVPCYqoZnyiHTX",
  "key29": "3Yq5aXtGCboo9SmqSCxSsACta6bht6MTkDKkRuYQqsQ1bZ86JSdqcZasXYEVbjsJxHUfbj8BrLCwnYHsyBpLmigS",
  "key30": "3wq7uLBSJ2vo5NvoWFwtCvRDFrVVg6bL5dV88UCxb6vNzWvfCcFJiEDnBPxWu5NwdPjG4PQuz3iLHQmvGsXNm3d8",
  "key31": "5YeQ7hRkhoCrRrCqTUNpoWdPJ9WwqimfX5hpbSd2k5AidSCbAGdLCH8pnXBEJ2mJXEiPi31C9UT5R1TpcPg4R5Gm"
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
