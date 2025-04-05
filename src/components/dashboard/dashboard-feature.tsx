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
    "4qAGYBuYoAnAymQWS4THCnxEkj89krp6sAyTYA4hJhf893r9xJEWYZsXcHDnGWrvU8RDRym9X8w2d5aKDBxobuFY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hKPocU7wHWVQffeszs7fZGTraGLwBcpceGhj5EhQD9rhr5aDbq7EAEwkmqDGaYxWzBNG7hib1oFYttLJaikaehY",
  "key1": "7pq25foF4SKnubfvA9oV8MKStYhqAUJCujPQrDLcmTaiVBz6qaH7evKsMVPHq3mZcuHmFTk6woaCgXDvm4P7siJ",
  "key2": "UwAhtM7wuJXmco3taAjMQ5jnNSnyWe773efXBES9UeGaFeXb6YFUxmUe78xZUSccLVvvrxAn6Hc9vEePx3RkU5Y",
  "key3": "5MdvWWYCehYXrKjAUGSgaD3hU7KNUQkLeY5C3upVEt1bsgCwojeSJvJUYgMjZyMsnNpb8kwZg4WNNqiS8xZJQ9i4",
  "key4": "JxcbXtEz7LtFn3ecT24XBWTL5PEqwBAQXeiEY8Xfz1Us9XDjQy6LqUrEjeFtuf6ggp7uQ8UT4nfe8aoJp5YqzmB",
  "key5": "3n4TKYVKF3KwLY4Kzrd76esHNrPFcrD7xFbJH18zgWjo2UQrGvVCVuharQtMFYWJcxPKtyJiNp8kJVFvegjTZMox",
  "key6": "3MAY2QrCTrZ6QkdkH4YkRkHftvDTa2FcxdNBPA2x1uAX9DaG35GxmPxxEdTXFsKoJGDuLW5uYGTkA7CF6ypw48HA",
  "key7": "48ewEWzbaaA8sZEujQszQchZfpsitNJtqaihqV97eETNMapQfh5b4fuUvTi16dBbY3NQ7qY6U2o6CJXBQNFE827J",
  "key8": "2yfd8mupXxHJ9oz3PNGMaGdcwWfEoKViwMCcvbp7jpRxwChBKWYu63XkPM3hXSAkAKUH2zSmSL9N2Z6QTuUpEsgf",
  "key9": "5ZGE4bzFpWoKvwgGhHcgXjxmfqC32beuoMZ9Qq5P2zYmrndh11RVbcU6UoeUMXaHc6gzWpNQWKYgjiucJDBjD4aA",
  "key10": "2p6hBv1BUpnciAfJwaz2Kx2cfrWanocLr9xSwVmRZaHcr6R5CyG6pKJweVBxn6zSX1uxm8H7amiSgCGViL5d62H6",
  "key11": "4NpyKScQY6YPqvqGqhiSA3nPLZRoeDCFAXV8VMi4r1ASQcf9JxWjdYqiD6Do2TjRDdk6Gq5PhdG8qbveBJgqqy3B",
  "key12": "2hiSyWkufNrSkfwctdwsVKf5dVFpmQ4eUiEVpao3DRRBZsGAfRCQJGE89gmBDCDTyPLrXcRPSkxXRZnhHRCrf2kT",
  "key13": "4S7sMwsj4LVCT5j4zT888Vhz5S5qSywKA9SSzuzfFwZR9TP2d75Kb9n2eBRdTuHimidVYEVYLDGDhVjgJNKs1nfQ",
  "key14": "55nmfGHVAerjjuBG6wBiXUz4aUDSSXsMa5urixxzFXCxMi3isz6LzxpaegWAcCmosj5mxthdWC2gMS7U614qAEjc",
  "key15": "5hGBEj6gKuRRU16pMbtQFHRGpLaiF3nhQv9UhtWJGAapCiKsEuj9C4NmD832MVozs5LhkrrLvkokz5YUzM8Mco6T",
  "key16": "5Q3q31cypBNv5nSqfjizybVT5VekqAYqRb4sYHasnW6wgV8syHVPFmbavyxogWVS3YNJyKgvoZa8vhzEMH3K4pGS",
  "key17": "3bgFJZ2JVzQ2RBDFUP5cmNB6nP215HEfLRpbkAhxV1NB4xfvTJ1iwT1w2DNq6zmaeMvRVjbjJvLSgeDnQNvE6w9h",
  "key18": "3QMywaNY46tQB7ZQdNYSck9rU4sGQfot5Tw93PkqYN2XqTc2coad8tx6Ni9iuTZ3nS3UBdtJKMF8EMss1kgeagHu",
  "key19": "43pBxFNrYuinMyexVFftuhDcMHvUGDkJKYGDnRFk372WYyeYB2gk1Toh3jq7N4seLz8hXgx8Py3Gncuk52UADstL",
  "key20": "2bmBP2r4WDtiWvkZ27ga2aQsf1ppxswD7dp9rHx5omwaSo8RS6k5Sivz6kxSEyeYJEBhfjuH9pt6dVefCTuE2FGx",
  "key21": "3WGNmyggPyKrMPpWneXJ39fhagFFZBpf2DHUZGqTY98rfb9smrJ6BYtkzHVjt8xyQCD8QjT7kURKaQ2rydcCWLnH",
  "key22": "67JQxmDpxhQA6UpPUyA48sMs4sfbehLo527NW1nc9bys7B4kZi1GoV5p5W4PLwyN8wM2oQYc1Nm5JveDZUa5TCA9",
  "key23": "4NSThayArJtAaTA7jXuhbDyrd5VZTqMByWMWGYghjKqSUrb9rrcUoYjnWLmd2t9HCpVWBvU9TWgztxQxE2DUnTvg",
  "key24": "5GgdMVKAKdTPPVcNDgLJeQCWScSnC8bJjxc1nrFmh1SMq2JZJMFsH2er6NnYvnvS5Qh9268SD157m7SpaxADWK7j",
  "key25": "pjDCziuWnLs4P2LDDscz2oZEtGccqDT58rkToE5C77GKMZWTt9yL5YGWe8g3snRXKqwq7pTn4eoQVU8Gscx48nn",
  "key26": "3RA9iVKyLfo9z9nR6dk4jjnD8UGQ1JarFPR9ih8PpnFCbWe44rJtyQStAZaPaBL12Ay8XJjKYVqKKFrucpnvfAuA",
  "key27": "4kLri3LAk5ydCpDU1VxS9mUrG9Tn2ibEggVgGcVkMocN2rTMZpvAAbCangLDRoPt9X3a8Lg1FpJUvycyS1SKdDuH",
  "key28": "2BorBjsc2dT2W1GtaXcFjwWUYpy2gUHB3Eb3rBnmeBgtFJ58XtiSf5QNTfoKFG2L14tfop2wxZur55WmyCrrVoZB",
  "key29": "3R8j5NN9vd3tHdLce2vaqfaFYcCADrr9AdJKPruEtwsNWaRQC5qwsHqyeHLx3222x9gHP1nqG7PvqpKTmC1xmYrD",
  "key30": "5ztY4qHb7mx3JNS5UENCBE9fAAazhsfYHkz4M5EUgu8kvqxDqfR62vAEhwHH4NwTzKsw6jN3RAGtYrtZQRTjFzGH",
  "key31": "xSVAHSxnxu234SLYo525U19oYidHvD8DLujx9kmEyvrLgKtB72YqUmycVfnNw4wgPV46xkKBCDrjZLLNEmtQvRQ",
  "key32": "3DHy8MTpyJUpkWwqG7KptK6jub1XrbqQ8ZQj8jvSKDJJLWCzK63DmX2vewHTMGp8scqrnauAyDU4Mss9EVux5xTY",
  "key33": "4J9YtUR2L7P2vfHg7ge2XcMMo17532DY8LxP37Mm9Lv49J9z8dvhjzRe9RcWPrBvCbe1aAayEb7CMz1S2jsbpb2B",
  "key34": "ZUjPjEgykr8J9H1stGmUtoMo7Fh391bioeGsS6WJQNRHRnGoZ1jZZo6RM6k3VJUVjPka7CLy3gUqNBWCEUDfaJP",
  "key35": "671LiRW8JGxMRWNnpn1a9H1qeSpt8PJnqG9q52vK257uPQjWQwze1VrWrr9ryEapsXubnSHJV6S8cThiPb864o1m",
  "key36": "4PNPWYETjamAfZgwKLrjx5V46e7NBC5HKBh9h1uwfrTLXXb5MExwAjeXN3C3UEgjr9BPKK6YTQGatXNMA2jCM4tZ"
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
