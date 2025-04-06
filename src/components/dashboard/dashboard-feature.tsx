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
    "2v6UXnBrhtRoa51VuHbWYHZBCjcvnfBHEhwL3TTCLTS4VXjUGUmAe86GYdVg7XT1EP1D4UXi4wCxdqXnCzZiQCkL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KnEkfZ7vyH9LfSqkY9GJsUL1hsh1waQdjXDYQEr82VAiBFQR4bLvCwciNuwzp1oVujm6M8exoErLaUDQzGLEucg",
  "key1": "5zKRjTqC6euUru7jqYczYLCohwxH56vDNVDh6nVeJ2sYzEQuTzhvroR1g2SUqmnX3LMmXf5jttm5kEknt1DzCP6v",
  "key2": "4ZHooPNdVqsKwPPKf2sHHSJRZAfrg4PBQGMqSkiGQBivMCXXqvokZ3HZeczpM7XRo9DYVNZb149MbEZCJ5Fye1QA",
  "key3": "28iGVUUZMVbKX9qTnh8EcbGTVbwg5D1WViBnw6aAPU2XMVphhexp6ia45oPYwraoJVj4vpvZu28sABS1CYQbmxU2",
  "key4": "eGCKng6Hc9KfqUbktLry9KLVUQZWHhLDmT5EVfSWfx7vsrzdSkLTtWzzfh9wRm7TQ9wCMNu6dahygTC6QRvU1U4",
  "key5": "3xggXtHsrGfPjVBYdTqaAUs36iCVjmMaq7HqdYPJZQ169obeTN59faJVyhhj3dgzp8UFPdGkaNPy6yWdpjn8JmE4",
  "key6": "25K4MTBNVE9NJPbuNwq4EzXhQyU8uQmoHZgsSENCSJWigxnXYhYyyaAKidLCqQmrfrkNfTgyxHDAaFaXy8hyJgY2",
  "key7": "3Zknn6WdNvw8JZdtyg92rYFPDBMYYWDypAdJZv8BTuB9hugWLwc154a9uhYjZe4iuVg7KUT9FtrdbFXQ1XDNmkuZ",
  "key8": "5HG1TKDYiWbupjgtvhNKcMXe8M13SmPrnnLLzawPL6JXqzgQ8AiWvoCTDyrraK1YJrnACXNhKA26Lh1hCmBs4N5G",
  "key9": "5sqMchNzQFw78TqrpC7qL8FiL34Z5gYbW67VbCoT49B8VN985ZPaBewQgChoi6S9MHaVMRuWtmyyEzs2pPky3A1f",
  "key10": "6w1XhqUMjGmVkc4NV3gn8a5HBnd9W1sDNSvKRbDWLjDX5WyR4GqBRAboaczFxSWvp6tGvZLyfEsKHFvMC4MGf2A",
  "key11": "4UJgNFsFk3r83UNyMTMG7zrGhFaWgXgB5EHaPVnpaMRT3LbUKJGcQXVNuGx6r9dvVWrGFjwn2fgmkNUjoFBFxgxR",
  "key12": "3ZSeuxNzKRd2rgii8692eH2vwnn9Qgn9iLv5DQoLHHQe7Cz2HChe7ptSXfmr8FXso9m2qNu5a6tJxJDhQcXV34Yr",
  "key13": "ftgUdYLSMCQ6UNNfhhrfzjedkLM4XnGtJh3gFrhSQ3LH4ygHkPpCmGWZG3bXpWJHnprA2D7XaoKTF6EfRBscZNc",
  "key14": "5Fj6aFY4SMebUBKnQeNMhD3XFrpyzQCEvjJmxMZ2SPhJA26HxQM2A5kmbvg2CDuE6nREkopbLeLnKmTEcZR2ddJ1",
  "key15": "5nQ6hqz6JxqsphjHcpqWC4sQvttSk8L4HCDUvaya7F6wYJeHdKfyC495LWcwoRQroLnpE2UQNATkT1xFAo49GHsX",
  "key16": "3aqknucLPTnN3nNM2FUSvch6eCFSBYfE2y8uViDyH2XTmmS1G9iXEaQNZkSGFaYNmHjy7PXaJrf15c2iet9YhyTs",
  "key17": "4fKdfPZce82oFy9H4Rfkroj4KSu8PfJ19mCWR5e8MUUqybHrcBCZPQbdvmYeD42yszBx4FQBxRS59R4uUZjC5SwC",
  "key18": "4XTeER86pFgixHBxmbJpspRQmxeLGsAWj1b94ti6CMDPvoLy96wM8xiq4rt4ud6sfPh5NWeRsQ2ze8K35gibeNrd",
  "key19": "2KcrRRhCFJa4FkpnVzB6GpSJFzYyM6vSPinNezTkG2CKNy65GBoAb2aFBSaXoAH6EW7LwbLBwB3WoVgw58s6yNdY",
  "key20": "YNnbkjxc8PYqRdV6CBsAajfWo3mcGUjMcHjUCPpnYF3swWBwKdyeRLjCgKZUoqiZhokc3mCyV73iCRMryqjgFEp",
  "key21": "4uQvR58AQteibd1ZiWGNg7Tmqzq71jhjT8xYheVdQBeEgZWeUj2Zmw6581LmcMDN8xvse86UTxJhZRY2XQGGZrfS",
  "key22": "5suhak135PdbHN67xcGBpij56D1d4LoyRm9MpvxdnpRfNp8ahE4s379ZVMNRApkjpMEgW3vx6kq6U5RxYpAm1cd2",
  "key23": "5hPd8F6ve1vWNZsedfWGtp21UPBfBkvaUXyYopQhk3JYi3iKpSvgyWJqePGsQrsnbsZ8iD9AuQbakyhifsjzCSKE",
  "key24": "4C4XxL8KsASLbTrvsvGJAUoPYd12DLZYeFme1TUt6VGspo54w9BYTQpnv5rcj6DK4P6X8ntUAb8vJkzHCnsWmzSw",
  "key25": "5SsN5Lsnixm9nMteyNeXnHtGA8tYzwDLmw7Qf9W9JRqCKacBCCbvip8BVQdxE5mYJseuk1NZ16tYCnjRje5UXrB7",
  "key26": "22TvkPXJpnxCKhsCSXtMLFiqTWq2exkc2S2ob7uDExgaWCoA9W5Y16SN97wULpXNFQXPfdXMjzR389zjRvBHVwjp",
  "key27": "DCDQ7FuoRKSs2mBPx7w5cBqetYykmnXPNkEYETJeAZqRVx6oNjcRALSjaWY2XUa6vADATEE5vty6E1iQEpM6CZj",
  "key28": "4WPHT1dosHoEdb4vSJuycR4EHXHCj3J5XtUSJ4gRGbef5tdSETtQ9MQhP4okNYA56FnTG6DaT2jFRm2tt7j3heDn",
  "key29": "5eQ5tnnJV2HP9HVffqbhJdjtPGT65KnE81nLihpDwPf7CwwJjMWWJBQy4NJug1aizA82pAXq18c3e7z8aPH8FNG4"
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
