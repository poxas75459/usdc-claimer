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
    "3VAYiNPFmwTpXBVB7aQoXB8hNhVuVQzATALsGGKyRm6tfcTvkaydnQcxHMa4LQUEG5zdoUMxf9SRoD6vJ7JHMzm3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66Q94oKYQWaYmgDBFnLk5o1CxdzSqoDU2EtES3YXco3UFcqTVphbMUrb9spfrvxyG5v6KTcwxponZerQCYX9Jumv",
  "key1": "51EbeWVk81GeheE1Rmmuh5zSyNncb89tR37NSWc4sESoPUdewcYTg922NWVBkNEByRGA1xohFwyZstAf4kjGBDap",
  "key2": "2WvhBExZy5o1GQohAqoUWCRtKRpySLi8D2jWnPzncUYqUYkDPFsLPSFpPRWy3YpqhY28z3XfkFKwf5FwxNfB435u",
  "key3": "phedZq26wUT82GNsAyKHjs2bsczXqYcrS7huLkKRmKjgWBKey6WfdKvM7FJMJQ58kgQhSgPZ9Z4bjfLinvk6Qvx",
  "key4": "2MKUuQeBQEmuXkmcDX33aexFVt5gqZzbyvvpLzmWa7VB1QskwQoNxsv4QYKPC7gFvbBwL8Ai12V6Fs3uhvAFx1gz",
  "key5": "2iQGuxziGNGSbiQ7PnUbmHREAvMcKY9smARKbPhgZGPnmEYTdxvedsYeeVRYewUmcw5fmXUAL2Bh4Co3ZyCpx4yN",
  "key6": "4WNgZcTQt5bYYkmbWzkR4FWeqUDJxQZQXRX1mbnZXQ4AwdB779NhQwqYhcmcDdbvTh7EhxvgTYvhRhFwsNabhV94",
  "key7": "WF3KdMjPtmZkADdE3FCHbFXz6AUNTiWK9u2ccwZkaQpE4N339dbhZd55TAnLs4QuruiesEo19keUgv1fZb58dZ7",
  "key8": "4UXHW8yJ9B2fkNitvGHe1g1q8hiu1ZVyvpiUPGvbTtNsUyjd8fardvz7Ci2eJFnJx7ZFkPjogzUxBUxCNRQ2g8Q9",
  "key9": "yyLAXHgUokEoVKNLssUnKKuVdoM8tHwS4FdRYcLu5DvfVBjPAMzujCXtjNNsZGYt69qJv9PCmH97RyMzCKLb9G8",
  "key10": "4zsGWW9JqCpJR6igXB5PKLxPyWr279VwXh38RLTeNXQvkXJyysfDz5jV6J5xDz5HEqpAPMwbDc4ZiujwpPuoZFJM",
  "key11": "CjX1Dtu5sJMhHvyLWWBem3amwowvbDLuH1GxZbWTDDVYqsR27GB6awoFLEcwf2XnUz3ru8DxSsUTj1JX78gGykr",
  "key12": "42Lkdbp3Gmrc68uD7QfdAFPs7b63EaPHxEfW3RMhX3HqwMF671rY39BYePFfWV8sVQbRmaSFMUwASCohDe1NbMMs",
  "key13": "PqEzSpEyqW2akq87233wcqWsqC2oYjoWxHsMKkEUcmZAZP4qKZLt3HzBRzm788teg9tR9iEnPkxjhfaBeWYnHs7",
  "key14": "3LTqM5ixCHewn927z6es8oU6MTfYMjAaxYLVfRX1sXiv5HkUXARdqTcDfurwTvHRfC7xMWF1Uv4CwgJ47AZLchpR",
  "key15": "3foSXfDaZF3St3h8Uk1WLvoxfpJPnPrJ57heQCupbEPTNeTWGLsq2oY82H1FEsCtNdoZPpPwcvT1bPa6nFTv2YqA",
  "key16": "2aPpcL7z8mbo65Cuy2oQ3fPor1nXakf96cg84ERdScaVNe5voseWzSCQEVtA5t3A9J327HyNgo2wLChmSEKgwHVD",
  "key17": "4fVjCwZhqTdRYUsnu3MTdQBNZZyHu1ifFUcuWxNRamHK3RgEVL5tBPXzutVPvigDSFevnuQEDcJ3zzgzXqpS6GB5",
  "key18": "554PC4cke6CPPWo4eCZffRoWjQy2733zjvGAt6zJHGNEkYmTxWgxjsQPVMyBBNnvwXfC97zMLWddx5NHUPLgPmyC",
  "key19": "oxiuyFHezAhy6M5jynqp5SDQ18qVcCkUKuNEMm1rpgKtptDUZidhTv43vtcvqnYBdmy8YrqvXQYHwsKydJMzNZa",
  "key20": "2MyfW6h92PGZJqGfcpiGyVxpx2i3VhKTm4FrY621MEQSvudnZYg9ok2qNRnLa24eMswzkzmyre1XQHBsbs61uo4Y",
  "key21": "2oLAPBvZuvgMHumLBkX7WpXjVoj7aZJDofHrafka5gwku643fFWso9CmDp4FkUJVKKPonjxYXLp8oxtPi7afNjdq",
  "key22": "WqVxZSXhJrWmvGu189ZbggWzNL3SgqUqGonp5LiB2tnhwxfUQK1oE9NcLm16MYkm25ipq4b8CSC9HZzTbkHMEpk",
  "key23": "4ghh2jrQkMxK952A8jPFT9eSh1DQcNb8qnrNeda3eaVD6m1EqaRVZvehoSmSx4WWWCLTwDBDnLvZNiiAW6AGfe5r",
  "key24": "TCkAPMLrLLkJbyAMLTobuBGou3YAMtYU93ur9Bcorpz63j1nuKKEj2wNWPDsaVQiJ538c4UdXqrsqzvJixojRrc",
  "key25": "4Mfoeg56p9nEqmqiYS3j343EhEMxTK2pSNqn5TJfLnX5cPPhA35bHzFH95Yw5tq2vmewprmuqoBZPiQB3MHUsTbz",
  "key26": "4BvGhfGjCJJTqzgnpwEQrvjmfxBcAv7bRhUUeZZNoKxcXYiosYZpU22o3Ee28iwqx4Zpx2UUqg42HurJR9EG65k6"
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
