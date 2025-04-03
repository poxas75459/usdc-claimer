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
    "37rpbQF9CzkkBdzyqKp2Jw2pnTL59Lkova5omRX2zkuDjy1b8f27s7cvZ48qA6Q65wYa4LqWG9BNgB96sEwtdSnf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55ZnnF91djzh7UB82MYCRettvYdMNq1vK5eQYK2MAkiwqY1WKFNaamPVzKAGyhECiXtpZzDZKshnxvoXCDWrXPnd",
  "key1": "3N1pDT3GcTceZL95xox6MbAtS2d8xAmrGerpCQWC24dfQ1LtgR7BC75goGY5ghB3ur4f1WJ3ihD1gXkHDczgEZkf",
  "key2": "5ghehWR6eX7vKAZTeHYbLPP83Fm7DW5SQXyKjK7vy9ihyeuJtyRiKwVpiyUjQqKfFgpubpo3TkLFdb7dGnVenKma",
  "key3": "5kMPky5dd7u6JsA3wXJPENuY9zwP1D2xSQ5vM9DLWG1XviEu2FqWbX3hYXCi8H6buJQtszKcQSmDaKGtXEE7woEX",
  "key4": "51N6zKhzFajZsSnj3KYPkoCD9mffoqht4ZZAJsowyDan2oNNmvG7pWLiriwSnK7E9ytYDrXfA1fWxMeVhNAfFpM3",
  "key5": "rJurjv9jHAvUeQ2wgd1V1r3gQpsvWHqjj8u5ix7sN894p5jj3eY6DRnzjKKNfJvUU4cfSXFNGfmvmbumrPAE3gu",
  "key6": "2uJ7cqKRJ6UfKSSmTogwzafM25mjjKfY2gEV8pr1KGm4wspH2VZay8yLJbHUUkyTQFzkyCVtyR9Z2yqLtL7CFvJs",
  "key7": "3FvBjKLnDKcBZBoACarC8uMYg5Jf4ibFHs87brQjTJXe1FTZp4yZ5S6Fn5VtrHAST1r8fP8BW179QFE3Sr2HReHg",
  "key8": "3W1oWspztZbpkhaE9Jr97NZQ2s1UGLA6eHPx4M6DY9k5YSPYwzbMjLyFhrF8YVFsqLY1mw7mLkHYLrfCXxMnAZpA",
  "key9": "3SGEkt4iDyCuMxjnVVDZ2Yej81PLmeSqmMY8kQ2HTT9A4t1yKDikd53K5PmTKAb1MJ9tmozmgt3nYQminnPbGdn9",
  "key10": "4iLec9DAmEBkv66MVmoo3HcLmZ4nAbJtPyiZDrpuyAUKUTXcCVR4ZXxHsNSuonQTa2cz5nmzbo1GDdaNf1zUKCoa",
  "key11": "tLJDLQVvU7ZewABJQMSBGVoh6a8tFendBtEuyceHR3eexccyYBSi8EhVNuzzsbPpwn673BqcdpviY8dzPRKtaVF",
  "key12": "3TcmwMonkCWfY3yv6bjkSdkab5eJuWiyCf8Eckt5nZENszYAFbEihAcWv9zUDa6n39tM11bjAWnFL8WsvatFFeBa",
  "key13": "4xkdXvA2pas3UitxbJKoTComej2mrzv99oxpf428fksms44fVKwruQJaJsdrMAhVjv94Phcyrz6xrQXe7yaUpMEw",
  "key14": "3wgEVGEMGfPDtxGqw9sDK1NmENTpZNgK4EfdVwK7pMm3SyBURMzL2czwKXEb9dLCQX6P9KRQmX56GWETa3Ay5E6b",
  "key15": "35iZir9KBTBYfVE87gHRoqUd6pV5Hg5QtdmPbaMnoaguVpAzUpjtxESKf3z8BgLdUst8UFKcNC6d61oPJ9nh6trv",
  "key16": "36juzVJEBMp4j4ioxiR4jMKgWpqWPboS8pDxHmStEWcPtXpG9TddEfuqDRoVoaRbJRgpgChAA5XARmepX8bSbFrV",
  "key17": "3WhsHnUpNUQ77B1DdmdcUtWz8q2DeZdz6tHFzcxsa79VYxDYBFq3rK2DNccDnBbHx2bZpj3HMDLZmxxVS9h4hQdV",
  "key18": "29DEYsKHFi9oGLFkEoPy9ULQQcr6sHyosGMSEEG87qpibDhQeZKvhLvBWpxuRe1WnrSQWi4CgcwnJfTGf95KDkwH",
  "key19": "NFAR3Krq3U7MyanFEBU7zb6fN3WvXJ7tmratcqBEbcBV3inKLrJWfDV6h7U8Z4QJv9jNahJ4t4Kik89ich8BSPM",
  "key20": "5pt7X2HWfrcV4jWzYMCEGB9EGU5jh5FgMbrYakW7GVwyjCHE9Q6q3BHCoE7vLSdAPviFVDcrEz7sBKh4ktBtEUH2",
  "key21": "47tXqzBGVDxwZNktdtrBnnA6CnCvZM1xvh8Qf43YtSEMNwb1zg6bLnJRMfnFDDyAQ2teApmu6oJ5x5MKcHbBrDHz",
  "key22": "47FdeeMAo7c7Hw7joUGPpGbz7PDnLuwQoX7L6o7dzwd651Ka8mCu5p6qkf2L2xn4SsjoP8rPnynxWqQNN3vo7FTG",
  "key23": "5SLEbAVJ8vXbn9poa3fzV7qn9BbKfjhgWQDVSJn4PhS3vkpyGbrdphFRCNs7WpBHG1e9GrkktxMYXDgyBJBfYAya",
  "key24": "UtGzRQcwAA9nD1AF9LKKuz6ufcW7tA99tBWdLTBcYk2i8qYeo5KXq81FRboSeh6ar5LrZ93GmveLjkoUyRzvGhC",
  "key25": "2k2imGY7DHAbqMykkkDRgunwjgc1iKM6hRhJh7NKE9EbJTRGyJxphNNv6qu2Z6WECco1xDKDkiarxtxqgvYEyd7f",
  "key26": "5kdpZoJXVTT5VNS5XaTjRRo91sbHuXJZqpsjaj1sTsCwFbJjvH3tfppes4n3pvEeEXAx914T6RYQxenhsrysAUXH"
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
