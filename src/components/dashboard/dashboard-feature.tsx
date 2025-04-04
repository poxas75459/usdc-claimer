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
    "59PKxfjJmUL5rKVwVyHjsaJS9wbjQyLwJcfxVDMnZKrN9dgpRgxnCYUYcB2uTVCfpGKgPHwd8BVkn8P3hFy94MC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GW5akBKRjectnes5d1EUHAVRfpL1bZo2hBApRqzKJV38UhdHbhhSFQPgjG2tWUiZzRcaEVjdKPY1TwuwRRN4LWr",
  "key1": "2pQTGXJ3pqyk597DqLmEE2AKr59Pm3jJaACtqVJGMFW75xibZzRZ8Juft7rHuptk8SUumxM6jErR69UCz5DN1EmH",
  "key2": "31p3r2XgUkPHGVvdxMSQVeBU3jfvRgRQgnkmL8mBkspCU6gDNHc2oygu86QyhVEfzXuSY7JAinb5utEgYVWJzzNJ",
  "key3": "3BVa5kLrYcnMCSVpvLRHDLYSAWWFwmV4mH44FZXi7ZViC1mSTCK3k7YGM1BV3gWDZYY65yrxNuMB7sgAAPeRBxgY",
  "key4": "UnMV4C4JviCLN3Kgn1F3xNLHkWFCKSmD4yiHbbGmPi23dmhPHv9U9UdBS5MqytAVEnyf1BqmXrAjkzoVAS4ZEvD",
  "key5": "5wXtbuqFzKkaN44P9JeQ9Z4k3HbAJ4qXNGLrrApPr2ic8QbxQzpPRsA7u6AGfnsVyySPzvkxkgqfYzB5WJ8ABsmW",
  "key6": "5Km7kL25WCsALW8kaGagnxACrA446cfobbT2DYt6VvAvCAkzs5JhKYH9MM4eQ5MTFFFgvXvJj2zmvLjufSWshs2T",
  "key7": "3hTvKxhdFWjCY3tSSBZhr9TZqLLF6AjhTR7SagwEHmEESYA2krbavsqT6os8hq2ZmspTGRRmshtixDmQvTQsYo54",
  "key8": "2raJzNoS2nwHZnoya2TZUgcaNCdS5qXh2MooHNYTmoC6Fh1RmLW39JTrA8GfCav9Lx6ZhLHNPFsXTFxeiw79Jj5v",
  "key9": "bqfiVXASc51Jjt8nYGLMo3MGoquFCsjs81mvxS2ckPSQRddxgYN1jrkwcit8epn9U78pPaC49mLw4KEExVSHCiy",
  "key10": "4Rr6xb4PWRCBax6s5pE2pwmwPZQX6kH9oc7rJ5jRbS4STHxjUqzZPwXU2vkE16b9V4XLkc6tpV1UoW3J5ghi6Zbh",
  "key11": "p97JncV38VCZNjo21A6ZNVebDq2hQtW9YP17oCf69LVsAGLbJS1Lyv2RL6e9XKkCmjTiCzA8RNoHHH8vsagujqn",
  "key12": "PzDn6W1KTqvmn1oJUEvpqB1RWz2coRxtC2rkGCrR5nTDHXso8Ct71b6n7arnTr47Go8Quh6f1Hkmyo4MJ9xFNd2",
  "key13": "3sNUnJMn7LvMXMyGmBX74Z8aNzGGoDjAcDTcMgVBHBc6WtiiEv3M2cg2UjBJ6tEuz877jKbY1x3BEZHY31oYs8Nd",
  "key14": "3ZEXuzrG4EEukz28rETqDnBCEDXTRVikbKZdVY2HdSMfBqah5EKLyn7uh9eTw4nKrj8XV5HozZ1vnG7NWsuGkHve",
  "key15": "3WiesjkUAaeCXRzupLsimB1NMqg45k6xfvDwoMs9uCtBAQ43SgrxRD9RmMsV8V1aQk5pDfeXii9qKnyN4WMSfa8D",
  "key16": "45LUAo1dgZXMfTGDeyATYveM3pbr7xyBxjrh2qKtMzmz3vLrV2wfUbMVDgxyJUYZLahudF8K18UvotzCoFPzdswi",
  "key17": "5fq8Ygz4aVxsyt16LKfDuhDt7QLLNVrx4ywWnAuDjB5YUZYjMpHEB4dphS4eRBCNQbzZyDReoC5Dd3i55LCtGxNa",
  "key18": "2PKbzRM9jo6SBKXXCSHGVK3fQbpv92KdvhW3q1XuA5q4nEYhm9vznJ2SbsZMkLNuyHRniMEg7qYGc43JDw2TpUWo",
  "key19": "kwXEUo2HeTMXWPooX2pxuz4xM9FmyoFMHzTnWG7KVq9VH5tQ7wyYZuF1RL7cAj9RZbzqVCs2AE2eVcmoWTwx4xd",
  "key20": "4YGbJZFAvaztZUi6GcXJSfgiNvFu96Bsg2Y5usrGbLJdYg3ksemX4sD5v1ev1sPbHmX5y3X9NpgDmvbJ5jicxe26",
  "key21": "23DAMxf6XzKWhaSaWuP1V4DNV3pJ47oZ42ghWvJFwX5xZEtqBzYGqodvpTfLiVkF3s7MvZsN141jVoY1jjfQBasi",
  "key22": "2PcgfEaVZnxT6NuvNGGgYicRTgfKKzgJbfwPTruBFJwKMescoi83knm5qvKoM56yyYeCwo4iarHFZf6nngFKcyMk",
  "key23": "2iiHJ7Ay3ZmUequ765zqytKzMgmWPVD1eBHDQv2NzyE6LcgqNZT5uossJvndp65A4mc2hxTb5tK5H5vUU4KJDVDn",
  "key24": "3zQf9FRCoxGu1pSuvwjzjw5Ev1dcvgvSKJ2CqzYy4aRkpALRdnAsFDX4WZ1Pj3xAQ1nuzRW6sRiGEifwa91ypERX",
  "key25": "3XqZmkQh8SedSuEeeWgpZ82YFrrjFBnuzBDRay3eTrMTQf2PxQtXiYMtePDXTBcryJWsRVbrp8JKYLimNr9qZvqb",
  "key26": "5BjL9AVXRTXH83hBeEN46DkPihKRjJ5U5KM5Gt2JVHj3uqnkzpSPbCuyXbWnaTNYdo8sLHUmcknSaKooASvwbNFf",
  "key27": "yAkDjcSWjpsAstTyzp8bMEUAjj7Lr4QpfMjkZqw55187X5FPSFA9XNTcMZPMBVqWTE4DzvFCEbdkdtw1hBvWoSF",
  "key28": "4Dj7wjLVcuDLuZ1bpj2NETd889qk3fLZ6YWmRdUEH8f45VZaRoi13g4nxKC4Uc8MyX5HKeXWyLKHLtoXddVhH3sf",
  "key29": "3o3iCzghdMK8SGxd6YJmk33hTpXNn1cpX9HzkduiRDh9wXJ2FaBUqiTeJk8ubdXx8VdhPL86v9UifvJc5aM4Vngk",
  "key30": "4v7XshvvDoJ76bmhiic5iL9qWsJgYHcY7gWNvBeyNjGiCJKhfXQDDk3zU4DjK6dG3yVThLne97oUF2Cag9eK4Jno",
  "key31": "5X2KpWfnwKXHorQW5wq1GggakrirSV63EJLjMCBCuaHSXRHq57YfhfNwWLdh24f6vpe6U5WreqaHxqvac6q1cEKo",
  "key32": "3ZpXTK3VMqzFsv6ukJb9Ly1B2ZJ9jGLRwzVyVmUeYS8T9o379hbxadNyFYPQcXHgFnV3T2hvvdghn8sQ8UGuog9E",
  "key33": "NEh1gZexzst9sEyxYyqSVZ7cqW4MWAMaE4ZmorJYJs9P6QUdm982xxJYHLRPNFVq4GoquLZMsrFnbiz3Ga9KUDY",
  "key34": "4di7mAcqKjsSpgiF98AcU1ck1qBpAJNH6SNiXLzVNw15P5J9K3vvBRgR1MZdRxcamccYPGWmT9v1MSn42LjFPDLw",
  "key35": "2EJytNPkHrMZ7grArzCmzFj1Dyq3RfFu3dcdQSUeYnZz9D1uZHkZewsJVLcyGSoknHtVFMsE4iN6Wjm7Fu8Uxxkk",
  "key36": "4z2J5mwyirpwj5wfYVfuouobrAf7CLScW4CFaVB85K3TeVumiZbyzzP3rYYwzEf22nCXFx7r7PXsiqvmbBDiJGVH",
  "key37": "fJQ6k9Ft12dkrqHveXJ3HP5AwHgiD16m9J4YCcb2bLUKR7Szk1vYTvxrgLhD9xxByhB8Z7GDRPsc1CUAPde641C",
  "key38": "4iCU2m7kwe27VXYJvViBxJqPLCBDz8XsEvfpxX4tTjGLY5uRVoodngiCKxMN1FDS2buU59FNvtx6WQpY696kTu8u",
  "key39": "363P5KPFZ4fztr7LHnDFABFCWA3mzjLxj8cCzjc2Fq66k97P3dqj9VsXw3SZm7pAQaKo9YEGnzpm7hbANhGT6f71",
  "key40": "23LmXzuxEEKT4WKbhMzbt9VZXD4qfWWG7TyRh1YWHT9o2j7mCtdibpCPrwkmKCKf7e5GDHGprFuziMRK4RRaKYjM",
  "key41": "38yArWnWjmsxm8a8B17ZjPUqLBF6fycfMaqdNQ4FtGGXG4MxRPxr2W8FHfHcqBuzUdsacGXE6uKj1eTM8y7Cedd",
  "key42": "UYptvJbv3VD4g47GtGmSabDdKwHxpddTcBLHDHsBXueD5MtwMWbXS9B7vqgdw3nabUXLDJyR1hUwuzdWaZ1wFqx",
  "key43": "3hSJuwnHSiRAgbgEoEuqF1i9W5zZQFGrb749b1artNcZTx31rDRdNCyGbAgq3ehvF9BGkmFVWNphHEepJCLCYnVK",
  "key44": "3JEVXsT5e9n8YA7VSt1Y6kXx99sUVncmvtgF3aa9B8Q53wym48kdxci7eqhaUcuTypdN7hPGg9Hp1yEUj5FKVCeS",
  "key45": "54ozGat1EsCi5brxxe9Hb7fVuTtrPYL4QAMNazyG3RbyyzhaQsQrXfBoZ955hhFYuxgYBi89SxpbXLqBP3CCLepD"
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
