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
    "5VFtXq7rVDmbbLKmRtmJBvB3q4dMB5yEqAE3EsVqU9xBQ3p6uMbVeZTdRWoUKL6ZaqtcvHkgmEBErbfirtJffQ2U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fnVeEAXvMWFZL9cyS8kf21pK48FUcV2RojHiC8pshCnJjHeqTsPAF85dwjV9zrSj1nBiCrU5obUab1bz4icSUGX",
  "key1": "4XynDj6U94QeyctXUQTK3HNJQaZ9H1co8wpzQhhaHz1pEkn6tFmkh5oNLqs9mrb4ePaHuP9GLeHgMJ8ggV8B6C34",
  "key2": "5uNnXSShaN2W2UdpJ4dgcszuNS7A72k4LLcfmyJ5GXS4B95oNqZKkXtqydx6YsiB3A5CEmSN5LnUg1KiQv9rG8YZ",
  "key3": "4Ycs2xePn5cPiZ7mtGeHjaEC2XCRTrc6ao9ZJuondNwxrWQxYMT6HFX2dGUvdRY9rc4fwq5B49BxbQN6yzcBdwHv",
  "key4": "2Sch46MaHT9Fk1Anw9hDa3xKXyYQQa5fh98S6uswfv85jEVR3V93SoM5mHks5gPm5Ub81WrnP81LocWRSDG6o7oh",
  "key5": "GW6GTyV5tXRGTaANJ1LLPDVJi5j2dM1Mqwnf7tDqhR7sEU9YzMpukKMJe1kMFwJAiLqGS5mmRvxE5SMvG7F1aok",
  "key6": "5e9F6TrPnSzJwkNcXrWiTivxqGEp7QFHWwHciqXiTAoC4k8vNPPUpvWjnEhjTHo6mFZy2jR2atQkSjoHzKZCz5v8",
  "key7": "2V7Lgxb3VnCj2zTFf46yUooQaaoJSQX82s4rkAYSGCo1Y2dcxPAJ5vh6u5joJPMsrBvycSnnjKmGgktYCcAHaMBp",
  "key8": "2SWobzpZphsjpR4NygwGPagFJf3WhyQ1PzEqvwQWwhRXYrg1GoVfex6FSBS6L2vXQA7Nhfppob51QU736aqqGCT7",
  "key9": "4rpwnYzNeM6dGHd6ygVMozsG5T8CLjrYeFNmBgtNCibguc7YAZS83giTKhPViAmkqrgxQaxMRuh3gLn6X3kB4hyy",
  "key10": "2rkAWcXxW8sP7M88Y2qsfgjpatDHfkQPxFcmUGHjZGt9HEZc7niSKywsDwk2ZECS5F7FHrDeSgCH4gyGxKRpMsD1",
  "key11": "5BNUAjjuwfCvwkXGRsA9HxNjZTtD1FwnKzcuT2hG1ARiQeCw6aQc4KijW4VCbWvWUTfNqR1JLf5R8CdTvhBoqRW4",
  "key12": "3uHGddWFGgbsAJUkGxEe6zConisvXqMTk5NPq7LGe2DDgx7pJNUo9BHNkrEov1pt8HoH25hJF7s7uBAgf9NAbykh",
  "key13": "5rgSPsyw91HCrKAfM9XFREZpZ2nqV9Z1hfwqtgP4j2wovuppjoab4iUG4VQNGov2fUTfSsh3K4aWuKHgHESykEgz",
  "key14": "4CMUqLr2PshQznAzYrWsiZQq5Yr996Z4V6TLWKqK7rF9skdCnapu2R94Bn2jTgY8ZWqsjGYErgDEgjUatsdcL1fm",
  "key15": "ZoXFaqhgDzQLEYisA9vWrBLHXeaJJupSa6f5E13NSCySwovj7e8tnC75sqJVb5wwjGAguSghziXTke6Kmv4vNGx",
  "key16": "5GH9nxrdRzdi7FzjwNa6qFAmug9AfHtm3Me9HnFUfvWQJPfhY8vFz1tkQNpve3FYdzMGcggEUx4D3BHwAHi6oQ7M",
  "key17": "4NCNjDd369pn2u9Ng32KffvLJJ1nM6SUMuyu5dnvrpCKnECP7nnUhjbTmm9hfcTUzRT2UNqAf9HfxeFZbNFnvZto",
  "key18": "2bdAfnaFXDCxx2xZ9AdmYcky2SYY6r7x4ziAV8T4DZb8oo2CJ64roaGaAH4qbV6xzfJib2GJQJwudHZk4jbrgBZm",
  "key19": "5G1SRxwXErSpg9QvGAmk17hkaMDGy23YMK9BujNzPxceW92wopUfkZU4roSKHN1yF4b2JsX7iCKLok1yj2CEDeQ3",
  "key20": "Rk4RQSrQW6jkHanqnbehwHoULXwgX7ggFwCjFMafgo8ZGDFRs2n9QKaALe9z91Dwd6r5fxiF4afvv494v1QVc75",
  "key21": "3eSUmAKeukrmACWC46MQReDijj7gvH5XeJjvZxUmowP2hak15rdjU5kWuRCTa1J3BT8FjjkHn2hQBTrzsNpVLPo4",
  "key22": "3LJspVrueYYoTwL1oC4T6c2esHFYW6enndoLbtdpEmQGNw5GXvMw1798Yky3mfJF2RFzPh9QKL4BA2LJpmbiTybj",
  "key23": "fZjM4cdkjkU5XwD2d4pYeruJSJGoH5FRiXaF4464Foxe5EgAPbx8K1iasUy6akBF7DPhiQghhcvtbUv3mojHWdM",
  "key24": "39PDiNaWdyJUACXFZ8siwViwymcaUZipFC4aH6pAmFnyxyoxuLpsY1FNXs6CAKs61GBw4NZiz4pQpEDQwqMfETrM",
  "key25": "wHRCfcY5ZBRbR8FavhAf87Lxr4sgs1q57s9qDTYH6SMLYH58JMR3DX96kWBTvyRZksWFLQ8woW39ZXD1gbu4xnT",
  "key26": "3wFpQrCtu5QVDSgrQptAqWrFgvHPmuRssfFwGKVZGE7Snwi6hbSZKx1C5h4d94sPxtoT6tWNtR8jLAi8M7ef3X1M",
  "key27": "2vKxDSPuS7ssbLx27KnRAGbLpoS8hKuqXRo9XNE6uXJcdGHov1eZZ7jHkEScgEkPJwnVW6sk9YhJtGtCFc8zXstr",
  "key28": "5S4bQX9vnVgEyrQMwQCxpGfqRWRMoFCCmyhkGbdRrAhW6iCoDtxJLpsjPU5fjqPm3KAJ2yKnrbfy5RTS7BN1EHSU",
  "key29": "3fPYKic88rDiDUuAJSYNroY2MgXb4qUR3aVA1zYL1BkZCzsEjcoFJ9sGtKT99QSmm8DTmpqAN9TqBEVBaJQzLq2N",
  "key30": "43jpnpyaJVLX4mtUQ1cscEjt8uwTGYCmZKyroLFWbegb1xBCijVmQsJ83vVcaz1oqX9ZaP35Z77fURzrdTvsNC9F",
  "key31": "2JSAiARBfJHQ2fkooT3yUwH2CSuJLG72CbVb7hoGkRp1W4H3ubc1BZ6ZGsnk8dRmxJUywTGHeoHfA16PgDTqq6XH",
  "key32": "5CbzmMpqQipjeAuMACyY5emxYKoCFcDaEwbqDsSfqtq43AgCBMHVQMNQ7y6ZLVfTkJ3A8xqCzuqp7UjetVMDu3Rp",
  "key33": "3z8d9RGEzSfGWs7HSW7m3D9nX5CFYWubReHFF7Ymb4mThrXz99hVm55MtseNAtyNuHjSqCx2NHgq4ArGW2MUk5cU",
  "key34": "34PWvXuUVuyB2KyyCibBQ7EVw1keNCtKJndWvmEuuPUsK9wwJsVHJzjikSvzPLKyAtkusbguU9jv8wi4adgGo8AT",
  "key35": "2wjVTuy6Bz6wD9xwmgnrT5bMo5AYZ3apxuvMtkRVevE44ptbKyRpgPdE2jLADW4QotttHEip2XP3zKXhG18Z11s3",
  "key36": "ojsg1dn1BV3SLMGyPoQUTN87c1okYuxG7i48zE7Koud2AqcgzK26wDHRm7Dbm7PgRjq7sWRvim7YBsvw7yq9MGw",
  "key37": "31C4RTcpvm6HfK5oxVnVLA3wjuweLXBtVeBLBVPAncUajnRxaKtunZud5kaQ2SH6S68uKtQiGX2ApaR1A4xoo4yr",
  "key38": "3ZmdFkAMjg9Jp72opAScKTrZDEo5vFaAXS4LMedNVXc1mJmNFYmvUHXu3Qz82Wa1VA78ZeAydPH6W4EXykYBxyw8",
  "key39": "4J7cYCCT82y3DKWg8hcK1MWSyiMNDijYaBSaGQpUrpfuEjsqTqTzC7oxzyN7uSXrWiETxFNHkKLMaha2kXGqtPsC",
  "key40": "5aQjTvLzTd43BHn23oiyVQxTgQZrmpLzBme4Sp9VN4jmAmKVcwy1xUiYBNvAsoxG43bqoWhuhrqcHHUfGxn8y21Z",
  "key41": "3qmjnLj6bcGoxN6qoHrefeNicRb5JVGvvhPVvx7pLmJHJffqDUotPiDebiDs77nDz1gJVadV1G932NHwgXZc7gti",
  "key42": "3bH7vUbFtavKeEoehWgrmjkSkb2EseJKsscqBdydaYsqsbvcsu2v8bJ3UdKonkwXv89tBMBLd85JF14BoPwjt5st",
  "key43": "G4FNf9b52X3EjrsspY3v19xK8qHkYw26YAMYU7tP6e2keC6rLpkduW48sdHLBentHwni95ZchLsit392oKaR8fz",
  "key44": "LpPVUu9XSwaRio7DHMU4SnW9py2SkbwTUYdvV8wiKyFMp9JSmQdifkadRJcS94VdXTfFC6Cig6zjM2r7gmqkvyZ",
  "key45": "5YnghfGLJFb696ggpzP89JFarcgJLQn8BrADFvCHxCLJ47rvfqxi8T6xRXz7bMiCvMgdxCkEPudZcTLZ4asrQP9p",
  "key46": "3HBUmhM8aWzHzVxhjoJuMfriXSkCqn1q4aN272of9L9wxiSt736MyeZCBfatv7oY1VhsZJ9U1bgU3UMDnT9sdZjU"
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
