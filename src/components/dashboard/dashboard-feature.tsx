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
    "wJJoMzLNo726b1sBHnfVDHe8YepWGNe1S4GaDn2P6BLm6CofPWniwh64zVyJDrusy2cBFhneWmou4LSpDkPHPZy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NNobDzeeKv2mNdcbQ8TCjNef5KY9pvvHn4Y9Ut9Zwx22zTJvjEqpmexU3bm8N4oM2vSVmfvxWY2Rkk2WXogJEwD",
  "key1": "63QLcw62N3MDpm7yLwpE3yU3DfaH14VRVJYS463fwpZy4u2SqoCZbHSw19JQENRCNNQ3mduFX2fwXPeFq3eTeStF",
  "key2": "3jiyEU3hqhF9CqvYT9x8LzkdbRWZzm4RJZoMHgraLg7rFidqZ6SQQHHDQLSCtGLgxBCfWjGVkdZV7aggwExs3wzU",
  "key3": "3PaU1gug8HobHqJh4kbR9dzs7J9dXQCb28G88FTtCLCdBfyqdn54A844QTE4W2u33DC1xqpe2BfxiwYoGaTXzfH2",
  "key4": "ffXqGPcrFGKRfxYf7niMxnV9yJkj2M7GQe9wLGbMHFefY8Rha5HdKX19LPjpgLoogZ6N68SAWeRYhdL3FX2u9CW",
  "key5": "2kNty4P9QgAu7gkY1uNwaYHCLBi21DQ9TWScgQLRH2kFewQGECFUsqbfmFxQDCmjymDrDuyZ126zn8JpNWGoz2Va",
  "key6": "HeGjyEAy9q36YPvAy8yrgHn5R4P7McCMCyzVdefjSJsnixQm5kGEubzwXcRYHVR7U1rNBKGaxQDrYhX2kNBMbro",
  "key7": "5ENDmQNVHEYc2wnf2xuAYSK7qRVa8AKuKk9K4RWfRF7VgbTbsC5yqZGp6Q91backrDZccijUuqLvrtWgnxyVHGAX",
  "key8": "3AQFKtXCrpM4miFtVEFo4LbQGjoAZiytyvrGaXsJ8qCawh2K1EnVhc9dmyPE8QrQGTHFZLfJV6NAia35MmVyQABf",
  "key9": "EYDC6BJxpEXo2QXGwgMkV95TkpqDDsZL15zP1TX6FQ4xyzGAujuWXedTnrnTTDWhsq84iN5BKczAUk3fmjh5wwR",
  "key10": "4HBkkknDXJHSWEzGi7Wc3EEbcv7jL3Pev4t9sDXe9FM6W2sNmnGG349ictpq5aBwT9JTemA8LiZN12BYqgfZcwCB",
  "key11": "2hnFR6aatYy8weM9Chovv5vBP8QPdUjAhLqZf7uFtHobwRufPD1u3hYFFC94ZBNHfPzefMJqvFjd1HzRbQHFbhj5",
  "key12": "pAhqfm8CX2A15G4tBtNeUBMy7AHKdjfxDb7xVLA3CUJdvsbCVrNhHqram9G3bSgs91ihs5gay1DJEMouHWisrSx",
  "key13": "5PanAmWiFWz53SWAmPPygqZAMVxTzLbbfq2SnbZrTnQFAV8EZVJryP8ZH7NY5PjgBovwDFEJ1ZpXZMtVAyAE2nVz",
  "key14": "3PuCaaLApjXxtGrHoi5Ju7aAu6Pst3z7c7ticiZEHvSqCFzLtJSQV1wu15uMadr6xkfC96MYEBKLQ7WJpi54DDiU",
  "key15": "E9z6xa4EoC1GLZYDrq3XtGF5oELREBqvi3abE1imkPUMAdXBxAaHJLbwn9FefBkvpPEpp6dsjB6uTrPXbxbQES3",
  "key16": "3oM5w1zAp9hKQhBbSRooWC5Johkk9XqzHBggKWjBgfMjoSbQiu3kXGEktvbKjboUEErjyKT2vAGujSQrHN7PA88Y",
  "key17": "3thSrUJN4kEX22nFZ6L7sEQ9GL8SpjYiNq8hHeKnbx7yuFmBqcJow8TRfS5kUNdGg5UGu4PUo794qNGxGaL188Mr",
  "key18": "4vvxSjfuuBNcJk3sLXjTHgp6eYQRPpscj6PcmZdPitRNCWz8949igtMomiV513yknxBwnnMGheAr2YyxVpgmNHq7",
  "key19": "3QxvStrgzxXj8U5VLnbLD4xZyeKV1HXmXibWDtiRQ6VLqEZRvgUFJ7qFsaZ4n7nv7y1PyEZK1fRbyCDYBJAx2Dx7",
  "key20": "yNyTZKivNd1ECraS8sL6LrcaLLDsXsBMZim4jmhH8uefCjtE5G6iNnRERLUqpNax3QGCouchmLmGykiCwUG6T4E",
  "key21": "125nnfksPYwSxiEsRer2vfR5xhTq4BgJ8Sb5pcyzaoFcv2nmqD2sCPqrfwypuCXdiAJwVKxJH2bYTg5xVPCPfJCF",
  "key22": "43XUTetCddSVu2MxhU6ofQCia6LaLXHXtF2tm7jaWC72PnNjesXMDEJwgX756uuMgs371pnj1LyghZuHQUmkbJ92",
  "key23": "5yJmuaFeXTgrDDzymmhL85hn6M2Uo4pW9gQkVj7trvWhsiDLLub4LVLxERir1Te1pcuPnuDujZW2ZCRmgQoDpbNh",
  "key24": "3y49d34dV4sVW969KcSiu7WdFBmFDFsDeFBaka3jC9rvRnwWZ5XL2dCaySp92Qe6Y6qKiXgKHq9ebkdomwj5gR1c",
  "key25": "5DysSAQX8bca6hXXPHfuVo1JxouSTK9EJ4fkHazGrCvw7nmS8HUTRpESqg1jXgiQ657XNBNMvwPxzDqohCFvEnq7",
  "key26": "3HAfGgkECMaChiNHpsvUnfWCUkfZGHCzgx9xxpUQxj74iyR8Nihsu7LpV9LjnxJfAUPvRBUXwqbW44WKiZTHrAd9",
  "key27": "5VLjYDJp8PUCtKV5uhmXnPg1Kzihz5SPcyp6TRQDVFgzp7oSxUVc8hGN9uwK1u9vV6HBuiarGmLBoNqWRzCtAvov",
  "key28": "2kp622CEhsFrxUKc1uosVqGswgCv7wRj33m2aiFxXX2iLrzUqLyE8a6u22ujkQ4b8k8cZNoqHnMUcUwNASVqxNv5",
  "key29": "25gHvEA4cibxJnSFLhvnS7avf2iH8BxKsSmm3pCUVNeTWH2TAti8JbGBZ3nCydAwLQnsxzfQYniSdKrzRKjZFS8C",
  "key30": "4nFdnUaMvnHRQn46Dc7CMnVcMTUdMAuqNZ28enQoxzk6X8AooVBPuHsiV2kfpUxwWSkixrW5i6LitRHv7q3gJjvs",
  "key31": "33uqCUzx7gmiTce5x7Smh2AcjYT7HeKPZhvaYikvYVjhKE9BWbTeyK6pB31wmMWEYciyVLTyGTJ9BpUm9uAhjZ9G",
  "key32": "ZB4K3tNL6Ht98cakWGy1fwJ93Wa5YUWVoFLj9qAbn6SjwtZvgxUchxfwM4JYLRj1XwM58gP3xwZ6McuNGwdtcFU",
  "key33": "3vuNfLTgtFoosLnQQ65nxYeGPmBjjZ2RxhCCUCX4RBre3t6AvSHVeLi8mgrqkFaLGEHayYpyXKfFLFnju26gRhZo",
  "key34": "2f4CipCNVaS1ETp1qTQxLKT4n3nik56hqap3ZJijSdZmRQJo5XCQH2CpkNiD7DjXDxkvRiQJ5zK65HhUthdJims9",
  "key35": "67M8aVB7rn3Z7XBfDdx9Zd5HBnK8JpevPW2QjeMYcdzpeKnYpCRpWV18C8j2Pca9oNFnBVqoZHkhaKKFxCKDDXNB",
  "key36": "3yWn9JsL69XAJRzBF9UkQRCNVtCxkeBXVCff3J5MxSBnQtGzZV7n4vHWc49dR8azWfVQpia84FQwWFzqVPSAcfev",
  "key37": "3UCNBpgQR3zSSEkb59CUR3Yoo4US2pDLeMPKmLeQbSd1aTPTZVa3syqbxWDPpTnvFKYC28S9BPEzpHSZjfekZngB",
  "key38": "4KrJmVUE176iahiXxptBJ5R8UvEtAZAxDjjJUHCcvoKShaRTPcsVnnG6pEL937adDUShSNmG72Xyqhf5NjZomeED",
  "key39": "5PgsGBXXcJNfFfu3YygdMDqHXFZnvhpvMTXrF7rKGi631XQZFdd57d7A5gxjxX41zN5JdaKcRUZiKabHBYxDqRhH"
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
