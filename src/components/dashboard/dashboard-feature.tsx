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
    "2QVri9fzunYFQgFtFK5sc9QHq7YDBzYyYQN6Y5tAkcmSCAEGvrery69Rrx3osLVxUHPZ5ir1YyMd7VLETPUfrKSU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57H1gGmShu1GtATSprnEDz8FCpxqQA58zHQ4bvtqhiYJmXZSEGd36m4F6EUMfiNJrNDGbnZaAw6nZuv8XVtFFivn",
  "key1": "3ktrxAQHbMFizB8gwGys4KdcjJhzRxtCWAPWcWBwDuVvCNjLReqpwvxZMRd3fucks2Yku4XfocUNmgw7LkTJEUMJ",
  "key2": "34mahnKWBCtsh9VjqrtYGwXxGjDFNV7mqJ3V9dmniYByXJUhmvS87SGmubUcjCRZ4euzBWVU7jADivDdqs9CZwdK",
  "key3": "3pf8ry1r4aKYwwgovXVb9K1sEXkCv8aytara45S8NM9NusPUoupMXhSMsLej5Ly7W3G5kAvZFML7MSdGAm9oFCB8",
  "key4": "3ksbky4yFeKvvCykzFcnJ2fGJrpK4hbEtCEv8KBE8nNFwXwLuvwXYNLr9nDxJDsVFzRJTiguccvmCCNBuiiuPzHz",
  "key5": "TFTzaUyGM2LryhMfrfoq3GNM3fxNV6jqFJFJR2jpcDvM5n5D4Fx9SmihUUcpDhjUGMRpK87sa7xDJmfLsx8QFao",
  "key6": "45ReB6qnSmYFg2yAU4Bt1JVs546bDQbJ57PgKD5GxJUsbkgC479SVWCNgUYLRjoXFQypvVT12o2HAdUrCKAn9DG3",
  "key7": "iEwxpoWRCA6EeCaQL4MVQVrkwq6MC1UwF5sSKwVDXci5wNDdWQWwhFYgrYG56pFZj2WcnGpsTQ9ceisk3xx5QWK",
  "key8": "5GmCxR9ZCxNM5ByC1V9jvYddCHp9f2ocQCXpwrx8DQiQ1zJcerYAVj9zaxb5ws74sp1LGf4kYrqKPiKEFaSkFofY",
  "key9": "3dVjDnvp1zkz9nF9WbEZABnQu2DgDwkF9BW3YKDwPtACukJAQTCaNyjN3NeWUrdCcSRmTxjHKYMBvj3mJqumLYay",
  "key10": "57iZpAHzVqzoxtWUdrg6BhKRWjywqv8WbATg2MkozAmQX7UjrDvNrdnhYrYpyPNHeEexHkrefTwucJAY1ro466zD",
  "key11": "3ZRmL8Qayjcwb6i78P9DLpodpeKwX4R2VELB2e2yJNnwW7ZL9wtG3JMKfP2nv1KyZUQex1ND1bpoCQ3iTPxb7Rae",
  "key12": "L4uJo6xUg1o4f7QnoRHa16CmFXWfm6iK5xQSSzKjfZrS8eqJCMRTXEJQgbd6vDVx8yq7ytLBmN2u8LD6jasjDH7",
  "key13": "5oFk9UdSp2YhP6xHnHYpqSsHFFUem2zKVTEgBooFbDzTZRjBqSGhti7tey3JPaPFGsULmiheeLCwMrAo1KmD4dsU",
  "key14": "NmKoHpWQqyiCuubiBhbTrfXWyWaaAVPzB2kEUHcXmBcJFEFToDtPz8EJKYtoEBT9AGeoXn1AGa99nFgsU9qxyxz",
  "key15": "3t63u4YbEnFbLqxPQVJ99ibfEy4LjmvSp2HyWAEz2J8ig9VNp1id7E3EChDS12Wvp6HtiiL55bF8ZjdLeRDvqmKu",
  "key16": "28aBiCS5iRx4TqHCJu3jpgGmysLrS9FdA1tEdVsXxHET2Lb1bZB1gq4cWg21UBkQfzfJZzriRo7boHsd1A4QF8Av",
  "key17": "Q1YFhTv67hX69jNzTveZqcyPmqvdYjg56zyVp8FzW7AoU3ZQbNE6WDf9jVbJ2LjQ6aFLqc5T7NbcquDuXNvjR7r",
  "key18": "4ZgPDLVMAr5or5DRSb8tpz3tnmMcR1CYRjMrkox4X2PRwup6PUQovoRuetzqjUuWqUvUhwutz5w5kyYmLhWmjCPY",
  "key19": "3a5Jn5tY1K3P3uqvT5u8KZnZs74PcGxpg2gG9ZA7XZhWxYyf5EtZQqnf2LNa2r8a34VxqS8czJvvq76eBHVfq5NW",
  "key20": "3d3PGHxPyiGMFo22acKHdDeUcm77PSKcsThwuWZm889KSjb1vB1o7Y1EceaNbQEfEAwU8xYhFnWCus9hiJBvJXmS",
  "key21": "4fuXmKateyj1kvPtzBdh97oEJqMjQ7HF6FCjaY2QpGPhzx5Abr18L9rjbP5CZWHoMWM9nxfZcdRMCf8bGHqC9pGi",
  "key22": "5P7Tr4QPsJDJkhaSb61FUfuWLNPWRNqAp9n6K4eGFQ2sUUcvaoVyYgvpQAx31BM3MJZpbsUEJeAbR5jmCtEsRikH",
  "key23": "24bpkn7ZTkDQTsc14LW4q7zCZvpUvL9QsJ8pavYm4WETbShaY2KK9thz4Rwkr8t6baoqVug9jYC1EnsGWrAfeHKi",
  "key24": "3wBErq3X6a3XQ343cSKhHCVAE6qJTEmEhendgPaPAETgKFA5hqvN3kauENw1wuwdSJ9cFJDu6XvWDudhKg2GKhg9",
  "key25": "EzwmaWQW4xnKUa3NjnHKAi5vSW1Sh1WgiDTcyYPCUz3imkELaqrMtWjcJbTeNej3uRX9tLDzK1iCy9DpJJZBrWs",
  "key26": "5SrTxm1tZadubNswwSV9PsnPkbv7VH5MvBnBV13W2R1uWVJKPyf95CeLmJTcosKieD5Syds7R5mt3iHvpYYJH3Gt",
  "key27": "5V6hu77nMFMEni4ycYKz5TfY5v6Zw1XNX4k5E2MHTYNM8F6mdPi1Z5JParxrj3V92WBaok2qMEDZeboZtEWBTsmF",
  "key28": "5vWJeEudQ5AxYGzNw4PzBmiiQ5T6tZEXTR6oHmxk69F4U2vGTBBmV9RXMkueoMrNpPhkseDa2FYL9ycLZvbxQL6r",
  "key29": "4yeaHd5d2kFd7B3iw38kxrBh3LsCAFwCdGEmni21189jhMvEisXLi2sSDdqEFhhqoWd3jAFcPCN9EPQnSMXt99pt",
  "key30": "3NhbPcEdEGBY4AJJq8fiMiPvWHRG2Q6ST2YZ7yzjzgtpGvVyjP66aiEdppW1xey6mraXYFSij52vySgiZPxABG6E",
  "key31": "2RojALAEL2DrQzqJLsnJWkYrtBvMoYz8q8MdHFEuXT4k4CHrzrYj5h6EWYDU43ax7f1ovw5dwPPYHvejhFxkkCQG",
  "key32": "GqXk4E4Br5Gx1ogWHAds2zzGkVMJKL5nQAb2jhMNnfjkDaEkFjGHxFDGSipWomyhS9AqB1yzZGeXHA4kZGmvjmb",
  "key33": "3U9iJBSqhwmKvEvrrBsjx9e3Cmajdk75n5asAP118xmeTc85XYa5gXiabxY6sJaoVobgdMVZz7aPvPTgQHRu2VR1",
  "key34": "4JjqbsPovysZhr6nV37ATfszR2SWQVBow79adTgN3A75THiyXrwEhBdedMt8CskitfaFCZNCyed2BwqRqNFHLbxe"
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
