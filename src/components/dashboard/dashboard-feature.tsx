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
    "4F8YLfM4eGYEE4ZCaya6vLNjv7sfA1xkTN9m64Mk9Jgp47BJvWE7Evg1BpGer2wshjmbrSYnaQgNgJYRcVfwGy8c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "359gKNoFkdv2g8G7gTgLyCFAoSi5V8Cej9aMng16daJUFZrXPdSqRBXiVVcBRy67F34WV1mwLzeSyVwCPoTJxXVm",
  "key1": "P178SfmC7XtgKis8saNkxddBXJocs9m996WWHQsL2YRK7YbNKa3CDuDw9AeDpNURvwVZ1QUjmaDwqzNstgh7ELE",
  "key2": "HmJjqh8QTqVKiwpvCqdgEjr2XQpxNZ81wwd1cJcbKcRzqruFo9knRhniBy8qPmS7d1x1NpMqHMaupWpURisJcKk",
  "key3": "2ywvYe1mCVRT4Ny9XzdVYX5YMNPktRr4mA7AKL4pgzdD6GescD4jYr5RXrvyLXUDTFnqSrEAK2XpKzqTMH96afyh",
  "key4": "5Wsjth9wk1haqvJFNopyF2NzqwsqZkQ87Ca2g7YpbWFm7L98u32dCJDz5CCYwgg1Qkhb9Z4TRxkaEEGsudFegjqa",
  "key5": "3AoNqFj3XfHbYAMxWaeSpnhYR7CTs7k9aVBqU6HrNzPNGK2CgYwopF8G3bWqo9sohVrxpkChXaS27ooTaDQ1woPj",
  "key6": "2NyC6wZ8E5jLkSTrwzeRASTdq83UGQC5xwcFk6GxEw7cw3TWPh4mMxdCeffXFMep6982zVpyMM2s3xFwX2VREnDD",
  "key7": "ayJJTXNFznFpspHsR7ieGnZu4Br4Dqzk5u87zTmKn63XkQU9cDnvPbkYsAH4oNLG1DuXT3c73B9dEM1Qj8EsAL4",
  "key8": "4D7zoGtHC2vQMjxUsND4oMpU3iaE3Mzfn8siJ7uvNzU2yh6K5ofzzfr5yGChoz79M6BThYZVLkMtkGR6CxXUVYdB",
  "key9": "5uVjq8un567PhD7ra1JVGHVT9A2ASfQuM8RL3pqRbCRAKfcoq7rLY3sE9Xb78gtnRUn9Dtwjjyrq4dZXFWecfXw4",
  "key10": "4ZGvfQ6dXAHzqZUucmJQnoSkYuF96bJUyAXJrnfG77ejymQ8juD6bE18Gb897Bmd2X7kGk6KuSZzEPAATpCZmzRG",
  "key11": "2z9oyRcaswfvNU6i7WZytHs4rdB6bLy7CjJ29Y3CGG1WjX64x5xjAxLvrHk8fk2qm8deGNzc7WVMrhP1Fhne54KQ",
  "key12": "fEpTD5T2ePpUbGPDjiyHbBM8Zfsxpz9TRERogSr3VgNv2foSYkkMLbcnJm2YwkGmZATMKSLJLYrYGZnvzRo2rL5",
  "key13": "27vLcZ4fhqutaWr8esgQUwE8GG4Pv6NTsEKvqutFwm6z8j34Qy2E4yyZ1gVJhkLhhUdHmT9CzhN1r6QaTceZGJ8j",
  "key14": "3dQqYizPsab2UCGNaDc1B7ag1ZRRydsSCFTy5ZrJgxgzaMc4V9eMZfAGmbjkHAffrxwmSUvFbvkEYyrmT99g4J8t",
  "key15": "2ueS5GRdPgxpdBKSt5nd8TVjZMwgLxABAV7JdbNEj1MZFASQ3pPYWCxNL3E4pMFeSfWX8AgdaGEAxSz5Ewc2sYKX",
  "key16": "3EnUqBt1wXnHWzAZLxCmho3MnCQoyD6ohhqG5dnuN7WY1CJGANLKLmJLqtXxUSsBEbbWpUirpTPUfbJbhFW92wru",
  "key17": "5dtrniEKzh3zEW25SgjBBzTF4TDV6tRgAgPPv2DkqfexgJ3kMKdDQurCNWqSdyCsV1p9Bmxv5u1jor8UG848fbBy",
  "key18": "3jwSwDkBaceVZQSUPBwXVwsT5JVEZC2yu9hx5rF44r3H4mzbSwsXDDQboCFMLHMKYiPG8ZcmBwLmZDsgaGf8SJ7P",
  "key19": "3ztuAjxnRtic6bgrTXCGYhDhnG6NqsoVSwyq1TvMUcRqHeEZgmttTytEuvwDd7KZ2coVMswYYKh6KiRd76vXWV9Q",
  "key20": "5gsmS753HixGVuWGuBDjWPHtX16yejiXW1dmU28RrkqgWvBwfZojSqZ9jXJYEttEFpvfuEhP4Pr16r916KfqPHx6",
  "key21": "daQGzEHFCg4PA9i6V9Z4iix2ujoYcg5TQGgZNsoRbs78UmqFWXzZv827k35PzeGQ2Jsa3hExF2Diqhf7hdH7suL",
  "key22": "32BRCdfsjeBRLtikFMyxqcSjBxR2417kFsdqrwS1dUtVU8kABZnqUBkde31D88N7aqNB8JvvgqBHH7oqPQrpvy7r",
  "key23": "25SQAHrAvhaX9SQhECeaggwb6pEDdTKkYePfCt5gJwLyvDzyqoqJE17cXWi4d1TdSbvWTcWnS6U7kV9LhcQWsGaj",
  "key24": "iVkPAHPzHd7QZrRUGr8nXppcoWUaeXiQNVAyN7xeUQ5X93sx5LQp2PE5qNMEuvJRvhXmR5BA1AuidACxDaHYVXQ",
  "key25": "2KT6jkjF8gJPtaFKjsBXX25bJbSeDx2jL1RiE14Fi5RkoAjHxBnmMXhL6sUh8y56pdJVJgtANjm2whRehMyJivmn",
  "key26": "3TMewJazqizAmCAZRRTU28YhoGkbv6fyiQS1vefR2z8uJtnCUaZ9pWFF5J7vh1B53Kxkpdn7KNAA55oAvgHdUjan",
  "key27": "5XQFsGhiF2a61ZbZpDDxuVLcKPPyK1esUKuToC8bsR7Pm3ymf9TL4Z4D6NiiYaXmLkzzF2BfJNXXGBB2aRqAUwyC",
  "key28": "YTVU2m4EnL4ucdJZGe1mWoQZFQjhuMCm8aGHx749zirPUAc3YeqfgwpkKw5cWjeUdcsHYJf8jj2THGpgBbxVkHd",
  "key29": "5uEeQwWw1siJTh6kyvzzsJVAPM9jmiCcorL4evVBF5ZoWPbNKPN6KKhveiQtxe86ReVu9jAiCSQiQJHKCq3anCVM"
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
