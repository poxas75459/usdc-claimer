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
    "SD73tswKFCSyyFR2QhFwTRq7msRN49PZweo4Worau3NACixRhx7ggVcNcXPDLtY33Ae8kCB3K7SEViJizYsAAkw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pfU9fBVq1Ptzbyztky3VuvHoBQsU3FzawnJ56dHn46wCUNdUyGGdSuTdmV7umKBgapF5uqqoiuXrUonpisiqTps",
  "key1": "EBGWbSjwKb1J4hjZZHiwYDVu1MTNQP33B4Ly8a222s35YaCeC2iKXLAZhTMha8k78bLSoiZ5hTEutCTLnQCpPAK",
  "key2": "3TSteBf6W8nRJC9257ewCq8sbvPNgbyGXW2ahRVtFFGooVJA7JS7vQqirgNndQcDD4o1FkW8ScbHMU6FSwvy7qtz",
  "key3": "uGAuNaK4aCDxTkcmBxjyidopUo3u4VKwhJ1kuyiyiXftKVJUaURf73fUnYcNgf9zecTLiVZoJGFVkbBYYiSCvb1",
  "key4": "5EbTZ7UfuMhJeWwF9ChBLnd8S4Kqpq619iSzJRZcFJb2MhRuthYwQL9Kc1ddfMs2fw8Mhd7MnPKiMaWwRQsyqkCv",
  "key5": "3kweeDo9ppgvfxKfAu81cKgVLrbjRy6xLYjMC6Ch4v6xrKMoAUh2cCkDJroQY764hNLnjYdqg915L3QZc8VZg6Em",
  "key6": "YEzuTE5RcvRuK41q9kFLs93pJK4bM44mSdap9gpf2DD2pkDqiEkUL5j33oGNhyRGYNYnguzNwyM52XQ84UhFA5P",
  "key7": "31ccneqdP5ZK2z3pJ3nRQ8sSGnei8ezvVrnm4xJ6ovAW1ZpAJ7cukhjspiyKdqvpW5WGdKngrEXY5npETV1oHv2K",
  "key8": "2qXFAE3Eqnnu4PeV2G9MaozFcGLzB2bTgeqSGwm5n9zNYEPunMdXwiH96bKhQH8x2nbgPiKAEjKCV72MtzCs29wL",
  "key9": "2bYbLFkXU8ZesqtThZk3Lg8S3szF2kFr1VWKtJhAzjueA11fDMtms6aLDuxvWxqZ6zN2mQtDLzSPHugT2JWXdKqb",
  "key10": "4iNbR8DBA4KdTCegn1SHkcyLhgL2jdqps43PXqXXNEYzbnsTF4VYCXZt4F4y4mFPP8Vr6sFJWmbciy1xpGvvpqnX",
  "key11": "62xh13K7hXLq66ujEqVCLgfVhdzoswyCH19UeCRm3RExvDGLTFz3wERyTuMsT27Zh3osjfMbRzzJ72iUctNpSSZb",
  "key12": "aoF8XixGkqnXen94NKphVGbxvVbsJmuL8oSPWGyoQfEysHRnKr1QyVfYzUi1i3JiyermD6PxQJq2TxanvmU9gof",
  "key13": "35PFgMW1xhim3ohysRKGJLVynHoP3xuX2Yg77zVnmnzwwzezTAfe3K7USV85QV2E42TAeYx75JZD8o6yy9ksHAaY",
  "key14": "4w4LDgjHrirxYugLRe7ZX5DB8Jg6rAWtubzUspY1w4Ho3AKF7Y58Md55C3fXbreshGPYpyBrECgviavR4Q8mj115",
  "key15": "5paU7LU9dKwP4RZALyPyF8rLGvMAHyGpMXmE4AKVQeWi6bCVLXYHJR7SfqY4JxGvi8pP1c5f3mP57yqprcURyL6p",
  "key16": "4K1emWNyV4HudfiUU5SxuWKKU15vB6mmmu5KiQd48jhN1SGKbW4EnCGVfx4zxNNbWjSyE2KhPG4koDR1bYqrQzsP",
  "key17": "2RdvN1w8gQ9d9cY9SeaSDFRpLGenLCSJutWoyQDRB7PV7Btjc69YXgrU2NYt6qYmUmu8QKMARYnbXR635QyumddQ",
  "key18": "5rMk9hHg24rHz4T24syuRzYvgUtHw9uPJauKbwdHJnXmbhDnKv2c2TqLqjD21fJ6sd2gJZaEwEazxxf5JAHFM2Wf",
  "key19": "4XTBsiosdB2Xp91aeKD29sujbXT4EkvcVvvLviPKsRbbXgn7DTTeqc2GH8bb2myeik4QYP7HsycvU9VeQ62wMS6C",
  "key20": "4dzyh3vpfXJdQnD3H2HLHM9toiweUTy1fiNaCqHK5N19ds4YKXVSsHgis2RRwo6B7hbUX5sRqFxymBcDfmEj3yyY",
  "key21": "5dyzmVU1pUti5k6E6exzK3g2S4XiYztEc8LM1gND3x7xotGcosXykVQrWhbaDbisuaW1EmAzRC8FY45SBda3cavf",
  "key22": "6DfPRU8eQo57J8obHKg4dLDiWYBtJHAnj1FuZEQJzjtPHQpmBUo5dLDHs4ory4ZshfKziQESJFVLgFL3XFrtaDC",
  "key23": "3Cmvd1uBnq8WE2nSqnjv4ooqKMCxPekbXDnhtHoZjxnc5gi65PQXFH7Z9uTW46KeXmdtQSR2qJM4GdHXeB6zz7xq",
  "key24": "66UZbmiQFvjzuqzrCvJXNX7ToTv9u2SYUBuhwFhqgpkTWsin3aZbUCSEuYze5DCQ5quoHSxeLL72yT66GfVYGZpT",
  "key25": "2HSBdZMgy9hmaGuGVSpQ8A1sAHc81rhkDY46u6T9d96HM8QfanBNMVWzJQhMf62E1uqSienaZQfKs8tiakKUNw7c",
  "key26": "4akCwxFUEK7hMapZoEA6xmmXqVZKwrhLnHDc3uiqJnZStjuxytQ74dwKUUsPh4FkdQheNvZRtKd1Ggv4WUaukeS8",
  "key27": "5fFknP8xkYtcZcxaPjQ1M8HK3e8vbaS52sePbRyw7P7N8m8CtodV8SZtbsP4PP3HzaPpnEBQES9sbcd7GC7VF1jS",
  "key28": "5S3Btzqqh29dBx8j9H2zoh3r1ZmKGeHoSF25nDQ2mjLsVxpVMq9zwdhEZaXzhGxhKcvc5z4c1iRC5nTLdpbMJ8H9",
  "key29": "btAejRL5GV899YX4zcFCbj2k1cPsicj8S436kMugQbgDiqtCMnxkAj4tbRa4b4dPxnvSJTX89ZTbF2MkzuMvrYL",
  "key30": "5gsoVPVAvmtoZCNixSRT46evVRjUNj4CDAMpb3jCqeTwrb6AXLVhYQW8yWAhMxwP6AKTZ1Qq4E47HLVWafoxMVum",
  "key31": "5WE9myL4LGGBbaC5VAzscP4F73j3HUbGa5twSLEAgNyrqzS9cue9fL5xFDkatvHFQGkgEMfRbTJMv3CA2rbgNHgJ",
  "key32": "3UNUkH48m9EiZWpZp3jfDKEcnvMPSyYXpK9xw9A974zkiJKqhSgccxcCwLN647SRYXjbAjh8w5btMc8NRcYAVtsn",
  "key33": "2t2Hq3CkKyLNWsgb2kJUbuV1pwxo6scT93uaBbsE7GjG7LcqqarzbdLeaaZRw5JuQJpdK5Y5HhPBfYMiumhiUv99",
  "key34": "BqaWshFsAURjuCoDuCAqiRXcWd4cikAhiZNGAJwzAWu97MJr4F9qTJfMpTd8QwAQpVmcY4NRX8XzqrjHUwZ7ZSx",
  "key35": "59gmvapGekV76UM77FiM8zGQNyJ3TfqQkbMj8s5qVSTJ649nYvVcRD4TruEtfTrXdpEcmuj4HkUwch5fQXGogsJn",
  "key36": "2pgLXNnwqTiox6EpmhqHRkJTqreqsm1BNqa41DJG8PGvsFbGtUcgKAkubQaBFXp9TW3EXa94ZNTKWQBDhyaPWsYU",
  "key37": "Vpzg7hvAbaE9Etf9Y8rwSxaiPY2C2FJAY7MFnH3ZTYnVkjKdrCCuNsovimtmoW6eWePQayj8ZSQ8WLaC3W5SFGB",
  "key38": "2ecHY9aqsq5C9HQwge4sKE2SXc944KFeFtFahDyDJAY6MyL5Eo517gr38ALdzuNgbRCj7MKhaYaQUaoidm25HjQK",
  "key39": "4rUoCqmTRvqNHTBqZHvMNQPUabznoimKJBrZpY1SBaW5tT8NBmPqqQVvuZTCGZkSbMUAPtPAdLyau8FGcEBhVFhk",
  "key40": "2HNqsDtW7q8vScskgQAiUp7UJGVSXesvMJUGubmieWL26ytNrZRsUzYEtz2GCzKai1WWdVHJxz3frE5Mqg1cEYoL",
  "key41": "63gZmE3CiiPHXcDYhaTYpX8V6HvfjFjynvMrk4mv2gae7qqRfEtVbhL5KBu5FxSf4iA2wxJBiy3fccTfuUTccPja",
  "key42": "t8Nuohzvm64vpws2r4S87NB3uLa3tTK4EGX4czo8qkYG9KqwZqcsQAMCrXkX2p1JTMNHjG3LmUPThaSmjkmAuTB",
  "key43": "3MxNZ56SPs7LSLQue6f22K5SgpFBiSxwRwjK8egUAQCqQU4yW939The2K5NBoccF1QKttB1cfsYZm5s8ZujcTRGF",
  "key44": "wX9FmVkVsPzYTJnKZCxJKehRRsvH9qt33JXQidypiJsHQfjBMMP8GM7j1k1CvjFZUY7TzJzEaCTrEvgLSPKgUPG"
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
