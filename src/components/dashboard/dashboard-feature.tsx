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
    "31jxES6d7VoeAt65Vxq8YQgMWNZPhYJjtXnKnuAfHXbfRcitrQV7Pm7RBxkExCXSUB8DuBAFVtHtEjodkzUpqV4V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qAM2r7sEEsyEe5b5fxztvFegMBr61XtZEMSKQEfa1iQJqjKPUabTDGt8og6XthMQ8oUg1w9BCaMi9Q5q2WJFqRr",
  "key1": "3TrwDCFviDRX7qobF6syQTMCb5HoJ7QtNSeejh7Gf9BeimifpSojoTsqx8hBvcKmPDqG5iXQSSoCai3NmQNMjZkG",
  "key2": "4o7MXBafbPTV1evihnuZsS6doY8PYcf6kuRDzQV4cRVSHnDDfZJKqiXR83c9ci3YHpF9ysc7moAjgJjMbpJdj8DR",
  "key3": "2qN3p124Arc7ZJMdu41cmSv4RqRRKYix2EZAFVNM18RzHmj6ASQjUGUxed5sdY49kpVZu2mBPthNnGJ4VSj22GsY",
  "key4": "4UhmJAaGU85HGo59ucPL2gjJvft5SvE3XzqXddfakhemqCMwEDVXY6RFstZfMs4H7YDewNGzwiXQ3jmszTM7SqG7",
  "key5": "4Y7qCzg8MR8fCt1gwDzsAr7P9JcTBJZ4qmirKLrLVdXN36dXWEXykuaZxQowi2BrhNj4YhCPR2JxyDB3DvrhgvEf",
  "key6": "59nL6Q7Fn2e1BVsaztFGEbyzdhSzETFpzwapLGPcS4RT7UWMcFm5vqHN19BRJ2kyNaNZ5L6PJtW3k1HvzBGFRt9Q",
  "key7": "SWHgqB1GGk7AKALkD3pCMtTyEXeBnK96oUQoyJF8ApqeuPGiKTeJXTVttsgCfRjxUuXzPQ8xsQrB5VJn3seMZVc",
  "key8": "66dcKiqmhuogqyq1KbCy71udXBQ5rXu6veADykgSPEDT54EFWW14zk3v6vANYrF8MqRg8qSfx7r7ZrTzZRBEGm8g",
  "key9": "3WQBRcubpvGuGNbnft9J1whTpVYR7oqZQ8CzL8LnkxG3qWwpDKYaK39jP2bzdZ89oAQtYcBBTU8tpsoU9M56x3Vp",
  "key10": "2q5ApbN4D3b8nWwgQCcrNSK5qEkGPi7gZjKNdP87p1BKn8XSGzZBpmweGYvEaJzB4srJDyJnkYLtdq5V6HKRj7so",
  "key11": "3zxeDGNE2MaqsT5PizrjBtfkfEYNAzXUfM7nSkfHfrLc1QfYExDLqABVECbTsCLSnRqsuBqzsDNZ8XHXbAH6T8hh",
  "key12": "tSKjMSCj6Kxtym7MDXuMbnKXPxRgTT42dDHMvmmor6hTbm1rf8eVJbng5TppfXiJq1qgH6mKo78vb1kSRfNZeVn",
  "key13": "5SkGHzfUbwBNPNaVD4GeTRJ3CAS7oVTNnUQrBxxZpcej3BC2HkQBdecRtgei6zpy5ydkJgwtDMGGpexkKd8kZmaP",
  "key14": "2BeXHinb8QvHvSUPyRqi6pRzjaWJ6KLTfZEStnoNqc9whvvwYhAC66cyzwv6YfKvfYyjuP4tvDpcGTdBbSkvmkBU",
  "key15": "WPtCW85sGVfHSRkCZrvcxnReGLMoQNVFyad7t2F29dCRTYcj33rJXExpX7b1bG1pDBHExQCiz5DdkPtb2ehZyzx",
  "key16": "4kAaSY8wvrrhrP8YDzPafXWFTcku3oZ8ZB5etKXketj6DU42fv9Dn7wsMVRNq34Cvu2GXXkKFZtpxCLawh144dcy",
  "key17": "5xkZUZfdYfBer3XjFvVDcQeFpfemfQoZjsgkan5ZXzp1dqY6sFW4vMh35ToNxJDfbqnt1rf368ME2Se1tn15b24D",
  "key18": "DeW5P9rPn5HFPKMQXvqdUaYNc6acPWqU612KULxwe4bNU22VqaQYJdEWJMDpCFnUpbR4yZdxzo6X6iSPwppQv6U",
  "key19": "49f5EsSr32ntc2vd3MZwYLtXwGLwN8Ymj7q3F8J4YAhkCzR2nfnYxyDqmk5S8woKxfNi1s31cN9GGi5VyagzSUe9",
  "key20": "3XJhPa4dJmjRcFzhZGaP4FSYJqS3UBDDGkNdUzMVniTywiVAiaqc2gBmvYVMcW7ttiqHZvXnL63S8ZgajUTMG8gj",
  "key21": "42s2YpzAU21DJUvdKUkZVeuYbcTQ7cGEX4KpaK6wrL69AS331AZf7dhAuGYtK9VS9kBRifVyTdP9Ysgw48seRSq9",
  "key22": "4tBeKqRsEeLQcmH1zNCT1nppnn5LH21Z1xjFFWGv4thtYsXT776MAvgpyZoYTxRq7nzAWyrxjUPdqGS47ctYEma7",
  "key23": "66vvGeJq8Ek9jvN1g26uu3YtmHMRAdGscFQpvY56XPJijMcnVZadbMNQwUuDjUAENFeo91ut2trsdXdjEiqbLvAH",
  "key24": "4AH47YTnqt1yNMCR4ybXvBQTRK4JkG2cd95pwevtD2bobkjqtndDZUKNae8c1LKwWosv1966QtivW18kfKL6NMXR",
  "key25": "SrurwMdxiqjVepCESwaqgsQbALhVShQhDjeP9CKkqmpts1PQMXTDAg9Vzp73JQhG47iw8fNwaSDM8G7nR6raHxY",
  "key26": "2T8z1nAuS1f7SiqnvPExwqpoRAtDkBZCSUCwDMNjmAjKe8oz8Bo9eGbSWjbpU5mb1SCzzh1zBzM7kqCc5q2U12Eq",
  "key27": "2MUF28BXx6nxQHDxv43GXTBYwhDLRQ8K2iMET9wEyStcq5ZnzwJNVXhHcU7on1w9pSgdexWN1HkSJNEJSmyJ4wyW",
  "key28": "5F3QSZVJuEvwBZJGuZ7aJzMf9fNQA7CMv4x1tSZmwx7pUdYoNPMkeFAnHwUKenZAesMcSUEiRbtB1JdgYhrLsXqu",
  "key29": "3Rmf7yWRXY1px2zok7kQHe5GbVAHWtquDXoXjCZN6YpZcwLEdG8Cd34NoEfJaUH1iw11yu9xkgG2S6L1QdVaSDwU",
  "key30": "2VGfuX7vsRYUdf5yxSCqQiqDgLxLB2nfzqfzL1YqLUiqrQNApcEdETBLq6CKTEDgecwtdt3wGonjT8EzvcgWhJnt",
  "key31": "3GpeptPFr3QV95EWdugqFjicQwXUYaSSNj5BBoNd3sNHKUaiWqpxbLaVMnEg6bySzuG5dqB1s89sWnYs6YxsxmFi",
  "key32": "36SY7GJWw6nVKUc86WrUNrUjmRU9sqKsifSDKTjAgPWmJNj7b1BD1yFEnbc6ZSqZ56aMvj51jDoyxgwFqXxX5xvD",
  "key33": "4wraA9qeiRLU4N7Sxe46jMxBCMRVmtNeJC3ChKM1Dh4UwDVJn6wZpwzoeh33ZZR8HeP6ty9mgELVwDfyuTDKtqyn",
  "key34": "Q27iQBhWRn7iKVM96x36ZGk43Yzgeim7Nce3qksNV2NwYNzt6jCcU4opq6YQEaHFCdJFyMfZDBLX4kKzwXtMfrU",
  "key35": "61LggopEG7By7pr7p78y7nAT7qmqHUF6jQ9CJEnbG4sSG9dr2FxoDADuj5zwZvpqtW3C7ZAcRCi842wJaamzfSUt",
  "key36": "2Vbabm9oVpGCPZtLH73fNgb6EE2MohEiuiybgEkp176XKBGAFNiQu9G95NtD7afnAL5ifWFcEwtgC92gapjAnLox"
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
