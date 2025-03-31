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
    "okjEYAvWEJyRzP17MwsqsbGFUCykr9pS7LWJTaoqjeLK2JXHu6HtUnBAsGWnP89kM9jDcKVafdrF5jXpUZaz2gQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uHRQ7gMU8tG4zYwv9BYepHwNkpfRaVXNNzNp9SAK9JqnbyYpa3ooVRLkDLj5EcuYFDZdWFavtFf692dJsMnRYio",
  "key1": "4egxToGBtdAhZC4bKiiJf8LgR51dngZ7UkygviBF2t4wTx7fhRVokN9bh1pcpSq6o2MuE5EydSJSUeq8oBk76Rnq",
  "key2": "61vqCijbDnJs9vhNMpjbYCcBYLjDCEdcQZpUTXZ72j8PEF1UFiKerW28iPCMBPJ58fYsyLeyttV2bowkJVo8TFt4",
  "key3": "58esDB7yy44xn5myDyHLsUdNhdtdCRWG8Dk8y9q7JDnFjGKYuEFi5ptoa2FFMXckP7f6rmi6kbGxLxhy786QwkV7",
  "key4": "AQUYNsTaviD59kXUunkahkLKHSziZ6QrmU5gwpB3Wf4yTJSuHwwfNF5Kx3oEq6b4yLYnjjdhosYxo8sqywX7yAz",
  "key5": "3MSzUnJh8FjqbpkLpNrVKermwTRRTFxYq3TernRCoSioCp8L9fPxDBRqKJL51BD9PBLUfNxjySg93VxSNMB1sqrc",
  "key6": "42Ae1vN28irNBpAa5vvGNSv9XZN9FvQHeDoWoRbXuANAsHvfyAWzCD7VrPfeEi5LaNfPj8HkkBUzMz59sSp4ACa3",
  "key7": "2K3rXgNXHVvs4ME3LdGRXS2sKJiQMEunqtRaPoXjhfkLY6Jr9wHSQ2eNLdNsbpMJ7n7FP7n5KiJRHDNQySUhLSNQ",
  "key8": "2psk7Y1cptH8Jxf3wsECrKH9vDKMAE4JtfGhbzfiBw17ah8mxZMQT33pMA4FKpwfRqqDhCiyKVdsAXsCLK2kWiWs",
  "key9": "36mGWwH4jC56V3wc1TYAXAbV44SaBC2zc1WsGRDSiCkkNA1ozhcnABqAi6j3cfw9UED8KpmexNYoEBw8fy8mMduy",
  "key10": "4eR1mTswvsUcTWpmAKzppS4FTVDBtyoWUSzXTL8cEb3FWvcEi4DU5Xxo8cq6xuGaeKe7U1Mbb4G8Pf1jD5m1A9Ht",
  "key11": "4xryzf6omT4HXamn7pcgjUSCGSTisUGUnnPD79ogAW1XXTjvQqZELDGfD5qcRV2f8qQN4dYhq6t4M3CZXPuD2D4p",
  "key12": "5y21NUM2AoLpkcwQ72UvwfswcZbCYmJMxu6G713fWmpAmZXHrHFeLMVVbn57P5wVYGbfAJtEzKefBWFgD7ZpTGMq",
  "key13": "2dYXbLWMP39FDpit9gqqQEb9rd8nNXCTo1A2rye4NCKhGtS9Kgjyz1a5kCohKfj2if5m51RrnNCaEKcc8dVppVsJ",
  "key14": "2KPRw4wWGMkX7bcLsyttZoppanP9JVDhQjDDbT2rt1WaxZwZp1NKoRNdNK9BaeDSQRd8SJEHU44HVJXXLrh9aqhL",
  "key15": "D9LKZ5owKuEDRLfs1dfAQvBY5TEFBGvRt9XKQH39DvQ8jVZq656c7gmThbRgBwkVeVDi55uABXYXsGZGbtqCzjE",
  "key16": "h7XNXmn7jaeuythqkUA98vEok62Ww9FC1AfMfrmskvQjQ4NcQpA27jrSNMEzgjhQ46XJdgJGc6Z2meWd1oG7kmn",
  "key17": "2zPfsK6FFz14eYC7N3G7ubbcR2AVr2KUDdEQJyLXHBbQWsnww64mMDZ3ZApKGgQAEkhB7QqNRShGAVoH6tG1dQ1R",
  "key18": "2rMdc5cnvXoK7tvKgMNnu7PQaUVocuUQos4BUf4S4ZzKgRrCjnhRFdgtJp7yDm6PNCpSSzF4ToMBvExE7VmFqErg",
  "key19": "2u2fweSpffPfAH3KY8Y71iM67dzjpiWF9TuoiZZcMYYtcSpLGxUwKfaW23NzTTuHSxBJUL2JbFxe6YHPXJfrvmsR",
  "key20": "2FQcHYHYAtzpKTCa7gViHedFiM7eJqSLAZWuBUZELFhbmpcJbv4Q2sTiMUJTrsacMDN6G3Za8eQZbbkbNVkkevQ6",
  "key21": "63NV6BrNeiRBCdGE8cCoRmzsXepGfgLstCBgit3FHndGSDEQwD8Rh2u9BEXgs31PGVdrKBNjBjSKvAQv9EuiBC4y",
  "key22": "25Mb7WVjAAgDJvhG6yBAJ4XsuwNg47Dj8H2cKeLcpmQX4haCbzvYamicJbQAfQuyvrJwDZJ8SURHWdeRhC4LyHLw",
  "key23": "4Tb6EGmvVB9bAtEhaRHUmzGgmYGz4tMea7v6fA7SuoKNdLuDeLVE6tx7bbph6JzHpMDNaaTVEF9fYNK2nTdsATfE",
  "key24": "4rtZaVxocFU948CeY1jrZ9S25BwGseYKNXUzGGHp8XM5AemAzfAsXercf2pQGBajWCQg31eAoiqGhFhXaf2uyT11",
  "key25": "5Fvjn5wLUn3rNdPqNzQz4pCZfHoGuKajZcTHo2KxLqYxt5hqdV8dA4o7KDYJA2tLFtEjBoC3jGfsiVNqRBFgwxZf",
  "key26": "TJXgQFhTPvjAPuadaLwDbukrUgzMEZEWRYaNvv4Be1eyJishfq93ALLNHbtRDaC1Nskq9D7tJ2B11TUnLCffy8q",
  "key27": "5CdCCssg8o3cWgZT9qusfy9bdySdnzZDsf6CFvc6rJg9kJNZfjs3UehasLKNg3DbNk47Cm1z14kgMXkziNbMc6YB",
  "key28": "2Xw2b3sU431VAfEFKozDKTEt1WTRG679mgDCuHdjrs6briwvHy6BfRuDYC7TUDnZCMzdL1pn5kbgWn6VvVpiEtjJ",
  "key29": "5uJF5SBSzBtj3vir87vgsWndkdbK2STSrjYASsGxGphCEkt5ayjqaqNozethS8WdWaN2TnmhybhKXgtNSwiC6A2m",
  "key30": "44v82SMXGELbFoPb8XX11wMr3FCc2rUGgVj7o8SJBAQL4Wrkv84xAMb8KfPs8bQ4fBmqpEHe57dsRRqvJZjdsRxT"
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
