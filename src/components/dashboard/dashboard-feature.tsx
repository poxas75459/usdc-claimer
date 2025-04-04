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
    "wFQxWpskeNCMs1s6aUs3jXHMWRk8ATSuBXaF4dWxkXAez2SyXMXa576TUEaUMoUD2bYzXsQ1GcCNCKpgQ6YP87T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PzPmT7nGnzoyjn8nzaLwc1exRQv3v9gKC5bBTpsu141egCMU8UzJZruqaxnTx6czjw9m23NzDCdTUqJK4vBEvef",
  "key1": "5iSmXy6eRnNzmcgnm9ukNo93o7qPpxfJFtunFi4e3BajekYFcB7F95QYT28xJ1i7fmfbsanxbb8Meh8PK7q1xr7A",
  "key2": "3qefsePnEKimiQ8p3BL6E8n8A7PyK8msPLWtjZhWbCsckrz5jaRo2MVwL8xDh6ji8aZ1xZ8G5mD2UzkQm9Wiak97",
  "key3": "44rE8jDyn1qYyAtT7mvyiNEYbtH4LgZTybQWB6ivZQnJZ6PLrYoahHXrCkwhGzzxQ3uGVaR31m9pt8h4BgbGxVKe",
  "key4": "qBRXzAqK3hocdZofkVYK9Y25UQu2ycqkaCYkNhQWAAWjhBdSn6ZWgnLmqvUx2CQT1brRNDQUEsq52Ao7Lfrqeib",
  "key5": "25rcoxiFo4z9deHNpeUV4aoWrjW9QAdcB8VAsLykcF1tMEYbjS4L2vyroZd8u1mTcPhJ8ZB5oejJSzgvAb6pQaBh",
  "key6": "4PiNb59K1G1gG8XMj8YKpcG9etey1FZ5DWro1tNzScwLzmcYMNuB1q1xqZW3pmRdMBiudqoiuHLe8AF79wnXsvW3",
  "key7": "236b4tTkwEFrcF6SXNX6Bg3uJ1b3QDr2M46B2DJmLzyvKWpxzSpLgVutfbog9oUZA76do1iaPPYumf74EdQi6fku",
  "key8": "2xEWmsk2AwmcHbt6ChrzYRJf5wMYFtTmJrSS5Uuv3J42FejgxK56Ex811muYidSB9jMHNZwqk219qjkRxCzpaHbC",
  "key9": "5F2Q5EpfB8rnXNaUHNH8jV2GfVC5iTJ6uGFEnrL57rAGtMAMVXzYwmVJhT7Li3uSAf8cf8XbvyFhLVpE7XcxTAYT",
  "key10": "QmVdMYAyaenbRvWSWJgB63WX1KUskTZ82AaQs5iXiYf31MyXjkyVZNDJQFmQf32gqNx32QYNjYV8FbMmLauCu8n",
  "key11": "z4ut1fVyhvBMgUGP4Lp1PfoTykxgJsssxpAK8JMiroGf9NMg3yd1cXxNUMPFmVPKDTebJ51tntZX9LJGCMp9cRv",
  "key12": "5KrAgahoDmjzw8xoD1kd3XXur4HJ9Cy41fUTwAAxEJNKbpzfExLYJQXMEueALTYyTAry8LzyNFAhhozLp6Rau3Mr",
  "key13": "25jY6ciDLHcnXkp5PiyxSS8Z4977SLNDofg6rQbfLzFx36byUCzkhaYepBvwJJJ6nao85rGRTmiNybcKafgoPXA8",
  "key14": "4PQdwHU4Mq35d6Lusnvyp7oHQR1iyBVDw56y124sJgPLUQAqjYMsHhoZkWVFuvCzRmJrkgQyVo714JnRHVJkJECB",
  "key15": "2sM7dTgmv7j2qWz7qsFyJXDYohkfZtupADeYyKgHqv6Q88or1U7CaRwYpRAYDKvernLmjJXEaVDvV5iKSvUUrWUW",
  "key16": "3t6awnXR5tM1wNeCxQ72v7mE5J2Mr2RNHweiatKQHbNhUiaFsLzzGczd4U93HufHtLLrxV1i5Rq3YPFGf7LSVMei",
  "key17": "32AHbS6LA3BfNgAmMHhkBwD1zKm1sFBfoYxk9dcpvTbCtGUkuRxK5sMJuPSpo2tS7FrFcKdYpSgw6EH6w51RjfGQ",
  "key18": "2fWRkfY6mmTNUgMebvGUmqjnuRSGkCsAz7A5FbMkGhR6ikqAPaPCP31R132ZhDKdGkxeB1zh9xVd2CvBnGFKFU5H",
  "key19": "3Zt1AodWQTRzKMnfEm9T8p1cGR327aWNURDz77WRxgkYpoorYHpdzLzu9aSvhFiVbsmhCPKG9Rk8dAkhMUniabzJ",
  "key20": "4z2NVRJwL9aFxb9XshnTzMPTA7iquwUFwUEyM31qVcxnFu9DvivEGWa6TbY9m12vGwWwapjhzV2XhCwb5o4j92Lu",
  "key21": "5PMj5zVQJ4L8uMHin2TVbFDAvT8EX4Ebo1zHUtwPZUGCrNBXZKCwv7iMRgtoD3wtzywFYkvTzWmaUzmC5A5wErdW",
  "key22": "xtXcANXKGt1oXJ2DNdcXsWBfsEJ8BgunD6wujhRgkAv6iPwayHWzMHEhoTQQcAjCH2BNtv8CLocTwm6eirmc693",
  "key23": "2H5P19vprggk8PMKF9qrPLvomZxMVoScEsEeXJZjh6DgqD5XRp6bHzPwpWoKgVFaV8jJ2Hp3SxYQrXUuvGS6JmKG",
  "key24": "4cs5mSkrVPkZXuLEor8x8GwX3euUBFx7PzxMFFU4FcUyJ8T5oX6WaYYYjR7Fqes8EY3hsNevXLiLBzQaRDoiFEbh",
  "key25": "3m5a7ST1k32arVDXWK3vCRaJB86ZF2FUyxsECswjXP1cpRGtFFkQMuE3vs5TEUv9yY95bvSLFB7Q1mR3Sur5EiNw",
  "key26": "4tU15yYhZoSmwXQGthtvzD71nC5bMPBNk7eqALmSLHKkPotc2XsyFTtzirNmUiVc5XShBhaL1vTh1sxqAe7ypMLG",
  "key27": "2Mzu6ae2hU9c8buXXPNJhjjr6SfsuWUdt6skktWL7M6faNAp1KWYYuoJiHfvW2kXT5hUUk89CkRnW5yk5nQ3q9Zw",
  "key28": "2JGA7siHipY63sh3yYqDqP4aoyxBkH2NTNcFNzYc1fLeELBQ65B8orq6DnVPdgsQDQ1TjDqLmkDVjnzLqbgAY7sU",
  "key29": "21AqBMJ6nN7q8W7nhsgURDGYFUmoUsirgkM4EQv4H7xq8M5QjeXR7YSKwtzSPExCieyJfMyeNnorECq7gepCmCtw",
  "key30": "2hvLd86ENAAF8vYhMkhs5kBcwrbuct573nC92NnKg1EUnLPPXzbbpdBRk2T28MiyweLiLNppGgdbkCrzVoJZopkx",
  "key31": "2HpopBbUhYvF7HEq5o2qnZdPh2eq27EYa3imcmnteuCcqCMKMQQhayrPCaQheAiUn9LiDf5vD4p6nh64UMiLFbkh",
  "key32": "63YSsg4KZMHZHWGxTFcAJ9LzqG2MKncHoZvaszCJrgaCQLX5kicuP9pnhAzWQUDMws1PxsiTCQFZvrWmPvVu1E8Z",
  "key33": "3QaiqH9tqEt4B7TB7Awbt3sLgZAGJ7eKw4YjCX22B4CxAxuixp1qQDhRxCCjjfvnx3ndJ4J1WeGw6Kau1MhtKKrK",
  "key34": "22ZNSKxeBHn1A3EzskxUF2j16kapYeEDhjAjUxsCM8qimY4C8QZ5x4SxumpK6RUxrsBP17kaRerStnPf39BGwxZ6",
  "key35": "2kMZZK7S6fnqmSer781CZD4HJKZ3hwH5TAfsiyCMBaDxKcSxFmWpGWUi63CEj2VAu7WazLZYCCLBrQu5u1jmGK9v",
  "key36": "aSBYb3zQcWdhGxPHG762APtXdSbpVqoKE7tjMTyH8nV7YUBGug7dmfFVY5ivcW4xmyDqsuP2FWygM5rivi1t21j",
  "key37": "2mA9nw2TuaWZb6svGJ6N6odnBPXQPkChUkny4CvcGwFQtZ61a3qgkdXJ4BdNxdLG6ggv7XKwNCfBFTXJLW8AqMPg",
  "key38": "3ZiRyj2dHqEWK5kF2C1MxNvkvETQkPKKCg5rPyyHUi3KYB39z7wcmetHS8aC15xrATcyRWhmUfFPaFiXAEsrCUp6",
  "key39": "29gTXLCQskJLoL9ZYnB61vfkbDZCGDtkar62YbgwRMfXos2JLfqnW3Hb6C2tb2PZynTzDANCmPCkmqfJvid6PwXQ",
  "key40": "4Ng5iJg6uQyAY1PxHaNMR8eDiJ2CXAK5VTheY6dhHSEt77bZ26eRutVPg7GEbsx7qbvFtVXuwjCu2FnjAsHmL1Qo",
  "key41": "5iRANUahruaXpWfta3tjZy3gE59qc6cbqx91oZYN9faGs5ibvcbajp2tK86KjjEX42ccR9pohtF9NJiyewTCrssJ",
  "key42": "64M6acULp8CGpLyYm75zGNMv4bZza6eep9FvRRCJi5g1k7tkh96GK2Y8s7j3gQ1WVjsK9vuqdsCLZ6kdFRnT8Bm7",
  "key43": "4hZdbAfSV1BtqUmttscbWtUzWgS3FDAyBJX7GcDG3cuKYGhJoy4omWsrmGyAb7CcHvWVaYg4qjt1z2p29pAQn9gf",
  "key44": "3zqEdjD7SB7sfJqHGzkAj5R9vX42dsoeAvBa8K19FLgFeFYNqMV7YstYtsgt9KpCm95QNhAsR8AmHKsJLecPwMTo",
  "key45": "uoiKrPXqZmge9Xe3St4osZwnjof8sZassvLgkNrCxXf5PeY9Xb6qhSUWzCS3qsh76q6Mi5N919oeK7H67gBc3Sa",
  "key46": "38i4cLSVPPVduBAWJ5RdD1GM7JYR1cM51LcrXmwMG8Bs8gwbyXjvF5gw4NyQd7cgWETCUwpQFkyTj7oaj9mknUMF",
  "key47": "xB8dUWrUNkfbcRNtNoD83uUtiN4stwmj1rvJa3cCD6jRpBoMjZhHVH9Hsxin7etN7B5rck69ihopAkhuSGTXhei",
  "key48": "Lj4HnyMnRRnWwbGA3PjzmmTjA4NtQDD1y1C2RVVeMxLm5fN2VvtJNjEzasqxDrpYdAGFXi3VTRdTYbjmX4z8zpw",
  "key49": "2L655ATL3HkVWLCPxZJSog8KfcXTDeP4dDV2PTA1sABZUbZwNL89v48HrokY1v7qi1aQZVtXUQ7qLYZ6nmPP3f8U"
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
