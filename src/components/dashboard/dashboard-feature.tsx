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
    "5cLri1FdmM6y6pj3TDC9QLuKTD4wjWKLzzdmYmHHgKGTKpE9NSKkBwTwpMBLSb76yYYey13BbEJpdGz8m9NzB5x4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fGLxTXS6MdTr8fmEVnQwyxRoWhL6ZdWd6vPPE8FtdGN6NrAjCHXafkZPduDzDscreVWxcqPpCR8TasWpUAkxXmF",
  "key1": "4LiJEznNdDCAB7KopgpagLCubs4gHZtXvccqYrYKYbvzaBLmMX8yP2DS8TYogxmKV9K3yxPQUi7ohTJq7HJojFH9",
  "key2": "ZwV9MAvJNNoArWCGaZJ6vAER2vB17c3m8AKg5yeU9NUUkXKQ8UAn5chT71e1mb9Ys2tJ76zrcPtEZ7s1mC1qWMY",
  "key3": "4AZZZ8pjh7txEtDoDLjJ1ogKmrEoahVQdav1S5Yc8Pi8i2iDdXyfHtUJrGdzARPBvSBiKNREhirm9FgbijBvFMYn",
  "key4": "5kmpYrqMJczcUTd2R9T9o45pDSXBHvie5HdQmQojBchxXuB6FpciLkqmJsQiA2h9Wp9EY15WicHRMxWyhbgyrJMg",
  "key5": "ntinAzg8Pu9wXXssW8EatSHCybwr1y5q5wk3byKtf2NSu4W2suH3WJYbrj9mMLP18bjFHTMEbazktWDJPZCok5a",
  "key6": "zx1z2rJpwYgKiVLPaZgzKu9xUK8Phpyag5wFcvgyk7ZszwEUokeJR1HD9zr8DpqzoGi9X24P1tEtfYrQgpa4Y4Z",
  "key7": "4PDU3u2rq837DggNDKcaWx7cDFfyciGEqXcbGczPMBNPRaDVPeLwF3FKsvBqgirMM4vrT2yrDMBojLtzWCw6NUP7",
  "key8": "tEBjgEMArXG78gF9Ymin3wsxZ36oLSsTmgKfPMdUuMhsZG54jA7Ufp6748bT7kshzctZRaqwU7ksWNsGQ9H9SDM",
  "key9": "gE9CTL4WY6NwZt1FVkzgWgW7eJHF1zAmh6p3Vwuqy69qGwtgE4UJPDXWX8HywTcjEZujkVWKqGAZ1PGHadLevtt",
  "key10": "3P5JcCv7pjxBvCREdskk9AptFXXv6j2eTsDk9VbaReMKbAJjvJXwwyWCPGqNWMTz4GudDgipBHYbJhqXHnsGwnXA",
  "key11": "5o9aDk3ch6S4ruW9pnTNkmsff4DycbEDdem3FKAFBLD5qwq1SSP6DTEYNnejPsrro3QfyHUAcnEw39BUXWaDqjsg",
  "key12": "3d7L8hTkys3Zou2VNKcXxr4RvHdvcZcdMYpYcV5SpRaHRKJCsc7sho6aA2c7iZwUi1spZJKfmsDc5u6gLvmTMrGY",
  "key13": "4kkb2WWrLVh2n3iccpJbnU4B2Da3jfvUpmxP7iZbVxcyZ9LJ1b4rhuCysJ7QE3QFC75wzM3vTZ4jowyuCqAveDrS",
  "key14": "3ZeFcg46Eq4tjF45N6LL9NKGXHpDPiCmWzocyetvHGff9EWDiWTwoqihLLpf9ZaE4xWuznaX5bg2TvcQbwmtnqZU",
  "key15": "PgoANdv8baNHKEtdmTnCoxNXm1bo8zt691wC6Gf25ZXJgiW484dstKT1qc9AJhA1iTXT4DvhYWyDBmfQSrME6Hr",
  "key16": "3kzBP33fWPiiAUDyefwLCdWhFftbzyiVWHpvQJp9dVMsQ87aPkBJJULii8EbubANaDXataZ1gp77NE8rCVuXw2zU",
  "key17": "3fXnxQ7i5LgRcXpCQz5c3xujQPjM9mfArJ53agwD4T32MxSbBoYseKR6pfwzSn26tXuvpjNcpbA2GR9neVe3zx6n",
  "key18": "38Z9gEnWp3zVuaMqgZtS6hY8uQj7iRNU6YTqM4ePmZPuWFs8KNnSN3epxC2m81BmVwtZzuDYzFGdvpMoLCRRFxcf",
  "key19": "5UGhaWBMGoxRXt16K8cuAbJ5wpVuHBcyLTT5B3WBRLnK5TCVdC5w2rhtLkqmgkMcwKTyepD7uqepK1eCeCsR9r2G",
  "key20": "5BeZE3vCyz6csA5ZTrkb9qgwfhmSAQ3zC4c4hRuJQsRpG9AjWfNB2EwuMRuJYE5KMhn6MR66byyH18BmEX6rV9mi",
  "key21": "2xyRDGujuadpd1khR2jBQZkbWAQ7r7S5pUyiKhui6gPKaanQJfdw7LykCxHJpawRhKeekWmQreGbfoaWZuucbzg9",
  "key22": "5PS32JQdAWUYPoRM2vezfut5nrQKVwR2utCv7HUtecChCyfiykuNn7yRnx2WDPweRDvkBAZz7LX1tHMitq1Cx8oz",
  "key23": "5ARtj7yF6A6L2E83aTtSEtU95Z7o8nwz5KfvFDRQ8PJNAcYRjpwW7emWdtyhqc1m21p8pcFuDAs9bEpbw8XwvLnY",
  "key24": "3MQK6DsSxTzefg9a211M977SX2pwhd2V57gsiwx6Wa9e4p3pQFXEhsLhvJQaadm6L8Y956E3pQJCag8QiQ7sGkMf",
  "key25": "23DmkKCY7h1ikNhLjZ4zi1QbrBcCikiCHhTYQMiFNcbDTXEvzoTkmpsCSw73tseytR8hNzFiWrz31NAgxdHeEvWP",
  "key26": "2cK5qfymANroeDQf6RQqkHzum7JzKFEXurfAXx9boZyy3DnEU3gzfP9a5jDYAWjfbnd6DsP6xKGSv1qVBYvuxq9d",
  "key27": "594UHuB1vbN6QZcD9A26tkgX1ie7xAZ8ebtkjs5fKCq9dqQt1X5QD1Qdt3ZHpswTQyybrEBuAKzGma3146BNzVo8",
  "key28": "FhVA4fpVnaaBtAfywAugoejVQCMZoLiaa2z9E68g8QigD7uzXTcmk7Paok7zsgRkGvF16DE2MGf2GnJW5UQQfPF",
  "key29": "XSnU3g34avauqxGtHpc8jAFByt168wPCeWDBwGRVbAC4i4XAqo3auC1FkrTp74KgBWTDMs5oSyPCDXnHoEfToKS",
  "key30": "3SvcbEbz9Vu86q7Xxo7oLJBov8Z22UcbSaGJzHrFbypg8yvY1WjE5j8ueVw2pkR9dA539rApYVHS2xbkX1gEAVYJ",
  "key31": "5BMi2rPc9CBQ5hcZun5idErRrc8L2T5kJcHnnoYfn8uD6xQRSXatsTKpaYZezcp6ySks6UuWnf2eBFJrLv7vT1sa",
  "key32": "5T9UmuUB5RUvtBnLfok54XbEFZDiLodpRqWS4K6NCiFVjqB3Ze6GaeBdx1QwwBWqgjwN9Mhn8NSLkM3X98BDSXAK",
  "key33": "pLQr5XSLdwJ4gAhwrsSKGWcrA3RucEdK8iZDjSEj2w5Ha5ad2itmLAaT2ZSyuU4gPRcJNdga2kbitok98ezRij7",
  "key34": "3qQd9vfk6x3VWPmf5LPhHfZKgvg1M9sAh9Eqi1ZJu9z5FJruBomUpSSGybgsEUPbegbY8ux2SNWgmzWF9MtZSCiu",
  "key35": "2ZrRrmVJ9gxZynePKf42ty36rPEK6zXYPgePDUqpN1Q9dRMxmHjmvWb2z7PE9pCSv9TX2wKwDysngpsp6KRiyTyo",
  "key36": "4mdA3iqbezkwdUD3nMGejCHcMp6efiAA5814qAg7G6FczDD7PBnCcZ1jigySPR3dt457J3uCi5jDx1pUVjnaHkeu",
  "key37": "247qJ3WvYhjcShRGQzxn8M9jTM8B42XuQSPhQAQSnto7cL1tRgaMuFwbWZZPTZkBnGWaY1cUcYv5BWZc9jhLySkc",
  "key38": "4HSKyUqMUDMkoYJ3GibsGmNo3jQqbvma3KpFoC2L5JZuCBQQKb2KfKEEBYyJtcF4q1x9L9sFvrgVYpYQwCPQf1gR",
  "key39": "3HXh6VM8M4VFNhoM3SukG2MSfgYwEAo9zWoMJMngVyYifXmcNs7FsUudRwXDsJMzgW7FBXvRpvudkgpijC3BJ4uo",
  "key40": "5vFphHZ9Er9JgqFhsyYTkha3FiCJKMYNZXFHtmGXM5UYYP38vZCw963W4DQ7ro5Fqjwdx5AgvfKdJAdujcV2Sp6V",
  "key41": "3eH5ap3pbhso68D7emmT151meNjvyuuXYuE1SnbcWJPYrqrY8jJYch2HimSDkJQ4K6LZVQjuTtMbmWANR4FuWUaD",
  "key42": "4XJJFeoaWGNfoAn63kf34JUn1XvZH98bPaLfagK2WzQ6EEV9gphYV28x8Ltn3HCfqdhvKpNA4GRAhqxDe8FUbezN",
  "key43": "4rQRC52ddfHTc98Cp4sciDMVTA5Jam7C1BnaF45yrLKz8tkgPv7v97pQLx1t6nNqJzXCa8EcYnsMJN45hff1yjtc",
  "key44": "25hqwyVWiPMjhMhsrYrtzyBNshiJNZ7UeXgvag7knVevkpmdMQ7h7MzGbCW58GnCvxUq1hbhfRjies4y3cviXdr3",
  "key45": "5G77kS7VWnUGvS3UNPu8xWcTM2EDtvZcpb41mCopXwjJ5f133ixKSWngDqkzrVKGrzHyRioGn4eoXuC6RwiMdQCg",
  "key46": "MraxuyRG3LNy3rVU9b5MBmxvHBXQjbc3JUZ18k1Za5XDdih1HNkzDZ43SvaMkYSJDJjUkzn3zxGid5M3ouHomtD",
  "key47": "5cLY31TJNWy7psk95z4ez5RZ1FC53nyWcMbYVLJevcT9sFoRo2zei3Wxmb5T2sRn6HisaH2yzkBxMoz6HD6DmmPw",
  "key48": "6KM11o3qwPWsqnCkuHZ51gzz4vTc5DMQmuFzyNyAn3ALRdZndQhk1GgjHNmew9kHbGWbSgHSdhwCLk1uA1EYavt",
  "key49": "2xjz9UypQsoQaNrnjPPz2YV78zmoxXbgWh6fJMxsd76DDRojMr9Nh3vJCenpjM2uf5G3GZvS2S2aPx6UzUr35k8Y"
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
