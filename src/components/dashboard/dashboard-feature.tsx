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
    "5zGT2jn3UfJ6pwVSo65rDHiXxjkVYMGBzu7Vz9Gu3zei3aVLqWNfCREaEKsunwNf4WsYPXTLGmCkfMojGHtK5sgW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2L4wmyCAgiPYY5HpWGb9R7C3tJ3uJwVFP5qC2uJxt2zHUZrQFmyGBnKAjayAG6iYdQFFGuWPAZmSdDfWVNuaYYiW",
  "key1": "5T36F4BLghSJPCRgPpCw1P9CW7zxZbiJzktQugaEKt9ieXJuykDKEFoPNd3vNS2dxB4ZWzhi9wLK3gv6xemfWUqh",
  "key2": "3n9jDmjA7rzWZCju5hce2RgQUZXwE2xQV4dSARPrTvmkJJBRpqHvtEqrp6nhYGgjQRqZQmQj3w8k4Mq9eAWggouL",
  "key3": "57sswB3fB7UoVQrj43CN1K3ktKcspAG1htJwjKgx2kVG3MkdxU5EGf72vwmGft4ECjVMkMPxEkeaMxu7SfLYv1rt",
  "key4": "3vdPKAsKNDL5kQD9Pp3bLdRTJ5cic3APSmNSSypKQrMY8JwgFbRRmH3x4A7hU2q7JVJgzxEGb7kJgg3q4nYjkbN9",
  "key5": "3BoPKYRCQrfq9c51PkZodpMSuFk17BVVg56QU1tVk9kb5XBXRbh4ZWdRC9AytMrxcXC4G1M4WRC4QCVoY8x8KxUg",
  "key6": "2g8b7dHnY9FDQ3K9TXk6fs7nVbgsHvJopVF28j5geu7biFnMZZTtWSqpeibxrFhN6pLgj5y2QDaHKBk7nTEiQTxR",
  "key7": "jWj6EB1AhxxYmtoJDmJcshm4wBRigmKFPHWbBfphaMZCVwszgL28t7kccgrp59pAkW9y6hLDunHFoFGJb8bqUzj",
  "key8": "3dEqYjGeVk4n5haC7i1Nxu3UeXPSSK5hotekYxc4dbgSQT4nCwdo25TtGWgQcZAasR8fMGKrEY5zeCuPUiaKA85c",
  "key9": "4xhGwJmttcNs5n1kngxSbnBRoL8KgyWUvGwzQEb1nf1jA9hCBX32yJctVqY12adtyK4Lh64EDj8QwjLv6PcEWxYX",
  "key10": "5pfmuKkzfbCs9P39oLxS1tf4UukrMyk6Qd2Z7MrvBDNAJf1nJNsyRM2Ps37kbt5cdQDwdweDCPzJSAnM1Bjb7toF",
  "key11": "3WWLFNcbs5mTBFmaQ6r28rNPDiGCwLCbdicirVyHb4vmUXBFtS3zFZZ1YcLzJZ33dFBLjjQ3X8JBuVQQXPqRJbR5",
  "key12": "3sx5cwUiNoGCKMBxuyXGqNNt5PdHHEtVEqNoPeNVDETW91LnY6de2SCroJFngcXcQrDiL2fgMJe8Wk3bySwMYonj",
  "key13": "2tuMUeKPm4j41DXVUcub6jw3gozMuXegKtWyXY82xBL31EE8T3TZw92H7WqKEgmVhhHn41MyirnQDYcEFLEA74yb",
  "key14": "4BLVm6wYgiYhKncdKWB1VbUZ2NhBrL2B1V73MUvtrGPW1iXNkKxo7CQNpstUJgjotxmtjFQVKoZJTd69H8yxoRo9",
  "key15": "548AUq5GyDM1wgwYnMtmWQhXJxLP7B9EVd6EBu6AW9ixWV9URvM1Bf76arXAGtVMtpHEGi1Rf53xGMQsZuiSayZR",
  "key16": "5cHPJsDpvHDwPTbNJWeqroo8Ec59QB32ivr35q5KwcAro5PpCiKcjnrtwdNqCRYfiqvZ4tjgqy7V6e1XkBwhQoLF",
  "key17": "3VVWagR3LbPK1goEW1mCeYBg8rz8ptK4DVfEcDm6yZtLuJkYAJBNT1A8rE6bekW1RqTHjDMBTvEWw1DadUdaABTN",
  "key18": "VmeC11fbLWbrycWLu8Xbwtc8jQH4FS6ZJLaPJkp2DsKwvvzpDpMchSPRo9ysA1h77aYSRszYENnZ8H4spMSmjJN",
  "key19": "EfDnAZuFMAi1J8wrD54WFatwVf5qRrnLUvc7J6gLaVhCuF2cuJKSfqEg7xfXEGfY5sLtLZLQAazpmvYTskrKNFJ",
  "key20": "5SfsPM78iqq75hviVdgYnvBhZxa9v5uBrFXVzKY1pxMEumPgMTt61rufW4TVNJWd1xHa1ovc1ns1ifVT39JGFPMp",
  "key21": "3LXbSgvr2FABXenf1WyJDBa9CeGucLWjmtZemWKvFGAp8u6SxfXqRpVweKragfGNSZDmya3fKyXCBVa8Ph8WMY6v",
  "key22": "32bP6mDF4LVVnoHMF2QB7cDGt6TKEV5rryWjVqekkViV82jBkeYQGo6CHN9KxR37iSmge32DEueshsZK9swGcSqB",
  "key23": "3hZ8ZVviSfxgvbwdJjKZ8tHDxhi1c2B6ydsAnpyHHkFg7Z142UaJ69yFGkEdK8BiNB7VgdcfJMUAFoxo7B8RFuyq",
  "key24": "2ZZYQG4yEFcWo8x8iBsP8UyaUNsEgd6yW5dYRz8eXZFct7TQHZ9pmR348U7boYWT2Be2eFhjzea26LTJywbcfKcj",
  "key25": "4EtoX9LTXie6zLP2SFGQWVe1mhA2jHfRMs6HrxTQijcnqkHUAQwwqY3S8rcSGJEsufjWvKmZ14zJsroyoLbe3jCc",
  "key26": "43MyZtrEfnmXr8f43R3sMLodWYU9dK7uxFuMshJMvPNygaiGCCKbgvAafq2FzLNHN17o6mBRbnBxj3KQZ5hrMTbo",
  "key27": "2e1TFdaGNe4gkQZdXRjJKsocKv1kg16BNTftCnD191bRNxj2pDgaTT8RvkyrmLyHiy6UYUbE5cUwd1SGDhq5qJ7W",
  "key28": "3iTYKvB13AvLbyedMFtMLGbHEd5oG3WJ8HpiiAgWzgUb9RqdXuErZu4BV4Jz3EAtE9Bt1tjCKdZUPK6Hm7gZpJVT",
  "key29": "4wtyekNXbJ37gtgjydMypUY9CMNxLCRFYZvRAKAgbPNGfeSBKK3Z1wsebRT6YAYGMHJmEHbdiZNwccUsMtydyWWn",
  "key30": "riRXeZ4BgEy7o5q8mW5DHu4YLmYeV7vwhvAn8yz4Hoto21yqCJpPRjmpq8XqgujRbb5gTshnJ9LYpkBARCRzimb",
  "key31": "3ktERXi1f4fxihWoDK2BsC3j1BYtKBFq1r835UFcN9LKUe1JxT8iKVP1csPvr7re8hE7AnwtpruGUBaAREpDKXNR",
  "key32": "2iU4vDbb6HJjEPES37jVLbaVe9Ho9g66oj8C1kxmDT6T8Np4CxKSR6NXVmR7SFwJE1nz3SwXQSGZEg7ZCno4YpAV",
  "key33": "4c6RkWAxpkFbCm24sAgmqdheKeJ96JvUDPE1iQ9S2CyR2yhdPZuYWUfdoEFojuQL2WZWu8uxYuG4dzMGDYfD3cV5",
  "key34": "yrnf4B14YTVc2AH8ovTgkp5d9DngbBRSwcgTARH2t9dHj789ZQvx9cgnLpBedAmC6mD64zBtgGedJpvhVF6SkYv",
  "key35": "36MHxf4XzU3iDpnFBosCJs7W1WukjHNvdbYCY5osSXSiZtLV9H6g1QMjeGKvaGgiAAMCKaeroQfwQMmtejZi4Q7n",
  "key36": "49u8bg2umSAY8REbwDC8xzccPnMmi46k7WieVXE9NaeBwSvwcAkfqkLnvrf8J6hFjs1nm4jBqYip8wtMMX5h2SsY",
  "key37": "Fk8pjKUoUbGarkv6xugYxZGY5FFYrCAji7H4tSLtYdiaqZ94icEA7bXx981ymwTzs7H4dm14WUGnuEjXXgjJtFp",
  "key38": "2YbsEDfzWutq7XshBfsqnwShgRemKZNRnr3JXyKhbrMLMUo8bQAqtbSqakmpHawaqPEAftuurw1N7SrVxijx7nDR"
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
