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
    "5TWGYXiQosGDvBKGvqhzb3AXcXLArVC7GY4Rdh9hLJKDa87Fdmn8mdHF3D2MJjS5nNuobN9R31ZL4xxTFsbXdQdi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JBfWATPfxoJH2yb371AAA9LHfGCqtaJtQqKf8X8NG9GEykAQqfedL1i8FBwai4X4PWtNekFBfxNpwa1mVyCsoJc",
  "key1": "5k5DUHWT669pSpp4HguBecn3G4ttMNiUKUnhDmjzSQcjWJ8cy1UX7YSmboE41gnQTff9Y5iAaPRxJKnK5ps44fvQ",
  "key2": "3vjd3CGLZUw2Tz7LSBkybCjWYVyi9mcAQH96Gjz28buGrG3qrgtaKEMjZwzxtRL7mUAyhczUv89mqxpNeUC8jMkj",
  "key3": "5oBWwS3AAJCbvFbjiC1yoSuqeUduLZ9q29Gc5C76mxndejnhsD6e9tnRzErvVovxNyRkCsiF8UczRSLXMGnFVuTq",
  "key4": "4ojDWbY787gSSy4gYaWfRNtomrB44QxajXUY1EpDmMXJiHm3m38dHsBUAudpHsoAsd1wynmbtqk3CFnWHWzC7itJ",
  "key5": "3Vg5cy4fcwTePZa7MnnApg3mAQ1JtwEt8zAbmwz7d4parNn1bAQPwm7no4nvnC1DPz4bJqpsfLyTWK4AZErT65bR",
  "key6": "33Cq9Gdh2ZBLotrgecqGse2GNxEnNDDxFKXcqfhbEoPfhvRtehhpqUsqbBwYiZqiZWSdz43w27Hno8L2uWy7DfUf",
  "key7": "3c9oMeas1SXxKwp8Y1ByidzBUvmQvHcMg51Z6hvhCSN9amEqqq96D8mJKdoRP7JKf7vMuoc3XjQJuakdjzhh9pj4",
  "key8": "56w7rbpPvqEgM6gKNoqCj7Jft85ifFvpwa3qEYK2UrphrGcU3bAQffPSqQcsKEz7fjXALatZ2JBxbvRo6nQ1TpGd",
  "key9": "3GbrrkV422a7mjhDP43DCAW1G8BYLrvmqVy9T4bQEYX7nA2WjT1d8jJo3HezQkQNYeJgZfTD6j6puEsHsUWgMV7j",
  "key10": "2brinYktsyWArbbzj2vQLx6SVrPu1NrZgXdk6EWif3ZPzB8gpZzy4b83ZYkxH7LFu5pMC5oTCkmMECiC6KuP7zDZ",
  "key11": "5QMi8S2ebjvQdWmG4FzptjY1DHpXD75bBoSGFKPTJawDRmx7SuKpaBg2m17VapmVVTZRreGDuSct7xVYxUX1e6VW",
  "key12": "4xt6xzihzQj61sG4yb5un4H1sH2f31uHajFyWWTwREtjGVaFHrw899N2VQkNyKtG7DSbMywdggUzTCYkVWUWE3YP",
  "key13": "5V6NdWj87SqXYHER1bVX1wUtPxkvk7X2sfgCU1MEZg1gM71CHRAf6WGnfxaSoN9N2zJyvVxKm5Z2VkB1hvqRe4eX",
  "key14": "3qvrdbLC6cg6XgVKuHDWMezbqGcnGp1ETNY17rKBCHUzcR8TTuhypj4VDHPcbhdGQbRgy2E86qfajLjcXJPmHr5e",
  "key15": "4YyCMi4n7awUsWiiwvvSmcxnytrUt46yznEHMevwRgVdLuG3R6PZ3xac6nLd7bERaHu3APVk4gB7QVT69Cr7mvJk",
  "key16": "4FQdk76hVNtVsLHCK55h9x7tdBbqvRUWBJveAjLw3MMy6BBeo2NCn6Kfds7Neh93mibsZjFQpHG1g8JSCyPep7LH",
  "key17": "586iCexDdj9gkBbKJw14bTYkyVBvb4SrBn3xjaYVcijMzLwh6WLj4tkDPciZpkb6pu7T16RCJUELTc8NxZRhc4a6",
  "key18": "2wASDkpdG9uyUbUrN9rKteCQQAdbFy1edvWfAjNB3g2Nf9U5mmenifu4HLJaqqGpAhAG9DUdotDzDSS5UvzAfnta",
  "key19": "35dQhxixm676WZb4dftBmi3f6fnx9GEJSLinZjgKhPQ7wfcVgxok7Kx7M9xgusrQGDVNu2vqCcixk8rKT6NwKmG7",
  "key20": "2KbEGPRyj8A1JpbXkRt3vPdTantgePgJiJfScyGArqdk4wNKHhQYg6zXsQAjHn3oR8qSFYLg8qBKEqzcRf2bSvTU",
  "key21": "4okBkaDPoTkAp7rGRzYFTUbpQdH3e4GSvXJeRiFBtNtDRGxRt4n6GX4D1e6aYCYMTSwBe5HL3haU2odDbw28MhhS",
  "key22": "5V6QiQibg45FEeotzYb2wFgMmonn3TJjYFYTEzSRBqCJf6rJ7KNkBNPZRYEr46xwhjYhSC4mCwrfB3t2jYpJYLv3",
  "key23": "2wcUvzrxSEz1PybcXz6ZZfxiD8F7VR3we2wdUe5Xoq4B5R34dSi7NRupch9UQEgvaCUBrPV1puo2uzAKNzaKSLTx",
  "key24": "3JrDApg9hnZi12GKdyTAkdZKhEvE1qC5vJLsprSvamb7iUzW97tWEni9asHC2uvfdJ12Dhy7idqWEb9sfyxbQDiR",
  "key25": "3zMcxWMXaud7ig9XJfSgdgEJxacjNpGauyDfXBwS2VDNGzreEBEGCP7Ppq6SSDXURQdsyGp6bkPNhDXRDrBXGtSp",
  "key26": "5zjTCJhDUB3NHnzHuMCaEa5NSe6ix4ix6Ah5fbdenirUSE5ApCLbvHaDo8NtFsPgEWaGJJBm4NknP54wM63kzLrg",
  "key27": "2ArHA6ArNC4VxnwGzMJocuZYqKjjt2KKe7SDtK3uxgv99eRBS9UJxT8BHN8QuQgk8AqM4aV5546F3Ctmyf5eR4n2",
  "key28": "2RLXeemQTs83SBsDNuzgMq1nBUJfYEUjFh5Ket7DpxaTL3Tpdyk64gxYXfo7j9ikdfun3jnvRY9khvqLGRs17oci",
  "key29": "3ZxKshQJDoLRbwZaQbfJTbnHZR5kDcFVcKx8L7oeYjpjCS3bZjwMKSqhs4Mhd5QgPBvxS3i6qyLwa47u1s7VaXqf",
  "key30": "5RSbRXQiTnecdSfYgStQAGJtdKwcJv4HNpYS9zfKTYSzNTkbxS8atbdC6XjzV3kmZ7DzBYAGggQyJubZ5hDPBviG",
  "key31": "2vp7MBxwCLACjtLgfcETvzjseNnyjVXHU1Bw7Rd9bY8kCZF7zkqLGRc9Wddmw8Z8XhnATMfnzWbVaGN9aHrKFLxY",
  "key32": "4Kk9HEDE1cC1URCpiDF5zpXEu2XsgiPf4aFb4fkQkpjAPUXXUru7nreQVyhxj6a6j9vzS4XQGPoTRnTpKxoBq7Ji",
  "key33": "4yyfVNdKCSRNqUM5AfRNdHs1d4fDTnrVXc8xvUMCrWotvDrsTSzrZ1Hpd5a3MHTn3cJWzWfBZBjQ6RLVi13jaEAK",
  "key34": "5vZf4jnMkMKzzqua6aFHs13ru9oVz3n8R9EbzsPJBc2U19E4Bi6fSSAQufyTGnebm5gZJ7JTtx39oPmpRReZKoye",
  "key35": "2hpc9ahdg3mMHJPp6JGPf8fnGNGH6pyyx3bE21BkPNB14WC8bwep2eJUj3PyX4wo2PJb9QTGj5PePcyCtkckqonY",
  "key36": "3BfVEXujgPSYrVHbPe268FAZQR1e3KYmS3xrxw4amgK4JWxKA1WZStA1P4t6SN8Xh3Ank9a53TChodDEvTymnf5G",
  "key37": "5uqvB5XfVauUrvPZfNdkW677TTjskSeY38yBDFhLBgbrUCaZApq7xJ8gFTpAkM7ppwcHdS1Z1B15kv1FyFRzVL11",
  "key38": "2EQES8BxdASMk5VXELeER3FbkdCDBGvgSRcgb8XM1FVzbzwipu8RRWdM9vNsronShdreiag4A7tBdSZFD41RCnM9",
  "key39": "9yeMXKcPWLYbnB73hp7kgd2j8mEM9Cdqp6Cjvo2UqnSj1ch3DfDjzzhio9kVdq2cC5XVX1TWr6YZysidRNigEHf",
  "key40": "3XxLGAKeJVPng6pGAhgJ24KhZezxNS7xkmjrvUaeVxuDyiyLNdcn9aRuKZJ7bTXDT4z5CGy1gZRqkPJVXGdcRmN4"
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
