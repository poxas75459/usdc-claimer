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
    "5TPzW15fP6SEPwkms3p3UX6wCqYgNtXvVsNuFVCSXmpCuAKMjGiSKTQyLg9iVoLxbCJ6pEbWSJENG4RFjMj6AEFL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yV9qsvwsYsJk8A8mVB7y3j7eBDsf8evEyrkURNN5fTX4s5Q9faQpG3KBf191WtU8fid9xmJc8aEx7eHx7fLBcf7",
  "key1": "2FmDzPFjp8Z764R9FGz1ZXv8FoyE5GyepwFC5rXwbjHbPicFmDGLzKZiK6x2TFGcFw1TftXesFqJdtofkzhguKvz",
  "key2": "5h7Cx1qyW62P9Xs6d4eKuZ3t17qdf1W6To4b3wM9FvDgm3SHh9bJ2jcWCV7DrDgvHkZvqc939P9u5sybAsVvgUJ",
  "key3": "4sFfKGhLKVeUq7KuD1HuKKeX3k2sVVdXTCwJpgPHqURWVTzrEirS6WftkhvEbyVaMLCzfgX72MhigvuVqccb2Pbz",
  "key4": "3PAdyUUKEZ15EFqC2HRa7ZAGKhAWScLZGA4jccJMU5Y88WG8UfpvjXetYt8rqvpC9fGXMzRoQXWGsSyCjqKgt7YP",
  "key5": "4cEemgVBmyCN4obhHqgH92hPUAEE8eJ56mG9JqrRZa3MGfMoFx68m3bLM6chgiMiE6F9DrsdvoszoRtBdaa6zUfx",
  "key6": "5GpRfFmWnoLRhZPm7Chh9S8AsZzSTqh17d71Y5451fMZ1YaxCzASo641iRSXqiTWj7QMeEfQGCGLduJrAfQDBiBw",
  "key7": "2bEDNHj4YqtTqoRb3YySGxpPR9ppY8zKBbLwfC5DEKHF32jH5PW12B7fajTvuhDcTt77mUkuGoacWmFKMa5vUhMd",
  "key8": "5imu69JAtiQGvmybRU77YaY4jqjynAQ4BQDT3LRaN17qFqrAgzuyCBQf7wSxafSvCjkdzXV37m5WCAf3ciieLyav",
  "key9": "2nebQpqvnNuFaXn4Cj87ddLSa7g68MintJsYiV32sfREkgatkurgnpcv2tbvtpwF8ENUnihxrSJcqv8E2hbnRvF9",
  "key10": "VMbEp6fvFfBK2NkDWF3ZhjydV98M6q3UVfwVFuRBYt9dXiUfr5q7vBKakU14egadTNLiHrhBDg7L9oqsBFSHy81",
  "key11": "4RjmBdcdzpWBGuJdE8y4TTtRnybotzMWAXVEthdx8bLeDFbkv4fJGhVfAXXH284gDCUHCFS8z1K9EomJ8wTRHbkZ",
  "key12": "2oRXVTvjczE2dYkkmA6TkbbHRMbWV9jFmaURxmGC4gKhBx5JrRisPQxgRBRf9eQAghoTEBFe6oZ2Kmdjvs3CNrnj",
  "key13": "5Qp5fMb4NRTbbWYd5WMgWrrFJ1S2VekQncqb16i5E3HjkYDUt7nvFw8HpEL9uQhcp5j8pZH8UFB7Moy1AZFLSEut",
  "key14": "5go9zpY1tMqdKrN6GYqPvFuWdnd4WeKs6nYE5GYNBcQHM6dmRbmSo7NxgWXmuryFVjAqKA27E3QVYYxC8ByVq6KC",
  "key15": "Eji3q6ZP2FRCvkaRzoyjKoY7f1sNT7LWoueZeKuMYzzQw9AE5jMyprFZbvmd9SNF8AS1EuDtpqSfibdZHsZDZNV",
  "key16": "4CuEVznAEhHToqeJy13WKHWvNR56uuAmHFwcFndHqFTDawyS44cdh4Mxnneq5eN3XBwt8jXdBcLSragw4rJLkAXC",
  "key17": "217xxfAM1z2vGKMzHAf5uKNuHBihroqenFmNYKSTrW4Hu2yGGohVG1fGb7twx5FyU6f2SGX1D2oA1YcLtnWhMKmj",
  "key18": "5T3MLSQqwz2bzSAgS4fJZBmoswipgHgT4EM9X7YuJFj7cHkiBZPTVcHyxRMrgwxmtmeYCTnhQNNq1thvcnun4MP2",
  "key19": "4Q4nbFyVkfcKNN3ejnC9z4mq4PC9E21h9v6YFfwdAv575mC8S53adnebVYsPJU8g16Snw5H2VfTWcqYnY75fptcb",
  "key20": "4U7xJyAXRgLxWX9RZeQh54J4Wn84dLmEFxr8rPytNs6a4bYAT2g9UHmLCTBLVpynYUxzc8849pzBBLsCQVpGTejW",
  "key21": "5jqV3jyoDY8f5jTmdH9tc69NEJtuo72PhAzJXpLQF1AbRsUHHNGUVztd8LnJYckFyYE2YdJTqywC3ZMuCPRjPRCd",
  "key22": "GwZY2U3sNjqP1A4hbQo2uiPKZhRCD3ghn7bMM8qvozfttWer4ACbaK4dQxpL2JKiszAzGq6H3uveeYvEuEVJmVT",
  "key23": "4YfhRsoUAQgdwGHSX79Nb8zE1VXg69bddsB9pUD2NXLcCUEM1RpnFhgQiywLnLG5Q7aDoXGLGgx2GYhd2HKFqTVH",
  "key24": "3oJPBVJRj2HEmz22ibDPZrSTvP6bd15v1EEDXjPEU6UKosV4aC4FA8y4vj8HqwpLuxMmsJn8N4o4UAjJbVHiWoXg",
  "key25": "3wycxFMUR88okdYN9EQ2niuHZQGwfMNDx8U1JMMF3ByT2EKtTWZhzsJyEWfKZEjBewswwcziiyz3QgGAsr1pT6jt",
  "key26": "2sR561GfWcXnDH3eVR4GQDHSNuQRAqkvUDFXiM6ieQM9vC5vGn7SaAoDcUaFT43wuhraGsRNVwFJHQt9EobKjVYR",
  "key27": "39Xw3WPucRmoEhW4VWjNc3ngD7ZL5kbtXYCJHSLuzgBkv5aZMaZz9dvW2LFw9AHYkCkbTHm1Anex1dC5RpjQ3KoR",
  "key28": "dnzHjtHFehqWRG2wrPD8bWtxs6TdT21u61YM8fe8F2u1WYnnQbJdA2xW2EWYK72ojR5mTNqoCkA7Nv7ovKjognK",
  "key29": "vb4JsRxGYD9pzaUgU2wPtniSaCdfGjS95iGUX4bykgwdCShRazXANigDHvpBEYE3ZRmGhMXn8BoEXoePgFf59Hj",
  "key30": "7Lmhf5uUdpFi9kKnXJVS6zVKF68x2TGrN8Pb5JjAeNL1oHNyg5podeM7WMH9ig19yMSmP4xz3Pm8xwjzkvswHm1",
  "key31": "3e4GGE6QBAg338afDdDUSx7iYdVQqwiUassA9ZpZwrfbc5A67YfQ7ombkxvX8xnjxoCu6MtHzn5Rpdrkm6YhS76W",
  "key32": "3nhY8H54cBYJsWZ7ZtcBgkXaNfDNXWJtsqVvh31sz4BvxLKPrYW3okukYVz7sadFpmE1CB6DBfCxxqdRxCJGqdWT",
  "key33": "2PVimA84ahzysGtCiZ6VmqkFHUsD1mvnMwbTQCqnWq6osx8i2x8B6xqhWbxQZYyHiybg7wJS11RatAVK2Pxhc7h4",
  "key34": "5sPVD8VF56oufqVpuRxbpCfMUUaty7L1qsNbTpvMYVsj3FqJwRzGkmLYgibpQfV5NwA1aQMfuznXc8UnWpnQjCk",
  "key35": "GBSDs7Gw7XCDeYEraWT8cvaJHuskPhMebtLLAL5YESH3esEyPnx5PwhqbySx7C8ti7xUpN1wXCDxensmd8D7GvV",
  "key36": "5f2ZsfbtYyh8EiYzb6NvcACA3Ed8bFrKF5vKznhtgU1FoHkCR9y4NaL6yJAiaJPzssEbRBi41LzTvVz724eUaiUz",
  "key37": "4SZyBt2dY6syonyDCwfzgQntgRFLr6KLAy4JH7inBWeA3ewBDteWUWGhDbpjXHQBYM5Rp6pMPfoAzfTjbfkGsoXD",
  "key38": "4JLHnVXUG5MWtshEvag6sPAZw3YBUFndwPMn9A17JMdjHqVZSUFtmsJZXG6TLD3QwFruo45o5Expox1mAyZUuxXD",
  "key39": "66b4VQDRSVbfY4ZRmVWrKzUHittk76tBBg9HpiJB7Anp3zsouxwwscwyRg2E77M839UY1uQJ8vEJwCXCgkL4Gctv",
  "key40": "3f2BdiEerssrU4oSewmSfb4tWjtjaQxAbjww3RtkBAuykhHzgfEaEzistW5sAV5Lfi9Liwathz54zuDch3M4MLHW",
  "key41": "BdQMsY2XMpKNtZQnqbMCAJHYLTkunEm9uYSAT5xsEWNvWEPLNNQSsuoUvDSgL4E4izBGZunK4hAzZHrWoX6bCMq",
  "key42": "3dcmLjHXjJz43u5EjoDRfDLS4U2nFwXbneP1pkjHTMsZUxV2qCrhzBwSayzjshVSs66H9ATGPP9KXPvUpKfiR89n",
  "key43": "2NjwC2cVpJN2S21tNxrSF5doZPyyh8bmK44pjWJgFK8AKrmsHcA4UThScwMpJkcEVs1AEYsV4rSh8voDXMX4fanW",
  "key44": "5yE68aDLivSfsDzWHH2Fm4Lw9afTLZC9EfKEh5UcrKzXvuxJMxsth2oxrx4k3y4wFcfYfjTTAjbM2GMxoewuGrAA",
  "key45": "65qTex654htvEpat2seHuYLFFk4t6ghPtvaP4eT84Hv8vxunjL5R7kgXTBjRj5nnSoXYj4X2Ge88Af6v56rCpoJ7",
  "key46": "55sox8ZX1VKaQzJHHLbCT3iD3WnRi5FewEAwAxrU3c9XzaaQwyfhy4omF6hjpnGX4sq4waL6oqc38tDV3DhJZAUF"
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
