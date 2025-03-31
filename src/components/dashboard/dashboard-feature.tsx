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
    "4ZkRgENbwyu1P78Mo5frxXJcafDSmNdeSVxo8gs8PSbZChq5UeR9EFXUdNk5PbgkGRFpFZ1h3KiudhVxABtaiHbU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Afycu5AiymnpLLUb4MWwEBNUFeLM4iXTQRnzoAMFumGp4caqjLmBZyqruT1hvowwmr4avp3vs9mrmHuYrVLeboz",
  "key1": "5F25CoXNuB5YtTudaqU87MMmjcT6cfoaEhtn4jat4rY8UZBAGDrXCNcotVsWzb38ELatQSjsYdLHksvZAi45Nwyq",
  "key2": "5XqrTfWa1ZtQCLw25t4thUEUz9FhcAupF7NEq62KQFVDPE9Znp1WvoBBeNaFCpVWSxf8yS2YeWBnqyhutB7GNrHR",
  "key3": "4uvcLAoRf5e316sU7HWSqp3GvozSYSrFaE5q12mJbExL57x3WLExQL7osqK1wmitZTCH14A7UrXYz6ZHHABr8E1g",
  "key4": "2n1drhbh4oLZXjY8yyBsKYwgi5U9uQgzS2JakXNUgNbuBomg4UjC3QdPbnwuxNwpGvC9LCy1YaeoiM5rUX4UpyYF",
  "key5": "3WNbNRoMVJYfvXjoUvEypJkHKygqc3dKdtdY7YtRM1fmrXUCJuF451zXZcC4BG45AJhBarFqhy6wkHEh2Pz4RfJn",
  "key6": "4oJUoEPmmUGXWR4hAtZc8jNxMu6QDQi6o6ksCmNTqt16BxbRzMZKtsX5P2JFLnDmruFopjqsmR5DupqHjJoXhD9y",
  "key7": "4j6kfyamg8KFtsXRkYkdZXg8QbuR93B1VCE375Dc1hBKkbionNZbDcsHUnM9NwheJBMEawF75XWabGiLChE8uitX",
  "key8": "5cm9kZn5NGAtno1XSXujL6jcCd9z9ge7XyCy6o9nJZTJF9AWSkV3CFLx1PV241HwVwsZVZLFoy988K4uTt8ACZKA",
  "key9": "5cAaL5LX6dy3pLK4ELa3VURMZFw7z9RPmh5qY1WXbC5i9nFbmDc8x6JM6GFq9jW54d1sxjWBJbcypo59NwwSA2tv",
  "key10": "XrM2ZtZVjjPSf1KiodDC1U8QNcMezEw9SMYusZBdgAiFhmfFcFnReEHxS2uLJg2xpKJeqXBcSkLDz9X9iMZRXrp",
  "key11": "2Frc75CRNt6eZGzLUNLuLhqjrRn9REu2Us9kKYhP4Ap9TdD1t1S5pQRqGTPUZupEGFvb1kysdM5wKoBytvR2FQ6c",
  "key12": "4a6yDLZ2sx5hLTwQUC6xCv67MYWrLfw3F3rZuudZDeM3NZ5hFZQbJg8xNDxWAX593cJzHNpFWZseWeYvc8tFk8J7",
  "key13": "YDgLHYeknUTCAbtUYwpiEpkJByHmKYQjMWrPBYA3CMVjiaw6QtYLH4U4Q25ZkGhHrEVmgfhtTZP4Df3DQ7oZmJJ",
  "key14": "6288UFZcsJvmfuSfZAtWc2ktpR65iLrtQa1HH9Dxs7HN5nRatGn2oY8bGiEC7eeAJgsNEKE2qY7GEKbNkeJL71G8",
  "key15": "2awjzmGLjezEXZ6EEWit8NGJYtF1qjQRsQhaw7TQYycVDBLd4dY4hUPCbbFxxCuGekyCNcPBEBvA5hfeJBj2asGD",
  "key16": "45spf3XUU3WhWChLyuow2qp6XqX18RDwxEMTNCtXovFwDZX5LJMkxmDUrfP3DYeU87F6xT7B9P9RhB7remdxsftS",
  "key17": "46rcYkpFxEh1pY6juabiYZMuvsSo6JyQgRo9VQKY4NfXhsoskxdoMB3VYentiavyzrn5qxJ9EtFiShe5DJj1GBJJ",
  "key18": "53iCZLG4H3FAB39t1qy3LhYaLjZ17z6rbje2xeGsM37BTy1kZWqarusqcx6J3GBnCQyig4DAScBJEPZMdkokTRAh",
  "key19": "5BEZYLtb7WuswhMRcHvT1pHqg9ivkmzKqL9ogVcZnLN1QCXksKxY7buV2xvQK3FHAc2vyjsm2hpnUrHfdkcXbRYG",
  "key20": "nZsAv2xn4Vrzj2vWyo9jXpRVKAZjsiPT29zTZ6GqSrWAHnQF2vnBjSoNX2QkDvGURSiti45fU2s6svy1L2BSc5P",
  "key21": "5D6SbVBA9gDJhctEnbn3b6NdjpvRfgmRKqJV3NPTDyp4PNBf65UZcDTWLKJdcdwGDe5F7vx99joiVbhGqtQKevPB",
  "key22": "28NnBTHed48ntuMbUFZG9Bgtc33D2i29UQJojtcjGG2t4nEBQVZvVvefY8iDxUua1uEFRvDDs9Xss2YKixjhCqCm",
  "key23": "63HVaEeCjYWbQdgT5TJMsEuAF6RTQJ6bNmZxK9F4t6fMsedLE9GQaasSLniMsiTqnBTLhcZJyxiYRzRNaj9xJzBX",
  "key24": "451YTa7ob5GkfVq6tAiKb8hkhRQGntkQHaiGW4vki1X2Hz4byqKZjrozrviTNwWgCpKgEQL6QxZSUz1RTV1KfNgY",
  "key25": "4WyZy6pzphSYoJBrxmRYAingRNPw8jyq6r2EShvJeSQyQfwLPanevcaxdYtioL9jUKZiWSCFst1m79C55STX2R5G",
  "key26": "4LH1QnDwu8fXwde1cgbSuqYvp4zoX9mWgYKRTmqDpnFEf4M24YbzFWddxLn7qSqmj58oC6BCYo9KLtv3qdfAuXv",
  "key27": "3rXaEF5VYVkWim5rQ8XPgbLpXNeb8wuJCZeMWm6ZvSMRMMAnMMeh3tyEnzMpNYpzgNeTVr1wU4uPdfgVjNmJu2Ro",
  "key28": "4oHkNjAojeBZcD3b4oKtpnQ3N7R2PzxcrCLg2z3WAxWk9MXe39oNgB61Bnz9uAR1ZYwgJWYAKeMfKBUw8rrEVVF7",
  "key29": "4ji9cgeXMivuCYwJxoNQpmhzL2Ca5oBqWnoQEJwFPeZvVn41CUoEJuLLox31VtHMJSipGWtFuYnYyCd17fgmKoLQ",
  "key30": "2iuGQGtUgXL2QWVNWput8iNWGrupCdWgqZy8NwJZuzzcnrPy1K5TnnnAdSMgEoQr4aYomhEXLjpJ4SqCq1QCk4Df",
  "key31": "4JRqggGjvTgyqG2qetrYzmtw3JaNBMpXGn37kRagT2toSHqStrqiQd7sduPg7LXd769X8pbf9EKNMUpevfgi2Za5",
  "key32": "34Nf3LoT5yCxG7uVGokTZCcQ5aZ3hAfsSuxduHphKBnHQFiVQ75xkdppYXW3nRvazE42hLbpzB3vS5WXBYQGoggm",
  "key33": "2nExqDNry7CE4T55sPuAcK595SgBFMLEQk5KgTFRbbhfi7xzMp8qm86ND2cugToPiseeb53uhUec9HYz9nSA6yCr",
  "key34": "63UukTDTCucvYP1hmBcUSMPpChxcDmoi58GieLwzHEb7fcPpQ78Ge9D16VoA9RXp4xJhbjxSjF65rT4zUxA61Jca",
  "key35": "39YJU4tzAt6Ws7QExihzV8rR9jU7Lfoo8DVQdbfJEsxf3pSttDqwd5fyy5VznjGnecR2vBnr714mcEHbSMsDNG3v",
  "key36": "2DgcJZ1iJ54huxLUQZzVFCyKfrSfFVuvDWxJXUN1MQGBCbixGUbLaiZ3Ybbt6D4xoAHYaWTB8mD5YQBxBqNbg2J5"
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
