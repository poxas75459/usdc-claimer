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
    "3SjK19XtP73AhgKN1cLCSMftQEbgF8dMqaKuimNZtkXRqCF3n7hRXLoF6rkJ79W6rBcDibq4WvuzNNM7YwDF73jr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5umDqi7uxCxv6rVT1tLzd7KnPPrw9VjViVB2EazcwZBpTeCm2tSMH4JLyAxCLT942cY8kek6WG6avWaEhjspeo1r",
  "key1": "4KuRotoLkNdNSBCpqA8anMo841sxViqyiKuM7UL7ZCvjx7ksq5L2aQ1mskKSoJHJcaTFmMx5E6eiHZPnoMyp3hBP",
  "key2": "pNeD4bhSvnzYGCKTdr7tDCNw835D7GWpYKcV6PM4r58ABQFH4hzbnY1yJCCyvBNSg1uhnBau9Gs2S53gDuwNp7t",
  "key3": "5yiD54ZskcaFQo7AonHVoAQTUZwd4swy2s3wE419MQncuxku7Sv9h6BEjV8BkTpykqtwQpa6eEA3wrfmzZorwuyz",
  "key4": "3J3dvFJd34me8aazB5TQ4A8r398VvfZ5wkmCke3HCuM8TCE6HnkJFpY7SWaqVGqiuNPXoagXscQ8emczciJUoZNz",
  "key5": "55xHwpSQKhdsx75E7LEzg1jKSfy8CnijzAeyN2kvXqbGvecpNWfXxFqCLpoZGCNXAAXse5Hai8DQyw6iMZVWFgin",
  "key6": "qCMmv7a1ZNC44aXa9a52izBbXqoQib13SgakQ5WpsU3rNLABcK3AeUreKpQxtsykuConz8DTLKEhNMFM46EgX9p",
  "key7": "2XfYXMNbusTUVKUzxvjWF9qeaqf17T6gTmz5VFEsM6nHTu2oND8LN3gj4DSaEp2jwWzzQD59NwGsQceqTnR7WDDu",
  "key8": "3aHN5i9aqxSvWYz1WUMLkmqrW2indkpg1VKJ56GdP4v1TFEKmL1EBTBFNPURd6FunWhRwCC2ipvbwzmPFAcNrD5m",
  "key9": "3wJrqqdsUWrGdDKjy5QKZmfZxMmKZM4VTJK3ajMz5oqjb8h9R14bCpkt2rVJFT97PvYTijv3c2FZMhgbBrZsyk6d",
  "key10": "5kaq9AF242Jwobvg6xee5Tchq7RkCLm8seV3C94qxtYcpEbCzqecGXiNb1wRLkbVXUX6Cw7BaGMaYuJmYgM2EoLY",
  "key11": "4hycQZ7hD1hnQyzZYApqrQHYAUaHb6NcvVTNhL9tKDwPncLV9keGvUtZw9Ett9asxcrTCZn7vgaPgNDWj8uGNnXk",
  "key12": "4FAKEd29pxxEaSQEk5c6Uz6DC9xKxvvE8kAGeYJ6toxA4S5b6Qgjgedi3s4zA4ZBpSZtRZukztYkaMQBGHTZ9QNv",
  "key13": "9RfLzxgMKudHyCfCw8HCmEtrSsaqAhrtwgdcxVp7a11DHSt6ZJAoemMj9rJ2g6rvWr352XQs4JuLsVGsRntTHBt",
  "key14": "42Hajh4y2bK97EwyfMiFXqjauY36orsKn8zrqLtGCoTAW1bh46BumhaPZkP8T5chi3P278t4d5dpd5b3Hy75Qyss",
  "key15": "5ZpkA3Xn72xBAbcBsuYSRXawtvqhEnbuiR1NXw9KSJRmJYtqNCXWbGVTJ2LhqxC53bhz8ETCB5oP8EHhoGR9sFkv",
  "key16": "5UEkAexTyjyBtpAAHs3SQtKQouZfKeXe7krxZWgdGZsT93p5wfNEKDT31RyKRsc8HbidSQy3vGnniJRWc7oBzNYH",
  "key17": "26rfTeP7c1F5JfdnC8iYwymRMdY4p2N2eBJqZ1N55kNxssgR4sPBRGcYVLZiNvaEZYQEkVk7P8h2Thra4o4uV4ou",
  "key18": "2YCgTtY6VFoDwc3uaKAdQMYUKwvvVGF6qmJEcanrrsQ1NkPjeS14h7PVtP3ANLNsYPZuToTFe7GXZ5tgUGgDzQB2",
  "key19": "2RA9evxvfBUSp9bLGEfQTHNkSymWpmuwAzKELNZMmjS8aQXMJ7TtpNqCG7iuMT54mAMhPPETJrPRfAR2QmHZ2BFe",
  "key20": "57hgsuef5jzSLfpVHgBivGUDxzYL5XSXTpYtBRYHw694WBKgG6uUfYgPZ5vfFNR4NB78CeEvLmeQjyhXLMmSHeE8",
  "key21": "4Jviv5hcGb91oT5WDx3xEmPbwsqrStEAx2QnmSFTtN8HsmNDjqj3C5jJTxJ5oLwcug7qTyaQ3z4zziuEo3B3RBsk",
  "key22": "59yqT2PbjVuNY2eDead1pQvW4h7S58AMcSaXakcmfciVkCwNdcSGEXGZTb4hgwQwZULKytuRiD7WAuAiHrgqaHJr",
  "key23": "2yJjJTkPMU9iWMd5mRUj12HRGjN2cBJ39GCeYZYdvMbpm46gdCUf7JVgN7J9urdZdQ7McTXJ27ve5QkBayS6KzrQ",
  "key24": "23deFzJKJiAh6cQ79Ko5UjzcwENnYjb5WsJJPry6tC74XHJH3W3FPuyuCQ9f47r6UMFPhVccNQHHqpeCqPAe5Cgm",
  "key25": "2aJeRB2g1Tag7KhSUhKMXkVEZZSmQKMF15HeTTd3G9gxJwKyMu9BEa2kwt7PzMuqRW5niAuREVVT7xrjG8LbzSjB",
  "key26": "3Y3NEwtNkeonPrZkBH7zvgs6JDYdL9ST7pkv7NXV9sCst6WvxUSoNp2NbdZMdKBwnCq9pjeEFA5XPy8yABAw2MWV",
  "key27": "5RvaECcxmt5LRL2zAb47fCqEvT9HtMtaHMJcSa4sLGfFSag6EZzUppciYdX9A5vkxyQeXMo3x7jpitxHzKvm4yFX",
  "key28": "4bDfdVtNS7ayqRPRwBaaKmcnTSkTFk92Kk3xRxVWpSjZTvbPKYxR91EKaRLUdVLnsCTrPpTwBoRfVtJk2J2NgUq7",
  "key29": "yDxXh1dZgfSFaJ7Ugw23ZDRPpho17B8S6rMFqWdq9efTLgAqEsZY8gT7q7eK8fnRUw6nfxXXu6wzur3qvX9Gzji",
  "key30": "3hkduGd9psd8ny58n5DT6uBEp3ChdH3rC7hsVgkpw8Z7sY5XS3iHSr1hgMoUH5stEc1Gbs7HT8C8VGNeLXdXEtPU",
  "key31": "4v2s9Gty6uU1cEYpwvGL9dbBcyXfaW4mWxZL8rBnc4wWrhs9SiYv8tnUzQ5s9EaHRd7RyHoQQsyhBWqyaUPrjN1a",
  "key32": "sBgGToihLJKti1i7fUfAkCeSvhbaLsEA13Spvz2RnAxBto2dKyqRAXscCpQ91XxmsUCsdhjpKywBfwPBYMT3uKa",
  "key33": "2djSh8xQQWHuLowuBGj1qjEkT2gt2n3VkmzEXYmoUwgZvjpwU3EFVJuydZffVLCkrzzozSaBNmFbeHjhQJx2wbTp",
  "key34": "3UdpQeKso44QnjDFSSHKKk3WSWygGjhDpbrZem2HZGi1G7gJN5WfMjyaNKxHpwHDwsnt4e5jJAvSZUhy8jPpi2p1",
  "key35": "2L69kZYANzGwTzttgtNjAS3hDWJNhAdEvdVnHmNBiaERXxpeU1jqievrtd17gTsqxThhJG7Muw634wWqvt53D5bb",
  "key36": "LVkq4QcgVrwYeSfL6BzH7r4dCaedyqXiEXohqEQsE7VYqiX2B7em964AYfuk12qFPWTS8b3BSrGDuExFsZLp2rV",
  "key37": "3HgR8e9S8iFW3chqi23kQ1HaJfSptRkfdqEzxC8md2mwGo5spqhVm8WQqsmucHCV59ptAWmfqcLhZNFw8swWTBga",
  "key38": "5DtwJRhmoMdtCispovgCf5kkepHkjLpDsNivfTFZ3GAFDc2ckS5oHMu5bj3K4dAq46ueUt8hFeSd3Qpr4igkNe42",
  "key39": "3q3wFDypmNh4Q8i719cw45GMxq755UepA9Vk7CN97JvBJtoEpn6oubeofBW3DGnosP77k8dGyu519g1rEa4NhmZj",
  "key40": "2ckUWhb1YiuDSp7SJ43unpKkVggug49MYTd4KqkMEHACKL227n27182wQvSet1sbz21rf6fJQKYrXzwxAYVjs6WS",
  "key41": "495TntxKS6wk2LeSuXc2Gx1DHD97TSS8V515riHiw3yJdUZr5MjmupoeMzTCuEaV8DnJegYaPi4VM6vitdf8KQpx",
  "key42": "5CnhsY75SPLGYmT88BVRadR6kGD3uYmHTigz5uum1SEnmDcT7S5p2LqCbMSWUWSunix1JRZ3jzTKPNf8tssWuAnD"
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
