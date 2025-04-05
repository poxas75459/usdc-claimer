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
    "6pSC63Kc8Hsx9wuMbnDmSp3uGcTNsrQPVEXUZNKVXETUUQVC7r5EE2AHfZLyXYuV2HRc1wL4mhVBJUXVA6z87RW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z36aiMXFBLc3nFJrRK68YjjJthpqnoiWsp81FwkdsCv7xJPJhRvuLMniZAxZDMSQzq3z2C3xMPTbjq4yhfdxFTk",
  "key1": "5GVrhGmZTKL5m8MycU3v8y9heg1bkD8mwK97L1dMPenj5xjAbwK6QT4rTDwX5y1FAHvWfooRS3udBBrobXzo6hM7",
  "key2": "f1LSo54W9q8Tid2qjPLQkTtT6ZYaktv7U4mWpA1hgU6GDEeZh6u7ey2UtGC4jAECqy5ArEUsNkEDFunjxpsmC3u",
  "key3": "5wXXoCS36mW9Yhyg6m5mZAMKvqMYEgbZnsMFeK3eqYG9WnwQZSjtwJS9nTTuji3fmwhb98UEgomvEMS2XsbyVH1n",
  "key4": "4GeFapDQEhczoPJWYHhzKmgDDxbUa9Qqr4x99G2PCrJhAQtz49w6skDdJKrEhcWkLfBrRRZhKpfGCa4s4oU21fnM",
  "key5": "npZbj36j3M9xyj9n2pQMqGTQroj3CJegEPC1PJNgtqbJEsu49MqHHEbwUj4Gn3j6dvDnMFLGtAh6FgCNcTXrEEx",
  "key6": "3Bwavvf3GFz6oJWmsrJDACVnGTi46DbWCdPy7dwXXEMq15LpVsVRezQEiXFiACU6r8FwdsnnBJ4KD1nqnuZNKYom",
  "key7": "3h92dSWRwJfXGrSAWNcttfpeydEto26PrT6mrfyEA79BC7yzcER9ovoMGxA2YyoxANQE2SwmcDvoWT4c2fsJDjz6",
  "key8": "2TBhcnGG6ydPPLbs6kJwFPE5sZ38xgcRvaQG59RwwTKawkYx5Xrq2gpVJmdiLLfUvpXCTXaZmCoprGduZr2s96g8",
  "key9": "5SQ6xWhxdU19MrKNLCDdg6WwZKHYyWpqH7bKaipcPyeBYUMRdUkuTdiit55NoN4bGDtVBdqnamhDjKDbmVGrbEvT",
  "key10": "4p9AQscDx1yTM7vjQXeSHCZdKkCyjBmCWUgZ86ecu3xg8J42XLTDPXqFCL26xkJJD5Hwg2Be8ncZmfdyd2Ffih8G",
  "key11": "3wSXDpuqfMHPSAMUnBAmkYEFjEri12nXNLm5K9uQ9CiSUAMwFF6a2JR3kw4WvAPPPANUTg3sv2cNKqs7bdcUkCqX",
  "key12": "5rEDSrJ5F75MVgQuw7qhxR4nx15eiWzfyhXoHxRxmB69idhF7h1uiYYLVBBfkfQRFWd3LncZSJUx1Nb9yYSUGQ3k",
  "key13": "E5iV1S1EN5jXVB29bNMy8G1aWwC8GcfA5UQfPx8uu5kTQ6pxMg4xyRzmdnY8o4s2kXAgCicKoGBjofGqfLjwPiS",
  "key14": "41qtqBeAHRRTmdFMkH6NMAQ3mF3MBK6VktELdww4CD36EQKMdbaSTPXFtTY5nvu17EDffCiFzkscHUQHrN1UfyHg",
  "key15": "2Sddfjj4Q1HgdsJ6ofN7uB5QRxgthQQuyykYtzpKSLVsNxVwbLq5iXJXrosDBjaKWHgupYxdRMzHeMMBah2Mw9MJ",
  "key16": "2p2VyePrjBfgAX92xHTfFBLfmxUiSmxt7qw4UwAsr1VRtF9etRt72CsE6EMLcnBf4K3UETBTEYc4GLfeW65igVsx",
  "key17": "5Fqu5nFSoK9CnEDoTHWsBX2inAw8aJarJ6JDmJYZbAjg7ZtC6DwqL3jgodM8JJkpt16o8idabNZ1YqHE38HQqPva",
  "key18": "2ujDZLhUinMqhP6Pztca9fZRXdx7JB97jE8pySUpkyuxXeh6md5sG7fGdAr5AFPbLgreqimkgbo9FdX61bkgog5e",
  "key19": "45kp9yXPL45nCcvHBjLkfN7z3Mhcit8j6FYGo55rHJSwuYbFzWaPcz1ja52PdHuRsEFKsXo4vC9cZxosUHREdiEb",
  "key20": "5hTZ8VC6CHLae1nhrPDuYRtm6ZxhvAwXghfCxEnZq7W1bUmMpacanJ16wG8QnN2SHtpMngtAqGoCegduvcfcSyxo",
  "key21": "2Jsju9sz3Ykm867jko32iZV4DqRnM47WEH81wrgVHMnmowSiPFv1z14rC2MXzCuLsZ8VXcD7ACzFLccJfHsLwhvB",
  "key22": "5kBunu6WD5noJTCW4YdgUUMtBFqrnAkcaDN8qMzfor1AYYjYZ3uts3rC7vAhp7brhyJ3q6sUux5Tid2WpGoXY1TG",
  "key23": "3d7VoKdmGJamCHCFXDLQJpYu16uD8H842EUNuLwsFArtdea6tECxLcGycrcah4kvpuCDA7suguHKrpp3iK6QekXq",
  "key24": "5RZhdY6pyfAysLCEq2N34Hg3MnA93zsQDiXr3nt9kTm1VRxcV6a6Lx88WDDpPiPbbtT4voHr8yx1M7kPe5Ytpkan",
  "key25": "2UzrEpLjurzZoEG62zaajCm8Jc98P5FD4axXnEtvCpCjFzZ7jhbtZsFMSmw5EyM2FSMf3tPWpV7mdG6cTwRMEM21",
  "key26": "3qhPmgTxrQhDBGHfZHzRwv2ETf24QWnFnEp5a92yxYxrXkkf9f1jgxbXthLqi5UiWt47VPqMihWfLbrqyfv7Z3Ym",
  "key27": "3vXfC2bCpVr5K6rmut2sbBGT2kt4FF3HorsooCMaaCQsZj7ppQLF6jpmy8LoP3vasmQjhmQHWAL1MN9nfPtZH5yD",
  "key28": "4PxDQUbKqpkWGzTmBwoaSXn11i7QFRzzqF7CuFu2ZvGiz1YJZBaDFDE6NSXAg6JPWhL3G8kmCgE7iSGAN3eiXEdo",
  "key29": "2tsCrSqw4suTqmfoKAGiK4KeuCDPBNc2qRMzcBvuqj8k4B8CwEAJaoynAf2eUUCpb4FsXFBxq7LG2uQmDw2h5T7E",
  "key30": "5adHfs3zJxaFGadJfB6mmSG9bAQS8r9zqni7KhmsFETEqNSurH45Nv2WukidhGYiErzes4e2Zg5n4MYLNyRCFzoU",
  "key31": "2mhMSccfPf9xwZVmkmyKkT2nN8wBvMRGqfu77LBTWSpFZFW9U6TUWqBrMNmJdRFWRrbfcFncX3JGHwfuhEEMgh3g",
  "key32": "3Ua9d8X6oT8cxvL6QjCmjVkUhD4PJLqkBSAsqs9whABd6H4yMRSjuVVvZr7NQ9yJZFX7xHA4koBRBiWphByKJ8qu",
  "key33": "yak1GWXxxaFSwN65Gx5u6YZvWJ83pACujsrewBwSH4Hu5R9uAF7mK2DYTySaHX5rz7AYJauUDnz1EEgUMvJYNbc",
  "key34": "59WvDdjRxVsTrt29DVJvAnLX8CK23JFAjoc3ys1PMit6YKJD7WprjaWfAQ63zeCThoGUEzaoQfaVEP1LbobeNzAC",
  "key35": "2CUPngAzFSJr27r4dcFdw7AofzHSY5yDMKN4mkMZNbRhbq57g1d39gqmGVBSSCxhVm8WCSAJ4ykTb55WGbK4WdsX",
  "key36": "4fovsHDgwmj8BY6wyWpxSmaN4DiAvemnVrXXGhQZcm4pHMEHwkvyeoQuEQWRSggPiWoKfrJo18QWgRPkrao9XPTP",
  "key37": "5BfDYTts7E9X38FcKoEUR7nqnHsiTA6XRSt51RcZcfyKBvij1WR4J4zqRd9inKc41yyBQvG34fscHJMxiHQP2xrA",
  "key38": "2t95iaGYASZwwC6URTK6i97k9rbneyJm4GRfSMkAKZefNVdYqYNCeCDzcy9dJ1EzY1p1mZtA3dS6wtsxaC3xRVo5",
  "key39": "2HHzmzcmfbqziERYHNgU1YCDSwAxU82R5oU2KJ5Jw1mCh1JPawmLFVBYZ2rMXoGudDu1WyKAeKpthMUGXkYyKio6",
  "key40": "2WaVaHj6rz118Tv6TKUVyTc1uAmHSouN3Y5FkrmXxSdSibzEfvdAkM6muS8BAyYT85tydj2ubwj8jEQSfTgjPVmr",
  "key41": "2qjgASUPmennW27DNrvy9aipBjKDxrccVEMi6LG4mF3LQPnc8QpkgKwsWgPi9sKMxeYp3aS8FhPx2PZVoi9CBCqZ",
  "key42": "4tQLjefxLkVhbD4Eot25PYnurAreF41hFi7W9M2pAGNfJamqJycNwoMStdYbtPNVNKTcARLLpeGjaPEKwi64tbqQ",
  "key43": "3TbkPdgx4P5nPtGT6cUSGBnKESQxNQZEbEmvnTttcZYJPHn8NveopXq2P63KtEdMJQ2bzK2r5uNfVHt47MZMj8ac",
  "key44": "5Q9GavxVZgJFaWv3yzkP9qmThNf4VE8uLJyHLWPXMRu1X9Abd1F3FUHWCntjYceNFcHPXbwjZUaQ5NMWAoBeuyC3",
  "key45": "2qseZL5akWCQzSbBxUJfxHM6UCN8K7WHax1FzuvAJuLK1GyRWBusZY8Pb5yw9GuHc1ytqsXCkjx146S1gjUWsFso",
  "key46": "5hArmzC3e2hidRRFXQDiFXCQeNrsW1UMH3uX8m6Q9cE3nhVwJUDy3GCxdfMVDSVbpvx5nxyYaDCcETpKqPHhiYYy",
  "key47": "G4BWZokjrxWokrHzfGyBDCwRFPtERYwzGQsmLFPVMHbm4XKZcfCEDtGM11y9kLdUta2sDaKjMWfDW2QX35ME9ye",
  "key48": "d3hCAhadZb6P7gF94JgATG6ye58MQ7PQp6gRSpwfnS2Dg3AsdAgZP4xH9WSBYp99uu4mp6nbPpEjqmGXXWWhB3V",
  "key49": "3dEsS2hJe8Stopmqd1X2hkDfuTNS5RD1vjvZSiBYpSWUmRnHgDHuXxTWVxaYSvrDqig7AL3w8BsMruyySJR1h5gH"
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
