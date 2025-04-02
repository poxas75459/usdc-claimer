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
    "2F53R5j9UWiBV7nVLUM4vkU23TaVQgPkuBigdDRvoxqy5P4upLtYR6tiVWN51TDLzxX8HqaxhGphtyQe1cM41gH4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CMBewX75juf9srW1YTWmWY5KHB5j4dGGPDgwPxq6CJ5BdMrtMHDoZwuCoxSD2oauZzqShEVyFTDptC2KkRWvgyj",
  "key1": "2ikqzXL8vjVZiTCEcJtwvNfmp5FU4vtdoYQzyoHKvV21b8nS2osJpU2PDekyPkHNnGKnewmNQSwpaqMtjjphR2sb",
  "key2": "dgq2VzHdDnEybDa452AVfvC9tKevnbmEk5w9YrpYggVZqSyFYjojKjfbwumFqNZXyZk4FDucBZwFrBfdLo6mbc8",
  "key3": "4Fu8xBoPKjGsrrfZuBBvefPqR8R5gUSzxeJUXHf8DCrKDnx5Udw8uidTFDeWuEZXss7e6yszusNTzyqmTes6H7FD",
  "key4": "451JtB6G8nefZzyrhoAoih9Bu7Uq83qxie7rX4QXNzb16rMTmftp5xWVDYUSmTHpv5nD2fTPJuYe4kkMjBRPvwMd",
  "key5": "51h1cQo3RCnfzqgT7X5Yn4exgkELDF7XUz3wcnbsKE4xVgjDhs1214nvoYE3nZZupGCekGJebgmPp8hH4EHpLHuH",
  "key6": "3seWd9WNGjs7n4PahdoGhUJDHR7n9egyUsshx2Y9YbtqHLod9f3XTsbCvA2LQYJdGqqYJ6GGpuEunMa7Vt2cKKj4",
  "key7": "532Eu9TobCv5rPJmTnXsEjqkNrFmSysptSsiscD2Xu7atPMfDojvdma2ekh5RMmfAc4aYtTfWHWUSNpeFD6XWe9i",
  "key8": "3onjxXDyK9ANmvWzWfMFwBmozzAdAHxa3Dm6oPZpogWY8XaKLYuA9wwg6Z4MtyJUmsiTX7z1SGRQmuLC5KD2qmnf",
  "key9": "c3CRd37VYL6kvXt2v93TySk2oyDT2ujeB96dCMNK9fayfgC4QbpPZxipryMAjqtxYToHFBFazmJ9zAHeZ8oE8qy",
  "key10": "2FwQnHh49a4RoMXinpLmPJYD7xTcW3M3c6TDG3qiB2VZ5kiob6YS1NZiLqyfCJhVJoAEvakVx3gNpxxUSjVfqzq3",
  "key11": "2t6BzJR521KuXbRfzUwvd2Jt51sQizzQjfhrVgUo2G9Gz5FAXFfU6CkcXee5QWoZvYBDzRQ3Q7j7rarvriU5RoB9",
  "key12": "5ocUjrk3T3b8sdeU7hwm7b1Nph3vYP6fSSUi4ziw7s5vU8nqMezQnEKujsJtV4PLP9T9X5DoVCPyDTM9VarjHc89",
  "key13": "5RGe56pHQh27WND89bjnizxpxKhgtuC4XVjvaQdBKfwpR71JC4SSgYvg6gN8KemTnXKDFYqTo9dfZ6JaLhJg816m",
  "key14": "3wPKwmpoojLm4gtQGTbirnoHYbvGLvfYgjizCmQruz7wRTJhBjPZQ5tgJZ4otBSbt1uxjiQpyPSWCWGiUUnx9s6w",
  "key15": "4ikKLLHfgXaQUiGPWcSYjya9dJUj8oEM3K5eSJGY5izCVYfeAhAL8HtcURt3oxam5dzXRc8M51FkFe4Gkk1bQJym",
  "key16": "Xa4CMtUPzpyGNBVdLDFEW9eqpNgZBqYoYXfi84un9Hgv4amDyszFUN7vcBTszE3TRrmv3MrjpUcxZNngX144GKa",
  "key17": "4p9wjmohDUSdeMgU93TL1pGtQft4Y5hABV8dPuadW4bMqtYJL3QMUefxmmNmATdkCAuLcDFG6DDNaNuKgLAnb2DB",
  "key18": "2FU5ZAcpigBQTu6XJ3gPEHQ1jsHPjxtxyYdC3wRLcSPFdkCzmtE9jih4tM1NpX4RCXALhnsn9xe9VUh7AevDynoK",
  "key19": "2W9fVkju2aKFrfx35Jf686gMfeEdYkbgrUArQmS6K6J4aPqA3XcYPbFKHoy5JBfR3U8iMLfEqu4vbFk3zGKwDXDz",
  "key20": "5j22pNnJp7aA6d6R7tc7aYkjZd6Qmpf3KovUnSuH18YZzaB8RSaRkengNXFBeMvj7JCAcLgDeBEx1MYGZZPuAaHS",
  "key21": "2gZASYSoS17qNYLVsa3TFyYFUN7sMwR1BBzXavJibREo21vZbTYzrhogpMtXAEfxayBt1FUMRgCn2PEQxdthrrLp",
  "key22": "4sJVKDzUC2MGFLTEPirwxUbhtP1ELShxzEYjz64QUJWVEjnsfcsXdPzZHXeisbTtzHzHBb1Ho8YLecCGhhRJzrDN",
  "key23": "5Hy4MqamhbRTSP4Nyv9cKCBdcMrdEYVQAJ9QVqZuAfQE58GSX9rjsBhbVSZrs4zD9ikNAn3oAzwbfZHWXHZVccyT",
  "key24": "3sjnEqRFpGSPNBwsGkdmE7GYewSP8WjsfujZ96sWEimWZMA7NCHArqA9ejZMhpg1jCPL9KHFpzcuzX8QbezouZBW",
  "key25": "54eJAtYNyBtordpchyBDtZGxEvc27mKsLFpeoMscPmZubzQp1jpH8u8hGSHZPQXR18phDvcngmreQre6vqX8VbhL",
  "key26": "3AAMjErXEkZJsNYhabLYMU92GPmYWE1e5jccZNJbmBohAke9whEysSLUPsbcKR1NFYXwahdDGoWV4Tc6ZYcLdZxN",
  "key27": "EpMjjcgUHkxxaAQdraaUPk7MyS4FSxNkjS5x7DESgHQpEzQ4Hsra6ZKcvp3EXrz8L38cMiqDUkHfPjadVxKhwHj",
  "key28": "2tbSTfaDZKediV1KjaXfnUHE2VA2CoYNdmh8hNakg6mSDB3h89c2nvCVZoHEnFw5Nf56nu3QjaN11j5TYSPTaNMi",
  "key29": "2YR54FTRrdJZixF1XHMgALnmMco64coGPj47h8XvydQ8L6Nv6G7wmqbKQ5rb3gLsTGBtC8dwxTiK3BUnBWfjDsJw",
  "key30": "4z3a3LjZhLgn8HiRb2WR334QbdbnDSaekWSdhSqMxBDogdZB4CUgtFA1UVyzLEomtbCjMqxuxd9UYWd4WKJT29Df",
  "key31": "gR14m5NadiEDsfupXrWqwi45hf54wwRa5qQsnQwbGB9Dd9Yo1CXQvD7zLhZSi5P4UXDHLS6b6qbbBG9NMoNuVp8",
  "key32": "2QR1gH85yb3Qw8RafczVkstEMBTEy3LaLNV5iEz28gWf5RkHM9pXHgM192h5vSenAL1So1iE5Yjw1cSdjkB3Wb2f",
  "key33": "hVq3riPVxZymbmwLQybaA2WqagaPJFgFsFFNWvfkUkR4aoDZn1kinTjD8aw55KS4Yf5miMNd2bf9sbHQHMPmeZQ",
  "key34": "5r8KiVHViRYW5nbSUw9mmMdZFU1ZBHgj68C4sPrSS2o8onXYLFWf7mj5WUSKSniPgCNW2A7idcVuuWHLBFa9LPba",
  "key35": "gK3zhcFYnaWWqox7FHQvAM59kqF9T58Zr88c1MMuKfuJpjbdAAJK2dTYgmyjeUciVBymGdce7QZbE7aCwfdvJFL",
  "key36": "5jtgsZvGDe88Y6nAW4CCVtswc3PEnFdoSbtsJTreDUJzYcnTCEk4Tkkgj31DLTZe3sbqUfNh7gVWqx2mm4zWXonz",
  "key37": "3qBbu9HQWfnYYJwt6gxKTyDhoZ5hSNEKJeWQXopki3TV7mrcsSyD7LQLQ4SMY1v3cbx8sGWJsJzJ3yNDfWcZuPZW",
  "key38": "4CqpQVXFPdXZbxGgneSLQkzruDk8QGtQ72JwJYn4tsr2zgQPSyDsQY9FPGBFsZd5LDgcP2TjkFiUkCafBPFvs76K",
  "key39": "36SJ36qbk8ozBw1oQBd9co1V7ziWfsKXgz4Lwtk1HjD2JtFDNAwcpUV76Vq1kpp5kV5qYoafbYb3PDrhA6hW1Dja",
  "key40": "4U1qHydPsRdoGZasWzhz1YXzN6Xpparm1UtZjidNAUdvJe1zN6Tgf3ZSVYZNknbUj2aTSaeZLe9FwRyP7cpZAFjb",
  "key41": "oFjnyfBF9VctUffNzEnGk7FUEsPqBWTgdtciDPZZcQDkqFLKqfmr4W93S4h9xGspYGHiQwm4FzsajtKDDWbeS7p",
  "key42": "XabdeWNxAWnMKznLTmC2AuiXNVQZgWw148YGz6o6AsAyy28Xvo68aEdvnxihyEgRQEBHQFjrjYNJ4grTdX8hoGT",
  "key43": "2T2vZsoVvF9Lt4byVRPCQYt1hNMQPveDGqkm6eH7RG3htLq3JbfLeF2LcxnQphnRpTGnC3rbiXGCkKN1FJwULkc4",
  "key44": "5FWUb1rhMeRPMzbppPNB7WMFhW8BSioJgGKc7T6qJ1diyYqzayMYwrMaBuZKQBaeayWNkUCqoeedtkHq7jSiKnKA"
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
