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
    "cxa3reYJSXJEVSWhBQAxqqmMgpSHhPJF3egQHjE5vbK2DUfZbep3hwCCEaYrUVe3bs9mc2KSHzuSiMreduSGzGN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2L3eTwEyKB8qY5FTos1WJkvs7LrUVxM9h225hphiTUXEwEwfpAgxkT9c9kKgQ75ALLN9sRoh4VX2AQcaDxiPrjcc",
  "key1": "5tktfbiMXUt89k21xcwQZsmeY4tfgrHE5wdxgEjrLdooDi2jzFZVMwCcPAiDB48XbLM7iJvoJwRy6u1yxU2Xe6kd",
  "key2": "2Mi9Hb84nmFzNqBretFs1EYB2tr5wxov626XckddqEUT9CHx1i6Zh3tAnNB5smuyWZ2YR7vSS7m5Nox9umw32pxJ",
  "key3": "2nbK2G1AqU3NHwa6QxptwyZp3cPmuomLQYKewQk3jthSY4XpDL8pgaUmyuRpXXn9tPYkPdW7dKHnWe99uuUeSdYW",
  "key4": "3WLGiVvspyMGiUapq5nAXEXtZhbCitd4o7hQhztcZcTSHmLMFAzpG3oifU11FkA9LtY1JxGes7pYvnDPnH7PVzev",
  "key5": "57Jvbobrd8xw2SYL21mtAp8ybTpsbPxXu1ppyoNPvykDHL2Mpejh22ngPdfMy7uBwohgN3Lzvw63C92J4u6zprCb",
  "key6": "zTrLAs4ywjs1HY7wLBJVwDD5Uorenr8UyFcMPXH1GyYLHJTmg2EpJa9wmnm94ZgJh2q9n4kg9SmYjQkCVTxojdy",
  "key7": "22NyJ1BdheLEMM6xLyLTP7b1ZrfMLBapmFrCofZUC33iinAJhxMBCLFfF5HgFFeCdZ67dwAzXxnstieo1Su9E6aL",
  "key8": "32avSvBSkKZ61irEUQ5x8YoV7eAzxUfvWRNFTAy57TApbogKpaZ1A7q3qNu5HSoVTQ5RWQBu9uPBRYeSt24GW81a",
  "key9": "39WTJ49qcTecv7cPPUWDjBJ1NMFjTgQaaTbhzj8UkdCNXf2a373GzFJ9WSmmXYcdePZzVN9RAi39vYyHpBqCk24d",
  "key10": "urvfkTu2WpqgkuhHXRjMKuVPwhioSegFZrB6HHDnzP5HVTByrXMzGf3mMw4YtWtCSjoVWZDMocBqo4PSodx6t2y",
  "key11": "qM17E6qhptcKy2DcnnceqouVFnuUEXSY6yUbNAg89HKxAwX4J54iWxJavJx86KU9RNnoWXfZrEimBDsy71m7Hee",
  "key12": "Y2DtJqHqpEF88b2t4JuFKdEDoLqgtNurzywKnWzuhf1fjcH6DpaMf4M5CfVQuJY7vjMHs8VoFUF6Cjus8JpRMct",
  "key13": "51U3cy3i3XRXmJQZXtHzPrqTuc9Gxk6HMSuaRZ9itKKKvGx3tbX3E9FqpjM9DuhyziDKYvWYc1xfbVZVgpP23nef",
  "key14": "2Kb8mpJUYwssbWmr3maus4ji47mzHsHbSCzHgsZ9fmN6LZZmoZvf8AGRBEgNFvoRQrX73rCt9zUSEBwBf6ckWUKb",
  "key15": "2PT1CBhbFwh9KaAxcKtmxbxJ2LR9RP7FNUXBodXudTnxhQUMWh71Rd5EPtv2B5iYTHSxh2S8amgcv4ySaVBTmkJg",
  "key16": "2kaTXA1rgpba3L73mbvRNRqCPX13hvuREWpdy9gmvVKaK6JxjQyeahjQdeg1Q6hq3CNmv5U9terA8F2BBcBwrhJR",
  "key17": "67NgRi6QKAioeu3tCtyRauf7KKaZSoVKT4aEFYDnA81XUbQTQodXv5FUagT3ns7nTFMfnYzS2jnvKNWMpUeg79Ls",
  "key18": "5XcPsaWhcXPqmL8GJEJfjk8qwyVASD9zqVWLjYtbAQ4dzuHbR1VihjkhvUtoZqkvkcNhkmLPRjT5QodtBmvrXBzC",
  "key19": "3Wy7xPvZbVEcGPwVSzdcVDrYWdCuERwf9oXc6bcWG4ryKfp6NUJomfYByxC8wH7dDRAXPXUqXTT8ypzBBDn79drX",
  "key20": "2hs7jnNiTPwrGp6BGYzYmJApwkEFdtwEp1a6zXZ6pQVbMtHickKMx5b8VHAJaN9norfv7HQbaEjUjHhxS62sP7JQ",
  "key21": "4K6F6ges3LYQ3iLhqZtevBZv52X3GHKRFFsEC6QxowJmgHiqXnWCiQAHtSbEt2MG5fZm9JuqzswL1L4syJ8dw5pZ",
  "key22": "5FGqVo3pzQ41yULEk7btWkYc8e4NFTyHgz9DJpF3qwpFPnVKVKxbx1kjKrYsKdydZEuGJQ5AmebhQWnCEcVbEihQ",
  "key23": "36SmPySf1mRM2iHScr47sgV7HDun7fyZjLo6zPMMLw9Gy5njepap19RJuBRstpSEj5aBWhhEuK6JbKaiRk65YDCE",
  "key24": "29rF2Uir7VyTdtkJgZm1v7SE2PNQ3NLVpuVxcnBAJrHF7CYEvfqsJwyCyMDfbARPFBgGPKAUzLb33MnmEZjb9bLG",
  "key25": "2Sf1DQovua8qsCeadszDCbYzrSKXj2w9s3LfXFPMaXv9P5xfvF3YM9uwmtSQMatctcjenGJEQPrjjVzEES52GQxW",
  "key26": "u1ShWe9GAGtbqw9rsX1bGzLX1jktAPodrWhxvD91nYrfNyijkeAwr61oDZJTyxNz3hjrcDRbKWg6UpWbx3eL7DN",
  "key27": "u7sH6wKaj7vxTBp4gEqAVgABADHgz4bfobfGBceqAZJ8Ct9SbQx3HVzzXqw5ktef2SmAJ7C1jhzdC495YwE1prr",
  "key28": "HgDASDSXaGNLPRWozZ5T3Xwcnm3JutKMdKfKyKJmgqF9yyPP7i1QBEojoAQANsKvsxKXJZiN8TNGTFEvkTm3a5H",
  "key29": "3Gn9gXpZ529mxbMUnHeYeJuvMdT8sqUgGcv22qAzmCHDk2BejpJ5vXPU7FwWhYKNWSGe18pAQYzTY2GwzfkTNzcP",
  "key30": "5CQ7oFDgBLjuM8DxdogHmEAETsTviaXHJ8VCpMM8ZvvuWPwiefo2WWi2WFceR8o3Rgxu6JauP6zQSXSfcptjSSJp",
  "key31": "4LEkr8dmfGxN5nfihXZ2GVvYFQ5ERFBdXRfqB8gteVqLL1E3eKEdkG76KB5wS14kHaoqCned1fCAm6eXN5i8boYK",
  "key32": "4DdHgHc9Rjsv1RG7eFj8MV34ajMw2U6UBEh8nTa1GpGkaBM9Y2rjGmeZSiecgoX33vmM7hnsddU15Hq72GjLEuA4"
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
