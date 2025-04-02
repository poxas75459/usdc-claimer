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
    "4wpBuUwaxEYgiFmgiBZLZSCBL3mpUJWgQJ465ppAsLo5tHH2H2x5bABECVFnccasNnuK1SPF9EzeHwUbHMwBXhPj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yqkXB76BJ1wmG5cSmm2shZvwoSMEFj22s7X5bs9CxTe59Qkze69TMhRpnYQjXsumrLbNW9bQpGTa6H3JurenTxF",
  "key1": "h9Hxsv49SkTNVRBSghkdgKExRW3T1wcjPtQ8MEZ6NnzhE3jdP1vvgEZvyTKp4N5XupoYEF9kiGw8TUw7W5fGswg",
  "key2": "5eYRqxQ7SvhFseNo2FgsQTNZahCnwFTZuSeaF6VvY4YoGdbu2sG1JbDXKqt3SqaWYA1ZseQB8xybesfG6vbJrjPQ",
  "key3": "JZtKuuse4uyMwxkxF6grFDt5vzTvQ8BgMobinyp5xjoi55LVfRPQpaLYaJv6Tgd5QzexJowcFN2WEtv8kHxLuJQ",
  "key4": "5aWBqtsgTu7mbjqzVsfS1faWhjYtQZzwLJLG9BSZetZYL3zVA2a5rppnvvKLAuyJLS1DFaLbkDLU4EnVfk9ESxQ3",
  "key5": "3Du7VE2LXUMJ3faBHZu9wcnhSsTeZene5WypUT9hrmUcNxVFrdP2YMFGEHt1ocWJ4bZBDqg7XVR8GUkzX3ofQVme",
  "key6": "JTHa1oHpU9f6XCJWx24mZYgASmbWDRrPyA13vmH4XDkh8kHCHCDsmTjDst5iQ4pfFKJEmgAAC181q4T5DFnY6PG",
  "key7": "36k7HpYAd63P72fDDzmgzc2z1TyJ1KY4LwGV6ST431A2H2W5tkkxMUraDeiethdHqmcimABHTEzZvVvrSntbmhJB",
  "key8": "5ddrf1DLRQcSfjQZYxDTFXXxanqWkxnpCqbXHzMRexhExgThXfBTi3zmWqbQmEwwU3z9uJXUZKXFXQpQZfTkpuHj",
  "key9": "Addk6UJRRMRNXdYgVUbd6zLgHzsD8fFUj6paiUfbLAtUSKhHhw8oRwkTP4d8zwZUsk2Vgi3SyzNJZgxxNfUt5gs",
  "key10": "3i3TXuchmSAgVFLQg9JmhQXEgLdTaSMvghvoYDwmeeEpjYDexZQ8bPAt78TEXZS2G3hjpdFvG5JpihoG3iak4s8o",
  "key11": "pTB8hr4aTrAkoxrYvExin1FRV8aocn6udeLboUK8sLS5AdPyptRqFMBhrwzFPDUQsekLPUKcW5Ax8EUY6ftsZzq",
  "key12": "3TpVYgRHV36nLqJJVrw8XqpGzKCepJYrSw4nmQ2G5d1DyhsihB7PvYt3JWjWmd5uYZf6eiWLL4JwQKn7xCQhpctt",
  "key13": "65VH6i9WCpGDs5DWKHtZaWT37CRcVPnpCLyN92FPeoUCbtEJP1S6ZxHo2L6YteFsQ1hXfTNZJwGR96TMLhZMUEKT",
  "key14": "4732QHzPbijP5EiZrXCBy2NQB9Kuy28Bdd8rcWJfsyfKusiYfTsUfJchmFxTkzXUQqwLgcgAmMQVWnb2teXWW6uf",
  "key15": "5tML3yde6NNzfPVzfZEB7tEEkcYsVojNb85hnPJjUQt3DdR3Po9V9NKNuuPpvMNFCR1dTNrs4sb8UkDqGiFkhd6m",
  "key16": "4GTuy4j8v8irN7eS47zgv6sEHMH6tVPdiBx3wcHdhVZgV6Hqt43GcMFwLSAUzR351zh1twvVbYB2ExUNfXhc9u24",
  "key17": "4KpBvpnHbJxzNdGvjvuQS9vG6ashKt6npfLpmC2zaj68scHPgVCX4rtMg473bgvAnZ5Yqi1ttifXiEv1v8o3zvm4",
  "key18": "5Jmb794v9oXWusBCV66gTi42pywKBc92NyyfSNb7Z7c2DpnAzCbfHQDjB2XESNgbuz5MkkfWJq3YpdevmQ4WZd1M",
  "key19": "knmwba6ByvNV1DuzvVyVk3VAii6WddKeCDD6fwb35QrvqF2E39rJqcPb4bwWaqrBEzU9BE688Ak8jgscTtKxmJk",
  "key20": "3DHAtvhU1pPL9wZV9phhvHsSFT2gsLnFTUnrwLp6tspMfn1fdGxfRZqcRMnrh41ZcDnVMfvXubze3zyQPwuWFkRV",
  "key21": "2s51fZWVw4etxqBTvB6bfW1bKfp6LMvS9rFYxRw5qQFZPhacHNaSnLGAH6MQsiWFNgWXVwf4jikaFojUCH7ARNr6",
  "key22": "3YepB8WK5FfsmiuvNBestnST7xWY3uGtr4MduLon6LT39KrNH5cwcSkX54HWMMsPWFfyCs2agovXS4sMF1XtXBtW",
  "key23": "2CRTwrnUfj7Ym399EfKyhN1f63viWhBKpKP1oWf4esMdBRSXzsoqSDbN9VqXCd8ZFUmkHknKkv7ZXyRvVZiyCg1p",
  "key24": "3ymhrTz2KTqWdVgkLpgxe5e6WwWHbR5QaQyhZgn33XDFKBWrhGtzZM1kgjXAkPXXvkGf5xHyrkhWAVKqdpRHBtvG",
  "key25": "5sRMh8HfGbHAUgWHUBHbwd7syVaskBQrTjLoLuwyoA4ubAu246uQ2rcXHh6ZgfaCzEd6Awrr8WpbZBHQiTSjjoYU",
  "key26": "2NSs2MRpcFZn2ERzVdgmQ3gfXyBZ7VtiM2aQjg6jatCF2LkaHR9UyJbZZCWxW5qRaurwirz4tRamGW9YFvbMtwik",
  "key27": "2adKm4btAN98vunqJu6VXnatmnjgNEH2twb6qs6Mwwn2fUfmxShTBccg1dqvcUvaazavim7FHGYDWhdtACz4SELh",
  "key28": "576b4nhSEGWy47wjUXdpqeKtRcWRCpEvoPfqSo3KfrBTASEiUA8LEzZ9vB1PyvV3cNnvQRnkMHDyRX3sBdDsxZvU",
  "key29": "222v71ZesSJLZyvJkNGPe5C6qHsxqhbJPQyqu2hHwMGrWK9xxeUxk7DAnJkUby7Qthp9ebd41VXBYkw8AcWTTtoX",
  "key30": "2MgwWGpt2gt5ocBhLyqz4C1y18MY6QZovNXFfKWLZXvc4xEdVH8eG6BKhGgkoVL5CeZyuV3HF8N2qyjg3Uhv8LqV",
  "key31": "w4ncbBMhxqR1hVp1xqLc1pAeGNeU49uqbras4ZB7nqu5Mrnfh2KhRjHoZzqq31fxR3BaGwXaY9KPehmbqPkPfTS",
  "key32": "61EqNTtoPN77n8W6hVu2pwMrkWRD4QAk2Y69qUvQmPZFnj5onU5hhghYzaS67VERGgqUXvieYJFHdVQkkHmctLbM",
  "key33": "3oecUe5RsDkc1og37P94cWfTc2BiJmYtSWiXhGFeZDYGPLysHAzkWiFXAvL93G7FAX2djrEXJsKbJTWVG85N3wjS",
  "key34": "2NXB9Quddy41zSJ7Pq8mzH9ZFZ9hVpCGWLh6ggDrU6mhrLT4AsjTDJtHd4srbPF7mzWGYoK6HCp9hpMbBJuZvy8t",
  "key35": "3iBu43ce4NncdWXEcLjkQ9BLoQmCPCjtopTAssWpdeboZG61SRctAWvRPugSt96WdQVuCsTnExJ7rbsJEGDEKDpS",
  "key36": "4FZXsRswGa2pNGwfmvTjaXXFug47Yz49B2HqY19fMj6FNRNCkr4ktwJWhrqCzXb1r3VeRnXzixWvUFCjVkiKSyaP",
  "key37": "4Ppo8g6uqBmbGimjTRcHSvK28c6TNzDPDMxs7BX1JoChBbYZaDccQ4bwTPZeX1YBJpVw1DUdjQ51s9seJAMfPpxA",
  "key38": "4QaZGEBLMJUQZzgmLc6vuPbrbkFrcpk2PiN9zXE1rgmcNdV152xMcgUJbi2DrmoNpU8nbrRQQ5pKdtMBjAHsX9vu",
  "key39": "4Am5ptiBj7Ghn5LB73fxEvWeAC1mJh9gXWPsfWqDD23JSn8FABfocZWVqPReE2HYQmpGGsWZ82zuF5ebRc9NdB8v",
  "key40": "44DoUq6H4GtdzGpxwrKKfDsrbZoDway4pe2mjw7PCLPi7hHuCaENjR7FDTFAmkxS5qw72KGJqxwK1emMmRaJgCtb",
  "key41": "3DAtwYs7y41diNL7NGWhDZZDn96cxDbWzMWgnMCM6x6RLnZ66xweuEEcsn1VRPJNkxHuAMTSu4QYAd7EeEVcuiiq",
  "key42": "4JCMLGv966GwQhwKBkwnMaz66Q7LEdouY17qFFnZqBYnKN4KCCfUCKjC2jeKKABzi7N2gzQnYL7xwuZy1PK68iQy",
  "key43": "jcs5kmvtpF7AvoRsXW9etgefMgX2zkKL3fjzE8J21aptX7MP73CHmKwgJii7tWXGJAUtspshJof5GQ9ZPoQ1Hpi",
  "key44": "2Xy65b8964HZ9nz8hKsaLCMVz7C6pRWsB2SaTFhnQ7xA22aXNfG8ja827KLtwRaiPxDbA1zrib8qq2Azf952Vb2U",
  "key45": "36rkhN3aaowyXU9PGR7cmQdLJix1PMiF5fQkyjiAc2uXaieDuwoCh8TXzXV3wnvdXyTiGkXvy3djbMdTCKrzFxra",
  "key46": "Lp14J2cARkfNRR91mC53NSY6eVtXUPsc9QwX1kyVbEuZxSeSN482QcsDXbLHZQUSEe7MND5b4T7Nkf2qw4RPCaG"
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
