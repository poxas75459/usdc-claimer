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
    "2ZJqwTrjvmUCBRqP3MVbaQ98TTbdX4j2vyGgeLm6PNbayfR1wZLXtTXuvKgJT51LewW4SuxGDx26QVNTi7SeRAA7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "duSanNpa95CcrAzLbdzMpBN7FA8xfphSMYTvWB7dBARse7SBxegEw3HVVGBg8kKg9YutnAUVw1bS7k2RB54xRMZ",
  "key1": "4PRFtAUugG2nnYzrvjizjoexumVRTAY9FGRBbECErUZZta9gt3CLtNk57PRBpV1DHQpXJwYhh5oued88FXtBSqyc",
  "key2": "5kasDGSJy6JTmaDb3TRuppNNVCjjx733kHUUWVrYpLyGzCrhdXUYqQS5gcMfzQiq3r9RqrhxNqzdXUu3ofUVvpVE",
  "key3": "3sC4QDL9NucSEyVdLUR2PDqgS2PG1wqq99uyGj19BmD5CveDQ2ibH5upwZWRZH3QJpr4qFdurvawuTg3TiLPAbcP",
  "key4": "4kkQ5UEgqkxrzspkijQUK7mXYQ85Zp8CDxoL2WYvJg9TnESCmt2JEfewnFJV721W6uzFFdLF4whnHB35xqAk8ztH",
  "key5": "5vG1MjMc24mVgEh9ek4PAANnnb8ndLxywR9Ci9XLWxGztq3pK4BukcDYnQ7qj97JMbNqn2CkCrvpy3yuxJ7a6ut6",
  "key6": "4TkDpko8nCXLnpWEdJSAWc2aSdNBab2R4NySopzUnGj76nj6zu3Y7MJtdN7yp4Xsm4mLjmwBqWzVo5dRT3viE6pz",
  "key7": "5MQtGRH48irYYXXgQMCGCEtQa7nWvJhYZh2NAHMvynFdFcw1LEMw1vvMWPjhFwzPEXTpU3DtcaxTApJZrseLABbV",
  "key8": "5TgUUwRS4zwAZGwLx8up13VdjUhbyAbqausfz5iVkXQjqyGTrSPoDDwQFr4FuXcVugwSykPajTDmEnWDQf2mCVZ2",
  "key9": "2c9fzwvbvqJKa9EVrqxqcBcyYv1vYHH61b4iobLCxyibtnwmQq9g6yYgxDFjQLXP9T9HpToNyqMEWJhufmx9KiNM",
  "key10": "3hCXii11LFSnharKEPvPhzudEWdwAfXbMved5YcyN8kBBMXn5mGjT3sNCnXzY9HbzKR99gutLTNVTJ3eGEPDCup",
  "key11": "4BRhnCwWTTG8DzbokuFP2B9DvNXEtZPUsHStyjDTvXQyXo37mKfmVEUMxrBeaGekcYgniZBKrajajpKm9bzSbUnc",
  "key12": "QMfHWa75bKq2ygbENU1DzAoMFX2T3otafKmnY8goru2333mhMtqKt5ExPyvy19qFktwwBMq2Am8rrWNN1KGYeMq",
  "key13": "PjtdK5PdDVkEEt1PoHmhZFkkcu8LQ63EbFFKA4x48feNy7JJdAYA6N8xwBMhFq8GT6Zh6X26jPDgMe6Ka5jNFy3",
  "key14": "49kQAR7jopvUnuWCFWmpAsHrujPEuwa9frZhRf5U17xhG678XbvHS57i4quGFRD3BXz6eXW6u9eWWxm3S9tihWYx",
  "key15": "3FQS9TTsUmG1Hdpfa8JFgng4VdwBbZMhD8rhGQDLuYsEvoYc7R5xPA4Yfp8HL5u2Pm44WLmFuYDMEJ6phEDZuKYV",
  "key16": "4KaTrrsgzCUZbXXV7ey3K45ucTvXV5QFdj5dVzFMwcwn6meuYQiWM8AN7yKdey7RYVXrdyhSLjt6QbrV9SfK5onR",
  "key17": "2cdWYprCG7ZhWfEWM2tDsPsBGUErS2emXw5ihhEQeYr23baCgcocR8UM87gwwSAEhrwvcFVXkYXjBxgEyYM2yzSC",
  "key18": "3qYibAzfWKLvLLouhEi1USjXZy7nLdPaW5z41YG1g1fcrj7ikFV1CMKgvrPZFVxe7XbJYt61bTi5Fu4VjsM6JTCZ",
  "key19": "2pKoaVAekC3SbfKE666jjsCBkMn3TgYyApqkedvryKA1zN98CY4nDdndudgFma3N7rQrk41nDV6FSb2zysWEf4Hj",
  "key20": "sDDPr6txbqKV11LUN86ZKUn9zm8xZR9g2vo61mQSRGKQ1enDQ7mB3Sshro7NWDCHcjoY1HxrTkTQ79Zqry18d3y",
  "key21": "3zYdPafku1curppi3mE3ChG88z8aS4skE3KfuLBUwSS4hDgVQ5XjD8goWUA9zxvChjS8B1BX26RYi2mXkraXZB53",
  "key22": "SuVTCNg7vKF4wV6ifQzPL9qU5zHb7cQnjSLDK6pmW2TRikHSiEwr13GQ6jo2tV9EZmYwpbCFDEASAX7rvpkFSia",
  "key23": "5aMT8NAS6mMsH7WqR352tjqAEi2CRw6xAMzqUHddipsoHbCqt9PMhNUGbV1kbfuikk55Um5GWE6f5k5cDCRf3uNa",
  "key24": "3rLQVZ3HX2jQCRVeyJDTdhAZsrW3amixz6LvAFDEYzRC7xevAPhMu6pbqJwhMHoRJk2Gz7qUHbeS5JgVohKXTDHQ"
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
