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
    "5wymCFW1hksc4zzi4vRVwLeu8bMYdn735qRQ7tPn2kqn2nza2ToLsw7dACSeHUWzu6sGdLASPqWP1dknKHJyqQjy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jGaoUxqV5piYV1Kw7Z2RFxjub53ZWwhMe3JEs2WAUNZXeaBExpA619e4cuKS5e4KHoT76ZtChqKpFwb83rK1ofN",
  "key1": "5wAqAQKxRYRzfsr4aUdNdyEioVieupmJ6yfkbD7ExeDciPyuH9YhKEqDEeKtcq5VYKEvRYQybcshVJG6dpa2Gzw7",
  "key2": "2B6R69KJC45NUFoHSYrDjj1tVhRMuGANLWfC7N7sR2cdqn4kbsHs5zYjWXtab1ojWYd1k6RFm2rMDHqDJgXgocgp",
  "key3": "2YKTBqANDJDKR7V4U47oyLti3Vzht3qv9TzMp2NpYdV4S9eYmhBidrgxnNTXKNtoYNQ4M8zNTwnPUv2QvYvY8bai",
  "key4": "5ufJ765LK9VRoeXRXcDY3mtSfbrYWQrfKc7STuQC6kafR1Q3LWVYyhEBZJBUnVJMweJ3wFmhvXBZngsHkwi2xzrg",
  "key5": "217SZXV6f9BuGWCHpnooGWQgqJjqvriDkP7U5QzzAmWb7NK1jDsuZctSjuESM6E24S2WJgnsNi3Z9w1fuKcKKrYD",
  "key6": "4TjG2JRPejxZ1KzmMuetx7iNCCjsXR4KiFNJkMEE7zpXBTwvyge52pfrhPebf5weadqYCNo1R4JSS18pcseB4A3f",
  "key7": "VQ3vsEe7C4fGUsYgMMAAJdCnLEdgm1b1rwLgsvpbCxLsZsVnDegT2wPm92GETmdSGDqueCPoWi9duF5FQqDSqCU",
  "key8": "2zhRDxwnGaGnQp3RMaCGGUq735jmdpMSrB6vkaph9Ko9paHTt2qarCSbVB2VGq4M3vjpQ1mFRnWCeTunhEBs6k1p",
  "key9": "4idox4b2FDGtn7sRD4nQaGrDzwZfNTkRKppq5D1TwVjQUQ1tach7RnxgsG4Sjy2j8LakjH5jsLt3C5A4TWZWqDxh",
  "key10": "2dZYLGXC9DPjwQQoXfdZRq8odgRv9Ypq2j7FoZVnp8Jyi6VkMDpbnzA2boqzQpncvmKWY4GgNtprtcq4SRiB2yfo",
  "key11": "5WbCxgbiRT81ayFDDB4jKGXcwttPuTKyY2GrcKmnzAyjkTpfQ4KiDYMoDxw6U8A7Zh9a4jFjV184SZFRtmEzt4vD",
  "key12": "2eZRGoJH8t7NvvMpuiKjGBwa2dbCDMS5gJXpnUfxSn8ffmF7K8FLRpmfxD6Zv2rnCKnq9wiiA1Nikk6uM5f2qj2w",
  "key13": "36F1iXqRajf5R71tew2E2bgtTvrFvomGN7CKvSJzZYEP8Z5M4z5AxAFKz8JzQwkAz8Zo2X9Ev3C5QSa9M6ftWnnK",
  "key14": "3PpCGpuNpWAxz23TQM1sV2Gcj3mC3cLnok1iVUoUMdFXCHriUX17KjwTdnwn141NsQsRhbjeF5NzjzJKVF2D5wBb",
  "key15": "qwzUbLaAKJ2ZZDV8d22kWvc1ss2fbrrmMuq8b62H1UCVFpHtTzkvsWokoQtiWMr5hrBz8Uks6dfQrq6UrDKgkVa",
  "key16": "Ej8d8zwhYcw5nKcfrfm275viaUuw9iasm6BmPfc7cRdfqxgghvGh3BcyeFQZvR1MyUP5bBABkRDwtf8d5EkzoDg",
  "key17": "2F4yuCgsaWTXL2Pq9sASc3nrVbZW3emPVTKbeGkx6Q3HbDCixoE9JdyHmwJgJLae6SCVgxsvVsKFGq1FUPsPP8aK",
  "key18": "5XQJ5b78WD3yRQ9jWudi8gLgi5ozpwbizf5q37X5VD7F4VTqzbrLYnF5qdFYiy2xrZqsxE8Jz3y4n99DP1eKgE8D",
  "key19": "4daftvq4a4QLJwn2aqaH15LLq9x3dzRpSP51nXPrYt8gCEq38YBaHR8V1rAA4Zi29KRQkvmj1KkxNcF2TCCYFmbZ",
  "key20": "37a3jq7K91nVgEDgG3L7ixQNmRLB2R9X1L91Lw4An5YzcMHL1Sh7kPapsmemiL9cFQtsBvuR5BLPMqU2dMuvQzR",
  "key21": "5iNk96hDnKzTco6vFA2oJBFSCeALVZd1NZudr87orsatftd5SZoHM1WdaLPo8UXDKNJ98mPxCs5M7Yi75KYaZMTE",
  "key22": "5q6PGqBWafhxzAn6XYAtcqKL2u7tg2GUeacyj2kP2GoGmQWpjpXVEMXPebVzSubHS1xTvZU56zMH9cx5rLZQnABr",
  "key23": "45sbdkeJyb1F9hpY1ciGTggmqMz4GanaYtgGAZ3PVT4inYGubdKECb7RAAqRdUWhMgsuEdSWUohceKWCHYvQY36j",
  "key24": "TEyS8xRWKyaJYNeE5JkyApCeJdnHNUTbKZJ15t7c2AxM5h872VEvPjUDq22PjmsVcQwNNXaPfruNcMLKVgwjABp",
  "key25": "4CbPigZG6BErvLwFjgc3rG8rAdDB8Cc4cVRgEo6EiYmsnk89G8G2joQG1B5hnLhbb6jDk21QmTMKsBasR1fhuMiK",
  "key26": "4YbXJSRmqU5mugK7wXPJ5QvU7jNu6CgrFLC7EVhokbsBAdRGyuBEhfvcVs55WT6gDy2pSxRPq2GJa6rCFX9ayJye",
  "key27": "45DvThZ1ZgkEiJDLGPvL6aovL8DJET1dDpNdJRcCNvtu7wEEQmrRurAkPkwXnqdmBceZWFYfhke5pJmxkqRNgkio",
  "key28": "4PY9gDwfePyDTVgtgUSsbhLc1SMswmgbopSGdfGehivJwvTwwS5NKyJzx4swLF8MZboMQ39eHh1PYmAsQ3soRpm4",
  "key29": "5KTRZFNfoDnqn4h6rPCb8fuiTZAZNWzg3QiA8BYpHqFWqFBbLhDGeeHittuuH8fhR5JjoabZRppGKQbE8CupMghd",
  "key30": "4LH742kKPWdZ23kL9y4R31WXtocNrNRDzMYKUqhfj1sRVVTwox4hNU3GnH68fEmcK3t9nKyCUNqXUjQaeKHVUho9",
  "key31": "f8DuSB7EpK4Uq622gyhixugNjXYAH8FqUqBMrE2ao91EeMj7vbReMNdpJk9zCg1ApmMTqFVfnK2B5Yo5woK4JFt",
  "key32": "3u2JLqnBFS3L6Lu43hTejU9ZfM98xcdYLy3GDRyCe6CXRnfCrfSa9yL5xsNsD6uV7pngABq3KNsSkwXi9E37TJ7K",
  "key33": "qSgBnyj15v4Le5a475X7D2rir95Re5GCPEC5CipFWyjgNTAtzwnq4cDiaAndGNbcdasy8DTVz4QrEBwyRr8vSa2",
  "key34": "3ceg7PwmDSFFmzQrSC8TrKqEcEFCxPAdP6CChj6hPuLqp4srUT1RaWXfrGGwV38hVbypFNKLVDcZ1WnJJTFpUQGM",
  "key35": "475CKoZCq9UGZkZSQFkUGH1dXhTZrebXAQdwnZPHFf7UweS6uGxFCYzqvU3pDZPXb7vF68S5Qk7Amyms8cNhD1rE",
  "key36": "55YGYd3MHP8RnfGCvpYknj4Du523GayvgEaEfnGd2v7ktDy4GmhbVQQ6tcKyPomDumTuqQJW8f3M7pJM3L5b9mwt",
  "key37": "uwMSqM2YCwU4VkUfEytV2rkzFZE4UHZvw7kKehiiPnucoqFpLWEDGXWgFpk7kcHsyYGTBuQc55XPCismfYTp3gJ",
  "key38": "oARqxEKebN2XGJDpChCGjW7H4wx1vDDaLVoBApEGZbRULFUseoRCTcnbcWJZgdFX3rXDWUMLsm8yUCqGFu3mg8y",
  "key39": "2PytSTAChaMnZezrzMB72DSChsSGNWiQuGzTnLjQU9WjFJVaiQgmTu6nJvrWxKjHCsuV6DEmoEZ1EqN2mnRJNEDS",
  "key40": "75FyzBySjS3bysYX99U9QT1sB7f3D1AjpHBmEqS6yz5rTiNZJ7B3QuCc9qAgHt7Bp1JKT4HbtsoSm31H1mWbz4h",
  "key41": "5sQ2MJGA5JNhWSt9r1ML9XRB61k18A2Y8mkmgX2vKQMsUT2KHkFiqKskVyFfFWwgYTZBQZwjRRVoksdXNFdxhQ1r",
  "key42": "3fVJxAhJ6KJUxd8NjKvgGigmzm9W6zh32RDYhLEnyswgiDywMpUfRq2ZjRUoNJgeRssE56p7cZwzVgVV1i3VRGDz",
  "key43": "25s93W12sHCMk3nqXMaJoECRAwahmgTrFdaWVTDahunAuwYkWZqkdBktuGRgK3G5MhJC8Fq2N8hdAuiEuFexzkk5",
  "key44": "5AZfMQRu4QihoLKLYw5vsBWenp4Xao5FB47sXT5cWGrLVHvw2bdwNPvZRiHdUGG2bPgsKJuJfAVJnHqGVq6aV2Rf"
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
