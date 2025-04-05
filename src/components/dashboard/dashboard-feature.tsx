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
    "2h2QJfZ4WsxY878ho2683GvtL6M18pRK5Cj54sSTL2drrk7CBmJ9Z7YKKKowTQ7bf5kqUpssk1gPfASt33Pgr9zH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38ar3ffueP9a3QE47niy51kpVWrsbuVrJ47pKFbHm43ouo5mPeRDZG9gachYYuSbmWrEQcMBfqkZwgCYuchCDLWC",
  "key1": "4raimfSPXJqzVC56FKupoW2bzCofRWrbS3J78UYyioD7y3RVpbE1DRD8mes71L1pVUwJJQ75rPK1d5cRyr2PjNsi",
  "key2": "2BXEzeakfzv6TvjBn3LNgugvfChTvjGyiD1UeoVpeMMLL7tN56UgnaPWGNap1zhw6oUwLTcdiyhh7wJJrtLKxzna",
  "key3": "3HTrYvzWu8FDygpXT8toFXsA6jih5rSu8Jin3BhbAec6WRt9S9cPa8zb2A7idbkC9xc6Z3MsA1BfakjftW6s4NoD",
  "key4": "2T6i9HNUwt8WkCeze2nE8J7ttieBdpc1N3P99GZ3cDhLCYFwLynVxadqBb1HYmgUN69fhEdqeTXkbj8paDLHrwtS",
  "key5": "2LmJPidM9Yd8iz6Q4GXJtTAqHWqo7r9sxa7MffSXJwf7EYF3s7cGSeBvWEPfErvEVbThU7vFqosnEHyNTwyzXfdN",
  "key6": "5GNCDk1sWLhEbfyKsyQBZf3QQV6KkSq3JNsNR6NpUCjRhgY8p4Uqf2bus4pxGX2QofHdMpU6tJp5qwMWex17byuP",
  "key7": "5FvYJebycqbPiGwocvf5HBf9dF9xHvekqcyWZ5HqEzqfsR27FeH4xEvVqdvqVtKs29ijDfqhvgHkchqWJq6xQx4J",
  "key8": "2b2NZKE5XCR6DRgjPZcApP1v68GEpkLBxm51XvRDb8LEk6kfWar3UWTy5qD3N71nX92wgfpLJoxuxSmYH3Mp6Tr3",
  "key9": "2Q6C6gNwbndjZuzi6pQBRMKQUuHLpJJE4pFeC4GgVUnw8dHM3cbyRCPaneGdA3TaFZUnKoYEgtHyf5ZT5TiQcG8i",
  "key10": "4oAu6zrLUe3DcrpzenfBttGZhpchWpepbjzyVdXkaPhpq2CBxmCyEa74sJNMTRpWCoumUzg4ZUdfhuPKJirq44Ex",
  "key11": "LCMvYdqscSEy5toJPBiEk1iU79YUeY2xVjg8FUYnNkwvnDGsGxgEt2Uxo52AfDth1TVzBdDVa6Fh8HmDbeQMvSk",
  "key12": "2Xo97k57pZAeJbMb6gZb4msykJRjfrNDJByF3vBbN7MHy5guT2rD2NJ1Ld9D6UP12FZajJVjiNLYz9c3zZrCZQFM",
  "key13": "4aWp1VB44tu3qWyYWgr4f4P9wB7u32YRazdSL57MNRLGZQdtGthp1svXwEJYiKRNx52YxUidecAT5jfBjWKgYv2E",
  "key14": "61XipnGDcYAWR5BbydAdy53RkJJ3iDhik5uqymkXcxNFoYa6w6C4k8Qwj8LdpmXQaykaKAjyP99KqeYFpX4qEhoN",
  "key15": "peFdVJUap5p7LWbYLxaUkRx79tBPh8LWt8inmpvZTFhYaVQUC1dwnwv79Lft5gQWhUUwuQeGJc41EWmK9knLdfj",
  "key16": "2zyHnH4VH52mmAq5rju3ckkTgF42QkGV8L9RhbnJjNVEtKdDFNBm6UGcHJFmmqk8wLCmiKCUou9fdb56PKMKHgGk",
  "key17": "4U6qw1eEKKz9zeoUqL8NhTJ32eLnqNytZ7NaCHy11qhwmDDnxSqru6XHV9x3Tm7Q4WXA8a3do18RWhRts3VUKyHN",
  "key18": "5ZssKjsdt6f4EipHPbWQGgGUnmkWTsF57pkFyyQCFM53gTakaXhKv58DbwekxBeCHuHDFMTKzPXUfawJyG7rwtAe",
  "key19": "3dQZnpKo5TZb6BPnq83g8g6qac2VVfPGSHYAT5nCvi157YAtzRFwVKAZQbtrcwbSSqMYt6ontQrCBfjD6AGzKyGP",
  "key20": "Hcoby3kXo1TDAMRkQ3p2SC2w4y8YPEhjU7W4ei1pn2Qo7EKQbNQG7oGA389z8beJeyvcmyp9Hzjg3ehe8gtiTsj",
  "key21": "ftMxDjiU64zeYXAvoaczRGDcSCJNYRTfLMTkENYpXimcbUEgFbf33hG9WyJdMN6Q47ATeHx3bDXpFWWdFT2Pbhg",
  "key22": "VD1sCGW3C6ydFA99mJbbFYFxbncXGgDLUGZ1jqXoJmLxg6H6ffxhPieg33CcWshRX3eSpTFjFE3khppCrWSDZM2",
  "key23": "5meh55AnrzH5rvJooqi3TqG6ftSpkudJwmn7Cs2q1ar6UeoiQTLTeLHYw3kboE7V8qTqGod4R75x4z41k8SKzPSb",
  "key24": "2aPQYJLqJrkSTrSEB838HoaCd59whrDhuxWypKRHgcLrg4bjetXUS4vtmWZRtWNXNe3wFhneJ1rrxanR3v552hQo",
  "key25": "2Tthy1raK3DEGbPEnThaEofystTNXaLg1Pq5eime8eXpueMGDpxM6EJgzsZmjSKfQZz8tWe9Hya56AZbaTHESiVL",
  "key26": "2WL9rWSYGoWBABfSX859ua7CHd1xDhEp7TGJQhL1KhzyHj81daBCA172dmGqvVZuweLx9xVUR4BgyKSsaqSMUvCh",
  "key27": "58K6E7xSrsLALH1sAMzXXsi8JweE6AfBzuV8HPHJYjVbzkMNb2yNcAgrQtHLgB2xDycQmGFEuSw1T8iugtiR6B6p",
  "key28": "sVMnwyavMiuSN8HamUqane6i5v7RVcXqTuBdN1isMCQzwJfoSJn8CSRq5sqiTV86iLY69gVqVcD86V9ZLCWH9Qw",
  "key29": "28iem8vYdUbMqJG6qXQ5fPQSY7ti3KBurHjrPTBYjiB5BfQrutA2yP9KonbfGQSxfQWVn5N9pcGnwTequqSrRt5D",
  "key30": "x31vfoZgZpnD41U3UMNEHC3NYjghUgHes9DPEdUV3jnpDgDpaCoyUaZanwV6uM2tWnXhwHF6wEQTvHzQQoKfXDU"
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
