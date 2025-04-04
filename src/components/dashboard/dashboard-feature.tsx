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
    "38zUXmfUPLNYt4xJbAanMU12DrN62GRAFPBqqhkRRD1FC4CXjMNYbBowfK7SisGqASWB6L8kWJ8A3eTsTmECoMTR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43diqyv2F3qsDUtma1zn4sz3ft89cqnzfHpSypQQGTJhKAoKZf73S3qjzfNGHv5S6ih9n5fmiQ5od9thVg4vSX99",
  "key1": "5to5oYtJKw6N6diUA1YGxTftf1hDR4sFXzMALqmo5Cdz9PrBkXrxcYrTKqH5nLDpYT4zwrDzWnNgRmPUvHspu8wi",
  "key2": "5mi7TCYmy4x8PxzRB89LrtB8VfQPmSPropPmmo2Azza9BFUUs9rKXG8zib54XZHH5JDCYKi318jnJXWxqCdDSiyn",
  "key3": "67sAPBSgSD6ie6cYvqoUFSyrGBkHu4bfizRDDSYzWtAyVVTAtz3gSs2y8vDPZzsURKShmRiHeRYsDfptUYD8BGY",
  "key4": "2TLYk513vqD7vQKRWZ4gihoFKW98jXUmfPPbi93Avh1NCK2kNgFr5DvnHEMiqm9u1aqf15xsWgePjLdEyJaG435R",
  "key5": "2U6YpJkavhJniE2zLev862VCVxWKVe8AEapEYomi4raqtFZvUzeUhN7q3yHQa2F4LqKr1uyV6Xkix5roBJxxKFvG",
  "key6": "2RZYsznYtTAEiaQ6Ls84faEWzHisC7KbNkEazPhExJhuL874VkQRXCLzfi9cX69wS4wu5X7PunWm2svpiZMiRBG8",
  "key7": "5Nhz4EdDiiYNdYB62GDAHBMLaNSSQ59WQrxNinQzF3f8cgMRpcaiPdVzszvazYGhkBNs7maqkAc4avGoG6AocvtJ",
  "key8": "2SiBfcJarECwX6uaMMrtJPb8cTRdZyV1XPmozAD9ryFo8ND1f1WzCrtU4GuqyFJMEuuURgAvEigTZYTBbMeT5TV2",
  "key9": "3Mfq5U6WQAF9DuX5x1D2FLSJAZGxY4xAEheBHEKa8KN5iZpYBX7hVKx4eGCPe27uXwjSkYVuMUQLFhft83ucgkko",
  "key10": "4XpPLpYLS4nPK9j2oJ46a6h1yo1cVhHJCkTjvzsJ9XxnfXeCBKtgvTVmzFEQSWAt3mtgop5VXsXE5bZdsburyAjX",
  "key11": "3F1A2QdCuLAhVrVdW3bk8vnBWuMAq13tqVXyb8MZsfkvS9hViXt4AgxFhikDxoEW7QV7zws4fbTNtSmReadfw3qC",
  "key12": "3P3gmRFXCCQxRTfDBN17MpTdA2dBj4Mnidt2fF3hMEgoXRTB5oY5KBRTPRy5Y96rtQMDUNRRojqertDHH4E16fVY",
  "key13": "5QAuaJf3LUDhUEPs3QzHpoDBm7iHkv8Y3FRx8xpi183peubrgL6FP68WgJdZf8s63nydkBbq4JxAKNPPVL5MJpvH",
  "key14": "NFL7X4sX77RdctmojkckZrrSt6FHg9zFivb3zDEVwvJz6QZ5oBf1u9GxMYK6EwpPvicWQm7eQUDw7Tc72QMtTE2",
  "key15": "3aXuD97cUkWhBnW1YHn31GL2smaV3Kn2LasWW2igYe3spzqtnLbMgad2AgLdoZMMonRCHBkzacpve1QxxhLBNKAq",
  "key16": "3XP3iKBShc6rSMmxgxohsFMzZfTvhuhafUvAP6b9Qy71H4Xzq4wSstV8UFgdQ1Xps2aAx26hLSYj8hL8CbKuB2Jd",
  "key17": "5xjii9tiqHKsx6Xvo99kbWANmtDzV8RNNFtsX186cJ5gQhUSjQZHsHzwDy6QykLfsoZgNXdosWraTgktrbyQbfYe",
  "key18": "BAaDP4393DwxgEeeJg59mgCnvqkfMqY3ra859XUD3xkUixqVS3BrSF515M5b5rCpYzB44rtk3Pxeb3hwUZuQVn9",
  "key19": "5GLgLdyeDZwXLWrxUft64YtVEGJwyS8Lc6JZREuP7TCVMzoKBS1qpwLCoNuCR3bHKniVnPxSNew8gBGD4L2FmmJs",
  "key20": "4vomq3ekfxQ4J3xd1mPYvAQbJUiZuyASinUN4x576BPxKYiCihJtnYPQxAkFy6xsRPYsNArwiy96ewKaokiyLqnN",
  "key21": "4osq8w28gf8tmQegjnAX5iZADbq1Rp19VGFw8A1tBvKuFign8319rex7zBcHSgvzQ7cfZv6nfsTUNUoxGQUXkm6g",
  "key22": "uKNsURKfLycPUtEWG2nmBMcprXQWRFygimiq2qdtDqpNaeUA4ditcuZnmFQpoKii21RjYJrUK88qELz59QPxemi",
  "key23": "HbDSAhScDZQHKGjJXwAs5NKW59VGYfRBuv1nXHGePAjhVAj9kntL3VyQPKoGxxpZHC1DKofxRZqsS4nArKgL4hU",
  "key24": "5ip2aAdbsszQtxDfEgNgjPzbhezm4oi38SAYq5GjMM8cwaeEhu91erz3fncZTNNYetexAZgGabxpsvaC8Nqwo4fe"
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
