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
    "39Rt7swj7pH2jaqM3mAZSEZoNAxKNFH1AjqU9qWwWK6DJvvdpEjTtvfnbHQUbNVEutTM4q14j6C9nCgYLjY4vWoB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "R84eei4hCjrZQ1Q57VNcenV9CqPRoYktFvcz6qRJdYMjncwcwvUeDfzBU2fadeFrF5sHdzuqCeQ3t2w69tM7iM6",
  "key1": "9zrHwPVyoKF2yBKs2u7KdqcugNSAzJdWZ9cq8w3CMyMpnSWLgE6rpmgbwbotdTnaWxvkHLA5dQuTHo2dFYSAuUn",
  "key2": "pGm4GM63Sz2gFNncM3EbfJyYt73ST361LoVsnMjBgaAftgUQeFfq7xZe3Pr2M2W8djkTFTcU7WNHoPQYFYFfocD",
  "key3": "4ULctUE8VKmUM75FZ9LaV8nWdGAS5uEhzuwLocmNA9FJekQnm2VxHaQFNJ5sP8Fn8jyJoaZnHfNCCvQtQConvpJ1",
  "key4": "267ktyJs53C8WHWzPk8KbuLoBTfhFKjCGfhkbGTTUPMNY1bmC6TH1vsk2oaAyCKHcQ7bZXnGWLV2Kd5RyyXuWtqv",
  "key5": "4edDdfkVCQXuy7a1nDUfah2Qmj3RUP1rKMtn9Hf8a3x2Cxmv8hj7xnoXkPk8NNRC2BCNUvZLsZ79zVgZUicJE1kV",
  "key6": "4PrVg9rmAp5JASgUTrSvafwNKqMJFSgY3TTGJVvLZZwuSJsDtUX4AKZEBkXMZdNKmbtKRR1ohBgMKGxEGViNManH",
  "key7": "51VaSNqQYcbKPCNEX3PuYZSd2EXDxgZ2BZTX6BbdQraE8ttNzehbbA7SDdmK6XNunYYwU1iqj6taN8DF4sudrPWu",
  "key8": "59yFczGJ9KGruFPGTJDDKHPAYFd3TrPFosRHSTExhkv4SzTH2LkPmy32NcUwoYuugbnbLDVjjq6AdFQFBv36eVNr",
  "key9": "3aHe2sDvbWmBreUW6qaYNvoBpkjnQdPwshhnoeCEKaeMuPEW8ZXohTH9jfhV6wBKASDMKPs2Aq9uZ7LegZ1YxHfb",
  "key10": "4qvcCg92Ezbr7wdXhhdLteH1LGsL2pATYrQb3go7skSngwZWyGsmG4JaRAhfneg728Wzuz7svQPmdSwMcxWfbu2",
  "key11": "5yQGcAAFNkw2v3ZsjZEvM2ddDW1w7i9Xas2x1rQYiqbCPYULM378zmSSB9oPHhawEf6FGoiMLDG6WkHwPXnMB46t",
  "key12": "3Xr2kazzc2eXCW1jeWSCHTkpmpoqRK2Rmebau5RWF2Ms72F5TNR4PpzAibHLjuMy12GwMVmSKJY79Wbx4kVYMjLN",
  "key13": "26Wb9kcTNvvo3NSxznnWKdk2pv4DQCEhyE4RJfVjWfz6dbDyu9vPhD7EES7wQmsy7Zxj3fCc71tbG32iBFwPrNLA",
  "key14": "2QURMgiwrYMW56V4CukL22UbtKtWgYy56SCrf1EYDsmrbmMJS7nCV46HQVfHbrypkmc8psy4NkarcvtGqFVkNGMe",
  "key15": "4fzaV9P6Kwd8uoG8brqeL6PZHcdYy8CT8GzyeSAh1MU5o8x3C8SN453PS3hqSaUjwvTo6m9H1ne3rnqkoZ1YiMJ5",
  "key16": "J6G7jHQFc84WgvgmFt2Hq6gTmXN5euTpfCk7f697jkXpnXoVRxbyucTsRHo7mEK7qLxc6ddanbMF2upSYZpT2dC",
  "key17": "4NcL7spyCaKa9XFtsVSc1hqAeKjymjZExyuWydzUnyRS1eG2eE46pQjTL4N8khsWGD5y4wTjkbTLoYMA7AeT3ZpH",
  "key18": "4gPRFnjwJWWPo22S4G5h47bSz77qYoNksREZwDG1RNDSF45omwLKcWZUgLdS7LCGQrw8bGSFvwXSd3qjHJbnCSXZ",
  "key19": "4FFmt4BZELAb4xJPP1JLiqa45Rg9LZ73TFK4EFxzNPHZoygTpsXZgpjVKb8BVa4DsV2ZAtjL23b4idLMTgKGT4do",
  "key20": "A9MffsF5CjnwtjGCG3EjicWWM1bFoV48izaAdV99GYk9LP2bukSUwdZ2mVBCFC7owDmLTUigVmLacZB6RE57mrp",
  "key21": "3vM3ftR1obVttjY6QcYZCv8Lt7YCsXHXfUAfyYdg2HzfTFY9CwwCUvRahbQz8UYCxL2fZaNbWPhAyG2Ac8xbfNyL",
  "key22": "3NZHzXXwzXsCcNxuYErqYDdPKt7XtKcsYSanzKgusSCiLUWccbRKyaSbVUHwVAd1ouiDHjfBLBYAi4ksRERvKF37",
  "key23": "2CBi9X7qR44WivnsmiRNnvExeGX6MWeCpPNToGb1MmctwXxSewuVs7eYyotuu8bhkqZuS6UpHoBZPVpHSvLCzHYH",
  "key24": "4B8sVTjHFR8YmgcdEmbcJX8yfhQb6MxdEsBsz63V4NjiCS3nkucAecKCuYvxfkR3piBJYEwPV5GPKDFkjpG6kWJW",
  "key25": "6UCuzRUZ3VXiQN5quoEiTuxE6uZUs76ExvJZ8GzuCQctXV3EYKNLuinR55xkJWcgC16RD9HPuf4K9efCj6aa4s5",
  "key26": "3YCx2jfbRrNAeQevV2ikpyM1E6p9SeEBY7BNtgzetbzjjBX1tzpdwKnVLjWKnmunHm459P7GZYvhRfRpfxYq4Mrz",
  "key27": "3L88w3rjyVHq5VWR8amQpnetr1feHRdvcqhD6U1pZZSzA14F5NGH5iL2rGd9niXRLMw1BeyKJm3tVMGZfvP9yYp9",
  "key28": "qnCxMuXhKM8xJFsZuRQSY2SorwVbTgPNCmT8GaFfEaWXmsevQDPEui8AUqyjR8GLK3RhBhNjn2yyLH7mWD9nbtm",
  "key29": "4QWHwX8c9YLG9TUqqz1sM9m479p7K32xMaQ4SX9UBLP4jMU7WmaBV4XjYKc6V6Az4x5fp6gU8SEYkXy4xogr2gG5",
  "key30": "3GdmXF5D9ZopBfDq1AR69QY8uEc1gWu1BgiBjdZjgPLPG7ygpTQZS9worqYQTU2WcHENBxcufdyYFUsWmJfiS6mC",
  "key31": "4VAmbGiEhhAgb5B3V9GnrkTmKjCoPdMytGtkhHDk313Vf7b9i4KrGxbJkK6LAxoL2rKQXiLcCY3FoKqNQ4ujJaLs",
  "key32": "4YaU9XvmJHcyddhu1vLMYaKhdou2nkKHSEFTHFLW7bR1pfV4V8Fg5RTZPUzktorCasYqbFXJ64F615nFigtTRTKi",
  "key33": "2pVgyfwE4ww9BwRh8DDrrCbmxsyHZ53YPgX3mCfVGunCfmneqEZEyWSV4759fPD6YdbVdEcCuqiKV5sxxz5ZaDDg",
  "key34": "2yLPRDAp4hjYd7XsoXUxZT8ruSPNy8m53TiNL6DGbHEcL5z9B7DKQ6FG8m75q6bHfwZeB5MPoTi5bbJMLToc9mYA",
  "key35": "1R5ft7MtMdc6HS5NeHxeQG2dtsSRrKjCegDW8fyz6ni6K3zfCzS3jpfNKsaxvU35r7X2aHsKd126DD3TqLKQJZr",
  "key36": "WvpNMao2zim4y4GcrdUbDKJiqmpoohmDRyvpVpYcjRcXE24JzDxVBxpMCcCERPHNNNGBDMGZXsAsNqCtbVrqvVy",
  "key37": "5W7gYLGDYdyZhbE2StPq5DRzzgnVUS8pYpTtamAdqHRcJUzsYYMZd7ZEK6e3yy6vuFL1YwM41pE7xjNjhokDDUrT",
  "key38": "2dB41tfsqU2xk1X8a2aTHHjhEJga8iS7dSWafPdsoAAv7DFvNH4DQ7sBiwmSBkenk5Lz6qvFyd3dee4AMkG9Vq6m",
  "key39": "3GLaro8bwKnL5PqyKYR6teA9F2hTxiWgZo2Pin5g6ZV3oEt5QUQ2kimGyp6Usc85HgdcnDKK7LbmDJNcxVWyBLzM",
  "key40": "64VLm6QjJrnT9ksMB9ihfrwq66PSfQNtL2Y9YmNBxMQmM1EkJtpDHz3KNs4N7WAFwMJXeFpLK63RisbtQEGjk6UC",
  "key41": "2Bfsdr4bKVM8zxrcYy4JcfehotRbfSCeERWCGcvbuP6w3B9QUSNLGJ3pJRsnPzARtcgeE7fYYQugdqWdETU3Z7KH",
  "key42": "2twSsuioddQqKJPqNeBTbWmZzWeM3ud2VHj9NTw5Udk73iV7hEeqoSd39iFwsvevJzQVqMZPrVuUVXeNj22YZnTm",
  "key43": "3uRyjVmjzRFKHaaRUmsupmoghwWPbHDDo4Q8aPxKEV1UBZMZDaA9uy5d1Fik35HXpJ32tzfgwRs7rMVc9itytCsC",
  "key44": "BWGLdoAyMQh71gC8kzXtEfDy94FrEecqWwcGGXfNWwtGyyjHs4gcHTbySD5ZdV8YcfcxG81C8EP8cRdvQ86KybQ"
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
