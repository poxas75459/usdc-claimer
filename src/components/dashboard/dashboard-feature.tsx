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
    "35wCzXro9KerzDDRZwaXoj5sKfHgPx1GvAwSgJ9EjKK5uupv2GTiLNhGkRBN3aG8o1Yh2JGpu7x8W4tmsDSycgfH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66qZkUb2p1x3rWBpVfHbwLg8sY66r4hEpBo5Rhk9zTjEX3nPZVJEuypMmSvzbc2r9ABNiSChXroY5PV9DaCjb5Fm",
  "key1": "5e1CYngfpygw4LFEtVdh2cw2a9T4e8YTnoK8WaBpLmYe7Mo13ftyXXGizdhse3hsbtKYjNHzuJykzsAHeXGE3TRt",
  "key2": "4VxQ8peEnogsBvwa8TJR4byFzz3sER62Rb8TyxuDdFi2RvHcghtAzsVSHcSCM92gbs9poisteq8z56JRkFqVZoBK",
  "key3": "oeFD6aF8xDe1nAX6xRrCCXCDcVZ9DyzGsbwyMZ679amZqJ272MSjcLMHZszDd98oxWikfGu7qCwDjHohJnH3M2m",
  "key4": "5o3ZFX8LdcdVtNquNMPy886Ejp4vMZCEomn25pM5srQ9nJCixbD3uF8SLszno39wgoeEB2Bc23X8bkCyz2snsmuG",
  "key5": "3Ly7SUPFQaHB8ur6VMqZcSH4rVRLE7MrspmGFVHeenfTRGSLuvbRePzLr9EbrDPzm5SEdxgRdmZ8pqfWBTbtRtLR",
  "key6": "A4NmWFKT6R1qEbkQh65y9Y2gMidgxmAggZzno97zxCHHho5pgNqujPXaP6R2WV8sa7AnkGNQFaFJzAQEQWRNYYm",
  "key7": "2wj4DFaWXPqsNREsrxJ2pFdKRTRZcmd2dWBsPtqix35PZGpBQjpNtuT6b8VbdCvb19eoqsUgPqErp2WPPgMyZX5g",
  "key8": "qobFkqaRcQnQRjSRYXHpFmVcqq2psVyx6LbW6XbWr63itXANJmm8E9WRbMaKED54TBEwBaZg3vX56HiDukP8xGv",
  "key9": "5kdLDMSGsc3zpdJgd5LLnkD1z2cjcSwogqCfv4NtA747dWiZM7LQMSnhcQxoBFwXsJr6Ryv2jArG2TjWfab1pwRg",
  "key10": "3W31pzjb87DM4Lg2dLEeMax28bEYyEefXis1ryiw2dpPeRf3nw6jHkczJF2mQEJr4xxhiKxcs3zY74qnRN9h3PpL",
  "key11": "yxhaHqKsEw3bmYjaP2QxrBxSGS3dKTnVSbV9aiCNbB3ZiStMPAMpirYstiKejdhYTheLueQpMoXc7svCcebZxM4",
  "key12": "4Ju23QQTjBV7GTU8Qtrsb5nwfrKjVdEjJ1kkD4msVdQm2ac9QNhJjgGmjrbVdseA2a65vxwKZ6LxXdYf68JA5uWF",
  "key13": "LPEBZeetZe13BTciTvtLpyNL5Lh7snes8FSbSs3sqbHp9jcoa92WpdQwrJdzQS4A6ibh1umsFU6zaTR57bSALiL",
  "key14": "5VDc7AGmeapSvuvcyvLzVriS6N3XBo7kkM3kGrKe2HHpeBnsejVPJgfqtyeZMiKW952JAQdrXrUenccfJmKmsvmJ",
  "key15": "3ukSKBYegathm2JWufnJqqg7szrHMHkzw4J8RWMBe5qaQvD7ReQvV8MbPYK7L5mrXCttf8iybkHGeVoctA6EsEqi",
  "key16": "2KXT3qVYgiq4DQysnpa2Ps5qGsbzam3Q5xtW3WYhGo7jqCh1RQyxBNuqx3dTj6g9s32dm6qsEJHw5GB8ek7mMARB",
  "key17": "2xAfTYx1apzPJUaejkYai1WMvN8rzF4C3gSpRHejHAnh5oyWuWe3juY8VPeXSJfHmHSUBW48QxkvG2zWbP1XJ6NZ",
  "key18": "2Qfs4BrhZmD12w2mpdkBYgfCvxqvxNhZAZfTdXSBgTr2Hh5SQ9njiqArW5ezi7Nr2GfXisVM8rtupTCCC2c7w2sH",
  "key19": "4SMoJXcSxKQPNgPsWkWHXHaNBXKY88UQBoyrjQi6syewSNzeyfkHC8XRKUky5QXNSuvGcHf2XNLpaUYPbJGCDZW1",
  "key20": "2iiyN6YwRcqaXnEA6mPfKjYo6yxqh7VZcQLN2jak89hMa9ugUwauTnmNbRJdFfEn2qW6fvoRQbEFCP1BYVSH2z8F",
  "key21": "4go3SaqtFVkZDcXL8exUNYj5uQte2eNMEvXTAneeD9EXHrTPRVYcYMuCbkK1Y35dKyuETDCPiDV7hkUcz4wBxArQ",
  "key22": "2KrywFzMAuUtmjsbU4yxRUQWP1XiG4YrkeBrUUQXnXZrLW8eh2BYzy6jBrjbF8QbMRw9bLQYtc9gbYf356Pa8e8s",
  "key23": "4yayiDzDLhiFyEHRpAMRvz9KVEg8Yw1qA3eiMTr5cfB7aTMufhpMWPZfNy1t3rd4tXVwAavodQ65SXxncFQE3dBd",
  "key24": "4V83HutVj8G5f7fWoNQygA3Nvg9HnBvzkh2cL5UChVHtuR7KizQyVMSSwnq4eJu61P51aqbc8zpSdWTBSryScQWa",
  "key25": "Fi3zRCHcLLQkApea9RYWq4ko7JoagdopD91JLKET6z1SK4ifaZm4xu5RHGD9qxbR7BrQnAz3KQZjSeCW3PkUURg",
  "key26": "5gSgAV988e7u59S2hQBghBo8y11Ac81dhinF5Lv6yLfS1EjBuPFSXEDZNiUv372p2ouUmH8BbhRmN3h3ecPpw5vU",
  "key27": "4YZKgYXC4Q3TUNgvJoQiBxE1VC8ootYt9Lv1poUPYBbZxcZHiCSQG4VsnTP1UAdzKpWozDgHhQSCX9oxei9FLNcV",
  "key28": "5mDTJDYWNd3sutwgGHFQhMFbJD3qzhY4f4ZUtb7gkAjWRbJF8SmBqLBa2dKmL1bFuRWhH4zE1XFTbe8HPjrUrBcQ",
  "key29": "5QuHqJ8SXaFz2GQSoZJsVsqu5H5y5VHzRCLgVisBeQPruvTX2rNK76H6TJUUTuMegmJLtGnWMAm2rJp8eZ97iAnC",
  "key30": "5965RcfxwFy2pe7fyA2iDg5cJAEW5ppZ4C6tg2553FQkZiJM5H8BRd4YZMKS2aXchbCsDyLNRtSfMXudphNicWTG",
  "key31": "5VGFFKdGtV77QS2Bqm3uGjUjFDVRq4thaX5b9AyA3KXXv5aXcykVRnQAMnLz3iDGSPMehRwym1zJaoRxp9pa91hZ",
  "key32": "414f6pZmQ4jUrMAxTdf14uZgivy6SJaJbBhk5s8bZZmWCZB86bueoJg34dC2KETcmyPKNe7TQNjXbjXzTzCV5P74",
  "key33": "BiZDC4fF9yTbAPP3SYfT5wEB7C1mfNMK313y8uyZAofZQY2ryEgrZ6xB653wXf9WJLjDfoLiAXL1E8dtr17j3Tv",
  "key34": "5XUb5ermRDCCwfnRdnWaFf2ZHzxDtStVXUiYUYiYMK1N6surJqaeSyYfEYpKBhhbkwpABcrsWyaayxm6zr531o3G",
  "key35": "3aY2PyLJN1JJf2WG7hi1uoAy9eciqGCwChizFG51Dm62N7L8Xk8nmca6WqfTKEpFne4EM1QWA5j3mDUSpqR1p2ke",
  "key36": "5ZnZPacnceeG3nMoRo6QZzKCYzHpYPpivwQQFcmCR7WsvSGBkhsUvmoSYUj2ezPzaChUmdM2yBUbFJgXZPdoWZvA",
  "key37": "4mSqu7ao1kkCcH9pTWxDwFFgwexFRvgTmrqQFmqoGKkZ9of4qhEGCCeYU2YSh9u7zf8wTzqMikXtsA2hQkFBYtGA",
  "key38": "2VPo9eq3USEVfyaQAPHRnwTbGx6ExUEvumP8TS5wKk5QQ5bFyCt6weJNHQib5tHBwg9pjCoPAvueMZWRmAnXUbfN",
  "key39": "5vTxVprzts1KDaeGkmGHTCga8CRHuaN3N7ApT9gnXnjqvWSnEpfiDsqZxJYPUxhrV8MTuAQ5sPyZZ2LdGDAeJGB1",
  "key40": "LDf8EromfFPkJnE1kFtRo9g3fVxRkbvUsJh3ixTmA1yHe693tyMV4DxBB5suUs5gywQSWenvY4h3snUZeWGg3by",
  "key41": "ZbmTQFFd3EeJBtXyXJsM51yQJeWwngWUM2npBgg258iQesQeLXAdDc18R2BAkBbRHmD7oWTyYPoWycrhv8iuqcb",
  "key42": "5GEAg2UjbL7kbSLGha4ZywLgaWMvq9PQUNUGhadmZ4dr3tAcTWCKceL3oTLsmmp25gqE2LcDaX7dMyfgZ8E5SFm7"
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
