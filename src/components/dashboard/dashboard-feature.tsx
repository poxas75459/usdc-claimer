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
    "4ixZxAyHKRs37wbMoi4eqzygzaSQBaVtc1Y7kV96GGKg5zPzgAik6tLmzh39rJkmJSwHueWrArunFtPSLgyv5rVp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oCFEBZxeUo62tMSm8ULafQ5NWn5eP6fvESD1y62JyVv2AuBFrDgqm5ihJcmHQfkSMvbtXH2WSy7xMQALhknijYr",
  "key1": "4p5YnLSPuzCHxsbagLi5qtUSfvqTq7KN7D1puej1LvxiLEpJkhAiidFC46M9NmtgkjKovGSvKKnaRbrSsbf5ie2C",
  "key2": "3Gw6Z6J7HKAdfJJCGFo6b5jbCtX8dcZz6NdTRVbhwKA48rse5RFd2omFwy3PfU4mNEHURgebVBpScuLi6n5ohApC",
  "key3": "NZAfWCrWRdF222dUi9mYcqpHkvNJ7z9DnY72ykMwwVAqkr9uGNb6K8WSPXhbHen824mb6SLQfsrnyJnReTykbkb",
  "key4": "2MvwcJroz7ViaWmnYooMkYHTWA7RoXGWDS7cabgc4uUDbLKBrjvefMGqPMu54WfvYyvQdggFBTeWBjeEqqYB6Fyr",
  "key5": "5Q7qhviiKBwQNPKEojWUPAgvU3FGUS7vZYfYkUTBqp1RTDqoEGmuuu2X5cwAUbrpWiyVna5F3esz6F7y5i2EVg7n",
  "key6": "2Jkk63KCv2XxoLeyqCm4qTvuGZqcxfqDfrfFFDhSuCQc46QnaMUH7tMgVVkwhxayshAVqmnpBMNUTnnL4mcvMxmo",
  "key7": "5tEdfRux4Zhwn4gefA7gQsguLB46CPXzHxx6y6CxJURCqh1DMwGBsDxcwsSwqh1Lrfkand6gnFzMPvQn87Pjcv3F",
  "key8": "3wxSEvHGwEwRndvjoGWgGz881XxeZY6yDfnH515wskXJA9vBRPr9b33vpmZ4tfz7s8bWL5MHsA7ufcEgtG8tK21t",
  "key9": "4vLKvgGWbcurscV6B85vtdrSRE3FaTQg7eFbHbQvbUNHuX7J8U46JwT6ZUoWAm9aqiVYRCHWhNL5Qokjj9tPN3BB",
  "key10": "5PnpJxYj1vY2Wxue1DnVmdzwETRoeohgx6CqEZ21VUy2MZJupUUfeFuBdV5oiyzh8d3JdxiDkUvbucTsAaqTcQso",
  "key11": "Je9QutBzxumcfKcvQ1GPhGkDAUQMTpwzE5T8zAscx3tRwdb5gPqr5gGfAVe3tQDcfdAPy6tVhFJD9MnN7Z5xB93",
  "key12": "4J1P6dc6rvP8bh7u4SJubFvT5KN9GcpY25CFrDWoG1rw5MRGdCXJynspq6BuQe1rbp9oEho1VScGqeZ5C8DTKG7Z",
  "key13": "2eYeiTunodbVRobjYJ6X6XBhVUVaNycfNJ5r6hzsvNNrgJJtNJi4NgGZfwGAZdRQrbNPjjqjtUW4QN5Uvx7NMPRm",
  "key14": "32LSSYUcHKVP413ob44ophJNZAoTv5sstsL2vMtdLWQdZKeYTpqSQ7GCYQ4ypKZMzhLwJLmzMDhFxLBhA29kkU7Y",
  "key15": "2S9sroViUzFbSRW8i5VY29jxpUVeSgyJGYzEY6ihk3kZEyNsLCCjP5ZVS6gyun9THy1bDj2GYJsQmJzuwsSp1oCc",
  "key16": "jayGHxw56YfkLsV3KT68Hgo5v3HvsUX5fEnnL4YPejberoYAXAapKabZP2SENN63hhQ3E6ij9A2DDrCxMCkuPsp",
  "key17": "2KSJEFcKjWZc2FQxWXGUpoVmXg6bw2gWZVrpmpQYdB9BsLx9Qwkt4jEkamBCLJW8HZtk6vUim4RZ9Y7u4rK2Dyi7",
  "key18": "5qYfcgh8v3dc23Leu6L1LcXzCkUiZwAa91i2gsDvLKbruw61arTzaNgPfKTA3SuhcZogXpPfbkoco9KtJ55ZttsC",
  "key19": "E9VYosqB4JcJi34T81YXKnKD1qpiEiMZp9vy75Hw381xPys4e8Ew5R7t5Y6fBwFxyq5QdWNcJs7UXhpzS49633A",
  "key20": "4NLkC5SnpUDNnWep2sB79qYxMZPmeknkYmCvhH6QQm2vYogeGdKuJZuKwqDtXYTyzTeZ1jJtSmqEDf4mWvxAk6qv",
  "key21": "4iQq5vGFymS9Qfr6W1shgXR2QdSTd4DPvxizDckcKQUNz2HZJDMJcDZRcRVVWSMFLUgf131qNrNDENSpwjf1Mrwt",
  "key22": "318B8EthRvB8rXEteyjkETbTH3ELqNYx9fLX3Uyhs7AnKFyq9rAT5JC52byGjxzJG5vsFpkpaYqewHV2LQQ2yxkP",
  "key23": "2CNBonsU6Mii3P2LbfMqpAwyrZ3CwKBidmsgobBedvXeNH9f8zL3j1GKhrgcFHm5FNQo6qNdi9GxTtzJZq1BsGG1",
  "key24": "cE7QxqWBXSfiJWW29h89urqS6jzaJhHmXWfmmdtPnYHFFpHJFoK8Yr1MLmmgXgfHe1DsC6Z5NYWroJLYzv8e6X6",
  "key25": "2sRvss85Duc6fWqbQWRoeiFhp1sDqQgSo85hCNwKgmNf3ACYeLsDQ7N2vN5rYwCZDYrHsqdpGJjVj7eM2nkFJXHN",
  "key26": "5YxP9dRv2gZt68Fjbvh2c36kdY7WNfWzwufief4niymfVuwoEyQKnCUfq3yVr4nge8hymbCzwXbF8mbF2QBP6fDN",
  "key27": "4jEiqCpg3ZDieEaEyavmgEZbeP2XnTuLwFkAd1H3QEA4fVnGnzCJwHN6Q3Cee4MMKjyEX3T4p7Ajjw5dzvtAjF14",
  "key28": "5ZBhQSkXxcVYh8KkVGXtxFA98V7WTUVZR5pjzsRFUVL7nn3oVVKzuZk62ps3QnydCBfyTMeuUEyxrmLMyoZM6hKP",
  "key29": "5rFXZD3PCqNRHZ5ccck7riVdZrrLfMwhLTj8Jq6zBy2Hc4T6sz3nyuAai8rtLvazBsWrr26cuLMBSYJxYTjK5Ngv",
  "key30": "2DbcGESaegKGcFqXEYcHJdX3hRuX6egBA23xy8QoCsmEkQY68RZrdh1YSiQPr8RBFZLi1vsaCfZ1dikEaWtg1nJ",
  "key31": "2UFUvdm2haCrUkh1JCr6BhD8h5Tiacyvw5joxBxhCZ8z8LNKtdgZSNSS49WYiRZcXPkN5smTnuUB6hFP2US4ktG",
  "key32": "rT6hZspdRYgt5ZDZqmsB2d7rusMpajegJuJdRiDGxAdo7F29MRyW7AL7bFLNGj3HyigreE4rN2SaYVZkRj9cWf9",
  "key33": "2TLPN7rscNRckwB9qVpw2t513b87HAVZYXSxq4b4xCGSw2zPkjh9mSyuVQAkURtNhdZDGMXxDVzJ4GQmfJyiGkwm"
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
