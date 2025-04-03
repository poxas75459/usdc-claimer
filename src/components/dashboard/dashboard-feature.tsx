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
    "5WhhJdfTi1bVXK7CW4waJtRxH9tAZnR2nsp1TnEswoNznczePbxehAvmMQFEphAa2dSjwF7XfA1Voh1UuvjPnVSj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cUiUmZ97sDndunkHrn7wt53RRKLGQV1NYjk2xuH9Zff7iE2N5SjHcPjD3qFsK2LzjsewozKLUaExan7f2PcdSNw",
  "key1": "4GQNv8hPzRQtBgtFCTDPz2yDsev97wcXFjbFz77qjo34MHgDPL6Z62vUBiz7zUzn5YBVkXzKno5F9XRaKdqr36kC",
  "key2": "3QBEFHbTXu5jtkumFoH26wejuJmhU1K6CEm8QbwFv92SabfXX1k7v5VK2xdMLXEzNgysgZPBQeGxADKUpDVzP8DC",
  "key3": "3PbrUA1qZ3oXqnB9zW6yQPLL43g35Pg7CjRfjoWmGKmqdLnb6bH6edepBP5THizcfzo1xXFj57gytSaT9jpG7s4j",
  "key4": "5AX4L4CxZBr5EE2zVk4L8g4d1CVU9w1V4VnSxTkcyePgZvFzNnxHpnHVA6Qxa6jT7Qpxi36Ubk3PFuCdaMzVnVA",
  "key5": "38LcFioergGDbY8JBcgXacdG1CXGGeBQSEQ8UgUf4vbcjHUSwxR4j8i3QnmY6w7BU2NK3qFoCy7bkVWwEnVaHgz4",
  "key6": "JapcPYEp5uZjXdLXm55eKpfgDWeF8aW2vavhrLs8E1VG2Vb2njoksMUxLBi8rxLzArgkTh235ePHjE6wwfQQoVe",
  "key7": "N6GAkgkVcvujxxPutVaUn6K4UjHU5DLKYd2h91WbnPHayE1gN5xYSkEBFdqwownCReAysRaVkfqB8xc3cXaqVMF",
  "key8": "457Ym24xGY4A4odBE2Gi4s4E6whmW914xgznRZyjCeyQqgBe9F7BMMB5uVZN8V7WcXKKrdcRy3srHZNCr7S3wMud",
  "key9": "2k2z1tKdBMTcJfUy4uJ3q4kT5fN5C1gHA4gmZzRth3SwQQQ67uHHVePF7o6EnrUNDwdEcn1RJe9aEZLmjsfXD4sC",
  "key10": "5zF4yHJgxPUNTC3DaBtmmQyJPPYaXTMZtwt6Xr7DmW2Hqwf49FAWK1e98a6wmV59t8vhdeQqRHschR1YkHuPme9K",
  "key11": "ETdLJJHi5hKkAQD6PD25rmaKXMSJbTpJBmum7ix3uM6HZ2r2tK5aYcsWpcGBzmzEVtWBrFggipkmkWDV2xwfdT3",
  "key12": "5WKxt2RWpw8ketKfZyACk6XqPsELLw4RhXupUGUiHFsDkV7VRoKTqyuWe95kFJVHzsDyptUiTPRCVRjRy4Da3t4e",
  "key13": "5srX7DKgz6pq48ZV6P1V4JEtSQyWvz7JNEiBPikWTXVuJUryMQCfAxfi5hZPA7dTnX6k6KAZ4qTYTw9ifr9GbYfG",
  "key14": "27c7eTdx7s6krJFXbQRSCP5e7zBvQWJx5tpYMRjuqWunTcwHKx8Y7YiUhkTNCKu9RJYv7GnggXxjShcvacSfdqQG",
  "key15": "gyJfCMisgeErJyhEVcakWbF5tXA4GbqW5xr8R53xo4ZJSjj33xbtcmyvfnXSKTi7dks5efUi2DTKZYoFvwmatwR",
  "key16": "3BsjUR9gGLFcLGcGZ2nAFFkWwwQ6yvxn2FpuwYnukCdMe4rknGKpb8T6AHBs5SHk12YqdpUzbN62BDWZ8ENja9aT",
  "key17": "5iybZgNZLnYzE4MneykpgvfSbTvhPqYM93yNnHcGv1CHSJyd7RaikMLr78qDYNogob87jabWzj9G8qXHEBcHEoc",
  "key18": "c9Emaar2UMjtqsZk3gCXPZLfq2btZcH44qvgFL3YiwjQ5g5qvMsLuFEszXZkuitomsVsPgdmT4k4Wm618J6SYWr",
  "key19": "49e2pDyPes8PaAKXFWjTCkaa3dWQ8kMbVPziN9JBHjAYm3yzWkXUx3BeXJBtZNLFKRY3qG2mGeurwvAzWP7Mocy3",
  "key20": "CWkejRwq4gscdCoMWRfEGk8gQwRNxg4fDzrSP8cg7iM2tS1czHimjybFfGbav2YTEAkXHQEvtTqzaNokS5fYEVe",
  "key21": "22zP7Jgjiz4yXfqQXqd1zRZG5QQrBNrgFB9ZubPiBfTwsmHvfRajxNf4Y5bEaEeqWHR9wJUegQ8F9b3XkoD1HBqC",
  "key22": "2uMz9MSJpDZ6jqJp9CFZVmGFv7bFGLVCUqyCLKWLuHg8bn46HuuhxDNr8BjQJpvpbYfVGEEpBBFnejx3okUF91vN",
  "key23": "53htHaU7zfRfkA4yUjqSi3UwpWuPfEGRZ9yGstXGNZbsgXjBxdxTHcoiDqLN6mAqBN1ozq8nWamwJoG7fWQpBpnm",
  "key24": "55KgYRiriQtYhXsRnoirtxaEo1zmiGARvTpZVkjE3GD3zecgc9U4zHfUMSkJDPCaLooPpKPAkfQtZVbnq3GtoRdi"
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
