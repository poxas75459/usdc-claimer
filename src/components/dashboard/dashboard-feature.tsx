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
    "4qkmbfeVoY7dZKtUQ5zAyhkqbhHqfCmDV3h3PLpW7P5jdEiMNWB7KG4cCjyWDG3Cj3QjW63bLyN9Mj9wvwjLMoCd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CKAsgV7SqHBJwnwuxf1GRB8WQNnCutH3X9DwLPTebV14msmAgiZooPHYheqbc9GyXXW38vzkp72pS7N882dV231",
  "key1": "s1PLXHMGvLyPi49cat6Gs9bBNDoHtP5iL6vqfVDqM3ZNFgbJ2XGyPh7ecXtenAHJp36uoLk9JG4Z3VUjGwnFVG6",
  "key2": "4FgE1ejA7gAZij2KEfxxfUdeZw8AJw6GuXY2y9Qyp5aH2KxyaXALfHvXe5V3crgRBXetK2Z1M4S2wgTHySztz8rc",
  "key3": "4Lvr4LuLsS7cyrdK27HQaWSsbs1QBHS5EmzG3bYG279CiPxQo8VPypG5htqz9vbgHAZEnYFP2ZE84nk5cwVEB77E",
  "key4": "28PzidjjiE5XEr4r8ZkSBundnkSX8emm57vqLfjyQM5BNBCsYjcMyXr16VrYeSjsvrLAygKvroLzn6Xgus5RngWP",
  "key5": "293BMMTxfQNWZh3vFKSyb7UM2gk3djapWbYokCJSZemDjm99dqpBWvU6e9EHcxJrv4LbUYPoc2JYXtbsnQj4XeVD",
  "key6": "PFsimN4ENKy6zn4KS6mCQZ4CSHUcWqd7LTK6fEPdUJFM6gqa5v9W2WrWPzUSX1KqUrgTrFwM6gq9UHtSFt91NLJ",
  "key7": "5o2e6w6uP6Hx5h7Fi6HEhAe92MiHPrTt4pFAWSMR6choFysPHcxXgnVd8tAeCpBLJHpZCuq8jH3WGMoKSDU61BcG",
  "key8": "2x4NYmhngTGE38MeegjNwQbFsQFRaXZanEq79TctsqzccgyjeYRsSHCGQFQLwXRhtaWFhKuH5ejFyckpeVbMoVBV",
  "key9": "4YkffkqJWtz4ui3mVzRYCjBqiaZbiCNzPo6xDSS2p2BoCM5tGNvip9TsV44tFBEqNM6aLivGsf2Gbo71c9pvBFAX",
  "key10": "5aJL2Wc8V1BUw7d8KxnbSjdAUmuxd2vXXSVuXvScA7Q4s8yKNgNPa7GCix6ZUy2Y3Pn8g9Cw7m517hFce39X9Rsf",
  "key11": "5ru14rJnCUWei9ZV135ekYyCWeU1jyNsckZJQsxAgXvCyEjNoDeTpPtHuAtc5HSP6a3aLHztuGSfoP2tvgjtwc4E",
  "key12": "5e7pvtsoorhfZfdeT2ZEBxwETr7M4K6MA67E5WKvWxgBm18Qi6Y19M6tJdGCMCnEB63YK1vPnRKjHoSG8VJCbmQy",
  "key13": "3U1mjGqMLLTeW4PmxXm5CfpBhmTXRm99Eu7icHWS163TagyRPqhM6dU76aHoHnYxWJmSWgnXMTFN17grVLsy6Pkh",
  "key14": "NzQG8cQBZxvfBq8FVVoogDMzn8uegjgJnVik5hDVfnxHZ4xYRSNbQhPvg6ofZ8pmNeT47WtsAz4PJxNXM8nf3rY",
  "key15": "qJHX6jVuPZKrqv2s3wUMbXEemTNSHhK4vCg85eFVaKVH6u4R5kZuNQ4SoiR12BXjd9vmreTVvbGNYFdB7X1gV2P",
  "key16": "RCfoQdSAyJvXk8J112Yx6XLPRRcRTA56Bi1gZNRuEASgERcnVCyUd8b2oHgf89Ym1y2cntnA5VYCZbrA3iC6rWk",
  "key17": "5v5xtHuVCKXkxPYBLpYLz37sMVbFfdujzCuZQcSg5ynp5XSTk5gDaQ9uUwVeJvwnzXYVVW76xzGXAVrmMhsyaszn",
  "key18": "2ubqAEtW8gEohsz38RZLW5UnaX6RP6aUYXeShsDnQAEhYb1FFtthjLesYaJk5L56sjRVk5Ho27jJKGFWrR99sNUc",
  "key19": "3S1DYHCbGxHVHAqAHXLSKwgNHLW5ogSQ7EXzWszHPT7wEcAmHqueg1KVeeAvWyaRFPuDzX62kPhJB4k2kCkEpEAE",
  "key20": "B9H6DEMT2YfQTZrLR3pjszGXNiVtwTDhjD87cHspczHiS2jnDN2nBY4VtFmQ7ED7JcCDhLfMPEFFkMWFTHpbpC4",
  "key21": "gsT8uWA9qJyQejTe2nCqL6GVAP71qLYSqnNbi4DA8R8aBWqxhgxW44ANhhhJEowm48buGn6EeDZ6NysJGw4AQom",
  "key22": "3YEaKFDsEGyCAsL3L93SryJJBgKGarJJHiqWVn77Y75W6iYHMvc3QHH9zvvnzoZYm56A8ojTnUjkNZUc2frMExLx",
  "key23": "CB1mnQ9sz5JXPfYMmsE6V633BQsT7d94RMG88s4mJxJZoxcoE2mrZjaDPdiajjePAnnnKDHjkS66VkJDaYYEnsa",
  "key24": "5wGihJW26DdUo2BTegPoYueURhy9YGBpr7VPcJGcP7rktnNbRUJjqcojkWazv1YJLtujoQDLnJs8LPitTqXL4eLB",
  "key25": "3V6nWEEtqTTGVxAbtuqqEhTPgMjSyCwoeQbrJ1HE2LzcS2kZ1fTwKwLJpa497Rpoy52njk9dLYJXPQAbcm5Sz8Dg",
  "key26": "2EYhzLxsqud2bFVM4Z4kUQ5KTUEaDJ11zssMSAPRdBn8LRuM456TepKx4gnQX4DkeYXU8KM1QzbJ2F2grJA49d35",
  "key27": "5x3RSkHTL4uoZNuarz5tpp1FB38g9tM9mWvoMFZL5h5yWAAPbSAyCrmho7GTp3ihRmCyjjh6q7WGqnBsnHoGr9AW",
  "key28": "3YvuJegkWdho7Wz9ngL7YvQDnfszBvsL5NzuPTfzpYsP4mgGKsdP8cxYNm8pfihFfzraLiRowtUBLFkQgpjvx8iE",
  "key29": "37kQtd3Vt5b6pAuBJ1rp49oBMjnLQU9B1f4ipqChm8CxcvyEqnDirGZJ3YN8Z9b6jvoxS3sLitZmtk8wPX9WL8dX",
  "key30": "4AWTHqATdsrXZrFg2qVmmmDfFR8jUH2hR85kn6q9Vwjier9M8LRRY2NNz6SST2HgpU9NBLzdbcsLt327VJfMpmue",
  "key31": "4DDZ1dv1w7ToHVN6xCuzHTKTbNdzPfqVjPPDFeWuKLjw9cWmgVMkWwcjQv1fznqeuUZZAKNFcaAniT6FkrJsEmmZ",
  "key32": "3m14DxebzP6ZvtQyadofcehV6WkSRjUXyDVHfozEvbE8x7bNj5MMbqa6ZFuqoMt5aXg3knxHeUV363HHCUcgLzQD",
  "key33": "4uhHiB7LCocTPVGEZ24DBjNSQkNiR8osNZYRBmXgGJ3YKahEndk4YteHrnJDZAFuaLEqfoaqEqSwVwWkTv4SsMSd",
  "key34": "2FjRD7rP86b4rA1FCYcqcr6bjPDtVcHXQT1PmBiw5xczsH5qKKB3fNq1gLXEbUytk446ETQ8VVq29ZgeWSJFBHaS",
  "key35": "5hdrvAzNRppF4tvGvdDP4pzjJCRkpKo4VXfqoxD9gAPNW27htGcYJNtX3NYufyNjQkxWrJ1fWcPoorm4EbcR2UfM",
  "key36": "2xwSzing7Qpu6cCaSkqqPNL5y3a5xSdHVPdK5gzcd3eejZrT3P9NpPAbhmBc6KGVSXYMpbUR51dYd3HiWDrF9xYU"
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
