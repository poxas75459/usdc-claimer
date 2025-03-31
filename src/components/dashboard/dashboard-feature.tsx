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
    "3LHGW4xyeEnWr5JjgKRYgYvvHG9n5TMYSuPxyBG9TMoSj7uaibp5vGoSUvauxh3gFz4TUThWeueoLPY59fvKyxx9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Bi2FNyN851P8YD8Sr5fv5mXrn5nDfmr9BjMjanET4uwvrKPB4eXyC4R1Y2rxF2qhiw1JuiorotgxrT5XiFPu3Ni",
  "key1": "25aKFgm5YfdazUQtdLg2qgntbiVNG3KpL8zLF28H6AQTwYg72HijKMLyPGHUroCgBhN4cf2uMppRx1y5VFQqzC76",
  "key2": "2rF6hwxd3wjXYmhfYjXvjfPQpfNxxrs6FfCN6TykYuFgFSoH9fiipUwzjHUVzJ5hjvLQAzWUKkRm5QvpnP1Tck9T",
  "key3": "rmaVxJNbKg2WHDTbkg8aCeA2JhjxoYPUS4oyWiUYsfSp5P3jxUQ8uDpxXdoz1YH3kcdH38NZNUiRUR8zxVB6asr",
  "key4": "48ENZ8iThF6Jsq2wpJLmTVHUTMWLEyudphuLmHwXmdoprNfmtdW2NMB427PZbkUEqLTUpArCHUeKcr6EpRZEuCvj",
  "key5": "42M8NSf2c9fUFT8Yp4q8GfoKhnPAf2QMSHquCLiXhWSxkLcDvU455iYYQwcZxpJj5CVz3JEmrDPTYfuj8TdGpL4D",
  "key6": "5w87tKwGk6c4Q1MdXTNgCqPBo6x2XZJWfz8hihyk7uF1xZ8LmgTFFeHhhQrUbQYTS68Pc8sVa9GEXd12nVkknrya",
  "key7": "5SZLYBu2HYgUa2ZzcjxqVhqHvEcYGrRUWtLjwgQaSGFsE1yJkpnHEj7N8yDinF6HnRjKpbzoBTWBcayN466HZ5d9",
  "key8": "5yvaqJUFxicqAahJDir5xyxStCR4X8147XS8pbCbGMuex8b9TtwWHqY9UUE911RagmYVnWL37thN3Ubo7cotAfBv",
  "key9": "2r1NmTnwfhYZvpnaGzg6MSEL9VkikhAjHfHnimZ97J3QEatMTHz27BsPrbY5cvnQv7CbS8bjRhmv3bvjB9K5cJwZ",
  "key10": "2dcvfgdBFyGCqGkTZkKhJpio9u8Zzxv4DcKmuArMFaV1MRUEtnwigwwpNoTUyb1asrFuGvQDfQxTPwAViuXSePRc",
  "key11": "5C7VkkDYZ9m5cXxR8wziGLweEWLJb4DnMrxgrBvm3hZx9RMMHh6jgADMcswVoLT3aviKsFgciCMo9UwtCPM3TAjQ",
  "key12": "5J1dsxxmUeCQQigwDeApVu4ejpnemXySV5mok8mPFw5cD9LgtV5gBvc3HyHnUaiW71VhsQ5kQdyaVvieuk8aStob",
  "key13": "2UfFUhj994y92jfVGdRqgCnRUYrh2NVWaoBE35GXPe1YFrdA5daHpU3CMSCEQ65pnYQAuFsJDd6w4C3AM25PXxuc",
  "key14": "4JejcP65vKau3TX62vpFnzCqqNj8k6CESxtRWmSX6fiBYKi1b9CQrirBnareJXbQ61n16G2XMG1dE6WMiDh4A856",
  "key15": "3zTYya2yrW7rjtcMyzDZ1uHrXuSAJMKdCur9Qtxny2pddAH2N8rEHX6buEf8Hav4ievssKFth7rELN962RHb2KVc",
  "key16": "4u2MFrDkyJrBxBBM7gBLqFk8uNZky6zpBwtNHnw9yZ3YYnyEuASp6b8ptgSHpt8TvYvQZ1m7sWCogJyvMWs8c9Cu",
  "key17": "4xGCUe44V68z6H244uNq6N2xA9EGr7cVqk9tpjgxn9c4ET88jmXWpub6uPBPxyiheTKVCy6YJhMRWgqJz8nUpwuu",
  "key18": "2gkvb8QHD4A8QDx8wn4q3KBFgzuRFhUaqPWe1LnBCaDKsj9A4bq13uGa4Tu6vCSvF2YXjRjynGNjnN2WDy4m5PLd",
  "key19": "5V1v4pReAshQRBs6WCEXdW8wH3orQt6b6dbPueVPDxM8LPRjKmijfy6BLKHMP6wpuaHjud3wKidf3seiTxaxXTN7",
  "key20": "4RxxC6twDkhYEEZXkwgJXN3Jh9aGfY7dUnE4hscgqbqTa5eL6unQhXvXdGFfuwtKCQwBheS8ZBvnXxDZZW7Fvume",
  "key21": "5TmVUuyrtLM6ipkTRtdCrRfL1JXJusCVXFCv3YR91CqhhiEKv646y9TXFQMomZQYg4tbcoMekugiShhKJSg8Tq6X",
  "key22": "3VVedZf2az5cs7mSgP5JXDAz5xPPiMyQp6fbDymvA5hF9Xn6MkprRr3oUbgx5rVcU5WT98G2NNJ3QLJBmGrRk8uo",
  "key23": "5Z3ZmeVsWCjKWmAYQnzBsqGmPyivXZiBoZaM3KbPgebxFSeuy8GoP4uj8Ey3KQ7Raq49cMLTa1mzfvbBxA1m15A3",
  "key24": "5NZRDMRxR9BVKD4PDPqnXKmCq5hyVVW2SAWou42WW7wtZtBtTsZNJxursxHKXG1yDQ3KYkLrB3d6tBeaDbS9uq74",
  "key25": "59Yq6yEwkTssZKwFAfRebHpyR9iG9bGMe7ykKjsG6Xq5UL1arkP3AN5DysFN18q7fUH4UXbFsTCnVLJv9egqQg1f",
  "key26": "2a6rJhg7YFz1ewmTWAQsQUcF6KAtymz2Yx1JUN8BRAKhArrHRWbG5b2nnVtYsW5GQk9512bAJN9MF31hn6dkakJM",
  "key27": "5jhiM8jEeQSGvYzKCkNGKQKZueSsKTN4pkUtHd2tCvtkkh4f8mioerCntCh76Tvd46VbjtAEpVQFeRRQXmgdYjMs",
  "key28": "5HQiHCHzgDvDmpmzijJeyTaxzwMQXBKq1biX4uNikPMtotvP8yhv5NU8Ymo498LLPyN9TX6bKvKe1sW31fMJ93Tg",
  "key29": "4uRrbuWt9CL3vAYCwWWRZe6XNwuF55Zrg8vQPv2VdrZX9g2k89nGkNi1puTomYAQgDL41neBgU6NsryjjAqT847w",
  "key30": "2v2NQhGPAN2g2FHWjLjsCqC56qhpbELu88kpZ4whW7tq4iNA7475KoYx1Bba4FpRB2qESY8zjWnhDb5qdGe12TVk"
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
