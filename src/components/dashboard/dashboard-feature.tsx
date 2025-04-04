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
    "fk18WqZpBGMD5u1PajmehAyuiAdnxJnB7oi9pZqTmvZEP9YVCnvuM2pP6PPWRLgey2kMoLTvzGBND2gnjQkwPEJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UFCGqmncYW5Fz35RfidWXsqaivNr8qo3S2rQwpZoJ1wjWRFfv8tVACGMLhskMyE5tvBFsCAVDjJKWB4GJ7vVE3r",
  "key1": "h4k8sJnoEi3AUGTzydYG4BcVXAhFL4CdjBpTbYKZWzcZh3cdHjL37L7YX3KAXZ4Vs6fz83JURsxwoDBvtfx97Sk",
  "key2": "4LRcL2iYTLUic95boPhk8tkvmvcU26ZhxFSnnFBVHCp6qYeX2RfyaLK3Xvd15jPwMByKvz4D4hSL4D3nbkfcQfKN",
  "key3": "4kF9b6bLrvGLaPWmouzjEBHyFbdhM2ocWem6asQFXDW7YG853Kcb7fwFqt5RkBZfFenkXAYjkLyRrnib4YAfSsQN",
  "key4": "gfVDzCmb4RhSxckvrvM255DexEfKsoB9bwRkzRC2ZMzwSTw6y24jQaP7cuhRpXUEWBL9DYZv8utjuJo5MnQvfJT",
  "key5": "noMhCrhgwA4AJSdPxYtc6rnEryfWbiMZsvYnNimgYKK6784FJ74AcKqhNhaieddxroKBHNmCCdikkBp12eZ1KZ8",
  "key6": "6v6QwzSRhB16QyzEaU3FMszbECUsUfpWgmaoBGgZGfZihgT1JwdPxwj1LmdeFcKmrAnzeh1JfMsk3ztp7ECASBG",
  "key7": "4LPktEcLHxyiPuYGDbEdDLCQUWb84tg3v5Ws8YvopPnJNEXr35qGQvbSTMi361cVG1mp1DQWPXYtnc3EcAcjiVht",
  "key8": "59bwPERRSv18MbST6nr4tVyaWB15tmqtcPuPJmkvAxtgEbezHc4cNKkQ2KbMVmyMRqGdAYx32SY1WyjPMgK9FPW3",
  "key9": "2sJPdzBN86n3ZbjQrTLdhyCUuGWQLr9gAF4FsMpW7APvY348KBNCLoePk3rCQ6yUwJ6de7N786rCuuevjRBzSeZ8",
  "key10": "sboRB7LcYzMW3j55ukHtKJVobsj6K3iGWPk1WC5Y9tmR7km2KZyyMNzQFgKBnmpePpCrJWy636tvDSTFbtDyvJw",
  "key11": "3zRGkebDcA98QbLUuPFb7wrpZ5YQo87RhYzcyng9LA2qxUKTGVEssJbmoVZBctWLaTaBq8ZZLigsqr23Mf93XNRi",
  "key12": "3cp8p8VqGXgvHcrSXC3s5GrtACijavvU3XxBcRL2ZszigrR3wF3GWiiAnSA3LpvUkfCNJjP9dsPRddA2xeLqofSY",
  "key13": "4LWjnQ6u3RhTBziC3LfL172W2PEYWHHJZ7cxSfnPGhQSaxU8eeNLBz3eWL65a8FyhpjYMCGVz6EeQweAJWvmoDnS",
  "key14": "2ZzcsqmmKQSidvUBtJfFPvAuDezdYuJhDaF5isCx3qPgbcfo4Ux8KSaGP8scZ9Wnp5R4M6Rom6FbLRwa2GMm23mx",
  "key15": "iN2uYy8Wn7iY7om4t6eivR1SYQwFqhvmoxkAGrGhaTZK9XYeYxAiTrsxacBqtF5wsR1kStBXFyTB3foMqhK5bR5",
  "key16": "3VzHXayXM7XLsZswdMcpcdfxXw4juYzTJsfSr9HJ1SgSMWPpGj6ivnVUoFCGbDXK4A8JhsNPmPhGrDkbDCiEqJ3u",
  "key17": "5bDvsnQQxNNGTh1qoFQuGdVjTomTsa5u8Zw4CYBWKypsLsKEwDTxKovoWMVDRzGqGy78VDVwtkbzz2bGnqQb2zcx",
  "key18": "3ZKFGgmjTKFc4YRzpBhzLuMtMpjSgD9TV8SHtNqKobxQ7fMhWhoVUqRe9VsbK3fbukb7JuuW4iutgf9mz31uDrnJ",
  "key19": "64igQnUT99N8BAimPivnQiTMzka27QD2iZnLmuJidDoL16agBkC1qhZtHRDPsUCsLAGzVooq4HJywjhxonyc3rBn",
  "key20": "2YVjE9jptkFa883KaT8C9W5edKrywQvS4hEHNVfjoizG9WE8pxC8VkSqXJ3S2GVDPkQbjmiwHjZYxjDEFtEWLC4T",
  "key21": "2HsEcz6Qgseh7tiR9TTjoY9jjt2yM1Q5FGTMVhCAym1wJ2AviqkCvBDYgyW1SXHW8J4oj6xqG6x1khHfKFs9XaZ1",
  "key22": "39ZtmNLozcuh8JM8kJQijDbnzqo85ANsDZzbivzFSUWEe5s2yxhaTVh1vtr8tpZaXLDvoj5NF8HBMrAoU3JUnGd9",
  "key23": "44m7KaMjNRybXhEiUjJeGg8GTGXJZrAEQMXrCSipasr5E8zbiKkCb68qS7KJSqXSQd7yiwvgjBY9eqPqu4bfzo35",
  "key24": "5fZ4QTRdUb45PzytfubkX2tPouY9bpQ9QUWbWpq48f7n6BokYC6gTnoj2LNMSDPsVHKzGtKvcKXyjK1oGFaNZeFx",
  "key25": "giVdzV4qKRyiqXqgoaE21oc4u3SbmHg5M3VK9XnnxXsXrUx6HEkHxpfnrAyKxKBVWEoS9AYZD62kdZF4CVQQCjR",
  "key26": "LRTzSge3V3QV8L4ta7NTbdQg44oN2RfyTjVZQDyQoeLDUxYpTke6ohfGv7s6oNtvAhu3LPTFecY5GqG1Y3VZYXe",
  "key27": "Gtn5MxpACDLfgszq1i9v7vV3ZzHLHEJsFQPa4MwYr1KbYWJFzUwZb2ingotnbwDtjkatkTmtFTGpG6SeRqYyY2u",
  "key28": "3fNT2d4JhMyJVBMbYyFt6cqkDS8S8FRjTtAfJqrxzFEGBVesx5ZvduhReCbXmTj5RhegisfTRufDXjzUgtDLTHZL",
  "key29": "4fC8Z9d8rc1pTVuFaAaquLdLnXtdWQeXfaYWLLfiUtGbACVftiSsKYHN88EmjbYTcTk6gYU2SVgDgCoqAxDUnWTB",
  "key30": "5Tkz9gujxekAxLfF8YHRQyGFB4Pky1cN4pYRfaw7YxTDRiCFaq8MftoAysXtTeYo2c27ZwFHfFUdcXvdBiEJBJX3",
  "key31": "4AJAodUwQHTEEPjHVBLVW52dzguvm775KangUrYpV12TgZrqiFtCbocdUp99wqX2MPDjXqXSNjeTfpER5gguKbi"
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
