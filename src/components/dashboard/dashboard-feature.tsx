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
    "2XFF9af4pePC2TgWa3kSFAVKfkMoe1Qrs2hNPEaeWpjSB86pW8wo4B3LCKsyDsSLxSQcVGRX7EpCzZDZhnCHdT6T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3srR3aXTVjusuxtTRbZcpBRMebq4twzNaoAb239ax17XFSvE13FoZSBuFwoPFeuguJpmf3HkFdtUmzw1NNEZPeyb",
  "key1": "3tF3KY1JXK7o87qREQU2raoiDiy6DyY3JwCHKZMWbZ1Ts1mJR7q2T7S1LqchZh3TR25YgGySn7xwJSrqnGjhgTNJ",
  "key2": "51grtGXs1e3TrUf3D8kvHmdk4iSSm5WykugRd8WgBW7wVQT5K7hSeVNK3FJDmmYMwvkZjzcGp46se3jQUaWnpGtM",
  "key3": "2y4YNgxhrPZRiwPMof4Kx6AXcjzRqfeuVDanrsgx9o9hrDVfESpPkoMdMrLzuTAbwtBF2ttwV5t4yvmS29aS9cX1",
  "key4": "DzkDyUJx9UEtNj83BxBsTyui7geMEpmDtPBhKza3Eez14GypVAkhjj66cojDGhvXCecpQCF1oozPGz98gCvSki9",
  "key5": "53yh956zq5WTRb6oiWmCvTaVsWMGgaCkXXWkXDvuJKUwCX81iyaumcbwtEB7qZrqgjzkroULucEXXpyvixG6VYGy",
  "key6": "5Dd8qsAhe2EHvWY9BEQ5vamJDvfxuV7vnHajRN5V5pBv53tiTx9qozFzLmfMLpY1VWnMreAQAFtnh1mb88UXxZYc",
  "key7": "2h1kmFJZkkMUDNbCkPStJg5oZhfH6nJe7UiR7bszfyoCn6cGuk15YLLfGMc7TJCBHUzouWCdBN7CeSFMgdJJbbAL",
  "key8": "3YR8AkyGxL14gnqvdd88vpNMW6fy4USCZ8NMXHjV8dMAHtnYFrLdDiNe1HwGvhqKhcvrnojkfiPUZHvWkmcTKdb",
  "key9": "2gmESEXLaUUTmcL8sk6D8KrFn1R8W9VE8BiQDYqHXPk6BoiVLaw52RDu8DYQWeYbX5EdCtZNXj9cV4C2g9MGQCkD",
  "key10": "5QXekQGRodyrt4fWbTZhx6SuU17ikdqUohwcjPsZnUuHCebyhDkAA2vpwfyaHhjsugkR1XfVLeMDJXHTWHR9q9Z6",
  "key11": "32EvLD1GpL3knXfYwvNYMQMqwxqq74h5gJSsu8Po3JxfmzD89YFJuBjSPYcDzf21ovYyVD9Rp1ve7wFWVTGv9sfA",
  "key12": "XxP6vFE23q7YEyrHWMoiBcXK8rS4kUZeYpAXStw8e1mpN7X63cuhD7rvngG8ZCUeSwtPw3UnMxfpXqNYFtZMbxX",
  "key13": "5CVptW8Jx6n2VQsccweNuLzEheVdSWWdJkfa5QL4Ho7EcLzpd2q7Kk19Pvpk5XQ5pJRBSnoVcTFgj61UanYFjHmR",
  "key14": "41x2dnQJRwczj2932Lv58dgFXp5R7XXz1mJN8RKTn2k5jgb9RHFjxmub3sFCsw4JYBoSZKb5byqdyA2pVrkJA4W6",
  "key15": "4wKkFWRyRmGfPWyE9TzCqoYMrb3e9duNV9gR4ZWrYyoMX6UyR5sGWvLYRBWLnPFZ3z32hqzUELzqK8ci2xt8vqu5",
  "key16": "666wNHefubq4sn5X4Kh2oYVuH8fbFfRZWs7g5txziXYadAZm32B59Q5Wp2jFFFBJpfMepQG8vnE9qvMzTLmPZc7r",
  "key17": "4TWHA3TBoPB6qYVDCtcUpE9bo3owwyWJ1E4V225zSCJZpxSxEczReBumuXjsEXwdTP5yBMShax5WUHuA6G7Di3fG",
  "key18": "66MnfBBB2cuyRUKNDcNqsr4QcViaYG8kNcC8YbqbWoU3wpAVmwvYGT7XBuCJsmCJLZniz5PpcqDdKEZ34A8EYov",
  "key19": "GnRrRM4Yqnd51TS44bFZVquPb9BFeQJG8WGbri5pGZXstxCTu2Qjisrso1HGL9edwHpXS4YuiXdgfFepLSnpMNB",
  "key20": "3vEeWN4ChcbnSbhUFGyMEp8eRNnDq9AzC9LS2XKENdZ5JvSESfttxMYTn2h9wE4yDCA3GdGvNtJkaK6FYzra9DSi",
  "key21": "2usoUD9tBXpFqUGXY6PnH5a1KPK4rk9rAupYWT5CabEtLmA8yZSakkW7ZqSsiio5y66J1LjmvuhzFSAKutFwvQdX",
  "key22": "5NaJGMPV8CnqgxDqESKP9jethBZEzZ5XzEGHiXsMpuA3Gz8S5px1yKkxqQSxAcG9ZEspH2RJVsCSaL8nT7QqdaMk",
  "key23": "3v3LYRUTwi9SLdiLgjUa9wec2CPNGvb3WXzSR65uyw87LbypwYbNSQHKH6aNW4nqJGcVDiDVibXtZtYRifVtbeno",
  "key24": "4XZY4b8LGJF8kfK7Gq2SGD5aAi41S1wxSRLHVvURgPZnPJUTpFYQhXUFpR1chxoHxP7SgM41qfZq91p7umt5Z57C",
  "key25": "4gFxPbsJuV4d5m7JSqMdoXdjZPbUVT2E4hxRPpms9EdPyTmSLv4R63aEoni6BwTDVMGRZ2j6x45QP3GAc3ixjqD7",
  "key26": "2phNxSNAbcRBgKMCSeNe2bYAh9f1S6MkmcoqAkJYnM4ebc4aGTp7AMjKZhQarHeBz2gszj9ywfimMhKDLimpvcbV",
  "key27": "4Qb1yYNFg4jVgNKSeypG6V9Ar45uPB7dALuv1QwfJQ8Lu1wRrndX3jsEaVPcqCnFuSMeGgHj38Psy49n5PVzKk9K",
  "key28": "Dpwptbwh8Amsh8tPUwUtC3pARVgA2mpZcYJABi4GpSaNqgrQeNjjCXNCBBECyBTBV2WWm5jj77uqWw3wfiDTqPS",
  "key29": "5wx9nZqcW9fAVHaRZMY4KuBkoCEi2aw6KXVnW6BbBdatPYTq2bZA8bpTkmoBw6JhF4WtZjvN8QzWKD4WCfA4DD2f",
  "key30": "5AmN7NJdoshiqdcRYrL1NWsDy9gmBbdoQQu56QhJ2LU4YsCfUxHCaeWVeYJNEzGnSM1wa7zbU2cuSJx84HojV1LQ",
  "key31": "4j1bDgrDMBcj7PdRsKAbVmzgDsNmdTT5XXARtMimkcJ5fReEwZ2kXaz8kAG1MrR59DXV985AdioaLJdgnMTM7xzi",
  "key32": "4FSgD39t59VXyFRceBa4XY7414LKh9Y8n9X7MLJcNt5HfXcp1fJVFM45c5vDGhVnwfP3rtNPZNH8YQ8GpTju2F4F"
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
