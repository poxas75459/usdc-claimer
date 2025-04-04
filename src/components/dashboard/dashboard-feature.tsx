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
    "5FM144qu1SRe6vpeG2Jhp5uMhnrDd8fzSiR3DArZ9FgsQFnmbLbpeCvPiCVczzi8N4RPKRfqoYZA4e3yhkzDATsd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QtpnFzVoGmP6oRSewHqF1YsuovFvDFSHKbJWyNkXoLyjfAbaRKTc2tpsDQhk8gaF2pPn4QTuVn2SXLhw4G3ducX",
  "key1": "4pgWvsxk1QAC6XT7KepMF5SXHRfmfN5cqT3GRWjiMdtg87e6zEXDbxVvQnBCAmWzc3b1pG5qFKnViiiteUaiGmeV",
  "key2": "2Kmen2bftnhw3u5mSTX4LJyuptZTkkqPTqhGbJFWp5hP4D5zacSpcM4Frc5TA2duBSV7pTcWD1GpUz3hxJYZuqnn",
  "key3": "674sUX1cng2gLDAQpuu87V17N33KFRCKr6aYr8N4zuo3n2NATzh27MeuZDxisgKQgRGRmR5aQPCa91fRm3v337YX",
  "key4": "3JfY5oqyPYu2GhnK7CbkSFuMX8PeuaA7Hzp6jXEEakh9L39gqxPDbeSHttyaSzpxFxTmNYe3zv25dKKyaDb8yQqw",
  "key5": "3rzaBA69unHDYUPW16d12PoDaq1oNUyDRRwBRQ9T5jszYzYjWgnVzBZS5VuBfSH2xg6WkgWfty9MLGUMQwxtGktW",
  "key6": "5mALpLsSEu8bo8nJqUDTvkYHFeXcyvbjxeYED5egdv7SpcVWzN9x5xDfZjV3aM92kJiyrzZV8S4UtpY3rfuAqtRo",
  "key7": "R3mQwEb8RhUnAQJJBZfiQyzmntUME1hf44mceyhRFFoyQ99u7F8dEfe1eYd44WQrzQVU6ivJZm7pEng4W9UP3yr",
  "key8": "4fonKw5wRDW5G3sSmiRaQ4CKk7QpxV5Bzp58WXCDbjmuprBL8jLD2DE8kvKE2zQddBqXoM1krmigoknsM6aEZ9mX",
  "key9": "Va2WLWXiCHUn3okRqDDGXdW5Psn9XDZeKA8v9xqVSew89FwQKVWvUMKjDpq3swfeXNhivQHupBRmz7fP8CSaSMm",
  "key10": "3kTrxoPR79oBtfmGcE1MywTzo56cSqEiKSB6JLpVVnDYB8ebLVTg5Qv6K6HzZJn6sZ2RMQ4R4eDzWQ9M26KBsDt",
  "key11": "4uRPxVzxZppobah5MWWhfmTBSoHBLZEMBBJPwwJqvXb8mHgW7fTrXfn49HHMqzUWa9VkzwJmMhyC4ivPRZBsxoai",
  "key12": "5YdURp718meYRGZENwdqdx1gxG1nQZtAve1aKUMmCSveCZ7mTBjXWqh9WEGtavt3gjXgjaWi9bTP7gq65SJfh2Lp",
  "key13": "33YeH1BZVfzVXh3h9XxCUC1hVq7H6YrYTMcwbKWthGndXJ7MgVzz2snGVoszPZzn4rDYKVJvRqMmjURZKJT9r4v4",
  "key14": "d4aCNC14tgKTELDVUxfWo12811gJ82VxJZtqmGVUHhAUBqVCAx5FzHft9hRwWJQzKcpcWS4PDGWKWdNTzisfekM",
  "key15": "2QsCa838HZCJeZQcpbiGfY99tNe9JMN91enZkHZ8P8GrZKyT9SC4MPGXpGH93QvDE9rR9ebF7BSSxhc4udpTX1HU",
  "key16": "6ksTbxu6nynjLu9q1zUYeWKMSQT7FuX5cTdtE4HTa7D5JKP7rZ9TKZSqCQbgSXdjVaFqPnYamiwg9tb3y7NnfBj",
  "key17": "5fdhBNfjR3P4SsQ6kdBG2WRQfUKwRWooFFgVPZZA3JKshBY9GHuX6gNBDxNV8tqSVdw5yvEdRTSFSdNypRq9Av8M",
  "key18": "DFFuPYZq9ce75cvUEHVcN7JU5JLXDxm5j8s7aGcLVTNvnDF6m2VHXiaALV9vufWgY7zVYbJUrwZp7FAMAosSPJ4",
  "key19": "27KK2xbGu6XscPwCZnA2qtcUNVdCE3B6M5jbUVXGW9NetRKmT6rK7bskjs1MSq1ohvNqQGjpdPZWUATPst8kKhC7",
  "key20": "4y2SzT5hYyJVCz8bfuJdT7mJpsbhENpoiT1PxYFZ63nZPgLTWQKc9UpPmPNT37BnjgtemBPMtwRw5hcE39ERSSM",
  "key21": "64DAsLhinhxMeaGSsqDoGM6q3V5PbdJBhsZc4SPLLFMyPzbQjNBEtq1PGac8FoeUBTFymQHoQ1qwWHgPLVrxZuz5",
  "key22": "2mwwf5Lk4LfXGyobZqdgxqRv9bmFzgdzh3zSe9Ci43xvibGpGy5zvBJAp1oEmSgPf7eXdag8zYiiD1WnuL6RTLy8",
  "key23": "2qccsiTFeCkvirMXNRhiwUFed4NMtDwfSpskDLTUjUFAf7Q7gEhWGVw37ALZcMs1V5jneM48deRAPjz67WeiU4nw",
  "key24": "2rqa6d3ttzRVBMQWV6tMXJ8siLnLj3uFqf4WKnpDGR2eCAwTkZj5Nrd4VQCkXPndzAxdturBX4eiQ4wi3wuh9FRW",
  "key25": "3p2uxzWp36zRMYMUKAjaog5qmQ4VgDodxws9QxmJFd5LUXmYn1vu39iLoAXdDdzU57Z3Wdz9dmEpgNpy4ikL2kbf",
  "key26": "4oCSTKvN8G82zHVkzbAy3Bsn7H75aA8fdHtrMWLJA8zSXHwg4Gju6YpmYueiUwRpMRAJXQRG32hY5Z5x9U7kozZh",
  "key27": "2wUJaT51hFMUnbNRFG8ZihWmfrym4yv7EDrR7vWjFGM27nmA8pg3KriYEC8w3quXa57axniw35PJG85k9KoGFiD1",
  "key28": "m1wFamKvjv2yKkwY8WFZBkE32rizSxRbsmx16u3j2L1ThfDNFQCZbqepkc5XjgsvCaLyLSrX3iQe3EeTGLBVAHA",
  "key29": "ymxAYgZJZJDNWYQk2Xp71C4ShZT6DpEsXw9R92MVTG5Nq97q7A1kaDLZ9briYHw6wY7Km915Nsxu19XYNudocrR",
  "key30": "2ADXqQ7M19aXqWkCUaL1RS7B6tXW1mNvB91vryft8RR4GnyjTmjYRSHcSs1NFEaF2SPmLTnWDy69UZUu25r2FczL",
  "key31": "4xtUpATsXduicVdRGXWNABWxAJDrQjyiQUwD9xGcHndWcWP5yw51Xe28RF4ryFeUQZaMGh2wa6sg3271nyWjo7JZ",
  "key32": "3eUjp5tDFXGmXaCxRCfx8w19yN8Mw5vHgvxZEyi1PRBdyQzvTZzC4hCxXHGVepdqTNevmjBrrfs1rRy1QK3aHqM9",
  "key33": "3o3hQ87tn6VrBgUmRH7NJzEfsK6SXujUS1vq1izmPxkpsWfUydECW3feaE6gNoYfbME9GEGWmYNpMGv2NMWn236Z",
  "key34": "T7L18JgCkscWUkpnqQtj1gCKCnKZDh3KiPhvVhgWDP7D4wheScpJ1vmxxhSTVUFSFyw8737mLxKcXXV2X52Bs4V",
  "key35": "eFNE8KkvRK79UfmaYevv9T3ZSTVEsosKnhaNrETpiqs93tiHxeoX84qHNfaruUZzidDCU59jW2917FQvNBnJjLB",
  "key36": "4pWWdjTQqFCJbrLpj1MhAR4mqZrGRd9rAXEPRo64XN5iWfAAJJRXs3SABxHff8u6MeyxLyfdfzDmfnuKn51SVyKw",
  "key37": "vnDvY4wUMzK671nsCFSjyYEHBGCojdpGedqxkoSgFUiT7tKk9ULnbRmPBrUiidrSc8aFjqYmTWSaWYCT1yGsY4U",
  "key38": "5SNhposzPZnDaSNXyrwVLsM28bsfA1eXweXzvrZ1tUUk9rxqgDqGbMCo7UZHemDKJWr23k7228j2ZDVgjPD3mBT6",
  "key39": "5gDJo9eXSdS9eHBFf5GbEdiweHJeitfC4Jt8CKGheyDot62ysGieHQQFchpBYcosWAt5iWxUehQbefHeZDgbeyM5",
  "key40": "62LLsem1SN98TQNQuGv3qeR2uQSSLRpRyWUW6ugxgK4ZtLNsHpvVQ5x2jLwiiuWT3bknNKGWCSZ6uewGF2Go1Knu",
  "key41": "2ctPpEBw4QzzSBis92oSTag7ZLE7wNJqNhcaU7DkGHLSxJDqvg3SMnqHn2xbxZTQ34Fov9g6qw6WuD94wS3Z966Q",
  "key42": "2MBywnGRcKAKaSfnygsWC2r2tZ1WjxWUytWRTd29X9Ldu3LmMh7jwCppEAUiXBCVwE3fooZFxLdjpwmeCvJm4GBa",
  "key43": "4pVoFqLatN8fuBcMfH9jkJvsR9T5VT8VEqqMEekBRuviHoX2RWfR7J5x8Qt6xTz6AideF7y76Add3CY7zo1n4LtZ",
  "key44": "4Mi9D5fYVSM2kZbM9ExNYVjNNyM1C2U1CjCQ85qYH7Tt3p6QuMzzGntkzPs7RLCNarSKpgDfbnEpSYRHAesh6qC9"
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
