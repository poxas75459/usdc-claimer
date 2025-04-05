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
    "3CRtkQrQ6BVQSm25eS9ENmnJrRetzRZweh5DpVRh1rhh17xJkX241CNrYJA2kkyfw3NdP6SnLigtdK3MoVJK4vdn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28mPrLqTztF6iHXpo5Xmg5gYAGYna4Ce7Zw8e91DvHDvCdmVJ5rQA4ctfQbNW7rkiGwsc3ucxzwaYv7v2BPpMFr7",
  "key1": "sbYqErfSdhAvBXWEA4GExwzgFkMt9gYU2TkEvztc4NGV6ac9UDYDS97xTwxNWYT4H15n6KJkc1rx9ZKHLZQzpEw",
  "key2": "6kVCJZMAKJtivgZAvxZi4KyHArBrUr1ABnq7t9VYDnNdkMo5W2kj7i7TX6JW5XgNYqSbDKdfRBkeStyiWwMwoAH",
  "key3": "2TcBVurABCg4XgCsNqGybZmNH6iTZXCEwaaSWsUiY6pZRKa486uhpPnzu3uX7ec8cvdq35jjjcJc2BA1dvN2qRtV",
  "key4": "3caSrdAX5QTqK7DPzMcCt1vYiMkdHykhpeWKjNAJHz5p6g6WiqMWrLZxxfKDzptTi8krnUs5RutUzUrndSdJQZhY",
  "key5": "5mx9Pp73uoEtotw1hfGctrxdmQTZEqWxbqqS1VFL8GNF9Xe1S5FBSCb62P94Ywtr2i3N7YGue3zegADs9mpGe4UM",
  "key6": "48XyKf88V9BpQaQT1JM6nBJoDxbDh8azgLAXxsbQmWRZWcxiw55fZaYqU9C7mSgzNw7ibFL5Gx4hyWtFCxsG2m2U",
  "key7": "5bN1aSfR6mVPBv1GT49cj2MJn8A8y7GefReemcRwQ6maHv3V34mnLZRBuCmnhU51yCy9hoX3crJAg7m1vt4LJ9An",
  "key8": "4YkWCTUBrJ7gBwjKzxfJHNFPS8hGnegUjaMfzn9TNwdegX6uSeuhvGA4FB1NxDeimHfUb2ax4GchbETh7Nf3GuSu",
  "key9": "3UTLnaBGhQbyaqVu72NfZZmVL6uRQDX7cDHeNC1GKXNfcgQiJuYnqDaEFvguT3V8uFWzpv5C6iNPcXWHnqZdjReA",
  "key10": "67MYkMK6MmoiTGta2v7kixXwJVZ1JG4XVdkE1uUkKWVFqU7onawPcXnnHLFP7cZHocyYg5vYh7PyZxrLShRcpjgM",
  "key11": "2fH763oQvEEMDaz2Anbhy4JZHtr6oEn5yPkQgZGD84zgTYVSanZXfjssnzDNShLY7iGVcZ8NwGZBkQpDgVWwurX5",
  "key12": "2ppfZgUQYhf7Vfsstw7dc7XKnJcJGZurvnMKSDWazewid9vW4JauneH5EzgeR6Cs5uSB51K6Ye8aB9XvwYptWgub",
  "key13": "33Aj6g1PmAdrTgADNXLtmcSZj8Zi8twrhHUsfskpfNVXM7KjT4AfBbUDQjhZthXgDmiXuv6rpTDybGjed1VuBfTr",
  "key14": "Z8oyymFPr1uhznfcnKJ37amqfPigMKZDpSwaDGB1vx85bj1b5QLz17uqa4ugNeesa58sgeX4H93rEL836ejLSSD",
  "key15": "4xuuq8CftWWEXpovJXsEPB1P9kGkF1YQi38jwS9p2jmvSeAkbagzoB2sNu8fYWX3KhBmL8Z8qLsDzTBnKbZqTZDP",
  "key16": "2UaK25HYWotWDxwk1FgA1x921qd3mMXW3kdDD9BWHnQJkoTXPx3wkcf1bqzxkbtvCJ6SqqTjvPAJt5XJNUMQacPK",
  "key17": "638xUU3BZZPmHYEuzJN8Kck97BAoKckK1aKtWf9JqB4gtrjKdJwH8fGEx3KCgBR8RS6883UrNW5WTv3GP8w86yF2",
  "key18": "Xf27j17ffw594ZnJLsRrbga3Ym33EvBddo5fjVw1LYwrM6BYvZqiRgQndEGvsirJfzQindSV99CgqHQsKm9LTDd",
  "key19": "36x2Nfe6Z3XRPCBiXGRjmgTU5DPKmNprjYQN1AbLUQ6ihHhpn43U7SsXLN3aceonsqThxcURv9Em6Y4iZvbN3f5j",
  "key20": "4buFU87mnqYb2bsqDP6TgiVw68Quue6ydcxuup5vrLbGmMPS3JndNtb7s2iQLTpZskC81a7nDh3FHZFPzayFb4n1",
  "key21": "4aAUEWBLzkD6firnNWdkvYLmoNtnPvddLiBwsYNGEGGpRLTSYpHYUKA1JUqyDGeoURJKK1Fs4M4GYFKs1zRGqTdT",
  "key22": "5AgqoSHMSPsnTzibQrTusyrC4BVxWxf37gvX7F1ECoSTq1U2kQ4hsWQLXjcmFkzKH3RLv5HWeHEntmbTGSYpzEfF",
  "key23": "3BoZJyfphscaUjqRoPdjfoECpxWWy2wdDCKDjFPLN3HWNYG9waxQwCjrKwQ5Q9ok8ydHaW98fqLKK23VBwBw8Njc",
  "key24": "NGMdpTsdZGmgDecrdCi4KguqDHqcc31YVkAb2A5UYfcoj3SRdhzR8aP1kCKAMQ3Nd6b1QDzYsg2S2cAqb2Zv1m1",
  "key25": "5oXNNWW9S8289sxxLwj82TaJUnvLK12sWf2s54qRq4A22Ba4MtYSgvx74KYxbjscGnjWsDZYEfU23kpWzU9oe882",
  "key26": "xTfDCSbEvvEBrSZFeRjp2W8JcRzyUU2D1J8aWctGmA7AisfxXMp1pvwAG6RWRLbLnR95PYrDyoNqnpYTVGMbwUu",
  "key27": "HStgtmvGy5ipqN5Q3ELnQnxENHS6qSTouD52YT6ux5qXu7DRJDoQePDcMXpwxMJJnwLPouAvpc16QcFvcokFzRU",
  "key28": "5C9QKu2HE1wx9hrS8C67Ms86YZWvPQQF5YGX7wnhXciSySCp1nUqwSjVqLccaiunRkQrvfQfYPboGVx2CzZnrvSk",
  "key29": "3qmXci1oPCYjKdA8faChea6qauG6x4WFjcxUXkD73sgKmyo3LYaxr3ZsmLTFmFtg9HrnZVhq6jgJYuks1SgCH7tt",
  "key30": "2riRok2SipeDA2MvaSiLUX4mSkDvsSYNrgwYMEL1rk6hNyiqATrNpjDm3bL7de4pSpNdbgCJJxqALvbWg3kVHSdQ",
  "key31": "36sGqnpX5cC2RUnA1WdzQSWRCm4dAufZdT7hYj9aXh8iosxzwKDuDN87t2jLXuJ5iZDLZCh9KEYCrZJykbgtkTap",
  "key32": "5aFRj5ypLBYRQhvisDiqoop9s595n7fB4fUrff1mjY9b2pBR6tYsLj2o4JBiEph3ipqegD7PDp11U6MRcyUSfm4v",
  "key33": "3PdpdtmVYLvfmcqVVydyPgtKYuApMFsiYiZfXaHZ6dN1hVLbgkLQHwC3kcWXaDHQZP5vzCvQeTXCobeMp1jZ5BTE",
  "key34": "4itbCnVTVQ1X5yvhAWyLnnW5cm2rnsdRUKCwheqBNK5sc1LndpwS8f1T1cPBgGsfWCitNwZyci4sqtkVVarjzeAh",
  "key35": "39ZnCSBYeYHUqAN3bMBrPSNgYWPsxeeQdijH1ZG31ApvTpTPJTiWmBtGLJxTUjRQGQVxFayDueWZYk7rGM6iMvLz",
  "key36": "5hBHYeGhRz98nT3qJwCy35Yu3SY6us67V6Pq6oqsmNhLddp5Jzbk2dYeseEAWzpkMAyiFfM93PWB2477YygEBNs9"
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
