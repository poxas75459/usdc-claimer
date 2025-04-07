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
    "qtUfGLGfaZ63JyJBGVLPejet3T1uVc2GtwPJc4UjtewhLttfmRNGEynEngLVHYQBKt37ddxBwkbwqeaZfr1FiBe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rtUMn4HQTQNKLfG9EwsuMWpHaE6YvKcDXzV1hwJbyHqm1zviXTd2Tkus2Q9wzm9Kh48FfM12aAsj6FbFRe8Av5R",
  "key1": "8i6wH6iWYjiV8uHzh5YNVVynHp9iv7swoGdQpvnqvUttsxL7SXAS1VrsJEktu9p3DGP5jCtC3SZW6C7eeHyZ3tf",
  "key2": "4H9D9psHmYxnrsoctFk5pDMdQd6abp6kt9f3BedcpR9wHGKkN3cwfSCAWwGkPFGXj9f8Cd5bNwZyoLiq2JDProRb",
  "key3": "4Nk29mw4Hxr4wbGAozwkyh2P6yEMWQk9Z5FPZRmxaFKtuCGcfCynEboitiKU3qFZTGezvMrPhDY5MKmS3cJxMBf",
  "key4": "2JSnGLvhQeviBMDF4hkmuYqgEybg2p5v5P5wj66wsUwMZSMzVnHpdCEBskmAwhMFTe1XhuXzF9ujpKhzJkbJw63g",
  "key5": "36gE153mLr5UiWarBXYZSZPAuqScA7zYmNEPCJvQwKDx53txubyoX943qCeqGrPXkdfe2i2Vg1qBNEjDAoWH11vY",
  "key6": "3dQfqDAJei18sR7TzUoSnSjmZFwrA3SoyYuLunsffFoG2AXp9UUdnQqezemNMmFRKQqxPhmZUWunoxFwwdBXbEvi",
  "key7": "4y3Xk4DDfeiNnjqAn8a2NnFFLaFb5PYXuW1iGCdyWF1og5SQyaEw8WmsiPdkoWjtWJyFd4JyVPmjhQwjYbsWXKa6",
  "key8": "vQhA9AjwyDe2SCJj15v9ujGAomiX3c9ccqMbGV3q471eNyfqu17W2aecibUFmSbW4k83ohomYvBkwYpwZ82rMkm",
  "key9": "22hzf1UhFwRRV29qPnPkPHxDACVMWobzJTp3ex6XAWbgkaEUci4gpgJnNJ7YTk2MtRLQQcFqTs12RnUwg75cr7ze",
  "key10": "5CwUvgxqAsbp7VmTouG31sUx7pCJ6YG2oWbg2AqPwcxL4Z1Lne29oCYtAcui2Jit3WBamV6mGr2cajjr4dZLiR3N",
  "key11": "VYDHjAcykapzVSyf8rxkN7YoHyGgiSjmpHeVmvsMZZ2YQ3Cjz6smpr5pMLcPbuGiZRgJ3oShkbpMkbEgoNDo8mf",
  "key12": "3Qfhw911SwuRKnt34ZsfBBmGj9ZaudZYCE8VsqeXv2DZYXBCamZ9FEwVQUT3skMLKcnCdWLN3UCURzTq7AtkepR1",
  "key13": "5iPtCQwFtcYUvrHVcHJEy8QDCMTnj3xNHrfjB8hxMktHxsyAEDq21VLw44ZtuXe6czetBiKC3vK4PyHQXUredtuG",
  "key14": "3QVN67WVi92N8t3Ry9vMJGXZ3Cy58YpwG5VvUYxc3ptAHB2wJ2SvyEgJ3d8zQY4VS3THjGsVEizjPNoWfrnrGME5",
  "key15": "4p8jT2sZ5SKDfj9EHFLTYa4MEvqimWbBiET1vhv5e2aE5gsG5BJ39SczZRDm18A79fB18gDK5vUUCmz54WhaSCXk",
  "key16": "2cHrqJucjmQ7VVGDcXKYihWtZdVoWzVhHgR88SHCchMkEnkkK8VjTyL2BTJAS1ZGeexHVMV5KzXpGxhmukU358A8",
  "key17": "3PVMqcZCJaarAf9RzCpkm5ttMQrbGr2EneyrpLFFD9D8XucjuqCnwHE62cunFp3gsqVfRoKduribyvsnMABoxpVa",
  "key18": "5yAHeyQsjKxyjjXF2h6Fe1JiqThqHnTRxKTaFQDhQsaFgTMuVtF9H799eBCS1aXFr7cdm3wviEmhBXXni9b6x7C8",
  "key19": "Km9P6sBCKmmqGMjhS7autDKhsvzo5nKNdsQBX69CNamkPCVVjg4ossWbSveYX9dpZD9otmzrzG9c12bJ1drCFWp",
  "key20": "5hEGTpXGoXjZBDVqhNPpgeBsJZZuNgqsSSFaeQ4ysCSdzVBMasC7ACKVJuuTsnLKdV9e4LiR61pRcRgLeHc3s5Az",
  "key21": "5AJnXk7FAJnob3beRV4vtsJpNDhRtLx63YCy3NZQ17j44qRRyyKZifzj2nz1jxWTfJrf1yDAM7hTUhVSLywuAkne",
  "key22": "2n1suGANr2BEaeUK1GyQqBoyKhUMK5ERCJtEsEqUrXS92jBHRjxyqtNnnbj9tbkuUPvM9t1CcDPyxX9QykA2erBK",
  "key23": "tDgtTyWLddK52AjFpevDac5Ck2HjypLaUaxEEcVSnFwJcRCvnkDdEqaoXUfT5cHFJmN1u9gGdABDuTjMcuXJEc6",
  "key24": "5pP8Ks9KQpaTN6ibYoKzAT5jBK9ZCk6qRYwM1cD59415BY66tdqJP3qWYdHU4rJYbTuy68Lrr2cmbk87J5GuoeiQ",
  "key25": "3bJfe546o8C2CSAQGrmUZCnYMV1LBsHi8AShPAtbxZ5XJ8w1kPYGG185fTkd8S64BwbLUU9iQJLedxngdcqaNucb",
  "key26": "57pZs6LNHfpoyfoRpyUepNZQsXMtMdAUjyMh13XvreTBTpx2xwN7C8R4oYevS8dxxhjqHnkTfKFdvTYjKUjXnckJ",
  "key27": "2k7FfqvoxMBo1mJj5Lpi2Nstb22k83eqP9EAwmAQ5ycbCpXiVc9sXosjwH3W5bnLmcAUGoTCQq8vy85wrwCuULi2",
  "key28": "AA96kq47H6cvvSwjUbtLKEHr9SLcnYsh6wsmqGLfLkD4FncRX2qqgMGhCyD2jjcF5hPuqWkRmgF8WitHcUkpP1G"
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
