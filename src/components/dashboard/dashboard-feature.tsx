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
    "Z5yCsqAfBK6nDDRzAQPggP2vJvD9xdnm3rAX9a9Zb91BZbLoiitFYTL46BiNn8jfsNaFsxcwesoANwqjdUwZTL4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55tnoekweRVkk3yfM1FXTKoXF1beAsiFSSTCJSBvGxB3s3iAuLSPr4X2ESR7p7gFov6dtGbsefwMsx7LMzVecWoV",
  "key1": "5oPfb6XdSvmx5ZMY4HT92CxBSCuLNCG9AZ6jiQufLhEiKpTeC7h4GpTSmviTdWTBkA6TPJBLyxCT1Yk584dqFveZ",
  "key2": "3imdcTERxbAJZsHQpUe7Ukp7i8soGzu7fqNMG7Rf4zusZSJPJ7HcESSdJUPZPEs2eL1KPTzwq1DWWAdWFQ4A54ao",
  "key3": "4g5Wf4JvKoDp3NuuMLQhUgfgULLjnXyeruYhqeaDPpMS4nLzBDo9ceqGeRNzR3dxmo9QVXU6N9n34bGgkEweo8AF",
  "key4": "21dXDbe7W798ZvnTt56HYSkg5Rreyrze9R635fPFc29ANWDG7Foa8xoaqz8cdxz8UDPPYL446u85r7NNY9ekS95h",
  "key5": "45B4EKJLqqJ3TBypsCegUoZMbRUB74zhvxWxyRA2Fpt9GJ76WVyLJ5KpeYHbxZ1Wt6LfR1RP58bJvj9L8zGxrS1J",
  "key6": "5PtSeKDtQTk5Z4N8i7NhjAayPUcHSr2pvWZSnMqB3yJ41YQ8FfueCr4dWJ3ovEP4F1K7zR7TY19hsSqfyaaR3JJj",
  "key7": "5rNTJL9gdrFHVdLUexKaZQR7HCDer8qXQhE9QZaBweP35hQDagS5Z2amhrK6e7KnNwo6DXN8kuNKvjN1mfvfk2Gw",
  "key8": "3yYuxLcqyv7eKsTzRZzArFU3cNKTScqvKtAz7w9A3n5YBmBodx1pgJpkVQ2Hk1tUtXZZyEkhPYC9NTyD9tt94wd5",
  "key9": "4UMWHN7Jje9wDs7otmoJVTLydSQsGtmCpKLPxESWpjZ9A8bt4R49jFLXLoEiP7KiQUhkXTY3s4WN9kxMDfTQQCGS",
  "key10": "B2vqM9qo1r3oFVuquHBHtGGMXuQoHuwz2S8e51Qn7vyC8JKmq7uxcBcv8nHmFipvyz8UCRVA8ffvcK862Cza7bB",
  "key11": "fZxVBGib5gcirtEKixezx9m2kbWs1w2uifkVmfbjurh4YVxj6uRbCra23h37vAqncX4xrzxdznSNmfHB3qmMrEb",
  "key12": "6cnCtXG1gLs9ed3gDXH6o3jjFat3sUEr24yPa9a8XPgNNqWmbrCLv1XRPNCpXDrEvUUCENKuAJSA5USZNE3MYjn",
  "key13": "RG9QkCsivZLAfxkpnWzUrJ8Vom5xoePYWoa6FNhqWUTJ2ufwHVehKMfGz3Sp6orQz1n7mZP7dFVrPDG4Xt1BqXW",
  "key14": "VKe3xqbabkCHsvPn8sfPZyewvhi2t82LHCEKr223qWsKkEH4u32DugeYv5pQoKBdhxNwcHtHdsYejmWS1yg2ama",
  "key15": "kJaiyF3DaZgTNdR4qXBBxWHsRvZrtgTQhqnJfatHVXcbiWr26LYyMrpAW2CsF7mVE8kBx8SyYuaQ5LRezGVVBvz",
  "key16": "3GPqXNPrHggmdrcy6L2MV53yrugXRgRrGpe8bqJkzgf575H4RCPgS1jVmka2wg1ts26vqi9HXD6cYRh1nLCWb3kp",
  "key17": "5M4ecLffewF5q67RSE2cFWrHPoSKindjdH2dEBNA1EpeTV3a3ReL6KWr1BH5Yn4gvTmGeJ3sANjBP6n45QZRGryR",
  "key18": "nrAfpKK6s5HjChddRR9nJfa93tT9H3g5f14nH2P18wTAbAFShz9kLLRht153EeLf1EyKpzDZruZbLdaGVHbi4xg",
  "key19": "4ZxwG9D6tCEj6JBuDBwUniunumyKfu3U4WaMs55oQBeRER2AnWBrZs9QuPpEjCUvsaontdW384fLcEAr265LaCvi",
  "key20": "9m9C6BXAT9ZdAjeQu8FcwR5c3ReNHzKULWpmxCUun5hMRqWCmyXSvjwaMkQg5WBtEn9b8dDXmMVZC5t8yGgmwQk",
  "key21": "24ZTh7wpF3fYgAdVvPZMrJq1vfe33qSRcvbvCtHzeNz9FtRK1scsNtrcvVKVpunCHiTcrhtgueN1uoKfR61oZX9g",
  "key22": "2nLcP2Lw7pEeaZCSn5nYmsNc4Jf9gjoHmogF6YZRjaafp7TsGvxMo7vwjK2Ro6zYGz911QejcddYedSz265TGtqU",
  "key23": "Eqp8AjKah4pzbKeqDgDYgm1KrWEwfZTwfYSEtQgNAjSPpfjMPUq1HFtQLH5prCMdaTJUm8LpJPHacJBeGsst7W6",
  "key24": "gppETUvX1gobGYqnTTfBsCMX5xup7KQsiz6kvdsyWoW86aRRhTcmo32m57hq9NpmuXFVx6ygmz4QtHZESaoQ7ad",
  "key25": "5pK6Vb34sjmvqaKHdHjY48wibp59HuQtLYCgmSDyrh6RcAZFeDu43RS6rYcfW2qphFUwrnp8NiSAWdooZMmX8uTZ",
  "key26": "2QQy3nLdrRpf7U4GBQ553fLkVuvLje5dLj7hKQDgygMCQyw5hfyiocEzCB5FRPaF867ZzTZXqPK5o1qcMxdcjZDT",
  "key27": "3ex6b1cj9Qv6TQLsRSDBJ5TT5VW8ATdFiAeBcL2eo9zPh1jM7m7HNijG97dk7gVLRxMUm1oRQM3EgccnHGKh9ZW6",
  "key28": "46LAMB2ZJgGP1iS2vHGZDNX3uNtfpVxWtxMpFr6RKrJ5tRyyDs8vs2gng5B5EaeciXobCTDGBgjtAjrjwS7SBNGT",
  "key29": "Zh3nTnA3k8XgQFcftGvoruXkc2CDZeqrWxteLi1zycWcXrNi9gqkaMuf7cGg2SUDbEtGSdWigfFJJDyhez46ksD",
  "key30": "SuKgULxvq3KPbEjsH4cEHVG8gGQaWWDwKdSgEiJD3EUQVtJqBUNCFb49kWCpa3Nc1aSC2Y3w5ccSm1ZFWaqTNna",
  "key31": "2xNTNc1wMhTVvsKyQips4kD4RzidHbhSgi3AQeyvFoFqdfpRrd3Fj3W5SCbMokuuYrhkqzPCQ1yNkg5jytyayS8o",
  "key32": "43WeMBxdQo2QvXGwVtF5RqbVcJ1X8CMHaTHGAXRofKpM88Z4HcyyCMBhC52SaFsa6B4KBdRXBThehujQYBczdeYr",
  "key33": "23cP5peiFMAc4o2VmnzpfHHdCDs18CPj6AGok7Xe4vpfPEzmEDeLHzU5t2Wz535EHB6e69UCjCDtaHxHMpHS9Dfi",
  "key34": "5q7i792Upv3eSGCKAm4Jnk4biAa7eRibRrZkQWqAqzjNdut3CtEL5QfgewdJVxaxsTwsepKbYL3SNkfpd273af9A",
  "key35": "2NLFEWsrARisfX5S8u5UFxgEDMCL7moWKostJXASudjSfFKuojyEpKp6EXgWBLxexhLW98FvV8kUUCPn121ZfaTG",
  "key36": "5MvfDsgNMXUhe5ncKdXG8V1P1sRmdY726QTe4WfPpmimqQaRhH1Ps41sbdjxyRwtoPpCD22pPvzNfYKBhgGawQ94",
  "key37": "GB9WEEqayH6sPtokd9Y9GXRxpHVaL5KDhDBxg8zdrCoY2iZcte99Yb8FoU1ajeUh32SpJ8YRbd2HZySEbH5ejPM",
  "key38": "2JnezP1wkzctaq5km2uCGQgTNoVC9qNTbVSzmcZ2TN7hZrGAQn4QdaHVSpg66672GaZ7tUSws9T5oNVZas4zii6V",
  "key39": "49kgxVC1Q2NvmvQrziF6k4vykovayLXWu9dkJhx7fXauxX5n58eu5ptSUxHzKdsAS5E2kyYa821P4xJTgXAAn9KU"
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
