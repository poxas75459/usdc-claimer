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
    "4nEVTcK6yuRjxwCW8FqjAQb4JXahYYr1b5agwa8jmEL7VzvoWKG7vP4prMbeqiw4qMRkPgkpEDx5BhMA5Qg9BV9z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ue4X1o5xHrhPshDhiPN3ipwJWTgTnyu1CTXVkqrz3kyPGQHoyhfpdvpAecmjwxEXRAxGia2Wor8C4fkLdJiY7Un",
  "key1": "272zu29WqSu3F14kpSY3tuLGvJtrLamzzTCLYs93JPeLdg7FpiwNrAkAnkqHvVudgjns64d5GYyFYh1Gt7EEnL8L",
  "key2": "5P2rC9Jk2x2M4XwZCGBYhY2zt34eee3KZqyhSfAgcKxx7riq7QG43JTDVyJJQAYce9pfc2fubY98qAfBtzRDhM54",
  "key3": "wbHPD3JCZaHv98n631xEAF6ZMFsfv3JTBzSyj4bQzgvkMm4HuaZa7cECtQii73Nuy8gaek9QZJVPM5Hpr6iDrnf",
  "key4": "3ASmMHkNd8TpRub9t9p5oSVs9cBcJfpjU8BkKVGw5rmThzPUgqyxU5yUbfnN4fg8JDPbU2TtNHyGiDPRPVoDU6XC",
  "key5": "5zdoHMFppKDdDokuad3JzvN2sEViYTc8LsgGV61awwADzcHpgP7ipR5KnnGRrr5WBFkiraMLUuY1Ghc8qcfjPtcL",
  "key6": "2gRjQmxG5AwZtTcYJdya66PiNbt4Q1N54jJYf9qbrbWPub1i2LZYsnuv4KW47ayaJ2JRcMYzya1KyX7pTvsuCr1J",
  "key7": "4QNe2qr9BBd3d9guFWt763LL5cR7YfAYk43JoR32XfnNzhXciq159m8zDoE5z1sTLq35fNhvPfiE5qBqVScbAoUa",
  "key8": "2b8QDQfRKtR3EEgbGH8sYdDM5ZD9coHFqtsXiP1uKMz7VNgSzdBcpuyxW2sAhrbBqKKpZkLuDkisiU3vSzGdo2xs",
  "key9": "FWM94keZ41Mp2F8acN9r3CzCit7KY5RfqFEgk1tbS4nqY4T1XLiUwu6XLoavLmAtEUT7guCeyF2xf5rpZBFbf2M",
  "key10": "4msMSQxwno9yvRFFNZBBh5xJyJt2AcV25wivQaAzVHnnd3P6usJBLktYheXU6e2Ev86nsCWqRd8b6rUDqoHYWowW",
  "key11": "4voHsi1psBeGeB83cYUHBv2gHttA112h5LpWRxRgoTf3XmbAnyVgjLZAsCw4NetRUSTLXaridedvL2JZWehQLaBR",
  "key12": "2jteVYhaFF4hzEda2wijrpNQtaUEzjgoL6AK1kRQgas2NBZ6QdKpGB327EDSdAkAsyv8EzXr58qD9KWomPcLtHY3",
  "key13": "3jGCowTtcQ95LyqDUseVwm7hY7vnfVrgjAA8JRRKqgWC4X8KFGbTNeusKG8SadvpbuQU4YNPWy2tpfwBBFYP3VXU",
  "key14": "g4GaUmpDY46A6bLFbWNyx8GAThMZPkQDokYwowrJzh6keNQYvMNQCpU4cjUxFfc4pQGptkvv39SQzhnPyFrrn5P",
  "key15": "4iExKFkm7mzL7rQN8jVo2Ljg8eTMgsRkg1xyEjiMSkYzCmUbGqN6Dcruo5idNamtP8ZBHLLZQjfxvuGbyJ7xVRHf",
  "key16": "259hhzDGASkjiUANJk5rNcs25aQw7ssKqfexs2B3KtvoJRtDDDm1VdPxQT9EKT2f4ed9tu2zD3Xxu18L2bF1gaHC",
  "key17": "4VTvfhnjPwEgipVuzeNVQVdpVkW9oYb2V52N2zh7UpxjDWAnrpuys8WTy5Zvefp4938LcTjVBFdhPKJX6U5VDxYt",
  "key18": "42uEF85e5X6vUo5zX2HurW8bBMGMwxBWfF6VReLyzNTERNWS5Rsoup8EmWZNd6DofVrFuj53eV8MDSiQKuQuGSpK",
  "key19": "3nMZVAs3gbwqdAnqWqEqszz9z1Y8wgcd7ZeYSuth5qxdDW32bhnm69zx5eqUFSeKt1C7naZbmREk5otg1he2Eaic",
  "key20": "44UCDCLr66xz1TXiGfA89re37HFxqYguCpDR4WeUe7iLSw8brwuzRVUaHVP4wK3u4DvcDdeKGTJj4PymcFW5Azv3",
  "key21": "jn8VjBNiC5ecEuVEHXxyudAhnWZKY2VXV4RYmcP9gyS33Zq6kSu3LW4mg6P4MqpYePnZBZxmhFT1D8VnaVC4prQ",
  "key22": "5xDBrisdXFA6R9dssqBWPpNBgfm4iW6TK1DyWNNcM5L9KzdL5bhYz7MhbabirpiXMzn8yWbAaE36JpQDZwZrrXTM",
  "key23": "3vWKK5qQbwjtTWZab9qwc7qHASUYarjX4nUJqAduVrUeGHyUKC3Dr52t1gtqFhKPKYyE9NmTJQmqR2iNBMqvKooy",
  "key24": "53AdoEsT9Z84cGtw6GC9cuZNu5gBzeeDCL1HsEwcfBH2Jp5Mv2dE99UNHT7KgDEfA4qLWgePEXTfXjW9EXgcM7hD",
  "key25": "3Kddmp8vrweZk3VRYRsKZtgZnmHhKtXnQ9isNDCqiXxZy542UyAzwZNTqpHxTJ4Y8UaUrBT691FNZVQg5AED1Bpo",
  "key26": "HQePCrKT9oz6KkHfBVDakvDVF2iTfijvjLezBb81HCas6DdmFUuNx2MPjN35tQfNz1ieGP1RXtoYqo4RJboeZyv",
  "key27": "2asqEuaFkMNFHS9nDFV7ehep3dp5C23nWxwD6Me8ZPMVmNxJiqs54F7aEK5ikxeN2dSh4PqpyZ5fiUNBwukTi1pn",
  "key28": "2tN7yUh2NzprpB2hT3jDFWkjtqBqqP9XCtPyhvzbeoNfvqN2usn241bZP8BQgko9PPfKAUNxbaP6daiR45Y2bovX",
  "key29": "1nSsgNSfoF9sMe692ecWnNd1jMxZ37wVhbzvFqG1uQfrGV47ENdthEP93peQnM8pjQYdRNUTxTyW4xEz1zWWQpP",
  "key30": "56Xyn1pbbmG1aQFLLTXdv3aUUfB8DzCvQLvcRdjsX6vAXq1oEkUFUpmvDRVCFXQtvoZwG1eUc9z1agN3L5AgWKiA",
  "key31": "pznunzbhD7Hgq5QjRceMiB6qbXi7BAcUdJ1QgVR4dUYhwhv9vdkfusWY7sJ3TeYkfjRvKaJWt5wQpSjUtEnrEGc",
  "key32": "75XfMFRL4dKjN4TwkVfkuK1zaZpwGTpdaya4p71S9CaqTdLdLNHkkFhbSVbjZC1VtLBPhQAkoaa2wUtnTZ3tkLG",
  "key33": "2P5m4gYTsVTDxjMEJZPTbUCTKjigrbhv6avKERBXX6xGEh6ChAbSTPzyoxz4j2CHGuhzj37Lk7tdQfJ8fVxy1K86",
  "key34": "2p4kHjfZJeT669ycg21V8cDKFkHemeeTCrRfscXPd4q3Uyz8Zd9DYyME32MaTjmJEK6FqbiAE2kVPqP6VK3b2jxY",
  "key35": "3QKP8Rdy2L2z5NrkZMGvtVsKktWzeojBSPwVSKuXzPZeZrYWuAd2DAQ758XnzC4kjugQF4zuuWX2wQ5S8LJ4SLw4",
  "key36": "4r5drGFeDczMEYWgAr7SFLF7gDvXPmcY7aZE5nHdUXRRmTTMxwrGwGsKZn625WZwwhFnJzCm8C67HNEWxd4HZuEu",
  "key37": "rmYc3EaEopCLTYvmxJoxvzQjdUXQFfVx3Esr6cjhVCS3gngXaB1dGwZJQFLRgKg4YGWRCXQYphofoK98mX2c2bP",
  "key38": "5wateYou5yP9mHxkdzdUghzvvzTrYMM5aeG1NAxpd152HiiG7TNzvnQmggrMA9BJhdcAqyVtjq8iTaQMseyNDvQY",
  "key39": "5H3utmP6xg16h491DbxwTgV9jin97Xgdcci1SduVEGvhiimTLbnr3mW3mdQxNQSEn36wLk2YGJkSFtuwoYM9yB5M",
  "key40": "4ChF9FJx83nJHsykf9QdEodFmGuriUzdm9t1QoBdDbhaAG3k48Bqyba6EEnJadRerbkukjNyWNfhiwKjdNNWSSqh",
  "key41": "2XnyQqUJEAoDkrtma8m7xnjqDkNaFcBPScSetFLCNXoMixHsjUqVMhf2MsPs9foLTdeYKDp5rocMyUQPV8V7wv4B",
  "key42": "6uXL9wEQJZ2dKVtBVq7EmzBmVicf9SiDRmAVMpcHX8rbM27ydyMYZK3L6pMSkfbhLuPApmS13UdbUx5b9EzzxH7",
  "key43": "42mDBu3SmqdNhx1WqqRmMyjWg3Z6455XD3yhQeSxFYjBjBzaDhiRDwFLoDMLDwUro9o7zEguFAcGekQwJtu8Z9Mi"
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
