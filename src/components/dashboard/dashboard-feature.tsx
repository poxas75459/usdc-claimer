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
    "KTrbFAbNbUYzqAVjV5K9Tt1TTVrTKyWCr8NcB4kX4BEbjvaLatyZdHP2hofdcgLWpkf9DdqSMcJeUfdGbkWoDpp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kwkukRSLyBAgNupqm2ooWVrPdE7VMddGin2KXkeKqDGmzCJqqNWcY1rUdEtbpub9Sn8icX386ZXh5CtZed2jrHk",
  "key1": "4Q2MZbJKwi2ELXQGWWWNezBsaL8XFvJvdgP4irrqNypC9qx7v7UQshDyeNfLz56pftVM8jo8re3SSF5CJTr2gp1W",
  "key2": "3UnLyrnFabW31GuMbJuDX4MNodn4ypP4mY1gEivEfpWUrfT6uJrRFsLr9E1JQTeDp8dRTqcwpPZDr17hEPwSeVVo",
  "key3": "4RJiLqTGLJ4qt8dodRWR9bvwfQ96ZQKU2UzZCB3DSdpxVXrDbS7ouJizhdY2PBscy3AQVdsCH9CdNinTbWy8TtXe",
  "key4": "4DpvYgufRbiRV7W5uCbs4MuKey9EiCXW2mNAS4YZLWv7a59iHcjmtbYccCRkusUt2euFcutsQdGvx2n5TV3nQMsx",
  "key5": "26GGGqNq4Wc5pUGSVGkhjMKduijCE26o7MhEi66RCvsS5cQwa6fQpsy4UCfcBH5Qv4wb9vVrWWQbLyJkXyhBd82m",
  "key6": "2DeBtijHd6CWC4Qo2za1o6dm9qpxAR4kScf7kXkXgU6XTFwkMnpsThLZC6Dse6EgquDnqW86m8HFVVsqLhfJfB8w",
  "key7": "4k6GiohCh9gCNTi9SxQmz1oUKFBHrqiDMjRYB5GiqJySc5CYeb1pAKfFnePHztzH2tippgrnFzVZAEox3zGW5He1",
  "key8": "3p9ZTbWRVcUtg4A3wqRPWfoTMSvEJGajae1k2JqqLyzDyNd9oz6Krv7ppx9TCayoqE9DHrew7Dw2h6HAdATndgg7",
  "key9": "BWutAFQYjYZqmjRTSic8P6DJX8TRhWwyTUXxtJQ4rqZkuxT5RC9g7o44AgVdsGgVwLmREPqinDdsExaQb2rAqec",
  "key10": "5fbRzgoCLrcsYeQbWRpWWoBkfvvrYGdYbGyARBVUhjswHSDJPqYW1Bepkufh8Pik4Ujx1X5cEqntrcPtT8exDWhi",
  "key11": "5JpHE5xYKoP5LBTfALbJa2ansHtR2jjDRJvnDB8tcueqdFpF2fgD9VvFBCPzAaYT8dtVgJTjuyMH9gSWqaXtuzSy",
  "key12": "5Ka8ncGp1vNDxxTAj2LSN13ixBGQ7aBnyMmGFAvcSJKmmugm3aJw2qhhYGvLQR4RTCM8EGxo1cRkEz2MZDSwzmkb",
  "key13": "3Xu97b8FhW9XBMkT1oWho4w2495msAL6zRnA1VDTWieiruueQe4GWUmpXBgf1sTU1LPL7SPknHJprtExdfnrCKSR",
  "key14": "mMdM6SuDeDPERftbtNkekRb99iUhPLXW6z1549SGXKzbVYhUib2qMJW858WXZuCXajC8F6qR5541dymVaqo61nY",
  "key15": "5T1P4oHaFf1hBMoMH6yVAje2RVshg6gf8GH9sCURnNrP6xtgMMfi62B5pCUmiVGfgE2jvBUUuoaxj48REL6pNJWE",
  "key16": "52dzWxM1bpJHXTXbx6Sw9iBfhLWha11mmh7MgRqzVPtcy4Ng4siEwJNd35vJKdfQebYogP1PrUA9zULB385eCwoe",
  "key17": "pZjkBkj5eojVrgDdBsYt2y1a14hxn2n46DyxZ6NR3riphMQ5LNTdc5aSw2HfnoxjaHKohHdakdDYst7uphvWSUd",
  "key18": "HiVY9WHc1u6iUbfUVLDVh4Np14cw13VvmAqdi6K8Dx3nHk9nGCNPWH3ty5qPVhFft5wFu3rKCjAFBsfBCevCyJ1",
  "key19": "2MZ9Ew6Bg4yNYiE2wRejaRePbyyjF1hdRKZvC7NXvR6DFLbRpAvKdXWa9Dgq1HE9FUho9e6vA4KoHnmWikGf76ZD",
  "key20": "4f22UcNvZY4uhSRoV3Cbp4YfYmkHzU5c1GhS2t1YdipcnfeAGY23WaXSpw9zWdi7CCHPr7LJp89iseJsCBik7wzQ",
  "key21": "3Z19YP2oxg38zmP57J31VQqHGsFgaNnz9yBDSkTm6tbuDp1kJ2rw5iu5TxCGmNUWcuKoHt5xEARNNwi5R6LyCci6",
  "key22": "5trnDoNCy69nycsZ8XsSz7S3q1rvWzTXYppnzY4VTEJhH7yAi4AdvEGMU3s7qgxdG6KMLGcAxkQQBkKg1BwBm7V5",
  "key23": "4EAmjgKtctUZtVC67FF3boA3JEVPHAhyhSABtw2q8fnC6Bbz6yT8CDwbE67MJALAv3CUVZtSfGSWBk4Kif5vXVit",
  "key24": "5RoPPUjBcoQD5vTcTCMzfkoDvEE2QeU52GTNHnCsrqFgnGfYqpKEXDwLzVF8vMgviibnbwi5PFv62aS3ciNQDCEz",
  "key25": "3CFkkmgX5SwCu1brVGpe6CnYWSbadn3ru7ciyc4tKK6o5YmHL44xR4eDtyYRhdSxufuwZiEvG7Sx1ZWCYyKGWuAw"
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
