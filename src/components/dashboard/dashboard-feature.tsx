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
    "5zmRTw1DbCgkkfgrrbq6rFCqmkPKd76Hvo8iAMyoBPZ6LGXt8LKcS6C9MDMaaxco4q7EoQJN1YGvMH7zpZdpvtt3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mkqZKHwdk8VBh4ufa6RraE89jsjkzSwXzQEXeJEd67RrAPN9bLtV6UFrHJSTPe6CWfs2a7t2pqmJhFze4pMThMX",
  "key1": "1YQym2dQdE28q6DGcXDJPhigQofhbRpu6jweoS1wDc8W2ZzdSh48H2d2wzPerE9bBxXgAVmFmF5x1pqNtE56dJQ",
  "key2": "2WbZuaGQ8mvemfyz7nhWGEwCBbDZb7sKKUzgZDLnsrHromXkjsYvcWEu5aGvcU7tTqTDusKiYwTcgRNDjijY8P5",
  "key3": "2WaayybBLQpLi9RfPtoewyXSJUiBQHBBPu5dioyNRDQy5ei9hZEreTke6Zrspeaxut6k6fS2Vi9k3Jjq4oNy9br3",
  "key4": "ck9BsYTyh1ZzuJP7gtZUfmP7jFWHQ1KkR3tghPpDoUEm5Bx5JEhbYTaP5k53xnbuFL8KAzfvagSXqNG85kcgwAF",
  "key5": "4RdJJhy9MG4h86hP7ndjdu6ign86eo4ZidRqst8sz7k7gxGjCpHoPkVCJV9sBrznGe5fU9WaamiGsyMfBtthCpSv",
  "key6": "5QBswFo8B8P8iAJF4hSpHY7pBXnMo7LeHoDKREHcomeGBrgG8FgRKLiBj3oGo3rebjKm8jQ2SbySF2Ykm8R8DWGg",
  "key7": "5CfiNwtFNkoUXpHjFiTE1p9PCdAvY6XvYVA4DnT91D5JYTrALMuJz7in8KWhGam7VtiRjNphTymHLbowzL4xWYdj",
  "key8": "57ACjfuo2wAKd6pM5g5jeWNn7xk7s39WMWMV64vxuTBPu4ExGjBFiBkCgXYp6oqSmzxA4zbULCY7byHGaFkCe2qK",
  "key9": "3u18RZ7ML5ca44c2WiyQ1v4kyHcyWicU3n5JiDFDC7dSatAwSLk7AsHN3vnuxaD2PrBbxvv26SExEz8oxfZoCnkr",
  "key10": "2QWp7F9k7hwmxiPGmjRFggnJzPWmsbhxSZTe3SqmWi8GXuDMMooFJFZXSihjRvkyyYthtMaDx6UVxt2Pjj7V38DC",
  "key11": "3eJifKpyiqinBQtXkmRUJPt8J1SRiS7GeFYUNt5gzqb5PJ3G9YcgC1ZQFgs4PYdusvsRPQ1BzhqkLAB9gxxMS5ux",
  "key12": "2Zngo1hc1qVYuBQg3Ap1BrxWuwbZRhPHe6PnR6opGwDG8uCjvg7dAd7s4ie7sDeytLjFK3EGemNrbLoMK2ERqns8",
  "key13": "4p6hcXeQ7jQGdNjNFRqvpPD14mNcdGEpnUiT4yuq4DUP6o1TaoEcB1v822TzuoDE3HhC4NmoZMVF1BUN5mX4RzoS",
  "key14": "49WPv1Wan4byoPmgBnpxN8r3E8upLCpyJzoBuvbMxm1CM3ueUBRPhCHimfMfq9etBDtPAkWix9tTuKPC9fAZwkfv",
  "key15": "2Vv5msFpuoyVc8eTCoZoMkanZtG2U3S5pFsG1Rz8n8EDp8wP96qicWzJDGtBERXMwjDNtfLAZ6KNyAmE3jTCo2B7",
  "key16": "do7VLmxmAbbmGZYx4Cmk8nQ45XZ15u3s6Dg74ishrcezhx6xj5c3CDGY9QK2XxZpkt5x5deK22d23MmBnR3UW8q",
  "key17": "2qEUKewQLZvr8pjxT1dGVsLbQUHqaxcqK7rf2F3QC7NB5Py7S9NqMWQLaVmW1GMmL7Yca4L1DLgz5N7aEVyoTyWz",
  "key18": "67rF5BqTYefnige9XbPkrzLixaeFiquDCh1AaprFZJ24jWSHMa3RC7R7fVs1PMN6nPBX7Y2NHv7tDRu7nbWYkJSU",
  "key19": "4epzBjexrP8XUiJLUFFFRFYYHVJ37xw3LdsfiU8g2g67bJQUy67QSMHdJ4xUBMB8C72Qgh9bNj67uWSwE5uAavQr",
  "key20": "2KzXDhY3U1bouD42RayzYXan1jHfUYDp4B3xZTVQbBTnSSTKiK95ZuG6DcbA1UWRVke9ZTsi9Th3k2SKwgYDt9HE",
  "key21": "2rPXUBr6eCvL21MvY5X6Mi66qCrRergMke8trUL4Nwuv5gegETNohzYXbLsEUVT3XEDjzfwXPKR4RNu7jDiv2zEg",
  "key22": "3NeUwg47Mv27NYe8j66jPpPpVZK73JztvGsfi65eHwEEoVkySjo73VXcp3oJ9cDoRUnnLV9mJR5Yw1nSwRTouSsW",
  "key23": "2gLJBbShLTCu9m3KgTDaLPe2SA3M3ntbPbXGXjtEYd1Zcjx4XUaEv7uGgJUC6Gb88Hbjw6GytCWy5pvoSzD5xsyo",
  "key24": "2KgAssLGpJ7W56Fv6ttPu3phcFoXv9qvtwPJmqMLNrH312mQB8HyJUMCQeY4fm5BQkNUdLyQfbXG5Ap2Dqygo6xi",
  "key25": "3KTiDuXjQmrNB26sZ4LB2XSphLr2AbkcZdJdv4EyUQCbjAMCmKL9zobWFDG3KjJRzQ9btLMy9ANUDWXrgrBBSfCk",
  "key26": "3HXnYxox3Quun97M6rKtQS9qhtgzc2U38uGHtUG5rQwCev2Yw2cnwXtMAUnpKpDhuBecu7xWfQybM4CFqACeJzoK",
  "key27": "8aiNqC2h4xuLk2tUKmuiienjKQHTCr4aGd6b1dsgioEpwRywiKpwz1rnRRDtXPWvQvALhUCbMfMhvUZwnd5e2Js",
  "key28": "3bsEsKFoM8Wwy9Tiu2ByGSmkJEa714ZV45agWsLLQjyEgLa2E2swEm7opEneVvdgcY6j4Q8RQs9pp8H85KvSUkfj",
  "key29": "2pmZZSJqbaf6fpJEYBS6eNdnJyjyjn2jqiDsFEz9M4ZmaeryGvuQroK2HYDDXbyjPgqkMEJE4LEQPNLiyW1Wb2TE",
  "key30": "2MEymzzaduu9cyafSpuqiYUefmGDatAzLvaTLLgoVdupwP31jijvJqSmrE4roqhVFAe4M4Na8RDLHoNjojZDHmwz",
  "key31": "3zckpXGMBcdNzT6Z9kWckHcWZoGrk3MMNjV5HDckZhRbJJmJnpUobzSRjaLgTFtoWSLsEqLiB9NcMwUhQrkRZon8",
  "key32": "4w11Ukf8wq1ZCV3oKBN1UCBXF6oZXnrJyhnepB52ySnpsKgjsGABeQ5o2VSzFZTzVW8JSPSwEAYgxu5giUKkx6u6",
  "key33": "3JEjTgNi3zu2fXRxLu6dLDuqoeSLPYTmyDZxSjWgQxYbMkmwvtU56iuzBEqzRbENhNpDTx9Fua77f6Ugb4TBK6J4",
  "key34": "2FtnH1L4esHu3QWFfq7Z6zpgf9YaekbLQXFPFiryKZpCeYWavkFLeFrDCi4VcqkPrYyCu8ShNicfvfwrmjK2oDCv",
  "key35": "2k9GdQSSTGw4wFBvvVViU4XLjdNjf4d8iXHXiJwgHkEoJKz5oe5BJFsm4ENrMJXwY2sTkocdXrb6j25qrMoaxXzn",
  "key36": "3RShCW19Eu2Yw8Zf3SejTRQ9RwZ1XDrnte8Lb4B8XUB9UsHmkyHB5eFDx5aZhxnc9wNEmPL6YrFa7dkTrCGb98VE",
  "key37": "5Rg8cqsRfscvqxsWwHceu3N4Lb1GVeaQRhsdebzsLcSBAG22fg2i31xyahUbagWNa1AbJyare38xojsrsSiFQU9t",
  "key38": "5uHa6DVMWd3NxXbdUf8bN2tZe43TKYDnoK6EtexgGKES8Z4n5mb9x2s3jECXHsczFDBhFgdwj7Kccdp7UnDn1Yo7",
  "key39": "5o3NrqeLNcSBdQag5SBprN2Tf6RpLV3EeiiYY6hFp4mecnqmY6kaRSxk5GLM3dXBrEuTXB7epgmw8rDXRhhbFHvT",
  "key40": "2ZBe144eTzkNjV5y4pZVGyJmUZopSXM6mDs18tkTWdKrbq17cnd323g47p8Tup8GikNSA1vyrEJKz5ejHYX4TSzW",
  "key41": "4sU9s5TA9tmsPK7oWFV4k2JeWjLT5mQXSmpCLPkfpTwCVoNJaTSR3NnyNcR3YTfyzrMXLiE2287zjEeWh7VwMQU5",
  "key42": "4vbbCcKg51oK7ymuPd2j7V1gGJu5ZeGnrUDNik8EHrhLMVP75K8CTFKNN5tHshoEkHUpgCnuKXZtUoudKv9Sf6eD",
  "key43": "65K9eQG5LWDsUPoczbEhFaE1yvt5c1FUXwjmeKRgyNpozrTjTSfzSKS9YmKRKm1ruDB1mJQVJbcXyxj3iZFuJVR",
  "key44": "5ssHcQkiCqq8LTqxgy483JRikSqUdY1EZow2C17PNRoGBiBCkJq4TtAvZLxVJcTT5fMipcaDiczHiFRcR9wYDYVS",
  "key45": "21aorWWu7nHXU32vdpoK9PCZ9nW5FXjQBQQLrpy7vVxM5PChnJgCFN9iEVwFM3whvy8Y6NG86UUtD3NMKVDBUg1N",
  "key46": "ks4pUcajyD7o7sHQSrxcgPt9bAXeoUGU8GMrc4ds4g6GWPnK1SAaawYwEFc7yFD2igf79nimBhzPhSWfXuJP9S8",
  "key47": "4n8Mnkc6rj2ocHtsbneqh1CwMTUUmzvAMqX2dhJjvHe1yQ2UdxodzMr62rPpAA4UwH59pTjhiPJdMo2zTgG1R56J",
  "key48": "N7AdFvagbWAy4Exx4a2gqLmfCG4JwVLQhe1C69hoTR1ybP7agTDEs2AVURzk4JN59rmqeWzr4yPDHmweETzLd5Q"
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
