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
    "47HYSL3j8WJwGumk7Zg1fjAGm798kCLLSazjKzaFsCmUHChMBzPE3AMr6QDz6p8AqQr99xMmJUfeMRattUt9oHVf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gDa328MDgPZrfoSaEioZM8n3Mizd6JuXuobrLFbR49vHTdzdVRFLwj6eDcnS4umMx8Bj8E6nF7i8gToVPb4vHeu",
  "key1": "5v7hXKgjCyRh2eqqKr4X2YxZGAN9XmyabQd4nFiKfcQycQxdQmyABfrAgcKXsUaWvSMcrDWsKGSBuiwtFDL7nwoC",
  "key2": "4aXi4oCehWW7z7PaRR7towFASNris7QtGsSWYXXeHEaGMpBf2GLJTbFeBAt6vkVXzx1FqBcQg9dhgbxC2tEQ9W8i",
  "key3": "2ekCs2FnLkYRAALM6YKRNDkntuFRZ5EHApq1MJGnj9SxQzWQnMvN37prqDsCXj2PHSseoWytzGg1WiZu2tRuWLn6",
  "key4": "3JCPr4229w4BwiJocFqeWfa3AuwTg5EVFwfHiZQN9X1SkGSnYtVHZ5rXyxfMULyKNbYsjoA2ddwNH6x8pju7UMKp",
  "key5": "3Skdu6P66XWnkRBwPw19Tx93v8ut26EmrYpfcQtGwKPv3Tghgf79sTQmDbjZJhttPPT4YJyd93R4rxvgvhD28cef",
  "key6": "29XzUKYZ8WKDFZJhJ9BziC95nJc3wqTM1HQ6JMuGXDqRtRtxxWU5G6SccXQ3b6XepFrsqDCawxytWBUmXSGXZA2Q",
  "key7": "3AuX3EHw7N22P6hPqANYpru9YMygcte8Bu4Fw32yt3QvJ7pYENesYei3tKGXbmvBxyYhDQipN8cCaQnqZHjNYN7d",
  "key8": "2FYJVKWY4A5scmJEuCwgPxKf557VmXSrwVSkxpju1uPZvfeMpZRMV16gg5dommgGb5y8xq7VrApL5Y1FvyqthspM",
  "key9": "5QvUTBomHbZUbFjCzEZRgF1FDFhgVLmBVsbCrjDcW6gtPPkTsCi6RvbtBnrqQ1Kq3NgKb9SKPE9NantW62mnoWq6",
  "key10": "3weRZuLLJdbGZg7naRRpn6SsnynK2dVNwLff3b4mMeHeYnrFNaKXofGReZZJ2B1ZnPpnVfWUjJzcdazMZL2ojPaJ",
  "key11": "3ZygVDsGkwjms2imajXQDPXZDcyzwSpQ22rUqNVHaUyiMPXQHfaGxcaVJKPKBzD6gfee4R7T2QfJLf2agrbJ1SB",
  "key12": "2mGHC7Af1sx6kLyvN7tCzyFth37EsfxsTxyDKYCcDmEnLHuaNt14cNE5U9ofuQESfGc4q3cAQDwEMZpM2PZRRksb",
  "key13": "WCnPNwznFxzuYS7xH8dpeBCnLKFw4G3YAH1bozVRYvfuPjhdkzkvADJhb1NCh825WTuQ4A5L52gC76EgY1xhtoq",
  "key14": "26dDsVuMyKGFS27wxjs9gGBmjwMaRXwiHJe5Rt4JVapzGmhxM4VwzR68WJLzwb1Q2W3C4c9cLnYPA7gn7E27iwDZ",
  "key15": "5nYKmnpomcyAYkPEBgRFr4BxB9Egdokb6aexsi5WMLY4CyYUnmSJow7yRqGvWEx2za3tt3YxxSWBWbKYYFrHThqU",
  "key16": "62ZW6TRuVNUCbPeBS59c9VWzq74yoH2qxnj6fsQMqZfznuyhmAGvAtt9zctSXHy1KwrkF8kZiTZSq2u93pYtQxg",
  "key17": "4kGWwVFG7KMiuXAneicPqcieETbdawCvFEcXpksVAJzUK7ViY5PpcyNk2gu1GYdAuazS44976CqJ3GUzTvpH9XvQ",
  "key18": "3njH5PrKU7AUsXmK2Cy4W8EzYbeCrn4nv8satxQsjDCAUjxEKRVeQ1THs6uV3dfuJ3ngJiWwENgchopiBwG6TmRr",
  "key19": "5Ho4ksLWpgd6UPco7jTyYUzxLBrqk5au34oypQvJj3q3am1VNm8ysHxM1c1AFzVR3btc1upFyGtXjL31PVPVewtn",
  "key20": "5MNC1aWQ5cuyvZmSSEiZfvjKryfF7P7qu333VwMdQBfzDc4sa3jerc7vo2aqU7F8DrgxbUnK4akbL3GC6nYiStVk",
  "key21": "2HSQ1C3NDL8CojUECo5dWw1HnhYrnqqpc9v7C5wZJgVwC92ngjMjGevAYQALm4LJ36mFYfYeLjYWwhNpbmCXe28M",
  "key22": "361qKwbhScJ4azXM5yog8GKi2sHcowXiYcuaq5uCidJVYQApVXF6zmDkhzJH3awaRN8xFDp1D8CP5GLqHnhFY2W7",
  "key23": "2mBGap9oyC5qZLP6CvkBzhUw5dTeiJdiKvhbQ8a5LCJLPjb7YjJR4ysqT2hcA9JWxytG5SWPuswtF7xhEjPv7cBw",
  "key24": "42zUMyf7fcuf2imiawpuf7RNSuHd7ufMTiZmaB6vVkYLBRWSGUKDw2HDVETjBhay1jbnQ29UtKzcNf3jhmFGumto",
  "key25": "23RVjRWKWVVaZQ7Qaei4tAB4q2RyzbqVcS3jq7i7AaJkWTKeeTPpEVX7wgXuyEXLj6zzEpN1EbCqRU6K4C2Dt5Gn",
  "key26": "4DPMDbAkx1Js2uSPB7SKt2kU7UTr95NHdtFc1NjJwFwG9x1aD53ASXwZHS5iyg3nnG8YAxKbkbMB4n1v6cF2LBFq",
  "key27": "2VPKDzAaD8dU5WRCYK4bi2Eqqq7kZFMgb4XWnGAvn8jxyKhU9sQd1JNhNHpNaV2S8UMWopichMZDssCJnrWMezBo",
  "key28": "2DZKQ7yxUUYaSdnH7hHQK8WTiEakWeUYshDNVPLuAEF51XuLBnBmNxzcMrCoeXCkN1o7umFPw1WMZkN1kkQzqnWx",
  "key29": "3zPV2KPxBQBuBvhuysMTem9zw2cGQ6Lnx55XPvHZuhyBYVrs8Yt6Zericiu8LeMVv2HV5btMvbcJDzNADnLmsfxh",
  "key30": "4PmyP61naCUdZJhu7N32oy2fnMdqkgrh9eGPWBjGrttgrvqRg7GqjJZrPqRF7MYnKTq595pXMGC6XfjtPr7ZsspP",
  "key31": "3Ycf5yw4P2tenbN2ifcefAKQ15XZfmcRUShNGRgyjLBM3rUYspNV2SaArk83aYFkp6wtrTaR5SXz6AT7qEj5EYMF",
  "key32": "5z4oRJAAuKYneCnH3i5zx2mxbwecvmwQ9HcE6rxB528T6XmUsHK95kMeybH1uPQbJDzcpQvurqxZJgQgAjSJkCGD",
  "key33": "4khWVi1UbgS3pzQkZkirjJ7M4ke1PW3iDrKv8gZg9G4t9JvjHp38DGXVzPbR5Za53DZ6MhtJbWyrp1cWQx3ZBBwQ",
  "key34": "4167VEQ13NNNUhW4BJDFp6m2YFtZnM9M52Jh8VvDve6dJJTyrQUhznuuAH5AV3jWNRX2ghvus6Kq9Qj2U9wX2hB1",
  "key35": "62cMiC5Wyhh8BeLDBytGDbHCtAJpJoiAbvQgdS95VEZoHaQ81z6a19dPPejnJwQhFHLNC9T7kmHqQfVMxX9uMC4o",
  "key36": "3JKN8cY5bZMw95qzz61ZttRgGxJaQuTHMP9FhMKvn6QitHyPLLK5WQGpXHxUWfiPUuGTa1QWXEn3z4QGWx19hSyt",
  "key37": "4MfXutAjR2WLtqn2ju5MZkeqNth8MAdmxFrX6SaBDMXmqL24cvr6eLMPyafdtoWSd2RaH2YXVyDE1dAUM7nhVjSD",
  "key38": "27LRmcagu86Z7ZEpx4Rbt6dNLUt2k21Y9U39pwFHwvTSX3XVnBxgS5URDGZHW2wb1zzP8fP3HDzFfAnRb4hHYrV9",
  "key39": "318N7untDSQiEknVGmruahTf8jLZPrBuyHn9cp5mUJhQ8oYXaArfpq2EAxQNirbWKhXrGUZbPoG2Sq1Aj39cwhMj",
  "key40": "31rnC68LatXCJ4acziJraEGHEaeRnAsu94w9jhURosjAS79EqqzavXHkk7J81mgC2KQkaCzyT37y8NSjdA25BVqA",
  "key41": "5VxfczcFjbsS65yq3T6TzR1tPDqjzqzBzSREwsYsTCUjRU1cvsqxVDHru3pM7e2SRDbpMoUP9xRETDp16PfZS4WM",
  "key42": "3cGznsQCt5XaLALhXPvEuEiEVt5mX4kbBKrVH7Ze71SUksjpTLM8wXn4yEpE1issYDtChYu5MmLboRShy1ZYEv4t",
  "key43": "2XzTtTwZCkvuw5B7FYXQnpnpLj2oVipCB4MPC62HLgZiLqGtH7Hitt1kFD28QzMWomaoMgQNcMZKzSQqqes54NNG"
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
