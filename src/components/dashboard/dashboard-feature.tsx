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
    "5BTgKdnsUmnqTmBt2R7m2bYFsSC2QXpdvqHt5KeLeC7eSRZaBHA6gk1GvKc2ri2fx3Um6s2i4QZadyi6aQbuwMGP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UYCW5vY3bxhrZi37fZTcenDgbQrE6DHhsgATKSG7DjknJBGKCCH7pUpcxkLAyQhBEBMJzCwnHifBW5zUvNuke6v",
  "key1": "5ARgdfF7GqQ5aqWiG7kg1wWVJM2zFPxrs6RBJSyk6Hq9p1vWk6Gtm47bidfGneseAzH64uDtCjBd212NSNQF7jCG",
  "key2": "2v9aeZ4p4ZgDfG9dF3AdrxGzwzg4KFZkysTfU4Db32y4rzvX6xRNrCCSBtAjgS4MvgxpdRfWHMCN2jWkV1A53GfV",
  "key3": "4DyiJV15dMtfFpw8RzD3saCPEmHKDATTxdEpbbfYje4QiP27Lzgz5zgqBYy33h9yeK2bfwpUsgHrFAHmk4e4SqHc",
  "key4": "TT6RB9C3kamLndVB3FsFSvTJrAKgN1xdqeLKziMk8YmVcncWehvJLEiQziBeWk2aoV7sJ3kgwzuTB7n1jYM8MQP",
  "key5": "QsEZdPiJ6U7KmgC8Hy6rSYjq5yF64PTVTUN7dYmLFYoY4WCjhqDkB5bihya4coEeJZF54KspijE8ZqfFQMrScJf",
  "key6": "31Wumk2QEXE4fDLLtti6sFeW7JTNcBbP3F3pJ8uStdjbEtHyHQUTX8QH6Ap9PXSvp1pMoL8AHckfp8NNvkEBcyYT",
  "key7": "4L4YTBshfUoqN2RYs73824W9B2CWXAzT5S8W5KdM9hvaBtvN53dNE4V2RZvcKBkrEw5ALVRy9TFVyWbUa5A6ECms",
  "key8": "3WB7AWZyB8KhAMyeva2Ex4yzdGVhMepivzQfgWrMj5CdxhShBQkATKjFjzbvehbr9KBy5AnA15odHDM2MoED7UBF",
  "key9": "2zjDFRmxmgt8mqh8RvLeD5VWprAvSf1ZB9hFsHMWFFmSGzdKrZ3WDYUGH9qx19c9gkzpE4M1EHAykzr9ByJW8qQg",
  "key10": "t3CqxAN6axKMitux4GwSEybtcxAcL1MicUduHKqStYSxZE9vUTg5GbotAqcnPJTCAkuoTizQDmWMLur3Drgevm3",
  "key11": "3gMsf2kUaAaNXttTbBBW8G7tB2D8S34UyMhnFHedf9iCEi8TeR6B4Yeak1Wif4ZEZVy29xD91QgiLbHmMDLzSuRL",
  "key12": "5oDwsmitTTETYxvmE9mSjH3cT3jRqBkZcLUtnamCJJSTbLYsi7B4kqB6gWid3ZQemKdbZHwBdesXJMxoChdDzAQz",
  "key13": "2a7mu7Y5cB2jXtMzGi51YZH9bJcd1pvwFSci3FVsCuSdeEQMGpY7gwq48vnmAEfdgwyd1wWziMnprmfdb2SxBSDU",
  "key14": "wAc8k3iRm4aCc83rWW9gq5vEAKuSbXRjyaPdnvu9A6d8EiSevxpPrYiwnUdHFCYHZtCU16nP9birDKHZUcUe3gT",
  "key15": "3SWTpeX9Jz9sZEuVHdxjqVjBTvuG8mMayULX2GUEmoJiuvuPKFJdGFR2m3j1Gius8vS8fb54GgyRXifTT77DKxom",
  "key16": "2nmHneTfVyzkmEaRETq7GTkj6Ghziwbret3ry7bTJaU25YbxXc6dn413V16wUEYApbwcG278aQfevwvUnZXUMjw1",
  "key17": "3FNUaeeugmTmxDmYKWpqt66KNQrcsE2auEzbgTQ5f8VgveejcGSk4gmdSc5pXW7eK97oNAnFL9JU3ke3rbCuG7hu",
  "key18": "5RGxxwHJ94VjN2zeCM5dbt1yRX3LyeV8Uy9jm2gtf71M6RHkUwk8SDbokDvQQRW3nvL7dHaPonQkHKd1pH9sGZ94",
  "key19": "4cfbmgfndDDF5jdnvSPqNVPxHyNG3F31dYiBBv1dgwrKkGt9NsyCVBXzguyhfQc3Au1GvPFFnp41KX45V1rJo8eX",
  "key20": "5mHA5zWrnuyZQKJNuPhJUK1gbhnYEcGW5rrs6N4KfwU1713x9wMbjHubRdpGfshWb5e71Cwd3Zzc65eY8dNcaBmB",
  "key21": "2JB1mPfWHGix6FZRU4pb7rhG6JWwZtTNX7vsfVPeayyNpSs4UHzZmDCSDuRCSmiseGXCgh87DFZQt9rmBUnQYJQv",
  "key22": "2NSgz4SgHRnyYsCEM1hQ82wYYzUaJ1c6GSUmsvP7vANSL491h31xAQx1MPtxs4peWkGBJkrW5bJx4sJQ6As9YdHr",
  "key23": "3coJiwvKZFNZgUUzxbtsXrqYAibFotDEYpHkRNLMsvaCGY5ZT1depH7Bvse223RDDbDWAiiop9vSsrjvL1pNP8wY",
  "key24": "tnAycxVhveRJ31gqqi7gCrPK9tHyvDoy9mEfYHatE3vLhpfsJV52AdPowRg6DrJNk2iiz1yLu9wMC9afMqp1LPA",
  "key25": "3R6HK3w9ciw68F7MXeyA8JqnqSYwrDFFQkQ458pWWvcz7uH9CuE1y1tKTQ1J8grkeztkzJjjvpZewBm98rpFtQYv",
  "key26": "2WjLQfeSWiKgWZEPM72SnjerWiGtLyxGvkdnQYsicnektqVoYiHMvxRMbnJk73otB2xfkxBGnQt4e7eBBnCg2LM7",
  "key27": "3e1PGL37sLHt7FzamnT7zwAFYXvNxssDFDD4SrBS3Hgh9tT21HyM2vZU2LzaL3jyfg5DmsKJNgkV6n92m4KQXih5",
  "key28": "tPwHMNt7p2JrTneBHtV524NWXb3RYK7RNE1TL8frVuXHndPR4o2PEorx5X8Sbduucs3u5hPX6P3YkqcF9sc1xm7",
  "key29": "4YQZChhTDAq126d1AjZUKz1ZcTfDNQNYeKQY14k3e5X89TPkDaHbUUCzavq8v77Kv6ykDAhSao99zXy1KBLUXDnA",
  "key30": "3yx3fmKc2LQX2qVcg1zPfXu8AunujeyLWEb4kLhFGXTTeTUey65rE89h8AmpF7w5sEBwKrpgAi9gHggBzHRiG6AM",
  "key31": "5VbWzLhqon7FCxqxdEsYTFcvXE51mT9YyGZ4Wjn6so7rkMyTUL1obWgjTwmmr682uMyiMiC7oegSFHEfVR1MD9RD",
  "key32": "3ZkxqPaQgTxu1MBUQwpQJnc1dT9BkC8U1wNkyAEB5GmPt2jH5FDHKCpG1BifM7WbfvfNuD8Hs3vXBvPFsTe2jf6i",
  "key33": "5ECiQciYRy9iR35kPbhY8VFmoYUDatsYqwexecdeFwELNhPvdLLoU5Fj6mZbJtYBMva1BPTNYyB6xSZRAbC3PvUW",
  "key34": "2uK2oRWaFHRgAfF1cXTmwEpXCSQq6a3c1MRr84ePUqU29tAw6RNk8m8VA6BtAoN1FU38VQBmeS1EZbTyfBTZQzzM",
  "key35": "R4VGJDZo7owhXFy3RqDYnQL5AdFJUceWNosrjFNKWoBfApDGf2dnR9cYFf4FnFjpahp4pDDtubtFrWN4xbJhzxn",
  "key36": "3HGGRPC39fLdFY5yC1wR3A2VsxTJxUEK6ntts8WuLChrw66LCXNNeEBd4uKFxJewkYgp9LGiDQzrb7JLJ2CDPUf3",
  "key37": "dTaNhckLAn34zNwC3gwWFe2HmGRZii5EED9xXsxkj7FYRHR7uY1EQzTAdWzuRUvqCnynRWyDCbJcJCTnQp6rsbs",
  "key38": "3Lg4iwBPoPBhRbDKSdiwdqgJVuX4Kb8NguDTkYdtDwvf5iix1zucdn7ibnGYG2qJMAhEggt1r61LSrxE4XvB2KPi",
  "key39": "2S1SoskXpWZ71P87YpDw3FtSqQkzyfjAynyahptNzcmg7uu3vEfF5B8nbodw8eNEAjfUX3udbWky5uyt1jJsCf7q",
  "key40": "N8PJEupSRAYZRGvCZKvaHxyUvr1kzS497oRAGv5jEmvMgYvTy1Cq55c8F9oF2Jmq1JGc2NQZQJRFyeMXVg4z5YN",
  "key41": "4wTqqkurUwUpZAbazJSC5wNCXVCrAS87jgfP5tRtJoRP9ptaX2L6qiWgKLEu91trTR9U461hgz6LtAB7qh9R617K",
  "key42": "4jMbkmzYpbCfCUBeVGVYsKkGipLjVVrCtsG9BpuVYf8hXYkF55PJxQm6eRm9XZnNSRjWMnmqZyKsr3qErgaCTaCe",
  "key43": "5BmD52PfQZh5VhKysbsHJmyhQy26ex8vhhRtscdCJCr5HD7dhL8oStSYYdQcPe8knnh5zJJ9tH1c9uXZ7gQaHj1k",
  "key44": "2zVPTi2KYbJ2f5X6hCXCRyVzz6vJDidbo9cGYw99d38Nv7F6aFZ83wUHx6e5ieUaoRbVy3dJ856WNzm2RxAsUEtk"
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
