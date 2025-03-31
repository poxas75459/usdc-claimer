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
    "35VM3UeZWFxWvcNhe6tXE7mcQdE9NryiNZEEhM5zP5kPy5vUhMCfb8DxL89DbNrDid8jBcnoaSqX1448tj2N7QXS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t5xJrxywgFvm8Wdb7gAAwWSrm7giayKRpVk7vpfAeF4fm66R6DCD6RqgBypkqR69J17Uo3YuErTJpFh9wvuJqLC",
  "key1": "J3tFnLx22gB7SUAyWsYHE4vMnbGUvz45E6E6sgp9CuqNLKcd93FonaxJtQwkkZoCFkEa51STgBkUgocYb4vbGJw",
  "key2": "62eYsWX3zAoumkHuC7MPEES8sGz1xyC2884A1kwoBexxYyvbrdR8ne2xLnUEUHd3fqGwBprC9rX1Q5rhDbbB2RUk",
  "key3": "3j7hKEze5fZhYUM7uLmaUhp5THLyX3rHRA3jhtrZbGs51RD98DoXHQzy3wtVhdMkqHT2vz6pmo28pLE4S5GRueu5",
  "key4": "LicNmMGBDZv2x8wcPsC1pgvt7A3yVUSprPjiuZtFy57X7N2b3jWCxrursLkSP3jR7XwHRY2iwY52781WnaZQaSS",
  "key5": "5J6h59awYskdyS33DUFPVoh4CUbomwkGDzU7y6jVZfbkZAd6DU6J6xrZAH2XAQW7npGeTRqRAjRY4VnaVoHKNajs",
  "key6": "3SpxiJCgk4mGyVbyrdLDENvrv1cGJEZnBi3wRQ8MHM7TpfnCFRQzYWR5UqQWU75dzP725wE4Ak8qgcNJxR1m1yyW",
  "key7": "hyPgenczdUZsnY4Nius3FJRH3mB5oo7Xb4cPm9BT9Vb3sDjMTAAQi3UcQBayHzoxj11zemEr6FArL5rNCUXnjRk",
  "key8": "3ayh1nXr48pVdjL473RxzcxwmBKyn3eFnY56dwiJmmf3S1WpKNFQ5arEUuGYx6s2ntn1pRmXwYD3j6ETYpLpMdEm",
  "key9": "22TVf2YHR8175zovgiUbSjKrxL4QpqEnF9zsdjPPkBQL8tDM64cm4HqXgG4KHdvHQ3x9QDz9WEY7fz2VZ2kkjsfs",
  "key10": "2hvZ45co5K2jjszEKUCW5s3gxn8hj5ySrAqzQSsN6DRUoGdEW2b7Gbh5KRfMB3v36LcmmJsA5bsVUHniMtDZeoTZ",
  "key11": "2TQx2rF6HKqPheRmrGApAhii72b6vT1jaWA5qa9s97sN73Y9tjTVxGQAie1qAuwZop16m3k99qQBgCTJyxBUvQE2",
  "key12": "2J8pbtEyXS2RhVyQb1pwd1JsyaZBEedSNaqHjKWjN85sTKxwrDWLxqZEnRyDz866hvCPoZn3SXkDC2LT6hWEM6By",
  "key13": "KLX73U2iLcbzAAXKydmT7srUwiGPjbW82xZNg6tZRbDH4K25rbagNtm52LZD34iaXFiG9LfPM6GxABJyid3pZme",
  "key14": "4e7ihULCC5KYXu9vDuUF8xEB8NxQvaYFFHSopNUkAhAsDMPFWxvY747jjeEKJw8uQbYVoekC9pY4TpA87FhtmfjE",
  "key15": "3vj8ocdgQwqD9u9YumuZBzi5uAKVKts57F1Fs6Aq8Y4pYHfQqnZaBRho8Sjo1tG136DTtcqrYaJ8LZLPykj2hcss",
  "key16": "4sv8iV5nRfoTsKVJjGjddBFzCGRt3USSNvnG9JaBT2ihemtaqSqPbdVLQ4rjc3LYY5FFWiHBKhxDLnB29jmUBnmx",
  "key17": "5aaexyQdSVEHPtzYjcdHrfPTVGoAuPGvuJ4enuVBbvM4H9FLa1M5Su7L3wiaFJCDx7TwbMguw5QnDSeieJKDQemq",
  "key18": "4nxojBrLwQtDA8LN7U2TLF1HwtAfUD5yoMTCT6NSf8x98yPRZyYF5RvszdsqzQf3DxrF9petrdZ9Z1w5pAE1mw5x",
  "key19": "81zL7aTnFAWFniAK2MjwwVttc85Z9uHE4sPr4q7HULNrovv2Cd1LJSLVpzgZFKqtxqRbGmPYuXvrLznKhfSoG77",
  "key20": "B84aLSGMqFF8FX3YfJ7wmdAgtZqSZcAMK3t4wbZWCkyzYw1PRdgRh5pqZDhCPAcbDq1oxXGG5uY7dFUKcjQ4fEM",
  "key21": "37bgRuTAUzT4ELrAXAVc97GzQktySfM6GiuCe1sj3QAvEryXQQZeYU4iBm2WwXdPCGxZoDrnNgFujEGJzo8Po4cg",
  "key22": "2C8KPKWd3m7HBGG6Thpu2h1bGMBGafBKS5tdRcqNy47H2LAFZor8DASMPxRqYUbicmcQdnAJaPEuHDPoVczBquKu",
  "key23": "4RWykWLokiruPgxxkbt3XffxJzpjH8orN9ADXkXf4sFB2i5nXXfJo5rPrUKkHvysiyB3WwCEEN2iGzuA9Do4roKD",
  "key24": "5RuqjDu99aMUqs2CE1GAzDxNRSkeeHhQQTUUFySeD3fLypuvukgzwq2rnSi5VDh1BFLQXdz3bEACeU6WpxPxAJBE",
  "key25": "4JMosK1mKq3fsHBTGWh9rfEzXMdkshav296Hoc5WKJ1eXUWean1eNyymmPfQLuJaEtXabqmR1zqw6Xh6g6Yse1ux",
  "key26": "4o9gqLU52BL441rMoBTutbAMjGbG8XoSbPgRmgLNjS1nBb4fkt1TGho6ymrGLxZML2mbcSdQGRxRYbBzA4HR5W6U",
  "key27": "4jp487VmTQ2GnCNCBU6WZuMU7GnNHUTDZV7TVTCVnsQtUVpZF3fbY2BAiuPBuZWbFxZoNMnZYHTWwxWFS1m2yyqK",
  "key28": "491iCRaxgoXVXAaVnicmT4RxziBzntBCZCheHvyavbNLT3vKoLPfN3XUDoFWqAjyYLbUiurqy5zgiSTKfsaoQbM5",
  "key29": "3fqjx6tUAc8eTib248x1R4e9HAfnQabLjzgTbHWdQRXZJ3BZnXDMgvbd1eqggHoYYDzCEaCcNe5DPMfUkeoWHN6K",
  "key30": "4yoQR6hPGrQrzJqf24Q39Z5C7grPQ88pMXV3pfEqxUxThWC7MetnZMK9ziVajrqgAx6fVE6h7EP1psn4ksc2ut6N",
  "key31": "qjCGi3uPVHJrMESWeLFsdJN6HsZoZ2x3F6huSkF8ZxF5TBjBnz9q7DABRx7KA2rNMPsYabuxsBq6WmmrRsdhbDo",
  "key32": "2diXDZuJYcYvimUnuTci8Q8XSWjTsJTTKVhJsabPsXqeT2kvVcwvAgNPdytceYXhaJSKghhEnT8JTwfHzGn4sPJT",
  "key33": "3fDFmXssdMteCjjKayZkizFa3sjD17r6q6gVSSRqB4e3Cx8kYfd8ZozPmTe7gwuokPz1AHdfYMjUT4PQFCNzXvjy",
  "key34": "3JDtF28bneCi6CdMXKFTYrEJJTAGmqCZcwcs6TQoVU3YRds31uqv6kA8oAUtUddV6W2uVzAJNiF6ZVGkyamKhmf5",
  "key35": "4Aqi8mCQfApQdPJqBGujN15jnAFako1LbLeWACZTQXUyXVETZq3cLRVWrWHozhciSdkAcjdthx5NCWDkRDQVh2Nc",
  "key36": "2Z2j7g7QFrKy95WhovqrCGjwYeD2zLphmk3mZyXjYsxsgazmrXbfJGcrZbrJpypNr11Q5K2XHLQxyH9EcDB1vhi8",
  "key37": "5oqj5bPEwZbzanohg7TfHqdcGj542B5XUm2hXjDjgFf7sgsGExH7DVAZRDfPcyh8tGXAyXjdXjqVX5YuYQaQcZB3",
  "key38": "4qssk9cRUnSE8ubMxUCZfMwbKUBgkN1PS4QxHMVd9KfaWd9oG3AuuQcANQQXALD4CKhFPJLxnV2D1Zab6LShA8ik",
  "key39": "5q1UL1NCbasQ2xUF4rVi3nEiqnKtY9HEMoqsURXUJnYDxcjFYL4PV98YV2crY7DFvr6VCKKDNUGuiw3iD9uLYDty",
  "key40": "4knkECX2tRW4Szz6dW27nSZ78JgxiBVHXyMe7ZHtgrhcBfD3UY8XZsL7fM7zWHa4A28h21vCuTC1kYvED8NTk4n7",
  "key41": "48B7RreLCwAAD4kQtLQTha3gRsT7VpkwVTtFSY4M5wX2HwQB7EJ79mwSqQvpBxeD7hXWaCUkcH48pNsZxesBCa7R",
  "key42": "52n3LnnDmw11fXCVrGzFwLTPrjc9w2CQPU9iKpYvGnjCYncDw7AfDwztVvXjh6HtbNxgXMh6gcRhG2df7n6WpTNM",
  "key43": "3gyZ4bdcZrVoTSnfAoDb99hRnkZbzba23D9vgYUezhfZ3spRsCRV2A9h56Y8wg1iLgdSCDGfTxsxCEeAVZdovf3V",
  "key44": "32SAcpToTyxkgbiZdm99CjVtwxQKLVjmMQye3JMvmCUg33fAHfW7H6aAFiBzwJdB8bY2wBnhq93hNdfh56WpjddL",
  "key45": "EqFbSCmnTGg1bNnZFw7j5kvHHPWDwpFPr3Y2rJs8MfRXDgM12Ldk7mz4oVKV5R69bMrb9jB37KB9dAQbz1tLQS4",
  "key46": "3NStDJKq3Q4fkdEZJTMc2SgEp4ey5nq7LGCc2FPLPMnmsqUTtf8FTpcf4t4jG8VRwWgQH3XNtrtgwm8PG3EL75CX",
  "key47": "24Crbko8TEzvqqYhYZAUpBqbsUFdqyLhJ7hRQKDsmdpLyZXAmSxhj3ihTRej3pUpZRd8mu5HX33SXjdnGtuHsbT2",
  "key48": "3nh74ndDceqBhn9FHNp4YvbfUuswCmmBkifMJgwLgUgrMHamdb5eLNHQmHfttuPaxUXiGehe9KKuBetiHW6B5EnB",
  "key49": "293MUg57HfAyn8Tr7sZBJxBmnySLfYv9zXMC3Hw3Ge7puXMWoxc2k1ktNmruKUXFt5QoSiPC7nQ5FNjPShECjPRd"
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
