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
    "5tjb5hYEtCVWgjUpjvGvH789cBpYqYmY2x7SaEVVFqmqq9QM5W9FXz183iZJHGX1BTUqw1CE6zfvLc6YS25bwYRd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MCkwiSunygBAJUBzSkCuE3j9U8NChs1796CvhcNiaXnmQxhNfC99yJ7gCzjjL9mDMumMwEeWonfgtcU1GKVrrm7",
  "key1": "2NyXMihkmUMmhgrycSh4USr8DC8Sz6yCaw3ZJcPZWi4a8iXtYuCoUBX4hx12wdqc4c8cKFUpsVK8Md93k6N1U2ZK",
  "key2": "udbgsRWtzz2uFsR51fqsBEf1EWq9iJBJ7W5dd4njk7H8qyRs9FsPyngn1LsgTy1HpyE731FDkkVWv18jmaFpCUt",
  "key3": "zwiKKsmyVxjAiD5pmNNnsXwXw5UqdUkG7ZLqmfswQeyTaDFBrJAd8us6hUg4epBTFUgqTuTQL1cU3AeY7koefhP",
  "key4": "61ByEvuzfQ4doJ1A7NVX7jqc2PaoKazKTjp6gHWpkkThmGthLh3Tb5xLwBUe9u39ky4r6ZUWp449zhRVTsNGKshe",
  "key5": "51utzqwKqLXE51wVLwMks5D49oLpuo9xNf6U74LCKbqUi2emHyRqFJENsGiStGx27D28ph7DDH47u9pZgAEF6yze",
  "key6": "55N34qjfrxr8KkTAe6gxMYZLpSaLcapCDQvqZb1MCrcTDkB9XTX8RFa7ttwCMqvJu7bSqEheaoTkf4vpPj6B8SKx",
  "key7": "3foEAkjAN3mMD1ZvKWx5xMPCe4Vbwws3Tbm1mbzpqKcD42X6PT4JNBkNykmowFU9Dqyik361aToJNjfzVg9z5h1K",
  "key8": "32ye1nkjaDuihXccNuZgShJY3PbYfosNLaAYvTwsRNv9sH5VepdeDPSBou1mZ7fomyqpDPtraZLVCFTstiPMHC1",
  "key9": "2SJk9eLDvZcM89EvPvXb78hcdokyiVETQvfBvwdQYyyeGYjKwttfLE1zeTQpDQXPQBu3MEnQF3GVvPDvhdHUzwTK",
  "key10": "1o1XSETXYeGPEo3gagFkiuk7WEC6Gw9ZMMEuUevvAWtH8xGcbTUqySzxP5pkP12aSmFwdiJDQXzWEh6WAh9ZJbn",
  "key11": "5NcZHYYNvfsHsAWRnarxi8srVnCCA9r2BoC77rv5ezyrK2pKY6K1Sgru3seqYJWKBc72DnhERmHkxCmwyozXrhcR",
  "key12": "5kG6ABDG2fhuRFsHHiWeouSMDAvs4EzmLVzde5T41tD1AuL624GUE8h1uwbyHZxYHTUqUebCNwdHAtCJD66aNYC9",
  "key13": "4fkTavbFdhxSo1umP8JetHGETvvAPopk33trpYzpB5DKTtL7tJCMSsdLevd2Z8KjKs54rpSYFsyFp5TecUStRw9d",
  "key14": "5p4fCXAh3BcixyNRGfKR86hk5nVaPk837bTJ4z3qCAGFg8t3E4qPSr1QoEkSxc5itFSGH6LCvNarZ8w5CZqhXRbV",
  "key15": "2yWDW9qhLp1M3SrkL3aUjLLut8UeptJYbMq6xDNKnmaUSm4krNknz3RFzr2tXXRP81C8CktcLYQ8kXDLDLJZeu9E",
  "key16": "5KP3P7uv8EWny5rysNXWeDtRpG7KwhL67YhBxHJv5UvYttGdUCSCELuvXKeYjkWCSekGk4MunJgaBtPooyeca3MG",
  "key17": "pPJv18GyjM9TH5YKPCA7hFd49zRFNaMeZFHkQaXo5uo3kzTUpyVfsqeFARzh1k33PsH6H1Wcrh7jQpmBAUDb3ci",
  "key18": "4bnbfyZDjMtWXW34FdV86ZRh3ND5z1EZ5idXkCgMmva16d36VPoGUbKdx93rDYi4zcF52dCGDmWYxpcMQ3MmpLHT",
  "key19": "24vdiQsUKvgGC1a6m65TcYZhWEYPbadLgbDSLjmrHbArhqXg7t6vrHe1op2V3xZ3B9aqUj2x2jjf6pWCQebNGEa8",
  "key20": "5gTbbENg71hBTkkSzpuhsSXTgZtDapfKvezqtWDoWbT7Zuthrs6dRefSsStcGy4DaWp6YVAYgf4zfbxR8jjZFsyH",
  "key21": "3MV1Py32CdKs8KWnnKUPyZ1Bk1BqzMH1rqQZ4mHpt7E6A9fpGWEyRgPgLrjm5SB188oMnvF3uigeN77PxUd3gFEL",
  "key22": "5tJfoHsAqcXwKXd2kAFwkFJUS5KfRVkkJPu7Uc3wPGisjGraDQ6bbHB58y7EaNc3H4nyB6pP13scWPR2GXry8sd9",
  "key23": "5BNBSZQ2CdDBpARL3RmD7pN4zZpX8ou91Wno4mBvNM4VvWAW4KQSk1Gnnw8sBf3V8DhD8ATF81gM7LM91GRhzC2W",
  "key24": "5ebbZMvmoebUJ4H8utGD1bDtJQUkfz5NnD5YYzPyN4rwXEq7qy3WtkiHLqmD5C9qdD91d5rJ4ukPKUVkeUkqgGqV",
  "key25": "4uhoPNcZLv8N6oNNFxwz9M2TCtUeq7pm41R4mjto3bYa1z9UuYLbbQUffeURU8TaKTqqYREdYYY8hLjrqTB59sNv",
  "key26": "64az7hKvBLD2c1h9QcDrCAc7xiTBfSxLgb5Haj2yArMt7KXRkma6FU59tLTU6San8bDnEpf1KFC8G9M7cNTnhcC7",
  "key27": "3MwmxgWJT6SR6SvKXpdPiPf6KRBsAYQZ2Ua5yBGqqsEPUGq3AHL6H9k2wBgGfpQ1XgEbBZeuSteyoRtNNrVrTXXS",
  "key28": "trk7FomkTmZiu6CUY6NicWgVaQUpj3h9qEWnUuBdh5y12LAdnnrsnNzh2T9BEUFLVkGf91DSmfZneFaTDJsveFn",
  "key29": "4dGdZHuc5apqon2J7Li8y657wXtd1AwBvqR1WTa2tJYMqfYFqeZNbcjGR5V7FbsACX2PV3uEymS6g6hFiVYv6Woh",
  "key30": "mTDasFc9QHxVYgdaXDFb1eqy3zcX95VGrkwCw6asmwh2DwnPgbagKMQeZ1LDsb9ZDeZpyWJchTrSt7YKxvGQPZc",
  "key31": "4gAaRz2mbVyxSxGknTB4GKoL44BFba2vvU9h9KZJTuAcsNUPdZyMDBTwxNAC6aggVhyPyuNbL6KntYX9VAgPTxTx",
  "key32": "56uC89RnMeW42Vz1b71iwWBW8ZrLuv96rnHuArDMXTUZiwSsqHxqW2hESdRjK9hU5sANV81iKNRUQxVtknGrnEn6",
  "key33": "zEN5ETbXrDx7KWJ2HroBR2QdPjsqodXnwFK6qVPcJfTqYNiKAjxbmJxyT1eyNYMtVchgZKmtCv11oEWiutSDMJg",
  "key34": "tDgPSe6a5p51FVdkDELfubzA3F1YgcNUSkCiTQB2yU2oVvSpH9wK5p838gViWmv6doTaDh5QTn7YgkHrMhPs1ow",
  "key35": "3FxdNA8vZtpf2yXGrEw5BzPxr2Pf8WsVKAVZ5UrBtrHQm8WXHLN3bBGP8kPimBCB7jBrEpKPfr2ZVMCAfjfoa2uW",
  "key36": "3pTizGeHK3vuj1fzGrentBgKmScz6MMGURD9ft4zmb35e7nFmfuXzcWhUHhVcn25b3V5H51jXjX67Bj4hUN3aK9j",
  "key37": "pNcU47pvuTUq2hnJ2sv6TmZy66j9FMuBKxwL6N2TvsJ8wsZ4AhXHi3gHYXzTCnGBBxudKLrHGKZpLwz74NXe5Q8",
  "key38": "3r5byERNuZ41RkCDRd6gTSZPcSSjMxFvg8aUSUdisSKNVNUBFGkv3aa24Quv9Zzg1E9XJbZQGNsMWbBdWgc2s5fo",
  "key39": "5n3vTheZ6QsTdavt8SJwfuDHxGKbvBNTjThwDT5wSuDd71J63LBFSpqCMctPVzg8eJsjAubz8Laxh38Cvh2YMo7d",
  "key40": "46mMY6uQYueiWeUuEcGgkEXxKDD72qmDTkFiW1UfU7eQDLTbRJTt4jqV884j4uuoQ3EpzxDuj2NS1Us8ZMeUboj",
  "key41": "5jYU9JgYatfxYgLjoKMwv1fcbQpRxQN3u3Hwcx8ARtbp66oyRty5my8jLmFZeYYjbj4vES3X8oQ7gXNcqthrhjCz",
  "key42": "BmhzRaCdtc1Vf8fUmippwjw9mvCGmxUJBXm5HxkqPNi6aGwToxp7EoqTGPU7Gq5JByiUp62tXj2g8J1ZyQ4Djnc",
  "key43": "5foF17PXtC6cKzJoiEDZbsGRATq4zPYNpY8r7oLFd7syAcJLTAqBsNYMA2pgCuy1hNShyRHAMdDbq4ZvD4CxpLgD",
  "key44": "nLxU9gQK2gDqc2QzzAcYHRUhMJqPTbKXYWosc7vpJt7jSrbuNyrfrWs88JRk9gacWE1Fw2dWFQCV6Ns2p8NMxLz",
  "key45": "4X9joPU1VLXnBZgVwe3hvtBJFbAMXCx4zNYMMcn5cR6pq4AuBPTVCr8QdfeLmugsdURenZFJ6gSeGHwhXNWWUGKG",
  "key46": "4nqRGkt13RqBBME7ngFgsdhY97u92gSiyA9wkLnWSohLQyNZexxdoUAQvA5KW1GUCXEpEz3jyBeGc7aDD2AZgaPv",
  "key47": "3CiqceZMqDHhpRGv5FEAxxz1qkJkeFzZvsSra6vhW3HhKyLXHFuLbdQRLptDcWTZprZbg9SvQBPy8HZ7UzK1JL9k",
  "key48": "62P43F3nmA2WqVfvX6y6EUEr3eHPTmVSqsLbQKii7jCEQckJb8NeiQEUpn8gicC1PChA8fBMYzdFVRbTwaygLWwV"
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
