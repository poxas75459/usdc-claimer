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
    "5oxWpy6ST7Y7yx1UJ1nsirTr4bR5PkvzNULmFdVuN54gM8jzF8qbYjjwrHoAHMpwicGYQPRA8V4WRdkwwV8mVBro"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sww9KHzv3sTKP2en1x3arGrgeQudh5GBb6vwteF3wrqUHiwHewx622dLxny7rWxA1utfHaRQ1mGex9S1fPvpafH",
  "key1": "4tVmXKYi4jqqRyhD81nBKwmkc2QqCjNkp7gDdWAEBXTYsAzTCNPfgmKYSXd4r7g2JXcBNUmDUjgScFyhzPsZX8Kf",
  "key2": "CR2e5KkdQmgFacNoswqe4JiCAy1SynjqGFVuppJUsPdwLywU22QSVidhWyt7wdHSthMKDyPsUy4w2SXd6XaN64G",
  "key3": "yGxunzPBgR2RZEk25yEYcPtfdkDoSDu133R2EvzHrguqEwD9ktkoHL8b5vxNAPr2YDCXdu1HMkEeuu61R92MbJW",
  "key4": "5UyCPNqCbtvJk9vqkc3bxnTBVFT7RzYBHFy8H7L8UguQ9w1yfTKbCxd56XAkLEMU3XhFjhCvzrWXdxb6tKqR55bA",
  "key5": "5r8DtvFoSSh4gUdqVsZZ39e9paeNknXC9GA5vnjorbdSVrUfKyE5GoJfWh6EBUeRauJ82arXEPY2KwTHdsbEKyHw",
  "key6": "2dsQ9bWJmSTD48ZvA1qSWDXagX2KNT62wWFbKG83BMBXtLD3oeWYJjqiLeNX2FW7wAHWAgcVpAQKc6ZcxA7wMfa",
  "key7": "fgR1GhNHxi5u8pyhDXzAKZpQezQ87mDumpdKPCVm892DrZ8XmE5JufkKiXwdZXjVqFkpDFdca9RN2zqCW52sWLN",
  "key8": "1N4tg3TsS6TP5YTDVWgSNxtiBquCiih62SUVQj7qHTSqqswsTUsoN9L4XxSWGwLyEdsHPh1AtHeWMYgkfmRCUig",
  "key9": "2A6pMRUeS99EKrfiCZCiSZfk49wWFhrxgv8APCMTarrUhsJbJap65STqFkKiJQJBxDDmFFG3mTsKqhu9spdNRBAj",
  "key10": "2MshP2gTurqNTSmig2HwGkvzwbEVDDuRTcGgn3U5TobepNNwATGYjgg9Mi9iN3JPNeSoNgUrooz2Rgc8NZM4soj",
  "key11": "7WEpXFbKSxbCkqsWPSe1voq7EjiLWHZY4yUvrb2LiZq1voNwWRSF9vu8zfJEsoW1Ac7RKxfJMFhQe1hZHLCGsYP",
  "key12": "3vixKmLdbGMRzY1jN8kxUVB8V7A76uAazhpin3E5JXkWD5zLYTzXGkYhFAewS68ZkNn6xxi28bGe1anvvLPZ4q3P",
  "key13": "4LQj4bu7MpAWMJVpmujZT29SMcdhx3RevMBaHpamKn9Hze92pvd4VW6fHtEou7Ewd6ooxAJFRbq4guG3mcW98AaW",
  "key14": "3kr4nuqY6pcqvyVYj8TS8m1B6CZjZKhPufiN7aqcgLtnxC4cRP9hqd8KsoVZxmmRZ7JLB5BKRpA6KLPnr6WGrAW1",
  "key15": "73HxePKY6zaSJCPnkSmzcPbHpF3N1ATE8GC5ugpGXQzL2PwFR9L21KWHHM9oZr4RCVWgKCyu7iWT4Xmde38fbkq",
  "key16": "sbCKTbLha2155tHWHzCsk8NW4W9tLqnsjtz93Weo8HDc9Uc98Kdv7ooUSLhtz7f1myqW95pPfTTr5D5b4mc7fLF",
  "key17": "3KkzFES5s2s5cYbDk5hJgMAoyFibWR67enhZ8f1DMuh9wCBnaNH1D5iNtwNqNCY5hnfqUuRiGSdmheziTMG4rfWU",
  "key18": "4uBu9Txt9b2dggfgyxhGH2FMFgK8oFQzqVTyQD3we2d2FD8LtADifmuxQWrPmMqpcanBWDZtbEmirffQ83mba3VQ",
  "key19": "3N7VeRDVHLQpXHZsLmf7U4cRzqaWN3vKvaSgE7S8aBbnBvjeGnrjgqTRmujZuchgwRRUGBzfwDLqK3VEjhzXezi1",
  "key20": "26SA55LzbgsMX985F1xx751H2jqFUAcnMfngRg1pUPtzb368SegikBG1aF7LDEyaKdk7peKq9uThVACbcXCDQ7au",
  "key21": "5dcSqLZw8Xoi1devks6K6UBK9F3NFmbPK8911axT4SPK75MxiRAy9gs9TLgREjrdZ1ZGDBNGaq8i7baErs9pcPPi",
  "key22": "5Hi8vpBwiMvsjm5WyuavEvr6M4j9UWBX1HcF3hHCd8JoCFPGLKSZkz6Y1atshzTU5eEtTjam3SEjVeGDbYAni93f",
  "key23": "352v5RUUt2erB1NsgsD47dBpau566d7oQWKtHPCtK5ciWBi4WniW82gKFAXRvVn38r7Jsgc2ftK2iTMmjn7j4HfE",
  "key24": "3rWXFmhSFhX2miSbdv6AqEDfU1vNXPednQhkp4eaqJPiN2eKJTw2rVAXuQurk3EBBSK4YxMdsnBEEB8YEWyMH4Zw",
  "key25": "28C2hA8A15Fq3k26EKijZUFofSfgrGxcxFPeKkhkW4SLdJ2inXsEubYxuyk45Svus5bPhSg1WC4taY89ff2rUX6m",
  "key26": "PiLdNifYLMpoTC7ux4MwGbQn5zMLqkv2PZ6w55vXNGPgtQuwrYb4scZPdUzHaPLhyraF4uo3nfhpdhLLT3kwAuL",
  "key27": "mvqa8Zgw5uMMG1fDHJWHnijWXURfrQH4yMY7iz4hsANmL24m9SWFQMg5hkeA1EbCsb63tXqWutZjnXTMYRWfyhW",
  "key28": "2HdsXCjqmfxLvCzC47LP66BMd2tomzVGTfPQVUaFQuRhsxY4WYTECydyTKYi1g6x4JPN5LKJHv3jS66A8faDMGjy",
  "key29": "2ECTvah4rCbWR1X4hjwyRww9PMWJ7cxQbSnsdGBPUvWYeWML8dPdZFdgVWu8gF4B8Ykk5ZEc6CkW69gRfbuYBwF3"
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
