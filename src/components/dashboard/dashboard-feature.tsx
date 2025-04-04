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
    "5pvrSFQYXVqai1JFya7KW4UoWXgkX5erjdsn9kbHEc4y74D3vEQFCPRQVWoS9vvcak8ef4dvSwSv6ip4U8JWiAhF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o371MW1ryZAGumduUYusG1zwHfDFegLn7nH5i4CjfzSmYhzr7hHJF1DtwPfkWLmG9mNnew1YV1dLQ22EnzS3fUS",
  "key1": "4PpiPLKqphRkr2ES7AKTSidDQQZkm9G9TtwQHbd2V4dzc1RfBgdjSfvyYuWg9bzvYA81vbXVVnuUpE2KUmRxjefn",
  "key2": "5V8EUioc8jFLqeMPBzMzzK4V7jmxdCwfdmhLdUmeTfHyKeV1GDpsZrrLmmEAr7WKTrHybtTajh5BMoECEp3FpiCH",
  "key3": "2TiiMWadUS2qNGHPxHKuLReouQyAEHpSPLj7stu19Gv2KcDibZjHmJ9qxYDFnZCtPwxvdj48xMTgxSLcB1Fi7fTy",
  "key4": "qFf1BbhziTDQr8TdVVdsewfMzYeWXnB4RdCW2cxWxZLHNQd98s4keUD4JH1onsnF6BXfZrXCoYPR9QKriE4my8B",
  "key5": "5gJaELczozmbrytL7D1xHjSono8RvSSa8rbLr3MYzbJUADJq54ok3t6hBUs8Pi6uttboQ2tEB5KFoWpbAaZMzKh4",
  "key6": "5gLHn15CGRdx7HZ34ERFrnjPdGaWzQP122Z2HpJqzaX5YfjvUzv9brh1GKV8sPTxWbfCGtRVmbkCzqfbaPXq6diY",
  "key7": "33to5yUviJXAK8Mpr8erehRcmnmSAyW7K1hENFwNVQmZqnCLqWJurJCsyX7TmeNdAX1f5ote7B2CyCMhHiYZmt8K",
  "key8": "5UG29JFTVZLoMnJs4MwXs9TdWeJNibmoXjCdLReNchS7xRp9jkEbDvksJEJux5Zu98KQBLDgiwAGkgiBzMrWsafz",
  "key9": "47BgouP5wxMrKVuq9SJpp399fYhsjf4vDGsCSPthyeZ5Ff6qNkirHaAY3mwm1FhrKxUU9SReBvDe4ZWzE6ybZtVL",
  "key10": "5UR86YhZmcsSrLQMnKrAeweQAXSgTCtvxk4MKK6RXyEdvaUQNEUX2181reQHqhK9ZdUM9qV5KJQBHVh6D266unHE",
  "key11": "2cY8t7bcUVCqUxHE8zX8aT4MtTu8pchNiqoo8pt8Yvfoh4Bd114uKXwg6yjPivHwsq6VopH2VELUdhUJYhRvFMrX",
  "key12": "2e5U34TJRHc3CQzVfDyT5FYiDfedRRH4RWfcTQpCfUyZQiCrsLtLk9F5CSQC4McZZtBDrYZJtXwq4mhpjT2nFVPz",
  "key13": "4yEaW3WVyxGxn2pCHmFPRYWb7VoZ65hx1MvUqFsJRiyJw8h6cAvhUFAEKutQcDt35jc27zJLKm3XC4Q6PwBihh4s",
  "key14": "3D1mS7QuTzUqPMLY9iQ1xXmrT5teqKPzjXd5i4AfnhfsKoXz2NY3HGX5RE6AMUoJtSEEaGWJ3hmaAV9hBCYSKiv7",
  "key15": "4i51cMK5WDepxmBGZhEDKKbfpg7J5gFs1QAYrreSFvycyHdXo8AFwDTgKAXNsekkPoco5dEkAFxwHPrYz5f6tLjf",
  "key16": "5WUqdGov68qby449pRT9WSsPHqWm4CPedb3VQtcPPyB7kSk6vkoQby1G3o185hSvdxnM53XQSaAZQWNUJoSgKe8a",
  "key17": "3izw3Ey6gSvi37kGPt8JfLY1gzWcFWu7rZsdvh2VnYTpt32besAhk6uKbVmWD6mhe8eBCz5d8Q9Tmamo8YeaPEW6",
  "key18": "28UCrKSJN7fT9cmncmLXpKn7jxnpWnBT6AYToVihuVtGv52P8NtNHbMxwgecZYB5tMrYbbUHWU6tmAvZ416dBrD5",
  "key19": "3eCkPmH6PuwFgXRbYjztGFSnvnBWqQkg5gpn5cKYSTiSyCuweJxSkxA4fzLBfFNGMdkUHCPpxBqz56vsQaTGnAUV",
  "key20": "EQ6mhCxs2LdJcDPWk7uKjVdboYgcNjQoBCqGMSNUZoXKdKkj3QkyMvNPdXeQ69Y7siEQyQCyet5M4w9mAZdKQLo",
  "key21": "2K3mHZMHx7J5q3v8FbRerMxJrkK7ZaQa3UC2rPPK4VXw8rnCp1Qfh4LAjJNWQHwRKA9jKbbtm2xu5qhigVcQqLkV",
  "key22": "3QBsNPNAVj1pzy65cnQ2rM7ZdMeBw2Bx245rnebLc6hCxJyEVzxAhQ1dTdJKNvyhPDeMq7Kycstk52GwsJHmmzBn",
  "key23": "3QFUMkv4gmq21pW8ZPkLWJe2JnZBUoBNYviQLmThvFTvVchw2Eg2NwFJQcDKUNRYP7aVLN6KLeQyPperG6WuiSzo",
  "key24": "5YnbgStYC5KH5jToiKDC1Ps3fj2o6r95tjcrvnQ3AbmQmoC3WxjAwNn7LLHKfFPzqLvJJab6Dwj641VXyD1bQqfq",
  "key25": "2dwurhd4Z6iJJdCRDYQ6aQ46L9ryK94PtbL53P45ThW27mXjzSQaU3ES6AAZJ97BRUg1Lx9MNRHx6i6t1mfB3QUF",
  "key26": "d3DE1cQQiSgk9ABskog1Tn9QB54ntGMhd53KAS15oBC5N372Jnxwwz4v95DBzb7Tj8gx4FXh62r43QStZeQLX5Y",
  "key27": "aBjHZrL2XtNqM87JwnWzKTsw8Ko8gf7f8PWKHVJH6fM5X88BXHCDVCNq6Q3oT2xqs4iMwAxryx44hBc8f9BPKtx",
  "key28": "2d4igxHfrXucvzh16AqNVh4RAPTsRFitKcqiN8uLgZfn1AHJ66WTy6mDTBfBSsYL714jN4VakVAD8sacRXkqJEbU",
  "key29": "43CAAQjWLQDuApBJDuKwLvHF82mHvQQj8Xb8Sv95VbAcnQWLDZVcxNhRzMo7MtSv6uR99KbUAw1tdvFVQeC247Et",
  "key30": "3YHcz1Wj9Zgxv2cjMHjozSZKzuogGuyvcL2SLqRKCHw5vNA1KosTccqfpswFsxYZSXGH69PpFx9HRryMCH9EWWHh",
  "key31": "4paV2rJN4wqWZXRTCN4WsG8TZqtkDJqaAmf1UwTvnBGMnhpuNXinWZpaB8G8b74BT9CkxTczUqre1mwvwdAt1LUA",
  "key32": "3cbP8kUgCM6TpuJKhLkkkkXPPBm297LGBjfRgDjAcfQT4UPEUBeG8svSRPuk7M6GbgCfhZiFMeXWvfK1CY22ezZE",
  "key33": "4huratmNYx6kbdXriWj1R4XZcs8LWU2NHaJgH3pzXNsWs1t22fRczgoXM4uT7TaQVx91HbyBTH9Vw1BMApQc74To",
  "key34": "4X5wfAAzFqJT8ZPjShKSCN1vmeqiDPJHHVFZMrSujQVjgxJFf2WkEc5KksrrxjoX1LuUThxL82csSjxpyrSc5GDg"
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
