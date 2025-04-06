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
    "Nc2vuss1orLLoWdK5EssyiJKUf3HmcWxGUsuAg9vqz7yqzUDySsMGWy9qTiGsVPT2afwxxVmBcVx3HAgB5ib8bQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wjnSZnZXWtCjVv2ZXbgYqwXy6BY6coUqruT3Nb4qTfNdhoeTrwDbGtneFkqX6JMdsW2ANNyQrRaxSmcQ1BrxsjJ",
  "key1": "wcLyoEZyoRayXSamZth4NzpRcY17WqFNvJGVNyNRfgWwiuDRkvqWj6goCcBBC1kborAGDjCWvn84pHQQyXPAhqy",
  "key2": "22C4SFJdxbQANcYXee2idSjd1dk8kemAJevteBavfTJGgbmVzTxZvaaEjtjUWYzkewNzLTbpizqKwSZJ1fpVEmJ4",
  "key3": "5QWYzHfSgL9dDbMqubZUN1Jq5MDoMjZZcJJ7Rb5JcB6rnzAtrVwwjrnW7LRM2qNboBQqzasEJrXR4RUrobQUMNXc",
  "key4": "4tC8YXmAVVWAZtWRswKQZCJaBg676ZxwEBpCoURuM1N4tq94gJk6A7P5dZLCngnS2BLhCzdMznpC8q11MxuWzS2V",
  "key5": "61ADPFeVVHZyoBF5tYmxBpV9i7jDsbjSNSM313icDssMpdR4Ceo4xJ9Pej5xScUeTmUjTYfwFJyFDQxLY7JkPrn5",
  "key6": "5UDbp14zzmmsqkBsH3xVKZ3oBkv7o2WkBAc3nbFsDnpD6nJSXqbVszvjpduvcxSiBuLSQ9qbG4QEXY7Q3gYESRjh",
  "key7": "49e3soMveCV8szesJu96gCzacjdq9EFJDCNAPx2ASEQJrHkSLc8oBxT8oMQhkypDnnj64w8C5X3wpK9ahRa3QKB9",
  "key8": "3BeJBRaSp2mt4zneqLxyp1mQ32M5RCWXhfsUo2ncnyhFJqaXZiLZGp5aqz4NTCD8fc9pkHNc2389NSW8GyD5v819",
  "key9": "2yxnMabkjmrRzrA5JEn91CYdSHtVSNYeLEZZZ4PHkwDuUyBFwYL49LngHsZuPNkhydjkCpJFhrPUqY4ehGwKcayC",
  "key10": "2n1qWSfbDxuXdXSfaDA9hAVhBEmZkYdYzRiCEfLEWq1wsH9ysM4pzTQrzMt5sLBviUV6fUvgS9VaD2ReRaEKB8ct",
  "key11": "uJzeN1bZgsoywD6rU6mx2zmb3EHJMPRkdUX8LaWsnr4KRophqAQaVWbzDaNgeoP4cptV6FgsoNZUV6XQwVV9hpr",
  "key12": "2dtfbDLizcHQBSB4udViNJ9ejj32Uw3qPWZhs1PdKuu4dMMAsksXyhR3uzAx2teTxKpxeAp49NfZZcNUDAe9942T",
  "key13": "kQCzNXcXRiRRx1BxWDEorZkmcENBmk4JAisMts1kPcWdGpFgA28Jwq2vu5ja3XtYnZXuHa2AFaPB9KmNLuLGXQA",
  "key14": "5kZnsF7bxeXQkZvJwrdBY6WmLnrKrXYMsPZsfpgbHQgi7YNSChpRxYGatgqFs946RL6HQ6fGGRf9khMvdCE3tXYz",
  "key15": "5p43DtF1hFgoH3Vs6nXbwoNfGJMwsPqqhUXkoy27gV2WndwLCjJMe4esQDCqyeFgYX1zmTm8DxWS3jTxkh4QWwKo",
  "key16": "8o8Vwj9veyqxYCYGZ5E5NaWjSaFkxtjiZyND1egQ3dyHKpYPeQaEJWnT67fgB1wa3tapQVQGVJyqj614ywGM1Ur",
  "key17": "czwQgJMBVEvyTYafVe2map5hikG8cRqE2GwSfLa1RAeMLaPmKm4J6yHMg2XX48hiMFPJiYbAZbn3rWNUxRc9JYR",
  "key18": "4T8g3SxBS4inZrxgxGpWVYViDgtiEffW4EVZfdFME9Rfv4FiSrzw8y81ZLyJU2VNCFABP8G9R5BCdgDfibehCBQs",
  "key19": "5gzp5UEKpcXSe2jzgtjCMCJcvFi8Ch5E53EnHaUqqH5PUrPAfWFXf7vcKZtoANCn8byuZBQW88NZD5TvvP3LsKkA",
  "key20": "oUR1gTKtsiQqSHXgeXBBaPzN28UjMDTv5dH3WhRRqvq5mhanU136NQptzvybXUXgAo9K6trysSfe8tYN3pEk1iX",
  "key21": "P4mNuPpa1PgX2HBRVc55XPtYcNqnhJr7YL8kTmSiyLCyRneY1wh3AcCayXd5JwDWcZA5YtjEFgvxsBsfHkvuH9R",
  "key22": "rg1karkBAfnr7v8RPveWSjZFPFgrGQgQPcHqbmDDmwJRdzDuwRN8pGLzbC48CkVawEbHwg6UAL4xf92N9TQcYtN",
  "key23": "1WGaCj4wbZ9NR5qwSjtRv4fLkKoiFRr8RU7rtjiaqDwLHEA6iinrcCjVfkh8XhxdsPbhVRYT131Ce6vjoEH8EUU",
  "key24": "5nnWAAJm9cBMxvv82S4cGaHYumn489CuyBCmHuwKVpYpApmGR7tmToZ8Na2jXDcRT15taEGYxYqjQCBd25zcauG9"
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
