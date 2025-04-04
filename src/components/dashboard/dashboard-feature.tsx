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
    "5hJ1hfQju2epJqpLHwWV5K5ti45Uyu2mPwQ9D4zUphjSJFWsRgLNVFVVKhVyMqbwpKYsDJbxHpKd3U3ZzX6XNzNA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Uhj9fMcBBwAVoZtDoo4HLYcTG2xQqvuKN5F5saQ66hpPAsr8m5yrEVov8pAAMnyZqVBs5SzU9z3ePLVPWim9omx",
  "key1": "3PfFGVr5Lytrw3rSA5ZZ62GSPVBPPXjvfqJxXUXJYXjUy7pubzAJ6pxGnK5UjvRvi4eUrnQs4syuTwWC4isaGn7T",
  "key2": "5X1HkTp4RSTmEeGJKem9NZiisNYTVn8TTb2FcNADS5mxCUzWbyQK7nQENysSo5os216UasSMh5JXgeKboHdTBr6u",
  "key3": "2a6qZuFjqWVewyQ7koerfbiBKWBYR7UQsJ21Wa3actWg8wgWDqonAhDnA41Fu7n3zHhhZrzJut2ao3mp8SYRH1k1",
  "key4": "4FvXH1zZGDGwS454FacdJNFN8QSxm8VUJy5LFdLCnkQUD8gfErNJF8e6qcE6j3TvfQ5m4TacDWHWexKYv5g5F7k1",
  "key5": "44z5c3bpmCxTRxFvFcppw34Th6gSpZpxmCs4kGWwk6nxQeJvTzXhPt4aKvYD86UVvPSibtVNRgCfqwLqeX8Qjk48",
  "key6": "3Mu43dgFSKM6sCVAhfcRvfgSSgcW2qXh4Y9cs333Rcj1XFcS668KoEUvdzBDYGMnYkpCwtELbJuonNhxeFu5DEKX",
  "key7": "5uT4RhaJDjPM8LFfVmyuF1wQZJdVbdHLWxgDW5ELMus5ffi4E1siMhaYAUaeAPuFob5aiW6K6YXEQinX3wT4R3gH",
  "key8": "ff2xDpEPjnB9qiGZtr79V3pRjdHC8VqrF6876NSSJKWHtBvtHVJ27vT2rMp8p9BboL8dKt6LWvHRBm3BnH2gpy1",
  "key9": "46rVtaxc7jjAk5QQkoSaYGSNctg5RNcnWmjWdorHrmzDmT2q2SZCUbXQoYadWQMZTcrRnuXRsNQ31pRdfp7j3vRw",
  "key10": "81nAoBVPq6Dd75fvazHARzbLMzQUN3Fahm8aFRbVefc5dwMcDCfH9SKKiFJj699Ksot5NytKegJMz7daQfHmRPW",
  "key11": "5mucH4HFg2RrHiibcwmriqjPbwxd2jHAxvUHfM9Ct2gc7bNsZ3gBLW6MSsQQuq8XnbX3n44npUHn4qGPGw7a2de",
  "key12": "azCH4M7D4Rp21Ng2WMsVt9dR5DiCQPNxuWLggRaejsQWf6DtZ8wVKVLTRumFifaCtdtwHL4zTSwKbE21PWbtUKX",
  "key13": "3wuSw7X4A733LNyQgE6QXz8pYnzYpQwMdrcq28hAwm49EQbwsafRajxzQQQtJtrL3mZtsuUfiv6eKcvRS9Nx6Nc3",
  "key14": "3UA9AEL4pvAUWXCMdkDnZ61azRgsj8H75RWqV1v6R5jvBYDDGTE28shQYaPi4FDoognQfsMHeRPZ7rRSixLhN6q2",
  "key15": "41g9HgZVZTFVv9DzBK7dWjcCrnNuXkvKm3D1XAx62iSoMcGxz6BQuHyDWJ8Le4WGkaye2wFpFDmHYPmjuhysEucu",
  "key16": "4WVjKdFxmumrxWn2ooN6BsXzbfNMEcP1gJ6m2V718LVzSN1wDh97RdCUuB3vgWpDkWBSwcWH1Yfm6UnHqGrsfRVp",
  "key17": "5qaDqrLQ6JChX5yEjKmB59T3U7o2DXzrtTAmyVeLUybFccN3coKMZ7znzid56AfjMYdWsq6WD4zMTeVJbnCfh5i5",
  "key18": "3FF7mtLhoMFx1H5QQFvc89yp8BPCRS2gh5sPZbJegXZErX8EhZqS6mhWcqi75Uikh7gkete9J5KqijzaJrYbV47a",
  "key19": "51TgzCskL4C3YmAcopfP2xxgjxRc5seSoL7YBAhceoj7j1N5wi6EpvtCuFHfpVWqWdKy2riMtoyG7rQ8s3VAyvSE",
  "key20": "5aCzGm6iMfmBtdU7Z4XYV8Po2z9xsiY7LnF8gx9WVGDWVszXWcFj5N28E3P3UFqKE4cNP3iUrdiuYtFDHmk9Z5VM",
  "key21": "4BmVtZJQK2m9kWC3hAkXrxGDZQSSszMY5zsck77A4fw61uGpX2zbtSu8JC2Qz2T96UNwsYJpLPV63ywoWbsjJi6e",
  "key22": "2ufdi49Vw3qFrX2fTNhE76GjHgf8bPkH7qDPy1Wn2CDJcBqwv6sAcCB2g8qtSmNUbBiZUUNzZXLkzKSmowH144Pc",
  "key23": "5DrQNKwkDcarb91LKm3JPrdrZmMbcc35u4saUJLB4SLEGEbPdsLh7wj1jDgX8eeKWv6j8ReorQeH2hrvSu26bfC8",
  "key24": "Q24EeC66fs4jDKTVkh3XccVbE8fJuCXmxxnMitJLJDWCdgw4eeVVaaGXpBocHjZoJhN4yVhvoUs2kMahX3NZjN3",
  "key25": "2ZNwBvUVkYohSKTWGFVUyFVG2bZmQQ8PPYVdf4YuQrPSBKkz4RSa7CqUy2hRuwt5kx3oKxmHxczP76umjMy6K1ZS",
  "key26": "kXMnaTAVgQixdUJJ5rDJD1ffS5GQUgayo41WAz5kj8aMdzRs3nmyqfLqncE9XZ3ToReKpYV1nzvWZ5W6scHr2du",
  "key27": "1aTqmXajYYdLd8GY2qR3hGHYEwAYgXdsChfrPV1ELHHsx28nG3phcSL6aoj4ceWmA8pLQdxopxuNUynvaeNKT8t"
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
