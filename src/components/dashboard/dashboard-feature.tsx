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
    "4uPGW3WdpeWf67W1MjDFaTTTxTYcLNtEhinjATTvCkkmB2w9UqLEJCAvD9LmnCrKnRV1krSwopFhtGX6CZwYYs7S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jgWo225ByxuBMVKRRq67CrmKk8BKhUUxoinNJxzyiQTQVxgvWMrpe5SwTiwMT3LRqM5gKBnAJ1s9uHmNK2mqvpy",
  "key1": "4DG9UDVmNSmfjaq3u8DDEFkRARHydqDb33ULhm9mch1FniC2z8DXR14TBijGDjnNugDndWhKcTVEYb8wFzXrtSGJ",
  "key2": "3kiY2tRJKxr75JxfiB7s4wQG89WThTs2DEA3hwzvKN7FssNd1HpFEEZKhzdzRxoH31bK3XsmkWwD8vjabTvBxLxk",
  "key3": "5otcwnVgLajSLAah1n3MMJLtNG3iPcMJovuHM78ZU5jTCAQgo8u6HEJjwiSPmDNZTrksvQc8o8k44tLiSQofxMEb",
  "key4": "uCrN8L8xhhvVJF2EJVokcSkjExgiihYfsefjvMzZ9vY3Zoh35Vw2BbnZ9SXvy9C7Qd8xLUNdrsx1VcEswfmxboK",
  "key5": "2E3sdL27fE1xAhG6awXvr3LGv3a8QY27VVyafwYdWUb5xKDq93c5ch5GhBJtsV9utmWCrcf8N5oSvyFfK8yJeFWr",
  "key6": "4aPYjfyhBWjWfxef8cZT5XJVoKk7YkHk4cCcK7C1hnQgJwF1JLcq2dob62kDoqLh6pDNSqPb1WhxRMaKfYspwafV",
  "key7": "2MY7uZL3PVhCv5KPZPvWpGgTFein7WEfwkVsQBua7w2CciRJnb8QHLsjBHQMRsAciN6t8YX34xAaRh45mNrD5QT9",
  "key8": "25ec73WDQGz4qWoPMASuPVfNc6nyTFvKeGBiXN4yy1eHNz5xMwgXXBA2qZrqQKwfw6rrtEhYpUxReCAqUwPqcSpz",
  "key9": "4AN6qm8mvXXioUG5wiooKAQ1wxoefGsSjUffkgH1WjqmfgUcpTxGmBuCkNgtoJ1QnqxoCt3oKWM1ZnsB2foXqtmo",
  "key10": "4FNjYNUrMzVoR1BfRoRn59KkjVE5L2FpsWrQxVNYPp8TFNDEaWoozpTeWRZ8Bc9hMPPK6my8bCJuPiYuitqrcLp5",
  "key11": "p3zCLuNgxwkPPmFStG3qNdEWXQqibyrxvMoQXfxFAqJfXem3phZkBWMYAnfvj9q7uBhEtyd97EmNbU83VkrcDKc",
  "key12": "4kFrypHhSwqJGYYZdVC16cmaQTtdqSP57ioC5Z5KJ7tvcRdwNR3sv8GEQY2oNMr6kakRs1qgWnPz6DtYCPSD7ob8",
  "key13": "4Svy6h33NUH46AyoWsuMALLoHiJKD6sCzLcQ6X7eYqRi5Np7D4xQQiEJQBi68Yjh3fvKXs3LaPyYjeJP9Az6LeHe",
  "key14": "FQRu44XEuWVCj2rrSQXMkNFNn5y4UWv9nkNMBdv8UHGaSNGLxmC3p61iXK5HDzjR9crSa6hKaVdj6TwoX2yzgCa",
  "key15": "41Vey1xsN7dPppJkKmXGcW9SHnJ2GjxnYNHyimAsh5NHy89hGS6s9hDKJt7DuaVw9zxa7FHQYVV5z6XButHPSrA4",
  "key16": "4KYr68mvWpdK1xiRA1PBvZAvcWgpTVguo1m3atJm4B1pvRYcomHABW4QtCxmJbuvniATgtALMrtq92njM7sGBFcL",
  "key17": "566UsWgYSC9XAy9SKeG3jwkvM7djeAAn54tjoem1SCbSQebpdzwDt518YFzn48CuE2JZqJxDWSL3z5sqei42EjKu",
  "key18": "2JfJNWChkv7KET1GzodAehPQt8qcfz2A6nAgSJU2dxjtFic17FxAHBLPWoA2nXawYXnV1hMJNChRjdq1aEGncJrZ",
  "key19": "5yx3Nc5Gdr3p2gBJYGHM99gyatDz34emzLGEt4CeDk1RqhUCoEyRcQgRuvWmDSqeLTWqqAshuqzLwUo3zaRgafsg",
  "key20": "CQspDektdE4G7izEWKP5vScga3aSV1tiFPvA17r38n7rEcZ2GLSboyNE1zm3uNNqParMHmZvrZPMexh4R8SMPZa",
  "key21": "5MAH6ajr27Xp2fzbixNc2G5fTkLJnPedRghn1FtUj2P4SZBGzNTpYvG7ZzYU9kftwXo55BDpqXfPqBHx2eaq1Yh9",
  "key22": "37JkqRuK8psBDL331m2vvZ4p7eVSC31Q5AC5vQU33c4oxTbW2vhUAoTvzLGa8TeeRNjnxwGX4B5ctPJ7ddqG9wnZ",
  "key23": "2xE1dFuet3KFAN3Mi9cAmumC77qRjt9stEZQwegcBfHYRQJ9s4wh4gbppU6he33ZcCVCPb8UFBoEJF3igkZYLE2J",
  "key24": "4tMNbmRnNtosSWzcha12d8jYv8XjXXWoUbDBtFVJvEpTv4nsuQwFrt2ji7KVYKXVpdahsVd19DhQxBWctA4HcEpD",
  "key25": "3fYfXo4ZQ13vjPW88XCa7MzrJTbCu8tS9F7ETK3BZPQfB9Px4NkpuscXvZwytkD2K7XAEFCdiauhskF6p2z2ChU9",
  "key26": "2e1Yn43REHoLGUaRhhd6pkUzfZk7P3U4auQakwThfbWMmpqDhJxQ8p4jCDnkwFmhmUzazQGA1YsEc6rX93WFbe4f",
  "key27": "2n9C6kWM6ubJMM51r4LRVmhxbsMod8FasQn4mLHdeQwerDhD2EzyFVgiZs849tBVF7AWPLiP1QfpNnQbjVx8zj8i"
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
