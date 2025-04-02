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
    "3Pm447DyAKWaGoGfW1PAdxB1SPKiLjaHtUdZoS6B5UdYuNoWANZ7t8zXuQ1ZXHLwfaXKPD2cw3QdYTBfhZ5vadBe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PzdaRvvfHxE7H5DX4PGHGcwVbcMwcw5tw6iaYvm3A5Cp3U3g8oWvPCnFZTJ1dXdXsm8sHx5xCZ4wk8dAegwVqon",
  "key1": "5fJUrZDjJGRUjgrD3A3G71ehPeNAbX7Snwq8L1q2ah259dBLn6iwhvAoNbihN7UWZq7rgRos7T5YEMQ7vNRTXF8w",
  "key2": "5eV3K3hfVHgpsVpaRHAZkwj64PcvZjXx64TMcWn6YPPgFtf8wtFjGnM134GtJGVj79k6Cfamb1xmNsbrhXRKpC9N",
  "key3": "VYG9jgYS1Rq41mbpAuqR4yPHf5fnBGFrKDxnQJcAv8mdtvSmsoMzzoikW4ZXUwqmGkcTYVYodr5vwSdv7F3L8sw",
  "key4": "3kr6oJrCTC3pLyymyGnmwyQoetf6fS1dutzsEvyEqNd1VXqJ2aR7JMXTAhgyx5ATGdx81gaQZ2iG1kYzKT4hhE2H",
  "key5": "VMZhVbwuaaRE3q5izCGdeEZjBGyytKqnReKe4xMLS3VjdQG1C1dxK2SjNMX1te267meUvKPhsnY44UXhBdD3LjD",
  "key6": "64ze5NSgU19bNAdoNK1tSkbJLfadXCL7DZSLrqisabbEGqPLgGyWC6o9VGzWHwJSJPCXgDDcEsvyh1AonJqmteGZ",
  "key7": "5Mg7gsdZXPZ3QAEq4kXQUuPLrGPTLCi87vcyYW9Ma62eMSxVzTSCMCj8uucYerU1zZX4LmqkjxSUi6ZEXW5wicW3",
  "key8": "31QSdxnKWEa7jXk7DEXo9PifP2REFfdeLHabDBU19TBKNE2ZXfTvjhzvhtU3iDZiCEedXxu4RfLRyh4tWLq8oRQP",
  "key9": "3tV8PnvXVqbBpaDJggTR3EC9pZ1ZCcqJtqtSX1bn74xBzBJKKLqyf3n2zGH9WX5E4KzxKyPTAbGzJ8auLfY94MTV",
  "key10": "CmLEEXd3jyktFzBHBk6bw4W9cCpVU2tHkNfixe7Z9Re1P1E5ioPwv9B6dhMCg7qoRo1K9vrTJz81pi7wNp3vgHy",
  "key11": "KDFqs8972awcsTC4rsAKj5AyCYBhmYtNrz7gz1tPACNxDudBpf4TogjYeEa7zLcbnmvBLEAJs66YYvQZbKbFoLP",
  "key12": "36d1KRECgJNt6keHvRsmXsJezddveRxyC57syRPRrAgR6HQepetgVog4Qh4WMMJVzU4gm6HuTPq2wEi3HK6kRvTv",
  "key13": "2Wc1j9AaMwqNpYBvknGsDXooYtFkBaUTyFzdobZXJdPGGucjJnGAadiPqgHRwjZ8RmzMBsVpeMiuA9iT35Y7ZxGV",
  "key14": "3tE25oA4fZLkpAZvP7nXfHEZufTpJWky9egDZG4NjxBLcufbFY2xVkkT79p8XXvSJi2uWw5Vdsbuivs6ZXq7rMmj",
  "key15": "2d7Bzj6bnmJVBwh9trntvHgfWzX66ksmQuiZGoD4wN8Z6ar7XKQ21M4Go9ziDYLWH2vN3rZUSvEMh2EAQG1WePUZ",
  "key16": "SSZeH8faEH6hK7vZsRxMhSiMCMC2N4XeXUZ4FHVwrXwUipXvT9avJjvcfLb6pqFkekFgAM727vqA4xTnva23CtX",
  "key17": "5MEpFGGQKKGGCdkpDxW2JVmM6ynR6HFuQVEg5jfci5XJ2H3PxwxVwfdgTEYSYMfGUd41VaRcnQPYmYK7SNiwa9W3",
  "key18": "3czg6J3HY8VFLX1cLoY2VN8EkJYYZxCvrUhWjALAoRwH8iMFh9axrc8oij5eGeMcA6S2rytEvF9CqiPqFx7HKwqv",
  "key19": "5dYAoC2dSSE5LapYHAhmidM4vHWtdNg2Z6GAjcf11VLwbZy2YBtnYpU1xSbrrAeVgCUNo2u7h6pDeaVbCheRM5TG",
  "key20": "2NGN558ZD8rqVFVsoyjJkk2W6yVfBuCg7i2wPmCN6zCLyJhd2UQsMBGcKNJsHsopGqyFActguPF452S9D1UZMgY8",
  "key21": "dJA3M3HAoXWHEoxJQUTdbK87d8WrcENDQGJpoYA1ekN1bvLAdc9CytUeARsVjCiWtkZ32TTnwSTHKnyjZbY14o1",
  "key22": "2M3GubXmGETG4vLJ9pxG15t6CM3foEuMy6MhfDoWGd1ZWPi8Jw4MvEMLNrqLzhTNQuZo5zDPQq4xWzhqnDJX4JW6",
  "key23": "Aso969fK8MTaZ2CTErmhxU4A9y2TMnNm9Hu5uFg8qnTFhAvUPudLSySeX6rHGwHvavzLbUDvquCZVnpFAutZVn3",
  "key24": "56gsdLUqYhBadxB4Yy3D13sXdzG88tRfVumbRX4pvti41K2feVaTxLTHpavYaXig6MAzaf4zdEZNAoARXRTfFy2y",
  "key25": "4zqJ7HZHKpM1eMZiUsEJRtu4H9kCciF8WVG67zCWZnmp4A6VLU1nQ3TxF1HU28iAfFeQKomypPEd3gjtRHbU6kbC",
  "key26": "3Ph7rW2CLYurtSPrRgbiLpENPXi5cYHmfT7o9hccca58EY71LbHCwzEfEjWGNUTWP8pJReNz4cgjUN1zGehApchu",
  "key27": "4ise6fjAXQcjzLmnbD2RVyP9Sp3gToHUELpW9X7jFnBuvaZYMdLZUYoBvMUBwZ3RJjvQYWtPhsGXTFZFsRMBW6gu",
  "key28": "W2uWHTERgdzGYHB2xoimTUv6ycAFv4rLMfzK8RRUZRrtNQgmjKzNzipM1QBq1h9z4sZQzgtbVchcK39pUNwaWkR",
  "key29": "5TzUguychvPhJB8Cs5zQLWKRjCJNaEdar6FKF5CqHW6XYY8M4TKZ2k1Lo4rHersHvoFWk6MFy2w983XCTqpMbb2x",
  "key30": "5ZMkHFSTgtxcUSxTYqB2Bub6iZKB8niRjqN5ebt6y95M75JQaZu8EYdsmWM1DPUYA4ZWGQmavpXQmmp3p6gruCwX"
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
