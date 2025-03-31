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
    "WJc2P3kMKPKnSgetCoe4VZvVBAss3Vh5As4UwxUNPt6eQ74xNcrEPTcqWCCBHgFD5rBrHBM4URpfk3LGkxvirsi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i5dwtE6cC6889HvXy9koMoZrvcpeoCJtHoytZc2w98sVxbSq8APnyDMGWt751Ef8gcc7uqBMVe9oodfQV9FSnAZ",
  "key1": "24hagqneb1PcN4VPb453h48zMwdWkaUwKimhJ9HwVX6PqU6FFXHEggob4viMJGKbDHfqHwx6P1UpgN8CpZvUwi4y",
  "key2": "5kWgzu8gYi3VZo8xdkEVQueHuNC3ThVFnKYAPEFUZHmkQHSXhg8oxTgEMf2W3QURPcbEMZm1z6vscLsXgA4cBR29",
  "key3": "5mxzYzu9GfQryzgypxqH4jwSqb8rmuLzbmGtqRPdZ1YEsAqhL3fCR3V4cdzvVt35woX2kn3SmA1orUXiFAyBJxm",
  "key4": "4rXsB6PQGGJ8bssRHXs7ng3YKNNUuZWwL8VSrMqHwj557giW1GyTspv1FGdnMmUKEkaiv3FqYwki3xH1D8cwzjMB",
  "key5": "29YEQ3fnsFQBTjPHKFyUjdaQptWKuzVrpjniE3mNduzig7T9nkC7cqXjtLR2VxKGHrPyGnXyWzEjLBrMfDfdWzLd",
  "key6": "3wfTGc7YRUoSxPHw7cUxpoP3VFCHU96tAVacQeGKpTYyqGkn1mQhWJYBiro6KUwRJLTZf6YVQZS1W3x7JQViRuA6",
  "key7": "2Ub3fC7a3hpuyLv9WG3pf5UFLWyrBeTHeo1uaHZtYJd5DMkYMMA9mCKxUKYMfBUB5GJcUTRBLbzk5VqoxZT8eXxx",
  "key8": "2qyqHQ4drESaHgD2wqXe2j1u1UgAqTjao1THRNDZFjWJBMcyra1tsvtAYceAtR9nFWGm57jPRN5nKXJxJopK7oth",
  "key9": "MWXBBopGvVRiPQ5mNNYyobEEFroRBN3Se5QGB8Eefi4L9yK4Py82e6qyuKbvRUenvXBkQywcdUbRPDQpdx3jmET",
  "key10": "vzhwNyrhSFfnFzuVSwiH1mRRQAg7dicFmWXxJRhQVybrSrnfzYYVeGED1Gy3JkZ8dQ5WPFRKRnaooZMT5fy9bLv",
  "key11": "4WoYPBS7np444AA1hxLopmWbpbvZ3FeHJyppo3y97yZ9xftEjKsZZvrptQ9Zu7rciFgo2MXXFESXVmcWEGgva7y4",
  "key12": "2iosoAZpXDHpM35KXuNRHVxWvJRjEaatGEKp7CbKhGfyvM8H6MoxXoCTheb3hXHzbSph8E8hWNeW3YSc88NmnSZ2",
  "key13": "2T1AvWZRasVbEbp4A7gRqb7Gd11ikHnRTyCkrsbh83TX4wJzSs2LWTjFYgv6Tm4pk5MrAhoCpw1BrbZxv3Lvm4t6",
  "key14": "SdyBAti2iCLhpfFGB6U254jiR4fMwndejsGZLJB1VCP394qaR33N58TzunvjV4a3cL96LeUJvhXoVWs9USWYJ8f",
  "key15": "58oBj2VJEiMpGwSR1fCbkVJJ7Q2UxyCzKcPjF87TeKDuHLFEk8dS4znsnesYq8JbFpNmXP2jFPK2MH2aGL4NHRrM",
  "key16": "5w1G1aqZJs9dRUaqwpBP8kv14Yv99o7v5BjPq4ZqLD1q4HDoL7iYxvZhCybE4UBHUabT424jL4C5SDWFYdQcwC1v",
  "key17": "4idYM75amUSqcBPP3kdqEYeEtPpkRP3n3e9Jn8ceJz1YwxZETpL3J8omx6NUWThiQ2H3t5YPJvYy8sWDWYJ19m9D",
  "key18": "3faDMooWQExsavovWHoUMpkz6h8ax3iUwNZWdji5wLTyybDhZWkgH38Sqe33QMTiric5KBjCc4sG4Kty9THT49cW",
  "key19": "2vr3R1iC4UFCx1g7rjMNXZYVmCMqzGaEUWde5Yrhhoahn58zPHKVtFxv4YF9HzPZV5j19twaaGWFYXGpZnBzovrA",
  "key20": "4dLoJQ3MF3kfY47a9MEg33AVBTyJLWJY58Gd1yit4cPsi6fwTx5eJEnvvNwNrR6gjyaH6yfUCCJQJajZ5YWCkCRf",
  "key21": "33HcAa7ie1f2815yKSx1uLuV4bh5yJYvS1gUNQgiztithtoxSKmTfn6pn99VMTiNRBcwcmUASvXCnivH7RNxgr39",
  "key22": "4HVFLbuUFUzgtgNvAkDmAY2UqdZvxx3xZxSajKb2BHeTKmcwHsAKhcnpTk4fSkPK2AF94JbsmgmaHY971zys8eac",
  "key23": "urJjVzaBLxnXWiSF6RC28NVftswF7X6xeK9mwZxn7zjqLtnyPTT7XHCmVq4cEpV3ZBSvXPcHTivMGE9PKtn1yCx",
  "key24": "RRKVz3SrYtesZZZPDDEbAHNdgVQBPaWiM4kh6hPQQFXX74ydKi5vPCjPn3BCu5uAcb2gBnTQ2Uo23BpGvqjqdWD",
  "key25": "9mFw7pVq6EYq9UdEvKTfTABdvM3rbQsuJdTXgpZN8Peyrc5q7Rde27nJjMnxoGAJfVEytnHTdefoG4wartBjUsB",
  "key26": "24r5HiH5hKLxKSECWruEwrp7z3h2cgAR2eLiDipcf7imXnAsBMcApG7fCHd26rnYKpo6JTSCJZfcadbLNoYwaUFh",
  "key27": "jxgFmodtkd44Mb2vkVbUimPjKDzEmJUUzBfNwKhbGJju1R2USF5VhaMy9ZSrZympQfamksJVen2pGdxiuZtX2ER",
  "key28": "EZXdqqYMLCLtSHkQ43zBKT4wH174GqskqWty7t4skxn5kkLHjdDXr21GbjtP9Ni1SBY1CFGjPqfHzYERcFzYwoG",
  "key29": "2n3pr3kdsFwXkhitGearuKeDVPre6Nk8VLsrnVj3xWfifRKRTefbqAudXdtTqtB54vZ1cwRDnbT9GRkeFfSF63DZ",
  "key30": "2Bp973tezQCf1Yce9bLpFNFaQKLnQrMQiUMwmCpk7XFdPmYoKt2AaRvcuC4Eyqj8Cqnqjk4iK2esya9ZnVTSxi5k",
  "key31": "2roZEjJ8bGVjb1wWUDS9A3tSNBqfvxJcqDvDdcmz5uQ48Sx7QuXrCuT4JGwFNPYMt8CX42y9DSsGgCRNFADztb2i",
  "key32": "66ixJfT3wadxhhwRTvytN9jMGebRHmA4Ce46MWzGdhvUeeA9s9Mx4ZE5iUs9ZFBCwTDJv7ndZmP1ao2wfRfyWTUT",
  "key33": "4yAKFnSFa9et67MgWDjddtNBfqPi1hsS5nS1jNc8My7JBLGnYGdiM5cpTzTRuKZshB9mci3XLfyvM41gvn327rwt",
  "key34": "2tTfCqpKKoKGMnwzDKLuTg7wNG8cHf5yfz7HkjQ8yjx4VqvkwDyvh1J2M9WyXXomhQ6ar9earPRxGw11VadhNyAK"
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
