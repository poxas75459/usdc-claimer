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
    "47ZjBuW7vtDzZEizN3EG8yRbtMJaSv3GTwVrxm8wLnuM91VQuZjhXVVZNh8DjTAcM3e7kxXbaR1VBZqJXyKqnTbu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rmhaWPfTY5opDakWYd1mrZ2nM9k3GVkLJLDpp8FJYrYedbSsAdxGekQMwZxmQWoXC92SuttWTLSagau7yraoR41",
  "key1": "Sn2EACWjs69RVCW6v7ojVW2tcEBEbDRRhJSGmLJQiormbqq38jUz3XVLT1tTC5sJtkgJhJn31KTcZoj5jWoS6LM",
  "key2": "3ZafzGRqjEDCzmwaaxoh7CTEWsGQ8n8oFFq3bYm3QAGHFSbrjiJodK5xhzEhfYgsXv8bw3A6U5LQAE838U9zztbu",
  "key3": "5KhkVLW8WaKDjHS8DNSNSpx3mcALXDrzMRex3mMxqnqpqKPgZ8GKP6uTjgNQCNyYS5Q27o91w878yjyjSBuYSBQt",
  "key4": "dXrUvkaa6USpxUXPiUsrNhWRd9um9dExgPXEr4KRtdpxPEERLpkr2csyvGengML5gdS56oLfLJUZZM3vzgDhtDC",
  "key5": "3qeWBRxrMeG2d5KtBBMmNYrJQXH6z958aVQPSzuHpv9La2JzKWrXs614VXLaYbhPiXtSGq4JjZsBc26VVFH3HTvf",
  "key6": "EnJQwPsghfaXTswpjEYV2B51qnbcywstrJBxoH4UnfWEp91f18FroXyRa8bmwy6CDC2oZLnsa3VKuci1voo4vv4",
  "key7": "3SagJ3kqy5CTqpz3Egq1LQDxcAKs6Q8bTWTgPNiJjm5WyMu3VVu37acwnydrZXteGSuQRL6xPUCgFfWCzzAUrAHm",
  "key8": "4e8PPdWDuAkTiPs4Mb1Lh3WDsBeD83XotPoJ9TqbB1knQHRtR9XZYwFRq3TTdqLoMVRoXrJbajSofdXdupiB9rLr",
  "key9": "39aHRQuC3jN19uzhN67E2zBgLxK7d5RQ2CZqiF7LnrrwyCLr4YzDQXsujeVz3KdwFPJE4YDRpe9vnoYYA3VMEg49",
  "key10": "4rEQGHMeEvoZkPFZLKeDDsqCMLN9RXX4he34UNDWrUvcY1fpNp2R4jmkUTgkDbEzJRXaQJWh9XhKVGchdE76AQ3h",
  "key11": "3qUZAGprN9ZYC8L3931TWnivHuH4Vwzt3fv9CWd8xqMnKtvQyD93k8YWP2wBS9qzHpmvGrkA3BLYukTfFC3JWBy4",
  "key12": "3MeEMF9hbtWDrnuEhEJ8voRcicn9FLiXXY1skwmrBKhzZuWpbEd1sDe67q8T43oazsUsEEutXYWff55XUEgrwXuC",
  "key13": "4QCsv7ez28FpWREHpZUGvyW6ctkhFbkQ4u9gViaE3kL4zz4Vwd9gmfYnLGcnTwdvLa3Xr4QJmaK3jaRHqzi9vvmW",
  "key14": "46BRDuNT6Npmm7tkYYnqPCp3rayhW9jEJKuMoYzYnGhK6346XPbxfpXsNVWeSZSr1wQ3DRGuTLfxTpN2Ao95xBkw",
  "key15": "Cbitm4M6jCf1gkE4qZcsFa69n4JJzrwTKd4enmxL5wJTBx8VfUCDCXktwTynRY3gzjfUdZPAUvqkLuX5Be5ArFA",
  "key16": "4jEEtUAwztgseFs5RrjEayvkywtMTeAy2W1j1FKjmvpFK1iatmbFEmBi42SXGGJrk5UFVjYRJshvfX2E7DnLamJN",
  "key17": "5Jn6NRvV5ooSEGy3StsEoxxngkTdspEQYJKbSafU6dr9KMhhMBBqxFFAQr4SX9DGKMGWH9JG4mFvBoFAnwQbeZvZ",
  "key18": "4CQf8VvNc7UvF8csQSjcggVjQrfXY8a7gd5N6VNtUoyEWMd8rE7cDAiSko8eXbiV4NNr6hyGSYT5qpd2JG6JVyQL",
  "key19": "2JfzVetpu38Xg4rFJ2jEKaEfq5fJ4RDLHNZfdcheYLSmsEZbx8jD6MFwLFbbeHDNMWFQEyY4BXund1nRtu98thVR",
  "key20": "5iWRmqrKVp9kz9355XvRju7dhL2Kovs1DDhVEpMmhpCVyVUqMpZtTLV4UBre4Z28ubgBrLkDZnXq4qnZQZAcGXGp",
  "key21": "5shons9JGpJW7EnukrUG9brQFeWk29BxKzwTxDY7Fe4ZULL28CtoKLTWGL6p1xSujAhDuocjceTnk9R9DFfverY4",
  "key22": "4Zro69Nwc89TYkUATCgu21VNoLdPbzsUhz9NUdccUgMJBaxAmCgAG7Rgr7V3EHbJ4vrevadULs8rPYmWDjBBZtE",
  "key23": "54jNmEdF6pBeaRVLYLiQp6hDedwEG2r9RkPtQadjYH6k76Qqy2ww9CbCbc3nhJZk1xSMS5ztN4vyEnhJzqi6d8iV",
  "key24": "3dhbiziYYtx5wzUmoFaLNoe6sTUiP1NVNTGpSuuyfqoXyxTEF1goCWEfqpVmrczdr1yqZ3QoaAefAZEFnyD5TVCb",
  "key25": "5tfhj7SQUzocfctzn9s8WyG5yMXU11ZMsJEUNtYA5SbonKtfRq5xrfz5FN3MkDZ8kCk5ALANn6nQmc3BBinEqCwJ",
  "key26": "gQ7JchhnncLuyG5AgNQessc7Shh7wBUhBfqChGFyetcBQy7WVFTqw2QCWCMtAgjX7fS1s2End3t5xLbf2WbuzV5",
  "key27": "5txde4y1wsSrthUW6pA2N37o2CntZrr35YfHWJBP9V9eErowAvVpeJfRrYCQ2aTgJe5XKrNC46XyiUBBLaD15e1J",
  "key28": "YqTi7a4TULHsmN1zgpno1yWyVRwM66gdM81faD7h4YZ3WyjubWzyQcj4hCfcvXHe8pXXGQPxJnkjMJ3eB3JSGXh",
  "key29": "4CHJnvgYm7kyu1RA2YEeUNt5iEF8pZS8nW369mCPMA1L31RmE7qKLnQ2dLtdsSt6RRGEvtbVYrUnMyB5zboy3Dr6",
  "key30": "5FebT9eLxym8oLiTZBprV81iqaJrabzh2t8dwfHFwsu3T3SqCMwrMzEWNPhfysx1CdNVYHSxEJgUZDPdcN9mNhXn",
  "key31": "2mXQSvAvhvwJu21mVP4Vajtsycg31HbYrLQMHxJmV1zb8Zk73Rky7gGvD5xnaGLynyp2hGEMB2HNDzsg19LNyxxP",
  "key32": "4QgLmj97ZqZ1nPL7kNJFiepsXAjC3vsV6skqQ2nJM7mh76GPDJAwm8bA96mm6bZqYQBYeEwbXPqMqCkDVx9EoqWp",
  "key33": "3JvgCnrnQn93CDDrE199EvGH4NYQY5mfvjNWMvYtWGecCE2J6sSoWaCLaMb9tRzgHKjGjYhWBEC4jgqziQvKeBNr",
  "key34": "35FZup9hN2KCNXiB4qNrZYoq6btZjPEM48c12zBQwtZzvqJwL7xtvWaeZmt3h1V2MRqPWj8PFRnktGbnDBkV9ydo",
  "key35": "8MUCETSCPW9EZdvfJzAtVf2Tpp1CutQYV9BNgquBydRAaywqyAcgLFkt4D1RCv3pPqXo3BJDUPMfxi4k4KPdiN2",
  "key36": "2Ku9QgMnuC48EKA25GJHxYYML7vMw5fn29UPeGrDb2sVbuCr4s7aBFT6eadkQuZBhjCDGdSBW4zbeAsX9YFFjqxt",
  "key37": "2Dob3r9QNHbXjnMZvbdXsnaHrsvPquq1DBzaFDDhCeX1wbMv1u5H9jTaU1GgWSGe4je8qeX3azRzYfQbXa4FGSYn",
  "key38": "4SLUHH4YKJ82go4mLqmPzyLBaMRFUqPHdMPJf59GsoT8VCntD2zoPm2n9j3Y6td16xxzVVHvHxC2ibkzbsWmoQVz",
  "key39": "3GpjSzNpRqGX8UrzEzVEUUKXBdcwF3pxgqfb4HQ1gcG5XpDSeymbEgcp5v8gJGHex527TvVznkHTWpNxbjeL6Xu9",
  "key40": "3wA6UPNPcrZAWYdjjzm1FHQ3mrdyr1BiAxasfWQgaa8USZ6PXaMrE19mqpQYGTER1Qhmktw7zWNnQ4EacLnKKXDg",
  "key41": "4ettaeezZxX6gRBstQ1ndJjY75rz5AnvKXHuefH16pCXmJT6FdsHroFFstGTYRy8vuLTYtofuzxqK9DYAnZYFbX6",
  "key42": "zgDkddWC5gXgFw2Uzn6FjMK14e8mKmZPZuWthZUSkQRt4wYfZTtTQiCH4vApQYMtFhxqzJ3JXUBgER8eR8P7aAG",
  "key43": "36qTsbGYNu7DXKGvGnZZfDG11PyDNBxeepAtiASm76H7kYJh2yhqkGG5CfwE1esr2cszYbaaFHZr3hsiUmZm4Jhz"
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
