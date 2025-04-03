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
    "3YPax3UUEb9ucqXxjpXjTHgm5yaCEoFUESPv6D5iRkBf8gSYBEmgoeQd2YF89adP4FzBD8TwS6sndAKWqjQa7rEj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5K6AsKRE99Ne2DScrvrfDzfeo7F8n3f27oynNkVZHv2xJbZY9auS4mBYtyPT2YYeYvnc9g5bANVZ2R4wj3a3N83R",
  "key1": "4bf8AZFFgvpxYdMTKbDDFocpUrTo5yumxBKg5BgYSLxehnRb9coLzqgnGQ8CjTYufY6kAb4SQtVg4wt31phscbH2",
  "key2": "5253EAX3kLxiqWsfgU5UttLUqcQnPv4ySsJV96iM2C5Jc8umc8bWQmrWJJdPuoLeisu5J21MJTU7aQRDZxcujVi5",
  "key3": "vGFy7tSu751TddbEzcTvNJa51oqFa5p4jqZN3UFUdDhkeA6KkdDA2HASgSLkFZ3cDSkSsVmVSaQ9HrcmhuE38Uy",
  "key4": "4JP5y6iAbeosh5CA7sEq1rbRTJRdss8UjcxhSFTr4vcHTKZFFJpJuXYYpPz6wS1pgX8ni3cEHNf9K3k6XzXRyBka",
  "key5": "4t1eWCAEo788P4NxqPvxNvTQt9B6559KVkF8vzJrccxQFDiM4CwC5FD6dtEVuBLc1qrAivJtLtWCdfUXRSFuEifZ",
  "key6": "26MUBHCukgg3RJH5NupqduHRw5vSra8Nb6iDeAQexKMo1xgawL8phz6uqCR79RdXPuTahyvggikg7VN9VncGZU4k",
  "key7": "epoNmChTTHNob647eFN7LsbnnGYdJq6jr8JddsvK7u6Fwsg4XJY3quDgfdP1dmhsNvP3DmYCcJYHWN9TPJyoY7r",
  "key8": "VeAJzdzurxWBJe4sGeZBPBAMnFr3kkKUAcNCFpZC4XbiuZ7dFCrjnftWvBzkBELSU8LKxkpExJB9yDyJ1wweAwd",
  "key9": "44f2amWg89h5e1t5psRSQZkSeHf8DU7pHC1PBq1KvPTh66Lz3puiNt5dWD2AjADfKSRgtWBTRzTKhucv4FL5PBEG",
  "key10": "xrBR4ax9sAhjs79P66Ees4BmPyk89cbS7Tc8EFkq5arBUWFZxbnM7SVFvNtt7u9bR5C71M48fXKx6Knmydrk6iX",
  "key11": "ng5zk1anJnjT3JhfDjrwfsL8Ep4QbvSd9785j5c1wGexKKsYsfZTb9kz2QX7f3tB1GPQxaKRgxecZzNznHnJSpC",
  "key12": "2FpU4MuK6q87ybbGMcEmrepJ4B5GEn7KBLq5YBv4rSurrQ7zxLJouZ1Ua9jT2B63thPnVCV9YTEqFi3GE7vsJskn",
  "key13": "2mr1TQ56rJPBGpcbN61BC65qqmhHL5Yt3wz4UQ4cEjWVxgoCG5256C8rgXbtS9fQZh4fCtSpY3KnqPwiQecWhaLh",
  "key14": "4k2YqKtUrBLaq2UEDNQYLzY93MWphvoBU157stffeB8XULox3M1wXDQSKW9m8H7Q3cqZdcJSf6e3kDXW8FmergrC",
  "key15": "3AhWYgmbeNBD1N8s3YJJEW7BkeeZxxYSuQkogP7SfwQWYzMr9Ccic8hm6hYnbTvfR3oYj6JmJfP8TNnRPdFMESGB",
  "key16": "3Jer8kHVmKGW3j4dMXpknasDCUeeLXNsSqrMbDPGmZUqcAwRTtL6dxg27eupNWSJJNweTfdc3LmeLeYgvgqzhPEc",
  "key17": "2gHgM1UtPLqF6hWABymkjNrByGwhSW3B3sMMu8KRbToieJeuicgts4p8TqxGd6NApHvkmkxfWABgokEdN13XtL4Z",
  "key18": "4a31iHNURfJ5qpzXhHi5NzSk239kuP6LiwioBY8K5B8jDJ2AqX4Px8SijJanfTVbNh4jkdKtEdsoyUGR3oPMQsno",
  "key19": "3UJjnzSHkwmNzbEboDWjAaRocsKQyDs8nEaFnjGMGhyHWewHLrEMU7Km1oi2AUTnCaNqB7q69zC4SZdXartVZb2j",
  "key20": "58XN2T69Er9mradbEQvP9BbrqFjjqDHmvi7Wtq6Ka6UJPw2QAU3h6WShXNe7nK3D9riXFzpX5uWX7PikbYqDZy3a",
  "key21": "5a2Z1RBDnXSPYQ88Zcinvn7JSqEfnVySNGV8pZVT4RsUXZcirXXMGCdjPMLAAkXRTCdgRxzwJQ4SwLzztm183BbS",
  "key22": "2ihNZei4aD87VesFcgUdmmA14srro6WLJv4G39u8dphKdaV4Ksix2ZiCPWNFrrVff2VbuaRCdz3sSLCj3wMF93F8",
  "key23": "rJETgVyMRdbkF7UQxEWCz6SwxFyjeBY65H4n7vHsP6yQb8KsE274j1zDtzuQFHvBE7LcMxFFfwGa1KPN3Vo4KKx",
  "key24": "3eWUyeJ3vJdWoW3fW6SoKGVe8xwWa8QXYTGCg8DxSVXTDD6M9kYtzgUdy196guSLauQT4h71hdNxjVMjuPGQ2WiD",
  "key25": "o7VZPzPTHF1Jgf9TnGsw998rXTzwhrGSmWSQV1LpYzCN1gagNnxpuKXRn3TQZ8FFotmBgptxfxpbE78A7b5MTyh",
  "key26": "3XDaqaZGGHREZy73mBnE5a7H3jN2XFKFUS9bn4bfJZKexydMFQ4g9woH39nbHvLbnPwJjHbKGNC2PVCjJRxHsgki",
  "key27": "2AiP9jKFMp64ctxJSRZTiCfeBAXRPBHMdDx34ppbY4apzdQBmyfCMpF6jCkuE7bpxAMKhfqUZZTpi6Jft9bBaVM9",
  "key28": "42SiSm8Lb8iRoEHeZ8KLknRnvguKh79bnm6ki2RuvaNUZo6ibFJ2rDbFV4PBceYf7P9FQCmrP5J1fFkrSmUBvUyV",
  "key29": "2gGZvtnXMVhuj6ifQvTsC1SdbreP4CCcY6MYgKNgjWbvbuTB4fuDxt4YEReoBnCDA19HCSbrQQHbNnjwm4fJbqfb",
  "key30": "2v83ZE2NVHxanGhMAkbvLLRuaMQ8w9i5fEuDmDX973NtS56UpuBVmEi8uQMmuRsjQ8wU8aEgKQuKL3oxDG3cmVLq",
  "key31": "4dim6g6mstz3j1HFcCPckdbBfr8yUz4DtwmRsvgbCp5XiLugjq6cMKNqpGeJANpGgydg1JB43gNR4KrLPNeD4pQA",
  "key32": "4emwMkavKYXEZxec7dmZnqQeHgBnWU8Ny3zgZuhg5ZurEkWsUYHj6ceB6An9cHRYUdHftekcHPCxBxQgJSqGMd4U",
  "key33": "emyJnqyrqqRiNpVcZBiQUneDe1gJveh4e1UTnwLBv4sv5k4TujmiWaUVfWSDuWwyKu4FF5kPnZFA4xABGTusi48",
  "key34": "538yaEcMoqR6yuw8umoeuXZojLfmXGUBzYuTwT7TKTqRDeyDG6L3SyDC311m3s5To2kNyRCAZETeB5d5ZQW4UoMp",
  "key35": "4hiEHFYQ4SJMTQwnb2CqntAMVXc1RGdggChoENaNv342Pk9wZVy4Ezx6nB8aUKugTVebZBqcTHmFzsJkLdZB9D1q",
  "key36": "3xNfKBWxM3gWscvMKzo6NkK5tE1z4rVagKKQX4AQ6cBt3zosENZT2YHA2GWvbbeN2MgYSmx65pN7pZJNE3rpbm8J",
  "key37": "2AmrjGrhuiqRUwyWzfj5uAEf7Jys8n9k6yTNAwDp8464AJETHw7c3nCZCQrAeb48WXgnPF96rzhSEicvZQEruPAi",
  "key38": "2x8wYZMZu3xXDGPc1m3KCmtzG81iPhRRaFbsWJJYoX2YNCnT22zaVG4D8uz83AmhVwcL3Srr9kV3X6Jhej4VbLk6",
  "key39": "4yWgQPMWqDde7hDrcaDTzVjTvK4LmaXFvhytTSaGgU3ZSdkTzKAz95S2C1GTiSrqPZnZShHiBbZAT2m6Vnny4uj",
  "key40": "2EVy3fRpPsx3tzGzVDDj3uBPgxsBPut9QoN9uvjWiHjxG6p1ZHr4xuS7s8S4ZKsmNhuYdDTB4uMez9uKebG74CEg",
  "key41": "5TrCqpftyw4LFHQg4sTheSdUTo69Xgc9X9NEocbvP5j1LiU582e2r1HDQpXE6QgR5GjFPBDj4ennY13pviP8BQDx",
  "key42": "ps5cb74Zq3t6AyYe2xSJwsgkt8k7Zg6N15hQEJESd7hp9fLv8Rfgr8Nyi6UuDjWc6RTfQisqG3oi4DThzNAy7pS",
  "key43": "24vixJg54cDbyTKYzoUmK6CaNweGdMfxkxBoiNUSg3ftZRpVqyEEmn6ZegU2oZhNU4h53utnTQkyM7Dh9SEFQsMy",
  "key44": "5LKRoE43cyhTRtufbochWg7vCnRHQjFaVER836rtAVg1J5zdmztVTcZm8hAseHjbYTHRyvBzeraJCbNAi7qipDYw",
  "key45": "45BoeafPpw6uk4rTd6XQyDS42UVyDfWFfKdkrohy8FFg1c42Qdt1L2tD5Yk8YFx1j1GdYr4BSmpqCKDXLXFu59Gy",
  "key46": "2rq7uGVq8V9ZTWrJLSkSj8frUGAGJGy5VDQ42o11LZJxWKxcVw6rwmtbFe49NC9sbc2TfcTLH8iYgrTCBVaPZXfz",
  "key47": "4LGuATKT5DgyJut3iho5bC3ntPpqMoNuWrdKkpzSsHJbqQbdLSQk1aC7wzYV2go9wNm3N6FTF1DkiHpQK3tNGcq9",
  "key48": "4VEvQBjz5k3LeVYoCLuZcVKw5qsFVJGMx1TfMYx8jfZZvuYaxXpuj92za2kAHViB8fiSLkxCKPqBGjX2PHv7nV8L",
  "key49": "3LGS52YeG2vcuxQsNz5AAJuwr6pW5EVvwUaKzMPnin4bad558AiyXPBqMC1MyMUTGTLnRNTnkUHvLXTh2yNpDuNk"
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
