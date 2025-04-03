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
    "5dpTxwGZortr2qCjPgrQ356VfT3ZydUuLhoeaTGzP1HLm6h6E47GcYCDMKudCmnNjQpPkXpnmiSF4pg8xw3ucEYF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cCx2q3KKtGL5wJv2U2BZRpazhnY9YkbEcHATUGYQ4uDFizS7rPyY5THFZmDka7hniwiMnHgkkJJUWJkeY3cSDAU",
  "key1": "3i88QQK9MoGx9UDLxgvqLtH8SmU5CjSR9XEi55tS8wfAQT3bnZcHaAy8aS9oA7h5q9idUpJnSQjgPje5yAdiRwxx",
  "key2": "5Vpt8Z9odAE45mDp49Z8RnQrU56B77VufHCcYDLGSpwCFAaRz8j56xuGQRpuVJujLAhXxSPrznfzfwDNiZD4yeY4",
  "key3": "6UwbPkNJKXnTPTgBGTzg1VJXQBWRkuNoQmw4Msq23wo9yvWZrpqF17CWVqcXUi9VPkcvPT9DvtABN2Qssp75N9r",
  "key4": "2MaQdQvFrBVLT6BvwimhaHxMzvmJnxmWBBrymqjiri5BoXpvrRZ96UaUzZKaBsY9pPqnpYFHY8CdLszw2xPoFnPZ",
  "key5": "5mNHtLVeg7zKimZ1K1UTdaseVhVmPZ1Y3GjdKKM9HxqYEFUamBUFNkoF4RX7CeSuJKdMfKirtzZ65eZJ3VaUDyTs",
  "key6": "qq4eVVYyuPX9pzkNrSCXTpJv5UXXRAB5Wpu3VPcFfUYWhJoVsZhSZkkfisfvNtwSUse3v3dHsLL956pRYCbF1YH",
  "key7": "cBxXgMqg8wWRYXt85LEXvRzPZrjTc4FRupsanEUGoMLnk5RvD1dCP83vp1nZt9MHgTgmw8maq3f7BSpF8WXqGLT",
  "key8": "5F7kUqQjneJs3vdum8x1EVbmgvZv7mbD2zTnWBcE3ggfSpvRyZaM34rggbN8fxPPWz5exTyTFqhWwtPSxSGYKMrZ",
  "key9": "3sg1bUTzU7uhGdevYkZcUdLYsnnkAwx9R5k2wsoo9FwSvFbhz7LJeW3s3kGVyA78yDFRdFwL54v6VNGM8cop4hb2",
  "key10": "5DtpFVcvbb3gr63P5r5TrrDErSH44FAwcFgStZLZZKBpaWLZraYQy3PwKgoeUVCgn6dV2fJqLFoPLJ5XUY5f8FkE",
  "key11": "67DuBdtAraBGuV8aTbvjdtRd5hWVk9M5TTtMTxv6iG3ErmwkwPeFMkKk72rDVfCxpypZTazVHzScpqSpv1J5gmqm",
  "key12": "5zmgzGjDEqVHimum2mM4Zmr7yrm4pphnFTDRHZubcLMDhoEMVFG7sz4PoQZaNuhm1mLFg1P5Zcto4GA1eiCwcLGv",
  "key13": "46KCJsxe7A8vEwehKSSStMxYhYwfENjhsAS25awH2JQozinqzR5mWzhd2sQFN2jwhcc7x5WAA5w3LHpjLrTH2zTd",
  "key14": "3PYDd62zkdSV5cCMJrxzBpDskeMv7fNG7UcTGpmK3hNSyBbBWgeKQadiFYakjRpS3TXJuEYMo2DWM1k78ooscxKX",
  "key15": "5rqbyXo1TNSEXbduLKTAKfs4oZEwD5G4oBy4DFE6C4bsTVsppByA3BPdBt8HsRgSNDewongV3k36ACxmaMuHdvky",
  "key16": "5mAgVD9cX82ubEyAgQh3vJaFK15EBfRSdibnMgSwLyknsjEgFgdrfvoRz2DXS4WS1WycTHwqnGZktD5qwAn8udCy",
  "key17": "5kpgbEb6vphmA93EvRS9wdBvaXNNPsVHuv43iWybBWdXSbYrH4MMryKRvmWqAqfwMneypxUcjbkPKEXy4FuYx3VY",
  "key18": "gJvheD7uH3fZMjZPGWsRLUnK9TfWwGYZ9YEqg5UXy2X2him2gZfB7LygNJPtoVCZgGq9tVoyoXQ5KqafrcPkLPF",
  "key19": "4W27dVrr7QD5D9dKV3J2qDdiTiyXjKJSrHJayNbLfttxyYfMBc79A6qzQQRmwLoCRSTJF7qMbSngkCZ4ozMX2uA4",
  "key20": "494WWB5MGQcnDkPScxi1WEsVQFYqXMkSh1TQiqTrHDxhfJG4ro563WLion3e1q4SuatfcFCXLfZenBLsGhE2WDqC",
  "key21": "2QtHFCxcDjzjd8fKjDGHDo81CpnuZRXXDSFhH8hqCT1H3QGpht2qFD5DoTvU8hTZMp16VFASbxdSn2MdMnjeBXcp",
  "key22": "CuodcAByFBfhWmdrSn4ZdGCgWGKh8hYEKBJzGKf5K4K9vL1ZMZ1jnfDouaWNX2hSdg65NkDkDARQen2APwx168r",
  "key23": "5tydCrX4oaFUdnjJyPSeEXdkviGzJWMCt4xZ71r3wFeK2aCfhRs98p5K6ifSVyHUJ6poMgaSubifgi1bRt2sEE7h",
  "key24": "4toBEEJgme2dtC7g5DVefH4Y5Yx1aUhGvboehxgpzUcnV3vXt6Hb2QAfS6yGNjAyAFeuduYL2TA3FtunHc2jw7Xe",
  "key25": "E1ZsJg5JUCLiofKWPULqegAhsF6Zq94jV71sGMkrjjjoqQQGLdMNo3PKQ2ycu6v8y2E6heuzETx9UHjcfcgqTCP",
  "key26": "o1WP18ZRAGW2JSpfi8sBKeKCpRyM5pukJ5JBZg4Q6AAC95jLKwF2ph8knS4YAcGqzn35cqDKjW3NaPnAxrgbAgM",
  "key27": "2G5PtDL6ZPohuK53awez2B96fkT8admqfTw1WUThK2e2w9rbjY4dNsMWhoLWDSrUQXs16G9pHxuarQMzz9njojM4",
  "key28": "21wx3WvY4fP3PzPVPkZ98UBrUoFwfHmzDwoK2xvKKa9QLG8yALFt2qSNK871ohunqxhnUott9zzms7VJkHtTSc9f",
  "key29": "2aDDRkqFRQMdkVfyaQ3EVeB8UFwJCdepxgHue9kLSVi1SB97mv1HyeVT6owUNVrp2gmFVGLFr5UjABDCy8vtQ1B4",
  "key30": "3TiD2KbaBAvesgLkJc6WVMg5FvJJddUuCYcBbfAhcQdVCdpJunrVUaLkfdEpThwiioJdckFepWJFwvjgERf1XpoY",
  "key31": "YGnSY8xDgPoZVHQJUEr9ZpBE8TpDbjw2rsZPbo48uCL4Lt3ih3auRzZYHMeGrk5K564AJESkq5K2s1fiFhdh8hp",
  "key32": "4iyGS4r4o4TMEH5yQSW7wDwphR3gLSiqZWSSM5TogrFqpiUBvB2BtjSxxDxq9UH7Qi87aUF9uP753YhuMjWFSQdu",
  "key33": "4PGMWZpyhz6FeEZ6ksfVVA24PeRAgoyPNZWjVCaX4xzd3bwNY4yrfwPNLtt2QwcfuBUDXsWsgF8gxs9HaN3TWzDq",
  "key34": "2UoDFoGWJ6d3TG6vc7Vd39JZhSQSUPiGQhRUrLZSn6C7PWn8bkCE2YNfwohmbbNY7xuDhKuCNGyUYZAZ2SbCas2Y",
  "key35": "4Qpgb9KMHCoX1WcMBfPtahYSmTUopKZZ76NDdDC1sSFYmqcSim14BzQaT7iQ9nTn2WAwtVmWY7jBqCMXCB2xgXCp"
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
