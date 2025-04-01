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
    "XAY7gpTfhn6b66whEn4PLHrjjhtmNfkt9UF8kAopjFu9FLnz2upNTGRpWVj9cTt1jD2UYUDtCbsD8eJXRMZb8C1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SxN5X8PC9jWFkipv8MnYegjGp48Uq1BJ358kGcwuNP5SsrCqG6RWjkQHnK3okChfMyRGCqEmbVV273SDAPdubQj",
  "key1": "5WrrDSVrJR2QUaYRZAVy545jXG1GN5SnWkr7eh3tkjUHuQHqCFERqhJhkPKdm5fHoGtuEbr9ZcQyVndksG14BEJ9",
  "key2": "5Pn7As9i421HoTPWmytDmdkUz1dT85R7k7ejvuWzNV7Udu2okQ4ckMNdZMkgNHdsPywRywK2zzrCXosSvBtT1C74",
  "key3": "FmDwiNesMAABr2BAmRGFd6uQCG8tvnQyYyxhh9HsP16XTyzphvCc8PFVyWQpqfNcrhkmW947AVM6SaL295hitU6",
  "key4": "vhCZid6MX1mX16bF4YquRcMGpLPkz9w61zsR74KcryyLh83pq2MiKyZiN7fN8YfcnF56tNSAb2sk43Rzo5ChLdW",
  "key5": "vDKM4hKZe3WD1LVo7TLExuVRoc5LaXoW3Xq2JV5tEWyXp3PXhCNa2QexSmiCQm3MW95XEM3LeuwpihJuSEbzpRf",
  "key6": "3kffgHz1KA82odhDtQm8qh1i1cXV4VpQDvjvvrz8PH3gQzTpYwYaXN71HrYLftPCYcMd5GySZswLCGENedYgCE3D",
  "key7": "zBXmZGRyAFeDGThQrjCZU5uQ9jC4Y6Kcu7kpxfEwcffcLJn8aj9tDczNp4yRuHnPCEVgZpqKCagjFzWYFjTJMkV",
  "key8": "5e2TA6t47Wa34ZixoR99am8me9J4bUyJfmjMLZh82fjtbTMnetx7T4DKue3HbSzafiYsFaXK8z4wabp2nWVec7if",
  "key9": "66tHRtFTs9ch7dPjH8HczLWsEfbXQk794VTMjYi7NsE3iode6YW1ypfNtHKkTAbbnoCUzvD4MNSvkqpj5Nc33aEN",
  "key10": "4p7yZmBFRp67Kjo5uy9iKsufa6yB6oJgvkhi1iNMhRstqvJDuNQUSLJVP3BqamW25Hgzx3brbdSxqaCrf3YTeVm2",
  "key11": "2M7sXPcGTxDdnpHTkdnK7bAFMoPcgaqVKSYwgeeCq8PFxCvB4DUV1qNX9Erxx9ZzUdSweJhc1vbP5qa6zn5q572q",
  "key12": "2h9tnh7jcytm2WNWG1RLHUCFSCJ3o96Vdxx1cXkZP5G3dMYtjRqLSwgGWTAsrhFJ18ULcjVEfbun3K77wx7bs8Dy",
  "key13": "2NXQ9cMwztV9t15evsgeRypX3tZ1faDeFeG4qSyFCzZ4Rpd2x41tD9UXsQ4FtAsyBfgJrZndxTD8RXTtZASzLLL4",
  "key14": "xLVLZB6LkpvQw19oF3rGZxjZqkaH94Ep8vRmZgtMUr6cGYbxh3TaYo9vPXUrLNyp3fGTbDf4NtunYLjvLsVQW3A",
  "key15": "KoNKt7qKcAdMor9e8o8sgbUU4tjQcRniMuBrMj4goYyL2fBQiV9WDf3mMR9abVDB64uNhdtC7JdEMEMycaKnavi",
  "key16": "3Y2VMds9FGxrQ1a3A9xyar45sHSPdQdnXiY6GujhoGCrUMeGhHzRsmVV5W27VxTLwSsr7q9CuKZ61mEriVBSj2ez",
  "key17": "6ZhN8uPkkDsGXDVUvfB6swwYSg3Xww4WPuwNDiFh6aD7BgWGDfkqgE9TzCbqE5BieFG98Depyy4dbzEy8bdhVHs",
  "key18": "5grUzBMoFitkz5UsEzx8qagBMwKEcezp4qusrZBxzrKuT7zHj9GseLmzZAPtYVXnYZMR5LKLE1muWpH9egEwrqfW",
  "key19": "vZj7sJ2kUJDFiTRw9Ds2fs8LrytmotNK2Yu3jrKABK9EBNBeFDDbnyFH5eaKGPCe3zyyKxbNGbjCmh4Qi7ybkGY",
  "key20": "4ekyyaqWAyNaa74BDwNoX77Vqb2s9nsvZUeEHW36r5KbFqBgbgy6Bys9KV4PnACm1s1EhRLq92LWyAvvphS4wNsu",
  "key21": "4tw1HoSRAyiXWrfmCiGN87CBGSiGbZzfb2QZLHtg1V7kWFBwr1vKvTX7xBQ2zvjZeeQUnAjeCqmjiWj4ktT8dHzC",
  "key22": "3zBxbRaVr5YG8k5MQvE1VNAX5ywYWrNiUGpxvNxjY6M34s4VvoqCsqP6cjUzeFky35xcC5HMmE7acZTA8rWhbWZK",
  "key23": "5YSK2Kea1jJNb5UHbpUj6D6NdjxfdBU9tqzTgGmQQfTvbRzp2CwwMzvbBMzEbrNUz16SLn895iUaXsUUxahwzEFX",
  "key24": "5JdM5BBryvKm8yjuowem4GhphsXCVFTnigKcSdyHKLU58JLoeffQKR9wgN9sA1CpQK1fV4v6WZkmHt2ErCYGFF3r",
  "key25": "3ubCANg7BezKddzNM6Ah547hSRRNBpRoMb4EDbgJGBGQNo6GToVjkn6wUTstmZHPEKiwBjhbNQJU2GW8AEdwP3st",
  "key26": "3LqnpYYyPtu2NAgzB63qZQj7L7MRekpgzRgccqw1dBygGgZZNkf23Pz5coQZpH7n6UjtMrYWZpQxq5azLRfGVvRw",
  "key27": "269i3F2EKsN54PVxb7sBKGaryqVhUpWxh9j9YDFszCa3cq79hdxf1P7SKWo3tNvHropvBRZ9kf4isBz9v1RBfFi4",
  "key28": "4f95Q2SREDBM6e6v8f4z3GGJ7e5CveWtsmqXpUocDG5jXJSF1gRXgE1qAtv5NRxn9EdXdkfmXgaA1vnLJambBuVY",
  "key29": "5aQzSvdvkWECAt1N1KbkovwGKU8KQSoM8xJkFgR5KBq2yv3mqLiR1B8sxM5YWUynYLvHyEDosMnyQ8GnWM8BvjB6",
  "key30": "455nEtZu99efu6fcCkrh5TajorrPY1vNJHgRiviKoUDLx1ZUqKxQcgxfKxKv3DETjAVoDDRnERXpZRrtVMsQVrhY",
  "key31": "587egJHr9T8i3XswPMFpCqTC5UXpbJaHNrRLHuRQNxNVAP3U2eVV5qhdidAZWdbrhaCpHxAQEJTn2omnYBapubnW",
  "key32": "g7LdBhn2UnyexMTn7Zg5E4KsmVVghWp8Xpuy3ieggJ2LNeF9mwKWVkBERxmRjRzmBQGJYmbxX6Vj5fknoSs4Gjs",
  "key33": "U1WDNqDigaCLV4ZabKv18iXhnuNyexW1K5VMiVUWzTYono6NCcP4QaRrFRNYgJZMqVhQrPyVPoc1f7xTgwohQi2"
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
