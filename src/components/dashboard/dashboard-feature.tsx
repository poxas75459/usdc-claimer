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
    "26gNbQzvzsMP5yDDS5qN4QovuvT22dLGXM6AnhaggKLiVsxS8HXzo4etfjtEZMbXMFg7aCjCPqYtZcB4ytYPX5J6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hJNu9VVRF6D23KsY3bsUrUwNfmmFzSPJyoKkPe8jzxoX3P4cR3evJVQ9c52hkswD6HNyviHrfEvrnGr1RvyjJjB",
  "key1": "3N1E52nZXWagFdmkVN9PX26866uzowmaGirQshhxfQp4mu63nosVkEcp2tWvszksgh6CC7qffNmzVZ2TULLWWXrh",
  "key2": "5w8PkCiUFFHLTpXqzPGkYMfsvkXrnYDB1sHdJcBcbMWDg9Tx1KH6SYQZh9FEzXk9BiLeNLVW36zGLmx2PdRPRMks",
  "key3": "5eYgdSYmU1ESuNsgfWEdTM4SFV4A2K3iu6TBw61YBjxyUXnCuYimz12Z2Vk2BDEWKM6g1drSp1j5GaBMDpsYToAX",
  "key4": "DajgArMDu3c4Zrzxb98FzeSEQH8VkX8jngkDmfmVMPG5pwBsxRKnB2AceNx1rgvi7JvwEpqVCkBcgREYG7u8h9U",
  "key5": "3EG5BM5WgjzBz8eRSzLrGJ1ZxHAmewd4E2jQrPpVyKyDw5u6v5J7b6QK4U8jhtHxxB84pNz4fWJYeSa3afH8x7xp",
  "key6": "v9es6W98gdParWZn4yq6bkSXs1ug5z2nmfcpzFzCTHWKmDiaTvWDNzE6oDGvnRi5hSCywK5QpEAbNowks4k5XWX",
  "key7": "C6K9TdQvKtPzKHLwNzJb1JNHBrwd59y1Q9Ei7H7ZH8bKTMDJeHZqNLw9k9k4j8mtXo6WgbGwD32vmPfMmtFdg9V",
  "key8": "3Dfd3Q5UH9jTcLKDyYvDD3vQMTJw7UxuLd5K7V6ZFr8usR1UVKPvq4m2mPUfDobJcDwbRcCPAeLraC2Qh7UPXzcU",
  "key9": "3EZYJXVsCS3sbQc7gksbfix1WkKrKYSvm2UFxP3Nz5Y1waGDdGDAWM71LDpaXCCV3E1mbLyLrJbts6QLMHHtaAzY",
  "key10": "2Lrct7pYu3o4KHLThqxjSdGKrfx3YKPwvKgA8fjnM5U3XDhSjC2AHg4ZeamW5sh8N4jyYD3zSSo4kdDCfE26NLUZ",
  "key11": "2ZU1teNvcKBVgeMh52K8oZnshp6qZxVrhcy3uHK2RRaTyVYaTXLveKpz1zgXrq8vAjkfw8JG6nCSCqktRuCQqkiS",
  "key12": "2AckqyQSvUJ2y6hs76TGXfp61iUpd5BZubkCZyMoGYRgxfBxDkh6boJ4ieoaKyhoQr1Z11VDXL7pTEes1mPK2qY1",
  "key13": "BDgnyWYYLtaCX6kpuUKoCE6bXGwfCXSFGiwq58jBuH48CmWPK5MPjtNQc5dvBwqgPArhE9UXqG6nscy7X6BXXhk",
  "key14": "5tE8Lb8vQGQ8StrDQ3eCSPECbQAbTBoCHvrCnT61Dm8zvWKdUABm8d3P71hSAyhqELhvyzXvceqVaY7zerwjGw2P",
  "key15": "25kX4gxgUynFEUDK9qC7z7Uf4EEoKYVuS6QRv2NAFhA3nU7T6SYkQbZ88tABjMVRpvJwadDgw2KRRcsKiEzdcwHw",
  "key16": "dVZdMHRfCDhFuCgfzP8QLZADjbGm81vCFJMuJm7cpPCgkemZtTENMCufUYjDzpwHPgsJA593VbyNRAEuJXuejdV",
  "key17": "53x45RWnCTZ5kmYkyyMeervbH8NKpszdBaUfRG382YwY4hmdqCvwc96BcYYvL9vjKV1ZBJdsw9ZiHP7XvivdDfGj",
  "key18": "5qmzFC8p3ZoGgumD799nyeR3XicJLYPNyXWz94gzh3GcHdALRPXSEywwz6eeU8dZoCktzmEeWLESrYdnCWXMR9h5",
  "key19": "5UiZZcpwJoyfcBQNMziopcZwCLDEYkoYiRBGU82NA4vbwe93Rq8bVNgoiRCwtP5uVKXhRZFXZubdTQNTtntVULrT",
  "key20": "pqmWUoRmVEaLBHs2ogiH3d9Ww3v1pZw81t5NSXT9YDTu7dJpf1H8yxnVtAEAuPT1s8KQgaFmbCbGwF8Hr7Fn9GY",
  "key21": "4pUFnL9dvS8i2GwrUr6it9qargCKq9rhQ1kNQnJJke7mvKnXR9TM5nD8XXXh8xQFJ9m7hN6TL5ZoAUPw5Q7dSNjA",
  "key22": "45bLWgE5joR6uJnJW9wqMivFRNfbdKhC3ivcxymE8xJCUdG3uXJRvMYibkcUDENRFXFA7ogjToey56pHwkNmjVc2",
  "key23": "zE5SoXxffgvNghj37HGK9qqiLPYqLuGHgf7zXUvPtwokQxJq39kSdGvwTV7cY9xHnDZ3yYxtV35WgQGRPekWHGS",
  "key24": "L3Jpz5FYMH5pUDvkm2vz3QNL4LXySnUc38DhRFB2qq9ueezSUgPUFL2a1bPak8eL9idtoU5JAGZwtMripjCrFjy",
  "key25": "5x5ffnEY3vJNqRZoeDGvm8TxugJjshRGjfuiQExNsaKGetRZYnyvBHNBqoUYQ6QCDuznrLGaq1cZcQFUgaeRJ7iD",
  "key26": "5L7Fh4CkmzzCVTbMejieFgShphW4K6dTGYXwr1WJNiJXX6T8aB5oPoS9DUozREKqW132qeegEgM1vHQjLmctZk4o",
  "key27": "3N88tJC6M7Z8qUKSa31rvrifSCmu6dMhQNSpzabfH5FKGarE6axdzcPFYhnpVv8iXJiU7NQinVGYL122SLydzRQS",
  "key28": "4yDULzLnBxHxKRt4TxpTjnTu6pHaAhQ2uusGAvf5XJeS778JiiTrwjUutZvyc18HW4je1mhFSxr7pv5BasER9R1u",
  "key29": "2fAScizstR2NTLKVS4grDCH3UgLdqEErS9EMhgXqweqeV2Evcn8C4SoP8UEuRfhZ17j8A8nZ8UFCkRfERTPGFkQt",
  "key30": "54obb8RJrmg6tZRQ8YY6DrMMtprYeTS38fPAGMGrz5ripYk3Qq8jnwvmUsKF5qBidvdGVXnXqYiiipumeitsecgn",
  "key31": "GUdZdMJdAQP7o3C99NPTBunsPqgHBW445y77u2NKFGcimdP6YtJRNy9fiKxELJ6em1P5pRTCKeDMmXpZBQB73QA",
  "key32": "3cDWqCDHQp5yPrGgj8wrPAw1vztE6wCXvEkHBsWu4dTeFZzTmU1utFpxVKT5eGbwQwxrXNtiPevjEU2DVcknKPRf",
  "key33": "5zieQ2YsypUZcNsZhRmAaba5efMjVYoeHFngc3DECmGNb5JmPoBZLimKuG7BKjhEpWTMfxVM1dfiKWsaGCCbgtuj",
  "key34": "234AwPfuN4eEQK38CHLJi4wSuov1Y94sLsV8FhJ3mAZtWPz422PQjzCW4HMKjq9qjFfbVnWnun978ktEJZDMthVr",
  "key35": "3ndm2kPw9JDUCM8KsbuciNAAoYtvxM7HRTBTLMaYDNvwjUeSZzC4GSPZ1Z3mS7W7CZ9tKDth31FCsWhjyAdbvELn",
  "key36": "Z96WY3DkxQDWtU1WCkmhZRNQnUi3W2qgRB5qAWom48s4yiEhkEAFncuiCssKKdJMjre3vo1tL1E5tUbFoU7ktmw",
  "key37": "4YCUGXTpd3bNscN6ptyKPyb9Eb7y2XPfnc5Cn5Ccv2n29kEJpTM6pkWQ7E8iRwX25GdHYLjsDLNE5HYujb9CUWic",
  "key38": "4Y2RJPgGmp8zUCLRhxtAzH5Nsesv9qNHYXVVJ9RkSZMDA4AjpyAtzBuzvwVcx8vCvCAeumhSbNKn2aPHEnek1bgB",
  "key39": "4qp7egeVWAQyyQr6qmmxuxmqfZGWYsDXa5QZuqHvn2vX5wKE58ZKENqswniB9r8kzbWSfogYZcRmPRteM7Bo62v",
  "key40": "4oJhxWCbdSVyM2q4qZ5FRHPjGXQckA7YxyjQGjtq1xYjGkFKNTspaab4LF6GuKexGzV9kw1jfiPkStqaVvG7fyAg",
  "key41": "uMgfJ9kmc3oZpU6Gt2ApwnQxSohh8Yr2vMrmGVF39AGhVYfwfF2KYBZ8imcaU2iyyrMFR4NtUeGeNSbFrpbppLo",
  "key42": "maUcsmS5BMDQg3Tr3dprn6WTapdZo1xFYuMCmarifDNoDevK7YQtGZGNdaDh9L751tzU67SohY5AJsqNr79jn4r",
  "key43": "58gS1Ye1zNJ4WtCNywkzyjHERYaRHzUNaZdhYGkVBfdLCYVSZP95eUhhmb1JNxH7D3bRb1q5rBEwk4Ri3nNyVWCv",
  "key44": "5qUTg1rsF26j3cKnCeNDrdsfseYyJZJ5xitNZdvh5WEoV3xCgi1xixQexF84udLLbZVVxA5SzicP2NiZnX9FTUfd",
  "key45": "2woCUzodE4BcRvcTXLaMf39GA9THkp4im69gZ7aNpA7Xn7TkGs4SpH8ytcMhvA6at8btRjokvFR7Mz3zDAjLBBQo"
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
