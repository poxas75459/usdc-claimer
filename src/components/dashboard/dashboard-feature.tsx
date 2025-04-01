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
    "5DzDRYYL6NVtVPqkvwwq2Wi9Mkf9k8gE8wQAjvdR1MfDJMCCdm4eMffuirscV63cZGpyxUAHRRCUbQe1L98YqLJ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rRo8hhJiKXyPq2cTimMyFLmQsfj4AMHkpxNQzrQ7u2BJvXwzKEokHyzrA2XXCsqRndZXKJhcfU1z1cQCbnqJp8c",
  "key1": "37W7iEEyUFYPDXHBrD7TJqYUk6bFvEhDy3R1n2dxNohnCDwjBPb4pKM8QD9HQykVHTdYH3eHpac4MRdrC7byVyQX",
  "key2": "55htFfNzzu3aaY5ozSYUEzhwmcp5NU5j2KsK6DTrqatSMJL4MGdV585bNSSPEpU5zqBwsMME98doWjosQ6n5nCA",
  "key3": "2cB77ccuQcunBwGH1wya1Eb5ybrWibjzfGHQM5rSFKbjPRjdiq6wKwyrekgvxgrh5UER27NqpuJ917DhpnoDhecJ",
  "key4": "4JKdqGL1pHKFGgywvETWHoBvKHqS6K19VstMJzJL1dYDPewrhhdmLyHiDeQi8tJVnMC7H3RkWQVdRtn3xkfv4kUR",
  "key5": "baZGi7J5trWQYLhQvPyEfrttLVtLgtoWnnXvWBht1rd5eSEU3nZLKxtknwNhgr15sLfLHUqyMqytajN7LcYQNmZ",
  "key6": "22ds8PjF9Sr8qo5zbMrEgG4xTiHVXcQJCece8hka5AEqiWjyNJg8CHsYpvHztwsZxzKGQw5vMMaxAAFRe5Ttss5v",
  "key7": "3DJg4MJ8v2EdEpPZfGWid8An3aspdpWB5styu4LDXmpGmEbM3CmX9gEPDMB828W6vp4mxaFWKz7va2VN4VxbQCt3",
  "key8": "2rBCUL75Damze3YdQPajCchp5BbqtuikZU7AN1cd14e7on4y27z7HVbW114ooWU18Fdw5GHTUiu8nYXgNCvKXKcc",
  "key9": "32sXewJ3AA8FnLUEfkD35WQcGM28DJcenkvaV1WyYCtoRyrqpTRBc192nRCpoK3dgogzb5ngFjgU7DFfYwpqti9j",
  "key10": "aa3gfSTFD3r82QmKSGiY3MvPkAYKF99Ds2QkzwknrWJpzwdzxaVrmc5rvze84imwAFaAZzeQbwkfzCSsHBH75Kw",
  "key11": "3JaxM4FmZmvZD5c2mVVqdAWQRzLRb33P3TCYd2UrjE2LqDTEYDjeAFivzKJoznJuGaFT4ed3hsUcpdfmNS73tPTG",
  "key12": "3XW3ckTjNSBFwWUyQLRuD5DU5ZbYnyK8GvDzTh3XnmqkY3Lx1zPzvuXGcCJCn6oZb5nr82gWddaKKPknpJa73t3Z",
  "key13": "33ggokoqS7HJUSZRQCw2iCFE4Pc1CWMoJKRvzss4YLvSTyU32hJFzdQqTiPm3DJ28vqkwDbshAsrwQ4tpE8vEi4M",
  "key14": "5NKpnU1dUJcdBoojNs2Ai95d7vpNaJb2Yiwcm35D4FzyZuyAe2coHGkNZcmh2C6Cros4qb2AEosQ9d2mcfiCugjj",
  "key15": "5hfAtgvReM9MhTU5Qr5uqHiZRn8oB2fhzDxisiM1nYRrGAsstix8Sq3Cmg445ApoN7MZBAUsFPccypiTuTQrbtsF",
  "key16": "4ae358UZmZPxDqdpg4uNfE16oM2KcrRbdW7G2DdUfkmmCqFY73GEznMS1iqTxKAgnwz1BRjMpe3LtAbBux5nBSNs",
  "key17": "3Go5tt5VZW29DeUXfAU7mjX1G8MH8py2vTZJtPRb4xr7TCodUPDka6eiHEcu19zLq3heggauHJ6pbPzwN8jMaSG8",
  "key18": "4K5UdfRHE8uudoYvug6oZn12jkVnJ53BAUqE4KS9fKjVbTTiFtmJuwud63U8npXVsAXyUuU1Daqq2JrCVS23BPLy",
  "key19": "5ugVbzJQodettTJdsdhUk41E7vYv8TtKJxKecPSMqnkF8B4rpzVss8n7shmf3gD7KvaZ8D2fsBYjma3fRF3RWDaU",
  "key20": "5EKUH5KiDTeYVksNVNdem8759j4to6iatAavPvcSuTi1uC7xsJmLL7sxrKBrDXR1t4rBnN93VCeNmM8XdFspitQ5",
  "key21": "5g26Kt3TrNzRD6kcxR5fCjC6aRHkYE9KdJpuByVbCAqeCPFnyxmHodW6jKS2JYFxLfxxAzNX1DFetDSqC4L2b74n",
  "key22": "2KbN9SfTC1xQPguvEVtm3kRFTcFnDtjv7yd2aqLn1Nt3BznfznYNfGtubdJMFhMS9pZzyjQVZUz26rrquKAkHmku",
  "key23": "3rezA6sVHfps4YLrXqEMf7UVz7jTEU727YcGHcBErMXX2AhFDWisMBZ4bHGSk6hjsn2Pgxa4Q9jQXdHC7N2UBy4J",
  "key24": "3uqvCk9DKEn3dM2ZAHds5LwcHYFHvn4tqEWWkLVFfHmFDpmYWRZ8ReYjsUiT1iUXnmDyvG3LsgSDQzgTqnT2Mjw",
  "key25": "2y9Tz1YKGocUBDkjFdwu332xyCkHn8JzgHmQYebAuEm7k5Zsqm6ZZuXiDyCQXE9MxA38ktuyH9AmYiTQtRoyq92X",
  "key26": "4bn71foEc7zN6F4nFtD2YnMK2GybNqw1pRur6Zoe93K6i95ERqBf3G5A1DPoKTPd8UFb3akyETSdEWX1cDbK2aCg",
  "key27": "3QbeB2S1MjqtA9kzB5UGtsEYQfvPkHjKd5eQrVh3GbkWjbC7xiSndra7qv11GWPfWMYZPL4d7aKmgVwNXL782oyo",
  "key28": "5WLPLeyw1DWEZv1R2VLgf92YzjYhsgK8XyKFP8GpJyRhZ7zHx8VM8dsGHhZwhNvUdnbRKB8A2VQrvtc5dPSAucKn",
  "key29": "wTbG7hfqPLbVk24DiJZVAghsPNu7nXhjhU3Lewop7sj5YDm5YpPjfMweW7KgxicKVaK2uCBvdFubBWpPPvqMkTJ",
  "key30": "5LEqnU624p9cTDWrQafriSPHiFgBKqxphFZZvWN933JWCTpbqtVakKLrTx1MYz9LNzMwGKfZjKJQuCKq8weAn2Dm",
  "key31": "ojZmBipXjrqifJgiFTxWNEAZMwDLSMqZDifq5bSSqR8WkFhjhdubuLXStgXkeFdSWkvKNTPFsvjZzTPB8LhfwLj",
  "key32": "51RjtkM1NiypD52U81JWe4zAfkYd4xT91AJbCmLDi7wLE47xfzunvzEaMcFRefyN85N6qzn76X4NRxo6Df87agsf",
  "key33": "eT6Rgeo2UNvAxQoHj8DjWeTL5B9P1GRRUuwxiq2puexpLRxYAPXwRu5AcHdHoRjbmpeSA32pKZ28aH3gzvk6ytd",
  "key34": "4QMr9zWjRwEfYbKguWTBo8qJwyNMWREzN5if53mPQHac6PP9sy8s7dVZVPU9HYXUZx6NTFJERdr4bgpvkWdhWob6",
  "key35": "66m7y8ivDhkzBHFUgWcuVVSurr3SEw1apgbNJJefPohoShAFXAGZgmshb1pytGRo4FummzJDGaywGfr66TJvuXp7",
  "key36": "4dHSuHKc8c1HoJTtLdgHgLb5PA91ZjHhoVF8NDjWUKxzWEtD3L3uFvYJ2ZV46NRWYX4fsnfyW8kRoWz39uesW9Hn",
  "key37": "5DJFcpXPX8VqTDEUS7L9MbCn8gWgHRZ7hKBT3QanPCYwDT2rjdHqrR791aTLeazwrRjMrDrK22aEmKUoaN4ACdjL",
  "key38": "5X5cwCxiccjUTCSP91qwq2ESR31iRzKiB4jbgKtL4HPGdtFtFPEcf6zoUcnAiDsP5JtmVn7dPM6x9PZEwbti4sik",
  "key39": "5PNQDRkjL39U3D7SuUKwPjrzhBdW6hNchjxXN8FpivC5aMK5MW3EGK8882a51XEQBARpeAWssy7nyWPVHpB7Ls4P",
  "key40": "53HXLbjmgFCZt5xD3dZdjXZcgfd4XQM2JWBqCVoQJ5HdeCDC8ZG8JLLRwtdkah2XwV6m7CoMCUuZUhe7Xv3xeuF1",
  "key41": "5bxwANRoVqToWP6uYfZvopTfRAdP7L45dAUsNbxXZYCgZKZCRGRFGanGZSgSknp5rgmVMex2qRnQnxHFLR2eVmLi",
  "key42": "3r2992u7PAjHGLF8ZGFijhqGDZrymsPALUdTVRLCj6J9TxZnd1JfiFrMGJ4g6fn6EqdGHEzsyrhw9KYTjosMNpNK",
  "key43": "3PrfBNck3KndMH14onfAAXVsHekYC5EW9QWenzQsVfiqhEZ7AKP7cdaw5R6QDuNvAwgdk3LiETuigq32W1JH1af1"
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
