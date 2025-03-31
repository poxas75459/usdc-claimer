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
    "hWYFnGg8e4P2a4gB3PJueakz4iFLgagSKSWEQocQtdsWwUkZV9VnxtaPHFj3kgZj61cQsM8XEnaR5Czpfx9JBKn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FrENrzfFETaJ78En49EisdvvKesqycoQMgUcdA6rQWT2zmFDMcpVn247QPSHU41y94NfCVUQhjeT7C4kgQK7JiB",
  "key1": "5qKHamvUeS6MCv9SFJCqgYCwtE4uTo37gS1t5dcXGFk3AA82mDJhRc8F124aAGUtXmXK1wYkNDDFtwUcQyGq7Fjv",
  "key2": "2x4RdP9dyuuoTELg9q3Gz5c5ctfwt5KafeUAVCaPj4qiGqzMPHieNSuTMdD2TT7c1DFYwEM18oFmz3Yr9uoAxYJ8",
  "key3": "5Tez4MWgPLQgw6EziUU4dHNbhzKmhg51fJ16WTVGJmPLoXGhZQgoYz9sXZVPrTk1mau3mMHkkDVVrCjqfCdEyj6b",
  "key4": "5eX3BJ1Cu642YCJRiAsV5b82tTxTPyWqWdHA6qGqcQjFWuodtwcJXbTMjtsCENn79rBE2E41rCJktWL6BepF654g",
  "key5": "46ovKHQgNCn1hyzi6vQ3djPMYJJqCf89WYawt2nRhyRSKzxqhQxNeVQZ3ELWwBVbQPXFcVY7pJWmZEvDmLUZ8oQG",
  "key6": "To5be2FDijpSy7GPHqy5JddsfFuK5uidp7fVwvUHRmnM7n6d7EJoDgTY8ta1SQngVFwfLvF15kpLbB7bQSQqBMV",
  "key7": "58scU14XFZZJQR5GuzgzVmacjkgTh8WrKjhzj1hHjARAZEY1jpgKQJ3DadzKW2w5cYJGwRXtsxC5cCyocrzrPeYS",
  "key8": "5CLmp94jECJEG4QUkfGjYKfKWLFP7iKRr6WHv5Teefa2Z6U88zDETdVLC79x6wWukGQFWJsgNUN9hFEDcFn3gdnX",
  "key9": "4YnXbR3v9HwWrpMAkWndChig7wCUgp7bLpXGLrqZk4yByMq4HLbDXKwRrimRPYew3LQUDb6Lpg64B95yv7YmmDGY",
  "key10": "274jMeEDKtC7UFwTLvVCKRpK4t1YdsVssBBRe7ae6xZA5yc9Aguuw9T8SWkfXSqKibniyuQSEauEvde1D2dwvUe3",
  "key11": "4fdPmMtodq2PPndUXNcaRZvjYmtNuX3y9mMFxhfwfowRjhTyZrkceLTpSR9PqGNrB6udteAXg3tJzQGtFkJsJ7pe",
  "key12": "2MGrXATbAGmYw5ZZarWz5suK15XtKtTaJbGeRDa8UA9zEj3iA6drVQuwWqY1ddqW5ZoAVBoNMkSx8hn6F2qCVHcU",
  "key13": "2rppGXNN2VJjhMG1pHtEg6SdetuDZhhaJqxNfWGUgbfF3GU9XHL2BRKcAQ7koYLjLvqQUzmCEty1hccACkfkkBUm",
  "key14": "5nHNazQAqr3WP9rfqzy1xXWogQpt9hq7zUiEKmPyfedyVSnMWewNSR4ap2bp2AC5hKbgkMK66y4tKA3tg2R2pcvr",
  "key15": "4WM1X713nMpCtf1S5QzQn8ETDN4XE2hDkkui7awYNdec5CpPmsKzCed2dG9PRYXX8aCdTyW6EacjBFo43vftKX7e",
  "key16": "4a5cjT4VGddqZqU7hzPYiuqd2VxCrv3Tb88ZVf4QPAHeddHTv3nbxzXThgCQv3tVvbogwgW91GWNJ2Wx8iD9dwMK",
  "key17": "2QaFUDKBzz8pVhonUV6Tuf8EXQzfSAWd4sLh3PhQrw6KgyiyuRF3PfH4bUGZrnSUndcjwQTvixDr6Vah3PrjCy9A",
  "key18": "3Umak8WS5iMtoJz4brpQHSLaz89Q73coY4FZcxDbP5uQEVobRwFkre7AT37LdwAZDBqpsfrBfAEVpF53CcNh2jbh",
  "key19": "5FMyY4JKqm9sAW46g2hpACiPFZDfPUnCHgkg4eRtod5bFVGeYTSPyJZorjn9qVV3z7Wwi13iPFANkgD9CGp7F1gH",
  "key20": "uFmxfZwGSHF4N8sJ9M4sPNuaGspn8Rd3dMazBzbGeJWR3DTeD9JRC7uedUNLPL8zqTjFKfr4SAxuh32YpWJX8iV",
  "key21": "67QQCcVdXv3GRfWNeAHtnTEybyFtdVabX1Z93qjR24iGuhbcAPtiE426cakCTwrwRqELsEUshdS1Kb9iGc8uao7r",
  "key22": "5Ss25FvrBjrVr9xjBkzsrxcDA25oRSHDoNHKWScGdZAgKYdT7ferSwQq3oBNWBqX4xKCfFRKWU1jcpFxgCiSkncQ",
  "key23": "355ZsqCUeosevdR5yG8pwSSWEHWLYP4LJSpfFHwYBpeJZssSHRMaeepzvBg84ehL4V3JmBpM9s7EL3KkTufHmgm3",
  "key24": "3fEyqcBTwDoAktbKGwpNXRSPRJxWHE9dTrRhLjgyUePMnimrPByhSpd23nVw8QLECNgqgfis8hQXnmxNYubycRCg",
  "key25": "45F7Yhq6Euz1r9aogeWFAZsaWHmPXZme824Eb9YqoVvMt3MAmXXeKeXygLeJM7jYKdjS6f1CVFSQ55knPiPJM5Bs",
  "key26": "5BFTywejZf6Lk4HqY4X85Wo77ZXNSCPSwA8pdvYJUQyQjXNAqn9UCF1JPnPTUcD5iSF6URjxrP7sovQmaq8YnhMQ",
  "key27": "67JDbuWn7uwmqSy4FeYHJLfHSEm5YVon6rhobzhsWbEz5ZDk8cWkNrzoeWN95q1fGiQhoWFwF56GUcVSxCjYuoUx",
  "key28": "4AgK3eCjxp96y4MjhkmFjsSE3ZapaUc9UPXX8ahGuEtbKaAVpZbAA1q5VNGB2kcBxZjG7sBpWpusN3RAjqn8c13a",
  "key29": "4gGBZboAuD25tfeuneVtpNwakw7FeJw67aAeP9ZQyF7hbM3ptCUqCK9AJLym6yfhVezzRQWQaHgY8sLPZPMnSSgc",
  "key30": "61zFcQ6kPhEn6PNDgvfH88ZtXL9vmykgz2MnwEEfoEjNsNGNKLet1AnLmWXxYNkKYitAvmHWBQbA9CG9ywGn9pgX",
  "key31": "5J6fLgqUniBMAivjfUv9yasZBTA2ijy95ngC9ZjoRMtVt9sY8PzLbdAbVMwLeK5RNFg6pfhv2jPXTxPLY1p6XkPS",
  "key32": "QdQiiRQcwJNFtKyC7DMh81y5Ke7uuUmvSCR8ko3CmqYsYh4xjVR6QvJ4URqjYRe41M7U5iRg3wgWvtS1RUXzHrR",
  "key33": "3LEUMQJDvxnpjTRbuy3ghgxw58T3DnEoxQGLd1QxYUXsxvubpP9xfN7dHmCbT5LqzVQ4ZHNeqTHxyY4VyVwBoYwt",
  "key34": "3gfabfMegj4tAYaJTr4SqykaQoPs2pL9EWJNhaMUYLg5FkPohjVhtUE1WTS9N1nCvK95xZvRd8Cjcx4AH7m4JcPu",
  "key35": "5GekyhVL9g1K5jz1NhXhjm2uYx8xtr5qvjMvoJkpRBqmriVbXZvMWiUE7j7JHu3eqwz4bVRZGhqAYLB9wfeZhyY3",
  "key36": "3JFSNpUobwGAMYHFSW4PXu4tTCnYqnzSsx8jVDHEftbXaDaszuXYqFP9vfFmCAfFSj1n398eQGCT6pu7xUR6v13T",
  "key37": "YFh3VVbYJgUU2MjpBnScaZNkqVjL6TTxA9gB8DBR21kkYfajRXeKjXbFmrrvFz648KryFsKma8y9t8MuwonXsQV",
  "key38": "4eCeDbRAbXFtmZfVdpFrbZePCbEEY6xa49AEaYPGZefbaXJax59SeKQwLdZA36qDzPD6qVmjFAWLMYeBaTEBZdLu",
  "key39": "YeW2M2n98x7HEZr7KWmjjTm4BzFHZG13ciCMnUDQxn5s3pMYTJ2rHATDiKXnhahRJq2fcxEmYV5CXXaErmYkQpL",
  "key40": "66KuUNZyp7L5FCv1xkU1CT45vWrwJ8s4HaS9eB7LrbYt6xhzSTtTLcXUGJxvubK1jHVGhJbX5f1bt2Ptb14iMJPN",
  "key41": "5iBxKEKGAJzDQCYdGmf4qD6DtVgV988q2z9v5dD699mC6sVHB6SMpvPcS5gqJKBLGu51Gwon2AVoK492gT7SqySE",
  "key42": "2yGiTbmp1kcpPknFQ3qcCHFSLwvrx4CKNXjYgHa17g1WaMfqXkFHFHvHA6GPob6W3Tbd2A5wTjD7ee4GH7cTcrNy",
  "key43": "5K2XDef7BFGf6QohceSrGFixpgc8uWGSdNf4Wh1dh3434NxSMor1YCwQdYqvr7zXPSeDjeagMjnyy67UkhvY4ZXQ",
  "key44": "5ETdKRtDFKzpzxqLP7xsjXRXTo54icoaVxSjdCzh2TpsamcR5FL3og6DKJG9ApVhETuT3DxhZUT14HtvDde8dvY6",
  "key45": "XQRGCXWQbHMYpjLyp1WpsSJgntdbv55h9N3P6esgqcxmdf3zjjKZgdiJbq7dwUxwjudDQ8KedRmcUg8n9vvQA4m",
  "key46": "4tVmLsAqgv8PkLezrXjqddXtBfCPH8EVdavpDuQeCCx1DTRSKnPr2ATgEKYpJnNp6E3PPmgvLWzU9RbdfT8GYwfa",
  "key47": "3cTuauuvY9DNW8z3r6ijQGuYMEmrkPdU3d25XQQPTArBNBHuGZ7PbmEKMQ2dsigbZDxy3b8jW3tEHGhDq1Bgkpqj",
  "key48": "4nURk7fRnvL85ee2qrjzotwdsDXqqKX8h7wwJCYBecFmKBA8LM6b8on6qrSpKd1DaQ33YgmKBKUyQLX9yhGm5bC2"
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
