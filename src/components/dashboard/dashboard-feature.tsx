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
    "5ks8FBTfLTZLiqiwVk5A3CsGg4wrK6YGKWsYnEKxdZXmydvXtNgFotLTgXohY8tKjFrmyvCGdKUAqQVdwyFUNfpx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "at8KhNrb4g2rtWmhYS94TBjthZjFjTQtJWPXevb8QGvPW2dsoKFb3cTqvFnKyaYZTtZdB3y3XH4wscJjrEjC9Sj",
  "key1": "44RsUxrgHbSBf2qhw6cE9MwiCrcjsnysrbJ7V8E8WnTWdFTSuUgFYminrYooXx8Wp9ezXWf5h5HnTmx6nU1Rtmir",
  "key2": "3sZ9S3JLfqMpBjvhTPwz6hhSjtZngoTV6Ju7TtWURZXGftcpDbyMDRkX7amfuqmKtGKeGucd6AaiwemkhZ4A9BPq",
  "key3": "3mjbexYVTVWp6WHCbDgFEEQrBArTFRno8krBi3xhShkZ5hEAnJ3JEyL7yPnC6He9qsiuogaD9ZcUJ3cHSA32ZFL",
  "key4": "3Yuku19bUwn7hobbmuvvbzWSX2scDyrhonpmqoiz97ncrRj6RWCqnrQaBseftCB5n7RXUGBW8H2Fnz6SG5izMe7b",
  "key5": "5idu8ApBHrgZ9ttqRa8qoNgCPbSp3hKLqqTuFHEKqG4CysYXTxtkEz4TXgRneqMi3BUtjyzbWk34HPWA2ETQL1SV",
  "key6": "PVoyijdS3d9eeyH4d3ZEDEFZGVJb1t8M8dFQvAEvRwYHroMtsMuDyVuqJiv1zeXUu7rs1qJUsziLtxZKFtkQYDv",
  "key7": "2iiFqGdE1GzsHPMMEUMFLiEEjK9MdtyUigy4dw423bXVJcUhNgezKyC1pkrScEzGb5hz9ESSTY6dwTj3xovuSrnc",
  "key8": "2ioUnVeDo3SCYKR3YTYY5aLksJsaXmt88m9jdJRnmargsZNFJyiyscPKmABqzjwa1PmggXAcuRqDhMyETHmQUYCX",
  "key9": "4zwbWzt35kndDJ8k6d4NWxrqELSDvKMiZAo4UJxaS8yGFRKtGVH4j8f9quNNTH6XptB7yrcKpYRDWEEU6vw7Kcug",
  "key10": "35anTvRcP7z4k6pWSp2SrvqBuuXNWNabtbfoGh7VwAnqxkUhCA5uBZuNWU9yHTs8wU4oTPUtaaQrJo3pvxNkbNvu",
  "key11": "5Q8GKS9bqDsQVdqHTWhX9Fys171ymDi7pvtxDvBJqUhXcQKpPamc6cSxHhfLg6d28TufyPi3f1bkTDcxfXeFCvgL",
  "key12": "2fMw1Pkm87zeEBCPL9h2DR7r7Wsh2xs1E8NLTKgVjovuz1ZY912GDbpwLuU8oVeDwmQaH5XeQqMWpPTwtPr6KoFf",
  "key13": "4VB5BwQrKJSAF7AxjwfJpEGgWgFE9Kv92F2HQQ42aP2uVNWxucP8zFTNiY2Tz6aLuhjUxbxVYmqRDmzJfLos782y",
  "key14": "YahyosjmkiHKSyFhH5zXTZYRNVDQFGizD8KxCVmb1mqSUiYKpceHmmQBBoEfD1ErSvgGcoq4sypz8DXTL5Rd65F",
  "key15": "5wspWKuWHZcjPRebbEwiFguvbUhjwS7WXg7BsmzZ4KqwxU9ueBXvYooPuzLP9ggTqutp6cfBMGffaMErs9yLAvw6",
  "key16": "5MeFx6H1suvMFLF1qVLCnRbwk2SqqRLi4udGsv82SYCbZ9fA3JhEZuLRcPJqW9uAcY7CLhaNfcoHd4g8imb79Tvu",
  "key17": "2RvoJ2nYrPmN9XkYuLjx4YsJvF2QfNN1cPD1YjuDLs1DcPzfwKMS1UW1ntf4Fa94dsVdY7K1fBhFx9ckenCWcevB",
  "key18": "3wCmTywcGBmydU22CVBawKQBYKAsd2cLB1mw6iftybiZ3JHa6Vhy3oX2VQAH9yxNWrmqQ2mz4GJtnwjv9nRJBUZD",
  "key19": "2rm9vGpbfaJgx5qJ5GdXqe35HxmB8aFwH8B5vdq5TLcD8PhZZdfi4EXWV3HrVreF88g1q8YH3R7pEL1ER4f7GWWa",
  "key20": "4pM7EUkR8vm8qsyPtrBuwwqoHfvg7URWbagwhhLJoNVqbJAjzNnAyGwQQhU7rkVSkSrWEn781eWcRoDWrL6SNQwD",
  "key21": "2pKypCVsMVpaiLuAoSwotWmvkNrRTM8p4ULXwA7UXU6o5MEXcDKq81ojaKJmx94bE4MwdvsKkGQbKGnxaZJR1hgt",
  "key22": "3xpfHQEXFEFro55enJDfD5EdpPjkZBwLRN8U2GQ6AiapjLWzrQAgX3pnWj1ybkmiMjuQfVHJPVC675otpZPfivAh",
  "key23": "5oigXqTkubuT39QRp4sAJQGBMGAdGXzt9HTo35rxLUUi3wZtNahkLT9AagdrEH9eyEcaav1bZ17bRkkcuT9XZCNB",
  "key24": "Es5CoNpNrpyTSMo2WWCkHuCpDnCGNU1hAyNre3qyCJ9u9MqefEZqxtDaes8wpjbWAGHfntAUKwAquQSXg4r2cXD",
  "key25": "5WvexbUy8fU2q6BEZzSDN5gNzuVYUFYTMEbcpNCsqKJ7fzVWPWkHgzC3t3sSwBkfYJnb58jg1ARbyVmv63USDnpD",
  "key26": "54HLe3SamZdw46orNzEqm2rLrmBQ7DPgcygrMQRKYKms9qYnDUiD19v1KCFu2G97DYEyrt3rx298kHPEXze3o7Ec",
  "key27": "3c8LvjV4R512XR4t4oFTUZbqUYFV313t9gMvLHvXK28syZ4qw4hYUgouNESfp9XpySmsbyGLJZMtVrXp1XpsZQUN",
  "key28": "2oCZdcmGvgH75HSGi71LWnc8dWBDpymAkHTXLjSMFZwLWm69sZwdC5KGqNXdbRHcsi7UuTz1jaspbtgTYdfK3oRW",
  "key29": "3YhtFVZERf47cWFaDRnRMxJywqeE3tVp4LLw1yEqbGh9kopWXERb4Lb4r9uQrtfgqA5YduosBYXxBSt6BUXee7JE",
  "key30": "4QrzQxPCPRh3oSPx2RsGQwQiHyvpWfbcJAqkPSnN9eUpkZ66Qfv6ELHGnbSsZZKyuNZyiFDrE2eJzexoNZoMSffK",
  "key31": "RJXEuUmaeQ1xogYhCsz462erWf7TdyF3ULcjU3nAnvhQj9vDk4BNiRoE3DtvmVRPBEvi3QWyWFUPpHuBsjttt3A",
  "key32": "4KHYodyzQfTr59iUZPvDrcy2KQfCqujgCSpKpSibzt6mo22Exv1XxAKcWbzukNpyvdEJCM2kaey9FurdxQT8k3fu",
  "key33": "L9pMeDouL4JeRduXennrCmJkdymWpEV9vED37sczUsQhvt4hghXc5QkkkGkKwbNZgZeMpJJzvSXTMJ2kbS7bumU",
  "key34": "3skFU5DniS6dQLSGoC1eEYyCuySBPdUwPQW2L8kiYQoWEycKKBvKBSiqqc8aCm3pJy9rdcShyWa9PyMC5kwyWAY1",
  "key35": "4QdmALTfz2yKMR5yJQdnqSrQQ6EWzuFjq6uZwaNqdxJuQmcoeHZ5AnsRBvFnGWTrAJa3Vc93YEaKQPkZbEoNb68v",
  "key36": "256ZMLQ7NE3SJ3dk2Ky78Kf5KeFRFbvHVKKcQSoy5MdcjZqdoMFywvthtZ1KpiHwe5WCBeEqDBtTRCEfbtLNwFj3",
  "key37": "36qgKbAXEKCPA2ueD7sPmTkGWg2P7hCvnX5Zrnn1MWie1j7L2trTmWKhEiYyP8BEhaozQNREV9ywCZiWCWBSdeSQ",
  "key38": "3HGNF83i36voCGXTcQnziPhq7apP225ftAJYUZ8HWYqnBQwpPijkM5Rgue9H2zR1sR82GKvMnWie8NVHF18FbJVk",
  "key39": "2k1i6AfnNDcbbwXeTc6Aqia6avWMcRTY9uEv9VckVWTZNKgMYsixXBSeb12AmZRJH7PsPiwcLeT3oneiyBnj8cPe",
  "key40": "3dN9WdgDxx5je59xPfpJCnNSsPtjExJRvEiemm6i9efqBbcvED5b3AAAoEeBvAE5hg9PzzzHeTcLw9mG37z4pKXW",
  "key41": "3665T25uKCwmitYY6XNRU89ZrAp7nccw3ZSvHqgoAjMF9wfbAWL19eaJyQ4xXbxFoaNU2xyN3YfjSDuzo7MX8nz5",
  "key42": "4RmjxdT3R67uME7qNYDchE7u2AmCc3Nob62FpWzxbABTvne9gCEvJuGYyfSX7E9hDDWnL7ud1PuD5St3jieMmXeS",
  "key43": "4HHVdnZGWfo4Pf6yScWdpWUAC2Cgj7ZNZzuHKV4MjJaiw6zspzv1ANCg9i3YATb67JkaGmfB4fgYmNPYwFHEGUyz",
  "key44": "3BzL5Has1CzJDmeMznRHqnfR29F1NFGRMvv87nQQCijgwFZcUn6qEMLYKv31LW7U7qbrTKHx98ndPtDQu35zkwhQ",
  "key45": "4iwiDh4tS3vwQEhbDzGWZzwm6SdGsG2r86wsbeU8Fw6B2nExR4FWWx8PLzpJ2pof4jr4cubiffWWtDwAvu3UQtQz"
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
