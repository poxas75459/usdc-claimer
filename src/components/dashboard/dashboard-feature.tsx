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
    "2o4hz8BPwNj8f77rR6gh4fboHRE79EdN6kuKsgBpSRGb6CNYzfMB3ALh4W81XCUeGeJoQM18Q1srr9QbgnGtXNPC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cNbJEsDXDXkWS5T9UHoQXRxchZrTe73ZXEuXWeEPJC1RhreaprXaksc98pKkSTyJC1tKdi25Fvos8GWe5vGM8WU",
  "key1": "23cFu7xFvbFavXArVsPQqfZUrRkkTMFuGuNtWpC2NjiC3xsHVU1rfRrrSFyc8Mqpid1MnN4pMgK1Zu2KAxLyySoA",
  "key2": "29LGPus2UzsPfhYxryDBDCmeFcbXNy9fTjruRpwRNJi65FAkt4hsSXHNf1A9yP7gZ2zhSSfMpJrDkQ1SvbuKcu68",
  "key3": "GeU3p4zK84KCmjtigerKXnxrgGg1qNSA5mxewBRhFjzaK2LdCt9xv3mfiuMzotJoS9FGaGS1tHxMaVb2s9R9F14",
  "key4": "3ZMhr6HPMqR8kLfR4CJ3V92x8dL6DSkwjkswf8F2x3nrQoM2BhYF4QwRGpKrVjzQ8Z77GDaNd99eKBKXGNEyZtwY",
  "key5": "XZQExdARVaT1fqqCAmNK5Cxvbt8UtvagCEr2rbW4ibzjkyMB53szyko3N4uikXCCc5qDbQXrXEK3kqAJ1BvjRF1",
  "key6": "TXD7UuikpYX99xamzg2bPg6gTwLC8aRTCeeUmW27nGiTvgK86CEBpt63cxyfzf7XWQ4LGWsfKXJo1fkUhxjUVxV",
  "key7": "5mhqfQHdTMzwHfmBvzinijevcjmm6Cva1Linoean4kZ9KbHXELZ2hCHSVjpDEv7H6VjMJhfa5A52iDgEcFEiaR1i",
  "key8": "JxrksXeLdc726pJG5ZMRjMNA4tW37YSHtrrBevTn43zeRgriZCuhfPtW8DQDrS5KFNJiqGKJ1RK5ZYWxDiTmKGB",
  "key9": "3n5cyRgk5xQwLvz7AR7QtaqJwEskDvBo9m1QjaSQBSTXxnyNheL4xechgQ5nATQavpXjmrm3beXxF6qdrvrKK1RB",
  "key10": "38MjnneL1uHVUCh9ZkfXFrockFvTCs3vyEJmaxgVRBJ9u9EBBvkM3oUPGy5qSXRdbhTe4auscB3DG98riNtsPsab",
  "key11": "2gQxSx6T74dSnocAhZ4xhxT6xV26NGJjTzKibwEkHzoVvVJWrTXHWoNGDxmrqpCBZfgTFNkPSX5KRNEtSekxufi8",
  "key12": "2Jx2zDHMG9ycv9Zh6eKWvbAao3459zKL9jBKWEd33uEfexA785JtzuAevPnT9VcsnZxN13rdGZNfSNTsgZxnQmHj",
  "key13": "5mGWj6RyKtB1zMj1zRriz4Qpu31cbRCPny7MrAZUbMfpxP2AdAAPiUZuQPQmxGSzNFmnT64pE6MByGuN7tDmtEWD",
  "key14": "2YSrqFimR7NYzjRrDPMbz2FwqRKwhACwbYvaCSesqa3M1guhPGR6sDEXgdndCv1v3Gx5DwFKbNu78pS727ncptaE",
  "key15": "Y4hvyUnkAzzCvxBPMymp4UhgfvfmYTMggVKQTYdej6bvVdwkt4WRnQ2AuJRHNMwJfjYmGoVqeHth9nh5BdWPKU6",
  "key16": "3CS9XnKgGv2nVD3c9GzDu2zFVCPh2nt1VLcAmavqsMFUZyd7UNaB1U155ZRje7Ybm6MuYKCQt3F8TCjwCKsxrJsy",
  "key17": "3fZHzfbJdGfJReC6eh4KG9UhHv1tv5qj3xRAKhQxTmYz5q1ktggicqunbxu53HHrizVghxz7hsfbChkYPV1iyLVv",
  "key18": "3xSsrxWx9sJqTG8fa3Cc3tFzcZeZSaigQMvqq9cJYYPBZBKvvoyYpMSvcDvdBoJ1VWaMt5KwFyHNEiq7jNxrSXmo",
  "key19": "88sFbVGTA6WsRwnQNKXBnw1daq9wah6Rr7xWaXUGQcam8Lknb5FBbbbrqvP6eg3UiscuGJmFWjjY6rdN6M3fjt5",
  "key20": "2bYkozga1zzs5X3Ap1R3yfxBefbSb1S3MUraiwHG1yKZk8bnWTbZBvUvxRLmDc7BRFDRab69aGjx3hYN8LYHy8S4",
  "key21": "5Ac9AVYX8Y5Rj56RY9vuqFmbkgNRnvxGCP2taba5beJvvC7JsEXx4AuWStuV34oRmRfPTD56kGdRaGj17otuVSJd",
  "key22": "33anxWN3sJyrntVLWVcJe4gqoe5Z4wfTqTkXchXU6XQ6xPXU2vf5B6sVeBuoe9Lhh83uvXuKD3cyXnEXZUPUKQTo",
  "key23": "4LSSLRvhFzuG2fpVSECVE7Y87dcqrzCjhmyThpmxekkQ7h8oqCTHjbseFNuHwrECbZnz95frsExstNbQir6qcbwJ",
  "key24": "4ruZ71gURtgJ7Tv7vBGkJ9Q3VGdTFGhDzT2n1vrCEEzJrWm8EkSdD6oTrgboK1inynCpxy6DDKTGPYaCq3P4eh3i"
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
