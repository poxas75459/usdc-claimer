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
    "2cCgxQWQX6UzrwtfAXv2wAyZgpBfY9Gq5NR7zZBcY1y1sFGYyG6BsUZZHyQGeCa3vo1FxF4vBKKgXjMk9LWDbDC3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LfGGYAfK5YBFFeWMegjomFwqs2hivtmHNQ1P92vfwGU2nQvp7oR6KVaSYTABQBGcdGnwGBTtuhCvK8qZ3UF8RvM",
  "key1": "5SkgRcSwYjrYVm2K91gYHKmrQdPsPDeFvZWFyB57gDyfkHZAoPwhDCoADP5yvtjDAKHw5g22hrsmwNK1ZakkhDyW",
  "key2": "5GV4RXUtCV3TphPuS1Q3GBa7McGv9hP9RFnxADMZyK8PvawEK6SYaWaSSwKsEa7kEh4KTErZjYA5EXBHcEKn4Jfo",
  "key3": "3Y6BMRs5JamGK2gHammRDsKAg3kVvoeBgwdNkNih9ZCq3Htk2YYdaUgN6xcBhTYUQLLm8Wvc44ZBHjZYUxJn72Qv",
  "key4": "2VFpfef7KZk7UkjXyKwUoPHe7D8VNTTsg1wRhTWn8aHEcLDA9hNDDrYCP8V5p45RbjEYhwGiNd62EZx7fdeR5DGb",
  "key5": "V2s3WBPYscEkx9fxmu9qyZ3JQjQRDUafZKVVhVJv1x296utv8jb2rvyLb3ojvifBuLp2g2WyGxQHsYT52s6mcy2",
  "key6": "2qFLHxsLi2H1mTUrb5WDLpzQu6G6jQiWzcVZP1abvZpqXdARYYGbVzykNsQm63eZXJNSFgZ6XF2uCyLt2in24m46",
  "key7": "3txjuyEs7kRtXZa2aW9rKqLCdzmKK1Y9RjYtSYGaiB6ovxNM3hj8kqHHye1SUWEzEejvnF88MdqCbrLv1qeoQFCX",
  "key8": "4dJHA6MFH5SbyZPcexKhheocaRhvWCfRt1K65HAjBHT4uxSvcEGzTdjPNhzD5GDqe41MpM1eEs2qFLfC439YRgub",
  "key9": "5wKDV3L3SafbmsWEFFa9DcTgS4HoQv9YnuPKyVwzR6Lsx2VE4bAhS1y8fStTZ3a4tS5dMb7L1smSDDzpgAoA4XRv",
  "key10": "2UJNjPMQyuk5azGMRwcgAn4MEnmxyLXBh4Vf1opMbn3SBapYS7dasus5BPtj9wjt5BzB9AgAdnbBNikZWyUFHrb4",
  "key11": "5vyAVNXEiGJkpNWvPgpz3Y3FC6Hxjma89ethdS4FMC37KAZiJkK73V8Nmo6Vvy1W2c6YxU9AXrPKNBqwRkyjqvyV",
  "key12": "5CWsxx2asmygr5T6yv89KSqux72cjCFgp8LzxvF959C7J22oYHWYAcx1SDcdrRTTPy69aKD4hPfTr31gCAvnMokz",
  "key13": "4NzakS1iMspzLGbooKpTMPXFzxLYxRBZcCgbeNUmk9opJPpSqZyZekUTSEHRbc1ZNMx8UzjL7Z6Byu2AgakqKpVr",
  "key14": "3F99nR9b9kHChQkcJ7yLURuopqijAVXv9gSohxJvvDw3DbgUnjoYrHLjDurspev8nWJfZKE984ygCpeUnG43uab2",
  "key15": "38U7a9g72uucPYgzLUCDh1W9BfAXuCdnHJXHXFt8y1UnNRWqdrT7CFRt9S3xZFPp3vtV2uARh89xsCbEJzwNfMJx",
  "key16": "4ZuWWjdaExpoMNKd842hf2cND2ysy2gE4mGs6XsuwZqMPfZ7LaSh4unhyXXVMYcfTvJ6sQ36qoSmebjjvCAb5oSi",
  "key17": "5YGpJiBc7gHqCFsxAS4gSXaR49LfDTvodgmhKXCxwWWzkjAroixnM65iGyvfibK98ScgB6LUCKSgLCq6xf6ngwY7",
  "key18": "gXLVEhJTW1CA8Xa2zJStbscR17UP62Tq4iLZTC4oMhhZdMJV38cZF1pac6Reqs6EXMmbRyuXCHMbkpQr4zEXX7a",
  "key19": "JfeMbYqX7dzfZWK8dsKGDhxjyYP99GnM3tAJJXFnzQXtLQ3ZYEp7xBTw4YsDzsnL7WU88abFzHtsCKq2C2sgkEj",
  "key20": "4m8xrBUrnSSghGTHYEVvUUVXcu27ErLDLw4AcFug7qZEvxEHxY1LAN6XJTPuN2MuHgEU3Ua8mHMhHy1tbaxY8qbk",
  "key21": "4qHsLgKLzottcoWoEjKFtZQ9db5CLjjGgwLCVvcm7GaYa4xxFQpMvhHB3Rw2hSzZd2hKrHiZVAfwDMW1TJnYeoQi",
  "key22": "4pxVPRAf3DpAyDx3M8WR9iWRfic6oM5GtPaFk6Dn2JsmaF7xC9ZssqQWRoFLHb8DrN7CDTaRBBLVU7MvWJMF6a3C",
  "key23": "V1pHyjFCTzLHdKMdyxmvERDQ2uodKVohzLG4tjkNno5JJESmNXwmYuqkuueDHqLwFhEBqL8jmSYbHs3UseEfAiF",
  "key24": "3vLGy3GpspBtkCYJxb12tvpxh5cnn7Uc6rZWR97EiTa918qhAcys6giYceci8uRz1g3STfEvLXMA5ovJqgDW89AE",
  "key25": "27wxKW7nSMLbUGMZE3pVk3AaP4Sp47PhtCFKnMznkcP4gaWcF3yyeQg7evY8RW5bZ5cs3DYzYcLBiA4rwM2iQvif",
  "key26": "oZZKBjBFKCkve42JnRrxDjcQZXDYZnT3KuMGJbwNV7YXMUcdq6tjee1bvmvyL8XADfVQE8Nj7169zTjfS8MgTRB",
  "key27": "3ta52ype2ud15PukTD6Bf6awcEAkb2AsWb2N4wSmb7iesCMUvYsGogxYGcxZvzAmrP11EbVTuTCPiw24oWBueJaq",
  "key28": "2cUaPR8tb9aKjBSdqgkgZE5L6A4gzZqm5W2QBXWk7tAwkh8ZVsP26AyusYFcgCK4ZAsJgom7gNXKLVUkVrwCCiJx",
  "key29": "2atVCetcVMM6AGvGxoxwHPhQwcSuTAiQEBRUjqHQ4xZCFSrd4vm914kv7UQwLgAuTXv71ZVjAmESD7BiQD8GyuF1",
  "key30": "YabFpTAfqeNe3zxEP5Haf3Dc2YUgqdkZgGEjQUjpSgekomUcWgtrT3TEvVi7FhWtR4Y4eDGwTh8bhX7wnNzNGoZ",
  "key31": "yv1BTJqzYHb4SxzaK3MTU7xVRem1omuudF9Q3nxn2gZdfrPtvF8VDsL4W6g2qBzgbNdu11kx7kBb5faoBPrQ3AC",
  "key32": "4mEtkkU9Xv9iVN1a1Sj5bSKnEsxBLe3ow2kJJm7gtmL8wFP7xHbnfjMt8YufFYVxCwTD7Fd1E2w75uEhgDWJjCc4",
  "key33": "4H38guxUJ3AMqx1zSHgC2s6AfhTrr9879D5pVetGhMXdt6xDS6CgJyEg6CQgFy94GQ5uaVKMXJE44RTG8bpFdhd3",
  "key34": "2FFBar1zLKYTTvqQqk73zXFJuHdTgpLsYPXg6dBo8GTyS2AP6Wps19rCRCDA2DBt4LySgtkf9WLMfu6hubr5ciu7",
  "key35": "4JbT1gQ5WiFrLQ5TakfztyZdsZdwriQbSCnKJLwJjcgBPHwtG6VSALmHBLqdpywGwPXVRDrTp8wyjymnnoaEZUQV",
  "key36": "2Hzzqe7whBtQS3a5iGYCujL6BJGsowM6vAfiyAmPDxX1s9VbWQa8JYyeFBTRooPoa2XT7htoxRHei1DSUvbAFQKL",
  "key37": "cu6vEt8QVG3DMX9yTDzCLCoa56mQrtmfLeaGhQcPxEaA332rz5512UJgG1qotEsnzJbFQok6gucRDBvsj9xeeat",
  "key38": "38mCePQnHXSRKMk278wFHr1kc3JpohLCwVtU6o2Db3XoVFSi8zo6XL6difw9J1bVKyPhK4f2QEkoCFGnwTq1rLVn",
  "key39": "4yDMi496Rg1iFyGuMPu6wGxu845JRGzdVhsnoUrE2BngzopXjbWnCVBYHjChDRGwQJjW1E5tb9ojvnjEzmfgKS6d",
  "key40": "5gHj5op7btyu9CWqkcmMweVh4N568iDaMRAmoKb97xotnbS2E9qACk7PJDio8qL4U4gW5rnbqzdHjdwNKzePaz1f",
  "key41": "4gpBkC4UdbAA13GTh3TtAwA5FN6yY3fyaFHUb2rfRtCsYNsfpEBPQL7asNBRHTBL1zxLqYpdjQ9QYNShHs6mZDUT",
  "key42": "4tHPhwDkfUJajEDkABb7d8tdr1yMMqGx2gCv8uCYX8EQqXBZH4DWekjbaJKQG668yYUoaJa7is2oSRb8dgG4Hsch",
  "key43": "3DxMJeW3DipBDJoZaN75T7ppvEP938L1xyi8NoJTxGfAZYvejkcG8tkp9JxPiKfEUNuGQzXY3Z6kWL5RPPAukbd2",
  "key44": "2AGqSkG65MvDPwX7Lv5nBNRcvgJSubAJZCMEi3WuXUjJTtdMCU4584XimpPzgcmkbaCB2wr1pphn9EjVtSWnYHQ9"
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
