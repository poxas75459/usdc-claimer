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
    "3kiphu58LCfEWSW1pWq5hZBbSPVEezbAFsRSqQABQJGYQP8paYpCCkSTpLTFcVCQTPYrjHiHTy9HieiQLkfbthUT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sP2TG6GiKtUX15YpDFcFuQehND7eFRJ7jaxGXKkjnoMWVgzxEBXCYvZwFiot43sYVAzy3mMk4aepGSc3F3K45kx",
  "key1": "57aGbnn8vqRVzPqTMQviejjskJqBzLKVZEQzRemp9ScegPXbLwAu16Zk4FGw94jChp1XheK7P5i9Wb5HydNE44ut",
  "key2": "to1oXgb19gVUEyEFP8AmJ6HnSdf1JuRhzpqL2MbxHxJAEa78TDBavdZsNJwHRGtxfnECS9Jka3a255kPJPKzZvv",
  "key3": "5mVFXwWb1y8mVFf5wYxrHidUMD2ygtqLjesbojZWJXgD8My7wmA2p99CdQR5s6NYYgWmmc7N2ofAuyoe3AFGLYH6",
  "key4": "4DvAQ1jRSahmmZaxFwrwyoCdCzEav2YMPrNAcACT51Dw23ijegYo8FnCdU8YNCgofGwBYehkMMo2ZhwGivGyiLHN",
  "key5": "492WxdsgRko2cuSdgBEDqtAib166ctrm4VjcmMGBxusufJJLi8P2vjY3xYtjvWdnwj8oexh7bVD5Qrnd778cZvF",
  "key6": "62tfss8dusoVtPvkdysKtNBLKBysK6fg4yYyhFo9HTLvENEk6GeLPgdQs6vgraH59mNVtzH92b2LF4tC3jSouRUW",
  "key7": "32Vw1Emer4Gzi69xbw7NYv8T2YoYdBaVcnyLHrKHYhjx2KDGVxKTyUTymJCCZNYNPoNorsPYf1tYqA9pSCuUKnoe",
  "key8": "mnoEY4CTTBDnz2MjgWkfAGk4q2NU7GuySiAFzB1Gj1gd3N92JHreJfSA5byaji153CfMcmvTL6hpW1Y2senYAyj",
  "key9": "41331ByKrcKxVvC9xFhmVafZgbUH5F4fmdfHC2bT4p1xvd5Xi5TuHZRg7TG88XjhKTAanF3GT4vmeMFLh6PcRzmQ",
  "key10": "3kMvw6KskL7ET1T7qUmAuEAhRp5BQJagjTAhoTyK3d2TW9eJZt3SeuKnBLwS1dJoca5qGfevdTay7Khu7ooVdkJk",
  "key11": "3BB3yvCyKiF3ymXZ48fSWF2LHibkKZUqmYj3pHFf7HZFmNCA3h8W534FM57RrRnoyxiJqF7oSrNkbsB5yYD5ZK8g",
  "key12": "4ZKsbYw3D6ipzwFR3LwnP4TJXELqiDqZ72SGELv8v5M5dfS47U2Co2wgumZF7anSdYW5cMKJuLjRfeoL3Woa2Ldg",
  "key13": "2ZCBzkhVwcYY95DZFAdyTHP8JjgKbzeiuJLjvSgaxzegnUagg6wFyUiQJcdg8G1tS8VLZcqK7GhZsEN6JcQX588L",
  "key14": "o8WtnLdHbDHE6dmudiiTK8uKPX6cNK8VPnj3qYZd8LSvsdwhtHQq3YtdgavbR5QBqCxUFMep7FuW17LVJSg8bAu",
  "key15": "5HWmYwrb8H6Y6wXtESnivwM3dVyuV13Vf3ZyRXfY9aUZ8HSvS46VX4s7sZNjEJT8pLttKovKXmmCTzmGsu8ZUN4",
  "key16": "GeGaQYLFqj4cvZxVyvJ9VpEWhWDQLG5ucXFRxW7EQ7ucFVpM1c924pbZiPGrh7ADu1LJNDof8EcP2wpvfsVJRxK",
  "key17": "3N5Xy8tbqd4qJzd6wcBwXzjiCJyof6YFfbkRypbHKXyikA9RXcHtjK24KtsG273Ges1YHtJLEucQHMRX2DLiRraF",
  "key18": "3YtcDuvkCvbWSmBbHbvxd3xPf6FURGHvcMbnFnwDfmYNcnH1ssiKmi5pXL4N8v2Dzm8X9HBLXhoyQNXS4JmVxiaN",
  "key19": "4QL4Gz2tjG7swEXV9D4baUcHYRq32K8Yvuq7TFv97TfhowtE36EUpNfnJucgn4P8ebEiEn5g9tnqBeXf6SScQV8x",
  "key20": "5E7CWho3sQmri4qjZQZJrEdG32c5GXSWCB6J5TNp1nGWYtTgYJGnXeybXCAJeJardtPY9Xf9UZDJiWS3wRGJmrk",
  "key21": "3U1L8zXbH9rK62Gk7g6HvDH9G3QPiyXYoK136xK6MM1wv49Wx7Z6JmLfPZrkyLESqgEj76LqB31eH2t8kTu51cBZ",
  "key22": "kHUxMjFTepTsp1iV5JfKXYA4ptuwtwVuS9E8YtwGSPdfXGPjgdaA4epebjfTvHRRCGg3q1TBSCPdcJAk7qej3dW",
  "key23": "5LYJTD9o6dLaag6RfEnX83durVQRArVmFB8z3XRSuj1KK5Re6B4ybmYGSCnGCn7L9Nr9x16wRDWibVf9KQ6uLfFD",
  "key24": "3ZB7gV3Xz1nUUjNeVAWo6ba5dhDPTY6zUpHd75BiJ7q6P2MTgZzHb118tuVP5M7AgiWhmxWi1yYiLcT4ZbuPcg7j",
  "key25": "z1Uu3dWe5zdQ9aAVeHjYZMU7k4Pp3ke7HeqCcaYpzDPz25sHAwcTuMwtnwSK31jwYU88rbcCxfNDQmRBNPEToz3",
  "key26": "58e2HEw7UkQyxGBTWCbRoPWsEmywThKAxUP8i4W7bbFj49Po3DHwsDVnww7GXvEjfUaL2vinRM8Tq6ERKYKjgx4J",
  "key27": "5Tz1yhgiRCNrCFPmZ459Wxehpz7tH7GTAcKa4EZC7r748iAnFC725EVaWjoXYFcP6yZacVSMoxikQnkbD3ym4tD7",
  "key28": "4tSHNZFqB3AFZetHJx43UhE65BrdwRZfAhhhWDupirLS3M6mqiamGhMT53kz2UyeQ8HWpbZBwtUCK8cVXaTPj1YX"
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
