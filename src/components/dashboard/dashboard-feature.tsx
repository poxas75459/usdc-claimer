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
    "39aZCpAZR5k4Jjg7rbPor9d5Vdak7XKZrhqH6kw75T73C8hArj73X72bgjWCPrYadP6qtq3rZSYh28R3L6LHERBh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QaqNUv4DdgXJdyR6iayDgyXg1Wz8DsWhoo6TAQEYBfextpX9cquDQNUxzqEzVudMCfNi899JAPwfzYfPUiDn8MC",
  "key1": "4RJZH2yUhAbnNv2qpzZrUfrvHmS3r8UfXegSARcFrovsVvZdutZTseS5mDk9A44fy3mtyDGh9kFQJ9erKq61oicg",
  "key2": "AwcmoSohZZc7r6i7xpewYX7EpoeepHxDiWJmFqyLU5aQ5VryBf2QoTcshA68Bie7cdVgAzYi3gw7MJ1Y3Yaar6U",
  "key3": "XKomYXDgnNAm2QH85w6rEa55E4u2YWTu2FVu1gGnH2BLt9Hmv2GA1hMHobmjcAbMgEH9tuWK5qJCDKU9zgCSzDX",
  "key4": "2xD6EaxRqtQPm9reJMqhp7VKdeJHH2KEPJsn2vi8ip2HhEuNuV1M8vSgQYT3JnfCVSThjUph4hmYRdsbYA8oqMnd",
  "key5": "4u2YqMea9rxJT112zygYnjtSSkmkuzRkmimsgRtWpsGLrMubM1LiYcHxB4JhNSHvn3aagnFVXzz51GdSfWe24TfA",
  "key6": "316sLXokJEmnj9yyNMWEKCo9XbjvuLbe8kjTUGD3dJBfWAik7CLCmWLX6TSJtXV2MLG6PgdPY4SnYsWUiBw4GWtB",
  "key7": "4A1viYanHgBBe9TpfSS4Qo7cbyg3JFWYQbp5ZnpniFcekWd6YiFuzbmdXdCTiNB7QUeEuwtAKkp5cH2xiFzDBYtx",
  "key8": "2BALYepK2Jmvy8iYJSYey1Z52Nf1qYRCkVKNhMrWwMCGkdCHhjN9Z8GdQyHTA2xmn6f6xzenMxgmbbMaz6qcC82r",
  "key9": "5kYjeC18uX5MTaTWBSk6G1h2wzJ9xACVHcXWZmPNvSSoNTGLXJbqLGem7x1rgXBRYe3CzJ6GgEG7WSfeWdQkMfP2",
  "key10": "2Tv8pYj25qMbdJH2LyJQwFj9SYWr2W2BoYZHGrwsLoBAmdWeqmCzozHE2xYdnx3nmt9UvdWTmi6fQksN29o2nUR4",
  "key11": "4GhtCpJ5N4nYkLoxLAvM1ZnT23b1PyTJzpEo7LNHxR238hDCbB8N4Sod9XCKVpCNd7FwhuKqwR13ex5bmuuU6Cbk",
  "key12": "Kfm3krLVmcrrEMKscxcB9kvgynRnK3LsNHJMCwnutpUUF9Df5Bzuu5cBhLYyvxwwEoW9tSDMEu38d2ij324k57Y",
  "key13": "5mmiZ4tJbL195N1vgwxy9yq1QGCzstPXoT7gkJ5zQ42A9jaWC61ByX9Jf9rCmTvYpRkVCQqsa8g7TKmcN5gx9Dd4",
  "key14": "5cKMDCnj6F1C6C6UbZVkHCTq2U86gygQZ7tV1sedT967tr8Hhk13vxSrkodiosFBuRpcFqgSoyynp1xZEbiZQKQA",
  "key15": "2gxgsZQFjpM4eCQX1SzE4cCCsZbZTYYeoeQoYCXw9YArRKXsUieThvWcMUqbVqbo6jtWuUBHr7WzvBqJ3fw1icXy",
  "key16": "2wwpyEFZzna2ofRb9JPZSeN5ZXbinVVsEkEfiZb7GXhAvj37m9EbngeYzf1DrYbm1TNMCb86GGdTigBAsc7L22ka",
  "key17": "3PLX9LcZMSZZDaw2PNP1JLWkAFonSTAu7pWdEttgXJfihfCQENxDrR9B7ofGXeMrRFSa3Z3VRT8Y4sbdKKHhJxA3",
  "key18": "AtxMmZ9HM5qFgZkn4T41Pdom3sgmhVUicTLst3T7neccEXuzLE9hRoypfEyQMNpLfHe95EQNSkogStY9aTtjfnh",
  "key19": "3FZos2NZRErUpVYcJefUrbJWZHv6cBhN2RYgstrGAjGAT97m7XoPWaqDjaKYHvY1MB6GYGWbSCGE2Huvqm8PNDzM",
  "key20": "26vqvkTpCFuA1aBy7Pd2Kd8Jqq5UgHuFRnAGHh2NAZQ1p4AZVc1hbCX75n6tBDCQJCiLKJL7G2pDU33dpGnwNyNr",
  "key21": "5vfE4GvmAoSHKg8RUPhvUj6PCqXXEkVrgqSCc9Yv14JQpYjE6jghAA3TWXjRGbHPN2Piu1Qji5HPrf2m2Qiw9JRh",
  "key22": "5LM2GvwJX1GAJcLxYDvCSLs5A626iQfQFUgowqED59QTZwbWai8BbFCA2XvJ6mMZBS5XhjfP8uMNadpT2aaSSoxS",
  "key23": "3pHhkN5YizkY9ptzaca89phKtScxqA9VeiYt3eB6KVnd9R4TN1CF6ScwsgoNZ6NifHitd2tduk9aMpmDs9fihfn",
  "key24": "3rL7U1x9pLYgC1ii1VSRLsuRm6ugUUQi2S7ChTzzb4QmMfZrDBPuBWGRM3ad9PwLXsNHryqrw3iPLb2LsDgBnuRZ",
  "key25": "3HTSF28GSQWX6rrQM92eFFpSfge7d1baB8Ao3b4MwNceHXjnDdes2aRz3GRjDqaBhtV4NMbvGKCV1YEHGDHw5Piz",
  "key26": "2aryJRZFLHjvAppeJTJrVcUUSnV1jVy9Y7YXUQMvBcn2U8eE45AdEXpwTSqNRXYN7xL6VCNqVuwsHg5UFG4osMwW",
  "key27": "2oJMN2YbhaGybkbwvZoYP2voeDD2a3t584MPyutP441yf1RoZETV9GMVNTavbJ46MMR5GbofHqpbDWwC3EJ1DHtQ",
  "key28": "DHSgmBaMPmNeee8npSvxckhShqSfELosCzb9S2mBYNJfv61pXSRTFYKcG36JLB3EaBQLBJFjAb4jxMbPSEAZWmv",
  "key29": "3Eiise1Ve9hEnLFXtiDM6aS5cwbtUhq1Xsvh1QFtNtvRaw3jLn4XAQWvAufJXHkfm6P9GbjyNCHLmZEmEAYNC58",
  "key30": "5TvnXMMsyBV9pbM7Mqf6voK8Zji4j7zDH9aqkWQ86E1v3iZRfUwLpfjiDqV13dbHhw26nCukkMjxFVtfQHfY1pNg",
  "key31": "25Jftkic6ZHV2yiPCWqxnkUDQcBSQCTfHpdiALKDW5qWKM19mvJKTKo3h9ULX5zABTVYNanFheaxmJWqEiojFomF",
  "key32": "2paQLqqcZefswGKTr852wp4z9dwc9tbhT4TjyZDxtMDAsdV8343efNmkNf8a7JU7XsMyHNi8akn1FukoENaDpepq",
  "key33": "5Nb5L2vweFubPE6nXEQkt2DhStaHYABy3qi75NAvS4jwHjs8NpwLLDmMhMgXuBGUqUif4NFngdr1wHoQmJi6nLQp",
  "key34": "6Am9W4i3PXFoFmxcaxKHwKVhtEUE4foirk39PaLSPxp9m2GaJubX6JVtCgj5vsSq88nFxebN8uw4mtpsyz3LjEJ",
  "key35": "2bHoEwa5qid6KqvE2QDArt6N3W84TcPuoffJBBax3dQDTzQH2pyDNFnoTUteEt4QM91gcJ4HkTjvqPq9u9n23CJq",
  "key36": "xy8Uo27wvKiFhXthmHNtGNgDUStGikh1BmHkAghU3zgY9CygTwiQsxZhAmAGERNZk4HHwvhqTn37g8MGQh2BhiZ",
  "key37": "tWWjBN83wE9U8wtVketXxJn1m5ufKeQMC3ohbwshoGp4u3fwR8CmXWSCCQpC2qFKRN1ct2DKUXC79jK1kqL6HbM",
  "key38": "3VKaNoUoYWsvfZVp96t268qugUKwB88uFFycLhzw9TAtzQ94zr2VDCB3ryNNuDGbZLoy8UXSnxQCAT711kGJKTwm",
  "key39": "4wVcK7SAtuUe66SiVGKgALmc6d6hBohHt52cLJ5gPyGzetUHxER2tLaGmVFNydQLbSwP5kqXzaQUqXKzibC1s5XV",
  "key40": "M3swsQg5qz7QEDfZQRjTtQaz4y4eoaqJwWaUa1fo9DJvqxmyGnHRxa2mqqMm8zVrpSfCoHg1Lxezed2xMsGyfvE",
  "key41": "4PDHaDri3focM4DtqYBFtpDoRGuKsJEGCeZNKJwg7AYiEBEac6afeBPRw6fRwhr96kXGs8nr5iGQbUVPfPn1yWdg",
  "key42": "2bm6oPcbj5xc9NKZRQedmV8HxzDkJCase4WkTKieme7bEDqPihX3TRohUia1jLPXsVnMKx1rtFvBy5FPZVbQUqb5",
  "key43": "4ioPSALARYEU7M2RSypiLq8swLYcivasT4jGmu9eNQptVcNEwtiNKDhPMpdxx3cWPRzDPbFLBubDBfFB3B8irpQB",
  "key44": "3SGE5DQ9vrmmogJKvQTLnJCYB8bZXKBM5XUBSG5nLmuUo5FnRQ1wFSUZE1dMEUYjzatUTkcB1ZbgwnpUbgpkPaB7",
  "key45": "MgjzJu2kfC549DkqjRqrwShvqFd1KstxxEkyRgUyJYPzcdU2Aakdu4q21RuwoCV2juNvYnURtEKtdWM2VZ9uFq7",
  "key46": "2zrjmLSZK4QjnHaE58KsVyRJCdTo2y3EYRCJzbF6WEa5WbCYZcxX1AHkL3nF1GQtcL5pJs6saECptAZMkx2bAZ5e",
  "key47": "2Q9iVHjkdXF33BzTyUziXu3x3hDzzV2dpxkessQnaKQfJ8UKXLZYhQPc2GiURKJY4Bbx6EJQAVUqajjDU4XmULsK",
  "key48": "iaTkNVVYtry7rDSy5odSzVyWMmxAJfQyHAP9qpzdNjWe9wJ1fnvx9Q9qWrVSPMscgUm3hEUho61JTE2LfdSzNSR"
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
