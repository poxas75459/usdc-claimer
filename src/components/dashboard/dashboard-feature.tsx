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
    "3H5jT8KxNao3qbD6J331eDebcwTUmAD5m1FwNxyWnEYs42mMW4vBp9UXfbxQKKE5hBVKMabyFTUd8uqFj9CnkZrz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pNjvRZe1PysrGoZxFUKHjp5izuEBoZTJdfFcRmGaCUWdFm2TfLr2QfrwkkgQBcrHwPywuRhJBaiHWmHig5FxK4Z",
  "key1": "65GZfiWLFJ4QoGzDS7A7p86bbytsQYqQSrF15v7V9prR4ubYtzfPt6DA9onmdNtARfGMcZuu3PT1RThtkWnw1TWy",
  "key2": "EXsX2A3fK74qDFfH5yTPi2bpGzV2tdVrrPEdKaWhbevgfEHCZRhNbqgr9iYSMi7MSBFk8hAAiJgr3j3fFVyT74Y",
  "key3": "5NJxcg2TRfZX63yE7uWAAprvEakgKy7143Ry18o1ysXagvSQ7AsHS6NRLBKtEj3KhYWKTGuBgFmUkmSuK7V8FudR",
  "key4": "pajPYVizpBzrLA3wR5QUt2XBsy4ihNEfRdsCBLSCPunArw576mTV5FwDUazEdnhWCT4ZmhX7GRZfxYUFrUPsBDX",
  "key5": "3AHG88haeMz6bKqkm54nGvMZWPFwvQAYmKeUzUubeVdJiaecpKqK9EK5QvdTfvK7GdivpHVmyx75SuFVYeE4pkFc",
  "key6": "bJxPssGEhu2ufLybwqLSWWWpbQKXSwqUVFyMnGcdrD4KM14mtSjbvp5y9dp88DTnpciXZLSZNA5LRVpjkhfTE4j",
  "key7": "2a8PTtGuKUp5XA6QczFcnEax6xtb52GtpVdQvjp8hFaCn43N1M72TRxdPKE6gAedeESwv8RN3r86onbTe19Ambdx",
  "key8": "62eAzLtzjan62cJzQjhb5NfE14Bi4h6Coc5eyoV7RtZodvxH4u14gztwLYsPFZBGvBDb77ksn5sfXpFNmPec8SFm",
  "key9": "44xoxJomFTKn8EWZRNZrZNYo59nvE2q7ueBZzy1ziEbf1CiQUCgakzCYDtEsoZdU6Sz8AimzhUbTjVSjhw8x1dqE",
  "key10": "2YRzQf4WVxmPU5y3vAgzHJzbL8EiLhmFHW7Jftm2naGtetPzdgY6MdmN3XmzXvvbz6zCqjPmXwm2zGkhuGBnDsav",
  "key11": "tBw9hBf79urKCU8Zx7hNrfPGNHYtCbdyRecfwjyCXN4NEKVsmsgWBzuGkx71PzEmYPQoKDY4zCkfjWq6pS8qUpQ",
  "key12": "4iBzYpU3zY33LMLtqdtGFBav3Giue1Xfg68oVm9ev4XEtUc3y8zN9XcmfLTtWjizR7o6P97ajZ2bzinpS8YptxLM",
  "key13": "4t8N6ac6GifwYnSsfwUKoduj1SpzEpRhS87V7niejJUB6NdTKKJ88r2oGwspGgU9wdDVu2LdeUYMtsryHoP4wHdG",
  "key14": "5ceWH4qwZJBzcrKBNZ3aRot5MLB5WYAw3bqog6rZ9BBDs2M7b15Wn5jNX4Dwk7gkLacsSoAw2ddaUNcqKmEhtxNv",
  "key15": "3NMiiZTPAxNEysNpNxerSct8zioGRKBPAHb3bTdxA1XzkmvyxcZCoQseTM89dqAMd5bmdnekr4fdyaPYSEU1KS4R",
  "key16": "88XSP19GEWnxccHsyjxwMa5RWTcVrikfxQwqrDK4FycAgLYiP4r1xCoeuLHpQWu2EGUnQnDsrT4AjhSRJUq1mte",
  "key17": "3qfCFgPutnBKjYzke8V1hmoUMRmbEGYboMycZJxiJUMTEjifKbT5txqB3tpF1igdvjFTMfcJwCKRTzGm8yjJxuHt",
  "key18": "621KWXAgtVUVz1dADDXV1uQesC7zJeMwpqQnZHuFNka6tRiXVxtQvyCWJqMTjoo8PeLPYR63xJud2v6VL2yCXygS",
  "key19": "3KVQZ6PL5ACc2zyq4Js6h6Pk8TLbUvxFtLBWq3LL3UWoZTnmw5bjgRR8G8CzhWQi9HPfceLLbxmPNDMGA7qWz6Hf",
  "key20": "fc5ox7o9MRwb1masBHps3hs6Ef122uwoE8BbuvXXMHy7awzhyrptNiRZJ2QxPrfRaCDLq5ENVpf48FMMCEjjueb",
  "key21": "3mYMJD1j6kQ4dT89rpe6Sn8Z8dtJhYfF8XNDjVQ122RUpeditAUoHTpzE1hoYSU4e61Bo4M9vApJy7vWfxXkQYAa",
  "key22": "4LbzfhbcZi6ehqcRzRAhsxaXNtP7R7gdUNanv8NZSzHB7LiRhMmz148nMw3DyDAUYJG7Q8oXrYYacQvm28zC7eSA",
  "key23": "gBhgioFx1qrprw9yAyRoN2mWB7Tjj7BVwmwe1LdK8hXGAMUZBaP7zFaCh3HXTqyivvwDLa5CHfvVU4FhQzYXgMP",
  "key24": "5D54ZkwUwnRnYe6ok8kgJzRuY2bs5rtEWyiakRagwMM5a25YgUxBB9pZXYci2GWGc7jh7DgpAexzcnjpp8ZgriTD",
  "key25": "k6bbc8ebNgHZeK784gKX7aWNnC3LjRBHj2iSL46RtFTb4eCXkmJX7vcaz6Vsduy1Dp7EvaErg8RWZV9dfKYWL3E",
  "key26": "59vTn6oX9kEaC6DWEjD2fHZs6oy19TK3X827s6ACJ9KvRvqUKgjtXQho1zv8PCw1DGARyNGhcEALCQQ3mKgaqqor",
  "key27": "2aKXX5ABYcdrh8tFk9vYkcvnZszZxpsszE1JHZg4HFkYh742NArSaLUBQq8rFiEqCftEDpATXVN7cxgZSimCWRZ5",
  "key28": "39XMfo6RgSXqpQBX4jEFcuRiBTYP87YTEDtMsVsAaQhaySTpyDcpLhZSkL5A1vae3XzK37Y7EfnFYGaWWTfWxvfH",
  "key29": "2MZdbDYtDtQNHaSooduwC4CyFR2eV8myGix2iYip4hzedbu49Shaqc7oo3BxUhocExPXwFXg1kSdnzG5JsbWfza2",
  "key30": "n9sJoeP7L77Bq3P19VY46TkoFo9zrVrimmebFTPNvwnm83CaqDxemZcXdqN63mrkCmaL5DsBvKe88NnAGxCsbrv",
  "key31": "3bQh1XPnwmVgxY5UjPaXQ97uQdnhLtVRnnkRfF6ckSGddMynSK2DzqUTyyhwxvTmeV5crp4VQDXMUAX5tiy3KRBF",
  "key32": "371R82XtcFBZy2mdnVv5x7HmywH8GxJoo4YAD8YspXVQd85YsULxy1qmvpvAi74P66WxjeV9sjfmjRvUp588s9zt",
  "key33": "5eKXd3o3CWqDstiNYSL68y1D6wAjJskXKFCyQUJZHw8WKb4StSmgn8vtZS9PDzLpZdKkW4B2AgrtoRNQMB3ToN6i",
  "key34": "2KsBUPE1T2pXvj7oNBV4xYZ6FvrNB9pDDfpB9p1SSVi7DbZ6y9Ax28p8NJgyEkMLrwJ2gPpbsDMHEM1nvvhmV2jf",
  "key35": "2hJxRwYtew63gyzAr4Y26Xi4k5Hc1rfG5ihaBRe4993Mm3bNmnjjRSQk3TUT2oNENSvzNsQsda8UVUtQfxJxrdtf",
  "key36": "5mM5kx2XYRieUk3c1vsKnhxrnhD5HXf5hjcwzpRABNoZEmzWGBzBSu2MPviN5vm5AG8NXXkQjGVZcGbAKbdov8fq",
  "key37": "3HMfxw7QHc8Cds51jgXqzvB6hdRBdg7MxqPwLHxVjduNXVgQnX1nk7gSgeQpyudbQaCRW7fuZfcTdz7VpFqCsTSv",
  "key38": "3pAbwK5mQ6iTz4JzXKs2YeXB9EsRbD5ebWdsqD7a9AzJ8mvmaPY89aPdgUyLbRcmieF3SzKjsot8H1C82LJm7Wo4",
  "key39": "3FGNq4kSDCFb1KjWnbJDedxP9GSQ6ZszsEapUbWjWHrZwKmCvDUUjtGipE91QnS9nvmM22NV11Ymoq4tmWvYS9Lc",
  "key40": "9cp1VqETeBZ3dLcQq4tXox2iKghrZqBKmGnU8dUXsWgaeQgXYKGsQ6CdTeFuEXCwMCQrtHFrH1y9sN46N6peFt8",
  "key41": "3R7VgghJjfEb5hcpwuPVr28Bj9iVQHuzjdKqkAtBrWKhB2BBPUTeB55HWfbjci86N2GTMjDrXCEGPC9jGPkznNW8"
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
