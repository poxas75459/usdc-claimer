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
    "54m2fVGjj9hrEWh1A8m87nqLaeg71RjM34f2KTpHHM1gHjnpGyTvQ7asWi3vEdAorAYFBeRFvthesaYvc7i2re1b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58XPPP5PWrNRHT31hzj2t6Eq3TsKmTzvnipgBReiSZr8r7UacbBhJc79UWUFC9pxjP71hh7om63AKNog2sfhXSGa",
  "key1": "42Aq7YSyzUqtZFvLfxQhKxZpM9Bk5ckwbwyNVHHPHtXoZKfqEDvRsPpGh6nmPw4uZzsLXGMVpTosgfRyhtvfb3EQ",
  "key2": "4gJPVHhFe73TjhCX4KMdj6CFE6bmZhPFU95j9XzNL3V7K6VrZtSX6s3MCgZqRseXxYDjwE1XNttydXvL3ZvqXQjh",
  "key3": "2UpVCDfaZ58Yhwd4TXBxkDA9XUNqDdKVtcDaKHWPv7ChKaLucXdvBS3SSe2isJdn9cNNaonYubqhCZFDuxw1Uey3",
  "key4": "5y3f88uchgx85esB4v67qkVzQyuom15F96oag4jgQRtnK8wXa9hJk9GebmezymPzkXcTNZW73b4Wmukwm77tNqUe",
  "key5": "62S3TJyuTXyTMNscBHiJRuWJQ9amgeuPZN2rHtCy8tMuhKhouP5SBQNe698Pf5FErSwtoURYMdhPyS6Wrzrmea9J",
  "key6": "3JHSWPpSB2LAvZGp2puN2gY99gd2SH45mUHmEb9vBhPckR7hksQDmzDPk1xdwc4Tdeix9XMkxcHYjj2ork6dXzha",
  "key7": "3MycZHmKdNCLRPaYwN7N2FMwa58XfMZzFzkBLRdFv9wx3QhVvB4KGRXdJHN2rFpCM1UaTEHFQXpTiVfQ4kpJg4Nv",
  "key8": "5qjPpkRX8qRztAHkQFiwhv5ZyV4hjKtquHQuLqfatuyoUwxiDhr7jUgWEiq6hsnRshhuiGi8joBjS1iXwebVF9ny",
  "key9": "3MrgKonezcZGK7dzWXr52bp4Mtd1rnfkaGr8FAfZcV5DRQb8SeapFqhLi41egmv78cuUTri8yrvfZdxJ1hDShzQx",
  "key10": "3rxRMv2S35qsruXoMrcihT9VHzfWj2YoKWRSwJF5jBdqh2JVnmJdJw2z5d6rw5cBz6nKLAvMWXMhfAGhV7T8UZc5",
  "key11": "skminHwfS3w7cBx4EKfC68xJAzypVCYiAs9DNGPArVMePTNVuQVxDvkofXMD6b4NQJ1hovrVZZKQQxrYNyA8RH7",
  "key12": "5H7oQYdWfT5PaQ1U6tZA3Yf3UCRWQUiJum97hKD5cpmFKF6CV4fkxFvypjA2R3EutgaWvpxzuLJZAD9HdRwrxqPp",
  "key13": "4J1QiPCBjkd4gd9w8EQxXiu5CK1EyTQCfBHGo7uGQdiUuHAvf4dx22xztjsCsZgtJvk4uGkAx8A31tRGHaKxMD5u",
  "key14": "4WS8Cj81pWqjBGEwPDg6BfyL5begyt7QZGRQpvFkq1itgUnqUB4vkaNbBfhthybmeFW8ymZKDkxZoTJeXohnBuX",
  "key15": "27Uh8gVQr3nzTfZHe34J4CPYasvxYCTNYUSCGReN8VXrNBa9dzRHNK2TPayUdguin2i6S4rCKZUVtxtmp7AykY1y",
  "key16": "4zrPSe1PFpuDEkBc4dzWaco43sFbqrpU3HJVs3suKu1nr7piJvWUJ7YqQx3iFNvVz55k3ChJbYRJujuTuuq4VKTi",
  "key17": "2yivp9DCWSPfBjBqDWEAcHo2ZFxHtdsDywTKCrrPmSUjCDfexPxR5zU5n6jk8q3e6AqGgpdiWALqpEW8oqghw4ye",
  "key18": "3bTNoBAacux4wiHLy1mt8EhNSpC1ieYhURY8pw1iiFdDPMa5qpvYJL5DsRqkYDEqvevor8yuoeDCLooCd7J72cU6",
  "key19": "4awWtS7vRyEfmY72pykXFm84kTrdzeTKdFG9jNs8jE1ZJ7P4quzMU3ThUCsaDdGoM5y6AsYaxx9mZFDYWZt1v83V",
  "key20": "5FJjp6EouJJzWja8mvkoCdm7xgowoD6mVQGbPC6B99mFG6pxd7G3myYJgXN4E89kpXDB4STzVYQNzhUkxSY1Gcq8",
  "key21": "4rGzV1jJN8FwshLBV5TifAwrCc7sBcaVCAYTwnFSizrhWkdxoCjSnCJ9ifCWaBUu7gLggq5zCRAinHKjFMdBToYv",
  "key22": "3GygGDJp7r1mBdKsqEBADuuPQGjF7eFPMLWdvqLfHaJ2CshGx1euPrXCDqh9pu234zxKEfzhxEeMiuWD73UsAiLu",
  "key23": "vmaQdqi3AqKTCmxFgqfyfdPCWB878LtgycP13VQp2fN5gym7yAxHv3qKe3gP2m9zcVsqJABqsoBKXiNawPTEubE",
  "key24": "tLrvnz7oqUKLkYjWR8BTLdFpiopZKxZKznVQRMx2tUFEhdxAPyqU34yPnj3VCkQmbgpW3LkTN7naLmK1kdX7YEa",
  "key25": "2m8CGGwHYuxizp7aZ7bgwDJ4HVeDNsLAX529LfJE3mswMKiRUNie9y8dsU7sRWqqf4RGyouySAJraYhBmodGpvMp",
  "key26": "4oNuXN46srSn3uZtpeGGe2k8uGyoiEXzDw9uMHbyz6BGB1YcsqQ34qnaJZU7m7sVgSZYYvy9RMzNZYT958vQoK6G",
  "key27": "53dq6QAWP3DPzazVRH8Ej1SGtFjYfTZxjAp3GZV4sBBsZefjSbkQc3mDffohNvzSvUx8Fya749RYwC9ftkpzRswZ",
  "key28": "5oALgGxaLLQqf4BeXpCUjCaxbzGRdS58gTF7fgf7zgjCd22XE3w1dCHkdBQhrKrwVxCkcNpcMG8bnbfRZY45gmvK",
  "key29": "3oKAqT5ZW2ip9QNw8H76ZxrputKyfAZZUsFe2pWndubUEByVi3nUXdG16BTjh8bGiZqFconjRydjiG4gBto3B7Lu",
  "key30": "5MWuHociEschdUZWoGn8rfmHiYCS5HgvGv3NYnEGZ5o5vwu78cgkrGNMiaHHSYnZo6HmUhLxG1s1TngUJWjwH4RV",
  "key31": "4uV4F4sGyBtAJsGycpynFLSocMNJ3xZtndS2vHpa5LPswmoorLKudpssHnT9wBwHnYUe1tveUaUcEyBtSkzSUTSn",
  "key32": "5VkGWkjSGAuzw4hMmk9PN3JG4V1LALEhHMJZkSuYaRWTVjNgDv8dzwnq4b3wEo6dqvMbjPBeKDTJyVkpTv37DFbC",
  "key33": "ioDcxQCcHCotNcmQJazKhQ8UF9zyyDJHhRUXsia7oMXWxPyAj9hqcm9X3PDwXp744JDNeSXbeShfMS7hnNLFHaJ",
  "key34": "Buin7HwrdV4uQGzRN1TM7SRZQnpY5MRvZoEapkSyxrdfRpXps6oYDBK5wSfe8BQssp5pSLqrC5V62g3jYzptKDN",
  "key35": "38qnEmnx6Js1pFdz8fpasouUnQwTe8scSYS49UtpFmnT8BeRZMeRp9eJjvVuYRt6iPkzXHWZmKrf6FkeR9MvBoRj",
  "key36": "3T9vRs3n7VmuL1S2wC8kG2mND9smSzyTNSg7K89Uaphe9qs1JCq3qEfN5RvzKpxo4XiPZVD3YW7tNJFaatEvjNWP",
  "key37": "5r772Qp1LNiF1ruEqj1XxoTkPAm3ZPP3Jcgbaqv2GwHE2x1UDCxzp2zMFhJ1fBgwUaG68bZ9DkPbKrbtnedz3MH8",
  "key38": "3TobvmjVxovtD5Qz6BiqSuHmZ3J4ekqWc3EH6aA5AnH4e42d9g2aKmRHB4w6XBLMBTr477ZW2YoFscMm6iRChFWg"
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
