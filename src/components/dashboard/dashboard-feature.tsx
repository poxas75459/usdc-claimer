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
    "4iftNXCPTdqmfcm2YiaBK4eUjfZXc2ECtV78WK1Sg3KwZm1wRf5F8rruTDW7WjznQfnZNjbVFo7AJtB57qMv9toX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yPsonDUkBTyKExc2Z1nd8XWAXUEkVWLL2ND7SKUfiBqDMptE25ZTJQCeY6efsszRnPtqsnATJ1JCS3UtSnLUp1a",
  "key1": "FMHtE5QWKU2irE7jZR2vCjxEVfPDUJovskkc2wn3R1ADTpi8Tg9QyFQcr5GXFVhVhZCkGx3shqU9hQzCwRpZTAy",
  "key2": "3XTvLygpfZqY8qYcquPgVzfSzzZzrVPqZisJa3AX2Bsys2eHEjtzfwRrLM4fcyua5QqnW4oBGUKA1oAzYcF7jihn",
  "key3": "4BstFqRU2hP9tgMmi3jpe9ayVittN17Ar3Zg3y23dbjgjCji2h5364otaVp36vizuAQ93hskbhns8LMLUCK6LKGy",
  "key4": "267PkiUNNdm2ReSYGmqWWZxdYBbJpS2NDgYeD6sTJuuCz8RCJZbEosXD488MDyNYxrUpE4vquaSwh1Bj7BzMcWGQ",
  "key5": "55bm9dH5otfT45BfgYtmSdvvx4Ws2PEzvxFwpkKbhhgcUFkbxn7TrTXoFuBn1yLkxFxQmeoQcaM7Mx1WGr4GuhsD",
  "key6": "3qDjy8JmB7n8SoLq2BAFkPDmBCY2jVGqF6ayvu9gLnw16SCc3Nq43fC6rCQxyktX44yDPcWnAsNsSmVUGrpP5drk",
  "key7": "RxEX8iEvfUnxQtVd1fAsfikq4fxeF8jVVxyWAwEXuQzrK5WEeaNzu12mqFRov5gqGV7WrmWaYdTHzpCqS1JxZGm",
  "key8": "5bggfo7rtiCSdyVYtiB1maWVjn744z2RyNKyJUecCAEG5jinWQY6P7NhfhEgyMvbCGzaDAVkDRDSVDy34A1MKqEh",
  "key9": "3aBZnfPUbQ24jfgR979PrdATXVsSGw67YE1FnrMKjWdKAY6dX9gD5JEDJhKWPJ5qsMQwZX32HPwnmhGTBxkKCDSu",
  "key10": "3BHshHm7vLyXWTCMfYmnLHwTHSmA6vG83HMK22kd9fvNi9aTrqr1g9kuGjGPosKZLetjpzBZex6KT6rgSbRYpjNq",
  "key11": "5CWiiZM6FarwTKf9CpoK1gk6NCsJsQnTnV4m69rHRqTh9BUQsEKaG7Yh5rWiqDYP6Qgtwo9L6Tb23TJ696QXVgZj",
  "key12": "2URQb2Hja52CSkctpaBGGSXv1N9hCKkAJ2FVaA9EHRt9sTtsbEotJctwU6vwJU5CRieLV8vT58Ff1PGYSpYsPknm",
  "key13": "36wyHpyZSCETH1h5YyiwdZ6HsiQhjvxCcD8YvUzbVNPv6b7wT1efEpFGFUBfbAtPeF5Qed1PR1sBcDqLeMmA8Xj1",
  "key14": "rFbCWQw5yGBPj9DQp5igZo4xPvDnKANGhLTWCBBm9AguKMRMwbnj6jvaodKGBZU3Y5YFhkdRc3B8aaAauA4qy3u",
  "key15": "NkDeDpkSdsqCQtSJu6SAEvqhbSFwR8AeHGgzMgmAxZtzLjm6m8p1LC4pgZR5ZYQesuAsK7JKDYcPkNpF9CgefNb",
  "key16": "5NkTJuy31WJ5gu2SZ2kVjC3xadFnvmfvoSG7mQDha1nLjLCRjfa2QBm6MX4MegDWHMuPmxv5UPX2CRgqPJcxgUSU",
  "key17": "2cVw5HbkhHzEt3mLHggcurSSgqaPRrjoukx5QdjyPWVwgNfcyMevtCkukdz2jCX2i9Jg9Fo1SiSrTzHKMp7uJpgc",
  "key18": "3baYRf5ye2yFM2BTPRc27zw2zVuXJQw6s5cofPeZKZsG4t7AU7w4eRCRjYPxGYwUWKkKpcCqHHuQP1geguWRxENC",
  "key19": "5DkWSv93Bo4yxXXz2894yRCz5hiLJQ8WdL9n8iRJefWHbYrY1MAu13kZcn5uHUcLuvA3iqtKM1e31ozKgTwsAY2c",
  "key20": "4PrDC7g6nQyQ11EmfyVza1TKdTqwRtt6AmXcn6cagmZQU6sDfhDhaBrDvZBYGS7u66U7pDFMvg2AWcLYFYoxDK2K",
  "key21": "4WZgjQHE4vDhKE8uDiDzdtKWyX9Htgjfa5G6j7Q5AQPVyyKn2yQmk3ckvmoTGXNQY65G4FJfksPb85LXkf7oxYcy",
  "key22": "JbMpaMZ77g1GyFmpvKH8TZMKdYG5vsVcuN1ZRzrwSfW1uguTv9RntxiRzPcUYiF3b8ZLgx26KsxDos4iNmSNJcU",
  "key23": "dFKaAaWLYNb9RLvPaXbjLWvdj5KWdr11sSJMq1DbsS9YdbevG73eDAvkbcAxjQKuppazfc6abciAACizyt3bpie",
  "key24": "5PtK9s4mygFRj3xJjk7vzQxPkiWnKZssdKF972Di5Rhuj2EqdFZAa1yEgDSgFfW3XmvkV6PxzspYZDpuTvwK1Uwj",
  "key25": "67X1bkJpJk5EgJGsBDAzdAhGSCeurFpsHGf1Mz1ZUWd8uvKg6HWTA1mdZnUrGC6JFZULfbJwhBoJCW94KkYt5oQn",
  "key26": "46KXWRXsEeqJNNZwAf2DtX5zgZMZgSM9iEt7Pwjf5n1SN38D2jGGvfWvc5Jv8nCef4WMeBSaq9faKNraoFbcqb6S"
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
