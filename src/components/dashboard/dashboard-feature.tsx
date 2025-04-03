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
    "4gwdanqBwkERWB5WxdmoEc5CWwdrh2d15VnuvS8aQYJhKFrCfN5Na7wPHQZJsPPn2REV7uj1Ajj14ncKLwHN3wr7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DytrXqyn43ESRoYxAwsThNp47sMNMSBnRH32exsnXSYcbSp5w5uDAnGCaUop74CVEccNe85JEiXQZnvQ4MjCzZ2",
  "key1": "5MSuNKkm6comaZsvRnGKoKm7XdBRF95TkhxbWYSu4Yg6jpLy5TJVW7YRKrTLm2zBNejKcXukMF1dN9N2DbNYa3YN",
  "key2": "4mdgK1EaQkSg6KAbkRwnGt6ePXKvnrcUh5QTbTkj2hw2ccTsQA7iQPr2bApJqqwzKedDooNnajDjLcRsBK9WqKU4",
  "key3": "5JRiJuBF1k6W8vTNwXDn4dUtkxXsUtw5U6VhftULF7PDPsG4YxugBPPPPTHN2hSvwNkGgEueHkCjoYS3PGNarAD8",
  "key4": "2Hu9rPZ7fc5QQjbNJsBWd35AN1wrW8qd1ciQZYgv3ksVyqwmVNb8A5e5m2U25PkzjKJjrNubczCGDKQu3tF6hMF",
  "key5": "4pDRYLNpeF21exuXezo44EztduMv6bYmt2sejw6gXS8tCJdvocX69sWNt18LFxGQQdToXzT9PUFGXJ5V4cZt3iDi",
  "key6": "2XWqMMa1LWPMsq2H8ANPijPuBLCq5Gyx9wa8AwHPhYQo8YZRdD1iT91uq9RoBveu6dUz9xDPAwdK4oKhdjukCxc6",
  "key7": "3siSEZH2TFuAxN6AqxvD1Au8x8ayABRA1tw4TGGdhhrX9RQqeheLTX3NRpLH2AVEwyxz9iF5m4ueTYzNnhyQSSWo",
  "key8": "2Xnt35vRyYucAgFgyKqVAgNBDXZqLLiM3KPwNtuXR3MsxRihEfFpmX8nnBfKPGX7pP9NgQkL6Xkum4wdhSwCZc1h",
  "key9": "3pke25B7YxpgusHPaktYDPbwrz5B63QzQUvow7fcn5gLsTGaUfok8Xi38yGR9fQDixsHqKMhsqdr4VLD28ECW7HN",
  "key10": "2u49DyVMPLqoeCpyYW9cPUFgWwD4brBiF4zJfjZGcVahxLF4cV1aDH6sdevRMH5DfqbwaWG97Xif49H3xb999yj2",
  "key11": "XTYW1xyhrAYN6SebFrK2FG6aQ3nZ9YQkNtZppuwZsPLb78szC6aQGBF8kkHuR8rFpfbgro5jfSogNv1SfYEax4c",
  "key12": "4rd2LztN9GdkbaTEWMoJrhcoRLHvebFgAtPRVEA9XvnuuQsVm8UQWLu6yNqWgcPVuU5kPGc66AURiEJ7Ahjqegki",
  "key13": "a1A9DoFK15hKUpDN9Cy5wsqRPLaJd4vCkWPHWMcz5fFiRURjNtzs88LWgB1Dt48f1yJxCjPo9iiEGUUqoeESqR1",
  "key14": "3mFVLdAdYGkGrm4R7RQsV5EfstBaSY2DJrxhasecLksp14cBxVZHeZnEQwoH79JirvqyHCFW4joXkyH1eUWzsLCZ",
  "key15": "4tPFCYHWugBAiF7zd1GTkDUrzJ8Ef3JM54W1vwUJ1h7ufGgP4j3YxBnTDwxjMknYLDiiEkjUCWDPNMUvUqmw4f4",
  "key16": "4CtVp1wn5nqaPx3HNs67ibx8RKg4bJwCa2SzZ2evtGN61dx3cd1e47DQrEYVT2hP8zQ2omuDR9sekJhAFDqU9fc",
  "key17": "TbpLjLzCxTxksF3xpGZyhV6PkMVo6bbNntv58W6qvMffXVKNPFVbVmbDCYVsdBuQKfAgVjsyygMtRtHTvKDptNY",
  "key18": "uP6vax7j5pyPLHbMEZuHZ2Kkajwtiq2MuKRkMxqyyeZDd9Nmcg1PnwSwpggDP4BurBbJsWe2JjwjmJuzJ7gcYK6",
  "key19": "5fLKHsTTxfaEnMwW2p4eehLpR6b1btdaAisCrqAPnT4fqML9nKKnCXc7YubQP8BAdFmpFbYkQTezRQPi4Wk2bwsg",
  "key20": "5HTgrVoRXfZW3QHdWtgM7fbZaRCPXuxRxXhWZJzriRjXb5exSGWuDRKEQYvumg3mXXVrs2x3amRcD5gqGVQGBevG",
  "key21": "2WayE6J4c26MpXE9HJ9EXCaqdYweCSbxZ5gHTGhHGSoe2HSaCckPCnzjYiWcL83359MwPFkcMr86C7AXNhfC7U4u",
  "key22": "d7gBXxQmaN5GK5ZsA3jPuoGYEuPtGujSb9Svwovs9eqNArzTaLCES5uqC6zntmD33eqLydjybSvLa6vyLYVU592",
  "key23": "2YJmXJ8GBupX9rCTHjDEQHU9sAgNSGoECVPXCcj6cJwuS6c5fuFpDJEPLSSvAun5UZjDVwLPJ5WHGvC31tMB3veZ",
  "key24": "3Y3CGTNtUoQekcTDcyiiSoEoZa66UitEGRnxZTRWq1a4yVu1pjx1EfJShuEqrnSRxuZT8RKdhxg3CLk7AvFsxwZ",
  "key25": "4USiRog3Ts6MAQezg2hU2X1Qj5aifeshi8WdVmUXbeJtdBqpTWCV3TBnhseqyvF499Uq664yLWdDGN8wEbHj3mBz",
  "key26": "1EkwYdtnoovbuUZ7oAWy7Hby8EfCfRBFZp3yMLAM8znguBBSyKxV9cw8LYp5RrwvZnBR4xNAC9NyaYuVAo5HDjJ",
  "key27": "2EY7DPxVuS3oAwHbNGa2UA77aMf9FMy7cieqftaMFKgmuTMhdwFxTxWHb8aZUj7eeuM8mhHAUSuLordCL226s1D6",
  "key28": "k5QzebsfSvCqaAmwyQHVxMzTzdPfs4NRtYgnHL6hUNh3hKrK3p5Dq3puxKk882PiNgPWaqi7Hr2qqDgeWW2w8Wt",
  "key29": "4Sq1Jcs4Xj9RugmX9PQtN3rhhMue2brQkAyU5NxHpB98em57iwRWhQc3abTn5CpUwnCXGqFx5dKCmkuYd4UucYKw",
  "key30": "5NueN4VVRjWM9ipjgsWZzDU2FsgEJXcP8B8yw1bPoe2m3SqwTBDeC8KsEFPmh5YT4hFEmjKmiJjbpJ7SyHjYkitB",
  "key31": "3zbGJ34ZRU46ekxfQX7wBG5yCYLsBzhXiDdPJ9eZtPjQ3jyyCAgA45ZEZYfV64Z1iNmF6BHJPrKDqRCgnZGXmWzg",
  "key32": "5gHp8cVXuaXt5kn2rquWtnk5zhhGFu4SkLcQaviLFzdMGPU4crK6pBbH5tyUyvvNYUv4Wt2ukt8gV94Bu53RbhHp"
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
