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
    "e5GyKk7amDKDBPrZ5TrpPGGhTSyuFvkCBz7o3nAL72x3h2YzLr3KVDyxxa2aCui8cTn4vir4bJUhfnztr66ThHb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PC9agjDjZUGzn6xBeGHeu3pupaiNvPSBMn3CoyKAoWJ5Zmrw1C1FgYtXiUdbmPsiFoq9m89gkLZszrc3hWqsShe",
  "key1": "3YwHwt45LLfZo7X8cwK414xw5eX965TKaSmBRRZbft8DiEdEdoDPADjYe74ygcPtgUurCSEZsvnMtas5GyjdxsYE",
  "key2": "MHhUtHwnN9vc8HDZjMJzPnfJ3XthSCiRQG5gLtQ5X7vBFtNaxndtpAjNmpaHymAzpa14HZdP2RUdbr4EQmMTdat",
  "key3": "3FvGPrtMHWHHAr1P2vjDbB5KoAyFZN4mtihGR4KEwiWFW2WggjbHbqyh7WQDUD4Q7RMer24DSpK2wsfSGsxexxGC",
  "key4": "4KFfCpv4UXvAHgq9FWRB7Z56gSN1jKTrMeZ8jrKZX3rLJ3rdMn7zD8SnCgetFvMQXxgxS2AW8fPYZAdtncKwZk35",
  "key5": "58ycCQjhxZDJHykEmuQpZJXeoPcHHmjY9AWGh5jiCowtzpxaaywjPgER13SBoNNy5pB8i32V2ypuFTTNF8j9Q8nX",
  "key6": "VNJiSABnmcxTWgmQjWRQ3XCWKLkUzvsRShnVfdJEKzmHGwR6HyXQY9PfLk3rqLAUW2xysKRj7ukK77zeeypJ1nQ",
  "key7": "weQzAzMLAfeeNyDjqaHvRFv5w5U3Tc6uSRqy2WQ2NkQUB48MtTs2rNohhsPLqBbWd2mrXbQ7GroJgXhSrsm8wWJ",
  "key8": "3MnCD5QCwxTUUnr1buFCecY28Q4A3uxbYtG7myRgtSuxYiHsvtNQNPmN9rVdqbb44nHXnnycDgeuNnEv2AqRbuGq",
  "key9": "2moLdRYfnoMhxxkPEcLwY6hpesAzZGzSJLkUGavMy9ffvkekWt1jy9SohQe6YCgTegjNMedZcUigmD78ZuLGmJ92",
  "key10": "5RJfoWBMp1cSW8cfLwMYkYddTW53UkjdreHfvviACcCB1xniVW3wSMQ565oypAxV3KUtHQunN4aw6CJYAp4cnZWD",
  "key11": "3v52KuCjLfE74ZezazrPjjpdMSQktkjtVkjGpD2UPWcwSsBiqjaRW231CwKrB9cZXnbrgXWRCzHs8Vghot7qv8FF",
  "key12": "5sb8hs2Eb93oXLMy6DveaCntGd75ahFArJAS6N15zmvVTaeHa4uAevbxEdTenFzLFW2bdq5dF3UR4gYn2JLHuBW1",
  "key13": "4acbjLrtwN6ePVasbJbMWgQzAKRuUmZHZk8G7fb5Eo5XgipysTNyjRC5C4ecKBJiNwqqNNWMW3352hj48W9uQKS8",
  "key14": "suM3eefkZvTS4wWoc6Yt1xquiTF9wkJnZQeJdXQVLFpqQvB9RiYxAnkNF3EJgCs9fG3NKqw7swcdXNcLLEp9BX1",
  "key15": "63HamTifYQsML9txUeSptPr4hEX5DJdim5fEHPxq8LAQdJCWLZY7pbq8GpmzVy69KfvHXZ1M8qTAtbnVkZ1mGSpL",
  "key16": "L9TsjdkVxL7h5CvNYSEbX3xFvqazSoALsmbE7bsAcLM1FBv8RPFmEUig65oVSRNNUqJWb7E3nntsgv57nDL8scK",
  "key17": "4UJVgZxd7ahw9D1fN7v4spcT9r5iEpR5RsVmvce3ZpHvQpTdQTnCxxRjjEVePcbmwM6Ljk3X4aoKRff5Vv99nSFJ",
  "key18": "4eYfPWKLvFZWnujideurhKJiZYBi2kJnNsdaMcsmMW4gwKL4dnS1atUcvzPKAmirESRtVrFQr4gacDSu8cidJDkX",
  "key19": "5nEdpfL533yJHWzNR7V6J2yXE1uBA17Xgw44T9ZMRdP432EFjJ97ogWSdf4BoMdSL9QJ2DYMq1kN9zQrVmRDG5Gt",
  "key20": "4Fnn8TMK7fGJYQuU4gVk3yXjsf61JVC8G68DdeBpi4E5jEZVLipG96r8SKyx4z3HbBRVJKwdzmoKTcX7RyKEfZkp",
  "key21": "4vrEoVNQGpyoDtWxNzu6G23LYfRQ77yt8DtwrbwYzWU9LqJAFphMuCFuxvPquG81GvRkFjEG3UTPuLnNoeYjPnK2",
  "key22": "5Lij3PF1gVLEYnDVJKwR7oE9KXkmadP3rSp7gKxWg5VN8vSBZetfcZv2VQKvA6DxexagrDC3Cg9Zty2gUkzMUEPP",
  "key23": "GzT7ZM2GWzUEz7pLfuHjV6tTtAKaB7rth1VEZVPMG91vHnmJhBN1og8AHG1ZaTvxRSkNoWAgG2VhrvkLJiqamZS",
  "key24": "5e3rEfzTjwBx1B8Vz4AiZKbCEUjojsdtZ3FpHbBq1es9iJL31cXwFtDBzWUyWJT5JVt8bMnepeTbu3gWXUv8Ntq4",
  "key25": "4imH1EMxxcUjGGtc1b95CH4TkB6coG3e5gZnLKwsjpbW1h6NpzTqoBZdEkXnYs5c56SMYq3wLFgPAHaV9MCbHcrc",
  "key26": "4XdssHwSdSwQw72oWFwvVn8ttc5nCoVSsHZ7VkSp5pNEpcsrkAxYJ2pjSbQiTRcEKxrokwBTpSaAFdfD5x3XUJRD",
  "key27": "61ZLohcoqEwx4PsbJNYs3dpX2tuTeAhy2J7jVpiVBnxbAsPa61pdyQH6i2Lk96ZLM2PXFJqj7SXSBAY5miykbFnh",
  "key28": "5JVXnCPU5d2s6FyLUbBNdnCe2vpj3Q5ecRUC8j8NmYf9HBLFUqVYqRSNsHmyt8AyPHTHDNXS2BkFJSBf7GQ1sk2D",
  "key29": "3pFiwTyLGCybQm1K3bBfCdUnBaXAvRvxyAnYLcwNummybA74RSWvV5pEtNnUr1TjvFSVANcb5Hr8iBFv9s7svNqS",
  "key30": "4yiiBZWEcykdQf4e5nGapCrvJrxgbEGV4FdEBERceojBnTsoh5h7gNXcxn1jCmcZYYYkBgQBFox9UbfEVPzddTw2",
  "key31": "26vyTPgQN7GUFzDKx6brDQBafZ7ixrHKWmKRv5gQ17E6YZefnKGHJQtYiTxe7eB8rmh14rZcVeyUPJfygWUTqTZK",
  "key32": "gZeEjAqJgkurG2fdnFrpWK3nFAH8AaXBex2cZzzx3zhAqAJCzPG373cDWeLWj22wPN27uKXqZ4JkGeJBssv8qxy",
  "key33": "4vBFL3ZvUf39y6Kcd9Ab2zn79vnsUN6YzdQtMuww3Cjq5n5cAHVVpJPL9jDWcmrdwcvNCSPYEV9Zuv5DK1x8oKmR",
  "key34": "3BypXhVSuGBDMH3rNYHrnDDRay2APR8TQhMH4e5HdZbKPPgZJtRVYSbtmNfr36xu3TSQemWynQzuXJHHJp9D4o7q",
  "key35": "5UKJeGwnmuXCpJg74JTwKzDGDETZGsx7zmPQDkrhXLgL9gLfPZPPkCsbutAHeedrXtChgMVjWcY8C7TX5J4meXf4",
  "key36": "2K32eARYwktfLRbu565KhSU7Phd9v4EKqMfiGGTZVC5G5vzNbxUTPSpoErMf9QtaNvCsJdxkSoLS6gLqaqQJwP4S",
  "key37": "aEtwkApBWStH8yMESF3KswP8o8LsHQbEoLFqbdVL4AGsJxhNFpc4tsTAdpicu16yFzKjigjE6X8McansyUMTeU4",
  "key38": "VnX7xpXMq9ZyqXmJmCmLAyFs7YS7iUwnxMxbV4tZnfnPN9zRFR7Q3qb9VGFbphRwQYeFc2RdNhznCzGEzn1AnGi",
  "key39": "4uvowuWXGybMT5Ss2EYXUzbYHbNKgJm52ixjaFkGY3qW7xBnQRHX45MTVtmuqiAH88w98gnbruYwJaYQWH6Jq1Yd",
  "key40": "4QequgXDHY5f3RzpBKEEcTphjzUoy4dmRoa6PYLF8BhemKKVCHRxwfFjFposRYWwdVrrAcHqGvzh9Gw9SXQSF5cd",
  "key41": "2yJ1aSpkTD3jxZLaJFenTgM1FgkhtG8d81faEjm9vEew5tkU7qyp9mZd9C3ArvkzNZi5msjVv2QyJsRtBt1TbPyk",
  "key42": "4nkVXr5cMw6jp77L6k4LvU7MyKb3zMVnywuKZCAhoRcxzv3Z3iqddFbZRLBSqqu82oDix4cPQZ1yvtziDuGFqXyc",
  "key43": "2tsXTpnqdTtE13jUVGjZ4xoveZTwN1gG12h9j4rjTYMWm6qPBGWSTJRqD6MZAa7XxHvK1EffAYb5mKf76XgYrmTp",
  "key44": "3tmFUTu5SFmj2ALxdkTKNbW6UfdRyAhJDwnFTrFD5TMUDckXjFu26XVs1Sco6Huou3kN4JDupGeMyZx4CquLmEyq",
  "key45": "2Yx2cuMPK6vkoj5NN4hA2QAtmW6iZyeGofAfGHdqEc44GVfWux4WSgNC3LdekJDpmF7ucJrU7bqG6xrtR7Cm8m6F"
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
