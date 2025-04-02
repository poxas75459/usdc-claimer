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
    "47B5dxWFVyKMLCuUozHBSPEUesYftAqtgKnR1bEE8ykJU8iQxiGfzqag9xKygUwRMtSsKutyiTEsp4yteqDP3PtL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42oHhX9vr4atfXhwFbj9tbPL89PeAnB68k8eTMXsuQUbjYzz37Uw65DBvggeJpTi9kpjDqqCtutMbYkidGYDy1nv",
  "key1": "4dVRRxzvo54x2VQh7dH4JiabBmE2PYM5FCrraA5LaHAi95eFhYCx8YzfSSJULWrcL1t7QS1pYwCUjspdw8D5Yp8b",
  "key2": "4aGNCNVGL8GDKMXPuqTYX2ddYGzg3RohuoWPov7xjMcfSpQMTxPLmXLJDvs2PUrc6194nRfZoxbLrudgVtUg9k7t",
  "key3": "5PwEbp5Q5tLrdSWyMyuindZkYhLyE3AewVy9MZC2eBR5V8ESMvXgB5ifYXMLsENJGWqojKr1HFubpwY6Q4aKPaEe",
  "key4": "4qNTtFQYGhAML5mKQQeyDuTxEwiVQNEdW4YxZWtXrET6N4y829pDuvYMBUdwXVkjaUYkCq3b9vCHSfyw6rmEBFKg",
  "key5": "4NpQJnWPQCqJMHQJSG6pXfCxYjvD2qKvjttiG2YU4d9dL6ZfySeXpW5H2sCsvixe7AsMPL7nwgpaKPJxEpjDxh6U",
  "key6": "4fKpGRn7EW8oF1yo6QkTYVf7rGbXfwaJ8ff4x58wBYHT7C9KwsuN9xDKv9NDMXXjRX99kmuADGinSQ26o7ydaV4u",
  "key7": "411jPYnTPj813unRcdBD4D7f3Lf56qxZswB4eKXUhFc3udfe4fGLMqatsTWv7UsFuUp7tgTiQ9ohEVcw9u6nXqvu",
  "key8": "5CenqxRciEb4oBLBh8AakvEdeFQEVpUbLH7SpyUBWSNdjkb7qhkTYYbVcdQ3iR6DY7oE1CfFRbkyunipdG7X7Fq7",
  "key9": "2Jo3qn2KFyrSUwmmfbg2ry4v3fMqnEEJ98ohHk6dGqNHU1RJuVaTtD53bLc63cHAvBAVez3jCUhSReS75gBaY2Jq",
  "key10": "2TvS1pNpYXax5wCd4v6TP8pStepViHUWQjZBZw1cZ7oXhon2mU9jqC62YDK59GXVBZ6ki1FPxuQs6xhNTH28sSHG",
  "key11": "3eYikBGfcHctryETh3foXuZK7k6BdsqXE6XbVyj5J96hux28FKGQ5Fp4EgmcXQEF4F2HueN4j7nonLXpMxEfQxTv",
  "key12": "4eg5GBQEByyXTrNjCD8n2ipS1xvDj4aZYUMmyDZg5AEvwWBrW2LV2sw4cEBEfsghXyAsfC6a5BpjkaGfo9MJEu9M",
  "key13": "3mvSbhRtCm5XDqZKhhuthU3KwjZAd1s9SpL3JHjfqEgFE3gpHpdNnAUx3j7dyrySS464VHxW83y5ufgDm496fDcW",
  "key14": "5U78CPSeC8zyYrQY9jpQgBQfRUHv5Z1Nib7Eh6TH5hioBBMWmo8q5ueCSZfMo3GoyfYiQhYoVW6koRdoEZuAYQHQ",
  "key15": "5u7sKtxUCg65DvHUKzd6zoqqExeQqsjwop72fyMAG7VDJpFuhCR7ZCunr8t2EiTYGhLUZbEB4J977gRZtyHNfbcz",
  "key16": "36C6MtT61ECnczuBnNkYuMcd7eQr9AxQWE2XTRgGCXa3GhFW9tBmq7gCkpuCva8uBZNeBUHKGEvCqHAPm4K3yeU9",
  "key17": "4YNYGpxeTKZmpSkAivAUfKe7CaYCgwhQ1quqYf3Mi1Lor3Zy1rdfW3eDAHoe5wfcq4K4fyXcWUjUKLbN988kUNQN",
  "key18": "3izjT7mLiR6muCMnRchNDSUzB5eeBrAPEiTeH85LwceTTDZi9UFAmZEAdUVLRZKFQCRwCveupMkuUtfEnLCvdy7v",
  "key19": "2EDHBMX8k2t2GsNQXQqvh9DDUniJHEUgsyyRkUAZCuYq8RgtMF8NLp7UxBtSpRfwwagzWB4qhotSV4BUrzpzWCZU",
  "key20": "3HiVmY5fnE5FLcynEihfd7jKANFpSb1sfX3P7eQdKV4mLHgQLeVncGTsST3rDPUd7ceSvmj8kTRLsNeEPjR5wzrZ",
  "key21": "4r12XG89oPG3DjYK7mJhb9ogpADdiof6iVcpAYToh3NHCXAyNjDSfrYuTR1k3tpS269wAiVEHtzgJiUC8J8npzdk",
  "key22": "28nqq9ZJFvfsBYCdX9EvnmDx2RXWv9z192SSihFKsCPapW5vHoh9f9MoFNcSn33ztjDie4xuLPjcqcobwVDPMyew",
  "key23": "4qAfKS9kHVF9fPHEHAPkrDnBiAsWD3FiYTWFxVytdCk3wFJggNqRk5naDqsUiWeqALi1bwj7mndJNSkr21cAJcZH",
  "key24": "4dCVt1FZ1Zp79SP6xzfVbrhN3gshkRPjTWLKPHXhkSnQ6K64UGf9LwxBnrchS4KezsXPwn2YZCBWaLWEefZtS6dY",
  "key25": "4Ya1YTnmMxx15SCZPc1KUBhSzysWibfME61CDQNUb9Yh64WTckjRHaP81So58UQ8eWLr9HD6csyswKJEAFLa1LUf",
  "key26": "56YixzpUYvYMMuqEjPWq7c1ZWNxLHnYvnrPnAAWvTYvW94igRcJvwJZsqHG1c1YwJepyavCjhbpoKrHYcpMSJgNy",
  "key27": "4KdzimxWA9wwvbbmNsv48Zk8cv46B6GrwXQiZbQWbhQg37omKKaeVYoC4qQ4aZHgKba4vb5cpy1EA7JPKuVy39Db",
  "key28": "2JiXTrhU3naqJbDGJJG76DHZicz76ynNy1G4PvQeoxanYwCejMhQes662zDaWNNJN1vk6ZMUksFbdLjG2SQ6eMu5",
  "key29": "62gUrtvWCr5XLC4c6MMLvCTV8k14wY6QeKA1dLeWZbLetTvAq4yfedsxwj5taoQuuGxjmpMB6N9aDniTgHLXzbpQ",
  "key30": "4rP2LsWUtCkZpUarT9wsEdCFsF6daj8hTPVJrLiK7pSW6xbJwrqr2j4pUFt8eTJ3DJHfes18TSjbydEZBbFdv1iL",
  "key31": "3bjimye996jvu5r6C6s5a8FbWpcnLJ1WuJ8VBSM5vWkdxBQf1JtZ7AQptveahNvmHJfEN3wG1VieFxRK9rP4ELYH",
  "key32": "rzZsmd6NgpJgRQW4EkapqGvojMTM9D8tpySBSX1Bh8s5jHU3gAncvE59fjAxNnez4FJVosZnNHKtadqvpP7pkoZ",
  "key33": "2d5EKnmExfN6HirddXcAbHyKmy8SSyQNMLMhY4J6p6YqewSo9adafgyzqb4sdLxZUhhPaH6LVFsVczEKyxDKhYMt",
  "key34": "5PDQum3HoeWGH8ijGJkuuAE9926m8m64pmBAm16hAUhuJgbB4iZYFtGvxmxPRpVyMTuMKLkG1gHJBBLa1s4DPzkS",
  "key35": "3Utg2PDLtTcg49Q9wcXbW5mtA5GjdsVhfy7sUfqLHcuWXsH51viJKpovGYBTUXkYTL9Qby8byJf7rLa4WDyok4eS",
  "key36": "2P8GrT84UhQpAJx6S9aZ6RNYq2RMx1CHHK8xzjTqh4bc5S6SynfR8JUKMd8uDp7k32em5cu2QejmmUvAqRBXm83X",
  "key37": "2oFHqjcTESbVscsUEug89aZ7n8cmPRvJs5gbVMt9BPri9aou8gM27GdX3p6QCK9Xwa5K9Tfmb8BJNq4GX2Uiq72D",
  "key38": "3qai5HBNsqk5wgoCXZ9gHpr7XwZVu6g1F8kzBFyFZtcJBTd7QbDmRR8EDnZxqc4csG1ajhS2PhiZ36fFM1aQ3HMx"
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
