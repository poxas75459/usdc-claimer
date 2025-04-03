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
    "5wiyB3ofDN8cEvAF7AiKLSVCU8XKLMLPMkKvTiB2vKGp8T1oAfdkfzXtfw7Axi97FTzuN3GzjJJhRAUCbU6D2kAx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QCW1aoSSfHtML61esNhk5tNUaWLaBVM7uwWNLp3TuRdSVZkAjp5SDovuS1BwKZdtvHdU1XBvZ7n772f6hp5QccD",
  "key1": "4etSXVqYvLHjfpeVZ1m14m9sP9ihz9Ri4gLjRiCBLRy7EEDfYhvxFUQk7nhuHY1Pr3pn9j4oka2KYM2EXbojkYom",
  "key2": "v1sYFbjebHsXwEfE7MdzQXhP3xRqy2P4qs6oUHmd1xEugkn3QkgRFaZJA3wkovET5MhvvwuPM1t2WxiLhJXMBXt",
  "key3": "5D4e5jBbyrgSn4UhFJQ1ZsJDzUniEbw8nDV5aDcRtZVXDFiqTB6jMA9oEjm2bYnUsDsED7CsJBxD8vNGxXeCJy9o",
  "key4": "zVvHxfdKoPMfxg7HZRSnfpiUyheS74o5yhkvywiVpHEJ9AQ7rRzbCvkhqermuWYUuS3Dz2M3ENuTRrqmhHi6vrL",
  "key5": "5MViKWmifb6osQnEDzthdQ97rULAgjYmpVz3yxg6tCiKDu8bDqdnPMtYBRM3Dj4xDkvt3MaxvHNB53GgGSmbUGWK",
  "key6": "48Zp2wsbATWe9bGQM1Bjk7U8U7wtDcapw1zwuenhjwa8QQAdAnSwcbiAPbitvgCWYyutPakg2XedQXM4Rhzq2Kxf",
  "key7": "447LqrK6kaZh561f8JdAKsUmeo4z93tTvCSpmXgNbbhFNKnpzbQnGA1JbcFLhbau3L8vPXneCHnsFmJkfu3unkUU",
  "key8": "urcc14NoQx9WrrT1WYH924xdA8K9nC2LAyMpEwYM5o6SapUfMikC1RF7z3v7YowRM1TgdzQpLi7EMe7xQB74ZQi",
  "key9": "sQuouWCWyKMULRtsAJSDz5YubG87QuK7aTxPkK18ATkrMpMTtJ7q8CNREwMrhvkPoTHe3jywmwhgQqTYWiUAVUM",
  "key10": "QZJ6jCbcdbs5NR9QWqzRAEn5gJFdreYbokyCEqWzAUHTi2xYipR2AiRe8qxuRzYgFDNeqd8poShK7ud792xK3hC",
  "key11": "4wig3UbAp562ZvpWq2UedQ7K3sQGZrNePLZ4rP3JSnZJSDbciMMYHWFn62vFCQrhQUxpJmXMpCezL8uLao2VW3ij",
  "key12": "4zBftfLt2oLatZUBUvUjCEmtxiwGD3atTJTCro9Bu2He7Lk1ZDgdLFWXyvFxuCGmyEUrQRDQU63PGXFx9TzTPqte",
  "key13": "2uWRjyYDeFeASmkyFTQRwWp3cXbVgUfNqXf6VPVFkaafeeUBBpncY5r3pvzvKtrrjDMedcz4ZLfoGhEf5kVBVGbF",
  "key14": "2pqJ64q2q9nsDoukYkz45Qg6aNVkah1onCpmmsG39Ge4CdEXi5Caa3pVGJQpopKaDQS64HiqR9jFFrzku7H6CPu",
  "key15": "4typ7JmXBCCbpCu7Q6uT9RFYUwZCxghbkSwAQdKd1jxDMWtF8j1xE6iuwT6dhnR3FJkAaZoi2kwtJdn1zKaWRJBX",
  "key16": "59fYHVSxENC8WbZR5qTcYAAJo3ojkmVN3AHWq3gHDzQScdQYAbTfknZX4LF2NZ23J74mLweNaQt5rQph33eDCrZd",
  "key17": "2KstwxZB4mQBoN63FrQu5nZGD5jE5rSUwH9vkQSPUAQik2Gvbm12hwZHC4YmUds4NnQGdcMY7Xoyzz3zVRpyvSHr",
  "key18": "4ZFoYedgTnCfxzX1tHhhizFKGgC5UaRUizXdPnmxBkewJCVChosEagJvNM6pfs2aAeyysQiUiiiUv4cvQVKDBrBg",
  "key19": "4Q6Qy614fGdcDz43strg6SHgrFxWD9La8YMWzMecDRsdRwgkcmNR7zEqgou7RWpuQjgPwiW9NrwBrejUXtmd82eW",
  "key20": "3XyCFG8ZZVcN7vMUt1eVHWjn4jXw6g1ZiuTdozWfW1LM8LKKQcvPrHkugJgdsGVnBdG2prUbzwyBar2K8zMWLk1o",
  "key21": "ugDXcQKsFscePXf7dxxnAL26TMaKpnXZFreQDG7fmDFkbgL6i3u6xJZFm2BdrnjoB8xfSmgTnT5qnP3c8ci12EQ",
  "key22": "4w5D9YzcyUKZai1ufg8VTQ5cbFptqjkZgDJBHx2bgspfwLfUtCYaVyVfv1Tfx5R8omPZhjBMn1nZ9k4pxW9M5atf",
  "key23": "VeCbS49UgCHxHPxVPVssx62T9Eh1VZgAfwwNJojwgaTdQARCqCktoNybDrCN4tdYzeC9kfwad929c7zuFdFyiNp",
  "key24": "QpYWW8whGSEQUtuw2MxrLrXWmuP6e6C4kXpmifx2czq2hTE7Ahp6yt1WcUjMa7qziKgMakNFb7B4WyXtyisVHk8",
  "key25": "DrdsemJ49MYoJpHVgemYBCummAsbcZ3GjHXpHMpEapddRKdv2v3kD94dJZtEh2ag6v29WScERnqz8HRbVu2WGpy",
  "key26": "2qUXpJiaBUNPyTqD3xK4o7wun2SGsVZapte3YUywNWanTzyCVESDiMz5keEMZLuVP6JmQXeJDZ6uB8RX3Et2G5Fj",
  "key27": "QA5KZyPszaTqvbGe6k2fM6ufzU4PSgaubXj7162U19w14gbiyNU3ukE88xuPfntNQG6A7pKFzT3udmPMh73TLVd",
  "key28": "4Q4MzBtocSfv93oyXdbgJU23AvBSCp83TgiorP4VgwsQ9EU1rZzciURqC2H5DAwf9RgNpGrAF61UeDD9VNAuJHn1",
  "key29": "3bMAMrVKZmgtAzZ7gj3UJEzCUaLJfAxqcrdWfPEvxLY5EGC3h5oT7Joi1KbuCjgx7qz11pgRMhUkuZt2F8wVgWew",
  "key30": "3g3RCG4utA4VDLzsjC8GPvGPJHE62qk84Qa3DRSpJyLQVdwsTo4eHnncJDUiKsk6tQTf4LzBmvopMndXsBk6UDGD",
  "key31": "4nDjUT5hDbqE2iBnZrLpbQ1R431W41dk75ssstk9iGpzTD6vkhkkcQvY34oYJiXmeXqntkEVchKqmPkUgdtpPceP",
  "key32": "35z4nKDVSAr1bNVohF7i5QvzNGqvXaeSwQMzxYpMoSc4so8FoXYL58nrCEArnrNmtrNLUufKASB2A9fTJdjV4utb",
  "key33": "65guZimzZU14X8mYejQNtAeYrU8uSeJ81AsebomGVYv56fwWRTCkgHbidJbWYc5udUUbWZPSwDKhb71rUwScPtr7",
  "key34": "63fpbwRo3Lfu5a4L78QuY65b4Hji8oAjpV9Z6TPRRDERHryePbaECRn52SNP3MFScE7yMQLBVF6ezdpvxRtHWjjz",
  "key35": "2h2Yrg8uYMv6QVYp7Fr1ZqGMhoB3p2dwMLeHHxdzFs7DBggfAUALJkZQhypvaHsvXSFP8ccguakskvwv5Uqap65N",
  "key36": "2mWDeGoseGr3b28GR77wY5E7LEbyTdRBbjhAQ7YCuN4ZcCt2AqN1YKFjmpZm6KTveQCd6gAAaamaCQ31FZKgnxYH",
  "key37": "41vofjh3S6UKE1ptDYKrMntLxXcmV8TTFVs5PQeC1yQA9TwWAf2NYpKqocTPeE7b1E1qx4wC1uTpWEPG3BLua1Su",
  "key38": "3RFXCSZe7KqjiCvHB9b8BSszjXLK9k4usAdWwBf6m34nLonUJxVSVgaaWamCiGoPcx1mLBpJjMG4RRtx6tpAAnrF",
  "key39": "5f2iUVtoce4dkxsrcEP7rofEPxPvusg6zD5SNbnZtL6tAL7qeag8FkTdBYAzUpDmJ3mkoedDsqNdku984oWY9xqS"
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
