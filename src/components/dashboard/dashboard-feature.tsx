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
    "dLyzaR5rXsQhhQs59Nz3Sh2R3h4m6pTZx7NwBnvD4USgxSSXW1JMU4SLP9CV7gmriyAewHSdNYGqH16G2U67wBd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GRS5j8wydYP1UQXz11ozeJMDUG5VXbyuZcJzn6BSywY9nbA6ARdAFCgxXFSxMtjbaSHR5szvrzeiK3aVyoHETKz",
  "key1": "3tfwZnN8mBiR9vHzQSCTEdeBQyHbKtYqYXTwyL6W9SPf2VM458K8frFr4r4R541tXfNiryXcX7Ca6zYxtXynYsQJ",
  "key2": "2mVb5AD8L75hLzVKsXkR3pHpZFvP5tneo7CbfaQbFfkxkK1FAxj4UN55ybuSke8h2tR12vuoYUhdpZAuYSEwr6Mq",
  "key3": "2JUCo6i1qGgSMFJw5bKhXFWCmMabcWaUWtQ3f62koku1wxxBDq19uiH48SQzT9PGfbN8hCR59atGraA621r5yRiB",
  "key4": "3Gc1HhXuwpTMGFbFYQeYxnqnqVuptzQp4dCw5k2T3M7YZXWhbgsj4vUfcxvJwsKowHGfKHuUF19stKSEdzgejhjK",
  "key5": "5JipPqLQGWXJnDXfNFLECqcyowmAihQ5KbEkxLxMfDep8ng6ajU4iFiPKxsT7K5HvoZddPhgRpjac4eXSM9a4hW4",
  "key6": "2nmk59QCJzgoCDTikVuuVZNR9QPFwDMuzRx7bGWfN4VZYKDpbWn5oCtD9kuTJnQJN6D5KG9A33KCoA17CmgTW24B",
  "key7": "5WknZHTckgsy2oy8uiCNfe9HkKVBEWanx3ZQNFwUuYxFQ7HfLLSQiTEvMgWUh39wFV15eyo6jgzKvST1cjWrAHHu",
  "key8": "uVGppff5JqJAokoWJkWxRekUmkxbZHCNXmPDUuGcQqKdSFLZo9gcudRkG5GY6z15F82jDiZZKGeJGdBLpxSyBPT",
  "key9": "5nmQxu2fuVJkJTjoU8TE6sBdihFm7EtqNzrPQce8mbmnaK6PtefaRRTVNPYVZWnhUqEA6kWnBzHLwkVdfoDouuwV",
  "key10": "ktejP3wiUGgQNmYhzPWg85986ozUEJQ54wvvkzYZA4FmgL8sE17inZk7SAAYdKAjNNxJW5opVFLXWqupYKEKnyz",
  "key11": "4gEW5SeDeEcxkjdG7VUGaBLJLdKJcefuYSsPc977kgSNhVTuQLdKVrPUnjfJVK8FMKgeE1H3DjRu4L6ph76tdgx1",
  "key12": "5nqPsJBbroHgRFAMEosDoMa4x889ZVSMryhxgqERQKwjFJ5QG4YHvgKABuYRvBMfV2y3UhMkUgCTQpKcnVY5Aqo6",
  "key13": "4NRB4UMBnM6Dbm2rnUtSEKMrWdiN2VjqBXuhJ2T2TSBVttSEq6dHQgZiLgMz5gVeCMs5hFdxAZ3ctKjrmPMexs7E",
  "key14": "2ZXNhKKgcr5ZtXpctxd6LqAeTydNxTHv2HEKxP9Y51upiPmJo1i5bkDQGpgGEdaiBkecb55PUkXCWFxHbGTstpRv",
  "key15": "KW3ztfFFAwoFKgdMghrKxB26oAhJqBBEPd11SSw8QRi1Dr1GngytKMM8BeFKELeozAUFaWB6GcgVbEjz1tJXsPS",
  "key16": "2BF57k8pxvFjUp19GdsNvdj8A38uEy7hQRu7WzXsS96C9gxwKgTk3ZF7SS4PNuEvQe2E2TJXrWd6GERVrgeiEh6p",
  "key17": "FeweSXMRezGeEcN1rktLfHxczo4PS32wTjkYHxysm1eCKKV3sfi6X9zrgXMVaYybhEdZyvzyJndDSmG4Sz5RBTA",
  "key18": "3gLAVnjXeeYfW1C7dtAXFyrdnniTYVRW3fkUJBMETTW7e8TJH5ddCn5Qmd4uaSiBn6gr35WYDDtAqfpGCSfqdGfr",
  "key19": "5wtHikBxhPy78kT74FEFdbR8taE4T2WiJDFNgxpCPFxwApdHqex291oyZRVBevrN3BujVCk5YzX64xWmk6KiyRhy",
  "key20": "52WJWManbYVHKSK9VETAuCt6CknvN62meERnsbgnNZKTTuqS1sngE3iviz1ZF9JL2MHdoCF1zDbfmSb25F1jHL6u",
  "key21": "2JLkbGaU23dMQcEzGrLeUad9FrpG5P48EkQhT6SEbgyoKwYoWBEFV8Mg5iYgPaF71KuUZJPa6pW2Fzb2aNHp3f2J",
  "key22": "3wXhAUwCK354LYvrQxGbPDtZ2P5gbZ2ySdDM8ZfagbHhTasWyRiAPsqjBvKX5AKDwUf9n7oLuHtChTHaCTY1f4i6",
  "key23": "3PxjgdnEVMPzXBZpvCymPvpkZUjyH3joiSTzHUhVApBWU6WHjp3c7aeN8MJ9PWNp4b4HYrEHVv9BMcRkExbgbaNw",
  "key24": "2eVjeTez5FnbuLcczn5538MNv84chDZZnEwsoxxxkc9af1uw2zE14wcZWKQVvjZXmbWHVchE5fqTds58LLV4RXQW",
  "key25": "5vSQPQr1Vutjc4XRQ9PPfS6CsFi5JmogoHeWdZfcVUtToKxwpsnqSUX569BJrGsiXje7PiEULXXWGyAydVVLEUNX",
  "key26": "3Dzx6c78wrSMFcSTZPGfaM1nHbDbhn5T19V1sJ4eg6pbzKKvLQCi2duAx6AZbVuALS3111z45Csr33onYiQ4sQhz",
  "key27": "2PHZYMYydTceSjZZcVmeFWFi2bWh9h39DfgzAS1dxky5nrGixTEWADSc1gsXPupkmYxqDo7zo9joz5VVkXS3fY7m"
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
