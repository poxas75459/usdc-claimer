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
    "5t1zd5XM5Cwe9vMy4eXrfL7xLnnvq7fXJ9GYNwfBuSCzQDHf1LPnCCUdhTsd5FddMVCsezdZF3s2bAdCtzLz6BEE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25LZMXNfHX2Cy95p4FeVTBvd5ZFzo2RUJn8DtKdzkih7h2LDBMQ2UBNktFwR6mNQFzvgxZJnujg9Gu7gBBMrSNLX",
  "key1": "3vyEoNEyPjsxuLgVqDaNQbbS8m1JkyvjYMtUQjXcSemWWp6LBcJysFMQyGd2jNKDj8rcBjMopswQY18aGWaofwj3",
  "key2": "3h1bJeAqVSpmTkfBEXRDpmXd1fkDZ4KgRMgK8aqx98q71tzccZTSC7btjF3HvuAavaMCz76fLnNjC1djAtqNYnDR",
  "key3": "8rZTGSYuiw6dWsuu5fR8EfzcVnQxgLmVWMRpeweVh7TNfTsTa5CTBxYJ5KMKANVattjVLX8odvTk3GqVGCLJi4f",
  "key4": "4Y9dGoZhQcnYmtQVm2bKfbeHHLcT8SmGbroPEs9K5oFyxidj4jdDkBG1PavT5qQnT9mZGojpDgfH3i5EiiUGZtnU",
  "key5": "5qnRQ1B8AmwQfyiPqhgK3MgzxDwX1LxnroLP32k26z8NaFjGQxLhQMeJDbBycQBtvS8ZJzrDwgoKZQkP55r3crxz",
  "key6": "5Mm24yuaawUnDhSbFq4gYhmYYDhBRTB86z8AjBn1WPbgvxbpoZ2jKwv94bPQpBcGqNvXUJfqsVwHy7mfYFuTJmk9",
  "key7": "2nfF346CgRqFbWAALCHAqnipZeKryCzVFV3zvL3TFmHqxRGwLVhG1bXcqX6yyGRHfDnJvNaZvz2Gsnc2HEZ9hHyY",
  "key8": "4gn35yas6p8CaW8XxiwmUNoMpw2TBqkyfHvHTdW37i7nTQi2827sogcXrEAHdqiQZf2XVs8SeDdFyBLnXWPyU3vM",
  "key9": "34ps1QSVEvtsUqGwwiPm5kowXAaRsBeGT8h7j1pQK593TSDsgwSjRSHwPtx3oYiY9BoeVTUAWPQgouhuKxUiDD53",
  "key10": "3yQuorssnfm1Vnat8qurXSXXTSF5XnwE52gZWZx9nLmZeExy4XxnxdJFYGEDpA9FsdhQnKkdv17rfj5kdhhY8pYB",
  "key11": "5NTvp961QTHuHnuyHVmdtPpZdqpgLhj3rXezTyi3db1pmRtLwJXWhuX2VmsivG2cJ6ERkhxY6mTU46YorXdcP78H",
  "key12": "dFYQChoDq7r1qBadpQ7qAr8iDU6PnLzvCHSqh1DXDbJPn6iKcjWxxXFw4TYMqxfFsRsvEURXheetCRBzyMeX3J8",
  "key13": "vckTTGTdTLxoUiB1NRSLphMsgvAj53hPNSTkyLrHt1fNoG4WD8aNLCfpEAzsBc85tZk8muHJVZG6CztoXBcM47g",
  "key14": "vSAhqgNHGvGP5Nh5cVKBDW4ghqLyXT11ZTcUEfANDUCPXazD14AEUWRzhAy3ssXcVG2UR9rU6sTAo5pnuh5VJTx",
  "key15": "ogPeTUtMTPfXvfoSXo3eVhkyYk91vLxy2U88vLkfGu6Qi8YdRK9B7PXVWGuU7GWE6YEQxHvcnyjpwPmcri7VjVX",
  "key16": "4dT54FLwpihweHDqWRyJLz1TinEEJ16bBW4aFBD7eqA5hhhc8yCy1qeCrky9Ze1jsb4gJk3KG56PNXQ7ySYoRDVJ",
  "key17": "36JymcgU5MdwqUM1bZY4xCrhyWLPdw7796EA6idUE9WYxvYTrkc3KL3uMd5F9VHFMH1iag7AgJPWhAi7v6UaFmGs",
  "key18": "E3dKvuDB5KruXQ7NRfZYKQBPx5PYHke4puqnhwkMz9fkSVqc44hiRceouSeDuSkMVrPHSMQdGKPMq4JqEFyk8co",
  "key19": "ghoAxcFEQ5eNuVaGt3Q8RnjXa5LVupHKmi8rzJAuPNjerZ6WzPvEsenUwnxbH9tPLhmKHETNRUHNRDEHuHHCCFp",
  "key20": "4w1L4dVeocJdH2BLxaLLm5zKRS5KTjvqAAiR3HVfYQLwxFXC4hdWzhMuuJWCNppVW1KYv3Sg7XeL7fNDbDfY7sYC",
  "key21": "3543Fh8UNoE5a6o7jSjJmCvDJAH1izjrMaFsZhzxEJuEex9XLW9ozP5Y6DR4m88zDTBKknhSatuEBMaeLgL3QkE9",
  "key22": "5JNqKg7aLrigRim67X3NwFGp363C33wdW7qYh3HQEtGpY2ENomHUR7fwhRFDNGVfftqfm9VLu11PCvwvx6jV1GTf",
  "key23": "33bHuBgjEUPJp5QqzSJriXyUv2iTJzqBmskqf3AdgoJjZxPSHg6nnmmNgjaotkMhckFn4nGwi9BM4jmUUkMHXyuh",
  "key24": "3AJkjMiUpRjm4Ketdi12tgauBhd2YSJzSMXe6voqUXjLsR9a9GmBWD9afwMpGiTnFM9QB7GmNHZ7YGWDYnp4gRgX",
  "key25": "3LXc35FXXBqmH4mBex8SR3aYF72mVtXcDgZ94UuJCSJiV6Wpvo7op4JLhz6E8wGqpbwKtR722KovtYn7eoLmFXmx",
  "key26": "5P1f6pM4mgRmxRK3Y4QGeEW7gT7r4Bz4mkcsw3SGzjUqoAqktbt7MT2H4tLRjjK78DSUkBk63Carad5KgcSW9Pyz",
  "key27": "4yX8UNXaby8SjE8wxns6xmQ6WN8pgfb24KwLmjTUtemF7mU3UwXVz6KgbSzXeU159pjRFNCYx6kgMNY4BcYC5GeT"
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
