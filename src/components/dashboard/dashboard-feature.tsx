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
    "5oiaqxYWQH52ak41xKF5XYA2Pxd6VYvn7CiZLhQcEy2AX91uJNJdJskv3TNidCoZX2ZnnSVcAPbV1nRGazSezjga"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tVqGa5jSCUHTk48yNjr1yWBQMRuYeqsMSAZbJBY8A667cyTriXYCuPPxcD7FmnqECBs44xCAgSSpsUcf697fKWx",
  "key1": "56Y3x8AbJ1D9UJYdAZB6DSBBJ2Cye41kN2DjNVvn4q3QW3YdYQwsi9p9pj79HK1Z8aCA1f3pGsFWoi2J5VTs55Fm",
  "key2": "51j6LwaSCyWVmSZ4nur1fuJ63yC2ENdv5SLYNdEKxjEGTzW27t9X2iFpnusmJu2bujijXxsemS4vfDEtnZqKAJnZ",
  "key3": "2BVdRaB1eVQGZWyrK4xXXneLJzkH19rzzoWNYhNpFaJBQ5GqDEXTZdapE5ag1UnaTBxueUioZJhLdNjFAU18RmJL",
  "key4": "5w1XdvLELka6WTsgVCQRYQt9ZKhxNBDR2JmR3bAqBgHA1yjg6n5SSwbEzHigezxnm8mPmtg7bRYu7SCaG2d8EG7u",
  "key5": "5iDm6sxx7F5MeU2ZyjDQ5Je8BUTFftSbQQsBFNdiF5Ybo3Nsyqcj9g5x66fCLFaTwPMjVaLjFxsWrja6grdpLSKk",
  "key6": "35wK4AEcKw6TV2DYtWzwPv1XtodCBmNo3bfSWMLbfDEHuWdsyB8Gj8B78qXo87xwQXDDTBiC5AzW66nH14zoqpbm",
  "key7": "2QfFF23SKyG8Lu6AT1beWgPtcTrQqhx5Q72TSWuqDPn151VsxSoN6K29okrthFyF5P7x2EWo9RCoWeq9XLPXYZza",
  "key8": "4VyaTvRV9FRGpVZPnW96Y1YZLHRgxpfujzJhyz9KThUp9wigU3G3B9RbMMRL5F3NNbr7ktw9vZqTLjMJjTavf3Ht",
  "key9": "2Wyc86bGDak3rzXiK4jUBLd7ZoPRdzWo4W5TRzGnHXMUVc74jH8FCfagFQKvLi4PSis9tQv5fQfmrZhGCJ8eosVv",
  "key10": "5f2T3GHwpHj4CVBc7DhPT39x2eUxJjzhsM3P361Sh1ochedNPugMYFwJhD2WeovtM8iH5e5LQbgVEG4xTjjdyioc",
  "key11": "2jKB1siyd9JnCxE5rJrw6F5sD38k9JXSeK7fjK2ivrmJeLPiYf6q5wWYpTDyjbuUpyMUBhG6mpoPnysTfbuDT1Yh",
  "key12": "5Fp1azceYVkF4VmvcQcuuBsbHp83PuTmaPNp3cmfMP5DCtcZmPd79W5CUDHrakAMJcHoBtK9JEA2U2AyfaWode7s",
  "key13": "5U1gUFTpmSbjrMmNABRPAvZRzkcZj5bb4BmVgGxKUgcPdMp1xyRtanV65Un89skqqkEqucoZdWbJ9ZbMmb2hEKP7",
  "key14": "49ezY27L7zkukdAKgKTB47PkyR9Xk2HP5HPn9zcxCBzN3XmgQkRP5PM1U5PzgkyBSaMuruVVg3rtev1PWUg3c6mr",
  "key15": "3Dd6BR7suizT7fEdDMMVBQ7snpmK7tieEDfZzzsF5MM244UEH2WwWZ3udBXivSjxGk2WcHnnSVMDSJP9jTM2NgCa",
  "key16": "3stzty7hRYhY3Vz2fuNjCqZhvGYr6faiJYeT26fCxcCzZ9RbZebXoido5sz26imD9f3wqbrj6UknG5uyd8HtSDF5",
  "key17": "GHuSoPuEiym9VQhgEsCwzvxi5cp3RtdPULdkQ766txcSUiU3wftBKRtjaq6ckwdxQyZML5LRyTXZpNKBQWKR7eo",
  "key18": "5UZvhnSCy1kXGxEN14BmueNq4sMwFV7cKMi7CBMsZCrYEvQZYARcj6VYSyKHPvRLibeYNweSNvy21p66pmHRXBBP",
  "key19": "2LeCF2nnRuUu7vjD5ZYvHXxEUrLYmHW1yB3urzurJqvv8TE5eFBgBgNxNBwQyg1pLKP8ixf2VdKDAfhCud6LFG2e",
  "key20": "4RyPtufHBwBbRmjbPnuYBqmPBCzK6GzPyaVSSyVe6wBnV8rj5tX4kgKyRxJmUViUPvXFnDDcGLRTqw2ZPGXcQLmp",
  "key21": "3vqRKBnWERKWbGoQdWy9Pyi9wzUH4rXwsrZzw7WakB2dEVCyWcEPrwB4jyikiyCWKuw7RUsov26g31wEf5JENCes",
  "key22": "2vqjoeeBeB6MATuRqh5EPTw8zA1JntrtL5pZHnYV54uXhFD9g9HhwYFz2sELq5bCFvkvoE5dMd9nShxoWRh2u5Pp",
  "key23": "55A1KqYmTBZNvxrauhaXzvYT1PCFWZSdeiwnLyr6mpkHdKYppqi5qbfsgsrSEcnvvhu3Pf68WAMhLd1G25HsLL5V",
  "key24": "4KGHKnPY7b1jGx6oDo6AKgxwWzEc1HXXJHUn5JXVk5zceEUi5hdyzLTpipfoZdRA5J9Awuq4HASLxBGd3U3sno9K",
  "key25": "pUZcAbMLyjZtPG8RKyyCu5GKf9H4VPjmyxZv8ovejti8UHH2SBpNjjec3nmo8c2LhWAXsKb3qf4zEGfxbHudLje",
  "key26": "GFsJtawQhwgaQX5fo2B4Lttux72gSk6D1Ct8Mhaf1CQmt9DAtNKDPVuYvjWDDf7f9wabkeTuQhNAhwHiCV7mccC",
  "key27": "RoDhx1XErtY4pwKXMaHz67sfMpNxk7EFvWs3jcmqWmrqQBT2nLNnDTy6ohG4G6wNMELKoK1ALrPZaZYbeHmSmXB",
  "key28": "DbX5gLxKd4PCragXXx2PJL8RSZssGYuWRbhnZ3xKTh5MnwtbKs2sy74h3Xm1Znf1U3EXaZccbP7UHWWnrEgnCHx",
  "key29": "24gzG1to286fXg1d7wX4Qq3W29VaAgYn4JU7rRhHcT6BDCWX8NHxqwYGmYB3cRtzpB4vzFUunMssSKPRi6GJkcCH",
  "key30": "5UMikt3QybQ7BHNiQ8CueAgqxH25MtDZQwm9JoVyYbd87aKFavv2xaQdvrSRAMbyZthoFUF62w9qCmFHu4GgBHt6",
  "key31": "2dEtMLQZMpW78JkU4Hz83ekxRywVud6YjSeRzU1gdo6feZkCEC4oDNyJq5q91nQaM6NPoMcYbHqPfpXLxSko59qG",
  "key32": "4bD5o4Mxu37PjwrLzwpcquzgi5CfSGdPzgpWdnRTK6GprY4MgaUhZLH5vXx2m7sPCxodW4cfvhVRfDkkFJR1weMX",
  "key33": "2cj9BiJQnRLUckjho7X5PQahDY8fGbF872614vAxcirpoDcSQUj7siFcBHtDwWVjBmiR7v4niCpr2FE6Mhi9tZD",
  "key34": "4VAK7xPQi9L6pec2GRGgYPv6BUko5BqYvUjNhu8Six6L1W5vXmJgSpZaQnkSz6BvykLrbHtYReu4hwrqVSZmkyWX",
  "key35": "2J8pC19LXPupSSWxRYNjZEug5PHAgNe7XgxvYcnVA46NkhZ2bufmY3LeciWjG2q3bUtpuLQVbuhzXFziXAiHhyeC",
  "key36": "64dNZbLGkT92QckWgAY1Gpg8qLDNd2P6oLKJ7U55McWAvUhTXNzSC1d2XnW3K4N9z46j7Hc3cmNi2vsdGLwsvbrV",
  "key37": "2jMUDyfqEwpm3Y2x6knmcxnZFtYXcxFU8UrjRE6L9bEpkwbBTQap97uyAdnp778Gh3ru7sD2VemNDgEd8GSp9VJf",
  "key38": "UghG8CPUPpgMo1tndmZMy2UDrZrMfuXwJDWV9V4KrEJTa5qsvTy2HkCi94WLiGNkpHqFuDEgRbLL15ZW9U3ZHdX",
  "key39": "49vQsTGLLi9ypr3KabYHjKjUpHJvUkPtbr9F6Vy6Ni4cN77e571dcPXwsTocyTrjKL4kbtrT8FS3J2MwX3JU5dKj",
  "key40": "5GgzNuxYWT79kKTgbMsHMKua72AfCZQQynC23gNn6eqV7UVYDjPkRRa1B5e4u1s17jGcZN8gdLqoa7KEjwDNZy1G",
  "key41": "5H4jxJdjAoeutzC4d3ZYbptJD7tXtb8SZVr3rTLbqaqSWwXnUysGChgmQmVfJcm8kLg9v2KQ7ofkAPAz8uwrGzFM",
  "key42": "2Tt3PUqaczY6QHe8RFz2ZcPhbNw7X8w4bCyynM9jN4CF4YHxxEudN4qgUPQT1rDt2v1xoeazvXhzHowgw1twnZdm",
  "key43": "2JKK4cVxEKMBbDvYduagXiBtwLH3WCJ8ED7P3EcBtg1HormTZuj6ntByPW6Xs8ynGfaAtcx3ms9g1TM4Jwud6jZD",
  "key44": "ks3wyvoNrVmYqzQ449hReNDbVbduBbPjvLLx1kqMfM3m9EEugZstVMKzbmQGgSHMPxC4PQ5LVBbR5vHLsFfhH9f",
  "key45": "534q4EZjZVCHGtgDe4Seyw3pqVNbGyMYZyyDguHgufp1Z9oGTVUAjigy7vaFAnxiEnUHFKaoK2M8DthXq66Fpfwa"
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
