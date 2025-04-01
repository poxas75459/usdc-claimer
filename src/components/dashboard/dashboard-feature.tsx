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
    "3B2gmp1yNebEhPNTbgKiTUfHzgV7rsqmjrSiz1amV3DZxozxFx1kQ7jesyGBPavsFP1NaELBMn4FgAyRv82Mywhe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XoGfRDYB7YtX63xLtkq81PHWeRsEurBuvooTqzSW2fyTACkaB3jE8BRBjAuns5BbCcrvmMoWPkLeHquojt4ySSY",
  "key1": "22YCGMt9C3rqFkyheXehWUNU5uGVzhSaBvNVYGnkva6wTQrgmjNa9r5d7XpkpEYva1p8WLDw1JJW9Ai35hqEaxEz",
  "key2": "38KHJQrcWEdAXVYoPQc7ri12JHQNikEVVaSUxXnFswD2EAz7Yb7RhMgzPr4uiceJRWEs8rzcQ9GGyJ7H6WTz87T8",
  "key3": "2ebQTbitREUNPW85wDsgQE64W9vzp3TuxUEqGyxVTqksu9xYQtZSmtu8T5udJ61muTSyeke8QcHw96RSXrN8sa4M",
  "key4": "2Q7ZXqVbzUizSD1QEjAFu7fd8eGjRB7gcS9SpSN7snFxaPWEHaLfCc9nLA3CpXN8nH1jC1roq5PptHbW7kkzzg7c",
  "key5": "DzLUoMHkqJ9uqHynuB25KF7q9x3HXCNCX7xbfWjDHTruemgoGnnuTezr1uPBiT4Qfcb4hHUGsFEAgbt8xzno1Zd",
  "key6": "5DMFJP82PTdHBnwQ37aUFsJmiWpvmfnZ8yGthRuVKyu55fJstoU7ZnmV7aGqoj7HGpruka4Faig7i6N3McKwWX3i",
  "key7": "rEdNSyiuEojZqgCXfHixuH9ioJAJHtR9mhpJm8XgLtP6mNi5grmecegQnXJcvt8S2fRFcxZToeGnvdWfomUdsq9",
  "key8": "3BXFhc7HU2psmZsPQbe5LeJSGppe4SWoCkGUzoi6nF29UQQAifCeNni75MabADFZKPbbDsBG3gbVrPxctQM3H1XW",
  "key9": "XfDXywR82GzuVGrfHzrmBijuF8G9aBmKmhvNMBd2WvDrSyfsYxBSRZ2m4iWhC4hQy44wAB3dX6NcDFTNXKXHaFe",
  "key10": "3AXKD2VmgW94WvHcKyTQavN6zszLqcmgEubsUjvZZ83NP27GnY8zi6GiWsfwCwEpq5dcBVEAw2HLcUEtJrUUEFVx",
  "key11": "44QFJzuEEzLBqr2GsJF7A9SrFFYGN51nSEPec7qGpFMs8Ap24RKAJi37BuJ8eqTd3R7MqW8Q4mnDZSWhbfyKAViG",
  "key12": "5AjbKUEGeWL7GktncmWWbC9BrLTcZwoSxQJAZJUmM7Yjio8CUUcH6Xy9JsQYYygSp8Jff6xAiCeEHsC68N58Q4CY",
  "key13": "2HS9fbQdCV95HJ6szrkjbBgF9NEkkitQAoj69VhjBo4pRuHusU3jLi2RM3o7CDdSYE4fXVzkWJZ1Bi9gctFTmira",
  "key14": "2hBJUkCdVXuT9ngGbVw23KooVPWVP7az7Mq8jariUbEWcUDyLr974MDbB3dGi3U2yXkjiCXHPazTcKx3r3Aphqp4",
  "key15": "5r2EVSZ4sV1VF7898ZvMWxogb9cFikdjKNN4WXvgbzvMYmoJ36CqMQizFrfxhGsvYu7pzvSmicwBx2jvmtTopjzs",
  "key16": "5KZu8WAPVyAE5vdKwkU1SjxfoQp8yLrobZ3J4eAuWoLRyaS3BR5riW8Z9js5EZ6oPnwfiioyXBzk8QPNzdqvDzoF",
  "key17": "5WFTVALZnMzJqWLHbkTZVREKMs4ytgLLLx84ccTEsfz3c2aCR2nKYcXRcJeZ8ifbiTE6dZUTDQDK3s9FGm7tJxAu",
  "key18": "3Tquv7NWWFBVD59P51649nTdC4aULd5Hz7vYji1JH9jVwzCjacBwnYZnbkifwEZTxdTVF92CSRZaExN1t3ttKAML",
  "key19": "4YAjKyuVjRWUB2nXvYbTVgq4FJdfwvwcYC1CEg5uJU5fTsp9KSkWdgbd1meBDuwvRbpcvZ9RqNSh8WcUTm8osSjg",
  "key20": "PEUCdFSKQ1ckH4BgCdYaYW7KjqNnVq17Buw6Bfcq6dnJZueZ34npch2CoPkJfC6F3XBtFnn1DedgnEmVQSNCFqJ",
  "key21": "5yyFxkm8F1wwyDyFckuBE9cswxUsvTvVyj2ZtSPhXCcjneFNc55PtdYXFdFmK7Xqfojm6ZtPofoursFqWq5TkV9t",
  "key22": "5o6r1gZ8kxU5v3wbAcy4jo7RrfH65eWiJSTgR6qt7ZrWp7d2QVA7NgzkHJHWycpgSAdYL7DpxA9f7nUrdS34vQjq",
  "key23": "4C8SefntnEU6TMTmiwyWhCfvi7K8oddX8wpizGS3BzqSHdWKcAjGPQXPDSnZUBp7mBeG96gsHbW7b7Tsp3yFHoMk",
  "key24": "3NwPGJLZawCTrAcnk6G4jNohySqtoiCcgHYx9dd41Q9Hpqk3bpvYpHz85PTqSoZbQyjYpBFzPLE8SzM84dyFPe88",
  "key25": "4K4GzkQqKtMeaKF7WBDczkEEHySYTS8SNQqikrgMa4SHToarMRymxdzYtAvT1mUfzuUYzPumncskhYpd5uL9ikuy",
  "key26": "r1zvV5Ze6qSwSfGbqXebDxDweZ7m3HFKcwaVeiuoexmfemiUAA1UsSuYkrFrEnBDXJZmVs239sMK2e1XhrETtCR",
  "key27": "5CmHCZq5bR3tELcFvP8wcZo5tgPFaqxasXMHk5i2WS6dkCnN1PmHCT8zPPnXu1EeuZJsiGae8HTqWvNc7SL3b2tM",
  "key28": "2PDrzooUY3ah6ck2dWhQCijRTSHFXyG5ne4iDs9wz2NbfuzCJU1gZR3naPBpFiRyRwfyHhfQPoEzvw3ZmUYwMLTK",
  "key29": "5b6eDC8nb3SmTwpGKtSiNDyNBtAJpG9V7mjjDbD3C9gSH8zoMpQ7NRpzbpGdVxjH4tDsQqmUthHKGvyKKtjMYaE7",
  "key30": "3MqVvmxZ8D5Eq6nk5xoFWnARtSAmXrFcY5psz8VPWGhpS5WpQKoZQfDhKhbHGkfdhC4khMcth7R4ADeLUtNEs2M4",
  "key31": "qnszH3E4rZL7VwD25wNDt8LXjLdVCdt3peQiW2P6nahVnzLxQfM4BQE1ywZAfbfMxY8WJCgsxqrn46aR21uRuCB",
  "key32": "41nsswFg8XAHZpYXC2sseF9eJkh2g3mY3eYmcpAsHdKoG7vc3jXD63jeSAHRzkE9nfQigbPmAvvnVrCYxpFwm834",
  "key33": "4pQh96XgV43N3YNGoLoCLFXYhV7EkSCMdCUPBB2E6j8hGAHM58BhLHUNMx3J42gjSyuLun1M6ujYjFNDcoXmG8ao",
  "key34": "2DZoRRe94jf4QQ4uA4CfeLRkGabn4rHrQ7tkzSNsrES7r2kBC7bHz4UWcVyysnTnKEJEPPukYZwTWMSGUKXuiRWd",
  "key35": "54vivYvC1wCMQTgHPFKcNz4428VVrEBEPNwwV9q766z2W6UHWKBB7ipnwSzgTgB8X6BZ9Jg9LEYgUTCCTVXSnyPA",
  "key36": "62B3BeoVwwpFaXocSPxHq88gWsC3PixzgRmzSiZBv8cUG7FnU4JAqse5bdA13cncuZSUmgtUBzCqLXz7ijKTUydt",
  "key37": "5EsvUyTLvMb8TXbBQBTwfc5vJyzLJ2mQYasAwrfYY8cL6QWaXtRMYCMiDbtp4ov9HuEAWgn9haQXgQgNSXewssLQ",
  "key38": "3L4GMppm4Q8EcXWbtb8jkd5qSQvAFfBq1zJKuz83hNX4oDAkjcDcQNj4ABojZgCLpdsSEonLcfQxCYTz9uGrtT9A",
  "key39": "2Fys3er8DtCqT2WB9dejTVFB7Vuv8LUneSLYYENx3U72NBCeup2uvEumjxh8n9SHvfAS6iFf7anHmY8CrYSj8Cr1",
  "key40": "oJVefrdjy7uX6fTWnr1sVrs4sLPhBw9GfayekvDtDAVQXJMEyLdAo79rnGyVKrivJjrzN8uSiKz6wKngu6ujtPo",
  "key41": "5Uy4bSQojgkG461dBvkFJMJFY6xmUpMyPje878VuKwqrmyUvXTKTusLMz3dYDLGaEqM3AkAfJm4t61j1F9QHWXZd",
  "key42": "5uu7PAztFT6s1EJwBy28JKZxFz7ypxJUQiVw3c5sJdbb8uX9rdxicMRyo9Z4WtgtazYaJ7NEpDTN3z3ChgJJgbVJ",
  "key43": "4mnHEfTrtTeSMx6MhnyEqieCi9PkBGSmYMYgouS7u2GBj7cfh6bPrPpvVPw1MAnXqVbYw9x3FgcSH4pMhnjX5kBg"
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
