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
    "4mh8xHnCBsp837czQijViXLcRPWaprBo5tDs299VQUYrVKWA1vtwtUzkfpDZ1DWKmXsbv2fPDjZJ3e7oCPr8eh8G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DC5mkymbNkatsRYtQphpp82CaW8u3ArajGShE9sLDoX5GB52PJvj53dUwUqKgud8aQf5X7S3niWsdwPxdEZ8FKJ",
  "key1": "yuxiT4T3ub741Zo9s8h5CQf4qb5TSxxvJHBSMEQ56HpySn3WN3yxKdpVhMbKnvJ6UpFE2s5vA2zrvY7wkRetmLS",
  "key2": "AHn9wdvewb9PwyLf81HkEweTahbBVyxP3DS56arY3S9GQtTDUmbwpnDSAtSUMfhk6HeoEnmyQn6xPTvrYfB8Vby",
  "key3": "5CZQ2SrCzB8HkrxXehZyZXreCKXP1hzerdTeobPGt9x5PqXg44KCF8NHvaET2B6mGTrJXhXw3cnShSt6Me3R1g1G",
  "key4": "2CXN7fPvxuSgMVJ26GB12w5xyZB4fM9Qv4wHYcUcXgmoed7UCUFG6yEvr4CwWxTBcsUhaMyNibJvxSt9QndW5SPs",
  "key5": "214Qidua1zPzifc4ufoQm32FSNfjdFUsyzrM2Z3GMPerXSCJS8onGHTFCZCTeUTNThGdbFict86U2FD6p9XsBiAB",
  "key6": "4nMeG7noVrY4nmwioYs7U7W2PCbyzKZwymxjmPtmBkhMKGsw5ZpTvsZhd5eV95X88bWaumS1Z8hU8FahoCNk1szz",
  "key7": "3uXUk393Lyef79VGyYdyN8bzM2va9ocehca4PGr1nXe4KrUEqnDUY7DsVXfBQv7vPWz89fY5nSJXk2Te7Ht18bjK",
  "key8": "22aR8LPsWAZxFL7sRdBAAJm1bCBmMf2nR2YcoHMLWaZ46CrHtCMBgdB39xNjPbgdWE9DGCsKoKfRjqoAaqnGyD9T",
  "key9": "dLjvXRpXYqLW4FrTPhFZeYQ4Bk2CRpTfE2mfwCgvvpGVz7Zmb1e1PBpTEtj8SfVKY6bWdmosY9LD6YWnQtfPxHV",
  "key10": "4mCWTfRyFEnAyuyfAcMs3My2wPjQM7uaws9HFrWMDWNcYzNmtjEKeY7xVRaupsgKSp9WTqpHhg144bgmx9E5oobJ",
  "key11": "4ufkhfesAN7GHbJxQw5mhQugncGZpAuA7EfqXACd6rqkSmTQr97Fu1C9p4W9unq7XcVGTukxnT72jJSoSZoMfjoN",
  "key12": "62CnwGQJ8YuXkBNz4VRP3kSr52Y1udw2JkEJMBu7eDL32Pisftx16KuDb3k2pRjDepKx1j89Mza5gWjFaSnDchzn",
  "key13": "4Gamcny7GWqCujNi59BYqu8hy1WyHLXgUnrhs5H444z8F3esbvSQSYbDL3o4VZxNy3LpkEPyk1RTqJUaApYA2u7Q",
  "key14": "P9iasovaZN1Gfd3cEsZ78BhyeD7sRZggWk499VgB8x3YPwe8ctzUV4KDQbW7iFgRpfohAFW6jShaNDpspYjQU7Z",
  "key15": "5MqonkQq9z3aG2vyCW7mdbWgLbwTCRg2yJQuvjvki4sFQCoH63PhEADbMSaMZHpKf7Jx7z1cATyguTttoYgAgxjx",
  "key16": "4PW4QBJgedVCes45w64PDheEawR9zKqVBKnG5ZU9hsLTzad65FLkJe9numrC4G1jxMJTf4KiSScbTwRvrDqLZByP",
  "key17": "4k4MdMB6Ba881XcDQncTGJPbMFzX55vVHcCJ29WqTz6gcyNgDWESKjtp5tR3819Y9H7wXjMJ6LMa9vr7NM6NAbxj",
  "key18": "5gYY4TtKPgveUYxLVuZMUQ6F1VzJXmZE5Zb1j19jVmq7aaFs1JHFMxZPri1AHBRr5rPQJnQEKvNhndXXHaqC5An6",
  "key19": "4oCCaEqy1Vjt8rKY3JD3jtwFGeTEkanVrofKtqi8wdLfCVehLjmw3DaarojvorGDYHzNtbqgNekJrTZFii1eKanH",
  "key20": "5i1zGoJCXMEvpRoxKLUdQyJ9YcbeHiiMDri3QjKC7amKpPnHwVzqGoAZJm6EM3qHM8FSzpFGipqVp2aHZuDPYBzG",
  "key21": "2GXWrfcp1TeEz3xLoHdL9TkAmHTW7uBkk5P1irekaKGV5nhzjeJNhb3Z8waoJDgCZFBapou9J92bq4DyiWXD66Vh",
  "key22": "3mknz3yf9oCXmFbYA8d4gfZhot1pJMjoNJgLogqABzYom7aZ3PvBrjBD6neLUeaKSskd4WgaTyMQWs6HL1AXuNR5",
  "key23": "67HVEhaWCDdsf5evP4Ns767GZN9BfJA5HwBmXqX61HCzCTNLSauxUipn1nwqNT6t5vuEKZWHmA9BtWxMePaUdkz",
  "key24": "3TSXuLQa7utgg9keHtM4WJotap3rNsRifAHaiKf9v3ymrWZuCHQKqyGTwGobGh7zp1oYMEQh1FVoeZw6KPaDSnzz",
  "key25": "eSVhXV6LqKBGu5VyUKuYFviLrQFSk4hqMou1kwy5KEHcFLukgM1oxQkgCeKZMUqa1FEbwWaHmJkGpNeAxMq5YPQ",
  "key26": "oy3aSHiFWPHWo9Puf7fW5wWACNmXBSoEMo4gGsz6aD8WLtMm2FAACG5Vnchi4R2LFCmLfizm2fdYaJprzZyQftW",
  "key27": "2Hp9J9SoD5NpLwyvxZe73QZZvgU8abyDpckrAJW4YzaH3D1BA676qstYpMSmtmSULX5mpEKxsmuFkM2Q6iReXWZ6",
  "key28": "DD6Hi8uHfL41NTvzdpoPMkLAeizr4B8zfLysm5en3CuxBwKQqv7Gi6ss4az5WYUtr1hvmPqoDoMfanBzQNKiCL2",
  "key29": "3XryKEajMQRzCSTEeQy2eeHFHmUChNsvU1JSJc4roeiReQZXtUGKhBzoAFRnpUnRX2a5mWhPmrNCiWHdhMRLYJS8",
  "key30": "3Qn8CDUi3KgvQXoj7xpJh3fLScyLU1SYfrZ3XrHjPfgCfpnWz1baJxRRJzU34EHqwLe7iQC8yTLreXGoQD32s2Ur",
  "key31": "3tJk9zr4Un7jkeKsazQwYQf78TFxJQRoy3xPRsXacEYTFozyJCYDtZaBvvQyvxc4MshXkyLB4MvfMiDFhrhLWWSY",
  "key32": "5Ldggy91jG2qUBXnkeng1UaeMBTdF5VrWocM9SJBKzLuUMJGsn1BKXHeFJddPd3jUotN6pLqqm4ML3WrTNQC7TsP",
  "key33": "efSEYVUoBGkSbxnRBj2wzsHLfGESjNLyCSDyEJDHr1368rMohgHFFSPfD7gNyXbV5A7kVbENCv1ft79fQwybrF3",
  "key34": "3JSf7oQQozcFCmoNvLA674TrhJAWRhPZGwXcPNoQAJvh6m8unhfvTbdmDV7Ee49WBgKMEpXe1egk8dMhU2VMdebK",
  "key35": "4GV1VJ7aYyMokZW6aHevMyDAJCvLsTyeKNSbUK2LCfJmTRTT2gGD4zcgY5SnETj9etGtBefXGGQQAntoJ6MsLiUu",
  "key36": "22LbGGZBuRfoPTG2yYKFvPvFHugnpkj45hawyLQTBhiZCXQtwST2rdFdgH8rW2P7bDraxZrwHQTGhTJvqXUhiU1j",
  "key37": "5esokrBBqdTbU1WWQ1Lsupe9HakDDdWqDtBkyMR5nh3WwLqoxvEe6F2MWq1hZjDpEhxrPCbk8BRezpe15LcqqorL",
  "key38": "3RhgY2jCmaFSb24ErEbH8aNTmc3UuriCt2dca1AA8QJohwojn5Hvd2c7iv2aEjvDXcagnuQ696hnCx8tScoujcSf",
  "key39": "58gGKuieypZPobT3HHNfFxzkmwPPAMgFkM1XmgpVtKHTzp14Vy34kYVL5qdJpEGVTPvDqauP4XKfJbWxbSSBmUM",
  "key40": "2GT3WbVoWqc7THzv32MhoNopaztYbAWYah8nqxhqvYcHimJCZD84pmXakp8VokSWygo2Daq4ksCco19p1ggL61qc",
  "key41": "2gEJeXtraw2FHaYNETszNH4K1gsAa3ouvgM5ZKy6uo3gbKxY5FawYXcsifBnjULXodiVprSCAa7Um4Pktny22vKK",
  "key42": "3VKDoGCta7VKmozZXS3ZXWrNdjXRSwQ8jVUG4gFmFUuG3TSJRYoD6mAo4CVonv4APi4LPBY2Lg4Jw8WBbXxjrXBG",
  "key43": "392P64LRA7TpZ7cgyYxYpFfFVQ2MTRP3nNDNsveFAeVbD55utdhqMLei6oUGefCR67qpEx6VrjPLQ3toPcqDttQ4",
  "key44": "54vAyGM4V8YpxCz3RPefHb5ZqsoNfLFNFKoEWGeN1paNg7SyteCnJDe9gb7WN32LbY47d1JhXCuduHDxXgt7NaaA",
  "key45": "4NgmnBXNCsofN2WbjrECTaq7tzqtEq5ecML6pWA19MR5m2EtxUXHTf2f5CGeqHNzq4rqFw1C9mPVLE8YH1bfKcGy"
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
