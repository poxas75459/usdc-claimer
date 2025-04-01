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
    "4q8dfakr525fu4QpXQKj6YrwxupeyK9eLunKLrqtVT8nfHaxK2iH1cBuCHwAsPRejziivk4dcQDJkjZbLb4av59c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fXiPv9TZzUK1UKQiszER4nKutULFQhuKs2znePC8XxaQbv5x3x2RpGpY8PgW7jPwsLPoCJn9oiceTUvRGTEuaWm",
  "key1": "4tybSb2gcksEc4gpUSHc1mt6Rv9G61vvRRRQ1tfGYfbEhhFFJW1nFYyrcpD7Za7z4UMvkt5v7bW4QAMSeeuHCksR",
  "key2": "4pGgkH8kitc1F6ZKi1ZWCD7pptnQCviuo3zPxYGk7B77svJs6myaRkm3z3HTK8ZZrjNZqviPB1KbK5Z3ouDmSbiF",
  "key3": "534PAY7P7tFPTzaWN5jp8wmQr94VcYbnT4pyqB5ZPELbjmxPCZRF1x1XvP4T7CeNHj2ALHNHMVu8TtV5FZPwGciL",
  "key4": "5KGZzw9HKiNwEby2ssx27L2sveEGjvWKA9XMjJcpaUzcP1HXcWcd81jSwE4Uy4ijZLYcJoo6H62rHBvcxjvYr1yL",
  "key5": "2ySCVr9a1G6GzFwB7LkA62VspriEEhBQEd4fAtqhiFXk6N4jo5i75cbRntnrHkDuT5MhG8D4wAsABhMrZDPR8BoS",
  "key6": "3JBZ3wyEJUHD8bKTasaRuDX3AfBvMYgPzwwqdNhtbXcYVvWhD5UrRAVy2VG8HY7m1Cx7CAh6GKfUj4ss6xmxaFxk",
  "key7": "3bNmDNSGrPVW9s9PpkCVF5DiWFsqw54eDFjQW492MphCVMEmuNp3sfm4GXgSczGt2LhJ3Yki4L8w42bphdYKJftA",
  "key8": "4LF5LQyumzXG6icrU7aFergtdKNjKmwymwLxE753EQ9GkQdAfMFtEGzmLUB9ytVDZH9pNFJmvEQWmhJt3QLhTgk1",
  "key9": "34sUWzFYiuTMhgR8duiKxvufEzTa7YSEjLeE5wyddoCtPqWqSRx4p2PvzLvSE448LfHuAMUrhUEPeiYTJmjQdLbn",
  "key10": "4sZsPNctB47cPVDUfNf8egT7SfuUbT8BHAbRZCfaqmJbyYvpYwpbKVQUwyy66woT9urKSWjoKz4WaRYVj3Ev9ceo",
  "key11": "3x9gs72SjktJpCLXBFoLoyFY8MJb3QHbKWvg6X7XfZ4y1tavM5j3b3wMh4Citpbw2orr2idfrbkZQkFxQNwuHJaD",
  "key12": "4uTYbCBGvKdfMWjrXRTRLPyfKz4i4k1i81fHDcQRTXEghEWJiLNQamB3HAxutjqq8YzYjoMuugrkNEeC1Ui44JKH",
  "key13": "erKtHniGNRXoP9cJ9dnpwX711BReivn5r9CfLcsjszKADLwV5rHAuMR8dD6H9htH2UtimDz7LRdReR6F4BjVC3S",
  "key14": "rns6tA89MyCvtqKS21Pzt1zR2aK97LfDR9GpG9MuoBERMqNdqEQcsDgUHw7jvVp7Y4ayAa9rdgH9S796wQzjeHP",
  "key15": "i4cmKt1HwWtJBJu9HBZKGFp2FfjcF1fM5DzL5YQy6AuNUfq7KHtDUCXpRHfnwk3L1cxtRxYZJYtky5aPeVpZRAS",
  "key16": "kBMQj4V4aaaEjXPzS7ajFevRhQMd5T15JPgyHdDAnxVrZZ13zMa7NfnWyvekzuKB7Gm42x7D6w2Dzjj5jWPgbd8",
  "key17": "5SN1jMUrymZ76WBjvd1ELCLcbs24gub2tKBPEvN4j2tA4qDmAWScg7ecmUyvAo1Sx59GLqozMuRVTAxgKJCFQg5y",
  "key18": "2adh5Tahsd3zta4RBuL7kwxZVcxdKDmRY8hx88zqbmX7D4SwMCL84sbCyr3enAEiZJ6U3khPu2dfQPV634ymLysq",
  "key19": "aHYgonziGde5bGYAyu3KKzLHTVm6ksCFp41hGBrCccovmV9eAzPvXtQvYYhv8eMdd4SL2Wpc3BkNcW4S5KWNBuA",
  "key20": "5sx8nWHp7tgFsn1cd3B1VL5G4uRJQnyaUQVbEXJDWAqjAcjv8wTb8aHa1HgJZwUGY6p7aTRGiNNEybdj9Wb4a4Fh",
  "key21": "4FRD29zgseaW3RNFyEk73JBhCECJ9EBQqqdJb5VVBcFQuhhoZrK5BgVmgtr1Y56y4dby9AC1ZKe3GRWnvyNyBGe8",
  "key22": "55sQcUdhwRdDAF9kWuGNQjKzhd9uG4tuLVdwZNjLLsegFweN95NeNSH8zQ6rt6vt3oEj6mMkE7DcsHU9bjei5f1M",
  "key23": "5e2Tn8RvGoALjCyg8CaXYf4mVBYFj6DELVWD7e8QARoLyRKR3qvirJzWXH4pbUeZki5rDFZNxhEZzWepfy3RQf9u",
  "key24": "3mARasyFa62GCk6ScetnXCZwNBFXrxb9XuJqLDsHy12GG6fg3g3YzWzqpJZds33wPhfo1bau174wWRNFNU47RUZN",
  "key25": "e3AUQWXuT9FVvBEirghA4bggnwHUAPgsP7cwZkRkt6NGqfwo15yjf7h3Ag5xR2Hs1wr1Qz42haRW5eb5AUHWAYy",
  "key26": "4SKFBxrcCmGzLogfDykPiAVfXbgH6uBM5XTkYzmUCoS73hgmsJQQB2Gha4jcwg8kCktNBSVwQSK8LGJpRaRzwEx2",
  "key27": "4Mep9Kq4qbX2Z7fWY9szrst9SsvLgcKwMyGtcBZ5wm77AyaQsBYk65hCAz3NHf4p96FpnJ5DZM2GciprVu6L6dL8",
  "key28": "RxUL17e7LLjEkuwPrP4Pi89VkzLCKy2wBT6LTBeuJ8Z78nSxxUVcHxeEtNLhoQQX472yg9ZyaxUa8qKBxYeTS4L",
  "key29": "5fdTdtnss1BKqPqjRDg11kKUwXYd4U5A2aF1CJ26i2EWZonHAZqsp425Ko4iX8opMG8yVAPrDW7kVoXerKcdnFap",
  "key30": "4dJWqZM5DjHFuFS9vxiSaNUR8d4yvbHXQFgjccAVkjTQPc3zZSGNBHxDRip3ptDbKBhfGTeTsLpDAn5ZKCfBGnar",
  "key31": "3Bx2jdSTFC1DQyWgQK4spPaEvAgVb3FfPJedH1RGfuL4h7AjdzbJJT9kCZG9CTDJBMhrocJA8GUc1x7fP83FS4zk",
  "key32": "3Q719Fsips19GhzTL5gVJqCqqapPa4jhx9F3Q7sNR21yKBasZktB14JHFFnw8awTJb87W9kAtrm6SbL4jw2kMCqq",
  "key33": "2gu1YfmcEZiYkV2x1dyjrsA3HaMXVisD6hbiPFo1UthUmJVWQn5tXe7nyUfj2pe2Ft53xAMdBTzpbTVQXSybAH35",
  "key34": "2sN9Lrd4JMpVbEaYvhQdF8BWbZRMSWKkfks6bNCcUVKHGmTxhJcCntiexTWPvVRjzBN1paoipJj6PBcgqPLpzKzA",
  "key35": "4uzWsYwb5H3PGGFyeeCRivgTUSKVZBb5Vdq7hEgC4Fg4gF1wLAbtYBENukuRexbqAu9hmPsCedDYnSyvtHSgo5TK",
  "key36": "C81odh2ANML5J778FWdqpLpHwwwXpSUuk9Bue4Smhvhd91AvwnbWAJHUhuT2Sg7Xa8mvjgwmpArzbCsYjG1HD18"
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
