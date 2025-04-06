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
    "FNTpTMGyojivAQsnQJ5m1myNJcTxQ8WqE75ugvv6RHn6nAkQ9sypeRxAFWAWJDam4S7uXTfhoWYU2m9vAJfGBLG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pZJBH15L5n8WPFFtUyMHA8yJjQYpN2hLDbLRMQCnXuReuXk3Xu39wenGNFgqAaudJA8KWeTkAYTNLnwoTMGJN4B",
  "key1": "4dJygGkdp3Y3nWNfGjJFDq8DgVeUHhMXu9z151CW4konkHtYunqrWu7qsJH5QgiDvczwzz24hDzyJ7xnjFRyq3ax",
  "key2": "51jPB65vep6ULqzt2sqK2kQxTSCuu2FZynbAo4S2uLARMmdVpZFaAe9nSkRDxQjZqQHSvynJovquEiVAs2wUbUZf",
  "key3": "2WcDQB8TYc8PNxeXSima1qyD9CTJUXSQEuirFxR43UvyRnNfQSooCgmrU3yzXZozfGFv3u7a6Mru9zrP2AwefMnx",
  "key4": "WDPKsdjifdbc9vNoPu29vicL5huERGm2zjdVnSKkpDkgnQpDXPp277Fxb8ABsR7r3TDAvNesMqaNvz6svnGD5zM",
  "key5": "cQ9U8jwd7CpVGkxrhJpuCuKD91P8GvRvqeKHeho8Tx8seTM26jLju8Kbf7vxWuAvadxqTiSrpwZbW9oC79NzVVu",
  "key6": "5C7LX5bAAW2kA7r4bzf6bizPcQnvpKjF8E69FQb2M2vye2ompqJTZvwDqJLJGV8tCJZqSTRnHBWomt2J8ETPpTPt",
  "key7": "Sqyw7r6LQj4142pu33P1jU6dpDCB43RYbkYLpEE81LWeH8ES2pAumSZsST6GxKyCHZ4sC5ZtrhVsHhR8PSjjfJS",
  "key8": "xkfLjMaHZ541MWyk3oLXvVA3cUXx3VqYtGBnNQmkpaH78q2bVNdxJMbYfRQfVqfun9d2wnmwCwk6MEQ8mCvCnMS",
  "key9": "3NrmxiewcoRM6MyfjXogvsadn89xJuqBEHVjs6ZJBKsoYAyxdgaSykALb3Dbx4dbBVES5h3tVnmxxmricoPbsoDg",
  "key10": "5quthoXB2AwJH2kwxspoJdXYVsAgXRpCCPRRFno17eBoh6NMDyqFbMVprhCPLQjjz4ZHgJFK3Sb55T3ue1noTYfq",
  "key11": "4hyQgMJyr77pB5RLRtDJnwgYu1hJQTVSwy6spkrjiHZryjjxfTbQXNbNSjv1z2tnawxGKTx83dfvq3Cqwh5utDDR",
  "key12": "iNDebFafsSK1MFsDLgYJWrYfR6RXkD43tha1LzUr1ZiyNA5LdR8nTmnzjNxEJZatqVuRzVu3HzDiiZr1aKrBEW6",
  "key13": "3TnZN8PfmJcQS5aNJRe6nz8uQExtjjTXzDYAfFzfxup7aLep8ma9K9BPi4UivLx5ZFC9Vhmkik8hizDZSmhuUatS",
  "key14": "W5c1D19An7cLhXmJrFpvSgRFdBGgNknZs1XG6bYkqemJETPXXqfNZ9PgMifNjXtdoWtoncs8M9chVkgmmgg19LN",
  "key15": "4rkpGJ2jfitUjXbtEo3rpM2FeHE81WJQM555eheZ6PK6ACszTXMaL3B2MPy3hmGuybTDPx18LKceSx9q7xrNNHko",
  "key16": "5iDDbCSoADsLD1Fy2iczT6Kyr3GKQr5xHwydL4g5LT3WgYbqzJNRwvnbQPVqCrAzTfKk7igfAkZ2mkwzoqRe1VmW",
  "key17": "4ZBiouaYWqf13ZmQTPW3zQ1eGcyDfMiym9jDAMNBVRyMJKxCkru7mtLdkwkwcAu9XZFgLMCGrYZAytFbAQGSqLaT",
  "key18": "48JiMbMDAEzKCcjnEVEsHU8hr3FeqWJn4NB9on2SRf81CKsutWDqTPNed8HBrajms7mWDmvnK5zmZoq6SDpYw7pF",
  "key19": "2oXeqpqK5Y84quBW62gEoVCjqAPfqNcjScyJF9iCNGqUDDGYUMZwBLkjotzYgHahPGMN4w1M73jfYCGYGpsETpsL",
  "key20": "4bgk1qshbeJhb4hogymm2JzFm9kUXuvPKoC2hifxW25F6qdCrUp4mLXAnECXWjEHwL8qt5b2FxV8HpHZE7vKjL2i",
  "key21": "4Yba4ujH5Hu8C23w98bBEYG775boJs9eUeZhGFWQ5EiTbmL71m3F5YKBLnMsJjCLEK4uHJcdJRmmQLzFx8ep4dE9",
  "key22": "3pDt9XWJMB853U8Zb4JUiZQpqReA3U5B53GxtwNgn3Kg8fdARd2qcWnaj5eW7t3snrfVY7D5NFYujUzHxSQ9ct8p",
  "key23": "uvM3fgp7Ga7GzdgfhqS7tEbvppX7z5Kdaa43qwJSYVrkg1sjKoSVtG3e9wHVpXm32GPkCcTAjNfpswQsaB8f7Tq",
  "key24": "25aGquK5S8pqQ5hnNhUM3AE6uhWydu6pUCAeYkQrAmiHA6JF2FUdJQ8HcbS7N5hud8G2Ye7BKxz3zcPR4zanrBJF",
  "key25": "2LrNK4kJTJxmSNXTbQFaTyq48ngTLmoceQwdCA9vY2sZCHTJjyoGvCAa3E3U25TcbNSZgQfyRz4DMgjruxEi3f1P",
  "key26": "2aN7PDw4QkXbbapxtjTFeq7eJYPbrquFRGXnbAMUbp3wW4MNiaGYYbh6EvMQSau31gQZVV4cvvnCZz9nDCaVzJDJ",
  "key27": "2qSfY2qxe2wcWAYs5tQja7coD5YxsbRqYddZmEvSw4qYcEoJBCjMuHQvSrV14DLqCVJBupMk14hnfCsv3VZaisTN",
  "key28": "hh5bg7JEevABVNNLjqLk7hhQVK7p5cndUozkcbsNDC8N22tXCn7PYXsDbYMykSc1jv6R4gSdVxdh7zj3z6PoghN",
  "key29": "ATQLtXRA1rq9p1U9U9uXRz2NuBQQG7jvejqaUz2jsnDRhvC4Zp7j1Bv5U41KpPzdXaSxi3kiDXuXGQLwV8KqqUy",
  "key30": "8RZVTtWZx6frUEByteN8My4RLJ7oDF7vzYY3M7cpMYLRhY8kFC1nUdr2d8j6hHMz84mKMT7iGVJgeBQQ1ENJHS5",
  "key31": "3Xqcm9rPH9SCAVnSjmJ3KdyQ9PdhcTA5d5MPbyqB4YYE1ZkRT7Lb83cmKjBCmTbUxMpUYV1dEin2TVXdrsybsPRA",
  "key32": "2e3FZkbiZxxUcBdUZtn36Roq3vxgx7nFFNKVxj4idxBkKz6ZdT3Y7QjpKXGiUQKbxGwyAw6oCGvFx3sz5e748g1R",
  "key33": "5MfiGr6wGzDJETyWzM9xXk4bG7yG7oCpSe5kj48g1QkasEJjPcJPn9qRN8mEd6KVNMr3KjCbJUBK7canQkdjszjb",
  "key34": "2rWzwj8PyJN9T9yANyr8X5fPRU1GYV9LdrQe9osx5qQzS8HdMBvrn3P8CB3RTScHvtJwbhvMQFmESKzw24LSW6La",
  "key35": "5Agq7TUmZ8nchGN4ZxYF69CaaEiXVuU1j4pEEasZoB2Dyd9EzMTi8QrdxF1H74WaCNMDHvtPbQDkx3Dvc9Dosuu3",
  "key36": "5w2bBym47Hht1wDg38csDj6Z2Wt2eT6zBSY4wspxobB7nJoGxtDVEKiV2ntbS9aAiA9gbkvhe7MzDnmcqPKjoqWg",
  "key37": "KAyaCW8F1vv276yfhfMgkHPPmq5Fd1VRbNrs4EsS218ptmxsw5tu55DEoehY1qT2eJskTkvUk7uu5UVWaL77giF",
  "key38": "4eaYPf2MYueaMeqVABUc6gCeiMPKWnHboMspFsfGARezNXzMPqNGFDGvnTmnTGDQ537uxWArGWwfgF9VrysngbSY",
  "key39": "51nYMgf3qWr3nYK29ruJRSxKxdcVMZQvTbZxDEtGN7imND8nFfvCcBqXVChzXFdTvCziHdGDLqhDVKTz5xeM5Ucz",
  "key40": "5T1pC9RqWLHmtXYhmQP8Byod7T18g1jbftnwumtEWDAa7ScwBXThPAaAcrsGjUCMxKERmBrw7yFnvsA8i8ba8Qxu"
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
