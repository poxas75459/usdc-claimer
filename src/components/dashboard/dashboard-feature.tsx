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
    "57v3kYzoXjJS1f7FGeUvqtSAjHidGLbBxLJeB79uTRDaH8W2ok2qTRu2nBEByG29DSc2mPTZtTbAwMVgHLGoU9L4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fyTimc3B7iKcc6kqLa421yuyRQWqATwLPWDeDZTmTwTWy5rrFxhHri94WUYxzi5CBMg81kv7Jz89XPjXu4j1kGx",
  "key1": "26a3JLKgqCxXpNHDDS1w91sAuD2ek5oT8cyJkdxsULgZ5pGEHsJwnoTMegUaXyK3AqLaMVyx7YZfGwusyXmX7NiA",
  "key2": "v7vecBAhLjPzTr1HArVnTudEvo74EJa7eahoRqkFaDa8qgZTBAnkZHaYxLoJW1MJPxX8FLD2W53AzLZD9sRAqes",
  "key3": "5JiGVeKpSvWwyGFzY4bdWnGH2a3SikARHDCiacKybjuYWfmyyMLAMuC9TygB554i3LDF7eX9JV4PL5XTrLyoofR6",
  "key4": "3XdssRMvHJVJLfby13M4wTG9nWYRK9BfkU5Fq8qXQPkcCrpTbW3i9hHn3gG5oPVdmctXiCsziK6cvyTLe24Bmesy",
  "key5": "2ypsRJPds3WeLj7J3B7oEh1BeZjC7G3ZYGGtzmz7UxRBe3zgCqtFoJLGmneufod6qSGrnLNTng7sa5pnUDUvzq4F",
  "key6": "3xvMbsTonq4uD8D7bygoEW6CdrnyDGcG9ZAxxGMeoursJFvWppeziSw7f6aGT4ZCXJZAtnT852Mtd9qsZAEikZfN",
  "key7": "3akLnWgJ9xSdzK635f47DNyDraenpPtfr1FqhukxLXEy83Adptnui4xVr2snuwK6qEt5MtaYEmNBp9uJ6cSTHTNA",
  "key8": "2AWCgr15Jmz6MrnoHJHJ1WZRgSw8f38iwkhue9kCiKQkq7LVEZex3nvYRVsG7br9oevSeQ77VzHFXj5umy5Bi4hK",
  "key9": "42JYVzvdyWydzaCKGEmmGbz9cp7TU4nCPaproCL7iByAmKWhtLUv8sVk4WJ3NjjpNEGVNshbHvxbSBog24KscwJK",
  "key10": "3sivg6erfpVdSyQpkVTPBGUwVZSHh96ZbF1oDRuPBw4igJYVvBcvp3AwHNcrKk3Tfa8Ac5yiiR78Qs2eBtiLjesH",
  "key11": "3f8RUAjTDH7YLHRDwuwWX9PgPyUg9P7a3R8eNnrieTdg9vmB5GBVTECeBhwDDDo9nk4rFtpusEXdrVFfstcjZz1E",
  "key12": "3FSzmHk9zkwckhcU4Z9eCH4T1DGY5gvh8cKZ7jWdYfvWbR4dMmKjP7tF8rnEGWfmqPncAdDjnqsXBS4xgrekbehr",
  "key13": "oULdPy7cjwpYMc9hS25f8gV1TeYokxaRvDfLuXqR5dMXvmoWRJ6ZN9cLF37zeLVCz7nUDwALF7wSPFfB3XJcySc",
  "key14": "28mxsuTJ4B5ufWgQ2MijKM3LC1MR3MWNxbi1qivAVU96Pg2ZHFWt9XorKSX8XcEHSDEeQ3ey9ERBBZ9LgBKdBUJG",
  "key15": "4pf8q3ceZwi9pdbWr7zhRAs4BagcgZCZpLavRBdJpZxWZXrgZDcPEdd4m5TUL1RwRchnQx9EFCUwUwmZSoWXzsQP",
  "key16": "65qWwgEydnrVGGRtrLKrf3D3kKJmPetYxqcH7ZpUCtEXtW5gb3d2zaem5o8CD5HP6sUwocWRh4gQwmevmxKc6wdD",
  "key17": "5LfiLm7ooGgXkVH2htbK9iwoaPpvxH638tYy7wSykvZJm8exAPX45AJYhWBtGWxAr4NN1YbR96N42yyxrwADqq24",
  "key18": "3KdjvT16CVBepH7nDKNDHDJPsvTj884fLNee4SWPFZuzDse4FTEgasZeSgMzGRyw9iqbL8yfWf9DdZP2VJPfZKLr",
  "key19": "NuTwF9QGwiDoXHfDzALAkdFasf3KnowgBbA7RjTiZGpS17u99Ydh9SKkuFjHMDLnhGQhtpQJyLVWjhP1rgvAz7i",
  "key20": "CW8qftcCTdacisiHGrQM3FpcnxdkrRb6Q6wm8LJwM3tjpf7GFPfgLFyGpXxXbBwbAuKvCPAM8A3mK9NwAUZDUgX",
  "key21": "5GwGGuAF7h6LBQL8nxcnF5bRfNpn39mNaHuokvgNxnvYf4mRmMXfE74hG6YQSJtuu2qXhpA2jkUrhEmN8i2fiED6",
  "key22": "3AtfuDVKvopi3bLTcnhLukJNfmr3Bs28r4giCsRq6aB13Ak42Nt6KZCuSDrW8Xj5hagMD1KX9rB2Dcv7QcGZZsRT",
  "key23": "hDPrLzT8dgSzxoq3rGhEddWZ7Y52fudPuFc8LDiRisSFCbG8FYHz79FQ6xT7ZfB97nHSun1DgAas9iJLskNhoJm",
  "key24": "3VAxFMacjkkj69QoKxM6pAoskdL6YkzcQf2KZ21UvwNMgewwtCNoJx5tx8iKuwmdGP5GVEzUnjBqv44ksth2PLok",
  "key25": "3UA1CYN843o1aEwqvq2vPyxvn8Aqi7fqgQR3k99foggPi11Qad7nmRTABWmJnEuFfJLQsRdxFav1N1XhkgqxzU3d",
  "key26": "5TQPs8mJdjJiuZB59151e3h4AoXRuAA1M3bz9WCJoBKP2r7KE6GFWaJPCudA4ckv5DZcrkFJ3S6xdBHiFBVoDaUk",
  "key27": "21gvoohNCqvRzJZGcBM73K1jSYCa8Rn9yXE993GZ8tCwzXsj5Am7BkS669uTH6vPXpcEaDnVrT8SCZQddp2E2zMd",
  "key28": "3PQcEHmWRjiV7wzHDCjb9aa7jUFVvwTHgv1Wg5ixKzimgbZsYaA8jQUChcV9GKnN2CWE6EXiGm6HndCuNXs32Ct6",
  "key29": "3xAp8DCf3zsHeCMoYZcuN33aPz4qpHMvv3wTzjkj5RcgW6dxnXqMQFFBoX7GLGKcmvX8pDhXY3fcESCExvkx27Aq",
  "key30": "4MunK9bcU14QTSmy5kWkqdGnkGHWkR6yqwbHvd89FDoWUVx58dZp7Z2mkmRckrPPEG5bWLENVgWs3xumjj8S4ttj",
  "key31": "2S41fUY27WmNk3TFTnfeF45RNCjwVmTfBp9WirC9gsxa6q3xPVJFP4X6WtGGrq1eNkjpdKqX7gD4xa2Lf8UuVHnM",
  "key32": "29Yz4JcE9gFcJEGQJhU9MYPRWeuzWqNwXfan51Yy4xkA5yGPVisYsxpptHfmifgpouACB5ZpxnTUeRXMeqxfRgMR",
  "key33": "2X5p6K9hgXzYGqVpBize7ZXYKsQTbiANhGL9Vh7EU9Qv4436qAvj2ppA9pSTmtj4kBDhyP2fURfPtrqWZCnHyJfx"
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
