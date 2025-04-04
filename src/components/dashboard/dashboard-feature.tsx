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
    "2kurAULdTHkzAhhGdYCPfYV4HFdxqzKsV4nx1J4iyyFxuvEwQXQE44qLmozyhYvgQjCUZ4ykarNVNenAaZfycXGn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61F4VCyvFz9eJGZfJHiN498Bj4mR2HkKS3zrf59kUFSSSCMdbhzb9HcgVQCj479WKBPXbeQcwGQSxnM5TiioTFTq",
  "key1": "4BncBuFuBkhaWDbsdFQZVnAV7UTD2QmjMoVT6rjvjHbUuu5pKR9BXtq1pT1oiCaGjrigVHLCgGEZmGW1qqXem36B",
  "key2": "5Khkqawcu4BDwhS7YtZx2j5zuTPwydGnB6kf8DgbQcG9bXWaTD9PgBbWqYNGm6GwN3L38MJJ6TKa96PXaRQHZmeQ",
  "key3": "3KBKRa8FkStLkP5xPTrvbdps24N4nog3NWL6K2HS96nbKCrimMxXcEPoT1LfZntpWwxYaZ9Ww7RCvVZsgXrWdJhA",
  "key4": "2ZfrX25AW19i5zTaxmJJ6mSuTjEkiHPzDYTeZb1aA4wvT5SRcwxPQ4VDYnYJakKxdDZvm1y2L8JEYFif6QvL4kkd",
  "key5": "3FBsSW4Fejj95ZsKF4MfHxfJGpweFxDMctZPHfTvgUqXu8FvWPrEuXSk8o3Pz5KNCgsuGfCVS8Jm6NCq8yUGgYN",
  "key6": "5qxnpuafh5rvHU3KhtG1DHjzrUiZ556t71Ktpa7buKTsAUj1mjLbf34bNLnPa6ixTbSVW3ZgpT4DirW51sJTrLWV",
  "key7": "5NpaznMcm4DFZJ2KC35yrQNmsm6uxeZg1p9c9K3b4ZuLrgywXJRXwSoRmZYW61NvDKBoYLg8C2DnWmGvZBuBnaxq",
  "key8": "59h21VCChvBf33ZHGN4NzmucuBNT4ZUuJUtk1X9zJtxNtdjogxy5cXMsiWNjgx3xTR5FiYzTA8YhVXAxuGgYVr26",
  "key9": "53ypuhmzXsAvp6mhTgyfSW5EpQiBrGg1SaQY4cxoYYjTfgJBRZRBBgYciJJWLLt7udpZf5nxCqS6FC7gxAt4F3sN",
  "key10": "3XFK9dzKLfNbyBiLQATmR9uYLyxxZQbacP7TknKzR861nsRAn7vXxCyJedv5WkhoXD127EkccaikiF3Fm7FXWUub",
  "key11": "taUKoA448z5JUks1WqFEKp94S7hoeCn2Ut5CTk9aBuvdzW5t7Y8CiDKqcphK8fy6AP6e6hcs1YhuCMXXwQo9ZxT",
  "key12": "3v9NaDsC7695bvTYEV8rPjHYm5UaoamZMVohqyoAe8j3w5vjw8GZj3CC59zqrrzDDD8Qx9ZjU7XqY1ApuPYe2WTT",
  "key13": "xxfgjfaur8YVv9QcqY6nQChGPjRqtWt318w9M3Kcc7SCHqMR8JCSe7qdtLNX7CpQQ5Tcm23BfDspkCk9hx2wK2g",
  "key14": "5BPE9L6R7ytFdvVhuZ7ymnNLdBxLoyJsD5LpE6tWLgG9cWBZbd8ss2KS6KP96UD3GHCudtxAxpWkAB6JfQdLvgLE",
  "key15": "4894oAtFGsX8Mmxnts7tuXf5AfYTb4sZuvXjLioZkmLTpHcVCv6gh4AUfMNB66k9nqAQm6MAmMZgwzLAT4B5C3yp",
  "key16": "GorixwvD3TMjZDqYAzZ7arPGULQV8RcKzDJs4MVE2rDsaUxLFHDzC5aPiVRYNMN5NYxA2q4yYat6BfiY87GQiVs",
  "key17": "2rUFuuSHH6q7KyxLTkeBGc9u2DAkGxbvXtZ4pugWfyEvo7HvxgKENynfdyu3JJxqHX2ABs6p5nbJpmoEAhdT95R6",
  "key18": "3fKVZh6w5otjU4xKd6pU3R8f8myCjdwKj5aMnUpP48LT2r3NWNqgKdjxBwPs5NVXz2NTkFJLcsNQW6qNbt6VAHUG",
  "key19": "2V6dAZcxHx6JQLDeFooaYQfe1fX6fHHMmuNso5fS8QbvELFi7Efy9exN6DgVitYGLVydpcpYK12atdYcL7PSV5TF",
  "key20": "3wPmKEAronPnJUHkR4858KqzGzZeuSwQ5vN57zjm3obyTm8DtCzEP9ipgF8YejpDq1Ec1Qv3GxSPkmYGrMtzSYih",
  "key21": "55dKeNQJ1r3ABFHAc11v4q6GJzntPTj9PwSbZ2j2Vjy7nPYY1Q1aRq8VP926eJ9a6pRv4vGVB8cMRwdr4JUcTyk9",
  "key22": "2jEXxTkcPb9UwdgKfwtvQp2ZfYZB11Gn3A1YfGbYG8jWyvMD6CjFmMDKDWruTinECKH6afieEVc7Vk3mMTR7zEAn",
  "key23": "BNnZ123xaVESPwkTu57dwNQedNZFc9QUs8tCqG9cvfPmJXdLnVem4qDUEFgRd1rfVHAwo3htCGs8CKwdgaqBhTm",
  "key24": "2B4TQsb9DW13MdvAbHkuVCBZ7n3eBE5b6terkzoKC54Tk6YBNiKWg7DyFConWysuAyAQT2MkM2eFCbGrmHpB9bim",
  "key25": "5ji5qLtcX3C7xfAnx5LTSYMTzAxJruj6tCVkfpTD6VLQyFCP2KmSUSqM9n5CfMxtdaNNWuuYFJLqTJAaXr8EbpAX",
  "key26": "4zavgEZuzAtCogZWDmZ3xARh93x4gWuh1yaMiUVkGHQdBog5YjLx6B6BsLFbyh98PK7Rt5LKrQWYVk3myLD8bdRq",
  "key27": "3845TpxuL5jLxXvM2Fg5dvusp9GZL6sBVeZSa2anCmxR3RhYvqGM913qDnfwKZzQvsJ141iXUkmmMydG5CQ97bUo",
  "key28": "2npC3GQyJrDPZrXw5pYjSEuA1HcyH3xkAtpLDrPp2jjACmGCJpXALoM8Bw6AzNqFWjhSgsEEPriK2HiCtkG8tjKG",
  "key29": "5MufRSohZksaXdtTfSujfnmkjVZg7oEXFMPr6V4P4boER1YoVrwrz533kPVkHybA1Fq95FdbZCdvo6WKKj1M4UDS",
  "key30": "45FWJCP3U31zZ8ePPnRnPjVKkbv1ZUU4x1N1jUxGXWFvB6DWeeMMFPNmRGe2eNSqfTDc2HWRp5srrXnVqrjm5xq4",
  "key31": "5qCQ84fskXAfi9dxrsEsZZED8ve1QJousxRp9VHFVBF9QguPz5obc1tikaj1VJAqqE5vP6KtxTrdCWrhv5KGiHEZ",
  "key32": "3zgmVxSKKFQAiPAFEjD5imfkcBvZrXEvt1npcu332cmEJ5a4rx59iurQRPWESjumnp41NvJLWeb36ZLN4EyE5diH",
  "key33": "2NWD2Ta2zJ4DhXvYatejYuaT6PGhNz5GiZjNoDERwFbKqMNz9uQNTtR4MYBA5MS1EWTfRRHCg1DpUn4DWKM7oLtB",
  "key34": "W14K9VAd4hwCQANW9BC9uDeFDJTUxRy2QY2TiXQJaNWc2Z1ZKLkRbuA8DmRf6VmtMY2TBCJpofezj9uvQsbktgd",
  "key35": "5dtKpkowR32rNgRKsvdkG2q13Aj3wrYEaq8vU3tskbNw3tWYbVsSQTYZcWbVGycSMKMcaSxqnJzZxuAQYz6PqA7V",
  "key36": "CVXHjvs8qtrbGMP2auoiVtjD3SB3j8TbkWbwfYiXKQnCE18dnmeu7Y3L756Sei3BixcgzTviRgnKJGQGBvAQV4o",
  "key37": "3fzRTAJPgGFGGmNNEowzxXZ2MECVkMPxoqSvGJTWYnLn4mn1gZhk4tGCaz5acjWrA4oW1GwMGmKGuUJM5owGjCLc",
  "key38": "PsYwZ2LbQ7NWGobnKN8wEpm7Q7KkWxCmFobiLGWF4cmYpdsBe4o2w2vsHLhPfwyb9ZqHSn1g9E5G3bC4JNdy3qo",
  "key39": "2xLFeadL9B8zDe4nGGrxcThseoTSBB8sE6Q7VKAdY8JMGQaBbSkocpKyugfnkog3CpUGzqpL2mZKzqdi3i1JvXwH",
  "key40": "3pnMAZxU6mE9JPmmgQsxydHLdFGhjFT6TsycDs8M9544gLDKH6E6XFaBoH4ihBUjaaqwmqRdoDso4g17qrNt6riz",
  "key41": "2eFvV9MG6z3XZ86z7FKgqGfq3GJVbNKefyHad5ADZFgjXCL89dQEx6upWcjSCgGKovkZ9dQFzow2PFyHP9A8TdKJ",
  "key42": "5KNbf1h2VrfYYd3kdqr7R5xr8P6eJLktxhc95rYFd4jvXq44FuS3sPHthUJ52LGZxSZn58DS9FvEZtz1LFHcnCJk",
  "key43": "63bNXNYdLcUaEXA31Qz8THQjRorsMtf6tUZvJUQ2UCwGrTRDa3AzPUTAxdwo9L6MEmZLx4JnL93AhFJyZstSwcgc",
  "key44": "42q56qKFd3bhHkyJg7kk73Dt7AwzFgvZ2UztpJ5zJNP2ZerTWxcoM6nSyVJUEiER3GjUcuMwBWJ1okxUYRzeojuD",
  "key45": "jPHDoFWt4QXkS5STvYEiwL2Da1cUtprbryWf7TMAmbsWq7DVqP5uSV7atPdBa97ysJ9y7of7UN2238AKxaaL54w",
  "key46": "3tiBqhjpsbcDLGjcZgqTTuWEPCzkQxsSUaDP46UKBFGup3mBerQGKr5eFEBwX3oNebhyKPQfZ5AggRFo4RXPGQdB",
  "key47": "5CCQt7vXYXHXZwgnu2StZLRPsTxUGe2utFoWZJjPsoMazPFQypEJawJpWC55ano1seq6BvmD6TsM7mR6KjpffGBD",
  "key48": "2FfTgBXaB719UyRcTzuHkJgQMakxpgvxFCYvaazSKNddjVwbJrer5fgmu74A76WFsg1DtKundD8yKRzNmn7vmAFS",
  "key49": "4ZesZRHFCDc2phCLDyPUMhY6Xc1CsuX3jtYuN8ny1ZMFe3Go3gBAsbe6vNk4vezWWMtFYNeprwnkyT1BYkBs4Kvn"
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
