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
    "4xcvBAVz7Bc1e1Ebye6YJUfvw6eoumy6ihDq9g3M5vKWEDXqg6KqrKRoesqFkhYgGwGMQ6EUJJFSGWZnLwNcoBsA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Cd7dfF38SqKEA18rNedfonVWdLrFLqDGRxqgaBDdfynVBrBDeL45a1jfLBKLMUenLqm3YYddRodqvtdpsiWrhSY",
  "key1": "2PSboeqZLAkZfvdeL1vZCou5vU8DrvvXoo8PrhCdTuchwdxEWsAYAST4Bve64CDMLp1BnEGQ5LfycPbxLK1xM2Q9",
  "key2": "2Vr2bMgFoF6NZsvMyzZVUivmpR8RK7jLEQPjnjRPCgcb5jxBzFddE9WohC3nYhStxyFQ7L5tX1LcSTqGNyFhub5w",
  "key3": "3LNtyzXFhW7c1gwChdKGJMzcxLDHhrEZxwTzTkZbNtA7oxRLpRMjaYs68gBA4PxGsNLcU561bFYfaq9X4ENKcnhc",
  "key4": "2WmSCYDw7bC4Ch4CkXb6x1L1qQ94NEPSk7hv4boxUmqEP5pPPEJpjLbDZGLvUM1LSdXwRYMaSqBqW78vLpL2B4bX",
  "key5": "64yiQJL6zfsPtefe591R8otJJJ7bQ1dE1CbiXixeDSbJDBGVkti5nfiqFUYvS9Uhg9ALedSg8pFvcCLKiuBk9EH1",
  "key6": "56EpMjjtnnPQ2c7DEtK7XvWHfSguebBoNhvThLuCBs3aLrqrkw8KopKeChrVEbzMR8u8thiFvuYS6VBhP8BPzEMg",
  "key7": "2vCTEESnU9wzUwTzs8fXyp9s2Dj9R3a7YR5LTf39kwZPnK6YesUdAeYTsk8WqSYHBaYugujPWtgW3XYmi6hkPCrN",
  "key8": "wjnejgsHPmFmnGVqfNy2vybSFbxUdoChztuhGNw827Bup3vq2mjWLcpZCfLfACq5FYEQuvX5oeUcVTV7qQRdbcr",
  "key9": "5PCcHEZwhgnrVA1z1KV3MvbfnWqh4fDhx5ErvCBDStrHEiVhfemPWaZgHF3maeQDx5opRCRqMwVcGdjc6pLcDrgm",
  "key10": "Y7251ZZCXe4iKrUGiBSdX8XHfQ6bt749F6YQoF2fH3tfoQqgnY1QxfMXmYsTENRMTi5mwAuAtYeLnWKbjnQDcEh",
  "key11": "5q6jhpyjFYB2rk49Qn4PcZWffNGsbvpSJEetPcwbTkQY456ZdpwzgSxGVRGVQGVCY3Mcj8fBkarDXUYp8abbf4Fz",
  "key12": "4fYTXUkCEmLiib7eC36rYCfhhcRNNz2ruAPfU9BdfP6BRMn3Tf8L73rxYVBAskbKTADW6MM8af7r3M3GACPhd2KN",
  "key13": "3eEhUxQbL6tNpyo5KijoaX1Lipe8kFCT4WXVp5DRWN21UqTiQouBYtehitdH5qZkaw2Mj2wNstfCYL5JRfNdZ2ax",
  "key14": "53dPuDhUadGEhfYhEFgZxGbY8uM4kBm2NR8nybmRMRZrusbWg4CRZad8RsajftcD8RENJuR3eCNgFiPznM6fHv4b",
  "key15": "25h9oJJFneoAxukM5HSLxHVMCyEHrN9YvKtUMcGH7zmcahMbhduHtnhWyFfHnVGcXCTLcz7CbdG8t5ry7jPargVH",
  "key16": "wAVsmj9MzT1DSfJgFwrbHqupoueSY2BTmiF8PycJ3XeNBcnCHFQea7drW2dRjoFdUrBtrPKFjenLHKU4yF3kpQz",
  "key17": "43eykZYxRq9VRiV1JXZv7qQQVDpFiGTgkxmT1WJRhjNdY6d8cCVn4hZTBMQdKdJdVoCxgArzbHVtdqfpDVYgRa1q",
  "key18": "4qXJ6LAv4cA7ZxcCEhVvLDKU3VeYbgsHQ7iEqw9A5Gi5Z1Gt9Ask8xMHUFhBPbcXdpP1WgAVFY1r5SLA7a7qiWGh",
  "key19": "57KhWp5ukxhF7wxQbb1nEqfMosAN9cSGbQ1zLc3bbiySm1z4YPfeYCPgtpAJbka2v33MXMdNNSVQXxEkJvTj3g2H",
  "key20": "2YnPh2ZfMAwF1fDJ3q9QwY4NENVhxHYyK2GhmjRisKXfhhzkDRTbokgevuE7TnAjfog9K8jEykUe6CFYGzJevfQz",
  "key21": "2FA61Z4hXS9J2ZeyeDnY1443Lmut4bRfHZyKt7pwHhBWuY4yyvm6nVVafoPGXdpo3zyER5gfWBSi7tieqb46ZVTU",
  "key22": "3y8Lk2VkLm8dExA29LTfaHRhqXbtKmdgYNN8tfyu7ndaJvdwXMGYwpA4qUNiyZK3GDLmXoMk6tf1oFk8q7Hc9n23",
  "key23": "3esfjQwcbBjof2E4vXZYNJdPtW4DGf1BWbWPUv76eRyp3M7VPe8iea4UHzPUWe2AZPzQcE2WDGrcLqQtPy18KrqJ",
  "key24": "3SGKhxs121wQ3vktcVsopjtX69hfp73xRhysF7pip3EbViCFs7HRxv1rg7aNCnmd26fPhC4LLaPrZXRY4bCLFLxB",
  "key25": "2byy5XC7qSRoeHQ4PgCMjDyYHWe5CBmFJ2CKwAZK5yBYDLCodHYgN7SshY8eaAMfT5MrwY8nechJWHtWghCh75en",
  "key26": "2Qt37Nd6YcrQcWxxf9srGep72Konx77a4sJx1SKmmdGgnqppr1SZwDmwda8g9BfdxV7m1kV6g3kfBLufqL44eAEa",
  "key27": "5L4VbFCPcSZ8EK5wSFj3gK18CA6VocM31tePpKmYvFY8iCRPCnQRE5dfHG9Z6aKywY8jkw458CuVWu66XoTUXf8d",
  "key28": "4Si6KHtH1LnB1X1Gir7CGk9MV1Mceg2hbLZMPfzjRvLJi48aqeQKawmaJSuJoy6c8RgsgMhrejNDAXPkEyeXw47",
  "key29": "2uy97Q9QtKNPwNgyLwmxmjkT1ZgzDszbuh6wy7JfWnDwzR5ufQoatgNHo1s8qE5X3kqkVaVHfLSbL8a3bYrpfV1E",
  "key30": "2TWq4s2BGBE7nE6t6niuZ7u7yKfJ3sTTXrwYL1NvhwUTnpcuXwiFtEpLHWRPW4NVbY8uVwD6ao7SyA6hjLLGevkz",
  "key31": "fBXRstDyfB7FKhv27FrNqfpccWwUUF3WhksTJLTHQe4jgT8pBVASoCx9gAGvR9wTUCowJy9JoKh8gytscJ3ryD3",
  "key32": "4vuCSgF1gBcPFk8YMTfu7rm9QnBW4x2DsUehi1fru1YXcJoNCfEomzTzMC546QWqWKmPjTzj5ur86reL8qHpmaep",
  "key33": "5aQ89rtUryufkcs3FLjfm1AcCmd3KzvtcytgU8eygemM38fSySTynjBDLuJKCigHVikvMAMPgkGkfRj1fgRRudkA",
  "key34": "4xr16rWK4mZVZ85fRstcu27en47w7ScRC2giTFeTvPSgMCroeFBLFtZ7nQCYLXQcTuV7U3tW57Ca1hRmx871xXE8"
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
