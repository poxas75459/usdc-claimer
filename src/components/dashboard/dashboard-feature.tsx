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
    "fNoNYZE1AQJxU5vaq1Q9qbVjFtiDUAZPqQ1YQHE5m9oNFBatTrsCsCXKxkNcHNdogkF2sN68NEjHL9YpqDyYje5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rC4zYErWqTKrPiZEgi8SMGrfLE8M4zBDwPWtgN172E2ZRKbmu2rc1X6XQZmwBieVotDykjyAvHQYD4Witf3BgEu",
  "key1": "f7ZVQSW4EcGFuDAvJ1REC4WYh4r3jg29c3CpyWYmzND4DzW6Zs6Y2DrxMY9N6srDWRnGEoYcPKf9aUqiW7cusv4",
  "key2": "461pheRaeg85ZSJERi9cYqvokXFbg2r1xFSe7r7ioVChVCdF8yESWJNB33HQk4adgYV9PmzEWN6uUbwfaCLZWMzQ",
  "key3": "63C7DWGaYvMhVCAMVGqW9aQQfxpcdJh6EEiPoCFdTUyzxe5vVMDxUCTVThfzYcBYCGbuoqyagEjg7FB17PtbE57h",
  "key4": "4qQ5fgCHV2UgNZZpqjem5SNBv2f4uGmBL4qbSBsEHpnwAsxhNvFgzd5jnsp2UUAXSrEcZ9hcQZEGw6WhfXzf4AZM",
  "key5": "bZ4BQbRpZPKYfjmcBgovTY41pxyrodmb8NCTDMMx61GcKb9fNcsiS5CVixstnUJTrMLDVkbP93RBqNZ3FxNtWmW",
  "key6": "2YVDMr8V7UL6G5gNAZ5y5AVhnXriPY57uCMQF24DXnB2emxyFL8hpj1fexrKimV53X6g6MipfzmxF6wyEKKAf4K7",
  "key7": "3DFb7McTh2X4oeEbRj5g9WStjc8DKhnLHycsA492WWytJAJ6BpSC8x1FHhj9Cmih8q3LQWm5EerYM2TmjLpUgWMQ",
  "key8": "3priUWUhvig6oBCrNd4vsxsg2FMHdQW3zgvQmm6ArXfiKkjE5ZQHUBFLEMKC6gp8bH5ZEwK8zrRC4YvTVA6pJnXA",
  "key9": "3xZM7CebXGYL6Q6UqU9Md31PuBihF9do7iH4vfsDQJYEiXH67dJ8PWtDJeeZ1q2DjWJ5sYNzZFKfgEG37ghisXxB",
  "key10": "5XrdF8z89RT8yQMStk5DE1Wc8jX7A7oriktNR8xSLuSVf3ku9tcGb8ZTyjg9mi9bbENGriajRh54wx6mvYe9pD7n",
  "key11": "5MimJniNSoMiNFo8r6mc34MfuQ4TxoJMu1RraQxwxfp5YYfxyTxJgMAnL4Jqx9iwjDWWUXu7ESJ4Qe26QcBJAMYG",
  "key12": "47FAUNw3jjzM6vbF7rfDWFduZPrjh5w1FMnMQDVUBVoH5ZQrezAKxvkvrpKKB9Z6NmYN8o19vEcWJ1JZrG4eFbEN",
  "key13": "3FuPEraxKvcMUaFho8cafijrN81J2HXYVjdfv4WQAqFBH8UrDumTjMRxgfMJZTYS2fM9AjskkQLENo9av9eRy9Pt",
  "key14": "3h6JL1PuCS7sEqPUu9rNi5KWCLDKXjdGU5AQTf5K5HSe43bTmUBbesJnPRbukaUE2JTtVhXTX6ziJPo9X6d38J2M",
  "key15": "4ZFNZFFM875byPvBS6wcHBqmSq8CMAQy9G6XqZRBBmQcbqWdSwyPqNgKFFoAkEv7p4JvyPg3kP11YCnjrDDGsWL7",
  "key16": "o89QG37FMosBFL7DMBsX8anjHizbUbPZf7jV3ESDDG58NoxjUgA6BEQNV2hhKjbbbJ8sWmAJozrdG188VmH5XMN",
  "key17": "qnEhihbmuGjqcbA8asMww12ACzgZWBN1rXcuxj5oXLRKpq7gjkGcYQR8PLBxFH5piGYgRtCYjPn7Yh434tm2Mpr",
  "key18": "3wz193D4ksHMgNDzgQfKF6L18Uxb4thphbsgqBrZejw6ygApFwvyEwSy6xYJbtpYbkKR1dGpnY4p5uM5RTpyFWHT",
  "key19": "eVCMaL9kssRZ5LFi1r4thE7p9CBshkbaMFq5dnUJRhkGvYsnRAoasZQEFgpT7wPkrWGTdr1t5JhRWmrBwiRNTWQ",
  "key20": "EdToRdXGuVnFVpkwEzst6zG68awnnzJyDVLVs4HwVQbdEJnNfvkNLGc2FegS2BRRPGCQ4qnGqixJAJ7unRNk2Qh",
  "key21": "2APjPHyBygyociFTYxAcq8XfnCdxeKHk1aZTXeVvLR6Dfg6qKu4A29LFKkHnBaGrJ9M79W8X3StW6aJtxV75vJNb",
  "key22": "2Aj1BMiA6q2NcGLFC55BrP45pxxMGCVftkEf1UV79etsZitoLj76EwVM9uWwcFNFCbn9DAEWrsNQkUuQ1zHvRJDT",
  "key23": "3qaJTxeTUwezYe3oJhTR4NUcSE6bPLiAwbqb29LvBA4PhbDtahD3LM42ZVHTNUBXUZA1xn8uMDGecyoLBNMT5k4U",
  "key24": "YmLqb4BhAHZt41t3Fpx59PmT4vMqSU3EJePPHdC7f4v8ftDre6emU6Ft2YRJpKt3xWKyJaeFV7HqiniX1D6gCqx",
  "key25": "625o2uNFnqz7sDvrjUmiJfCqdUEUXpXNR6DPgzZZ6FCuJqobZkraEZ8M9MSX5aakPith9cvxKxcDZx3kC31s8oYF",
  "key26": "BMhLXpbXM6UbhgYLaShUB9ixQq1NQJS68ybxpho1Hbe4oyJinbREPXDwYwnpZngYhjXF5rEfdVdMMBAy1paoPi8",
  "key27": "31ZEixNh9gisuFGBmoLWELbWZm7hqXimGFTRdRRxMtke4AF6koCN3nNemXjfNVLqiuspz7yduhQ9CHZnH73nn4HS",
  "key28": "2GNcPnv5pWt4TgqdN1ZY3cSk6DTn4VKeYcC5vuKaUHEKXv8359ZLpicwMeEKZFPWFDwrRJhGgqf2cvvNDpqvEjp8",
  "key29": "5rLXFZ4tdY7iAhHG9YTQJxqzY9PYsk4tbd64w1QD6bPXERtQLYkHMPiqf6mw9nmudwnuZ3HWF3zJy8M6wSLUDSqM",
  "key30": "2GfnZFEnFz6YTu3ANpjHj9D3aqU7UZmEb1VJNwpufCz1DHMqQNbAC2RBPJqqtQUZMRwVz2d7QN6gLkyQeFb3ryVY",
  "key31": "rSsxL3RGnDeryorXyUUFeLkr9o6xyZoL2WzPwJtGxnnT21fzkYQDAvpb1Qpss5J8sdvK88R2grgGbVCR6oEM44U",
  "key32": "2HHyLUBrip4EGhF2ZakjKEJbkwNBUb5atLBYEsB9tPnh5WvUSH9Ui8Uyuk4sQbN36Y6TezGUyYiFE47fzDDuDcAk",
  "key33": "5ynDP2fSiVrXsnfKVgUXMtLDnqJD5H7kdAJWHej861w8Wgp9CUEngSFvD5drLaZ8t4PA2tJ7cY7rqbTsph2gPaWz"
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
