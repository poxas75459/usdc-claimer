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
    "fXpRTuVMCKhhURzFJNyFJpUXePpXcXrQCvDbvBX9bSKPQXdEWWB8jUpnQbQxe7WpQjcFMbEVf2yD4YSc2wUPKcq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZcEGv7WoV45mhsPBwfXCCK7A26R2MsRRUYDgjnSAHCxPPY3Zhs8f377uqfgeKwWqDs4F5nz6g4uE9J6Rbt514AN",
  "key1": "62Z6cny36LowVaQCAsdf6B5et1AyXK4rB29JeYzUHRLHbBLb6f7Tdesi6qpeqRGDGARb1NzzRMpy4qVHivd4QkRF",
  "key2": "5xDF6Z7cn2Qh1T5MR4bwwqrU2av1zGTPtTEuSPkyRWAYfoKYz8tdRJqkbVSbc4tAejQfLHfCHxatsFs1qN1ReViM",
  "key3": "3o3bw8xJhAcDNTCtx39JyKuWpwC1x1XSkYpWgZRnchmt2RLayDrUo3XXEqXmaJUzsGmBsbc4RuNLEfuCExKxHjJL",
  "key4": "e9pem8uaf72SfgRVfhEcq5vUinsySEAXXKGjbbBZ9ZG3NLkmuBk2pVuE3DjtqVak1jgmmtnZKkV77n89Riad9kq",
  "key5": "3Nf5Ctz6cR6v4bQ3jh1oSHJJYYApYQXEXWwwUdERyLPBAPtsXHUHcYNbCCPVSiZLpHguB5wisrCY41kKjLvdfF4d",
  "key6": "2eqfBsjdaxpQEeJgRvxLCGKS7AA5UR7C2RfLJjeHdGuegqUhYNnjbiRDpVP8mCauAaUB4YWFRs6C17jDbsFPHwzn",
  "key7": "359or6zxJtj28MjbnKz8pNUwPRD2BUNxMUHUUXA759KqQWJyejJ1LFF1PS5sKdQ3p3AnhQMKQWnAKEQWv2NuSNkS",
  "key8": "2c9gE3prsDT7u7BfrFsRWPfMxKfKgKrVcWk7mvTx1Dss84CkhpjLyhJgTutuDNpp1Hn2yTPa6LNjUCezYCSxLKCm",
  "key9": "3bYcHKN49kBMgVhUxQqgNTbrMrNs4TfS3qKwyuzsrDd3i9LiHJbq1gM5tfSaqTUhtK2yENkwVzTWiAk9saLXiuRw",
  "key10": "23W8M19dtNaDoLtHqiuCkd9sKM3fw5Ka2DrRJJtpVV11bygffhVPrPRrfeHCBkjPPoWA33ik7FTXC9kJyjXfffJT",
  "key11": "VD14XsQ2t5vMuHVDCYhJ3Jf98sjE8kF2drBZqF1rAUbrm3PLpp66AKkiEybfHLfbJxeoWTH3ozatnnzzASv7ySL",
  "key12": "3pWRgMcktR4uASzKSGpKvVtX4NK4tTgwXpvoKuGqJ6gSa7E5wcGHZFoPzseUC7iGoXC9VqmRoPYaYsQHXtFBM1ia",
  "key13": "wH5PeRmXqMWjD28S3toXyoSVWEwtpQHn9mgwZ6UpLbpz8QuagLqci5M9bo9ifrH3yKq6uEH8638R4gwPmy61wYL",
  "key14": "5FU9UtAYkFBMbp8iFF1PXuK2mUfDPen16jsFSbF1FeECWZsnntaJ8iZGtWDMhGPD6h4qtuwbEEfYMi55yY88iw5n",
  "key15": "Qkd96qbn27b5JdqoxkHsHZkgRxABWhBCPykMYX1RUCabTHf1A7WqTLKZy3CERwWLsLqVDEpLu5RzUFCgLPZUR2T",
  "key16": "3J53NbZa1NKqxii4icDgYzuw53t6sbTFuEu3u7dd8PwD19uxDRuemKhF3nvCSnw7r2qoLTikfFnbUos3vg7BJgoJ",
  "key17": "8VpeyZiTdsaNKRpJe1GEgNwWvwnLNXVmJfQddCf1Y9EyaxA1oy1Rg6m7CRSE1kWjqPyX6MytdyNQMUgodLtwsqf",
  "key18": "ZpV48CsUVZjuWUM6vP345XUtCrDpKK4pf1fT5eEq4cw2LaFxWSHSnFsBscfcfqTQtrfMe5LuSAJUFcQ8kjyMkdo",
  "key19": "4DRuQ3N7UXtmadj56Lba5SYRTkDQxUBz3LKjGKoJmcULQqzvSZxzojUcZYrUwTnYb1nMkXrMu65Wqf9P2NezAqRH",
  "key20": "4LW2soDhVMn3wX64pchpLmqEPGAJBznsvumK93zisZdPW4HbvxG3ejFYH8UwpwfWaxYwmB7jFpXcUvVZxC4YRLNL",
  "key21": "4X8R5Y6qyJyeu5aTARtwZsWAxqMVPwBb5is92bEQNrbLCvYRvTTGVBeRyt4aLxkEakcU8f1Nc2k5QpC483iYRZsM",
  "key22": "2yHkvTtnvyzPkLhtvY7KJAtwoWiM4FgsrvqNrKrAF8PsLSTeWaPEQXLS4f1EHSfZ2p9FdaKoUe5V6NdeVPh9ddLG",
  "key23": "4iVt2q45u6PsUSvj2jryBKUNRLEmi34uJCAaNGw3ojVPQu7kUfV7ogUpjdXhXfAxdH1BASLKajXRxmfw4eQcWUXm",
  "key24": "3DC8BLCW2bht6jNvPWdSiu3qf5bnh6BMiWg4ivwfwFu6zoyyHRR5wB7LT5Ui76CVxNBswGv9bUJSjmtiJKQmAVUX",
  "key25": "TbnbUoKfw89douquhLryJ8DCPrHPb8pJksZ5NF7Rz646NM4hqw75vhhnmfrnMbwWCP8tmoT5nBKzXnSn1ZC95Qz",
  "key26": "34FxifRGSTgdg9rHSXiA2FZxoKhaaN81dRXNX1Q3KVKw4TtvAeWku5eDPkRqjmrYk2a71fp7tarrUPJ4E8N4jr19",
  "key27": "2RFwfnDVx387ssTtEipBttt63GjUYdnjd5xYtxNHacqbZ2eaAKxFwRfUy9JVDYhi1Hv2ffDfE79tJfVXMhWf23GM",
  "key28": "638Ro8KLAboYohF7ejRdSiVXCwN2RbStCQyioHmdzo8cFGXkwwxmsLdmb2X27ADtdPW9GsKFvvvtqhmNMERJWdrs",
  "key29": "2D5ZwjiuP75YcatUZ7wDkNNcvzD57kNU8Lav3ekBcCo66WDttVegPCFuP2GtdXZS3sqAomzJXnmWQ4JfjAdP6a2B",
  "key30": "5i411USJShnfWUQy4CMTMKGK6v85TiehkvAab4yq6UGvvTyHD6UKUrYnumsbiqG6gzxJXwyWs1zY8VSD1arHSzy1",
  "key31": "3jegjv5gYaiCiKAJ7SVVMvfDdeQxQRrnmMawntRAyMrL8irFCQLrAmEnPe8PswKjFT5dYiFYJYTpQt6zXxeMuUGK",
  "key32": "127nmm7trfTPN1KmRrCVgErkwwbSwixaUq8HpbHCYaN3reWBGYfch2x1oD2fYj6TVccKZBkt6Hda1CUdUFPraDj8",
  "key33": "nPaP37c443fQcSmZv5UoBxdXFimC85GJL6Ct71oAs8SnMrK3URtCbDeUCp3CPcRZwPgjg9xkmxSEt6cHBeCFzy5",
  "key34": "2hSCS1vJvimZCMJJiexdMkuKbeZGbw6dH7kSfkb8LeiVASc3EAaDuvgcZrno3WyUnhLo4DVypAbK8MTA4NfdZXZW",
  "key35": "2PjXmyFpcm7AiTsXMYH2aCxersKSqeE8J7bau5u884CPgAXem8azPBqcgvz45kgAvRdTmvVygUC2xPGopxiAzjrZ",
  "key36": "4goaSEu6tAJ7bdbpKByFbYaTnXPW7wcdHDDx6kLum7hYPe18Zxs91cpedmtS63N96UjdjushJAucCfbXyjRJvHo1",
  "key37": "5DPmknRqvPgPFtqt2rXvGyoGV4kJvs8gheuJ4x6D3xDYx97fwxBKsochLdBvd9XVDmHqYGmBsDghJppX5WdSvYUJ",
  "key38": "5oMWD7g2CGrCybdf8Jps9UrHhEZieguK864VmPaMLnZMVRV9xc57FmCAJZoS6VFtMGCU9oU6Q5CCJ8QkFMN3aC5s",
  "key39": "3t6w2Aszz1MnsXHd8aQjE6Jpy7LeLVuAUj73jhn1jxZv3zKiAA7bgXjdckcbYwzc6C5kApZDup1zvjtwPH9gk7Vu",
  "key40": "5MKLKTPuQbwXPwKYog17i5sTHHgcC6P1EcRPrnyc7ht6BkhUNriaJMYHvWARiPSy2U2vwzsDSJcc6bMkHw8caGTn",
  "key41": "fbww1H3eaM47aAWyxpcHD7ZuzYJdcX7nS6rCjwrD8BvBPods6xWnrxGFpBfTU4E7T1ZqrAGY1qBWpWytHTKVDc6",
  "key42": "KLHebUU4fwiQPQaqfVEYNDExcuYUsFiTJohW2SehUuw5WBpKPZcA6KKFXGPUrDxtGTWwpzLviuECQe1e3iL9W9X"
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
