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
    "5sMWR799LJWRLz7aeEbj11ocnaNmmHW4mzWSH1KPdKFUXSnZ345GeccG8hR4EsgSgc5sk2E9kFvSGgLRqyYEhQmt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YJo8egX81mQFWJjewDnfyBV91YesUuDbTVxSm7g3HEs812roEAAwpKhiEkjqcgVB4LcnLHJSKwg2Z4SeGouXvNN",
  "key1": "625FCZdDNNyshaTwZT5zYKm7rfMryiNoXZ8YBksZejjTypbJRcEh4Z2jWLftjg8V32b9au6LcwpfVYQwKxCz43Yg",
  "key2": "2NmG3i9YLCVFVtqmzX1scxaA9rjUpdBDhiManzoJeASjqyQ6qLnhvSzcTAY8L1PZP73qaEHf72gSx5FeAMrp4KNd",
  "key3": "63NzX4gPejo7ypr5d5yMzi5nTaU2gUXYhzjnCdsvEYuxzJcsdws21bzTjKmJwaPDFWRcjxy7EVa8GyciQsYSxxRV",
  "key4": "2oBphobFqbKDwDF1hn2iGMFuHRw5ofUMfueW3Swx5vpv2KnGzCKmWFC5evF2ug4RJ6doZSpF4jbhFAdpxW2xtLwL",
  "key5": "37BVHnpNu2khw2jPFz3TegpWVqGshffqVWdi3JVet9ZrWZi3MfiyKDnyqd8b2EdNCe9LZnFySVVsDVEMfApynzS9",
  "key6": "9p8LwJ3RdD4WVEZWEpFpGpkfq7R2jN5xw7TckY99Scox3Lp1FiFJM8wpVergNTBfvuCkchNekJY33DhVNsEXL8B",
  "key7": "37EZqnBSVEhovXLxHkeUVPLkiVAHCvRmn7gUecJ8u1bEjYP6QDdpQpZtJjXWfM8L2AZQ6aCcKDMTZyn1BcLyqYEP",
  "key8": "5z5YRuGzdj14vLZNwCiydN9PBiY7YMaJbCffxupVxJLFT1RAdkPd9Mk7htpqkK2sKEVyHrzoCBbtck9VsRTUKX2Q",
  "key9": "mgxJdDYdb4rag2eTavqaMjknJYy5tZoXZrnK1QmP3xAtRCqLNsoYJQa8uoYRXoxm1WT9kP3qJLVwsZGqtSga5M8",
  "key10": "3TqnXr5khWzJvUknxtPAkhUWHxqUurLTaJEshGqb5putAftM9SkRZr55yz9kCqbiX5nC5DeuLCbcDCUUCseX1fFJ",
  "key11": "BDyCoBBdC1xMrhj6CW2Lio5VCrCoegWzZLJW8K4FYqowr5jHvKVippovUAcJA2BY7h2UtsNWPr87MbVrK7R4f6K",
  "key12": "5dZ5fhdZHmtQbVi4vnbBWx4vAFNwq9o7TW9W2PfP1Fj8vmc24QrYtNjKrtmge7ZYhmyxJFAgdfFKrHQoATLAxcVq",
  "key13": "4RFvmWQo6388taxFsQ5Js92wj6aufg46CqN6kp5Jf6sbi7tz58iL3Yro8Q54Dxpemo5y3zAqjnfvjNrcHKW8zd59",
  "key14": "3vBNwPwKbweV8c9HcSD8giXgVxVcusAbXrrSPqNcMnrv3fJrVgdoxbKJK9b6dXetb54BuF6MYpmi6hmQogCjFt4B",
  "key15": "3Hn3odF1JHKEDdveTx8724S6o4sYYrKnjipNBVgHJSoQE7djJegDFJB7eNt4nhx9tAHS4o84vH43dKPtCanviUsE",
  "key16": "2eWXufu6BqNsduUoCRxxBvDMCPKTwERWvw3JH2Dk4ASG28AKZTPcSxNnL6ePJSXwk77K9Ni6HESF1FLMMKHyYDY4",
  "key17": "WepLfW4ga3k2SqntpWgdrxB4CJoWtk3yMvTcoraV3t8DgwQPuCZZHSJaPFnkSVBssNJByKpc4QGajvVrpagiadB",
  "key18": "4BEshtncENSuG1dmG61m7HZZyDmNayngnfcn6wChnkKkt8wQEKum2wYCTgByQtGypCjVBTgFyCcybSx4YY49ENiY",
  "key19": "45NGfnm2BYTKiaFbwrikmLD4CvmrjRcQTCBi4HomzEHhubHEnC6VWgAbzFsyJpTXWthmkj8HP4Nk5BU6ypy2wiK4",
  "key20": "VqhSKq7vHk64XFfrUMjtyAgrHPBMT5z9DFBFNCVES3NPy31wcRQZwYrJdH7DsWpnVNNn1MwGCjJLZ9VwkrV5Bcp",
  "key21": "51t1tvCpNUDnDDJUaYW3DLtsBaAL3vcd5ck8j8nGGD7dDkLcBcfp4M8xVEszM5v1depsryN1ttkjGULjTo847s4C",
  "key22": "67YjcZNrb3qRFe4NujGui1mS3z8wMXfA4zSL5vs4ssBMftexL9jJcgVe1d1iMCF4nJoYL68gY9CxxmnSnPUcTbZG",
  "key23": "23jTyWi4Pm3u9TCSj3ES8BhCtXXeiYPhp8piZcvNu7HPX3Dj8MAE88Fn3PtHwwv1fdd3fcSxPwyQ8jUHgS1ZN7BG",
  "key24": "3CzxbtNjbWQNUQYbs8JXz4MJganrRnC37AMAGqtqQMQtXeUcHywpRFGmKdYWRwyA2sdrPU4dgtXGeRKs6R7M5SRg",
  "key25": "3ku2dw8aHMuBeaqKswcnaSZXekcAPmpAcJqcwVxyqwEDKbw7fLjX5CNdP7fFTTMtv7UCe8gmugDD2Ht884yYY95s",
  "key26": "3fQt4zy2JVYe1B26H7e9xmxBLDYd37ABDudzG35XxdGRacXzsstap8MRFxPCbSzB4pahKf8C1phpFPLwbVddejqa",
  "key27": "BDnrsUKdHV7QD3ogQaB4APRdJ99NNco9x5Gjya4vFQ1WNToE3c9dcR9YJACWNekW7UbrUXp2WjkPdk8j1cUoLDY",
  "key28": "4KqeVR1EWPXNkXbuGTGCCbCuLBpoGPzs4Q2BMxJjYZmjnEbQoSJRYf29nFRsBsgeap8S6g5Gi3xMMtGxnTmCML12",
  "key29": "2hAtfjtizQ43agphWGYbc8gkmSFEqwtCWMFFGcVuU9tYUFnctzNShc1nuN37iXzj7e5rzNyWHqHMaCHYcWjTiWe4",
  "key30": "5eGi8wRyVrwp5wCHHXgYSCVu8bvLbghaVgympit2W9jN8oBtNd2ew8EHkKwU6yciDKQntyfZPWBkHcxxaJdzw5We",
  "key31": "4X9cqn5gkAERbePAK4pxuhVKtCj52RFLisNEaPZdS4JLw3GrGyfKoQSYMeFYHsyxiwT5nem4krkRgf24TUN2zJJm",
  "key32": "5Ei5YFy5jvFnpxA74camRNiDjLzJ8RgzY8yT1nEKBir8NLzc8n15vPZDkj7ZEhroPhWtyJ3J9LPwkcHzWJ5byPpQ",
  "key33": "52YsYdVaWfM65WCJs3mtJhMVL4g1qqZiPGg8dthfbUtAKBHU16ZtXyg2RgskweMhcrPvyVygKVAfYr4eNXx13N76",
  "key34": "61B3juiepgZJAAsA8kr2Dt5BYTpPincpbGqsxd5ssEDzmG2K43L6eBKyaJHbE1Cq922GKTnrpqhHm4ks6xCnWeWc",
  "key35": "3CARcxy4XymtwuG5s9qfAiL6cAkeH5cTNtvCwSFkgU6gdMajpc96Gx1r9XqGgxAgR9LPnYYMB1Lta6fZx1wY2E9k",
  "key36": "2Sns3ShwJ8vjMpJyje8Hu2nVpi8Naw5hdJQ1xZGiekeKeqDuVFEjvwF83aXPyWazBf5MxV8VVyU1Sb3zkeJNYMts",
  "key37": "4Vwkbi3C4cE1qisae9BgcpKDoYDVr9BypYcc7k4V7FEfPb4khZXBiBYTUUZh45xxm7HqvbwEF5v2rBaxPLZdPyHp",
  "key38": "43YvRThneo6UKARTX5jmWtt1Nbnv2egVHgGKj23G6ck1JN4ah9kA2yn4tbpUXMeUPP7sBZpXveoWFALUJ45Qf5tD"
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
