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
    "3dpPyGjz5zc3E5Euvk4NVN1sg5qMaJbvA4tBrEXGJAPTDfNgYmpVy1KV7vCkhjdaUXvk4MCCxAmV2LbrNbhv9cYv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nJFF2HkdcecxkDV1gVbGMRdCSDTqjdniTT6KNBp2dzVJtrudnYrU3oSf45XbM4LagNW7dtumKxg7TSYvnLVhdiy",
  "key1": "48M3zcu92v6mt4gFjkbp7C5ngAhVSQ6WoLbQzfKrhC4N6Pz4xxA9bPMVaaCjSu77twwX9XF4A5NsY8r63E9Snij2",
  "key2": "2j6fKyUY1yfyGBUL3QhLeVZCLsqxP6yeSbuin94rH9PmE2oJNPXSRFB7qTKEHE2ouphZiybzx9HXTjWyLDYZGtff",
  "key3": "55WWo5nNm4YPmkfNW64D3hQhnGispJX37K9Npefn4GukTwMM7afY9mteTURRZce3VBcoa4ke3XCi9YEsUfk5BSWE",
  "key4": "2AYknAeyqd6UgtJGnWavrZ5MMUKb2akZBgezerWgtPJFwR7P8ycxZxgkc6W9LrLNE2NYYR7BxxFyJvy7i6pdwaF4",
  "key5": "57HMFjuYEKAsZBFJLJVc8GiatybuJCJa54zuEGprxCyEXDDg3KMdCXMTZdMtsexBhn9WwSUNmytGQDsrZnRhnmLK",
  "key6": "3pRmDkzBaiZSGAnPLqkWs6c8SozhyBHXnhhgDSCm3TRdk72mSa3wxLv7d9E21ppdSAYVn5c6L7PQb25gMkzb5zZm",
  "key7": "3HJN6qAJCiXqNQLbDSZXa38fMmdbKgLpP1iNP3boAqMsseyQ1hwGb25PW744DzhAJPRPfS9VqhE6Zmgqb8EudVE9",
  "key8": "35gStbvzgcmJAuUZQRQCmvETv3rBZteECCyD3trygBHyyVXpQ38pDeTAooyYbw8EAVhwKGaENPG8JDFDHGiN6sXo",
  "key9": "5UBFx6jydTWLqNYViZgLFkwwYMWD3q8bSSCK2CyjSSnZdG1bdL3ce8HuAshD7WQn3H7E5HxuY937Tk7hxvun59x3",
  "key10": "5h4a9BA28idTsLwoXV3EKAto76AYtQKVqiem1qeQho8dak2WHeRDp3QiFTTpJJZziauf6PhBQtJuuL5ZSFwW8DhE",
  "key11": "4FQjEe3vN1v55eouD9dEYMi6BFrTN65UFiT5tMHtUNjf3TpBASoqAG5gzfC2kCAf9xnDPJjsKwoQ36QpEPE7oHxV",
  "key12": "4Y3F2LKovXnxGWV4RUfmyhxJ17FzPaom9o23G4TG6zeGYAqvC7a8wz25wzN7TPGQccuozJjZRVUiF8GLu77PWLw9",
  "key13": "5oGMYvhu9d5vNcgerGSyRsN5iYj7pZwV9zuxmpRkNZR8nnSRx2zemk6QaYfSMWeN1qhHocs9QjLLk2bUSKvUaGJ7",
  "key14": "55FqkJyYVPPfz8ibScVBARMYjnQeUuVfx9d1XvRTQk4AqP9NDP9Bp9y2fysvtt9NVjQbySsbTdS8duLscFR21eMH",
  "key15": "4fzB9tLVAvxkmQuRoFM3KQLugAGgB7ddJoTPgn3KpZkbTR5BPkqs5QhCs9DwQf2tk7aCxo4nh4G24VSzuqFpDwtu",
  "key16": "25y33vgeUDckHbTRWXyZRikoNKp5NPTXtqtviUkgp34sU7iEkN3W7zUC4G6b2cgZFpyv15QEx6GcRHxbrQhTRc32",
  "key17": "25edVDnKj5MH1bCVaBBwt1PPTZLwLXz4hoZRJJFasMMkKHvnBobqfxyhJWKCqTmJ6R89K6UTDLQ2YTiqZqnnbpnW",
  "key18": "4qCZXh7c5o9y3eA4q7NKYPnN9gJSrQVwg4sifswN4mi8vFwwQDKnTg45ACzantEh1LFj4CLGppU9ZMcvv9dW1ju9",
  "key19": "51eFrrMLJDYrfeniPV3g1nj3itHonAgLbyqEkKgbSN38hnthz2eRGcxXZnKRcdHGze5DE7AAybthzRC1RBY3f8cA",
  "key20": "5MicEVkTQaF6TSgKo4PPwMdAtPGFdii6vM6a5qkh538bBWEJGKP4s6hE59WawRVTfucDpDJYKfKpWhDJzzkWXTiU",
  "key21": "427QRr6uB5ZtCtU4xH1ExDqvZBn1D5491jR6ek3Dbtc6o11Lpqoppme2NuzgiqxJzGSSU4Kd5FQsm4qs67t7f6m6",
  "key22": "34hBPWke9f17omQoKpvR2jSH4TiheJg5k62JGLPyL4UZkHXQwAnDYS37kuTV2S2QJewEBSfEpGZWTSXoo27gmRBJ",
  "key23": "2FKZwLRVn3dKaJTKbJdsnKQijp5qHwTXbHyraasFLtHWkAn9nKvpBUPQ2xRg5h7oxe26yDhzUBiFVSHp3F7qcTnp",
  "key24": "3uEx1GtcwE8r2Hiavgng8e5puzTmG1fcWUVqvT9PZFzrhr1NC9NRruHftnFTf6dFNYEqD4tVJrr7kR9QjkvPQpfc",
  "key25": "8CJwkFmkQT7jt5cLhiypWDxFM1U5eH7b2jPMtHaXicDxay7gXQ9c6zRtvbsxBaqW4LdtyhGPH47pP7kVbrZLNrH",
  "key26": "p9sLDgvVqirfe6TmDNUq1shzgFu3xm3jQtoBqPPs9qMxJ6z8T329k1Ez8TX6ue55Ak48ZoL8qkkDahw5AyfEazc",
  "key27": "sqMHFfhVWEi17QtPDMeJvhzEJPFdeMWPzjPpXUqGEyHKJjm46Zi7FbMy8H7Zy62GMP7E7JMY1fhMXZriNkUNuWk",
  "key28": "2YD55nvdU5f7cgwCFvBuc9Ahxf2sBELuEdYBYe8rQFpDJeJbtchAzzFNwJS2wEMU8f2U29z1ecRNvP6S7RjgFJA2",
  "key29": "38S9BV4Ycdoj9KmCJdQa6DqRnw1RLdrminTyb364neshsCo2xZxvpkUVuC9MTfiPpe8sr9u4kSbzUndcYLrYEDs4",
  "key30": "4L92AQY4j7BLyXqzcTMYge93WvZcYA4sc95CSV2paSJPLaifpdD9zG9NZo47Ue7XjbrGRoQRnjFF7iRjpsTwydBB",
  "key31": "2wVNr4Xsdd1zMUgWyfwKRTzU5yZzZzvs2ytP8K5Upr5RfXPAAYTUFgTKdDJX59HRxEfddMFxtD6yijJFCbYTCQP3",
  "key32": "3T6HZE84nG4V249FJTRS19xV3qx4h5xBcu8ysWnAF8Ti74P6EGAuM5m2iW21WBcckf3TpBopaAs4arMZFsdAPPvU",
  "key33": "5XmtoJRuokJ2sE4zXDa5JzNX5VgS87wdUjhMqya6hQ7NX3LSicfPaLW69uVA1fU6mFSTMRdc8V72XXXAZfyX6dPg",
  "key34": "H4FRwWQRmauLRRwLda5mGDPZqLsgXqStZ7iATdX9AXzCYG2WZmdxfWGNaxE5fmBpsKrf7fSzfBea2dGyB7EdfET"
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
