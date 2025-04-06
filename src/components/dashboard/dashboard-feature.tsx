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
    "5WTsuhBWbjb7ttKF5V1c2dLsS5Cr13sXi1Z5QmfxxpEwneBYw99AMCdr7Hsb5JwH4TSJymtE1NsnL1Wjn3bmMLXz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uKTMZYZJBp84jLTp98Z6dC73StXLFf7u8EburUY4PAWUk8bMxmE7JpgQdexGv2eTWMCGHbhZ9j8T9jjd1Qi5f6s",
  "key1": "5cpTK9hsrBiQeBB6u29zAoN2pm9U97spg748gEMyKcXxtqj9HwVSwzW8dqfi4a7LtvSiZwVreg33a8T2ha1zmtj",
  "key2": "4UaKuUh7eM5W1xq6SoTXGLiPofGR8J2fPjhGMJt7sSJpouXPr76QaW5FTHVKARhXMeXks9ix23Roa9VgaXT8g3WR",
  "key3": "4u4KD44DxYxFwsZ1aTBbhqS75nx7XPXFV7wcfPPt3T8RAvfeSNgTULJgX1B8Tc5ithHwSQRQLQ3FvHo6z1BNosTH",
  "key4": "38iCFowAspFovhhvwfR7iEeuqjgYudgef2mBsSHhYtGKY7UmFrK5Pdtn67gpzUJZPQGgUvAtHsDe8DDaHdF5zXc2",
  "key5": "iCkVsa84JSdx4bhqxe2HFQ3Ky6KV55zkFu7FUpf9FXv4SV1GsPU7PzDKwwewSRe9SPuNcgk91QGEN9k7ZQrvn5C",
  "key6": "61GH6wcPCkWwysqAM9qyEf7mvXdnjX5D4vhiR8wttr3WsCQ9odsDA2McWmDFcYNaR79cP7FP2irbNvDG2VuN4JHv",
  "key7": "2NwQhpJAwTk6pSR4T1aiFK4jhqmEWQ6xDhoDoAW5fHRzbKpEyuszqSmvFENRXxYx7jXEhwDffubJf1Z7pNXXxm3y",
  "key8": "5NywiWsvvezDAg1UUyGkeJWudnjcJxG8QsXGxtoQWMDmYa59MVzMNkNfmiooKMm2jLNjyzAAjiXETj1hewuPBtKJ",
  "key9": "5gqHJioZyx5kz98Es8JWYuZPiy1c3Uabzn9ZLZYikjhNC19u1fjmQC4nirpx6Dh1pYZjZk6EgoZz8QE81hgbz1sm",
  "key10": "4S5hqEE7QoAGuYvdgQEyX1GFVq5QBbi6qY4FQz9ZTXqqCyjqxA11Xkt6o8bSzVb1UWnFDtHoZzZ7mUvwggtTPYty",
  "key11": "3nhsv7RdF36d48HdiCfLdc1y6wJwkYjmXqejxLHN7MaDjJdHoigGxy7Xjh7krgZeqDV38uy5ccYNdj1t1e6zBSLz",
  "key12": "4EsbKtQaLfnowTqxSqk5QhK8E7uqzpzo1CwbBzQmnnLqcmdZBbQqACHuLtWRtxuPANydNozDyfjfvRxYuKuZSq1Q",
  "key13": "3phNkXSeLVnWVL4SSqiaRxiUhRBxxyhErDBiSDRhy7rK3E1Fqj6SVyZDDKGRs4dXSgDLmRrES4PGw1tkvP526Jyo",
  "key14": "3xNp4DadwatQAjQpkReN4Pzco5wL3a5WxKjNzNxWJNkKE68RDYJnSVUgNQArXXNP7GuU2WjM51u8xFgqw1utsBo",
  "key15": "28Wo1rsr3YPfus196JdVHevdorNW3wbUSuo3xnXWvGg3HJawvMkkPMjrEW9FmZAQBeB4qwT4EeR3zzpuYVSj2Y12",
  "key16": "xwd6jr7mfm2psZuUmfEQNHcB2xAFQnGD8W2BWhTDNnsY89EbXV9jSiuPe6Y2srfa3xmovLrEpGg4x8tUprKtQrc",
  "key17": "35nkoGMVptqFdWHm3RrFSC6yyuW9zbH32dQoNF31kjMYocv3Y6iT7whF5T3R52VfjFkjWrdGpSaGjXoFgUpxPXxN",
  "key18": "HuepAAne2i1JydRP4pnagZGYxLkbZWp931PxfDK3pLAF647z5RUByvWksUtvoJF8HHGgh66nSt6PxQoD9ZV6Z6i",
  "key19": "KHh6aTBcpSuDLTt7gxCjKjrJMkh6Xvj7V4mFtW6vSgApX983Yq44Xs6mFDJez86N4zfuuUZPn74jWE7Ev1CjKTm",
  "key20": "2WDPwvxjBd13YqHo621L6nqYXz4ZJazrfbzzVGR5H7kMQ8ftq2uigQbB8bDcqfnrRo9sGDKVWweKJWCfaCuKKyMe",
  "key21": "5y57gMgMq6r8Pr7Ka8ryi1gDrHd8Zws31hL6fapvRMu69hbvweWgKyPT1yGMw7GooPaJX44UMQzzurjc64xRZmTT",
  "key22": "2n3fnvwfsG5rcD36zGrRbXgMjdAp1k1eRsFKaMSiwHK6ES16UpKLedaxtGGnj5uJH8QeJe6CMZr82DsDzYcpW9sz",
  "key23": "5RR9cHxBvRUBC1SpbqpN8RkADxoavg6zfaBSToU56ti75o5FRyptaFjNj7t2dapJ4YVt7YHpc48wtxKXCL5qRspg",
  "key24": "NkTxaW2ARpJ8fRqTZu4MKLpxup7Cg3BBw5vA1ew1pXNErgRdH155KhYptoxaRUKtDfWX7Wm8k58bFJo8ErW7Yf3",
  "key25": "5qfHoB693VfYSBDGM8X6tmCoNBRy4sEtbvzPFaPzbbj7dr4uJ9Zu9neQVbNZEbR4T6cNJjWwYPKb9bE5jxc9bRxZ",
  "key26": "5nXcU7Q1Hn9pgLm3cukGqiHBZqHfkDsaxPmbuaq1kZXSZJgnCgwypm9uV7genkM5P5RQzkSjvXvUQEj3Zr9gSLky",
  "key27": "5FByZkagKYcyxTpE6ob7WnPz4HMESgo89xwV3uXmMEjBBkNEW37QbfvFnNFZA4QTdqTnbi1taSWBQqu5UmkDyM45",
  "key28": "3SQt8tzL14XtRkdaN1HB3rW6P21e7gQbNphs5yHXGdeB8C6deZcgYvkdT5U8NvEqNrFYe77SSE7Mm2Lxwy1PNyek",
  "key29": "LbCEybUhD1r51caH6yxxJvmt7QLEADiwWT3KnPYLL37QeqdJXhvUJMzurcLj8VPm74K9SFRxUkEwxJTgDpkzxwm",
  "key30": "2HbBjcgMsotySxumYz7BoRNW7aCMSpZyV3XUmAazqSgGjpUNNPhrBc8LDKN2qdQiCrBofEyiNCbzDT7YCHRaPifQ",
  "key31": "2RNa5WaiZ94HPhAik6dLEggSnQmaVdRyp5KKPJHW4P3Tr8cDLAsSAopqTxEQSEB9G3RSYLxwPhwBSHptajTZ52r3",
  "key32": "4SKEa8CuGFP1wXzsSYLvF68YQZm28mUwAPNa7hyLCf81pJzJ3xXVpi5tJVkRwzZKvd9EgSwUahTmoTXA379LbsQJ",
  "key33": "3M2ngNfeh27yRWms2W2rySV7hjgkLDqFq7dZJnnQpps7RSGqseYoYEQmMfsy35Z3yfVmSaDG8RZ31Rjdui7shU61",
  "key34": "m6Daj4PJbnSUdTtmocjP5y6GxnbC7GXKK3V5TnphDJFq9TMWVEy7gkTTXJhDH1tKbTgzB8FUK4FCdYbTkB8uxGt",
  "key35": "3w6zM8x14BQNuvPdRUfbuXg6Ko5N6Q1ebio5AnerJ2AydKwMmhTPHNdbBfvkwBjP9oUJ5rp7kCFAD2w4ori2nAhf",
  "key36": "4frKRMUi3Kgnh2X8pgqvf22eDCtHccmB6ukedaY1ZcpQdQS5ZtzA3itnRYHnhoAhYxtNC85jHqEUREi8H3xQcr2g",
  "key37": "4SiMd8wE1bhWkAzrGgkG9a8AuiwxKV3snLwd1N4ALgMZzXFV2HQcPkapvqDYRNiSU9WFUwu5UUMAJtYEU5gsNESS",
  "key38": "5TQBDRn5jsYevtVbQsRWZN198NRqveGgKDFCKjAtQe2YULmaR2BjkgAuodkWEcHpAUYmC7dTeJXHouaZbZReDJh7",
  "key39": "2zc2pX5aqAM1Ab7eHvxWe6Mt3PZrTnsepbKE7zvcBUoCphkSChXc7uXZ7fL8CNTyNNr6cUSfQsxpwpx7DM2xfm2g",
  "key40": "3bx3fcF7fWaezdEQeDS2AShY3Pkr6e5FsiEFgujmQAjKecvrLNDgZhb2NjJkerRcoFobURWxLstdTLtkYDmaSaQv",
  "key41": "5J1LGZaJkEDKToFFEnBZVeeDKkWy5SsfmFpB8Gq5DfnpttiKDaprXBYZCUPcbTtQZPPsdgawprgy7cPAXMQcRquh"
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
