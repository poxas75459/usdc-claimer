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
    "5LCf53FhTQGJ9L2QyWJBRGG7Qd7W4MTgCnFKY1UioVGQxBocFHwCb4XekENhZSW55GSB2kbZeBJk7GVL9WsHKMdY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TThK3z6xwqAAdjhEg5ydZQ19LRscMaTqkzU1czMRHrPauvPBxipp2kXSsvNz2HRQL649hqJanWF77kvmcWVgrDt",
  "key1": "4vsJqzSKDqRiEu2QumnM6TQm41wnmGzqkYXEzR11PfBu2i84yb4wmho3yaKbsifg7oCFjiJqqnmo8eJ3mMJLC4Ua",
  "key2": "5EynTgip2iFHdikFdrUhis2uzRdazEKZNk9hPx68U8d9xrT6wmc3cNNLezZVWEpni3xGLPDKgbNRhhBU2DAqZRLZ",
  "key3": "2N2xWnxuJZsrBrMnR1QGaZycMjzpDBR1iuygkvLzobuRQex6peNW6wYpFqSdKgsLewbvhH83Pt2w6CfKYe4xfzLj",
  "key4": "4J28chNd78VrHWAVCF4AWM59ocvGFGbXLxpFq7w29CtTzb2mNiQXUSb5zZcUe1vKDHTtdTK2TfLuNwNSeY3fTcZq",
  "key5": "3PX23tNggPWrckZ5Rndhdy4yxb71LqTJ1D5g5SrjeTPAdgQ6ishzd2bXNxxbVr4xBnHTBzrfDppv8w8SSiMmv4Qn",
  "key6": "4Rfwnp4sij5yNjsz7Vy36DunzLytvvobgSwUDBpaFcj9Mxh9Kq7D7VF2vX2XFq2CZXoWYvkiyBJwz9DyQBMbSPJf",
  "key7": "2Sz1xa8PpavvThi4Jyzdk4RarGVeXvQ1Z4ugpHhXDVoQ6LW1kkkLGcjt27w2yXtiwCLryLjDkscd7rdVDmpqMEmi",
  "key8": "3dudoEyJxq1WuURC1KgqYTDLVFamj26v3J6jBbxQTt9vxJsrTvRqHBxo5wzzcdk17h87ADjoo9B8BUCPXCveUgCN",
  "key9": "4AoQNrknKSTTnfr6Um4QtFZSCA5R72EeYzvz4VxLEJYYpFYzbw7PpjzD8gL3iCaBrEqwdPV9zdhZZ46tXY9gZjXw",
  "key10": "5khRJXxJ98RsCJH18Epj4r8X8cRW88d42NtnDHDfW26VfsjivrvPeeZuJWGpuW6fd2JV6SUmziC2SeKVkRY6LxTN",
  "key11": "2m8RJGGrT4nFUdCBXsYZ7jpPwgFnxjam1DgivTEy7UmmGrB8PTRf33RxVkbbJsdzvnryEcbGdfwvMT8dNSp42AL2",
  "key12": "LqKQrzWfe8W1SzzxBSpCu4woWVVfFphwDvigmHfVEmdiQP2Mb8K6THUo86oE53pYxF8SPXvs3R9WCzFVPMLvJ3t",
  "key13": "M7x1YtSR5j47pcGQYo1nkZoexuGxtmauhC13CZVuEZTxz5WqqimLYGBbDiAkLjGeTjpwnrmmjJ3wR6ZYu6ghntQ",
  "key14": "2Fogf3jJ7XaiBJV3LKWd5ZTP8bRhmitfGboQYkuCL8kYQNeiYH3cKsKtsp1qFVGzD3ZSLV43synfXcDpsAGp7iBU",
  "key15": "3ojtx2Soq3SCKhktaeRicXPwM8AM4sCappeJFVQbGw3qWhnWm2o67dy34xHpvVE6PSDN64EkhbhfQj7gvDSYMEcu",
  "key16": "4JjDPB4YXYR6oz3dFtWmRS8JX7uQ981Vf7n7oh9L5ATcgR6uCdm2Hv1rB5VKx8Xm5CfR8AhBgsG9TuPm8jgyoYAQ",
  "key17": "2z1wK4EqBV5JAafzfWYKQDHaMbESHhd7xQghuXbXYyk4SmhSyMrntxyLj5Cr3maWzHfCLRpAAMXVNPWsqMRFrT3Y",
  "key18": "5ZA5xHxBP82WDUcdMfVGHPSmdXKSHhHQvCcjZYg2WKfouY2T2ZS4bA1oZpXRc3V5uWWrehQnsPi8DUCN6nEcPfKo",
  "key19": "4xNbp8hv9FZK9yHhdagt33yNx8XU65kFMhgfVjShyU4Muryq6KT42QfuTmok1RqHRi5Bij3wQWqjb3CvfwdMHLWN",
  "key20": "3mRYhE2UXrk3ADFyuV6cUwtwZKEfgLUFhVRZfBLsPeY21wpov7FAwJRY7j4YUQNVjGRthG5YwTtDPuHYnoRpLZfW",
  "key21": "qwsk1e25sghMe2aGFEwoAa2dtrkpLfrcN3HUrfqh74YB9f2MoQpYf4uea2ev6ozqzgxQDvb8CHq8MHeWVRR2sGR",
  "key22": "N3jQT97vS5gMYngNEJy36HHYwFRMvwqpa9Ridt315Zg8UiEmykvY5NnXjdtdXyBhvK5DpYKhj5Un9yS7NUmj5CL",
  "key23": "TaBm4iYkUiewXHCQKbu9ULV2wS5QeUQSmnHHQKSsMg1cxkJCXPbuu7F4mjuyeWmSubMR7JCXh6oh3qGj9LwMeTg",
  "key24": "3a8fNHCeVa6t1jVJfxsJnh8LgYtp74QKYjaCJHEvgVHxntdh8Tf1sGh5keBp7TqqcEqqKw53FgqQQCm85vXk3oUw",
  "key25": "23NFYqjwqRSaDgBndFBcYjuQj1yzWCLEpbcX17ZQ2S4vmYHCvKFBXYRd7U4BkvvfvPpGQdXz3cMNNuFtioFnAe7e",
  "key26": "2seNJnRzwqtHUxSQEfFmK3Qf3KRcqQ65f3KUkRzNM43armPKCAaFo4z3pTd3q6KzYzHr4sARwjPtCVuTwwgRRmDQ",
  "key27": "4DLScq7qcbhrxtV5o4xXZXSm9tCs1avCEcKBYNN9KegTxsexjJhmc3UeTJNRNt8bx3tLGYoVt5bAoXdZRHJZF9Fd",
  "key28": "4VgfzPCrezJUy1v9NCdgxoSuqa4mCuYhYQnZWZNAJ4hQxKW5brzY9p2iB45pccymDUm9dWYoZxhsVG6KedPi6Bt4",
  "key29": "NVzVKeGzMMpsCaWo6dkLouRXCZYjPkWLnCzr5oXsS1NFFNASNybqVUUq556eDggbdsKSgRH5Pt456n2QH5zMMTx",
  "key30": "2cFXU9dbiZVKPjjDz6W9ZRqMawK7P41ajUsnAsJh1ubtcpZCCLSN4gFzXrMhAe71hDESVMK7zvK54SetJW5nopLx",
  "key31": "5koPpyywuncXW25Kt5SuvajaJAgJNj75SCyQuR9hh3WwzWVKfg41RJLRPLPCooZJtciMg25xomFdaUoDt6k5xWkf",
  "key32": "4D4kqkWfpsswsXfD4dDinZp28Gu53ddSNuceiTFnrKR1gojvJMpon31hPxUwzkQh6dBf4PjfQ6Zphb2TCMJMZKKS",
  "key33": "3Erstmg3hRcJv8bwPQ6UVDzMMQQkxYngKiBCQyfWaVoRswiFqBhQU7oMTgW4RaYQfD7Muz4s4JxiyrGT8fAGmuDL",
  "key34": "3Wx7nRsQnTx4wbhGKjjST2jbwMTydH1d6oynaVLVuFcqiVRcUa7maT1vJzQgFdAhUKwfQkQ57bb5W5HUR92r22jk",
  "key35": "5dbjWAJEH4mpSvc56DHvYoQue8NMgX3ZD5Nq3EJBTJnA5qE5M94iYTLrnPx2MHG2BUKHKhT71AdTcpb3k9te11rj",
  "key36": "2YEwxcoKdZHdP4sUnuoio2ZvBLV5uAVAijwVpqb3Ru9fFPgeSMdF1TycE5KRVdM2sfciu9NLAvigcNeiKbreSCqf",
  "key37": "pwScZYPVYXB1zeq6wT97yJ9aUX6sAD2gbpy9wGqrd4wurtX4s9MNYXDz1FkS995RYsTR5hQr6bNB6GPmBkUbALt",
  "key38": "5twjAwxHNP7arFhN5FKrhJvmWDMFej7zFCyhkJNJbf2qX9FzrCkihk6PX8kNY8jFb7u74sVXqtZHKPqdguvmvtkK",
  "key39": "48WKK9pbMRQ7ZNpSrVJFJDFs3NC9vzDYDocruKe6aRsFWBPE265qQJKhLrETeJq6ezNa83joYFdfPCZv2j4NTmGn"
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
