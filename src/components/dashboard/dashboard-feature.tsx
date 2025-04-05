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
    "fhUmcJvyT8Q3kXNmE4MwoCRw1GjFuEF5kzmoFhDwLUbZrxHiujrGtmKeWS7ytw4sjq7Usf34PmZh7jrGx4rCEL4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EAouuW5gvD16SFg7DLLMQwJUn8Q6EYiPfPpMpX66N2QWdZvSfDfJGGHHPmysXtUHm9PNMTgcHNGPG77MRBtoeQA",
  "key1": "3i9N62QfCokUrZpAecsgEwKw8wM9nmHRAXgXaGofAwxJYtPYHMVhQvuTLC5mJRppAPw4Fbc1yzGDP1pevhMudvAe",
  "key2": "4GBzV6nfZn3vd1tEY7eHjssjhfQYP5iNEb6J3CewBU3rJFsVTbrSpQdjo62ECw7V6mgGiN9TDUKZMk9J5MAgycsJ",
  "key3": "3iVvH4uN6iLXyPeuGgoYFg53KjApSLqYiiaHQAp4LyPLxaTU1Z3PXpQn3aL6qRw9gABdLm2wWGfW9nKUtb8k1A38",
  "key4": "3fAko1WHJSmrrNnckMU7b81LXgbjdCsDsTXQ3qeHpGynjAqpbbJ6fSmwpu5FMyoWpcHSRQ356sJbiFnsAAbhnQCh",
  "key5": "d3DPuG934JmLEDKL7WZajPVYWrMDcFZ8fzhU3P5DnwZcEms9HRyKfTPHyjQCoA4R2g9LG5A7t4sM2joRz6KRbK4",
  "key6": "2qMHkmeijn5cM88hHyUpKuLR1dCYdaDXPJ9hsriMqFmsB1ayfc3So7AcyyzTJPBAyFTkBtEJkZVfFke5Sfsb67NM",
  "key7": "28Z8jcPKAW4GTicnLKgc9LgPF2FbSQehJUu9KdBqsiS4RUTDsGE1cYRYenRoqevfYTUqVc597hngPAAwDjaY7uAh",
  "key8": "29LSMknXEogwtwN3tguLEdAvK4GGTKQYwUtDe7TuAeWQT5iN8f4UuSwwWhKsp8SWGwSyrF8b4UhhfVie2xpP8q5L",
  "key9": "4K6XrEdmjubpg5SqqwGcEVJSRwz7bww1WK8PoW4R4tRVdrKbAfTXj8NbKUv1MwEXzXrzb7XfjmxYk3rrT7p8c51n",
  "key10": "wuEMhHues5dgmqt9qXY4X36QcDaCkotAGrGs6vv3jF1PJMSEXV7YpxxtggQtANEbM2nqHNRQoaKHcSmgqGL626x",
  "key11": "2WSYPgihp98tH3WuwhxiynZNpx9QrdMNoEaeh7WiXPxYFtV6aLP7ZLmTkjZaWRBWjDqxT7UTm3jfeoTatCd4B35p",
  "key12": "2BUKf4a7GRUgxVfySqVm3r48x3mvFepthyGx6Vp11JA91WUh9KoEg1sB7hF4fEw87CiidVMXJSq8LDM4tDpoxfU5",
  "key13": "2Vfu9EuSEZQ4Gd2NL1vhCW9drMj5FJFurWrDrwrHYCMeZfLKD1VTDbdDKgVv2ikXKLBpqwwo2TmQksbgQNbKsU3C",
  "key14": "5ggDyXiTPTjdB9fnn9khmTTd5sSyXxGrejDbwXmevCfq1YFRN1PAxF7B7XSNkkq7YgV2LqYKU73PibwWtq6bxbwc",
  "key15": "3JNEeanoXKuhCRZYHk7DDj2zZMQxwf9vY22v9rGy5GckWJoX3gnQcCK47qrd17GVRcuqFgr7Junk2L9Qny1nowUz",
  "key16": "5xu7Q8ViHjyVHCREkq8179VruNmQtsft7Q5UUTM6vrC8i5hTs4voJyr9NjGJ5HiSBrwrq5iZ5b2haH5XBopajbjq",
  "key17": "2kuvBCEdaeWNyBZJKdFjwhV9dyTgu6wkoepG2qtrw4JugkX314DdVU2Rjs2uc7sa2p9Te3hWxd9TtvGTWhJMisXV",
  "key18": "FDNRNvHpRLFBnrZ6LhwYo5Yv9YTpmeLmAkvrvmEfMGzo6gfLCGqG3u245evn4igKzA1gEU9EAxz9GpTJZrwZmEm",
  "key19": "2YCb6yWrfGmA2Zb9wPm8kF5TLuHKteUnTqvPh2TYTs2Bif9fqAZgRinfwAJQvZQgJjqyur7LBP4GRqwfuBB8kjch",
  "key20": "3dkCsyL23qyN7e2uf2TRPyVrbggbJkBNJszBt3zMcjHgk8PnugXfknV6zzH16KKwPuWncHuBKmB9j6kxdy2D99L8",
  "key21": "3VPYG6PSFeYoWyQTjm2ywbj4dhMthppdvvrT2Mf4S7zZLvAyzLFdTeHqzr2JAubNEdZDMT5kSoBmmhGrzZjKqt1Z",
  "key22": "61LkWvr4SxFPah5hqiYsk3q8ffp7J8y93kjwQ3fCMJNTQnRWJgkKoNZGRwSHyPYFSM5Mb73oChAWAnHt8Wj3tXhc",
  "key23": "5miYZeakLijgXuCuYaPr1MJwqr2LfUxb61GCA74nnCuyXFj4UqFd8m6xUtFCFQFppBmoKQSoxGtZ4xMAm4TmWPh2",
  "key24": "wYWcWtCttbKzFrMj1Z6zqyxkhGTGeLK8byigkbEBV6aQr2nyaxGLQp59UpqyuqJdDBaSLBgHsWVmmx127q7uRnP",
  "key25": "66ozRaHvLLz5Y9nHjJ14JdGTPVtk4qEJt9b9GhiwtX8XW5iYaH14RBUh4TENJjCEAF976Z1B3DGmFSWGgavmL6mw",
  "key26": "3jBqswTqky3ASyCC1t17qfTdc3Re3rrH1dfYVP2BK7QyfphM5rq2DABG5HzpkvPiGE4Sk3KCQggfcP9CNHZPJ6Hz",
  "key27": "3HDgNJzjmqJfnGb6oViFKbnsafettZXBhXB2pArbDJM1Cct8R9MpP6Kqir6LdaW8v1E8FYHEVWsMAdJWhxLDKAgF",
  "key28": "41kRDrGHBzN5BjZmPrhM8dE2jbN9KF8Zni4b64f8S2V2sfps71nUpzRu133w7Teyk5MbPDQ261jY1oqQEiD1CTpV",
  "key29": "Vis5fRidMx2yx8qLAP1ZmNxfBXjrghuq2LKLbiuJHCBzvSUrgCnML1rvTWvBf3WF9DFsTpey29Z6QZcJkb5aQEV",
  "key30": "4zeZeiPgVQefywHJkGxU1vCvqLUPWmub3AJWeuwxWrnLHqhUwzgYWV2kBZscddeDtsBJq45dB25GWNQ6P76qTdad",
  "key31": "FsaBjLU3KRZsmV1p5CMdRW2BXPDjnKmLTt3k7MwR6yNYuYaTAtT88wStSDTSrYKVLTVQSTHyfuNSkrqkzYmCZD8",
  "key32": "5yJrugUnfi4nxCLGuC5k4vCp4kxd72yKti5rRLcLkXzVu37wXPRTqz4vELQCYkXD8LowHK57a8jnAVzgGExjcoJE",
  "key33": "5tAcC9MG3792Qie7cJtwVDZRQoQfwmyGDqUfy78NyGSAmCqq6iKdp4M95gEQxPwhE4EhfpMCw7a3T5weXWb4Egm2",
  "key34": "5JcJsJdYtVqp7ypSKGqs49i1T8ju19vULstoNPN6XLwj1P45gb5aEmvYh7LTvGqFSArhQUVhwmT8bXJvqzfSpYC8",
  "key35": "MFnGZHL52yYEuhyzy9kU7NZui5DYp6rJREqFiVPCMyZzg4tdHqpsrD3FHSMziS9MN2WnY5h7DLyN6zPvvsDdKf5"
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
