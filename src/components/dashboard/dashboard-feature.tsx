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
    "5b51BwoNt6RdhhzvoWfYKUmBKFRLiifYpZwWGqGL7kBaNM3gppmpVTh6mAnTMKBxBqARHNt3Rj9F5HbieDKKui4Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TMykWrJVJX5dKQN99WoDqYLVDiuuMA3kwC1iiAm6o2dzgfCg87cbG1qqhdeoAKjo986rQguKXGLYCtJaoL3pdFF",
  "key1": "4NzrGgMRLKpWG3W2nzNqsoCcPrPUkznYNTX2DDB4VGUaiyRgo2pLSbN2mTpHiNc79jeETHKEPHagqCYw5mSyhrsN",
  "key2": "RJTJiasbGfe8CktXPkpjRLYsECq5C9DWZw1EuNPkK994a9iQLHKvV1j6RhPDXnSAMtmMXeRdsH2P1Y7uvbtM1bh",
  "key3": "2E5xWkkozX3ZfVTMeysZBkChxCAzgyzgTbDkB78TfmNbA2oaXiQDtErDdLVnwBSAxPj8cPUgnD7rKivtkYUVKrKh",
  "key4": "54dNXMMUkBngQmvTCCa3TLwDD2hj2t2eyfNMXPVdGC432SLQjTYVBHJw4rvdSj3951c3wPJvk8jHBX8y3rKwaCbY",
  "key5": "2VBJr5FNAMWLPzBfVtt9SY4HRXs9SmFi9XJnHLuctCLzjw5m9TLei7mCcHva8eVnKoz7gGZyq7GRHYuzGEz5SvyG",
  "key6": "4csb5AYJtW8LCS5qTjWgSpoN9cmjVTkrva6zcfHyYeA5qkXBuVTifp3dhLFTCfGxutLAJZchEN5WBrhnw3gZwnGp",
  "key7": "1kgktP1yNGjsGZKjZfbQyau1TRXSa1Y6sQqTCSRiRLgzL1Xex5wmHn8Hf5FB5zx9HCZWwyqdDYCjtDTRG3KxFtJ",
  "key8": "3e5A8ZcoG4UbRR98qr6nyvDmAGgJz9A4ooy293in2PW75JNfrf9k3uTi5p8E5aLkhfMaDyUDdHUKqk63hSYkMQGK",
  "key9": "arCQ1wJAPvKyHAEH4ToxkNJEn6MMQjkfUsoGuHCAYWYy5vz4q83dQwT4TkPQ7pE4AvA5ohEmfVrP9XcnhwwV1Xe",
  "key10": "5diiFB3QeDLVVa4w8Wt2WSejgyfbxHxuABsjNdtcWBGW8Fj1yq7hDpnLXSk6FeFfY7nGkP864ordHuJr1WfUST8p",
  "key11": "2oAGXxxn11XC7QJPwBKRKUaLaQ5WjzBmRzm5342tZaiDUDtWTuWBhFekRvZLQVambZkMF3VWeCJ9s3nRWWbFqhbh",
  "key12": "wm7zK4bKDQhbqynxSox4a3ayGDzVoDyEeuzy8SaazpJEtzwVKX1VB7PhmBi88dVfzhAuGgeXk4uyfQSn1QbBDah",
  "key13": "3FJ8gQBr8gttvtrNEXRrqZ4W1bRRmHQQe7uZRCLWyWx5tfH62rAukwnkkaj3crn8JSdv5dB29YCcnBw2eMEtGCpy",
  "key14": "2sGcmdUNirdPGwxcr2gXhtLqjddrh5veFM1hF42qPwcNMr2U8M4fHNNDviky4Hys282EBAG1qtTJiu8Hz4q8z8Nh",
  "key15": "25EpXQVkCbBWAngwY1QdKSD7yMXeUkSiRukmpsi1mnMHZiiaT1StfeCRKH85EZvpPzeePHH1KQwi8AfP4V22xLYV",
  "key16": "4rmMhXaKUrgNB79cpgNoeo5oJtkQNCzWMFjZ5q9CVs6KhGtqDDXRBbP1tKE2UkGoroFavVcG9tZS8DfH9SRUDbW",
  "key17": "239cjEpHZXiyfaU5XQGByJr1y8sXWznKNjBLp7b7MHo1zMvZptSb9vqqqrxjuAxCBZsDFTTamYjpsU5cMcYTMpyE",
  "key18": "4pzcWP2bgWvWMc8aiWeC4Ry1SLXbBn8DdDVQv5WHTBVL9BQenJYBiVzCJF1R3Jv67oUfxFxtpXXQwFSVp6MzyTED",
  "key19": "3BpW9fmGuwo6Fhd3vnQ7Fx1chJbQ3orc1WvoHbuuwDMgYaNvm33twA6e7gvpVa1Pau1Ftbx9jAaAuLXes22nA5uN",
  "key20": "4Q3px7LBkkCM8fjakiFdXuY9kCwJpLVpFCEDk9VBcUmKP2hSdF6bTG5Jy6iSk7tffcExysHATGg9DXKKzToaedMT",
  "key21": "4F9AQQHkEQceeRcatLqGBME7RRkTDQwNoCh87XpEXAfQMiuFsPQjKwJawxk1djDcf9E5KYqsynWw5dd2UUEteer1",
  "key22": "5DaE5nNnhgoaw7fqFiPcBQfRJxqApmgpcD3frr1S6uVFwFf2Wy2gFvPtCkxuSHjB1DETjowunPewXXWF6qA1194D",
  "key23": "5NhJgXs6bPPA1Bok1cwZTJ2eWTpf3No2EE7BXp2YUJ2w3qNiiqAgJTNGxN5jxMEDK42vhn78niVr6bbGJVrHJyVw",
  "key24": "8PB5w1MkyNKmzsmLcigDS85y63NpvexSFsjmYfVKfpwDV4oSPozPN4q1JCD8baRDSAGaQruwQ7WurEZhw9TGVTV",
  "key25": "2vf1m12pcCYc2Uy1mpodbKkEuwJGyD1G7axnFVauhohL2ZcY1a6Hg6ZGJsRvFPG47tgapFmk2ckpXBPcsFXgS7zi",
  "key26": "2HrdxkzNwp3zwCpyC1ZX4bnJf1DveqJc5Q6E47mRdefCLqeui8kU2apAwhk8jDE7CVj3jA4BqfKqaYrry5z73x5F",
  "key27": "47DJYyrwoSNxVdTxDNgjBfXz17zdqqbAuEqBnm7AjLpnR9zQsPDmNDgYBgMBgZmic1fkMcDBMKUVmooT4T3Km48f",
  "key28": "wXgWSooNt6rd8SuPYF9vdJtx726bH8u5NZBdLfSf7US6DSys7R9LXtBK4opGPJ9g5joQgw9H436xMhFEb7qY2ZA",
  "key29": "4G7cmfgijYiwGXV6gCrmyw5WyekxpMELjaHfEbqSywyh13kydjUrBeJRjG87pH14ZYmWY9eZGWj5yrA6wUEzNYKo",
  "key30": "2M8wBWHY8vbBPLDzadZX91E1TuEKAGoL6Cdqjy4hqiuMsZMqFNjQXi3y5DeVEFKEQ1Um2CCUB5dec73gnw2gZqgA",
  "key31": "5x3Q87wUxSq3LARGn8Q8ZbAWZBxfAvdxk5VUuSgAUFug976CMuwjQ7PsAz3hjpZsCYMKisTckVayBECjhMVjib2d",
  "key32": "3AbnAGypUZxKeBRGpLZT9WjXudJ1q1z6VamsAZVK2ujri2u2dB4nLi741nUHn2tBYeM5KVZJhScUj2wUsJjpc5q4",
  "key33": "2Ln9Hu9dTEf8UV318vJsqghypiudLxDzFNELX7376wU7VYxj6Wa3pRhm1MuZ1S6TMvhGij3StVHR8B8wLyeDysBq",
  "key34": "3RiYbBeND8c9SGbXtg8aP63aoX3ReiFTiDA9xwZmVWYDfGK9yVW4Lt3bnPfUEZPPqkoiqmSkAAkafKfmd2oonYUk",
  "key35": "36oSUeeV8KM7PSXCmpYi4wQ2bbhmFW8NYdBH26Jh4GbrThrFdb2ZpBPp5fuevjDG8wuFpS68MDfbkbgRtRZFf2QM",
  "key36": "5fLLCBcC82xnxVV2n7AW4YpVg18iMwN86B179yEFdQoEDUT5WXUXUJU5AMTF5fbbsiQACTLoYya6B5eLvqajz1Lm",
  "key37": "34Bw4jZVEUBpY2L2LdsVV7AzJHr8QRW6YiD7YAq6ojyxA4cGKGd9VXP1AtqdPc8F35kVbmNVxaSgo7hUDXxTBgpp",
  "key38": "4c92UoLawkaipNWoSTXZVXeh5GxJaxn98Pzstudjk5b8f3ynjZ3dSSE4n3Wbrn3V7Gh1N331YyvsCi5vKRjnH5bK",
  "key39": "5SgEW8HsfYQ4NLMrkFzEeSpYPir9bvcea1Ln6ayjB5TqKCayWtaMSCHpJWmCWJcksHG3uX8Zh4Mgm3B4HXx3Vfmc",
  "key40": "4VqUKB1CVqDrGPZVLuLC2mGT8fnovXNMs9yMcAHSyxQi1SU7FiDJxaJkp341Y5hyaRhfcUyzjKQm1GMUEvAcduUq",
  "key41": "4CcQkazkHQuL3P29MX2vZLANBJJ7jAVAVhHoPRRYxTh7q574QNuN8gvY3hYjcgWqGhRxKLTztNMrFgiz1mirFAxb",
  "key42": "JR2bdZsPjfjyGCgC6AreQW93vrQhiKcxcX3zXupRYJtGMnZAYT3ysFk8sVg3ZedDUN7tffgw1ZSxSLyBwmePFtW",
  "key43": "3iZPLqo7iEHZo4tyDroPsPkSf25eEH6URRbKHghGAVRkahsto2UQxQXTzLzSeBRzKBGaYqYtYzFBEuLYy4uNkrV2",
  "key44": "5oytKL8BswbWCkWrcRgdCUD5LvWKBEanueTFdCskwGPxKEfELcRo2xorognAFW4jKGKLJ5Sd4QLUGPpubmFTGmpq",
  "key45": "2Wshr88PpfizS9HbR7ZndCfWQPcngsQpmuz1uXP7T8FG6FYXdrp8TfjeoNTatAgQ1EWi2fDbhFPGbdtwMsgirnUs"
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
