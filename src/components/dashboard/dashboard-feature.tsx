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
    "4gJfj6YcRgfrwi9BXb1hTeYhEpNVadLdqgTgHyvUgFizyZRA9KnEjBsrFtFTYKotoaX2KJkyB92aHG4NwSiDgPwt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kcDvjYUuY7gwvD6E7nymWsuANK24RHByPfhpyVkFAZ4ycSpWQVRSL4WBhmCJ5opLoZJ3Q4wa64G759fnbyi3c5v",
  "key1": "4gj7oZXe1hNJ3UxHnkcHNNmN9srbVGsGiNB595REukMQEuew2zJm2DLsu6A26QGtzvPviwyq4zkiyLG8PpNDhQxb",
  "key2": "pVFhSiF3MEWEapxD76oAS6YYH1rwRumUzxR4s9wHktbjVmt7ZYw1czX7T6fcaeU241MDVPF8Q2QJTuPpmRfQGtR",
  "key3": "5G6FY43ij9qerwEt4o1prGxqLJur99Z59WXJ71E46v6d4YCV8wPgt94uXWszhCN5vPXZo2WVLemwMXJtGMdaVbu3",
  "key4": "5nkRvZtzB9FDA89Nd2H9srxsDZj4zboxNsaQUCFzVvyGM2VcfHPLaV6YKTwBh7SU7HvUSJz4hNw1HCxJKZv4hBJY",
  "key5": "3ENSyAZSLio3wQP754YXrUCPcC5yUBuaSDURzDEu22bsepsBvRTaFyEZzGp18ppW3VL4XiJyCuvUp3TASvBVTGNW",
  "key6": "4Lvzsz9RBbmh8y18UDHSXQWqJay9SpksgQdLfppQVG8Y2e1nVmzQfK9h5NtTSgYkG8kBt1h27pgWPqdqhhQqK7Jn",
  "key7": "3DNSa6KaVmxqSA5TDiaEXSYdSYXgsY6T1cN9UWs1SbFncz3Neix6RB1UeWrMG8MGXPDuzxDyX4KZ76VdYaYhmaKY",
  "key8": "3VKS1NhknZ89j8qJRVxrAocCQLD9sntp9VcjYM3fbfk8Hv6932ySGoUoBnZF5wexhTUeRN9fGBegga1wdomx9EzS",
  "key9": "NzphGRBoX1sLLg1wGomYyBw23eiRKXh5EJBWS5izs9pcv7w6ojrBrist6pH8EiXBb4DUpXDR48VZfA7yMC9uxLe",
  "key10": "4h7F9SmCMyXN2f7Kmdv4FHGraoVmieHS1BkvK3sTgCvC5SoWNQp29gQGQpJDojsrJhwXU3WZxS8mAWkiLEMSmuCS",
  "key11": "7hnWWPLBkRh2UJAe896ffaWr2iP9E1kGzkUoZJ9jJiGHeR5FfkbH4e5uUxyG7seYPJxcdxNpr7hHiRQAQoc7naQ",
  "key12": "2BWoJrUc1hbbiWS6nYm1RWqRytHVfJcsedLRf6bfpzoaMmwkexq5GMtfp2GF2DDcZEWZ4ouzJkCTyAEUvYU5CbAw",
  "key13": "25NgpS7qRJpnogbP9auFwoLDGjSrVSzLKqmgeC3LUhfvrBoxfZYw7S1Jgm8UxL2xeWAJuhbbWp33BXQWhsDgobEE",
  "key14": "2EDgcN2LdDTUnAhSqnzJyduXNNJN5Qbs1xTrjv7owELNSWiesheQwrWrLuG19djEZoH8QU4ovwxDcJCWUQx1TnVv",
  "key15": "5c1QjMcabGm3CcSUPcCthLwNrWXtwjLHtLFCYXyLWVK4r3jfvtR2NVWYfCn1pbqJFEBTs1FpZJgvqA4kAKpiehXx",
  "key16": "4juWCVA4AdCmAgdWpidku8BXXhRkcCYXRLjP4F81ndXK9nBtCj8W2nefYrYWp5G7WcKAoUYyqzX42EHefE9YnmnA",
  "key17": "7L1uz9ueR3A7oXfsB6uqcJZ7ggupW6JsgrCNm87XZUg9M3LJxQXaH7kEuNxS999wJnTW9byN4k9vNStXsPuy5zm",
  "key18": "3AwzbGgg2DAeQmQciiT8UMhkxemUbSR4aGVvj9DddJArAUT6uV48VuTQBNwARo11wxj9LoB45PcJbJx4UF2pMXN3",
  "key19": "4MMYcSyBS2E4BZveFbwr6cRY8Rt7m6gbzK95sYYQnd1oQDA4jGggNTNScEXFNjBvbd1apkaGUevBLwMvin2331Mb",
  "key20": "3epMNcV2F3y8YcapDDozDqHS2zQVALbk4LVMx8AV6P7fky9fXrptocXHiavNu9nCZmqsEjVE8AABuui4C3uxMnGC",
  "key21": "5enCgaeAXbQ9wf1bEAqGpq5RXLjTDhbYYKC4SRV9hfrYP9WLyW7nGS7TUxFKFxQHy7GWA7zCLWrosTk7ukBAGduz",
  "key22": "rd7mLikRdyamgMDjCqMokze4URZ8wSJYt8aMB9nZeNDizv9YgFTc1TEeNR7M1QZUy9t6TaNPM1VkcefmhSh9zV2",
  "key23": "4tfkHwV5wKxCQ1Y3EYKxxS2WQP6WSrzbPcgxwP5FBKmbqUma8Aso4BhCoC4jzxsW16iH9umfcQCqWfgFvb7nDAZL",
  "key24": "2AJ9FybnYzd2caXScRAEwGmnA1twXXhaHDjy83ntB164NK47FGL28KpK2fJTSsq2AGA1QUue7znyPNfB5VSDq5UR",
  "key25": "5DeoWAhswW1zBDzxBE9ysdy2YYummU34mv7GUvbvJNiyfLogEugdwzuRwEj5gTmAA82MLWGJG4F8oNtiizFtEvVz",
  "key26": "3N2y17RDqhRce74nt68ZZC5mzQko4J2rJu5KJVxJ3NNTqrSbG3Z2mf9HaiGM9NZLmqCiUqXfdXPS9buKRtc3VLHW",
  "key27": "3ryhMgD9TqMNv7Ewvg1R9fSt6WwvcgxpLJuopnBuxm97u9iY6bubWF1rGTrLgJuXgPUGpmeX1fwEMyvd9nPFBXFF",
  "key28": "2vSEjT8Xr7mB7EaW4yxJh58gCoFAwDWAZeVeTy2HyeHwBRxcbcLKKTc5MQVzDd1bafqceBSsxZxiedp7cRt92G5p",
  "key29": "47WR6P7TX8Njh2wnU5q67XJrjLKtR2pjQsJAvWhSAj2xcWZKmJ5MJJmTvYMCJFHTY1NCLYbYHGGMqfbuSbNUzLFJ",
  "key30": "3BWrnj1TmHNdNzbwdmWRwf9FjxiSbzvnBp3UMahEfpphhbGsdojVRDwsyFE9rzT6DBV5R8XbU6858sQJrFw68cDj"
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
