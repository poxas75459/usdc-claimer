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
    "4EVoLNxwZdiGuRdqDntVvcbHq9zUndGnvStQ9fYsi7xZ4nDXxBEZ8uihZnbLAdzxUWgHwDxG6rngganDLkCHWXiZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Rbuk8UNkG87GQR2PQX8B9wvAsYGpY2vywixYCiYsnnGwpihpj8Ke15qcFRpcN6fhd1yfiKyM9dPzkCCMrsrV1UL",
  "key1": "5f47jfpwsWq97JvMqhYfPMYa58jNWAr79RJxxCHxvfLz2zn2WpMWoQtEHXjnfwgtgr6TcYfr8gtFiyfeupoMP6kG",
  "key2": "3ySm2f9oj6X3YJHant3cqwtvrmsDf1psV1r4AeyL2Bc7QbYqQhSWzqy7eUa4mgf2qBd6drMHQ8qicYXdfLbx3z1v",
  "key3": "pWy1U8s2kNBEyLhP9ndTznHWngLmnHZJHjEAfokC9bvF287ecYdQk1w7q7mQ1UVkjjjzK7fdtimx6N9giyUoA2X",
  "key4": "2tbiSXfvtaJaPfKk9FcUmyVdq1XhVoa1zRpge8c2szmr2HCRAqijG7tpfXy3SpDLXLzs4KiEf5nfYoknGyNnBdnB",
  "key5": "2A4h3KWXJV9nTTRNcpMqBJMuzDisg9TS3qW8d6uXj9wCHHgBcP4tKxiZMPVavF5nsUs1eBfyJ1rYHB7QW1MHKk7o",
  "key6": "5g7YTSwAMkmAD5e12RcGj32AovJn5As9m1YUEUK7f6H5i9GPR3veV6MQVj7WNYGMeHqEuVBAW1jAYG8AhoUms9sb",
  "key7": "woYPZg3npmjcWS1PRFpguv9aTGMMzm3p3Sb9hvPgfLz8pkSvRSKoAUy3xA64asRYyJ5ximm6UfnHUE2aubuJSLp",
  "key8": "59W45FCpFv5jHPDTAvpHyd4d9pzquoEQssHCgGrtSvjNNWgXEuwppxrjVo6ubgA1bgZZMt7qJHwGfibogRjUsjGz",
  "key9": "2FojUkdP9oi8tMrs6Z1ZpfAMX5sGWb4aNMdPCZbpXnTcPkUaHi8wNurqR4Jbg6s6ozGrP39V1KCrCY6J8UYFS7FK",
  "key10": "5bvN1MManYg6eyQRJqHVR5gTQBGxBcNwZzURC8K13MWMjFoMMUgG7ypceA6UpmcM94YtmMP3K8UzosdWjccV19Kf",
  "key11": "3mQaKnWAeDEN44iZAEQw54MiS3ytXAwH8m95AhuGegBw8H6Kq7vxqpHKh2Uz2DhZEnHUgBS7KcMrw2YNMNrqRdKT",
  "key12": "5PujyTEoKdFXonBKQSiYfXcgPYkjhRbcudHSHJv7bEGZog1ANY6UbPtWBLQGNkn96eZmja6EEmHKemL75izjnJFL",
  "key13": "23zD7qoZLRNkQPSJBTo1uFTehNKHnM7rrYw1rhZXhQ4MXXyLDr1mnswa5WDSZNamheGCD25gcMmiYhgBf3hkxfJM",
  "key14": "7k1aSRZjFbbZyYNPz1p3vA9FxhyijkBnEs2hiwgrDeSqFEX8GakRp3QxBquyPwterZTm9GnaLEFxKeURYAfrZib",
  "key15": "pWjsot8Y5KwVe7ZwCUmWLY9iPJgNQs3iHbQKEc8rYYut1YfeMXkKzm91owxFADpL6CYCJWRApPXHjzKbxpqNwRw",
  "key16": "4hQqAXTotvdveMY2BHr5zFTorx5fX7fD94jHwRmeBw7jLCR5WMLVYzdUZPpLnSa4yTuz9PFHWdmtPhtLs8kyFHYH",
  "key17": "2YerbMaSX1VsajeJc6u4zpMMdR54iDsWu6Sy3bQoKzPFPad1s55eZ13WWC3vhrEFYS2nAwjHxgEc2219d99Hn7qo",
  "key18": "32LBhZmSJMMYmdW5KuoHx6YA8ztjvGKQsWqNt5GPLeEvXEwanAkK6qwqVFqatJLunrib8edazwsik9SBwjPbEqYm",
  "key19": "5qyTn63r8VUMKF3SuMG4KoKvAhjP4Qbz9jvUnM8UWHWGyi8MnfAtuQp7r5eovadaLKfnxKEmvBmHvdj5k8tvD5x5",
  "key20": "3y3Py1qWq9YMiaPWQJyw2SgqDPgkYo3zdt4rLarTU1R9eRwUAReD7xBXWjriMVpdp5FfFyQm3Bp3N5DTe7yLbSBM",
  "key21": "5bHw9DiP2qa4ish2m51Qp7YUU6Sv6a5umbEUC368G1Td8qNKUnLynXHp7wJS2qnWHfo9ETE2Fd4RW124MAyZXjD8",
  "key22": "42SAynwaZPbRK64iTiXyQtQzf3V4E6VAtakUcMBxjyfZU4rqc1DwCGtbhdzztjZJJafJD5Y9givTFxij9FJSfrWN",
  "key23": "24VM9XNJA4tzbUKFxevTrkzRnjWuZGhdCHg3PtimvoiioheUqCCRurh7ShuPC7hLnVzvRzEMqiSRPZLiHhBHGqeE",
  "key24": "3PWyE8GXVhyGfbU8WTb61DK9Z8Pvgkwf4ysnHwnxNG87QR9iHqXnFN9FDVpPXgmLmeNr6ycvaL51QPfL9xr3REAW",
  "key25": "4QsaMuANrMqfKc8vYsmGfE2mY7u6fC52wae99tEfw38UU9jgnpN9T3CEMzayXdHNKWaA5YW9HfKFZjKgdXCzDESx",
  "key26": "4ojdLTJVNn8dzGquJ64NmQnpmPEVEeuEGpNHRdhJhSExmYPD1SSoQW48udbW6eNxf78kM4Vmx8cUVUn6b1PWSLta",
  "key27": "4M98R3z8c6fTANxnwQrYpcRo5kxwEP7k59LmzFo7L6o6RrkzidGJdLgeokuEgE5rGz2chGmGhggHSqPnaQ7h7KC8",
  "key28": "3PvhuaSYbKLhZUw2YvE9rdGYE1Zhef2rWiNzcn4iaMmKkv1AvKkbmak3cv7kxb3bmAdA8Eh3ALxxzqko7DjNNaGL",
  "key29": "4tBTfJAmsrVrHWAroY9twKfPx5HAjTWoVS8h6KKT3PBBJy3hKmPFuQGyszfJgGjNuV8CNV4vbhqkDjWKt6z7GCLs",
  "key30": "2bUhj7ripC7cVQ4BMEvM2rNjx1zLJ8v6epg8Q7kogucXC3tadk2G7JjnH6nEF9qmUwueAFFxQbRuxE37sMsRZqdm"
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
