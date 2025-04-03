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
    "mi6SCpRxvWw39mxVPTpS4Fs589GYBTpjJwH9HtQ5oZANp2VFJtfVzQtyC4zwRRsiU3U49T4EjLgTYww29gN9hum"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39mtWNigYXrxcsUYxiFvA8YukFHJEWedCcFgy148vNAUMoNg858kAwVsaP2KCdP1gumH4RWtLsxz7hVMbFmZvwzA",
  "key1": "LbXZjwFBTW5hzdsrQojMgsAGX9btRrHgDowS3WVSJN6S6nrdejUXxcz3PzpxpPpoeNvjBehKgB5q2Y7oAoEyQpc",
  "key2": "4SKyKDoaZQpn4qPRQoMKmWYWmadCVxZvTvWLMKpJdX1mT3KcJVoBTSDFqZ3Z6XzrfmdZfDRsMGs64qci9BvtCTFG",
  "key3": "2v1beeXVEmZJLDeyHFwmFdXGNGuRFDU2P5dQZbtG7vbZutoVeWu4mkLLGs1nC2DTECPS7n6U67Don8BFDbhkcjRz",
  "key4": "5c36iPsGMPY4AJpDC8t9aVCgCuFhnvTdqLQFAxjKu1mH1m3xJ9T2KVgSPekmvCdXmxd6DSp3K5KrGV73bC1XFe2o",
  "key5": "Cij7FEP4QrJeSCrjTrhuLNXDMcvQu7WbiL61CpJvAp8G39Uk6nWdBWuj2rZhyVhNvvhb6dcxGgGDGdT2Nwb7iPR",
  "key6": "5f9Hk7vVpipL9CmeieYZ2WT1aHExiL2PYTc1iRHik5GnxXhrDqN8VYP79xxZszaRAxu87a2QW1ojBu5QUXKNwn4W",
  "key7": "5NAWDAbope1RrTuTSnyNFtApxZ4fFiWsrRQ5CZN7u5LQwhUeK6pecr5BZsiDKxpGoTSCBe8i1qrVR4BuLXsgD3e8",
  "key8": "455ppJijtv6QWYxV3484ozCn7BjWbnGdzrYnoD254Pr8Au27tQzbAKs6YQNLezkamwnrs26jFLeckfuMiaurSQsr",
  "key9": "5a3E52Bh8eMNpXAvGNUAj5etpF68oe9GRjqAJCBsiLSvz8mqW2iibDbyTvPAp31A9SPxJ8YH8zmX7xFnN7gaGhJ",
  "key10": "3jPt2ja3emBH7TpDp5jK9ARwsdaBYwiXWLZRoaN6kPxHeJmrvVNCCLpQVcpHDjqzMnUUzwSfWLAFMW7ZYQUCCrF2",
  "key11": "4FMVmq2cqUbiEtx9GCvmB37WUN9K3pJefJx6np52z8nhKuPwVLktTZJ5UBWo7yLfQUKvgWhs9YXNBE9QRFaGdRRr",
  "key12": "3dZu8naXVUstPGaTw3LF9bJ7XQWUZxEMPzLzLiMzQicKjUvoCmNmUUEP8WNc5383oMGV5ZWbyfzQ9iGVhVg1sQ9N",
  "key13": "NhfJqVj82YbNYnEjLmtsaMzNgPffGpj54R9kg3hKj9RG9tUAHgEnh44fmjqHgPfDNX25g2m5Co7wM6nTB2a8eqg",
  "key14": "41e9hKeu9y63EUgfJPnQPQ5kb983pANFL4ugAqaEcyzW13gXUMcuAoFuZNhUu4NkADfr7Zxj32m1sDCKdS9nLF5w",
  "key15": "4NLWZufzL8uPP57hnZ7Ck9xB8VJtQv1ngdKshYF4CeYHNNwLTfbaa9LdZNPcpyQhSQQxpGmPUmskJjtaqAybiVsL",
  "key16": "4pk1FA2pfb9U5WdCBD8cwSgWUET5UyKEr8raAu7hSLFCUprGhzDAat7pQQiSQiv5ZcwP468FAN3Lse6898q5r98y",
  "key17": "3jRXUtaAYkaHecHqP5NGy6z3474s9J4ugvHAwgBddUjn2coqzLtnJKrxS7dcxsxsWae7dh9Xuqs83wy25inVeE8J",
  "key18": "2jityQ75gWYf3KF7qNmV1DvBsE1H4rUT66eED38fb1eqdDphJLhUrcVg26Y6YFHsHseyYcegcDt21Lu97VuYa9o",
  "key19": "2vuqDy8sw7XXjAw62MuXBKyweo2y7BFSm43Ly9ikf6sUyuT8AZ1YwqjqK8HfR4CzWs3j3s7FBdwQxd8qbx3Z5Ey1",
  "key20": "2YCCp86w5fSyWpDDgWwABwe9Kpyyrs7FLXCTp9QvfEA1fx1UT9m4pRgJwgZq2HQ2pggA9jEkb24Q6A4GuSVztMfN",
  "key21": "cFxUQpWNoD5cbjPyQ7wmoR26aRagbxgZL3RRydQftwWVWFU3azZrKqjmTpmjsmraCcztAnp58S9zKPpB6yK4Nf6",
  "key22": "5qJojiXcfriwAAFFDi7wSuon6E2Qum5ngVKmAW8EnmFpizmQta9J7SKwNM2VcSJpYv5DHXynHiRwr75SyJXF4Qen",
  "key23": "552bfSKQxGwZtQncUyki9ivXCdVzEjwkyN9Q8eQmopZfoWFf73mS3i924NUUkkEmqMPuT8JA7xcSG3Fn8g6KaN4S",
  "key24": "2ojRGP5weshGNJWJDxzwyN6B2z72SYBsN4dE1gsnWpTKg1EfiHQSxTxsHHuXM1JEiGF5N57rWQLKKcvoRvgvDKko",
  "key25": "MKTLtd7BYGfpZxMivnFVMRATJ4PgnoNuV1fNxo6vhK41twTWANvGn6ThnxYwuvaWKoz7wmdikmmKhyoTDLwUrua",
  "key26": "3VxtMKgtiKkYExmAbf7SrjkarsWoivfkcPQwA8hZhhrAvFAc6D3YzY7TkfwPNTVgaDBd6QbYq1Psor5UJ3iWdN3f",
  "key27": "4oXygwadChXuZgJCCWucBqgxv6tds7VcD9vMvAuUoaGdzrxBsNyQxRB1Y6Nv2uiGzzoaMg9x8YUeAriNQib8wDdH",
  "key28": "4ZxaSXmSYwyLPefiLtRSYSPvFeeFZWoqD4BhNKprDKt3y3iPRZDDnrGWWzNgXAhNvxTR3NbDrXLysjTXXLLuuhHk",
  "key29": "4jENSPbJa8ggwfduj5gtigeQpocACgBrDqw2kZ2bGErxVhw77cH5ryfJ3xda3WP3w9y7eDdzJg4j2rdz1Jr5AkfQ"
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
