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
    "4rDHz2UHYTJXi5jQmkQvYQfUnH8io1S19SLesWqb7iaKfmzdJxMurwpLBV1Ji223MVUBYXsZBBcXrbMRtEmMBaR3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sr4HhFPiWeJ5shcG37ioWhG4enkWpogurS145kBgvLMq5F752C7oi1wmmcrFGnautEWF2Wx9f94gzdEpHki164n",
  "key1": "2h7p6BWg5RSGnD5MXQULf25ukGf7WZ1VamdWTtRQAWwfKwL4mJ26r9ogpWGAZf97KqvSn1mBFBYmPGrnHJHYRdBp",
  "key2": "4sMPoYxwLv3aSRpgLvZWHH7u4hFDG61WKCwg3H5TVMixHWosMLPyMAvMp6ebnSPg5KrdCatcFMYbi3qzYcUCBEak",
  "key3": "4RD3tDfPoy7BXFWoHi4z8qZWu2Xy8CdMKsVEWWeQXWecVpeEZwUrPUy7Qw5rypVT61HXAY2DtMoARLUxGMiiLwdH",
  "key4": "3bbEBZpBfQjX7yjZmFSTJLUUuMCC1dCSXQHaR2CrCJwELj6p4DUhEtJd7tSL5nSmgd4R1VYeeQVpu3msfDkFZW7d",
  "key5": "5vgFaCvejoxFPZro29n1wzPnzZxwDaZeV5BdG65VREfRR5E3uQxQHTeUFwgePmWSenWxYrbTaLtJ6MBeqHBSZCF6",
  "key6": "5F9QUpriBis31jzSJiCjb4yEH6LLAzCf8YMKc2b3B6hvwXk7x8Mit2nT3ffS1Bn6BKJ31ah9Be9dWBCoSefxXsR9",
  "key7": "5WHCFUtyxJ1Ks6cgHxpYgMwuksmhurE4ZKWuTU7N5T9P745GNRUptpYeoXv1bemdcDdT96PGvQBwTCk3uN5QKBCz",
  "key8": "5jvGFpZn7K6dV2CnzBbX3RnyZqLzFvW7NtzpG4yRr9QeJSUKiG4fext9qYFqhh2UzLrZMhj6VMGi1Pb3ocmZr5Un",
  "key9": "hpUGzoZ7zSdyhPQDjGsRxWAZhPbFdZnAeDLhhfjRiBtcjDJAf3QRjMVoVM8vixECXXtv2MC131JEaPMNCSM45ig",
  "key10": "4AecvYedPfCy2iHBRtYdiPTMpvsU82nrFeF4iSGGfghSTFDgG6PigLxDBKY2hgE8riWesNwexVzuwHMZnFNiMBBp",
  "key11": "iUyHCDAXp8K3h513cstvHptoBoGLoXe2AQi7TEbLQCpz6vYzZSuZLnTh3nyFmigGjTnrKGLWhFFuDzDtidTxsXp",
  "key12": "29eBEjaebhqz9oxKuv55AnpUTzJFQA2rBs9QcYnuowLFh95mvm8J8SidSGGucKEHs6DtqtDcg7Kzp6nq47zpxkkL",
  "key13": "3mSqrkVXhvLCECLxw4ZZYuNhTZzqMvZ3a3Nn7J6GJNPMJVw5nSB7XnJ7wiLHxprj3RAkCXM9TUtukiL66ugWmDv3",
  "key14": "ukWfWb6jYiTmeZaNn7u6gALCPcQTp9iRzLVm4t5NLzpJfkq6YWf9Fik7qc5nD2zCo3boL7LyvvCrZeSZtmAZmP7",
  "key15": "467xp9YKyjQEz7q5cLu8ouHtpiyxeUsJ2ur6fpR3WbgGPmrZhVLxqLAVyZCLqjWWuWiPGT2daujujTTA1mreJXyY",
  "key16": "4s8ShTcKTEcg5Ah3GQDRvyz7JNEVXC9ujfFZ6Mjf13bUq9ZSwNQXix7DmwvZynyqMm9yN36CJXhxJuUs4EkaDaV7",
  "key17": "4bodjGTLu4tH2dWvZnj99wMzMtQvbDtjTKBLuWak6nUDk4tEucGdXG3aAuYBU9ovBgiei3jucbuy6Hyc4Q8eKXj8",
  "key18": "VACgXDQM6df1SNrvQzwSo5XAhCviLgF2hcxcgnqGTCN8p26AwCDRvHbf6MuaHEn5wgxDKekTovqaHVEXsWRWJ9D",
  "key19": "3PaPbKUo7aBjCKV1cm6uyqR13ZFLVgXbBwt8F1YCF3kjaU4hoPyzKTZTvqV4vQAisABm12hzkKeWmtSntn47iUQo",
  "key20": "4uLTgDUiemEeX8qUbcFqFMPymtntavRVc9MgX4Zvu7J4CvcYo9oP1BDpNFnKHqXSyv5W4EVVRGVmvgteaZtm86D",
  "key21": "2m2BFGLDBuFxMS1VJoVx4mPguRENRbCMhcVYjfZ9oTs4YudS6FkZB35oxnVd4a6iVo5BjDLfejsTg81PzQ4x2BFc",
  "key22": "5ggEk3SgL8bgZotWwu6HYiLqbhzbnTLWwYaXKcd5MriUzcV8MNtz3yaDrDQvjY27pyrh4VcKtLEmpduKwVpDFPeD",
  "key23": "4mahySSuEtYMXVtxPasPhgjoTGSMLtyBsJ5numvvkx95RpYTUAvEKppLoju7Kqet4aimsw4a9FgqStdzejxPRRRW",
  "key24": "58SaHApnGok3ZpvgbwLVUPtTaXmAZ3bFoBnvzymScN2FD8wYCftB1WeRd1ogrvPgH8wFU45o6XVQzDTMWQJvy9ww",
  "key25": "5QA9rNhTR4boTCfLgkdCcUNPbnVd2cnwuMqDwt1cYJubBHb1xLWWk5xxhQEYw1ZXu3jqLc7FBVWVNedZ8Q6Fmfkp",
  "key26": "WMrqyN6t5VuSPkFRYKdjSw9L8no1CeZR9xTk8UcxdPoHLKDvyVWrEoAnzNgUo45MxzEmEiurttfKYA69EDrgt8M",
  "key27": "2ACnsJm192SVQogL1BBTaVpzqHyQiff4NfY3rFyH4xjBpTRjDj25MoozdhUDMvkT25fMthEoNyLnHsdhoM9okwEd",
  "key28": "2A6YxuJPW9NXWMCvD223aMUhxYCbSUDszmETzJn4F4GneM2GFuniADfWHxunMKdWyYt4Q2yNfFRyVYh1psg3hXcG",
  "key29": "Lj1MxpSKSZ7SMrVCQRHbzsebB1nwas9u1WDtBvmrEh8GokNDQBS1jPZCpAFqtkqXd2LxPWrzopEwbeSjefGHcTM",
  "key30": "65EQ65FaxfLhu3MBghnVBFzFBqeu8z9UEysJpmpwkRFa2NHh5jWFg1eXvYgFR6XXBjwUbYunmN2Eq4Nxjejf189m",
  "key31": "vjK81ZQu4FshsW9jLPXAA5mxpCMZ1yz7xS8RZJtMUXns63F1Kfr51TLGKkxM437BHce2paK9qn715D2fRAsVZEg",
  "key32": "4wmWxcc4Y4TJYZuUWPJXBoWk3b1pmmn81i5u3sR3rujs2UjZUxaQ4qZmKhcYMAaAFpe9oSdxzHKdssFKBLZBNSwa",
  "key33": "5EcQq43XGj9yAtgiXdr9VpZqKWvxT7mvDzX8eFmVXZkTow6zPYUMjMXHK3wtMtGw8bhW5DHRV4UXPoFHgdSPcHwU"
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
