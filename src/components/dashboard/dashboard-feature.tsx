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
    "3w7uiaT2U5cLY8BVe1jyLotTgxt7jqoJpiFKaUkaNe4Ft7SuRPnHdFH4FszVVSQjYHq8yMTfVW92D4uTLoWSrYWY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wDFCuzFeedqqVTGMeqvepEy7cEXcD2bPin3n37EnrBq1nPRktuwzBts1d9nFokTEpksLDGPAMjuMi3bxDw7rYzR",
  "key1": "4KY5KoB1CxxmZWhZ9dwAp9AwZwwpeVya8w7fEgHQ3SNd5eCF1pnCSpxPqDA7ycTDNxTU2nZo7TVvV2GToYs12ZGT",
  "key2": "5VfLjtzYAU6F2sBNMz5o3XvbULjKGViazpiu1XxpaQdf8ehvyk7WGuooqtwnfek9vE3nyKiBpAnS2tbGe8hjcnsD",
  "key3": "5fzRdubrLu8eXWfchxfQqfZ7FM3zTqrFX7XW18jtk46Ba2f5Gq6E3j21oPrQxkQRMjedhqbGzBiJspg2RSjHMaWG",
  "key4": "gAr6ojQyH73drCwaYNFeiUWfMFmEa4mKhriyD7Qwcpme9z23GvK6XiasxsxYnKzCQH8JQhGLW3iX95Mpyy4i3sZ",
  "key5": "4ERXMq9sZ9QGiWfFwecDPcLdsa57Ns9dbfDDFS5zZAQCfyzYUcWRV5fybN5uiM2UZeDHLXWMKVt37Ghadz4uJV2T",
  "key6": "NvYeNYjMMeMKTi1oHMHiEULjkeyhFjrevw853PoNXR1zAmD6uXDBRgiGCNq7KckoX1E9NCpnrxVYLHJs4vDRRw6",
  "key7": "3jZ6KdWurBgV3Rk2HuFznLb69EPFNyRtrdhZrbjifXayjN8aoX2tZERN2RE1rt3Jh7pidLEojqRGKZSUmWH945UC",
  "key8": "3cjLbzV7ao1D4A32CAsRbKDGdczZsNtM8Zh2Wben6cYBHx7D13f8pmLwR43AninNtWuPkaZbupduRormWG5n881K",
  "key9": "5mrZyr2EpDoSjQ9K4PwVviGQWuRpD1xwrGo5oiiNaPK7MCSaaxwoDWTd7N152C9TFMehh64ybEPisLX2xCo91mBu",
  "key10": "2ftFHD3ciZT2vujpbfZBckQhi8f3dxve8HQcJKkc4A2G17S2LdaqbB7gr1PR1DSjqYYMDj6g8DfHU8WKNCXTQQSJ",
  "key11": "2ZSWDT3gKKFq3GZNt2qBg2bsApJSWtaffFELjEn8HdSRuyw8Rqn5QBk7q9EotU1ZVqG99cEeH8DnctUefU7jRqtB",
  "key12": "5c6eqYammUeh9Bugcx7Nv2Jkc46sauZR3V13C7pt8dYe8ybWXYk5j8exNVNVtYdBC3WbG6bzLHLo2KGYPNtq2rGk",
  "key13": "qqTsEq3PmzRFjKgD36JUuEFbuku6aPLRJVd3LWs3wjpJ9rYkk68d2QfmFhnmmNYaAMT9USCDxv6NtortPZrPUUn",
  "key14": "3rd8PND7VuwMRjMJApGjzixtPdnJ3HVx4vGaWBqGCRZnDRdVVpsn5eZbo92nYLADPm9KaX3kT635CdVyZE8XePvf",
  "key15": "5rZxSyQ1Pczqr8bwDurtHSaJc44am1ZbQq2bjLeR8f1jPNCXZL4JxGcWVvRA37kr6ecSG5KdVuWp2oNBtujHHeu2",
  "key16": "5zwXp2LMSeg6mYKnJJnspU5ACrEUFYkecQtUJwSHVRw5TqzAA3b98hc4KJxRQ64QiNprR92jJ8wEjE7TdSWex6Sn",
  "key17": "3by1tRUorbfM3ZtS31oobjou7vX5Knqn8o3NBzNSSVGCeTDNhVhqXFDqwFuNNyDnnDNPApvQyM8qX9GsijXgvbo4",
  "key18": "294qe2kmvT98JB4wGFkJcgjA74QjHeCumeS1RGVh8yAoVcVfKTp6KmnJMBskAmrQytkum6mm17ZbF4u7hkJo24A2",
  "key19": "3ec2MsXaLH6netrjZsHeUWJZv9hQYQiHHnrjGSJUQtUomCrDEg8qLMhNAHPChYfBsxxrHSTSvjdYayjQ8SK8FVQY",
  "key20": "4HzuJdWKJxnEa4npCTtAfdz4YfboToCH9hoeYZEnogWpQCYBewEBKL6QrLynif39w7RRfnmhV8TjZybDRK5wTEEt",
  "key21": "GzJXh3RF1VynjSxs9nRGEfAucxhiwRttxQHiDQeNzLDjNg7XTVhDaDm85LbppRFH1g5WWWNkFBdgGCQ7EczPzZ1",
  "key22": "29Sk1eHHcFtSHCqMi5B1Dd8uiLaCuFqVY6MmWw3yJJQxFcMsJjFhTx9AnGU4o49Zw8etC4XYTxKXG9Hmch9GRzoR",
  "key23": "5ggYeia759SghxjzWHRCRds4e9NyHJpwFGNqQDDHtb6cr62wBadnNbyrhMmv1rAnXxDFhBaVK3qjk49GobjnZBh8",
  "key24": "2L5Aprr9k736jSsNBRMi93bXTLdKvAAp6FPDVtwKi7nU4tmAb2uCstLjTz4Fa46LRQ39UxdiW4GZPMNcVDpomRvy",
  "key25": "5kns6ZoSg6WNZrsGmAWKYxavkjnWrYnUVENsXAZVg5kiPpdYBBfJERW6idgx2JrU6eaTfGhXGxwTqBCobiXZzcAb",
  "key26": "v72eAYpXibMM4CjA4cGt2uk8kmMFqkhPuAsCRNvf5yGgCH99aHyAGBw2MMwnBxC7XPcZDfAXU3Pa2vWVCYSGoGf",
  "key27": "51Bu5yjmy8J8d3px7CeacSWQaxMFmT8F8HS9KZ8LDo8X5dpCEEJ9SzPd8XyYnR794Nuf1o1iPU65mgFpsHunzofS",
  "key28": "63EirX7Fp7AscWNsh4Vh3r2UWxnLsjAhbpP4c74s143cNry3wrpqR1wUiagUmXnbt62jyRihRfQL1JDpoSTs297a",
  "key29": "4cSa5GhUYdKtJuVZAnAC1awoEyuoZkTURboBg7X9oEbgxvRLwdooTcQ9h3iiQSvT6LdEgm683dLdoqG2bUXpLXwR",
  "key30": "3tarE4s5GFvH9JJSo5c4HhgCRGMnGDJuUCFMoXrWxdiVeJ4roHCnX66zetkMpWdUPRSAhPf3w4uDpuxBn8c2D2AY",
  "key31": "W4ss52mjMfSZf1VqxZ5W65EaLmP4vQSDHiAHfQkW7GvoyuJKaP8PiFTR6e7hiZhGZeobVC1sAgyfjyXK9xbEWZq",
  "key32": "5Jc7EnDcV3FX56o4eScUwUdqLTftn9KNGs4hu5MDTB8TywAyUKv8Bkpa2ftzc8KQ95JxhMbABpGAJXLi5B19xcBu",
  "key33": "2vVyid3vZ2kQtErzRVsUYfXgaXb7z5pqFFdTVHK6iGQdxdcAdNEjYgLkPjobteMXBkWGv6iLBixwqF3w1UD7PcmD",
  "key34": "39ddReJxQwR7owKDeCuZq1LCsd8AZj17tjLwb57UHZYmWZdTLmBPmvc6RisvkKMDKqPrVqdbuXdbUqfmghRwhxZF",
  "key35": "28LEeVo6A96DxBvVLSXdxm7763sMDKnGntf7T7AHWTS9wSzQnkJTuWqkzCea7nE93WWKjAVn6WCBaNqgdf8M8jYr"
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
