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
    "t4nghYD6Pq2rBKVncRf27YYMZES3S3mPwy5QCPdwmSWGPfeb7xdqmPsaBvbKkfQgDQcfoXLQZYVtPjqDuDjBFf2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4z7DSYbHnevopb446BjwXh8hvqR51G9Cy9G54kq1KrUh9zpu9UzRtBciQLUqC3DSdhdyV9DidssgKEMA6KrZbrzg",
  "key1": "33FyEhnR5nycgHQtFJpovU65HgonbvZrdgpGgzqf1fWDfhSPx6Vk97YJUdEVCccgF5NZ13U1aW5b3eP8yz77JqxH",
  "key2": "27JiUyb3mv8j3xzuzVYGgWaYThYXAJqSYKQ7pWkh8XdaKUPQBtV2miJEbR3rzvUAa7FVwxCq3gvSeDfkoaos2r7L",
  "key3": "5B4CkxdX5tYWJZFiaBgZ1hhF87JnYprkj8mNY9pQTavXvpGvi4ABnoAerujXk9QyAVAWBHjuEtPksLhjm7EyktWs",
  "key4": "5DPrJYSWo3gWJDTFDeQ1rvsMf6BaJgJ7KxgnsddZqbyCidAQnrfYyUgpmqLvoFjdyUVjJJWJ55UCReuiVmY9hYDR",
  "key5": "4xoe5v1uCrSBMGSs3kco12yqsLr6ZsSk23JJ8C1GgrUFyzTFn1TubWAfdhcXJbnA473RaMEhjH4kWrF5VDFNmMfh",
  "key6": "5rpCWvWnxmwe5QFo3WicuZAKNZvTrXNm4LuQZUVffD1Hy2i2ifLzzVSAyfY8WSXgNyRc8hXWPaCYMrh4GvhyUnWh",
  "key7": "4DXzBGAKV1dENhSd9LpapaUi6jUdaNYpCKizdCWHMkHgVYW9F5pNTwxEjqkL57oFExXEe6BDcfLJbyRk3EhQpWWR",
  "key8": "3uMXNcW9eBNjV3rveVad55gUDSLZihdjpwNy1EFcGDY4rwNiJN83ZhXimscESxRQEZcesPmjshTieaHsiNAdsWvn",
  "key9": "3P2tCscJQjgDY3Ux32h1mqJ4VAWce9V1xqeN3MqQigP6ZYdAYrY7frUE43p1p6ySxUeGST9PbrZsxCqfbdXKGz3M",
  "key10": "3VfsDik8FUjxgn63tiK3JLzBPhTR1gmVXNBHkRvxYmuikgxQZP3VkMEK1W4YWNpURMsPHUuKpx4kgkmgqR7Gek8Q",
  "key11": "3gK6Ej3vVcKrN5yMZmEcddTTq1xQNpT48SmJJFs9Dr48ZNhuHeaDjeznrYyRpye67gPi1f2Mw9hDvLB3Hd6Drp7o",
  "key12": "3E2oBN3inMLGt91vqomBnxSfJHsSRSSa41Qb4dKBvxevJnZ8KGhHofNuTwovLypbmPSE4c6TFq2iVgaVzqeZuf4C",
  "key13": "3eRmACVibisQ1MHpuzzXjZUUrjVd8B1gHFcuBPxFzqDBqxGGdWExhLR1NsVwtwQwGPxEjaNo67SjLTEEmAc3Nc3E",
  "key14": "2YaHuSXEjvfLhb9d4auQYxGFZo3htLn9Lrcnj7FuVF7mhtYt27JesQkWCnKu5wmDhECWkasd9XnQddqSVapAqZ1w",
  "key15": "x5fuzd95KgJMr38ZLRFxn4VBSDAau2vnFuvgsbzV7zAHUVUM56CHQN2ZtxBLQnfCenm5esGBNNK4771HpjNdksq",
  "key16": "2AvUpDG1FYkiYGBy2trkUAAnkEmknf3BJ6qY2wuZ95oYgnGBW4rcN7KeYD7oSaSMfkBZZZHXf358n9hsz1BHaWEt",
  "key17": "35jANN3UxLZHmaY35fTF98M8JNAubB1bLmRRfib8Z5LZ5f5FKvPhus1Ye45ThDX2t4kjHox35whhLPr79MwLrNc2",
  "key18": "5KwTax8MjMDR5XcfbmJ6XnXQJRNTCHSbsb7Yt1YXkhQj7xsRPK7BsDnYxaob6epYqttrCNNe8opttfN6vksgG6Zy",
  "key19": "2gK9LgVf4afMNQDsQutowRrdcnadYwvPVjnSXqmq1PJnWc1K9afKg1GUe3Uu5oqHXg6Txhg5LbCW4j4xqnmJfi4t",
  "key20": "3J67wrMXC7UfYq1kR5WvKbzixAm7Basd8TXruoVMrFnAWwvG11PJDEDxb89rjHx5idxNeb65V6bA1LKDiKSe5uL",
  "key21": "364Sn6Ed1bGE5vc3S8CKjWyHbkTvd8MbpL8NzZ9eAid2hDHk7vtsThKKRtzaqgCL8shq3H9Mx5nuUrjm6SsLJAfg",
  "key22": "4RpBvR9APiv8ZnYoPFxFMWT56XdzpUcSXpVFWotaJqPwJLYE8pgrTsnB2jV1y19dEL6MXY6J5jvH3LtP6rYaPDMe",
  "key23": "64wzSoWVUArhjaQKA5tj7rA8eh9kH6qxEqbQa1tsVx2D3hRTu8N9cgzTFXz8eYhuKYuikiBDbyMRbuEhZAPFYmS4",
  "key24": "2FyCVRUgbit8kNTzKh81EuZxQUD95tHo7rrqgGhX5BwHp5hf9vkhuUJdEbGfjH6tZ8J3J4BKByagsAHxg1CVD2pn",
  "key25": "2VGYfJDyozXJfqZ9jgQcQFJqRj8HiegjnmKGnezAK8wJnJYuA3jPnTvMyhWYxqpheXRLTYFiMLUPMGVi28Fs1XSr"
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
