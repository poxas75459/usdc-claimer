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
    "3767jh5sm3E1wfVK3THMrVWrnhsZvewTQAfZx91aCH3Uf7Bzkc1esobRweYQboYcqtbgENVD2nf65vCazsnRarxK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wEMBgwuq5bcQpApX6xAo5zjrA2pg5btZKXatz6rugQnzJKT7eEqc3JDF9FcKF1xB6qEhFX9iWt8FB8C3WJckxMz",
  "key1": "5NcD9ygq8bQaZWpF9yDTUQ6sYQLmBNkjsXPz4YhCrXAea7fvpiH6grfeB7yFy2H1U75UsBXvaDHTZywkQWPrzy3i",
  "key2": "5165ZaWBFkX91EzXwNLiSkp8Reeb4yRk8uZ4LtbCQDM84Zbd7nm9GGCecVd2DfxS7iRxJmqu8c9mTUDUJfchLmHA",
  "key3": "3LWrg37bSLzCTwBQpJUq1wrVgjZgAqbsTY9H1z5URbPNHMhTd77LZcP6RXNs2Y89xHb3jQvCBiZQhkWaC7z7XrpT",
  "key4": "5jdAxwqvQt8qVsvB1421MqpxptWtSjxX53ZwiXLpk9VbF7dRbZy5HAAJDTEYjG3H3JasoqRYikHS6Tsv8CpsB8FS",
  "key5": "5JJphVaviBPPRsEGwZY2CkojorgD8s9U23Bp6v22FGfLdnWeyXkBY45nVmg6twH4Ecw6rbU6hJTnzyzVu5etcbWu",
  "key6": "26PQbvYCCnBbp1vagKWqAvecWVyU4gMoiU2AmHB8hBq7cDcXmAJ4qf5D8zio7xeuGWB1TdqL3M9Y6utHYaKmjVth",
  "key7": "4zuevzL7seVgMGMNKUcCYybnyxVWjJNXv4A16mJCCpC9SdkXmQeTqed89YXmmeM2pZ7Y9npq8NQyBBwC53kHD8KB",
  "key8": "41QpXmaPycudqaMhUigogYTzo4oWQFJjzZb3vPF4FtSDv1o8RF7TDB5Q5dywanqA8a3TzkXDn2Vp5aSZrYDPhrhx",
  "key9": "7C1ZdKuDmv5jq1qfj4JBz622N21tR94rTaRjExAkv34JyewigPvzDSgj2xJbqAtzCcSk4vyYexw8NQS829eQf2n",
  "key10": "4HDLS1DYPGk9dgS9fHevhY5iPSP8mHwWUngEHqKvHHCZq7EPksc2kBfUETVyt5ujfmYL8gYY9cjSAThERxveZQMr",
  "key11": "4XEDHQ1gpytuhhvjUrkhjiJcy1LM1ZxLbXHLVyWFceknApYZNSThgCajckePSptjLK4uETWfPES6m5DqHaRGpaH",
  "key12": "5Zv4WK2gZxaHU5zjaFiAYjrvKW9iCXJ45worTcczoA4PiHnojHZCN81G8Em5nSdvaZH5sRAE8CeEUioEo36jKuzj",
  "key13": "4RP1js3bPgu3qsqBkkbY8jrGtsKSiPZd5c2Y64TguDbuohbougkwmVfJPe4E1tz7H7koKr8Vj2BgsYup5qjCP3W6",
  "key14": "5x2gCEctmUdswYQp3Z8SgH9NYUTUPKWrx5kzyPp1Zo38Dx2fn7oBExjYMoREiKBRGtg8PhhP94fNykGJpJsR7DDr",
  "key15": "gsxx1x2GG6LpRGxHHM8z8MSDhkZuG9uEubeaGRXwHxeu552zWntbj7AQABrYuZWJFPg21MTiocKHz5NdFBHWrif",
  "key16": "2miCZzFZCRiTTwG1KzHuegf8uJADnRKozYVAkJjdLLAp8AXGy9QY1efNn6CrESk1wqsRNx9ezCqgq1nDFz8knZXP",
  "key17": "2qCxeHr331CPmQehpThxUiRfzwDb1VZtM5XeUHGct5qVUorsn5vLSF6WJC5nq3yeL5jLvXz31eQcUgP3HvTq1qCH",
  "key18": "3mHSp3HTem9Z5MyP65W8Zt9Py5JRaYvLjuMacurKxGk8NyE4LpC6pmHZePAXu93KY12Cm3RyKh9naHMgeQjSKYze",
  "key19": "54TYeW7VNJuZUEicWQZgD15xJNE4W1gNC7Y6HyNtcakHyk7i3aSM2pkvAAqa6LeCuUzH3aegj5fChH6KB32GnS5",
  "key20": "2469hsnKUWaxAbpt3FbXs5m4JNKuDx6ywpYZ9JtEVEhHyT7FPSKiUttJVzNDt4XydXJEm1AyCtMrQikWNaWLx3kb",
  "key21": "4FoCnAbQG8VuFJNbEo9nuJ9QSXhv5n9y5P61TQNEGWXAjPcaw1JuCGxMY7CYDRfHTwrbHiWNYUk4xSf3VDWnLdDB",
  "key22": "4dv1uhjwTnYzT82YeSx4B43VnSQ2owy7RJ7HXmtLkVZWegi8afkGV2N4gvkPbKDmP9HBHZCpUaMQLsX2p8VGbVJR",
  "key23": "RF31oJL9sXLfFEgx39eNRtAB5TqgfYnR8zCncDLKC6FQJW8wh8emwdNkFwLjyHxR9jpe5bnDQhprsk9wncZfMa2",
  "key24": "5Br3wrRkj1qHC9uj5VPfv6q2HSiuxVRWhYa2jBeoAcBdQPEahSC2tRV36Q2HmJ2ECedDZX6JAN6xcp16H2fSA5WQ",
  "key25": "53NcLAiRE735j9qRQ3FMCfQdSP6c6AnRKB5Ys51YN1SKfgh3Lu5iYcx82ESVTtiSzZw3QSN4nCC6hhDCsBiGTkdh"
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
