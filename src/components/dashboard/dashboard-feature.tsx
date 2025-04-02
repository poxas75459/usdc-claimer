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
    "5BTrDdp9kLG8YEV99csmApJtnRjywznFBVxDemgU9swX5XMqE5ZNeMWNfiRoD7dF8vHiFBckYkXgAb83ZiPEVps4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4z7G4q2j5fyNnbXC8S6zZ9JoG5jx2xrjvyQVnbXwSkzLi2c9UuZqSeHV5yB5p4RG6gBaMmwAfUWwNpTjiXoe2uTS",
  "key1": "5F9djBtQG4UHNF53UhFTVxCCbdPQkjLiEWkX7KMxcPKiEycKKq2oWvEivtCv36jpXoADHhzK4R6k8ZVUt9xkH1Hg",
  "key2": "2ArjfTj7CZo4daHpia9G77yzukru2chDEkPssDDbzmc2u7pSd2iQPVvaZzCdS1ZXy8nyPgjQdZboHqKD4KW1cn1F",
  "key3": "58C7y9ECyEbCmkXaGX8K46pdpWKqqeK4KehT34gnGL7tXijg2QNAtUrwShG6zvBbtHCRJ3w1u9b87sH5LKq5d7pS",
  "key4": "AjXFyDWQy1Mf2nj59HYZNf18TTsw6ask8pwF494cTMrQgdTCaX9Knf5ucL7YTopJCzJba4MVVAHMfsombZfRnEC",
  "key5": "5egVdPGYMU94to2fDQN4KyXoYtrQcpxdDp6zU68DS6MPa6tPdoijuUxS2W2emwH2qci7MQRZWDhKXh6dwTpyuben",
  "key6": "jTD5ccuEcyTp7eGCwW2n2ixrnLbzaAFDgyajE7bxcC3VDSfk4mMaSR65jmY9fPUaTkMiYyqsM1mSR8Y82MRiJjb",
  "key7": "2oEeuRuKUAs93N1riSJs5STUdRCegxM8pzS1C2pqpwRFyuM1XxVcpBfBLP97mMCapcbaJUtLEc5prJHRHG3HRcWt",
  "key8": "4R8tLmccrkZGujuNUmzctEELM6S9GTAmGd3FDkRe8i6wZq35ACXDrynLfukcmGix1F7LgPWWC1MgXM2vmjy9SEN1",
  "key9": "61fd8C2zRhcDb5s82YUZHxixtSutV7WVCCgzVtyBq1tz32g32Z5wRad8VzwEXSzh1pGCjbBs7nX4j9g4neNQyX5e",
  "key10": "P1Pyh4N16PffUdgq2Y5y3Qvou19AzeAwhvavoHhu9CiXbWyRN2koJ8Nb6BnUCadiUfgZv8zK8HQMqax1PEumAiZ",
  "key11": "3w3CM1QhssTVXaNZVSUwefFFDtUhNBxa7ZoH3Xdrs4THNSbfLgF5pLCRZaLE7ikJGec71WWRBFvwJY7CfVYdrXbn",
  "key12": "4w8ZMFc7JrDHpK3tLM4tw7qF37nKe9pcNUjPM5X4ZartgQehgpJotj5bFVFDBi92VxUjPKRm2Vaj8C6sWF8a4FRH",
  "key13": "28kaQcBmETivG5BSPptG43Gxty7gQ7ajngDmr3LhVYvPjKhWGt8C6cR6844vZHWkGNVfXAPwsxYFA3F3XQb2aqLT",
  "key14": "m4Rm3JFzc6yZsQePE4ZZV8tZdfoxyyHXvPJNZpsdZtpq9bKHAVb8d6rELSzHFsMGezEmhB5z9ae4FTY8NScCKtu",
  "key15": "3rV5v6y748cENbimUznaYxdfpmwZhSjvospsTypiTs2SYNUbSNP8oouQ3tqZmJSHX6VVuzdZtSyMheth7f1onhLN",
  "key16": "41NVtJtVb2cwHjd6U4P3HKYR4daESe1n2AMrosSP4i1YDioYAdKrQdSyniEXngYb3ZCV4vapGdVebK73fnjSkPsK",
  "key17": "4pEsrR6LKkgKzdUV2drnkt2VNbnUmjYAd8sJioVuW5Kpn1V29x2YrYUqfkhR65zKmcLh6qDVCMr4tBeUdW2UXbXt",
  "key18": "2Bbs16XPxfoFaTVLwaqxUMfiRhBixgQiiSrr5FQPoy7NSDPa8Qr295CV2ttfUvFsSzWyhtSnetDdLbAKyPWUCk5L",
  "key19": "4xeDK4g5pDsLX3CWyoFeEoVixFnVTJh4yoxqxuMfBkJ38eguba6KJZgvq4HEAyzs6TQffPcsA6zgPWUkKGZ2PapT",
  "key20": "2cfacMuDYPcjRxtTPasejVUto7QhX4JCAVsc7Bj8iVE78jKTrc1gZhpaPMNWnDz8dtV9sHDEn3xGbBuxsUqtx43y",
  "key21": "57k7NwPE61t8ptJMnkf31dpWyQNmpg8ciaG5eN5d5qSeQ3AApDzRyAStAqFPLKiSZEbzrKHcRByMDbPtzckEWu7e",
  "key22": "2Hme5xki5K3Xdwacma69ghjDhifMyMAqxBeZAfursaXqXsZ4UAYp1xa4XBfyCyYhdUePW9U234xB9CqpzRdtfFpm",
  "key23": "57vKrjvkNJ6HatwYuxbvBpRmEXzyaGfMeEw1AnVCts5j1HgTjVJj1eS5aL2jkdB745pdy8y8AymL9GnnLTXhsA39",
  "key24": "5bVPJnkYvBMdyXWJczkpSWJPHPeW4A8hpZb3N3z8vDTLcK5jv54q5ydcjzbrEqsGHQBq5JLRb4Xi3aSbg71MCzdv",
  "key25": "mqREGchu3SWS89Z5jKQE7iyHGpMdawTU76T95dfHK9GR4NQiBAxWyw8kvbECqZ4XciNKdiZvRjuD7rUF8UstpHS",
  "key26": "4QRWhxy3TLij31FVoSbgqRYp9E5JZ6Ru1MUzZiF6HatCxtyhWe3icFhZDsEkzsq7mv5ZyJW8e2YkUYaLinp1nsJG",
  "key27": "2PA6vAbkKivaJbmBLS8K4iuVhPRBqJxvYvokkXSQjJRcjbo2725CaheCoAnRFmGimMqzKsJ9JvfoGiDNJbJerhhY",
  "key28": "3WStFns5bPZ8C423ejVpni7BuvmVBNwbHHi4m4sBRnFSXWFEfBz5NtdqwJfCCaefdWBbiGPD3qhJMdMbjY1yxMhg",
  "key29": "53JRDuw3bKAvYiczFGqkTJLv2n5C4gNtL8Js8uUD6m2EryHHSzg1GKkD6au49ELt6aTEoYWZkcdGoAkxeekVEHHs",
  "key30": "rRke79KRJFrYs4wRVnWAN5aAi9MswBQJNTmieKnzmYwBtTbmctBNbf78CsWf3v8TZS1qfU7qrWtwAiqhExzv6sg",
  "key31": "twK68VV9gkyiBeAYNQSLGXh6V793PTuXmzTD9YdPwHpnLyjA5VXScG6DgKqjpz8UJuZfssg5GP8FPnZE3o2xdX5",
  "key32": "pjhx7MzEjTTZTC3rhaJoxdh2TPPWjpRBASFoLBYL5ER6rdxfb3zNc4ZZEqGyEGcwzYFBHqmux8HYfPf6WMttthw",
  "key33": "41YC9FcZo8Zud6VMh7N9UkGdMNbMJEeLVBYe4RX4znRVtvXPY1UYbDWHYsBfDQRts7z66qqWqDC7snGkC1aniDiB",
  "key34": "4ESfASEQiJi3WUYDrg9pJ34uZRzuVzZedidBV383tEbfgYU6pqKxGYN8hzUBNbvuz7Y2jaceF4ZtQd5yg8wrRJS5"
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
