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
    "3jTZ3Gq3tqCDRnvBEueRZ9hG8iaZxB5Xd6Rq1FzqTrwDRzhC8zPewaywy3hFqXvGPKz5rWkSqUdPPU9X9y9U3h1p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gMVNjyRuU4QyykFSJsGYLAGzayEJFakgGaHFiJsmTpPzk1o3gqWzxGZDrZfFJHWrUdYRxANwHVduc1ZCV9UomKc",
  "key1": "3qf7AKUEdV3pBU9nygz4UAcRaVq7XXoruZuxWv58tYmTmQpqiHdZxh96pLkyyPc3c9N3hKJ53qLkT4HrLUsXghK4",
  "key2": "4Ws9eRGQ6mYgadu4dmVPxiSJLSGvdJoTBeo54yikJjiA6ELQgBZFhN1nfw6VYQ5R4FD9ZdaxtBpFwPCZFemyYqsW",
  "key3": "5nrqJxwkSEvxcVc9Sio1jSVednADTvtotQ3FfUN8eowLPnRomTWvs2d9HDX5UyZz7dPxQB9DS4gWm4t8PxtziQJL",
  "key4": "46qoH3CvNm44cBQkXKyNZks2LSR1bY9XGjzEN9Fkor4HHXV5jQPo4E7FXoMzuk64bhfFtrnYBUQ8L6a9xm6QSYMJ",
  "key5": "2FXiBgfrYhLz2oaTcZuf8Qx1vQ4JEwn1azRKLJk1Ejznj2byn8WaGaM4ANFbxesjbikRqgSjAxjraZ2h4rh2TvAf",
  "key6": "4Rb1pY8BwhotLAQREjuhnq6FPxk8oPHZ1G686SKJWV6QqZapDxUmcmkPgsAt1Y4UmhUQiVy1yLUCVhgStESeZ6ei",
  "key7": "4w2uPvDGuKjk5F5yLs7QQJqmkgGpPDA1Nz4yGRgt8w9jEGxVuCN3NSKvk2WV83QY8rRAHLPZtRWas8Ltjk7W8Emb",
  "key8": "5VmwRz7c9o3Cw2zvuyJRN5qsdWiEoB5VHxCNmtfcm6gRW8cframoYDJhra24LkRaC4BwTSVHph3juprHSpJiDHse",
  "key9": "5mGHZCSKxHZno9y5LsfrUvZ24QfoNN4B7wCCLEGHF3CSWvQLmq3YpBS7mAnohYUok6S26R4bu7LmcGhDasykPoGN",
  "key10": "3ijvo8yXgY5sCZGrzCk1RPD7CXVeF7LFswi5PCtatvRkmgeFnFJVJfb7YNj9HnP2FSwqMMvAD229sNbtrDJAXQP",
  "key11": "5jE899WvLsoqncGXSqwNLVpY5wLgH8mdFHMd8MJQh8ZyPsvSBz6VmwfN6SujrKWRS9j1g86mJnbfCui8faHArWTg",
  "key12": "24aohRxQH38XsUiHmKarqMMquW8skykDVJ7QYrTmgoBmTzzaPaJ5juyJkeNKXf1yBBjyYW91XWkCwcod2RpjZYmv",
  "key13": "2Gg6jiR3Z5sYdWiDekGTBk2zJuTiXCPjYocp5e2YmpfNPBCT5VuH5N2Jk3fdNSwaafKwoATpW26w6GkFai5zG6qF",
  "key14": "2u5mfD35Hz1tLnLienjdY3GEFcAR7xL7en322KGWsxn7Rz7BewjNgY5BSUgGTon3xUgMChLNkYmLHM9Hp6ZDgJx6",
  "key15": "2eNaRv2LmTq5S6JB7V6e5xagSE468LCRoX6s4jhKLDKugnnj2pUjGuHbfgq11uHJnoNTvEBwrqa2t6UhenFd4LXn",
  "key16": "59fhwCCEjCoEK5q3Z9scY7832Hpaew7kepnXygQUMcvvu3cdCb5Su1gRxcaJLQAGYksX7XqZiLN3rr3oADU4XYjY",
  "key17": "5zGUBGZmssNMnGyNrbCHRDcisDhdVWi17EJ5fns1N4wCPeKidbc4qawo4WGv35fLkSMYXm1oF1arU9MdigarQdsz",
  "key18": "ckuRzh9Akm8w5CAeouRauvWdEhFAv8EKKk6id7JCZizgMHMYNJZx6whHTNPq8ayLGTPzPfez9H6cH4au8xPik1D",
  "key19": "3ZibCNkom7E8TEb9UbFXQFnA6VY5VpKubaxpzsEY2vta9nqwDBhXUmyrKG4tVaZZ2qx8KdWPjAs2Atxiik98QKen",
  "key20": "YcTLMG7NHg2PBVMnx4ynSAuPZz1DuEQShHpnyBMR3EbGyWjhEKzURfXyWohKjjKwjFuo5VdiC51GfHSG4HsWhZP",
  "key21": "3iH5CbkmH9yfe7EmeEufGnBdCNpTQ39ftEy2msZKqyfu9SgNngf3BohtpfpVAxxsnz7rGqP5Fk1xGmHw3vWzjfSp",
  "key22": "4HpbB4FPyY1zYe3mnHjUBffpzWiXTLG6W8tY43SPXpj8QYtfZgLUi8ohAA1Y4X8DTxFYR6SgHp27c2KaH67UknC1",
  "key23": "QhoRKCv2s9n7zrEfLhGYZtQN9maWxJNvTDZickPL8WsUvzLhdxexTRhwcj6TQ1FyGyR5msuc5TMBZiLnt9UhxVC",
  "key24": "H4X4zCHTuDUsYcCUbsaZirUuTqfTTFqKCYQ29vFT31tEsEwJgocrWUpdymja8EotLJfAq6F6XxY1Ztg1PAApvw7",
  "key25": "3LyxjMm81M5MeQZY4dyx9uBY8oL4BCEZZmQ3EyBhqQSmiyPf8Zg7cz1RnDYdNJkDNbUey4oH7qFGeyUABcFvWmQa",
  "key26": "2h7xsXkzhLjKzNeSzUzFdT5R5hVuV9q8FjvLaLJcsQhqQ5Q6296EBgZnedv8oDtjrQ38B73xFnS5bNU9cuQyt9af",
  "key27": "3e5pAk9irL6UWV5GKZmW3h8JkgAVHMt4xdiCwz2AhqFYU7VPrQuEMkNvgKmKyzCf6QfqtW64QygFCuo5WuBASXx1",
  "key28": "2o8MoX7kqjkEEZ5Rjtfu5rdVmBptXJFFAVjngSADWJaPoFVNLCnUktSkeeGzS1RJNfDKpXwZ4vfH4DJN1Rtnfnao",
  "key29": "4eAF8RB57PxEtSkgcEXjRUa38si78WyvTe6UkgtvVDV1kEwryAfWWsj6irX9zxTf55Hb6JKjQ6aA8QNxD3D9t9Mh",
  "key30": "3kcp6rqYqEjYXsg6f5c7awjeLPUc6bcbsn9oEfz6u3ueuxZKbMwnqZvNDfRjLYzCTHCyE8oRaKD8Cc1N68JfPcCC",
  "key31": "3Zq1vxYTunxJJ7v7SbaBSumky6Qw5hsJcrB39LkdgNyo2ZYLNajWkPwEKBMvicnDobZX8qUgtXuhiyiiihKw1eU8",
  "key32": "AaD3a3FYZkc7kCJvE5j6MedyZuxdNfmJto7wpdP6nJFrctCQD2tnuptMsg61K3rY47B1JPxRQf8qWXVVVqEASmv",
  "key33": "2Z1qAcTwTt3F1dFdBpfp1CzzjrazmYq6LGmRpDg7NuiC4WnXrgFGJRUcaJjv6JFto34jsYt87J7Mj5dnwKcheu1h",
  "key34": "5TfaJw6W8v1Q5AvT46Cy7pManb1nMgBztHGDdGxx37gBnmxwzHeGfBwhuL3SHwdRn1gbYQMB7a3PbHb5gCDHX9rt",
  "key35": "3LPe7nRCATadpiw66nXLLrugbJ7ZCXUecsH5WHrAk8cSDXcW36GZpJvRueWdakRiHdCVCYK5a3yC26hkjR8cb1gP",
  "key36": "4FbqMxX1VNZVsogw1unPybPy3jASMbX8ELTSubbPTRxw21ujnV4U5CYU6pmeJkgmL9FgMCMQ4CFEQfPmXYddKX6Q"
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
