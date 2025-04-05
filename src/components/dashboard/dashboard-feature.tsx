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
    "4DE6m3XN4wPCahZnE6xe4aUAjv1cDv7Er4SGAUgSURGxkCMg9et86oGWakTimfRmcxG27zwFbjdzitXfQwm3VbFs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zjUZcfdnKRiiCaemgsV9cwnm3WpM19xUXaEwFep9a14YeKMNZTveP7ew1ZKFK6oHXjgtQywTLdJmWjioFBU5dMV",
  "key1": "Utk67NASAN19DTde5wFVrtmtRw249T4orZHchHDpdgaDrEVg5bHbUjXJGzeSKsQ4LJSmWDs7VaaUgx1UMQK4nNt",
  "key2": "4WfTCbUuFXUus479ppntCjHafgUfXbYi6qt6D8FB1QFADar2uAdrQWTJDCJgPkSmurhWLGhQrYsMjmdUPxRRrgaD",
  "key3": "2rBorXxjZgdYXv9rGjXLrxREjFD2EP2APPW67Ehdn5eFr19gs5hjmB5QvhcNuPd5inLXf6BPqivdBWJV17QhfG7",
  "key4": "2nKZJVispMQwwYsqkbHq8R5gghjKWBsWW6qtsK4h3X3RbQY68jqgZT2yhFqNRde7AaAKSMPZvxcZH2vJHJUDQo9u",
  "key5": "yCPPtD3ngXY9fb1XL9NkCrHbjHJ3pLKRjvt9wZDU4a9jW1FMw47LsZT2YGBEhv8oR6THU1VhPGtVHRVxef7aP1L",
  "key6": "63TzX6mZH96pVYfGgDYGrmH5y7mCHG7NGdY2uWWigwDRihmpguuoMxZ4cJAwmuYKobT7eb4YY8nzrzQnSFXaRJ2R",
  "key7": "4W9faL6joRM2tsk9pmbjqzHZHubWigKurKaCUUdMMhschH3atpX3seC7rwcYPHcgK28ppRB5RwgXed4CwfiTuCdb",
  "key8": "2TacPCjYLx2QNf2G6zjPtw5ce5XmPmtTVfgeDBBWTZEeVZwSvWv4bHU3yjqz51AjYn3F1wm58RhEdJrvju5Heoff",
  "key9": "49WA3iAA25M1HHEJe5joz4ZPQ8PrUNxGe7nJFfATShT6gFp4yjwEioq19DhCbu2VH3wY1gSoAKT1eD1S19gesXv9",
  "key10": "QrcXJj8CRGZfqFyTc2EK7dbgAycP45wvYiLG2KH1pAYjZnnTx5ThC71F2M5Un9bvK6bSNBEZaX11hANNSaDFUvW",
  "key11": "4XXBZxtSSiBXLZ39yJHErDdn3oTLVSTBj9HyKo795MFJkJJCNKmXV5ARwqhFNkMmvndHgPwDySNRd5PRayfL4cNq",
  "key12": "2gVncvEPfUhse5v5ZHJesDfSopSHLHz7HKEnmpgtETsCF5W2yPhnRKJttWcCLjhphAufdXDJueFZqJ9CE23gmLxL",
  "key13": "21A1TdpKuhJa5GesnuSoFE799kM1mud6PUnrpWYLm2TnG53r6LWZmGdoA2qbhbfjbydEaw71UsDsikoEf1vZivQF",
  "key14": "4H5raHShAvh3B9iQgM77LiHqZzHbGKH8F3CXHMo3kMBf99oX82fE78qLKhASrQti2jsRgSY3g6EWwoWG1A4rkpCB",
  "key15": "5E91NxuBHJijzkHs3FmGTDS9tfi9EEvcvGBE7gHYHo4R3QYbtrhJ8UrX6GCU8ESJ7rWK6fC3EtWQZDLxjfbSgBu8",
  "key16": "2647M7wck8UM7SzCnwT3xniusa5nCM2zRqRfPoTSyzVuWsanGiuNQbHn7fifgPAvZTzBo5CjBcKrQEh2f8ftzidA",
  "key17": "wrXvRvn1xEY2ofEqoV9LcN8CpVWu5tsiiGMpD7KnqbdwpYNsLc48RXdGNRc9xU8d4qdC9UnZnnHi5W9Br1yP7Jq",
  "key18": "jhk5tw7p5MabfTDkP2XanMW7AxumepSiWHq7Ha4dHQ3TZ2zPCHzbkxDxYAdUpn7zK6YLs1T6e7i4LR4xx29PkbL",
  "key19": "3fMkQj3foGMNbiwW9KZ8t8fYsAYJXhoaKddh9h4pwa1udQEd4QP21eHJB1sRUSkHMjJb2djbAVyT14xs4Ych6vft",
  "key20": "fKWBtjKctqpy1Auf3UKmeCnHwV9TjRHW7Efmt4dimbsYLV365HqnoXKqVjV6T9JNj3fz9ehTtrkdETxjMaNLMEA",
  "key21": "5so6pQtcbeyu4vCqjXHxhdpv5AmUvF77nE61gtxu2JxVUkE6Vf9ULdeMCCLns5bLnjeBA9Tsa7H6cGqrZUWMLNLA",
  "key22": "HxDKaBmGkEfAYy5pagCUwy6Rhr216Bz34H4aBLfGUJHH6D6MvouJoPCwafEnwF5vZFq56gvw7nAM8QyaBNiS3Ug",
  "key23": "4cpe3siZyLqZZSY4yYfvKcHZZg4XvicxqRqNoN7P278CURW2AcRaXpKSEjRJGkWFvQ84PZ6BJRqFvNs2grUuQnYQ",
  "key24": "5EwBzqD6swpGYWcoybQya4XK3g9JrFVCkgH9FcKJTt9L2LdRH5odFHakPPHw7EvVD1mC59R6Tw7ZsKAukJU5nxSH",
  "key25": "4J946VVFxEHZU6PtMWVMKVfkUBxo4ZR3mU8UQAVWtYey7oGkHsKfjNMTGc42mLgDj3EY6npMayJrkZ9vz9D2WPb9",
  "key26": "2qT8szNYgLkkC39YqShmVu49Am8wSMxm1Pp2BJjvBSBcpXV1BwBHpd2VfrAXdk6wD61cPDWnE4kmMHzfpaVMpd7m",
  "key27": "4Gws3wAim7JPaF8QYvDt9v6y9Q3sjBAnfVmRfzeMuQiRp6n2S4xHWpke1p255QLKRAnaVVePR9QKTC9HuvEGWR2F",
  "key28": "4m7Ns6kRKCPStabVfLdn6AHWLZKWWVpC98jLkhn8ihupT45EvwTYjUt5EX5KnD79L2hjMBNiaQ4weby6zdNiwLtU",
  "key29": "2nWzrCpsduscifNz28JfW82gGC6MZvYG2Yhamjr2Gn7E3FW5V1x8LzYn2MJUGBE49hnRwGKvLVaGQwg8vBuLqEbD",
  "key30": "3neK5LBuw9ZAJuvLvxWZk4Tu4PLaQtbRukmtKQvBedsV9toj41hLtpNyM6hbXr6SNZw5d3FewiqJF2TAi3c1Km17",
  "key31": "3MR9wazN9e5s52UqdeiVApZzE4KV9bShU1CK1ahRkzcq2JHnyjnbxM7ezStFzbCzsuhhuEb1cqK13xvFTKGoYyUi",
  "key32": "4pY7snsB2RnhjpquQmhkCk2cQhh68zNgdTCMp9mdUfYSk4vSCw6L1HvXGPyxGBTKHAYEBeD8jtSojXFRtA1PwNuZ",
  "key33": "3jMa3ya95hASawgbFfbzkoMM4LyqfDLcA77MsdFYBj3q8CeQgvwPUjV2nrHFpstUaTqgJ6JQUJQ8VEekSWiH16gL",
  "key34": "5q34xKsrcCsQSwqbquy3zJymoUVP6WKhmDLqUSF1evyZmUgBFWRV2v7nQn7SyqVeFA5p5Wkv39jtwbUQ4e3jLq3r",
  "key35": "9u65gkJkbuC5anrAuCeJiRCoKmuXLvUqafWaTQZheogkWQzQeobEbZpkSAwm2CYxLsvhbFMBd4mcQaoVBbViybJ",
  "key36": "5kYRhLU5tmmQFwq8ekphhce2fy5iK77SYSMxjfi9AbR7LrdfVNw9r72PQ7VrEjQHEuK1bn1Vt9isJfbUSuCycjqX",
  "key37": "31r3nPYTz9hL5QdEmX2Yvcsq6uvUrNxXdXZtDr5PNyfEr5ws9kzj8gq5WYj57EGRNunryzGxm5uP1WK89tLjDfen",
  "key38": "3xQpULKyo1cfNTLD6gdHeD8H5kUGH9owo3tJ759CbVXckRj66Seo454KDMFoYqVft28oHAbfxdXv91dNTneHjFXx",
  "key39": "33AXuYmu7HAsmceTFda333us4tvB4iGqHo7pg2hTDFc4x3of6xVxYugKA7jxDourN5ZfHWDkyRLJYjYh1Y1pk8Jb",
  "key40": "ziwYAhMcySiCL66tYf66pxCvaecuyE6E1uYLCHBc9QXnaRRS4A5unEz1L7BpxDY5JXx9yAjJ9gCcCcYT9ZGvWks",
  "key41": "4oWL7TBYDn4mMMgNp3FhzMnqKZTwyFvvSAvSqJdpGP7QedHxd1MxPyygnzY33sFVpYZQX9kupDtcjqLfD9W7zhfx",
  "key42": "3j13anGpEMWqXzJCbwGit3h1StnCkg18ZA22RHmUtyq6CWegAbT9WzrzyQhWpTPGySQEDLGZnKV3gKoqhkpJd1yC",
  "key43": "RjdCZVB8ikaVzTwVpR9CW1DXCwkvFWHaKsMaeeorR4phoTKg6vYUfDLzmtbk4dRhm6VPpD1HfR9hoctj7yDnaCB",
  "key44": "5XyG7ZgjAkfhExQbsB3VC4Hd4qLKRzsXLkpDyGecSC4nfkkZTRvnYbyzPNDjsJNXErAsk2kzGWfLMXEw5Wf9NrxU",
  "key45": "5Eu5UYEvhcVSzNJznyt7AizGzVWQso1K5uEy5JWmmpBK2m9BjrWGxEiH1cyJ6cweoxs6o2GsccKA8tf5dtevWUV3",
  "key46": "3gUKYgVJhaUpEiEodjKzL3jNLEWdSb4SnqVQRaW458d87JaUyHG2vEz1r1v3xochB14HBxBu4BaQTvC5UanwQ5AL",
  "key47": "5aZEN4PofkabTMqo3RPK7UbrpTQxBD7L52gr6jzcHKbzeiwq7AZ12tWHkpgCo93FSX6Tjd3MkkwDCDRSRHW6HQtD",
  "key48": "4sitLxXyaWXvNMQQsVCESkhCSXfNCrZLSKhzQMAwtDqcb5hLtcS8xtLroZxPzZBavy1bCH1kdozaGcMgxLgNMJke",
  "key49": "96FHS3He7Y3xNaNNXYgNQbTvV1UieWFhpVmjmM9EC8GZivZZogNUru2Y4n81XW1eGjuJjtodvBnAoFBn72ni2tu"
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
