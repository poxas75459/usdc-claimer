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
    "2bdyC7YdFX4nPPtFRafP9jfStqomjyWPx2Y5m96uP4BfHE1eiUTgwhRhAnwAa774yXhXaQiayUtJK98gETHJeG5X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kyHLMVUD53NGgwVXodZ3ekZ3bCk6CqmDqFatepw2eCxGeSytnGZ8BT9KbGaTxYovcs1t83ZWPc5HV97B4VXt8Bb",
  "key1": "4nHPU735ygJ29CA56BECSig8YW6AJ21WNxT1FVXvaHzPW8Js4TMA5L6F9ECDaZ89vfyn2u9PD9dr9VuAW6DUVLBP",
  "key2": "2M5zKyFjYQqzFvxJnKWUDBgMZp9CW2rg2ZyG4HH67xrpiFw7znYJxQ7pmdoSx85VuEn2AAba2vJhsND9n6xoRazn",
  "key3": "HMZYEAu8ZA2Pvx4U7TXTkeuRBZQw8J8m5VAx57jPDFUof7Gkxv6dghPCfL5fB59nLmcwMCHkgBjTgsjJ4BcEHQ7",
  "key4": "5KyHxncXdihV5TMbZQXPfhaNDZ1nxrpH1zZPLtaXtv82NFor6nAnGCEbZQuXASt9M6Up8SG4DJQJ7v33vRpL5pbf",
  "key5": "DGC7XyLdLveN97Rz21qiWnrfdoYCfpHoYtpSqY5xaYLREsHGRX91gmWt94yHxfRYC5wh3yLVccqW5k2Znimdc7q",
  "key6": "32HdVjXbJbfjA2nFerQRdzbLLNwdzGnMmn73bof52GUoBBwSs2E1Rc5h9q9R7RdVSShixeqA7iw22zFwvSpPkpkT",
  "key7": "279bMF5drZ4qh6wn8akUwdGwHkowVH1kckDYo31Yfrp1R97N46shg1tRNJiYcec9TtM4qoqMAMPc71j7zezzRzZg",
  "key8": "2NjVYm7kasDqKts1Sh4NavCqr93zFtovUDZcFBRNPggEPZ4DsyChdszECBioJMvgkvcaMQ7H4AbygERZvURCunXX",
  "key9": "M7HNTo2LTq8ZDK1oJx8y5DAgo1jQDoZy4aR4aUdFu8PZRRBgvY9pyEx8DaMmyDQ9fdvDw4zTu1WAhaf4fpsSibE",
  "key10": "65vpvBMxy3a7D3bGMmSYeWwRnMUk625qzmyJGBDJ4cGBgqyKLbgrfkhUXzXo4HfPvtqF1GEq9juTSSbkftmR4TDB",
  "key11": "6MtkYe6bdjtkPqNE5tV91j5FwEjFKAdCfd1TYQXqycbjxejG2Ny3ZJdCQXqYZajkAHBR3uta5TA5cE7R7RgxcQw",
  "key12": "2K1pdV4HJnmd8XpXwjSTx1dbd7rUhPgoL7mjEKW6MPXf3uP3onT3WTU6US19SgmcdwHnmrLA93rAPzNcASGviqdM",
  "key13": "3qDGV9TKvfDihVvAAdMGrUB3mQc7m3EAwreXHF5p9gaeJZrBGQSRjPikcgztyzxH4TYd6F3WhuSspngKMPQjTZtB",
  "key14": "4B24AU6znp6PQB9W2uVr7ftWgBMMgoFj6sj6v66RGWdv6j9kyGweRgbUiE3tjv94KPLhM9wo1vShrCqnfHCQSHoL",
  "key15": "3ibuTeH2nmTk2Xy1SyVDBYspT6dsGJJFuy7ojLj9xc7F1qxH9aquRr6paFG3CRMujdLdNQ1un4XyBSX5FkEijacH",
  "key16": "5MvodMkKhyu7xJ6qdoFLCJQHiRogSHqJFKTHqo6D6q7DVxiNfbZCqY9auhrccRF5tuFjccG8iZfvBRboECJJ7Xb5",
  "key17": "26sxvhQQQKiUzmKxi34hn6YoWQYSNapExXbuHkaZNL1PTuo41ZuCFU7yZNRchQg1DbpL6jCbx4sjGYfDx4pEYAgc",
  "key18": "UFr5azz4x7YRizeYrsWjMbmwkhqFQ82dHPWxRzR44d5z8KbzLp4F3vNmxESxzKDVGKdrgyeic7rdB64tQ2m8wn8",
  "key19": "2nrhPesbavFdzMogSvgtSMojC6qwBh6QvAcwGNpDKN1MuqBL4spEKNPvDKenhbawmY1NJfFQqV6TYw3H7BtKgJSx",
  "key20": "2akjxZVqijtpAwqKpo8eFCjmPZ2Ny3ir2SWKa8xKVx8Vw4Cg4TcgsYNy9s8VzKrqpwyRkUMYMr1qB7sQXCvBAdfY",
  "key21": "4uqDFWMjHNoQtxDhFyXLaz3LJpAQ2qbBHkq7d37En1TFAc1Wr5hn3vosrhjnBFjYYEdbEVaXuc4efoK79mh9oB6T",
  "key22": "icSHWUsigtFJaYhRUWN9DLbMz6uCCnx9ozdwU5tQbm2oXVqopmq3FJJ6s5dvUTT8AWxqShBfxDLureUrupG114A",
  "key23": "jMdRRCJL6oKmRLcZuVPEQGxYYUvefjPjnVFDq71D8A5GvE8ZS1JMG9eWbHggpYJr358P7XyBwXPZ7Tqwa1Hg2FR",
  "key24": "3XbHc3YYMXt6488j8GBfbkh54bN3YS1kHUg1Z8mkkD6tYfsSy7jwbcTfJuw8qj85bWRSFab6cci6V7Sc7C7TfK8w",
  "key25": "38QHY4VX4AeQ4j1PMadGVEernseFkLmTxn3kRzXxxHBPSjW5Yv4YqjHVMnQVZsBsP9XLQKYu6fSypjKcXVUD6WvW",
  "key26": "3caJjjojcJSw7FMq1dzSWAagjd4RJPeU3no2PfMhhBQ114scFatKmbUwosxveAxPkBUAnEep1huqgg7Gc1Trtp5y",
  "key27": "2udbUqzChatGMVc7UfkTXP9oDnwkq3w6vUPwwNpHSnQhmhrmwLPF14SL9jB3rGERhUG8RWuHJukQnMtix8eDRTyB",
  "key28": "3emKwvBYZeXgfVZ9XGm7cB8KnZK52TkX5SkJeVN5i2P6a18ZLEQyqekAtD8av7bWxsVkcH5iP3sqxFcg5QqwDWyE"
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
