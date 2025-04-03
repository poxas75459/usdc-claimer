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
    "MvUhidGYfpD6jM2CQH6AjXZG7ZBsC7XSWepEdR2yJEPf1zku5asBBWtEzF4v1LHxzMJ3cVmeBYUV7gizGBSJfkn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66Y5C6rYbGJ8t2ZCnmTi6RoWDRpFGetHRu1qDii75U6HvfqA9uJ1eQZ2ZbQU1msMRyga4soh2rXrSZauFs9nzisF",
  "key1": "27LKcUN8nZ9Nav9AoEZ93R8zgviKsh7yCD9wXpcnkF4FYzZdULrtwSDPPRhntWTYGtY8gz4pkn2Y9RCvDy7hbJBg",
  "key2": "5SC9sTET5NoAxaNTb54ceKJqyfpsrJUTymFnrNBtQz5j9fmQghMvZ7vRfunoWVkq2hbdbG74QN8qNkHFXaNdwySa",
  "key3": "2ntnZhUGneWgZm4tLbJzwKPRtTzBq4AjtBogdVV7QADkEutzNNU2CSbhPtFNbGTV1gdGZt1Hm24oUVFurfLD4Wij",
  "key4": "2JhESpJwTNsB1HWWUds8KUEzkPWxhXxD7HKSJz51UQbmgbyWj4amnXDP45FmG1SUTyQtHU5AE3Gcprq89YAJ9on5",
  "key5": "2tQrDHmdT2JoubVu7AGLkxQod6yBjAirzXV5LFiJZ7MR2nD7RPfdCGKqz4d2ke4qFy5hEqC7VnHB2oYieZLei5tA",
  "key6": "61Gynw4ZRiDLsLK7eSymr36jyTy4fYnKwGmQdp8TtP3kBtGwvgb5mhk8Z8rKg4cdwYCmjCwfBkUH7bYbY8tp1kAe",
  "key7": "4Sc3NnZJCsrMBJeW4e9wxxrBLRubvPiw6imG2967drL6vGUy6XmoAdgWBVcd4JnA5AMrPjrrbHvyeDr4DNLcGPCh",
  "key8": "2yVqjzqNBTR3qENkz4tV5P2wnCSnVfcTurZNPD4MfFJWpr3LccdaQQZdF8BQbJEojx3tFUowHJLkNzFYUkUxPtpS",
  "key9": "3tKhR1c9bLzEeYLvH45kL518f47D4Ngc1m6FXdJBT4x24wfTmfWoxQbTe97szNcnPEEw7VuAM5J5dxASeFBNAWhi",
  "key10": "4nJK9w1fcTp3yZDYbkL1dPSmxReYUtbbL6wHmahpWL6ZKkzjzcyji5k14dhFfRDAUUiZkcwto54AYb5vYrRebJ97",
  "key11": "399NraY2VcyxYvGgcWg3DAsMxN12o9UGoBZAhfgwwHwUAnWxUQFtYFhgZkMno1aFZqc7496NaqZrKb4uT6PzWXg1",
  "key12": "2LqRfa5xaiLYHFsmRvtUhBG1ExERHzF9bRrTcnpxd5VJLG755R78JPfz1Wu6mkN3EVYzH7JP79hNjfhPsi3Bsq73",
  "key13": "22ZeMUjXgbLb4YcsM6JBaENZ8UWsNoTBCxRX7J6CRj6AxZdLbNtqrUj5fxhBPX7vJcQGfRaAtsatcE9N2hiVAB2D",
  "key14": "5U4raGXCoiD2iTx9zzAP3JqPemN1KpV2SA8LNqfkonh3Hy4wggFg6UALeVrbViccqvajfDjsKkoe6qMQoRj4aLpr",
  "key15": "4VAPLMcJ3KyYeeosruQg9GeUcZuqPJa1hNzG5hXmhwPsWr4mjpG5tftbjFxcihxxvf7cZqPnNNrDkxUVSPqEbNvk",
  "key16": "ZVP2t7sib4hbMVXNSrU2qyjB3kGvidkxCsEwpvPawmAMiC4g9Vn9Vs94Jzshfo8R9gWjXKiz7EaKqRTc3X92bpc",
  "key17": "3NPpuFugtYbUdQHrXWeS9hAZ27pFqQnBgT4aXfXKJAHzzJb25t7LGqdTuxPrwsuHYoFtNinr5fvdCdKjVVsMn5Z",
  "key18": "5ho33Lfmx2aNoQXKNJJDgz5r2RPZhph3fy4EHELTfPZTAbNs9MmzS45QFz6q5vFfTCz5wNJMi8WZsQftjhKPpDKL",
  "key19": "5FKYEeP3kTyAdAVpdyUCu5WqhS73iTEHxnoniEyZ4xb8Yhyoh9Fu6CTPFzWAoUaywDXs1enQnjuqP9KwpXagbBPF",
  "key20": "XXrohuTErp4AqDS2PvNJ4pCcYxZVJi52M4mPSKQSjvjijYk9DNryrXoC7MLdGsvGoUCVL4bTi7B55zxuZKgGyqU",
  "key21": "3Ct2SvLGyaJ9GC2Dnd8zgnwPG9hb9V7MhqrFGjfy9187nQRakLZezX2ipzmsZRwzCtB7cnRVj9p4NNqrLJbdXiRV",
  "key22": "5j166D73thksPYUTouQKZfNjf4TodjJ62gYTPF1asmsFQKQQZy5mKsx4iDrbgVcehyoYV79WN9CBjLPf3GDSqJyd",
  "key23": "56yrcDmAu26RQuGfpZQyLDZe7x8mhz3WgjSrWnS9Jv6hy4YRXpNW59t9LX8kuJ3C4cikHGG52mGASsB7koX1vuAx",
  "key24": "2Ws3wzF2rhh1WRwqnbvDAbQMkSCbsB7vgZKYC7c69nDdUDreebyXrvjXhFRj3xC2h7gPKXpPNoFUY7i6wKCrfPLn",
  "key25": "4tCzGpGdcumiYVcUymss6eWLTZkVxdZnY3GsMaBNKyZBxNhcRRxXXqBHEpRn3nqg5gYePmFBXutsvxmpopCZqywM",
  "key26": "2hdK6nD79oBrSvuDiKw9Bq3AwSo2aXY2u6SuJQ5tMsPbWTpH1SyYY3pPufon9GAQjLf7ma7Dvi3aBH8acqob5Jb9",
  "key27": "24aNXPWcyJ9oG9GeR1xkc5cnT1kTL7zkKzfPiD5PLq94nc2xQ8meD6R46euqyXgCjdMXCB4QCKE572JYfXKBr48d",
  "key28": "2cX7EUWrwCm4oG2fqdHZTVM823pcAy9kjjWvu4zDKQhoyjLZP1nY4ifu8PCjf2a2D9dMfVVfwFAvbGzhwSFBNKqg",
  "key29": "5GvghDnNDmpD91m45GCQ1KuM9nxdvTs2B8oM8LwoADh2CPaUwufMELbWpWCstcfWRsWwMRVGMXerX62gb2NEd5gB",
  "key30": "2dqoGyTgQEvqG6VLoDacKh5DjbDGc6k2vNDvQ8GNbFAipoWKxGhKjnhATjdjaFnEzD9r8zNG7kuwKCZ4oAoeQknn",
  "key31": "5bnUiXjttLn7G5auasYehcXFrYe89sRYNiUfdLojou6HR15yo64zJubsy3Yuq1gdv7R8qAhfeu3eawhqWP6KHwrk",
  "key32": "2crqZc5EJkLkHEXnq35rzKrKtq73iZGGKkg9osxhqwiHhUSCrPxGr1fYsWcLWxLEwhiJY2HPMR3GJj8825CxKvwJ",
  "key33": "3ZGZvaFqcPbu8vE3KAwpd8J7CEg6eZQ7Ea7Yv2kmzJMoHxntvBPShsjdCEyj66rKfArd8CMdTJ8gf6B5Dxmb75y6",
  "key34": "3hQxwYE2smjsRsegtaYj3JcC7VCw1BNEQuD4j5AxH8aPE5zQ6VurQJ4AhRzRuzkvyGwWzXDoeNKNWHu4dnA9QW9o",
  "key35": "2j1CrrMhyjLF815ETCjWVa6JWEwRwvpggc5nSneY4Pm7hNXtZVqBEwGhg7WkZFfPenXTYqkQSF2xLy62XG9v9znx",
  "key36": "5TVtbCLXt2HaHpgrwA9VoMDMX37mPZASUxPFfARF5Z2zXBbMxwpYRTGuwbDsETcRij8J2MscVF645qqABUEURipo",
  "key37": "388pZtbkgyWo8Winxk1yCD5xBKzcAvVyVGxMM2urCtAxVKio7hKwX1rS5LQMUUSiYwmHJG5qKo1z99UBdaXQtAke",
  "key38": "2Zava6iQtTr1eaSKGZBvFhmjdinoFBQg5FAX3jsvRrCR8GiTbTVCPsTkoZcxW7xw7pP6RokWj58t8aJRQ8hHiYjH",
  "key39": "5DBucrWrUy5kfT2jBvUnqvSkfJQnMM2zr1ErptaHqjSLRURXPbEVi3ARtNuth6jqp5FqNNKXEfkYdWFyDMnfbiDT",
  "key40": "4M6ETzRYjJTBz1G8tHhcKiH14CynkdNBUFuUYXH4WsKXnHtgCEoqBFo79rBZrbrtfeLGsYUQsaWLhL4Dr5a745wk",
  "key41": "3R2vDu9mUgn3Yz3EcPn5aiTo4odCxnMNFMsvd41VGmNSbXsfeCxFYRRe6MsTM6Wr2B44jDe3EYheKmCFmqpjaSBs",
  "key42": "4dBDbu8rCB69MZzEueWRNXxXfRnyUenAqpi52KMgP3jwNZatya94WW4sSNzB1zNB1pTUQXweQQDW6zkGjysQaPjd",
  "key43": "4krKFb3YRuQwaRedFE6axvpJBDvrgdrrNj6UM96yQh4DPySRSBH4NY3y7wdh5PnAzawoxUe5T9iRGbE5etaJacBk",
  "key44": "kN6G9jvN8gd9ATBMBfzpWH6B5Mwa2hp27Q6Niar29TMQ2GcuatmQQoHAh1JNK4naBYmDZAdNbx3TqZP9kvdfgJN",
  "key45": "31YHbzHjtpquPbrrUHznWQaUSQFaBik2aNRnZQwWpCS2ApKamfEMtJPEWJGsCFvQjF6GAWK1bYaAuinGtsFn8nyU",
  "key46": "yQBqoy8caw9NPF8m7CJNysV2kHYtYhPtLWHfP8myoXqWVJ1eYVQPn1CJ57SkGR3S5m3zEWUdkMNjC8muLqQMDit",
  "key47": "3GgphvtUmK7SaiWqM42Lnb9nMKxJz6G1PuU25uJyGdrVu9xy9u7LqUALtD7pQEaFXFJXDb1M8PGNBnshL3iCMdfB",
  "key48": "3pNpYCNacLmMR47wWPdD6FzfXYn2awqrJNYsYd5KjdqEn5UJF9evaqykeQLvY5HChLfTJn8bYv9tBGqUgV3YcPtK"
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
