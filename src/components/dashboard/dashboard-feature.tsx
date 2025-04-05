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
    "3P5gzmWnQS3SQD56HwfT3xy8wMKLR1K6Dr6gZ3n4eEFQhDpj1Twano1xEFDmVCR1gszAosYmFc57CNq6pYqQogNK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fJptKMyQamANgtGdfmWvxLAvCadig17LzrLUm4KogTBAtzCpfSAkJy37t1GnNwhqSc4yfibkdnyPsRYGsbxhvaE",
  "key1": "WhwoYjKmLcdwYsZJA1MAi3uN61UpvyuXb297LHojFh5xXYbgp2uNzAbA1DgCaLr9RrSzz1LNpFXaCL4Eb2KKmq9",
  "key2": "sQ9hWzKrUYj7Xwc47WqxDDG4J975yAz6JKTWyrcNLATwThHXaSk8xpRgKcDb839P8ZkNT4FxmroN2wsFdRcAjbc",
  "key3": "4qLjkoajWTTfoN4vdaH3XaLQMuTTpcqrgZbUZ8Y71drQ5mGxza6HGSG8T1DfLxnk8SAu8h3SqUBi3hsUkUaQJVrM",
  "key4": "4fx9StsumPJsV7hWmykUEKJthPAG2XmsZDxZi6u3khkNVuEduXWZZbJyZhRnumHB2aP2Uihc933ZgWPR13oMC7cw",
  "key5": "4d8nvU1v7q4gMeEPGJLEQK6jhj4p8juQoonDAn1shYqEASBFWxriQZnCdm19m6C6SR7v3bC5DgKbQKuSRvtc88VB",
  "key6": "t6g8T6ZEGg6CsQpbxN1t9AJNUX9RYjEVPihdpdebPErtqn5SH3kntXvs9eoqyb4x6LGge9wc6ut1oZrSkN9xECc",
  "key7": "36BpVcQQChzCRpkcP4HLXFmijx1M5hTcwTurfdwasRmhwi8v8zFZUVfTGr24hyrfYC362nySs3B9ozuqoJUnbgBc",
  "key8": "2kU7SuEyR3p3i15fLUriiXfFFjaHr92uFpzEbyqHPSUSPJZKZyruiPdjBFie5eQQnhXFNX7iW1cZZtR57AM7UdzZ",
  "key9": "3PATDexxLutcWUCjhWKgnAKBuWJACCbMtd6fLynmfL4Qb3raF3SHa9eF9JoCpVrz8BokeYM6VgSxqioSBTenhEVP",
  "key10": "BHs3N6BLY28PpWQazinQHAonN1sXKmNUfio7zMPwUFmaAjrC8s79YbSqdPBkUwemzubxv4jSQu8K8Tfd126UkFf",
  "key11": "5ccEkJ8R1dMJaRmNam9BJgNuTxncqFUHLHFntLwKcuJJEdBep36ZUDhMEbxNwSY4z8H8FXYntDknzkxktHuqUXbP",
  "key12": "32FGyCBTWxwanBjBFiViEVJAXiDHVmPBXBmX12Rzum33xQfCnrdwhLvqEiAEDRj8i9JCxHVXS6iu3mGB8HnMXWpW",
  "key13": "tBhHykSXdshf6A2b7BxomsVgXYmrmprQ5Myjdbhoh8K6R9jo4rEJStgyvXuxz58MTDJFcCHCM8K9o5eJY6JYnXJ",
  "key14": "JrsqB1yaDPwqaHXmrTNLPbSAnTWm39AcvwG4P1QhBhtW1rxjDZNP1nwPRUJ4ZStuXrUZGn32s4gr4TEivVWF9Td",
  "key15": "2KR4hZgvwCZKncsPxQWR6FgxqscKKwv5CB1RgRqtJ21EJYQ5H9RJJ6LnnjZJ5t84PwVVx5pxyqiXkdMooKD2pej4",
  "key16": "44gvMaAJWeUbUvmCeeGWD71hkCv4nmJZT57EE6m5ZkzKLmW758w5FTDvxUWgMNfRK2tnjtsGYt8YDSti6GFpQNuZ",
  "key17": "4Tsu88xfUUD9YK1qBhgk5v1sTZr8Fc9LGuQ8ZMHRRtWkM4ARFctBRmB8SXe1jSyDD1DhobzreAYud7v6LSM6awXT",
  "key18": "5PCrCsiXZuTng9SfyerFjEZHj47rFqJivhkzido9cH8rqxa2KobgCrBtRPnZzt3DDRuXXtMPP5EBkiwUQhEqfq7S",
  "key19": "3TRaiqKc2SPRopGo3rLsA8ksZRA6oXWTPw19oxEVtiMTikdfogCjqvQuKkjZ4NPZNzWGu3xB6JpmBGHc8y24f1d",
  "key20": "2iUZyhqRrYSdJFCmmvDQpnJPEZDQXq9eMkYpP2LZdJe4VJxak3DhSiwhWk63uriRTQdG1okksqHat2HfwGConQj",
  "key21": "3vrLsHFgGuSczbavgE5KN5cqaAvnFTJr7ZJ6t3pScouVnVV11eLKVVAGQWdU9JR7eseeUWwP3ypSjjVshWLoacJL",
  "key22": "2jSwnxs5wMcKYQW4xkoRBs3gZCAC6teooW3owZS7WSF7dMSvBKreVr2H8RfZpx8AZeH2dg6PnVhfvZTpXUSc3pN8",
  "key23": "5ZRah8NXJ5E4QmAhsaVLPDSLj92ugoUtWVFKWXQm5Vsw2zP7TY1pA3GYAQmRmvT1EvjJFDf7uJEDniMmWJ834KsV",
  "key24": "5MLcfnzu5ZfRBCQQMD2WFN4hXedAh1e5ayRaVxTHknhE5qzaDesSAeYFgz9Q4iKF6TPNQrquyjXbensxqdgUKcwr",
  "key25": "2aMMV53Y5JpFEJEFQBuBAGHrxzXWBVxfmzmsQ7b8zoXtQeHLR4Lhj4WoHB2crUcRJxfvJG4zHp2xWGZfRXavtg2X",
  "key26": "mYh4XBv2Jxck9Wnr1XCL1JbpmD11t4Z5rLZPn3svfFgSFaneNDu2y5r9c2N7vRP4pVvCYQjYDh7nwZLX95kM9KE",
  "key27": "gAfFze5qLoKn5zYT9sjwJ2LB8zKwcSwy5aVmYr52Mw6H5B2aFa2E9vwZmAyF2LWP9qQUz3TvhLveDmK9ByYxMJB",
  "key28": "3qkadGPTJFvt1ZQGeCHaWz86f9dBxpLaJ2WoxiHXvdy8zk3EtrigA1ymMwadrbLjwR4gKQKtNJcPcK9Y1F9pmRSK",
  "key29": "66iYRAebJz6yfEcu1PZwxcmtcsXAvweMz84RbcokuJCdZ75ULbmDPja5o8mjEaYmLHaz1zdAM6xhnYEZimGbvEN6",
  "key30": "4bT3qL3V69DMhYtjtiYLVrFnyo2Tj5aFgnxgzoCzJgZ2sSGnQu3sMzVjvDnLcZEoCbxeXP6dQoYUzXHCjQsrm9rn",
  "key31": "4LgAh5cRBMsoNqcWeEG7oqgRJrNpTpcVoxTokfn4LzRb6FGjghc5Lor3pWfJMmXYhHmRKYKJ7T1smJq66VuM8fib",
  "key32": "3cb2UK19ytpnhePJJ5aegdKojHoJBxyRgssAurVsim4mgcpHo6oDSvZmqdkPWRihiyPgZT6g4PhUPzgmn2zAxDnt",
  "key33": "2VLmZRpCjkJcmtCNudQwt6HXmqNb9cvo88MbgBEvH2RnS7sYzoFc9GkF8Cei2jiFumXPcCGNXnVQH3mHW9wN9bCM",
  "key34": "4QPk5ytgD8AYTsoS5isubbspZFdZWFCkqkFiR6dcJNCaJWHe13e6XWeTCYAqaddWbYTLE4gkUKgZ4iKkafHdYrAM",
  "key35": "5zocprRxbCih5KHhgRSTXEybxkkAMYCA93PAngUFeoTkj13xjq1YudKV8NgXe6MQYnW5pWs6tbVMmPEFa9Z8VorS",
  "key36": "2jWd8E26yReWyEhtQYAzZSXSvfnU9qdmNtfLibB5Dqau2519STd8tpCn3PprRFd37Xvezxkg3wxjD2SNE3rbR4BU",
  "key37": "38Gi5g7e8MCiorZgt8Ctcd5CoGWn8DYyUQU4GPgN4zvfqCCYfxud4AXRxR9KVFmaJN5FHK7hh8Xqj6gpoNGbyfP4",
  "key38": "26vi4xR2DtSfamcBVcfsrjUWgaftFgYwzkbtwMGHEPni6JVLASYNvPRkYHmjgjKQf6U22nrWgFx9z7H71YVzKacy",
  "key39": "55WvDCqPpDomjReZ77ZFE6KJMiUANmW73Z8rmGZvJTbtPxLSNqi8C6ypnJdeVgV1ojEkN4YmdGGKuoeqjHsFPA3t",
  "key40": "3LZgwohzTJHAZxMWTmCBpLzWM7TSjeh4paV4tdGmeRPKAsqPmhTA8A2AmvMHtYajEKi3wjMcVM8bZs8F1VHQrbY2",
  "key41": "jUDCkFhQC4eHC4BaXHQhrGFxBU7tACHr6Mu6b3VYftZFWjSktrEjg2HLJvxpfLaLYTYRHAbKYQsMQBzzvXrJYra",
  "key42": "2tCjHTXTG4oiyrMo2okt6diUaTbEEYX6rzrM8RtREjWxADA6MMg8K9wKeKtdXFYALWEJcNzCbcQ4BNQctwYaJupJ",
  "key43": "trTL7DZK9FyLD6GLDFibEtpNdHsnCxrZgnVij9sxDrnS8LwfnCfa3rjWie58NAAtH7yF2q1t12fJnncRzs692HS",
  "key44": "SdxeKjbjfxBHVp9h2RxmbmBQcr4HUE6ERShQakc4EGNs91cqLGtdqCoxnCKTiBtB9Q5z33kggzHVz66d9mMW9B7",
  "key45": "65G4KUThANzmsdkuK1Y1B2vacW1StFDUqMXJL8k6ZDpV8GW3X1xKBjBCxY4hADN3yaHUQ5Dabc8EBHjdPBTyYEL7",
  "key46": "2GaJokWn2mLa3gkSVFALgJvtLAJofjJ6oB6Yy8eV67Gaho6L54APFZfww9zQLaF91BYYvZ44uwErhmW6apBJBXdY",
  "key47": "5JEW99wrrk2zMcXzPqNUQ4eXfG64Mu7z9Ce5Ebd2eKoWbuYYNQ3eTsVye9D3Y3qikoRWojmX47U6oR11kzMJqioG",
  "key48": "2qg3RBdfHAFdKachfoqZYn3BahsBKwYsftJMTaAgQ5CxVHNsTFAxWt2WapbBViR33Be9qLaYMVdu5wsGUYP3ULax"
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
