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
    "rehbbr2PofSQgwkzWXFh3FvcMRaK4F5xJbt6LKJr6rntAbUbCwGYii963L9WqGnuTZPSQeDQcPdn5LQLYi7Fqba"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X9hLHgAdJRarm9xrQEb3CWF4P7GDxfc6hpGzGtPFEyngE2b7K6D2mFff6h7NQVy2emeRveSevqD1mwDoCcX1eeR",
  "key1": "4aeqajmumtLjBxbWvYBS67Dj5G5bsAsXvF4KBKhqSqDZjWwWetwe8P5DrAfNiEKR1TRuPvbYEmFLcpxEYp67exno",
  "key2": "4HzWW1WsctoFYVXTMzYQPbdqfRDhuuT9BXUW2gWWinVaspvxEZGVuMVqwQzQPBGqWMC6H9yiW9YmJKi5jQwKBH4t",
  "key3": "4YVLhzuLDR2FMmKfVKzx94QKY9qF3s85nQYzz2VkZStSJ78nKkSncyjkcZF7XMYL7P1D511kcEkMYQdJYLyG1eUP",
  "key4": "3esigT3vK23nSksPxBAa1NTFLoTDLUT5mrtfes5mKMSzAQx1JSbgxoKqqq2aR68Rjwim4WbAwTb1FBWmAqXBecaE",
  "key5": "3RQPxyd7sQ9NPJ7x7wpRp36tLPaRG9VWHnJVQs2N5evxZNwYm178LXDvpT3r8K9z2kLp3DnAaHETU2XzpH2R3xMp",
  "key6": "6jQ3ioJQdjmjrAQnti5yRyunatQCzuHrV8QXcFAAgG13UNCSqKY2iep4xnjCpnrEc9m9YGVMKriTPrtRxzNtW4E",
  "key7": "QXuNV5yuPHGt6RaFJj5cF9vNC1b9JoefCwUkdLPk7TJmoHN1aGsuN23AMrxNGfuYUJfmT7HFhkfACZiP58ucrs4",
  "key8": "5R32PKiLBVxQo947bofjF9TrkNwirB1Fjq6vskKpUJHmdTA3r6pYuHkWdgLRoy1WJskWiZVcVLUZP1vtGWCVLANT",
  "key9": "A8QxrXfQscqGMAMs7MrV12WwhMq6CMPp37wF7A8bwoK4CDKiPY6DS7DJ3C85jQeYCBoQrKhMPf2fJHxX3uPijok",
  "key10": "4Ymyz8qJB94zASxNKd91wi5vK32PfX7xCWWxjR6ZFbivCjdfELiVhpd9jvX3riTXWLnXHbGQpaUMDsMHAhYr8ArR",
  "key11": "52hd4yp2SrH7zzUHhwHVeNM645KaAXrr9x4SP9PX2xifwE73sVS7myYKdquYTcLDqWNK9GPzQgYaLbqjHozwjHNC",
  "key12": "3QvQem7MCKQKzFNRrwPs9Fu8HmVBw3i7TbBpghpbyjGMDrUuRU19YdhRogZNTnYyRgTDKrCJP9NYRUxzVGv77MZA",
  "key13": "2bWnm4nrvN9WUj1LqQWDKrNoV5uazQo7suEcEc64oZAmYEibDa1ShJ63QjaYAJo7FjbLFeoVoctgR3VtEPZ1PZvf",
  "key14": "j6XYs6THgJffLsJh388UhXEpufEG1qoxALL8WjNEjGjCGVkfTZnPw5eNqfx4pTammqH4dk8FTKUDEPxDwetjcFu",
  "key15": "4Xr7FYFdxSYTSfkp9KX84ashkbKLiKioU63PhGbD2MMa5ZeZVpXcckaoECQWm3JK14F6TnzdAUANWuLjdYirwP2p",
  "key16": "3GVJwCRhjZij5H3wWJnNVjFnPaeADkqRH4mYNTBb4UWkRcjU8nrYpuqk1KU7QqgHuCHor6gMe7JnBGbZWpq7pyYQ",
  "key17": "FHBLAEp31DBzE2HXbsSKvFzPox8RSwpUAJs1Adf7KTM5MsLUiEQXoZMe74wfiCpJ4xADNvJ1jVFPJdy3djepV6g",
  "key18": "5qjAuEiZV3tteRSgpHyRRuc3dcvVAC65x3PUgB8Wg3imrQdRhBqFxKUVZGKiKJ1aNBiaTeCAUV7KkERF35rc5ay2",
  "key19": "3zh7CGYU8sCUrTqaeEKHgDek1bwPey5uUBowkPYWuaSWfRMUZ7qha1LX7hnr3V1AgAqUad9mbTYq2TtiGgnnNnUa",
  "key20": "5XsHUPrYvJHq4vhJRrkK8uDRbdGuGbwZpGSgt3ut4LstsxsYT7kQu9EEwoHEQW1j3jhMVBoc1UBHnHw9uJBpGKPu",
  "key21": "zG3qkj2xGVqiXHDmjf5G9ar24t6bHuXq2x5kqTUdLBgUDAE1GLX6d1seTYXPXyzZbtpv2CCzswXaWb5g93sHE95",
  "key22": "2rd2mf3HkBJwz939c9PrvLdP1d3j9QjN2Mgmz2GZhHE5vJhNMnLtEoYm2ESuVS3w8hUC9TakwrXj9AVGkFq6HBfs",
  "key23": "wZpLhu6A8eUqoJDcTiSpkJnM9ZadEQrMaCYMZ8wcfAGPtaUx7QXttGs8nJ5KxXBMwRugiJFziCY5sxqAxmgpw66",
  "key24": "vJUR682bk5bvqK5VoQ2JCC8fuj85u3LEkfrZXRzPd1Ejc4cMo8QoyGo7qDDP2EYomVEArpkXGR2id3SfibMVHZg",
  "key25": "3yAJ3nDQJ5WazswC2dKUFWZNAM7DxoC5i3ETBx7E1ZU3MnF6WKSHuyEcyMG4ZyvgxG7fMKDuEDbpoZZrR1jp4dch",
  "key26": "5RURfKnD2Nj5JpRQKZCpLjAe9dBmU5z5KQ6eY6oMA8LDitAH9C2hvHrn9sz9zprkoP9k1CHzYAkqJuBLjJJ4q2fC",
  "key27": "4AUzk5gaVGcHxisAmpyxLTn8nyx84S8WfYXKtZXJoeJuVvibHD3md4vKMpDFJzuAb49zz6JJGMhK5WpYBNgjBzw5",
  "key28": "2MoXHcoRRvtZL8zM1NzCRcoxW6xBmDFmP5tmUeYeZiRzmCTPvvPEqKqMrRZ7TZPkR3pzygcSFvw7C8KKVUE1qHGi",
  "key29": "2RGeJBuNQEoD7i22ShjZE6RSp9xnqcuKXkAM3mDN5mb3GsopxunckEdPA7w2i3EZ4RZjhuHP3YDdNwiRcjpWagqc",
  "key30": "3tiFVu3M6YTsskkUnmtvCQ48XyTj7kp5q83o7UdKsRN3g5vqA5eiXzgRxsUe3XxwCg7qvBBKbWvisBbGDwVwxvuH",
  "key31": "58dyEFy4cPXQYQEqyR9jKrAy2MtFN8RsiueHBVovU29jHX4znvumf67TiR42YwAMMFwphzTkLnGAaw7BXV68Tcr7",
  "key32": "4Tqs5Y9A4oYY1XMyPkqMRgjwAtM1Q5efnFjhcJAhDeujTJtwGumUYfK4UJCcf3iP861wgoz9YcK9VUNMAcHbZg9b",
  "key33": "5oCFsc9BChW2FRRaeprK82auBu4PnRPjz8EnkxHgUPSx1YyHzWYf6js8VTtnR5aoongWfb99da1JVoLfjSjYdYo3",
  "key34": "5sarbVTkW63xDiQ9q6DhNnRGGaQLrY8ZcK6hD19kogxYpn3H35BBXB9ndGedqUmYWYKqU3qkeo4bc1zY2jAha43a",
  "key35": "5XyygYmYc5enE8EzbkYWmo9YkN6g4cXqnPZiEKXSqXCSr6cJyXoRu8qrWk78cX6JNgmxweYSyiYz8iDVzr96612Q",
  "key36": "4bfSUjCTD2qfQd3Qp1gwCKQ2fM7fCLWmoncg79F3LJY7AXrgqEv4nhEgWfANFPDJipKMwNLsfsK8P2qV3AwiTBnx"
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
