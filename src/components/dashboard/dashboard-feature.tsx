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
    "2y78e5GPQFpXxW6syDooNCFuTQmM1ffub5Pr1KwVRGUB6fHmnZgJqmXCe5MspVQeaJskGemsQbyPK8qRaZKa4vbF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5beqhRGEEWqxpS8P4KTXWyyNcGecYnm2ZDRDLkgGgivGkGKhWN2xXMNij7MpabVcAMTuthj5ptc9aD4bRzHT9DTU",
  "key1": "3KSgZBMDBL6AzdE3r1iY7fbw7wNDDXWCZ1v7gHNfciZPhG4FARyWV7kZfqfzkRftWW1cMndgJDuF1FFT9A81UNPb",
  "key2": "5U2LsigpQnyKPxN1vrgQTAeVaohk8ZP3GZphiezK36zTpKmTiSPoReYj3i5pAy8j2yb9vLmoMVUkg47hk7BjmB6A",
  "key3": "oyYuGdP7wVX77GXMX8TY1BRYgqVhUcUB1XRGMTKAJMZGmY2GevJ1cpk42sLpEggxtLWfvgsJUEy5k4NgszTZyJx",
  "key4": "4MuYKc3j1WEqdBrVcQckhqvd5u1af3UjaheJKBFdVuHcWdqwfBgDFwUfgq4u35jNjc6wZ89L6gY2bfc4WhgmoM82",
  "key5": "3yhC6prwnFJx8aPdtwex3xQvrmptxYJ1pCmAcUE1CAYXTdd7FbqzfUubdBBkuLoeHVdmLZGV3pDTaHM6iXT9L2x3",
  "key6": "3UnW66M45qEtz4mBtABYztf7BSjh66C5EfQMNAPGe9Yq2498fupFwWTh7ECSBWXhC8kxBi4CvS38kYcxwdEKToZF",
  "key7": "4dFkE5EQEDRvPvc3o7oex9mtyTe68RKuoQKh5KRWXJtjVX1MDw2TVgp99tGc9T1d7Fgiu2mARhhtaGiccjTigcJq",
  "key8": "62kgZ3cHZqNZfk44z4KVQLSFTRs3XY4P8v72wxJjYYgM65nk6Lmq4G8CNGd1j8rfVumg1Dp9XqkbxsjFCUGAX3pD",
  "key9": "4vtQWqybwDUxGKmH9h57VkaQdFzABdKbwhqJ41x1H1Ku7UzeQ5XUTUBPqjCAsisuaBEtvSF3t3YMDAYZGu3jzBc5",
  "key10": "3rQzLCA6if4k6e59b8Ty3u8BLi5ZevjLYVm8Yj6EPYWoCn2z7VAzc8Lubq2NPAT26e4zAKmhLnnP8FzPSSAphsLB",
  "key11": "sefBNNz78seoNrJoEV8zJ8RYLyhZkvfryQec3YehV8tNVbdhEGmbi2q9JjkSZ4Huk4Wak2bMZ5xZp8WwrFuZco6",
  "key12": "3yQmk39jtj9P35sXyo9kLXLpFkdh3vhQqD5c4yk1728bTChc58DYK8PY8zcbev2eRR5Ea99y983gRMc4nLV975Mr",
  "key13": "65Xd75VUwE65ohekBdbgV9vKVFi8KPwdRrAKPPp9xLroZqjVwELr35q3Nu9KmVAi2BZhPCsq9DW6WMnkwCokz9b5",
  "key14": "4jRfdtTPHf4zSEjb6VThuuaLrjohzK4tXW4cCqqjNXgAL2NTHT1nHceheG42jfpyDV1sPtMK8ddXSSBXdSi7uzKJ",
  "key15": "2AQYK6JkT9VK1CrmHK2Auf5aKfdRZJqp3QgdmAbSrCqJ4F62kXTg2ToLULeaWJCFN9sbMsUi9eRYq54V8DfEV3xg",
  "key16": "5pA5HwcmENJxVhSRGuKhCuy1E7Qd3SJPxk7j6trFA4LGv5hbZ6dm81Vuk4rrE5nLUerJRm3ftBSypbWd42RX3skD",
  "key17": "3b71TUr8idhe9yJKSbyTdmfLWmgTEJno61LRCmrFq3SCjxU6j75Fk61frAW7cRv71JQvBbw4ApGdRkX3Q3o3oiqo",
  "key18": "5rYncu7HGds5TBzXVkpdoehs5aJoaBupUwVLPJw6DkUePos3Dpy1BUorA656wSuTyXpAwMVtkUQNDBwBLPmMdaM",
  "key19": "2SZyzpHbmunQycK6Q7UfGGeAQwFU83tcLV9Y1Vyf6aZi9gaAc1h1RkE1iHdbSCbe8Tm49bVzSUDTDJV3mitENF97",
  "key20": "Lf3k3hoXsDUGmJ4An5cZCqGz6MwUM8677D8JVfLfKTUK4rELmGLdThPmYW6zPsRMeWFBtJMknhiZKk4GpFMJFe3",
  "key21": "q7zjVfJunmMinpnBGaSjdVhrxFigjG6KXZM1h4NvwDEN164HKJfRb5LnMDU7hPNULTD1UKwcWTaJ5Gp3BxRCfU5",
  "key22": "415NqGAxHRw2czZopnaNVV1MidjtD2YE5faYEjH7gJKKerTawFTqiqjYckZTRd1fqcfvsbiPi61mKhoTbJGvq96V",
  "key23": "5qsujgCYVyG6rPBB7JKo1BXoxJmKqvgN2WeoSjZ3EZVvarG3UtcC5mSNjTtXhYXiLN9XAJJHdNf1tqX66WHjdumN",
  "key24": "3GfPJLJkgb7X3kN7NHMZWo6ozLHugpUYdfoQFocGthwUyJS5qyuxEYw97dJKP7gnA3Z76tVYCqDftSLjiHyEAJv5",
  "key25": "5bgdUM5rzoJq6Gza6ojq4ZrjrA4F6CoZjpYPpADwQnFcTG5Cmhm6mnErd115CEtd1yUw8d8vdRqzWqjTPzyEG4dX",
  "key26": "QyChCLDYiMyfb2cc2ZPB8YwKPUE84SfLXHsPjQQiwZR745f4rhrasqCdnbnJJ6PNRvqgSAWk39ijDBjmxDHg1H9",
  "key27": "41huffdfdvz7gDNjHFb5eWCFQnt7gF79L45xX5ybb1cP1Yjnyc95p5PVJHhUgQzfdagpndty1aLGbJNGSdjW3gBN",
  "key28": "22yyBzMQyw4Um4Zpu6NVvgTZ4z8MfLTkCi22DNY1xvA92oX9zQht4wcCjr8A1xaBRqwYJZr8t1Ar84Nocxxa7fmV",
  "key29": "2ByBvKEuUvGfq6vEUXy3bJTwaX5V1MCahxxM54xUPqz5GU97yYonGjnTaU5HqhvYy4bXtTJDH77mxCbNvEpm9orr",
  "key30": "5KK7QgxUuTowjHUbvgfaSUNRqR8RR9vZScHAjhw1LGsjyss9rZt5akMXGPoNmXyPmV3AGL1ccduPTEjgb1KunE2v",
  "key31": "5b7d6CNna8P4uQtNxrmxjivt6FjJUNUZdPPPPeZHvPpSHHBoKQD7wsETwMk5SnWMqKpcYYDixaoxfN9FLyrvn4ji",
  "key32": "31y2m6bfUNdRQNUCcM2ZHGBRdCQtHcgk8TuiRKFM3NCGDq12nzkmWdd9ok3LfDAx5zULYDWEmEgWGJ9EhQq3fK5v",
  "key33": "4KJSTgHdbdqU1uKFB61n8dUfe26xmHTvUTVwvDqVmEgtrah1bQMGwDyAdZ93sSBNaQLCHm3Lng2kU362DT8JGbQa",
  "key34": "3ZoY4FewgNYWi7aN45Gk4YuDLWDt91C1fooFYaKtL1W2e7E2tH3GC7is7xr96Nc31V1yZ8yFNnn9M3fTbfb335bm",
  "key35": "5hvpDiHRPFjgKiKb4XzqTMUtVsQ6WG61wa9Qw3MRCaSSip1YjDkxdPfSU6BHPMFnxYHtjs6GTwtSpDNawMABw5t6",
  "key36": "3PFmWGfMnCj4G9dZPGLWAxQHME9eLNfzizyAYQLTf5n8vPunFwPp65szSs5U5EB7Z6quoTsnixrNXjPz92s1rmEC",
  "key37": "5y8dS5p8q2xsuvc8tXBG2r6Jgjim9VBQF2kezi4PkxRQpTUEq12M3U8SXQXvyr7AmkqqDuwhN7UgksYYKpmpniqS",
  "key38": "5pNoZk34VjVD8Wy1F98Y6oia2WLrfgGpvvAraDNvacEfiEkJRaibYya3NE619L9epGTXBgKRMCccVqJ9Y8EMfBGQ",
  "key39": "3VGps4A6pYrWBsrdEqJG3GayKbo4iXM25wXFveEQ1qfP8jnjdPoPN5dCRRm68yFTNxwAkXLyUkMvpbfackTR7hKn",
  "key40": "3LuTLPhTwBBMnpC775Kzv2jgJCP4Ptkj437PdANWFUDfVJpE7mgtQH2Asp7B8sp9e3EcpzMixZRMne56799gAqRR",
  "key41": "4iv1kTS5FaqjwfTR8Pai52JdnCEvRQfAwmmJhk3v3PeQJsLtQK3iKT2VBxBKxsoQVsU1MfgNesbKsx9TM9pWUgSv",
  "key42": "25VydLoP4HdPLUv8yCkCemH33Y2eYzgUDr1buWErmRhRaYF5G1Qaz5Gb8J3DRywPSnFbisrqmTky1XfZQU9h23im",
  "key43": "2bdP1qQkCBeThThRJ5Zdc9UvYy6TVb9DYHJVBVp4ZqxZ6JLWHmQQdYEy93Sb1dDA9Uawwabp1cGJeT9uYNn9VNzg",
  "key44": "4gyRV784vkrFPS4nXzvw32Wpmxk9ggeonR9LdqAewSfKRBMC8GxgMkxXiBExV8RLiFkaVLH5m2VVAKykJ2TyLmaF",
  "key45": "AoutJcPmDmLN2BreKJPwumEjH72w8gjp12tTjGvK9iTNbZQKLYQnRqLq82B9H7KqN1cg3ryuN6YQKTxLrizCFji",
  "key46": "2XRRkYXzK8DJRrbLB48hxmc5VurjGBkmzWXqW6bMqtyNjt5cyCsVPiqiVvUJ3AS8LZDsQBcD3JTEJ5QtUVKLWFdg"
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
