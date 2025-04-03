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
    "3B8Xr7bk1KHbujPNUh5SA7V5aECrZ3uEbFsE7wvsxksnmHHGjFpBKH8jGda8izsizgjK1iqiFR1GLbvKNPxNtpTW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55cM6G8sRkaLK9NH3KpcSiiJfAXVZBSnPM3fystQ73k5ietX1fdMhcCEpSnhwb7UvLvSN5NQszFSkiPrzCshaetp",
  "key1": "5xzgRN794wecfrHwMFArmA79RqxG1LZL3LttymyNFBko3c6e79bPKsfG4eyHTeC2NfEeFNC6tNn71YWcKChFyhdB",
  "key2": "3gLReGoRWwvG484qo2JdHD3V5T7Wbn5WGwwzaeFFjrqHS1gu3Bsx6biu4xgFeW2YW1Fey2LYoJkpuEzuDpAYsesZ",
  "key3": "4pYFbpuANC5QGKwjpSrTU86uW5z69s4uSDXwFf22R4bXD7fd5YyYuXAGZRe68ErD7jbDjt7gnZYemVivEkU6SaLy",
  "key4": "5XpEEgrRWqoK9A879XuuxWfL1BDsRF4o1ZtoGeTRmgi2AYvLwJonmaPQSD1mXh8XvaLgVmG5WxMYr4EfQ6NPvc5W",
  "key5": "3q1kYyeX19FQcNuuD48hhpGW3uAmLJGyG6a8qvDrJUutVYgKKPsuKmzYE14ftFMzDez3GHdHsbqEZiqRPnnenm4f",
  "key6": "So947W1q73h8UkwkACdCyhWwmFfxy3quvrafWcoigUHoM4TCiRbcaQBXrQsKPhz1QmqzHuMfqa1BLR8wqKNwVGR",
  "key7": "41YKnGofnAsiNeB2EqY1FJ2sVmvx6ph4TN7sJLmCddyz6YZPrmxFNhb5MsNebfjfuqkxbMFMeG3EPEttUKX1XYFQ",
  "key8": "4kDa7QXUfEFTZ8WqJBR4R39krkqpbzcpTKz4SrbHwsTfFaMckUWJa2maFXgHGUHwhRRRDvyUfBo4GBYN9GVFvfjG",
  "key9": "5BCX1BfMzBSJD1Df2v9X3E48U81ZCcb1BUJk8ZaB8BAVWwynh8G2y2mqgM1j8bDHZCWQdFMEkRNJs2TWegf5xqdw",
  "key10": "3Kz2ZqtMHGUKcPoUsGv1V1FP88CFqetMBFeGbmK31feoqvkAjgXUYqevnEyPL3Sw1uNZdqXFZbgLzjXzsmpiaQL4",
  "key11": "4zT7Df9SUz8BZPsPrpcnAJFj15W6V3CYknL3B78hpUCpsBrnchTrRGxrLYGgKJcW2XzJ4DzJPrJg6FTmfJeKcFZJ",
  "key12": "4hm9MPaXY4PfibNZQfFbVZqLrAErBeojPvxxLLNPt5jk83zA2ppWoadLH7HCUaygcXUzrCPK8t4SNssJaMdDPp2A",
  "key13": "3PWrQTpkSXjVcHYg72vVervhpqnBvaTTjK626xSCrTP6mM3YJsFDuYX5kWuQ2iYQEKi69UNoZSmh1Zb8LfZJH33K",
  "key14": "4ft2oke9xSHdJfcsfL5wCyGY9P92JpP6KsHBre8LZC2zJTQW3Et8oxG4JWqW4EroNJYamXxRAnHwehVYFBVFq7Aj",
  "key15": "5KEWKEyxAPuFMvpJ5QyrfcuVKnSSwF8sEJ2jxZCtTd7tC8FSpujk29Kw9c4QU8pEatit9n9KbGWr4weRPNsEUAns",
  "key16": "3WqEWF425DQqUk6zo7VqAfFatkbEjhfer3NpxEoD1JwRd9Ri9brDX4BurqyRSYQjUmsRs4nuDVnicMStSH2XVfBv",
  "key17": "25i6wemkbYSVWa4HzGtsHdKfK5VjH9cpzA8UD66uoHkvWnzWYtxhSFYoJYCrAu6NrXa8jdjkxfAeD9gksknJcoXR",
  "key18": "3nKLZzCV1Lh5GUMoEh1SKqae9U2UAhrUwbvdUUVYSomGA3FJU1x7xXECFdopc3kXDAn1rQdXFamwRMCHhco7885o",
  "key19": "2wcTdXNYqgcT7hvtqNHR94xqmrh1xD91Ve7GCQtEDBSDKm6VY69yicYecgyaM1pEFZCkPSvLp3fB8omKbodzfNwN",
  "key20": "LX6wG6TD6KGB6ofmhoUcZBGe9zwZyWD2VtCD72x2TUeftdpUGPLy8JXU3vxmrjAsCQrW755FMgkZhwJsnn1NhsP",
  "key21": "3iQWozuhkB4vLXb1EsjR6od8hmituycGyFEwC94MREirfwUX8qCvpM4D2aH6iHmCNaCsFuQFTxnhkLPhYVGh8Hy6",
  "key22": "3miKRqsxZTB3v58xd3Lprb6PJv5Qiy1PxeuAxHcVHZbaZ9vFhafoh9f15fqee13gbM6Pevt2qZ1wP2gw6gPndMaA",
  "key23": "5LjxC6Zw1rrUsxCgRWpbj65hMdDxMhAEpnVLEkN4rfH68S6BCUkrqDMyVXr3uzVvAhqzDaAKqfQ8CuLd6SrJC4rU",
  "key24": "ZaeemXikS3Q4nU8QLQ8niNXryeYBhebxMn2FRHDntry6MxSmeW7xNx2wjLjWEfLgf54i5vQb52qp8k7n3RgTiYU",
  "key25": "2ez2JtkJh7QmvHQpx8oXXtxikGgxJLcqo6Y3v4M2CZYSgzqWN27KskZjH35kW6uq4mBmxj5hrQ61z2EFjemG871P",
  "key26": "4nydBuS6HWCxuYSXxVDtf5AcGQFmaM4iwpN2DhFPaWyY9JSdyEf56BoDxyzC886tnXd1sw4PRetUY9RyzJxST2jd",
  "key27": "5gThm3gbar3et5pmxYkVQ5KHeXGofSbVUB3QWb2cqGQctFzn3h34TRxfLazDBmTjfjmsQoptqqY9GquZyMh9jHMb",
  "key28": "2WhTzaeriKiMFGszESC556m1g7ZcwkVwkaymSQKeHzRDNBtokUhadVNZtxhpfApnm56eaGq5wP7zXz1XSb8FwXhf",
  "key29": "75RPG8uwsk1NHHF1nQtGruCP9AA1TgGi8S89SGmpwhddE9uuSvyy7YhJrZeGThVW2bRm7cw5eFHKgyFfgPpCPb1",
  "key30": "5vNvDqnppzwSsTDgoUGiDuZBKhL4WCHXbp4LGcNoid7F9Y2NMsK5eHKEWp1WWe9Hp4jwRhibtuamhrFTUUsSj94Y",
  "key31": "575ADzoY6KjTmCG2xf4zJ9vvfNfYENF877amktTbCfz3HPnBHisUPMQnwPo5sCsySX3p1owz6pSoo6u4YXFp2evJ",
  "key32": "4ChehWyucNeBEebuzKYujvFvrj3nLFYXXXjJY1QLqDZvEv2X83aPintktxWRZGF7g4wkeHYGFiPUw4dDwNKMZAbn",
  "key33": "2PtJSo8j4XcrGZVCTjdctmf2682mTYN82T3Bj6fqhFzPr2mvBGTjYKynwanwZQyxLxP6gidbWVd3hSzq3okoPcBq",
  "key34": "3KGDzpsQU5FSg4FnJTJ2eURpkFbLDF4aiggfbxsmmHKFyJkYh3YP1s1ui8FGMv1TYiAEYiPUVrUwsd5acd1w1wY5",
  "key35": "48vU5xNH65bBQadr6DWquTuT7A8xdm7aGy4F8LSnzEwm1A4vWfCFwuKTjQ1UKVBwizP7Jf4VgoruyjMMDL2cefxy",
  "key36": "5qMbyRjaUdErZhxHY9fBSziEojXe7M7C96A6dWXE69PhSAD4PRQLadUH4XmwoZuLmNFUoAeW88NuPaYVauKn3ftk",
  "key37": "26TyAGfAZpYqhUkMgeEj96iAiGqKT2oihaGCSunWoyk8EqCQjCEHc1zPCAk77H5FQwaxvASF6AyBivRWGj8CNG4g",
  "key38": "vnGg19ZDhAnk61jVsastaeL52NwP2zw4ijHU79Co1qKcKUms2ciktbdg9FnUaiWS55kTTDXsSD3EATpsSWVic28",
  "key39": "4YYpuHixgoL5BEBQhueChY49hrm4NDWtobcsEvTzAWrAmErEqhVxb6vyBzht4k4AuCeNZ3kMYgv46czKrCgjsv69",
  "key40": "3tvWdrUziV8Zp5Pu3Etoe9WUVnJQy4peqqNmX5n29HB8PLa2Nu38dKvLsSDfZdPEJpi1BZzCuvsq67Ltw5rgTihE",
  "key41": "3qk14A15bPxayFzDAtdZg9LcsLY9NcjFXA8cqVWBYNTNhuMnHyQsM95pJeyPUupyWKQQKXeKN7BMs5Qykyu5CDCZ",
  "key42": "5cJpQGDbNKnnfYcNAPohoCM2StJSXLNR7bNezLBoDMnaGw6RTXKyoeSV4Uhxiz28EGzdi4cwhKoJQBEFAJikuZBr",
  "key43": "4vL5hVrfjxdkLQ5g8TMtMtBUwxnswNUTmeWvvHBsnpzE4tsea8VpLmEyTDdJF3dAZ8LTk8ppzgBmFkLCxjdRTqWo",
  "key44": "58YbNJLoGvGV9m5wiv62XTz1haVnCiRcFrwKSWWu4j9QYTWpAqEZ74QvLLaw3UUyaKaVt5urT6NwLbQZZ32dcTXR",
  "key45": "FCcAGDdRKhrxfwv2bh1eHe5zSrP43EeF2RUKJLF5eBpozPWR2hKL9CJBVX5CKMRxKhJ1j9ytMruuE3Q1DeN5G8j",
  "key46": "2TTSsceYV9zrXdDKL27EohZP8HjyNLuYQXZzoRzRXgSYjEY2wqaEd5gTNnvs5WE7rkq6m9SmwFFH6dceJUcn5JFu",
  "key47": "4U9MwBsASq27egmYhZfRvQPqtkKGh3uj9cCdyQ2mFy9W4RDdTp6xWG4hDJF7BdFgzwbTeQqQqHFwR44ghAG9PYJy",
  "key48": "2XiywXGbHkYpDx244wGA6f9Y8kXHKJRKVHvc1SgfXksDap78QweZReUpg8KdYWhoFZvFzUQ96mJqZx2HsuzKhHFj"
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
