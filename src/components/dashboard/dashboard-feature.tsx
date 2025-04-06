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
    "5ZrZxbthwmVH7s4bNKCbGzaWFQJiZj5psNNqbE2ZGZGNd5z5FWAPWVsHNYCR3Eo8HkuKmxKZf5kzv4fRFggN4zM5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hisSSHoQBm4TzeFcncPYbVKtpHaDgDuH4o1kpFDFfKuFGWsUD3LRFZoPqGi38MmwFc7KUAr9gXYfnXKBeFiSnuH",
  "key1": "5pYYV2FccqsVxVaXhGyi1miebQbuTCWp9pznbarf4xcfVmmRhP9w6xQwgu8MTr7FEvjtWuciNCg1HRMg1ZpAUdFM",
  "key2": "5eydVy1oq3xVTTLFmdecQ8ctYUvAxtgWvmu6BgTf5ZbU4isE9KkMV7bJFJfTgimhLuKcNxCXYkp9zsUNqMNGYCgc",
  "key3": "5jYBcQH564PHdsx8qb4Z6hry2zVr2qJhaLJDhpjW9C81ffX4VFj4nz3C1miTDfKGXWLUj9fWSW5dK8ANUFpxwQew",
  "key4": "65dpPMuePaE19V77sedFDcEjQMeuXNN8gagnCq8poTxnamQZ3JLhF5tFiKVMrsRkiYkwmsfNUHvGMT3WrCDXBDQw",
  "key5": "2dsb1qAYLZMkVsWzgvPpP45hjCe1LAUfAsm9Q4VhKx9bkDn88TGh6sZYt4tdbNdxSuNoPjkc4xjhgWHqBN2CRRp",
  "key6": "3Ej3u2ytSKXNJeq9RTf5kHpi43jaUrjNQb3oXhmZBnhEcQyFrFW3daGrai4ZBhG7TRJzRWxQhsCXwiMZWzeNFqJw",
  "key7": "3TZDN84Sq9PPM6eGtZbt1qne4a4gCJaw6n5sppUT4ag775gDpMqUDdJYJ1gCnLRxM7ypsFU36s5J8k52Drp3Vk1n",
  "key8": "4F27DSaSkLhpq3BdnWeX191kCSC2Dj2UheSmx5AqaRLGwHjYsrkSsLbQymmiXijd2Dx4sqshe7CVztYEb6GcWYxx",
  "key9": "4vHEWjkvv7cG1JCoSpEa9EZcSAFJjmoqNgLGDqm4v6hDRCT6vskYi6GV6KYViC83K4LtCXZURkiGx8exHugW6jNS",
  "key10": "kHFicEWrkxEjzF3Q1sGPgGEnN2aUfHMNW2W5DrbsH571nxT4F7gSkCQh4fb4Tw7ySFCZLJqSQGyG2pmCqxiL8bV",
  "key11": "5dYSzCbXta6kP971uhLdEJcgkbYhPVe7HEJZbs5sCvEytzxC61wUyuCum2j4PdvLSM97fbpzpESje2RTKdowQyDf",
  "key12": "5J55K8HL1cp67GkAkUsrWZww5yTT8UNrsut1GHmiN4f4QxYkFr5dHKyC9gXkDyrnLMdGTNwHS9i45XuueRu3YP45",
  "key13": "4hvuej5B4vZsoEprukBexFSbfwmWXzfnB6qAX8rZMsffosGfnCAxFTkA3NNDuDTqDohkfGnvSJoE7hdnrt9BRkcu",
  "key14": "2FCW1E4e6q5KtktneNDnaXb78e2qwWi6TCdLbZT8HHUa5ubyScKmY3saQQfm6h19JAVERfek1Qz8bPanZWMmqPhg",
  "key15": "5XNokGdYaGQdQce19D67L79MEadEc22d4bfZh15mah9GcvJ3GpCBUhDwaBcmXCsHrTV2eCjnFq9oGj8EkhxtycLx",
  "key16": "3EJvZ1LUjs6rkJgCo9kULK4tTPjex25wG9SkXmkSKhFVk2y18ppixXSXFAnw4kTvhdq7F2Rac3iXuWmqsD1g5PyU",
  "key17": "2F7tdquzjRSXsE2UMqNef1z7P9xyTgozJpXU9EjvpHxJSyUEa7uhUi6y6Lx1uurXKs5W6DZGwd1a8oonUo2QqWZP",
  "key18": "jqiWCkeNwoG8L1VHhVaiMqKhKAci7utmqJ4LfQkfKS71TH8ZEGuhsx9VQYhbjs75mcvSb4zMmjH1d6JQ9Yf9UKy",
  "key19": "MJ7wkWSer4m49j5h7fimACc9eifzbWNcuxbsFN8uxVUfA14As5GZqz3A7SP1DyCqfq9jSiG2RFh7tQ61SRfkh7z",
  "key20": "4XkeyGvmin9Q4xen9ypQCEe5s2PBisXk6ini4U6oQvyUSeAQdXStM6sUupCAcDcgdEgJZri8EvRxHjGPfVZmWeA6",
  "key21": "3bnFdS7txptCtPxfgenCigmZGd7LSeTKZG8EqS2JLi3ApM42U8VesAL29EpaTP8ivC7TSR1ZGCxSVsEPwBdV2fG5",
  "key22": "5AxGMyQujAndnYqqr25WY9ktzAPukLcK2sfcb9vYQf6fr5AqFoSk2AcGUHcmvTTAJziTApSjbu49RCrSJJV8MHoM",
  "key23": "65f33gGWVhWzKqFspTGqJ9e4PyRreTqCva5cxjBkJ2w97RXRmLAdApcaAjU8oignnCzjsntxieK4YNesuz3XrdHS",
  "key24": "3dfs8ujTo66UgKLJfB9ev4fVK2THHwvD3UXNHgDQ19YCdinzibzkH1k2LfzoLFA5uUox9bTCTEdt6LnFDvWo9zPr",
  "key25": "2yKnmLhTEs892PRzei8wfnftzWLA6ZKk6Augdge4oZR6ZdEBjPdshjxswUbH82hUonzGW88GaGxd3htzXQ8MxUnz",
  "key26": "4QYSHxdJ6H9ZvahzrQnVVcwz1ewRFeQsyk68DUJiFu5gSvmBhDAfhgK3XQQyqJG7TBrwH1pzCnjEM6dVqB4opN7V",
  "key27": "44QYg5mZnLZBXZp4cPZ9MaCGNjjLqDBzaDrU7gcPrccTZkbNRfNimqv3bv6wAace8VtnnsH3aup9HoU2DysU7kWz",
  "key28": "59qPGKMwS7WfGq3dx5wPNJSQPan6EW2Yx9TXWbysRMWp9N13SjkBPdW1pcJb8RXAMZNhgdw5yjzYTkFwnjD98zrC",
  "key29": "4wKWdHJEupVLTYaAiFZ4miriVVtJ78X5mYHNebgLPrBCa3hxoT4tMVjjJjCzaBnHBndiGpwj4AAuphegydgv4Lqg",
  "key30": "5W16Fpd8ZkzWkxshpGGqE9vzTmeKDLcBPL97M9nekwP8JHqGwVq9nqEDPy14QCtXnNucrDQfgm63cw3hRkjpKGMj",
  "key31": "4vPMapjtDFUNF4pKPUwrmYJeLGqtZURGV9LbLXgPwjWY75Znbhks1Ds84VQ6QjvvPEqzuZcGdigyNnzoVfjBEuhf",
  "key32": "FJyFRM2hCiUnmHgM1YVo8LJ2hbZYbtMnJ5VQmZnLiLGwjmAa7k7J9ftAx4Vp3W3F5t8cfGbdJgMzH9LsGKUGduR",
  "key33": "stgdFEPcTsVuf2wWGHMohximp1U6du3zG9bg4BRUoMaPaq2bXBWw3AFA9ivujZTuognLBvgT4rigQTKiWaqW2mf",
  "key34": "5jYjckzkkogbMRYLXh6BaregEMxz3Wv8EH2QrCYRaSU1Mrb7zLyaMBmxKKQz95UheSQXFAPSYW9CGEGMhcDhyg5G",
  "key35": "37Ye3DG2R4wm29psFQkzBVbG73S82uUQhK2m9atmj1gkcLa7wHu5pKDC6pEg88Ao9xiYbXkWgmy5Juc6g8mvvpjG",
  "key36": "2uqicerdhHKGb4JLJvV1L7oVLz3hSasRvvzzyiK48uAGHtFHhms9aM1yPzLcrVsjh1NDvPRMQWFGjK1uoewo5dFa",
  "key37": "3EytPGPoUy4jgS8hJ5DoXYuqhz8nWFxMXSK2N657wZi753ThArwzPbYKd2rHhpvr6T7TFQ1oUQ5AZS8AmUW6uaDn",
  "key38": "3ExiEwgJqUpvei7bi1eDMH2kPW6ttCwQDaxsZzx1jVzgRThEBexr8XUMkxtTd2MbzbeeCcBayRx7UAQNQ1AtgTY1",
  "key39": "3SpSuZrRSrgFh52v4eVm7R4r4Bdyxp6ZbJAcCNevBMMRq6B7T6Pj85YzskCAq2PcKjydWoLfBBRvSzWNeqrPgBh1",
  "key40": "59j58xDGkk7tYzXLq5yCzggbkbCcVav8tz7wkwP7qWsqGMbDx1atCEj3K8WQGinquupBf4dnyVguSueNuxqnXKvu"
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
