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
    "gbVb9okLwqz8LGErdvAKDo74K6P5w7p2NVn2k44gpFXN4FdDCtfBxy3XmbnnYZ9yiz2vgfTFEUi5dj6qCZD4MMo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RTevSryqTHtYb7bMSUBvVRVgKroXyLNpsZveoEPi2MU9F9zXCoPeU2bBkWcmBESMwE2m584mNL1Xmb9BaMTnCDs",
  "key1": "GSV4upfw9KAd3e5315ghz86WdBYbp8EgF15WmcS28aeraNyNge8cwXuA1LcJVc5vGkWF6cALxbviLoC6vqAecfF",
  "key2": "khYTQrdoPeb6Nt272PvTbqEBSDfrYYBzVL2HhMkSCVk27mNNe4vUh7NbxwbaefuhcNq7dam7iPovuUmGtNYHU1g",
  "key3": "2KbJMVP4ra6dKi9ScmagsoRvUQyRDj9EBx5x6eSJJJvXmzzUiDLCyTKYRmScWD97voRLmeUTwcqdKTNM3Vkh6bsb",
  "key4": "2ow1bKMXgmdgPFoDDRuzLzrFD8ZAL9W33XDPxxR1kZZYzSGq9f8vWqTCg3P41wvmZLKU3YVDtZaBPexKEvfCR2Mz",
  "key5": "D8PCsTyWCPBWq2xwb82A8g33McFrM9LQLVSa5r9sBatDxjDjZF9cvSGs3XKkVDMPDrTxA96xjjf534xEHRYr84x",
  "key6": "5NVbpDtsCCmjRpGFttvRToTTXpoQw8DLFdKsyoc34PPdHzHhztE6PHbB4c4QQHj3pmx6AALfrpsxMA3b5XnQdMQA",
  "key7": "2itWAeJhyjPYBsiCZrJcX566eDh3B37qonyVC8FiH6ZHpuB8pyG2XtXw1RGYtq1qqsp5QoxhugVyx1MTcT5zv2jQ",
  "key8": "3E5o6TeHUsLUNH7SwgwqJR9FzxpwDFesSM2ipNWnqxtxLYRud9Yko84NKk644Hv5neXYZNniCR9HLETynhkur6Qq",
  "key9": "2GUoxUyFYnWpuQ1x9ourXwG1E1r6ykFosVZXs4iTNDDYtAkxSSpg2iFUCfuYH2eym9fr62wtAVHyiNMcMPqPSZdZ",
  "key10": "4Ryvp9GiVXcUXwcaWRYfTjM3ySPGki7XJSEv2UhYRh2DU2D71zaTvpkfFUZuEZ3EhPSn2Cxcr2x9bc2STsBw6u86",
  "key11": "28qFPkfz3rziF2bGvYRy4vuSW5owpgMvpiS48Bnh51t9hLxY77ez21U3Cr2mHrDyW2tUtEGWJMD3DgBmEJVs358y",
  "key12": "4YeiPgi686jyxmvMznMUpQnaFX7CQaDjBLn3RXwHfGbePQSujMV3qFy5yG9naCr2PHQLFD6RRyyzXekvFc15zWMG",
  "key13": "M9CUM9tUc7CZYDqYtGSq1mEp6j4GRwG7tHBgCiEVX2ZSJ9FANGx2pvyyDegJRzbotKNX22rq9thMxWUBE1VrSUD",
  "key14": "3sMLqrj7Hwo3Gj4QUAHh1xu6qdgSDFM5StHJCV3XsDBKQhDHMQwdQ86pQgMpRaHa3DYvkR9LfyP68MGTXoHCXorU",
  "key15": "kdCdjHFRSDaJagQRE6EoRch6guRAkkoZxoPzBSanhdkGYkNhFWUFGHECk7zA1Ne5UCKfoHDy2PadFV4ruX1fYUB",
  "key16": "A4YA4hjt5cPMXS7jAe8tgx2gdXWHp6d4FdwELwdacxBneFKPzEJYNh5SEHmBdWnQ1ujv9PEf7T1UAuFNd4FCAYu",
  "key17": "V18sSS5kuVw9uCnXPHvhkHwZ2fAaHFS1ynYNwsBD9TCjLgGSVPcyykpQ2egRN2SFuBYVV5gAmBwjBYVyGLhhUrp",
  "key18": "5DByVTxYheK7x5Pg3AZ6UC2Ew8VAig7RunnMLSvX3p8FLyDtQgFJF4e55qfyK3hN8mTNVJcZ4kiQgDDspyNEGZeQ",
  "key19": "5yyTyoJTvHUkXUbmKMVnCBxpZWHSBmjSv9F35A7hmgxM9KPpVMwAeuqykyS51kaWdmcM2ER4CyD781jngVuhaJnp",
  "key20": "32jJcTgfZ7u4s58wYT2MmV14TvtaSTA7BmB2uhA6C6QZkKuFGfGCdbgQ14e7p5VozcNmzU1jAHLjfsqsZsfNsMGK",
  "key21": "2cuVcXascq92FiHosp1izNH1rKKmbTR7GVA3K3RWjQEr1RuWXWEtwsSpPKRx8We9bSxjfpQ9CsCae1XTUo8iU3Xi",
  "key22": "4o7rRPeiN8XN8ju4UxF5Us5izrDhpjt2pJUVHVLoaAqLk4ymTJ1PygKBTotiQvpxaiKCwREmPJtXTyxZ5C5bQTk2",
  "key23": "jxuNvCXwmB2au6EEpY3vzL2wPVTJ7ux2Lno2H3bJGWKWz3GUF5SkSjGNfgPYy8ERUTEZudpbQdQozhfefZdMzmR",
  "key24": "5dSgG7KTk25Ai5fBdxgCGn8F2qdrFXWpckiNZxNttNLyqs8esHWyDq19SEAXgXoTJYoEfufvzVXs591hZsKzrxmk",
  "key25": "25Z5vhaRgqwqTqxdAP6Yp2UqemnHPzXmqznzxsVDcHRBgTPwiTtdsWXFjg7cBbjh2uzQqJSKrJJ5FKzuKoXUhTGu",
  "key26": "ppo5ksLBYT17ykRRfbGHKp3x6rjZ56cmNze5URjD1SzVwo3YSo2L5pJeYxJnGwEPGaZbTJJGfQxxscQ4qB6C8at",
  "key27": "2xWQGN8rbpACHA3t6fcznkTN3FL7s41Zw6pjWXGMG1jmRBGKCK34Wz1oMvAsarcqCnsBx39b7iTjbrJ2MBX6UgAj",
  "key28": "4PWvig9w717SBYAwqxFbCEgysXCqsauShGz3ZeLcWpwnj76WMjr7vbKRTAPziT2Eh65dCFQYeAgbsiTsWMnrzhe7",
  "key29": "pBSRX5yKzWfwSAKai7VpsDR5ZyX5m9ptdejHAJgsaRCmg6D24joaHRtrMTdtW3EtyidATyvq2eutbhGuTn6LUCd",
  "key30": "34NX4rK9b22zcFup8hwUBpMyBXgoqmNeqWbpZ8XK6Kuwhc2LvE8dRUoPc7rnABw6XU2FmE4Dfh8qBPfNsGUjtU1N",
  "key31": "4mFMLrFybZRACEkjGBDbFBwPrT2pkLmcJ3tZ9ayryMf9jqUEi9pvxSmmbX3sYimLs4E6TcAAsVoQehSQX6KdARZi",
  "key32": "RnfQAwyFaJVegUNQQPXZAwDzhbxWNBxmBxhi9VgWUXHHBxxSi2ip6fUVaoBGeBnD8mQK8Kwodt7spdhbR253MQN",
  "key33": "53emKXovyBXrt4WbvkwrJuifypvDjFBSM9XYsw2J5yapw6Vk8wMNzVi24N5UTMu2qfYTRitL9mWJREpCDmk9rdSY",
  "key34": "hHfrgTPHKq2xTi2oMa9BABPbmQ99KHmtRuJtr5vnRJYor9nEUZnBwGfXbfdobAEKfYDpiLCVGUmPs82mG5TrWSK",
  "key35": "3F8FuBBjxpk9B3eXgZdCAJ1WH5349tFwJ8Jok5MBUJoAJqm8XH2YtFuUEbTek8ipM48Ho5N1UaaMdP51GGQwFQWw",
  "key36": "2Ds7T9eP5VvcbhDX4CUyseFWaLifo5t8rwTfCxMyHJfm47kSh47dw1u6k7T1MEZXvtRE2oWkwZpWyXYPFGYLfMM",
  "key37": "42ipYZhviwTeoCgMDB9VAE38afwRjSz86rasqPDPu77WnCe7FzJpJWoakECAk1YNVGgNUgB6Sf5GMWA5fpYKVYCh",
  "key38": "2huA65z8rbpiDSdSN1XmYRWKSvWgaxwmv5DLfynhacY3dUsJR9SDx8NE9yNTo9MK6aj2i2DqSaTAjJKAWWYVRJVZ",
  "key39": "F3tjfH49k3V9dChJ7mT3AW66ed43Bk9Eocn4XqoNhCB9dMPiWFVbTvw18dMfLQZEDnBMxqKsc6akUWhjdDA53iD",
  "key40": "PvNGacRgzdj8Ust2cZkm1U8cws22C6PUDzJTQCG3Uco628eRadBGfUxFqouH1dP8HAWDp6ukGEmAXWac6JBq8Az",
  "key41": "5bxvLSHe6r81ZKB4NkJR9rcV1ZJHJZbCoiWpUfdpnToHciAcfkHVvXmGw5cgMnuwRixABKVHRSNvnYBYUjVbqrg2",
  "key42": "4EcYvfSivn9XyufMLkeZrZFPhNC9n9KDNSH6ppGcZh93Wg4gckKP74aq5Q3PXK4ig9Bt1GFxQd4tQXVPmVsPPsPT",
  "key43": "312GwCpULSzg136HHQaKWhuXMjLaJt447nMBamQKWhs3v7son6Ktt9DmJgfxaaxjoQJzjCEqfQBMRqANp4DrxfPW",
  "key44": "2yZQo1cRTU9RefwvfEoogNF8oyFaG5vQ12YqfdNxRRbWoiYyHvSCmGaMme13MC9GuGpZiEoKS5xzNezNyo7RNSt7",
  "key45": "2eEYmJ2RtvQ1Btg6Gk4KXgc9wjf6wnLbNYSpT3P2tfrtkqUYZ4wmJ3L8wpL69sSH6SuSjqHTKu4vG6TF1TTfsKpW",
  "key46": "2XcPjUcxHA8YUnD1H8Fktq72FCQJLqpAZnzc51W3jCLt9PyC9EnDwTR1aqgQUh2SGkhn4DQL5C5RgJ28Kaaosvgt"
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
