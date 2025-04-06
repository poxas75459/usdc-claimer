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
    "2FuuKV7G8VPScDaYZiV8BAJZTfSkRvTkJR54i2pb43nX13zVTSt5Qhngy6xk1SCgwTLyMY7bSbifj9HzMbtPwhcn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28ZPJCGwkP8Zt7KUTYoYgz8nX6e14LbgYCHpc62NJRw3k7TsewrtgyAoxbwA2jnGR6tbfJ8uyfGJjvD7Z95BDZeZ",
  "key1": "XJqND2YpdNEVJ7VrNcUcqJa8LzSmpQbfcHDXQhhd2fvu6Pmdt4r7KU3doUYYmjawzqDtwsteDFMnr1PKYjsJYQt",
  "key2": "2FxxM6ui9MdmHjV3ajNErCG8hgwTFDDjFMfaTZJDFB5wzeftrLjaovQmp6XYMUtHKUN8bYgLdkdnL9gJJejkGHff",
  "key3": "2S5xd7v3QqqUemQdtPUseboFmeHks782pk9tkqgpcTQUR76Kr8qsHygeEr7xNUArPUKQjjuVLpsg1rJpqBkcjYnr",
  "key4": "5xSwvsz4UpdgXZVEp3fU4qgvQucCeB66bw6j5tRRoQiodUDtMGHeNjkVuU3ExDwBuRi4YzMLNTGtossJWpyaSgt9",
  "key5": "286nVYLB52sS5tTFa2HALV3Qqin5CodjUvAdRJDAR2srNCCh4FHBrYED3SkzgxXfRbJA817GfWz8XZYeYagz1BSS",
  "key6": "tHNBFhnVHb9S9xpsUxxZ4L3F3trBn4S6wzQRogZDkkDkisoS3yivnayVbTSQKBU875wRsAPae9DXxuEiWAjeygi",
  "key7": "3XHqEMtRmvfjTjtTbUWGjH8Vo5MpzJdQQUtDQGDRJgjAhpxjwtwpb6QNAZmKAKYj85z2r7kmuALPiYYbeq11RJp3",
  "key8": "45vRSBUDaqqnCnWMZfMyKv9GzyK4rJTcwASLZQzs7brV16YMudwaSzhpoZP89Ruv8J3NfrfVqhBBKPZUuzYUAL4P",
  "key9": "4wF1eKWS4CcGneYDbVNdNGf2Tawjy3HaJx3v9t3ykAFkRX23MNjxLkSVXNuGMz4m8uCivHPBzuH74KH27UcaVeV6",
  "key10": "3fnN3hj1XFNhr1s6ujkjPrq14zKCWgeJ3V3n53f28trwQ4JQxkW5BvkdD5jnVTttAM54kHfsC4Di9FGiE6VtLaaw",
  "key11": "35QoU9aT5vQRPHFhN1C5GTBhjKSKvTWYtjkB9RoRqqZqcSs6Gjqhm5Z1JRU2ZNibVquD65DFn27LwYLwbVJjQS5V",
  "key12": "Frs59PUyDHytFA78q7po47QRBtcWiAbjGS5xJaymTZwGAPiMxPeuyE1eR3X1iCFckthpLRdaFTpJWcKTQ8xtZY4",
  "key13": "3XsHDZ9spbFi4MS3ASuUjzM5nZKgiwNfLpT9dmbdjcVqbYpiU6wZXE8fufjRvUkoW4e86yZ8jQ6GuRRYfe2QC5UW",
  "key14": "Zm3nh2FouABNZcw43fUASNNxWZpotEzx2ELMrF6VRgySfC9RdU8NFicE3tbAYoh6rUNbjR6kXFw2xnqKizuoHVW",
  "key15": "4oYroytZTBVJJHphJbEizGCw9mCdgkPQrsw7ybMop6xKmc3fsJspQw7GWMqRzvwpPQV75XSGw7vYEdbAUGLhcxcQ",
  "key16": "bexmWfKGSGoyM7kgNbFd281nz2w7QLK8Dyo8r2LKxjfgtUgHQrbQH73baPEwD3eCniyJSfzMmpb29BiKCD5Nj6a",
  "key17": "3Efy1xFJ6rHXF65CwcPV1q1iDoxkSYZifFV7wCmM8socCHP2H46sMAGpDYrcJmZa9xEp1FHMqP14fSLrcUQrRf49",
  "key18": "32bvA34P3hVydst135RY43Kj7a8dz4xS7BwVGYtdfuS2bX9bWmRkgGSsQsDb6yCReWpwiP427booqAttEW7UrY7g",
  "key19": "NRGeuP8rnhMxUxWrHdKnmvMtrDsFgg63miCWFRcndeVabSHJBWEQZ1hjWWyuMXyvtf9hbxv1q11oyWrhFwcavNj",
  "key20": "4eqN9xMpcwdCbaGKw5HJU9kBzvtAJQd1yc5XFyqfYWDbinv27CYKuWR7SxKsWuPcaJwvgWPouo6JX8D1QxB7HCA2",
  "key21": "51zUtj7TsiwHhPYQQ2x2VJ8jcZP2dPC2zkq9Qdx765m5yB6cogNbHfVD4habZvQkuaXMYPmsGHtJSokKLiXc7N3C",
  "key22": "2Qn32f5vLGvYTjwCANK7LLhPJHvWoc81LBCwxL9hrxAt4yyQhP91aRUgDjf1q3jshUudmoMVe8ZTbfgiVcorrksP",
  "key23": "Wc8YxqQiimdoE7dk4tbL1cyBv4kWVEJBVGMrYLhCLGSPe89Ch7DNfkMupYqd5ubBHTysVPeYT8S9L17tqMHhfC3",
  "key24": "axwypGcWKVzXCVZrYwNaUnkdn6bBVzwCcuDmgRjkL3XyfhjwTW9w6b2mTrVSA7PHinEQMdDYzfTkGnMzeF4qx4R",
  "key25": "3HUGjzymp1XJnjtLvycpLzEENuT1HGSjwjgWNVHTwaTfv6ykD9ertqWipEArejTvnRL4cPB9XtzpHaiw88bjHjmH",
  "key26": "3Yovca2ppm845ueoBo9abjTT27qBHGmf38up6WV4inpdEJCnvcNe1mGt9ZdTrkM4fSgBdBfBcWjsEutoXCiTTGJ3",
  "key27": "3XnbyrXJbNx9y6sSggsKLD4kgw1dhHUgsBpzGCfuZ2TrFg9fXgT91HtM7B3i4985KDVSva8qwht5ERTFAzpDd3bZ",
  "key28": "44d6cx3n7pUok8ay6XU9bQSchVCCqMYQS4KFJi9QM9uKNX711mLbNApwG8PfZriFqjM4LheBZJcqPnGyPK95HbvY",
  "key29": "21nGw64JZoct7gqJiyRg7SNsmEoeepqEAmaQ8Tf5cLHyQV6r2afF23iz8AtfvgXqLfkroU31wFiB5wKhEChjU91A",
  "key30": "p9Lh4zK4SysPVKVdvDi4bFjPLtBoSNrtNmgskmKnL4S2CAkbEJ3SXnnR4LFtTaqsBmDbg2aLkLo6WZUjBMoVKpW",
  "key31": "3myUGH6TDC7ZmTL3tAg4XwQYMNduos9369GMUkC6Qw7NhqhostRZjCSxa3SnKDuv1QKKhg37v19uZ54fntF8ZaSP",
  "key32": "3oy3AR8vYui9X8p92pPaCsjjN9VgA1fWpr6anZSBpNiYSFX1W3a426FfHSq8VQkvSobGdfjcyxNN2EZAqrQ5gAhE"
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
