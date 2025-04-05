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
    "4F5CToFd5TBe1NDW1ufhW6xdTnS9kv2FkoevmUAaP8p4yV9dSNS7aAkHpyTTuvHfp7AbRv1amS6HAqBVyuhsHV8r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mKQYL5PBLciZkZ4VTrh8pk7qsZAUrdUqTj3TyiNACAxa951nCe1DrY2cQrSqqmaWu7y92AeuUQfcr3EN2bXdr3J",
  "key1": "Dn3LNCjvrM955xJsTzicN2syV1NTHbkefDnFA4m1jXNPuDdPre2e6vM3mqFWSfFgZBVSmU3BrmmytTS3kYxmCu5",
  "key2": "4ThQMjz8G7gZQ3iJFbcjw4odwaEjBP3YfwCBEBGuhuKY9bkfgRpPNi4xYBJuwZt2nNFMMpU8GucuwoaKTbPNvrCc",
  "key3": "59rnhzc42rFaqtjBvT3iZMPJQApBZeL4FZ76B4HSnXS3eEonJZdws9qYgBm7KpmKWgGM8FHtzCa11RyzpqZe3e9i",
  "key4": "K7pe2mCVSwpabbWNELQ2jaaN6MehFKUrSsL6iFpTv6fCt55hufwvPDJkatZeKDkYxjsiomctHQjhQLCyV2n19dn",
  "key5": "mWuYvNygLKi4QDYC2eTLq3FGnytsci9sf4UpM2VW8VUof8iwmQ1UgHZc6yRCeeomzj2pQy4XaiVUqps92D22Zst",
  "key6": "4QdLpSrUYuuwq3eeyS64foeD5FrBRhVET8tL9yJSqkoXgMcrTHZdgaRv2wC5dyMtxMDzxk57pFLT2xZgBfGEAzSL",
  "key7": "2nMPHrqqGnXWM616YwNppCjcek4WeGhsybJ7n2YkLC2PYDQz4wZfBBSmcye1McJvU5gupzQYqgLcy8pSSKgJCisc",
  "key8": "2feEZV62X4NR1dDJbBbEBVMncffxVtA3dqTsTifbGW2NJoKkn66ztNF7PS5tosyCvgqESQ5DbqbcAbbNhD497oQP",
  "key9": "4JJaqGByquWW5cHsPRNs1FFSfBP9Vp6tzP5n4HmjRsTpXg6eUEbn1z2eR5dMBDKgR6rxPF49b62zoHZQENKmQHJm",
  "key10": "56VSerqnVKTnm7NbwbZoCCjnLkd4xY4rp75BYroKtkEADJMyusfgkEMKJaKV7xGcEtMP98SE9bUmmE6NvGaYvEGH",
  "key11": "WVQL4UgxxeDPb14y6j1tAi2SQaCpZTCvPicFmq6gyH8Q1wD39w4N3AGmBLAxDmcvjZa1RyTrBX7Lo6dZnMjRDWV",
  "key12": "a11FZ8EwmyMqxdHbWnVcrM5jw6SN6bTwMT5ZvKc3w4kzqu6icTUPHSLCfYGMbmqSmaRY4qFrrSEb8TLfJPrBWRu",
  "key13": "3zESL7rZHjpFqmX5AxHAAndqN1zFNfbc2YRV3Hc7PQ4dfmtA5VadDrCzyppiTvZrKyfeBVSKMiDvwceKbVHYMGhz",
  "key14": "2XwzjqshvTMYDQDucuSmhENz4xxMiYgRjt3HLCYje3kWMQrJeZyg5GEyhp7s7URjnmSRsCoSehB1x548dnieHEUW",
  "key15": "mz5D6pX9TfNdzwtQNsJsDdsKmjyTGmaHdWHT5AzJKzz46UH1FfDEfRqsh8DjR3NbcaXb7X15dPCvaHXBmv5ZpNq",
  "key16": "394RZEEy6T71wmvWJzitnzZqqzrtjP8i2ZA5Svec6BfRrWreeZu3gGUgBxhVaVZQ1Vgz6YGJHYEy6DfsTfAkYUEJ",
  "key17": "2GeggChzhcRrU7BDDEcndDnE1itsi1FghyuPqwBnT1Dy1z6JN8DoAo82c38cdfwJiNy9uePQv3gSWS6NqMxnmdCZ",
  "key18": "2C1YdYWfPdqFKXWk2hN5H6Y5hJimowYXV117i7ayWdubwpQ3qVDrujeK6EKweHdNsvLx46b9bZiGZEBfFrSkcdhX",
  "key19": "5r7KngdxU7j4eoa6ufnSZEBSbyNhhQbQttySASR1T7nGoHYpBehJCGdRGWFReuJbTffj9W74e2biKVppJeMPJyQ",
  "key20": "4QhDoA8pTrcUj5TUKEW6RC8k4PfKcRQ1h8FCVG1TNQCSySs9LjyPESe8xR3Ka4vsY9MPRvWS2TWE7WSdGMdGCJaP",
  "key21": "5UZgtNSANPgJW8z3WiBwLFrQayhMdvXYDk2nqjaS4VvkH7SUz58QpuPQeSHKKY24N8vwbt1fV52KVBrmP8J1asFd",
  "key22": "ZWK7QjGwMvw8cvBvtxFYR2RtfTxJA3L94RebTzQbMND9E37qjnZo5sx7WViKPBN497aJ933QLdFgxCuQynPA8yX",
  "key23": "5GBELb6YMM5QwAiQb6ZhWkjX73ZBAYpiNFqzE8emWQJuhvqu1kTJMsLVNxuWuRVbWgJczBdi5JE6dUQfVYMytkxC",
  "key24": "2HtfkUpQ51knnAkBnfkDzm1gNkTHRtiA3zPM8NytBq8zLaATseegVuKM9KbvPtz3SyBiBMhKt14tstuachCm6Qg6",
  "key25": "RyWMvqie7barziXHvoG5WvdkMqcLGi6Dcmqw9Kx8uSiMg5MQ7jqUs2fN4H8Q9YKg4nCwnz2w5Xum7vVauudL2Np",
  "key26": "5KdD95jPXhuBkf57Kv4ubkYSwY4LKEaUbAjm9XEttQkFbB26aTdCHepdhe6FPjHMmRw1yMhJVbGUSNj4M8QYJXCx",
  "key27": "471D5QkauQeeN8kk7ySMszdTNCQwzp5EZf888mMPVf3zzCfE86vPQV7WW5pB4WUvykWKCTunCdKfUAdZ8UoUxvc9",
  "key28": "3yifhedE5PMoJTKh5SbYRVNk5baZ5vesz6Z5dnzq629CyvFsYzEdmRdZ1tkV7Pr3re6ewqPsor1wG2K1mc1SeKJi",
  "key29": "5fxxxwNUwEpwTg8oogW2MAwWwJHiWZPnmbok8XtasdvJeborc8X8w9KHMxRccg6779sqLCMj28QSnDA7oHE85sqg",
  "key30": "3S3M5PWGXgjKdwnvGUVUWgomVCpK5nG72fdU8fkxihHbZJeb6d2pKxH4PCu4suGJFHKX3CjBKYWGfZKqRkddANyU",
  "key31": "28A7ScqZcmQZWzok1Fjddjvs9ZpZ7pQ2wo2DCMFx7TVKG1r4zaY6t1StMn7bXBXzBx1Mrd9CGZExLNWTNbu7BktK",
  "key32": "yh3WDXrR2XW1NwyHQTF78K7ugXWMQQ7EsiMy6zMzjmtVuQxZmFGaUooVK9vHQ1Qgx7a15TVZNjKZvE1k5WiwB1L",
  "key33": "cUHdD9RCWtRLgemtjVngJEhwph3QX2md68ybKFxsPZJ9EikwMbmRxTZN8PeMaigyJXxyiCp9r8ixJGE7ZbynpbT",
  "key34": "48fR31PXwz68oaWzSMWB1oZjnUZj8ayVSTJyBSgcVqteFJeLGenRCKaLGCfURdyTwbnjBxvJYQoYPUvX5fxe1xUX",
  "key35": "CoJoNhjfhpD8NLbLDZkbKvG52e3YMnRAr1WaYYSxp4X8zqtAVQsfgPWfsKK32aAibjFwMrjU5tnQm3pbLgqCpRk",
  "key36": "3JrbJJitMVxJ7FQJ8CzbJ2sPH2bHJKH7FREmzCBMNPLzVcsawNqo71snVBUGGBH6hSa2CXtnsJywpzQmJ84MJkgY",
  "key37": "RYtHuU8Mx3Jvg2rnzHQfdEX5v2Z45JgpMQstnBBjGEdpfS6ZSE849WFNUnyRK5CHgQVD8aHTauxHCPCknTuZgBQ",
  "key38": "3iNEKUy9kogaqMdXr3Qh6ayB7xhKAckf51rCPYPGV93A8rX4zG1jmNQWNM15MBgFLLh6s3uHxcnqDqdJPKZgxv8h",
  "key39": "297m7wH2MDTcWyRvPwsSozavN8BvVhyZhYJTGCv5UYaDNxAawDimSxwCmrzp8XMZ53YTP4MdCNgv2bpxNtKu2BsE",
  "key40": "5TrDVxCLPnecpQhx5rf8xy6R33SfEKr8CtNLcFn23tqv39fzEHpCvvfhzbWYkFGRH2WQg7Uia9PHRhzHUgLCSqGh",
  "key41": "4y7gfCRKceP67L91BvLxsAS2w7iaWDSvCEAszdGYRWGF4D1mwi5wXgXFRyNRYUeFmJMGfHuhmpDFjj5yNKrJcAXE",
  "key42": "2C3JWQT4HyTPZXPSJxp5YN3UXhFaX2XwP2YZvTwkyu3hbSkbcLzh8yTgq7xFnNVGC2s1cmD32h5Xia5vq112k414",
  "key43": "3VD2xpZxXj6PbDRgrByqTjQBPYAz5myEHtvSpoKVZAi2AKdCn7meiMDoUwTNXfncHrqut6XvadQ9GVriSL3MvE9x",
  "key44": "5A1bfa3jfjjfYxMN3dawGpNdjYbaen1SVogCdMBJ5WXTiLYbyjm7Qb6o4DLyjDVv8JoX7gc5dqSSNW49STf954za"
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
