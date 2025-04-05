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
    "5KhtQmF1hAQXCy9Rm9ZvarSQYepS9RocTBxEszwX7pm4FqyPx9HFfoMapm7rFxNpyrXY8aJSq7odUBLrBEWNupeh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pNdh73cbeywzUXdqhZCHG61ZTD92DjHULzVWUmZaasJtYJUZah2q1F2ZQy5VfBULQ2boFTNPZDL6g5kCCFReGYw",
  "key1": "3WRWMhp2qpRLic7LdMxySHJaFAp629QzA2Bvgy1Ce5LwHHrxbjAH8DyN7KFa2A5ZMiQ6RYtKgwQjBpoirqYqcap1",
  "key2": "46rjQR4HtyLtioR8osGyhdovTYmtYULMZtgZYYxoE1xD9UnSXQqBCY3XQfjUA9hR542ohSjBNcPVR6ZwyoB1v8w3",
  "key3": "3bQMW7ZoQEwi5f7Gm3BUBp5vbXKwcHDJYv46Q78im78eRHNDkZNebFaPG4pN4X9LqyKs2qEVkoz4TQfC32vWBP6P",
  "key4": "QBW7qPx7vmXWffuwqhRYxA8ETFp15JCmNtFMRgYKPYcU5aa37kSQsD44d91ezszcFfNzvhGkgGsg6NbfU1xMHuV",
  "key5": "3F5bmrsqWz54paiuLzESTqoguUe6G51KMqNCvgxGhwRbGsaMS26mAF8pw62KUTETDP1no6C1FTLVBKTZDYdf98hz",
  "key6": "37QuFtKPnzzKp1TiRMpJrwi89LTd5nZMP9YREcr7FHGJGaKqsCViM6heM8yUYN4PJiya2nsLxEK2kmmqoCuAGxiB",
  "key7": "62CFp62sZ4ui5X2Ejs1jSVqtyZEySm9n4Mc9KoWWwizzg2ZrvKmUWnmosA1CCKyBoX8y5cSQBqnE982aBmKaG4LF",
  "key8": "468YcQWRzukzmEj3ucJNfKRfXDvH3Bex5uHPXzcnfPXRyeBt3Vmhz34VEAAVz8dwLLRJGQUAicAmV5ADLT48FXor",
  "key9": "aWZKDxem3xUG5Py1djw1sxn46dFpy3nKrfRQqmnLnWbiCYksxRJkXff6LpMtfrY2UMQ2AF6cvibgZ5Avn6XzwGx",
  "key10": "3vFe9nJkbyteBbHY5qDE1a3SBX8VHkn4uvQsvq5fzKpwajt9qLTbe1RGc7qyiuVqbukJnYACK346HhLma6BgjDRr",
  "key11": "53nZ2HEnzoEFhixEGYpfg6343SFvYvrcHhDjeHpcGP9bBUogJ56EsNF4AV8JCg7dwqd4xtpW27V6sToXfZRih4ns",
  "key12": "52jiWWDKAheptbwBLg4N7dudN9Uc93LXhk7vD1T5HgBQdx8hgQ8VXZmt2qobZAGX4NxMe139tTrbJduKUvHqcp5f",
  "key13": "5nvZZHtbdxTYAp8enKbunnriuWNXqq6YvxhxyE44CndNmMs9m4b8EMJUSqqSUuaytRa71xUvuzp8VpmV4jN9xEw1",
  "key14": "2UHcMF2gwKgTrXb8FWvpRXpJeCDkYUS29wgSyUQE65ATNngw6z8fRLUcm2GTiR3WwWV7Q8BbdGvedz4gnXMxkegc",
  "key15": "5hxBPejo21DHBVZPdcmHHnncy6HYiEjuPyVHvLcDnDXqPQNWx3yxzULGbe2pYK8iULDNJesXFk5VoX31vKgVkSo8",
  "key16": "4TRRkqKxpSMbJGMFP5DGsY6D7VsLFNRKZ6mR8yDmiqfi2BQ6FLc6zhHDEu6NHJj7n3ng168qRxRtaJcH8jtstRCc",
  "key17": "65hGiRWBJxrj73vUqY16wKL2riSTaBheFHSK8pkMSbCm8XQhr9pKc8ydJ8AgZkRN8E437jJzeg8QCtVC1Qm1V1Q9",
  "key18": "43fw5j1yfyyzQq8jjBxQhavAnyTT422uPqcYAQvUjeVBhHCPzaZuEoDG6NFgzER4biKuxQCHdbkBwzsFwDJcfmio",
  "key19": "5MC2tZQQZLQ2NgzMGQzUe9az6rYD2QBczPsTndURMEfvFcaXgvuMifShkggdPYe2D4w6gSPdeUgRu926T5YFd1QE",
  "key20": "3ds5iKCziNcC2xEATnVB2qxqGa2BiwXKD65rv3Q1AVckqUpxPgEjUhCMLg6nKf9QWnsGudddKeCbQqfWGvGog6i7",
  "key21": "34KMapNja8km1hNhPoJxS7F2pT7G5CmKVzFj96jHaYfWRus5Z5poVa6WJ54Xh2Yhbmj4TF2Vs6TZHkfipjM1XwgT",
  "key22": "2GxAei4rm26yNaaHa19mrdWgHjD1SXnN5fV417xYF4iSF79vGoASFGLwweoNjAFQdqWhqnBMKs2HEdYg4nY5JMVM",
  "key23": "2EQsEPvbcmB3RVWHCfbpbXEDQvZESh93yL5FB7W5ZkqNttWd9CX2vVAVtiThuf3SkWXTkHZhE5G1tMdunnFEL6ua",
  "key24": "2UXnSsAFn2ZNNVRVeLjgVfDm7TLxKp2GiqRUh9uQieRLumvW9LLspf7X2VRNu2mKwXE8arBZiCMbzwe3vAoVBjgK",
  "key25": "6zrBZV7XvjRGbgz3h7QCBrTycs22Pw5bhrn1Hf9mcU6EncDs8vungRuGG66FnvbUavh9nht5RwDMyPypumdrb5n",
  "key26": "3PCq3cM5JuUYWPG8qmD2ngqbDNqz2y4eihSGPnwkh1uBEtV6gN9uLJmDRNjLhzZSoNPca7KtXKyMUPwAZTzpCUc4",
  "key27": "2EQWcFPqf8nC4Enfs6VTXDfzEtn7ecXosoj9UssnpYtexmA7XvVWosdYuzmm372ooijyf149Ntds5oJnYhcA6eph",
  "key28": "45aGhn1DgrxsH3aok299G7nUHqXntWMxntbEMhDxVexpJztpEi2UyQC5Ptj3QdtjPbGrFdVaJHQLtd4WtQzWA8r2",
  "key29": "5jfmczyJwNqYqVUTHhV1Hpejp6fYr52seh8bQuiwaMtFda69eQcUGx1TqeoVJ1gULNjJioUCT6J1RCEZL6AYAhJF",
  "key30": "4CGm1gWcgyM5QpnpzN3oXsy34ZRtnFrajSYYJrJHwEqfGfZxapBUDH61e4R5yz8iBkqZe8SbMe2QCQP7Z3bMNUKd",
  "key31": "4rJZo2AFEozRY4TEe1vTNWF1oSUamuh87z11kCVujkbxoQBqm5Wpop5fraQEyRZXQ29NZhQbdEvoFH9ZQG65ZUfU",
  "key32": "3mQiEESDRrPAJeuhxLoxVhLJLc9dRQD2PmXV5Nr9v2Wz3yCvksHXGAxrqDCfe4dJiun2obBzPQcrk8iz3Dmho2ci",
  "key33": "3k7rerkggkhnnrYEmeBDdG7dQ7cUULmME8sgpRKHapfsDjg14jH8gHYH4hiL3o1UAcZgLoiAqNgmvhZB3wYhXToN",
  "key34": "4DnAyhTxe8bbyw473XpgBiKF97Vk4ShKzKMS4WCb6qVCWCk8MoTjHaj99adRKYH8QcQJLKP6hJGB3zN6qGy85qzD",
  "key35": "Cw9HabpcqbAiauZscy7KugmGxd8KDp6qEn1DSwJfhd7o9DnSPQbs4oToZ4ha9RgvQ7Gqg4oTQBaybXyizjKhD7L",
  "key36": "3Q8oDvCL4m62Ax3tgwEPFxWp9y7kz6Sded88Gc1CMJuD1UoetHmkPaTZxkQrhmi8uqBzpF2q9Wz4gGFThWpwAuCp",
  "key37": "2cNXpZMwrcjvWv9yQtRJf5XibKfakRK82A8GmBxaR5PB7LA9oWr5dQn7UHeBZhpGgy3ES5U3FKsyKH13v86BU22m",
  "key38": "24XQmiN2RQ3HivEcQfgnakVm75g74KBWK7ZqgdijRFfGkj9QUsbdu9fhy6uBosPNGLNgFinHtEeQqKKwDuXRN2ia",
  "key39": "36ntoKX2Sz1yeNVt7HzjtmTKLGkffPg2WxSYfnFZnV2M9efo7ZReZFXJp2wN8XW3W6b7b3zYQyVxcpMznWziA7ru",
  "key40": "3yxr493SgL1DReAm43SYqnePfFzShz7JpdvoavT57hQrTxDQfrWqi5LFHC2W8zTvgzsboenayrDuCf5ENwbpwtSD",
  "key41": "p7Da9CbMvPhcVEVRLS6mCYKMjYpusWCLt5UKK6c2xEYkkPjoKq8axZgYpG5bkD5HiK6tGLSiZeHDiKziEg74cDW",
  "key42": "5dncsa6xKadmn41JvYiHuzKqvyhBNPsem2yZhSeFmVWeRE1SwxRLvxTdds8vTPDrhry1oEMsKTy1DJGuwB1gVDiC",
  "key43": "36PGC1JGvVgRzNShyn673J5rxh5AzQrD838iYDwTYQYbTTVc8bZVg3pUYmW8EvbxGaTCeB8TdD8w6vyKTqwWcxDA",
  "key44": "5h9hYUKDP6CcjfdyKqovUpnZKs4wM1Esg4fPUh3iWZTLn6ZyXCY4Mtf4yiadUbucGevXeAV9sC34msdwK5JdXnHc",
  "key45": "5oC4FBMGQkgStoxMLyknY6cSs5uirdEzi4j1uC51ybo6F64SLAAR5Pe99AY3T1nwfdLpe7suTS3wq19iTqASSogQ"
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
