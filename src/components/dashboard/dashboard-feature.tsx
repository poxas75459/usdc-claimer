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
    "4g8QYWw7rrRYS39fcK1uvULFVz1GoUbNQiEJhCRyrnXUrkhTsN6Pde3MNHmECT5fcHw3DGKpMkw1TbDPn9nRrN5H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3w1oqPjLxRN5FB5274KHUrx7CU1vkYWcouNLcoQJwnVhFVbNHcomprT4CPQMTbvz3xEqhkoiFTKa7Tr8iEZdeaLP",
  "key1": "2vUc27Ke2ZAm3XiPEbx32WGkz72Dqq9ivRM3yzJJXbHzzp7DoTd2iNs1J9mAbsPiuT65LYmp1qxVg2yZLPByim1z",
  "key2": "3SKguei61JyWp4bSVLNYounJEe2M9cYkmn9SK3rSUvcKgeutJFTFPdG5cJszshn9gX53zWmhtdBGztBjgQERbg3h",
  "key3": "4PFrEcjrX8Hdzv7sEsFVQmFNyBKPQrVn578b8Rxmg9eVew1Ycz8hbV2Y46CnbPiFkrMGR9a1PdRNWi5FDfaiUSx8",
  "key4": "5jjxsdSk2LM3W4Wo7vx3WVjDDYQ7mbb9ZHphPC8QhV6vtnwSeA9B3RVQvaHKXbt2NwTKsPAuyAywY6vKniSsSBmr",
  "key5": "qdsaDTTgYjePJjAPi7JFMRqXZoyLKwm5gC7cXJKmJ8wS3XhuWAsLPksbfoce2We6xCM3aB88xRXF8dHe9UbWHUj",
  "key6": "333umRWkLCc9smixTvCoCxR7gWCRrcyZC5WWQgPmhpt1ZCB56DwNR8HM44BuCyHHzCizQJeTsy9jRYUhwaJaQnfp",
  "key7": "4ZSXRuAuTYNjaCN1m5DvxXj6pS1p6pzbXgizg2X2hD3MLpMbpSuDfCELJHukDSfN3FWE4YQByKZxKJ9anYZBC4kq",
  "key8": "WKeF8dEjE589Rx4J6942SVhNsKYeBF1UviYHAeVdQo3pxgz2foVdAjAtni9c1VLFj17zu2XBXREUauxCkJaEaH2",
  "key9": "2kopQtXuUPXmNNS239JsfEiezpR6R8noCTaXMpwC68FuQhFdx4uX5Cu7PepHG6adWz1evV6tu3L3AiS32D7SvgDe",
  "key10": "gUq8sg5qaurKCnedVdacN2PpAGamnDyTEkCJ7LdvCzLvCeBPxNkhaHrgEet3wzskPszGkLGzecZ1natQiBurcgt",
  "key11": "4NmLFjobXR9vobEwvEperhf4M3EfPm4fai7RRVMWx51hi5v78k2FmZcZsPuGjR4LYf5qZgpjTeqV2QfmyzJfHxbR",
  "key12": "2yoLGGrPKeFtLf4e46MrHo2bKJVX4wWEmVG3Ry9s5QrmGu8m3EfCU95Wy5MctoYc5mSzA3tXGhC6PDWaj2GR7ii1",
  "key13": "4H3fHQFPVBfUNXWSdFPjDp2bcFFD7u9D3KxsmjV65NaSktW9kYaQbiwQzXAbHYhJ7Ukb6u5M9pYNDoPoipxayB2s",
  "key14": "3EPnoqkK7vXpoj9WRibrm3vR5JoCRNMACkchPEcbR76QmB3LVsUft32sTwW5mJn8697hDj7DfqXy6peGFVT7frXL",
  "key15": "MkRv3J1iPFkWbp65vG41tjsdos74gVRwNQRYNeC7QixBio2UXXj6EwTHFVBDLsqWNvPTp2UDefY9QwzGnZ34SrM",
  "key16": "VzRhC4dHYGT98yhpt1XyHrDhSpv5SuVmwUEs4ZEdFTSZ3Wpqgb7iuZ4Kgjj5HiegkJ6Jj3FRpwjDUKpe8Np99zR",
  "key17": "5YwcQWkmJPHoH5b85tgqaCqXLKpLU6Q5Xsmf7iw6KPWrW1aaNFXwEhk2uDiuiEeGefa31rHqveDstpbawmoruUBE",
  "key18": "3kqwBGXtePdpeQtUbSj6jNDcvUUiNKu6kJT5sADo1a2XDhnWnWPaJ4WwWYNcHd1f2c3r1ZrUZi4hpPN6EWgQLt7H",
  "key19": "3ATk4ey3xj7Uf4h8gA97i2A8b739WEki1wiLM3fC1sPAzNYektxh53XtX9gBTs6oWm8e69pkJRYugB64EG1Pie4M",
  "key20": "554DG9yPB82Sr5X191AmjHsAvcBygoNu1APzNSqjHrzRBM7s1XxP3njEGBerM1uL9VGprWxbkBhsPnzTTSEUt7Xz",
  "key21": "wqHYu4NfGU4KBW2XiKcLz1y4jDpMX1Qw8XzWHSAqBVQ7NkfBJBQxAZpSVjmokZstxmuVW6jE6nGvCb6E6PkDMXV",
  "key22": "3jt3XRKkX5WBSe5Sfqu9GWenFYEzvN4g5pRxAu9i4n5gVzeirKNKjVr3RJ3KyH2xJkifMP67Fpwakb5KeEAdqGTq",
  "key23": "3VpPR4aHfuvXp1KqVFufyHnrdCad8U3yYFjcyTN3RP8bAJK6RB5gUj6QiYRrKzbGBor9ZgAdHzgohLqrWRALnnLF",
  "key24": "B4VMvKfvMbThCEFMPaHT65VKHTgLsgJpw1PV3k2nyzqR31zZcWRT7jw4MhTrordVYqfFuahKfdHZbR7z7LEkqTW",
  "key25": "2b4h8YBVfmPXxHsZ4SvcB5UB8b7KfdgqKbiEDZ1H23X8Vui23CUmkpEHLE7AvQG5gb8ZmsS8poatanh8Z2uTdF5p",
  "key26": "4YsJ8YsesPAtXbGqf8mXG4VF6axALaicpnvAf8woyj9MNAPnqVV6PqBJri3ms4QKMNKXFX7TEUWZbk8yJoov2e9v",
  "key27": "6huThyo1jNePeXMX9jnwTa4RTzZdTTSXQ8CMJAyyL9zbW9mG1tQ7r6ey6AaT9Nee8d4PjUmDGK4VzGa6f5ffL7p",
  "key28": "3YKFwXn9Y24f4UudXeXNY6zxFAJVNjG5TMpppydS5g792YQ7UDdCQQSsL5QKd3pmhZSEHMfHxVeTWAd21rX1ZQmM",
  "key29": "D1hAufSi16Gvk3sr5BYTu4bHeh7oRugyS2WxVykjMbtgq8rJNm5ugKRmLHBmDL6jHm829E9bmTE6Jk6rzTWwTDr",
  "key30": "4WzEz5QZ1E441os7SHRjjbcQkruj9hWfNmw3YVnAcNjkDxhHBTcY997gU67uUPdHHmkE8aRQqfWDvcGmpNtXrSNf",
  "key31": "2ykKWJhvS2Vn4uzsuGFrKygMrhcSSu3b5UGwyYkWCci6MAyS4td8WVG4NEwhvCVdvKsHFDA2GbRZHtzpHRY6ATZi",
  "key32": "2bS6xhoXLeU7UMrwrTsZ2cZhLcSX6V4zCQ2Btyy56xAppzne2e8F4Guv8BMfm3QYRRbVa6h1DLqKaoZWFEzpuCZ2",
  "key33": "4GCWReA4iLmSfbgKiQzaAmHCTNRmwmY4Mvyz4Vz8R81vzXmVWmv7NAV9Hr2zDgcbQw5LTz9iTvdQWSgbFhXyWF69",
  "key34": "J2WctXTTqGbDvpHoNJCEVji8EHy5486idQeywVX2PhsiqHuTuXSupDNezkhUvrBeBqy5MyEisGPsDWawdRjaByT",
  "key35": "3hWAngBcpM4Ak7c9ketW9nU14eyasXgnvjBGFQritEY6zRxoP7pbDGZKjwWmHbq8f9FPAED2RcsYmfYpqpEmn6np",
  "key36": "3GNTnpgvnd9UE7LeeME3WcKWWf7ehdTKXVWKZpAh61zNKa4762dkGExe4Q2Ns8FFTwvotJu47Kr23huAemepyq7g",
  "key37": "2qsHEHQYVirv2931EoGFTqPCNaeFkMwLQBPMpV3QtKr9kf91CEQ1stzxPVKRMCLvjA9RCxu71EqJ3refwAq41ZLV",
  "key38": "4n7wR3gPfC4bQZKkPq5bTGecDNqvWrGwDbv1GC7guuNMdE1Tpeye3VYvmyexRi6FyvvMro9S4TddmcvMmDFdDc8v",
  "key39": "4MmBCYt1MC6khstUBCjimR2DcTWPEKn7Bm8gv8wWT2MaA8UQ5rWhg43a9DkuktzZStnxhkWvt4FDRE5PBM67tTLA",
  "key40": "36ndg6moUKNvzPG71YLRToLGSnQo5BFPrA2nbDFK3wJb2PennDbxzfRyqwsfodavenVBQ4ubzt46JJEhs4k5q3oU",
  "key41": "5yGvdfmNNMj5o6ZaTipDujoHdw7HBJspRgHSFLm2iZiRbTKesXoCsEyC2ST9nvzVhSKNPJ3ujuvuKH1VZsW9Qy7x",
  "key42": "eYA42HY5Kfv2Jjdj4HnmTKkotqFA2NavuAVdyxqBaqtNEbKdjJbgykqaLQ5hEjG7mfbHr6mob7XEMzG9mv9MDhi",
  "key43": "3N83ufckgsRAZF8vgpr7BvjE6vGXLFFyZxYKvdUCJ4rBxcMCwMR2rErWMFpAvguDFQiPBcEzvFG9V2Xewjfe25N3"
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
