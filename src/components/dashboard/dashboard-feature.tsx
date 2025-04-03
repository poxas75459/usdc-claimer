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
    "2iARLgNCWiopLnX98Pgfv4cV4AZ2fWVYsRhEcuRT4YkCKMyBESTSfpa9Sg5vcR3smS4s6hvaaZGBkhuCTyP94Cub"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GkSAUa6LpDee83FL2FGoiomaYJtrShqLQTwejc9MeWW2G5aaB4B4MfTRVB1rSQLppdr5kf4AGcCwaAma69wmF4s",
  "key1": "5jVTDGbdFdGxsZhvix2Run2596xusFowwgboSyx7orQJwWBDL7wQoQTQXLZAuAv1pGceWnLMcKSV6Asc7Jj8DGwq",
  "key2": "4ioQLwX9gn5HPkXPY6t81EeMmxGFCE6sKYa3VqwCsGTro9kFZ2sQiBBjA9hoPFWGfCsWsNf7o3T7VFJ6LagUVcCk",
  "key3": "3DMibGwn5zWSXQysxTWK1BbAtXDMPGEe53Gu9PM9ZYw9SHTnmhpM152RofQLjuGa7bvtkhVgJzXJGQqJmKhvyQof",
  "key4": "2N6vjnh4KnoKvU33sprfZvqz2bdNZFxr4BnsEQBfe9jBun22n9Es3ogVUtC9h2UntMxAfsauJjh3uMyC7oNACDCr",
  "key5": "2Zs2iUyL8hFasJhP75L9xUiPzwCGF5DRstMCh3dZuUycseTXsgzGSfM5SgDsNV9jBY1RCUGP1pbiRqMyvujPjoja",
  "key6": "5jNaNyvCbyjZfFayLYzyBQCBBd2jEgTY37oUut9MUsAGGE8ZEk2rWRELJNWGxR658UUAyRVWiAACzzkxwPVwLtfb",
  "key7": "21SDB9F857EK2VqSJAHcLyFBr5zm8ypJhr3ShY5Jzq92en596EWAR3sRqpaU4PDB6gBpsgsKxcTq6kuVt716CBKS",
  "key8": "5AAfAFQHQSjT2UkEAxd3vgfDjAxFc34yVDswKnwZ9vhMEp1YjwsN6SJ5c4dfXaDh7MJzkyESRn8UYAxVS7B77qNc",
  "key9": "4iZ98ZCKzBPWmguyfAhrjiDa2oFkfJRfLJonHoJpicqHGFui9JxnBFgaB5j9Huvu2rdVXTQV2dYXRUG6v7w1WHHh",
  "key10": "EVCeJcnZV9HwmhjBUH73z63HxAR6TPbKnFZMCuXKt4c2CcMTFHoqd3oyfFRaUThxWCyS4YAZKVyBgXFRS6YVQfo",
  "key11": "2bYxdeQ37HbPYFSFWUmfTVsAeCtCdhmBq5hJ4C5tSxjirc7xSNn3HWCV2P1updQZHkhDKBfywWZd7bqhEBw1p79Z",
  "key12": "aTvgkcbL2VR4AU7wGKjiGZojKmZv8Apt8xQnJMFbPyHaudWDoJKuGR5nsfNf6Bqyf67q5ckJdcfE9MbyMxnM9cL",
  "key13": "4dAENC7otvaqDbf4oJzSnQGiSeupWHGynE6LuH5hSNbqdJLp9d6jieKyepE5LnLGyiYSp79wPBvNGHkUGC2XYVNS",
  "key14": "4iTuwNeZXtgCEEuHsvw7ZaFw7mMLQuNo2d7ymD9de8NwAH8cRKKSFRdcWPsdAqDLFgJZBXEX8kbjPyUxDFG6sScp",
  "key15": "b9sUcuBiK3uMDkL4ZhB1RoEc6fYkc7F2bL4QBCcfU3G7QT4261cnC74Taj92NPjeX7JDH1ZGkwb8rNpjgBFyeys",
  "key16": "2AHkTGi66pnMpp78qwYvB2DDSx1NESjx2EFVqQsNVToL1kaDTX1P1ybpuyzU7V53H3MGX7SXjvw53FGRnzpuFGjz",
  "key17": "2pQ7pTz4Uezp1j6ASzdsUHEy4UUhXskEoKGsAGipqkE7W8jxspxRgJhCNoKX2bwiUZzNrdwewXDF82MpWhq11wuy",
  "key18": "5P2DQwH9c2FYum4gGjz5TALgNehaCDahXvAuzPgYZ6xBhaWNVtCUMFtwjADriuszksmhwHaKoTvht77wFc6Tj62Z",
  "key19": "4m1Q3tCwSf6ggutgognPNKLmJizUcjmCK3XewK55pFKJJ84w46kK7QCgcsrfh1oRKdCPRigptqyjrfzuB4Tec3NJ",
  "key20": "VAExSFiYsAFXVXfXYaNYbXK7EfSDNWj4a7jVQjBVK8UcUZoGqdMd2JQd4qq6K4v9o8sx5brW3TpocXBgS9UVrAH",
  "key21": "CNjgvE4R8GDaP56pmp5sy8ue6id74Ynvkdb52YGAwLt5p2i4hsL1WnybjDDAf1Qboox7bvHtpYCYTheow9uKczJ",
  "key22": "8Cougabr8293qhv9czrDVCeFpAccNCf8KUx56wYyJSrtMf1S6Eu5AdmmrTParm7Zi67xeJu7Qc4VaFbZD1uGdm1",
  "key23": "5NQNrZunkhhW6eEThPgenoiDadLR2oGypp18YSAB6UB5JZrYdYC4MA6KL97hPZ7pq7QBNJb9pFdbnJmxnKKE6bNw",
  "key24": "mxhuJfRNdRD5v4gYY9ahV5xNdo8mATW3uiC677oEM6n7PLTLcHMNh2zaqSN1STAks6Fh9LygWRLX7kqSkcDRX44",
  "key25": "2kvjpHgeysiahQwiNmCWgJ4B8dgMMM5bG1XmNJ7XYgQD6nG5PnSLiidNGkBHHswnGtiBUZP7rZZRFFaxek2U65nB",
  "key26": "5aeG4scPYSBc3WM7CSA2vkAkRehRJzPmR6Lmuug7FWVnwxk6Nq2VoPCtReNpUCQqtYfyp6VjxLVKTwFJtR4uYBvK",
  "key27": "Kbk9TLPU3xEeF3gLcQVDkLMoiCjuNzrvQHCyN4G9zCp9MJkKYeZhy8WJSWA7ujisMWf36uzW7YvS7KLLCC2MrSu",
  "key28": "2WQg3ePAKJqaN2ddBEv8xG7onZo6P5VRbHNsH1zGHTxfXqn77KmgLFrqTYNZ7Q4y1shcUzJLcnQzN553zQmYyFju",
  "key29": "3r2srLzxpmc9DAQRuzZGkk4Xv9JrANxP47tDjZe2LLUN4eEQPFbrCNpCYpccX8J5bipJm52bMeiAMkfsssReQXdU",
  "key30": "5snjaTN9fYEnwByn3tix3tfh3iAaMRurJMBXY2X9DYnzmS1tNEaXtP3cUTtK7SLyfLdTH84oy5vfsQSQdc2Akh5n",
  "key31": "1xysfGhZvShTD5ksZLW56nUQ2XMHswuMFXfToKhuSEyXpEyrabFS4Y5T36FKz14tZrG67C4PkHwsdsMbKb1fVDA",
  "key32": "NiFQvRjFyNijUdAcXmqcDHmU7W559WcvtYE7LSiYTN7hBz6gZ7qtS4j5fiTei8gocNdmfQdH2g9RqY6rUJQGpcD",
  "key33": "5bCW9ViUNZiFvc5N3wdGYkRzjZwmvBicwJgHqhpcXY98cyhQRJm1hoBZmWrG7DvHwmMuM7T9Y9xoFWABXvr4HQ3W",
  "key34": "2euMN8AxtihQ3quyAdx7dLWBWMrgjoMMrD13BmKWP7GKLeu9ip3RnE6LXmAtt9FNXQk6uNKxvM2F7ka4C4kNKTgd",
  "key35": "2trfDFdo7z47ERE18bvZj8t48KzfwKQfJaegQ8ZyqwfQYvMtGeyirX1vPpZe5rk4J7ZUgxGpsTcsboabAtZKtSrZ",
  "key36": "u6MZao85P9vAZjNJgCdmFeHhFNpPQYUQrnczY3hUfCeGg4XpAFUHhqT1KKiYKjxzPn8hzcSfCNYrsyXnQBBd8gF",
  "key37": "66CsBq23YCA1HT1hVHBhMmWP5Jg8C2kQ8YBpKPrcSMCKpzKfKkA2XX7pnKcNbwaosTzVnEZ8awWskHKCvV3n72LZ",
  "key38": "3SJzTJ9s8B3wDjm4kaTKGimxUtL3vVrC5iPfcpbWXTM6QvFx5KPfSXSc1rqEcg1roJroQL717a67Ki5GWvjTk6mA",
  "key39": "HGb2uHo8BYiMFwWNrati2b7DdWk27YVmuQQTSjv3E1fqAmAc5NzPVve4C9bDFPDV2eNcKwEtreeVXzpJyJ9HTAx",
  "key40": "4Bm1ZnHwz2h6xPRSCywhRXMqLiZZPzN7hMVJSmoC5mXwn1RA91Tfr6jsSYTnEqad4faatYNLUxXs5QSAAz2axeWg",
  "key41": "ceYSg2HrNCZ72Lu8sgW73cG3VJKpoqeFLkemcj4oWzuSCkkuGxGrYD6P8V25HQQBLntDH8LsoZgc41bfiXZ6E7q",
  "key42": "4uvjRmoyDx2Af65HBmVKdyk4yn2pJu5YZUK4BB9bZb9Bt4dppKc1DyifvCcbNCLZ3myMR2YHtrJThvEbSQbWj4QL",
  "key43": "4cjB2Z7DF54ed7fgseRwUi6uZHh52KcJuPMz5VRVGmWdTgHLbsCNJTvjfQu78VddR5toUFyyNCqBygxt9F3PLy5c",
  "key44": "2LLXxSMsxwCvH7Y9SGaFancXqVbu2ZnFb33zGGQ3QGLjnbgkbFRtcNWMDJZR6L9DMoh6QFe6GSfE2dF1nFAGY939",
  "key45": "4rSkP3MvX63tQH6WFG51TvvQd7rm7GbMQne8Sh4dTyvGpgg5ne8qrjnqUczGHKR7iMhFYhjX4SEV3zNDFpLx26oP",
  "key46": "4u1yJRMnkUpEgrTCLFxZ4bjEkgy2L39f5QNNnYVT34qDZ8wGeRH2EHpFLbTBmJFxmGLuLMYL2cXLLx2A8Ke9gPKx",
  "key47": "2vmvXh1r6UZbBc1uMQn9UE96uvyjSXmNfaz1ZjeGm1K1GiynTK9DveYCmMGzYjmsUEmLVChUE97M9cozGxgjJqXy",
  "key48": "4bZe6fKbi5yDkCHaJAF5EFoLNhYhsSn4F9TvJnEyp22cKz2v5KbxxFvGozrZDLN2LqYCKKrajveTsmCQvUeNALVf",
  "key49": "5wB7vCrxU7fgYd41EvFF3bxWH4RWRHFuJDW8vnzNGuVuctqoR7nESzpbADEJ8SikZGTV6T95CEryRkNEreBDgRxn"
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
