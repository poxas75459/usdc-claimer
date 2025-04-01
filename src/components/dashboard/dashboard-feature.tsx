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
    "2sZrDDkNj5HS6cyoirCzbnT2kUqqjbDLPQYocyEFPYPjZNXKGKuRmdBfPyXjPuibQUTQ6oz1BEdQLLXL2ZSfaBQh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eb7PZB2LGG9pGemF6kw55WzJev71oGekrNxhizJfxXNDW66EgXRwBD2rLMcVeW3v6mUUM7kLjXRhdiWt7BN1Mou",
  "key1": "GsF3FQFVVf5Whsr2bWb8Zre5P3Fz299MkpMtnVZVV7bGywT3RcR9CBYvey2tiiLnpi2WANSZBXGvY5J6rg5zUor",
  "key2": "4r9BE1d2vfcDKFguhiPE5sb6Gt87eAQVmDJehsbnEiK5BMrivEDuwbnpGEegH4VjyN7DHdmsdnkjNgwN3dHczBUQ",
  "key3": "2RZ1eveXxs2DatSTnnxkvvXpehqQAnW5J8nuBedvbU181jtYBwxmWVYrfYFuftRMm8Lqf1ueBnhp2EU8F9PyWC6B",
  "key4": "5XywzS8VbjLBY1GoHwWPSvhYyGopJXej24Xd5Md8CugZRX4t3f2zrtduj5zbnsAFFPSYxUBfYKph83daKowWkzEQ",
  "key5": "4bK7c54DuDRD28vw8snd4dJA1pNX46L5ECRJStt1jHapbyiVzmsQCGNB91PGXdQaQAfo6f4JVrHWVWtVv6T6j6pb",
  "key6": "4UBRb6TxWy5kpRNWfysknarnmAMejBdKic7T73XmjZkWDBH5xcHCMeo625kTMpK8TYyAsaPEhyX1GFiLBhTmZVSy",
  "key7": "5Wwx9wXGpcRPWNdTd8EfTj8TS77bqN28awyKbqUHAE2NuxAUyhDsqgn8BztFjYSB1A2BUxRnkfRtbW7pAYBrN2H6",
  "key8": "2butdxQGjXNtB1HQgQV4WZEhEypjUmvC1oK7WZaJ38cGF9ArY6H12aQdzgZjU6LUcGWWWFvidJYyimv2q2Xj42Kk",
  "key9": "5B4EuNjqu2nufuwZae22tZpWWb4feWBtV5DWJ2ym6Pi5siMn1YACc6e9Szcu6nTxu6d7CBv4zSgtbTXBRh6xE4L",
  "key10": "UjCdUCFH3teDFL4CpCfukTBx3AKYbt51B7JLRub9CCdFa1bC4nNrUd3Avidq1hDm8rqucZPkLAnVwVKd8dUFcXy",
  "key11": "2EACRw8r5DLjHvAEgiFXNs4yWtRXLhGLqFAGS6naTVaU4je9cdxFACYdcZMKXNWGafGi6J9G4vFp4MfCY2MSpapU",
  "key12": "2YAd8kjVHiG5Znubji9oRFWJQQMMqXuzyeniDaMLhAa8sShJEfr8Ss7MS19nxXZ1PfkK5RoSeJ3kqzAfZzXGHoxm",
  "key13": "4T45HiTTucFQLYZ5QdjQaoNQbbFNZWpnEeFZKk8BTQbLdD12hXZLMDYeq6WLSBr4y9wxYLBnC6z29WyCjXkwmYQs",
  "key14": "2LfkeDRiQeJ5XfvnjsJbGkQ1jb2C7LGwJSLTK65jfuGiCksE14BY8QfZtUdJsEzBPSgGW6c5MXL57ayz9hHdTHbp",
  "key15": "3iS9Sn8mEVXFuLPR2g3P6FBPfcFnCWfSCZZ4cHsWttuyx9eDdGc3Uo4HHFg4F8167LkBoegr1Ftm4vyTK5dwZAzD",
  "key16": "37mQeLdnYPWDTK9wYparG5859Z8azSisRx7uKnSUeGdAzZF3Av1VMzpNofgWTS5JVZL736oXL8SZSYwhm1RoiJUG",
  "key17": "37B2h4xKTccKPzG2ZkEc8FpsbG3eY6sqK54akFycWPEX78pCDsrc4ysZFv7EP93UYFGLzfNS46TyTbiejDJ3k1T9",
  "key18": "2rZHxkTZKaEqAu8SDdkTCBSG3V1UYgJGGZZPJsctJBUP1NpSrwFjHcwDFMYJMPGv9YeuF6UjRGLr3XhetN28GBV2",
  "key19": "AG6WYhBzBdVg4YSU2wvphqZ3UtSkEsB2EHBmnitHNxKfsdTfxB62mzob2ub6zL84pE4iH4jXvAA6WVTMkjj1ESd",
  "key20": "65ZsKeoRZLrqZ7Ctto7BcErxLB5vHfpRFfpK1c2CR15P97zjZjq2LpLMqfZjy6DMQRsJTuAFu1prZSVTepQqkjRT",
  "key21": "3ZPN7fTdUvur6TUaLo8KXNLoNkpfw1QnnYRwGwEg1PuQZoX7ArHeMi2PMd5StPpzUgExnUbhgPiysaRB6iJ1skTg",
  "key22": "M5Jh2XbhKXpVdmWkFZsgf5qLgpn1kqF7wcLz5pYp8k1bhLtqgYemwdzuKWKfq8sv8ZCgaXabAKphue8t3JnhNve",
  "key23": "WpuoKSXJapwAMWWcd5sWAkUVvCtKpQBdAtEW3LF4UTjmSSjfYHam2A4bY9gqPzoH3ZxgnjNGyEUCDB7PLwbMzEA",
  "key24": "4rQTm1WVUTXBtjKc8E5AEG6DXmRwEAoEqkLpyQ3NEE7F9AUKMJpm8iX2WaUexciRr4ZUnL95igUv2wYPPmehPFcc",
  "key25": "4QZmtZpPpk7pNX7WvL2rHrqhxYM8567st3ecp4WAe3kpazWYQqW5SmLYGzVuZqiPQs4QQhNC5NYkASnAoQhHBoZs",
  "key26": "3XLznfhJxq2SmLeLjks9ZergqJKuQPq88cc1VpZFisYfCLwK4jCCZGFUFNCEboGtpAXVCYuxZYVQ1MGpYSpyTAwN",
  "key27": "3UsU1io7SWf3fUZgvZrLnz1FykrZNVHTcDw67b5PcA258h6yVCJGb2VtUNgdjyBaTr4bPk9EGy2DJ6KJSsC3fp87",
  "key28": "27PsMbUeZUVHF95T2cLiMNf36B43BMYnauh88Km2wEtJ9ZKaHYUkxRE68A7Ky9adVh2wxB39uLS5mBYvbvoY6ZMi",
  "key29": "AcB4H1QEzqqLNZaxijGoNqw92fbCkb7Le3dH7gmjTocZwR1Xv7ANoSsYZusveXArzHkDe11aaJPBrv7xKRcNHpf",
  "key30": "5goUSRJAN8Rwr2icWA3riX7DuTdo2FYYQiWuuucXd6uHWDTgexxc2praaYPXEsgBbbGvZXZexQPsL4jFsp186kjP",
  "key31": "4pV3SHyLrcwxF4h2Vtbsw7B8QB79UNnxsrQQuUmVvokshBEetyQigtRLQegwpe2PQy8gUkAfLGFNwFgwD3dUPty4",
  "key32": "3qSsfVmwUYC886sQRAWyNLsrR9DBeLZU7iL4hJk8Q5qE8T4aFPq3st5kKSF1KvpGDYr1YGMxKYhf2ShCtx7i4WKX",
  "key33": "2axSRCbVdvZLwYckKN58oyLWhadbnBUmqtF9jp7fQNr2TKoSLkb2CiDezT8FoYJwAKGX78NqBTtkLJXQEViXzWXW",
  "key34": "5tazSVPo7CnKoV95uzZhpnumdRgMkvftvTJGYLbYk8x4ggdEeWCFfofkJ4Xyo9P6oUdc1tFQazeV2X9gQZVFbd2",
  "key35": "3upa36yaRoKEyvuf8PnviouKK3SUD7cXRy9fpcHN3sCeQRpsrK5dTBe3VBpsFbs3scJWnVFs8gX5gn1xwHqUo47g",
  "key36": "3EMHxS14JDjGLMBrzXHL4T6vaaCzTiLDV33p6EH9H7EEqrZHUiiCyLYQD2ykznyQxGpXYGEJtTosNgDqR5iz17RY",
  "key37": "3kHYA7nKmve9Ym7keyecuYcNGvTozQwHuFGtYVX5LagR2QuD43xBv1W2FfqGsZpaCLfDRUhWQnzdu3hCggGCV6UB",
  "key38": "3eW9PBLN8iQ66Jt6RRSJvhQPihV9gRb2NnjUTWZRaV23va9aNqZiFeHEXGewqa9uqVtKaMxfdZfY7WqTC1MdKhP3",
  "key39": "3Xzcs3FxZXV3NENy5UrrZWtoPV5u3pDEbJG48CAzc8v4cb9jPJ3wkfPPgD5xp3Pf4sQzeB5Rjyg75zBhzAwvGWFQ",
  "key40": "3uK25erFLzLrWa1aWe2p4GZfuTgAXN5KesujLK8JkUL6t3kotKw57L7USXTLzRFiJJxYcusJrWJMNBxKDGJVBmxP",
  "key41": "3hNU244zEe3BV94NVwLe3KZuzmqb2HksMzTypLiopxTHvkqZfAiz5njArMYcaDAQrAkyk9Euh1jPY3A1U5itZhN6",
  "key42": "4Vk7djMxJyL6qFQmyLTsvyJswBuc8tDL4WsmQg1uGaiAetGqKnheTqEGWF23qG7xGjuZTiQez66myZkaAoAx1EVd",
  "key43": "42Dr7JkeUjNgwcV1SN9YTqdKzQKmt4HusULwZzMnxqeoYcwSh4gS5CxbuR9deLukgrcv7r4W4u773kmzLqKTDvv7",
  "key44": "5jKH2sbhDszzJS6qQGc6j5gLnBuQPPhxQZtyqQv8NXTnTj4DRNEUyjjneTDCEUTWkkyy51vN9JfyNYHkpaqff7AF",
  "key45": "65amGkW9WexWtBY5wWbF3PZhkA7PCk529FTJ91BfyoCxw7xHqySHQV5cnL9h7vm3LUH3MxwPQSVTX7vfidaA6Cuq",
  "key46": "3Tk7KPekCxE7A9pL86yf5y7niuHbnyMXfrgH4DHjG4fxAg8egdcUTpVb1WZY2kF6g17RcTPR2Go5L8GPVN7jDmBn",
  "key47": "XcopEsdfzBLKHvdqunhVqbaHj8GcuUoUgcbFGHrDuL3bHQBkQmTkDibd8hAsoCraojckrETnhXg2NmTm6ETDu72",
  "key48": "2RBYit5GApuP9mNV84e8sG2EfX1H15URGyrq6yELWWjYxsdDWixxX3AVxEAmnWQSp5AUE9937DyX7su6qcUjojpE",
  "key49": "4FSYDEmz8E2CUqVQfJQQKcbgeB2yEkz8mKdGDEgq2fiTTiw6ViFb23okGtVtN6n7ZJ5sPSCmhRrdamQh6NiFPxSU"
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
