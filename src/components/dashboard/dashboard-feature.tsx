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
    "3NqP89pGDxTL1XePGwW3QghboDzucqPbGn1bkhcmgxZo9gf4phPFDqidYNsR6BBgP1E3izuQtsn5khfvy6tUjk8i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PD141a9cgDmrqsVa9GsWzuomcu8mKMGHQbqTveT1LL5RrY7dbzn9D9Mitp6THRZxYxAoFa63uvvUJYKSCHJzrAJ",
  "key1": "2T7mm5d57EPwM4Uvn28vbNu2KabzmEghxGcCgZAF7XENACjkArf9EW8vJiSnk9AZkhnxj2dkvHoh2Vfcwq21NTrb",
  "key2": "5RmrRRujAPyy7yvTtkDfdz5PbPaFf9Dp7ocAbBxi3jWVsj5NaJNXSHzP4BKFq1J7ERYwXudoruX4E8GCCWNoGNXt",
  "key3": "3fJi2wBfcXW2ETytqYBkVTSKeUCrXNJNzrKwGbqyBtBxGvzaDM5TjFUQ4b6CS8LtMXg4YMAYbLPdctMUn9iZcnTC",
  "key4": "f38THueY2ea3miaN5EBjktpdWnVGpkKxAcMeKLNZhqCfEAQePaj3c6EFXxhrikxUih1KseFwW8LrJoiKamzKQ2G",
  "key5": "KsP8ikBz3oijv9B5Nh8msP2EvWDQTGxjWsM8Lg64PQSAKMEPyfgEbj1ncpQM6qcvTscURufzQNbdmYV8rUmydET",
  "key6": "3zRPUwwJT94mzrBMsjBkgX7LUf19bpvhztFr5F5X86WQXm7bvp2xcotFfPySnBwzhZ8Y3uWf4A4gbJwhAs8YfLzm",
  "key7": "pUKS6kBFRQmcfFw2af5xdXjzYcKtuPWMpVboaue4Zo41btgUh6QCkJkgE7egirgYCDmWdtv6oyFbGZzPJPF6Cfu",
  "key8": "dSNn9zYvfSYxp7Eer36duqCAfyVeRDZtkRmm7MfmmrRqeWJKADjVEwRXrC5dkM1CGjkKgtpeqqEs8K4SPoyDsLe",
  "key9": "44v9MzBzkKM13D83U2VnsQmMiNAKQH7UGXUXfVAvNw16E9MPRWG9L6vWBwNWtEYt5e3f8UkojxzZEyFKY3y7ofsz",
  "key10": "4FqUFrH4x46fUfAUjGgHpWsEQMjkgPwcA8wJ6Eq7B97r2ggrnJdhd8XfYrXhRZBSL7QvFLy8RroYYNrqdT1b2m5G",
  "key11": "2GjYTaaGDFitD16r7En2QGWVeNfDT8jYENtQS6RaVtwoNkebiT2jgEdVG63dJPu132gxFV1GpGXdev5yHxy8Racp",
  "key12": "2dSKqA6Wm6E5umuQz7KTUKH7FuGf35CYChK5ojDhVwsv6eFGr2LVmffkKrFUrKVyMudJaScmZv9xakrFquPQ1QKN",
  "key13": "2nD3bxiFdBueEA7k8paGMWn1wEjDsbuwHb3wVx4NfQnd4bYXePXcqaUMb12CGJoqc8mvzQUwZLv9qJXdjrXrWcwd",
  "key14": "3esKYUHxr9bT5UtjakLmULq3TziQWtdoDUtT2XRnHVnZ1FPWsTXWbRwQ7n1Ji6fWCRSfgPSSGjL7kGvetFrmCGbt",
  "key15": "2VMkmTZsNDgNEbukZHpk3KKXgKtGHHrfAPppTZLoCagYsT8scQDC9UMNDfquVSawtPfjDsuc2f6ttWFQwTaVnNxS",
  "key16": "65UDyFCdFuEzTWViuTL5NsqhBAuKMFE9tpB4MErezHNCgtRTwnzcAm2gw6cApwcP9mJuPnjj7yUyfX5XYgdRtLAm",
  "key17": "4LqBRGGKbakUKs76Uitn62SAjwmxapJzyEQCMxc2jiNiUapZWGjt2gX3HUQgEq23d8G47LUqW9rK8SQcJEzntEBZ",
  "key18": "3XiyyaKRSC82dMEW1zBDFB8W3BZgxEoNkmYgZqXT36y15RfPwyornnmPupwPGyFPY94nnCZoFjF2VLcw4PJXLn1Y",
  "key19": "zVh4J39q6oqsdHf5Q51RCwA1VSjAyMzSxS1BjcAD2U3c48v4MzU1mPT7MTUSoVyjG6bQgjMAHszc1FauanhQASY",
  "key20": "3oVAkqJHW37nyvtxJzntA3Wc5SM5umy6rmD96goZCyU6TeaUTdJpnZxdNKYS5izkh249jEjHMwz1nBmS2yQTMXdR",
  "key21": "2Bu4dC1Yzu45azv3fgLQhebMWajmDmoL7fXA6WZEovPFGSFabfJrS4R3JxC82o2K6LjhVKV6226UFuTHegyKjrJc",
  "key22": "4x2wh6w6mCND6jkG9W4PjQTDnARsVGDL4nwUKEtP9AALfTD1e1gJ4JHJmj3J79TGfB47o3s8XT5NpQ7C5zEwcoqD",
  "key23": "5HEUV3MUfuax97v1XXBEosVhgX1BHR3hEatnESQaEav4n19HYW9J2XWyMyGhVdmU9qYv68hDUK7wb3SB2D38bRgU",
  "key24": "3mNhmoAnjyrvuymj9A8pgU3Z3AxnRELBzRKeeW2vtuGm5pQaLWv6sgyyAUeHdJP7o3j22b4bBAhajZqVV4UKxRbU",
  "key25": "38ZQURSQZm2bE4854AFQ6rXKzfhGzYdurmJPcYWmzq2VhNVumuyoZuEGwBmh1BJyrhcnXJJur85Po93siSe37CrV",
  "key26": "ADLxu3C1My57FxFjLQD3CKrK8TBFjyAW244nju374eqQfsYZR2LiHRQ8oHSsWP3sZ4VQSntGZsRtVJjSadoeo59",
  "key27": "2Y5cSgThKgaWX597daoRPm8WppnDjjX9edmWZer9RKQ3mXTduc2R7txjSq8NNX9VgiLytE51gbu595FHXQdsbXw",
  "key28": "5KdVk7BRPqFKah4wF7jhUMdqDdS3arZaKsnDaeBsYnhHn5i2y4YgqC7uQ7NTmXHGU4kJtoHmESx1VU1FxBjiq2NY",
  "key29": "4BuweAzhkq2uRaxnYrrqr2uxnsn7gEDkm8DDyN6m6ALrF9TzEJ7YQtsPWd18T7ckFbc5JRifYMJx1KG5wP1A9rUQ",
  "key30": "DTnq5yJo7v229hh18exh3WDDuZEbgg3qWS3Xf7Fz9WUN4eQuFsUYojDgGcAekj92D9Bk1NbLYEqvMzRryofZvme",
  "key31": "dJQhw55GaF6amUcLefU8ohq25xXG2su94cB4cjGmd5vZE6RN3RtpKAdtUAVH7YhYmqxCcG9MNcLRVZZSTV7dqMc",
  "key32": "5k8cFuGvvZbd6m5LQHZdCvTAQiaNfFMAdxBHJjbHGmZAbEK7giMaRrL21XBvFiPgTRhVphSy6Yf7oHV4VZ2qNFAz",
  "key33": "5ZWruLe64rKCwrtV88fk8cYT4L2o5BimZjc6MNwoJvscFk9fHodEPDUJArPEo5zhLn8VJNYMcb6JKJYPMCxVHskB",
  "key34": "2712iEKi5KZteuHhBwVLxbTHPPyj7tjo4okU2pKS97wDZbEAnfnhe8cEQCqBWx84k7Wnb5wn5cVfVoNYjMtTmjmT",
  "key35": "3gVutE29y1HvDGK1r1P7nBQ9xNuA1K9udbPRay4u1aUHr8vrKPktfhidsYTz2nreBY3P1srZkaMEfLA4XXPjjSEd",
  "key36": "GjUiqpQikwKsZTxVxhsBuM3T4i1HxZCwpfkPn1yGVVE6saJCJFZjmhv5qgL4AJy7jSZaGJnp6hzqYopWMHRTdeG",
  "key37": "4ZSavr4iTGNsn9KLbD2yw1ksfsWBCrNKmZHWyv2jA8bAWKy5Dcj15Nxw4Muy4tpg9tinzCjTDV6b1kMN4C9Kfd86",
  "key38": "5QegaZvKWScpEoiUjmqotn43ZQt3UaDTjP5pDH31BgMXpAu1qEPWa48nrWYCYN3g5Sjxwr4v4xgBqP8J3sZevjQ2",
  "key39": "HqCMPxJWzTx3SQc6UrGYyFhE914iXXW1zQJKa8uGUCeM2uwMbgM2HveBU8XecCjzcbnWKiMh187saRThnjJWc5n",
  "key40": "2F7prjTfjx7mHKH81ksmpscxeHEjjKZ5QANaSNGoJys2fQzXN7mksLhv6ppfmj9K5mJfnXZhRXMi3sX7mQM5HknM",
  "key41": "5WtPqtFDkYmxV3axAQhZ5QCoEiLzaWwhQiTYGD5TL8s2cFGKbW8Jfzu7fmwRiEcWD3g3MnCz9KHEKc55awxwx8sP",
  "key42": "29PLQjyxxb9JN5w1NHS71XZZaHuxKjucHFzMPAUynq7qU8Esw9vDjbKkXgk9kQyw54QgGyq6uT3ykK29j4uuvB19",
  "key43": "4TDzRn6rR1MmQRN4EBmpU8E14A5DbD47oQkb6mBEw6WBxM2EyiXG1mCiK5eJYyxWbuQipb7tkJwBmG2Xi74vE4zv",
  "key44": "4GppGWvBjg6D7nwv9gArAYnd6xdVQSkpJ9Y53N7R9i3BsVTZe7SAmGqDAsG7UQRPNqb9XVcbKj5LSrW7S6CNi5js",
  "key45": "5MEFtFYGrbygeU14pRY6arbHMyNas8mwgdALspCQ7H7oMacZS32p4qyfbKeMub1NxCGz764rSenbUcR9BA5hayox",
  "key46": "3uW4sVNXFnsgBt6B1xWaPduCm2JACX6CbksNmaNwdSvrAjqJ9W16moZGZdi4Xdie2htjre36E59bzDmL8TmUfoNY"
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
