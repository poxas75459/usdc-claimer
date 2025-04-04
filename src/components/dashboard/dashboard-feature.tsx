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
    "3QeT7QX4KLSZGVCkPoCXfkTnaP2Y2JRMTBE5d7R1WrYZRsUH8noNzArbW1A4gXPhdvgwAh59xe5zDyRSbxyoeC4k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XkTsX95BFeFF9eUpJ1m9hHNY9KmSJayCn63VCBHcWH22B5yEEDmSgMfpEgqiyfb4YYkqB7F6n8duMVMZmnSwupY",
  "key1": "4J2KikFBoHvBuQC7XJATJyqrtpSx8r5woUpgHdTPZL8WxmkojGtgHoQSy8M6rCnC9QzKurSyt6BwAwxU4fyFs1tz",
  "key2": "18ThgHY7zEkgjiWVXYCxTBrPwqSUtbNeFFPL1AiQoigyAiaScnMvAnZWnyPjty9bjcYBnXHZN5pd6A2Q4W37ZYg",
  "key3": "w9Lh5dGV79883c5pWaXKtaHv8usMC37RCQ4kUwZiMecswCwhB5aLbLkgTTjc56GsNVM6or7Fyzf18KXRsZTQeKf",
  "key4": "5zNDRTVELAJinCKzjYZ5npGGV6hejvykAfP32HomfQimRJeJFm2hPehEvcu5bMYdhJEfHehmoAWAw5VAP31LYkWs",
  "key5": "3SbEzQP28Z4GrSg84vjsRvMRWAsEbvxsc5wkZdVR5APLKUbno62VehAF13aEEM8QAFtkixoZ6xHinT1iaUJakyt6",
  "key6": "3coDWkTDWHWBou44HXs6wpdF6kwgpEbBwfyiFQ8FKh3dJ3tWbMJLAZrM7ZFsDnqGuveBMq26JnEco27K25m5ATX1",
  "key7": "5SZ8F5AZNgQKsD7AU9rLHgc9Jep4dF1KRGtsaALufaLq2mvkJ5NSinHA5mSYD5an5qKqaZxAmyj9345DSMerL4fn",
  "key8": "51JshtDDLMJ9ob9E5BJMqEp1ZtKiYA8mf79QbvsRn4zc77F9MqKzVKhtuY7QgrgvjP4h1SdhQZHZbAZt4gsvrmGJ",
  "key9": "48UBmQw7rEkqDHdvQm5bxuunAEp6LMtZsqbg8m3TRyjAVNRqDmK8NmJm348W5jyHaqtvznUVU8sFidowwESxp3HC",
  "key10": "X431jHHeisud94ib6K1EB2wDDMwgyXc1NPb69Pbg5o6E5URQLFht73RckkgRJYuakm6hN8ZYmyb52rYxaehsSV5",
  "key11": "23SbvzrVA8xg4x6Ds2JVzivmaypgdT6XM5KAxrWLzPwJQvUi7WspLZNvVKGestugGJaW87sDBHmNcGBsKUZ8GN9e",
  "key12": "4CGeaFc3p4d4uxApSW5YQmCR1S56pvi8V1Gu19kKtoYbDV9LiusKQqtZRa5qUPwdhxD2rYA8adQYScndvKbFFPHN",
  "key13": "65HaZe5PJmZH4z6orAdGdRGUSGK6b83GGk7sYvqE1p8fBnKyPNY6rqi6PrpiZhCWuzWhZwRsaZGk7N3SkXKQyY8z",
  "key14": "5Gj4QHyay3PscAm7QNKyueHg5cKG3Jtvpd8RTW8svv9JJTSmFCFM5VyZhbtgkdFmfttPNsYXrKRudTcxUn2EC5Z4",
  "key15": "2AstX42wVxbb4X6NGhzRnJkKcnyDXJZQrPzVw5ZyYjmjr9LUJj1qzg3KNe7FQ7tJ4Upy6z9e9Qk2LoETeiKYXpLa",
  "key16": "m1kURPZxnqrgPMd247si7rUr9hrWKC17GqTSwy9pzk6ZGoJzVCZfucQR9bYVhjXtEddGkUH76R1UYcYtfGBiVww",
  "key17": "HJtAmGCrGLA7x83h6VqrWr2at8dZACst6ar5EbCL9AJGbSKC8CMm6svMRWSrDE7kbiT84jHFw868iUBhiFcecZ4",
  "key18": "5dtfoHLvrSRoTv1CFPzKi4xaromVcjwizSfnhvA86UTbUDqj7rUH2cm1fcNkmBqaSr4A7iDUHiSZWG8sLEuVjnsJ",
  "key19": "4sifTVvNGATWUVkC5j5wQmEyadrFfkmHHcq3ZownGiat4KVuLZiMUViQz3Xo3TqoWdNjyVNUXji6crefhVH6VNJX",
  "key20": "4QhuvjQZLPztPvwHaTWCZBVkV9YNfKfvHyd49PTvvznc1w2bs1QPzpWeNxknMnnttqLELgpTje26Xna8wc8TXe9d",
  "key21": "4NsRtM69Z39DUSTCbhdx1LGVTnbRNFGfaNeWYXpoCrWZLHHzPJkA4JEW2DvYqLCFHFnEvyaTCPUWi4LuD1yRnrKG",
  "key22": "3wKBCsymX4JPSqRPFgKrQ7JwGhYh9gUPg8mJ7bv6YizNwfZ5sQGQGvpwmpsyY58vocC77FvTq8iHAoVi2ehnZVZc",
  "key23": "4gHp9sVbupTdqp2hY9S7f2hP5MeRbr9E5rSTaQpinV5DsdWFADkibhSGAfytsLd2NdvYAk5aCWLaE5RitdYj5LCU",
  "key24": "2TphKrfj5mZVTCMmcMzdnqUNbMNUqXC7R8P9EBxN3H32Jh8kjyHzJpw7rZkk2578rpHFYmzstDEF4QJu4eWZ28rf",
  "key25": "5TUxZNsa4CYmRv9FnQJ4PGQcLkQK9Ehfs2R9pYMSRo3vsf6aoyrhbipV2C2QeMkyxb8FrG3kGJuzy16ZtUtG3LRi",
  "key26": "5F1RXk2JFMPShqT4LVGjYdH7ZAKgKA3MAiezcy66NLWeb9yeXbUYkYy7to2HX6ozRUvikpfWiUL148AHUNbRdf6C",
  "key27": "2EYpREj2z32yPqcG1besusfjdWMws9ZkkJ9Awr6PExErpzXaKr1DaD5eYAGQuAVfsVD5hdU3AxnYmjPEu5EPMb3y",
  "key28": "2tSmQYFGzZpuA3vJQh6CzBBmFBaXd5WxfGJ9fpjNf7QsM9sDucCE3gEGwB13Vr3rjGHod7DEGZ9wPF9LsvNbhq2d",
  "key29": "4VJSwPer7XoH8EMcPPZJ7fBPBGhKc3Tm86TmeMSNL1mZ1Ax2EBpuYtjb5ymxpvWtpBa6rmDJTzwBUwo4mZgZye3L",
  "key30": "2DYAzVaJT46hdEDtw35V85jyBjhQpaKoc5irGG4PvutEDj9WKwtRxfKtCz1MTPKU7yfccSm4Nd49mUQawhx9V3vy",
  "key31": "5vAKY36ruDJERVPMcRNHRLrgeM8GpMwpxe1Y6RL69EFX7czgd1cHTKmnY3Y1aL2xscTSYPWhLbdumazYAtFKx7Cu",
  "key32": "2uCV4nHXqjm3sNB6uwQRD1HJa9JE2MNyW4kfn1LHAkNc4Ev4EpWU2a73hmVn5TNrtism6RnbhRvdv4BPFqFNwM3b",
  "key33": "5dhLW2P9LxaiZv7AHPAQtSTQNxY4KCRWSq6Doj9DWusEXWpaBuAu2n8N3JKuq4c5xBK7xAZ8JgkGJkEaJNkfMeug",
  "key34": "42YGFjtKNya2n3jxoZWvtAqM64FExyK2pcvk5zceLqaKsw8QveM4RY8GJL2Ka9o7BB6U2Z4LAyDkKLCApkyT61jH",
  "key35": "55zcjLEQ9SxjXcK33wjpjt7KyC65gt9uLxRjWC9rEkB1WgodoFXZjqfpWV2k2vyzgDX7LtfmcmfXnJsYRfQ8baQA",
  "key36": "gQzvtnt4xC2gVncSsDDHkbmTZX7EU56HoETdEUWQ57ehXr14g8cLYboEuKmRAqJjoWLCa4L62xj8t6QmnX1pxVt",
  "key37": "4NZWmW9hFSmAbrRAiL7JxEgGWS483fp6jgKxU15AioixZas4i2RqpEfo4YaqHb4CfsDEQdcmzEFwgYfNfTZJtdrw",
  "key38": "3n63ajV5RNxNt6pPoA31eY9PzX4M7NmZDhTxwQV67nZyH8n9jsefHtofKT36ky8HUzi8ovZTW4nJpRKuPRnXMooi",
  "key39": "51q8hS2FDGByJWrLqRfewHUvfXTeLegXjkmss8nQ8DqkUwu6U6Nm17YKdNszV2wdb7uzRhQYhNMpryC63QMcw3Lc",
  "key40": "29nEAX29BE7fZ32jPbFwe7a6TFWQr3j35XUm6aPNx7TmQv3fRYozprgbmhWKUtCRHDxsRxAxDsfxBg2sdpHGzCBX",
  "key41": "2ERtVpuuLmhkM5XJKLPaDuU1yEBXhPEhHxELRFXfxhP61brDF1JhX4JXBFy6vUfSRB19rnLyR2p55PAUeAsGx8GP",
  "key42": "4Mw1dsJchhRiXrAVdp6ZCATZuDj9jQ1KG37u7wXmhX6S6t6SbkEBZ7cWXM3m4VV5qjv7YPaEFT5S79Zu9g27ZUN3",
  "key43": "4kCHENsPZvFJMiHzvEA1ZcxkaSuhT6vAUdJmTx9at8pqt7rWen2bZKv6MVpfeDWBWmBFJ9f2T3JZNwFpdmA3q4Pq",
  "key44": "2rAvxwUsvLTgYLpzKPKEwFqS1Qivbm3LQ2Z4AqQiZgkRGaMoErXQjfPXnyTA1kZ2iCFps7aoXDUT1QwJcgaSLa8F",
  "key45": "2UK67hsuBdeuK2ondTRm1fFXfremahnyM4y5iNqRvof91aYgPpXrFSfoiSmLMNq5XCtJmfrFocoBwHzMwVumpeMz"
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
