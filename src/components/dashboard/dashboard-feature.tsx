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
    "5ggxK5QNT8JQGz2SPgDaTNVBotzc2eTFDiaiXWx1D5CXX8sHi1oURibvJDZEdTsiHJiyqidW51Sc8zeYyAWktH59"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3brYYP7JsiLNdZ6JJbpSWyPSqES5VSz8uAZ2mEoZyEAzjnX1XmPgH6f6ZSaXh5UJa5GCGpzLyTJWG9tmvepXu2ga",
  "key1": "XL7xUjRihmtQF2djFF9FM9sZKPgY1vXhysZSpsiaZSYimcpfnUuAb8fnbZnQsFM4bamh9ju9msmVzbt3vQzuZpt",
  "key2": "4iZY7HwVrfK4yMMVgL6JCzewCfZzVNyKGpFj2sDRDmwjsjkLmCdnSUR454LinAVVmsrCZuWWPvMqwjazKcAFNX2a",
  "key3": "3nZmBy9Bd1sFCVBqbMfPk5Lm6HtHCNxXnd8Ewv3yChNAyiHEx7JZjGtJUvGP8uNsxQu8zFqDP4ANKPvMbxryP5aP",
  "key4": "f3kVSTtkmpMgoTL5YMAaRapmZ2UFkTpbBiWSR3BmG1Y8u9zA7qzAXtPTqTcw5TM4FMjVcFD6hKYCcSkkpRCFWdr",
  "key5": "2BeQP1KpKJGdjTt6F6g3CqVyZRMDA9vmVA7sgXSMdAU2PgBFfCawkxj7vxXcEJy9Jb9VD72rzSheHUBvpS7dWd8h",
  "key6": "4rhLKgvRYmBHAynwuqffqyttci48Mrf6X4nyzSe4dkVHkAtgLNtYeiYrYHjTq8nn5dS8dCiJbyGPHZtm2mcQATt6",
  "key7": "2KNK4t7RGKVbdS6C1kBvNW2znE5SYECfxRHgzwBnaFH1ZCtdR7fJ7TMJiGzPL8kHszsi55jzB5FsoGcw4FQf6L76",
  "key8": "4WegmULRmZ6V4ZZUwWkXGsFCMBRCDGtxPLzTYypXp2mSfnZYjE1JEXCdQJ6J4rdg28YLGJTcKCNCGkTRGxM9w2y4",
  "key9": "2kVPWNa6dfZ3bsdh6NspchGgVdG97YZsoAvsALyuKBJdDqUHvqipznL22RdRro5a75QYPMgmgTnoauYDmH7yjUgF",
  "key10": "f6seUG55YAX888dhjhSsST336tdYfRWcWJJ4fqaABAgEWGQ6ffv359LJidFFhhuStikzsDuaDc7B9Ny9gAreUnj",
  "key11": "RXCjPDXQCuFXAKsPDc2WhMYrBQwt5tuiUu3f3ZQvfMKDmo6Jttta4ifQvUsNrj9oGx2dCZikqEpgmZJEge4Z9B1",
  "key12": "5DBb4Ej8GRvcMcMR53oKZharbudc6q3ZEKNBaN14P3xLJhs3ueuhxdDeNJVfw6XVPgvScAMVcohuw33iDUCmYA7d",
  "key13": "7HdfgTrrpZbRPmYBTgEiT1W8VQhs6N71TBGx8hxzEvsSrPAeRZoQYH2vdFxEgq3WaLcsAAqaa5h4DSnzhzZJjJ6",
  "key14": "33Ex1URE8nGhPkYRX4GgE5xzoVSbefhGtUwdxKfH4f3BnKXKciFq7jxH3hZ7NPi3B47ha9AkoZVVhyo4cnLqvdj5",
  "key15": "57hgRNrHKbmoERd6cTXMseh66WUeDiUky18GyThDBrXDAkcv5Yqxgqx3BFNP3AWHJeUGHAP1Ms4XVub4khbuQobA",
  "key16": "5TTRVPhAjw6YZEHUwHAQi57KoTKTvQmrjskP4K4VLUNoTRjrDNqzPafn9xjpZBsThjrEMm3jgrSejoqgsJuKXWMW",
  "key17": "1wk7JH5rwqWxdMYyUzmin6BF6sDzZwY3Gsfy36SZ4oRBbeA7Mp1y8W82MxRSmMFhf8LnsB9h2nBnBHFETnAQg3p",
  "key18": "3F4F1vdG2M97JNAsGjzenqCV6d2MJwhEwQAhpikwAyMbiceNPQKBZHFhqNrgLK8P6F1HzcB1hLtAgzrNA2JrzhNL",
  "key19": "5G5CS9BrZFinxfoTxkYU6e5tfbHkoPwcvYfNMiBZZMyzXsU4UpcsvjyjqDT3w9yqv8W8cyLdobQkYHQCzBjuAfcd",
  "key20": "33yorySU4s19ZSM5yMqeJSCj3BAURT1hhACbf97CwGmPxqRV9XwD9qE6uDK8hypw6dX6J722SGnSgGT5qgMGzCm1",
  "key21": "2aSiBvmnY6PRPxsXnHNGvRAVghXRGMyBAFhTWCkKSU8fGW5SmonVPJq6oeCGPQ56YXmpMGvo19UM7mGaDKipGbge",
  "key22": "3YpZicdrhhmdVxAjguM7S5V5FzRw9Qv3wySVVBWPjihiAzTY5w2wtTDfinZ1SwrVpxpgVbcineaKr3KiPJioFCsx",
  "key23": "2khvKNReMie6sn8nXL8MNXaTn75reUcqr9cpafnhYfch2b2RQWoVpfEmsNLSLSuvuG3cU74RFS8nmzrJWzq6K9dS",
  "key24": "5mYno4LfhFsHkHtkQgZG4d2hP4Ztc9xfVNd36LFAo3CxJFhDi7rC1nrRR4yeQ2jwo2Q8ZHEsuS8MXJ62bcwBZyv",
  "key25": "2zUb2t19kwNRqJTajE4Qi5oN6CjBffzVW7ziFj3FRUePh4fCWUUzoi3k83as6XgxTVsaWPS9tdF1vY2zRSS6AdSd"
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
