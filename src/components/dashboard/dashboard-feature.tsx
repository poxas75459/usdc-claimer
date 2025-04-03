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
    "pPVy633FSYsERxwvSmyTDPaDfvCbuup9YG91HbcWdoAbUVfpsH3nagDtrvg9FKDCziuwbX3UfSAuDmooYDF8Hh2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ttzb7VN8YUmXpBjCyrxKLT1fWNmL4sXTgqTo9WT1X5zE3EyF7wB3so2G92NVE2jPd8yZFEgc6pL1sSQMhyrMcws",
  "key1": "66YbAawh2112b3JeMEAvmYKsVuNpmP41zgjdBLAqr28wiPD4fvZB1wvVfN3aZwBB21sjZySGzSk2jc4QCvvDQyre",
  "key2": "46TG3HAgRWcgrYzryvjZ4ZfuXc6gUnxDfvS3vjUgtRUB8MHi3cXZAuCGG8f7ZE9AsDTQ9CASYXQp9kFXCoqHof1o",
  "key3": "26w3dV5JoMZu1i3y3JnFetqy229Rr3dVxvGYMqy1YgCg6NGdejNK261FdhztpTCKN3QVrRbqxg6zK3XNufcqe63R",
  "key4": "5j5Lbmo58YSdH9sACZXP1KN5xnUCJxHCccNqBoZqTaHDe7mnqp99hdQuTKhvjPDpPom5EFg62cKphmqyh99vCvCs",
  "key5": "4qRbVns1Hdg96PWuDAZf8eC81GzGZL3Z1nZatswNnsxY6EMa2hP51YRYUkPr6NFXCNhy8SwYyfQxWD5dZbcSr1PP",
  "key6": "kAjcANQBCw9AjcuV9svxmCK8zvfeaqiGGbEW5ggKfZoqTBE1PcnUZMBLwYqhJQwBihTfGodSHabTuGKNurwbTgc",
  "key7": "3VqeQDdYhCrQpwMgKhD9hmUuTmdSZuhA1DWzVERa2CajRmRyGfVwhE5SJspa1jE5k567gzdcgv86ygkRh61Snidf",
  "key8": "5dTXygzbH5Qp7Y4ospDcyf6f5fxdd9CXXnctLSZ57wWv9uGvSAqAJAm2yHNtL4SdjDzTb1coSC2YByiTTpQrAjEd",
  "key9": "67rm49k4k5N55YDMeCMrvfDGf8geSgHTzVjdiBhSaKLAhcz8FResAUQZiGStdRd4RZRQSBPjY1QazY3nVQzFg7YZ",
  "key10": "2Dc9XphZmkuLTVCjhdQwnKDG3mknAvhgSYpcz135H1Z5V5FdRuZPfN6kf72ycTiumnTGTbWHm2F18zBZp6a6rS9j",
  "key11": "CA6WKBbfCKtJTWFwqp4Jgx4AFhrNcVkWR7ZoyMunuzazYEuQFvwDSqnrKjSramza6YoeWVPNQMiDP7Esqib5krF",
  "key12": "2kXVEju6D5dDGYEZrHRqSdWbuoqmyEh8NBnPhXyCUf9B6jkwTF7fgLFPB3UUCfCmUhT22orHcRuYSja3tQu17dfn",
  "key13": "tDTMrV3ydrxTUnqoDbPn22c18h1Pru1TiFG19iFTq5QJpkA9DMAW8R2fkQ6nbpmzTiSo1ybBfqSog881TJN3Fmi",
  "key14": "5oNSnceqeCw1y3yXA95DBodu9SgfNrt6R35P99zRYNEKFetmJVetBveFDN6XUuVLpjgVKDXuPgXzFSWHxvLqWBm7",
  "key15": "K7FTPbZj9kqnk78xsFRAyLjUsmBvb1At1RRDTTgmEwDe5iTqjFNRD1QqNAUr6zsEEVTcoNseEtGDMF2rDpoSisq",
  "key16": "3nAKMdhXrtYJrwFnMuTKb74c2vKcBrWwsNMi8Qp9W5rWrmJ3aKnDN9nKzY876y3Gx17nCustam7e6DMnmetVyQQX",
  "key17": "39Yi1gAawELX134TmXqizmAu9rsAt5vfUWDGU5YVrqkhyJHMZx2biHhHbUrWeNaCsNDygzVq1xi16HUXkAB5Q8f8",
  "key18": "2WhX8KEa5u8w9xcNisgsGDT1jpEL5cVCoVPW8WtWDwUuuK9rbtB4rAegu7GvsR9XQAeCnfq8DxBDfhh2Kd6VzUWT",
  "key19": "4HcHEsg8WJhP6t1MVcpsvrXn2KPqWcVzVxU67PLzd9gpbe2VTiZggtkkw7S2jmMcw8pGfQeEVEx3FwgJjuTEGey6",
  "key20": "2GFjmirJJ4ecREzHHAv4AZDwZKwfswraN2RqeKQzRbwFHDnNyH9m8qjfA9bgkkR7TXybapxLhEQytG69qCf82GnD",
  "key21": "55CKFVUFucMWfvxuWEAtAz4wRCFYeVgSJSeX5DMDzTPkN4nLn8kbVCbpPN6mmhN57BSXNrPn32SzuUM5rAZmGJFB",
  "key22": "62iTK3sMk6jpHTtSaubgmwpHYR7cq7UJNXNgohDYDBHkJt9LD2yBPFaHoyZn42bXCvrrrLMoEam1Si1qDb9druuk",
  "key23": "3yVkHtzKfvf2mtxoM2ycSpczeNWCv42ji4Ndm4dKXBGEMKxFMSRShc9JPsXLkHMMWeJH69RBAfwnpQVZULYUUkV4",
  "key24": "1FiWoYPetrjXhpvjCcgo9iBiBL5gv3i7muCs3mTzKPGr8QovmMnSmdjQquoEyJfqTEf5i2sPinoxM6vBUYGAXZ4",
  "key25": "5w9HjfX953fYy5KiHdFKtrwVeYgM1MYsmUKqyp4B2NsesByVoSMp4kjPs1F4n6cVvwkW5er9D1iXrzufb7AHbSJf",
  "key26": "47uH6qwTm3rAiEk7tkF7S9BmXoMiYkebcAJvBfaMbJDNCAHZb8rJgyiEjyvNsiebnduotbt2JuHEZwYGKp4AqJuQ",
  "key27": "5uTnFCsbG8Q8ZUTqFckVMQtyhXckXQCqpF2M8r6K21vVAbKsGAq2zV6p2YQi96gTArwbTH3x1vuANjsWBuorE3o4",
  "key28": "3KGQnyGqZGFT3k5rdREFSQVdUtWWNSp74VwHpBU8Z5nMTo6DwuDhgMiVna7JF73UsiEBUY5sQv3SM5c5mhrdjkcW",
  "key29": "4vkXW1fSxhsfcLkzcGP9nXRg4otqK8u8okVVA5EJR8F16iUmeqec5o29EV3kDNQXTmumqffomM6QUYX8Fqbbi5xU",
  "key30": "4tD4zmyh8zar8W9L6KuXw4Q1T5zHZphNrdeLoW9BY16F4Yy5v9Hk2ncJsK4HhajqoqHmdpa88fjWSo3gVfbdD35S"
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
