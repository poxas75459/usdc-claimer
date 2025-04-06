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
    "2ZJXYb4zK8b5u6JLQY5jRb9KkTGLjoDp2JJNNFnmYsgb1ViBHcaqPTY1Ny3SSUmzb1tyvmXEbinSc27jpkamZgK2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KK2ETwVfVRoT4gUKwY2HtSpTtTR74Ko3RQa8UBHGERnJpXcCQnq4uDG4TwmfthqE47L7qUGvB4KGAekc4xW4Xs6",
  "key1": "3LHgZNzeEmyMmq6yxXYTfhRfm5HrUpukMbuug3yQw55xWWUmSVxpyJMSLSJAjbn2EKaVEtMLofg9d8Q4eQFddkb4",
  "key2": "5gGYtyLpkHwAFZmk8KYrwJDFNLdkrEDNjZRxgfdLn2kao7WFWuVg81cDp5ehaFv16J1MioXd5aj9cgKa3E5Sugtd",
  "key3": "Vbhig4bRnZBPjMXW894EeMowZq3WdsvnCCavVFm21ifptDfsCsfmUDJcZC25Zs6XNEGUvoT9KLNWFzcr6DZf3GH",
  "key4": "5HsQPs6jPhNT28U5bMdvVxMHHtGceThmVUxSkLR4T5DrmMjyM6eV38tDBvweMCGtMdX841px2VPgLiCzUzkCZ86Q",
  "key5": "5TJzfi6ATGwn7cyVD92Bs5QHt2CfrK3zbbihT8Ftf6LrEjbvmZBRZTpVX1unVyX2fvxJXWQsYUXKoC8RhWfxCDUC",
  "key6": "2omGikGoytYfqPpCTxhNXNh3h3jgcgFqSX7Xu17rSm3m9ENjESBi8WJ71Jbh9q2sDsENK3JJ9RcwgsdwdMtZ4TPd",
  "key7": "3KCx8VxuebNWEt2daH2Pf5jDtWYnte2MjyCPy8VevuLx5KhqyuFPFRrDFF9bH3r4hq2RgT7KYMNdHGhp9MiSGdwG",
  "key8": "56akru6sgid5iavpeM1cdLDQSTtt8R6qKyGzr4yapjprWJy3Lay43Xs4LqZnS2sfk4J1P3TxPqHr4vVAsir7uMSo",
  "key9": "2o6EXdU25PbbfLrbGUizDfa8i975weuVkcXKh11ShnuNA79dmLw5csjYhsit7AtywtqVhnRyeRPdh5ToZiawsCot",
  "key10": "4gqunQeVnZY5bMJ7kwBYo3fcRBdMJ4ECryLXLkW2eii4h5SMmNGuXBUA25mBfcabkE8c1e7J3UtyPj6Pm42NHCQA",
  "key11": "4KRcN9eMoDPAdGWSjK1a2h3nZhP7Z4RMF87Eb9qvvpgQEXuCaVKHuchcKPqxnBTTX6xRWGBfKSDBtCGiEfZKLGFk",
  "key12": "32t9tCXQnFsqhafMBpd6rV6PzpLaqCP5kgCdHAWcBY2xu28iqFbEopcwJou2y9yjnoPZNGyQQdfBRNNMVZJN36FW",
  "key13": "3C9zjERckWTgAs4Ce2bdPCy6juSJa5za7oVYeqpKZ8VFM58uL45b63qdcYPGDkyHFAj4jc61W5YyDBoPYnPeZuxs",
  "key14": "2ojYeRs7W6EsbGpRProEUoeWn2VjevW4jgkSGLC7pZGTXXubUXTvREdqVERh8sStpW1WWYFHnKArwKa7AUjMzDN1",
  "key15": "3XqyagB8UPLppAWeKpr2MTG4rnpwKUqMVWQdTSpeq2o9t7TJt6RFMRPRCX2UwC8xSVjzQgUg4hgQSdgTBJbXCp8t",
  "key16": "2yEuyW8dQ2haVRD7LwQaaiQ3AVnaQ1Xff8EpzQJ6nWHbyfL4kdCHMhHs9Hrv4vcSmNfqKswBna3jnaUjbg6WT1gs",
  "key17": "5jCLpRtBvKK3NZNp4ZBW23yTz6N6ybkPfedSWdSPieXnSCVXrsVCV38sUe68E5NqcgiCiZvVjMqdEto2EXcZCkwx",
  "key18": "49aGpHQZG2ruyBLGtRcatt5FNUs6rcK2a8gKQfMYMmN4sKJsWcmx2Qx7cTLSHeMJEc4nW82Hq6sBnCgPtvDgiHW",
  "key19": "2Gfttqtm9yPhmPkun4Lq9YtMcwwsJYyfzSBDg7yGDYeCFTgcEnmkRvD6iA8oqLYM3k2j5UE77RWr8QhmkurinnCP",
  "key20": "2QR8r1iCikYCNjSupuveh3FFvPkQTsnkwW92imSLTRXUQsmxPt1ac7qC4CW2BMX5vzQpNfawa8BeBoDZjZqpE5as",
  "key21": "5UYeumsiKNPitXMEMZxtwVF5wcBVGpFcGU9ZtrcoBZe1UZxrDbn8aWiFyHYTEK367enn6zsFSJhW452ANV66pTVa",
  "key22": "5YtbtbXuSDYL2E9ogDk3EC2pS8B6QrjB1PvyCZUmaLg3Xaadb7SFkNiAAavL5xAJ2ZocRQC3TtnvHdnKaLq9c5c2",
  "key23": "5MYMqAZmQCYapcACVAdMYvzbvC4tdMQddNAzx9cshBsxQ3qLZA4Kjdp9SbuBGtkoDktGBFtZ18j8bXCNNcq8oTKY",
  "key24": "3kb79RkwXmU3dFvZ9KtjLsJidRsbSRLu8FvR98hUU95osiPkwXzQ5ys36V2Z1iAnwCkwVsqewrC1G993AXztBP3t",
  "key25": "2YhhHdapMr69u28JuMw6s89dPBpg1MHUJ6Q7WzXb2TxaTvLivAwBtPMWPmQjfYFx6oUnXsLdqgcqNkz9UNkYX89F",
  "key26": "31x2M9VT9iioAT827gXkpjgzAnxtKW4dfotGYD2zRQvX9xRvUco565ateyfK7hcUHX4SQQL3eWufUYB5tzKQSMr5",
  "key27": "3m4aUzdsy29KgnsVMmyyE2rvdBY6rq6c2ejjq79GRSteKs29SjsfUASfRF9dWWdjniicbWrYwpYssHt7Wt11wvjp",
  "key28": "5QQ3R7DwXTz4WaCi2mxzKN3UAXop8CvN6YquTS7Z26dZ9LzSG453qwZDbf5pXvxSputaYm3uDrzQAmB6hCSkKU34",
  "key29": "3oRo5Kxivs3zVvtbCQN8tHrVGuMRi6dJadF3Go3KEhXdUMT7Zwu8xJmNTCAWuUc7ZoquCVsGevDYzE24LZdjiztM",
  "key30": "2X3fyBBVfG7qEGTyvBumdkByFSGa1kkj7kbaRwiWKDVGNVvKBRYVTvy3EhsPniQeRNG2BASEBsjwon9JTXo7zYpg",
  "key31": "5FFRYrFd2dxcyKK98HuVBq66JMCAFbYTVhuPpjudnEBswEqMd3kFaABpMWme4a5ZEGBkqiTyUWS2JnSZfZXkMGeD",
  "key32": "zk32dek7jH1yom6JCnQyr6QbDtjExcSoJojX44B6VwET57CWs7RHWPSyQvrxhHJrGEh96UtG8A7FDdAzMGab5cN",
  "key33": "2dGGrHkuQoisSn2BcnhDyr4eQnJzVxuY1mQmpmT7wSJfro8vJUDb6RBJ3KMYqrDZZnfuGght6M7SoDrowXQ3dKAT"
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
