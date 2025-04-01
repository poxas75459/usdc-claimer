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
    "4nF4rfAXQX7Cr5H8hHw6aobSe7QkwwgBguXc3cKMDYQhHAoBvtBdCtRutnSnAWXTbnu4knmh7WgXVybCdf4dr5eF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wXpt2L6wiPjyeQGgvW4ZD5aakngmTXo4TCBtZY2WdwEJ5imkH36Lyt6h72ofoSBdfRNixY5WWhXhSeXxb7DqxnV",
  "key1": "5xacf76YzN6QxK9uD6hT2Ugvb3uPFGEXEVvPn59cLZVwfwXAjJZf7VMGZnMaGs5YzGArgKgAxmx8TJLHrzEUtP8n",
  "key2": "61iAeF1F6MSu72cjxtPg5uLMLK8y3BX5ZhMHvKuNkf1aQdr3cCSaX1m4PoJsbyQSBw1nLr4EQQ8BWCWB2WN9CbEC",
  "key3": "38cdEoNNegjw6mF5e14K8LcAPd8goLSq2vuhpWNMc2WaJH39hKhJDMUK51FkhmNbP8JPskC6ffzqZFkcctqJ1pfC",
  "key4": "3d9Q54nreBRYfMVq7B37krrpJqncVHatEbu7Jb2pwGtc2eBmgjELrbq1R9DEuWAyXvwJWmtPxtC4BAK3wgs6Xm1D",
  "key5": "55HC4d3Pk5ZywSDtJATT9pzxmiAWRKBb9t6mmf5ARAFpzuMhC5JphUdygFRRT5d3A7iuPYWeDGoRkUMwtuusiEMn",
  "key6": "3PZB9ZeRyBC7aWUhBvX9wBomtvbtChaN9pGJDUb3DpUybC7GXc8cRS7j25BYWEKunsZQym7LH42CQRP9RmxRYVAH",
  "key7": "4VTVTaefpbNwrMVP6gHVPQrY2CPR1un5x8REVL4J3HAxx3MoGwfBW7ri5QvvLscmYU5gkNHRZVwhpvP4dk2bpf4y",
  "key8": "3LDm3ZtTrBj9mpeSbYTeDkPEm8BvrP1tx9qK6LvRX5j9eimAk4egU44FF3JVtrkzxKGPB71sbeHGUHJ3EvW5VLmN",
  "key9": "5P3oWfc6YUgrwyDtBwVTWacn8i9oVJm5iHbE7tMAqT2umPyxEwcQMdpcXW9Y1qby2YQpbzMZBu6MmWgp7rdzcPtz",
  "key10": "n5WwrqvDjvix8XTd9LocByUHuSHwsaTxEKiDTCMjrRtSGsd4aTt7rfyBS3jBJV6ZNejyXjSBcgUDTjCCAbVuUjb",
  "key11": "ofvGnD9KLrggW6PuSuCyjJMTAHjybxG4kvQKcoGhNEH7E1wF7dGUPnn3pfNjSYZExj9iLkJoUaUzYkHsV5LwLez",
  "key12": "2jUi5knPmzYfNnSz6xzMm4FZ551ewYxtdgBpaRC7kEqXC2wJ5TwtdLXpr533QSKQYSLVYqaWijMdLbFU71FGFKRh",
  "key13": "4LBhkk1U8uhZ6783Atw9LMpqXeF1vH1X3KBSWiMhzyqtnLehMPPM3p6GV4P3mbYoYWG9HqkZi2UFcLSzC3nH637o",
  "key14": "5MNYRuc33cFgguXkQ7jdiC7ZP3URzvzhGpa5nV6AXAr5irgJXTtD64rQieYnM22c1HMi72TtT693pjriPZnaqbXY",
  "key15": "5d5wZvZXcn1ARAm4JtLKmM2jx6BGyyUvE7afY4H1kWoS68qbp1dH9zknzq7LYhB3CesZxkw22qoKyu9XqTrqLRN6",
  "key16": "27Xk6aoP4vkRnkx8B4WoRYLUjAGFUpA3wM5HwTssKJwDpwvoiWhQuDwRjuPfs2RxgnvQxkZq5qHmk9Uk56mVjfM6",
  "key17": "Cn1x5AqkK3JgpNfhRnoQeoPj6mk6UrqCX5h417oCi65rDZqECc4dkrNqFNtnCwqnudRMyUGXprLErAviLaJcrUD",
  "key18": "4sFvW2P9txH5vQcW1EYqDrzG5op742ReF1mL5SS5NAscwRfLR6n9TcjTEs8ABS8zJwVfxDRB8zgfVXqy6RjJnoej",
  "key19": "22AgAJW7iRN1mtw3cXN4kD4xTwz6RQ4b44yWwLvbAPzgKkcJPDdzKvFqmvoeng7ogAvL3LEUDnGqhYxgHy4W7PWQ",
  "key20": "42DQqaf4UhuWGuqCb6wQeJQ8Y7RZobygEWhjXcfBVXMBJK5JRim1pmB36eP6t8mFP8fFGKQLLyk6nzwq8ttzQ44f",
  "key21": "4c8eXi1VuvatRDotZwqrjpMJGTqUVehuNGrrcuvae4trPM1RSunFFMD8BUH7ZmmTkocQQEnckQU5GrAFc2CgUCAr",
  "key22": "4HhKh8YiQdEHKewJuTDQHUn91sEFzSpgcLxgG9ipwaNS12GLav6paTdCg4Bvvimfnhw2kA99uTF3VmNYmkcEp3kv",
  "key23": "4N6BVjsUahfANXyPjH8Dr4QgEdYppKa2ubjcVjaNdcmyEdMm6QKpaaCxALrW9N3V6Nmprrrm1PgBjru1rUfgThdT",
  "key24": "45mykTVyUmP8chxNci6mSjoLPF37ZnUPSU9BifWnioV2vNdn1T4F6W6LjqMeSPfX74XQSPtKx2qh4xmebduiPW8q",
  "key25": "4Ss61AdeUKQGM4cH7UqfokemTKHver1Um16AWh6PN3y6xiktu84KKASU6TKJcVQiEBa37ruCzLh8NH4FiB4PKhUy",
  "key26": "AoRTDh61dRWbk6rpJZQkaKom7b4qAyngwzH8XtxWohDP8hGqihT3JiniVxSAtA1n1ot89BvG9x613jVmYiBT3mD",
  "key27": "65QSMPDr6UgrEsUjWifRhVw4ySeqouuPJ1misyayhuqfsNz7SnLcq4qsoK284LWa6dS3ehWGBuGzRoeAiCVQqMgk",
  "key28": "37a3nDMPf2Jb4sKEvasg7gaiUPpbDvzc8vqFBWAgyS2Kt7qFb3Gw7whnBziTfZDi2n72wzgQbpc6TAQN8Hs97jun",
  "key29": "58yiup5GfneQrcCnyHa3pmVLx9yjEGXFPaNVaK8yLRj7FvbR4b3xWH9v2XbMqkxQ1nav9NomRTCqaeiNrDUyaBjH",
  "key30": "3PpkyfDiycFEFhZYhkoteGxA9sjwaMkJZPqjzstoc2Uq3oebjLbqNvjfnbXeJJeAU2SDNoWcudkGRSsQf3T9wGUD",
  "key31": "3Vzhh27v1C1kQdGwy9qkJbHoMGJ9Q8yWXpCgXN2LteLpaMA4yFBUVsNKZBYuQaJownjNd7wEzf4QWGcFmnUvf54x",
  "key32": "43kqb7Z9LCpTw4v73ydqz4yW6uo5PidnbazZcbA2ERrpQA3WorbsLBTaikPLe26sqgdUgWdRa1TBfsrLgbeZrdBM",
  "key33": "2nf3dLAGtHjEvyM8KHem1YnkucghtktmHsz2BpvQLXQUaFo8cQyKupc3o4HHhqDsAdNgg6qgpmsT2tR5swA6tC8j",
  "key34": "RakRqLdLjJRH8SRMZWDA9iAgh55CcUSfAuspZ6P2bccv6zqnGc5xAeTEYW2YBFezqCTVTGJw3udTUxwPgsdLqeJ",
  "key35": "3ioZkxAcomohLPUAmEE6rjLvda3imujRN2vX7YFS8jd7AWySzRQrjgnndT8DJdV9ZtVNQwB1RgBMsD3ZRZAZKg5d",
  "key36": "4GprZtrEJSigvoTASb6q3UTaxvwz6ALmb9EiVtCCnFPmLGhcqU3veXyjmLFcuVAkHkMmBz6oRupMfK2cspo3vJkg",
  "key37": "ykZHqunB8K42GZcuhjqZ3yr2RRkR67fEzXtMLas39PpicAuKx4JWPwVjuEBHrvnTeHzi1FF3rfvSYvA5nt2ejQc",
  "key38": "61LT62rZmFjebqYHGAdJ2Yi85JtKUmEcUJBA1LtDnRYeLYz2Wc7pNCEzQ7xRvBEKK35zphpHZ2o4jLYeycYVppTK",
  "key39": "2YsoGC1NQ2qBS5GJkZ6a8zwQ5XU4swcPWNMHrNn6SFwEKgPErsCoRp6hodaotNshKfsHYJWELQn7bQmzX4DXoSzu",
  "key40": "3SXdjS4bi9jV1CX56LCc78uRF289F87DDuKayMpxwisACw6e7HxoXgKSiVU8xRddEavjPY7gTNZbix9YVmzGhbtr",
  "key41": "4FEkdyJwMcw1F42SEZHbkfC23zwYiP2rkyuWWoCXKjCFxXhLRxt3EXkkp1s1K863FGFd5wVF7uoV5QnSeRHTiyXa",
  "key42": "7mdo1LvyLpHFRNd9QuGfnsSBDYwbDkP3cjKmHiWCxToVBLiZdnHXZV93J4ZSYXtMHBN73YJG7kSq7UBmAqcw29b",
  "key43": "3YaVqRKKVddK5SmAh1LHXWqeRQR3sJKGrMNVjquYWVTStCgz25j7kSDFQKZNDWMKJYt5Jz7enc2QU7KgUGS3wgLF",
  "key44": "5PGRGiuPa4ZZQ8Q2eyhmXv7w6hxwiogHLBZ8JufExXeRear9Tcbc3VurBMT92EAWkGGAv1UyC3KEhMTT38wRL2mN",
  "key45": "2tf91VpGQN3cDPJTxTDjdux2JrAJv9Sz7wxDmKs9bw4HkoQKuGAv2Ff9Y3YF1n6eDwK76vipe5LMYzaiKPL9mGUg",
  "key46": "4Y4KM65A2vAjLEuesuhmhGZsALmfPrY2qpp2veTpqwgfQLcfuu2xL3UpSmyJcQHsU6ecTBZKhVWqrZQ2XMBagqgc",
  "key47": "YpRSGFRpFUxwJ4mPeaBMBcUpuc6JKNoWAswQv6UQM599hYn5L4A6jarMS7geB67PWScK88fNcrXmPPmykSfTKYw",
  "key48": "2QJ6pyMDMMunDpC1cvCZiM6wke3QU6SS6A6XvyiLjw7m8V1BJ4SNye2szTpdteESWihzr4jeMXZsLjkvBMWPhEeB"
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
