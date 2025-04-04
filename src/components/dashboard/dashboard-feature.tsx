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
    "3G2WDE5sitcFbJUJhhpRGsTh6RRvNuym7iufYEFYwTUGmGRX5o4C7qmF32KaXDTdDnnMGCBmZ7TQtGjBchraih7v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22mVuLVjc2zg2gCseYgLNZKaMQquwQoRqq8krUcFDWhUtzpnva3M5uYH4SDqCWSHTqyk8EsVJHCpEh3KwDE1LZ7J",
  "key1": "nUwJd8m3AyxQuy9po1M4VfXfJkCdLcCJNp3G19AoUtCrcNbyhRQXMnMGPM4xjcnfFA5ccMy6rtYdcG9JZZx2XWb",
  "key2": "YDQwB3PxGGcZXf4L15Xw4Es7WJsXc9vatewzPREia7jktGtse7ez2jSQkqRBjCqK48QduJHmEZ1afbdw5aeLfDy",
  "key3": "3XbE23E9h3RZiG8smkDLn9KSpkp6MeC7urq9YvoXwbDEY9cRCVCoLMeGT4L9pbYdc2a5vgqkrGrbxnmaBbtb1CPF",
  "key4": "2VXndTrJY9g1PiC117KoAkWZeFP8tERujEeKd8jkYaPnxRTR7HkSfPNMokaqFJRH8e9Ei4CkkC9knXZpHQGbdC6M",
  "key5": "WARBd2yfsgDuUPJStXo725L9wfXEXw4k9oLzQWnQMBDvHwVjq8g6oD9cnsJj7FdHWkQccsSzsTSEx4Rd2LT8JZS",
  "key6": "7HjymhCy6aGhPuT7fh3AWhjZ1XM8abreXBYzoqipvDpVCQnKm5CRA4J5fa6VD6uRaLBLpsqSLd7m4RiTEp5Q71q",
  "key7": "3TpPHTaVsNJGkVMQ4P6XMSdTGSJZ1CXgP2AULPgGoD52wL4ivH6zTdnXmDv8SNY7bHh7ajbZH4rXnjHszMEWBtMB",
  "key8": "3YCD6iDn8fhtg9JRgnaV61LX1NKY35cHyCUi1Z1TvTWP6GyhKDegj5w4zHjTNv2HTvYgxs8h5HHh5vaUqvumDtP1",
  "key9": "4WTURnH7T9EaMNxeuwvf3ZKxbaUKsvMpGcGNc3fEcyxAQTg3e38sRa6t1cNd2LRjZpN1KRvqYsVz9ysPypqKVVeH",
  "key10": "4nSVDktiC5zPifzQLcfp5D5EWpBVv2RnHgrpNb2P1Myd6S3zttaVkGH8E4syTHN4FRvy9MKDFsny76CEMG7LiaYw",
  "key11": "2QzvKS8gmSDCVS9FcZKzAUcXDP9zpK8WXy7SFmEu3gCnykMCYR2DWDYoVDFodZr1uXbfrdBgH4NKsRySzJJSHYwu",
  "key12": "36N1iFNGgvLMbrWyJ8iEcLPDy9Se1gCaviWguA4ZGGgXT8MVU2drpkgnpAWRFYxjk1YvsxhjzosqvePZK6n9AJtU",
  "key13": "2RkE1x8mPpMxA3X1ckiASFi5Lkw1j1HdpJjUk9ZtvPCsWXq1g2qjcnYWiXAYQYVpXkJPdtzHPYrrGGCL2x6oNFy4",
  "key14": "3DrEM5VXEs4NxLVcJXmjiN8vFCnEnzYqxuEHksa4MfHwYY9WLUoWj11qByuWP2E5bdtgMoecNpBRViGtBb4VQ6AS",
  "key15": "3cTUALi33SHnK9zY1hsc2qHV7u4eRB27mrSjjV4XV59YxEpHDmPen1vtQhk6snAHRK5tFhxnr8rGxYwddEb5LdNd",
  "key16": "Qc5Q5dfgsiXbCiD8aaeuisbSC8hsEercseShinYumMchFtdeDKQoYi14EPsn5DBAt7ibqjiTwx3Kj84nQd2dhPa",
  "key17": "3NKXMAF1jxy2Jhb1TmfrWbsbDwNHmWofTNznCVrp6RVCor3aACJwaVmYxyB5aAXfL3rg4mBVfadPDxkkLJ6GaK4f",
  "key18": "4p6RdEiht44GBY9ELQRkZ1vVVrZwE32nUyCh4Da2tdibef3zRtCPFJiHhP4Hiig1uuwnuUdRUbcx5TE5K2Upp71B",
  "key19": "2nhCSuU7Y3tWwnB67gNHBSW6FY5pwkQfspW5YYvFHUPxCpiwytVc7RzrBkk9BADMUZKPh8Po8t4WVKgrZxf93gwi",
  "key20": "VhAYd9KiMTvNbwfurRrF5MzTmkeqNCQqewnCS6KaTP7CwcPo8Gw9ZXKwf2gA1xh5FExPFrWXcgAr2oPaUjadJ6a",
  "key21": "5vkcatvwytR1nnXQJko2JtNS1VcTqXoBPY5mHZEkRAS4saP4ifAzP8DsSecFRexNsJrRUjvZ5SLVLyzcY3a4BfHi",
  "key22": "62sCzk4yucScKL6HvDLXp5hB7MXW5EEMuZSrHW9BEPQP25qAosmYUYU1PJCPjYGWNCiW19XdzhTcgY8fKPtAEkRM",
  "key23": "4h9LuGtVsEyjLNzx7hzd9HHBwuitHAZH5tHHT71fm3wcvS6W8mLFBoZSfVXkT9XUY3Jdu9EbCjgeMbszfY1y3Pj",
  "key24": "epW7aRD9aN6CEeXG3UnwPLtxHx5Su5F4eEQh5Tvn6KwRdGcSYET6D7vxqWDFh2YKhE4e3AB2ZhczbkKFLwF2pMj",
  "key25": "4wbkNYDyrRo6HpGRs7cbvhVKmiRca8yTpSV7XV9MBdcSVd2CQtotX2jTGn1uKN96Eiih9nZpNyAmEB3xasog22J3"
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
