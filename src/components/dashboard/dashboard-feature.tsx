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
    "63v2Po7mmnw8YhaMj1hrXQsTeKmbRP9tR7eaAW8jhpBBhNLSXGd8SBmg2b4ahaw7WhzDXPAk6LPA8bkVeqChwwWB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zyabFMiAX5Ji2usTYc9j6iiYc5qmg2UvzbCapvueCazKdoABc93d1Y2G1cQJz6FT7yQV2yzN6MUXSrpZxznD2s",
  "key1": "2QRD5QfTfYCWs1HfeRfRyHnxw4jzF4mhsJX5pptXCDDB4HkCyrcRWwdSz8efjFrAoeLYUq2G6MnB8VKZGusqSuma",
  "key2": "5WAjT2Qsz4p8WAXUQBVZE2CBThYYLN2mhsTysJdDhQw6thVkFXscQKWRfqzwUpadxihrtQ6FVaLCXF4Dpn3HsZoA",
  "key3": "2EZbahL1pC4vERrV2hMmdeE5rBvHFGxXc3JgohnPfkEvnrP1spanuRXHuEyzxE7J8tAEc6SLPEkfjndVaukYTcMj",
  "key4": "XSfG3RSe2BAuDGxgQcjPJbwLMdVRa2TM6jcXFeahzFg4FgnjZQBQ1c3TFMSo2z565BLQXas2dWpZf4WuqzaenCr",
  "key5": "5oQCb1dqVc8RAH5PDPKHayAmyMzJFKkUw5WPqRD9Wya6NKyvDVFd33AREEHxpUWzua3BGhorNkfrdaCzGgpNpWZg",
  "key6": "252WkgopiwrxBbp6pjv9NkKmuJPSeDi5kpNXDFdvKnMNFp8vw4yzTj8GT22XunpTdiPzouvm6k8wdM2dtgL2sJFP",
  "key7": "5UEcNaQYRXbZR89N3DzcqDZxeuvVvxvEwb7s29N8ptgPmfQ4sy8XxP447ETWxJ5c2fLgBUFejx4EpKo2SsGtt2tp",
  "key8": "52tSdzSXRcvKreD42fMVx2SkXFsWQuuFVtaAngc1tt7iG7yjuqhrwgab9MF7oW5Nu3pKqBnci5sCFX4ePunAJ1Na",
  "key9": "4oVkYosJErJtKeDEx5pNxM697wmmBW8CN3HVeqZtk48dJ4BZxnzvB43miVDSBrrYvMZPaz9gzPpd2WgdtxKKDK3Y",
  "key10": "5UTGhisFTujLT11KitkGhjY9CMovfqz6mtrCUKqhPJKzeGgPVyEEtbZHtVWGo24Zcty2UZLrukz91ysMADrpMSK",
  "key11": "5jnbadTw3NsHhcYqxL2QSwk9WhBdzP2z9CVAg6fUsuZPmT1c3ZmQKCy58ppGtF4WaoYWHNBReHfgzQuPSL8DKGYU",
  "key12": "27XN8xb5d1MhRpASCt3Cj7CA3QmActY1bAEG2RhQcxQ7AiNJ9bryGkfz7F7YmAKNkTKT1TqpqxJTKGLBC9pa6Hz7",
  "key13": "3w89VSgKo5AEJYb6rpobR4uQVpotrBVTmcoGeWT73ekrnuhktRAWksBRM314SY1ehezskT8kygonWNmVC7fFQh9V",
  "key14": "25YrXKMyfph5MhaoXFfxsk7EqAMm1KKZoArdJTL8CdZag7UnKwRjkatthVAibR9QDmVHSVpSyDgCfFRJvMC67WkZ",
  "key15": "4t9gHHxLyxCRL9WxMuJNfoyZq8wGL2fKDUsdHGdsU7SReYyGGi3EseG5s2YWC3rp8uxu9Z6LHo7Zp2LrhHxYqdpS",
  "key16": "66wHgikN8uBPp6tQnhpFAa8qC1EJCHuVQKL8kQEZtcTw84ipAZQdCtQgo53LHN4WrE5MEEgn7AbWj4mP7vGN3g8o",
  "key17": "3QxbpDd9oXuVEJALo9VbYJz8PXyGfvHZXmigYfj2cLz8beLWhsCkM4e7j2DfU7MF5iSE7H64btLN8Km9SYkojacK",
  "key18": "5jamDJBR8h6uz7pAFiUM7KUKaisr1Lmm1TvNyRVhCb5ERbygZtQEPvNLEBVYufVBTGi2bMtyQVfiXHpnNcJAVtt1",
  "key19": "VLc4v6XGcxisPmcnn2LKAi9Q2m9JY8esScZMrZ8naNsXpQvkMeKkEXg56ZfkGeHYuyTgzWzpbNGgzkV8inmxrWW",
  "key20": "3NVJDnNpFdD3iBL3YR2Qaz6spfkQioyDtggGq7GGA9srFXFqCsjXgqQhPTETqSnJRhDem24prhmWjtivnQnmB3RA",
  "key21": "3h5ejB8aMNd3zvRPTiT1btpyTyGEHj5ABrcZyKswE9AJA4sF3jePsgj2YemPbMSmXjwTmZpScHEuBG5CoWwPTLxg",
  "key22": "5LYsSEgRRntF2ki9ab3iYhojkUZMKq4B7z26qDaNNi4PhvrHaZgW5r4eeDzF8cceSsj1JqQCvkHZxQzMN9ZP1tir",
  "key23": "2Vj957b1KcbwmdyEgfk4RfMA4XimekeQYhoZkDTs3tUrJmd16NWMEAb1jD6bKRikYBwxgcVsmqm81dJKEe4riXEc",
  "key24": "2yve4QEByxhNRBHf7WUdYY7eqP4TAeG5zqTomsTnQApDqF31BdnyhPkHNan48ZoJ1YFAEMSwAwq16g1TdZHigkpg",
  "key25": "33C3XJhGAnjSTYz9vU7tV4LcRF8oircskLwHGScZ3u69MzV3GGRDvjocwkYF7dLP1cJf8CNhFDnjEM24cXjZFhdn",
  "key26": "4KyLFrqyV8dJsvUHFmAVm32morWmutP7Da3va5v8TvygjhfcCigJAgeKgaT7zUUuqD3Fd5hoTChTuzhjkc4cn7mn",
  "key27": "aF715rJoFQoHoWmQqrkdPSxhMQ2qRfqJBCVop9NG73o3QAK1QF1eYtQ4PKphK7wtkUdUSqjtd4ZGRFV7K2b9xqf",
  "key28": "4JkzGS1LfMDPLnm1fv5MjDaQfjWBRRcfDGRSemWa9jnd3ENQTXNM1yJMK2DdzJZUHQ2oPQqkHgDfQBy8yj2ywkHz",
  "key29": "5H2XR9298cQca71WdKYo8buVPU7wSz6dCir9Kd4vcRZ7Ypeoyw2RMoneE7Bq2JgA5V2NZf5uDWu635NdEpBmUBtJ",
  "key30": "gG7iZXPxRWsrqyEMZ88J76u2XF8x1uhKeqX77UcLMcsdPLDwJoeVtVVHLY2TY7gQtjcTtq1eMPFoPoXokzA5HxM",
  "key31": "nT6yPLtvAcCiK16aiuoqJZRmsHpPy6uffxCzCkiTN5joKfnwpSPCLa6ndv2S4QDBNKFky7NVUNWN9sLKZ9HJ8zK",
  "key32": "5E4m4FmRstXX8mR1g3HE73wA5hmpkHbNeQgSd3sPMQNw7gHf9X13fka6sX1jjuqiFyryFVnqdykELV8u9QRK7DNs",
  "key33": "3VVvcspXRdsUNQJwKHhSaKHz62d5dHZRBaPhMtpcC6EzEjYKhzf8VWRcpESCaqnJyyawXZwXenEcrBLHD5MqE8GB",
  "key34": "5DMcDundkWk7K68G1TYeoU6USrExYLSAiQGMVzSpbFzeD2Rj7MRLaYeYZGfv42VftfxQRZ1WRyQnvCVJKN2wkAMm",
  "key35": "28EhXChLMRgfD9krmmTNVTxKWNHLdhRFmUaZg2fnSedWjhxY4rhhw5i8ZKgzkgMo6J9PyV28axFGjUwhxUzPZyry",
  "key36": "1gPR8rfMQnePxtJZVvrNoj8nW9HZYzj3L3vo3PRNuQjZTWh3sgUZvf11dDyGkWgRr8XG7Bs3yiiEsYGH4uFPwE6",
  "key37": "3MJikJMjcbMxaDRTCPZJVQb6VGYQnHMeY64EHqhX7wkG4CCEdbQGcSdLrzPapUExoMdH72myvGoJGcjeLFw1bdGu",
  "key38": "3HNaDRCqcejp82SxvTLTFXB5MzLjX3DZ3XRAs7FN9WUDz9UefVG7f4B5SjWJ1k437CyUciua2khw3CiVv7BCbRth",
  "key39": "4wz7nB8Tdbqy6LRcHjDVSUgEXbWDAmbVsw2MJvbLiBeUTDNyFk2kCqrEKGUX1mW4AcKbqBsQetRuDmzRBCG7JQcy",
  "key40": "22xgjmkRhdqPNyPFnfLbwCNY4RNg2wPUFeRKNx5SVch3g11Jh1WvnMQLLbX9ksEtEqt3XNSM9NhTimhNTERzWeuU",
  "key41": "48rB5MF8Yzvh4ST24XsEqfzXJ8Ka6jWVMz7aD3b4JcX4XhAjXdXnxHZTaVFRhBZxrRVJh3HV59sU3y34Syr6YRuS",
  "key42": "4ibWF9MnzzK9c6TDJdevUKbmfefwt6gSYK7TBMwK9CJ8SfKUMnokF8jTWoDhjeaDh7ZtWDgH9LVmZ1YDMPyG2F5F",
  "key43": "3kKkdP5LmejZVwZKWdbgBYr3Mzz79Kbct96pS9kkMZsZTExxrz8e28iXJMFn2jPEFXS4CuDKVXZpCmDns2t2wuK6",
  "key44": "mLuQUcA1KXMMWsS6uiaDRKPqLzkaiqpqKz1ya8ArwMHeKN5i9U2dQG57MDAVJ5MFyjrmCAaWrYGJ1x8K4skiNZQ",
  "key45": "4uHWSTjVpT7CXtGaPYzNgZfjDR43jESpsYKvG3L6YMAMt5WofXSg6cMapmcd81WxSPJK4yTu93zqmFUNWma9eysT",
  "key46": "h6wJgEh7887zWDrSBFTYjSJvz8JXS2zqL6GKze6hxnniLuEnL7NS8ssMsEWsTqFFZm87h6gGqftzr8DNhyTLa7G",
  "key47": "3AnyH7UYEMGD6mQRyLsskVpRccXS4nYn6gvMPfG3xEKqaCPdfJRDeT7J7amdRU7oN3ZdQxbG84yLBKPdFdPJMB54",
  "key48": "2m8PBnrUnVvnNmtzKGxGM6W7gBRE5nT7HPVkyCxZgE45i27AUjHf5UwZWXKYBV66SXCPvacd2PZPkowibRHBLMxC",
  "key49": "5tYLK36D7XEPzsJWBwnzD2eSzbQtgBo5cUwDsxE7cCHkQtPMm7NsHgz2dukD1sFfA9e9GgckSe2buvpfvAM35eRQ"
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
