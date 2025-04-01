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
    "3eGCHdqeGaUV6vigsCEdiooLHizXgwqQn7gMM5Z3q7GvMtfYmtzJmPEmYQSiSPNDjBsuzn3z6PYpuXo4WpsF9JhQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mYTrLMwPDE8xBfgZKPPepaUvefaj6rdqTsgF29vKTkTGadNRtEYsP62oZwBD1UyYCEhciAgu7ZtJnKjtFX2hiTr",
  "key1": "3fKqCfmjv4hzkJsMiBdETuGakpR5ERgk3Ywv1755oJpjJspg8Wb7ZCDC2BbWL1Z2VcfoxxdMabqkgRkdBnkfbnsp",
  "key2": "4EprW7kTufLek2KxzcKaWMdRxGkKiuiWK4gZto3QQ9MBYvuuEuh8smuMTVFsFuVK4krKJD8zTvPvSdDxcpjvaq8c",
  "key3": "5GYbTkgaAJPkyD2syZE8U6goeEhpfZwZfchAbfBaCQ21cL9tFtouEwByTZA5WTgC9hYzQtoCca4rRJouDsxmGgzD",
  "key4": "4bbMbjRMBhWK1aXRq8V4WejmUQe5U1roYQp7brisgp2K1FKb2wWDmm9Luanyo28QwNXFE44bBdXkjYAszaGNZXxR",
  "key5": "4jzbxzf8JY79k8zHa7E1CFmezi5zvSoRkwKHLYxT9qT7ViCiGEP4ACJvaV4FF6iNxJ4A3ZVvsHErkrWDz5Fkq2et",
  "key6": "1hN3u8k7TgKtiFMR59GHZVBWvZHGDCMZuZy31W7yJjvHSVokx6Kv4xxnubACmV422NnWA58jyiUDN1NgLHkMtzG",
  "key7": "5X4naMKbzTkZtbahnYCXDWkSNRHKvLCDz7xpnNX76CeJThFKefRcECeKQ9D66Ucq6zrwLdoCDK4ryFKRp1EMSpW8",
  "key8": "32Gg5iNJtDdSagHRDVDZdy1ptAsrn5oZZokoWYUypFq29DAf7yjxYtgjoBykd9iTukTtyC5gxMYy975UAUXBDRjb",
  "key9": "2DA2gtH69K4qTCjzvjfNLhg29KALcQBuYNdEmG92rL5Usx1Po1oVHvv58L7NtomuEeHhqbKbTmMjzymj7rkBRZ19",
  "key10": "5tECuj9VKNMkniTRVmcf9jNzrEvgoKpMU5D9n5Vvj2r5we2CVadcpSPz1vCQKNY5xCXmDmBoJuN3vN2hJ3kfGWd4",
  "key11": "37VtvenCJM4RD6EQexXSvuGyo7uPNaCePk8J1kn3Kinv92VvzzwZLJ31Bk4CWngmaMBasmmNMwqetmkT57xZCWg3",
  "key12": "5KvUCkJhHWaHtaxSE8mA2TvKHXbi96tTHaPEWH8MEjrjcacdRCrZeRzkyGpusuLUmmJy93sqRJ2hLDh3wDwt5nac",
  "key13": "2xDmc4qc5pv7x6paYShBc9PNUQjLYB3bNoZwF4dwZPf5Ua4Va7BT5Azz7ALjW5r3eEA5ykGRk7iCg7ECjkJpNxFq",
  "key14": "hm52soPAhvt7gRc4ydRFJ714adp5yhBds7EcJe7HEu5zwHYihKTN6929YcPQF3UKFryPZVi9LgBDQXzsErnLbgJ",
  "key15": "Wn5Ud65WUD4G9zMPJuzK4CoTnEXg1AqtXycRQtrHMS3LxLps7wQAHF1grgkEdBMqwG87KC3GPstqSgJjPgEcMKr",
  "key16": "dKAMnus22qf9Mft7bBBudQgBMpjjW2N6222taNMihKVWZRBHLNEPqZ8Z7cMPowjx5s1GKn8ixZAVjxXJSm288d3",
  "key17": "4W2Sn2XnBwKAJWdFLfKKZ1RT3pAxaAnfg6tZHBYVtUYZcL9aPdSvY4hCxBoJimLAfwqhS8i2VCp9BWCeTrTvQiRa",
  "key18": "inckuQkHVsJXmdTyDEkujeurYAwtvy2oFqNyEc6JMaUusukasxCsNZwD4jLgii1M14AYbQkZRaqTZUQpj5prd3P",
  "key19": "21RJvqaQasTSbRqePCzzpHSbnsh4BV6Gvyzk8MPqJLcTpa72Jbhx7JJDX7z3HdPCwbT4gArbsxSwCKipowYA3tJM",
  "key20": "4qdkDMd2XB8FdDGWbRvhUwohFvUXN1387JsbRrQ38wynUNht5wVWecs6tS7XRnBLwuMKBkkx1cR3SJziCX1q3BaW",
  "key21": "42z4wb4wbKMqXLpYWZA9CSQQzvmx3uKew9smdgcucz3KScvsLyQRWeYuTxvuEVDBMTZb2bQEREiJHxD1wL3krQ7P",
  "key22": "226Q4fVzgYHsN8K3TdgduWpXfn2AkcCYEFAy6MbnAwx5FK16dgwVAL3ssVWLa5M5HNqGcNQWJjnFQGiD1cRpPDBy",
  "key23": "62eyRMmzbhvqwzF8sgmhkSLsEJeg15Bw8GVaszRiD8YRPExrQF38UP9yt34fDPju4sAxibQGAdDYU9tYy2qsbCpw",
  "key24": "34t8n3YAyQC2vAAHhs8t1Wyvo7X1c3xbghvsFKGQzFKt95FZkWQAgyWx7LpsMaTGbMcHxoRGXnAK6j9VUVqzf3vA",
  "key25": "4Rdbv6ApRyogQ41b8jb5zEndktMFYK1TktJHVU1DNr8X1hMB5PC79UASkJ2JdsketRSCY91URLwA6zNYuREc3ttB",
  "key26": "5D31QCL5o6oHREQCjn9BBkunNCrK99246o6LwPBPpm95YXhSogA5aY5vkD8mUXSMHkZZQJHWVv33SHLy4XA2FxdE",
  "key27": "5yMvtGcmUd1ZT7P1L7AREgRwr1kijLgfYQoEvHN6zq4bPkfwf9MygUVR1KQJAG4ahMUDsWPCgGr6G6NcrpoxD4rW",
  "key28": "3L8y4Q7C9LThMW5PDnsAtsDNvpWbcAyvW6D7kJubfcj95WDxwjKXjw8PVUstLoWL9PDARPcgoHETqxh4STLjUpTj",
  "key29": "32hUsuChzGF9LLBnzczxMSywRP9TjGtf1cWX9R3vpz6kAuKqCCnFHnDfSJf4AsJsBhMQapqibbBNdjdJHCSKF9N3",
  "key30": "3jmV1eL1NWt82o2XvZnFC45fWbvT5pJ6xLrKyE6ZC1S7TeF3mxaMmxoV5hN972E1EVwGaDmcH6PtCoCVJhsdrmyP",
  "key31": "7TYJpowJnfgJD29Z6D6X23zMGsSdRYsQmEbTx38tiHimgQnugq3UvQCZXa1JQMrJFbbUgLy3qPvisWzU8cBLfJD",
  "key32": "5tGM67JAx5t6gR3BemtMuzRZ8A57GtuWn6hszQJAwFadSF2sr9X2PArt4cBjd1yA2ahqEobrqU7heZRJPUAQeHkh",
  "key33": "47URCJ6vgTEtWzyY7aL5Cer6njcckvuM3wnWr2TPfbHs46iokGzbmjKy3jmrGAx4d26PrvgffJgqwVkV79bxxiXU",
  "key34": "27FBuYWsuFb2voK5gX6wXa4qH8xHbEZeoWHjp9v9ekWaQCBJa6pgwYsPjdVF2XMu7dn6zGUMWE1ZoPDSkoP2mTa5",
  "key35": "5CrX3oVhdFokWLXFKgar6kcixorRMnFn1yKDr8FYNgTkizYsGYHFNNVwKPzsxo6XxEzmydTNEahsHJsEedJRQai",
  "key36": "5LokyrEXfjkZikpQgsqMw2Dqoa1UDo2rkBCJKky3fqUCg1x1LuitzmgzHkCgQ9aL5y2g35jSN72CsMsmgj9xPiQ3",
  "key37": "5Y1TbbBowwfr1eWbtKHTnbUaCtikQNrx7423RXSTWTKajXNje2SWFT5Z6BAWLPz55natY3CpGznw6a5oVWAixKLq",
  "key38": "2a4254YNanwfFRT1Bbinvho65KJYapP4kgpThxTLcrVVH2h9r27UTU6XKh629mAQUGcTsgnVH43rUPnKe4w3EgEC",
  "key39": "4skENA3Q8PikLhQrwx78FBnTeABfaNcsUE7aZ1u2qSojgpdGKJ1zB4Ud7DBCeLtQfvvzardpSD3oEGskYc4AqqW4",
  "key40": "2UwaW5iWBcTfvhsNSTxWoeRaxRoywsrknMtQqngbPvy8mExNVyfCJzzduThUEFufiAUjU7Cvv7sSjhXsedWmZ9D2",
  "key41": "Q6bGmEc7b56sTfYBtft8h4V2NH6jtdZumJuFVftwLjGSmFVXZzNcGXdBqcp7ubQwjBTqc2G6D23op5JkP6uPs4R",
  "key42": "28F8NcjcaN92WKMMy2E6biqSch8w1v3hpS9U9RC8hg3DAQ91NtNKdbVi5enZrzd693o1v9yBBuNrSFLAnnR5RcPE",
  "key43": "3K3XpQjsc3wxHABb5cnY4Qhjkcs5Zm3E8db1ziupWaZvimciTnkh9ATzX8hkp6v5mjaqaSK78hQN3t7Rr5YXU8EA",
  "key44": "5PkLHNxYgn1moHM7ykBQvszLjip8JpaSAm8cvYdXgbD2qz8vCmhYWjnuQhTPV1TsT3CScymEDVKwhKJNGfT2FvhS",
  "key45": "24aL9YCeUQVs14pEDeVqmBGXmnjsMA8FqRS4JaWUkC4L2o5J2y6tQek4TVdGUKLjk3BMX7paCyfT4sNeqsgBPWCP",
  "key46": "5HiVKvWufaoZh8Jt5nR4oy9VA2Wfy88A5SD6rQKbYyiCVXJN2zj88cAicwRdr35wnwai8xxKaXRckVRRck3Rjxfu",
  "key47": "4nUWBy4NCR4CjRSXMsmR5B9XVPW2HoUa9YJN85PL1PP5J727MkrU7NjdxBNyMUTShUSPiGDQ3VSeuA4LFwoTW6P1"
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
