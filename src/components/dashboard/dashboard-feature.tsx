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
    "5PMY6sWjXYZT4qDpJsWGzAWimpSGWhwtJs8ZDJuskUCjt7eEREAx36WQtVSbP4wEssQTDySf5NuVJDpQm6uaPwrg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AHhKD4jtTxM8m4XaSe9h4WXE4v7CJhj5HoZAiU6KM7NLELo4aQYPan2FFGE3LnZtKijeowXCpCKvDxLQJ11Lg5F",
  "key1": "52EWmMU1zu8E7emAnCfX6wXYRS8n93ddyUkHCDnpqKxHBVK5v8MGvtdi9erD9gtFg9yM5eStn8xNgqAn9iM9NmjP",
  "key2": "VL2dpTiN3tj7LkmodzYip44toPz5YChcKPW2vMYq6UzUo13t9BucMjzTrcxKBn5rQo6VqzySEEerywKNgkxMbmQ",
  "key3": "4YgxssG8DteXowRYKPdoV1MywQaCRwz2TWwLEVWpbzo591RhNLmbZ2KVPsaUqVi8NTZUGA5vJ67RoqdTwt2HvkFY",
  "key4": "HQaMyofLWtD4KRbDsTkNTvMvu3ys2ySS9uGrfwd4LmmDyUja9iVSx4Fb24b4K5Muv6ovAFRT3fwRj2QfBuxxcqr",
  "key5": "2LpbzkKR4ZnNzwYYERqDEVave33A2gwfWUgAej4VyiAnQFBQG1gSizg5751Nv62wHKiW2Pch1PqCCu8UxYNSsEDA",
  "key6": "2ib3fRNd8w4aa1J2eKwU5XEQmscRwt1eq3Z8U5QavxmwdmR3HUmjcyCHoKUVT8PFrbGG1ZyhtvE4mF7dYr8j5oLc",
  "key7": "5TszihjigWUvGQPSvGYGPYjFNzKRDK7UuFUa2yZygFhZjbS9qmiGVz2RCTA4LeWK2nmUJCFCeKRzvBqAksoE7kP",
  "key8": "2FPmmjXHq2A54E1bzmUH3Fp7YPXfFdnZCMXrcT6M7E5RrDt8556PwpfpbHDbhpUMrMbsCqVK7m4Gz2zwSgMHbsmU",
  "key9": "2Chwnqj6JP5syjtchgAMxnifRgkZRCQW5f49WcCkVRNxwV4wW1WaKAF93ZQdbBL5vFjCXXr8Wd2WR5tUnis8W8PL",
  "key10": "58pb5WmbvxH4W9rXXu5krMrKWEHarLtSj3Vgf9FH1czxhgypJ9wH1QJ7wyXM6XkhKTaoqXEFC7CfEK619cdwYhSY",
  "key11": "XAeCLKsd5trjvNGZMUR99NkkVsBJMWquLWveb89Rg9cWaBvhPVJ7YAPN11SBRfQMKZ71WJjzs1i9SHERHcicjSS",
  "key12": "Pp7N2ZXScVRnZo8XiHC9wSzXevMAetu9vxLK9Pyy7X41av8jxZ4nrMDHJaicofL21dV1SGe4DTwhMNv5RJh8iXn",
  "key13": "jF5ZmCJhfgXepUngxTnQC4NxuesFomKLJTGmX6CVuN5NXhEd7qwGeZtXcwc9mdo6ewmhL89wkRCru2jvKJfJL3f",
  "key14": "5LqDHWbHd2ZD32hvt3Gok6YZF77SjMahV1n9BGDgVWikxWJWAm3UxjC1uu9UJKS2j3KShmX63YCDP3uZ6k7zMQr8",
  "key15": "3LKnFTUkpGrj8Fk1wP3v3d3UEsT7q23hLRo3sGuksPdsqRxPkFVKwVYAxtjc9XxisMfDKQkgF5fcxXqqBWKERyT6",
  "key16": "7CAM586KquEKsJveeFb7nfoDrQ9WG5eayrHauuBFo9Q9BGnR9v7pfBRrB3KG5fevnKwRifuctKnP9iaDjWFfW4W",
  "key17": "3EAkWJHCwoqkf3bRSiLXr4Ke3pkxF8YppgicNYZmpNrrCtnzah6efUZAV8Y4mPJdyPW1CzLBtupvn3PEQehnQKVx",
  "key18": "2bfQsednq1U5W6pEmQM61e16K88zBMezzjVobTCGPDKfYWgCLk2Rvh9wWUbFE6prhTABEfoxvHbq6CAXDDJoK96o",
  "key19": "5sbQsGMJgxLuyBNofKRTvNQXxTBVLYV2EmfdCpXBerfirSnjqGzoFd2jDeaAq7SQZFjtvociQBw88LMmfySNZz9t",
  "key20": "5d1YM3NuWDsPiB7QUfhZe1rvdgzU76yUurLZfW2L2DYsDEDeaoomkTNfbC4ZYVNdUts3AoT1zNeBL5VTunuJs8a9",
  "key21": "5ueGidXmsvvF9fU362C9EEhhFRzmPJz4tXbw2BaX2NuQFzhsm5kNztXuGZUPVdvtd4cjtKWvSw8K1PGFArDLc6Y7",
  "key22": "t9vMNWAeFnyrTJ11UoUZHrCfUGTc62pNm5VYbh6dYMnzfP4r2B3MrpVe7wJB98146c3asjdb6Kx1Lt4Gfx23CQ6",
  "key23": "3WW6T6TBC67LcP25yMRYB5uwB382FdRpkSWj5H5dgTo2Ac5kBZMKT6WWpthFL9d6JcwSsLdemxVSfitEGKVLUnC7",
  "key24": "5crzUy83SdZzjgH1Svuy8xiuKDziMoygw3onDNLLCp5G6wr8525oYDSqgAndGHmhHjT1RrbhD9v7JvL8HbxuzQH1",
  "key25": "2vEbmuAoSmTTn8qqS5vCHhCVVyVzVsJ8M7aw8f83Bw6LcKGAegjcgCFtAsevms2cr9u3LctugrADSfP5UUi5cQZP",
  "key26": "2GDXqMsNa7rX5Wd4VdMdi92KmcxT9zJhJozsmBmWH4wEA8XbRSNwTFDWmbdDA4rVzajNhquqyMi8JRqzpHb2dLBD",
  "key27": "2VHUa8zo9yTDiw5f4PeyQcv7ZmnG9Es4d2syX8Kmtg5M5BtzEse3mGX5jCvZNJv4dtFqUeRuFNehoJVXkQbv1JQ1",
  "key28": "ibwzpYJ4QZmkG3Wmm28rTGr9DrdwbRFcamEmF8St16XWfXvMqDUU8JXxQ6UmeSgRziPDDjHwVnoe8uCYekLNnGb",
  "key29": "vkCo8Tda9C9s9PfDe92rwen78dsFpmAar6PZrioPhQZQaaLK5B2J7AkHhJz7K3grv8MfEEgbFrsanmqdshSZBDg",
  "key30": "34E2F6LWfAvhFcUqxdqriYvC6nbiggWPfL6pBB4LUq7kYzmUnAfCVkFmKiZ7qypMxb4mm48EiMqkEKtKrixTsSPh",
  "key31": "oibrhsCRCGrbc4bw4KYGk1NzEWZuu9mhi2Hpj2i2fcLFbdAHoU6ipH6QmonLcJNYrN6VnxZTFyiqLhcVgEqd1yc",
  "key32": "2ijksV2thHGpzHwEZnyQT9csLZTJeWhJ44ZwdGnDoA7FDoz1hXGR7xA5KzFX9n5ahgfzr8u3mtee16CCebUv7rQs",
  "key33": "2vL4EAPwrk2LuxLfz6aS8WTEE9UkgJhmsb5MWuFD2wbKzqhDWbw8HYdgAPpJ1zqGiMDnDZbZvZbXTh1fGbJuaTGb",
  "key34": "8T4weDam2KcLrAFYVzCHVh7tyK4yiYmyu9fwrMNPZNqqER4vJzakKH7oP7sPvEUP9oKzaNAsdyL1H3SVif2kCdJ",
  "key35": "5csNRerumHZS298N7XF5giY82SCstXS8wxwZcSKf4yUTpz8s5g5hQKDVdxiiPR6tkqhsjZkBPgJ8o7c6FMHVJCSf",
  "key36": "5mXSayaWRmM7pXncToyZDYPSd2g6ddQKwZpLN34bMQEvLDbC2ujckfNuCSCVBAtbWhk6uX2udYMVriSYnypWfpA4",
  "key37": "3ZFiZDE6MfnwQ53br7fvCVvR4UhfvTyAiXS5kBWmgtiFtPWU74W3ftgjLWyhjTwV47T865gwGi1GbXfrjxQVG2eh",
  "key38": "2uRXjJrCGaRfBvsjGEdMZkLGH3LsZehi8QhEQW1wputsgmYcQayTV75FmpDKamWcdczD73HQwC6gW69UFeq8oCcB"
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
