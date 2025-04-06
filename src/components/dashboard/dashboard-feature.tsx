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
    "4kNomQAddufpnfTii4nDCH24A1mA9eLFVXPX9ks2VZZTsoMVNrgEKARYQi2CWKTqgNZe9LKQQmHK8oeVGwGtjTvU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mLNmcizcK8vjx2bDyDRuv4F5K6g5ucj39mfxdiRyUEiEso9Nye68YC7fuMUdUpiNsRyJxhGgE5JR5CVi7sdCWcd",
  "key1": "4bZrdby5JxvkqLs5diQHkDopCKM3eeJxmuQMvyQUVqBemZRzEGucB581zXGJVes5gPQwtaKAUiH1NVNZ8k6sf8wK",
  "key2": "3Ck9VJt6cZ44q3z9pdVNwhvuKfgjzRiqFLdsz2HpiENqtvABWuZnHxpVaP9YuLM7reNj2oQxFWSv7gpXSB62p9HW",
  "key3": "GsSxeY4uxar1qHqkC2A6SqwxTPyf3VGc324ggS6ECW5MhKdXpRmCwxjbjiLtwA9JRhghpNWNhe3BGaLX7w6mc8b",
  "key4": "54KaGMoFNUUYC3Lp6nSDFc3DMBBF1VSKeAca8ApcBUJKTfQRcFHKw8RjaoGjtYZrnhLn1pzXzpVEyBGKQrdK73vv",
  "key5": "QPg6F8pnvP8DeTwfSmsW6reX2a4zaJPwAGdxXZzuRwSQQsJXywXRRT5CNx9fUvyX4DjG644Gfgkeg7JG88euwub",
  "key6": "2kyKk9xJGVCYcXVfjzct79kXJKgZroYHuakLqNLKiuoLZy1T2iWbXihyPFywCkBTHiCuhDE4tqdAw3kFVr5D81z5",
  "key7": "2AqTdqX4yxcYiKBqH3CBMNgQmfGaMc3f6goUHbUxJz3J5M7fH3r5sPEUnJww7ao7bPTtZkUBHmFJuTYCvwKs33nk",
  "key8": "5DPDwKLrXsMTq3Dq8vytiYWsVQCZUNTYbrE2VM3UaSiFkBiwSi8GKdhyUFLpg93H2GAcxz1wVYpXt3Yc6vShB3NR",
  "key9": "29BYiZU7EuUGvpFag1pEC874xwydCTrQKyXbvMfdQNQbqxm9tgC7U5mKErjsPY9pB2vGoLdoUXtEvofserLTFNoX",
  "key10": "27Vwb8ACfJV1rTH2ZG8riyojasqkXWqdSLENYryEzLL17oAR99Gh7LJaZCseE1ZCQiauPjSRnUzthNcn6SfCCPrM",
  "key11": "4yoE72qGTgS9vJuhgawEVfZEcYHw4M4mirQyXmhEiC3Qux2PJL1hFqMjn1xCX1A1F6kQ8HhRNT4miNAfjpBVR9Fc",
  "key12": "iDWhNbj9GSf1ke6autezgW41BDRfLZqR5MYJ1GGcQFTtiQ6urAXHGV7RBDepAuSND9dXkd6NAJ2JodDaxSqgoRW",
  "key13": "4AQ5zfW7xdDSMzjkmbnrfXuXT8wzLpQs5d6UgDW2fFGLvRLYjxqyCJ3WnQBLPz6KqyYTvz3sTMQ3jW4E1tpQhhqU",
  "key14": "38BTccyEPkpKGufXEUdw8NweUZjWCBfGQn15qA25aeqvzrMutVE4vqnH4BzK8ERWZwcKFech9L4121bfsnTk6Aqs",
  "key15": "4dGjPFEbfKFMpQoYzNtwo9bVAZ6rE4RPS44TqwxSUALA3T7xH8mFACzZqJmLAV9t6XqPWo2WE4sqzFWA32qML54R",
  "key16": "2UVRj3g5fBDoZN32pKWzExAv3m6tEgyJNTUUqPAVN7xLnm9j6NW1jsW2QBn8iqZ9Zmv1LWgbtAo7uYyW585nFszV",
  "key17": "54ytNcTUwSNMP2MKneAjLLehgQCGEcqCP7xaXFdtTJtqg2QzEVPshqLiyo3wuiU7UNTd8qpx94361GsxVYEFv79W",
  "key18": "22DMdvjRdcaNq2ARyyBmEKW9dLfm7dEc7LydwcTwAuqQuutuGECQptACr7KgRrdZeVdHoKvtTeSga227RU4yRdN3",
  "key19": "31dVZD5J4RFfHToj3CEnf9ZZTePUgCqSYWwcM2rtXnnx6QYR99DdENMkWaL3ocCJd6mg96Wk1XdW2c4niu8shVnN",
  "key20": "yJoBFPHdeeexU2jVuZCgeVSa12gUBvnQL6FuC6BGjzZp5V6EddLNTyvCLch3KQyknzX4NhTVKTFr1zXhg1w9E6W",
  "key21": "4oTNWfhyHnhP4zKs9j7ji8DiKBZnayRukWpwoTb3qa2wRT1czPN719PmaNAsyn6SegPiU1FEqb1nTwjgt1i7qj2S",
  "key22": "338n276h33hLxB52cApGhhLcxn43cLysnwzKZXvDNpqyWgejPa2Hjkgcezg63XKkAg8go2u7v3rDGJdMqHcoKfqz",
  "key23": "4MpVhYdCrRqnNTxdYRb4rq5ZN3HtCz8Cd4YVJ4vvTZKywSq6GJbo2v4EqyurSQnqzBmZ2LHLMm7cXsF7gwXrDhyh",
  "key24": "325jmTmUgaJkw3yzMtUxjfNkRaFCnnQwKGPBCpxLvNiNymyQEjWNwxv9zbXnEWZpi2gRbWWiZLKZGVqmGdavvFYv",
  "key25": "2wrSSMNoLPryhAqizRuqSeNE1cnwT5GjZzwHETdHrTPPprnrmmhvLE8XiZK7nFKN5nTCz6mtr7nwXJmzxfQcBZVr",
  "key26": "zuiKFKK2eHaZskZFqPqNX6TdmWhtiTT8e2pvW172s7vnCR46LPE6CnfY6HTbnn1feFQ8Etb1D8tCzfAp6uiSX5w"
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
