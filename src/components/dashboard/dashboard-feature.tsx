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
    "re5oWdS2yAofrzGmDoiWf1hnP85jwvaoEcnNLHPcVwVCkahqZNx7gKh4PdGduEpYAiZqQYZhSEqazND8mzSCELz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3htwUzuFG9gMZL2ciiZJG9837JMBM3KuJAGpV8NPRf79WAz9wBXErHsNYgrC9tFBR6gBvQ8dPh8HUKxfpyrdz4Rt",
  "key1": "ZUFQkY4y2V5R6ef7sVhBitJdLdDTeMPgUrgZKx6tUmSV4U7EvfkS9RDrK3hZk3Va6ebkbZASx7tqgVz2xqBbJ9T",
  "key2": "3K7B5Snzig2B9kzdL7zWtR615x5um5MQmPveAYykuQxE62NdccXdtQSqzLwLDY6Z4U1KDUwTZEp117X6NoNHPwno",
  "key3": "wNRUX8wGTD5mFD37rMkQZ2EBBT1zS5YVdqv51xZALacWLNe28A9a1HPUKuS7A1nToxXp5pzYYN9uTmbKS2cnSni",
  "key4": "5wFWqUMaNPEgCVDJD4zrUGBbcFDbmgfXErjY5W48mKNdPDHYBAXHXv3g7NYEJu9yt7G62Uiuyf5vsX1S8UZzEXkp",
  "key5": "KjZ7Cfn3eYUe1yDCvswktbH6mGWYDQKPKWqm6XQvz8VC773Xuyn8X731n8YfdXAmftFVLVBCviYWHVE5bgspjCD",
  "key6": "ByaozSaSVTrkR7d1oiYBnpHbgcK5ecEWmVfrhUebWaGdKswepC8GD5mj3vKw9saRaWiG17UEnNupnt1rU6A7DmW",
  "key7": "612WRktcMt4MBD8VHJrmj91R9uo9krrFT8C7DEHq2ghMqTkiKq3FzMfzvB4WdmHZ9CTwYXLhSfvWnKorcWDQNo4w",
  "key8": "3zgikUt2UY8i5P9ABH4V2LBvJ3zahLWtrVnRtuNm8UHqMo887pBzLYFte4kzjkvqVQqfPhFVdKpfrtoz1zY8Lfye",
  "key9": "2XppAr3LWgDmn28rMHAhRg3bvgVWUiefd9AXaoWxtm2PXQxWfcsJEtpSgho9sNFh7E1V4eQKZnVuVbjNerL9Q7R8",
  "key10": "2gAHTp68MyBV1k1wou8CgqwsH3ruKt6gCWDeyhkdkwXaSW2hGXTZUU5Bbq8TcQHGWhoy5eY2yAY2E71U2YMdV5iP",
  "key11": "2EZTe1D6oDdyDTCHneL28UBPfwMGSVgqWBLAjF4HmZC1PtGAuYvZ8DQRDGuWpYryS5Re54wc5hmQwDxfvMmaFRuJ",
  "key12": "39y8a6viaeEdkRwQrXV63zkp5k424d4QYq9ASaNvANN6zjAF4rKzJK3rDe5QjRp57um9fYDS9X9ujSeJHfb8LJFk",
  "key13": "4c5CaBGPFuCvjh3Sp6tmu6RUa2Y29cr33AK447hNuPsvqYFXUSGK7YHaJ8opxouRHuYWFJyZCzzDVxi6pEa1wF8P",
  "key14": "345nPmfQwUmArdaZc6oisBjrsVARWdMpMg36MiTyBHWBn8WEFhJTVGQWDaUEd8rdTNt3Rrhs5h5hPjy7iybnQnBr",
  "key15": "2zPSBfSpBT4Cid6M6GowrASDnveb1RrSviYgJX7GARbsrzSc34B8ofPUwqGWNkoQfHvwo2NjXqKQq25SwNLSMM51",
  "key16": "5xj2Uh1uqFRCdGYoD2UtdV8JXtVMTkdFvsiERMtXAR3RJsB7WbmCKbL2tEr8RPDLzQT4mZHxQvvckHnNfhtEpoPd",
  "key17": "2fexSJ2ttJczCyzomZdwdbEVenmMpJjq4TF4bHBM2Qnpcg7tRk5Kgfghatr7niVzpj7E28pAjpyMvzDkdJk7PwGN",
  "key18": "5C4ZaMjPiUf7aomPznWLZH5QSLhoSi3ZkQNnRL23mC8syzvUYnwNMC6NbSH7qmcvx3ZrCDWXCjqcarLxt8KHYx51",
  "key19": "47r9uk4NMrpfW9ZhFtEMdM5LgJ9bazvbL3Y5J5bAyn4RTXMCNXR94EHtggh9q7iByNAGRvi9CiiaJTDvveGGTET3",
  "key20": "37C8RhYefypwuh7mFD7f6cKdQ32FQDSJZL3Bac6BCsfo7NiMwGtGa1Sk4irhMpAPNsWXziMXWKmsd2B71wRtA4Bs",
  "key21": "2DLnMUWDNjHQjKmreSUx7sX1pnvodqddHj8hojXQM3Q4Zvh8k35mtkVrjBdF3vVGaTjmxhu9LRjSsE7FcyApbeRJ",
  "key22": "5yWen3izgCbox8GE6UHzNZhgMpo22afRbpnii9tRpKqASyTShYsHpoFvE3b1ihJJKJ6D4qYsDvLaY2QcGxYbfhot",
  "key23": "48UKraSqkZrZnodkpFmsfyT51Lapmqc44UkoZ5ZMA3fbGeWKCodftWn1yoNkF3a3fR1t4SJmg5ETMbW6yAcJZWPc",
  "key24": "4jLVAwc7CqJa4SxWdAZwMiJXwG7z9KE4TdmWf3dMMgg7ebeedFFuw2deBGUFfggP9Ai9nsssikqD74CBmRv6MNk4",
  "key25": "b8CDB6KxijmCJS96cxZYQmYCG7ac8MAY9nGEg75DEQdggVJmxpHvzV4K2JF1Jp1XCQ8dCB2oweqRP8bZrzLVtHJ",
  "key26": "4hzCtV6Ew9DHPME5vmyFQQ3NkBiS1b581atx7PMi6Bh9w8pC8zutrGYe8hTAetVovtBSkDVMQRg6jvrdEqSBSTBF",
  "key27": "3Pa9qrtyKNPX2K6mUVMgMgs1Mw7D62tKYg1RV3oGriBx52VioreGdzP4L2nRepEfxxcmuCzqKYhhVqajefvJrwNx",
  "key28": "ZYE3jm5JQsCZ2E1ybh1etj1f1zDqxwFPUJLDTTNuugDxfxdnjW6wsXqosKf6gSmzgZiS36vaGxfUvdKwJQquYJc",
  "key29": "3N79S6mfEHmpSj4KVe5gAMQAY4Zo2iq1qrMXjUZjj9Ye7bHZ8U5WLkYqn3Y5ZGwd3tmSmUQmsK9FFqrKcjsYkKz6",
  "key30": "2RQcrJHnyKvmkL8rpSrDSocM615Hrcr6p1LudSxR4H119mE1q8bpvyEaiQ4o7mbCsFVYJ4xMxVGdJq26UjfGi6sP",
  "key31": "5WVLsWwqY4yF5R1ZaKXY8nmhhF4Sqpd4kSLoogk9jgeF6J7pjiDLA22eFSh9kEyL3jxVVaVuUhSADfCX3useuo4Z",
  "key32": "3ismg18VwBf89eWADQvdwpywPZ4rLvsxocTUJQj2YQnnL8eAcbZdsWNwu7VmrYNzLzcz85tbfTc5WLyGLmLgDd7a",
  "key33": "286W2xaoKZuHbDYbMGz3U32DE9TA8fikomwVfLk5yWbGYDugRvSfg4LpriwYd7cSGkP18QCKyLfwgVCc29S8CvmX",
  "key34": "4VMuz9zUk8TdQb3YyH6FGPFBXGEYre6pmeC4fAGPGQ57n17jmozrrDzrDMuZP3F4fxoW5LvBwFHy3Pq8cvfBSN4M",
  "key35": "3bsNY8Dm1w3r2UYg6abs1renmLPDTYkYczQkNp7TEkYR7387tjoifS2rT63WWne5m6Xpbr1FUR9QndpSGNpk1wGu",
  "key36": "5uk3aWxWf5hrVvb1RhLKMDWPLRSNZstpK963Z3fiqvpDyLoyjXuKsiScWtbcbd9Gew2SmocgnfEPtg8862ATTcae",
  "key37": "3ADHqbbkQJMVKHMhAmZ35qP9X1GTM5EsFJEKfGmsUdCZE1JRrkUdFzHVXa6iMte2pcKKieJWcovaDYA6NP2RzLaX",
  "key38": "223UKCBoxbmq6CzDKJHyrTdBbd9EvwVTKzHAYSFA11rcH4LJwcnHbG8DTjzmdXmfupffHwPkERBEXB7pmk69N7yU",
  "key39": "2LL7TTt4K9US3gKcY8za1XoSFA2C99kiyhquxn31VtwQ92EWgdccCAx2Q4mcvvM6ttQmPnCyEvJcy9usNVxZZqvz",
  "key40": "2jLiRTgQeLsDQDKNiPJXHeWDQmBwy3T2qiNRkmyuu2eSeC6vpcCqSNq8DBbEcy5svLpmKH2dru2Wt4LtvDNaPhGq"
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
