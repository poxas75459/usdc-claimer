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
    "3aqTpE6u9Kegvu5fbBk1tF7nabgzL3MMz6nmvrTLuWeuKMAJb6b6gQ4rQXsjGwnmp5Q9k4FRMJGrYPdyeMAf74ei"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MqaTvJd922PXG5LV2XyJn6h3bW521RpKZ2utYKH3Led16GWkNF9FLr1PHB4vwRfupBTePhLYg2RVPsvLMzaLfXM",
  "key1": "63PGc8hnc1Kfbwbx8QDTDoCpWRPSP3HNDrjGPcSf24D11ovi9MkPynFdqzyZYzRLkNdhHcTzG3edHef2YddbWTf6",
  "key2": "56EocXe2rUeGqGchwwFpPPsz6dqWdFgQqEKqnEZxgkUTw5nG5omAPxDRWQBsRzvUs72h6mHQ8vVJ283NQkzM6k6C",
  "key3": "4QDkVH81XMZcqca4aB2a35XYeUUtGb6Re7JTWsipd36ERoBqRydrARQWww58rwMNNNnT8qYAQSXB7e6iC6CYT72Q",
  "key4": "28v2XZZPpFNuXhd5MQJEBJBUA4MGPCGpLWoj7B4KoyDTVgsEe1XrUnLSH5wJxejKsHN3kVLNfyWGcK4nTF1LxY9n",
  "key5": "3xPAEn9sMLXuA5SDf8kvEvLRUhdX9qtrNsi3RbBmbMcFE3uuAqieqpUzLF5996Ndsf7Tf7oCP5p3bgNvuC8A5R93",
  "key6": "77c9YCgeAJNMD3MLfiQ8JoHrAiCpApQ6fJEibm2wvRsub9knPcUJhJtZYeRukNHZBb2frVugGXatsXeoAJP8nex",
  "key7": "5JgZXddDW1jQJCqdwigj4RM8r63VRnxE7PqfRuyqs8LMAVo64wNDz6pRqetDtJq4G9gidUtr4J6b8UW1xCdVxRE9",
  "key8": "51A2oFLo8UR2FWh1NSj8PeLnTsUaF6wwfRKVba7T3P2EXv9VzW47U776bexJfu5ufMXcrHrE9KboMLkP9Pj68Q7y",
  "key9": "4jtmkFytVdZiMw1jN3XEWEmcDrQqwELF1rEE2FLGzRtRAWfcTMpkdXiHbhL6kTMDr2m9QBs9fm56QJgGjLEaJjGX",
  "key10": "2X2Q78d2UniV9pyQ6dHfNbEF42ehiGVnBrrqBRk1VC5urzodELANC5G8GwnV5nL6BM8hDU5Rnn9hmngkMBrfa5z3",
  "key11": "3Gp61qGgAvDL4rJuD2rF7eM7s7oaR7WbR8cXJkstB2sZZTkHk1cYSGYatVzgnLzWTtBjj1njUmbERehMnBCWn4tQ",
  "key12": "5j9FsMPCkeDauZcghAUk23MRQhSzNKzEn15jLHgfuDSidWZ13ka5UurGRpKgQM42WgStng5FvZwyoae9uubn4Amt",
  "key13": "RAkMB5vnv3EkvcLwUBbySL9Nzp5rmNHzkMMBK1fTrzSVJoY44SwGn8UxW3C9YZKEjwNB8LjfhHwdoHPJZQcjfzD",
  "key14": "2J6mp7FELN6CH2mey6idcxb9cQUEaCbwXiERuPQ3sL9d8d3NjmS74Biw8hSoxNsrZZcWdFiqL4PcspQstmEWTVSi",
  "key15": "3kgy6J9deD6Fyr78e6UDZxe4xn8tudtVhjz6ZtLuwjzkNTWiXPyZ93dyyPxjuHPArm6Eag6kjMYvqb1kJ91Wbqm7",
  "key16": "4TttDXRzffvtzi5aXAMV87wqn8iMzGVRERRZ91hZp2JVUnTLmpCEsYApisZodsN5vH9221XabNZa8oaL6ewfUTWQ",
  "key17": "4vGkXH2atTinif1DrJPeGQftLofpKboj65XbmzNMxPwE426ndHLtbmmV6NZTUy8NUaatVzmbaoHqSGbty878EaW",
  "key18": "5te94afgxcEGyyqSUVKivDaX4ypYLdwSpaGyzabqBj2yVWX4EqPCBTFKGwDxwhpj7EVn4uryKVQtmvaRpx43e9nv",
  "key19": "62cEfyVTER4QPy9u2W6t4gef1xoTxVbYg2iSsMAJawkem2BeWdxDXS6fS1iRMivkud6peqZ9HuMBHviw4QWcNYee",
  "key20": "2zt6ZHxGZM3cWvg2MHi5bU8u5d5vpwaptz3w3KWQUGK6eSPhR6uVj95SQVkUttfu83ghCrFziTXaZw9Yq6QUqq95",
  "key21": "3LGagkni235F3NtcJpwF8vHMkLE2D6Fvv75JuubAybARjQUgMQ7SkAVVZKq6PLFnQWxLVv4q3GKEpbdKvkafifP7",
  "key22": "4U4HDxokExyJPcrm37Y1WJKHBHmj3DoVjT365468APUarWntCJx4eZnDicpd9W5tYLN1KWkfbZVAkZd6htyBQ9QE",
  "key23": "3inXn1DWSeyayaD6LeketC8Pia4rSXvtYFsqqxGSqAGqU6Fkw7qiK9VwSW8RBTizaAiHBtkj985sKhYccanyF2a",
  "key24": "2coUeNRerWAzKHJoEjHakLu8nK1u78xT3RjseYaSrVCG8KTXb4KTiQhvi92xLHmwcHRrwveZmL9mXo3x5GrGoeUh",
  "key25": "5szoZJ1fph51db3psE3rDU3gs1hJ9ztLzMsM3E75vFPF7MqfxBzvaMNe722bQciFnoxbh5fTye94dHZPBMHAAwF4",
  "key26": "29bEnFPB3rRMCkfaZ5X4CEKHw79sMD4psM95fTmncRhm3vpAonQ1JGZ72na9PFV8EctGgafcrKpBwhvBrzfNgkFp",
  "key27": "p6AFtKtbGFysUWnGnxF1pAZKABKTaX7kjH8p5JJAGAwoucG7k7iscfs8mFpC3ybGY43b1p4V7Rp9VfXGLLqpQ4F",
  "key28": "5HwzF96avXrUTDopsjz1tVQgF9hg18WiGR1mqB6ypTzRBDnZ6VNeGhK6JgSL6x2Ceo9dSo35GxWYHdmAkt1bMWC1",
  "key29": "4tHSk3AwZU5XXBUXQHBj1AhzUZvB2adL2FZsTZocvfXHzryUo2iXqTx4ckN5h9hhwPUCtT2XGhSnLEeXnHp5AGvV",
  "key30": "3XfJr6W83d3mrq1LJdRqsNB5YrHcYSkLjaFFPBZhy2Nr1B4fPBmj955mdpASGuMuodzoyeg7wVtpCggvbQJ4uB3U",
  "key31": "4vGRYdh27f8TrpLXEjNZnR5GVXd3wBn7ypiadPAzADSBL3uEzy6hpd1SegTQkwueSW13h1KbqcLsd4jDUhFfGKCg",
  "key32": "4nuxEdtPFvvRghjqe2FDm4WkRddjc7tH8PrrGwJMhWTPuM3ZF81XTqWV6Lif1kaw11vHsY5RnbcMLMShB3iovQWT",
  "key33": "3fWphk4tJfWP1dg9Bnm3vhKahxncrZDMhLkDqtKTVZDHcqZqqfpXBdS6rRjc2KYroSdve28KwSsFFeKAm6f89WD3",
  "key34": "Snxef6MuqkkWyEdc5wbXkxJioSExv27cuQwKMChrkJz4cdJqUo3Nan7bvoL19ahPhFFJm3W6kqztsEpWyxnt5ro",
  "key35": "3Wex1bJXFVTdZ53aw2JenarqztCyDJXnLKh4kKvaBgEncpwjqqbwAafjQrbf2hYfVpjhuCqtEAoswyCMVZmJNx4J",
  "key36": "4dgqFfVRjwHhnjNvVQkKYcoWm3RyB6zhZcKfevmToLYNm2MwgoP7zBwNasjPZYseqLs7P7gkeSuA5yBFDC1VKtrR",
  "key37": "e9xSAqHEGkWRQ3DBw69LrXZYBARnuxAddyZnYMimuqsGPHNAPx3gTdjyEwRQaeMnCSBSj8QZoYPZRBzKYAm3SBq",
  "key38": "HomKdsjXQ9qNiVhALxRLPm5BKLBFwj7NHbWbkMknWTxWSMBQbSskvbs7KjPVgrnGbQb6EYadPM6syKG69MkdV31",
  "key39": "5wqhFnUQZd4XS1bGT6EVHvdYwaFoY2trpHghXgqkvyQxV2PuBYG87VngDyf5iFzunrFiz4H6uzq6VLP69d7uQLDc",
  "key40": "hJoUuqj6DSEeY2UAT1YJjYqT27PjRRh3v2sDXJVt9t7pySFZfN3QZ1Wi65FyeQwGupFeCJhzq5Ei6M8Qabdpe6Z"
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
