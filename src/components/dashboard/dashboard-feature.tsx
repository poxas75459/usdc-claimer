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
    "An17sz6AwCSDcYekXUyJJ4kVn6bwYBY3J37x6d1icPykB6QNzsuj8j7KizqvqDJMcvDSdrruMSy6DSjnaLXHQGf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41a96ELqCH6GRHsZz8JHePLD4dE9LbueKXLmezQeUroLAc8VnyUaebsnLtu6Lpj19i8BrwnPuk8G9NK6wosBLMq6",
  "key1": "5rhGzxeuwYj4E5hgjXkqCuatPLGKyrApXPijHTLiVgoJzu7HawpSZwGtVXPmqDnDX5zjoMdJk2emHJvv3NQHMr53",
  "key2": "4T6eACeah9hbj5cEcuTDXrAsYiH66m1NbFKtaNiSX8iQShVbVJa3GksS5PEkQQNwioH7ac9PP4SaZrGPgBrcYsy3",
  "key3": "44JuKzGUWL3MyC2VFBt7LgQ2FjGSJyqoHnywMTd6z67QUDUSzLTGnUTeKPfe9RtccL7pUno8bdexes8asS3xe3a7",
  "key4": "yXoj7JNREkd7JV4wzQuW97VJqTJsjJbR5xTsakdmeHYj25eXRdPegNZ8oFSEttf4BfSJJzPcSJ8zct3h8bmtofJ",
  "key5": "3vqJGwoXC5s1vDGeGSudEztrgHjEUytTbVx1AyznoCuw9uQQaYCPyQfjmCk3fa9FA6GtmKtFx4NtcMjh63q4knmT",
  "key6": "48uUfCdGodyo4ZqPBLRDCJ5CL8HiLA6xr7MmTNpGzeLWDeCicWQSZ5bZLsKDDdqYpBHW91BkNhhQUvaqHwfFBPf5",
  "key7": "3onzoZySn4bkPSM3FRsWquk9F5MTnqakVs9hXXc9pNnUHF1XUrvj5bovu4RnY8PoQTQWn42bqfLbdWNd17uPRKYH",
  "key8": "4FdT9stB6zaHQ9gj2QTyZJ3UQkrKUqbKDqwbf7CAzUd3EJ5c4iwNoSgzt6WSgXBswtFPxALfH4kfFRUt2HErCsn2",
  "key9": "4bHyPdijV9XmW3Rw4iqoSBCPnKAZqgAsyEbzjKxKKJLVbfu77xTniwq4aLkZ93aZWpJYEix67TcET3wmG8vaj5er",
  "key10": "4S1J2ueAqfMFH8GcqTvrjPU9yJzf8KevXFZ53SEuxfG7Hkb1pdhxfzyuX3S5L8McYZJHnpEgGFuicvZSMxwCDfZD",
  "key11": "5BmYVeAduUf6LqTwZUpMApnSCp5E6zxvxdFbRL3t7taTJBKEkj3RZb1UoWdksAXsEDkHZ5VjAttweF8V8jSzZZkc",
  "key12": "4nuMZfauXqt1rxSWPrrCxKRNYvHpLSWvqXk9Pnf4frwM2JvuAtTPTKP9EiTHonAY7FGW4UeKcW33j5AVpYCq6fTD",
  "key13": "2H5eWaynzica8yGZN1yfHxivTMyqNgcoeQY8NLNPTV8SgFCK6W8Q5TtKhDn79N4EMYoDTxCRjcKy5MrFatJA5HRz",
  "key14": "2CrS6nXbJWJ4YhiFop5VC1iuEYyCbPNVAroArVLkDAkmXXdGUBaD6WW9158d5CsLyRbQ1v3APutRPsPCGpEarMum",
  "key15": "oJV1ZgCEsbKLAheeLiF7di7Nx264ks62P5Lo5dNHyVxFLwXWcMbobWTVnthHENokWW6ce4dpQ6Qd84vEuwXDw3G",
  "key16": "42ZypxAH2gZ1Q15CuM9pBYxWzwBH4ZKVuUsTCbXTVmWVjX5YTvo9aGAL8Axks13BWqo3qBhg9dM3kp68ZHBsC7Y7",
  "key17": "4VG8XARPtSxtE2r2YXXTxGK3u28LZG4ZcGtjy8zthtv86XuJoXUF3X7H7JsU7yvDqPzP9yrVNFczEhPLykoZJN1x",
  "key18": "54Rf9VQooPUPbyD3WoGH89DjzrKzk1VxKiJWhd8oCDnKC3Yz1LmPJo9ARWCsxK8xEm2NK6aWiUp8fJWTpcsR5e3r",
  "key19": "4UFhaoZFWAHC4hkjcyBQDrJw5zWSgcx2nxAXaC8w9aEGxrAneiFLMeNMVym5rUtvJwFkwMgBMmHXof2FAWNQLiPP",
  "key20": "5UvTuJVtJ5xenupjmRJuUHBb8iuozbR2R4xUww7ces45Fac8iUi3nvcJk3zYuCeFdXNGgJpzJPhDWhPCDah23e6v",
  "key21": "CEjnC1KRpNeFAC4pEJqVG468mSAx6bWWtRDeekHkHFHuntWc46PzTDKhpKk2yPGkNiTQj6JAQw3Wj7eB91UYcKu",
  "key22": "5oBGcnLpDckMduF4jHsYgmF5kNrc8hmn81FpLMJC2C5yzZvoeDBCRGMBhYg5gesDhKvHtQ6m1J6QhFRrSbbW9Dt3",
  "key23": "FGEBVDAMGpnDGfMnYCPwXAbSLVpfAvLkSWcHv24JMp8FmTJPzN9tG4jiGyx4Q4w7BFsEv3k6G6MVEpvUjxi7TZk",
  "key24": "5zHGQBjy3XYrwhRULo3o6XPiuFyio74rphLwUu5GxtRuo3xumWBJast3Wxwqww4v2QM7tZAwRDa5H6qzQxCXQ8Lx",
  "key25": "46QMeN7BnyPkwmVz95HnKW4d99JnLsRF25Mk86NHRM6VJ1PMppegzzzNkzL8ZZ4rd1KdoiSpXWjPJEgZxQWmCR6t",
  "key26": "4odD6R56inGg8qCqNAbsUA4Di364joes5UFHYupfufkZ9jirR6CdvnNbCHk3EP9tuaQVSzaJ6fYCBzX4CNByXZTs",
  "key27": "3E7JVSdQRJ5ZCLvFkBWpsQKuVvXbMhsEP3zPGZRZY1gYCyf4475bsL3VscDgjHfDzc7WBJkCNgDeUpxRVXQ7HRzQ",
  "key28": "2sjHsVx6FU3iKjpcDUKWEwmhVPucJCiPvjDV7XGVM55qrET3yVwvQveGgSgjSMUMrXyp9mkszx5gnfyjcz2kLVKN",
  "key29": "5c2po34UUicFVCED5EMTEmFYn2umFAN1wgzHnxTrkBo6LWPxuY1RGvwHL94dQYx2FiREF61DNQPGohkG9xQGSEHb",
  "key30": "2JYjHLimWrjWcSoD9d6ot6L8MHMRzn3EeCHpPnXPavVhomKrxFdMM6crWoneSSamw6wVfx1wCHYj5W4C1DBn9DvS",
  "key31": "3yGjTz7Hbun79dc3HqKeHUv2ZkFwFjRqcpjoMG6Gwj62XBiZ464Z9h5RJ8httMrqfaCXZuMVT6jfxoZEtVSr2eWm",
  "key32": "2ncgc5RAavsSddAPNNgwVmduAr1EpCUUNkge7ApPPb3zihLzKweDcyQv8grhVFWs9NRdEnMrmRppEgZVYWyjqFdB",
  "key33": "3bQruh7txPYF6ecRB8Ga3JgxAw8ZCnwFEwARqTtv1Zxn5wb88jZGpnvcAsHtPmpgZLKmrbLqjuGYL49e9vcnTiVP",
  "key34": "5aTnAymgwakaeD7D9cMS4TjcTrCtiuhBQSuQZoC7oH7maKmjRMcABjNRQ3D4X9KFDTj66xQCaTq59Hs6j528rf9J",
  "key35": "4sjwVJkMLEstq7qXaxhQ8TzY9WuZnaz8ruH66G2bm5RkTQfiBbYLG5exuL7LvtFQS2gYoJbcizk4xUKjY3K9cSis",
  "key36": "8NjFCvAPPzVvuuXfA4eKssGZbEWmrGx9E4YydWrsSTQhkEw9KZUQ2rfKCrEfwQU8FJsL1tqwcTwAvC56aag1BDk",
  "key37": "3SScTxYpT5mNELZ5Qipp21GwXMSLYpCSCxj7ANz7wZpLt5YiFkCr7KioFvH8QAiBYPdNjK2hrA1RXhqUpH9Y8pHL",
  "key38": "4fgRfyrCYs37APDNUXESky4D8zN4TBqLPPoT2eurr599UqBfFt4JEyERMBkcEnsV8AYvqd1KAkK8niBBWFfRrc95",
  "key39": "2eKXA6NNXG41YDeqoiwPuo99q6AAbtXR9yNZcbf72QmmUYsCuM2mz9q7W9xRSfK1FBM7HgmHiXa5q2ZRWR4sSuvS",
  "key40": "knzXB9RHh17m8HYww5SqCTChWEbqmGpLL4NMAUPtqs5hR6RHovtHyGQwqnXRHPPxyNRCPH5Len4WciJE7T4Cqa4",
  "key41": "4b5MWX98bZcNcv14d8vsVLySNYmBbqSdDzK1fYz9RuZhqHyAjBmKFdoByoJdYkNj5ywjY4wDhZ5MVayDF3xX9P68",
  "key42": "3sqhjGmXrQLXSQZBzju39SQtkdrnAWjis8M71URpWJTr8VdVJ2WWGseVfBC3dSwrxZMQiXd1N5mrhc3A69uqVsrj",
  "key43": "DbU8PtRN6wZSsCo58qy1mrgsJDbnLwxZawxJkUkBQnV2x6Rva76opXrcHbQagqHnisrUCC123rMpb4mFfyQxsXq",
  "key44": "2JNUwmg1thuGxcpcdmqRsENAnutJYBYQ6sKXYMVqiFdyNk6UYLqYpfuBNXuqW1r3w19T96X7JKdxssw2imhzignj"
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
