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
    "MSxfi7EoFA899UaxbTcMMZ9f5UsncNvs9fkfaEFQyNvUBGjuy9mWRFb9o7wEHbRMWRc4WUccTeAhLUGMBmqLJLT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HY5hjzfYGeaP53m8bjrv325sd9WzapS3yLHJrSwYNpt2p1tUbSnrzEnj9j1jzDRCw8Wo3JPEp5pcucdpttUdCD9",
  "key1": "344PSXJwzL9qqPt2ss9BBZuSWKUSrJAAWUK1UvJA5icFrVmqXyW1uYT1z52xYtyGaFD6jBtAALLVuQdHtkUR62Mo",
  "key2": "5pp651EVwC8iZRUHNxojhT8QhFLsbV4yBGkLHQcYYkSrionzhx85dQtm5crrQcfSv8sAt9E5ZTHYZ4m3B18Rruy6",
  "key3": "4FQUZtne7S1Z2RedzWiVx9qFRi5ET8d8nsrazGRYuGNzZ8BsVQ95XA5ccah1JhGQZoo4cK2tzAMDXUU55DzA3qSR",
  "key4": "2RgjxFCu8VA3f5wmGe9QE7HcRHSksUWWhtbxX4y1zUmp83eEsnyXFZyQVoNaKm7HA7ChWPqKzXnWPmTL4cEP9xiL",
  "key5": "2ePDXLjbR8WqMgNuWF3dbPDPZLe4ZhfwP77xkdRyfwfEmwLxjeQhjW1kUjMsWVuNLarzqc2JPq6LdFvw25oVUZzX",
  "key6": "5rnTZNuAJ8ivunLCLvrezUJspYZtSuuJJTbpmUdj5MuTFpJF79xx6zafgGzNyLKyyZB5bL9FkvxPa6sVhUUHfkd8",
  "key7": "5vqUtVZAfQcBEYRGgerwqoKG9JdpR2oXSJkPdUtBE6qmEyxMSTAQC1FRMGjsWW8kHq42MBnLAKzmgRyVeeZ6bE9j",
  "key8": "5CUWvSQ1q5z3PHX2hpDdp3cFwzUX752Y5izp4DNvG7MKRd3Gvrck74XQyDppjCCWsSwJkuq9g1cUEGNG36njB8QR",
  "key9": "3Yk4AYAXBpigdq6bFfLjRcYNimhV9EYWJn4wk2g4eiRrZQVyr57LA4zXWPkyYU8adFxEPcbE5g7q2irQuaGSSqBq",
  "key10": "oPTrhv9gRw3pE6PiitzKydt6pBg6AdjT9nTddsDEmDC5tih1y6N8rzQvySZkyYJBrwt33uGzQLPuwnq9919bMMQ",
  "key11": "2WQvR2AJCrShNEjzVpBgF91kfcHVfJwnya5VQ4HejtrYm4qK82es6egwuX5bjayAsXPz64rB85s1GY7aNWFXsokt",
  "key12": "3iYX2Ea1QMKrhv1Sw2ppp8siED4YdJaWswSeUM8MPnW6ntRwfQBNDB6YptbUkUDBRmy6wbv8jbofY6fy3GqD5SCx",
  "key13": "3saN3nPTke6krTL7DZ1E9BXzAfKrdvVUNAFgjmDNJhLFwpLMfEtnG7xq2urc1YdVhjexLaHSy7MUFHTZyX3fYGvq",
  "key14": "5C7A5ixaw2TaMb827gegmtPLuvCj34VJLv1DKzG6MFWPFmFDYk1MJucHrW9iRAsoXnzvYtBaNBNJKnjZd8k7Ve57",
  "key15": "31Ueg6YSBS1FwNfunwc2T6Yhe6tuH2TLmwTa24Hz2qErBiqdS3cpC65NcmfN14S8xn4GoLpKg5zXMARsG2ZgVZ2t",
  "key16": "4SXX5UfnxgUhEqn3jgsymqD2YyX2wG6EM5kYWC1ENQNFNYFWhWKc2GiwtRuEw325d4qBtHTFXWDVTMU4WQykytrU",
  "key17": "4sCAcwkf5hWmYBRx6mSr2Q1wvzX4vmzqYfCoy5Sb4brT6zgV82y9Zds6Tj6eLYkuNVkFcoHWRAzbhPvGUzGV1WVq",
  "key18": "6LY51PWBfnPh28MEaUAuBYfg7WUV8KLQ5n3f2wbDLzJ21HyZ7gKPSkbVwkBfKbGM2BGjGsMhoQA4eTF5M4a5Hf9",
  "key19": "3BefvreQY5fheEiHnfnznBRCfgHg8bqiXaTBRd8Gtz8d6ddBmDo6yeKoBLGp6gAKHXn3QWRrn56sr8Ur4fwan7F8",
  "key20": "2PVJAdG1yeEGii9FVv4zX73xdSdswRJwmRQoCJP3waQ9n9uPrLkpiMWnt2BQNNkGV2P4smMb4imJELYzWH9H9uc4",
  "key21": "5phZFgokFy1pbxXzyvGFtioo9ZGg8iosLCzKpjHVDCR9wkDMBttrEjErvYS7j7LsrGE99t7BGEwU9hCekDNTfNTr",
  "key22": "mBp9qjhfdou6SfAdmqvbMXJJDoVf6JxfRW6QGBDMUrSBRNXDfdDivb3RwSDE2o1y6tvQGow23VS6amzcuAmEMp1",
  "key23": "4GJr1Vyu2xqzpXVVRkcKHDHVX42t8KS6pFmqDLmYJXyq6enYaoGPM3GVYaB6NLTz16z3hRSr8e4bAJNXdpidtC4Q",
  "key24": "2VF6smmTvMhp2y2K5EKsTNw1bXtii6bfhaFGTDfdKNxBKpJDh44y4AtTXr5gwqzB1WrkRzamHTcrQa7xYqoxJ6KV",
  "key25": "3iGy3pXNukm7rfT9qjk1GQnFwboZNZTjG18Riub6ahrMc9qaRtxUg7jNRZnrTc38Guo2cu5tRdD95YJXNyq5X85k",
  "key26": "z54cJUx2d5D3DAZUefDhc64VGQs7ZeZkU6pe5tV6qFMKyTzTnYiLTVKKPu6PMes6q4Me5mCmgSPZhf5GAu2GZsz",
  "key27": "5JN7jFfVScGxQwm8xmpmcuwMQCbYWurJHPQpbR51JJiGSS59L1EMdbRjjvwNUQf3ckwXbrbPxg1JeTyLJPgyR68S",
  "key28": "4FchDH3JcBkmyJLZ5YjTwY7bFe5Jp5ixGgw1HCEU9n8Te7HWbMEsaKifSvN59dyLz79mgNeS9xJhvDX8Ph4Tw2J9",
  "key29": "5qCk7HkrJAmj11ScFh1V4P3zbTipm51u5SHpLsjga6krMRMmcmud6htKk3f1KRTDvXXLMCsSr3EyVGayH7PJorBg",
  "key30": "wtRbmZcgNTSrKFzZVorZ3Kvwqp6zCuxPs5MD5R7b6wjCHrsgDz2Y1e4gZZB8Jw4sPXCyPnfs9rVjTzDjWeK2Cdt",
  "key31": "5LCrAhLvVua55brzkDiw3bve6SCKX5DWujTr6M7LZ4H8FJQD1QP2VZnyPq4LGsk2yJF23bEZ1RFmHJbjA3njpQ84",
  "key32": "eEq4C8UifiGiQU4QDy7fyAsGH4uxooBVxaGizkQeAuwdRE6qHnZP6MLbALVK9iVc5dKZ2trFzeK8zcTwov1LfFd",
  "key33": "3yNxTwXqzV5TzjGDPss9MLYEzkoTYxUnn7hnbXZxWViJLgMzmJ37j22tQ1YbYQqNmh8KoKtN12G6GNrw16ziAQd",
  "key34": "a5i2M9a6xo5G57xJtsRgKvicmWsBevkDVq9Nr93dUetpZD4WZxxtmS3L4jQdvuTkFkTi4zWo5vYaBfcvg6rSqjV",
  "key35": "4HNxwwCBBtcD61nqTykSd1T7nSeLVGrQ53Q7YWaKJrJ9VNq7JsemLEna2P6B8WLJJ1Z6Nw6DR7HDKrwP1bqzavLA",
  "key36": "3RKeBpFXq4UW1XZRA17ufuTs5npwyyysYFussoR7QzyVfaTDKuMNLm4RhF4mp7nFMHM18arv23tRQjaNyFAQL1n",
  "key37": "DARM9s4npfdqumBZrsPMrPPAf2WrgNAzToao84gYTpgovST1R5hDsGqca1SzZ652rtF7QFV8vkin1DvYPRLUhso",
  "key38": "hCZk9v5D49eVkgkvX9CthiQMy5Ek5X1ECeXkT8BvqLVQXHqsPz7x6QTXXdzjyVss3woxQcPg6oncib4q5yT3jx7",
  "key39": "c1qvgrZBU9gjDwrkUAjHnq5NRsF32Fm1E5xT4epqk363HEF5mpFkdyxXrd9CMsWTN3rKhwKRPsbZRPZx6arusUU",
  "key40": "2L7uYmv14TqaR36HBrs8p4spKavbbjCTarGxgkFgfzAC2YS7fZYJEMo64VgPQmy3Pkg3sDBiUvMDY6ZJqucv3Qqk",
  "key41": "3PYkMqbAPsf2U3HPQdZfMLZwTSPEUEFQMnKCY5u3BukNJi4WuUbz9gznF9xTxeyRuN4ikrqjcHbCecBD4GqK9DLJ",
  "key42": "2UkDh49AHQXXCkuHc4kAi8bVrYuDFWU5pm5MA7ZP4uFUg9NF2Sw1EnCavvSjBYJS8TS73Vc8PEBPmnvya7qACosx",
  "key43": "4T6LQsL8yoXUP2xziszFHh7kub34Qdkc9HZ2TuowzMve9q3kgm2vP6Afydc9NbsNYN4KnXPPBw1rQvHYDe1cf8ff",
  "key44": "59R24ijW56esBFk8LdNNTra8weszPMrMUVPH7oAJcUTFKPecKXWfNnM4VSsgkDrsUmU8rbVDtUqN1RtG9mmfqDxM",
  "key45": "5LobgBL2BeNRiitxKH9ezLZqAzJKTqDCnNzBp1s3ntv3UFXzWrKMLjwMagUNvUzNjv9GpBzk5gFmAkEHcYpXGPwz",
  "key46": "28H5hjHTyxshjoupNYQwDG3PcF2pYTF8N8ydTdRo25bg6xmuUqLNcLPKJDKv7vKzfNwZhXv4g4wKBtRQTGwnjz5Z",
  "key47": "MgSBXAUWqCWEGb3uvm1yUFUvRDjv6qHeDNuXgLDjct1iLpgaSmzrJd3GNQmaxFtA2SWRisYY5ac13sHpQcf64ZQ",
  "key48": "5fMjLcy9t1D3o1fRLzJZ2LNShP3FbrkydbVhJWAgZQL4FqxjvQuMx6pMXi4AzAmbt1DD8LcZYjyP159ZtWnrNVLc",
  "key49": "4AzEF6vjrWmtuQWRvqXzN31Jpo7hnZQEjzMYJmGMfzthCaLtaRPb8PbdaPX9AAmSwNbooz8mrWfgcnN1DnBCAFgM"
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
