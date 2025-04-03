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
    "5DLrJ7rzdRBcMk6BDnivZZtXfefTnebE6CSwXn1JernxW8zDCK6S6e6wjhtmNZZRzVyKripG8P7saJrDii2JuRY3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UvoS5PoLMHEherAvZVhZy3bDiyZPL8gkfUX9KM8UzfdYAsesBHtTfkMuE23uyNwefgRMVpXeGmEXY7G5MHxM3Tf",
  "key1": "cXqTguksSgbKmPJMho2ribYaVwhXN3ztJLVcRga9eiGAnHMVbnmYhfSiFPvw5nRS9dobR8qeHsL9e9wiw8Syt6w",
  "key2": "5mdbVFJX7gRjxrPKcb91QRcRgmWn1HMQ7TZofio61dzH2DUiKpRs1AnxuKiiQL5WBDBPQue8VQYk9BbJYbTiaD4h",
  "key3": "4r3tJkcccpTRfanutAtEViGkAuNnwECkfQtJWCKoj3Xbm6EVt3ZjJj7w1x5wJEJz5jQEo3XRovmif31rFXTY2QSV",
  "key4": "5H4g6ng9iPjhEkj7Z4HuYXmT3Bk7KNW3MqbqMUmGp7AEZhm9oRF3DkDM3bfL1yLidcPGZoU6RyxjiMbxMFkUy5Gy",
  "key5": "3LXkVARzro9jj7oSAaUSXKvU6Qw7ZdvUyj5wq8c5HCDq3JKFo2JuirjfWL8VPWAVzHUjpXkUfooJPmWQNkGDU1Mp",
  "key6": "2irBTjUWtRx7L7SVkKyHv9ZLgktJS6fCsmGoJtx47z1mYPwzigaFAwRkQwGocz5WLkwrG22oSkFxoftPR6BfXn33",
  "key7": "2bdb9SiwDuaUe64C5uxWyQQNmHyQkqjgP4EAVTrJW7XepvuLxT9t1uC6UGgbEjpLPxt1Uzr3Ch7Hy8A1ishgegpd",
  "key8": "64it6u5LqstJcVXtQsReqzyhq9JEAVKdbA32hQQJzSiMrJnxRRHtoXA33R9saeKLm4cytXVg1KQCveEcJo1pTncQ",
  "key9": "6u1oveRLTQiYHzTCiBL7a5V9aB8WLa1utwaamrS6pK2mc1muE46j6rTqDXkwEk2uTZuKhFUtzH5qQHgpRzxcoTz",
  "key10": "5XxozkW3wEPS8KBtsE697J4DAWYzS3DA1D1DKkXnUroVV2Ab7Yert1c4Szsdb1BsvGrFZU4Evu9yvScX6ngwmRoQ",
  "key11": "63GRpfwZsAwqaxXcxWZ8ev4y3Ge7u5gw2jaxHqmCF3dC8CXmUtToD2LVCB6DGdJzBJxc3FfNjTZTgSqPQFisWpX2",
  "key12": "3AvhsDy8ojmET9ctqXnFmw9m6otnBoX59T3gQLddPNYfXgEd8g2gBbcPoJtVdMp1gkrqr1d1tKwNkUbx8LSpbeWd",
  "key13": "5LvQoKWtQ9dpTPKd17bLwLEbbbuRt8Bz9qwK8gVXYLpaWVa2omgPpuuJ4VgwFVakNDmEjw19YiGg9DnWJfPVELNg",
  "key14": "4rn1nVAg9weos31jLqWfgKWG8jpY7oc6KzDuYyABTLXis4AkErkjM3nx1q9mcDmQhqTTdopxpBj18XGsX5KALjU6",
  "key15": "2LPCk7EhZDrDbNsVTi4dkjEFva18MGySHFXvnBTpK6Bk7gkYhXjzpwCVV82fNA5DppvDQEK3KZ1gbkZagpe7od6Y",
  "key16": "2fTStDYdQKchVtsVuNCo47bgHFuSBw83Ndde5kJ1PaxhKkbFrmN4fecsHixVdGiAWkYPNJj4kEpFmFW8ffJ2wNvY",
  "key17": "2G6FzGSGxun1r5feiNJH9tgco1dnzkDnAgHjRyHJCZYKVuCx94c5nnsR47NpBpqSHersFySbN93TquQYrT7KpgCZ",
  "key18": "5EguLvsCLbZqiHTLXmSgHW9jUYr5iLmvpqeKrsx8Y3oey5qj8EAyVjEU5Rx63yWSVh2XcowGtpFHbBAVY1CWdbbQ",
  "key19": "ynWXcxwNtpxSTHE2TpsqDNNJkSrhKcT6R9SHvJhWETF4PKTjZXkjBdWZQ9eCE1umU8c2svppoagKGroRJs1uYjs",
  "key20": "2VxsBsQ2pTD3gJCwPVgLEJLvY1seHmBg224dccnqNfHYbThKHt32wmtzCiiSKf4NKE3WhrUvVucXCw1Z2TKD7TyT",
  "key21": "5Yxu6P4yLBSscEWnTcVR2H4dao3rN7sizoq1GEEmJo6h4cyywmssiwfN9G6FQXn29ciiqCQZ8TxtKtzdUhKq24Rg",
  "key22": "2feon13qHtFsdbMaRLrer6KbouuMg4Sf2zuTT77zGdvrS1CbhE5eVt2qCkQQw33hYCuufcqypyfZewRqo5mYtXPZ",
  "key23": "3GqYQKk4fHZ7f27Fs9rpWZskyaohdGbYBgDEb1p23MbAtGAXftMY9XEs1QEgprH9cFrZTivYoUhrvcPLbeEQ4ar3",
  "key24": "7CYrcbjRXg1TB4RQcxwukrNF3LZrn7hp73SB8RvK2vbVKwXRTEjHEHU9nvtrgAUEDsRL2423BdHTWzH4yfGKSh4",
  "key25": "5pgEAEzsS8S2k7gpPS5mVrSAd5GQPwcS7Go2PVvHXFbsAGPjJ9N5A2rXF4EnFQsxwAH8oKqgNDVzQdCcQ8XXu3rK",
  "key26": "653PohXKfc7tm1jfmzuqQnjRNAWmhEjBW9ar8F9RJ2pB4ynn8NjU1V7RkbP4g3eQcdrnwjr683WVUNQ1hKEi6aQY"
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
