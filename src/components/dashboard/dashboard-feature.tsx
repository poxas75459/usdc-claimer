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
    "Q1HbNdNW1GvxtUTpUSAejpDbuPzKNC1TDDUhUF6emdzVa3EzmhZC77ibaWHNAC8i9e9m5erG6o4Pb1vNUtacyS3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bC4Hn65SzcLgH3YAC3FVo6Yfo4wMG1S5cHaMvXLaydDVdGADXP3KeH4f8iAgPKn2byR4qvJLymFrMreetmdEGjG",
  "key1": "5zz3YjsWsg5FygTaLt6xFGE481BWPFNFiyhnZo9LtfLZ678dY5bTJNaHeNu5e6kwPgwA7DxVgGVGQF7Dztho4T4x",
  "key2": "2g95RZukHPVEd1dxiYuFV9s3Qs7z8NQgkEEGSrjUQyKNwqnbTmhaFyuJaCPJfxwxitz9FwGEza6LfSjkpr3KDTSY",
  "key3": "3t3oBWQJbtR1s6V9W49fKqGY5G4WAqU9mBRvYaGqNDWUJfpyGCkDzYKHPZcaiQYytz2eqFbQcRE6AgSALYqADpY2",
  "key4": "2UFrYUBfGbCL3Zf6HMx3tWuePEdFDvKrrAW4AkEbNu9iuUHDVGHMacrYsSkG8b5Sd6zr369CXVh8ZT86yBWW9vgA",
  "key5": "4kHyn9RQUMexfBR65NYCvkYkYWX38KiRBec3uJ4LQHS3Ch8EFX9YUp8QrxnB3NXtp9cHo6ZD655E367VyvgC1e7K",
  "key6": "4rxz2VDfxTTuBEkHL3nmykkzdjS2dxifRSBqTcyayUXSfGmo9dN3ZW6xnh7sWtFVzCK2rABKTP1kF1hCFqfmGveL",
  "key7": "MDjDjJGNs3iqokYCzVn65jz5knKc52uMHt4wURMam5AdKcy5aUkacqvoRkUCTkuYZMzMfDZ8NY1todkpcqMtPTq",
  "key8": "4zC9tyQzDfKcyrafFgJZhmGTHrFmEeCiXDs67PpVXaeSMsLZGwXMiE8sc8LRkw3a2yEcHb6QpkccURBavaJxPW2C",
  "key9": "5Ex942teQFDxNec6ySSf5sVD91Rot3xFzWuPGmNLej8PKc8jq6bwyd27hhP9f2iMK3Aj22vMMYxDQMpgKChPUEzb",
  "key10": "4mQxGng8YJbXktnhj9GCiMCnJry7TCsbT4ybCg7Scpz1EETJ4B8nh72QZCaRZgRLQyMfv3QmTVFatDkiBhKMQWNj",
  "key11": "3QbNUx6383JbZQMNGhUSc8FNLYo5NK4GPyV7ih5XZgDK4bfSsbBjPncNfRGYLBSEqigrnnwCiWnYb9pWqG77n6EG",
  "key12": "3LpyAVNjZhqXDRQigxHAB2dYReC4ehbKNv8P4x7cHhPVzZxc14FyJdQgYdfDz5Mh4uaXNMEphLqvgDG6MwNonRSJ",
  "key13": "47gTc23rsvNrLoycVrBvh8PnrjhsykiH6QHq5DyumnuwbC3pmuBMvsYnR2aPuKce6pedV1FT7G8knVydY12q6cBh",
  "key14": "4M56eB9Jg7SvxuTkukTA6qUkwdnY18WSEVjZVH7trDfmhej42FYYkGpmk3eAexp2ZoodKufgRyinMhNAHvB6a1ot",
  "key15": "672jsbBj5hYReNFTLQBYyX1qHScv5YnRHujViJWdutBQieMNvJLS33mQQDur9LuLREyH5kc9SopxHjWWKEnsV3hx",
  "key16": "3GKLEFYhfw8QFEDzo91qVh7hEbyQmE8QiXZqx1NiCs7gDH9i9S2Yk5zv7pwYXF1t3M2FiVFMPN9JcF5YHgrTPXtL",
  "key17": "5ReeCS3rvpKKEoAHrMCDoVTvE9XjGwwCTjHA8TsbzWnFz5H4sAXQqpJ86yAzwWTBhhhtdbpP2KSqsnfag4eKRrZk",
  "key18": "5aoh9c5g7Ly7bgJFs7VuBtGx3nP38kDteb5oMmJBR6HimohfmxQgJN6WmUz5HnbRob3YSDKTpbErnvme4rPoS7ki",
  "key19": "3VLisNLHeMJmn5xnXGn652ZxhZ83CWAR8YaMmZc8Xx2sJPvyr1UbrBjfZAG1QAekp8PacK6vpkPVfDDdM38qUeMe",
  "key20": "67RqFVeVPmqUFWCLRDPXgtdfdeRNieoATzhPbngLV1M8sbC2YQ4gRnxHEF2NVKEvPCbzj79TgvYPURCemEmB9j2L",
  "key21": "3YuPprABpTeoJpLK4GAjSkwGqDxqsvNj88f2ydgFVyh8r38HgyH6pqKyfxuMJcUaF4m9HW2XsWioMMq3pgcc2f3F",
  "key22": "3MMCXihbwyvCK1gRtZT7KwVznF2rKNDtjoHY5YFLJvF1KKx15brteBnR3EGByvQCJPG3pg3DhqiJNrVyEbWLpdSW",
  "key23": "5v58U1qwXRsKW1XMvdNjt4k8HHaR3LoameKQU8v5fo6ke4jRovLQqCfawcWyRtq2NT9S8URRnHNWeVpftQaiNQC9",
  "key24": "4syqQvTEzUX4DQCjL49KCdop48jFDTZyLecmV9fiEUbzEjftvcrShAXR7rDYxaahj7RTfWpThEY3LPwVvLx3xinR",
  "key25": "5ESW18oWGnKg3MP64TtYxhEECMwrYe4iq3fj3yJPCtWVcrSiUKbD6QZhGeoGeLoR2kLGhfP8xUYAVgyXgxxoWxB",
  "key26": "2WmGqbYzmahhrtaPJM3TiLXxQfu4dVZg9ugRYdVNF9rySNCXViWcg35YxG6kBLtc7ygAxjSGfQBtTn4fufaDQcBB",
  "key27": "2ridm4giAh2wakYMNYEXsGY4NA6DRXrFzLbjAtqGaJ5h2HLv6yeiPqWcpkRusnhB1VVrQaaQ4rWFFFqT4ivmD7xJ",
  "key28": "52azpCd2nHyGnWkCT97odd1BiqZzo98riAHfU6tuzW2rDj7oruve4ge43RuDhi32Gk9Cx8T7gMfr5VSwcobN4PTy",
  "key29": "3ugVMwUSezDvTS91Hfb6yp1p4WdFDhGihKMCY2zscW5NZqRjnC9TgQ7hh768ActTJEg56h1q9DKzrwQGEsxTmWbe",
  "key30": "5jemZ4ESYYdwPL3xPgC3vvDK9ot9XtqjBNDu7TMW3HRfKEYMs4uJuSt5rLiHju6uKrV1FBBABV5quXALJVv2dFMz",
  "key31": "2nknwvP8MvEPEDYv3QLxX2DZHzzaxgYAZpmA2K9GGRDX86SBxJHrrdjq45iPB4J8nDmWZoUDDfPQuD4CZ7xxpjWn",
  "key32": "4YLp9gTRVvK9vqkW9KVqtbXMe3aiMx8SiHmco6eP3Yq1sJbjM2T6qZdgS7kvEvS4Yo25KnC17uJBVPYGqbeoVTPy",
  "key33": "26VpVJqqwCh62nTyTYqQ8AdtF3bNjevhNNvRzgDETBzECjpdujhLaEEdCrsLSXxGUkdn6zioW1fFAAXfhSmEvAEN",
  "key34": "2iMnfuXY7sAC6FEJuMbQyFEDvoMoH7hghqtKtSj5KHssFZbz9CXFLQoEcHLRX6gTCJGqvqGiqkL6dWWGKQbtzKFB",
  "key35": "3SiSZR2cw4KbFTmbyobAJVUcu2PZLMDHKbHhY1nP8XfkN8oYRnzMQ5NFTyPeZjzeSHXu6qUdXys1ddtSMSpfWAW",
  "key36": "62t6a2rkNsHT76JxL7xzK8ym6SJpNnQctyEcBb84AKSdWFvCYVPqcH875M93HYDZCwdaA7mh3uycRjsKR6ZZkXaK",
  "key37": "3h1uUmp2TTiNiQxZji3CrnWdaLcgR5JWtw9U732XUqJ5gi9e8GYiCCrQ2sTUGZLriGnMNcUnnmCE6TiSvs4rpG2k",
  "key38": "3fm8ydQkaAchuPi82HyPdZ1nmJyU1Pgiq8nfaYVaeTaKbWPxMpDbFpuVMchq5ZpRxs6NJy7xYhBdVnd5cYAEdTW2"
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
