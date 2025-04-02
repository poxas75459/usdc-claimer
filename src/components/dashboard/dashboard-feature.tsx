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
    "5nbyCPMpNPoowzWncchsapTQbPZD8pfj1KS8LCx6EKDrRiNpMVGKre3VtG46ptWa8KDgWwbsRz1biqrYax7Kp44q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DducgRHtyuPEiuSqzKnepo5UNWUNBpj279Bo1kq7emZS4X2pfPZR5QLSEwc6YpwYpyrpySh7pWjt6ARhjqgBzSj",
  "key1": "3fS47EqoLMQKoRhnms1VQtM2qZXn3oGphzErNSy6J7ySAsDmQ4ryA9wsYjHyRxDBGbfzZx1yXEMZmojQGk2wpQYq",
  "key2": "sqU4up3KFuQAPa5vLtB47kA94ZNFENd75rzrHucsJFYeYX6WDjSimtUZncxncLqq7i6dhE6FJ5bjrQgTYT6K2WY",
  "key3": "49utYUkVKfieGh9AkPeEf7MmdgLouVtJZpsyE44GbVcUaPL4eaW3Jd9HVqP2r5YbJhKF5VvojrvcTVHKQegZb8BK",
  "key4": "5k3eGK64WvH2VHhQMwDa7qBQ96JTWdtzVhTW2nQ6wZNRxJ1HTnocZJS5srSfZ4NYjfJPBJ5aAQ8BBUrUHKzNg4VY",
  "key5": "vxsUcADu8eGMvDEARVUaRcfGrx6YzscLg4EiEJG7wav386JobQu5WABMQnpG7TtZjy9Wr6qyRhE8EJPuVdMAgEx",
  "key6": "5MCxwr32jm7fbEvRKtBeVAdNUmba5xmjEPfW9DZzqTN4NhsaGAoiNcYr3vAh8Pa5bmjxhwzi36TPQ3cQfhbL6Vi6",
  "key7": "45bB11eWjwg4yVguRbfcd46VxhCpmutDHqXKALHvtsyRyo3AADpeAn4j4H3K31ci4DtE7ksxgzEYUruhyx978oLm",
  "key8": "2AGPwbbcH15HFscYq8DhdsTyLLcCh5vNSbXFApcW1h68PkHZAnoJgKP5uhYKxVqE6vA1GWwQK7cDwFgWc7LNLgqL",
  "key9": "MzTX61wMbPDTAh18LzUHhnGK9w8fUs54iAFRSd6uL6ausHjAJPQrovEfX4nVrMmsd9mYNYWTbA4NZ9QAb2cf9eW",
  "key10": "zLbRDw1MF5FD8Fy2dRfKNigFE8tawcFmHGkDXDLr19EbLBKBD3FqqGvzRrKr572sSLFQASwpxQbntZmdYptUggd",
  "key11": "bZ6XtpuSEHyhzWWAPxEUVctyvxL49LL6YZ1qa1K6RKxYJtDEAQRSHQBqhJPDLXxboYCDHFBtGGWw6dwLJjhP5vo",
  "key12": "2GTHtqA3dtM8YECrD5hjp3ZvFBrjRsNjxmutXazxEszjsXCG41vEvsFuiHcKGp2qac5EpjAA3WCp44bUK2ApcNa5",
  "key13": "58uetd9AoDTGaCWvwvbuSqk28bNuvx1y8Ygiab9AYSFTy2uuMtHgbujHYJhFWpsxvVPCsMTmnh4SoaKuqRQWHEq3",
  "key14": "dAUCwNdtTKwnLcPhCXkbFXhifq98RQPSCEtnru2iXMx9YHBRYJ6ECwnTzDMZQncbWzdMn7j3DkE3tHfrKN8aV6k",
  "key15": "5FLTayDXAWFAQa9ZfuhCM7t4PEvufe7m7By8A5zXVm5rPaU9KXp6sPPpiFmMtQ8ireTAReL6XxtL9thdkrL4eoK2",
  "key16": "4kEwYszAPkXQsQ5LmvNX3y1uLxzFjKwjXbWCUdA6cDejMN86ELiANEh8mcA2X1rhUjanrshAkVTWcdf6bMcqXKYs",
  "key17": "4sXoJi8cqfHJAPVgZjhMPmTTUzdGpxprrU4gB9ds2KJ5sKNfA4B6duMhRK3FhcerSAfgbfc147GtRZrvvqtimrjx",
  "key18": "5SKvkK79FaB17kfWpxugTeZ9NzUZ8Faeo7bvFzyupG2rErsJKfo2SESYrRoFARpg8vjr2sRXG25sgAJdn6wVZ32G",
  "key19": "3MT95XVu38z772Ds3NGwdvGgNpFFM58SeoiU3gj9xa8AwrL3GKnbGoZYtB4wSqHbXVJJtKNzqeWknU4iXMabMp7b",
  "key20": "2MYjQWEUVUaXPkuJvKufip8YcP3t39wx3cKumLhXcx5oWKo5YhFmXL1DjzqAXtegzfXM56U1QWyiPCb3WMUK3Mst",
  "key21": "2FmehL1xvMqvvhemTvJqm5vAjFDYnUjpvftfuBbfcmxQir7upXrPfqi1G479Qqx96oskoGie6GrmC23ZrXGQ9rUu",
  "key22": "55Muyhp6BEmf3bEvvH9sanp2G6rGYnQNBBHyhkUmFsHCQ4cYdvtqPRSRHwAyMku7WsXvHrci6vZQHmEMKAXmeCsy",
  "key23": "4xBD8CEEVit546TuDVTpyNuuMdt8Kcqe8Ke9wzcKKP9WPvx12oHfbP4gVeq5itG7uLiij4tnSDT2JNiuKp5zDu6G",
  "key24": "4akzcTeQSDyYzoGwsvGcyxzc2F2mr5wougcSBMCseRhXxJxbiE8oCC88AsPjZM4qhyGQ4hRDc4FcGSPFBqxPXEQg",
  "key25": "4pdTkZpCKtqXHwE3GrZVnC6GyqW8egHaTDsChStv6rZWTsGVUW83o6nk4oWjpptTbxA3MHn2Jfj93vL9ZRTdqVZC",
  "key26": "5p9sxbSxQu4tYUNQS8W8UpsYfdmZ12Q4ir6eKJV3CeGCvG35oW5SuiGPPKhzJAvgDU4jQivmXQhApENeeBnTGmi8",
  "key27": "27pWVTktFMvjDLc3T9zx5LdvTDHyFk6XnqkxLHgyg1wEqJXRKGQjVBoYJS7soR7x8fDu7zFYxDNJbfD7ZKQaDHDu",
  "key28": "5n22jR8FgWzV2zJ6MikbNFkXkDrx2nVTk6MLtztgckLUbULnZ8ffhwhyih3qva8AwvGutfG2mL62MkQecnmXeGsJ",
  "key29": "7CiMoVymS1Tov8vZY9q7HZntmYS7yUWFnX74Ee8Mr4d9akbbyV8Zf7t4XnhLFXnQd6FNMWX6qFhVxnyjABzuR3U",
  "key30": "5UrJdYZNTmcy3EueiC8z95LeRGLGNosb1tJMxdjqeRQwrQp4jtqyAN2A6WBQGk17qwXa2X4NrQDFGeEW8r7dQpez",
  "key31": "7vsd1WbDR36eGRGWkgmB9kL7viBsfvxJXPKPQdLYVHpoD8F6phQif8ZmGFs9EKXwSccygAf4JC5xKdN7xHHXjD9",
  "key32": "31xotirfwDP9X5EAsJ4cotj8h9YXqJb7fTjWdCv5jBH7J9B3pd2jqdt7ByjfnLWJB8q69Vhs9dwHDHQLRk88gQQA",
  "key33": "2ebeVLTaauN7Ldus6EpyjKiLSzEkyvP5uZGkAButXjrre4xxf5iKYrEVzV8vdvGgpTcXKeGY4rpgoYSjmYogFVsr",
  "key34": "2B1nfbzC9ZYqEB5s7c3yk2d7sXxuF6amUiTg3B3JRKUyiV5LADJx3iL2FgMeD2oWQZiJLj5qm9P12fUaSRRDqTp6",
  "key35": "2Gf1gR2GqWFDeTMngZLssajjP32MtxXn4hsFzCL1AXy5Vww94CVM6Enr4pgfSNKtnKPAMSfCNMGg16qKGsdRU6pp",
  "key36": "3iGFN5GAcPrtBsEQ7d9ZPQNkfdCWZyXimeYghRYTRWgaEAifdw85eNGLygDS4KpqTZCNAtUnsfXskg2DigXfBAGz",
  "key37": "2H11SuBuMK14S3XrpDWSRQEa7vW5oXWv95WfadFBX4CGn56fpkqYSYAqfqzmtjYxob77SXsGaZZicVLukUVXk7Bb",
  "key38": "3aVgiTBEyqPU9utCZUu9E7Y1q5wt2rXkpsSv2diu8vA714qE3xBnFoPHK7ZnQaoqy6LMo522jbittohzHBKdyrZn",
  "key39": "5nZWT1Eh6RuRvzChpXsy9EAsTS7ccrNL6s5oZATqgVF59gaikScVEjceqrxNv2HktYa1UkLY89GEPAY5p5zgGFpC",
  "key40": "4wbvpc4RRgjjztGVxbdEcmTakkA26eyLFtQ9b1WsBZn2QU8jsjZQVv3qoKmjkhaAs3xuXDvBEe5MHrDsgrZNwnKw",
  "key41": "5hhaLR8ijhfyxpLX1eg6a7F6zpxGsB2c94crQGouvj7ysjVCbcQHgnfgtuhwoFN8Ve1BDsRXfci2ieQKophKrjMR",
  "key42": "616tKuzsirwE2nwoZjUCUfrSYRFipqAw5svXXRnyse53uZAE3ucSjzir3V8gesh52WTqpUZ7ESBVCa38PBBQUc38",
  "key43": "4hAtX7sdFmtFK4fU2frWr9yHeoHafozM9atUmnwWkL47aDUtNeMzGACCk4XnStehAFWaLVrYvBqW9F3HA7U9MQuu",
  "key44": "3sHg6KcsXw19TZyuapWSRXZbhwzQQH2Pt92eC1nnt7gEwih49mvo97baGdPFbUhf1T4DA1dJy7XPg6oYoZS2S8T",
  "key45": "3oLbk3UcYRtxYxPDcE5yRfAzLz7ZVdUWbUCc4cvbssG24LqfzXV1X4JWB2taibJaYkkgvXYpogVEf8vywmCEGC49",
  "key46": "4MWnZRayTswtm2eE3SUW5rr5dECi8cDDuZffGr83zErbtw5zh9em5ANX7Ra7eLFa1NbJiysEHm4Frc8uBMwZhMpB",
  "key47": "AzStpxwRV1hYdYPSGYhWZVmEWLiu47fYcHZgweVjaZ7zu5jPRzj2UKaJuzcymN36CGTNg4fwmitA6efC8PDHvi6",
  "key48": "KBKb2s7e4pkri8BYVxnsCw4cVuY8jHmPxHhq7bwp7Ys4VKsmMMQSXLKCyoaRrRz42EhrRUP8TjbirQo5AV7PnAY"
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
