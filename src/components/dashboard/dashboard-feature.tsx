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
    "9zR8QpEf7JhAAFjR1jjySGCLpHAAB4DdVGfiCWsWDQ44qCgdNrf4gogWdTASxJzCxpFjL1wtioWjMtAcoJgsn9g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ufg6uSyAMadw36MgPacXzr24LGAHELijrZbJXrEaQHYpue7AAEBMp1mUD7bmK5xrTAPiep9NvRX1NeTEpRuYf6C",
  "key1": "2syeCD4mQ6GKytYH8fRyeRp3bQ55ccWtAYbCcYutJmLbzCdP7qWFieDNth6m46qBzCRHQyaAKCpUxQiNEMCVCcq",
  "key2": "4EkHvCmYXKd2rSkGVQZsMDtv271m4Ci3v6dkfaDi3UAt1AB7wQ4bExCQsru6D6s4nBm9bReKQ9gpEZWuEHcKr5zj",
  "key3": "3xpzKe6n4fbSgAtkSMZ5tdddm1XsyS6fnGS6NZrUyYmXuSy3Bv4eyR9fZP3ycjtg6ZvqGN9MHQV8Dk5853yn2QSA",
  "key4": "2t3nCWdhjZFm16M1fdDxdhfYYdTp5gk8WACUj9X1BL6JdE2imWpVZwRjGnsxxn4qo23MbYTkqULAqGZoZogzeSPZ",
  "key5": "y7hVTs5LA4dr926FCaviNSV67roMZdnuQ9ff4vD4Jz82a8Hnptkr2Fk996FofKynpTrmUi1eZToSiaZngprVJAH",
  "key6": "ZWyNziYboDayULCS3HBvdb4s8KB3D6k7LfD26y3a9LQVK1fmcf1UgsaykdFdvYQKxtBM4p3pZGcWMewKA9kfQaZ",
  "key7": "3oAKyhcPmuRAnp11LuPWgigotLySc7sARHQwdreevfiTkfJPUzeu4U8MFH8rh7ZfnP48JpuvYW8K6tfN8b8fcsrU",
  "key8": "1hJ9i4ZS8855Wtd5gN5su5JFPL3zZiJFUkGB9dcB46yvkXcHKrdUZxzfoVfKYDH9iccDTBm1SuWg682yyuv3oFf",
  "key9": "2gCJt7FruhcEz2gfML9CYnYi2kLHfMpYYHDUQ6pC996kLRyk4fVa17g81GG4qyB7a1wwvU9uycwx3YnHVToPKuNR",
  "key10": "4gwggKy8sg6SxFpyihUQ1cpVVtmwbgDVtNRLZkpXQDK2w7qV1vETZxcndHZsZJSYzAiKGc9jopdGYDPqCF539ig6",
  "key11": "5E58BYVKF1HGCXKbzonxza6YQqTqyHoodNabwx33HM64pVCFKWNb5x5J7SEBNGBPdsKL5HsHGgxE14CaNhEqRtJY",
  "key12": "4rU5o4XXrC7MRxbrayHe227WqpThKtQTiEoMoaV4aL8Ys2PCY25niZhYKcTa45PhgrPgBM7mrVUFKWUV4RW3phMk",
  "key13": "2nYLHLrczCttqn4woU4uoFWmT8oaz7zRRnhDo3pf3U7tWjut4KMHK8hX6pWVE2amKep45zZqGgPYxwHF4PduzLQu",
  "key14": "4JrMuLCLCm6fFQKKjavpCaie7Lnq8PNoNUuQHBLcsz4N5fcAk7K28xuppqWT3YkTPBBhY8m5DKmjMYFnSS8rPdR3",
  "key15": "3VEh7eLsJSe4CNg5whWuR2q2r8QgpaWxhNwCcFRT5X3kjjj7RH37JAerJpqXDXZyfxAAaz7J5Dh8LVzSXdKRrtA2",
  "key16": "21ujVTdkDiw9dcEy6f24iZ1ZFNrZoAqJK5Faswr5NDE1bk1uAN7Z6mabSXbXfPNXGTD1PfqVCA81pZ1sE3ixFxQM",
  "key17": "2S2Wu5QG6zWNKfChrfyJqNwQQM3ZogSqavJv88B1ma3cCYEsALgCz5WzGEtd75SFJHgYV6uyNVbDTYS9PHYhswcx",
  "key18": "619bHPVAuN4fbMAJSCoi8nERfVtYZ9iQxb4Jp4miriGuwyGpCBynHR4Vd8y32a8yUhBVi6izb5aUpadNF4FfPtNj",
  "key19": "52AJAwEb4jAcxN9q9m6nSzQG2PfnSCAZXo71HDGYGfesQtGgxvSrSftoNDZ9oSCaBNX3XMmacfvogcFCsf3Re6Jy",
  "key20": "5fprUnZydL6tKsoF8PuGLqAri1LzJsnKEwFQ2rEviW28TDLqtX3hA9G344QEXbgxivN58fAGkGrRMRtMvgnhQ3Gj",
  "key21": "9WE6SLKDqXW5V46sY53rnJyVHUhk9w1VQTK5XFpeaE49CKKN1aZfA4YhQtsyHsef686qCarAFh3hSHQVzfnaDi5",
  "key22": "2zePcSMQRjyY8nHYLRwVCX5ECt89x2GixTfGPzbBvgfJ53o5AZ43uDfEDbzvKAjfT8g2tamgKhWRrgVxshJCKAZ6",
  "key23": "3FnEzfEuxxPrqWRhSSnuqn8HA6zpv8tcFK1CjjkZRxQNLjSd2gJ883FJ2Ktnndv5oUJT89oukqmXwgdQkp4SjVoR",
  "key24": "4hBvoCMiZM15CkNbtHBfpLay1kv4qcyvpa9EcznGzp3VEXFQEcnjmH1Tcq8nUUnSY7DEY1aTQo1bamXKEJkZUSiL",
  "key25": "2GF51nqFwymXvKimVq2ifhWBpV85LtUrKeKQDEF3N3tz4EudvciPGmyr8Vx2GPvKj8e4QAShp82Bg5ED8j581MMA",
  "key26": "36QsnzLT6EAnksSGgZgAxYk3GLzi1HhzXCVN7VtC9EbkPqMie2H3E9NxfvoJHcBHbEbsLZSg99KSTJLzaePoMVFL",
  "key27": "5TYcAEmwxRRzs6kWjqBrNm35o7bX9qbyT2K7X2V7W2nts8Fc5ewnWpP9WrGJjEamLp3vuzeK5SdB39zzEWJMgKDB",
  "key28": "4P1mT1U5fpX5XktTuSwsg5354oVppe5AQv3PLvBSfiPCjLgXcTsKNucVy2WTLgAu4q1VZCB38K6krEjFipeCxd2R",
  "key29": "62Yo5gEtfrFb1uNvs1oMNdhp9y78ad46dzCS6PtJ1ATTVNPAzoTLoa7aSAeTSxD6BRmiqWwPnavtxPqgkuEMbYFd",
  "key30": "3ZWpvHmYQ5TmyYFUjZZ96RYpNfu6BDBackVUjCLBjAoo5um7JVuubT3vwrJUYPjXrBpxkSXv92QtnfeW7JNBwsJ",
  "key31": "3ZcSfyiR6rRNvk9Dxnb3ZT5gLR3Y2EHBuGidiG97WSfPExiVF1vYVEqkyRz1J23Xyux1MksT7V6uWkVEmmRx8NAH",
  "key32": "39bmLveye4eAg5cjLZe5DqxKSeRsfpm2TRDAbpZJxNdAKucQ2pZxzhLnzCSQ2sS5jwiC9U7KRR9Z8V7bJATtk8Zv",
  "key33": "32zMjBng7syfQwe1ebQhWY6yjSSrEiRTPoDpghwW8DbHp5dQh7mZJofTeeSsP6AhMgM7ZN9whVRTyB3trSyE5xQR",
  "key34": "khRBtKJJQYGbE8DAPf9whPwTtD89Va6ksSeHG8B8zhuDVnjrUeeuk7pfVpCxdNRgutt68nXMQ8HeyiugPxYegmL",
  "key35": "5dUZvdtRcizjxErrym5xRGp2A6nimxb65wxkxjmk1Qsce2A4xcYZHEqhXxVtw3q8bfRPLwbr4rfUmpApGaA9ZgGH",
  "key36": "5K6mqb6kEKEXAVjbWWdNsL9dudPaAEwixWavZ9JP9gGz2uoWnhu9QWvJerMLXZwCK8iwpknxbQPwghyznvkXo6Xa",
  "key37": "26rjLawpWMKACt1SbZi4Fx9hJNUYAwk43o7i7TyxRTP85RQQr2Qo1N4tXuo8nSRtbdphWD1gDnFbs6MMM3SoNhUG",
  "key38": "5i14r41cB2hq1YBN14XHfjKUu2qETCqpadTqe4N5f7NaduC1GFozfACDZ7a4ug56XThDTpuDrYDN1GCsuJwgb9rg",
  "key39": "2AmK8AW7S72dB25MVQJxKe83oEeThacTjRv1cuK5YUqLgsYqY5Gry8AoP85EXH3XSmDvuc6i29AFsNqzGQT5pQuq",
  "key40": "5wW62BLTxdT3EPqK2YKoKzp6a1nGfyDGjLSnsYhJ4RQVcFYvZmWsWYhKs8faCwrUiUUcurhdHGKHu5vEuYckRW3s",
  "key41": "qnSb86BttXh1Rd3vxg3J3z3XYobNeNahTABWoheKg1vaz1RnFYbe1gL3JyHGtVfFCtZqAdu1b1usL714JCyW7qX",
  "key42": "5Q53gL4JAoXqcsujJVdRmmgg6HgwVACMt7YDWf13URawhio1kwA6EqteRhqVAAz9xLdaswtX1PiiGLZsLPLwFgfm",
  "key43": "TFZdgRutynK8da8DTodH1fbTQDcv5tkMetUXbUczeDxgVDvQcv7SDXxjaH6i2pn7E65dNvFw59sQgVFKxmvi3jo",
  "key44": "3c3Hob3swhUgK8r7LUzQFSDuJBBhrhH1uAXixQAcjZQcKJduwhW9ExKvucHpfdvDTTxHv9tczxdaU35gz1HFC5g8"
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
