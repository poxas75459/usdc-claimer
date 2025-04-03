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
    "pk98DjqVGrg98b4UFgFQP5Y5v4Tda2xVPzuJo9arpofoAe7WGhkQbJ3RfRLVy5mNvFo4jBXFXGPKprgAcoCYzAP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B1zpUWhi9Wt9tPpTdYva7Ca8tfDhS44VgSGMKTUmGxh3GruqrDsw84QahktLGMa2mAe7BfvMcN2KRyVeyuha2U5",
  "key1": "5hyFM6fbUk1AV6uQqc6r8WcHzkoKr4ogyAJhGZTvkiphuqG5gGLCqbZ2CFJPJQGKUDC8QVm6zULiX4eoJUbfSy41",
  "key2": "2rgqkc859yoCJo2CQZqtcMZnACe9KFB2JG4xMRmQNqU9FMUXCcwydQciFiS3gdz45LLgmHUynfiySNVETjgfiBTD",
  "key3": "5tvXVrkxjKWD3b4zsvFkaM7ifwUCLgpq4cprRXGC3TJVW9MnbaeqQm91PFTyHNLtQnXtG4aQDJicxBxVyLHbr5oP",
  "key4": "2SCp8GN3Wn3i7yQz6iy8WcRmNHFfJi4PH82GVGJqdcVMdNzuP7SXk5sNDtri36Cdvj2c2AV8QH4SmKCw1ZB3sGqy",
  "key5": "5dEtEqXDWw9SiYQmmzByyoEHgeqTLT2mP5LKceHJJyDnqjH2jsdKJT57QuduLw8ZckVrh4yyfga5eMZxknCBvbwb",
  "key6": "4LrFTdkV7h2mPcGaC4FNeLNGcGjwYy3UJ8zs9E6EuCWNBP4cF14TQBgTuzQmrD6mtFwaq6Zghx5GyZEXjZEHViKs",
  "key7": "5yHcZgdpzhfUuaVCPF7fJ1cvpX14hFXSBte8PiwXY7VKoZj4ZwFAdJJJPQ1aWb1zpm9LECAc6EBRz1FYuuQ6FMNw",
  "key8": "5wagcNG8JoAdtg4pqUg3nzm6vEyzp7CMm4NrS8yeUFLozq4iGEcYwRXqX6QP6PeN8Q5V6aCjchi7VYUDt2nRTmz9",
  "key9": "2Q5H9c6qh9umK9vKB64UTdyM23Jf7Gph9XPnNyMYMFePotD9gryYyBwHW2Rv2gRZrCSSpMBmsLqrTRpaano3dntD",
  "key10": "5fuNokj9nqzW38vZkhGP3YrPz8qZ2GMjfepk7saG9XzcfgMLHsGEu9k7qgQuB96so9zzZVjPbfG7pyMisDY1ykpW",
  "key11": "5AZNzcgFWGpL9qtUnYSJx5vUKdkASNMPmhD6c8qbmVjHMoV2686EWHkkZrQufSCuCTSYxGnNQJBaV2JFBcWciqet",
  "key12": "dtmWMT23jp7NGCMBkELdRbLu4u442dPAndk8CRyVY99n7kJA1AViKUgVXKy44eWXJjnTrVRv6jXyroRZ7Z2G7Wp",
  "key13": "k7X4LbBh5MmCEok44pk4vC4NL8NPbnkePYpqXzKBeDK42oJ2MwwApuWCxx1iq4FhqVSL127nKX9n1THhU1ib49X",
  "key14": "44jauTB2PPQ7fnMBRz7Fgbi5MWyW8D5cMzoxpeZuek3Ru18yGMMPiqnqpbZsQhXvABLvxDDtKwZa1KeeNArRHKqm",
  "key15": "4GhkTbQfcybkhMxGJr9b2QXJ4xgP9BztQ1N4YLACGSzGbTLeWzpJuphysHkt9ktkmC2DWD9y9NHnKFKPaqArgiuf",
  "key16": "4fNUunsbei11HaP28FiNW8xNSo3MGhsTWZS1hk9PptGuyvXa668DhYjBeHu65pbmK2CizbKSedDcSiXgfDHDvjSL",
  "key17": "5taD1d2fbCu8kVRxbRhfUrQGeVpJhrq6MoTjeh6qy3BMbnP6738ThyFpBS12sEAuMBuYxSt9fnPuJ5VKiDK4TPKr",
  "key18": "4PEg1Hm4PsLFjjC8ZuWia7irMEvyxsMoo6GePo889TuoJAooEx2sDH2HSmJrViCtzxTkw1WimkSwCZKLJ7qpyvZL",
  "key19": "pmSuQskgvFzPWLHiu2SGE4pW8LRwA7bFM9P9xzcKeBjiQgpyR3WVCWfg1qmi4bT1RKBttusur7CHV6Qs7qz6Mkq",
  "key20": "2ujSWog9nK27DXwgGAcjAKTPiau1Ni7qsfobzcfQ3zj2X1akbguzN1fdUskrLMUWNiaQU8qDRNHG6cURShqNov4w",
  "key21": "2aVp5z1gHGi2xjLJSe3oguphM41F9RR5RZrqri7HN3yjxh79zazASAZYBiebBZznHjpzeU8qGNhbUT6V2fXvGkFZ",
  "key22": "3WMcWq2zFktCHZhBCn4jJr5J8oxBKHYCjLcvUebumQuQ781dv9389UBeYoDr3zqdD8eYkxSnFpaJgXUCpJtP5vbv",
  "key23": "5qEBjYGv822wHTr5mer2syvrZuZ4X5MXeW6eyaeRnMW7rgo4iokQG3UQZHTDw9QooY4VgL3jy4ZA3NAnbgy4Ns9B",
  "key24": "4c43AJmPmDV3ZV4VYTyH2siXqUu58fqNHMVFjLp6LhekTwqrRknN179LFxg7QMfKgJw8QJHFgWNvzZKST9sGYm8e",
  "key25": "nFYxQBb2UV9mLfSr639Cmv8bv4DdbzSCvTMLBpeze38fULSZjgX3u27zN4fJqbfXinZ1BXMggH3JG5W42W1EBR9",
  "key26": "3LJ6957zJtPeiH8PkYDWgn8tBkUkqcLtENznb49wpameHfx4nm4411As1wzhzAMiUUMQrBBCTKTxcJvdqnWizpDG",
  "key27": "4KUiS6jUneZiWoFzvPE7e71uW1qiZ9wMQguLAjcXKQT71rsBirfXm2G65qvh8vMMUoNNhsuZuWsJDsSyYbjLhiiA",
  "key28": "44QEhSdTUxk1eLrDbydRm7BhPq7Q8grN1UURaMpzLsTPhXJnJJgzwoACUEX7MsrWfrv9itt8D3xPrgxJEfoSP1pq",
  "key29": "e5fQ3BUoaSY4chxhe5b9wLwBe8xVPkrhVogvmJoAg8mF5ojgmyN1PAmkoXZo5Skr8k3xG1dCS9BgQg4jdvYTDMV",
  "key30": "5nohNXzrsnoKneJE8AHgq8TkPL2sAiiWyPj16NfC1X8WhYy5ukn5cdgBLRZyybsbxXTBUaSsyfAyXjHFBVtETvFb",
  "key31": "5EiGqTaqKXsSaKNeBrgiF6w2ENxkK9LZEiMsBs2KdfxM87ULMGpGKM6Z74bnZL437vWfBFkoh5LQQPPfj8KQzqeQ",
  "key32": "4P5NHk6kYunw7xbfwDbmrmaNJ9kDWLwG1KyvMtnNzAsHdaMSRsRo763xNKq7xLd2UYwBy3V4wSVTgpK8VPz7EztE",
  "key33": "2UFpdzbxs31dVaoJpP3XohKyVQvDpzbLB1p4ccmVb2Bd3oT6jf6Hf3wbbAv1LrdPxw2coi2y73PiWMHBB1P66WEh",
  "key34": "4mpYMiCdZTEMbgVYHkuXGB9z492wHt66hziU6E1YtWwEZB2ktPTeJzvqJm3aU5ggLL65KFXyecA7QEhN2x9aJ2Fv",
  "key35": "5G6DUu5d4z9J8eKzfc9ibeb79soTd2i4CEE3WJV9dCbY7nAbzPEagbQ85bERBFhxRrh9YoFZWgLgb863LR9412zb",
  "key36": "4GSAJbdBjEohesEzXMkfycj595VXvjWZCuNJ9kjuQLhCgDRDkFc2VauaC7fFBcqbTJ29DDxAyLjsiPPX4gLXs67M",
  "key37": "635T9edEfAHCqzcEbzgoe87oT7jWzi8tpLQKZ9jLYchyRY9ZP86TuucvTG6EYvYcWRfHH9gWeNK6tHGEeRZJSaQz",
  "key38": "5qmS14R6Rca54A44F21xETmJJ6Xk635WWo61BNjxDNGwJ7nrtqCJxKz1Q32PNBR9oUGo7SGXNhiPVJFyJE4U6Rst",
  "key39": "4GBDViUJTsYDzruQDHpxiTpa6VjsxQ9s7qf4PLtAeWK5bkQTSQytxBXDeHnKZd6ujXSMFwj5HBdXNMwsTzYWiWbu",
  "key40": "5eJVn9beXXewMHCsii5MJM2EAMkxAVXyjCmGTHxwhtdXtveMvvSX5RBB6dQ9v8eJqhD4eH52tVmehXihRQpmSVKC"
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
