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
    "4eHrrEEmBLgtNGr99x8aJZJrhQ5ApcBPjr7HxKbbd9mZ2dYxsXijeFHv2cVbe2Hwmg1uCG3PMg9Scaxti6fs3CJZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tDuy8j9cq9RQZAUPH7VWxs6E7qhC2HpTvq997xaTWguRkeei3yrRCazWYVni6xpnEG71ZBvbxXiazPTJVZZriQu",
  "key1": "rcy1Gkh1AiMFWw7wZNm9urvt7vEvKfkJq2uLBUgnpPzPt2i2CTrEC8vMexdhoBR3SNfejZahZ582rkZ8AXwGMyK",
  "key2": "469kRiRkJ9aMe2ZRxVSaeURLLyxY4GCjfdPVrJpwTPd2yHZchKcrWk4SAxsza8yJKu4o49WRqyEpJg5PU66URT9G",
  "key3": "1ZdYpzot8G2GckNEdcjTiMqK3LEJFXdJzXBdqr1WkLJHTB2evzLvbJk1QXG8nVgs36Yxb2bRGmiBjbJLcde3vwy",
  "key4": "5CH32ooKykRBaXozSzK78DR8ZDwBQ7qpxCG9C2z3iGt3rwAqtSJNGRtqaG7twv1aZq7u2cK2suK4aU5Ps3PaPJUs",
  "key5": "3URfkK5i5yv7wyXT8eXqCspBB2eGJx1mFChaNgWrsLVMiZFzA2tfzc7vFpAxfRoi4drwH4bcdJwD6QbK2qUGSFgz",
  "key6": "4Thz4HYWv6Heh7AYz6FaCCQoL8r2Sv69xpkpoRcMQWiMxSJsKcDKEodfyoAGVTydv4ojB7Nydgtdhkjox2wbB3ih",
  "key7": "2zezppN8Df4uvSgZKx4L3FoFPPDt68J6a8Zwf6AU5MUPRZsqay1hXQKss1J3LteagoxrdzacMi58RNMJZhfuExfM",
  "key8": "4geBTccE56FAa5owTAGA23njX2g4izpnQzsdXaj4SuP1aQ3CCg3zF2WqeXJS6r25aRBu358xiD3gSTgpAiYpLneF",
  "key9": "WUXNvxgE7YtSm2X9YhWARzDDyAahi1LdjYqEWPTQdm879GphFUXYfJi6wSdNxYuQRqQ2iqjTvWwPTkkbfxuH61U",
  "key10": "2svvH5cBB9fGnyUwush2ZDiyC9mM7N2LYNTop4wc6nxmvo1bns7KrPPFx6SaAscGuoZs1KEbLSrea6npJaFUv7z",
  "key11": "VT2eDG8Eqrq65QYUF3n5STks36sCPzGKJawW5or5FUN32PRz8kcZ12WX5NmeVsCfkY6xnLwaNwRX93o3x9zuvrr",
  "key12": "oiBQf2HZFEQT11YV7ebiLyZzPPvC1LKq2oFqgvJ5qErEpCirE91spnWx1hN2G3TG3MFDqrYSCw4ZAP2miLEE7rA",
  "key13": "4eWkAF76WHgYYx1UkR7DdBTzn1o8vkcDLubqhMyVCGiNgxpkrtps4XVhqe7mhfPnqCwSsXbrQhVkyy4XCJNAUDSe",
  "key14": "QFSzKQFrBxT5feRwr5t9mNQ6Q7mPzqcNh5pok92oM4vMSeooSWYgTZNso1PLpwB7TuW2YjQZtP1emsnHokgpXme",
  "key15": "U4qSvtUs8ib9KHpzFEm6mccLufhiEDnLnsga1p3U2dqegqMeJUEocFe1BdqNLk1QKeseKzkRvCoEnwwFnLx8z73",
  "key16": "2rBAHzqdnJzzwvFKrF9iF7ZHHKi3GrRenJyYxxi83sZC7wgD2V3R4WVDQmsYMdr1nqoURuaWna24RYm3pc8J3BaW",
  "key17": "NCUvXR8o1fc9q6m2YCi2ePTFU5uKYDKtcgBoepZeomwcaPqBRXQ386fFfPh5oM9tVWCPcZfy2ofnG9VAx3rKQTE",
  "key18": "4eEwzqko9oHsnN4bRrYUcxmrKsiwPuHToe7cgEG8LLwtsukV77TDF7Mq1Jjdqf8RbRPBnjAaPHWqq8Q7yotkGe15",
  "key19": "2XZzwh4akRrrGcuiP9uxunvhzkQZZkTgqwx35nb5m4vh6aaE4AHRc7xcsSrBkchh77fuEV56RjNAfDrTAsXqNSzr",
  "key20": "2pUS58vrpf4wwc9cndG7nsjjZUR88NErdPdiX37ZFFYze1N7K34kZgvcQpxaYxkjPysor2DHy9j8jhZKun4TBjEE",
  "key21": "2NqVTB5gc7kDfgf45x5QzRvKk9BKDnmTaiG7R5dqW8PWy1jPcy2HzkLWtztE6GRERYitpLty377kXPhYZTjuBs7K",
  "key22": "5tAdH8sBpnTurVCRb4xQGB5brRGsDcqh9wsE85WHaWP6S7bDcWXrzeL5kU77iiE6J7Vneyq3428M79f6N4r47CJp",
  "key23": "47fofvdHyHTS9NdfXZNHjQmzJNwdACM37AdRgCMyPHE3PTehkrKZDv8MJn4LVcbaFyoFCkeYchGtAW29KYJxKYF",
  "key24": "5Q5zJXRFsrrnQ6dneadkAqQSy7kfFwTRFj5tx4fAhvBvHDfa6LwFcPgjt9x6NxLe9GRyhz6XrGGsupHsAkQtvTS7",
  "key25": "4X5SupUUXLJizRmRP77iEdrkoJzKmkoYeJJS9w4bvkYox9U1XnfVoJQS3pqL3bLWE3us16ad2qqjQMHEBPKJpweu",
  "key26": "567jNMgJ9wUSvj4KjgdJAr4CJfB8GjXjkbser3z4YtpKscr2REu3t299jppGmsX2sMXSSUvrxN9NwjbEbByf1Ki4",
  "key27": "2jo5e3s4pmohCixkFy2ZRgHHgCPXR9NXYmjMrmUzHCdNxaH981TvFm7jxA3EyZpYiHEwesMmZPYskSetpwt5wfBC",
  "key28": "HkcRHiMTygmhzaZq8ncisJtMJsr81J4gU1Nr98TBciY6stWRZ7onSfc9JBqUdASUDR1PbHw17AUXkTttgsM33SA"
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
