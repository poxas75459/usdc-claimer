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
    "2vEJVX2fo5k7mZHcQRRU7p7KbcQrDo1DEGXmWRDMenaNXzjKU1x3VmMnvfLcRkrqrq3Rpfrs5DK78yjKktWxuZqA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KpBwNFusXEToG6PuyxN4TiqqrCZobxozkHFMre8ymRv9DSbPJXGBuHyDHDjsrs6bm16UvskKf6AKs4nAUx2FWnd",
  "key1": "4qVN3WvKp8jRHdWnphDVWQeE3Vy9P81TRSo923FeYdEZcXV9XPDo6eFPDTGob9oNCFD6BYKenF6SU4tZhA8ZitVm",
  "key2": "5hk16GSrjBedQRqqTkJ6znE3Mo98W9eGGG5odg26hgizKVxKMekuhLqdq2GyxYW4ggFTvuAMgjtJRR51SgxJsrbB",
  "key3": "2sZTcSUFWQn7EN5GyHpG3WKbPgTJs7eb6LPQvWVfUmifTsnjkGsPaMQBtJXKk98cPFFQuPrrcucCH3SGSZ8QzDcK",
  "key4": "42TZ9XxhiHyLf8r5tkrHxRmsFBWma8gFYoBxM2FwFZEZfd4UUu3RDWJdtv5zTu3svBPn5qezc8Bf2gXnP7TatKMu",
  "key5": "5yG9hC1JBufWQsWMxAwYw9Hjq73eCTZvdZvKGHT2VN6Fk4tvURPhsE37h9kw6mUisS2w9wsWQxSW1rnrgecTRJzz",
  "key6": "5kznyMfnnySsfbV3QHgERmk62q5VLVpGUXpXkLm1znM6uY7Z8QEk6EU4t2o7PJJhzLkWQuoWdhDr9pYz2GYUB2WN",
  "key7": "61r2RBvs2xa78pL43tqydmEoZkhAgoxkiaeoQ4iTtX9F8o5F8bXZso1huXpVZ1aBPuXjbEcwNcmZSCZ2gunRjH6C",
  "key8": "4zRa2brEafAwSV5KATmnS3sUJx8b684o6rQkh6Z81PJret4rBxsfB6orbQiCvq5YP9GrffJrjejUKm2HEmxK55jQ",
  "key9": "2HPwnwr7CAZhfS8sAYh5FRfn2GvDg9ToBqmW79NdrDVeP9xyrAPZFNF6ckYp2nUoREFDu6dq4vtgR63XLPR3cTKP",
  "key10": "2YgwiUTAz1Qap8GWP1dAM5VR79v94QiHc9Zb3pkwh1MP3F6SRrZhjXzgnsvir5eEJmyiaLsnCk12Y45eV3uDhgBR",
  "key11": "4hFFWoQhLktx69MiqAECTUseBsBmCdhucqyKvqkyoGi9KVf4Fa6fiX2cQczG1zfYDoyt44eWsSLpivgGLdRx1uDv",
  "key12": "58hLN8q8maQzaYscwN1ckjR1BHBfFCCa1Bbz75e6qSGgUeTam5aMvRctUwA5Szu8NXozbapxVVNVctAhjw17NsDo",
  "key13": "5KCkeCebG2fxcrkss2AX1UTaCng6oqu4zTiiYRPBMYSabbAUUrsfuRsW8jPYUZJpPBUvE5gN6dX21wc2SNLJbk2R",
  "key14": "4DCjBLibW2Rj4UDASryD6WSCVUJwHe9uoHjQkukHyXovQ5zLHnutijrf9e4Z2NaJ6MfMmfPkoKY2vb2qybsd3MPW",
  "key15": "2hodZtKEJ1GGD36Bf3kYpCivYUFdttHHohyfJvS58zSizGhWWXV2Q1H9FjttKRtahdy9x9rxuwpZto3iJdi3YF97",
  "key16": "4XfH5yFswVaN2qMYQ1uLkibCs7RqMFVasJx41gks6JKRj9L2bT1NmhDRSj67oYFEPQagNsij1KxZy3VY6aGf8NUt",
  "key17": "2FgvvQ6H3189teDJsvGCD9bwsdvqih6rDdiEjUdukAzt4vUFp1Y9yGGPEcMjqhL1nHKmYCCFd1QBEUCZHngGBV8E",
  "key18": "2VSeunU9BUqLz94wnjcNbvoybdW7AkezoG9dJ1t8S7mfK53eT5qcZLvijonP6KyE7kD78dXEtLqkXZNasCwV36gb",
  "key19": "knc9cYogJnjBoHNq7c9aXYT5chQPd417jAwqVuNtH6t4Z9Fh4JaPX2dwRqVctZajEMV6RXDfw1YUB5NxTwzLs74",
  "key20": "wmkH4HkeXRJJNfn6CimBAS5DyVBQT9C4P3BoH59h4qAZapsHU357so9w92jmJYG6DzPFPjvbGw8uT3ZFEnj9YyK",
  "key21": "3Nu45a7TbPZfWiSvTxADqqaTWznxToyBTuUoC9hM98Vy2gpFUFprT3jmNo8j9Fnq7uTi1iiaizzpzoehJqngk59y",
  "key22": "mxds8dvDF8utSrKx38XBzC6WDiB8eyPArb8fG4JBG5ZASteu3KrrKWwrvEbDnqGhCiXAdK7nWkmAyAtKFayn3hm",
  "key23": "4Qp7TR9xBkMqeKbwGKBLsiengM813j8CcsCGWxs1GTZ8U1bUb9PUFjYor4bxtmCSXeh1GW2Vtt7nEKEisEXCwEY8",
  "key24": "2RAcYzfiZ4BDctqCV84yvCPFhF27XuYuAqwMAzZ8Vr79e9H56kkXrHGaQHPfnACWj39k5fHpEgcze5gZErdbUoVW",
  "key25": "3A7FjTHHX2pQiGboW8b5kTwnSuHwMCSYRpcUWMURPuUp5pcQu5qJAiSd5bgkJC62NNGpsWH18ZJrGd4KG64ehEz9",
  "key26": "5rXYGm74aef4MVu1HKVWbMYQogoqoyNnRAs5R5CrSTcxAM5aaPtjRkETko42yfWdnFqtC81Wi79u9uEJsi713fuX",
  "key27": "5ECKqGYkKGhqcGJ2FszXeqPYTZC46b5eWxqpc6u6Aw7kf1FXRCoEGNrhcrBY8igTJ9UpBjhrZAhM1kwGimNxGx5e",
  "key28": "2Ct41H9zD95kSvryqVkgofZH8w8TvnWLhBEkbf2Fi8kk7JpfSPzHZH5gyGADGyc1xbJpisM2tXaaewzWnCYVm7Ha",
  "key29": "28uZMGs395PMnmrT7A9x81NPjSPFLksbV9QWAeSZkWraByYFeLJAhh7X7H5jyUPBGqTMZyUsenvPaof2fP7fVjKB"
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
