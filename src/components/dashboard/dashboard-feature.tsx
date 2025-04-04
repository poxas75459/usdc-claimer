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
    "3cnHUn7n6NHHXT7RbBNCQkWk8snzUJWai8SzpvgiNGgSsB7U4Ehd7hzqC3wwhLbpw8LdMHfUjfizjC7SHhTE8juq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27fsZpxLufBYnLkNwA4hijuvmq2SSS6jFTcWtseWi7TpRNDq723QF4cvwZBqC6KD6CuYyqYeQSXWKM2oFtcMBSq3",
  "key1": "zqKfxCzZFbMf2iSEADaSBn456zaGYnPXLTEMMXcHaCtDsYbTFhTSNXkncoTJiucGtBZHEdD4hrQyrGTtxWNfEXR",
  "key2": "37E38ve77MbFoAjaxfYaYqc64KZtHT1z9Pn6WgEL28RrF3mVdA644WwFQ6p92NbsAtGZw3UGSteAgfYqb76qzmcx",
  "key3": "5N46xhGpGcmp4chb3mRYjmXNrtqQA4y6NAjgPVPK5cuXey2ZiYbBf4NXCw9aNa8BWgFS7yfZwcyGMZvTBd6utt5q",
  "key4": "63EjLmNCjyNUWzraMPgZbyeBQzxj8cpgC7FGgU33akPTKv5KVV27oFxjZbeUGcUGsZv6hqLwzcckaRMgxVmNW9nH",
  "key5": "5qxC72KGWFLUx14n75GSqfwYKScZZWQ6G3BhhFxDpoTmxNQqxu9We2ZBRBJRARWXNq3vv1t5D4kZtrCAZVCBCG6J",
  "key6": "2JSeGDUdtihffcEiAaxyc2bpYJNwya3VWmAmzLrGhHrS4v9uohHskPHUBkSvSRcDGBe8CuCoduWqEjCsXnVniFs4",
  "key7": "5VHppnhLWjaCiMK6mwZ29JS6FV9uisCZiWkzF4mR5UtQJRurEP24ZVtjqqGPbfwGEaCE4nC7CfyiCPm591HhNSJQ",
  "key8": "2EGjiGhXQAK2DaqsJA4q9CzHDb4g43itVGmV87h2hBt71JCt5h9Hf76pM1ncbc5BYyraUAkM8yJCvNpdwsjmc4hU",
  "key9": "2VGZe2cbYSQcbfqYVLdiAg9uQu6kK9mQzckSftuztkX1YmuwyU74cPGa5AAsfWddMyK8Pu11F8kiuq4gEtANy91d",
  "key10": "24d3zJYjYZFoG7SYW8CtnCXz4ZKcX3UTuuCpq8t9YuJMHtNQcsNuR7PQHSWBMarpJJBcYV323R32Xj1U6FssGxYF",
  "key11": "3yR7rZDfd8r88k88VfL9EbJg1dFHKx1mHcKQBqaR3bt9RYFM2Kfmoex8Dn6HsvgjixzE2JJC1jHWj9oyRaSEy2pJ",
  "key12": "3QMG5ifsWCVEDAqAdSG3GeycyWC5qZj1tVrH9pkFxJU3g25AyzzkMdMJJKsMy3KgnoyPLas6xNwfuYRaiB75B4WB",
  "key13": "4eCv3Wg8LHK56BwoaHismVQakjrMjkY4hnET66dJGS49rnKyBNBgapH3TXvuM4LaYjhGSe2xKfzz6ur7c7pU1AVY",
  "key14": "5nv1LwQf1dkxTwHTAjkDEcUCkUooJu2fQ35WeE4fdaW8pvJiNHQSvLBcPnTwz92ujTg32bthHGrYWbrWRg9Wvgfm",
  "key15": "3euHgExKqkoptcyAX9c8s1DPn6tvRGY2UE3aKvqhbH9GE3giSx67FragVewsv1koGr96AfEv1JS9T1V2rbuGrq4a",
  "key16": "3Ya1B7qKFfgW7X1vNpmgtvDhiF6QzgZo3csmF3X9pT7YPtjYs7AShrC561C7kat9s27kSwpxYcQFAipfgdBQGEUL",
  "key17": "2cs2HwY3YJpgE8c4azWYciTftCZKLeDvMZKT4KPdg1kLAH1tCJNx32Auf69Gnn3WZEC4nqTF825D2if7FKS3YeiV",
  "key18": "4dcaTqrRm7XTiNtaYPjqUz2Wzso6knxTc2xw3RwRabvUnrsdpoKeBtCxeEWfii2REDd6Ef9D8Uor3F9LsGDkHDsr",
  "key19": "5gqvBJp6KBKeGmT3smxiL6aQjeJgE1V9Gc8mCeY96oUHS3Ydyku78nKVwK45xQJ16cmJTuUZdcxymqD3vtaVSZNg",
  "key20": "rPCzNfy5nQsDQgfdq1RqjgA2duGSW7u6FSWDA28LQAgVvqPa2ytPYPkUVcMYdurotbqojgpPowbLboiqGYmgt6C",
  "key21": "3hW1yCMtWg91SuCKMdGERgwX251aWMHQp72QBHVmuXGNLUvfHD6DyLAxHHV27kpFC5SGLBi2zzxTkyFo9WbDW8bN",
  "key22": "39y5rMtTgozprBQcoDkD5VKaDftfaZKVq5LaZ6jVofGttoBEinPT5J1oKyHX5D7dR9hCLej6oj1ndD6GWzzLsNRS",
  "key23": "2ADjYhJwRUjZzkq8nQxAFsENZJnY9hrpHveTZARCtvuya1wtqDVQRZCnetzQTreCcyKrKWd1gbcpZ79tGXcZY8Uw",
  "key24": "58RvWVZm8ZcAtEEdeyNBFSC4n1Gja1S55nd7TcNRQ4uzs8YHeB9fxVfM9oG6gv128LCeBhVt3fWytXYj8ejcXoSi",
  "key25": "3kMMbXwmfe7b5XiX35nYC2xPuqCZ8M8df8eNfGFshb8v4rBhLWMHG8Vd7ddVNvfHEhxFgA8pAMN9ogzLUniJPTFp",
  "key26": "63vm9wfyUTt837MdzWrPGEsPkiZN8zGbpL1Pc4NUxEVrYEgiydnB7DWP2PonL7MsrJ24uitwJxyoDkFK12Toyt6b",
  "key27": "5931xcEyeyE5UfugkLQAFJWnHbWoF7TtLCD3xUw9948QUgYYdYcUdcHxYrLs5So2pEv8ocGehkE8R2g294TPoWrC",
  "key28": "39JiujmW62gED9JSgUqD3o8KPqH3NsaUMq89v35qMqC2Xh7fy3zofYaKvnRE34TJ31Fn3tcku9GPcwUhjjAvEPBR",
  "key29": "z9gDKxjextuZoSvvLhojEReHncHXQ8WqKAmwhtqAQX6p3M3yjaXC5TyVxZ3scyQNjurZvNtSPxFH6wwvcNZWhWt",
  "key30": "55FV5jTSYn5xjmrkzXYmg9j1g6JzNXRbqt4oVeG8xpMn77gTzCZ4GmuNTTjW25PhUnCiSsZA3qYZcUj1CFyDbQ2f",
  "key31": "AXPbE3RGWamiWjXGPxanNf8QAok7SMYejnpzFoPGe2PVivk3VeXSbabGxeFvqkvm5k6gph8tDG2Wa6EpQB4wfcc",
  "key32": "64A77D9jRS1EeY79ratwRugLh7Lyyk6GD5Fco5EuqgVPWXkPoVSsVonvQNpmfxap4vNQzuvrgNVoCkdGGHXWY4E5",
  "key33": "p8md9oGfMtho83Z8sgK4qX2rWkKESip6KZUnJBnv4cYBU4pi9148UCvTmHp6YN3iJKpWj3Xu7pjirpS4PRUPbmB",
  "key34": "5rda9bvjYjiaoEsbBUY2SjM1LyqfYmYUp3FwwveVZrGc1UhmwBk2MvVgrPtutYSip75webZxqw17sEaeb23hChS6",
  "key35": "26cDkamBjphyWUNzNqwYzPTSNFzj9KnS9r3obiQQHuCpTpNngN1T6un28EJgrzEGSW1jbA7rY46TF3RBn795SqJN",
  "key36": "xZ5D3euYw14Gv5NysaRGdMGyyLDFJqB6iqNNzZCnpwS86zFGy32Csvb7FTqQsKNWPqDxKP92WSbKPbKdJsmMeB4",
  "key37": "46CFqwJmQirWQoMo8p7Bms7NkifHEqstNMw2TP9rfqN8miCaT17LNhmsa5LKmc4EVahv9k9Q72Pr6386wkqiFzrh",
  "key38": "4NdaRAyzHpChPGBiz1PkT2jQGdzUJ5ivS3izRadgHRfwri6rnwBJjgNdKnXVdi9V2UexjbTBgQQfFVRs1PrT7B9A",
  "key39": "3gqUPrvTCCKwfwCP1i4mMhB8uFnsyDyR9iTi6XtKcYEPgJiK9iThbnmagmCVFRWynYgwKZznXKWCPqRcZtgXxTQU",
  "key40": "2gA2UXfgXgQAWU3a6C9HoRrDY4oqkVakgcKbjSGwx4rYK3xGWvNVZMcFVtxVnWxNEmxsBHuogoNn3gZe9p28Qpts",
  "key41": "3bpjcEkSdS8ccnz6JRMiQ1keuWQzD1hsfHMka8DrMiymq1xy5kcTBc2KaYKZZxrQWBZqyf7ESA2Sr1cFb28eCQRx",
  "key42": "43fMGZHBsidBdtujFCfyL6be4mvwasEKWkqxJWJ5WniBamMzsVcCZpNEQj8Jk8wjRDCa7ZE42RpBbEFURU8Zi5pH",
  "key43": "5Y4vFnS5tL91BskTwAh9it2sh7dfQMPuWvFigPZyjtDNXzXCjw7a6C1itu1xYbLXrEQnYSBcMv78fZhTmo8TL2iX",
  "key44": "29QCQfFL2NxiqPzDybsLdojoZcUDspzf8LyNVDNYRYcRFdYu4YFZiuZsveRYVW35jUHS8aFxd5wG97NFM5JosAHR"
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
