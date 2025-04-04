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
    "xMSkYVveajr1MZPGVreWGtEBjm7Z9pkjCzcRf8mJM15Saff7YTfDA2AXb1oAaMhQqW2z6mnkMDQ4zE2LqNQ937Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32nXqr17n4iMVmkmgLPHe399jj9bYxrZGjX8ifNjPnWj5YE1RzeTiJUksbYiiEfksJnK3ean88cDNAxpuxjQuazR",
  "key1": "4EcGuXwJgyt2rAapFr36VVK325oyroL29jX1FgBXdVtzbKuwiyZcjt9emym46o96yQ2k3JbWCXLhf51SC7S2zJMV",
  "key2": "2ocEByDsu9uWdSF8VM62L8UMnri58AndRTe8KYvZCGgJs8zb8uhxCMj5QC9ZzGGAY8NeDXzRPWFwTWmQrWWoE17L",
  "key3": "43nEnnHP71JojQenEf53BsYBWkE5i5dVPNH7FW9rFkmEpe7dihrpoJs3GPi51sf7fBVH2dqrNTnRzAFnCSGh8bVs",
  "key4": "2wn6yz5hhasCPivXpPTkpH5PDLNBwvkFWornqHDoRJJ6dNsCtyVukm51Mkdhu3ZUsnVLX4SuU5JyHg9QytJNZCXT",
  "key5": "2qHC9MNvBZiYCX1Z8JbNJKNUZ5EXygApuAxdHsZAyQss7KJnpTNoLqHPCXGMerrKEvswBjx4YR8GJKRHE5gDCsZN",
  "key6": "PUcuVc2WaMoMacGToJUG69Wh9ocxM5KHi1iMYSW71Qc7CE1pr4wGSawqSQvkNKMfAqywn73gwBQbHB8QTqDUK1E",
  "key7": "47REtXtUsfU98HT91FuQbF6BprJVmh2AQjDKTrGZNr9hLzqZiFd9LghAM19VzSby9faYx8husPTmssYyHYCBFcVh",
  "key8": "2cHtiVBWfYve7fd5eWwwqPCsJMZdW5VukfdCDkKo1dZMwkciDrtmKTfLYHJxjeRPYfdfVsysPq6kQnCp7kqeP5UG",
  "key9": "mLb7fxubBepKhW3EcZvh8aGyXgadfkByxRFMMcuMyKJWmGZo6NzKdRHyb2rLHrgTaryP3AFMezEYAHutJMyUdv7",
  "key10": "5anhwuPUxZafRKqExLi8XUdK5CteZDbWgMUvVrggrf3i4in26ZDpLWCELiAF2wSyhT5qgSFsLZxJ8GEux41ZMrQy",
  "key11": "A13Br2FjgrdiAFJzapnoNunpkYMNmLQUf5nMnjbh3YJPYGafdPUfyfQpkPjXJU7LXcEVdk8Zttz5qhdeeL7x3w1",
  "key12": "fJ891gVjJjiueMnft1DacrP1u99aHMCKvzqYFtA2HRMvzVEknnf5bMwaNotRpsA6tVLZ97qK44ZRUVjATMDzrMb",
  "key13": "635pVyPC23w1KxT4b6yDoiQVfDxh31mfFq3vTCzqEYzxKUNVHC8zU36RTFk5CQNKaqa87yNiiVdUN31KWzS47Kdi",
  "key14": "3ooj7LnMKGcMEiMvNJxdgorTsMW8movH9EkLrYb3jiqXytznYTS6nHkCGQ6C6Ed8YNTgPXRe36KdAnM6HZsEDKAh",
  "key15": "3Memmp1aT8dVProDji6neHX4cRBvtFJ5z255sfM9wvcNjYiRHgCSJ6HfbMgBeGKcbttnEDJNJErFFnZjkDoqkQgJ",
  "key16": "2jsfAAAC14WckDqPUXyWW4HV8uhg4PFJukyXF9ar41yvW7p866F7K83tAaqWCr8YXkzKtLmVpM3NrDgctBTNfXgf",
  "key17": "5HBv7N6T11DZBtqkYS49wbw97RwRtTZWnxJsBW4Nn6QcWxuQSUMyyEot5SKvxqVWusonK4fUXZRroSXCyZ6WjSMW",
  "key18": "3mkq7ahFcYTA9SQsh3yGYMCzr9zFxqsjqBhgVewgW4jAaP2y4xDLFwEEzyHBrGkaTiw4oWM55G3z26w3nxo1SnsD",
  "key19": "2wW8YZDLKAns9ghUpnTpPAZhvEwh8rfbXT5MUoJVGSYhRtu5XRTS5Fzpz3dMdDqu14K4W6PKWSEw8XK8yVCgmyAm",
  "key20": "4AqstQzTefJZnC7UbRidNYNnHTdxPxujKgWPUuaaSUXeKxpMSdLsVbJqnoFWhCnnSr5MK1i3HSegmempN91fib1D",
  "key21": "2DxHW2uhumCavSn1fDmUJstGDE5gwMYQ6op1jmgDEZQXLr5ktEY5mEZbUAaN6jJVNVidkZ73zQf6zZZXnXWncmD",
  "key22": "2XX14PdfTMyXJFHadZjri3Vmm3jcSFFdzNQhMKfLwCK6N1vk7XjhFtnZLyaDKSt4JRGKjsnjaJB2mTsD2yFCjKDU",
  "key23": "2vDx2VKtRBj411WdkLfQ46wNmR7oGrhVogZUKZxKGFgFMxksNd2wtzity5A6MYmTzrDY5Wmwsb9jjv2WNdVp4p18",
  "key24": "2RTYeMgENZdQifomYKKR2Uk8pZn9tWCQUpcR42uNBFwBNiRYq5dmLkdJyX5BCRw51GRiS4PB6njpekafPATrZkS1",
  "key25": "zkfcVvTmrzMmJcKChm77e1uLtqLn3LH3PXg1QottFbNaPUgBYT22VCZfdM1unL8UzH6v7ffLhfQCdp9mFzEge8b",
  "key26": "24yMVYui5xdt7UsfcJmDmMmj7WHJzeNqRKarrvsbXKy9m2irvidbw1X6JyMUU5DjZZNxuo2sNWSKRkeM1ZZZPEZC",
  "key27": "5viDG5wy6gdamU8cFStsopCQfGJ6yPoMFrGForDgAfbq3hdfC3cApmUiCXMC1DTx4QkKL4cSULZKPpCiFE9q6WDz",
  "key28": "3bj54VVgmTnCZBSETaK6gXs6mKvg1f91oWg6B7xGhwKrFo83Cw6GsgPYCf9vcnaJSkcVChF7bDhidjjyEncjcxio",
  "key29": "51aYRDxPp1kFcpG9ypWh7N6UF2FL4LXYcQM69qFnEBdwBYhVNVpGSS8y4naxtVtZBNgJoPgpHZmCEQbw81Cn5ZZ6",
  "key30": "5AhyxoHtq3mmngcpXBCVexHsLPyH8VyDfwubSUMKf2sr1xYVStrxGoLKWRQRdA6QHDxdbnKXCnREmuDLsN7UDFCs",
  "key31": "41hAFd8if3KY7KctoGNoEPjpzmuoYXFxWzjBExm2K8mjCeiL9ydYrn3KYbYZ8dHhnRApHygj8kGo9o6aGN68fSYu",
  "key32": "53A8mE7ryvjsQuSFXQ8CGGPb7MYvjTX9itzUEQnGW5jULyJGQ2BLQ9B6B5icSVpuKa1R8LZDiGkRHaAM9G8TDKBw",
  "key33": "2fRM6gANjuidk3ApSeZ3qsyYkWXExPqkXEfXJp8Q3Zaf9dT1ZAnHsWm9943dm2ecUS8cBHFNmA3jzSNaSkq5HzsV",
  "key34": "2haAMHLrRzDaA6MXHH1FJW6U1KRKcCp8Ayyyg4Pb7YADgi1V3k5JQrh2uLBjNZEKwVQL8dhJnPZAryDy8T4fzTgq",
  "key35": "4xVSEgrx1w4QDrS6nHzSRXuGRTN4MKMiceMnv6vgt4DKvhbUVuwmwxHGG8q93oztZgJ24yrnVxEYBaR5Co13nRe7",
  "key36": "2xujJas3nvaZRrmS2SzrS7eHBVNL5nw69255VFPbFNp8UusAFpZVes9oCEyBWbYrK2b7kMmFFVE1H5wXpE91oSd2",
  "key37": "2bcpcKsuWbR8npGcCDUE9njfSu3ccvRbyMH6rtF3KBwaw3PxjSeFzqCYRvBpUMyyNX7ZEXYHbu9fn474XnpPqovL"
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
