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
    "4NXPU6QrqBj2FPyU9vTkxW5W5wWtap1HBdArzSyUYdP1NqqWwkeMrYAU4f6eKXombemFAQ1DVyug4EsFxGQbsHXk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MYMW7vqgbBr5hZkGrvaWkrxcuRLniNs7apeudT5v4YmX8tMgnTw4TgKjARq49Reyew87tZDSFP2eghkY1DU3ksc",
  "key1": "5YCaMr34NNHWPWgPGa8Dt91F1WgqktynBC8ynSbUktBYx5rFvi4ZDF39pYYb4jFPDovUVaL2ihM1hwDYpG5RkLNE",
  "key2": "3Qnqvt8V1B1WU9kfe3cs31Ao4rxAVX2pSVJvDU6BfmSsmEyLamZ95842Tpbo3pXXeeG4ousAtKdcxPm8wrozFkhX",
  "key3": "3DRGupjW7wueHN2e1a2bB7EahfZhXACjSo9wGkkJNMbFLkqBoP8uJKbUXKjwXtCP2RvMpoeLsxrqjxhMVtNmgpzA",
  "key4": "64sZyqki6xrD38aC1gtAegmMWqTB97JTRAExPrU7SQBnEAUtLKU6z3eenVSEd8HPBr7xC7SV99ehjpsid5zyEHCc",
  "key5": "2gdLgfVzd2syYtt44bmq4qHA7QMzXhLR42NRAVnKrwpurNbFuZKSZ9afxhMM8iWtvFaes4C9MKGmAPNtRvDjyG5W",
  "key6": "4wveefENcNz96xGjAxyiVWySeaYjsvYqvb6proC7P5oyXj111PSdA7nv7gCtZLoDgMybPzayzMedrL3mqRoxqj9x",
  "key7": "g2DMFuXcaTRbryN73B1hTp9pY9UxdW5Gjp9tmNvaG1NWyJbsnmkNMpXEZzobNqQUxKUag5DA5TWjFnMwQVamWwd",
  "key8": "Pv1KMiQTwf4gPyr6M1dffSLU46Fg3sGiSNTZ4SptQMm1YXmWW4ceqN98szGGDgQwYD9fAzVbZmsgNR8m3FYzCnV",
  "key9": "3deKXYjj3T3Waze7mUxHuxnsTij2Ddx7Ggy6iqYyjeKWA11qW7LkeMTefQ1FwDDSkLQydM2Va5xF7vct3ZZbjCUS",
  "key10": "2JeDWKvBb63Cw9rTdXzFv1EC7oC4irFpVNunyWDc5NGdaFFfXV7Ckz5SRcFJQMKNQtbfBTVoZcvYuPbNNxSTLney",
  "key11": "2jZGztNz5NeNa3KCRh97CRC7hzELuC3bRiARBE6VjYBA4gM6Ke83HD1dAKjHcVQUGqCeHu5UCozbEws7sBPVQNGZ",
  "key12": "41KMeZcP7nhzqGFDJRoyRt1KN9go9y7fnvTsneGTxdyDrdqd61FanJVMWtYz4t4FLyaPo9qhWsfUTU1ePNYkyvBk",
  "key13": "68mvYVNA2mapoeqp6eLwWSCtS2skoYGUdMfvEyfQwJyvkKkdrNhbyQxp4oaK8DHjvpwsKnkPaVErxSBH6YSiuRz",
  "key14": "65okTRyYqQnAg3SaGxNYJ4GiTpy7wNyZs8kxAZvEqtF3AJz2GMsSFDbdeRittH4Z2ys3mW7zaBV5dfhtRSrayouM",
  "key15": "3Bg2Z9o3HKMrqSBcGVRL2KmzdYP59awqXJRxcWGLK4u7W2FJkKw8zmyQGpXamWFU5ajbWUV9Ymcz25NHZogvqAwC",
  "key16": "4PZZvSjuTpBMC3QDfDpP6Chc52tz8C9Y9VQqvFnL1fLeGBVYXrh4UXZqc1eJzzWRRm76QExx9feDyaM9HR5PKAgi",
  "key17": "FmKv6WkX1TT4HEHapJsLnjqLjmFn6FAtLfFnAQspz2YDYeS6NLByX9vYUxKdnrCFx6JYziZBwYA4onPCEs6Uevr",
  "key18": "sK2hufYM5wRSQTgeVtNxV47duqBNLhQpYYbYcXndKgYhts5WTQKh1dVfedAwy4dVy7tAeASq7R4Y5QSi4x5m2qS",
  "key19": "42jFedCNia6ANYgeyQbeWv4X5pNsjgs9Nwv5DTTCC6aiJXRbF6x5XrwJhcRNGdgU4sCwszuXgPsepDDnHu2HfEMo",
  "key20": "2MYnqs8QL4SMf851HdxUNNqTzmGyXT6Ab9yqRNbZCutLLuK4xSWcyZyCUxjh8DRVtw3ZvPUSbpVbaJE44awpCQTJ",
  "key21": "QXW6WAd1L8hUCCjyyZ7q7uWUV1KoeKz3pgoVmR1432TMJRvWaijhDULsEP3PRKrcLZ2H4gr7acKDrVtXLfrmajV",
  "key22": "3v5U2VR72sahwwUPLqBF86pAEN2scdyLHhWCPLzcELS1uL6EgDbGp87bNoLRWw3VHweBSAo21xfKAWMGEXzDHHdH",
  "key23": "4cakBL3mVAgPJJ5VdhWCzEK7jb6FF32BRhrRdg5dbTLGo4TKwTZqqdgDT2gxPLwHfZxMoPbZbJYQ2P6EkmXGCTP9",
  "key24": "4frE3ttM9bU4JaWjnbLMH6RbaTo24FDauiV11pBiiTyKPqek4UrXPbQuMqudL3Pas6CKQrDyftdiQJe1t53PkFkJ",
  "key25": "5PDAjruDBfJLJKUwDbjLiiZzKDiwQiUQNEADZCcZjNyEJRtdxBuPrcQG5o2EEZH6PVeFM1wKgrucFd71999Kpz7E",
  "key26": "2fCb4YiPEpehFF7VDd356tTXcaVVQceVYT1V4kvsUNkJ3yGreHwwqoK9YxS1CqqGzafuMh2pDG8XVd4aYdXXJAK8",
  "key27": "5L1SrDg5V543okx9mZ5gykvwz3d7T18vAEpXZEc1zfw22J6PSnFwytfQyF81UNoREUWTukoe4JVWLFdfYcLZQ5yK",
  "key28": "5wCCMPC7r562xSHk8zY9NwQork4nviSKkKoy2ErxGMrDS5XpFk2TuiCmzv6LzPJ86k6wiaDqrT2xyA3T84BtJjyh",
  "key29": "5yDUJ3sVrEXFdBZWSoopmBMasCfX4NShjAJEeLxWNejTJRcYaEyiRASTacWtXHVHxmnj6YnBDRrfSDHBaZcHgUtM",
  "key30": "4kkFZjaXJb1h1zedU2JiTi5cyS4ujV34WSwXa8zq9HyRYsbtZJe4t2UXcXBfznXuRUT1Bqv21FHrCMe4oUBqvcaK",
  "key31": "4JtMFTkg5NorYwGXkMBFt6S9kUw3a8AXHoChbhoMqKDgRGAmPwp3ryqyPmFHQ5pPTH8bctUsAhoc6g4ZNwjpQbp7",
  "key32": "3GBFbdoxBCtQs2aM9TgmHiuGRa73KX6WZW76ADr7sGny5DzTd6CAnsnfKrB9oyJoxhwmZaiyWPAj2tMkVn6datpP",
  "key33": "2Cuqtj3QpDzwskmRbVVZ7vscWndpumtQR73krCYnLEwKcReUhRTp4DTKBCPX4PwGsJ68ekbhHkBwbAZPPSPWfbtH",
  "key34": "juYZ4u2VcYKRLCyH6oEiArJiM4uPYPxdwUFxGEvdQw6bMR3rv47sAPM4SSGRMRevWjEUeryy7dy1ykTtz1zYWPB",
  "key35": "uB3HJFUkPqJvbgS1kMja9NTXzJi8M8K1itr9kC3afmKP14ReUWeuwRGkXmBHKehKv7trqZ2mzRcHd1b2gSakNK4",
  "key36": "5dFnWaKQBSioGEBWchobjQNoWFaT2xoCCDo3MrBUZsa9SbjZpCNuAM1tUszMGxebvbgicXzhd2hDHu1aDhvd8SgG",
  "key37": "gASqbWbZqVRh1Fm1rsjEwPXGVpdQkSJHhTBwA6vBpaeNqZMpwtgWfdVfVj6EbeJAkXL9NazEMQ3wi9BwetM1LJ6",
  "key38": "4yE7s91Gaq5wsUZirArVmsYB4u5PA35GveB5Ddgp3AswXSbTQufeNn4dMXdH4QNX9Wd1HtrPrtU82peP8RrELYrq",
  "key39": "3zZ621upXB6cpzXN8WXq2nBBaz6Fy2r2m3qoMdWLzXR6i67ju1okTvwHgW2GmaGzP4UgQr7KvSUt6qRrf7gqBBS6"
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
