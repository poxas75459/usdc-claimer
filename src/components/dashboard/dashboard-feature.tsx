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
    "34KxefhM2kstu2bkjXS8oyaq5ikjxjLTFEqHmjrjaF4uWRLeQ744iVZfi6EWjmMjMSM2M5oaxiXQm33XbqzHKGVr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5C7WzmC9tWqYV11yCV5xb1yGLxMWcTitrT9WGZ7eadnwdvL2RVpNSVYqs7aP8bn4VMTpTWWmvLsNmgLQGz183z3q",
  "key1": "ZVcXBUDHgNdCxu7oLQEYnm5YF9CSZBNfbJ57fZQU3ac5qbCMJZhgJwG55EYLaufpFTukL8QWNbfgtvv59FfGFc9",
  "key2": "3qf6CUj9PWtm5tnxf1oWWsdNTNcUUKJL6aj9oYy1TaMcV43oKcYrpRegkudh3AtiW51U2EYUnxaiFZuQ5iYMduLV",
  "key3": "2SQkgbX6j7th7L1vjXVxeR7We9SPccuHmRTLgWz9L5i19dvYwUMwxKyaneGUWTQSY6gMXX7CbywBQYYRUfoM98TD",
  "key4": "4kEyafoxzWAt3z69VAmyqAKuLbk1aPoVbwkASi1mRKUZEVGCBue6shGUuAm94WifkAogMUvyUJhWKcZd6zjbDhR",
  "key5": "3Q4N8yNpBYVEvoYbp3kQvEoTXvcVwmgD1YBUNdJzbSxbAniCnNkJ3AwfBjknGLirCxXamv34YWKmCUqRkFWvVKGp",
  "key6": "67XyFmScKWPG79TJDgh1pS9bDxaA64rzwE6jAN5mgDsx8VzCHev1hgwoSSWKLHysF6HyEdMoNnmoqghtAMKGAKDa",
  "key7": "5wQHz7YyGbtdnk4ehuJh8Yvqq6DUeur2eFGWP4EgAVaWK4TF1jrreQmVpQjaFRRdwjVQgZztYYiPpBzSRgqk1v6t",
  "key8": "34pjJ6dpmeG37Pvre44ebr6NyNfCKfLrjUMstvFm8kBjc5qbdSrgPoNP1crCu5heCNMRZfbDbZjcGJmh93ZrbpH8",
  "key9": "4PVzPXLEAzK3ZrhKKet6su8MhpuUXbq1xQJ8qsefs4b7vWw58z8hYdDzy8a8AncuRtGxiSqSHfWG5bNyuEiwp5Cn",
  "key10": "AaJiktvjRWGqVTV2dmUra2TTgTRGcV1XTWZfGf69rLHAhRfS4cuKXWMCBD1WwoeMMQjVRkvcvuP7xBKKMU4E6mC",
  "key11": "49YyqKj7wSu15BoJcMzqasZsvj9fPBLpCzE7STmsoj6y9r5TeJVkuVh5gB8sea3rDxf2uAWQTocCKZSowJDuRGDK",
  "key12": "4b8d26cwXrUCQk2hvJC4pVBjWYCR4fS9d9Bw36L6dFo7t7DdU1g5MMkU9bifEGzZ7JibULsADBf48ssNMw4CkFkc",
  "key13": "UXNsqMQP5xTT4kSWYzScje7LmRJm6XFxQqrX1erFsAy2WQr1TtyCrqgP5nBnYgUD213gLCow3VmKsfpJg3Mr8Hi",
  "key14": "3qqAzfngRg3N7a1Y4mtbHoknSg6Ns6QM6vCQs1FLsnWYb8ks166sdLkXomJhjYtTrD5CuHXmNbSw2fYikEo68zqB",
  "key15": "4o6tDLHy3K2vmDVa8noEVio6KttpP73cXcRmZSsdCwWEqpsvcE5Z5ztsPnSbSzbAUXcsPE24tETmsbLQ7Zx4RtTJ",
  "key16": "3FRe5ifYbtAsaidByFYSZ8WptPMFZpLPF4xhb6wuRA8XyNdja2BHNW9HmS9cwUfVg6CnbevLyHhGTgR1a8qQAk1f",
  "key17": "4yBZAsrP43S7uztYRg8XrN3YYhsripGXavpZspEtFFbKGcvCAqV1e56sfW5qJ93yJLYjWB5boj85ZmR2uBZjCBfB",
  "key18": "mvdKmzzPLbKvxoPprmb7xqxMSSZirXDZPLG2SjNxzPsnMcWTKdBMhu75iaFHxFVsvSEnWAVZPvMaDwQNMD49QX7",
  "key19": "3g41XowC74VqsF9ntN5tUiLPRPEa7e5Gx6gosCLnsvdyXDQ2HuThENw1gncwXxFoBWGUb9abLcS6mwzxErRBqVrx",
  "key20": "2QcxCGgNgkfqYiNzN1Q6Y2sw4TvABGpBqyWnR2MZDQnP7KW35ehmMpgUe4WBccb5398uMy8Dhjefd7U4APyivtmx",
  "key21": "2jzKkrrsdeqcWbpWS2P4n7YJervrjrn9tgCnPyaxDT5arYNU8ZwJUeWVEzWGKHS85JUYjpyFywHgwpfqrZVkGGCS",
  "key22": "21vc9CDxoMmYnxTNX4k3E4CkzQ1ThmgyYJAk4WZgBZeduQBkpAyDS7SVZD2pihDgHPFk2XBdwcFTxGnh3Xj7hsGm",
  "key23": "41QkC581bxJzHCbfTgsr7wkRE4K5rmj79oXcYgUBXXgr74pXbaP7rSwcynHQNGKsf25iPkb21DmpJt5yLx146XqF",
  "key24": "4AzarJujh3cEu9Eo5vLjrMreEdUvYH14UAb5NbKZmJkEDqP2vvfoDexc1fkHNthof1bVfRbxPWHHXs2NanZNyjQS",
  "key25": "3eCWak1JPPvBgJQSb19JPi5TbLoNm6UqHraTg91WuNxeZdvCUkczjNVc83UYpzuqrt8ukhYkvjR2srQ8isWpgxCM",
  "key26": "21i45poFTgdhcgS8Tj9w5x7ngNxc6uKaaoPr6WnfDx4WQw3izpJdiksAUpnAZpnNUKisncQkD9i4wbtZtzynfrCe",
  "key27": "2a4nbsLnYNrZZnsS4ESCUrgdhaUz94LUfvbJqf71HyK4qYxoxf6SMkyHfCnj5P86QMgTkSgZHXWiCactD9KVposa",
  "key28": "2GFbZnAu9uvZZ2QXUQZ5MG6mw2cwaio7wZ4AFMNjnbAjdnbkAUuAkJXjo9iTU1pUBhUMAnNLC7B3gEWyutnspRcU",
  "key29": "5KhJKmqdR3pxw2zQCmZhs1QQQWyNYvUbCustMNSawdRT1pPh2RVXtQcS7wya4HZTzJMu4mf6UQc3uhvpRWFohC8P",
  "key30": "5bemRZwwZQDDZzzADdHmtYby9BuEyKFTi8aAyko11TSdBhrdbyndr78yUP5ufivT1JpxQ5c4dG71vaqngKNUqEVD",
  "key31": "4sc1KPcwaYuN934qpcFqfptKbt4xRWbhmHmFaaV2NqP38Hx5PDVuosP1kshKan8VjiuunPvGypdkCJYzVznF5X98",
  "key32": "5ENmtQKhowTEsYDzeCpSbnnsPqGxVH5W1ujjNq4ujCwoEHPd8jGjJbr1nqyGuic7kE8pj1xfCFSpJPMWedZWLAiA",
  "key33": "XcQozLJagv3FX6pbDQ12tE4zkAhAvgsNMVto2RwW9kDrtEujhdAPLe9XW1sCkNVNjceqhXAVEpv49QJrTW5mVpn",
  "key34": "dmy93PMcRsSCqQLXN1SqedcSGRtoM8kGidWeDqP9NLHrgzC4oDu7dwMK6HKHmK8UQizBLvv3GABDxtnZZTp6dwK",
  "key35": "4uff1KeuddSqEqJe5yF1T6j3sCmniFzCTuuRfNXiYxds7sfjacTCrVZh3vGyg1gGv8p43UUjtQzmKYE2WNYuqvkg",
  "key36": "5vHPjXhzv8mYA245FLtzk4mZyYWuc7C1XXUX2S2hvmiKWZ47PHMwdwS9pUyu2WsHW7sKnk7JsKoGxWRNwygZZFch",
  "key37": "4QfV7REVp6WNjQqK6VrcfB29NjhpZnGBeP3KGqE5cszbv9z9ourXGGxALNcwyezaNsBE1vqz5LU9agAV9HLzw3aV",
  "key38": "eh8bzx3N3ekfhJfoXFG5Ms7zNRzsAtx1A5BXpA8Q6XzPqHUyG3wsTAERyshT5vBhGhQujtHuxzk7y2aD7aPLM5D",
  "key39": "5MZPH4i6pDsBb6JQ5emJMm16MusRSwhjQxUNiruu5BJWjbmy7WBFFHXrCxXZy9Vb6MpERSNzNGLcacrsedEUBRRq",
  "key40": "1TgMH4bf6cW5PtaYtToTus5CGcWXpjjHcpwutHMyp5kajb8DPcktEPZz5BAscs322XtCSmqXj1XPd5pxgoPPcGi",
  "key41": "gHiTVkE57uY8vX3gn5prKiz7EK3iv7ALi87j7DUvXKZ2niMsjK66q1CTE6Q9Gxa2SePfiLBbt2LC6DdH5Q56zvK",
  "key42": "5Ap59mNiJA6CuEba76ZmLiyjZaSTnGFRkX3etUnZWnw6RjhK4UWMAY5PtKBevVHhKmT1EnsbXWEnx69sj4rwBMm7",
  "key43": "4CU27FQJJqzQxjY7zvbx1WHSpLwhrj9yiFKi2teNBYyfGP4fk8eCwTC6J62qZbnQhk9CLwFm8ej9MBP7c3rjRseW",
  "key44": "4fL14nHo7XucHoq6jddC1PB3Udfgpo5vuQsKvypYhyFUYgPopSaBw3CAaLHTPX1TJd7Pk9t3tpoETFtN4iLSFjjm",
  "key45": "U7LJUNqRcUiEMMmvUZHyNXHabeNAdTd54scTDs31NWFeb64WGEJpNsY9JFPzU1dGq82neSoJqNfpgRbMpMrNGJ8"
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
