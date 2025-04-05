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
    "jX4sFXAJrcSyfp6LQEQzESrP6WL7psbKTFg1DZTbf9mUSQfvPXvyRuoCpatSW9mqiAPXjAhVPYj9fzGB19mUChC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "653r98Tq2prGEAvubFvRFGwqdqNbZqTfFCUkhooPUm4zveoQn4hVtroqPBbGx6J9bxxrmLdHe3pn9sLQU98eFopX",
  "key1": "4TNCKa221JaGn9JA3pV3Gp7XUt32VwrcHUdJJK2eD98foPqVY5bYFy9c1MjGU7DE4jNTDjwhTzhDGjvv2us2JKGq",
  "key2": "2RB2CGEzsTjVim8Z3SQcCSmidVcppfjiwxnE8fzx9Cfvdx422riCucRhnSoVEfPoc2oby1FUZZW3i1qZyE64wXj6",
  "key3": "2NNLVT1ZfHNTeRkPxZrVWkLMQKzhoSJxS83EfhShzBNf1nKN4GjTUf9EaL7ZDQFaEkvA8bV7s7aB9NRivx4zc7En",
  "key4": "5b4DC51swzj6inSqn6grzVEaq6iTdSWYvQjU8ov6jan7aYaQhDQGLrpdURCD4vmhVYoq8wp9v3K8QYQ7ytfXkwjQ",
  "key5": "4Mdo4d4CbqCitjLbnPCyLbYFzJ9BChaqsVGyWgcc5cTg9pWrxtMr58qbKPxsoheLo6BGkJSAQykzRemEsWdHh7X6",
  "key6": "JGqfNZQuTf5vMW71FZ8xgBNonNLGzVfWVEqAB3RksKhBhpLM6Gx852y6uK4f2yBZ4BeXznJNaoHtjKGKaWi5hkz",
  "key7": "zN1uNge2YRe3TkXb4AP3ApRojL1VATeQMKnoaJckAfP5p5HgHJ5C4ySAuqFGiwcuJ98789NVq5zzBfbAWzAhPA5",
  "key8": "535jUeHyUUBurYfzrRTAdGPEHBSRTBiJUBRw98xEnsHoqGgW2HZyYaChNsbPLBD93CBY7tSTn9Gw7YefSj4TRpEf",
  "key9": "3RdnhWVkZtbUZwfHaStRYeiRz3GAi5r1xnVzEQ4UqeJzhARsVUB3Wy4UPpQx2S3h7GXwSnfFAAajdSuhN4eg47x1",
  "key10": "3gh89xoiq3yYcwwWrfL1gqMrjjGRhEsjLb9uziHKF8YnDKCbLzib47FTsqC6J5aVhavDxHfJPyQrmX5hz58Tj6TZ",
  "key11": "4DdLFag8stxgETH6G2aes5ypJmHn2rnpbRGva1k2uZnJazQFUiG4L6ZAVWdLV9VfqcwcrGpEwGLLR7HH5AfSy6Fp",
  "key12": "2ykQknb5NnLTDgvv25AWbrpMAMptaYcNWvS2d8w9fiSye9ZvykyMidcU8BsHjaCiLbPQaBtsfidSpREtbDSVthLU",
  "key13": "551CqgNb7jdYCDxMfUdKZoijuEJd4GGdc6MAMT9M75LdsJZ4hNFCceJ2cKPo5XoFXAFwrVQdbQpEC6DjTFGTqgPb",
  "key14": "2u7Em6dzLmSbfFgTgLDEEqipxDg4DdHfhESvEGKY8erxtQonke2ufXXT8QXhDQiqVosixqtBMzUc2YE6kyE5aHau",
  "key15": "AKjyYyLnK9ypZeUvZFCYgUgTvuNkxN7ANSKHisXdEhDF79s8RwUCGer2DFntTj4JtAhQtG7mv8ZJ6XbZAkT36Ki",
  "key16": "5Ma15EkFH5REcLso9a7urCNSbjMdiczSid86iTfTQEy9J3qWrryinMPhCXfdizDtMJJFsP6EFrQtsyvVPpETHnzo",
  "key17": "4f4uSkcfxF1Gqp91o3KUyyLDLyCuTBSFQakmFusLAhi3ty2XCuReg27e2nL7yQUZRWEvxQCraATb4z4ZzwUikYDz",
  "key18": "4HfCYbs2W1S2tjhWYSpZyd9bVuChrayk1rKtt9cv6geQg9cWpXD85Dj37awyBggnA5UjSmdutEchS3WihXJgiNti",
  "key19": "67HALkfn8YueVq9qgWk6TXsk1UZvCpqFgGyeNDPA8D3qsVfQ2UaqHWfG1i3CGkG966i8qtHiqqjJ69vyt4U2uPjD",
  "key20": "4PZazWkE9eHNpU4hY66kcxWZGnFfJozkA2M3zgNWzzhayGifSgg8n9DiyU1xKMRjz5rC7jwjz8jjz8TJqzGNguzN",
  "key21": "42ziJ7awHTEhCAefEXsh6hJTXGqFuxcnx7juzUw3CEnvfdxX4EqqSZCLs5ugw4RdRmW6cHxbvXT6ggZSoqNdDY2X",
  "key22": "3HencFJivpSsvpBBDRBa3X6JpEab3d9GHpmM9YfbNR94w92U2pXw47dwVPrjBMfkcf81LQjN6vvMPsnHHxxKXbz3",
  "key23": "2qDFexE2zkQQyjJVLhFmcXNSZ5c2gtUh1c36UdFcFrYehS1eBsW8kWMRwxqdXnGNwhKM43DNUhG5vMnxGxnkGhCx",
  "key24": "5enWZ7qipc8sJR7iFWEANAqGbGjAwncXgoSyYWrr3NEgoTKy5xtbxqcfJChadSPyDoPikwqoGpHdoVkrkaBo9iSa",
  "key25": "3tUmNmpH7tz1wopudsCDZkKJEaaMH9N2gaZiU73neZmyRSeZuxiFRGFJRAGVM2pVjCnQWXrW45457gfSbJNYJMR",
  "key26": "21BPPYBBzhCXPTbxdGn3BQH6hicMKSS7sJsEdSx9ETohgmDhYUTAwDw9ryzqETBtNTsRDG4oy9VRtPNiw7bJZkrR",
  "key27": "4N6LKHQmzpnvyY9wrQMtBfERLV7TXtygTxZvd4DhYs7yi3gAy5vqvycnnGGuEnz3BmiuUcxeNyh2c6Ha9VB7sFXy",
  "key28": "3m3DPC3KNBjufs3BSkM5FrTepgSYQABvvj2Vb7CaMRNnF1PUjLzQnfrGEXTWBpp6uwtYXTgiyePfTrJzxNz2qtQ4",
  "key29": "23rSX6TpG7EX3YufWp4bQHicTyrqrBUqcCM9dR6PmJtGN86hR4FRxU9FhkeYL5GaZjhJoQcH52F5Jsm23VQzvsZD",
  "key30": "uHkHvKQ78BeFvi52RyVGxj1ZWqXopWXiZirbM5P6LZ63xpZHvc6wD1zZRtksj1Kd6svBKxHATj5UHzTy26iqmoe",
  "key31": "37oCpDTLKBF5cnAD2ThxjeMLtqkist16rgS6bgfcD8Ys9zVbCaFTrY8zdsKmFYmTbPttGFhhg7pbranGMCNCSyeY",
  "key32": "5BTwKZsxHQpxcvKiXQFAejSoSKXANGHAm3juV4Whw6wUFkLHeFbE3tmyfqQG6fkjxmkWPNM7KxVZPxfbB39hf1Xp",
  "key33": "51QMvVUpBGu5uEPWWjpcY3TsJBbyyXCQkcudfCEBBi5vh531fm5dBpFBtrKtvXsQkgYFdez3LuAeRfrxAsBcqRfV",
  "key34": "4CL6KPcnKVgnLTXQV1QMyk6psRcmYLWy5HWLJdudYadnbuSgNz3KPfRDh6EqyfJCKgoXAwdex1qQdxaQhvw6VXb4",
  "key35": "4nUwa5G1UHZJvG5LwTxjsiaCXJp4VkDnQBo5bkxACidFTC9FBQXnShHTqmGDvZtJaxiHx37CfwNVRdZLjzXQ93h2",
  "key36": "oN6pr14tnwgj8tY6xqgfchG3ZNf1JpqqAZLZPcKVztS2QcBaRP3HWppV6CfqtQ7q1cHz2vpnnMfJoRY15z4sjj2",
  "key37": "57wY5kMjkT5pYFUVXcA3joQdbNBfuNB4x2mhQWe6zP3P7qrxNQQQSYf21TxbK7RgQyCVN1Zh2yfQQE9m9V96Jg54",
  "key38": "2zaZbmj6wsesk14CovB8E6p7kZhWZu5absJiNAmb7WfS7e4burmtaPnMTrHahFjRKTKy72YFWQWFDy2s4gCrgQVi",
  "key39": "2WDfnM5tV3MmCe1D357WVDMkeVtXaxzhxBytDDWSikewv9VuFgRPAzngaRHTvFRajG6pEedJUwe1F3gu9EEoQKNj",
  "key40": "2MWtwST8YDocWJxyMMdUcqdE2ZPq2byjqsfeMvf1YViFrDUhUuR3YmMR3VmSRDAtim9p8P6J6dDWZArqkdZy643w",
  "key41": "5fJunuvkcoLeT1WKPTG9DHVLW11LRbL3SN5gRnFh62Bx8RjoTZJ8Tzw4ZCwBVgZCnaPYZcBW8BF3nB65gJfPbqCA",
  "key42": "UVTEhfKBRgUH4QsrscGqgVCQxn2ckNo2oCqtcCujLoyjQngSFL83fCkJu1dXZGWcGzaGY7b8Xn7f1hmhzHc4PgC",
  "key43": "X2vAr8z8h9yJQhezyBNaTUvBSBQ4oDc3Cz6cV5KQfahz87EGQXAD31h8y4td5nt5GREe51fpab8S9GQaV46mXSo",
  "key44": "JeRHVho21aJ7gLBhwQTP7Bm1qdiGV88VKA99J2qCLQUEdWjYZ95Cvq9Fi5LJZyBocCTS9iVWpjYYMCTcBRydpdx"
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
