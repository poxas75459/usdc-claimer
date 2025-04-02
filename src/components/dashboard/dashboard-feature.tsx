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
    "4g4JvHAcGkmk2b5azwJGr6Trqo3NtxSVRqYwz5GZ6nk7EPpXq1vhAm6k6bv8qzKQDBrTbS3bVYjugAfJKHXBiRpH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WCpQFsrcAFT9PW6t4Y3wZy8Hi47ApQuTKdr59KMzzKPtvozrDTEHBYEUuGoVHonXsqcb9VmEynkSjpAMWcxxBjf",
  "key1": "fJFkTgsiA13kNmv3MV3gJuVeFxw4TEup2uApptcUfCN5KVwZbqpL9L2fLno8oA4McVS1EpWF4E9SS9YgR1Ec4Jc",
  "key2": "5MjAJVtGKo6aNS7G9ESVRTvPSXZhw5j5qpunDVAPi7XieVViohfdWejoDJiDafdwAkhbgsSSderwVZ28EaCGa1ZU",
  "key3": "moA52khTojWaZ1QdCbASyjXFb5wcec8RGaDjyucE5V39aPKK7HzqKFHrAPHH9Cw58cAwJYiQHbRTNWWYGq6ZDYY",
  "key4": "7DMLUQBJNB2QDSu5ujyPDWUaqZUcMBbwyoETCke1exaaCcZkufwtp5GfQY8aaecmGUAuvVH4wuGX6ACE7LdE9Vs",
  "key5": "24vpwbwjawhhEjidQkobmqqym4jQCrqsAcMkxPd2bgEAK72UwPYZv26ck36FZ1cTkweVjPW2AVu4fud6obxyLCSp",
  "key6": "2XSgh1ktg62CWchHjBVohQKKZgz8sjQhngG4Y7K6c9rzLykTkHYs5qyuLhDqxn3YkJKgrzmU5tmrY9XaQHXC34PD",
  "key7": "uJc5XadAsQ687gtEMePHikpTruka1sezw8mBrPgKKEVHgabLURYJD2AsQzNwpRaXQCxeoWJADCk7qU8D7hJ5fBR",
  "key8": "3UKX4v7huKeznMFHPavT7w37vgoXkhVy6ZWZXqpPVEAmxjVffv84FVmZUuKAZYNWCs19YermuaJW1e7aRmraZ9ck",
  "key9": "5J59HA1DZJbTjkGrGy9TuN3Uf8qiJ3MggZ2CAUuxSqu6WcU6ygRm8aCL2U99vUfiibduCEuuopUMvsKKAyy6wEgL",
  "key10": "4ciyq39sJQLbjjnYcxnQ7E45R1Ji5faD3usA58jK41m1YpVBwo5QzZRmkBPoo2pZu4ygrHFo4BHbcgwDJSmXEtHP",
  "key11": "4p513CkqsgMYw14ULWu87jCtEL9Wv8Em33Zn4opeXP6FF9yKEj3ihecnu3xRWHqqBzUr5P3REyAvQo4ftNUezQWn",
  "key12": "jEHbttd6kEdfrGpKAGfDCaCTckxQGMGj3Ayq5EfNrrkpN3XhaN9r3CQdxHgdCuPqC922dbiidStei3smFptDmDi",
  "key13": "YaybF6NFP7Zc8byZUSMSM1nuh61WhcRe6Cnu9y62ALSYqTSTg9LfAS5MZKCvkXP56TTG9YAYxjsYgsDZYs1zs53",
  "key14": "5jJe9wq3WiXRiAgQiRGnuqfEijTz5K32bPSXisQ1j6inyV2LztyKvVGAFkUPjwGPAGz84YAzvZZY79m1SaFWgmet",
  "key15": "3QDjeNmf9FSBVtSFvD1wLsKHPvuPX68sQp3sEWQUxkWV94UsedZRvD7GUX3Ess2gkXissa9SNWhSbEhiA78ypEvs",
  "key16": "b9aMH7sfCYsZwM958mfN19drbHH1DUf68w35NQn5Ztd8DyFHjLJsuzovP8152mjL1o47xMrm81aKcNS5JoKy5Gb",
  "key17": "3eDaYv3AnLpa52hD5uFALJAE7m89vjxddtumJyc4Pw9G31fj2uEoxF7aqgRuUog7FqanNZScCdAUEcaAGKeAbMrf",
  "key18": "563KZMfDXySLGa5sqJBMKC2rXS5gP8fzi6XPLev5vrKqjZNdTtoQqESdE6riRfTkciSZgSme6SyyMa96Q1hvePc",
  "key19": "2aKK8gk45XakxKhxrQS6GjPhWUUH9ufnvrSk7Rk1qHtqimd4YJSY7er1db2Sk9RnsBeE4QJUwrBcmN9GpXM8vDXJ",
  "key20": "2kNHvRZT7EsjKSSdLuoFk3MgYofd8UgP1Kf757wniSTfrX51nvpDLLRMVxzaQAquBTvzGqKcaqbAWLACmGussc4B",
  "key21": "2z5rAW6VPBKTpz1dHV2gARsrtqPkZvP6H23yNQofHFt9cSMhdj4gjHWzFLCEhrSdBVYsEisbDYgia7ya9zAw8kH4",
  "key22": "35raVEziY5XPhmTUVu44hGtoQHAGoCrPXXjzPix3ZWDDCARzs7bqA732hvxbords4ZyqcArHtKThb9tQaG4YVdYs",
  "key23": "4r292ZiyZpxJAu5VcVKo23XYx3xCVdZEnk6TX8RJapqgowTNYmZtnTqAmPsextkRWUdMEs53kM9VLQR5eTRferSs",
  "key24": "2vjEFYTD3jUVdUg3UV16XjVe4Ds9Q4TNuTW1aLQF34d1kjnPVUhydSYJtWXBiMNbZiqdETGuYfxWdHvJRBv7vc4S",
  "key25": "3F34HdRxSueBpmvBtfXBU9C3eVtdGvrQtcB2Kvzd5SjejJsjW98V2yACdKi4ZK7ek5uKpwA8QDUiER5Lqp5dtpEm",
  "key26": "43zhaTAWsnwbmFuTzVhfPLNNmReYfPqhunmrhQA3TDwr93m5GUvGpe6jd1xMNZPeJdCcKPCcGysDH5ahXkLM93hx",
  "key27": "4fDjMwy2ALzPrU3Mz2WW4DGbzwRkQjEvV1Ds4498JS4bA7DNNYohpmd91A2zq1b7AA8uerGxpxdaS5z6JDmxWMtk",
  "key28": "D9Wj9WLJxDqqsANes3AdtqC5tJHov4NVUCza8P2AyiKJr8qV5nsFgikvC9E8dxyv7LyFyakKfLicUcrRKaV8Rdd",
  "key29": "5zAg9eHBA9gESxgjhefzSACsmeCxRnmbUMW4zVG4y33niwvgDjRzMysZH3zFKgcdQcMsK83BUAf6SrURqepDXrRF",
  "key30": "2wUU4rhBbEQHrZFiV7c7Z7FgANeaKRvkBJE9Ru8h3uEhxxDAQXPcZAQf85UR1qGknHZacgAqU93Ef8qtjKApNttE",
  "key31": "NSYcS7Fd4c99o453wfCEpaZkociByk4dPwzM7ZTuMV3PH3FU8AZ9KEPbQuTBw1QCz5YC6caZPJyFesKKxxdR8s6",
  "key32": "2SsjUEXseTXFTzd8W6qNkiTrfeChTY8numiDhDuDsTELuqv2f2bTin73VscoDjYmgbYu68ynsVUDiKLC8fFTAevi",
  "key33": "3eonMceWmacszMkYkSAJJ8nZ51YCzs1gVqd89GXDHXcBnts9JdUqKrUTfhrKEeBtsoxExpniidvgnKpYvf5LCdyq",
  "key34": "5dQSqDLq1FHJ84UFsYoFn3kpKiGX4sfMW7xwNorTa8QacXn3FB7jWddidscjXGatMSNq92fcNEyDGpHFbXtZYEqX"
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
