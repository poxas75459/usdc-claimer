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
    "5v1grEbb6vtRufm936RurDzA9kefKWqEKsqXf35tp8rzn2352A9EN5Dxf5vBeSpa9xm9xnXWAgCLqEG1QWbMfGpk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JnxJpC1ZwHTSf8XFarrZuu3anKXy6oT9svJNiR5hK9GLErv8mer82kaKocApgUy3QFHoneX6uSTFbjCyMLfDhtr",
  "key1": "3TxR6M7XLiKbrxtkNiLB6zudMnaiD4u5Jx7HkdGzNKRsQegRvJBNXVjSVwFUzXdTV6hVkx6SHEV3gQ6V1hXorQiz",
  "key2": "4KCZaHkAhuH5Ys9FcvRJdEaoXDpaSbbdCizJ4ELACNT6ssrx4wXcuBdDRxQFkSsebobTMXKmZCZGmuSunN6yP55e",
  "key3": "2xvu8YR4mqRgXPCFHBbKc442nGhrSFZ7zHWV5fMUDgohvQ2SeurV5yRbmcu5zhvKMvXCVZuNG7B66G3jHK8iBE26",
  "key4": "2Q5dw38zTTJBXisvMLUJGuqNy2TRntD7KaWi7wktWjimsbMB4Tajxg8f5i5E3kJCG8TwMhPNMLC8h2Qvi8nkbZWX",
  "key5": "2jXgRtrMVqfUuhdNNzjEmZTrBRjarb1ivuEfSbLPvRwR4ggJNczQQ8CMNzNV1hhC9ebbQwHYBH7iPvHFwvHdC1H",
  "key6": "4Y6u4CxQZVRJpy84H2pkNWjRkYSAVyeBnGWA1mp5FBMfgtqbsyTcfp5fmi4aoMDpQZnJj1Lnh2esL9Xfh2PLpn1u",
  "key7": "2aDJSqpJZq4ebHvj52Qr5xtHVckWcyPvKputEysmkSXYdC3xVJuGyNgj5TcZDhAkj1hYcufSdXgp4Kxp6chUCPU3",
  "key8": "2HktWikTdRrmuuP7jkK7PMBy4414kfrcq9MLATikDerCuTd6MVCwoLmoS2Pijg4NFXbAVVEcNj9jR6KGCj9Qxyon",
  "key9": "3a3h2kJiv2axGJJAvK8gDbZDmDu32i44fsj8x1cnstT5EHBWriAJSm6weBb33vXczDPLhKULVNvnQ5ZCbCPKDFmP",
  "key10": "4SKYctENTAP9ANrmhxzF9xxYMGtVMQeNDZbXpgQtK9EeyonhFuRo1KCARWyxH9VvQUsug23vYL7PunJimq5BrfB4",
  "key11": "icW9AZ9qzYzY8Z4MQPBh1qNWjtjeegQheTZtWfXvco4T7yzdEN53S6Hm2TXF3cr5zeGs2E3P9oTf6cDzvU5eZkV",
  "key12": "3XSgAURiLSjmvufZLKuCPyfxRatHmdyjmWkJgpxGtMJSPTQ8MNxpNbGtbVFNoJVcBEvteTsUsP1YEMm3XpZH4cDo",
  "key13": "2ZfXiMVZj7vfV2KacgKvw7Ko8SWD2e4hbfNWJw52SEEiGBe7M3mankgaAp4ajP3X6WE2CvZR1FzLtKa4Eki9vE7M",
  "key14": "BKwd2UBPcoXVk1ba73kQ5eTiq4QAeaKpsHL3iuNCGyM4QP1GtXQAjmjB371V9wZQm2fNa1hbRWTFLvGGd1DWQVc",
  "key15": "35u6wQu25iZshUP6ypp1PEVhV5dcDAocsJUSxsmWusCCBRrnzVhdDzVZqbkKuNAXH3jd8vYSZvuXbUMWZ66E7a34",
  "key16": "4d2tBc6sZ6SyJEFxzzcTWkjHLUZny2yNyugM6zxDqXDcTikH3bZQLx9Z5BuqETQrTmcgsk8SPysJZzfWU2dGMtkS",
  "key17": "2E9t5hvfVmc2sDGmUA9vYYJ2YBpHeGXbpxGrzG8xxKc4VXNAFZoJjPu9EvbdU1L1JTH5kKjJDXTbJRkW8bwKXMft",
  "key18": "Tu5S6vVdB6XobhACDhfAnRC7nrchALTqWUuAKuHd9iCa22RWCThq3pwWKsm4FnK3BzmBq4DC4CTFv3Rkt7MeetA",
  "key19": "2zm9NcbqJzMb35vEvRTt9nqXFFsw51g6hnfoaiUNMfsu3qDiZ6u8tanhFm2CdgiqE4NaWEcn7dNXXFwozB8ZaueM",
  "key20": "5h3rZMvYivMihsRdSGoJgJkQ6pHou9cxi364CqCRjnvzhWKBpC7rkKKqsCsB8LeCUPbDjqUGE64rSrwVASzcLN3A",
  "key21": "5LQTdLvG5uNqE3YawcCi6X6qVVM7iFhT7cHdYG98wgeFaqE5k3NeMBiRaNeiaQr2AzxYrcnUTdq3wdPp8qsofBVQ",
  "key22": "9XVUKePnk5tGRN68MPpvBfXnVJ2uVc1yH65HV4KFYtffUMS8EK7M556U2PZD6o1FWVDhQbp7BL7U9oF7XVkKUnB",
  "key23": "3cAsNhjUntALjR3pSkeiJqL2ugEmq7xkx5xZrijnvFbToMt6xUwB2Gck6gVfbPQ3QNaf6tFMwNkYViD9bRFqUTzU",
  "key24": "5R6XVNPTeYa9VSMpGZAZaHKdBPPGwQQqEadLHuHryjTKtu88Bf6Dntznvy1EBebR8ydnvRbSfkMS7byWrirE333R",
  "key25": "2tnZUfLbsbLHVbhtJcTSsxDAdf2vurq3r81iecVMjbdzCYzpoJRBJChevf5vUjKgbgXXZ7QsQRonepyVPDcX9gaG",
  "key26": "2XZZ3NqqzYmnki3UE4QJcYN3Vfsm8c49mHJgUbgQvcqgorRc2PAZvdqX9SKnr2yJvbHRiB1DeBRqc9BJDBYdNTMX",
  "key27": "3rYG6L53vX7frsnKEEp6VQCwYyk8vbML9CH3XJvGv2JeKubciShDJg7Zjyeg9Zy1umMVLTh1SrV1bhog9BZdrBpr",
  "key28": "4gUSg7ce69cYpBcw1yww5h3Tp8yZ8xayQwn9G1yoVx7gNbUXzJS1ot8QNh4s2KWWe3ZvaCwfUB8NezvWeT3F8xWp",
  "key29": "28U1mHAUBvnypW6pkMbG23DhpYCrGecpBKE8FnmgJQhSt6iTDzeuGUQ7ESj6yVupCsHnWGByzdBAL7jXnL4a3jGz",
  "key30": "3etT6VZH7uncw58ZQiDVafdgrjsmR1k5typNZWwb52WiBfM71CbWKCMXmxTpbnfzU5iUWqg5F6jbCRjJxDxLj9NJ",
  "key31": "3JThHftAbyZpx5MT3ULnLSUWfBeiE5MC73vhwMww3dbYwP1r6awzKBFjq5yE7uE5K19bxgd2CNuHLdxquXriPQkD",
  "key32": "A2tFYEwZFCvmGqR9a66Axoci911wqTZQUY8MYhuEqocdAtTWczSdCDZNq2nAqNeAuEvX7dbDiNkPh7rRdHtXbmb",
  "key33": "5EJ6rbVnLdDUusNt9H5BRVdBStTBKKYgvtM8zXD7dFxKPPn6GBG5NH6XDzQP7J5bnjEDQFZUQ9Ccz5Fcybfrnzmx",
  "key34": "2mRMhba33WPeYYXFVZudmsvbWvQ6XJaeXiiAMPwC4cU78XsmNNRkMMn2YibpWmWEo3ybSaaJg7M4DC1kSXaNRXaL",
  "key35": "7wvzqErnPbcB4UWc7gCgwJAvQxoqKPxvJUUN729A6o3ixu7rijiYyHmqJxP4WDHiKr9GDtzvxX83QLZPpgQv3QX",
  "key36": "5hdpeYZZdd9FdQQSw81yR3HRSR2uAy1UfPrPLNjnyGVnP3xJs53piyuvFMK5duubTW3kxqK9BGzw7m8A2p2BG2yr",
  "key37": "27biBju3g6jCeNtnE8XbQCL9zxUM8NkjQZNSVMekiKwHEQsAPHY54MkY7LXxAkomW8hSQ6wqyn2vjsxPCdnhHjLF",
  "key38": "4fREhF9SXvTunCguwKJ5bDy1EaYDHv74hj3QxtAo2TyBwXPDaCHYXXpkdndeJmSbnf1j6ppvQZ39RtS1og3Ad5dm",
  "key39": "5oS8WjAPJYtfhxzCaiXUdudJLWZxXojq1ZLDemhx4rGodqyvUdUBvyhLXeF1AF4x1hvz7qYizXcg4qngsrtCNjhU",
  "key40": "4FDZWa433Zwv7H9DYS4K6AsoqRh73j86v98Grc83U1FP3FQGtVQXDwugb5k7QiDTcWkWMDD7DtsakaPB1v5PEmaU",
  "key41": "A6e8fShH85AbYETdoYN5WEE8Wf8R3z8NaoNMF33K2KAWA8W5XanLWzgz8T1H2UffvWvYgndoduzSx3gNa28ujwZ",
  "key42": "3fJn2F1gq1zLCPbnAv7qvbTVB9cvo4NUFWuwsfRqQ4HcmTR4LjKfCCt7pgNKP1Ebx6M9xSVfrgUyfmDK2pVRrDSo"
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
