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
    "5YR8dk4SNogdhbShjwavtv7s8xnxg8YyS4dnbH4Lo6EqA6BFewnLvmhvAxNwiqJbMNB2qvHWRzd8ao9xW6i8tvgu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dWDaUHyfa2SekaZ5qLzR4rDGoWi3u9B7oZoWLQDDhtnjVLX5KYW4wFGTeY3YgGgxwhRsLMvC22MQKnBDsdWJRFh",
  "key1": "qMAfBXE9hWYMkbAW4TDi3QpmYf55BoGDB9vFCQhmc4N4DmhsLby41HrWvJ572Qc4KRzV34H5qvDaD7kztXrBABv",
  "key2": "2SVuPissPP3BBS5Tietewwzz4Pawmqzyqr1LsDaVcAGMQ8zV9R3a3W7v4ZzapXo9PqeEq6hkGdZpWKEjUjgnzd8c",
  "key3": "2kxbxny76bMF7W1PACoa9CwNvVV7gwXcYJXdnaBC8nefwnaaP56gU4nC3wixi1h1kCen2PPWJAAq1WDtC9nc6g1p",
  "key4": "3g5KX9pME7UF6jA4ETDwz2FRBhnnbEXqkSXoX3puQjs7sjsjiFLCmorcwonWv8VQtwyLXHF993xboMSzVFsneeQ5",
  "key5": "4f3NwGJwAssu7uYFGrMmk4sJHgH2xHntTcDuedXtXoD3DGhZJXpTymBW2Z5uUCe1RMRD85LUM96BzYJimPTPrShN",
  "key6": "4nW6SwvznttHPYahDWMoT77Ui6CAVty6paA5uanwtwa1BL76doBw8ZJEzFLAZGNydRbrhCM9rruULu1jgjKjHrEC",
  "key7": "4mXvL6NeM5uJYhrEhF8J3BAvqTZJc881KNCwK4rTc2cEGwQUh6PTqfbg1zVLAuZCdL7ShGPeVk2rCNLcs7iJLmdv",
  "key8": "5LokgL4r6yxzDwaEQkU9NUAhqisk6JXY1kFdgkxHRgeEvBvDwW7VQc9CFPbJMiHJp5rFadM3XtsDJpXhwXQnya2c",
  "key9": "3LkzVPgwWm5abYGdBFD2HvNje71qXy7keiXkVbPUjNE4LXnZ7NkeZ1LUi6Pek931iTjwnXfDtUc1FoBQuDyg8PWE",
  "key10": "49EWDbAw1LyFKdF8SMfMGZBvYtMMEsv3RpVviUPbskp7cFtxYHBd6h8ptkjCRUuxp7SZE1M1y6Daob3PsGmKNGbN",
  "key11": "27dXALZaduHQJkGGBDpEVivAdivMjkhRu2PMgeJfSGUXJitU6Q8NoQNcL59WKyytWUrzvtmp7LxVhEVhMHNZUZT8",
  "key12": "NXPhHtaxTxWf1K7ap8YEzkH3YDrjfNGhHCuESFnFD6NnHV9ZH7whgsm7PwhNjca8HAnxGVGruedPCovDSGye964",
  "key13": "4VUWm4pRfEESsY8oR2HmWkA1SgMAuiKmURTZQsn87nn3hC5KKXnD2X9UkrN9uFyQbfaurwf5y6QbUKE6afYntnBu",
  "key14": "3pKtFnSX5APHvMkPcJTBF2m2CaZX6SvUhQqfvr3GtkoRHe7mC7tqawxgzVcN6kaNdiiC7cPsvnvQN5dXNfEY1XVd",
  "key15": "4Tz9EywsEM9ciDRiseXTdT1dttEYAwRmPR5qsTj4J4qXLCFV3fjajDgRf1ac3oYGCEmEcGtp6cPHx26SwpE5e4E",
  "key16": "4mP6m6RNmwQErfhkXi7o4JvXSvyk4B49cVyhTMSctXirzmYS9xwSXJAhGKPkrwCgGxB1qZ3dPfCLwwq8GX6DCbv1",
  "key17": "23KZWRy9EgPoWR6YFqAqsAGnqpCC9t9f87bnHAM9SkGhimq2JfbrSqzbm6NgkkrqcsMhz3WZGc5NArrFaFQ6YdkC",
  "key18": "2dG9V9XVn6WQjq8KsGtGNhQt6TeNU5h8uw2aAZtgRf4hXKNUbJ3g5J2PZ1B75xYRisMtpsn4ssi6BcesxgGSGTcT",
  "key19": "3TUwDSUZrtP5ThjaUiKbocmYriEGJXR9Gp8uMbMdxmJxKDSCbq8398ANbuZDK5nAvc5Zj798Qh5MHJaujhM1Gkxu",
  "key20": "4NMogdoDKHDrAMegetKufqUKzZmvAxzdWUHiG3qNmrA8UHfyrnQHV3tQpsk2ZtrRPqxys7keMRrHncfAa5WJMzVz",
  "key21": "5QuXpnTcD49cCkYwyZrUyGN61aKSQr4R9KwJGivUxebj5r7iz7WdKZxBtpBCpJr3ShSwEsRzGg1QQh6ojhHh8FUj",
  "key22": "oE1UTYkC1uAh2zutbzPXX2Cf3sBPHUpjkHb4V25m3onWB8UH6astXtybXA1WGB33d1sQkU5oNCcwCmU8vx3BUTC",
  "key23": "51DrzVH2WqT5EcJ3vwXzKbQA6WuDt1fgYuNHzAxqgrFjJrgrv8kfzddJkmiQ2JiDau9GsrrbNwBxts25aPLVp2JA",
  "key24": "3f9oFZ4qC6Gj5ERyc13RXXH2KGUtGZ2U5TXWan3eMnjjEkWRvHqS4YqdjdeyzSCtHKSNMFHcekabEwmyxfUxGaGH",
  "key25": "3CzhM225QQJwGbvdTQyWBedyBLg6cjRpPC6eEH9QiZeid9WzAPatZYZsM656iFCyBScJTckbSRn7Kiabj8PZJbRB"
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
