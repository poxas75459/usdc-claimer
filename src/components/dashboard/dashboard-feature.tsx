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
    "5XHnPBJVt1KAS9uToVsikSd7H95GMVQzF8Pvmy6xMWGPQCpV9Qoq4GH58MgNWuRL5JnwVZgkyctJSx2bcSP7x8pX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4c3vVjCEsEMn21VPoKdpCk4ZALcR8My9HCj13DeEqpAQUZpRhWW6XRYWZ5tYbJyM7rfNG9rQ2CBtkax2tAEiHRDD",
  "key1": "2qUcnF9DGHfMFon1ev3UuKSfMzHPurtawCYY4oA9Q3Dzi3zuc17xYzEPEMifegfxxZZGoBMMXocxoJssRFzKU4qW",
  "key2": "2sVWGDs1LgWzrr7pXgQPrDbzfQ5CV8armqdowVcwMbdXKMQRNP9XbypsshEcAtSQ9AX61rr3nBYDjbq9e28wBpv9",
  "key3": "4fM8herkG3hZopSYhi2kmugo7qLs9M4sehaBXin5NakDKQ5MxKZrgxgCks4MnowANxWu862ApWWderFMwMKWUE4h",
  "key4": "fZrA5o1mXpCuua8iZAo1VYkGDZYTxHFKDwzwkAZBW7m3MJF1kupFYzQ9xzvYkizbxvSqe41SLgxipPDDSuT5zDr",
  "key5": "558ijQqbS47xiH3i34X74qwggdoThJDTauk7oh5ATKBtFYvHqNgZg4MSTd6qtRX5KULdiwWBPvJaWv8XwqVKPQbJ",
  "key6": "jykAza8cbKrsGKJbkc98ZpnKMp9gDMS2iPPxsMUhWXuYY5BM5z2MmWxNYWUNnoMGZKgVvBH9KPg3bZi13p1GD1v",
  "key7": "3AcYc82QLPMFin1TrT3GqauZ32xJc5CDB6vKq6mBfqnKC1UcuMoSyW53daAdpZaQnocXdtfM1YFxAnrDQVGsE6od",
  "key8": "8T1mFxDNPREAJ5sv35ecsmF1W3fkzRPfM1cMBjCuXjaeVbY6NKFbUeGELqnuLdzmSZav8PG3RMeVpCe7haCPAuz",
  "key9": "5h6PGaic5YaMn3q3xFvqwvGv3UaBsGrAtYkuTs7tqwNGr2RyFEZwYBfifJgn8tWG39uu46Bej5cd9mt5sDnMkmA5",
  "key10": "inZzK7Y4zWKFbUo5BoSk6EyYaDKSC7xj1HntVyMKyPwhUGMnMTL54g1UbKGv8Nx27mGboPw8io8KLZkuCp1ykfa",
  "key11": "48mo9pYCyuAGV7X3DQyYVWaSEheK295SNrYgpnXYWRNKwRPx4Hb3YNkCRWpRy2XNzuY947KHpHBaBFqcSuikg2JS",
  "key12": "KMnPmhnzhY3PsukgSjyJC3wJqm1R9qSadCMQF1HHvFBaqaag2w9sPyJ5tqvvN1J93tFoiCAHw79Au1TkihR1Pa6",
  "key13": "5KevW1UY5w4ZxT9mCXHpE2PhmvLSyg7iysPzJxv2RA39YmquJhANbSv66p589XWQNEvhCNA3f8iPVkkaxm26LtBg",
  "key14": "2ECwJoVvBqznT3tjuaT2EDbdyiEFdgNxXMXWxdg4FojMc1AAjE2YNL4No5epfWnts6ghFSrUEcgUbJfUjTVn48fo",
  "key15": "5hUtvDJSnuwRZzZMJVXCvFWYXUTqJBCdkT21KwYEzNxkuz4ZYbKzuXPdhAJquqyWACBBni2UXbJFpHTC2JpcejF5",
  "key16": "H6r9wJASfpAVX8AMinW9mv4csfXkBkd8Xir9wDietHQj63Ljxtsre6g8oM3wv9pmFV6enNvw8GfjbdaXCtBV7QD",
  "key17": "4EDV4Ciz7VnaPJg33t5V4JARNvipbTXLiRUuc3V5qvdvf2XWv7GeKFmVCJEQxaMoDceNrseKyrJzvpGvJQCmZQNu",
  "key18": "TKXTxXKUGpqUzPjZhMsRFtqJt5Hr588ivCS2SRPqNjeRG38RZ3wPZLxuQSwy8Zq4TRWGksm4Z475u5uyQTPH6iu",
  "key19": "5kn96vANouZRrqbHcNS8D3E8RkfUPi5ywd3697seaBynamUmRcRKtR7DRZEYnwa71C1DDhwRyPPg8ADaCWw5hNuk",
  "key20": "4SEBTmVbMoX6Lrx4Q4NoHBdirhZPAZQncpYAr3aoGtruUefWzMzXLrKsJRn2F7Ezx7FtjkPdj2qVZCTetqkEi38C",
  "key21": "67ZY8YjNH8WUJt1o8ucJfq6J2KVCiTqn7vXeKBu6EJjFDp9MwsaqTSjkCFTnwNwrvfuwofhU1ysVmVBAPZxda7k6",
  "key22": "2K8vPYVrdNudBFuMfHXejUTmAeZQjqudopkXjzagggxDQsXBcZuqnRfHufHXyP86xSgt7uEvWi6fkUPqfo5HvgnZ",
  "key23": "iHgbkMHzGuJyEEkXQK6ZdSE9jUdDPXrryFRZHd9ZkDrKq5w5aEwdJhBxj945n19Ac5YMSYgrrGassm9gyYsbLPU",
  "key24": "38E8KLAYVRUxRmMJXsto62ZNHkDxHaJ7kE7n5dT1rnNyGMuvhoMyQeemG1HGoHGHtupYvhe5BsaFxah8StpBKCjW",
  "key25": "2gQYycS367pBzqFbWw4Sz1yqZtwYv1gYKzbnFuGauvJ8bupF8cYgvrjZzhsppXXdLAPQneP2rChfcp3Jpobp8jzX",
  "key26": "1vajizobctcUkbVQZ3ZRuH9vUVSfqX6PXutKMMBPZG6DMZ5nn5GzL3ErVtCmZsWuG5ZMN7S9NMGbbdHGp7M3Roh",
  "key27": "4p5R4NZ8yUMCjsAXyk3W7BWqF93RsexHoiTFXQAsKKUdnieQ1V3BU96HKw2KSvPLUeDi5UUiyK7bspVyNAAZJt14",
  "key28": "3xMsWLJfWhmD26UoWTvq4XDdfQyjwhePWdVMQnmWvMrS1oJPCKtdJrTb2NChj9qmDjWA4tZmHMV6Lxev2eK7kU7q",
  "key29": "55RFPhDK7HX45d8w1jYgTzzH8JWKyJmxUsasvwBrQwWwwLgKKNEEbRXdvrfcFpNyeR4Z6zDVeXNZvV2hS9NBpX1v",
  "key30": "5HgXCjECVNftAh2UB6SwLt12oecQ1HUi7Bzxc9LZnQwUrffTfiQULKgqmkrcTPBhc9KRY9qpwrahFwaTraRv5CTP",
  "key31": "X4gGqnDx8UyxuTyAe7QzLBwhbkoyCrdaThEtxeUWaKfZDLVK2bf9HVuQsuiVjQcW5W5AUUox2cMRnZVSgLgS8za",
  "key32": "5VSEpJiGPHL4KfHxCfwAnVULyL9x7kqAgWv4AowjzhKWy9tbsHvNP6WCrzUHbWpENqMmwzN4MrhtAVzNYa7dcef"
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
