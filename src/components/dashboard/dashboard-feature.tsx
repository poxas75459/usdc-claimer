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
    "3MrYHaEUiMvycqR1mDLNwdo4go3mhSs2y25MYv5ZPgc6qsHmjczUPcfexSAnQQuZuSPeskLQdXYb8NAbbKggrx3E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xpQjfKGyJvJmqh55fuVtVPWuUGbheZXxdowfQxisPUBpENkAY9Tb8WCmXa9Aie3fDqDwWQJLLJfGCXjYkxHMEBn",
  "key1": "4a4rbbsMEdg7G628pFfxeP2dx8KyuoGVEXL7qgoU6sJ6PjVfQo8FePjstKTLwfUFPi1UMpNMZwfyDftLGJAjaXLQ",
  "key2": "V3MJZPyk75SQWpWNG3fhXGkW7uoLrrNMnnEbmDHUyfkpvi9edpF4NFwfxprohNwGJvqifuMdYK7Jypx4vH5AXY4",
  "key3": "2JQ2mfwqy1McKh1pDhJMAM4PFjyEU63oQWp77vNt2737u9YCapve4cbTtU9N9LmUTpJyCjXL49hmRsC3bAA34rGL",
  "key4": "SDsU79GAMqC17iKnjtitvziADd5KBVmaf2GastqNpyKxtqfU4ZAjQH7J3B4e4nrMqTKeQAr1JDkQKvkapWSEVPp",
  "key5": "54eMWeowa3gCZiV6vdJ6b9PYzr42nKYA5oqQHLeNgWfiuGfpQLrAZhDUPmrEZLd2SUW24TvAQa3EkCsBJ5isDDu1",
  "key6": "3LryirSQpLtzSke8BWjmAKohPspC5mZ5Um39XVLi9fRmF4LgpttEWt24sDUnW3WBgFRV4pVeHm1EALNroVMUC5Sj",
  "key7": "NcqCUgmFe7pnbmZfZogKMcx3WMM6hgLEYFfz6AK1Eg31PEBKpxVydqK79pgAPGADJnU3BFCbSnLMWvC7Gup3Qad",
  "key8": "58sPAVhykUL2QuBzDzCAqp6SHH6kgk171b8fCUeNDBvrSKTLvvZ93oSS94jT4Gare1ZvuQFUNqFWc3LYwr3avyjP",
  "key9": "3NRWZ7QdzUFf3z5pwhL4MUf4pqTb8Zm5ctht4D9iWwwKnMayZMxuy5bpKfYC67BC3YhDQF3zSBxXiRm4qte7knJr",
  "key10": "2YTgPEmytRLYG6DZqDiv78gy4KMSJ1E1ShyHXZ8fnrryCe994MAaFDR3SrpEXoB5RBPRhaqwJBxtPnQaqzsFw3q2",
  "key11": "5QABC9njEexkLFq5YfruyMABLozS67Sw3uPPubGBnZQoXYb74y68Sw8B6L5fDRzaFuMvP3hbCWJxHm77DWdbLEq4",
  "key12": "2R8zoMdXmFtUsrFdPRspZEhQuNEQh9BkQ6gkiUjtYHqGgLioQBW8m1hrBD5Uf4amu9qKd2GvSH8CY9nTc7EnipqJ",
  "key13": "58C8CrAtcNGJgPcvW9teGgyUKy2ztQ1A9BJjSQj8DYiyWFFPor6Tss2QWWHWtsQVn8eyRW1XyiFkdA9AoYgoi1d5",
  "key14": "3sMbuuWZrUjKaXe7zHu4wm1sgDgGQENN52Y5zu9EmWSWudPu8geJU41DTUL8P1Qc88584W836qVftuhFHCbrzW3V",
  "key15": "5WtbQzdEb6WEKn9u6CxeQ2BYzyKz4sMgoY3w4dR6dbjqDnErCQ4gz3V5vpTkaNKNhLc9tcnFdkmJdYjv1A5cWY6G",
  "key16": "3AaPnpcgBM3FTb6DKahGYDgM2G98HdktSaEq2wbt1FHyqPGRw5dHE2iz2mUwS5VioU3vn4cgcQ8u79jxqdMNDfwP",
  "key17": "mTCJTaMeNawnQJ7vwkG2yX2oH7ayUyjehMV5sA9iZG34NZgeKvAPmBCThGjbHsmRjdfpWHsKjQVwPaSpRxDjd5s",
  "key18": "4Y5kFJVQL8qo8A2zW8W2EAwszKy9XkxNeaPMntddEn5g6S3PM8hTDzVSQthuHXjAjUNf4ciLo18hVMjYQjThBaWy",
  "key19": "2WABFx8HsfWZt8H8fxK6ebSemDAc7H1XpV2r8UXTKiCodkrvYtuA3KB26EtnLQ9e2m1xH621R8R3kRtKfNuH6uui",
  "key20": "Hyi3UVdwpreCAKz2oVZk2QhkSx5uNU8Qw9jxWMVTjBL8ZiGq8u2hWuZ1pu9vzyAWN4De1AH4fM62BYYpMVACFZ4",
  "key21": "9smYyPCkxizV3d5ybsJE7EyXYgBtnvTHnLr7EwKRsJgnVfJPoUgaeQ8uyGrubJDgkhBZbZyskDRGcnYQpFgsW1v",
  "key22": "4yWhkT6TTB8T1DyRhurwZ8ZmLgYx8duWXt7PT2gweJRHdqUJkL8CZy7ckVdn5DahytMgkknYZAXNVSw5dYKQpd4d",
  "key23": "2yTREFh7XMvn3SfjuedAAUFsjjUCJSNTLb7vXwCVNKRbGm7jiXrvGNGqso1xCysX54nZPMDBjdbmiUyFrxcFjjMp",
  "key24": "5i8dEpMs3CvuZjg5cjJdJHbjhNXMsSKEpxvSDQfkqSaEmMm8LBu8Yxqsh71SFxX1nXmJr42RBEtvDrGCvjeqnFS4",
  "key25": "2sVecEdtcDdQA44ef7CbGoqcu3ceCmJN9RtZW7hja7kcV9zAoquRykys8Qj1dWnvGbznDpfKQLQSbiPGwMMAaKxW",
  "key26": "2gxyZJj5q2Ws6T4PBFG3dJgDmKETbrXFG7SbqmPiYDB8Vvx3q4DPPRmKfyZopQxbuj3zY8DXSRphMMf99zwUy6nn",
  "key27": "4e7rAhturvyvLwAMo6im5zyCEsYRTYsoJXrJaFC6RhbNb4G7MH9LfBhrLN71Sa8M5Tesd9Br3faZM7Y4m3sFgkho",
  "key28": "sRHgUU3SsdWkawT12udsobnf3jAqwKzCX29f7Z6nEWAhHCf3fuNUeghffKHh7kkM1jPe9QvRMXssGh6bu1PRJcW",
  "key29": "fqvV5ycz8BtbRWFP88NueQueUBHMXH7UF99tuw36UbuKVsba9BY5fa8y1T4m6i7gDR9prfNA32h5mjdRfg5XX7q",
  "key30": "2UTHLMnZhmmoiG5heNf2647e6LH9Mpv7bXkKZxsV8ejfHPPc54hgKykSnN3BQ5ouMBRLruJgsDGs8mQ61hy34X3Y",
  "key31": "5P1rXzLpgzkfe9dTyWWi3Dm1TasBLPru4i3E29DhznxVrA7MNFYbR7oDdQztGVHekRk47X2NTuBVKqdtkR841hrV",
  "key32": "2zzZJpXTmvs4opeaXd4ECV5tofMxgycYWx135YScU7poaCkL8GG44A2AqWuUc4LY1Zc75wrjSvgNRRb27GUt6MTF",
  "key33": "kt4A4o2pFLefFVV4YrGegPpezMqFTp2At9FpKfGUbUWQXsrcnZEAXqPTMr4m6Z4qfDqRKDRMDehva4WtofGtU6e",
  "key34": "B8jWnMZGKUdkwqJZXkHjqZnAaKD3Ch8qDRT3fk8L9hcYYt5s6b4EpGgTEESXycJZd3oAPteFFQZGzkHBaQT5bub",
  "key35": "2Ecz6XtKXJ6To7jfTdvZuwefjyDsXwGR6YCeZEupJHAPAD43MjzKpDxQUG6EPL1bsYFEt25cGQxKsRVMDEnVhgAs",
  "key36": "t9chaoi82n3oXqybUL2Xx74aKjatvSXzMo2ohbA7sg8Ssye7wzXxWfCCzcWBudcEwrWGAhrnYfLW4dJPkMnKx9P",
  "key37": "3BPFoA6xAr2YeNGNcbfmSPGzuM6PDuEKAW6M9ejHwZeEUg3AhyKzRYH1mr3grQdXtPWGsrVQ1hypiFNEAnp5CN7w",
  "key38": "3tus5qEfPM98ai1bHvQ4j9arwB37vPerK3aE92HgLhGYEHH6RnVqvPDjyFzrT1iMq8uPEAnxpYGk9FFMw39d6i5B",
  "key39": "4urXj48rEXfi1fg1pKEoBnUEUhnLcKcVwUXLYCPp9VMqjKK64UhzhQnqo3w3o7nFtXuuDiY5kwxSV9UQQoi4oGu5",
  "key40": "2hF3YpEAptgr996NMjPRBPZL7u6qZnEyfypziCPjPhMY6zaDC6iVk7qV2vQW6wT3tYNouTzLAZN3KAzZTwobNJj5",
  "key41": "5faK6FEJM1fNPRDKd65dsAc8Z9Bgb8wqN4CuYrcvhXxxTY49Lfac7GCbiaMVWCkKiqkvbPCyTQvVaDdtDhnR8R7Q",
  "key42": "2JyicCF95WV66XEwXwX2QU4fuohosNsXwGqtLG7awisAXzskkbYvRWhvH51g7TPH3SvhavxJhD9rcWBDVJoXSG7Q",
  "key43": "4WYwWtAN3zmu86D433Wqn6vKW7DA9ZUWEcQroP22vgWNB5uLukLqDnWnaA9pxUNV4qCt7UMsxyuTfthm4NsV6yPJ",
  "key44": "4JELajZXNmD6ESLv113ga1Sw41wBUUT8NgKZ8pi18tuML2bb2KBGVecJhVbnrPZuexWhsZy2Crpu423xpkMygAeF"
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
