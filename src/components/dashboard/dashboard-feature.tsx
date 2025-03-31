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
    "5uJwAVePBoUkMbmryuAtwws1upUcZbqPDr6fQQarKniwMjmcgVPurN5an27QcVxLYcWuSbyohMYJqF4b1qAc3QaB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FxReXjscWcE4FXUgspRQ4VUmyg9VcDWtQSQKgXMqrXsAcicUju1L22rXYKz3d6zFpedTCzCjdynpDGLThnxoAmv",
  "key1": "52rFmpLPKUZCofva6eWYMyhL374qCf1a34mer4pexLn8pyVmGBDfASZxenhD6VXdXCqueCQEVMzehHZAcVYMndYg",
  "key2": "38SaJYEnS7TAvmPiQ8Z3iTRd1LpTcngrZ4T9Eh2A8CBSYNNas71ZSxED1LWB56HKKwpFbZiZew3ZdwkqZ2ggTgDg",
  "key3": "4YaunvNPQtkRHDBuFcEZCiQAU8apQiD1tJxJqWA7d1WWtTEYwirP4R239xZQLvMu38HJpKw1LJMAnWCeihphEVkw",
  "key4": "4o7q49RNiAvhTv5n1dtbp8n1CkN223M5ShecCQEZ1ZPgC2JM7qQKKRRUAET8Rz8Pxnqw7vNiEVHsMvtgN9a1pcoc",
  "key5": "2tSiAZA1m6FEU66sJ3sshEVofgnYZ6YPq5m7EzpNYbdJMQFsqgZbBPWAmR22htzLryS5fF8xzyGWzxtjGLbN4pgD",
  "key6": "fQRtps4rwcXhE5adAFDiqrxFNwE2doG8qxnwNez8gTet2Uxwscud6uzgivpoG6yDPjUU7DCKQZWD9uyvxUWmPgn",
  "key7": "KAMyKh8haqHnJkfYWwosrVaJBEvCxtbRcNHSBAsTE7zVWsjqm9prNJyEs9kSX1SGkRHmLAnMC2JCnyUFJtfdEeS",
  "key8": "3cbvhtakjtwjfehGKZyGHxQAv8A3qMC9uNFLNya963Nc7S7HAKRL4sfMYBVgXLhSTMxCdBUmCbVsq1XcQyurE5c1",
  "key9": "65xoRHNSErJdvBmycrewMEdUVZvee4D2dcoHUp3H6yaiQXkHA1waKEMXhkSDjbF8hHU7xYGNfgXZMv3JBPbFmaQL",
  "key10": "2nt2DZopseJxmGLcpaUoYDE1VWsrhUD3JTedu2CA4pE2nyYFqtHBJnV7uuzqajo7PG58umFNM4HWTUTHwFZsD9hD",
  "key11": "2kq7ooJJ5SsR52GcFvcAtxTAkfpSwzAz5Nx4noXfB7ydvpAeJc7Wy71hQ2aBLgSYA7jd16eagYWVWZG1NDTZBW8A",
  "key12": "RUWXBQn1g2pdrMCnxtqGvk1i2HTvijXY1EZHsPFWvVBKv53XxHZdCtdqKGHf4sPZKCMJUH6tg222offAxYz8UjQ",
  "key13": "42oWRqbxxx3APUwehFJR7MvYNfvXyYHUWv9CZ3fv5NhYZqyYRhQVYf6BQxuLNPby9LZECDnJXXhgCD3v5iB6MVzc",
  "key14": "2WnCkgomKj2rtZ696vY9YkQ5LvFQgKnqhD34gz9fCqJZgwaGn6HTdwNty3vEw2Bor4FsBi9ZGgv22aeqyp7F4hUT",
  "key15": "5L5TfVq1XaLTBuViwQ3UfQpCHCJ9kc7j8fJWdJTK9U7zzkXfhr7D8SDaeVPfwbBPju1iTjogUVvgi9Vr25ZrinhA",
  "key16": "5uYcnsAsBeAQ33Etpq9DWt9p4MXwFmKH4a9PWQKeVS7q2SsQzpGyHrYGW8ViLeqzYW4BJB9won4aRLVdEzZ7UXDY",
  "key17": "2qAW2D4w5R67DQsnydPd9zrwdqXjVYuwKFmYCBBoZhQEuQ7dtnxrkMLqDyN5WiBuUdmTEicwGoyPZHz1fkenBMHf",
  "key18": "2refCibRuFWQgjxTm4ULUJzpGFKzLATCphUUoDPYrHdnnw8hZnMrjrYZBjkxdW3ee7bh96TyLbcXGcHA3sCnU7hJ",
  "key19": "ikVqMQu8kof12ky3ZVwpQYtNpGuPSiX621d9FA8XcqW4HGN8b91mehixGeVpHJVjWQFjXFTRAH7EF81eWPCvPnd",
  "key20": "3vVN48bwxgGFDzbeup2QsUZhskN23bbkizpfMcgKqnURxJ3jvTo6fyTbthTBEVHGFWZ6WtHaoxwKprZXhpoXzb7V",
  "key21": "2q6mKMjvtUn7SXSJCT21HYnAAcQQsbYBZjCDCFJ3ss36UnQSevxsKJLV3JmbzyJMot1AW7dPnxJ79ARMUZZbVcF5",
  "key22": "5DEsJdZzVWg7KUGsyiqxjpaXzBaFiahASrEFkqWjJEsKk32CznLM1j8H6QmPcy7b3t14qG2kTRset36PZTzyr4Nb",
  "key23": "23p1B1DS6BTfUHDjrqmiXCMD5SHTm8x8farrhQYahHmwy8oM4bJLFD7P4sktyqgaw3xbzKSiniBDoTtH6ETxUWF9",
  "key24": "4fMZYAvq2MyWrxBnzwgrh9KMs68Tthj2dRAWB1pexTZNLPbgHq89RMHD2pYtT5cXEJD5BkHkPFRzEbe7rZPNwq7L",
  "key25": "utJJHbvaaCGPVmXVzg6d61rpHVfoJJG2hxVsPD6nbZ2wv2r71ffCVQDdap1MCCE5iCpwTzAv4xXDmwQvaaK1SsK",
  "key26": "3MZ3VhGP3ts6zFeoBYhGw3xLjnish5FyqWYX3b8saWhZVmtBWe1HxpNN9id2gePtpeaxX7KPTV1asDX8jxAQqQoH",
  "key27": "4wbr6nN4AovbdWExqok5sJTZtGgBQGz5HhjAY4RSjZ2aHre7zqb4jpiPKjj5MVE9x13G9uEAXgFiFyHAEenWVcMz",
  "key28": "rBSHamx8MHHjKoJTgT6ep3jnKcVYHXfWSbEDS6eEgZXKKBxKZ2XB7wGgtyPDUjWbhSGqX4h1uTq4MxDNiExCkGz",
  "key29": "4YNUXb3RB2w2ExprAWS3R8saqJxtZT1Ez9K5EQLNsqDLvqCA8b7wHqdeSUMxNrDWVz9ANA3xi8sN6JrtVzP9LPQc",
  "key30": "5y4bwkEDRRjeyS8EvzGeNgiPTHvGdFgwJJ8c3r4V6wBqvRbv5bJCoGGCF9vt6x5SsZvqq5Txo1tCrcihVXdLoQjK",
  "key31": "dXLRzK8Nszd1hheEH8C2AZMby41CJyakXXf2npMAWdrPFPo8NbFG2jcRCyMitHDq5KN3u5gGra1wWyZY2UyyrHw",
  "key32": "5CgA4KKzxrQCYdYmE9CDGLVzpa52L3AgD1dktbEbVdWziMTzQyzdQ1H8HJ2CrpyYRAF3qXVcGyDYZaxbLFTk5pL",
  "key33": "4C4e8hULb8tgbjuNKsNKUEQp7evRmz3g3GiWGwgUZyvmookL1fcSw2snzkEeYwp3MFE9Uhiks4WVSerA46mACQeq",
  "key34": "4vfFJHWDUxEEAksx42wrZAUZYbs4549MrDLTVmBQpa23YkxuDfbDqBJS5YNqiwWCJAe4899Bnn5zUWcAiwcPzh5t",
  "key35": "5V2YPcgrtwc13uHE1SBrypj5xrMcK5yHMnrLAPoGxTbJ7tXsRyJPvoHZj7Bc3FdP4jzvhe3bs75bVvCrLCCBvHYv",
  "key36": "41YeNxQRGoFnmAiYMc2W7H5kJ2j2YhAYM7vDbh7nRCELaW54t2PSNUZc2hsh7xi9Pe4iqBHHUSWY8RDd1ruptQT6",
  "key37": "rMbS7wZ7N6neBzAifQFMCL46pSnYiC5N3JL2U2xDeJWrJ8R3eYe8nWHqmdjmq2y4GaqEiZVeYSFRVTTBtW5Deiv",
  "key38": "3Rikwh21AP3CsPzVfeJzf9hR8b1nwrF1f6SPFmNhm2zqiNbZXanPjhZ8LdhsDNxa7jZuQ3tXSFzaZe7dcGvKUeXs",
  "key39": "udNDP9fY5hi6FJVHjcuqhkP4jfUoX2k3WCiGWthdzQqmtPGfs9yujzEJVuezx8euayEtKoiH6pNYeheEwMrvAXb",
  "key40": "3h16XV8bkjkfGjN2oHkBPzcmboX6GoTVtk95uqj6jquTgS3ySKvhpAQoTUfUqrvtecEQ6wuAAyqECXQFiBqfJsGJ",
  "key41": "5EYxXzTrvdFq9sWxhHjk9skxJC47WgcitpfBNZFSepNu79G4TwSRUpWZBwVzg8d9mvcW9z9xNQeN5N3qvSAYtrvt",
  "key42": "zUW7YuKgyGaguQtiqHqysXKexYpM5reHpRnvTrAVqDo5qnu9gGYAfEHNckYbhZtNihSngz8565qNZaTqdNsAGW8"
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
