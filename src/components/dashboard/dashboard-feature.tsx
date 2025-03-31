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
    "2eKBBvnku5rhT6Vrx6TmUowJBpZpRbnDEQyJMbjVFr4HKFpF2oDhvzZz1GsamWfwmR6kBpm6LzGCQb3ucW6MsQzA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cFaH2Kic7rrESYhwGsnGwm2rhVeDyFFQtyDsEHBF3FLG9dztrFPb4BTi2VuzTK4FS2bUF6KrbPdAbYyMjK715e3",
  "key1": "5h5EesJFHN79H3N1emXjLativdUE2xgD8Sg7WbbPkdmYh4hbZhYrrsiCeo7JaSvXmSsLhUJAyXjxQrxGcDdMpg5u",
  "key2": "4goaSppZG3auBeYphw4dS9D7BAE7BGLPQurMNtVzxpDTXBUK84fyxzJaAQWo6BfcaFuMrotd88Hp5roay1PA2pUf",
  "key3": "5vbjjQQPxxWBdN4b8j19QEU22ap3GSJvrAstvyZTWai33D6aAEcYyGbx4CKNVwzF2MppY56tckphrwwBeHmhPHw3",
  "key4": "2nnw6MJzFUUmhMYzJTtnaMnXeL8AXzzmjEbuxYJ6QZk6iSwJtTzAW7bqUGL36BCKb95gxuEYAxaWfLJ3anHH5733",
  "key5": "UtXhNKbx7wAJsm9DadyGFRMBayGRREpgBaYXNiMoxz9kVRTLYYcPL7GmUgNcQVhQQFzqXKuYiJUzs5VFGc7sScP",
  "key6": "uhDu5YDPvG6JNVdHyeDSQbpgu71Vt5WDL6Nz3LDa5XqR1YaUpQvavyvjiGmFEayaDj2FjT3irqHUyGX4koJPWF2",
  "key7": "3XJReqSSUFAa9t7jHQWiH57Ti5wyEYUEHeXsdaGhWZBS3CQW6wzrfuEkGQzYXfwHpzUbvr2N6mp8LPNJtieKyLb1",
  "key8": "3To8LVTSdPvY6WkWrmgvwHUhGrMcGoQb3vmwkBuvsUveGtLpsjiWPdUmL6rx8Ws1CZKvxb2WjZD7basDQf1nqjRq",
  "key9": "5STGd1YaWEFrFNMea26jMj1oHtmzwEcwjqLsUUNZW9dW226t3HuMcQgjo2n3o3HuDJzRAkh6Mev3hWYLw3d8ipaz",
  "key10": "27rpWPBgJvZaTVweuMnbGsQCbXZYihjojEFqaexi6LoMevef7rno5Y3nZHC6ZhLUT2t1d3WRWJizi8rEKynAE4CM",
  "key11": "rTZHANtnS4TCCBDU9ct3Yo3CKzC2yXzA5f4fyyB3zJd7druMQVYNwHa3X4GDCrpYkBgk9XruFJ2uKr3EoJ6T7ty",
  "key12": "518VnsdpQ9GJAgYztsgdPWa9LX52Y2FG5wRawi8A8wft9nVwDqqEB7SoMkPs5rxG9f2Zz4fEM8urb6GNfEciEkio",
  "key13": "QXVPRJzojejKiCy7JYX9P99dDr2zJvqmzQdK8YVxWRsD58hJCXeNiNzvCz8DCPEBbHmXMRCbGg1DxrMUQXXDmgm",
  "key14": "2amNpGgoTyMYeGEcEiZhmQfUVUHeGxK8eEnvqvh9tYxxynBK9wRCXsd6YHzrHe523RtGmWLCNQnTB8R778Djv5e3",
  "key15": "4unRQBrNGaZCgpntbD5pvF5nvcsh6hjBV1fMAQrs1rrPsLyaAFnh9M4CZXSMdzjg4vvoeAFXSEHc2QxAos1zPZiN",
  "key16": "5mEkU6eLvXG4iSbj8hBnp2H1ZwZLYY5TE6k5aJyKuAn8Z6BqxL7Sy2dygMJsa6V11i9ZgaLLZnL5ZW5boCuNKRo6",
  "key17": "3A6H9q3vFWvxmnyNQAJ45h11t31B7bMu7DRMA76ef3mxvJhvUdJECGuBq1HcMbZg8uExQaQ76dmq1P7TAwGm8SEw",
  "key18": "2HedRALwQN93PrEJNWSQ19ATV8BjA6QJJrNAZQP4fv1jSQTQQGS25qM2Dug5QTGPnbCgeWz4SR5P5UtHFwM7onSx",
  "key19": "2Wa2t8LWZ6VcUUt5k6pfDNiPdY7xKxMsx4srZDgwJs6ViB36ZCfsbmAmxGaMyEPUvfafinCBbCWKbUntHDwopc5V",
  "key20": "2yfvEoh67sVSABAeRaBWiZHjM4Nt1CoGsGG7okLKcQhjeCbazVqa5zo8X1JokW3nA8G6tTx3hE2U1j7ceGr2sxRj",
  "key21": "28KVD6bv7RSiUydAcgDgYm8gfvhP8wu3DxE4pfkWNNDZ37B4vTqSZycPUrhg186S7M3m4WjYEyL9jY2XTBkfNRRW",
  "key22": "329PsEroBntrZNvNpBtbZvKCq64qE949omM2972eV9RFhQ8Ssmapy5nT6AAbMeQBvqby2hjai9ds2nAxotBDhtz8",
  "key23": "3N1UAAgFsWMMz7vszdzCdy8WQGkbxcZP6dLaXF89gvrR9JVphosGfMdxD4C3a7UpsXvf5rYNAujt4wMeXrm7EHWm",
  "key24": "4ocesAQrjoe4E5rNQ7QCtmMtEL6oQgTcrgf2Gn6FL9Z9F9NzouMitqH1kCgnTH9SfUbN9Bu8m1dQ21Xf1FkFo964",
  "key25": "Dvr5L9hS8yvbyUKQ1TWtZKfs45pTb6rkAWBCkidpxuksUy6kaDmcLpgxxrsgrgu21zLhWnrfJ4sGoYZprz1C9Hy",
  "key26": "5wouQ792D2AsTVDFZyw7bUGp5LQciSzrmnPz62yX5NkvhqsotPbxDKbR6Ayyj9n7yWhvB7PuezJ7CB8GeJ8LjvxU",
  "key27": "3nc5PuZJb4oaxdHqq2VqZSQVHfLAR3H7URuV2Z3V4t1tis4AzPSVaGzV12cqDgsoW2WnYCnnBreVaXDgeycP24Gq",
  "key28": "4FmakA8yiaJjp2HfZsyQw5cYzGsodFgPKqEJ4PfcYUUy3E8x19mhAifyNd38SpqfDA9qjykNshV2ocoLe6Nt7nm",
  "key29": "2JEdULkULuzSZVMEo7UmuqGZZDJ544j7ifJW84UZ8E9cH28k7ifUXen6gVYcPNamWmBoB41rfci8giyGsH1maV5b",
  "key30": "3fsdFLrA1hCM4baFcaA8buARRvEUiEKp3ZwezRvu94JTZdQnCQ4rudgbiexRpssNzPjy9FUcjHVnbWTuBVSYza7t",
  "key31": "xdtS3ZLz8pQG79zwyW9qR116ysz4bPWCyeFof8GpxnsQF5FZqZRKBus2feAsPiNvecjFdMrmrRosxe51KQ63RGh",
  "key32": "4Fe3UxKLMuVXiVnLJMzFpH3CWBqy14kdfMqduefAikXHYb1hBPXYKVvYbGVQVMwF2aon5FfAvceq1SMnYjQAvg83",
  "key33": "2UwC8mvg2Fr123r7pmLRussv1QFqWP2FVSgsYb67eynmQjYDjFHJFy4bBMm4LbznVkJov5t3zSxLonhqGMmHiKiD",
  "key34": "3Fy2dvYsdfPrKsHEuKrfay19vwWXpoJH5jSzBwHKH8qqyBFjh8DdJZ6geJg5mrMhmJGzVD6g31e8ofSPaR3MRxov",
  "key35": "45NojFQtS8zLjnZbqH8jkSUbgFMUhgX77u7XeSx94hj8ZNMy5sbE8LfKQZFgXbxUAQnpPw5dbbF33YT6MHZto5h",
  "key36": "4mqgH6vxuNWdcbxorSqcGJ5GJDWvnmEbuiiyfemsBZxMT8CvpaGPy6cakxgxDuKSdUbijS3aJAFVabx8f4w7gB3Y",
  "key37": "4xv2MES4PMBbTVGJfqQ8nxNwUZ6itvZnFjtCnMvKitmM17EZys9aBAqihyNHPGwaEjMvq29gDKHgvynR7FusBD32",
  "key38": "WgKFVhSYucBZVSWGQybhH2Dgay4cH2f7KWZ5e6urDheQdXhpgTnXmbx5d1vwm663SVr4p65b3ScyQUpr564HFKB",
  "key39": "5CwD6RzVpDBJbGZxuBX6Yt1UXRR2SF9to4JqKmezuHoQ6bKmVroFybKLWKJiVqN8R3wyr9yayBg7Miby5stNPjnW"
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
