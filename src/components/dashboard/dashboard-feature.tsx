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
    "4pm7mtG16suBwfL8ToWZ7eNzb6vT2anZCoTHrbcbRwT3uVKtFggtwdXfrpSa1xZTBLx3hRkkoQujycXPnXrcbLWJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Wm8rfLvHmjHfkZeUftoXJCg8MkmtqpSj6E2gQCwzfQNkhLsqyStzJYhYNaGvTmTKZCHYay5M6FReCzjJDjX1G6c",
  "key1": "8VKe1g1osYNiB3YWB5rLfj6DhDR732ANxqXvGQNDdH9rKcCxAUszA4ESJwEwYjGtek4eHmNWEBfy4nbE2Vn4Zdi",
  "key2": "64c3fm1D2SUc4tpspXfiXYh8tzBvDM1WoTwWGmRBAXrd6ehJbveKeEKScMbci1F9AadZ5MQ7XYvTSZxvQAV9365Z",
  "key3": "292j1MYqhpsy8ABzaofst4SiuE5DBZgETsEhe7vR82foXQn6fsQUrgyLmDkHtASqc6Vjaw6uN8ZXqB6xCuuLhmMb",
  "key4": "5RD6LNFLXnH2wcwUdUzFGq3XwN1uXeUEZhgrRD7ayufdPT6nfcw192fAbfXrDHGeTA4TUXg1x8S1wvwmTGKkxnCf",
  "key5": "21a98XTU83ys29dFbGwFFqVr9aPnE9B3Zb61oNkJsZwZjVrwcs4BSqn8HvDXZZNbUe5UtR3EimBSzZ6njYNpAzo8",
  "key6": "5BFULTSdfixUqR2T42TD9tTawgpiP7ALKkYQvPUZJVsiUheUBgo8wbRNNV3gtU8vQkR5uVYWcG4Fp58tWQzdoiR",
  "key7": "2XxztBwTwsdNoW7Vdxki8zSZE8wXZuygLX3VHL1wZmWtYn5N96VmjCiCHXrnoQPBPgk5qLmvC3sJSwxcRZrkT47D",
  "key8": "3ZkBWzbSGNoE5kGBGVmEPMBih5X6WDkd29BiRhANz77j6Pf2Sj8cRj38S9KE8dodU9hPYDcFRJnH4aKW9ihwyanZ",
  "key9": "5uX133dRaNJif8D6uhhfnqmVbe2z6fWytJu7fubjc2hQrkx3BwxfKxFARAt629ww9Ea4cbaQbgHpLMfrUgBhW9X1",
  "key10": "PebXL7dpatTYBLZNMkGUWRaWWESJ6NwvXb92A91fsCofjh3R5wHWAjHB9gFV3TD6ZEmx57SQdCEvA6R6CpEJNyt",
  "key11": "5iDoctTfPgL1HtD5Xrn18HYcMKepDERhMWaxFMeaCSMeafGzgYkPPdGmDCGk7wdvkK33iRXDECe8cjYrXP6q4LNs",
  "key12": "4h5QF5V42a9rFqeq1s2CiLNE4ypPeREvrGX79bFPtvi33spy7mX8cqwbMxunRuMHiUq93rjrF31fe6YhMkBYgPUG",
  "key13": "nXVB8oC3CvmqBPoMgChoCYbR8ierwFPZzBvRqpPi7139r9LqwWC5pHW6BknfYWmA1ypa439oJ8QuqsdP5pyfazG",
  "key14": "66RSx1s1CkYgt6YM1amicJkrWnac9Qx1kNbtUDnnVfiR8qfbTxJ8pL6knt85swyj9trmkdBEZdpoETfnwyVzCTfM",
  "key15": "gdZJ3qCjHkRh3v5iqqvXqdruCo1fUybG4SHVpFUkjCtgRPh4hyhfBxWqu6JYRWgH58BL26uTHRgypQFzeNHPiDp",
  "key16": "52ne64RRVPPwzJYZWyBQZtBa64q1VMP6DAHp9NRTJGrACSjddtd85XR4c1ebfjF3M21cgjyhjCTvuR8UmwhgV1Ng",
  "key17": "2jxnwrN6kvtUDHiJPnJkjQgphK6GcTH7e1dCcPi4k8QeJfdTqjRNq2G6cs23x54954XRU7dnVco3uQnanaHKuW6C",
  "key18": "22ZqdnQVBqbedYVYLuXVCXxQvkshGJroAZycnZz7sqp1vbM19tKMVUxPyvMhbfXvbSxtqD7Z2c8ieQNBuiQMjXTb",
  "key19": "2p6RmhPR18VGxeqHngHRkF8rzHVERwmoR6xFh1dXKPXyahx967zsZx4jFXYZEP4idwU5mxuqjjFVHDawCYCmPWKu",
  "key20": "4y7qg8D62cRBVbJM51kCoq98SjDyWQ6YPbpQeCkLaiTNne9yKRpzVY4iZXRXcfr2XtU83zZnGbq1zxEr5WYhcZzk",
  "key21": "3p17GmMWVm4h8bLjcmLbvt7H58L2estrQ1sk29ZVzXo2UgkaqdEnhibwxiyQcDdYi8btmkvNhXmWgEADgyGN7eC5",
  "key22": "rnbHykPkPmftUgzNDi2AW11zfVqw5Ewta9MGt3BufTMzxn44ehsv3nM8YqKeCxy9XUiL4K5cnvsCQQD6MCVe7Yh",
  "key23": "XD387GoCTxUkupqSPEJXUoZuwEYzEwgPBe73tHncydjmM5dJzutkBoDmt8nb1uHFLAyeWZ3HETs6yYcd5iFSdxg",
  "key24": "5ZLWny7CmBiuR6QbeLq8zGKLHu6WmR1iPmrUDmLt6wdebMUSP8vg8trE3Hmo1BUFYXr8a2utN5VfWdgKQja9Hmdw"
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
