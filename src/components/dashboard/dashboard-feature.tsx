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
    "2ENXJgRejZ7s2Tj86aUnpjVheAe1ewHjkErtLALBimgPRV4fGngRmFd5jD5UvzqKUekGMJUDWR7eTp4vauGA8MEc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oALUx6VKEjDhwN2KWBxNAZdmzsAJ6PvT1e2vFAeLncmEE3vCzwtMAGkjhzKuazyKei8m9KvXkk2uZ2U54NTAcVo",
  "key1": "omArYhkBSVp3R7MqFKuqPQ6tQzj35AHmaabzch74ThsfWXie2LqS1X55PHRCahxfR8w8RyYKWVoNzh5yJ97BvDr",
  "key2": "2ApfUWqo7J4MP2DCza5zMyBtysBi6Z1C6EyCHq8ChkWnXsdiY8sSih4EaP6kwCCsh3j2cKSwP89LPhnuVgymzmFg",
  "key3": "3c1CpShHDmoxah58T3RTDYQZjp4M3pUBxmiX9rkwndghrgP4jDno1DkUTzkYwzayVSjjK6V2Pb7dRRgxQ2eUqtbk",
  "key4": "5moXKqgKakwfjdZqkgmVaQpZtZSCvdufdmQf1iMLCqoyySwfxpruQLL2ggN6bTYeNHrbSShG2kceiW7FodSZw7x3",
  "key5": "2jA6SjUWay99s6B9jLdeKhPHB7Kmi33up6phZ4t5uJX1cYCo81eiNt2LuqXsbvuPEQtng6GfD5iuGp3G9NMJMopk",
  "key6": "5wJN2qXKTUkUrwFCDvnaQy7WF2dqDmS92YWwGLfY6LzjKqR8zTNSPHxQVCzP1HiX5pBrcoc7VXS58Pw95mQS8LxS",
  "key7": "NTAyG9sCdqP1YJKSj76igfvZ5zcECfBsRmioSmY8DvUm2YDSAqrfwXMwR6y59qtwnV1Yruh9bVPsdLiCKc5ssKC",
  "key8": "2xNTBc2ur8CFwk62jCrBfoutDY2JULE7QpH1c3oTnpHn5etPh9nAHaJ94spaEZsd8TDChUMPpemMKTPzEyz9bUwE",
  "key9": "2oGvGVFpNADVpJRKGYoWnViPFPg7K1mM5fFo6p89pkGu8Na58ya5FmVSrXFpKaueGNEcsXKTMqFmF5WQtR7JLAwH",
  "key10": "5veqXMEvZec3N5S54RGnGHNmVhYmNc7nt6akxias9X6Nmdm1qoaZNdmPdPKvWkJtkSkJ5webiRe9wj7yurYynFm",
  "key11": "2d68EWk5E7XfuuzDchU4NGBg7rAzL4J8zWt55q8hppkawzFqF2XKednNTtnyJTdnauMKNiAcsfYi7ek2kUCvmu7T",
  "key12": "2waBxapsVvUyqvgCcZGdSBQq6QmfhjUa58arQyCnU2Bt9GpE7utA7xR4tp4XfkYgTr59Lu7A5GjeWBKZ9QNdk5dr",
  "key13": "JFgdcYBgrc1RUFtTcvJwRFKEQHHHv48Qsq4WzDoGAcdDw5QsNGxxqmq62WpyVS2uuptuR5HDKLXWqw4Me4Ho4rk",
  "key14": "43HgYq5EYJqAWoCW2a7jmJfgwDQe1XN957A2p3iwxpqiQERqxVhry4A96SpNNs9juxscUYkneL8hsgoGM7JTVp8z",
  "key15": "5gQ543QdijwEtfWwR4nJWAtYiMm9fD1s1jX7BjiHMKbL2KhJF7qGwrqyXGQU5Zg9Sn7j5sXhoZNTYQnJpirpY21o",
  "key16": "zxjJYyZRKXAFeUuBKioMASUyyYZjXNmHxchsW19gLBNkpcdQvTTTwSU43uwDmReLtcxKCchLdjtC4Mc48z7Y59m",
  "key17": "32sdYMtGC5G5tqMaCKqn9CKhMzMhQZxVsR4KERo7bE4HudKNVa5eC6gw7MpWnsJuGgRWuskRaGhGBvv8grov5zdn",
  "key18": "D6oDELsL6PcGFbCdmQwmgmx3J6rHKZg5ygJL6813WRrnextwkUDCzhtoyJ5zqZMvc9oVCpcMeFmmD3YGKTqinMB",
  "key19": "2VXqXeMsgH3erv4BJVMGdT7vCiPmKhmnRhGsSAu2aeHB6Q63AbFHZQqEEnM2BQFpAZrRrY4MvWSi9sLWUxW3nDyV",
  "key20": "62G5JB487pxSkwq36naFxXMpHo9s4cGCXg5tL4oCX6wojV5V31s4t1LwJn6Gip2AHC8jzxVsNDCMjG2r2RLw7q2k",
  "key21": "4YnLvWqJSjpqDSFoQzq8kEVtcVCgjKBJF5ENFsRKii4fkXTDTRKEKb7wSL7SL7CEm1FzGS5VGFuGzVhBFGgpmtDF",
  "key22": "2tYj67gaZ6NJc8UotgeNC2S5tGJtvGiKHnBY498HmD6mwHmZCtXbHTrLoXxqy5t1fkqcivzaToBriUShSEMKpF8M",
  "key23": "2GvvrnH3155mKMKHivn7ZKYqeFpZ58ss4h2J97bsftwrC17AaoyVRGzVrTiNzhkQ5ub6T9R8x6UfmKPAfwbww6pe",
  "key24": "9rMNKHArzWM2F3uwxid8hyajFtJ4Fvq1HqSiEhdF2pLaoyoDZLtCgZWyxwjcMGH9Wpscy1GtMWKquzjemZZ4fV9",
  "key25": "crUUuRVgBJezbrag9Dx1gbNPpay1fMiVLEHGBW4dVLCzffrt4PYF7wL59UKT5b53Tr5T2bhJPToC2knBuuv21jm",
  "key26": "4z9F5SwzLWctCKUWzzWem7mtFbgw3yhp9YQviYhCwZAwiBNHdAtJpi5WSDqntXZDe9ftLjpucfciZWvBir88Jzdp",
  "key27": "26yvAhqCgFJNFKpTUVrsAVKuQHagr1Hft5MhiyVifH5zFQ5L8nh77arsRWwVT24fq5kYq16Pbn65zVYbrJzsQXeL",
  "key28": "5cLcwYMWFow3d9UqiDkrsHh7TNZdWrAeZ3vPPFwErApPmZttxXpo9xefbj5hPjBoW5cX4nLEovhSQoQiVoQh5k4w",
  "key29": "qqtTVwwUcP1vMbKt8QBW2keu6cHzRbzSyu6izWUa8uDyyohGxThbULcKdesRxuxLCT1YDnBUMmcE9pkGHDKcbso",
  "key30": "iJqJQJFNQKAhPjRE6LhqSiwcpMsZupL4T1sxYitiByTNZzMpRhqDAGhpshpW4xWoNzxZirezDs3frfDJ1MixY26",
  "key31": "5Xh3xeoNq7CKQG2G8V1SyNozx76C9GXfDvWaZuwYHX8U2Yq8Pfvg4mgoSiK9f2dhF2DpJ2vETeYMw3Gn8A7vXevA",
  "key32": "RwMCGyEozg3ZHGBMYPMHv1yftm2TFGX1EhLLQyqZy8CEfAGcQcXZXKN49saq35YGR43Mf6bEG2cjTMsv3ZjZDxA",
  "key33": "5HDoTANWcWhyDpKQ3WH51mbW2wzHuj1yLWgHYu7AcBciHBNKRAi4AAUitvKTN352C4Bamr34Rbzw2Q9ARGNNZqaR",
  "key34": "KwP3es6PZgFDQM3f3PshA4B1cHYeULcREUfTCJo1b29tqVCBq6ZKQwXGrEc1wDwL5PQmShCmSpcxxV3y1YnHFex",
  "key35": "3m2QaPhR6co1F9P7GsNUDJZ6cV8cr7PwfDZN4jFZ3yEn3PQksgnYi9cCHD8yXczQbAP1ex68WSXGZyJD5aXvqzef",
  "key36": "2Tn9mqQzBBUrUnqDqcadq1uQCnSFfUKbS3p9sgJdwdCmD3q8ocWRDbi4oAcAtdU7LYRD9mNRC1WWuqvgCXAocD3J",
  "key37": "5H5RFN9P37GJPFTgwhMESucWznRuTHu8uCqJVq4n2N2yhNDS4b71KSo4Fh46QBJqopEvknfbevZrj4msEhQJFvz7",
  "key38": "vKPDEr6ijmxZmF7KCC3FLJh4LiYihhS75echUbGQwntyUM6iLt5MUkK54Ax6cbJzdYNrQhQ8V5LcDs8QLsBfznd"
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
