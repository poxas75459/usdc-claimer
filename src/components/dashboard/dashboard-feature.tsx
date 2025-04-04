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
    "51KhJZhCNWKRUTdXz7sdMHeSPns7hpjUN2QsE1hAD1rrJ6iHCVNPuG2yH3scaRmtZ7KEsCqJwXExYqQuFW9t8FJj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LToqf4LZMxAHdZBMZzyB1VXvQzMsy5RqcHooCMBkTPpsuCbUE9mdcgMU5ccz4QRtsutt7YzWj2okKt4GVk5Gxx7",
  "key1": "2SjcvxiUwNzB7PxkVXniMwVAJW5GMHdccuPRNdSsVJfdRjMGKseBLRCxdDK4YCkrEjppAjYzBgSZcXWUCbCpeC4Y",
  "key2": "4PGpPG1CERzFGPSrAefznLi7ostUYXgaGC5PiyMA4Nh7SL5s3UhoNL563Cuqnhiz4EvMPp4kQfXfq6k2MgpzydbE",
  "key3": "5yo9BDn1MCd2bUfozuE22GQQCHA4TQGZs1YduDCBsWHr7mrmm5Rhc66CHPbbNwkq2udyEtowPR4YwWY5PQh5JnHE",
  "key4": "5CArkScUsZ5SNZjvraPTzL9Rsqu2RqCqF2TPsiMd9zhpZxrowab6gfMbscgYqaH9K3Knnh4rW6moz31Hbhkb4n4J",
  "key5": "jfxGeuvE2VoMztLAzHKWPEDSJRTCrpVCspTCbqnBtFD9sNYGiq8oQcJqdoJpkjq8NTQ44srSHra8uxiFrhQAGfn",
  "key6": "HzQ1LZFRVYgCmeFg54ZVQoMBD1XdzxCKBTKh84xXAvXCQUViZBcVMNHY7vpmS7Nj33qpzS9rvCHgkyGzPN94oq7",
  "key7": "4jMVkTLTy8kf2QoWPb7fzNZd6xL9zwuDL8VhnQyDjNoaQG28veTERFbGRUNUyaNY347kduz5Vxv1vPa5b3BDEiD3",
  "key8": "2hvqZzjSk8b6w5zkginrikJab9Y4pDuDvoFFpJaS8oQzMrKPB6PVopjDe1VBqmkPEjaaedJDW7wDpJDAa3KVhS2A",
  "key9": "4jitnnw43SfWftKXhJ2rsyQ8tKLtSjAimbGXW2NdCEC8Kk89xru15my7htpmNQaNh2Qqu4wPvaSF9U7Jsjz4JvkV",
  "key10": "2cxLSrnzwSj7GBMmuWgeNsAVLMVDhgJR8shcm3p6sFQPXergeZfCGx8XfrzWZ5YrpYefdTGpgiRk8WZUr5fdHJqr",
  "key11": "5GVBBjKT7Z5QEmcXFjZ6dF2d9kfiKZCVZawD7UMiHHmk6y3PmfeCckmuZDGDCKx5D8ZdTFX4FdRzDhVsPquNnGr6",
  "key12": "23hpqVPP9hdLCd8TKZbXLpcnQsgPq69VRU5wZSg5iLBvd6v91soJWpfPSfhzF8AWpcF6dhTqrS9hy7mrjYVCRRPx",
  "key13": "25ErExYkZETK9Xa6AXVxDUv7t8dMVQrZtoQ399HZf46kCeciVb2U8iwthPLi2NttnvzCAH1nawjPRTqDRdivdhE6",
  "key14": "FsP71a7T7B6WK74q7f2r5UFT3CQmxZNb47r7mByoURbsmwwxkyPYq7ud5Ztb8cCZA5c9CuS6wo1iacziwLUMZkN",
  "key15": "23yboo1qda2ZrZRzNoy5RcH3HxoCLrQAvt2kYk7dDxvd1yU1Phk226jFhiJ14hHzzuWzS6X5GgZtdWVJLKe98PCJ",
  "key16": "2dXWnQSXC241Ldp4YxLbBheP5UXTEEsghqQ6GhY8cZ9T27qd8qSqMgy6BPQ4XTZJJ7sJuSVAg7SrV6N1sxCreJPn",
  "key17": "KA1mimR2r8kpWpkijkwTxEMDJQJUEentFiTAUjtFM4e2yTdXM1FkosV2ZFpSonszp9q4KSNsPNgD9uYJqCebnNV",
  "key18": "5ktc1ZoX2qKCUPYvGR4WqMdZGMb5TMVNa9jhYAvtqCTKWCoLYjMJvrm7ASdDeARUxymcezp1fZ6zgjHjNssUcDiL",
  "key19": "E47stg4B9NGtog54VxEFtdSYy3HnwJsZrMKQBZzdM8G9Bb4nMf5Jenuyt8ibK5ksAmzdVc3dNDdHjwP6R8u3gYz",
  "key20": "5PHUGgxWCikHwYvTxuTAX6W9xsQwKBAtaV9U9HVCCRU4jg46E9TdTX4AMWXYoY1Suj23NoYaWE2dstX5dRN9LxM8",
  "key21": "5Rd9bM9HjtDzSX1yyrPiDXCXtUDf5R9rDieG4jMWtAXb9cPSKPKkJRvBe8P8awJ347ou3yqjL3nguBUUAf12sn3F",
  "key22": "UsDkvbyRz4c4yVcddc6q4ysgxxu1R8xR5Q6jWPdYZ7zsNNqVsh2a4dHkqTA7ZUnso4nuQHaSi53di8e7NgTHFGR",
  "key23": "2LZNSRac5MKSJdcYXqXWaPQs6z4QrgJL2Eqdmfk8mUGCyoy2LYUjYF11HnxHxycGyRDUdKTgcMtBb5KdBa2dVrUY",
  "key24": "28vQ3g9aTqDA9xpW8ZyWq98B8ZrBhhtp4QcYunc9JQSdf9wajaF48nRcJUDHUTMSRh8besNXD8fVSAmqCb2S6kvE",
  "key25": "3ZukfyLfB3pzHYSbW3JgKXKGvVewbcsD8ine9sds7fYNh47SpoCWMLnhU4CV13iPkiTdLfkTjQBnkzjZ4aCdkH4n",
  "key26": "4bMBc8TLNShV3SbQLV2LNAvYmqxCBAWJT3ZHkvKX42rGDZifTmS1Jy4tM4CRjfBiVfdyTjJ1oCWNCsjQdyczPMrA",
  "key27": "3PEY8LDsLL3f3QAo1nvzNDX9vxraxDZrfgpqNVURrWvVKbKu4eC2cg6yMnHHc63wiK6Kg6pWaDxuQqxyxXj3bxRo",
  "key28": "39VYE62aptMMTNQhaJiRAUPM6McyGqzHkM8fkFQFnXLuYTnRnn4Wosmxvcok8yhde7LzZtupNptRAELQHPJp8Kjh",
  "key29": "616R753xrfAFAjewXAcg6DejkUMN76CQGY6PdE2RmoWogMmrSnahYiiVSYfyB966GQBUiP8X6QmbVk6i8sECoHwM",
  "key30": "3XEto9odT9KcnDyUWka64S1MMBrBZnSpCUD3LddgCF6dMfyBqDwaVeUnCWgPPiH2VuT3ofe5hKJDLZUnGTiVsk4q",
  "key31": "2UNmsSS2ZEUiqgAQ92KFthYg7Mgn4REr6XYczTpiUTVYaEoUPPW9Wtm1XWEsLNsT8tYwRZqwUdh2wvdZLrrwevty",
  "key32": "5wMXwiCPFTbKboTuHRS1Ct8yYGC6zqVsDeSWMSSdfoSUzfDDbMoxQobXUd8KgHc5n5sBwHPwGtK9b38A14uNQ5jS",
  "key33": "nYiBKf9f1PXXJuFpY9xiCRyrZFhfwt42BBVu38CdC49ZdcPHqYcyg81JAQhHTbKKRLcs1BNR5zpAHwqjreFUe77",
  "key34": "4ZNhuxk2kgGKRH6rcvwF3qfc5nspTqUCJW1TXMH5HYUg4pQsf9EBvHd3GkDB7hzkHBi2GsTddckj6pUBpC3rK6uw",
  "key35": "5MmWkx3C9R1Ju4Qr6VgjgtXmckgHKKjRbsgYZHyTbYUzDPpKfgsxzMw3Cd5Z5frSN6a1fYrfv8HW5MeKkbKUpHAa",
  "key36": "WS4q4YacLBb4ruiUPMNzuqgYt5RRxAYM4htx73Y4d7esRNdcjV6HcjKbAekJ2fMtVWRyM55UFWe5ikgCDtmfgqU",
  "key37": "3YcWCPU79sWc3dLLxAM9GXBgzhggaFeJXr44YwxXFyBVpyKDi4PL7zcjXYRfeemYx8bNEwJcfWDvvf5Unt1DxAbH",
  "key38": "5UD9QH17bW9ZEMfwokWfiHVeNg5Bo9SP3ydGpNRuJLZvNfsxpxHH25v3rnyW6szKszKrgBXHcbAyhB6TckxMS5Di",
  "key39": "4N8SZPFUDsSS43v5CjjvsHHFveGeVGoYhBxN9HLVGTisQAYGwENgozdsZPrYL6JeSnfq3pFhGXEbGEZi1UYA2uRk"
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
