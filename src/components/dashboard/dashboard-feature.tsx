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
    "2U9TaFkWrunVkZHuywgCerveg4QAg2mnvwEWVJFmThExnqkveCX4Goe8cwrCHd4YyjnEgagBm7a4DSQZJghRx8eQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FCkwedZeJfD4tMYshPsagEHGNonUFDxGhsGmFat9ZWEgiCxjinXNE4mU1huf5cnRYYP8ayrM77xw3oR4AFbHYLY",
  "key1": "JWpb3g5erPC5hQzQPakckPDiWkLgHbEo6Su1C41YRQqwB9zw8bdLQ9iL8SHX3E7VX2f9WwbhoziiDBnqCrJycZi",
  "key2": "w5seyCFR8kVSJyWhYnTyVCn5KaTqViKnDmtiMVFrdo5kPvks32D138EDzVcqH2km6epPEW5GmCogcc5JzUskpYJ",
  "key3": "3vQjfyyYpvtBEgVizKyJdiBUa1GFWGdQQpNT9mXhsskmUMSnVv1Tq4Bx1Vo284xCAfxCKM9QyUysobtfBVY8rviZ",
  "key4": "5xRh6rTBg9qZuZ5fQuEH9gETpDM549BkUG6uZq6MdLntCVjyeXGUjeSckdQ69bi2NbXaHRvkznrUiSgzJj6dN2zt",
  "key5": "ZpzN4DWSyc5ZC6sitQJ3qz4nRJag9BufdKoKY3qJDptigw8z526Zp5jnKFwFpubMb1hhhdh8MhQWw4vYx4zxmo9",
  "key6": "2Kj1CAYyNpaJJhLzLEbVuWX1huyjDEnSdgSJoeX9BfGWkdLXFdwmoVnR8qmX97Jry9oLmqGZRxDcG3rtMkmouG2g",
  "key7": "5Rcsb6ummwpjWurGqzV9y16KbyvEFoxbQViMTHz2a61JJcVN2EexAWroHFiPPd7ZqgvkHbR3PVEHEjuC1mm6wsK8",
  "key8": "67AKcYoLEv8PNp5XH78dyFLD2NiXLq7uQQWQFhzNYDSP6Qx8F41cQH9RDYoqgKt8hVLkq2eaArnzMyBZPuPChqwt",
  "key9": "iSVw4QEXbNFVZoXPtfcToirUR3YYvne9aZfeaSm3jCE3nGkdXKHTbwyRsY82xr8ZDwvTzLmDqC9Yr52TPtBqSgQ",
  "key10": "5V88LT6zSbSN3DS6ySBRzwGsBGoQtC724ZkwgVJ7Un6d983RAFnmqDsiHzoKMruezoJkzqYKc9RLtkvaWAa9JwEt",
  "key11": "4aFbomUQ8WGAPHxv4SL6ydGptSBpReFRQpQJNrYGB34BvD1U5wUZ34WU75Vj4C5CiVE4e2jSeaREFQfoEXh3w2n7",
  "key12": "2NMtA16U8MqWTSduWfDYyvavfxJQQipWjbfruQQcukrr3t1AoEJxg8Vja3dYcaKdLcDoef4m16ew37LnBDiRS3nA",
  "key13": "5UzkQqBAMQGeLXQtoJBcTwVE5KiGBmZkKrH2zyiFQNAJSPf4BUWPccQqEMFtPnrfn8vatjhQFozp7y5bNcbprEmm",
  "key14": "49iT7adYSFHxPG663Ekz62fMZTGwCQNwjC3pMp25h2AecAEnVEmZhg9vZiw2BDuRa1kJjEe4aqUSjVjFJxW3GQvv",
  "key15": "La2LsQtPX3c3kQXPjjTp9mRcexMw8qEJvyFFEGtPjgLcnZpTbdQDjEJpH4J4MLwQviibH3hirJT14vfX6A44iWs",
  "key16": "4dGc8psuR1ry1VfmeSdJZ9Nnr5coatjcZVVKXUt2RRnuUAhf1KtJvnhU9dqVAgxwUZqFuPJ7Cium8wXVuSydRLbk",
  "key17": "47JuFQzEiHzLkZMgfarRFxMV8i85fqeqZQ7xmY8QW3cHx5WYyC3vKDJaSsfYtyJitMkkr4ZGDEBZvmC4uiUdg7hp",
  "key18": "5FK92nxM9AstjDxFZgmdqaWgQujPzrZ7Vh8omp8R2UDB4x3zQMcDYsivx3nN5iAJc376hUb9AybWBcedeAhi6LKc",
  "key19": "3ygmskHHzt4WZxitm8fs6aJtnJYHQP4iLtGE5VEyCSzCjzcXoujnMgqybM2rnXQTZjvhLsWCtbsGtYhdXmNtwvsv",
  "key20": "2zfXkWqSNowwERiFFFP9wYCFzd1V5ZoRDPueR9j1Q8Jq4rgn6WWPhcNGo7Ymw72EBtxPdWVE9TLhsP2AbAHM1iDd",
  "key21": "2gGdh5teTD7Tvq79fcpXRvEoL7REFQad9aTmXeRuSDkuhHboNboWqzbafBr76QzaEVShzb6f775XtxzZ3q2W8fN2",
  "key22": "2NAhLJ4Qci97GUcaFacAq11AV4HGJxxHJvZoTxWsguSELDBDQMQZFL1WbKT4FYS9Kxc3EJaPqpVTYXCsCaix2txw",
  "key23": "4u8kkyZRpJYKbabVdBepujE99ce48CqdXAks5g5xzHhUzpiEt37t3HtBG7HtL45uoih2JjhH8RSYV93LEQnSE7T4",
  "key24": "2g2tQZPuDw9kV9KQwwUBh66f1tbsouZEHzjkAuhPQXgFsaTwTKXvHZMWxFouFyU3npBYoZC5NVLFsdJK1Zfu1iS8",
  "key25": "C7SJtYBYC8WU3ep9EF1yaBEVVf2QBH1RrH3VMVVix7FSXBDVughRX3FJPmfXY9taiabrGQDKoEMVgwerWqo38tQ",
  "key26": "5wXdUKJqbNKvNj2szjuDA3Wp3MSqhi7ayF9ZLQ1sHeRdH6jUimtoSb3knYU9sSf9Cb5ynbHWf3FHJZ8o64HuVmNi",
  "key27": "4LoN5Ej8qeSJSw58y1gC3yERnAYuYe9Ax9HEgGE9EU3bfPZLYRM9HSB7zkLDNBHu8zgUecNtXDXb912XkKr6kKVA"
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
