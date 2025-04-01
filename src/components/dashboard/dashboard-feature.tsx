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
    "3aXCvn4GSCaUxvC9JoHcqbeb4V8ikW3TQ8JEXxsToGSznCvQ9zRWbHAZE5okCFARdN6DCBo6Hft37m6TM6eQUmFm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Uo3jkBNvRaYWgiLxPLAPwE8E1URhBA7a5q6jQqLdzscyyfVZQjJWjGSJxApeKdjSWyF2vioWbSjfVuJ933gd6NX",
  "key1": "ocxiqeBo28AhYV7vFEXNq4EcizXsmaV5ZVDUTuiKiBCUTPfXvZx9MUNHgtYZwA1GG5ddsNQJjgDULpNZcXoNPPy",
  "key2": "3vz5FwTAiJD9jLyAT2Wc7jUTtJk7f8KaqhKXk6vTYUYX4JXPVaTcE7JmPWt6PiPt8GoXKSmmvK5jJw4qgoccytsi",
  "key3": "4Kmcko9nM9yRNzuf1kiHKKHLW8sfFbEyhAYprtTCMfziebhJyxUoKvSLoiWRskb95gFLUJfFtLrV5eswtWgrJVSB",
  "key4": "3yZYuEzJYDYZHqM78MZrdh1veuY15QmEApeMjm2QhXKVUKzETZYUkhpyeWzQqbXVn1sCPtqJTLdxNy2pZphxWjLK",
  "key5": "4gtoSXfRZp1UpRTJhcgCfAJLRYQ7WbzuWE3az3cA2Q5C3bGckocs1am2CukrFPpJuhTedrbwEF7JYv4J5Z2f73iY",
  "key6": "22YSWKnTrUy1KwDtNTQqDs94tUBbZMbGUdzkdvitubqZVFP6dnJAVcrYMsznuS1uC9N6ttmbVRFgQr6TTcdRZ9Gf",
  "key7": "yvdWHrXbrfEZm6bq1Xp3F7wn6xgerCA5WKGS6cB4LrQxzaF8XzSa9BNsDM56vYtLY8J9To9HcrHgqNveQbCjDdm",
  "key8": "4Xx1NF7X2tsbQ7t3VUJPwdiYBEZScQ16LUokYWJEwQCEU5BZzJgGvkXqc3XsujLMYrMy2XhUvkkcuZJUWQwh7XHn",
  "key9": "62eYvFs8ZHt4yMLYG8RqAWGfKdL1YfUGHxHRbWP387KTchKtf9PmqkVWLjspkJWeQCXihqVJT2pvA8KVCZ1v2gE4",
  "key10": "43vcMrkoBnc3HBGKXWVvgVdRF3QrTTEc2fQguT5ssxCgHNBQ3vyGW3AngiWgWrKDUKuEmyL6thi78wB5kUhnoSuo",
  "key11": "4memDetbCzAA43mSpL5ZnTxcN1rk2tGpuvW8C5BStGMKVxbzuDWjCPZbVuw5F3deroyXaGC6KyChs2c1zxUcDQX8",
  "key12": "a42cfDfPRKYdtRjTxBQoZC2rWLYpYVUmo8cqNyuU8nwY6x8DH3UUuYzeetwKACcDWRdAwt2Qqq3651PDUZvAkHR",
  "key13": "4zm181QZJmUsv6bJwMUZG5mhL2gZdkbRSBDk9ZuZw29kmGto6cPiCsMoheu843in3wanTn5SStifWWHkLPSvdqnK",
  "key14": "4jgZk34k6pLMWV5jdyMtsJNKqdA1SXnW83koPJLDxB1MBvdpbASyobuwpvvBGDgyqmxJbdE6CmKzzF14vwdCS5y4",
  "key15": "5njtR6GMoV9MRnNXJZp4SboRrtALajN9QbouXUvEsocvBRywds89mYM8bcfRyF1ji8faqiuoXVNTpcpVtzMfYZYS",
  "key16": "3M6yPS7Q7xX19e2SJdafUhwSzxp9DnVwEDUovjdtmhBgEmoAPDqRDpvnLZBviRGXSUNT25hLi3y3S6ztcNTDxCrH",
  "key17": "5YFLgAvRFKrsRByRiVGP1bXqcZdfpR8tuuNHcupXPt3Vn26CLenjEW33fiAkVsBeneCSRgDpxjMhihqihPZM3b4d",
  "key18": "7uaZLFyuWMUMLy4PajpjoeppLMFH89xbDGWKFAXCmDdgq8MxAShCeJrtx17cPKgGLqLnnh46dofzyCuRReAf5ni",
  "key19": "3mJykUtFbuup76cGrttmY9RFWMGPd3Q93zNvHknQkHKYgzCBJDcB4BRkroSJEf6CyxczBEXaU8rzKUU15gHzW1Pk",
  "key20": "2cYtK7PstMm5yP8yL5LNU61yQAupEHP4A97a9KJ5TPj8Rh1JnGn6MxKRcWmrwPLxbLTmRe2QBhrJBymxewysm84X",
  "key21": "3pj2jgRMMoXmvg1ozZaFRWrJ3rbqjLoDrNkYyvpnZmFbZ4uukPxrMqt3pRYzSQ3HKZrVpLJRKfY2otbcjgJpZzxc",
  "key22": "3YzRCCzyGRNsC7P3bavHQpPYPdBMY9RQZMLkGaWNm6MTXMDFhaRFPZS5xtRW3fkxf6AQe75YMmyESZoAraauHtZv",
  "key23": "3EWwXoSQCpfbJ7mwaFvBm5yH4Tnm57r3TmtXnUu3P4D5R2bYF2bUWrdVTpzX3juxsXwVsi1cEFmPaaF1EGgXbuL3",
  "key24": "4KFvzHDnPWJZNymcug8zVNKL1wGPSCXXtjSorN57k4rwBm3KcPqx6fPQGTCWwP7HfXT7mPeTLuFXZTxzWQ3NcW1A",
  "key25": "5dfGy5AMreLNgnUnFTCupBqSdwGZsyy4jbW5tyDbsgECNRqf65zm6GrN9dK3rrg6tLHVVMZzm4kuJQaZAxFnVHzX",
  "key26": "4UXGv2BeBmSeJj9cNeNu3kdYE1HfyzYXemvGgRW4xRhJPUP2Pvi6tScmsSNeVTX6LV4LG4b2wc4iyrn1JxihcK1W",
  "key27": "2VSjvcKux5uc1jm3SfULCAFC9UgWC9LCpmB4gMKDtEsqLZNdLdFz213o1srKw7G7u3mPLuDQTyRA3uFz8TBkn1dn",
  "key28": "35W8wuxnrcBYb4MwZq7ZqbE9dNnbrUjAouT2mxKQpDLzKPt34fjS5PE1ToWo6tuJTxzne6wJboXy6ekQdwF5bAp8",
  "key29": "sbLdonQmnzhiRz6ek5pGPGa2aFHzwZdEQGKafwtjZHygi2DapaXH2VtSNc1y7b8MgRbkpKmV5E7wA4sMGm5Lyns",
  "key30": "46JWEQAqCoiTy57yLH2yopBMHFjvLwtufgh46as1tqrUuACZtURhXbZxEJyqLXFzUgopqtsCh7NhBEzKz17CgS2f",
  "key31": "3aPaPYTd9am3soX4BqoqTDBZAhyw78bdMMsDHbBGhioajGU4vnbfwYnKoDtzyCKFmxvnCV6WEejosf6S8qLr5kF",
  "key32": "yhiBJ367kfbcWmJXQ3LCJE6Zm56G9a793CaZgCTU2Ni2mU5agxQmypGf7Eas4jERhUugZPN5KyDbuMTPnJZFP3b",
  "key33": "4iFjhkLTLq5T1ZhDkDkgqkvAwuaushCG69w9u7PvAceXRxhGwzrKBterXkPjcdTxVKbbWk3pJSu91niXYxEmAk2C",
  "key34": "656wxNmtVJ1ti4KACEkyStJia5Y2udm83zDsP5HojL6jYboCwWfRuke4UpZx8MLRKy9NPkDr3GxxLVfgRDdwe7gk",
  "key35": "5BWpTd5F15pLMjY2xNPjrDHJAeAihDrdXqzFiB7eZddKT2xBYBcLCpMa5on88jF5jNKPb1iWsB4BPzaYdUEHgtw8",
  "key36": "31ddF6t4boKYuV8kPggERXnLNHAZUNLyycmvkHEyZrMEaurcM13KBTzJFuyJYkCa2NXVMpoyPqQJhBxdD4NwiG2V",
  "key37": "j86r54K5V6hcqN31VFeP8DJTJJnYZG496MGUrgLhEQyxA6SsudHUASnNT4ocnpQBZohGDSD4B78UX6w7fPzhmby"
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
