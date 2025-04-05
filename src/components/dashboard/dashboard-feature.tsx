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
    "4GhxgrDQNfh7czStJdRVf4LHcCzvE7LE75VXboHihSgUn1gH8EZT2bXPtjQa35m2d6pEGfaUjUZ2HkPRgsA3o4cT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oXHcPy6KBtfrEPvP5kGTXqmSAtuDPZqJiFGqq2yuBha7WzD9CDYNXriqQTCkeigMYmNa8Y7M4JQfsh53j39UmZ",
  "key1": "sphJ6XyAZMYi8HcoJLqtNtM3fuAWkCGfwof29AxVM9RRvrqkWt47uPru2icpFBXg7Vmft8djhLKzbMNBtS9x1ds",
  "key2": "4xX4KXBcsKuLKLq8xFnSXVTGbuXMD8RoHk4JtgMT4yPYB3iwL2tEZcNQYGVYhXEKgy3pWsKs2HLsSXamMURoiEeS",
  "key3": "3cPN88MUDQAUwW8quNitNsMtzbbRhgPCtEVzNBATQffffBhZJ6CTAhvKX4B3Nes7NzuHQ288Fvx1rhLXCzJTeRxo",
  "key4": "4YDtfiYr9gjYoUQ5CFdqp1QGhGciMs69beqRcPfMLwnQ7z1zpubUvh4efALaFZ2dSQvyd5ExWJ4eJiYKbXmyzZDM",
  "key5": "2ZUQyd9QGbmPqZ6o2kSZBANayF326bGFkg8UHWmVjprynV29kroXpDSrdy5U2mZQVHyvoUGRGRWx4x5scnejPDVE",
  "key6": "S3oo6emyF7s3FsURKDLvbfinBxYPTHbcfx6KVY8UhfY4dhspSRM6TCxJhiRG5u6JWntCZBHs8MZx97kfCCLHBPo",
  "key7": "2CcpHH8ys9PUV8cQ7jpJVmbtMdg4CLvWUMBzYzmdHyMXGYifpFEMwHohADy6jvtXAwBju8Tpzzkxg7hX8KcmQ1hj",
  "key8": "4CXMZ9aMaB6uD4dZX6PDTp23ECmpWYcpVxiYtsd8szZpWTp6VjKR5o4adrHvsyGh7Kcuuh8ePVo6hjbDbtTvqubc",
  "key9": "F8XphTmuqR7c4yHNGtSAYya63QyuGmQ3PZ9oLdKwWYftApWmrTp6bwi4G2XZif8EK9sg3LYxd273z4Lr12rSxnt",
  "key10": "4YeA2uTZLJz6qi1cqKbUvnWpHVEorbpUie5MW7SLE8pJy56NhCtKY7Z4ML16WXrb5296UVzeQbYqtQxZqxkwXtY2",
  "key11": "5U3oru4tKACE6XrdsLj2b8Dc5mD119RDs1Jh5a3iocfJ8NnLtnm2SR7MqWt68AZyuiLqxhxoHMoqToE5yt1a26ng",
  "key12": "5RYms9QViTaw43TK3pFNzcvwhAfJnMT4Q2gHB6H7qVkzCRe49QxK5qU5DtpvRwvJQeBkDqaiyK3v8LJHe9GRcpVZ",
  "key13": "2qkZ8nMyd9Zg5HnFcWBoQmYoBadaqw5uKjEYVzTZYR14CjFmqS1R9x3irJz2UHh23rcAhiiBUpYetrP4AoWX9FUm",
  "key14": "2SHvjuTHc88C1yfwAmXLNfxD15fBFcXweEmmrqyprRM9e6tf3mZPxphM7mEgjPDaTkWYiTfV8eCdDi2GRQsD31YE",
  "key15": "e4uvx5Jx5mNKdCb2P3f2WBEdW1mWdn4okAJcdWnwTCWcDSmDoXsWX39xPTHDQaKeLBu4kQAv6f5HrUSNqS84egL",
  "key16": "PLxYuJ5LFwhA2oQn4LvYPHpBcNyUvccXZ6kmUsc3BxoWQD6JtkqtMJPUYg83ZN6rUhvXrBSeeYnZ21YprJQ6aXF",
  "key17": "2nYF27rcN5JKgFQwG8khbNwvyBt5LkJG2n87mX9MkcD4spo1pkPDCQwAYRmXSLLQziJ3A5R2HYZbCFYtHCKvw6K6",
  "key18": "3vddEbWrifiyot39DRAg1rATbqAAUqbjXbgGh9jb8vCY7gnZJPygYCP9prhJwig21nHtQL3xYBzVRy1f7ruUfz3B",
  "key19": "jPeZtcpRX8UXYQL5JBgtWzj6CBD6qGo28xkMTnKvmxR7X84jxdVkcXW5WwF4Xy8z5sAqogyc1JB8ixGwCw1HqSD",
  "key20": "3w6K6YVYYjrpxY6FSN93WfbgPLCfoEkUVseGZmsK3koaHQoasaqSTrCV5oi3WY8cGKfjv4tbLaGf61Y5WtRGLgZ",
  "key21": "2M5nfuVrjfZqQqxUohBfnQsYaUgwHgxHHuudmU5rebLgi3T2YhFNjXQYvMGWiMnr9pVKQBKuFZ5J66HjdonNyNoh",
  "key22": "5q5qTndxPLSxewcxraTq85EByscyqDXua886rViKh3a6Df63rcTiydgEuVNKLG3X4BS9k3pr1mWg2h9mJnyqhZXM",
  "key23": "Q1orjmgtXQRjzv1GWSpz6QbWbhYZjxTuGDw6ZJGm3kkGy6bTVshZaRwXaKCbBvTU5wBqhd6UXUqXXtMpmNU2M5d",
  "key24": "21dbqLxMnab3MT4WobpAZxDFEisB5ddGwYiW5oazYDeFVtNrzvpNemedxJxYcGXHW7SgLvPGQHb3N8HTWdJWSENy",
  "key25": "5wzHrkcEQxnPAzuSUR5kbthjkxj9jAvUuzFv1Vnr96rsTe2bNw1tGcUCPV7LcKxTT4QyefzMvEygecUWMPMqMBBe",
  "key26": "2by68K8ygek1qut4AmXCJxKB6EyaRVnY5TqND7JF87L2yJ8Djy858ty2hzT75MFBpRqRRB1oaZwEEnCsqQHqpcLX",
  "key27": "5Am6ZNVGcpNboVWVVyTNh7MYBJqSzgusiaD6GZpMHqXcnHKKmN7GTTDdzN5rrnSZXrD1N3z9U6EvpSoBuxVamzrJ",
  "key28": "4SpumVr64mn7qWF4yXMCefnaiLxx63cLPgxsXgZ12z7Sey71sQ4ykP8aYobuGYhfETbjX9ZaN3bHwmUsiwFeQNFS",
  "key29": "31QEuD4C666FfrUK5q1KmRV7veHMbFWrwbWRWMS2nyP3gQa71uBtV4AL8b7aWP42EJxPSuXyY5oGVia3bturtfk",
  "key30": "DZrEsqZ3RyiqY9mM45BCbbxUgscdBHGL6kYKFhqbvsu86VSacPZDDcF3edvwjFWLq2xHdLoL9XqUxYaAH2nw5RV",
  "key31": "4AejAjDWDWfkFvePemPUoq7N6yzYTapg99pCqRAejyenSyUjkwtKoW5NSzpdTys13AEPDAAciPZm3JErzvdAjVEK",
  "key32": "4uXFiVbD1Pguo3MUFC9V7PpKzDFgGHQ8BgDqftkm9XgzAk4w8NgGpg4oeo4gTai15gKp7m8guZwC1A7nAqpQ49YB",
  "key33": "5i1nAFscb4o8sZvjPkf6gZvx79WTRBQ2y9czK5pZf2njDxvxxFLV8aUCnhG1ucFLEZpvRqQ7o97651uhS21ULHsZ",
  "key34": "9yqxzPNYMxdWR639hZerwAWt656SwMx9y3TdN5EkREX1SaTt6RqXXBfSNB7QuNqLkgTeyi6KL7JL5zZc29uwrix",
  "key35": "52gUMWuJLSymCiE6imdjr7VVomKtECdAXgn6mji2Mq7hrxEWTp2TS4dnKstGbzn5Re7RgxwtRH39WaPigi1dLYXv",
  "key36": "3VjTPr7EM786zZbj4C5bmHxaHnkFBufmTD9HYUxDqJ4EgMpD5fqGmEFCqyPbnwEkrWuiC7XkAhpMojiyUdKDDqzP",
  "key37": "5X85eUJGmpeozDydwehdMHztzJBJKXGha45ZYiYagijY5eAEXU4yhfZwVEeSqBnbtyXqoUKBaXtkLRRpxsYjEkZA",
  "key38": "5T7xzvoEVTeeA19fpSvBFJSt46WWFJpzcn5GAfnv3Tfr4qAZtJzC5LQpSLHAYRxgUuCsePsuSH5qFxhy8RZNN1Ue",
  "key39": "5BzGfJnM9DuKKS6fELz6owy1Wg54nQ4MqPjiXj9LLmTsJj5f6FzZ9UbhKBN6dCt3WAxNFsCz4ajw3JvmMdwTsMsJ",
  "key40": "4MJ57SiKnCoHbL96JqmVFbaFJP8z4vVgrAGz3hYBeMvKAMLGrfgsDUKZhyrzJAmN56wigAqti7BPycQkRijcVqou",
  "key41": "2JyjP5v6MJCjEeTLToKMaMmjUkEJ85xqu7fAxqpMfmw2861Vh3gfDvB8Eau7VXRudiyHKZMFGcGSSekbWDZiXpWs"
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
