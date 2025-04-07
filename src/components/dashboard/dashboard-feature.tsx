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
    "5V8Jq7usMv6dKVUNZ3qg8ZYD5DozjW8Eqg6VTC269gC19W9h5XZZASrMN8xCfqj2WZW8bc5e9JiPQcTtYGir89ZJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24wxNjdRzHvWywKzvwXJFJ3YUhhWPsTvxhZpqhccDdcH3KsYBF7aJnCadz9ky1YK7Eofj6jAf4yAL8n4pC7ZTnSG",
  "key1": "MjAuW41LT6DZB9p1JYazDjQFQQsosBG1k8nztLpHh8FM8HidFkFuMg4mrsvuqTVdRYB3sePQc7F129Z2HZhkeTv",
  "key2": "4TGCEgCiZsJ8A3VQmYfbdkctbU2MZH2JHbWUMEYBqoVoPT7vfc1cbZcJTaSP8kLSRczTjuxioFNXHbu3h8ZUrVnx",
  "key3": "2RNxJsQzuYke8v18wcjp3U7vE8Npssq6sHuxSJwLxZk9DnvkfEbcXKLHqwuE39Qza23N8rTDUgeiSFN9sZqq81b3",
  "key4": "44whFiRLCtwHBndqtGvZudDcmZ5dRGwS4eYd4R9PL2UEzZ2vU8uR1J1EibCfqgRNyACsPKLACQ155QYGdRYt65TY",
  "key5": "3VK38SGeiZr9gJt3S1fLDtvkJH91bnLx9xYYudFZk8HJk7X9SkhoNvk8uSqgjAJb7vZMJ7yREShyHjghgxtNmt9r",
  "key6": "ZXz2kAe8tTXeNMUmXog6KkzfreMX9j4KECV1KgN4QiXRqQvmUToNvdFQ9VHeeZhZvuxia9hJC4zfCgc8cfP857r",
  "key7": "2NJNfpx3ctktakacoxHnN2wrfgPLSMqSheVrTy1EukRB32eTMmdGzWP4uHy5No5q1N7qizG4ZDCqWKpkLEzqHJ4b",
  "key8": "3C8C8yF88GgGFfevydukGPkxTy3mg8p9H5Kicj2bsnxzkeoWJAjdiezXR45CPPU7aH3hzimhKPNUyZ5FE2bYbq7H",
  "key9": "4DETajYAcryw9ipg3pF2DukthXZFuTQ5MHv9subiUTJpTkGq5o3gxssJzQYMz4UGjwJRFtL53ozLmXoCBEPjySdE",
  "key10": "389TUNxq4UKxBNQiU1ARcLRekbfjjtC6jxeXYLEaQBRyRrvcWoXXqt9DmEcTHWQCb32yim5U52xjeiE6j7pcD3mN",
  "key11": "4WEYTABqz7KgCvq1BJxvpzVZJi8WVvuouUBnxindoeZ1vxguxpS7Ah6R5ebeE35tMUxdYPGxiEFbnkgCDxewvPfM",
  "key12": "4spjP89Xng61A23wjHaKW3pcjFcCyGpd5u5k2HSC3EDnEnTaZHbYfbzEpthnroe3JesdbgrEXqF81x2BxT8iKvE4",
  "key13": "4tT8gkEGvVFsnAWQkgqdhrU7CXQgEWhSr1PKxhvrXCujiEdFmfraHM2jMN3Pm3fHdmH3y7uDR7x1KbwPNYioFUui",
  "key14": "TWNpG8YQZnGDdL2GCCayVWGxEwLw9BE1evwWDjvEP4kRfXXWMM5SECf34EbcGxYGLostyPB3Nou4ekBtGW92yn4",
  "key15": "5rjx1bwycvTav3ndCDRqBSFDxVYaHAdTdbZezCcaaobVUs2Yc1ru8EaCAkhtYPstt9eN25vaCWeE74aKcqwhjsrP",
  "key16": "5DeN9BPGxSm1y3rtqiVkELQfxZpaveV6xCrgsyKDTogccqWeJbTAJhaukTQCFpBwXAP2368sB2e777qekMnxzgwz",
  "key17": "3MjELbfBbnyzqk6CVXYHHS1Q1b73fw6t1hbT4SydFoTG8fTZ3sVq5PR8aBuQGGaq2B7x95Q2KCwbUHvG1KKspFnn",
  "key18": "5nUJXN87WXGN3135i7vbb6eLLbrnxn7fnj4uJy9YkUJSTMzv4TumWVJEGF76Uj861rtFBQnvD87LSuZnSs7yafvX",
  "key19": "4hQ3rdRRWoEoTBpWEyzpf9rrVEckemd3CkeWF8m7Le8DQfdA8waV17xS1jHaJpRW9zxjW9wX9BUBb4yPbm56zQep",
  "key20": "459t7JrjKUkgg2MbbGwTwo8mM5FmceCNptwuJEGT9VBMfLdaz4hpwaPWGtnPnx6acASC3iYbcGJ8kkr96hK9eFFZ",
  "key21": "49wx5XHbgU1wjF5sNDFns9dKhYr3TMVNcDfopGv3EPiURsEryoJZQoxmUv2w1guXTEPCPWnLVcCVXdA9TUCioBXi",
  "key22": "5LRZ73Mpj1Mz7TDmHS2oPWg82jj5oXXbHZHTkjTYDVVBYrQcCWwN4sSA4nayrK3zbEQqXU5uvTmUTUwP4mUmTnit",
  "key23": "4Bw9UVaXZ4dh1g3aeznX6pQri7FwMEy7uKo56XDk2bYBhCi3yuxoDa1f2jKidiWmRzyfJMFpwYgwBijHbDSkERaR",
  "key24": "3545gEvXpgMeu2BdZChQsdBYNADuDZkML2MWaZ196uzTDWjWDSJcJVqYRp8ZREUNbFPfRjqx2pp3cFrRcLF5xFYu",
  "key25": "26Q6uHfKjuUuNzkHFQYaBrFkLUovcu8te4nHAVPEdjaWvGUnv3eY2kQN3dizMfM4avN8zF2QLFb9QeXjZ45tgUeE",
  "key26": "67BUN78yU5v7MhMy3AZXeW7PKKwRFTpgZn7U1oMDbQeLmaeeQ4AnHMUJcvx2HPz57VKkBZ5rCpugpioVvQWDg7YV",
  "key27": "2YKWaDdH3EtcxCvofcsQVffwmDSt5WJ17473k7BKNoj3GEtw16cCZTqnAALrqbjSveey3Pg3MtoV129cx3RghFdS",
  "key28": "3VVMym7LLBcihfLoR9earJqJHhksgg8U9BawMboAGiayRjvqDYHC8ydEny7uWXRzN29xEPePhxsCDukY9zF2Aa8a",
  "key29": "4BCRrmfgNNrdTUiSN49iTMAcCySiGxuMqCQJC1m8wVCnkX2ob3mNMvtUfmuG2VDotTviiRyrCEH8pW5ZyBFyiCBg",
  "key30": "ycAZFKLYjHXy2XseFZia8uWGvsXqUAemSnTUrt9PN8sW8Z5N1qatUpUrfoJ16krzASdQrB1LdEhjyC27p9s2qZn",
  "key31": "QsHuvRxX7NuLoi7ghszAC4FUVECYMiQdunAZ7PtKPK3jNyh5THQ4ZKZPG5doQo6W2KyHefuEqwsuccUDnpsYPke"
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
