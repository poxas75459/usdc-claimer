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
    "2wabZ7tuob66HqJC3rGzCrNpZKhK5z1Fp1JCMCMxmSpM9EUw2jTBbR53xt9Z7TwQP4ypq59uC65wZxwe8YybZH7x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FMCZVXDnUKoy8pnTEsAPstT9upYpPFnrSmMrJwBWp7nfkABinwazkfQySydfdUqaYEfHHESntfLs1FhZEkrD2Dm",
  "key1": "2uN6szmnkjxXYHDyh2mkGR3EryGRSU3uHqBCBKCsrwrynN8sNbftwYMvQJ9DXc3DFbFL3WKy31ocwCLv1GyMDLz9",
  "key2": "297MrSu9ZNPPnGVcR25vitR8my4FUCfic2mnNyy3SAYQpsykPU3rVZHfufyGdBUJJJGbxsZYqrsJ79mVdRohNehy",
  "key3": "3ADUyXBmxABjTsMVK1uXfZyL6xMifjG17jFkbWzeAbjZ9fMSpwz3WgemWxnp8vwDqkrme6RzTrmb7pLNKKF9pCsy",
  "key4": "3wG4V2wKCVTD7nwwnCyThYJEwhkdUmF3TTeFmyknNuFS1nqhS5SDfyxzk4j4uaR619AVjTT5L2ojnrfvYvjcb9ia",
  "key5": "4ufafQn8roeAi3BUYrhkgqvkJgo5ZYzLUz9E8wzvngqQ8aKijrQKRbLGUkRwKCAtxMn1STmdDhewTLaqdGnEocWC",
  "key6": "2HbsoPmCDEUABKd4U6pMC7sPB25e576uFfwt567WkKwNU8fQdcKjgifXCcL8EmEYZ2HHWjkgVRBJruVU7FkSrsqT",
  "key7": "3ghugXtWhYAvTuuCUobEtTvhmCRfwN8QFdHftzFB57czUtcCKXnDm8sSgqJGd9Bd4ZFyCjTjaXwvFi6xdjfoZiXX",
  "key8": "3cBYWagtdq3tXYAciTxFMFkwWvK15Ka4mR3Mqq9ZeHatkj1etBEfBuH4YYGyGtsEmgic21fxmdiiUTWNMMx72oL3",
  "key9": "3sHfkYRkLpzovHXvZSkQrMwLj2VvqGAbNomWPR3wnhLbQjkxeHWcPV5fdNRraB9vyQhyRhSChHMGRGrEh7voaRk5",
  "key10": "2fCkcWMi2nhMwrt2moVJj1VvYh5CWsfsVBGEsgFR1kCX8pmGFZo4Wi5a4stnHHiQD6fStucKUi5JJDivXiFzBNEf",
  "key11": "2ko5qKpdzsj5QAWjtb8aPQJ9rFJPdS8AkNf7tZso78WiJ2PNznVxYwh757KSbyLe2WA3F5eZ8SEEGYGYqDPubkkn",
  "key12": "4jAtWVro1ynUrDK7XU3p1ckGUNTyYK7Bj2TP15UMbNNdo1QUfpFEUaD7Fbq6tvm5tnnxZ5Bqbo9nS66YiChAZM82",
  "key13": "4ieT7obgwSJdJ1mM7Fno9KSVLPDYQyixL6jLNzUUg62uJc9oKuRzjHU18wz7NKRBeat2WHNRsggnnb5kz9dvR2Vo",
  "key14": "yhwhLM23hxJj3eiBmu1vJtJqzDmeNhHjy1182EqkCUGjwfEMKhDvfbVoJ83H4eNERu8iR1UJXaC1jmLUfEC18Hq",
  "key15": "4HRs5eXczB4ado4PX8hmcB3fvAqi4HajE7EyJSbk1TBtWWoSUmivAAXDdjHfFzcgUdCkv6xrdjZDciwKAJo7spNJ",
  "key16": "5WUVxcfnAUGriRvxwMTeXYLvZohRrAH3svQY2PMi5STro76KDBh5cP6vCVf4ek8sM8oT5SgTQ7R381a6R6YJDsDG",
  "key17": "3aSU1huBMz4XHJyQubSUW6BBfqQmRGywcextEDrDJjMQ6KzDNh8wT3M8xF4xxW9mUMhtdN9hwagpejernfLe51rg",
  "key18": "JptqR2Abyr7hCWCtV2LpduW3VNob9eQd3mSM7rTY12YZ6VJAb2qTVukU6YKFoNe2aMVc6RegfkgEky6duMuZ9S1",
  "key19": "3THrFzTwQFwbKijjPaPnxdczDiTJJUeD8jgpRQUvCfowPksTUH714o8Fes6uVRiscyc8FvuUmvDjfRvXZPSeWETD",
  "key20": "U3kEJMjBbkEHCtVzTCqBfAeUD6ShDJm7iGCagrpa4PCMtmZrdKVcGfA45onGPsiJfJPThNhzLiGraxRDRd2zk3B",
  "key21": "4f9cEJ6nytSgBTFxdbMRVZhYfVYvyRJwfEPFJyc3v9p7rHuAETXKUa2DmWkucYj6q7Zb6VicmxfrZhitT5dhDGFP",
  "key22": "37UjDBh7fjYRva5vMb2jtcb8oz2VgpsxELdjgDpFhkTr46TSEhn2hKzexrSCWf95Kfvxu8ofxZWBiBqKfDKmGrcu",
  "key23": "4aCx69ngmWKafJD2ibn1vAHpjoRPSC8WPDDkHDLpEU3cWnYf6Uo1ERWveUFEKparp6ijMYVCdPA3XV3ygYeJiLha",
  "key24": "5kheJVnNDkznEk2kt7RiPtxsBGoF9dmx3fR635rQXDAWzsnd1JwFZ1FvMJjqSioY6GqUjSszCDb3YT9A5ZGPPk44",
  "key25": "jNuUravg16Wbb9LNnJwmwzsNbSFXtvo9kbQ3HyEv3YCjsBojBNYJjGQhjWrrkDCU1vwzLWr9UeeCYhCVZuYQ3DZ",
  "key26": "bnFUZcLTiiQqubNXdSbQcBvfTAbt9ou4nGcHKYT2MepFehUzMbu5f1qd8qAwp4PD3FrxB4Ea9EHWzn2UpZor5hz",
  "key27": "3Bxon9R8M4BfuSxGGx3VAYztiM3gfbYLvWhSKdBsfsXxCkVtxDrj4st7KaKiAQbuiKApuqbpNpsg4EW9dD7rY56y",
  "key28": "socjGwJVr4tVfbsMKyssMq6hCYdWqm3BiPFSCrMMDBkQxxPeuTHb1Y3UvdMdoz6Gniv2d3BbxcF57BQhkkcid1W",
  "key29": "2pFpcS2DM2tnokHogLRf4XAtTSg1iDFLcq685vhLYcE8Jfh3XREHLqzaTmLNMxCHYch3Ss9t9DtgVjtC7E5toTs1",
  "key30": "4zgvx1iWo3HLZjySHzjkvGUtzH2CynZWzNdFZpM7AeeD329MTTrYQ82NPbdWjn2UuHPSyQAPbkYaSsqjcsWV8m31",
  "key31": "2VXFeRwaq9D6C4NWUerpsHYVrxMgNmEJThaSzNaGf51rzeMaFMdVHZ2H8dyka7qMWVQvd1vC9b6yyNe87Yw2hDt6",
  "key32": "3NMbmk2hhYXypxeC4ELomBXyoRtH34Vq96tDGMpM99tXL1ah3E8kuDXe3Tb5G66QcfjxG33HyvzWuosYbfLq5rdR",
  "key33": "2z7wb6mQJj6DQ6MP4sLqWtLd7WDYBBo6bD9h1HJrggdwSNCibhnj1ZiAJoFkVEytfuhRej3JKGPYZcDW2wxxAXKn",
  "key34": "35sDSbMsP9t6WdSePnB27k5PXLr5L6SCoc8ydRF94NpGgPxpP9UVfhw5qkNZe4gXvT1eM24KL26PjWb8e674RG9z",
  "key35": "5v7UNMCKACMTuuV7QwQFfdYRpxcw3cp3hY4tFjiWhbedDGkLaHJXF17Puyw4vZv6s6ZJwyhmepYA4HiANNaxoiWY",
  "key36": "2Ex6DEKGoLagtApsfEpwhZLCdyTbaz8fPiGbRs1z2knmzX6LSoFUN9CBYB3o4B7mNFLwHR59WqDQHN7zUrykybew",
  "key37": "ZXkoRMboARrADSyTfNKLtjJrt8578ivSoRzRBCKbE8Yag3af7JNc68h1DsFynL34faZH1AfSEBV3BJVYs2wtXV1",
  "key38": "4RS1QcmHCEL7Xwmvph2NzTKNQyshqbRgCPXJQFvZuhggKhCUzmUf4MGedff7rZWNZsPPa3QPtdw987HnLLDuXVCm",
  "key39": "R1CHFJHY83MEQvtTZRCfWygzRRX9R5vTuB8tyzpxhdgLbqKVAKGijQSWbeLb5CiCCAWHeprvuvQSdpQrrMMUteW",
  "key40": "66BK6f9m4E6B6VLkVbfSMjnMCBZh9fQEZ5vyK6xAxUtyiyHvUDHm7kfgH9PAU9KZe5brYtcurq5aeQLN39LdsCwN",
  "key41": "61oZq8ddgFPYq9txFsUcdcVCxiCR14Qhw3qHKNy8LZUqmBCpDzSvh8x8Yo3naSCC1NKgEMuVogCC2Czyz8HS9ysh",
  "key42": "4ofyrbhP3fTeocydeHzSj2mSyU8NtnLLUC2XYS6sWxdskMzzAmZbpgLo4Frnu2saVLVnvJ4E4qfmKE6jDvdw3uGx",
  "key43": "2kpwQrjeC8dwEhpXpr9EtUf8m9L9sMhU8CHRY5qz1mnoWYiz9gTDmDWqccifkK2K3BPgiah3u6cWcMH9rNmfngip",
  "key44": "4taBqbc6vrbM3fZrmZ65uxTLybmGA2fcPCaBmR7R1yyVHqHAaJqpW9SJunkiYstYeDJNaisrKsuLXvXyRWMRLui9",
  "key45": "4p59cT4wET6kmES6QA84uspfpYcJ9XbCtSgnxyiusP3kZBKSE6ksnWxPDpsjgkYfnMRzNH3GLCgY8PASEGpMEfXG",
  "key46": "5Wy7KhfRTgLwmkontugMjNyuBLqnGZmA8QnLJUBLcnjFBMRcsA9uekzhdw47uhoj3m1x1x8e3kXFEyKYuinTfsSR",
  "key47": "4X5FDKq7iBnh6aqh4yid4dJEcQ76LUtLjEmc24wQiq7FS55PYuEGXMVwT13L7867ZjqXyktnTZTvGPqAHYX5czrW",
  "key48": "5kY87hxumpsncSk24XsPZe4yC1SB9Ztim1XwRUNYU26DMadr1UVYw7jNogbjamq1QcpH8HxrupJQSmqQ1rSAQiG1"
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
