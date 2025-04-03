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
    "3Y56Qe3V73FuGygU4GBM9uUSXTUxfdCzpAvWFnxmHCXkWysZfGiE6v7syNip2D4AqQfr8ByrDW956otkZXpaYeBy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ya846ndpv3SX7jeLJGGVBz6tC9sfMnS1sfqHduiF6JCyz4ZTwavZMSe8Wr4qhvGn9He2FxXnvfsssj9Fn9Tyft7",
  "key1": "3FTrjySbztRr9B4EQaCjh3fDsdYSwkH8zKUjAm84eyfcdQh3mRKJU3FCNTy4rjfDqjV1SKSEc5JZXP9m4T8EitQF",
  "key2": "4rW11BphL52Y5bYR2SGgF2xRJoS6fS6crxbTystWvCGJPpSb44yPUXjnpdCLk2hy8uHVQntedPMNNxg4E9NBAucj",
  "key3": "4DXeSgE2D8FFQxCeZsSNF46dSXPJy1zPENS3YHFdmgeL7aMKVHxp8xwJjc6bcaGVjMFfkVSy4idXHWnoKW2g27te",
  "key4": "5zXyLj1ePQjXxigY168UdKq2HL6dak9EGYbjcLc7azrniHeDiXvNVQ2xD64Xm4wzMkXMeMKftdGF1KiNsUYGxrEn",
  "key5": "5X8M9nReeJgWJfD9Rs8mGZth6KWs19G6sHAJXzVXB6qLiT2XZ82maxdKJooboqgYFRiR9R3XaSQhLgkr3xHRQzi1",
  "key6": "3v1NJs4CTYANxKpjP1aQ1Zzw7Qfhv3m4JiYBPXaiWWvSnJBExqHAn27J9VUBQhHJDdNDi8YGUZu6JEdPjxavnfDb",
  "key7": "38oHWBBfEtHYZkBwLWhTXMr1P8RUgDksRfGJZ3YKhHr53bfBfHHekSeUVEPcfktdwpMtLzBUkMjjsQ2NGeyewncF",
  "key8": "48h55w8D7o47XTLPqJzRpLE1drc36Y4HcSnW2aiMmQvbwKHcgQbTwWAGLJY9KYJxDMPSzhXjfRmzoUzYjaapFA6R",
  "key9": "48jsEWyGqKjtXgdGiNU8wmsB91XqJFJAPBCxhMP5AeVuzAs8HHvD2L8s3foqx3dQdP4wA3aqvzZfmzY2K11tvUeT",
  "key10": "64zGDTjRVyzAahZSjMRWenLegLihzE6oxqRuRwiPo2YUM12gfWTs41xtZfuP5HndNx4k5WHWTWBiDZvVGYnMDc6d",
  "key11": "Dgovf11aZZ7ZQ46jPqmtHUzt3JGWcY1ggxPFZBykZroz6Shnvv5qqWb9TC5DZMRcYy1Enp6WxoMauq1s2PrZfuw",
  "key12": "59ks1evP6zNJfCfBhqzyxdCLwBkwnPSgXMeKKsUeymNY8nL3PDbVMrZSxZAExfr4scaojynrv2mEsYQzd5dVHmYB",
  "key13": "2JuDAeoFeYeX3dt3ZPPQ4i44pkRQNoeQBAaYUEHZm9pZwJ5nowjcysc6TQMR6cP5nEGHw34bLo2c2q35qbGWSDGP",
  "key14": "3C48b4y2MuxRyQgQvxBVD5fCM8DZfoufKsTP5mZc3UGVWEZw4tZAjtf1NStduJ6JDtnHk8uukqFBvW9eqcXSbqyP",
  "key15": "67cNajVmVE95ZNe9ZCK2aexQ8kRKKsGJvmJWiEpL5k1tf8puiqxcakkHTvsUXzuYtnxTNNJEsZ2SWwpssWM8NN6X",
  "key16": "5VvPwNwVYDpJAtRAiR5e5TUQTVufhjSrL9wRcnUEfQrAjyq23TqZD2zbwYJzKUqHEzfKSaQgXmhZp5xevQaktQYV",
  "key17": "TP5xfdCbDW2vtM82o2Tg2o9ZcSJf5Xnv2vfpjyUdiqj9Rp7wzLp6Xsxu6vY1xsP39sP7uWMSG8dcVeYD3DH9Juk",
  "key18": "3jUgNayM1t3b4Ws4Xmv7rHDVdZjDfYmG3KctK98RJLDqQhNHPqMUeDL9zMrqVvhb97G4srRn1BCWcuCaUeUG31q8",
  "key19": "2Z9QiTEbQg7CD2ah37cTkWnkG4m1Y24NfMmJWt56wF8fGtTMp2bXPrxVmaW2DX1kivsF6fjMCh7djCLpgfDT8yZR",
  "key20": "4eqRbAHT1cFQdZzhBQ233riQgzmg7tSjJqnSgyLixPcgkZ2FNZJJiwLfcL9T4MQrozFTCTz9zsvVGMZVckEbgfhE",
  "key21": "2hoiio1h7NH1tggEfgDCP5SNzBfh3nC1qaTneHbHov5wCmQq8Q7mpGKB1AuitpH4BpcSVU1v16Y69CpxtPkNjCjw",
  "key22": "62ehdZHtQo4Ridyvh4Y1xeZkTruDGRNwoid2VVxMZ3RVxgNevySucCSBLJYhkjVtvPQFUKHa9iKE6RMhgyE16AWo",
  "key23": "3VXYSmohudi5WyKXF69cMBsMXm6d5GpS7gD88iLkCFvRkivuy4spZvnNkf31MPpnDca5agh2JW3ymtmyN48Zeegu",
  "key24": "2iEAPya6VY8DkzF3otwqcJqa5AGZtAbuxSBNt4CQsxruMwaNmmGfBiZXgo3j6xVdSg9rt29QMRADTkSJzuCtxCGh",
  "key25": "4NaQRhZ7Dgpeay4TY73rF4uA9Pz9F3UPA4mEd6v6oemQGVX9ZnrYSvxrngffrP2sutmr36pGcEwar3SnFe72ZDb2",
  "key26": "4MPsYviLPborhefE4JUWjPTHSNVpAPj68LEPB8Q2iTcjMr2eAnoGLypzchhHLpfwCm4LZMrMqbCeZ6tQHGj1JWr2",
  "key27": "o5ZjqfLyky8v4LiaRg2XKnmkbdxcSdNzPBtnRQ5LD4o4hVp7w42h6W2mVJPkFMkq7v7k5nTQhcB8aKN2tiJUtx9",
  "key28": "2UPPVxzQvXggKbFy93o8qVuXoK3ayfPaqfcTexqzLZMkMBTxxWdR8cK3vZjpq4YYP3yj11iuR2wzjJbHV2SWyzDF",
  "key29": "2ebrRuhodC33QG2HgXKSsNzeGNgsuzcGzquGKztcGqN9n45sUukxYmQeRuojujHSNLr7ZM4fG2nz5QXudV18AXZn",
  "key30": "LBFXPQn95LJqmWL1ftAdDbYs3BE7wJXKrr6K9K9wQnR7nvpCiaAfu5cAx1eiqcrjAwmXwFRo9PuQWsuwxw7PvM9",
  "key31": "2vwssMgBVWjYd4euD7hhDLHxEwFVFVCSW736QJwivJ8kPXGBcYawKovVbMZZDE57xCoA2uH2spKpAXgAvf6kS9kp",
  "key32": "4AVYCkdbp6XHNgn3xfAtc1aj13WPvVK3WUd3RMAoxYGgw8SY8d9sa1HPzMYQs2kTCZaht9j6JTttHVsNZU71Texz",
  "key33": "5YkLWMktRHqNsfymSAyfziQvz97v4pRdCsfiH7JBtCZMqHCviinv4rKZBxqkht8rKR6HLtMAVcE8ED7gqGmvvq1B",
  "key34": "3Gc1c7vAWY1BEkmPK9fNBcvsLCsWQA8PFu4BcRR4mkGYgNZhpu8reQXFK5efc5nJJHas6NrxsmuPfHkv65D43QE9",
  "key35": "5GSP5yoL2QMpy8GK8MQK4uRrKrZd5N3o2ToMc8rmokubz5ocE3vkFDGNu66tnTcra99zZdbPoMZweRy4EUHYfWzM",
  "key36": "5cTATU97hww3QsajbcVnKzmVaHJxRe44zTbDXoBXpfbyhUYEyB1CZk7YrjsXPdjHq6HkJ4DKqoFRaffnD56pBg2Z",
  "key37": "2ibegc6Z7Jbnf9c9shiKWDR8J9CQ7qPg9rJnyTRyCoEz8KuVom5KqNRuwPxG4FbAkraEspuGTDJoxgEV41PauuKw",
  "key38": "5U8UqbikkVwxUcGK8uJqTWPnf3fxwSVSG5Pxi7TwSDMkuBMak49KPQC9xKPHFAE2USorWMitGXbKX7DibrdLyr3W",
  "key39": "22RfBWiMJq4WmDFqEBp8RrryujJsMLsHbCRBMHDahqFcctZ5VTkN3TBhQqK73NijwmLesmkQ2Aqzd35nzMSmZ1ha"
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
