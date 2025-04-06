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
    "5Bi5NPZTT6S34ATaYDJSAroejyi7cXzwsSm1PEaX97iyq3eMT2CaxsiRqbDkx5Cp6JaZerSmsjhtAiEyKcj45uS9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tZarKD9EeB91Nar18ezGvW3xwfnzizqgb8tv5fZDkXnbve3WXut2kDJttF7LFyDw5P85tmaFbxLgaXnHczag8oA",
  "key1": "2oRqNdGSdBimUM2DH2kDPoY8efVFiUtZMt6xE2QtKTVQ3FmNE7AsyWmK8M2nbX99qbiErrm9u4Ah61BnkayiAvWb",
  "key2": "4RyhycpfRX9GeJd3tkZVyqX91YrBB1g8LJjiZdtF6fbDZ9pUYG3Kq7o9288zFXJLRpEbHKMiyjcmvUGdBqqn8Wr2",
  "key3": "4PZTYjZZPvyJQLcT1tYUUhdjbiBMyzjufqSHmcPGjyQCfVGkfE21USCY4rJBS6jwHakuwrXHEk7LqUuM4guKqfxk",
  "key4": "3hztnT4o2o235w9BCCn3gqXRCbGwpvK5WEgGCpmawaTKGD6UBNL5gvMp16cNZhTdkAprUmYD4ja7wa1akdBkGo76",
  "key5": "62zXg7yTJMV241YphcKakqKafD5dpT4oZtimpLgxSwLmNwTnr3wpqrRnh36X81qvJHWii5fq9e14G9pZuZAD3UAf",
  "key6": "27AsWsysxFG5jP1yy9X7uAe1hX7ufNqegXnC7ZjrV8mTS7SHkea7NzqVUoFRzk3CbZVCVtxZCJBsCQNxr8F21xTb",
  "key7": "5p4C4kCrWw22awCua63V2tS6w5qbM2ujh7XgdZK1NWeoidY7K2f1MVXZYF7XnGDFDZMzNHYjAuZpDH4YDtzCrQuF",
  "key8": "28mnFEAKz1X18DD8EdnsiwDzM31aAetpwsY7WfymjtxwqqTme5UjorcWDiK9C9jyer9CJGVtsJpXRfUjw57Vn7Ny",
  "key9": "4m3pMbLFLw1cXYunQ1FWVY59oZzfwS6WG3XWuDXQpDNqqhXYKAKwA1QLZffAF5raoPkwsT2qbJcgcQpPjAT9rTwW",
  "key10": "425TBXz4ukSjMh7UAAxyb6waxTuB3Re4sCcSXdgYz64jNJpsqLNW4HQAtAfH1ArcxNXF21R31pUVuEwnHUTYZSuA",
  "key11": "2Hb9bfkdsQeFoBLfa2EQa8paE9jqUWzJzduC1hYWh33EEXWE6iKpdmEsb9K3Y8trSZyNMfQtJFbYm4S94n3xwpzf",
  "key12": "TW3gnR6GCUrixsbpC8z8GE4wwvhjmn8bAursce1PbmAzGTx7LycRcrqSSSvmb5GvzzX9Pq6U4gwNZdUFbupo5D1",
  "key13": "3tqMyMzCLAWNkdRhZXgb5q6n2wBg2qDTfXL2rLSG1E2sbhtVjoAkeJVC6oZRVYszpLtWfnpWAu8tQbWhHxBduyhu",
  "key14": "3PG2iYkuqK6sCPxVqseNV6hqKZtH1p13xoNcyHXU37sGxykXRf5dq31UKo2F7bq9qnyASXJj2LUA1gTdBNEepzPA",
  "key15": "3DGCVETB23WuARhkLPZYtUzhtr6JbQEXcWa8pMioFE4qUqgGoccdBZVNPRwp5MoKqjYB75bXzChaubQXT8y9XSsU",
  "key16": "4LupgUTztvs3zP3PboPP5zozeq52yVzr68yKbmsDH1DF6v9e2f2D4nggkCs31RJheTpuxbq9fwJFr4T8JAesnucD",
  "key17": "3BKVtfByyQTjkJG2XFEgtmHnJAVR7EzL86saqHSxkqeMaAdwoU42fPKHs7HChGnw6FgmhvADWNrJHLxDB5Pi1DYn",
  "key18": "2dyioT18QFndXBmP24yontGxXsGiSewUPNmSUdXxKBDmAtZbuNK8mnsNQEBG2FwP3WjGBXUaMdhG4tLquFbtDcqk",
  "key19": "zazFnCuanH3Xrdce7qYfadaeSLeeGJpQyB8pMHniB1RpgqZMd2x1R3NKiSzosE4NB8ijTrUtjUFJWvVPv7Q7sSk",
  "key20": "4c82KoYPYkx6TpfnnZhiX7Y4JHxowrucJznVb2tZvMuCUF5wWUFiXefNZQrwHViWzTwTpEpgGjtnHMQMj9r6i4FZ",
  "key21": "2zXyPM7jYrNSfcMrMEgSrNGtxnykaYCwpmL2jEBhKLVW5w3hMSt2CPwr97cHFQvCpgKRFRxwoJDP3MM1Qjmr1h7",
  "key22": "5jy8KNEeAjqAkLkCZrfNhJoYDgEgjYEaFW79odJfcYGppPDkQknFVpnaGSR8PGCn5Rtq1vC5rCJYKq37GcpUQpw7",
  "key23": "5w7Jodm8vP8s9fMQ5ap4xqXepq3qGEMHDpqhtgwmXRdo7CpEKiftKaW6hN3bj3ziftdm3NGkpHSS95kPp646d58i",
  "key24": "LShUAiPHm34rcopc6SNnEE2kgMLVQL9FVPMZmo73XzXXtyavhMgAdS9aEevDCcMnqBYvGs8RViWwWMSMongxXZQ",
  "key25": "QGBbFUKc8oNQ2LSx5zWF3Jiq6stF1DL38hfBmM9RDXrupw8JF5oennq3TZeZcbYdLHr28kr97u5wuV7VJwxRhGy",
  "key26": "34y8ATZFg7CeCX1L5iQ5j5fZvnNjRkJkEY2m93R9dkQF5GrFnq3sG2Df1vfp8ibuEvifpX5Cay1WLwZH3wGCJ1Y",
  "key27": "3kfCSJHRtgdZPWYAffqddFQrc4iqt6EcP9LjPh1zr1KQfHzAdjb8evpTh91kenggNMNPJUqyBnKHzLVG2Trag4x5",
  "key28": "5d7Rm5diwGwpzMupaXUKkBv4Ycc1hTE9bTaAWkS2WMDb13jEL3ciG7NnN1dgy7uQJPsxGNfyK5hQ5b8FoHbMCYq7"
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
