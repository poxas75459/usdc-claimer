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
    "5zXpGYQRaKVMwL2oi7EdbYgoXEpdEz9P6GqJjm2TAcKrs5G4PWrf3Vhm3bUbqeVhNvdvQ29NqoLocx1Xoth3Ykcj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KvYucWGSoSR7kHfngmq4pvRpaJ5shB8dbR2ZJsRG1D5Pr8iJnwfTjTqkDo4LpFYiwYeQoDYDabtz815y4kGeD38",
  "key1": "47zLyinyunnhwvgzucuzgXp8yVKbanbhS6SQSKSQXqxq1uFkGPS5jnibuUP4An6bLwV3DyX4gNzmcfJJaA49XPAc",
  "key2": "5tmqdnVruUPbPhpFK9573tvd7JochBUQgLQvzjqVpGjLq4DVS9uPtGHx9P2JyMYpTt5Ws8mDtugDz5PtZbjkFEy6",
  "key3": "5oRmuhxUiASBRiiBQr4XRoiD8jX1ZSh4W5LsvcaSH9bsMX1S5JgRqZBJxSbZ9s524HZ5HRhVkYr1w6jN4SUarV1q",
  "key4": "2cEynatAwAts3kitav7tbV7Vxz3h17HXX7eJU99xmew2K1mjZT4edR2AwugAV8qWjeqkTkawqnYZkaJpQk8QBhAG",
  "key5": "2a7bLiVxJ6EBuDp7Qn6KTq7WP6wX6ZSEqvdFR1jqEoHv9XZHmRMSDmyMRcfarQXyeeRbRmF4R52jGtbhxxp5bwHv",
  "key6": "ehVZdbCs6tT7LVkpn9nDntCRyFpnPsTLbEgBcXUzAmH6rw388NNu46tohsE2APMCGkwFeBjjg2aAgLR3Q2ZZjVi",
  "key7": "4NcrbKFpC21qtom6RiCGF5MnWaF6ZVgc4Ze5QwTF4jDBmqcSFf9R9na5XEruCXwh2KFrqHJn9c1h8tN9XWMBYBdp",
  "key8": "3tx1SiPX7eJtjPAe2AXMhjsrjSqMYBf4cSJnqnRwP15hWaxrdQTbQ9ExvbzvDQKhQ8rDLupvdMsiCUREBhDMnMmH",
  "key9": "3do5zo5thuq53jj5QreizA7PGi15BrTq1ZjFnenDQiybFRzrH7gpDXV4ozWt6YPAkuGVBBRWcxxm2TitvurGjNYV",
  "key10": "2sMgACZ7ez2YfRrXSMwpRc5z75Gfwpum9Es3wHMPpPXSU7b64tV9FifsRxeevnK9uNHVxsT7NPAQVScfcgQRD1ck",
  "key11": "3KGgqTW52PHnpN8R98oyZGuJnny2FjhgyBoUm8ZTULKS2ztzrqEBaynrro9fz3kv26nBi4bAhHLF1J7pZbTk5mSV",
  "key12": "3LqwG8t64d6ybngoB6qtdL8X6XgAigrcbS3HKSddxvNU6HgSbHXL8xtUbA81SXCF1misssKEa26Qj6XBWzVr4Ydf",
  "key13": "2WMDGkrT6rk4RyZpYjdj8qaNiqP3a5ytfVv89yoskRJAJM7PkTAM5wF33Yvw2iAYW8UoFhf2iDHsf9riBxr8AbFr",
  "key14": "2NMtGpfF61HuU1DaUkDe214fJRnLDyykJb5uzr9AVzQC3mxY436HmXv4yirEL4cEKreN9FAVAtbeM8kwkzHcJpzE",
  "key15": "5P9LpjB3kMGCSkCJtodBzpsB8MxxdUqJoHvHTP4V2Dy1Whi3fU7wCsY4jMaQCqjwn1NSuaMka5V5CZDFpsqYtVLs",
  "key16": "4eHE3bf9ed6TpzZ2neHC9RxZMSi9vSgbQvUcHqJDRNSWVz8txCTJmQBnFyMzJUZTwMnTHFTZXog2EY9Gy5ZaAquJ",
  "key17": "3fNLBQSf5Y7j3accPSCutejc5E8kKE3Dae96gYUXRk96j68Lcb8tpbet2KSsrrdugTE8M4iWNdWZUDNxiwVVvHzZ",
  "key18": "3Pbq4C9RwSvmjeuTnGX7xq2VqGr62tj2CiHXefacrMNnVu8eo9G5bFcAVfzVbku1VVD1MdFTjS7sPQjy3ATcdite",
  "key19": "4ZvHV1Pz7pqYcPEhCcqhoBcETT3zxkHiNNEgRT8Vf8Jtb5sEQvoXG7y3YLRDgxTGV3M9zHpUwUuNtQkktgmT4pyG",
  "key20": "3VxFZaQs7npUYvKLMqHmfQpC1YiuSWPcKhoqe9usK79nbEHA5mojnGUyUJoqzGYe9fu226ad8WVidAfJ7pFCn4vn",
  "key21": "3hYkTKRnNM51HSJkGBghKZ7X91WRtdcuQFYg8dhUwdQ6PNEW9im6ys8npF6F3ViGjTy1d4EBogpKWEt5KfH3NQuw",
  "key22": "66UftTVSqKmTEjyjvhwY6ZnNNJAK4AMtb4SprNCsaN6oLydYXokQNheqrM2Ty8SHij35FUPJ8XBfWmRbpZGB3UJ6",
  "key23": "4WzretyN9ZcdaBbvUM1XZztAcZ9fBVz9d6DQe5H6scPuzUNFpzqWjf1YSsiWSJ52HauuRpYhwTjmpNXE46LxeE63",
  "key24": "3wu2NYuCx4fsHkKUobpCRGocXRPSMmbTuLmKCs3hyKBddcnwpqR2yAgy61XJ56vNhSyHECeL2GBLVaNrboy1FBwy",
  "key25": "4atKUN9X7jkqyMYZhLv3zNS3VATmu1kWwMPwaB4z5gpQubHR4XMpZPwmM4XGsaew44HS81zA2VLcmhWy1EA9eFUN",
  "key26": "3TXj1aVkV6FoEwChCmZCEkFyMrmdGFwjiXNipo1C4PG64TiB7xxKQc9toshKGV86cagq5hQZjyKwvRoebDxHZKun",
  "key27": "TQMr8vyByUkbRaXsFVJcHEf9pSuUPq1PVu74JuTH1Hr6MBpaLAfJZMrn5srepydFyCi8ckBughHy2fccsKseqxu",
  "key28": "2LKpVoGhAuXymALHcAQKVFXEmQ8owhbfdDDZzMoiE6t8gX7j91R3wj1mvsPhNpwkdqvpnJL2J1JvpRnt3dyuUBHJ",
  "key29": "3ekKGv61rtwDWnGm1Z1wAG2Vv5pPaPSSxXdEupTCvJAHERHbxHEVxdwJcFPCfoexE2gGLpkumtnWkzzW9E7FdTZw",
  "key30": "4i5sXGK7TCvWrDLwq1w2r3vWXA3W3aoL2EvfTEdrrb61xrMEtVyXVPUL9QicFu5PtNYKLEM1LQsuGPmUjhyi6YTQ",
  "key31": "5Mbevua8utXQ47FqNNUtRXQK6darCK4a7Bxjd6CN2XMr4Kri2iqk4jiUtT8VsgXS8gdsJuwWd9LsXdMWBHafWqSR",
  "key32": "3LB3GDU1cTxWgBtwvR3gbSwoqxcZau3hULTAkrP4Lh7XPkxRyX5w9DbkywzeaNsuE6Ye3ChpGxT5oWPQtVgPGzNo",
  "key33": "4Q6VLfkz5jBNgyMwtCRsMjm8Sca2QyqeBfjAuhT9Lt6coJwbXDca3XMWReFJTqzbQaVUBmSuU6Gr4YBKfuwgmsZk",
  "key34": "2b1PD6RR2oFeqq5HcPaERabr6G6EicAnT7fm94Raz3zCnZF4EXgutcVJhzeB9KwkZ1hWRCszsVaBC9xnZmPFBioS",
  "key35": "3Q6gduvFKnw6FmeYSTn3M4A46MmFBa31mSNFWDbVqJt8NJ6tGLe4ERh6BHSq3fv6iV85FumaqCpSdJCtjNR3Eq8L",
  "key36": "52SCCfiC4QihkAdVkDBxmK5vvePWCUvbQ2ioSqyqyA2bCSERAzLTPF5juj8DYhjuBFLqGTPdKeanmYb6H2GLKRBA",
  "key37": "3AcK3hM282jtjvanxzNXABs8Jd4w2nm9gNMPhrc1pN3EQPPqiTUciGtGaCRTtNVSszm7YCDJX2mbSXbggDQFsacq",
  "key38": "3hCT8tAFgDbHJ6FK9bhLeWQNWP5StKpnhMHE2RrVtJwqMbV8dv9LkbcGEFqrKHEY4289CQQHisAi1zjai8jdBQqi",
  "key39": "3oBwekFchTufsCC7F4TK89iVgbNFyi9yoxVndmm5D9TjrVKPyxLSmG158szrdqhyn3APf3sjrushEv5YRJdGxduh",
  "key40": "5Xntt91MtwFNfT3k1nqJUNAnAp8YCi7wPBGBvqMsbCDfhsqrETo9VoG24q9f5LUgto9V7uKtenPcUEBzqrwgrUJo",
  "key41": "ohF9hznXo6D1m5mLSZoSTQf5iSt3bn9aPfytn8voYh9qgUncqy6M9zqAgYnt5u7qJtyCbzmbmjcVawX28ETibcv",
  "key42": "42d8HYhMG934vXzMmyeNZn1HWLzim3U1vtaHyhHjMpsikqdW7e9HZuSmxbduf5ADze8dhJFjqzeEUEfHixLfXsXz"
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
