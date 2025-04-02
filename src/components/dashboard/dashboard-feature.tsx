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
    "3RBzdJWNboAmWTRNnG4nRDZpsxsqnujT7KjwRA5k9EcgE925ef9h3phg1bCEeKNe3FRqhx682ojjmeVcvNpCSa1u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V2Tt4xYXKmPC11J6JVzxfA5j4ZxGLohsGhCxPXQ9YcpC2FUVKUDBdCvyuh5XUc68x4vfJF3YnSyEamqYYJ3BFjq",
  "key1": "3wztvVdLcucb9t3qRfhTKF2o5Nf4wGLSEjntCNTXpijiGtQSPwpP7g3bj7AF4r48qiU4PNEmxB6A4ejQmchfkz2t",
  "key2": "3aQ8nBHkCgHztXww7mNhUvW5gv1WJhbcqZXYV4qHfSdHAq1a8pBoyS7KDwCSBWFgdAgQAnXviutMMvFxWok2Rwf4",
  "key3": "5dnw6wndFnfA6ofEZ4ojnykfssEmP8zhGbgYdrFiAyuFNtZ9YaaSaaN6dZxpavHjMp1Nm7h3K77wBqX4DdoxG8Br",
  "key4": "VamdpyCdVZ59Y26XeKWTQRHB3TqiUKTwYHf6J6teXBpHvcvox9ykfFHpBxTxPNKgD8Ujr2swERmESCueuk5yawR",
  "key5": "5FaBmwDeKJKxqUQAmAAnw5ZY1dPFjfroWKm5nYzUJXPMD7mXbFs1fMTLumUGMv9B6zDitHUHKK8NJaYAoYjn1nkc",
  "key6": "52YazcFjR5ohSkCLgVYgCwPz5mZuXFxite58XnMe74jPDhH8zksKuVkdVrnaPJGLVZgeEyojdVXAjZxw8dbfrNgo",
  "key7": "gUkdJAJsvbSAULyMEwTtTCuybRKm6HKJw3oLaNjx14CxFN6grwAjPCX8Gvwr5ojHLQst6RGPvCLBC9WgSZZoFUF",
  "key8": "4EWhMEriUMUMdooJdd6v7HjP7gvX14oQHF4eDA3ioveWRnb9YtmqtMCutFU3fB9XBG2GvR8aYMhN5joUNudyqVwP",
  "key9": "3nmLbnMmfdW1EQFKLs87xt316m4fqkBUGgLBgyEUZtiyV2kxYxTGEWiBhsouu6X9AeAaHY5dBuKa1nZMyrkF8qSP",
  "key10": "24SDfPdY5VEuTm6LhwE4MdTfDLqk2uw6YjQ66xpGA3GMfSUg4Cx8CZc22kZYNdRq6jZdytWhahUHvWNzCVRNXHEz",
  "key11": "3YFUauCP5VrmRqP4FzJU28mGWMsvTdPVnvUsTaULDG8RgbwyFLqEFrQ4PPEyqr3sB1XesHFnHNgFATSCgt97HxvC",
  "key12": "4iM3cpJdoMHHRKFDBtGWTrK23YeDJChoijRxhVbnB1fzMCJ9By96xTMmid2iPeVfiKE2w7QJLptpdoaYrcVyy7YP",
  "key13": "35obpnoaxxoYiZjc9xzVhaSafuF4NDa9ctuQ5nBwvSBUtpocvPr4v3xca9U7JX9fhx745HHh8umh9krLxZfGyumz",
  "key14": "2ec6TUW46TkKdH2hWdb7yWzrfaZT1vhTMvFLrokfLkgSqGmEC4UPFdkYCaAm8fvbvpXDDzRXsGpGjWzTsS7Nd8X1",
  "key15": "e1ivB21z8VyPAaM2MdPubTWjmwyrNu8tf4NnmMKKCn9PxpX4jBEUYDChyyKXyFez5AMiw8PHqzs4TVkNZQ9tDBa",
  "key16": "3cV8FcoUkpePZq3Vtks4cfme4BVgx2CBRW8sU5uZ7N6biAhmwNq3nDCrBvhmbiWerHSN23CD4HGj8RmKwJ9exCtD",
  "key17": "53rMaf4f3moED79WVmWChnQWrtr42jsWXKXMfVDzdrpD5xTsQMRdbVk4Mp8z8KveVW2Nxb8cem54PsgfzBZwCQ1q",
  "key18": "2UieELXAnCYw5YwZKrPHsSo6y5kUPNZtfySyXu4EUXrbacSoMdC8DFbuXcLwdCGCGLzyBm4kBfnBHS5TzEABHVqS",
  "key19": "4XmaEm4TVqT7mhzWKuiDN7CndC3gaz6amgZXBzAVjhBggBV5U9kTvTjuMxZ5MnoWnJCYVXjnnuLJeDejiqPx7Ytb",
  "key20": "26t5bdQDTx3dy6rkPvRqHE1ddcENKj4mHTz2frkPuaDY1RKepmEY9agqxZ7gj3DgcKy1qCnJLnH6CNPLiDcNB9n4",
  "key21": "3HfRetop3LjhnPJ4PYHAErSbBFUuGDts86t7J9ZcnKko1W1M3ZURu7nvAkKUBhEEhJTfkTPQqdagQTymQ6APbxH",
  "key22": "3v3t8wwMZsphtpAMTF6NBatxjKWqp7RkRm9C9SbmPwZNpwKbbTwqT6b8oTrf1TcaxWfSTo8HzWYgsuoqR8XKSCtT",
  "key23": "21No5mEbEuReiBS4y81QQRbi8zTMLNm6rRnNq9LSYgmmzr79jFCnEPZEWYtUrk7Q2cS3xXUbtqDSSCQkeipnTZVd",
  "key24": "5gmbgjLZ9fq3egKSEBQQSuwpovnq1gMjyk73pveSAHhbTCiqdF5ZYRf9gifcQhs3TYkVRDn8jp77u7bWBoJFP9of",
  "key25": "2uxRpVCM5ECj4Kwx5HZnoR5hNsLSAQv4nQGHvDQHuNTRB2PKWiPhDyQbDpqeBaCkj2ze2xDYbjLJe6uQpCJhakVU",
  "key26": "2FRi3USEsUGsxy13gK51sn1FYH87eYikMi2kjDgHTrQQLBEabyMvPQaow6wZQgW7oiBoQ8ng6aSrLc1kK8LtN2AV",
  "key27": "2FNto7TG3uaU7f5C6nkrQAdHu3CtHDRLNUdQ7JhW63aDUhwjgDwcK4B2q6Tv2NJBUe2YTLEVpDtXgNqdSqfxWoCe",
  "key28": "4J9Crhgui2UQH6gvMYJHWv3VkAezdjDizkwjF9fximMNaoieCVBYj7RLNSsujXCoGKFdaPsTYbwD5Fr39tvQKbUc",
  "key29": "3egwZjn6zdnUMTUk5PvFDxjxvoAbFxPJkYvNhb6MZrNaiT9PK93fij5UXLwWnpo4LnceyKgt5rHzX4GagR6Ho5kw",
  "key30": "4TRftcXTu5K9zaXEot67A8WL9DYeMHWJoqFasSVSQxPMx45jbFt5mzS8tGWHgo7NXV4vLATKxJifZG28mYCurWNo",
  "key31": "39eRZM9ti6wRC8y6wH6BEXqMcPPTKyhXwHFoZWGAAicP2DJLuE3xa3MvpKDbnZZc1BpLHp8ahztvKAA7MbMaHb38",
  "key32": "5CUuU6o1ovqNChkgkxJjpyZzHsJ8PzWeAfiRPLPLYBsMhH6wkcqUY3nWDkkMUWzuGh3jCe4rn5PMqQmEthhXTRDQ",
  "key33": "3q8X3UCJLx1w14Wx6LN2tfEg2tA2es6bLWhZJ7ynLsPLXGCuk8GGvwvYxdgC7tWdaw67P8sNdYmD5LzU2pW39J9n",
  "key34": "4pM6FgQdXtxRFoVR7Np1X7FcfJQVtmeMbjpcNUzBkQBgPkLbrAogQwmRdTpyvRzU42A7QGMvsiGPdD5aa3VAYcTq",
  "key35": "3taoXStaV9JLmED6U8f69iCnohTcbj3WVu8QE3ehngg8Tw45w6yckw4rQU4zgUvdMJ2PAMLkqBU4bDQRWBAPdox7",
  "key36": "4b84xe3hNsmoWTtAmutbuHSgJk7f7bbTTSnKQEf8bbHdZoZghFPrNVb3YfS2R1USspT2ZZYwNHaCteZGkL48JB9s",
  "key37": "2AT15fh4tYvXbWXw3Noi19JBLqSGb9oC4vU5CDerh6vABDVN41QD3kvDHorU9edv9v8hSnrSGU6C83rgrdMqH5nh",
  "key38": "5MbHTKZxRH2ZDrCifgrz3AHzn6yDG6GHFW4HrtjrCUUfitiQ6SZaCttJXv7QqJvZA7guqjbxDRMLMozMoR7oeaK8",
  "key39": "5Nja25tsjpw7UQyLYBmB4a8mCDRcPRhsFL15wBJWyX5CEbFLG9Q28h7vMbivANs62kksm9FeUbNqYG2sZc4sYXip",
  "key40": "5Ynxn3DNUgrmGWZfNZGFHqBJW12TbFPTrrq6dQEudwAZ6dJ8yfDYgAauNmjuBt6kTPGyk98bwQ5Ut7FQpPiLwGpk",
  "key41": "x32fV9gPcKwkjhyPfQ1oFYaUJqTqGceCRtH5HmTj2SeC2WZbXGmDoE4F2QRgPWPsn1mG7oNoS17YcPR2NGbH4Fe",
  "key42": "4VmLpG7bs1f5ZwrXXiDpe4MW7kFuuJaTMQgXGGxSPD4bpHb8q3WiEgKVsC6UvsrVuJRcbdkZsVMGANG9Wg6gXpG6",
  "key43": "P5gCv5W9DecGNdaXt1wJjznjWBFLyMaNVEA1AcaRANst9ihsp7eFsfdf2qVhu3NWazNHPj6CXgke5WTsDpVZWPK",
  "key44": "2RmojF5MWqvBJShg2Zxfsfo11QEBBzoKTHcKetKrAQSBvL9ybeTkgfe5RK8hc4nMQK2vwcMJNUnKsookmTYyYmW5",
  "key45": "5fP9mTikcsdKZqT3yoNcDzfq1P3EF8VGQNSx1eV1Md59PHEtVfr9H9CpxQCsUo8xBbVCCfvtDb6LBF5S8YmTFRRo",
  "key46": "5Sc49eMKwXHMHX4GDQbHCEGqZwWsHemHBcrAbjmuggNLa1xyEW2TNPYMgAnDynNEg3vvyPywxWHNjYG5yJxfQXnE",
  "key47": "5TRBMjScHWp8YKWzBKDbePXVsudWd7utmD7ckxoibvyaFQ5soin1gnwjWfhkufyRD871p9RirJhp64AyhZSeA8CR",
  "key48": "Ktmb6qknTXcvbu2AAxLufBNDZA9gNhGcH7ZtBogGhvXRdzLVMdDNmgVvGRzTWp2z57TsTZF3w7sxzFdbMcTFcYE"
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
