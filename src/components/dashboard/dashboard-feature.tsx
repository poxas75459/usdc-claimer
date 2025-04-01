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
    "5VHCrDNMi5WRpYvs6LW5QTxbZ3TSroszH5bQTTxVnHY7E9yWWoMWxcib5SbxGPWY2o4os9BmvJHnZ77mvjpDuZvH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LqwWnaxHqtfjwLaXe7CAFkvwMKwskrR7cP1egQvm84irPP7x4HRNaXiAUU5ypdLJqTuf3g3XoY6TobaEykEVpAn",
  "key1": "3k61C89j4n6tNGXR1Lvqr1sXcFUFfhQRSUPg1Jb5tRbm4DZsGT62xtCzuTS9mBbgzGZwz9tRLdrM6HcJzAJkCBYR",
  "key2": "31kY6DuszETKuFJRQPTseGWBWwKNZwQBPzFWxhBFkK5eVH2h4bP5teR4c6o7TWymTMmudeuztgXUvfN5aypTi521",
  "key3": "5JMoTN4KorRhKNg4uk8fYXqystP92m15nKsCsopWciEWJug2nE2zb1mdxFQTh9CwH9T7kG6gwyD3ng7FCbfkRCEf",
  "key4": "5XA4pvyKADNnjnjtS8dbHwem2BP74RsWmYL9cz9FujyWDcN5SPGmKcfS6sXTHTJJJGt2ZiGmWJ8U14DPif9AQHcS",
  "key5": "96QyZexk9BeYGhQtHR3Yp88D3mHeMyYJbhD2fxzqtKosignxHMzTUaNkCTJTzecuPyhEmSGFH3Q8B9Tx1Nswfo1",
  "key6": "BhLWM3L1GXPe635XQ9eGhbtco7pSQnVTT7CL7UusoLqcnCQaou4rouD7FRApMraDCCTED1gcaThJdYHd8Qq154t",
  "key7": "3JneHDUwYekgc6jpvGpjrsbhqRAgCuq6ZWWNaE18i7d6mJvWYxh6VMU1DTSANNH5ZGjkfEfX1kVtdm4fwrBkPRM5",
  "key8": "t2trXuC7mygNNSoQyie7kNpN6s8svPPpG3RUFUiKPHD4ApZjvvKoJrNCZCG4PuAZiZ77PJUZiNNGcC56vDvZUo5",
  "key9": "5hcxeYyRK1CnfMHBUt667x38isJ6G9j7XTdS7z4C1docP5HHexGfTygP5rUPnjxGiqfEVR93LLC5J2qtHzguUbek",
  "key10": "JUQs4pZtiDBTKvNqs2cp7haibkyVZ9yW6oNVSHzz8MTSQjwh83ZwB9ngjJWbhhMTn83vWsYb5ourEJbCjB8Fmu8",
  "key11": "2njWdTkJifTT2NdSUaXrNGWuVmw5uN5ibuPVtJsgXFPMRHjgb9uTf5yLPTzBzHFAeEWPqoezJxPzaNdkFMf5joXV",
  "key12": "5ijiKBgdqfDXJCK73ofLkTTtfJHV6VQJb7WnmqhVDVuwgHKJJnjBiDvoybEGhvWVDgY53G1J3w1Vbnu7eXAGh5VS",
  "key13": "4iCCZAU7gxd7WQnDJxMXBYPs9QbLDTKRXnkDX3DUc4NhebzFRFawGNisTLtVk3pXF5uv7XrwuxL4ekB4v2DYGnfv",
  "key14": "42vjxU2zmqbH84QvfkPAdf5CdNUsEiTYh3g6vyeLYS8UNPHp7AH9dmvA4fvP2FGZuLKLmW8BRY4PjDKGQD8rBav8",
  "key15": "5t1Jjabpkgw2T7sGHg4HsXjqQ3jNy2AdfAR6ajq6iFphyR9FsgHoYjVFxekRMJ9mj5HgH4AcyeAsqiR9p3XXFNxk",
  "key16": "ZeUZbpxtyF7BFviVeeh8EiS7GzyTybwhvxdPKE3w8qonTvEgkVyzGxjjwQYEY5nnmqTFeS2dzkSfWGpnPuEL2NB",
  "key17": "2BYLWm68N2q3x6gsNKdw6wCpcHx7VhiEWGat9THrJw3iA4hWbRRsS18d2BtEjCUDhLhVt89BGo4XBin6WX6EobYT",
  "key18": "49q1ge3NMXqnfp339Puadkn673p1eJJg1G2JcJZXg3tous4eeJdN9iPBX6W6F5TTfdAo5V2zmDNQpSgXPLMCoodV",
  "key19": "5EJqFbMDR5TM9j5azvwdFkWDv8tHN8fKsKws4yUNGQJXPcc2EXZ8kwnjNkV9mTTGix7pv2nb7ZPJxFLEwz1ZpfmR",
  "key20": "2CqhTiECwgW9ooARUuJTC3ktaKa7Wf7FcSAtYhjvSfPApkXzkbpdWoEHU6c34rHiCRSgguKHGUkCqGZZX22FHNHd",
  "key21": "2t93pK5RPJS4Ng1TixaAVkbDYmWkVBZjFvwYXsLxYqHnK3vdcdimG7jZsWyA2n8bmMoPh5hURK8vSewV27Q6yqhk",
  "key22": "4wddgwt28LYCtG7ciHwS654w6CAH9675thdha3r3hiXgJT6oJqmAvpFmt7pqaZVdV6jpc8RctpYJFP5qnM22MuFJ",
  "key23": "394Eke25eK9Ff38zD2UHQrH6vdDEpbcMqVSVwh89YSZDPveTnk8bnQN8oKGzK5uEJfdPPr2bMs3xXp3LwLgoQinK",
  "key24": "238ycoxg5WNwpC5avSzcrGxzsw79Rtf7vvoLcAoXgRzvuB6p3neDyzVWyFnF8CMsL4nMHxRBAhcdXpgQToDi1sja",
  "key25": "5zTx7hHY1fuPJDXwCQsXySZnCU846Rf2mBe8HG18Xjb8xkW3JfAmCpMBSBsWyeCEaRmurG9kR1fE4EC4c1N5QZCt",
  "key26": "JAyy7fCbgFmBQrbALkAWCcdQpUkaQubZQYV2JVnemVr8SQao2XjfB9GMGeMf1XHnUme8q2wrNZfCDfMNxkfTDcC",
  "key27": "63w9h1dGtExEsD6FyVcFtArJEViY249yANRD9b6LrrQjeyHNJwCJWMD4YGkbV1Ls3zWGCssHUkJGx6HY3Jd3QSQY",
  "key28": "3yjaEofHKpbeWace6TaHjkUF5z3j8TcadKJN7vz58EEABbZn29MeUkM3GyJexvuQNADA62MaYZ9LDZPhn8LvkVaa",
  "key29": "2Csir6S2xjRkFkuFJct5zxzU9t8qrj913JT2KmRVCYu1MtsX7bwZ33nRJcSH1Vptpgpv9X5bhcgQgS8675zcqXJA",
  "key30": "5h4o36nRXamKtwn5w86KpsnZszCqxowLXmyamDik5NEoTDLCKuHc1rqTP4nZPv79NcL8b3RorKt4Pa97kGhaxfqD",
  "key31": "4UnFwSMG3hSprffNfZUHP3csT48FQ338uCrU9JaVnWWm2DZsUAtTtTzKrTYubiGq4TjUaqA23p534gvWnycEovis",
  "key32": "5i94ZxZTSBXqTadFm1A28hbi1NQ2zLTtRcMByAndg5Y28hcnakFS5WQU8f7gayBmaaxq8frkHst9rqBU3PPhsuBp",
  "key33": "3mMnxGhKiZzEJarbiBg1ueCG42aehhZGxJEoNrscLtCce2Z8VSE1Jxb1t2xGkZhBSnEZjvoCWZYzxwViGTPtqBdS",
  "key34": "4uNeEr5ekWXvtx8xyTtmJPXYmwdDVvekYm46kNSW5rqtE1Wga4tukW3Lr6BJQdf2uXkCRjzTZbWV6Um1HRCYq6Aq",
  "key35": "29YCK6eoKsaNt4ukYSvF8e3wJT5EGohUDgS31qwUacoHVqTMQwWfVDuTFdeYXGiLY5Vc7nAi9fJg445VfuKV4yyn",
  "key36": "2mURjfc9MvvtPE46N2csKFZjYSATcuS5ZB4Bnjz7b39urVnSfTJx1sVFTv5L7sgUp1eL5tT4ZHC8M3wfH6zUxrV8",
  "key37": "4KbApwWbrEAiAFZPDuektdQzxWLK9QG9y3Kr49EwfKZP9sciCcxAY6rXAzGTmXyXhiqduH528gvrB6nUaLSbixnf"
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
