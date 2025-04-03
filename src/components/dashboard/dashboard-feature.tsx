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
    "oetiPsZzUTT4a1XvVpxfaHZp8rUVfK29Jxys9XjvsuM6fNxpWaCCyFURSzyGLNwSjTV7PS7YnxogWsymsTDhQQX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zcy2trPxLJv7g6vvnfdcfaExv951U6LJo9qS6R5884C92SUwF1Bqx8rcBJSJ99NR4YbD1mCUMEo2SomApq5SpRb",
  "key1": "XrSg33u4WzQNojhjbGM6MvKx7dw4YGijYtoVX8DrWgMc6JuvF2dyixr8HEgwDrYpG1rjnDTVpvVyZwZNdpPPQQ3",
  "key2": "51L8Fug79TMaffFUMe8UkmLVUDXFjH3uWAPjtuZ8YrYnFKJuYmL5t84LJ52FoXSpFutEKdV11cU8zWAtgkmExHKi",
  "key3": "2j32HT4SrzU2UGWtynEo9oD9oXgbD3seEJ5NVf3jou9GvJH7pNLYLQYYP6MU3fvEmR14ssjaMXqNJWJPL2KdB11E",
  "key4": "47rW1ZfQNtgnnDcjRYgCVLJHgbDfEygee8qVFBakkWG5TiSo9vQFuqcSyBvN1qnsLfqRVdB8r4F65FWg4hfA963x",
  "key5": "3bEeeWaN98f55DKef49eZdQEEVy5S2MiJyGZ1aENkfZddxpepwvrN9e9umVkWg9ushL3sw5iXhnG37f4Bm66fdSs",
  "key6": "2osCbBfMv4YP52QE8JfhQULhevsnPtUpfE4Xn21Dub68bhWsfhqGpXCXEwR1DPoqYLCRBct6pYewjmwcWaMTWWBh",
  "key7": "HZ99XMY5nehgYMwF9qEaFQhfT1kX9rreaUNshr969F1e8BW6DYneTigAsfVQpqLghAs7f7EnSyPnEPjcqL4Gesu",
  "key8": "51rYrx9HVWmRd1UBzn1SYYV69TSWUhbS11Y8vHD6u1rk4hXYMp2YnxCgHmtTRmvX7BoVzfVnFX27JvFeVrBQfbq4",
  "key9": "4AvfZUdW1iLnHBfEZRTXYEJffTh94iZzwMhr25bLDtPqR9UPcEampzSzMh1QrZoKvkuhSH8xrmNT24Sz3YfYd592",
  "key10": "3CpksPk6oBbatKhxahbDaMucGu9RBcXjZCJFYSG7NX7brCgYNc9SsCy6Kh1DfBh7jovKyuKv2NUpJsGLG3BHcou4",
  "key11": "4dYWkVCmiZgXWH17k1GKchFYKyXha55xph8oUSbYACDLdbtVJrjbmJdQDpBHemTd6Jdt7bRG8fMyQELzJMe3TWXh",
  "key12": "3HZWNtTf91QaHGQznJsLJ7cevmPCvFPLTn9cNZsUDj139nwgSavXv4S49g5yrtAE4WRiDkVKEtdWKVUzokG9ytzA",
  "key13": "5Y4DLmVBcnmry1Xd3YcGjwkWH7N7Dh59ZxS12wWzwGZAkHfPxuCrs4LrBkLxnTkKYuqNAuN4AENGQAvZDVE8sf8T",
  "key14": "263fsc8wCX8bnHd3eCSXPZo5PuEftEBJKVpURQM1mGkySwJJLiC3taBYwx7pStq6QV9bfkq17Vod6ddwMm75NEQn",
  "key15": "5qNJiczvKva44E8brCJB6yhw7FYjqfMV3s7G2aNukvyESe1aCeKkXoS3AhXPJUrQutu73naSinacmTz9Zo8GpNGz",
  "key16": "4CxP4EZswPk4rUSA8wrK9EvrN2HJ4hKhRimbzmUp7zu8SthyZujpbZXjbMUYUpEYo8yKmoshr8LiYDwfmapHVVNL",
  "key17": "3MTt6R6xQoE2EMtcUTNSRsAoHfoX88VF1LgeU9hNTWJSwfr9TqcDRPM2859hfdcqoacj3vNSDPy7zAP6A16UzyaT",
  "key18": "4VDLBBkRxN8WkYjgNEaMyir7hVdXhQLsoJgUhNvEWUMS7T9FEe7CqKTm575arZFMGntALyinbWhjdrNTGwBMLd8a",
  "key19": "1ug3BfDC7nxmxmwCuuEE7m3hhZ31uCQub4YQpAoLXtfwZAVnUQjqwkjTBwcwTcNAWqrgEZZPyJHr13feDRBisvD",
  "key20": "upM8AXCytEYNxE4F8U3hsUUxFWK82i8X7YQG3xgetmQKpdaWgcr5x4WCTW7dMygw68YyCCrSnKmbPPJQjdpHBRs",
  "key21": "4RZCYBHd44fRN1v7VWYzXJN8HcUsu8p9ZTDaqre7BfV292bgtYHLwgznwjD86NDETwXcLmzhTzwAJgbaVHUHSkkN",
  "key22": "26UKuCCbLpZZ9w5KGdnMsnrXRXhxpFvyRYD5NwE2GkzptS3gLhaqFKZ82c8N917RksEdzj2CHX51S8tmRT7o9wqQ",
  "key23": "UrfoYvG6QFs3gUHqda1nvbPFcnr3hwyEgWQP2YKdjVEQGppWkPiwhsXURcDtwPbVPYoTC8yjNA9EgsTK4s6RQRB",
  "key24": "3Dm4jCKJn3zH6q8Sy2Qt33N2AYrXrb6wrXVefbo6s17vnaoiPuxoJmM436ozavpTzPKPEnLYtbEzsmfptFkByg57"
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
