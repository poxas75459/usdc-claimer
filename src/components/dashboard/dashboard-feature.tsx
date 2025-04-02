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
    "5qReAZ6tGpZsZ7RCpmYE5YThRK7tBNKkUBPNmDqH3514ETkpGuXY1T1dby14SnGyVPYEPmya9fpT7Kxd4QmSwt1J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TrH9ErhFmisZ8c1R1UEQAfhXH4hWssFSsgKrLyax93pwps4vLy9SyvMseBXYhbsQkf6N5whLQAN3FyW4LinHXQt",
  "key1": "2guS36ZXva8KbQLJQkda25wwzp5GcYmdnxuJR2AjoHJiiHKM7m42aYsRevZ1wCyVMwyLKhehK6MgsgNb8GPhGQ9z",
  "key2": "R1DtQGzrvQhpFLQwyoTgzEeAaceKrxQrmbTHU7e4DBFHXnkg1u2jygB8rEacSgUybcSc7FZaJj41T72DDaqRaME",
  "key3": "3SjwGVHxV3FeG8gfHXEd73ucQNWwSqvp4AjtX2dfKA8rkYwTT75iCcbbNr8uUCCfD6nMQxecKTaz9YcTafCVNpxE",
  "key4": "4vriVEkFcQxYu1VzESwPMhCCK5JHbajApkSCefChQo7hf2cghwBU7ikEm6aUnUcqqxVgYTy576KPu5sedaMkd4pr",
  "key5": "2ux9HQ3wgXaW82wJAsxkscRcQK9A4L68dH2hTQX7W7iRBe6BVWhagwdSou4EkMTNwirhk2rz4q36Yte9aHDFkBTQ",
  "key6": "uqPJtjrF1rDQVQrU7Vxq1EGbBFRppmRcq5vJjXojpF863JepSQKDHbMKeQxfbryYnNUQf2SzJQjMbyEwJQ8FhcL",
  "key7": "3r36W7DAMN1go2pfKJB7C7Yp7o1oWRm4yV92jMyznEAj7BuKSY6H5PMc3DGjGUf9jgmgqrpG5i8YQ1pcpA6wPvsb",
  "key8": "5kjjAvoLhoUrWmAhBnX9j1Azj8QVmbm3RnA9QM4LWdjvZk65UiN1FpwuhR3xqgK9YsSA5z31iABtNp3G5cUjhvky",
  "key9": "3PCBzPw3ixmh23YoAexdpJCrnTKSKq6VvDbpawEyQX44FrQ1EFdS3AUzazcDAwZWYByywSSkh9Z9hAi5vwwUuaNc",
  "key10": "3zkzqDqNevWJnRCuoqeX6Ryji7odH8CnK6ZY6VS824qvYp4fiiP2fzjmycMELvSUGW14TRqb1DpCLNr3iFxSpoey",
  "key11": "56n3ew1r6NdwQ9erv2Tucyuj8sZeJXDeEWrCSy5Jor11nkQh6K3QKppXTyqCE4s3oDdx18CoXWAqekFhxCBwbuo1",
  "key12": "ndJqxwy55xfzASrLGhcabokHqMXDvzuL2Z5Xp8YMs3fxofjkRKGk9fUwDtiMS8UcdYDgT18tLwjiBVCeCAhysdh",
  "key13": "2CL2Qaoesj8N1HV2JdRUGM7BLhQ4kmH9xjMDa8744oidTtcmRALwVJBqzcbGbU9nh4TdT3tgzV766DLy2ssyeTEb",
  "key14": "4YtTNJ6pSp4qoUNyrekePe3bCBBbZLWKmZ4RequpYkSvHwUyfaU2Q5RdsqJ5NX1trdjgKqEjqP95cDn9fzkX7dpG",
  "key15": "2saoR5HW5abkA2Zi44N2U2PZfnVmFtQ7rGAkAChwvHLxKv95c4RhXJMheVCHrC732s1DsNAbpJLumL57qzWG5hPC",
  "key16": "62hYn2d6TqFAYZtCKQsK8ybJJHCgkdBntj3X9omJCrrEYA2m1AtyU2kHHEsVbHWWmycKpsfCZMkviNNJGr4E3ehN",
  "key17": "4aizX9cGtohf4z2YLaUU3fMPhnohjJSUVQfXHc6NCe7bc6ngr3up5KXW1G3Va6jXq1WQm7QP5qweyWY9DRiV37SN",
  "key18": "3VJrDei1xtHmkAfXvofmrrs9uni6paJSHxUjWrGX6YNmkSb6j1z7NF575FguR4shBfPfUJJqaBFUK4iC5E7SemYH",
  "key19": "3pUrywnaEezv8pavA5eb7yoJ3vp9CyxzVQywamgvaA28f92KPkEaeEDVvRTTzHJdAjubwoRUahec8upmgCBL3Z7B",
  "key20": "GmYjEJfsifUbXL5QmAvesthETznnctsUV1W1kYvxDYihhgJGeVRKavoFV3zA7jv9BvokKKrp12cFqvfqEGxzKQN",
  "key21": "X7bxvqor4nH9HtM2MsJMdyH3GQoTtxvWRkxjQnPR8rhycE9C9LUKWNYATPj8t4NQVzRcSiRoUxZZ4eXVJXVvxmL",
  "key22": "47Y2BJhGPwATZQsAUYaBZVJTrgSUWQNT36p3H9cDeqsqaVFAbV5rJYMGjqEuMrao9Sh2SCoDGLfHDNoCAycybFEL",
  "key23": "4w45T9t28JiNSi6MxwVBwRxscyGwRWDt3MxKxmxvrQrWKQSNDsaJqKB9C1RLhXjqdd6vePkCG9J9peikQJkFhJ1q",
  "key24": "jnstUr8D1KJwedwiLmnzEwkiVMuNVDtmLBcLbFzVoXjRHyVuPak9F4P167VZSmEybuqSDne8YMobVyA5ccS9Mny",
  "key25": "5vhfkXzoFSHE7EPFjrDW2i5NjMfyZdyqBfrnHMDEwvFLv9bKgqv7WkJPGuMr4yFBAE4ZQtJHY9QBqvdoss7pGTLk",
  "key26": "4V7wcfRseRkg5xrpQY9W34XA2JGHTdAsRzPS2qCZh5kxnxzAcpUcWrbcszGska6tvfRMzxoarS4y7RwJwKtcYSAB",
  "key27": "AyPBzPjpqC4U4iEhtvh89cm2TgqQHNKA2M98dCtqdrC9qLCWSSUJWxP8GxxVBH9kZ76oQmTdP92sZU86iSgvmtZ",
  "key28": "5KSQ8JeKFAhhpPkRY9WrRQYwCH9XZzZE1fRPJoLYuEMegpp5eCz31JhDtyrn8nbxXmdksw7TY9afVXrSK7sVErWw",
  "key29": "5zeM3S1QZvt3BoaxFohAgoMFxYwrY6aPfLZDGiT8EgKDTcpWy3xhgQRm1rb1gNV37tH2XrRm4BEVeKxV2BPuu7kj",
  "key30": "mxdG7BoReQCNCPjXnf76gZ3155mUyDaBeEoUmFKJckaWMh7vQHsASmxEZC3WZfzmCpxJFhgcRUzGjNW1AT4iay2",
  "key31": "4LzGdcr5w6xcf1ueWS1E9yw8PJsr7fYWqJkM9XgVis7mCRbaSPdY2FgSMWYMr7FqdoHccuikuWtxrTcDDybeWQ1d",
  "key32": "iWhCbs1DztPFzjnP8g3Z85dzLVz5FXHvaon4WVc7R1qdGQ8HeDszQrNGwUuRr48bLd4tfwKZYnubATjUMWfPXX5",
  "key33": "2MKgzJV3QxeT7fcLa3d73iTWh5k4U7uteqjdQXmYm7oGvbPSS2mTcGXMYG4UjCqFRJRSESJoer7e54Y4kiCSVKYi",
  "key34": "5svrnwkNWRFNPUJHuy6cQbKE8XVDkkNU9BDNWAu1DABkrmKcjTtDytpSqWkRPktU6KTqgLfVvoSmA7Pj2w4fHb8H",
  "key35": "42kqBCPojJxcMLafUevjncgEJVF9TUhgZv5BXhJzPW1PRyd1dBkECctSgZVycbt19DkzfBD7YQemW4McbKZMrdJW",
  "key36": "3x6fQe1d7SbmFeqZxCR1VED1iNBzYqUzNjmesKpQg8cdGmw8MbjDmVVZPNLiuwSgoCppNQ6qN7zf45sTuEZj2ku1",
  "key37": "4Xd6sFPN9ENXuetttqmqmibm2tiBsmRVemiKWTdJLE6syxG9g7kbozckr1BpbjWZzd3EczAuEm6RTCJmyJGQcH4J"
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
