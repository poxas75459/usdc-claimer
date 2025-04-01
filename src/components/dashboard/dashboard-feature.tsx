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
    "2j5KR27a5W2YaKZ1ktEYE3Lv5da52SHSQ5T9ZCFxSMCCkqYeUv7HxrzdKGcZ62FYWTN75a3ttcB3h2K6MfNpV5Fq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23EqgrJGQasYdyHjUcrEqSwWhGZyZz46FvuZoycNF5XT3KpyiKFmwaLf7YCAXJMs78zEmG4dmUV3drWg8HzPKgPU",
  "key1": "tjmx2N4NsUQEmmKYXyye6ywkaWSoiWxk1RT8QLrscU1bP8i1kvzY7os7CsQEXz6C8uLojxx8cdBLyVWHBpxEbLh",
  "key2": "3N15xYyBKufV8ueiZUjTC4CrAk2TNpg7B68h4N2vKv32ioX7J1jESPrhCWsbqPDTN8DjL5yZ7TAQ825xUSqee1kg",
  "key3": "2BvYiRWwFi48K2mc1sfnhtY64nf8WbDdYPfNX5CEVXkWkXrb7WHREr1YTagHWFfpkjC59X3bn9WHYFnz7AxoFphq",
  "key4": "ZLA916ai49gEQJswxRSgDAffsfwHpdMPk3ZaUPeK8ForhSySAUzPjZGsZAmNY4BUWbcpuLCXRukuntHWx6GohyN",
  "key5": "5tXT1Pc4MG97T2B15wbBVYzfkaskDUvwvqUtoReXc1YzwkafmSVBUgGmn7sfgdmwY7NjE3qjDxN5DmnijDtqFPmZ",
  "key6": "23UtDCkMRCPe2gXmVcZuEEuCGxbUmiEQSNbCfEb3uY835dSLRDrTkUSytfVKjb11YtBiRoVcTajhWHt6JSQrnzh6",
  "key7": "ggdrGe6n3UZeZM6ceRJMntB1uJrgFZuK6HitnkhnGyYvY6U9cVwKXDyygiQZ84NCmMjK8VDg2fftnuvHPzY3Dba",
  "key8": "5JwUYZk18jd3Qck2XGUKPc7QUzBrXnmcWFjTa9QZ4YkVH5CJgABua62hDXcfJGfJgrW2F6KK542bnnpiVP2LhfSo",
  "key9": "5cvASvWpfRCCfXbzb6jfh65Yj1VQDBr7xwrMWE6Cbd5q5SpqLn8HhysfFgaGsy3F6uZhryDuqVJavbh3qxobvWrG",
  "key10": "5rVHZSRCkm7g2hfqHHGLi4PUcvfXfrp66cr6N26CrwQCfetrvpBSaA4GDPg4MvjJUqNrniq93PWt3BSBH23vVc2Z",
  "key11": "4h1oemjYe7X3poQ3rYuCZqRA6MwRztizeNTcqQGNVgQfKPaznrJeBCZ5V2JBLt7nTKhzhU5iaNoHJSffd9D3gPPi",
  "key12": "2cYeXYMhWVpcjgMEdMarCSakVKHtgjGcdnd7426uXFiKnrP6zDTVWTMCDutVw9VxKSHeNBabcAfVthTNR6o3TSCz",
  "key13": "5UAGstdWW1kcd3tRHCtv99HB36UDN9q6FcXwDpo4wkuGoZZrBhWe7DrhXunFixuswAH21RiYCLfd63kq79ndEtX4",
  "key14": "3wJMhBLcXkSRgmaW34VG9Us2DjduRwYZuaABdPUsRZBkns5dTpWECavPKQ7GvHWy6unNGi6BKxcpxfjoT5pQMYo7",
  "key15": "2neg3QhXV3V5r7KWg95VWrovvN9p35A4EESKhjiPgZHcn3xvbXZ7WkZjjXbmHh1vpZnbTyUg8io3gxKQjFE9YGxb",
  "key16": "5dK8AmPSTJicgtSFMwDMi4Qi924zDwMXCLec4u5D7tPfXNhPJmwAXTC8vQZ1563ecKiCGjJdrAhCLpMksEPJw2uN",
  "key17": "4e1xcTbSXXk26u4kzGR1zCRg7hj3XkECwS7tPH4J9psCAes846UTUf2paPdK9UUMtSpCSU9yYMqgv9j1VLWUAy8s",
  "key18": "2m4pXnRApSgHRY44SQJBPXmz8HbdjkuwQifiE63jM9ruRyZEyGuCdZHwHX5fPPanhX27JXcpbL4mWzYVQBePua76",
  "key19": "62Uy4o96JSPXVbMiLJCzSGM55T8bCf2s8KXPYYb7UxnTXu2NEm61VW45J2ioBr8azyzdM57pX7qSuJpv5snVRmu8",
  "key20": "3dvueGxkoXhU7WBkxWKhvSFPpSZn9s1c5VKcEtH7wSDqduwzqJgz6evHNser6ihJM8rb95LnTqMAmb6kuMawNuBA",
  "key21": "2FtASS5Wx9V4qYsj35TMrr6WTJ8KTCQsCEGjzVnj57SiHJHYSWhypjcUTCfexqe2rVBuRq4uMGgA3bt1XHm19JPd",
  "key22": "3bVWuZAvLnUXQHuvFnrapV5MVH7WBpeWRz1p1HcJ7bvwHd19Ez6nbE9aPV57biRRVVKzdwKPoRbdcnm6wK9cbFht",
  "key23": "52fa9GphHxXAk8bTgHjhr7MbRBLRZC7M5e1rTMjLM5DPi5NKqhJ5grttGGHp3YdKnYiM99BCtypFMY6EW8v2CQuC",
  "key24": "2aFGwsH3ctb7bjgJWnWHNK7xebrABfinbKxSZdcH5RaAmtqnjrYBSNJSj938JH74iQwRcxtxhUZHRKKsMW4C62UE",
  "key25": "wsfGySEaqDgbmeRj4NtkGQeJkjsMSr8CQT3n49HzM1GEu4GiKHJcicsJGzzQnxR1x1JGZyhRmdk1XNHDY7VhxfP",
  "key26": "3TFXU9NytLsdHufYiC5C32Qa5eHCNQkwXSFmdajnptkWrrAsN8GTKXASeLMq3VxLDA6BayZ4rY8SC83LxbmMvAAp",
  "key27": "5ZqWiNSFopmTab6RfSM5YJo5CzssLnrxb8pMqkF2fnSdUw2KiqX3bLn11FT1pPAKR2TXyNXVzZPMF7DU28yYA4o8",
  "key28": "tRZ47mVhRSP9JR4u7gCa8EGLnLAgdCs3hZVFkcGkko8cpVTXwsroXFinVt9ztLuPvhMB7JNo4yjGaajogXZQ6VD",
  "key29": "5EbxZYiAWyLECP9r1bJhM5HNmLPgAbiV3UUSFdC2EHSS1P5PMUommxudeGXgfiMrFsYjdimd2nu9VMmXuH8GLPUp",
  "key30": "vttmDrwa4Tk5uqwW7tmrUPMEPLqGNUHry3pZ8mEk7TjonRUyYpiT4EkgRQnRh7cTfJuwB4TUjywJj7NV4npzYDG",
  "key31": "33kJqeYiiT8MyZegKexn6Y6wY3bbRVGxqk5Vj6DcGMysttAPm4sg8jUrxeUDPowWMsXYCp2SewZAWsi9VWnAW4ef",
  "key32": "2Rh4qcxSBd3No1bEoTu8LXPqp4YaZ6Y68zf5HJUfEiFW56ax5rBk8vRdW9NeXtUXpUqJVz8YTYaQ3X5knJhY97nB",
  "key33": "Zxue8SdMEhH8sGf9XaYPAA7srtXnxafzxQ2D1fezd584D6drf3HM24hrrWYjAvxF97qAJ4EVDNUy2VEmyKYjp2j",
  "key34": "44PQpDoydDtjnSzXbxsYULW8UKnyoAD8X9qqhPsGRfN3Qx2dB7GEdsFy9BtJbLEWiGAhToNkF8iBsETPjwzXFioj",
  "key35": "3irxm1nB1MuMYibNhYYPfSd2BpG16qKzpjr9LRSBMtD5y1urg3e7vkKEsXx9TkE2LB8Fz2N3wMeA8U4DHZAm9dJw",
  "key36": "3jmjDwRx9i5dFrYYABW6oHU7VtKzrTx7Du17UUTpZHmPBSyAg1pQUqo83BrdYLfjSiaMFCzhoQ3YP9qJq9iaeZS4",
  "key37": "46cKUQRZiq2yzsTgbq7r5ueuUjuTHKYXwJhTyrwjto7fkzmBSUNv48GSoQ8waqfQkTo2CLqmD5R3YCknuH1QCWA4",
  "key38": "h2yVDTSNseS9KW67WQLKxG8ZBTGkcyJ7mKGEEWbas33CArGVpRC65mQuy9VTUChsUruvT9Qt3p71gNpM7xXvtK8",
  "key39": "4EP3sZkQmKoPL98HrajTJeVHUSvGxizLgfkLMbzSWgTczeijtVXFaxkjCsCZR58b9CNjrSHhxBgCgVxPHNE7mcYq",
  "key40": "kki3YQGLZ5rRUYY5JJqjLSyCAXiaQW8qtjkaqdB1Vt89mvRvECi4jirVLCgBZJ2TDDyfEDwpLBXFdpxC1Wxyh5r",
  "key41": "4nPr4UimADcbseK4uJcV4fjboRWSBRHoLmGM6oCCqBC9Prcn62qvafFyKU9HahLetj1mk47jJzFVCoYrE7LH1T7Q",
  "key42": "2bFnk89o5BjPyzZxBco5xhJfq264hT78k3PzgrTPpZA7yGBC9r3ihdb7pipn5UkJmL12shqQcpLJ5a1T4ZVkvVNU"
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
