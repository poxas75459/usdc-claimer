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
    "5MEPaG4HYwRtiCxQGSkxbQtWrzmeyYeQMP7ukgbMiFViJqxMQBeHxHnmNkZoVuTfuBXLTh8tkb3Cx8pGtnAWyaiK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VgzKSNdXwUrHP4BTpgAJDXao5n1NoTuzpLbXiviVvKPh2gunbmrJzE5nHqBGZc7s4ss7xEo3NyYkmWYyCSLf7vf",
  "key1": "2wP7JyRsYYttyjHR8ZUugSQdALz91WrwTcERNJUK7SjMQGv6qWDGdvS5ceGRMqjcAskSZv8gjUmCQ2eGvJrRsZaw",
  "key2": "2WoFp3E3kqwAzRj4tYeYsH1Zi1h8LZgGgxSrZXzvJyErxP7MSqLkanwshB8j81sQ6famzDrt8pbndYXisnT3RcHp",
  "key3": "3r9JDtSbgZDLd1n1KX4mTUZiWuDoR2hdRkBnrjpvdan4BUfyDeMX6yXYEQ76L5BdsmVYSYXEEbWAGYgFGTK485XG",
  "key4": "33UL2TnNcB92hsgmgePYXZeqYVw37uFwvfNcBh9pjpDQZjtspxLzvNP74sMXkRLxSr8jkzpXMwVNBiAVHsAC7bcL",
  "key5": "4R7f2dAHqnZ3dJrziy7sh8xJLQ1oqBGXZTVU8NvYkgCnVvDf41dGtDZoEP7cVgxf61kwaDcoHqXeZa56SXhSB9af",
  "key6": "4bAhcJBxnez95CGgsDtV1WsoNEjW3cjgMoAKJnHzhhy6V7dPBd6TFBBALmhq1S3848cqcsssxgPeYBzyQUYJ7Yeo",
  "key7": "tiA1m1wmiaXLhcnTvWNcjtjJ5bKgzYJQSbSJZGSeMHzgEj8CAuVJ7K9mgW5kS74hr3Ea6QTHZimDddqfT5ieSzU",
  "key8": "3fmZ6WKoqqjcRuvWNJ42H5QQqGbFikofzkbQ5wmbMyaJrVtZ9LAHKmeouULZR6s5NFChptd7fNFFTi9RCGuUJarE",
  "key9": "63FZukvRfxtCPBGUUZuZGANtMiofe8nomp3ABvevYXNAccARbUWYSSq39duttmcuvRhAh8QArAZvjZfLtchQe63R",
  "key10": "3uqJYjx4pwkePWfpYokaFfNmXf2gXkdR8m7Ve2a8bZXf6diGN5PZULZBxBPHDC5nBV5jMbz9AoddiFqPBS6wgAPp",
  "key11": "5iEAUF1SSXhfZqyW48UWXFZmVMtdHVwNAn3T2h71Ebrtgqtsppm9HNkQhGWtreiLDyb4pzJscx11qZ1TKz1S2kZm",
  "key12": "66so3Urqgu8ZQHbZgzMbpKQDRSoMGms1XtXhqn3AZ9Hbzf1p1VfQ8iZqRDCPtkTw8S7pLXrKrJg37KVVhz1L7fK",
  "key13": "2pmvnsBFrD7gQDCQHms5nTT4E4efQCxvj6dbhLqsDQoMJue6iqBtVV3M8YAz1YcVCjHH4b4foZg4Byqunwp2yxT6",
  "key14": "2JmcaMHagzGy3pe9KmuN3bkQ2irt6SWWqB3xXjmpVguYs2xYiQHSQFfFFXxJKRdVT3csEdG7kfpUeMNccghHHcEN",
  "key15": "Nji8Yp4mQ57ujCvwXC3n3Py7vjujsH4Prq4JygESs1xi2PYVQU8ynqyWCyZKUbguULqw6ktuwaBgvizQjRvancz",
  "key16": "y4eQWHnNDToWS4fJ2jg7g41eNs5Jw8CcwpY26sPc91htT65t7FVXkSiDXbrNEgs2CxBZ3j3uobjfcvyWW9qVfPr",
  "key17": "5jgKZfagr6MBCgWm36u2m9T2kfddq6ZAHp6MSBzMiueBG2jcq4PLrEneXPVFm4M8KyacefV9gC1QDNEgSzCmSKff",
  "key18": "2NgoMA1kGuN7s5e5oKA5rqEYGSoRFToLn9nMWRYCq9knEe9Ea2CyBu2Dp1cxqFhqcV1rtRDUbcmM6uzDTZKoThiy",
  "key19": "f92Vaw5rv5tchTXwQzoHTdduCNMGX8YPFVZpFKrcwhGdiUvFm3E2A2wfQuVhaGsfCFyjQ411NdG37rd4TxUWDFE",
  "key20": "5UaFkUA9Abyi6RCS2QoQAeCuQnzsJGNtw9Y27CiewjTHSbpLeDBVoDa6vqhsxhbukS979mA91e5gM2dvaAoa5prZ",
  "key21": "epkoVNpeJuHff1MijvzgH1i5tNxM753hJa9ZLCPaAevzArGQ7DSKzE83KfpB9V9hFKUpfTbpE3QrwHe57NUYNEJ",
  "key22": "2MGRfajiLD11CxwkQWqy68TwSm9uTqMUQ18srprgUiRdaHECcBhr7FMdcFSkm7K5xWeEVXhSLrbZh9bVTN5YQUow",
  "key23": "4aGKvjW2ATQdhcjCLkZGiGMUUbkayV4n2KpY6MaLSiSa1avB7ADPqTtCs948AF98D828RnR5TVXTxGonciVD2U2k",
  "key24": "3hxLGaDb6mWnwFQsF3LC1SV1GvXSbByN4nTpicjANE1mfuGruypEG7ZZWPShA41wX4D1josYbhnzKDMy1TujZhoy",
  "key25": "4cvGHjg8iVhhSgpEyp7cazjuULiDsYVDp4sN7TBZ4mMnGQatCXAos13pvusG8vYAwccvYZAYUme2yRdUEDVTGwn",
  "key26": "38p5wadNw9tkij1FpHetaAEQHe4Y69gWvFDNbXSvhy96qHyyEPeoP2qJdDhPqmt5sUgCFnu26J9GVM2fD9cWhxdu",
  "key27": "2n5hdPNtBYtpCME79XXVjuLHCGkjKTzFB1SgwrV8Vm9BQY3g5QdHoZsnokzhRhPoGnifSmGw2guWL7XywcQ2iMfF",
  "key28": "3EQt7xzKsEU97DVSjXkCcYDSVyWJzxqFxjaCpWjzgse6L8APjp7R4Ao76U6rG4zB8ZQ2ecKkoiahQq2PNUBqHHRd",
  "key29": "4phKmsqAFdxmcsnYpcpji7D7HQP2GxZruUF3bu3DqpSE7D5wGrkTeqLqvjmb51TJLTMWNrEf6Tb2A2TgRUYAet82",
  "key30": "5hXuUfvpEynYYRAUUehB6rF38gwD7MeZ4L9vi9mCGauby27mEMM6cZ9sVA2NJSVNvfX51SpEwK7WRt5nhhKFsMvu",
  "key31": "tw5wZwPBndRTxgXGCcKWVnnHWLJ9XCkHrZfmXMPcyxNXaipvXdXdBqbKPqjSGBxeUJWdK38kK4CF9Nb7Wm3zeZV",
  "key32": "5PXe2WbpT7y7ashEUjbJad2tTY4Hfme4ogib8FZDbqSFoPFDHJ8t26v2qYpXz8aGGWLenSBatn5Qfjr1hMZPa8AD",
  "key33": "2Hob8nspnexXx18t4mKX1gK9EkwyyBvZTat21Hi2Bi4S6cGU9bejwprMZ4iDcyTrtULDzdJfBxSHHWZGWDJkcN8z",
  "key34": "2RZe2wkUNGXZPDwQ7pAsTpiqULpWMxBcDKjXYhyMc6iZPQUpdUnUkynQT1TuFidKBFj8ZgZYERaFsRjbnz9TBcEA",
  "key35": "29wnMcUuy9mSFw2sbmxCjG2sHqkdSdTFrfJ4Sf5W4hYrrFVDDtP8zGqyTPnhPmpCSXixr96AJXG949CZUWPoeQrP",
  "key36": "64ueELra6tuxYgTJnUGQBJUoCkCpYRCfgw9zsBJFHNNJjtfWYoUvHCoUiK18sPToyn12is2JrF3HenbdQP7wPo8V",
  "key37": "C1Fxqi3w6qzCWPhxHHvNMtsZtUPhp9fsavh9bf9du1Jb9DZvbZN4hhxThFtV8iPuqsovTrdTuqm4g68tApeDj6v",
  "key38": "2u4M9SeThdDZFLKAxvNmi8hU1w7FGZPYy98WXVtLRbVFTMfg38Fxi6iASgJg3LwdA3NkLb4jqXCPm4EFqALBCNhR",
  "key39": "2wCftnXjVkDXpZfVNtJsYxYrszDeh12u1d8vxxBuuZZoKcBjjxRtqFNZXX8zPc13TrDDWMTutH5H97S6xpRZiQvQ",
  "key40": "3sfxLv2mmsCLkfxMju2pV5ntrJnW5ww63CYuceXtvbH5NwhVucDr42pStYVuwcfqQBSvufGh7T6mXUjbnacdSwnw",
  "key41": "k1RPeoHY9NqoLUc981FNsNHGLUHcvo4XtCGwrVGK1WcAgqBTdcRG6jAAK6dF9FvjnimsFB64SbH7NWy4A9pefuS",
  "key42": "ugFwGD7spLbCZKe36AFrRbWx3BTT7kmn1AmcmV2fEKbhmxBSzd3s3U3JjaF9M1vg44csXAgvyYUCHckPSHzXA5b",
  "key43": "2RdZSE5g4NZoJo7Qr4bd7ZrqymBAMtoS7sL4ahdyhz1S1MExbM9NEJa8nYkCmwUmRFxzCX97Kc1ieMgEUuYCcxi3",
  "key44": "3R4tPQciYDJifnhFuHrvscKER2NRdgjhK6gztW4fQ5xx7LMdJkHsFvoyupB5m4DdfcHva2GKLPa2RBU4h6BqwMVL",
  "key45": "3f5dkBxSaJTNik6CkApJf8bDgX1ZMkb9dDFZZqwbe4yT7Wi3koDRSP66pkt9qg9R6rcz7WqDeiUxfXuJNwJh126L",
  "key46": "2eUBnf7dN55FYyaxPy9ZBsupg7Tt6HgCrhCXpi1tFVTcWTQWimdu6KsRvEZAXewbVDzKzgryXvWZ1RA4ew3BggKn",
  "key47": "4FyjDAc79tgVxPRHTJhMZr4qhA5pK5i96whafRGV4CH8g3tpmpNPDSKVnB7WE1GwHLiKdog8aL6pyRbgpeCunbQ4"
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
