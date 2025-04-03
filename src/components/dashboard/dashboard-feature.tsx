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
    "3mkh3xkQbfiGsfA3J2agXw88bs54eFsW9r94i5Svh5WUFp2AUNk2pvxr4DHMRYgVHTHEDxdLq1of4MGaqx12Z6sb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uQFxVxXahu4YxE2E3wkxajSEtz4SdY8YJPwJhiuXXXTVHgFg69P2RYCC2KqzwWYcdgaUB1U9REDjYESPJRFtJEW",
  "key1": "5tKwEXbMacFSPVXrmu7TURVcP398ysXTC1F1U6WavsfSVwGTrf6rfzfhB9YFCwRnNCgmMc7HrUPJtd2juJcG2BkY",
  "key2": "2ap7FiH5ewCcbxEFghjTHwgvNSjPgd4nk4AnD4LHHvD7D5XoUS2qJrF5ZytWRq8vySwun99vs1gvXgQyddu6uaRi",
  "key3": "3kvwWLTyPdEBAKAWbUnM2jySd9m1mrkGA57w5Rt8S8k4ndRMBGmAt4NytRJspAkvzsuKyspfBXiW6crRaeY4pKgh",
  "key4": "4M5GdDQwXKWJqB8brPhu5zBfH1mga4bZp83J868uNQ6dTAy4iicrTAwg2PYdAHZjUF1S1eTAX9g7vsLcR2fsM5a2",
  "key5": "kRDTggqaBdS5T2Ez6yjLANMEY2iXBASHMEL6Unq4fgv8xvUotupgSTLgH1LkK3CMRuHQ7eqaYyq94kJRoRyqaUv",
  "key6": "6fUd4wHHNGHRxBCLcwysEs5bqZb6yURsLF8HtNFWkC5qKZBiwqJWNijQvhsULybZRGH5eEvp3WJ45zFZMtUY528",
  "key7": "3niz42DWpQziHzKVm3ousJYMxnDRA7f9cYmeALHebCrnsR38JQZDA7ePGKh4w2kr6MmNhdXtU5mUthpM3jHDeo9J",
  "key8": "4TDonpLPmwurMJ11dJ5xAvCmn6RCQ5QCwssBBrMh3uSzdbiC6ioe1k8YpBidH84yPf9k9b9fM8AmcgTjN1CmTuo3",
  "key9": "5sFguuT729T5nPu27rxXdc9qNo8C2kPvJWSdMA7Zb3RSeip6obnYhCSCwSNotYt1fErSoUrvmf9ArtYnCWK41UL9",
  "key10": "5HE5fm7FTWrghkMoxAfdLAGDWXuZCDE8wqL8JPeHVPZBwqJU2Q4aMNeyrdHJQ4F16nktUg4Z1RQRVfZSPWgtBrHu",
  "key11": "5LoHU6EFDPExWvH5dR52sGMEgwzEh97bxCzeceVKz19GJauw4NYy3KyyUrCUxijbBR9eKBkwRRVKn9hkDZubkbPK",
  "key12": "3C4BfWrfS6pcBjsJ9Y2GgyMB8KiMLiFj26j5uX1utbfue2xQnMyCk3dzDn23z24sbdAhfpb7Wnq3yWzje4qE1aP9",
  "key13": "4yEQmccWvdtV3VJ7mF87DgmAkgLpWZuouEmmrV9RHp1EkEGcJd32pmXvdNHhJFimHTFFv8cHJgrYxCwwz1RbpSCv",
  "key14": "44JZ2p1dB5ycXJk96yiR66L9kotCHu8dGuq4nhBwzAHeCf6pXxQHg9kkZyu7sQfqvqNJ1m64sm2ZTv5sRwLjNXzK",
  "key15": "33WzBVxxjfFgQdPapj6cFfYqEvai2D87Jpxm8n5sTamDq2hrHNWAM3qu8JiWqFqpPqsEZPHyJUmEUnPcyHpHMLqq",
  "key16": "o6EJnZYbrjdncF9AmJGX6pHkqQZcdRgNh59NjmKre4xCsuUQ4Kzqoo4kQyRXqD5P4UpRk8RZuycaKmcvH4UGw9d",
  "key17": "5ATfCbZk448tUoCy1A4MUdoyjZCbCpTAeH1gquNR4SfVGLkfFotkUafUsDhRTGqaw1uRXsSSsxdWjSffEG5syUXq",
  "key18": "2nwYoVoktHMM6qpMaVQidgxrEKs7MDnLthmHnQXfeotTFZ2TJmHDZxL8b6Y5SQposrm1PcM1bSqbdfypdRN1UaAk",
  "key19": "2WZ8ueuuLqy9EZzzckM3SgRuiy5pKPhL8qmRHiWf2aMcSX6rWr6zexLsGFu3Lctjjz6RCeuUz2nnaG6ibsRLgS62",
  "key20": "2EXDXsTN9L9Q5pbg4HMpojTEpu1znozASNnRHrRyDd6fVnjC162N5eZYaka1xcknDUiw5JCCjQzmmbkGGHQxZBim",
  "key21": "5hrEc1aWP8SKzfGiMCj3VJWeZA2KYh51pRjoJXnNCR6MV7gsHf582hMyvjNXpqVULZ9Gp5LSce5dxJ3FgWEGVKMn",
  "key22": "4fbnu9YWiwxfhn6SbzfSEE6ydn922mrnZssC49cRc6g7LEr5HRT4dGqWye7YmaMSfeWMCjEJr2rGZHSQxP7Xe627",
  "key23": "62exoJrrxTaoZ98ckagazhhHbojFp9tDawiC2KRUtm1LxSRSnUE9UKuY8QgcxJSMcN3oFY4ugWGraBwDyU2Tz1GB",
  "key24": "55C3Ytz2XPWRHJhWnHLhWZH9w5TSDJEL46vH2Z32uodut7fMgQyGrMHqv2FtgC799HyZPvkAwmyY4BtxT1ETT6xR",
  "key25": "4qD2cXfEYL1AEDN4LPoPa7QRGCYrCeyRgWdqWk95DdZKqVbYnzn9QACryqMqwtQ8iuMGhmo3Srx4H8Ugxrur97r5",
  "key26": "3sgVDKCXvBBvAkRyyfDDhGy3WvFnZdJd14H8yLLYjVEJzvjLqDArFfavtfPNSRgczJXphsSEv5JZJhy241gvnBnT",
  "key27": "2C1b8zNq4manjP4Y9HJzvkNRxrg6aiYYd62jFv9Kg4LQJyFduAUDLqfotRFGVFGVyBsH7Cb9ZYy3HYD43mZMWXKN",
  "key28": "3euJHqVFzTLhULJgLwMfhA5FQGoVYQmQJpJb7ieXmEgYgna78iZKZcJqBJthcaeTpWsVP5qrcDktGuHmDXT6F4uY",
  "key29": "2K4FgzgyxJRLQMosR9tt2L6RKWbHUxNiAiDEBfx8VuPzzPtNfUsePSMWWc1FBDKiHzF1FHeDX6boYPxGAXNvujy7",
  "key30": "nVongbu953hrzCvTAAmE3hqbZy7RqkbUbWKSuqYhcC57xEUqai96qDRopbzxsyGUUEPjwYETmbstbNy7QEAmQTq",
  "key31": "41rWm4uNXijqM57eqRRGygvNWp5AZimY7rr9DanLRXRKdYsxxYjHT5SZgMsrsANMhVXNU68yEAALsVwzcHpYBPo4",
  "key32": "2cZZ5nTuLbir6C58zBDxcZsWZosqXLVSX4TMXhauhFJJUkPQ7Uo41MHuZVvHJXUecUTrrTN2A2ztaCiNcpYy6ppR",
  "key33": "A625bnXpGjSYGGWRhNfh9KsJ2uTsEJjwVTwySpjRTS4iv8qeyC4t7DPeGyxSJGPqTcyhpmJXgfEQgQNziNon3yJ",
  "key34": "3P2TdLcsugymZ9FGgsqXubSuH5QENkEH6CWAz6YS6dkHo9aisrGMiKw9DcaYW735q3bKoqWjt1YVxjLD5nvL3pnv",
  "key35": "4c8XCd1ViND8PC5g5zYpXguVcY4CBAdboXumSQGzGf3Kmmvi59kTAQ3w121GkUAbuZGqpWU1VLb7TaH5DLz25e6X",
  "key36": "5HwKw5KdFtGt9JSLowWWj5KrS6bd8qyyCF8cU3kFikzXMajEBqKE6FLKsVtoZTtkJKMbVWptxhwo4MbpVikspbkj",
  "key37": "3SPLGnkmBLRou12EeV2wTkLBJN35enyjwRm6YwG7gmYBZfEdvDWzUnCsPfhVM6inrcNs3eEk2iuz91GaknA7XJNZ",
  "key38": "GjBc7cN9o5oRKsP4BLTS422vLENjoZcCKJ5XjNiT2BdacWERtgqMrEBfpB4466G7Swjje9zzCrQfVdxzUUHPEFF",
  "key39": "4gwqicGj84k1rCmr5fpMfFd8zM48XmtijurxfxWmY5namoNhAULWfMMafcJzosSwX42VJHXJ6US2pAHk6YA1hWoW",
  "key40": "ULYEheVpsD4QU7PUvyVyvzwgevgZCryvLsWs5i6z1LZnnhikzi7ErUQbpSv7PMAn9vUERRWoB44ZUtAkubfcHbx",
  "key41": "4sgZktMUtM2wJMvzSGqNJxU1zatQHwJyWMkuCEDYsNwokbaYb67gz2PBP6jB7TxEbWq7iz9dHeYopVhAGZbiE6JV",
  "key42": "28JLJWyYrvef6RDqq8ShLe9hAXZoEukjKcULMjscNDVDZ9Do8XWZv3w9NELiyQn1DPDXfE4o8QkCr6YABeEAvkT4",
  "key43": "5kEEo465jcuot8CFJ9VwfgL48XQvr1QTxGXwVJDgqpAg8b3yFxzbZQ6Kvj9ink292uoAhUpu2rtGaJWgTgkG4dUQ",
  "key44": "fgLudDncoFvW9kQ4a9KpqpTD5thDarkJgjJFqubG81KbykK96GmpammvHPchKGXAzFM6QC7H4vcbZ2puzuCrzNa",
  "key45": "2B9KWP5ZqxMtFQz1o9DVMC7NqfUy7Y4qDCNvim9x8cNBBoH99UxJbf6eSdKayxXG9uyrSMXJ8DxhpXpoheHXzDFW",
  "key46": "3xmQBCkX72Cj4wPkiKA5PpDaoakFXSWck1DvjTfLGcMhsJGRif5htjePXkMVy3KQhMVqWX8fnL47fsykpNgM7tFN",
  "key47": "5n9psgL693XumwdPNSgSaVP64bg6JkmjxEbNn547sf4HpSTCYH9tDbTXgzU94ygt1E8tDnHbxf5LKC4fecdGjiyW",
  "key48": "44AWw3K529Ta7U2kz6igH2x63bBooW6min7oqJCASLYK23fGQ2KmKLXkBJo76K15iQWYjaxnJTH2YWZ1pjtQSprY"
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
