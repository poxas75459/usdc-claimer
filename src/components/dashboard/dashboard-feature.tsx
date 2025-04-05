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
    "cBxTVUCqHKMLVUnmrL8ZJNdUBcwd4A2MaTX6WALtyuH75CFPLkeTCGgsQ47Y2g4DepUysPpLYCFVBPMe7dntHLK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bBnXZubsK1dtRWfTPjbxE5vGJonitxF3JgqDL7U9jFnhsBiyxQVCriV6SHfoDJpnaZrT8cD6NTmAbN4FjDey6EX",
  "key1": "5ztFSNEkokZBitLqVFSezWb27MkYHVYuNJCRmzxgEbfFm97b67ecMHsSzYkcBDqc2HAxU7x8GrcBcq18EZHaFW9",
  "key2": "YTXUbhaRMjbMv4ab28qu67VPP8PGHMVK2AbnzzT24fxz3k5iTNa3ndML8GEmdHnxaFyqfB5Ak8ESo1K7Heiq7fR",
  "key3": "426pKSoNC2VEwnbggkktDGJwCkUcYmuESdL7A4x7YrZb1RYSLmMGpnbKWfb4ZgTCooYEWytwZxciBngtcGi5hCN3",
  "key4": "3dfQhk26gzCrdSmE2eMGhVjdV7diCoorjb7hnq7Km5R1h4rpLzsn6THokp6ZhXU2h4nZjCyhtfWNTjf2mvcZKhwq",
  "key5": "YdL8sFmuRXvb2uvhmQg5z9qAQTfiPmPhkBLGo43kvxwjvZHjGQJSkX77FXTsXkTfGgHzU6t4fC3nuHdZkaYGUhN",
  "key6": "5EqbKQPFZKPg5UyrYKdNSRAdbYezrRozKjcfPnANMbPuEqjVFE8N8Am2rgHe8bJaxFqzUKCWhGC4W2q4KMCdPMTL",
  "key7": "2ZjV3uQ4esrU8dLx6yaygx1ZjevTbwrUJzq6brKTFoYvikoWncqgssGeCumxFJB4LVhgABmfyMFMVEDxbwBRx6Mz",
  "key8": "itqTWfWEqKy1iE3xNDxGR6wY3F755HYQg7E9wwf83tgMNmgCVdNhPAmgJRJK7ewD9WkooRKDeoiEqcejUqktGkS",
  "key9": "5AynsA4SJFYHT5kCMvs5g2NaShzow4yWhNxLHXPohxV5ZkxwFTjnQazPmZPrC3thKb8nZRN3XaxnTRr8EpUixJNz",
  "key10": "5kvtXkJZvSaBwo9a9mw49boMYV3uVgix2q58KBVQ8DvLnmA6nemMWnHwGt9ziyCdwiS9mWaxnvdurf3UpcR1aLst",
  "key11": "2rRh2WoUBYRwzgS3aYxdbyw6WYzqzDgPCsvbYcH3NCWvBrtXMCCyNwna3tTo8Ntr6HM97MjAZ4Qjx6ykTKD2RbUC",
  "key12": "48KcqivFgKN6ambXhFQ9pvGy785ig7NpeHV1umLCBktGg38Y5JRbLK5xZgJ7x6xVWdakTVEbU3qe1RmJGCH5VwdW",
  "key13": "2v6i96rkGAyNSTJ4SpRG9xQecfec4LMndBqryYVdXvro1DNS6BGu1zTXHvdcSafngFgAkigaViwBgg57S9FsDnVq",
  "key14": "37kVAJXgR3BNTbN5wWFondNrU9feVdoFke3jsrZ82vV2WuydGXs8jpqKxi5kSENbRFwQNCTgNXUms2S5BfSEuLNX",
  "key15": "3k7t8Z4LSGroJQjdoAckxq5mjvXSrgY3j9gUCrUgT34mZy59YaGXuGXv52DNFDmNc4oGaVjxEfSkjMpvzaLnGbVN",
  "key16": "VNxdCmnDRAFWre2ca79Cv1kQ8fKeCN52pJpk7qHKS3i4xPZRzjrpAEnfFzY6UtKqPsWqSDUjVkztZ48hTnDisdH",
  "key17": "2FUVTJkNz1RPXnXwKPJYXiXovwjs8HjoFUAcFF8FUN7N7t2bR5ZA7kFYq1n3aQZgwrZE3aZpfiuMUnRXuGYnRxTP",
  "key18": "21pkkVDrs7PNxZ4gDHvenKHUJPFAv8W8G8ZiM87nzGnL2EdACCBMKwhm4SJ2Q6Setgbn3e6Ju7HFMuRFxpJqkWvo",
  "key19": "5428cnyfPMNVV1GuJyo2KTtTsH5RRNpP8nBYHxQxjRLoj4FcSdC6WGosRYgmiyKXFHmANLDwGwsy2FondjyYWELY",
  "key20": "47PS2MxdXNPtfMTDjPPKcmTmqvN7dVThaYUQEKwyoP4S39xjNpZW6oKp2m9815uFXPjNzwyk69RAQcAxsBZWK8hh",
  "key21": "5cvrcLM7kNLMZzLeU34PwwYanEyEZpXW6wbJ4q4q4uVFciTGr9RqTvD3awwKo1pBCUsbLx9qVVXVGos2ATXnLXbi",
  "key22": "CLQNqXxKzdoe5MVhmVkiQxAkgUrnegwq4eYxPzBrXBsxFVFaCyQqvscQcocgzr2Bm2jL2QsKunMQZkf4tnyngZ7",
  "key23": "5XxXZU5puQYfkDSkuWGtquUVM4FuwshWumaip5tPbT7aACNh7AfxpZ617dm4mrWvm1mhuoWFwh5ku8dge27sdhve",
  "key24": "2NehABsRH3zzoZA8ohMf9NmxVLpuhA4iVhL3ThB3149oBg8rbj6SUyJLPHcUGzHkSpw3esYcLigtmUKh2tGFWrEd",
  "key25": "e7gTYwvyTekWV4b5wiKFAMYUTzBWXdZceyFHxBNxJtqU5wa7TbsYAxwFhteZsVSLzuxtHdQcbgf1mMDVSQtr5Ap",
  "key26": "2RaTZou5Hxu8dKe5ki15hphUoauvy951iVQRQKckjPFB1jb4UVCqPWGgEwdfyF3LUBsQTdSXgVnWwq8jEdSfSGxJ",
  "key27": "2hoeGqU4FZcgb1yCM3vzsqyxgjd8Y6QcvBnoxgwtdd44DE3rrhadj9qsUojc4yaau5S3eSqSR2LV7fGGrbamUjzp",
  "key28": "2chmzKz9MRa3sneM1ZMQ7XajdAFisk5vAJ8PpGREtbibxeFuGWrFYCoU8A4N2jaBWPs1o8XYLT9ytSdmgUASB76Q",
  "key29": "5Lu4kYPvCBW73ZTVS41dBemw42NtMYM65v5NeoJWR1kUgWpNYpsfyGfcyKC543E6XEtEdqYMBSYuVCB3zK7MdBs1",
  "key30": "4qngD268iZWddmAKTYe6hjSpgiRbAKeMgVacuTqt6v3XPVrCR2fM2sHARssAZhqzsmCRPkhssthu1gavJ9Ac6RCB",
  "key31": "LiQW7jee1HxVc7gzvz37dSuF444GQivnA2PXRo1KvQMR11wunZGAuem2WLZxki5vFYNxzHc713dRhRpYbzPKdfW",
  "key32": "4QZ4r1vfwxuLEy7xwyMWkjBSzGaemqWcshLMBEcEMhDtAfoJoXNkZCyrKDmzUAojVy2yaGqFQ7GkLKTn53n5bUeH",
  "key33": "67i5Xuep8W5ABzGwexcX2WodJ1R1EVXgMhBH55dRREFEGBSoZStw9cET1E8yLcAw1XguFyEd9U3jfo13ZFA5JmXN",
  "key34": "3KkEQHRohg8z9DQfvk9SBnmxfv1P18AQVAuwHcTMiA2dvuLDvr3dnUM5UFVtWCrahGsso48yEFjQfjxTCcfmhVnK",
  "key35": "4gDfHHbgg5VBXATTVckdaPhEutbwQQma85cGAYnBPpwJrdBRYYPY6ePrYy3u8UL9GhcMYNtcRVJAopgPfbXSMqQW",
  "key36": "27dSVDXgSXjcnUDkeRzw1jZKWTNYqEPKAp1UaKFWw28mJmyH2pkUtFFQR6mzhJHB4EacyeDkcH7sbnZYLA1nJVgx",
  "key37": "276v97mReiwkh5Gcs36VyoBEbkXetMrNz1nKyS5sJEW1yZoW1V4Thd9E8eqqUu4bNUttwib1vrTCzMc4f1JcTexk",
  "key38": "4pAQwh8h24hiveFjTaP5k4U7dbiCHUJVextmmZL6dWpHAAoujpbjzK9LioQEdSgBpnU1rL5yvsPsqZar4oPMvWVo",
  "key39": "4KGFicGZnywa88bfpkEhMFBiSVGruDJq3KAFxT7BWaKxHmLZY6QMxqjGEy8y3ehFhjyDm46193nYzM4FPkcAvaXG",
  "key40": "vD8pCKCqEjzTesk8J6hFGHbFvmmVgNwsa6Szhvo6Zi95G7vuQXMSL5fdX8cDLB3wqaXrWNwwg6Q3VyLfNwGv2U1",
  "key41": "52wMww1uZ8Ntfxiq7dP7uTDr19Jrp8eztFqGPGXGE2HVPB8gU3QVpZrNriJ4q3poNTf2rQxr4dYpgoQzcMEUXEqz",
  "key42": "5JkjdKYxKTKb5amohjvjfXa3fyemWNkZk1h9McRFGARuiWZHCHznrQT2U4CjprZgajN6R4nzaAAZ1oLgTVaUioP",
  "key43": "34fm2HSGtGDuZQekgXRaGBCCw5D8CfozGYybaxm2wnwSS9sMmELh6om7vvpTqKcCXJjadZqvDhH5uzjBc9vMjp3K"
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
