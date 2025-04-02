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
    "dEnR9oCf7dEvZeGBxRjW4wyiKm1pD7ygZp7nSzHohmxn3kPDi1LPEpvTNPYk1jBwuLhkVCJpx8aGvbFvSUJsWYZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jTf4y46wpHeFm9whXY5EimbLs3j32vdz4Nr6cUf4srMjgHFrmGnZyQkXHtLY81oeMKJiGAkSDAjP3WgWmQtHnSc",
  "key1": "5NMa81pz424a96UeVfWckgNZ6Un1FaPBL2MLHRrkEsGG1Lrmp2JjSii3TT529Pj8VXqCy3W5QouiVXbMCZa6ew8t",
  "key2": "trMK3JAjwaZtUPexJCyoK1HbREDyvVLiMxYkKeU8mK8jNbZk15biq9WtefcwffhanjbpDTFk4Db7Rw3jW9CceB1",
  "key3": "PjAz7W2CczhxYc1BuDoKXfPMCAvrdiB2drLHZbqtHGwK4kxP34gMj7pZEC757tDDCM1zc39MmmBZE5ZhPFrTRza",
  "key4": "2QtBzKqcUy4yLfPYNRm4gVSdK6toUhgtsGZGtxvRL3FLGpby2J6BH6BZTDLnQ7rxc8UXbNNfGraz9rd7b1E11b6Q",
  "key5": "5Ep48QZxwCCEdRVukyZaAbzD152JzvuZhi62aoqGmw6g88okt6X1M5534u7wEXixgvQxFY3hBvRVRuTh8raBe6hZ",
  "key6": "Rkq639q7VkxwJaHmWZc2Vqx4PEtncoRraPGFR6zTr5S3yoMFMABc6gX2fgnogJaSwBVxfzod8uKrzVmVFbopEMq",
  "key7": "4XocTXLgKQsZUZMkmbCGyTjgmxCh48GB84nC78xqbb6LfbH3PZ2y5EK1zaZDq4vKcWx2i8hBNJKT7QTMzrL7hSS8",
  "key8": "5TeFG2PTVWboRoh43TaTsQPoimi2bkgVMXUoiLW8i42sGJnymcC8BcGC84BXKnXcLJyA4DuLATVTtHei7v4UyCMD",
  "key9": "4WRu1dnrzegQ7APZccxvAjYgBxi3rUCMEF8HAejAvMDVx3j1RRVKXzo7bz7N2qWCQsktbAmh5D1yhGfwiUq8JEm2",
  "key10": "64F3fnCYfUY2yVfZNSXLbNxcvCTZWPPLnA48SB8udGmTVzPx3McT8p8Ei3Yk4pBHvHmtxvYUh9vAbDhYa3oddk7K",
  "key11": "2oNXQVkPRKsCKoNY69vgUUeHUVTBBbfNwauLKPwir7SLF13XnFiuZfkn5FeD3Zi2jtncCgWphymXDWpq454XDDyu",
  "key12": "RVDAixrSC8TUrFdqpi9AxooavM5UBWPBTCbxDcz7B4CSXXyKVdvwdkmbtWoiQVbgt6TdtVi2M4GmHjQpegfED1U",
  "key13": "5fGTswgoMNv5KoLGp8LqnvKmbJiB1tk6UtjrcQx21jNxKSJQotqeChDg4eE3LfShKLmSNjQaFrhwkWBAPHRUPiyK",
  "key14": "3weaprfL6npTik7AxH3pYRSHD1xdYAixZ5yTDj2ZYbHzQvDKhzD4kJ2aYUJujFjHadpktpmno43oJa2p8T9Eo4cn",
  "key15": "8DqXLGRhfdSp6fMJ936smZ1KzNtr4SpU1gbdt9ahqCRaT1e689kbcGLHEqLa6n9JJHg9avPBoc7EzXQxo19fbWi",
  "key16": "3AeK5YJgwsEwhfKShpdAr8KMqmJa76RWfaBWnXcrPTNuHp9yHSojXX1wnioR3TRKURz4gE2CzZG4evC84QUA1ueP",
  "key17": "5JtG2N76WDkNVkKKxxn29XPijGVxGqXb7C4UKZaQZaYTWczz3RnAZHRxaZEqjZZaFKqnMsVYecypdSLyMrncwYPH",
  "key18": "4ZC9JtJ8bKGdMsBM4o877rpFLbSsUqKdCn76b1AYEhtR6UCiWR15wAME9szoYiPoTjz9hCYp9TfbATXYTEpSLXkK",
  "key19": "5Ap9JPEhRFjbgUUyTe5cJPtK2NKrwemb1LhwyZZKrnKDcAs79DNHtcUWBfurTdWB5hRUJXJzktVzz9RGP9q9UkU5",
  "key20": "5SayCzR4YwoJaTxwUwcGVTShERPVEbE4RcmaTaUCfajpQZhKaxZDd6aWsBf8vDAatCZH8KiTS59XemQgR8pssizj",
  "key21": "2e8zPsYXfgpm2ujda7xNYdy5e124xv4nPhkMvZLV7uEiPqYsFBUcY3GnxwBKRp1BbVzVV2EX5i1qhTrxzMGES34d",
  "key22": "5VHQhRMwJ5xqZj4LjnknZNGx9m3zAiSaiQdNi5UoDp13ouoXTpuJyivHWwgYPismAGmpfCtM59aDPGREsQtbctWj",
  "key23": "3BDqTQ2TaDLSZGL8ThdbmQdwJQ3b4BSSdeXCRCYuSf4YXV6p2PiGbABs6CpGbAJCpBpT1aRUiKhY9nqPN7fvWsRn",
  "key24": "hXHQbi61ZaqC7M58xsuAdk8AgK1kP9KPu7diQzmUi35e18s1JAV2quAfNpfrNYs9AKJmpjrscpFv7jYpn1CPjEf",
  "key25": "46zN46Eja4njP2vZTwzSi2t52He9GEoCKufB1BRmmuDgLXRLS68NWyqebmS42fS35o5ShjaDWNq6GvfFNcgGw3BQ",
  "key26": "3haTbNtc1nnwXkuebihb9mPAqU9ai2nTAFDNct2QEduANZPLEGeh9fM2VKgKXUC1StnG24Vmb7goxR1mYXjp1NEs",
  "key27": "5fPFAwaJjbqTZi7WA2mGZPQGXrxTVbetXiNAXs4aeyy4P6BDGPuuCS4k9XE5YGDwJvToEnCMkckmowXY5gJvviWN",
  "key28": "5vXLGxLt6bZ2DLmC6cwCFKRqXYLojyj3VBfS8FyEmNq6smQnRkeUB4WpkpZdxN7y1iJhh5hoqxpo3YiE9amBAdj6",
  "key29": "3Gmjg47vKe9FiJs1VHEWTvGnJcM8eCyzfS4zw8HfCnTsjvg2vhsWgJ2zsHVDxL3KMgagRTHAHApegPofvrqCmB9z",
  "key30": "25a7GnVzvCxgaoXFPLz9JoyxtRuRrWhgwBcEWRm9ane7hB8D7GcoYVhEAByauiPRk8eA93iVffvR5daZ8LztpKcV",
  "key31": "5kS9h65HCtzQDfzaSqo4cL4KTWYqRt6W7Fpswrpcc7zku82VCVsARbNsDm6HdzLkKRXR1NncsyqBXDkcpEbBTxoM",
  "key32": "358xg5ms9thZyESMtvr2n7pkuJKAAgZhqZJ2R5KfyCWrFcJ91R3caSxhMeT2uH16ZJAVDQrUUitMzb93LztGjFdV",
  "key33": "5HG1eXR1pvQontTqtTQyaBJhnXcPHwHtwmhRPQx94wdDi6kNwMrAd1HCayZtyykv7pCKnxSQbiwPAavipYVZ7q2Z",
  "key34": "4kmVYXMa8827DMZf3GLwXRHMRK2N37swrKR3eQRRkPzPjEDDyrvYxFe82w6KQEGXXc1NjvKCqUz7H3EgbevV65wZ",
  "key35": "3GUrdQnGNvG4XQx6h6RHgJwEXESPbp8YR2bQBztYYvGdAsfxkCACk88JXzra4DdDp1M8RfuZs8dYMe3DEguHtGnq",
  "key36": "2UM1d3HdEDDkTgN8HVCSNSYVmW6oEbSLgGJrG7KkrRJqYKfbJ7W5V8QvH74rWn16puWQJJznfs6KHqtPWxkvpArT",
  "key37": "25pyksork7EiSAjdf96nyRyaSR7hAD1fBF4HW9h4FXqpD7THanqZtu7yAFeKdjGLzJyBzvSE6bgNzuMDsXHBqW4p",
  "key38": "ZwPKXCm2yCTPiXMFBAJzfQVMhakxV8Hj6z9BLB9UixdqsSMCKkUF6KEk36qHFxEbciWNFJ7Hbyy1HJMKMHG89oq"
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
