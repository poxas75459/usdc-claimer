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
    "3c1CtSXQWBp4APnv2atVwSLbrwkajqzn84i4jQHjyiBLX5GiuKQBi9qC7TfrtZtmDz8CESEgWpF4kryJhg5x3abu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5H8zNgzgroro9cvpznAQZ8Ax55ELWJ8DA4VvCnveXaiZR1qe7bCaCW92Y3dm8JFLqW86FspcFutU9DSMFCxdn5mL",
  "key1": "21G8hyAyrymmExCZfnKHPigcfz2tdzMj34YvxWiLWDcQe3QdmhAo4x3CF66TvsQpqLGqt5qKZcN68mgvVN9hJepw",
  "key2": "2mNkQFD1yeGaP8ZmFBmsWZFP8FrcVnb7PQ6AVNChqtAE3fULZzaM5jF4X3Es3d5kt8skTrdcZF2hDZ5f6KNMVGFr",
  "key3": "2WHLbAGHBEmEAPcdnk3X75ma7queKit7LwrX3DT38bGjHuJLFkbvm71cdSc8JVmzKKxJtz31bjBh3yqLKf6G9yVf",
  "key4": "2qWKRCwRpe9ePESw4Kmou6GhEhoPh1oDQmYxKym77VUTyqCL4RKTPfCaPStZ2o1K1z3PUsiMw35qcbx1BMxiA3A6",
  "key5": "5vLeycwsmwAYTGUu84FvrjZFZ86ny2UAEBQu4x5tETacUvGZGoh2dbHMq4y5UQe28v9tNEJYhgqLMVG65gVEys3G",
  "key6": "CpEpLQq2hs8oCxxj5iD7LN2WRXAA45GKoeXiDkFxB3PnPogLpy1xUyKEZ5N25evJLpyS8NvhKKgPLca3Q5PpACQ",
  "key7": "4TU756TqJJQPTaZBPNR59sWXe1zdT7TG8ZhApLw92sj6qQpXeZb3wz8ZeY59tt4TWx4kJTZ4Ed5yhffNjxgNmJ2c",
  "key8": "52YPLwhWh1P5HVjkFwDM2UCACTQ7JZsKeWjg4wx3MKPtxXpC6QGUiD6H2eEgvdwGbgB8FF3n59MG9zUxp3ofuVQG",
  "key9": "2YwUp6xmw5B79FaarqtCJFqfSt8ySavNXo6ch677QcamyeaEJBdTdUeMASF98Zsm3vp6pmfjeErRgawuxHQG3Bg1",
  "key10": "2EsAyKJNKN31ac6pmzNLCWqMcwfCbxbGmVQ2VnpQGpSga9tQgmNgVeAgM6VWHRcCDAhWENtmG8Cg5cuweoZ8eBko",
  "key11": "326Ro9qKx6JXn3CgZ5PMPoYuJXndirLy1ThpEX4VxUWXBoS7kziCeWsjWWPHjEvUrSjRM7Eyjb9ME8aZkJpUpoHU",
  "key12": "b93S378hj8t2o7yZwzhKikGwbqP3r2iMqWxXwLL5UjHHkp3gXCy6d9FVAjEMuLZpiiRqtQjquSZ79sA9RzA6ixv",
  "key13": "4nAzmQQvSXoCmpKGfLySTMfEvYSnfz5CrTNW9U3WrvLEgdeSg1fzmvRUTBcU1UTwLnePM8JSbTtY73e9p3KBq2Yg",
  "key14": "2kn9xoM7cofR7HrZ8gKxhkAUTqfQeeLt4k6W4eka2bH9eooFrkvauXSWnRkn3hz2SJ7nba8FNLu2HW9N8kqw229P",
  "key15": "5BDePoz9rFStzjmn9oATXHUi4GedPboximmRgv4xRmW51z7Uqmro9xDjrYwGX1U7qSHD2PNZEtGyEhtyzRC252BV",
  "key16": "3Zh2UyQgGoS3ETwwMyD1LcMwRc4GfucJz3oPteb12SxxGH6GEJSvvYj52s5GnoZFCgEiBCUXKgZEHMwNKVucPdr8",
  "key17": "4bhcQUWvK47DxDuFrJSmYYTTpDFFnAXJ3dErEnpj68tdYUeTdGshbdLtphVyYE8GgjmYr2ysJzbEgJN6R6uRLeDn",
  "key18": "gwF2GKkwDDpP4yEfupveFcUceAh2v9YiNCDhYVB1f133zDuX56APiFPPgr2zqTdtYfXB354ddYef3RwdyLzkwRN",
  "key19": "3u8wdCg85SQY3qVbk6vSu68Awu2oJ2fiBjgXi8eVY8uEprk838mXf3ZrRdvuN1r1mBdeqBmT9sSb7e9ehKr9fQN",
  "key20": "26yEoBV6ynX5M3qdgQEZxhYbbfAfWtpCkKuMHdmjiF6cV2Fw93FDDPTHafF7AKmAJSwwL9Yo22SMygDgdiR5DxkP",
  "key21": "3ttgJxYBTL2oskeAr5dQwerpj3usU5tjfFXZ1AG19jxymHFcdDDsi1DfMdvE7DJ2JGdN8kgSkUoTWDwaT6jKyzv9",
  "key22": "3xTKhxrt8DRMX1gCd7oESbKiG2oaRssfwDUEWs3jnAJs7NUx2s1gwcM86VTv2QaiCaHBx9DyCy1WpdbUJLQAUhQu",
  "key23": "4tJrwLMKLZTmiyjENExSSa9Z2vysPrNeo6KsE19XBPygimE4F3cKLwRFKbRdoijvJtQLqgkBtnAaPQqMDg8dDnbK",
  "key24": "5uibMxjnKo7ccboA2yN2CutLssn4T33Hp3cn9quk84Ki2LWDJcrWJPFK14hCjhqPLvbAZohT7juEEFWGvRNduRPv",
  "key25": "Jti8sJrSF1M5NcaS6mzwDTvvD75acEhsGMwGk5hZGnYP7cwcu4rHaov5KMxXrdf89W8sX3LEyPKxpGdZS77qxfH",
  "key26": "3cjhCELK2P9BBWQTUh32PLhgJGVzh7o9w8exJSRh5uz8V8DsrN5BShEcRza6c7HVXEHXdZZrJNMcraRDHRrL5dFj",
  "key27": "5umekQE6yZgHKSbeTzLkWLbZbvEqpK7r3TFxBZEsRw9EpK2GexthMrQm6824SPSLppfg3VNBXGC7D2qos6nQwDfW",
  "key28": "FEDrH2EGknFyD99VZQy8K6MwsvNU95ch34dj86RQAq8X2XPjL3HDtAXNfHtq7qhSUqRJFQWgRYSWnYCdQbG9cLD",
  "key29": "21k53pceJH8XBDH4w58J2S4d6UL5FTnptr1yzEizE2KRU5xHCSdfnekihhhecxhGiiCm43h1Y1CjLd6KBKorqAw4",
  "key30": "2f8gwZ5TSyAaCukaJigEEyfUQ3WqMVcUPfUXjJbVUqnMfyHdXKxeV8qVvBC9MxHZEy8brX6ZfjA7dLWmem2L3MsZ",
  "key31": "6dH5qDvbRNBENkKoeWHaob4GAbuLAQ66HqGMnXwg4g2H7JLSPome2oqqrZ9b4fySaEZq8PkMiHS5GrbXMTs5Wu4",
  "key32": "5emBQp4mK4mSToi7meKcyYqnHKbbcaGar6zRrQ64i4LUYr2FB6pcStwSgGcGYyaT9mb3KWHnjfNn6UYpt6swB7wL",
  "key33": "5WsQjwkaFwB9pteSUSUC188HdsZVR9o7SrhCC1K6sEmrWVczG512tX7ULTKfo14AePM1Ft2VZ7NpWzp9ZC8yaV7b",
  "key34": "2G74HnpGqsR5zoRsnHvbHAUrNBExWp1X5nypaxsYVJ2nKEqDqsKXzgweTpkhNw7hfPC1ubPrq7BAZh6sqVAo71qA",
  "key35": "55ZKWh96oNM4TAU5xxDQfSyEsJSqDUHKAkwdD5JPfBsAfE3gto6KELDQ74sagU3xnjAEKwkJ7kv2V1BPD65p2LEe",
  "key36": "2okfJ2hnpiGo66QfhCthiyqSxv3EGnPt8pqYkL3Du6t52QrfbJUtCbxwNYR1DeDQLVUQyXxzpeZX6gx54jH5NXQJ",
  "key37": "52zjvAJnQQELSqwjCbnLaGJYt9Qy1ryQxGxyVZVwrpRwimM2s1TbhvNdZaisgVvfzchixkYWWR9m5ihYqVJHxdMG",
  "key38": "2TD9cq5zYvzb5FFDWvpqW5uytPifV1jEZUmZ7CCEgzTqE66omTiQZEH4R8LjjM2AgPMu8ZBEBjBmJDmGExhpDknF",
  "key39": "sg1UueYM21kH4bB7hi4XAzSxGESF5EKU4yySK7qoYkNjPhJyYpW6x1MykiX1HubXJgrvNSDkCEyzpv7ZNwMna5A",
  "key40": "3wfKnEv46aays7uMHpWrawSpCUZDgfdRBXhctVtKsCfqZK1jFZqfZHk6gKyRtUqu1tpdfiNC1AHTKEYJMBqtLyF4",
  "key41": "24yRBSWALXuMjrUmvKHjLbrZHWQW727Fzz74prV5Ks4FdA3b65fbEUernKiqUMzyCt8DZzfXk9QZqrP8p9GzHfx6",
  "key42": "5dD2Kp31D6LPW6kyfye5GjNidNHuxQRwem9zHGVgDwP6xkwcbyeegeEFuSF4V7snMFVmJmK9DgMMneFGU3UoDDuM",
  "key43": "5Cz7kUeQBsMshbQWDR3CcU434MYzq4ibMr4z6aM7CPhW2KzE488ercKCXgqCUXodDbNJVBjFX2V2xBVSTibwDMSk",
  "key44": "2ihH62bjra6mKfnvtJWtFBCiXGQHwWsKcyquY2N7BV2bdB63vGJxQsCuqa47kY3Kz83N82DurNAHDhBXhz5LHy8s"
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
