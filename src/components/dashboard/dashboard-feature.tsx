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
    "5EFQVHFCryeMTViU4EwiMk8mRKZ3XKcnUC83vQbzu7PRqbBtwSzHb5hdN12XMQtijNJzrGTth1Wsfp1ooJc3d2Eh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pmni7ExDAjU4e7cNXEwLnhoXXsXKh1xRYLUYaHvtmtuVx1PNDsRzyAX6DusGorKhFA1jUgyBJoosQTEvip8Y9Qy",
  "key1": "4vbtSLoByoLZ84hyQucXsqRoEnXX7ZBS8zArJV8FPFf9WKtNuycFby8iiytFvMwpM2Pn94De41CyiWekTXgp5Zw3",
  "key2": "46Y6mUHpj27Wh7UXgP2EmFUF4vzz5tv2i1VadHnL1ctnVb5DL1zc2RJQ53dyr8vtjxBUc3PS4bA2KNVzCAXf6eQg",
  "key3": "2uM5As6LZB3WHFLmPPyYtR3v4DLy4867xzvEQdyD19eKprFyuR1iiicTsVWBbdy47YcLkyKwwEdGPKfG8CLGYDdi",
  "key4": "6bsgSTP9btmWxJQAsT8S6NuzNh6L1cj5PYAe5gU1XVoJp1tEmVvTnwxB3uzXfMHr6Ryg2kvJ8r6JuNkfdUcSXte",
  "key5": "3RVbgXTbNdNJkoCLqDeJymAdsN9yySexTK3mBrixkCAZLqqQsRxatNUMBfyK8VYHqbUbz7EMR85RxzWZkQ2eD1RS",
  "key6": "FnWfd2DcTouqVSi3uTHdAj76LGXwZeBLPJPaH3ayaAd6GcXXM224zTts5MwicVVgM8X9z2vET54P9tAriBGFHPt",
  "key7": "3tTjYgRa1AAH2LBtRyimPDMCzYTVbmH3qy7UUNzWN48RiL1S5TC4FB6JJcgEGPLEtn535UFz66TmnQy65oDCvccZ",
  "key8": "2RanvWZLaiR7BGu7a4YAk9GVsbLRDEUrVum8Ag8PW6VQfFbswpKhEhSCmqnThoDk7GsHafsqp5GM3gBnvHkeu9Vk",
  "key9": "5bLm12k4HTuWGd4iDc61soHsZkHx1ZcePJxTZPcrAY2rFy6gEGjCRcto6QtvHHEFFV9qFY5E4gGaDqeVwizW4Gna",
  "key10": "5nbRvyDDe58rcWaJZKS9xhh1VdSGzGLBtQiueCfHDBDgBPob2awVi9Vnq2ughUevDCC5pPtiaGSAS7bmTTa41DK3",
  "key11": "3p82yyw1qnfMue2LmNcP6FuXN3SAhkaC4G6B41tVnR6pTH8Pno6sWaN4QPvWABBGpd5GwAnCWaYFbzKJ76Z4PTts",
  "key12": "4G4uekRrSpkReWDZv3fAegM98bTMgxAf5gNDcv4TcGMDr1oxVB16YQQkGXEo54BzsAZSQtXo2ztrhUKWUaFuhrKP",
  "key13": "56vrn4wqipKh7KxqtUTs6z7jcmdR7hddocepmHSxGumArG2FACp3UNfhv9uJWVxhoKvazWVVESQkWmCfJt1Q7SvT",
  "key14": "4PxaQJgn5mBkNhjw64ptVNAzyEj2hU9sDEn6rcxpxpGe66HU9s4KQTX2Rj3tStXdX23XnRcUBKaCWGz4UWe1MzJX",
  "key15": "ktpN2fgb9Kerqax1z88xcSf2jt3V6Jbi87eCDkMhKiUZokvNnE23ZtoWjxCRxVaTwqqJvZFUHdpCkTEUENVtsZx",
  "key16": "52gmJqASExGm4SbTetJTfwzvJCax7pFkkPCaevdLEAADSfmFUQ1oErZKqmos9bamSio8GxaoP8vF8VqN7XqSzXNU",
  "key17": "65YuoQh1Xa4MsV5AsLyPWpkv5a7t6mFcbXfsFfXLY8SEeimjho4Hy6U4G7urzsgGABsP9FTY34fRHzJ3ra6dirt9",
  "key18": "3FpRS25sYDY6REzm5UNgZnVz5vry5ezWpDtRfEKyWNtQD5F7xY9j5S2NTyV68xf3oVG2qAvuQJTbw5EKTjfT1n8d",
  "key19": "5hEVAo9VqjoBAn3pXfpS8bSm4XQC6gkwTkX6URqebxsSbmi8TNa8N8YTAf3QCTZpu4Z4oqNPc44M4BvxGcM2wGcL",
  "key20": "5UStfFpJzzqvQv47gNQkZhjhxk3zoHnxHHbYW8j3dbdsEHcaKjB3qkL7dukhRL6Vy6e2mmn2KsyFf6wirFdx35Hx",
  "key21": "5ZLfXgDfuQhgfAx6vv25nRzgjZ6nt4kGEuHWuwzWGknLXfETAKie8skKvtNvXFoeRNFWaeFTyoJncM5KVBwUT8Zo",
  "key22": "387dHvqDcgR5czUnpJbDxe8C76mru98pkwN4KbK1pJXYpnnXDUQPRKVdSv3JDNsuWvt6EzJ6DjnmsqKswW2noqQE",
  "key23": "WNY6VFGMQgQ6asKTvhDKHeTTaovvBV2nw87jZFKbKELjRy6PLPZ9rSAtubSfFxK6SbWTGcRaECSRwJMP8Syxa8A",
  "key24": "2Qjj8J5XAR2FomenrTk6ADGJtvTWH1Rykj5hGytZPrfvYoQrQ5UxAdMxcA7rWwjagyU8MkCL2qQ49ecxgsGY6ur1",
  "key25": "NLTxo2adDCZYfh9ATTXVvPCxtHSaRuCFNZ9wrnuW9H1upd1JC9bbA3BKwLRaE8EYCWxbJrUeTgmu9VQNyoR6Dic",
  "key26": "4qkKiBbhUjAnsSi7itCq63hf6KREAeeRDUf6oE2zSRZGWEvaDPbTgK7JykMckPJYifBntYqhd19udaYGuhSDpzVT",
  "key27": "2LhTxXvmGBqsVL8cKDzT1K4i9ASMYhnjtUyJTfDk5ASSWVbNed4PiXViB72N2KacZe9cmkWWQ3pfGPRczBVVqEFH",
  "key28": "6S22r2v7wKes5VxpCY8n3dhDcJycypPM2trHZLdKNjhYgkTGxNP69hnPEZXus9GrhBHwuPZefETDiTxspAMteMe",
  "key29": "z1d6XudVW5pnvAF7fW6xE9522TV647Rwq76q23AMQHqiB3Fu5ANYmySLu2AfmypZrbLgc8KvqnASVoD6B6b4EQy",
  "key30": "5UKHim4UHEEYYG3fy95ZgNkTiqw86uY6UHZbHyR8rkhgD4Du18WLeJWC6pXzYxgq1dZTMJe21LGnqcmzTzqoDARP",
  "key31": "3aw3sQYsaGgNszG3shSXhpQoU2wDxJ3Mz8jLQhDZBMGC51gx9MQs7dmfTDKLYoGMBS3GGmDzMcixGK18BUY2BbZo",
  "key32": "2jWUXniSNep6MT3QXKDHk2ggaFVYJVVCBz19xgnXuevwqXfhySevV5RvnEA4p6qf9c6Q1iXSU96wQBcdTJzSVZ5m",
  "key33": "GLMJHnACxXqrJKrjP9vx1vzC9ZRUhQ11BqbjyEmj4DH1fV8q89Fi6hsHhWnGKxp3C47A69xEXsGPKSD79QEGVup",
  "key34": "53on4dSZtWffJfJwhbhbUwSuCNVDhadtZaHGT2eJ3MVJ3xMP2BEsexRYypnuvdrM1aE6UD1dgzfnD2sbc53rt2y5",
  "key35": "2JuVJEXHAKdw5PWjMv1gMa42G1SkPmVVoEaVTuFoJCuMWutNqeDLX43jgMm5ZTdngQj8PWLGDRSN1Co1PRhjStNq",
  "key36": "4xyXP41pQdFiLUA49oRqnju7arTyhk9RG8LGDaj9Xx5aifSJ3SSWpVeRMeGD3rUBRw2CyFFzHoKyKswbhV2ga92o",
  "key37": "3hujeRb1HhiL3VPxoxfSjeB8UKwaFGLDpAtLJCQugViaRaDLCZ425doWqVocYzSrZGeRYv56YLAgAp3dZrSdknhM",
  "key38": "5QcWNLBHgk4JXgdGk13We3NBBVvgiBeR8hLfMKhYBQx5JZ43UGBv3ZGQhUf7oLkgF9LFUQKpDpnAHXyXjSpKzNu4",
  "key39": "3U5pthLaJpBa5FDpbiJxQVM8aHyczgJVSDXRR2mvsrxUzwXqGfWEbAunXSyR6qYVfYgziL946WDrVhkCvgXPqDBb",
  "key40": "4q8UfnPvouhiXiQQ5oypWQ443xeUiD9sXsNUga8xAFM1xaVDrfTuKUrpQnvgSRuGteg5QUz2a41ZFJjSVXMJdubf",
  "key41": "5xmk2Pa73gSMN8Fss67JFQ9y2sKhk1HwEArkDvyaVi9AbwfKsKUBHtFsyZz4Ti1B5YkjAgCan2dmT6xaPp2TRBan",
  "key42": "C6eungWhSSdppLY1BhhTwnwt95xVQkYWLbvdW3accwjdi9pJakdnxRhnxQ9etA7JNVsk7wFdiRi6Qfu4hQzpBXc",
  "key43": "5rDHLmcteA5KedQGxs6eHJcoGYGbpeM6sfja9ReSfivsDmH9PPrp2mH2xEipQzrBjohLidxvCiX9F56Pbi5guErR",
  "key44": "2rLCi9M9yntjs5hXnRTDxbap8WQhouHd98bDFSHLPCDcoazX96pRGbjR321jzZWR34n3eZengd4HaT1oHX5nTNdY"
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
