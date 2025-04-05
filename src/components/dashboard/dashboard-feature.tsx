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
    "EMmMMys4j6EvPj5ydLEjLQWfQpzpfSnuiNbn3L16apKWvp7TB6GPbgvMVUD5rPL6y6jFinRUtxduZMuYF2eJ8mw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MQZrg7pVEmqki5sMRxYNPLHP2KW113f4e9K9A55ijR4KS9dJfabMQpD58KpiVUN7tDr8abBVnhegyv3QZbB1Mtn",
  "key1": "WSAQsgfpBRTzGFecyiydirhT1aujQNS8ZPu85VPLimUGzSWKr4b9xMHDKWhsxWpTr5svjKJFuu5KteDyATnUnXn",
  "key2": "5LHxLTc7JcR63UGab6jt2aGRfCvxfeH8gVrAJS2xoshJiaCaNQRFxo4ZzSisNjkLC4Rvm1MsL8K5PXt8rG3btBt1",
  "key3": "4Qvz1ApeRxn9RN2HAprb3FaUAXdx9ms5VMDtMGep7yAXNDU3GjhWGcAtXfEpW4m15vDWu2DZWD7zSropaPjUKUbh",
  "key4": "5kKiypKHjH3baWBpVqRwu5ynBMwFxNMy5XJF3RuzuEg6d2JNooMmux31V1pBHDoV3hZctt5R5mngSyvrPprLxkY7",
  "key5": "2gsRhjakp4SQbr1Ez5vb3xWmLcV52wdZtDuoyYFzRjieRJikrwjE6Db4JfZYdzMACmoA9Gvek6rfxaLn9nASdaeC",
  "key6": "4MtKPuYjCG6Kh7sDN6Ez2zF4TVTrDWFgPx9DJL3WaPqLhbRL2EpEkVrVpj35LC11oKoWycmF96o4NicVgQ7dmGoa",
  "key7": "EY1XV9gmbNzVr7uD2ccRb4LphcNRZdbnfw7HHw6aj9LQF7H6omMySMCfD7Hen8mrJaxGDGZ9JoBUR2kTP3RkhwB",
  "key8": "3JjDYs9Kwyf7sCzGaD8eQNiFSYvLmK4zZ8Sce7sz7GXbzY2NMkgay8JjVD3tnwrxGBqqQ9QAcGw5AT6yird4m4ke",
  "key9": "JxWWv8bwJB8aGL2ENF3HD6LC18TLofpW1aTMUJyLQH9EFwcrc6nZs72gCPztgBBCFR8p6EJ7HyU4qKgApwjVVnd",
  "key10": "3eQabFRz3KfPE3ooARVS91miJy3FqbKJveWs4KZRPi1eoKMeyAWohFHg8exg9xmHYq2nxA6f6NcyBiuqfjHXqwDL",
  "key11": "2kcbjiJnbbJuEqu9GEhacUQYV49hM6yAT2LCJYwHwzqFcGS2rbQtAa2DE5FWe9PWhRhbG9XP9CdQC7XdBqfqyt5",
  "key12": "3JyeLehFoSj9Qnh15H16FrasMJYn9YmGvtwsAmotCFBxUQ7MqGPzuzNncJJc2qdCMgyfuxMTyrFJgsdG8sbh3KTt",
  "key13": "5kH117usqcunTH8i4pdQRZZKmBNoiQS5X3YVGBJm1t98dKTcq15L6CeKjN7m1CkpNAjnwbRKRNPNArdXeZYW45ZW",
  "key14": "2RU6Z9uSDxuhB8mb5KMdtAL4WW5ZjQwGjUP7ikwLYtXJLBjZxGbwspUgTvFt1a2SHsELRSK9kJazMxRq97W5GQ4L",
  "key15": "2nPKfkVRQ97qPs7jFzqiQ9qJ3ir5QyoLsqGYYwYWQBjdKRTnTpmT2sFLueCNvXjpC3ic9v9XMe3nQwexLipGxW4n",
  "key16": "2ouxZ6UfVcf635SMPmTBAhFEwQxF2eDwbQaXeb4qLBGcqGiVRRFfGW2s3AS4hHXERxS4dykTgX6CmdkMg3bHdvBZ",
  "key17": "2CctVWBme75ZkMKJPd4TqXHuvSFx5MY8YsMa2wvyaYq4kAVDbpRuCSEUm4RoSYrcNh8pUwaFybYocDKpjvLztnXy",
  "key18": "4E2aUiALsG6otE1yNkmkUDkqKBL9JcHPPyBmKFJjdFTo3NUUfVhgAaE1LzxwvB1m795xwVcbBpf64w8CK9hmjqJg",
  "key19": "8ftW7P2hG4uMfCA1a8DGanys8wrRnvGqTBGCgGhrCgviYmgxJz7vXZqCxBErsoX2t5hqLtkmZwgZtaPHibWVemh",
  "key20": "3z2zrUeZu6BayWpKoxESdvmwfvPdQpoBHw4mVFgs9pcQ1vJYXpVzwj3dw1ec3xsaX822YcksyaWhyseyFapmsS2Q",
  "key21": "23EShF8UCSFkSa922LXD36uTgkdxaU1ezF3f1ryroJPsYyWGiBbrCXeXhV9UUdZV6We3ZN5rZXiUEUnLdtkSRdu8",
  "key22": "61N1GrZJtcu6q4WatKnp7ASzbLJGWR8cjww9y9HJjG3UuZcUzNZChypDeCFaodbQznbhCBY67L9dSrcRmwaSew9h",
  "key23": "3MKcnHWNwf8saD8q4aX1J1ZiPjVdXnRSEQ2yt8nmyheZTXKrSVS74DgP646sc26sFHjcpgjxuMbWFEubXpkxW2Bq",
  "key24": "3LU4qTgv3YzNqh2AbYTkuehUEgvizZWahojfr8h7zmRJbatJdTJMw1A8xTFjyv13nGoCqDK9Y1FCM7dgHbFMNB5j",
  "key25": "zK2vHfn41cXNnRu68Lb5G1GmPxFL1wK33XjAA7v8U4w9RJWdoNf5SKSemhwg2b8P6h3Hv8AP8XnCeGhZ7mJd7iG",
  "key26": "2DyaFRCecfnsWVaS9RKRLQdVBMXmyjU1E6azFKjXE12ZZHSH6ELYbsCi6H6h7V34pT1HrKHNS7YzaXTdzYU8DXxS",
  "key27": "29kMEGmwfWmVNcbZgBN5a2wU7s1c1STWdm4bRZgPT7QNEjXCpbviVUaAkcRdKV5ay9Rdz9dSBNagvHi5VXxR7FF6",
  "key28": "65UoDs9GAsY8myj9JY1Uf89pgHL62rpT9bu2JG9GrRXTVFFRTkhcgQUsuWqpZ6Lv79YbPC6e1Yb9ZB7yEcjPZgHT",
  "key29": "3x2D5fRXCY3WATiKvPsSaWH6vTLG9E47E9muxPr6JjUPyFKoBevUv5HKTtjS2VnvJuBQnHLmsWtNh8VqG1YhVchL",
  "key30": "xrmT9Ekn9qPnFyWDpUVdCJ6mdRPyRQvvGtTkiE8od25kZg1QCqMjuXa4DQm8gZNa8tHPWgxeASzWKLWRP66eLH5",
  "key31": "oiCUytbH6RFb5kZ1PHnoM9MPk3ZQ9m1GVmKiqcnkjc7ox6wNUkCWovULe5n71DG4BM5KkkfksEaqFLYxa843sMh",
  "key32": "5PELSeVy49tTu8dLZMQWpWW6WVFBYMs6Mq7vNhUsdytKReAperb1QZnxkZp7F7gNCmyXAvDjvtdPeZ44nmukmK1P",
  "key33": "2ouKFfM8v4FTzGQXQckfp1uf13CBbgbicEDk4aZww6EbqpaG3Zpg93UibGp9o5nckxb3eTUi2jszdhz9YPaX1EVk",
  "key34": "2fBbgJqX3vzeTsBR3YyLehNdPzjFHoLeicQ5GpUtTGCyieh7JAaBsv9eLUhsUonjCrwSfMZYJsHgjUskDq9v6jty",
  "key35": "3uBuTWWuNq1jGUjmjW4u56iQFtTX7cYNScpzMFZ5ERueBtUkhdbxGgHM8wLtXXdZxHfz8KP8uojXD4j9NPEtkwY8",
  "key36": "4e6cSncBPkrNyGwhCdxwHVxp5KJVwVctqocTFyAKt7UyP7WrgKqJ1uzs4gWyBpg9PgnmgMhrLwAyz4x8bWQx83yu",
  "key37": "2vsGEWWrUSsdgRqKWWmRaLnS3aaizvWuNEyv1v7cYaWNzUGbS12kwn9Pczf7bFREhjRgerawL2xXgH6E9rqp2jod",
  "key38": "2ANr3RC2WFoP1TQ4bZ2uJ2bbbvzaTz89mCqVmwWXn7FU9tC11CTX2oJiGeBpzC3mfgxHjQMjuynGhxJnvaVfUgtP",
  "key39": "5nqLn1bV2KrQHRyabjiq8qGVY4NjmWVseucR2WPN84MzEFYQufzbrKPMJCBvxASaTZa2hA6E1haDAnRbcDL9KH2P",
  "key40": "3wcwv1DTLPL2gNzNtCpunhbpsC6ipyiz29WZjtWS5r7mNRcL51qejHuWZnQL2F4rt9bpW2Le2og5hZZVEEdxeiL2"
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
