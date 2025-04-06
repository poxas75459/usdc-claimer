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
    "2zR1FiT8miXDUGKtjTpbwtnoxATBQtbm3K8iVZnQa3LrePhxrUH2AwYXZcKJ2TfrZhAN6DEihxjd6YgyvnKe6srk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Q7ZAUGWbWaL7CgsrweAbrXUa2FfvyodeM13yKBUtmZovAoctRAEmNsYpaWrGm2mCJuE6bR1iTdU1sLWM8RoEegW",
  "key1": "2R2EBk4A8BKx2XJwVPagm75hgvn8Rai2xr92cCHn419bfnjoPcAREQ7moRB4D3CZ8WdmrNxr5UpHFNqXthvUpHFo",
  "key2": "27VKKXx1mS9UTdstBCs2eiYE6nHW37AjxdAwtSQfCqSPosGJ8yt3Q9i78xWnarF3SgvrG1ozQmCg6XT62ipuFXWN",
  "key3": "2SFGMwhqrGtUtyDHkjLkTJdkZAEPo31FDgnC4wwQsm42uuoTGr9E6zE2GaNAp6hzcvZHrMBPNivG5chX4cBRYqdE",
  "key4": "4AyFHcJPtbxosParXLtnPhtJoMoGE48EJMj18kfTU4ysuX3bC3DHmVMnLxzwrfoc8hsktp2qKt826VoXaVsNMJk7",
  "key5": "6JKp1xRUaBRoAAh5KYd8MLCbFcexphrtM8tkJJFXo4fYrKDrTFbc8EaVKdxrV1ww43uug1qfo1bJ8jpdLHqvhHH",
  "key6": "5gJnURvPTCarHk9Pon7pD8LN2wjdNijKLKx6G244WCoK5t8mDxNq7fyXVwsdcxwuyRsY9ST9qWi6wrHQSDqfpk4X",
  "key7": "ibvzkdcuvP4ShNRuF1n36Dv9nmz3ZsHzMuDKWgd72mzH9y1xwbaaoxFYHvYB3wJAZjA9hCJyiVqNh3S6mmJfUmb",
  "key8": "3H6gkvjNmXgo87w7NS9nMCSNWnmkxd9R3QzrXAytzvrUGyyivZhW9JLcGzxvzonKpQ2X6NAybUEkbS6XcXdh6V2W",
  "key9": "S8Qfs5YF4bfwKxUbxERrhTWpeTTnvR5CbWxysBrMurwsDhDHQ7P3nL8NtvXAxi1zZ6toKDsozch3ozr6NLe6Exw",
  "key10": "5D7iJanGFAfon9Tz133gEYR8zYMfJq7xSTr8HnDcKUfxRo3pVwWr4irFCQDaXUrYvf2nCXuhZLHjpdU6KAcbwGpD",
  "key11": "48mjWJZDxdxH9X37mFCF6YcrByMMaCQf4ESSz8jo84eNxCwVyPQgxYrn2ZakvS1YrLHWhC8woDWvY6Sg6LtJGWVo",
  "key12": "2emLuynQWqvPJpvjJCcAFKUbUJGe99s5N6nUagvuhrN6rvZHDJBumQQVbmEFUL33vZCvisCirnvcRTZrjLkzDbnG",
  "key13": "3bJgAzJPWwWYRigoZtQ3JeyBEo8tg89yTsDjpfSR9fkYa94diZHuNA56ccw3HLZPDo6mxpfaG7uGBFTqD2N1UNp5",
  "key14": "2Rp4Yc5o6csfrqaubCJzR8xw5D96f9dtbeyG9ggPB6Q1FBuqLU7p4GNunWgj2pw4mN6DAGLdiwaJm4oTGRnzYmTJ",
  "key15": "Yf5zxXTsqWJoRMaV5KePQyjqYgvmyj8MkRyXR72zKm3khwGVwkv9ChU8xTPTN6u7F678uCzn77J5mNyGR9YEj9v",
  "key16": "5y4oiqzLNRjUnYPuZUznvY7A71jT7gY9ebmKcLViFjdHRz7VFWaBxhEe8qEX5d5hdwA1grC2vXtefq55sVeACuhu",
  "key17": "234SeXyfiGdRWAxRBsFY3FqHK8xjdb9dMbGXnbtsixNyUnGCY7pfng6fAABW7HbsudYjEuLVqd1HWanZghdkc7de",
  "key18": "5ZvmY1fzbU9Bk7dRAUYL65Z88QMja5iwWFXoJFDKZDk5bERvdgykm1YTXgTBvENS2zBFzvwSF99TS5v3mF9BMhr6",
  "key19": "3pVceZevMdhFtiDUQ9jmam76gYxUqG3DpTaXAdaZN7CPXES5KJskXEbocdG1g3DQUhy8uxw8wj776enHkpW7mbAq",
  "key20": "3CTuLLGHmZL45NuEq81ZK36KG1gPRV4xEVWpC8fb7dufZ1m4MBGBM3GhJiMs62AgRqcYtT8S6Dr8DceB1bCovYox",
  "key21": "91KBUJGXQgkpf7LPgqJxsFzudHxRuhj23pgjJezbWGCYBKaoQ4yBY6MMuJPCLJAGw6caCWnmMozmFfUTxvxhXxB",
  "key22": "3BtR1WTrYnDrfNE6hcTj6thxzVrbSTTYp75B6cPhrJeV8abmWTRQJUdfqEye3k7zLWGSBjrGKDEkDKk3fhtykedU",
  "key23": "3Qw87ba45VJxB9ByKc8UAzfcAwrGz3RnR28sD2vvMhogCtrwb5hyXex5o3LHePCofvhRHf9LJ4euuidSxhSsSF3c",
  "key24": "5gXJsJMnK5VgrKRjE6gbaMcpsQTGaQgSC8q6qWPqBJdo8HwC6She8KXfm6CyZrCCQMr2MzRqSwDXkjpsECnk4jJv",
  "key25": "57d5z1GKzdTagmFZcVZN7aoNtyVCRWWBN1qnuHgMUBFHurizjK28DBYUnQcNahGrh3CaGcxpmZALjb9AXFQefQBt",
  "key26": "3fjogocFppZwLNXWZL6gy1jBaa6PFxAmcMsu28fyJv7p6xkxbqSWin6oe32MN3MsFP9xwoihm6qDyLSS7wz1VATJ",
  "key27": "3F7kFZW4V4wHdHremrhJCYKW8dZzPvG4fG7xhBgPMkDSX8wgDCMaTnmF9ZxRz4HuyBqcPaXNfK4xsNEjqMmpnQ1C",
  "key28": "23LQBtgSXMEKU2KKN9k2zm63ASymfPD8MQTT5w21ordyQgTe56Nfe4fzF1AP9xX8YT97StcCKNXPFZPXMwASDprs",
  "key29": "4PgZhfu4V1YatMbLZP4SXDUgQaLLhqucvjAUrycjFg191AxghYCnK2NBjAsP1QxB4VSZVtEgT2HjtfPqNZRhJDCu",
  "key30": "4JNRC365LnSExvNri8PkGsjkVRKDAsxZCsD4uaJsiVMf9pVH2jvMAfYMSqiEbdA93ajGQJcju2cPCGQKaoLytfR1",
  "key31": "34guPpw8BJ9xKwroCDyrKbjZQtCX2ipZtJGHCiGzH5nQWijMSTHb827abf9QHvHxzCNJJX798nnHjWhq6pHRKUDj",
  "key32": "3v9x1BwbknaWwc7BXrC3qy7ivg852BSR8TPCaZQUmHzLyHFPCAFLU1ccGv7Cy8yVMrDWN33mZoeesMnjZ5fU7Y8f",
  "key33": "4RBxBM6hj8VqDCqqjSPD9WDAKGXDxe6dvL5nx6qRPriqK7hzuxkXptm5YCQuR4zT6UBr1PbsPMDxxiRfp4ia8P17",
  "key34": "3Yr5bS6MoaU2kVQG61gWvqatKyXR6YfSVxadhNJQozF6sQd3D94ebA1oZkvt8rgkGWJTENdpvrXTXkRHHehS3f81",
  "key35": "51R274TpKGZkASM5Z4mCGKCRgbmWB6AVrjkwZyf1Zb2hiC2goRgGet6oUjZj4voicqSLhi9DJctuV6aRRJqDbxQ3",
  "key36": "4t7tHcAP6jKw2kJe6wg5QD5nqbA9YAB9YEnd5GJmhNg5VShvEt31GSN19UALgoNQuRAJRK2qnWd17cMG6BhjQMoo",
  "key37": "5WWxtVRWdzqibbpRKU4Cxu3qsYsJHvVNSSSD3jt7DVQ4kBKpMD6bP9XVrZZtWefZ7yQvk7AXmngV625VTDx5FZvk",
  "key38": "2GZi3mMSarMzNMxwo6v9ujSUDYfVp1g5h6esfMThY9uJnsJZDbTk4EGiHjaaCDhuYfn7VRwoiogBgnx19SMYFsrm",
  "key39": "4aPBGsE7aSLHMSRqHcTNRnLz1K6UFi8kZt2cB9aNAHtARTXQFU7JCrZH6CGVTPrNqZ3nKB4m86cJmGbnVNqfnjAg",
  "key40": "2cpke6ALzdYRKynqDUTP8vRDxfrKs3V4TkU5nvNJMkwjAaRYWw9RHT7tnkVLbj7QdL1Agp6eiEYyrbDZzoudMjHa",
  "key41": "3F4V1BApkABAvBD87x5U1WAsjpKnydsXtkPvyFPn88mkVWyRnttzhZHm9wgiuDPKGX5dH6VWzpZnfm5aPbM7rpk1",
  "key42": "34GEXazoYLTS1syjS372q5H5aPRWQmV26rjMHtWhRrTzQkiZyC2XUR7JKRZ3pqZ2Xv754XujMAcXu1qijHzN3exM",
  "key43": "5gmUoeEuxNVpJsfiAqbJio5yXwGhqdL2Esbc1qmgb4ZBJqJkaqkmdfQCKQC8ACpeDDPoZaQCFc67Go6P4YfFgxcz"
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
