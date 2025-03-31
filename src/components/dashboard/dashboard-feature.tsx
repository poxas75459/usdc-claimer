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
    "5FSByLxTCNRy8XDujGq3F3776y1gVXazVuHFLzhqSnRwwAcsfJtETR9AbZvCdQEhSJh4kEX6UPW4asEqykFDD8R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SQahWBzq4QazhkDQGBiXewJquDrJa8E6hwBYBUBn7LuhGsSmG2jG5u8aJcAsmGVzDAQxvFXArQg74GadrAQDk4P",
  "key1": "63goMRTSrpnCKUCBzPegsevmbyW17qbYSSgWmRkgiJe8eFDohtmJNwQQzjs44LRV37XHPKjnxJxMy7xAbT2BH8if",
  "key2": "4P1xUBNEsPQBUHjDAveRJpUjiV3mVRHYuYEM9nQu8cr35jAhbg6aRizhsuKTm7DbCL1HGcMuzaksJP8WKXRsXXhv",
  "key3": "2XEC48NnxtrPQojfpNdGweyTPWKBWCkfWJzjqz3pZXACYRGDQ5qG6T5Pm6tpTkg2VSAnJBho3D7MqtdFpWf4w4C4",
  "key4": "2eaiDFECrQZj83xswbq4jejGv4cfRhEwNnxU4d7aHusTPXQfW98Jzky6RrrRrBGNtfkrioV8h2FnbbgLApY7yek1",
  "key5": "3iN36KzZNN8iMsUmbZHpkv5L7tartVuZke7mKgu42NQYHGmg2PEt669ubr3u16a4X8q5FYr7m3LqBjR1CsMtMphB",
  "key6": "3dxjD87mPWT2TvcbAJ5rmt3diAQB6bLoTFZ3XNzNQMEKBVNnFdJWYQ8R8m94idG5yfEdyKprCbPrixscx5QZRw7Q",
  "key7": "5nVKyiUUFcdoMdL7SJ24XovSWbuPt3aoV8yQTwtv1DrCGgqbPJr6ddAZnQk9GwwDPTkrmwubkdmJk4Jx2GYYUdxA",
  "key8": "4LJsehmKm3frAB2AQ4ax4yitaPKLDLnrRismPJSmZpukmPyMZiLnE2pYv2bt13G7tfut4dWZKrrgo7S52AiET9sM",
  "key9": "FWqRg1hTLMW6A2kDkcsGKz4jNSrr3CkQFQwUQv1RGUptUxoSw7syb34D9bU4pL2iNQQUZBU9fBMsbEj2R5h4Rdd",
  "key10": "4krHDfU7RtbTa9y94iVvZL1UL1UJJu7DLLjhRpb9thnD7ocJFPNXgfZrWRnzcqzSqPYB5ZjPYUZeH4G8c7e6DLKG",
  "key11": "5LVMo1ZooHAZjeo7EM8T4WbA9w697yjckEHVEP2WojMuUxnqsaHxaaRVgZMzoSWGEA9m1tuB4QS1DgzQ1bM5FJEn",
  "key12": "28QjgDtkcY4Sf5qRoxyqJSX45irCXQTzMiy7HeYa99GTmrHrUgqpQ9wA6QsTCBa7aV8rAYSMzch4xxoqyNnKrHpi",
  "key13": "i77LWU45stnjAUbe1FAvnbfEpcCQy9CD3vYLcTRDmosVbd3EawFxVXtPBrxokjsnF8bj8sohxVMfP8YuNvrabZ2",
  "key14": "cPi5SxEoD9Xhq4JMk1WhBRGhoVHH2iP8nHVrL9oWsGvx2uG4pwMp6pfjQgdwZLJD6AMcEmWDNwvPNrKaMybbuA3",
  "key15": "tLx2BvbYbEMTaxa1xhF5R6mrAeGg2tvNRBVfzZc7eYgXpRemk9Dz8DRtLv1JJeMCLGkaLDhi4Bnt9QwnU3HvBEy",
  "key16": "4Bm93cGiCwBdzp55TrM835wPjdr5m6zTvQSHjwEbpD1sLLpK9jnB8X8CSnnVHXqSjhjAEM9tqmpsVuXZWsLrzqih",
  "key17": "cqPNJDhTJDkvsDjZ5jg1tZ6bGpBayVoSEgBG7kFxieptCfvFDeSXVMNZ9HSnQj2kZJQiAZ2wcRDrpJhYdCyiUSi",
  "key18": "4dgjdy41sXqfLVTeu4QvUFRh3CKAZtDfSoU4VFV38MkVEYGCV14iSa3fxJeXedFq4tgj5xi73UQPWigcA25e4uRZ",
  "key19": "2iA13Ezi9EtDC3FjX7vqRzGj4MHwnDnS3fJoGZnztyZsyznWKTDZqBPJaMPwty3c1sU7aNcwhSANm6vtpPmZ6pse",
  "key20": "3KFUtEERJai51dnqHq5cecTPM1uBZQYGBSgjGQ1GBqWQ6AsJhG5ehmqx9DrtFMcr9eLWJxsvnMv1tPNe1Jap4PR2",
  "key21": "2Q1DiD8UUttTEVQwiSZqWBPARq6J43r6Nh17NUNQQYrg8mGgTFvzthK2W3TjGMdbGsRr86DTfb32hepG1FBhj3Xm",
  "key22": "2VUr43kum8shsM6HibQ3NZfHvhpkbHEdjUtrmPGbNLV4GwDeHhwmrhGcXMUzHwDgWJupMg3NNsi9H4Wu4xKWAYvT",
  "key23": "4GHxHi3GBxr2xFPncxpsapz3ibNWy3ZM8FahpugTansk1qab9jJkGihba1Fvv3jzVvKiMnxcjArNqcMJeH6HXd7H",
  "key24": "41NzgzkrPqZghqHt9e9Z7ohzyXDJUYeCDQDD6ARBvguBaHEzof4baeM59KNJtk62CPtg963YCXmHiN9erwZnLyJq",
  "key25": "2hDNa1s3zSHoEXSUKQB57vZTczy57Xp7Xq5pRFpuyH2KcQgUbhDC8hoWAHdvDEjgxTsaeJqZQQQrtYFF1ffcR6V6",
  "key26": "DmdJEt8XZ459Q2mz76EaWFBJXfTXebiWtiVC5rp9maJwGTwHtURkBuf4hWYt4U5vqtSci9d6DJ23a7zZoL8ZQ61",
  "key27": "5nsvo9fQ6k8uwR9VENPAgUw57zdWT3Q6thCWkQQLZG9De41ZZ5Ym4cUyf1JA771MJK3NiqWJRzJ3FBUbdhhV8GBn",
  "key28": "QcTSi8jCY33DGUPD6Kt4KK3ECsFSP14fAieLd74gSgbzUoX4qY8eNgx9wuXtU3Bi3gNfnVZtaqXPRBJf7QASTUL",
  "key29": "RR4QKbN43K5HbWhEpdjQnzGi1NCN6esbQg3f4z4QFxRBFHNZh3Gd6yZHU3xuo5aNR6B3vTJWJf8uWEKHJ36A1Fw",
  "key30": "5vE9MqrTdKzHjZPZCcv8inepkyAUjHdJSCvqXUy1L6mUe3gpX1FnTJpPhgab2NKKzSgrLtbd8Rf4rXDGBbWnRF4T",
  "key31": "nWCeoG3omPGPYPcdq42EgSX4MaoUHXVMDrybzzNf4qxWc2YBe1Kpkmq1JukwtQ1ggKuoibtwvGgdc63NJcv8GRu",
  "key32": "PSUJFXWp6hvYLkCbr6odEFMoP6JTq7mYGxX6Ai7nuXwReGJNwnCtwETZ5ytVeAUi6nYxNj1VXGSxoSRbMSnAQEV",
  "key33": "4bVgFUw51ULceJ7uv3zR12THTcK8maGbbF8R8gdDUkLPdfN1VZ97EAbRoqZNoosfJtv2TfVM8czQmfT9fhUHXrmW",
  "key34": "2CavimX4Mdc3QK1ZnZogCxxZRJK1nN6VNTVRkZwGHfdP9F8tqUoVXpwkZbRsnM9MnwXMKJqQvFrgJdPPEujbGzmM",
  "key35": "5hi7n7HTFRhFN17X88bg8FDSdtgfpn3WoLjryve8ZSkCBvbXpz1Q7Xxn5TTFcmz46SD6LuD7Q4b9M2LDDjfYaqbB",
  "key36": "4u4ERfEobc4PLS82jECQ215ZmmVUWHMJFXSMr6EbqeBqX3A3vG7yoRKAtS473wLYbYbCyEcsUHLKG6iakW7HF6WV",
  "key37": "3fvp4kAGhGjNJG6gSYwrR9L1uFZzvqBXpF1WeFsC4cRWzDkSrxGp4ZdA8ZMricWbThKZ1Hgy8ShU65c5PoCs7gT9",
  "key38": "35pBsrow77XQs7qmC6VcLvNJPCkR22yurPpcknC1FFTTrtmkucm6RNZ9pk2Y3ggoq9uRV3DXbWE4rG6jeGysYrJU"
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
