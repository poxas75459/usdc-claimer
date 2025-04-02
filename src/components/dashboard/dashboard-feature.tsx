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
    "3rTGFjUSyYaQGC2gsEh6PUhCiSms6ZUCAgnsFQfD8vhVywfEuWMhJGk5GY7bQzy7AS3WAY8fbGR2uZKAGFLEHyjk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sPFRCqJ4Mzs9YyLWUr95Uxth83F5d98MkgPXXVx5X4BTBxSoF97yMoifZx8rFMoMa6iCV8hZLBPsroLGaM5pMzi",
  "key1": "2P9pUcr74WRUaEsC9iKK344ZE8UH3W3RPZXJE1i1LER4Ehp9tLoMM3h2ddXM6kvHBpwzRcZ2ws796Rvq2U9U4EYK",
  "key2": "33ezCDJp1VQsZ7jMvnqs8371JnNUzfz67pB2j6wpT8dRXjmUCWJinLbK3vLXVBDSPjXf9CqTTGpJHdKUVym4Hi4m",
  "key3": "4h9mQGRS6byLscVLrXNXMsywMX2fUvq89pxieGV7Ho6EUJJBLJZkypkAGwZc1dwhiZGzMdFsgqMjPj3TUn3bprCj",
  "key4": "5436boYyfT8mro5A2t9yyQEgJXM4hhM5kLGd4qciJpALXAPYAwuRSBbmfXbCa6SwXJtzafh3GadYbaNireXxdYv5",
  "key5": "2WR2CE2shrXubgjquhqVFQ97X28XNZqEePFUqY2z87gN73usxnh5peqoBB6HEPC4i6MS4hXJsjuTwimeAXSh6ne",
  "key6": "5nojyRNLYV3Yj4aWhaaia8i8RM5g1mi9ohqcGXYf9J3yBQZKX486atUxNK4fC1kkoBztZLL6f7kDfJur1dPmh3WR",
  "key7": "2wcEWBikGyk62x95H3DegjXZfE2FhNYawUBj2ftksqKVRCne3cbYd4wvSRuvj8omaDj8cYNm7vDwBgW4vRsjqzLz",
  "key8": "3VsMZaFV9X4n5ojEXmddCPFBuGGLTRgXg8wLmEX3roMUqd4WU6aR1wPgD7qiGgweD3EGgVzxWDirXFaZouP3Xkcd",
  "key9": "2a5jdTdqmUczFBxmrfNJw2Fdzz4vkQCRdxutu9cCA9bkcHAfJA6bQSmXAwSbkTTh12jBXir9qFVQqb8XqZZdyPsJ",
  "key10": "3YMgkMUr2JWXZfMv85SYQVJg8c6FgjJ37dkeBCuKZj6PyeA8B2raZYukCfT7wvzsZDUTHBajhEWKaAvq8a6n26Te",
  "key11": "kbrkpNqtGjZ8aDdAN1Ci4SuAzoHq2U1WFZok3LvopFad6LLZk785rnat7wimHcCv5s2nixrfjRyA7TcWGr83mz9",
  "key12": "3WAAUFe14KT1CeSBD1cLZjC1t51fhgnzSyWTDssTX75wVvZWJ4BAjTLQHWPCpN4xyFW1siuDHHeY6EFDQ75jKwMs",
  "key13": "41Quuywv6L8xq19nrKPn2LHWSN2Vgbf238WfkVp5Ld2MyjiU3thaHfq93FpWdnk4RXazBumRoPS9hfXJXVvMakf3",
  "key14": "3MQvASm2WjagFyWjLzSpw1suiuKWn6Z6htXZ2Y51rVmRtrKSif6TptPdX8QRDi5QpJ94yYYtXcApboN9YcMRxamq",
  "key15": "vNu7U3Qrr98dV5XD7mucQBuno6i5iAS2HeFvmSPh2HjjfsFrTxfqwAHWCLYW1PxTfquGDvaDv5SXs951HDRuwoC",
  "key16": "batDmSX4A9NWcqUPVcvsWRU37Nm7m1tKZXKi9oDmnrXtzgZN4LwsvQzpWrXuWtJn4KFp8ySC33BGxGXMZuTyt9Q",
  "key17": "qy8cWxbCHapvANxXDekrXB9edropePnFiwpqgDgGEiKktj7j3X8gAgAgDuzeLECjz1m4yjMoDJ2dmyoUNWhMy61",
  "key18": "4jELN315br2ocqRnXDsURx24t3p5PcqQYT7aKWUER71nyckoMRGWVfcJpXuGV6vPeHTb4pXqvMpyHWMiZwaZfJpm",
  "key19": "5eLxryT4AgJYTUuhse88xL5cBE9kMvvM3DGzjTLqnPBFDntVQU8r5u1E5bUt7iZEL8AE3m3r3bcs92kCW9Cf8yZc",
  "key20": "4T3tiqoVQEB6cjFip3niqva4avse8jQjXveEY42pzNrSYWJu2u5tYAAYyVB2xDsgJb6KS136qMkkBKSXYFEMJzCy",
  "key21": "4Bt4tF1NQX9hjt2faqMRgpe5fvqCvdbR6Tj2sGYJdkfuASKucYABCuSPXWFoksTdNQwVdajobxio9Azpcv2VBRG7",
  "key22": "2j4Qgp4DVhvusRcsMom4UDDNrBs2JJ3jFtpyxv575PwD4Jn72vtkgRQeWYntDfrj64cimcBgZfZposEMBH6yaxMm",
  "key23": "5P3fi4eGU81SPSJMKd9Pr7Ln66NAHjbhUSfEscYXkk2DQ1wuKRmSMdbW2dvACYLiPGy3bjaNeMzpbLzcDu6s6upC",
  "key24": "5Mnz7yimxvxM5MKSwz93NHV6yA7SZqjdnE8qQAfsTaLAJw3HYyzUAGCLRmo3yVrBa3zZAHH2GJj9EGTf4ghTFMPh",
  "key25": "WGckUNoakL2RiG6jXHuSfh2qRKUkXupRv9Yib6P3CRgd33tbutfmD8E1iEWJDpm2H9ksAqX1agRcU8SZWn9YMzy",
  "key26": "tzD7ipA8a6p7EJczZrmh6SFAXkjoWahE4bGvwHa9LTo3J95MgddmYQ4x93vaRRttgQZjk8BujJjM8H7oe5QYYHc",
  "key27": "4e8ZZ1BVPBs9RPgPSLLh5TaZw2U3bPEyasL5zL1DR4MDfYTkWHVaccbfaSZAnzWxDdJ4iMPg1NjNjD2ykzcm5hhg",
  "key28": "3hQpo935VzXvWD8viTYMCbzG5hi9qrWfe662Gsp7nr51vcUxZ6DdtUPSixitMfJLi2HT3SkZ3XkzVR7JGuYiW7p6",
  "key29": "5KbFfTUiwLkmzzZYccswEDSsY8gJ9YbEwwCLWqTebMGF7LE8CUSA2wRETcupdBTEK5x3JvPr8VvtKzMRrnPkHnhz",
  "key30": "5WBcfZv5G8cQ4hE36xoSp7JNCZ5aWmNJH5nxZxo1BRHufQoGNdofbPZQe5KMZDydHHycYqG9w9F65c555aLrZ8tm",
  "key31": "3tdKvCDFGMUUXFUb2tDGcS5iStnFjhayX81BY3ibFsyxgDi4539jbGevpR1TpWFaXRH3feNtCjdR8uwB7KYVQBdK",
  "key32": "4SaSknQMw4RSqAwBzXhtj1ZUuZqRCqHJPBwyfVbTyA7qhNrLHFxK1hCybPA337xnwW4EDHyASJUBwTc8EjnGQVXs",
  "key33": "3dS9yYXYzAUm5mDtgcWU5kHAqTgntPaM6Vx2Chdvp2v9BG58zjzb8Vin361wj1dxmG6vgQoLmqTMBUw8UpMKrgFh",
  "key34": "rF1qNVDaiYV6AR4T8RKoZhYCeWAdt8ucLrFyq8m6HCLaeZFqK8Bpoz3zVinsF3p4qEwhTKBumWTdcr75DrrEx9C",
  "key35": "2exhYADjomymP3cPTgjpn4GjXkwPyz9VKM3fciTiMiMsBa3WTGnoKv3PESeYuUB5sxGYCjfkWLswDpbMZZ7bV2RW",
  "key36": "5C2MKXSp9iyWZMk4kQvoBK7tSzgbeMxUCuLd9VU1MAHc68vYxiUHxAeBVQRTD7XGD6Sn4mKgMmetVWc13nm7KPEZ"
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
