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
    "4eHW85q4w4mBhgQmS8eZvPXcg81qq7DbbhsPd8FoAjP3ZNcRDCcV9eqH5frrVBb7vzNfVxLgzHxorxtYL9KMv9Ue"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Lm27jwwMrb3zodtM2jA7ezVepvaey42gLihXWmoheBWcZMWmEtHtUogBNmSQSCTgY6KiFBBR48vUpfj7BNeQM3L",
  "key1": "nLhd5UxLKRvHf8QQFHX4GgagvgzeqKHyMB6bXqtcwpL9swVG1UkYmTxNVPXTYc5xEosju2rQ43z7fiw4CwiS848",
  "key2": "66Cs22J32C4ypvUuxwLCokZxGqXdD9vJCBw4XWCn546xuSJLkxW19mdxHk2GeWDFKutzkZJcRRzuxF7VsbHZ3iAN",
  "key3": "4YCPjB84NhKQeZ8v6U23GkC1SGDmKXZPRWcXyQg7vVsWKarHvS3rfPnvc6ddZoBDyZTHchqpPv827CYLi4GWANvc",
  "key4": "4sfpgFDWnSGUd4X3WudyKCX2Q2vjyYwu3Dfsa3Gz8t1QGA4wct4X18AzE2JYwZ15VRDERfexE6vHRd27UNZH31aX",
  "key5": "Z6hg3q1izLHaN6RKaJehgHQKWCSMsqqLssaV5ShXXTeBGsdUeRqPQ41wb2XXdvCwi4eLppHKdyZ8wVqa4LtmsdP",
  "key6": "2k7pEmdAWuCehQNrveseAsvFZAiGYqzcF28o7YjeJV6AhpAcfWEQc9t96e6E3ReE5WTekRhGCtjDoKddVzSHoY2c",
  "key7": "5SsXNw3Ktsa8mtKh4FmdMw1Zc2mogY6iK2s9Cj1ZdJcuUH2wLFS5cMGrn3dNy2KSww9iWakNmQkf6sdEh8F8gkHG",
  "key8": "4tiw26JTSgpwtoY2dP46Py2pY2d1yduAos29X4t1j7j7w3mx9QhtxZX2YHUisCSf3GSUcVDNqfSEJXYEs3Nkciho",
  "key9": "3eU1Zzu3u8Qbw6hHdKe37Sj7Ts7567Mn8En3JBvRejMYEG15Sf12BqG3j6p3kpHKyRBJMUnFqumRtN1JgoLvD6sr",
  "key10": "ARXoE9oTE8AD8thSsoMKHzzaQtppu4uj7t6x5R9iCkveqGQYKrWMFmShpnZT9rFT74jEWuosRLAP7T4GymhqQxy",
  "key11": "33oAibDW4h6ZjicX3sPehmLb3JVLY34CAyvAtnMhbuN83ovRyqsfHiY9Qs1Av1zrCgQH4KhNBYG6zQBtLhZr6GYB",
  "key12": "3usKi7GauQbRFswFV9kJguGi8xnAa6Ft2vG7B6kE4c1hX6Gk5Rotha2wbUFBXpUagR3XtbHgiGqE21GxvQMcXwWT",
  "key13": "48oAHZEQa5Msmyp2BMjbtqkRZJhRYjuAzdbpM4chBMKG3VVWxUS6CyDJusChhTftxHQZTg62QBdaxv5K1mf7GgRC",
  "key14": "5Usw3h9M7WdLxfvEjfLgSErp96M7HqwrEcG3ZGyo2E1p5XEBWuT6wSxSZuXSSZHde3tdsc2f8U6TpoJPpkhtw7Pb",
  "key15": "39hiNfut58rTD44Su8RA3CpaHEmqSfwFvW5PKMsv12YyL7P3ugyRMaadfz49hktzKkgoxaDJH5NtJvQakPmiaPju",
  "key16": "qd7QTtFdy551byADwr4jPWZHvr3v1Rzf6wPHk9St3X6gdyzJGMaRnx6u73XQ5jZeBj2GhLoe5ttpGGVb7Q5VVj8",
  "key17": "35oXgwMP65Z7UzcJUnoqw7DRRpbYYrqvCw7QSjAZF436tEkKbJH8m8xpc4yrYuCKC6UGLC7wVGwSRjMag5iEtn96",
  "key18": "2Fu22xpCrigCDmTqMMzKEY32fmENTMhBecjqPswXVgM9ZiDVKyoAdRkRD6PXa3X8hh2BZneYnwwCX2thCvgbfCYA",
  "key19": "2VU2uD1xMRJdb3ULtLYPCKio34KneDpuX5cUZscq6emSHhSuZ38CJ87Ta4CX8qWRJvGpsR2FWzTdMYybTF8GSpix",
  "key20": "N1Xk7xBhj2JVBxAQpdut7jSznC84dix7G3LuBVCtzS1ojGfYMVjFHTtnwvR9MZwJHqHeuw8CrjbrG8nF8z2ksR1",
  "key21": "5zvjJmeBQ5EsYo5KXSnv6n4BCsckfWz2J1eZTFzYgExzXLqeJxvV4BoaAcqhGmcr2UCtdAqFoQpKdJKcbhdsU1jg",
  "key22": "5xrPZ9HtGQjF4qW5wYLosa3FJUqzXYtpo8PgxK5fVLLyZQuu5sFWbuhE4zUZDR2FZFeUuMwMR1SGFN2AgcD3FebV",
  "key23": "2NxxiYyWxheGNQxQwe7rvxisqQ3289L87fXfVKmXe9zR3ZUGcJGd7KSgBr5GVV6bW9yTmVSVJP1AFF8g1U2Ydyug",
  "key24": "4vwtxzD8grMykoi5j2LKa4tGu47E3SyKhNFc9Zop4KypAiCnJsvt59dnHBCteVbNHk6c8TUNzuQ3GS9i9bh6PusQ",
  "key25": "4AevPaUuguHjoLmUczBX9dDGRzxutJaP4Jx91Jq3dpUBe72JxZzR74jjC3MUvugJ9Fv34Styv9RXdxYeEKN2WRrc",
  "key26": "47Y2ZEuERFYTMcBMq9613cdf7eMxGo23eAm4jTrsMJDAEJBKGoWNreDhJQ2tvAppN1Y66zFH6eroYGwAJ5H4GoUp",
  "key27": "4usvCFWRbGobQUL8NeQ9cghAErjhnKdbc9vYTteuekb9J1xdVZ2Srmic3k8eh5svowYVbiSG2VgkUV1TjHnRRFJp",
  "key28": "5TMJwZpt47xVZ1MZSy3nm1YdWp2NGhcCTjM5x8REvF3Fcob2sWHFa6tQvo3i8ZGJ12zLozzfChX7FGjSZV4L75RM",
  "key29": "5RP5uxe1uFWac9rV6GMCe4sXmfT4xTnQr9wvEskbSLcaeLXQk64xmQpu5MtNGJPHySK42DV3djhb1bQwFZNdF121",
  "key30": "4juX29LyjiQeSrBsSzAPdBDiJWxDZAvUdewirCJ3s451yjndhpu5zdacuxdqacLddEgBgJo68WJ8BKNt8exihQ1V"
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
