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
    "4Dtfv25VnHVr9H5x8qtAAo8zw2iFRrWZSNj3jRPKcCL2fba5xvAppQoZZwPYaTWQ2KBFTkfC29wcF6kLXnnQKVZH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hPmheUV2vTYUivPhN7XV8fJfYgmdeyGJjazBHM5nJ8hdPCo1xS394VWuira9P6WZZATu4adLN5GnHrUAB8ddjsn",
  "key1": "4Y3Ehis9daYEkGVErVA1jSiwuCG5o8tUqj4Pbne7navi8t8397kCGrRJFrjXPtMuzdmrsFxQ6Yy2A7LxHVoX3E2H",
  "key2": "j5yKCHRzLaBVWmLJ7m8pchG1CG5y62UNFUbMviBbpYC1RanccAUv47Tkawc74eXsopbHcGGnPzPabFWMiTsjPiT",
  "key3": "3STMvH9kmG987uJLjAz1nNVfrX1E86BjFw1rrBMGaR6XELBHemqVbqgu6rURvaYin9pVFAEtFbNkL5K4WSaRGQFK",
  "key4": "2Vo5DfTrYfv1HJHda7f4Fct5HGmXEBEBLBU4aijobGhozAjYtBibwHBmHafkHPq6sk4ybs6dPpWsL8j9NaNNM4t4",
  "key5": "2QzDAQ4Z22CRbjR9LhCoCcuViYaCYDzhE5KqPjtHW42zHDGPcH8nXHgRgFbEmeA2ezxgdkxBV2mj5JXkom8iaxo4",
  "key6": "3rAbrCkXFeG9oeRwUzhQKzR3PHEXbpTYuEQVjYpUdJvNc7BFLUfAFQMMze5FsbiiRcUW6djYVceePhmNpQ7D6GDC",
  "key7": "5ueTDpJeeLJAdeBfBEkMdvzU1iveCY7z9z2Ecsrki3bdrRcKwpXeRZxcWQhosPXPvYR9ubSyrc8DmsxgG21q9M2y",
  "key8": "4HKMuXPpzuuACWSABWzFNmNSVzJ8MUP9bwapUCRMbedFgi4kDPq896J96JZuW1mw6nPAeMQabseL4sVoPtGPb8Mr",
  "key9": "3m1KR7JBxGXReRb6ZFXWSfdwwfRawoU2NRXNAJrTh32DBTZ8NCRtLRMYEyCJDqxSnsWuLqiy8iBtg8wyxuBTBdwJ",
  "key10": "3rbPG8F7Cmb3PmMU7rm7WXCDRpckac7ydCb3f4DXBA8onZCdGPjTNQToi7qsaJinFCmWvs4aCGqQiXNVEQKUtMLC",
  "key11": "2MtV8diTtJ3AiSpsJfBCUYTCFTny1SEu13fsrYEbnHS9VHsUn5dLM4myXcsSJ9NXGfV7XPGgKqDPdvuRfDdiThH1",
  "key12": "64XvQqpwvxBiz6mE8yGmzVYtx5TMMWiqeZ32iihw4ChgfaSypbx23y4a8DFzetnVWNHCB1zEAAuMNnRTVSDjdJPk",
  "key13": "51pv5oa8gT7ALzQkMcNhjtMP4CaZ4XJhZZGQHJfL9yAVmcwFGPMZmtLKFaSGBmZGUzDaLqnsiwMK5hvrxQtWeoWC",
  "key14": "46HV9DagZoAsWnpELcEEri6ohtAQyvCdzgmBQRG1L4rfKjakyggrKFfvErhRyupvQkrRsTeUbvvXGBSZqKAG3VG1",
  "key15": "46g8EAm47SKqhe3coddVUV6EuLo9nR24JeN76kLTwvnHnNrShRmKHUdAttYjrmvD1CBdTfuTV2Tw4oJE94KW33pR",
  "key16": "4gT7Kct1BTvYeu6i22D1b2YWBTvLZM9Yx4448wmpPhAHRxm2UWmmsaJjR881XyCTRB82F5Xc1pGqQqBzKdUXQZ4E",
  "key17": "5v9PQehB26ZYEbfZzuKBMvshrNBF6rXcEFxYNuHyZeU5xy1HFoPHLsxJtBFnypDzFoLw8NPGssr5gQPnUZ2QYPCP",
  "key18": "2Ftgqpsyo3XqA8VqPDzCYzEGYGfDF674fUk2M3QXBwGCK1LsonnajAvNW2ATzuUScjttszBpvrUj7o9cYGQ4hAaz",
  "key19": "2TvYJXqK8tZ4MtC37RNuzvJ6b3YtBzQcCNMNnxVkXVNrJCAjoBsxZR1e9CKBkSnFoGpxQ2pqLh8khrMs8WUawGiz",
  "key20": "2Pss7aV7uuq1QA6dhc4M4guUFrAa5hvQpv81tNyw6xhaVc8a9eJytzx1ijKksr8zxXHGY2fnp2PNS1e4o7Umza6S",
  "key21": "5YgdturbGVrNVEMGpe673PLYNNdzLriUMwAMu1xdYqBvCnquNt97XoGHPN8xEiiK5n5spFiYgL5DP2P8Hpok9s1S",
  "key22": "pXX1j1CgM4fXJRdyVVSyra7fqWKvRuLWY3gq3gBMaMZwAFT8Zj3NyDoa1Qri9nUD6cNKkXiuiioeG9GDGySQkWJ",
  "key23": "LNUDbFoJ6NXbFGi5ScMK2EiGuU3MhfvhQc29jj7mLKx6LaVzL29c4a1xyZj6wPCuUkAwUCJMYPnbUHr1hBgLybW",
  "key24": "mLK97EBeq2We2jgATzJ54LjBW9d1EakHqZjML6YcKrcSVZRJrxrMvo2BN4P7aC5zy3oZ5371wdD5NMo4z2TmQSb",
  "key25": "JBQofnaAHhUUzHwLXrABAUdQhwSJKTxo1zMVk636bB9e4p8gSEcLGqZwEwz2dQavnamj2fPV4URpmeSXNgXyv8H",
  "key26": "4x9sTrvrWvwMvYjc2KnAwaZ3EZjBpRVt3Bq8Hakwa2bGw3KwDxKuyvSq2GfBwDBL7UDcwZz4E83xUSxCembr88o3",
  "key27": "5gvYMuvYMFppxbcfZy216boeWxg6ALipX8ZCB4ghnQL3KY22nrBrQxgprspBFaaZyd3re8PcQd8pVFExDoqA6Mxa",
  "key28": "4MpPusfP8Roayu9cWLyAWvpBZuHh7c4PQVxFnNCAnJ9RWVZgiEPDDsDH5bb4HKUgEiECqGK24rXCo1b1FLCWiq6j",
  "key29": "5kRBwEao9sT8k4e2oJEidArGkPxzD1nao6meCM7FdXh442hUTdJaXzqWG3NtfDUUCpWhXj5hgYmuTVceV6x3tZZ2",
  "key30": "3pKsxaRAttgybvjPDy6PLjHEKNofBMvnqsC9mJi2hR5GTkitsvNgiCjuvNPYjcFBiyGrn738keT1zkuMw6PVu6Uw",
  "key31": "eNFePZQQt6SATzNhiX1x6VC2RvbLyVeCdT97oUd4QhWwaBKLXyZhFb26DpZP1muuvdpnygPraRR23FJsNfi1oLg",
  "key32": "2zEMT3ne9K4QaW2rzqx6J5RHc125uYo2Qp5HwkqNDTX8z14qWFY4MtdnD1xMU8wZKq8VJg9U3bLRVVUm4vrp4TRA",
  "key33": "3tmK23L1egGUgkSPZncQn5TrXXeEHUb5TpTZNRSKbb3vZpnCi6frRSCWw9aYKmgEf14x9ALocSfi7GHc8DttmGDp",
  "key34": "kS2T5UJsdvFeXTsC7FoQ2ZTDHEAD88QP8cJ2JQeFJV6pPdBdVR97C3zbnztjRTS6AdmWaanA4Sw1C5NF4cA3MSt",
  "key35": "4cpLGLtXveUXYTwAfgQGqjSsZLZZ5K2mtCgGgwx9aNg3HiDwkDjPzFMxSBr3fvivLY1sfWZYp6dHzqiXqo3jdd8j",
  "key36": "5T5TcUUqrhp35PneL395zdWdAqfdfneu1P5cwCakahyFy6tWzcBX1227u2VUXERggiZNovZg76W563JgTVMCVjX9",
  "key37": "5DCHkg82S82NdpxHq9HtLSUx8PWSdJ4x3RZUxiw7AQzJqiUrGASx2Zvxi1B78PUFTGahMqdCUW7MUjShpcF5f8Gv",
  "key38": "2egTus6RbExtkMGMoccQu8CUcNfutdYPHGsgUSAVm6fxHAh6LkBvRo3JdDGFoVC44pLVGJw6birWvpwRhDGetXC5"
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
