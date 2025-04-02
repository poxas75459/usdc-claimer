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
    "2SqH8ZT7qYmxhnd8fgb2X2Sxpx7qKpP65vCJ3fKs8Yk4YQJXkYpSjVZ1sLCzyEFadt9YuAc8RZpwacRTz9UgpAqt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xbqZUKt6kCExZhBRcan645aUVFZfPiAYbXyfGoMx7xpTAz3JTNfsXhZV9rNdy57245vzXatkxT7Drs8rbgXdEiG",
  "key1": "4Pjdz6BohAB7e39JX9txoQdzUUvb2aKTC6CVeSvPT7n6xbiTXGngrsQdue9YUHp7mspVyWnptkj7t7w2r1urTwoU",
  "key2": "36UuaySj1DHa3UXd7v8QeWHAuehmuz4wYGZxdYgbFCp5V4kBWbSfGAyyT4JcTnMcFnxxXDX9Q8M4t8sLvfTF1GZg",
  "key3": "3Qj3SWvBPix2VcdASqtV5cphKhyEmuaAFrh5ATabEyNQKsrk8GpjnYmFf8F8nwRmJ8UuX5sYt8wqBfcYGYS1kkWa",
  "key4": "42fmAxNPRzQ5eLS2wh7pKxna6GoVt4xvUuSkkjcQezmv5akRfgeJmArhBE4u7QXDVJrCyEERCXeCKgCGEL16ZvMc",
  "key5": "37WPLLAdPHcrV532vRUuPMwZ2vHryXYiRPmf3YckGccD9UDyGqyjcGmDHNuSkLKiRM7f1VhKGpyNizfcTf8DhTXD",
  "key6": "4Qk6cCYN3kU9TCLxHv5jUb3cwNQDhyRG6kkkWofdMzchp8JFLG7UXYLHYwkvKsDxZBR6dvj4U1YyRXfmTP8gJVwr",
  "key7": "3TtmdUhVeCnA1pqRVd6jYWCnrH7dRuqDygysQ5h6d2jSjaQ9vsPfrbWVvbepWJADgsopitSpHMUsEzBiG3zGvs15",
  "key8": "4FqpLAtNAxfCZuKd13B7MR7kavZCQgX3KMg1eBrRXokhKr8FSBiosDFAeEe6TX17fb8ZJWkj28p6ZvkB4x39Wp7x",
  "key9": "2G2m8ffPAKHq1krKNsBCenbgVupM6usyNau16n54SwPsZDJRdTctxGHBJug1Yfvbpsm9qYtSVmG5fCTQsmM4V9Lb",
  "key10": "3Pt8aTBcxyDPLPhNrxQJr4Yhco4rYdVSiFg33hijvHRbymZu4ANv5fnWzUrTvCe3NdLk4ztyg96tj3iEWCcdaQhe",
  "key11": "CMzzLVMppGaAWi4anUhyzx8Rt121feAdwR6k7Wq1FYMp8S7aaXYA9aujYcVM5gy63jvoxN2jppMRM92jGNBRzrL",
  "key12": "3EUDTXFzYuQGm5H5rZaaAfRpP7RZyFc14ixdFZixZRxhe6BXAxsixpAthbUpMkcPieWtRRnA69J6TCaH9cXWVq5C",
  "key13": "2aRZugrdwaMGDbCpttrc1GHP9c3uL5pmg9YJb8ok1WJruw6YtD37mMnVcThQ9YZLdVz6kJtKxHxEy4FWuQicC5Ee",
  "key14": "2jjag4PN6YaeR6ft1fVcHwou72o1s925ciVkTJoBNapSdgUPmCTJi81wU5geE6cqkdjHyLSaZ1UrEqo4Lt1CmSXG",
  "key15": "2PJSLRutzwJ1rwiSewVh8p9cDbs6v4MVM8VSE3t7Sfzj74gnAgE43y9tFmk7prvtUT9PpLBkkP4qMMKLH75iun5e",
  "key16": "5khrDAT8rgrwResyuKzv3c4Pgv9r9fMsMkyuUJbS6aUaXAdMhUdjYr6aqBjTzN2Rxh92yyDpWxfam8hbbgRNpkTU",
  "key17": "4Gsnyr9hzD3A2KfSbw57yqAy8wgDnWquZXb1MAqqKwnfLv8Z5DXUcqWDVfCWShRJeAPBcaCRFvYxs1Heyfjx2Tqr",
  "key18": "3Vf8A6UvAVrGqEpBFYhRmjNB9HGJ9qA6eqsSi3azYug4zkzMNQmaDKVmiN9EaycxNmSA9iahAmz3ZMzTak4hBEKQ",
  "key19": "4HhcEVYACyS1GmgFLXMvMjBqhJD4jxpk2xvDYqZYtHnKgAJhDEHNMbxzinR1RkvwXKjCDLaHe3b6ZW5isRHZ8LKj",
  "key20": "5mjxLmMr8u6hnmxQQKBqdjVdaQTphu4Tzh8cKvx3gkzz2V37qjLJmeRKbv3Ec6EnYy4RBzEcFw2aTZUyH35Qj5R2",
  "key21": "4NvTtrubSXZmj6DLHwjjGk2QM5bDZVnkBuGscKw6LQBHYVnpDSLsD4vAta72MexJCDniPQSaPcS18JkadtNue6so",
  "key22": "4aWkDfKpBi63pbJS27CBiLwK9u3VbnQLuopodgQ9wqdAKgrea1Tk125yx9oeZJaPFjS9iHnMw71t79Q8bzqGbDD",
  "key23": "34QyaSofSvc7J2uxHWJi4hpUGVrQJrQELJt1wyGCsijUdBz9a38FahcNqP1PBixJuUWzWtsqo2ccWcpjCV5GVXvh",
  "key24": "3uGnStZvCXhyRKgHFckCsoTxj3D2saDbsFSrTqqrLBX5miYnYiwJrwCc4r14kPQJZspbg4crEvNyvCJDwzERaP7P",
  "key25": "4Eq7xgnPqubxb3VNenabkJ6tidFrDC7XGHGYTtYCsJFqDzJwNocnqEuY2gGxN7HfavbuR3EK3oPYx22roDC7JADB",
  "key26": "3WTiQfvpbvykfThF4QLoDVzrGmQyL8pG3L5L9epBs44VhZMAecr2so7VBDYdUB9fyTWbkcAk52Sw3MxqEw1YAcis",
  "key27": "Dp7GiwMdUwJAX8sujNvWvHxha16a8TaMsopyGhUFL8SQw6vUdhNzHYiDCGY6ikSazyRsB9dJ4641r5svFf9R2iJ",
  "key28": "5wL77eidVnwevPg1M2FJ539W2wjrVf4kdKHhetuuNgBWwn4As1bW9YgZNkFBW1eaBVsaXvgyHgjYrQZM3aCwzgCM",
  "key29": "ztqE2BEYN9JdbNdh2WFchQau2FgZu4spmwgkQtLpAu9s6KtVGHRKaBnYhLkqCJ2Z8WgJMjUj1z7vHJaS5VtdLPP",
  "key30": "42yhzqv7pUiFDfn8TNmT531D4CaWtW8Sms5cw1RXGMC5nDmtL4aoxKJUppxqCCaNAhCL94xk8wDnBctXLfAx7M98",
  "key31": "4dcFEzfYHYACM9QG2ttNdMVMem5yvAcQGN4dbMG1SJah3nSKfjHU5Ni4Jjkroi3PtXkfHtt2tMV9CR52hHfZqu3K",
  "key32": "qtoTEUZj4Ed7WkWLsZy4ZkMvn2PUu4KNN6b4TYECoV17bK81L2XrDFFhG7k6hpT6mUbQBGtujytw54sHw7ysTDb",
  "key33": "EuMXsGdcCUjctCgo43TXe8TUjGXfw98g7c7kDAjsuhLATwvMBNKeGTQkz2ey1PstnEPgRPPHR7XCZZVS5wcc2Tj",
  "key34": "3ZrUVanSwun1N9v8jKfBhxaRs4duqJzLbSLkjV8r7YnzhDReykMQ38pce23i9nuPk53AuZedkosg5xNAMmw6wnTR",
  "key35": "2yo9F3jZcd3RGQKcfxLwwRjr1FWjaLytQ3hSEQEZCnwmttHtHjvJcvvns5dbed3JtJWAtpmeZxE8WUX8kQ7Ke53M",
  "key36": "3woqsq76qNfawhQkF7YCdjwqzS2rRNCXpFHsvbjg19Koq3jtrS5VbTNukRWzAEJdUiCTAHm5J4466cC6WUFiUSWd",
  "key37": "37astpmP8hPVhUneHyr5ntEWoft7cJ8STqKQs9aAY6ojk1Bj1kFtQTyLSuXdxPAKFr36ofH7on2CkopNLoCVaMX7"
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
