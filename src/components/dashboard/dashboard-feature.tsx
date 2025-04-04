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
    "WkUyHTwFBbbH4qrp9bgHaTS4AmXD8ZhwwdZXGyGfuL2dhbG8Qmd1xLWvfTGtJmgoZS2TapHwu6MavWFRtcKvPLf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TDF7aeoKxnChJuwug7Aj68HPrCEf472fnGSUaPFLGTgdApr5uASBAZJsELZpYViyeP3coE7EhD84zpRjtATHSDK",
  "key1": "rfxnDa6ZChCuY3LsRgyRR9cq3siEzaTMtckgf5TNau9BqxQ5SLWPHtLuhSSyR3QWbRWvUUhubC9QxoHqsZQHgh5",
  "key2": "562zMJkkeDmUpNgHrwuwPo6oro77hF54n9D4fUYTPrzzLD3Ts2yHDpzLvgHenY1jcjULFobgbwroixZikmCjXmeK",
  "key3": "2NJZq9dzM5y4HWBc6QjzbX85RxwqwyCdVM6ZwruZLqSDSi2Qh7wE2C4JEVvxfz3iyQKWiHhkG6DvCqFEH18asNR5",
  "key4": "Rq7ikUsChg9SecNgmiSvAYT34ocBvJeBELGcZ79yemLrbg2SnTLkoN7qsRz3hCGKxZR71LMNDCb7AmhgWbNm4uC",
  "key5": "3ptQKFijWQ97r5QLLmMGj4u19xXBm9n5qtWYE9eatQvm3emgHmtGtbPZjVywpbJHuQxKcRycCp8ws2ZL9xUfWcZZ",
  "key6": "2LzbjDvCAkSgSfPZXS82ivkMnUY412DLs7L8MhHVyawGccHeyn9PyTVw776hriGXkLNy96BfhJxq58PVEpXKcjMn",
  "key7": "4gni9FnthXvCmWzTDgzRTHjY39Ds3eC1NXXgzGV29yLjLhSLm8ggGyRTyxSmiigvDFkThmtcuHpbD4hSvMgMWqA7",
  "key8": "4YQ7EQLk5nZbP3noCJXZyBJMjjqvPEKDyc4sJF51fLofhXn1rPCJy8wQv5pc3MQbCxFoj6jTxwLVWXRtxNBUN4s6",
  "key9": "5BoPJyYUhc4wADf4JGW2xNdxV4v647Hg7fgdNFCgMDxwvv5oreM2ATEhh4UiWzAfCh7LKEEqzDcMMwFfCj9XgS3c",
  "key10": "2VzEa5cooixunpLfUmcu9iUAe5AP7ncoCgSAj8KHcuvSmVurXyE9Wio2FoLzYTsUtvvZmnSNuEqFJ6BqVu2kgAAD",
  "key11": "5YMz2VFVcoJnbNoKAVTyACY5hi3vTbuuW8momSaqJNykZ77ZvVNvg3PTbYy4JRNY6Lu86RLHHmBTdQ6HjQs91dcz",
  "key12": "2jTcx9cRPfVNqScAxidj1cqpBtFieUh9zCKq17XcJx8SMFMHG5VAXJsy3dkaUPrgrx2xanKM9tZHQg8Ekrn8pVLL",
  "key13": "4ZSPmjBDrXmVbb3UJxqXFahj7zGmjt6fh5MrAkRTtGKMDj3yc6LD7DWWjitMT18kMayUxjs77xdNYBwdpwqQyYW6",
  "key14": "3uo2TB8TeHHB545PXQ5ERjXexysfKb8kVKSdJdHArpXfCVBJC6wvZDPLUe7npayYSG6oLncvRH2w1UyHkLrziyFz",
  "key15": "PzKSJB8umTUmdXry9ASGB78UCVAzf7tueYVAXh6Pk7KtEPdfz3qcSz22b4DJhsp8qCiLhpjj1N5bJD4gSjdiN5e",
  "key16": "5FU83kzQGK5aysjmmqhA1nqFrrwigRmL59iw8m563ywePXGbnJZUmYMcobYgbBXksRabrBKv9R1dbNR5YqBGQkQ3",
  "key17": "UbcYJmvE6Nkjm3vA8iXeEbaGP6kgGNHGepLcFr3USZvhw2okTykPpUQs4Bx4kAZdbJVwpKXCYFVCnPbrc9Y2zVz",
  "key18": "1ff2aSPGKidHrZFuaxdEg9ekpp4YkFqL8N9xDCgvDQKuFnyi7YyZuQZKAbu1R6dK6a6eBAWf4HWxP6Qt2FtUykW",
  "key19": "48k2Kn2R5mySyu52WHEdj4PGBeaokQhSW3o9WUvDscCt2RUtRWFbSTCnZEjYtcVstuU9GGeoKNY4xdWDeMWahYDx",
  "key20": "xqnyomniiCZuyPHw17Ne6QgaeKHq3sULz7mJdqz4Mqy9GtZG14bS7u4PCEAwQRnWaETdCfbPUG8sfzeJoprTqJN",
  "key21": "4DMhi3nE5hjiGAfyQTd8ka6Rwv4TsbjpL8pKnH94JhjYr2HrpSSrYggoUBEYWTHzEWUmM4Jbh54hyPaahNhy2PPR",
  "key22": "5pk61UjGhtBHwoLPaf8P9JG3KhdGuZ5fsQfw4W3et726Y54eKUXHs31CnEGZJScYQ8MhiQYWX5NUwCXfi3dJa2qd",
  "key23": "2YNh63yp6eYYRJjKJzErFY4yn12dsbqo6tfhevGcqDoyZDdxx13cSYXx8LRR9JPPF9oKeQQ4W5XXQX2aLSNNdPru",
  "key24": "4cNiPUCAhyNzU6nU7PBF4AsGC53ynVRWCCyTy4WcMKVhdRKEomqUGSb33iaf3bD6snM9zH4j5ompfEmy75Sfp8Ze",
  "key25": "3cA3CFNebyQgYF9biYfLahvqf2AmG5H6PDfJ4b9hrSCyLZywXhp8PJVDAiyNnhdtMje2w6FhCdhxCUkmQfPXCWnU",
  "key26": "4e38pKeSBxktH6wxC7H68mQq2mLth79XojVCvMkyo1SH5N7yQZ3PY8VWiXGvfTqyryGGMtrgchkhBk6eeUhZWAen",
  "key27": "23UMhgpSyb5s9Y5Y1kuwvX3sKT4JLgpjGSzZhPyUy1cUkseURkgpMqNwFUmoz12ncsej1XAvZnie8Dw4q1GaLFXr",
  "key28": "3242n9rLJfvidsBVHpCbKwQcWrUUUWKyycXpfW9yqMyepLW5ZuGYygpj1G7t661pHwgqemKwZHUkEpY1apsqaLuV",
  "key29": "sceonzHbfyhE6fgdsFxKziXoqb6szsySgh8phLaDAeGo1LFrQohtdNRQGdhRDHVvzMHxPewh58eV7q6hZinx11i",
  "key30": "b8o1yNo2Schxweky3J5PwkTW2eUYgnMcz4CMwJtBnPHzaJ4AgTf9RcUZ2Zg8GU8K2Kq3GxwLQssaHgw87dWwKV8",
  "key31": "61ijEv1p8JdV6xBxxdKYqjA3WTz41gmYM7bLzwmBJZi7UnDxrtmKT4QhYhcomtgDm6wUKkdzrCugCStL6AYcjN3t"
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
