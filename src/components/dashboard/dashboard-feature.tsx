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
    "64hhqEr8zJKVVjPkcweP4zShGQFKCGWp8PVCn8nKUtjGor1q7Aumi1qoNUWszFx2dPn5CQ6iRcdkZ4t9hZ3BaT4e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43Gfm818joXuCGCwiydkJToVwiGkU1KmdworQTLoF5oRWSea8CcKvGzVTYNMoHZiVUapfnMmPmdxSMp1FWFEppRK",
  "key1": "RH5yc5gBHVoiC94UxqAu4CtUqMPyPNz9TtjyWbQKdoRMpz6JnmaeDptp6vrdFEHqaS6vdqoKubq2KFHjkbgpT6u",
  "key2": "2XdqTBsbCb1YiWo5bsL1YDhnG8aS44jbe9Lr5Vwik16NNCv26BcUdkJ6MmsgmVYCub8eDj4krq7gegYTRHronwT9",
  "key3": "2pdC9ez1QkUneTnghw4LbUhFGE5jUF2EXyZZdEBnhNTAp3WrbYKd2Aazrtq7qto8kqwGGQzmXNVpvQCpc89e3mqW",
  "key4": "2nWMTs67DaBNA4GoRFR52CpZC4skQ93rfX83huvY42CWBxWmdiZphw1zbVHAzHx7ovGRxejq7aa3tP2afj5MUv7Y",
  "key5": "4Hpgxzdvqbn936HYcC8WSNY3sHp3nAuZmihUpoyr3Grto9m9B9V61UGGPYaKEgswSATyhYpsHQ4rHmicVsBLPB6C",
  "key6": "5ERmp6e3m47ERCAXPbd9FHjMwA6mCsxi5z6Mv1YzPKFatW1REA4m3rsfMLEayVp2NGMb2LwUGbhehN8J4SP4VUoe",
  "key7": "5uim6HzYHMSAnGSwfREyR64qwoKGiX1VokeucxrwnVUpnJQSNK1RYMXZjTuogp4h8cN4o3spy9yYhihcwuozuKpW",
  "key8": "d6jFanbw7Nj3YJZha9A1AJmrHYXUDmBj98ybJDb8kaSGPpjLCSYGB2W7qe7yfsPT9HoucUFpS6qKQgsSfwGcsi8",
  "key9": "2Lpm5nnSrtUhubdGGy6gi4xM2QGFSEJgZtoeMnWrFRKu1hvP6MVU2EoiH6edth1YubWaQJb6FLeSAFrF82EmrCKU",
  "key10": "4zCdrUtpZ2tfPhMpvMEgo38mxwmpgs1g5Lx7Lr2ienwwE2KuxVM1bedthRBTs7t77vt9hgAdxKK44YMQQwXFCnfv",
  "key11": "2LpSxpknugSLN5AKgsnyHjcnqbgL945NHyPzPZ9ko6LVkgfmmeoV23mp7gS6mvnDi3ebxFBdv3jErU8F5NrDvTyz",
  "key12": "2pTXDsJGZXJLYYLv5WMKbvrR4iPDaRXxFnSTorn6Q2CTE5G8EfcbyzErcwAWF5r4qZCRbgWh2Tvcm6qbMkxdcVtA",
  "key13": "4rL2ZWdQmBzmsMTWmTfXd8rVDT9CUWeLGPe1Xp7SPeaig2CvAyy1s4SjjTpoj5cyfNcaGPmwKatRvm6jmDPFfdA4",
  "key14": "5k4q16gXuTfzTd42yeBeq3u4Eoj6ieiMqBg3zRKNGBxHo5GvnGGY9Awh4ZqUnSv9C21f9ZMdM1W9pB9y6a2mKSFy",
  "key15": "4d93YNwFT22VMk3MyLH7sSyCFL7k5WDb98fM518yN3h2SWCkrHSjMQyncJkuMfDrv4EVibcNej2zyU5ztnbKXYXr",
  "key16": "61wFzpBKLyPg2qFfxYqQDbsA8zHQun5P6gucWAhwVEucgGacBYtvxqiU83RuixJ2aNahJbBGSrzJETAJERFm48rQ",
  "key17": "iPek2jU6jy73EuWFWgECnfQeznrw9SHZUoNv3FiAnKW7y8Rt5DoF5j2UjFYpEWsWpaPSRUmiNDeVyq74gQNyVK2",
  "key18": "5cC2ikHwbZu1pqPs3FvY8AxbJLkPg97AkDrUyhwCRtNxHHcnBfMwQm3gfAdZhopSkgmFV517UQrfe6quP5xV6fx4",
  "key19": "5x7DQtgpir1SbRoJwHFRyoa5zT3EJDmj6yCU1Abzc88SePGTsFdCkVBjCNZADxLFjfpPYx6UAhuT8Uhzuf8yg9dd",
  "key20": "471wv7MiBzxq2vAFiZ7Zs9LwURoQAWBKgQQ5DWbdhFZiCLhTG9NrsCC144aZS6FJnQb5SdRSAgJT5jERZSE5AHFo",
  "key21": "4M4RzoiuLSYKakgSKq9Nph6U4tAJVV79D7wHQoJxhTfavdHXc7vBHqZcPkaC1YhwFyQSTxg3GAM3o3Gqgj5sBUy2",
  "key22": "H8szP3ZgqvqZm3ySiYEusansWzPM7UP4bo4Urn2L2CrtAaRu3ZuTpi5fsPU7iZUep3k6hsrfC7PCFU1DH4UmncA",
  "key23": "4wLwHFs29ZWuzpHgrbWa9Ps8c5PNRsA9cptRCM7x8Lcpo8FYSjVWZcqyoJ7kzedaEVodSNCDvnnPuU694GiSqmby",
  "key24": "3U2opnMoA364DSoyLwAuVrWUzDc6EYrnKVjQW8xxwcdVsvdAv3CchkrVf6HdMbXMr7je7NaKinGzS1kzJDfrs1Hi",
  "key25": "5imu59yKGx9eb26fCa8grQai2RHfLBV5bhpRFoE4dHqUnhafX1RvwTY84ZVEiHjKNrpyJGRbz24TWZnKNJ85ux8d",
  "key26": "5R19gBKnF9rScaLwH85SBBUT6yAJYmybNwLuo1Hu6pCQGpoGiZSfFMr6uEv5iQFVuXRC5tWjd6bEhgyWoAXMQsJT",
  "key27": "mEKtvQX9wuHMX7bcsJdJPg7CNzSrAkNJPUSudtN2f13S46zSgSWmSWRj4ucHnXyuWDXWVmYwXvBB3bXGNen1NJr",
  "key28": "5Jp7b7xKHJxrX9Cy32EQqfuQMkRaEfi5XfPjD3GcFvxYSJ1BHuC7irBLoYxFghvvncGUGvHcxrKwaemy6bSe3mA9",
  "key29": "4EgYk55qkV1WBp9ea41gkcGLQ4H1o65iykPdZXyoE98bT4rRxCqhFS5t7znZqfxkGeUchGw6ofXDWZrzQULgrMT5",
  "key30": "5da6DcRtTQtrJdNSPVK7mJh3cKdCYmtwYhA2B9TTZhXmLKsJA8Y1JpphzVJLGJSwrf5QfPcF1kiePR2D7eXkjqGA",
  "key31": "88y69muG1pEhnezoMix96Azy6KPmwVKi9fejCvNB124fyAqj7jHQSFtmjGuuT57w5ERGkhRVSyhjEwT9gXrukBy",
  "key32": "2r2ih7RPZPqBKuhTJPBKtCUuP2621KrJMv3wbNpy1UYJX9NpimEZcXRRAnY9fBieog3NFsBXozkou5duqbw1fCoA",
  "key33": "5Zs1cqFeoJ29gHFzdEVYC4C74osMNKmPCtazDJmoZurb8KL6f8uL7QjQey1voCQgmB7ed66uMh8Az66uD2XcmWRd",
  "key34": "3dzV5ebFLLT9g5KdtTGqbGHqL1T5ZZ1WxjjyjM39DEvWDfi2oBcP7H4xT9L68MBHDRVDoQmZnfbBdvTUy6jdeW9U",
  "key35": "Q18Mrc7ojHs7ip9aXf5Czt46La4DB7r4z1Kqbv1MR4ZUDqHbrwjYQpy2Qe32gs9mvH2yy4XpEfcAiTYDSHXZ8Uf",
  "key36": "F55BJy2QUBe6sFV4Nh7ykSsdPXu67FM9TEA5qkLFwz2L3Luk16j4EQYgw9LdwyYkVbab5JBkobXoN1mL72L98AX",
  "key37": "4tM2YJhipvo8a5nAmy1gC6ChgzZcMxvdDnxYGjpbsQ4ySsAd2vY7fKGQbxLV6nYBCfdR27sCLkx6h4dkwDT6UzhY",
  "key38": "4NTPQ3zhvgbF3E4FFMxWSU36E3Lx4yNQgJE2jtwuc5fbpQFJk9zhvxViMPe8i1NaAJuZ8emawnETVhoehX1Zn8AX",
  "key39": "9B7mhWKGnjn1n1xaipnTjzWC4ajXGBiPA226cCxiUmQ782Qx5a2bixBDnnMcpQi8oNd5TZP78FCQ4hfkVgiqyZz",
  "key40": "3ZaSmXxzJ5dUbg8cDXXUfT8DYaFRG7cLAPBs38GnwtJEi2HRgCJXgd581bJ8vTqWjUj1NntEDramA29DFdJpSjy4",
  "key41": "4PadY7NFAAHjYxMrQshUPZ7JRKPYusxWM8WvpQZKTeTqst3FjuiYkg8xE4mg8TWAAaFk11HcrHeqCB9cgDqPY8Wc",
  "key42": "5iwuZZAN85pHDu5iHnQgfA2t3v5U42SBEvoLkpbK6DR4pZHPqSTtnkbjLqgFzTvFbJzv1rb3iAhsu4ME1dfy3fTf",
  "key43": "2oHyX3uKeKSkjK83rD2bhz2GoDhduPpSYz7BMVUsEEP4mYPAqFNtc3JJx4Dsf2iNZQQYTzUHnXrak8N3seF34cmN",
  "key44": "3gKsCAoAb6JEgUcMXyapX1UCLuHZo1wv3A7Mu5QGVy7vdJMR6Jkzq486A75ETJ2FmS28BQbi1E6QKz4CARMshhXy",
  "key45": "4FKHL5xYwSNwb73AHvZiq7QVzmr2Txu5x8T8e6gt68hSdYcg6ocYspvvcN4gZfDqyfys838MZndvLxcSkNvFhb6h",
  "key46": "3baiGNDswi9UPJQVDMA9xwKVRK58XCUs6QeSsxHvHawuPgVjU96TEnp7RW9wLmP9Cw73PE2axmQxGR6fvszakC3",
  "key47": "4reAmYGigHrxfx9FFQJvBmXb4MyypzkKR6aU62cfXkRnVpbwcXiL6Nmbj2BAfafwSofkFpqyNmiCe35umtdJaBiR",
  "key48": "4qoiAKHvGTXAYXeSjE7whsm73nroAXzwLCP4bbgcF8cVDoA8okcDpUzg1skbcJkRpuvvZPwQ6ymsPd4qgpV6t4b1",
  "key49": "5KsNocZBdFFw5rjGwzeHYKMG1z7zLzPCNELJUvujG24w6dXVz5sctrHDpWEfaENMpk91jWetdJNhdrZh4jjfkPVH"
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
