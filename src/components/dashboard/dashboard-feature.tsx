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
    "5mXV52NTbUw2TDjex8V1YycEa1dpw3mobGh1zMKzFL94wMyooHaPQQfVowKQRMNsdY1TdgymR58vi4cF6kNnA4ZY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zRsdS6dGfYcVA3tjpFTCWZnwBA91jCY4p4SeMiRtvPhMXP6zNHwzEjpDqXRU1Gig2rhqfZ4472dRxZgPv8GQqTQ",
  "key1": "2UZPC9TVKcT9uC7QCWuyin8UwxtVUdVitdxrT14HmcP1u1Eg1Tzwb4yS9Ffa2MZKkPNimSYDedbqsDnU7GZKdrGf",
  "key2": "2edD2giGaa9YH3bPMcvCVMq7hwS9oobN2hYVeNz4XSEAz4uzJjQpsGPJaAL36bpcv5wusys1K53WxuEkvVoz53eS",
  "key3": "3HDMEZS8CnQd5RMNQLMUc6VPdcG6AW1e9cfcxAqoDfpEmaSBnTY6epsJvZ1hqqEicxjf6HWGFFLW7rUrVEzrx5S1",
  "key4": "7YG58cexsQxHCioc2qzuM765A7VDget1G1gYig8XmV49Sjc4yEs95mCsXZH1c9TLkZSoToWaknwLRiCGScgNCPk",
  "key5": "5NtwAJWjSJfazswUxqhxRXtwKtVVYD6wnv6Cxe5cCiLGPTHTDqZY6mtBUfT9bsy5CjpjpkM6Sft8SZTxajktxpJb",
  "key6": "bg5tLuAPpRPoQibgppGQU9XADbzeM8ZJVjMQJUjQyxU3RS5icr4LA2RMhxaDQsXfpaD8PTRbmoT6UhmiYQ3c5QG",
  "key7": "3DTW3MKPKZKduUiopehfura4GXJzo7jUkQ5jfXKWweEhPGMdnGqaPMmJgGH4mfTvPiYRS6WedwSv9JJ99C17S2pS",
  "key8": "2ZqehniZNKwYS4U8adxZZFq8TyMzsyj2hCu3mGVi8XwmN5RC4ZgqG3QJr77toLtYehQvSEvdMMvZA5quqfQGFEoC",
  "key9": "BkMyogGax4RPTJccY2bx9J34q2i4RSXXAYoDjm56JttA25fbAdtEHxwpwmc626DQywfsh1wJe5QrFd6rmcA3xrA",
  "key10": "48patAQVnX1wJUBzpTQhMxm3DzhQsUbz9hYeSnVLdd588y1BamJP38zcciEeUTRrJ2Cxb2pWGPfkFu6pyeCzSjXx",
  "key11": "4s9esHnBGd4e6gxFu83DPvu63ctLqKsuKwXPsWec1So7AazWS2BgZTjZLBgwMzGQGji36KndhnireCGEUQzoxjbE",
  "key12": "xQnGsYLBPqUkNeFHmjfQcKE3Ya29pq8NWH3qHiRQi7cLpoBQhRbQCb9Nn4oydb6jBqcNp3bJwHtSninR5AcNNgW",
  "key13": "U1GYC5yKfi9SRS9QMFJTWnbdqorpdKDB8Wnmf3a3UFEHzTxogZaPMDP5Dz8yLrskLkZcwiuEXyD9eNsnNFW6ke2",
  "key14": "5mrK6iSPMn9uVz1rmGqdJpPNAudTUXrRaHjzycCMRhbwpoj7CWwtzdHC976gePcmmbtUYjhqFK2LjntsPXvEJHHY",
  "key15": "4qkYgxEYNvp5stXpmrzrYD5XNkdYEa8oyK4BpqKRGv2R7QcqSvXspdbPaU8dGxCdu8NUXzRGVf8JRadzQWHyZwS7",
  "key16": "2ymXFpGQwpdhbgXaso4GEtM6nFuPmo3JihMV5y3iyjMgNzscbmgLYVThcbqa4TTGpSR1Dr9Zw6vfsQ8rz377o6Ue",
  "key17": "4kZSUK1sUfEhdyQnvnmkgQKeg3XnHQMk77HGMUYkq4rqSmtwLjVKiDR3Z8VHEUyGsb1t4LPDh5sBdVtEQaHHYy7r",
  "key18": "2azAHKDGJgCYdHnH3MEaPZtUkoxEAkg3vUQEgMrc3Knqp1nnH3TxhMcUckCVR4ybAixBPMKPeU6JL5quuCTotSrr",
  "key19": "3ZM7o84trAE7P1iemtoZ39VoFTYhZNFYA3CfKqhKU5kM3dSk4y98zs2YTpMyEtsgNcCeDtmo7V2ohpHBa8YtBRwf",
  "key20": "3FJsT5q4UMzveXPQ5YNuHqC7ebLm8tAVp5HhYxLxR6CMPAcrRgSW1YU6PL8qsNTLCbuNBGEtLWWHrMc7ohyxTvaj",
  "key21": "3akDgHJ9n22mC1RADUJW5Ztt2FAXp7C81y1bn4PgTX4Fee2CfAzaeobkXUcGF41N36fiu9vnygDtQxUKp7R9iCXY",
  "key22": "82toM3F3JipPNUds3P54QeGKTRMzYZhBV7acQuK6sycqY5oVtcuGzWoCRR2TBDKU6NUxfthYzFgkvNNcWNzgkMX",
  "key23": "qgMGLt1hzwBkSWFzra3S8vuo7UCoSNLD5FYPxJuKcJKgNdZwYmpYy4kzPT13xmGhG55S4DWQ4yFGgfp2UAZ2JWg",
  "key24": "2VPRx7gkhqzpZNV3kkQY4Cvrq6uypgv9y65buoEzEuQoX8Nsx8dTzHqbJury9CL5SCCa6W9q7eMCo8iMacRymZmj",
  "key25": "5CGv4Lqn3BVkSXLpjidjQ1BSJGWMoLsue7K1i4w8mJQNSpqYJJF23jDyR6JWUxzZAetPhgCqzcvp1MvVbgw5zbPK",
  "key26": "QHt8kmtFot9SyvSQzyA2BHRohbonz8sTx2SfRjMgQFwSe2G5n9Dkk93RBmjnAw31R9oRK9yBSq57544dGGbPrRs",
  "key27": "3HmMZzhg2QC7gJ2p8Tk86NHCtjQt4gGNFF4F1mUiCPRTMg51qjZxT93JuWTLXPmLPNsrwb4Whm7PDsPELjPfd5dq",
  "key28": "DmPspsyQUxbFtt87YHjnkT2tdTMQWFUx2VXfK4zigkWb2n1mDMXRS7iLeAaWpVVWg2BgtaWRAQq3PpEGFmkz5k2",
  "key29": "3JCmvPC61kD6kcXQWdiE42k4pEy7CEYqkLCymunqKdYeArxQxMKRuirsNbfe7syg4774ULMG9D3vJp9C8oaHiSjZ"
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
