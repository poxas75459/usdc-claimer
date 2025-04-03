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
    "4TP5YBtQvy9LNfqiTn7a7LUKvHG7bHhyYLTmyTUc1ua9GTwNnsZFEGtciKdVqv8A8NSh4xc1oBWjGbRV7p8Tb3fn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "frS9qr4XCUj1JMQH7cgSse3Z5NRMS3dzZQCsEzCjNLL21uqAV4jFD7YfHdKwWAZXcH46Uvsba5FDBK8dfkbNygy",
  "key1": "2U81SuoVdvvNXHZCnkSJM2JNHRsEvqwAVaMikRVRpmx14ZHcamcCR6gSVeTz32U4crUP573mpWCeo4gfEMCULuNt",
  "key2": "2WHBGnCBCg6GzqUfCWMGYjM1R818hzv6kYMem6Hw7zoKiXrH1Zwys1izrWGKKkFGaqTqW8hhe2ZZ9qYZipYMnZrc",
  "key3": "4kq5Wn5uwzaGyfPeLR3iW5jkpXGu6Yw5BLTK9zPpw6ox2nmdaFP3U6Bx7SDz6kwn61HerVZG5eRQYUxMxg4QXx42",
  "key4": "38xauWNSwiQ2iUnogCG5gv8Lv8Z2tkSiinkei7sHe6sbA1BkpTp51AGPih3qFY1P7DFxdiSQeGojVepCGi5ABc3E",
  "key5": "5JUDrnbuebdBjeF2DeWtg63XnBHpMEtProvHCdC4Ck9QmG27QMSpLC9VMajB2ssMnB4c5tZ2ryttXb4AmcpNXLec",
  "key6": "3bqCf324tfSyXSNsSZCpDg7AyWxhZmWrvAtmzzAzSakPvUkE5XhDf2yMYcBx7vai2qNs3AVw5ZxcgbKYMPBPxege",
  "key7": "nv6XZTUNrBAR1P73e5Dgmysf5kVLApKa9CoivxhW7UEj6s1HgNqkG85djXVq2bvSfudLEaWxo1S54UYbNN4RzFV",
  "key8": "5NYPdSif6GQWdFB6Kk8czEt9nQbioZpKgLihHJD9MuNCwHFhXbbjHvaFst3p8QoaFybB3wwMGKYTggjmrESNAd8T",
  "key9": "5cNJwQCvJZUzY9NbsHpH2B933eqYuXYVsKZXFaUySx9JB5aQAiHdkxSPqXx6njZqxKQiMEMim82ay4ojU5JSa94d",
  "key10": "5aj8wzNkBzvcLyT9ZNJdbTvUPdDW6jFcDuDXagAqPrAh1MPHJaPkKoFvSd6ygtFTksi695YRvzfcvbfC59zvehYJ",
  "key11": "5AjSEUq2xRRj9HBKnU1BxxJVHe2t2TVf9oxfhGJimrFXo4d2YdGfdkxGAhhwjeTZdgUJ4VXLYTxo8aDcPPgcLSrG",
  "key12": "2s7zMyazaZbj2iSn48uutP9PpMijn7UquZwvonSf8fMsXM14njYTTcrkNWeezg9azgt36xt8Yauqj4QW9c8oTDXF",
  "key13": "33TjBjj8bUesBrGRCaLFaC69dMZ4QPC3Vxxr3RfnpeYMhjetWHfMnBUYhBBYCd98PcAqtZ7sShxrffEWR3JgcrtK",
  "key14": "4TTyguCozc2yhiFZiWbfhesN8QMQtmBSZjYcpLvz7uLVBQTj8oHPgJPKgWqYKBSKsi3erWG6hiFnm1kcjNsnpyk",
  "key15": "2Sh4cTdFEYH4fcxGmn3RhDAi5nFBFjmRZAsrPRsHbQi19eDMctaQFRS5hGyCGB6MZS4nLh4VN1EwDQJdNx9HcPxM",
  "key16": "YeDwu4b5HnkdcmEzqLVR6jYWwz2bvezuMg5nxRNtoSDd2LqgRtw12HBqKWrjurwBQZVt5N8jfnf9L6CfzVF6N5z",
  "key17": "4nNfS1C3ELoUD3ZCzBrNSP1nL6C7oMEgxVMj8AsWMDhrmst9tTqF5uEzWYjBGbbSiin9FNzfRCXgD2GnpMiT3YEQ",
  "key18": "BowKEBM7TvZT3xWnQwHYoLe196PZeEWCkEXiaYca2F7wdEjjkhsFDTW4GCXSzZkvL5AGtJHAhaHeg44bwiysGwj",
  "key19": "ftEruFvEM8jYpo8NtYAJYHTsqWjbKLiAcNZRqi3dR94yFLzSGGqLo3UxnRA6SqSL7mH6gCXmVqdyjaUYUjcCaGK",
  "key20": "57ijFz9CdPmTmEHyb2byiNgTkS3E9jJndiYiPYy1BTWuZfvRraxFexQ6eZzXxfuw6mNqwVkoUaiSF4ndefjSSoBJ",
  "key21": "4sXo4tm43Rbhf2QSaWR7KkGEBpoCUceMCmJqmVnQy5zeEbFHahjXEwLBfZLeFVDeUHWGhWWuYwBZWDrktCkQSvj6",
  "key22": "4RwDU5nmkzURiaGUg54a4uQ9LGX7LKFikUcCq3yPoK6U2XPqamdq4BfyjqRnZA5WJ7KbpdemV9zLzNY4uWkJ9Z8E",
  "key23": "67gmHyWYTwz7KpBoVsgqNrZ6fWwbgqNUa1e6QYWdqLx73KD4ekVF6cFtM133T2PQ8jm2WZYrkZ9PkUmPVrtXiaRt",
  "key24": "4cRuhPDLHT5RAdXdDTiqn8NrGHgGeaY58Eb1eRX93rzmPFu8cV1KkhdKF3Nym5QfMvBuHR5X6TPT1DQyUnYoxiUs",
  "key25": "2H68XT68AgmeY4YfhJcYsPHnHMW8fFAGjCHKtSyusFgYMJLgpzzZEr4oxCwC183qf7rawaLmCeVkWf67TC9CAeCj",
  "key26": "3mnLMyUBa1ssRFKq4TMEsSXVgtCYD6qqKA3ddenrawuAkfEd5ipvm4z5QDja12ji8C8Za84JfXfk5Yh6eWQwx3sV",
  "key27": "PaNZ9FFPkpaDz1NN2o5S2W6SYvoPNbG5dGF4BsTb9WHWQKs4e42PBrWCdb7K8ek9P3FfJh7VYH57PQ4CKCgQgpq",
  "key28": "4NfbpSR3UjbgXPbvNpWAKAR5tvUWTtvVbNGAY3pcyZRN4hoRBrJPJhh3eTXskYhYSka5ABjQqcenH755oni7Ng35",
  "key29": "3faEC5qcgPKfK14qxzH6xbAfX8mpje6g5m8xuaxEbsW9yKvbHyrUmPBn652hpuXdNr8JjfMU3JkBGjqy2NFy2nj",
  "key30": "2jva3LdbVT21hTYF51nnPXCZgQLka99RSao3r7XCRbLB2kFwSw5YB6F3sbexkuYg6QGsiMmRmEaRv1kSsnCsx7r",
  "key31": "3PS3TNuVjLWMGsgnxnVwzwi2pZL6ZNbMWyC81WMCiCmPiZkzzFwpaVfCfjQjXcAGYq5ZXDxnLRSeJwB5dJXRTX2g",
  "key32": "58PFJMMEXYHtu9j7b1iYcnYhs88KRXppNfZ28da3BKHiMyh3RAg2Jp6PLKBusHnzMZuHBayDM5ajawPLQXWpJCc7",
  "key33": "2enycHNWkJxvpzwmx2r7qLuk6rz4Z5xrinSJEAD4ozpSJaqyAaNRskcDdB2JXtwFVRuhbnqtbjFMfeAWB2ifCH4V",
  "key34": "4JPUnpFR8gRVbnLiH4nffFtoJ43cm6s9NcJPvquQ4SzPXjBkCpZ8iakUh1v1uB1EafNgjVYXnWKgVKcmE6fTqKjD",
  "key35": "WHMBDqx1Khm7yT82285q1ARXYw6ZEGcZLsfBjSw7MumxAN9pPoxwPGYWaANLDV1hV8rpWrsWMRc6wRLwKWYR1rd",
  "key36": "4cXYYVhfyAGK2PRLYt79hrD8eCdAeNd5JnBL7TTwgEwW9UZyx82Yh5t6o6jG4j1fUe2iViQZKg3maR81q7hYXHfF",
  "key37": "24r6MDUmXAn9RVCJ7RjbRnymztGGMGnVpoqL5jGBQdhCQXxno8x1Hw8cX5umdoaZUjj1VMchRmXTEUNXwMihBsP7",
  "key38": "b2USikziq4zhnyBQg3yfVN99ES8DkASTMqdLGErpEyuY4cUAy1VMdEGorajLawa9Gvjjf5s3LKjgv3LzRZwea3m",
  "key39": "4vmxAQjVcMCkwbwVUTXmwuDfNjxprkQgmbbgtLXcEAjdAQzDgXSLpV6HeBtxFVDvDAJ3PKL4UNJJ1UmpSoTdbvur",
  "key40": "HhwuQv7StuWNpwTcvgfUjexh4gggtHqNwcF1evAXcBRLzWhynJWdBYbtN7HbKXpyrg1Z7UKnE6FpXAhuuLyyH2o",
  "key41": "5kUKgtVvYM1e5xQai2d6b8uKXodZxR1E712nzWPLU6MvTJ9sVLyCsjq6UgyB3WAeuH1DxaLNsVT6kxM7qs75tZLM",
  "key42": "c4nG7iBvqdTsNzvmLo5MVs8j5kmotCMXVnpbhaCVqZyTbGB5pbiQ76wUNAc2Ya1zS4sHXbwwp8YUQ3QwciDsFuU"
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
