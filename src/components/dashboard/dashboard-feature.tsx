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
    "4vGpgPL1UEZxEQ4AgZVnS2qSLExZsQDYU7LpQKnS388qSeNsEfw814jRwT7sdLxS8z5gemGQHQRg79JmyRzEf9XS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4S9GsHSDxvCePC3NUWaf2YzKjJwC4QGrkofarPKnPwJ5kGVjshvip7Rnuz16biFVYUwvoHkpenirpSm4svB8ZeoW",
  "key1": "5jkcGXKCc1ovS5xcen4mjhTxAFUSNt4QDAsNdQ6BKWv5SmLEWYCPQunZ3dBpTJmvVYBaZ3BWPdhtLbeNXs2Yv1bG",
  "key2": "46t9HiQoU9BMvK95HQ7ovLDF6Coxf8VgiwG8ZD6hqLp9oUZdVwRP1gSmEdiBUbR8Se68iVCmrFJHLB9vTiXYmp74",
  "key3": "Z2DvmWgpe5MSEggNm33JrNRywCiRbiZfPHi88ERipswSVjMFA2fkbfMzbyrFni7DsRWby7ZA85otbyg11GooMLE",
  "key4": "2MSToMJz8tqaURofbFSAkdwTDFfNT7xxyqGKokcmgrqeuxpxzWXAqn6dHU4MVszNMTgRrNPVx3j8kyn3uWceM5j2",
  "key5": "2Su2a9L3RoCWHTP7qdjGbzueVELZs3TQTSBcFehT8Hcy2hGNcSJxm7UbdGUsy9THbUL16w4KPv3YDvPjoaUh2bfQ",
  "key6": "2v7EcM3JVsmr2reytNRETPo8sgQcgGbMgQDzMdRkn41xGVoK8krZoUkwf2JvKRyiraZX411zEVigKQ7g4XbHTyLD",
  "key7": "4vfP7swMmLKoudUoggubqnfpL3ouT7Tq7Y1CUQg64DgRLg1PeTK3yQu9cE6CUSTaUxZbfTVWoCgmY1dTcERoo9rq",
  "key8": "5yHMK686kqG52DZGXyvtkQpC4Rc9FCuaguE4UEMEzg9X1GSvAPnU6qHGqjhYVYQyL5jSmYu2jePj19VtaZ1vZXzH",
  "key9": "vZt6TUfEQWeTUHRqPhtTW2tTBQyRMfvnPidpWNSg28aEVC3YEWKdMTUqMjHtg8aEyZ6hiRKEUj7JJZFuPBRuVMt",
  "key10": "3AGWvT14fCE5431ZbTP7xmUk8y3hK656zjxzo6ez6pNtgjfLPPEFB7XqTECXvfNHAQfZyCD1rQLk37kPvn9Y8atF",
  "key11": "58cSZvZMgGmkoCLLKSgtMGGtLNGDHkyVsHLmpsMW18hAS5FrMhC6Mh6yRUQUR4X6i95Drh3VRW5StjntFegoJkx7",
  "key12": "b26EndHntN2kmZFncYquR3nWzXvZSt5yRV7cs4VRa6muy5LsjTHTQfjDgT4w6X7DMtL6QxUVnExmBBMxYkd2oLp",
  "key13": "2ZbYHxLKgnC7Ye76WdfLVCr8XEVHcPhz9PzgiacEdTqCUPGRY6f1jNAcVDypQL7yMSwPichPbh4NPwMhKVZC4m58",
  "key14": "3nDMpuXh1DmushxETdqvijLFGALmefwqrVikj2rfgZoGhjqoYWoZKMnjAnFDMSJroqyB3WNzLc4Tmzz5viGbZ2gH",
  "key15": "4fevA9vg7zk8pwimJDyTQLF4mcfFDJ3bMcLxxfDTbuqYYLXJvdp5zmopJy7U9tEbuaQeb8LoLSGhSWsw29mYfotg",
  "key16": "5nwu5HNCYgihr3nDLbEQj2vtvoY9F7h28KWP1J3XEkUpPVyJz7NSQPrMPPcnyyfCsndZN2bEHU8bKWNsdbazwMuA",
  "key17": "4Qcs8W6FKXW9A4vtGwKiC7fw1ajbz61bDpDDbU7F4eKwTQ5sVJpnn9E2WT1ovs1GidKv6fdYjMvgZHYGCmaBWruX",
  "key18": "4q1Qy6dsRCi4j5yjwDhjh84fWx74LYCnXTp1HzFv3xTsSDaXjpeQgawda1io7GLqfoZxS6ZspdcWJb4y7Yji83gH",
  "key19": "4PzpzqqMJcoqNJQYwm5jaBcq6ayseqMnhMmi6GPpoCYiK2V33Q6tw994FdeK4nuL4w5jR4tEj23JZMYc7LqXBBoh",
  "key20": "3MwTZYvbvywLLm3Ne3pYBGQsBVqe97GaXSqymT6bu5mEedBdMmeCeQpD5uYBq2DyWhySpiBAnVeA8Rt1ZWNfEM5G",
  "key21": "4fz6qEfsCg6p6p3ag5dj7EbCm2xBf2oT3iKEPpc6mrmXrSgCExj4FH6TJPC1pNji7SXMvRJ7J5YhZiERh9m8omVx",
  "key22": "DGUfx26miQnzpt2Wm3zP5Bi3XepoxfRoKQiEyG2ZZg6uDCXYuqbRzX9peDxnvT6aaZAksZGtG1Q5areUeBS3wAX",
  "key23": "28Yfyu3DwRNRHUjxvZxfTWT2tGRf449wWKDQBziYtQKBFgfEd5kAXGcAXNy3GUKmwfQsPd8W9WxNVenuyzZVc3Ry",
  "key24": "gUonzMLokgjeDAvZJi9YkmnuKnoM6LwtLbs6zU4do5Rknsws76ZCzB98ofJjcTQHRnSHwaF1TXq7o7koXNTmhDp",
  "key25": "26s3gPgHfFv7n1abPCwaJbD4yPgocqdVTfJmvHUHf1zRYwMZ3c12kV3EaWtBg5v5cvyNULJyup7MQoHpn6yUvg9a",
  "key26": "2JUrU5tvoFDTx5CkAnB12zGXjS8DWxWWX67aSXcrSTmvEFXy7dwho1S7HayiBEj8Ets9BU9AS7kob4C96Sb6K8P1",
  "key27": "2JW9oYiChYWxxmdLhQy5AJDWzjM2LBpj4UgiTfUamsNcJSZ8bfykd2p9jUCSzWu7gkvLuFtcsTjDoaYnjK2BfzJj",
  "key28": "37p9uAYFra3fPrRhAWx5zwixTNvD5iRjzQiXToM8W1e1iC9ekHRh636cZuqrfvQnJzxZfR5BN3osXGozWoUeMrHc",
  "key29": "5teYn25edUuGVwiRw9Zw23DruwsGWHJWYvctYw4cj1H6ewseCh4D7znXBL49E3GxBjGqFusM3cx3SfYVuqHfvQNe",
  "key30": "e4QxXyso4hBniTgv8chvzzWyvVCiMYXqd9hkn7gd9fhXeweXrBPU3g5LjCMgcZ2rVnjU46QjUzTpD2whNsZxk1Q",
  "key31": "HGsT6FGWYzpJvBDaizhv1SMsawCJ2tHMDLxpTGRWtzc11A3zADPrmRT39u6UgpV9mGtfpHpFEaepVPQByZ1C2eR",
  "key32": "512A5AhAZgotF1x69PVGYrg4dGd5da1p9SkqEo5ZAnzPRFjDT639fne2dtxn5rB8qmFqRgZTFgRmvnCUL8G1sT7J",
  "key33": "2ANhPKk2eAp3GhbPuqE7MWg1queu36CPJxs2Pm8ewwqKcb2qXfwyHTznftsGSyKKoftrsvo7vcYu9zXH1PhCNPT",
  "key34": "3DKpAzqwWpd2M1J3HsVXFiMHDSZSeXYzbcBnqpW16Y2oYmSauGdZMcPo7SNERM3ApTF75VZQAb63ctQdXTJ5NqZ8",
  "key35": "2Sy642QAsHQ66g5JNEgxjhRdp6ymXnkcfJ7GEvs5Ci4J1kiojuu3QsarCL1ZtXt5ooTXaYwW971f7WSohmC296KT",
  "key36": "4K7vCqeZ3HH6nbT3jL3GFmNBEKT3DEtGaiaUT1XGFDdGGEoS4ZEq1xdqFHSZvs26oZrt3fAZNzYV4pELVVsf8KRa",
  "key37": "539AorHtWXYXTLhPEaLoE4fhedxGj1Q7uEuqacooW5wDR6hT3C3oMEAJW75k9KM58dT8TqTZLtWRG9jNmtBGP1p6",
  "key38": "5UnmdgFXPuz94cVMJ8Y8MqfvxW9Q2wkZLxLc6Yr72Ug3GjEMmmMoWkQfLzajzK43UaLMVBu1DaE7nZ4nWcZie56x",
  "key39": "3n4TKUvnrjZyVzZ1WGdKL66itfi7is8AornD3f9dXdNTL33bHk2eUs21zKP39QHnNZpwzbsWJeijTyGquEun5MJ8",
  "key40": "485GZH6CdP1A4ZxPcxeU15R546hrYvL3CbcQ5W38UUMPsPv4XqxTVL8HMeHrxbUDKuqr61vpWvNvDrUdzV5BQAgB"
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
