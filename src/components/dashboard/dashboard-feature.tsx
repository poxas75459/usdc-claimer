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
    "wZQLxJP9tLq7wQGGo5JSbN9e6MrhFHsTvWiAYKTCyXfv3FwcuZnGMrbAp2qon5qxuA4qyJuuPYzJ2odUURU8xmz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CH9qzdJR2XsUAe23yhcRb4gk8izZtwCmpZbFFewuF67bQRZx59ndN7zmzrh1S2SXmdkUebLywCW7sNVNa4WUK92",
  "key1": "eqxrYt7RW2Effad6ruMrfyxRpuPAMFRXLkQouBsBBSkEZvamXanoKSdfLFA3dapDrbGjxuPXJ9f7qcGt1F1hiE2",
  "key2": "48Ripv6s5qUguBY8i5JvkY33t8jNmBBtUzWWhCMqkiRGCHorx5X82ndvVMqXQ4nNheUahoic6vHTyucAnmBQjxjx",
  "key3": "4VP6NLKbCvaKB1mcXvXwghP52RKaoEuEs7UEMGRrWf1inuWmzz1oSma8GiS1RTo9uakWDTN13um7H3ZzWDBvga9T",
  "key4": "5k11WUcnQdpA2ajpzeqv9Esc4RgbjRhXo8H5sKCQScKhNs3uUPzEC2YKUEkAk9nv2vH96WhMKfwFa3sVh4cq5VP5",
  "key5": "25BNVfXnw69kSjTaitd9DNDXCwzSUTr9aKqoYDbWUPsaBPgspVgX9whuyMDA1X7ThvA4s2i4V6Sx3qFaKxbhmvLC",
  "key6": "Dj3FtpTAXy6qjcMeJFPKTEj57XLs292WFx6VGKDELX7P6bBZiAhg8AKCDWdqpMsYN57tUBupgsCSaBncbHzY9aC",
  "key7": "2KyhPD6eamUdLYqtkqN6DjhTfQtUBDDgqw5mPsAxAWYwZJ49zjcefCvp5c8rD4ZFDHb3zjThqJUP8qNCo5TAmws2",
  "key8": "5uHVyyW5EzPCCvFeHF479PTL9KWZu14Q9LjKcNL6YmKGDbANq8CM2LcDUasaGA7vUhmMxxiY6P4WqLgNyqKi4i4d",
  "key9": "37mrUX2bvNWveC5QN9864caWvPMLm3FgSSQCC1JPetBZctAkdpvYMTqde3w4fYGtAWhqx5sXVWxfKwucjBfBexAa",
  "key10": "2SH3L1nR5RJd8eHCfTeoYNXBiFuHAvwWtNfsqp5TFaVrxLbX3F6hbfr4YMt1MzFGkyhxKW8wcreFkuSxv6Dp9era",
  "key11": "As1Xx5rEKFDXcMFhr7CHiYDWJdFCVDxjQsY4LaagwTf1ym42Xw8ZPsqh8SsmmeiWrWGBu82Fjzau5PnsesMBXV9",
  "key12": "2H5WrGGtLA2WKRBigF34ZvefAf2wacSXQwSowdnPRjnPtiiDE3VAQQUEHpEgjBCC3Fc8hfEpQoq1azZBASJe28Uc",
  "key13": "5PVu76yRL3jgrTPQo3c8DRnEmcMW9vX3Uyam5Mx1Byggq5CQEPzmWE22UtaK6f7AWBovPhFtjv2c1ob2SwiVzQmi",
  "key14": "3e5aEVGT4B72XEy8jSixEbMCR6uFbGfyFaVMwL3zDYk6JSDkzy2W3yh3Dq3tRvXm8Cd9EiVrDpEKcR1sM7g1VxcP",
  "key15": "4yPHWMGT8Zdj8sLrYcmDR4HvQbxHD8VWrUf6UihPiQe3n8Pzv7ChSx7FXwWPEKUNhEzwVMBSmX1kNMmskxkSmP4k",
  "key16": "2CTY2vkoQR3SNkP8fNF9ibX1tJCo6c5emfsNT6gbqkv4vXwR2eYdcd6vf4bWhfSerEqfrFhTZDDEzRwxPgC5sGm9",
  "key17": "3p6S2SfAi3LVwfTMK3mJars37SAVgXramJqDJ81phmLrSoVbcDk8KjgB49hWQRJvSgimbMdHNd5g1Bvy9HwMnEJC",
  "key18": "46WW4R7mkrnsf8pbVkERbXLEwEVXFqyCwBrUJFTKNMB4GCwBayHKcx85YqB1eR6bNgyEo88g5mTPBV5Xn3F4YZWf",
  "key19": "2kcGsZb4LvdAHNQzGWZ9HJrUDqpHuvorzHyEwJtmvk7h7UqUpstQzEVTjk2ttGMeuPbhjG3oRisbvaK282zNRbHv",
  "key20": "62KyX9GTMCVnGGnwH6EUp8RvZvbjQqf8sME7hGS1mEhmsFTDotfR6QSuVrKf8rdViQdy64Uui8S4LMVLKrf9pRHn",
  "key21": "5aSCb9NuxBNjmaRz444sjDrZtvwVc3caW99VYSQNpWLR4pPc3qbh4ZUr2Nha8v2M8Dhwbw6SsebJorRRGFFDVumh",
  "key22": "3SNmnzuLWqxEKT6DXqiFveFQ83gp6KSC6KyzZeQLNkJMBgjfVhUMX8ybKYqRfs9KsF6HgrkBPpHGoMYuqz7HUaEm",
  "key23": "3H3C9XAGbDtWqrPauhcZnriDn7T6Fmhm1QYrvLmGakqc2JVJMt7SnAciwZwMQU5tQzZhpsbZj9kWXjtyivFvP5vp",
  "key24": "3TqS5JK9rCL8tpm7481JeeexiW2wHnRnNR4yM22zAsrehgquym4Hcx9F97RQRwg8dTyRxLG2fjXjSwk2q3im2QGS",
  "key25": "NwsdzkTAH1vTWnJFyX9dSS1VvYVugJtApqjLfb9axBH6Ki39wq5cvQWen5Vt8ZRNv71pDaDfNiFizPoMH48BhR5",
  "key26": "32PeRdyXBDrjcQf4dXWZji7ikMRVitnXrHw5qy7zMz4Px2iA9PxdkPrfFpMvSPRNozqHLaneyyednMFG3U7hVCKd",
  "key27": "2SYn445MiMSyva9JofgtewyJjXFdnCp8LWRpUY36VumjWvKJuvoErzdYYtqgE7SK92kdEF5xXfcCwmmfVHdi3a6d",
  "key28": "2eQs6kghMaV2HN4eNBcFFsv3vFrQM5pb5Mk3ZCkGznzQb7qWWGzNNi7q7f3mtmwvGAQodq4krZSocDa5DFJJv5hv",
  "key29": "5qyVT3WMWRPiADY8FwjKcmsh2eDyMHpxZVe7U7X69hcf42Cf4fRUvBykFKXH8DdS2KwuHm6pk5gaQW4hKHQctqXt",
  "key30": "2ivZFbX1Hsgi6r9F4jZnK5nTgwXBHCe6FnKDZVq7zBnoPudhGu34zTXQPee6QUoSqtdcUNu4Aok4VcUecjRTEnom",
  "key31": "5ZGnTV2jjc47WsxHwacfoeK9Vnq14EehKDPBejEQLTzMu7qf6Q2sEQ6LAMkdH7NKmpxMEg6aG3aRxQbNNZGKhf1i",
  "key32": "yXLk51hXbuWiQegg8rdGenEh7mQupJBRoceb8zqqqoFL4Tjkrzmceti27YmMVtmEu8CU2VcuzfHtZor16MHT2LK",
  "key33": "3XSiPNw9mtxD3RwEcnGh2f16otyfMUfQp3ARZy4eeVuSgnWRHVdVK55c2H6MTUxBQT3wNAFuiovJNYbyWNmV7vwW",
  "key34": "2xPy83X9LbHuY6wsNVwBveNSnxx8kMykGCFwcaqPRTEEVj6R6Lj8MZWu2DLjLNoaeGXYSn49TdG6LCtET2ePWYba",
  "key35": "2BFSjs9mYSXr6pyUkBy1GyXFe6Vy5hvJfozUwag9kRs3aPNzfKkfQs1N2EQZ1QB2duFs5ufuL3qG7Ab35rj92dVg",
  "key36": "wT2zJHGuuUeiiosGpmgQKEB9t6ZVxgxGcmZWnNV8piqVKbfKGVrW6Bt8RiPAvjmiErTVKsBCqSoT7rKBH6yrmzJ",
  "key37": "3N4pdpAJ2ovbku6B62eyK9UrW4W8nmv8Nc8f8qcg8D8j5oDcSz8pjQmN4WFENKVdTYGcqJHKCPVbJLAGguzqHrJq",
  "key38": "3x8NMWvNGAhF74QZgxHaYSBS86XxNwfRVgRFva86gUyZbfHokapsSzcUxCjXTdL9b12REh5fQmgm1TF6BhwuakQ",
  "key39": "2uw1snwYPWhE9MQvFjbRTf8v4QhgJ8aqkywwHJEwYq8HEEVfhJ55i6fKpSeXYvA2F7dLikTdH4aJNYxeESJc3px9",
  "key40": "5EY5xSEiJdbRctq5kdusasqBi6ES2D1BjjYi1ETdeLkBrYGkRqkHGeSaf8GX9oDGwgKJ43moCiQQhRzUdtc8xxFJ",
  "key41": "2VhGmbkGS3FjdMaZnQ4YuoJpjbFN2UDrGHzFE7gAzDvMP6i3u4qQZdF88xrdQ24Y1Sxf8T6tp4SHTKQuxTe6rumV",
  "key42": "i7ApABn7GUC47gRes7THozKtrkkiUs9nd14YHKJKSizYuE5jEZsLgNJmgXXgoLTeagKxPmvp3p1kAXXbwNvuiKV",
  "key43": "4jRaAQVPqUVLatvBi8sL52zwbX4UyQgA6pAdsTGA71s9sh63vBi6EqQLxzXNCkryCymru5LtZoLjerwVxCaP6Yxf",
  "key44": "2gaFuJv9johADcBQKG3AMXxEteB6xSNyFHwzN6ee862c7xTVBCwX3m75h2BxpfPPyjqpjWbzqksmEarGDw7kaAzQ"
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
