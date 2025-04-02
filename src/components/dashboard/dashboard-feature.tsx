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
    "28e8keRfWs2HaMHqk3GLwMCQkKkS9RDdyTuNZ87rAUogB9wdD6CzTDdJSdPQSZ8PDKGG95q8HK1zSPKEtNd8VU1i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2P1R1eqgZYNwpFkU8dEQAPYgAWQESMHBLiXQn7uDcXR6oce94qPaw7gGcamfaBLP9WVDpbNZkzYa4jjFzPQSs6Uo",
  "key1": "5CT2WUK5eLexm3NCdNxGFESXBSAq3rFWZi1jU89PXeVXpBvRgDsccFLmVkByMaar4QEvH7QxTdH4RcHMrbtqb2N9",
  "key2": "xxeEyTfhWidWCEp7H4eUdkF3dKdefAMaJMjFvKvPfuyALqi9Jcf6jz2PvRpnjwWXYbM642AZx3bPn4akvD92TyV",
  "key3": "2hoheVjCL68ztKYze4wvwPLqZaGdQFrwCX5JHic2QnYQkSdb1ScHSjorLzhzXJPoq8Fm7UJ6qJY4ePh2riBQW9XL",
  "key4": "2hKwwKhwp4VdfrUNqrWmz1x78Uw5o415ULrzgQGV7PUJGv7CK4scFqQHTPFDbfr6RXrDDAYwgGK1QXF3HDQjJQit",
  "key5": "3vdcSdEsK7h7uvYw4o8xiuKcRxTyt7JjGfVJdQUN5E1wzz6RpqN9Jg5reGi4nqrah5qTQvyZJYnu4MD4rC3BS3Ya",
  "key6": "2sgbneR2AtbKtoDPwWx8FP7zmnVLvrarFxFEivWyea78uy7JGqrLRtcELHGuQCBeRUXSnUnDF8R13WWRnGmKEriM",
  "key7": "21kYCemVKWuey82KAoJRPgZ4PeHoycHxgGLkgSqQFuEQWbZf2SeHb2GN2SJU5CStLQTgrbo3RqpCXsRdaZ5p7xHC",
  "key8": "5mL4C3Jf6HGB1DpZfKmvJp6o8Cy18FgmApnZBcMY7bUNuC15AWHikVr9paiorger4m5wArpMUfXJ3bgM7dDWofJi",
  "key9": "4rrsjz8JoG6LtY4Pe8CN3FAzA7QaZErgYDuzjTfPG4bJ9tQBJp6BpmqmDkNRBt6tbbGcBarpwUMK4AwKKgyLP5Eh",
  "key10": "3dvbA7ckHEvDQ4QfZ6ccKoH4cC2usz37DFPKKVsvHvjnQkwE3za8vW1Rj5yk4WcDY1ZyPeGQH4VQr6LCxrgZTZZX",
  "key11": "2z3cnsuxAAnwBwUjgiAC7JuQ6S2t6gi4K2a3wgA4fYdQpkAorGtadsEHjnUmXWNfqRz6zpumvUT3rmrwytNdmEsU",
  "key12": "5Y2WM79PjTqTpLftiGo7GUTEFXSrfXQZzmk3vGooiJpaApxV5ZjjvdyLARqfFJcPEjbRB5i8TEZTEKuJUUAb9uSB",
  "key13": "33ihyq3bZzL7svGrXiPEjXK79WDCdFwtJjd3QekmBcJA9ufeuScYXCKnZ9DNtLWsP55Mpqgr7W7BoatEascjb2R2",
  "key14": "4gAW28NtmHCRKHcQDYucWrricwWAE5W6uGey1zz11DDA6V9k6jNZhpcQeFtrXPQWHaZcdm1DtMFcjnbewWB1he7r",
  "key15": "WiRs3oMEBZNYDALXSxUR9zhzDnz4SzdFCw2ebGmdi4XbWSJJjDGKtX8Hr5oRQQpi2vmwyGp4cEEy1WG2JhRa1FD",
  "key16": "5tqNppQxnj6pkeiXuAtfUn4prD5jmhdnXxvFWuNYQCk199ovAFuApxixTspGe9NSATJcftMcdkVUqxacwLMuxVS2",
  "key17": "ppxdpRit8zpsGKjYyzQ6yfq5eS2KQGyuN9ewFPtYkF7vtVNNssfyL5yPZN3hK4Sq3MgjbLejBQCHXyoDmkpXerk",
  "key18": "3X5mAfzecHg39t674CbqvUsrutp6YrkSMSaRQ4DVhPi4QJqcnM1dzzisE3DPKsisr1RxpgtCKbiqWRrgWuY1tE57",
  "key19": "5cUWdDp3PqL9D49ckeJfeCamnf3BTbNNx5ViYHrh2XrUoY3Px6hhKpnthrqjXqouufkYUu2HYs5sPJVRHEzt7fV8",
  "key20": "4uJGoFiD4kZVfR5U16ZCFQujQYbohAYUCFFw4u55qJwnoHvp39zCriPmqQ1iLDNjK5kLA2PFtgEkbqWNKgTPT52Z",
  "key21": "3PwKE1bjYyLhX9Nyq5Kq66sovuLDXj6cRYPEuf4qFakj18v849racWtMxsZHApMF31keGvREY7zasYpJdYCD2XCB",
  "key22": "4etuYRa3NLcFuHXL5T9VCq6jcCVcwqF1sh9pgXKLjrzPVge8gjKL24WgzWDudu1o7qHcgsr8kcwCpbceecPy6Y9i",
  "key23": "3wRGkYHptLpgTzuCNr4yi4rWhNQyTFwEMVLCXKezEndiNgXfqbdM8HJNiHfhGzFY48s1cNWEqfmfYj3HXqaS668D",
  "key24": "5PQq7KzgbiYgLDEgAN1P9tXmXnrwJJ3hj4mPk9RvgDLrynG2ufH6RJn9euUcWKQEHx4pPcE2NZNYjBW9SkH5MJNi",
  "key25": "5EcWELeb3QT13aW3eS71UQSUEQxKFqNZ4rwCNJ2DnWfvxfGrkzaL1mfeXK78DWzyCUqFVxB3shSnsnnptX1Lq8cQ",
  "key26": "4hhjKyzmsujSYFsNrVD2iBkWaF7UkuJbpTkUMqLcbXRd4SXs2Vaf78D25n2fWAfJMTtGsVRNH5yjYWkmYVAofPxu",
  "key27": "5d5RRvFq3cTF5QaxjXj4zRjbshwSnLiwbBo9zdTgFuPeNSEDVYSP5KWu2DmaiK5c8PV4hoLrkaQiDw41Lp73B2ME",
  "key28": "9xe2y4Hhz3gvzdXfxjavtUER6EBVYRQsvxmDwfngfRgGSrAAktxuLmSLDb52RJpEYKxHkxYZJLi4F2TePLHzELC",
  "key29": "4P7PWfK4e5hFuh84RYqmrWX1H8WzhgzVFyfJNBAUSsPNGo6BsZDK18j9v5Xy8sWiZa9SUGYvRyepW42792zEMfAU",
  "key30": "FgBaEDSTw1edQHNkJg5ryD326vEJnPf25YCuX2swTm9zBz9U4bL48LWXxXQRKswGhkVswXTNShJRTeFTXtBj7gT",
  "key31": "5WnwenqhZf9YphvxAwHD27wK6czxejQpojV6AsVnB1vMPw14rhXEQDc42LS5ohgkxtQsafhhUHdpiU4VDLa2jhMf",
  "key32": "2Z5WLtToMifmpEmxFSGzgBDABMyaxMMUGJgKmRZhjJXUDfTykX4StssjC52od4FKs8u9c7py33FUELAmkmKvTWm7",
  "key33": "2sgp14iwda1qr544eU3HXikLRtTgioxTdCnkVgBmDWBSSTRjgXgM5o4s9DggKUX8QHy67jVbg4HDX6pdZwpVHVH9",
  "key34": "PZaKTriyfhci8J7nAsiisMqwwtzPKoB1rkvwZmbX6vDPqUZ4s4wppN6CVYZDdbbnafQq7U4Uj5z24WSorix51KN",
  "key35": "5M9dJQevrgXLoGq1ehpgti9WzfbsjXVCb4P4wsBSVCqBV3bhv8Zzdta6XAmonihfQpp49RUi4Ly2htBDJh2stmFL",
  "key36": "RkB8Mo1nWBy1pG6YcNPnBDMdytEM7cGJ9Rn5GPBYQ48JEoAMvepMTg96dEtsFGxYX6YjePSQA22QehGWVDeH68d",
  "key37": "TSngHeyDx9FMUnNnddBjTo6Y2qYimgLXzhe1yTohPMCpudPP5n1S9YMqUG24AyTj8eGSKcLaF45c2MXfVnFynsG",
  "key38": "4xnigh37aftAXZheh77SH8bEwwLEJ1551Hk2NsxsgJcSEyjqiKifzsjutvChnFoCnHxrHWUtfE4sgwu4ViiyYWYF",
  "key39": "3QBWR7Dg8KrZdoWz2HL4wsAYcVUdBWCMpz1uLsPxMix9KuwoysuRFEXUgjZyvAX6ViH8uQC5cvf9Q7HbfmP2H2AU",
  "key40": "67aE4CYY5Lb5Ry4VHePJ1n13a1iPAPDkNuBkYpTDE64KoRfq9f5Ggd5avZGLJu8qAByUcbKtqy4oGSVKEJL14dLG",
  "key41": "2HfSsETY5iZx7TJspkRTrDFBzYTrhf7CLkZc8JyzdhhCBVPw4nZN42h7hRSRJSqaLHGeX8bMKhuMLDPUgvDgqHjW",
  "key42": "3gP4DjmwBCTLKwkoJBKvqVtKZWCsj9keDK1q1PqjXh3dqw1GW4YHp8zZL39Vd6WkTVoS59auU6cpZoN3NsQoEiQL",
  "key43": "5pHhvKFMefRgR2PNWsCdDN5FMwTZL59DdYQUpXt8HYgGU75JW8734DYZmC8BjMoyZLh4aBXhAw3zyF3E92edWZCM",
  "key44": "556dvHQHGywfw2ZSEjRB2gCbMWreRjTPat7oCF9Q3ttUCz69eH6LAC1SAuat52pNRtasM8W5PdHNPCxhDcJxQqYs",
  "key45": "5UMxq1k2c1AjzRnb3iNmnKNmqw1CMTNNMZwJp6cFP7eFitP5uUCb7CFVs47kctm8SCUoGGKCocibamR5fdFu3aJA",
  "key46": "3eFevGZL9QFTdPEbynKGzTcas1q22jM2JntNu6wMhiwMsauxrpgAc9B9EGa8ekin5bYWrCE3x6EgiPFzZMrrogV7"
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
