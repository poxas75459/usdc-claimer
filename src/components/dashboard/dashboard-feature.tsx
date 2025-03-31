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
    "3aP695GsgKcavT79Uqe7NHjMWxihdfoir4YN4q5T8gRAAhNfEqHRWnk2stT4neiqQ2PknX4HjRGF9prBxfjKsfAK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iHDUN3P9PDkXUbSXtj59QRABSwyad6V3NGW187dGv2BJMV7GyuvNaLtDF8yZZXq9P8Ri4PCCc2inwkq9FH9ojfK",
  "key1": "KUwpUc6UBGXta7x614EgVRGbBuGntEyvrcAH4GCcTtnNLopepZrSpYi5XvCbLfPceqUpKSPz65A5t7gVrNtQ4z4",
  "key2": "2dQEfH6J411EniMEJpWaTjeAuEZQzSd3uTKwEFS5icmF7NzwrFJVGFNWCoz8uUoV5LcxGgVmbCXZKzhM7xSrjtei",
  "key3": "2QQJ5TDnKsLEjg5EJ1ZDKQH7ZrNj1oo32pTFePpjbTUjbug8MpJc1jtYq1ENJKHZ8hnr3CSYoSAzJyFFQkiT1p9v",
  "key4": "3M1u4BDpH7GMTWt3FjRH3vvTXyqzcEpd28thzbLr1nX4dVYhxjpGoRkn1koj4LQuDMhsDoRwmp2f2UEcXUF2cAWp",
  "key5": "55bNxxMjcLmDzzi2d631vXt9dXwhW7SSxeAk4WR2esawhBQHhameNhdoS6eJ3DSRVPDBBqfVYcoJ2RGNP45Mxup9",
  "key6": "3n6Atiq6ssq9XNrvdhp6aNFupyTf5dtK4Ry8N1QXdTmHeWTqYmLrxnKTqg4Ds6uB7bpVXYvfW5DKhLYK7R6q288z",
  "key7": "5vzwpxrFHMiMkVunWEf1TTDWpKzftWySKdnDrv4SriuTxVBmE4CMyWV7CLUpQCNwrz76WwphEL45CvxWHZox3xNK",
  "key8": "389ushXkJjzcrzAFap5c25cdj79BzwpB6wWux7W4GMDKgFJyeMmFsWhYEqAtKECZGa9ZtxfbZBcLDX5PqHm56PK7",
  "key9": "5xfqvJYdmmKATMpCF8jrKYnnehVUbUCPiYF9RR7LSXjnxC9uvi4pLNcq3hUe4YzfUGq3KS3EvY9vTcfrL1zX84sd",
  "key10": "4aUBfnCaHy3UrxXTvsYKAGET5R6b5x8C2ecJbB8YK2ypuuCevRNYnE3AhB3Yb4pL6W3ip9ZtKyVumPTqmPJ7zJw7",
  "key11": "2yLSgAwnktRqMX796G1XrzEDnhCvhaAZPJF7QpXPU2pYMBKbdhzc9e2FzRs2gqrfDVK8b5AUER1FXMBhbWc4NZf7",
  "key12": "2KN3hjcmr82yvDawhKSsKBV6cWGg59goiGcUxyB1VpQiKgvBrCFsBcvAah1d8JPUPAPYYhdwZW7Pc7m4qWoZCjfL",
  "key13": "4kNr2uWgVAdu7yWLBrmirW2JuZqJbwxTKSQSgGf7D6eaqAxDdqLfEzJViPirPRxRFbh8tHKLhqJUA2aNLoAJ5Rpj",
  "key14": "3YKrxbvSYY7nz1Ykb2apRrJ467GKSQZ6SuFbG8pDNKt8xL2eZxajwPkGcsD8HFu8Z4R85MrzmbYYUgA8fxQzhEXv",
  "key15": "5bvcRT6A8A9y9RPRXrDPfWicAsbB4dSun2nzzmr8bCovccopXJ1DqSf83dV9CkvvqVTbSr7JhFmhwq3Dwbz3ZuE6",
  "key16": "4h8tPw5F2iuVkYsLW8PajJaKKy68A6cnLN1Ze81jC5Birp1b9pubvkgPG2Vr6dL2PyatndcY4aHCdeNbieqi5Afu",
  "key17": "nz2pt93KPpM9x5e2XfFHMq5nngxr6qgs9m6vS44y1sj6Joj3B2y1khVoErt9hm35hYvD3xakH2nsxRKXAbt3X6W",
  "key18": "3o4FerBFzUyecowin64gsLBjmd1kK7ZDYmoer69NUjzxVJfRFPbcWXHvndCwddsG1zsYUpGUKUDnmNk8uFBVgaEp",
  "key19": "uMTckqV5YiqtvPBWx6detatKCdPN8mZqt1v3UAWuJ7gyQ4w8RDcXMXa2KsGsWetjSJDUgxQt9mYyy8HQxShYutw",
  "key20": "21naGiw9A5njogBmkJVS9ZD1eZpScB6AsnfWXUzCAoXwtDjHJB4cf4qJKMRMKe1HK8PjYyotgPeLet5wFu7kU8By",
  "key21": "2xeX7FYQb3Y92FoU93QMZTRMrsytdsn7BeLkNEbMNBjjCEtBBe2wmgjMrALWXgs2iyuKuxusRc8s6EnuKZ5SJ58b",
  "key22": "5pBw9DNdAcvj9pHBcKhn7ypYemGA929iAYwXquXA7H6v6HQWzBfiuLbXY6vGg9D2WbRXwUVGiPGEARBoMeV8GrB6",
  "key23": "592S3SifGTynQenwffL4RowCMoURwLEBn1oY7dWnkNrJXSFcxfCsZr9FinZ4NcgMS5uQPDGzjWDxrbLkVSWk1bjT",
  "key24": "5ywpG5yfsLaZc6aUGDExxLRoGkqNrv55KhQ2f8byd5wgyNUZrUZMbzATQzNRgCsJnKGiY1sKWmYTp5gY4ttHGDwj",
  "key25": "5tjFibCgXS26msnQcwo979Pgu8gtVUBJicJaVFhgwRNV7W369MHBWWHrqRXDjEBSpNRdnEHiGpKSydGPGnTqNZk2",
  "key26": "29UceXo3fysjVqVM2wkBSXpmbKvf65HHZYZtAsJzHitCHebZauHAUpTqUG3SY3kb1pEmiuDnNQywgSQpLsjUTS6Y",
  "key27": "57uiyE5jeso3ZuGTRtJks96P7niWFNafKAf9naTUjPoApYzb7vqxMNR7qKgzJFQqFStTM8ENYHQ7eisw93pCLEJ4",
  "key28": "wDhS1wbGsz4dzAym3bH3TRnWfDpDTmPETDjL1eeaAcnrVLwd9ijb7hzRBg8RrcTFRQwuKCJjdXRcLiGr3xGQVRf",
  "key29": "pXCMbyudh7hftxE2PhX3pwkXjyDNjCA9TWHB8mRw4onVUfnzn7NoWqVuAhkobKApS1GjT9NAFhxC3Lj9ZaCAo5b",
  "key30": "4M67SY3xD1AnyitM67ytCtKd8Vmj5XfvLwtHusRrdSfvTd81diC5JrydtQ3mx18tukp71nYKkX5dwYb7z7t3pe5X",
  "key31": "224gnbjSdy7u7tMLNExi6kdrdezimLnCmtqex4AsqSiTdt8Ue4f2pZu5kNriwJfLdtuqzhuUkHSSpKBSjD5nUpzH",
  "key32": "ExZcJjBKMa1sLCH26uAh3KTiVGu7tUbGYwb9n7yvjc3gdbPSwCS86aQXrGDCcynGtSRmUjMmbu33DqRbSVfDK6b",
  "key33": "4APRzwSRdgY8CdgM34maaLHTPtrn531KK9sGejTZusS6ibR1ESKv6hL7g8AqmZZE571bRLyqp1hqZqiLBUauT16R",
  "key34": "5VuQAdAsoohfHF9iaKM1RCZexVukJTSkWcrxcGg2s5UztmCiSs6q3RB2FoPto1ccMSHFoPebDhkPZYsTYzg7c5iw",
  "key35": "4xdAzJJsHYogJ476XdVJKqYsPcbeg3AomtY7gS2VVojKSGJ1QbtyKBzV8N2k19AGQnUt6w2RRpcPWyd1GVUzCjxS",
  "key36": "3yLdGrdiVqusWdwwETZxnGXAvr9XUyHcbdATTZLbSZ9JeyMpFP3Tttn29csfQb2juYV2psUZVDF2GUighfKgAkYm",
  "key37": "36HV1a9sYhrLHuQJyyrLrPn9MGeQQePQS2ytWrfD1GP9tpi48333oHJuUkWMUbCALPMRPvmdfnBxLnCMKDRBtW2",
  "key38": "5cbCatQp5gFsvFj45t8WQur7mBBFkHxvvzzURr5Qir6AGrtRPsq4K1EuALDCqrEgz4cMEd7uif6si48mhbqQXhdJ",
  "key39": "5VsGc1ipMtPzuR7GoLH9fvM9k3tvHXTo2sBRALRRWshQooiwhdJc7wdGsnrfo9U1FgR1XwMq7oYRGmRctXxsHaAF",
  "key40": "67ooxngJiMzKRiMMuf3svt7DmSQScLqCCTTgGMs8XMSxAUadLJMVAYU9TNHiyPFkftKWtqYTN3STr9eY7fEncGBK",
  "key41": "NXhrTAgbkiDum9uzqHyirmQZa86PgfteCKyHqcD3pwWXjZZ3LN4MtMvsZT95FjF9vqmMVT7Y4DA7cJSCacsq415",
  "key42": "49nyeGy7y6ZnnoNChzaw2nr1rzZz1UnUNzxecuH8HcV8UpHgC1A2yzix5iPrFGmaaF9zk6jQKtbAeRWrfvC9kdmC",
  "key43": "3uPYVqmYJbkLEmxPKUzoViacekj7ryYn85SqijNeKekhARt4h5PbooyrBYgMZoHZNUoqqDErfPXpmWjSaNE1x7mZ",
  "key44": "31a2x3Xo4YeyJ6RMkvRFE7KeYgGxf6p3f61F64v2NGqP1y63j7Y7tzwGHouXCnXiq4mCkwNKFjKgh7NiWV84UDFK",
  "key45": "4Dxrj9JFKint2WkqFVT3ZieKMQe67BzjbMmF2rMii1LuFaq9emkG3sG1Stfzp9nu1HtMte6PzpJgwqXARh6Nqq6t",
  "key46": "2kCfkcysef1jzWjcSBRbkgUAqgaAoYP8fJtM4zSgrndTWiGDbTRLyEVnmB7Es2FCu3ioi4b9TxVcKEenHdgQsqop"
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
