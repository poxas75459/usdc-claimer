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
    "2XNYNP3TNdt2QGxeUJF89hRYtHLbkec26fRCJPmLA4qhPRgR7rdzTyYXhoVv9L1V7rf8UdkEK36g7K63k6AepevF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UBzKVvebhkUBkSrqHzdLxctmeDrmpRqa2DPQJ9vTLZhQCVgKNVNGcrZH1Gdf3UL6krAkNpbucgTWpbtC8xHqK5s",
  "key1": "2uUkuv5XiaVPYxAUV7ij2uQtQSm4xd8BBvktMBJaUubdLVKD2SmoTgY8Z1gzf7buGbp18os3w2zdGc9FpZpicZCc",
  "key2": "8RJzebb7GaL1PuakqML7LW1daar1jdS6LTBto3Wg9gxZGUW3m42n8YTERtnvpwgA6yTj95bCEagZmMHWsuD52nY",
  "key3": "2Ap7ajrPFRZSLm4fCG8kZUeBPGkZXMt7H2nNHU6kQBJKqVDWkFCktaZXedseJn1RJmrjiNgWxqA2rnGoRKq9yATG",
  "key4": "4dJXmyDoHdE5VjH9wv6H3MnSpuYCGYWRCcuHWam5CWamZp4ybA1kDenPhigPigEj9qzf5ojSSrLkTJVXzFJkwooA",
  "key5": "476JE46mYLPPeLXwM4Lin2z53WBfgRg3smmARkWxHoivhndMkKrPfJyRnApJmnJjipXWVSx8PMQ6zAA7S8iMbTeA",
  "key6": "4oSqMGJoD3syRowz2GTbrWPgqHvLQUFtYxXYWqdtYgeYy5j1nR7t49uCMJDWBVPCFamkU5FA5aXJ4uZQ5wV7aT8J",
  "key7": "4dsmHFyGiJHNq4JzJfAbyHs8Y613o6xAAoD2bG3Qzuy9XX7W7Ku1TfoxJfsrzrgpMRZTUqqaZvA679CwYrHp2mkt",
  "key8": "4HNoQwPbE3PTXAikEr6Xx4QskrHZo5fT4jfq8vm97kbWtpGXsFi4Yjxrw23XHYTiipjf7TQPgBp58EAyzeQ9Pwks",
  "key9": "5YUYFTnXDqwqAhzWfZAGgLtaTBQB5iuGiMgm3ncTVw2jiTb4PadCkJ3q64Q8j5nyBQ3nAKEJKgMJG5qmGrKjoKQZ",
  "key10": "4Jivp2tbsG3EkLp5bnrsN7vfL6nyguFQMibMf1zshjoUagUox7DaHzSHKe1JQotVfoXgtEB4he3hkAxCE4HDBu3v",
  "key11": "1LGW85bhASiJExWtGKxm3tjhuzocKn6AWPLRBxBSD822pNeu5QdVgNw5vsNG1vLJXVwes1FecmHUYvTqqZbvU8C",
  "key12": "5wjpERuGZyqfTbrp9rj1hBi673P4YcxiL2CFhEkv8LL3jooNw97B6y7jvEGXChxxVc2G9CSErmB4KkQAeMvcRAFa",
  "key13": "3Ljfa1rsjkSex1xHoLBALL5rLhKyuk2Pjb7Yc5XdQAy1iUSqueZEYmUyHM6ZY4KjphbbcVXRvgU3aY7aXaUH8MSj",
  "key14": "vEWcDvrrZ3QmgYtJh4bHpmif33CU1yM55q4CzdQ2d1sZo2Kk65W2DnbqbvvdvnQp67f3hJGcZreTtu2j4kUzUyM",
  "key15": "5F214Gkwt3k17F6h7Bvg5a8HZD3pT25oFHXL3FysEsSYXAPdtpURvmjTKqhXkaUsU5upTfvKA4PJRundgbwimqZm",
  "key16": "4V8n1H8abAop8eFYR8XEyazuZCkKcFuFYWZVc1A6buX1jQLRx5bGsmk5yzQpQaX5XZo5zyo9iMFRLbU7oWyr5irD",
  "key17": "abRdXygiAaegQYKLPzifquEGJh85qdEDeAgQPRYTqFjJHftWCM7ccDM5NaAdTvEQdxcjjDnEbjdyHXntv7zzuFM",
  "key18": "61J6Db6KY6douUpUmVz7RtVrSMpuVr1Ma4zT3gVTHdWPCnqiYU1snjgBJ5TftA87br6B5p3Cx17xQt4fbSSo1bjz",
  "key19": "458D41N6jg2XaGCUwNdhr257SwGoPr6PU35z5BqmEZ4PSmzbhp3QLyBiT3U4YVYunjXUm7Bdmv5FTuRAhfzYvHae",
  "key20": "52V3AZYtfcFYfe3Ebbti7GwMZYBadvyXRm4a6uRgkdujn1Jrki5mhu5nts8MjF8a7zjpRfyhKz5qDTEZTLZgP3uo",
  "key21": "589cPHEuxUCNutWAHYHYLbSvZNxo2urD7gb9e2GEYuWx3MsHUzt4LMSF7Bwx1B7N7dykF4qk4bNYdsU1ke2zxTMT",
  "key22": "HzykSH7ERtvtWxqzx2SH3Q2q8qcqBqhPGULb8zpBJ4y3QHCMNQ5r4gRpsPcbX564MP7rs6ymqU4hYoxyH6QZaJA",
  "key23": "58NLjdaF6ZoZz5EcTiD1ttQsuhMnDCkMuNQQmCummDU81RYafcKBfdG3ipmyTmFt6odeCsahRgMCxmwUqx3gQXWi",
  "key24": "2WdZcjvKVkkHQQNZgGCqntWbZT8wExzudUxrVGeodrsV8QVTKwgNGM6jtGYyXmTptTUBn8DtCCKEhrKB9xKEhgtr",
  "key25": "5Tk4TxCLK5acYc94sYDW19zKLaioFRKjZ5ZxtYzyLbH4sKkcT2doKA9n9nfuFUWAML1s8vpjz1wTHMyEbEQoBZsX",
  "key26": "51S9Jz1QAts3qThNpgn7ppoXjakCoiCTQjBy285je8qN4aiHeRQJPXvit8Xk3dNVmg1e7fBch2ei9eGwBxFDNgEX",
  "key27": "4XDQM6YEbwTN9Js2rvrwvUg6pwkgxVwCtGhstnG4YhmuJuCG2Vg6gRfZjrwQyLFnquD4EEnptLAzWEZhMbrrdH3A",
  "key28": "3pvehBLYp9hyGM94zdP5T7NDsPLdbG8hbvQ443DhAojyfm6cygdvna81gcrxJCsBZ4vTScJB5PGNgx1ghns2XG1W",
  "key29": "3uykZP1BqgVY6PchCRMr8r6M8RkHZj7gYbQ9mvKF8YnbM7yattj81DPNjD8r1XxD7xzeB8texXSsVAznMXPAB1Uj",
  "key30": "51JVqJhz2U3wT2AYM51mCkxrMgwFfFCq2eruRjnDEdV7T7j5H3mmUhaJo2dg6uUn3EsvXV2E53MsPcBxrBAjtCK3",
  "key31": "tZxNi5AiYZ9ZWpQkxYsLVwvQtyVXwB2gHypTWkGL5WzbvtPMpEgwGszbNi41HNQMa73TWb4i8um6hfv2ssam99o"
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
