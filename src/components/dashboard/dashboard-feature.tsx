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
    "5zLoXzeCYTxF2QiaXmnueZ2vUhypJ9v53hU6QEcqMXsv1EuMKtMdaAxx88kJpYtAW5vs55z9hfWWT6HETeZKtEtv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FbxYXS7DomVaCPMKLPFS95pAa81iBdgx7woHSw1CY2j4MACaa4XSs3qbuA4JbGtJLeUiHsYSfDSHrcxT6GZRjcT",
  "key1": "3NZSb5Eh17juKYxUNKgoG2r6eBX9QNHhpeWN83gTAfijjtqn7wBn2oBoLmp3rmjeDhWnUi492wFxGaaDFgq4SCFz",
  "key2": "ELPNdqLRqdSQeLSxSeY2nF4szAfR42hx2hnEJ6goM3Li3VWKHBMExCwtc5GfN6W8UNjKnMXq9JjUSfknC4Z5G8q",
  "key3": "2zsqo7WAqG8YzYPnyy5GhPBaiHosHGYB2KDBxsSjt8qQ7RzQFxpjErci7dYovrz9uPiT75S7QBe4c75PQCH54N42",
  "key4": "5MtrMWZyVa9zUziT4bckNvRHd8JYxg7gf8VabhePWTUe8RZvxTsyUotoQYa6FiHn9F7aLb5KpVkgTyN8hsNgjbY2",
  "key5": "3kE8LvsbgVwKV7H2jNwozDHqZNsN6Mca9cQWpRuMXUaQZ9VmRmsaszYWoHUwNeagz78YZyKBkGbdZjTVtLjk5ECp",
  "key6": "ZhvS9KPejzBYxSdgJTDHVu842guP1UxdBsReEy612BpyjeVUhETX2H1JvbMfW6DPoMRnEGcyKuDtCaMJgWPix18",
  "key7": "gjp4WH2Y9ixDuG6d6qizUGjUHKoHh8hnygcBaz6DdwusAdUmHLzv4r4m5ukPH67uSffRzatfP6Vzc8oE1jZM1VH",
  "key8": "3qsNUeGJRLoT6DMnKKRnhBbSDk1KX2WbCbNC7okP6ahkCFWVacVttD2qSxgjVmcRd1LoPfrYasHFy7TPURR9esxU",
  "key9": "55c5aAmrP5rCRGv7M1yY9KDN8vFstNk8oPfiEC4kKqs5qGLwAvhdCHKc8HFp3Tz7EUCCJU5grHqs7Q3mfduCJ7FT",
  "key10": "2XqrrupvgFTVYMNXM7qsXYu7XXyppVshgRbP6uQUkRi3DkoevdQ5KM7v4AUb8muueedYRQjzhJs8EvRFK8cFNgbD",
  "key11": "4tjAaS6L2w6MRuWxcAwN42zTe2fGvLynULF33Mf9PcZitKawfdWTyiwSuEPyP8p8LAitF8A81tGXUzk9T1f2CWXv",
  "key12": "2yk8xwzBqqEx1NKGVKzyqbqrviQKxZqEH9G9gdEUDGumGeG1185QGsheWjFLrHw99vSRgPgeg5dPAPdwaHhGMGeJ",
  "key13": "4N5Pvg7tU9KQ5N3fBHxdSkhLW8Re2esZRNZPBrSGM7UjkdSDrxngfdaLe7AxjjzuV5Q2JjQ79a85BFwTyfXby5Fs",
  "key14": "3gCdxL4ueRPhmmN7UyJT2yf1NZWKuXSXQ1pKZroUKx9ckE6qXVnxjUdWc8DTunGDJRgPGuVPtgb4qHw6EBZC6NJB",
  "key15": "3kzNmXs8eYi1FRnMnf1AtqmNvoyFgrWVivhBAoWaafE4fwE9wJiV7K2SG8N4H29WEz4KEq7WdyHhzGHgQaSLEARK",
  "key16": "31ctsqZ5mm1ZCfAXeDLT1pH9FRFjwAUt5v6vALiEw1sfX2B6g8becHnNhnDsWMGUPxThPhbaKXDxGSxUYgKdETRW",
  "key17": "61gVSbiGCJpCGKiV3JeaQuHbggfwbBMxytN1EibBsPjKe1GWYeVczAsixEm8Crfmp3jafsczBDQo9qrDbW91v3xx",
  "key18": "5gopWAU9XfhtczRDt8RHAniPC5o6catWaHZxYPYyQUp8HxfUuB3drCGjW9YHXU4y4bShgJiHzEyP8LsV3n6KSZLa",
  "key19": "62EYfsW5hAY43ELxRVEJPJUq8bWVF4wNgJmahrpeypYfMMA45PT72NySsFENwSQ7Q4MAXcFZC7peTAoFXzdoiw4M",
  "key20": "21FXp69kqMM16kPjkdUDytwv8j1GLLR4k1VXyzNXsWuY64HHvve7TAKnU4H434CUPJY5c8YSKfgwMmUcHLtpZEzK",
  "key21": "2y2HrEq3tgpGr4AHs67WEJv8NSXMTLRuwnXm2S5zG15kEUZ2MJx4pBLt4oC5LYRMeEP68qHXpB7GUDinfGmMstH2",
  "key22": "2ziWnqh96ZfdiALug4sY14wD5tEFgQzJrfVZLi5QgmZTEqGYmmaSKbC8dEaB1KcUJX3H1rp7SCzDTFT7jto9ia1r",
  "key23": "3KjKXCcv59q9eH8PB8Mn5swwRwQ41GxuJqSYqF1hfXCYoUz7xEQ83yDGhDH2d8FC7XKtQ2xwSLSkfEznNsQKm5Ed",
  "key24": "4gQdwUQFNVb1DHCdcaV3SegzPvJpDafuizD8MJuF2QofG7GmSY2pKuAG3hknLe51RESgrVVh7iPfEifLEZ6Lf7eV",
  "key25": "3FBJfnHssTkZ9a28XsJgNfAkZap6JuoUdmxmcZAkCaCdb46izCZED1Jo5etfFKvt2tyGdnVtPiijy5wEYJsSYvkA",
  "key26": "4Cv7RgnCsjmHKXKCa4ug2FRmMwpy58zRT2AXUwGQ7ruPM8Sq9e4g2RfWXpJchZHwv43YKuAgrS6n1Rnn8SCiBVYa",
  "key27": "DH2rzqeu3DyT7WPAHvnF3csN64H4UAp13tbUQRwrSPKUcExoNhAuHtN3J629CZhjsBYKAdeQ3LbZi1oj11xjeuY",
  "key28": "2AaTSPxVjLXL9qgLebbhCnxAb6wsUWVi4Ddkam63Bj3Ux58Tvxk4AUy24bvCZt1TTMMkSyrCeN88F3MDcu1ooS6k",
  "key29": "W3GnyHKmukMSY5sVyC4YsLe21Kutp2vWMkXd7UELf8sL7WPKnPSUYbYRy8jMWgNj6XuhQknDkquF21pj77E72r5"
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
