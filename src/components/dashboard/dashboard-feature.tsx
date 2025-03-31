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
    "cavA2SXSvWfRjhgSxoT46L9XdKM6L5tjECLrMPDR6UsPLUhTqUtAe2updpLuqzc5VpzoLqs8K5uQMS1hPbwkoCP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iN5mrjaSvof9XBZ9NfF3jgcjQkPDyaoNQmFvjQTWuhNpbriQfJWtL4iJuvMBcNWbabJyTBHZ8cFMsUb2VAXBEhL",
  "key1": "gN2krT7hnrT22uHLMTxnpRahFW7nUYsvbiDrruFEuQKtj2YercXskwkrWqDGdf7x44vP56NmW6PH7SGatRkyZbU",
  "key2": "2dHveDeYTeGwfNdruoujXeJ5Qo8a9iSPUwLCWa62YCjNMJJTbeJdZD4VQ5rujr7JDzYkDh13r2k42voPzTyq1uvs",
  "key3": "4yhWiRoqjTSpKvFwPqWymAxUWE9s3a3mAM17jed7EVyVVPF4L5Yj5LPbXGVAf7MDXJMygwXNXGwwoZK2F73mY4ea",
  "key4": "tiYK4AyNowUi6KanadcG148xAq3jRaJkS4N9qAgzY6hVqviSEXvM5VedBeGaMcUBU7fAdTiesXVymzcHGbZY11b",
  "key5": "3eEEAaA5waMH1o6atuAmpqSNdy4GPprNDM14Z2p3QCK8kSnEb4FM4Jm1ztTzQ8rbr8anoaSh1QveR7jk51NgpQYt",
  "key6": "62Uw6po6VA7yi8gS8733oWuL8uHv4bJzCANHk4AxHhczAPnJeR64my3jp1W8qRYkTqHcMs5FJLdXvAzEHVK6zDT8",
  "key7": "51RBCmNngi7Ztq5Re2nzLqafuynqSUyBhrrVf2A7z5AE9q7opuLZ2rC9QQ9pcnrKTptusnq2doYfi4qSFJ9tMEw5",
  "key8": "4BCaYkxgXjcDZUZRGms1ZziKYfoX8cs8nys9jFYD6zeo2hqw9TBpEzZyBKLrwF487SdDJihhVrqcT8okEmu7yAxd",
  "key9": "2Gt5NBXGusf6m1FuSEyqxNeQM424GKj2hz6Cdbm2Hw2v9BdqYgjELXRLHbenrG1WwuJTMGxjeZPsEU8JmCrJCHsS",
  "key10": "5aPaSKq1U9FMv3pfkbd116ajNAqFNckTrGW3ihsstBZV7nSX8zFqTkAwWAnBoEVzLATcZWeX9YDWrwAYf2d8tnuQ",
  "key11": "4Dpb6pbLKtvRkzrofiVvCeddBToqvyNcN47FAKcwzSo7fzBSebDSRJzuCpJYM9bnUdX46JXXzjH34q3mJLfajt4o",
  "key12": "4xUYHXsUFHFjVyp3tw7CR4xMVLnaeuXahCFPbFzPfKMet2FpABD6RfufsnWoy9MqVbVZV4VouLKE1V9c6nhTYnvs",
  "key13": "2tVmHucTk5UF22qFnbHcw5rM8uSUAnSXM6FHRTnGwNqxZBicq2kiMdJE33V7h4VawUqyMjEkoc42ypcgc7KDT8Xs",
  "key14": "WRs6c7QLgBMFbuJhxjhvVhv38Zs1WBbFqP91EPD2PfNbdbGVu2wMJpLPzR74wK25NTkE6NkrYsFdzAemVBqfL5x",
  "key15": "2UiscxSof3QM8hL1B5cjnD5FSTSZQ7nuhbrmecHCUTsFtfkn1aPc8sSZsMtyBskzBQAGYQkrCPrLQhwbppeMpU9U",
  "key16": "4N75KjA6FG4HbkUrN5qUXN9217DQrK2uF7dFmQB3TFskGgAxp6QeyBhsp5tb5ofFM6gJyvFJEnVYYShoN1TQhQrH",
  "key17": "skk5QKL7yrqDXdV395zfVrXPeqc38RnA3jbHDPAbza8WVZ6PF4G6AMy38hGMRxEQhiue1WsJeMRY2dmhSuRuZ36",
  "key18": "5P6eagXkd2kb1Mx1qk53NjkFjbJSq8u27e27eUmY8TkZSKAGRjAtQqzgB6wc792a49s3XNUuXYXftKEVnFiJ4uKV",
  "key19": "3zgNRnJx1Py5RtMoU7U8Vzvkhgv6xCMvh39S513Rbi4XfjHs4eCW16X6D986mbLHUBVbhCcTrjGYh5Yjk4dPGCPh",
  "key20": "5GfGrgr56qLWxo8CyqnnGKAKKg1Dfuq4D3XwHCLkfsqhd4sWFEW8uH9gM6nDnuqiYzwvSiPrxr2KCLYnpgrsex4D",
  "key21": "3FhPWmBusp1kVaFavcdn8KNRpmEL673iMZVyCU5XpHwiD9tMJEXNo1v3asyGZR1JSZxxkVzSAdCZNfUzpkvcwpvv",
  "key22": "29bUh8aHarkJXXqi7ZwQJGpYctCTcfzCREXadJ7cr41D8qmu4RoAXZgpLQXrtZN4A3QYpj9uScBooRxno8XmSLgp",
  "key23": "5c2PGGJgPvcKNCgz8VCbRngpDtg4Skddc7PcArJCRrUFEecNJKzX5R7YjNXckduSUnuJsGWAAW9fSrjq9fLgfeNL",
  "key24": "4C1N38seUSFR27CzGwSY6oVrhtZh7JmsTXBEvSNNZWdLgRhv5nFPEj5KrM7aqxzEjomwKDsNvPGUtheNfHU5RkMy",
  "key25": "otCv8AXpM1ZSr13ACTCTN1zKW6Zrmyc65d2nzmnfot3ULnWHcEa3S52LEwbq4USc3SqPyVeoqoz74RQDRU8RcvA",
  "key26": "3oG26qHuBc7vrangZ1aWKtWf3xEK8faBXWWJZ5JT3Kun9XP5gXfCKFSCMGs7EMFtP7JraQgyJNUBBqCtTxntzD7M",
  "key27": "AKk6x2NDHPt9F5ZyUXJfX1Yo3K63DauwXvHoxLytxKwst74iYQ8mrK51G7d1eA7nHFhGxYm1n8esDFVYnRjM6vn",
  "key28": "2xSouSptLSuUsV9tsuvhpfrtLgad4L7bej7ox8ZXkh6SgcFuWWM5XLoUbjGmYE3GoeBdisHvVtLKSGQNsb46wV4E",
  "key29": "3oQ31AaaPeEzCDhyB1JarnaV2UX1YHgURmyvEmFvEy5bLYfXkC9ZZ5TNGbUNMiF8b4nav2BghxGy7Nvyqek5fexD",
  "key30": "5dY9L6TYBUmdSZQWXDnouW39CDhHNrAq4BRxCoGErQSJuSFhcQGAUGV5cfSJySgULNWEzsfsMdukPaH9CYXp5HgV",
  "key31": "5X8UcdBcnEPAvmuWaiFjyKK1334dopHCuhDx5WHWj3kjhbhJWqYcqHftevu4nbxtGjmJndauecUVe5QrhyboDjvh",
  "key32": "38pXyneenw5oDD75SC7P9K231A3yyNEUQ9Wkm2RYJqimuzcc6ExK49Z9CLEzMUPL7sde6jTpEuSzG8K71hTUBBb6",
  "key33": "2oYwJQa9Mq1zb1P224C8zyG9RaqEMzcsgpeEfbmhH7fRzPyP13LDkoojfR9E4zWYv9VVnFr5Est81cUtz1fzUyxe",
  "key34": "5oarGagxWqEiMXu1ufKrBq1FakrUY6JWW4LbU9vQ9vFzxKJkJGfFdaeXqnPP75xM9BGpVfWSQkEAivbqvXD84n3z",
  "key35": "2TSNyiQeaYeSi7MXVyHzd7ZQBNq77DzhqF5GnYG3HMYSAskVLkJEu8CKnY6Zhx1hTGAqQsQ5PBd2XkKLjiiufwhP",
  "key36": "36fVm5TADBbuox4ox4mrPwZ3AHe2JSXqCCzBXUUhNjb33QAT9pXC1xWLWVhcAkYe88HXZyEphnHGH342ucuuiqm3",
  "key37": "4hCMpGV3dRqVyqudYeroXm269ivyDkPBAxC3nkMzkeDC75GhWtnMVAH33Uh1spe41rE4kxKjZ1J43jf51PZq353i",
  "key38": "5ThTrN7anr8RBVrvK6LnMSMe7r7ysyLhiLCZcrTNoGiFh3QaHX9rk9P87nHA9Hq9LFaKzruiZBrkmk3FPzeA8N2P",
  "key39": "2YJSJqYig9UKt9Ai98Gr925qAnS6oJ46Be63QxphWti3s8jxi4Q1MbnRx7q71Z68nBddH6nBpdqPWFeuSyNxCqpv",
  "key40": "3frpHq6JDkE8NE9WSxbNFhyoS3kwR2WvrVP7zfwQMRNme1ZhAnXqMGk5vHgCUaubUNNdUYzpHdMTropykQthhL7i",
  "key41": "4nUy6oMDwpWU52W9W92NAGzQvGCh45DzyozV6eQYggSeSggvZyEqnL8ZLB2bFuqXz7CESoreuGPaYypLaAN7M9RL",
  "key42": "otWVer2x3QJfeRqBgHpPVqTscBfAdbzWFJrRtSiN5dBsG3P2Qar52w6QofJ6zu7jrb8wCvLy7quRwwgZYoDB58G",
  "key43": "2awNkPNTfbAX8tF7W4ztmR5DgKUHqtHpcZvGtYUFbbVNVfrjCBikTXUQWMEn1QwJ8Yq1GutXsi7wTuaeVfLDRKhd",
  "key44": "5ZokFLXttQuHowtAN7HkshjnDMjvdwTeAqBpwucmnDJhUtoet1Q22AVrz1qZkCyD25H1MRmfCNSdN5VWHXEWtX24",
  "key45": "5QgVK2EnCCFY8XseKQfd29YknuFyUZoqNy32MEszTTn5SSCNhwrVYj8YV28BKMbT4GzZQdZtxUX3U4iQ3bD9os7M",
  "key46": "5M7G6AgQe5hYMx7iWt3sGmWwDWfsd4uLRSc4ouedjccR4XbzX6FatJA4tHqorXtJszM67rSP6qMXDEqfuV68pw1R"
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
