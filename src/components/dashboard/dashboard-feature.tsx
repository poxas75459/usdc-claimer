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
    "1mZYBVKFrhfihBNd2AkCy13DPkw7Z8VYgDQuJk7Bur8XLuuBQHdyaAn8XhM3Q3RBky4SGZmzgHJPSuBURUhv7gK"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "5ZHbkqG7avoCESvxsjG4hPSDZWRwL74qmG5KkzRUJh68rQmnePVXKwviXiCrCFVWELHQoCu99KqSDQY6QsVVWDkz",
  "decoyKey1": "4UA2oghC3fCZzjCe5qn8HtFbPjGgVrvMaE5ixQfkrpJjn6j6gsn8p7jtfLmcH6CdQbKLqmw3q2PGxi5Cp2jLcp55",
  "decoyKey2": "4YsCqGk6eACM11aTiKfqHxsSZ3zNqfWYzVAQyc93k3NGCTmW3CWiV8Xkd3wjDdtRJfQodotid4DEULqwNSsTDnuM",
  "decoyKey3": "45DuJciPuLaJFfnyEZ72YF5ReNFwQMzn9VfaLzxTz4QFTf5Zv1i7a878trBuBuZ3zQdCucKqhw1oXTanv5gZ8y8D",
  "decoyKey4": "4o62t2Y88hixQcWgXomvHfpkxz1bfYv8ftdCHMCm5MnQNzfXoFzRCNcGH6AXxARKPEuTUonCu3eJG3jcWGq1D9Qe",
  "decoyKey5": "hSWC49HAdGATpe9D2E12KcwJ7SpFBu8XbTWuqYC4AeQzgQBohmXxfHeiWqBRVRvxENze5Jk85bfQJ2tftyjnYaK",
  "decoyKey6": "3TE5hrQ1NcKUkSgGEbuMedfdrHJmefUkMJLsFpRXKaJhyAUsQJSDAS32knTbVrgnSAALk9FhtyNuSvEprrJCfZ8v",
  "decoyKey7": "cyEKJjT7Hhsbq59RcD2xixDfz8tYsoeQfcAYeYpYrdv9RURcB6sSgNUGsMrkE3uYdcQvMpJZDpBnqsK2MdKVUDQ",
  "decoyKey8": "4UxrfBGac83T2PRBEScRyAEpKPHxHSNPJbgzsLfu84fxHMsqxrrNLd2C44QvDhXZNquCcp58ixZr329dw7DNKAkv",
  "decoyKey9": "RNjSFJwoL2SqravBgRjfPQobfmkMTovUUjK5mBjLvVnHjbEr9yJcT8grFocC4u7aqeLznaqzeARWjmcJrk8Vkc3",
  "decoyKey10": "5Pp9cMtSaMzCixKGeqNrMqk84YUASwdB89E9aS6Hud6EumhZ6HwEGN5DK7W75QcJ4afSGX8zATPhvzio9kLcKTZf",
  "decoyKey11": "4iat23o9eqho2eB74XPAbCkQxWavYYJurwPgac37CtyjKnbSUmTkJhJKXRoUwFwxLGDYKb3wspeHKrBKQK6hQw44",
  "decoyKey12": "4nqvMTLXwXhMnXZZhWjkhoou9iv6vHLbK3L2Bc8cknAKpA7JmGsSrRGjZLXksCN7BHonyvpYJEzQoJTZ7fyar7ZV",
  "decoyKey13": "4FEp9tPEnmSnP2vL3SnJxmnnYiMHQPAsR9qpVxbG96aC9zVW4eM2S5fUj8JFp8LunGsgd4D6fvmMFWb54aEx6i9S",
  "decoyKey14": "3MmLNArihy2zyyojpXMSQXmq2Xm2aXjXt4SFjyEPGebWFriZkq2mEfwaaPAnogB5qxoVtWQLY7q6G21WDn77gNsF",
  "decoyKey15": "56AQhmnv8rK6x5PEanuEnv8JQgzutUyEWbLNc6vwvUHeDJHY62UianG4NkBQsNbeaeHeusfV7CAxPWaP25WuDr78",
  "decoyKey16": "HGjSWsfaAnx9NgTSruztJLnjgc8wjN6mGJkr5vfBA8tzkmE9oo6FfSWV5AeD6nV7DoRbrZrjfGuFV7swfxk65b9",
  "decoyKey17": "5rg6S7XgyZhxNJj3Ufqr76tHKk7UNKYzxFXtny3ZEN22God5EkLTsiqAPaAHfEej5cAL15GE9jm9QTFrp23ifGkX",
  "decoyKey18": "3pMoGKWbzF2e1D8a59AeXNCM8qUrLgqcv8R16MHDaNataJJFEriyDGY94uUC4tg62TYSbm8CYKW1yT4QGtBYyPkv",
  "decoyKey19": "Wzym8nTKRhSJX6oMoNqPZfZPqE7yhNMi8hNzNrFncQ2xCFN7bVTijFGMLa38XgdLxGbgtK6hTx9Uk36H6AmcEfF",
  "decoyKey20": "ckHZNMG8hzDTk3xRh1w2aVQCmMHsSVbpTmWbvgwxsiyr4zLFnqatxrLgAKa1QZR6X1i23yDvdqJE3Y2KDCpDvXS",
  "decoyKey21": "3Tm3asBYBPiNkfCWL5ACGLeYTz2pUWtVudzS41uTQLrqGjs16ZFkC7NyFMdegG9e9zKDwK2nZXyEo8EAo8Rv98Zv",
  "decoyKey22": "5CLZUsRLNuepgWiW91dso8Fb71236r3LQYW5SzN9fZsmPDVGHS2vzpiGnqdN3r3wgb9YdXLJ7wzv5nA5coEjVTa5",
  "decoyKey23": "2xcSVSznraZg59vRS8dNAQV8y1bmDq45wDNJFwfcPor3em1X8EHF4DJUt2qtQJtwppnXde5JMEGzT5c4MZYZZ5t2",
  "decoyKey24": "5Yvf5V2xGWacf2AwnpceVNW9rif9CqWfhHy1fK4putkGvREsRMWiVmLpH3W9nnoEFJpapchNd2Vmx2CXjKZcXiYF"
};
// DECOY_KEYS_END
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