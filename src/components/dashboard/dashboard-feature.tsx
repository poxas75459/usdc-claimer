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
    "4gcJJeE5efLJAexXSe3nbUwaTbNCjhcsSYQBah3D3qtUMHXgEYnZn242nVwUYhpvpH1ZzCxbBKeFYb88Agcj7RUd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ur5gU6T4sTQT4eFqpxF5jRun9f1R9niKVw41U9gtL25Mwn8h1sm5QjquGXzE2YYj3e6dZJFprDo1CJTARGap8pu",
  "key1": "S45JWmx7yJJm3wKYZbFFRWwE7acGHWTEFWk71Dsofc1B77oAwSeh2S7Cd99MHDhFbL9CFgDyAZmHKRB43DUGR9o",
  "key2": "BqTkpBS58yR7f6mrEqaK2RH2ssZ51aQaQvB44C24wmAftUksPsoj11r9xkJTEwVLv4AN1ZNytx18W4AuYXWspT1",
  "key3": "3jGV7wYqnsnabbSaU2E4deEuMtEULfPiFJvNdmdk9KkJkBcFyHazCt2Mxochiy1otxrzb6x4jGLn4KCtvJLZt7bN",
  "key4": "4EXEM4fjSKq6X7vRLeNnxCSo2jVUPw8AGbfpTobd8k7DGq4ioqYEnCZJtQipbKoPfcyEXQ5tNA9hiPhBBHqJF7Kn",
  "key5": "oN6FYrhWpobDvjm44ueVtVz7Z5vnxBDG5p3xmJFGmSzTKh78ZxEQprEQbdxRBqB93hhrW5aaCN5px6zbsxW1gj1",
  "key6": "4V3v9v3FY6Z7AubFHwgbc9eSKT5GpUqsuL5xmfqtHeB7oEE2tngy6SFRBbyHUTx69zPFpLZMDb6Yefz7baF1m5cv",
  "key7": "5Juo5hcZcKTz5kKZr1ptAYBjyRw7z3diN6TCZQPJfUkTPhrSySkQdaDYjSSYHnZzciF1EpJ2XLjAZ8nTNSP8SXKS",
  "key8": "46YtU3AjeygkFCaqY3gGV7gM4Ha5rCoF192BUuPnVeY3b8hwfgvWfFRYLL14r4p4LgkFz5xgH1uoDwr7dJVHrQgX",
  "key9": "H9W7wdzk9ZRkbyeyWiQJ8xi91w78fkuBnQoa1Qc2m38fJNg4Zy6HwDZQwWspQtxdiskCWx3vjUzxesyT5ryTYfF",
  "key10": "4XMpMYCyA1Y9UmDTpEvU6cCEvZ3p8cL4bJgr6naDPDnqWoKV7hJcp1wyvoMAcEZpXcApsBmJWwGX4L9m5uTe9qBQ",
  "key11": "3Vm4EHrN1zQxyLMLuiRL7R85pJJJNKf7n2ZUB3oEQCpkobNabTkL5uqPjcdArrfynZQ4DxLHLe6H3k9LV4TRDJki",
  "key12": "9SuCvPBDXw7vKN5671u3XTNVRVatwBzYjiigMKV9NKZy9LyBxAVkJ3Ep1pkTjwFDocVWrG4HB21Pofb5X9pnofr",
  "key13": "53icUj8qavowu9QEnnMhznrDf9rAiEnrnLUA517nw3eyCoajRPAuSzcZB13aSFEyR3jDyMrKrgbENZv31ofeAesT",
  "key14": "4xFGgpLRfBQSzZYCKmpJf3A46S3QqDAsTjxDBxw68GhRCe9VkEN8q4zC1zb9meED4ySaPSm8qdCGK7mpUc6wA5JP",
  "key15": "3jpCQLAZeW7BosH1MzrdSEdfXVXLv2ooQ5NCTNeGhmgEC4xN1FMSJphd4zbWdqpH5wA9D2xeY6JSA9Rb4KPU4wZD",
  "key16": "aNJXBqunonjLSW1FuZDPTcxcbojKqC9m5ssFFA1sK6g4623k2atda8FiWPPMVgywHAsSTMFNBL9AwyW5zxqPwWa",
  "key17": "64zhtgNJ6g2mcfwEuRU35KEpULhLHZdB276KUfR6HdrA8JFsmNRCbYeYetUWEEWUg8gxoz59QptBfEgotN78X5Tv",
  "key18": "5JNmdbYfHMrAVG6TTkCyUiEXVS2NjoqAiWChH1YXQhb8TcDi5ACbqXAuSEKuwTjCjMJVQP3iW2Dejh79thmdtMyv",
  "key19": "2BoAyJKVEn5zNxANWTbAt3yMK5kEd2devq3ixF6UjFXK7PrFHGWjEWXwSdyQYNkLG61wvc8HymmpPLjnmLXzkbuk",
  "key20": "4UPhNMh29xRTvVkGaZPEMQihB6XfE7QAGYis9dmxhUXGuExy39oUPaBL7bEQjvveoVoboxLuEZELzhvQDmBghNGE",
  "key21": "2hUMXGyqtjCPcNant8QtAR3mMkfYjgjVvPRHdRCzQ4RXv5BzTBRMM8h9gUT4FnSc9qXH17fsYFDxCSeiT4fGkuZG",
  "key22": "5moyRCzmmYh5ofU9Us69bkTk5tYxY72LH7TJSd8gneQ9SLTP81PQtGNU9cKP9f85eDduFurbshuAaJymZXV7Mr4r",
  "key23": "5qrmA5pUJDUafDAC28WcHHojR9SgF2E1rxXrYB3hVve5xV7ZdLc2Q8d7HDL6CvZt2h7BVg7sRHJ1P4iyF4gJE816",
  "key24": "4BnsTPx1roHiMLHDi4xnDzb2dHT4DCvxzXsEYrHajTKRj4DvByuZ883JUVAurNiCMGCFXznSLgXYKeRLMgJcQ2PP",
  "key25": "4E8QnAhaJtwvDHWovsBpbkj2hmnC2tvd59BkjVdhkCGWVYLqWCYov8bnS4zxcfrRgTNP4YswfszLVVg1FXkTdSWY",
  "key26": "624fLFxisoaj3TH7GqXVVze8Svv79zgyKNitszksPQJhZqtkjUwTTtiJj7FQPS4hdTDpT4KL9X6JakTVD1mysLzK",
  "key27": "2rcx4EykPmtTYeiDMS3eJkDYs6WrCUoaYMEioDJytgfbTrd7iF2dwdvwiSoUZR9XhQQUtxoYs3U2cepaBW5wStbV",
  "key28": "4AJZmTHmLYek3QahNbALzyk8Li9RcLmyWe69PUsN3mapWvqh8QZ3Cu3abCSSKcLJ8L94xKqR2bUtLrA1Ryf2NXDo",
  "key29": "HDib7kSdwEcf2d4UqhZvdLqfCU9RevLNwufdBevr245hhJYqM3KeHYn5Ug1RfuziWgdyG2k6Ke8RWoMp2FJ2iWp",
  "key30": "3jyjsDKaxwf4oqn4X6NZcugRUok6di3GcjEWpa4Z2W5GHG4CQ4tHAofH93UPFMv7xfvpUEGzC9AVMsK4TD3sZzpu",
  "key31": "468DXEghMvnXaBHBjU7CbioBrYmxeCLrk6LXH7ZivrbZCvJj8NjYHMmSvEqNLpLmFQRnmrJDNTvUemXumUecHFxw",
  "key32": "28aSgmMcT2JPTaucfwzTMZJQQWjickobuGAyPsbQuBrvUqBDwkZ2aHALmX7SpjJKufbULazYgPyagMi8AvD7WZU3",
  "key33": "3vQQSrSfrLF8aWRhF25QK2FyEYRAJUFRWLHuC8UgJWnkAtZcheXdsXS1HNadmT2QueZdDhrjYokoprWC6kgvreNA",
  "key34": "2ZCxnMb1f1PzvDSYe3BkF79tKotNnD6rYfHRSFYY7R1f8e2qk5ymUUVqDrG4JHBxRLSRRoVCEGnKQ8sUuvpC1tjm",
  "key35": "4pAedXowZc9wf1Va9ZSbFbwVvVAgdE1AvXTvZC4nYBkvy4hGfmfraeHb4vNWUFykdVHZphhz19khmsPrhfpy6H31",
  "key36": "TH5ohLtDKnNWpdkJ7Lj4qBQTMYeuva6BQVF1z9FivLQ4o1PyVau8KzchYYndQdNJy7q4KZB22m48iMV1bPzAwqA",
  "key37": "3m4x9wpNWrPnPwBiiyxCzaZNMB9vGCG7c61zEPVXhaV3PK6rJHdiLubj2S63v8ortUcRducm2D5UVqe23bnpJpwX",
  "key38": "2YshiXjJ6p21ZpaPXPGzVY4KSfXYdAbXqBH9RkeD3t2WG8dt8X6xhy4ZCYRB8RQ55UxrL9JmaZdrP5t5KjVZKEFY",
  "key39": "RJ5rw1U7wm7PTwPqoczqwZEdw89jc7DBdQi2p1uqi1iJ2oMqJPYtcUb2xsDanBHWEYQ13t9nCsYybEDcssZutUN",
  "key40": "WB5HdXxcePexEfiJYqvonxjefMkE22nVsUvvsCfBqm5NWvT3GDMiDitDvdeiCdn8ziWT6KEPCKDyTnHbqpMVXKU",
  "key41": "25NNcE2QqmKdarQWdQTkAo4yyy6nvVjEBWaasCYspMDwKBZSGTgjSWHkNzEGi6sdWHqRHmtS4ZapmHjUvk2XVjWL",
  "key42": "2SmKBKK5i4ajuVr727Ud1BG7YP62pmfPGSkdLswS7q7G2EHT7uvrfjC4Faz6GHZw8b1NCr6AHSpsFJvhPHBM4UZ4",
  "key43": "tFgvDDRzM9XUFcn1LymZhor16TZTeJEybGRguRVTK3caZs5p1nZPXs68sB5PtEZyn9aMuQLyGYdM82z6E26sAWb",
  "key44": "Y57wdwi7D289zST2pftpZLMK6zSsVKFbWZmuEbRWNuJukyQozJeNVrD7ksXZkiBGaFjtiDpL3yzisMeHcqLhMSi"
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
