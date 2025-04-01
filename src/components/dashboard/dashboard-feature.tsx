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
    "3SPKaCmAk2bQUMtScUmyYFv2dGLjFfTVbAV5nHSZYMvJnGLpvKBN7q8teMc22WTyzWt16s5meF6GPAfsmum9zw5h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QAJcSCDe8dyZS8mmD1NSeoXBSXUEvA8YH7dzTV8FH2QgwDz8Wx3ihH7kDZuCJkS1kRwRThqjxGV4LhXuk1N2Apd",
  "key1": "4zaC5j1MNE2DaSfv79E8bE5Dk8UtmYExnWoBzZMNTynTrq8F5kzXsHEziYWwPgjSyXo9gUAuEGzB8Gc6AfmEqx6u",
  "key2": "2V279ccvYLDQVM1tbrAAXyQcFJrvFegdNScHrRgAYpwGCGfnctuWqQQLxXgjgBhTtg4azAsx585SWdaDJJB6NFyY",
  "key3": "5CtR7GP6MW6D9tkog3yvAWSiENvHnFSodxkAXYsVKMEChJvnRC4G7GiNNVVeh8uoTD8RzXKKirfceE63LGR2p9ch",
  "key4": "2sV4oaW8Ft11gDiiKCEjfm8C7cZU3UPyTgTop4YgUM5g5d3kFJnPgiBLqqcU47yz5GsCgeWZen9jfpt5ZrB2X4Rr",
  "key5": "x4p9pjFbhzLH3ZFgeZgtqxp6vc6dH4bZg9kkboRuQpe7ofLZsyxSsjqou9c7dBNkW9R7Q7ro3h4XNgM5UfyWrgL",
  "key6": "5AUTZwkhoezwETw6zZiD7MnfstknRa72U4pUn3fdjfGUGNAscvzk6d3gEqjGrmyCftceRLsBFVdNcC26urwh235X",
  "key7": "5cUznT1CENCAbDAimc5Kb27gn75ykwVGL8bVMQd5jkYW4rMtBmetj7rHGgfp5dmaePggicnfB16YoWKvHzR8PZpk",
  "key8": "4stEcoQSKNBusJrPyEjQgtUj1bhF9oEpgayzU86YBanzExW3dTR5gpJhqKC4BZC9sctJLQ2QPXTUACyifrSxfyHm",
  "key9": "UHRzGC2KaoXgaVCrDA9SLpzMCvTWtagFBrshPEa24WmuyiFfYAdZpSwiAjuswJKv6f2fYJWGpyHiVyWs3tRrAS4",
  "key10": "2zUZzVJDqwz211RNvKpiUpJeASxgFe6oPGUB8AV42rf11T4ZRemfzDrX6XVi7S6m4UqX79GgzNczVsPtRhWmxvES",
  "key11": "5F3V7A4WcJ6Pg5ZLoM52az7AxLHK17VWrctW1ABtC2ZqQuavJcB91KFKEL8TbMLHnxy8tybB8tjLsNh7auqMXEQ3",
  "key12": "4crXHg4W4HbyATGRz9rmpna9QoKVN5Lbr48CaDT2pQAsJfs6LNMQP2q4is896EyiqBzTjc9VDoQos5mGEKgYFDg2",
  "key13": "5fygY4eEbKy8nUF7U1jRmS3pF4AMd7xmGFpN7sxnq3vozDn5hA8QSqUNVuCBFt5DiUVZq2wkwH9yyDqgt3JhwdNh",
  "key14": "5BhvSAeVC4oGLafBjbmLsTzrU1TtpbUSdG8RTcCr9h8VCLDqspY3gyWsTeSdVmh2L3UMj99HTCFsMrp2sTbYs8fW",
  "key15": "2VmWRDeK4gRprAdgNgKSUmJGRqcigxGraxBqCJHzADxLfsc9MZrcKFctzJjyUta193XgTui5ZQDXU6JzJVdzmKjB",
  "key16": "65hrZvBL1pTwRXGvykgyP1729xPXMKz4aTHEjX9DCKdonbeFBsMgrJtEw5irAbGczSA6ttDEz983PTjyouHn6731",
  "key17": "5iHZGGhxfQ8pWbDcYgxjRwkyaDJZLMyqwJuYnWgzUDXvPihZAgdLFoKbP7nhueSQjNfeyMiFMnDhpM1oW25bMLeZ",
  "key18": "5Qj6g1jACUmbXDrJcYnjd292X8kGekQeMtk3yN6r6N2XNt6R7xXnqjbTqF8RDUDM52oKyV6dQBHpDSne6zNLCB9m",
  "key19": "4zxKAGJac6gy67Qd1McEPfhU8NwSaCombeLRpkR7VhGLqwe2afhuMYGQNqQmwjc9PPbWjntpCoNRrvmJe6GRMKoG",
  "key20": "5xDMZhFB9mM9aTbn2Kqs52L6aZB7ZfKouWMAGTtWFKMcp31FU6RiTEbnLzhjW2Siiut2hAmZciTX9fwmFqz5HM2A",
  "key21": "3Y2yK1vY9Tz95QHwyv33fUA3oBdY5jURAfvmwpcXqy9Yqo81AXAjJ7Vb7Rd99xdy1D6LaRnewVELTVGBAA9aX9xo",
  "key22": "552V5cfkg1JNMBFLCQSdyH2AyCFnJ39Ps8Eg3Trey1XVgM3BC2WDJnhP2mQPrzVbkq4iSTmmyuDr7PpgHtH3QNAE",
  "key23": "2Jh38ZesiexzWTknfpAoMrZH5DC65CYnt4L1wFnBzmTyp7FMZg4MBTLeqkG4NnGGSDMriiT9jiwomcCSdVee9hwv",
  "key24": "3jUd5md9taEbZGiZdYcTLYi9b7iE8wjQJ1RLoAupyZXQT3S81BVpVkybQAt2yZtMg7deDRfnbcSTcQZT4SNMJuu",
  "key25": "65CtexeNQy3VKFc3etszmW8qTEzEhxxgM7VySi8Hqq97GNM6xpKrS3fR2QATDRkky13zTNhznSJGQeBgPToioi8V",
  "key26": "3EnqQmEajE8fGnVMbbtXAA2ULC1aMDFuEaj2rnsyLJrxx4dyMx58vQ8SVLe1mTUX4vschLeTnSU43UM6ZYTgcNiG",
  "key27": "4EEWcYkjAouy7KjhWGA2MzFQyf3ErnqXCxQ6GdL5K2LGTbBvSqVZW3CvR8a4gJGqGaYt5Mv4G6j9e52LbGV3aGEK",
  "key28": "gCrqfZYNVCsSwjM2m9gBrC3S9YWPhxqBtub3XXhVugc94yySSquP3gxcWcKAY4HeBRLz3U5Hv1RSTaB2wcpqMqB",
  "key29": "5rYJQmoBTeKEC1MNZRssAJqmn7z2Ura59YyYReQzwUx72MJeajK4zTkbDVMU9waUiegQBNjtLPoTS9Pnfy19fR1i",
  "key30": "PsdM4cqcqxwHyXr9Gq3zBKckNdUGfPurz1avkcYFxHEZJqWBTagkU6taT3xx9JqzMLgefdvNMkL6yNZQun8nXS5",
  "key31": "5XVyagckMQZPVtH9En6CtAbndHFdobCnRbLQq9cRv6aLyfxd2BxNCkjmobLtjLoyxFDYANYSGocbpYC1a87GQdsz",
  "key32": "4f1hHaFLaWxS3VQPRQMYtgRXP7esDgJGtBGU5Ha7vrpn3687dJEMhULg2EJB978sbCZ7myCgvpvMdzMNDQMhdN38",
  "key33": "32NuccoCE3Faso5nVTKiusUPtGoyXFsA88GVWNmJgBZT4T9kS7PuMQBqwnBMUMd57WBk9jikyeqFDAnMYvj3Hwgk",
  "key34": "uZeBvVGTEtGtArbwi8E76RNM7ANDTkRkFu3gKSYwufaDcQtJ3EQhuYNyB8VTNSoc5jijX2qxnRnVU6rwD8B2wZT",
  "key35": "55VVHFuA94UDSv7WLp8d9sSp7Ki6rhcXRkFMktyWRD2fGRs8kbuk3bZrtNu4sUHq8CQu2yiwYhHghoDoycut2cwN",
  "key36": "4ejYUApAbhu7gmoeSLCuzFUfBpb1UTeC5wUJ72XVUZnX7ArjZDL5t2Qe484ZHGhn3jrCJq6aChCASCzibrMqBNGD",
  "key37": "5R2LDLgVqFYjXJbxthDoE9DbCABtRcmfe2cnJtGvV6MiMMAuSAsaLReMSaEw33WNAAoXqASy4sgP2KLh2attgktv"
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
