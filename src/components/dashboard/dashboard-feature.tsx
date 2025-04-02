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
    "5bgVp36gw5bYUoQQN3SxizbfjfsXY72qKnbZpq9KkMkeCJsmzvj9zGP2R4gfUGivmrcVxV7gnMh1FEnXJwZQoLpi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZGsgcBmYZLWW42Yf4sdLTmFKHTzquTzgNPzAszPSRjVvgoxWUNGEruKksM2uCDuWpMEgyqRa4Pv6FXtTpF1UMoS",
  "key1": "3bcHyuoYBo4AQHEvs5a3Do7p3Mg1RbwK8QzL1XRngfrJ2SVBKHaScgV7N5r4CZkWYNSiAojTnnMqS1iMzgkmj8gB",
  "key2": "4jbUuuydPPQTVf3uYknYZehtC7zBxm1JzfX1hPd68pioeVvFZhqzNWNtp4FS1dCPzHWmFXK1muRkANcy7XQCKQ8k",
  "key3": "cr4HkFVhK8YxULo4q8dRpjyBK3WWHRcEbqraBJy5B5mBmbpRxwjzZ1uAgnojpkqwGuYbvZuR4vXUjW1ceqwiWk2",
  "key4": "5jCw2gn2Zhu7rBEatH29R6oihdqQwfGqibHzhwewqUoo6JJdvHnYfL4Pdi9LCcXsYuvqo4y534cAZe6hSxDQnzXm",
  "key5": "4rAkQ8Q8yoaBnkP7xjiD1pPKSqF4CavUfP1xd6BDGXmSP32vCxCoNVvb6eX8946WB2Vyq5ScS1gGLo52CJEGkBKo",
  "key6": "ALC9hg3SfJ1KhVkXR3pmMcEK7B1KhLgzQr9fUTRCVbhdHAQpCdocXQVjv5tKkba9uv8hPjfu7gDbLTcJTc6MRbE",
  "key7": "2tSK1B1iJ7gdrtq3BsFioJKZXUwbTqk5RBXLreMwrXByFwo9ujNyZeEGurL1cEYdqBsvVHQZ4Dh4U2MmTmvsj6i2",
  "key8": "2WNuY76kyNoA3W6iCyMf3VYRnt8uEjqAJ7VVM3AKkhP7QQQKcPidoBDVsiGLwKyhGSB6wPQf1seSWWBkML4kKZ8i",
  "key9": "2a6sKQhq7HZTt2whzDAcp2XdB7UXmEmdfRgHCL27Hr4qP448V2K7pMnsgMpBDG2e3cxmFEuhWScHqzZd35EFQxY6",
  "key10": "4UDFYuebNBeTdUgbAiCBJcfx8Ct9XP8u6cJB2NvMup33t2vNuD4izeSs9FVT9dCNgJGEDSBVSMPo9EEJoHQjR5RK",
  "key11": "3cL2EndcNc1nzHZzXkbzmrENinRFHGg8MZWHFdLjZfFtuKQuk9diA582Ui9qKDqSjWjwHT2hjdZeEh7YZEA1T7ia",
  "key12": "4URmgFVXPjmkPFgiYazUymuyr6vvmBS9z9FsU7YeHnmGnQxEqLFrerAv7ZoAYZ2oXTD2VDvD4hoxRhhp3ySSGAqw",
  "key13": "4rgRHaXsW6CQ1273UUiSjhPCk4KTa41bMJAh1y2V88sW2CHZppQfSPHPxwLXRx9sEKKYas1jWyXvGQSWDrzGyB8q",
  "key14": "4K9KkaLpW8rFGPYQzUtLonWePGVPPxRMs9a9w1FJRj5r7J7S828UdLwG1s7jsjrfmXzBXm4QWf5SDmRYAPz43GzL",
  "key15": "52aELsjQYGG8SAzsnmwhrBW1MUMnNu3Etv9ScWy6WPEJp6V2akCiaJ6rXy1jJ176eftfHKwjKBH5n4cKnSkNRhKm",
  "key16": "9CZBR29UmoynFXKGuzKr9ZxyA6u3fKhDz6Dwhh1ZTgvVRVaQLYF6VqBdJarzZS6fzLpma1PCB2Zrt5gHALbbj3u",
  "key17": "51NtcQvZoMUsncjCSqUyawnKzkeGRRWggsyb2e5Ff6xp8qvY9qxUgbTxwM76T2vcUZSsZJNWDC5tbg7mJX6i3RqB",
  "key18": "66cf9kPXXHt5Ct31T3Rz7XEDDwK8EYx1FuxYGMCJ9WVhAGK5nk7KoDiCyzh9LhrssSeYLQWqn5WyaccVxY7pS7pb",
  "key19": "z2K71QQ7DmeqRKeBuA8uBwm5rZ7BTVxwidWUxY4PcX6Bnpjo8AKzwTtR8Rc2C49DfP382sZsoUAkYtNDuu1fq5T",
  "key20": "Qm5MAPdoN3JptkVqKzoBxV4sHtjvJ6svG5zsYpsGtT4tEVZRbEbkb2xt1S95yXaTGijgqnk75TGJTE4pfNN7Egv",
  "key21": "3H9j4cMpE9fmteUxav8Xpg3Cmne1bBdRuvaZEAQ3WKfcEuVZHVGSqyMHMwUFtdzNwdBev3nzUiwTtGCfiZbWBu83",
  "key22": "MoxFQJgZ2vUYhqkqUEyk3SYj1mFbxGxuADZYbjwW6LKXUQshe5Yz1Jj8V6ri28rzEJwW4ugaJufTdx25CDTqWMY",
  "key23": "3rLTt7kFPuicRutAKLifNgKW5vndQrNb725Py77ZVP7p6ueTAzVzSvdNyfq5z2Ghi5KXVCLmAAMeQXBReqPPfVk9",
  "key24": "vCruGsgKDEbLcX4rTEViFGqMqETWJ2Gtd6MU8jHHDFWdbAFmSbmCpQ9wD5PscffpoaD5PV9sP2W826bhXq7K9Wm",
  "key25": "JVP3Y7LYiUcVwyyNaRQWrDoaxdMuqc1KqnETi9un4mvmgDP5zVZUL1bKfFJ4qqibEFn1KCPWwrswdG53ZJn9p3G",
  "key26": "5tiD3NCw7r2GiF9HPtj9vM2KSJHbUeThfyoDqmCQeJ287ZvpR9zF6x9fDzJ7jVcfLXNr6AydxD3ZxrkvmSnvgK8p",
  "key27": "2LgFRMxFQYZ9KruAfCsjw2WMG1KaHR2ic1ZZZ6CCDdPeLQxDAMATkxRUDaGGSMzhn6QRypAWVJ3pML6vE5kiQYpL",
  "key28": "39jYfR5LwYa775ZTNsHSLVVxtMyK8eMynTFXvJqsRLfaPsTun99RVyuRoDZ3LFfcGdkq4Dz6ukB1EqEj22ZALpSV",
  "key29": "3Ke3odb2Cqh1bpLRy5v9GCJa1NsieBf3PdAjUqmbTHbAXrK8HqhXTEqhDLbAcNcPgmrtF3vCDuHfzXTcvLEJXTr7",
  "key30": "3FsHk4wfjKjvTFp4QZr697qeEbarraYbiWVBXYKyqw81jf7JUtEyDr8rYVx5aqE1CY9jKkbgvi5otzkUr7JpBnPy",
  "key31": "5uupGsbtjXuJyjUoHrqrVmu2qagjb6a41M8NWPTTrTvviAzirsYqYs8dYY18RxduVCBJiroaHE6GT5DnuiMbAssw",
  "key32": "jWAftWfyFu2rvTr4ZK68ZD7Daf5mCnYDBQZMu9wzFHCQgLwwr9aRVVaWxyMHKeRQ6cq4bYWmJt5PjdTLrJG7t7q",
  "key33": "dhMcetrmDUJcnmaugAqabsTyC6g5KHQwKwmVbo22Vc8xKFbPUNq9w5fHbJ94inhbVoeBSVmwrUVJ2fu3r5Ni1EZ",
  "key34": "49gh8odYycHEedhVM8GBstDbPqrNVMKp94eyynWtd4Rk8EuMVEKvYcyqyRBKhNTu69wXJxyW8wijr6jNvyPBD5oK",
  "key35": "2DZ6XSY4bjiRkaN1fENi1Qz2gMSUPhby2APeeRAYfyx3UHcUJTkf6vnJ6d5uDAHbBbWz6KpBeke6eAkGA5zjSPk1",
  "key36": "5pod7tkyTKqYPjGGHSYtsTj1SoP8ncehLAe8E33jgikHHRmPZnm7vhfUxL8hDcdaWXR94tsyizUMpgAP3Y1S3SUq",
  "key37": "5wiPQYQkF4sdWtkAi5p24oiioxTwFwUBcMAtaMYUB9CzADpDY2ng6JQkS4e514GdJJ6waskvsojeU1gDCdpzR448",
  "key38": "2j8W3RaiTcNHy6To4feZ3MXErHJ7hzymvZ7caGLBMLoQvufNpvqzRAxY7uRqPMR86dfVLuYwuuYqLBC3G3We3MnN",
  "key39": "3dgPiFQT7gy32qbcDX5rfH6FH1xKXkvnAZwPH2qGKXw8UayiJQJvwSEAPhByXgU2Pui8VTEkEAJ4gCfYhLHESaAz",
  "key40": "2stVzh2YaihUyP5cScVw6oSCSZ4Ev46s2rHYuLaJjZ7kpbrCerdGK3N837A3hqb5Vk2DYe1aGR3cm2EjZwT6ormK",
  "key41": "4288LENDRJmZ4S7f5HyAiQJLNJkmUwfKDKLfPdHc4nxaeaYDuRspua3k2cMyiNvkmpfaqBFZEKxt9kFgZTTGXjxK",
  "key42": "52a5zKhEzs7tqbCeLR57EXsZR9haPU7HhKyPV7mA9PigiQV2byCKSmhnZtNnZDMjKXgzvwpGDyMkrM58Ni3Pt6db",
  "key43": "9SVP6qAQXVAVnvHtGU4VxWLhJZxHvxjSRfwc3N1q1CbuznuKxxRGDTmZnoWho74Z9GtbjY32Ea44AGGSXd84qSr",
  "key44": "67QeyEfDKc6hqeaAct5Q76m8h3jBhscd2SXA7pNgzYkckWXhNSEeiRHsWMFGxTTCdqgcTS1wTMVP4pDgmAqp2SNw",
  "key45": "2QGVdWuQfY43otb9NMr9b4xuXWTteFM2AUxa2v1gNCgMV7zD3o3Um76q22XnbvBys6MQF9GAk9amhGrbuhrQvGaY",
  "key46": "39KrFFc5pXQQhY3umaAKee9tGzZWhccMVWvvKN5xb4ponuSwMy5wsc8N2p5fymoGmg7DgxQjqursBwDtUAbdFbjy",
  "key47": "5C2dqsJzEaLPQJfQ8xb7JpMUGk3qLDRREsPooUY79aXf22mYN9m8atW2wdnEpagLjgt3Em4Hr5w5ZzAWBGwE7kPa"
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
