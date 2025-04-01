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
    "atjtk4vvRwqVxDpu3PV5BdS1Jko7gM1TosJLc4mA2yaJeoxXij52RVtjXLnM2zW257DZNAaXakGjAZw5W5vZ4qo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yLpzdH6TA3B9cFkyLT1ZXPPvGEFrfeV9Jk8wSgVjeBBWayT77313ekkVhPktMBW8wqWZSPVjGTui9n2aqwX72ZQ",
  "key1": "2aw6yCwcAphVPhFmtyBGbxv2CY62o1vEbSbZmn3BWEWAcxQRdjUkEa91WcmrG5iuZgsZrFWde1bimWaYzdoQk7Vn",
  "key2": "5ppZNLsBifjgpEQAj6gRNSy3dpH2Pq2Lm51eRKjimkUS1svUW259RXbd7KbW5MgRku7yfouqQTg9u2wK3Wqqzv6K",
  "key3": "bgHn353dMqBHfzuG2ZCKZWYV4KyEmykHX59Rc7kYZhFNeG8ZohM9V8EZyPgDK6ySisWDbYeXgX1DVof6JakfPKx",
  "key4": "3aeVwVA7VvXLqqQSywhWv85BoXnUhvNgSUm4rxcsRkUe4ULtYd7QvYFg9zZomPSfZ6BokcoognPxPTah3snqZqS1",
  "key5": "3hZuzAFBSkD1JjgDomsU2Rvc3ykFC1F2HS82TovNDd1r9pzqtYZ8ezk6ZAKnwSTFwAoLYot2UniyAo2jiUEokf7M",
  "key6": "3m2582k8GP9TpaCvvQdp3mjgBKGt5wPDixCE2H1tipviwfi38Mti4TqNaaQbW2Sev3QsBosFZatXQpyfY9wstK53",
  "key7": "5psYSZ4GTvtRqxLBYXim1ktHyYyq6dzS74SvumsPdGijF3DFygahjuvVz6kUioafKZfjvwzGUoNmrN1ibA84Qvuu",
  "key8": "3yA2MKU1tRUWQsoa611opRhDdLg8bWiGXXLcMkyqYnrp456RX36YTuXNbd13u7eWzBR3cJ69ADzPEjZzB3rKyDr2",
  "key9": "4JeUQZCvn6W2uDBahTL8KdgFQotYAW1KbZYLQw3pR3Kg4CcUJbh8oTeP8nfucJsyrPY2KdRsuSDAdMN18im8UDjR",
  "key10": "KBVtTY91o3GAT5LeU8mQqr5g4JbHcebSFin4HUN7sj9U8eWZMf85NBQjx6mt55sTqspWML2uX2x6saho83nkpUS",
  "key11": "62vuxzGXnjj3R5xoUiAgPrrwfJGNJNdp4XWf8RJ7Zc1NGTwQnQnBGAcKahiUcBwZ8FeGaXcatFPSEjSjjPuv69dX",
  "key12": "48Q7z29CAwSEHuTAS6s8nZrrSqtcmia1gZ2sp7GyXksx1ynGjfcaDNAPErSQsgXjKNKVSk5FCadpzxrPRD4cKGTa",
  "key13": "3zFai5YBD6eueTXFWhKgP2AERWqvWAnu2XZTrpwGhs1t1GfA36Y7eknP4JVrj8fv8VnXLdLnMLShLJx8hNvX2KQm",
  "key14": "2viWHKBcXCwgf2KpdwsBAjj7nnxvBppJs3X7QkSBmwDfq3r5mcPiEV21EB5ufB9Nsjz2vaE2fERqu7xYkxixqWe3",
  "key15": "3YhYXxJnCnszQYvgCo6HegYM8wuJcxRhLNB8CJ9V9qJYqgUFgLFyv1fCRpTBqfSDfj7eTSw5C7mKnpbdEayFUM6y",
  "key16": "xXwpxaCzWme1i7pMjTxjn1H2o4KtD48f2JW2rY3NAumBrFN8NSRozVpnKPcZSXWnCgnwGQse1MafWiv3M4EpABT",
  "key17": "5FYjpRJZVKxvnjfZy2t7dqMQjKctWwppvi2cUP8qduLeT9bNzAtZcG76rqenA1qF7TUVqdYVvGqJJk55ZhRcCebs",
  "key18": "5GHnFvCdA8AwGUY3ssxbSovrZeNDxCsZUPkqZvDvxNRQRawoKHwUfTT6pdDo32PFVqGdrXQPMuvuzrqaV3gQuqsf",
  "key19": "2Rkf8bVjeBncGVYPaF9g45XvXgW11SLbqTepzT9VvT8zhbK13GxC6MS3nD3uyfULiWSftgsaVa4oDYQHYXYEwL9i",
  "key20": "63A4grNYoqbMA5AerhnMs4jtzMJACoPfVFdRzw3SgdNsFzMXDpkrtu86NrWoR3YJ9QimaFcDQ57Wo2mDTaK74Hur",
  "key21": "5K994GuXuv8EEPv1L5JwxPUgd9zhvQTioRwVybw9k8zFvZbJMTSVXzLQ1EdTeFpTf85rbfSpAj9mYcFMHgSLLh98",
  "key22": "4boXtaJ4YDRnWS99hBYU8R8YE2Ts5YAT3UjKv35WfMLMMDQzRTrEJ9zcNiCCEtK5RdmGC5Bf8nRqS2urAs2g2LyA",
  "key23": "3scCkSkPZV5WAZq6YHu9v4gMNfsNqDSs6AvLfufdhTowFRLioUKK7WQyiJMLL3Ltb1C8RaTxa8XXwjk8u944Wzn4",
  "key24": "2pdYSqBUsKJVdWSEik5vJ8d5XFFJrdPFaNEhYYohpDSJMYHzYDbcnHjApeKrHguL7RadfocWsmJzgup7FSn6wfud",
  "key25": "5QEi2iycwPemaL58T8uoZC1uZfjvhddTwn42iHoDk4aU7Ed4oJZd7z5koVREupaeavxCTmde54VukukqrgY8NLDK",
  "key26": "43Up3CdQPbPTV8FbpuBtggnG38iK6a45C2HqCaiYLH9o8GshytA3JLCFxUkKw6ZNGAbrQzZuRBopkgUvgAVFsKzR"
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
