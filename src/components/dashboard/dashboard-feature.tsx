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
    "3iaT3bv7XL1hHfSch4vFV3995D251EX924B7HfgwSuktcxBr5QGiCKyAF4UhPoS2kiFtcaSrp88yLiCTbxr774GZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57W4bnmcPrsxuBEQk4HZMrXPEEJg6HPoLyvNVE68gEoVo5aJeqQrHdasrcdFtWZ44VEc2QhdbbrTZKjJj1aQ4oty",
  "key1": "3bbQ4HjKsGUqxJZQk78fCrnPUQGn3zKNKa14RQgVExffYG3Wo6n9ky1ZEkyNsLCYa8id44h5JmAciYsYhRjCkGHd",
  "key2": "5cFjD5mMWq9v9vSt5MF3UY64Sru9ZuwM1oPWqwTBQk5dQve6CJsbY2SGETXjiuDQjEKTf1sFrBeHMegKafVp9ama",
  "key3": "2ErZCFcCk7LUGDe4kZQHaYxyKDJKK9AHQex77an7smxT8KV3W49x7cnBamDkXFfJKQ7rqcHLfcSoTXytbjCsKhbC",
  "key4": "5VcUTraN7ZvCT58zy5WxH3n6FxM9Q3nTS4gm7QLiGPTMfKwEAXJB3fS8ZhZdTy2gZ4bRMSquxMnotrcP5qQbCpSS",
  "key5": "5myGd4JEdpWm2BhkVbR8aMaHLUuuHwtxeasrWJNGCDMqSDWwbhSHH4a5KqgXW3Vg8L8ZG3jbvfTq1xMCESQGgVkf",
  "key6": "2LiCcYMcxnZQzVPvPpYqdR2UUB2VuuP7Rkb8M5fpjKQoirYsJunynEGv251cvBZ2hTnksCbaxbCXwATsejbqcoPw",
  "key7": "4dFur5MJdXajTMM8aTREt9KczkKgSBjjtPKd3tnyyG45B7cWYeCwZuhVGzHMpphyo2dfwUbGvoaky1WZu2nHRkWa",
  "key8": "3LSrBezqvPWiArXD6heRqDkc9gYVCKBXUyiJYw31UnqXvQqpDHQ6SrRGnvTQdtnWhh68mx1cpUB26Dh3rEgZBQom",
  "key9": "6PLiHrJGQ7SXEfqV9qTJgGf4iJfJd3ZPgpYz9gkrjcesXxyyTG7HewJ8MZxf6TXnCpmqCEPeFtPomVQohhkZbf4",
  "key10": "4Kcd9rcMCTPT16LYoSDFYmLN1YzJsRynXGBY9t1JtuD4HWmdnVgi2ReutpEmAm1AhnuMGmbwqzsr4yxxtkNPepkb",
  "key11": "4J2BJPzRryf81Cj3cXaiiARYNULGhVT16sGTxuLWtnbaEJxxetPJsuMrmzMNW8F7Rf1YZ3Uiyfn5KPYVZU1EJu1j",
  "key12": "2B6hr7WLmhENCMTxggh96iHqbJ9naB7dNWejCNTKMQsYVpMn56wMDGcU5KrkkQ7NNaFuByRXbgFA4VPttoiS4Leu",
  "key13": "WqUEvWFxzBUq5yRiQqPvkKVohcWbjYvp6x9yYScwMxXFVEBa2QbiieNWgF92obL3joCCXYQZDyWQHVE5AUaVdSP",
  "key14": "57Z3z6tCJfn6Vy5CqXPTD3xoNCLzQ44rPcaS5z1UFAqC9mhhyFdGZx6QcgRfxfVEcHou4atxWdTjEcckh2HpSepN",
  "key15": "5R1WF19HxSzveqoFSTWwT3Q7qFdRb3sZZ7pETJdLHbLhKHeLjqVPmULuoyQNRP7AozgwbWFEQfciLZbavWoW4Dz4",
  "key16": "6RvVMR5JDbu5jX2UuxtHCRN27vMuKQUmDG1di4KJtvQKc6SoMQ9ktV8FevnL7Rfu1R46wWDrs4Wm3grijhBS5cA",
  "key17": "31rCoJeRb8fcgUvCyR2zi2W5g2HdpUFQjrh2VU4NspykfYU1bm6p5GQD77wnWYdJLyUbVqcVazthykkYUkHP9eFo",
  "key18": "3D2kKMQ8A95rYejqYbuA5hpQRgTrB9GAZmKCoyTvFz5zimX4WgWP3jskGeTcZnHzfAVqneP6PNWGow3m5urH4G5P",
  "key19": "2A38ky1zVUfAG15aWGBPKHEYFkE2xXUKGUCvhExzSUvXssVzpULtDq2euVdPSXjKTWEtN9aLrVoZo78vC5cFg67b",
  "key20": "3wFEPDtYUNvp4aZjD39JKUdbS2EoFxfa8pwi2tXDdFDTo4Ri7NN4eKj2jToNac3MJ3U4hYTG247J1nMiGUbLkC3A",
  "key21": "3qMa3iGuS1BFY7DBHou5QkAvZeqJZosyBmN8p3bPeXckmq2F3RGvH5SoGtqkpZFCT5TnZZBarTWKFsTNJQ4e9Gb9",
  "key22": "3BEEWLRQWcCYeXCSsz3ttzFThcz4w7yNjUzqXmmes7zzjBu2d11UdbiFcJohHUBHWTeLmh8cJDDWkULnfGoBD73U",
  "key23": "3qLjPtrjs2vUJhfP62mYKZheXLJLBn9rAr8G9Dx7XSWjfH88mdczgSoaHTkw3tiyFV4vZp4hGigRTNYQXney9Ebk",
  "key24": "rPraP2pFKdd2MFKyk4MKvFGRK9Y8F7Ad518htu5HjfuhScgF6pha3XFcRLFb2MVyJN9SZvaU7549zBArx9fiqQv",
  "key25": "5ZXqhdJ354B3Mzmwf8yTAzdamcyHt1VECLryYGzaimb4PchzDkycvLru5tPr4nwWxsqBcj3f6LDWH4h5WvBGYZ9r",
  "key26": "64FDKmCRjKSZg2d75NUeFiDgxjfkEs2vFPdQmxCxS7r9GggkdAXzrctW2rEMY7LFhtTmB3uTVCWfZwXkRu1yu5Gz",
  "key27": "3uGUCHjXPfUzKbH9fNkuMUKUF6rd81RjeWZEB1F5L2wdiayXcbHsjVuPdQdZche17W8Eb7CQFT6gcpyMbBW8YFgh",
  "key28": "65jSHLwEF93S5CgfWAFdVoiszFycXcNK5Wqtw39iyaRdhTtRzHG3L2aRG28xogttFdvGiqD53k8pL8eXdDywBvbP",
  "key29": "fvkET3C5XA3xS3BEFvg3MyNegL2Q4ZNJyL7dZmiV89NdCFTWQw8Ap4YzW3gGa2JdrjpkeRnGDzwGJyiAvntrgA1",
  "key30": "4tgQBxcve58iy8HoFQTAWEoC7iNkZiMC8kyU5wYe7r5h6fFRR7yaYUihWPVBNjB4UZDSnY1zu7EpKL56JK5VG4NX",
  "key31": "5h2CzrTm6PuT7zF4CTBpqKDNfFemYrr6LiU93Dgik9sitNMqBjxSU211iNtSqZHKyhdAThSWjBAg2qGbFyxAP3Pf"
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
