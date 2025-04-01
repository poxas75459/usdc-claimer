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
    "5nfTAqfnMpnLbdy5VUSK79dJo7RTtmGzkyp2qC3HX7F5oNUCBivhfMasrsKsfRsrtZbMubMjovHByrLVbGnJfLhK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rEEPeding8qbAWeNgFST4HNzw1v7MYRBRBgxZMUrrHc1K63Xu7vNh1RiAjWa2Xfx1RaFSgUxpAvNJpb54j5gfrB",
  "key1": "3fmEKYKSxZgxcxCejvHKZ2MocWkzth4BfcTu4LQpCkBF3m5sZhPobebEdJe3mYG76CW22G82F8GdHrpD2GNNVi8n",
  "key2": "3yVyBzSNikqc7GcW9WVnNbhfLYbpjPTtgELMnDgADJGyLGh8jJPQ2x4QnDJMd2MHC5L1ATAm5VuZi2vD7dJSyS1z",
  "key3": "3bBNyVUXkduXfDRKgWBQFxbBrEpTadyvcxcoVmfcXdQojX4sLf8h14WL4Mz95HHFsqkCJrBN3RUEegMTBvxLbEoG",
  "key4": "3JTJLnQQ3ieDqwAkfBbrrCgtzs1nySFd7zDVCiFQjCCfbipMG9Lo6CqJKUndjM62GQ3YEWAoJDwgcPnP8yXncGyK",
  "key5": "5af3jsSoejNeTxhKxiWJGwFXB4737N4Yg6PQSDmUfAWCQ2QLJeLBS4GkK8MpfWbfF63iFgQ6jkd4tqU1BbjJiuwg",
  "key6": "3iiyYaEtYDJBNa8TxaUAcVKJz4XLNunf8by8NbnokH5LtSoVJQzhYwokTMbwmbMCSbABGYUQeBCu595oW3kMFgVf",
  "key7": "5DVxqYB3kJJFeRGBwJNivcjsQV6LaQucC36rmPMNVhEtgojsALqdMZTv8AF4JDsqqse3e4icCDBYcjz2rDfMJMZ4",
  "key8": "3kqhenSuLMbKuoPJd1VcLQBzk5X5g3fYcsJehXf4PbyKjqu8ugygHA7qGVFWpEgXovW4WWSKDc7GLg5onnykKAYJ",
  "key9": "3i8mWxbNXeAbNNPcGa5xttCnAbNJGKCMhEGdx6q9wkSXkr7uwvjqyVN57LkhMVeYsmXLvWv3YZ5q8o2gKVn3Xdp9",
  "key10": "28w6Wt7jdmusTwVZNR9F7HJQCXLs4CeKuUY9f5mLTokFrDSALTEFerHgMQHiUekcpkDhmbC1wFpBo3p4NxZFamHn",
  "key11": "4wChpRkoDFYzF2T1JD9wUCBiyeFrPLmVqx3NA9ko3q53uX9RsBttQMJspDiyJXaoKpiQvB5riUNGBxosbi8APde1",
  "key12": "jUJKq9qj4kHpT7NhFptyZbpK3LaPNA9YDozYL3UgJAtes2YjGwVnNkf42NZXPnwnpAfhNPRF8PpTabfpS1VM916",
  "key13": "4vXwDyiWZwYUhdoab7NmxBq4eYvb1eq2ZjdDN5RF3mWpAisnnuwYgkZMC8neJ652sHPFSC7j4mqvFGiwT9aQqqZj",
  "key14": "4f8LbqZ11VjAqm2mtv1vkVEEYRHRXaALRQ5XfB5YrPq7g5kPfXAGpMAJKbRpEAugnLzdGedpfugc8JV39dvXyL9L",
  "key15": "2sdhPowe56JLS6fsyJqjDj8MntdLek3fLwDRFyifUpkAQr4cq8X7iAtNMqHn6mfYBte24vPhGo7u7ospWZq7igYE",
  "key16": "4TgvNWcPHyLibuRDwXBhfAh5s1RDeX3FuLYk944mSKmGVL4kUfJSwpzPbeD84BrS2GDP2586BiSmrMkFUPWDLyY8",
  "key17": "qGkj4TEAvDD4b3GpyrRMAgZLhXTfFuUoVhiqXXNw3eSL84ohVF5McEYZoSKAipFupuoaLN3BnG8chZ1P8BNn8Tk",
  "key18": "4oDALgx38azqXpGMuerEn6V2J8b8fJxmvkWXoXB4fRBuCzDPAud9rjtGCFiFJVmTTiAb9tC7N5d3gLkMT9TxdzB7",
  "key19": "5tDqrdyMM84GGpPCmyFSmTRDqGdNDYMiacdMu9oCgjCL73iDZa3yiuff1465VmoPW1UT3pQXdJBZf5RcaxmREcQj",
  "key20": "4Q7RWogpjNDm88N4okzqvT7gb2kBXB9BqcQAWFoVXN7ojda5bmgse8ZYFKS3ajuuuVHAUuqx5pQJJMwDMFcLSrxG",
  "key21": "ScQExz5VPg7vuh4E7LMZ3wmdVni557oeFZxjXWZ5AnGh4ATv9kAhfzcmDmnHcfeSCaGV9fx8ZfayzVRQLVvWGqA",
  "key22": "RgkyWA91vwyiqVtjpjyrWySE12mWkMELVpqr5ajUP9qGTCtbchMUhkQD8R2xRDe1uyHidY2mC7Za9VgxpdMAvMY",
  "key23": "3rWEHhc7gD7Mu4NEqaQTpAwwg6q2hxeBEgrdr2gs1D8QE6P6niiJjjPygueaZGMtP5XuDfHoqU1ieWfxSuXR3DkB",
  "key24": "4rjjfFfdmakmhiJ8rrgVbF2izbaYf4dhUnpuhP1sgrsKY4mmqbfeeQH8dn5dRM1VkDo7oribzVvSJuepKGKnnY3c",
  "key25": "2opP93MGsNFyrKfL1D7zspPGX4GEMPmiYLMsE7SGXejsT5FJNXLnd3SxrZBAnR9sRerhipBcTk5Degn2vMSnX41j"
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
