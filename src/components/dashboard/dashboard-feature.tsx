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
    "5CdYG7TKC8ApUCQnZhvDxJm2GuwFsiNgXUEGBkQ6ygcnbnyYcARXmEAKLCct7Dbp3dKmSXe5kmeLGhkwXExw1Yyu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7bEcWc9TXngpDE2ZivKPR7JyKFts54rG3aJHtZaSWgHWuAUG7oqz5ASfqVEAVCPt66gexPEqKWB2Zuns2zqg9uN",
  "key1": "51eiYWx8MsZSrKrY7kaJVbZLfu7KyvXiy9pHXugh6ozCBSUmeF9qRQWjjEKx3Pg7Uez9xbkEJYN8jETsG2EVEqMn",
  "key2": "3SPLQHZdB6knm4rgYySFiN6fG79GJ7X58yx64aedGC7chCktAWeLamaVjLNX6s5njzvt9CJNb5c4YTemJe1HdPWM",
  "key3": "4f3YXieqcSEYZ1nBi7jkGmwDNVP1CpV31eBWkcox6qp4QjvrP8y8UGTNdwNiFzn7Za84Wg2J47bKFvCjvWcawAUJ",
  "key4": "Y8CqFQQXJ2HYyh8JVU5MivvFGAbrGaDq2yWpmw8k4W52UCBimVJGMkKJRWhxk7tx6DQNu6Aj8EdyLQsNqEhVJTu",
  "key5": "274cRpi68iDLqKkpYsdKgZTENAykKSWDhu1o59TJZPRs4u6RmJKWoVGZv79PZL8nT2Fw6xF8YHhfCoexMjoGUPx9",
  "key6": "4AyKfve4LrttR93uVw9JxpwkPGY1N2btsmVjrZzzL6sp2X4WFh1qkvmSchpMee6jXUkDpjX7zCLgq5yaRT49aXDq",
  "key7": "3KWN7FUr3KYqidnKrGB3kKZbBxsVXND4AXu9c1Bt8rZSGS7kQm8x7ppe1k3Fw91BR7M4SeJMSC6eh5umJyfZJU89",
  "key8": "4Re974bkzKgJ8q9LHSoCh6XeD6vhapvvowiy8194nBaHfEMCG9KipoCyXBgG2eSDhfqq6jjrHMBhuTzQ25HAhQj3",
  "key9": "5cx6gWvU1LrmFeFFUB8MCXpdrMJf3pfxQCYGaJjDAuTsaaopEcaWgMAhjbR7sGy1igZyRRoMoCFP3Wba4y6MHSNw",
  "key10": "2uoSYTuvKzJjLJcmicw74YypSLoq7J4QevnksyRKe2x3Uopi7zJzW1xBU1fvBM6C8zCeDf3SyRnR6ev4dDGy9ABi",
  "key11": "33scBURTg4hC9u9c9ETGKZvQcCfvK6MbumucKWCYLxwjwEiB9FYGNFLT7eLBipfBjezZQn3Ut7K28RxcbFkhDVmy",
  "key12": "2jNnG8F4ZP3mBgLi4VDxpSt3tC1BzAsZpBwJGBfN7LqWc56CCzA21o57L6D89mu7NSnKFmN5DHWn2jakmYP9bgB7",
  "key13": "4GaJvfwu5DZDfTCsSaaFuEWgCuKprb7GvKTdCz1ebdVLKMNULS6eV1YdDVQqeDoxwqTqP6RfLBX217hUycsh9JFT",
  "key14": "5nWJt4v2s3bL3UmLuvg8ErenwjizcWHMtfHUJWxhfs1fYHguBmoXnEop9afEQzye6q36W2D4JYb2msUMMKGr1byx",
  "key15": "47ty86hfvVfoy6Vsr28tLP1fMMmcCVTiiRY2bCZmr2zznZXznkjybW1feFu4L65aPavA4LTZSVz78JyTsKuN53LY",
  "key16": "3ZnAjyK51gfuKRtPpvSi3VSNRE2oiWULappzTj2czAvYS1zPNATBB2k3CTnEhdJueZQ6hC4nwG9ttWjLYQ5gq14",
  "key17": "9jfsKkUSwn418LZKaTwzJaP9cyadVYJjL8W6SR8RBu7KsFSv1BqFGCkXQZYHW8AUCXkPxZ3ju8LzMGP3bqzMNB4",
  "key18": "C6ihKdrtmagEQG26sr8dmE1BVRCGj87xNsJr6urt3fT1PDxGwsSpJVd5obedyy9sievYs9X2zHRjoBzP6rr3jr3",
  "key19": "2dUfU5S7xGaUtuA8CPPdn8T5TWshtpADSTFyD7AucZhbeho6aMUupb2GmLwLguNTnveWDbQnnS88pwibPYRaeusu",
  "key20": "5XyDwPVKiNxjhh8YLND3KYxuxPbeCNgrcBYHw1DHMT1irgUcgB1KdLkNjRHRAdS8wuj7R9FLiRDBwxfUVzgFWjW7",
  "key21": "39f7frrveH3wyT6QRJbGGMtaPeGxvtK94LLbqaZj4Nu1gVjzDxTviXiB2cbUZsbbMnAhw2UHhwT73uvKC5V54QBv",
  "key22": "8boNoykZUBLdkSHrqVjvVkuLVpdWSZ1ribV8jTDnDsS8JANsLPqdQZUGkBTQHgcAuxtcAfqS7onyzn3Ckh1Zfj3",
  "key23": "66h61ccEtRnisRo5o3byNDTEVV56eg1JbcBSMn2fhsWDJ9SGV1zcJAZj5UKvNEsKGBiyJLdAn9ciAZBGAfuoGPwJ",
  "key24": "5BF6mVFqixDFfTDrEq493H9LUz1SiK9jJjkGF6W6LDWKZMiN6nz3HGvX8yKfXPaB1PfovWzEDbaZsycfTH4WPnf9",
  "key25": "3Dbc2KPvAdSE2BTnJjJPXLmDnEvFMVrZ1DRV1ETFjoLP1SUbS3a8Nray7v7Rid4oNa13yoGsj1j2GYCLrY3jmJBF",
  "key26": "4kPvhFarP7sEjYpEB93SvenKeQid4WtienasYFkJZiwS8FphdZcFZWn7mR1kBQbXuey2AisKZzj6h24gKHdY4o7G",
  "key27": "4wTYjn3ncdSbhCUyCiLFkESXWjagUXt6MiB7mHCAdaGUnEC1Vq3mMEtmsTZeCJsyo14ccBMT95hqewwLfJ4nFyX4",
  "key28": "23de2aKPTTm1HskoHwUF4Qa13nu3VwW9NVdFn53bdQYoQDmXKsx41pQ7E3fqxdrDQpAtiyiWy7QxyRFp96Szz9Kc",
  "key29": "c8zrkpMkJzt6kSbe24dQqvYEHueEb56Ferpg5y9pc4ebeNVwXt5MXgCWpY71M7Kdef9kEUTgcCpdy93E1pt3uRv",
  "key30": "3uzFv1athixoKqPQ6AGKy1yzvDVcgbw9nc8Bo4zwSdwfXSTotBHNzFXLQanDungUL15SmjzkAoYqBqtWXUjp1AMW",
  "key31": "4tCJp5dYEvzgDTxcovwJTU3L8re3tsbvjKJAsXzfeA4uTuDKee1vZfeT5YoYY54XQDgNRMUxKZ6RDjWCja6Xsif4",
  "key32": "639PoUxoA3sjqEKppXeN7QdrB2KDQXFpHPmSLpAMsb51E8hUqtBJ3BTpSsronk3H47ZNuUqHbfhFnb5iyJuV7JEx",
  "key33": "5srwurfDF7LEn9zF5k3NeikFYSjfACTdZT8DZptRAysxgjWTpXpk9GtCdMmn7MzacnjR1ewcNpUBWPngLGudAPVw",
  "key34": "KfuSe6AFZqvdX3H3jgrozL4qVLcu24eLqUCBivuhZ5fThgJ95K2sFEjNp3dvnABwXTbUwM5ZoxpEWEPKcKHXh7b",
  "key35": "wLUH9GBL4R6tLr734BUKGn1kfNEpYKQ9Xj6hrayDvvCaygX21B4s5h99R19YA9RuRzHv91xD4ABZYzLMDv3YVTb",
  "key36": "4cq1QKnsy1rYe6EdxGs6EV4UH3zrehxhkByzrTQEfjJ8ZfRamhaWqjhAoe5oxsrvLdLQqxBHcuxGnwJe5ufKNzKd",
  "key37": "5RKvnGAJnLDzXLkSHvaWKZUMgp52V3iegJk7zXAETkJbNiJsiXx3WfThPEwP1CF3aCNuWL2LmVK6fHxPfSzAmKcv",
  "key38": "2S3EE2F9w96B4FykXkS7Fd9oy3x6MgwSsKYYhodQJrtU17nWSY56obz2X654Nii27o2zwsroyDcRNWS4rwcEEHRC"
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
