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
    "5axXy8PTCB4gEHUZj8BiBwiG6c3k8fbKw8wbu1dXpUKuwo8sdkvcahQ44PchCLNc8ppmC1mNJJX7i5VYyNdhydL6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42uMLgFQ77Dci2Sn3egh1TWTZvTDwGQAdLnsivPdLteHKPqu6woY15UJidXmzwbT9D6dLwbJZxCo8ornZCffxxFe",
  "key1": "4X7j94pCU2h8aNmQfwr3JQCw6vbZkgJSQtqr261VxKMkwVGRHFPbyHs51L3F8Kyghv8CeevykxymLsDFK6xNNryM",
  "key2": "3KBnSzrCDgTwmhJGC1HSY8LGyM7awqNAYPZzKZQ92asMFsQUMsYH8zH518kvzq8BRPcJtmPGXrau3g3xY457xc2L",
  "key3": "5G8WkT1n954BcbuYWSXc81EuXTZEwkyc29bxXqMy8sPmk3Jgk4SRV4P35PX6MW4B7sYbjm8vobhjXqypRsUy9yiQ",
  "key4": "5573Kbkri8zpPsx8NrCdZCZgTLDDfQmCNfDUTm34FJK1DCcn4jjK4PkKE8ghiTEuv5WfaiVmEJD1C1TkUcN8hRG6",
  "key5": "zjTsvhQ7fWDVmTXRmdkCLTFwNathLbWtdA37GBRafXR2ngZLp4CViJdmPaauywHjoHo6J7aq4ribErXxAkP5Q46",
  "key6": "61aaKPTNswx3taZ33cHwf7rzLRrEqqerLyxfRB1DDUrif3jgHJTH2NL3s5Ebz2hL93p85erFMe7GDtvebHYfpnZg",
  "key7": "4h8geTipEWAjLr6tBAtx8GMjwvAK7sVEoYMRa7pt4g1xhSmQ3VcCgMpJaERCJCrE83o8d7K4nBAFPKWmXsAcyvvc",
  "key8": "4NA5DbTvvrchTigmUVcVU92omqASRmPSvtL96YdXkcwaEuup8KZuRDu8nHgLVY4LLCRhnineN1U9ARupKXgP8Fdw",
  "key9": "5MxZiTp1JzEjd7zTPfeg3GdDRtXqwqKMcTL3tJo88yFrXsdnwyg7hqr8LsYoj3ZBzEZZZcdSvhRxhd2Dma2NSBee",
  "key10": "3VTwLRHAjTTzZhsBQuAGMv1qqcHY5i6KELxrkRx9thRRBhmbJ49xnH4eb58amNG46DAMY4nsPgse3Yxs96aLbspR",
  "key11": "hXvZnyMJiXCQLNByTqskjvegKSyTHeYL1Btnj5FtzoV9UwqLAAQEzL1ovNszzN9TRVwuCSTyqffqCbQoFZsYZw9",
  "key12": "5YuGbRx7ZKzNB9scS3ztaANUuxY1qdmNYuMbt5jtpGTDdQkjUW7jw7sKdezvAA7AoTo5EHjw9FQhW7x7arbKp2P8",
  "key13": "2PQWqWv4kjdyEP5BUayiZaGeCXTbRHjgNdH7cvUEGLsHxUoCrv8MTL8voLSUzuu1fYHrXYkXVCyW8f7SxHfWpNCf",
  "key14": "5PH3MicGHDHuZuYYr8Kt5q2cTarZcvkyF9rLtUvV19mXyKS1JDWCyKD76s8cJegZpsHiumfttVDAWLpmPEDvUYbL",
  "key15": "3qntezGX6MBKBUA4wb17ncts8zPPN9inxv1xp2diZEteohKHssK2upiq3RVYaHjpGZJoj7VheuqA4ppRU85DTcby",
  "key16": "2hfaQocAeJPrmgwxTyTNNDYJ78fLzx6LBuNZmidYbYUhU2ncoN7JxMXAGkU47wfhZRJw13YiDs9DQDXgeYZKtbx",
  "key17": "4WCvc7J3y6m5yjNW4gaBZv6sTCsJNNiAW4MP39LdSVUcHR1q4MsgEpXoxX98dRq2jwSTRnQWcPHbqzVox7wHfWch",
  "key18": "3mCfs339E7QJ37XMH4vZR4jz9s4S2NmUXANz9tokWcqkbg5NCRtS7zxEY8F8vfrRZm3uDKZdGtD5mPsvNBxjFFnX",
  "key19": "4fPDkWtyRP4URXELvaLzhh16N7T3v8NAeGcNDrjQcn9dJgztYgTJb4PtanRbA9xdHNu5ddGfsjzBhhvCc6H1LJHY",
  "key20": "5YmyMifNyvFydWXQjgKzJ16ZezXU49dJ1Pr54QWGApj6KWUvPPFEBM74nNc56cUg9oUBdXCdjzvneTMVTNuqGuQw",
  "key21": "JcJrX5mmveXmg2FM5wMqNKDrVvFakNcvRiYPb2S1kHTurdeS7kXrbuYdTB2pkEQFd9RWtf19gWEfrAhVWxtAjYu",
  "key22": "3nYCFCdTdPAhAwhpEZ6hJcPE9z3VWdk1d1iTeMkggkjQ7ZTcWUtr2UW1RkLcmJan1KgP6trj8ASogA6qf9pVHpdN",
  "key23": "vvty9WxSW1YpNgGZmbHr7f8fZXBDBb2QYKznGsvhvFM2JXUXtQNVV5Nq7Dsx3jAAPiGpnnGy42721hWeZ3RMeF1",
  "key24": "2kEys5JMZC4hCVPxJbYKxSLyJaSkWeRSMnUfDH2V8fhy2qavdje5EsxMZH98a177m6sBf7KPK6VcBwaRTNdLn2qg",
  "key25": "tCv1eZK2kUrET3kZYZEmPTSJ9ZXftaNXpfpAomrvcqPNoWnYUpvvU8gqXMajoXbEt2V3LQ36SmNHdcJ8soqpGc9",
  "key26": "2c2CuBjEb8WxrSLUUqMy8T85UhA7GpqrjaKBKQht2vxZ6m9AUpWfMQGFSd9nuNDYmp9CXQXZzZuG9a1H4X6Eezxm",
  "key27": "7amWar7wo4SNMAP3L3fiRS14PPnEFvFpfGzrM78hbRQPnFsZc8NWnLmHLrUZKwsu6ZSeCnvZbYFAT5jQhcNhygK",
  "key28": "3HazCV299hmXjyTxhi2TfUoPXhXdAQxU1xto1Evswyh8CM8Z8Td7XJM8t5SUKc9ABL7PpfHBXMpjyvdwccvBwr1H",
  "key29": "3hZPs86GFK4DCo2zePuSxK3qmAkVpkzy3bhntVcWcdTkAn4HaPVwBWUPt944Erk1NGgCAo3B3hhSKaztokMnwDUW",
  "key30": "8DYoVxK71vWS8hYstULJ1zFQ1JHjMbJ3vXaXB7NJVyYQZtApUGmQvY1SWnmweXSA1ouuaWWnPq6pd79rM3JQLN7",
  "key31": "2kvD13PiKtcGaLuHEvdFB9xPArzWDLEowLNaZLXGFivNBWrpHyvMJ9ToMq8PLEoXfzyAenZqnAYKLoqa4ThqdRQg",
  "key32": "33mjbTLKrfu2wsiK61Vfpvm8HQoDbxuYTNBmCdCxV6crisGUfyiPs7Uzyt7dTpXXK8r146gqnuA4P38WgfVFXog9",
  "key33": "5JQ9fjaQq8exuFdxf41uXgq6Rgira1Mipvi3fjsCf7avx1PQETNp9zoJW8hsXifidqdMZMLFSD3BFRJzmjWdr3j6",
  "key34": "55vX1h7V97FDh4BZ6jJW5nEkk2zUb6nCk7A66QWq66fYthDUwAqPktMJAKpGQMLphTdPr39tXARJ9kbWoCYkv76o",
  "key35": "5ZC2sRkrT33a2LeGdkoLXh9pznxZfjsLTRtPSCaG3Ddjk63sxG6GaiAy5bQohwoK1frmphCTjVcC1M1S3ezFaq2t",
  "key36": "2RByozsjG39DiyHdJvVEicr9BHnhS9nXttimJzoaRWc7c4ofVkup4BSFd4kbgQ7ug29p8jhJ3Lz4KhHNAZ286M4v",
  "key37": "2nUY96U6WCF2n5UVLMJ9thihHb6zsuAhsFjWqbPrZX8Rxudw4ezqTk6mDNE7x1Frx4YggTs7BB6YLs4Eo5Me3R7E"
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
