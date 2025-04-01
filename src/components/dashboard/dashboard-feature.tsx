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
    "5JvwwZpDFWGkPwX1gTYhoMogQ9QZop3qBM5PmPAU4rBS8b4KYFdzuQVZhEQtE6rYAK6U3t4yffhFvmBjgAWawVn6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mGVoRDXrShfefBmMfPyKMaoGrRPgbPJTBeAeNLjaFuicN3hSmEkq2DgmacqgtWWX98Rq8bV7kYfTAFpLbrQY3XH",
  "key1": "37YfvCrV3kY4ack9iEkiuKCuvAv13Vzuyw7kB5UZxzkmdu3krw6RGGNTQZX7uho9DatkRojAcx9VWEkMEF6Mhxsq",
  "key2": "5pq7ZM3c59c9wM8W46V4QjsQjPQRLDprhx3XHhiKmd88sDuLKCnZukdLN6yZy6o59e6xrwvNQFLSZ3sk6xQrucbj",
  "key3": "4vm5BFN2skFA8GmDV6t5bVrA13LmRjFshEfVKYQeNSfALz72CtmJ5iLiQGG17eLJiVhLckMvn8m2UNzWwrEx5Wj7",
  "key4": "53NcCE9pnGsHPYS9w1hjRkGSq9RMRFudNMxrJDjwtJBPm6KYYkzK2w1X1rTcNmu43hAzACPEznGHEcZDndTmubz4",
  "key5": "TbuuezZc4sLgpwiPxKdx1AuWcYwQ5Yky7m9fcka6e8m4gCF1JKQkhnR3m32g6LbqPBBQ3ht14xuAsxniCbE5iYw",
  "key6": "3ss8ygXxtHiGo9mm8wkA9nAuuCgoWketwFqivAh29nyUXFQu5JD9JnNDjvdmgqee5reMwhnsk31kgjsEbj1j11i",
  "key7": "3gMMwgaZJjNfd8q6fRC3oiEvTUXEm4wYsvs2SeAWBgVamYYvjPwrnxnc2QTtALQC56THzGG4HzCEyKpaQGVbdmvi",
  "key8": "5iZNCSvAoxK1ShtSKf5DkWRmAavgk7VEyBazUoviiFFsrrKZG1Fyeq7bu8SqfcDvD9xYkFg47KCyNfnVLUp6iNjG",
  "key9": "45HonxxQtTwHBfs3AFRfkCNNhaqZEbCWaFgu85gqWYvbFZNqGqAc5Y9uDzPxq5gPJ447VyBUKnxCytSB4GFBhQXm",
  "key10": "4rKewuKFajajeH3sp5Z7qLSBaRF7K4cLmG9LkguFJETEkExvjjyGXHYEYFvRifdp1Vyuh2rCNghYw7QkYi6xL37y",
  "key11": "3cbBCRmj5wd1SaLmnuZcnxBYtA3UZ88CivS9sm92WBhyuBYYbuhWKYmGsBECVjtfzbfizGuoCZQFAnxWvSBT1tRr",
  "key12": "5cctWuijNRWXS312Rp4CPUteThJSvc7UyLGVyvGEdn5pVJXgS8GbJi2rspq9yNm6yqj83nr6F135tDQSsPXMe3Ly",
  "key13": "4ZYDcvMy24nCbR4DupZjRvj9YAKroL7Ea1hFZrW3VpkUXReNLtqDDJTHeeH7cRKJECpxQbuuX1C6WvU81WQ4HvEB",
  "key14": "3KSHz3tzziCSCvFE5QNw7qM6MpWHRS433qtRoxhsco3c1DLfsDM2xxR33hbrWYZFbhVB1D4mmsRFTDKmHnKi3jAv",
  "key15": "2TR7mq1LfytDAapnUJRmZZwpoYQYc1EsKGTDqN65tbBzY5xXuiHLzpu3rWDVyD6V2jbj6BwD6C9SGq7sFoZwCQyL",
  "key16": "4DdZqDT2Hi7iLEbipD78TytZHoiqsF6StAzwdxMe8PnrfpkKJWF9hxujC2KULmr2EmDFEDQXw69SadU1upuVf7jN",
  "key17": "4DFQbSG4GYUsQpNtohUkaQntUzQRUavNAZQQ7QmaPUh6J1L8eX4ygxL7JKYUdbe3SkNvssk1VmHyR8E1PQirVTjD",
  "key18": "35EABzwMcSPj76dusZ5aoEvM1MqXHcLuceerV9jYrysc8ZSjPHAU9ThAvtvvfTN9sA82A2n9XrkSXdiVujFfTaSH",
  "key19": "4g4B7Gs1StGQKLMPg7d2ngMkYtqUfeq7aFpuzM7KYDBRvVgwCqMQDZcZBZopaEipbzCrN5WsWGY8kULuPWVoWiCc",
  "key20": "5UytvdYfCSArdmCFa2z3Rk1hcYu2dDfhiCWdiZcdWvtAsTcswwUVoAQErv6TiT7BFyTcHcLeZrxzADfF6HvyidKS",
  "key21": "3NrRuckBAXfxjPnb1UCZEmrHeC4kJr8VdEQu7JMWV1SJiyhQLKZwAK5ByP8sFy9Tk7msYFTyXrdRfqrTFkV8hsex",
  "key22": "5gfk5Tzw1gWu4Rxz3cd4kQFNKwYXvv3q2vYuHAx1rpHjURwHY1Ymb44mQVw79YCEcQk4cvGeEX9PMw7CQTqZ5v8d",
  "key23": "YLqsFPHJQU7mEZJAtwJ1ammNUhB4CyZpTQDJWhhki9XVF7j3SjRCpPtUpnmBEkankP1usVsi5yyrWYqDTrPop8j",
  "key24": "7w1JKabmNfDVYPMKMSJW2PnQR8iJAD7tuu3FLA5Vq18Ph64fRX563eHBkjCDyh4uMAa8v4FgFa58WoBdhzEC8VZ",
  "key25": "2SbaTYNDhtRi3gFqQbdRuHS1epQ5Zkwn3jBLmcRasy89Yfvgp7Zejc6qAV1UNRHCBxTuSYnfyfULSNtg8khpPJge",
  "key26": "2Q1D2KMMEKAqTNvmzHKyYjBd4LBzzujW8E9VuVpaWpS9VczhBXPmVJSmVBTdWwVwZYTT68uz8MxPg2P6Z9wTMJQu",
  "key27": "4zQUoPTnwjSKGcPzPMLBqymXjYyTu1EWN1SCHHJwRY7SragQQcWkkV5vTzpMYMqxnrnRUJWV8whSBpA5Yq84YU4Y",
  "key28": "Rz4vG9xwrHGpPrxkFhLUoN36s6HfQbUbiAnXmp8uUZoKRzqg5XCBZxZK5gmooX6ktr4kV3w6ydtPhULxNfrof1P",
  "key29": "4Tx9ui642J1kyqMmsv6WzS2NLGq4i9MAhni6bdZt3GvxnPZWnLtrUCXAx1sCyiLT4kjcxfxSjdYGmzXRoCM1ys7V",
  "key30": "62YuDjpSfwz4uV4BMUJb6SsANoTEibfpxvGUCoxww4obR1jCKP9dGRYjKLcn8hC9Fp8YecsmcwTrtbZTk6vFUVQc",
  "key31": "2KgGTAt1goA4Ay7rGNtGt5DLDxvaaq83LEEK1muA5sZ3m1Ard2bG24TDvEyT8Xh5LsWgraUy4c5mvpSrZGvHBjXM",
  "key32": "4t8cCABvx8xEAY4rzbG2RVaBL55jHKcHfxUkTiejwPytopRfYE6NCdjKicqDXmfjq1gZVB6X3UvWPrMC47zcZXX4",
  "key33": "3378NRvCAhEW9WnticWSmnQZLeJp1bgbTGtJa7BMHVwTKLH8rgjWnPxyagoviNwF6CUy69ukaLjxHrXwtfijeMf1",
  "key34": "5xRY2ux6X9gkXZPiCGdgSGvi2fcjDrrzJLKVunw6fwbuszsdiiVHNi3NeKBpWB8obEokLf3KHKV1iVTKKbdUHXjs",
  "key35": "4ymNnhyKYcsjHtCsgkA51tjP21VjY9z4u4sMmNc8A2vsWhu4A94ygfvWzsfr79HSX9VPkrkhHEXXHdQ66ve97PmB",
  "key36": "2cYBsrWG6s2HRywmHrMvtMwCjYL4z6YsupW6egiXbsMSmsp43VAPR1ArGswEY5jcFvxhvpg3rCimfZJkfnb97dnp",
  "key37": "67GK5QbW9FXfr62pe6W1bVsSVVG2fby4R8XiJr6jJpPAbENvgPyyj2zDmgBwXqHFsKfW1Now2Z2o6CPfwQXZzfea",
  "key38": "5tHX6YyRHFnByTVAMtc9VnitrJUYtKDcJHkMYZUFjxZ1EQp16LkZ5hQiTpD7wtdpdJReT8iE2MCvbjg5BHf1uG4p",
  "key39": "53dMe49H7Q13fmTyca8eqQbxHdyNVWBTg3cUZ5bdfH24Q3jSMgiJYkdDyrXMp7kD5RUuys9zaddN2LMkPx6MCnMc",
  "key40": "2NdtyRYRcAcsR5Dv2YWK8DgKReei6c8LV82grDmyx77LqtDt8CoV7DpUcBwCf6DHuxthLb6Uv2whZ1DdV9qYVyrj",
  "key41": "2VdboXprpL4oTynp5XBuKXHszxYwTwLDEb1gpQWELe37fvtPzrUMnVTCmBNDagyvsschDaHBRj7QPDH4GSjp7AZB"
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
