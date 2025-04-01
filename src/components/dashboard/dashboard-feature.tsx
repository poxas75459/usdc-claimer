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
    "gCXHpVETBSkxD9JXb8Mepm79BTH7JLw8UTTEC4QDa8R1mbFwrcunSqYR3G51zEUdHfE9CsUsZs1vHsG3q1Gi9hU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KmenpR6hEuAqAGqmtUCPUzNfTtj4FcnSZNH47TGdMWeForQaCn2KTJ8Ri49rEUvbY5kdSc98VLQVYhi5cQA2YGe",
  "key1": "2E1dMs4nCchk81qE6dH3Ydqf4ruxfqerpGy3GEvWYGqpsGmWcP9Ne2RqGcde7ov6Rz31TMEaH5Gd1iacZGqbR4ac",
  "key2": "5SnmmJHbqs3bAQGBXE3zyyx1sGfq6Gd9bRD5TZpo58a3orVUpR7duCm1RQkqU218Eyyu4s8ccZAd35BezfiaG3xg",
  "key3": "4zVXUozT3HtxWdW5T9cvLqgUYnohStGaibaWmup38UsFdiUYkzjgGh2thTJUD4iEYsoQUEAmTiKta51k4MfVPRT6",
  "key4": "65EVqWQKksK3795a8syurKFc3EqxPAaj57j2mCKMgM5iJWx2EcpfcsjdrnChFF5EDzbtWkgLn1KH9s5WvfbT943J",
  "key5": "3A7qGmsWRq9xVdAVjRGoBsC7UArrZKZgw8VT98iHvxvivzCc1crj1y5xnZkSQT1yPNhXdvycWh53sxfZKa5KDMCV",
  "key6": "3z8cyjPc7Sv78rJTpvkLBwbfrvf1VoYkvvY5Sr3oEy5ps4nXKoafYErxrzojjkfA4gvmwyKjhDtkk5R4WtFkoHRC",
  "key7": "3U4WUrYTpnzfVY5aMnKk7GtV9gbePcnaWgJmmiS7rJK7633jKHXPRYyG48Q1amqvdndv49grJxWbsHfUYyUCz6V6",
  "key8": "5LJSkfzV6WPNqvNM1ofiu9yqZE84ok4rmuqnRmz2izhfSoXfvxWUfaP1TckXkXmtKAYJaAUz67nNzaB7mnRsBuxx",
  "key9": "2AMEFZCP5MK6McYfKh1YMEcRi8oLBbbRnQSUPxQKskaruc1Vogcqx5hJuc2SbsGD22af1LobtsRhrzhYW5N99Hsu",
  "key10": "5cXmJH9ayVFTTHX3M33w2zazbJH2jp6WipCaxTgUcbP7VzA1hnqdVNtYVZe8R2RCMFr8KEbqfNjHv7j5MJzmYo9X",
  "key11": "51BQzQs7nyRGHtewpfqn8BgrZwhiuJTqqz3e4qQr5Rck7KWgmasowBWgLQBrqovm9J5KdMFjzTeCUMLyCGt92XoJ",
  "key12": "3D7gm1btif6L16jGkUPqKV8mDv6YmyozAQ6aRPjG1WrTs22kwsXqhrVEKjqVYwpmPTrJ2bL1KULN9CuUrS33whsB",
  "key13": "3XiHNTQ684p1tPyys6x5aNn4zQxVfURYnsfXudcZXiKCyJhbk7AcwekoBwm2WYjFrB9e1wHFZFEPsL26kx4g4tcN",
  "key14": "GWWvJaPCuJavkbxx8qMTsFq1WrBqpEoNSDFVDAeUQw2vXgPY2nURk39iYRfNEW56bc3dg8DTu61nfbKeTkTTcJW",
  "key15": "4V8iXZzjVwZePMX181FGX2ahH98fsSb1WAJrtZvNvEoUW6B4Gbm3QRbbvhpQoEy4eAggrBqSxZJRwRZzuP1MfycE",
  "key16": "kgXHXS3ewteZcwz9huKK5QuaFgdVYgjKq8axb7zKP4qVmiK2kF4yLFs785GpodouaMnRPCPoaE7ZwGKQxkk9TSh",
  "key17": "4EXhP9WMCXvyLjeEyF9c84NA268k9g8UedrjK3Zo6KWA8WomRWKaYUUTjHLkhVPJD3hahHMvncgoz4gs4hvVrm3E",
  "key18": "4pXGw3W3sonMEMGhS3R9XgHyNwHMpp1aZcuBMyKkBaoJgDYTQmftxhbhUtzogXhyAJ7qToZR54RykmoM5T7hY765",
  "key19": "4DsstGRmNJRCNhqRWuWvoAtXmztL6AbV7y31Hb12hufwZvkCTs47QvjAPZzJ5uL1yPFzJnEs4bWZv5sT5bv7NNMK",
  "key20": "EDGPdECsyaW7BhpefJYgjQGKYjbCnjtS414p1v6Db69DxJuN4XiyQ7f69p8QpBwcxtjrBjztGJrP963rSth3rzP",
  "key21": "32j36jsRykHh2YrM2Jv5P45iSCgARbXZPdqmPk356owNo1CtMdiruqgE9xnQ6iczqRQAFp82HJAyQwBF1d4sLvb4",
  "key22": "3sQtvGsSz5MhyxWuPtMuz9v1PAC88orHNFHMgWm1F9vJVgPQnMm42z1H4rf7HoXpZB2ogpDh5aZPqUTzp5JhiAw2",
  "key23": "4EhTchtmkQK8HNYiGBU9HR2ycUZjb5F7nMTTZKzPXtSHDws5ZfPyFx9jiQY2Rw7jznz3CBxpfS2HyNQkLYmtzvX4",
  "key24": "4hDDgEW5rS2XThY5v4Rr4xu5idoNwKeSBQdodrNMJmq2yF8Do7drzmLZkNkbrY8MEtkUoBBFYRrAb9R8PtmnNDeo",
  "key25": "595QqHjU8dLrHCCEpRkYwKvHGktznA5PDbVnEbqDJQXDp7DkrmttNMJhjcBTf7FsHW33qMTHSSdPpvfFnD5Cmcsa",
  "key26": "215FLiZP2AXbGu9urQhDVsX3vgFKTvogkxBh1qxh8NEr93DEcA82CS6gTHFXox7QJbkE1VgRRj8Toh51HyytrvVr",
  "key27": "3XMWjESgKFGN1Lb5u9zQrQDh2HNMQDZ3P9xqbdDdZ9yPvQ5wKf4MJ8W1tNME7fwzDk2XWFakvoYdNUrSQ2Lg426B",
  "key28": "4qGCBJav7DFERnoj8D8uZ55N9H8wLHGpujjUWZQ7DUfFBazupY9A2M5Gi4t4Gnewex2qKQv3P7CSqQw9NPyH75PD",
  "key29": "4sN2BiQ5C5KaKuUuAVyL6neLVisg7RDfJwfSPZSyXNusUCVyig6U1eEXLtttSg5kGbnczErH3xGWu2P8s32EXNoP",
  "key30": "3rcK685isxzKpgwjj9txemDVv8LgHFKaEoP1d46GHWeh4jugztom6c54CCdZ84neJQUUsaWVr4hjCsphahvH5kLB",
  "key31": "4wKm4yLDNAi7n3KaLp7Dzv5dfwpbEcXyvJSTCQK7BBaSjwhHgshbCtitg7U8E7BzbKUk5bQvmidLaD2jEqzcQTi9",
  "key32": "3avK4UVqa2Y2SKmqi5qosn5w2jXBFkXLqFUu1KSpWcsPRke2vhtXgnuHDVqhTTRdzGkuWFCjYdnysnJZ7avLnNqq"
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
