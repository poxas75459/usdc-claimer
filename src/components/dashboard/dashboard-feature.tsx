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
    "3T2DWwiH9RvzDx8AdzEYy5MysPUcaKM2Y8MsLVQmzSB1ZJ4Fep1fQ5zKJzPCpfB4ZDtduoqirQoE4SkEQs1zGbN1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dKtqJuMrsbSy6g2i4ckvED1tPN4m5kDx26QFzzm1UWr7qmGXR4C8LvdwU4NoiVa84mQfBK8NB72khu51gx7iZh4",
  "key1": "3d4R7dWXwLpxMDWbGn46CFAbwjfq12SEC4tzYB69LuuAYFrj7husFMLd7vg53BBR3Y3GM7y7Kz595qZm1cwdrbdj",
  "key2": "2SxAFTmoDYGgwihGgDhZ9Hs7KxD7giEYpZDVjzrGpCF5TXoJoVLc3ZLXoNBZYN1MAN7nVzSLgNV3b4W9AnDkTVmK",
  "key3": "3ad1yw5nfz5QbhnHrWe13cJQrz4sNHTkjLhyqXA8sVEGmxCJ93T1ZxjWsRbBTiKY9YNG7FMc9Tnajnt5ng9vh2kp",
  "key4": "5cZvjWKrNLvNG3SjiewLwYTT5UNuGnFSdUeyxBKGXLuZGYqi5dPVAyRgT2ToMCFeFuJvsYXv2jB84HVzKfrQZcwa",
  "key5": "61B4qdE7qKCrVW3dhTWudLTP4yUWdgX4Qaaxkj4wVsD9UnRuwaKZgSkoNdhW4XRoDgtfW3M5ee8DyTbvj66t9888",
  "key6": "JCBDZii1vCPqL8yBuHtyoA6ceCAXqCSDuox8fZh3WAxZroGQPCERyMPdPDCiHe5LqAXuhqLrTJtoztqDNQgxWQ9",
  "key7": "2ni6EDyuJ8KFSxriAxcmHNqZU3V2w6qiXXdfFbXL8bwF4XVPzk8ncfpqrTSiFDaLWCnzcmpcpHdyxkBvtqe6iG6k",
  "key8": "3a3HH8QVEjayx4roUpNdTxXGzDv5pMEuqSU5vbj85a2zQGnFQU5JytMAM35Z4pGS2HgPdxZoq9xbR7unJQi3GxY3",
  "key9": "5GGMRXVftEAy43J9SuUWwBdrDkHGEjsFywcJeLGmVo1s815xHtD4QUE7arc5SuaBwF6NiwK4nXNWfyFrVLxdqbha",
  "key10": "22sQHi1RVvbFNokqt9ZCG1htNzYab2TQ1uE8Phcim5NMXRpZbhNitQAUULpHXEaD2S9ZP8cvSm6wNcKZUteVFT7R",
  "key11": "ttxTCJ58jk2jpeoCw6nf3LcE1XDqqvJgh4MCT7SDyiyS2GLFDBcbcb9PgKcVwDds2yFypUyk43ADyKTtqgqtNL8",
  "key12": "5Rwqk73T6QfL1P545RL9J6semU18MTf22Pgp3DyQ4eGHttLHpG9SEH3s12TcceQjNcPS2FHVSE2U4t6o3w31ue9Y",
  "key13": "5zWcLKAsLMnaSJVwUpzo8vsJSZCAeeVj9sn6EwkD3mcvn8eAvp4tk8hiPuo41KEZV9Umyc8zwdk9QYALD3j4sADb",
  "key14": "2WKXqDipStSFS4JxRGa1KqXYT64YC3wtE62pmPkeosefPboAnsXRYaXBD6WVRgpgnjAzhCcShRJ6hc9d57oRVDSR",
  "key15": "or4QLcUaPGHjooaCVuP5zxAHy2xcu1kGv3xWi8MnnSYddZDFuvEUGU2beizAnRNn3EGEhA1cMtPXk3Hh34GRRRG",
  "key16": "4aLBjHWiTqPkfqAepyMEC8nQeYsVxUSZWTJJG4vsNEeBULx33mpGnhQwq9LMo8iSGAcXuEUdzqLJGgfgDP3g6ZFy",
  "key17": "628jp8ede6eGHAqhnyERmmg6UzAGYFTsKtSve4vmwcEzQr92u51yQTdV1vVyP8zCUBXVqM8iHf6WpdCHG8wSS2er",
  "key18": "2DDMY1rXTXJJQHbTZGMAjK26e3sZAgcGQYrNUiBsFpkeSHuYc1sKhgjf4EmXi1uPiYsNgHbnwPP2aqyRX33G32wS",
  "key19": "5DdMKLNVCREB7WfkmbLerh2xbabactay5ZVitxtnYZzd3cy9KcstPUr9e6FdRyPQ6EUjiNtcZzjozmniQtXwq2Lm",
  "key20": "2KFajbmspm3UAr4q1yuefFtbdTa4Z9ExK13aCyacLEmAhKdAo2aaZA4izG6tfjLDNZsiNsTmxJ322X5tDXTqBYYB",
  "key21": "vceu2KouubihyMGbZWqqLT7xbDEsY9kgDrWV7UTDozz1A6ovPiYZbSLkVr275CA5iUpemVFPVg4MB8emd3JpTCa",
  "key22": "2sZxQMehjWrx7E4JauN8MxGMj9uFLJBYztRBDNCDTMCJuH5Yo4VHEKmvnksshcXnPNXaSs1mkVdLvMNAFrv3Licu",
  "key23": "53uyNSnrZXXtoiRtGdNUUW7t1ZwK2uogEjc7e6YhjSKMjYXLmqMR7tYnRbkR5dvtPScxNYAdvbwBPpHhsuvjC1nr",
  "key24": "3AprwCubpiXmkNVMWbqWw26TgQK9wMeCjQM776yro4WggSRWjWDEDGnJsZd8jodmQ2wVCLzaU9BtK8v7BZNm7PVg",
  "key25": "tZmUkeDuWNz8U51RNBqhwrj1HCPstJ2c3qmTZ6uFsRCAk4s2aVnaWw3CdD2nY8SN44xUQxJpsf24yp3iaiuK7LA",
  "key26": "acFQgBWsTYoNvJCK9u34yBcyg7efbFWma4cyK3zSwLecZCc2XQCfpjisJi5c2pvwiSCtAvKFVzjHZ3qS9bBmFHv",
  "key27": "4V7ae5gjCvQkBDNhwapqAfkL5tDrVJpkkNDgrSJsiw2TKXtpPrGqyh5tk2uiCsX1whWQ3bVwoWAEF5d5HKHBHubL",
  "key28": "2UwMQ6quTvW1zd6s5zadTQJ25F6xSeCGm1Sx4eL7ood9BS5dGSvH5p1i16HaE3TRWGRGeZo7QHXMbFboyBJUvL3t",
  "key29": "2YHxVqFo3CyhZuYNXqZqZMb4qU69y3Ah4pdVowLef56bxQE55tbuJksScDq6w2Wf6Jmm3eYKgQtdUrQvogVnX4PJ",
  "key30": "2G7ksYjeqtYu4oKYGHS3EU2rTBo6saPgHrW7gj8XCqajzoEZGLEieDmTavQYw6EzgW1XPWpRmykhNJDWWA9ZZFr2",
  "key31": "394CzqWHwqyaca7ZqYsxB4FHRE57kcC3WdovhNwqNpDda5gF9nsTXcq23bc4uj9WPKgeHzuP5LAuuXv8P8CNS2Lt",
  "key32": "PFkgjejT3Xu3dEBZLDm7Gs1TvVuhwguSXa213tZ1VHm7o2c1tg6guUJCUV3jCyejDNeYg6t7sFG1CBoYqFzWujB",
  "key33": "5x64ds83qEWgiVH16j3X7xAy1ccEUbfVoZQpa4wLgKqVDAcpTXxFyogk3kAPGiTSF99pnVUtrVXdkUXf1bX7Xkgk",
  "key34": "5mBv2BMb9FvMyLaGBL4LJNu7LbrCZpYWSPfqwfA5qYJoQ4Y418MeU7b4hMRgpT34FcxXwdWbcDnMKkAyGc5PdDHN",
  "key35": "4thZvM1GRwDxbQXZFU3SX44eP3D6Lgk4CvfeRQy5aLunuQdTo6PXZmGGbp9VbC5zotM5AR4eFA19ErkAsZCPHaMu",
  "key36": "5SXViDxYy1m6j2Fbhs4ZVJh2SYNqiQ3n3cX1mcojA5ooE56UFJLiyBVPk62PFYFPcrtuvkhu7VehxVJ4d8sTh2Ap",
  "key37": "X4pVkDhpnWYZTX5jHsKTCivU7qYpjPb5Q1GtNxhojGQASmj7xYc6oegesQabT2fG9VCte4PNmdJDL3sPBB5k9D3",
  "key38": "67fwHnmuhim6kar4guGKqrvmD7zxGf3CnvDECwVEyPiDoqNqX822LDgqKgvo29aFJduUhgDckVBVBRdnKtK2G9kt",
  "key39": "31sEg4yhoamcY2StQ3BH1qWEVijAJskuxeHuknVZs1UeudvmJ5boZkEJZ5rnb8URDiAgMdFjVM8Y1wrtD4TdmA6A",
  "key40": "4SrNcka3KR11dgpStq6m7W7i49wphh7JWSzetWm6bb19XhSTSjwnQBiTbnpf4y4FC4XFiM5eCjYrUDmTr7bxNbJK",
  "key41": "5qQeBQbgP8scPuM7tEo57Tez1VqsZvgrobZB6sf2zrhsnbCbKirCy7RyaBpv6N5vHUcvmQji4tRA9Q4MRksE7gKa",
  "key42": "4tjWLHgwfb9vj6hvKUew9Af1HwAEEsE1bVDvrfudrjyvX6sKMD563AG21Jk1Ye5GEddAkHUHHQxb7GQ6QhbAb1JT",
  "key43": "546DJPWrSJbQc6jmppmMUKn839qTT889ysSFXjbrA5RURSKZq83hjCXyUpSy8ZkiiJ8PLdDftWi2Q5hgioyKPfQj",
  "key44": "4YcAC453NPtgpXQ2cSKzqjSUuJQWVdgewJ67CzLyqGriYxF3eLVwbKNrdCqnjDwc2iqfgEjs8ZYCub1Y4xSGGj4t",
  "key45": "3YoiAsgG8CJtzqhZzjzUEiQUWww2EcjdjnWucc86uP8pgCTTvphPYNc94NJ8XDTjBUYTmKW1jz2LKBzUHhZx7vX4",
  "key46": "rnA4XcsUWMGbCtKPu1uyZi3Kd1YyGxSysVr8hqCcZgbLjY7X1bkzviDXgmh6YQUa5AyLeRV7EPkACEXKQ1uq9Fd",
  "key47": "FZs4obib5yayF52wZ6oeaU3upxpo24MNXM1TuPUXXzqMX5wsq8tuBRmjoxzjMwKU36RvAC9QGebFzByhZ9tAACB"
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
