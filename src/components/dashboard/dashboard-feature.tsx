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
    "3ufwMP7STppEEsBcpTazda8mmMEmdbmRobq9jk5eBKkzm53WfFsLEg4QpjMnRWonm8TioP5i3RGNCZGVtgZicRHm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YiabMQYnGdkKfXJoW3ifYW5Z6q3UPtUXtss27qrPkHsDq82hcZz2ntE5HZsjRtREEmzqznm5zir2QsNRuit5Qm4",
  "key1": "8MpXnyjgQYHsY6aWBvYP6jxKYa3q7Cx2xjRMCjmXL5oetkJ562kSyHCAbJHbt2nAcn6r4DNrcQzoikjubjQW7GU",
  "key2": "4EubWoHoYUic6op9fkPViasQp4Gtp47emUhL1zHmKszmXqF8qf94oKts6ben7GQohsCMMKMzGhTD7Ev84sqkPHgC",
  "key3": "ysEb5vG8nC1PMJjUkHpG2HQHnT33HpYYM2z51NWpsRHCavW1BBMRwRzMDv6gpHXtP8sMZmCZVh1xSZyB1r72uPS",
  "key4": "4hjBTsLC3ruviczfAfwjbYnQgEPeLR4h9A1xeaqTWt2cFqf7gDfzyBGb1ALimYmvvfF21LVhuNLpwGbbRza2Gv8D",
  "key5": "5oM2TWj2tn9WWyYsNjmYeVPDBmfUGLkcMQZiHyADJ8PAGK7yU6xMaxbJiCiQyxegKf3rnEeMzsSPDj2LwVkrJosH",
  "key6": "3eAd2B5DzEQ79KVSSi9Xof664brhQDuC4FcEMFasPaBPQ7U8fZmZHGGiLrFANA2tnfh7kFGsSz8n9wxs8SR9AQd9",
  "key7": "tmH8xXYFQtTKHUNJffUEAxRSwv7PCn4yJBTRvNS8WUDCDzXKCr8BuCFxh7HJRVdf8rjy2h4ubYiTttbt9AB5Q5y",
  "key8": "htoH1qyicbLGA4r2o4qrHXu33DZBqYFCPP2vDWjsAPxTfauGataRqqzFsm683QZxGZwsu6UbGijeHSnWGMysfpg",
  "key9": "4YmwonZDxqZFXrPZ73pEHxJyj7Jxn7QWq9PSbS4gzTTjf6NCmhWYJvRQFsY2LKcdpgVsPX6LWwGccfe5tAQu4Htt",
  "key10": "5hah6VbUZW5ryuuyp53hGfdcqpYi5qwHnrx1FC8FoAN35KPUoFKhAWFP6zL5iekoQwFAPj8btrWYKgBRsujELT4t",
  "key11": "4pTw8W63mmZsYr9UhZFNm1cEAvmCWiraQK3j7fwgMuw8dBtK1oAVqz1JZefXTUjkCJvEngrjpqSJyR2QGTMx99dR",
  "key12": "2ZRDm4MyBhdLU9w5sDKmf7aG3fbcoFqAVnwHYv28Ybux7M8Fd431fbaZmnuC2tPpSujyrtRT5jFixUa7Hg8yo7GK",
  "key13": "3f1VvqpvKsA9LAtWEip1xqfQRYWj5puu7hFN9gTu3wkQxFjYaiMktbZq9CgFKDrXMDdAhY9TJMKTyJgA1i5bfPs4",
  "key14": "2eiPh48BwufkTVswsAWnnaTTA9DML8awnbHjETm3onSBNiD8NV4cN8CVo8wio8ycvc1M89ev13trnjvkZkLE2nkC",
  "key15": "szF3rzuCYyJ72koC1Pcs2Ed4WMnLCkzKDYPH8gXVsGnnzuzTdm7WPFc6H5iZKRbBd2vuzfKanNNH5kJqgrP75qD",
  "key16": "5wcXbCcCRkGjc6wgmzw4qCjffsAW4PU3817QB8HcPUeVL3sEucwbaA4VPp6tUUEKRyLJqXWLdHBiV2D5nfiMw6sc",
  "key17": "61gQJSCtnQqXSE2LuDY3SbkB7xs2XUapy91ERyDPYwY5T4ify4BMSxVAPdSSyjJ8D6PfK1JtD5htL1qEgFRQ1SpS",
  "key18": "4GRsQUrRLcFDbfYWgGtcoMiaje7wjGGbHwo2MThXUHbak9BsoHZCiu71pqcRYxLpc6Gfp1cnAG2m92ogUf1d4uFr",
  "key19": "M9i93risY6xEbQGVTn9Bgm9Axu9cW9Wvs2iW8x3Vx1qNiG23RGDZyHyMe4VWuzPMWhwraomWeqetsks3hbS1rM8",
  "key20": "MZy9GWuVUzmYdqj5kZV6Aw6GYJu9kBYiHZRH1HnXjTZLSWjZzm4dEwCmPwkgTkpt5eFiWr2Ah7iR2FDpVmp4rLu",
  "key21": "4pdziTd1HPqbiwtcR4JnfXkh3rnLG7EjHNQSYor1sjwxc8SA7ZovM3qxxF7vEZ4MuRKQBaWTXxvwL2ksRjidzwvi",
  "key22": "4aCEpcNxaXS4dHoUqoEPKNUf8RR3QGS8hEeYkBEfRjfLNWPrj1cYzhUBYb4SZtxbEWsDnChzBMucRULmAUrmm1HJ",
  "key23": "2ovNSQzgvQGW1qf3RQsyw1BP4CQ4zCA1N79jp2hbXJQJvtjkgs1zRCBx8z4VFmUaAaRGzWvt6VBpb5oc6DKZerE8",
  "key24": "28gYLoDyZEuVRGrF6pMkcCpTi1y7XCXFhHKTjMUuMkvVvCLveNrgFnKooYxEbzMTcwZfgrxkAT1rSZA2WjUv9ShR",
  "key25": "2ePd5XhhHBALRCkc4jv77nPyYcnEQo6iwGNFFumqBWHjiksQfg3Y8AjAaSRYagJm62umpD8UufUD3G9VbYQf9ZtH",
  "key26": "5AGoJSfV9ogc5UGLBiq1yEXPcqrzoTy6GaAq8L7o523ydfHo9xBRkUYf4WhEiyGAd53UjLLsu4sFtsKf1YCCyw8s",
  "key27": "Vzu96z2EZebpboVuUYW4HPRREKPjQQsjNwHRjs7hWtpyAt7ARRgBWp1dbixmAH8ZV3Bg34HT6QF94XxjXan7AK9",
  "key28": "62CdNJRubKZ54JBVuD3Du8s85h3PRzgWznLbWRsnDHbFci4RDiGhK84QJg7b7WmGL9Uxa83Wc661UMGkTXhatKTd",
  "key29": "2E9kYLfg7PATYFb1eETYe8ezvxzq8sQpaYFaVawRpo5mekF2XRhjMM1WDaxPzZVK4vcQrgDpBEMecuXtSMPiRrYK",
  "key30": "36xX3aukoC19KvQWTC9WaLjAFPeHqjUZRd4Yx9jpDTHm1Aozcf5BSvR5TCPyB3m3a728PeMku2HwAjc7EGWE8r6G",
  "key31": "5FShdFg6zxcvrAJSHNssL8Xu4nrekFDgUTEReLE6FYzQb2bup3M7ohZzY5mh412pUwrJZ1bEBZt8xFh3j4DAsaQ2",
  "key32": "rNnnRYhvY42nbSELsXPTuJs1BaKypv2js4zu6dZs1Cd2tjDwGjrVr9PzGo4TKt8XdHCoVB6ivqfh7g9Wyfk3Nbc",
  "key33": "wam3dAMWKC5AGS6uykdGptaCUST8Pqe3jZPeoJ5ctNgfeSt6Q1bY3CDi52pt7Kc2Kp2u2ppN1LryisjdhM9qwkR",
  "key34": "XyY85WKRkDyvtsHv6k6MTrX5JSrdmTftXuJrFGwfaaVDp6dAyKc3S5zJ7wkYJvB2RzZynxNFrDuBKhjeuMRW7FF",
  "key35": "2KuZWMuaes7a2TKLJFJKKJjaTNe7xRe9moGDyNnjvbWY4rRgi86J5ryRmjSEofTHEBCNJdpxwmthDdqn3ScACEy1",
  "key36": "56k8spq4M7jec2zJjyrH2pkpWcq24QidZDBYYk5yAKsVbudEVfnkwj9fw45V2F7PNruEnbhmRymb8GQJUp9kq6jX",
  "key37": "3zNmgeGio5Uzpk7KXbTg5zLZ5oioof5ttAM719RHC26hJkhuMFaLCJuayy3yGqmR2WB5behMFFzK2KxTyCjb5vN9",
  "key38": "63LwTYxHnBrochaDzyaBHtkbtZa1sQvq9YxVC9ni3nAcVgCKvy87K5d6nHUnHaNevK2cvAmDoFosGG2g6rh4nQa5",
  "key39": "3dN4WzBkZkAPTcsYWKmPp6bHchjroQEZ3XHt648KS5Fwm2Tmm3ZCXKmnxMqGYBt81mTvtkcNeFmx7AzapRHbMAkA",
  "key40": "hwBgMXguDBKfbka82w7qGzP3M2dpjJupDynoiwx8xoqtEyfSL5kFUYV8ohYAru8Ntiuq7EckB1XoK7d1oeHKFMk"
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
