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
    "WxRcxQLJUFx9wEBfxVXSGQfXMcCmywj3HY25UJnXXQpBobmzdHc5RvLxCQr3fST3RfhGHuByRm9TRf4U8fVUUqg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wDziibPk3bd23p5x4mAtVXHCqaGHfjWPtxaEAth5AYByT6k3i4fEUdcrKjtSpymkCMA439wFSR8BHkx1Um3MH37",
  "key1": "5T9DciYQj577guQKBEZyPSVyUddRg1uaCkErDo5oe56F3siy1fxy5HAv6MSovQauqzfr39aXEuRm47KwhqKsFHhU",
  "key2": "2kfxZmDGVpggd8Ecw79csoxqYWmXi6RtknzZM5ZSxs9TnrYrUuXKGfzpXp4gnci6RyFV9XrshcszTsYAoJk8VyoG",
  "key3": "2as1iTcWNFG71FkVjbyBk7yRdy8GifgWmRZrD6WQvoqBQ2a5wy4wRpFZGbeRDgMXRjPEkcKuTkGyRoKh6BinVXTh",
  "key4": "5pLvyh3zaGQBxFj2tqK4wWqPqaDQss5nwYaYb7mubW7jRGZFLyJyoqagxyy8DiYznhXtF22AqPQiZwv2QBtw1PGJ",
  "key5": "2rCSgZy5amxTGXPqF5hoh51tDWV42UDcgvZVibh217qeb3sgd7zs3gXme7YXBLmSpN2CYjdMLYndpJJ98a7nrbhF",
  "key6": "2Yd2TXtGxL2SdTeyNEy3FF9mcL9Gm1jiDDLxyVLcZGo3dCXppA2U1nxqnAURfJkhC3fobB85A5wT2iBtHAQiG5pH",
  "key7": "5VZXheYSZmdNCQVcmas9qSmRYWMiZTbmBjBZ6stQkFPWYjCc7r12B9nsSw9BufNjbtaybE9XPZfR4tYNsLUL5fMt",
  "key8": "3gLxNyGX5JaBqJi4zHq9jJZSB2MTN6tKK9Qgu1VJpVrF8ZELiGQjcXbdCWby5fQ5xfjXnkBKCHv8ysRnDPxRxDfV",
  "key9": "5TdqnHERvUQEjKwYKKhkRh3nj2pPYBtMrt3VoTV3V7sPLUiATXquWyB4sq6tsDZNSDrJFQWhiRr12He2vh71owSC",
  "key10": "3y4wA3LCRukbvPybvVU5Sqq2qtwMyat5D1KApmoKw6ZNfejBvXVugwB3vGjvt4T4iReMkM3iWg14MgAKxSNonTkK",
  "key11": "2xSuVhnYYhGjvFUbVTQRriqr5rezrnx68t9zrcTsnvcuxZGnSWiKXeX7a1dNDLBgmcZc6VkQkM3droP9MJCkh6cG",
  "key12": "3FibXEBKDVkTEduMYnj18SrLHxQLHfuqnUyc25GK1damLRT5i4Fp5fqa6Uu4mn8Yrk67F6kKTKymvWZN5hdo9qoD",
  "key13": "4imx97uz1tuDyEzUW2eZHXBkWAnTxh76gzJiyu24UXbcEpxc7tSES9KgdNEWbdDHkGtRHqDjAFdwWDcVh3St1ryJ",
  "key14": "3tELu2yx1cewps1DqXonLJzuw355syZZRtWK1rCbdF9BjAstX7LKG7KbhA1WhcH5LxNNNRNAHRgTy5adb3mWGDUw",
  "key15": "5YHSbzvbGn2fyecQTA8vfRcecj9YdDWu67tmivzf6SHSMtsFcU1WbR6Cv5zr6VWAuYLkCDyWAosjJH3ucd8oF1zY",
  "key16": "4YmTTtnaQTuGeajpcxrf8z7yKhV3y3AUsnouFRLiFX8GGGhgV8eeqqQNi7Nxp7jgsDLLr8RV2m8bEJWQpjPoR4Ns",
  "key17": "5Ais8PaYwg1JULpRzXV228tEfHiSpdCMQVttnjVoBkLydxBDPem9kz8aB3kFWfA8AP7svv824qmq7DbHVRdcEdET",
  "key18": "4V3qgYVyk8YUh4Ka21W6Q3k5iaezasUgRzgp6MCDEAaBjpWSAzqFxbmqDw4He2EteCDiRkBJNCJTV51iYV9s6evo",
  "key19": "299nXbvmiyAmv4sPVcPEP7q7RqZXxcDUo4bAiyDoXgBrwoLoaZmjQUbVH26fUiL4aVkkU7y7qgpWinJuWrEzsdV9",
  "key20": "3r1FDHbrviYJJBZNJXv8CNXGrQe3yb4KECbQc49zoDJCeaYXPmfeoED8sQN2NRuq3oh91eWtKjkzHn9HMSsGnopD",
  "key21": "2wEz5hDawK9HpAu8m8Ly2byC8X2w56FX8V7zffQAFVfcSkU1L7pPxAv3amiaqnPkb1fEuJQCL2D8C5urLwfWue8z",
  "key22": "66MUBU5WwcSf47zPto6w9cyhBq2EAdJnNdjsRc1HURx7UJ2pEyavRT4qreCrdYSbG5V2LdmuqCccxRtRx3YAFBCr",
  "key23": "227ut5iS1BgDwo6cHnTppcj4F7LA4FCaP8Hcr4687CGqd3Yhsann7UKoaoX2nF2KWvnk4iyBJjjEDfV7CrrmKAbQ",
  "key24": "3c5HKrVYa4BFyzSnrHoyb75GcXg1RPTajfxhXF2ZsQkKegtWyYEnTZ8EcZ96p3LneHUvtSwT5ELmPYhXU6Viv6Tm",
  "key25": "4dVsCwr6T9zJYK1VJskjLJbFE7CiiRfyXjdoWEiK1smAuK9VPdhksXw4cA4JAbYwSbn1bDHZyCUpZ4cxUb5QY8rC",
  "key26": "T1v7UdDqp4r29Yt2ZeauphrfAWoNeNsUMz1U8e523vZoFgES1dBSAGheUijAKv1TaorHDm54UofdWj5ruDME9vV",
  "key27": "jDKpWjLxU5JuMfPJ7hJ1NEzDmefw2W4CHkhyyM3fEr6dmCsP3iaJkuraNozumLuKuGuER8gxJfRcUp21WM1Pdib",
  "key28": "3U5mGpKsCncsA92LqRgMdNxRP4zckcHdDupyqcaTQcFEnSodhYUTCTAjZrMLTHfMbehvvzb6LnXN6eMnJTZrqXtv",
  "key29": "5SCCm63w6mKD1RETffLVM4TLEFnpASVQjQZz9E4nY3MGmdcq2x4da8qxJEFrbeNRfYmurLaHm55yNAVC4vLPseaa",
  "key30": "3iNHn1uwbFFVaXtpJyrXSGXtBCiXBwhZ5cXMFXDrSHBocoXDYZa6DeCGc8Lezdaas4KmMBuBWCDVPJQo4Bh5NYHY",
  "key31": "392KwWYcJkdQwiKZbnRwk5js8zyMDsaN9221YaiAa8SS5KXC5pjnSh4frDxxhPzeMbo92M4DyBGctWTNgyL5rLeY",
  "key32": "5W2zGDU64Y6MBefdDsrqy1NwGmLNBjZ6mWE6VDYfrJsfHNP3wWHShH5wZfWBBzHk6zbAia7SwgzQxqiyBYuCAWge",
  "key33": "3mRHDHoLuLx34TJ9yw1jcmPQFzrnnTsJf3bLzLYXYcmhuQjuKuM86rTScE6rGXk3E5hPbTDrA3ziTtNUjuCfz8Me",
  "key34": "2wetEoziCZFdFAspbNHJAA6Th1cReSK2Bucc6cphrSEJqHJ9ThyYjuDhLUKxjisFGnoCU362HvoTJmJ4CXMvG1UJ",
  "key35": "qHk4DLu8foVQ86DUtqLcC44Jwya4gaohLghcnVDfPEa9cyDn8JGeEwt4YqUhk3qudGmydyXoEJgZgEvcjEWExZ3",
  "key36": "3gkzmG2B2HvRPKBE9uVj858t35RTDrhir9CpNpX3piZ9XtiffSVqYBCvGBMTcZjHsVtCCZQHcXc3pG6EuePYSxQ7",
  "key37": "aDne3pADVsY23rzRNKnDqEobANBdQ2CkS1R2jBudAh5TYo2U7HX9APSCTPdmknQBV15qJGdDEMNCFXbf5U66oXd",
  "key38": "38frHvFQFYeQvymMFNMKcyP1ct81vbqPTkMRjarCDWdDh1cV6AQNKwCzUFZ9e8LCCFuhKACFxK7PQFEgEB2bgjGo"
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
