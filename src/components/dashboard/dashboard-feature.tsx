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
    "44dcde6D5x8rWM3WgzB9vDBbn3xC7TQMpDGjZdp2FNHAp4fDTkFquPhbj6CwF91ZAtiNnMaotaMW24CJAh1kU67e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EGcrrqHfPbp2LwnaYbtKf5fod4W9VSSyehrsSiKEUxYu9Rft2C6sBNHnjrPHTU9wUEAzU6d1eH5SEJBZBspP9Hj",
  "key1": "2KFEmbeTZs2hqsw7TrhjwiMEBuFBxc86N8VcYTVTfBDKhJvW1DCvvx5GkL7yufkx8yVQV6zN4M41Dk7hp43fKCQD",
  "key2": "4PKZhw3ifFhHahQa6FtWHkiEhKFX55gVSTwcxQyg1af8bQHiU6VKhh15KrBQYJCS8v1c1Vf9GGsyQayC4TVvDaT",
  "key3": "JucQGLtNemCddschTzvwqct8AYoGnyP3eYmwJgSGuPbkccLCYcu1YE8cG7jAUwxfJCyyMcZH3FdCvMfPAVNyfjL",
  "key4": "64F9ZHXiywffu9xU9XJVxLpK7nheyXSUKjZ6qpQ2qCZ5jng6P3ZwwpzMtqMa3HwYYD83RGrq22pDAyiqwBzcZPHd",
  "key5": "5CghU9R99QPiu9Tq6rG5caWduko1ZLGaRRGy6Tuj2WknoSfxvz5h3fju3wzRTxXJryW6ZUvkuUMS9pTnrTmaX3CH",
  "key6": "5aG5jzPGkZ4uTTWYobT85YeXs2dMXzeSn2erkSUNjnEoU6J7Tmdf62sWw5kEGwu4ciVTJJb5i7fAv1gyqc9HZeAu",
  "key7": "2DePLRK6U37zgh4DhT59UNJPQMqyQZo8XvvfRdXXzGhbuUrPrSeJMM646o9xHxiYb7iVgp7S7kXXw9G9ayY8xRBs",
  "key8": "4kqYNyRxSY5azQhUbS9VXQ2wxBEc8F91FW7WPdJdhwAW8cB8YTfLh9nQdUrggoU8Jkdvd27p9tJmdtiD7jTohZt8",
  "key9": "BA3DDTe3kktLg8hqn98tuHsw9LDokTxw1j19GziD1eYBz2FLT1ZHmmcPHVBpXBhNhwbJcc6tGCPhUSkw8KC7mHj",
  "key10": "94oRXy1NKpy21orwFQeet7fVkM2muMT8Y9HUbywTLD2qCJoC3d418MQkpTDCbLcZxTXGzUDjvYC3rbHka4qKThD",
  "key11": "2G97wnFJUsL4eDHyHM6dupKAMimkd5xZdBEFZsWqVWVjSVfnj2FUknooNb6VK5emEjabkXfBubgRT3NdUVAH8nwQ",
  "key12": "4gajuZtWV9bpmvJWh1ooBtfGau181VhJrbKKTiRaBnpB5j68eEVmHQ75zuMH9TkYzKe95ReUndegz1VEii4Nw6GV",
  "key13": "2aTq3YZKi8y7xgNrDvtmtZcna665VfRhNqwrAEF3AVR4aEFQeiVjSSaKNVAw3VJ7cdddZDA42jDQkAi9XsjnLVN6",
  "key14": "5tdRqV2ZZcDfPHdCDftWGagHZUVSsdGptfCt4ooEtiEhPuixnhYDDEjmfbRyQb3Noc6vAXVuZonC3o4cm5NcTzBn",
  "key15": "5GwhrN4E3X6YVSgxFsbCXfxnJfpR6SR4X3xk96SPeAss3jLQixr5QM23kkGfWbVgz88q4NxqvqSRYwPwoDPNY3QA",
  "key16": "BcJXSdxvK5U1Ln2s6Qf3SqYEPbdYTAwfM1pfauz3CovmMofAR4ZBhTSWxzCfv5mF1GC2xMMvMma6Pynpy8qbgC5",
  "key17": "5LcZB81eFSQ6td6FjcxuUXiwDwbAjbPaxdHvktxY2p1qYvj2NtaAywewqX8cZP6h7zM3pcASmcPg1rbaDyeQKuEz",
  "key18": "vEiA4WiwzoDEHddzj9gNSqDDYR8qBxsTZrVqyqY3aNfmSLfhtdGSaUQh1ofcoy6QB14jikGY9kXLZvGjzkHdLRh",
  "key19": "3me6vz12M2TV695oBxLuz6M76XnogLCNWNXpS3qrEkUCsg8XPWQtA6tmTusNU6stnp5EfmormBDtgSJmDkNnzNrR",
  "key20": "5LwmXPFQWaZaDw1D4963QV4JWwCsTPvffLDWymuycY3yQT5eZiHPtJmPp44QStDiKLM9E1o72paRMkHGEMGu6HBc",
  "key21": "3RYGmgyaGRWta3diJjgjnZP4SwYvv3Sg6hAkqmCLiuCmKpkEEzQNGNhHic4ScxaJXvLveQpEsZCAd7tMJLVRnTWJ",
  "key22": "3RjT3qw98RmzGgc1tiMRxJayeXgPh3szV5YnYQbBoDhxyRXhHny6UCMk33VGa8jSYTr2rkJE8WVuSx4HoR63SLaA",
  "key23": "4LKJPoZB7c3suod2JgNd1T74rRD6kPjDbcerGZGjQKgbtTFwyDevCyp4sbTv4QVSrEkdtUbod4HzYJmrusppD3Yv",
  "key24": "4CKuM1hfuLbCLritv52YboTF3jUy4QWbu8ycJcUSAyEX43G6ggQGmT47Fs42hgt8SEpxz3CDVQFDPnfMz92u9uyj",
  "key25": "5ow6Da7ccvUQy4dvrTMgW3Xef16CSXTJt1wEfM8cGFudcAz8fMguiAWshaYfGVtSvH1mejcFnsEbqBYLU1XDn63M",
  "key26": "tvSjm3LMSfiBTMWpvQNXdRzAWTfgEstBPhz2ojmapsRMyxxntaYk7cZvENWGQ44nAdVKzEVRdDWJVLv4PwbyU2Z",
  "key27": "4MsnDJShFtqabe2bbqaN4pLJ7PYTHThiaDBhDNeoYaN15aTPRzfZ6qXCMWvfdvLutNjvqbsA9ckwnWD4vMG5fjrU",
  "key28": "3TSNPStM6k8zYdQMtSBjaGtAuUiQuDGRi444QRpKaAZHxYR59BvJY61c4iNfo8UFyw7nn3UDUCwt72po5nunngbx",
  "key29": "Ri5MtzwMji94TBkw35Ft1quQGtEpwjyj3Pvu6mqbCTg4KZd5YwpetakcNKWeUMXXCfSsM1vpFQWB8JPKuQngEQJ",
  "key30": "2P5PAXJ6Ga1QWvzQWYhGNFBHDCrD9aD22SkjUawjmcRUK7N5ehkS8ZutSpUUMLQFGiXH68MzUguERRJuBsykPmHS",
  "key31": "kC269CREaGeTNGctrncKKsRGyuW2mHZm1HSU2bKpxR6NwkmahrhLu7WhMpAxQWEh7xbMu8mUZEWb5SvFuYaWJQD",
  "key32": "5Xn3iVEKMJ76CXqEhiKRDrYdnuRVLNqcyUdk3WxHUkrVFCoA3unrdJaeXzTN84LNRXAUmTEBzr4CSaPRWM2cVK5V",
  "key33": "5D6q4qAeKTvUCKhiP28mZSFdQWvpKYKn5ciYUyWFMc8cvW9B2qihskrCzFGFrZVpYoMFheLJY498XWa3bu6pAccw",
  "key34": "3HeX6Lz3RKbpBP4T99p95dvqygaw1XkqL9xqKx3dAXMW1dTz5x85gB2AKPyT8DQmXZzjPGNeDzkzTnjCWkLfdHTm",
  "key35": "231hRP6iDzmbeRfy7seyFZ3tbp8KkMWRiHYwyuwMvEc3uUs4E2WL1WDinKLJU7uJGVCkdi6P5SC3JGSwFjGQRBva",
  "key36": "48o1MEAc9CDGpdeWj9xnuTsKRjXPkRz2zC85vJbzDja2SaLuM22v5qv5v1CTnKrQByq6z7pRatqi4uSLuLc4gnmE",
  "key37": "3p24RXxSZk9SQm1Kf2vvsSR3Suqa3TEy3kNR1C3KbWCsYASV1J5yJQRP76qgZHGvQwWAwpDikEMoUfdtLptN84n3",
  "key38": "5QeYwyhBx1dSNujtykuJj6jKsQH5pSZEEYBrxKz3p29KQ97MEYo3o4V3tPUyoAvPKngAoGuYLg6aBGsZ3yMnYTb5",
  "key39": "2og4uBvifQKquBkEFeVFKz8nF8rnXdLtd56QKUArfaw4hyDN8rjnpScubcW8Z4vx6hkLbxPwvUAocU8U3FF7NqHi",
  "key40": "4Qfm5AkU1XpuiSCTiuCMHaXY5jBqHhx4CHh4wBgzr1ZzxZsXCgoRKG1igPGa7Y8bfHPmxiVnAZP2dQgGz3P84zuy",
  "key41": "3YDTixxeQYHtmccqeazPTY2n7ociztHjTDBTfmpSegnnzNDXND8aKiccxsXNxve91Y3nJhx5K2DnPhaDLnhChRZk",
  "key42": "v3R4xJhotpAACs563UBmn2dyrZuqmd8i1a1SDdJRVuw555FBpQLaw4wNFcbdoRMVJQmi9gkQ9yds391YP6JZKvK",
  "key43": "2yWp4B2QyhwecBYRmNDuzDGBSea9RiqVQ3gNQ4YCYBy4E9eXcz6oy9QGQ7KfcpQVLe3UHsamU4c8ufibWghky5Mm",
  "key44": "483vasDR9FepzckcTB6FZS3JWKi92okBNx28eWzJhV8BKZVq6ZA65M2ocqjYer6DSnM6wEpoaM3yW4TWcJee88HZ",
  "key45": "2hzBoiMaQTzRAmRbh2qKXfYnGWsR8paEWb5pynsrjHhwz5JnPqcn1jZbr6mNdyK7CAVRJtPsA9aQXHoAocyVVUCH",
  "key46": "2VeuDE9DcGCmd6UsYfaSEi2AbZyjK4dEfeDG35uazWqUzVrcY511WZBGUDqUFYdjxtHJytGB4WHPkpdkVDNmvtJR",
  "key47": "3FkNxM83oeEQz4bXMCTtS5QSd2gQgCeV24uVZyD3jfr69XmCon6gCFgPeEu5xcsokgbAbY16uw2suTLnEa2jgaRD",
  "key48": "n1kDmrcqPCE8JZGVB9GzxNTVfcm1Z91R6PLr69B9DXHTD9Tg5zvLWfeNHuPtMzZJ4oPq39NPmBMr4hut9uzskcK"
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
