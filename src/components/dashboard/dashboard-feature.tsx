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
    "5cNY8vHxVP5e2zmmsnrsdNPEXnqCDWEo9Z71MPwRyX5zij22BWcFkPHvrzpnoBWUKWGSBVeDPtLYPRSEGgkXMV9s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3u4ewxTYkjrkkB73pP52siwwg8VLfpt92GQe65SpeFLeq1Qk1qfUcrAvL9GFUJBRuhsQCtwC8KbZC6p9bbsGM2Wz",
  "key1": "2dujwhSuFdWBpoAW8263ZvrphbzsS86franKmaqvMfufvK1wNS8Q8BtpHnmeQUj5KN2Koxdvksfu5p6JPzESZQ25",
  "key2": "2bRi25g6wtFsZ7ZFjwV5BC9ufSL9GBRhnVj3qfutQEzYHfaifrFNVGNX9gNhc7TshV9wqu8VPGuU2yvxtBdiNiAk",
  "key3": "2nV8XHwywwwsTVJFVKNH1p6cNcFt3g4vS1hpdeduzXLjv1F8SavLTLQaPm3KKuhD6RYHxguSwLCinWub8xyZdvVJ",
  "key4": "2FwmG8knxGt8bLUCL5StPXXmJK4WMpcPemCd72vFA7jvRKsuQ4dHeCHhuhBdmCRUqBUX6kq2wLykaPuGTYVbaFKq",
  "key5": "4aMxHc1CGRRsa5aJhVCszfumYUV3KtD6VJwKiZ8YNzxfpB3W4voSMoqpAgQT3JhC7GNCU7irUyPvvnsS7We7T1VK",
  "key6": "5DWq6FKeE6BrkFHPyxTv8MA383jJN3DcDbee6ppHkXEUccd2V4e717VVssTwmmJw3HarrmdEiur9YdPYxKK18h8W",
  "key7": "2iCywHYjycvMKnLPm3b9NVdiaRZ7yTddfqpkiVArtfGULiREcqEXhafj76zECPJyHAWiHeiYhN5sUam24xjEKH8a",
  "key8": "kgy63donbZ85WbHgYWs9LwxqhBGfYML9e8LbEadEHEWFVmMpm7bZjxH4cxvt9RnRcTFd9s8dTnnWw3hFgDk21mH",
  "key9": "5xr26ZPXXhPi2gQ2kDLNxqb1XA5Nsx4hQdQChZnpWkjdnmMHVQjc9KUe6E3uBzkJmSMuykKn1jod6GXkyHcisZ8C",
  "key10": "4L3RwJqDZAaMkSPxFYpzkm5dUfYU6bjbjzHTCJY9opGVAHHaGwfb7cXci5MHqv5bpTz9MmP1fsk38Kn31Cf4M4td",
  "key11": "4qXg2fk46b6hK1jJaG7kqxDt5nUSeyWn3256t9TxYsx4n7x26P7E5QHHmWLMm433v1Q4wCQs6EUsuDMw95DQqags",
  "key12": "29GinE8Di1fsGfwQdQLhkPigTPwmUZvfemkmpLbhHVKGAzYP4fDKBWJTNHzvqXfYCKLxDa8wi9ELpc13Rfkhbwvz",
  "key13": "3wLdhZw39msHj6LiKeVoS9F7PrjuaQutE6bkfJ6xuVZQF1YzCnZ6DM2tj6s1MhM1yT2XycQZoB1v3psRS5fsi7ju",
  "key14": "4JMpcmpAEBcVBzfdfscJti2UxHitte496XHWM2Ky5wdAxWZu3CtgPC1XLyWU9E3xE8TmAtP5Z6TgovetQuzNvw7z",
  "key15": "GzZ3HXXWWTndmDgf6oJzxLBuY3xGoan38oA9qd5gjrqfSZAqaknEiE3KtKtvKoaHRikppvJ6JKYpQpiy1rMGgoP",
  "key16": "3zLij3BiLus6Uu2m7dw3WVHyr9bctQqsKufBp3a123GGDj39n6DNcH5q5KY7HwqmkYijkT8LEqBTNip8ZuBTkLPU",
  "key17": "ouNs6bbECuSu441B3KtuJrhYvrfDpQiPiS7T2Xm8b1KtHaCzsGPoAnuaD8f1Lf8QRyivdXTLt1XY4TX5cyLBfBM",
  "key18": "5PZ3ew7gNPcKpjAWomXfNtA8DKE27mZmgYQV89qs7E7zrdsE55tEQWp8aWJjuukLrtMf2ESKJ8ducfrAKeTsSZ5q",
  "key19": "2RZMY7ntxYprZEsU8eD3ACJ41PFr4o3bpQkmZiuNzZz1qxCHoKoBQGdjS7K5HaZY6yRbH3aeJ7uSCSW6g3P29oYT",
  "key20": "5CnkKgZXAiSvxARnN9FEhdMnuA5X1MP8NusbfKXGgYuvbbgRjq7fSWqALa3mKebcMkdEfevAx9u45Re93b832m2A",
  "key21": "nWuwhGojctLiCjX9wyACN6XQYGE2a4zWJF4nsMe3oUzqz7DqiCVUaVuzs2ANx9eKtKjEMxwaPdb7qgNC7PcJ9xv",
  "key22": "37Daj8PhKpYJyi6S8xsZT1yXvK8eCsQummcZMDz896iWDNrnaKHjgs1tzPNFUKnoPkJDcjzEnGBAwStTXQeHYyFT",
  "key23": "WhWGJTWE5bQ8f78XHtk5BHcNL6ickfmL3ohg3KV1iWJANHsMaePANUDKX7AgeMZamar1UjRhaQKjZosS8xvkuNq",
  "key24": "4bS863z7pvzQGxU1ZshpvzWm7Kg3zZxkr5YdV77h82FEmkyYvRH8bmzu41AeaBZXpzQehsNivgKb4aYMgoMco6zx",
  "key25": "tRvENwJ7s5u7eCPnNdtWYBxWvtoBTWfp5qJ6JHx959PQPvovJFi2JgnGPA4j4zzyDHcr6Z4rf6EfpvnSQwUAyiz",
  "key26": "2QkzJ5e8hty3jh3Jkvv2q9tGMToFqoMX5C5E1cZ6SntyKT62MtKsz9UyEZGfAKUGsoTPLvb8TvfbJ8UUdcwzWkz2",
  "key27": "3FaJGUV9p39YWYWDHTR7PYQR2fnXZSP8DCynxJ11Jo2MiXcDVAFEUT4WK7Kx8Zz51LdDGbpb4Q2BWWBGh7WdRYQc",
  "key28": "3uFyq2ByabJxUVJ7Jv1fe5xMmZ6ezHpSm9BHTZMDBdHVFbsFXVuK8MjBbf4QQDC5UzRMa33A9juGo6pYrsTHcxtP",
  "key29": "eBo1EaoJXGE1RQYio7mPoKv3rghQy1HNvxQsBgJNx8YCLhrofVEJudyFNAvyZ3deUY9qk722DNSLsW4jAvanMTX",
  "key30": "52spjw26pdwEgoqZeCfkoF4BkcKP6Ci5P2pojKqh9X1pS5fijnWz1vgCLXiZ2gg9GZmS7BZi3nnghN8nwdjeTHii",
  "key31": "5PWNuywvjPKyArwTxjbg4NMpcwP1Sqt5VnsAFEuqnJVq1YehUjvyNqXbv5Kfxj9jdKgk2gBXVAMLLJVLddeiqKW7",
  "key32": "31vu2R3gTDh4ksPhzpNqjGVmcthoWmyVigtDs94h9UErx55znHKaC8uiTmoq8iAQ5EANuU7SJkRnKvks8CwAG7Qt",
  "key33": "58mgi9dc34uqHZka8YWjwdhN1XgM6q4wQEtYJ6ckpbL9wpFFSR6ZT7r31wDeCKRKVTDkf93kpGpFvGfLayvXwsD2",
  "key34": "3dPLSwTBEfUFXDbtsmYFCSrFmec1UPPwALqr6BdHttEMjRPWiEWBjPqrJpYaNGHXDnywWENg59jUfrqgDkKUHtQp",
  "key35": "2LWDWyMCZGLxuzDZHoWrT3HFLuFT9jwKjPaS5QcX4MuweLtVFLgZ3uqoE5uzMyNwP5CjRmVVDdB8Wh7QLSd3wxTC",
  "key36": "3wEPb1Qd9SZVy9C7ESfYMmRh8JEFf4hdfAQNrhQjiNth7xNa1buaADNGT7XV39esxV8wYRdLQFmDLHM3JRnRXmjh",
  "key37": "25bqXAxC6ASneQ4y5JG7juqWgQfdjGeYo6oiyWdc1rzpozPkr6NgfKV1HmoTLWuCXn8tXD7nhk2hwm3B7SLNfJNu",
  "key38": "62uvJjH2SzkKTHZRz9ZCfRRmFiPNXPEQfRHPht5zXNALw1bsTy1ZNXCS4f7xQxjvDWoy8tf2jzSFphSibm7h6MTk",
  "key39": "EuGbhs1cLLfr3nCyHzZwRowRnPKWHL7aH4nLUymppxkVn5dVvxxsbZnk513KrSBFPYHGoeoZRLYzEiuWQQTzPrt",
  "key40": "3bdVUmCUMFw7K12nBvYqQndGS4P7pzQ3Ym5k8xPVoR97D8AmBgzWM4fqqravwTntjjH4ii258fgqzXHb9jm4RT7x",
  "key41": "2HAPf8H53rESby4x9Ri8kLR6dmoPvHoZ17TFKsQPrp3dAb3LvRi1pgCuSTUqoP3whRS1PBs7DnAJbAKkC8cSHNAf",
  "key42": "2Pe1yMLzQErcpCjLszry8dHV9uJzYjtcg7umozqiZb6yV1TZWDDk9kePKKpzvntp7EaYHwegvfYr8Dm55NNYrsx5",
  "key43": "5W1VJsyxkdKQiUvVTtebimRa3MWoQxj3zPhRgUEiwBqx7T99Eg3uiV8kpEidQx73b9Htp2U8244RQjZk8H4aEZc4"
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
