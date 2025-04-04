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
    "4KR8A2HCVhAD1bsDxpfGyhyveg4bcMW2wDE4Q2QBMB4dRsEaRaqPXCsHStgBe69e1pPpEFAQofoYgZmzQ6cYobn9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zuwNohK1RNwiMyzggiYNp6tCxYGRz5Zr39DWq5ZbHPDm7xZ7KSGAPi5HdB7y33kJXFM7z167hXW9PGYBPyLUFRF",
  "key1": "3tH5bt6aJJ6grcgv72CJPrHsJv6JwVMqLCsXt22CDXygkYiAwfGUpU8H1P47zXtG6YW4hZLzCiwVQKLnXHXtsQyj",
  "key2": "2GQAa53eYr7S2bzWDcLYmhtXN6JcTQHjAURi9XovKhj8JkCKwmFkA9dnhcCMyBw4sMox9uCQ7y1PQyVVEyAJh7v4",
  "key3": "5nXjhhkaM7iwEE2r9rHfvcVtK78dFuwdckRz3L1nmfHyJsGBN5TNbjqNp5ckSJLgZ2pa8tZ2g23tzoZT5yhf7Mxy",
  "key4": "4zRYtoxY9YvTMrHYc85mugiq6Ni8v6GE1nPuymumLEvEddnwATr9KdUHfiSVCG19acxav7jxhFQhnDknrt6THMLS",
  "key5": "4SA8156TWK9TzcRjUd9GA6H9cPxGcdQaq95m6Jua33SSxvnVmrZwBJe5bBnqbJUZF8bfos9E4hLaWHdwRBwCPL82",
  "key6": "3uyunwuXaoX1jXJ23T2XCSfxadTkAR6JhkYYNz4CZxUioZXRkTRyb7boZF5uN3kPmBtKT4WWPbacZPMkifehyPBc",
  "key7": "3RM9CfVCJb6iFGnN6LwVvG4XgXgEhkdvc1SA4J7zivUWjw5P27yMV7hQi1kAZp1scfURwUVz3A2ujJtpC6f4aCd5",
  "key8": "4KohqEZc12mq9GoZtwPhv5FbDNux5Ne6k4ECTiZ7rpiPeV8jt91uA1W1kj8A7ziG5T7kHxxv8Y1Wya5hXgmByVw4",
  "key9": "5nMnTU1jruY5BvVdeA9xtoeTe18q5G7nQ2y89Z91DvMWzsYKDunDGcsxz3KxaXYnaVZGv4jVWDwP8BQLHuRrTNny",
  "key10": "5TH42Z6fGwRU67c7Gkss5BfUJGXFWPDEZrAEakfPAomohBsLXyFnzKNeyTL6EAZeGrgheZjBougDRKTWJqnLn9j7",
  "key11": "4k9Ux8QCsYdhTfLYsAJ7Wph7UqWw7Vkp9QUCXkZMoaRM4wDRGMfHgp7WxqnTcmDLdsEaebVyX8xWzbQs1r9YVPDH",
  "key12": "2VnEiGEqyhiVE2yieSgEdXAP7bnewHQy2EuGSB65gZPBo77Kjku2SwpJ66Th6UY51oJ1wKCVVJhGvXD8eZfdab1g",
  "key13": "4zaobUGnheQH62sK9co5q2ZJ24bY5UUoJsKAgyCXT9NLLqVyfqPutiKZ6h9ZFeZwrfSsYDmaZFvqT2PbTgobjdZG",
  "key14": "3MGzjNhfLqLJkoha5YmeMsmKMRG6PWtbSJTwPVAfbvFGCG959SJ7wVE8PAyuGBdCs4oDBBykvF3N5XbRSFjEBsL",
  "key15": "5BssmLGB4c5qRKPYXdfDzeKpoJcSBmUdC2EP2Z1wwJBJQNtwgvEVyv83ThhLyMJLe6r85DgX48U6aC87JwHcc9v2",
  "key16": "619W1snJsvovcAsY3Jocx9dCaZ7fCvn6T3zakCy11cn5ZF2Domay3Mawb53n5YvvDN9W7cbjPHoBcwDS2beSekyK",
  "key17": "4UiK8Hm9SHzWmeHCpAA936XS2ogC3K9Rqbqxm57wCoCi8JhGoQgUVjbDHiqvX9UKYE5fJ6RWKxu9nCPNQbMwScfP",
  "key18": "49sj3zEnbNXRwRk5HVpWJsVCQXW6xq6M9YH5MxLyki9A7FUB5D6tTpjULjnJ1XFqQfQxsqJH29VwMFihzsdcZxU",
  "key19": "3VyJKKcRgB723NEXwQVu76kWq99VFskEsm7n7s4HqK143kAgiJhf7SDoz6WBsqysmCR2NE3NB59YFeCWhQJqKt1H",
  "key20": "3cUVR1ibKgWJD6jkiA5JJPrEUwptMpUgEvvXiccYbS2xfz8Yv8xMXpmDix6XzHavCmKXu9eaqSiAraRRKdiFDB3R",
  "key21": "2qvf1CxmKSvxJvifmF5YoY9LiCXqzwcjv3JNRETxVG7gdMba5ZgUTEL8pdktxXLHvPmc6i68UmwRka6VFd62gZg4",
  "key22": "3ix34sC6KX1b7881m2gcW4cjkaB8kExySeaYDR5SQeK5w1KwwHBiBLxU1CboSJ8rLLq6DdwgoUYYeygg9GHucKwH",
  "key23": "wr6xtvgJAQpwzo6iWFvWf3zEiMTpMhWpxGdhiCef9be9sqReo1vByAZDTwPyPRxYy4SSsMHTdfvvWfb7kWirDk2",
  "key24": "ukocWduLuKQbkBy4S3AaSv9To1AfWBVMPWcgHG9NcW4mCK1zMTZmqbc2oEX4qRQgkt9kX5YoP5GHXhi7CEkHQpq",
  "key25": "5QXojXb7exH18m6fM4ApT4PcshkuzSB7xEuLNDsDuLJBNuMzGqyDUAVns1Rn16L9LtMTQWgvjP2z3V4bhUy61fmH",
  "key26": "Gfdj4i3XCrTc8eZ9bmrZRijMZfjixZReJfiWq9Ev7P2xQ2XvU7q3xQ4cxnzTbjbbThYqk8Ktqt6Zy7afGn2N8va",
  "key27": "5mx9YkMqqRumYDxBeN2T3zRG39vY2zw7EAvu4oomGifi8SrC4kWUoL3vPfUMpCHkBLsbH4sUnJMzUBXNwKtQKDFF",
  "key28": "ERD5BSgQDjJ1qwUANFFaj4QWSZeAAs3GM7dgk4shE4DcaNQKygyDo4K442fnshM4Gn6cskQJQvmmfSw367Dphfi",
  "key29": "5Y8VJG7eunbvRMzC23W7ZuWbuyPkXZfCYY4y41yEs8E4eUp97FAQNEF5qafBfBNNVy2y7tCsismQfen5ciTVN86D",
  "key30": "2qjG4vHpUwkYCygPE9CeoxN4yQzg56nWNUY4imYQ5H3aLdaypEUspXHfwWj3FahABPEYH95MhXYKurchXDKjM9v8",
  "key31": "4dVhcjU1ZTvKyceeSfa82aFoBsHWshbed3cqui1BfsxPhrrzccaQS79CJyuEZJqR2zdiibNH5SN6iqs4hnVgodpz",
  "key32": "8vraEtCD8er92L3yDKRhB6uYSV15GHKW7BxawBL61k6tnLxYgPnUVg8sPaFgtQ36sywGsvijaX3Q3xVvBoJrd7Z",
  "key33": "PHK8xgFqEPSHoP77cYTHzx2135LGTFFQZxivv6bsLTSwFDjvGs12A58xU8hBfMEvePpDQQd3Pi4MUZGTRaBCCHH",
  "key34": "2k6uzXSLHvHjGVEg7YuLJqYMcgUTcj2qnZKe7NLxARcKsVo72cQCe6JgoogkGiFgKrLtyQdhjevAUAheoPVy7wqe",
  "key35": "4VqGEabmH78L7U2v7VdyfYFGdF4f9ATp1xqhYKnunpKksSRRX4ndQKaDkhnsiPHGKAL2bWQs6vCM94kua6a1TbvX",
  "key36": "oo8p5BEDpQ4ix3W8Bw4zNG6ksTz59x15voeASFWYVcy15P5xWWH4d5QN48VcJuGN178h7bnKe3ftXLfh4WWWXvZ",
  "key37": "5J91nNY11UqiajMzzgqDnocrpRUPvY4mMqqW2UfBttGr8JaWn2iWr3aVbuyy7kdMBQMmEQYYk8jgYTScUwUUHNhr"
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
