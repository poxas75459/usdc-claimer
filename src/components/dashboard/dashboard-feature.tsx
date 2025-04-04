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
    "4UMhaXJcxh5BMNWXXwefE1ZW13joZaF1SgPUbCcYekp1REENGziTsua7ArGvLYTUy9rWq9S1u7SVdEWrokXi7rTq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s69iz8o7fKLxEwDaxpbx7gQobWpQ8ZqfHbxBj9KG6M8Hxw5tCyuJimg6bkQJUdSos7VTRreGnCHiFMVkgeauQj5",
  "key1": "3aShZHNackmT2y6XY7zkACbEibfcmXWnTXujGfKJUtraYvLNHBqg3ZLWe6WnADYjsjyewmLGVcsdCb32M1vsbXR3",
  "key2": "JwM2TxQa3FgtrB8ieq5c2m8rgGhRcSSnGoMa4LpLQ8MeiLNMJnMCP43YfFCcHCmf2VAJthAvAuhqtn7F2DbCS2T",
  "key3": "N9gkT4TCnQh5meniqPzMDVGwX2LPEoq1dDL8N1Q13scdzxDMpehMzCxxYDQD2xfEBwR8rYfcwKTHBPJ8FCoEQBr",
  "key4": "439cR5EnvTX92kvHXCDdGN6fyeBiEuUGbNDQKxTvp7Ai9W3Q7if6iSHJgzrki8fpU5gPDocSzhGbovBvBy1iyvEz",
  "key5": "65ChP11eV6LUVNPPzhR3LsnCfv5EWFQD92u2jwzztQLLNudXbfwLoevvdgs8Vur6bF81mALxpcH6shrxR88uxJDP",
  "key6": "2yaKwpYwL1T1d23eBktMBPQRFeCQsn8JngKcAQNVn3my4PJwPHSi5EyjyTtaLhdEmQSRMZ6QyaTrua3Jr45RK6Dy",
  "key7": "3i1wipRyivJFS8jzujU3yCAxDpkh9Z4AAgfLmtbH8iAAyYVuzVdmo5EcnXGvkFnKXoqzB1hRHb4cnXe5b3TiBMzp",
  "key8": "22UAU1j6D3xc2ydroE5J3cfRdVRXz34knRNpTQizK1woiyd9o9D5WFksDtRuMz4GdHdkLS6on3SBjTE9ANYyCGPn",
  "key9": "2inwgfidJhsEQ2RJZFuZmwt53M1FGLu42njnBfppqnSG9dM9nAag9TxVMiePWrkV2nQh4vTpnhowhUHdwJRzJtSC",
  "key10": "5NMUv8gR3WsGEQnZq718vMBoa1fxq5Eqj4HprrpY45eQYwxBf8ZWtG272ohhwoRBp12XQm4Hbc9RoJxsaApBS4ZN",
  "key11": "3mkC8qQn37gA6vJuJQStmnSnx5b51htuQQSjAHCjwoWHB9gSZnuRrYFKWedyVn6K6iUexXotEe9prZjJyebTFTgE",
  "key12": "2Zjskd4WwzSf4sSnN3yWFucpxL5NfnrteXv8Cyt3b1emu8kPWEh7VWA5txosmJDiSbjevjgLPZinEnEmFuWSjgrh",
  "key13": "2Hp9xmthhUeSA3n8bcM8RsB43nZK27LVMNdsTEvfT36wtXnccVnRCufidLzkQmsRkUau8gYuXZp9wG3GHwGUDVNo",
  "key14": "42WAzHUmgwwF5cdRdhwsaB9y82q8BFvVY6x4JdBMEeCPjdDF1oCNWJ4TJ4zkt9YhXGJdCA6q7Xgd1ErwYDdwJZgA",
  "key15": "3DxKGYn7wftA8Eckih6S4BjVtjDM5qa5uEL71U9m6UU7dtS1hjSNdooxey5k58ojMf1iWEUmf3yuH8mnsZ6F2t4d",
  "key16": "H64DqWpUjvKqcJnMQ7txSqM6YbzTGhSXXY7mY2TFKWqhAqZgykFBiiMRHXNVoqsjbUsN7J2QAbbfTsvP5LEBtX3",
  "key17": "5YZogYi3XGoRYMQatz3HvjChJnHNsfLhZtZX1goLvRziWGed9BdtW5EZzb5gEjwQYaYLroZpjnunjVvtN5cTVZYg",
  "key18": "5qrD54qM7ZCcPsbMubwRH6HNBtmTXc1pLpUEVFUHLGez9VQXy1LjsxAaiJEZoTz8vCZG6aS69ngpD6qv8AucqEbR",
  "key19": "3y5CR9XMeeJfGyqrYY7Dm2v9L6uneHDDNLKnhrBfB1D4dRWzSic1b7JLmuzekB2iDLw3vFozfrCD27KnKzRvtbKz",
  "key20": "VWfYXrNbbdgTSxUWh1sX86dFZHmbDrKF4yAFAzBAZvumErAoCgmEuJ8uHwAEUKMCXpddKZyoHPz6q6cP268Kjnd",
  "key21": "3emKDL5j7yTzTiXsefAxWjfNyk7QDPixMK9tVQGED3Qr1pgXB8pWRpwjKTQjPDeSnaRxdQmGR4ZQbefEsf888EQV",
  "key22": "55nPoWmziHCLGLaJKkcNPvfiytZ3PSyRhpVqyqE2bmT9WnzA4BEhYLGZDYbNPjRiZn5eimB1kdsngZeTLVrgF9tG",
  "key23": "4pMBDx9DYF5QzMHdU5bTUsB9TzDYsR9uTYvz3tW8ZwmMCmUQJUDnDaJra9zxDh1N2zdh31ucqiVPd3eppuh4kNR9",
  "key24": "23fuBWzmGYSuTYSsewhmAdFja5YpbmKdDT4BQE6tE67ZDcQHc8AUoz8dGkf1YRp3yruWdmWwwqJS1z1JZDMYh2sq",
  "key25": "44xUyKve7T2xYZF1exyarvaWnGB3TQRrnGkJJTS5JWT2CrPUJ3iC4MBDUXWbCVgAnMRkjUDyVLN8PqniDbA8RS1t",
  "key26": "26B5rNXRxpgrVDjUG1S2YAUAmBsNHsZSDswjahNzhtmXdCwVT13K4fEMVon6Gg48o9NbfBikgpWv3ez5eMSLegFy",
  "key27": "5eH9QjoNhfGU9t8vA7S9rJsSkJ8wHUdZTSCEqAVK8QhfYUXbw4vSEnRER1P64Zmjx9mKGdvg33Rt53xiUbAXtbVZ",
  "key28": "2AxK6CmsjcFYzR2JWTXVriwuoNWm7yQe5pLj3MVVa6JYdkqwpRUoYNfv6efNobcaPeLucThv9CXsawRqArfMtt1z",
  "key29": "46VUHCL6f45Af9adVgvPVQbXd2sGdeTf1WbLQvXQKUEKHzEXPTZy8cmS1XXzQQAtdkok7pD4JUQp3wcP8hH94mzd",
  "key30": "5LPtVnGFSzuVf9nKu598e9zPvph4creuDJQ3mMHpYmcGgNhJKZdwxdzt4vdUFQBd6DZFujrMmR7dRgNhPnUFfuFx",
  "key31": "4uo4QcNAq38yQNMig2Q1EvjJ79SvaVcVRzFWhuoSYgqM5WSLSjP7GStkNPN3QJEVv9hdbkYZx5SnmEVzbWY4pTXe",
  "key32": "2gG5CWzDicE2MdbNLsinraRfuxYY7LXB4X2X4cP4JysCrpt7pSHyjYw3ZbVSH9E39xeNAJhZ8afVZaNWVHxkYBT9",
  "key33": "2XaLYL53xwyNKHHBeqtdiAJJW4oRcZai7ComD7DwHF972sYdL7sXBt4RnipcC3iGkmVx7PDynQ1rmiHn132bhdQv",
  "key34": "4LjWaVmnqha9EunYuYmfAAJidQVdonf7u8kYRruq2k6CheopkbzTUtFec9xP5Emx8WKWhAzuKiiXQdtUE3ixi56k",
  "key35": "36cP2jrsz4RXtocUVnpLQNxFXcCGCEX7MZuymBgkfwsasS9Xyi9bKFRoW3ZfGughwWJdschCy7PeuHV8wfNNsEhT",
  "key36": "4ujzWTg3GBw5tUz5UETHX41CrtvfLwXxAyydAEdjE7WN8ZdtTCFidp3ALb4RD4JKSUkiK9dfTuLiC5Z1E77MWyNA",
  "key37": "4uH48zRHH4JakbUMicx7UHmZuad5SmwWVX12nrKi11P5gF9NXFZyKZM3FuikTxYGd7jFFvojLANLhEKTMcvMbMex"
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
