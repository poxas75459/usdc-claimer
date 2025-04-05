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
    "3YFKkXv83LccEsXzPb8E1B1Cwhk2ChNKfAiF6tEpdJA9mghtZeLyR4a9cFerFSzfSYXZokj7Q8C6f4WXDRfFmZGG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pQFaZUQVbsZwpfi5hjHgr65bByy2JGGiGZNkYC7Qeb7E1LeTB9sURqshmHuUFF46jT5xTugypoRHPBjG4WKyJdZ",
  "key1": "5f95Mo2mVRJ6ezdoGRuX1eJdTzgoR973bYdanQUZ7AQL7Rtb1Y9sCvJ7SJXsbJHtt7ninb1WqRxVtqdSyg8BTxar",
  "key2": "3ffsZz6criaoKyTnTCuwXDz7Y881BqZk33J39ohXStoyK5baG9W79NMpcxRQMewqtB5AdErNTzYbpDAaYFwq4Yms",
  "key3": "3BWdyUWm9PygfixKVhxKJBdmdNJQg8bVX2LF3TZR5hNy3mkkj787jo4kRjfLzyyWz53hqHTkV6Yd6R4f9cbjiYrx",
  "key4": "5G7DHv1M7CYUjAQ6y36TFiQS2cu4Ex21gwEiyJStjqyGTz1V3ZNBBo3KXGN8FErURcs4E8rUqyGQv1VhtoEYGmKG",
  "key5": "3T9HsvAkJ1ZbYnKRStqd8BpzdsjPbdYtK6WSnQp1n9SMvatZfdYtXoHU5BdWkX8s6bKX1kt1NjZHzq8eX5DSJ3YU",
  "key6": "3mNiFeXFCNu7ZgqefimVWVqazxev2bzmXy7VPEaSrAm3Do2stHZiui2mXACnPvxkiunaoHJCtkCbJgWQjdMPMdak",
  "key7": "YnrNNfEJJfsnLx5De6hrwt7ezKukVLppa89TRBtCFYtqHDFHQzpXMnxfZ5Lv8qSobwNGGmTLsrNYvFRzYHt1tMK",
  "key8": "2GdA6sBdUdm8q2THZMwv3oEi5udRyAmsMoV6AoHb9mzKLT359mUnu7DDBQ3sCXjYJMNsGd7bnaSdrZvy3kb62brt",
  "key9": "WgJJCtqTxnvdwS4JBM8d6NtaJervq32nUFhhWcgi94pDTruM7S9nLYndMXqsksj1Tko3HAKx9XfQ3K9foe2uyxR",
  "key10": "49JJ7yVjyPDBAsdmchjRmkc8KtJzezyQChWG86BCQpoRTjSeE43TsMq1CYrCrjDPe2xKAjtkgPJ9bYkJxEdmzBnG",
  "key11": "2DmLvLwKCNMrXJPXUfXjP9dC1KrvynNQG39pKWj8gXuvuxA62ptSZB2vsyHxL1NWS6MSoao8wZE2331fuyXZbEYQ",
  "key12": "5PUHS4H1fuTXhwpGCtHf1SRq5J5nfhJ2npBfHNLiJ4ELKkTWBzdBRg2zbhvMju9fZ69XHaKKyy8WZh3e65nrwzvb",
  "key13": "fAwco68QD9q7CRw8oa2tTtV1iWhU4naWwFR2YqL1yug9KWocp3v7zZwDP6TusbPYZVzL5zVSf6PsqsCpHhE2NGJ",
  "key14": "pAejNmuwa7r1uH9kBHpvfBSzHRcToFwkLAY9oqHiz45E6CasNj2B73mkfKFsDEv8DbWNVbRPnFX7TvTtftMKyvy",
  "key15": "4Ws6AopsWEg6H93QfUQmvJjX5n7qEYrBEtQyuzsr4hajyZEPvEiyFi2jX8F1JTGnRPZjuALfwdhWLQhG7psGPooq",
  "key16": "KrM4dSDttDgt6kafP9SS7PAVAgwzERPDEf61CErEM2EbyJmjuVRBVUbDCrwcmiwMt3BJGyGj9nWMoKTtFaaEAPB",
  "key17": "5kW31K5sEJv1rgodSrRczS7ajwF4Gquicq8nvo5FALjcai4Ucu1PdXb7u5zngifAE3zjpsafCeH3EhWdj5BMGA9B",
  "key18": "2h6Gv1KSGciMUYyU173ujeaEngo2XZnpHwDP9cHeJCcoBLEbgCXGfhzPPxnLwaN2k53BpySPqV8fKZWyacZUNbM4",
  "key19": "63gfAZB5Pi8BdQeRy7PjWb7DAzG3rRVMar2QUVJ1e3sBbccUG6hAegi2qePencuKsNEtZb4qx8soicu5deY2m4k3",
  "key20": "w3EGB5j9oAVvUtpsja2bW9bAxkwGTmjqm5eXmqjHmRC2ZuzwNnsSik8MqyiJLAtnbBRJo6cYJMR3GRKzR1xxUqw",
  "key21": "2PQVJB8YwbpZnNMemzVKv2hMHVpwGpnVitTbbUpGZnsKphPv6WXNZkmsemxbLf85Su2CAbZSTzagwvT4wDrKZNrx",
  "key22": "4QtoN86dNeuYAbGfrQNDXGiXghaYjEnHyZ57kYJT4jmULUzXWVgK8MawnLAdxdBp39h5ULmFAHLq7ZEvMCxap8q2",
  "key23": "4c274oYakHDknV5UUwsKgjwmDcycQCQ4pFYwvu77eD1USgd7n7sNBZ5yk8bhWasNYDR93YRxHqUCgodLZqnKnv3k",
  "key24": "4vN4YntMqjfuAq222vAS6U7BRx3A3sL3JJcLgFvUDnYR2tfYi4VEyqoJFbkiRbkEG7P2zNSLA6zw9q7RHjnu2xLS",
  "key25": "2Zce9mcKDWL2BQ2XhG6zcRKRev1z8Ujhpgw4jWHustEgWA5K8TSkfQ1qdnMpgefnLZySjcEBTqgmVJB4R96nv3kE",
  "key26": "d3YHwYtc3LouCoFkZAWhW8EtfivxunRB4cq6ennhNp5W35Viz8aWGzTRDrSaxvamApEDdS5LVdUjEWjRav2Z2j1",
  "key27": "5XukR8usE3GYQvkMG7o2nxjhuCZKMSGPwBxdrFfV9XokECMFH3rCDLBNmdcNCn25ocwozwpPNiCcBYraCVNGMsiG",
  "key28": "3sRqKKyo9XAPCFnxSx6YusRJZDTUEga5XFhQ8151Hk15bbv24vL6KFNNfGWxQPruHeQ3WCAxdsnJuP7HFpkmij3N",
  "key29": "4moYpUihyDiu7XPyoNTuL1UCd4BkVVRYa6QGF7onnN7PWML6xmeSnFipALHv2WERrU2fhTTxHVrkco3CbikoZh6L",
  "key30": "aPNn16acmHpRxXzHhHv7BCdmWTv1DBeiYMieH41oAfCwAdqQwsvhRJhnxV1T97QkuUZHuSS1a8hLK5j5TF9qnAU",
  "key31": "2v9DQZYUBDhw5ecWU8BbkKCtutvriDdpH8LbYpeLfR34bAgUma3RQsfp7SZVFJZcSxStygfqH9Jah5uyvuDKvCcX",
  "key32": "2xMoPgXV3HKsCYwG5brGwhfrykb49JGx8vRnad82WV81SH8spjvfzPh21P9rUQQAwreLAtKVLPvG5RfBDUvNyDGV",
  "key33": "3M4Frho6ERnvc9z5grN1RdTHPQQv4VPNRA1tiHM1C6KREvPSgX1HmRgAexn97Q6ToXTQRBGvwQtxrBWfn1Z1YxrL",
  "key34": "NQXx2eCyMovqJfJFtnWqskHpuUcZExViKa2CEdMji4ApFLFyrhqcP9uBu5wWh4oDjjPAJQUfLsuq615QKBYszve",
  "key35": "43sdY9H99WNhDRqS6i2ph1MRM5KUwSL9sG8rfBDaDh1zuHjLeFWeBPaEvkzo4MFppfytUwehB1mWDDZ6ornbh8WS",
  "key36": "62rj6E2dxZMxhDWBSuZbX1rC6pz3fqMGFTQmjhGwGpAMREbTXrYvenZ6DaHhKStGbgpFbtibwNHQmemYRZPELJoH"
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
