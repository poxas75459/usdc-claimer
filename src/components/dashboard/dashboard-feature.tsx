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
    "3uFuj6UTgEXZNMfJC8kTy2e8ktY3UHPA2mCK8RsPpfpyRiHatDW8AEiCAu8JBpAsdHNNpVvFJ3Us1Chmz5MCCkGF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DZ5FScdDaSDZLbNF4KvoH8sgnN64nu7zuspgZrhx4s6LgsycZcEkhppYyhnxgJQjnEqq8SMUsbqibZSaX18neLH",
  "key1": "5BtZhHP7ojZmiDVZSYBwtqfHkLJfb38xuF8Saegrrpdvziyi3aQiViFTFVVuDEVfaUmKWsQFjfZpKkVGTWmcodjQ",
  "key2": "3dnNpe5ax8MPSeEVmX1gT516TLhgYwEdQP4VXA6gDCuu5YdyGBUEj447bYZnuge1AmjXgYLa2u2m4yausTWA69sC",
  "key3": "3otjPWn21umuLyRzsMQTwbcqfQV2z5CxshgSbHWLcoR7Xkbj98Czya2UE13qd9rwtFiyM1rcrT3aSMUThirqRRNj",
  "key4": "2TK9PS7n9k6m7ctVkJhMHmrMayDBeiNM8hGaAGJ8oA5EwehUgYyc2yLzdzkPeoxQkzzioqqV1AXTcHmA1QYQWFU4",
  "key5": "2aPE4BHZ6bUhRSX9h9SVKHnihDxwBCVnw9J6dPFScf16LChHwMBz7qXppnDYT7zupZqcQnVKSdDda27sjSe47oLR",
  "key6": "2s6nTHxZuPLRUgXSWPW1Kj9J6KpCEXvPd2hptCJXVpEK9nXJ3y4MLvxXPrUe8FA3chtntgFGmzKKraR3mfAPNyx1",
  "key7": "379Aqzw8xKZEx6yhc4LJGiGZ7JzJNX9su3jqiFjbjaSnLR6CknRFptdLczMz4Kd3fSd2SBsqyvFdGJPDuefkKqwu",
  "key8": "3xUaqXhC6Ens1s3dR9A6WswZ6B5DvNsvkHGjwnGZ9cySKA5LCuTt3BQ9i67Bpv7441hFvSyaE72mBKA7F646JP6Q",
  "key9": "5BoatFfoffww4LTeP98xudyy4f9juRKXYR2GMYv2bekY2fJ3ztKVNkc6qXccX62HBxYYEekFv1z7mCtVDP641Mjn",
  "key10": "5iXYCgSHCt88a6wSx4pAxgFiLQeQhyPuN7U3yhCxAShG9N8byzMXP7S4pYYRzr8MUjMUAnEqxJ6B9XY3rUK66MqG",
  "key11": "3VP1TDrNfN2Ghu4HAvG4nqGTr1oYYEDE96tN79VV5zvVCwbGjoiNo6nc6HX1SMpdKdZ11ya87wwVB2uoXh8abpmv",
  "key12": "4uK4YpwP5hS5pKGXb1m4zvt2aCqU2f5R9iWDBEsP5K6FBhAv4Zz9YSTpPxgKL3jaxtWRPwNNcycFwjp3ASHVmbju",
  "key13": "MQ5YhpxqgqWyhZ2wc14XHJCRdWxjtQpaWJGr1TgzoHyfz3iCFAqLzsYxheD9K6YyaXcHaSBYQ4Jenc2pE8nd8p6",
  "key14": "5F8GnEJJU8z5y7d2NGdzCWdCyyzFBzibmiQDFuGRJAuR92wuXxsJxc7ZebVzcaMU9fTpUD5NvRBfB6bvw7FYEUBS",
  "key15": "31vGyiHkKqMBBg1ytNvebdMMBFQgwYcS27hUiDuMnZsN9bpzE1xMSNSQMccdJdk3ctyJ6QTSNADwTmJjirQGLTXB",
  "key16": "3H8kGYXyWEPovZnEAa22zTdNUBg41YhW48toDoNa432PQkb8w8TfLjxUZA5jpnPbDGWAVjnkm6HXVRBFadTAhv2k",
  "key17": "5S3vfAbzsPqpEDxdD9ZfUGVbXP6Bws1MNvZeMzeB2xcyapaBKWFWEmvgCsk2JQc9h2M4j4YEUfU6LxNLjjoFLMXw",
  "key18": "4vaiXsTAAeKmmShTPPTYrgVfKGhgy6pGsWBPaKguFLwy21nDgPo5Yks3Mckr2Uma2XKMiCPLYNbRi7AgkUnUtF6r",
  "key19": "4oMgXMQ7mSgjik4j7qUkWdkxc8b72HLbA8psvfNk7sgbQjCrwJa8bPjde8yNhTgnuBeeNxkibWsTagJGi3QWzZJ2",
  "key20": "22hL6gx2AQMUcbeUD9JGoPunJZwbGE2H9UwEGcMJ41D8WiSGANV6fUS1H6E4gHjFzVeD8xuB2dtuWQ64ZFE8UNpb",
  "key21": "674QzjWDHFLgeT6dVJA8wu9WVURWMTtF3DxpnaW2bfr3eototoryax3UP8thZmDGMx5MXBKhdfvjQuTakqUbU9ij",
  "key22": "58oykK884WjdX712E6UBBGPZKwgoqw5US71HqddVGWWNJdqFKq4bzJGRm3BVtx74DJjqhSmCT3k6nK4xNhvyqjLD",
  "key23": "Z2BuRhJTiExYfbgX6u5CnqoQkx2AyKm3NMfRZBRjfQRSf3MnpY2djjqWeMDLSp82vu8CJ4gxzvc8upADZKJLQwc",
  "key24": "4oMLtoskhRqRgpzN6ZvG2xd2o1vHutHD9uRoaNF9KWEDK8x7py5GJr4rMK5gcRRghqnzaPX4Rh9UwricC1QCrTmp",
  "key25": "4EPjRFtv9XNJNQaVhxL9aAvE4wEK6wnbveFZUhct2YK28BzPj9KvJqERyWo3ac5g2v3HpdCkxLG8Mvp5RCoC9Km8",
  "key26": "L6zdBALL2ttFtWsVTSRAV5wdTPD8MpMjZjA47utsfGLvSekniEfgvCs3LiSNJEpQQtu4RKfDY4XsqVevfCiMGaT",
  "key27": "nFPzFmZESWMEHZskWU45LdrQCJWLmBsWvyCcKv4ac9tZAri14v1uv3vJGUU8VoeL9VsZtRbxgvh9HHV27DU4q8d",
  "key28": "2dHE69HzW5jK2R8Fs1pcKzV2TrJvevwhvFsuAzsNCCM9JMXS9VFFvSV8AhjsGqSq3hynYQZAJRj8w34EFab4QUWP",
  "key29": "4VG2b1Ht8GbsZwSzeuSUrhowRfyiL43NrucGFx46GBUc9SDDpSLL4e33swYeKzreGr58DgvuGQjX635vxe2jpcFu",
  "key30": "5FAaHwYy5SJm9uZwNNao96xuR1qk6ZSma5VVr4SZBhFzpj17TBBepFJduG6Gtx9MzDHdGFQaQfQsfF6SVNQEHXxa",
  "key31": "5hD28UUVJdPFWh8BzHGoUPv7wCtbC6DwnXnkbM4etwrumZV3ah3QcePUCB8QVjUvQujqG8SeBrmrXfpLPoRjDKcg",
  "key32": "2ugCgrRhL1VoAYwVVcsSERN6Q6Gr9tFFHCc6pditKFR2JXrHhir7bYEndDq7KoswCANnzz6rxD7HbY8zw9xfy7Y4",
  "key33": "2tVwew7r5mhPYP3aGpU7QWxHFA6yUs3VSuEvsLSoyuHgMrct8bL43HfwgGCVqd92XYQGqugwpCvb3NJ3DZwjqocr",
  "key34": "48XrXs1u1mKAfXCG4zFfpxe6eFqDZMFe8s1okqeEnXk8ZoFgLf6MzoMz7mx1Ds3CKUY4mrHUyw7Ajjpu81q2UvVj",
  "key35": "5yxgdqdaY27eN9VtTu6Nk5eF4KgY8PaA1D9eQpSTxHBoz2uNHyT62t2pPQWRw9BJdwUhdg6oVv39SdLNCZ3gH1K2",
  "key36": "3qVZpAjFeh1qPGcT1dbn62rmLmtRoQE9apNh1Ho6SUA8r2c2BUwHpvq6N5rjirFwdwi431RmzqwhP2eAfpM8uwDe",
  "key37": "2ZxVGWWZcnYzJcTkoSd5QJAMKr3oJgYWQnMxBv1Kxc2Gd6WJjVNhHSZFoQqkq74D1pXtMf4w6ezp7pQnnYymuAvU",
  "key38": "oFw2qL32sexe7Aff7DECEBxAKgEMjbaCabGtF6SJJfnojvstekZ4wsQ1aKp1zFEWmo5hxxPJ44CTdM7AMt5KxzH",
  "key39": "VYME2u7DEaKApP3aquQp6tH5zjjKsT1tcmaW9Vjy4qEikdrr2abyRMv6rPEJFrB2dhfbpSbrjmoNqWAEVyEHS1B",
  "key40": "2VM2zn2whU5bqjNkx8PTtRZ3JyAx8bDxQ1R5Qd8DxYZKTEpB1pu48RHNPpUzywzBCpV2ASkMFiqtz1seNiavLwxG",
  "key41": "3A3HH2qPxK7GdfW6XXc8xaXJzRGSVThmbLDnpT1KjHbkUqcM4dQG4TacaXExuQTy51BQEPihv2ZSTQGyexR2cffr"
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
