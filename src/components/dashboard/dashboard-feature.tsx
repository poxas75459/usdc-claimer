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
    "uY6JFkMPphNgVHm4AQHaGj6nVJvwPCYeNtVypVNj4yHqpwymi6dmtmhqoGXKRq9pRmMv1hsPqJRBc2wVMvVkq59"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gvaPCn1DSuHHWWuSshmVvzoDt1adqWdEvbgVgG7EWMSHohQgt6tZdEXBeyLyaPWmcxNTjbvvsRVV31Zx6S8W9dA",
  "key1": "5vHGSkXWBCbxkusWyc4q4RWkNX4sEzGLHuHsDKqhxy1zBBvnJP7sHMWrwf1soTSRCe1LvauPSBR3VjzdaffEiZNR",
  "key2": "4nNsjzJKywFWGwCGYBEEmrV18vYrazYCiX5Z1zismhtueiKYLtjmzRBnh1iWLLPHvGhH4W2eWSVjFgubE9vXVFar",
  "key3": "y4RuBNB7X7oPo61iagPDf1nY9sjuPN2XB5FPx35xknWdaaBT6x6fryLtsc6AKNYrLhHmeNfribmN6zqXDAXjK9h",
  "key4": "5B1ttekBfbddbqNkQSPpTY5jXsELAPbuvR1VkiCwhBiuvp1fYpuRjanhH8RWeLBPiijuxQduCF6kLAo9PHWuP2g4",
  "key5": "4wv11DEauTxoQsSYvdY25XkwpNdRkE84VVjDEmBYU9eUp1MXg6msAdzLiHUkgC8Y2QALAPL4BSymtRyXpCFFv4on",
  "key6": "2sxjaGZmFtuWkxiQ58JGZA5g2sbPn4Pt79gBmghLsJ7Uyv1KSue6YjngfQMzTE2U5kMwhfTGns5pLRikoX1DvNGX",
  "key7": "4UkV8wbL8TNfo2sQ1WVUmMRw6b9XbCyPG3gyDbL7WUcUhoKYyhZEGJhdsoDefAcwdXuctqmq1LtLRz9Zd2sD4Adn",
  "key8": "62vfNuYq9WWBVzxsPLd2g5Q1VHnHKhPhpSBmHVGP6NYHrQoNyAEi9aHevRs86cfkTpD8y3MVi4QS96Bc8fx2zwZZ",
  "key9": "5wrzRUKVrzALZnDvG97S27NWkG5N4CKzRNECimBenmcr55REvx3K75c6mSWrcpmDGWRh6M46SKLqKzgNR27EwFg4",
  "key10": "ibADrwjVfWpEYLUSt2niXm8cwYtiPT1K3gVtnnaNzXKgmRTkdoDGAxTSvr1LyfbpMEHETBxjiDmXJsnUfGbnASt",
  "key11": "21Y18jqUUBh1NeiDVHvxCqKVHGE2NN1oagrFGxL5QnxddsstnKuboBTCaR1dxCtx8bDem5hrVkwxLpJh6gQMuSbN",
  "key12": "WuFEEFztTadps9i2F4ZP2DcJz1SLLiJBx9ZJ51JhbxqmVaezN4Xohzu1D31ipKq4UecSMXedtABxFuaBwQKcEeD",
  "key13": "95b2xM1ocAtDWyf8g7ze7kMYo3Y89sUsouwjcvbWiirBTGvm6f5JDribLDJeSbQ3bioUdtcxahcvQH1w4Vb9pbU",
  "key14": "5wGABiscSEa8HoQyXSsj33QUxmZofHFZjrEpUXYP4hzUN33VapTumq8c9VuNf819CeWTJVoVgXSKLLu1jxWb5TAh",
  "key15": "5kPbShYh9BXzVGGd8kAaZfS8Myat7Xs1Mj4buE4GUkqr7nUBFwWPaCcK5WZ1Fm8FfqQGPQwAWvmXLfr2PH951J2B",
  "key16": "5ykKmGAH73vUv7RasYABjXpiZ24AA45fC5wpub9U9dcgxA1xbniER8MAyEXijfx4koGDX8BBHFh184VqXwifg3q8",
  "key17": "5QKK5m2j7sLgAasnVGDX4MSvfuhXHz5YpuZE7vDizLhu6wHkk6AaSvBoGW6hPSZo4ZwisPHFdnx1rnb8apbtKQN9",
  "key18": "3mPJLpSs1t1GDMiaiNWx662K3v4wXcfxbXNGDHmAk7YJtWMZ8KywDZbdSSj1JFFCrCyt2s7mYRgG5vWUgYChXD5m",
  "key19": "29fcDBSXqpBUv2BVNuwgaT1nAq1D2E2stT4KhDCfncTT3Q9f6bnVYREbMWXukBRCjkpFsdY19PrMyaX327W3KwCf",
  "key20": "2GnqgVPRXnQn6DK8XrxDCsSb17eDLUtipM8dCo2bXnS8T8RsNpLZaq5qjaBy99E3tF9cBAPudwpZ6BCnCR9YM5cH",
  "key21": "wmKtuqUuTpBxb65e9drNFnmBq3pecNcpAapL5fcDYRPUC9y3NT8Wrk7ZeqdckaWJCARdJEVe4wv9xtBrgExr16V",
  "key22": "3rhBiz5FWQVNZmaD2pWJM7kXCPVkAMDjUEevggawTyhuRURf51QcLgL7EYCfgXdwkTzvy7kPXw8AWjkWEMp8roQ8",
  "key23": "4fvP4swhRWMRYRyrAEi8KaGwBFi7kvzNKjWzdv3mGaqfT91nZZcTrTsyBe6x8f1B5Z3NxwRJYxvvWY6ZGbYad6dY",
  "key24": "WgAQeguXvu19oqJK9SCp7c9iCXfB5NumdX8npLYhbToQ2pmq89ncd6jDaM7HbC8YtYUoxjDmr7U2sjTzHUGsMsK",
  "key25": "2TfZCHoiMxJXE2ZyJZgMRjbFZTPW3YSUW4GGmEPtDWJ56JR6f3GyKxRieYRrNVUwEp7YPweCiSkumbkK647BfqTt",
  "key26": "5SKa7oQkuNvGDhCF3Cvyp9Qh1WnyFCpn3sATe5bySegxqd8oVcCStj4NqFPGhuUoj444ueX535GxsaPmPSt9SkcE",
  "key27": "2Z1ke2oDfVWb1q1CtY3N1LVkFe2nrGcievEnz8dpFDBY7LwVLfUz448rhRo5mUuKKj13XPowLnQs9J46nxNhXewg",
  "key28": "YDBSgUQcQbmwuL6yEt291o6NyEbhLt6bGiGv8rBHa9aed86QaHJUBTXGGwH1FHKg58cNoVg2F4prVcNCANvMDhV",
  "key29": "4ucboXeyEQUWEjcgBSLHBRKPYZ9nLLLUAw26Ze2Mgv78Q8T4MmgjfRWYWiWpxTiVoPc9ePFstwB92zq38WHJ9oFo",
  "key30": "2eyng33ievkK3xbAvsQjsaUaaq2SQNYUvny3Xk8nCsZB9yK4dA6fVifKWBpYqUM6UQrs2UR4Y2W3m2idSNoCqrK4",
  "key31": "KHZ2iv564dyhEL4cEY3wSKWjmZ7e7MfMkmGsPpiPMgBX1EWt4f7mK39zmsPvRxmtxvytyTdmVinuJKYEEGXZNkZ",
  "key32": "3eQtu5kPJuWueJ7gfFnbxQ2PTJ9ZeoFMkEoUdSgfs89tYtJVWbq8skdHDAiFppPwtvi6LGGTMzHpi3HPr1u1Wm2f",
  "key33": "5SV9C78ukcrKnf9KJMXZxAWoTjCHEBGHBTfsWWyhgaYoK5qttyA7akngUd91DLcu8oTj4tAbimDXUunLmCM3aBAH",
  "key34": "2cvJbjNPwByMKAnPeoaXSWnjgiHoyqT8Y7xTwMeLwLzTxgNUVUVKjuSht9rmzPjkR35ozR75dDC52Yqo2a6yEU7B",
  "key35": "ptjwuXXDpZBeiungXsYt2x5TPd4QiroWaQ3WAt285KpjoJWi5bW22P5ntGrt68QjMu395D6A81PHj5LFZMavgbe",
  "key36": "21ERqgLvUF2ziWscVeeuHX9sxHjgWUn1XRFeaWxxyJvDai1JQdtzkS4k69T872u95e5QQsQn42KMsGyGMDQepqaF",
  "key37": "371A8Z7Q4jm4RQpHbuV1mAerEetLG9u3AdUPLsLF3hD3D1QMozVKUTWRCWhwMrFK1DFJLCRqZngtBpvj2uaQvv4m",
  "key38": "3AzTW5B6hWtZG2tBJXaFv9s7tyx2URSBsShYmkK2afQnp96rRo2JhYfcyT5hEZ2Npe6qnybD8GUU5pCB5gvhtjjm",
  "key39": "2FnWnfrq4t3rMX4mkAzFP7xEmSXkv9fcLaNvjgEk6hnZ3xdcLj8bqy4wHZTQcaFBCRyjaBwmcP2VaDgGBBcwzJEc",
  "key40": "3YeoFwdCULAH1D7jxNiK628vLDZDuQp2EfuiQh3xa5YDndUVFJ7n7jFxnA8LJAcY9679mZa3PaEuAE1ZnKBNbL1F",
  "key41": "4Eut9GnwVGxzXZXpaoyWyHocftaSs2UyKD1zkfxG9oWiAdQsSBFuJYztKghZ1sHRC7v7wCdqHmYbkGC1ySGLCkK8",
  "key42": "4xzCWtgmJ8ije4ZYHdJa5Na1xJYKt5YQSDDeJ7bDUNKb4x6eEvs1PCurkcTP51F8DQkiDcvsY4CBKDCgMTz12t97",
  "key43": "52Y8eG2HqfLXEzb7hikGTKg2f3fL1E9j5kBwQ4JXKnn9VaV22K1b1DnxmeFm6AC1aawpZTNqDJu5jRs4SSWQ8Ruf",
  "key44": "3TAuGzfra2qwa4Qr4aSsW4u3sz2LZXqbQs79z9RaWTqeJggLsnr87YE5pYFCtwAV6Apo6TyQ5K8zDbdAhaD2FAZJ",
  "key45": "5mA1jAGabWuw2NVxVTN1CrYcARu1r5tJxGe86ecAdRdHEeTwuT2GSenEpzyyYuw48416bJBVL2YxJSHcjgWXyMAZ",
  "key46": "5q4mmD28xrPijPaJzMUSCbsrCdaXgunq1YzqDiQj4rCUmeTkqYQF1AbCfmo6EdybwW8qw9DcbhotTUgG2ft2TEou",
  "key47": "5P2YE66h9MQJQ464XXPVACcuSs9kLcX4H9CNZ1Dj14f6RtBFXp4tKQDZBuDigNSG7YKXfHDx4AXXtwMJFi2mzDgc"
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
