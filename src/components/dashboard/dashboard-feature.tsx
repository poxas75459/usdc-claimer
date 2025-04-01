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
    "47qYkYz9ueLW5wyqmAjb4j7KHfxwoCzrWBGmjhzjdtChwjZCRfdBafCNi3hAb9rxPQoKdQqXqPrKLNhX3aKN4nq9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gHzy1aENiyiRGyfyub3YyXoXaKu8qivQmJADaoNM8JB8jEm62nGEQMUR4A1y6BPzsyR7Frja1YL2S9n8Vv1eYU8",
  "key1": "2G2NZdDdgS2dMrtsiybGUB5AQcMArRoJzU6BYG1oWW6YwL6eE5mUVPW2Q8U7hr3VTNfS6tzjJNmTDH9jVNrVidLx",
  "key2": "5ZvL2EgPQM1fqeENWBmxUZhJsyxoiDeZKvVb1ixjUZ7jz3oVcvKjDhSVtFhqYysYuKtd6us88UUbSZXAVo2ManCp",
  "key3": "2CicBFxRCjXLrVCL8fdvhzhRsJ51JGyfiszDrHUoxhSkxZgKLdBHnXifLLzv44kFtHFH3bVJX1WjVJYECsr8uY1K",
  "key4": "2nRxZoMmePvkqAnuycAD9wFdAS8CVbXbthDk6Am1xigCErb78PqyytfzfY67DXW69yCpVeAE2cZUuFNPPpsf77nb",
  "key5": "45ua4W47y6KT9w9CZZpxH5ouhLrFFzY24bvkG2PedFirGKJ45Mzpx9ZitkuiAyahqvWsKnycq4Vj38NnECs78Xkp",
  "key6": "5uFEtpVtYyhtadQDzGfaC17VF3iFF28yBNsvndEu53VNKsMPK7M2YWAh2XEB2GwBEtDhwSg1Yu4iSGhU4kkLKZeF",
  "key7": "4MWPVjGnFyB8qUJUFB2rSB8UyG7Q597F1Cc1jiMuU6ZPtDGuNSUSugGvB1kr3E92982o6ZYo7HZ3xq59pV1bL1si",
  "key8": "2HeGyJ7ph3MZZQuBC6udJJz3y3E8YwGmKMAuLus4y9x6Ce5dKCuMPRAQiiCWg3as8MwjDRxYL3LaXUeFGHBFUFcf",
  "key9": "3FvuHz1PVsZRc2DzVZzTxU14REYv4Q7SB7ezK8TqcJn2AwFNm5cpND3y2388wu4PsvDPMm7s2AH3piNm4Hnoq8LM",
  "key10": "THZS2NyHiC5mD86mgNzUrTipZvGXC67tWer449bkKb54rAgWkcR3PmRBmAyBJXfDwd3oKUsmBydLW3md68SaFAG",
  "key11": "gtkwneq5etJMxHwgDEqxANTwjRcwD51bRnU8nLVYmDHzuzz7oxCZh3GJfnCjMx2miQkL2bmiFNHaGuWbdfNHG31",
  "key12": "2jndT6Nwsv4po58Hr5mMawqZjguqroP6s7nqbz584CFHjEpPh1g9QHpuS2B6UV9ibFczfDN4fhTEQzooZrTA6ALu",
  "key13": "5siapLKXrPWoeE21tCy1d3QhU1ccTyhq2szWgdTSD6P84sUEZjHYmpALB1JYDLWsbNQLhwVbZY3df4hwwSAack7z",
  "key14": "39KMyDjNEwHPUb2vKAbF9oVzcUQzUXY6uz12X4AeDcR5dgryB1rk3Nhadz2rLgMe9yhMR6a7dzuGcbqmJeGRbKNG",
  "key15": "4sHEPrSGH8wuSBYx4V53hDsTD7g8A25BX2bPdQdgaHbDe4nQEDo6xQSoJCYyVXuGP59UcQHJShw9gvwNdH2vkrRF",
  "key16": "3vy6bPB3wiTHiuRbCemTK7dh19Ckw6QtY7ZTLFSUfz8ZPHgBQeRbynpKB6ogQGqwxPtXByH81a29nguSyFBnyv5v",
  "key17": "2SzNwrE7BnEo9nfxjnXL3E6PJH9KqJWnKduHJzjP4XFv73zXiCzrLenhcZyxqLbLA8p2wEKm48XFJLEF6nr3SJY",
  "key18": "3hg4DYSo2dHCQhghpqGXdMuyddymEizmHu5GLy1cQN7MYUWtwHuvyT5kNrNvYhiAjRoPrMv5DtQEYmCMYvqNAvxg",
  "key19": "e2JAaHNSFwNHhuh3b28Hkm5FYhPyf7KAMkZtoRFtE9H1WAdb9BwfmM6ZAw5w9NpN8wkMYSvxAurYRTK34FTuZP5",
  "key20": "5LWJxeDJSjtuRY7ViEKhVL6EW4hBSGEpfW1Ms8VbNtVUPtPLMCxbtH189MQ9WMFH2Uk6Rqts5dJBDjiP6QoXwaHH",
  "key21": "4xNacU6mLHUFUXPFz1BSfpJAS8K7DR41RzAYK16S2FQbHEeG8mxZiJG9UBqQkDk1eA2JKYCcQmUn8rB3RnQ1TftR",
  "key22": "3bCcQedEsyqnugKYg4dmgK13BvQFZdMorwJhfiaUXTyd9pw9zqmdRzhuTWVEjczJGGvKWmKgRm1G5nzPJ5Z37KyK",
  "key23": "2WmwKbLThkfps6WbRJs3tZ3Xv7xnxgg853vBxSMbaBkdHQmjXPcm9DYjEVkzaWUGx4kNHMZ4XaKx4TC5WGMDsSLF",
  "key24": "w8dPBwxSunQKL9ihuDoT9KP1zEn2B472EHkJQWMN9MaErzTGSfkmkSmvKC5BuecoPGAq5xfAzBQCMmzH4beEG6x",
  "key25": "22SHkpwToH91UJPcsxKm4kRk5xHwng8NKwXxUYZRz24cfCUgpeVDiYUpEphX4cMXZmbT65Qe2F5sdhxpKEziGQSL",
  "key26": "5Lrp7BkSzs9fUzi8GPwzQG3pww65syyceEuUnxLyi8TgMFSNDrWqkYZyoQyAuRambToajmsXJ8Kh2qtFMwMWditD",
  "key27": "43tbn5fpfDaEWJbbAeG2pB2ZVYdZJJdhM9HEVmXvdxtdB1cMPgkuRLuXkWfc1KjhgzuV9Krw9E2742p7XXB2XLms",
  "key28": "4EBqeEojduyPXM9HYbaHkV7xV62naoTZ23b556acGWa9bbjkBSCCPW19FFzg344yzCWRBkGR22XECQ5Uz9H6fm7P",
  "key29": "6MnDXhStAzowRz86Tom4RUPp6NsWYMQmuKnd5vkHAk1jQY68jio56qy7ZR9xFgFDs5LDed8SCh4VdhFaizrVVr5",
  "key30": "2rdQRWJ7E8uALaRaEnh6PUYyjzAnRM3uK3HEns4RMR92etZKsJWpW87funiT4XJ8nbZAYbsP7iPgiv5a49hEtqXi",
  "key31": "3iq4FJ9XboTJPwDYJf7x7zPBmgJUfruzPBgSWQyKHG1M59tvJC7Xxx39xgzfpgystasVPn7GtWc8HuwbLwNyL8gA",
  "key32": "5YZ8QUkfEdzFpzKbxyo2fiYw4ojrL3pvYxai7cMs3UkpMF39CwZggN76N3WEk3jffqxZRq1MBEsaJg5rKVsdMFwA",
  "key33": "4MzRsuqt5F9PhQ6WxcQs1nEmcBgMFFtxWeZgugT4qEbATZGDDugqD6k3JSUontfejZtLTCb2z4njrYNX7sMKdqmZ",
  "key34": "4cj9rM2e5YiTnur7JLLYX7VkkhDnuZn2eqMrxfbPHfAthy2tAPWaiYD2Jp7PVPr8w4LMES5C5vUngfFn9rP9Xg3w",
  "key35": "4BWH1r33QRrJ6fnpVbqpT4sj3QEZZoCzmMKjQJUB4fYz2aeLK4VjBNNKMxzoJUArWtLc2rnDxPcx3GjftJFgMHM2",
  "key36": "2TvbjojzFSRw5ApuMN5uTCLkqmCeYyQbnnhQbgfLggmfYK1Lhm1p3Bf21H1f7TjXMBFXe1Sf62Pzewzt2hfyGwsG",
  "key37": "5ijqsYQeQiUBMsqKgYvBnBoT23UNmrYbPtJw4o3cARUtT2rzzKjokBd83caq8542WYhwE9CTdMm62zzWeQ5EkpPK",
  "key38": "4dcgR2dNyrh6D1du5AmwqjPf2P4TLgKbD4yDLkhxs5xGTijrMaWpzQhCZ9TQb5oZFZ8LZE56tZ74GmSoc1VGxj2B",
  "key39": "2CSqMcxromaMWp6ArTCZBzhdq5842LQ61KQDns5hQ3ZUGLhi8jFHvR7mSWJ9mHKtURBz38fKn6gGgtWbAZk22v7d",
  "key40": "Kgeg8JR3kE913LZggYNPg5RRiNbD7GQu66s5559XeAn7unH5jqYLA24TPDvuFbvmKYnB5qbC4vitgudPedLM3WL",
  "key41": "5demEdBv36vcXkEnQwQh9zL2g5xnAUCShyLrRnN1rLk5hGG7S5YBz5BP6fs3XQPtkoNozVJw1yT6KYHzhurnzgT3",
  "key42": "5sxC9PZ6gusyfGyE57UmwKkbKYYQHRQHz5rmSPajP66JzmfTSgZ2DkVAeTVtwjoVKMKLg6PP7stwHZKBTTKcgeWm",
  "key43": "2ENSibDAF79byprAewC6hZz2TSA6rbQD8aYtRpuf3AuG4EtPEmQrHqS1rmtrXDDTsYzJqmh8gbPZyxhcEc6D3n5W"
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
