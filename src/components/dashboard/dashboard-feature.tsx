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
    "2yCg88HRS646hNQY2u9hRRE6U6CbT1pmE2TKUaUtsrnJbBEoC1AZenwr6rSQoSaxvHDDZhS2S7cQzo4Qm72FSi3D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ES3hHpix8gFjwnAxSgwSZNBoKtJFHcp2MwksBXXYt5P7tmTFiD6vtBSoNaMqPGb3rGvqBzzPMYrwbHboCyNb3sK",
  "key1": "4WqGVfagaV2F4TdwQgER2hsfJ3GTx1LbW2VAHR39jXQ2HK4Eemrc3zTCqdDJ4RWonGRKHezFBjkQ6jzsJ9Vo4UzK",
  "key2": "2HfoWPudfVG9oEAYLha3uZBPA85iXV4xWxDSPP7gan2AvD91Y5LqbGssiU3Y8zvfMd6vXKHDqHYWvSTPSSGqNpeb",
  "key3": "2DVxapb8CWLe3qk6rUGoN2mZQntu4Hg1gmYatkaMkS49u5vXNms7E6NKca6AND5jmT7HjLrfQm2ev8AhjgVT2mDa",
  "key4": "4F2rNb9Xhb33hVEkTcWsfoFo7bwTiprAW5dDu3nKnGJ426dg6Vkd31kv9SEorPhmXbErRLkKXS44ix6EB9vBd8ns",
  "key5": "86raFuX2ZgDD6dbrwDWGQfLrdg6LqZZkdH2YaaqCZM4RqARaGu1Py7hdAYc3sPERZ2P9AZcbt95QGsPkLRjDvoM",
  "key6": "5cUPvVHdgQLmhG6gzp4XbLvjjHU1CmyF7EaYX8ezww4SyNejntcJxVZtivrAweiMp6EsmaYyUQ6hPSkbDZktHLBx",
  "key7": "3QsfMCmEeXjzZMharcQ4Cbmd61er8czX83B3WKKmDjtB56WzWghuWcrkV27aSC9ys9pLbAKFpUGQY3apac1XiHTD",
  "key8": "2jtSgcWfcpeYtzsMYnPqHstMnBNPqohAUoMJ529ncu2VtsKvVrKPwhCJM2MiVCW8b9u1H93VFQMu1rxNnaf5iWz9",
  "key9": "4JmeLVYSAk961ZbBGSsVTnQsWdeYwzvaUAzkfHjsEENn4k4uQk8aBfShgB9rk6FrdGG868MeviLphzhCkhCHaMS3",
  "key10": "31xEHDi6HAQRXMxkwNaSiph7P478KUxA9SroNsaxvkSgNpT9PLEhamiTpo7jNQKAvFoLZ9HgoqWRn2hZYXYcQL3C",
  "key11": "3ynxuhM2f5fXRJnyK8ohxcmEDzXT7WCXd9k1GfBW6YcBBBJq7FkGVGDTyHLwFMNSevmEVqcC9np8nssYDYiKpBmb",
  "key12": "2xqh92VMzT2udNBsLwvJSqcRbrr3grZjt3wZZvgaJGR6kzV64YyYH6twLi7nKMH53E6xKSre8R21wFEyL7mRBkno",
  "key13": "5ZGaCiLLhmq9SUgpE3rjFZuvCdSfUVphHaiUJtkos97g5M1hFTemb7MwiFZXFifUM5LvYEWbKAmFrqEmwG8rbSMk",
  "key14": "3MemAqo3RkC3xmaTUeg6z8dMzfVgRgdYN5ZxjMW4npQKZkRp7bidsYWSsoBpfygg9D5oLsDsYWG17DQ9GXULVybB",
  "key15": "5k5M5pZdnVxYYCBTR1suVcuRGFGCxRf195rq3johaXbkp9SkVfBuuVhD6WMEXK1LabBx7C3Aqonq4Phm9zQhCAZJ",
  "key16": "2yPJGpLwEXXWJMXFJNeuP2Pm6MiPYhRcTi8T3cPDoNgPdYkD9P3j21WeE9pPEG2UR8ceVjRhNpvF8bX5KcAfMcHx",
  "key17": "3QSe8MpRA2Atpna1dcDDEP3pFHUzdiCWHR6oDAHPipNjGYsAr1mJxqGcWyvz3d1YbAFFf5rnff21LaEuwBnEUsnR",
  "key18": "5fkmbSXgVfvnpUoNvspkn9qUVC3pnAK1MjAsFSGRPLpRbkbAF1oFfZGsDBMAs1F2Hxh4nTHPE6GSaK5famARy61w",
  "key19": "5Hfp6LfsVyMQpDNCY2obfohtpFP4PyckqNJ8xuvJRvwHKAij2Pqo9Q3tXSovK4JwZRqzXsZKE1nQqBFPud53Xnrk",
  "key20": "KygXaSMaqmJE5BRqcmQ7ZFeZNzr5W6cLMJCETj5k6cYYc1V9QgzQKfyCrv1LWR6YtS5PKeiFiW5fF5f5omrRdJN",
  "key21": "2u4WNMdsn1vM76dVvTLo37nV3iAyuccoBta3cD7HiX7RWSdo3g8atoqVFikkv2dccSdong3VV7XDPhwCpZ82wZyR",
  "key22": "2bfbjCq8cVwvTNSsg5g87C2i8sBxquaH6oTs1PSihPXVpEBWx4FfmFaJVeQkYvVvsTwHLMZzckQqpri9jPuTrkUA",
  "key23": "Qq7Am8F3cPnAbYHC6Y2McCHZ5p5j5fCj49uBgvCLgJGqP2WMWiCF76h1s2Xep7jJXWTvKyzJcC1kzUhidWy2LKK",
  "key24": "3T7tt1yDj47ftATAc5oiWvPuosBTTtSHUY7QNRj1yzLrdre11sWpvktVxy5oRPzBniJYqEFsjKgkUTHggyz1LGXM",
  "key25": "3FMuWrVDJH3rxePfrSWhaX1LNoSdpfeWgBnqdDgS6W2juN1yUbd2Mc5mp5cDh2VLWL83dact6761KcSuaVvCbboX",
  "key26": "2kY9B4Au3TFapuCkGN468X4SS67ucG3WXxr9d5hdrBpQQBGa1WB9wnLjPj9LL41tPQR46F5T3Ep1vvMxVsAS7nci",
  "key27": "4x4NxNP2ysoL1MUGmLXD67smj1NTQUJgTsbvehJFNdkTFeXK8x738egL4xgHPbint6Gqzj16QkMTfCyaTf8Xq3K6",
  "key28": "3m8UG5vDccf3H1qDzaxhLvRYXoya16e64GjRuZESKDsBR8noUJfdoEFZ8Y7Mgbb8SjWqogPmYqf8yu4fWTozoo2S",
  "key29": "HAp7QGhWV67RQ795JaeFhm2Y8L4F5Uj3TRgvGX5ovrVsR1uvhWaHmvfxe8TvvEK1gvcZhb5k1mUFfztvJaBgbrb",
  "key30": "4YXxeJqAfKwixd2NSf6nut5zhCHEbPDLaqLT4P86uXXi8UdkDQp5v7HXJcjYSQSMCtb7Kc5817Kcyp61pkdKvFAH",
  "key31": "3BzS7ENy9c6aYPRBVdxXq3czzPq6HqCauZc5nhghf5jyCZQ9nDnCopW7YEFDDtxzJZMduuY64Vdpj6PW4WZFrozo",
  "key32": "tmzacXYsGHuCnKUAwnGR1hmgDhAcGiWntTRZDMicywJR91VKE4WPFo9zFyXhpoRLBKgkNJg6g6gWeGbAv7Rt9p7",
  "key33": "2LJ2jJX5GZnrrbreYaEzaftStv2p9dg4fauR9BazWaEVVX3HZNhhP8MU12v2jKcvuDnvvQBQyxn4WbvgCua1Kp3C",
  "key34": "fg9sCt7p76TJyfRKMZrL1jV1txqnS3A56oqYGveai6981NkWG4YtTLJLxq8gq2AFCESdkCm6GqAi5aJ5XnuNN36"
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
