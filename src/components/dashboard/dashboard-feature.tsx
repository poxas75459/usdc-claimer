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
    "3pLhZyCusnsxJpfTUWE4PG5tF2DHaUdreyNvhD4H8bxGfNwub5nT5UzYSp9uQhL9rwzKwU2F7M7r7MhyeSoFyUeo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QJ9Ye24pA3EZVLqb6BupGSzfDdXfogsZjP62aFuQxHFfyXRZxXhpyZCVzZZZDFdcUdgnoAbquKtPjZumibVsTKc",
  "key1": "47VLGzvC3hDsrXaGwtKQypBAhTP7rSA1xVirshNphgXd2yhtxTUkKySKt4x3yf3H25AewWb8mtgCVzUFJDoVDA6E",
  "key2": "THS38zAJ39DC7ajuRoBiJ5LNULhxwmMWn7uMCm5ZgBiKkHPdDHUKmYutfB7y65WT4ihYq4FtC7SRVCM6Z8fUYfe",
  "key3": "3wsTzNPvBzbCuwwBoPUdnBjnA6FddprvhSwq1h1REP7dnisi7LugW4Ge8XciCKRyrgxzU9T1u1qYLjzpGALEp4Hg",
  "key4": "3W4VP7y3qDpKLKyDvMu1WqzWbvBXRdMkksBmhEM8wxferr6m5FQdiK7Ry1yaNAbGERT8we3JJmoLTgNo6vqgacon",
  "key5": "acULV8QrzxGMjvKKZ4KiPMxsVn77gkwUr5L4Q5V8XiWDxzgsqyE4jwgQspyLF3hMvsoxuAHATaUctmTcbq2KPxK",
  "key6": "kfgoBRyGADMaFaLP8LVpPzczfhrbKHeQE1WoGP1qTC6RYzrPk2GbbVfok5GFXHMBk9Y12zf4ZxBD149qJe4sysy",
  "key7": "2snQjiRg2PYiWg7obYoiyjxkq8tJcg1ZPWP5DEZc7xi26utdxW2sb9LQenUfK94q14NNrVfbemPkSDN55rTVSbTH",
  "key8": "2BGpwJehbNimwDuC3eNAp6FMbiLpLRY37NRcoeY8SzAC9uKUdmNq5X4hwiHf3dnJXxq2YhpaZT3XNNqAp4UZ5jY1",
  "key9": "2qFYLaubm6Wxpauh35n8cVXNpkwqqPJqX9Yhvq5VZsFfzfhEBcyvcwbF2xPU1iHBu5AkgnteGiJHgVLrjySuxZTR",
  "key10": "5q98uxr4RV5gMyBQtRCyGDX3YjJtrJ3EwfagMW8o3MUL5xvnenrj9ZEi4udf5xk86ibCEfV2rX3bbrjuDj5dNwzL",
  "key11": "G9gV79HRJSRJ5CDYFqb37wqcsHrM2vLYNoLdStaXf7MibZ4gZyRgwPbiB1wCLJiTz8HsTwAUVYFqvoVD6ehHgP9",
  "key12": "7kNkW3gDHXYyphcZD3dL8hDFxtCu2s63F2HHC5oaQS2rX7pox7ts8nh6wuwPcr6S29tBGkXiXQfXccUYQGLmjt1",
  "key13": "4eivVyBrM6toZQbBhwxK3btybM1BG1YGgpphhkqeHTJYFZvJt59BmtLzBrH3ps7ZUxMAJgzVt5hmsTWNJKNiz6E4",
  "key14": "59QBK5a1S4Bcj9SSuEpEGQbH4o6UrLaDhtBmWU9g5E9SCRX4gKChoqiNVk87y2XcapHmvc8pqWVMwqYpADFoHngG",
  "key15": "JJFPUWzUMphVMeXQ6XtP76CfGKG4Dqu5U92pkti22yRoF2LoFKNhbczgsNs7CFed5M4JCHhCQs1QDFRdwDv8yT9",
  "key16": "2bijUoddzcR5wwoJTmsXny526hiBUaNZStoUJGaakWo8DfU8hzzGvQqLLAa24Evg32SyaFh9yLswaKN8Qmsx1Up9",
  "key17": "63tc7JibyvyGMRiBkAbrutxbUm7MMcbAQHxvjc33jvCU9nuSMyvCahpLJJi1vLmzGWLcJpJT4hgd2i6FSBwTdBVS",
  "key18": "5zTzANB6tF3XWjmhHWfKAu6nu2NehDbM3ueHZLTP3YJcpqwJdC2cYcU8YijkoVsNAA6XZHkCL9qYKrcVnaRbnNFK",
  "key19": "3MHdVpxv1AWb5qifiTJDfTtX8gbpTb168WavLz2aaYYFpEoeFtmo72ccvE2N882LkARg8N86GoM3e2XsgEypPBb7",
  "key20": "3pRF2K7uHtcmNN8LYS2DU32FSSHzSy43PHFfZfYC5dLavo2w2J3V6ywR9mPcCPFxRXz8qHY2ok6LwzNwpin2xBgM",
  "key21": "5BNBZLEpWcUvEtsoXUbKfnsWXzGSKhCP2eSDYsQBsNNYHjcaHrVmrQGGFDTYabdYtieTY1Z25mmFZQRbFaBdZm1g",
  "key22": "5SiNFf4iEG36ZxF47jTTYuVc3dtW4cmi5kJ8XR9sCTfMnaBSgPBRumWzhRyguhWmXxqGA2iyLQi2wS2eVFuToXgf",
  "key23": "yeZfw893xQvThzCNJzH6Cp131VHwLKe8WKjVfyzrGoUiCBVhtpcDsNWWEG4M99wocUo5uFYhqoXoowUtSjPKBbz",
  "key24": "5VAwgJwqPSCDwRpAhfNckh8cWkb7HEL7E8ehxfcstLNueT8XzemtjoztCPsX3Re9TKYyh7Ca6MgE8gvSQJXxRitz",
  "key25": "3ZKyThyie5jMN97FZGdjfJmZXHpHMMpropCHsU4bvdscWEzdcaLBFgj6UyDLaqTA4nVfm4H97kR1GvG3rLHoq7cP",
  "key26": "3EeEkJwF5Szz9X65LzqCyXtJR4aLb2VPQqTBUGr6FmF6YSGW7TWt68xN4taocbkxeQkyduHJucmkYgzVwH9npNZH",
  "key27": "559g9nqMLSNYrxeXtSTnZeVnnZEP7QJoKvuNQnxWJJWCGX5B7XgrWM7CrJ9FmJnnCEqBGR4FKHfd7s3dfasBGEbN",
  "key28": "3Y481zHSB7Fx1mcbRdkm5BjKBMnhvYq6zcY3E61SrdN3mGCKD4GoB2ePj7afmhvjkUH9QmaJEJffE5LpKh6xfyWb",
  "key29": "5PQs1szx7AsoRP4ypz4Aojc7X38ev9ewA49e2uKftDaivNAfa2NGarqKLBpjcHJF3N3cVKTHCnXCbiDLuDLYXUDC",
  "key30": "4fo6fgm9Qpk8Gbm6V57EsTQDtFKFCrovh2S1oRhNGJPkbcWo4Jmg1VVzFR1ZTKBKc3JsMkXKqjRneB4gwadpqnsD",
  "key31": "2oeygmUg2p1qPQM7nu7UtcSUjhkkgAviUwQXichtdCmscdq33nBTPvKpFk5kL64VAfvDkLxb9jeot15UkfaQFJwA",
  "key32": "5zxWqS3h2ytxVYmNfixFpWzs2xwKEYpdcnphMvj3pamifUviVrW2r7VMXZahh62ewbq4csUqM54jZWbbA7a3rars",
  "key33": "1prkSEXLbA5NdjTv6kYkPthxfohxn7chiCaGEMdTUPqTc4DuvTW3AJLC9bMfHCcpEUfrrMvcvCBn1smACiCj15x",
  "key34": "5AKdVXFEVVDEEUTkQxkbEMD5QGiuM2pykT1mAQ4bCh57e8Wt7PVshvKNs2FoXCgWkehrr24ndriiAjTtZvioiVEJ",
  "key35": "2vbVvs2YeAQZB6CzQBpNA5d4rpTPY7ePZuPREaPXTG3QSKWxKE2SPhX4rvgLD1gaAjrdG9JpaBVLpvnYE7yF88cJ",
  "key36": "34B6FZAw3jB6DSWnrmAC2Z6fLWHRdefFX9qgk329p8w9DKCt5WA1PteDjzNtMroVNvsHJHH3WVWTqqxZDsYsTZjg",
  "key37": "WZ23MXkvD8myMTL282RimeUh1xV8nroR44L4YqiymsQiydRCNntzmcXpUcRRrqS4G9Am2kh4K5pnK61CcqkQJCi",
  "key38": "2XxnwXzvTmcXHYsHBJ5gcqCEaWKkXFXnfYHQ7MHJPCx578RJwcuSci1avae7jdYJLWPvEG5Ki3B8qkjVNXbKdagn",
  "key39": "45savMiEx5e3patu6ERPr8pzUHbeTZHi5XcV9EgkpxLd8ENQjSpTBE97CKd3UQye9ETqWrtnuy5AQ7cT3qHB1K7J",
  "key40": "3K32esb1sXAAR7uRxPhvStU85Dv1hQrjMUeNdxTkNYqii9BjbB8X43XsUnKagxEJMsB3jC2C9F99TnEjAbWG7c9h",
  "key41": "5URnjWurXudfCnioRsWvVN9MQAEDShpCAQDj9tCWfFCX8Eqh3is5S3sHu1xhpwHFKMrDSmczAZQren13NUmppPUL",
  "key42": "J9YxJwY3qrDt8zNVA3FqgKeww59wejpALE32od8hYRRcmHYuLqUrDajZhfNa7rH2n6uSaekydgRjX54vsna8Bkw"
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
