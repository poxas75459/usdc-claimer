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
    "A7jHovEu6w3eP22aY5E1xoPeQ7sD4hoynDuw9MfQCFoXm1NkgBEahcYvUUuCbEf57Uhdoj6XZWDMogPPM9qkmoa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ymHqhdgPc1yf5wDrMs7LKQKpphT1yzcLLE8XTPuUicU5cC5e2gV72isB2rYpbzmNzVthPoKdueBLNEEWcnUuf74",
  "key1": "2eoFjAqNwcWxW8Lc3GosQskhiRZywXEKmoSJJAFtfNWE157krLUhJ6FSn1XEvBMokb7xAALkhVKzNj9Fd8nCo7Qh",
  "key2": "AdAN8MFxXfcVoDX7M2a1Wx1v7todz7CkzUmofxiVxoZHShQ6WgyMPMD1y839tBRxY5RSf7NgJfBfiFXjKTy82Aw",
  "key3": "5bngmekm8vE6kTvskMqsrT6d7YqLcMUGgURibKgz4FJwa4QBfY5h3RoeLdsKMcGSnazq34kvrrAtpw1aeSxjGzH2",
  "key4": "32p71hpg6ZQF53mh6NVBbhMrhCdDkgP6YhcDc2fnSZgLTMBWmSe8gLygHymDqt4et8YzHpFY6zWXVB5wFV8N4jcK",
  "key5": "bxLapL6Kk66JeTe8v1ZDsFRtAQhbR9tRfc2MSEDhKf2gHeQCKyuKB1BcYjmG8apmPkoHkCEuaUsT6W4gvocPM1i",
  "key6": "4TuxnmV12muLABwm4TeoYuPUtq6NxdMbgdX6SU2KAHC9tpiQbrhjjYBVQyib3idcLk3d4YrqWJdhEgu5vWnRo92Y",
  "key7": "5V5HK9YHNhcTU4BH4aD9ij1pNntHdP4hBkmKx1c9GUXK8Qunec8bbVCHMiPDPgjRFKeHRLSzKAokbfr4fbAD96vZ",
  "key8": "3JWVWDiv8zaMQrpPk3XyDJGDihzy27tSJGmYSysknBw5uRR8188qhhGw5egQSxzEL1kdB2KG9QvBzTLkp3HYqgwG",
  "key9": "6bvYtbZggxnvKJg7XMLkVuAm9q3wQsCBKNsDyzPn2BK1apJtY9jvA6K5YXorufboD4FcFHzDr4AXaZzaKunGuP1",
  "key10": "gum7dT5ZgGGHCELpTrNAw8rJ1NDAhvdKC3k9Qd4WbxjKRMmmvVz66wBgk4qZsJzMuAtVwTRKg1ZLmW7WzCrqnQx",
  "key11": "5L4vWJtFSaeYZQRykSWhNMHgGQds78tDn4oqCNUYEUj3u8GFHKLi1kXdF9RsrpDjwDXCDoBCQof2yfjQXpZpcy64",
  "key12": "PudFM2Jfhr9gf5AnHLkjhggjtxRHUM5ujizhjGV5nWTCSZKC7ADWECvUGnDjWyH61Y7TU3chQRXXtJC33PdtWTQ",
  "key13": "5bGxn9ezNmj8MPqoD92rqB2hqPTYw8xbSskUtEUa3quatnBKEbK68v1hwoJhJwJHaQdipNwZ1BwJurVq4PzRRiti",
  "key14": "4PCtNGPo5a8Gm2nkSgjGPMF5vr7jPNTtZder1RjMR3Vaa7ejjp1m9oEPDhHyWy23QVf4uUkJESSLwufhRZekBsSm",
  "key15": "3KMKMV9L3HbREh9LLqQfE7p8qczeYrTp4vU4YoyyCEyTkvjsQF6HjK5uetztcvFKyhNpjcmD8SNEkCBrk3FDFzn6",
  "key16": "5SQNqyRs7cuYqaphjLhALsvib4SRtvmJSeVrNuMc8xaaEZUusgPrsFzfwGfF4qfm1BW8H8SXPDqNDFtVazGE96X3",
  "key17": "FR3UPXNrxZmhU6EFCsRtbC2bh7QxC3VJMBA8XGbCMZduyaMTrDwZnc7gmMRWtrJub88e7AVrXb1eJwxU8z2Gcgu",
  "key18": "23GMjJeQnt41ajCm8FseVVoALh5drB4qvXBLNNqSCvPVQ5baw8Cq3G7PBT4MFTsLyBdntiHMBvoTmQQdyCtDEHxa",
  "key19": "5MkdosWkjzuGZ1Cmb1gY2tkXeDe2AvZ5j3Ui9wTrLJGdK86L3i2FuxYe34zQcGMZJovAUQpwm4nJKHTv9F7cX31S",
  "key20": "5etVhU3fn4d7Ynh1HsSQAukrTGu6ThdsN3koV1E2QVDZc9JhVydzQYjSMbQBSAEuBuLkvmvmdB7TUYUEMTRjziMf",
  "key21": "4zmjZUzh5aLFiKVoFA5KC1CT5H1JUBM2oAQQrvyFQy5e9AJ8pFMyH3ejmDbjNBnQ9mFjZWFJUehRPq1p5q5JPu1L",
  "key22": "33PHsCndrFMtjHtVmEHVcxYasrr6CYqU6LgMmVPwWbmM4XrqjmFBPdnBA9A7eJMmSpmE66r1v2hWzDdf6vQ6fsPv",
  "key23": "355gyz6o1y9TikUqPS2HPV4ezXYoF3uPZ6RZPoDYNZtLC99Pn4XxaphLDR5H5WgyDeBB5DGyjfpbcSKKaZGnviMe",
  "key24": "39Vi2Gga1ZFKmCctgbvT3msBQ6owWEFXBhdSRkJLoEAqK8erhJDK54Eq9UrFWBPBAYZdqfLcSGYTK1VM6TRRYfpC",
  "key25": "5JfGQVkL7m2MPhwB6SpXZBMLgDfHqajzjRxvQjiH1S9nNQGGEFXrm4XHYnkHUNLWYsEur1AmMRwRQVj24QGqECiT",
  "key26": "5Axj8W9X5LHGK9G2S4pv5iTHoszL4vzDXa7wBnxNhJNTxyLpifX47HMdwEkABa4av4Z8QAXJW3kyShtw225z3skp",
  "key27": "4kVuEneizrPe8DfhJGDdZaaJz7bQecqFQ7kvVYNViCLM6oTbriwXtAbXsVTAg6vS3n9SZTxKZ4RbXJtMmww2BBrs",
  "key28": "3rPSzrYZuwAWToEzjMWedtvcoRzfjkyU4yA31gZjqCWxxLVDM1KxJytK7cFr7vyzcQSJbPYLwcGiVnj5Fsk8U64S",
  "key29": "46YsZeGxQNNKDSWGSVivyXLGRCD9MaDoXR7JodzTGgs2XBNFTGamqf9mX7JDfio8zDAmmXCauixY77S5acJeQy8C",
  "key30": "juM2SBTxcHGGfcyDE95KfZv1eh9z74NLVuz4r5FkT3utAztQGoniYTxc12aZ2RNQsJyqLv6BJzcUTvtvs7fjDjH",
  "key31": "2KLFPxJLYs3wFJVWpdBinNMsi33iuHeRZy7Xb1FLuL24yYct5PtQ5FQF4QUd7QQzUgQwXfebk97rwfh3JLtYTyGQ",
  "key32": "em5WhgYJHtuTNgyAtYQsHR8DR7qtFsHZmdmY1U93z5QqjKcSpinaqrNw2zVcY2AJNA58pPdkbdDLeQxWPyS8ze7",
  "key33": "3HLtEpxP1yatoebXKsLG8ZznHvrXZqZKLrd6jMw5JTNa8JB2Hnb3trChjunyWk1vm8NjGoXhX6v3CWf58mNwkFxA",
  "key34": "5guXPBR38mS1v5creyQyHkmiaa7AJ5ULAd8NjpG2uYCZ3zX3nDonMts3ZSa1Zrnr772kfjxBhJouG4L3Us7mrzrq",
  "key35": "1t4arT28UtXaa53QH17iuJJzTkh8qR2p8kayhxKwVGjRkp9a8LeKr32KLqsksaSs95pds6zcW3jVrDjehojaxwD",
  "key36": "2NVeXkqqy4WakXvRqArGqA5R5pVPLriq2hC7cYAMD1p2moVdFUA7GnNNBzqjTyqWXmYJd4siWiww6XbCWS6KdE1i",
  "key37": "67guJDNZ7Dw1NTRWe7b98843CbNsThVhBkPZFhWDnLQmF4sKpQAHyfJTpcrcwBLbKQZP5SQYvfFjaw2LVQYA5kn8",
  "key38": "2vN1Hza74iqKSUd1u9EGeF3LcSbpR5wKkVnLwJarrALGECtqU56zmGKPTEiz62cjeiiZjXq6J2YMDT8qFaDS18Sg",
  "key39": "2GFtK15MkN1SzXMGcne1y2ALUhsrnnLh67GwdPGdHocizWgLvQDPwUgjUfh4TBmbzVtbTJ8reDEDJpanDnMx68xu"
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
