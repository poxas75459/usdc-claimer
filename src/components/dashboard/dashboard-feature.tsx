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
    "4rHsHFvL4nnhqkjztvNMrREyp6ZmbeX6L1pRSh3BegrRFdfK5K5xma6vwtUXPkqTDprtn4oVypnGhh9J49QmrkKP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DDGavxRQbchpA41v9tuCkkKc4oKna1NXZDRPPB6pBXUBCprw5AGhWAsFtRPqJvkRW55pn6uuHpyf4KrvLo9ufE3",
  "key1": "x6jS2CELj2jdwYRbXkAZr2imWnL6Q2SfWBWmsRPgqxBAS5BitrYa1GvhTnxHzUWkcuMzJ3knY9xgq1r2NBndqoK",
  "key2": "LTUX1j7WMULVCXkrTZEd4QdfQQg3w1ee567tZALKCb79aK8F85W94BeUZqvHx5R3cb6SHySovvUy6HbMRrSFDQt",
  "key3": "2x1KGVn8PNPoRESYzMQWXy1svPaHuxZktB726koggFBVL1gZrXu2Mfnc1rAHcj7yHQdM1XgbXY7zWKvy18RwQYah",
  "key4": "aQWfN4kwV9ScQWZGdCKCHJ5aLVmxtrY8HDTuzZD3nRMbrZQnbgWUNnMPoVvPSmoJgAzL7fr81M6hqCnkYEa7dkU",
  "key5": "5SpFM2bdjaWpDv6ARXtTVDMWBPXsXHPKi5siKvFwj6164iZBLwF1s2NYkCYQMR5uGzBhBzjXJzrDD4dtzpUWXjMx",
  "key6": "3HNrdaewiNNMC5VNykbq54aGjkDk9b7T9zZQYZZN1oyKL8VUHMuDBydXUEAL5AbK7jos8p1pUWMQy8P6Zrk4HcjD",
  "key7": "31P6YKv77bEBbQtUVSuRTgRZm2Lo11qaUBbgMqciAu7jqk74sAvoWRj95qcp4oZP4RV5DsoS97PyvMdfB72iEbu9",
  "key8": "2EDLgDUYmkfC5kvsq2FY3B4VEoQHTyRu5XARJ6jKhjHztdtVdmVH3hHavAfn9CRyCGyvf6TMopstpEUdE1k27zbc",
  "key9": "5BpoTuwzEVLw7c2ZBHH4WfrenZAxdHcApD5JdVHNci6fbjMWXV8AoxuiKyzZ1HQZnBEYFTpNcTV2kr9Adz2f2wbe",
  "key10": "2VmNL89krzVSX3XJDCkuchbfNh4vA6ss9spmCGRFd4rVNhXiKPGDgHue4CknKckudKzBXHB6Kzjtxki4Nh5PUVjZ",
  "key11": "4DgysHs8VZ1HJEVai2f2NfiBhNiuvYqPTiFxy5WxPAGqhjVg6PayaAsZJjhXadqgZfc2ZZuVakF9RcM1vi6Wf5Tn",
  "key12": "3QToUeMyYV9bp8Cs2jTiA2RRktC9hDKDEhrXVztJpgqDuk9RJADixUnHJdMFLEgaVCJLvNRiYjScLwQEY9ujsQox",
  "key13": "1gfYCpUEWxwoZTa7jYJvZv6WwoBFYeBWqYzJ6FeCuMZhj6te7Py3cdkTxnxrwE9GErMD7hBJhMPTGeTuHVYyQu8",
  "key14": "577N9s7ci6vrrxYPTdUS5RGnSNoaLo8HBNnqasaAF5z8kpkr1ry55J6hpDViSPRnCz4TJz3KPqtSRFxhr87G3rtp",
  "key15": "31133sCa666jCNQ9vA5cYEnvUrhM38UbHxsWTJpwnjhGZMfV16x2Qz3aZWDGG5q2LT8Fu4J24rjjZrnZYb3ENwcs",
  "key16": "29cp8xsGJADhmbZRB1Tk5BziYFbiXmUQV1abLriaf2vqmKM2cwMBUvw2uQr6nWarLeY1GrSgAAvUPjWVoswYATLb",
  "key17": "3QAjfok4dBLD9JM3jKwstfjNx6ynyo6PQCmJ3xhZEiwjkTa51CESQsCLpqWQRJza1hCnnqC16M1daBp9snHjsdBC",
  "key18": "ptiMyEVLvMRZLdLBGKtjzn8FHgiNff6M5UKDMxyNwjyPGrQWQV54zsE2dc4ojWCArNJ7Zj59pcTJBbBmY8Tewdj",
  "key19": "5jaBMFpB6oSVE1kdq8QVQqmDQfsKu4cMky4gmnWVfZPPT4RQW1Y1L5dV3eUvWFJQ6XgpqFTwGRcPAQ52G5FfJYFs",
  "key20": "4G8Nok2kNp1PyZxMhG7PhrAdMNQTsdrCrPCJBubEsUkFigiC4SaW5a3Ax4FqA68rv35BuW79J2k1kWx6nPXcX8Qw",
  "key21": "2f3SW3t3dmU2yQbdpwKAnFgzqZvCcHDedusyxDN469tEiNScibarNBwTpXPQ51DhFTi4raNvaETpMAbqPAbE85Yt",
  "key22": "5bCtSfjWNoQhzqffsXsCt8Dud7WeiCjsbUXUHgxNJfwLphirWgDXoYnZdT1WnbrPXj3kvEgqTHoaGZvwfPcvHURQ",
  "key23": "4qK4du8uCKTdUMUZcLTwaaGZh4YRT1DoWp5ovuQ5EbF1wUJXg8cwuETJ4vgDv7dUhPkdfRqctNERT6GvDYG6ZkYY",
  "key24": "4JfKxKgRcizeGKTJSfU2Y66Pw7n6VBJxvd7k1oMBjvi5GviG2u9oPe6DNQGXwLZLSxZnDfWVyTxM1q81XNVaoy6k",
  "key25": "46ws7t6GmhenckN8u64FmohyLarN95Rxcc5g9k4w1tgxGMgxjeH6qfQYPXv9FyJaWjPoDYSdbRwmRo1QcH8Y469N",
  "key26": "39nJhj5rgCqAQ8eALM45wzFro78Lwzzw8MCmbPLs1uBy2q5QvUgjaeY2fSyqhGf5HjSSCwVAecJt8bqWZhfM3zAC",
  "key27": "svAWdPv8E3nQ9baZuizcMyNNk5Seef2szx4stTXYkXmsrmhc3n8eFjuGVZzGL4TcGSdFqKFEa2uxBKTYdeLyyjN",
  "key28": "tJMb5Suk7TLVCjnzzQkZMA7EXsBYxA6iWaYQGfFZShm2hFoAQSoqfD2pCHRVjscXJ29JTBgJj6XUW1ozVhqEza1",
  "key29": "36YEcqTCTMLqTVefuK9ZA3p7jwzUPtQHMjKqqLtWjPP1Fa2Y9b5fjfKJ2FUVBQbZbCyMgb3YTLL6cnT5ReadpDve",
  "key30": "3Cm4oN8NLfTAfscCPZrk46qCJ8r6b4HcrY5fRDeu19hzHZzR4TEoHqUraBbDrjVoDfyxU4fKTnPVad7tvtRAVLnh",
  "key31": "22HMHY25PM199RWw6N148UtrK62CvfJGjr6Sez6MjuyB5poGKEfN6Ebmea7n3otzY8goQJ6z15c4WD2PN8stcpUP",
  "key32": "5MYAJtd1o1Lbdft5eFrdhuF3TEkyP2kAgCHe91qe33q7fcyHMxW9TC3wCC19gprPXVnKeaoFBup9QPk6VFBwMtCY",
  "key33": "2vspQZLXQDKgRakXDohZEoEDs3bUPCiDiN4mhBmoLNSEcHUTm7pBJJCcwkTZ2JrqL7dDHLpVoyVWwLGT8rnmhSHL",
  "key34": "4vkhrUrtyB5xvykb6JVFjzzNUYHEpSrnECwvsV768EDD1pjuKr5RJzTcDy6DmdutztSeeVV98uL4HXjooEz1Mg4Q",
  "key35": "CC6DrzLJfwcoqYERRXoz7CZW4m7YHtnaGnGBAfHtnxzPG3yxJjYo5e2sVyXJvd147zfqqLK3szQm49piSKvnLKg",
  "key36": "2o72oD9yyC4ojh1anaKAaUAsSEc2Rkwpu4YSzpF9CRPDHov9cQRaTywWXYkr1gSJWJSYh88CdHUq6ytSy9wSUYQk",
  "key37": "ww7UGgAR8ifWx5YJpx4QK9n1FcPApyVWBVi5gsCN6sftC77VMEtAysKEMTQkMu2e1YCUNUe172cYikBBjWfckSM",
  "key38": "2iKQaZVyD3U5jE5saJiC49uZs9W2g6kGXB4ur53M1cE49aEcmKiP8Eb77kRrnttywLUR1mDbJjvqi1qRz74WnkRy",
  "key39": "2s67aLdr38fEHw394Kbu6MJt4Q1SgJDenXQPWL4qtBWUFmQWTAqnBYrntuLQWLxBj7fZ62GQmi1bbFy1vmVCs9oL",
  "key40": "3tFDb6pchoKNTTgLcRYhSnSXpdH4dP9jHz5txSZdqbM6Y8z5FcjvrKbe8CQAt3QLCkqtuYtfGvaJrtTB4mHMiP5d"
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
