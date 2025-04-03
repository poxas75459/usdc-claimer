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
    "3NUZPPz2XCTxoMc2cJ277kBB6D9j1k5r36juyPSxE7PGWCyTFSSCjUjMdkcZKdx4PjigHJEuDV3C58JzDW49jRdw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e6EMaKegF1QSsMAJfJPp6qQZ7p8pJhcr8qi84puj4E2gcFSxRTCZL4PvJmfsb9u32a7cpXAz29biiJjN1UCh3Wz",
  "key1": "5ED5aJhvL9hmDCknbonWeb57fgsXZ15eAUpaAYq2X9WutjJoJjc8oCfrsGYpeQKYtCyEKZy9jWWJiRwzwGQJYrXL",
  "key2": "4onPrs4DYVBAsN3nCLY4YYuGE38QtCVxUWN8f7foDb23fPpeEjUvRKnVh4h3GTDhLDY4GvM4frSiwfkr7jK27cCE",
  "key3": "61rN3PGg1PpK9nStBAAuYCf1iDC1bYHwdE48HEjnFe9qUAJm6JQH9GMBwk1KkDtC7Xi783q6tDkSTpGhzSFLfq1x",
  "key4": "u2pynh6ydF4PUfH91tX5T698FBnSNKCX2vJbVnMxBwikLscSPZgymKRfvhaggeQGpgftwzxZ87KbeKE5TNcZmJW",
  "key5": "45kMtJNAGtKZEini4A2VywSzXkppDNkm8TR4A2B1uaknc7bJXocxfvkpafrPYRZYLLQzwUJZSd2faZ7CfxHBcgB9",
  "key6": "4DXD1JudhjC54gnKmXvXnM7XaFDcYufC3poWgHYWew8kZNdDsttz3SououAR4sUEVT8rqhDKx86g8KiM7KjK61nk",
  "key7": "38x9UJcm2Ev4eGtAkob2uaKfj2r8X2PgxF6qZ3BLEHNb2Z1Wvs2cMndQ4TF41Gz5ZgAs3udiqa22DpCaF1xzwdwW",
  "key8": "2BFbFEKLWLUSU8mwdMV4kQN2xqmoePuoJSdztXK3w6MZYjvqGLtxXknSdfaLcpG3o5RWQM7kfHhQN5AgKRJoHzDn",
  "key9": "3qr4atLhabeFoUex8FuxeKhFubiDeWFqFYeTvzCs5x73WDTW1GQvrAsMxDYCzoTYTy6DUnNysgV4vcGcgzi65smM",
  "key10": "3CLQyuJPFmsYx6gZC36HuN1ymP4eMMrkPCrmvFT5931VUeAo3GTKchhgdfV5WhQffwHqnQZRrA7u6MGiX5N26KAU",
  "key11": "5DEW94FGazzL93pd3RNhYYHYm1Ag8go4bpwFr4B2JkXcc1t8gkrcd7oq6jYrnMHeEFN3LUpE9dxKo3pHF2hLTeuW",
  "key12": "5iH7Lnzbj6C8xTYFZzkoAQou8uBm9AKLrrm3EJr7Csz74CuyGe3EmAzkMWA9gi39YhtBiMpBncz7VK1ViUtfQfd6",
  "key13": "3aUJRMnystMGWC7YwkHPPebtWKkmyh3AME5xvw8UqNCZikpSDF9h12sGpy8ugwYPutWseQDFh1ue46jJHPJMJjKF",
  "key14": "4xpzmWXojEYgGB2erC3ou21BMA5H84SdffjpEeNMuCc7dkKJAwLwBY6rYRacMXQCmTtoTtu1UG5ERuLpK86iBzHN",
  "key15": "2ogAjQCdxgQwjL1jNVhyyzRrfQmCJuAQz3hf1o1deCfEpzoUmH7jo4ydjGVxKfgvhXAw6fsg39aJ6YG5BEviTb7W",
  "key16": "5G9VBqaARvj8BPcaucFimsdBzjC3D3muae5aZcftshFraw2v49ywQDQiL1zU9rdVVhJq6cK8fvCFoPPZDK6wWoNW",
  "key17": "4k9qSoQCYcSEJbwFskhkmdrzydJsaQBFLxyMoUjt7bRPwoRBBHm7BHsGmAUGGrZmAVYEQq4MSTwLcP5KJpmyuWtj",
  "key18": "5XT9YKSWvHD97XDwNkhoaVmR5MscpgZBoz6cRxxEvpunEKwnxtVxKQoEdwU9Uz1LhNr2adLtMdaDcaPnPP3oWqps",
  "key19": "4t8Bb5VFuN55Y2Cq6WdbrqaXouuSxBhzqAAGmAoBM6droZADnar77dbac71ppD3HTz6D9ZFnBuwZLfoK27SQ1t64",
  "key20": "42u4w7XYcgjNpkmNJDWeoHVbN3JqBFYt9trAJbRPxGApmL8Rfqayprq6nbep89iQSUdmpnD9zoPELrgiS4AV31ws",
  "key21": "2RGNv1j7vuobsAKNxS2xYvpBXPH3URSFtrwqvohXooTZ5SsGttjjHsAxSDur2Qgs2Acjb3ZjQukvYjV5QThf8cCc",
  "key22": "2h5Kqsxsgy2wVUg6SqkdPgDFwu8Mstsx2CeFHoZhkYD5p7aAnVJeC2H3nGt5abKQrEiuT6LRR6T2Myo9QjLbXFP8",
  "key23": "22Yug19B68S3ZwGjqXRjnXhHLehaHE8vWiML6A5Eby3LqS8PxqUHanFM5fKGg5Pvoo33fs6joKvoin1tbbRubaxc",
  "key24": "56oTgrupHeXjAFZChhDm49zdRYUV65afZyRc1XoQjBtmyyrNCywhGoSpuJbyKVfpmVh33jjHqNuxQ4ogBfP8NXGx",
  "key25": "4duADujzX7wQ37oSq6szRBSXT4zkoMqnB5gD6xxk949NKkK8gMx9kysDi8XBVZj6GTqbmgBy9oB5SuiuijHWvXhC",
  "key26": "UYv1SfQAr2TMgi87uHiRDBVjFKdYf2iEj8v7XVstiYqFS9xRJyTwqe15ZtMo4x98HCk5RHg2rPFYqkUQ3AMyA1w",
  "key27": "4hLjCm8SmdpHjjHWku1bYm2rPYVfrZn7gu2FCbdxYBKD7udBL9XAAaFcqUVQyKg9GJrKgsFDnG2LNxgAi9APr5kq",
  "key28": "4VCUb8VJcMnTbbdJGiSwiQCBkdBuapNNp4oTid7v13YmY854HQM4966K89nj7EyBejcXmgDtAJ8rv2sGtHKDhtwa",
  "key29": "36uRywrhAx3W9Y4LzRBsqNsrWjet8EQs8N2uaprh8Ae6pr2AM1HoQkYnEgWDJNNMXgbFpV91WcZzP3ymdMTCHEZC",
  "key30": "32LcKXuWhJoSjRrBPmKx3b5Cado2YRk3cvtTzSFVs4dd416wVbrcaoSC2sG8VDouSca934zoCF5VY3BtKAxTECdA",
  "key31": "5EQNbvFXD11TbDCukB6cAPYsj6CbFhkc4BHUBD3K45WyRTc49utp2avRw45y41J8wXgWbtAqzZnQPoGY467xfkQ8",
  "key32": "5GAwd3MSMGpjMfg74n7AYKntcmEKfXTo2piXZ6JcJytBVHkhxJHoeJvG9CRAGu6HiLZgoeety7Q9tKLhzsAvp4mM",
  "key33": "64MBziSx16HyihCtEFi6DgGvmeQTbeisNNNGTfqWrumvgLScQaptMWoKindSVC2JQ7ucCp5JHnkZ3p1Swer7wVni",
  "key34": "4tq4C18Q2mjoqL64RZgjVUNmrkV2JsGbQWDiRmEFVZjc4u1f6TY8AUFvusGycgsUGAhRkn34a5jk6wHDw5zvZg6q",
  "key35": "uNDEgF4ormndJHTwWFiuVBPFvXiKHixUH7SnXj7cGmFppmZbYBnRGknDMFm2dJVoEMp4TmiCEBUcJr5nDEgcD4C",
  "key36": "362y7K5QLEpXFUDYNnKaPPNaaKm6HPb5TW99svSQpVMZawKitivwDevAFCGNmp1V9sjyL89zb2zmxaV3eKzS8N62",
  "key37": "2HGswMGpNhY5KRHMFbmidegK6aSa7abifa99GSKBRxZpoim5tZSoZ1L9bDzKANubUYtsSvDS9HC16mwuYWenNHFE",
  "key38": "3njSSVtroRL6Tx4AZZcXAKsSi2Koa3hAJjadXZEAPp5xAM32xrvxsWCPQPB1a6fq56r2JSxU6HQqNnhBkKxBVwsL",
  "key39": "3Wzv6V5hkqpStr2GAWMjCrbVnU9o9G9Ebav51bGXMb21b6mjCEJ9ixkCQ4sqfb26qsoShoXnyzLbsiHGj8tKFLTn",
  "key40": "2cYoQuhgpJU8S5FY7H55SsA8wYj1uQQc8PXCKb8FjUZkAtkaPHxM9fAeig5e4ju3Eutue35Q9kTXfM2GkogwSnkc",
  "key41": "XoxUjw3Cc2uEDsvtWUSjQMbpG1v5wAH6U9WJYm2x1bUFtkrYT2Dgvqotxfmx2BbDJaQMb4SXaef5H6Zu2AWF9Eq",
  "key42": "5xmR1wpyyZnwqGf88PNY9AUkVL6pkqZYfTv3NtTNxjT9xMff5EUWJ4exgPt3S97L7v4wA9GZfsacJppu2GoJ3VgY",
  "key43": "448potYV9QhrgGhoGkn4exaxGcg3GrkqVUA2WHewRqZG3dnvfHeBt2mBprhauauKL7vy14HGGDYh5gXvRatRg8yu"
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
