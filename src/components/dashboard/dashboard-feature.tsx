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
    "5WGkBUXUBTUj95iy216LiMt5zTjPgLjrefo6AcoBgabQidiFNv7Mtuj5PY15HCa4bDDtbceKtiYjRY92DfT3HM97"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bS42XC4vQnECUGASRJiCqbDXGLsans3a4gXQbryuJimTP5e2DmrUe2QQ8RcMf6cRgtN397UYfh2qy1mQiGqb7Pu",
  "key1": "7DnSgY7tBmaWouUQcAqQ3Grzd6QMGLBtS1YuGkCoV3umKWAUUMJxrDeJHaBytg1374bqwjQWTmZKdSTFRb478zF",
  "key2": "37swaj6PFnQzN1x4Njac2VpbsKUaq8pH1qTUca1ZtFbR2tap51pubv7JvCgWrUdczZCk6e5eqVeVzUjFrEWtbWxV",
  "key3": "5Hpqi3uAEf6aJgzRZYy256QFoFqQiG9uRax2LoZ9b3KPSe8DrDj7euNh9xg37te328Twb7nCwAFGUmswE6uTtfJz",
  "key4": "NCrfg7cMsJbZR4gYPfUyQB1tvt7hCjoRLr9kDFAvMc7VF6zYyqAaZzrTg4eLgyyU1LrjwjBN5zoHHtesWk4MSiF",
  "key5": "4y1Yw61h8nejWKc8eb2JF3FvSoqUNLXqknfUs8BfaFdVDmYCsuwSqWGfnpoAue4EyhqtZgzvPrkVDSnSWRjjgJXX",
  "key6": "3kNvoTmKD9ZcskBkHt8sztCbgZzUbBV3AHochuWfo33J2Z1v6u2zLufqNqy37qaynnxkpyvFgjh1wj2E57BfGGAA",
  "key7": "3J67pEsYYwLU3bJjHZmCHdJ9gW955kaz4P5dCNxRQEtKJv5Q8ajYLGuWr7d1WcA5EPfSWd4QWg7Yzc1iYs5ed2YE",
  "key8": "5sq5tXY6PAHyP7hG1qNGkkQVKSk5vSxv1kKKmY1ZuwuVmG191PJ8zFKozorH4fGHhXUHpG1oHorqpZtpyqBVThJP",
  "key9": "iHt7M5VigQjyAu175ERs1SrfGPbzq8YpdxWgCE8z1E4cUHKGWx73R2weNNSne5VPqMdx597QUNTcWxYKPmFSTZV",
  "key10": "3HPTAdXBQ6bUW5536FGDMzGiJw5KPdHarK8BJPvuW3LdtrFy7LNinGXmg5a1wvJvyoBbTXQbb6npVfeKbhejbkFB",
  "key11": "3Fg7cFkNV2c3LXqk4DexjkhoYyrCqwYHJHovRap3NvcBgcQwLtR3F6Tx4bJRDYSzF97bNJCaCaNEdAMVx5rKUEFm",
  "key12": "4tdySNhktWBNcgcj9Fx7aKjYW3MTgRKtKiEMj1dkBbP9kPpguXuJLhhoh47G8Gz83efcaxyVQwpgS5YFgWhudFB7",
  "key13": "3CKjUr5dwdE4AJbvg3tSqR8YXzNqBibWkJxkhzUHpjNkBZYLniEfXFJzTD4uAzndpzu1858ryghkFRy9TMv7HA9m",
  "key14": "5krnxXAAZercdjSEtxdAsNbXeaTsQPzaXCN3BWKtstUeezaAjTqcS5VwFkVJj1KzhsUnRgZPTveKNyKQf6rFi5c4",
  "key15": "4XdYwA9BE9irQaS9GZ1ptT6gF44DMtf4cJdU7Mh8XqkeVj7FcRQwCJkossmwn5oEarXySUHW6waUQ5dMimGikiAR",
  "key16": "5WuJX7MZGLhjzd68ZnU19hdjuWdw5r6q6S7EzG8AKKwiFFDaD5KHpe8sfv61wrGg9P8djG8C151ymbBgKX62jSNQ",
  "key17": "55DCt3b3XH1WiKcHxG1JqGh9BqeG1SmpZPtPsrEjyV3WSbEf93LSPRHnh14z9CVPEDkhBxTKtfjsHGxdF6a16Z9K",
  "key18": "5FFhwo6ProTNTzbCu4pUm1jGHpzKYqzCVCQt6i84z62QQbZLXs2F8CxSZELBnXQcix2dcppkVfzna1XbQnKDN8G1",
  "key19": "3qrr4hobEqNJ26Bx6zGdLzQLeif4gRRusyZSKoWqAqVXVEj9AncWYTgMTnX4JgyN3gMAXuG35EAe4Nwiyskooe7A",
  "key20": "5taYQMwNbM3WqBuadEGQsjPjcoNvA1Lb22kp8Fjr98DQzAbSa4oE9mKmhWuCVoaCBSC7xQWs2wM5fBfGb6rUnTSL",
  "key21": "GMUNC4GzU237T8fxCWJNj8eYEdd8urA1CvYacvbNuCdEx6wecoKS9ZNKhyJyA8Fx6DxWSHSq65B2eHATgWnRYdt",
  "key22": "MnwX1SUsEeB8vKsfLbwyPABqU5iBjoPBA6m2pf1VKyivoxG5K6nBMxbBfYpWHwwHj7EpUstK9mU55WcAXEKX4VT",
  "key23": "4cTAodDubHX5hUsBFHUwrLAt8Ct1ND4yfKwKxrUsAt6UTGvxVJET5PmeSJrU1Cxt934pVccDJTtjUu7J7CrbHDBS",
  "key24": "BXkoFsorTwP4aH3TW35BpeKqFARztHXxgLo9mAMsFjpKyRwKLwFHPWbeZCjV9sNexXBbbi3JGrzqJe5GySJPKbd",
  "key25": "4ceDf51dpmoYJHHid54e3bBfq37CM8r6GXjyRnJRoBPe8J5fof7mGxnYKtSTtp2avP3QP7TLf2Svx9qQ2LpYvgok",
  "key26": "5dZVxYcMnuoCVKLdCrBXScsJLME1Y7xopp24xdhDuAKD5gFQN72KQE9nZcS2CyS9RAJqHjmiSpCv2zhD8b6ogcqQ",
  "key27": "L8GiEP19zqnbnvec6zEN1SBtkYNQUuqHm19bH61AiisH3HtrmL6Zs2DHVzfsihvMR6psrN5i7s4fMxtDFCvJD7z",
  "key28": "3xUnESbepA8P11bwime8tPs7nAhu91AV38BuUJxcjYDhAqrYokdCmrxRWQ7rPQ5QiaSrYpQ1itnSbFDuVMMxxJL4",
  "key29": "2XHpr6wJFq5KC9kVnjCZeBQgrPA5Bkv4WQHH7Ct7v1JNgkzeUXKvS6yrE9rET7SwwSuSL46LQ7qH14AFgLaiSN5q",
  "key30": "5vaXuMSBUXQwid14kKHJrPaXCEMVxHrf9ZS4XbRk8922WHCWJFzh63bfNGV4SKzsDuBkD45iWwUWXKxXThv8DjN5",
  "key31": "44UkfcbT7FvKqhi9CCDyCcCJEX71nbuDjnAYcNwsjV4BoYNoNxw2m3ogG2xiHgbTTZdwgf7JNajp7cQm8DAPxbxN",
  "key32": "2JrjqgBGhboR18AFJsj4HM5aDZvL8MXZ5GUChpmhwJoaGaVMcdKiE8QYvi7egVUH8UdTTnNBYdkvV2uc6QQhaC5d",
  "key33": "vh8x8jqSCN4oX69wPrAiqpwEQ1jDsYZcdzraz1TAnkbszhYukSbZCMnEQz5WuPMZFkYFuwFrtpuREWYeuwPzSrv",
  "key34": "DZWjkKCqU6iEe47MLC9DpAN4Fxhk6PNkxxKYFhkP6VJvnzDw7EsuVyJhAPR9YqDpwupXxEVJKUQHwj84xknTbUL",
  "key35": "5rbqtAsfFrRr8NYLDkuucvkQ8RHbLNXL7JfXQhovw2M1oMxjdoKUE3Q9vwcZSs1NmaggMRchE4QUxVqCvVwNMunR",
  "key36": "4kTfZeyqb8QwN92xmwRgxX9AxDKG3axMMMxsKihRyjxqQyJLb7AXh4BtLhpDPp5PP5pf7Q8v7dQwURwcwu3iU6gx",
  "key37": "35K2sinSpAPTov79ys9Jqh6Xyn6MKoXzvx3pB9pixwrBG6Xhcw3cHqbW3xRL5fVpS75meMH3fU98ZVWRHQaNF4q8",
  "key38": "38XNtPD8sx1pfuRaLEVSwptjRAyVyafZhjpLEuN4msaiebfMpj8S7yi2uQEM8SWjjgxKAckNirE36MnCZwa7icvR",
  "key39": "3xERAJNja8vCTKi85JwHMYgihebJWtGKssZNxuNbBcsDvdjshfaus9cFuJqYuxt7DsWHHJ2TuT6xjiHJGCbFwTYS"
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
