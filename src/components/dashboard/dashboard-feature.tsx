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
    "4ejzRF8YPvuLmiZNX5DEKQgLiWdHot6myB6iSRnVdWjg9m39XnxfRScERSDmUhwqjYaXK6VqwAZjwp51FF883oLJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o4p3WbhnMwS7dx9Kj5vSqaZWEJnVR3WEAu2dj8xVxK7MhQ6mVLw6ZYEczsEC3MRPAJK4VjMUBCnyULbDQuYEPNV",
  "key1": "4LbdKf7ZZ5Mxbiwo4foAEJYpUqVhGJKtCwNRP2C2eUqZ1FUgDpxkD8JqcEpT1uGx2YBYVxX9Yj9vFvDE3zfBGBX",
  "key2": "2nSwkYxSDzGT53jTN4pcu1yoGcTpcPm6ersFAdjaqXmQWFNQQXNDgfjYFRx7iBXAkR19BnxL6RydMTK8Hf7iRm4j",
  "key3": "2ov8tahwUN6h9pT69jNLespg5teGsnLkBUMC7gKpeZUE294eDXimamo1G7BPn7wMKTJixAVuamh6TUQ4G6iaHuAa",
  "key4": "NbdtARULHPxgept3XaZgxZsuHDH4BR5P2HZpoDrgZeqCFkdNLpmigpKkXboSy5yL7bkRQpFw7fzZAeV3PwbisQn",
  "key5": "4Z21WRwnNBgKjhgog4yEiRCV4Ab3EawHRYqWGU8yqj6uR24G8wDrGxXXYPziaVNmD8D6uLqdWBj7GavJ9mPWuQLX",
  "key6": "2qFZmiwjDBCQc8T7cdux9y8qf6XUmnTyaaYEwbmA6gKVZypfubTnWXAUMPxFwzUickxEq52eJJfYT4T5Nc5w7HSt",
  "key7": "3ossY89YrGazMArZ56fy2sAu8Zi4sD9ufzo4TfT3CYSPzzpoggub3T5Av9Wuce5MkvujPqHuR8nhZuFuhZBnjRvb",
  "key8": "4i3dLNY7uazyn35icFiM8qKt8pCdv58HZedG3guCn761ei8i16C6wHvgGPDxLMwGg6Woqry17kaNXccKZyMn1xTs",
  "key9": "VJzD7ixDxCeRGXK75Uw61ExvPPTzVRVUzSAHEjzBjtUx9NTdXe7AQnVf6Ezu2BGUrEnyiq6YPAFJyMbueTdDdKf",
  "key10": "5wHE2LvjZ6LV5LBs9R5hKMazuRHzqJq7bFhUk7vwmVyAhzTDom79N4dHS3eLQpCV1cNRY57pnReDKahXsaW3MZ7d",
  "key11": "BhfTDXKndCEDQwsByQ1fbjVcT73qLtpfYgj3LbKTuU9smcbB43wq3YL3gZrFBg5MQuwTSyP8BJDY6BoRgLGv8kt",
  "key12": "iipBLHoXpXY1ifXdc9nXGzRB53kfocCfrdo7WB9UfmDae3Lnuc6QeCbBJjKjUBayC3pxc8LxRxKxCBCxFjXrU7U",
  "key13": "2DnvkFFhc9AuUZTHnHATMLViramFDxZwXHuX7vZE4u6fPn16Ja2DAar8ySwDFNKZdhUsH7j2XvPzB7s1y7w8Nhf",
  "key14": "d7wyP8VT4qCsSk1M1gFjKHCeBYoFpPj5rFVu8Z3QcfZ6U5feFCNxVkFeXNjebeao6jJhBu2opBb9HBaiKJtPjJx",
  "key15": "H4iGD91ieChz1aHjLyzAAAENhgGbKs2dUjy3DM2VoF2wJM159eCArw9NBvya5RRnBtNZagpqmbakqRjHLkzazZg",
  "key16": "25cWiJX1J4oKY3Kcmdb1GyFWyEy2GVdfBzkh5z5CwxPLYy7kCoBfo3N8jAqpu2X5sjP3XmxEr3j2RcURMbXY3npk",
  "key17": "K95xwUdiWjD7hZzinTJCLcFxRsHErgZTgMogDrRAdRc7M3EvEed7TJRVvjxCDZkXaDDSasTYUDuF4ksEggv8wnH",
  "key18": "25Ji79htQgo3wa33kQFgz3eZ85Dbigww63PX6GY8YVzzdDrWWGpAyGHNoKDnXnYdHKcuv8LzJbPwJNqJiUvtuzp2",
  "key19": "2LhdTgs7gJft49Ga4US9ERA2PkTBQUCgMTewwUXvFKBpD2vEbUyF66JgHJWbirbpRAuZW3uSbAi2gGuAhurneThF",
  "key20": "3taCJB4m3aVFcL1YyTVPscQhvHe8tAc9iKdSxLWUQCgvSBrAsK5Q3Y4Tk9Tuyd8M9gQ8rMoccG2P9AP7k7Pdup2w",
  "key21": "Ne31BqTTRfQmiS8wJfghjUjThuASJzphxgDt3rhgFM8rw4G849SfgnycHeqDAWJGR8SD2xvchKLuYeRDKLkDKyV",
  "key22": "mLEDkLrQSBEWwtxkkUuNnsFXYAY4YcS8yZEzeWxN5LRwALT2wE4ciaKyNbVtFYZ8BDBcdvqumUTsiq5uwFcYhWa",
  "key23": "4pq4WZiXmZUD2687qm7hva3KGag6vWgqYg7VtnW1LnhVV6nAJxpxETNKLpUNs2nftTSFQEeYhzyFPPAAUngqMNFQ",
  "key24": "33NZHk4fZo44RCWAPyoZFmEvwgwKg6HPoRgyHKgC1U7aihgbmCwjAr2eXt8bZVc1WtxHSSAXcQNBQxKnSaLa4JTD",
  "key25": "6Yo99FAMxJnYcwBd7CuVuTLZbqQyVQFrqi2fakEF6d3iNSaLFi6A83Foh11xHSRNfydrbwXbLh4ZAjpSpwQ4T4n",
  "key26": "5uQK4FqxjnNUmQFKEHZvtQiNwBSZ5dbUUMYN732QUnTxerNt9puP4Ls9jctj3ietMshDmVgT6nmCkSmoQiV6GAFN",
  "key27": "5FFdv79yTQktLi38g6fXisKrWXWqGTeLQHMRFiSwFk6GDmUMtruum7sAYhUBGQfzGDfUoERJGDvDjavr5if36dHU"
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
