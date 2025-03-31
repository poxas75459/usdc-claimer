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
    "44YHvA91kTrtkyBqnoaddWChJiZCYvWB48fjTL1egaVqMN8JiyVLoUSFdbD3gqhm9pcTdMhYB98u1z8bGXMNaRA8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M4W51JdkTsnccavfTdNkdrceaHdQT5FxW3miKaoqoZJvfinDA56JzW8T4SNGMGaZWUPWmwmNYxpbpprdkt1Z1gH",
  "key1": "47robM5RVkRDn2Y9NettYfD5gwnzVcKfcshtXU72fc2Gam12B9TQCkggWPtb7GVaWCQradJEqnrgzpwqPJXezKqW",
  "key2": "2BwJD4iA44ubVfxBzvYbx5h5qQkWRj6U4kcEGz6MZqZTBaWf9zD3py8LMB9VdZemwhnJaJhUqByXbp4StJEp8nRV",
  "key3": "5wkkMqzABi8N7pM59DzGEGF5r9a59FaZpHbJEwwAreEAd7KNE6fWE75YS7h13gzxyhxt2r9r9wqqgPS66Dbatq9f",
  "key4": "4VPBNFYTxGjpK8gmkNEeXApAyWYqBqaiSXtsi5vrqX9M3CQcPTk32X5vzjoedvJDDwmiB5JW4VSpvoonaCcig6PQ",
  "key5": "2hiMj8oqR8iRyTtecnf48ixqpK8pP1KSdR1rjbjydWNYD1H6Ydk82AnGMHf8H62tWE2ziMsoKmf35kpDmKezLgwq",
  "key6": "3teTWyjXemKTkGoTeYZiYrUivMffaN9Y4CoNjscv3KXU5eh19AhiK8xSSu7qf4arZhKdXbfmETeqbKGHyAh9uX9C",
  "key7": "2PL4onU3ByHRdPrXSZNu8wLE4qjCBsMUeo19SasSZpSimbwrZUVmF3WVqnFjYn1T8yzc7DhgUB6KA2qXZ9j4zqqY",
  "key8": "5BfuXRgV5QZZ4vzr696guKGMZjteFTYoG1u2z7pgZB6ret4hB5jYrsZUjkUd4voqSjumJPoo6jFY4spB7fq458vG",
  "key9": "62pPzQbXwaVVefHD6pGYfrKjhSnQVKKWsqyt8tbDdDdjy1KdqeqGfQ44LRmRKicFbxNmrR2rfDY39UJHPrZfstrL",
  "key10": "5QTCPLG4RSjv16gDrWFyscDiJnJHQTdyXNEBaCX7nZsYRpL263XAKRtVQravaX8QB1oAukRQPHCV1hLPLKcg4ECy",
  "key11": "5RoCfTRz86enppfcUynnD8HMmpeLbjv6xkdbc4hhLqjKPj6jctPXqfceD4bPxYUFNFXEv8GdZ2eqMgAwd2dCopXM",
  "key12": "2gFYn1Njj29Q5bFfUL8dugchmDjcs7DdCnFZMihpHZTgbAgG2xeKa5GuBdfg5F2WyT6NxqdyqnhdyqjKEanKtYYd",
  "key13": "4HqrsrZi5pNsavyDaQYHf61o2RbEY4ZrHweitKqgYXeVq6TTXBK6s4LFz8fsHUSL9hUUD5hRZgvsCnnXdswgAUBM",
  "key14": "6S9zkQnrZvaw9tFqFAKaohzo7BKVnzWKBVo4g8ETrTcL5gNU4q6dgy2Ubd7UtQ8XHDC7ti8pLagfhNTXXo98a2U",
  "key15": "2k1ofkVrK6bXTFBC2GWnJqVknLufKkZ94TLZNXYjydJ7FQADmzQGceJKeTsHo3tv64UhY8ZqYjJRfDhBHoni62ba",
  "key16": "4Wo3gQGS7ifeKhRvbjETM2hKQ7EzDJUuRN8mDZE1So9Zd5YDK4kQ7yW6XL47VXUMETPvkv6JpHmqH1JjMKZvGfjM",
  "key17": "5nGfYYdBZ7ni2UXNM5XRDoroXAf2eR4QeMZmcjutVY1UuwJEfDFykH1wDY7se1jF3RzFyzdMqGxaAiKAWPH2jF6E",
  "key18": "4rxzmF3dphDyAvPzJy8UENuMGRbrZSfopFSamjKQdY8W8t4jPzYXm4kMhqDW4rHpAzMztX8iFR381PNkku8pG2fy",
  "key19": "3dQVFge9sr5PZskMELgxeLqr4mxruKpkJ99A299c9t2ULh9AnKz4Lz11PwKHwPq8VbBTnFcRcv1Gny6jjWjYKmxE",
  "key20": "256kBg2p9tJp8WY4PBPbr6JTWpQh7AdHiPUa7V3z6cGYhXkJWyUzeCaJV4MJEaRrRRbGGPMEukaUbZMRy9eztXjG",
  "key21": "N8VsNehw67FfjGghRPMiEbKwLXhThi8ZNNwEurNDz4N2vVWBWERPosnZCfVoEWx1Wpq52DbNZTJ12pJatnG9GaY",
  "key22": "SHY1aq7mRsLZzMgwxwL3mPFmh32kXVfbFVWTo5y5yc3Y216rkRbNKcEKaS7ovhsAL7DFSeynh1T6RgVK8LX1ed2",
  "key23": "5e65WG3mwKHuKvhWSycckm5jh6GzueHDAHZBc3nMyAH9oqPRDY6q6bsuFjwmc9S3UQqLCVpW8Q3daHym1jenHmYp",
  "key24": "5g2abFJUeokLL4SF7nEkuY6XQ7yDmWSWDfKP28yFRrY9Jc3Ses3aXcnPU67hmzvsgB4HgTYg9eprzB4FM9AwpKHG",
  "key25": "bdcyynZsKLSnBGAsE4LaxtThChsiX9bVJh3aV5zgx5BWPU21WmW99XgSqHwgnAEfE6JbfTcZu5p67cM7qzb4NJs",
  "key26": "sfS4GtqZRHP8i3bNofpJVw7kcAfTWM8sRxuyvMb1QuNsHE1XNsKe1AkSzcktSse92xpsd1fRpykZnro57wmrebi",
  "key27": "2o8Z5tcwSxfVScst6o8qNWrkr1w9EUGHztsdafqDcUhCAi58Y48173GA1TtE47nxjQqMsXicRbeVCCZ4WwZJdLKf",
  "key28": "4xwohy6kAXEEvLMu4R9n5TSpER8Wzzc4LjARd65hfhVmbQ3UuFwQAg5ZLgc4MzYRfaK9Vpk3m6dhbwE2T1vJyxjt",
  "key29": "4K1D84rbsq77XPJNez3gHN3PVMLLqiHsT5o86243HAxUSXPbjYcwn9aZ1gXviC8ZYdz7yNinUcCA2g4iqfExUYvz",
  "key30": "5uLnkqKX7zox3RfLT2wTy9eiapqRJk43nzfWBu3nQfvojY9rA8GW9JwWWYvMQzq2nceVN3MQ1qMZk8tHxzXk1kSL",
  "key31": "4xEJEj496NmNHicLs9Nt9mTcC3nrnRceyHwngxWGCWjiQivCJLxgeKC9WUZJerTfwkrTt3Bh5TecXMuxEYNfhAQo",
  "key32": "y4JJax5qBv12rpX3kFY9rAmJMhRM7dg5UnqacfCN9LmHvtS8Nh55JJKv5Q2nuPjnW18kpGDSUBf4GNC6YNtiQrp",
  "key33": "3nthWmrcKWtLM3DojNsbpPkmLSg9gsMG2bbRpsWJBEiqyrZmVnJn3dAZVa6gZshcprCXL1ktKvLfqPmnSN6Y66E8",
  "key34": "2Rv31yCkTyqWiixp8Fgz4Ghgq4Gpzw9VurnpiQ5zXSfjwgB2oaN7QsnKJ8SH7Gc48H1VRrSqwH3vWCP6hMc1hMv1"
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
