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
    "waVvcJsgX3i1Axzc5PiA6vAhhFBNb3oyS3qHUjKBaL2ajF4Xe569ueaGRzA3cbWzgt3be6h6C6nYRsPtN3znUWy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XkExNBNKNFLL1fF9cCzsYhQkvk4W7EaVkKvrwV7yr3eTSLUqW45j9GCYnyGyLgQtcB7gcKfqxJbMWJhzXWvHGXB",
  "key1": "3tCT9atc8VHd9kNh1V8BK4VW2AGQrYxN6qU4JQaWABJCQ99JXmELN1gML1zovuNrnULaJgJj3YHTX9UAYEUp8vzQ",
  "key2": "2wtw7HrArn9iEHQKDi1XNG4A1iwMkQLKm8gpf1dGJeryZn8BMJ9PY1YF8LKhri8tiMpNNJahXKnohV11oSmTJW4m",
  "key3": "35eHqDpQCKj7MaH1NiacbFWX1toXGXNdN2xSQtTqpjaoyJy8B85rd9mcv2PsKKtYWtESfGCGGPTaE2gzB9s86T8r",
  "key4": "45pK4sGk2Yiu1APjZYYFUWALB1w49bYJuznisJK2rbH3bHaMA3NHn3q5fGgbr9hfNLGMkunpVcsfcamNdGu1JP4t",
  "key5": "2tmQKHN3rS4BMayHMio76CAk68Cn2tCHrKiPabKywWu7JRNBT4Mkk3rz2HajSkVJAK5az4jinymy9zdR8MjLa55r",
  "key6": "5b7wQDC6jZs5Zv2VreV3YSBp6bvUvNwenLBaYH8zXkHeMpxxhk8tBq9jLJb7k4rS6kidPubiTTQsQKMuY2oVoDPD",
  "key7": "2kwZJRdXYntJ7Cacqxg19PYjheWrkJfzfJM6mvSbqH5icrQWF85mtH7ABgVj8wpFM2mxX5TaepFgi9gt532mT4o2",
  "key8": "5At9dWxFLvqVEk3cJdmv7rjRB2NuD7XvAMSjBEWfAsV983ZUFMDqQKnZq2Fhb3C57nod6ZUEteGvFDQGgFLBScoj",
  "key9": "2mVcFu3z6mNVj1yW9LVNRWrHmaAG7u97UUPWV8KvkzjDYaj7NDw256WeCJHJCoboQnkRbx8FpYgNm8qoiQFAeEpK",
  "key10": "g6WKvhFWbYfmeGnutWfvMuNZJo311iMpjrMRsdPbuLoYjxucsUBnn5obTjr3mLUzCUge8rBF8MZfwaEpqkyNERd",
  "key11": "5ju7Cbffr9PvKvQusDouDrPPezZMmN3PBgsVwo659iB7BbEq8BkJtGho4ti73GvAhKoHUevFj1s8m7LWDAfkjUv1",
  "key12": "hpA41E9vKkTn5aYuYNqFw1KMrQNxwwanimWJ3csfHZyWaMnWAEB31ff8Bu92MFe6KFkmKQtgb3BHaejvZXuWs2P",
  "key13": "45CDrWPh4vyvQ8ANUxCJMNWwzruTU9M5iHDR7heGTqXAqcsPZ5wBgdPwub8JA6CDuXB8yXoizzJGB1oDgD5Kmg66",
  "key14": "5ec3iu8uSwAzG5nTCP2URg9zjLK8YVzW6HQFt6eePzMEBV1ctstKsMrDbkHeNQotZXRAxFXU5QdpHd8TZHHhmZpb",
  "key15": "5Gxkj9FGJsy9GUeJHtxxDh5aaj5XxGwkpMCh3ZH6xox5gfDB6XQARCtmXPPjVcWfKqBzySF4dYhq6z9gEm21B8Nb",
  "key16": "3LzmiHm7vhpmjBgewHXFWN6oAGMoy552r3caAJodP6Xfn4bmEovzyicZysK58XoDJXu24Eog5kmkqoimY8ekhhtM",
  "key17": "uxqMiC8nG7YyC5Lr4LRoyVd2c7yWKbesxT5nqDT8Tyf1Gvj3WVpjfn4cmBtEkUNjT5neKtG8pQq31GJmJBWi9BY",
  "key18": "43QPLXwrXVh3iEcfVHokHURrZDTdkEewoKdayFM4V2tFbXG5A6rC5gzgdW3iz7gE8hHWXW4Ak7SURSePQQffBpbz",
  "key19": "2b8vT7TxW8q7ibesLCMWXvcb4SZkeNwwYXN5GaTZgRTXa9qyCyPvuxzQDvj3w8FTv5dyCr2rE77Ji6GYEiYpNh2S",
  "key20": "5RV6fraQQWVyoswMbzEgj7Pvkjn9GkanQ9bVP5SKGgJoBsj5UwkQt8swN9hi6H8E3P7qUPSvvkzoCuRa7siPZj13",
  "key21": "5Gb763Nuq1AhxjvJaGS8zqBGqDtJN698KY1vuz9Q4xgsH3Fn2AhvgoLjVHW4Py4uuoSxcVnrYh3Va54XkjTAYUN4",
  "key22": "4hNc6Rqd7DyXxWwM67FSwnq9gWdyCTqURtcykpbPHcr6jHvLDF8P5ZW3TQ1NkUPqAicnpDss1LHsjp3nmjgnDXm1",
  "key23": "253e3NusKRcxD47h8JWMm6Nq9A5qtKggnR3LVD9XdTr9UWCFYsJEMGXztA5GVVNHmytPVMeihXR9uvLy7VHRYgDy",
  "key24": "2jhfoAfpj4MaT5HhHK2DWint9poDGuX4qjuMsySpf9875joWLg9bTreYxt7KiRvCKU793kDeSpg1kRqbqnPHT2AQ",
  "key25": "2UG3aSVA5YWDstz1GXRH11raPZH6dhPTk5dwFf6JxL9ugA4msSqj6Pqpn82D4YfdzoUFVmaRfhPsqmzfj7wHCRCs",
  "key26": "32WgFmFDKDs74ASVcSb8QrJPauEntoswQXhW8kda6JjBYT1sbKTGSCmFkSRSqmyW31EZehChxQ3LKifyLdzMrzuF",
  "key27": "4aZWC4t3ntNZpeWmUCNYA429hXp8rZyHngDPTHfaquX9o2CE6cHhrkCqNrTbuC1iAVrhHikMqvM5QXvyBC4dNK1",
  "key28": "4uCaQ2uhrJd2wVnUsKvKsdbkBVzioaqtJUWPPCqDwohaqtSr9bzN8UbYYX8hUGoXdvRmt3EJspUmQsn24pk952ed",
  "key29": "61kcKR4VvkJQNqijn8877uqZB9koHTGd7JJ8MAVF58p27DGVjPMy5cqGkbbDj7RDrb89XJKjxkCMJtWxNkPmfVco",
  "key30": "1TcmKLfpNbzieQxByAoue6hMnitHEpfHJo6rcbTtKC8hzG9SXD6p2qFNb46Wfn7AmMFJ8tXQ6Et1h4Bp2e7iB3C",
  "key31": "48QEcnryNwYPUu1g1jQJ5rNFMjxE4uCpVg1RikXe2fNDAAw3vFvGdD2UV6kXxKNPb9WAJ71z3Buoybu3m5aBkpC4",
  "key32": "R412UuXzmcJPHzSnsKnosWVnYfoDWgdqBckD4JxTp8AGtHKpBRu2fMAWBbC2mjSEv7Mty1PPXvXzdPYZXZkDPFH",
  "key33": "3UPxnRYtoUWtNvyS72uoH46V89Qk9KgEsY9DMKGDXFKfCg5k3riBYrqe2nzuSojVg6wWS7ng2evsssUkZRuWQKF4",
  "key34": "5Qw2ZXSusanacQscuBhvdHe4pznCATnHmFuZ9ubyJVhPc2quxQZjLGgAuUQspExuYwdM2rXATVLro63XL2iVSraV",
  "key35": "2VHrV7ZNspwY14yCaeiiQZj9YLSpRJerXcyVQk1Hitw82kHXYZnYM7nLADEtn2X1WPF6ar2ftcLmCjmTQD7vKJCN",
  "key36": "3FK3ifEcUtsf8YV1EPhWzXAkHTLRyd3TBKzp3Q8LJfGdvN1jHqPpssmuJF6ZPyDkmCyup4JLBBRuVHu11CGBBjPL",
  "key37": "29sWdBsL9mkHbZmYBMVnCQExK4HvPpWn29qkuhr9x2XLuMfUDL6d86HuvYSaNjXsRL4R4Rq39Ebiz3pLrU9F6aLv",
  "key38": "3rJ1tkswwPmceHCHFXNViAvGRq7D7LaN18xtsSpsJ2P7KS1pPZhjMgpUwHDY8Nn7RTxhV5bngDv9ZbrThSWa21fa",
  "key39": "4pQ7NfTcNQd1cjhvD8fxwkqR7y75UbYoJZw9cJJbuHawqiUVMRf6fxS5VYAdizE23eNyhkNaezroHqVvahrTCyDN",
  "key40": "2qYC6EzoHkdbnPdT1f989n3UJZ6AL1yZgCAPh7DPNRUGiy4KukgxP2yM4ufvn5Yx4uvUAUZq6rPM4eeoi6bKboRT",
  "key41": "2nWhpLcCMow6DncW8kPPP6YHx92upKtkrMEWGp4gZLaKrbLmhHi8ZZAxqnLv3FHdJqqGNucxGNAT4MiE7zXLc2nq",
  "key42": "2mq26zqQP9wJfGcSGVVz931UAeDPh5aKra8UyWLMLf61vGQJRKR8kDoKA1HFwPz37wD4EXWw5DDE8nBK9YJNZumF",
  "key43": "FTKNppGH6R8vngtPesFN2FgUk3Vhb8khZ5S8Jbx4mye71WwFg3Ey1LK8g9XyF5YSUY6ibMvBXREf5TyxiybALT4",
  "key44": "GXEJVp8k3N33vR2184ZNYcVNMmDWp65KfaQVrvCj78qw8E6cxvLpyQxMiu3Cb34iDZ6VEQfg7bZ899zZA9eoHcL",
  "key45": "3ppzY3nPZfxHHrPtViGbmUd1MfKzkqpHMY6AaJKYtYdnFxiYGi5JaGidxYV1Hd1uXbHoDHXsyv7z6SkDC4pfkR6i",
  "key46": "4mMbzNxQcr5Wg49tVnDFiyVZ5zwaQ4LQEW1qzCDUqk2uxa96wkBJGk4R7Wp6FU5bwDwe1Z3bAM9183i8fWWizNrW"
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
