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
    "4NEY9FUYxwMG6CTeAPQr4fNaShEbkMPu79VxLaBSoqGKnLMr6RDhBqW5Ya8RjjJtE8UQ6Nw5i7fLzJfk384YtrMW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Vjt9S9ZwPb2yhNQq9nHnYZ7GiRnniNPHHUdQKPan11JZEgukiE7utQGv12BN5TwKu6HJ8NsMYzoV9Q9E7STvxWN",
  "key1": "uYrLEoA59EnUoFoZYmBhiL4XwaP6rHAyoFJUTZEav73parmKZQMrWteD7Qy28P8TtbzuXto294W9snECfAnkkWf",
  "key2": "3H938T2ssc6JnnVMmEZscQ9DGLMYTEjADaymXHHVcfWxKV5YivEuM9CQ5LZhwUg4tWadQYCAb99LQvayy1U2SWf2",
  "key3": "3aCiM6YjisQGXcpW1dPPLChJ2UiJf7EmpjVtEsYC5sEqy8k19vquhzBikQA6z7VrQg6WZW7L67QsQM68bhaSFX9b",
  "key4": "nkdxWGuc4errKpSckteuWpYiRyenZvPd9wqVeCu7eaxGsJ3kfPMWmkwPxQUZZc1czoWo7JAicnkfXxCHuFJR8Eb",
  "key5": "5q2bBupcbA6uT1oKpehdsWBwzTjW9iK1Hw7Q93KbW8P3hMVYjFZciG9wap5SMEZEVMDCWN6M43bX6DrdJE4Fdzsc",
  "key6": "2zdZCzccjVM4Tn9uP55rJNHpPfCrMHTz8NgmgHeX4CRQWVguznWTCj1YdrBtkqGBPMg2wP8zJ6rphVQhmj5aBgjN",
  "key7": "5ey2rFdmJzQpUs77cTXciJkihZgtJu6FgYbpr9akQyhTjb4i1v3MQRgFZQnQVwZgybpBT7Veh4G45peYNMf1UAu8",
  "key8": "1jDUvW59L7jnHfdfTVi83CztxoEAbwck8aRarMi4YRu6HF5YB9629kHhxtTJR75zDb86G7BtmDAFxewCz4TgMNN",
  "key9": "5JuRcQUD9CtdvaGWRhsiqqBsJ7dFx7vRSb1t8Ex6JiwUC27DvbeKtWnG3F4xENCeaLypPUsJik9Z32C164aQh2b2",
  "key10": "4fzX69RKivzy4s7Ypv2R9yTUTsabSR4zChBbdJMjpbnSLV2CmWS92KGxChetxFSZuJgSLj9NHcphGFtHc2qqRQAR",
  "key11": "2xocRRerFhqDqbXfyyAukME47DtoGrAaJWAPpHfyDBxg7YZaTidwPnpNnk1J6ikwDYa4Fe93VHzGYZrvVzGwn26p",
  "key12": "3ruKs4RUnKk2KxjvzW16vRbk9Gz76SYePTdFMgksUSPhLMs8DTPY9pDUckmVmUE3dgeCzZPGqHAMVovaqvG1czp2",
  "key13": "2huPXApzz6suDPbc1qSLrwAWx3BkFhRRm4W15QgCAibEoc238jv4aPxNFtfSfdCNhf6yPSNBPXnLiWZnjtdZDDZ9",
  "key14": "3HBKWSiiDnLJxkQGVBDqdBxfoVp5rtK2sGkFFg54p8mLcUavAtMVJytuNXtPyhhBZgAeVAQkwd6zLCMso7MAQrbv",
  "key15": "2nx2bXvVNFqH57cDCM4bpD8ogogWTTkmLKk4EVTuu9FaTZVQPVmY2XNHQAa89xVw4S9d7iYwb4mbxUyyV4DEwTUY",
  "key16": "W1vgbrQELZzAM8reUaebpaq3CbhWCAQdJvWnWFReSgpSbTLNRMon8hdf9uh1141GvzND8bGBkP4v5g64j6Rmj9A",
  "key17": "4v9nvttRWUjoLqBj6QwLpUtV4TjPku9o3sEHf7GjjF1tzi8B2KRZRoPd7oS1uRtnzFgjRHG1odwCMmfgv27awosE",
  "key18": "3EZRKfxNXVgZXNnMGaCXTmJFJ4Vs2nDT2DSmyFE7jHhqpdiRM78PfSvZsVgDHGK7QunY2AQcBwmgHgJkqCaQe6Ym",
  "key19": "W63U15vUeF582G6v9azPN8yLAsdbzoG56kXYto8spgGxPPWh4A7RWrZNowM6bhEHiQ7b7XXCb1QuRFhpoAd1Gmf",
  "key20": "4J2BUKpemQR83pv9wvdw5uWLbWiUXNAsLkDrsQevZeQ49zHN5VsyvPyhaVyECBQUh2P2bEDCm3MBSmBxyudGs292",
  "key21": "63RLH1NQKXY6BqNMmXnmKM7XD7qx3bvyTS4Ex7Y7zbrACZALd6wwuBdSX2gRw7UWQkCWj9nsBYW6fbe32TvuevMy",
  "key22": "5aB4Qr8ciVhqVgjX9BNbSxcnwi2JmneAnoadKaHA2x1kDEU9abBTKf6q5zYRAoXSsUPGsbYTiMSkHRYm9PJMqe87",
  "key23": "5YUXEsoE83qqN6KDJsqPR7PZ4dLxQTHCqUyuGXeF9DzJGVDPXiG5pAFynheGqMhEJFqEYhGJGAP23m6VGMB7ruM2",
  "key24": "3Fi1TUSVVro9Uagehh6sskXbZsat8BVz1hLhpWP8pu3M4uEKXkTjiCk49Mcnm2S6B4xnCDh3CoVU9rCZSM4PTZJD",
  "key25": "4btdL4hSoM1yoLNnrZdpePBf9fhozJEGWxvQob18XDyCHsmgc4Cp71sHF7aqjgQuqbJj5CzVCRXGxbKHgawhDPo6",
  "key26": "3k7EWQmQcvqxN9xQX9LZfijLmz65NS4Acfx2kMrThg3DmFvu4Q4kpnPRwTTVsX2LFXtLiLbQK7wDU7aYe8tDpGjF",
  "key27": "BPxhxN3NPmJBuTfCc6mbkcKhyVbJuSoYjZPtv6WxFsCfDZ9oWVW7NQqcDsyyysYagcmKU8PGGvufhJ8k5U5BAtR",
  "key28": "2UYNGoyXGSqNcBaEAcFNq51FmSRgZRm5wnwjvGuRB4LC3tWvRyjNYcrwpvSiMoC7QdfPvPVffqPWdJACCpraH6A6",
  "key29": "3LPjP3UTyJRwqSf9JWi7qbynnJfXAj5jkEnVGsLTjV1m3rXWiH9FZbiMoYsdPtWYkyXbv9a1azdYAk9m8RDYiev5",
  "key30": "36ancbFXsoRRSu7rrTnCCYWftLVQd4Drmh8Fk3QEhkMJfRcyb6NAh3Wqgv9Pd6wkRbrRw94jPs6dMsQVDvSMPfyF",
  "key31": "5mCJdZVMNVtgMVbsHvp4ieAH4bBf3RuU3gi2RTKZV6m4qftz3kNE5ZZVFvikduXrRj1WFcutLD32SvLqvC3knxpH",
  "key32": "LPpcaYqKaUUN3UwjQSggpoFeed1RyPMBPfmCFm7K73yXHYtNRt32nwCiWc4YJgACFovUduRK5XGU1FeLMsKJMk4",
  "key33": "4pjxfKsx99pbFA7YRorKfUcBBFsUyiGTVVW72pSznHY7W382RxcmPo9Zj8XCUrM14cP4vFjX9wF9dd9b3VRi6UuZ",
  "key34": "P8Mw5Ta1RhdinuSC99bbTscHU9WoX1TwdzHTtwQps9Nsxgfv9M4FHkgcKpfQPe8BC5d8Untznm4zXEbStG1T33G",
  "key35": "5bno8XWh3UeETmLHVk4PWKaJdvvGDuxZQnotEPYTfJPsX71igLyL9QGfwcfauAiDNr5z9Ldh1GL8M2MdSj2RdCDt",
  "key36": "2kx5fZcQsvWFMJ1suiaESTw8zaSeZbsHjD2jxRo5LxEPYujtt2vp7K8MpoZHPcoJz4Uk9J7LTun6tMUhqLb1GL8Q",
  "key37": "4JeJu4Cm6KKcirpGpRw5q1iyWDFqfkMZ1rJg89UUcRNzUNvMTqzYoSj6BVN1KERKf6xRavqhqmDmUvKspwgvAJDh",
  "key38": "3qvgECZRXmuRAH6QaoAmjd2J6NMMYmjyAigKazfyuwFGi31QwHMxHcTi1zD5FdrC8o1ESx37opZFeWGxkoFLwpzQ",
  "key39": "5qXHzcxUwpv9RDN6oxgUpbAAqchTRFMpmX1mu9E4Yxytm5VrP5Ffi3rhGKYJjefaQfp2MfjsXgjNVy9DAU9eGDCt",
  "key40": "RX76gT7rtRgtnNKmnKVoHxEFDeHpBho8W7WR3QhK97NMFCtqxubt9GRvWnHYUXxTREDYYUDHhVyLa5epUs3qpTX",
  "key41": "xt7VAxWUt8TFe3vxCbT6mSq2fKaD2UUF7DGiGX9cXskGKatMNEqwqXH5cboSaKbpKYhXMv1kLiYDvivtVevHv2S",
  "key42": "xcbQc3VCfckf5PZRmZ4YmU2b8RLzc1V1amDRsTkAVaETGcLvBjvEvdcExd99wasW1knwyNYiFBUwj2rvh62GP4o",
  "key43": "54bK86fL4xqqD41zSUKwGB7iLGPtNMxQWuH3ihjKumDTRHczMe4bYjbdcYr9ipTM8NykxcLUJMoj473EaWkQAVxc",
  "key44": "5Kfa4X5oft4XcVE2TFeKgFvgmDhd64AQFspDJbNVBn2VcT7FgztgB3YLZTqoZLiNWhesxkd2dyk4hcFpq69wGZoS",
  "key45": "2VCtEdX6N84dfLLsYAsQiD7h3eTrYomdYsGg2KDvVDJEbX4msh2eDc3wD98aBMsByynxUucv6YFYzk4hP6mEvVdG",
  "key46": "2mHsrFPGRdgys1ndDXPMtKQCSR6C3jbkDUjW6dpQFChrdoaWW5ybKYL48nhsj8DRZoJSBT5v7x2C1BxvF62dnZWq"
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
