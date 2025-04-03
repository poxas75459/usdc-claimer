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
    "4B5SbGH2iWRjsfAovJdoargdGJpgjydEikSmc5MeHn3XjRtRZ6n9tFtkoSerkhVLur6Uikfkz72PZr5zzUHDovJy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CBWXecRYqzHge4PcX9HgF4MqKiZHM3T9GDvzPwBXsqyUcY7BVv6Lse9oXJBYfrGVYH9WCVmsWfxt4XNmLCi3f8T",
  "key1": "2bSvYx43v4KQjEb8y1u6ojeqzDDbzz5sXEr9uJUDjn3TDbRXjiaHSiBnBD6NsjetPeJpZqmjpXoDSjk2JsjDRqUj",
  "key2": "444qS9Dj3wwnD6CkFyzmoqD13k6HQZXczSexyNYGjmak9mkRSfpCVX2SPMqgLiiSZDVfZy3YHihvRpwh9ogbCAqc",
  "key3": "2RsbJXhpTu4zfUmKbje5WEwfrKndtXV54kxgxdNXjY9GXBc1WFw7iEuRkyKJ7t5c2WDWjKu7iSxLkabwFiJiMucz",
  "key4": "8KGgS3rE2Rq6Lz1KESAghd1u5ojjeBov3cHRtTXWEm1LXdkGsy5ZAxQTkJ7EUADGz2kg1mJtwxyqNejfboSyvLz",
  "key5": "4XZYW49sToQf7doQZjC2CzT7EiuhiexPQWecDDhnATZfVnPE7EGy8DCn8crPxjpnZe5w5hhGwREoF6cHT9o3QLiN",
  "key6": "VRWJPhrMDt9SWb72GxeKxGRessjoRDMMLBC4Fytsv4tA8P1R6tfZSseemuL5abDEpQg3HonrFJdF9XUGdxyQMFF",
  "key7": "31s1hTTEKmPyjvZ4VpRnPyJuMjMviL57KG469aVDWPMqDdsXvg31uTu3JqW4DypViLLVQTDTK42CdQJZCbJfrDCZ",
  "key8": "63SKNPX3VU22LDBmZegGYceA5jtw4iMzunrQYJKyK5agA2B9KMwEYVayvSmzbgG3A3db8trXFuoxvNyfCSppVky8",
  "key9": "2zp4PfnAvsCTy7nrZ4XYjRoN4FvFimrQSwihPLvWcJMm5GjPoFztgB7XHLdhsM9bvhgCkvbypuUxpwuq2xMr9ei6",
  "key10": "42zLqyDyU7ZJM1o6GpP7R8WdZNnYkPLjdE5jwxojN3sFo7vTthtJLEqQ6kUwkcXYr7tzmE8Lz9jDrmQddvEL1eZV",
  "key11": "513G9e8CHBeBQpsxKHeLQwStsW3EMzE6J8VFAfG1efUK7tUaagnvynJsRypNrQgLTB8mEkitAKSRtKQbaGKgdLuS",
  "key12": "SBC2b6KgKqhUXaey5QCLkLKEMWNRJd3345mz62DxWtoxWDCPe2yRpo4nh5kk9RM6HC7sQtwMUdu7574QXmzkinn",
  "key13": "5eiy2QbuB6Erq32VhFxM5pmsARcZ3fMDmGNrBamzg6vEKLNB5UE4NAXjLrkF43Cccs3vDj2cVnHELgAaAuzsGtjm",
  "key14": "5ExxK211gXjpBTaeLsm7Adm53Q6pPtK8PDFqAvAJxcpvRcGFT6Xv3FmPSuBFuonNHw7EPZ6nxoTCsvaLCuFSAj1Q",
  "key15": "2uxtc2ZbsR9dUTxqapPM8zrAqo4ktxt4qdiVXgdK5Bd3fsab9tcCxzHFHdeChkPAbehw4JucMfDmAvKqYNpkb2vr",
  "key16": "2Rm3szrpLKpEJTcUFbGynBWmg5mrK71M5qt5Xcc2iQvjadFJA5XcMtBCKQMnNrMoRHxbPkfvGkoCEndfC4Hs6d1Y",
  "key17": "3YZSsQMrZsifXnzKZtYBYdywVAr21xk1zj9qi94SboER1JrLpZ2zr9D73P6812FjLMhAaARkYNidbCJDTW3pfUrV",
  "key18": "5YusazxKzsmqPu1s6G5jKGkHEVfzLVyZWBF7wkUBMYg4njGaXo8FHzUajgaAv8ies8gx4wqaVKAZnCWdVc5AWoUW",
  "key19": "5e4bJE8R9yhZbhe6TRGfM3YpHYXVcYxFyUXC8cr2S2pyBWMRewDZSLZicF4kbMAeaVEJ9CEepufTcKXVvJDPhiqU",
  "key20": "r2EjSKWYzLTimovUs1EH8TgmBF2Pka8AwTcAHWUdAQ3E8ZXFYu9L2jWX9pbEX882S2o27agXxaVf6Kihqy63kUt",
  "key21": "2f6cAioJ3CZp32JcdAgXzCCKXszdbkhAJK46mbNBaMi2jrQc2365k6uxKTv3qEbZhrrS2gNWi34miQf8cx9bjKgK",
  "key22": "4m2JhrurrmfHTBPUuNiNddZ25kh5Yadfu96dvrx4ogayitFXKRFDSHSf7WveMCjufmyMA2rgaMpiMU66SdCCaZEC",
  "key23": "5QjZ4NiLJ768s4yhdkcmmd6Dpuu7UAmdHGhgMoSCeyWaWrRhHtPGuUeZX9AHKXPkDiJF5BQZuvxD8zKdZ6gGoVdi",
  "key24": "GjP6JMCTL7K8x5ruWcwFBY9LznhRFVPdhC5wLm586Psve5nK16cit5B2WCHXsYwK2g2u4Gy4UncQ9iSP2WqqZbN",
  "key25": "4UJWfHDbieNW5LuNTWTz64nKjUSHGRCz83Phq7e8vbxAUhPmu1gQjTv79fDBEUVhc9hpRnnyxWxRJFxdvaWWsFRf",
  "key26": "3s57KHrEmPqmLuTjWi5Ejvdnaj1Czi6HRYg466DbBJXnzqPNTK63DdpaLAdyx3GYrCY5upCdGeFizPEgxVvY2Zrj",
  "key27": "5Cs4GCJTDkCnDGSPHDFp3b9JQQWhgvPHNnXVaWQeHkCcoQf1GpqXtSwcNVXShtPqzEz9tWgf6bePzqQZ2gRmKSv",
  "key28": "4iheD6WN11XPexuzAKKpCVgHhHsde1mRNVJTarfFo25YtBe5ZAaBFyYHSzeTe7UoTXEUhzbjwx6sifcCY95Y6hph",
  "key29": "2TpE3RGjUZRpRzBBNmLXZaWJ2kHRpVoHDaSjbD4be7ofSn7RVi4F7rGUURQZyrXp1sp8kFN55KeiWKF5pCZGbjsi",
  "key30": "4EUQkh637wCY7j2JT2zmJWE2KvJmyD6tPAKLFpYom4SeU5shVxHh5DB4jiJgP6PUQaptQL5zK6T2Y51QCSUQrERT",
  "key31": "46q45A7456zQAc9c2pV8zTmgNrzN7ponqYkkxqgQXExtCVcVYJLAJ87WwFCh8Pwzuaqev2SXAYuyCucBGv5Wktb7",
  "key32": "3QaHYyt2KhcS6ASQESQrAwYozdmRe2kGzT5pKfRJgnAa3JWRkysH6usRprgtNHNNuRZyvkEWsYRqJSmkf9QaurBk",
  "key33": "BX4kkoDiDb4yQdwm3A7w8D1E36UmpdgsG2MkHSzCq9esheEg41goRYEzZTsQLje814rqKqyR7uxxfvTd3FdXyAT",
  "key34": "2oQNBbbQVNTojknjxDmJ11TqK8J4mSgNtTxnyY6JFN3GxAhCcD9VdkYAoPXPxkyVWtpXymGL3Hpi3erZXmTMYARG",
  "key35": "3ZiyPZ1EUEaajUsV4VAwtsXbUfhQKW86zDmAD5HgJP8r6dssqW3iANo7AFJyhchzxqDYVB3yYKmS5zwwi4yNgwnQ",
  "key36": "BCXDEb46KbgET7nf9SuNnvyLvqJQk7Ltghzin7svCvGZwtoq9VJgvmPG94M3mpdsUqpmGWkR3FSagKhLQe92xrz",
  "key37": "54kNuqiHFddZpKCkrPxqk1vsoUVohXZZxv2Rf5YgUK4eiq2RvNWJ8Avovhp5k9bZpLWK2vp1Tt5xwnjvCedmt2dy",
  "key38": "4wVFqm3fHcvZTgw8q3UFCd217R2vwmmV5rsXmWhkmjTMDKWJmG34cv4cz5wr12NedEzDyDxbPVJKDEV4WAy7F5D5",
  "key39": "5xUgRVvgUQrZSUV6RHAWNm9tjegBVNJeMKaDfxmjgvq5TJvrxsHUZjQLuYZ6LUJd887ZzVNdycFhv2vU1KhewPQn",
  "key40": "sER13BGchkzDLjFHE6sc6gJtXCxb9ZJ3JYP1nM5Ho5UhJSsk5ZCeZGGWrfiUb3wYuVgh9HjSdmf6UYSaPZUfXxY",
  "key41": "4DCZKmwcTTD2CdJkne61JsvH6KhnZAtBrKQJpywd3Er99PCiH4mPJUNevWsgL8BSaR6fCNYycfUeuT6CEEP6skJa",
  "key42": "3h9AxxEhqDmhvfqpGVNWsTNYcyW16kfPxXBYWg6R8p3Q3NsFDGx2rUYiT3gzmib6GUd1YF22bzX1rAwWwvN9ooSu",
  "key43": "2qKyshJkHinLpkYdzfUHXgJTBKRa5iJ81Y5BxBUJQYRT3X96T2HgBEiJyK5jpeXEeBYQFEUELJNoxuLGEveZftPP",
  "key44": "2EfWQF8bYx5XoBAYUfmYuf5YPjfBU7boU3XoPbe5vpSaWuTRVHxCgJEYTogjaAFWeWzMnCuXLDLS5usnDC1ZewvK",
  "key45": "4CWJZVrjfBo1HyLUh5cqq2rWehRDbdMH3XAHABBsLppXsnen9nwov34egkHtTJyV9F7rc2uSqMEXpX2ojaiARVF4"
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
