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
    "35Tx7kEeRucVNcff9was852X3QbDs4sXF9huU4JZUV5msBZSvsjHbtFgK4zEQwkVHjvTrw2nkGQgdiwXhq69G1v3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MD7Du9gfqAdu169eqAoCRMF33bVv3EPQN1BwswnzCZxZjU5UizEAKHANMaCGr3hnwAxzyAogYeBnxJymEUc7vyT",
  "key1": "6Fvmy6v4QaLuovcEeLJjHztiqweiKGKLr7fj3dva67dopdV3q8ysR1nWWvEVz3KcEKWdK96mKBMAvz6NYJC1aXF",
  "key2": "5u3q9CCzBrJ71CgPV9paagNuVHNnqCfCmoiG1PjgaN4dQhWHtivrGgLShe9MVdjpfwNXB3USjXK8Z9MEEDnzB94k",
  "key3": "4ZaVuarucs7mLWxuP1rE4rTzZFXErc3yZttGBBSUx2UMzAFQy725NHaaTKxGgQPC4EqoJ5ckMXdDo4kTVtAMfJ1w",
  "key4": "iM63XLtVNjmkuSxmvNnbTXK1jDLK1zq4Ci4Cb8iEzEefM84qsc8k3TuWbaxE6ThKvFv1pAf59Qgd8iyzGAkoCWq",
  "key5": "1yRX7kUTMoSQaQvNNLM1x7BnbZUGptQJiRW6yzRGY7y1DCdkp8fuSNMBuBJD91smE4eKLzNZuXRnnAhWXE5E2za",
  "key6": "3KN8HFxvPr4Yqz6iToUrErTPL5HMCmEKDotLgjhXSwGGsTXd1QziRDtuQvBjsknJ7ETJmGiv86RbNCPVS6Dr35so",
  "key7": "41RYc6C8VGYfswpvXZqESSNP8CRmHqomStHJgmQ5tE7Uc9mXFb7tkv35VdKJcThu5SEkVMp89XiXqKgVP7RsRCkn",
  "key8": "49LS3pkjvDRxMZPTi5mEZBtr4WTrZzNFAR3QpNekEA91vawyynaRDBUnVP8xX3j8mD2ntQc78dyGp6zSiERpDVHk",
  "key9": "3gpmGBBRWZpdMQt475SAkHWF31oYMjWVJo9zCShLMwmkuq1JbG1UWuBuKVEoTJVgbnYpdt4A8yxaVhPsyapAoRFF",
  "key10": "3H9bo4mSJKyQSSuEYyxnsWHLMtGa4EyXDKK9JmqBwQsYgRmjnNjo9TGHKKSMK3bLYCC7rmxoEGf8xf5Qr3tUe9U9",
  "key11": "5YrdzNHiqRYD6B5anWF4ditL3nZjec7nZTUmRP7wsTwG6CcapXLwnTQdaSwH4yY1SKY2nhtcv1V5fj1pwDQ2QbQZ",
  "key12": "4vVsbmaxQZBTBnmXxB84DCC8BQycrz1VE5AM2uF4deEjK4yfwxfrYChEwhcdUkAGQVSz7HcGVWkAvHqTn6Dd5kE1",
  "key13": "whnzz63Ae4mMek5cLfHFAnQUc19y1UtFj3DAgE2BRnXagT5dTzxN2KuoRN7jcSDC5ZaQhDKVVMjNXfpeeiKYmzh",
  "key14": "29DnuSjQrVP5yeLvrKthURJR2AFFiEBWHL4tYpEfHZJwHrBZssLc2jBhhACaafdu5g7TR6A8rcau77AAbpJYAFN4",
  "key15": "4ujKk8piz6j6H8pjYtuJWAZnv3xXcJvDoEn8C42JmKeemtbYHkFSi3PyF9dduUfys1YpvzwLcdUYXkJUa8qx7zde",
  "key16": "2hpJuvwyGxftQsAWwf9g3UVkr2HQ1yKcS3d25KsPi9wrNHHkjQzVKn841gJPNX6S5Xstg4hiUNhcEdqHYUnDGzNs",
  "key17": "3bNprzgD7WU5FofPjwA1jZ26vESbZZhBJJKvD3Y8CU2YNQSfp7ZgMSbkosdGFBBBVcioEHKQMyNtaBz4EXWdB7Ln",
  "key18": "5pK51quxBRa9W717qvw38SF58JLv3oaaQu7J7W9NCVcgLDmc2bpuuXPhZrx12QaUZfZdw8CVXJNCUkjrVPbS3x2F",
  "key19": "q7YQLotXSQwjfuzDNmxjwt5Y6rvXceRH4HSQokGmSHKTofugQbXogatbZTJxfWLeoTBaqBsTbdCmXk7NqhbUdpA",
  "key20": "3EJnk49gwmVf5WKF7wESWoMHnZYkGEV67mANqvndawVZ6wy8QFGDEwHnBBTyKtT5Gkj9s2WSafKp8y2jJyp52uYA",
  "key21": "2iJBrQX7d5pvs1pAn4QcMqoJJqkiybqBUVNHYPGocRztGtic3Rh4SDm8sms5XrtMnRNWSbdikY2d9pd81n365NXe",
  "key22": "4tQV88yvYcbiEqBGTRztwthy5P2ags8tJY47F7wZZT6P1PhvLotkbsPzJy6G8UrEbN5zdtzjmg7G9HbmZCXaZsQ1",
  "key23": "4Y18Wqpkk2KueBkWFCP4QPdYMsRjBkEBCQkcw7ihNEWfLYJ1MhDKfCrdZQsxRGmZmdXJ8vDeZThi3XmL9EfEgXWr",
  "key24": "QEPX9bGqFAr4fuY47F6pHLy98rVayGyysLuG1eoYAuXsoTZtUX4eqcQqCug1XJA4h7wkzSNp4WJRQNt6FMXjBnv",
  "key25": "3UCXMT6vkoPuc19PzCwQmTYWkvE2EGCc7h43DNyEDDbTUuGyB5aMHNpdNXXs8gAQjRpgLME8vkYnKBcHckupePGg",
  "key26": "5NUCkidQWh87xHZqufFJucHZhbU9gEuxk7mKGf2HD6K8KEFeJtxSmVCw51j33gAAitY6XBnsXusAY5S8AjyHcpFz",
  "key27": "5PKq75DPwK4ELhwXNwEJmnFjPtm2LXtGPNRrFPkpWBWGsJiBModcQwftg5J7bspvJBQ9Y6JRieEiPLRmEZmnFHSR",
  "key28": "UuepQG62NgV51wDpuZbxv8PzXxL7N8T55ukMWCdkpYRRbBa8B8F5bgxnyLLqEYzFokMq74nVbq2Hb2Lc1fnuZ2y",
  "key29": "3dTfM3UCbsF5VWB5Fy9hrKTTns5WgSGY4CyDXbqGzj6RtQc15L7uCZBWja2NyYnJAg9jKCcSqyrxqSgJwKn5KDuk",
  "key30": "54ZUdaST2MhKTRomk1iGZuuaaRUpPFGLYN5rND6fv9C9MD9cRFw9kvBuUfmhryuin7CrwPpW9KB44STZ6EZbgjwg",
  "key31": "3BffZSrX24T8KeXW3yC1RS5tti1a5JmmVCKPGYGgVcXRfBvqPLKaWnuMWbXFSCfpHVWxrQBh1sVgM1jh5cYhUujB",
  "key32": "2GaVnRqjbC2srXtsKsN1mGcUojPyqU2rXXemiES3K8vEkHbLZvMeKuF18jfyEVkSyqRRETTNTcrzpWae6qgmtkRZ",
  "key33": "2LPnTvyagd9hPgossasU2sFDiin8UdHGrjdMEkFhbmXK3dkxabSxGsdksYdfVx1LaDaUyB8XTX12UMnVoDmGvfaL",
  "key34": "aS8whKafK5WxyGk9wmGgjySxrvcmanX6ra7EQZTpeALAVxmaiQmVQxGtPA8HeF2bKzjxeF1v5ZV1oCL9jDhQtp3",
  "key35": "3gnv8Cr8E9cwXuy1iKymkvFy4M7LCTRLYyvd6vsmu5kpbLgTjfSbBczfShjsGPae7jHawFuuHVNYgKmbbyKA91AC",
  "key36": "3MJHFNm9jR31gV3bpSsvY7kbDcXCSa8ESm8MB6cjHUQ8BkFBHzugcEML2UYZtdek1tJ5J99enpTEauq3QLiDbHuA",
  "key37": "27Bnhr7vMzaAFxzp7hXsicRBcR6wni5dh64PQfm53YnWZTS3RJdAY9D4rMzj8oxkJP987pKqfrTv5BddPZYTjQ8V",
  "key38": "23EHFdTL9iJTLBL9HwFTrGN7HRVcAKZTafrmRvMwbo9BRw3hE9EAwjgEesm1r3CnmgNsXwvFWtRQQad92PYxox54",
  "key39": "3UYQoCvodFHNYX9ejgh3AHbKNLAR4fcvX9EPF86r34MjQH47jpAf4EewYit8VfFsyEQAjLDrLYRwwUFitPQ4XS2F",
  "key40": "67JYoLeJ8vTNkSx1ZT3BQu8Z2RTxhrhYBGdSWhjgv2gvQopzP94Cn949WWCD7tQPxWLWq4QqYfWUe3bD86vVpBRz"
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
