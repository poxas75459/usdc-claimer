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
    "24waUqB9C5k9yc6DzSLiwhMJmNPGotwmHEKzpw2AS6Mz9MgsQELhwjg9VxXxECcwtquE8ye9P6ok9i6DA15QLXjM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TxHD3PqwZStatcvRtdV7VWRxnTpx7tT4VjagheuABVCUfc53t1i9AjTmpTstUkqFoFKSMMFLWZQvDnrtjHnbb4o",
  "key1": "5U53rR9AQwB1RHdpWroo87dNay3t3BHxo8tNsWKrXKiXH1QUwjUd7uLqMmTjPa39LPymAoT8oJEWmmFGqdcivei8",
  "key2": "5daXGEqKhTGX7EEQbNeqFSMctRq9cykpbZbsa2ic42rPY2UADULAxAvoqXWRWcB8eLxKieHz16XQDobiDgbwu5z4",
  "key3": "2HEKgaBBmmQwdmpSj5nwf94NLZUFVyXats6NBGYx33SAoUAVngmd1YNhHNMH9KX6vvC4ZZoGSciSJBJm2FAaPkFU",
  "key4": "4M7VBdK8fhscduxGVUbruC6Hr9aQ2JLKeTuNtaStijBiM7JLkh6Gn8R9Tr4uH4RC5t2GtauyXEmpqePjmgnW7Eim",
  "key5": "17jdv6EF1QX2tNxMExBi7oJpRjmaczk4B4X9ATTJfWfQLWeBzveKGqJsifvrfFWZTTwWX5aKCUL6K78A7uZF3wq",
  "key6": "ksviFuwKb9qadQu2h1byLRHSb9vRcRBxzhRnZ2k8QyrotyAU4K9gwyjv9eLhiFMa5NhoxujZR9mRVEqByg5J8kr",
  "key7": "2DKBT3kcihbA8c7qXCsKYiRFGUMzuWULuKgfyMVvdxv87xmvSDLuFnvwh8P1wHhmENDDfVcegRa7B7qyk1o9vkCu",
  "key8": "2H2ByZE3DXMi5fXrnAr5UwHWFdc4TNqUEDKQGqTJoVSdmWZ3iX1n1Pf76c96kZuKTez44xRsBm2GSZqwKQovYjt9",
  "key9": "3MDn7sFgEKJY2sii7VqVBjee6nz6awu4VqS8pwGuCFwtFJ25kwA4ogoiQRfs7X9vAx7vaptwEXgTM3BSdWnrCWP8",
  "key10": "5rgYyZ7Tr8XtH9D1gr2PmCDBj1Vb7jMLBVvro8UrTJwyXkwwHpDx1akq1ApkTJQmeScQ3mRRahYmeYmRCpogoyAi",
  "key11": "nd7WAqpR8PKaFdRrjUHytmjHwDgY5jxBVJF6pB25hA3YnnwYJW9435WhV1xExHX7NxWhaxpk69uo7Swcjc2tjFW",
  "key12": "2LkZxzfppHbneK1oqA4boq2MKvsbAuMcebdwiFPbATTFgLxez4d8rp133Ue7pUFrhp4EDXCDWxJdvsUuhwwNJiQc",
  "key13": "Z5YuYjZYtN7Xr4q56tgpKU2SFqUKuK96Y7F5ocfEEtqpwSxPJD68D9bw2Z7dj6QhhRGt2MivPP3U5qeXRBcCDiY",
  "key14": "35CHTUnmTe3C62wQhBp26E3hGMrXuFrWJc37tSFYr3bC3bGpqhyeKzjN8qVJSWQNqQdFqhDJhdrXCQr2ownwe2eU",
  "key15": "2eDQLTzXvnrcoSDdBbXUqpvzoKaYxufjiVXj4hT5a7hf7wY5oq8XHAdGznMZFArdQg9sytCqN6NrdNPeBfqk7Xgv",
  "key16": "4QbQSgvJePnR7huAxkMSyVuPQusfWRBVMxKQszaBvyFqVzMURqaEKv6J8tskHEYfWWMPDs8cJ5FSoE6t1E42KMjx",
  "key17": "sNEwFjozsiiBQPfNhGg3hAuHVq3hk27aHHvnFTCx5PbPSdxwv3hJhXzMcSoAjfVPgbGfMftUT5ENYjZUh4FBFmf",
  "key18": "67HYZRqK8uKSKWv2StCvXriZxJxtjQdF41xwSvQtmiBMiC31E7XfsSxQeWKW2UCCQaFZ2R5wSCzct8NrwCDsiWbW",
  "key19": "2AbGbH2X72QSvjGRL6EFKgZEkGxMtu9KkFkDMjuZAXKsaVnGh4Qza3eRr2bKzvfA2xogB6znwwr8CiaFYRcxZPdz",
  "key20": "2rWtdt13Pj9NDuVzquQax9oX9Ukc1uuGg2HY3TH3Z4aFvDr4vYft4CyMiPJZ5rJ93VpVpnMRTKt8PTcGMf7spqH1",
  "key21": "He4GHqYiRBSC1rCjAzwXLKnUEE1aPZbw3gu4xpz1XWmsXybpHHqMVNGr5rL3Rg5bSG2MzLh3U1aE8cLTGgyusoB",
  "key22": "2TZqL45baQXoSPN1YsdxyMigpJCSf5HSEhLvdFFtLo7kwMtxjJBQ7NLSRf8UKUZ6E1Xxb9ofbkMZuL8xtiL5WdgS",
  "key23": "4b3g8CGF3CbtrvDxv85CF3HVywpg87yofhAUpVnHkWchN4c8eENtjmn1kXNvVXAdA7m36VSJBQiKopKZj17MMqZE",
  "key24": "3EeKyHFNwJQxx51Nu186GoKnU7rmentKegnhAbbk3u48kPuPcfXUeJSYsL7cohU9PRMdaEYvbBbu82XgMdk4Lrpt",
  "key25": "4ZXeMHeoYaCBZKe3hrvK8NdAMrfi5y9errVyFwvMkXGaMgYyE7u2dTnz8FEnocJVBoPQ3z6bzCUgDw4ZJUouwws5",
  "key26": "2AV1NetJ17karTerr5w6MepAuwAecVLWdTR3eEgkk5D3DrAJ5JayCYffCoA9YQRxHKarQJbPzM2kMbn3TBX2zP4s",
  "key27": "49wqhsxpeKzmhJiUJwTwZzgTFhZaAVi43NJWxec857wjfqMt2iRqt1XSUbKWPno2wiJYsorDTzxjwPjtvUVyWaba",
  "key28": "hUfMUuoBb5wsEX9Qi7Lxn8hyLEzPfyBKpmkgvi6DJNFnUbL527Sqzm1vySpP6NpvWkhzaycPw7DV3TX5x4a4sN4",
  "key29": "4TPtG41jzFKhjTuTFnHzTESfQsVQMuJfkzsfyG9j1eT7vBnp6QvResmkjv7PsFqRjTqi82JDS4yLo36Bs4vgjfAF",
  "key30": "49zwbvtxxxELj5zpepQsGA2UV7x7r1RPmewxXKpbkjaQ5HqtmSWPgKcV43Q7sJY8FezqbKYkqGLT8FZ4RTPRA483",
  "key31": "5wt38Bxr9ofx5MPwYnDK1SVbA9LkeTeNVGsuCEzBcqLaygDuScUpXwuan7iZ84mFQ12nTopxszpzbJn5drv5a7P5",
  "key32": "44JXVo38uyrmmNH9G4gHYm3VoccYxx9qnZJE3oiPLbQEVS2RvZfhASPU44vRsGU5hxqVPYdcAiTyZYWjruz77F6Y",
  "key33": "4qKAvcfqmwPkuYmYQurEhYbfkgK5HA7iaSzXeUU1yk25Gzh95n5Ms9kktX9PpWDVV82SUXpcPtuBnDcqByfy7mnK",
  "key34": "5D2UCi9Ung2NkEQ91QvkUTVp2ietM8GiMQwnPszURxPbzYCevMkXE9YZd73WppunAEcLPigmwmwxK9bfm55wHY8C",
  "key35": "5QdDmz5xgqUicDVj46QgauA82zfSRjxNMQUcKi2aQTkErPf55xx3UGKsYvoY4w6FR3AtKJsQJmCr9Xq1tUpjoMMd",
  "key36": "2jxfFxaQbtg8mU74REgj1Xp4jeK5AZ9hXDfbfJHrtg1mJMmF15DKwCg5xdEuVmJmb6PTbp8tL1fz3mKaLnEKVrd6",
  "key37": "3zZsB6QQHFujhJP4oTwsvjh6uFphRdiH8LShoNZ5Ra9FLrwvvDStE8hUKu1JjrdUFDCiERTUjGR3j2TDXcHQ1qd5",
  "key38": "4gYKZLbYRSAPhLxoyUeWqWyMiaQJrrAxBsTJcD9vgZmLx9ifvxEaTAYFQTRhyqHKRjZj8wQ5QHt9UU4Y7JDhWEbi"
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
