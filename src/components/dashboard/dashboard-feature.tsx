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
    "4rE1VUtBAsqy75kw16iGYCK21AoP8PwHCZGG3ZEF5pEZ4zAnqxBaT3XAS7oVbJnMNWEybh2b9LMgZQ8S1DNTiStW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PxNjGRqjWRJ8WFL5r4grjUpC2fYnhJxd6Qjrxz7MVCUYGnrmCoVh9Ap1GvnPNLwugMK3p9evgjnpYzB6NCzPWbb",
  "key1": "iS4cemBxP3twy7FxvUXffAAx9qzZZDmKqYxTXTAM8S8JnLEkYP1YqovNMcRcZGjYy1EH3RMTFC99asGt8rb7uMi",
  "key2": "4jr8r2GynGAqhG9r61Qu1hRQpYs9nAtpuBpW7e8oYFcs783xspYNUppmdkxkyeafR1EtQ1ZZu5J2oJEAeXuwqwJP",
  "key3": "pStQVdd49RXyJogZYVSLxGKdMQAG6AxBidnBPaQFogCopKP8LTVy13mYJBMWiSttwWAWPCxurqyh4o8XK6pmEYh",
  "key4": "4RhBor1asqx7kpJ84wW1J9caaj4wp5sbsqePk1VeEYGBhK9UKHkuNSVL8crti4UVywi17yLeU9aFibrKYYHLHEQU",
  "key5": "5Pnhpcgj5XQxjpaKvfwT6JfXNB2ipwf9kbqa2UJs8hVaRnS5BcBxYujv7C4JM7YZxRb2k8JsnPNiRhKq38qkh85A",
  "key6": "59mb5MqrYh1pbwkxT15fA4awQRVBvKormW59y4btZcuamnYQ2iWJ4nbo1dnxpMQo1Q5WaoYPvUXqdfBbSKKWG472",
  "key7": "4e7W86e4Nk5VpJv2onMT2x1hZD6E7Ki4fvAebUETiTwGfFKGAmBQbFkG8L7AZ5qEnNjSM3F4HFcKanz1PTcSr4bT",
  "key8": "4wbNVut683tn6TqwhX3x1U1nhzhdPSqZEnjLwKcs3qEbU4B3Toy4RnNFdxkcb97BgMqRrSmQAJkAZf1hBGJiHzdR",
  "key9": "6WbVQCPE4gcMHZYhYQS2d2XogWXcdm5jSyndesDps637ondNG2xbG9QERCm4FxQxcPQaHY1pWJoVQd67DYMRa5i",
  "key10": "3dQ3erFJk1Cp1uTouPWz4cHJdUcnNTk7rn4r94vY6v3j9nGwKr1nKtFgZoLrvtYxcX8TAW7aUVxciMyqzVCQiXyQ",
  "key11": "3guaHPa6PCXLz18Qw96of9mypffy5Te1S4bnhQec1tiYWu1acKiDD7SrNEvCVgdBPv4J2mWic1St3TAmQNMWRkzn",
  "key12": "5c6iGdudmvPnocwLGJiSaCWuFwSNmvAakAgyU22c8YCky1oxzavYQaSHYAjQwYiHYvZpCDaL7LuMnrZYeFD85wRW",
  "key13": "37xeX3Bd2P9dVmkYxmJU5fjrhs9UVhxhf2uz56KZorMAFv8koAa3yxyq3Q1ZEFY3nCPn7xd2WFgKpmeGiQbCFgUS",
  "key14": "38WUZieSzKCv2Wk8Mn1YTgWrZttbRdqaVEMEcyspqwiLxzynvsqwnMfnermR4DfiEWR5qKPZmHs3wmrKXKM7g1Ui",
  "key15": "32DFF69CHvCGae74s5yMuXdVmqaxM8swbcRqbADBh4DuV4fwuyMPpRxFSme71ujjtujn9fPH9REKcNHhJrB42WhX",
  "key16": "3jmTGWTRBjG5wcK1rC3KWA8x6SKCns6SYgSDRsfDLfBiUidUyxv23YB8YFGbBE5KVrewsoJWDkzTuWBzBnqtJYaj",
  "key17": "55pm5Kcssny3tGfLTTJRKRJZ9jU65FJUr8GKwVjmLb3mcuVE2amVnMp8ig85buHZcbXjoLbNGgPpPW6iY1nUkaAs",
  "key18": "2DzcLiTG32r9ZdgmY9zXUp4vbPvqvBgUcvy3S86b7Xq8kTimkALh8fCXJM8HLsKxY2bxpuutYAUL3FatNwJQE3YH",
  "key19": "1v2djrEiwBUQx74tu48urN4izyWuKhVfZHMTwAW3h7B1wR1qtZDQ2g12mFqHa52coagoPS3E2Z7tQZ8TP6g9VtV",
  "key20": "5q2ABnzLUSkf9siE6iT9PsD4TRqbEMNuwSbGSGpoDipp3u7B6wY5eXQnH4BXswDfpHB8ffN4iwmVj2bh2tKgSdki",
  "key21": "3hpUvrK5VydicKgYMUKXCNHa9Qtz2Nhva1dTMYX1yUbj1mFPVSJVes8yjaD5rCwDwkUzXiQGiyi1FDFubgFbt9ox",
  "key22": "35TRzvHNVcnaxsorNj8nfGiNgnnHdqVM2kefKuEkjBgkgmNUoPMJuWAiX49CEjemhuLA9gV7ZZmaCKnGv38kGhdQ",
  "key23": "yv8Smq3muZVd1qH7hM57abqhnDEi19U3nQk13spC3AsmsuDNtYtE3hCqSJLuPnDV8XtsHsqwFpkZCy6Zzd4cZVS",
  "key24": "4sBncdtgVdia23J8ynmZRMnJyxVvTNqygD7QQJCTwu2GjDRXqZUZWoFJzpAnojdEtdonetw27JWBhrVf1pSUBfXf"
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
