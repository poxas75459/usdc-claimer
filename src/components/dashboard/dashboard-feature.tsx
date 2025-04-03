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
    "3qrnD3HPPrakBs5uup8VqjjnVMSkzhgyWvnAkNgGZXznGFr3CTRbpw7hET5ZQmfpqwYkjCyX13UGBnMPExJuh5Ag"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5csDsoh96Zu9P8A23PbNRyaUB4AqHidEsYdf8uJrb1fo22M3RPWqKYSKAQ2uAfuzeRABmDy44np4P4S3Pnwx52f1",
  "key1": "23B3jHo5MKTKgGnsoAidnkJm2MpA5RAm88dw5e6Hjzh13acJqpzr5wgQRqYmoQpo5sGjzXErBAoTP5uVBRVNByzW",
  "key2": "5a2ECzmmDaBj9QsB2x9xxUcNz3Xh6Crj6x6hn2f3zWe8xu94w7SJwYAkidkd9u2aWhHvfErTvJ7wQsBQ8KNFshgj",
  "key3": "3p1LJ1DM7i2N13AUHqht4VvbbAcZgySbHJNrHU6BrZarVHqaiSB3SYSjhMAwJC9CQnrYipMvtzU3tZfR7y318gJm",
  "key4": "2y8Eq9cxMVqbBmQDXqLBPyxLEBVEzQznwM3PnyWT53U5ncbWeC49PwJ4YVP9aAjgKfnuGTR9eDqE3terWKeXjbis",
  "key5": "36TwbQ4C64FzMhYE82hAbccJACy6Zgo3v688JFrfF6TAsK7Kh7XFD8qSGD4VJFiB7TNH2DWeicpenGwH27iBPFfs",
  "key6": "3Mc3iNTBhECWiLvvbgWbJimhpmZCwXzT5ZvZt7X89eU4uPyCRvgvhZHVMyXsQYQxcEEpdS1NLNZnfwMzAKi2fzJw",
  "key7": "2W7s3PM3LiCaMgvskuGNHAejRc5YQBYsSuFS2yvdveCLhnGNMgWE8q6ifs3k5A1Uken4v48zSL7ij1qZKLFNed8",
  "key8": "4QYu14F1mDBK5nuspDskpBn7fefgWhGPgScQ83rJY7zE2mZPD2WvUwTdiqQfWJ1FZZzcuM3QsR5ekgYMpdxoCcbR",
  "key9": "4qRt6biqmTxeDjEBBhGaqd3sy3XE5p7pMvjwaPrcDQSCEm58qDmAjJdrwnb5bn364X8QR4je2ZQ9RHqMPx6M5NW6",
  "key10": "4DHatBVgbbpRc4NEjoR1KYjZswoZQkLwcZSBBydk3zsNwyYEXLJaA5eQfKxu612fgBGqXEjixrdYzvAaiGzWXy9X",
  "key11": "4J3T6YijcijR8q9Zp39GSMN9BTvSfATBSQomjKnKAQBeRiH1Y2xSnU2kYMZyYLpvnTXeDuPTjdgergy9e3Rm5SAB",
  "key12": "4cWJDu6bQMtHFPqiBpxu8vFxKvWjMbpvqybf5QRP1FjkVZezUwuPAAEaGwAfhsbbUdww32xZha2KuMWW3Xjuj3Aa",
  "key13": "4fktfg4jRM5tK41CCof7ekTphL2hjZ1ppPA5guJGyC1b37BgYSeypW33ob8zQ5dGjKav3GX75fLTjJjeg69E1JLt",
  "key14": "37kqEZzRUX3Rhm9GPBDNK6TPzjcmU3fbDvCAonBw5KsFyyr273MfJoj6yKTFvxwUcwDequRBApE3Z22bfbqVNJ1C",
  "key15": "3k5pBGFt9wDJ76QZFKnYFc2jBtnAYZJjGpCRMyvX8xzb1GWTZSzYUre6egMFovktbkzFsB5oJ99dq1V4FVpvb1BN",
  "key16": "2Cx4ia6jsbZtBiJRUcpYSQqPjNN3GZitF5Bz3qpxxhAoXwiB9fbinXZE1HbHibia1eCguzKrm8Kt3SoLBwyWQcyk",
  "key17": "qbbsuHPThqm1rwSX4uiLz3uuVo2ZSDDSwDH1uwcYA3vTcG3EC9XCEYKV6YmRBzux5sQYjEFPnrAtdiNx5abj3Df",
  "key18": "3euoiSTzvV3Z7KcTXZ78gvpkW55xPc2APcCeXBme5v8F7TKibNZAQGCjb8WoPHnFTZzHpTxMEqC1vTynrNuWq4eW",
  "key19": "24WyhosQ43k1P8j5XWxje8v231JXtipKaktM4rHzQHHBa1MK3JWrEiBqYcUhfsPE81xfciCQuyGBkxj4v63PqsmL",
  "key20": "513Ed4tKKmsGjGV6MaatmycsSxoP15GJufVJi8yXjaNvDTKmpbY5Y7zUtzqsV1SAkV8484a5B1ro6yEzVpPFfNmX",
  "key21": "21v6vipinNumznFwZLPiw8oJcAxTdAabXkcatSxB62917YTAxhJp1GD1GZ7e8fcKqZJauP8596fB58vx79ffbmM6",
  "key22": "55FQbqNCi9ss1pTLU5aAZh1YB6qKMvAcAtYaoxrEPbjwgoCnXagcHntm81HU1Sv61Ap1cJc2jCdWiTn1eAQzgJTX",
  "key23": "x1wV8dR2Eopnt9mbckFeMBxWRJszZRhCKcYXSfT3kDZr6o3BcenZvmrbyAd6kZD6ZP5dkdPj1fVeR8Wp5FqFyvJ",
  "key24": "2kUTDAV2YuLNs7UxhFWPVhyRRCxf5R8apJEFQEdCPppphxbrTo8UAAzPU7mQCTJQrW47vpSMjtJUxUxfGkptNBQ9",
  "key25": "3Qz9mnKKezy6we7QLuAWqbe36NpwzLgt9G2jk3uQ6gsGitot1RkprpsDW7n5LdUqYu3E6xMz3vhxybx5wuS6L9CE",
  "key26": "3UKaFn55XnY5Ey6GKa9EJ2oh7U7WD1CsFCvhH4UGi7A2s3XyiNV9o6w32Q97SMFkm95UYDYViLQEcz4DBEdvV82c",
  "key27": "7oa1j9XxUfed3SbbpTqYuLsQUbuitrtgABrSsjY42ep8X9CPLvatgLLau38xATpQvzjx8VJ5sZiGKUPhhRijzKH",
  "key28": "3w7fG3EPsS4DiDF3camX8zmPR5Dctit753i1XRMv5A6Qi3wWNYgKFXjjRsKvbTUdJ3nLKE1gVYZ5n9qdwZ5SzfUC"
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
