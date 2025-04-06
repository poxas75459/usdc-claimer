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
    "3QrEsda4dYWNq6YPFzYHbrCDbu1hocmJat6akUmoreDvj1nLZ9NWuegBSfq1LgY3X8tm6ununu1bEL4ipfwiWCgK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47r5EPHiGGUhN25thYFvqic56SK2Y8KHL7cnYh4vVku7haeVNtwkngu6vR2ovfyy5AXdQn9gDV3Y4fsrzuffaJhq",
  "key1": "3bXzy1VvtWd3uafJfyFu8SnfdfCt6EPnujBARCmU6idPtpZigMtPwmgW8rEyMd8wHtGT4hyJ6t7V3CUSeBkH2pHa",
  "key2": "5DNkUt11DgHGZ7fnWVicHGAwPrPALpKsYeefphL1cwYrHHfTMvESVfUG4ekbL5wPaENPU5FEjM8Vuc1aJLw5Ft4K",
  "key3": "2Qb4M2EqEf8GsLygQwGfQe3zetVN4nF1v5pH7NWoFtbm2YoVq7P4hidAjahmLLjGK31RPW5AVa4PsB7MW9fxS9rH",
  "key4": "5xLaPUAy259mBDMje6x24iGUMbST7CbPntdWa6HqY9k9UmcF9ybKz22ExRoyrSy2rZbC7mjWc1rjZKVSfv2R9qr1",
  "key5": "44iDYc8wUhXcUScYFFwhqS5V9Leh1cZDWsa4dCSDa1vf8DrHMBzaoPYSs5KgYEjWCyhxqaKYp5mUX3UNkB5FMwLs",
  "key6": "4LURFXTRgtgDvS3CBKMXLzm7af6zHmwRcfMnkufre5XL7bCh8Gvuf6yroXN4y1fvqLSGFKuMXnMjivGNRWPwXA9P",
  "key7": "5ab7ifHS7wsvxVmEL4XarZaFancL1tr8giNx7AQ7RNLqM19YQPoYuxFAfWJqLrzVfrQcDXnasLekSB2vbXn2SDEc",
  "key8": "5UtzXysDiZwwvmYqMzz9NNzjZjQZMSJgrJfuKSf12hhqSipmMUkvz4t8wtiEhKwX6Ymqbnnv9ENa7gqeJ6WzXuER",
  "key9": "428YyxX5J8P4H5ck1QWwkJkRgiXDnwgAXfHrQLX44HCzkBMkzZ5BfyRyc6b94J28w79SBSiKCXSjaVLVfa6u2Xns",
  "key10": "5uPrsmdHFqBJVELUefTogeekPtCAdhjjtW53yUvsPinemTFRugMXPka4mtaQHaEiDGbht6xh4GDnLtzsqo9TPk9G",
  "key11": "5UXNH3SSuLYXXDJ2m3dFW7SQwSYbGApiTLEE6ZEmG4sV8npMowqWCrxj28Laoo7Chvau8FndKBBpwmQpNYytoGHF",
  "key12": "3wFS4kHbg7rRGbjHRXYvVz92JBr9MRnEFryKvSvX4HQdGUY5vCsWfvaSpz9DhRrYPz7QZxFWR2S198vKhZHocrJq",
  "key13": "3jJaNFCMRBSqC2AaxXGFWsg5K87gkzkzNMqvGBJYwW7GqR8etA8hrYgYH6zQd65UTuSNTrinFRkHHkWR5iMPc4R8",
  "key14": "3R4khaDstnBekFviCrD8MAHK4YNjpWqydBsDkE5KfsBLdzynQTVJpvYsZWK5wu4RzzEvaUnNh6k3ko6LK2zrEbFp",
  "key15": "5zUhyqFNRXdDqTHfiwnqB9TKXfLybXh9DJ17kfHN5izdQbb3nuzfTNsEjiYhKVdnGxWy2iE1zFNXs2xZiLac2r38",
  "key16": "32PXoYZxNXain4iEQWC1JLJTmnCLAvovLDc9oRPP5fSpK13Ydc9XtbHUZrCdgWnhrGd8wVZRHqCXQbgooXp2HCBJ",
  "key17": "66ja93BZm26Y3iAzwjfZ9sQdSd3V6HnMxr8XHnygKPhJAfErur5fy35xdY6dwv5LRLcKsMyUNjRrbWiieS1Xw5kg",
  "key18": "4sJd51qysVje2PhZe6hJRAj58qV5QP9dDxWKRk5Hg3S6ed9FeL4FqoFGTMYn44SxnYhymsDNeu7obYf82wgzNxGS",
  "key19": "3FVM7ec17RJo42is8wqeAv938LRv4zj7YVdszkhi7MdpmywDaehG24bx3ZiurGTb6sSJVBayg4S2kph7Y8ZGbNEj",
  "key20": "36b8cw3AaWMmhCbjKAcg2Bpd1JWgS4PVw4gPjoHVGBHCVn3Bpp4L2PMYfhi9R2KcUvL5SwnBHu6raKzqQK9JcaMS",
  "key21": "4uAZk2cabi7d8SbeU5intwgqmH2KCPGU8FRiHT4PUjQmTp2632frKzd3rKADFNAmTjPBSkxHHwfV5bKie8cCu5Wo",
  "key22": "3G6A3E9jsYC1sC4PpYHecma1rPfhgLr5eX9kgoLY6UpHpviiNZnYakgRG8jd4rcWe1CZE8eM5RT1M4WKiKPuyfEF",
  "key23": "5HQpsSXUhXkMSdRg6Roy7xBhBzMcBahrR64z9HBNAPgxPsj8UVDuDjPpZDpdoo32BDafECA4nqfP7yPMt926V1PP",
  "key24": "2Yy3ugMs29nTMNFEnogjssS2K3odmfeFaTo7wkTCfe649oE3tZ9mNNdbwnEhRrprLD1UDePZC7N1Ks8MnAhPExd8",
  "key25": "51Ln1LwoyKmaBNQuCw67G6VnD4WAyEGcqb7a7DMu4S1hEYFburL6W9bU351VVG4tjBSqLisyByHzCtTePEfFVzQ4",
  "key26": "2YyFmRbxY9dAjMU89NbumKnBJAHDvNjxaVPdATa8c5stNvqfWJhaFMjX9e9dpjRQkv4wXjCo6ASJh4gmag2gTc1a",
  "key27": "3UysnLU94jkcXU1W5jvGg87LC6zkYj4io2R9eW3tZnptyar1EjYUBeQmrNPUgZEgCytMcEU3rN6yW8dLfnxwFeKB",
  "key28": "4Jit6hLy6JB4htoGSRKVLajFSzkAYo8qQwcdQTkorWbWHEmGjEhjrvDD93EhSACsMXeRnRUA5sLEbKDqo2TNiB1c",
  "key29": "4XmG3mtZrLa1UmwanYZnJ1sL6JG7dJFKvLxmaaggpqwUJRu5ue1xKCQSCvAZoDWzo4jPvKkmuqdunWm2jAkUtuvU",
  "key30": "42h9pS63bEGVysoNgxipsFkJm5nWpQdW7AXYBBPnQcxyRQiTzU3dnbU7Gs2GiRS72Yt1DhpsN6waGfD4PSudHXSR",
  "key31": "5aBWRsP7inz5UDDzyHUjuHrdynFJMX9kTUzSx32xZYRnRmcufkg2ugX94uiAsWUF1orYJgiXDr6QH73QrkNr32fY",
  "key32": "377LoXHPASNeZCTvoWwpUHtbtfsxU5xMofk1NZbYSZmkFxs66rwuZFRSNCDh6FPR6mDaR8EkMsfwCed3A4boNkwt",
  "key33": "3xFmdYssJAhSPQUykLvUjB4L4QAAziVAzfqq7J5VSuqdiBXP7WSzkyNqyrunc3ScqqUtq6WZ1XHJCYFywyJC9GF1",
  "key34": "4Xmmp3kRKTrVDEHL8JmDMTHHSeCZZ8nKyrVpFVfcdCq8fmmaV2aLbr2eKZYFMEQqLaNMNqADhxVMKvYgMHM4mQnW",
  "key35": "5F5KyVpLoFfKmct7em5PdpPefjZW3s9TwN2v2PfKJVRwCDsC8NroV393Y3MbykG4yz9Xs1J9Nh46kn6JpU2dw9Pj",
  "key36": "TwQCU2MBn5HQkADirUdKRkKD7JKgVconDoHs7zUPQSwqtmsbkg1sTcHmkn8qfYLcaFJUHndpCsuupBWGg3WFDKg",
  "key37": "VVFM9pzUbsQnnfQQrUUqEDN6kMuJsEaxy22kLRrC1kd8RKnaXV1CeW923yHEJvdyLcmRKnTTBLELqb1zfbNsce4",
  "key38": "65wj1SJCWiGQnH85j8o8PUUGvKe9xSurW66qf18T9FUF5ZX3Dm4vXF6L2EvFFZV3BbE7ctGDu7i6xWXJYnTt6Q53",
  "key39": "37xyUMPofX1WidnCyeELiNwTgPDqKKKEMvzwSdaimw7ZVsrYJ8Cy7a6LBhLBzjmAz5TSdSBkAVquE3KmGbe3FUCb",
  "key40": "4Pi2qXjk7JQ1wwZBeSNbL7kNpaHVLTDxchyUyf2B6qvEDRMUDdP4gkz2G8eBbLdUW3DtVAqDdPcMXsMBZok1gEFp"
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
