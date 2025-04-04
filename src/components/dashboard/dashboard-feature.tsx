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
    "3P34QF87WkuJR3KSKAsre3QsAycGW9APT8cg5bsybgYjtcEzdKBm72hBvzXD99Ye9D9PhR41ayEhcyDbztiuhBPX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cLzDbuXewacPPaE3vtCwH3vdmeBbthQVG2t2knn2ydNiAJJNGMtj8NJ8riANvw6uX6Vw2xJZK5eRnd6STHqLn2m",
  "key1": "5o9juap5yU2s3a9abD25D6PfbgqsS5jTeVrnNrSbKcfgewZABwqys2fJC6hij2vKA4mrLtYuVZU2hDFzjUGnQNgV",
  "key2": "Jx3pqeNgsHbVfS5Z4E4ywQsnNwZoboy87SCt7qV7pjvNrB8ahD1kz1XTFEreozzJSRPRf7t5FJFE6e554LLtWc8",
  "key3": "5hPDkEZcfuxSUQkJ4wn7ko6iqAkFHzouwE7YbRSPFjxZ2kzWtDJnZRCZf8s1sfqJQWzLjRfFcUtVywW8pvb5T1SF",
  "key4": "3HAgAMVRGRZLqfdhXnkaCLmDPeBeLRZLnxYZQcJQDLLQJpi5nWXHAHHMJ5rfvLdbiboG6jwrBu8GxQegUo17Lj5e",
  "key5": "V18ca6jnWZbuALWFDjPRAX8DTkviBtskUqu6GkMoakgmyKKxfG3zCMcsGahpJx6kzqSaaKpkfApNrx6j4naqwRh",
  "key6": "5QNWrapes1wVwuMxH45V97Tcb2i1bv59KtQfhTWcoE1xVyULx2nCJMDtemBmsEpxkWnYgm7EXQ5NzwjvrqNzuomF",
  "key7": "44YU5Qfy1H5mC4V9Cq7zC5QriJrfMXEp7qcUusrgm6yZeFreB4cCPQye2QoXyVm49Dh9bFmwds1mqk3W64k3u7hG",
  "key8": "2D352RiFQLWdfcVAM5PEKcnDAKDHLDEH14uafQBDpTrZT4PHXQgnB8BdV8sfmKquc3VJmW6cR8ThQtST25hh7Nhn",
  "key9": "4a4iMbTqUA2MQ1GxVR2zR97KWtzrhLZUM35c5Pujq5cABnet4J7SeWCvGsAsWmMu7F8RHPT3k4MytQH3XzSMpFLc",
  "key10": "vY4FTbqDT8eTkB2aC5q3hWPfX4jTmWv5eiV4RSdfPk1yYFpBZTPUDRLGSXM4Nm6SJ2qwoTLoeBfZi7ZCoWDusVv",
  "key11": "hQV2NMUumHKjiBiHmHkyyqTFxTcNwNmxBbyTzsX7u3MMgDmJSsqo5TRGjgxWhNRLHrECPyksaXVKQqhzEnqqTB8",
  "key12": "4ZD2Rz5U9UCknTyViCzrb7V7YwTproskTS6v6fAd48U8EGpDkEKcZq8EqwubFHNhjRuJdYGoqUM78CG8jHaQMMw2",
  "key13": "D6zDqw7PbApdtUt1pCLRM7FP3tRt3bwb1HBULDC4zQ7J7coubwVQgY83jXYM4L3xNKbBfCoWK7FNbRvbLFZ2fF6",
  "key14": "EzaJbK7yVY4eMte4pkeKrb9yyueC4xDiM38p2g6RDdmUyvp3pK4WxPHCu7AZd6L4EssCCLm4zC2EdmWpEhtLoUb",
  "key15": "2pXYqRishPX3sSZ7FfcY4AFd5jEWjrUtpRUkqeAW5DxeWHnxQweYjCyqgKNrDHYZc18GJMLRByiTJXpzoD9uFn9Y",
  "key16": "3k5hmuZJJWn9eUJkpQNaPiso6FyidCV2uvvcC1MDhyqmVV7T9JxXQLBKptjV7xk1FMeMGuTSb3RBe4JpAQ65kHfM",
  "key17": "5o29yDXDWdUrfvHKQF4Y8x2sL7oz3rM6ExREnydcxjpN3TZbccwuX5gVN9DdPS1r2xNi2Zh6aohUQ1HidgTHwEg8",
  "key18": "27iCJoJZ9pwUhBi5d8c65jJQQw8TRPMr26yrHP5SJEYYg4sBjpidgADpXYF1b1Bx3A1XBjSWt1yuPZHLBQ2wih27",
  "key19": "4xpnhcbMRucGMDmE5ygrpjTZ5wTzCWrwMwcZkLCoVo7oPu2rvynsjdZgY83LcuvqC5EeWqhSVB3BCMecgjh4rq7r",
  "key20": "3KQfg5rGcpm3Rk9TsNerTxvwJL8BrEqz4bzNDdEw5PnTxAdFqSpqdf5zKrn5TcgGemH5jn6pmywZ5v4QLDmvTuQE",
  "key21": "2NHUAyw1pdATnraqkmN9nPfWhRTMq5baQR9USceozfbNsHNZf3LRAFCg1EFc7HBU4Gjn7eNAWjiy9pk3E3b37Qrz",
  "key22": "q99Ap7b4pG2RfesAtEPD7BJsQ8qt9HYPAacaUbUgHvG1qbnjjPLnqEd67bdVJ3anyrpUvrKkJmCFu9Accyjpd8m",
  "key23": "561EwuJ3NGpxv8pJBJ6pK3BCCQL5pUru5rcZQGkDWQ3Suw54bha9X7hjE974bAmGeV97LRyXPQ3XA1zjrT68Fihx",
  "key24": "2NmPqH2GkkRU75QaeUCv3tFPGYxrcyEj1o4goMhAoaMhqtiJ6gAaUPgT5LyuNmJ8FCrGFCTBJLcEazWjqmKDSMgw",
  "key25": "4MqBESm3z7As9sGfrcfA8wtN1a3cn1kAeh5Hai1mbBgfZR7zDJRc6rdyDqQSRjWHjihrdotZkN16deMrfjNQcrgH",
  "key26": "afCavejrV67dom6vJuTmGV7e15wgcmJ8bkaXiupHqtg6SjjFW9WnGCdq7E88i9wVibP4tadQ3yN1CoDksGrGZZ3",
  "key27": "2WHo4Wg4wxmroKVNWNcjWKc7E9AbSpEnGruWZxVq4tJ47JbyEkVz7J5EFAK3FbR6JNn6BAeC72JBEF2B93DFBD1c",
  "key28": "4xXNfhQoNtXx3ceHFHS88VH5qRAP5RVGsi57Ei5cD5wjgtRnhsHWJKtQgKWTPW1vHFzPgbsnqQbi2Htedz8JtpkW",
  "key29": "4d6h8XS9EZAfHNuyzaLJVrQaL4fRfgFXyVb1Xbecw4VYf4gwwWs63zbixpJ5dHMJyatW5i2EuPfyjTf4mgCnfA8b",
  "key30": "4QzUUYzKvuDuTkqiZs3HfaDXo2eLLgLsmR647uRR25efwbTEN6nxfjQpXbYgRS2izrzEgKAPc8QqV2xgM6X8Ge5L",
  "key31": "FxZ9tMTzrPsPn5Y7Tn33b4EnqqNtRmr9w9NjMjbCLioTog5gDsBuodEUQPEnWsgtm2Gkxw3RUJ6gy3WKnMzbWXV",
  "key32": "4J639Vs7BvW6HvVnHKhMbTuacJc42joPdZ4DWnD2MPekRv28aoR6D1yd34LAv1NcY9yqpvwCVA5Zo5aAeM33pqxw",
  "key33": "25xi68stvAJ2EVtCeLsQzTNiVu2jg5L1vhFxy2M7qnuGM6dMiPgr242hvDiTiXk9qCTkVnwDPPwTYocKpiyFwVT5",
  "key34": "4W9n9oZGinSX8gfmmeVQbFQn86JrncKah2pxb5YYZUw2Yr97GuBoRUddYne7JMBFhLFDobVF7JNRMjJLGW5foeVb",
  "key35": "3K4XCMUjCQ7tPbe4XEwL9SE39SJHzpAtNUujsRVVi8WHn2EVCjNzMrRAC2hXLjDtNkouefiZRAXWGyGTRAjYADgE",
  "key36": "2KHLyeem7HMHbYfKvrcmJsAF2xn57hrMfEQunebumEZepVVAsQLTjSJQwu5joaRPvWRL5sbR8m2PKz6sQZ1SySFu",
  "key37": "2hp6rDwR83qAVVEvbz8Et7Jen3WfcahUhi3S3CMKvjtM4L54LS2c7WsrhVNzSDbgKX9SuvSbSKqyjUcoNbpYPNc2",
  "key38": "5JABEyKD4KzEQC3o457fN8ZsYiTitPC8gz3cV88JDHr5ze3DWyvq12XhJe7BrMTskJMtzbn1FkLW4Ve24c4dNujJ",
  "key39": "3G4tcESmjMeV3fE29T5XPaqKm3oQLj7A9SsNmmyCKY8D6v8cZQV9fJNgZThvHJjpPbriCht8TdDe2Wx3B7RwYDxr",
  "key40": "48jy5Gsx6jsxgN2VEPBUsD2ZXY2kfEqhTwAcBS39i7VEbSENbUuuf462XX4qqeUFo9naprwtZ3o47vzoX3KuU6w8",
  "key41": "3iPv5j2QsNQMsWNqcSGpUYCSEpJvkx9pnRSPNt8se4sLWL8FXyd6P2QgB6zsBv3LMjtbBGYiMBq4q2RsFDdRnCcN"
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
