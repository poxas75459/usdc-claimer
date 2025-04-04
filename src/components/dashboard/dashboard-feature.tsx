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
    "4TFUEi74QBvcpCvG6bGbAHGhdahiuz2UAq1YfaeWRoTMwcJX4yX5XKB14ujkoguM7WjZ86Fv64F7iJak1X577UiP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BfRzqFtKQZ7kFjap9YJetTDGQQUb16RBwTfFS9fiFVHqVzc8eChH9Mg9CMwAaz3XonMTrHQoWEFVFNpteCRBqZ8",
  "key1": "4azsTDaFPRDequPk9DtxLcHgFrQvdvUyWoxtsL86etisboaKEdmdGaN3s7CnNiGFU2hgB8e9dAUMpjkF81L8A3cY",
  "key2": "4RRBvzwtjxRdcmcXjhHtS5fqQX8owjHAfkXZa1J1BkLdvakA2m1gKWpfsU3M2KBEBnm9HcCfNkRtNTN78XZApHLg",
  "key3": "8wGLCreUgPnjxwyktivi7JH4mKcKNG5zWmk2kQHZn5tHuxFNQ7V6eohTQSMZrEEFFVKWQgUX4B5jrcRxxP1kTgg",
  "key4": "3faMDASKLxAMxoXvpreLiL4PG73pwtMnNYAVPA3ubgZmbyo5FLFNUwQiJPWBS3FDFAp3oHEtGyo36Mz7qDF3GyYX",
  "key5": "4qTaMK2vvLJ3k316yZo1Mo9fpMjBWzZGtXYPgg93V2BDK98WK5QydtYEWHMW5b21rYGoFxdSdhCLTUYAMBjz164x",
  "key6": "5DXzq7waaQKfFEffBZF6zPSqczw8Vs3NudcpsagmTRwbWzM753GrFzvFnwKhCwyaPnGKxNjTBFh2sqxfhevbsju1",
  "key7": "64NZrez9JPjbZ6qwPR9swzdxzP5UfdhDAG6LUAZrriyCMsV2MnrRqAw7DuEQhFhgKsVGAqR4rqBvhH3koC8BwtS",
  "key8": "3BkeDzs2QegN2pk2eeotiXd85eF4n1ZGu6bpYnxsxHWZVp95kzW7QEtxi6agMJuKQqq3r5pKR3uPJdXPNKRtPdhY",
  "key9": "2h426BwS5FGM4K6xjK945xZ3rL2ChAo8Zt2z8iKUZwb9gM9iroA4FSWk5W41NQizYiwMdZuP6FRWpcSQfTnYKmAX",
  "key10": "dkGi4fJshuMkSCCY33rq9gBm57mgnCN1LwAefMwAxs2FzaPUMFWfzjtBAp7QEmsQRAdGuoKHEnC6uM5KsmfMbFv",
  "key11": "35kDnHUCAQstwWwEyx6ccWYqgC2w139NZ1xBdtbKtcSuPKzV6yX3c4NBxgeZEySk9FCfjPqM35qFoCCaX7yKsG7F",
  "key12": "FFmSEZxN4NsVAb33SNY7Ryb26E3MhFpE79d1p8CvLbxiABec6soWEUWgUWkABZr9DNfGp2vmY7mLgwPxHEAjJCE",
  "key13": "4myNn3CmfqyjPqT6LWNpDWeVA6X4CggnFcejmFbb2WQcNqXUperKnPWjjsrgyKpYwWniLtjofK1ok3VGoMdGAama",
  "key14": "3NNAYVuocrDzJJ57LVJcfavuNvEBwxnM2huqKEEXdJAn78FxRLGhqjLoBkHcDMG5hzuJMoLKeWCXLuu7Zx1deUSE",
  "key15": "55kac1CBp1G6ZhykGBrWECP94fX6oGAP7fAD98gWyv5KqLof6cRCiYAxEGjSSPDdPeodDJUgRsBVt2CcCCFKuSLQ",
  "key16": "3MrDr6qZhuA3tdhv3vgiFRakrQX3rFXMjqvNNowHKVMwq6XSuLGtpKmmoMqLLrzpiCwEthxTcq1z967PBAKebEcg",
  "key17": "2DP2XLarwVqT1NA7nZUCW4evtzyPkQNxqjghWxFBi1NCmtJBnPhA1iSJmRAqRd3mspnDqYX8d3m92i9crfL7EE4P",
  "key18": "5WVNwRNyzfVE4QNzRZHroLHEtZrRWuvGMXTv46zGLjA4c43R1RDMSyuemUdFWezpF3fEHAZQwFfYP4nD2BMNbeb3",
  "key19": "3jHAgj7N1wmR2J4D4ePcz8TCDPvJDKS7MnBtX9QFGbHK56xeFTkhEzVdnsCCSJo8Yg3yejnKYXi5dEux9PHkpEyb",
  "key20": "5pCc6xNoG6GuzF4ZgpuoUC8V8Y6PTPGxSdbpiJSJ1NXd4KH4mjgTYL14P7hEyr3Jf1phHDP67Lq8m6gASpz5iwmk",
  "key21": "5HzKP8KpRkbWhmk1RMJW1JQZBYbdGzK875xbiHvMjf7hh2TGYkUWxYRoSiqt2m5c32cEujPLARLZSXjAqBSXY8gC",
  "key22": "5wHZyzqgbmjAU8LJVxWkwcq7cKwMNwkLGeixAPZsGAGxteVvKHBhmiRqna9ZH63DRQ27b2vQaLKsuvSFzNskkkwT",
  "key23": "4D2mb2ZZ1Nd2XkdU2faCFrUmosqdGcYPHbkM8FRqx725Fx7GgUJLdR1NL5yAKVoCrhRdiNLftD8gcxNDRB7E1a9N",
  "key24": "3ufMx8nDtbd76WNpNB715Db4fuCNVUFkSJfBSRfzf8u3ejetdsAiA3F65cLQGkMShngy6sCGPxs63hTUWasqcy8z",
  "key25": "4EZC5QFzX9fYthwzNqWhYeYieswUcrrTr4fPFZAoChHRtCewrDedyZTyTW9jchBVR6RcN6xtgr1ECa2F8cTxkP5W",
  "key26": "56yj3bGabSDGapsrhDTByAXGX43Qwtw12FCoED1J7zsyVwffiJxWtuNm93zWyY9CatTxAvnFMVkaCcvkwUNbeCC9",
  "key27": "MmugRoevVFB7pxqk5qnttQeaLEGNG4TPouTvNpu7vskj7MeTxfLcQHeY7yZkDE72BSHnSFgaLqYDsDhoNV1UC2n",
  "key28": "66KUdbPFPcsj18pd65V8oZo58oM5VfA6ge9mSQyfA9R25gxsn4q7coc5iNdwkXMSyv57SWa8b4S11K6gUUjiDmuP",
  "key29": "yXNwEKd1Ruw1W3KPs1icmwxzhtwp2BpUFVHuoAGdXtaYfF2jCcpcjiCmA41ZV3nB9HQAAFZyU72g87BZHEiMpxb",
  "key30": "3VUArXHkcgTJRJB8KuZHbbH8YAQuHNbup9r22jEc8KQ6yExp6MQZL3FNk2WTEn1CHoXMKShsCQRdYjEcc1nDLTFd",
  "key31": "2HTjG7qNLPe73qfLvgisTiuSYpBibdQL8vcytSQUfCECuVU6FXefpcnbEFZJCrYTG7aN3GvmKTAMVUADHjRPMiZa",
  "key32": "XtC5Jh9pDDSk2yFpBV8duUvVb814V42dNANyKLwtk5tQtNhxshfYsv5xa9ZhpH5psxiBT7dNMeiC5EuYcbzSnDM",
  "key33": "PPyLXjA8NCZhgstgdLUnQsKit1S7U7gvyom9cvpX7ybeSGHifVJGuXGYL2DBpj5K65q2nK6YX66Xai5QywdDyex",
  "key34": "5dRhngC6w9k9DFonqsRkREKKNYZDqrXZsMXn8PEeLAe7Giwxj4XQfUKhzXDE7rbqvcp6EACYW5Rh5KniUh1n1kDT",
  "key35": "2Rag42ZALdnTVNZJZtVTBFb3YSgJiBYJP3o9NfHXvQDTGxKgukm9N32hKCySYoEZx5uibJWhapmcRR7HaQSawwKe",
  "key36": "3vqW43f7eU6tFqjgJorLdGXvR56NWvDVu8m7hW71NKpbHrJGUf5s8Y3MwjfZKGG44wDbkdbex1gm8DZTLXgSzpuq",
  "key37": "2N3i8NKT2NepgGxKdkghseFdARYxBgXSCpcWWGSwDgs5Yv9v5fb81TyXFq9JDfAWAoQAMHEUXhWkMm3ddVDP3Ewd",
  "key38": "4URpsKwMK3CcD9HNa39K4xa8JRq4jxQ55RNVSXAwdr2V4wsiRJtN2XP9RkWvvYABiogHkuDWBX631D38Vee5z8J4",
  "key39": "5jymxATptdu35L7VMmXck92iaqnK4A3tfmxQ99EjQTJjvtkm84Gcx1vBWT1xAPgKWLMGq81wDLEdB4JGBUaeBrrS",
  "key40": "43BPVCu34npKVXB43M2vpeJxgS6tqSwV6C5Yd4QBeYnm2tkFgMmveJZ5qjgYFQWyfhJ6gGpvMPCf3fFs1AX8yE3e",
  "key41": "3VYphcX4ybNkFgmfurWpxyTBuaMSJGcadjVEzKLbQhZo9hq8dBbhB1L6RPUoujEx49rXyBLa7wokvDHPU3YRPDT2",
  "key42": "31Du6Q1tazqacGVP3eoNw6poEUNqonWT9Na3xd5YYjRNy55EnV53ixMWsDckc34mFeonYHD8uipGxDe8hvjiXcq",
  "key43": "2f1CCTLybkY8AHvszbdPYHpfyfjuvntb4zfGeiaTS8vFQPEhEQAVaQhMJxKoM8Wg2qSGMNPFB4i4QboR6gfdBRPY",
  "key44": "36dTnmqAMuYkcxsEG2kDgkB4pFhrb95xDPvwu61Wcd5mvwq5iRLFK7CeFNrEEMMmG4LwNDxD8UrWYWx7QxzSCFNn",
  "key45": "WbFzJFrr3pwHiekiURQ2sq348kNB1dTHRhppFodV4X3qd2igkHMPBrSRW7EMgBsVXzJTM4fm8SvPt6ePoGMRDMS",
  "key46": "67GW6UHktNNDfxifsbNggq127XxenxZceMnvQ344NW8x7djYNTChzMogTTeKcd24bPfbKSwgGL2gZ2Ukjy4cK5uc"
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
