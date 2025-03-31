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
    "4ggxgSRtwsEdSZmPtbWAQDYFMgqaVJMzjABvnsdtQihKq3WjdsZH77VHR6V3hSnfDhi7EVz8KeZpcoDyXCAvhhEM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24Be7N9bBbStsjcN5wAN1cbZTGPLfedWDqNnWjAEwrFw5VtU6gPr4e6iHPmjxBpZwFJhsYevVSqkGh7MHQ2r5Rhv",
  "key1": "2o2khN7fg8Rp5kheQFnodj8P3ZS33DQLENtLtZwGxsngCNqd8vXXpw5reqDQNbYKDZ7YiZy8Gtjqkw59bGdZKRXx",
  "key2": "3oVGHDKwF92ExUJFChxmq1AGemjSj34GDP9uiWu8isL1BoDicTpcEUdFrZVqcphV6KHHk8AT1jy9MRqvTY8qmNxT",
  "key3": "pLECRpgsmd15TK9a8foRDZMoNuzqh74bo9646sZrJ7budNLHzL2tKvPckGiVaVGZBh4huoAw741wnynaV1T6E8c",
  "key4": "mtPZXWN1kkAjwyLKyDh56BfPwASbn9d2uwsnmmD8NMuGKC2fHRLdj1wRTSPkzWnxSRWeskRrw7xvTx5WYRmmLrC",
  "key5": "4t74tFmCDAjrc3yhSku22tA14iBHYL3Y8vS2X7VGiHBzz5vn3pnTSZNMjhvmW9m1foWwUHYpEoyDx2wDxoT59yfz",
  "key6": "5ir4inQoHfT5v9gbVCrzKjbFSs6Wwfw4bahKSfWSB6sLwrZjBLEUSVYCVngRrjkKB6jqhwD7sBmdkYA4dG1WRD8f",
  "key7": "3WdLc5Z4H4x4qKfHLMSUytmPNnqwfDptRpQP3QQ5wk7PJ27Wzhpgfe94r7BvfAA2pSUBuBtqDXjwTcgxH1HAW1zb",
  "key8": "2kdxUT2QVqnP27NVcojv2c2WPmaCgxRdNAtDAnzht94PwcaVjN5wUSqSuJLJJtCF4HSRXwJgMuiP6zdYHsk4G8GN",
  "key9": "5iroG974BfSnnuADC6iv8DH1zbaTSnUuJ2J7XZJc7EQs6auoBmU5mWL45xnygf2SY9SqmHR4yCMJ8kXPzbUii5Aw",
  "key10": "zoLjGbw4uy5eHT1XDYJytNfcEivGTZAnZ568MS7GyLP3gurVsTBjGuq9JXVg57XgSY5fy1f3u7eSL5SzwecYXYY",
  "key11": "4FesaUqcNqFMsGSmSEFDqv3Wc1Hoodu2c6dyFC7rDh5nviczQDu2AY3yyXGLCdjbNrWRM75jSNofGQ7gd4fjdWR6",
  "key12": "4rUdWxhQh1iMMXYMCkGysCn97dWNAGpE4aSfaiaqPp9unXyufykeZKDwXddjFerdRgZrFZ21t8bm9SsuH2K6sHvk",
  "key13": "ukuwN5N86w3w4W7YwBg6H6E5gDA3w78P47XVHYakmWfHXdH3XYbe2dRvUavumans4hDCRVMvxEriG6jnC5b6FXy",
  "key14": "4Z4rYmpiR5Vv9giUVTwYzKnUfa1nXQnHT51q8pPpFr65iJAPDkSnnhEomYEbrFqGmtgLp7qU6HwHbuX57LKTFprh",
  "key15": "5gZvTz5C2HdZEk7eTiTtv1LvC4hDy7mR1AEfkvMLZtP6eYhusKcY3va1R67SqVdFqLvP7UCaqqxPeuLo4m9FJweQ",
  "key16": "wPvstcxUmUS1QXZzWoKsfCK2KvHaAaHVyvXY6u6xSUPdpgJY39oKxHw5jWe9sBzzpqV6ZGRFTjnAbjZBs1V1yjN",
  "key17": "Uxi5pUpAQcSeGNMxUfTY51L2rmN71HVY7ux3gYbh8hLMH6zchR41vCLGg52UrdE7inLPrJbkwjpYqsDF535cj7p",
  "key18": "5nsSnoXvmxjcVDy4pCTbs1EamvSCnEtRvhrN9VNX3FCiGQKx6WeZRAikJA72w2j7Jr4QZ4ARP2XhpZ9VMT3u81cQ",
  "key19": "3F1LnJa1cAh58C4VjpQE9DrdTHqtLk79Ry7WcraXq4xvTgRqp9SEYFZ2H7Tt2YVjRR9cf89az1BvmEAjBC6RspwR",
  "key20": "EWtK35o6FCGs4gUW8N3oY2MVRsZWAaSSgiqQDT8xgNRAsQmwmW3LXnRVbLRcHoLmtSeLeayRP7Z6YMYmVq91S6d",
  "key21": "2Co8XUWyt54UixSVsNDrzkX4CEdnn75mFqL7usepWh9EXUR44mzigKekfVRNJ1X3rCvtKEcWmfps3ixvozikCb6j",
  "key22": "4atiUYFC5Dh74ZExG59Zn174Qdgbzom95fZoNmoc1VAS89yXDCAd9AQpv9P99R2X2uqAev18xo1gtETx9AyKVoUA",
  "key23": "3wTLzrQ7pahCSwQM3cKLkmSv4i9gDVcwqWW4bepNRcEE3gCdzKR9s5GRYNwQ9FgE2qa4WDqT3htzvST2shfzfqTp",
  "key24": "2jVjqsisepcQ9o7ULvnZ71AWWwyXudEf7e5SnRwDWP3R5Q9QYQPRVeXCWGMz4D8j38X1muyKRsWVQhJv5gaaQPSm",
  "key25": "3EyntonnC69Cz1jRsGmb2Ksp4sbKVSTGYneXAALATGehPhQRpmL9kGx6yk8zGK2yWKEc9mzSE3cTx8mxHMj8Lu3H",
  "key26": "5oiArqWmDwsNHVrsqGTKVRJ9FSmruAQuAzNebf7wQRqR7cpbRrStNR9skRu7NNXQAu6gGCoRN1Qt664Kp1NZQwNB",
  "key27": "4EkcqLChuJRTdKfcGsofRZBjYifqLLtvzVGGhXudfyyoZuyzPBuKDmx7LrL923Ds9Ju44HQj7RuvCJuFGP4SeYDn",
  "key28": "2M3W7SRdg8PuLRZ4aHEtEdidGdkJXfwfQXuCaWyfxkLevuo4BMaqU2Xv8wT7o8r6J5ftUJHskrgnedJ2W4RB8y3g",
  "key29": "4NtHV2hD5THBhBtypqccF2tbLFT3xetKpkU5tiGJCE1HVuMFfrNK8RZ2iDyiT1JKkqiriHMMjSkT6f8rt8dnyAiE",
  "key30": "4p6ZmVjisb8uwptSKYtk8EgZqa4ztM1UhkSeqeekyYd41RgsMVFykNb96vSQHBnfttSxVcoELz1Sa2jjF4XWXNhz",
  "key31": "4SZF1DmjUXDmdzgbBtocNxXfTbXaVnEzVeAWKTn8DrbNRtWEHLUdtBsv12htxGEa7BKr7kbujo5oPDxfnEciPQhK",
  "key32": "5tJ7LUmFaMpzxnt9oH9mHSmcCsKFUy7RZvoRoT7ufKNV72V8qefzrP61pNf4PpqjpEsgFZmZQ7U6LvsMHYzGU5aK",
  "key33": "3vEgD99EwHNVGXEpKxKvx3GetMxBiyAjzAVuFaMpSN11tzPbtHJzCMde8MtZQdS9Roq8fojFGVmmtpFPEcc45PGS",
  "key34": "5bKvA4D6v6kKq4SodAqMaZCMDfwpVrCqKjHePqyH71vHwu8bvBH5AD61MiyE4oJZL8LejnQSsxcUAqrTjvifPqFg",
  "key35": "W62d1B9XugH1QUnxU7cRYvgdfDgKZQZA4BiWmjxiU3uRA5KMpxBo7VGp1hjShShKxoVfWjmpFVakoBso6NACaxH",
  "key36": "4Cq4kmtyiFbHhorNhexUzGzACbUcCrCnSeZr3xTSHZc1niuFYBGD2buDtYL7XV5gg2xsDYnUC4PFYufXBoNPBwzx",
  "key37": "41nb5r13bui28G6G1nEcF4pJGvH9EdsRddgVrWb6iquKYCb7uNVMmNVzsMQuiVmqcJvbBtSX3udbnn53o9RX2egh",
  "key38": "5zeYgrn9am3d7MSQzpLV7nYRnPq1qtPBvBsdLSCgSKFktibVTKH1ger8ejL7miNSmnhdgY8LcYT4Tm6v7Eqxv3jm",
  "key39": "5bp7a7kYBogLmCibxcvwfgd8TAUTnz4xyzXAc8S9xLoMYuhvoKk8vY5ghDuK8kcRQ8mUwcqx37xhUQG3ioUS2ZS6",
  "key40": "2WzSgLVnTDjcsQ34R2qer3NB4VabvCNBWpPB4nJpkJEmFRYyBeVbHG2ZNGvRxKkqHBfS2tHre5Hw49wADkzma2De",
  "key41": "5EfwfqCjLXj6fg32BXzVMZBrAfdYQEsC1C3EykuS55X41CVep1AfPvtof9qCBqaJxDz854W2LEUWNbiWS9Dv5vRC"
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
