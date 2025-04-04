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
    "35EiX8gTQ8ubyA6dSagnRifGpffGjaRXBjyj6Pie7Ci4bhu8r1M3LFHRcjCX3zKscDrxf2zqt2rQNfRSxeQ57ark"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YAXcsax89gxWCHdA4hUeH9z1FiJB2CzTvzqUGu6zS8rHgQ2Gg9eWpuFmt4fL5boTLst13f3tgWVB6TczBWxMyvj",
  "key1": "2f53HEkCeETdsHwuAvvMpKTfBt9QT7avCYDj2XRUMKBigbvhCXYTxb1KMKML1YHQM2pgVaTXna7mvECp4nNVRCKL",
  "key2": "sEjD3xF9RCJrpGdiqFVW4ygNo7EeJXMmu79Q2sR8ucXCzGAJTJSahnVZViUT6aqaSvGcbSnkkzf95HVv8La6ECC",
  "key3": "CYDS1TLhbCNGCP2Rq5TNS51SkWTx9ke3g3rMv7bsxwJSwcRvAnZv7PmyRZskSUt2U9GpUQ53t4BnRFMmmG7rbS1",
  "key4": "3Nu2bQSvi2c1KeXATxHP73Xeu5RLnpoErynNRHXe6UzoXQpvYTWm8TEzTXDLg9a8o6aGy8XkTjW4VQtLk46NLzX9",
  "key5": "dPVdFzcgfbwXunEM23memUg3RuH6qszpS4pM7Thu7CvDdVk5xManHa1LN8i9aiinFB5JZFjnYBbfk8KKUePBNHV",
  "key6": "WJaSwHfaUxaU9bvZSD4Rn1nytd9gs42ZUqvSFcyPuREPPQWqWD8yWEP26vR5CNs2WbqdBviPgp5gszDWu2VHQaE",
  "key7": "4JLMefu5nPDtotabwYpukF3BTa8NjGxNe1956C8Xqx5Ek3hNp8yVMAezd9qooHSMXCAEZSWfanuZhU6yyvKU2qpH",
  "key8": "5H8rFtJDm6gc7mwxckG2XfVyBjXjZTJ6RysYnaS9gkqBB8Uz2nHuDMfqxfFW6TDzfM5JoTAGQeKg7ptkZh6gCBr5",
  "key9": "3eP7eouhrGaUyEC8yoHuszX6ATYktnqmxJJRCX9nZ2PXAWB385tCY28WcY99YRmGHuBjJNzhGywoLKiFXE8jS4oX",
  "key10": "3utDp1opNdtdLWHJBJ59b3mqpfs1LY3XgzwwKBoc1SGEduoE7TojE85oVAzS6ANzspNoRPBCnup8DPHo9UaJaokB",
  "key11": "2QLKjLt4JX4jDGJtZWZb4ngjX7J3Y72Gmow7rV3BbeT345WyCib1YMK8V6NQomurDB5DsEezayYSisQUGLU3c3Kz",
  "key12": "s2RqBUwK4AnktQjKzkKqqQQgGHgP4CdHqruJDVFE6PvYQ6ry2pdADbua6vdbDSjj3HxxXpb5x3fFEznQB5G2Mk7",
  "key13": "U57b9uKzoad2uF4ToUPZb8FJYMAvyXAr15sNZQojpcszn3P5zsKYYQZzmaiv9zEDJjoFftJnL8D6rYNswcbEr4i",
  "key14": "3hZCjCdXRm9t2L8XW1tVJXLU3CkJkjwqZBReftw8vdd7SyyXA8e6S6yWAYjyWtEJMZApvCAwuNNH4RiKf1FzSu87",
  "key15": "5Fe3DfFPaACcQSW6wr2namkM9Fmtn7j9XvajoNE3W5BMMXsvLcCq2pMd9NQXLu8oi6r19TYX3Z4WWtSFvuQmDmRY",
  "key16": "2eYzTFnagnwqVNyZHHg7w2gBnVsE3EZxz2cmd1mXNu1bGbzpV5E5nZpPXSysMch3YnbscNqh67yuMCGxV2W7QE6k",
  "key17": "5Jkm1eNzzNtUj8gkwp2gPntoWsPnD6s6Zdmp9VEqeouHjrmAStzM5gjj8wFcNQzwrdxvqHvR8V6vkmiT9sPWdaE5",
  "key18": "3LAcANxUhPrKNsB3xJVfb8gntWmURdyRbChtRehFteLNFWofpnF35v6P3HQKNCYCBJCy2qQZM142zWz7axdu1uJY",
  "key19": "3HrCni3X5J4gJhR4PhduKRovFyHocdaAdK5yTEzMVh9wLReJCAiCeD6YnR1DYG5ed83zsPEhZgixLdWare5UzDaM",
  "key20": "EaHLEY8HEYjddvnAarLCoHystpLruGCrARjE8wykJKRcFrC7FZeSc942eSzfeirU5Kn7FnRd2XsWE6rV7N6YfL4",
  "key21": "2JitPMZAf4GtVfUZqtskvG6C9kWwgTCNZazUL2wWkwxrB1GFE3t4nVw9XU1xrEXSz41s7pAEvKtnAWr2dgZN1y5Z",
  "key22": "63Cxjr8JUxTZYZ6QW9sLHLEjtTSr1v4X3mTGobbwdRbtPM3814AgskzaNJx4ZkCxyD8oeJ2fP2uCHN2pyDfGC8q4",
  "key23": "47g9RTLyihZaZncNHLBqPxC86J7sgyr53fkeBSE8LjbeLYZ4PvuzPHeRjWDJThngMudNTz9y7rU2QmLsGmFFrC1y",
  "key24": "2F29TunkeFwAdMbTZW5L3T9Sgq4xZ7rp3NF2UumMPNp4YGMWPurM9w6jDUbWEdzMLnVrpnqzQ9SRsRQpwXkyZCu1",
  "key25": "2gymJioeCAfKxPKRuDFSh8J58ozdx47UsDUsYJpQVuPY4sk7qubg9o3jj55Ri6YbxjWFM27MmhkzbhBLiR4jEjDw",
  "key26": "4rz5ssmvFkWMqGxYYEEsBDfZVpVdfHJy8y9MZHfwgiKiPYJM8utE9i1CqgCXnwGgd8Y7XiN7UMC8U8xAtzkHzSLB",
  "key27": "5x5xBdKGaWWxRzuCsEZ6NvyCcQkNJvbQGngoKUC7ryzDvpH5aeEs1bE3oE48CGK7EGdJWwsxHhkayJDN7Q2fRF5z",
  "key28": "5U9PH2Nm4d4Ttai6QoEbNk6yWQSWJ4dCktWVegSnuryNizGkYbdqMDVtQG4XnDidfgJaJF9VQCFmgLH43iJuM9gD",
  "key29": "uwxEEbWyUQhLKPkLdWrqyVEjJadJuGpfsVb32AJXfSuM1rq3xVeg8Yk26mYDpqSSwV9s7V9ZqSUtCCr8fF75ZHL"
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
