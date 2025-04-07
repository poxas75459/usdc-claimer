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
    "u1t5i2tTRo8NmXwBieAffPytpbnAsD5ajP17kFQG1gqLFJ8VAXCG6ykeVZv4HrAiLowbVfLepKXM5zsS5KUmmXS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nyLsQcaJMKE4ofgnfsND4bbpSvLRBUHyCZG3RUkPW1UimX95V2Tt9EpDMPkYqas8NzXKv5xvyyFL1H7ZQ438ndH",
  "key1": "3e2QLUMih39ZRAo7reSVheErcnJW6ZfiSKqgAErTZHw2GCas7QHZ3kLuXJBttFVoaiefX9DEBZM1Wwhm2gufcPPj",
  "key2": "31vq5FDvAEKvquvqqFgXgoEHeNo2RcsPuA16PNS7TQdSE7VtTftNYfYqVd2ZGRMCMo9qPp6LrvMwdDNq9rY595ux",
  "key3": "5nzjvCKu9vcSwQeSkoBh8iFEFxbisR2BTaSTu52GygZAojsnfQHaaRnspXDeLw1WqGU5tJG7GuQKvvQEmqUeXxTu",
  "key4": "MCV6Q2SUsb9iwaRFThBGRcDmbpGuHDf3YZF6W91hj92ueqPaCkqx5GndJHdbLLGMgSeSx1qbDWMKrSK37E1Xzaa",
  "key5": "3i3Ey1dsAYLHtJSzT6b7DjyYbZFpq1zvzM1EokqyLkrEDLmnGGzWcVEUryA3zaYJZqhyz8x85TwBG9mS1mCiGkcp",
  "key6": "41miziDSw7sJyqutLV9amX8twuPjB9nMWo5TyET775EcDauM3F3iLWbLRu9FApXhD2qDMuFaUZFYUky84fkR1Mc9",
  "key7": "ym8VFh9L24ySWoUn5MHhTXKAzyykXyJ6MzPcuaaqGgb5Gbu5N43MiCcv67s6cxpozDCfshGn1tTVWSmrQwKezB5",
  "key8": "KS37GPXK7UfUNeAwphXkfZWyRV8rDtx1pXSQZeAtGdf2H6ZgeGMVYxfDwzeu115SCxMRmnKFeT1ET25U2272jaR",
  "key9": "4p94EvUyikQeJpppToEjPKFJFhic6UuQtKNWngYLRRf4asNBsBJfA3ekVKDR9SmrXkTa49RAtocBGvXjvGPaUYKJ",
  "key10": "2Sa3eVJcfRG385mcwFVLK2AAVaVYHaU3WvNH7X54CMLqhaRqRZb5gvm3rnFkp59iWXvhjtvzcbMuURqZjdRtA86C",
  "key11": "5YW9RZYFTkFg3XCodsugzWinWCfizrc8h7A361SjkV1aJpxEFdSV2J2sRAkob41iDLYfc7BFNW8zj35GkiCrFoAi",
  "key12": "2c3jtohtsxK9QbsUWUi4JJchfAsWMuud5kXkjXu3C4bEfeU5fyPDVJCMuMTyKL6jbfLhuQzskmbtSkvvYba4TbL4",
  "key13": "56ob8PkYBwWvzLKhQ3u2ouvukCFaZLV1deYZYYHMvzCmzUSPquQ5U6k92xwfeCgGkYR5xhF5fFavHcay9gT5m7dc",
  "key14": "4L3XyF1z7Shi5gbLgLGktedBiNHCHiKB9uS3Pyri91NGUZLcsZcQ1P1YMmxsE1oCn5kJ5uViX5GuVNBnJj7ZPjhj",
  "key15": "UTJjenC77uif7rWChUvjtkXVPN6Y9fE3xPhUHSrGddkTAPoAEoq6WfxGYdnu4E3KQG7jgyYJ72349h1Wmu9sZ5M",
  "key16": "3VCT96RM62fLp57eEWZPit2J433knTjtMbexfm2K6ir6JT794q9BuWVTa11f9F7zPu51cKepXjo15KkAezjSrp2q",
  "key17": "5sHEgfVe3sqysHZ8uhL63uUE2Mq6HtM5wpXAPqSERSWucVeGBSpVWwaQpU4pGL7iJnoRJNjQdqFb4QNeEgPhuGZB",
  "key18": "4yTaffMJtoKohTopwvEgQxwqGoni2MPRVoRZ4kuqwVxrMe9uLkaD8UTBMub1NdAGtv4vov34zfCVdsX9MjS6d4g2",
  "key19": "nnpppdSJU3ZKw7rBiaWqgYoLunrax75ipJoD3oHvGfYyNuHJeNHTsBTk1ymdw3cJXpDs1YsNJHAnKk5tb7qtxXU",
  "key20": "5PYAy6F55eLGppKNB67b9F7c4tvBqRPbWyFizahS6bSfzsuvdZMZ7e7VGmsQXKXf57cNjPLnvsLvcVwoPu6hzmwb",
  "key21": "3u2o7GRfmdvYmdG6MigicnULmLjpk9iMFczKcSZXFfp3bGMeRaVrCCoPn9UZ5Dr5PxXFvxjPjmz3bDGspNKAXKZh",
  "key22": "fsxULhCzNhb8H8SwnfY6vrRngY6HJMirT1u2A7djTWyHtBBB1ZAyNB5UUropE1C9qR72cUo8QoMwvKc7VKjckD2",
  "key23": "5DtJXX2eRPmWB3HL7vovJPQdravbfs4u6B1wrJEPtE2YpKK6Kxo71AMSvoJco9ufiYXR9cKcd5K7mgmbiM3Qv5z7",
  "key24": "5FECw4jmGmrQCdk62w5BQt7Tchcs56ebnJqUVxYUBfbpqs75GudX8qmV8govNTDnJSAXmwTofV61JVhyaenmokdx",
  "key25": "5KA3JgW2GdT8NxmkqZAnX9Wc6fNupe953Upy9H7SWqiVKuLzd6R5GmhmJgA51hjHHaXctj7gQ2Jh9kDtPC87aiy9",
  "key26": "dRMsy6Y2fNf8apXGn3rgJ5x3ydN5S7vK9675XeNVkNcFtbVWdWo1pcmnZX2v8ANquuNDKX6BrtmmTH2oGMAYLk5",
  "key27": "36vYSB4Mc4Ab3pyeuHzjQ5Lfureu4jxqbQ3xqZrUrxFdLr8T33Q8AnqLbJjW9dxKevNtwt5cj3Hc4sBmiugusX7o",
  "key28": "3jEjrCQ6uNsAG7kSchFq8QRS69XYZrZ75FKJoyLQgATkNdZfHg3Vi1rdJakGsNnyWmAh5o9gucbX1VoEzdaEs6ac",
  "key29": "4ar9MqP3aT39d5m8NfbFLTbXzrg7zub15ut8tVw2x5R4bjgXJ4YYbvh1ZuLwyEgVsXaxNrixLqYS3qg5zkoprrr7",
  "key30": "3mkiLd4NCtGYQkH5afDMnEXBDcr3nejVMHNxE6gGKC7q8rdaYkvHwnvtAHDxYcunfVmpvZEAyknJxTMUF58o7fKj",
  "key31": "4SJBXEm35onEf37nF8DiqSkYbGuK7d1ex3TLdiCT5hV32V4YVTLmndmX2JcHcvFWtHqo317HkrkjdXDp2ySuUH5X",
  "key32": "2xaR8ogP1iKeaDsmvJT7Traiiz3wQzjoTBVdihYbZsWnMZpgdZGuYxogC4U6W1HTmPZa8CBKtEXEhnc1vEUKQF6H",
  "key33": "4iy94LxM52nvKJBues9pHakVxSTsWNA1iqFnYE1uwumZMg1BGGPjR3tpqZ9wGcrj9mgitZVGFTxrqti2KCEEGNsx",
  "key34": "2nEA2WekQqQqdtB48PTo6aykpCJppnzr4iUXUkdeYTMD318u3uoFaHrjStmDKCSpsKTbCvnwnsaPGxn9gUzsHTTX",
  "key35": "2XSodGzj9UX1AUmsKEg5JmyiyoqDTn5x5yAQ38zpj1ekZjDngeA4ecqfiPU6f1dSthUYiM8rC9L4gEX8QnY4mQe6",
  "key36": "4JviT1TBnfg2KgP5aZkWJW2Wsx1Q1kdHveHJjcJp6QxQDcy8Y7pXRQbHYEBCjn3YXcRswRWLdPSbXhKhAZuaKLrr",
  "key37": "24RtM69oEMKmJfS9QdJi6Za5kXGGDE4BrmrJCCUWwUDZ1DVFfDEHf3Lok95XKLuVt4SKEsCfExnCc7Ky3FkWBNa1",
  "key38": "We2W19EYQ9u7Z4E5HXQFUYvQjtF3kKFx91oWRE2dNSTufoaGbtKrhFy498DhwiPVoXwWuYwHkB3df36dUUgBadY",
  "key39": "q7wVmaQLMLSNUMqX3yJK99APiZwQoG3GjiioCptmwytXRDU3U6yPmg6QuXz1DYrbDsQC3hBeLxums1jJUdSh1Zg",
  "key40": "4RUfSGNQnaZc8NURT1tRcNuSbc2EozC4Pscg2yDprkosgnbNBiigkkFrfPjgSJjwTjw1KxorCjpTuYTjoKop12K6"
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
