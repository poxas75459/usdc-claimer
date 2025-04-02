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
    "58hgvCW2f2zhqk52H71mg8nM8TAix5JuRRS3CAcrovaiXMRuJUHVmJsnaLjrQWxj8K2KKgEZwGxYURH9SpgA3jkp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o4kHie4xWGmv8uQ1ZVWof5bRbaJfDvTGbCEj7KLshvsr1jM6W9uWwc6e7pjydGNVuWSDbqz3sE7zTgZfrWfCCuL",
  "key1": "3ymKfHKUrGwWa1K6hSopR9rUtB2r8EmxDJ9oLiTu2UPSCVBkKb4iscbzK7dkYgUdu7fUey72uzushwxyfZigmhCo",
  "key2": "4KsEBkhwB7hJsTwVZRu9J3AbkPUieNE9EkNKLK38xYyWHqsQN8f9gCRCJCy6vZWwaAbWN6wi5fdVfzhFSGfJ3nUq",
  "key3": "5DtMdYMPs4pQWGBVLSZxiJtf8xrgViRJWZaZLf7HyJFCQqWJy5ixhhxT9VbDjGQmQL51ZDEG6Mrp48A4p8S4caMM",
  "key4": "33NtAZFcvELN1czjH4KxK9osnqBEWGm3GsXMpu74sVDHZnuR4ivKPYsDWDPVBKjDPZW2HZaBMszwTepNhqMDkZvE",
  "key5": "5H7zjrAdq3tC264wrTGJfuVguKBtCVbunqWWFY6yeCtP9ShVgYt9G3T1wc6Nt6CqbaxV49TcyXLBck5xM13unW4q",
  "key6": "2MVgkvMLsfBrgiW1gMBmm8S724wyrD14pc1LzZf4uG1iJJ32czXtXkHus8hdoMxMLkNCFoWGr5MzqiqZWPsrLK1k",
  "key7": "4bLziu6eHXY8956MQ997J7kwteUzy5nkmK6QVL3Y8kxRq9CxeooNSH5XHjMYVdPTxhsXWUjxowd31U76TnC6Kgo6",
  "key8": "3m9b1Z2SDBMnrzTRNX299dhuxPVKhTcnvPohk5bCSUFBtF86yjDEQzsNX8bcBZEv6RveSuN6MYLA7QBYXyM8jWvT",
  "key9": "tHbvaXghXUWGjrpQF1uZRfrakdGg9hSXEvDsQur1vmmtHhCZGZByChAzZq3py9x7iyRZrM9cB3NxV6opMBehYeZ",
  "key10": "ftT3xDP7VdDfCiJs4Fm2ML7dmtxfgEh4WouwYnF7xjR9rwhZ7YMv7CmYYmEmTDPefE58gCmfGV13JBCbZjTmDBS",
  "key11": "3qjLBwFcLqLLjp63RfRyjuLcMPzoHDHzQJEfEeD6u14raSmp1GbKfhW8LRGYDxJoEfh6uzvPLoRUcHWxz9LXJnz4",
  "key12": "22EQqwcP6YLX3UwUaoNKtYbG4YSKL5cDAbmmMQh3H3aNSF1dwKJwLEHhRCSBWouzPqVdsynM4zvWUFM5rWqKDGYs",
  "key13": "2xvdZGs5N4duYnKcXYuvN6MMjf3UwuzWfgzhc9sBS2FgYsspzGvscf67ocoMfWd4HRsQnfAsb3Y5XcdjHL1d7b2p",
  "key14": "2mkaHvukKVqcpBzzdE9sPbwzG3zwxu18DP2jbxi6SKfEfTbCy5xoRBRVcWRAWaQ1SuS52Lh1bc57yUamN5izSBbm",
  "key15": "4HNRihXU8U7mb4q41hfXmBWjNSL9v37x3GS2rLUk2NUtzEoKecfLc6CNhVBVGvx9aRn3n6oQT4eUemrTGiM9dVsr",
  "key16": "5mTQr9stE5QzFMQUgTinZMxMomh8VwtW8o15TWgy2P7JwRvejj3tBGH3PRQAtbpwkaWK1FRstMoyUZshHEpwVhNm",
  "key17": "4dBqNax97YLBExXdPYPr8QX4wt7oPaMXhzYMoaBX79drss5Xidu5A6y9yQTHQFSeJ9xmjUyErzk85QZGX13F8ejk",
  "key18": "5oaqnoQm5scS9YHbeyJqTxqQeQ6HZMzgr83pnbjeTVXWCU9A7BqYcVAQc7a4gkoub9TWZEGcUCjNBjhPQNawmhiK",
  "key19": "3wnwehXMtnnCfKTGVv2TtJXbazxbPs9TWiZtwoVd7aM2iQfGaggGTNVJfoWEWMWX9HC3VhccQ7REjm9nMa2YFAfd",
  "key20": "55A9kwWezP8aV5UXLJuVBa5tK9JqcdwynN2XxuYERZNnDnSa8zXAGYu21qomewHcg2z8Z6EvNYU7nqs9sq4AeEQL",
  "key21": "4reQLrZoNLR3Ji7kMys1NntAVgLFvoQEs1VPiFFVpsBMKpCXzdHgNUZfawphFxvd7ZVCcUbHKodrFshHCeCSTGsU",
  "key22": "eX3o74uSDUbnCv5PYsvak5yrMDUW66cfH9UHjMwfpKz3rBUyjKUAWYiNdsK8fLQh9gkD5rf9c3hoWo4q7wtQGFP",
  "key23": "91nWE7tAvDGMBk6wutyzZAjXfe7V4Cz2ed1HNRQV58596akdwmqUTv3gmEP4XKPXyxqUbwzb57x8hBYhdtRmKC6",
  "key24": "38SjSAkTZkjVivs2CPncu9YPCZ4AGrNEbY4A8q6G7qMwjFZcMGkaGeN96dVNJ6WXYqLjxs4mgV4WkPNqFzjmTSAe",
  "key25": "2qJ9QTKbTbsBBd5AKqB4D7MMcmPKvJs3BCTA1bWe8ZWN9cKx3FWmbeYbAdNafn8TpFVw2bmN1fMC5cYKZw74DnMU",
  "key26": "3uJc6SQZEFVS2bg2dpJUhgHAo9wmWbCQyyxwu5WeEKeaYVrcX4DikhknB1np9HiyXaZuNAqMaVS1jFKZwExwdbv5"
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
