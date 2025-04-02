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
    "MpkZXxR4tLbq6uoGNUvNyeVn3goMa9uNQZzqeKpMF7xcw9KNicN2R9EFn6Pq3FXqLHs7UA67VSWXNd6icYYez7Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TSKrCP45itDNZDeVGMj45dombj28XUAWD6NVqwbZmuBVvp4cYrBxV9c11RhHnTQ9iVdfHRhpuduCXVesiwb6Fo2",
  "key1": "gTrpXPSynWhvJWnAJqVntRMxbPaxyH1PRjJbCXDePjUnNKhR5RxHxB6iJUYRTmEeTPu7h2BSxSfkJHfc5ryH77r",
  "key2": "3imbSTNWNPpBqQu4Ai8BE3sZSC3xnK4nz2fAUbC4Rw2qjog2jdZSv5qe3SH9izExZt7nx1fEdXdurWPgrgdMqBYK",
  "key3": "njsyLcoua6tDCqkU2YiYC79VPzDoxjzysAEFSLTWNJG45iMNra1rXxopBAi53rjRumTqvkw49xQRgqpR5NeZ5sJ",
  "key4": "2UAa6K3juXAyrXviuF6yGKB7g3k7DRV7xVfHiGK4RWJAyyk1FyZcAg5svY4T7G1KWfSsFrGeVxTR1yZnGxK3KeRt",
  "key5": "2k69Schnsk37ocNYN9VUqvbXNA3WjHt2SH1MQD1xDWnXjUkxqjPzpqbeTw3FPsCKFZF2NGJJHycoyz674eYqmqu5",
  "key6": "3FrwLs1zm1nKEhkHiWZTKMdy8Jc4PT8zRgWYf7nZjXe5Kdb7ffF9ayc4MpBXBQiAjToDLkeNGEKRXPz3XkBBYxV9",
  "key7": "nJmT8z2RWLefKbxGpHDXoE7MXYYVDZ7hDMvkV9gty9mgiKs1FQkGRsF2W3rAYH437sZEuTqmpQL7Ue5NaJ6ZtsR",
  "key8": "5FcTGcnkvYhKXBRaJz1YC8nHAs8q7nYikuwfU4xBiUzKyPikWd1wHxUSXD7P87f8pGauoaz1fEi7nHpKHLYn3jxL",
  "key9": "4xSrV8rJyzGqWi4iuCTji9M1PmafzMJLzPdgukQYodRV1NwJtoS1pBXMwGi41hbaSC8M8dWKeu2yoTVBrUnnvtE1",
  "key10": "338QujnXEeedfYhLrC9wRf4ZBn9fRLBegK8VTiFgB8tZxeWhtjb8E3n6x2NuQrmYKr4wfDPKDjHT4iXWVGcr8UtW",
  "key11": "Rqi3xHv8UqqkeKVNSyui1sL5FgjwQA4EdZnTKQUHa7WTv3gETGDx82JEu5NjSAdfNfTcksuj7M4BsPVGBCUHNk7",
  "key12": "3ZsjhRztCEcTZCvbyAVFtJLWaTVcWNYgG1Az5rijFQJnCAETGWAPtx3hwCQFYHR7qhJQMzNNtNbsxntijvhhKhTD",
  "key13": "3nonYjaJWHe6RBG3xtfP1P47MHRZdfrysrVCqZ41YZUsqSPKSU2LNndCjiqoGfKq5GLRjH1aXNsCA4Rh8mDBgQyh",
  "key14": "2dGL4PX8A66SRUjt3teVqx8BebHJe3xMbnw59rfbBTaVtRoPURrvVkBgtgFyETYLvjcvwchV4c8EfRgY4qD2UkV7",
  "key15": "4ra8jXZ9uzYZtV22JLCU68xSurmBJ8Pf7LV7Jp784vdcM5XHsVpGSsf6YwRz98v4Z14RPWT3Tc4UEpMcFr1rzJom",
  "key16": "3BRcA9mricJw7Gvsz9Y78wzVkHBBkikfPYCgV6sLiZbVtCYycM4udJZmTmoE9Wpe7p9uyN6rcwpsUAFwQJ5bAJqK",
  "key17": "2rG1cGfxLr4XyuHKGDugLcDPjATLs4iurZiqRH2EQLpxdwL3EvP1ayVR3r87piyPf5sBxzAgv29Du3B61P5CrdTK",
  "key18": "4SEH6ntbbKQYqQ5ArZQvvxmsTGiLFEfoPmfJfNeRgTXkPbgaNvH5NsKwHeHTahKGhnYdjPEDSKwj6mjkZd4sYa1",
  "key19": "4GUtJ1ahLUzGL2zS8jfhJXWXUi1W6irbcmtGxwzV2nFD4mmTLE8coHBjgohdf9C61FX8sLTGsdRrUGLjeqTKDUZS",
  "key20": "45Vp9CyXeUrwrKo8egK3LayrLgpxKpyvdPi8CTMBkbiXJDq6Uzy8C6X1YeUGRSQnf8CXFiNgB1np8p2m66FPdu6u",
  "key21": "BXGNqvvtpgE58H1K26NPbSAW3RYhD3EiXhBCKAoULpcmCD4VifGvZCq5bReFG6MBNe7ZGv9bwUwft1t7uyoaAmQ",
  "key22": "43Nzg63HrE5mKVpMGM6rVRcaU6urx26qen2zdkHvxmHNdUVjdH6gwSuEvPeppSJAViRF3TNG9BvA8pnFSiCK5SCp",
  "key23": "2b3LxGAg3FoC6TUm3Ea1JE11NM5YGdssqbcARXDMGRvjkpTb3YDPs4DCjq5dZEuKJYoSQy4dVSie5yuz3pN799sp",
  "key24": "3b8g2NDSZ58mpnDM86J5GtcxLcUW7mBu2r73ucTvf1rTBpW8thMddCS1Nwi9ZroFqGs6WPJDF2Gd814AiLXwLPmk",
  "key25": "4AuoEAHfuUqnFoD7kKKJ6GKiE68i2BGhnsYZeDwTkm6Mk5rAGznPnD1y6ZwH1p38wM3gKYsZNL3QQWcbypP12Sx7",
  "key26": "3TbVDg8Ze8d1hD32ruVY97PB51DFNaasPpV6yX2pmrE2PqgWk1s7uNq74xeSmV8z9map2AsXVXokeRRBQVBZ8Biu",
  "key27": "qWPfZDnvoDAhe7cQRThnf7KekDmpDrWHYhaXWGyEq89eWBBEU4FcwHLt752aYDqd8SGp4GFkPSqbnAh3qQuVtwu",
  "key28": "2oimbsp5skAUaH1mxi7PkiHBH3CdNs6WJ2kTrSLE9iQzf9iunoGNfJFfcipckeWoE4Y89DhWgzvSTgguBn3sKp1D",
  "key29": "43f4eqRu2JfpTysGoNzQaZMSkK9PQnpXbqbiqyJesMTjD4GBn32bU3wfernnyBYg8GBRxXYzboAjVT6nThKks7vQ",
  "key30": "3x6SyrjuGJk7KydpsjTNwYpSpz1ehGhR7QhVYcBnPT1gP8FrQuyQHJtZtSziBrj5vY2x2okn6trokpDBEjMLdHRq",
  "key31": "YCQTGwpnqkcEkSX9shsYGXoNwmLaxS3qKdAXRt914VPmeTdAkJF7J8ETuTXwRoujhauZCvu4acrrwC54WCWLUH8",
  "key32": "ADoWXiiFkv9finSgvq3fTNT17Fw8nYLACYYNTzbn8RTgm7DhHJxstYUakmLwk73CuyJmzc5SskitkoZB25YFmYP"
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
