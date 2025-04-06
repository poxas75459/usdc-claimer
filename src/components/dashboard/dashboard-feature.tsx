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
    "55FqwSm34DUYbvaaJFs5CKLo5nE6EbkiMX6mKC3PrSvrdaBtx3wPvNJkSxEPkKugoMdq3rLbGer6KDx9rA5Ga4vX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HMfc1whqYnseCBfNr3NBJWpiMDyS5bsMGJrDjGGTU5i8Hohf1eD8Stfi1cMKLGtXxv1C5eexpue5JCMYGEmKmSX",
  "key1": "5rZctn8hE8iXGh2vrWFoKT4QwE3MA1ACQk2hneZUTJkA4aeCMvuLcqcoHPr8Hn3u51oBWEakotokQvM7WBmbT9pR",
  "key2": "58CosHC768wzgniaMudugD8Zp12g2MGRNi15yjxWCoDTKoK2Syeyk1qPqPZ1z5Augn3b7EF1M78dWgd9jicGzVDc",
  "key3": "2DHhF4TSoz21HphkAkKCotLXQ8k78HZbqapLawngaUGYeyJn9CYyK15L5N7EY26yawTaZ7cGdkqvs2UkgiQURf44",
  "key4": "2JRNwNvtYX84mUQRWABwCaXkSGTsfHHUAhPxraMLWGTqFtsfuLrAEPrUNiF6pJoszsqbcao8y34j4eCvm19zFgjV",
  "key5": "62iadnZdMFAqKJJ735eFrjiFCoxWoKgRdfidy2ZSN1Tf5ZDfkoRjhmqyejB8YZCXJPaJNAXD3pSeCH3MdwxxJMnk",
  "key6": "2Kvg7kfwBXvk8AGbLrPyL3NNN8h1bg3Riza9MqwFtMuhnXbDL2L7v1tEfDy7swpSvSEo9AXM23K8qSKrJx3dFaYY",
  "key7": "4FjEdZj5nLqhXcsATyechovYFmvVi2cDa4huuzroR4s2xSwuJaDHFSsnhTpBSHgNw9Rk9TbqRD4cxXoGG8GNfb9o",
  "key8": "2gu78WqURA87ycjxAp4a5RDKYVrF1FRszvJTJhnnuiLX8sGUGpC1xeMPKSL8joQQPmu7BJ7NhZN1T89vvbvCWDyR",
  "key9": "4MHNnF4DEvuJA5RYsfbBMyu9t9KvCnt6tXXqcXNSZypNGPzvnEt8AyFdaxY5kt6XNRFpMj2n5DgxuJ3ue6a1mzFK",
  "key10": "2iRhUknxYZQX6mL9eL9geAka5hJwY9oHqyGr8YYo65S5VBoc5AnuFeXFzRMRSrWM2VNb8tMkHEkQSS1E5CJsNNVd",
  "key11": "4xgYJwkA2RLpqeBL8WPXyQJomycsKvxLMuvERxcEngYQXLzVwg4ZXBoP1cGr67QbrRrKTpnwPVJfVHEMFJRTVf2i",
  "key12": "tzLXQHbkdzf6so8gnk9CkcHpom8p9PyApU24Ad5x8MsFHqicUh2hyGGPBA5D9tz6KjbwPu8izFqvsyH6je3LFt2",
  "key13": "4bRmdt6csETtSdnVTyW7q5zoRAkkoX5SGBbUSMxA8nzFeLn7qu8TXSUJDNJwAp2ZyzeZKVkvFbkqXSR29FVAaWgv",
  "key14": "22gTjWa31DvcWqtYqf6UzwQxiFht6NybLB23TVh2MFLGQqwRYq6GuVaRxD75YfziuU1Lv8RVs21x1W5aVv2b2P9h",
  "key15": "2TR5gxJbLgtyhwsCUPGw9qct8by9LmPBAd9SdCrMU66cACVwBJMTBQyKRF1pQ2BXsRQscRNudjjcCiKyfDwjGvjZ",
  "key16": "3ct91LYd7CvMXyJUnJWHtbNa2eiFR2bgNUKYnnQMTzYFqimvJJhj4BLTELAtTzgs4ywBmcxasws59yg9LWN8VWQ2",
  "key17": "2xXn7GCEr2aNxEykVHoQJMvTaH9QRZSKsR3MUTTnVP2958dJqcFz8Zs81yDFE1SvURAb5hXsexDTHHUgy5kVsb9p",
  "key18": "4JkGfxvEHd156J8ddQmSzgrQxyhQ3zFJ7HGSSbr7u4ALfMY2afH5gbRdTUYmmxa8pfJybTxzwdDkgjxpdxt9qn14",
  "key19": "66P7VWsyW2X3FLWfkJzCHkcniKZDH4Kjf422qCrU2myzeF3iGdGErtSvvtur2Zk2CPy4Cnih6xJiSwuidoDoEiCp",
  "key20": "4aCitN7rGDW3q1c2jYtpAJaogWGD1rKCuf1LgzqfMJ1ZwmPJMQEUtvArtezTvTD5WGaaQ9Hq3BoD4LFmXfY6mYDX",
  "key21": "4pxVe28ZbPQE44azKdhQB2ZB3gNTW4zSNe9Ysy4CtZ2Z6hZnaZWaSyAJcvvHsxnV1jaXhTBp4LJ3bJdHp1m6XrbU",
  "key22": "3Lb1NXTrQopTxHFLLXxaMsWSMjCiUWaLyjjhK39ohZhauNh5877u2Npb9HWxmaqG5dPXZaB35hdJx9j9Adyzdc6K",
  "key23": "3pe3NuYRJUfM9Q7QFN9tpD2r1YjoWEpXT2gTYp8QzDQmkFjUk24eqCYCWECefHBbuhwbtjxwqtNuHMyRBN2kz41q",
  "key24": "4nL6aNVx9yE57Y3Tw9AUEhMXPBQyA99EBH3tPKptEyJHsCLFrsBxHQ6QnGZgWuqKQbwRFP8EKRzdHizGCcnoBJVE",
  "key25": "4Gaib5igGRVEDe53n1V2n9MB3d6r4HpqLFiygBfXDJAxdmApWjm8gywkQtQPoJN5HEarfh7pnkzCcrAeQCRuCxWp",
  "key26": "3kUg2EbKgvDi2dNcGoLf2H1hRhN9Ppd6oeCbugf5nRXPKXiZJhZYpqajLdV577Hc62KkvPsgziPNysMjHcHiQAL7",
  "key27": "5Ui9hwBdEi96SYtkrZcNcQJwGvD3aLjzGw8Lj43Aqx9MpT4wrUH1T7TkYqTwvGLa61tyA43kV6viVqKqTkMmXokR",
  "key28": "5fGTjxQyQL7hCGDAAWVnrqZ3Z7c1gx3v5wYsPHocS5N5A6dBRy4iVNk1ZN4jNPnuoC5UpDzmk1SJWjq3CX7QxhkD",
  "key29": "3j7Yy5iFhg9Sm6khkGE1rR7prnCXdy2WwW2aFj2GVhrmDyT3HCvWdVS8JGxw9z26Xm94zKKVumksPCk9z6VHBZ6U",
  "key30": "2jULnFEpbD7kUSZAWCqDJwJN7JAqFoE74VBMcbSSn6u1s6H8TEPDMfERXgqzLUyTTahPeKhDZxhAgvCgGHyAgCnD",
  "key31": "31RS8PE4Y3p9R2Ws19MWKwEQ14Z8an7VK9UT1WXxfC79wDrMnuYJpMqLx5rsF8yX4JvZhRNWZkDzm4N7U2UPEfL6",
  "key32": "55SYSzVu1P4YpueTckz5637mP7z9NLwnz1Yc9TeRx38zh3wcHHhiJs9Xk4MjatGYwZVXwedLjvtbJUys2tc7r92",
  "key33": "58BAsLVL5M3giqToZ7MoRpLTmZtg2Ht6DKPFkQoHXuTRc8cm8dJjpQjrypvY4LeJhcxHxxPmmqeRWmT5GoV6Yo3B",
  "key34": "4uV88bonXWyCbcfxuQ6cwnLqmx8zvzFEKJm5yDfCtpoHy5M3XnBBkZ4YpW8Q3D48XFhPbXUa3WWLA3RjE9iDwsaT",
  "key35": "2Z83DT2ye3wg5aHi1x9cyjHo22U4TdXCtjnH7ZAzLRu5bNParbonrQgXYeDAEr2U4izWffdVsLNHZPVeubBuxrfG",
  "key36": "3jov9LoFxUoL8kakczG8YAAtjFYKzsGBZvz17XfcVoFsnke9vDrZpfjqdiszqfHk1cCyyWEVkmT5hGYyRRoNznuk",
  "key37": "44WX5GTERoR9y8Cdjpk5fNjWHDsRhHtGevMknnnqWAuE4V5N7chTkMGgnnjnJCSkh8iG1dhBwu8yt7kaFW8erqUi",
  "key38": "KUeMZUrdyNFW18jbVyXz3i1o8qDEcLJbSQVGCDEaxwwWi6DrtgKwTmmSFyTsrbYArpGzMKVayxRBv58vAdKw8wo",
  "key39": "H56hBf73my4FVGYxmGxEJAgEKb1tnhvUwdnaqzdvcsqSLNovSs35WQJ3RyuKJ7K4iqXwxXm5Q1u8wUm1MeAW8ZK",
  "key40": "3hZP2bVkLDJtbpi9cGLEx75hDqupKKHYz7uMwT7h7NMdDueKLDtLH79i2a9FErTtzAzyX9HHoLvuFX8jdnAWkLMB",
  "key41": "5UoJq7XN3sQ5quKkHFjvsUvtG94c57WYVPZZek472zi11CfprCbQg7U3yFvWx3LHQyvk8Xxhvui6QeNwVWY8HWUF"
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
