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
    "3bDVYXiSbyXbJxWQm8F8BHCKgg3GuboLntW63aQZepjdB6PkZsaw5Xdm2uUhXzVqr5pznoBawbtX7FRQiSUYBZJn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kN9ifweELjXkFUpCwjVTsj1cRvKJMwyc1BP9f6imzPxv2oPHmMLvGo7z2W5t2A254rcEeefRYzJ7W1s8X6x3XMq",
  "key1": "21NsGnbSuc5Z87i9DTRhyX5rfUBT1uNEvyt2CUvixaDb5VYj7yihciGLoK4K82ADAUXHMJLw8iqc7wgxLgieqWjj",
  "key2": "5HB1RoFgoCb7TFttQYJNuZ7s23XzqLSuCYGZe3Y3adWB2SiwG7YbbGiHZP9MMeJoih9bm81TWxf8hJydxFvQ3xS5",
  "key3": "2rLkdnzkbBbdXyYuVzMLhY5UoLfzbWcpHC7aC3oUGngsbFUjx3KxhTprn6ETie5kvjEdmi6DqnbK6Zz8ksEjFz2g",
  "key4": "3AdTpW5Gr6kzhFLxg9GSM33cSHLuLKV9nDBPB9UyXJoiBfUZ4k7TVNSbBJYtpmGLTrAEYSJJvEG5yAJS5BwrG7FW",
  "key5": "4J6hNj13pQkyhsetSsEb5wCzVeL65Pd13yjMU3beQJeg2pebi9N14L6nCSi7iUy9yAY8bBumCJ2DiwF81FJGep7z",
  "key6": "2czzzRHr7RNnMDfFMK9damyeLLxf2YUvSEoC2DmvvonaXBTMG85ESkGtx5WHWp3BsnFspGDytVYTrZxKj5kPJzbC",
  "key7": "5PBo1AZo3GXyn6PLLokyjVFJ8UJxSnWxr639YuntFaQDe4oNzPTpD1WmT5CY618EEUY8QkbQZHbMPhoTd9XDzqTE",
  "key8": "4tZJc7ArQQ4tWBBnrVr9snnYT6pHCQjXNe7ieERJpv4kfYUkEwhk7uaKasq2mJE7vYYueBKAtJfarLL76yhLh4C1",
  "key9": "5HpynrcizMkgWVF9YZRwhk8CkHZijHUsdNcaJqK1y4CvkGakTBEVBYgS4SZS5KwAYgLJKMR4aC9rqSDDwVj6ynP5",
  "key10": "3F78SEceTSpbGgspz58ByAEH35Vaq9TEHWvzXhJtYEGdZokzYrqT6eLL2hyc5gFFc9xGPAhByyHqsTxrmrimqmGZ",
  "key11": "316BG5gkCc3KMaZoFhmHbiG4DBrr4CppEhRYEXvC4u6WTzPTiH7Tmipy4WEfgj2c19Y63BkvprrREprEm9FudGMh",
  "key12": "4Pp14xEXd1VjwzkfB6KW1kGAReZa9mUm8bZv5dRrqm46EMVcUu1M6vT5Zvw7zSXkR5thyMuwoNRNHkcBqZ7HE5Mt",
  "key13": "5FAgGB2Rcga62U3jURRKVFDECmyjePJQCYPLxqiH8Kbge4NVNXaQYXuKosBcGTMoPZFQRZbwE8qKxXqKryckq3Cs",
  "key14": "3SFn2ni7iZhSJJk8kqBg6EKQ4zVhb3k999mFmRVkW9XjF1DBsxxS54LyV5nZevWN8NHqBptWywavvu9VYPsfXR3q",
  "key15": "5o6LLw4yqEESiiCNNuzkx354LAKsuUfVgkKbAPidoXzkGdR846WLHUAWJKihDjabTMZbNQ5yzFD1QYinRNCzhQGB",
  "key16": "3gD2KqSaGPwHryPBuToBUgpDNNiSVZA82ZjepUx3MA5UZVN1kqim2n2zjdMXh2c46ZUvkopA9ukcAJUGEPfGXfBF",
  "key17": "3QrWZvsddGZBNs6guCKZgxYwvzwMCeWAH1c2nYEX6vVJkxfd49Z6SX79KrNjs9z9ZYwHVRQRJFx1XPrQmZ9C9tsQ",
  "key18": "2hppDX6qjgNkv1pppceJvAcxnaWP4RTg7CQAhovMx9Neh9sRHNnWsbTfNJ8GyyDsgummghSGkhDz2DrnsGQGRspp",
  "key19": "4GkNvMLtbZV34CQHbQi1f2W8U95XcXn1VJRaUhNHfZsFNYL29vFRroDC3vPM7HQYpPs7QSwNiAKihkJxVNR2dm5J",
  "key20": "4845EyZQYtAftWGhVfcbBS4PvNebygzRjWK5oz12NPzCCTjLU1QHwuYBAUvSjLVvzTzaWASHaBz7gjjKrtpgDL6g",
  "key21": "q4zqMmKc51e3uac9i8vVwA6z4XReonuRVKS9ZdcxxPPYzouJWivrfUd7nfr6Pg8UwGf8FKCJtEags2MrF5dFZ74",
  "key22": "3QhxTRAp5PTHWJSDExyanoMqPnBE96dVLMuUSdoPKC42XFZbKjxTVNrUbQiFaS847Ywt6Pr7smmvG24fwap4Lm6s",
  "key23": "5HC1MCYGSv8RDGoXeG2D5ZZioYV47o1wRqER9sgGd9AjyzNf3seF9fZq8Tjuu9dVYLbgQ3UG3CyR2zw5wfy7gav6",
  "key24": "3AgWDyMXKFJFnQhV8U9oqQbxpVas36LR1ZAmbQpmPZ7YVvG53jv7z4YwT96GGicWpJpYcg95edhrF1fcetdxGwfJ",
  "key25": "qvn1V6BgGWFhpQNsScvP92dov5W9N9QzbPsc4t9atpF1zmpDquddendYCZCnVfUvt72CxkWQU26men6qb8hp1eu",
  "key26": "2w7ZcyWqeQBmJDtdww2mTW2MDBHUqRFxA9JibXySiWGpMSeXuHYRTxcGMRXHmT9y4PX3MUkK8XdYd5HEuK7JftPR",
  "key27": "4NiT3S2EB3xF2vNCwp1qUwKywjSkJoPaGXUWoHAW7RnbuKke1CezQ9AVBNwUccTd1mE3d4moTQ5DSi3CnxvaNFUB",
  "key28": "4usobdwWjv3HFn8XBncYzbejT9jJLxNSh2Mu7W7qAbrPwrVMhPJMJvaMXcMgUMNLtTxQUfZpJeJSTxWaAzW6fuLq",
  "key29": "29z3F8HNZsCnYqd6nm5BDvR3yyqjmum6LGScDGy7ui6A8KToafyj6pk4kpT8dvGwrFpfh9i4wkZqrkZk4LeFdbw5",
  "key30": "3rnm8nycDZHpoudXS7m1NruRy9TboMp43FkxG2rdmHRZNASmBAis2QhNnDW4LsZ6RfKQyR9SJCtLok1a7WW487sf",
  "key31": "27LJNNcwAw1qp2uHooFtzD5BPJrYwTWD9ApSRbshT3HH7SLpZG5gCVDx89UQPVAUwC2386RQVRGaWvabPor52JDd",
  "key32": "3RUWoPAZ1QGt3M2bSjnyWcPC5pSngubE8f3kdXbiaM7E4jXEKZHAHE1LF8rrNBSkre5NR5ktkgoKkbhy8iNT9eNx"
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
