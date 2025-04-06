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
    "aGKeRTr8Vgr4dh73KgZMdT6x61tjARguwwHiqZnKZPGVZ6MU2sJ4km6d58F18Ge8Gfz7TFtFBEACykTJJvzKmmw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "94qa2qzZLC7ci4xV43ASfvEBS5awss4pfd7VQpZbBSoiXidvWtXYYNLsnm4uaUiDavpUy25n6c2SF5qMcToPuWY",
  "key1": "3treS9ZD5TJychYkJXxVW6KgeQ2YRwtKsf5zkFWAbnkARjRZrZgh3FMM8ZcuhhN5e94YAw3fLMy1brGVpakpd5q9",
  "key2": "56XPU46m4tpa7k4ghuD5o2nxmncTRNDGhVR2NeWYbJ93SwhnnsYqgsP9efaqig5VFWyjJiqopbFUhcH9Jt8tgZcB",
  "key3": "MEH6ArXwmMxqWWdPbcMKVHWVbnaPdDhwvF6CDNhjbtGdBaVXaEck3Cv5suq9BDAdQxd8K37L76Vx8deoKap34ox",
  "key4": "64gY8B9tFpA2h91CLs8VpnUkGHhVZkAgVX8zxaUnba1Qz7NNZFRiqTwWpXpAmSLfCqpPH6dqxyRiQ4VBtmbvbZpP",
  "key5": "5sQFgEpyFzv1MHikVbsJFuhnmLFzJLCPrq125K2Ah8vyYcKCLkWvMaGcorUPYCDRMCMGVnNipQsNaAqdHqnYZonp",
  "key6": "4ZHD1eUh37PQrzbdtA4tQ1UaPKRQrGQ4DemWLv5zyuQqLVHa699myEwVptWF7b6t8D4cFiQZU9hss71qm8vK453A",
  "key7": "5bdAAktoeKw4m4D73wQSyPgVVT4c5iZaG5t7CmzcKp4toyFdoMat5hqUT2FQhu1pGLUsDETUNf6Fv1wTiZSuh8vS",
  "key8": "5HFif2JDksxYa9BjGCgCNoLwMBrhkPB3smpfzS6zFRcFGihFQ7HgDprHRhu5ha5UAVpjomNCPSwHbZQSE1CPcjQJ",
  "key9": "5Ekzesm6asmzef4s6BAgHj7kHUKwMjYtpoxFCcZ9abWhZXsMnCBTs2GKz2oJFGqAg7yfwRh5echQsjcP34koRn5T",
  "key10": "5MijF4X6pGvqHVfhbeBFC6d3ZAtsX9eW6doF2egWKpEYnjHSt596DXPh1MMkjkqrrfVuCtX9yM1Tn3skPLTftuoG",
  "key11": "4FtSurizwDA4dugDQoksHrFkYPxE7uBBiAeFGXDPyRutfkKXDLBXYHocvUQe1iVLi6kY4C2iHDPcPEMaUg6gfFAE",
  "key12": "5oLYEVGX9QZHueWs4J8TZ7Kp7id23MpXNWK4ChsFz6S7qfYwJqkBxYzh2Ym3sGRUwrJeWpFrnm6YeD7npyVszhgC",
  "key13": "5R4UrhPbUsezFwS6trRT8YWhcJVheuYMr8bfvR2tXbasZ5yEVvurFyJosoasTCPfyZghL1MVvtCu6yx51urUvMWk",
  "key14": "M3CDY7iKf87eAiCYj1zF3PF2BZZ8zxgSz5y7tfQKK11T8B2ZmhkETVSovsGwLmQNS3E8d6G8LeEyV2h46mdEECk",
  "key15": "2B4HPaAWAV3HFBPj8duSVpeeqBZgQoH4zpDAT7bt5cNkdQs6K29DE3fmySYsacmbt964mE8cpRhuRpqSJ2kz8W5E",
  "key16": "4C5HrY4SBvzS3CZ6GYyNuQgoGMMxPXtoQjJ4NSUmvxkCKnX9tjFfqPqpxes3wpUhgHqAw4PLRuwaNxDwrDVhWXqN",
  "key17": "3XnTB7XiUj6h9FJxcZivKGEgyhe5ggS3h7Pz2JxucFtKr4jM9hibanF2Ei5mLpnqCDWAr4wfRrfdNbvm4FihH43c",
  "key18": "25MHHDqirxuwezAphZyDUrCytbQpe5JFZ4YXkKRgvyu6casxeSubd8PGpF6WjmVafoP8erMZYz5rxJ9WbLywJVEc",
  "key19": "5jFqdz2txjKPKBLHRe9isZB1rrW9fXhfFYDbcNDQVHTkQRK6a7T9bdyBoZViD8uYwZfsaDRLZbmG9oQra1RAsupX",
  "key20": "2Ak38ZJoZmeBNT5eeEKRdhURuZ5XHvhcX6J3R58fTmVezN6RsVMG591QzwPD5tpuAeSs33AhC8SyhPT1Q2jWGw9d",
  "key21": "VMESBCtkp2RnmsnX6LkNSXS5cpvSB7o9Pyt3Gy2KnTgCFJjNiSo1oX1Z8C3AypWLxHzQcciGyBznNWwBmQxEHvL",
  "key22": "5SfE9iB1BHSLWCy5MGJnvWeHcRkLjNA1waJi2nqUKFrk2SUvq1sdLC6ABVX7DY1ysvsVBkyBgvt7iBagrAHYpi3X",
  "key23": "51CU2fgRXEouHTouyZ2ov7Aps3MuBGCUKcZHxNuoPjwRmMZCFy74jtfHSjJ1rWdDaNDjEhKE5PGAwSKqyj5zK28q",
  "key24": "3fe9ttAEExyzLi8VyQ4r4xSCAdiUPduq1jKCAGengYL54YFKQHFiu8K1BFqhBDeFnP3T6cC8GqaSGmGQpjQpjwNA",
  "key25": "2VQx8sfgEjBGNPFsj2s1DhGY8MMj75Dobe7GQNaD6NgHCDTXtu3TLSe5Z3sp7fn6sRqPBH7cqFCRMqHXF7E6w2zh",
  "key26": "3NSjq5AV1BXfPYNa9grtm17bRtTj55yj6qmvj4Zzd481pPEwAmahvMmc5hd6M5GWP2b8RMF2NvC7Df94VHd9g7HK",
  "key27": "4Jc9kKHgzVbbBRJF55Na7PZEMo7KtH5LKFgy32TgAsnSYo7j9XoejEjTt62MEjedwQMjmW4Nnc2sUKGgLXvKJSyQ",
  "key28": "3ZptgXv4ssL53PqMwFAtM485dCvi9NC3ZeRMn8AXD2qxYye5MXYCB7oumg9FwW5mLukAsdDYEGf8jGPPFSjjqcaK",
  "key29": "2BsfSWQDfJ7fwP9RqNv9t7Jbk8vV1toEL6j1bnxr6pPjxxjdYYby1izj2Uk8u863P8YERj2ksoYqaWsStTBndSkk",
  "key30": "3xxQp7vMiSYFLSBJFfAkzGiNJpbAhUXwnt3ne1SiGdPJWMvzWBx5ojwgKy5CYcDdmYuJ4cGwmDLZJrVdh8RcLjxL",
  "key31": "51Cb2QQkaRD8MW6zM1JUw3UrKxDrAWq9Yrvyb93ga1aYoW9UsLyYPwkt8DvxS4KAe7jK6qPu5xTpumaT6G6WHRgE",
  "key32": "5MjteXEgpsc3og6DVsvSvUJU5YcaSG6fAfujDw8bJNxtoDmoung3eNWMpZHsxAJVwHSJcW5B1vfs5Rk8ZQbuugai",
  "key33": "RJBTMLzA42sGuNnZSSNXZmK6uoWyQqAdLUDwQXCYASfRrSA23HK2dzbyD2MZHBmXfAkkbi6ToyfGqdqXuCbd8AG",
  "key34": "58NkRe2nC18yAcNcFdETHpwPoktiHiXacxitrdCC7CM8RKhWbrsaidaQfx7P5TzCzTbQd8aXVtRCHXtjgWkhuwmw",
  "key35": "27vvAVRwjsXR9bsjCe28M7JPvRUbmQLAvas8jFZrEfarbBk3dVbpNDiYvKWhous1qRLwwFWjH1v4DiDihRsuhEgd",
  "key36": "4zScJ7tQ39jv6NCvWTGyQGtkjaEfR6dPxwkZD8v8S9aFFFD7xMx95qgtWD4XnFmeEmhA8MHmFv8EX7jNBSiaAgWr",
  "key37": "2LDpKvZ3AyET1a9Yx6dLG4Tc9YFnHN6k6tj5gzSgESVmqL4gjwA5pHzHyq9UUZk5cr9Ac4R81awweKJd4apQCLgs",
  "key38": "25rnq25iysZ9n3L8conBzmup5SNeu22euWSXwZUAirzRWU5aNDVZhkR7MJox93m9SckFRMHY6L8x9TxDDp2ESYjg",
  "key39": "E8znDKVuTDx88k2F2VRkRXWCP9ZqEc4s53cHk1MuJR37KJ12gSUFwgVbsk4MYpYWctNMztptP7BnjWDffqTZxGE",
  "key40": "3rMHFRdRahQQP35gYPA8jyGs6LKfjoE8qgyxPxrhtT9RACyLnW6Ez7EUUGNwQhdbAMzR2PabCY4FhRCeNZmU1d76",
  "key41": "5zdCBk4mwe6qoq2iHCyK7F8pNfPYjs6bPgqH7e6aaUYEX11SBgEf6GpNNEvmhSkmij9J1AdX5svU5W4wnv3YA4hm",
  "key42": "XCqFASJSo8cwqivpAdf8XLcMnXWkQe5kED7ukMmzq38i8bC7NRrc4tHCfKidZmNzLJxeaZRTTnFnUKf4GPhrS7u",
  "key43": "Wq66iYYv5DXTAqVgBmEtKwhvTva3XxZ4hN5qE6cVmGPQFhsH92rnJSoBRjqZ1zEze6CCEFvrBhBw8q5XCo6eCUN",
  "key44": "5rp8CVG1Qv3uMPUKZwQM6ntiNyZbLGY6fF5qTkSsNtJx45rsfmDy1ARqmiYtc8ngNiHGfP9BWZ2UoZqjtDa7FGGh",
  "key45": "2LNPq9gRau2QVQHSWDatcwZJosD4hJisYpeb4azgotsNbUoPSeiqe1ZUkw32BuczRXpf2zDqEiLqu8gv5Fd2FuPw",
  "key46": "2hbco8eLXMngsWvf5rVr3QaoUS3GuDMUrGXpVGFiyHBc5MvCH8gH9NcrcofWMEzJXrs8nkRzEjhirKZ7mUQMw4V5",
  "key47": "AUuhnUUUUoX1xue1XVZXcUAM3MqGdEMzjBUj4AkkSmhrAvYg5ABzDtA8FHrBHh6Rk3NJTbSBgw4CvD2TVVMa2cb",
  "key48": "3EpFEeHfXTEinMfqLcdv2QemoZCBpNtoicQmqaeBG7NwU3FMkBmyC1PGwtTgPbwCERYGGGhvaXtCJhvfZDaMGfYV",
  "key49": "67azFN8EkF3AbXJHMe7pe4QzMmCQziiVoqJjiaJFjDCTTMMMWfBvzCVfoqh5JgmuxAHEgJ29Pn7i1NnQ9CTgUJhN"
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
