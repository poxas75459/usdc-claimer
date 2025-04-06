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
    "CwR446iWGqgSp8YE6BuywYJjnLecW7EamcfQkjwUSY8VLNeRJGKFzn74LCr82RCFVQPaTDfg8A2Q2VreffVgFRV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VvPGXadA9TGGAYXkiVDKPjhcBBJYhNT2feU19Lg4SiQ8TThMmefBdz1T3rEGkE58fCdzq2yKqNobmgYH1LGijRZ",
  "key1": "35hYEe7ituTikNRgYV61AvLLyXMjAuPg2yBxVtU9RQt4D6FVr4dnzHBYpFDeLNEWwWvji4x2HVtyaPPSdoNiCgDW",
  "key2": "zyDAzE1EjejwsgCaUeA548V1MZaRjmRVFrnG8VMGtQ4NiDAq6PnVQLa95VVHenu6TdRmt9r1ZFUfqWoNqfkBBc4",
  "key3": "4kopFWN157J2bJbhfUayKn5ixcDsCuH263C74fN6npkggjpiSCbaEd6ee2GWP2KD1vZaEmTQyC3DDS5ZPCVxBWeH",
  "key4": "2CSR1UgqsYk9cen2FSDbofr1gYSBcgWABNMg1KQbeAsgrFckK4bVn4t4A5UT1AGLN3P4ZmdaFPg2gJ6WhuR2aNZx",
  "key5": "3gb92XPKRK9PdZRdubPyS2Sa1CQAwXEfxseMsFLEjBdex5k77B14wfShPRT1NUjCQ6GgbXiFjWhixvn5XkXnNWv7",
  "key6": "2S27UtEU3kwqLXkXLun69haKQ2MuwRE1nWbRFF6dfvXe458CSNkCaEBuk8y29VX5ACb9hkXzoNwLkX9VHj8Kvw69",
  "key7": "3M2jx8eSjbds7qn8oG5yePaLyYjFza3Yw2xD1J1pyxcvKKjYVuCAFSP3kLyuK2pXCrwttdDjNCGa1QHhFW69wXPa",
  "key8": "3F3tByCsjg5ZKDyXPakfzQiiqLBHa6SkSfJtVasMg44pfLD8N7tcu4vcMBj33mNToBkjJxB7kJi386QLfGiL5ZaS",
  "key9": "2Uy4C3d9WYAugucw5reEuyViTBAVezDXWyMXQXMPAknT4JxwjZF93X65LyQBXf2y4MxhLucjXMMwGa9gHw41GnZm",
  "key10": "57a8vfHyy6X2Xp9dJKnL5Zfrub5zuB8MTTzWwzdWE3FtkXNX65xpYaUSac2QDKjTdDmgTYKzC9h6NmbnzHYenK4Z",
  "key11": "61dnabwZSD3tGBQi8SZj7ZKvYQiyH4qWgbhrZ7H8kwviSx9C6D9gdebBppQs7bxJZcFVbYb49bMpnLYdutzf2tNU",
  "key12": "36CobDkYfmLauWp9fH3v89Jk1ySzkmuaQAXUNMFtQ9cqX1M89f1tVor2WhcqdjVww9VScfJscdrPuz1xXn8J1TCr",
  "key13": "3TtTDTGxZepyBbwkRdFBSMJR3zfybozWBSE2QSwpdcqkCJZ57vm23TCUJ92pqYfkuRuc6L9PAGaVPHDN35LPBdXD",
  "key14": "2vww5Yb63jaGmmvHi8T9coLfufBzCaKAuwGqLeLaGDsucGe2xrFXkxr5pg2ebH3qg4irNv4ccNmT58Pimbvc7va2",
  "key15": "4MaVLW59LUtxjwBz3nrx7r58Afxe8SyGY3a6X2iqqGyRAAe15MfPrtidLBy7GF2gU4j8oRRCZcA8tc9KxFFsYJrg",
  "key16": "BnHQwMfRLQ7o4yNLgpVcD6vGrhUVP9RgtiJC1ybgMuF55FdAvGrMwFZ2DznbkvBLtFQdBxB6N19AjvcbaAP8rhk",
  "key17": "2fYj8kFbdbazHqMM87R5eDtpXorhaM4avmnHBpFmCryUGo8SJ6Q6vaEbV8fS6H2NoCDHUFXyzKydW1sXq6poJ7QT",
  "key18": "3PEf5i5FLTZQXtBVYeSjbGRDPGvZipMXuHhBMNE4sgD1hwn9UKFymhc6qrjTziwUopzTnsqR8mQRJY9UxpdpNGQf",
  "key19": "3vSgVAZGUK4sg7pvDD9tTG3iAjHBqskRKdhjnvP3msPTa82DWV2BD6BSSRWc45hwkR7uHEub1Vqrur37ZegqyzRr",
  "key20": "2mSJipegD3ZD8CHTnxL7XDmpwkMJXJKjicrhF1VP2eztEGPM1mubJvPt1y1SviZNVTu1JMfZB3H1NB6Dh9cLE1PY",
  "key21": "3kRGpZdYEGxhx3cMwHEjV82xkCBRKzp4jYhzGEYV1fi7bCzK3tpHdbZUFaBT6izwmm9Mdy2EyyFqemsS51Kmi5x4",
  "key22": "5neUAjgHzLrpDtcRqmJ1EKdZSFcbcgTEdDQWKdzHXYKRcGgHVj4hPLjENsbWWABtJGLpzY3zPKgn1uKjw5wEg1K8",
  "key23": "5xYDpR8s6qqekEi11quvHgB6zANZLfQ9J4v5mz2YnrbQzbUGihHymTcR5HH6vmn4Bzo8U7iQQEf82pMxgu6paKaR",
  "key24": "5ofU2p9jKK27YJvGAiyWFTncTcUHGAxeghAYQiEoM3qD7dSyTTsEmKTURY6MNBdTAfHheqzbAMQhAWcc72ZcoF6",
  "key25": "5AJna71VbHgBUN667hXdQi4X8RqTZfRmaY7uqPtoH3iURRsVZTQYh8cR5KsfXbHcBjNLgxJmRMooEsFjA6nfybCa",
  "key26": "9DjigNMUwB1iVWN8hwJNdtRCTENuUQ2zWWiDMDXPkGhCHdpq1t8nc9HHKUxUdevXTnyPNHdZm8meJSqrTRxtrq2",
  "key27": "628f8W7ZDfC3mSdzGFwbwvB8TEfANiLEg8u6Tbyrzk7JS7bSf5yB72jkRZvTX7Xmv1KNaH7PDwScWkqcfhztUjpL",
  "key28": "tSUfjMErXhkcCNQefsptMpr3xR6B4pHNyqjiLbFZkhK3BH1iNsm8zKeU6NyTmT3XJYiqpDkG2uFZZYVPgM8KBaT",
  "key29": "5ZNNHAvG5UD1M3ivHA6xtHCdxYESJQvnfrnfGTpTmmE7PmXQUkZ3TfMks2wdsFh4777XwJEp6o7vLRnsCDhW7kuT",
  "key30": "2GPqHPBKyoXdprjdy7F7qNYKJkHsJFu11Zc93m6A5DuZ7rPVn72ooc1JfvHQkr9gmfwXf7RZbhxYxHSgUL3Vo8Cy",
  "key31": "vQ1Hhm1bKG9PcWrc2Bz4KoPwNQzy1VYb9LFpNRXbtUiuTecTbYiwXTtQoyMeyKeYuciCXxcE6vzFnXtJij5qaSf",
  "key32": "3ypokgfhvvrf9fE5ZZWwHUk5ZaqPYN8LAZGthwXxp7HUKqDCQAmRmKLGBGF1rqq4UugCETcEUjBx1UKG1pzP4Hjg"
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
