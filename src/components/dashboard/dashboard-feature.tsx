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
    "61agy75tKzRzB16Fzx8TZSDPVBsSxZc6dqDXphCkJzxTHGTGpjmKqDV8SYZTPp59iRzBB7xUH7AUWZVCZfmRMZdq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43zQAVzGMqCjgrp7VrpLVA2QGN4bv27iS4jCi2TkTyjifYDXXUNDBAJFsBSG8XPVmRVEmeSg1dUoecPib3Fbomra",
  "key1": "3ZVkSQGtLgF216QgxeF5hxu4jte6HGQoA3v6PnvMWiV8JyiSXV3VQZvH1tDYRL8o1aEtNJCCQppU9Fi3nBMEvTWc",
  "key2": "GSM9Z2pwKPuvw3YLrbbQXBadKMuwCKPn4ttz4ECYEPYvw7VJdTQ7cYEkY4UYdDbBJcNFY7hN3YE6K2nouC1JnmP",
  "key3": "4dyKhVnts9cyLgUkAHKRKF3xEXKudRaMu1pjvvufQqpkFBDtafzuFay3wzMoLuRzN5KGDidyUkKWnBkuNNt7t57f",
  "key4": "2NznuEs25NNJvhjHP1yjEZD9HkjCBKKhET1HA9hJDMnFr26edi8yE1kLScaNgvumLaWp8Hg9suwURj6Gyv46JQBM",
  "key5": "3fjQcAKwtp56a1EpmQNiiFafdfzn531BLrA4oXbJxEout9B5uPRs8Q56htLDsNKkLSYMTUemxXpDPxMHyDXbk6g8",
  "key6": "jeLYgo4znP1mfcL9H2bbie2to44aeywnn5rGH5XDwxPqg688rUn9eCB58g7PPFqCcJxrkxHY94RP9yDBT2xVp72",
  "key7": "3E2w7gRQimNnmvihQzLFgK8uY5buJY329ff8jMMGc6rPTncPxtp9UyT4KT4MpySVNGchZL6HtKqToQDW8Ygcahpt",
  "key8": "4AnqGe4hnY1zLNqsiFvLn9A9uGJeHg7zktMsZsgzWFvK37dARU3F8fjZLJeR8UHCUaaRA7mrnNckJDUPK1MbHC3n",
  "key9": "5UwMBJmvRkWPYgbotKsQmno6Fg7pSNKzvq7LWfPYjLhtRZMSMjtqCeoNhuaBtRoGxffi4VEeKGWctKWnK1c4sgaq",
  "key10": "5CFsd5EQXSHPuejkPiA3xxQnLix8FXVmukU2hT9Sbee8usEAJncfRzL6QdeQ6m9EskS5wFGAfAwJWMdmqcgkKgop",
  "key11": "2Y7TXZoxX4F7G1L1TzgE1USPiyDf1UagA9ZY3RcsdaCD23jjBTYtao1yUPjmufEeivN1gbJ2z3foz6CWcMTiAT3U",
  "key12": "4eTFXmMgEGj7NXDX5u7UfhYCMXb1nRdT3u4TicdDqTu9yYz9bh3H2TEUJgA1RXYYBVSpvTqAHatYdDVPwsoRzWLL",
  "key13": "42kPmtvodN45XmEJq4WqnPFrunGQ5DmrLM5eoHJq6iWnqWwu6nookYfRnWbmsrV6cHTCKE28tQQ9UTzGZBJ5pfP",
  "key14": "5bfMxPTEWT9qvGn6Qs7i9eqiP4XhcwceKKi6aVmF7aMMRNWbFaVMb1oiMaFkyMYrchCcYct4Q2MDYgo54vb5eDU3",
  "key15": "4p9UP1m49ZP9vJgqu4d4psCiPofoAyJozWXc9WJYihHyLcg9aR9swpYHkPLiD9Z7okZwf41PsVuor8caFyZodETz",
  "key16": "3hCPSaECL9m8FF8iWEac9xU1fRCbK3gLbB8zBEBhEGaggQ6MXjisTTZZBgcTNqtvJcfJ1Eb4E5HgSCy6EKhxrZsw",
  "key17": "4KWwot7hCDXCPnamnCvqBZJD6EpsUUeiw3Nkz1enJtzBuSikxno4kSJXgdUfwQUJy1CXJUzrvjCA8QVqbwZ4i5CE",
  "key18": "2rfeEJSmWaU6gdDZboA42wbETALPMogjQ1ZMug5vW7EqN4YK4MgTWbkmRNJJMDLUiRKp7JBtgQGfFgpgBPuP8A4M",
  "key19": "5q7VSNgze9heaP2vMXsDmdFNhe6nYM7QxyVT8FYhY14rXZJfehmiJKg3DhWAU53JM9fHFEnaAtYdQFhi8jenxrw7",
  "key20": "2zeL5bdyiXFaC18oaF46rvbL9EVX5BA337o9LC1thwCkxNCrR4kMzUWdDyhv5wtXhhMdJVxt5zYBMKDV3tRM5Y2x",
  "key21": "3jUxbdsMDbKuKFoyRCbwJMZAa9Wjdn5cUdF9J2mpTqXnGx8ytbW7Wvsw9qE48gBhuGsJVxaHRLwqKhTBxPvsUe57",
  "key22": "3Yj66TZ3XQSFJF2yzRx1JpfokozNMrUF94GuyQHygJwmnQvvMBMyLpYtrxnfgJ7ccHNEiUvsT6NrpCeJgCYCAZyM",
  "key23": "27FzbQSW1K481A9gHstg2V92t3R9MW7P5Wg7hg1kArzRGWKfjKu2hvBeA1S62MoY1yqtUv3SAvpfTXNmLn3n6MRC",
  "key24": "41ekfYf3Es2QWvvwA1ZWuo7L4SacSWsLQFjx8ZKMWbMvFcHtV4SWFzPcjf5SnEGQ8vdWBGSdLQqWRV7BBqboVfJL",
  "key25": "mWf6yY2oU7mXPdQmbK2C6HC2qzaESwmPaG6YW1RpQoUruTnTPXt1JAH1UzyNVFaW5isBKvFGyoSU2SncYGJotVh",
  "key26": "3hqhXpPFLwWcziPVPBsRGujQ89P5AHWWrfjBoUvPgWFShwJAKgMetvdqsAq19JvwQrTBKaagvFYh7gixGouD1rha",
  "key27": "53rRcJkH7gpe4sJCYTX6GFTH43AJNc9unfVR1upP29X2NbhTLVeTFwegmQ6dKD7wfHBrG3SBDixTRGi1pnSGu4vD",
  "key28": "BsCpDn8Q97y2wdsJtHg9vkWQZfa8QgZMWd7XCasHfEWrL7skk2jBexZ3qziRpKJv3SHgDSVNFojxGNouKXKyEzy",
  "key29": "5nvj3ZxX4ZxzBi8J9h47n1Am5hQCvi6tQ9Kimyw2KqtByoT2KVJzwaqKM1dQqGbwGb6dUkiSANNB4c38Xdp2YcMj",
  "key30": "2tMVrwgMFftP58pH19oE5Vf8MErniQsCt7Ptzf5ZMsfWbrEMEpag5G4i8fXhGxw2GAmuMc2DLhZz6NWuC8CAdW2W",
  "key31": "5xJdmHUrqAz3T8yYHhXPQsAKHEb84L9XscVuH5NpvMno1arYGw7uFevytmSjwHNEZj7u8SoRzRVSZjXD8NEefFHe",
  "key32": "4c3sQ9FS668hXiwwZtu4s8t3zNVrCyksKGe8mXSyH9JfB7FvrArefXm3CshZ9LRcKu6xFCio4sFhogkvAjP1af2V",
  "key33": "5snYPBeMZo77z4z5bZdaLCAiw2fk59X5VNKoMNuR2MaiMtvmEfy3MTNamVD5g8VxrH6gECfSgsdZzCQufL1n47i2"
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
