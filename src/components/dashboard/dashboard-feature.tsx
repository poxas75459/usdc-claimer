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
    "7kTgqo2jH8P9e3XjAtA8TtqVTHKE4H7GVRhe1TcrX8rQbfRPCBwmqwrdnq4nuxRxaykb36Z8AaG37RjLRsR2gmy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29MwBSebXMVajoKzmiG8JmWUkrqYLPfqov4A4rtp4EZggjWPJBgUCehgLgXRC4MfYMcD6HmmySGzqQ9ruuww4rwk",
  "key1": "3B39LAL9AVi9o41MnqQG8oM9DB8ft3AFHZrWJNy4xx9SdkvaTJCs9CUu6LAozHGr4sX5BUw36iXj5waByQRLvgFe",
  "key2": "4RRabyWhzu5LYKajM6mw5GJ3XT4HtNNXXki4Ze4M4hzoC7Sh2T5DC7n3NQPmU12s6EC7uzk8ATmbcjojaoQBQQMT",
  "key3": "2iykKdqst4XkExSbv7wyWWv7oKFRG6cUBL9oY8HZGbmoVS9E5QGNoPmJaBh4dV3rMMhUX4cVWRa1SqVgFDjJexs3",
  "key4": "9mpZJSFqHcYZE6Et6sJ8fe49NPmwaq9JDYD19SKk4JborLdA8nfR9ffwaYp6qsK4USqQxXRkhbg1drzZU6bhMhZ",
  "key5": "35taynP565ythfVi83x69yxMJVZDQWNpxbtF8B7bRWcnztwbPqkcoCv7UqGY3kbGo1imnYUETrHwEFh2t95csVrR",
  "key6": "2PrRE1pfdPa122DbjTJtHEcxq3FKTTbFcbr8cWZhZi6F7somW5Hxb3qcm6r76RpCaDkjGi53ML1fcBR71Hp3ni3W",
  "key7": "3U5gXyig4idwLUhbvPJkY19NvnQZXQQ6fxibUHxJ5c7SXRgYXZqsCB1zQBbGrPNwUkthz3RJuVA1mKucJjrGAjzo",
  "key8": "368m7Qyshg4KFN2zuFaiReaMLYkGCrGwCpHo1Sz15aNwySZjzwrfJQgBfBaPNpVaq14WNV9vNgcGXjZSpXqe3kC1",
  "key9": "2CQ5a9tBxyiNp2Xbyu23hJve3dnY2ZyRd5AGVtJ5iY6CMKfgb9F6xZQDQWs9du6NDpRq8LnpDLnaBJXM7uTtJN9y",
  "key10": "3d6zsXtaGSkxqWgzMycdsyp1ySfNhQZSwncK4wZN9d5mRjcX8oFDbiB8Gi6zKbMHzGWULqDnmQC3WKjiFZRLLcA9",
  "key11": "vGe3va3imWyJTQDvHvx8vVrT5y26Q8vSe7R33hS7EAm2RCQaSdsur5M1osyvEVNPZjf5zfj6CuoQwQyazaiCRyS",
  "key12": "3uYHUFt6ghok1vcCdfFJBXJ2xMy6HHhaV6kheYPQcuF3577uv5BQUBNTaTU5gFQXmGyai34hZjZQ2QMwktUYXuxq",
  "key13": "3qr16pPQZEtbg9UgApvQGQ13RpvJcmPgMBCKFrNYk4HkvcDavDnGrA3eJrWDuipsHALTuvzeUEyWeuaWRYo592r6",
  "key14": "2B6VgAvrSLzi7j25FhQL4n2gPArtMWMBxY29CUm8WSL1yNiVhgSesmk1vZaYtgkgSks2bvxXGquvEdkC5Lystuux",
  "key15": "3hYU8nkurLqWmnMuR6JCV9GBpScDCRhMJKEP4xSh7MpqMCnzxqpuxXu8AG3cPzC8W48Vc9eBPBmkEjEUG7fakCGV",
  "key16": "3ndaK4VfiD2Fhx9Sb4TkfowonEDvJfQBir1CHSR64P8JkoHaf83na5ThaopeXL5p16hVzXVp1BxtgDwbf9Mo8gXu",
  "key17": "4eFkNXu6RYc3drrwRz8Czuq9bPbHG4rvRW9AsmYK4hoNEDtLk1cXoSDMD7cxXtGDX74jhpDMXS4Z6WgkmaGnmAX6",
  "key18": "2qk8eKYgMRQnQwCxhXwm6QRnk6pxdfhEk3MNwaQwRYSNctG2KYFvSccwr9EsAW6yQDfdvN6ByBwx5FV2Rfp8KF4u",
  "key19": "3vS9BUjv6D6sJdnnodjLYMaRHx5HQ5UgdbghTe5PRvN7gFTRdRFF2DzX2mSm7RipHKXeZKfsBsqKCHw1utigLGxL",
  "key20": "462pZzLM2LHSdHi2Fzg1k7iF1URmC3MSyZ3uKnsygTihsDT7MDcYmQesQDE88E5avfsLwN4cU45ahDwPUDQdpR3j",
  "key21": "stGWRqJq3M1nB5mMqi3tA3pBkTbXDnw6aErZc6fEZQXsPLLb9Upt5L3prduHJHK5Yv2o6rDbHaXwVc6wHV3Miw6",
  "key22": "3G7dWAnFjh929zSVec2wwb7JdR5paDKNJR6BXVWrEgVNDecWefrTzV3M3mFoZLS15UZ5ccVGhQcisPabJMJzGoau",
  "key23": "qbT6G89J9WTr76Y4w9xM4AospGYAm7ufTBaDfbXEbgwqizFyBuDFgq2jJRKGWEV8aoBwnn6e36MB1NyK9pvGGff",
  "key24": "5UpcW61PkVTKyv86voMMHhdcLCTsLFYzSMWfgQRk6cZ6MRtZpk1avFF78pxsmet2X6nWJevxLcpAdytFEKoNGPYb",
  "key25": "5n64L6CNeWuSE3hTosqxhEdr2P4GUQs3iGRFGKTr4Ks6nFzWf4CoyqmhRd37oCVMvL2kQiJkLSswSfcYuxz2L54R",
  "key26": "4A3JjcBmHs6rwZunwr5rRqUQ2seVqtEy4PsXkfZMeAhEutQRiJdS9f56CzkKVTsYg8jiAY2cdKRRggfvdfMrgtT8",
  "key27": "5sGaG23Z3r5jJ1P6KTzhfMRoidDbCmNceZ5xVV6dZNxjAwQYh3du6YFj5za64m2zNhJH1at2b18oBSiEbrxEgreX",
  "key28": "2Q41QNVePA3RZGLBqp33wZjdmfvNn8ZUUvZrWdj9fZ9bapJU2QsHW7MKsarr3RwAw3mfgHz9K1cNYg8BZux8dSyM",
  "key29": "37WxWko3Q3TH23b1x5poQMJTmQrGNHgW4qkNpBAsbrFZNp4Jc6WwNMcFb2aBkPyspmrdyF3ZrGBkorD72tM1mK7k",
  "key30": "4o8yTq1VdrFC2xrS65QKLjVn7st7Kt8inWRkCi4Fev6ypi1WvGAGwWWUFSaMv9K7FiYe7zpRVY1zM6fL5pmaJAHE",
  "key31": "62LsCxn7i7ate5eocRLK4E1v1FEkUgEXLKgz7dBqCxGAQdvP1KUReFnfh6sB6gn3ph2w3LhmwzMKsaD1Rm1ExZN9",
  "key32": "5pt3LQk2wyFaP9M9WfNAvLSoKY9xSMfgc8DmkTH91C3aUReJJbVNgar1VUx2Wq6XMKyiVoaFawJPLQyUTcYQnrnb"
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
