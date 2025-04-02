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
    "4nzQ7Fo2NpzojvZBdTaG9yeQR8kda3noBtTVa1sg5w3yfWur5eHLkDMUQEnzTynuPMmGfJXjSRgFwnds1PhnvyBW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ugFW6SgBmGLpRaAkitRoJvBzan8ENtbuUPLxBvSZyyTbarVKSwv2KtV9EJrwkxt6dPmqT2ppypeuxarRXF6st8t",
  "key1": "5CYdDF9wvVfosoRUzwPhRBrdKKpmXCKfg4o8FFEazRiKkZwhWa92BW6KaWrnWHVrYh4CbzkRDDXfnTsnFCmC3CdR",
  "key2": "3Xh2W21UVRC3ASbMkM8U3zpyaofRzLFowxcRXNsrLcy476wbUz2voZJgtdPzAZiUTvQ5xTWnTfZypDd82VjkCg9B",
  "key3": "2JZz3DzPe8nA8T6yWcQoFukFCmqjT8TZ6GaWQRPxGbJfUqk8eJqJnn2dMmy9CKwnPU7uTGwqadFAJFBN9f2ryGXd",
  "key4": "3h65JvdfyByKmXorgNJ6Wyr4jnnVNWqyHnjFQs7qcvoXRLy3Ba9jjk8FK2XkUPT5VaTqvR7gcuLG1RyK3TRHy7R9",
  "key5": "u9m1rwatb7Tvoh89iVqe91n868rvJW2LDfckUGpNqFJCgkQBrzRRqAwmCC7vA6p3C13Z88LX7aua2XYhaoQ89Yy",
  "key6": "5DPjGxE5cC1zUURRCg8tdx2S3ymUwrYkckhjtjpYaHwj4JBgb8xd4vCGbvVsb5yunyngdX6yYj5CqJTcN6ZsACJS",
  "key7": "5EoQgxAZrUbxJXxm3HGAguyfgvUReCYsZuuYhThfvRUxQtU57KxGdTcNWz2NVR96Skp4ZxLapyJkAgCrMZH6XJrQ",
  "key8": "5jiWJiJmaYZVgUeLAahNuCJM4i3aFZBLsxd9wTVkwfsB1y2aGSJfmCHhRBE7nXRLHYgyCkMs4mJ8bm2jFz3gvHz3",
  "key9": "5jSgqfYZ53A12XjmFPHzbamQmCWJAHKcBxkhxQgm1ccAazCCGiG1uAx6zRRB5Y85gUwQPfdEJWxoi7p4YkkfvHhU",
  "key10": "3cvSTNnqvrB5j4KoppYn7RJa87zMKSERenKQVT4hy7UhiAyHx1N4jKDuER18DtBS8jAmApyy7S7gciYUs5g4beKy",
  "key11": "4x6LFoKW4G53MRR7HxTB8FWfvbze4L9r2g1y4r6GZNcvyRaPHmDxKuBNwA45FpYLyukYvrgUM4QqZzdp57J2if7k",
  "key12": "4RjQauWyLU62WvMRQ4H5DszY17QFq3VtQdr3udFCZaCRm4H2zVNp5drcYWND661981i4ktC9ZR42wfJEB98Ze6H9",
  "key13": "2CdzsR9dTFkb66GvjwoUFfdFbWvMuR3V4v4FU51E2vNkCpps1w85gvcr2CKzHvDjY3inSZCAkathZFeioh9uciDL",
  "key14": "2z5wqnzFTFC65ePqP11ZUX27SCZCN5sAMisvpDnr4jTV3AZYzje7qKsSjswNo9GvvHoEujeTVFDWj83tff4FCSWq",
  "key15": "5Y6upQuQ1EqcriTqThTSzWiQWhoQrLWNq7ZVogM9x9FzL3gkkKxUpjNVKesJA2ip76hZt28zSEZ7Y7bYJnggFhnS",
  "key16": "4LoPGi82PkZ7t2JvwF5QFYBAFQcSuhqNV5vMooH7U9ZHZtcXrqUJNhi1BvarK48xePb4y6BgLtQmTnDrDy99n2HM",
  "key17": "2QXvcKJKQaXSixq2f8GZLxkdP4auob2gH1zUUFRTq288F3n9WwSchot2VmrXcudybByEFsoPhcAZGHd8tUkqtRix",
  "key18": "4DbMXpgh8oREr1xV9aSLL3nRXi3MKUuxf9mH8pc8bBtD5hXSv6DVefqDHpRY8DbvBjvRLJ367hYQW7g1JmmfusbX",
  "key19": "2AhFZR9fRiFa9nsjfm8RnhXv1Hgpi9Tehma9B9FcGEnqQ87mZ3d42VEPVhuQ987yWXPvHoas4rHUwUQ8rddjxzdA",
  "key20": "3BB1WVoyhv8Aw2Z69ybmDXobGYAkDL6kZfaymEPrpFe6HWPkKqAdDjg6XSjwTKbBmSD94BXcz8MqTjTYX8ab4aru",
  "key21": "2At12kPBNq8T8SAVS4SsHVmKnwqpAfwvQRTtCLtwCd5to6XYMM3vLr9sNp6nDMwUJk5JibYdScfd7BcGo3H6kHmL",
  "key22": "PyJhTHbsNzjCuLe9w8zFHFudY1UDVezHZNKFmsWXTsAWdofS8j6q4YqgVRQ9BqT8UGKjGJyagusG5Jv2cAQVDvC",
  "key23": "5SJDRNAor4kJ8cxqmrDb5xXqkG5tdoZaSeoncvwLME8ZLh9KX74XTs3xpvRpsvA3DTSufEf2vsDrtMNWqWFr686L",
  "key24": "2UQMvhtBQBf1TNjSDqSPHF3TjVeJTe4Y9QTUR2Y4Xq6kroRojJjvnwmz3DQMU7iRCyhH1c2Cyw73fAbHzeS6o9Fm",
  "key25": "2NC7HU6oQQsSDih1emYWYpuPmBfqwaSDxCv62qxQYtMc7bTdhVxArgVG5hKsL6iLYzfQ1gimJuKF5ZGni7gr2aZk",
  "key26": "5sKNNpEN7t2uNBGTFKTBGaV1feWEBUWE2CLEHGKg3PkF2hi2CynNq7tdLTNrf4pQUT2dNwtFQNb27vi3CEmzANKr",
  "key27": "2VacQk19x8xKeunJ2aQ2qB65F4NDZNtk2v8zLhL7rZUwZKHn32FaeJZTVNkga98Gmg3bXEJqptA94RcAkAL9Tvte",
  "key28": "8i6dZh41YPt6rExET6JU68YvoXnTwxwisYpvqhH7YrDpQNmuaiUJLQcj46D1HSja3K5SJP7eDTMMwNAAEXvnAd2",
  "key29": "ynhsWUsaf5Ac3zdL6zkB5ZE9YMCgxDPds3eUNhtpyR5YBt5SRfPSCxHXC8LtU4eocBnTt6MBKcUAtXnFjuKbbsJ",
  "key30": "22owYwQnq6QCmxoLWR7V6FpKQ5QZDBjcsdU7tKBYdmJYcffhoN8dHbJsiXsn2mUj3bo4B2gKNjBTfzZGqJKUastu",
  "key31": "2App1YRvNLPxrmnpRJNXg8TEiQFC8zMr7SvB836iv28U2aMhW2oQekkFAtJoqDhp1T3N3jmCyyo9YS7YXwvVB6Mq",
  "key32": "2g6Pym8UzULAMegL62dtyESFFqEc8EqoZAL3Vom9zo1fPJ6qdAjZaCxsjD1Zy7krTwHDxJ9HRmGL1zU4WLQtTkYJ",
  "key33": "qpF9SpAtmB4XUtjzeytBT1zhuUu93GLV1bXApRVD9mC5HDAum9ACpo5C85uaRV1UofWgHS3CUvHJj6a5sFpnDKu",
  "key34": "3Vbv4oE5GCMdUsVHMuvf5qzHAjKTKc87z1gytB61imXRQKgjeATCZWgnjovxrsDSkjN2U8eJXDhrW59q8H8gv2Vy",
  "key35": "5rwLR1mx9jQqkPpUeTqUGWhmEs8aogJk3xvxytRbTqpNP5sCRri68VHi5e15S3yqmJK2HW18sXE3cS3fZsrzztvm",
  "key36": "Ub1y2FLDBGifVqg5DCZXdma76MccCoGSZN8Ajh5XZydmYvjY5XyjPLPZuoUGU8me9r5eKrFKrDVUrBNexUwMfLS",
  "key37": "538zyzMo6V3W2qccWC9j5t8Wh9df4nkKEuA4RuNy4mqVy9oLhSeu8zpwpZTbwLDHhQHx2RrzBne9jdUyWfK8MmF9",
  "key38": "LZmgeHfJyFSphWcDW1mzXXrYUtjAnNXvPmMXoRJuXpUNQchFHgAeNERf3sqBponCvn2VrXDmrxQvogStLts6BQh",
  "key39": "cyGwgJ7A878Uur5uXJQcEXQYFi9kd8XJftXuZAxVR5xAq8bLshrkrsVFLrERa5vUwpC95WQyaW4LLiqgcdpCSsT",
  "key40": "2jxCStpbiNyu6kiJ9XUoM9BQbb1DpbcBUd2sGZ1dfPvQxrR3Y5dnhU8fNsigrPdQZAmC1wVTG6jfSp9b7ZNQP2RV",
  "key41": "2FWaKAWkqKBBKkE4ekj5b8AgtStHy4A484Ebf3zoCu3D3cAzsR2Uj41zSYyTexNcGrdnzTE9QKghkhUwyFyHsbn4",
  "key42": "48gVCgqr2R8xSTmd2j4W8sgJ8EZq1bGUJRG4YnLHqHZc4FVCEt34L2MCoKbAma7gGqkxstGRq3buj9MkTgMNQtGe",
  "key43": "y3aF2Tb5ZEhXJoNexKjLFWjZuvogkdb11BUF8phMpGo7KL8iqmqBjXsv1R7AaJwSJd8zaNPaiqz1DR3ezK8tLfC",
  "key44": "4iWvQNaJJthPSZeRL6sSqbjqF8EGE4q3TGaAmscNQRxri8p4RGVJs5EMpbC9ViRvzq7Bq3XpzDwJnYjPCxDxy5qL",
  "key45": "4KXUnUEJNK3f6bzfX1SUUkmezvwQs1w6bxjznMv5XfgJ1ywKcd21pcE6YToJdGXTV8cRffjheugYh2PJU7c5SVoA",
  "key46": "5y7Vv6WxgmW3FNEuruUW7N3tcxUhtLw9WTwVcmZ7osqt2uGGenssqeJSiqSCfiEwCWf2bHm4h3xTUky2gYLCpbU1",
  "key47": "dB8eEyzoSPAv5biXXAy2dFoZokRvbNehuP3fxfGb3HYd3vFWwjadFxgL6k9GATHtWkaz2yMVVNyXwNNbn9kywUd",
  "key48": "3vEV1rXLMWENYCyivMJyt91RWew8PC5GdeGMxKwfUYKtFkbjRcUi9MgAKzTNLHWCe3ztyX9PRWHWFXDy2ubmfn5Y",
  "key49": "2Jtfuh27WWNuMZo6UEuRb63iurKV5qoWiEXJp8uA28yiFiNBsATvpwKUxKbn6Nt5cpnj1npbGTApBPbYJqreU5nZ"
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
