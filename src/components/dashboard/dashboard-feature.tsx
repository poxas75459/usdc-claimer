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
    "5UFxbHSsPLNqGn64HyWuawqGvZKXUXQhugUBjM4w3B1WoRxjpvAHD9XjCgUQnytixT9AwKiTyumu1K5C1WLbkQMb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fJZVtu8PjhP2g2CqepaqAeX9ojeAtNsEih58fPDe1Y6DmLHHfGpgfiJ41y1oYuvK6PEpQoC74wP2K7w54JQNwT",
  "key1": "Gvwz5zczuksSpSfupnDzmkpD4UafxDEBCc1HwJ2Afd5rgHGtWVv11m2YA3qUC7SU4naX1w3JtS1k8fgAaiFSgqP",
  "key2": "RhfKjwKTfX8b22frhia7sJK4WBe9XyXeuPUdtj36eDoCpTAjrnmgnjUHiSVZqTZrwSDqXGj3TvvpPYK9o1H9cMH",
  "key3": "E3P5x1gWQy1DFGeL4TSTf41ATTJWEfbSkjRny64nUESSwuDhSGutSertdrwWvLrccNq3SVg5cwdMCjpDRKjKnVE",
  "key4": "RRMxdvNeiwZysxueKPYyAJwLyfzJTnxbg1414h7CFSx3vp1KZ1m1VAiJbkdhBNZe86mUKkXmwFtHixicVsFNc2g",
  "key5": "2qDhKMAfrxuyEFmh4ioxJPrADfWe9LJyWtCxd1o6kYZxeeGGU25S65N2KdBuF6AXfrtCMH6XnQecqQkvh8xAE4r6",
  "key6": "5UoCyZDEQMJmvpVYvAaP52rLsjtp5M8YXhVdhHJ4HXvL8t5HHCV6oaaqjKUNnn1iUbnCMkfugahQ4rmkrAy1nbCK",
  "key7": "yhnYSWa3b7RPkwAeXt7rkXvGTUnjPn5qj6S2sJbwMafWcMo2iwtNzNsD539yHUsMo7jWwrzAd61G3Bd4vgQwBJd",
  "key8": "3FizhzEwB3b3sjMYpfb5GXB5sauwfVKTHxDkrFwsk6E67HFSjE5avt6iakxXeFFunNMhRbUYopqur9FQoa3QKGaU",
  "key9": "WR926oPSaKsR1G8EHKHcJpHa7Z6zpPme231pji9q3Kh6ANb9927yhcBEAwJmW3L3rCAML3hx13aLg7d2s7KSLtK",
  "key10": "2gSE5qfvn7q3vUFYXWCtXPPuvvTKa1oAgKz4muxyx4TggSmNsr6PmKGaW9w3dAhEEtpyykghbRCAXX1cpjC5mDxb",
  "key11": "3kUSYhTxqwHE21CD3BYcHYcf6XEUvEcSBFsZoBuXrEzqnsvFU1STgbLYRxq9AE95eGUP7hA3NUe1Bqrc7vz4Fgtu",
  "key12": "56RQPhbA2Nxok7QRxREt3atGRDYee8nxwu8j4k89CN7JmNAVDiK8QJycDRv7HdjNWwq9uVJSjVgV4Rxq4uzBcSkq",
  "key13": "4px7VLisoME2taLmnaa1R77pKnqeHqTY1SnmPLQRKZJQG49nkDiLox9orGgCaXYMKdWvHNEYvucHrRvBDDnrsvuJ",
  "key14": "2hXHuXoEQ7fY4MqYc7DCCyQvWVW3z2EfAptj45LZYX1Ro5ZAjfhB3uicYd6yRHSyV7QJpjzMYVJGqDrrAQCoi9U4",
  "key15": "2SMunN8E6DfJoNfYUaQfD7aKae3Ns8zV1mC3HBMS3rV9AGv1MtoU2CAdBWLEDPV6QJq6i5UQxnWeWPFaVY7cTxci",
  "key16": "2T2NkThCSQJJHQE78cnbGuoA4D4wD9x3zGQVEcpthWfLAvejtov3VUqrcxtZSKNCXt6NihYGZSNqQd6DR1LahBsf",
  "key17": "2HeCXuah96hDjJhyvGMWxVMj6s1W4cyd9f4QdBqU8st1T7FxyLgAR3yKJCV5mWg7EwEntPm1Gfmv3q5MGFBZ99bW",
  "key18": "4q3GdWeKvQ5BLi6GCM2SS7m6H1xBGUonLtjc4Cy7Gkg2MBHERDNN8kEFkP9ZNmdE8WFo2e8Q4UHTJ9KxdwcZhTUd",
  "key19": "5XkNnNAvZuQ6zSKVZSTUNFAPrdkZfAD77Xq9ckoxew2rtzwpJGiA2HtJrjKHji3s5uuvqc7U9uughEdXu1MQMf7f",
  "key20": "2gnFkzdvoKYyAt2CpunwFkVSHR9yNQnrAaagXArPATnhooqHzDGv5ZyiBnxQCX7jNU8G9S4kQnx2n2qP7XqscZbC",
  "key21": "4mF3yYeZ6uBEUgQTGKPDk5pqSow39mBsdravYXmSu6fBYyycGjhyks45nYbVBaiYJvnQYyNCWaw6dGKWuy2fwjF3",
  "key22": "2XyBYJMhYtyQWqstQ3VnaQuRvWEDHdXWQHv7LgRARqGjMgcQHU5wWiDrEYdjrD5k2GNUkwaUn6y5dwvW8v6YPGZL",
  "key23": "2j2gQjrpvkMpku722W53XZJTbcAXceZ8PTRKaBFRbruKagjVysomurS4ZYaJziGeL7bV9QX7ZgGrMFymAUXPggsz",
  "key24": "57Zi8AwaHE7sajy8Vk3aEzyUrV7FL1ys6j4hdA57RGuHmCApxMCm6J5aZAC1d6EaTPfszeRqiuyJPPmCpiNe9xks",
  "key25": "5FDs6FtAvUWQMY63UrwCCk3ZFti7s2RxuSBZpYQZL5AUBk7dCrkcArWYUoAoE5sB51Hc1r1CNYJXeAiGCJU6zmZ5",
  "key26": "Jo8e7nUZ1kwxzZxgjwg75tm9A32QU8b5JpEm7xBsVQUBtJT7b2p4oTmGQdELQBjP88AACSYXFsy4HJ25JkExGPR",
  "key27": "2BL3woY5FyzBhb2UWph5P62WvFc5RNfMnYMAfMiDBgTYW572Cmnh5dmzV3uPPrRW5NPrev8UmNN4znQbFjHvw8to",
  "key28": "2TmbeKqkb5i5SZ42P6PebKxy6SiPVp5u4ptDPXzA7SrXQiYLuKB47mgi273EMiqkE8WVKYagj4WPMxutKBWbxr7J",
  "key29": "4abyvBYSYquVei3xVmT38uxwYH4fb3EaZqjND4XCaR9p8StQuTns7NhFrqP1j5ZAREDFaRirfUtzuGBuLhoxb6Ae",
  "key30": "21zaTFPj3T6uEma7HutC3CbRpfVA7ZvwR2L3XicCmLmABXYvDkoWz8rEySGXPufW3wbELvQxaEiNWSG6KBhkLktq",
  "key31": "JovBTyimxfAvZ1QuCxN6NC8APT1FSs1i3UtxqgLYXki5T2ki6oVNxJeBQ4Nqkc3uMTHQJ42L95pWhNK5VcAwRW2",
  "key32": "4VkPFPWGWV2PFpfb7TfZidqWrK1Uw8PxKFr6vKUbEBVEoZeQSeDrrxKuFaM6D2y6i8mp7WZJVuv8DZK9bnMRyfqd",
  "key33": "5G3KfhnrFA6Wxey811sN7ym67R2c1i7krZU2caxaaLbtSj7JeMQTQQvXb5gK1B63KMzTmtpzw7tViUg7tM5xSEZb",
  "key34": "49wA33UUTTXyPb1RGucxbgjhrSUrRgEV6HE1Spw3ky86giNv7oWxBtSsPjMrfgHtcCdWkYAATKQNTDSasEhPy32h",
  "key35": "2wuzHG7HQriNeK4bj8tcnKQqKbxYdgrURQkrT3TDK8EGDed4kQsVWtZfMqE7zMyxCNbMrSe61oEfm4oUnGmWSH4t",
  "key36": "4CKF5CHTJNWFZVdFpiXiZivGwtu71azhWE7zboGLY89AuPvkTwYxXdF1uqWs6AbR73hYRwr27VwDgPd7DV8ehPiL",
  "key37": "4ZfgGRKRuvvZQusRCDt9hAKpdF6ayqDNoMXwGw3sM9PFYkGXzrU6vtLjwvRn9uwaHKj3Xx66QQWUzYw2TJ6215L8",
  "key38": "24d9KkaBWporE6kbfdFRkoxV2CmWjSvwLnj5sjFsQrVpMurprhUKh7cSuvExCEQwerEFkzhiycRYqUUfA2FozUZH",
  "key39": "4oS24xr4E2crUqiDSZBwxEnPZw1JLaaewtdMeDscVUM1ZYTeLrnGk1DsCHijcHS82XTQaQe5mSNRR8ixu38aPeTG",
  "key40": "5jogAxVRRBXxy2BmgzCu2CuFMFXyiz8H2odZJYytoTjQJ37m97uQKj5UkADKw1a2dhdTvEEvxtzjpMdhyYjZQQjM",
  "key41": "5o2mNZXni6QJkUdwCdGpV38okodNc7eQmnYr5L8PUM4W4GPwCGkyh5BMcBwLgfWXiDgPGXcwLigRoBMeYRcmJsne",
  "key42": "3aVEt89CfJVAQggUNpw8p1UxvA6ErFTkZESX7wSnLxjYgeVv5dtYJFzjhbQikVEG3udAajNtFYaHVaVNsDtmmcJX",
  "key43": "2g93BaeZbTc6hEAvZKdVpYdWj4JwmZaC9A7txZQyah4jmUUBJBSgtHx5WmHkeXy6zgi9Mfj8vWSxWrFZ9zxhX9xy",
  "key44": "3WL3t69weifKFSTNE3wQCz3ZfT2zDhFSvG6AcDeJV9RQxf7oDGJUr6fwXVBdQf7K6vrMjZQmJXNbcENHWDM4RwL3",
  "key45": "TzBVA9BDtrefu3HunqAxB7Lo9YJFgqAG2SDyPU6wJKQkeWA2oJz5Xmot8yTbYVcA84dwxunZYkmNYWWDZVUE76u",
  "key46": "4VkvhLiduQKSSsYiCwm56EXddyqzVdNzjHVBvuntNaTVtFx9TKUTChsWSpPirHoEdPuFYhTb4o8HqyXa7i4i2HLy",
  "key47": "3F1NMVgTfdxNyjvWhkhDEy61VhHnXDjHbk3PwByjhJVc5WYtA76kRxSNzwCsjqwyfwjQbtPgw2pmNHqNvKQuj1fo",
  "key48": "36PhJRicBYgCzRraxtmXXDFrTH5BLtH8g4Q9RMm95rjtbktNPZQmixmBsuDjm8mb2ZfbX3pNcaZ5dK1oAKakQAMj",
  "key49": "TmTZmd7qRTVeozNV2T9CKjm4h9aPTXZLz7sLQxoJhQPnEv1zaAVjfignRUqyrc5URb3vqVuTBXGfRbjen9QA5qL"
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
