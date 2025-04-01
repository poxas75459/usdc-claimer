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
    "5EvC1qDkMtiRCL7Z3yFVi7Gtn6th1U7VjRPs79yPeca8rsu5oSpS7jE3ppFrXcFQWajdR6T34TNBSKqn9RH9oJRW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gUX71xtK1zT2VnHH4fjXzrKKe26ZZsDMhTnT8EswBkNGZku6wG7YXFpUpSxYJhEh4GZm6FsQr2TMrw1tdinf3FF",
  "key1": "4mybDESMrskc8AkENHX74QPu3TpoHBoHL85KuJoTVVqWRVRuuAgX2zo9DQYi58wHko7etz8ekvdSSctY5AW5aP49",
  "key2": "675TWBqP5nCGsqQPcSy8cswEtbzBx8xxQWFwSh4M7bNKgv29HMCfxrXRn3VX5qp1rCji3owNDMsoYYfepDysXHkL",
  "key3": "31sWHgRPAaPCrbMrFnh5yXo6SBhh2AJxktLDVMUh6KZ8ULLee87jnqiQfNVsB8Ew7bVWi4eGR2rJR9kuNbsRgA1C",
  "key4": "3nneXp2kBa8UrZtVj96VrViXgphoemuhwFdoB2QvaZDjVtGCUVKkg99Qws3zaz67oVAmuxpjUumUrokrqrCGYNjC",
  "key5": "33ESuzsWJDeztFSv7hh3w2pjRxKUv7z1TyMBa7LSNsqL2pD5o3vwGRtUPwJU8Rx46G7KFkyHPB2knwZBJUL23rMV",
  "key6": "3so4ABNBckWaqGE2nWLQFu53UUwNDMzwFjQ9TEuDjrCJjynY62kXaQPj9V88DRfE2R7Ki8xHEnaryGbvajpsBtZh",
  "key7": "54sdJQW4kQea9c5agV8AxxZCehwVGQGRdxeHQsrVJhNME9Bq3ZKWRo412JNBsqqMDifKM2qpMavwcqzQtyeNdLDX",
  "key8": "f6KxDoygo4vw3Ek6gTyju7rg1fkmB7dGNR9rfai7KQe2BULBUeVxmmVV1aqiMQPUJm2xMRydqeVj1G47q5U8aTX",
  "key9": "3svzPbTyESSJAXNf4UA5tKzNS1qZ61iVL1ghWKFVY6WSJ3vJfCHDijAv8DjPTpF7VPumedY393MZsFxrTgaTg8H1",
  "key10": "4aUS8KcgNAAfaGMVpUhux7nYHu2B5H64X8MSRAU6ci5xbJqTc9kZ94SZZH8jgRCJtRKyzTeyLwWcRhcdwDnRGaJ4",
  "key11": "5xVL8vZbkubqw41ZnQxRQhsRDC56VL3Q7Q8Zdj6aCgst4bzqDjGRXdyqXmGU3x3VH2Hd6BMucXJkmXjRQNHuTZAG",
  "key12": "3e1FJQNyw48CnyAhdfn7JhaZsYD31Hshg96HqTKb632RNdHT1TuauPS2mPhRv1JfKxGumwptrNrB4StxuvqwMnMy",
  "key13": "35yfh2X1Fe3EZWioX5zKZbZpQUGWPsGF9giNkvERnBLCaJCAZZdpavQ2GBcXLBQNabbcbrxjH6Xbh2WH6Mnj4GXm",
  "key14": "2ws2JEZR5vaNnqho7kSBn9HVSYWNynrLsxsA4AwwAwLrQNkwrQ2nPNb17NrxtZtdFZXTmSUhXMQMTbqEiHG5H81B",
  "key15": "3BRudfdW3ZA2fB6qeu2AzGCqqiow8wm1o5EctwvsNPYJtpbEjdQ3xHMAiBGKRdB8m6YfjsubhpBrrq65Z2LP1wDY",
  "key16": "5ijs2gEVmDYY2zELAVARPHFMucYfRYQGHMX2MjokD4JGgyZkPBNV2byKgz4npWfEuJhr8o1CBhjuDiYUTPKBGDjB",
  "key17": "n9R4VoH5XfisdPq6n61thK1QpzbrD9ngE8tP6vxt92Hk7wgHXPa92jPYuKQGLMMNgYbmHdnfFA54j9q988N6opL",
  "key18": "3ux6urpKicJUDb66EZ3yAByDNgcZfvQpPjtKenR8PvdMKpAs2UVydfbyXdwvQzu1CCSTDgNeDHb4gbPUrkDyQVau",
  "key19": "5EsajdpfTwJzYvwvdBJrmmtkp6ba2qDErgMoMtm1di8p2mUaWaEbBsTRtqtgrzm65Mm1PC7TFM3U9SJmbTv8XNSu",
  "key20": "25M3rrUAcXjzEk4gGUNFHvyzqbSiR41gg7364jrVJKuTgSTWDqAQhAPZyxAQwhpH1F9bp35zAAp7pfWWSUxUkwaT",
  "key21": "4i48SUi4u56FJadxPWh61U61srYtiba7MXejkG4VaTdW31iTB6HyVsDWB1AuTYDDxJAsMpQEMBpLKbKJy5AWmA5S",
  "key22": "cQsFjVuRj8VPWBZh6iQVMsAcpDGEV38Zevvnpbp6TYQXivnpYTt8ivrC6GS3dJX9eDBDQh6oGAEN7sMcxuh4vdj",
  "key23": "5YTiZDceEbRvALubekb23yiDNYwz2ZJ4pHjHzHx8MRDe4AdcFVaQPpxnCZWjxHZiHnWa7P9oqwPnbuVMie6LmiEV",
  "key24": "3SWTQEKvoqFnjFp6ugBGZ8p4ySFJ5DfkCnPAZGhwuQjY43TmPPwH4QuYEEcfhmL4qdKrpkpyhCQeuAewq1Cb1cQL",
  "key25": "X6qR5hZt3i9W9h565c8d1q42vWZ4MfaebZ7MvDMswyhREgPbpHxRfw2ir5SeW55cBjXh2qTyEgKQrYhufjdTPsU",
  "key26": "rs5YoF4xsW2U3WBKsBjLgkx9Zio12T5sNfY9uUGEJrW4pvtrBh98e29pJZ2jS63649eXv6qPWW9f9YnoS3yT3Z9",
  "key27": "wcedaWzMfMUpK2LaZRkMZBhzkMyjGBcg6SPv7dkYrM1C5mEtBzAXESi6EvZZ1KretELwQTLBGgdqe3NyeK9SxZh",
  "key28": "rmsyHwgosTWvbjnGxJdyYG74GWuM9BMs4qQYSBp6jmafaJAyppVUQrfzxCar3isMrTzY1UoypCtKSj6ydkU2stA",
  "key29": "5VdxMyYfqAsx8dgGXqZCWEQLcxy9WPempNzs27b69Ey285Re9eL97BmZptzVqzHRXpvg3Dh2PEchaeRFEbdFJfBJ",
  "key30": "2UuYRhLhpSdV6vx48H2y9MeaQWzdh7nJrcgA3rGkxKkuAbPKSwJ7GDpHqGWB8FLuBzYa6p3bYznYnynWVNb1g6RL"
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
