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
    "31p8uryjCtWMsN3Fe7NHyfjYt171GnK9yvHEaZqEjwBQveJ28HUXonc5sEEEpuzV1GYvKqrGA3QPGLH5imQPyfqQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uerCjFHGv6DA7TojMpZJeE5ovBzD1Hx4vekoYWtGKrC1L44tTdJHCD4r7Ji2QiFGVxwgYJ5PMHjoSwxTjhvdKeF",
  "key1": "4yvrPi3BC64JPC1pFCuZqej3hYQb6wYeCLyJ6Mw97iKyve2sLeCM8Mjb2NDbHY5i3iqkuC5a9G3EUBPHTDFoRAE3",
  "key2": "3PFrDK62u2XywMLp2eqJx8KqwQap7JRfdijq4NXhAhMx5smzjcohut8WHkqWbbWDHHGdyPhM5W71WpR3Y2CEvVv7",
  "key3": "65TSF1SQXzkAwgBfxXuUHEzmH7uD7m6K6DyqqDfsgrDse5CN5DSEvRGFvcFfBxH9sEhd1w7xaxfor5NKHN55AAhZ",
  "key4": "3bgccmjLkrEkfJscmTtJuEjcEoErpuZQ3aeUBp6Ai7H68uey1XFaE3BKmUhpz4cewHg1F2zkw1ru91Gkf4nMEnY4",
  "key5": "4STxTf2jpVHNzwjKz921egJKRU79kCKRde5e68tr6T8xXCknfpKTFBcdS9vKQig3qCHSGnmXYWiYqxQcPFxsoNCc",
  "key6": "61giCj5FGXFqUg82vTqtt7NvXqy1UrApTPAcAVUjj3j8jfgvzJm3gfz9HA91oCW9GjmbxefckZUaaAcde1SJBYps",
  "key7": "65mSaCa8uzNKmDhz97S7uAor5rYYY1KvDnoNpSVYCtJGFXMyr6iRfdeULzZrDxxU6MZaCqzm8zmQboZcsig4drWp",
  "key8": "E9DSuB7qvginznjwnsCK2Yy8TjpByyZbA1xtnNpzAzp6Wsqpmiw5N5VWQ7ekdBN28NFZTM1E7UrpfVmPEeHeMTH",
  "key9": "fymg47oieNJ6Hgm9eERVMKkXcUV9ok3JKJegfqQvQtWmU1XXzTn5ucS5DsTXhxvdPvysiH6oU5mtw5DQNtzX7nr",
  "key10": "PBAtuG7nJTwQmpSHkq9s97xrmde6jN25AfoDwWPDJAGhmcHgXzNqNyLeYr5fqeXAdWZn9xhUwu2SLhVRq6V7KUX",
  "key11": "2cd7j2XESVqgE7g3VYEnePGZWqPPEge6X4xTvCLXbbSfBVAwV3GhBpATk4WbDHXw8r6ucSt6VJ9kcTS9V9a3Q6DP",
  "key12": "2SZE6VcwP5yVAR1sDMkJtCpUP5bn192tFY8FiBHsMxdcP93HwqKZUeucFtCr28KqxfRfidaULmqt7uF4jbw4G2US",
  "key13": "3pUi8c7RXRqHRJZ2TYfBjq4mEuNHPe6mfcGHaH6rz7tVP9vbpgskYAejXtAdqQevBuD1MYJ9W6Q64khfcdmTzFGT",
  "key14": "4bf4oirSCGcdGBYt8RFFznr5qL1oXpeTkAd4ttytuPVFQ2tZwohLByZmjSGcJ6Rysdw2ssbZXSWkPrGGbU5qvCqF",
  "key15": "4CjSPx8YRoX3mAQ9yNY4TyvnD1vbNXWU2G2RRYke6czfZZPBTij7b9Npr61AdVR94P63gnrpT8y5f4VVwFh9oU19",
  "key16": "5nBbP3yBLdZkn3PnkEp7geQ8ayFe4mbDHu9FPri7pyUjwjwyxm65dvhdTeaVSpcMUoGN5UHz5UNhUWtYoxydpzyv",
  "key17": "5CRkM5LY4WZfAtRJPLR5RbfcqCiYihRgpVxeF5SvwAGqHFw8S3h9dNNUcnGqRbTGc3oJEezHe3hVdvav9Q1YNRYi",
  "key18": "21Ls5AQre2y7rPaEqUspHGe6mx2JmPeG3W7NuU4Sq65nuE1n4KF3nRY5F5U4ezWYxWtWaSjaFC8rWQNuzoR9Cajw",
  "key19": "5E1LhjQMNMdE8Bcn3fsvTskA2z9VbLn2ZxBwc8uXPhVq8hptRAETRmFNCnSfgFrbAo4Gtxv9Hu4tq4yUoogz7MYi",
  "key20": "ehtcCvvqr6rX4V92wbZtogsps5wYGLH3kD4GBszjd3rJjPTQNwh9SmGZZ6BhQzx5sBsok8K6spDng9wvWBPp7Tq",
  "key21": "2htTVELcbduuHaT25my199RZPhHZzrGgGSpo26AdKP5uV8KP8iJnhqgWpvb3YwAsMBsWefSuYs8oYUUYadK4hnEF",
  "key22": "3BUXTTXi1fwVpQupSfcbY8YAoojK14jngzmzKn9ofSa1hFmSEAg9rUYefiKcYuUwaSeQzSuGuC1hKZtvhypgnG8x",
  "key23": "4Ld6qvutLQxKHub6jV24bCsidiu1x5YE8pVvfbLyHxx9djDnVciGP7BuVo3RrBmqbjHSvvzaS93Hsk1WcBZHbdUR",
  "key24": "3JcAgEpTmhoJK14xYyepzGMcUtd22ioPKbXpXHTKNvdhBChiVjBR3u2ep65Hm1EQjTK4otDGttocAfVpAkfa5jZb",
  "key25": "4n9SbWokZMQiYaQUnZpa9cureu8JKVdNJNEAXJTdfGC4Y8aGDibCr37WYZNM7MAdCoPkVPPUAqu1TLLjXMhgXwCZ",
  "key26": "63Di9j7XYfYLK7W1hWVNgeSVBVtzdKutSwGMsd8wxmtqgr1iZiFfiA9XiBqLARcpV4Cb9cgwcMHapgPnVsNpqbpk",
  "key27": "2SEsBkdd9ioTvDUiXSX7TXjatjCHJcTskYWg7g829QcBL2U8ZfLH9ny9q7XGhGm7SJnE4k1cfQC72SEfmzUMfz7W",
  "key28": "4a7FRhzWAVbV3ZCMUNzWbNCYxiKHe9b8H9vW6bRi26rkroLXpm9oWfecaYXZsKg4D3T61RtaMAvJE9RxzQnJCkJk",
  "key29": "5Z1A3cjpv2UeNNuhYH9CYPzbQuToJCrM3tnbUSg3tYwo4kkKFonjBQkV1QdnU18nYQSyJUjBSywswUQ1SfnLsEYD",
  "key30": "ykaMjwZan8o9zfuYCLi7mR8Xrvq5fEWrnztogH16HpwGGHJjtRT9JtaMtUECf889MjxntUhhqXK6LKfVGybGK2z",
  "key31": "2csXf8XEgGjU9Ko65UjxSEoL4BLbAuEzfeHonXQeWom37bD3qxhFUy3y1Vc6xJCU95NoqWSK3Jj3ApDRxXFRyam4",
  "key32": "5xWZGRBnFqkxFhK9nVfQ7Ytsv5SHD8xABCF967ifpkVRsKhPqbxqvXvZYbVHdoiMxwFpFZtTK6XQxN6doWyQkcT1",
  "key33": "39ViYiaMyno6JtXpaA9hrxV4DJnKfzEETBfEgZLTDLsUep1NaC2qSqg5BdL5VoCyCaLAgfRZ9fjZ9KCbJmqF2aFD",
  "key34": "J1jbysnziaZxHr37ZnFjbcpjcq7RFPZmjVHe4iuiy7KEujztbVrW88qpVhJkkzTDisWAgHiE2CMHnLpxpaFBwVj",
  "key35": "5coyoTX7AxkiMCRke9oLHkoaKCpLpRp71tfGYs62Lm98SJDT6q9sedt57ZPcFDCYSiB2E5ztt2v6x6eiGSnG7i6n",
  "key36": "4dkQnhBBVRH2G9v22pkV4Awn5wYV44bNjksNRMgvaKhgWzHR3ecNBkikaXuyZsPzai2pJ9Rbbbd3eHgXjhiz5Z3o",
  "key37": "VbQbLabm5mnBS1Ae7HNkxE7hScSXFqkGCWaBVpEUnfqtTx3nEmqB6MSQ1rmpfJkEtXBtLkkigbQoWnNGKZ381wm",
  "key38": "zevYZxYrRinuRnEW3uNPkabBwEHWNeCcJ6imZLiUaPnjUX6b3MjRyzQ2Q5so9NLyyVvTjspoS1LYTx1txjjF54r",
  "key39": "35RywSwdmbH4pRkNrSFowqGjbfjgdHfzSyC1oLeqYAVhHqUfuBNBRdkzqgSj3tKjRDHx75fAj47RLsnB6WfogRWv",
  "key40": "3hvHNUspTpAwbT2mjwzQFtKWi4aiADs9sGHwv33upRpwPUg6j88rUbEiEhkLjreFPYfRaVDX15WJ5AC3VhEFYrQB",
  "key41": "zA63VxKNxskj9Bobm7X9ZMxMPgbhV1nDqVnscQjSxsGxmBkG3YFwjvruqQrkHDbMesx7LU5pLRbQkL2DGyWq4xK",
  "key42": "2bjNtH4fi3bgf3G3qwAto2gRaNaDjqKfiXfrRkW89dgK8RHZVtfy86LkGWkYM4oVPextkWRYfcWdsziojjj13eWN",
  "key43": "d5UGRUHE3i3ExnPN2z3LTePjKkc8AEDeHUCk6NS4jYEFTUbjWWJ7k9LfCqBbBnK2cUnEUcftuyegJiWuDozXsHk",
  "key44": "5BdUQGwqWHpv7TF2DreFARzcLYJ26x4zmWaeCuXhrJ1hSMYz4ktUyGLmWdxiycLgM7J7NK7zPF8eVmTUV3P7Avo6",
  "key45": "2toDvEBVsHkLeh7514T1NasrvFs8TZ8sTDEnLQkdkoX2nfefNoKfZBFJz2jweEQiCLB8isJvR41DLq91xyTrJVyQ",
  "key46": "2dT41zUnSnWJj6b6ci8yfShuFcg2N5jwu7Qxz71e84BEHKj4gYnvDXr7M2PxoDgjkgoN4xB6MVN5A9XRZAxbgZB7",
  "key47": "5Yu3hFtWhzquNNXLRguu2LQJxyQq4QUYjbRj41cvVZskREaaBtzvToWEPpZnG3AuwhJGMNaUSx9Az8QA17ew8tiV"
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
