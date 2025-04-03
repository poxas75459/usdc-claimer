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
    "2z2E6KDYZGXLUBVWJvjzdShzQf93LE7S3eN4mnmG4Pj6zJaR1xjgbinsd2w4zgDyEshZHgcXGbt7reEEKmvdj19K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iVxHPPeszH5C8CRfKhL8fcGVBapHiDLmCqhpWYacoMi6gcJkWUvafCMkosPsxikymuzgPQquzjG7fsaKwHScYaa",
  "key1": "3BHXaAwQbjFMz3AwyTS5F7cwrmA8aKghgpL8wYApa9GS2cjAH6vb5TKbA2wGWEefNbBzxV8XCFgRyc1DrDAwqFUj",
  "key2": "3upZfGMhqfvAW9TYG1YEKBiLD1SDepbkEHPhNsp1RLEdWhdG65ybQLoUkTn3xBEUbfuCkQHe8jFTX6VXYro4TQC5",
  "key3": "463mQrKZd4nn43yj2p8m6MuN8yfzFWEXQpi7aqyH1uWP4g4QcpF6KaPo1rA6PnPLjZDNUK1CAjoCcQyqYV6VuPWL",
  "key4": "2rFJoktVjqTMid6fqwpucg9HZCVjUUaxbx6kxryhCH6fq7m1zJq8gy1WJ8CnnCGGoTUC2rbVuzAz5hNA4jQbGrae",
  "key5": "3tJBMz2AC4Q12H9ZTuaLmgRQEiVNpzRxyBfrzKxJhkUHG8Ldp4xkYqCY2zJcLE8PHws6K6k1hqf3qx3HMaDNXQX1",
  "key6": "oE4GdjZDoM7AsycX8cunZybg8GbNdZgSJMLbQHh1EwW34iPY2ZNdgo9JKybD4C4QvJfPzbVF2BZbxFf3yQKhFZt",
  "key7": "2NMFgPxAY2jwTSr7igirVbGwbroLknyUkzfakX3PtAAwaSQG1YRxbvvf6sBdeJXMnpjpT5ZThKPjuBSgC1yZthzu",
  "key8": "212fTU4SaAhxHaEiw94auvDLc6CP3GHkpMgTjunoQGhqBZTDbF5AxjpaRHJxgG5L8r1TPYFxshkTx48QF2X2kPV7",
  "key9": "4T1bSB6WLJjiuKhhcgzxAiZMeiayNHigxKtWQ6MeTU37YZTWnmoxxVC6VrCarGsYxFiZybi9oZmNutuc3XmnowR6",
  "key10": "3uCtVuFJdSwfq9DNkoTGdxkNJ5DqapJYhoe8NGbid1EVyt7P6ggMCrRW4Bnb12PzrdnvDKpoixfunHJTRg58vjNH",
  "key11": "5WQ6LhDZMPutznjXmMUbdb3w2VJUcasbLFYzenANpb8AcfAW3TgqLq1GmJwN3hgffDvMvRU7XBjiGD8Bdd61mvVT",
  "key12": "3f7hWyCtpz9VqamKvnTuHBQrm7vzY6LmxJXp2gjHVydEMpYTkuKYu4kM6CuXqxCqWKiU1jW9uhQsWnv82b1S21jT",
  "key13": "2SKuaXwsufRDabjQm6zhktm29pdJxXxB8cLwbt3nLNtVPBZTT3Ra3zxys21YuhxUZ6eT6ekMUxPrG8xPU2V1bs4n",
  "key14": "2NQkvZPRYYoXsvaDha8ALAW9dikiR1f8m1qUmK3QQizWgWBLsk5MdwjdDGu4PR2ReHHdB58KSvazQxUCV3dvnCSJ",
  "key15": "e1oy2kzNLoXRs5qPXcSLbrtZwGQ4ZEEQAjCs4bXUmTyLWEJC12pKNa69iEZTCZPP4gyQDT1wvt162R7b6Btbk1f",
  "key16": "2CS63zBzkVE1rU1kyS8VUNJNRQN1qHDVpapio2JLV5UyLULBNdwvYnDFL26sw55VSw51NAoTbZyKv3PkTmivVq9d",
  "key17": "tiz7xMiWAi3tWvgjYs9nkMX4xwVb2sG1DSRrPj6FCtakrd8GEcRjAXYiCqpwGsxrz3mYj8TWBAizaDhBTgxuwNu",
  "key18": "5CcYyvfoeNFADaNE8NFAbBwKTKpb285wEvdWUvFf92yhGeqGsogwo98iJQatfZZtisH1AHyShLSL1q97hhBuqLbf",
  "key19": "5yyhR3Bi2iim9omUTsvQpFGtARgaAKqTtCW9YFa9XwfsSUXRc3fR5JGohjYcyAmAe7qbxdCWjtTQUcp2S8GQQNts",
  "key20": "63USkvxRVdTvEYfRyZvczZWXNyy4nAbsnFhLVJT465xpQ4gDEPYZtx5Uno96oQrhZWgzaWmejjFmJNdZgdxii4W8",
  "key21": "4fVjnzjGii3M5i8z1nZnqZY5BwDnEZXM7EvRx71PpJCHJCvvviZkChb6QRxmjtDPeZ8fic8VuBnrBkzXFdFUjb3u",
  "key22": "3RJVKPcTc7KsPc5HMzKit5wRW2fy7BMxzf4USjY9wTLY4aoJN8mJ2txEHPQbz3z4BU6vRHwZpMuEcNw6GRZrCdpg",
  "key23": "FS9gUCDpohUdxVXLmfgZ3z3cr5euMFNhQNk2x5yBE3NsHgHRySDWLqHPw3szqAUKsPGDAmfEhUEeP9a7uSwBTVz",
  "key24": "2JNwRiG6cMMUCks1fZhHhxaBGvnj8jjJAk3MkxPer7NhYr2misiHSdbEtMxUQFje58NXUQGEAPE18DSYk82wrHX2",
  "key25": "4QSzG76cMZRZWscKbF2bNTmhGxbJRuRKfCVuaMCAAMphVTdUWJy86bVJ7HvDttWPgFg7fBcM13xkmwWTSjxd653w"
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
