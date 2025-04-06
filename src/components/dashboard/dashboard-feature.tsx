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
    "5f8UavKcLXFZN7N4pfVfwWX1ojsf3WzawjnpNTPBPBnPJL3WuRYqXy3QoeExcRxF5P9je7s2J2GLPUeXQWqB6Atx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Z6kX9wF5pShHTXRFq9ZVmJip3hGVeiHP76kVhczn3nFykkkC9ZNDDSRcJMaXavPYKasD5MQzeFZDATJbHdTXMAm",
  "key1": "5TGstVhbNwSasJo3Fw8PRMs9gVAw8w33AWGRNxcjrePkNuK6iUbHXFshgZmKkjcmUmqrANX1eKbEMFFvGukDz4MV",
  "key2": "3LibUi5WgNfR7G5jZ4RZG69FbtnjmjmzF6hhCPoNFi3q8RZfgq159bBLtNJJeMivaJi3rBhXrUoUQ2d7uPrpNWS",
  "key3": "qDevFQ5b8yiRge22EiWB37C8A8SuVoXQjL5xLPzqrAUBoWZg3EgAdykpE2KBrxNvd7dLWJ5UxVnLTXnQKn7r7tG",
  "key4": "3mH1SJ75XSCrfHYVtmMLHThgi5qC5xybn3dmeeKdiHzzjRsViHv9up8uPgJPeZwPUfyoPZRNhA5NSJSAop7EXPC2",
  "key5": "4gEFhPqEWL8QVaEpc9vmytL2imEZ8arFEoBg7JMR61t3P7VFztwqGz1wXNZiuSxrdwrmpi1BqmuVxCTxdXm29gcw",
  "key6": "LEHShEHVi73GGk27h8vF4hxe6SkR6ZVj2yBdQ1GfuLZHMFd7BjEZ5qRxuQ5zaT4ZQwrsXbY5zwhBstNhAt5DbM6",
  "key7": "4oFtf2q1g6ZcNkh55HSLnEq86ejD4EUaSdshM5SHkv1RmEnqvQAbumP5JpeSdGrXWTEGJi5Nc29Nb132EDzaH6M1",
  "key8": "4Y4VWqCb55Yisb1UWT2cUUkAitccZgp1b78pmEkziW8Zxhfv48T9n9MSiFpC8nss1yTDborM8pFbdWvQtxLMVV87",
  "key9": "2vGHu8nTKMErQneLKDrdWf97EbNiECnPBALSpbZ9tsJUhhfQPCe2rCdpwUzWjK8je4DGJ7gfmKpWdvLVFd46Kjy2",
  "key10": "2KxWAJufpoPUmhqotEnCfnZrV2X8sc7Sw2xF1rXgDogwuWJFruHTvSzWE9vJZ3ccXbjxiU9MJwZJrCHKfzE2uurF",
  "key11": "3giQAdH7D9YADuAKQeApHPwXxAUoBysTW1X8vVLTtYoj62qS6JsLhpQgfUDisq9sE84it5GUg6y66yXYuCDno41X",
  "key12": "3eumaSJmtQ8PrBzGd8hEYzGyh1omNi6PqcS23m2bMrDzN8A6adwcGc4PvHTsxtBPSvUQEnXVPF9QNf8LhuvcirSn",
  "key13": "5QygRSWDgR5JFJpq8jPwifcWpLAiVCsU6EvhbNHSQPQWKHGmmK49UAL8CbkiwneWsTkf25ax8K6SQNFWF2DZRUjm",
  "key14": "5smqCtjddeAjYB3LkfM4rBGeTWTSxDWL2bVDW7wdQNBNfBFTKRPv7mAmYUdxRh5sT6sVJDj4MAhE3V5hacDPqQJw",
  "key15": "5Vw9nVHnGAWkpdEBHZjpUxayg2wRDK6V8YZnEqshYrh9xourm2i93wnePthaTRzVTikHyL7JgpBrtFFuDoctWnLP",
  "key16": "WvyGfMTmh8E9rQ9bVcStB3qWJdgQfFGpn2ubFeSRzNPTg7fJRFHHrym1vnucG147vGB8aV4bzn5QG5CCFtQpGrg",
  "key17": "3AAup9eydP7NvPg9uwkwKVhuYowZMoA6azKKXUMj8eTw5DHZpy1iBKVhBzLjrRcJ4Zj3iGM84kVUsUQ2LpBEs6PM",
  "key18": "3FnNNKAswe91HJsnKyGZdPA2HUxDo2Jwo1AF87N3QRPRP8crv23uS2h7Xs3g7evoA2Rb5ZZ6AdAxUu2chSBj8jnE",
  "key19": "3a1uukpbie8wKMptFvXzDeqMj9CxsgWfzuTLVwhmu1N54ySpQkzDznaEhEd7LtTLBvtbEUyRi6wCU1E7aPh3L4N8",
  "key20": "5vvXsZzCBkvWeNdpGwWCiZN4wRC487mC26jXHMKZGX6JA5BWBaYgMbPGbuxTC7SBRs2zbHjFuvwziCuhngrUP3oa",
  "key21": "66zq1tbbawnXMKH8h7mBjB8y12zebq16sx25Lf211N61vD3WsVr6hofw1s4hz6QBDdMg8T4qtYTgtUsZzMV9krdS",
  "key22": "2vdCj8BePL22oqHQU8PQcQddCYyvUXZKzCM8hP3kGHzeXfVqrA3TYTdWwLgURYVeesjQX1DKGt19cd5CPQaEc3Kc",
  "key23": "2RAi8YSkjvvoZQWpeHR5rwXLC2kVaC5ex3T2SougGU9uSCc52HBG6N25juwZDEjvbw25r9dgXB2ghTjudFk8GyVJ",
  "key24": "uWcbTiUvr1XdYW29SZqqnWmBnSkPRFe31Jvhq2MzRpLYKWwjKe7apuPPu3hFv8jXcemMdMVcgyHrWmXo1CACDuQ",
  "key25": "3diZcmZake8V4fkNWYtFif6nDAMTygijaxkW7zbpb9q6mmadBKZLgATKCuEVV76WUiQgq3dxrFqpzGXsu4JmsoTB",
  "key26": "3MmPQx22tkR2vYpjXi1S56AbCQBiP7cqGxyy55GQLuwEG8NS5eKve7EHi4PmcjgHp32ZDsHrDfmCkZV1riE2aaJa",
  "key27": "wv6fWy5UYCh8zNjgMhtcMJD8FJT69SGGBrvihM83FiyRGfeUYhrzvDorGnRTkf5BqwvgZxYqAZNcWGf7FrubtzJ",
  "key28": "4u6x6SqJTTttDpwKKvA65jpp1ksw9o2fvqe78vMbSE6Pw5vHN1VxBwdvWNrQAUcAj1i51tvLjDuZFdkH2prabhji",
  "key29": "3h5bu837DhtuhgVLVDtKs79JWJWzKGrfxmsbaYwkxTeTTtDmTCGxeuq65RQKKmwt9diLZ2hs7ET2vTaYRhZ2Px2",
  "key30": "2Z1v933Sj7UvA5FiG1R32k2xJkGS8vHCnuMUYX3ZK5aGNnjN5pMqedw7fuFHysjP7DrsLHT9Rhgfut21wcbe8P6S",
  "key31": "4NA86znWZUkgoPjATGvMuiPt2bowXCzd2q7ooxFPwGfWMqCJJmMhB4XmuQWjtAAscPnXRp5s7JcVraDuS9a4WhCZ",
  "key32": "4qnmFh1Ah4j1YsKPnn6YuzfkdJz96s317E8hnBufRy4X25vZt9xcS6HqgyBqy4nDAvmtGs5w3QPgVbLbBMonjgbE",
  "key33": "7JAn2LR1wPjEYQ6V317Uhv3ysfg7sbndQR4h6qnyAFAu6HvtXZP5DxtNSDkcd4B3oZgVMvKuYTqfsfT2KTXrU7K",
  "key34": "5yhMNhYJGzD864H5PzxBgagS3732GS23kqtDhJqKXemZ2KMF9NjgimATp43JbTwcppyy8zQZhBxncAoNoWXP7Mou",
  "key35": "bWsza6LEwYdhvAk4LFiWPgsaEjPiEvaZmczDdh9KM8ZD3FZKt5m1LZKtxipGGSLWQDNpw5tbjzLkxcB3Ri55834",
  "key36": "52K1X7Aq3CS4AVrP3Nn4aUMPmFbswc1FhrHhJTej99Hr4rtRft7Vtu745Bf6FpVF9iPXBFfRmDtkQeUu1rM6ZCaF",
  "key37": "3FgS8YRtttxbkYNDPQpkoMm4ue9nm77mSPXFbtZJUejDmPzkczFUjZg8ugmCGe4KJtTsyEr93KhHUYEHR4Jgy54u",
  "key38": "2C6rNg8D5SpYGDVKPntN5vS8d5P5eAzdKC4qBATgDgQB5mGvyZoGraEr6Y3CUYMvsQXA2ZWyEHaRQ69Yn985mQJ6",
  "key39": "4VPAhonvRV9GYqktEufQX5yx7oaauLrDi1KyJhvo3Gs3k4rwR5mwdZkWV5VHmH321LwLVVLMc4guEyTRvzWwHYE6",
  "key40": "9xhhVfVRY1MrAR3Bo9kE6DNicYW6oKG4EiV384rhmAvTTFTBU3afU93VM9eygweD4LQSbNY1NMwZfq3wYSpqG97",
  "key41": "2H3okq2BKBmVNYSCKKn3uQnLeBF5Q5AMrwbna7NZWaecPaisMmy2n5Dg2ZzWCskmCAn4BqeFQHqmjXWpkkVQWq7W",
  "key42": "4VFHRHKdtRy4TKSNzpzqRD1jCDjMvVR683uAyVWmrWqNxLszLgTHpWVa2QM2wS4QB3nrnbEcQzocPJ6TRA7Y5kHk",
  "key43": "3QB8Cjxt1zG2x6oiPDrxoSRSza2qZv67w2ssLooCMwSEMQEE3an1PwPmso12jonygWbL15GFekmAN2ALmUKyGQeP",
  "key44": "5PvFFPWUNPWyx1NMTUJStFrqFCpGCjYZfvszih7ACaYAKMJwQ3tN7DoDdojZoUQ6BqjFgny5VuVx6eY5zrwk1iqP",
  "key45": "5yr7684frgEzs4KukSX84pSvjdww6yhenJc9kcSCgtMWCQSBsauWLbQoLm94e7opUE1GNZFtvjUtiqwbEk7Y1PHm",
  "key46": "4sVhWHuYZdRXCgXnyVSUsdaENsJ7hjQhZ2FLesBNgNYMRbj9kSyGvXKZD8Yrq7sAEaxgdhZxDRzGUk24ELKx2pdC"
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
