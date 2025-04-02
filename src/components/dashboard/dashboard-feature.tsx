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
    "4tqMd5WPCRkAAfPWnhhqiKsyRnKm26FHWs6MqY1UFohDb6AUsEFQTJesS3PhZE6GQ77itYBVYegH26Pbph1G1ad1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8cysgpLRG4vuLFf1cQQzVj5npcaVWWSxytH9SjHuZsCfqbwDKNB9NudPbdgCVDsRx6WrXNZgb8vsG7jf6qeN7Ae",
  "key1": "3tbxtxVQczzca9iGJw3CyxkhFRVbTjvirXSuchuBvtYRqWKmRwgQhZo8FJqj6bPeeDC63r1uXSJ5K6v944pv6GL4",
  "key2": "3wCuKCoEjdEZfpLSJWVq9hqE8A8kWbNJUJhX32FD6ZxEA6x3E7PKbnBqvh54KFoxgay7ZL6tB7hk85vZoYjCo6Gt",
  "key3": "5TrwBX6FwMZYbjzJo8qEm67iZRbjUaiUw82yXBDNMHUCht9yWzqE6mdKMBBjns58WSWRJfyc1vXP9PCCp9umNzwj",
  "key4": "3jVP4WzritB5B6wjsZr94K4QKCBW5CdNqPDUvtEMURsrFHw62U7L3QigFAVZfzX7bLaepyfFVR9cwzEeijULypKH",
  "key5": "2XzqBvbWa4nTMj2GM6TnkS2ffEL4QNaS1TTqeTbUMpi7LKchWwuuexSUEWkziVDrsUkLiEFztJWj2gBrxXEi24Tz",
  "key6": "hCkAKdvTMpRULqumNniAh5QhfcpToh6pfxDZ95svVBajrYsvWih5UBgX1rY9k9XFKSfsbnpCxiTAbiJMDh87Rct",
  "key7": "5aLZ8JAYQmeHtCJGn5oy3PBCx86zqcgW4enTPA3sK53nAiy9bdtZkQYBHGmcXYoHCBHcyG2UFBivAWPGqt1WE33a",
  "key8": "EDsxJgRM8TdzC5ZMG1b7R1W2b2m7sUt7USZb4djVw8ajA5hZCHCvS2jV56J3oZn2Mx6uqAFvggfcGFhBx76ip1w",
  "key9": "4VxUCT5qkd2NSHNfYLJmj43E6UBvXPWmdnZ9K8skuS3kBnb4hCAw1MYgwv81RbaHXwRSHrZSzjdEqRa4kJpSATx9",
  "key10": "3iiWC3YHaQpucabkvq9Wyx1STqt67ymUkH8By6HmLuAQVuHSdyu4n9EaMcnGVV3YCVQs3oTo9KgdrcRaJEEsMzbm",
  "key11": "ZL95txJ5LPh8AX1nvQTYiS6D7QqtUukwhgVX9GRNKTkgB1d8Ry1YFm2EFkxXYSQ7oWi4m7Abcg8Y8y2u2tQVE2j",
  "key12": "3mgaJhQER1PF5w9rYCiLYWCq5ccnxX8iRqWwZC6bwebEjGBhv8AbAygQxngHP9CtP6ujtm7wkgYyuC7uewrSCWv1",
  "key13": "5Ntqp4RgghH2WxCcYeoc7oSSWLC4pF2W3n45ek2Bk9ZHCCLTcjPSqFW1VbzyAMVoXPpgrj5VnrgZQRa6C5jrskZV",
  "key14": "3eWPaauvZbkTujGvyW2nYoPsipGsrSqtjR7qva9zQvCoLBdbLE38a3bBWwF6vmiVPEEG69J6BMPy47XK4C1YM6Rn",
  "key15": "4mkh4Rch3UCvJrJowp1sW5LWSFGZej6cJDre9bq9hC3AxioGBv6iw9ikSTr9RJcBfH6QpJvdjPY5vtNB7wpiUDgP",
  "key16": "5UYbDUmdNgdEqJ9aUwQLHuRT1xBJGpC4K2TiiC6mixx9c5Qr4NPP9Dw7kJ9cwzTRqWi5VLfS8EG76EmEz3DtnHFj",
  "key17": "3xcgi1Lq21GbRJz6g127aJtqZEFnbB7V7AJaivtPbMNXrLoWRYvF2gpSD7bfdq2UqG8VGRqdUpGwWqdZeSQbcYmy",
  "key18": "PaWstLXwTNPz5522QvRXBJ5q7VSAKjHJmoiVaxWtU8mwyFjfyBrrKwQXX4STbkakcWdPUoG8tVwh8eMj1htP1wd",
  "key19": "3TFjvDvEiRkLf4wnr7HffWTDeDqEg4LcvFKntx88iuRvYWkS27jcDLgvtgXS3HLzfFXG6a1e2LD3EbypaZJ7P3Nq",
  "key20": "22FeQc2YJQEp49JujV6NLeDgYCxhtn9n6nNpAvLgCpyvuh99va8SSe1NkuhAr2Ru5voxP69aP8WavqgbPYfxH3VF",
  "key21": "46k9Y11stoMGut6uMwyst9kaGmHfie9utrcAaRc2uCzgsXggFh1qoHDptJnKGFqLZkakQEYFVrxUDbdiMzxAGdwP",
  "key22": "5vPiW1rMgWzDsvQGh9tmbpqbkV4ufzJ51fDkTuWMMdkq7FK1wASuyUHJXCsvFDbThvppVrppDD36TwnCYmMuH11L",
  "key23": "2ze9CrLHWnQT6weBm934vkeFRzZpbinaB8FJZbErvNFUC6SC8CXBNveGmuFza3FKam2K1zjr29cKuoA6kuWrw8T5",
  "key24": "Pbz5engsBZqF1nUixmJWSQL16KgUjJWybKPpDLvceimqADWa45a22jXmmjzQFMMRFfAGneCtRwHoZbni21hoCmg",
  "key25": "3aWTfFfbnLsxR4ZFor6oLGdzxaUEe9fEngY1Y6K1seYHSve4vmhQMF5kfdMV6Z2CcUAe3KjkrdsZ9BjcudeTHzwJ"
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
