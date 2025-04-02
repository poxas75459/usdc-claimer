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
    "rQ8DaEAWsh1bbDZsWWUdYS72RtHkT9fN4Lrkz2HY8SaAG8wr8jvZBrUD6JJJa7CKWpqnApoCoG1xCH3iNccXojC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hJANUP7A8vPmtGooDyaYuZCh2qAwzLaxemrCFhasJV9VpAEQdBvwzFL2o7ZmKkrNQpqZh7UWhj1BkEzMiTTzoVF",
  "key1": "4U5RtSjsJ1JrtEtMcMNSow4hUJfcQ7BNJHgveWiScHWfoVrHVdiUazcwKBay2NXkfBP7R6K4cK2vvCxkD3HEerWB",
  "key2": "4vucfKMMX68L4NkXAbMdKfdRA8prY8cwjCBtQSmAFHzPuKHPtBFLV7u3dkPrm4CRHywpdCK186WWqCSN7Qu6Gexi",
  "key3": "4G7BSvvDfWkFdDMSgeoLg9wgT1rydCb8k9h89hCFh2zFBtA446hU2wwj8fqdjtQhGKcn5zt34peAaji5heVxSbFw",
  "key4": "5g6vFwVNoubKeVjo79u726N5HVDyEDBD9u2BRq8JtLEqrGeBCqYYnEMEWSRrx2hRZXCmtsHb1TBj8J4drvBeaQxR",
  "key5": "43P6cJp8MDtCBBNMdcvy9XghiSf75XiyP9iC1uaCid1PKYKaHm1mJzUwJp2kyjmMyyNJbTh6miyUkwHmXvgTikyJ",
  "key6": "5fM2ccnm5LqwyrYCrhuNtpGRTRhEgqip5yvmtZgJRJWd7rvpys3gB3etxwC1QuWVTchXCM4M2YHxsNWTkwnHuXbd",
  "key7": "4dsPco6KGfHZUALyRA9qD68MT4E9FWPUb5hRT8Ayf7fz9yrxK8D5xZQz6sYhEymbMsfeYQ6WQziUqRvKg47v8fy8",
  "key8": "4p5sGMnNYZeFVSVgWWzS6qhcjGyYs3FQ2YdPLsqnQLwZbDipQphEJde5zMeNvwqG7UFEKWnNDcFL3wGPBjix9RGh",
  "key9": "2YoNvHPcGgrKV29XqsF3wquWfrzUcNvp3EvYAB9yxUe1bEjsxkRfQNKsENNxMNwU7GWoQ3LJCMQ4RPYW389d75uv",
  "key10": "MyNknsmxSq6L3dN6abHhPKzFfiCVuZ8VEP4XQBTVr4jEUyt8VWtPXqoTiV2dqcLU6zQD8HnRPnjc67epU8KueWc",
  "key11": "yGxiLCzdfSn1uN2F2H7Fy38sGurQUzCu59Ci5SaBZmr4quQfBJ3aptyHqPPYPqPD6qxBoF5ntMjbbey7ph8BWBq",
  "key12": "3y55rrJWY2E24L1xUPdUMKByPUgwP8SiVunUNepzhtJbN5dw4HiftfX81N1gqnx2Y48WrH7fwnkdGwUFqXQhkY6b",
  "key13": "9x1BadPQ83yASgR5HqZMboG1cDUM7UB94643qjf7UtZzuttbrmEBzE94nTu7bgps5r7QNpiykMnxPdqqGU2U1XE",
  "key14": "32cyaQvhs8gx5fSGxFUDVhYdiT3cJcH1UWGcLRjhiVdLf5f1YfLm89Gt2SUsBzwMu3oAR5fWd2Fy5LW1RxoZgjGK",
  "key15": "3WvGEhMA19LDkkcvsmjma4g85TdVqXERyQFAmrky2t27sRePhV8Gpk5iZa4ByJVAT3Bb8eM2BSSeAch1b81iW582",
  "key16": "5D8gBo82W62JNPtoQi4rEkQn2DU6sJRPDmsnyQQBoyTqx7enahdWogUGVPN2bMtMGf7ZqAFeHHewR4bAVg3a34eq",
  "key17": "24X1seL9cXYP6KtPXAY67nL6SLUfiUMwTE1pjUfdjEzrEpnCtjSAr3TB1twtceKyxM75XrGaGcUijQGPiZRtTEW6",
  "key18": "5niqYHRMfjHm3w21GaRT6VCiM9qvzm8GKSmPyr5F7crZ4KUhcz3ym1UbBHyYhDZtMp3u9yuAdRvSqzQTX36vQWtj",
  "key19": "3xt4YQexUxpXwGXMsK4szZkprzPa4UW9EdfCu1eYwVj734pZpPz1sFSxuact8gpC4Z95U5z8RY1NEuzsswGmpAx5",
  "key20": "2Ru9PgD4yDLfDf8S8UX47v6Mq74VMk3n6bd4SpbivZVp19szm9gD1w1yBfQb6G1KzfVdd814sYvoGGJK9sx1jF3E",
  "key21": "2tkAoYtTGGsexjfjVQHeksGVHozbDc66NBcTGxsWvBZtGPhVytm6tPa7KiLrgtvnPKVnYHAj1sNYPL4vikJr27LT",
  "key22": "XKHfvjsaJK15zxE9L5pVKfG3zSQ9HrP2vQji9c77RVaXTzd2aw9xnnpTsU2yZk9p7uwKtsQiuqSZd39C84EQbgn",
  "key23": "54q5q49DBMCNL5WxnazD1UAr28QYdHSPfE9RwAQRH4wME37V2WRtnxdsUfUAnJwViWpCd6KHjP1inVPc2Y66JmL6",
  "key24": "5ysDTt1twuhZ4wCu8j9N4uU6KX65k1pBhP4qKXUSfofeoLBY6zp45zZdaiAGw56xymz9nivsa2f8CwQ9Ti3Bwama",
  "key25": "32bU65ZSJHxQM4iL7oLvH87dcwZJk9HSSanqeENXC8qe16hCxNuxpaYNw76eos3JUnd342aETTipJUZUHaF1jv5S",
  "key26": "21vLtfnShzuC5h2GBhLSW1KXsVHC71LbajKgqqzjb1wBQnNJtQZyhjkqmwbYmSV5y817eiwgTE9Xa66pwLtZQhMk",
  "key27": "2Qb9PpBHxYpnduxffR5552bbjZ8y5TTWC87JUuBEt2TAsNkJifwGGFMB7jasZvrg6pkavkZENW7AcXRtvLWssu9M",
  "key28": "41ruE9W8NhQvXBBEMkvH7qUZ8ykKcscMi5ezkAwmekwckifoDfxWNQ6xv5NM8MrQTcTKKSDidWhPVZm5vuFyCBWK",
  "key29": "5jeGEYswQ6Yst3yToWdRkXNyRo24qUtrsBncLY3d4F79rFRDJ7Mwbw7bxmjC3J5EGGMzq7RyTd21ZFCACKdXhqBV",
  "key30": "rtjSHqbWwxP92riChUKXiKP7QzW1TZPM2PNpgHEUaQR28c5KhXfnGEa3e68JHmvMsoCwm63KxCCmgwGMzDRuZGc",
  "key31": "iMhvzkUBHoVP6ADQS4JqGeWEjAPs1rJGKgY4hC476trW6iH7muZk2WYRppjfE4pTp4wenQqUUQNLBwEds6UG5p8",
  "key32": "3spLhWAG1jo1hrwmdY2fVfu8hHjyTJZpPK8JRj88qjXhRsY4TNNdYRDucVc8rus4FUkASyF6AEBtSpqTBgPhqcNF",
  "key33": "4D3dv8Ravv3bzHvhFz9VtcSoaMFKD89CTF9k1Dy6fAdruAmgDsQ6SDaVgp88Y6qqAM4ZxjeAbYsTPWxupkYgm83s",
  "key34": "46Vvim9AsruMseZ92FPt52z1J2qkb8eoiy7ibnkyBEURLGLTpr4ujU4wyMgVuLYEfhXNTRudRrhbrq7DrUd41Y4Z",
  "key35": "3KwkameDtAKUduFMqFP1Btr6eefEncDfDUHpHAh6vTwPAJfSucNnFpGrVD3cWy1iWcUvorsL58odLR8aRRNT64kk",
  "key36": "4tZDQTf9EkNkanwnzFE6jpmtTqQHKcFpVm1RjcWy5df49hPVqTvnFRGuVuwRzvRGueP474Ps2LXpBM3eRP9R7n55",
  "key37": "4tQZCJVqx6To5MGySnLvceBcsQZPRzeasQGYE4QYi2etwb4qGygMmTNxSVU8jSXNhHRokkzq33pjXzWUujaUmiN8",
  "key38": "3SXhQdXMducFA8esZ9ovSVzJLC7arPBVwrdMegBiEeZiQaTyu3eh3CvRYehesy7JCvaEGqaRWqZEgYvos5EwfuBj",
  "key39": "3UsYrwfKWxA2c9sKoJVVN9bAzDDG3gXLRFNNg3j9rXKUfERqqKH5cvccngSYki7gzLfCA8RybqqqrkZCjbA4YQ5G",
  "key40": "4CAsq3xAr1yoT6D17xcdtQBYFpEUPaDqEumt6EGE5JpatA7Fer5CEQkdDx96pGCz9XeyQeooE8wGwXVbgE5AVJbC",
  "key41": "5ksbYcBtoHBM1zLEReaoY9FujTKLbpKrgcPrA5ZMPZmT1etMPVTfbNVpNuXzVd2RMv1stDLhU6N2aDj6KcHUTT2t",
  "key42": "3iwHoWsyBhc9EvmjHobZ9H8Ek7aegjgJT7okTRvCG7iDB3ff3MMcbrs2oBtwoP5fCNHoJfMgWY9f1ybDVb1SxBdM",
  "key43": "2a3L6azyH6rSvYLEF3tZ2TvBYpd38xvUi23MJ1JuZhJmuVyzcvyA3bUAMdnqsqzgrkWCMtNomno1kcKHbLmL4feZ"
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
