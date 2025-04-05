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
    "4FpyCb6rffNyHwbGmGioPJ1UTS58W25bvXp6LiNQ3BiC15ZL8Pho2GVisiyR3rBfsQe1H8cUNTM7JygCnqbe2Fu7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HHpNYUuhsYxBHEy9ArF1gmPuLM8USML6BL4T157mUM68TviJg88DEe24e8M9cPvAyEyrHY4GpnhPaHz2BsAzLgA",
  "key1": "4acWm6iBHpik9LLs6JucDBCyf3xDsW2VHHWDUBypFGdmWaAsqhTqyPuVLqyWRsyjR7mT9FcVAzR2rd1Hx3wqnpW3",
  "key2": "2HCsYmBo5UWsgvPQxJDYHMksTJBwYJMySNbvLa9v7LVtCvA96s4FrB67TtCG3mS6ghVrE77J5hQKoGhZ3gmGpC3o",
  "key3": "2fjHcXvuX3g3XQeAcPE41uzwk7sdWQG2n32CAiAbjP9x7KUorp3dzzcvYEWWqka1kxxT8ewiXADhbkaLwQ8c42dM",
  "key4": "3v1DUTcApcCK4hf9JC9cvX7Z4sdFTJNymnrcDkZEPeuy5EwYzWFNfLvmfpg8yCjeBWwRLsDmYCnnfQyeWHC2D4vp",
  "key5": "2DRwH646UG3RxxNTjT8y9Jtw5CM7sbFRoRCC9ccaBeH4eVJDvZxbvCrxNddw635s1uQ2WQ4F2SdKkHSu5DrV8MMg",
  "key6": "3vv5VmbP1P3zGak2xNM1pYXgwrEGN26VHJYpVxbMZSj1K19kSB4oYwgv7XxksCNuGuR9SyJCu2e711WJYc5k1Hm1",
  "key7": "5kw6u9QwJNPjgMGWBikRbX15bHyKTJPnHBoBjDmcd6a7sb3DxHwuPx5wCc7dqVTQXmDgVbe8fejXX1U4tdYAsJnC",
  "key8": "46AqPakXNfoRoC2Qhmm9eDzZEhQDJy32TVbE4unJBTA3MeLW5kSfQY9yMUzhEpzAABp2dNAWLmKx3LKS5rk69k5B",
  "key9": "21qH4Rj5ztYbMnRmj3RHbtL4aYUaNXYvNTNpenjK4cCKQhyGZFycMBQgEys5bYvaMR2G1ZQrJ1KjvUSZRmXCCRVB",
  "key10": "4SLr1PZqp6ZY2nJcGb5g8K1NCDB6aW9uvdzQxoV9DTo1Mt6QhfLRTWhSeCEUs7gVBn3kyFLTMgmsJn1zKk87pKHB",
  "key11": "4GxPkbd3koCefVsFEZye4Mt1Dn4a4LRMmerT366b1t6X1hVSfFWGEpX6ZiQFvaYicscQjceA9HjSaz2gVpcy1hyy",
  "key12": "2RgfaBDBDYr8HovCXyzn479fBNuFQTH7Kca8JenWhczBfYxugKPVeyg5KzniAgXzXKtqThvg5QYsRPjcc2k3pYnH",
  "key13": "448UFQKVSzG2a98ebQjUib8qqGNKyuP7QoYhGao4X3jL3YyHPbJWPZWDf7voLQqmTxNWxqx77YEaGoJKMeJ8HzQ8",
  "key14": "5V2DpBsLVA1LRyUepwMaJemrBoydQXfTxQr25sqDB2CDGLsXvyBHArkNWko5atsBJHByeGH32U661qjjHYyvhBLa",
  "key15": "4NzCiL2mPyQ6nj2euJs8CnChWUiikpLsohG7oMQPBkxVeyVB8qmixd5vLCXbVkZC3h53PNdt9EfdE1t4xCH82PHs",
  "key16": "22wcMNjZaLvcnAqdGY3Yh9NZXeVNH1w8yR1bwKFm7dHQk2wubxDiHisDzZCNrm1ZqJcLGn1P6QihZXhQbissjRrD",
  "key17": "57kLn9W2wk6jjYpTvEZQvxysWeCwXtBzfYEaYw1UqQ6fCrPDMbXZtNxQ3kKgE8su2GC1EZgAfQHKYzTyLuwitxkc",
  "key18": "3jRNJ6EnXp2XTU4PMNG5CkednQyRSXGdu3tVZ6k3fjS8aaRNiofgyWdZZ7x4Mngwf2NkJwVAk8pLKmJMwHMhzJzd",
  "key19": "2sf9vNf4kU2ynUwJdGKCVzPmjm17ntcgUDg8NcXG5HeGe3pdzRgRKpn1LxmcNx1jKynZ3kL8CBoEvTqFhPUGtgbr",
  "key20": "5QdU2GkAg66A6D7D2oGA9v32zM8y5wTfMu5Xt4LnStHRvUbLDrTQUp9oxWa5HZUcjY6AoFZSJofoFxGf2oYhLaW2",
  "key21": "fD9tovSYv85hd14fqXEEqv8RUrM2KdiMuShXsHctP8D3yK7ue6CBthJjx39rpcHm3F3pqoUzEx5q5rfPBxsKSDj",
  "key22": "3Sjvsyj1UGVM2t8BxWVkVjpSUCGqcwEBFf1PcbXsDzoqGc2MPwDLCXJXptzEBMSFdr6wHHPShdzceWDNVXfYr9mp",
  "key23": "5i3WTuVfHxAdbpv3KFJjpApWxhcMSXddcQUyunRBRs32ePBPVHqZsbLYseV3BtXtGY4CJuzWX2JsvnkYb6KPjm4w",
  "key24": "5Rhp1uJwp8o5CAmmXZDh3SNnPYsKY39R8BsqKFSGRvxBxCJP9rxsYeKND91DPWdcitVjRKSSuT58byVDwVyeP5pr",
  "key25": "2JqcFvRXqfiigAuB6eTi241FRbAhn1BK27TEXUWLCUu8GYVNwkVnkJBfHx98B4xWJeJc8z23kP2S5FpNYvivpSSM",
  "key26": "5AGdQyCdGwL2WQ418gbamXQkCL94Tmi5m8igojn7tifDdDH49cbZZ9CFw8AT56dLkC5VecArH7gYgmskjTQiz9Kr",
  "key27": "3u7gyCS9fnDz6C3DqNvE6qrzSg5yciWDzB2wM6qpryzLuoa3iMMMy8unDc8AGV8RJJQBFSv9vqEQrL8LBMzYqKC8",
  "key28": "56yfcjM2YvWWwQoKQ3Ydv9C7qP89MLjGR46NZMcmnJcqVaHkU4jigN1En1hHVoAjqFRjzp2dCpQpoFreW1G5NYkP",
  "key29": "EByhbu53rXPzNgEE5F9sMXGym4cZvwtUgk9BUUG8hXQSGjJS7meUbY4cxS1UZu2C7z9neLSxjGMNwvYths37Sr8",
  "key30": "4haP9PXCuZVjC3GzXrXoSATCGMxHC9CjW3AY2GmZg4uGkhnZt5rWpLu5ovT3tx1UUTUsA7EGkdhUfVihyxjCGzum"
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
