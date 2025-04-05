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
    "3Bjg9L4tMVPu96cZ61j8KcVuKHNbr4ULYor2NX2ozx64anpJ6Y6vLq6rzjjYuPXD6bzcqAUZYQ4EAchYsDAPhQM8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49G5PinB8WEPeTM2UrV9iB4Z7Ux8NZjki5Rr6yNb7CiN256VnuEsqSXgNcLfrCFDwSLzNW8jxa4DjqGMz8hynKwa",
  "key1": "58qz44gPpknDBmJEPGYvComE6t2mS8JZ3YygEcjM4ZzEo2fGukztf1hskQNRk6pgJGoaXUFbnsW1CkbXmsn14W8f",
  "key2": "55jUokWJLuyU2xHuPYDUKZNKiid8T9UdEdhDajQf9RkeJfWf9GcT6mA3SmEfPfbj46fc3SqeSWvYvs824uzVXJVw",
  "key3": "4k93Y61r7v7hVkTHR2W5ctdHf9qeYwXKhtGeGS6kYH4LGwScWzHmyW7pGmsvaLevSWVbySAatB1qEfWYG2YvHRTd",
  "key4": "49BwkXDvx6TfKMasha85EB6srq12xjKRNcznWpZ9cpucZihTXuTzmDK3WCHePEp8qyCkdR31JFeMCcQZ3QyAmKhq",
  "key5": "4e6zKF4bmX58swQhabfS1nEpMJ8sYmBWnrm8VAXjtDiA1eE91gNrD2g7iAtU162xQLmxdKxDAVkBNJAW3e9o7EQF",
  "key6": "3FdWZMLTuepeeBwNSDsFst9149L3U8eyqaDTZUrJuzrP6uEcdFshrMXNRayoLLvz8HTy8QaprLzAWAMZqKrF6reo",
  "key7": "2DpsMeKh4V2VLuepqcWbKhSmFq8RaLUBZ6gRH9RCD2gcVuuZRgXs6a5dAV2GwHzbVcdSoZTEgx9S6EnP91Fuefz5",
  "key8": "sACGyAug3K4FCCQj1T1pdMfLGrCroBbnBbW4JLHHP8pM7YyK6GVAX9nFn6JUH1wv6JJQF3zbu78SJUeGLdsynZc",
  "key9": "1gBpTnKmzMkgZ4wimcFG3f2zj26BeX2V2hor6LUDpuYRBLKngtZz5gDXWd27WVq4dvgi9wgbLDartkXf8ZM9yUz",
  "key10": "27GXC9MfmWdF6tQ6jbDrYG5EcueYZLcUY9GBpguWrKpAL7jsQ7TH51QXKCq71b6wqGLtW9TDCT5CmZVbqgNiFLag",
  "key11": "2QEhyb9dV8RzqPQbaXTTY1449t9pLis2TAXLUhckr5arWt7AHL7EF67b74nixuDZfUesYjSXMScFaV4GVnHJXhbS",
  "key12": "3B9NCw1pYXBbLYQcqRSrVM4Ua5insWbjaxqx8sQirR6jzaJoDYCdiXBy8XYdPoRLaW93rkahbVdwMQgHB6Rkccnz",
  "key13": "274c3oJfx8NhNhLEbHt6MT4oPRMuuL3Qt3jRvzTf6qJkeERAR6g3ukuXNektxjmEXW1avseBVTQJaUJ91huixW9Q",
  "key14": "5yY7QBusiwWiCpGSb6VKCT164b9dYMu9tANKQXhww3UzqXRjR4Eq5jTbCqofoxkLJbRtQZ1VseVsxiAb8ChHgCcJ",
  "key15": "2aNG9SamsiDJUqG8cieNggdrEobZ5AnSqD6qqsfwXyvpz3yTxEth5p8pVKrQEJAwM1B48bLux288sq7aWF3eZASx",
  "key16": "4W7NfttvrqGLN1QUiycpueRydQkhTVbHtQupXakceZBTW5f9u4vz2tEhrg6EzM5xW6noWBrZhcAaFtVd8hRorqN5",
  "key17": "3kavRWNNdXBi5i6WLBpgidiWdKYQydtWD1oemFviknkYsMrKQaCk71oSzM6RGr3AmoSXaddth39f5gqQdPmiZVqm",
  "key18": "5dkmQaxz6oNvPfJF8AVqAAKLTToEr1wUNHRoESDgbCTCdxiKyJRV5XodLDh4EhaEWR26mEwHbyz3vjXYEA8tuBxL",
  "key19": "2gcGgXV2EmjT8F1YXb9HbpCPodVd9PMzwirQcaoY6YHaSEsbxtiXRMz7hpLjJ7PLJW7bDaZjMxeNcUfAw8DrMhZF",
  "key20": "3CBvR4B4ysyfPsWhEazaKBn41DjfezACgoEfF7ShUkc2Lft7DNSxtCCCNkSLv6LpEmoVFU4bJaGkjf6aKpe3SrNf",
  "key21": "33iWFzeutqaYqMcfVh67EaHi74DuqLpdTL87ann7A4RRfZ2SVNmjyqMf9rPqq9wDPAofkzcgHBEtLM3UmKuSz5Ys",
  "key22": "2AJSdEcS8oZxvxFzA2d56KFXpXmjckdSKbBsNjERfPBGfctuEmGZfWMh2QvsLbduKwRJMDVYSW8YzTjgCLqDwNHQ",
  "key23": "2gdiXa2uX5UoeoCftFLRWqKYbrLwrPvAnhbM1X71rdMiKZuMuC4FE7hoTV4VdJxAbtREECoXUYTbEh8hTM6N3fjg",
  "key24": "2Auaote6u9fmU4GtWbuz2q1j3czqiw5ZwBDSSJdtQhzvwzdHK939cBiCpjvSkA29WkUPyeY5n1EMrBqRv8zHTEQC",
  "key25": "5zMyK5vDNZtYQPydyosq1BoEtQUezg8woi1YFiuzYpcp35hKNMhZPeHFTmcJ6AvrmWgg2S9ZwpN4NfwpJu2S1zu6",
  "key26": "3q2gmHhn4y2KmmtjbUpDWkGwYauC2TFxg8xk1wCQiP89Hjcv9toWjZ8pYfyF5FS9cBEEm8mq1yphDTLTho3NzU5E",
  "key27": "2ytUJ5FEDMQgLwiwej7L2UkqcUyf4CascpgsWo9tyFS7tH61ewFr1pUiBtVXnUSWzdEBedXoU9qKckogcUQBm3z6",
  "key28": "FgebaasPgtj7wsCTVAS3Ba2NrrErFbpHvcy1Ayxhqg4U4BTwdXsHUWKBNqZJT6QC67QQG3eyPMDKth1BiNvEARM",
  "key29": "4M6UfR5jtKA1oVZbvDF18u3PWReZmXpaTLWmCJ1CqrKGZXKFUVkVjrzKLr8dsxhKL6bGja9c5ptxMcnibN87TeaR",
  "key30": "4VJKZ39ovYLe93T4DuMJEz5ZpiYx94WFPsgBjvVEyPQVBBrwLLrLKQj4gx336rSgAfGQKEqhGx1ENF9AaFLVRNaE",
  "key31": "tAUiUo1menmkSKNjBrEt4c1j5Srpyu7LsWXhENqNk6UA3oHhKDqcZLuWsKMF6MGdur2fPp64Hu9V3Q8WBLZNo78",
  "key32": "3CNtfxZPrkNBExsReTNuZ5DGjjWWjsyjY6F5SGwRUXTt2Mstq1REqudjAtNnuLNHsAJSYiEZVZhutnvDJdhVpkni",
  "key33": "5dALsNXLwnsqvVvVKpvp9DZtGMX7WGgnQY4fdkZE8WUBgUMhEhqFEX4VrX22h41fJHQPPakC9z9WjZgUp3pkN4fh",
  "key34": "p5Ux3TpR1pC9tH4hZ1HnB72s6F9nKKkgLmTqUfN4Awvwi8QLnv1FGwpcF6aBntyhbz62D2tvcsYquGnUA645LDS",
  "key35": "3MF4fJZZc5kr73e15mfDb38FD3m3MwSACHmeKSZQPpxsFMnCNftLaYgQeR9basYfs2saNNgeqPyp4t3cf6U7Y6pE",
  "key36": "2GdwJqH3kynEQJoyMXiZzSAdjcR2en6NVtLkdzyEbzQqcjTae3QN763nxbU9Xe3tmk2QjTj7r89RkP9z8hZKAoYS",
  "key37": "22KqntKXysjHBmsHwApc7GXYY3c756SEjdtEHzaVLM4REtdQjxLG7uQXE7N8GLKVu7Pmhcf8pwRxAtTQFnn1ZkBM",
  "key38": "2Be9QkKckgjAs1YgBp2aDYbWNEUL7qA438ryCyk3icFRsaLzGSEdo9UT29mPa34PHm7EHPspwzX75XDTiviKojHy",
  "key39": "2bxVoRm9aqWJSVkE4pnwd7vAkLw5S91SoKaQ8h7ybaMqCMKAypZPqEvZi6UshkEgmw26hHRuHGuSBGqvZpSZvoPr",
  "key40": "3TN1h5qTY8Txdv7qTCtv8kcjq3jsc7xF2TqJXsPC9teVcv17BjKVeWXsbeVM6fCtgoouzJPcEDmgdFt8NHbMh3UY",
  "key41": "4uVnwRrMMWnTejSwEyqHr9PaRoQm6Bj6X8THeidtt2SFgeyh7knqKPs9QtjJi2aWj6x3xSnuNUTX4kLR9RmEaKaM",
  "key42": "5iKmazDFfjBoTmJRa6xBQx2vnVBZ1ZJ5pxpKurqPh5XoZPVw9MsLpypMXze1bMS9FQQ8pPLiGE8jehUjf4zXyMyw",
  "key43": "5n41WCyozY4gxU3KC99MALsHKPyT62qN7vz5BrjsJTzhZhmcMSTK9f4JjFAEMZXrvwbMRhtyV4NsXZXaQqLqoA1p",
  "key44": "67Emi6csqv7itBNCoMN2FV6R9AiewJeQ2HfPyfUwVmP9mf9mKt1UqweF7xK5CgzW3daXmkprSia9a8Csy98gzagY",
  "key45": "2zuSQjrnTMfdQYBDQ38t2Ns6x2sYTBSAqvjT6HFZzA1bHZkVRb9YtnC3i4QvS7TKb4CVrezMpDoksdtyKKUGSa1q",
  "key46": "2LBVBpdKD4YJ2nURf5u5zmVFZ9rrtbLNzm1NDgRLJgnFFpSMaj6VtTKmXQxEEzt3VkftT24QrU9nUr25e3VLpci6",
  "key47": "5GQ5V6UftAdKCrk31hZhd5ZsbQjHQM2qkvg72ky6mDXXzbMGs4MSoZ5sGPPWM1UvzDCCMV66XsxSsfraiKoCntrS",
  "key48": "3u9JvyBWnPvF7wdc6xFq8q2kMCz1yY3fUsKyz7my2eNSZTNke2JnFeQgUY19tVss45vxgaKYCBxm1AYKEmfegYuR",
  "key49": "5UezEdt7jMR4Wptf3K8AD6sC22hA791g6EMPzc1FwgWsf4CyKZjAtcxiZ1ckvr36is5s2b3LYHVLji7rdjxEnTjp"
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
