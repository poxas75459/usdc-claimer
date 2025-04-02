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
    "2mbKn6DPivY2FPJ42mtKvCbFFrmDqmVr5t15hV1AcRf3zZPivhZ9FvmvzrM1cEZdeg5U7JSoaVbsUW7stV32nwD6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47xoFPqnEBi95PHAGZWPn1meWSrcGaH7e3xTiYhQbp1ZthTapy9owTXX5SxLE6K36g39fsoz2YtWTwwZnq65iZ9G",
  "key1": "593fuSK2zQ7skPeRoXMhSrtuvDZXtuoBDyX5vH1kAsqz849mhYPwhG4wr7cfjNojaRZCGZRck7bjVjGdW1agWRbT",
  "key2": "29ZtfQjvKKrdPmFX6TTBj4nUAWPtg5oCknwFNcp42rsj3i8We6wrBmH8kibhEJ8R2VHS5nmU2MDubtkopF4GtkLq",
  "key3": "5rfRmuTSKPsv6tAA74hHnzYtbv7VVte2Mkr981tNGr13xtL5Wfgm5WLMusXrbSWrdtFRVj4AvwNtmqYx621AVt8z",
  "key4": "ZQFeY9N9DxCJ3wfc5nhkc1tDhZnzm17Xv3xe1YsGrTVoQRy3PbGzWDVTufw4c8QQxBL7BbEKFJpf8EMGi8uMX33",
  "key5": "4oAS3mXj95M5L19pJpmYfm28bPvnzzTK2hzmHYRBZgzZiN5H8V9g72V9PaP7ox7E5mWoMBTjEqHgqbTSek9Bg9SB",
  "key6": "368HsXaY3gBxZ44kRxRz2N3CJjqC1G3HwjeBmkWx1C5FvenLFwDQR9h4V3PJvHFMHRZt44NUEFmbvpwWVUYHj2Ji",
  "key7": "4z4wZv87kMHUUAiVFqiGmnjCY7XJJNtycMshvNwMVJi7oNghfrTqkoaVA2jhDv2CoKtJUuaq3m5QZxVGgG9cWu41",
  "key8": "4hWednJCCWHTShY6d5rp1kbuSfjLZkM4JYtZEBN7AjUi81dmdFJFBEBLiecTT7guFaWZNAMtkbFGLUxK9DN5JQAR",
  "key9": "VsqqeGm1AujfyHGYjd5rJSC3fktXNpDifyHa7he4S1R4mTYsugBWDj8JQSR8Rj3gevgr55UYjfYdpPVS65sLX8E",
  "key10": "87nMjaFkRTVMdmxY7Y9Gn5DqXuepq2qdNfui1cnVd8u2Nime5wraqWpqg8j7m2FzTBM2ra8NNyfBvfUU648srTG",
  "key11": "4EWyEmvuzi4ZVRnWU6o5NZHyjmHX4zZo6tzibpnttD9bguPUWbUspcAnzr8RxiQJfBUvkMqDFHJkGYPYeadgKXf3",
  "key12": "4opGLd5UDg5CqP4ihysxA388SnyjQqXFnLZ6iiKKgciKBDz9GSx1Q9eL3nQ7UMgj1zFy48Y9ysE6pWEaZis41jEJ",
  "key13": "4viPZt2JcbSNwreDDR4cmSaPA5bby8EbpLrMNzzNJSNctMXtkXtRu74gpxEnrcjaF4Q1mrT7BYyTJKiwrT9BDJxV",
  "key14": "2MGNFjZ8W4415RCsaQacvYR4L1kcVMfUKo1co3TknVuGhRm6FpVkHrM5P4AUBYRoKZw5LkKapBEYA4sBW6ZRBfhV",
  "key15": "SYp8VKjyqzQWYsaFZt8GTW2ReEaSizjrmj6FU8cKzh9TQ3bMEfTWJYCoLmKcVjA5boWfvXKnVbxTcJNGNDiK86Y",
  "key16": "tngHbTeMnDTz97vXFCWNKm9Eamm47NsPpE3yJBfLTY6KjkjzqRvPYKbJq1Htp8ZTPyqfa1ocQhB2vCjZmfB9axb",
  "key17": "4Xasnu9BcLmFdAmV4kNR4oi4SHtg7vXLJwv2XfoBeQ6pcqGx3W5kMkuWNsUaKPEya3sbXGGDa3hk5ZvGmg6ZaizA",
  "key18": "3kJHa7FaRV6dubKdLanWPXDTBxddqxGE764J7gwEonRGrnpLxuySsxu6pw7QDKCXD29jUEonkZBi8p4M6MuPFHFe",
  "key19": "4K73vqTa4mKJKej4uDKFoY5YBM3rWYr6DdGqFpxScFqXzFtnz6QvZPgnfh5ki3vSo2nJDXXzHiKwJFG2dv2tuKEV",
  "key20": "4BkVyw7gAVDqesHFxKiDS8AYejGM9RUAdLXpQ4YP5MczFAhNyiW5ow5UNtNpF78M1vsXwE9jx5CEScZAUXELAbVZ",
  "key21": "45pRui5vQ72J64UYu2gfWd7NRpBMUPfHZvdHmrEmxBTbUVqe8kTAusUvmYwtKKdLhoGuvmBNkbKe1thYGeCSZV7A",
  "key22": "3ZdJbEnf7foAwqB4vVZnij7sfz4jCrExQR2WJDa8epX44Eg9VyR58FRmKCsj98WtPAGnyMooZyZTjEpWjGxgJ1ge",
  "key23": "3VvaTEqidGv7yiKdGBNfy6zVQUJkqeV3DHp9jLMvKvguBpZZeHkEBPDLFTGQ964GNcMNRWKqcDop4m9HgSNaM2y6",
  "key24": "4D1G83cEpyEc2GmF1iU4yQhoL81PqiLnvLXuNu9abqEUaq2cVxprBYs4EQ2X66zjNFQqigbDCLLrNoF6xoZdgeK4",
  "key25": "4nGfs662ZTbDBKTrcZQoYHLGifmGxvm5MKzk8dRy6p92v9oudkySRvVEvNSBm6gG9J91f4fDxSB9M9MG73Do13Gk",
  "key26": "2rt1DKNtCDZW4BVyvDHDjw6yVmSAY1XHuAWsesp4KF3G1siyYHroYDEuu5PZw6HJd2fKWtdB3UwhE5LwanmfXXL",
  "key27": "49ACLEwoypZW15YYpTgobamUNQowGNM64pxXNhu6z4kjv2XoThRc7KNo9ZmKwR13mzqa3u99bwX4ZyLnPnGhJi1H",
  "key28": "2fbCSjnyrR3WFvcTKT8ogL8ca8ruGppqgC815adCyx66AQZHmYWRk9CEUk6HndgKSy4FS4YqgFydRqXUa4HQhTAn",
  "key29": "4sSBSQr3BVv7xhnJ1Ca5fypVa4AKt1ofXDoFSi84jwad5sHnxzqg9FCKiuYmR6n39pqzQ9GY1im1rGY2twyrwGmU",
  "key30": "5CakapGAyx5SqiHLFknwn9dRBd1xSdCfJNpCRH92Wfi6j61HihUtoss9CZzdo6KXivELX11F697qyp7NPM7T1hK8",
  "key31": "5QDF5u45GCtgcyjtaNpdLtB2KSpgVDnKyE7f8TzvjBhvdocgKP9VesNCGcBhW6dJN7iGHj7GCy3rYqs63TaXXFap",
  "key32": "3brRzKmFvNxL7V3SGNQBkUxSbwtKsKRy2EWMy7dVsAQCxvKLnDmQgcxM5BWbKn69fETNWzfGKjBiTvx38Wru427F",
  "key33": "3Fd2QNQxjdqBqt1rNxUN1vpeb8f4ACJjuki5uANH6XHHMd5iBAFcZXDBaC9Fkcp6rBAqWWesvMpvrhmMnj99LK7Y",
  "key34": "CFJrEvx9VpuSwJJ725UaJMN67V34JjKyVrveMFQWxJpXXdSBzowDe3R8yKfNW3jAV1rBFYxT4nZgHudrR5nuhhm",
  "key35": "2ZvnaQGE6RXJj2qfJJJcYePGMVzeJVqWV2sTw8UBYpqTdJJX2DS1R9SjGV3qbukvb7MCowXgE8DisfDT2fajgkmT",
  "key36": "PsquGv8jvVyAPX1QmeDJyzBXqKXunfEuY9uj1GYXbYq2v9rypjsR1Ubyhp8uNifjA1SE6XgC1cUzrguzCsX2Z2y",
  "key37": "3Brrus6jrsWx5oU8xvETngPoHxcRZ37DfCQW5i3A8aovHDeCq9HeT2k91xqBquz2gY5qZ3sLjeeGdmt1AGXm7xrV",
  "key38": "4cZSReXtoFc2r73RpLCRzdw8AxsMEptXajdcegHQ5CgHSqiVwiYmF3xczKpG7ySbuKz2RZ1gff6mcFZ6z3jqkqoq"
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
