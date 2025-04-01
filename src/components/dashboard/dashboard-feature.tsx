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
    "QMw6W615egLWpR3MrWTKhN2wvxM6ACdUJCpuCP77DFwgyHRXGAr4nSsCC3N98mpDNovKzufzASGjsn5kyaa3aJZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NgMs4K4F8coA4syvYusBdMMrCw651iQoLXzGYSc5ymPSPJoAwp3E5ScPUZGZZREHg1JJURnaSVASmzoStBtfTz3",
  "key1": "5Qfyvu7cZedgajM6Z9LKpAS3AewD9DY4b4WQ3iv8qDjvMnLKUJS7QcRW8bDk33zYGV7PYar2m8qj5mcDD4nAiFEG",
  "key2": "47FaeL8exkA3HmmCusSbxFyuF4Uwd9NEf3BKoabGNQwr5hcXmtmHMXFpKdfmo7qezmsnbmQ8KeFaTv3QdVF27bSd",
  "key3": "3oszNTV2WyhH9kDu29nSUSvMrYHT3kLZ6YYHktbBhzCpwCgAcfS4d7s6SnBeDSxmu9eqNdecU1PU5DBWhqRREYws",
  "key4": "54S6i3r9nSVagV4sftwSQPjHv1TEs3kP4poBB6pXB1MNUKdXUzmiHm2tyQdqSTax6LLAgkYn6K9yq5sXFMHDrJ6a",
  "key5": "535djttHD2woCYEBJa1Ycv3KoRpF3u6KEjs8JsH6Ao5aQdsDmPtLqabQPByeGNPZThF94RrxzgmTCdsieoqa4Rcw",
  "key6": "5i1Z13v3iUe8NsnUM7miBVF8596Rxd4f5PbLfonKJMBcccwyQHK33VMhGqgE6cXBMR6arkb3a9JEdHi4cEKtt6tn",
  "key7": "2B7u7HRBT78X1tvJTjGe4QzY6kUZYgkJMN4pDX2D114h8932gbcgn8RR5m6cLVMVbS1b2CFxLJ5LGYzpYGpCXtQ6",
  "key8": "41g3WCFA7RDQ8dZJ6o8PYg8xp1ZvucwEcbLFHjZPKw58VrrMMqFbihCE2sUnrzJ3MsdKoVfHJusp9ZmaR8rXDsJt",
  "key9": "2P3a9GxcFnSb8WTD3wuQ39r1wVpubRZfv3WeuRu1k7wGdwaPXzM21k9wU5nHnEsYfSPz8GhATqJ6TGRNmJ8zHrsc",
  "key10": "4PALAWrBguSr7NyzfhmP6o2cwYprU9KKw9P8kweaq87gpjE3UdMJm73RVJJo7CJzjqq8AHzP66bDyxKG3RsvxK2M",
  "key11": "o8uME3dB1GRex6PEFc5C8AJtFLsUNVe9Vbxmkd9hCKovADdgyecAq6Wd7zZq8vKePNHu2zk38mZrYSJfuKP8JSF",
  "key12": "4PHHShrKWW5ZahD3r3vZujb6vv6xVR2MH2ULnwFZTEaRSncC9vWSFjTmBZTdgK7TJ2unF9QSvWaWE1hNw5srm1Zs",
  "key13": "39Pw9ZrvRdmj2vcprTsvjPTLpcLfu4nn1n1uujCkgrRdg1fpUTb67xke2oLZUZqCdpLqjCvT8EPe464RBJdoAgfN",
  "key14": "2qeV82CMUtgvvnsSLUiUSiaT1xP8Z5qyWvXdwjbSiSe4HN4N1M2Uwk2r1miKx1Pj1oh98fKq53TG8KZtnWQLkQbr",
  "key15": "2QEtqn7RHiWuv9ss7iJmfERAMDnGKY5qFVKcDgwet4Xrx1eCSWNmLRR5wXw31TVhhdkH3P38VrWWbXkhbQbLjCm2",
  "key16": "61RMPAJfsJxPQaMq1ZUdEsCEuzULmQ4BUhvikTwHkau7DSrSDfuMmmv17RLm8QSDK6nntQQFVnWXtnWFgGcUPkAc",
  "key17": "4fi72JWC9htcNAcfiDpTFzpN49U2gPpcnyJncodjAjmN4hQ4foZs25BFS3UaU5ZEgurhATT7CnxWbwKr56r9iLh6",
  "key18": "JM9aLNuheaTFo8z5UPSuAcuMb44yfXqxBnorKCBMfX8jxjuyAVzhVxCsoHpuaY5t1Eiq14HSP1HEKXwgv9oeE74",
  "key19": "5iAP3GM5Ajp3KrcJwJDDZnzm9M54qfR9RTRto9dNd7qjuSXYbLGUVHFT9YZQVdzxJAwuohvFemLL8z8fr4UV5ARZ",
  "key20": "Q3bttQHa9mtHdMijgNSGTb8P9DwxcwDjUkTkJ36ivxe3RL15SXnQ5X84JwWFVXX8Z5yk9RtBdhdwb71AZE48erD",
  "key21": "647aFJBJb3JbWG34V5U9dHyfWxLuW5yhVomCzgfz4nAYBZbDizFkj4ZHuTGuDxrAxAQmrudVeUkviJCHYgL9uRvA",
  "key22": "57PBL5fU7kxLpTcLRxYQhdpMhNBy652iUsmRHNDi68iLRvGvBbbXf8knn3EN5T1cAA9ZidfwN72U5t3HsgPycB6L",
  "key23": "5Pkj9bXP3URuph7tkgZdogDqBDhtvmffXqJadKMrroi2bvVF8cSAh5EYfftGrXD57toed5c7v5GVsaame4Swy3C1",
  "key24": "55bXmreCN3zjXp8eYj38uG7QBCUimWRzMgZfd1QeRQiDnQCtamurnFJ9ywX6c1eCpng5WVSUVeDS9kErLcnMmDLX",
  "key25": "2XZNPE7pNjeY2MD4RTa7xf99S7B6xHL6qkmT2CnQtd4FhHXUd3qVU5UTBmx9RWG6bWHbdPgbe9dXfRLVcFcmKmAo",
  "key26": "48866y35gA4K9pH1fubEewGFUmeApjyE8bF1uAnsp9yrozvDi9PAVPsdxE3BduFAe9nPqMr1zHyug71hBxuyxy31",
  "key27": "4BaDry8nLhYmzPNuvk5wMmpMgQxaSQk5cNjsVnooNnvGaRsvax57nTfKxKgaquzApgJnp6fsgLizodPSES5p5nXG",
  "key28": "c7r1gxriF5JEgYnuRZU7UJ9m7kRcRUyxmdH2Z9wZLRJC77BCwQC25cmtdnjXJ3t892LehkNNeBo75DuhUX74G6U",
  "key29": "3f1Sd1itMtPb1LYHa6vepiie32agXKZetuByFLraEr8y1aMcMAhNNCV53c8ywRicnxJvYXA44UmVsCfMwUFwEM8J",
  "key30": "3Xz49xspKrchsc2LfteENoqoRy9B2vtDmWcUTVgxRiSAWRxuow5nYSfEei5QbZs7qy28Pmnq2ntxFxPcF2V3gnVW",
  "key31": "3zLv1riu6gqF4V5Bw47xGyz5KR678KTkhVkkcNrYJMrnKxuQN4piZ1spK5c5u678fawMKEryAeXciADtmNXEVszL",
  "key32": "3TQ2kW3PmwccrTXMRFHHckwbamW2KUGouyQSUhqVT8sTMsj47H9CaVzD6fq5WP2znruzcgZpURXfpKE2SRVX7yrv",
  "key33": "4PeoKuQFQJpNkogU93dvw9jfVWaVmb6v1LnLcsVM577gqsBri1627n1ppXboKF5VeuAn5QyWaEijZEotu1FTXhyA",
  "key34": "4oBMWdUuKWJCCkEpWnR9v9yk1jX2Y63A5rYK7Qq5s4FKVTntFnBGsqfzxXhcNScczU11gUVr91V9JMJR1DDj49Mk",
  "key35": "5berSqQHt19j5TABQSrqJVzzxUo6a33iJYowoaZMtgxwXDPaL8wXbNjPrt4r7qTXMSnnbVpodYsQHHzbrHknHifY",
  "key36": "rNECCHveavgDwAd35ambdfpryona6MLkwt5Q5sQfHenUFF5m1WP2eZsU4urh7VM7d3t8bmFzoQccAba8XkDU9Kq",
  "key37": "aghJhN7h1R4X6WjHQt9F2SD74QXCY7iFQwdjsJjjNBvqnf2LuRQ8wBHYd1zc8b4eJipGBX8rtXqzJEsnBABWz9m",
  "key38": "f4pW1f59Y81QpCNBfEbwh1YQa8tMSTMNYRm54PULhCQA9xJMYJegATyzMAGtjiuTM7cL7HTKZxH8CSX8EKGxXz3",
  "key39": "4QopjKRQrQNQrzfe9e6o7PBfQCke4cnhbkH4wbZVAZjpiQQuxPHUZQFuBgNyHvznKdKb5q8Q26vjfyBzgS6E8dQE",
  "key40": "ADxGq9KRMts8r5mxeCWJBmsYmvRqicoSQRHLWzKLSmzHH1VPaETurkrPaH54joZfCHD73EBq9NpDap2o6FpkE9G",
  "key41": "4cxaBbBR8dHnz58iieAPsoJNV8nA2zcKaxANu8QhSjht4CRPoPQkQHigWS1hcQD8TyZXZ8fLXq4cZLx1oUh6svK5",
  "key42": "ZnjbN6rYsPF6obTLzcUPMyBdiWyKgQu2J86ZRpXYdAvG2TRuLVx7bBqAdKDNm5EFkySCVTj3CUH12ZRvhMrmGhT",
  "key43": "3jfubYhNHqFDK8gxDvP7T95mgepSvHjeqStCshWxUnTV4FZ2kKGCuJ5NJXE35xAtqipWLo15Mu8CuFbagFM6koYp",
  "key44": "38qL7HdY3WuDLPbR3UWHmcaE2CRNUTZBs2bdBniJn7iznF3ZcU97herY8WA7cstwFT1UzG7KgCq5Pv8PMYGBjGbx"
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
