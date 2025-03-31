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
    "2Kgu87DCRkvpcW3yEUEENdbTJ3YTPdxr35GHv4Lnt3uQcuCx6UVNyrWHpJ3VTJ1vULyurutraZuRQXc2ikjLbkJC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EJb3DEBp7MpaPuPBqwSSBthTDsc9T9iREYp6W3qkyU2b3CFn9KCLnWDCaAbRo1QikRx74bj6hdu34aNdXvmoTgG",
  "key1": "WKDG3dyygwkG2tA9QtcgzAV8omHwjDx3S8XsgvgEPSJSwx8hX6wCxcYEnRFrBAtLNETPdz7atpejDGQ2Khn5uCV",
  "key2": "2KBsRNWvKGKsvHQpT28TpqY5keFeTyz8huEQ2aKDvCJyvZQ2DCKDkPNKNyu7zSamMqTfYAzUqKSj89qJvLKpTrcf",
  "key3": "4b78ZwKoFJXnSXXSq3CtZAFrrhmaSPkhon7CbojzEoRe215PBFoymSw3K4sgAahP3DVtRPpHSP8bSN6mp2wtYB8d",
  "key4": "43j4iUXnPEjMFPSF9FDonSxgVfU8R94QEPyePFaVvbqaFMDjRhoQm9EgG7pFpQQxU4FYB8U24yCt5mo3WRiGcrKp",
  "key5": "3mv93QGtLweM31om2TDCXN4ih1dg4CngUqsXDiW9rmbNb23GEcDtqSisR5rNDmsYTAkpLxseFeabDEjZBC4y96XS",
  "key6": "4auG3AAqrVbGwLTgnxWBNY48yA5cjHcFcan9DYL1SYaUR816NTyaqzfc9Zmy4CoVkjZzxzKjETk2nNEwkGSssezr",
  "key7": "3aLS9C54ApbWjuXDeJCo6C761cHkNSZnFqVu3mrGaXBFWJdXa5JqVY4MVWaKhJNYsH36QVciJygw9SPgTvJ69ZkZ",
  "key8": "4o4bE9acPVTPMZ5P8ghnLnoRvmUpqWTgKtp6tmZdgv3Sa77wAtwoJ6hJrDyy4yXiyPjUsi5nyt3qzGhJoH8dbs6P",
  "key9": "64jwC2koaUeUPDfKeYR8U3CwAM1eW8WnnEcN91XWpsPVwbDCzTRUiSkJijJskVeD5TtfaK7GvTMd8j3DQbSbhpK5",
  "key10": "4kGxYFMs9N86EME8yaQVkwvK6MWWNP3RnbDsRJgUmBKnNkEjEgWybdKPooPEVis4hm6NMv3gD636cchRasi6uByM",
  "key11": "5KtvfShLrj3Dmjthvp21YjKCWH6ihB7A4ZPQWj2Xj6SnWyYiyPEoKPyF1qTjyjwkPRmfiKVN4u7c1KBn4du8heeV",
  "key12": "3mgAg7aKN3jvxQur1BLigYTGib7SLAu2TwHw2B1FUzrb7jyM1FQdVA2GoX2gn1YQcyJkRtEaHurbnN7ZEBoq4vYP",
  "key13": "EQ3oBEMh9ccoRpbp9v3TRKV7ZHarupf25ne4spUCg5NTG5xyC7bouS1JNtR5eJTVhBjKJZbz2LRMVH4DJUcd8BR",
  "key14": "5PfQQMtNSWNiULYJzVBdqMzTBcfyLX9eUcJa6H1xsi5mek7XcksWdvvQs7xq2d2cMXyz2XgDNTtBJWfVDCXCGZGt",
  "key15": "3Jf87GU5UqugaLjHKpR2hRyRyFrffmF2t9VP1F8UevxoWGVFiWKxf2mUb8nowqKNU8gs86GY3axJDAt6RSR2Ztxg",
  "key16": "DDi6VY9YHnS2n7GM6WeM2569o3r3DCf1rACZ6dgRoGsqymHco6a29ho4UrWGuGwC6BMz4KH5qhpcAmCx49sKspy",
  "key17": "96iWQgkYMW6RkKUWCLHGq4EYCmRz9VXKsw775UtQ98fwuXmovw51CgJqRGJEoW8pRESGDKjPMG2fMf3J1kxeTkG",
  "key18": "oCQHik5TyW6NWUmRMMpbvpjBbToew4crrb8n3dGQ2nkzMXY6uV3gSgHjhpnWKLKdY83KFcd3a4u8wP4Ep6WCJyi",
  "key19": "tAhD8ZFdgDsoq3rtSCaa5H1Xveat3PYHEDZFXcHK5Zp7HAWtpteYzrZ6HwpnF78V9ogpqGasbb58dv8eB19gxhW",
  "key20": "4FeHBGWDJJ3WvJshaWDhgQ6y43EU3eErh5AKDur1XJJJLpVYss9ma5Vo2scSgidqpCDqu13LEuS67rKqXFaqskDe",
  "key21": "x15fMhJFM44aKNHgAYn6gDgztwpnQa1kCec6gwsD38SJLrcQyJmKpWT9F5VgrPL1C7eSrbJvefkxd2JEyK5EK5i",
  "key22": "3SxotijFNExksXG9fjkN635HRPJejkDwcRBaLqaroaoCXWyLmM7zu1DKXTxSSdtXmFLEQQWCJLTQ4cdEVZPMHiqu",
  "key23": "D61bk1Fd1PHmDRDgb9Bs6TJCMmQqmZ5iaeL1D8bp4YHy3gL7UzBh9hdCy6emA8Yp2TwDiCfcNfyTYotX9wLgDJp",
  "key24": "35UQPaDyLtstn8YztxWxTbpJwoR53pQRnMK3GBmhtPfjneph3eo2kRZaq8ATSrcGJGmb3TG1tWr4YrYaWN2987A4",
  "key25": "3cSNtUXybCcdURJu81uDd8DafJXHGbFZEfHu1kg8nJvk1eCxp42ssN6sEmr1fumNNB9MhiKMoKWb6jEngDebLn4B",
  "key26": "4dvfvVSz896MFf6dv6NSjH95S6RDAurdC2N3LysGGW5qCGFvQsmGByYrYh4cAVoDuxhBTTe3u1vGfzFGpTgLueSW",
  "key27": "3xqHLMuN3GqWkTPfLYmNxFE9QQSqH9zCJA4LaxZTaBTDWwwXXe6R4C1gCUQteFfG3pq8tF9fN81QCbtfK4XsuJnW",
  "key28": "5bGgsx1XGSR1iNMQvP1bK8meQQeJZue6QM4ty4XdcYXqEeQRfWoRmT5zphxaTNL1tjMDmUVmkfVnRTjXJXnVLF8A",
  "key29": "57MDVBUdv1THEqZUA42FxkAtJcHqZPcn5qvAjFjXEUczz19RGNTnM34scTA53SfkLUbt4aKUXcJZ7HkQqEN2E2vp",
  "key30": "4vEm7LvrcyC55QUbatZeoYv1dXuGUgAKpsVzHBHs2rFdKojGduQfUMNRCenCRMvL9KomRmHFo6SJrw53UxU5zNXV",
  "key31": "3Q6akh9H13iZsrAfUerbijbuwsReePatMDnMdh6bLXbNLKwLM52ZEwDP8w4iWCotrzhqfJnPRATv7vyJTJr8PkeF",
  "key32": "WeEyhXMVKAZkSqdJWNBYF2YTQFEzr2P7gbNztt4c2RYxLMVi9EVimozaiso6a3X2XZz5onaVa9Wt53nMMBPQAZa",
  "key33": "3UGG5dZ1fj5GA9smCdrBcrDjNd6qcrgsv6ePhPGqFWzLqMzRV49SXGeSksFs8mckbG6oiHkCV9HcUejytCha1jZM",
  "key34": "43BsWhmh53517WakrHZQjDCGhti14YQgkn2LNnbAUVNu4v6junecSXf5i8M1SNQ2L2Xc5FC7uBj4uTmpp9BqMK45",
  "key35": "2LVMRbzEvaknLSgG9tr6YRcsZxk2g5QMcLusCmy2G3byDevwpS8htSahgFjEXfJ9QCXYGGatxvqKqUVfqgaf4pDC",
  "key36": "5vNAbqaf3pAm8HJxXb6V6e4WqrbnAjP138HxkW2Hh3vRv9C57byoTGKEcYDVQaiQoGviTaMzH2LwcNb7v4h3TEHD",
  "key37": "3ssbgrCkJFcyF7MnvQfpeBqi4J2Qpu9FHFMrTYtvjVYUDT5kHTs51TWmmto6d2qxz2KW4KKU3RW3VALpcRFX3prG",
  "key38": "5QsA2kgs5R295a8sWyaNRtmeJEBhDnffCL8nHMynJbP3yR3XaFbpNtVsyKS2tTUUK2LZ4cQ3g269Qn8FEcJEAikR",
  "key39": "1yAvEAXmZmqYUPcxt8XxdvRMT7z8MXq3hDyoaizpEsBExmxiiHMWwiPQ2yuKrtkWreWdMZKAUrqZDcpCbv4gv78",
  "key40": "49gWeWMeSN268Ns4CXAjiUW4Q5LJNzdUipuptd1AGihpUa3e7q7Rc3hoaNPWuWtgf9cQc5be2mRx7ZkjKjYVo8L6",
  "key41": "2cDGk4J1fhtnd8fz4KvSsWYwJJ1kJJ9vMHnq8xTjPWDE6LY9H6A7sia6UT9gtpG92LYP4f7bt3Jf2uAUn9c3FH9A",
  "key42": "2wvBGrLe3sRswHXWFfZ8TEUpXniYqnLzfhYXtA4uCZ5AoDDLext4gYeoGUESiGwatTAB5W1jNp3tmEiyuevBkyUA"
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
