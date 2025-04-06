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
    "4TBeHzRwpCESgLpj4i4iZb7MWaeiAWaeFWCGRbDW3C73BEynM6h66f9B7RMWRcyuGcdosHmz9EYUEDcHhXYKcyPZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4H6TR2r8ALgcakkDHzS4HGNqHKgEvvtaVwE6EGLafLw2iTzpqp2roEVvZzedtajBpH6ZmqBBrcevdH2xeR6AQcGv",
  "key1": "WGwnLB2aLZzmJku5WyiWnvanQ4Q99Eft5VaVg5AoSrM2DmeMwiukjkFTjLspyJgXDV21UF9t4AoHXt2WDdQtgFC",
  "key2": "VQ9m7zmRBRML3C4yPrbU7Ea58FZXeeo5SpMsLG293fw478arfzichWgPvSyFr9XzVhH5ezWu5rtMDVkgeXxqPYX",
  "key3": "3Hpb43snsoUkPj9Yy4DY8gFA2mpwVrP5PAeuJaz2P4rgBc1vrugcadMr59A9gkk3sSKwDWEYN1kT3Ed8b2fQaxRT",
  "key4": "5ABSbEMsb5NwDVHCC94Qx3nWQb2x8FVvF336vhAUqbppjcmFUpLSPL8EDo2w8jfnqt5Nxs4Lha6DJbmeNjaaaMGm",
  "key5": "5EcosscqkT5XBrFbPigqDs575qpTCg4U2F4b4WsYe1u5qD4apkLPQGrv7st84bHTvwve1TwqwRtB7KskqdMBfnBf",
  "key6": "62UAL4bdMBGVPmoiLhpYkAVNKugZEbg4GgNQNfiTb6dAysFNAJga6w9ZsE2M3az72WV7HQLiTN46wLTc9pDTwkXA",
  "key7": "4wYD3oxKUbzVB4aJ7yZVvyHBusEDbwYXr6dckgDubRmph5KqRJ8otfmHtMxJfEcdTe1dPA9jLCG1nS4uhhbvXnRF",
  "key8": "3gyRvuWyuAWr1TDTbKJ3k52LJvmTWsHrpYRRLTzpkGWwibuywMQQ4JQFRgkhP5YAYDgVRdt9YEAKwNg4mj97Gwpy",
  "key9": "4dxGAyNeCpabE2NjeL2zefwZYnm8jRdhJPpDQ3VD9scP52zGueevdbfnAQE7vuH1t1Egm5szVxqu7Y9f1FbTrBT2",
  "key10": "54ef87DdzahicKtvDJpjKcR6YXEBf7W7rFtqE7NJrMKZGR4gtXJd5HmoNUdE1h6Q8ezWFXQekizALLtdT8hqhEZL",
  "key11": "2xx2JsEeRYyr54uiMAJ978SFmkKrmTkjR1vxXLiGpYAQapnJweCVC4EZGnJdVWmiFxZY6D3dfDnTopLinUcxo3qq",
  "key12": "5738ErkKMeW85EAyG1srhA77H4v7GhmB1xyXf5mYoNbHd94PQMKmq3eTHXyAepGKdNDaNamEGaDopd68zjmq8PxF",
  "key13": "gcpBKtTJwcJB3rsLhhev9CYmk7TLW2HYqriSsT28YgMTZyEgsU7cxGD82NPsmyBnuZSwj6SA5ykGrDKHuvn9UCM",
  "key14": "2zzxSbGAtWnEtGtwYops8xnUmPQCzfSbJQCrEMH1KkcgMggUGZcepF1DCTp7iRzsWxyB2LUqCQ3Lgtrat2W1ht9V",
  "key15": "4oaD8cZvzCWfG81ubYSNp1XrBnBSRLH4dMJVj7GmwXzwcK9e72w9r3Mn2uyr5u3gR75KJcvARD7Wu75LFdgnL1E7",
  "key16": "9ugtCHznnK9Ug9tcDbkRL4saqcBdVZ1mKnbfay5RiCbioctQuLdr8VJwUKj7rvMjNqFRX6HgGUEgA318JRPUxjL",
  "key17": "2TeNCvFrM8BpqdVxgEhBjQUApqZwMV9HdmsZ9SCEfJFbEFEPUaAS6wzEcttwhdba9zuozZvMqqdPNiDss1WzMcYJ",
  "key18": "5jDFAuawAadVmDQMkNCV44LxWni3FFQmPNMjgretTwaFFsA6Ph7WgXcQnHq4WwvY7VyRYrYtoWWLpk6mxiKMyT6H",
  "key19": "4ah5JELNiMVhrhtyvDmPko31Vv84q5jKbGd22NDBfiaetz7kLowVHdkGh27BZaJCVHN31KMVuMgKVoDEcgwiFhCC",
  "key20": "4n3ucYq9t5ACZEWxzBXTfDa2wx4nS5G4J4SMtPF8xyyRvb5K4fzToC4yXHJFVs4FTKZZ56yPdokMBbZ5BPfMVsMp",
  "key21": "3Ex72ounfSdVrswqC9xUE1dAALSbuqCiD5nrYooK3uUeqRCN2Wztzo5aJv5dZ1DvmsHMf51DGeriisHZxBXNMw1M",
  "key22": "4JCNQ3gARhPEd5Jq4gQM4V5FjMY8g28Uuj8zNgJsq1DvGVyFSeHTq2hkzeqKTEeEGHxZwuzd21EmumK7dVAFkQgw",
  "key23": "4Nxupy6QehfX3aPtzvK6Z3mPQVSGpR8pB8a7fsoRqqY9SsekgDkhm4G5VvTiEYwGscP37ELngQVgX88WhMNya4Lf",
  "key24": "4bSHyYBaprYvvmEJKrMedWuoYBC4gfnSNV3C7BqbHDRy1Xqb3DuEtYcrxU5zhWxJpxUqDPXRV3cvGNYe5Sd6xM8a",
  "key25": "2xQjb1p3KSbVJ2RWZXbk22CSSUCPwXgqBVLKUePvnQ56b8XjD6fZhXC6Usv5wYrNbUwXP7zQzts5upzZXCPYGc8R",
  "key26": "3RZR32GXfouhB4jWGqFwdBHnFuKqWaHFsYNGSZtryEyZYQWjRa78ZLd9vtXeRfvEuMZKvNf8Q6RGaHRMNe3myoJN",
  "key27": "sFJQwX2dEwzu39sNFfZyF9PWS5Hr7yZaJf9VVfjCg2eSjk4GDE6oB5AYGzdsZ51uwQzFJuvFbWgpBCfA1t9Jm5Q",
  "key28": "54qD94me8RSibUMkuV2EZGqXUgx122kizWRiKh7zvY2CVJ4CNa97XLaJ94EGp1NyY1VvHNmH6wUM2JUjwTQGowRo",
  "key29": "219muF4cfuhqV72pfti1VCPpC3by7KnAZZKje8fhPrbWoJka7pxf328NHzvDGEZE8SFe2BDR2Sn2zNHmyHK4ezcv",
  "key30": "3kCWF3FGrVRyj7p8Bby9hKuSfRMQeCLZCFqLQUkrXUoTfP5zWWnDr83fwDoHEYmb7xVH19cy4Ar3g1js8aBqQoTJ",
  "key31": "4bMpFGVSUvaPSswwSntfQqVFD5bgWNizJd4itC5Tqdajmt356m9vyChSphCmPG6TpVg5DbzcnJWkDCDqv8M7SCFF",
  "key32": "4KNn5RstidDuVfPnkzQqRqhws5rpbSezWtMvWgeaBACSLShXeNYUH5Y4kCor3wZ29ywdap4CMtnQ3mv8KpTpmF2u",
  "key33": "2oaaHPZZq7ccwmSr6MzxfF7DCZffibHRS1Z1CfgteWUcc2wu96TbSTDHB7fyHRgeEMbthas8qV8fxLN8n8Zt9iqc",
  "key34": "34Bp5i2u8GGczugZavh8yKWDnUkYvXjj5vUTpFtPaV6zYFfiZGZ8CfXDymWkQNzGqvq7xnLDJvZYuNPmCmrb5VNC",
  "key35": "62z5NAhHbYTDJVjUCdQu7smKu8Sx2DPh3Uh2138Efc3P6uPN5WS3TMZSQpA8TFHUe3FBfZXumyErVkavvV3fvu2v"
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
