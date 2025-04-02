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
    "2LrJF9xGR1nPAjk6jB3wYuGNCeR1VQ8z9x9QGtnzjwrJJ4JeWBypw5SkFrXWtcUj9qWuqmjrbUe9NbF1Y13qek62"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SrhBBXQMFoVYP2ueQDoEuZPkyR3ar7DHis9MQErc6y4iz8NUoNWxbpZ4czf4hftQ5MpkqxLafhyxDwp5Fkna4s2",
  "key1": "2sB3LYDCZKbizcwqemYdVFtHrRogjB8uMdM5fL53H3k4MrneE6PHKtpkDJujKnuPucnNpT8qGKoTaD9PEyyG1boo",
  "key2": "4cpbx5HCPhwTLTYpFGuEGhsB323yLvkQ5jTgtXkssB7YnBSswSK4EKxgNMv6sim7Tj3ZQRbtq2Hw6tQ7c5WHrgzt",
  "key3": "23kampMZ7kAC9EF86vhNVy49E1QoQVCFVWNmw4S2uthWZ38RJgGGsXkpeEMK5nksyyiT4cDYajrQ1sfkUyJ2h2fZ",
  "key4": "2gcrJ3ocir2eB8DRZQ1pWiMz9xm4tL2orQD69AVaPVymPkt91wqcFzAeTcL2Fvnk2RG8tMkRDeqdg98V5VLvGUkD",
  "key5": "22vMcBaYphbTzKhvaTuJ78iknJFK2szJCien9XvncR5UnFdFjpEgAgvsFe8qwkQgA5dF9MSMbrBz1z22UWXPVA5o",
  "key6": "4PCWih8y9pubK7fTtqqRQsbeGSHcATKwtwRAXjn2YjnAteap8gmBwC9Xbxp5QVwkAMJKct9Y6ZM3FVJgXDbMNgq6",
  "key7": "4z5QtZA3uZGW4S7yhhVDx4j94vfGCDpjLb7QQVVQmVWGHGD4gEf12jBHvEizLLta2yUVBDLmoTGRVT7cT3rAwLUV",
  "key8": "3B6U5yCJvk1B6Re3TvdFbahQkobfWnDrj9mM1hQKsRUdKyiSR4j6GAjvBQdYpHxY7oSq7bmU6kjDHLYPCJkE7qPp",
  "key9": "3z3kB54G4EEvxXy1vvQLU4jncfByJ8L6NXubbX4ct4EzYWyNhdsMwyLBtiq4EiSkLGApyep4KNT4jMuBtRyb8mts",
  "key10": "2QVVEXu5rYJD8PBmCwWLyR5BnD1CdQqzQj7f7iPnAwuLTNb7qmSEXLXC761S1jKc2TfM6hvVKoTX4L27z4CQkYxJ",
  "key11": "494TXJJeZroXK3DgLfJJaWqisETQvAi3EaXdt9fTnDUsZzV1yy7tVx45XExXMMDecA4FCZj3QV6JyEtkayaABE1M",
  "key12": "3qXuYS3hhmrzEhTt5TrNyZu6M6ESouCjBp3vgtMbEeyUY9ptcNM3YGTAV7cXKUXvLb6jjQDLRdAmVCjLXoHUsEo9",
  "key13": "5QJVLfug2u9Lu5eSfjSiMzKgiVhAZR9dGpxYkS22tLJ5AisGVW83r5C1FF9G7sePX4uNNWCSnB9nj15d8ZdLiJBV",
  "key14": "45FFLtdSL2X7xkTnhEN7xeiUg1iu4AviBTET3heg6T14zb3fnUZ8ZxxEXA3KxhggGMAKENDrCm23ZTbnxz3gn8FN",
  "key15": "3HxfyjcRz2A6y6EjpyjhBRyQTHnNcKMQyDbP6qQ55RJU3oyppUAzoHMXCv7iQbZna9eJoswaNvq1rMfeP9X8d1Z2",
  "key16": "4BEEinCtMJBefmFCYh5CuL3wcDGX93TCFJKX9juUanvxE9hcGfFSyaWFyxZsU8NjZv2uicTBMurpvHHfvbZi7wdL",
  "key17": "2EQPiMoLGUS8aD356rqfz4xcKV4EuQGJqk33oFU3A124eeicQBXB5UKHu68tLNzd7HBYrLKrHaZ3MbXPw4xtkViR",
  "key18": "5qw7amz9WZsUELbNUrLsNzeCLqocksLBj6FS1iVVFmZv5U7Fp1WUXQH2xqHnaboSFpt8uJeYCzZoqhDEYtrE3zRF",
  "key19": "2y5JLNp5UjM61zGRtDJyNGgEMj4QgFsqHti162z79vxf6JkfwcYZ9NCokHR6FPEauqP6gtNv4gSTsGLGcXoq6jER",
  "key20": "4Jrrcbduw82VG1hPi4jpmNcY2z15e32uXxwhNGXaK1P7GMiTUNjHFMyGMeTapSv1nnxSCT3mgzrkQykZTxcTia9R",
  "key21": "y5Z1AUKeviqFoRyQjoq4fZbTUzNbS7wzQ5VDRZNuFu6EANJqmabhFBeMba9jpcbxVz8Lx5nrk8n7vzMMeP2ctoy",
  "key22": "3WPGkojZFS56ww5MRjQtsHTYYoTexphm5BFUsU9boijqoSSwnmvjkwKUVcnWqXtpTZrkF5h3YeU7z7KKdvwZutmy",
  "key23": "4mecmcFFtbb8xanyy9T9CiEfcq51bfcJtaf14MYmxSk7xXk6iBycWJSbMQkFWDaWfmhzgXKp7E8rLX588XUJRbUa",
  "key24": "4sVoVNzoL2T7JhvfAYomqKYio8s29khgcPrj9Wby8B6oTMfsFqnB5sgnLbeGeeHWsXeKhUJzAoS2r4h7FsZ3uAr3",
  "key25": "5aYX3nHpeee5WPAgGcEHrKBh4PJekQLF4tc6GF6GyQNsdH4MuRUKkSNcgMnbcAPcLfzCyQvNPpeACSS3tSJUzgPy",
  "key26": "4esUxMg2a6xWysMhdSPkxVxtKRzCuSKbvoXMrcHy5C7AjBQfe6CDW1tWmoqVWRzS6MJ7A4gEUDHvm3nK9ahBqG7Y",
  "key27": "4Fw2fbt66tttoLa9JpnyzHMePXLQxkswcXs84P7TmyuKD9sZgxjwcqP9mhE5bzHYTkFA4gFYVocj6FYPKnER7mA4",
  "key28": "2avEWdyPbhXMvhSpVXpS9H8XjUhbGpsmWhKVheeqSg5bny6b7tD7aooiEbyA6wPCxhcNZuxqgMbhEp9YnuwoxaQ8",
  "key29": "2topWU94Cy4PScf2iR1oKSopMUhMFCE8WsepPgiHU4yAzt16EyofVPaPwgmVrfMwrFVWsShqbApApAAXhrWWQ4F4",
  "key30": "2F1fShekMm1B2Ctjcar33JRuAEKUVtTmw5hYJQ9oBLA6VtMnPHMNgmUrChw1sy7gLsAwwyMx7waNJrS2ZnUbTzLu",
  "key31": "3fAeqkwvwNKCwfMvEZThpj8gjLwkBFBy4tGprt5xGuP1RazDmFKWjgKaafZ5H3VBhmvLSS8TAdyQhFYpnbPEJUrA",
  "key32": "3QNenWSnuuGBTMzw1Dag53Z3WJBLpNhWWLwSBcNZSQFXKEpKLJLmrWeurSfnMkz84hc4KPk8Fnm4UsJCt5nJn6qv",
  "key33": "2zM9dAahKEN8GzjANSthKTeA5kA1brm5Bodmv5RD3Y8gnzHauqwEDQey8BAKMU673fN5hYaZLDbc951FydDMjX2H",
  "key34": "jHGPmsUy1W16WHZFADv1FcCcD86D8kRLPLL3eeugTMWfXihWpgs51ibrxgCYHL3spWpvYgwNvVtiqvKjTkZW7SC",
  "key35": "3FBLVh59bKZPJREaQJAnZBLNs6u7oavSy95BwTW3nAJK78s2VpwyGXGaDUG1dmdcsvfF9tjMq2X95B7MJSNZ1o8z",
  "key36": "3h32H2oV8sqw5k3iayXPXQnacWgChPQZCh1ewRVA1VMhjr9LeyALfnfrVvjMRJhUbKb9q5RwDHRkY8n3Q2DEgcDo"
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
