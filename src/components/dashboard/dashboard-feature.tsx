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
    "3Rz9EjZRGHRe85HF9thYqZABHE9musbk45ZXD4WiGcrrUpHu98BjXs7GbssB1tNwexTR7wvBYdZjDgyYkGFwjHng"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62jPgLSo8Mg6kRpsfrCxnkYTYqHXiLj11JEM7y2WYTaXF36dnSPSBEs8GVTRutQyKHnSQLZG9qwxj88ABuhCyPdm",
  "key1": "4E8f19B43cVbPxtdzRTzTsmmG1p8jzRffdJK359h6CNLACpP1YGCeL3d7SUGg7Ps4zZqppneS2VtoWAmyB8tRqK2",
  "key2": "2mAASrC1UXpu7D4aQRpzZFqG7cQT5zuv8Jc3SyxqCW9nSASDf8Puvu2UtWBeBkFjdEsJKMtCLgzbPT9P9kYTNS4P",
  "key3": "9xRbdRLKCqcQfa8Ai9GZ9QZgYp27eT3o9RPadyR6sEQspiX6eVsFj1CUokr6vpF7BJMDGgxupna8eDSxJFVg4mc",
  "key4": "3xKkrW9LgWu6yYiiRf1N1zg4zM4vjiN8YM2bUBDjRNdmP81vS3WPkk2R1Bdq3tbaDySubPDviKSYtrxq6D5mUDcc",
  "key5": "3rBMJLcMZvrwS8zLAAxVCc1WYomr3YraGhC5rxdXvDvBxHHuLx83QV4rTreHsd1Ts9YphpF7BRLK1gDCFYh13frt",
  "key6": "5kAWre4styMJSTBjPzcnfkKo4mpbM9bnyMxAky7sV2aiyrDdwreoRgKox7sAffgYTLNtNTi2X43orexNUe1vQh5d",
  "key7": "4wmkjFugzmgYwY7h8z4fY1uMFXiBWhv6qC2aKiw3Gsca7ZwheVS5gLU3nemGr4wvHLb4YuZahKDNQTb7G7SvgTqo",
  "key8": "2pBoaWpAvLiGw4yDfwvxf9jrFM9uzXtt3z2te9AXhNoDcFAc5bv6saPNuS65SpkhCMgXyMntvweJTZC11ti3oAvp",
  "key9": "5rejqDuy4mineAnXxC75AXb74rWuKX1ohPW4NnhAUEJh3o8idwmPYLREUufJyCbDXoduMpPfhveYK1eNk4SLGL2c",
  "key10": "5gm2X297meRA9Vdyt8iZrg9Q5K5xXEss2fxveTDnPHSg8zavg2NkJd96B7GYToRinUog5DRtSMQHFUnELiQqB6rd",
  "key11": "5cahNfqhViVr9j5PXS9HoQDYfgy31QGL45VZqhudMjRNZW4MHLB8QtSxxJ1HndMqrtkEeuV75xZWLHCpYvLLyKcF",
  "key12": "25mU6HRLPoi9VkmgC43SzK9FzUDSGAChkS6R6vd38ovfAhTQ4CtvzLPYmBZkRG3pVsNQxaSZnu7ZoLrgQB7hDang",
  "key13": "3kQU9sFPVN9sErdUBYCQMdpLWRqTgydFHDamCdG5pkykohXRQy8Gc5g8B6YbmECrBoj244rwEKirtSPYTK4nsS3F",
  "key14": "5VdGDAbgcda4fZwavGoTMnbyr8P3uTjh7GyVsXJeYN3p6dTZPgWCFancfxQLjQVXDyz6MWJ6CEiX9bWjgymtEsKx",
  "key15": "3t4HJQZieyMvJ6CDxzV4VqCgkYxfL29xt85bMU4yVMhUHvtTKLWgUEno9FGKtm5s4rCx5uhkRBcBi5jAi44DZc1K",
  "key16": "4Ptv9V8UH2g9HLbR1ipWZsuBLeQRz5ifwNLGxHAsPGHi4y5EzMHthR8kiFHNYvT5ds3mHCzns1fmV8dFZFRbyVpe",
  "key17": "4kSfEkSdYa77N4bjDpm9BF9zKampV7zE7vSrKiapsVJgqAcnT7PRgeqPeKhghzzqunTrRGgfwhkJwWb2Ki8x8Wzb",
  "key18": "5EfLMjDzMoaR75NZEn83cSd2ZEQp2GQsmwuNF6ndapg8GmGq2V7Zfd7PTWVYsEroy2SyK2v4bZdFQUL1qNNGSGCy",
  "key19": "4vXSjY7rJrbc1iL4qp2fLSKcpmMXg3U1iqc2o6UJ6kuUTXojcYzL62EMrprEvqDviTVoYwfQ3ZpCX9ZL5EcHdQGP",
  "key20": "5b5hXWGGDCdUYzT32ME1XxSJPugqHinerjSHF7N1didDwT2YMiHZRAU2aqLHUwU9fvJjAbgW3CGPNkjxWhvx5zuL",
  "key21": "5SYKvFE24KgNMuXp6FTv8QsY3TdmhpCzAfoUpR69tPw4eyCYCnnCKmZoXZEsBurr1eRRvLC3qusPNzRxtJ2SfgoW",
  "key22": "3cKJLGsqCYKsS4iYiA6My14Nrv8faVCDEyqjU6sxUzAGQvNcVnMY8CVPwQNNL5wuKdDPwDA73VQqRHfTTLBMaLxU",
  "key23": "4FCVZWi3V75bnTgun3r7WavWdLLK8g8gLqX6YSVaQNb77x4pktsV1TwbYCDCYSAg4dZ3diP86g4jsaGL3J6iCbP2",
  "key24": "4ap8tsXgvh51XWD5Tpzrk6ozJkxeFjMmmEzsQMnrxA13NnXbXmdsADwRcMKrcifubZPgY6qs8k82RC4UhQkF5YPV",
  "key25": "txjeWWLKmkAW5aJqwA2pgiDdBmkP8ubQVU8draYBEcE4ALMqpwvgSntBYEXSSKTLmw7WyLkiqiJ39DzG6bgzAXt",
  "key26": "pJNNh26pkjhbRrcU67h3EEYkhXhprwRw2NTGCbveYLA4GLMt58kS1rX6djaX3HCpMhjqVhTaMy6BGsETCH4qFMs",
  "key27": "5W8ZQ7b9rgxgS6VaftKWAdjrfJEDScXV4ynfZUWkQfoxEK8uQjXAdac4c8iStRZoaHTcFrt7SgNDYoJ5mJeKk7cc",
  "key28": "3qtHHHhnPMgcB5K1M29tvA7xt7U9wnjoZxDDqjaoZKtJxM1esJQuPSKSdgnhKc7uT34kQ5tWoKLYHq6pPRaLPaci",
  "key29": "2p16HafnkLVB16hvKZYUKh41wdEZD7P3xqrF9zNbXy3z2HB2zgKtWgct61zhF2gKSyb8f1noJDk7AnRDMFvQt7S",
  "key30": "2zrwkEYj3jFdkeLrMgQsN27SXPCHPtps6Z3AnU2c4hp1bCmqp5exjB5cA7Qy2yPPhGMfLi2S2c1DbDpd8vGA88vc",
  "key31": "5FbZFdiPLmQaLwHFnFFddHFEePFWb1m63LqzAogsm8fTRUYyw94FEJ2AsFK8oHtXcou9ttHdTdKw9pzh4eZciv6q",
  "key32": "5BqQTvk6DZj6WHasmqZhYHc1rvSPsyZDWFc7KEV3BCd8FPJUyTGtcYwb7PtS7UPSGWW5AkB7rA2MupoXBrahnm8R",
  "key33": "eNmgL1UXUPpFrkCmszCneTcR2zHnNqtpaj2bUsDjwwxU6mbhKSXdB4QmzvSAkbcHGBTD6ikkuaf2XtSP88pzZEd",
  "key34": "syTku2UXwk1xq7QrG4rKSMHJagP82TU2mra8r2VKjZcFiUhUgz1rPa3hQzv7phZdaFQe6u3WtNkFBUv2LihXVAM",
  "key35": "ULwsAA5x2GRCTsendzNpnmMXxqoVCb7FMgaDDd5qJYymcn921VJUYLezriCY5gtn7mMHYFUnrh9cHTcLRWfu1Hb",
  "key36": "fbJFLia6yqo9mabG89sxZAomCPb72bS56rcWLQd8ue7sLhhSTCiV9RWtyJx2FZ1dmazfWvSjYJkBMowQQev1Cm3",
  "key37": "2NABKzJWvyTLtz6RpNmNaaitH1QefseT53wtbAZfcBBFg5RRQ8qDtJo4pVBFshtr8cBivJGu9pERA5176ys6xVi8",
  "key38": "4LQMWg6N91RZQPgUoUECTi61m74PPTAnTRopNjXF3mYLb2ivW8ZRLDvqiAYwxXxVSm5YBNXs57YaqtNAoi3T2Qxz",
  "key39": "5Xc1exptW112hqTLUkQC6RhgjKUNPK7MpXjqsRRaXzofFbYVjTiJ61ZD6hjnkeTNcax4S2AZMcFhHv2C8Ykkv5AS",
  "key40": "MohnCBcjs5b31WFdQNgKenjc2ZMebc7soveC88mY7vQQmg2dKhARRK78LHLCbXYwJUKov2jKS1k1VwxsSNHcjH7",
  "key41": "2mHhLpXPy9B89nq15pVCqxRZvYFee4RdpPe9pMTQXPD694tqqdH1KTDnyuWPiCgV8RNDsXQek12VytVh4mWT9a8N",
  "key42": "53N8CGNzCjDyigcqLGgEh4L452e2mS8gsPBwXukq1EcEEjC9kpVDNmEAuF4ji5z1uPWzfrB6FzqxUgKun1chno2Y",
  "key43": "CZPNjWJeiyNFwuwndxNvxL4gpUparu9ffMTtwqBMxsA2twCxHe3U8tQ68HXBQX6e4FuMejRoEajATGM8vJkxXKo",
  "key44": "5kCdTpE3tGaBTkPjVoZ7GymwJUbNZBsFZ7bSWFrG47J4w8oUXVp7XdwKCN7UFPFWNDtiqy3CvvvkVum7eRnYU2sQ",
  "key45": "4fDHjp3PRMt6RYFw9FjKu4gkGcWxwpXpmCaRMxLqfBa3Sh8ryDWZ5wY18By3eQ982N3b4mhd1m8BgvMVoQYREp9y"
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
