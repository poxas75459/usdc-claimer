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
    "2xVbo5n4c45GJDxU8N38pAaZftQhUtTysTz9sf7ZFoNbDjnpJZVHCdDuusZSmxpRAWTVFA59QPgnPZmrNpfwNaUk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K671bvrgFKyozLus9h71eMtAX9GnxfQNHPZB2q9eLcVTKs8phSYbTYsYxJLRBoQhwsVqXMCmZ3XCGwdgyUtcWqq",
  "key1": "4pMSy2Tkxj3Auf3zMyuRGwgog5zodZbvkQEe67pD1G2Hhf2cksdRBWvvGNDXE3WuQVxaJPxCGdiFkzZy6pnfV1xV",
  "key2": "2gF5DCWNuDnDxwfWVjSib27DAaDX6pyZd88idaXwWJfhim7ixLBPoejvB7guUEryxZxSaD6Teq1AurhNVfjZccwP",
  "key3": "2FmUQN4vcD6UkUN3pf6sQW49Fjkb53sm7JGmaEjchztmPLALa4aaGao6iJ1CEZUL86hHRnrDV8Fwo7NshNyvjaFp",
  "key4": "tXeiFeGv9CULpn5T4beV8vZXKo32yb3X9QCJP8g7zZLk5YAhTmN6gggz1WTvw4txVcLvccyPmWBqLLvJzs6xEYJ",
  "key5": "31C9pUnVhKv8MMh7Awom5LPUfRYrJniTESAWWEvNE4YKSLVRnmx8JAZXoZuxcLtoHZ39DnZMWnxEjQe4tPixjqpn",
  "key6": "4C1XHmNA898Zh8HJnNzq4C9p8d1C4QjqqkA1ZYvQvWiUfmvNNokisp971YPVozak6GsYPNVG8N4QBxPoUciMRxvb",
  "key7": "Ldmd7HrMwxpM1UEoCJmcVjQ5npwGWhvTC8wHq5DD2LzXUKKHAFQHKjvZMbYm2W1RLjie9rP4jCivJC2qXurnbcc",
  "key8": "4BLkbvF1w5hhrckxknmQPpwhjfKt49iuidfYQ4FA2aKt9WrfyH5NvA4EqVGxzUWpYpGeDWA9cXfGWwVSo6bXbMiK",
  "key9": "mniQn784NfNUFgjVXzHjJzRCt3K621BEqmHaNvaUdiF9GMkfmKdVHqhiowSMJxJtaNWuE13h9Ktx8QyBDcQb5AU",
  "key10": "5XsNPRtyE6qj9HU1pJhmE7zih3XmNzgD8rAMmvZejEUC3JtvEyuwB597PMRxEtcKYckd4LDPKAQz9ArQSwAxG7Zv",
  "key11": "2kC1t8hqVJgVPA6LXeXckiRe2vhutxNiadvvaUMqjPxKkd2AqdcC9SF4ToRKuNCwaFwZYs659XhWvhswJzfYRdQW",
  "key12": "vJ76HNhtFFZACvrV4qkefuvvKH9zYJp5LckN9tLQdPQnFWwsmtzco76J9GxMA1QSZ9MryumXbT8bgv2rm5CykAb",
  "key13": "3fAH7xq5rt5xe8RopDyHFpfu8r9EuaGVoxz7SGYzabJcpzxQp9RAfZEujUgeKV5Ko4a9ovXSigGxLSFjnc3sJ3Xs",
  "key14": "48cScFtvhb3tTqJgjE9WKxtwwUm6ukHPx6uQh5vJFMpRUVeWPcPZDs8drvTXNjEHJQMg2EUaGCgrp4MyMhagPA6m",
  "key15": "5SYU6LJ8tMMH5fVjaZ3MLwUWnxsSsJLLE5A5o6ZZcNp8eknghu8N8asC5xoJEeZtBngA5WxneqhisXzJRaviEmAP",
  "key16": "396Jw4Jc68nxqWUL1BUSDKkuFxgztfaMjquuDNMnSFqKrTr7sDurM9riGEB5yn4ieoXsHZzREh8DErYp3GGRj9h9",
  "key17": "5ki4DkZQAi9rxqDsN8GPg5VDjz9YXntVHpkGGsftundGH9jDkg19d3VnXrTcE72Tqe4W7GN6LWz2Gt38fh76F5X",
  "key18": "3sWv14TKN3BcmNvCepvhC1D7fRc4HTC245iMDB7sw3BdLBxidLvi2mkybTWLgJKoQUK2cKQk9YTRoTHw36mrM1XW",
  "key19": "3xnDApRMZ6qieL5VbdnKWDh2Z3FzFJ4zL2ys6HAtjeeZBiKAToSKZNRkHNqkaG7mer88oGdLVLFHY2G3iFvnZaNo",
  "key20": "5J9RZNE4LQM7ct7fU39oZNGgp1GURBnsbwoe9dyUXiHyp9z1DqH4zzkj8opaKEtzzKeKjweu4ARG7qpB5BUJQddT",
  "key21": "3KJ9wE53iewaFsrpEmGJxfWYLB9tF9qnH1i7yfuxf6Kd3V4MTofQh4ua9mPkvyShw1T1Wt4iw3rsAdCZJLpoiwrg",
  "key22": "5bYQWcGyFHynwZ7N2cx8B3DVdUekNf1e9DuhVpRurWSSGKQD7tGa4vpsJKLw1yMrAzmmRsyYayFBaChGHdMS6UBx",
  "key23": "3YHzmgQBS4AYSEbusoWW3HPHpHV9gwypA76jJtv9gLqxPdXYz5oNLhYAUJY3X28YWbbm7gMHovjuzdtdYApH5amp",
  "key24": "3hQkk4S67nTYyBcUrUpe5qeP7KveC1gWydveNQDhVLYWLjJhyqdsaHLCW37EGLyZtKgmMoeVd9hjGMNqoVwitFjs",
  "key25": "62G3WfXYfSn7uEGkpCYomWq5TEr7jfnRny8K5ixoeAXdrBGS9iwUq1FRhTnHwhogw4Vu2xFr6VUrV5z51Z1q7RJ9",
  "key26": "5xgvy8ZjTzf6osyu896RpifWLzi7NgPdmmTRy9Z6jjfZJ7V7RmHiA42dmrqd8KwhUhhVmYn6kaSvSHFLm5ueEXXE",
  "key27": "474ymM2BhzDbtnMn4rr9Z9dC8in3zSaBiD8Cio6NAwFVoaTXXxgdFU1sKj7urkvu21omPdh5Ejvt9eeMKmx1bedj",
  "key28": "3krNDtimPqeo1x8YTTFG8WjJz3bazpz23skXMef3ZFZBVd5ANTEpmPyqBzbEW6tj5R78Xe3z2szdHAd5n1XZT1jQ",
  "key29": "2BjcVSTzkXANkG2xZfCJKr1LQeXNUupjdXfzgg5qVeMg2QLSUTTBAoCfVhy2c2uN5GagYwsCVEUYmtwEy9GPuHQR",
  "key30": "5RCcWktAzsZFnk9wFuvccXjRsG8m86CYs1SiA51ADV7faoHHRtHPtDfK3fcLReg1eTMmYWQUcWkPAFMWTz2ZrxoA",
  "key31": "44Qbi6FwCdnqE6gX2XxWvCa9S884tZWF7Ad4j1MiEpqP1nJ5t6ZsN4ToUEdgvLLiRbk9k6zyP6DQWnKNFFxDVLfm",
  "key32": "4k14A5zx234D7Wm28QZ42JJ7MzHJUrfHMWnS91NH2thoVTbD3gWWYMVajxQCbC2d7AywNNhRP3qjRu1ocNna8j4K",
  "key33": "3J6cifa21gA2Jy2qwssndwGMU7CGHy7Bg56Jju3ErZsyd3xgLr6A9Rzso8Th2c4XWrQ7fphZmjZ7esBeHmHy3Pga",
  "key34": "1xa8S5mHoj7967rHrKDQQzFZ5NnVCxR9w31qbBzRaDdkwUGDcqAQvQ6eaLuey2f6sAgMQLkNd9kZE2xoTXuaCkY",
  "key35": "3htpzzUs3cGcNrSG8n9nBT56aZLfSsQFgL2TjxLDQcQbsbcwh7Gyi4TiCAJ2KsmZgp6ZCLtMnLmuTHDamKHcAtmp",
  "key36": "3JQieKpLrH4za8e5cZ1QsTPHzPUwWACmVnGMm6zEmkVr51Uo3t4FDV7pwUrezadwjtTqi1VHkK49rLCZpHgyyS7a",
  "key37": "5EayqYmvz5mcAnjBtPQbjnahLSXoL1EsRBqZ2amyaAryV31Ws5jCcd2FynA5cAQmBTrYYDtBFxbzqqbiiPwLXU4U",
  "key38": "3wgECGouZh9aTg4tcnQdaedGRWjTqSvcpJRVH5DCx63VW2pzooU6KewwGYve9xjXyDXL3urAt3Fo2t2KRnwVPe3u",
  "key39": "4K37o8ENhZs6hfoTdmEYP2FCTzjuL47ccBm35Q9q9aSNiet8PEajKhDcW4VmAMYed3DnCdQobUiL2ocg6uiLLrQB",
  "key40": "4DbppQJes4epp4sfsawVBVzyNqVMogeEtdymXuSb4iHE3X7mTTfAzytAUGH1YkNuYTEA5U8CFRxh8qoVRN2n2hvN"
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
