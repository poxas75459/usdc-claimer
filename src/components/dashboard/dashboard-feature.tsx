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
    "Wkhs5S7ppgmMhkumyCjcu6UidDcm2bNPgtgQYKPpGpdZP6bgtPGB4gggJuwHtZA7KVDmkyHWWKdG95jcJMNUNg7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23M7PcjjGbAmQs9okRkjCrEaJ9K8CXu7MndzDoN8uJskPHRXnqhodj5SL5gLvSe1s72sVQJZwM7xD1bJ7TpxJaE8",
  "key1": "4fF1cvo8tn6nbHsc7uRH7fYYLDqdeF8P8PtqNLmuVgFHLqPDTEgJ9CPV2Xx8TfmcrBF6gR1HiUP87XUFf2yppC7D",
  "key2": "4zN4Ug5DVisttjGKawJeUMNYmydWijwSCp8EpGJj53yt1A79yAY2Lb5rbie8rmK3WxsDPzwLtir1228BMZVFWZMq",
  "key3": "5r45LrnNdx7WwkJaktEjcZVkvNpt6KmwUBGL3RGLr4vCusHv4vMq1yD7jt1wStCqAtuoRyaSR6tzz4wfBjYDCmYr",
  "key4": "3zbMYsTnytPLhnCAiM6BKFQYCYcwEQiwCzNqrgayiWoPigabdfG1jvLoFCsnX8tgEyiBQGtRrGYjQKnF6wgQk88g",
  "key5": "4daKJFZUVEsciFoh6xZqge9B3w6KgoRCr85b81AqLLZYceCu19MUYhUTr9RTXfqDuZwuD7Ztouzu6fEUPXk65Gx3",
  "key6": "i2K6GwUZ8ZNc8WH4K33cAxSfHNGf9dvVt9JkLjK4LonPv5ZRtE9RXGetP4GuXBRZKJ4CCS4XiNEC2V4pDpLJncT",
  "key7": "52oogckjA7LXaLrpUezvAsQ1Nqsj8fAvzJazTBBkDdVm799rnn5ip3zjwQ5UR3j8zfBScS7FapotHKLcvHcEvRB3",
  "key8": "2VV7gak97b19Q7eU7h4e3iFedU8CHLAxPf3k443m1BphGx2qvweB8e4ZVdBM3ZUG5JMjcd1fieTSHYneBagyo57P",
  "key9": "aYbax9oErdnAMx3Suf7nAjxAqkfGBYA8jFJYUo1xwFjJqMh8a8jButCmY4sE9TMJNfb9FFB8CWRTgfxakZFyS45",
  "key10": "wwrXYfdT7253Zof9nr9ehHBkT8Jq9deRVNgvsU4mKnfHXR5WK8a4UwoAxwaeKGvXZtJ4H1zDgJdLocY9iyBwfnV",
  "key11": "stdK3tjUHAmmPNgQUQPSHQpKsfKwyYmr2nKyPCDTBUdB4F8WFCpTGa7pQAZFFuxvXWGCLa4VFsr3M7sGPgM9dbj",
  "key12": "6zJftVvVV26UtkuVyYRUX4AeyjoFx2ih6VDVxTcc453dsLmZeonEivDt5DYb5zMwPjNrbf3oUXFrWDRZzAQWqX4",
  "key13": "5yiG327yuuQP3nefexVAZXxWNVSgNPFZ8RKomH8QK7akb5eAfccvH6hNNmSdDLsJCv6HbHPiTyFTyM2vmGV9LaKK",
  "key14": "4WXcJvGT2GYZo8kiMjEgRookgb7qZ5mzo3HNqweE5ai4obHBcSPvyM6VRskBpzHdppgdjXLrtKnRxzki8w3fHisW",
  "key15": "5Du68EjSumpdnKZb5XH1WtUPQesQRpd9aYHB3KiSVhjJXthoWsTaRYjpNit7LWeq6fyqeViGcNQBL9uirHr5WgaT",
  "key16": "36grg4e7akb8DLJ3YHtsdqYU8NX2eowuXc7tsoRgThpa3iqp6tHRbQQCEJEsmYP2m5fFKYhECx6GYazhBguYJrRs",
  "key17": "5YZ5diYumNyWKaiCP8RZ3qKrrKZi8J4i9nNCPC8sYvp6kFRtZLyYwFLohEeEhvKJvLpGMoTq6H1JsnjvLAhWBUvA",
  "key18": "oTxa74jyvYpiNjhm1LKGcZWx3WZN9rwubAiPeoVeaMksQ82LFrXayWMRp8nKNmCg3moXLgV7nmP2htZi4LjTPnx",
  "key19": "3ebm7dTtvxLfvbaC2skqCPU5Sins8XXAC2jiUCEa3HcKRBpT7CJeNtFvSZoRhwWMM6HX2gTJuerRvFaotdbcnSCw",
  "key20": "3USwnsVA8amzJVTNgUfgZHsujfPRbjKfJp5rwioBbaTKzxxnm2WqkJmov6oXNnhjXa6czfsdjZJhmY1kjJCxuWum",
  "key21": "4T6T1DpbVn3f3WfqBS8nyfSqYk8fYPXn7b4bsBvZjnmqXhjdSbL2pZVQ2scFre3B4hdywapk2FnzkfA92mavXnsV",
  "key22": "2G7fhfioQuCgeiE5VQc9T1TPaHfw1QSAfxXeezW9gViy7NsuwhQLVU2j2yUJ6KycJxTn8bH8kJZvFJsriFYLWQwK",
  "key23": "5Cnw9U6QxJ7DZB3ZFvV9YfqwMq2xHczuNF4gdos8phcxnWu6bEKgi5u5fELr7QkgzuSUVnHcaR6pXjA51NyLK16j",
  "key24": "2ZCmjHc9L9ccVQjQ3bHS6ipwQ5V1zvv3hcu89umuU5XDb5tqjVwUncXXDrQCnTELmQF7i3qrh53DNyC8n988ydfq",
  "key25": "5JuRVoDkLHntHZ1MdyGz4Z67nWWfL1UUu7cFkEQbz27ZmcfjRFdUfwaxNsaRZPNkiu9aZvAagqWHLE6GDQZkVtJv",
  "key26": "32osrercht6HkZxmzycSyFkWk3neKt2zQH7Y48wnQb9wMr7iaia4Yjo796WANWvwQLpv5E8qXTbis9oiLUT1qDJZ",
  "key27": "2EXqaXYdAcU8zU8pnFginvu4KYAhLJ2v9kcQUCkvEizqxRDvBKWtQrNg4PQhMt2ux9XwXCaM7pm9iZGUfNobJr8c"
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
