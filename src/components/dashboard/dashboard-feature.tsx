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
    "5LAAf2qi5M4zGNJheHJpVAneGSwZCc7nm7pZY9ACWY36mxiswizXgTT2LdKqVSGHicwQTx8umYWUdFGKmJYk8sXk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rtMLPrCmg2nFb2StJD8Rd8EbsPcj9qCLkVqzH6hJiZLBVvoRnra5p313bKsJYsMFD745kBnK9vZF6bXU8tdTgtM",
  "key1": "2hd5WNZgxjotgR63prXGP9gWFEBaJFL7DWumw1x3LdcHKHcz1aFzfif34pHACMHKHN5w17rQEqMf2HAeEpXXxUhC",
  "key2": "2Vuz5iqe8MVV29SU62sjoSKEgjN4bDqxv3JvqFdkv6xPvodsQozrdxGyuTVwrQc4kUCpqQRtjoexfNh56bbdfPDp",
  "key3": "cbf64ejk9wzKSZXnRX5eD5kzawrAE83L6gawmvhf4ivHXPhRQqS6Qv1dbCdBsU1zreXBkVeUvjXosfWxKZnmhn6",
  "key4": "63vbwjo4rpsJ53Y7c8W4qUj9XHmvCBo3XEUMqq9Vx1QMAeTZuWpHvBV1gifSmMdNo9LKefmn54p2E1cnqn1B5Svy",
  "key5": "21JAvyhELvP9F5XGTcrMUePHr1kA52AL8WTz4AarbHcNx8Q3WuPz6bU5c9rjxHh4KVtY3CubtEZN7ma5eHnBrpEK",
  "key6": "36fTmyTVH1D4c1a6a5U8LXVzJda6QVMLsnM11U5dhLe8Y5JAMeWtRw1qhrd8ACspX634vcRjJDdykR8siwKYcsZ1",
  "key7": "5QrPWiPK8nqdnF7dBuMxq1QpAJB4gNNHRJk9HMHWj3sKVMuoEv8hz3BqBfmxEbREDthgpm5Q1frFKX4Hj9erFnwv",
  "key8": "VCKZVVWMmdiqtyiV1EC7VoNKAvQMf8FnAzdvUecV2pBNPNZQpbbHFoCyhq7Wyz59Yq9LxkspcTbCHNbZJRx4L83",
  "key9": "2JtRWYkdXTv1xUs155La4tmD8pMugwhjmyxcf4f19ueDLUrCuNVU2Vr79BRq1rd6N6dU1pCk9VgJXvnA1y4Rofc",
  "key10": "5xFePYbkT5r5StickyLCMkpHUfSZBVhLfKSJydWuyHH5WbcDgy54tKEZ8BmsFskf21FLXZK86tLfTcJJEMJ3Gomu",
  "key11": "2QQoUSj79zU97vKL3Xgxah6y9Ws88v3YhbrYbSWEawpUkyXimZUkVQq12KqjFzTVMn7CAVmd37R8Z9ahHPVGFQny",
  "key12": "9S9ZR5QR42q5Y7NqjZZG2PvFjmAMGJXMYamnBn4mLTGVzQP88qn1HYYVi9VqNJLWzfpYYaoxd1tKKuXoSZLWubX",
  "key13": "27fTHA92pk4awRRB8rYS3KTR6uvR4boVtxvHTKB5rDW75PiSawKwDdm9yGxLvYMmwrSMNCrtdDYpZusADGTwzyeF",
  "key14": "s1WVj9S72DtQmZMUHqs5tcyakS72ATBXcRQrcGAtq9cfu7YM93wXRoZVoS8Z5MQ2f4WD3osYNmL5iuSLsmzmFTX",
  "key15": "YacrSw3rJgK86AqSYbSkkxcsGU3aXyQxmfqXYWundwVJVUihtX6DCF9FK8hvJQjLxFmjV2sthGV1k92PBGPuC7W",
  "key16": "7BGxvF3GU35v8bFvdaqgiGJMKbfr2caUSxwLLDqyrKDDBdGjZJvtT2qU3UP3VsfDGfogxRJkc6wEjs7WdasS9Td",
  "key17": "2hCATRkGQJ4JvG2qniq5WsJx9EbtY1JrB6wkmdZWu1FScRknn7B3KtJryCsAtwFWSwE7SF72Lp1ehWUZ3rzGAn6G",
  "key18": "5i6dkggtS6KXLyzZ8pri9iuvTehmnS7rXbQFLbijFsoetq2VJN1jMaohNKw9ZMUA9eJscadH5T3Yqd1NqNYHnqv1",
  "key19": "Tn9thbJKZpQPmTrPYyMEhcuR158rXhAPHun6MVSH712PRwtUBYXvLTQnDaufsJpdZKZW3z4vTDssU2nLyFikCX8",
  "key20": "hNwPhwjzRNgLKBd7332sPFagwtUuz3BpnVsX8QauNP1S36Qhr66cuuMHj3UzEutf3omZ6xYLUQDYBXTWExqTLqY",
  "key21": "34hhn3FgpL6jUVFm6QhgkZL375A9X1JWH6c9zC6TTFf9bnc4SzBm3B5sQSBfN3XYovm16Ahtiv7KhGR1XAjoMx7q",
  "key22": "2c2DUFAfNGgF4mB2sNnNc6LMSt3eFpA8YVRRnGpsxJv7fyWvGa2E8ZwDS7cy2WLmb2oVWyPLviBofr3rEQBy53u6",
  "key23": "ReHfbcaj9KjjbDmGiUuWP1bTF2FM61QzyAom2HE7qT75iD9Q11taYssQ4TAZB3LnNufyvF3ap5emPYUYLqqBF38",
  "key24": "s3yu1ATw1tNmEP6xNefLPbQW6ba1Zapnf7u7cnzA7W6ZqHCMeZkUg3QTDFYUUa9CYPcZrWGA8RiQqXeXdS8Qi16",
  "key25": "3j43fC9vW1QosVzcGokxBFitEqR91Z15FfbCfdaQtKfV41B9X3ADjVZMT6q8fCAw5cGbCQPwWhdRA6NNXzWYV82M",
  "key26": "vx3nL2yCMauuTsToT2HdHzpztWuNGBrVNDt8FnhaxSbUrT6yQNiHxcUtiunq827X1jLGoJPUXcufXqwEASVjkBr",
  "key27": "3H5BpY2BA1GQYjesf5qdcXqZTZ27GnnMAybbXMgY4qQ2gApoiLtXLhYYqjRYFKwTce7NRZQSdjVr5Nqui3KAjcXp",
  "key28": "4xHGu6bbwbFuLknaFdJhoJvMFvoM7uZBnduns1m1Ju2GqWCAwFyj7cNzuqRuZB3k9UQS4nWk7ok4MrP19ev61zHb",
  "key29": "4Zq6KhywCvHmHJTGpCnGyYbhVongEHhiKnvcEjSYWm1nWU9ku3LKYwqBYiUPQufL1Q4KJU3wHMvXvNtNTsvnA9XJ",
  "key30": "3DRjxrweiPCaq9UxrVHNNCHG6v6h6UNLaL1jY7HQFNmKwBFxeywLwGkTVzWXYSD4kcC3SB91Mgtvb6Y96ybzbJkV",
  "key31": "vxd3ut3NdqJsWR7tj4dpCwnDM7pkSSizQhUoHqdLM2c6CrkeBZrrR7PaQeFv9j7qu32XfLi2KzKKpUo6Aro1eGK",
  "key32": "2X2ZxV9iBSgt8qHDoVHnSCzt9WXokfNSjVBpz9NxoKKmNq7RhoEKGKXxiU9P3BwizZqAs4g91YTKo9rEWCcVxmUK",
  "key33": "GZJBSEHnPYEJ6Ww6m13iNtaXPwVqKGCcmH8QLLVoZ235e2rSXUBnR3X7PbUVdET1XJCCBhVxBXVmTmks4ZdjqEF",
  "key34": "2f3fCkQuSFZ4zZ9fWEVk8S1Vw11gStwzVioqu3uD9b3rfsedXmqEaoTWMZHvUdpTME2iam6A2YLnR8dZagbsEhuJ",
  "key35": "4Ksimxy7RNn9MYexxZSN6wxRAdK7pzsZogMBKsW37p3ysnc7qjnBjgjB3uYNYjXSvLhPL2Aqtaji3ux4vLrLQUip",
  "key36": "3n1u9rvz2vCZGiKeW1R7nxCZRQgkiEmMBsmN6RVfYZG9zvPKZn5yBs7TsjiNEMBKBMT1Ai5YA6AovvKF9zwKYaU9",
  "key37": "63pac5VWBnwEF88mSPqmePuXfLihxhCt1e7u8qUcF73WM1WmsLy6nELDYH569sDiBqqFxyDccgTMM7f3H2DWzCAc",
  "key38": "4t1EBh2Rqvsg9mLvUmV7oKQJAH2F4cvePrYhUGK9S2PgMQm5jNYYAjadFuh9VVhSh3yAou6od83kn6TCVrKKXEhP",
  "key39": "5fX51WN9p43HQFiWagLDvzU8cHdykRsfwSSDiiD21k7YEjzxpLRa3H4sfxK67wqNzK9hXXSBN9Ltebhqg9a9UuZs"
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
