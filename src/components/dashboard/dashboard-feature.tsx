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
    "5Sei3GS3u5ssQN8HgnJCvtM2Yjmkw74HQPzrjBdtn63rxEy9E36mC1yTCzH58GxGDyw16hrVUwwX2UsNowRpU3zA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4adbkXZK2dedrvmCXpqTbMM35apN1h5WuSQdcQQgUvBZfhQfVZfC188uZEzZYhw3FjLmY1ThzFegC4YdYrCQjjb8",
  "key1": "46wyXnKBEMdUX4mTcKY8JMnwGXMoz3KRLE132sTtdUQydPn7snogS9SWeMf8R1WTvJ55u2fAvgkbsX8FLaH5BqWt",
  "key2": "nFq3XQgivzBgRe36rpGmFCueSjoLgWWhNL3t3unfgZDEYTinT8NtnzksS42JthVz2sEoBgzzqjMRoY5CbpRoQqG",
  "key3": "5th2YJsfNXXk6wA1KLgf92zZvVxaGiqd1EEaZuDW98TZUk9oDamDBT1j8GRoGutXzkbqKHU1hrQUnRAjuLbPNayJ",
  "key4": "xmc4fctqsnv66oc4FJXqnYEHUeafZQ6vrryWLuVRhrGuUKQBpbcp9weqUoobA7ogyzQTeV9iyJ4Xq6FDpmRfjhR",
  "key5": "3LULUMQjqGcKfjQL9hyGapHayRtjQ78Bpp9hKT19ixzGazkPZsTECMxfWkNLmwAgaMpcrXc1jPGiKLUVDUAVg9jT",
  "key6": "5gbHQxhMCFrMJBpxbVPspriq5cWCknDK2EbUfjqJNUb5gAYQtgfTM7RwFL4LzM88rG5wiG28cxDNjJD1hGNwRvxy",
  "key7": "rhkqqYruh9AWLQPmAHtUU9NZ5Vw82EuVsmGbiMTGGMRXh1D3xqqiu4fhofXpTYhvB9ZRWa33LNqRb4jbR9GnGNJ",
  "key8": "5vT6zSgoo6NvhM2SzYKLhkQ9sBrrwn7t3nv33rEZd8aBkkhzaaL4AtF6bVx9vrfmsXEsQD96XSpJQn8XLkwFRKvo",
  "key9": "21AYUvWwrUFggdWb8X3gQew15xTUHNGacS5oBDau51wLjhVaqsZv32thyHvX2h47tQVHktALLCHZLyj4e9UqpHmL",
  "key10": "3dKT7rDwwTRP4peC7616Mgma8soaQP7D8HSExy3N1KViuEHTVu3NTnRXW4fq1ay5MJRWpMSciqcjYxCAiQnFLinx",
  "key11": "ZJQhgNVDPo2USNAymNVUEQLiYtuCTbrq2ZAbveorSqbpqMfZqKArQ9D8YfehcCwkJtSQ4NKBc7AMMFKfLRTeB2c",
  "key12": "5MFn5DjRZYnm6zTH6nZgDikbmw1K7gp7QT4byBA8iSVpRq1Xz6rDKhVyV6B3TVS1cgCGBwH2hGMzeS226q35UMzw",
  "key13": "3mcyjFvYniRhQoStzS7P56Uwnb6hMUAooCJjTrF5nxyYTAKFjurLHDn2r8etCi2pCRicTHwFuxnCZzw6iQa8eQNR",
  "key14": "5qUwuBWcftzqzAWfMkRmfBEa9jUdf9kCVLh2AnY1KL7fS4X8Lad349SdtrUJwJ5JHDdKaRUw5SES6std62gFSTN9",
  "key15": "4PHJEMAktM7djn59zsY1VSrDZCd1GCPaJefAKdzc1GD7QrpMGpVuNeXJmfuMHguEWKad4AdvTS3pF9zamEcic7Ki",
  "key16": "29F7r9fiWTtWyDYHqHu8vJorGzX6D3zWHSwHJ3fRrBLXtjjaD12x1CftNLd24wPHn3tZ2N7RKtEwWCtHLJc2r521",
  "key17": "3CjeZjQBqRt8xbscgNP2giRg1Wi8KGuQbrY511qiPPMxGASSpRwxCRH6eUVpRdhZGF1tuWuYL75SiaBzwgiHog56",
  "key18": "5PWSxy48HfMDdkGUAcn3QnCB6FvDRModua15ptceBNghx8wjh9Rw2NGV8nXsbmqAfgpSsNKuDrQRHuFW3EwKJChA",
  "key19": "4GW2qTEpW6PGGQWZKZHfAzCdCewov5dXBPVGWetmqK5eMrF7s9DE2oGmhGs9RWeQurkhbQmYhzm5Jyr3LMyg8bCC",
  "key20": "5eArKxyKuDRRZKompwyJ34Cf1Xn7M9csG4GugZb5ws8sVAnVQH9nzaCBsewTf4Hei6in2xTpYDHaekWm4YWXXhZu",
  "key21": "3VWvt5vq76SDbZ6yCLZX3nZijj1DBoYYKb8a56GwZdJANL1xgZLgpbcMqJzpETmBUvCoKqmaFpFhr47RegsAgWcf",
  "key22": "4dYfg3H1U2hNkmF6CkJAcDJbR8Xx9zofoMKJL9nEv6ikjSDUuCpPugH8RNec8fjgYZgFdV17M4t8gBNjfBQaFM9y",
  "key23": "2QJqNWdRL4KkpaTV2upuQuaHcjM7fd7z1NbP2RvVnW9nXMBH6PEaHURte4cek1rpQg9XbgLwmMZYjLao3AdnuDrF",
  "key24": "3NYGKq25ucfX7vxPKcacJKazSDvJwNu4t8guPhCchNvG6KDmBS5wdehuimtHQAeuWeyMzYuW1YeSN9MiorB4fBCV",
  "key25": "5D9TVV6jGyPRwd7XUpKZxUfMesvKCpQfCZkifcPi9pqtR3b2JFeoBy1fnbNMEBj9FepnMzK7FQJpvtQy6hYkRa7i",
  "key26": "65ZdLjWCNWSj4krhNJqYH9de6nozWaz8JLKDcs4nBusf2QGQQU1gqbRGfadoM7b7BoaYJvzjAUvspehRzzK3xUaN",
  "key27": "4fjvrCx3V9GG3XCpYSpJmxFUuBrobwwHcKpnAsNLExjws7Zy47xKAHccWh3tUPj1ZViKRtn2NY9d4BkinDSdYk4X",
  "key28": "57TiGetr6MFErJcw6zqCR6qDfv9iViK6USc6CBs6jQz4Aaqnsowtx8vkZ53NhsP7ESRc1B5SLhVXexbaHd1ScSMA",
  "key29": "482kcatLKa4vhrVnmKf8xdDqaNxy73AkRmJx2o6cPfMCTEVcsZRGQpU3uv9AvGR9EyEJjUkHvHC7ft8HH568Bzkc",
  "key30": "2RwQU5XuBnDcnxb9BFKhYks5GbV6ihPWxKhT5oAU3xCwMoXYWDppsnG8qo6SuwwMLygJdrz8hMabLK3EWvhMyADy",
  "key31": "4pd4aAWSdBqveHaKnvzGQGJmuhbe1uGMWwt4Q5SoHf3SzjtSD4xutdsyjb7ophNxEnJLpTs5TqHW8Gtks7aipWLu",
  "key32": "2HhfTbNQxZDwfyRZWjQEoANm6eb3nikkWGTfwvnFuMntU1aJ4vQrkYEwsM6PCHudN5WHMJ2kKqDhqWBbnZaZrpp2",
  "key33": "3wjASKptqHtnxYhZSCdr7cDzAu937gPxSi3i32qZvBoBHVUopKeu1SeXiubHoabfTSeHvzL5KHWWTi21duSdWZEZ",
  "key34": "4pK6fmnHgaZMZe1W2aCW5wU7RCPT3yG2fq8VbY1jXSbCnNTChgpvrX7Tk8unmSC9PRmScYNefDb67NucHSAboyzg",
  "key35": "4h5oCfaPahDwEtkxybiYucX6C1EDPgpA6N4Wwndzojci6j1oVuyDYpqbCRbnaKRbGTQypPBEmrAB3aEmMb5Hx7s6",
  "key36": "3oGuvMKn73NHMMeKGrACaXrVeJ1hieXgxPotocbRWg1ziSLCUbP5oAxBMTyVzDHy5gFaUkTvUFM1ZQCinq49C4q4",
  "key37": "2VYyUimS9QPNcCsa39YKNimou3RtRhGUUCrDpuF7AjarLgr7m8zCpkiyRLcLxgTm23psuFA4thjVcJJhaJJkuchN",
  "key38": "3V9YwRYo2P9Mpof144WSUdQqCrhh3QwYuaJ9BXANoC3AVemwURkNHE2QdQ72papc5UhPLErNTwYkhhMfsiuFvBbC"
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
