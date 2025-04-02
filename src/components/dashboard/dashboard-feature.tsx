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
    "5gGmcoJzVVor5vWwfqWomafPX2LFuG8fKXkmjmMh67UsajBqhFkbgFjTASqDE5tvykgNL85cXV7bqa9f6sWgzFyA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gFTR5ZMRxdinUq4wk53v5hQ8TFmRvP9ZNACQcRhKrfykcnKxhZQvcqDDV6g4Qz3aV8jbKfsEHdRdRgZLL3zfeYM",
  "key1": "2ZWPySjjMjkwdUrHkSCqx1FxuPpocS7sGwzKh8phUSYBhATW2pqQAPVWQST2DiGM36Dvxxag3RZdyxfJxYpyRAqW",
  "key2": "395VYiTgr7fncHCVKdFfbz3ceTj4bzHSkTgrHVB1aaf1UiEWgBre36M3MQ68isdonBXJ2tbUBV6Pu3KHkbNwkMBy",
  "key3": "548XAJp7PvBCVaecXbXe4hD2NXXHRxJWdsXs8kUpwAoCMQiB6p61zfyVf68MjyfMmDGLGRixR6sGT4VTFvSZtWoC",
  "key4": "3GzjDg8PaCQgGu9FpbbYFAhsKpARfe2yBRuM2bWzaoR74KkkifCsYdrGWgyzQ173bXwJBHV8ZdPZMZ7BbEpvX2cX",
  "key5": "4wLdB4ag5zVzkmkPCj1PaMFgP9YBSJGKhnpgBby7jCXJgEsxFTBdHHhnqPq8TnhWxkWxZKJUYTRiykTBDcg8fXAW",
  "key6": "26oehtPGPyRNLUa6W7X3KYsu2QC5u9yFUer5Ju44i4Cc77kPspA5PFm38aMY2th4KUWxRiNqiXscVj5r98sKWK1K",
  "key7": "2MxnGU2jyy3jAbiVSXRs1SgPU76V6jfzBTbEJsjiRv2DPNZwBJJYk6GHfGseKDwAqXmXdvjfM6FMS3bVHTfS4uZi",
  "key8": "54SP1nnBZxfDRED2yL2eEPPfwz9eZfWLSkJKME5uN8pxC6jUg2T54W8F7w7CZ8n4xeaf2ztj4eaFfxE2XbgB9kYc",
  "key9": "3yLowsELYXKfcYpDvxFfMkJEqqdirJSLfqFkfy1bUW29zXULAY6JcugyoevPoEhtEHnbMfHqwd2xbTmnFZR1zTfE",
  "key10": "4tRBGYU2cQQCnUABSYxYJgwHMNhtVyTxMPM6rbtQfrEZf7FQfCJkCJhTNxLHMj53nw4rwY9Xu5VkJzLr2GKMHSkj",
  "key11": "4ETpyos2zkngfLvMgz1vy5JnXqACTY7TvpWAVeuNE4cDHaCbEPYoeyWmxwtA4jiEdgnnYpCW8Emqcedysxm8jKRd",
  "key12": "3ck4KzSoCaLHTcB2Yf3PWx9bQTzcdfTdCNC954i95ZZ42wGo5WZsMQZkUMhviBD1uGa78ai7eViLVHX6dsDhkre8",
  "key13": "kq8u4nRVmQRNB5phdnmaZWvLeJdhY6uA8K4CfqW8TGxKVPWYz613ciDRavbMGvfeuqDS95YP9itcXfSo5UbFhRQ",
  "key14": "3nBhcP8RXnM4RQSt1mhG6Yk9h4eU1nUS8fqERWvEFhKQFHCfQJNgVwZAGRMx6Nz2kVu5woBBoWCbX18LyvtBx7wi",
  "key15": "uCkneMZSnhM8pKjDBDTvPGzhtDzDN57shXy8jZ1T4dQq6Gy98KBCywQwyVGzdMpa5us8248pCYNxdsTWkzVTMHG",
  "key16": "qbojP4jRp4MYoPj4jtiiwmwbdPF75s5WCY94EpYqpJGWtYcwhAQCNYXTPawHauZNt7b6Sm5yNP6Pj7dksxTe6vH",
  "key17": "2fin8dqaWfB5tkzFfsdJDz752ykAwttWZZx3PCxs4U3ntFrD4LB8HRfnuvJpwK3nhi5R6WQY1WpVHqjpDjYrhJ7t",
  "key18": "4UqNJFLRe2SdUZZqy6XVWNwf5RzqrUWwn5wXvgwwz8j7fiN8KNMPyWkZuTbvFmgnnJkvTuJfzCWLDc8auMena8oT",
  "key19": "43JsXHsoEFrWFNQJGHYjrMibjv1yPsmiKKArq2Qkxaq7WgabSaJndMFoA4xDpNQbYFJ9YEgz1CqLyUvrDfWPjkVM",
  "key20": "4gZkqsqsWanq6RnHCrESijjfoxUyeiaCxMcFQAXXrVtAdMwEdG9uywfipnfuP3hNkx7mPeAKrkkV73ZYrErSGrWf",
  "key21": "3QcuZ35jVNVb3VsSvSo54HErdgjgm3Ryy7G3hsZWUKpXY1jzQU8dcPdU8xWN3EGNpAtmdQryr8XDy1rWugkfDNgc",
  "key22": "EeD9Z8TddXYDDnu5JurTE9NFCmwT8jW8KyeAbLTxhGm1jKkTuduTYjXu9kaqDiz9vDD6YT3LNdDYV8AfqFdEBdT",
  "key23": "3gQeQaekT1wuZt4kD5rYUzj9WPwD49FGpyMnake1kowjHr7AXsjrFNH2VxV6yWv6xxGkVxpWWuzCnaYeZanaWuVL",
  "key24": "85U1ZHvYZ4SYMxp8hGSiX7kJH2S1kYC5skbC3VMHMP5oUj2QWqxNiFjFdbUWZguM1Gsbz5YKERAPHGSZ9rTWY9H",
  "key25": "2UNjAfnYGnCT3tQpDWbRtLhgzkeLXqCbqZsNGk3k2ooUB59qPU7RMpVcgWcSEeGoQ42MpkS18dnfe18wRA2Z5vPx",
  "key26": "5mLJ44sicsFpVq6oxrhhimKVaamvVZ9NnTbjBv6YRRrQz8groYXDfsov4wgJPxvWLwX7D2UqepMxqwukRZ38wHpk",
  "key27": "PaEakrxoZJi89XLqcwnn9hqJvZdjzxnjghziHn7WHcGEoovMoZLJqbh8K7yZbW7qqfEiNDHGJu9yzQok1oArpmD",
  "key28": "fkaXsc5VsgvdZhV4DYXxZPfcm4M8eGKk5NfW3pbj2jSWBumYS5RxFMvSNwLYmGMD2rSY3XkrW8MC2Wzzz7kZM4w",
  "key29": "3B7WB52KaSAv2MwesFk8ZM3QuCNGHhL4mba4h5wDRbaS3xYZXVjAKwG2MwiLUPbsULWZQmqKin7hePKvh66TCCqB",
  "key30": "2N9UqkrZwEm2oo9ircoQYnG9W3LuUeqNAt9UuFa1VG6B7qxfSryJpEgnpbuBgpiNKx4i3LowiH7EsENjZFedrM8x",
  "key31": "5hA4NUBpw3riwkBMEXVer5gbEkSN6zZWkaCXryuuJK1UfWVRtpe2Kfvn2r5Qfkh3eU5GuvtHMkLjy6tULksNQdBd"
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
