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
    "4JiPkhV8iqX1Nb8cakSRFuecjhVUpJftSwmi9kDp2K7rv9U2Tzc8EgVZx2d1pqKKnXJXo5CLpSFYLNqFY66gdLbY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xsko16QKr1zPGLA3tpt1cFiPTYz5V7PtRWstU4x84ugZy7dKVrQcW8rJWo36Z8FuDYnmwmstLjjTiTz1v8YHQWK",
  "key1": "4eC36T6NsarHwbBLYhH7JLdseTiT8XRHFwrXwpiujCLGqLrWNekEGyaAYaDgJkURW7NPQN8kWgLk8V3JgafmPx28",
  "key2": "euq9152nGAhpAvopbrMfQz8dkFuy6Yrpd8qHfRfhmSGWdKcssZndA4C9nVgEF9VmSjbYw7CV7PNyiGBNRiUQzyx",
  "key3": "5VYdR8PrBRVAs4kY5mHFpqiMHNM3Q3b6ckywU88oxHWgNxh46VgjVfaxHZB5biMaru7i5RybjvBQW2nWMthvS8p4",
  "key4": "5mHuyTRUkRA7V6TeAYa9Yd1udoBa9fxvuUuxSZMkraNWLwJCSjPN87qFtxYhE4iDvEibdXUpi73PnddaU3ThWLy5",
  "key5": "3izKEPAPDm1obSEhb6rjW6tRLcEaownDzXZdB2CF3csSkqZwsTurEhkNcEnUzKrEN32Be7sc5xqLxaKHyQEcAqLC",
  "key6": "U3N9MfypHRkxpS8SCEXCuVTDbnTXfkPampLhSQRAN2KDt7r1gGL25T7ULxiEjQs9VVwEyMFpD3w9b2zidGKrKvW",
  "key7": "5LCrz9iDk9RUVU61JGh6MRjfQDtvbgKqyhwBmvT6FGKcsAmz2outJmHqWk9ZUJhmdkFCSXTJB74PE3zTi8QJKfjz",
  "key8": "4uCKuYx5u9Cthsk2ALji3WgAXmGio5ebnKorW3VDPDMgMVVZmaYUJa4MqtPeJKigJbZCvxDEP79TPeyXiXaWNzE4",
  "key9": "FLxZNa9c7uku6me7zpH91Au47FrRBJMTjbMqaScfErNsETM43ZHXYKLFfUKZhCJ7dujQkknmWPhDTvv5es7uSU4",
  "key10": "561fKz1MfcoKAWjZ2wTxv6mgxg8bTxZ7C2g5n9jimi7Ln6H6ohMqDTu7s63d5SwuoNMtHRejZUcdpU2vUAy7dEWh",
  "key11": "3WAMkFmS5rqWbBxDqtPFMce4gxSToFd7BSt9b9ScWCnLpCRSpSrEc7DWgbX4WbHz8T5TFooeGPQGBJkEsb6dD75D",
  "key12": "5usYmh9hxuTmEWA3EFY6a3LuevTjn3MUsNv4sPeUiDQU5v4upJoJiFb2ZPzBr5bHFyH9gELSUrW4PgtFHJsSDgZV",
  "key13": "3mBf5eGXvJwKzT9yMXsu4npHyLvjjwYQahBgK1S8oVQEwM5FdaWgSgkmCrL2GWqtEfRCH2SssvhNVUzcc1hYBAZH",
  "key14": "5idZeCqVFJVsmeaAiaXcAxKEBWNkfVoc1KEp6CWiCenymh3vQ2CeDDTKKJjCj2QoRpY2JU8XtjpddxpnqNszcHjV",
  "key15": "2fuA1Z3snEXs53CvYHJVvuuF3vq3rknvUseZhsyTP8HTFLywAKqZRTSa8q5YsQHpcgDdodDqmrJTWHjQiyFFF43r",
  "key16": "8qMJfXsQxo2ov6MdimV9QTxXqEYkMmzajGH3C5NnWmNtSwienfMxzQeDgM2sfkBXHiDv9fGAFeCGVNoaiYSC3JZ",
  "key17": "TT8fykcF5CXZ2juXQASXFTyEj7S86w4nNF3qCB3LAkKpeybfRXYiV71xYivBncCNpcLCCxHuWBEziqoAZkoFh8d",
  "key18": "62EaVj43mLF4nx65cBCj5tb8euwBcWeEfAenhc8WWDGiuYeUcemXw1oF3T1HnrTABSCqe7wkw6foULGVeo6gr4J7",
  "key19": "5QgJgzeSkB7te9zHDkNkwcGaHgo2ThU5pNjEc3J1fKp2XhoDcKSCddWq8DvgLvTN6TDzJe6ZmCEd6VFnQz8emmnr",
  "key20": "KUyqZuCwCjE7t1GbTWqAxYAKsGtbGZrfDMBb9eRXsV3PSMZNJNb5beJu9LLBzEcBu7KEt8otsruDwREs5sH7qar",
  "key21": "2Tebj4pnoH4HfptsDECfjuWQvKdjRJQoX6uKPyiMuwAAXNA7Dueq3Rxo5Kpdxp9zNehgXDJkZdn3xySpSWaUMCs8",
  "key22": "qbEaeMWpz3aiPv6JAiGU7rYu2xRfzcsapxkrgdBP43nKuNH6vVe6BVeGzCrUpLTgkHmHWr8hBBE86FKb7AGemKK",
  "key23": "9iJ6CVvFaoeGibYSWJPykxS2JrF1ev7FDZXs7enhke1CLXFWeRLdB4x3XA7vSQhvy38sdBzTpnWFQWVzDtWb1xg",
  "key24": "5tEedHtKs9n7H6mYAKdayB69jZWnAtWATR3kxxrvTLg7XiNc3eGKDV5JwUR6JCHsV2kGCmHAMfK8a4idhhiaK29j",
  "key25": "2K6c5JpzgfDyZCN1mhyGmrSYnoj7uCKK5ZR7T1vCb6h2RWjQuBMDZ2QR3nhJmR4o8QtaN8xwjH9XfzFazR31K4DB",
  "key26": "hmKoeND7U1rSJwabrTzo57wFwWnUr3Td2M6GzPybEvGYn9hD5mocBCZcosCWYYev5yvXdYPHz8bYHBSexsn1SxK"
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
