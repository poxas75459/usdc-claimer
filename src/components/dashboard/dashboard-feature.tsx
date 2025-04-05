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
    "2kWvqXwfUjGrHqKgpcgprkaV6Cbs1iKQpen4UzrQKUua7VZqu2YKUvDsoXcEArXqRiFFdydcfJzwMXEam3caCq8N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56n69h1zdp7Yaj2ZHD3YEk6rm3GL3zUSXyHzYM3SqhfWZ1wMbhWAPDEcrkxGQ3SWmc3S7K5AYCQUiriVjXiSBJih",
  "key1": "2qYD3TtFEh4zLMjdj1nBMDkT3aYYcDVb6kgZhYSzbRJ8twCKxkC7mmouxtPN3xP3JgTYch7dQtwEkhcUvWQEWv3K",
  "key2": "5fo7tL49UKWz22M6tq3KDkq34LSw2EqMogrGDBTRw3xL7rwuT3DMYud1Gv6VpaP3CYEAcjR1M4VRtdU1NMJdjad5",
  "key3": "5CiRoWuGjtw2FfavApgUCEBDpsX1KEfubVVHrkqBfDMRCDqbj7Ct1ac8zcYcG3jwT9a2z3KqfCoTdKtqkT2WiVnW",
  "key4": "63ffqTUsm6T5ScH8XVGNuzUHCpQ9fvyZgfataosjJzwVBGQTyXmp6gASTKkoBCjExNoHxHC3PHLNprknfWQS3azd",
  "key5": "Wc58bUuN35WTKfZQ9s48PdYAhxFBAn9jNhUWbrGHNL9QYh2ueKPV2tt41C1Zotz6g9xpRXfvRq3hVNnX8ULjcx6",
  "key6": "yJoY7UQX2isJMxz8H6vZVs2wnJrR8T1mWtTTkRUxuvnjpqTSUiCzPR51TuTLKwvpzXQfD4rKXraKAXuSFxoWL5B",
  "key7": "47b8NkBoYBsFjo9XpCTJdtbUWZBY9bv2tK1Csk2aQJ6vfEypgeRyNCZ3Si5GxWAoxRQ5XromCLerzV2Fsn1aoGbU",
  "key8": "39xoirK2YdwiN8h7tHk8vubM3RgMEQVvQbet5iTQDHnb6kZYjvNYscBABvgv6XgzxjyciS2nowQKCqxpUfSWTrrg",
  "key9": "5MzRv1VFdGppg1wsvrUNMcL8ojXc3fvfmqkLzcLc621zPuVg4VfqgsmmhGa72EEA57RAQuSwELTdYyVHT138sGDy",
  "key10": "2T8gtfkygTkoiwjvAh7KAvMAoyscMvTpf7t2Ci7aujJZM52b2UxkqtMidM4a47PZs8QTjEjq4tU9Y3VukzBNYcmF",
  "key11": "3p5Pm9tMdDpsv49CfvwrUP5BVFsQ1BmVU3opHZeniGnQmuhbcpEQ96Q4kfFwm8DvC3H15erQdedbthKVrm9Kih4W",
  "key12": "52HPeNqVjfwKFDfoAVHsaB5coUEZoaHpd2eUrDpaxysE1GxnamT8p6aDPTFH1z31M5dDbxEp33JjudJnCMrTGfTZ",
  "key13": "2ayfFP3MuKMben7b4rCTNhX92J5FBYjXJ3WEiKXLNaVm8yTV8kdvcH6QXJBRM7Z2SPp4EqTd6WyYu45HcrRiLhoB",
  "key14": "YD5EswxHbaaNyrEek3AETpCdd83FjffZirFG6WRea45csveb37FWcwiWdRpCQR1AWE3SqDbkK3uQxVHia6jvQbZ",
  "key15": "4ypPNUumH6Nse6ftb7mK3o3cJiiYUVWFiyXK8ykgAMQVxhvt5iCU6HBJrZEntwJGwJMowyUVXFecHY9p9QZencgX",
  "key16": "4tESp8d7UtcBheaUmtYWge2PjBm8GymdTkQSAkk8mvSEqpi3JryPvyhNpxV6ietzzgEAcNVTaRLhnpAdhjVt4Z7J",
  "key17": "63kunbKUTx4NhtzFieXBYMKZANXTnGVCbiPSVCdLdgg46mtMjiY7xXLA5j8TtGvesG3aMZ51JgfhEkcrMae5C3PG",
  "key18": "2Us2qZVbtxSqXoaEVKgADwsocibgTwocebLMypm9PWRChy72KpkYNVKHYgm591BZwynKdE2L9L5xWW3uffBqGdcv",
  "key19": "4hySfFXuQ6sPoTiy58h6aMG8JMeHrWbF7UEhkTinhChxoB8cy2DRaKxVuiSrnyoPPCrdinVLj51J12zSR4AKkLKh",
  "key20": "ZVRvq2aNJNxQe42C2EfaEhQzdiJ6Gb97sfRmb2nD5w8LcqoN5dzydDf54gs8iVXFXQbUbHBFeFCrpzmcbWqNg4P",
  "key21": "g69Ctv1Wa2oa46jDS6QgXQ7UnHMb7MUyCHhM9VccJ1tSSCRDkMzrnSBfC1fD6hCEn9Zi7VUQAr3cQG5HEbkhXtV",
  "key22": "4XWQecqEDQdj9t9sMm5VBgH8zRsUAmdKp1zYLnHrXhXD4yxnBis8yDg2YFsN9ZGseYeGiZgc2bK4fjyHuD66yVCR",
  "key23": "2szLP15fvb2Saw6HWAdEvyxVBL5Ag8mCzDWS6LXEEh2Py1AqgMfzcSxnuzWBR7eY3iTgpqTcr5gfVBvcJx8cpTCK",
  "key24": "2XkcTtJroukTsAVAmUuVWWSA1XXGhzzaPeFvLDQZVFrjNU5jTMoKHYuQdZ867FFzWK1FwREgcodx9hsLcghihBHK",
  "key25": "5rt1f6yDaiJiULFszzueWs56J96x3MiNTw1djtjJJCyYrRKFoEoLhBHETN7kxXrQMf3b94TjZb8ZT3QDNbTTYerg",
  "key26": "51m9p7ajEZu6y9HmnEBFZ43EiK5k9xaLYEeNE1t8Vkz7v74fweTJE81P1WzLboKgXyGiW4NRiAt9Q44qLVxuqgGm",
  "key27": "244iQm4ZAaBTu5qxrpWFt1CLbFdthmjRnNb3WVrXn1ijKRrpTJs4JULenN3wQ4CzThD8DwBCLzW3MMovDjdAUhiu",
  "key28": "4ND3kF6Cz9FJdgJSsX4KMupAASYDx9bwwdWtg95r41g4CkbjEhChsHvjq8HyCdRjvR1ahpzfvEF9LedPCe5RpJdG",
  "key29": "2Jc8Hd6dD3hNdeMeg6bSWwLcwQAjfyXNF7npz9qXw5BpzyuBmyNyCRiktFguN1zurVqnauMVzmQfje1uzMtd1cnR",
  "key30": "5aeyg3vN47ShUMK21MLt4AB79NTprf9y3B42wCbc9BpwCn2L79Bjv3w1LmfjCyuoSj8QutTs7UBhDqNuGhUHoDR4",
  "key31": "2YAU7i4ReV7FSi5vVYV4xUtNXEnB4Z6o7DwUx5RJ9RQbenUUx4m2ycK4nMGgnJKhVkjGncfMgy1w91HSw1XzWLBf",
  "key32": "2dZzha7KEVYEbgcR6BZe42sozRA9auiJAXdLezN1rXAWeD9acBDoAxEsgdyi5FoWrHP7qXx3tCtRpsY69eTi5Drp",
  "key33": "55dp5BG5E9G6fi1NzX7zEpvKUGVzmMnKPjZVnyzjuY3yvFq3SwggcPKzGNtBPy23g1pAhsrYsrGYQeR1fTo2PXUi",
  "key34": "9eWH14DcK4i8PeGR9gaV8DUFZvm5B814BzDmDzkcxUwjrXQYHv48YA7dZEk2mQYpFEQtP4eDoVRgmZkyiWGMKV8",
  "key35": "2kW826C3Zo6widB1X6tG4eYpiXPp41aQCGRdHJk8wPEFRBstc6oTKHvADCB4Nb3dRnVZqt2e3z7sQB7kpKULcjFC",
  "key36": "DpSUGZPYfA1zG9t76BZkUkYxz6BME4GFAFX4oU8ZeJtMUJL6hWK4szhjDN7C8wEHydygxtLgY8SsSDbLanoMAYc",
  "key37": "65HkHWHaPxxhfPgNKwxyKAPQKo15mHMZvawvXLjkoqURVk42SFt8ZVg85MNpz7fAXXT8yAZbKo8L3GrEnF8ECv1T",
  "key38": "4pnyCZ8vBwoGx4ZukcY2YbrhL3XzoAy9KALYsM7qYpp6xv8WRi58bJhjohQgNhfR6mzZxPaEgnqMAeWWfkLA2UNV",
  "key39": "29pNixcJ6tycen2N1qdfrfsUFk1aZt7yYFJM4DktRSe5qBmARwpkrqJdnxqitmzdWaRdrrt76oVq7DgtUK5jxZKj",
  "key40": "47eCfc3FrPaCwfyHw6eSqX2wBrLzLbnmvYd1ccpUribJKPHbWXp9KngDfkFvDHtnqWcTR1T9uvQwq6aL5QxuGQTx",
  "key41": "2u2Bzhn4c2nf6T3SSpZun5kBJnpztuCEn8WiSJvuVjnwBnUspttiQPBDg5oCALN7Jzz8wMhvJKzrQTTmZNNobafU",
  "key42": "2JiMaSMVGV27c8be2LGtAVFcT2ZT9fCtW4JHFn5CdpsA4SATnB6vjRvgsZEeEdkhTd6TmGVvqzq2xgV8BBVpnCTd",
  "key43": "4CHuaJuVuy8vQdDCjNn2vd5qazft2G2WwQoHFNQeMbdnpJqayWMYiWeoffPdZmniF4bSmKegMZUuLbBGC2CXxTy",
  "key44": "3bRfJhX8VGBoNagyGxxP9YjvCnGkZMvyx5T7t2M4zezsajaopshZmhkGmmqz5aAUADctsdcvqVox3Y8Np9HKpL8L",
  "key45": "5JECphdQ84o55spzvYJVjeVs1MBXmAQ6gnXJ4n3bceFuwncYtTa2jCTz9MPGo2m8FJg1JCxefcKBTXoWTWfstofa"
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
