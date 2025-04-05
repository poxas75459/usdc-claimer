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
    "5dvKGbDV2XAXusNF33wcmqMpo62MjqCWPHfWVygwfBydefYRRCExiQSA4YFz56YH9hc2QsiuhEZLcAThwpxYeBkx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "G2TkvDnp7RTRJZVPNLuzmZ6TDjbMUWkg19tpArePCJMR7MgYyZjDATdvhLfsQkNWTBZ1nE8AHduM7s7r99Jz4Fc",
  "key1": "51kvidaGnCoML8gapC9dojHKqLUiLtfk2px7RtogW2tpaBzUsSCjxbnxbxn1jrgEea1DJYJ7nGYb88mR2So4Rwbb",
  "key2": "33n7aDVAoApYZPXofhRCuxQnkwQWnjojb2rPzcgNoYhM8duNXqe9qtLmCXktPk7KdjzmuJ6QX2FKRhNtgmzRJSXR",
  "key3": "3MUaaqp2SEZ3HW91gNvqLc7ninkvJYReQfHDYVw3AXENTLPffcwJtzAD7rU3yfP5EHmN9Bf5jrXhG4sBvVC3opYf",
  "key4": "4rHSGzhgvrq617c4nawsF16c6PMDvun24aRS2vMVce94VAVP7mgQdz1LMpg2br4S81LrnNvBfE39pkTd4Wdxqdb1",
  "key5": "KC3xbpGCurKEWFeGMro9cwxRbSLztPvktQcANjM2Aj2XSiPMWhehWxtgsNTSj8MQVWxDJpUQJEtQ8bxzm2KJWDu",
  "key6": "3cLPiAG3XyrpdWaqb3gDbSby974CWE3TkCmTirWuaEsMqLvzvpNWoxNTj1sbhMpskmeZeoZCwdU4n8VYssknG4c7",
  "key7": "2k262u24T5uJYZ816Tr415hJa1bGYSCFKXjAJktAfu1wtJaeUUG7bmWgJY7dMGDMLH1QehiXnTgAAReHStQdJK4T",
  "key8": "oRGDYfWoEokf9KwcxXFkeMmdwcbEZgVCiAWsfa6xiYkUmAuG3eCby9J3GQv9vMSQw7gtzH8iMB9yds4um6tnGQM",
  "key9": "iAhTptTc4MHrVZkjbwibSRBwE7gwMva9wwtzu5AVmPnXidw37PfR1tbu4EkyiyE6UuPbjo1UmyMATA4hXNrBk5A",
  "key10": "4tW9FzG4MHZ5NkftPNNpBLzSyi9gFGB5LhPJXasZ1Tz9YyafnHaCVDd1re2gSUGRQ4UGfF6Y6pcHikkXojFTUaqq",
  "key11": "4j1yiu2hVppmeHqZUVSN9GZ8ffYKZckvUaaZcYxPeSgVu5wtdSHo7iQLpen9UWWzz8Pvj6LQsgcHXSM6UzLD4gVw",
  "key12": "J322FgCFH7bJGPnS6edVrMagh4wv9cn3fMWiBWR27YeknHAvWrNTbvnSgfH4Jg7BN5fZMH4giMehGMXupLcAQow",
  "key13": "26DrxWuNcipjTXxyo72LCzpPRwoiLfhh8Lq9Mb5vanHTsBShcTpiiaYHdiVQUuPXytZpFSwjHPfp6Xf4AQ4kwNms",
  "key14": "375kE6W5bFF74gjkLLtMu9oEvGZ8twXahvABLsGxmJ67jY5ccjAswjhTfgMZJ4M81FaQLKDr6uEUdwQ9VB3zYhW7",
  "key15": "47WsnPGFon14fp7NioWyjNYEUgktUZDUPUMkqjSN5H8QqVf92jECGXt2DmeDLa2Pg62hfuf7PJyMA1yDDobUaayf",
  "key16": "5qx9NZwtJ3JCPQEAsivuAKcNF3nnsBUbTFMj7wi6xes1Nkhbz3LVWDuxX5XKmUMgiA442EZaoKsng996YiYPqnEC",
  "key17": "8J3Nxy9mtJPTi6fszpFFpWt4QyGdmemxyujFCe4xXCARFqbb6z18HZsEkuDJoVKwv8z2EeTNYkqUxXsQcGBFaic",
  "key18": "2fG5D1aGzdbqQHz3ir6eLDu9bJtpdJvCLXXsyS1JNQm4xGpS7q7P9Ux7NeZ4NBtJeSVQQt7K1eKNEQjFAS2kETWc",
  "key19": "3SP3uVNYR8Yjd2Cxh3MvpvF35fRxjt4XKmy32GHCBpikVB7rHisETUTegGTooXjnzpw3HKwRZ2NJZGBmzgkxtjUQ",
  "key20": "5ewbJo8dKtWU4ZBWz8sR9Q5es2KNMW5asRVXwgGsdRSvz4k44K34xmUB8w2rREPtP55eMugFDdCyX1sCS34oqrGV",
  "key21": "58xLA91DkDDgviT7Vh5g85iizdj7VihG11BspgXdfa7eaCPoUdCUEHX47iW3zwAxcn6ya5joWNU9G7n8JKprBdT",
  "key22": "3XVXpTNMt6az7tgYDmGLS59gfPQhrvh8ccrk4aqQcD2NLyoWDsfJ2WG4bqubPkMcDnv9ePDfToeuJYvLrwFVKUwd",
  "key23": "2ngDJknokH2F31kQ7YjUM49QVkPr8vr9hk3AYtb22E2C4VL4bYkwxinUGb6PhWN2hCMBJ6JQ8Z8sMFwK6HBdYyt9",
  "key24": "2uRGYkiAAALk1b1KmHgppGsE98e6EJGkQ9xrN5U3QsVqpvvpofXDrXgkASTRj645dZEZett1mrf3iUaYkgoTsgeC",
  "key25": "2S8oi7fGuauJwc86Hd81B3SYYuDSNPTiB2sAieTknEKukUa1UWio9LaESRrK7Ysgur9gmJdmA6EzGpyt9TbRVZJV",
  "key26": "4BsoXLXSdECV3SjRYce2WJZotaAfwgDvQxuScM2up8hfXsPyAKDYga2tMBv5UET2pv6AZhpdu3RPqVTqjKKqxNmQ",
  "key27": "2TjxRpAS3u9uf9p4YUq1kBhrbKuVJfxDCLpwpokLTcG7NRLVBGyanzwuY2ty18h42cUDtKywxZYsAGHoLe1ebXTx",
  "key28": "2XVorrahwAZTcZ96sxHUyxy3TcEXzEuvXSkRiShApdkM4915DnjRvn1nMZXMbMczkETDZB8FtWAXbKb4iC1EuX98",
  "key29": "KwG9D7Vzz84JrF14CskWTdVLfmpk3nWr2SfTU8UsycbEjZh62mBieKxztGjgJCo83NkpCzfeb8E244Bme6dYiwA",
  "key30": "45Qk4HsTaDxMS69pHLQLc64s81g79dmPfUATLnVj4woVz3fL7sQBXFhKUBoFv6EFNxWob9Une7hDaYgt23FjhV6n",
  "key31": "3yUh8ze5bHzJxqHeVpwRy8K9iawQpxU5whKCjW4Ro5GTj3bZL5r1sG4JeNLVdW2wWXKpWtrqpBJt8a5rdVJWx9fb",
  "key32": "4i4YyxiEpV7gjxWa7RakLXguBgcKrvKv43ntPDYSJUh8dVCaxL3Rr4tRaNQQoWpcqacsUiavhi7k4eenxKDXKwDW",
  "key33": "d5MSy5ifJSod46iKwvUMp3zG6cvHZRWTGKFvt56xdhnUK5xXuyr21gysStcx9eaNzraqvmmgFiUponKkBixKxpk",
  "key34": "4KBSMG6xmTr5qyMDUeSgzwSJJyanZXaEz5CcgoCD6LFke3cFwrbnu3LWR4RCrRTnuvQBiyFow68MAAQRK6pSmx5h",
  "key35": "4nPpRJeCuV9wZySVnDNwupSfPjhqnPXMdbB1f1GKRMmtYs7WWomSxREEsHi3KkhsyAaGmgsxZKuixtCcxDu9igMU",
  "key36": "3aVySoceXmrxXZkejpaVmEEhvHaSVvaNHo9sFTD8CYKXX5ysYiZSGgDbo1i8YWW7higoprktuQo3rMWLtDnVFMfJ",
  "key37": "2fdabh5ax2DReWnCteU7VVLQJ4yvyghzenqvVZSSfnA9DuHwVVTJj8CHxPtiuNY7qjfPuj6Bq6KCC7KeUDe6Lb4e",
  "key38": "5DJoygzxjdVs1k57dUES6rgEj6nGAzg8vWuLsJDYMnFKYHrUVMfaewXqLyeKkQcUgboMEbne4W9nmsupUFDFk51S",
  "key39": "4xXLuwQc1xDSG4Sq7F7qSq1h1p6BNfETQVonsA8z4qPoGsVLQT9aJ7ZiKjCJSibQuFoSesJWgNX2bSbmiFXLqo1J",
  "key40": "5V151ET9oxR7xwDUH81TBmDAvpAPBgPJN4LunwgPhMSijZ7VvKcq4Gu6e3AKaabuKmjJUBFNesAc1egp6ggTmmaB",
  "key41": "2KH4oLp7vwVJy5xz4gYd4vB2DVWBAakSgcnaZUniKcaNWrtMFrSMsJPXwEDxJT3bSVoKxss7AG7M8dHvX6cx75ru",
  "key42": "3hrR3Nk9RUyB5Qe3harFyUiBwYTaxyKKn1T9SJX6usyLW3zsAgYXYWL84zNezDT58AjhCSaBD9TjeGpCVuTAUUPF",
  "key43": "4vThyj8ddWMyAi1VLmuMW9CAysiBLFG9GuXxKEf7FNd7vnwiKYQeDvcEXrcrZURrNTK1ved6jKrqVL7cRjQAxfHH",
  "key44": "2cJAS6fKXWz6Yi7gEiRtXDFcHzWZ7fmpkF5po3K2gHfRZqgYA2VFZRtWx1Ua5ioHd9YVoxN9YwNyMkCJ8EpAYmYv",
  "key45": "3LmjCBLaooRdftzPVrjv7xug6rfybDvWL7VeBcutPVUXhywaLmU76dVxgeGyLdaBwYpPDzVzVMBaLK4KsHGjxr7"
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
