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
    "EcFLB7CbKEZRGbRj3Sh7gf8XTgg5tpoL7nGnWnPqdgUFnW44cc2rmrDsaH9vdYE8An9tzqGgeEaUviMKSut8287"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CMe7N3mNm2STaGeNA6aHRmmihC61rrpGNrDTtrVdUD8R2e5NcygvrH1BqGuU4qMErNj2ctVxpU4eEZnm6WZh9Gc",
  "key1": "56SKgArBfWnT1ZdpkiS8J6sSq7GeJanFbBGUG5xY9p7vMuMPjsnb6sGqWXMcHVD3iQqzkjJa3cHKjdUjLSrVzdZm",
  "key2": "Xo5EaYF2ytDumfQnsk1QaMNc3NjGN8Hrj9tskakUvwPG3LMfVTmUGQPRWYuNhwT1dYG1A7QaznXSasbiuC9hRRs",
  "key3": "3b3noHAkg79jejqdaHRP7sMBA63F65qWxaiEwg6yiSMKZNWGSaN6G6kjK3ggkLHvkQmfKkPnvsZy71fnZzxZGgCF",
  "key4": "SFjJ8LNFbUyZhk9K938nv6ba4LgwxP3tHwiidmyUy9v7yWGbMutZEXPGsX4ifdm26RVnnyUspsVYxKMPct9nwsV",
  "key5": "9bF4LEFKAjcA35u6YRQYXMcK77ZNkXztdZN8BqASSsmd7rBsHmwrhciEFhNNhHV7sE5z4AA14h8F8w3JvqjNRcZ",
  "key6": "5fKASAG4XLgJNaziqA91qVrfbqsnRgJtbLjM89M8TR4X3e1e1HNWetUKKzHEpGo1DA4JsPeSZQjaW3rQa21DGHH5",
  "key7": "3mQUPXx9sv6AiEYRExdcaR2RL6k1a3hhq9HsZFXu55igD1vBobr42z3iZc7cTney8WYK7gToT3PFREKxufdSHneV",
  "key8": "495wVx97oJx4M13djXrrAUDugLRtwiQNrzCLPZE7Dku4Sg3MYjwjyVvZiE2orvdVoKTEaJ3YGUNBSQDqape34F6X",
  "key9": "2WEAUeG6sjQN7U2JATjFwQyEK3MvYpECbbLPauqgBRA7gFP3A7NAFJM6iPsyj9mFFBrbafHb1AYGMMVsUzMaSSAd",
  "key10": "3jvLQiM1Yt94pxscQeQPiN49sXsTQNBKVGBdDYsm88kRGCNQnW9RZvkobJtN8YANUhfzMhsyco4e3VKi8pJHK5Zx",
  "key11": "5HCrs3PWTmS7gHUiVELejGUmGhwXUgNUCPjSvdMfCAJvw6JPAK3wDYXJq3SepGXEUHjTz2njjmUwPN4G81MThhDV",
  "key12": "3GHtaP3m2Bq8t9JWCLhdgzrtZQTLqEh1dpqGWdaVmaJD7njNVR8E3C2nKUGtY69sxMDqRJxv362CTEdruLUxXWm7",
  "key13": "568nSrECPUHGLTNr1KcC7cy8gEeSALKPDfJWLxnifFJujehiKZ8NWZ1zDXMSwwa8sN8QXUZvK8UkaQvDZQh7bm71",
  "key14": "3e4ssW9XUxan11mB4Ko2VFEe82dENroVRhVL4yb5VKMsWnvZg1gDWeNFxXJKrJdFKvRXz8Ts7BQy2AqPxYzrPzV7",
  "key15": "kNrnAgHdgA2Ttw8LwaFxE3ZoWZLTnsjdwBQF4jHhRZqxpx8BkFpnXH53RTW91kFpg3ZbZVKDJ2madhk3JPxFShH",
  "key16": "4Tp7gS3ucQ2LY744wLghfukC3gwoEhi7RvCeVzc7BokUy5HUrH3nxmhFsxZC1AgFFq1acGttGWhBJUkyPLTvLqfT",
  "key17": "2FgwhEX3PmkCGoNXrcai3UpwitkUe2QKfVxyysNBMMj8m1MHjntdG5siaKxNMs7XJrMoLsbT1sgH1uxs5Eq6Z7fm",
  "key18": "5vbDmcPaaRZ9HvbdfgZ7ySTCF6ekttaNXy3RtVWn96rXkCUTGaoa7a2M57YGhknodacQSyyb4k4HMiWmRzeaF5Q7",
  "key19": "5BhvQpHUA47iss7hdr8snRNxg98Gaj9Krj3jaAhdBghyPxxJjwKNf4Y3vUvSq3TXM371YWBNt1ZhSJZ2uJmA8HLD",
  "key20": "sP7cZ5qbMWe9Bd9CpjEemNp4NQo6uPiZ23MSz9LXqkLgrmUMW5tZECZY37cgzmyPqRUGvKcE9fGoBvYwdai8Zos",
  "key21": "4CqfrUJK73FM5x121eRnbTmou9DUNR8HU51moneM3UgaDLLX75wYAmcCJZNX4CkAzknfvp8mzj6NmVY2PtC5tjbH",
  "key22": "t3M7G6MDncNSit7v7r9qSQDJFVaEYcHzvqB3jhX5ULDn5pQNcuXBjqT2yt75FaMgTfcP3ib3QBHRzo595wURNyD",
  "key23": "2rUHdGwXpTuMAoJNZBVzs43QQZzJaYjG9WLXhKWJuEt9i7fNGdpes4TA4j6ozSiyarPNjAHvSurwTLVmUAy8S7hV",
  "key24": "5RXoy8eNiWVWe8sdRCFdMdTLdDSDWPoRT5n1gN6NHsXxKdv6ZNnNmvArfU4BPpCtLAHgkgtGc8vXgmwbu9ZgrjUR",
  "key25": "3JNvqqhtSNdD6Su5CBeXNUdQLxvnQStw1Vzhdywo14sjFysUr6t5L6SS3EP136PxSahQjvsSyRXyZY1oRaK9JczJ",
  "key26": "58214zGixgxVj3qCfz5MtGDGMALRpuXs6Nx7ji7oryjkRcDaYJN29JUq9QzDR5rUggx2H9bJSu4YeN2D8MKJSpnZ",
  "key27": "45TFM1VFxxgBSbkQTnvYEXDEgb4opWvdiErHhp7SW8xQ2X46qSwm4nJkGLFuDxmsYNbGsYNhCsF1AppumqrCSxfb",
  "key28": "3Ev4NXyUntV4Lqn3FRHQBEjYsRshQyg2XH7BWAwTH6cqdkf9yhVJSxDhwuVcfHVUZN8jaK7r4TzxLd5HyNpzyofD",
  "key29": "eP6hKbh26Q8UX97VLA5p6ykjGeTYnvScajTJSXRqr8CCTNHjPzL3iKSdYAhHM5nUqVuj5qnMnismaUK3YC4bbLW",
  "key30": "j2DRsk1SxxKxbtzop6w4KuwKA7ByipqJh2872CrTs6e9N8EkbEKZGdFt9pYDDUosDfXEVu4wiH7JiGTb96y39af",
  "key31": "3s1mr9EH1aVAZjiopBQGPFEa1jqwrieBPYM1zxvTxuFM58Ef9uBqmKNx9rTWDwZFnbLR7h8uMEEvTKTzxdvBYutt",
  "key32": "rS6kYB6HV8cUSRiHsCMqn28BLgMMHXzpURbNsTsNTGGov3JuSdJUmaYSodVGpW9C6sUwDqeEVMe9SQvmGghrJPe",
  "key33": "3SbYuTvXs472YpCbvCG9iyCZCmPrL4cus8hrzQyLkMTr4EfquHmZtzANVPWRbCVL7ttfJWdZLgzHYT7PaPnuwyYf",
  "key34": "47gVrf168q27UZHZGozCvCVQ8x9sG9qmEKnbA9oLpMePb5FMCB7W5z7rM8WVsK98CXNscmBxuEcAkeoMjCzFZ4qg",
  "key35": "44CJahdWN9n6JmG25FdLyCwLVKSBq4XcjChTDKRSMKvWLZ9ipd5Cnc73nhL5C47311xs9Zu5MG1kfsG4aFJH7p3q",
  "key36": "2HHo1MgVat4VpRVAE3nYAcVUyTXgfEqgQrG4MHTmg6uC6xy1mrxDdWUEkE4LajtGg7uHJS9xvPhsVn3TLkaNpxeR",
  "key37": "3Xfm6kWsz1WS9nh4DqJefJdaVgGWwdVf1TgGq22MMBgh1K5aSE8mLHvcwabZVhtvDyPrpM2z25Fthb7otJWikbAM",
  "key38": "chWS5kC674mrFQyggg15cdNeXRVvBCCojvRKh6czkSejL4LSdKZkNuGHMG5DAh6Gebe5YqUQBH4BCyg88S1sarM",
  "key39": "5L3Rgnqoo9YkFsdJg46WPZeZNR5VXCq2kpj5ig3ecvrNitK3Z5rhihfxNGm68pkkdrZ6drtVQby7rJwC1f1onh3F",
  "key40": "fD8eSis7GUhSpMWJxSA9Hexd8anMueHzkkWqtBDJScGrTGNBGJRPMcWVY8GJ2hFZDQMF3sJgDzuMAWWFv3Gwf1W",
  "key41": "2zxUUPy8LTEB45jzVaMyubUfW1nAX42jxEgibfWvs4tUMnBnUVdNG5EFXhMa9xo1aMdXVQEytiRs4HZKdgaXzJkR",
  "key42": "4SW8f552cGkp92aQ8o12rUGKruGXGA8jxBbdiiofoRMiEREJRg4mxxFtCcpfV6N9opvum8To68cDhGZaYodUb7W9",
  "key43": "5M5zbUKfPgzWLpdicVRff5DVx1akx9e1eA9RL1QzyWhrZA4FXobyV2PqcfLNd4hGMgADzT6PQArysXHEU7utp72U",
  "key44": "4Ci9KVw6ruDvZEAftL1ttKbZv2B9ah99ph7voy9mnzGfv3Wa9QYhZywvPWNhNeXzpN1rMVpNq43Jmpn2aAkptV95"
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
