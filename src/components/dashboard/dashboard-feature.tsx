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
    "35PQzftvqJk6CMoyNBDNhHMJMfEf7vyGmehwAheGa829XYeo4CFrYu76XujYfV4WUSnQPa6FSKNQJaXFmir6kzsc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3efntCDQpWnmCegn5zV9w7bXnWShdEwi1UsnDCaoHAWYSfH8swFxYjEtT6HfjSU4V85e65BkT7WoGBmAXbjGXw3g",
  "key1": "26BpNWWndgiY69kL24fdkkjmQnFWRnZarpvvTRPB7d5Rs5XRaPpgSkbaTwFio18eTC16mKXBwgQRN2L6ed9D3f2n",
  "key2": "5FvNMDsnAUFAZ3FEhYM8wLB1rDFYZ53T8mkZ1cCbqZzRJ597zv6gvdUhgKMbfzMgpdGogaDsffs4vQmHrhytCBaM",
  "key3": "3sfigAwxGRwzVPR6R6PrLRDMiPbssuueLerdaTxKjUS1khVMeFUvhR3382xBGq6ktLpXPNdjDUHgBke3frUfHi7s",
  "key4": "Zq5gihTdsAVzD3sdPmALEYwERz9BzaTquMubZMqVZwtK3o3ZohPdBeEZZdPJHZ7SDKQfKoGXKc6XbFaPztgTjM4",
  "key5": "2EEoih6FwmM8JxapJeGKguvRXNM1EGQbebebS6hjR6zpvTgyUP6coUVuPDiywvAUo8q1S3wTjZpMD9qh1J5SEdQe",
  "key6": "D1MWg73NpbUvqrq11D3jNsPNa1mfvDfLuieRaJyfLZGt2f6Gi1cBmyqud7CJ3ytQBQmNPvr9vKfMwNLCHgLHoZ2",
  "key7": "pr6tuZfqSPfSvCFqLCcrofHTWSMkmN1exLdQjCZNjgzKyeaEB1rkLyThU44gTVwyoDnudWx1WssrDmsEQ8sGDZm",
  "key8": "3xcnsu5KDKQEoNnPzS1BKLtTvmu811AXzTzToJNxTTFghptwLpjCKWykDdpeZ37NZ7n6ZhYHfm9Wj5QtUmpxdGJ4",
  "key9": "5Wps8t655i1r6c195HMrGvPHfHX8PJ2ypA6aqJ8Z1oHWBNTzNRaQsYo68C97AECtVHLRwK3XvFsd5iZiPn61mTpd",
  "key10": "5Vrfoj2ZtGjH2zSStErWezHAxy466ruu5M3WC3J4AH9BZ9KJckhQZmwHsP27bmJosch3frcyo9nFFVzTPjELUdyd",
  "key11": "5dafMrdwgK2esJSSEAikk5ueNNHE4wTwLy6KkPHr8KASE4c3Jx86EGeUPU7ifq6gyQHRY8ke8PgGCWGwdPhBmPy7",
  "key12": "nR4shSaC6i3WUrnLUt8WvbEXBZh9PhF8LgH5XSWbyMLQUCso3eonBbfAoCaa9kno75kMxLHpshT3QzxzSS6zQYc",
  "key13": "5R6vCamougfBZBhwuLtRdYGurNMBvRF4AD6hrvKaGkHLhdzFc7qBSxb25SYBSZniJ4ZVqABME4BN38aYxLUrDTPH",
  "key14": "3eXKTTMMr6ibYWMiBfbYd3qZL5AnLfZnu345u8vHuT6PL2Y4ebzhYUPcAy9mgyKKcAfAG2VkMAYUn1ygaXjLHA3m",
  "key15": "3VddVW5iktJ5Z9WoFy8uWK2TyzpocNwm6bu7Rba1hm4vxSFpty3YAuVSpquMA9GJs7EVQTHLPS15DPzt1bqdRrAk",
  "key16": "4xyJPqzcjRH8BJnXBy7kEr3p66LC8JDRd3qRFzFQPnxdAe5TvFsMHnLkiTFUtHUFF8JEESZie5kKLcLvkJu5EL1X",
  "key17": "3BxX27kYpyUqjTbzNRXauSwYxdCfuCabxTg2HGD5LeHY6hQN6EPg1SWoWcfF2srqtRW5k8WMBJv2TTYgShxajM6c",
  "key18": "5zHdFsNfBHmWQLAvQyuB4HKcESCvkUKbfKsR3q54ogg5Xhe87yHEQqaKnxwV5XhmCv9q49GMBsjgyDedSdAdLAq1",
  "key19": "2zsghKwg83NhCCKYV2ZTxd6GVs8UVR984aYp3gEcc2vqhMyeVqnuf7hF7z97ZWAJcFV8jDLBpocrQwoKeYbwU5EL",
  "key20": "4eqg7B4qDp9DGMkQCAoQevzXduMNKwTCYmLsyvPoSogsRv36gjPN18W1xdSbQugBCRE8scvmE96JcEZzYZHPtSWE",
  "key21": "5L7kHX5qNPT6GFMdNa9qsk4XXSmT978nfeiKvXfhs4uKzPM9d4es1XVGhMFuMMGytZ5vXM3wzkqmymqRoNBBoKYX",
  "key22": "4S3jrVDTRQbcjC6aLmoBhHk5FMmPYnkf1mARv5wfqUeiD7JoyiswJbzt9Lu9rQzzxgELCDR7i9hJ42iA2eHRuNkf",
  "key23": "5Vt9zz3MiGv3rxGGZPtzHTUcdWdMdWd2zaA4jLtfrBH1tWzhYp7ozSkAijPUcpJNyTfz9heWCyFxYAWS7tkvoN98",
  "key24": "3LqmdApCFZW2Rd8pzCLM5bPAUqzRTAm2Jn4mWrjeaTJK61dGz8HccUT3NjiWr7ALuhTUyF9vYEPZPNVWg4Ld9jQ3",
  "key25": "4NfJeS6xZXXAd4u7bwB5mHg7dcoqHqqo93vyu2fdhsFHg1KCzBYbVt15G8q2La741dYevPWsaEebvbLxuM1Fiewq",
  "key26": "2DPSum5MeSREc81hBZUZauAPLAnd7taCiQm3FUbtJKiShh4n1Q3pxSR9DQ7VivzsNYGd669gNjPHsVm1kXevvy5L",
  "key27": "4yEY7YiBWEf6UxDbuRFm3wVPDHSpwnYX2q8U3HGL8hbZ1oPhxHhXaK2MKfg86pLY8vwHRrJHcn8KYxiJYBiR4r11",
  "key28": "3Q9hix4rzwU6GEQDC3EVMTjULzy3b72Vwd5csktkftvnFVX4onwPCreBBFfRHz1iLjQtK2oXThDvqr2r9DttJ987",
  "key29": "2qXSAqBnsSY16VHqmvVZYXj9gHjbPR2gu9aykB6vVSPVQua6RSwAeCdURXuC5hYBUvRZfu2pEXcoDmVTyX1Xapzm",
  "key30": "3y72EYAt8YA9xHoto5gttjqKmrZc2EsRVsmmbEZikoLLmEYdT25zAikbtXLn1DR4btCdfcCxcPuV9n2Enx646RJL",
  "key31": "59DqYTzL7DhTvSngpYegvvMeTZwZ2iga5R7AKJL6jrGpPDFJvrCa2Sicvon4YSStkWEbukgB84MNu2Q6hTRPpqdY",
  "key32": "32DtcBqxi7M1M4pxCzjQxrkbDtwE8NNnKmKAjTzRRtaP4DqXHpaSDGWh6RTPoV5qBZWkAyGUQ4vj7kuDyDeux3FG",
  "key33": "45ZjHZtZm2s2gNJJku5GHDWQbkMdV5RoaffV5GvSV5XeARZm9e7hLyK2SWBSMW5pp6SLL2xUsjgXJ4gdw2vAQm36",
  "key34": "3WeSBJgz1ruDFGgFH8X7jHdAz7iWbwo5aoMWcz1mzyuWZEMQzysEVSzR5HUSGWKV5wGV2R6Nx1fcarwQgKxRhaK5",
  "key35": "3t3ATNdzb2EyFyNRHYfEKUhZduGXbsJyY8vCHqxrWPePMmDqgGHPFHK496bdD7Lt5jneovqiY3pw7ZgAXr4tfwPm",
  "key36": "3yH4RFub8pFomkCbtUnoyXEm78J5xgoQ2R4VYxET4MioUZizpWFw6yyqqSdLhXuysH4VDui4izpU9GQzGRciqoqf",
  "key37": "3y5JuLfYT9ssWcafqghbTWGVfFTyfqH8mTM1KeduZxYcKUXTLeYpSLPcUDLUjPrqmH78ftRDMD4xFREqRPareEgd",
  "key38": "5hL8pJhSHcL1E4CyuJY91uaYhyraN3nd4B4vaDNgppbCx6qmPWjfuRHn58r667L8yWYfswKK5NsxVD6pkv5fJQzt",
  "key39": "4fFs9aDgRJGEYcYSFuK7tijkjYm5nSNYB8iq32GMBp4F5TRgby5ieEcbXQnTifmZVdJqEXAYYtoxx9tYb47KCccy",
  "key40": "3PgoFLhzYwmfqUvTs1GiX32KNrjbGcB6CR6XzvjSMLJEfgBKPC5BsUB7pU261QFbwtztPP7kdWQrFG7gEtTmmQED",
  "key41": "ggzLaLd8QNU9iuB5uYdiPUv7e5Zq3rBj68Mci7hex3Gs8ZrYp2gA8v11oZYzRbAUuTYokxdTSUf4GN1WBUJfkkR",
  "key42": "5gMJHwaekhprNGMgcFUjn9uFd1fmicw3TbpubmpyvB7N6CMecjTJcoHDAvoYCrQeCu6QegZwHZD8Dmwjh4Geaz3j",
  "key43": "4YnGdfkPHjDHXwUf5HATXPDPP2ganCDeg9zHFTFmjX74h79cmFzwmkdfeprkhU125GcBk6is3t8YefAneM2rreyt",
  "key44": "kngG31Y5J1aXe44we2G8DpyNP6HMM5xJSyL3gNEmSBPa6WJe8SttawhTxjpritmDnim7PvxYKg2P9gBE3SNPn3p",
  "key45": "28Sn4tZJKwDqgNugAoejpFNe6syaYNGDF4Lw6N6oCfidpnk8SRhAvUXe7o7Ec5HfESQsTwconAdQbMHYarEp6gzk"
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
