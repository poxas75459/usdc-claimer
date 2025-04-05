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
    "3iC4jTUmxMUhcsuP18JLGeJknSg2zyvmBtsqQ9h4yPF1KR83GTDYQZzB1VU5pixPeC6Yt3sywJUsw3MGZgQU4bKk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "479nfLLvvsWCR8vP72Rvt9D2n8ZAKGztvxKbiSGzPhWbCYgFg7vtg1o3kght7hFbhPtEpFw7FM3FCUmVobUZQmSX",
  "key1": "2vEBcjoWe3LeNHkjJbd4NrvtQVbXp42M6P6KdgEe8BvKqZtNEukHtBGirU8EHCDjpxYLumYzcCvHHEJ89mxfjRBG",
  "key2": "CWzRc46NnW7Yz74pnaeAJgCQPCanCD87xnpeEHptTthjA6M3kDQESmMFabbNv3eaYsLmbTgNJ4QFCZeAnYyVdw5",
  "key3": "5TgkzCK4VhVoMsniHWE8CEVqenBj2ibeW57FwZjdffFohioJFNZ3sgzsFSnnLWvUcpFnHW1jG767hffnweDfjuaE",
  "key4": "3zhPYNnXeDVuUF7PRuWGwoHyhPBQTzCjqcbB83C43G1i4omvFkCe5v79bqHFYsAXMESawbu4LSbDRJub6bJKmVpv",
  "key5": "5ENWNshFac4XftFiZWRpa6ykWjeiLMxLh1x8BbN3gd23ybU4p8GubF7wgWnd5LyuaFSBqFaFXbvAtpF32ydFjKry",
  "key6": "Qv4Dy4ZYAPyJSuNMNeSxG2e7H2wsJXHpibhcXXLb8hqmKKSjT4h61nKo27q2soPJKP2A3svG5HcJH9RmRZ45vao",
  "key7": "R6bUUeyj7pivNxUx2vxuXzYLHwK5q9fNygvjT5SyHvdu2Cj1KMcBDKdMXZuAYqLrJpTZeJdByp5UJpqzte9u3WJ",
  "key8": "4C9Twejt48419TJLXKbjzRMs8PPBTRTUKPwu3AAY4FE5utebVkDzPspuXj75VSF1Xgry31eiw6uESxY4rctsGsNY",
  "key9": "2p3xvdrDQCwFkuCJ8j2bmeTaY1LwUqJgJk2pHbwnswh2xsMGRVyb9fznrPb6NvbxUQdZEDxY9g14HS3Zam9xqVP",
  "key10": "4TpsukmeJnu7b3ofKzxv4pZUfVGhZj6ig3WKFWUPV4oKWmqhgWuZL1Dh2HpF84YiUEgHcu58pVQ7ZWwFEZS8ErZ4",
  "key11": "64KTcEtqGiypayR4NJFt6T5iyiMcaUNCwcCc1pPcEUyhEa1iSHw5PhKv4t9QcTC4xgNHb6ESTx1ic24yVpyqyAyA",
  "key12": "35NK1BoEYjdn4ERxTHjRtAuLHiyrppgPzhp7dDB4u5o7M4scRQU5tmdESHxESUAs71tY3hK3snfBFrgPT66uCJrT",
  "key13": "4tYXNUn1y7wYZ6HP21L8wwTY19N4ocCpHj5VPWxUk6g9cmZFXHJgyEpWHr1fJh9G6PoAnYDFkvr9mHtnHqLn2QQe",
  "key14": "5djEdXzBLgiHZKQoWpMahJWPFd9CFdTUbxP1Z7szQrKHvJbuNaLsG8mGRNpsDUhJjaM1xhdVHeoN2cwJn2Gbmpn2",
  "key15": "21bTX89wZNztpBkdkVc4dr5RshhKSyR9XZxvcvEPGxbtzBzApwno6czunuymAqFzvpnTsX4fmSx22ohtETy5n8z4",
  "key16": "4d9bALcwXMvo2sQSn8okbkXwkGaeNSXx8bi5YFUwM7WU79NcdyA7Cioqcxqb69t4GrKEhYKKGuAX8DpToNCrJvRc",
  "key17": "nL9bwcEvryt1B197oREm9pd2GeLUqBqvP7hyDXXQ9g1JJfnzhqTUQMhrJS8yZgsraYdtCZvVNKeUytCJ1uMk7tm",
  "key18": "2ZDM9JKCTBkdrkJXeUhvdyZeChbRd8BWeAGB4sLsPtfNxW4qcmdLK1bzr9dDgRFwWBsdXHE5aaPw4cWmTWB9f3zL",
  "key19": "3jXeV2jT45Md1hDrsbtVvW3eqPniNjAbpAKxnqCRRvNhmQuY6kUmUExPWb2CSa9hX1uhfh4pU8ccrBfoqtoyQCia",
  "key20": "3d2LkrDnmrBxnZoocrdx9bkfzXgkjefg8pnu3MLgfmCTzHFCuKEWp357cbfvCgMZveybGKguWHTdrDXMvbTkpM3R",
  "key21": "5tsUSMwPZ2WRwgSxwKZmKWK43bmBHQFWssXpXXWmUVLTXfr99Z3kaqkjArY8AV7xWLe5RTbSFDiwLzD6yQf4ZZ9w",
  "key22": "5p8pPrgqFFnHXrDgDfxokKFEEaFFjZAtzBqMJhTmRxo7xUWVpWgebQkPtVjWEoxmpV6frrPVv2hfUUFKWmXFEywf",
  "key23": "51SiRqiGobDLEeniNTxrnrTKnJWnt1gFL3wze8eK8Q6s4B7wCjSstHX5EVQLVHyKhJiWzEJRGqgR7TZ7A7qaT1Pd",
  "key24": "gf73CpWStFkU3B2B5cNfxMjFjDwWuvz5VGR2U5qvca6TSt8pw2VYsWaX23yahTiEYECWJwK9pNu7n4fHoGwGQeg",
  "key25": "3eQdM4puXbwJpqQwY2RNJWpktLc3Xx9rH2j6AE3uiXwooSMGG17g9W5HTVNECLEgSTdSUyy6WH5ZyYJEKFiBzbMw",
  "key26": "43CjojVhgVxrRapx52KUXA41EePb7rKsPBmEgcTCYX3dMLnJ3HGvesv3hCt6hV5cXEc3YKNmUNhDDoggS7GVxNrM",
  "key27": "5ViS9fFV8Li4JfQSSNdVcyQo5aT622LFUcM9mVSDvyVvSgHJ3wEfDK81BuHFjePT2NMS6irWxFa3wE311MMUwYk9",
  "key28": "45N1CU6rJQxJo78iQKwqyZ4isUpRdAJpxs7SpJ9yfH8wuYpzPi3vGSEurYQmEu4MCUizwtwApsAjUptZxpaH3TFT",
  "key29": "3aLfueY6ErrckS4DaXJeerbqiZ5PPDzozDYc6jdDWHxbguo49r5JcBv7dULPPUv59wg3NX3JjPU4NW9c2mnTCSD1",
  "key30": "4nwcvdAd6ePtyYX2C7EsMkmiAZ5xUcS1m55YT6bSYEaduskPVzFRAoM8QCvRhs8uFtsi3DT14vXceUpsWTyXDfG6",
  "key31": "5Tsvn8omu5qozfU6ut8u1FYZ7Fbw9U42UYV1n9jKU1nSCMCGvfJmtskjgNPK9PKFCniWhVGs36eC99Nv25mGsTGB",
  "key32": "42eRHLaFhkddjmoEbrKNmoSgN4VUzKDsFm7D739k9jW9v1FAFeJdsowaNhsHunVXPSVcpVuxumDt58aPtTxUi1vu",
  "key33": "EkzFEAoowGFV1ee95Hnt7VXwbNnTsw7XMaiUuYr8878xa1538g6UfQXu5BJ7S8XPVetCSugvTtuJEMP3GNLJrwR",
  "key34": "qb6iY3P1eM1xCuRsbgA8GjoNPztrbzJxL14c1eSQNg4pQvJAzGAiDDrQZKDgdukmYBghdhpJG8FgaeSkCLvUhRv",
  "key35": "6TPo3pF3KbwfZncdQDmkN1iw91MJmquc6czH4eWaYH5wBvyKb1QKgxhEGYab4PTXwW5nR5CrTajv9muWmajfZ5w",
  "key36": "4ger9GiSA8u15v2f3Ux76g1mkKXH95hGCjkKDqfEanqpBHrJLwmLQTac3ZyTXW6meNDbgU39dS2HX3paKRQeUr6a",
  "key37": "65GgtracZ4SFD52wfWrMk9PWmNzFr2LCuq8FmG7pmSWFVsyWF4YtLXuT8HFuhDjNtHzdbjsBmjdq39ur9y5Cr5Vi"
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
