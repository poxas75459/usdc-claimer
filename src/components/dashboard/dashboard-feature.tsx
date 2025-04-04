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
    "5ziRDp3xmEjPr47WNUeVVrd3WkshF6VQHjggSdUA8KRvSK1y6DeKA3xKZeQn99bn7q7Pv58c7ytHSuJ1NvNt3HZN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oWk1wvwsF11nEKjvXYuN9o1UZKz2SFWfrybDQ5Tg41afkKnnfUK8UPvtETwUVtFhcXS8DZ6E4WKUevTLFG8LYQF",
  "key1": "4G4cR6EkHTHWKpvUA5P4eXXeBpD6EQsunmZ58LUsiu5wEtrg6vEmWm71WbiTScyWQGp5pzB1goJse5FbhmZ4Q5B8",
  "key2": "5SneH3Tm5XQsv2AmFCetuFeNQPTti44vBz9dramDZ9fdp2kXxBjjT2eLW4S9z5YyVCjdsxv6xFAgZmvw85T1D1Zg",
  "key3": "24gnbZiAK12PoMFLqhzR8nDDosvvwmyZLsdT68q3vcyKcgw3xx3TzAehA89xR8khTjSwpYbUuvmupU8kw5YBCZxm",
  "key4": "5MME9aZ4UQf1MJZmAQgEZ1HnaUBZEg6GGcg7488fQGKoCVvA577kKZLqv8VjEniBVWSJeyhyPWxt3o3qW7zPhki1",
  "key5": "3wJq3VxDVFAFQtjt4C6yrewhvUxARLPnDC7zDqhSedbQ7nBSi4RViiaJXsNxMnuLRqBNghaiC9nB3MGu7XkWjyjy",
  "key6": "2U1xSCuqcudHTbDbwAm57VrfZfXGu4F4Rab74RfZBfTVg7Yw8BNF87377PXnAZNQkCi1Fj2xf5MjE2E8JwuqEDV3",
  "key7": "2VMpQ2Fk8Em95x3DweY4yCm3yUyNj7gpVE4JcEYoEXr3YoBP1XvYbAKvPo9bQ91DXTrFJQ8uwLsztZ9rR8Pxn5by",
  "key8": "MhEe2ua4Gi2CAjQNxpnmENqDwU2q675GFfeNmSGje1ZEDRraA9gm7cGTjdfCz6hULQEXHrcRSKAMVQyZWnzWYL8",
  "key9": "3fBNMTwKRHqjZ4dtv9UxQdAo3uuhjTBNQM8TLF7H7mdYEqXBAxnNBCicnDs3Beg4yF2AbPui4a1t7pB57p7E4xvw",
  "key10": "DVUEFxrsgwpTJ5ovs1qfC7qd4YMNfN5No2ASwc8py2TskoeFy3R5ccR6hLh2N4NDgZUNg3XD3R8zbjW6MAbLVS1",
  "key11": "35THYY7Wpbcyxh3VjT9nCLAoh5NEg3V3VVuWFhdijRiUJG8aAnP9o4PTWWEKJPLmPXLCv57qwSSrCZmdH5jWKQeC",
  "key12": "2HXoxa9GdhNY4vJ1ndCiY9gLD8syRc1757MGERCPpMc9Rzti6EMEG7fooVMLLxqk2jYJHpBzfRvXHqHzY1GdQHkH",
  "key13": "65Ln444CQt3LAbAGXGw4H3UFYi5TFWhjhX5u2xLmwTZ8wyCfxugzLnRYziwmTHPfE3UWwjPmUkSTFu6jgUcvxEkW",
  "key14": "3FawaiRd3YAmrTeVhbiSNxfKmqf7h1egJJLdnGG2udU24GukMamPtX5zK9W7LDAunRgPXvUsRxg6DwgXVUFZg2Qe",
  "key15": "BFipRVL7Zk4UBwzaedf841CN1evaJt9Lnf1KJdNRArLKYQgE6ZR6LmG71okf1hN35H9CjrmY13H8i1n6aL8PD2H",
  "key16": "yfZCxUzktTFhB1tnHwMiiTKtgGKeSqKZRQenNzydMsCuMoohhvGzvz2Rcdt5C6urgTUTWNy4442hzyWVhnh55Ph",
  "key17": "3StwKuLc7DamWjb9LXMjdAT2hxXMYnB9FRJMzqZZUXG5oBr11yR8ovKAoXfuLkPhkWSkWw5F43P4JtvJAj7eA815",
  "key18": "4Gqd6ff1APbQcdatoCxviivAeLCxXAAKdpcDbLPh3gPkatANK5gVbFAZNexd19aRwfRFcWi27SbyBkC5Wyymk8b",
  "key19": "SvCFNU9RZRLp1o2G1J3NCeWJLWwAmg8EDyovvmxBTuLvdzXciApTDvs4RfH1F2nCggArfHZj5ELjWe4grZKRR54",
  "key20": "5ojKoJeQditLwBwhpKgVaKAbf6mpLPtdfCERb1gg628XQ1QYjNpcTMhwjCZu9kpLxHjUxPVNWd6R3VQphN2ZW3ah",
  "key21": "5RJ3odrgDqPvJPCL8Ca42xVmrwpNJ8NRfyTtx4TLcMCWgcuNZht3jrixVK5DfXKZxXDUK72ggJPJ8BFyNfPRbbFB",
  "key22": "24g4wuyAeraQMND2pj79pRoY2qcHc95xLngqJuyP7xAAFXk6ADjosbLFwvsVzck24tJkQbuQBDjNgv4G6EXzjgTT",
  "key23": "2GvGmzEHPHY3QQMGEeCcbybzfdGHMq6sZWpb5Uo7PxXia8y9ZAAXDUDc7CDw1ceSE41NGLX66TDnYssx2EW7XpY2",
  "key24": "2eCZtN2HttRCV3E42xd2FvChCxzvrKk229map5rFpTWQo5ReQxcHAoBpfUFYAKGtKtZaeeWRBZ87ie7Kstgchi9n",
  "key25": "coyKV8AW1QvRhJfMzcRWMJUPVUscBhT32yzZQNgQ7RaiRonWd797VJXbXK957A9zXqYmq5TGgAXfDjox2nrCHRt",
  "key26": "3JHeWP5pWqbnGTjG4R2XbxdxjZvUDTXz8bESDHpsjTeNkXTBu7T3UNFrLjwCkARm2iEhTtkcjzyQJHwXr55uHqPx",
  "key27": "3cfixjWZEpPZZGSL9K1Z8HZSGQ62mo9qTdFp7Etak2WVybKeH9cKZueJ3bbh2FHoMBbPAUrthvDve6aDpp58qeku",
  "key28": "3V9dNqi5i5KCejhJApz6tPMrmZPYLQVXYi3j9ZD5HdD8RMKQNZfmZfusW7u9ZGwet5ia2KTRT5DdQXvW1RHFG7x7",
  "key29": "5iLHLbD9PmK2EVSYxsDsp1T4QPKb23JZ5jcW7tFsogXp6LvihDwEaEuaKWnEfmiwzA5xFFqD8nin4WXkN3EEmDHR",
  "key30": "47DyF6sb8FejJt4CUN1ZY3Nu7MqyccwLhrsZVmRsTzWHKjoVx2L4TqFRT4NqXMTzxw1oB2dQ47sAV824gaUjyPCD",
  "key31": "66j3o3UFyuWHGEoBpETkRFB4RTgbPkWYiBMwUKQjA5yUkmSdpMwJ1TyHwVe9S9r2Yo2vfEwSZvBCtSUPSrpVsHTP",
  "key32": "33qcmXjVmJqeHnFqceGMuQrC3YgZXrR9ndMbDf87U2Knq5krezhXruYqia8TQnhhVvrgLermeK7DLJm62qYHWvMF",
  "key33": "22SJsJvGeYTnVeaSr6JN7FN5eUg2bQtMbZU5KjLF7EBjFbdJrR8WwKE7f98LVPDUyC8RkAXXJBoV37rwbjvvBwPe",
  "key34": "55CjKmB1Y36s6jw5vm4acA1UAgSWgk9Yjt1Ar7WZVYmiL85V3mVw2Loazd6f4JhAkvjR5DXfF9rpu154J6jWGgnq",
  "key35": "4NzaNPjL81Q2pzzNWc7od2ioangWWBaA1S2jUwMxUChhfcC69dBTK5YLKHH1FbvVGKTRcYpyoA7dL6YkqkB3rofj",
  "key36": "4775q2WLofX6Wxcngy1xxHTw6bf16ksZi6FuknZmMKxs4VCDEwvm2CGHs2k3aB1m6k1qAZ5zMXb7CaP2sVPed87P",
  "key37": "5xoDvQ8fzkM9vHAfhnc7ykeP8LCp5eqAM7RzJyS9pCBXvZtRRAuqX7dycVQZdrTu4xtQECobouiyqaBeFDmuAAz1",
  "key38": "37Z8qFiwazyTMT2zBwynE5sDvgLpayWH2sFWugJPCjCyDJJRQ6SQbVgdnvRexKc3xD3tPKHdCrX6WXVTPnkRRicR"
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
