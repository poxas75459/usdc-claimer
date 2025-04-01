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
    "4UREXHM1XTa4Bkgo8ubciGWAeW6yVkcTEkRB1Yd9zRPW5WGqVbgnzmTYKPkkssrDDZTNeWbKqnciuUa9Mc8aEgSY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PuYFh1secdmGUSaB16DhTWp1c4P4Ctijcbswra19RCneLggURULnWVPWgbzynPN385fd8YRePmQF1pitKfyH3RW",
  "key1": "62hvbjP75FoFyqWeJfxzpUScW4qWzP7z4oUfLf2tBWkc32WfqLLHex57fvtwgmJ2AhH2PHapjSgYLxFCGqvctibD",
  "key2": "3oswC6RNKwJPgz4TPm7PpXuPjD1MX9coyTXQTbPhGtn4spSaBGYEJw7pHT9eQr4kmba8Z9CAt9kvGQkawM7bbyx5",
  "key3": "4JW5vepN2uDJ8MCxB3jFAs8VTokumRmm4qx6PRHt9rx8PCAa4khserMRQWNiuZG6ZpkGx2cc38Lmq5yKQisf51NR",
  "key4": "2QUFPQ2bW1114Rk1UNJurR15foMdCP26u3xz6FagaNSzK8t2H78JKKpeeQnDZWDuB1EZpawwjKjE85gs7V4Sbip6",
  "key5": "45JKNPoXJu7GYbpkfkKogiXYgy8HQ7asuNzArNwDC63zV3jfibHeR2h6hQ8DRVV635yVqoq8jwB3BG26Lo9vC8h3",
  "key6": "2mHNvegxZrUJtbGY2MCFGJjFJov1uyLEKrcwntUa31d7sWhg8MMg35YiSQgx3UabrhQktPT92dDxbPLx4sumRKwa",
  "key7": "5U3wQxnezEZj5Sxs1b9MRSGVhJ6vewj6SPBpm6rT68Sxg5Q8cNjNk34XCvwNrrsPfyG9dwQ9P5Yad1ufuf2Aj9b9",
  "key8": "5cnpyxNp827faSAnxFZbbKGRcPoqv8ejctoEM64fYF8Cc9jSnKyzkPomuX5Jq19o6HxK8YV4a2f6J3J8hViLQUWU",
  "key9": "4c6wdkNYbBbbms2q7vFyPXeR7rXA1Qdsmbgff8umHd8TrF45J7RFsMR2Kp34m8FQ5euNs7rtEBafEy2A8XynHedJ",
  "key10": "3tqYrGjpzztNNbJkLB1isTr4BvUpFJu4ZHZgVreqwePfX6XSegYkcG8TP9FQXTnzD11V7XDQ3kgCWFsJhP3ycMTe",
  "key11": "3Zba74puQEyyY5Vy3NQ6aQGqregBob3BFLgmuN35xhY8SPGnJ3h9cmucR1hVKVYXjQZnfcESDSbdLsAGKGixAZva",
  "key12": "HdGDL3jy71Bqo7bnxqTLqbem2ibs6a1hJdSGwfmXiZFa4tAeYGrZZmR84ai2eeLv2RtyGDKT85GDvQ443B1ggSY",
  "key13": "5z9Be8FSNb2wbHAEbcZsiTQ4XbyxKrhGjNB1pCkwM6Qpjov5WfSYc9xbS1ZCG5xpx8h9ybLhjSuYWaKcyAAHvxMN",
  "key14": "MgrMybmPUdXPw84o4jWyYTEa7g5fsMwjvvtKt7TLskf7mzuJg5f2TtGDUcxrcXBwHFH4TEv6kQBHjEfqQzUpY5a",
  "key15": "3Fk2p2GUUZqMW2fRqVWy95SuQLca5rbWGuucSNRzYrvVBcDCZGaQi8RL2k8EYbXxUsACjKb6Ktbx32hL5KGBcJQv",
  "key16": "3cZiFMQBPrH3ExWGtBVn4pSRQqPhCQtgyumtFPDGbFAanf78zhhy1Q5Dq5eMzcXTq9HsNx9ooJheg5kfbkR4HFj5",
  "key17": "9QiwKsvzxVwGRbRvsPufssHjW2B8UWbMGTHiEN7bTTiPyYTiL4p5GjNu1gLdS4fLzNW1TpPtc5CfJhKWxJuC1q6",
  "key18": "4K4W4TsDNQ9DaVqBvAMuFf5esnELJh7gr5V9Eh65TyzyzroSi8CLMUSViSzNRSk76e2LZaMMX2SF5WZoRuMUPcwa",
  "key19": "2NV9zPz7vjzSfoCaTi6FgTd1ZHEwcoYiL2txC6zkw4L4RUYcPsv96KXcH9YsMm1Nr6WNxQT9K2oqfZ37jKA8XVGD",
  "key20": "Hv5C4mdMmvgcgF96Vaha15ZH26eFsrrjyaGf4tSZEMmN9m3rXm36EP35c87tBHgacB78rss3RQZsCQXrnUumpUx",
  "key21": "4y9D4zwfBdgZMwPEJZJGtQQMNXYBczSKms5Bz9d4JNSjiGdKDj5h6C6RiocPMbgyqHNpy3Rp5qhSxQJpwCAfUxfy",
  "key22": "28qhpXDFzff6DV3zZwU2ge2HxFqphr7Kmvtdtnn6rrP6fbz7vPwYWjPEBvEnDcoQ9qpuLEzaXVpxdnXRyx4VvYcm",
  "key23": "3hm2LDKjkGJ5fXM7UWfmVAQiT7F2M6gsMQxGjWRUy33BcqwsS6v1Xnd886Do1xyt6amALNCRDsRGUUTzi3nX35Lh",
  "key24": "27CDshaWRrr3xkiUfoqcnmaHjFTqZobVQxRHZmHfYFktpGGAkyZzasV3or2YvgELXUhXfPLvSbGidD9HGDS4iFPE",
  "key25": "3TC6J1MsuGSAtz9Jyr3Cc9tgpfhBzAGJn1ytSCJrc62UpTMCZmmdryGPmFg2NpT1cncKACxcrMywZ8SvKjDwaZyn",
  "key26": "33xXF8kEbu1znJqyQh5geKYAP7Z5zbiJaXvJc5Em5AV6SwbhdxpMiPmRtqxCU54X5rTwakCcM6rLTSVTqn8h5NU2",
  "key27": "5eFf1qfhngg2uKr2cjastgG5rf74EUqbHY9k7q7b76VAEhP5xKVkkiBrWJQsvJehgMd9gfcCckorwDUwktFtf1gc",
  "key28": "4WrXxe4UqaXiwY8GxPMuUTbaMxiwRtp8M8XGSF65VJE9e7h4YfpfnoX33EEPz3EvT4hpw3zSSUmNSEJNGhg3VzTR",
  "key29": "3XFwzYkrcEPxFRbJnCwd11MnrzLDmT6ASykFcHrVGACsBuSQVn9Wp4SUWfGiZbn733cvuaVUMsavWb1TCUyafDZx",
  "key30": "JRJ9mQgAqKxWhvBtGk2cCStAFGbw3t9Z5rF7HEsupMGdwHtWGZ9LGJ9EgQDsUJXghgfEcHWgfa8jD9HJjjm5fR2",
  "key31": "3EVnAodPRUZQfUFsfeQ5kCMyLAUKaUp9g6j3vJgiX2GJ8XuBKXZ4P84extKAfnHiFTXPmvaWfDYeGCYbK5JHJBtf",
  "key32": "3F4YmirKtwktFd64JrZ1PmNKKqcUmaL6ZYiVveLpeB7uPabxBbSZBvmwTYqismmwoLnqC51RvmECfSmQFhfczzCp",
  "key33": "TXDoBSTxRN7KtVZR8p3jDXkZj3tQJwrpVqhq2941ZXkeQ5dMr3DJNR2gzagyLhQjXpMSv1VUMeE6B2et3VaZd3z",
  "key34": "3cQLdEn5U1bFVbckkvY3bPRspYWB25ck1ana7oDB29apH1FSJyPPK764XHxTriRaj7Bto4SCDbv3aPbKWZzh5MBA",
  "key35": "2VWLK6REZXzaanXfML49CZQG9Reo11qWzrowsPNN3TaF3zbXat2NJgxboJdtj41yyUASWkV44cpMTHAPynStdaSh",
  "key36": "3yfLrzSbecFymVVWxYKD6zp8CsQGXfmKLRfZNvKXMZH1qQ1mC4XtugKfoceJoJUZSBkAvZYxR7SPLb4HGdHNGR16",
  "key37": "5EotRwnVVyDzjyBDmgVCsUyj5e2hDNCW7HBqtRbi3qwTErUnPwfxDuCXoQBJcHM1pVUSkFSUbrE27US5rwtQaKhx",
  "key38": "4JJxEzxEgP6ob4jUBKgYJNafBkPYLbW7cm6SQcqmsaWxby9sxTk4syABZy7rKczwcQbYukp3hXyZmW7D1DBSmD7a",
  "key39": "3thn88crD4mLLw7BZpM7ubavQ9RFftQ9eB9ETG3YmSbZ8niqm5gLeRFrC6PRDVbxBUXTFZ4m5AuCwaCDuagyBHSU",
  "key40": "2KVJNE8iKPXdCDpn1ySfe91pPbbX85G85VjYZohh28eZLNAUq6TW4QZJQfWEr8pZqUCPgEEUSdC66SNhBhowumGa",
  "key41": "i2tkeAG1UGmMTbgthtnWb4XV3az4BesLt7zc8UMxSfmJWAbjKwkA4QGXyk2FUofbQF5E3JBhyeAacFdVYTquFRb",
  "key42": "Vp4Az1KAofwZwWUo5Na3arzXBCGc31JXuyM4NpE4phtXrPJo26FTH9WqieD7KHZbWVtGNztcGY4NXhzAxLQP4Aw",
  "key43": "4XgvNpYoiB2T3ZcyN918G5tF7KHbYCShV6R8YkeSUyUSkpiDJy2Zkh3gytFVUw7qsDik3qQz3jcTRZE9dZdcGmEc",
  "key44": "XCcH1zf7rEHShU5Kw38AFCfUNsBYXXw4L3PKPqzSNipc2j7iTRYytpFoxXqv4HivwTKDFassomp4JY8qStgQo2q",
  "key45": "5ePzeP1hsk8masEoCpYyHDS3r4xUhf72wzhEyUckBLJHXgN2ifABgGUqsnrKht8G1VibGJYcAbNPn21mWonBDjV",
  "key46": "3vYEtF23Ltpy9PP7NxyHN2ByqaxtniUd31pw68DyyQGCHmQ3gZ5uP3KDsykb8MYSSptRRDpknWuT6eukuAUtoTUk",
  "key47": "22H114VdF7Ho39LnenJw4ndZrFnRKJCLtUT5PU25swdwkbH2RwgaFDV1JTqmBZbZY2JLf4ySn7ezQYzwhT3aB2HL",
  "key48": "5y1Jmx9M6qyo1NxQMDbGku2cq9fjK4S3TU71VHStwH5Yr8qSWY73f6FfVrUNoh7n3KJzpQCgYi67cXSChJE5svAe"
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
