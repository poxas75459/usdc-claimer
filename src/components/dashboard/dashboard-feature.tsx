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
    "2VbjvBkmh22Z4GpWsy6vrTpU9eR15mmVfPf5DvLjJYjRzHgHRzGFv6Ui6YHE6nrKtAWc1WivvNWfLkNRcVEqbRpW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kbxU1MuwFHKLhMqrrC31zZh2DGqtLmsVD5PPsRyrFkU62xthTzj4ufnBxhqJPkaTwqfokzUnK7Yt4J1P1gHtJUM",
  "key1": "5JVbcboB5WeMABaZbswjLWuwKrGUaGYKFqjwGh8gbxYLC15q9Zhpgmrx8ANcdCvPbbhPtHw8gPfoJbZma4hSRxoH",
  "key2": "5dYoZnJiHypx9gRQYvZfWiDN2xqr7XUa3eqVqEYBvYazryqXpfq1Mo5VHMWB5u1F6PqkZG9buzFKWEwrJiZJ3rHP",
  "key3": "2GGub6n58J2gKV5yYmPoKkRSmFEyPNowLmF5vDdenznMzDMFtkVWMzKbv4ny3ABG3hXgfm2qjWciNxyU1jFHedWc",
  "key4": "2pznZi1JZbHodW5V4TU4bFAzLF9Eb6ShqQGLdhhdjLEM8wVo7e6R3sasnXWM8NxpXtEJNTQvpFpK21WfcuianBkb",
  "key5": "279oZn72DTncZrivy2iewscfT3LRvkxAbjmLQpmBqLWdJJPH8v4jJZSGspCjsRUDm61iCbtD7QjKQq4Kw1q62bqF",
  "key6": "2mo9zUN7zR95o75GZbF7cYnoWCGRN1joNtSPa33sUpLmPYJ8ADfbQZ63ZLtGCTQMytrVKFGXiEQQq2xW3UT2hUQK",
  "key7": "32PjjPiZVGa1MeV79wsChsM3YCEKnjpFC8A9j5PNn8dRfY4cP9XoMaAoks2D4sJrUGUMhvCvmAAiiNNTqWGDAaKd",
  "key8": "25xfn9ZBHvZB1pL2JEZE8PyLgE8sgAszDtH5d9pCqi31wD64X5BR9DWJkhKY2pm6mw1LganEybRR5Nci2fNyLMXo",
  "key9": "2xbabnmu1dXEN732NDPrUn5zkSXGbc2Xpk6Bzp32eQJPApsgkeLygZgEsVRBfNhRNJgTep1ouCZ5QaaWcyYRgxfL",
  "key10": "2xEZsSKUKoj2aMhyG3tU8UDDbikZDGfkXLH9Ei6r5eZs7i4G7huttAH3iS8HQpvhtxr1815Cd6G5q59TVLGx1ceB",
  "key11": "2bZsmWbZzwXSEpsYZHU5oWL4bj3WjyGDjYmuxvk3ihWwoWMTygZBGxSFgbGhVzoXmassmLC7J2VuVJNnEgF7K5Pi",
  "key12": "4qG3D26kbfR2CmhSHzBNtdLcmqNRvYdp8sYAWNkrzfVnCiJnBa11u9h4KzfJzkjAiKiKy4HkWzR3WvS3EiRcJ8ET",
  "key13": "5r6N76gSGNRwBvkcy368Frf9fQdLLBgRVVpWSPtZEdoAhWsoajMHxh48BpFP6rxWAgJrirLJY3vHjeDzCWA8sfzN",
  "key14": "2gdLDsNs9i73FqQLuWY6tcKwPHQSbfdV4ECb4VV1E3hkofse16MjgUAbLN4NyLrJL1YKHShLigQkrAapdzehPASw",
  "key15": "akWVNgtcUHRLhxNUG4mgKtvFw4BVNTAXgZxXe5YpqcJmcW5aVTBwEvBaduk3Gu4vjfqjFKDfN2aQu7PdqmmpUia",
  "key16": "5BammN8R4Kjf4WiYgVACnKYyHSFCP6rHdPUhYtGMFPwYVEzkNtPX2X7Vb5bZhzGv5dnT8LWBky9TyzdXwCaPsuvs",
  "key17": "5eKUS7ULszC8PhXCgJrQ8FLFwxQZSRyHijahb8kYBxr31mcEqa8Q8Cia3BFUj2LUo2dGMVUFsAtD7bmorMGdgLJz",
  "key18": "25pSy163pnTShTjWRhGSRHJEZneWm6xiRs1oaJjLpJG2mvr7E1ap6B1CcVUg2Nyppb5AixG94VjSCeyFVALkqfzX",
  "key19": "4di4rqh4LCsvQYksb6VQA7LBdk6JZxFSSuiwy6Wy7djCNWktdD12jNei7fUftLubDVCgXTJS7D3wWMWY7gWCWMiY",
  "key20": "5TLaWFSAqHXwZ1BEmWFSZ4nsT1YRufWJzYeankEDb4W7jRWGnHMNMFcyY13E3wgPCG46wr1gbLucxuuByijPAzTC",
  "key21": "vDzePf92K1iXaGixLKk7R5oEWwzxWp1F8jAEjYVPAkUQN8qmpmXnQcQjfHcPhN77NcP8xtKBjpaNJBdTwBNev2X",
  "key22": "1HztNHqkVEA2vVHNtuAnS6VBxjicXAqtr7WdVzVQYQYyzCQziH4i75KJu2vRHg2oG3CUo6CjsPZwVs9rW5tomCE",
  "key23": "V47faBeTP7WjNhXMq3KNG6dpcorK2sekMN3MUfNKc3EZxkqSWvgbER9j6KHjS7xhfsR6Rs8zr9fusZp8caT8Mko",
  "key24": "2s2ZAJXrT7YDeg6M6mwuvDQGzfDur6MsfxPHYnDJbZQM2NyAjn8s51LFfrSJk1HoJkYSiu8UYYhrdUQWmbmmnd8o",
  "key25": "3BpspSuXKm1rYYfkDXipWDXgppXqt1NRsoc37r1ZFFpo2Sf2sQfVdHLzVCsdKRfEFBbLM1qkBTFb4FHrLjVkquFw",
  "key26": "2YYNWd6NLmsdFjzFyEX3oPw5SJ6pqzJiF7cTcLUgpVyH2ctim1jK7rrb4T8VtSe6GLkmL1kyYk2H9zD7R5zzdE2K",
  "key27": "2Hg1hW2N6KGUwW9yrQGPNDRswYB793rcSbvUycmmMQ8zhrYRH2XApCSFRmYqyx36hhWXX81VoACFgYzDQ4aLijnP",
  "key28": "66taD1DF48HurYSZ7w5QfwR4vgbwXPn7isAUttuneRFFdqLkVggCJjsUwSUZ4LpZXVJUq5ba3bHnTnxnsg3zs8eZ",
  "key29": "2jLQYLMxkzJG6B5Q9ULEaZFqEWVuEq5p4ygjBcvayFdC3pmrobqmWpBUdXxBc8CKa185nL2BwsRnp3ghw9eaHbtL",
  "key30": "mprUTro6sU2umCtyENfoPZGCW311HTVABmhxDKxEKPhYebnjzzU6nh97ze3wooG82tqi5xi1JeGmw4ANEMAUvgA",
  "key31": "vWvfmwkvn8yuu6Fwa8msahg2FaJDErZEzPsPNGLa6tNG9o3jnzt9Fg8wV3CidAaDVnEQQZUJBVx62Y5in4ABWxg",
  "key32": "2vguhHkcBR1QnEDw2yNBkXTuj59PY5nABb9gbFMfPBYxS2njPSe75mUFfrwAQb58BvWNVK6GyGERKPREXytW8ADv",
  "key33": "q3xf9dBxQfbxuYMCPzKdLTM8ni5NvG1naYwkbAht5VXnTFq86VCxQHWPevEycoFPT66sUh9xybo34S1MA7VB36a",
  "key34": "5KhXV6xUi7NQsAY1UqFxJ2ULW6VRBSNdMHxsFs2z1YqeoXR8nkPZTZDqWHwFMzq1pjCrEY9CyJTGw5UXqjNgofpn",
  "key35": "3U1PA19FTYN2dqtny9w9g6MwhBAwQJLA9Vx7WqCFPwaa1uXiz329aMv3gewFF7MJanz2BTjnwSUkdoTm954dFbUK",
  "key36": "5JLPWweLLZEpigdgxZsjdbHejppdvKi96KKJV68PRMQ65PEZVbQzr9d5m6LK8cm3ocnKXd8XsF467iewJBEErx5y",
  "key37": "4ximSZeJSXVpx4jDprTEhnkYxt1YtvcoJ3DKbD1ixZV8z8dTvfbPJPQsp5boVeg8tEM9nC3B8U1rEKGcB5VTFRkR",
  "key38": "3393ndcqFTCuBpsqzHFMnmC6Yb258SgkUBftoAFsGwMMsTmtyS199UVrCaZPL97kTG9BA6XzdJSZ3XMbahHhzUso",
  "key39": "5BiUP5Z3a21e6uE3RmVwqbJ8Hu95C3RXwCNK8QyQo4ZA5tKS4b8m1kuimw7Q13WgpM5fH6jN4LmpVGyxpi6ZYBkH",
  "key40": "4yr2U9QYzmUMb8KvNAyyuRVj87PHVcEUA1vHErsKnXXqZ1wpeYTnnQgcWcf62qV5CGWVPqcid11jLiWTqBbR6MpB"
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
