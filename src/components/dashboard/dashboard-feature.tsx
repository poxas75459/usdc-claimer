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
    "5k3Frb1en23Lq22JzDSpX7KpBQCFKx1e1LHJ97Rm95HazHdRiUAqiHiMZ3y6yk6j99ddhQfkFKAj7pisGTD8X9cM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JB2vxmEWKGDVfybRihE1bmTWBeqMVNpMNKkBjbZVoUoF2myu6LqZEKUt4tLXTvDjBBbDcZ5D7STZ4FzYDcTnXLn",
  "key1": "2H6yG7a5HbscVSMAQJku6mQEzmbehZGRNUKpJXhtGTjAb1ZWsCtJnyKBYPXKLJX7UvN4jtMzHeHoi7ZmRuRA8D5Q",
  "key2": "4CcEhNUNXJWQ7NFHq7q3qTDtVnxcjAHrfMkExjVUxNfoWBQ3nSTR5DvQhZiavSGFFyRnePGQwfyN81CD3Lv5Uikz",
  "key3": "58dtcNgU7cQDcfRLBY9tAWHWMXxb8cp5Tfkbcr15z4WQkZaZrFiDGRYagy5AWHHXHqowQi2hcV4vQPpcweKXo8nA",
  "key4": "2tmsTUhG6a5VjQHpndyMPiMhRZsURpD9qXRBmAxDF7gNRFaxxA4tcRT34XmtAuRS1TSfYqURBMFN3JHRmJPt8ftK",
  "key5": "1rniA53qkrkUyN7BSrpmVYCuQeJp6eoaUa1fNvpw2sqmXwqGxoiB3t3ZJ3RKNtHfsrvosYZ84qk49BMNQknENm8",
  "key6": "4jhrMyoxMnuNwC4qYfa5BShoNov6m91sCujW9g2NYX17MXnoPzUSjEFy2tp9hEVEhx2skkt3W4TAo2WVZ9Mueuzv",
  "key7": "DWBx6yxDLB5nEAG61Zej2EAEEo9SLFGMSTCiRUoouJZvJQWQdiH7a3DEuo3KwN5UWMPEDMguqXFGj88MPFfz96o",
  "key8": "YwhCgQoxhMoVJoQSBZnDUStvZ79nYtLHEyH9M5mfUzi7B7SWBM917vYE4CTwsNCHbMrbE2gQVJcHpFPzSuLPyX2",
  "key9": "3gtHpb4jvhwZPW67THydmwz3KEaPWmwZj4jYSNQquqGx4HjAMD2TMbssPcwTu7zyQwJcWMPYop3u7XwF7T7qsidB",
  "key10": "U2G5yJbL5cQJ2H7k2RaSTCKNmbGxYjPUC77x95vEsGrvxNVB5AQRcpd7BVbCwoQK4zqFbgS2tJ3L4588zM7i1Yz",
  "key11": "4E4m2LtE5PhbA8WNHPwA9AMZ9PUmjcmbY8gCHpyVqFE98c4DcJqHDnybuEMiT1GdHBJAQ9hQXNq6n6gUdFrCq4kb",
  "key12": "4Ev9qPUN6M33Wmu9JgoMzqs7DgMaQgrN57tLNJ48cbMqqiS59KijV1ggCGYQnEzficuqSnjAXdvfuwmhLtr5o9tv",
  "key13": "4m8Afn8cXyDLmrwEjWRarzcTZr4FkmPXVF38SEtMjiZSTm5LEiCKewGmxGSdvHrHYxwBy8vCSiFKBuGytw5czWDc",
  "key14": "2QXHu3mZXgRDDnxyVewJRbur7m8QpRJkRgfmXyB2KGp7qdZa6E9PFSnoroAQebBa4ymY3LJ79rEaQxy1NGyEEshi",
  "key15": "4wBadhbHb5NyxYayc1yQ7sN5nKB5Wtkim97iVT5eaBupiridJCvQTa1jTvBB1hzNSYW2ywtYhHrsCv6jv7wn75n5",
  "key16": "2uzp9hKrae6TgRLnsUkQm1Eco7wBFzEuUvtq1TwmS5DMtbhLEeuFmYZdMGyByPEHaVhGruppbAXRcyK3AFY7UTkw",
  "key17": "3YEbhB6iTiqqidtshqb1mi3B9eUSwo8oknk6AFRUDU7yioHARMth1B2gqKN356Yxn7KUF9qvCmaBpmYbfZcDK6wp",
  "key18": "3NYpPRZK8jEAVPqwesQMUDVRybCoGEkQQr3XoVAeBorbXYMaJD8zetvSKVAdMEyknDfWZAbCcMe8RPWCTCFjpqj5",
  "key19": "2QmxhetJx2c5ACAnmpfTJwzJx5Y5mbq3Y11pvATujZMHkaBXQZ7aWknMYLuuSY93moJfwCFLF3Y1ozeCYgZgau8e",
  "key20": "8ddPNnjgV9yJBpxpTuTHwTHDpqH1eEFr82JBBTMQvha2jHHFmhW8iLxRsBGXowRY13yNVpbrSsVDooHsSHn6pmW",
  "key21": "wkNK2N1kWRfxTje7B6X39J6PbEPYN8mLAUyHgJxMFmCeM3paM9jRauesvHBwpweWy4UiW6U3N4Bim9actHYYMEm",
  "key22": "Ctenn6jRs3ENMKfRwDNrpwbHLofCnVf8WD3zJkcm8XSFpmHhFp5qTNdXehpLUjnK49Z4jDGxU7WgnCUgNjhP52b",
  "key23": "3RkRKiEFLtyHru4ZzmMruWztmB1yMmX8sj3SyaxqjqAcHcJHdZKbBCD1UM7oSzdygEY1PU7aPTN9fmhHakUqB4E4",
  "key24": "3Pdnn49rVXy5r1Te8qABxykSwr4PVHgFBNUKY2Uz7CNLfnmahFw6UHQaWJVuYkcfFPNTzwsyRRLSAqh9KWbkqsj8",
  "key25": "4Aq3siYPPfx7RoH6gBiUmrFfrugtp2KsLmqtmX58gymDZRcVwRz4ofuKuvsHUKQztvHk4Nz5ARrYTjMrV8YF5D29",
  "key26": "2qW6G7U6KstVi2mPoBYUZJxSofjQBovgVrjoQ5WNbkTj1i5N7inHFJTTLeuWraPb89ppdtooEpsSVikKpD1gMmeP",
  "key27": "sBJY5wPNuooxYj2585btBa2ZMUFMTjgXnWiDLXicR5MiFowSJe7Q61gVbisxQHVxDqGBbU5tSJTHhQTESmVPGhF",
  "key28": "J9czTDp9JLreCB5ZqQ9VP4cFaNFJJCADa4NqwfDnXmiLBSm6QmUrdAjfKuHh6ggBPB1BLBiYxWU18DqmsU9EVEi",
  "key29": "44NNNLQTmAaP2FmBS5joeQ9Zwa5z9frhrRxAWuYoQM6BPqoBb7fuGmCV3LYnN2Z9rQDnb2TxGxoFGaSoXoxhhuYL",
  "key30": "2GM7TXiG5sPpVyBBpqwJkYFoJDZDvm2nRRRERr8FmZv3tem2hJBPFqGd4bFJKBrAwrnxm4pnQEfsNx8BvJAhWUav",
  "key31": "51jwDz3MxMja4irE8kawzrjeo7Zgk6tjveirCnZQxRhaVGFRGpxtxWJ2VPecsBRXmJ9NsU3sMxNzm32fdh62aMcK",
  "key32": "7gc4A8SakpNFsSKSksir9VTsRBuTzsxkkt1YMRrGUfpZVianBz9fmJg8RxX8F193gvtfBPtVrjPbs6sSLGyXoJw",
  "key33": "3sTq7WW9Q29LfkNGLwvgFQtpjt8BMFbnkmV56D4RGoRe4ejAu74dZNybpBK81rNKbMn2mVy4zjvEaoEPDECZdTTP",
  "key34": "33QFjiooiK4e3a1ddipW9byoYJLZ6fWkzyr5BmMGveCkVQdb8MkBGCX7keKeH4fcth8m4XsuwUhoxt48w7pSJ1Da",
  "key35": "5dRV6pF6xFebSGWEH3KLxqAFymoR1pkXA25jgtTWE6FM2niBzN7r6Wd1Wh4aSkJfvPZLDeoiUNqd9ki4F4Ngzuko",
  "key36": "321VftY2ZhCzQSbUd1MpNfWXFbkikukjhXshGffnGuSjnsXvgb1EX9Ejs6oo6DZsiTbNyxVT55F9nShUrQsDEEzZ",
  "key37": "3mmcJDXwfbALmyf1t5o5MfYcR7rqYi8w2cL1y8f1JeE3d4KnUJpWu45uMYM2tvYGHKQ4Z4rSFrL9ZGvd32Qcp9ZM",
  "key38": "5K1ijV1d6E7nBH6ZanSLnFQEckxajh1qxHUrJeSHxrmGSA6JHHvsaA46WN6dbjQt9hnVenXTifCHyc1J5mFd4UnV",
  "key39": "iRifYVy4fYtmfPcnBzMSariAsHB71qogSkWftjisx2u7EtfC4jhgWe2udXuiJ9VeTbcwKugKxyq3iTgiAvmBMcc",
  "key40": "DG6bPeBiiX9FVNvajEbG9JF6v3gtKyVvzE7wpoYA5UR7xJsu6gnr5JexuQb5ZrZVqRN3Mbkr8NrQng5zVYk7PPv",
  "key41": "oQZ91no8t7zPasxuxx2DJgVRq1ArPu7gow1x3rQu2F3KLcE3i1rWZJAy84XstRsQox2B7m4nx3rgZS4QwV4GzB2",
  "key42": "3gMRunPsLRoR3TJswNv7nSDZ39SzmtkEMbeB9PQwweamzwp9uMncM989MB8qznL8Ln1oYESAXmoS5z9FckDua3F2",
  "key43": "31Gp4kYjZ5bPJTLG2CeGEvmTLF9vPmHLgaFJKYpsxfEjE7JeVa62ao1dJ6dvEADZJYgpjuEfp2eubFcp3rp947Uw",
  "key44": "5EMYESk1F2zfwqNfALHWbJfLzuscXMBVqLVCXcosjGonCpTUg2cU4Rp2vqT2cVa5U3Y3GSKiFq8P9PiXbZR9a4Kc",
  "key45": "4pFzKkFLYwKQUGkwKutv8NSUrWgRsz88iCSfMazvUC5vs1WUHZtjgkmWHGTymFbGS3T67bcaAzmpE6XcpmNxtGBd",
  "key46": "5yeoPUvXXSoq2k2VP22ZyVx1aXzGC5aQpq6JRUPLXG3dR3SHZHJcKVco1QPRbi1XJnMdGdrE9wWbHu5Lhjmb9dNK"
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
