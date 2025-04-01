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
    "2j4xidVz6ykfNarGM6fKuCquWxZRxomn2oRWvaFpJpiEuxfD1wdPZ2NeAXoqNeciXBmxibZePfSwWrmnjD8mGxBh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "271rFnbwFTnh22rU3j6LkT7oiurc7N5uWyQnUs7sRPm73RWs5Xm4ixPuHtEvpHqb9WLyAMaJ6SvVb7zEd9qeSTrF",
  "key1": "5iKRwD1ek3xkYiHK7YaxtzST4Kr1r194rbSYbP861xLUFLorWbMqWhkwDvkeDQBo3onF87cTTBRnFoV2JwRLTsNf",
  "key2": "4Vym42M91bRMGaMDTDznBMqU2rAJiF5igVgYjfZmLp2aD6f2PGeohJNM8DgUJ1bpxQoMn2e1hv3V76h9eYsA75ti",
  "key3": "4zGFta2ciPhySV5twi4aGZ5cYbieKsE2BDgmzUepcqmLzUEMYjYJWU2tLa98uSQ7fgdDDFHm64ZNekScAC1vjb9Q",
  "key4": "EYGD3XZUTB2MencHWx3jUTgaUo56J359d9gTwgFmXz1hNehoB6aDDQsRWaQwG9bYTyUg5SpW42b5XuGXH48FVrp",
  "key5": "3yTApdWNH4SSz6RmRLocWbZkDXNPaAvVf8emzSGksvbFMhf3YD3HyTxK9NUzRPZMQNxRPgJRvdwepJRtzQTpBunB",
  "key6": "4mLtW5QPdigeRetMuzNkf7NGcdDcRM2k33Eet8hg84reZGiXGHapXjBJDFavyowCBWj4dgdATGrjvT4gV7bpqCUg",
  "key7": "2kwmyWr5BeqikLYALNp1JsuXK3MEhPdJfUzk9MqrPhErYYctkuJRPiUwmw3AWJgMWbqG4Z8bHFiYUyBvEAek9psW",
  "key8": "3vws1aUqA1dR1m3LqVvYULpMzvdcX4B6wEDkp3udxXtMbQbzfTTVBVUUiq4BQ4CNHce96pd6cKK2TsyHZd9QPzmP",
  "key9": "zR6d6yjyPAbARHZggz7Rt6N1jan6m7pBS5FR95FXFp7J4zw6oFMgyMr14WPGVrrYwMiYc22p6hWcfWBZuusC5C8",
  "key10": "4mafHkWYA6JvpVS4PiRckERnCUej4rnVximpLNxG23Xj4v3nTkuoiNuGH4FMt9Jqv7pcBhF6Wzxwy6sd14R818KR",
  "key11": "3qp6qMysvyoK94cantf89kPGJ2vkiSHkKgbyBkjoD2Q4csyQcLwDk3DwPsBDjPJnhrNsVS7kQEKGq5MaUKBgbjBs",
  "key12": "4sZEZpWrT1W1LWDqxExf1QZwmJMtEH6HgWuoPkTLRFHgFL7Q4kBbHZVeUfW8tNmVHQtRtGyhrqLK7oVsz5pEyRF9",
  "key13": "2ARp98wyzHAAoYEa2viEtZdbtfebAEEGwEPk95rdZeyfTPUsBcgnf5T8LjQbiCk4CBTsiiCgfzUL8boDanj2cxY8",
  "key14": "2fLa9UukaxeqTotodSvPUjV2VVJKBbEPA1ci371M9HCaff1R7xZYvsswuX8NFDL13TEXvJHuiDUVbFcie5VGWCy3",
  "key15": "5ehwX65dh3omZ5i9LZW89xTp6t8qD3UjF2NcFnmxHVDv1JMxdTxTrEhbDmKW963pVXZzoi42pM2FroZ1SRMEgRkf",
  "key16": "SR8wGFEKN5Ya1CXDEgcYiMEwXrYbJXG7ZN3HrsPt3scsp7c4ChwJ1AVUJHLsCK76kgrncdTh4RsZUBvQt3mufSY",
  "key17": "2KBKv4x5qAkP4YbCq4mFnjWJXQehcUB1G3BUrGe2yyekVYGfnLLQmsXKohNj46bMNXVZnUnDVqgdBFMFf9KrP7xV",
  "key18": "2KpHic7D8FYp72mfhyA5AkpqDtSQUMTo4fwNJ1mH6UfT3hSat5ymKLmUqXkSNT5X6S4heqg3d9eMqiaFtvECHcFy",
  "key19": "2CwE7uyyVKJ4fDnD9ywZU2nUiyEHokFdojMap7UJAK1xGF4oUvkByXmr8YP3Ct2nzdFJVd74UMQgiJ5TRGw6LhPH",
  "key20": "2pBupc7cVcQ454XzofZZXGbygvGuGPFJLxt2WLL3EVk54HUkvDzhvQ7fTiWoKgvpbYL3gFjJicpyxQoQiWPgtpCQ",
  "key21": "36ERJqB4dGAe8TkTGkLjdV1sh6uFVrzF6hiKgMpfuQuMLEo66m41XvRbxYf6euzfeUfqfRwQdwW6rsZrYJ4eKkDq",
  "key22": "q21uSt86eaGJ2j4qRp78Rp9FXXj2F8BLTqyU6sDpEshYrAQ2fUrsnKeDdMrL7xi1nFQNTzMBE1YEGRwEmZEEtcE",
  "key23": "2FRJ3Bh7XxAP4ddrPRxQ64R4NpUerEwniKLnCjXDiiVQXYfwRxND6jY2QmaCxB8hpnpV2q3g1ntRfBASvJbS9Kuu",
  "key24": "466xMurwgNSjpuHFKEAEbUyL9ujsyBtrftvpgf3TY48mtH4Mi4gZgyfsjKg3KJ2xjSgmLK4JCRXovSe73TXBGkdr",
  "key25": "5adg3JsFZGCbsm56efU9RU2gpEDFJ8LUqBvWCVEJ3CkZutzrqaKCLXwu7WepoQknfKPXKgH6h5dZwzQBwZLQiqQF",
  "key26": "pN6psXMy8cepyRwmRjS19rrfLATfdVm7CWWRiNpipkxbVJdLUtc727DSHq2gSpr9V5MP9z9pqwZ8pwj6bSxxoen",
  "key27": "atbuxak2t6m1KqoEwxQcxHS7zju2JS2RcRBTTxCEPSoGBrcWv3Afu1bMVnBRivfTmu3AANxBA4Qcy4grhH6WWis",
  "key28": "2WbVB5ax16cU1Q1xJP2z7RHTUqCPcBRZxagtoXsgHjrXQQ7s9gJiDFgHJHdYcHtoYNi1ajwza3pgBYpKSzjGoG6s",
  "key29": "FZw9QSQ3kwR9SMMdnmJsRStKbvtrARW37sPAktek8bHtSkJZEtNARVSmSdEDeuEMAFb5ZQNLYwuG6VsMapq7nFM",
  "key30": "5XEXYoocBWRnC4RJNNTL4eVv4JhjGpxHLA5xpkHeJftEg66TDcxBp3eVQjBquk3LJfxrJ5irxTcedgjyeYbtaszx",
  "key31": "3SM1m3Vka9YiD6PkakiMuBVkNBXiB565WSvRug8MAS41rhJyQYKSG1Psi12rcBtmgnv5BLf6Grtf9LhhGfRM4ftJ",
  "key32": "663KdVexedt5GndykWYD3AieS6AunxSQogcBTM9KbzjcHPnKuq8PiVktAwHTejkmmTsGy5RzxuUMaWkAfWn5mCwL",
  "key33": "367nH37R5nNUwJVPcsWBYRnjWhYbVqniAnVB6KWSi1hyqE6FAn96JFLYF2vyetwZBF6Cm6KbRozSPh6eAHnsQm9P",
  "key34": "49iZXyU3BTH5yxUoyGjjuQVXu9hzyAtetXxbnwCvDSKJ6j5sef4ncn8bSD2zp66jU2PMEGXDNJNBv9mthQTk3s1x",
  "key35": "5mEZw6j46DZcS7ZvQVRQBQzkjuCTxKamcofi3jahPiXwxyw9tZnkA6LuAtVTgtXmXBJUGoEUJrc6du4J1pScfMxY"
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
