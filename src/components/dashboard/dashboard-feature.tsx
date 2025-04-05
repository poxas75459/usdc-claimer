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
    "2MewXw4625mXcfPYJ554HiiGvFiLRSWoi5b3BMii6ASwDcx3WUBAweJ6bsAPYWYd2h9DSMbRcEgi8gwWmUe2TJLo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jLo1ceUXbbGhAMSAnsts4RGLzs4VKqX3JosEKftERZ6ya9uSmSJjMwDdYg9jc4AwqDKrj3SGeNKP45dvrWaURK6",
  "key1": "2szmVcWN2KR2GHmdv3eniVz36wM2h2CVxQP12gz1PLrLixWsCnN4UuEYMLevChBentmqwHFrmddskH4noExKgzHa",
  "key2": "3EnbW3e85z4bJJ4AwZ4VnhUugJ2KoTgzqDJwtBefQwPv5kFPNw8s4x6wK8oMPoKZ7W1WMdc3k4i8qJSZhRTChuyR",
  "key3": "5Z7mRyqu768wYagPt6jfMz6DAVESEZbotuCCoDr7iqTBPeQeVH6o8TbHrL4Km7v9Udf8zPGsXCtJZuvJ47ZNczif",
  "key4": "3xeoVT1hA5EyEhbAtjgiiLH4ooyWy2LB2y4BB7pj4oKAZULjsk7ifQ1fe9Qiz3gMmDG1D8bskHunSY9xoSceQaxn",
  "key5": "2NM9S5r8WkzN8XqfpuQG6n5ZHoV3xEY9uki9zHRTnUzpb2iKHQeoZoiQXbHimi66UXmQUAAYUqQNQx88vBqEPELb",
  "key6": "2M8ZSzYy6UYujM77smH8FejCefTtAnxURrifzDs2U9yR1jtNCKycqdXm7YVdNx3uwNm1yrzp2HjGvyoQX8pqstTj",
  "key7": "2atdgGHg9FQ2NmC1PcYhpYyVLYgXevyfP7ek77KXNbXodvMWHwyToxPqrthSYhTGoSpWiP6dQermph8EDzMyMHuh",
  "key8": "dUnsYXWQqKdrT46gxzQC5W9jFQMoqHz8nTETydXSMktbMng633aJq8AXvFN7X8Xp9Z5D2Lw6d7dvBRxA1o7tS1S",
  "key9": "36wG3hVf6hdCHx7qFm4AsYtv5tigYj9jAuK5ECiU1v1MSJGn3f4QXe954BjYnMgqpGE3guzUGvAE1jd7z2k6DkjM",
  "key10": "49nRdc3w3BUYP6efZwncine2dzqQX6nQYASuKypbgQghUqvfdgDoWK92LpQ5rjYLB4DQ2E8s3f3dKbojG5frE8ap",
  "key11": "5soMm62RgkkXD1za2KCV2zQ2xARpMAz7ZgwfnCRuxs2oNPTRxsfQuDwaKG5A69RxkD9ZenFDuSipgXQFQiYQ7Tev",
  "key12": "26ZAxgPLpVSqjAhfLyGbcJKDnb1HGpA5edZPiTAKD9UPi3Uqs5oJbxTogdaWzbHvQTspq5mRkUKUcd3jC9wUApPB",
  "key13": "5f3VAMvNy2FdWCKhiN3S7qbvtpzh1pbLKWcsb1iwX2ewtNZNhkgh7KoJML5xMyMBjeMLHADvbuHQQiwfieJwkTEG",
  "key14": "4FyJbknHtKCmazQY19kJjoqWGe5HjXBTFEVPYLdok9TbjEDVcs4X7sNUCFnZbLMmrgVNfUtxqgfjRSpqPnFbW2d5",
  "key15": "5ETCtPyF62zJaNxGxZ9J21xPSkB3PxM5skbVbCn8oJUxKPTU1BXBEkXL67UBbLYfhACznv7fTndykwmPUNDM2vGW",
  "key16": "rEZ4to138pm2w2L4u2NQhiegUJRVm6ftvQppMHc5Spm5LiXLG4EersRvWtQQvUHGFCC46U8nWz46bxaRYr8sgiA",
  "key17": "64SDkx995kxrUTXYATq4eSw6guTbLwDgD6s7fZWgzQqrtsTwfRCEAAMgCvNZEh8Ge9Ud8KxKySiFmnhbBHmjU7Tw",
  "key18": "2ysed4VY2s6jT3Y9sSvpcmKx9FJH9VPgT3bWLXpWyH22wxag2hXfTyJEqADuJswgU1csA9tV9Gz36hDCbW2C3aAH",
  "key19": "3mXnnUCNuf7vuBX7YbgW5oUjUD6AWe4zHH9D7qimmvEYYAR2NEV9SrexwsHvJbqFDbL5QSyMUd7f7wKBxJRQDe7x",
  "key20": "5CRdLjC7rqmUJMmBW69R6yHyHD3HJKEGhxGo6a8Vs5W8LMSn4RixKfLCTucQ4ATMXp6h2nfCdeWtpRdX4XPzpgp7",
  "key21": "5DP87iELQisfPqjQhsNhh6Exm9Cewt4nUULRvgJfg3xPeE3jGYTzJc2FhVnZN6FRdPqNVEyAKmwy3QgHW8RVZvw3",
  "key22": "UsrfugA6cNZzUKZgsn4VzDdzNrMsG87wtHrQKRJrUJRy2aeEdNyE4ZPyYFPMdEXQVj24SbHfpyefzfZMupqBkM3",
  "key23": "3pPM6ju3xUotnZdtbTsGSJv3kqSSLFJZYEvbsNbu1tEGaHw2WpmUYGDDmr8uTvMyJUyrsMamtL1vTSVuMhrMe692",
  "key24": "4ovXAUJtoxL58Ppr98SKkHxVAL1C245D9ZLxrZedUbzAswbsRtCdQwcbAkiXZhRGyJSPLpDvLDJTKznMwKepU8r8",
  "key25": "2jB2cG4KWZaUMYCqDCD46crLqbh3zBCrbUMxHPQFHHN3bgZBD8Bb5FWEyGuBGsJiejM4ES3B2jCxDQVLDRQs6oyU",
  "key26": "5YHUkETMCEHntSZArib2YzBP1NC6G6mYybJjjh1pYHMjHum3ZbmusQsEdvq8okUALJcDcQ57Y6FNMz8gqcctX94f",
  "key27": "2NnhFfHzSHDri57BhH2ZPShbe3RxMWbrmQHyMwLm4FENtx1HUmsNZ9M7gHpJMUaqrRyivHMsoEy8bMASStuKcJpD",
  "key28": "4nyVFvBhkrjp2oE6k7jjdxsMsFoHgpb4FC8cQshdEnudZKWSXJuGXV1NQKLtBdoc3V8PJYc6EzuRPtBwCMgFYPXg",
  "key29": "7cNKVJf4t4gHqfhR634bkEo97A8ChVaJUXkYtwssSwVMi8khQVX4nfNV9C9XKNCgsjMaRQypU3CCi9gdWUDcfw6",
  "key30": "2iNeHeqjQtjbsdMU3tEzawfDZxRPD7Mv7df6MLCmRnSqFEwb8FPuVsp3SWRW59fxs7rh7EY4YjfkKDdpVE8qBqNv",
  "key31": "3FAa8aFDzrqaKZ8YvUsK6Qa6pMoBw18dew9YEjWtaeA5drJXXYbXR1fM5YWZQcdEk8rgac4yCjyNbTD5b6VmP8Rw",
  "key32": "5URt67CVazLwV2zDnscLbrANPXzC7VkE3bejw1S12XSoHJ8qAKnCFw9AKcid1niuggVXpr3Z78Fd47AuUGMxKbzf",
  "key33": "5PzjropSdkGprAQU2ESJpyLPjm1UGiRZdnf4QdrsMwvYU6Jt8gkuDijsGsqVo6VJQJgXnUhFLMvmYPZxr8gFxfsb",
  "key34": "5Fbs5fkt4gi6HgB8Vrc84eXiETwXdcMJzuoufZtWqUW5XWKzTJFNdWtHfEPL1a9zZx6bSjZezQgDzUbCHNvFBviH",
  "key35": "LRY7vQdpf9qmr7Z9W9oXdounbGskJCJSEQ1Xwo9xPZW69sTV5WovxfNwR5HQwawktDSh5LEWtsLX5VXEAXGtTbp",
  "key36": "4eYXi8tdxEd8VsBVvZXMzcaUdagzX7Tx9ssXYFrwkKpdP3Fs7um78iRFyVU21HuYYwEMJLm66eaKtyHJysw68Kfe",
  "key37": "buW5pD3vrPkecRWPqNgGsCgaFnGKUQnKitk58WvVxjTvo3eqrVgpjFkndUUsUF559ikrV4RpbTQRVcvmyVZFuPW",
  "key38": "DdaXReeGsrLhLfjEzmf3QMjo8JYaBoUh2eFxSRcW6ie9AfnvN6FU4ZDez8wc2dj1WRns9BPeNwJaqN3ELPrq8hi",
  "key39": "oKmkb9kbHkHouRmL3Hx38FL43F3K5DScaY2S39Vgcdqv23r3tfLrUBx3kunC9fAZvaVkjGyzStomSaj1CzBuipM",
  "key40": "4qrx4zjT5VVJmqSJs7PV5gpihAN23J8YD2WXGoHn7dbmeHY3wJGGJ6zHbLrRH9M5dqJP32Ahwi5v3zvPKzy39uNx",
  "key41": "63JZZCJd3ZxiZuRJS4WQPUgnNRUydPUgnzXdch88j1bS9zpgViY2WvUNxKQjJX1Ew5BJeGcsiU835NbSpZWD8AJC",
  "key42": "3KnqEu9gz2SLJMq6HAnWSykB4KdjYYV1ZXM7hzqPs9tsgVzLruFgJdvWktzfaSx72Uf2DutzwJXzGtNeeC2RUywK",
  "key43": "3L1U9ARKmn9WGgNLWmXFqmGhgzK1DN6Tn5APD4tkNRRVsJur4jdp2i5JhJBEYwhv9gL8ZfKpgQcR2TmkmBDuwCtS",
  "key44": "5rgBnJN5mk4JYdzr8PeGYd2K6peND5Qi2HAPSnCh2kiZjnLyiEBJ7XVFtoHNPfPjVy258HoGDkqaL5UXoFoDALd3",
  "key45": "5xHzv7BNkF5RXGTyBfuCcRQSdh3R8TawyNPv1TjcYAkqyonB8tq4Cexy8zodkYEyXGD193FUVz2oNRMFRkJMyDjC",
  "key46": "4dtWH9voWhmBk5pfyqAF7HukkfwK3qA3x4ghbWX9vLo9v47XvSEBWoHQLdwNBzuFbFF4XmhWxNa5Khjtdy2icD1s",
  "key47": "2MCqGZ99VWBtcoYW6T2LGoF558LSJs7gahsBWx9t6TaZPPjbXJbAC3ir4zMToofuqMtf4nJDbTDKyLrUoA2iTPJC",
  "key48": "5MMpebzXixiEsNbKPypkyQKU3EcivyqAcAxzgn7DPKR4Moh8XnM2RkoEEGQbp1i2my7NjtoFUT274SBTfA8CXTwJ",
  "key49": "61NRcCj3VuuthdQJohybXmcDoxEywsdkwfpCrCdyrJZ8ooTKzoHGT5iFthoP3PsoJSZiTsj1RdU92TJoQ5G4iQAM"
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
