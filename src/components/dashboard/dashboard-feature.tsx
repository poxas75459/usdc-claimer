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
    "5PvoPwaQAD5238xxQUU7J2W1WBj4Y6StLsCjS7v7yCr4BJkKLUThj1t5Rw2ciuYubCb5jyhY16gkoqkECoZVRfGP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pg4rY5AYryeSggHb9YzATogodKMcxrwf6jQBVXYQu8FP91CZfLCEfaLgETcAkwW7Ek2gnxPSUFDPn5V1MkYpGHD",
  "key1": "2tMfzxt1WfLjtRrDaZnphq2FCytg5h2Q8yRQH9L4xKPTDhCJMFDXQF5f779k9tBZnpHVvc8CHykdV7qywuDposL1",
  "key2": "4WeZeuzKeTp1z1ECJU5bNcAHt5aoq6UiUHVuoDwjTsrCjTfDU1P7yV42n8S8MJLT2kvyFEZWrYbYKKzfqGaaGFXr",
  "key3": "39ja2Cqsvuj2AvSR8yQRC6awiit2i1Pt1iKvdsj79iryEidWEgYBjRR9HKNYYgZWDSRVsEhDNiCjAj6mcLnP6BZN",
  "key4": "2Pc8XiBQEHUmeeW9itw6WAeWPqty2Vte2mtZMqjyAkKS8ENkhTGfcH2eTLMrK1vHW5W7qekaZ6yGmWaUnmdFh2UY",
  "key5": "5DMBA3a4cVyFeEiqYDUcXuf31rMtzeAgSfoHaTYfrWxrCpZDyacvphTPkqWQyUR15pajndBPLTYLXvah1bznqRXB",
  "key6": "4rmNdBUQQ1Jz2y6P39ythYcy71H9X4yGbV1Xu1BUgwNcEay16tMojN2cNGid9eMThBLaV2gMnWS3tKY1b3oPzQuC",
  "key7": "5dazfuTzJWcwZdTxB3niq8XXbrdn2D2p9aguU7znhirZbMMGh5VJWtyJTyE6bxPeJACf7uPkPyWeLF9tYTL1KUQ5",
  "key8": "2PjtcBENGV2oK94SHoKtgEztLYqb2Nb4N8aGjRGjYoaAfT3yPGvSZkwsNaXBGXqzD7GCdf2H8WzwvVtzJMAjyiQj",
  "key9": "2wYsGRbiwyRva6ozBbuQo2p3uLLijg3KGi5gDhP26x5XqsZmJ2ZG5z2Y2LkFtpFnyJMW5m9YPoGiLSAXTXymRAvz",
  "key10": "4zqn3ii32F5jPBeAfBPTXRYp2JBrnMEqZR6jtdhGXRmNLnzRgzzchimNj44wJkamyhKsKNsDo6GgUnSujNGsynr5",
  "key11": "24nYH3e8fy93qmniKT92WfNCgWxjHgQHEwwvLnuJmDejrCyVtBjreCvnawSzyLYVGsjtZqB85TP4NsUKr93dtpBz",
  "key12": "5TYqPyqYm31kQoRp7Em744583K9BimpHtC96YBhDFh5nLA4P8oLpec28TRQCrkJ26VUp3ma4YLG9GKJWRcSoRxgW",
  "key13": "2Xi2rL6iy4v7jABQnoEH6yhwLVxGmX6DAV2guwoYiP5cpPSdJ4eTTq5d3RgQTkYsMpSvzvVgSGTYKmmw9V28zvBb",
  "key14": "TF4zHkqdksqQRLznvAcPcFoy6F5BTVeFHzUHHMsdFQRGRbnJ2oSqsB6ptxU6bChTBAGRXK31Aa1ZNUUNKyPMnyt",
  "key15": "32fopw6KKvEJ3u4ZetRp9Krx6QQkcNSfzz18oHWNkwDV811CY4touDCFD4bwrimJzMgf9wEqPFCxRytxgzwjgVhe",
  "key16": "3q1wbk6QVS9Kqx4DSF5Ci77Vd9LtveWHGocbKtBTJjLG8ttu98bD2nfQmX9qyGNozVE4c33CgoN58h6HTZDLPhwp",
  "key17": "kLTqug5sPxQ999Emsrvuor1dYmLxKXgD9Svv1oAgqGXhLZ7zV3E4o5NMa7ZM6F3eLo3zqMFmapPGb7YqkFKcAtQ",
  "key18": "PfXiCmXwMKh7fF2EWZuUnLNUq18CAaLhV1J5iZWEiVkEqA2hHp7w41Np6Ce8EvBSY5x7Sb9A2z1pKDX3EgGgHpG",
  "key19": "5iBGbHB7c58pPShU2kuTSoY4NnnsBjpS8pHyy9iUDsdPRbsUfJKj43WYNp5CGZgPQjtrkn78Doj37BWXU9FgmGH2",
  "key20": "hFF8XAQaFMQe1B2mYEUW7ynMsbikLWUsWFZVv1EjbZmsy4yjbRkBicaG1DqQiEXwcSKER4nKQmT69dca6mpRxwT",
  "key21": "2ZC9uxsbgmQ1qFLRqhTEVZQ2TciBB5Bvn9RsRqWWiZscSrqA1YyoWqBd83gTWYZiGQwvhqkcitxdc1uh8hUbky89",
  "key22": "5PpmNNGwEDFMZJZcLvyxMDJ6cKWYxA2UD8j7NNxChwX5Lz7m3UyN7doVWXEfngJpr9UNJwV5RvMiFChbXQfHdMfd",
  "key23": "2iW5PFaFrFmuwkCcTs19BcPaWvGDERhXVkVNtrne5j4EEeAhNov6XneNuPxtaSoDpnbMFnfs8PfJJSr5DVvCMQSf",
  "key24": "5L1wW5zKWe5FYvZi5jcKewyUgNgF1b8zNkndnwu9bGmTyxM3f1vm9pMyG4qM5cCRGWXRYCnE1RYb7bda4Co5nKWB",
  "key25": "37seEGyvyyw47XCqLZVwEapzveTAkHxNww7D3CpL8o7UKssKSHxeEptSicUKjeLHui45qGTpzETCpEhwhT4wmuTo",
  "key26": "2pmML4D9xTPfGv7S269Ukewqd6nMaJoxbwCvs4szbwrti8j82v5j8tAp4rQHCMbLUs5y9zQ9ss9fEtdM7dcp26jB",
  "key27": "Nuy25NA9wPuFJYxpJ82r8ypTMxJEdS2BXmqTkoYxcJcfvjpYysoopBCNNUniZ685kGUdpJKYAFpafNHNjMVmGg9",
  "key28": "2EbLctzepPEmaFrQvB7pHhCRtthfPELQomDbedMeEPwPVSgvxSWmwvXGoLvMcoPj8w1HDYo18wjosxRrywUQeC4r",
  "key29": "5TaVzr4agrRJeBsxjUJskUhFpWnjhxoVrGcrw2SFqnQJxqrcMPRYq3amQPa7mY4iw5mRHodr9e8JeV7fA1zwuT5d",
  "key30": "4f5amxw91RNgxH7HRU5AWGjqWyi6bRJJ9TRsByYZ4HjRAgHw6KTeiw77QkR9qHadTSEoiftJRqaYP43vjYgW8Ha7",
  "key31": "gmK6YqJ9YK7GTiXUy3fy2gdSaYh3dFQWwUyuiec8KNsLx86TgMHCHxd36hVrzW1Lk9izpc1RUrydJxpMTFfH9t7",
  "key32": "2nPzuw9TuiQ4m3eSwrY7HM5jm4Q9bURf583SebhW1GNve2S4brghE8RLxYDWgxTP5UHTamBTEsyqz596Taf3AzgN",
  "key33": "5KZSWkL1brQkSs2nDq8nMDcpffX1gh94uFy1E2f2X2b7JqJgsmNiYzqaW8dknh4L8XGjansD16rjdXJhXozhLZqp",
  "key34": "4zWoprWJQJgqo1r89cdLcB3rYYke3fnmJL3b3YLU5vvo7TvWFR3Gk9ySBQ3qYen3c3fm1hmyq2m1PKrBUXkWSb2p",
  "key35": "5rtRD2cYE3WQfKMNWU1DDwDw1cdC5sqhL6jUxwNDTvZiyAGB4BmKFJ3D7WSZGuGWjGGposy7rsvnzUmtcA1hkRK8",
  "key36": "5wGsY5wCZ7YTNSmp8tkUX3VnGxBc3P9wzuLKVvCs3fcMj5g7ryLF8e6ap66gQ5XZFn1wU4iRZ7uiZn4dobrz4Fsu",
  "key37": "2B7LbTyqE1kRTwhGciknSX9eDC3jmEdgG7evvhWetZ5qYNhochmdQjg9PGRPZVxzmMTYsd3NFkAPjhwsTfp9i3PL",
  "key38": "4pbM4khUNFkPgNmTGXB4HgwH7pdLGCVvXKCGUkTkzqP9LPjkk4Lntrcaw9aXzT7TK4xcoBHc8s3yPJfEDwbxrY42",
  "key39": "DTVZX1zxnhZhPLB1M42sWnY48aKEB2cWWauUgj99TTtS9toEyJw73Zr4cbc9CyewUdhtGLYuKhohjvamriZoxaE",
  "key40": "4fNjMsBxz56m6Z8wPXjdjPMCmPehGCGtg8DqGibY3tvXcDpiwFbgigJDMgBN2c84gD81aFk595K73tspEgkka9Yp",
  "key41": "T8vvuyMtJbgRPNRPvPDFGUr7FTsdStaDJWz1RWhhU1ELTmwEtNHvUJfpDc34YyvufUTvbejiE4iAy7uap1KBZQk",
  "key42": "5gb8qPeFMQ3BM9kVNcHwngDoEjwXJvLjmWEYyq6VNnDu4pxrJB8ZNeNimMpmvSxcEnYwPZWHGLfo3mR91RYzcKum",
  "key43": "XtqHrhWipuXnbGXSF1164DsgzDsY1sFd8uptEsbAU42SfArDMJJr2hgxE8yfDqWbhz1m5r5nkbUUaogTMgioDh7",
  "key44": "2KC6yRMP2QjVfu2FyP9psD6jSeNL8tZ4yFuszbiVw6sKzmaf53omHhZjSKxLynMBas8g6WKRkRLotiyXvsGaacGX",
  "key45": "5D4cDFAL676GcsAMEyaT6GLbcDw3cWazvtyBuyLvvKRiyit5173vaB8cLDGqLnr4Xw22ipHEZvqv5F1bnwuuPMwh"
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
