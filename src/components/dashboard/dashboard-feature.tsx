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
    "2ZTyRuM5kpLaE7LAh158GomszoyDSDSRgymp139mATtzRW7vjPENAQN3VXBtwcLks52nfnLN5QsS2FUeG2ALk6Se"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Wdtk5dWFRfteCBaEUpPFARJdsenzX1jQk4FQ27H7NDcE3xoR4LHgaVjLCa7aZxHuo9bq1P3bJWq2bspKJ1nUo3T",
  "key1": "36oEezTMYxooDCWvCQ8sodGA3P7nha8UK9UkKRGFtvhc2szzsDmG2av4NqqFF5ixySqnHW1bWnaPMEEJQ985m8dF",
  "key2": "2QgigCdKE4L5HYpzuVUeXaGzKZuTmRxzYpAj4AvJ7n2JUv6KMywpUQV2bQDziuZpSEwupvDmvpbRm43f8juuj9TX",
  "key3": "3ZEr7rh9ehanv1h3XfV4RPSb6Mv8CmH5NFTUhqd8RYtZfCoUDJhUmfNeHVnBvJVxYLAxMjZXVVT41rpoUnHosQ6b",
  "key4": "5JudyezvHCPZCR6qxVEtpLYoPe2rKr92ZJgwnooWjMN499usXpkKtW4igoY3cY8fMEaJaJn8k17xebWd8ZBrqbYk",
  "key5": "2h4PsqoehtttppvCCv4x8duyFMvo2ZSBNMR2KFYDDGf9qtVHtH5D85QvmmQbtQUEYZ7GhV2WvFV7xuJbN2zwqkcf",
  "key6": "4dXAEzqpL6TFimd9JmSX2R8eqfA5VjV7s2EoeKprxwueXJD3MDEJ7aF2aguSYSYrBzMhF9S9fQa3Vg6SpiYSP8ZB",
  "key7": "5BZ5gGYJrsjk6KSTUdho7abVtvEhxR7AUehFMETMgSSzyQ8BzK5exik19zroXyZVSJDNcfLeKckorDbRC7aMV2rJ",
  "key8": "3B7VCkemm5ytRrBJNhTsiGYe2umoCAGY8mWcSzbvaE7mLXpXyaTvwczt9ZU2QzRsmzWAfgKPaa9jSgQP12jiKhJS",
  "key9": "3yNMULYmTKKvN6BpwozeXnmaoTUvp4285gou4c4HZrKXQGu8Btwuoo7XzvVCgABj5cpwDBAvJ6ahZziNTXytPPwG",
  "key10": "3yca1BMXULejpbzdpT1h3jDGsRghuDAWXDW6pDN2SUxpEwjDCgCpvfAqDnGfRtdVdoEeAavsRKweGfje9kVZRcqt",
  "key11": "5TR5q6NBw5pPNeX6FvPyrSuR1VA5YQzENACwwn71xymtExRyXnhu7EU9TaYvPw8Ys7Jj968aYMZfe4B3eZmsB6GN",
  "key12": "7wAKq1fJd3bcvLwkGqaoAFenoNSBNhwwjuy3iddmrf7iXaKfbnMd3Zk4et56i2TUc2QLYVvxFkgrdpikjZogR5K",
  "key13": "3uJ3x7jz1YFMvXcxrMW44yGU6JEmUhh8ezsjvQhdnvYrARNBLxZ9UF3MRpV6Ze8yGsgjYpYU2wr78zksH1iLd1kS",
  "key14": "2bVqUDCmJNQyqh3ZxJzt8wmvqStGRwqzgrnxNHWHbBXZDxCyScNotCY5iVy6Jj2LF8zR1DHgTanuBRn8XfX7Uo9t",
  "key15": "6wnZrq9mz9Ln4YcrzvfkXyFBSgm8eHYRGcFFsJmETbGxseB2QmPnFuVwrvpCxMujmvHeKWmyCrARH9KgQPCUqeP",
  "key16": "4QKcSz1ePkgfoNFLBfXgHRDBEqScRa6p5yDcFYEivg2YFoM3Nv1YQXRaMGxpjuKyR6zkAjcqcYKkPXczs3bp3xvN",
  "key17": "5A6EaZvLBpL7PNJZdgRyVVUvgppBSuBMHz6Lo6TyjE5ajjAveM6ZPPL72BN9BxuumbWwT2M5dzutUb63KVosq9cu",
  "key18": "32fXPKxUgQLSwc1wwZf2H9PgTJwz3Vko2NjsCkZ9PSBREBbH6LQN1diYqMFkUB9tETLVfi3u8TyzejbDSBusqoDW",
  "key19": "dZF7PUtT9hYwVhbPMoS9KQMNxYgoYENsvTZB7Gjc3ZbEsW8tvVXJ7mwdM6bXoWmH74iWbCgwfzJ8oKFeYwawQ2j",
  "key20": "4JDjpdq3YfX8bL84WNdYxdyJn38B2gEu1bVTLj3oGMoW4md1LUhysjKLZ3xPbspCToj1RbnYt88EZn6eK2coDA56",
  "key21": "4p2Y8kfgK1RRiGbe7FK9TCHaQcV11Gw7eYzWEgBhTSfSzxX3TJfhV9qJhMWaQ3g2Vx7gcwBhMXdhJQpMHAr8eo5z",
  "key22": "4kD3TfoGzga7BzkWy4qcx86ZDDnN4yefxCB7jKZp5cvhUonMYL3dpr5DLSW5akdF4pByXVCaGtYEpqGvQPfTkydA",
  "key23": "4HJngmzoBuXKvXskjV9vgze2XJgW934g9KCHNjx8H6W9XWxBj3Qr5YmtWyFeYpAiNEG7EhiW1JsYXTyYrJ9vP6sy",
  "key24": "3uYZYH5QPYTxUVXUoXtVW2okrBpnmsQVo1QvSmWgp7dnreBLYhSiQtzc6JCBpZRPmfxQFmx7ZUQSVv798cAtEw1K",
  "key25": "5hrPGbdUX1CcDBnotW6syH6RKgWLzGWY9vcCLe9yZpguJhtmDYjoZambw1xGapToqGPfpPDcLgb3cGyYfrsUcenj",
  "key26": "gfJK8SebGEFPK3ntJ73vF3waEdnRYDsdjWMyHCtKCX8cLT8NYJF1EsXVhpoyUhvnXjvcm63E9iWoz7b3uERsYsW",
  "key27": "duMFHnoitenSJRFE2PXsnKVCVr6aowJPBAVEdh4vDftDtLuRj7s5KRtpQDjc4E4AFniVne5sbLUMi6W3bZmpswy",
  "key28": "3VQnEAZxo1baqfvQcaqdeEKf4KcuXrd4R7htxgmfi1W7BvnePhpvyksNNHEQgeYR1Motp13K91XynvxZnabDf3pr",
  "key29": "4mv3bb6TdQ3RLzESz1eABMbdJgViP9wwmhrjdVDKv2zeHuM5xT5p2EhvFxg98N5uY4YuxCyeiV2KVAHLqHWtpMYt",
  "key30": "HEQFpMS2GoT3rfEHFTJqJ69zEY4CgDTAbhhvWRSfDUzLJgtnTB5WEr8VWbCpKScEC4WP7Z9rDAsAHwaYhstgnKv",
  "key31": "3cn63ua7Fjn735QpU8GGMnA8S7m2gJ3jiuJpAyxR6EghjM4LffvPgm1TVs8QfycNzc5N7Vh6MH4xLQUdaA8wkrUQ"
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
