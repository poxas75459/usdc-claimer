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
    "45rw8pfYe2ND46Cr6srLfnRZcx7h5Ma96fFPAzytK1rn8uuJXhLPpZ9SKonbodrLhm9fwe5ChEPa4rAnBPrxm6C9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tWp5KvYBmhZs1MCbJLrRvQTsj7GjTpVzduTgDdajQft58YWf5akuyvtTFn3wX5rXox5AxX1PYZTPfzuW4G9eFzt",
  "key1": "2chidQafNocK6b9MhrJfmsbVwQer7B1igqWuqszuhfPc3oUgfGtd9ZYrNYLxw9MbQrnpQFqmcKbijpZK1mirUTyQ",
  "key2": "5H7x62cnj3hSToNdHEeYrhRgQ9RdemWcgwSFnZQwMkovTMbfyFBSS5enfPXUrL3FCh9R1YUtHMqddMtgvqGHUjJ1",
  "key3": "5wm63a3EXbdq9BQughpAxnE5dqTDoiJMdePSuvnxLngJRxvxrRLTEtMBB3qpT5YXwS2k5jWrNn6SZLY1gzKpWAQ9",
  "key4": "5xdv7doqLHZwDR4S1eQkXmjzoZ4bJP8wEzATQa31Aa576DkiJ5E5G8E2qmwBtRmbUKLHn175uVQQMjuYzyMiRw7T",
  "key5": "3QFeYUnFKYHC8ihpogxpY8TsVZQwu4HcDBkB1fCykkDMKughq4tvhXSEjqE5FFFzmbRUBTSULhsG92WbR6FHP6Va",
  "key6": "5haLikwoY3czcQZEahN2H672b59iHc9LQPsGCYBswBhfmXVMhgekjo8FruvC9xw7n71GsFFyCJSqupYhsjUDqTwE",
  "key7": "4mzM9584azYmRcgtdLKKF5Ehc37s3Dh6XiYSjetQPTM4tZ1aFwdsQskaj4EQxK1RWAwtiDwXA9Lyec6tocb34G24",
  "key8": "3usJPaoTK7aibf4Gd9FVrj6teo2J5YETeLxoPR6BWnAaW2UqTnP3vdLdur9MbymbNSpYekNkXRCcxEVKWYntPi6g",
  "key9": "5EyuvyVpiVygPiwPeFDfcsq3kGpjnXZ5S3GCsnoGZox4CSPQGh7C5EAQJ4emxLD77jy8ZyEQUNwfFtgwGKf8TZxN",
  "key10": "5vmEdMMNq2cgvQ6yZk6QQxEHWSXksmSuymJ6DeVcoGLxwL27ja1os1PQhDK1t3gmkZNRqTNnDvuPPN95CQEg2Gcc",
  "key11": "5J38gfaQsNAxaSGLSf9U62mTatiYP96fNojM9fBtHyT3KZ7LGVkGPRNfABHTPUwTdsYZ8Jb5AxkoWP9pa2AKYFAM",
  "key12": "4QvWhXbK7AiqHSw5ekf1jdkz1Zsjq4UcZV187nDG6YWZzVEL3p9VaoYw52H7Eq59KCPMjxf3j6mhRfF8P1TrL1zm",
  "key13": "56bHMEUzspBuSHcX8AUnTfPakrta5MvTbtFaJGBRYy7Hgd82aXQNMb3j6GRhsPsth2v7mJv86HAUBBcqoMPxEo7m",
  "key14": "uE7VAyV5R2cx6Rr8shFirTSDkGT7inDguUb1wbCbYbtjHwEZ1QkHkhHDiCe5Brmffx3ptzWxDBWM3XHk6G6z5GL",
  "key15": "3DKd6hinHK3A3hQC3veu37ULp63HaNrndYrXkfzCVoypQzNaM3ojVTQYpszFBtcE3Kvkp8JHmDDdbSEoC4nU5Zar",
  "key16": "67kspZhhaUZg9ibSEaW6jLG2geFWh5CWzWDHdQyi8Gnfh8T8UAKHXYzSvPsBbos5FcRfRNMJicjC7uPsBLMuYhCn",
  "key17": "3FBqaHsfGLYfBWtXSNviywzX7GZGUzDAtuKwbYQ2kxXJYobENrQXkSa7VY1A9BkhmamMNtEhs2nbZLfgnnWgW1sn",
  "key18": "3qRshf5hibJ5J3Ah9h187k3nF9kPaxZwAvX3iaG5Zei5RQusbs1m7GTncgFp9ZbNHSJtNDwrUVxomYSYqjE3meV6",
  "key19": "LAKKhdqSf5gKqQ4e8scLhCFERo568Dh3grEUnCTKsGRmG2vBSJ7EgQrwAxbkGPsRwrfDXGzKTh1WPYmdfr4FLd3",
  "key20": "34ajercEbDAaGubZznvQrpJMEdjtYmK8Pt7WEsExUAbebA3jE6QMeHU9t8N33BGULoMBDEoGTnvSYSe2cuRnkbA",
  "key21": "vB5Lu1RDwJDqFA6rDC7zMFyZrKcRcerpV4xy7Yc2LQooHWCzF19MG9LQewhsvhMRbwppGc1V2bh7KD4wJesSsNr",
  "key22": "3odzxfg4hXjc7jqGvpt3hg511bsDHDL5ozKt348XA4xcopXwykcEHdUiJ8gQsqMHGdJm1jJ3m9TKRAHZ4qr1n9QL",
  "key23": "yspMUzv8SmNEu1SP5oWcSEBaajkqyiah7PgwEmPUYRPGHAN7fboku6fdUEVuY2925imQRAp6rrWCyUDULxp1Zkr",
  "key24": "4TwE3XurErgbKATcVifwW84XLpqWpY1mAZc2wQd7LmJDnY8CHpsJA8jnTTnwgna79qzq5qGFDzzrhs6JzRpQtNyg",
  "key25": "3mbbqRqELRctptEfBM82b1zZzEQRThtYUQaG2RTWEbWoy68jvAAdQMK53RBxoDtCAyjh2SC2FDXoird7M467rF6",
  "key26": "37ptnrwTaJL2bMDpuf8PAuYo9QhESnNRPUxVNy6GTMJsQUtnauKEEAmB8oKeFrCMJyNs91wMjdGoZaCf5G2Kb5EW",
  "key27": "M73WsDfzNModyEE76CStVVXvgDjJarroY6tZnH9mRDvyEJnujbiNbmPGRSi9r4Juax5EMnGk9BcHKBMSX3q5EWo",
  "key28": "5UGpQWkHreCD4vVXqQKhakCwvumB58A9B4PgTKbagYZQ88PYdRyrD1aKKBEYYMzzLS8ADZkWvLGWhfHGMYhgb66C",
  "key29": "2LoCqDjz94kQz7WQosFz9QuHGf5WGCbKh6MAGmEEtq3sFEr8sNTctySwgWC5UCMPFprYYJvzgA9z1KPE7J8f3QoD",
  "key30": "2njPGUzYKtDV3iUGz7a1V6Pk72EXhKBnch7Cqic9ZyfEQ7DUbQrTvRLJAfg6NUBCXHSaRL3ansB7H7ZLsKLvKDKE",
  "key31": "3D3okXu6gv3twkaUKe2w4CUtFDuo16ypk89gq4yWeTuN64ixwXuh63BFcJrzd3oomW7BvTMMPSHmWJvKg4rvZj34"
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
