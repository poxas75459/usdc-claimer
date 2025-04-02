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
    "4rPmrJf9jgjueR7iW8GtWTRtVNyXWZq7tQ9TXmCxHashaFxS39VEgjUxWtgrBRFzbs55q8JnwnY7deBgLEjGqrgd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vzkH82F4cv3tYGX1PhQ7jbLKWgG9FuaijHWEiLQggUEqM3ebXZpbGzXorzEq4g9w3JfnCgsGn9EZeaaQ48DYxKP",
  "key1": "24JtZH2Rsk6GaoZipHSQ6auV6WzzWkNUVDWgaozAbM8spxVDTwYScpBe7v8k8QfSbbhTjaWuMNDsF6tHb96v1PPu",
  "key2": "5cym8W6CSHnLnJ8bDGrpvHHf1dvH1hKHKkG88BhrBjStFDb5jLGtcshxf4XNELDTb65mWYgHYwD778cRNEFUjPLf",
  "key3": "4FL3TkzsdniwkkPHoYX4hGwsVDDnWhqKUmRVJshKsmTYxXZwg5jW2fxY5DvvPPNtMKhZCs6KTb5kpBbuSbhiGy9h",
  "key4": "3EgEmzkasE86R3BCcHyNyCRsFLsz3a9uJBcDua2aunH1H3wKfw2CvbEiSwESrWq2sXhmDxnxDcEtmDhSEkEiWWPb",
  "key5": "3PcDkDG5z6q91n8tGVoUBwAHeW1TbrV9M5uz9bFEehj31twe8iurnTEVRFBKbBb58hkcaPFgJ2BhvcH2nxXzorDd",
  "key6": "5Ah4EPTWZ2KUM4J8dGrfsdMBvM5hECCAc9sGybYwMyGV97RBhqDFdAzLn5BkwMfEbAwRXTAminKgTaSskTRciGgM",
  "key7": "5xgpZvq3UT9NCLRrYzeNbe4vYYTaWtFewf8ei5QetGXkymgM6SLS92tdSGaYMJ1JjNbi1HbAShs8VeARJ3vb5fsg",
  "key8": "5d5LZL4aJ1HNVMLDVJcj3Z5eNude91uQuxhrXqP2mbwivGUKyLt7BfiBvFhqnZWjf3WkGT8jWA5dn4qyn6ykgGKp",
  "key9": "5SheqaMbmrvh3GL1rgGLuRSjngYvWWqSLkZ4rteryN4k2EVx4fqqxBjCkAgkC2yZh3BB49pvsiHeJnhoYBUWFbBX",
  "key10": "5GiSLKK9AVfMAicFa868nzQbo7Rmd4SoRLjBZvEBBP94gvgUhstHiZSRx3vn5VgRaBLk9TF1WiK4b1h9MpuV2nRf",
  "key11": "Bw5gABiKQci2UZ7gmspocs9qTK6LdhrqbBt16pNM8nxzbRbFE17FyFzqSdS6YhtvWJbyZ9bQoMcvfNmmLCsmAC4",
  "key12": "3aPsTnDZsLn34TztNZtAtrqMtvXs73eCLmDrmQ56Wu9SsTrguYuUkuyBAkpZBDW3LRGYRzgZbH6NjoudWNowhNUc",
  "key13": "SKWW8AmW5AThFZYYMex9EFQvC3Y1s89537moamCHnHJANvfZP9Gi8F4SyjLg7GxaJcqqf5VH8FsqeEzDpKhD8a6",
  "key14": "4WbV9AMYqYdvHv3X3i1Ko3k68E9mVxVYJynyaMZd1uqnDr3NVBBMVHXykjWyb3e4CdLvPvGHncEZaPA6gtzQ5Eu3",
  "key15": "2V6sFXfuKFewvvGrtG6pLetKtVPSzgB9rVLJHiDyuuym8aJXN9FAWcYXHxBwtkKvmdzmeBvmtQZQoxaobLFZMtJ5",
  "key16": "4Dr24sqPhhuWPEkMVnH7XPyuwjZAttKodpVA4eySdD2a2nFm1g8Bnu3fFQTgRJ1UteiCxAKBTF5FszZpXNV9QzAo",
  "key17": "3ry7QSE3px21BDyv93RMUNVaYZagLxAqZ2jLTucrEDqVRzUp2aepx5HjZ1V4FzXB13JgkHjfdC45Gt1mZMMXSkHb",
  "key18": "4hm32PDbJU6CUqiBtGLibf5K5VY5UMhfqN8K5QbvWpFv195DNj52pKBBq4j88sTcEZwre1LWsLe3Dzp2s9YSGAEu",
  "key19": "4Xgr7ou5RLWATBGd5zEHenq9FaZzbzeYpUU5mGPD3C3pzifUd23tNWUQDhLETnbxtAjH4TW55AAjWuuc7Y4FXDxB",
  "key20": "4dZWEkop5i2a7w26xD3VDQbCRW8VSBjyoQAXnWWmSDrSdZpZajVYCzgZGc2yU3ZUZK9718gPQ8dY365pGJSHraRc",
  "key21": "3MCdG5VuuWZ24qJ1rv7CRouW1iQmbv1kgTzqfrzwEYkcBq32LFdTBSoPXPfkzPzv6caKS4QmCCKTeFVa1353Hwf2",
  "key22": "3YK8PqHFHPkfacSoTGy2TUP4UmSMjRddZWvRgDQUqcYU6TJ2f9dpLNDfpdaGDeAcdGaC6owggmTqitNuRgsyug6B",
  "key23": "62gP81zKNkmZLoztEfQk43dXgdfP8NJKxvSftkMA9HV3sn6mB99G6EkAxmCM2jBmEUzAfyENFqMc6Egotdsb5oga",
  "key24": "4rJPWQk2156RkCpkguKY95n2bNPftHdQNaD4Me1UTJYNkEWrWrdp6x9USaGdVfrFfNYgEY7qeeb88ujqCzUZxybt",
  "key25": "3ckWFocMs8KxGXqkDnKMREHUwYiqTV4XAcUqePn97rR4mXEfpDeeoZedxGW34uBLgE8jQerUB2ELi6MmhuB6J21Q",
  "key26": "5SQHH2dLN4ZYpwJzu36Du5SpxDmxeehMV7Vpyer4jzMaodhXGN3itU5Tz4ErHr2EYkV8Sd7df7MnRWuysLw6M1Xr",
  "key27": "4937g92QNTmUF8SeGFD2u6fu5r3AHModEtiYiDU1PUmLJMesV1zb3Ez5MD23uMFWDQyFgdZoDHCfgwTfVG2WFEv3",
  "key28": "MfAhRqxtAoRASRBnQiBLMFpA2mTqSCScKURNjwaUazDSd6Lf7zvP39fxXhF6nSADP5NXQ66NSgvqHvyfS31zx5h",
  "key29": "2988bXkNuhr1Lw9dMFpGpVReJNN139VBAJAuGLG9xFB7ABXWVmpi2KsyZru3QiUWw3HvYbmEZHf5yAtMatuUBqoU",
  "key30": "B72bnDBmfCfykyif4iPgNhWc55CFkbAYuN1NtJiFV4UXYbdPP6p8tS9piM2TgsgsVsRAbQcDVwiWSQwav7A5zjP",
  "key31": "4WUkLzWb4eVWLsM9gsySFW8sxTwJCmRgPMhDCiN21aP8C75549FBv49RLeth3xG53o5ojGanDbp2d2jyKyYNSbuj",
  "key32": "4hUXFKG3SEzydLQAZMJTL2cEAQ5KqPLVDA9gEezZ4U9oMeQUZbK6n2SVZgeTZDS6asCa4QFCpEUPEgdQBhEPeyNS",
  "key33": "4jGWqrjuqLagQZ8Tj6CyUeyWerjyqFTf5AdUUvJuC2AP844DRBEAe2BmU7BbsLdygmUXcM5WBLBQFNqDBQGQhag4",
  "key34": "3Fdg57w1EkFzaDCJxqXCNnSWsrYhcpMNwX898gcsGEQU8mKmAyWjdjjZsRrGZoj7Had6xNP1K3cNgRay66oMUav7",
  "key35": "3GS1xUCmnQCVfXGqxb8Jy7wXhavJnRnrvzbwro1j7gwry1ULF3v76z2L4byyihX1tXNzgw9qCVprYuY8MYimYA9k",
  "key36": "22x8LL4KszZTzV1VsQiUDu4gDTHtBEMMTNyXERX56HFXEvSEMPbcnuAFjVNSB3pY2WGWyr9HeHY9saZUPrnRdyXp",
  "key37": "3GkGspMwm68u1dxKc3CfgZXst8CDxZ5z8SbeEbRv5cguyWPWrKgfi3XTj53QPAvwCzmZzq5A6yacgZbxRC8HecvV",
  "key38": "4CABghrudHjz873EfixfNaynESuZU59mLfwnxm1wDSeoN78DWG6HLxBLEvsi9qERC3kAHmzKTvk3EJbjg7S8dfUp",
  "key39": "4yktSzcCVvXm2fPStZm7EbD21xeg7K7GyZqSbkBCarPZbC98oSvCrA5vZxKyvKaZ4YpJzyjtpq3NYyAtWzaNEQX6",
  "key40": "5tY5muXQE7ydQ91Q8nmikx255rtnAXF48k6UWwfy5Mid5xninmf85HBNnn8RtBHJjpBYzKt18e6w9D18dSmh3mx8",
  "key41": "2rbgweUGVWD51NMrKRjjcjeMEWeJhg2931NasPvX8YKbhNQAbzud59Jd4TPvQVsExqEFitca4ec5inXctQnTvHHQ",
  "key42": "2arTDBmuKiz5fsnf18CNML3hvKEQXdoPXQyUBHv5tpWgVUV2WYYoXBQ8eitChtm7WXmpEvMEAu9z4tQUE5fyaYMF",
  "key43": "JT85Pxk18F67yg1rMZKJzQvtENfrHP8sgKKFCnoyvS8N3E5waHM4qPHy5srZnX4rFVphm52BoUMoztDdHh56y9M"
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
