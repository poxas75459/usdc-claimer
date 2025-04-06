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
    "dGyAbq9cYwaniwS5ey2ybwWmc1JoWaqQoXEJHLFhxKhhtgXG6J4d17DjYPyYCHTLbcmggNAJryrRWB2mwQRD937"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RBvECqLxkpMyfvdtKAEtEBDshTZu9MzPe9BJXHpEsMDH4AibZHfTmAWC8q43EhXgX4QQttaynCePDKSs9264hNZ",
  "key1": "3CYNUxKPYNHH3PaDfgqCeSQRVuWVaohngmeJGdjyBbJPWPHVctzh2PxyLtfEJvVpKzHzXMkrBCEeKZbWouVY1WY3",
  "key2": "4P4aAxdoEiwxbViaRvKk2mM3wtbzyPyb8PAUyGUcNTHL68sPMUzzVKdS6EweYmKeZvtqJNgioHZzYabYDfVZf3gY",
  "key3": "2yF7r6DMPZjiB2mwFXNpz3gVcgznWCnUCop8njFNxxBcphUz5Sw2wwp4r4rchicxSicpD2XhTvJKgfPNgA3UtFso",
  "key4": "2BZ78TxeYKeapeqzz5ZVkXDtYqzdNh7BQ6qr93RhHGZXse2AgkRtNp3uiVfjowR8QLhd1Mr6DEy7bxkLpEe3i4E2",
  "key5": "2Qbvz5GLReateurWbweRsHQwuMsVmsjdy3Y8R5Yb53LCSzgFLd3jwpL14UE3D3pmKYnYXZfCLuQBWfjM8KoBuUkW",
  "key6": "61nPAjfAWB7JWTHjQa5eJbVuXpDanRSwie4qysUfBohH63biA8VR4YyvaCofufYZ6oU3YpnhUej1cGGtywitwvqa",
  "key7": "4nexcHP17HjUZcpSmcQRFgzK4JuoHYTWm3YcX2ZF6pDVHiH6Hsxw3SHydqovT5FS5NouXXceKQ3F7PCH5UcM3TfD",
  "key8": "5rDgNCGYaeqaYTSWNEBKBQeRs3dnLev3AovChbwmj7qWBXE6yazXb39sLGvNWz7XY2VLUGk3HDiHfaCy4Xap9pX3",
  "key9": "5g63iqNfi4ZhqXynz3yGZ4be9Ea4B7LCLN5dFCQruUYwCzQTHEFf7feuuyCf7AE9ckk38ksitLtT81rVwhc6sXRF",
  "key10": "iWB9xZKfHJR1rRfLK5qjvSVgtBDUzCmSi1HVykBCLBBt3BBXD9t1pMXKWkANMExm8gaWFuypHfn6q6bx86YyhWr",
  "key11": "4m7q8ReWBCC8ycYEUxidMCiGbwRm5QzpawVJ6x6X3ZLYtiSkv1N9HD3gRxoK8gFoxoG9ghvnScVDjXJxja8dSnB5",
  "key12": "3yxCMaza4AXWjNr2S88ez8e7yR9SKJA9xFuHGcvtf3HJzHETvkxMF2o8PRgZ2S8UmYHrxrzkjvKTTBVYepDyET5S",
  "key13": "5cR55wALPcozB3aw6M1JrqrtBQdtHzdNdx2N31RzP5d18nvmVwFRoPBHt7vTMoBUBRtNmrTgMmATsgpMYyKekcU3",
  "key14": "62Nc49xBt3sUn4dXMuaK98zssvmpQh3C8wcC9ur25FWiabu14KLs2rKbbrEYWpLvGA59zUNJq2U9PXiRrJGaFGEv",
  "key15": "4vL2MEygjiFaeSDk9Ki44rXZpwijknMjgyP49QkYj3VG69HsMSYRyuFHAbVS6PoWLRYS8B2N6C3XJiCo84R8TPJn",
  "key16": "5vPqrRDZqpDTNz4LccfVLgJShx99DjUhrgF4M8rtJNERyaTvGnTAU5dcezMz2VtaMhNeqEibwTkejyBWk1fbZtcq",
  "key17": "WWSVBHo6KgGV9wveAzMY5HFQSHHBwAzqrFdQfikCdKiYu9yDU6PQ5jadSgBXzwiv916c5xeBDJvGb5LjJFyq4ki",
  "key18": "qYe4313CXGVGYVXDC2atxQg6VaVyhHDrPvHW7LT8ibx4xX8vMHoGeVhdjVTx9je8uYNiLgcXdZC8rtZovFKcYNY",
  "key19": "5dSEfwrbGXwd8grzhnhCam8PEH4iZ57SxsTVWEZLHUxKNesKK4gHCbLgn67xt472TCuTQRvMDHCeYAzmU6TNGhGu",
  "key20": "2ZxEFDy1KfdJmYtR1zotUTkKn82tpzkFbbjWFu6LCjraKC2E99y8CEbfwE2PaLzWGJddR3RSa2CvxajHM5WVhaz9",
  "key21": "3Lknfb4WptbpccqP2FKwDqCWtFUekbdC8wDg6xaxX3GuUuzhaWzmBxwyNWMCpVKdUSZbCNK4rr43kSnCKNu8usWC",
  "key22": "5s8rHprGLs8YqrS9NwjLFhBeSD2WcJYV7CTpusBB6Q28Maxm9ncWEuWXcuguKThrE3HtAmJEGU2YHGtXPUpXfhHH",
  "key23": "31UFy9MZZg5byXw3BATjxy2MzbyFaaL7UAq15g6MJULLceJ3fjvtxAfS5Lf9Xz6r8eMo1oHaxsCVVXjfrDdWdwbf",
  "key24": "2r3aNedgrwQGzfPgNCPwkvyVWUkHhSAE7Q12kT4EjgDsPYvL6sVkUhJmcupBPbEx6vkkrJpqekC2qQyRPiPex9sV",
  "key25": "51EqoQidEFP2Dv2mUPnJ7FVvcAe5tCGKLx8mhdjGHZMTTdKGjp9ufWV4qPFs26jiWuJ2juEqBtkN2CmFjkw1vmWa",
  "key26": "287h6AhwXtmxskfb5K3bEsNjLvGhM2NsCVRcmSKyS4MPfyiNRsfKfdoao2AfXaVimSufLX342QXggCPhMT4xe6hS",
  "key27": "3MFtpDzHkq6BTZLEDy8gRoagEGws9n3xSd36kSJTtCWVRdK7r882hGr66WoCZPdHN9EVnBSPqmXxXLQuYzaJv2g8",
  "key28": "5mVWGdtoq6Qdssg55hC7LnH64emKzmnJuEGUzxkW6yLpQWqAHeM9kaQrzhDZA9XqP42zZZz9pQtCBhbmm3dm4Mro",
  "key29": "46iiZSenmvT9NKtBbnya8uzu2HR5KmgsrAJX81pMXfgSzCCe8xrPnNNi5GS3hqBj3Y2eMgsBBvbs785VC82uJmzv",
  "key30": "2UHvRmPfhuBUz6xtFmPgtga9ULjEudWnBP2JF8dt1JnfxyMB6vd6JnezFHFaSZx6zjVFmNdM5gVAaQLMHFXWL6RZ",
  "key31": "5wcAed6jEY7NTa4rqfSmYe3kCeV7dBJVVbB7AVkB3t9CshbSj6kvdK9uWXQkc9Vtks2pXLejwyVzaMzsyJyuoE2v",
  "key32": "3tbDmyj7sJWj8GirAc8TG9qfaqCVqfVE5VdT7rDEm9tQ8BhNrcbNsxefxjRcy3mk8JSY4RX3h2gU9WHeEa6GStAt",
  "key33": "3UF6Satce9grgR7Q1jZhpPyxTsh5zeuEDkK4G3t5pNZGcjjJmrj1E4KadCxRBMzYW3pepZy789TfCuD6EW1eZrGu",
  "key34": "23pNnftKNhRKK6A7pRWWPzCpsu192E7XPa74pyGPr2LH6iT8s4uURwJBkjpHrvU31PcGeMPGV6PYuscD7pBiMQwh",
  "key35": "67iPQWHp52EHfYDDFKCfUKyRzxRRpRLGPXLmpgUwLNdSTQUAk8fykg1obbE35ggX73yBohgN64EU2K8DBkJZyXft",
  "key36": "29L4wXLgJTL2CE7RpsQ4QJYsPg3W4cywpSvMkZuVYFWnoiSLckhfHuNDnt9sGuRc5TJiJfbAXF8YWsvd5SU7FfMM",
  "key37": "3dpUWgey2YH5YvmvRHwmL7kn8EHNUZ4GizaUimWnFFbxZ62t33coF2cH6d1fLCHAwPENSCpiRPZYQfukRDeVM2vz",
  "key38": "4YVDSYTz16rPnhh4sYU6NFtCXPcEW721eSZF4PE3gzPYFqH16Zmaw2YQQTGSq7pmLNwWyAJh72CfXQxkmmpebrFt",
  "key39": "4vFRetA1YboNtJR4zih7FrdJv3E2DiG5v5PcLx9WDRNyAmw7Qi1AThnZPviP5rLj5bB7EZRSnxZ9LRZEoC9pcv32",
  "key40": "2E8yURcFDGVioViLPMbUBKyJPLi3Vdfw8jUsx4e3XrVARfopvtr55FiyuZmaHKZfpsNWM333cwkhqigDznEGi8sQ",
  "key41": "4vCxXhMpYbAbypEz1pZYPteQFQaDdbcSpVzjApwJQ9Y7kUdcMgc7FCSr6KsDPgo7VWEZ22bRC9LMLZdfHBQJhhTy",
  "key42": "5E82JoKif7kShYUgFhe2jmxx2hNp5VUeAFq99QTqSZoaC1ZknFQfWHTBXWcL3858k1z6TDKYjbFtwnw3vFMXDCmw",
  "key43": "McdYfd1CXvnfmUgB1sDe1FtMEuEX5Jo4PxxoEKsiRB8wqxAFXKH5Jv3f6q6RTDdfwU77LdjNmVvY6kz1CuCiPcx",
  "key44": "QxdJ1sSr1LW9h8JHzZoZdkyfYsqxFBp4KoBNPcK2RiVdQxDtVMGKJfJ7iJxJHakUr5a1FcmNTxxdd65jWgrf5X9",
  "key45": "5jPEwKkjGf9f41Aw22T7eH2UZnQACKKzxesBxqi48NkYGHESgSAnVm7oxknrNtarpoJj4fP1oM36CT9nJRQ34vG5",
  "key46": "45FLrDezg3QN3tBp8GvTjN3vEz6zaoGxo7XMqBYSak8cXcz82MYhbWi1wMX8rj6gwtamtdtrMmWg9GPupt6k1oFJ",
  "key47": "5W88LmAo6XBM51vXe2Robt1YgeQianUDVwpr1xs5rfT1BdY2tg5E4eXt5WwKF1XkxLQ3o4BbBNSHSWuRRfDwcmbm"
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
