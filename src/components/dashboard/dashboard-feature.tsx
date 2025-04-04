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
    "VbDDPUEFtUhQy2BWT7NfpDVr7gNRqauRqB18P4Gv3YZLPC26UfTVchTgwZKwiKz6K1iYK3eyzd7EapAcmAqc66n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jV3YnVveT91s2g2x3tcvvGAoWZTe4c8i7RDenkTD1mbvJjaLraoN8Drz6ofNWPTQuwkVFtZBhZxhfrzJ1XPDPGY",
  "key1": "5pgqHu9uUZuSfQ8zMJNH1YRVWPaZ2KaMBTKX5ZYqourzucnE6HonqubsxYbPV7TP3TTQ2eAX57fVSsAASE6DRD5G",
  "key2": "4NQzHMDRonJKeupG2qRF1A7Q54hNkYbdmGAZ7rxSuJ3PKBwgkNcxi1jETGrQGAAH7Bua4vgPC7r4THyke5rruW14",
  "key3": "3AyLsd2tSiCVLDDzodCksGPt1tPETWcYqzLP5ctjkX45DcQioavnd6aCMNvs4brpRC6knXWDMEknRNQYKNfDCRsB",
  "key4": "2mz1QBQiNd3x8AGbzLBMd7DpaqrJBmzmuPbQo65zUSgSFsBfN6yK5wg2yoiZhrJ9JcM2bmS8YSMas1CcAm8rGLtP",
  "key5": "TjK6SYbaepxwKQFLtQs6qYFSHvvZ4TLbU1QoXmyMswhgCVE7BUbzQSxSkv34dYPQcKyztPiVtinmnKxTTAifcaS",
  "key6": "2yjfZWDwcDRWNXrputZvCuiZvZH1jsBY6mp4conJNsHCt2w2SQya6tQFgvVJeoRGZxV6J6PtHzLi9oeirGEc3gzH",
  "key7": "5hwE4DZXtnCPN9qVN5ASgxbcmUXvhLYA1pDf7ZtrJmRYqP5PfL6jSoBkwDiKpMNh7jCYCftThcn78rREjaMn6oKD",
  "key8": "ujxxy2i4qGWvRN9eLAsbd7G46RNRDWoKuWW87DCNqfu2se9sgPXuQHq6q1cvD2DQ9yS5RXwYcRPjj9HZz9rmjG4",
  "key9": "4sCtigZNikeLMxVP4EcuxhitBY4n11NLxGYn8QckjX7ytq49u6HTmyXgDf1798zqeFUscvdEEP41axfzr6KfRxAQ",
  "key10": "vTX7NrTveHA2Y8T5KurP5iU37ioqw7qnr6TvKenj1XWz4mM93N7sSknVzRNk8TD7hnLjQ3Kjw8GUD2hMqe9ALHm",
  "key11": "5uCdU83G3uZ4AYSHrznGXr7Kx3GzQWMVjttDT2TchDBVFFgSEiYoG5tFDgqvYrYqsH6cTtBwL4PeSqeqRbvCXYzF",
  "key12": "3v4mEerQV3SemMjMV7D6QCZzuMGYNLsA8FxHiMsDqFMtmTp924NLnGcqhEqkn6B5EFw3hGZcDWqd1WakEqtqK1AB",
  "key13": "2amZQCRGAAmyUo6SrvJdkwx8t41dPZvqznsDW3UBSUt4fMMJcZgfLWSyyieRAd1NFr8bTKtV86HVfyCvtJkVe119",
  "key14": "JpLQMGg6YTg9qFRSVs5t2ZWrmNfBwh5wUJTTWummXsdZJifwgG7VJDb3ZJqmm6w4RvCcFqYAJLcX2HiWdbZAarg",
  "key15": "47TM3szMxPAFKFSRef4CHGCF4uT5WA2mSdobtQocDw3efcAHLgKH5v2qpT2GdYPEwjvV2W6w9zh8V4eveevLioji",
  "key16": "64CjZbGaGtqJnk8WedFoRkigqtqw3woBCi8YwDbEUJ67Xe3gy1tqaEEVYs2UMvXusx7DZcVahj7hqyWNNFKhPQyq",
  "key17": "D6zHr3ucE7G5ieSJY8ZknXUgCQWbguh6otaAw47DWUs4ufviZUkpbLvgp88EKn6wgoRE1wWeA4vvhQUSGhV1VRq",
  "key18": "4Bf1gUNmx8uN9dEzoBpf9bmoxPKvqVUxoJTYHyDusvndcXv2CZX5k2jV2ZrF1uVAY7HSMVqx1VaPqBzp1HHZ2VuF",
  "key19": "4GFknrwyKMKEaYUeT76h29ePnmKbMk1dK7Y6ZKd5gDJ2nj6zbwVQPBmraQMcV78C92MqNq8Z7A2dnxAprNYDumFX",
  "key20": "5WwCp3AwFyWqYZQhA8ADpXjRDuLjng5t7gfGxJxrJd3qFD5YxbLNQzkiR6VFcf8XgY7MSbrYxnrCfTEtr7vs98eQ",
  "key21": "4t3qovXsfx8oiK1MNp1XNtZpvr159qVkdBHP5gKezoejUhUtVbWTnVHsbEj4RijNd8soqfxRWERUuGXH1fHrH76x",
  "key22": "3pphy5EKwbZ8eEnP79Rxfg4ZVnuv9Z1YHbRpDpUbsT1nwQXVbdfvQGQMQ5sKRcRKSMtWVf569zJKnAC2g5DySpxJ",
  "key23": "KPtQeSX6BsKbcjJ3mfyaD3zqi2u3z4ULjhSEdCbCikwMZdkFXxjY84hbhhZYUESHnc9QpZczKy2MMnfP59ZkHPV",
  "key24": "4BEYtgpy2RLn3M9g9wdmDGMtmgVVPfJPHCm5cBQy7Wf6JJHgJmJgRKkpKtzJ3KN9PBnHXj757XhPyzKivx4JA8ft",
  "key25": "4vdm4bgbTtqBijgjtLo92XEtzRvBqGAmctbXm3pqKqJXmj1QNKUyaWCBxJaVrZy722KhrS1Xb7rsCeKVsF9odcWi",
  "key26": "2aqxwvUn6ZHH73kSsqBpA5h5BLYqxFWo7kpps7PuPQaDQEGxbTJhx9csgP5FyGewuYxScubzWAk5KTak9fwnQjLC",
  "key27": "dCsPYdpHU647GwqMjFVjj4jTx1gDeUwZfhkFVN8qBcr4pMAh78WVzWFA2LjzjUjYJSpVGBpGL6gTekUZnFmkbTL",
  "key28": "7mL3o5cAnrXhHX8HC3hWifivsWmVX2ZdWy5svyumvamdcCDPf5H3L5wnZ1RBXyRFwJ9Fm32tJeZ618Hj6msvNcZ",
  "key29": "pic1ku9Zx2p3qKcqRgpPN4wbWHf3ezgyjieagcxjKGRv2iH3tKMSv2QXSFN7caoFeYopQk7ezE59FBfRFRJqqoX",
  "key30": "3Ma1R2bh9FqZxCpc5k64YgSgCHoEJkP4pWQ9VuphzsS7i3QvEfuB7ixx9WoHN7tiGV1K6qS1goZttU1QVqD8r79p"
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
