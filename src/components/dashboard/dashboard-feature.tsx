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
    "5rgfJ9rVXzegQqzsVTchGh86uecUtrskYaqY3pZqFPVXqRigQjRSLSeYpUt7oQf9LKdd9v7f3VT81kaxZKQL1mED"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6RvcRZg1FaaWEkEb7CY813DvVYKZ4RsSpCMjzmbPypQ5mNi13jsjd2bnfpuT3SrD1gXKYsLCS7nai4GZtmGe5yK",
  "key1": "3ZqZyAeQrAfmZs2SMgehmzb2ALNsLX2Qt1FcXu2Dy25Vt5YfSnPaDD6saQBf64DF4fSEKZLq6UxTWHHSCcR3hsBH",
  "key2": "2oijjKAifABgLGCWd7U9i3v49TCdUE8ZcoBYH51cSaNkzCEZfpdLxaPVDs1X5QVjWMPrvBBUdusf9JPi4BBo28hv",
  "key3": "5SmxMAQaU7ESgUgWYw3egiuZ2Ffgx6xUdB7z27kDGzoU2EyLRGMFZkPj8DN3oGxFjna6G2kLwDmG8QzumySJFnoY",
  "key4": "43FkrcJMKs6LS8ic6zCn6SN9ewDKexDdFAsUaaamp9HxxApgWgrHdVjioiNrVCB5LvTzQePEuKsA5M2q8xh9gzYU",
  "key5": "3TX7k4Dhdcps13VnMnCoZY7zTk4YQ1TQoYf89KnMxtEshdTmueS3LF6yEeBFRQzfeYLrL8abE9pHCUVAMzTn9Mzf",
  "key6": "2tPBucABz5siJo6kVtt2G7xY1xDjbgYcEKwMxZVtT9StAenhCGCESMXoomdS2pai1YW8B4KktK9G6sJcGgV16EW3",
  "key7": "66hQb4WhcvbbXxqA3xKiv6fDUDBWCGzrxGNUxVF9RKFLYooaiG67Cjmga32kX4GRQBez7HraufEKt4ALViyQWKnV",
  "key8": "e8SH41PapgMStVBySju48AoHWdPqNEWVtweCRdzVq3GLRFVgYyuAzVwnc1s9zau5KyL4FD3R1seqWN6YEvcaJL9",
  "key9": "5ZLC8wb6tHpRHDh222iDBD1KTxXscV3pfNuJ42Q6hHhzt24NfGpbUGvbavooVoJUixjccifV2wzVnKMKR7cpYwaM",
  "key10": "4a4t8VWAfKkFQLMtHcdh55SkxatGUWjSfwQQD2ot9wnWHsaL6JYnW6bpRwn6BuemEU6oDWk4CU85KGgaUvJsCoie",
  "key11": "4LRFcsHuP35HoYc71E9dyVunvGB9ZQR9pMPzZGUMkJJ4p6Fx2YqPBcYphjreqjz1WMQeeQw3bFooYuzWbLsDH97G",
  "key12": "2sRbEEMYaL9BHFT9SZuwYK5H5st8prMyJmeQ3JnPNFwjs5MRAZ1CboRZbZUNhbioANa3z6LyuzGrebPdajSmGKAQ",
  "key13": "3vVSuYWNN7A6uGSxjgukf8XhwUUViVW2C7G8rSfJruUrsCVVHm4oEUTCtcTpeDnU9pxTTHN28H5DsYs42BP5Vdtv",
  "key14": "GWsCZmWsk2dDsCPfTzcXx9nu8TiyupE1fBs2aUB4jHGDrAq9x4eiFoo2NagR6TQE2GzJ69NtQP7pSmpHaMMXvfB",
  "key15": "qSKDnxhKNj7oGdoYYXibCwTWYCYtF3qfHhz5UFSjPCxkWobkwvihoLTKSdAiPDsjsZuPnXoXp8RexsJKRr4YBBQ",
  "key16": "3AJbW6AyVY1NeJccZAiBMX7wEYXikwV29zJXfjvEAJLkcQsUp2WAUha33boZeQrgK1LxkDJj2Fiu3hyxBwb1ooyW",
  "key17": "qMnzmqQSiPqDsVmoVNa1PeddX2sobbPh6yLNqfEQEhgXbGFwjYWfyCi9dVHh3vhxoB4aU5QkR7RXEQng8qZJweD",
  "key18": "pJRn2g2o9DWomZK8rYbR52m3L2JoFgtJpTTPkvdyadQ7hbWuJm17jN95uS8MNedzhyM2MNPdQ9o9Fbvm2LFaNZi",
  "key19": "73Z24wCtS4m9ZG2ikWaGwsEkKAjeXVuBELRAYkcdasodikXgKjnd1K7rF6NoGXfK6k5u8mX94zuKW7QjaBgZWqe",
  "key20": "3pKtTMAhe4Zrr9rAnGaYrrC5UaG4dmfk9tKu9FqGAvA4GySMXEwYUYQ78cVwr9VBtvKxcYpVstQzp34x5bwvvyNc",
  "key21": "AfsD9PZ2j2KfhZ2LWaT6ktU669HycgWpAhxYjg3o9EY9KQezM8b4w7RKcKeXw3VjRfyaGVpVEk9QyQkxUnn7oAZ",
  "key22": "rbE98qhDuT5tLsWgxU2g37zgysvvUUuAg4q9DPZub3EgMNNBggniS9EJVpag8N84jfPUFieNpNqGqVwtC6iXvpD",
  "key23": "41UYcUkRtaFCE9GZWBZZ38ERdnvvd1xtAR87jKV8mdoorsFLGn9JFi91oeDPhretgNmjRiYpqJvMBzEdibfgyPwM",
  "key24": "3uAAeEPhFFwseeHPESwdhrmQ89vqCNctyKPJgZRM6oeNKiP4GHANksaWfd4N4z6sWECEAMgSWwdLJhoDtqiZuxfi",
  "key25": "3ehGwZxXut1eQq8nSrsx9fgxpzYMHyFZEtBSvZndYNTVBKZFMrWWXSTxvF5bpuSt9nwFXBhKFGLoZx2Z4YPC4KEw",
  "key26": "4VDuUsACLa3Mm4aX5ErbsmnZU7UKQYJJxaaeNJrp9kckSUCR1KzHb8KhyQwJVWNFtWVANH7U91YQG17dUTp9Sc8E",
  "key27": "MN2d6AfdbmJRRYyfngXjrUf11eoiuEs9xrmerEVB4ABWyrz5nfNdvj74aJwmdA9QgZ39hsv23hzN5YiQMG4atuu",
  "key28": "4FjkpN5G6VAkrvKTznVY6Gkz39rnsUPcB4DCaKFw4RC4MHuZfqjKWTEMSkeNAoLZEuFPx12QyMiJMst36M4Mctkn",
  "key29": "5kHbejBAhj2sist1GpZBZwfTmadPFR3JVYDCSS7E3DhFW4qMmNxEH73uLc9MJxQptS8EkPfLHTCgMaGVXu5aEQ8Y",
  "key30": "3SRNkpLbzUhZBpdn95vNd9AM5pESsmgpF1sS4xXrBKkWBVJku1KNwaF1NuCbdHyMTmynqmXGL7FPBifpsNsHpzLt",
  "key31": "TjE3HJTsPUpYXWdaLqWcghxgohscAWnQX8XkJiCQg7XftPspwtM4ThzqFxVp6mZnbmtyQdgbyKn5ozQiqXZjg4w",
  "key32": "3SBY8WFrmV9r2xTxvAjP7ZAJiR6WxkQzaRZYqE1eSowKW4q5YBg4d99D9Ue3S3q4iDn3nqA9xqhinSoTv18sjgmq",
  "key33": "66eyNZvx8RPZzFqFc2dM9HLBfuxxo3bsqx6afZnmKTAVimw3Vc6uE7MqnwzZddqUYvU9HXxxnGMfTSzjHQXEdJuY"
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
