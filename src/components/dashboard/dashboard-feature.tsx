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
    "2CGQPHXkyLrzoF2pviSqT3wZvY5gbtUMXkjii66muf6YDxCXGwyWGXVnTFQA5YQGr4iW3wymsqCntks9BFHu2xoa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64Mo9hDAjHSETq5HL1ZjsazBDVJnR296npubtiCeamg9RrXap1wPzTHyJwpR3NNxUh1TiRQAo6pVC9Bcy4utYh9q",
  "key1": "t5aZEeZBSgJMammLcNwxGL1U5DaNABJkX4tjQNpBc63RVZz888PqVLN1147JJ4DanZXuyFtsSRmAbfFaxQJWVr8",
  "key2": "5kvpWGowCCyefj1SwHmBGd7JXRnZnPZnZqwB3Gqc8G5bFCtwNSuKYNDE5pSTeyXRTLgSXJd4mq24TjwWDdqhKnTU",
  "key3": "5KeYEyZ517jiHog43W6cXGUGDtdMk9aH3RJBhtiBEpw5CKMTWwiJm8boFQ6FvPF8Qzw7VbdCUsiNmUMLXCGqTGLo",
  "key4": "5EFDr1vLpMXD6tyAWCgvhxrHvbqonTJJrbn45bBVvoVGrtM67vXeZUrVRM5FzJooSDfkZWoC66oMJMq4DQShdMdT",
  "key5": "2hjNeD5sPqmbj8hXFHPFwArzBt7FyjcDSu8vkN6tyvM6C4EZyJPjeWehgZrb9tHR37jW8GqgBsDBgp9P2R1nqAdL",
  "key6": "4dDfEkGQsTUoiY4tDARUxxfewLRFhQWspkj2HaHw1Tn3rrnFzGGQT3dHJmAi7WpEz3jLxj8mEfCBj5yggBMGfFy",
  "key7": "CnmFmsJcF4S7QvQMJCDfjiDhPKgbyKanec12MpcMGdE8gSia5s3fLsasz1Pp4PKAFTidnGLJFnRL7edzhWCrupG",
  "key8": "2YXzYMJuNWbDgSwRNFADJs2NMVNUeS1G6MGPofqtpgAKJdmCckvQte1UhRTAk6ErcAzGs58vBWe3zNof5DJpDrbM",
  "key9": "3ZSWnBqxdZNZDRdQHf1omfxYZsTyxevpDoYUfehHvcbHqErRC8PL6cmKVX5oo5AgUbgSg77DopLpbXwjUMA4WdSR",
  "key10": "3yXgjy6MHqgkkreQtBK5AdDQiF4L9UDcWeKPcn73AL4ydJB4m8arKLaLKipzshZJgnE72NiC9DYzMn52uQXixi7d",
  "key11": "3Jie3D2ShXxP7mcfVb8fH2XssbpVmqVNnnr28PgPmw62QGu8o6YGEVnwGmfTK5KGBos5unaCaUGbGC9PPVL2jpUx",
  "key12": "2QPEKZifZ4YvL6rBrerkEjwSXv2iBd6Nocb2zMcMstjLcq6RqcxKMD4YNv7d83oWco7kSbWZoKHmGEunqULiNEL4",
  "key13": "4AGnCbMjnGq7hPrWb8kp8zDYfLfZrhCGaVu9e3C7JUSAcZ1byVTFDm2en98YFZYdoQmLfH18pugBzNpy8if2vvxm",
  "key14": "2cyGdV7GBSvncaihGGCVcC8ABKHFfmjZsFhS9yPpGXuSc4XaxKaEWeuXzpJNTtZBAxo1anb9Kk8x5a1284BTpcTw",
  "key15": "3Q6AHt4PR8ya8ym5oS5VwXznJnfTsF56NUy6EjwJcc3axM6TrdrW4zHxXhSjFTJhy83nVp9q6QZijPLFbVfvTBbz",
  "key16": "4PDBVGowj9yBxQcWPc6TqvcomprNt49o1bKnTPrKLCksp3Dw9NirnqbdwJ75RLeRmSJrRpzXqS2Fy5myZ2WvHmSp",
  "key17": "wrnqpb15qZMZZ645RbyASgU1Fn9eT5TWtsUuWLBFQbA4S2eRSf2nk5YKU7MuK2PP1uAuhXHjtj2ShSSemMDnxrw",
  "key18": "2Vx3NQGJSpdyaa7RzJPYFkxnxa3SF3XcYHTN3L2DDYcTpQaBi4eJy8fySBEaAcLqazZ3feAeUTbBmKiWAUE2LmRb",
  "key19": "3oCNfdUg5J1NyJeYcUU6qbMPZye6WoHwW7sWMjZ4wtG7gQHRAAT3XystixtKyKBmPopfxPwpN9FM1EwYf4abGyKy",
  "key20": "5jHxx7b9pavCdHsaGrdLZEy693ShnVzc9FHZJNG9YWSripPAnPGyVgaSEGXBUUmU9aDoXP9La2nNR2SyPmL7wjXQ",
  "key21": "4xnZKKNEzEV2VyuudhTmFXSUT1FjbE7qGWgUdUQgJ1JahhqNBpQoai76vymvuwkazbXRzz1pjToZfLgq6qvnSYNn",
  "key22": "634sNSjMT5RuMkD1npz9StbGpUD4gjrTrmeppaWLQaPm3zfuXnvLeZfoUDc6mchAbAnmpfPyBNCrhe7NSwXqAFwq",
  "key23": "3sJzVyRMH4MDeBNqS79hg93YdnRJikn9qMpjLqWcs4qvKJZi46HorfJSr6dEwhjJnQbVf8KWsKnAbiHPndL9ACvQ",
  "key24": "5VFHtgu6y6sp3YkuWFtJJno4K5X4KTv9b7QNvFe4N1HuZq22JS791w584iw7XPhbmizrsp3tTG5jkYhDvxhqybfR",
  "key25": "38N3GAKPEbKVdYLMD4RtXV4Mfea8SPqEuBWuSGDh5N8pwRE43sDDJircwbowxak2Zu3wqCiD8GnqMV29J2vmD9MM",
  "key26": "3ngZsg5ByGPXjriipcxbNSiL4DVkgxhztLVXfFBZgVCnc8sjkzMTRqbsNQFg5F5qQscCeopUiB8ebhfJxzbVvP5G",
  "key27": "4goxNXiqvPtYqTMWxNGU1N9319uFD6oN9dKSekYAuQqDC1wResyWkb2vR9gvV4W4ctAtK777dNKe3urFaFYthEGr",
  "key28": "24pQyLuztQpJRWcU6Wt8DhPbfKmyjHxzKtKrHbZCuCwiAZxLJp2WyHvDdepM6nppeweEtGensD3JsZb66jxjATHK",
  "key29": "2zNb3DQoAjVMUmu8mqGwW88Q42uGt4MCi2gX2KejxGg2T1i7RY4yfAMoCd4LsUZbvKrgeZ6s877HNkcBiQ8pdEwm",
  "key30": "3tMnvWXxF8Rb6Ae6mybrNJYYRwBzZDCPf5CHZEdaFUmAg76J9v65wKMN4w9KMbUVWMcJMQPiAfH2b3SDd2kW5x9S",
  "key31": "4UNByh2JCRhaHapM6arbjgBzSSWg8uVBEBGasUUmCRsrLqhhQA5PVc4FGr5pt75oKhWC7Dygk8P6BFdPLu6Qk1HY",
  "key32": "5B1LkvBxRGHXoAQtc4dEtPKk9TVj1NdDB43BqUZfZHaNiVaE4Rz8Ne956RJjedTK4WTZJfTkvKubEa8mGRo1GsaQ",
  "key33": "2jupWNQfYTbYEMVMPEtJqVgTFQZC37nbsyRz2vhNGGjvbc9GkxFqnfxaWtHpgmYzuVATsxBTndFYsFf8nSEmcbcE",
  "key34": "5YAhFmWSgMXtvYLhVq1d1GA3E4mn5UUBUyQCu21FjtAdKTtnk9UsR1USAXBZ4Sf9gCh57YB6uFStzzi6Cjb7J5y9",
  "key35": "5raGmXCKE2hQ76W5buu5X3rbvzDZa8swV4FaeT6cbhjYP81ckXGT5LwdTjqKULvBDAjboMCFm1QTnhSBWxNM2DUr",
  "key36": "2x1x4e9P2eZ1h2HBpnZM4PhJ62jeXvwPZyragKBAgWnPQDM9PHA6pqRnAb67fKAdPwKVgeixNq4MqCmaNbCqGsRn",
  "key37": "3toiSo2fGL6UFnMLprrx9dz2ciMnjGkJfGzeNxcaXJ4cDbizEbd2XoxBn8V8mAG6mgdPr1BmbVwCM8snLszxCK1x",
  "key38": "3ybRxVU4cf1uGVnVw3gC1BA21LC9qNJkqRTCrt9wyd3YjWf4BFgnc8cbtPd3BbFFWXGbLXqVUGAuGrebRKC7pXtb",
  "key39": "4SG5wzY6L9sfNQeff92RJ5FSzqdMXsENStCcrAeRGsYpRVB7ScQg6Zi9R39FfHui5h9M1UL79HhfjDQLrtK9Cswh",
  "key40": "5kStN5dZTmGxqqxDd2ayr1KbRNycuuekuCimyxtofszxGZjtyETs8JAoQNmHom8WJHWAnS5dkeNPbwsVe3wH6iPv",
  "key41": "5tXffDY2UmaLunqKzibVMV4cK9VeccbnoEg7u2WdV4nT5jFxgTG8pwsXN549SG8vS4Wg1eBJbtw32DXgMe1vjxGH",
  "key42": "fVGCWkxhG4jp669TAsbXaUBubEvWRC8NDMKtnSQd7yiH1mXknnHvJQmCQSpDS3fyJuWfW7Huw288AawsVQPdD8W",
  "key43": "5cYcoCVFnpuNHvvHi3CiuuoW49aJdcTN1NY5kMuNfeqrTSXPauMTEkJjF6pbT963ScjGnJpawQpECQqx3x62BWQN",
  "key44": "3byXP7eFp7mYBASw6N6qmiFeyYzNNNDMbvoCCWVbEe4dt4mUJHwJ1eAAJyxv1eEo4UBbwuiSXYoahDSuawbKkckC",
  "key45": "3GYuUF2ANM96HQxKiWXi9bJte3mJWFdWCD8TvAvT4TH6UpwkWJLG1bJL64AmRBMLSGsY4Szm9uEjvDGWHyyxofWC"
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
