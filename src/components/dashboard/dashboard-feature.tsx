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
    "2seEiKMigNaZFCqJdZf9EXobGtFtyWsSxg4H7hSnEovv6mtaxtYedSWJBubseRScGxFyQQRmmGGyBPmQ9Xbtae1B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4J4uJoVRgKHgFMgRPrpafMQuHrRs4i4d1SS71U3Z61JYQdiaucmMXnfBRLVbiMzSJHMG8s3RHb1SwDe1c7ZTpnDe",
  "key1": "5f4i8j5ZWDsnFMCwwQh7FhTCXKWkChe7f62r5eFSERaVU4KqoHvb3NqQuYXXE3pUTtv75RZ5U1Dx4hJJrnByMFHV",
  "key2": "2yGqpF1X3WU5VHwqPhX8VESzyf7mjnbDm9Xqej6EqfU62bSQFJZmzG92DcwhXuwpvmchy4n33zJGTmzzHA516YD2",
  "key3": "4hSRt41S2h8LX3j8X8NKxxAhE4ue8Q8GFZX6aAL8qWgFJGHzvZ22J1ACPCMhbiCT7L1DcxXsUyxQfPKAwYQ5LrXG",
  "key4": "BpmnjqJFRsYicPaAdAEnQ3fRmNrRb49kLrcYzLhM2Z4szyMrNKH6Jcw9X3GwP4siTX8nR4aGB4dq3mhZpdX1FEG",
  "key5": "3VxAnys4nFCAkiTPbyaijRY8tCdHzBAazgWPSz7unVtaWDAaJ6B6bFMqHdZxUydzqj5caMKXNnVBxaegVWXrPibb",
  "key6": "5bfqoSge8Lj9jUNGFd5gt3Kmqe3DjKPAR2nK2wB7tnbi78rsxgnkjMnErnXwKqW4x6oLpLiLEdfmGnGGXo8jQrFs",
  "key7": "wgpnqLP2nCb9QeWakmcunejqecDBDtsxNFjQ5f5HDd8K4rL9caNBXBUPnVYtHZnnigraGXd51s7xVwTir8KMjxh",
  "key8": "jnMSogZvrtVzcJHwGdnDQ3DVzbE9v8tKwau9b5CZLzeGbYST4W9UtS25BiEuUor8uJt1SnaGrWxTfvuvmbJR1k2",
  "key9": "5u96WZUJ1BS1KWHDcz6WWHBH4Eq9YzB2412iU3oJLjQXKpKuLdrGwFNkEr4p4tXe5QddfQfCztaWGGbPM1DhP8PU",
  "key10": "3B3t8DPNjedrfpEnVBQuoRpyZJPEd44JECWve3KCgpFrvbxPwFPX893gyiQPcYNtECnuGqW8q91RBpRTfC24yecs",
  "key11": "27ZjMyrFwnjgvhhvi5w72q3yxDHQDhoR7yK5JCYRJvpgMUo53dR77vpjay1iSMfSTXFZktmbSzgZgDug9pmNF9fc",
  "key12": "NzuChQ5q5GovZCc9pRtfD5aUhXpEmaMGd89NiznGs3wijro4b8smCdvj7mZDMJNdArPnK8BXR4bq5CZ3MDqdTLd",
  "key13": "TcVrkNfFkQiM3fpnZWeB77TCqFnso6GVe7iLTDzMJTjQhSUUDm6qCyHW3VoTtN4mbyn9rVQhbwUzHZ6Ej6Zmf2W",
  "key14": "4ZY68grkhLW3bSo8AHBYTFCMt8sGbnN9EZ8yFWfYUzb7eFKhMdECk4npkgUZgy2xeHNLVaFfnyHWrL3gPDw8TwrW",
  "key15": "2BBhLWEthCEWZDoBqF5iJQCsGzC2epr3J945CDTBA14hcnT4DRNMNeFVeAAUyzWSsiJiuvB5n6Uy2hVE7568DJUy",
  "key16": "27Fs7xkBymFsYZtXJDDAHFEoCqB2zXVHZDDrsd6H9SKCadtxb3PZdEqgNMBYs6ZT2JX3dSf1w2GVaa54bpwBh9Vz",
  "key17": "3eohPiQQAFGjMLPYLsEYZpftFeKzu1J1wVyrKRXmsqCHdND8YA4GikeB4qP6EH4CNjbptbCzU3Xew1khGpxvLxnT",
  "key18": "xyMhwcUT9pFsGoyAtwUPvcYtHt22kcAiMjsLoyizuTxF3yeW3fG38PRAGaa8FgyVx6JzEmvv8joBRrnAa3doTqX",
  "key19": "5CWr7ywMpZVm8a52FjTAX58UywJembaQyaUmad7531EUCDGHRAwTq7NzFZPjG4sHtSdaoTGMVYWnWd1bFknPy3S9",
  "key20": "62TFCwkaJXZ93GtLRwic3Qx91Le6V5xvmgrsm99BLqRuFbqv6AuvSfrtLFu8QFvueW1XyTnzfuCXSc4pXXrkKrG2",
  "key21": "4xZM774reK2pdQRjnWZYSBkyQpMFYXBeu4VanjRovBbRXqEsZNYkS69ucFe1Ltgg8oyHykbfpTRaKYZz68qS1Qpo",
  "key22": "5Qhxqxb7vBRb7B5VCgZScaNnuLfwtEi1ff8NmgSSoGjT9cRLok25CxMNNDT7JSHKxiwyBNTuehA1GuFW9hkvy85Q",
  "key23": "4rjoqDddp53t95416CYqoje2dWLy3x2835oNJ9tKbe5VEpxeMKtHnfhfUQA6iyUGGRyutoep6gQf4g8BokkqCYTr",
  "key24": "t5DTAEdqJ5sTiUcck8XRLqyCEYGzDvxuH7ypxEaFZhkcuiZRgWQsiVmC25ttnaSPKWvikeSJRMrLRs8tc49zjbf",
  "key25": "3gEHL9VbrUE3kAdGh6HgpF633VDPqedzEVRQagCewSf7DDY323HxhYJx1dt6mHXGH7Zj71qtfLZvVWAif4npTuhd",
  "key26": "48My7X29G3MyTFT913Dcz45BdGuPqEmMszyqNKa3yKbwr4vpEgHyyZ3AcRkXDXcm6NhX8thjcJpJLgwM8dXXzW6d"
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
