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
    "CQoLrnPgwev2FWYcFFz5Yz7JSp6QKGqonsCf8mqZzsk2LQSF7eRPss1rxAFET4rifARJPuP9DJ8TDfTX9esZwh4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vo3MDwKdAysb35naafxZem3wrdAbRR8X9aNBCxXjpLuvCPNRzSK69VNNPZLXnNNnZWHXaZj7M6XVdizJVwN1Xcv",
  "key1": "2ZB8cip8DaWyrQfuHYeEfZtvcrfjTqXufAZTwnnAULKbVdUSqMReTBXX55MMLYUPTX5LsFVbm8EH8FhN2dUTDkT4",
  "key2": "5YmRAQtKLpTKA3Vi2aqy64FRCUUzfABB3bToeh4REJfxyPgL6FJjj8aLyZZgmies7FweyN8hxR9Z7UbX3s7S719m",
  "key3": "5vgcG5SU56QM2aHRgqDFf6tArCdLiH8xicyfVrCW4piWgcqwt8AMmgmbEv4PQzxuvcFn8nTq2MYzSKiRyHHbk1Js",
  "key4": "5v7FAJZ6zpmuhyEdB71JPKCMf66Tqk3vRWgtkEixfFi8uPAgtgiNrfdmmQZvuujo6oMBhzewnC7gipKWDFn6KpVZ",
  "key5": "wEfuRFAVTZterbUJFCsg796puGwLBvuHMq4uRCNq15nhWgzHYsvGyNKe2kLiMWBXvHbeXPDEjd51JEwQi4r3nCo",
  "key6": "4qht4MHMCexAYutHepQGQFnQRQnuzUh3pkGaVHoKd8tPLWuAXRBCAHAnz2BZk4d2RjHLHZnPmwkzgzrs1rx4LdKm",
  "key7": "2dHmgDmgvXCasPXTWLQpR7X5a6mE33fKNHckGJxCGaSfz3FWk7n1YhF9umZsH5J1FYmAPiaRWQFR5WXwv6FUkFGh",
  "key8": "64fFGqPtTzk2nbK1Y7HB8g7CFkHtNRpkEE4gxjZSCVM6wQeMzfMn73fe2vXUWMhBwwUjAox4s55GreF9gHjJn1FG",
  "key9": "Bdg7vmHPUHLer3WiqWEJG6MhxZugCZUb9gW6YzLWbw5xqSTWEgEkabfY4msnyTrZbeJLYeWgoMYi8FBtyEKs8ug",
  "key10": "3iUMuJ7tKGm2QFbWBkuvzY87XFvNqwpAF99DHPWBrsxWLYTiewJnp7KZrsYJ5jwDuE1cGMRCYRZY8MvLqKA95MV",
  "key11": "2qq5D4s7wJEvuAhteijFsnionoeQshQVntfUjtsaarGALzBSdBgeDVoxMXZxJbwcDZNqsRwf9hbQCFXxpVUSBVKd",
  "key12": "3hS7tQbQmnwVpe3isDA3KFRH8BvQgNjQ2Fkc7uN1sxTusVWCypg3jrdYAgnAhUfesiFVA9KzRkeoUmBFNh9t3kgR",
  "key13": "61MErd4pYWcX5hzuWUgSPG9wQbST3ZTNMAtGqbQdKaNsFxEoTvZgyozrXRX73CsgWXye73cgiiXsk6DKvsxZcKuM",
  "key14": "4qGnZPhWqJ5QVp2U24zz8MeXPezYUBh65beajiGRbkRUZYZyKYGRLUwuQY6nx6jNmJvY2MJ4G3W7iK4SsP5dTXF5",
  "key15": "HHKoK1W5W4nRgZ3XpvRj4E4WbsbDJ16FUypm6PiY9YZLZ5vr2qJQgSj69RqH8f8J83Ar7uVkt26fQycSDnU2RrP",
  "key16": "516aGHE2eLUuMRj4ApcntrB2VND93DfooykPfxUsDfvyHbjYiKa2ZcUuyueH6mKaQNCtiuXatupNM2G8kUniBPQ8",
  "key17": "4KwwM6FFgJTCAQ5WjiAqXS8MQ4LYuA7Pxxx9EbwdszXKvnAs1jkgi6TnSAztPtC9Hm8WMM4oKr6awp3dk1qrxBQS",
  "key18": "4e6Tk7MDBGTGwitDuFQZjvdYz78ufsvNT1dsbvXc4N9QWkqrAiNyLFiF9eCX9oUMUD97C3dWVzhbVF4tVikaWpF4",
  "key19": "3K9WmbWXNjZmUigfwtcUa85qjuvXdTNxzyb8pd8c88vptNKANut6xeZiAQSmVEGr7h3ru2bB4T9b77pJez42sSvn",
  "key20": "4KNuuuYotB2CVXYF5ie9VLhLDsh1FQsMxscDKVLdPbb1QT9wLpUsLjJKyrnn3VPQuvC2jhpVoTVAeDh9zk6WAhdC",
  "key21": "4LdsgpHcHUpSsWGyzsU8zt5He453GSinzDnP3iFTNj5t5B7JkUNAVrPwp8WhnqXV2ifwvS9bQ46hSNQVgG4wPqyq",
  "key22": "4pWZzQTEkesjQ5nanjHpEpyqjUjFAUemzkpcp8cKar4TwzMLwpV11gcraD22DMQpXjSBMFi8aTXgWLQNsZnuDu8m",
  "key23": "5g6z1BhWxH242itxu1BHnwP1JmYduk4eiTdoeJodA9KcxSibxAbFpE6DmDzh2WihVPXuw9tH8iTtdd8LF3mrEUQj",
  "key24": "5qenqFWCJdQsiq6nAjJESdRTfUUB4Jmd5zcsB5amc6GoGi9zkxN6SYqYJpoy3HKwsqWz4dkez9hgnCTV14dFzHZF",
  "key25": "2TFdvJWQyEhY4spWK7yF6L4q9ADYQgup7tuBzFj8Bn8awCLi2snCV8eLypPv7pocXak5BMQM8D1daF9aW5ZSBv4T",
  "key26": "462CACD5PWFdYDNv1XEcH2rgxMG66c1SZWbgLeniHyySaqmGbKEbk6hxmVVd8NF2RptXNkkmZeuHZbxwZHtL8RLm",
  "key27": "4q4VfboHiaBT9xJMa3MC4Hm3pZ7sjyjoVR87cgnVdHzQSf5zdvX14zSNVZReLNiRDXwpy6L1JXkNyghKcAXPLXfc",
  "key28": "318Tv8ymQENk9AY1hoE3gkuRx8EfC5BsvttWTHPzyvUz4nowvpmqHdMZyPNCJBFpjZHDKuvoHrGBPMsf3oHWBL8w",
  "key29": "2qSaJqJAnAXyymKvqrra5cSFKE3UtK6qNUt6stKqSvZtRByebTZpLXDZsoZymodQpL1jqFJuBi8tuLcTziKfCddc",
  "key30": "5tpnbcpuQFCVd6DeCKRdfapnYKbzzQyrhwQqbsoZ5tEZrgKWCd9nygLHmbAzStqbxec9J7dudU3emZ88cwzhQcfd",
  "key31": "wbGD9G5fG1oyQn2BJQPqgRd5VdQ4tuS7zdimTyLe9dYBMRKFaB2NydNf4ft3cSsNDZvhrpUTa9eN7sXa6vanPLK",
  "key32": "ToD311TM3sPDoikn5PdA7RtdeuhV9rTcUqY4pean9wov2YwFzekNQkhjWyyhHd7MDKcMGoTJwhYw6bsUC84cyak"
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
