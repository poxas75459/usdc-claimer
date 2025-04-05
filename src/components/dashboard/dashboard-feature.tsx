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
    "5Esn2Ddem4SNzVTJPUz1WDeECFfZ9qUrn6UsD7dy5GEeMAp2yaSUwEu55fML2t2miycKLawRfcmM2qexoswUDvwg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PrxLvM411wM2hcLHt54LqvBhngBUTroYx3mGrxNy5d3aDnWKkMX1uMSQ4vB4vGVD3QRHY4eWDN1w5LmXzGQctjd",
  "key1": "FuyunMKr9HB1dQbYUkbNDebvr5d8ZPrmnLAspU9gVqZRtMC2vM2okW4cNPTNc5tJEgecmCDESvRn5wxZfiKcTnY",
  "key2": "2KsDdBNwSnL35fsNSC5b6n3pnaEMEaKzuj7G84HU258cpkYLwbecexqDbsf9ctzZuXkQSUUs7tdYKm9Hm1ZYEVPx",
  "key3": "3VCr5BUtgAv8rMNKSLvQkXx3eXYQwD3t8Ue6TV2QzmvwHMR1p4PSgwJxKhxKqa7f9DijaPqGjP2HhNVhNXLoovUB",
  "key4": "3bt7m5iKJeiMLgsDGaHBJX1S1U4mhP6U8hfiSaeKHdLkSisKwBDC9qrhrJoS7DCag4DEZXh9YupCV6G192mDVcQC",
  "key5": "4yTq1v2CxfcoEzcqhZZpobmGDn5V36SdR8kQTzMSfaKinz4XsRYpeiZttAJEGK8BNeriJV4CNsHmiWHS1dzcgpBt",
  "key6": "oCtxNYuaYxYhcE8uXo1AfCywgLm7813ih6cjxnxLpmhVFqHoad3kLDuBgY8Ctk7RgqWMY8ij1Dh5fSc1Eg8Ak5c",
  "key7": "4v2wx9y4UZq5NKTQsH3vbT4jjPn9h2PvCTPyw9uRrBrkE2XX39HAeFu4SRJ94wYDZSz5qQaDP9sbyVnUTGehiCkP",
  "key8": "4NH5WXXcox5de33yNi9NBhZw1MJuntSogdMxNi6i9MwQ1t5neW9T79V4c1U7RKnNL2P2FoKfRJYG8gaKBfwqZwFA",
  "key9": "3c5DhkCZaGhAjHggdDAvhB7ior1eTXKi9ShSQxk6VGjTpfBJPvoFjBG2RiBWdFZPRg4YLWrPNn9GKAubJH83TM1A",
  "key10": "4Y32WqC8zAq8RSwWuVp7ut67aRAAZt4mpt7yx6tQheyZ5aDKAo7cN7z8ripNB46Ysw6CWSHzX9u8KqaoppXPxceZ",
  "key11": "jB73oBmckTR8zkQVT11JiuoSyNyc87jK52WepF5vwXYencJk47PuqMKwP1kiSR8ypCekpnY9vpoS7ksY8sRAGzR",
  "key12": "4vVG7moPAczAkSfoQo1wRNS6NV2QFvcNjPoqi3Le5xQGBoAvaYG6xbL8738qdRFoK3M6xS9N5Q3FHtEJU1NNh8gb",
  "key13": "Zenqc7KKi49TukzxpxLq8WpViugX2QMA9sxiQxDxfmQLZetuE28VUaSK34jEKyrF5crjNhUchoCiXWZy1CBhqRx",
  "key14": "4bC8kFRoWCPmEibvsWeD8ExNCQN7yCASn95yp1iBxr7159wzMzQJn2TSqNj6CAjqHrfWdU6dGn5fRixVSwod2fNp",
  "key15": "2mhVaq1uUz5tKMsZP6o12jSx34NCnnPPYXsAiBXR3MJTkYrpYJzjDt7kumchK9abQ5q7n34AfkA1giYBnwuWmCJA",
  "key16": "5crJR4mYGPZExReX5GrrZitczMyjYcMBRmMX9oWvZNQScRu3S3pexBZ9EtbzDRfz8yiDu3CSis1dvQxUr4aF4VWS",
  "key17": "2iNQJxErWmKw7sRNzKfndZ6XdcJ8NHhApyWAJZPjG1LHrvpfY3zBKpdZf8CWh41VQtFUdmCov3QMG44diCm99hPV",
  "key18": "JHZzeNv7cDod2D4WMRSaDRrpdrGY9SXY8Z1wvxMqbpBudjBFtTPZf3jeAwg1r4kdfLrVKAKUHjCbND6jzjLnuWA",
  "key19": "mgW458WhjSBH1NBU8huAYTzjKH4BY5tarzBqa1KS9kmiouX39rfJYZkXTgAcUDoC7aDy1zKzf4EEgxi5HWU7gLZ",
  "key20": "1vwuYB9C3JZDkW6xTJcdKe7rqzfE2T5gsK3XGhhzmA5DAdKc24ZZMi3SQS4fc5A3fQ7QxjSWc3P6xyrWmUeUFP6",
  "key21": "339YkAv5LGrQhsJG6peE4jZXX2qGWk15wAnPKQi7vXQxwDY43pjHE6eS3CmueCbv6e3iw2egCFAsZHGpvTsq3P28",
  "key22": "5ayoJtmVFLAM8VHoMB3c3djJ3F4Zpt2fBP7Av5bN6KvPSHyQ183ttcCCcZ2tWa7FSRBhsW3UM6eXqMJEBzCYocxB",
  "key23": "3CqY7AQwDkAWpNNJBD117Q4kkKNEHPCCwTqZ3voHenfHfg1D9WQiaw26MsiWvyiks9pQCByoV7hoDM3GiDeiMiNT",
  "key24": "5Xucem7Rqbg5YjaKgtC37fXK3QNTWwAXav3tbjQCjeTT2LnXZDjxsdpPsVKFHo5t85kmePkEGA4hUnPXH57wDd3n",
  "key25": "4Y4i3vnvoxMeiiXAURr3HkQpHsNXoF34VgfnioefaGRZDcCgUmSAWPDzTCqGyyEzp5CBcpSSW3cphQTV4g4xhqqC",
  "key26": "4L36eTTMwBrvLk4xkxSC9gyRHdFrLqFUtCzuAmNCEJyfUTKu4kKrJKzPW8VkPctRowEmdfr1KnRwuJnEmoUMDeK7",
  "key27": "uXVpvAd4q7kgcRU5d7eQowXqQsAUVuaS9FRGWLEoysK2Rvew9N5Q1Nj6hZwSqNUogjXL8gDUTy3wKWNyZu2XD7s",
  "key28": "5Vg1sGEcxEMuFMkmo93bnzhsu1AcCJWvNrAgoEaPdVesnYQtZLdb5bSVdr5cMjbmk4UdGExYKCbv84Prwz7Ea6ar",
  "key29": "aBnhLJhkBFkzgupkUSyjXCcx8xgETEbaDDn9Xpz9K3Yvk1kZCsiHQEjEhGRTyHjdJUzNPrFomBfJoeDvvUBapG3",
  "key30": "3MGQ5eAaGvmHbXSifpsUukW9uuCoBcJA8Aonopw7gLzCZoubH4xEAvgkhDigMJFGwjMYsX6fgW3uySNa9vamWTe8",
  "key31": "4wSuGoDD1jG6WetMJmq5NbMikjYAoMXsJDemDngZHbWkBnW6KCaWFgEGsdRkrFaaZrfzc4LnbPFynWRfLoc7RAro",
  "key32": "27C8TdzfSVW95MMvvnef6uM7vXZWcNR5az8aaP2HPCKoLKkvxNzJaXk4n6BqZ795hHsm2qTknNxeuXz9w33cLGbR",
  "key33": "2y2r45NiAd3s5URTSaks4rMmbR2r15k7RSLfUYxZyjB15xGwL2B6E9KM19mJcg94DuBf1VDueXMGvG8bL7c72Hj2",
  "key34": "2nuPwsLWQxuJNtHds1n9XuN5p8NM5YPAV4Du61q1M1ud2TXDyqFdMvCCGNJjb9FWB1wcYanHCTmp18D8tye2DKhZ",
  "key35": "3rx9uHDJRKNTU6RphD7jKHCoianRzQMtNPbK4Jcqf2zrw7Uk4afUBBPwrNtZFErkTWUgdTp2HJbMrKG99FxxDKSd",
  "key36": "3NfrSSyCpD6SHSfM17UmPUfYU4g2WWo9ESV5TMjRvsjKCDpJYU7tX4XnFBT4KvfuqaYnszbvJ5TNFZxbQbqj19QV",
  "key37": "5e3nMBTSzq1BDZSwthosaFNR3AgtbtDmmQqW8dSoeFyFR3KygfAHeD41SLQgyS1CpviQ5rjxxu9uVBmtdZkruvhz",
  "key38": "5AQc63N3vHdXhdmDcpy3XQ22EaM5uwJaMdL29vhUZ3ceh4ygdfg687evWAwFek7VXNrkos7p7KeQB61Ng6G6b3eP",
  "key39": "61SMJPmpmJKrVmP34J7NCy7YMUK69GcgRtXNnGhxiRc3Rm5y3Gky9yATHwiSu7S55HTrc5rL8EPSV4NknxDGGcyU",
  "key40": "wqy8NVNige8nsqtWyXvmVoz4anRmoPj9rrXKHfvdUyXzn2zaSH7mvveQn6L1DtS6c39Ee1CJWTVeCSbGNPeKk11",
  "key41": "R3WUNaXefiCyF9yoqwiTZjXzz7QN3jmfEvUfmj4VXua3fLUeFU4efd4psqAutW3UuRevYwMsY4ofqem9orFXCYC",
  "key42": "25YoHqLmqaNPRCPEKMuwfTEeAh4k67E3n8Ch5G7ZksfgutGpHX8zuFG5sBfkHuD27KLsD3Tetarie8r4gzMQL5Vt",
  "key43": "393wqijDRfJMh8FyX5bRYGdV19FANdzehyLZnfEh6MoC9VVqaz6XRyRYvpMpXd5x3RnZuqi76Syf6Eyp7ddxeoFC",
  "key44": "4QERb4sto1kghzTFmrXxsGQsjV2F3unUhSthUGSCKKPa9dfvpArTsUJ6GBZxqnDJe2ec4vez4AZcaiTW1qqDabYV",
  "key45": "vC3wcFdBs51WQkwkbQ5QpZC64HdobUodNmFEXtqcg9m1zkGJJLnT26Doz9p1spTZ3PWCj58gVLF3a51DzYgSgV5",
  "key46": "2LZH6gG5cErMqj83acHBBkkJJCCpXpiwobCyrzAYGo7dBuaFPD1M1yrj7ddjRX6n6wna92Cfu49aCLDConTXLc9U",
  "key47": "447GPRE5gWbGtGDcz6BDpiYfMkJA9JQ6rSmqbjrb7KeKvMn7SkJpkvcq4Dg5M1c28225Jq9bnQ3C5mzouMQTfvMb"
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
