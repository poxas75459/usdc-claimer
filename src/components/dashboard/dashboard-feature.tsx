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
    "3LGC9J6D3mzVEdzLUAprt4LuUhfKWds8sQ1KrozkjMC6bmv6CLKbh8c4GqUpd3DGvp6xxjep5FpgzmgRuumAfVoF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jJJRhHDmmwQqg9CQazqJG1C8tAmgVgzEwM7SoHf2EL3sqeoWdb2W7tTnK6qRapvgexXtiBYEMywu1cVLYXQuBua",
  "key1": "YQNRLgQNRidKDvzgVVd8ZaH5HCHL7vpj1JNtMvg8pARcsqa4MF2KLfNdMfe5PfSSBsQ93Dcv3hGU96wrXEMYsSW",
  "key2": "5Z7W4kwfycGTso6WJ1jdxCFJaaZ1d8s1bpACRjxK8yg1Hdv8KJWEm4srjHZqA8A4qZbkqEprWLV1ee36rXSpngkT",
  "key3": "5G2HfRsaocNAYH6hBC46iSQ6ywrt8mn5NGNnc6uSRjeUARJy2oxchpx9mZZTe1u1ruNii8YhJBJpdgbPxEguKGv7",
  "key4": "3rYndDmK4GQKAJNXTWHGdRHdZ8bQCHDZQMp8L2Pno7VwZbKHcyD7fUd9e83STJSpwQybrKuwMQNpqKrvn9XjUpzK",
  "key5": "5CzkYNeKbRzcVKdwDYD7K1VbKcpan2LkrF6vEV4n2SVHMfro2NdCDyvKEDhyHpGeqZDbVzbUNayP57LGqPnHK5me",
  "key6": "ChuYyG9eiLcAj7CeF1AmWbWrdBuo32xCPjJTy41XWtT4zKPXyXMNWz9Ar6vkD7UbSW1rEskhyiXxvL6F5kL62r4",
  "key7": "VvDNh2k6nCKyWHBKh8oQapKbz4ibkLesB6JGr9Gwpy4UEiGHDmkQqE6cMFyGmMh6rys7nPb7LYJqD6fCLZbVE8Q",
  "key8": "4463RnxGRKGXPL3Hx7CezmhSReStGjSoQjhrbTQRAADE3a12oHf4TNRrujzJsSfZHS2KCDJDNHsYhc6Zayo6sNTJ",
  "key9": "2qsTVB9g9MJGBQ2m3d9oBixV1RsN2Hj9ikc2Mof9f8Eprw54o5cQJSkSA9zbyoe7PPsRaT4H5oAuCaapXLWLcFv6",
  "key10": "34iCZJvoX3pviLD36oPCXeRJCKADeerdSMp2uiDGVR17ib9UXtCaFyLNERzisHtQyCxjd2L97KxFbNnKSJog4W3q",
  "key11": "2KK285siGxu9vnmuvQRuyNdRbfNyCsMwL5BigMZPNkVqrxsTYGQg887DjC8gU8Lgyyz7Xt6ZCHiEwGp3T1XzK9sT",
  "key12": "3xMaooSU6LLqyiAAmEoPE6RceaabjGVXLnUycogJYkRBWodFcnsR6mbqKFXMn95ea5FhBW7LRPbDx8UZvggMBs5z",
  "key13": "txkqyq6v9BwJqHqQrqv5QuGCPnjYvi89ZDFKjVUUtPFFp559qiwxQFRAVafjFpyJJHP5PoB1THn5CTXt6pvwhAU",
  "key14": "2T9561LHh7Fq3b55N9X17HYKpquYsjtRbDM5KkbhggU66Tm9e15kchapxEf7ze6EMGRRPuKCKn9r5WqLtNMDwjWn",
  "key15": "4EhJPePHkZcyja8QqJW6A6PGKN8zgAGqbhxSvduCXzygjkumidmSK3kvxfLxE8bByhwuWNSnD3Tk8LUDatmXPMtS",
  "key16": "2CjkEhjEt7qDykTSCSZWB1DTGLJYdc8yWRsZc5gsQ8rLpRnCcqKTbbSNZ1pZkvr2RFZeuqz68novJgUshyi3wCJv",
  "key17": "21PjUu5po7Dtk3yDXHY7Ny8uq5uLjDJQEGDtfuTe9gVZ2EXzij18sGErWQwCfRGjJyYTrfaBXvCp6kEVMaUHUGtL",
  "key18": "4iFZV34mUqpRGBYjCfAh8Xr895jYC13ctNkMtD6ERrG8DayhhskFVWM8uK2ah6D4zzGZuYrQXneQxh6YSggmtS4q",
  "key19": "D1WkYvRqGkpQsySn811TdN5W34WJijqa4E7Ufk8ikiQpv1pBUPzZYFmGTBRMZ36zrXgwZ7sPQfZBaexXvUcSGPh",
  "key20": "KMRKDPbAcTFPexypgok32WyEBNESU4ERV1DcpVAwgRsPRs4aK4TFj4uWtcKqPmHBj9rgHmPc9PuSTG88tdJBpB3",
  "key21": "4QtkRD3PKDETSHaVwGHvpYEpYr6SnrxRH7DHYxn5bqmsUo4npBXJHQYvV8J6niHgA4RNNQhdcKAPmjtvMb6xZ4pi",
  "key22": "4k2CDwvjTVNthKnc77EhmwnsSnA5rP9Y6x3XPnX2dghv5Xby9q4DxBgRkm4PKjbtwXEmQg6mLvjJeMUsbMnX2MRN",
  "key23": "5Me1jWx88AqeKDEwb1kB4FbJZZeonkRvviPx7AWn6sUZXePvFPvZ4xYXXxdEBA23gZwe1DritNqYmouY7FkVNTEG",
  "key24": "4YHx56FcrFBdsW8RAZXSZm4U83MT6xeCgf2gGwm2GLcWSMv4wKvZ4wXf4onYCJ92BrHdAYU9wWNbyZtDy9dTjy3k",
  "key25": "2xD7tE4B8DKH2FZtdEZFz8bmKaVZGkpisMdGMQoAYGEuY5Lh23tTZTA6T8A2JACvut1Wg2NnQbipfre6kCraaoyz",
  "key26": "5z2PEkrWUC6X6g9DwndYkuJjupFuCvsWA3Tvx8AhNpZTch27U5McUPBdJNozqd3XmYQ83Dihi6Lc4EFYxeG1DsEx",
  "key27": "26A81pNJEh2pXEY7cbXSSZ5npoqd7z2icYM1cWCiWNwi6r4qZcf5teF6LJnJLUAFyAVsfektS1LR7Wkgvw1csLTu",
  "key28": "3qmrbaaCwsnHsuxzaW7JzzBPYg2qFU9BnUEt5xnWUP8Cf2n5bFUmE67xtW5whCRXwATqHhGEkNDtReW2md7iXkYE",
  "key29": "4XAhK7rXo4FfgCZReJgk48EQjB6UJhN9BJwqR8Ypn7dhYXeKv9k6Jjt38TaWxqALUzEUaAZqP5AnAgm6Sjox89yS",
  "key30": "Udgv68Hy3HqApHJBmfYrqS4kqywAbQBkpHrnmGtcPoLk34M8JWGB2EHXSJbutjzykpeTdh56kJpNySwGBMvNcbD",
  "key31": "5QG8rSTQDy1VXcgJWQvR7e4XyY5mxR8NsApfe5s5xKmKjtDomEyF4M6Ebs73C3zheiNmKAEvdr6pL17GVEzPUtcY",
  "key32": "3T1mqRVxWa35SC7Syxrng34qYtkMsqWWkD4rWsyCfRCZtcCcfW9uGHXUQLBhfcrBFCZJz76EZdzZvRQHFZXvF8wR",
  "key33": "54MyTwiK9W72WboMBCtF5ToNngveaeiBUUtqCwbiPVQF7Pdm6P2G6C6XA1HZiajcgm94D8Y5H4b2FH26ah6xQvvW",
  "key34": "5NnnsLmLpm9mQMRCMpXsAaArXwUXF6NsBbj3D4NVgpb1GHXmgR85JnC4Y4ca2V28iP8kehSegUmm3xSghBVmSnCa",
  "key35": "N5b9ZtYwmg2UjHTppkAm97Y4kZcUFF3b61ov76ZWstFwSiFDzWJvrD6ZMi5zyxH6rrmyNjLwoYSk4guhU6JdGd2",
  "key36": "DMSBVBTeemWFboi4R2jBXcgJsmCQraibiwF4bDTJe5SagnN75rdoyrwPmxt4LViajQGufx2TjUb8XvKVjJ9Q6Qc",
  "key37": "33RXaDfYbcvGrfcu7wyrE4yiGrdSwjbFz3kMmzV8ynDCpCLwm3dqiKw5yTJiVGYRx1WP9QQgWX24KNmqQkjzrkXQ",
  "key38": "JoZdNrrUjymcW69ruugRQNfRvZHAug2CghMdkcCy4iebpX6QvQK1wzawP1kDN4L8yhqEFjTYAvXpKZmp67ZBGEu",
  "key39": "3aahRQM3rsaAMryy19g5t7Gt2Ac9EwTw9SmLQ4ZUo9sHmMThar7osskycuabqkoGA2qpL3ZaH9HBZRRCpXgc23Jh",
  "key40": "4JEvqdnHUWpcMWDKJmKV4Av578q4BR1joJf3PyJYy49VxKLzmqVfAAhwtAjMsH6oPBAxEvCu7kDsj2BfFVCauKPs",
  "key41": "2fKtegEQzFC28kRCats43nLgM6zdF1iXNYV7Lf5W39edK1eNwz87j8NY48cbnfuXPjknHs5cgnZh93mdxR7XM2xh",
  "key42": "3S9Y92zysdjcnuy1TEKQcNYCiaUn2JELqbiQ7b1MyC9KxkebDmeC74USMd1HSvYSiQf8MN5DVAkLTHYaVDR4unxR",
  "key43": "4yefHAzXAML1xK1y8uBjL1p1e3xRNBjJYG6CT4DCH8F2kAHkkKAUygZBGcpchhSW6kpsPHQxc38bLu4QvsGq9i6Q",
  "key44": "3ph6Z7YjCxA58FtucabNcBHHp41e2aJFBmAYw8p4erSQVhCjPenrCnNNNXYtRfU9jJ7Ppz8R6V4jfDKGxf4gWmRL",
  "key45": "3QiQTnMkwXsTGCzQxM6Yi9os5yRvEMMzKQQHgYH7kr4H5UuLtWU3RKwbbtpqdJSXfbgXEJYBvw6Y2A9vFxk5UjrF",
  "key46": "5itozppKCsvL4Kb2pvUy9knNvDLbDLXhC4AAYpHytAj914TvEn8DrAGXpLK9KtuSKyCG8q4QduY617tmzkVqdTc",
  "key47": "VaEfYDBuSAfN3Cz6GEzVCKkVXAMnqF9RDa4qLaG98D6rk2etQpnJNjNPt6oPxnoy2so8QyADcQHfuvzzJeUQyze"
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
