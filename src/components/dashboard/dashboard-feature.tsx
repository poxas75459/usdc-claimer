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
    "3WsckC24YkaPraRiiLpuF4rLJZNV579iBneWczpLkZXhwcuRKC1LaJNqbD8dYjn1MFncnBD4T59SqtnDfCumxhBE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LeY4tzRcUzRVvZQ8rbgfUReBZ7wCbZpqGbRoCFrPqfUoy3E3C8DiXtmapRKrKf2XFmjT1YvSyqfQHeMZaNtqaGL",
  "key1": "5CxVUULDLLd61xqJ7pEUDqcLUNAZ8JGt5vX8XrwQor4e3agXmExuBvjFJze9mApYKLNzJZA6vmwHG1x47zvqEXEK",
  "key2": "5oU2HB5LSXkeAbU72F39LAKxtJ69bZrCJx8qaYRrEZ2QwjCwxTBXff3u5ghvmKQaSfzY573siecW1UrDBuWyQ17G",
  "key3": "AWVuK1VbLtLsg6kMAieFpKAN8H3VgDpvR5Jy992LHaWUqmBMdG6v32Yrbh9WaKSPTcbhvcTU4WaDXJVoeBe6CZ1",
  "key4": "4ULk95N3tbmmCPgmEgDUe6HkR6xS9Q2BvmqjMAwn6Mxar9as9x3nRvs4fCRyv2YPDTvyLQUHeKRUixtRRbq7c6Ud",
  "key5": "3MkmR3G93ynnVCMfuPFnrzRBBBM6yMKG2M3YAvjHJpmSod51h85KVfQ86YENWmnxx6YyebeKg7gjrkKt8j4vRcNr",
  "key6": "2nnFU4iBEb6auAuKn4aDvhVw7hQrDbrf43HqBRkCHgWrP2r779Rb1ZQyNM5zNtC3KfGoUkDDvKE4mfQvFZ38smCj",
  "key7": "51Dhx2GuG7YiisEKAWkt9g6FFyzizAhRKsMaWcuq6bKfjcC1Gvb3kUkrFKMV35Nh9F7SvYMx18zLqxXLtiFjJ1tT",
  "key8": "Vu6zLH9SaosNw4j8u166Y71jbKAZDERXKw7z1e3X5vDR4YRK2eU6aRfpU1uPeqENksshh84HevC2RviyabPDc8d",
  "key9": "4fj8D9Qi5wMjVKbK88jZjv3dEv2ELfXhJ3teSkbu5atEaeSBFiyar6a8t26yR4x8igKnE6ADeWj3gov8LVkppdLb",
  "key10": "4mDDSKwNCRL7tkGHczASc9Jz18qVKNDy4tVmGxWNy2mzcLfdoX6v5uZwa1tkDEKRc73ye8APQ6mywPD8PGioDRzp",
  "key11": "5t2Q147B1oEwDPxhcY6yxL59n6g2jhygentLpLEWw2MDJmXqCDiAGz1Co9YqDFMU2wDeY3x8XJrkd53DRx4AiRbR",
  "key12": "c8PaL4GM3BFsjCQEw2hSTrMvZWwVQfc24AMU3Z4rHTtAhMzbFczh7X4XKEoq6aBZYANoJkb45pnSpTxoyXBcrSN",
  "key13": "KD7y5ksnxA8ZKsxy8BWraE54uTUQwhAsca9b2TqqdAoPjMiprPj8JYFBbivVF7FZ1gwazApmdZ5zsxKHZorm2vS",
  "key14": "4e7PCFBfcohUMCiQwaXFPkBLEa1TMjFGTPVHtzEwiMUWsy3iqCPeZ6nBZxjwQUUo4ES2kDHTxdrVFC5uQbYHVpuS",
  "key15": "67NjjRAwPcWrKjm4gxxDm5AFPLvhkAzHKLVevfTqDyJsiKKT6ZB4RxZbd7PKYBFDpSaz9pbvUCZiaRSx51GeXudj",
  "key16": "2AgFJWjYygvFtAC78Q2YTJKwmtRYz7rkiqXF1aCH5hMT7ee2my6UW6t6rntikQmDAtDmhLGtUP4rTWV4fcc3qZ2M",
  "key17": "41BkbPmy8y14epgibxHr3GCF2A7wQ42kJkuxm3UfhAyfFyZ5eih7x397aPVCFW7QC2bQ2AGgTrvBFdAnoFfK3MWR",
  "key18": "2yWu2MyKpQVpSiofLGmjjbqoGTGzX9Fsu9Q5apbronnSAEW7G7CJZK6Rie4KcYjfx1NMSdf83fe7MT4nJgPKEab9",
  "key19": "5xhFNLDghFYYJLSVv221kz2ZeryRiNsdZaaffcCZc5xYrANuZFanXAH51qc1FWFCkBjEFMLygAAt6iRPw4dzyDVQ",
  "key20": "256pSBVHc7LmdTZsdQDVf9pXXTjT9fQFjdqoqTuPwYhCaTyDS96XiNXeFVEYuDmqZKtfbXzwbAYaS6bGXEyYX35t",
  "key21": "4E9BGb8A1LTYwWgLauRbB3bTmTxoozLRu4U9oVrnrLcAqFPYdVCtPUHW4Amc3zHMjVfP3TQHoLY2F6HUqVU7tGVe",
  "key22": "3xyEmn2AYajSfLyQnHfowdpQnrRn2RTNyvj7Dh7EdvFtaxevuy31YULJ4btsy6ZkvuPrBW6kxnNBMmmNwdJ2kmjs",
  "key23": "3GGGeSHT3swE7aTtRnf6p7FygXBMQsAzBzkMNBSg6Gt9XkJUKUeowkyp2oeXAjtrFrMGJPBZKUswNQKioFgJHcnM",
  "key24": "2Pjxtp3nnWAMVNhi6SiBmaiuqTPnmi6tvuk3ozccimGuPApzrGRKdAHJezys57nkhdWLvTvwinYmmUAnx6Xbawfo",
  "key25": "4eSyQtQvt8gLQWAMKkr35BtnmCf49kFxiuT2mQ4ZuVQq9G4TKdKLMwJLhhwSzC5yZSpc5cAbu65ynq1X8C6kLqhb",
  "key26": "23wtDUCrvySUkv2xMbojFXYNUXTh1b5rmVdbY5a4u9uvF2tkNPZHFfR5nEY1qug8sh7CMvUP62AjEgsZzaPZvGQB",
  "key27": "5vYiaWBvCk72Fbu5STQW5jMEs8G3gaDXVGVU4vo8g1ucE3P1LLjpLXF4E4VhEUYPekdhKLxL2SFp1JgGjyMJbreL",
  "key28": "66viQkopsUwB4q5nvmFKyp3yYr8MCviemPLn2i6RDLdBjeJkzFAtvAqdXGYDzPgBF5rqffFT4bgbBGAFcEh8MCrH"
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
