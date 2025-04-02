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
    "48nXhkoNLD762q8tof9PzPCvbATiWhakix9vhxRHG8fgZezibYXgp3mxZ3gKW85g54VnDx8bXJ1TKs8eJvUMfCck"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ENSEJ8XUZ7iZPKxksNooNusDMjt6thrtwzKae5YWRydv5jGVEcZg2uXKwRppnAfGjwDcszYP8CwBWFC7S5Qnjih",
  "key1": "4H6qfYKkuEXHhphewgkLY2azyRys23ufb9uR8XRgaZk1dv1hx3s9k7wxTLuH8XKuW7ha2e16ss9xAFhPR5UnUtia",
  "key2": "26UxCkMYbPEDUVzgueipt879vv9am6wn3YKxHKf1EzqMjsKCeLWez5LnZuHggSZMXoBMcP6A9bos4rv1S2itPua9",
  "key3": "3bL8xg8Ee4d2BwMHkrwvgySCMeLxJhvWgrYtULnuFcGhKgGAZPjDdRNHcuBC22eFbSpv5yiS4aRm7AxshQaPQirB",
  "key4": "kPgATMx3BJ9D8ppG8L69GCpscWR1adwzk4opiNGFhaoMFTwLy9F9Pau8bAPjtGNgXmukLUuT4StJqmc65XpsMPM",
  "key5": "5XFuUmxgMf4wNBhhTG2bzkTSszaXdgNkkNL8tANKW8H4qVyG5MxNKGHpRaaJJVEottnKNYTsPQxLshr7xKEccxxB",
  "key6": "7FygrU2h4wQ3d1yaPXtRLGpA9odEkrU4obUWhCnnhuHxcVbCWcYzqaeCDkkVKNU8pwRcVuZrGK2XTmHabCWjCLG",
  "key7": "5soxLe2Mp3g58DwcZ7B4wMDVJTk2GC7N7mQ7VRhKAxiFBhUvNJMR3rQFVwqBTP65RJ2hjxm7mJmfVbzWyx4eKZ9L",
  "key8": "2E4rP9Xcn2FbTUjZ4PS3urZccR8wksLniTqqiSPdnj5WXbAQEm4AFACitcY32KAy5J4FxHTwvvBaAXg7XCdxp7xq",
  "key9": "5DzCwQirjVcPFqEitre9pqhcyssE6WeCfYABbETTXyZVZx69HHVYDxUZ8P8E4XFy1ERaYSMzuXFbxwxug8rLUdCg",
  "key10": "5w9TF2WDFu5trWNS28HDWzaWRtorVtmMmwWD6VFDbY5tJhXqyMSgQhhicFiLLCNjFLowe1UQDaC9XmMeSMHb9AUQ",
  "key11": "5Q7sVFD3W3a9YrMuvPaYCf6TsJoa2HDtUMQPfAZK1M5Dm3cjHsB6rREFxVTd4nifA2vksSPyzgew8LLpCFdwrhsG",
  "key12": "2aFU19CqjFofFJ8pY73vq5vdbass9yqhRq2DPRwffVTRaqW3wgBCZoGz1L82YA5HMBs59Y3WLFuoDycXowowEhHP",
  "key13": "41jmS3xCFjpLHosDZyurad5pqGABqZd3dq3Ldnh6yPLHvUvta3SyU7oXgRFtw4JRALKDH3wceNC1QXmakhjCmcts",
  "key14": "4TxvVi9quCtYd7ARrHR1ZZuZ5ZXLtV7rytWWCjrGscGatVUfXWMCLQojftED7Q1Mu6gZ5DpeX6QLP4JAcuKF69QQ",
  "key15": "5EFwtN8JoZSYp9DVdvZ2uTjAEZgSik9pzrDH5LmWSrpGYdb26HZZbP6qxcw5G6qKjGmC2yKwc6CsLvx8jepUiHNv",
  "key16": "65Lje3QZ7TrRsvikD56iF424Run3H4Jzsnsw8wj6zb8VmCr6t7eQVb2tS2Q1xusfdBfz4vZzyS2fJ7SRXkLXDEny",
  "key17": "wKJPXLptZou3jBYBUMH3pbL7ePHiTDvxFvnCZkULpDAMY4WiBgk89Ms72VUooGewGaRVTNE46aBq9Wzwjj9iP4Y",
  "key18": "24eQCtY6sY1HSm8ptbMhmns5t8wdtuf1ttgSWHLy6uCDSCUFpEGskZaVJrghzi99J8XNhm6GANWH6d4tHBNYDRrp",
  "key19": "2Zzt6SVU1koaQoQJaDfQT2RKZhHETeKUGVgsJLaoQmZBpHt1TeAf72YeVPBcjzMRyy4gYi8u87zDPFGtgbK6uCst",
  "key20": "4Rtrgsmu6Aji5Tpmz7a4bWdaJszqHokQPiTGiCor3RW4ASYVD8ifMH6ArxxDDRYAiobuiUujVUkTLmSKXaVnypZt",
  "key21": "5yi5kyC4ZVB9wBqRa1Bb9trYMunV69brHWa7PAhQ15RMbD7n2oXeXtMTjxRzf81Pb7XYjNQ7xZLesp1fJ4t8DE5L",
  "key22": "T3qh6spMwowPwDHn4voqRYinx2vBE2xSsgjfTuRyVtdv7T7VnbEcZH4inPDYW935tF2pFHWptp1ynKqMzg9hjpu",
  "key23": "554RM2w2GfELZNwCNnBDdBZYCBECtU8Y2Ph7xe1Za124sku33P29WQNQ3nsfp8Z13cLFxhHTkcLJGkZ4LZonBmwu",
  "key24": "4P25z3KzkNyVqe1s3Ri7GyLcHXSPdJCAxKrWAAkGmcX5UNJmp6P9KAcPmbCmpVy1SuiHEG9ZtKguzMCvHjuDkm7U",
  "key25": "4hizhvx6AhVsMfbidLHWEneDavZ9aRTZV9TzUwGfhGqvFqJDrEmjaXrdAo6dMPBRJRY7C5usbqRyZUdVeLEHNA4j",
  "key26": "4SNKw3Q14E9xHf1BYw9M9o7hta9mrYTQnQJHrYbvkAc8k65KB5DM6VsWKiXQzFvFR8ZTWJ9vvwvFjwg12uTnTNpA",
  "key27": "1nj8KWo9haxQDQFg6n2Bbeh2vKN7cYp4vz2zphKhJD5ZMV5wJuqweFoh5cELhSRbWGtRFj6PAYfHfnZibaZrFkj",
  "key28": "4K1CUatjt6SJavdsZuJaeScEwqAjm6FSHvKvJ1WmjApCzYkzATzjXBPuKuPNMQxEGzPimTfWM1vrthoM6hteC833",
  "key29": "55uz3UUvB7yd5sAcPoGJ175ae4QWvGfAtgEXfcam5sYevZnmGkc1FSnnAyGJaP6fVLoSQaxJVGkw1qVPxsmsPEd2",
  "key30": "2hFTqNpQZqLYwshB1MXyK4kVUxzGDRfEkisMgyyF79BubQkPzBDHPjZbhac8GKpVzVpet53KLfFuSsLmJwraXrUt",
  "key31": "4aAr7odyv3NxKzBseU6nAhYVATraBsRm8BBg5TJVuRAhAyu7tqnafYZ6Vftr55REbBVJHuMkiiAGX7N9fMvsUPGH",
  "key32": "4XsRNPQSXA42oGYbpXa77tm5Lzt7Br2dn1rT3RkrBdG8wKq2UsuLNWvu6cKyHEj3sRnzJkKegGu8endmbEgSeR8H",
  "key33": "35dY3NNpqEAxutuEYV3tzp9mdwJNNccvsmNhN3dCyFhsR4TziTxqUwEryzEGLp7yxKwdW8bNx5UNEqriVHbFpVo",
  "key34": "5g4Ak3zWVupGuwgmRuWqTEbEiL8172qxyEStzX56NpCA9Ayzzn14ZhrepggaZKp6hmtPFuVpuTGPKXNpD4pEQK7Y",
  "key35": "4HpXHtoXYpJUmnVVot6myc9UrhBBQ4QfbPuLtS39jh2vNLZDMqusZxVbm2FttDf3AJmrdn6T1FKyKLxVjmuGsSot",
  "key36": "2xJhoxQdPpZT4VkbgNigLmCCBQFLrmHMPJpwpcWsgYj9mYM6zYRhSrCcPsCXRZBzfGyfRrUiL2awNmX1LAtzHZza",
  "key37": "3u32fuhf4AATEgJ2caGdLqPCGCxp7QfCMHN9DW3iTXdNkuNL4SXfHsVJNY8aSU2vvSzM5QfrxRkdVa3jbdJjkR3B",
  "key38": "2jx9SCyhvAVmffKbCLn72Afe5CXNMvPbkpLdac2QiJ7g4kSfiiunjXfsZD4DL3NmSFzGTR5FrikDANoFiUkwbeVv",
  "key39": "2GqyoHSSRhsMD71pmojB6wy4b4ErNkaAAjV1eXW5Ry98BZ9tmCesxwTAJPjSRQFUt8H5qhry7T6WF7xtNc9GMVLh",
  "key40": "zrMZk3euuuwZSmeqE7YyTDnSoCQoMmjcBV1qL1sfBGkzLXqnDq8nqZCduyg4JZzXsrztkgY8RVc2xCdLNgsrPiG",
  "key41": "5vqVyrt8gWzAxBt6143DPpT4L7NvqhQWnVDrgXZ8fbjV7jdQ9RgGDy8g7G9FLNB4QkDeZLKFvSszwXzwTc1UDhD5",
  "key42": "2U51AQQbENibuhMSZbgrbNgTo1DwupyHFqK81rGtnE6bvt4yvoeUP2d1pVyw6fc4CdBFqdGXGFW1MBQXGhnEPZ4j",
  "key43": "2hXZR56m7pMSV1FuUHZktJ22msHQocxYRQT72NqsaE85oZCJT62tPQjd26iRxrYwqnUWXMtFm2dsQwRcFxx4hDmu",
  "key44": "3PzEKasvPDDzifUbu43CjciHXfksZBBABNXd3ePTnpSxYf21TCJaijMA2C7YDd7Z13YBxDE7DGNpLCh3y3wJw3Rk",
  "key45": "4XAJhJYbQyUhvMdhyHysGxpfgy3F3TnrwweEi9ekdA5hE1xugK8ejDCq4HbJXuoULFxPpsdW65qn9H3Dp7gaCEjH",
  "key46": "3GW6jHJrDZU4ti28TZe8nNiumgpxY56ZQ1xhLnfJUHcFMP9dB5MXkTPy1pGNvh6WY8hyuPoKNW4ZmGfZLg8LTbR5",
  "key47": "zySgt7f9o3ZgkSUEUg4Wv2ed6BrTaE8E8sYBjJ3Jk9wiq8Cvb7nm2JmjYVKGkJGZuscE45SYWXn27FzYffVVUxC",
  "key48": "oq9LqJtke2U8busQF3ExYrcCMXfABD5Apaxr2hZ4jDHdPWa372pi983pgNPQo9sDYjG5sTnCZTrf9e9rs9GVzFJ",
  "key49": "3Lbv2wbaCJCK4DruiwoSAnz58FFaaL8CFYqiQR7XB2LYy67g2PBn4R7wc8FDjm9Agtuur6GvqE7suSwJLhshFVQd"
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
