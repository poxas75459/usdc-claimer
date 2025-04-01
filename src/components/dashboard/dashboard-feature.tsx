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
    "icbg3vDyktdeCNXSJQcTDA1VGt7SYnVvhWGsLqUyBigAQ2e83pbPg9NXPNdp4v1kDNFiz7LokD2zHoxRWWPhFph"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46kr2VVLVGBBXYBA4ifuoSk76LZCJ4uV4Ytce23XtkvQJpxwMiK9ejBMRVkT2XXAKApL61TocBPJKGM7qgTLVRy",
  "key1": "3utwPuopn8BsRMx1HDgEGLgkTQ8B2bNWfkdH33YNdbVtsBomDztRc3UCJ42PgPjcYm7SKaPU8Qbr8uxNqGjYjPBv",
  "key2": "5LX5N8Tj6gbAZkHNLkvPHq6aX77AiM9NxCJvfapB7EavhrYefbQtyKMJUevdLRVBDQLrZniWEsXYCL79XT4C2wj9",
  "key3": "2Kf8L4bgpMvDV7EX42oHsB6ATvDH6zCQ2beWaKkvMbf8KqdGmt2zjpvyPfXQs9eupGEGu9VyK3VJS2NXmdJu3R3s",
  "key4": "5Vzit3hY4TVanZhY2z3QpHfhtPkrBpSxJuZqUZu9zizZwZjmNyyKfcZ7JP1Kp8HWqeYeb3UZGF5bi1PX46z4t7fk",
  "key5": "2EyPn31juUMzP4nig9cnX6w4aPwa1efVqc7UdMvKj3oishCMxHZ8k7MdGWKjhNLooEz7WfQJW4bJESwCe8oRty1V",
  "key6": "3qyTCW9oqJMGH7MZASqjdCQh1vKZSKSenr59qCZ8KMPixqr5JYja8j9mavHqU6omGjz3HqzcTBgoFYrBZvF1kpCW",
  "key7": "4GrqKbdUPyrCY3M4Dh1UnAndCf8cza7cgA3cdABErXLbbEFqXmgds2ov9wifiZwaqgjBNyVe3ogMceCmGgZRebV9",
  "key8": "2QmoJrTFEPquVBY8128GNoFWHWLPwa4rvTdDKRAxK9oun9wfr9ArboZAFNWuohzT8Jjh7EZPjqtdg8RWX93t2g4K",
  "key9": "2eLfeB9C4tFDt8nN6ifVzGCJfvmE4NHnUWgvkvpS97q6sZL5a9AFBqDNgnETPy531CgDKBrndvkrrz5au2LDa1nP",
  "key10": "2JW7gpewo5kps5JJscknxUxWAN5dufQNdtSHrEvJk3TTk3TnyMEC34PdXzk7KzcS34F6sD4i6s7NG7BkNfj7BgfV",
  "key11": "2QMPUUt5p7YsvdTJJrKhCXn6EYCewASGY3iLahrTPUYjPpHMSBEsXmQZGSuVVoStTcVspKkM4rTxb6d8F4V8HuPo",
  "key12": "2QcvJ8EgAfsv6zsfEEFEx1bGZfnTrY29Z89q7XdUK7S8Nctk8XpiFs4WkN1HT6s5NsYbbNLdHxMMmvV6ZZHyGw96",
  "key13": "3jQwGvVYWRgQ3oNFm4fGejDfEucL3DtUFXARWeU5rSn6hyRugeVKaMgGhBPahUdcYMv1VdWpHByeBZXpKdX4MDFM",
  "key14": "5BfXgmfDTZjg3QL2yDkrf5486wRy7Wj4sJNcBppRkgmtndrQUYFgKAm78LWTuCiP9uF6mPjcRyiwSYikidHAt7sG",
  "key15": "2XjqGv588gyb3csKaXZZxHqxzULSyumJhr4g7hknm9h6nQHw6G9MUb94gvruzVHxmRBVChzAByBEdVqLbh4ydASa",
  "key16": "3w6oS6LFWJB5vKe4N8kk8pJrR8dbpaa7nSwxDghUMK1vyCbsb5ASn3ZCUwzbWdzNjobnAZceL7sV7smoU14jDJNQ",
  "key17": "4fF7XRMncUdQLs9mvit1G9mUBbMXQd6EmHJvhSk8bJsB4f5J9kUZ4FKAL89YTyA6ZUucoe386XNJN6aApNxqjEQ1",
  "key18": "48dXfTgugQ3Cn7nFFNungmffG4XbHLdd9p1SPUDWiHwHUhjFCpGx2VSAEATM2bjGYsCxZKugKo3BA8Ce6u98gHVB",
  "key19": "Ui9SfCk2wH3E6DYoG7P3FbpMW3PmPvCzpNcCT2Zrs9r9Sm8HuGV3G1MZi6aosx5DMtNW67r2cBEWWRb3TZuAyU7",
  "key20": "5FHgJRdR8BxGu8AZFkAPQ46SAxQaExS7dkzW8BoUugUJ7H7Lf8Jfpp7GUibpirWQhjiuDawgZb78DyqzCvqdBEgJ",
  "key21": "GFMLUXh8fPQyZALfHAP7aPP5cPep5TFHt8dC3ahjxtmUTsfCxmbYoq1Ts4RBGS4pqSNDva3jVNm4gqUjCgXbhRU",
  "key22": "35MtPoWRkCuR7M89yWhMUq8ALW5qqrhxWrwzsMeMJEce8LncrKYudReMA6kXrm5JshTMB369hfggfnKUNUdYjekW",
  "key23": "8CN4a6MfbccnRkCH6bhha8V8m876uihGcEMrtN5yva2gAnHj4AoUWTRLsJpyLTvEr62BSAzNreA1Z9tsf3WGE6V",
  "key24": "28vJHGWTX729HSkXu1zEfxdAfo6o3qCrwPVPJNUeB4SMEpexdGjbmg9qLNNTwBNd7GsZphScrEZRNgkGNVzmJrDq",
  "key25": "4FPsVqZwZbLdzegoGj3J9d7HNCH7o1CaeZ4puwK7BktPU3BsnzMxVnfudyPT3gPru12VVsE5LAugBxZxt5oM3HY1",
  "key26": "4bjDQr6DmCf8nKL5s9Q3QK6BUBPRqADduspkEXSWenEqvH1TvdpsXJ7yKMYfsFNQjc6LRXjt9AJVK6mUJnBZ44SW",
  "key27": "5JC4RE24MhA6XB1VYK6GgVa4Q6GWVHN1ubqe7tBjuWaABzfjXCfhcyBhSCjGw1Vt6VhVAB8ziQYrc6zh8CKYVzkV",
  "key28": "3yqsVLbFrvj9v1mQ1bmw6sKTzBcgHtQJsohUMqnVN3HnAsuGhLgzNcBRcEeY72v4J182HT77H5orZz3DFdXsEs1t",
  "key29": "4REqNkXV1x1fxaiMTbRqAh6P7qbqRrLTFrQFnFPCrockbeL9CB7bgfpEP5uhUVjMsmdhXQftsArz9Zd9HArYV4WS",
  "key30": "4hi5QFFngpBSuHiUaBH2Zp28doAiMHLwk2yrv7pb7RCnzgkgWQgKTSNB2c9kSwDNxg9h9pnJ91fDovevYfMiijQY",
  "key31": "4VGd6PBpYLNmeb1amtG7MvVg2hDE4DStoJHVsy7q2iPAFiLqvVuucamt4rM5i6WvG6pkC4uniiVsXnw25ADEzZVq",
  "key32": "2KsTENkMcFksvVXQDuniaWSx3Po6K3fMw3gwLi6f3xYQE2HFUU9LZXtwk6Uze8rTTKEHCi6ynB8t1zFJnK1FJNFt",
  "key33": "2Go19ztLrxuhe91gK5mZydDSSyDWbmyC3o7Mh9mRJ2r9Nu1npBepk4WkF2ZhLb6r9TR4bz99JrLSxMdZoRZBJ7zW",
  "key34": "yiJynPqdhR5oeMNcWjFduRCBGNLHQwXh9QPwLDhZAKJfc5kDyNVahSdbtC4mSdnR2UEXGNGqG6CvppPYkXtgZUt",
  "key35": "34ncot8tgFZwijYgSAS6NxewFdWg2cCLowi2ERp9PtP57ZmT6YDCduFx4mEhkjwpguenQEyAnyQcQVUbT5PL9Fdb",
  "key36": "52EDevN7BBjNpUsnSyDApa5DhRV1u2P51EZiezjLE9joxj8RBfisctkxvAFRXZoodE2uUKju5G5GtXQwFyUGv3jP",
  "key37": "3faYc5xU9oaM1BmGnhnq2BKuuKJWKqcLPPg6f9dum6snAX3bkd5UKp9FDiXxrYn1gdA87zEhPPNhGQ3hnGpAU7Rr",
  "key38": "4UWmigNQLpSbJcQSvkNTgN3FQkCDGjyQe44ahEFiirke4NWrYN6LnS8Gq5aeZN7vypgughVdEAkq8p4J2Ao5UGM5",
  "key39": "2nsSudzL3TDm4LDQZQfZcFt4ydumRxFpW9sVW3LMDEAbYgBS6SvuVv3DFEfWZs2YFCuWvQ2d8C6Yz7v1nhpTdVXb",
  "key40": "yzrAQHeYXTpcRF1Rk6t3VN9ZdUGTchgzEiEMpeWMQu72qzx9HKAxMxzaw33TTU51J4idmfmHoUL8dBehzsCnZDh",
  "key41": "56LnJ8fWL5oCVP7goK3EEAHSrP4FVh6pn7K9KYWntKMdFYmq7d4dycYcwmHBFeiJF2XsjR9y9mH1BFeXfk7uBKvw",
  "key42": "2DKtXBXF4VNrjo1HMwF41kWJacbDu1cj3nJACEZKTnKwTPmQAR1rcaf19oiqznS68xujPtUp1qzQFp9L1L13QFgL",
  "key43": "2mcK6xM6nfxCLnHrwLyga57bteBueQTAHcjzD6YdY8cvFU5WZmPGcUWJka5ZLiGEYAQfVBPdfg74wY9zaa4WvW6Y",
  "key44": "2Zut3Lq7CYtNzXJdWvdHRUaLQ1A5F5ju2QhcK6np1RGSTE2T99nZU5XB2KfhAHYM1hMjNZpJcub51n4TjQfDPp1s",
  "key45": "3X1XQrWwrCd4Sa7pLSqecxDhX9oeEy4TDuwDKF9hgwWM97seZUqFBh1VYGbCdj4fsTnkc3LLkeYDjYocKcQkEBLh",
  "key46": "2KP223hKpiSH5Vk2KACegzQBKeMa6zadSdCmrdTnGZf8NsWUjwVvQb5QBXk1kj59XpLvyyFndhGJr9gL93ZVqQR3",
  "key47": "23YBWmaHb3jog7XPQqm3VFrwoeyb4tDawz7tiJncMADvveJMMQF3euePTFfFRDocwAhje4AgYUcmST9eGTb2pJGz",
  "key48": "5u5t5e9arEj3m8n56DWqmQ2vzPATDtedtJ2JBP4L4USbiUpbFJVbHXPFZJ984KSvwcsKEZAj3rXLhYsd4AVreFt4"
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
