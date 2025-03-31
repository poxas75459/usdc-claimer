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
    "2JZhpmzKREMm1pMDVjBuuyxDdnQHtiJZdvZA6jcraHMvMrZKkMw6AfBvBDYbBPG5MzjH5RuWsVNJbQ5H8wATzkL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HWHWo4k4dJHTJQgCQKp2e2NgXtfcTKxxrLAfhYcyUUWjRjqS2iV5z6StYNX554WEWvZsC5vCJfa92iF12SCMQkc",
  "key1": "3GT1V643iM5WCTqGsFGHQZTG8g1LM2jaXezxCe8ELiR9e1vTePGQoWZG6equ7rVVqoDdQwCgdfuAUEkbu6jKQbds",
  "key2": "2C6zqDvyhavuApRjxCrpqcmdHXvJDbZ5yxa3wq26bJyvJAWGgA3jDD1eFsnKJzbabCwP3fQ6MZooFA6fLU1gkvLg",
  "key3": "38ScJCucuNE6mDhQuXnqFoUJNjgeqsB53xuLrGsqHfzbmADHfJfpjYDikGVs9iYipqceRLUAVBFMGb9MdxNLVJ9W",
  "key4": "3JvyxdYamzn8Zcp7hZtkXeRbxsxKNtak8ADjDd3McUgJR9Sj6wdKkhqP1M86VEFi5AvupYHqjUPt7FyfY3WYqaKP",
  "key5": "BSobsyfvGAAvp2YyY2sFM447A3ec8q5SDxGqN3G5v6NnadxugyvygbfjxtdpSq2hiKxUPQ4mrk2Uu3nkiW7M6qV",
  "key6": "avKqkXgMtwARnpQxootDPV5HNc947Sh78vAysfsuHHZ4ACAojuTWThvVr3sCgYxTnWXjdkx9nY537hExJpzisCa",
  "key7": "ytPRAtJdnX6QNtsnJ6PrUU29Dqi8iMkYMewpjQ45wpHkUbWpuCPz927uQqjgK64Q2U9ZLtrbmbRwh7u6oXFA3ag",
  "key8": "3VaU7Hs817RYF2xRKh21pM16W6eaR4N5o2EUgDt3kmPj3DWDoNfRRXvWbzQtfuGayd6xscLXDyfqBM4zGR61x4zy",
  "key9": "5mxkxJtSun78UxzeE7HfcQHksGecE89WvwMHGG28NGmdA15CvVpaCHXy5YiQjF16dZdZ5995svrhqmP8KYkxDf2w",
  "key10": "3bxrfU4iY6E5nAGtxWNGNZmK8aT745N9S8SU9hCKvqDnALTRemqANXB6VuHZTGsHQGp2pGpV2uqrfPL1S8RJ7b2v",
  "key11": "2LyKZixGXxc2UvihGYxsvqCJ6CgskNLDbwe9uPwSigcdoNmwJpsrsTs6JYm7Z4EHdiidzAFpf98QrZ56eKYkrHPS",
  "key12": "56piGpVWBzbs1jp2dmS4MF7mUkDyEELER7kqgyxsbNKKyLJvjmjU4UXdeGqVngSP2n6U9hFh2tRfBGxs3iGWipQq",
  "key13": "5K6kfUvMWZNUpXaiswY8yRM27gAWpEmroy2eo8q8TMK8deiLwPSSH9LzDZAH3kyShZcaTiz7dPqtmWnm9SYBwTgc",
  "key14": "5ADMMTZpXgiwkHGVnqxHio1utfdByscpbcaUWa1KFoqbdwJYtqnihtognnRb6KKuQFwheuQRsqrv16hivMX51YcW",
  "key15": "4dJxkP4BaGQZ3xX3EX4hZXUhPELqeeptcWWYgVwCm2Hj8utdYSz2gzKGB9zbqScmSP8UvGzed6r1FXtMsepFQKBD",
  "key16": "53TU1TQcgM5gBP4FAwmkVDXfBFkNCd1N3uKQju1hEfRgPF6Asv3pmV8h9M58S4D7kxZvW6UDcLSgeYLeDDYedCKG",
  "key17": "3hunUAubo246H2KLeiGzxHKXEfHqcR7jK7WmhcG9U6vHFLhox3KHZSA4phaySW1ZWXWH1kar3TU5cTH928fAoAFP",
  "key18": "5g6xSzYMcuRsroajAhU5CowgE2sBKYuxS17cChMuKmNGYx261MfMtSnTgi1vtBrh9Nmr9aPv3YS9HjqDEH8DFFgX",
  "key19": "4adVHZ7XjfZ4HcNwh1bKgvQ3JiGg3U4ejDV1KxwYL1PE5s24R6rAudCKXZjeiJxTSy3QEoXEV8hHU61JQB4DwrzD",
  "key20": "2Fofmr6XPk4gwj1m1engsFy4wgEfLaxY9Y54rEGse7YBk91Snqd3QCag8X7JSCQG7CCgrirAgtuJCJAcEZ1zVkhu",
  "key21": "3z7wRPaEDRXCuy6W6DvLgdxRXjzuJXMgmdutf251gDxt2AYCkoqCAFqeMGReCA9Rwg6o4ckxaCfAND7PHKfxKoVs",
  "key22": "42DU59tajQKvQ2H3rymEStg2ecxPcFFniZNSqEPaTgYBprTpY2HtrqVk8DwXsC4m4WqMjpbqLxGyEE11cEPkJRjM",
  "key23": "39n22brYoEFZmNJmozS9sJizAxCCxwtGJ5kQUEk6XDArzxbXsu3AP37RuapnEuQrfhcboc3mZ287KqLURB8dq87g",
  "key24": "4gs3wVWXuAci4z7nwxkHoNpPF2GEcdwHGJNDhoZNxgkV5KEbLJBN1XhLg4DcWUceuRG9EDHWA2Y6KWUgVjfWUE6U",
  "key25": "45G3uhNp1agjnALXLAVERXQdkCWSLe7w5PLyyePPP7YWtCypLZDsgQFDu2AXmzMBWDHD3mgRkSV5QAyGRjdAHRSn",
  "key26": "hzvKSALNBscFsXJP3rR2MNwQoUsZQ1YYwxTLMPsPMh2TEBAgjTMexHroqmaHaCmtsV1NkaE6tFJ9NvoEV2xMdjG",
  "key27": "3GFURdnrKuotV3fwdbDrDPVuCsEbnUaszxKpetHs6wxndCi1RrD6G1kv3mzLfueaPTWusvTFBURKFsxv2D9Yrpc9",
  "key28": "5F4MjCe6HUf9UNg9zGNtvJCdRA5JtPiPMfqxmcPnDwkokSxEpCDrUDQvN4uiyDPxdkLKFmaMXLNfU3iC6fmRSojD",
  "key29": "23EGhWHScnfJ4B5aNFR24pqAYQazZqNpY1eRPSKDYV26KYG4xXvc6E8EUwZgfSK3kpW9oC2GzwJ1BmjqfN6ycn5E",
  "key30": "4T8c1xjSU6XarkDSEi2CfwyNmunKWfCepP4r1ys7piQP8J1YUXsNvHhQsR8FVWeXsdzfDwNUC62z1yt9ku8CyR7K"
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
