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
    "3NTdYzCdLRUuK21kRxBeikPG22L2u3qCsxEbb34iuja3pmqSZq1TvMQjymp8vWhjKqKLEa52zw1LGZm36h9y2QbT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hRNnBkT2qm3NoFk55RF4hd85pmxZM4x3qHqRshNRPsuwMmgg12pH7sp3XnGyDBRSXTLqZtwaBXQ8ZvarRAwZ6D8",
  "key1": "4x9YuozMJE6shMnVdo3K234Kwa1oq4kjsHoZ1SDC1A95rhsA89s58cBS1buiKFGzc5djikGAHA6RUjMmQPVCJNCr",
  "key2": "K2oeUGrrqjAPL5HQS5Zu8qAhcnVnjn6UkNzfu7gTEF75sTKTfhTdAKFambKWNGSbnZEGrZZwvXNm2ibhZ4DECFL",
  "key3": "27zFS4YDNhYH8Kpo5n13LQGKokxWVRj6DHiCG9xn6dDA77R4od3MEuKzReMgHj2F9Lqo1FdSoAKzcGkqy42ExxH8",
  "key4": "2Vyocdqmmia8GQc8zwDvZTJ7qHj5a7TNVyYg6AbJr3GGxsxVb1KU4pC7u3FBTsoGomdFtNrTTg7Eo3rVKUB6uTnP",
  "key5": "2xgsoeYmdVoDhVVpvbDmwMZoxz3MS9NSpwMbhRfMRW6qqQ9gKEsek4YkiFaxSjd7gHSuQe3tzHzN6PqtFqUsucds",
  "key6": "4TyryRSRNdawzFWcXvgKoRD6E2nzeH355z4VgNfGXvTB8QotsZC8CdGQoBmPnJEdQZ5jsJrRCkcEcKjWDuB2Wcjv",
  "key7": "ks5Qefhc8m9vLpxhoBgK8cWH5XktFePCT7QGnSJ7JkpiycEpRoahSVSpsFxmxu2H2QubjKUc17ZfwzzRQL6MVm7",
  "key8": "3spdTe9bWSBrsJUHLKtqYvVbtALhYjQntiwXY99p2h3DosC18UHz77iAcYyr1Z3CqFRXHLffhX3CkHxMTPjv82oa",
  "key9": "5EnbGYNZsi43xe438KfJKRpLSdpzV8sAR5dyhkbpb8DPX574NtzQdvrRavmazRWEPF59zmFYRXQoDQqj6Moq7byT",
  "key10": "3QBs8WxdgjaUEKQNmPwP4NZJs7g9FVkJnQjAUmgY45Bi68hgnkh7c2u3zkWpK2R153gf4ZoR9rgQrdJxsU9wo8PW",
  "key11": "5WeS1kU3XDQnJejynVAjiuW5rGdrcWUXudYz8oQ6gmkyYE13o9rjwMkTXG5xuXJr5p3YJadQ6Nebc6nZQiMMnhgR",
  "key12": "4kFD5s39Rj7VWJWH2eLHveUjQR3iWdAnG8U2SKr3QV8imTpj83b6XYVymGFL5NV2QKiJt2TU9daoDTHSt5AvLPro",
  "key13": "5xTUYYsf77E8LJXbwmAgmN3bm1136hyi93KML3XQMzvVUpYRQ1nXMmtLUDby8UsuCwpoQunCNcuguzivjwBpNTQT",
  "key14": "2xSpucJ42GdGecjdAoft7xNQPXMUopK3igJTNfSC8LpuXsXwjH3JmHsm271rkGyLEe91CzGciqrEiDKgmu845Uct",
  "key15": "5Axu1eLb6t3hBBk2YSxSsAmzF6zfUSgbhAjYmsrHd78AGm3bsFaMu98Lqj5uQs93CxnAWKUCPCGjhisd1jScJUU4",
  "key16": "3g1X99vmT4ikhMkP8kAxX5UZ3yXKVYGNQeH91UY91k8CoHMhSGNLicsjJDKvGhqrFZevUzJSBN8fhjB8x17R6H3G",
  "key17": "ESFdFpoPBWZoveJ9FrorhC7HUtL2anKsZ51bPLDTNA5vZydQYrQfMVwP1EreLxskmqCA3qrM1e7ipiGKTStm6xx",
  "key18": "4w1C1aFso84byaNkR3qEJxjmdy27KGknAeSnSbsBQxkshCxgDZ7ncY1rmyPBfk6ZL61ZKo75ZNVV4UWY1tF8x5VM",
  "key19": "oPSDDuSMF4jMWQFvnnmTywCqLmRGoiwMfUieMFeR4JW5aNDgK18ocYGJ8XCQjyfSoBe4zf7KtE4Rg1CRPDVkHEk",
  "key20": "5DisvYdwNCMfuDk1CJmZPttR1Za7hndTHjASmacMRNxHe4yEy9qT7svNnTrdv98kraq5V8BfBndHNuhaSRdWzh6N",
  "key21": "46RfUbc3wNgnA75661DGdbUUTUXm573dEoighbouKnuPrmZ5bH5x3cKNLmDqMAZDJW5sqz3vF2bZFg2xMWeyY2V3",
  "key22": "63pQwXZtgpK4Y3XmD6mU728MWinSetmBx65gi11UUCFgucWJigLXeyMuKmTS21RhqsWRKQcHHRXRrXc9beheKxGy",
  "key23": "3vEA4U59uZn4P8oRPjTr2ZGkwHiy6XBjxdL9rVL3MFhkQcXQafng6nVkTZ919QmVMh6BVVtHzQnHgMFkKRC1bCgB",
  "key24": "2tXWqQs8REr35mReBdMoSGbNL2BExzwkmtokYD57R1g7d3NUx6Qyy7hp112jC5EA5BMYAs5TnSbLiVRERUCv8xo6",
  "key25": "4RDYUeuEKByn2X5PiHNYZ3vP4h5vHWTCYH49e5kB1PzYRNi9eWqsGMaKvnbhgcNJKwbp9woAPWK1G5sQ7odLiqjc",
  "key26": "3UW43LoSnbigW9fBAUkPyRq3JQAaWADAPy5KCbK6kDjc2Z1k3uCH9pmaXUKLXiydk7cBXz3MRxVrahYmmshzhkk",
  "key27": "43sLGybPaAdYsZc4XDTG256cj4FbRFkUeQ6PHNVykE3g9tLXztnkBbvfqJjbvU23t1VrVafbLdDw23WhKCzt4xo4",
  "key28": "5h17ZW4b91FhyDoY9tdyDka3dJmvsrnDpbSzGs6f9sQz3V3dQT6VZhEE1s11MBNEbwvyfEb11DW9x1x95qYMzqSm",
  "key29": "24rZbdKQEA7soaVgJyH2N6H7HxodfZwaPtbLVTZrru2DBHV9bGwp2DgrQ8pLC3RMaJhgoWYYnG4RiCVfxKdgmBTD",
  "key30": "4aiZxLeEieSbjjk1kCHzcuAp36U7Ta1Nb4FYvyjSVEenvsZHBrG9w2qXFcvfURsvtYRDcQcyVhvfpte1BwnoGGVZ",
  "key31": "GrxXwx4KLVK26vL4fu7DTqfjiTq1nKyDJNvQRhaQA8ropiaCW4JtzwTabFJ9xXRqCSDfuG9wNA9tRoiQfzaV7Kp",
  "key32": "4MGKhgLxMHjhh54pEhRCagYfB6pr5i9tLH2AAh7xmefw8ba7tkBGgUxPQh3gRhN9SU6bJQWgTEobFUfE99tsJJp5",
  "key33": "SfdRSjm3P7yDo71bbfVb7uyQ7y51zcA2sNS2U4PRifD6W462ZCPYLtUjxwg6DfUmRb24SWT8VKgRNnwF6q4oGX4",
  "key34": "3NZp6x1hPgCnd8RSzrNGocVJJgz4HamhDdfiikAJYjdJhVNtmoh9WCYa8z7fwRwJKKfkHkj265XMKqtjtEVT3yGk",
  "key35": "462rhaL4TZdmWy8Jw7o23QdcH1pDZHcnP3No5HecCYXFzaNXdjheUYuMCet65thESHKyutn8RY7eERgSfLyeDzcU",
  "key36": "5CvfKWJ53NA9Dm5zzuv434q2X7whFkT36ZtiCW3NbiUW8GG6sE2DFeBYD8wDhKD9XPGFPXmXiAt8jWfzFCMmxKsw",
  "key37": "3NXR8EnrqYV8QeiuN7ifC69W9dhja2MzYtVpsQzhFhvPwBdhteXRrhBAH9mvpCLLDcfgsc8nceqgQ1TSrXLcfsh",
  "key38": "3y9if7grhXcHbkmsags8sDwbgWzk54vZrxQNPCx6cWNkxehw9hkuur2nCnXjomGHiwQXdLhPkxtDbkZA21WwgNEt",
  "key39": "21MCKRUGyV1SxNgMyBU9sJHbKosNzBWYR7z5ZzimBP6oNUYCYG9wBKXrSC13dyhRFrW2tYkQuAekAqNv3ZacPzQa",
  "key40": "4wGwNLMeE3ENYeZ9ngNnBvPXBkDHbv2TT9auqB5MN7sVCeX3n3pprENTfnoj1GDbgW7APtBxpPnc7vJhLMmPHJnZ",
  "key41": "3zDb1K89zZHo2kjWVM3uujfnfknDFWg2GUU1gmyi1EFrtCKhKVhvgA6Y7pNtmnT6UjPk1DCPovMk9vUi1EAwhnpK",
  "key42": "39ssDEAAUhZQS9vBbknEXjn4rnqkrZyyyUyYkL9jTFHSrsySMcZvcikVo1cSfz9W4Qzxz8GenZb3sC2jFmZVX7by",
  "key43": "3Sj2YveeM9V7oxbWEN88gg4jFqQLJ4TxvpmXtpYQHbgxD1qiFgM5TBALcoaNQ49HNRM5UucTqUrqnaqPMXJhVn7o",
  "key44": "WfxezYrvGx77WT3wEA7sx4fyzYyDRLfdcFZFoo2WioM4zpE1xSg4cZpdDCdkG53ZcNtJFDwdecZzLL23xwnRDpf",
  "key45": "4wbMjGswv7ncJebtNT8b7E3AapxGcRA2JSMHCG3yM98XbYvRxELZiSbKmMPF33nBmVJ43gYELpzHGYisxFLkzCBJ",
  "key46": "3bj6BAWjyh56e6SH9XfH87Q5cGCFGpeixXGDZcvJFzfVhVTLf1k8X2NvCYyPsxsxrDyj9zit8tGtWNeLv7MXyRYm",
  "key47": "347AybpWdtKdcLKBA6KF2FH6g9co5dPfUe4XPrFb6yRLisCLZ6RV4JpXr9PRvmc1pro8UWsvd9wkAxX848UeRX7U",
  "key48": "dnZNgTigu9Q4etm4HKdUH1ug9MQiDLviCdobWm9trFcibozJYndjADjYQmfXF4ZcGvdrSnj19ocdmgqcgF1Dn7z",
  "key49": "62V4uK9HAsoqnf1zHZzug9fa1HZXsScgD7YxjiF5dfMnc5nF6KC5DciWaR3vmGnxkvZcSmrntJ7zj95pFagizKTV"
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
