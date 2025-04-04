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
    "4xfTSPRMqWPoFgvfq7M2p4tuvY9c5DJ3wqfjVR1m273BqTJXxHMBLcDbMvsCrm3VZ8Yz5tbrM5QucxRPJ7N2cwVb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wanCtyBVvEBUZA3NRHjjyVeB3upJwUWSLKH1pjS7MAzn6QBJjNufuXEcJkbkyvHmajmR83ttdDAbRHYGRYVM8hs",
  "key1": "4kGGwXqDksbmQY561YBXLwtRjPiRL4eZTqZqzqP421Es9eLBfe33hJYJJkTvWxr8uR7xRk9bD5tf1jxPFbkak3EY",
  "key2": "3bhbrym5TtDfGoncmBxuKFpwNxeafWc9fx5qzvYJYAsiaDd2Ljed4Fzvtey86xmy7o2r4cvFYRVizeQHLnr4JhZi",
  "key3": "5t1paGt4z1F9Ej511fLKFvBZxk1ayQjq34YByt5susENGQr1SqRS5RnkCB6JBXvkMDKEjthKHBVcMwEmrSwDXqkN",
  "key4": "H7khtwsXfBWqXsAbZJDN6j6pTikbcBmhyJ8Bi4mB2ZLVSiQ7yhvMxBYB6qWg5syjE67Ak8SP7bwvrL5oeUqv3cx",
  "key5": "229JyWjAVW354uEW2GfZ3QEnCDybTcC62wfAF3uEBMmtANaVtLccymkVLnsGD7vaXMHMb1Nj4VEmfrqkspG8366R",
  "key6": "4ZT2sunCYdxinS2V85BMrV8cZ5QzrTLooTWjn1WenyFP5Ted8JZmQusGD7VvJqhQCnuR3qv6t7xKvTj3yL9PS8v8",
  "key7": "3LYgVmFfV5zC91f8xLtpNoWD9c1Cup7StMxRA8fkoyrRTQv16deut5wCZfkygfbKJVr4L185jvWNgHdVzCCLT1Z3",
  "key8": "3QHEmzEW23p62TzQ2whZsvaWwg1PttYmbFzwTizjywYSQtY4n1vB7XU9jr2v6VgMckGVVXpoBWkayXxepDdCyjro",
  "key9": "49wcMmUuM662faz75pcPJ8Mp9Fg8z4uTUGHq93qESxHg1yMCAmTk4ezUYhr39Lfda3UueQ2NmJ5pkirYQNYiscDe",
  "key10": "3bRryC7RveXAXnRrHgDR14s2BfdaQ6GRurcK2i9W6BtPdY9WuRYbRAYSkvzYmji8kDeUBNicWsgUouo9btQaJ4C5",
  "key11": "2ZKdKKfRGJoekiL4ZavM5yBzYqXQ14bQotAWnCauhvcMPpHbDafLyrHpZBt1rYGCpS4Q1FCjVUU5nivsCQEGbQAY",
  "key12": "5nayz3kUjm9RrhPTTiciGE2PVzfB9S7oTU1HVVw5t59CNcwt5CGZDivPFUUHLWMs1uKMxCaEftcwDFbC8ugpCZ3R",
  "key13": "5bB6HCK2GJGR47Hg5V3ekaNkGvyVoUCouovo2MHho8T67dTdzM7tLq9ZicFKTRGpv4qR24iVvAhWnnv51N9M2ty2",
  "key14": "2tCLNgaWMbdH8RrToadRjVjMwxG53R3ZeSMJ4kpeo6tN5aU9NPz2txWN1KqDvzbKhVC4vQpJBTAL4WExeEtE2Bka",
  "key15": "2f23YavZjU5RsAdrcBFnNPLBSuzXURF8aZ5QofgWyqamkktfaAQ2pQdgurjFfiDR7LshHhVUrQrpy4d2L1RbFD7Y",
  "key16": "3UaYkqTArkYFGmUkXbDASHDdDLQsv92tB9zwGcbw9FLmGtqcuKHxcptdbF6fUfSXYx5xHxwys2n5s18QySnk5w5U",
  "key17": "s98buE4KG7F8qPGBk825Df7aab9KacLNZoJtso2tcpQgjKohtNYZYMq9cYPxbHHTSKEAyJaJrcgfNGG6LoqzK1S",
  "key18": "3VouMLh7tCc7x82gSNUNCkizHmqfgSWXyS6mk8JQ2oFWj5RixdsLGMpaBA4Gx7HTaDM35s2TheRkyk1Rko66HZZN",
  "key19": "41fYwLDxgh9prGKcjaas8YbMNeGxiVaFDDk9VizZUW6eWnA4pMEXEnvg4zwGbBgWqCqtuAC9J6HSn3Sa3jCZR7QP",
  "key20": "2LVR2jX8tBbMDfd7ESvBbXpoJjppQmUbbpWzPyVFWVhu5hfKj7rMSPbdVEpQWtT6QGKWpbQAhKvniJNucPGhQQt2",
  "key21": "2wmF6LRTNLPBwUhRq5VAPVLmGQ3M3vYAhdhMgJ4WBufTSc4NzdakqCpCrKcZBzuzs9oKQYvWLa2XYHmRTGnhD1Au",
  "key22": "3fRT6MMML2ZXLwe4yGqx6CFTxHdTTjJ3bx9oJN5zC1BtcQF6dKxL8Peav1yp79fzbYAXrYK8AmAoNMnZRaADwtD3",
  "key23": "3N4qq2R7gyitiphqEeVkPa7wf5Hz4kSRqftSJYeUi4n2YNPegzF4keCnUnDj9aLMBXSSZQeRkykFMNYcVdVawFuu",
  "key24": "3DUsKgcbcwJiqUxxCHDQRjWbRwT2QS1WcoJMMUAjcSWAbSEHTw42LAWP3rfn3pPZHrCMdarpgoarSgfeCHJvmoYi"
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
