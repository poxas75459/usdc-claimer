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
    "4X7PG3ZqMFvdHj6E1GZLzNojUGYGMxGu4LBEQbN5UkDyAhodfBVwRmeYPwfpVYedjXvAiBtfXjEZpxfoMjfunACC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Pr9vXh27UMA5ZWLWCHqwJd6yiBhcvsAnHPHr3wA4vHFp9g8FrZeMDsGd5topXRAfvi9XHLtZMSYRHypBdnG2YKW",
  "key1": "4xBReVvpZtaS1HXyUoAE2eZUD45wAA8RokSS93kQAAyeeC2ypPCU75ZDeK7UNJRk5Stuy5Fbdu2Y2BzbSNpuwsmi",
  "key2": "39FyAAZa7fk3mT1qzAeJxGrc1i3LbufFsMU5u45HJnp4L18ykkKs298dc9Vo3mcjY3s5Sedy9vpYyRnVhAXRUdcy",
  "key3": "4g1jZk9TjJhAEiXf95t2n1CxKQPU1HnjALPVfH9Gewjnz4nXBZTKvcLrENqsopyvAGACZLto28v5nchZfSrHqwb9",
  "key4": "2aSmG6EBQsU87f3GwWJFy3gw9AodAEGKdvUBgqRdJRPjK8m3kWT5pgcbxAznywZEFV8JFTLaGPaMH9Dd4jX823z2",
  "key5": "319B9jUwFoo84tWQWG9gascHDUzWYwdVyRFr5RHYxqgMujQmNf94cWGNhddeHbCL9WUtG4bzNWVzMq8M3Cbqi4h9",
  "key6": "5iWowUJdcQowAM5aEUT9kmZrnDFdjYSwUY7RjV1RrdqB8tpojNn22AphkHFyL1hhjeLK6fc1gVisvezwiXUfoMHL",
  "key7": "2SmTFLnxXewtoBHzF4G7mdXDMUwvQ6D792fZjTdCsYeSshUek4mUSXRjazhQHWn6vSKqkRyduFhzpKmqE1Fqk9Vg",
  "key8": "3hd52qTn8wwi9HANXv3MhmgX4szs7xqMedEE5tfFG32DxJfLLKhqtFWnWFUiQBhg6GtadZN7ooDsVLzda1wgZzkb",
  "key9": "4Dfe4ifqU6urnE47x26nbQZ9ubUkYXgtZMrSpmrEsk2mCFUqd7dEMirc4eL9akBVXapbeHaWCLHHiixx2LyKH4SP",
  "key10": "27gsbvrRQpGnwf14ySBPAijwBSS7tucYQZLVhjG3KZS17h8i53CdFiF17cfBermQrDbqnF3tKwAH7pwcYY55wVcS",
  "key11": "dDYME4BKHSc8RPrtGEASvEpes3ae31d7CpvxXLkLGGkxiXkLrghiLcrLrgnKuH6Kdw5Q8uLP4yCYhpmNCbRhDry",
  "key12": "2xz19QiiVxFjSvqXVz7dC6jTxzJuQ48bAx2v9k2QHXRPtFFXARAcWYvhsZ8RUKR6tUx6Aukja84BCgzCvdrtPB5p",
  "key13": "3MhCkpWTnBjsX1qP3dgbktvfnztrxXo6Vg9uVYtK7av1XAf5gq5gsSrmx1eB3PifbnCUsasUiVEnbykBnfcqcSNH",
  "key14": "5rriugHkqFVLbxcFquULLQXwhb3by6ZVXT76uoSNsj49Dg4TK3KxEXasF8ucc3YZnx4wPQcwGfchaV7vvFF6U2bn",
  "key15": "6gxHH1roEgvunoATo71pVRwU9t5HrxWiZ14nGBqHGjX95Pv2VJ8pvrZDz5zAkmTHAtoEA6URHRaJCJNe9kjU2tq",
  "key16": "2ncebjYKPq4MJfmL4S9yX53MGzQ6oQyoAfPnskR5n1aEwT8tKFt67QCKqEzuMY3WyiJqm5XhREyjDjGgko5RiwZp",
  "key17": "5JNDR8FRYrqpD7v8cPeaeUh6JAaoDm34g4jA33gsT6G2MUp9qAuVgTLbqQrKr16VUV5UoZ1f2CAgWL1JjSNdrcFo",
  "key18": "MY9D5rJ4cyqGuSF3AxreC9uxmnF2rJjqQmrr5Y6ToHBemeuGdkGCMvkMLvLuvpCqXDF6w9xt4AQWgQtoNqJtVAH",
  "key19": "annEiTewpFJq7zpd3yeEk8M58BveTd7EYNAqbMMJgL4hWSJEsBQV6n5vaRkM5AL5ND9PjHEMJ6ntrXnWgz3ZuV5",
  "key20": "3ptXeMYii45wJk2Cqz1DqGCwSVvz8tptLeTscGViwdNgrPi2bmnUZ4KT2jPjf7LUh9dZ3N6MpYy7T1Tnz1xSNSyw",
  "key21": "4drb8CidzqRHtG2dLtb2LHQfMzxQey2bRwHy8CGe44qnvJ3Bxb41CmFrKLEcDmSY4rppK7WffLP8keRu3KunZX4P",
  "key22": "2ZjzxXYMfL29BtAgq5VkwAM7DCQygximKPtzVAfNpZaFTfcvZx71AGDiZ7Kor9PYLKBhwQ9kuwxd9a2GAJ8pfYMT",
  "key23": "7gF8m8VEYheowtueM2U8uNM8YvRxL4NSJFBwYbfDGJs1bB3D3XebJeSE6AKmXPL41mzkq1c4HU4cGRMGk4kQJYE",
  "key24": "38VVLoVMpWpHjARMoSZ4VLxzVkJ2UQNzEWZ1JHjShMj4LPPpg2uebG2juFPMNjMX1UrYy5vD852Rh1CyquYsRhyt",
  "key25": "3A4tGWXn7ieYz52URuB82KNJngZVZWUbrwK5XxmdZpvWBQ6CySu6hMZvv9iFkkTZQELLdhpc7JtJvMGWLXq6aMsi",
  "key26": "4FyDVUjvMhC6D9sujCvmav61cSs1erdcpCgFAcnRdoqwTx8uxh24aAyydnKPyUBxYUDGmSBFSHNAYNbbZNgtitzE",
  "key27": "5ztd1y959DD74Fgc7kj8EQenRpbFqi6QHF9sQSB8bUYwXSRpNocMB6UFf3aYE8TBBqhvTWdyqvtraWaStTefqeQu",
  "key28": "31Vx61cEnTyrGaYvMA4sXLGb9BSzAsC3KwbkVTa3LVWBvufcYxQG1maoPqLR1pX7NyyhXsUFXcitQ5E8Tgqq3TLx",
  "key29": "45h7dYCgU6kndHj1YbU9ZpDzsY8hUypXAn2o3fihFd4uYdVJaucaxoyfwwEkeokbAaLVa9Hf9aSEzHSnaysExfFX",
  "key30": "3vr1mwqbyBkB3JX79sDfqGQJG3xxPPEBuFJE1hjsMePAeH41ZWdDBdWnzQfByLP1PT8GPt8yppHJt8W2TK7XXu9R",
  "key31": "5tPnXWUPecyy1WTH2QJ2iHYZeYwvMHqBGhHbywiFstPtmKuzdhmpSTVSWuiajKiUMiw9p5Gha1isr5aBjnMc3ghC",
  "key32": "xrJjjTf8BAZ6JwSztTqNUF5niQvFZXpF4j9cjKYwg9M9Sjkqk1CCZvvq6q38PszZcR8PgMCSgAMH5cwoH3fdMEQ",
  "key33": "5G8q4UAQ1VHZg3HzB17SreFgak4PFsyGoHPFeW7Ynuh1MYJL9jPX1WqXqWpDJJDEeYjy6vRsEyiKt4qWzsAQAvBd"
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
