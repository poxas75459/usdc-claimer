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
    "31PxU2UypM98n9E9CCnm8srHTX9Wa6MceLxmmKuG5srnv8buawm6Ueh5c1CrtBjPV5XYtDbKzw7fjdM2Vbfqi8wS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LU7ydhg2mSgY36suXicW7yRFYMiDmEmV2dLisHNNEP64SPVo7WjRDvm5uKTus9nED8hkX3CNAM9Kk18z8ziQXuJ",
  "key1": "2gFRELrnTEzeNMZXxiktcvDgjD5vPctnTEfKsfrbfMTTZpZAgqNwNfno34BoFeDAX8hkJ46kY2V8n5usy8rinZ3g",
  "key2": "gtkehDjsWkd52eQevXduWHRRojvzSx3EG4vptPyDT9d8ZnPzJ5MCBsu3TVhWEG5muMC2umvGzuZHAUiuHUmuePs",
  "key3": "34wB2vCSHyhcoodvcQycGUKRsAMGtFpxU7xoh4s6DPfm42MJd12wUmaqFKKaV5JDejaCyXBdyaZMZpEpY3aBfxio",
  "key4": "Tq6DyjDpGJyhXkDsffF5tPMjbr2x2WSMYZdSVz9hNnPjRPmd4XyRtkNXZzxrhmCXWFqM9DaayCHhXidsvLQaM13",
  "key5": "2aZbjsCihvts8CuSXTQbmttaevEMJEsLh4dCwU4F8eZ8dy6ZLUaHZo5Wz29PaFMPNAWJ5zX7HY5fhL9tUAqcQY9j",
  "key6": "2S6FQ4fs84caBNsLFHwwWmfWiPTDH2LisQJBpYNUiMbQ5H6gE9C7PF4PzhCZg8mWZR3ShWxnQkjPs8SyEYYB72nJ",
  "key7": "3Z9ASR1L5KJspZ6bvHuyDPS8BkrXFTeuT6Mb2FnfvsS2fVwp2z3zCoedWGZibpQFVhhVustpDwK5HRmPyUnvBs7",
  "key8": "6oRs7ph6ZPgtJUSeFEPvMdytQArcfpwMN71X6Fwoi6SvJq9XuHcHJyTgPCyxKo6hz5USQv1smprHUEiwJ4YU7U7",
  "key9": "21yvamF8eUHTUwfA6cPHqSCYDmLZcs6j3xXg1MWM24xxuMC1JqmBKPFeqxgUMy6FhrhaSH9QZ2AQaggxVh66BxE1",
  "key10": "4m3odT3ZTM5Pj9oF5vRE6ukmivBvpVobtSEK8Gaadbu6kjD51y1y8wUftRKmpu6QuZqncyXdDi1r4Etp17phAwEv",
  "key11": "5k3RxPHd7NrTWFz9Q9pM3rMmqchuuSkromuSmx5ukMgb6WcGDFAJgjYvpqBDB2BhaZzWKipxS9au4rwf2dC5qokR",
  "key12": "4ZMqDAbmJJ5dDLwUkfc16b8DrrvmWEAQh2VnNWD2f5czyxaaLqMJkMeCAopecJdnbbmqvM1zEmMp1WRUjbZRdwJP",
  "key13": "5ZhSEoaffbgZ7T1jxtgsLBzTWN6xoV5CXkRYt7adkcQo5BqPaBcLytmjU25frn6Gp2zgCTUEza3bNs9XGHj9j4af",
  "key14": "3ctYQzaw4roUu6iSKyfgxxZQRA446RJEmvHsDQLuPPS8xNtBk5L62RagTvtkeJ5CXM2zogXrrLogye8QW2TFNJ39",
  "key15": "52UJ41oDFsaACvTLHb8LFmMJfHBUf4mtQKTY7bMBL6r5xiUE1sQ5RS6hbtMt8Z6SWMQhP55vhMiHs9nYYswUHZ6N",
  "key16": "5ubpLc23XYMJzV9t3isQXfia5naKbjFdKkbu4YbJXVbU5VykwGFpoJKauGL1KeqHjyuv4xzoXxPKST8quT5yRXXU",
  "key17": "oHm5eL73bzVvBLCdrrFpNL8n2LXXTc5sZyBTHPCuk2n3fU3SkicjaAVxeogFDfSUFRWUusrPFgDKfpMicpATFaK",
  "key18": "3qWFV18embe3Lw8sCutQrsZsAa95PDfSRVvj4QGMzqY4sJGS6qAeM7WQhs5mno4LwszMdsRF7cFD3vrn9CfsWQHw",
  "key19": "4tEbi74XAtDtYbLuybkxvHfAkRFM7rcv8KNcuMAcPk7bW1xu21RycmjASxGqyKmCiG65XuhYoyMtR7mF8Yq2MNSA",
  "key20": "5cMs2eFqgenuoSsA2y8dEByLqPtpBY8NQM34n8MS5LQr2ZPZGyswNZ1ppgf3NG2iv738QVvMQ4VC6EiyWGD5Q5Cw",
  "key21": "27MNrLifQ4yMy3T2gXNRWBctp763dtZpfAaEoisRff6NBKK3RUuWK4sFpU9pzuTVk59EdfBD38fWhJKfJ85Fkrv9",
  "key22": "qziKM7eqMR3Wb8BcDCmZ5yVdRVcce3GrptZu1cD1b3xFJeMzxGVxosBwPLXAM3wL4JLMuQahBuMTyMxLbo6NQq4",
  "key23": "heQMVRkuxe2FYcU2bLipNaw4h8P6yFnupLhywnDuiSHwPq9euER3si5Uv2b3YNyozBUh7MiUTyW47e7szyPG4WE",
  "key24": "3Jf7D8fpGnPNP2c1MNe6AeBPL3TmQ51uTJeZV4bxj1BxYWacmmWRZAxYb7R6MhAQypuTmq2RYQdTafHc3bYuukNF",
  "key25": "5C2vg2f8diBjFvTTRYgeQN3MM6PppEdibKkbA8BHQ6RfQL74bz4pA23Rvtc3z5gKsZ74gXYWMM8uDkRLUvDTEvNJ",
  "key26": "47zbMtyf82jCmtefTE1MCVWitQoexahYdqYpq2Z9YSdRL6ZLYHqWmNBgAjMpGMT24NQu7VqXgaTeih6co5r5MEQ6",
  "key27": "2KFFKPy7KAxunZJNouBhqkLHkjad43W5Y9JeffEE2TpT7H3MKmBkVn86Hk181NFiSiqqwSvK9S4mXzu5pRyrjG3i",
  "key28": "4cMuD4LWNq1MJRYAAjiHZHQsxBtHQFE3zqjzeDEZzbfrqRNuyCoznHESXdzJB7Kvc4AYHabHWqWzu1Lxe35HMCD",
  "key29": "3RufiALtFs7KtLf45k94NGSxZNoHybKksrKtGmL664DfarEcSnyuoutqSnEWmAGXNVN2D3ZCeKNmyYqAtiiCxtTd",
  "key30": "XjpWyrruCmL5gT4htjxkyVmMVDZA4nLcRmQYSDagBiVz5sEGNTdQDDwwnb1J2B2CJXyNM4wZhdN1mXbpsvCgcCd",
  "key31": "5irzitZJCzfcAzT78ZQpfvrg3fCi5vUnmdeWFWru4p1M8Z3YxymhxnRYWrNtBxjsPUEvXYCaxBMiwhSJ9SXrh4ER",
  "key32": "sJotuSnnwjPukze7ULyiyboNVmQBs2Ph6WsypimHieeTHhU4CvAT2ZqvT1Foiej6iyDxmW21ZGH8AW4oKGBFh29",
  "key33": "3ySTumyT8PpEeiRifVqHY4NKPHeE9VfVFMpjmpdjAVJU5BYyDWATujJKm8CXTXqE2WqPtWWUE3oz4vf5CsuYQXjM",
  "key34": "2hXZBTPsMnsS5imPDcU29eWH5bXz1xDyKi2VphTYhGL1iQP4cfAZvvsPe3TscDW4TUc9Cbe4ua89TCiNtGukK9ig",
  "key35": "4R2AVz4L1Aa1H77hEr1asUomXRziWBdoM7uGkdKLgLDQGDrff1xFb3LyaxGGXyEw2ay1jgEEfSKH2D1Lug2o9yuu",
  "key36": "5TKbNjUNwYXQy1tcsA8Y169uF8oCb12wSjaJAPtdhhmskPUGFQcr2fmGn3vpFvocZ7tBU5QTCUYdxZ5VJbKvxKa6",
  "key37": "5JooUTKFUZVcS29xYxVZ9UCUnoqGMqHBJA6wZp8mXoScUj9AH5A6nnGdZsRECBpqoNaJbunCCMhqRLDBHiXfVbpV",
  "key38": "2oGztgQW67hnturhgQzrEBAbgQA9w6HTLSQWDPjbxQRNZC7neHsYCJrDbj5iVivCnzU8qJ8Rx9bHAmRVMnjC9aKm",
  "key39": "2Y9sGbXQqNCV8x5egfjWZoWe7XjQENffS5hdoVjVuc6E6Bh4uRvrWxcFySjZMnsjDAvHcPKVknsvpujTSUWepJLx",
  "key40": "4cbPA1hqh56ZdhUMkXRbEEdp6fbuAmoGeHNQHxFaoZNmtX54FBzNvc11vgaJ31wUoEWeUNz73CLGnLV8f6fBY1Ww",
  "key41": "562b631oLwBobLHKV93mfWXJqrA2XDCdhEezvuTGGMXHVdPGScLt5hkRKjc7z5aznNTSYPgacx589JNGkXSVMFui",
  "key42": "4nAjoymSTEECo2WJDpKmLbE9MCPLUoqKWCgpXyiMJb3RR4JhNitMefQeWrP13FDScVgRkPbTza5rS8pFVemu2Uvh",
  "key43": "46vPzRWdRJY2eGDYyy94dPSB9wv3gDKUiPouiiY3swnrGYkaWrBRu7bcLcoRXowodEChteVycNbRLi2Uu1KxcSMC",
  "key44": "XR9GqBKaiX2qPUTDAYXvfNQm479mNJQALPcfUr9RTZEVq7pmNzTPcpPEA6eUXUjvCYPVvSC42HmwitAbfK9Be8g",
  "key45": "4oRzKhgA2LcuG8ojvn3rs2PoXmcCpS3NGMrz6MaGdMPeYo6QQwEyS5TBy7pZ18KZFvncEScn1UmrLXDgPQtsX562",
  "key46": "5rTobdABi4ApxnCGCNa8kHjDiorXHMTU3XV4Yu7haXkEFAXAKErLvEyMFnMnJdXtRU7RHQxSXLfNoCXkfSnu9A1Y",
  "key47": "5swDrSS2iB6SRetvJDsJTXyWhinyCgzzL1Ng1J7SNKchUReEYVsUR1FFBQnZm3RmcigWRxodQy6ApC7tLgpQUmgn",
  "key48": "3ezKmZjQjMyfhBudAtqxWJYeF1CPLGBGKordUwDVQmVYvgy4D81ZMVZ1URNjEJhNXvaZ4gzB77xkaMN2ejqo2wDJ"
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
