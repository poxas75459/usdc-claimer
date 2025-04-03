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
    "4xg4keMgPMz3kh5o1CQyCgpdop2D1MuxAsRoCodGsFfrzicJyKqzHwpfMu92AiUWTkczVMwvND6e9vgtayRyzSxh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2g71rbVcNWkLpBUjoAvYa4Sw1JhbbahejNb3FY9R8optY9Yp7XZn8BVJn5Ea7GUmkvNMsKQ23xKDBqKkEjGcPztE",
  "key1": "5Ks7JGeaesoLTKt4yneAMEDMYQw3qYtkhijy9dpi1TQZDdYL9d5Z27wcKeSekK3nFgCsKnyD1HxiCuB4iKDfVBK8",
  "key2": "5xjMENRukQeeNR8cC7pDrQAf91bWjuNyNuuTUPtz389EH1ceLNHb8i5Ep5Lss1QwcWfBKQEmbS6pZjWXRJoNJU23",
  "key3": "5Db2ZdL62BQaXYrtxrJWtjjEJFLLZxFyCKoRRPGFFcABk3qhtaQZ62fWDUG7U8RDBBaXH7my8AJxS8VWx8hBaHBG",
  "key4": "3SDByWexZJcdnv5s3UTRi4KvUM6PYGGLi7Su8aWh1EcanQmsH2c3zMHNL7K3MwKcxoMeHfk3z7mbSn5vooArKoS9",
  "key5": "t5S31ntn8Szvox1ANvwpjF4wuY5dCsNrCdLKztUqqhBNm1RAaKkEd6k7P7e1GEMD8sjNnEc2XkoWUkYZeRbgatZ",
  "key6": "2YUesKrH1GXzyanpp6CvDvujt1cP6UaUZnutBUR7RTes2SeatqyiSuEU48aGoGYPoqfd67DR9ySfJVkYJGjYdtB8",
  "key7": "2vvgPZhMqBDg7r4CXzUnH79Tanv3e56Sn8sYgV7uqYqtqBQibQexsRy2BabHyQVgTM3nMYeGStrE1nWBXDuNNJNw",
  "key8": "RFfbYF5TGcqKyAgWhpN4qmFhSccTNN5f1GVSLpiW8u3qHyTp7PJ9Q3BdjouyysjRKUgfPvfdgC6Kj32Z93PhHY4",
  "key9": "3LG5cSVceJ37T8WAyVhHRnxa9Uih9ANpPQg7B5tpX4HaSTX3zjX498MfWRLKfY2vYHFhsmXhUN9WbBwLDi12CCUN",
  "key10": "4MUvDZJC3ZN1p23NFJmrKqFywViD7XYovZHpz1W7JZcrzvXk3FNHGLQTVh5dPT8LTF2TUo29eKqyRC6x1oskKNn9",
  "key11": "2QNWEuLAyg99aJZEWmYaeXa3SLRSQhKe5ri9wLpXU4Hx7eLDMRVEWjqPPouEVttCGLs7PA6WUzqDT7HxekqUMzw6",
  "key12": "3tw4HkvwSZupB3cDTjqBVLiSiwiSJ7R1YasWyMUDGxuY4KVkVqC3LeGTM1YLGpM6A4B7MPysBoUoTz9cmxSCrZUX",
  "key13": "5BfTHmZDgZZQp48hzWnZRzDgRdnMU1M1XVnexDFzMEg8CLb6Zo93UC6tyNQiBPuwBmZXipxCC3CzBLbVcvSSx3Yt",
  "key14": "U3wuSVdB3kZTcHKStc3xkFYg6FRvqGcYMjJfh9gF8eD9dSePcCYvNduKB6S7JGXMH48UsUukQZJ5z78TYgChGKs",
  "key15": "f9HdicndQyba2irEKSzJVHGhJQmD4BpiHCck9JXsjAHyFBkrsUcQjFLMj2rBVWCPqi8DPtdMT537VGTp4UxnVuX",
  "key16": "y4wxodqQtGzBsv8msW1FXs4jcyGrwG81kJXTqhqRnRSK9HqedMxS6127B6osjom3CnT8i4UerW8AKUKRRKCoEKY",
  "key17": "5VtnapaYdrGVe6NAyvVi7QGYveRRzyQYyUFmHGePgw1uGgmc1nxvc2FYtU9Yyz8YjKQG9i9u4ctfWJm7fUaczBzw",
  "key18": "4TqxjYCFGnEty5zJVAavcVbRCQJ45mmfjChgCoesZ8s6FxPQveTLTrqW1tRL6ebk9N5oHasShzoeCaQBQAX5SESU",
  "key19": "4Vr3oY3Crst7B9XP4uJqxVrZbqxHBWuDXWqwCgXevpch7CQz824idFN6FpnpPgSPiuD3zKD5wLBMFfV1B3doMSNa",
  "key20": "3jbweyv7sML8ucUqBrKejXinD6MC7YfTNxxaergPcQQmTu2pppvcai1oayYXEMJVzQBwqmc8wS7qGncyLMdV1Mim",
  "key21": "3qR5KZRtt4hCubHxozZZd3eJ9NWdHkM2MTU1gbZqgUeUeHX26LTwSorbec9hQ3NTTDLNPW9rT2VaerRtomLvim3j",
  "key22": "5xiWdgY6qnWcYPUJRnRRVSW1JpdmsAcfwxRwuKsE3kS3BUbqr5jvvekiRSV2pmG2hAxvSGn4HHBz5QkkJxdHYgWx",
  "key23": "556GdrP6LVwXK6FExdfQdSKnW6qf25kBVHtjupHAwbdAFxaPcaLSfKzRphqnwV8qXjyDXhx4xqgDkCmiMBWoVKGF",
  "key24": "MJxtStfFo64m2EmvK8yzTwHwfWfwVoHX4YXqYDqh1LophbjHZpGwgV8WFHCJ1D22nKEN9dYLrZNjBSxwfxFZUjX",
  "key25": "3AYJ3NqELVq3h1qSMnfaUSj3A2v1vCPeCnKhMfM3JfBYd9TNFoS9AiWHFz9T6rmPuVHnLuUJePePLBiTwogreyFD",
  "key26": "5LaaQhjV33B9HsJu71ArNssLZnX6w5PznBCp3FxSGT4H9uCo2RyQcc2j7My9RcdowJJJzu3duiVvKQr27YJ5ViN",
  "key27": "4hvsWxyfVyGYg3zCS2ua1qLVVQ1fEwJF5YuQC6pYagetSNdwZREaouQzpPtpxyRU8ZUBNHm61ad5jg4Vo7RD43w2",
  "key28": "5LAdX263uhxjeELycrKsyEm9tSKrw7unqwAzZTdrLjYGHnEJw8r3jUVryVrZVCZdtwTbiGA3UodiyiH9X2FTtn76",
  "key29": "5nHcLPPW8jhCgQVG7PbMykrnBrP3nqwAY1P7YXUbkB55jg4SfuAfXU15mFRjVJmUGwUoBA1wyQmgD4DX19V9Zfgp",
  "key30": "2XsmFtdtH7jngf1uj42AjLEKhVobYRCV7QpSEApKEg4vvfJabcDoboi4vkjuWMm4fzoVNHzmJKywsoW2Mp2MMjUQ",
  "key31": "4nLC78aodJEXaVXE3GWh9eoxiAKzWX9poiVYjCTN2jaeadn4QLnQZ28aX3ZpcYzk1b1UvHKDj3xW6rPPfWXGa1Md",
  "key32": "5v4SdBN2aov858SGwP5bjK415qrbXF6c2hM5Aa9MvKnoHmJgzMnfFDo3ykDv3ujHGmNUssAw3wXWqpTez2RSivVU",
  "key33": "odMLPW9ErGogw7MdTo9PLXLZfeY1RhAff59QYc81RMqxixYTMegNYFMXQDXF6UpSWi4puLuucG4HRfchLfKQqiD",
  "key34": "2y3anytTpFQUEZLkUeFeq8coYq62NYUm2xDpTJJ9gJJGcBpuBKDweM7nAqDy45FFbc9wf4rDF1nYyGcYzqGC2viD",
  "key35": "4TAFRfSLZHeg9duHgfvG8vL1mJQ9BjEXiNsya4JHwvKP9zVY4yHChNFxYiiZqsuU4HRoiArbVweG6r4jt2YEXZ2T",
  "key36": "3Fm7BqJvAZrtTPzAmwhcz2t3mzSK2RyurphTpLKa8vsyXsmN5up416EGd5BLs8YiCER1bjV7MJoNnxNyz8i2LQz8",
  "key37": "knLaSBow4JwnfQ9nWdM5Twdb3dFt8EHDdraWrCZKqsGs2vUuuRUodSKcfwbhLWE49vh5wjKUH8XPPwguDDGknbB",
  "key38": "7qC8uAYS3SWyFtH1o3C6SswfAxcr7ksJ3dhnz1E8b1sFVu6qutBfQ3xqnQVdFTdkrJNQkMyPTgFpABcEAyzwwE9",
  "key39": "JkxgKFcHQCVRoks3iXTY3PQ6YT5T5y47DM5mkHKEg9UdoAx9bGuvSRautapWQ1oCokjJ7gk3E1VX6eG95pCwWxy",
  "key40": "5s28dg5vMHVnzE4fcUbe7EUSBpLsVNrKsLLkWfgtov8XvFPQ8zLN9BwKQvE3MAcmpWGCNVCUUWLZ635TPCWu18NT",
  "key41": "3uFzPFy7iSozLbV99jhwik7Us4LvJASgdCtSVXVKWiQkLctWAwXGcmaG9kTQG3ebQvSWJBTMR4LMBPMGPcjuDZdP"
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
