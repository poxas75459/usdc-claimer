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
    "MqhZpHEoDpNexer1Q6JpRQgb1H51gJgkXV3qRh2tMJn31zRrGuLCWfvWRCVqVFqGn8KvAMuC8VgZ6Q2SrYfeYNu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tdyY79RwwTAbqzTsypUXK84yDoD5grtKqcap6kgaboeUAkYUDt9uJKHBZCoEYrVzWzLpQMxtbDC6bCjHi2TD8mY",
  "key1": "5EGxMrUXPNvUxawNzFTTSjgVX8cSMUrp1DHEmK3zbbF9c4ySBLpyTuN2Ag3W5bJM7R8fC5yicrfMkJ3rHZYNBbgj",
  "key2": "2nutfodpZkn5FtNbGxF4iS7VYzAoiLWtQU3ueCxNnUqukevfNAN1bwiQjBUGsNjJXEVBK7dbhbcWm1YDMv563URx",
  "key3": "2bky5eh2BDMgUd8wjLu6u3uebat2CJZNy8iXpA5Q5tukV5rEue3ZA8vWqcJGuYcPArzMohEFrn15K5zwLFQ4xJsS",
  "key4": "pq9EiCbZcMEAnpCGfuvyo73ML6v6ioHTkKohZJYMgwgPFMX9dHyZtEJHpyC5gtAn2rF7fh5D34A2zhz5Z6BoiSq",
  "key5": "2iiweQxAhJQ15WpL7UYToC4u9ZMthgD6qEqEDfoJa43az1xdFy6QS9xxqJ4ESZZNNufYotGtSbsCHufUTHpJMyYo",
  "key6": "3cpABj3pj7KCYmrFJzH6Pqe39hHihTEsdHewG5t83WQwjoccUW1JTiLAF4SQ6RHYGg85yn8xPTVMiKm2k8fwXzAR",
  "key7": "giNSTry1Ruh85GeavYtCU2Yv4fq6ESPdH6vcJZZpWuhVaUwzrVUWfi9SSZENZLSj3fNxV4tSXqpTwakA3gBfZ6e",
  "key8": "a8gW4pVpD9Cu86wFhdcTEfZ22XBHj6cxokRw2EDq22iiRHGNEyjwixvKV46LEHzVVuBtzzKp3FVGo1YDBesnaAP",
  "key9": "3GvEWHQ9ohDysX9ZbL3g6gTVPUK8VXnjwdnxgFiJvxL5NX1s9TiKL9ak17PfQCQnnB7H81Werq7Vv45DuupwbBt3",
  "key10": "5oAyY4Ahy4D52z5YmtQ6aDV2B3ENb8gP8NdVVE9ss8dQSvvpNC5LTkPZwzCytmrxh6F8CALbmj7z45abRNEVxPqP",
  "key11": "5ws6dihTXLn3zDzYBMvaAfnUtMtCXWzA5HtAr6dnY18xmZvfWt17qKgmhEpe5HQD5HnLVfrMenKRQK5EeungwkqK",
  "key12": "26nckU4ZEpWiFz6U3Lx9JcPu3NgH5m4pqq4unjGg6zapT9VhQx33WhBqkHQ5QxpFjgNr2dBnoaxy2mZB66zKZzsJ",
  "key13": "5amwo4hDQuHNYU1ej3bRH1gUWGw2vS7pnCEa1F4EUEpuss1Q7vB1y455WzV3w5hehqyxiBShbgbuu7oUmo3hg3wx",
  "key14": "QYE9BMQ66PViMiGMWY8Dh4SmkSi4Ngo1DqQXAGQd1cTKFwnUKu6HjGSmxN48hc9nooNVfAesWBeZ89EwGeCDRhx",
  "key15": "PMWgTFqvyMGBnw592BbxGbWp15SAyt3AgSYtBzHBq1wC5s8KrDcbZyJQXbrm96dcXBgi1EY1y3nR8Zfiw3CghKf",
  "key16": "2zS7u95UYgP4yfuHzHvJg4oGJcdtkpHXBpWiYVi6awYPw3uiKGrNpsejcXU9JAt1j4kRGq4nQ41BHuFiGEi6C3zr",
  "key17": "2cACSAFW7a8xWLe5apBy5gUFmZbjMTJLEMwt5RUR7nuxeNdJB9FhBbVUwK1mfjrXuBuWhUy3TM47h7rc3Tx89Hhe",
  "key18": "3npNv9Gr4mLRW7Fm8vkmYNuzGe53LBVqG7X52rnvZhrHo7ttyR2eHt2ZDuEkQ2nGXdftQm2cMEpsUyZb1KdHdQX4",
  "key19": "2jvh37XwfKv9RwGyobzFz4EzmpNQk9upFe6AaYXNUxpoJ2KB7BUAEWh2Enve8vD4nE6D95mYSNfLQruStgg7GonY",
  "key20": "55b7rMBSaW68a8NkE2qBTt2mvPkU4iUEzt6awF51tFi4yV1fzg5W4n5UjGA79qNeRxFvFrFPi67xBkHhHYQY1evz",
  "key21": "3P1G8rSmhCUz9V4mQG49NehdBA5hnaUrwGVG33JAuvJRXBkD5c34NHYPpm5z2qggYPuX3qMYBBCqbdprFFJZjUKJ",
  "key22": "5YEtpt3wuxwsfC6rWHtz6pSESF4auHbhnsUQ5P6AXhTHTF68usjE3HeFg9BNTh4FfBnGXifZZxAfcZ4Yu5sTrYUg",
  "key23": "KHkdwt6jeXzrT7PFYDPuXwkrA2zMTA9yGfnTkwepKUpJntn4rYm8ceegJZKsjkZZk7AterA8m5NgrWYYHECiMLy",
  "key24": "4JhNtEdXC9TN9kZHAnmrN5FW2jr9sLe4HgS19WcBKM9ER4dA7p2GBtGwr8NA5QPSTxRQZ6QnSparpzMe4NHGNrKx",
  "key25": "5mD9xpv2LU43EzCCBwXgowvj3VVq5q5d7kWFn86SN7JkMwacCw4WAc4JZY5b8QKiMByBweu5Q6USy7yk7KcCABs8",
  "key26": "5C4QZpFXk6gvJaaQDAdmwcbXCPpDMxgxw2PHhDU48N2jE1DZnfWwre3QoCMM65N3aphMmZq8Rj18ZAcW92Nxs5H2",
  "key27": "vtT1DNPr4Nf4MVqGQiABKccsmqrxvRTbi7ysV5PLHEpB8YnhLuXf8kN3xZvQtxyZ6itB2LjPnNFkpzSt8zmo5vV",
  "key28": "3gLUzg6g1o4zj5FjaoX6zFztspqb5E8Tjt7m83R5Np555m8EWJZjCK9bvn8ye6mYfjcQkwp63d9gWGoLW6YkSMo3",
  "key29": "2UZkEFb8WaBYWi4tnCyf5iPg7YKcqpFNXvq5ZiSxbvyAAnBNhmEwznZ1tbTxvo2JaPPFwL2zKwgDv2rxic62ckws",
  "key30": "2ryspH5GBFfMbmKGoWJ2tC6Z8BAyC4MdqkPei2i7cQVwmTVjJ92NLpG6hj9E7WBN3bWzJPVTCo8PKT1E9c2Vx8LP",
  "key31": "3LLWPZRX49s8mfRfgpq8NZULB6uEyq95ErJNVWjaib4ndte1vLMzeLQBLc75c5TpsesnUDU3fX2A4n7Jxmh5ZSNS",
  "key32": "3fRYwfathdWHyZquyyGQkLejwrUq1xFT9SnwvSoGimEcyRdzgCgBmr1oAc6XSXjBqAGnDGyPbEE6pGETbb4xRpQa",
  "key33": "2fgNGkSF9oenCDHNoAb2HKFqs2yyL2UNTCRwznTTkwCD6vLTURKSqqpSje5NnmVBe7tBeDfidfxSzUcMCJQnHxuj"
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
