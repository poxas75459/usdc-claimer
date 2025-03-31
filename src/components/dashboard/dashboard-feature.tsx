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
    "4nnqmmdSfnkyz3hT56kG9LZcp7hNBF6PReBXC7rtaCaMFTbyPTdxs4pQsUMo8Y12wj2xxSAmFT82gYYE7e6J1U5e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bKiffX6auCHUr1cyhVQT2d7ZfZKZjLhS3rD329adCQH4qfvFD2qR6Dd9Jt7xnPxT4sN919TqvPpYmvamFhhaYw",
  "key1": "3zztfTFrSabnS2ALi7jkHQPXRnRr62DtfKNJao2WZiPCBq8HPSLGB4XwmTzU5zFhVw7V9mnF1Mn1m34GmZvuxEx2",
  "key2": "3wnB28LpjgFLjSCJwDr2ffwf7bA6BXrHR4NAvSDVqSsrRUS6BUniEWqq9ymcZB2RHux5SfGUXkKWan1FiwbHm8Zs",
  "key3": "3XbMki1QCyWYjqTXCSuJ62d18PdWiELdjt9jQeNbc5uTvHpGcLhYumXr9DwRKuKaCjE1iqNybah4XSP47953uDhA",
  "key4": "T4v4uYNMQc9BChBksn59pmZLZNshJGJJcMHBbTjije3dE8ZbbkPWpVed1VTUQRgwEU1VLTrF78wms6BQeJuFd42",
  "key5": "aHM6qcPeQ68BNnNK9jrMs3dKuy2oKuERF3gfpzzd2J6KnCV8cSkqpQcxWtXbpwAs3pLfp8vW6YyEZNExPvnfHXW",
  "key6": "2Pe1psouKY1FkYRAELc6oTKwzhumG4mtBi8XgWiRwKEbg8TnEij2H2QyesNtjsCc8axeBa8Gf6hLrH9pheXN1buw",
  "key7": "daFVx9kcxUmi5XRsVV8f7P5qAYgxPHDDywrnDW4xmR6Xdsv5fyh2vF2s2NJnTbLHhkSmLcXaeJbEDwhB9iThxJN",
  "key8": "oLbsLxtoikytZiZ2Sff9RRFD4NRisJDzSouWDAUvMoNbhEYGM2RqTSXyYupP8nfyKfP3ZsHcj1DryW2QvjVpzNu",
  "key9": "62RdiSBczDmjgsUSQR9Wt14cvJ2LRma8T3Yf6sxstwvv1kZoSS3t8MJFDknz9H4cotP2waSeMVUcoDyrQFheybwf",
  "key10": "65Y4H7Wqhe9oapsU4keku1eYtECxGq8L7f5ryX3NdJJxag3uM41fKkUj5RY9A6nsbPMEnDXbcbPB2ra7qwzYDCHj",
  "key11": "5tzz6hC23vMDFwnak4aFPaGWLRxDyUTtzcPEq2j2aL7v2JNuWKBrrCNdy3nN7SAuMry7kSC7GjuQqP5g9mjVVkvq",
  "key12": "2dZsyHgctt8h96NKvutZ8sEr7MLfiQDQpzMnVBCEfPS2fgmUBNpXwhXmyGK43s22MjYaMLjxW59oz2DPndPS9BXv",
  "key13": "PSzvqA8dy7o7E674VGS2YeQH2F1cGV2SqR2Ac7PEzSdK3JywMf5FzUMhhe6faRi5NTi49PJcqXE7Vk59gkPCjLq",
  "key14": "64U3Thcibt9EziGqU6JjUe67U9tpdwxPzdZufd2TGrYjUicGxZrNRobFvpEZ2RVaXqNWuA2wVj92JJttsLVrqtYF",
  "key15": "4gp3pQ65rN4A11pzh3fmvQ4X5Uhx4KsHRRKeyfxCacTvaKhLdvTnBebiT2HSLEQwe6SpEVWwNuKNC82rjhYXrFdB",
  "key16": "4QxorMNEs9B4Tg9d7PHXzFMYFRdUYtgsfFH88AzbvFuaSaF6aW1F4zUbfBpjfzg4p9c8Y6NpuiBr6JCESBTVdGJD",
  "key17": "41nrdyAMNiagw6zxphZ8fttPiwCPBKLt4yAB1yDVZ3tejyx4TtjAavzvDsYHtVohDzpq1H24PaEaPudjkXTWZgbS",
  "key18": "38YzamVaPtH5CqwJ9A7yH59DvEGN8YxWL7SPncGC8mqxvzkLUHvybqwJYqrY4eXs3fgm6s3hVLcRintgYqiWfh9w",
  "key19": "33w6rHNkYCyBQid7YvwKHP3QYJj8WKRSbX5S7wCxxdA7w6V2HJ8UWpjhBfoZG1GdRvzSG5JwSgJVqqrjSRGTCKZ5",
  "key20": "3JGHLKeKRiwAKjU1Z7qq3EpEQutNMji3wLWwfKYcDmse6AnTX6JWaYJpLzB4BYumzc4tdxDqmJ6U1ffhUuHDn1fM",
  "key21": "2VuTskWE1DzshjQDwkFXrCmvWVbdyWULDWHCtWz71xByMhwBZnqfFxZdaoBnZQHNUK8R2JVyZabhGzeaWQcdz1Zd",
  "key22": "GGZihjJFkD8oRL6S4QB9yWwpR9c5jkdGMX2eG1jhY7H9oyW5Ch7sEbkL5G8fwNZePbuiy7dXGJdC6XtF1Fooxky",
  "key23": "4dWdMSDsBNbHrixDXeP7cESx9SkUZKwwhYALrqcHNTVJa1jcAfFDpW423Sby4BHcNvkUpg13UeLCPqSLKimJZbfU",
  "key24": "NnWrGDx4xwL5gh6yVvbRzEJBvihhvD8jBiiwgzXci1YA2WQtLkLqQ2tEET4teSV5eu3RSNUXf28XCM6EaMPrQG3",
  "key25": "QuULpGXXtkLs7JewuhfPc9g6ttczAsBxtvyHZpLV6DoQtnsaptusYGuMbrBpbD3LxP9qftGGNWtQ25N81NfJURY",
  "key26": "4Lb7RwbGnXu4oJf9ou7hALoNfUSGvTfN6dubdgnp4UuFG1v5Nz23DTVLuvyMFvJofz5pDbJ8XuyK6WQmnk12HDbB",
  "key27": "53svU8S9Gf18Le2F6Laf7MUKMmRazMrksFEqQVDg7gGHhGtrUJwFbLyb8hFGGkKdd5njQWErRANGZHzFhZ75Dxiw",
  "key28": "5x1mf37HJKgbdYjBqhgVzzExuNNPAt3ZEt45n8E8HNdYBSxWWh7PPbfdbTzuTxDUK358CHyFQ8sG45D7PutWbjP6",
  "key29": "3tASkXWQYrcJ5Hkdtvd5Usjc8ewjz1yZQj4f29sd5Cz4DsudSUEqy2QAHfk9xCULL5dEWYhSShaHTVkCWb8dMExf",
  "key30": "5v4mgh6a6VBCgGpsoMtTAtEPdfJNkw7pPwPn8kxzLc4pBdCcYvsXYu2cggieVz2i3dXERJVhGQaA5KD7LFxXiEBS",
  "key31": "JcVtsD8RjUJnzjoWuTcH65GapKk727MyFLSw5k6P48KgJXexxmG2jS1kURunqJSrRcyTPZViTGXKmg5jBtCtuJD",
  "key32": "4VF9FKGtFPQc98tJs9xZ6P3qcHDHtUaNyJ2kJ7TXYu5FZa6yBsqu3U5wj9eLGG1nATJrhsgA4M1czJf5GSQC4Ufh",
  "key33": "5jDu21wgkqhrwq2C3meYQ2GjggNr2kU7muKrQhvKs8T5DmmxSUPvNWvfBtr6jee8tQ5WD6GBfhLHbSDaJGL1VAtn",
  "key34": "2My1AENDQGhjZX9xLXSNZHvFJ7DMrSwoNJPyKLJv9FKjx2sxnLdLG3TDr4wQe8rsgW8naGHPJwsYMgSe4HwRnGV8",
  "key35": "5qtWhetsNmaUZRU563dJWta72pgzM9Px6feckmZGu3GZjbdm6G32KaJoAoVqeD69RrqSJTsCKRdB8Ddb711MdWvL",
  "key36": "4d7AmFwur6CGVKQ2BYabQDZBGS16PtVJhDMt4ymQGhbgwtKGkha8LpKUiC3aZwtFp1QMjZdK8UUdBEFi5Ni6bnR",
  "key37": "xh1xLXwBiZKGFRg8118GSyCuUr4zUYiJiWKeHT3zL8c2hXznVsNysiPKkdwJgDYNyyaEK1ske4xs5u213cK9xmh"
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
