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
    "2sBQRtBvqDtohkVSX6dSY9qAsVrSrZULqKkexPfoFRmnyvQ3eHubWyUqDkpGrc7taKce76Ud59aU4Co3zj4ungaR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Dw1s1g1WuRutStcCyr2dKj5ZL2rDAKwCxrq38kqyPRJZiMANBzqFW4kVHVA3SZBRHMgKixdictxxkyM81DdTBMG",
  "key1": "4K5erAjNgAp7ygCxKPP43PjLon4ucMY7xPpWovwy3y16q3BEG3U9MU42ZBY2436BVTHnPX2jzikK8iPfv3pTBi7L",
  "key2": "YcqDyuyVpvttuZPC1gJ5bXGFjtPWoQpxGuebUdihrQ38WEkYo2YpYbieqZ9rroQqDGDTGjDn348VnL4udQaYmKT",
  "key3": "439vMTmVNEZKz3fuMVpAzJ8TMCKTfSqLLwYxcpF92gcqg7VGuWwyfhWHNzw9gt2opx2Wkg1XAp7prJbeMR2ZYE6b",
  "key4": "eb6QXqBWoDBxfkgjvM2RxxbborCVDhqRj4y7Dt1xfwyg4G8D52amTLonuaBrPo4qDaLhjCBM3mngbQaBkrqJU4i",
  "key5": "45R5UgsFmyuBbsYSUf2oNWK3GYpqDP4ePJ8Bh4EN3YJ5FbUv1FM7pSd9ewWNQ9UpYsXf5f5VadPAkdF4df24ZQcf",
  "key6": "pSVpWCcEtQDHcvKJqeDgoDqjB8ShPJjqLD2aNFNLmWRSS5feCeVtCNzyMCBvfEYNu2Fw3F42W14REFyAVmA2ySj",
  "key7": "KH6bSPcyr5KswLx1qC1Fd5cUmwHUAgjY2mN8kYxDxz8ScFB5tSayaEs3jbdVwHvbmfyjm2Mz18qEefruyuPzoN9",
  "key8": "45HA4JkriiWvKP8NPc1BXqfPCAtziwTGKMbd3ynh4Acrp4UhARGXNutiSe3gkudkgupMjtAPW4y3uAdoV8BeEB6k",
  "key9": "3iqKTtCu4V1y8XSGuDfJHn8p5MumuGikQNUR3HJLEivXeteTwtvsPxZyQnSaVkV5QNncfZndBfYpZ6FxovwT6ckf",
  "key10": "4QPQYuwRd6NMzX819YpCowzqd39Gf3BgUw77hjd9YYz1PuLTfQCw4jg64uzeon3rQPPN2dsML1tMbdMw57hMBPKg",
  "key11": "5NwCPq3LHd1TLRncbvvmgqcPqtMfSf74DuLzaL1JJJvUTvxtgcBqBUNNVs2Sc2Vnp2KM7gRDKZMDYyUVLxwt32im",
  "key12": "5XKrzTbcuL5Pz2tYRDsVV5LHtSS8r9u9GGYJW6GkypYSQvWmpU2Zu3Xq8EJ982tvNKMqooC9uhC7JAoq9iRSnuPB",
  "key13": "3KkuBUzwGJ1CXBW8FQ1YjeDPg1nVu4bdU5d43Q2xGc72wXKG831dgFMV53Tx8nsLjzFNzLPA2XS8dGmhdYxXaEJh",
  "key14": "5U2MF2VziQH8MBW61Wr38zTnsJsWwf414DqkK2E4e95SRAsx3JFPhE8a91XRDzLV77N7Rb1jV3wX6GDLWMqcSzdJ",
  "key15": "4c8dFxAmfbRYLkU21Gjbztvmv4ShGS5pr29vu6y3oG2o7BBvmDEsKe9vPmajeSQFPPQ3uZW5PpV4ZocQxCegCo6K",
  "key16": "4z8GCGxiHZ2N1j9tkxv9EH44Ggw4CtikQHaeUVb6udDM4kGPHKjz9pGxWGRqDk6C4ywwsPMuWG82W5hzL13nmeRV",
  "key17": "5vRQWm5Ef3TraAbP2ZBAkUQj9Rw6342TxVL3Pa28TcoDaE41G3KytGhrta62h7QexncLA9wk3FsSqpZDsQCron6M",
  "key18": "5cFnXzzkcuh41UbLHWHfHoDiahKHd7WHeBWXRxzdYzb6AZvYZ3QmW17zehByvfGrxCz7A5465fz5977bp3BtUDnx",
  "key19": "24rmsSKW5YsAvnQwGdG6b3wXhyAaCrBNHMzr8sJpvtrSVeDpqbTfwtctLDC7vE56KFwJ5nEUaXM4vqZ26TZHBkym",
  "key20": "2KPi1EmwrsqLV3QHzGFP8WaSHanEXARQnNrFpkS6fWhDzsQ7V3XRNVugQQq68f6qiNNQYa4tGwEW56rw6BuQ6tY5",
  "key21": "3wKN11uKSwPeASRb3H3zqwBSDPo6WW2DBLJsR2RDLHBGPwptZcwzPJtXsHZ5iiLEayCYvJgYMz3AUscu13biyb61",
  "key22": "4rQTFChaCftnSmkLKsoG1fQ8Db8re4P2bXDRPbfrBF1z6STNq2TayccLbGyGjDxNaGRMws7iyS3fdh7zne5NHmew",
  "key23": "2rpdARgFSLvV9TCXGjdm7N66jWthmrFWdsKtXXDT9dE1XAhyDMRD9mVqxoWZ1cpzgTXNY4cVdySBFjWchcw68nSQ",
  "key24": "Ns35bCQj1RKfujVz9Vt8oKCs6sxW1E8FZZhzS56noiWFtQteUHRRpE5Gmc4JoZK6FvpKKFSis8K8qvg4XwPgHNx",
  "key25": "DywNYikMP2sS13QU8e62eQecAchdzHRqiGWsea8jLHouSPq7zEnt8TMPrREKCa4y2DFgesERhZxyG8SxxwSSnqD",
  "key26": "63ZnkaUobyyKVEy49wxrtpaX375aUJmg47PZ1AVCGTqGDjHPcPguwsUzYw1Pp6jHwvhUbfJjsTN74UwLoAEHukzn",
  "key27": "5ArVHbUqn9cTEdc82awABbDEMEh1qT7ThuQPbPoNSt6qKzmHhRHwghM9NR1ixQsPRLkbN9QJbGunq519SM2Ava6r",
  "key28": "3C2nPApZhWdQ5acJfpX2Uk91j5WKGATu1bnDTjaTzXBKnAwBg5kCRZmG9bQ9ms56wS5eDdu9HNfDaHHpwm6Q5T5T",
  "key29": "2euEbi2zMSjLJymqcE4c72zhXCSvgT2cqdNWZW8e122YQHgcVMyeNTT1mRHSgMnmXfF5G3Wd7Sb5HNFHAo39M74o",
  "key30": "4YXS2HYmm8uto56rQqhkJxRUtcMB2evsQXgi26ugzxsSULHEWNcN7WLPxSqaoP3FZiXHw2X9k68cJdYLKG6wEX7q",
  "key31": "2mJic6F4c5HaE2UJdD59h7hCLSEapNPGn9oAZNLje1hqJRgwwRA98SdgrqzKkcLPdWBKfxavu474VxKmhfveTMn9",
  "key32": "4Kid1RBoAEiHxqfbC5UmqPcvEkNoPNRjJYwqtyLtgGf8fNeqPJDsrBEGXbMhLFjr7ogTQvzpD14JosbhMc6HkgmV",
  "key33": "5bon8qq6JpaG4T4CZj78fY5nypbjJE8v9qhVZmUmPMTowr9vNg1mR1bzGyvcEwctKRvvkrNZ3L1xadxYHbyggXDa",
  "key34": "hECBrTM5jcKaNJEzH28MqdxeHDzgevGHYQJ8wPxFRmQWyZzAMErvgBFL2rhHS7M8huH6XGCr9fg7n43TyxCpv3A",
  "key35": "5fHY63Lm7moD3S3PFiS6qqWC5y9BBcs5QjJsLi2nvumZrTxyuGT9sTSNXX63G93a8u8ArpikhikVD5JjdU3UwFHb",
  "key36": "tEb3tyTxHTtMHaPSYfCnCiQi9s95Jf5MVJzTDK4og7m2577wso5fNDVd9ygZwjB4p1wXwmDyAh3mNoXeViQsdHo",
  "key37": "61YYPdUkPtxdXmuUNNf7rSeFVePWE9ZG9GtvTdbsaRPLyxEsf1E91bqkYEUKLypiWWnJuBGyYmRGZiPXFUomKFgo",
  "key38": "35G7F5yL32hWidkGKqvDgkyJ4EU9UmrKddu5WDnBYaF3jmL5y2z5XNVWXW1RLPd8dYvoXvBujTaJxqVNBtpDwr2Z",
  "key39": "3hCy6XjM8siWNct7gXZnE6i5QrV9cysUvwZxedc3QjfgKJyrm8E5ZtmkzTBjxN58DpnTfKsYXk2SB9eb7VPBiqPx",
  "key40": "2JNimEzh97dQiFzWKkUY8LS3tudKA9dv8xAhfxNUACDVvULQF4ZcdB49vkdNzhcPDwigqYEGBuuREWqsS3Fb2F6v",
  "key41": "WVz3GJ2bb1hMmGFPLMGZLrmxYaSuERh6DZUmLVqTMiaugZAs7EZZjwkUjXUDB6MaPUUsC8R3wStQNjMjDktyt6n",
  "key42": "2WkHmYrbHPRTasLaQZ8iHqRGs5Q1HzcHWQgZah3bWr8c7TtEYVAxzaSJMta8ZfiNBLkyjQ3z9BJw5CrNECwLTq6J",
  "key43": "2GTEdPCYZi1a6qx7X3dXvBZjbAz2onuYXJxsbtRu3GwqSz2JuXBAWGkDxuGHqPNqxdgxoHZKFJ86vWGNA9tqy8S5",
  "key44": "3sb11Spmywh4bS9u1NPSyszP3Dd9hWUJucLYr57JR1ZaxTAHUUA3meJ8ikjE7fn87DGLUK1H8m9E1WLV729LhYVM",
  "key45": "2kQhCMHKJaKwJdytgzRBhi2KGTaEtoM52qXtvP7HQ7pvyWeisbtXCqLBEaCqdsnR3LbbkcBcYD1LVzqnKhSSmsXW",
  "key46": "2jAQCp49TcgL9tCiXuDC8vbpHcjKMNHM7LC8RLe5ionEHa3QVvY6UrQ8zJc81j8psYHqzn86pAKrMKGj7L6fwHp",
  "key47": "2Lg4VzwQsURBkpRyWC7U1a8g31AdmFGY2fYMyoPz2g1DTnKZBdLtyfBfDFTUVWTfsubG5D6BbcRTeHCW5gr7WTea",
  "key48": "3y7xTyXwpcB6DyQkuFVbKFn4vaggvVKGoAh6seSZKJxCTDGoM5CYj9Ysm6KBeVhQ5cKirk3cxN1wMVxH34gV4e5v"
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
