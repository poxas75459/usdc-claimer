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
    "3T5EGkQpAsxV3tYmrVtty3gTGo8w8yy8J7Mr7fBNDLJeTzCdFDD4BFmz8RLW6tsKEhjZEVBGM8Lrfbwfv7GcaWCU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UCgJQFV4Z894iKqpvjujbsTBQPQNTCreg8KV3197oCfWS3QHtN8DztFtC1skunWpdSJLywnKoE8kXJPPjiLXFze",
  "key1": "oQ23UY2NEFaxPRPJF6JVsS1e81C7P81b9LrxJEuT26y3BGvDDMhKJL66svXa9oBD5XWDadmXvycS1YuUMc4UxeW",
  "key2": "4oUGZQMt7jFoCBEc2j2xGFypjXd2NnRFDzA6i8qnctPmKgkueTbGyNaUHMVKmWYKr86x9CHw9M39uz95616prCcx",
  "key3": "51FCD2nbBfp9F3KGZ61R13VQGjwg2dyEmfDGzud8Nb1s1YUMW8LKayi84jX7pq1t8Qt9KYXpNKJu6W7qxGaHDvxo",
  "key4": "5yGLLjJNpWq8tpwKTs6HtfGvr7X51asdn9RKnhYvgpvyLkB23w6jKB5m23kJi7qfKFHWULbkHk6uQSAyf4gtecH7",
  "key5": "pvbgAmVv3hMu1U5i3ePFzceszyn3T5PmLm4jcCVbdRLjhxRfRrGb1mQK2ERLgZNUfRhdVg1XjGha4DPciEEhK1K",
  "key6": "4o8Shw7dhJuRrUbi5FyWzbzofA2t4kmkvTsenF9iiUaFVKtouRKwfD6gy3JtZo323QCvdnsfYXVCnZsNJWz8LEjp",
  "key7": "434VvU427ZGDESfUeYNuNbzcr6m9HB2mPDoJpXcF7UDkrhe9M6HosmBd8nUN7dLgsKmBmAgBKtq8nM5byyWqB5ev",
  "key8": "37haBmatCVidJeypKGHL9Rf2X9fxSZH8eJFcWFkpCAFkndpGeBuiw8CqnbQz2M64TjMms6hRN9S8s53L7m6tRZAz",
  "key9": "5uMCboWnPvEyyQrTcfv6RNL9A6JQYxFL6jC9QZUJGo9jerPw74Sk67M7j2fqdHWU2tnjsGrH6hsGqn9BnAJw8BS6",
  "key10": "5jqYvJwF5VBpy16Z1WtZiTfHfLfNjweKt9HnRhu4JGqqhH6AL9N3qwxMc3RkjhGxPmLLoHaW3ExvdzgvfgF2epE5",
  "key11": "3ci6aMV2Ln4rwquTag5myqMomEuLiu7kH9Fa7dWVqgop2qXhe77ZPppMxXvCotDfEcQbW7RK1inqtkbK1TonNinA",
  "key12": "59AD5gBypiHjcCPrumsiipjbTUSgcGZvhDauSAUZEdGbAcuX3WQMCjbAC6QiWhGjJqpitZDafA4GVitEBBBt9n8W",
  "key13": "55DTCSjDaa3kQEgGpoTa73s5XAxaLM17EGojmBnHWjUQPKXfUscBuYhE7eM5NmJwgCnCaiTen5m54eD8BAtsa7A8",
  "key14": "Q15J2BQbNspfRq5D4rPaQ5dhmgL6K5K8rpRzQco4Hcofb8DXpvNKWLFaN2VBoPKWAnx9v8ptMBvBy43Z6Lg2wxg",
  "key15": "4KHyDmBqEuaZRYfThiXeDPcnvmWPCVQashmbr92t7PdG1RDh9tuRLtdtKKPTgMi5CKbXA43JKiF8NcRvjJVszVXQ",
  "key16": "5ouSiwmwuA6S9SunfsdxgLfw8hXh4B41sZLVpDw4y4U2GySRUFTo3bKVEUEHj4bAV2q72FRbfQ7EbowAu1daaFko",
  "key17": "2ocRk9bawoneZU4wREkSmw36iofvmh1wdbEA91xcuhb9jicyi66Yjc7jQd5z6G6DBN28NuDdf7hP9NVKBQXh9xBT",
  "key18": "4s9i8AG7SeNpUVj84cp612FXmcRowZHJb9fhXt5CW7QPQxkHfiug2Ko8VvYqwiZd3ZcqMRELFdFf9xNYEeS1jap3",
  "key19": "4JKbXACEYEqkKj3QR5A4eRCp3FTqmpHAA7gvvGovjkzHXD8ZC6GaaRtMzXWYSQuZQVJMpeXscbALSY4ozQykA5vW",
  "key20": "45xX8tEfscyXJV2cmvfaz6FJ13xWfgtaWBtMS19eXZzeqzp7sPVRUxTMdMz8AamRoKtq4S4Yh2G8sSnD9KW44Zp5",
  "key21": "noGjGVWEC1yYtfLcBXLCQdQffSBxEjuob9poyFaAbeh6J6c6LbzFhFXHnvahWPA4sts8WxE8cgymSkQsTm2MbCG",
  "key22": "3qzjv4yBQvmgvYFsu13HSedUxDNnPdxeHgz8xtxiCoyLgPnwi3rdMXFgtKV8NhCFKRSThpdZp45Y2kxVEh7XsGYJ",
  "key23": "2uuADxhwk1sswmAy357i4Twzie8fjiSGh7wq8Fxo2gKgXrskg5RUAJL6d4sQtoQmVHo8Zqv7iuikQnKKMLGc8nwD",
  "key24": "3B8z7JJtAYHJW1vJdBzK5yrxrjtGTibuedg7sD75WXqRNR438HYsx1VdAeAKSBh4HKoihfG4KyX8rwnzU3QhW9BG",
  "key25": "3iWmCHYpKKjcj8JgBkLcs9zCm1y3UBWufiW923baGSTRBwwAcq4Jvx4Pc3QeKfGZ2RwMvr55Ck3f6hvgGtQS7CwL",
  "key26": "FrXE8Wqttt8a2zNYWhYZoJYnn16sGSwdjiYo3Ps72vmehtErLUTPmGoAEBhFz2dXVVm75M5h1G5MnM64mZRo67L",
  "key27": "2Q8oqaf1y6YLuhQJa1GLHHUocnAyLh1QzrBg2PSopxFN9mSxujGphUAZ96fyRn45MRMum4yypMgcNKgcA3v3iDBe",
  "key28": "vsTS2yGiMKDTdSFnPxRxgmAzmqd4xeHYaHXeXBe66yZWFY7uGAtHmsGmoxCyZenZZZYUqhT58cuQs3oFiGhrCZe",
  "key29": "5pvpwevQcvrzUHXZURtPrrpmFBhz6niHXHj7dfYiC58EZ6f7EefMMs4rZ5HjboNUSB9yrAk81Q3kuWUzJzH7smr4",
  "key30": "euBtJ74DD9a4mkyZ7AkTmvsHtt5GNisennpeq3Cj7pQfbrivPapvhDAKfUxMtcpYHdkur1WPgj4CSvZdkHMPVqc",
  "key31": "5MRw3eMTP2xsWEwUJT9vBdyFiXNi1nUaCoEYeLFinkZYDmBtL9Rp5DkFkZmtPvAjoPBcqRooqjesSi3y78f2dYFk"
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
