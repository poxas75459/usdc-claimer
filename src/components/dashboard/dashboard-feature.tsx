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
    "4oF4SuZ7qWuYsLEypKVGavTmgrpcG6YHzrfDjovQyKd5okyLo5Krhh9xZFsWASu7XgmLwoQUsjp6c38cQLP77Z34"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dBuqZPhLhg5FKqCzsCU1FC8e1hZNz5geq5eiToexwUuDCxfwrmpxkumN71o5LnWzkGmBDv7b8nHdnKAk4AJQ4eQ",
  "key1": "SPz4SYpu5fv7XqsoKsRyiA9WoTqBYRoSGDWygDo3kgodaNJk7tnXPMzNno38BMXaEXvzj63t7vztP92tB1miwav",
  "key2": "37eAd2jUGtrhw8Li6cPieXps3vHRHJkNycG94KJKdY7qTwEpyZEWoSrbpqe95Ft7GbaPr5mcgPcTbywqKppbSQwc",
  "key3": "3vmzXcUyuxV8o4c8WyEFhjiVxDXvMijqDTP1wxjxxLBWNQ8zuVGzVWT9Nx1iZfEYEXsMSz1z36E6AmA3qrYWzG47",
  "key4": "25jTw9meoCkH7jF9BRR4VfBNCpxg8htjG2ABtV3naMe7ZeRasHGUuZeekf35aY8QCq7txkWAtEcMbWEjDaNPRKHg",
  "key5": "5kXhubrHs6naWpMpJizKKJ1CVkSKX57vioHR3Q6omsVEeBLjCaNyAx1WzpmRDaQW7f9H1pGWWCAVzYaEwxi3FLH3",
  "key6": "5FNfpr31ZbYr2xdLavPgEx1Yc8odcaTWKkErTEsciyWQRt21PrUvid2xWXPGdzDYMsioM67vvkW6kjjJA7PCF2ca",
  "key7": "2UdMtboxKNot7PGhoHxeReEDWM5BGCZGNEtqqqPvGjARnV4QKRCR73hvFzn9TDVDn1rTYHFCsXQa9Vzm7f1Ly7x",
  "key8": "nmLdnRc4pydVLeJK8rRy3hjUe8HCMDQdFBw7G71YLw6ztF1TRMo8tbczKQMA6dGTk8ymXbeg2uH1Y8uKv2YvX83",
  "key9": "2JRVzjXtkv58yC8UfBXm4XjG9UVifBC1mv4d2AX6heKW9bRDzwjou6MBmBnAt9mkQdgoBAvF7K4PWZWaoB2M6KRr",
  "key10": "2NYPcwAefCYnjLXuUXeUb7fjx8iyyaLA9R4Jw1sGXUrwUeUh2R9dTDfLiKKnaxPvs3etSUK9Yin9zGjLz3DqngBi",
  "key11": "5NrsPV2qMoUP1CPpf8gCHjmuLuBZFBbuoHj1md18LB7o5mcF8CkHBCURAjeBmREyg8oxUxutFzFwyc6TuXX8PjCy",
  "key12": "3vq2tD5NWyee6Wadfzr5NuBtsVyHeaWF4FrT2sYzfidNvCBBk25Gu7gAxo12FLCUjxtRyiT6goWSfVXcZ34bm1zR",
  "key13": "2sNJKwCrfDmEvkVBdyAd4pH4zCcGeVFV7P6pi8jwws1w719eTvhvRpAcnQ2oxscz8pCAu1ZNcKaky1J2aXZnUkZW",
  "key14": "3k5G5oCMuZ82RkN9eYG9zcPkPq2KrHkAAnM9fkSzFFHoeRNanKxfk7V735F3YfQhSGHnQjNJ1ozxj33g4mDwxKYR",
  "key15": "3QzWuWsDF5wQgFiXRX7cnWYrZseXm1qU37SrX1XCQgPU95Q21Q8KDpvMdnvzcDHeXt3ug8BjGextevKMwRsc3tYX",
  "key16": "2DvuiizBKB6DpC7S1VbFBpeW3M7CBza1WAgJA11vbVNCErZV1BfaBpryK49s94e5y3fwhEL22bmGRwp1LwdQzghG",
  "key17": "5nwkn4jh4QSVUqhm5pvQGqbkYdrPT2sqzC1FdwyzyCKm8qpNkck2We9vCargZDxALBKMADvPmvDpXWK9dwPohQnY",
  "key18": "3mUcU3cfzY7eZihhQ4e8EMiiTJRsrZJqvKdVeMtVNVeaVnbF4cGTqUAauduuE1PSeffGGPUpASXAYJKT1aXPtT12",
  "key19": "35NtgUqh1pFzZUz5DX6DmLJKDszbAH936DwQbEWsyeLnTmrumtaGzpHV6Lc681UviKcKJo73ELzN8NPNkPx1zux8",
  "key20": "54ZAo1m7fhqBrZ8GaZFrXvfzgdFVi4Vdtkwz9xQQe7Xu89i2ou2VvS1BFSErxEef7tPvwg8c1hnGHyYedDEr3Ppg",
  "key21": "zyDmJZgSFHYxVbYb6XDCxy1pA5MCWYoZFmCKSh6xQ8JCiJGQvtEUGXtrRo197hD89edHuW73oS2x5ys1otB7pVR",
  "key22": "4mB7tAfqQDwH7Ns4JVgE1W85q5UuvxcbgHXj7SRhGJRwqgVWfqZkKppYwKwqXUaaDF7niy4nq1GmCojskuAs8FPD",
  "key23": "3wCkiLoch5u9Zjm4WZM4Pr1DSo7HxqQ3NpQkLyRFAGjkS7uQcWVnNMmSWvKDJmFJaL1SaEW4ftJB3C2marWyffMw",
  "key24": "4q6rxjiQUYQvx5BS55byCMepN4Y9FAwJZqMzc1MiUhByjSyUd55i7eykNzjxfsh5jXUbK3kWBwRFBDAFsG1x9egS",
  "key25": "4AVCSD2esiy5zLpgVr4rf5NdPG711mtBXsiyTRxWsDTieu7UzRuBoEHwF8VG4ftAq7h4RXJJHB7jvywGJkX9zEET",
  "key26": "4kDChjMdf2C1aTviJyKiwVNUDEs1TuVwB2Hc9R7W8Zu8FVpj3KpBiVjhbfuYEfM5M6ZwFoFoL3Uacg9WM6FZvA6U",
  "key27": "4cAcVhEuRDPQBUSNzvt1xZvm2Huruh2eAiy3yQVCeZASSaX6TCwdSEF1VZxgWAU4snbGiouDg4sVyN7HB2jFLb2J",
  "key28": "BxCMyGZDcTUAqEVb18SB6LGpBZCiBiP6jLBKf2v8h7FbSbJsg3b9VfwrC8ur26s8Vy2gacxexZkLFPW9CDWiEVi",
  "key29": "5KgnaLeWVo6XRREzK21vqJFjyMJ8KEJyi1ziD91UVzshFxs6WDpmWwNP65T2Hx1JbS2vcTTY9Whk3ojHAiXq1vWt",
  "key30": "5F91wuE8DSpHeB5Wa2XLUVrbV4TK7TYsVzESq2f1S6QWseJKp5Ck9KMvqDyjsi1ULPrqBFbR8Xun3w4NDzvdSCKg",
  "key31": "4pPTXcUCU14W7rxbfLciG9cEp6RPY8RAQfyFcNMMuk8hS98gseakSiWPpenvLBrz1grwbPUccoUiWwURDngTmpWE",
  "key32": "48d4bQJ6NVbmmGuZBbZrJZRgyrfeVxKBkPcQUuFTxH1zmkWfsjzdpCUR9GKjPb6mkjHVMHT4tAYrecD3LR7XumBJ",
  "key33": "qipKZ32v5yz1FZ2roVyQJPgCGNcMuzUqLBxzLovnU79AAvJsfFM683yFTUmMFZ6TtJdcNKzYuczitXKJhpYnEjK",
  "key34": "3gQwCiDQxQQ1q4CqRS6HeRmvMmAeWTjb3UzbVwQYeMtt5v8xspg6RwT89B4BMPgmpKxjBCNHaTi4QsoCrsW7YHEB",
  "key35": "5jS9CEL4x2yKSk1JYY9SSCvNQrDLAQwJeFoNvuKwFaTNufxzXws6kXLd2U9HT2eq3XxfEKwe4qSXfQsYw3LnucpZ",
  "key36": "2MEsxsSuLNXpJ5Vnz2JdoSDK8K9tub7meHWRLHRG2QBxDjgSwk6BDmmPJy1Xu6egnqkyeL3J7fN2JXNHH1WMPPRW",
  "key37": "4rhnacZ1QdUGwba52JQWwx8FEBmcXcu1wg5SrQWa4cHDBweMuPYtjrwTd2DJp8FkNUD3MSVnW95pf9b6vt5fvtGG",
  "key38": "4YAkUnHJRTaoYdjzYqxjgQhY32ZhUSuy6MhqZ3RBCMgC7yioGrRxLbhsAgY5Lxv6sdUtPKwiwprVJETfXBXxE7ry",
  "key39": "3XA7h87vpxmJvvMK8y7d8GpTyiNeUpUD5thDtfogvP27wXwjXZGs56zj9YDj5ape2tQFt3EV1aEWBVmPaNoPhG1j",
  "key40": "4YmEgDD8m5gPannuFfKZEUL7t4T1V3NgdYxB2Y2umoqpzd5uNdkUwpDDRcQaX4vTWFUFj4t2TkNpKA7k3MMLGqRD",
  "key41": "hoaMuyFc9AvVXjrJjGw6Xi9kJ1piLZHwXockMw78d7b6pjNaWskrLdE7WeN2AirrF3CYwfwb4c2r7CxahU87g6i",
  "key42": "5wCKAqRSxQuwzMHy7muHStCzEBJk2q7rRK8fCxkmAW9kdhTDzGUK7EToCeNAsQxsYsH7myzApYyMU8T7ZovqqdDR",
  "key43": "2JELYw2cLXwDkxdWYubVYJQNdxewVLTjZzafTYH3KnXsv631LumJHKfrEjkfhjKGvt7DkCrvZAWmFVSqFL1JoBc8",
  "key44": "2ab3zaQuH9xNSG8h9GiETQia4xt5xSDQ6YAqbuk3epWSGeGB5Ecb2RsGTEPo4AmL4Ba9tUFU8VxhJGmzkUFcUBXN",
  "key45": "5TsoftiMXTeh5eVPJU2yLVZT6KeMnte1Qc5e9bphhz7HBdqxSaobPLGTYANffjqKSis7a3eRh441UZs5XhS4mxEy",
  "key46": "X82cYJQ35nZ6cXrbHsSDv3xprzwVPdTKhJMx9ECyVjyyARwdoeGhARQEnfnDodFXUQvN4afDU8YW4BuQWz6sBWK"
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
