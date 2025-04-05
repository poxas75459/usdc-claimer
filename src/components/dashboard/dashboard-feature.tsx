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
    "5usVcJJS2XNXEhSx48C5DGwrxgtFYuu1gYvjmnMLbqf4UhH2R7jE34MQHeC9QnAArTYJhtSjhjRPjGQBDthR33Sr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EYdeFm6KxLugSV6is5g6Yr76oUxtjRozyoGBEs3LSQo2hFiVYuusQBSSwLGjssdcKdn9Aj3Sa2xC5j5M7Jj9pzj",
  "key1": "5q2v1cQwe8qzYp6yzeNfvoyFwy1yng1afgcFYq2LNvg1MoodaJ3mqC5W8M6sh9Lu19N3XkSKcJ6QYRbsfd2nLqga",
  "key2": "wcRFRWN53VjaF2VP4U4wGMPLMo8LauanpWG691Vkrf4JFnff49MM1i7xGkEuj7afGxq8e3TF5qvPw1js4cAGiyB",
  "key3": "5cab9PGo3JK4QZeJKfsCNAVuWcG2Rjb8g9Wr5136RMnrB9KwJJoNctX3KDNa5NeNKGhR4fQyt1GgcdC2k2CNYud2",
  "key4": "G7kCGYMAawitQ1ZPdUp1aeoaK4x7QsomLTfUUTZTbRDxmwwqwc7nCT8mEavVCuYu1z3CFirp4yZD2HhsCa53ip9",
  "key5": "5b4XrvugC6dSLfwPcq3bsVZ2MANtxAdXHhaQenocfj1LPh1iTGJm7CQdGub7ssZ9sQ3STyTcVhTZKaZFALcqL7TE",
  "key6": "5MmFnQyZkovGfzNWeAR7ozmPn2CpoR8Fc37hgr1mjh5ikgPhFdXJdX99ywYMJC7BmXYxSvqx8CZqKsFE6JRAwqLv",
  "key7": "33wzTry2dEMAKcfqsCVhne6ovpgw8K57q491qPTuvGG3F9AnvhUh41tmQ6jLDT3kt1hpPNT2VMGEh3NBxeR3MnHv",
  "key8": "cw6xpa9PWcjn8SNNW4GsDsXCdXXXkf8fUhVjMDbLkKgcT7aiuK1zK57mSNWu9QKfEdLVSLQ9FmytQ9NdKuGpbpg",
  "key9": "3gCdzEJcmSQZVEoTcUrLgbsM8wFqrDAKbqDAfETei9unQc7jUzSkVpJUJ5e17bmYsYupeJYeVnTXMQEcUm44nu2a",
  "key10": "X9swnLekKNj74nTPLRWYiEeoDvHdU68X9EvWLBhPVU7Vr3jwZnMVWGrhBd8EuSzzM56uSDSixK6cu39SVY7VQhY",
  "key11": "3buj64TZ7D8DP6Khq97WyfL4MQcJ7Ae6fR1sS7aRs7R7FsEkKsicYhJ3FdZkNznb6srodjfvV1zw4fKYYfUMjnza",
  "key12": "4XFBRJoFqYqdZCPBUYpXMcCJSUg6F4ZZYjaPa8cujoVDzujBiN32u6J4ZH9jpAC8rVAaHjtAXkAxsNSDFqgLywin",
  "key13": "5LKetfovboFxQQZmuWEXNxz3LpGXoBENgky2cNL5vNmhupw7Ya5vbyvmtx4uwjTKkR3eJs3mYsBukU7Qkr9W6RPu",
  "key14": "3SWB7KmNdnYCcqFzXDMpMMRArpSy2RQQepE8DpUVMNTXLQTDSRS6RBekTA7uzn5ei52VznwepMT7d3q7gV4Aqu3j",
  "key15": "5CyxZ8gXTgMm1jETmxwbmyCvKuRHQ2MAA5T6xG4dmAkDpJ9AugwBESq9cjsxPCqjBYXKAQyYsF49bNVgAC63CsB7",
  "key16": "2oPoJLqiV7Xs9j6EkXUK2DAxZkUCcf23tf5pY5ymFz8caYYUgCnbujswdK8XdqtQmNVSVjKq6fM8Nqn2fgp1YnTx",
  "key17": "5CGugefKLwy66ga7ueTr4UQ1ATdXdw8HNR37fsNW3TDSoAkKc1L8gGch99kWY8jABHgBwWryCRdXcVUCgUCam4rQ",
  "key18": "jroS9WBoq23o1AdEHGSRaS4XPCkW9hnECix7NBt1gRN2tgqoPd3qnFnGdbFznA2gMG85rP24pnWv9hP9FEX4Cu2",
  "key19": "5DayGHha89VJDo8YLqKMPaS9G9t2HnfAWHbUUDoCNGRPPCGG4CtoGHyfeC9jvw1AJNAdb99P2fwCwE33frX34LVJ",
  "key20": "6121G6K5MwignQPAgDJhwP1ngdUJdQMWRJgzRTf1iGLcrSixWY8fnsLmV8ThH1f3wRdmp5fqi28QuV8hzjt95Ny5",
  "key21": "GP9AxN9QQGaMR8qUD7Jdu2peqUM2wNBSkDgV7yiwbHgQt6npRLw5UVYwepZ3oFtgwCPeFpEuPqcsQffHth4JqC1",
  "key22": "2JZgLTCQbMMFs6qeBiqgbTcgTggpNHMV5uEajRgqzpEMJ321T3KUaz5qMmYa1bstERWhhgKVZFUeTkE68LqM226K",
  "key23": "2PjU971h5ugKqKtX81kkWEBx6ALHhDrB8jdkCBPoAvDZej9wH7b4mJySmjExEf5xvo4uVyqjYxCtZ5Cb8MNXatMs",
  "key24": "45QkyV12k1fY8Jyd6cdw6y25C4cXnscWL29opDSxwN5r6c4vcRUTyBWFrXfG5c9LyhiWqgd3DWrYDmvB63RqAhL6",
  "key25": "AgfW5pABi7b1XExKcoExhXy51YJiq5bNSZ99VUvFqo4ZQR4hBbTNsfNHFeDvahratq2GCBnmZbPcxDmPbtCbWB4",
  "key26": "xE5ecMeXXws8GHWiDKdmQiSt8AbhZ1WzgpGf4bG6Z5porZhZQ4g91xQhpqumVWYhvXTrT2c9LhpvPEbv6i2yba6"
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
