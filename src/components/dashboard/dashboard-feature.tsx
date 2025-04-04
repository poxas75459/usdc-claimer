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
    "4yA9nCiLgw54Gv928TVk2FNUuFx4tJvusKV3Jckbo3BJjrGLhweAbrYiA1cz98QssXKA7EpJLPW9BtVE3UuGA8E7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zHPvj8GUFPeAKLgPfnZJpJTrmbd521ejZqSk4e8ZEuiyp6cCws31fKGyF2CbGQVGiFC9CQy1bmGzyhCFWztvFkn",
  "key1": "5ZyH8eHX7m4BPwNN5KHZFLF4yLvLLEJp7dpLGiNqFAkBr7Wc6u9csE3sxTDGSfxJpkfvAP9q1fdc2V4zYa7HMMwq",
  "key2": "5fibquRXSUhS8YCgiMfiHJMvVyNU8gwq1F8zaeSBFQUfZwCRaAwHq3HPDFy899QN4A7kWGvBgFTGbeFGFXQxkKf3",
  "key3": "5UCWPb7YxSe3RZU8YCHQz1rV8W44ohdmxmS4S8bAALkqa36SYnpFt3BTLdwQqCqxnxTqZJYzGSLfpDuXBvDG3Z7z",
  "key4": "5mmiKaTH6PSuQhnbsA2hpNCaiimyVpR5DpJQJNUVQjj1Ft3eTCfHzoEkpid9nJa3qF6D1kNRXUx7ksBeat7t7PXn",
  "key5": "2PVe9SmtF7HCNtoRRmQFeVAQVEUweWLP7CWnHYmH1rFv4qPiJjqNR8R4vRHRQtsJNbVeaiqexJmUpRcDvzq3nCx4",
  "key6": "5ivuroautWnWMAMXbJZ31ssbZuxV2wBoRsiRkUpYKVyVK2Kb7wTA5yYhaCMXLgTAZdnf9Q4T7fWTUHJNoejs6bCY",
  "key7": "4ZLKvExYhYeprJ4BwKNS9m4i5wjv57zhteCQSUNNuasW2anuMAmNnW5afB3cqLjYWqV7nMqLCFGRkytnboFBnYJQ",
  "key8": "5Wz8hQTpumT4WNRV2Np5diVh3SPwgzNe3xkr49Fc73pnYqTsujyVPrR1Jy1GvJfAc3nr4vC7bAvVxopUYbqGpiYe",
  "key9": "53yhvh51J8qSjZiZ5FokZuK8zMe7PU6xidBvZCSy1hD8iYfi9CA9TNdo4ba5WiHBRWvK7kbV4iFs8mYGDt1MRmDb",
  "key10": "491EuL3KpYwPpQpgAYBbxEXVLCaeMav2e4tjfLX5XQDwAfnYJDzWZjEBcdwLtzzxtqEg7QQzgzr9FRUNoUt7mT21",
  "key11": "3Jep5WJArrozoT6yJ3V8poQPM385ZF9b8q2HZyBxBymYE3i9zTNNcZhRRVnJ7ScvSy8vJ9HEsMM975kRYkk4XQDF",
  "key12": "5dBp6nRWb9ch79dDVzgMgbeTmuAsQMiyFKWpXksB8PJTehzdbFCmNQ8JmxP4Lxsv7Q6xmD7nMmXxzhcR4vCbKNUi",
  "key13": "2VYiDfWmBsGaztq8cFFUdLw7hBaxWe6x9KG3n5UpCQe1eYSiEaHPbrRd6wFjoWMpEBzrj2mnsXdNCQ7xzosAe4Cm",
  "key14": "4oNAhaFxwGUy4ehpMBgFCU9hR3Xa5z8ZfarcKJGgTGBKtqsfDCzmETJsFrfGCDUxi7atpcm7gcEymTktDb3uobY2",
  "key15": "4xk1tuSmgjwrxVPXg6ELkojLgF1oLrj8DxherPWenRJ2yj7hxF5WuoqHnYMNWFz7ynd8sZ6CvrhkHbijwbBkCaVD",
  "key16": "5vwsn4uYaU1nivPbaRvoniuTgFjc6J5AqBJLVrkaDR4NZvdiN6zmHNS5uLhUqpGWtjaeozGnUgPsLHrdQWRdaDdq",
  "key17": "4p9N4pmdHcF8BdYS897uWUPfcZ2eymHQxWaMSj6uY1Yh6wutqktPhWDtujAP8pg25f6JrproG3nspKYiZEZU269Q",
  "key18": "4deHA3RF1juoCUhRq4HT4uiqueKx1z4KtiQmZYpJsf5gaxhXvTAeDuPhgvGfzBQyAiuedFQr2iqLL15ruCg6rVc6",
  "key19": "qZdrGcqyd4zBvscWMkjvWhWpGHkj9SMqkqMoVsHenQfMEpV8snaQBtz1yhTBT7L91nTrcjZL4Mfq1gY9fft2VPL",
  "key20": "2WHkAXqoiFpPMXJ1uA97gsddJS33uEGhGyVQcdYjZVeXoubUFXZgZT276YaVXJAJd1k8T2nTxjXMRLWQ1WfbVo1s",
  "key21": "5FvBFqJUKKvH2LT1DyfU5h3cjmRSpkzLZBohuLFW9Sc3VKpbLdsGYKGfLu4RJ34CppNwCjcKgERZnhyHQPeGcgoG",
  "key22": "3rKoLFssJDZdYe2WvXgJjtocy9VT4oSBKvyyx6tCHe9qHKeHcMVg6cUGMbecfCq4Pxiviv96Kk4GxJab4HWJ255Q",
  "key23": "3SKfyAdw5RH9edmGDPCXQNQDiL68cbbt1LsRTU86g4eDZ54FkMW1FiHzmSiJt9N8kX2eD7izNKNUEiEdXpVzF84n",
  "key24": "3Kfag3J8ddhLnbzT2LbHXeNhcj9UxmhjZWWcsojvbtVJ5Nby7pJpBzXhv4kf3JorLQbwHQ9WDktoHLD1gdZ1MRYP",
  "key25": "61WQXn7Jp4gejvb4QbJuyLBQ16q9xVss7cPUVY8gV2fzBqD3xofEH1XqhQ3U9SPMWzt1gDwThaeHyioMT3hx87PF",
  "key26": "RR11fMC9U8Jboffi7KfnbLHvmn82UoebJFzDQ3oJZYoLimeffHMbx7LJGvdptwAxePnNXWSfJwJjxwPzeFsXpHr",
  "key27": "hqjA9znmo7NKFcxrpg8mx6gbfr6BwmZSWVzmjp6z9MjTn4dkCqRgdWcxdezHX8R9N1d6LfcJNMAAfyDcdZkuDsR"
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
