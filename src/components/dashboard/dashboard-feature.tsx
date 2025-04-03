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
    "4fuR4fhDFngGU445d8LScemJJErT3jPjFbGDBGp5fK4PECCpeEE3tGm4N1eg4qrJ7pkzRjroTLNhX13cZTmrUkem"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iw7DZMehdeuLUETASwdHB3zEbZRv2e243hAk3TZzfMrvw1BDvg2kxVPACQFDMfxFBA8zHu5CUhjTd1imz8kSXzX",
  "key1": "3em3zutMtSVDY4qvJDWbZSvyHgumAcV7e5xD1s5rBhyv7TGBte2s17vWBhAj3GGpwpqxps27EQxwZBX3Yw1mUvTZ",
  "key2": "2kh62r6LDt1fvm565aMjZUP7oqEuGr3yQSqozrVMC66CpQF58zZxdRUpMb6YHpEAEgK2AguEUX6A2kdqTtPQzrJy",
  "key3": "5Rg7WJTi96BiYdvf7VXtYYwXXAGesHbp4Z561XPTXu6PHrQ2DJWSThmLYv6FWeY9uhAyKKw9ZAgurk64UYBapLoF",
  "key4": "2rYbjkSzNWJkWS7FQSz95Z4BAohDQjSgrJEai3KdzSmFC6YMkb3Wra2T9y6zkrtyfVxfBN9Y49qrPRHFUf4azwt1",
  "key5": "3RCHmxhFBUW3J9MNEgrmS8QkZF8Tu3hER9TEqvWxvKHWqqhbqYaVydwk5ZnQvW5hWMjyBHbHWDCvS8xHa6JJPEma",
  "key6": "kpJZn2FUzvNLoXvBV9MRHLAe4r3qKC3HnrnSDtDMW6sh3Sk22V7v5F9DSJ5q6s6j48iN824FUs29t2j7Qam3fB4",
  "key7": "5PJqvGy3s3BcqvKo6GxVxaqeKhx7vDJuLneLcmYBpdK5G3wd4qNWzXycQpHKgrpHXCo81U4MuBq8KE4LmQrKQurr",
  "key8": "3jzG6SKi36XM8PjwZ5fpuiFp6cPtaR6kiTzwFcsMF1aptn43FxRtWtAJvB9VmyXUWAtYor7EixrvbQKiXKzcNWTM",
  "key9": "4fttPGXKGc54jfCWy7DRuDnuE13W5QNtV4pGPtdd52JWJa1EiFTJ4xxnTJ3jKKjw8URxLWADNsLSJSa7CoctJBAy",
  "key10": "2zWuzBHM64VceZCBn2BhHFussmyVSYwW9JR8JacY1bDwrFnUm2kNuNmXcn3J5CHjDK4ZMEkooddykJae9MWxRtTS",
  "key11": "2r6g7gaLnBFWcxWEgMrxHxsuPQ8uTgJB13SUNq8FuLnTPWMMWFQ5Q8AJKabD5Hab9rqhmsWsGerNmQ1Xo6Z8cNfy",
  "key12": "3KKCbcdLUPFW1wtNwVtqbTNmMcq9URD4VX1Xdt3SLABzKVhPSazNLcnvG5SQwM6p6CPLbePxXjmS4joF6zSHRKAc",
  "key13": "3PCZMj7K9fqUox224PuKnoAWmR1QDP8zCZKwqfBn6vhwZ4p232qeN74PFHxwHhpfJgR82VXzuUow5o9UfmCAcLGF",
  "key14": "62ZcSiMnkKDoNLobRfkZJWHmCF1UjPvuqV7ucGFQL7nRjq81AjSMEStKLAoLjEutuSp5gWjffwiK7tK2XFd4qqnH",
  "key15": "577ww1x7FGpTjc59DGuRkeH6jrTsFJjsiy44dwDRXcmw38JUsZtfhDDqE6hwrkqNrLvkZ2ezi7ugAmzEgkJoYR8X",
  "key16": "4cKsP7Wyafq6upGxLrXKzrcj6QMnKYm2kzwh9KAshWnoSkVzocepihodowo7pG4JRjh9qzqFLoMKSiPRaFdx362D",
  "key17": "L2XDrDKrm2dGZudhgD8Wau84m8Jj6nHo8UBjGe3EAtJQ77Zgik7kDHCZxATRcRNSp71zaojAbp4Dog6DZSdvTin",
  "key18": "5SgL48WP5uB1fq65nYjxgSuiNyCac5Np6oNkHsfRyZPHQM2kxWbFe1dwB1hhPNj3sVWeLxvHrZQH5ocb2GuSRtUm",
  "key19": "53E6drVUiHdit1bLPxRL7546B1tgZSDYyChBGqAbdRtHr4qGrPQvT51LBN6t45xahXthumekzHAYaR1EneKsvimg",
  "key20": "dg7QzeTdmsBRrcqTUKbKpxXCtQ388fhFgL7DCJBKoSn6efwyete4NGZo93cBjszAfBtMyo6x44pxhyC5X12GogW",
  "key21": "4f5Jow2LcRvvY1dyRfV9PSS2AeSnz2XbTc3UUbDpwAjyxWMQymnp6Dojc1TKk9XGQH1QXjKc6Fp9EfB8VJRLXDT",
  "key22": "41eFZTvSRhLbzMgr3X8ivMqKefyhc9t2KDTY3RFeoLwt1iV8PKDWKXq3w6tSZ6nsdZ3gMnX25aCXTv7XRj2xSjmZ",
  "key23": "25ZQ8tHAAs9LDcJnvHqsYZhyozcXHDzSvn9DgkGQ8vnw3yvyboq4FufacwpfyMG6qw6AqjrgccdkYjUPzagqVnmj",
  "key24": "5qc96g1dQbjDnLzm2iu4Skxi23WkFJBmghy8MErqrseDFnMvujcb1gHPy3oWBFwBmkqRm6FZWbWfeDKkesj3xmSi",
  "key25": "4cAGLHqcoMD6yknDTgV5fJKdENkS8ctkib1ww2R4a1X3vth5sFT9BtQhZBAX2SjHRH1zjCZKq9mhwzUCULH23piT",
  "key26": "55oxp25qcAiHo812qwZMpdT5YwmpMPdNb6a1V2DY98H3zZvxvnEk44FEkHyVThHDv6bK1QZ5Fnr6HPz4rcK3QwM2",
  "key27": "3eVuUScZdRKKhtXkASgyvMwM8WngpSe9BNgr8EGPwvj6hY2zZjVquC2yXrqkhzAgnJxZpcFwd5r4tT6LPTqWMxGB",
  "key28": "5STGHtbNyranwDqcfrTtfjUUZ1YUjnv1iRh53LjBxLuNfijcjZf6XUh4cue1egU4pn8dV8CSnUcQ6kbEr7yk36mY",
  "key29": "4Jq7QHm6ZD2LmCucVwNLC5nYY6LFJYb72SwJ4gwWR5JSPdqXnKsTYQphKVzE8cXjg93x4S9djuLeBDva2CnsGr4k",
  "key30": "3uBWJueVBRmTPRdt4KzNNTwYDCLnoWpEiaNCRgcRsqmgu9pJNwY9u1ipAVCcvp1QDbx82ndsko6kCxob5CrtdHQS",
  "key31": "5RBae26hs8WJoEx5XqZjr7khWUvebUBSgvEvZtVuLs3vvAtf2wmPXmuTvufD1wnciMgnojR8iaS8dtGJzSfBxFio",
  "key32": "s5QZDQYj4qUFPHBQxEauqYCqdNxgLqdAf791AzDkT8Uw7HycBhQ14vRhjwLYxoUxCdv9WU8snFP5iPJbmAjnXNu",
  "key33": "4nvWBRR9NFsLSyuYJ68sZvkroHf851o4GCoynr4nCqCA1io55Q8iYcJg3QdEYR2YynXNQcQGAyMs9KU8JygdmhKi",
  "key34": "hkVjQeNCweRY6YWBSmoUr7PjdH68UZsTF86Ju4PXRnzpZxR9RCAXrBfnoyQvCSAwpRtCRnB6SftCHYy3QzNXYYt",
  "key35": "24AcmXCfPU6P8vfSPhwPffyVsH5CgqCtoYMxvLY7YxAprRaqzqkCXFNyZs4qyhpjrGnrWsLh5SbZcKdqdH31Nv9R"
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
