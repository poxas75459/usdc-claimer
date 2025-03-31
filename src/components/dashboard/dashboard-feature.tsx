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
    "5xj5ozP7Tx4LJsJ11KNv8kXSqy2RSp13ywu41MdK1Kj3syZFDDH7UBdzYVHvCgeuFoKXQK56DL9TKfAoWNwmetzV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xamv8q1XEUqvcuxmsXVPbe5pnJ9r8rNx2neYrE54HdMzhPArizfhRSU4c445GEnG6EgBKWgPr1FFGFJFiXtemgj",
  "key1": "3EoeV9xFtpaH3ygHsu6RNugT4jYESPTxX2yKPwhigLWK1m1wgkE5kZci1NPukntfV2SGvAfz4JfXMofq9XRCczAk",
  "key2": "YDXbFVgfKvccpSEyf6JubPxRyuVSPLmrJU6To2xfZGCXpmFEJFYb19ANHhbkYUY662n2bPEWuisvjJVJzVDxnie",
  "key3": "s4dtzFJWduSxzM2rQLyBkVws2GkU6o6A4ZWDVAZhwthiaNEGwNMqoupdDqtPqSZKQ15MupAtg1M8Z8UfMEZ14px",
  "key4": "2jjeD6jQyPrPHcjJnHFJBVsT9PMU4rBBZRwGK4y8QbjUGux3bhXYp842jV26Vctk7b6ZJYahbhEvE9hGjuf2ePJa",
  "key5": "5XJsPC4iHcFjKPvF7xBuvuqDEh1btoiWe2DS6fJbdzgE3TN1EYrP44LWYL1MXp6Yk8s9faYDcXGQgnwEi1KJFR8E",
  "key6": "3MK72ERyHpKLuFtEHQAKnBbrCGxy2wdPVoQ1To3Wo9XrGSop8fXZPYhtYvMv2Zh3y3t7QW5Wn2wfNMmrw9vK99QM",
  "key7": "3JDqngww6x9ZiQy3Fmsgd4gA6mzA3gXainRDHrd9vfwunPR7hoZXG27eFhYYiuJ7PRVBCVSpThGc7S7sYT373qan",
  "key8": "2EiBA2R6Ti6rdeZ1HdjkLHK7f958kk3Z12X9iaS96SnY5oHmbCyUEj9Qsuq8X5Q9T9RZqy73qRYZ6s9GRqVS2AfA",
  "key9": "4y8FoRx2ifrjmzEdqC4UubfrS77Mbk4X9srriRiSJnPxJR3obxpdXstzW92EWYE3UUSt9w8ZZHTkXP12KRbkRTKf",
  "key10": "4VRGZxDCSKz11MqN8YNcGgagJb2e2Jac46jfw7qPaYdqrZxNNMAM9tEsBZpNQv661udP15a97G346xDzRuni7XWC",
  "key11": "48LinriHPikbteuanVSUz8T6RvPVAVzX6a6xuWaksnR55Vdk8XLY7N1mABZoW6nwXxsc17eN18dhBF29gHKUASRk",
  "key12": "2kscFYxJTNXcwpA3qkQWvpqmZ4v3PS5c5FeHT8gWzBzPfrnx1NfK29KDRq3gginMmZa9Gz2q7UQZJWupo6gD9wM2",
  "key13": "2mQDCbTR6Geeq9htb2AvNUJiC59RDMR6e45whVhW5cvyqwmHoYuK2VXPmrQ2RDr2gfNEo2REFHhzW1xx9JiJ9zSJ",
  "key14": "3PiZ9cp2SUgkWPJ6N3tTxBosiMx6TGrz8gapNLBVMyRyCTcQeSp2sKYxe6BUaM4oBt5fQjc47J2j7d26YNpj71ai",
  "key15": "3JkmM4QU3xvYh4gqzhN3kZJ1Fwu4bLyJCSWxpWy3w1Mq5mNh2Dbc59pxGnaKyVQDrqsC4QxvKCstmjkf7YMzkUwP",
  "key16": "a92FV5fLbNHR3rf55AEaZVH5wi7s5SLv25m5Pp6cpRYG7JvjKKHWXVdVeTUngTnBrq585sYYLJKQgHwePUehqYT",
  "key17": "4f24LG7de2J9gmq7ZShnhXwH3fokYZrv45w7CmFDJLmFWTXR6gJ2HT4RSF4UCumt3L9Tsg64g4Psp4oPvtPJzCWj",
  "key18": "35z3NKEpmgArs1CssvcNbo3U1ChvtXKQmzVVGVVkXcRqsRK6kRnZ8joM67aMPPyiphJmeoxQgMXo7TQEHMjsvHxu",
  "key19": "5RWsQy2nRKzDz4brXt6bKJhjVBwPMtPGJzLTq9gRwceR4BbWEwMmnv2PWxUzncU3jjMjTJvLUrjpmdUCHW1PvoX1",
  "key20": "4wK626kHfhnKKtFLohNYRumdDoE3DP9PgJkB23V81bHjgwBf5c4vYGfFtrpoFHnKb52TUXycDeAoFMR44RXXR69j",
  "key21": "2gfuA7qFGy9AK56EbezkS7j8AtFsduUvsuZrGmhzg9wJwzfcKrAogJqqKyAd9H77tCQ1nxxUTB12gPMaVVYrfJwk",
  "key22": "2zBKahtA5TrrvkrQi6Dn9yLF4s7tQuXSHUcBprdAZty8pyxYfe4BZuXAQ2UneJ9v9yMqE2nu8WXQFDy9cd6WAbdY",
  "key23": "3bds58Vjrxr8MAuXCm8aZLGwMocRVSjLarWtpKGaus6z89eTYJGeKRiZrZ54HzFUmEmPFBLyyD9PgEftH8TJfKz8",
  "key24": "4TmLCSAQD9rM9AKF1nfUvztEhNuYBYbhxEpTuzR8DWzBYSrF5nd5dkvhHGcC5sLcUNWsDhamfu274Eim7zeoC4ny",
  "key25": "2gY8c4USLa2ibTaz2ZN17LfLzxFv36rgUwQVPHayCx5KzfWTgHya9U5B8yibPCNQVviMBXpBzXEf2pC2LSvJFnM8",
  "key26": "3DovqPhfAsGT1hY2ZW3xjik2r5UyKr9Enqmv5xqXo2x3XD4oSH191KoBkqphXHzzrFDtGbwXcWq45MERWL9y69U5",
  "key27": "23Bx1CrNBJt4G8kM9ZP55JcDV3X7VsKMuAaQY6hE2YGCEBtoacsf399dzH5wkPgdCvF75CP6gs9VFrjEeSQQwhHb",
  "key28": "RtyefAzysPuNKTW8MeeDyx7DfNvaZ2RPUxDMMGanfrzEUAh8mLMK5hdUfKrob2xPJiwL27xYAWkvYY5CkiQksqb",
  "key29": "62zaxiVaC84v6eoaCD32Lc6tVc7gdR6FgDvk6zqnQ994zaq62M9nVJaLNPTvozkAgoFBT8SD2F3AAjrVvEdDpYUw",
  "key30": "BnpRKJ7TWnjfaR52gAhXCCoGvUscYDeGUV5r8K6cRuHh5wFJnofwHVut8tyC2jtX4SLUQ1M1LLWXQqVpgikojNq",
  "key31": "29gyaxw8amHPaneQTPbkx1syntjPu255Sw3UK7CHSzcveSHYWjV64wXw9NbtMmoj7F3fb7sFbrmxw4GPy8pbdyHf",
  "key32": "4fUwRbNNbcLuBnDiz5LLZ9YmZsr7U4nAUZHJRoFfn2gvFQsKoMbp71LEpZgoos6D8znMWGWik77CE3KG7AenawHy",
  "key33": "5H24JzESeyPDmtk9wTqRma3fyjFYrMWuRe6CAyd3EhcvBuJh9urhn7NMiZxtS317w4RsnzJTwRBjxzXrUZZsSJP4",
  "key34": "5x2BftM6it5ruhLfTv1zrJuXGoQ8uT2EamfSCzbeGab4jkmSvBzgB4BNcW1ctzJ2fP4maLuECdikvNtc9MmHfTKn",
  "key35": "3LmqVk625AXrbyTV3iAkoZCcDPhBC4sarDgw4YhxrJaQPAbySo3NS9rwedgfN2s3sqtTcshMfDKFD7iDZcGfJVSi",
  "key36": "LFy61eTNhGh5a9TxBz8uyciVTtBZSxBuvLLWcEvFkCXzDyVtS8sALTN2BTZ52i9WyQy9i1mAdxd8uAa7FEScoVi",
  "key37": "5qQKZRNaqtZJTGwqt2BSdDMSgb3ufahaYYAHcs1dNSACGet6QdhUXr3PjhmdG4UcJd7uetfYbEcCZ1sK721rjnkW",
  "key38": "5DQNtUY4Ap6yAifd5BCFXQAHzSLQDuZ2ohNMj5XAF1kyyRSHCHdy9qaE6rbwXkYfmWe7FRJNr44XcScTrcLZpqw4",
  "key39": "2iR4BKzvQh1t3Z7fGHqu2MLp1Q4E3zwimGfddQYSJoLb8vnGR5sPvMwnxHgp9BevtuxFyPqCjHVB7XqvNu5x9S4D",
  "key40": "5RH9eazRUPP8ApSFYvrW56HtNYKhEppa8AYxtM4o1DdhJGdpqDkxg9htU1A16yGRfgzXhbTcSNKtG4HsR6xeYW98",
  "key41": "66bjG3XQ55xHpxXpBoTAnQjmLgXsF7utC4qrTDBmPnwdXnkpCvRa6JD9afxqqTDGUPZyhoPHAnd1Q2iFDX9BR5Jt",
  "key42": "4sN7CGPgabLTgHEtZhUfzapUakWoSrSU5WkoVmqmWN8wgk1RymzxBA9XBiazu4NF9mGFy4SdN1qHKhzBA38f6Gs4",
  "key43": "3c9gBqYvc59euxFLTJ16M62Kep6NHXcveFTDtpgEYYbyDvTnDEm5BfCmiaj4VaVgdAWeqwZC27WTQ31Fgfyn6T3f",
  "key44": "4sLf3PETxUGfywpojsxAvWfwNP8zrajiJtbwsNeEUKjJvZihwbFFJ8PkVdZUCz4XzYMAuDzxiXVMHnKEpmoGBdjc",
  "key45": "5m1NUppxT9b2SsqnHN4FinaQzEv5T9CmsFBQsvLomJxJr42mu9bFPjdezYrCnNoSttFQcdy2ZjnbCm2KW7cCbyWo",
  "key46": "4rRZ6jxTZNd12NspDofVZe5Xj1j9yGzcKXuvLQN3wcnFHXkPQyu1gJQCUggDySHTSmdqjL35aX6K81PPdyjE5qxw",
  "key47": "4rbqn7r6kcvt7nZzCiL1kV5UAReRcyFQi2M1tqoRwitFKLxAJ32JGNydWzSoPMmbnViqqGWytj3Y7LQFrs3hzJfS"
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
