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
    "2nYSDcWRTFW8VKTi9JZDdoUpycjgRPbA24QbKAv1drxYopzBWATz75sWfi5Cd8Ts3EhWG3iDLReEaZ8HY5BhkWxy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ttCbaJCswwtrE8yM5hCCegHKBMWc5v3feaHR8UmfsU6t3bqZfsLHPLhE3QwnEyFfyQzM25tNdygZicpUqrZowH",
  "key1": "2aXaca6ZbB3cGjc7v2YohFS7LAcuZXT1pmo2uM95SJo19LyjdNnBaWMyYv75aBpW2TmQ5S21zHMXuVTEk1BKubag",
  "key2": "4Qv4U4npXGDdRkyGWhGGZW1eo45q9nGWxvNXLQCjf3QXRweAMvnUsNS2SUHhLpeU19j4YacDLPeHNNmNj1d8WMq4",
  "key3": "5nbVfBEnzdJvmxMz6wPZ8TRZ3eM2e72mQsUgHxL6ap29Z5xkve56QJysnprrNsB7KibzEmQuucZECQ4xaAX3Gzii",
  "key4": "66EZQqpQ77rYxcGNdAgfk5Lgmwk1MhXwpHKrc1Mbff3pMLwbRmjpZsn8RHzhGCKgYPcB3GKqAWFCqvqyMdz9QXy7",
  "key5": "4ByHzibLnFRu8euWaxNav9x6QdyDH8fNbvzaeJT33p1NaE8og1LKFFPVfzsjmtvZ9eeuep8Ym9YLyyKDkNNoxUpb",
  "key6": "4EsWqrkjgSMJiuD8YR4GTCijgtYh7WKzHddVmuLSPkWSv3RNQbMcpwj4mD3vVKHaERc2NLkhYVw9DVevmLqQCa6v",
  "key7": "3mKPdN5EGU3or2qnu1FvJhDEebfHqCNzHckfG8nuEAfbnxv1AZohFjUQpnqDh5L8QotRwp4u4zQTsr8ts2gRwKNq",
  "key8": "4bmCXPqDQBrUPhSWjmo1iFjX2J9gG5fyekEaGo75hVQjLGYLnVbzxSV5bCNREf4bpyjdXGqVRADfWWz3rUFjs9hT",
  "key9": "5QKp6u6c29FkicXAMwmGbQmG95Has4KQwhrs9GvmWY8JGTPHgm4VvbX4YvnGnsgWmMpU1qeewnGwdM9tFmDNAcSV",
  "key10": "4KjtvVj8mAwWAGKbqCdmWBwHMexyTcx1BH8nNthB1hmWUFNf1mrtSw8k7jEzUdcbdRb6krJ42E5VroZ7zCNNePqq",
  "key11": "xM1419tr9qbyo2ocHA1QEqUXEieUtMD3NnQC4unwu7gv14SmRML4Ersmvov3CosiAzci1CuiWdmwUFY7xMEpp9B",
  "key12": "4CLx1uN6XkydfDTBgaZEJ87o8jctfLzFTPfrV6LS28keA1KUsRWMK3TxKvnwAsLScqgg8CmPc89ou1rszzg41qer",
  "key13": "39H4APkeL4MnxCouYRgmAHEB7dHQLEq327CpZE6DNjNHD9DSTvBCUqQB9E4wdPHnkmJJfVjTa9ZPbWMhBC3HjGyH",
  "key14": "5ouhynER6m1xPmRb7HsVs8CL4AoPeZiUNVbaiYyTtCQbXWk1jjqqt4qVKMpCT1LGjuriw7HHGdbLMmx7UpFKAT9A",
  "key15": "1B5xnnEbVXkwf3mfxEnMXJ8YUTedUB2p1LWEHS5XjZNvg68wmj97hbZALz39tcjFQ2aKJqpckhDBpYTA6DiQc3Z",
  "key16": "4xXZagioQKB7Emcfb2QT5RdXvifBEjho9Dvi8trMgpoJDT25E4mEoQY7k6h9tmDKrt2jvMHvXdngxSVJ12recaxB",
  "key17": "5tdd79AfZMsNGUCpgTxaMLB5q1oABXC7wqGyaEp1hYBtXhFSYrbPigV5En1esS4an7MRreDRR3L6Lmd3zCWb8mtk",
  "key18": "55vW4VTrxyj5gkkaM61AdRkdtYSNqo9dEUHMeMhoxhV8pUNFdNZg3jheMqUbs9PHKxoQJZMViZv5DBusafdPv54g",
  "key19": "2MkVTgczx6bH9UEDxngs2TsgJsEQrh4BJvGg3s77yMPGCAuZidU2z6DLVbd1jjuYJVGRJMBmH4wDFz54hRPQ9r33",
  "key20": "5MxXcK9eha8iNQmRuZ2EaR2j1CRhMdYkJpvLHj3tfBLYhrvfb2DacrNtsyD6Wf11VPDitLhzY5j6ZujU4dwnH9qo",
  "key21": "5xM2kmywnnepL722tVFjw6eG3YCDYxV1ATEbuAPjbKHu1eXGS8j9HQ68FxueMRc6jPoXH5jJrKHXzZxXVWzY8WrF",
  "key22": "2HYSasApZymVyUKJdBjnnkmGLR36quPuJBcu7TBpRiStMHwbov1m2gaquv9LyzA4y6qn3dbhksr49EpRo2tkXs6g",
  "key23": "5ybKA5Z824Kvc5hSzSvcfkUzL7vjPReRRiwyC2WqqWmNUoXPqKdidDHMMRJCHBSnfEsDsn42EeX7YfR7ZnoRzTaT",
  "key24": "3QgsXR7KFuTA8QNKutZDwf4mpPdkTVJ41WLKnDJhcQAKoWrfGF2bQ3ijYEY88v4UdoCV332sYYZ8xPPuYMSyfCac",
  "key25": "483ng6P2wAkuVUb7gyBL3g5T5pEXznKjed5vdc3Tq2V7gaDKausdS563QZZS6hqMDcSfzaBfYjSZVB3nFRbpYQwa",
  "key26": "3XPvpbRyaUufUSWZmRWxameikLyjrKtQNeyS9LDYEtNhVrmm5grXAEM7DU26Wb9EDJnCXEErt7NwH448TjLUH6cC",
  "key27": "5VTLNz1sbqKiNcvpExrec3X2aKNWB1dWF6mXv6FGtxaFb7VgrW757n3rKjmofknVPDvTd5BYoPzc7SarvYGTfZWK",
  "key28": "565Qu9ZFNyFyYPJP48wVVPQMZAkoAbu7xxX4kHYM4gsVHiBTVvZP9kgNyvtX2DXZXvqYM2TVjgN4mFoahQSnAzk4",
  "key29": "4at6FPRRhrn7DZeStESPoHKgFM6n8SVeSdzHFez6tVGtdrdKGp873mTkV1KxFH9jzk2tzPgwS9p2Fe2pippSjpuB",
  "key30": "2ZjpfhHXPBcSPFZcK4e9gD9xB8JN7qWG6TG1cY6xRv2UCxHYLUAyx19eVQRVDkeFGjHYE6a5fc2vmssRm1Div4Ro",
  "key31": "3KWrtecPPcTkHDH7xDF29tmfDNzNkcDXvGyfbuCzBrSVRY82vqyntPX7phcWjFFR4UBM7wV5G3tpjnzBK6JQexX9",
  "key32": "3iDEJF7CzvWgm2pFvQrMWhTS5K8kGQWaBWQqmUuczkHP3x6MCHptHKofiiKaSa3Br9NYqzeCXXKi1SwLADXZKz4",
  "key33": "4wuTiXPXS5twk6ccoqVSTF8xreShmCUx9LoZwpMCu4PVwhy776yaos7UBVcumhEgvUbUPUpicXgKVG6n6BaED4hc",
  "key34": "kiSe9uPsdmDed2mgciTUajtt291n7jdwkKQVaGFskyrNH2E2jpLAUNRAN3w9JiamZ79rP8hiGBEhjhGevwSrhr4",
  "key35": "5GuCq4ZprMgZDWgUkNriTSfrqZ3xkeTbXni3bpDTYvTddAWDEeXRMTjLjtbxrmQd38gGMFeytnTqHBYEy4GJeXAR",
  "key36": "5dCVQJgZG1hBEJNJH3hGJnSmDJr7r1JH2o3njQ6Kzu2mJPVrPNXP49USyMRwwo97x8uvfbk231w23B7zWXiNWcxu",
  "key37": "4Nx9FmiufXPwDa1b1LR7rCzBQNCtmjTs577SDjirWyzftNAuSPiaYRuNpuXq6ch2n3rovKNsQZGaYFRKrpXgBx7u",
  "key38": "3AtwrwspRe9BzBaVeshJSHvp941Umc8bT2fn3cTsifWGPvEDTzs68oEwGop21dHyvm2eABzHUBvKjwYZ5sGwWebB",
  "key39": "5ipAQo8VTQzjTJVzkJhYuyPxD4MfQ9fUTR6HRmcHgfK17d7EmeEzmY9AJznYTKCjQjSuhJo3jYpLMZZpZzT9f6mT",
  "key40": "4udvKGc8JHUsk8epsNP5uKE2FPk1C1ynCqSfcHLfU5ERVYoKb5L7aZ4tRpsvz1KG6JSKKzK4YbTrvLa9cKgEgdZe",
  "key41": "5Y1mrmqp6d9zVFiEtauyobD6AVHGEeYPf1Ynmh1sZNtCz3wQTcqVB4qsjRdddjNRygdgonEF6qPBaX5ZSnvWtcHb",
  "key42": "2cxMsCPCCKij6byAHvpo3vC66zVkigDNf3evnf4QJ13yrbB1rXgG2EM8Zc8nHiFXX2DCwvsTuLzZXDWfKnqXnpEx",
  "key43": "vECuJ81JnaNfHmgdt9kQfw1KtWv8vEK9PdXfoyrtwiQQLa7b6fvTPnzefzBFiepRwnEwSMVQsU2aRLXHtLuN87T"
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
