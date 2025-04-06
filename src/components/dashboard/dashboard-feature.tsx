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
    "61SC42yWXVVTqkMENvE6fgZRgzM5bLLhhcTRxKnj3Mt4WLnxLvZYMPqdu9XC9JL3eb7H97tW9EuzCmQ95iwg7UaD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gCkvzjRJGyXH8Df3HzdEQnTqmbT6L1j32wmFsWVUTmydLqBnH4D8s3XpzEdF14Yg9oF36hmbxwk9zkB26u5gJpx",
  "key1": "3T3VyD13xq4DmFJequiWzMPWk73PHcSfe89UMGsXvVbqqFLYTSg8ZWtybwy9PwVg6v69mgqPoiwh3n1LrWdDeFZV",
  "key2": "4P4eXS3r25PQTHHF1tP3S78S4wMhpdnoCXzVTctibZZMs7wHn74RthDiHrHktqk5zuwD2mdjudQnFFm93RsLU8pm",
  "key3": "2nYu4qwN13eSYUKnHgJ562XoKuZmnwSQ3MTjeywAAEir47shSgpBuPZyHADxyyiZC39jXdajqBKpsGZERmUB5MnR",
  "key4": "2YpaFz9Cw5nYo6Wot7GdRLN3eNyUDy36BNUQ95dQyJ6BhZ7dr2t4CdmMp7pYmciftucquoeEmrYCHjEzFAqbPrGd",
  "key5": "2AdJm3F4125E3RUrAiU4e9MSwiLn8Rr166bdMhFB3rL46gKAJradWbp7N5sY7kBFhnyD1xnXwU7eb3euYrz4kVME",
  "key6": "4vqoSSrf96YQs15qu3WcZmwqAVW7hKnN5Ro672JQXbGF7y4FSAi6FNp17v3fubsXrRHvn6CsV7LbQvkFdzHvdJH7",
  "key7": "5R4PTqCyLdeHfovCt96iT6JioCsh1eUGetPFV5ZDMscy19dog5vhqqzPKNQ39Xcxe7eLpuwhw3ZFAy7dr3DWgPr6",
  "key8": "2FojNkXFKcQFHBr3oKfBuwmNYPmdkLy6GAi3dbY6DDowAGX5oW9vZFJLL9De9kMq5nMQ4DHNQzhKr9jsX9kHJF1n",
  "key9": "XVvAWLm6EZpSHDXBpq89tvpJd93tbBGwDFWvVRNAskPQLDxPF2HrBuc1HyynWfQj1oFkW3uy2nNAsBvX1Q9YeqY",
  "key10": "2gFSgF9D7tNCScDRYS35VR4BZ2vCA9uAtFz4sHaQJEWWRRqoRDH7LEjM91EoBpQhQeebzeFd3SPMXwcGQyfgCrHa",
  "key11": "47K3WsuqrjJSyfpPWU92MGefesaAsEBL9zFgi3UezBTufCMxBDpqAFsTidaX98cGddkuHE5VZsrrjkM18pZDGNvz",
  "key12": "FpATqXNGQE6wWstJrtbtVBgMn5P72geUhjbXGkWRfQLq67mgg1qmGCYytYXAy5YxMqLdUo1ibf4Gv9PsBdr7pJN",
  "key13": "3U6XHCe4Mmbhsa3KpMVkApLPFbEjNQNBHgvVaL3JeW9yrLkc8qkm3ciFQr9LUiFmfu6ihS7zosB8f7tViJoawJpq",
  "key14": "kF29y2vLVSBphA5qkoRfwzVwfwNQFZnNNScKsUAnzHnxnfShnM5BLUgF1ZKXKxqxjW8SgRQa3hzzWd5XFs2Gjw1",
  "key15": "2he6AFnhib2zHtvkT6cBQXLKjJD9kGUzzbzgL7bmCiwBK3BZMmLNj2hu38o99QGvSRhMusLaLY5HCwsz2mMNpnYW",
  "key16": "vV4ss1cW362RgYpUrSEzEq5zBzxeK3xQddcoLkp33QdP1AKDgzk9iP2JcfKX8NRoZYBc7He7oqYtuiiTp3iZUBG",
  "key17": "EoiqH9HMYjvbfDeuFZfgGq36marsGqvpAVmPFYaeRRhxHx3xh7VDwvXTeSFYPyKwYE2idaAmuiGRvaKmT3BKCYm",
  "key18": "2f8z6zw46pYjTG9dC1orx9WRFjvfKrguD8ommsz5Ej3bKive5DUWw18MAjy9QQDtb3SZgCjmijyNz2kjkmDjHPC8",
  "key19": "3jeqfz8BdebFxsXdcwAoBzDRGnEkwt1ji5HHHxffgMGUFgdsUrSNiaBVrrQhHtmPn7Cetxshx6nvc7ZJQopJp8pc",
  "key20": "F4FZJXewDty1N6qk5rGwJs6Dr5Unpu9mu32PLnPZdQ1m5YnYqonY92YcgwFKHBrifuGm5YKnGpRGKNuXf8BUEFi",
  "key21": "26DwiZa9wPYnpQxb2wApweioN5zSTf94rXaqU8xUKhktSZ58MfEuwjk48AqxfS5jTdvNVxNzvEyJemHfePUEgViw",
  "key22": "3n7VjvPwednvGpeGRiS6mwPC3BCC9dS1rgoYE5Q2an1Z9LVqxomrXGNygRPjEDnwsd8r5zqjkvrYY4bgjwjsyJkG",
  "key23": "44Qej9AyZrz1E3hwHDa4mjDWzKqgt2YTwYiVf5mAEsTp3Y8rRP7spfm3nrHCjCmuemc12W9ogLS9TDwmeuN4exj5",
  "key24": "5iKvErdsCFcZpTRFffUuKcfpfm13BFSbWBiPWoesCHcGUrCJRkNXViEzWJ4Ev7TtnpU7KUfFh7qipnGjxqCGNsge",
  "key25": "2HzZj254UUm1NCurs7s9BGaJU1zBsLDmpW6TGEci61oP2n1vaL1iMiwpDakKG4gETDmuuE6iT3dfYbiBQyYrStnB",
  "key26": "4cWq2MQCK8VHUYDbGDSxLTdVPBzRyGZxo98zWJ63nAxYdvXhsZjx1KKA4oGZbtwAwYuzfhTJRWb5XCbNdrzka2r8",
  "key27": "3Fk5Cr9dnGAXnRvvN4qny8qiHeS9RVkHRMXN2afbqhuS1iq2FTxLR2KdCMaeGXmFfzYbYQMVVRPNPpKbQHKwyCTD",
  "key28": "3f4k6cbprCZmeSk6ZmpsCtSe9G8avDsW2LV3iB7JUX9pM5hq8sYnsujcPMyhg8GeBZjddgHjWNK6zAHTcBs4HqAt",
  "key29": "2pQzquLdTcx8TSE359u8ybPo32rLCHwRdaMe8xN7XwaZ6NcXQf4oEGT2N8jtJq9RcteQKdDizFHqmR6navbYuoAW",
  "key30": "4tfwmgZZBTmb2zjJ82WEMjBYzRaRRXPqABWKXAFf7NN5Gq2h2T9wRs3eDhsZSD8KKEju1prrbuHv67duFsCGGwHg",
  "key31": "2kJJcTY4tpkH8khpmiLBuMhRGGuYAVdQVDv7W6xvWsxJ7pWnBbYVyq4dvTjBRw6JqBnzGzxc7gy4CYDP6FDcMAKh",
  "key32": "48ADB1hCKwS29Es83EPS74nx9ESz2shZjz8zTLabjSMUErXSUtwN9WTRjii9rS8u3ygrXAD8BSqxBF7pxwNjZy74",
  "key33": "3oUzuACjh4Tv2Vat3YQhjNBysLwgPR6XuUnmtRcEDH8M534VuTR5Uiad4RP7GZGZmqkfmPATa4phgvr9wTQTX2zF",
  "key34": "5s51iWuBVxf2ShMBxtipeHNufJhj3F4q7S32soGyqGk7tzrf9XzMkvjj27XA1rLjvakL3eWPegHaMgq8MnQCJAgs",
  "key35": "Zz9M4URdArVNmCT2SjzoSFTcDHLFgkQdGm4x9f6VFrpdEGkDfMhhRaWyR3hHV9TNvCVYx5pezisPxPtPUyTn9tP"
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
