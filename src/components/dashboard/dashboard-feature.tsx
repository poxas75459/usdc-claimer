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
    "2P7c35UY3LuLJPPENzkbh3iaMMyPu4Z92HmoXu1uJUvwXShAyoYkWh4pozqvSttStkiBPktNq57zXam83mMUoWn1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ahgywetjDJJ1nE8t83deCTSXhZjtLyu1u6xAP5LuGHvQUctuvPVSjD2GmvyyGX2mAiEhjHTbyHQHhuZDL6TmyYd",
  "key1": "3D9xdbGwa4pvLjx42erpSRgSKpeFjmzhaYVVJCwS3SPuyNomiestxiqS6UeeMLHpTUJu8rbehdBx78NPkAuJkaiD",
  "key2": "F3zTSkkLJY5K6nj3AWJr9HC2RqZLfmMDwf83eBfLAsqXDDaFo2WCBJp7zTqsKG2U5wfkVKPqfEgFjZPCJA3mWdf",
  "key3": "2wozEEakBgD9HzFnnsBXMqy7nuC4yGE2MPEeYQy15edYzmjKU2LA3U7keG1xVaHAeTY2hEoZFNnc3G2wLtsr3baL",
  "key4": "3Fxf8JsPMWa4Xgns8eYsFemfzQpP9sFYKTswSQBenfF4ro1vWeJbjPkc9nLVRwBHpFn6PtvkuwzPHx79rE2yC3sv",
  "key5": "23w1eHapZxTWBX4PX72yjUwd93RYXnPsZ3xkC2PcpaqKMrMLZp41cFoxVKCY1Ln1seuvdiBLxiVDrbrp5UsmnQEb",
  "key6": "4xuSCHuZGFUSSBxCXqnutQVpxgFJNP4TMGeHZGbErhEXCXxPrwZW4YdqTCVyJA8dD32YcxPynVbdUuNJtLutEh4n",
  "key7": "5LoyjSUvgtxGdjQ7n6ZkU628WhvgYoCQaMexkgDZ8dSQwFw3dQPHZu2PhXYVMCDXeJ8NJQ5E7TqXnh4rzDrhd3c6",
  "key8": "2YEshyBhonTGQ43wccZywkQzSPW41RV92We7WoTokEKVwAgGYGsKJ4w7GoV2mU8yprLDhNAGacPoJYrMdGpqTkv4",
  "key9": "5dPb3jFJWChiss7EyoATCpBLsRoaVcv8U3V4T9159TcuWxWCHNpbGWisD2Kd7HTS5WJy773PgXJAYfMTic5Hmbwt",
  "key10": "678oM2rHv5PhTukc2AE3WJxSyNTBLMNeZdQ7VNYLcijWiBwd8v6iPPLn8dF2dNRGdVu3SGNMkgKLQgMUnPPXZeqo",
  "key11": "4QCcQjYwA579v6yP8t62bdUL7dZ1A835QXDoEonAzy98Hq3uRStbSTZViEiD9nKjPjQaV65xmx28t1bUR8Ur9bd7",
  "key12": "4JuBPKe2W3BKUNKcz3D35w3cdhV65FwaoPRieLVeyBRxbqCF5w2fe3QUtQxhRFhXsXafRJhwqrCrB8HF6CgyWVFe",
  "key13": "3Gv95jB6BLejTV216TKqTFPQHm77oLg2WaqZfybauffJDKBACaBSBxcwjDMqZxBaPA4jS7tVMe7TBzRRsno7NUET",
  "key14": "4wsv2qGqy1mNwYtFdfN7yedku92rbawKRrDd1LJR5Y7krEJL2CajEKH2zHEyiY8L6jcLxky7dw3UWephmUPmsyoP",
  "key15": "hhqzKhR3LCfucdjmjXtSExuvFMeHYdb3WSWGbHA8z8wcpq1gysQYTHTCKkrgZC8piEDdTdtUCwvXvE13Ruc5r94",
  "key16": "2SkPfudpF5s1MPfVLM3wvgva7n1h1m6mq4hGLwG3RtKGbfTrbXsEnqXCnQrj3CTpASR9LmrLN4yESxA4qxRPC16j",
  "key17": "5hF22ECXXLWb8bwCe5kx6sqhp4SBfJr39FHjEXdHpRrSKvKxwUkmgNWBpzmcaezdYqpAPifhVPFr4LsFyrUKtcrq",
  "key18": "4RBpe5RQLk4NHFUFjYrmhGd9cNTHdaZWGLeSc8r6jHdu5474vy6kZ2gdcfJmjM2SHNN1LsgeaemJJx6wVot9LC4",
  "key19": "4W7eppSmLmtnXNhCGfgTGywt4G789UetAWCuscJmvcCjgahVxSmX5D1FqnoRMRiiUKJooHUtt7XMtqJZapQsesEK",
  "key20": "4SKLCzuA5eAB81Xa6as9oMiHtVSSu5uYfBMGAPmMHz74aa87QqeDtbB7Y5gEM3TzEJo9BugpufnfvwTm9N4NTqa5",
  "key21": "2QYZRXQHBxsPBmuDTAYkQwcrKzm1obY1oFtoDNJonNYtGBGuy6h2VsF1fr7JqzEHfWyft2jr7eKzAVrZXb21AVht",
  "key22": "RfHetUaJedyoEbyPrkAAvhDjdXyV84weaBg8pH1eaPwfFyYRM4G4EhMfBPMiNxQopmoeMnRXwzJ9A31bkLmPgrZ",
  "key23": "3EynLpUvoamZ9baoWzS9MkkZynucHj5mbrFhGtrHH11UaewmgfuAq5ijtyyx1enKtF767AJEyCpE4iCNkS2Guddm",
  "key24": "3FBUSPZUVQTxHs3X2NwpthKvq6Z1YLcFsZUqpMapoqEuRPgcWiPWMecaANNXB37RZiLiiwcRh5wYxoNEfoSxGZsy",
  "key25": "3xewSiFmeUnJVLmeFi2JTRTi9CtCmgFCM42q2ZDoiRojVuN4FbWyiYRuP8Z1XjHreg3chPtitsaSyFj8CYV5Wdfp",
  "key26": "KkAaA7LRUw49jJcjG3BwFSf2RAx3dTd9vaPqKQAVJyg79ZW6YkrEvzBazzB5TKsKmtNeK2b9ypAAqbiaafc6zH4",
  "key27": "41YyfNbCEYhkxtMwAK4aY9f4gz1CaoojJTafZCbWNhYfkFz9MowiJREr1tdqskTmtUEqfErDhFPuBpLhADUD7CTA",
  "key28": "5VWaEN8TyVoCs4pRLWpPrhGxBQ5vmotD1HRF6fRXhRBm9jMRTEirtxhtRrJYmUFLLmEfX1mUwFVafcYaXojEKN9m",
  "key29": "4eRonjQmfxkvchGS4WrKeDo6AaV9vQwi17nxERMdUrkSBAf4qgtSuLTGv7kEVAV3h1zifP3kBUPPuF7biGxW2Geo",
  "key30": "57fpZm3a7MxUK6rFEtUV1Kr1wehsFAhAP6Pq53idc5gvXmTTWx4JW7FWjvzF64Gfs7YMKWb1nEy7rbY4ZPbrPpg7",
  "key31": "2AuZ7gDQyQVsEScesvFc2gE1n1Bp9KQxdocmJah7WDXfMd3syBJb3zAAhzH7dQkCmPnA3ZWd2eyfCcWSEAuc1Sbp",
  "key32": "4aJ7N4YD7oA2mEQgSRpnemh5MLRPUaZrWThPkaec2KQGjL5CEDmgtb3NJaCDNntK9h24gV8V6q496DrRPw6ZMtMN",
  "key33": "57TA29z7i6dK2XgnSYpfgwsMrXZwJeALedUmfqRFuwNmRgbidJvCp2f97n6CLFVnbgDLU68XKJN9FtV1bii6FCkf",
  "key34": "5tkaQYf3esrGj1oXNepXVhADsVjvM7QRGMs1LqLzzijvhqFiVz5PrVkHoTCwSMbQMi26mLoa1dt9aNaB9ngBDsV3",
  "key35": "2zQJmhcYHWTHZvRiPChurZnjbNtSwRNLb6ZTrZL5w74d3n5fpX2Kq7q47jNEB7xX7afUGZeNif6dWi6GsE6QiNTo",
  "key36": "4HcxNd2QFMMs1nnqedXkKinDD7gM7oRpKWJttscZYSbrysZ4c1zth6qfoVvehK4dGNFD3eoPHMq4oXfa4RdLsuWT",
  "key37": "5dhNv7wpEa4gjyMiGG8n79ZFUw9r5Kgw4pyLD6ZVc789ySuqGE9yssusr3GrFE7E29qNxxWekVWt3cD9Youvmu1h",
  "key38": "uNXK3ZKnetsBZFZpp6GMP8hhKZy1ny6NHGi5nbnGTvi19PT4UBecu67vAQBtddkxAtwuQyTE3cF83pVFQFJU4jr",
  "key39": "2LGB7nKDH3iSYuE7BJHTCz4xiVdZLoCmxEwUeb8VsarWgahZkBYUxLWMf386vGwWhF1BPXpwnEjSoM37rok8RNUR",
  "key40": "3DmAdN2Q5cAQRX22iHPLoq1LByYYJg8rXrmg3hqRNMphXJiHzArfzJDuzJjLSaX6VTfjxnSgpiYEp5xPjeEgvgQY",
  "key41": "AyPDtBJt6NiFDJYbyRbHFz9bD3GTjWhB9Z2CvsaBQeJfMcAgtoWC1jaz18BYyr9wgBR8umv4CkWzGZRhFdvBEGQ",
  "key42": "34c8jfh6GwMtGgrDW5BnJTMDeRWgHPukt7irDyKfcdRS4YKgiiFUJn55758TManBkxwNEhhT14j2TBJb32pQyBu3",
  "key43": "2Qu2hMyho77JRxwuyeFVYgVxzhpJRYMXLoo7nHyao7YgWj2NVFUP4h3NCYyycsjfcVPTKL9RwSqdBgrNXTN3288C",
  "key44": "3ioTs7pjAm1HZNXtaQ21GQsQphwtAQCPjbgPpTwc63j5v6416Ern5np2kUwUqsbLEt69XZsVMvbsciCvWpoXkSdS",
  "key45": "3aA9eHs4YUB1d6iYiynx8Jt54BtMYMNkYrbJPj4SWQ3FCa1i2hSp4uXKs2fGpyx4rAKJc5UBkAkZSk97jeGaHbpw",
  "key46": "E7fePzMepUxsDaQxjyBfQHWDrNopg9wMnrz6LzJiVXZ87aoh6UqczTeYPwjCUYR2ss5aXpw2CNYxxREUjCvUkgj",
  "key47": "4XtrTvvh3HaosJ9o5ZDw4kGWfUu23C6bAdrMsA2mFGoT6tBSaiSXWotbMvh6DnhSgSgkZzr6uM6fGcrL1NF1zHKK",
  "key48": "2jZswdKRqAKgst7Ar4jtkibH1jqWhfvXH37Sq2jT7QNdJSeT8HWxnpgv6tbz54UKsiSM4xehercsYwgNgxmZqtqJ",
  "key49": "5usKcu5UiDSSyDLv1pDH7fyeGzjzrTbRZUkQ4Pq7m6thpTZXDEAeTXrQryqAr4A7aCviUQ7ch66yWP7kmwd9X5dE"
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
