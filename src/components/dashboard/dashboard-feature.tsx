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
    "5oEMjL6CFDBu7zUDKVujUKvaRiEyhFFRHC5LP5VaVTALT1xs7owmSGbt7aZaw4CKuszqWvEzNdY7fy6pFxveeF8k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49GRnoVjJephvLTSArx9KXPbmxv2qYSQRRmxfxFhZ5tnbw5itw6CiK9KEQNtWg8cQuGftbPUm5EVhXgNX6W4hods",
  "key1": "pyYxA5gK46RacxVqgTtX5yrQVBhMRoBvX13oPxz5HGTRpNVGPmqNSkF2PgyQvXUYrRLvLZSpoYAHNs5HsbULeVa",
  "key2": "54avPfVznc67zyWANgToVk4TZ1fpEi4PGLdrNtypbgQSq4YnPP4PkLRQKXdPN5DX2ZNMGkpwzKoruqLVx1WRZksH",
  "key3": "5qMH4UEu4GGy8BVF9CzgtYRULPoWKodJmibLKCw8gZvRhJW7HMMSQWBh5Sb8Gu85P7wJtm1ZpHqqtC2L5P8wgc4T",
  "key4": "3CSkkQotEhe1H7j8oHzMwiyHZieoTZwtMFnoR1KpPgJx78ez3wHYt9MMZiHWjVniw1mryBNJ2ELHtv5wNzoBdjyd",
  "key5": "2V9ww2uqxpoWeWWVgzVK85nAuoeCJs9QvwVqU4guUSbPx9oKFh9c1gCeKjbP1rS5DzkFYvDkiNVDxjcm947f7doD",
  "key6": "5qj46zhyPd6avQbHVBUr2rAYf98fqDRxRZdK6cpokefb1eev37EpXariG8J9vbX1ueibREWnfYMvuf6wynb8PPmW",
  "key7": "AEwypbzxeWV8zuWCspCW4TH5KmEwBLgXQEUmPr1yyMoKFz4uk7isjoRH1hswJEXijvh3uNS9H9ocCVx4rRikkbQ",
  "key8": "5gif15nprMGdMgtR9Hx6sC3kLvn3ZEz622AJ676vcBsUbQ7AFLb7T63ymuQnXcLzWioQr6AD9DJR9Gv8NZYWskfQ",
  "key9": "J7xJXEeTieFKsndZC5t1CajcA7dZMs2wn8mURgSnrx9rtfpAcxjnyycY4A5ALa5jwS5K8Lv66RnRZmFWDiUp9q1",
  "key10": "24RrKXoTUaMgYPnZmoNWAB68waY3ocpRPq613KCWrGydoRzVYcVgp7Sgo5yyU2U85kgaJBDWpzmwSapD2e9uRtte",
  "key11": "4hpWdMJgkYEyppgRaHbYCcDVJDj2r3WZRBDy11eiWg4xXM7DdXgRuvkq6viQecChAnuz3Wk5gFpoZMtebGmgD3xx",
  "key12": "hRQ1HDdyFonCvmNQwJxdaMzck7iZ9MrvgTF965nyehr96nF1AfX8SK2fPYR1Fyv37UFHgCGN8HzYkLx2si5hPma",
  "key13": "6u3PPzFdXkHzqijrnNfGoLUt8anCsxBgUd6KwhS5YuU555qo9PYiaJi9mQZuJVk8Dv4kAgmHkhkoTJtyPkEbq4h",
  "key14": "2w8vLpXi1pcUESAzKDdc7rEAi2VDMeDk2mNbvCh6PfDxU9ethf1tWtWLaB4KujUqJk2MKKY5fZ7wvbh4kEQPYhs2",
  "key15": "2aXEQuFaSK6M7T63R1V8xTadnP6Kd6ciwi4Ba8AYKxfvsRjRbHcencbTreogH8Ltw8ALW7bPH9S9vo11oPAA7iJV",
  "key16": "3hR9oRSMxocvqsRuhj5QzBJzzgxeBrvfpzaW98FVzn8kmCtMxGd1E7NKxtG1Jok5Tu41SGDHHgS85XnBz3F2kCwc",
  "key17": "5f2pRApnoRzevy2SsfNNeMNCXAsUM8k7xnt78QJhMHQzfa5B4h66zpERysTzXkczY9zQ1WEDVCuQ77ZEWq8hEyeb",
  "key18": "638vVNTQ3sC92YbbhasM5JAY54HRwRE3feeiuEsFFzMQTCgYcdfrH7cVVbhacSsgvUoc9U7Yk9ugprjaerfnLfNN",
  "key19": "4YbtdCRBMkLTbgQiz6isKHyutzBSFTUvh6kJvRUAhcJHgc5QfgmNZzeGrJYdgRnejQz8sdQF9v8pgyixx17VRAJj",
  "key20": "4HuCQcF7WETrJKyqnKgkp5wNdNvfPqcwNy6jcXVRK3YzXqNWJn8aBcq5qaaZzk2QnMo8KDR8LBXddmTaRm3ijkww",
  "key21": "5qZeviAHKh2qvT3DAeNRtvzioDoNGXS5y8CvDJi1zzqkmvGwN1Yx9wTa5rWqPiubv8EknANPhxx3X1hceKxereqx",
  "key22": "MjREJpLGrmn3MEfVfsmsV3mzT9LAX3rqsRqXam8ipNSab9GEtWfttbL6BZ8H1hJbGj4SyRF9Qf3Le17THvukyZ1",
  "key23": "3uAVHoUAhQSz2tQjJKhJ5CoKBL72LwgZLsqZmAu9GPsCAiA94zEVE9hm566grcWRPMv2MU1xq14DUHzH6fMC6Wgg",
  "key24": "5ieRDhcsRRph8XiYoHuYZgQ5ZPDYjE8HKrqgyJq9CN2tvWvsuCxJvYtWtW2dwy2ZwzFiPhWivKxfHC1mzmi3YVWt",
  "key25": "2i13z37YavB5vFUeJas2MxTKATq4bcUiB1szzESRSMZdzNHS91THrd6AuS4Tepty7VN9wr4VMx25cC2vtRJVjyev",
  "key26": "JFCrmPW9RC3t73fRrm95GfBytim4UGGVPhRhJuQdeKSuAPQjKkcCQ9DiKtuJzHacAyfpkqz1vbhCtfRD7uarUiq",
  "key27": "3gRrYfTuqa3FHyrpkRDVBEgYMJyXgwTr1WxXFEXwmxSDTj7gWaKPFHhrJT5dK2WhBKdbbhGm62hjmZuNyAJyHZ5M",
  "key28": "3y7JywdBVogX6efjDwdHYdaLo72ZDK1pKrFMew7rsTUDWAXMAyLuNtaTnRsbNFG2So8fecisGPL416Kqd3PqvCRY",
  "key29": "56DDAMQs4j3ATSgyebF8MSMNZBfWLGxN4y7kCdNLg1NGzZTMB9VATKbd5YBnUPR15k92xdjT97BMR56YU5D8xWzA",
  "key30": "247kCQneHPzwhh5QoNSdzqzicYL63ZjUN8LPffPiowegueJsydF9Pc4jnEhLSq76Tsqq71vH3P31aMb6WCseT17V",
  "key31": "51HgkELtkUcWQfACFaNZXdLDP4CUTAZxCGdARGTDptgQ4C1mMSfsdjtSAXc1o9x5CyW7dBVHRBjmT9jVoYitqpeD",
  "key32": "5h87KTgi9MQUWpWGWy1cnGWXuU7UrvDfW1kFvEn7pGgdHLYUwWjTWDzUuKrePphuMmRQd1XXy5qskaVoP1Qtyp72",
  "key33": "3JynXWGqkzV5m9rKFZ5UmtLtGCBDCFQkdQ9zCLSxksn9aPbqBphSrAGaMzwMJcrszGM84V5P9ZkEB27bYstHd6Vo",
  "key34": "3EyqTezcNzj4wRjmC42JrFD7SsCzYLAyAKE7HC5DcbAsUHGPYNfWCcDzY5UctDyvMgbdMbKT4cJqgZfrQ9vPetAz",
  "key35": "67DApHwcaBbz9g8ATu9yJrXuQKfmypPGxQqMqp4xvfAaNT4Q4LSpVu7YputHUoz5TypFr65gnHFrveN4Nu64Q1xL",
  "key36": "23HC3gnTyVYa2a4ZUEWuEC11MkiiP5wdPhKM6aGQauByHPgVtUo1aFJ5GmivAC366MjA3YzNTWQPHW2x19iGJMh1",
  "key37": "4rEHEdFx2uzy91NWyf7UeLhpzVFJxdYdtsvxBURPGVdTbuLvpd9a8EJdTdWnZeZrTEoQDcdSsMSW5tZ7zoxf9Eya",
  "key38": "2RrTQFCgLjJdbhdKXJdDHiDD7QCE6K81krFzPuX6o5dXE8tsBwgpNtqhsRG9zPT61zYrTwsTZwpkUBKq4P8FbaQA",
  "key39": "J6jLge6y7ZnTk2zJMVHVNtLxeZyq3jbdV9AUgt6W8Zm6U7tWDHHpv866MM7s9GwLXjLoEMdUhWtiyNUTHeKTeJn",
  "key40": "2asMNRgWNJKdUW6QJ5bC9JK4nwLBMz9vy4X5FExfndR6CtCfi9cYHYSpoiTdcmok3yATNRZXSCpRWP8mawTMx23d",
  "key41": "67EKu7qAuXkofoKxPGC4xmxmcMj8dbvP5JfkkrTCLfo9bajYMa8hpYbiSQgPvxwRTfXSc5dqBAyaNYAcfUPiVqEm",
  "key42": "4ssmEpBJm2psuN48xFAqYN8n5DwfctEyy88AKjr7Ev5MwFu12cWr86tREEk623mKeM59sRxJfJZhE9KMRiVCdYJ9"
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
