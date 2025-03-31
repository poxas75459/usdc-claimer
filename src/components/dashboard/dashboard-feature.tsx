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
    "gY6sdH4E83b4tQDZwPXiiCChJn5P5P6dEei1hJK1QUyUjPq7VyeoKJG5ZUyC7b53iUq1zC87hYCobmne4jacGuk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qVcCDzF7sxaCytzTgDXLi5tCftqeUGGo7EaipdvLVfeamqWUEVSNVCeAxbrnjYRHQF4tAA5RW4u5YLbvpWo9any",
  "key1": "2v7bPVz5cmarCGicYQnBvtNze3SBSpEeyQfFDNNNkMEGkDiZtGcbH5JquxbK9JZc9KybPd47wNpX1XS5Ghsn5udt",
  "key2": "4v2AxRqUWzLMWgdKySCKi8bqTFQEfi8nJfm8TeNLrfgpQtELeatYkFdfKpsHxMmfg7rQassT1BAAforqJYitjdg4",
  "key3": "3GcihvyA36DY2yuW3WWuB11Jjid3KopzxFFaVPj2tJydvqHYo4rDkUyCJqhBPfUQqwQr5MMNLXsgFTKNDeYboqVh",
  "key4": "3yLdsCktwU7kNNBVdocmGR1XUAViNbg97RyDFNQaumbGEmy3WzYkXuagTNArNE34rKTkNmNCoLm8jnD1VGEZS9mC",
  "key5": "4Sz12tSrqpkhhE6yYmzoooHReDewH1qkbQ6auLpJt7YFeBmtjLz4RLxq99QK4brPEvviQs24TEowHosZNU1jsjDo",
  "key6": "3ntsMVLTJgSkzbcyiH23UV6CKf9gYyAfrWQakjpqCR5wT5bQUUT37S4uFHY5JnUj3K3pTF55XfEueDL7dEvX9kZv",
  "key7": "213Q53ndt8H4ngYea4oaBn8oXPXmrssH7oT22XN5yMrnAWm1ZGm48hSPPC5c2gULuC4PX31TnJ6PgNobtsE9gmpM",
  "key8": "2gHyisd1YHrQUELvvwUSdJLYB4jCPsBuYSXdzBsXwx1yYP3eqJPPZAsDtr6rjmDnvoEQ99489STyXc48gRJmESB4",
  "key9": "4P7JMuekcE6HY9oWQ2fHvFrR8bQaSYSeThtDsjwCTiBU5WnHy6Nwo3gBQy7WVd5QUC8JxizmZ2KZ66rEzEco1cfa",
  "key10": "3xo9kWWvSAAqJpd5B6pSSiVctACkDv2CMLSqPFRKATpcoUsTnNwehEV8v9WDBrMyexgE77DFxCXkMgLtxXvjeaFS",
  "key11": "2pKKX48np36gR6dEWHtERRosdFa38VSiYmsYowjz6Rbu7NVVXprXgCvKRvpwL6LbiqPL9Gp2FJPZ78H3HpDXH9Za",
  "key12": "3BcgexFdRHsevoHL9TenNXLyr3Mzkyah43nqG7UjNtSiR9yuVdXJzaedSfk25Yxz4WPLbgUcwoPUPFULAZc33aW2",
  "key13": "5jAhPrr1pCv5htRZGuytAAY1YzuGtcbXdCJ6k53W9f25usCgzTqmS5j4UK4bvnFZamK6YqHBNwS71pKuztfycN6r",
  "key14": "2A7dQRSWkqLkzMPfKzhxywXVN7xrbKhL8n1Zv3pau2czY75g5x5mJuwMSk9cqHa2E7hxBdaXvq6XZbNYxMBgGJXY",
  "key15": "1CLL14RTxdnuKQpHjzVtRdxr3Cgb9zQFu2HK8uqf6CnaQnJGxvncJSRUsKyE6GkV1AjYuj92oiWADW2qgFr8H6X",
  "key16": "pLyNfpLJVJ1sBufxikgoEKN6UeayN7SBfG6xRxDFUtv4wko5qwzvmziDTB82vuUbxtBaEfPkAYrVFnxY7pk2qgc",
  "key17": "4RDQaih51tFZNsDuFyBz5e2bSmwD7ai4JJoFLcEUecphPCgvLuBNm8ByzoadsUt5jjyuiuwotxeFvr2TyMz6necd",
  "key18": "61sNUdhNRcurKuWcP2o3XwfXzybdSnyiRGLArXgXAx69FPF6hXeALSnRzLzFGxX9k5PqzPsDe4SawP1yJEb3LYTh",
  "key19": "2Q1hb6H2Ao4FZUv4689YSq9gSy4Vf79aiRxEwrT7t3aupTgXb3SKpinKAURxu9cwgWnjhTqT6uBcUZemVerbbDGM",
  "key20": "4hvUxZ6nNNTuQKaHGGgXoSTcsiqFuRqQRZiCEFKrZkuMkoPjUZ9vNJZUzS9gLgewoA8XdGaemYJsfdvP4AgFvAiT",
  "key21": "36mgNuwbpJoVcyJz9AWVZep8tunSE8uyBVdjcbJFVfphU9TehCckoCmZ9v2jWt4QzMRuupGUH8ujTQM3Pa4WQX2H",
  "key22": "3ZVhWW1LP5KTkjs29bTWRoaVd3ufZ4VC8s4mp8vkHP35xtvtp8R6BBN58HCMAmpF6VaE4MFkq3jtmCWpDozNuNik",
  "key23": "3nWYomgXZ2evpwL8MWrPvQv4D8tLmJrpHuA5sFwyiv87pkoNhgASGowHDTK6Hkii4Nbpznn7gcmZPbjpH82Lnpvc",
  "key24": "rZfh8favB37i9pSzUk6pgwecG88LxbE7JneYvwwXNAytswk8Pv8hW7Lkv14tUibh5ZT1iohj3fdpwTykVccZWmC",
  "key25": "5EJkcMVn9TU6fBLxg67vJbCZzvXtPSvTgiyYFrPoBXjVVa4pPcmAiACrpvTWHT6esRKnKa3o76pF7i6uGnWPBmsv",
  "key26": "52ia3sEg7cwuoL2Pw1eMZpQxi3TYd1yKd6nrrTv6DWSsHWZzoHdmFtwwmiVpK511CZoPhUqtCE3zVfuJkCKiyKoM",
  "key27": "2k7GgVG3YNvVeRyz3TUqhMfJUAtrVGBQ2WHpvwGQxSwwSGCbQBVVXzCVu3hUyLa4jVMYG8iZAv5k45rDBFps8Tag",
  "key28": "5BpPxWewGtrjAxMFeA6DovGycGuSVrDSyCAfpez9GE7D1hgdQA8oVzj9PNs3Wwtc5NWzVJqJWja883nfDfmwHB5y",
  "key29": "4srb4VbQn71pDRcJvrMu8CvPcpNNpsfFecAcDnVbgu6Sq3pikySu7jcVfe4jMePBeWLYDvEwGRbJ8R9a3UtWCfy8",
  "key30": "xEk9RoPCwpxG2upQmtEq9jFHANPMcArDNqpmDgo8wqMm78apANpbMcwo8DNnwEKfRzTGTCBBoMqk4qvRqfyM7aT",
  "key31": "4u8pR82fNnF1KzSp5m9TVmb9Zcv1jsCc5tJhJ5yfmst1rqEYyMMN3Rf9q23C4wRF4VkJau8ckmoWcr3vWbQFgR5j",
  "key32": "4Fr3cvPzXaC4bGsuDcDeU1ADyq9QbGC4nwtyT6LAX3HXqVW3MUXwAD1LMtZxpjTc3jZC3ZXLUG7gTFuSREZbN5AL",
  "key33": "4iDzP5Evr2dQoX9aq5HiD41MdM7wQ9Pk8i1WvgLZFoJZZSMVBwtjVvfHbUq3aRpCkr8k5JPKSQ9VEAsuZYYjeXhp",
  "key34": "3MRGsU7g8PJMwPqGKbu4HKvGWTyB7fEgvyLovTYMK4PDm3nQE2YDYTeJwNMrMjgSoumbhnjEPKWEKhfL8FQnoJSZ",
  "key35": "2FZidfNC13VWbRfFdbH6XmBipNeXbGWPdWct7jFy64ubd6HHeudVMYxwUyat9GfAHdySGtYLbrMydr2pqPMyuioU",
  "key36": "rkf2A5HmPYGmVdQYraPHCn7Z1ZqWM4XH1kNBwMWZ95jKusvPg3QxyhM7oCZ1h2GudUeuY39dDZohNFNiemo1UG3",
  "key37": "49wk6wUktL4fC7ydwgUacFmhK9VPJKVPk53ESHC58RLfCXyb1ctRbKRxgZXWPFQvq7xE7Zbgr34QqLy7MY6N2duB",
  "key38": "5kWyChcCG1vRUQWGMzgqiE86M72e8uUqUU48P32UL9fNgWPdvbUiB4mB8kCqTiqobHzm9Yf7tW7qT9RhCm6crDtK",
  "key39": "5TW9DrXAWL6HVzduDpg7uZdKVdZToUS9EcRxAuDYY4NzyMRg9jhmviy5bKLfjgF3SVzBaLQ7Sm2KQGBh9F3rvJGh",
  "key40": "31Hg18FWrtyuGNSPE4vX7pv2LBJUGbwCQcN77Z3PTiEfrSRgMaCKFmUUYTn7QjrsorPyNQZUXKv38JpMxQcg4Rs2",
  "key41": "4PoZ2u9fUhsUXJ4pBAHkETzikNkJwvAbQdNvFppKMGBCL4jjyb9CzUdEHoX7RTC1BUNhadgM7jsPNUmkvsm4if94",
  "key42": "23J9qzgT9D8RQRmSNYYRdQbPJWZ9Aof9UjZdxNg29w2EadY4rA3jqrhgk1x8VVLaXVgBP7ZCeq3MpfmRFnzMhhun",
  "key43": "4sDb9L8YtLCAdKG3u95hGAttHoXw96Xq2UiLASW9ht56uaqTZmW1T4Zqzs6XVKMUXrJfLKptBLZYykifqxiQ3raq",
  "key44": "dj5LN83TFwq1AbFnJj6WzPAU2bX3WgPkQYowwMWeRvpd3YKKvo3d4iC3GfRxUWqS4xHM4xVe8AJGZ3qR2yKkFNN",
  "key45": "5JqyKaz4QHZ8eAPXQbFuUNv8uRj5khREamWAXzWmeb15ezWM1LNH9P4ejC7MiRnHBjJR6kiVLaEKfcszgXTdNuCo",
  "key46": "4w3bb1VtdnrN6C5YaD2a16jkS8zThQnmV6J288o1zojiUZNKHnJSxue4WnW4Ua6o4X5GcmKccTD8EgEW1PkFvJrC"
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
