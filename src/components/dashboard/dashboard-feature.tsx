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
    "5NQ5VviSkjvnw2gAALvWcHS2TuMVzMeMbcYsMgQTc8EXaKNysZgHTVLAkxdin6Y5m8KgBEUj7CTacMq3g8yGPogj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WFz998vCQsmFee1142FcLsAR48dQd7iuC9a6TQ4CyCncbB59LWSvxW2Sadjbrbx5H77rumu7axs1LtCTcFqVKje",
  "key1": "WwtxA6KUxdkLr75fxrmXi8uHVBUaFfnCLqZgxpqMEcCc92pR7J5zH5QxDNSb7LU4qEfhwG443FHKBv1oyW6jyh4",
  "key2": "2Y5zDUkcvt3Ei3vZcvKkDSxwifVtQaCwTCkxUwWLwnDVSCG262Qf47vtrUxapeRBUjYCho3191TCH42FCJcusX8V",
  "key3": "4p2L25TN5H2fFhDamxntgu43BSR529fbosSPLJorpqJ2XnEm5fbuTUUis2AohwPscarEjjucPKKnGzkV7SB7DyeQ",
  "key4": "5EMfXodXEkU7HbeAf4S2bGFUfQ5z3e66wMmW5w65hif883FhE4YcVnpFdRswaZotZ7Z2RDSGvBuhyrQbkT3TRgjY",
  "key5": "2pY2qXp7bqvFtUHgvEkVyGgXQJpBjX2NQ8BaDayDpaw25ZMuAoy8bddahGg49qwuprVM2mHZQENAQjMAzRFpgtxp",
  "key6": "4kLvPJUtkVmKYdAZSotfXiwky5zpiGoxEwgh5d8vP3K4f37dpFXxD8yqKrt9HJ3okbWMnqTf4eu362EUQDAjQxYV",
  "key7": "44ngs1LFDuLx9jz5TFmRjY817toaQVE67SrZqTy99ANstEqwtEpwmCjoFgPRKXjcSBGUYL3qGJ6cuEKv4xBQtjSz",
  "key8": "4QhoXjnnb1ZQsiWqxDBeG41g8huQkz2quHFpY45zTN3MeDMGg63wdRzVsc5Dvzw8BtxYvnpoeaV9SZ3bKMgXLvMT",
  "key9": "3n4vjyUAHbwBiXLH1yvBsJwjNSbEwVSFcHZ8AZytNroHzCCjsMNK7HdtHDL7tN9yNG1uCfzbnGhBjZGjYVGvT6Jp",
  "key10": "mRoQpnQvSFWRXKTwsTDc5Q8UZZ5q3Ekrrrx3so5CkUeuvBpBZQsBejXMqcoJmAg5TP3a1uMiw7AbiPjQt8uANtq",
  "key11": "4rCshStLUkhswEenwjhwh35R1qAeff45Uc45BB6ycYhtN4buWyzpiCsdF3FeU3AsVxVk3qsG5gBwjReT37sVr9JV",
  "key12": "5WXjRtf5NSnhspAKMZpqsKcyu6HTUjtHYzoEEKUe87MDPk8RvCGqu8W5YJfT5Xt9KJjuLZCoUyRAfsPvT8BjLQVe",
  "key13": "4EAqhPXx7Ka7NtJtruwokTMFQW33H3FjSjN2m1ncq9R47WMrzVEPKU5m31rPBCERLcpYtDPoahaDDFYc1EgaEAJ4",
  "key14": "67r9NYmGMm2AvviAoLA2FN8aiBv8AuK9QGNCAycwnWHtbBNXHfXkdQqf7yfqMPZZFh84vyTKBjwXviREkcwQKTgt",
  "key15": "5PQPFDfVfLWjAuohjEaFVEHn1i7CcaY6iAi2yVj9CK2zRbzgDnTJkdWzctoe37bYsQNVQiLQRbtF3XxcCWN9Ssvm",
  "key16": "bTRD9JgceyKFps6VKb5y3YMdL4u2afyR89726kZ37tddLdR8QwEfjjaQ7HtqTnMKjxSBfdepPRoWAa6GvgRBvqq",
  "key17": "2hckn44Q9HoK3U26Xa6Ro7aHQ87gr3fEVNcqzXRobJLz5sSCmRERhFrZpjfNtGRP4FXXwkrLZ7X1Bq9YJhphSGCZ",
  "key18": "46oxrZdkrNpUzkZWZ9EczmgKDRbVYEFpfnnuveZz76BKxQhSemNvm2w2c4wVSXJYHLXqLBkM4hPMDBru2q9BVkTm",
  "key19": "5veVhKV7aki6e3jUsKB8x23m4ZwAPvzJfJAcry5c2NzXychQNKpLhBVxSgkyfwt1NpnJvpmbmMEjfaPgNCUKHrh6",
  "key20": "3WoCVsxqFFY3BisKvd1jiZ47Pn8LXNLTceMCepp93v82jqQaFpBXPZbhwg8w7bPCyN47XBK1hQ7wCgowEx8kUf3k",
  "key21": "36sGEm5Y8gfqHaoibLCQmUP32vQoFz2sMBA2Y4xCAGB5SXHq7UjZxJup1U31ZjpsxwJBVz5StCCjETFYutW7wSa",
  "key22": "NeK1Bn3k2dDJzbeeLM9CPMYz1M64fXhc4HHcBKF8wSt264vLadHy5pqVRHCjrC2HQBtgiVhLiBSYtcPRtzwUHu3",
  "key23": "4wdpWkLScLdoay3ApxJtwETcTWHQx2Xyywv7ewoiMrfy6EntGmwrxpVr8tyUfFU9ediXwRg72SxhQsEdE5E9G25M",
  "key24": "43a15XnEsPf2xDUpkCx65urdSFnJKCBJY8X5gCnLxym23m6kpt3urj5dE9HJ8UWH6gYTuNvUsoMMz9cY3eLQoZd9",
  "key25": "65jBgPL5z9uUFFT9nzZJZHHHXyoQY5wkfuLtWP1ouShsKLydJJC3oUmVREw3M1RwhpLcJQtL2oykgap668VSsAux",
  "key26": "4S1ZcYi2nFpxL1u4VHD7oB4wBXgnjM1jsa1ZhjedAbjQoV3EHp9irQHjm3mMY6ezxySLUtNrFGKSUtEo82XYCoSz",
  "key27": "rCQf9KwzZU47ZxcTfcbtHpt4RayVPJzuRAG56iPftErLEvHunQKNLjbjF7M4ZbPexorMYXXwdWgNyujDfLVEhiH",
  "key28": "3oNiKUwysTw7A7Q49RZmsPBZFTY8E56qnZWPB1SfoztQPuR7gkxZoPaCrR3PJv6VBCF7Lj7VbEJZcKGF6BwEmJUW",
  "key29": "3ck7UFBvN1UzBFzDKmtV5a1tZQeQrvZcDmdJrzWqKuFc4EdYA1x72WvkhenhPmmssk4dL9LaYzvkkijkRfvbvsiQ",
  "key30": "Dv5c8UAVH5hZfDvWKMWfFjtp6eyToFJe7wu5BLsxqY1aqBQDjQpaMioDtdwTdKTmQsxeoYyWdmLosVuCE2tsCFG",
  "key31": "4SrPfMXnhgfWa4zcrQFCkCkzSYTiSbZq8zf1bU5HhsgU28PgEDmPLGzJKsoE5Qepyp9y63P3FERdvUG4gyao3Q9u",
  "key32": "62sTYJJTEDtrVznHaQodvbxnMEJ2hwM7v4bSvDgNsZ7R2b5NKzRiUHRcj7DShpZ9rCk4Mq1vxUKLcJBLYBAqoAWY",
  "key33": "31Bv1seFmzt99KXGRWjh4t6pN3qxfeqZ6Y2NXFs41vLJTy5osU58yJyFea8pZTeUkY7eBqimiLubD2jRWMCgEmch",
  "key34": "tciq2Lg1vZtMoYYLKSLW2ejujgAKgshxWzCM72C1osdELck1QbJoqGsEF5Dtpndpct5vFEaRp99xDYjDweX8S1u",
  "key35": "43SKjba1Z6UP3p8N8Ki15f61ZQpnGmE8VSiD9ahWVZvzT2Eqi5CRzDrKwSZrsDWB9HXu2f5YkTKWJVsaafvNy489",
  "key36": "5JvdENcUF8Fgb19yZb7dUHj9DW82sCydASV7jenzJfAtvsg4ino4gPYHBmMXqf1L9C2vFzcn2HmMNaT89sQjPugj",
  "key37": "2vbvRMS8wqWtgewtcZwMEDJePx9rptp7xYeXfQPWVYs5RWZmmEuuBa49y6scrDqj7Keu8BiTUMX1kxSio2aJcSKq",
  "key38": "64ePW31scRVhAasjep4G4F9yoXscVhumDjroidTEJZxbqK6qRV8AyRFiUjUcwH2B1kguHoM7dhp46VcD4g7ubzZv",
  "key39": "3KLW2DyNApHCM1inucFt46AeERvLwXLVeKg1B4u66zHByemipPwivBT6fCBu8zgqCeTehi7UNsiVV7M5e1ebD4sk",
  "key40": "4qSb25YLrPWdrv2HbLcv1wSNKJtyxuZoS3zpxuuStsvtetKyPBDq9YgRuQgLjaR71xX1f41KVm19Ddh6DbbmMb3p",
  "key41": "5pZHzfH4fcDcuVcz5qmsi9UFo2qt8xPdGSwZ51vtRBuk9Yac5Re4XGJJnYnie232pfHjp27pCQXkp2P4iwBS13tV",
  "key42": "2bxJsCu2Hg7qUriK6RtDvgZNmuHJ36AhbJEkhhq253CtHs2zJdp83vTfRUbCx9gfa48BnjdRo6J7FaT56CTMKc4c",
  "key43": "5gfUrHsfcVMncrKUR57TcvDwnPAhXSszUJJYTbSwqdZd8S2zqt4kjxFssFRpmsST4Hpge9qPknDMqeWwr7wMJ1sq",
  "key44": "3yEuYfVCVNhGs49QVK5Bvcp3TAT7r6QogCJr9v3YLiZrjhVFXt8RYpqYjF7Fa8VDa4ErvLjJUagjQktQN3KV5yzM",
  "key45": "5DkZ6SBbapPDkYxgaFgNiKyfjUhSSJS1jPqPLrjnUnddTPa1rm8Uq4ASDd2B11FHCZ2t6yNbJkaPX3cvq1B51ckE",
  "key46": "482EBJayou2XzSZVVVDPTEadjdYww4W4SGaJy6q4ywRtZMavQQ5KKL7SvMi9VLS9ngsrWxa5ksCYcs76Kqpms7mJ"
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
