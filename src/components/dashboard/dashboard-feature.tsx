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
    "qZkCBAKAZso57CRyQ7jQPfenAk76JifZ464kyuyYcHxQFdpC6WYEA1PHaPwmNKVTndmTYu48LP9MxWwjswKUT4t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "znPfBCJSVeNdBTQQRgFcGLVAPk6ZQkhqH7HNmALao9bxcfet2o58TqBR4J9JeqzQq2xrw491a647KYtWXyk4o8S",
  "key1": "2CExyxtFZhXZbuwYNTwbmastYb2ERWaPohiPZ8NCS5B1hMS9XdwTBgEoGuERLsfUF5FkE3QpCMWR2in9RCTbYGvL",
  "key2": "5FW6bCsk9BFFRQPL9W3Cz9mmKbUaLkxjanE8BtofZ1dfMavaQYeLZZioo3em6GEkVtHbP9gtNGvruzw31yQQ1gJN",
  "key3": "5rW5r6oq4FyDvYjb4zEeqVbgLH7XNQ7SiqKGJs1h9R4F6NHxKGafinoJusFepzekK6PgriJJ7qBUU7GnBZGFR7wW",
  "key4": "ft9acwsLqaQTkLv1KeNgCk8aAXxMEYMou8MtFFPnKWN3HLLd99WS7Ba1mYMfw5ksneNqYvYA1yB2sQK3HDJ9qsF",
  "key5": "Fvd5SSD2CKA7aoUw5iSuzdBhiYhH2uWT8eUcnLCMS9EkAUKEr56CpT25i955qVECK4MVVcwiDLh6Qry8FdXSu4k",
  "key6": "3dvN9Qb9ucmsttinE8Xjw5gPjGMfqdbCasYgLwTa58nGzAPxWs9jgcjq7XqvWkCvfBdQcKynDpm5TWJ1qGowwUGp",
  "key7": "LAoiFP7aXrQfKaje22YDkf6HUTTC1qWasah7QfDV1p5tcKsZBprQZfeS2NfMpiN8pzSG4zDTm7kpXhN1gEhH6ad",
  "key8": "5K5uM8gACcJWG3uMnhFh5gJ1VFRwx163ZqGka3dGx1VV38VMHGwjcdhQ1Dnren9mJvpPaMEUS5nTTcE332M2J1ke",
  "key9": "4BRVwxA3Uk5CpRiV3vipWXKMwbM3uGvRHwyf6m3skvmqoir1ugq9LXpFh7R6p5WSogTs6W64YxC6bM6o6jKf6tgs",
  "key10": "2pRcCwSVQ3TrtieG5YuymhyLC52R1jaPFNm2Mn5g2kiToz6KXnf4sZeo1Mj9BjmAB9ueX4NGpTe9KQFUM5RKqfp7",
  "key11": "4dDjwaGQbtYE1jrPVHLHLZLuw5AYQ2awVCHguSeUbZqvLcJSLn2BaNmBAmd29B1nzEDYMcouhws2ATyeiNzthXqD",
  "key12": "666kdUERkHPxPp7javKJ7WhPiSxCG7Gkxi7u5eY7E9s8ksbSfG2C8oFj1PLv8cBr1yLy8S3hxx4nVHijLPUKwwZ4",
  "key13": "cAs9m6KPmxdNQah3E9wYejAoKMvPYt6uUBzzFigUZaRBoMZQUWu6AYsLcN57HARqiD8bAECygyNXXhrk4BS8ZzP",
  "key14": "37NjS3r6VcD1Psw6cZZVytPSctd611C1U57vGk9JEAUqnh3RxqM1ykKpzk3XaziGokD1vXkvSWXAcm4L44EtX5GT",
  "key15": "2Umbdget9cvdwQH9KtCyWomECfnpaEGSKafSSv1K1WnxPfG7ez2T7mzPcHGL3a9v6TiyEqoLPuY9JLCEhgCbUTu7",
  "key16": "2KfWnRMhEN2i4G1q4M8aGroisg99fAqGHAdY8yJrQqXAWNWdg94Vj4cEWFEBmEB1nb9JxncL8VKT9GTqkHsFSSQH",
  "key17": "WhTmV3TV3U7SKhVobeo7tgi2z8pPDCYYiJpfit8fRK2XbWk5NMmD4bdYmWtXC3rYLTBqfxTteKs5rkYhZEUSRTQ",
  "key18": "3zWUwSRxZrT1Nd4LBBwY298ndXpUXDnD2TaZdkBbrqejVkrC5fmKTJFnGKV2DnUJQESPgktV6Wzg14MUBYna6utB",
  "key19": "5QRggcM7xfsWJXxFnofD13qn59pZ8uNybCFes87Z3XsBxj8tJkErFhe7UvsSo9qthkuANotRwgwWRjpMKd6Yiowk",
  "key20": "53EmQCu9a3ijarny72amz8yEZAwBAPUsa7rYSFTiJVx6pwPekLmsHUotNyiARHq8LWGqztSNHCNcygS4ExGnXoe4",
  "key21": "5wg3ku7jhryBDrpXZvRk5iqBf2aSjWtMHq4jjzZLDMTjYdFoFBpinJhkLBsRdkHR62JsyHdsjCAZjUbWbZaJeHfr",
  "key22": "5izFzaEq7KeHxMj7qMosQbtQFmfHigk6mbh7mpfEi94jSaUXVWmkfvWTfHhyeXo4ZSAwbJb2oqJ6DBdGRccyHdDh",
  "key23": "2jZwSYZyms7WwLGimTq7GwoMFbcaw61yqP8dUhgcjaVnYxyBFWnGXBiXpMJGEUMm7iPbmMBjtceqDh6YV4XXHRcw",
  "key24": "hn7XRy2pcWfESf6gTGXURt9MFVoXBujRbwaTqDT9sAMAPajhThf5mWap4nAgdk8rseohEiGso4Ta4R4Z2nbJR1N",
  "key25": "NLr573LMLjDFy6VqfU6UCjGfbCjBBtMqRiG4BGeHScV6LqShvS2rnJQAJnnQE4mDdt4NMqv7SjThfP9Y6RZCt7B",
  "key26": "4byvQvTfpw4x8BwXnhHc9vKifQgmpmzDfJ5J9ujs3M1mejRAvDCRrMAZcyfoukyXt7y5s1sSf3z7Cb2jDmc3BkM2",
  "key27": "31JdR5YctV8eeLGomdpFjwEvV9k76qt1tAkfXZoryBhqXE5owsGLJSbwb1FRV77y9XUujHuPNGMP5m8YvwLGMzP4",
  "key28": "21EpveyNpV5XMMKSkHgwDZDUCVPNeY4dSWD89DtnyHyZY4yZMzsPcJ4ejzHTccZDD4cN5T19tAawLbSP6fxk4KXz",
  "key29": "3jadHxMBoYrbivyzfKr6maDEumNDW44seADZPZrGtNNgFFiPwFwHZFQAcjPgEjpxj26hKF5L8PKpYkUJmBy3F5mt",
  "key30": "4UQaCMgS3MLFX2an9g9Zd4bwYyuSh7Z9FKujEDqX4E35edzD9Qa7RBCsLik61MpbM2qKLHpoF3g49RbDCvW5kJtc",
  "key31": "2eXEdMo6Mt9hHfTrNAh34H7iZUKka78JVVUs6BfkmC7ysZ6U3WHTM4afUw2AzfB8yeGmW5hJWtuNLTNc4AEdhZtE",
  "key32": "3gYheiMnDA95wgHknYndTnAgS9xgwGQrz4unKRgP3ePPGoLUcfsmwpEECiGodp3KWZB9PkgzaGrCHBSPWHvDrCjd",
  "key33": "2Y1VJAg5tYHSeP7mKcquNQx3wZTX4QSW3x2fRLQ2RU9frSce9ry7X9x6w7UcHPGsN4KkRJbyqKqxkXrTcGLjoemY"
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
