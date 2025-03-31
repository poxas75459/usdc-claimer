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
    "5CrPJi4pQfCmNAZ9X5PG1bgD11i7Rg4xRfqRmdkGfJuN4ps9K3Tm5WYVcs9W92mkZ69jpSh96WnD2PW93o3sUFiS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MKLBGMfFY3sDsTDcCnSfbPu5PxwQTV38qPJiSnPNcYC6c1PA3Yb9CTdC6MNJGZSqxK9r19qMyNMSrXzoqPh5TdX",
  "key1": "4KqK98XNWPWNLFy5pQ9vhuofb8er3RV9XBiwBmmScAybcnvXSM13U66Pv1E4eACqb9fgWQ925x4hjdG851SzQt6h",
  "key2": "4C3tEDWbdvq9MhAp97Zh1XbEDKkfyu4tPSUmEhz54eMPQ1Hwwr6pi3F3MgKnk8uSH2YyYuL5auXrgAyh6uRHokC1",
  "key3": "54BwPNfXGAMaRjVp47AsBC1V5VAJuUBgKxzQbrNKp1UCq2W845Kvqd92xqA9X3CEZrm3YonJYKhkvTxBeZ14Tkjt",
  "key4": "4ZXQKbmCWzfsb2PKC5NsDvKYo1azG2d1MHABjgR3CagaNjgCigT3pDz1MXdTxvCXeWRzKnHFNNGEeKMBZ3saUZ8E",
  "key5": "Kx5f3S7CGLuXwGZj6YvFGrLdGBDeGYBYWC9gUcLQoSshzFwM5Ewfv1ZZaTxsLsRxc7qwnRz25Dzq1hXPxWafHnB",
  "key6": "3NVFDSTsY1EhsnzotQRBq81JAHk64ftcHaWYeWXGSDCWLST7YHy2JrJbwoJfrE1BbU7b7vpzUk1jWdwWrpHKQuQS",
  "key7": "4S92cQXK1Av2p1nMDswha7TX7ZEkdQEwKvYqmZzsLg1jrRPbHxQzVV1tgYuj8BXQWUUjy4Zp65t8E5WkMuHKq792",
  "key8": "5fQqKzbjYc6GFpNjxCUHmpLmR9bxkxwq7pc4Cgrc55axMiLibdvfyczheaA1ss9Bpea7jCs4moJ1CrckzCrRm1Uv",
  "key9": "63mz6D4kxJyVcxWcaTo7qGC6BxmfmV8KumUwqo3EZLstQ7GmkfSKYsQn61FmYg1BJ6LaQStwDqo7YDiuKuMfHewZ",
  "key10": "3fSSD7kip2GUDQ4jK65fEkEKx8MJVy9YR1T9WeEaeWBfiPnhrwqsZ8m1evYb3vGv58GSV7gdfWQAyv2QRv58Bst2",
  "key11": "4id8AQpBLL99MtmFn1wt17vtceDbDunhC3TMeMs9UdtsGwxmsuguYAHXBd9qbrUf9T88xJVc4HvpFuR87EMdKS4L",
  "key12": "4YAHicgR6CVb5hYRRZc8YnfgkoTzNG4qQakUWvdzTey47rrPMSSVX5XnZqpB8887U6SWWt4xiYUrug2fY6zHA18M",
  "key13": "4rWv5XnZgX1aMZfDr9DSgS9fcGaF2gk89aeUQutmuU1X2gmYA6LKK27MKv6wwTpWb25jZiHk8j3xfJKHFKp3NAaK",
  "key14": "4DB8Fu1YFHBtghRGF2ZQiyWitRAMZH2nE6MkZ3Phy5DLhmNgEwpuHMhZGrxY3TfJwy3XegiyQBAo4oW7DmgJtCmM",
  "key15": "Na65TCaUvu4BvW48vmkBUhiRHagxhtXzZMKvcctzmFCPtr5cqsF1W1uxwnTN5GgpsCDRwon33FcjVxmi5yb5iPT",
  "key16": "2pimJn3NgPTvT2ziTKka7HQNLEoT68QC8NqQZjnZyHEpwjpXiY3HyPT7grDsirkBorz72pKHumpWX1oGQk4xxbMs",
  "key17": "2iEY2HBNtEsvj43oZ7bGxUyagWLFwxvWGV8sWUn2bx2a5aFYjdXiJui5toYXhw5H9rgx9DJz1EeQJnBUs4oAq8P4",
  "key18": "21HMqqLTxB2z3jj4g17VdgKpB7W9J5KgUQkfSdTgv4agxwu9dVWHvSzz6vJQdbaV3EVmrSRMVUjvpkGY4UxPtnB3",
  "key19": "51eNLZ6ANNLSh5qRBmnU5tQ1MTjqWyLLo8dcnwKE2awX9xkNguvRQMv8iZ9HaVGkm8LSoyJtfzuwUtc1Cnvie5Gi",
  "key20": "svgcQ7L4MRcM32NMTKgzxeeA4nqhfkJJEfVe9AYU19qHMBMAyjaZruriUK35EW2ydGJeS848mwy2r4TVUuVPvs8",
  "key21": "VGKZVyb8ke9RsArpzZSsT7FT1jRzVwjERb73169Xo5bmSkf4bjQtbvjC9CydSes8wsmubF7qNihYmSjKVbHadNa",
  "key22": "3yuVcjRsuAAmhoZLg6NHH2gkJTNmodG4mJ55vDtJhXmLBJ5vrZDJqCjihG27AvCTrraqVAWFBCVXoZTf8RJdD5ZB",
  "key23": "32c74yiaTeCsz9VvTQh2qBTrf9JiB1H9cn9bfJD43TRfdrCh6sxjD9y8im5tDQo31b7LSMzpac3NaFf8zmoFJKo6",
  "key24": "3EbJXRRku6ixnG6n7SfTAc9hHXhUvaNAme1QwRJXDDqjHs9y6MsiwYxaWBC5xGjKyr1uPmmf1K8CA46EPVvV3FpS",
  "key25": "2vmwwjBF9bfC1N2Th3eorxSNwDyurxZQGZFaDQm1NDFjACNdKdhDszRRqpTNEmyag35aRk7a6UJ9F4pxbT7xfKz",
  "key26": "4gGL2nbSwFRcwd2ocfQwfFNRZCDnvC8wr7z2eJ7JRN9sm9P32xtv6btQ4QDEK6QSqNPDjfgi1ReJUQztYZ2vijvH",
  "key27": "qqtM4HAdn89mPZ42GgzfnXF4c9tPM7vz9fQXTbJdDNQgDF8ksijATwVKCy6H6zx9BFijdeJRMAnRXyR8gQ8jAJE",
  "key28": "3giD2RvVmAJCQHCnTxvnJ6zXFG9MCW1sP5TXWpe8Vk5uFty7pRrP4q3r8sMh8qwk3b7wXMnEyM1o4hVWY49NbCoj",
  "key29": "3UwzWfEhogYWDBE5if5Di9LpwwFEpczHaqJt5qZiNaJxjGcMt4MFbdv1HSDZoBz2mnMzyjbuE3wSbMtvAv4MqTve",
  "key30": "aDn4F4QLW5xwjhofDEmbaRpUVwECE5ZGRkdoh4cgd9Cp96UDvHbCeUNPAf9qJPrkUd6nNBGL7bkjRToXR7TqpPW",
  "key31": "25khvSh1Hxq5T3ey8TSKXZW8K5CBRzfccf3nbsgutNi1qREx8uSnWvfRnBUmdpcvnWTrgBPCh6Vf3LQnfEXRTCJ1",
  "key32": "67U1eBxWYcnEEFFoHkFcNBbHUVKGj5RhS4z2fQBYJ7j7Ted5v9eZhaWUsfLsuwR14tZXJUQmJtVaQo6RVxQGDxuz",
  "key33": "5Cyn2UDbyLrPomJ3YygHvGxUeVXHuhQncCj3g9TcabsYkJx2wWWMgVLkSZkL1WewMW79dV8jypzs64sQSfFbaH9R",
  "key34": "gLvdTgkto2qbMcRMRXhVD8DKKT25E4cw2zTgT1iPkEYLBLGB1M3Zno3iuMoKU4QNcwHmJD3mx5BJQ2ovJ2DkLxC",
  "key35": "23sqJ7uhPEZ3ZK6sEDwVoTBdQ3YrebPpKMG4sYTwJt92HW7GgXFNMyYs8zkJgbo66U68NfUzNxBuQaAa61WJowwu",
  "key36": "5U42TvQo6bxaLMM6yYKknJBvuKyTjyWBKdNkQZVi8ZW6etARbvk3n6Ms8azDs851ibuXxnEToR9XDxdsP5WqngtP",
  "key37": "igHXV6ZFyfhSACkX7KtbMYUVUzQm6y4VkEuYc2KBCirvahsomLHacnQMJJjxeRHyWUGLZsZjJ5H4gF3eDLghoeb",
  "key38": "2ZhTPXWJb4Cf1XHyWfXYeU3vxrwVSd7pJKESLNgKPVCYBCbXK8h7BtyQ4U8geQih3Q8dhwQrvsSr3bdYhtHXUVYu",
  "key39": "3fFFniN4y1rvzkwmFz3gEUoxqvdPYz9J2dUQpDyuwgZ7zj5y5vSmtcHa6PQ9866AS6JpbDSBZBcWbizjP1E7Kkuz",
  "key40": "MeMynW5A84zN4TWpmTwfdEYkbXv65s52PPDMG8LSti1wmezHkDMtqvScbBzYzsqivMyUxej39XzCCprgw7zNwZN",
  "key41": "379hS5Ggwue6UabW1Jrv1PzuJKQp4zq93Jw9hWAJegiHU1iaDTzBBKGE6m8TKkUGtf3B4PjSCU6dpejDpXotA5Uu",
  "key42": "5VmN6ifCXUDFrg9iyUW9g1tNuE5uLhjJv2eoAWnMV8pwtYZu5TJJLHdwYPU8VmPupCBgiVjSVUmaSUzs1WW9f8od",
  "key43": "Q64aYxukRVpe3vuWYoc3ebrEJboVqsps2FkVm6MPQEf3JH7kueomcL7DM3nYy3yDWS96piRSkdxTei2pkHsLdyN",
  "key44": "4fNSmwPJWAQ3DNBKytykuWvbVDRgNFYiqKTXusCTjCB6XpD1VenNhwBnbMfKS7dY2DSjt8ZxzFALaG87dUB5ASpE",
  "key45": "YuriGjndqWUTyfK13RdtvgppSvkHdpAhMtHcY75ag7uVidyEnajJA5j5rCeMt9RLJi8pSHgExnT4LE9YVFLY1fP"
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
