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
    "2ZQyUQskPmxi8Q8BpggbzaKZFfbT8SM6dszAkB3PVTBzTvGqXUPaC5XPaXbvZPwMc6ZsRqXCPiYGfwtaQ66pRrEC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KRtgu4ZwFqSL4LNS9AcemYVd5EFYWdHsrJgD24J1DFQ8BN5Mn812koZG2NHsjLC7sQearKmH6dBVRBrD1yVmgnS",
  "key1": "qhazh7BZeRWceYjUyynYgZVV6Z5PJkDPRrSnbYhRk1soiBVNxf5BQoXQ2EW87Bd55F3XxdfGMJ3wkRPjDWWHn9s",
  "key2": "3GZWyR6yVbsXDVLaMj3MoJZpd9onjmfy45zbyMPshhZuvRkmSSwzVLzEjSYMs6653nwUk7Hm9Zu3UFmpwgdGwPMx",
  "key3": "2oivTZGYCSBSsEEbNroAL72HhtNC45u68fdwrcHrrf8uidsUpyENvUNhkvxt7qvMeaGjCSN4eyjMybCqRetaCGC6",
  "key4": "2vrnMNoP7cLasRYzo1aqXriPwpYWFxS7QdPqERvDax4gKLDYpxU3axwZUXJBeJJ4CEuK7V2rdXn4CVrGXwtfkk1g",
  "key5": "34rHm87UuyMEQynr3mhRswgS1J1R5FyWidnyyRhTmPxwnwPokXs7E71T31jN2oL13gBvNZjKHVzsVVXyXUShbs2P",
  "key6": "4jBG2RSpJK8AzWghPuLmRKUBQiWmprU8WjaV9Pj9B8NkF4M4iKuoBxaPHHGonZjiENp2XuaSnaMUuXTV3zx4P5WX",
  "key7": "2o4BBgzJWi5Lpo64JE6c7gqnz4KYtHr57VB1MxUyv6FZ87L32Hrr8fpGTB1XU3DMGAE4a4fHqu7NEat8NmCL1nmg",
  "key8": "2JodKFEf6xAoiD11HxfT3Gh7tkFHG4jgT1gWaUAHYMmF4sns89x7rGkJpJ4TzNtoHoqrvDST5KsS9FekwNeu9xnc",
  "key9": "RzYUWfv5vHV42Ro5XHcEfYRfKoX5faWGddoHvyi6DgZcPNTssKd2zPkgpCLQyxmgZVvmQW7Gu2QsT7DcKmiAF6u",
  "key10": "3Wo1P5q4513veay1QZLTHAhNxhbuZA7oG9BRPj4fhBnVqw4sEGyv4XGjrv8wMTq9L5dgP1JfzDx4955mxZvCCo5j",
  "key11": "527ppDt2SQFZqG4gqsjKGZFy6j3JErMcxScxyieL9krhKYUySAYSotXWy76qM72yDyLBZY2YdnL7GqngrmJSxSjM",
  "key12": "53JA9BQaRE5gaUWkM1UuNFV6RqfQcoobzaX52gBbA4k3H6gFwq9csRko5SQc3dfEZz3Gv221n3v4fqXZam6VmDES",
  "key13": "3XmsieEQ5ohUJHnUtsLBDceW2NfEWGtrhJcFcYmi8igDAoB5VUbCe5bMJ7k8Y6gdoGTmoFortrFpSggWPGpoeDbL",
  "key14": "4UmCjAj2HMXCZxm1maYLW49DjecQgn6krhy15GQEhZ96qnT4xAfhEY9U92Whyd7vU7tf23R5u9qYCXA7veQWXs6S",
  "key15": "ERSK9q1TYmgFVCKJpTonomnDaWLWpKwkjAiKJuoHx9wgTDHTwFgwRw7h3FJTNCEkjFu1o7mrWaRkA9w67mAQPeE",
  "key16": "2PWQQdACVFvdpPAxAZy1hSoWf2tKEEepZgKWBJKy9znyHHHSU5BkpvmiAzVt8o1WnCcCU9ycj8fgNhDxiUkw9511",
  "key17": "3LpkAb7i7gh5jvzbbH8MvKh2ZR5dQg75SDCX2yLtAbZ926nRnNwGLTubvcRzhgK7PrQS3yo9Ds4e4P2k4oWzbQzw",
  "key18": "1qRQnSZuVVXkLLvyKwz5P5H8ai2SxRt1HHxFuiw5nUp9gY7JpMPpcy6qK3KtMZgHEwELyfg8L8jrVyzeVp6zjB1",
  "key19": "3ap5GbZr2ubJiErfRQT9gwvtenLpo5xTx1KnViDysthY8YeP8pVZxf3ZoZCnKaG1FSy2i3hR5qUDegnXF9g7yXWS",
  "key20": "5fRiXFZybDVJoqqb4WrWrTYKZL8C4hFddX4F2Zxse3cxQpY61EAXgZpD2UECPeEiuwGvTeS1YKHZceW7UPhLDDo4",
  "key21": "orPSH7APCDsVzSZjcBd2GVwkUSpubjZoeFtvmqoE2vVXziRerkkM5vSWK5p4suXveJJHqF7MeaUnZsNYH4qWezu",
  "key22": "4XakEZuCVCp8zXs7qJkz63GjF7fvZGJbUV7n6HjiYrwPi9U71rsTkadzfEUoNuapG9ioDBh324qzMFXUwpax6FsP",
  "key23": "3jD5owmVViNPdrqUd5x5synvvMTWoVZQGoCsu1UKAoRz9cWKEeV34s5X62uD2ypY6ebpR1AgemY9NZeS6FvFToQ2",
  "key24": "22vU5Eyc34vjujKSNssdZGxKmccBxF47eNvre9urske1URZdQJkcBx6xgABr8sGn5rVZkmhz2fhz1siXToMEwCNS",
  "key25": "xnWLK9j5DcpQZpzChFjQavUfBhCteywRTHBndyMG3JzTCpyvy3ynKSGmxSSJdWDWnSCSS52DF3NNq71femVi42F",
  "key26": "2JcaQR1EjvGpqXRtP1PRiAL5k1mSGq7sGgKMJ7wZ4Yb5pBGDAhLJZXLCmXwCEFG3hp6Y3m3L4k3MrGEKsEfSF587",
  "key27": "4J176pzrNKzZJHnpuCKXiU8H8nzFNt3BAYzfZQpWYXA3AMQd6q8hpJYTfZwpzuckSXHM2ufW5zujz8FbksGpqrGF"
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
