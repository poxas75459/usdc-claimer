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
    "38szL9nMcyYuc1L2s2BMh5cfoqxppDwhZzRpqt39a58RgASQDNgz7cne7eX2X9pLfU1tRG58f6F2QQiaxdfNHHfY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "82ja9NwJTVSYP7chWyWuRqbdXF9LNRXy6Hnpqh3siQrg2wDrNxQ66q3oTncameo3YacJn3uYSTkarLJczemNc5T",
  "key1": "wi4Uozvsy6s2Zm5k4RTifYEQiX8CT2FftBJJTaixSJV1h2JQpn1QJyBqTZVQ1Z7vbz1WV4CqL4EGtaYJx5WwhYm",
  "key2": "3fFPeAXZqj64dVYhsXdgyuS9aDeqWeGVsSg4qnsro4TrPMh2dkLYJUQiaaUkkA7cG4Sv7HJS5ZTCY9HQ8PovYRxu",
  "key3": "41QVih2RcPpbJ7zb16P72SUdqPApW99vhEYBBVcXVfuGhvznapgzB4fygfTyQnJPnFVb7Kg5n7BsARDguSZU5Tii",
  "key4": "2tJmPb7fNWhRfb9uX5f3KNNHv5dqrNfmJqm4td4gJG5GU1ZewyKMkkb8kV3PZ6w9LnCJ4cZ9ntdfTzNVsxxm5HA7",
  "key5": "4UoxAhGYx7KLFRbdHBFQVT5GJKmfFFfnzpRmMqBQRrKkkHCjxuX1yFMSAQsxyETa9KzJsar5wEfgXZX4LQu6JSBc",
  "key6": "5zGjWhuhgDnVakfrGFfT6WAEt8pXewoXZaY1sCb3afmdpRADVA8v9DbxNpnNLgsrsU9pZ9vLKLzWBNsJDsziZBLK",
  "key7": "2Wg34p1SM7YJ3Ud4NH2fyNQkiNvYg9GzTWh4CAJrrSV3kmKmoZUSzWPoHNkNQ8jiQc3RVCGBF2xwHQzobAgKEefx",
  "key8": "qhGs1hqwv7ctXRCRuvNPuUuDF4zHzmRahsQ14UhnarLXcR1nuV5rD8vU7WryQea49tAZsWZtRktj38pgPLLXXJk",
  "key9": "4dT75q5C8e84DHRvCmcGiu2EE5ZRZcRMyoViJtxoh8bHBHmbEoB3hfC4JefG4oEosCM4BDMgRVdjjzDj8qemkt38",
  "key10": "5mbbQtBFnd6DmEgXkSYgqdaxNY3ncp2K34mDQ9hcsHzYwzpk3nNXmgkgErqFMK1dsUD1zewEaVtiH5thXronHpCb",
  "key11": "2HSkmdbBbZLFG7sPJeKmWAws57AEa56dLMCqSTrV9q1zeRPto5bjpnNRrZab1AFEdeuJ5ePcVq3pemFuK4iYARJ6",
  "key12": "2trrMy5vnR9qMx6GND5Qh3VkZQL15dcPH8FatxhDzRYSBFo6bBdU7MDyVZvUwgGqoX2P87QuzViCb6Sm28UTy4sB",
  "key13": "8iYJ5JysuSAxDA6AW23tAeegnW2GWGscu6zWySmt127x9C2GVZykiMhFRQaS7Qfmyve8sHLAaSN3YCBZuV1AUTF",
  "key14": "4mbJi5pgEXXE9FjZJZBPu1xcNRDu2CCVz2uKAYswoQQL8DGezcqrZatLvHVewT4nUvGd5eUzjj9EHvYsmVYZ5ZML",
  "key15": "Yo8C1s7CZrBhvoi7Tpo6cFQTEdBBq1zcXaJRfvVUSjeafmtEoqyvR3YA6xRaztx4ENqcVS4BxroMoaBW9NwPoCp",
  "key16": "vi5V53xaRnDefDpaLec8P5kd1F66WrkPwPVAd2gawjU7kUec9nhbMBrQ2VndkgKn5WG9epFfqQMLWZi9hzjS7R1",
  "key17": "2rnB35pz29cLVQboyJGGx5KSrkStj6GEtmAi4YRaCzYU4rYSmnRxHcou1b7X3xvNcQ4vgQyFXm2MXrXKjjTuY4oz",
  "key18": "22eLvpA33UXDMFXNM7tUYUDDkgbXcHPuVWtBAgHrwSrTRLdASfwC9eXr7y7pYW2j5uTZHa2XDtvnLith9wiSqgWy",
  "key19": "5e7v2QRwgjsZ9RWhi3mhg46dffbubsrgkfYhMCZB4TE5PchFpRzg6XqyNFaBWZYtAEHXDhZ3t11YBxm6eUSQQrHz",
  "key20": "3LQez6vcDfxsBRtvxcMainJ7qj5u1umFKCpy6EedmpL6uZkVoFqptsgBxXv1iy8YmP3y1XP3xeZkW5PRufAmhuu",
  "key21": "24JmGnQtc7HRBsPZTg4E6TZBEoDzJx1mRcBPHYXg7qGymK7ksBL27tDqyxtYaPBubtMrksudanJL77eEBn42uNnN",
  "key22": "2qLYJYvWL8frBgTA9vqTJnJDFh6M5G1SXzbN1z33iePJ3xNJryRkBnC4xVkGUU7H4oU35Xqo9US7jPwt7SWUaM92",
  "key23": "5nzWbTBQiuTLFnqs2ArvExMsjAhT3eUGXmFyrDVRV9qdqpDBP76NQMFzBHcM8m4PgXxp7ZrdJtEcY4i12UELofnW",
  "key24": "5Hi6iDS3FPqxXhSKPhHUnu5KBvmTd3ybbdoA3qCEYSLAV1uGYzDTTopCUvj6dLGnnFGse6dQhtkyZHZE2R3ABCp2",
  "key25": "3BjdMUXDsr1oJEcs9AaCaUKzfHB5A4pqwauy12ogZUbJPjC4FCEDdfq46C8pVWuDzf7j43Uu8TQsktwfkbXwNheQ",
  "key26": "3BDYPGrghu5VG2eMEWW6HMmQoPf627NKsajrQy3MjAnVQCyVxWRDpApAbo9KEXHn44J3C14qr49FZVbfShoZPV2d",
  "key27": "3ArN7CTJjDdZRThgbRureaqdJvYZehk4dph6Da2yP3L3nHkUFKpKdsBqvpwGNDxWuHW2oc1RSRrVF8CU97E6vbCw",
  "key28": "4X9FKj2pie4mhaBNs6sqdrvVLdAgq7zQDhmcwK1ycq7aPNWKcoKH5bA9yThnxPLCVFDCdg2JQbs4xp4LB2NjBAwr",
  "key29": "4UVyCbLrmeFAbVEumaebte8mmYdXtrTLQMp58rL6GGgetz3Ha1Uzmn7864YRceNVYe1TqEfWPVwUvBD1dAwvYdUi"
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
