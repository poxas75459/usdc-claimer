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
    "2pPBaRiq9npqJzFBkgf1PT9sDmYGLKeh9C7ZMGHCUPqkgjzg8tzq9JkNhNR8MqUfMAB3nJvb8cMzTT6JB1SvfKuR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "279ydDF4CMiYwgDs9Rg4Sa7MfrCJvDjfpNkFRUBb1rmv26P9TN4UpUm8Ljt5vM3ScxvjxC2gKd3gCJkBL5Kuf5zN",
  "key1": "5v8WAH2rhxWMFJnUf4DqMbfrtWjehMPoUKhKpGhDwLswNnKW35UJLFjGHwduRCmC5U5v5BiAhqFBbsKnaWHx5Ftx",
  "key2": "3KYdABDNgUbDH2X741pw2UrfnbFoo8cSUCiHE3SE79nBvTrqD1t2urRsb5s2ADg4Db6aFcnTWTqY7RH4VxiEwpP4",
  "key3": "uWy7tDxCdVup6Lr9ki75ZSEeE9EVhM99utz8t6Xguw3ewmmUQFh9t2GP2e8Utz56Jn8p91iFr4MGFcGNYqSekJZ",
  "key4": "5pbGUwoXwspK4astXzW9kzZkMKvEcEhvkofPzr2XUmza3mXBk3meT1hLfN1Jqiu8L83KMVcsyopEEw6zWscGXs81",
  "key5": "pf3eshWXKRL4m9bxm65iF44t8nvRfAjkf5xqYHjM9nkAfvrCinkVPaJ4DFaXzrcSW73hDB4vx5g6tKxy38KKDGp",
  "key6": "2m8q69oqYHvgbnZjDLn2s1jNnYHvEzh3XGBo1xhQzsa7Az23gkXFvV94CRsbay9gk1L8AbaxAFReAcFvEsVPdEQA",
  "key7": "4CmydfzJYj1KwpFa7te1LCcvfGKisMSVhyS3RVRHLiqmussydHpR9TGFRw8aAZhF5SJkTYMAFvJzuqSNNAhBcVDe",
  "key8": "2v4m7iRKB6VZFfQSQi3ujaW3EqKvVE2CDYdYVaFwB8MhvrtfvisMtKc18EMpywD7f6jk4e22tPn7ZjdPXtqWTboZ",
  "key9": "5DB8wqHRiQgBSCp3fH9iZyxc2VAKvahZ3urvCi4EuMfQzy2H8UmqbEEeq4rBTFrfb31wUANMKATwYCUJPCX7MKdS",
  "key10": "5dZRaAn1ewNcrurrzBUhxauUZ33XN6cbCR3WqxU5chB1X5ivQoCF8NVEyMC4FZSCAoaK4xDsTEz5wD6iDF1Kafcu",
  "key11": "2NGuxREgDeJmWQYjKnr2C5ZdnTGLvrpgVxC2k2HN2Nt8AwWZNwAHzLMyRYVkcDp4Se2Da2g7pEPqpuosR14JgHFD",
  "key12": "2RDp4smrJDkwDskDNcLAyfoPrVmuJMCWzqPSn3nmbGBYShyPFzcz4QX7sKPDirRmu5pVkhojNoTZw6ULyNJM598a",
  "key13": "2vwHrnkCssvdpYLkdR6D6HbU1ioyJvUgTQN8okqXr4aRH7BmEhe2RWnRnERuuN3cR5NV5tfgLpTnguw3Jyz7Ze9e",
  "key14": "ofwMj5AFTBRz8xQQRSReM1uaAigvAheu5LWbD9h1VBN62C5ig4Ddx5EcckQ2DvC3XgNUHcPcwREN4qEYn8JF9LL",
  "key15": "46um2RFbJQiiDMv1j7qicXR8EQnx1QxtiEwv8tvJC1MHb6Pb4uYEjtuvstqWE91HATxhdgbyvwYsyNvi5FoDHk1z",
  "key16": "3iRYEw8VnyM86UxUc7ReWMLwAPoBrduZtVnhWxSquXYCu8nGR85kvUvHj7eL6Y4pbsAeXwfBZysEDmupHAP2Yx6D",
  "key17": "5GtNeTsVzGfubEB7Mv7vLdMQwA2ZnnrZCKzw5HoYQatBtMfXU6R6Hckg8RH7WqaRs7aArxiVSjU1HeuQaaNukTkv",
  "key18": "8aN6mMffDVN2v2TiWyXaV95bPTHc5hge98m9AmmswfTL5m3wZvsPNsYDcjt8KXXVzHQGUDbU2SXw36cKvifH18A",
  "key19": "5ERAFgh2sBerFYNv4X8fVcSrJoBN3HCw589HtbyRcG75RNMDCqV13YzpWSXgRQeqqpUQn7P2ME1TjXv3aA2xqBDn",
  "key20": "2VLZRrkR1RViCjnPdzc2UmgV7zosA41B4URSGvLsTJy4avhkybHnpzaQGQthVn5yMubcgLZG2yGhtXoGbFt8pSNf",
  "key21": "3es7sM7AUMbyT4q85T7dX54HPYpk5SzqBua5vMmy4xs25rnrGYkmAPtJf3iNCqZEfA8xPRKpWZm8AYuLDvfNfoNy",
  "key22": "55Aw6H6iFNa2924iWoZ3UvDVq4KkdxGkaESLNmLtYWjjn2purTxMzBJLDUDEB4rKhDrxfPQp45EoVYGRkngaomvL",
  "key23": "4AR4thYmYGJoyih84Xoyi1xMT3PCVMTBgJeDS4BYbf6BeQ6ZnwPTGGUxYASRnGJnAQXg3h7NHbbX4MuusR8Wm6aP",
  "key24": "5JGX332Krpc31dXuWoUxvrMmj7eB1dqyeJZjVWzhxBHWJFdqH2Uzr7CvrAfa44LWTrnzMnsAzEUmSPdXZWbMckcs",
  "key25": "5g1cr197fsBh2QgRyXWFmddwazgDmy94eEgttaYnvRPoxXyaGURiZxtCYdd4SgSB2R3Ng846TYhhqxmZBj6Ujswh",
  "key26": "5yz2SqKDFLMxZmfG7MUVaFejKNcnQFQK63HvW3GqP4Tt25YPmBn1Z3mtsveWWk3BGtm97ku6D5NHtVDxxgDyMVma",
  "key27": "2wXspLvGkFzuj2kobB3447z6g7xYMNeDP5EUkdwj3aoUZnHTk9SEUgd7wMFBGp1evyMpL6UVLzCTrqq2H3LU8hCc",
  "key28": "4LTnbHiwG82tuJpJL25aPKncMf6DPZevz3BfqxaJdLzTvxbnENxSdozAbWixBkZgcr54D7ivHRM4n1wFpaCSzgfr",
  "key29": "2o2Sx7twerXqs8EYJszqcFSjvyYUaKQGVypAyPcWV3Se613hU4cTPaF7C1HbmrVuNm43uaE2NS6FW95wdv4KaZby",
  "key30": "5gcgfZq1QdjFCs3qQT3s5Cfe1y9iuKEZ18sjJukgcKjfMFVZwptA6TJvsX1Kdw1SBHY5AbSRWp55iE3KhSTkz7CB",
  "key31": "5LoTCPfHVmN2xA9FpzESe9qgtD31oubk7q6nxahmwyNUARvVw3JP6V1nVUzhpKYhyHWEhaJdG6xg6KECW7ZgqCz",
  "key32": "tXecTpaUiGYCpetkf6nF8wjANUU117TymeKuKr2MPWX3wsc1AATixhTaKADtpnDoT3kzgBtjBf8CRFoY2htMQXN",
  "key33": "58yksevNpGJGya8WUt4f2eZbgpvhNwb11PUrYuJqsdgiGrVW4PXQSJXt9Wjt5j4FXniVDXqvaRNqURL364UJQckG",
  "key34": "4xtv5A76mtwgzqdoHBbVT86H8X5fMWj1hfFzeju9ku3gnck7ttx3zMJwuZZaKYAPLoVub1BBhoMtQxnMFrAAufMh",
  "key35": "r7DEnRCcLthsgxqX7x3G46DrDZVonwpusVEUC8hectqJzXZjLQN73TzdQGF19bMhzGezMtBp9v5WgHvk16GVGHs",
  "key36": "28RvDiyAxF7GYds2xACcfvY3wbo8CXjJgNnGU3K3EK9LMGRcBsDRJGVZx5spqxriQ9PTYRuZnnFSVVL4k8yz3rpt",
  "key37": "5YQMhFLNN1Wu2aiNuWmeewgALovFBm1DsSG8ENZgpfz6uGDzp5pKDm9LGhMUSM5mSbdruREhnu9kVdT86aLAKYV2",
  "key38": "55VsGjiq8mZZTt9cyt8sgNWWfcck1jZW6QBLthxQXmBH5c7mQe8uciUwyGBRB5CXa83iLw9Tdfeh7EuKWmZP9Jzp",
  "key39": "36FLYorw2rgVq36KmLcT9PqHZSLuDAQs9xEjV6NLtiuE4XW5LwYhgzEGDfov6yXkQNAaH6m8h1taM6XFmR596XM2",
  "key40": "3XuQP6o7adgFTGx6cNffFc9MRrwEhmw8uUzMe3aFHP4RFbN7moicj4npH2bVQHCExJiGtoEfVQCKgw8hqfEPeZZ5",
  "key41": "4oYSQPx7uy2VecPbTKq8khu4Wk5UQQKWGYi8qp5VKtBZNmy1kTJC5X1scHqZo4WUY5bLzhq1HX1xRDwF2v8QJo3b",
  "key42": "4d9BRKYs2xUGiL14XUhAhZ5yNTKn5MjxmT6N6rDApssR8QoQ9RWDh7HLnfGWZMNNodRhPwv5Z244TsC37hueoQ6g",
  "key43": "4zDT6bwVBCGSGuJeG2a66dpBuo7KkCvT7R8JpveaEo1HakUoFmt3v91wLg13C4rfWfeXF7THaqw4wSyqHBy8Qnr2",
  "key44": "5PFw8JUEP2rFRQneAEPzVuryBZGpCM7pFq3NNJe2uKZFDV3MaVtkeACAqzpqArAqhHW28PwEfy8v6UsgqPhuoeJJ",
  "key45": "4sehpaExFQB5QMADbnPET4JkKKZVaXkBEtLiJtKVRqfqBEVJk2XHMgRvVafkntvHTTbV9WjxZSm5o8dTi12kDUAS",
  "key46": "3rMeLcV89xLjiXsfn9eRpZbae6ToSMDotjBENNDz7vWRVU1P7ntXoPqJCUASSrQTeCQe4NxHdjCqtg735d1EXeRA"
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
