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
    "5P6yxTMHqvNTnzmBVZBDBvfYWjjvtrjdSSwR93gke1rJz297G4NxS4G65o7PX5rbsLfbkEw9kEsCRpsrZEZx31G2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xJUFYdVSWan8bAXhQhWk8XZwMcZDCTsq2G7HQKwbgivvtDiErAjr9fmFHAt9HfuPTD42d6gKgrz4FbvB1jpreAq",
  "key1": "2ZCGwr4VSEfNrJtXpZXcYuYsVpDmbRMR6U8xLxnmcPP9t8UzrqmUkm91UQNzuRkj5qsRkkkLsZXgTxy1ZyXbdLNR",
  "key2": "CG89Wa5dgAF284kJwSbFMveWy9iopzppqSYJ5NmgxZGbSgCJVvBEQSokWQs2b3yqM9wW43oTexPdjXUkj3DV7F1",
  "key3": "g9mQxKb3wgpMErkZ3tmWmt9GSC8RSDNenkUqsop21Yz84pAgufJU1mSeCveM2zYZNU19LfwopJHMKBKH3ZrSPkx",
  "key4": "kjqgN9SgNEWoZ98Mft6kvgXjwVRRvo5we66HxxqxV1KCf12eaps2M73eHeixRQZQbXiJVF7veDEh3rEvZyQvcFr",
  "key5": "Dgt6BfWA4i5FaDD8TTxk2QHKnbERCdHX8oiHXT8HPT48kWMSbW6QejyZYjRDeyxHJBvqTdM6ZD34K5khwY7SBsY",
  "key6": "2d8PToyxLB6rkHM9GcLKfjyN7TpXceUzgS8BzQMpa72cd7vDoniBFndv8yKskbKyFCKkJjUoZmQGuBkQE9FxCRG",
  "key7": "hcsYCw9U26JwDcGMX7ipTQmmrE9wAi7c3JyNiA6DNUNkcDEyFs9oH3rmi6zzGUvP1Xz3G15z7ih8fP1WngH611E",
  "key8": "328PrhabVaN8M9sYLZRu4hSibefbCF4id5VQPTALSXEqf6LDnnyAuXc77sgZ9MNagfM4iHJfyubkcy1bxLLJooeC",
  "key9": "2RohLngSZRZ8wRx5iFcbFdJtso3zYt6YswKLwhxowvqHd885PbinR9WE1JNPWwLs8PzNswDZFrjUHrUFqDMimcok",
  "key10": "3vK92jofqEzTxiDazQi7kF7Jr1SzzQ19cjSxCf7bQVZL6pEhTTV6ZZ2XPdkzurJ6JE2r5me5qUH9zF3hFGqZrHvg",
  "key11": "uifbAMJRJsK3p1LmoARcR3jHVLc39r7uJ5LmpoKAqLbePNsZ2f59cbUdTsaMzzJUayhY8oPdy9CufHBBthsvUV2",
  "key12": "3ihWfnE1eFgSSb6UT9UcChnkiAWa29xmdGko9uSL5XXnLYeQkVGT7MMZPXgZSLbYvTJEZ5JitJ3TaZaWRxJ8qnjq",
  "key13": "woWtmpj9G8Gaxqd1DyYxsAYAtM4mfkdpjrzBTmViPnsZVHqU7tkyJZhAYs7BJ1WHh5Q1MMXfZWntefcDm3Afytq",
  "key14": "4t2YYmkDU9RvQXt6KFxQ2R38hrQGAtnUmwsv2k6vqe1PYttcidnRtMCzJYjGZqLbQXF989vPXSD8HRpiAUmEutns",
  "key15": "Jw5Zg421K5TP6AbB8U7GmiTNjEHH7UHkJ3ny57UAYk9ZDnv4E3RTZqy7DKPy1vq9qzyjRRTyrmBerVz8wHQMVdW",
  "key16": "bYAFMvXAFAdEsYB8PcNGKuhhKpbEHqP1aLdFbRqF231Gn4Y7XcDGpRLAS86viagL1oWoTR8pm44fxsfsgnottd7",
  "key17": "2cgUW11LzDmtd3ghntSjPQedNkKmL4rVyeE2FDUxba1vA9S7wTSdZLyfSx55zQTRCZAmsXtC9SFWvHBtx4HEk2GT",
  "key18": "5qHQ8ggnuJ9muDvjVPW7S2qFTo8ExQDAJrFM7uJ5wRi5CEDJ9CGx9yVwgb39HqAe6hRtGttaBxKwm5DptfzXJmzw",
  "key19": "4Bc4vnRPEpUbA7JcfY6MaNTHz6tUtrbf5XWSkwejDRXtqV7pMeHvqMzPiWacAB4kLb4kGTybrDsEtdv9cxESoYp7",
  "key20": "N7zrA3FT3ZVYritK1PSUALMBba34xG6FCLQvGTi7ARhm9z9JrfQ1WmBMWPepJSLoBdFFmAFQXKqSJBoE1nn4M2Z",
  "key21": "5ExtbgEUhQtmnzGfpi8mD2UR7BZPhdxiDpD3zo6vRWBzKWHQytaLvaiRzsWWQe6cLmpAspqnJjMujqmvbmmcwmFt",
  "key22": "5QN8pQVinhRSeMjYnKM1ws2jYDuS9rasMbwB29QHvpAjEqox6SaWtHuVSM5P1z861wzs1855DXo2FrEAkYAU8ACM",
  "key23": "3chGeoCbgKsmxaA7pvMSUtgBhUooMiXn6dGAa3NPjYn1JU92APMmMsBMpQU6wQHtqdNH9EgQH5HnurwU3c883ss5",
  "key24": "5AzUKa7Dvf93RXMsjJgUQRWeLP2QeRS1GkWhFwVdWQXi3Qw2oSBXyEPGkYhDXsS1EKjEGpGzD8sV8MLQShKj2PzS",
  "key25": "7dcrVqGEGwTwk7yDFmb7g2dbF1eNoHNxKjhb74rctaq1dgDvAgHik3TVjgnDByfbE7GaWYc6xQUbiE5bUf3rij6",
  "key26": "4T7coaY28eQnmTzA8xDnXNWJHUqjaRLbEdSu5pk3R5sD4T1ySC6Y2cvDWAwe7Gv6tDzx8Na2wZWkjNf52KJCocCY",
  "key27": "4uVubwhoz822k7QqzsHkksvNVXmiqbZjA9bNVeBDF54nFKaVrMDNv59BK952BAsUHLKbq4wzBSN98pPv4frqk9qv",
  "key28": "RCBH8Cmibc5W78QxigdiQdV9drcG6bHWe1PdXsHrCUr1t5Q2mzn2LK3qyWx5dCTBCB8czm34DJc5v3fGDfkGG5W",
  "key29": "4bZ9eZd8YmdZ1LGnsRb8GFAJhJ2AcgHqWhrYpAusy8rFoHvXrLDkmtkjcJjpYpXoAhga61wUXBcs2wuv9H9RsAg",
  "key30": "3tSK15ABaA1vHyy3Ttt1B4tL1g3c9gCmyXpMmvfdoNYWNSLUxMVTbgvGoNi2XzDpdnjEC4JxQvzuTC7R5GizivaK",
  "key31": "64nbdXAd89YgBZHwAhusn5d9irfMxYPN6LtkX9WXaWBZ7zCcEFEFYkaHMvDob5wBG9bN74Y8vwf2hyRJXQ2j7SmK",
  "key32": "3hrEKaYkSMsRcv5tkoaWQDKDMKwGMLBaQxUBAYJAZjisJV55yT2EZqQ1aKUrJKMgC5RmUhV8qFcWjwJf2Mo51D3U",
  "key33": "3mKEw8q8SqA7nF9x5go7VxxxLPNRTrjQwXuusLUbXB31R1roaL7u7jWVTN2HfZs8FQ5xHFR8ruzitQ74HYdEsHvf",
  "key34": "5dUxEe7n67ibDLxtbY6jbo2rJKJoLsNhNTgPTaRkqB3uxmXM5PBMSiXF6zjNpggvrDKYMJ5f3d9GxmVnia97UhUK",
  "key35": "5EpjKCMzR6yZQMPzdai3bcVfnQsvQ9Gsywk4qAvPvEyE9mNtyCX47JdGfK1nnGBY7sCECZbQc2vMqTPZUTbdDshd",
  "key36": "5vrhdpwbsvTUguehjA3JNgBV9H1y6k6Gi7b4YCVbCVa7bAKAvikjjdiTpGqkswSQZDLeNG15uQuGDmyJ5JfpMGLC",
  "key37": "4kcGWdtTmigUoyufFc7WLzP9WxdsueK4bs4uxaqfVEckPbmbfQPAzC1Ro5H65RQ15RZU2zkcqWjJRwB7K1wofPsX",
  "key38": "2PZRfQHstu2UjAHNF9Y7qsMQnTVK1NiJFNxovVNHbzgf8Zb2UQbwJY1SHybpjs8THKeM1PP7pjhKoH69sdZQ5Web",
  "key39": "4RaJ9mpxXCbWNhV8xUX44ZQ4TmZPtSXEDeGeDYJao4aRwrLLZDLbWinjVrvU2iUNLNiVuG5gFyJWwwcpSpXm8Tgg"
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
