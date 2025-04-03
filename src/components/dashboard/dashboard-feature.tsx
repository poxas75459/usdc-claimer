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
    "5CVTefsy7G7pprhQ7yJUx6is4NRV3CDvWPsEoaU5gp9FvBPau8nT1Yz5g6jjN6kityEiQmrv9TwkgCxkYi1oaV8f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ig6xevW29WJGuyF5jwrWQ7yzKatWPbykvyyXX28q6ZFLB7HcymowcBYhhpm2TWZJBxvz7tmA5Qs8R9FLzYNCNr2",
  "key1": "5ufuGjhbfRzN5d4GP1xsyMFzKij9VF7du4kj4qWkMu3gMDPbbVx6Hc3AFkEyfNMqeSWQBjbzM34RuUcziY45usk2",
  "key2": "24Fn7uNg37TtoGzP4bwS6tWDf4CaPQK58qqEnxWH1KboXByRgXynmhgSbtyWZqdnLsn36VqTxQzVkKr4qBUepXAe",
  "key3": "2cwCK9nohEJEefmdcKsLKEFdu1e7DWXYdayrrAuPPoh3MuudZ6iM4JrLcmbP1zm4SPuPCcRzbqq7sGs4inGtRjJ",
  "key4": "2hBM56ZiURuMvoQ9Xzkhb8h3ANyWN8y2fqsYdkoQi3uApnchp8DUwFi47rGVGNJzKGPgxTEjuEA2gaR9NfQLnK9t",
  "key5": "cDbA4kG9oEr52AqPeFhFnXVgjb2vGyA3YM5FvToJUv6nRLhGkTXzghxBF3Q9cEwgoQbmpXsHvW5mVGYGtv5x5TS",
  "key6": "ZMLgyJ8sMRBP7FWVzTnQoQwjPEsziLETbgrZJyHPex37N1QghXPJfARp17e6qUvHtXqfrKzH3Atb2Q6we6iUEfk",
  "key7": "3FB9sL6G2Qv2nC5FPS34UbrpD7itZqkzcZv8kAnDsz4oWfLvhXfRF4VLs6iXwGyRjcPckkdx1CMCGaGFhC8fGwuK",
  "key8": "5WWYsDQpEaKhtHHvuvZQbqy2Z2K7Fa9Jvq3ZSAaBQ2cuYJFZ7ywcicZUXRoHmEsdCEnbY4kTX4sJ79EVBGmnjyMv",
  "key9": "5MgTcniCMbJkiMe3nK4AbDGGVjGF1oLgvCMkMNSkaPq5xZyGpvtspokYsDFFbZGx6D9RXbLBJyXNaYTEMpudA4G7",
  "key10": "GonPYLUDzj8buhTzegyRtMWCP4E4MDMAXCXe7c5v7RA9ozymCJjZwPZL8EEUReG1nskt6FzJbTEgPqqr6M55u5m",
  "key11": "29PhrVQE4sm6ZZxbTVACwdBzFmmGAtDi7mGneSuKrmvttPHM4Sueng2PEz3mYstiqx3s2uqsqaDjsqq1sTzujosL",
  "key12": "3sEiEfyvUMRLG6d6CR9tozd48j4x4Gjx7j7R8sQaaiN8rHxsCVg9S1rSAXk2YJDu6mgELRkEY7ydte54VrbGhC3i",
  "key13": "u1VgrNcBrcSJXPBJ1AHbaBfeDxJFTLwwizPECJ72Es9HAnS4kMv53D6hxiLRppa4CifE3jrSSChu1xdr3m5UFk6",
  "key14": "4pxmWFHXLQSFHHAx9zBd68pS449dZoWcYfG28gssTvR5XpUGohRpiwogdKcyr3phZedK9sCVcxeMX3JM1mE2774s",
  "key15": "4EjLfFbg8jgcN29FZhwvguuPpyYiZU6AgzGn8LqzYkRfv4Ao3W8jVRdgcAWvSXsPfpj4a7wWCFEBia8PexyBHBR",
  "key16": "4NmWwDw5DRX2tzdy7qhCzpDczwnnUBLzwWwU55pYknNPtHmo517UE9hovkUMVDbWbEyJy3eZeTJFhD3E94xGPG5s",
  "key17": "bFhg7V9XUjMQoMZ7zp4L8xKxsUgLxY299HHyzS5TUwkW7UA73YJbnYVa1e3Az64v6X7vQFU1isqoCZD13eEbcSa",
  "key18": "W64zYjDhLg38adYmPR7qfooDiYQgBUqCGLJtv3MAKkZ3ANeXqRNkwM4CDiqDkKhsaxSPHWGC9vuvaGtf3iAjHSs",
  "key19": "4PFEE5VHe4s4Y8skz8ATyBUjMsmTnbFxS8R9SsC7AaKKpoWo1D3dr76E8dqq4j4fpodjgQNgGYSZsrCiVazPbncs",
  "key20": "588ivkRqQqphpKU5otQ1x2nZ6rzvJt4Pf6sPjnFrTZxJL6ogAuZBuiTitZcAR93NwrxCEQxzNZsmjoNzdoBKeQ3L",
  "key21": "58TxcYWDJzzZZtykCEJ8ygTg4UMDn3pmBuv1FMwadRUs5P9KNP9GgCeHCiNEPt7uGoVUm3DNo7B5mmDMbHANx3ig",
  "key22": "4wM1urpkfo1HU9RdwAYo1NKBWysMHxMPNiTNMGkb3rcCAX5CS63RHCqaV3BFkzcaUzaFSAmnCrr62dkk1zxaWKoH",
  "key23": "3o75N53Tn3cZQfYHFsrLveL91RKt9a6XoF4FZx3YCq69Cp4X1AXkqmcVdy87bsg7StyuE8PBF6YiMvYWxx7rb4ea",
  "key24": "44xWfW6SVa5njQUy2uXhiPBQxz2pPmBzJCNDqkk1Bqu166tb4SenmVfneZcNedjwmSVaBYLmhmc9ekcvoUYnKqfB",
  "key25": "46AJdLjSmavdk2daekQM3ng9AtjiKqmjQHa1hLrVC4SraUopuGyx5ChnQCAJmpzjeozq9nG724jPu4a3BTxhLPvK",
  "key26": "71GEhed36jiYLmariFP21C1NHgcafowMmRAcP5nhERGUk3JtoeCRyiByEQzxQNZMke2PjJVvjmzocqZ9CHpJMzR",
  "key27": "2HowZf6EcfLtGM5QXLRZCHggaoze1vCQ3zgbyUXNFi9sHqFZ7RQ9Aon8m6DqwT9cR4KhUjDT1KAvaMttJwG2dag1",
  "key28": "44t7ryVRCofmEyL6s4u4sriqan2Z2rVk7JVZZUNdJkmQmgdJWcerkkM6STy1yU865jS7szginKZbV4HChtA7utUg",
  "key29": "4ZTXsJNoVZgPXEa4bmbtzwcjcctk2iYatgy4jyet9FkSwpRJ26wWKDgsZ31mBu9NGxLPYPuVJHbGQP6P1JDXSxcC",
  "key30": "5u6bsv9JN1nYBjdgKgF9hopWLy1K4HzFjvpNGm8HKajm5p93vWnyrrzCixLUqfAUjKoYVVLfUDcbGRupEucex3aL",
  "key31": "yqMyFyjwPBJfY9Kha83DqQV7czrAj3wq3zuHYSmStkqi5CRJSYTfFd5coF9wjAQLR2tCohii2QMMpacvXdiGDac",
  "key32": "38K67nvnpemE8DKxYn4oDjNACyNcgG6zbZAnt5KKzywsa2GHchPQechGKYiFFwZPKihA72u5yniLfn6mvRSKnEoR"
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
