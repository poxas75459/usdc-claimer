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
    "2mCFn93xwS5727q84NivE71Q1QUVJ3qnPmPPP5HSRepbfqBYkuBBaxCbTZrGq1v8bcEA872sLK4ZnESr8h1HrrjP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZehbpFHzxnoa4dUz8gpzytwYWYePgR84AMMUUbZstkuQ2wR14FJF1yy22UWH1CSiVSAjRtvtfGR8m3z1bwiHFmj",
  "key1": "3VasJJzDyyGJLUrgNDqpLoakemW186HeaZw8xpQh7dLKD1QCP2iwxFAyPjJQd59GCfKv2LHgZjjs89TqzAmam1oZ",
  "key2": "5ZHL9ZjmPi1agUjvkbt4aaTnGvKXq1q2gEYuAeVjvDQEwCam3gQZKnneGkvNfUHP6g4xUomKNaL8dRRFSvKqjJMN",
  "key3": "4EAeegKM36cGbujVyYWj17caDEEsASdpBWFitfVunVQUfXHFH7EqSwravKAPfJuKTMGzaDtzvat9gUFTeZhXnGGj",
  "key4": "1N61nsetQMwN2gbyj1yBHxpmF7xCgb2TDBxZ1HxaGNhmmo3zmaET1VMWd6GPxsmqQDVButeFBhnGxDRg5xskitB",
  "key5": "5UzEWqGsCjG7sX9cVBs35iaUEU1iv2qwQUC9Ae1cB5YLkhD9hwGxhEGLyCfSn3Qo9CiRgUQyfQ7zCtDJeGgiZLyx",
  "key6": "4FPYSiar6RQeG1r3veUKuejSHQwYNkEddKMPEmxMGDFydBneEhGTzCNqNfeUPk2Ltuaz2KvqTMTQhjGvW7ajwAT1",
  "key7": "3rPLpSW7XKpcEb8EG7PiyABhggBjsRdfUxh4o77jd75SqDKwcmXsdokrp8TciHb8xChDyBHB9YvKqyjwEwitxjzV",
  "key8": "4zFqi5cY35ZL6SScAdt4TnpVLoAMYhdp9xhYyD9h7TDeYMpD5u5PSBeHBjsbWd8NbSK7ThmUdndca6JnrJhbXTVj",
  "key9": "3KcTET5vv94rqqHjxiXDyPTSKpGtH8i2VvKwVMxZdBgtiAsbGkGnqwnvMtiUxihT7HU7qcSnY1vN2VCiiZbsqv8P",
  "key10": "2LyeJxS19Cm6wm2c1YdPB2435d5Kofzdc9ae6w1mEGnCf8Bcy4iajfQjo4ikAMTaLtmBNVjoZVMUFj2Ppeg2W7K1",
  "key11": "D8ysd3pEXGXVB4xTV94NcMjj5vA7vkfajh5ZTSW3uNeU1ULDrqBdRGmTHbTVAjJPPgKekNGmQPsSwTcr2mqsvUe",
  "key12": "3SYFNozdkWKt6ZCmKu2NGToo9v3X3qrwD1y9KKer6ECRPUiEPyNVQKcm1DYTUossyZcKJLp7phF5FfXDs6q59wfW",
  "key13": "s2YKYmYGjJeBehWSCo31Cw5mS8wQCwy17LigRNC9jjtGLrYk2buoJkLQYjTPyTerS3Z3c37rGDf4dHNAfLhrQVc",
  "key14": "2YvdrdSrfdjuDyaPxjGBmcV3LYo9etjHTvmnpjE5p1BrCLBZDqE1z7JYF2seMGyJnvTBcQsSXt4X2fUeYedHmim7",
  "key15": "3rpWUUvd28Crq2QQEuXiDrBPQQB2KouEAMTuFh4DrzUbL48YywMXr5BKcSTPHm1fF3kD8BLbrDRrFV86nW7LKJGh",
  "key16": "4RsPV4u9LVmwKBVmUNrjkhy4gDoPTNqd9dKaPi27QVSCeqyhDe1qeSN4yxEBPQutezBj2S6MJMrFdjygKWzLhPw1",
  "key17": "55LYZGvo1hzR6qKur5g2VeADT7CH7L9JUpdjtA3jttsvxjjx2Kk8Thw9NsDbSWBNa9WewWmKiTBS1wQpfvvvUuuW",
  "key18": "4hnmDJ36LCox3QvZhkqrtfWa6GRMuJaroUWsQLy3kZxqyGfrAs6fZSje7sb9XfxEY7jwqfG4RFfyrwtuxkTBKKF3",
  "key19": "4NxBujhJ9ogqoyfNUCWLxupDbwL4i5kcAsXBotikDsd4agKUTVNs2F3moXJqZf9ZWEBcwoKbisqBLuwQzMekkUsJ",
  "key20": "322Pnsm73QmkKZ67oR65Y8BBC1V3ZgcWaVRhCBBv3KNytEwmbdfBKeVBGKGWdjhgyxJPR9cNpVmwZSU7EDb4AF6H",
  "key21": "5vN849unqj5P8f5Z7d8EyQM2vPypuVAyWJmsna4N2ae4JqmSbN3ghvQG2nh6SDusj3Gx7b5PqMsWFHMA5rEhq6K5",
  "key22": "4UWKHi3CH7pcwdYXYsNLTyRkAdeGG7CM45reWBQiqSvz7gaMQnS5rQsQS1sksfh5EzmDm4Eh8LtMFFRCXzeeeUdR",
  "key23": "3PYqswnvCAfFpcDdYwt1U7NrYfua2spv7YTDrinANKmyMid3yB96kEyxToybvDiRwA84JN1f11xGhH4J6ZJj9eRP",
  "key24": "8LBa3xMnS1twu8chbtBTsFPAuFBQLHhq1i1uq7F2HPMaLuBPQ3Dpr1dHbpeN9PT7cJDnLVFhj2WrRjTpNFhDNJB",
  "key25": "yj9bxDNmd26hApFESrLiArjygum7zCRV3jJER6ZgacT5uQUMTMNPA6MSrtwNFEmb2QYeFUAmcnx5Zht6cozZEh1",
  "key26": "3T6tcsRFBups9XymzRo6fY7CtxH3GnkrKHW88zLZxvDUrM3mWSkfSgZfTq9E7PJzSx8tfYmCpxw7brwq4NXJzVfJ",
  "key27": "P7nDzm1NvbAZ8LHckbcXnqCkpdk5BxaWb5EtDZutmGL4wHP2MB6DFCLhebMNfQAti6RUYd1vUPUc5MLhbN1g39L",
  "key28": "2b5Hi57D8MV42KWiPDbwQCgTdRvNstzAxC1rALm7A97mWQN7tMeBk9zUe7M5aLz74PXWVSty5vpq7xnb7HKsBBWf",
  "key29": "532qb4QN1HpJRPvobd3g5AD2VtDsouHfueXZL9jd2Yi9uZ2vwpHwbDNpvdbPju1cpc859sR6RsR6vsb88bpAQzM5",
  "key30": "3JD75R8UkXbNHAet6LEw6WrgdgjxHZiJPcqptQV3G6apVP61zLz9PT252Ci1i7edLojZ3FKogYzQwWk23C4ynWyg",
  "key31": "4vgMJdTWNViaBXH5P8Cp3jBCcnorQfLAF3fUJCHk43SgGtRAHgtH7TCDt9WTM5BnzWKKAKhvmpfyxtQP61T2Q9uH",
  "key32": "2KmW1zsrebRGLysWov5tRA8GpkM4ndySgRaWaAKfan7LBQ5Hbgd9ArU4sc9HUouS74GCj8s33PUr3R9M7vUQ2tUL",
  "key33": "4md8SaRwhVdNQ2VZMG82WeGoYqyoWXSRaeHGPJLU7v5NsF13pQiHBB7uhgSeysARQkfGqaxwg4GYwax8QMNfZiu2",
  "key34": "2NFWJHw9qcu6FGnBCRw9nujdaab1cL3e3DibXhsrkPJmT7WjDeMhDRVp3g79F54aJmYwxZxVerE57LF4eQMm5UTY",
  "key35": "4jpF9NwfLnvFuUjPD7WvXhyfT4VVFn9posAw9HjdqQVvDCDrEBEhgASaUopzZT8MEd6RY9xRqWTKQFfz5SVuKUSv",
  "key36": "2CDWdQVCUGvA8VJbqWSFhWxeNi6uM35KRqtrzaN4AGdpkP9LED5ak2PqHoaXWnW3MTHeKRSHrRkm9NwEX8sYCLiR",
  "key37": "fZEgY3GNU52rgv1rxRSWf9r4Q2GhCjE4j2nYiGXw9PxPDDAfoS3zKWMmsTDzqns28Nd2AdLpQeViewd3wBo1jhp",
  "key38": "3AoWSPz4d5eKR9HTwmdaaoFbgbr7yezq89myZAf6x54rma3DPgFkrvRtxWSKP7fShSH91mFoapJcnGwG8uVgbabp",
  "key39": "5sWC7VgPk65p83Yw5geViLV9PmHZzM7ME21f1noutiW6tzmc8sHGdv4Np226JRJYSxSLqxXWn1rZnfXk3mJSMoit"
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
