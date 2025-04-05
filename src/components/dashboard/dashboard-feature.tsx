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
    "27wxXJN8UDb8sUEdTN1EViDAyj2rwW9yPdNBwBRNuzEAVH8Q4qYNq5WkYk4UyvRJipSMRamfyKoAojCypWJxB4Jb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HoDbuksQASBWV8sySsZyg62JBXgUN5m4A37PYxMLZBnSKmY4Skq6DZdDFJnZBvK8cvTKxqGrh488rJVd2CLxuKu",
  "key1": "UDyiC5SX9bYqM7qN6SKPGL4AXW3NhSEL35roEkFpPBfuKsVWBvch2EsTvXBoQJdsbMKRtM43Q7tQkKAdynpLJYq",
  "key2": "2wwPbuZxPZYyvguL4aFgL7NFw67WH828uYMVuPHdw94xQvsKf3FwpKz9cjQCn9x2FRodBYMVzoWKYktZcMv3Y6na",
  "key3": "WEiVRH9ddvoiiZwDCjEQTzDgK4Q2Rj4UCc7qG11ihz8ZibcVWo5iEZufE1nQwUR8EoFCwfkY5gd7f51soBKuH3E",
  "key4": "4SMphcCd5JVyyfbbwdJEWJZpN6A94EiRxYy8XWj1odVySHCSouQrQDx3xb5q3fS4keMaWfrJPNe6Eq18kr9FZJbx",
  "key5": "51CSBbiU6vzmG1enryvPhR7eGq5cssQkF7qtwcxX6nv1vzSCZyAucM11zwqr2SJGCntJuksJXJMLyQg3NBAc1Tma",
  "key6": "2s5Wmh7CNHpit9MgycURG5RF3vU9AkyZ1JctuFP1MnmvqeG9mZd25AXsUJGLHMVNzuR2tDf5g2dLvRAdf3n5GXx7",
  "key7": "YkpCVt1XTx14yBic2XtDtLmeWe67sY3VgyxZsBYF37kDWXh9goQsfV3sCPu6qLma7EHTJFQLt1r5eJXbu99MDdb",
  "key8": "4fP77c6r1Y56btW5XmwXAKik2T2FSGg7BwwGuagrbjagYjWF3pjG4umaZD46RVVbvr4dyMdNVV3G9ggdPStjWi2g",
  "key9": "4abWzf2T8kRmiuonenAjTVisTHnMcW27yhg4ZxvpzUHtxNmC2APNEgFDfkzdqpccWjngQFo4WYErb1djfVQxYrGz",
  "key10": "3HyWDuuLxL9E5Bi3D8ZUVtFCVrbDuCFjSDYQ7nTGckow6HhNs4dDmmCWUsthJyJcgXQTAZjrMhF92tMdjUB4T6Ds",
  "key11": "5fExDbuaY8XvtJWa3BEFRc617JetzecQRz4H1MynkcngUAgP5n3Y9C3LTpvcFVZ2vpeGhSiQrmsmGgJcZ6PPSvbk",
  "key12": "5NjUFENpfYWu8KMsPZUoJUGYiprNfR7qfRkdfmssWHqiPg16FyF9YR5HiHfeoRqEQ7QXwq1ZUQddMhbhxr1WVpfr",
  "key13": "2H6EBmJNiBuZkxSAEdYPz38kYrj1wJbPo9qsiLQ5SB6yJjnBRNLSf5v6orLJ5v6Ak71zqF2AiukobVxcniyca2F",
  "key14": "4uoJu6Tx5afSuRqVvib5Qahh3ABqG638fcrZpihkkNvFsVJ3DWsZMwWRosRM2wt3qoQNCko9z2Kr9ePSGNZjxwYj",
  "key15": "2bGGwL9dvUKWegs5dbVewkJyAf3PimJRepUyV3DLibaohN1zLMKysJojogprZuxNLCiYRwPxini5ucZxV17emC1G",
  "key16": "3bTVFS3dmrKxSyemACQzaABQxZyX8VRH9hRXPPXu2cUuXXAEPtFQ9PZKapJ9Lm2RQvg28U6EMGSfPmXmXKQULLFj",
  "key17": "65Z3ExHNBkzWJP2rqpNTduN1PWJdd7QHDB4KUcJmxqHnejj7QgP9iHdNM1p3EwwXLfUCrPSLE5DLGvynZPGEpex1",
  "key18": "jdfn9ztwn3zq15HzeAoXFPaXH7ABKakaYvoGF73V51VrG86QpjnKpRzBcSZ8R1448k4D5TAQux9virS2vxMVDFW",
  "key19": "ch4adzHBRKvhfUeRfrnhSABThZdKCdDStPCRU3363v5KEjLpvpVMSgveZtdeVno1958CFz2774NQPWhJ58C3ctz",
  "key20": "2jZDXnS1e4ztmpoda5Sx8VfJNyBGExuj8E35tuFgiByjUFKdSK1TcGfhyF8V4DJueLHdtp5m2AsH1NQcT8Jc2Fc7",
  "key21": "64oHrCdUUwvZ1tWwdKNmqCNGPUUHZCqQAEam6euRppGayaXcxaqp4fpBGcTM2ZPbxKxFDy8DU1iBZ19ZEfyJ83Nc",
  "key22": "Y8a7uKcydCNXQR7QLYQnsLTtcDkqZBcW5SZx34wN21caKftsL8Td2oLvPhLB4coMC1VHmP4VGCm2iWEpP1DxxLN",
  "key23": "66AiroGRH1LreyknLg8EkBM5guopD2rW8mnVznFjcYSxsqyYjkd6m3ctjfEkhYfpD3Kh2bvRxtndoR7qnWZeCjks",
  "key24": "4forFTZkTPaL9JRRKBgvu3P5TZRqUy3J2Ymnyh2qXDnd3ZeS7mWYjJW4Gyh5UgAomYwvq3Zqmn3jdXWbaLkQrfWg",
  "key25": "3tNfTtfiUt7oH4EMLXjXWBwKdPT48bs6XeekWrxVDcvG31d3i5xMppcQXCm3y8cAS9VNxRfuqSctQCuHZwZJDqXH",
  "key26": "2Cc4FNoGgY13mvxUwMqrTvyXEAwUJQEhdvP9SRm3jihA16NZn8BrxuqWF54ZWCS1ZR9As2z6f7rMyuaXVQVs8wQs",
  "key27": "246Tp5gRQnRiQaqYngLsgUghmvfhr8cjHbMRvyUWAwY26UmDxXKiHDMYZZNuSmK5USh5sTExX4eNhYY1mREZFzsW",
  "key28": "25LqMEbLp1NjCVxSrSAv8jtDNDzVRexweR7DvLWZrVq4hwJQbN4evHpTZrgv6cRzu8JTvwcPvZGMSUmVprmLyAax",
  "key29": "4veCHB3S1Lpm2Ayp7ZyRuNePURAp9XYFvcbgm9pLErQub8zgXa1DKo79id3cyAztBAdBpYvqEwt7vGKFkJ4BfwWx",
  "key30": "2Agw6Af2ng35j6ECMY4g7nna2HXiTwzuiDVx84y3i6XYaViVmJCSBDGZiAPogFcZeC68R6obwpcCQGV9Err34hK7",
  "key31": "4vEES7DRk1oXgmFcyB8xik4YJYvMzRroUYtXRfPyaUJUk26fRrHzzCdW3ixV769VGNAgYNqMJDiG5oZzCPrkEgQf",
  "key32": "5ubcNaLbCQA3tDVeoWhAaH5GwkEAHL5p2jx13rnYJDdbmbYT7DbkfxvWvx2NRMuZrKQ1Y5T2tevukFYJs1b1qrkr",
  "key33": "4QiHybonBRzDyvJ8nezfDPa4se7ykwHyTMUAQmE27cnmPnonLdon8x7xWLyhiek8KdKJXz2p31G8n4hmKWhKcwoW",
  "key34": "4XRQ2VkahfQngidY3e296b6axrw2SUygAVFMNwLZTf5TeFKTPyiqSSe4ijekrE8JPRJUQc8d6FRrjBYqjDsnAjYZ",
  "key35": "2cW17TD9kyqty88P854vCBVRnR6yHnUYhpCde1TgrmeLPBusuFSGeHcWiMP4RdhyuUkzefiiyYKX2cX153pAoUTi",
  "key36": "35z6tKGr39dMCc4cmtSZhriRJnxq798943CwY7tL8DqKEJgaZtemaGSHodEdtbedD3yJKwU2r8aG6dXpyLhZa77q",
  "key37": "2f1fydb5so6LUC492txrLp9e7Tcpyf58UdXtEHjwZ6Cfb8yMvpQnyq6aPPrM8Xmz5aVLWq52kGCC6icBnQSoX98C",
  "key38": "3vu5rnBqeJ1b2C6qFztNiokzEh5YoZzgfTznPDi3b6trooq5jv5XrhtbMZ85cTAhaCmCx5PqzvNc7Q6Li7QbwHVi",
  "key39": "3vSXySRFFMqpq9bqd1fUyAmD5THRQYoJNqA7ujMct4y4u1H48BLN44MnCC5jPiLmc5ZyZS2iZAhPLdyPzA28Ziw9",
  "key40": "2SMvtzsi4QBeCB3j7VaAu5k7S1hUaR2LGJAunXEpVQFF3KNVoxDioSoGy3zRzdupbNTdCSDMLNkb6KHT1p4mkVDk",
  "key41": "5pAJHsUfEXjQTpg94eemN2v9oSqBUgs9MxpCWDPgkQHS5ZnKSLQiWTdQ6VWL83624JLywsfqZP6trzomNLi5RhWe"
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
