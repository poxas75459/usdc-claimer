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
    "4ebSYQLHkUT1ZTyJjxxRSJWJJh6NPBkgXjRxTwZPDyfHxQ6JQxYr29oWAsFwDU1gMrphPor8aeN2ZrybW2sLu7xj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cE1569Pt2sn4RF8GKNwFhHdtpCi2GkieDAy9ovnvzyteP9WsvMqAVxyGgk868GHYgdNVgYaKdVsDu6UHi29dRVc",
  "key1": "5ukTPjXf4cfBenevvqoAfaEL9S7qXGjN7LwCdBzPK9c511JTXEBC35Yacjifun3ELkjKfBcERBEM44AJvQXJJ44q",
  "key2": "2X4YUmkxxZRcMQXnWzCjKTzithuHftmPyNxjH5D1QiU7eap7cCaM76iMxijyekcf31tjbYd1nvXHXLJmvRZGnz5A",
  "key3": "2WypbHLg6dNpKVcCR75GwVRChSCfQZGWBBkrS1zwefoBDnhbtY3ry7CK9N7JwxGmPsZDbkajQi9Dq7bWpCjRiYSo",
  "key4": "Ax4W4Ugfth2tUVvE4xVXAPbNChgqr6XDop1MC4NtWWVWaeePT1AtWwrCGcbpVRwypM5xeCk9NqXwu8a6eRLkZas",
  "key5": "3oVtmtauA4EeDHKggj36SBaF4fCv6QC7CZSgWfuYJy1qSHMwCVnUjoSekrmLdnfnBvbaf4dJtmP1WV35ZALGKhtw",
  "key6": "29nkqTejYQWiRa1KXgqFcb18V4nsRhYsWdR48a8LpHC9FmVgEVzXjH6eo7AXqMHn4QxUe67Q6aqTHVZFwwtKnZSc",
  "key7": "3rtUU5qEHkxvytP1CxsQfkt2SM27guSp1TJMDvscCZ3gi8b2p7wB7njf93XD2JcdSfvgJm9kNtXBfPQSMwWzaxWi",
  "key8": "4549NcLkgb9tNRDCNd45v4aa1348ubJEJpdqEcdwummqJMqpkEztaDzymUJ5mqXk9nh4fQW9Agjvgri8kKayAFGE",
  "key9": "5eQm3n2ftAyczZ9F8x4HSZs6YPrDmwNLoNfocAkgQ8hj3FSg6uGLcuHFG4haMN15DvtBrS1qVNZZWSjTXwV7ttgA",
  "key10": "619jc33b5Mpp6s4ta4GK3HFmpsskmeEYjfCtPe4RNxng5sERW7Wugv75mLriPpGLg6uvXMV55NUX3Qvk586sTD4C",
  "key11": "5bPqNxX4tnnNuFyrAotsUrne4RdZhHs6Qv4QaK3kVMKEVL2MPAGudDQ59WrPMcMaJwuz1kNqmnUKjuEk2xi7bzX7",
  "key12": "bVv6ipw4QzANmjTx9BxCQP4RQrKZPKGUBQtFK98nhGCxr4GYEgH1iaQA2EkcpHm4Gtcf1ic9DzLA5bZ7XT5mQt4",
  "key13": "sS8Yg8wqgdvf87KsYLe5ychumBsuH2jB6wQTQgE7ft1wsPwua1uELXUc7S8W9VsTCTdg51VToEBoeopiXHhtvEh",
  "key14": "59WJJtrw9jjjtfBBntVP9Pk56mesjqdLQzP6xX6T87p6gJ3MZgfbPgm8BbVWeMZUzNCxS8feCvpQbCsi4aWAUtp4",
  "key15": "4uj3SpFJkVg1KuSPDDFLAc2jhjSUMZzMKw9XRr9kqatAreRFHn5usCntWnPW5yiuLjDRqFydMKvEE1S3o7phYRzv",
  "key16": "56Q5UTTMB5Pe2uUoNG6EL7Yn2cGbWMMCcwYR7tneZquqw4p8UnchUW4cgcobsxXwfNsFBjuLXx4KMh3PKENFF6Su",
  "key17": "5aVvj96Z6Fj3bKYFAGUG8hYrrgH8Ln3jY5pbJrbAyPfQcK6bU5Pyd8UyJHnCYQZB679HwfMa2vSrNtCrPT9AmS6u",
  "key18": "YLXA52rsLWeUeuwg6YFnJoTbBVbnD1VDuSKtkiu9DCtemuYgkA5Ud69FJGJvQJa6iCFnKW2rMUfWMhTSWWyRDtM",
  "key19": "4x1WqrfdACX4aAXq1UXNpKgeSMosHDCzqndnnp1ja4DgqDpuurEJKYVefApc7DL5s2JWBXaUdJyg22TkSeaehk8a",
  "key20": "34qzan39ANqc6ES37KDg5bV5WhmFG9FNmS7mUtzbZsbzbad5RT2Lg2MhVf1vHvhqMjjvziybwbtSLa8owmtR9N3k",
  "key21": "5x6fzGskiW2W3smboYSZqTV7oFsoJbAgNzBT7t61zrQDXcWtqXmtjUGbNZoPRF5dW13EvxUkFYFMNiykstjd88Ji",
  "key22": "4ZGLoNGLTWBU5bKNxW18nZF1migziaeoQMxBLzTAMhcTrfdfRyTBkhjEPbt7zuyFfAzvDzGYgvHh2sfg5VPLWTgo",
  "key23": "ZTTjWyPhxVjioQEfrax3kqYCSS3QVSB4cjZLHpL66aPbDTYCuSrgu5q8MptvHZq8tq8UKE6qLpuQJy1dNEXZhaR",
  "key24": "3bNNMgDSXqPyiC7oT7SQWEKo3MH5tGqkvMuBxvkKqCyCcXVXk1dEVQmLC3338f24jGMHGRLqN19fHBwvTkNm8Az1",
  "key25": "5hvD4EB9Wg8eGfPQgrTZPp3RjuAiVkzmpBqW3NRxU378cYpaS4tH1Vts78bfWXyatejNYKrnVz3kgpGHLnmvTyL",
  "key26": "4REdhd21TcR7DzV3AYTw1FhffpzDWrvuY2cFEhG2ByqBiUoogHXjRAcoxJLmU2CuvZFbeyVMDkrf5a9jpfSRDzxs",
  "key27": "5SZfH2qzjCspb3vFHJz3U3oWJVZtFw6i1xnwcjYyJwWUMfk8YRXHZozfjg4V4kSGURXM3YzNneeD4s4gLFzgsGRH",
  "key28": "1nbNNqbYSQGXu1jzxPcPmWsEz4LSFN9PFfyPiXH8m83Q2ZerFsEkitTeLDz3uNPt6fEChjZyZvX8ToWeQLMK73d",
  "key29": "3iBmhMwADjphLLxird8DqUCRRuCzEufY2ecLkkHqAas3jvfuLqSfkvrjyK3xuwDkc1jR9NNp7dxhKwdnnAgBujjB",
  "key30": "4WtnhMaaM5PttR298pBErHe73ZJ1tsAnEbta1cjKeXfUqSpviqXvNQAPvmF1Ld93rU3zDboKVwz4APhgrzSwPFV4",
  "key31": "2U8hvyEaMuM7d6Z5tbZ1DEdeEK1PMT4uaEQHQxeQe644uCJe4KQD2xYMCmBks56hskxR7V7JJyCSrNCQjqTiUNGB",
  "key32": "4CvGDYgj1EdnghMSSpBc5JEcbc4yg7eTL6r6c2UfX3hKaCTXmmcDP1ZWAdnAJM5nzyk5pXFWmP1P7tkD9tJyCi3Q",
  "key33": "pS2NidbkQkrCqpB9CRjdwgWk5bu7Nkg1ox11RdC96UW3cBQv5BQG8W4afQhdCLmWQgSjzKDBK5bKf2ZLxrG199n"
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
