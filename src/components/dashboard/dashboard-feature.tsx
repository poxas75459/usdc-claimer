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
    "2xEof91XgEuiQT8H3HDTj7eYd59nhpfii3UVvWgPHLS6mbsZYAeoSYuD1Fj83UkL8etrvofeESW1kyG4aDadB16h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24JHhavUFP2Lke6tfCw7DfioxLGbQ8aDZpRMZRBBN2Zi1kXKHnGBWZExYziwd81Nz7PStLuYjp1Gw7vAw3GQciwR",
  "key1": "5vsW6d6U1eexumxn6sR7hxHwDS2aHth5rsfWyhCYY2bcVRCVxiYWW3QHFCDhJtmBFbx7KMNTcsm1iJMEJaizaJcz",
  "key2": "67pPm1HHNZT85mbMYmEMY41Hpgk6FGgDc2CdA2xneF1cxTrG7WhjHL4DqXyQViaUDvYYNgTzsoP2cqB1sry64CLD",
  "key3": "35sNmqxGsqKKpwW7Usqdk9dHQjFQwfeurwvqugUwavHGoirYbd8hfHugtFT476YKzARWTn6N87fBjcBMPnrmSaA8",
  "key4": "2xFWyYEumfGpi4TvTxRGph4aZ1ZTZTVLCR1YCGVYKg8TLHuVFpASWBueHhsAfjY5AWt7FvECZNn36bYV3fZQvobV",
  "key5": "4fYdYUVVbAt8Pg6hAqrfCPZuZ42yji5vX14LkCvjKCmXewgGr5cc3xoETqALonDvkRJRhEsdVUCuqUFwwrUtfiPZ",
  "key6": "3ASXPQMcXKck7FDZtjnztaQBBaWW9PCLSpF8PbSDorjcA6vavLHmvFqZfaYWLZAzmSAAn5uQwUhq3Wep6FrPVnmp",
  "key7": "5KPTHsyo37B79wGeRpyoGHEEZbBfGz2egEN4S1z5tYybRURB1sLi2DLABLF7jaLnQKQdrNSaxdCTHVHVAXvs8fXW",
  "key8": "44EDtm2x3c7TSnEcFvxvwF2EirXAZFggQHnGcdEF5cU1qJzifRjMpEnRDcDtq3Q4omQUJ4bHjaQ1mBi3ckUwaQVp",
  "key9": "3yAobJ1RgFDkMMFZzsPMogfYDeNYjKc6TXiPb38J6vEE2aEH6NEWYaokR2SNNMeWNj6wtJx5KAWzurw9zAgjVDsA",
  "key10": "Zm1BBADWvyoGbpUJYLzcL8i37EWXJwgFiQYzQaKaASyC3u6QGXo5PauVzjVxZcYNfwdjbDMhrY9sfiRw3WdGcWS",
  "key11": "4VvBn6vagzhEb2QNETAf2ieMUHCtnjbLR9LMpnMJj9mpQH2jnn2WbePAdDd3xBZJaj4m6D2RbwwR6UiCHZ7Y1HKV",
  "key12": "4aVmUJwyX2Sj8oWW6mMEe9qL6nteU7GojHcJTmjpns5EBmVtEgm8nmamZjS2BvxM8LiHuYv6oBCyPZGSr4tc6zT3",
  "key13": "2hinUxBcgTa7kyczzWVo2cs9tuzoD2XRZKo6jgJnWyh8zCULzs9bthG7wu163L3kYXrY7DEoWcKcSJwBtm1iYTwe",
  "key14": "5moX1KSPHTJeNHyhB6cBSY5s3orNv17KFLnx7ZpSDABMrY3ZW9JsYmT9RTqS7NuGf11BHYiYDXACGKrnGNYtHcuD",
  "key15": "3wQ3RCbqp4ohmeR8ZjdLuHshuNdNTXxmtqmZQTjWCRwQhYhQJA4RchfHW5HX1c8XHUiP33cuW1ekr8o33VK8BDhX",
  "key16": "2FpCFqLGMHW2acVT3qA1zjuZHnkSj5BJTU6FEre82RBnWKTXNmrrNfUZ7TBmD8UjmMNvfsEhNzVcK1HmXmtZo7bS",
  "key17": "4GrbTfdWds2e7NZsoKU4B6tLHL8UGvN5Z3JTF9RfWZcnu2rLp7zuWiqJVejeTnjPFHSJ9MAJJ4WHnYPMUWp6xA8e",
  "key18": "5crG4iB3b1k5DQNr7u9zMNV2MLiyJhYqwundtY9Mm6utLqjx8BVRAGxP3tAd9eFPrtJdfKqJg5e8Pw28eDQR26Vy",
  "key19": "5YyCcoKm2pCysk6r9kgytKCv2hsTBiNwrGtcrjZEnMcQM4po8LynZAQSXcSdoVX7A5tjS5dz3cpVwNBoD4bGujNw",
  "key20": "2ih5pkcTDQ5mZFxhcjgx3v8bHurGC23pSw7DXpukj2LSfBJErJDxednrNYSE52xLt3Q4FXpHVLRJmamUS91T7HjE",
  "key21": "3zH892gnX3PQJAibFjBTohLweVCNbaswXpHrzqov6y7Kpfwo7wXgF1QkZ9hPVnjJfE5sBPZ1DHYozCkY6CPv3bwM",
  "key22": "2SzzjScPLwLmxASDk9G3AsdBDViwttPnHrZfAjS2gdNUYjBnaGWedtooeJmQKaus2iGTA4q2MvmJccFPcCHRERk8",
  "key23": "3CyxXgEK1TTFrW8j1Ep8v48tiMrQD1VnZYDf5JYdBftdypyUK1EEznuDvUjAWvbamxraT5bDs8UDGvv311ZRzQLq",
  "key24": "2o5EpnRNaLcARuNu7QrNRvjDdv2ZbaYSvvfsHPravuJLLVfqSBGuH5a94bTWm5Gdx35c8nTgyELPTrFwpdwF1KQE",
  "key25": "5PuvrUjSQx2nECpE1C7f7YLbfW6eJgXMPeFnYdkS3vpRjWXV6Y4uuW5T7AEw1mftpxDYqYUtfazypW8GgGGHxdT1",
  "key26": "5iT33hnr5HLDpPma5FiC14VojMgQ8PjA8c5hnziBkS7WZY7jRgV8G5qTbr86zKow3HvdntZupYEfENKatMpHB7Bd",
  "key27": "64RVmY83Gb4tXsyh3jSWLx2jWz2WeUAGb8twKWsKZugbXUTpmQrUQUb8TLoWERvGSc2xaHTTkmTPoZHgeX2ij9DH",
  "key28": "5d753Sh34LkiGuvzmkTG4igfCv1xojFyYNKWvc1NdVzEM1d2aW8WqyGJpqWitFp5gqzJtwvBJBqx1rWHM3q9KTbZ",
  "key29": "4w9C7WcCKub58fAerfvf889Li79NPuBVEkQhA93ngyx844eGTWGMpt4W1okti3g3bU8tSvfx2c3nky9qR4BY6KrE",
  "key30": "3ovpmXjHNMv1AQeDzbkmXa6MRfRNz5AEfYrpyV4RdhhVTVQyFc29sc8q1Bck57bVX6ZBZju1XdUyA5XPR44QksKe",
  "key31": "52DaZevEatrYvjaW7gxXSdfLTnmTpScWPSsBTaov9MfF9zx8qcu9KETwk4SgQv89ZfP7QsgiTj3EZKJ3nLPXo7Q1",
  "key32": "5tw8LvXW8URZmEQKmwr7kMVki1QuhXZAfTRjjEV8KAnitYd16ZHF6oZPX4w6HhHEahtbywwE3RAidKSFVFJKyGfi",
  "key33": "jXtezJMhCtetFWT3cTa1qqCnv6Tzv1E738UTttv3WStfZM7MpDVUkBoh7W6v6Tf4ojTkfDCkDDcqNf5z3rTqKEu",
  "key34": "3xoTRqRaXkkkq3jz7yWdXqP7QEFgijtT7xSmPUch9j4uT2tDSS8SAKE71TQUrUdYaKWF4Lw5onGKD9KxYgE81Kme",
  "key35": "2xAz4vSUxbfLjc57eVXwL8aQ8bXSh41MZmtnX1DNPM8ELn9Hmjk6HS4VeRQwRphAo7sa6sa9yqgKybizcgYF3aYE",
  "key36": "2FBpJHEC5ci3EnJiSBY1bhKqWoizEFfTuH7Yyy3Dg66SwKEyQiKBaUciKKaJCEZza4i2udjrk6G1ZpDCJQv5FGty",
  "key37": "4SpWz3kmaqxoUaixMpT8D8kDZJhNMbM9Pcde5mdxftv2RSvj6yik12ncfnUuo1nUeNo9vkd2MJNP1b9rfVwk24iu",
  "key38": "3drwy6us76KWueEoHMe4jTBoAFus1gGsJYYXTqaVRrPcoTXfafamvmqNmPZH8EyVbob7ZN2sCxuRFLw4vTARbvTS",
  "key39": "3eqfhxn8ZKENxJ7dKSRhLrr1AqyYjmFNV8SiXeij1esyMaDDhveSbvJyutBTyGbp4mEy9ik118LVXR5dh1ZsgLa1",
  "key40": "4Y27JGwMJ3amkehSm8KB3qBn7xFEKhTL9QFsqcBq1zhprLimcPmzGN8RykRK1DfLSufTM9jXMdcZu5MPR9Q6hB8o",
  "key41": "gkMLRiZCjyHXQxi2efkC7QuApnsJmhb8rHP28B54JEJa38m9GDVpVdSAyCUNo6wyNsZxE4M2UW4rj7JG7tkiiaW",
  "key42": "5aujVvBHVavfshnssJD5F2xU2LgFVamuLzMBJkfeamiHfbnQAMFActMsv8chyrMN6Uhbv6K9yTmgasqFYpRgtZHv",
  "key43": "2MgBtXgc3DmWuQDvG5c87GQCgeqtuhy4yTx3M6cso4DWnpsEwPpwdrgTTB5k253qpq4NWxRXq49DpWp61GdBZpSG",
  "key44": "3Ww9sUMwQRb5zKr27Wtve1nY6EQK6SAMBxTtdwxpNfBQ7pNKiCLsxujBUdneA4ZQR6sAY65totPMXMHwKRaZi1xS",
  "key45": "4tyFmFJZeSQiYSfC4cX3JxqUJ2CLN8KpLtpfYhhnVLNsbgUPT2FM2J2X3KfQcC9mHNmRH8nh89yN7GFV86AS1YQL",
  "key46": "gBXXywo8axsxeXmAowNh7pa4gyptMKvQ7oL5NSqNXr1qHunFeHdSL2H4SMZ1ZBMf8k5LL1nHVZpQHGMVecqCoDB",
  "key47": "2mxqgCYykniwJVopoYHrEAqUiyjViMMwe5eQdWgKRvLmWUB7NgT6f9fV9z4mTtYQDRF9QB8ki6cTVaaYHXTR2B75"
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
