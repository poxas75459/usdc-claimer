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
    "3kKLFTDTEMxfFbEeVb2sWgSx3x7oAD8k2HupuHXzUmfQmuXhcV3MWgVoPNbaqjh2daZmPCsBGSnaGSz8YS26nE5s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YbSag3tCsTkHu8xRowB3cDnfmm9PMTk5S98LWyTkkAxZ3VC8fo9QBfqXVJyV2vzFA6kck1hkN6BRDdoZarmoF6b",
  "key1": "4fX5tKNswSdt76wqjg1sZYiiAzPYyrWgJ8nTgsq96ASALUgT8iqhiwRpJWV4SErbWBRYLnqnHxsjiQn1bqg4u9D2",
  "key2": "5FoXw96ggi25WHGDgnghBi9r7bsCPijZZsHCkrDm98c3z6D5QhesLopp9CzXNHSME2ZcUzxjrYPVdc14GoixkNS9",
  "key3": "2AHj3b3WPop88jiht8f7rbHkaKLDDAzqyS4fATWVZQAc3ALT9pRxnCwfo8zqnMWvBYRfCoxYD26PzrBUPKyWDSA8",
  "key4": "5FfAmFrgDg5cNwx5k3EfYvASm6veecKLscMCRx8AUqYGeA9VJbMNgXPRjKxnGtHj7MhdLWFDxh2j9x47NQyDuWxS",
  "key5": "4XdEVyo37yH71pgVPpYDFXsdGjUgYRZC69RU2f8V3Jm26UTuJ9NVtGtL7RDTL8Xkk1E1iPghdcV5wwi91gWoUM9n",
  "key6": "5RyZgVfhhPRVpbHTr6WynqRATpz5t6qjyfizXFFvaRdXxo4ogjL1U7dhNBjExVFfNdmpqKjNFRovRmTW27S2NDUQ",
  "key7": "22rhujJc268cvf4id9GmhthXiNJjpeCwoAvXHjvgncyLMBxH97JZcpqqQzANBhPuHCknHEAH2Z2esfFFhzTjBdPf",
  "key8": "4yVZWt9VvBH86r7yKx2b9R9qgQpydTuB7aot1oM31DM5uZWLadNztSwkAiL69YgAjkXU374YgQjynZNg7bGczLgc",
  "key9": "3vLhkHHLkRv3BciJNaGNTfDf7wZEmnxj97dGkN1XhW1oCD51EJYh6NXGEBJKvcppUfKQ14T2vTDijyjSJYhBFWGR",
  "key10": "49RLeZqA9X3BhtyTQaRbRkik2GGgF5zPZN87D1HopbiAu2mTcPkyqCdZcPrLRp5p9nS2CgSKedXuUQieKD8Y7Nqd",
  "key11": "sVAy2WsMJ9jj25ZRy2XYdg5s6fi1jahzJ854c5W1vuBYMSk8BvMxDTQaDuzBr4eY7EERNVtTBtLQogQRWVZ7sDG",
  "key12": "VYGeZcmnnAnTE1zQd3Rqd9rVXDicWemVKNHAmhCHRqrfGSZw6W7BNXBea2VaEP1b6JK5Nv7XmZ1xVckyjjKh3RM",
  "key13": "56rSzpsx1YZZiCMinivmqxuNaz1HiASXu5psQCtW3oJeZd4jgyzzXtkDBueiydGtLkfTv4kysUfdVtgtJmsFdPBd",
  "key14": "2tpBkd7w67ZhsKewLjkWnabh6yjRJ99rtdExzf4Z5jjzRoK7QCNNheNEPDfs9yaadFoUWMNbUELsapyvqT2p5XXJ",
  "key15": "3bCmndfVn4Ec9WMT5yrc5EXj2h9BErXB9LbMtiLvLVRs7pZVKx8m7gjNvam9opZwakSm5yKsQfYMWJUQMJu9MGHb",
  "key16": "eqdGQL6HkvbkHT6b1Wq3J1jZEPTVSHsM8BCTxKMeF4u53xfjjA69SFwDnRHCB9CT5qYxKB7c8iPu1KY7Tw4PUnB",
  "key17": "2yiSBHykF846YxDyUXuyukxsAnYLAavyYD977H9ySkiwBxGWsmdN3j7ozuopuqk4w5og4NHyMapRuFA77uZmYgrp",
  "key18": "3uDgoQE1cEwQwWdFv3JEv4xSVbwJcvdSB7rGccU5of9Qk6eu5zPv3FdcxTYRVfdmYUyFJzikcYukAAEZddpgsoRQ",
  "key19": "5KeGJ4XqNQa1iJCRtokFiCoRDs2kYFwyzztEUkmPJGq23J6NqR7PVKxzgaEgWRXkzEj2UB4Cbw8mt72J2tTaMBPq",
  "key20": "4JBeKB82FYiRyLP2J4Qe1MsAEW7Lq9poRBQe9hwH3yeAemiCoBs4RwGEEv4wwmZfFFY6yutDeT3tJsAZnaCy5LWW",
  "key21": "3dX447UNyRvkS8SWThLnDBcD89yPyxpRuNJtGeeVBHiYsaMcUxuWrNy2VgiFpyPPGKbGTFyHWHv23PyrSgtPqtgC",
  "key22": "5MiiHMPjPpgZ4t8riRSqjkgBwMLwWAE1ivq85CC96qUp5xzGrwsKRSaLnpnGdj95f1w5HxBouJ6J7juV9nx8SJqC",
  "key23": "4FdmiR5qkKYYhWP13MGgeNaFG8XM668MAb9ThPSRyA6LUCUYuENA9MtnAvDJvERTbiHiveDcLBYeb8fDhoeyDEzC",
  "key24": "5MficaE54jkJWirWeoeLv5EoXagiCxERWRvs6HBHYmkjwDXGNLWTUqPk2yjJrHUPYCvrjdAEjkEH2FUaF1WrBz8U",
  "key25": "3o7MaGB1yViedpmXwzx23EfGW1HLFY7vASkThiinR88TvrKWSpLUzsM4S8FRnBY1VV6QdaiHmzpb6NPPvwMbKJmb",
  "key26": "3EnezrFomDtSvqi55FKGjiyiGURCvBmetTydRFTrQa5DmmTwGaS9AYJMy1aEHedfvwAYBJp336wSSJJA8p5CSgoY",
  "key27": "21pQ8tHjrWMRbayeB4taziZsrsS1cK11eLVGh87LSzLGGneeaMdSSDtwa4ZM5udmvgq4gWmqrVrgeUiHnRUprLm7",
  "key28": "3oCRjoSQ3gtxaKAdSnvhj2SNkXzZqXyJ1AMpJ6th486kT1pKnK2k95t7n12xtxHKfSWuMVZXsUYZsGw73sG9eLdo",
  "key29": "5UDrCBRosMrDx9n5eAkHy4R38BWP45Cv5Ub6RyHhLLPsTacJ29v462bA35q8rdsLve4NFSY69hyyd4khZUTBZpcs",
  "key30": "tNj4dSvvUNpTWQvF5o1xC5KfrNhRqGV9RkAURmPkXSt8D9SXrX3jbonqi8m69wDGtACdsyNTk4V3aCWDYmzkWhU",
  "key31": "2Ko9iRw7XYNUrwdsv3G8pDzK9ZhBcpcxbgaCfBa7S793jZPCquV5TEfBDc5L5Xq35v8qn6niie9Fxp9qQ7uENvtS",
  "key32": "2F8WFcUHmUSpqARkzHeUfqc6SJhX3g4mRuTk7ztBzdJ4TMzTgCGnq2JLtN9uj8DYXcZagr17JhoKQiw2AKAFaxMC"
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
