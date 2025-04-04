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
    "2mHP4HhdQB68AhsGtGXV3ayYsNh3T1EdsUp19YNqsNp8ciPnyj3fDqijm8oBWUr75A2nTADRKPhVMasfmma1hkKH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1Y6AYktEDpzHY8U9U5YJFumJWKZxNMsSiRVyBsWGETsJtFDxRrzkSdVGjyodVZsoqVT2SpgJT4omGEHmF44xdLJ",
  "key1": "5B3rLFUquxRJrTvPJdUuuwokdsg6Tme11dihJVhwbhs2wx2V5RYSjLD4kscn6W3J2Pg61qTPG6hnCH9GXXjEW6ym",
  "key2": "2jd5v7EUUGjPBk9rtKPtCeeVe9vRWYggFa2MbEa379G6889SrUgQLNYUJW46ZqBvSCTazniKuQg5VV3ieHEAxduL",
  "key3": "2fsshYmg5YMcmwr3kQsyJMkw2H8U6ZrZWjg9WvYijAJWCSha7EDpwsJqemDevV7wo6GWHssBV8ne8MHT37dSiuDP",
  "key4": "cUAvfVnSktX1F3QnRqYb7rxGPMuGiSsUYV8PdsFGWofqHMAn5dhX5jLVU7oHRorqybsiwYbZjWqd6dvZyayacNc",
  "key5": "5kooExnNRGoUv8p5Ppez6WwL1fV9YdDeULwE4P8q567fio8oFXkLX7BFQQQsSB9m4K56VAGRbA6xrjwrquBo5AhW",
  "key6": "iNr61x5LSNwZyf7KqhnK3vtZhxwPWHkdrQW5HsHL64cLSyXejckzGkEhqwRrNQUXfDFZCyaRCeLMJojks5usKVN",
  "key7": "31p9wocgbGrvx7mybvw21BkTzFBHdpVjWuyGQQn2qGnx2USQo8kMA6KjskqzAqbAZEKCTRcKMHfNsuPoybMb8ng3",
  "key8": "2Ur75zgQ5WiYnCQ9t4sJ35UBK5zrxohfMr5xx3Kx7H5JkQjCJJU3ZNbTNtQv1yvup3mjew6wpULs5diSxaJiQja3",
  "key9": "5cTbby6D3WB6LwpiGZDQqZoNF9vsxY8PwFN4YAAfgzwFEzhEpuUhVZ1Bbmzat6kCL7fVbMvjzueBhmxKfE6QamEg",
  "key10": "5Di6ruJq6kcY15mcupvo8AyzvwxyV8kXYWCwvh5skq1WSbr4UWwQ9aGVkT1Jhucq7nUFAYkGqRAtB4DnCUcC6Pfk",
  "key11": "2TD8r8Kj8mEy21s9S6RAqkYfdZieAQacvcUcNkikE5WJLP2ts29s3GmtZaQHLuaazxFWSxQK4DmMjfVUPGRfcMEd",
  "key12": "576sry55m7u3rQPCQGW9BtwF4QEkuoj9oUkt7Yn1VxeuBf6io6wswFjgega2xcK5qUE6SA33MMtFkTSRTt8PQApa",
  "key13": "539tAxYNbHahiAhwEVFVzrwNMD1ynCUHkhnheSn7E45yNk6q1Y8vzi3JKyqpbVjRUPyFbs8V7P5ebbBcPrWaPxso",
  "key14": "5GfCUEcKErw7kPB1o27cD4rP9tAdFX2c5KBAa1WeqyJG2cRBwk1ba4ER2Ckdi57U6mJp5xxUNgxTpLww91BWgmNY",
  "key15": "4yurWNVBqeb6CTne9Jq2oMoctoj54cMXBQEwrvDZRnCAjSMKWBvxmwbPNtRUX42WCrpXDWEz9vVP8RQNr97PWFUr",
  "key16": "4PrFwX6pfdnqeLvPNu9Uz3fxXsfsZUn8bmDjC8HXa955AE9dQXD5hnJreZmuxVaQpXGKjLFSWJgGKABKuZ5MXLJb",
  "key17": "5hczr6PhxMHUU4ePT93sn3LTV9gYDALmytrv7NwWS5dJQKpvWGTc7SGtMQNv1yLQtM13JGunVkUHdSGGEznHGPwK",
  "key18": "2RLkvMbQWnS8Zwxrk9x5PwwL8QRhLZ2xGtjmCj7327FE49t9dEwRijd4PsLVK6AB4TtFGH4YGBqBAaohh7eHWR4D",
  "key19": "3ykSBMgV3acJmVsozy1AKUqa8iUnvpUW31Yvv68xHrNECYHQDL49wnSCG2qXCmgcsNAGKYFqFTJ2EtVW3z9K6a82",
  "key20": "5XuZyEHN2drXJqSLpis6ZoWvJJ6EiBx7KtiyV16AmDo4rSvtxm1ouFcFCketc1t64GPcLbX87JkYpxNL2wBvAtQV",
  "key21": "yLa1xEikyEtoUeBSzsuPcWWveBnDr5ACSQfyi6JxdPmoSHHTesHrRxnbCfrq8rkHTNa4uyHRQDGkhERNXsntEog",
  "key22": "VcvH1HkPyZwEg8Xq6waVofbb32ha6Y8bpushGE7mxz873YTeCGPo6kcZd6Ta72r6sTmy5hUmEneP498Qw1GPK57",
  "key23": "5xjKuM4x7p6diaQ9jL2zKT6uUcvpdkSJCqWiM5fdvxeqMQVtQssJExiZgFrkU17K1WRFtgrZ9adaymTDQ31HMija",
  "key24": "4d6rJT6yWkUBKCgmrBT2EQ84sMSxAJSMuqibCszd3ahBe7nUnECy9mxLYYFcivDFzs2Jiakvw4CfMFhq4rCWALVc",
  "key25": "43kTK6cxJKB5J2yB5Scnhz1wpgWocZXNGAsftv4puJKHZKcaJhEwZipnvUP45W9MMMvHv7AdqSRV5XchXpfxN6Dk",
  "key26": "2bcB32JFU3A9GJDThkLH4h9WcaHNugKJ2Wacf8h8mAMCDqcRsBqbbchdYySS2U4LZ6T15DCJinqZfEVgEj7wt34u",
  "key27": "2BcP7D6qYv289XA4UVaWyzitsEncBgRK6EHjqXqNCfSEEDBUZKJKagAydABmUTx4vTMNCornbHerAP4hKfMnnvCa",
  "key28": "4Tq9aA7MmLqughJQy7jVKBHXD7RC4z7dzpqw116JEPstnJUeU6iJFYyBk7CWS9gSx9zYYwRGW5rmtkStd2ZAfGNw",
  "key29": "5eDs8hwXykbZNgGCo3pYXLnKQ5XWo4NjurbBAaPeyZfSPwfzNfWRcaFgN3E7hSvBFT4ZysEsTLBBbhuvKmcHdYD7",
  "key30": "4yZhgRvgmX1mjrAjZJ8QW6jaCcGdcnjqnxBafJTEG9QWZB8opUVSbCEpX3WGTpr3f8rGtQCK6YHJkd3xFVGrEifT",
  "key31": "Au4jKf8hLTrvwN35VXXLgY9vdKFQdjTfXDwhtopUJvpisuGxvL5evwPS4kX9SNS2j7kLUqJABwQv8oqBK9xEqAf",
  "key32": "2BUowL3Y6Xb7DfnVDHYEd8siq5M8ZfyAxNKS2LkbPdRh2zLZ5cpTMzfF9iY5hJZjwfnfR785L9HJdDz2ArRJBEug",
  "key33": "2esrFTDnfajZQSmH8dTidAPHyHchHAAwmYhijmMg7UmVNBAYwokdMkR9cnqoyjRDzB1HzvcuhHedDFqBFm1MVPYQ",
  "key34": "BsSmh5rk6Lt7Ecxh7hnArsb3cRqgGTnKYEnFLMTUUpfoWa3KVnuarq7JjKs8rvQTiaTF7uaCxN7vG5QF77gB4n9",
  "key35": "61FUe6whFxNJ1EwqWkJVuDw53woYE5oWRuGQUYczZKcBkugWYpdVwfx59k9x2K6vuhPvkrdeQLbVfjRsMFRtD7vW",
  "key36": "Xbqz1Z6UNigwMTfiGDw6RfZorGw1toVrCrXCqwRE1xb7Vy4Xe5miNRDnkAKjdBKJvnA1CE4gCRzu3yr6WX7A1Ep",
  "key37": "gDUtcnhLKAY3FGoyL9B7QuNG4Kxqoj9LSK9kVrNNYunSPpaoR5kAFrvUSCfKmh1gG3xTes4mhVvu5p1eBRXUkWe",
  "key38": "5F16NVzhjMYmsGAG2jVPXNaF8Ks5qBvAHtJVugG2xoGrsa7ZS2JxjLsAQohdwqenJPgFSR2TMgNmQqXkwNTL2688",
  "key39": "EfkwiUTqz9htEw3gMbWJtWwX7FkZXfAGUTmWCVMogj7R2kEMaWra4AVvVM1FuT1W7BsrWJemgMsiiwfLsy6sSvf",
  "key40": "3UomLnWTjQvNPp98ecpXGv6rP3FXgT1ZjDm5X5HcmqSPQbUhm3JaRTe6Pqy5e13sXWeoQVJ6UCa2W1MGBPrqF9Vo"
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
