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
    "5CSZiL1DuCmPQo99idTFwEj1vz1fYpg7WXqujigaiwtTCszLkt6J2De1RbxV1j582eM9yCyZuR1ByQDf3gcyrC47"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QpqTNyu2EtfzupV7T84TLW9jhSALjpQduhoqX6BQ8nsCzZwfBnkRjGKmvecxDkLARLqr4BFjxsdJGUkSNpFb6qK",
  "key1": "3qAKqWaDb2vAWYAe98ibzGt7MAzHFuGLdk8srnToSAAf24FPuZqVZXmTGsBbTMSCScneAVghWH7VCSnUqhQnQQU5",
  "key2": "3vM92soW6kwibNLf9Rz1QsBSCakfZ4ARc8GdFefhTw6LxjyuaZWGkTGqV64Z125NdjxK8Nf8q9M1WBjnSS4wBPnB",
  "key3": "4WhAVpmAN1E6LXge1a4whqNgYfhUkw3Br3bPWHvtPZ6CY4RQgXmExnqNFYTS1BPe5Km2JDCsC7o8LGGkmkpbBb49",
  "key4": "bxvsMnpFk7oifceJzZGFLgpuExLDYgJ5NCqZAbdJ95sauu6CdmXENVmSk9cD3G8BwKNoGDZ6ochVwzF7oSBcP6P",
  "key5": "4p7o38JGZ9mfrWC39DQqjfzUZMhUbQigoiMo1xEWBxLSXSWJ7YaEZkbWs6wS8tpg7uv6gpaVgDG7XBGTYEfpFooN",
  "key6": "6fEPNMkWppYUxVzuy2m4fFoQatoqaqNmJChGE7XzRQD8GxoafyYRrtWaWoPbGNPHYNGuUWSUuM2xH6MFRwTdr3R",
  "key7": "43C11hoGZ4dsxpLVa5V7ffnYbBEDU6nMqmzviHvHK31g83jK3WfGSNdmNAv9WCAhkabuVjAhwoXbEWxStzNSXYca",
  "key8": "zq2BAiTLCVHrsWkveJtpb44btK8WRGq8QsGRP8cPfnDdLRYHA3XWbwAMG1enbtsAAo2UDX7ggbAFR23m1N7zJC8",
  "key9": "5G4Rk3m9cUqKHLx74UtpC549wzM7HtCo8GWTRVhEEx6b4xys651XBKtvGC7NoEVmJmd36Rq4yQaB6jFA5fwgwRHg",
  "key10": "4K35syeT2vA7h5AfNWTxfXU2McahHPaxyGgsn8KckGQVA1mdkYPHWreB6esaS8Wdfj7eFNCmZSnwpoZo8Wj1vVis",
  "key11": "Hx6Xie5MABDCsGkSAMHaeFQdD18QaYVpeCcgLmzBTPj45wSp8m1zfGXjfpEqyWVVXMqPHRAHnro319p7qPRVo37",
  "key12": "5RwAM8rP3VQ8cuQkJE7D4FbvecrPmqbEAbjkW1D7GhEi9zTETh1wUwA6mKwpr7vZmU85s22xHM7Poe7hBCbKjX9h",
  "key13": "5h1HS12XoNqwZobsbjMBYvZK5B3VWxUguXM7RYJDkc48i2kjxsErJwXCFnSSLb8AtqHvdkk1BqK2aUXjxhHtgs4L",
  "key14": "4KCRAx4oGrq6CCsjswNqdiu4uYR2SBFGbFhoyvAt8DzhDBdr4Vfqz4SjB3xSiDjqHzU7DPGNcLUxrd4CtYcBroGt",
  "key15": "2ucoVQp3duZvGfo3XboEwaUkBNcPJRTrCVZRTA6AbDkcJ7dK9f7TH99RYcGKFKcvBcSRxfgEhQqXHUUV2yz71RNN",
  "key16": "5YCjNv4tnDMftoTak4Acqb98P2B4frpLwmXvw35FzfFQd9uVKqyfVjwKuXMaRB46SiAibVGESPwXcX8ZhYbXD7Gc",
  "key17": "3exEF9H5Ab2oQ6YEEfaprqpA9oLJrAwtSThQdkbkwfzcWYJEUtXjFNSr3XQh3GcSyMcMVWoaX35qgFDJmEXfag5Y",
  "key18": "5Q5aPJ6XabSbXUvmD81o4fmSbDN6fnQWgGJSwd6UVdYEB2ZfMmLaJPWbEdSdm2VojC9SUNea5hHQDwej3sxVakwY",
  "key19": "613p8kLuYqfXLjPnEqoe7pZUAD784zSMLMe5bUcWqRdQDf7QEASE5oqyDP1bPRfNmVF2zf4omqwHegFrHK7oMS1a",
  "key20": "39Db45nbANoaMg6wgqh36JFvRdTtAmy6XN6aFHRo583QNhHvcr1rFcCwzdiUw3yVfmd86prQd5JYEfKU7fd6UPyr",
  "key21": "2naTTmCCmEuSn7WFBnuJSv8rUSNZQxengEx3irxoGW2RKuAeAVpGM7eB7rq87Li4etn1CLSwzc5b5B2nZavSY3k4",
  "key22": "4DqK7hmbxYF8nVkGtFjK3CtXU4F7b7P4rWbjfp5zv3NLKrMqY3sQaPDDkdz6PPszqTsyBpUgCSasyjM3ERYaiwPh",
  "key23": "488doxkZzmk3qcw2rbc9Btq64J56SktiihFLE8Ttv9XVWh2BA1SgFHJ8NLeYWRk7Ce2Cit18uNE1N4tCmFuVMTfM",
  "key24": "ZbxGVguGav86h9C1ucJK5Xw7Q1HE9Hiy6KeJ1xzfKmTmmPeeSgctStqPqhmdXPenvZ3LWZFq4eYyS9opPwsugSu",
  "key25": "2ioPry4o7qDzvoiKkMyzXJSGzc5636ytG7KF9xgDbQmoriM1faNPcGAre74HCbGGpVmGrdCHNubSBPUa8LcTMrRN",
  "key26": "5uovqcPUpWeUKHwd8MK3yPbHT6GaMYy5yBjGe5SwMWagDhEpug1xET8cyp4k3xRuJ4NzHtTZhH4dSBzhWMe3Cgnp",
  "key27": "4Btr7bK5FZeDyr3x7mGwxpZjwSH6nTpqtJaEqQEaobGL7pmpe2FoDQjKspquArsB2X6LyTkEQb4XYidFQYCAuZqx",
  "key28": "2XsZ1dvKjAoUpaHwarV9X5tpN9nB8ACycZjAF77Ej4TkWKanwvNpQqsZLoYyPBgfjaE8kvFZajS2XUVk6aUhmtfo",
  "key29": "5CrECu9yELKueihdzyBBwMSizm6PshDQivh7STdXaDXnnjCuKiAG5NDAitxccD6eVzm9yAzuTG6uw6ukmHpPhtbP"
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
