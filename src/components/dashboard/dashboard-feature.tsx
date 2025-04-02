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
    "4kf2vBmjSyiuV5ikLMGkr7HAA15bHNYzyh5yFDcDvyjee9qQgrk1LDhyY8g23ZEy9WnHoPDYKrjVPkH9QgtsEHBE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Xfoqh8Hdv8fNyGDxrrdVinVDndonGCcb83uYSrfV4PvwxoLKdbMB3KQyYjouCJwgVacxj23Jntk6zrspyNkhrj5",
  "key1": "2sMWiQBm1QimBdURvMnL66CmYvzJ7fMFYMm7aFnXdGp9Vnk62no1Gbao12pXtghcUkrawLoDuo76N22Jt5v5z43G",
  "key2": "4fxYC4Q864ki7xf3KcMwsW2uecVZsdisXeJNUQ4ETQ5rti4apBy9HnRFT3Hox1U1FaYKrR2Vp1St6GwBbREdBgij",
  "key3": "27woG6enF7XafwghWyFgPA88PKzkfPZhYXsGMuqcwAycRZNQnE5wEohLnrSPYsPwLyBcu5NsVVocf7twevc7uMzt",
  "key4": "3SVzPY18qGHB1cqdjZiHY1NLWDh3yHGT9E3Bvaf7WHehzZSWHqcXYJaXdX77NL8W3hRnxme2XZX9CLsZ6DmL4J8v",
  "key5": "3Vb6967tmuZeWMJHXSbgUJbFxpJW5fz3NhigrSJ63bqzK493d7kMaEEuWZkRLrn5jdygErmbqM748JsnduQQK5B9",
  "key6": "2ErjuCvNdFkDggVeBLCRdR8LHKgwBv31rdTrgCV8teJ6nXQjkwXX18LCtirMb8NDAG5bYuTEXcrJNT3N6yggdL1K",
  "key7": "4j3G2xupBfYkWdprgk3qzvrTehE7M31cbvFWwaixhbenpwBbobjcg2RwfG1c7b96bRwExGqSn2dZ9sFVCHmFfeDi",
  "key8": "47RzUXQi1G5VkdwEc7PQxmk9KMCNpzYFxhMrpwU88J5jntNgpEbLkJKN5dQViEU1UupCFC2iF4ZnqpPbXpycXTj8",
  "key9": "4gjtW2gbXwHzBRQdY8X8izA9YsndYLq2HqmXi82yp5uaoHmXaoJdBLiuCaEr12kYRJ3azUX8oTZcJDfUJgHBRuPo",
  "key10": "451eGAukd537emG5oaqhWBHrjYnBg9MGdsQ2BKNjv83ckFQyuW3JszJ4ZD4UH52iFhYvXLxoRZALYWFM5kBvmpCQ",
  "key11": "3346fqVbXhVZA3kmLTjt34oXJi7jCMHtc23FgrHkByyoCd6dbg5E3f7GX5AfrHppeRjBqp31fCsWgKwoF6Qs7X1w",
  "key12": "YFwbY9ikdPkw2X66rPJBeSwbnbZFNbxQFfU3T8WeqABVtkkYyTd7soDYetzJxCKrh1yH5ZiMLkQtcZsqzPJf5Gh",
  "key13": "5pyqRDmvLCp6ozrtXCicytjGFx5gkRjBYLxSYr7dHJctBo5AALC4cfsB9r9er38WzJjjGxFjygUKB6xx4wJF8x2m",
  "key14": "2mhof4iNpECrqM3Bt3HnRpeMkzx4vnboRBQ3aefAHtDEQow2e7p1C8eB9HG6Voa1iFxX2dRLLz5PVoCf9AWDx65p",
  "key15": "2oL7BWdKjVpHKGtDsSEoauu3UpZQvpfyoymGcXQusyueMAXCe3XmDuPhkskcXppHmAk7stiAsGTaUrtUSFgvqDv4",
  "key16": "3VXYzqmB529UWPLJXpLQvHK8qskQYB9USkzrNt6fidGiErnxzGZyA5iizMZE7j5NJ8SQZfR4rsU4M2WRMpggVNdn",
  "key17": "4AEBX26JPUARDiQxdtwsk6HMpchT39umiv6Db2AXM12vgMTzRHkLXUbSdspwHVWRD3WAd26Nodt8HaVdkv9hJoet",
  "key18": "2NKc97MqAHPuVZpoJbguxZ1pxUNyCCjv1UhJX9Mn8G3WqHmPpTWVbYeJqroi2JLJez4MTQkcrxNgAneeu5eSkjup",
  "key19": "juvSFKevZyZNJw2RsKGNsc6YAa5svbE8Vnu2g9Fnktt5jh7MSVFVeWMYGc5PN2BgoxVomWdHkchJjdzXkf3n8o9",
  "key20": "3WCNeNmsU3CnkeYy5h13YF72ZQ2GMxnwMWqYdxG9JJ1RvBpL13dQpxwEVjmq3nNxeCiMYv31yfecHyd9nnXg1sfc",
  "key21": "5W1GQ3QV2Yzr6zctdWWZfhXwrogk8F4ke5VjN5qRKyYGGQoKHxkNAf1uanrizR5ZiNR3C9FePTpghmwxv5GLYQa8",
  "key22": "4TUXm4j2VaVJifTgGwkX2xVx3dXggRcsSGKPgxuriFobqHXu5Tu395GkQxagAzo2Wf49mWMKKYjV3FBfJN3om4D",
  "key23": "36MM4vU2JsmCsj4yhjbBAW2paBPQArkfKenKbzpBs4HDbp2sKrvx1jtQKJZqhVYawXctfM5UTThqCYi2cSPh6nGU",
  "key24": "49wXveorEpXsRVNjh6TxQqDTQhnb4axuxqaRcGPGuNMfwfbRC19sUZPaFfoYSopJSf5YUqR8nX6yRPs89WdFPCBE",
  "key25": "2Q3gHhGG1XE6B7tP95E1qnWfLdjkacvmrdV6tRD4gW3vw2Yyj2QDgP7X7ph7XjW9h92ceR16wEztKQm2j3EiMRVV",
  "key26": "58ZhzYxhwNmEJU7qx1hx7TqrNZ3enWBoMPNgf2yVcrWNKwsZts937jWjo9WExtUCCNQu2ifa2buF1NUr6ut6DFjD",
  "key27": "3t4U9N8KDpWJJxZCGU8796GKr1JeEUMJq77q6KcDBChbTHRt91QdRzFyNV6nBeoXRbA17kcRzQMbnc5qr4GQiJ8C"
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
