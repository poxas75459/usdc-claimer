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
    "2JXASwSiCmUPb1dFgQeZFyXC8qbThNYpe8h2pBJqWXvfzFscHRBny5zdnFSdab7Qs8Ta2RHpBeusqoM3LWDkK3RW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8PB7nabVBYm4AotydF6wuaLDkJ18QrJE7eQ12VjjCGt2gtWShfCwScCexUXRDF2sAGsKv4tsGNS32bhJEVm7VCK",
  "key1": "4iCnY3ia9pTvWC2Xh2mGzjvz4BHm7TcHMptwTf5F9a31js5R6dBhXHJzx2Rnjh9Why5TDqQtGjBR97saZqt5kjwG",
  "key2": "5YCegGxxfGGr7gGCvsa7xJg7fM5L6kjpweM7rEJJDh67tziX7HSE6fbGokBmdXp1khZure3QBYVYs9fBR9ZuXJ7T",
  "key3": "3mV3CAS7nicGDzmfAoCSBr9RHhYaC3MjGTkvZ8NC5PoCZDYS3L6vZsbaP8dj7yQwx7ciip5WhZkJuhRM4jkW5Dgv",
  "key4": "PpvREag96SuNp9Gnt5P387ryuVBojTrU8SFvrDv1yZizyteZ5bDB35oZkoJT8VEGLiJim1yz1MpibNULY4sH2QZ",
  "key5": "5mYmjmNotVY8sMPvjwmc1pq8xW2LqgybSCuumwHcGQX1wRFBgjhXcZCJoGTs1u1RuDHFTSP97shYoF72SWvRn7c7",
  "key6": "4BKdiGn9ireuowpA1TgmkGYpkUbyuHk4thhWmia6kQoq3qLpga5ft6LeFaKrpKWAEjrnnATi3Mb3eREBXgS3PTGn",
  "key7": "2P5MoH9MXrdtVXzRkPVrFVfEs1C5cVyQjPoAiAbRWijgEkKfcrA4nhSCJcuaWgF75MGKidsnVcTR1pmXohjDJkLR",
  "key8": "2Aue8c9QxVhZLW4yF1eUVUQbcCscnAyrTjHLjVL4hjcwNmmddCsgmNoZWmLwntoYquF4Z3YjQi1pxCrRPAA5NkTz",
  "key9": "4q2a9fNAuVtdT9eNm5Wi916NWPMhoQ1bVTjP9VSAUeXPeXTmV6jpxHDadCNZFvWT4MYoTRqksxrVB7ixdZRPAhLx",
  "key10": "5EdcZtiNNfZ9ZgrkUqLE71VTBA3aw4epmXJUfHF3oH5eLrRiaSWwgCaqkZNywss4CtrGhdXsSti1FFUn6dfUNpBr",
  "key11": "3a4LyxRnSCFeC4HsxEbuurgxnG8S4kqWKwB73mNbpZ2ruGgabfCQY68W9NoCBW1v9YJjCkYA7o9JR9qaWKc4fp47",
  "key12": "4BqzYmcpNuc67Y4pCxMyjXgUgu2FMofnb6HFupRFs1VfeQMRS7BXPhASqnHxmeo3tbHqVz9YP8kG9B9CWHCkEdmq",
  "key13": "cGyzk5PRKSYQnrA2pS21YQGbSZmAbbR8zFcvp2ekhH9zQbpitqUtHSUUCgJPE39YUEtwVbicrkedbpBPzGTiAqD",
  "key14": "5c5LDNmUfcnLg1VX9dcNLXpFc1M6dPG4txZcRoFM11Ze9ZnYnwsPQ6YKWETbfuihk138ab83tEcp7x1L1q8Nzovo",
  "key15": "3SEjN2nc5WYkabGnUwTL8MUU9r5zQ6UmPMHrKqDznN2A8HfNXiYpWzgAkYyj5JAf8ZUiC2nSQqDd7bnzyrSxXrsE",
  "key16": "2c7pWDbyyhE5eBZhvCTQitx8JXuNqmKcPGeCTKwgmxrnsvMCWLg6Uem8nQ7y7tRNWaDG8VnyJuRYP6Zo9VU8LFda",
  "key17": "29jy9vadpvcadK4KkqrFxrERrumXcu7fEYyCFYzmZwo2T7eTDxPYrCRc4EVff3gRyMjnynG3Q4VjJRcCYZzLASL2",
  "key18": "26eyeYqAyzBGez57F891c6ucKCcTCLt1cnwzwt3wvGfR7WEnK3X1uJxpEedXb7YUabAAMTZRZvCKujL6ikvwJUH7",
  "key19": "2SK5oBQLuMvmpNXn1hrPAg7WqRuUY7VNZ6VVVCY1AXuiP1bmkwAfwfRWxPES24UE7hpjufc5JLzw87UTqH1wbxCE",
  "key20": "65ipim9N6zb5wRwiF5NsYkJ1fQiR9KzWvyVj93ZsG4Nvam4zgzveZHvdfXLMRSvXu5URqVjmJkTXwHecMUY1QVFn",
  "key21": "4b689ZefackrRCJnPQdHVKkkREtkdYZuChCTPW1wdWbU2TLAmLNyCm12dZgi2b7RdCEjGseMePrYZhiKrL4Gaxqi",
  "key22": "3NbhTecm6MSGnHMj3MyHMPn7PkeQU4LVt6QnQ6rwfag4zLEH7h6zFe9Dhx93fqn7Asr44xWSwtPbgp5rEv3bu9MH",
  "key23": "F75dBdg9k8zb4orcB2wbdKnNDrCyT5NuLif5Gesj4of71KHXYqTgMKEw27b26ZuCxUk8L5JVmttiTqdhSXArejw",
  "key24": "S4Njm6wZuVG1X4Hf7ZkjadxLik5wMwFDKLfAtTb4SDy9akXj8NjwNJCxAA9TE1bxVpJGa9gBEPAaykqfV8G9kKC",
  "key25": "2Kockr99naCoQ5CkyWNcqG5ndBBXzrz4tEywxKTVHcnvHRVEeqFfgy4pvyeeYREghVEDPmySjCKsevmCMkCARsSa",
  "key26": "3bdiCsm4aagKLQNpVAfYYQCCvHMUSnkEKPikRJPpWTZQ5ZSJPrpR5mpkEYzDDXjhWtirDgGnC9QUHvp8FE5ayw2B",
  "key27": "4kpqzeKpbnxo7wa8SaTyfZMh1sGYZtGxWn4yH9rkGCwwWpqMMc96YsDNfTi9QuGAaAsQc5DQ9nJxQS8x99Qy31Bd"
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
