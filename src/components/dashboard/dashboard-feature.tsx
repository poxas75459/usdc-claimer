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
    "3TR3rb3XSSAUpBvUfLSbh5G8dRmoXMHRUZkisPKc4u3DWNML7wyN6tywu693L46qwDnuLJMG1t9MdRgAjcgSoh4t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "636dhegugQUjPzxs14BiKKLPdpWnqHoH2BJDXf5tmXgvrWubUeZQnUoApRc7iLWTt85ShkHSogUEghwMQYM3hKdc",
  "key1": "5MqM5CojzGsMNCZUP1hWGgk95Y5YKU7PTQ1fQ2N3StxNnnXLKBkVS1H8yyEjbEBY78XfbeBUkw3RkejtNt7Hm457",
  "key2": "2mLxtcbxc8w1PkxvcyuCwq6T7tWrvhooHtBTAM6MM2WYG1DBfbmcPhnxAkVAKePeaSSbWZzJnXnQj7fYwfUZNA2V",
  "key3": "62gsYaRLWynGzj4PQ8m3PAdEqYqjqKF1zsWEtwDxFMtdCkEwypjxtq9cuLKBsvAccRvxRoUsKYP3HqSiNVKcW6ih",
  "key4": "3jExB8j6KTTsNbM65NCPYfzkpoyxeT1HTEF5yw9umFkT4W7Ambi8Xq8fjNeMLRqML1qtyKmpUVGKQnERYcFRKt5E",
  "key5": "125M3zmFMfZW7CtDFU1Ngu4vtuHNjyBSzdxFCpKjfd8nrFAfHLJFP7eRryQ4anVMjiU3nW6LAKnbxmZmrWe5eB5r",
  "key6": "3wnJfE8Y4W65JtCVVnjfU3G7Vi3zixHa6HRpV9Ya3KfTZWHQ8vuu6sq2PkEvKn2ptvDFUwudndEm6vpecP9jUGnj",
  "key7": "4reYW6TjnsCeuEPnS1ZwuNzk6FevxnZnagYJvgvhxCQV5NUS6UfRi3ztUWydjixcHuXKFptoa4jH6BbaPm7pZ1AF",
  "key8": "5NUeccooVYWiXfcPr1NWVKZbYBBriewNXGx5RLYh5eWRnyMXvai1AJ9jopynzUFEk7Goff22bQUiw4VMcozFyuRW",
  "key9": "6HXyeYfTfUgJNB3HUwbcxtBTQRfX1WunXK7pGFip9fB7AYrvdmHB8jyeXnAkqZBSnGsJmvSNMeUzXCQpJ8Cq1T6",
  "key10": "4BJdPphxzCLBZNJG4vaFyrvX49jVLHYHswbs7fzfmnyptGnyv7WoutLfBHys6MjNSRVLJkj9U7Qiqebo3rbhm7wH",
  "key11": "RmviVaTHCuNtJCEfP5iD73RAA51WAMkZJ91AAMK6aC7bgVjsWUrbspNwq7dA4TL8RobN7fdDhL4g5QgiyvRqWtQ",
  "key12": "3eutCyVfVopNb1c2TzN1KNmdd2tX1BYtD2Wn3UQRL3Jb7NTDLeyvXx4tKSxcnBkk2MApKnFSDYs8zBtpFzUnkUbt",
  "key13": "5LnYydXcpV6MYFcA2nGfysaQ83qo8Fan6URthyAuv2YFHj5ikX2JpWVVjk774e7qSgQX11UaPYGGuohg8ncwDH1v",
  "key14": "3BhH75NJpgi1cKLe4FzwanWzRsRPBvC7mk7RRL9ZeAmfGExjy5HXJsWv3vphqrcjPKfWug2VxyQg3Ci4VuQA9qYp",
  "key15": "5FMypJfFRgmLwCZEe87i8wU1azqgVBukMdpWRYWqyF92389uBtWYMyEEzxCJXdqoVrfNy7rcvbLHzEbyg3vXvwU5",
  "key16": "kkFCxRX8ahFGYXfyHhqXyjh9SqE4Mwtk8TuskkRQ9mjecVHrs5Xb7rcCxw7qg2Ry79tyc7XcqXWLChv8KTRgkCR",
  "key17": "FjeyQof6kA3GVZrm6zHDssz12SxGqnmcDiW8127aDDjEj3Lzh4HKWnBr8mWUx271wzvpA2mtTkWxfHJwyLay59T",
  "key18": "3NXDdRiHiQoVbiNNyVitX1A49RMXRCVtU6kbTJfPcCpBZM4L6PoCchqbzwYrTUCWgNLEgtHajsf51DvhgxX9v7Mq",
  "key19": "kfUYMgAHSDRSAuuEsawA4DzjFS2BzikKYW2f518Vr1vnd12iFJsn69CVyMBx9ythHofruxBX2geoeDiRniP6nhp",
  "key20": "22dJQv6sXWrN6fKzZCscD1wqL4LNc4uHfftAoQEQneT89A5xtFMEQS7dmBfBkUMu7bhnqCURTKYQnKVh2N8n74Cj",
  "key21": "2S77RVPxzTqvgB7dSFaq962VCEAfFLV87gWYLbNLMCEHkRxTcMpTQ6fGqHseamN5mkCi6c1H2sdHVNqjpbe5JswR",
  "key22": "4BLL2whfbHkAR5wwBXyP6WcqeCUdZhQ8ReDwqtm8oLBDMtEHgDiWFwkK77sKvaFqho1WXzp3vNtyGVtHT2byESGj",
  "key23": "597WjA8xD6PCqmfMypQuT3HdRgDLEaNJKnvJUsSCrMeu2SMBHZ4Aae9Z2k9YdUxrHHEFa3doerJw9rGJcvDgb7X8",
  "key24": "3fbVXUrUUnD8DUw3rqTJ591dF9aAWFQNAy8iodjgQUAK6yw6c9rcWkxtztsTbJDgHyNRoGwGSWvtD6SBDZDVsNxw",
  "key25": "4fhcWTMhDcW77GHJtNMhP71WhhZYKdnGG3gLgx7Zr32ucHKjHYNC93TUMSDHtFXnHZqLoJdBHhmy2yzBQRijXgc9",
  "key26": "uFyRjtEWhTubzDryUCebcsKAC2ABPeE1BqVMTcqD8Ts9yjVnkNDEebzJUpfQyuih4pFpb7uxvi9ypxzNxZSPzW7",
  "key27": "58SsKA5j6E1aB9RM5YNL58U9T7NkVXp3Sg8nHn8fLYLg2aQvDL4ZvGSZ6PdGAUs5htVU3JpXT9Uov4No9cGTu9qu",
  "key28": "5apCJ3EiYDZ1PguwTTXEjERUMCnHoT7ABZNRFBNVtV1wRWULS8dGjU4CGYtCvkfzHj6z33KDLhSyJZBFrY7ycBH2",
  "key29": "432beQMrPqKcfX1f5ftC28qr4dMmaAJ7FFnsSaMrMBdHeYpRgpuLWLogeQ43oobJRKoDBK5CaMxYEgkbHPbAkcnC",
  "key30": "TZgGGERZvmJhrZY5toZoZBFva9HEB8tpKsHGjexhWb1MvvbgCCdxXxiZegQbXWQgCyWUYkoLs9BEn74uEJPdjUL",
  "key31": "2YHnsKrkxghLjYpjpJEL9w5FQ8rtC6XUXAgaieiFQCUkYfX9DMS5H4BXrKX5ZApfLG2MgpsjExn9CWfEy57DCTqA",
  "key32": "5F6jfRQTXM4XcMepZkfpw3JgiDRfqHfowSkuSEHBFGvUxE5wdX2Adejj1RfHsZZdwLGPCdyjmfSsxaoXqDsaz3jb",
  "key33": "1BsduTBQKWX7rdsrkQpz21LvJCTpujCiLJBpXDxsUBQTZuaUt1H7np69NpeqHakH29X8QbsRmAT4UHuQpXDYtme",
  "key34": "THsctEyoxjUNdhno8jhr9EmUGFS7Tbj72gjiFLvbHSiSrXmrg8b1isyWBqtTb5QRSg6umdA9BiCa8qGH41u6Yww",
  "key35": "4FFHfd2HsA5yC6VhJxfvgLPqLpBym8HnPUSbpUE2LTg1FYebEM3peFzgHaher9T8pYvURnrDAD5undnyxWbJYKZo",
  "key36": "4tTAjGF5vKSkxijER12qRNZycqpG1yFzb7fiTEHqACt1hNFBMczLgBDaHbwjywm9RdQZwx8T4hVaywyqWAJ2ruPG",
  "key37": "3wCSTLWe76H8rPYSZT6yMPzFYZfkKNVLjDopxH53fGBFBQoZAwgGhcXTc9cZXM2DfrQkS7qMpRKuJ1zNQP8b424p"
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
