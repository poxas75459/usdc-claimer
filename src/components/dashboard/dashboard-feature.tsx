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
    "4XUCc6ESpFjCtAG1ukiwxh5d7Q2g3QjU5bARFfopsSNWBABczHYfqHyuYhxqJw8MoU7cyFdwpG1KHw2WVXCESSN9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54ppSTmZJ8En8YoMwUQeaSb4HbDLjbLCpt7LRTzJq1Jghy8VwQxtzyEt4zFLsHqoQQkHnZfLVpHZW4kSZQ6DJYqi",
  "key1": "2QhVGSPiDAs76hmJDnbov1D2ayYVhJZ1tNiQ1YDFGvZoBvvfY3cK8y29omHPhQ44hd8PQQz25vJ5PZJhTGy38v2o",
  "key2": "bDcLaGXkhuDY6phJinpSb2WMSSoggHSmujFDg7wBv1DGUhizGnr6k96vnuroSBEkJNb37X3phACYMLEgGQsqkn7",
  "key3": "2GVwbXPuWmZ1H85AryKqJqh96cdi9G2J3prhcYmD7JrWXcwSUB8paosibngSugmY22QjvVEjZMcnEBTKh3K6jcCu",
  "key4": "4AjzbwFap65nF7PhzeabQahXehF4dsRqRwTDpp5z3b1o7eiuxa6MNSsvYcCnGVkyMS9fnf8W4uasoiJiQkgdmqVJ",
  "key5": "4fp2rA978MVSapidDiccdMnCoRwUrpHRbkLkes3vzYBarWqgN4gLhpttSHddjjT9G5DJKAZdGAbgoM8MF6evNvxH",
  "key6": "2rkysEZ3TGSAD5x2pNyzHbNgDqH4WMZi5CuzPTU5DHRYa8iLbtjJFJruMGdRQ3jTBJzuLNHVfAuzV6B5zVzVpDKQ",
  "key7": "5mfauWeKb2gefhYx76UWX5AVtdhAr8SFHZ9owbqaX61UoRWxjta8yUTx9VDNakkMr5fq8rgZARNvbMJmDEzAJSqF",
  "key8": "2mKcfPnTz8FN7uH8qpeMK9fM6ptVGWWwu5p3mSxtUx4u4bn2WBGf77nuxBdksyyaLuvxqFt6Qf7hLrK21hGQLKjT",
  "key9": "4ZSL1kppALz9eGgv1QoufYmTBn8sg616NYEwsYkox3rJTf8FuU8MEtXtjgoR5jfdFwvTfwX95fCPL5vvTdb7cZts",
  "key10": "spjeoiSNkDq8hy2memGJVXWvLwUPdyPgep7Ht7rr54BLqNgcBvpyKG4jR5U4Xs8Tz7eJsRty2aRuedwWYmpyTcj",
  "key11": "5KzbNtER2B8ujUrsm1Wb8qh4srpisHJB185tA2b5efVB8DBEgdbrUvExfcDLuppQnDCzK7FemNsup4DUzFFZySjs",
  "key12": "4HRQF98MxEScZFsY4ksieYWpPB84dcSxSJRnvDzH2W3GsLo78ViboPcg6RHCw6D45HkttBDJspd6dW7F6V3dyvLx",
  "key13": "3r47xH2vx7JxDizcVMSoJG8Skb9RmJCDinS6CTTZtb5bMjTsQ5U2WWN9XAvNqo9w6NXBVHgpkVAcoxAjt55656Vx",
  "key14": "2hHre9gXDv3cYgPW2TJVjszJtWkcsSKmTwKBwJ1bB3UQny5Xjxhb5oiFidY2peNzQF1qfRtTxKbvoKpvjvu2z1PZ",
  "key15": "4uUDBvgCtEnP1Lqa8uYxCaLeM3sVHCNBA57tXycyppKpzJBsh5HxEdr15PnK5E54FZMyD6neN1YeZgGkDjZpsZxh",
  "key16": "2YEDGARzHgDr7spTG5du3Rr98Sh9f4Nkfxah7zGdmPzpu1FsgH9GaKyPdVq7nBBj1E2FXccErXQ9Xri7KPByveq8",
  "key17": "5zpZqwEXR2sLTufVt1BQ5PbLYJzyBVvAzR9FyCTEXahyJX5WWzW9EU3CqBZ6DkyqzvNJeCQdiXNpxPLG3i7QEuRr",
  "key18": "4PBVGmMkcnb1PPCjyCqB4TQv8gbzGdWwaUVWggWipdw5DG2JfaRdrw7R12khbsPJG15DytzowSB7M4yWX1GJNkjZ",
  "key19": "bMdiWg3Bs21thYPgyJkdpfbxcdbssb1ytV257tig6mVBY3g4bATc1vPfgs46T6egsJYDHFBr6Lw6j4izMvSar68",
  "key20": "2Dr5KPdMWYd4bbQbvmGrT3v7uDxJQA66iU1Tq3BQq7ANDCoLYWuFeVcyrDEKrmWYVkjeu3gLbBYLqgaMh4SHg5Po",
  "key21": "3C774i61xCWkVQeCFFC5ctr9e1gS3VmhszprKtAPyxJwjR1451H7iKEi1wqDPSRzrZJdu5z69ZrcJCx2BykY7u5h",
  "key22": "2VhJHuEMF5F28SRxQ4MANhEbP93Xhh3eSWWzP1QV9RL1wniJsAsBZd46AsJu5u16LXsmrRe4bLJsARdUDRBPCuZg",
  "key23": "4BjoM3KBvv7NQGfy5GNtiTxk5eDQpfhaN86ZPafa9s9afaaJKatgTxGhZ7nVw1crU1U2ccUAT6GnwUCqZCJVGJoA",
  "key24": "CK9biLK1Dtepq9uwts3rRrTUKiJfWHWmHVEd83HWpmQ81VLRkPchsM8tGy6i6B8rx3aL3jN6n8cweLYVG1xd2kr",
  "key25": "4bsmCmhqTRhwt9UtTNyb7j2xZUvFuD9FSNpoarYmL8ZhuY65E2HJojUvCwgbcYVCUbh4tjxBPckkLyx3E9jLGSK4",
  "key26": "3SDUxSY1hfdvGCNnYKejVTZBYc3nQdaUP2K5oXUZkc31eUUSdTEkUsXFhAwMhCBN4zdKcCtaZhbMwH4LetTm1vC",
  "key27": "5JKTjjHwV16yKhNuK9JNteW81rGKJU7UMaHmMy4e82B4YNqrriQCxAJcGa66hNz7qur4fxvq8mceh6oXaDeKpbwW",
  "key28": "46YxbkfBv8hPvvuxVrb2ADdDdfo4BAPypugEDnaghKbRGoWXqzJtDUFpRwgrAsEk38GhDTctq528bRnsTX1bowcT",
  "key29": "2V43APbWtqk4LKPXdfDisBv4KY6Pq19mi9Ve2tX6NFAdQLdkaHbMKvcjmEAh8Qb8BSaus167oUjyaA7KAynLddTP",
  "key30": "3uV372BdAJCVquScGaGtoRRJVNscZigbgtkemz1zSiX9fEBLSR8iYfraWcK4UG3LfBaFS2EcFukaNTGQESKoiP3s",
  "key31": "2VMVSYfU4i2AWknVuqUrhXrUw6o9ZcjguWAZcVU2YKSB8Rpc3mHiqANPqb5sdw1ZDoYLN6oDCdZ4wRfeNt56tcsD",
  "key32": "5KUjngePMnfr1ZjQwCivwJpX1v7tozGrm9TCk7KBTAQvup6UkFbcNyJjcBoy4XzPRR3cg1rGaG8K4oeyBGciLGAS"
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
