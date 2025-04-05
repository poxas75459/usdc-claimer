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
    "3qTJYXpbTRYg4VYFW7f9NbieWRL4YFdYNprLuUda3xAWGV71m8RxUNmnQSdb2tiU2tiJexsyH3xTWsgSZciH6nsK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QJxQQBwFzyMezqcMuPPRLNGMp7kX9UHMWKHcNkFneTBjQCqnzpTUPretSQdxETBkitL1Kv8aGtMrSPBY8MXjZds",
  "key1": "4vNnCpj6TGVoPsArnvRKuYVYDwNREix5e5Xf7aUEaAHcJi5n46LXnJx7AYHV4vY8Zakek1XkEWb38U5Bg3HmzTh2",
  "key2": "2CG49kZ8uTBQYd13WEVqUXNdu1RQSuZ6u5xyLvQ2nh9RGLP9SSmWDC7eJSUNZRM5BnrC8kzu2RHtpzECWmQ3iYoF",
  "key3": "Eie9C7QCXD1nHTCpCiWVSCKQ4rdaS777PQet3JcBQ5NBkBaZ4zgNXYf4CyioNVr4oDL3y6McXjcEbounvyLfLbq",
  "key4": "3TFmeL8vyMWNgmch4gN4UZvzjqsDW6tsSSqsjKgQRfUqrEphsjzedhR3QYEPpf2xHCTNG3x8V7rz6mF4aioDbiyH",
  "key5": "5yp7sgrGjzkhdcY257H93F4MmQeh1dk3Qj3AVETcRGtbAqkvWHidgaxFiPE4xmfKRzrWwgwNavWKDSq7zrLf7NYu",
  "key6": "3ktFj4zhRvUt5zf79W7g9rDYHzDJCJpmVeZ4kT3fRcVMSA5uKkLcgcG18XBdkuLpk98231TQTK6kE31utKQnH6CQ",
  "key7": "AeNRSMMsCccpa2rwU3fJyL7YSALRjd7bFy4C2hHhFp92ZiuwoQAHKsP683oFuK9EnMK5Cyg9VzJUaRaU4XtJ4L1",
  "key8": "orW7Us75y3cLK4no3jPMcEkaUKeoC8s52ZwTyV34KzBu4MZrFcSe7CdvjsEvR1rJ2wvbMSH56rdW2TqcRF6hb6u",
  "key9": "3N4VV4eWaVRM1wbnWFxbVwnAVvNJDeaqwXbvmqwfFcounmk2BaENdf4JeikewtPQy9iRVc13J4ff7s2qRM93ZnGg",
  "key10": "5traTmnq3QrLTeHjGoH7v5zYTzEwWd7jyA1fTL3pMRhoDRae4R6dnFUBa9qRGEsCbchvq7mST9wkxeFFeAp2dMjH",
  "key11": "27JMZbCCW4zN9ET7nYcn9L93NfrMLKCHbNyNSdsuoEJPjePPRrUZ15euH9bnrdAgjSfUrSvAzi2EvbP8RLLCvwdg",
  "key12": "31DfGXpAu9m8hLsHUxyFwdBmAFtFNWAtT68Rbk2iPJcSYj352yaGu8ZL2FoCfDzvaPg1HPWa8ExVJz7VeahGeLsW",
  "key13": "3zKR3eeW6ZdyYrv9f1mkZYNTe5wt4Du3XPrvp8qQV5RHfLoNuJqedKMoFR9Ak9tKazdakiiBp6fDJXpo2Dj8ZmPN",
  "key14": "5ra5p7eCAG8kLuRimEKxRfmMjFGxWtrumHqR3b3oMtG1FyMafcmt9sFYPoCBYGw82a26TCaAt4AhKFBiBbFJJ5ej",
  "key15": "2qJcupTH5gQrCyLRBqZLcDPVYDjftNMzP7HKY9GeoMLe4KoVw2zeCRMfz2TZbszku3HDafU7sTg3JF5wMMAeamC4",
  "key16": "3pxoPtD25G4CkeUF9ajnUgNG8YdFmeujRP7k6voFVgvhRWprL1MZp6Nx4q83KfukUYE5upi6WirPG7iH19BwcR3C",
  "key17": "2YDmKZdcSSAVPArzzxzPd67goPU9C7b3GEfaKcuaM1F69B7AQjDiuySq6butGpEyCYpH4bG7DiYnqAkiYGFwcrWq",
  "key18": "5T35EJEjzZUpewcADFyd5dEBHRy1GyZSJmeGZaoDkTun6Ls4kE7GWgYpJyLBd1BvgbawZpP6sUCEUkhUyGK5yiGt",
  "key19": "bLJ3aJoBr1yHZH7WqB6916pUKERrXKaheD2i3sV5J1s3S35pzFekUY5LsSfT8r48MHEtPpDbMcCsmeJNPwGWs6D",
  "key20": "4CuiwUekRCMsNND9JmH2V5AswwthjzJ6ibzRnYXfb5TT2YE8nYgivSG5dJHqQ9R83qkaU31A164Ki4kyMdtgy8Xg",
  "key21": "5rzLTni9fcVZZ7Kr2sVZN7ZkHYYdvbGbQKeP2tEhppFVceHxt14L7gJ24AHPytAMb6JVAMHSwPEe2YyGPerWj8Jg",
  "key22": "5oeZcpfGDMvHe3fTPQMU9GhqVv2PdjFZmZKMWvJzmLY6w6zNrbDFCgYn6oM97aQu9ihCojzgHfvuKADqQThVKMFG",
  "key23": "4wGPgDTcC3i9Sbek9fsSFqqGJxBSQtbnSiiw4MaqxPG8VyiA45UGuD2RTSHC44iGU4LGbkcM4qyfhVQA7eTwvkG9",
  "key24": "3cwv7zzA7KaDCksNtMnASwaqKxz9dUekcCKE8NqVaRNMgSUbsFfzxgwr7cugZrU3t1Q5623PqP3jHwraCECWfC15",
  "key25": "5GLCpRx3xKtCKcitYxP8uwZMRdy8LaVff7wXgCVNnASmzUYp4xfJjD4CbkdymJTxdmgSj2UM4N3HF1Uho987i3kp",
  "key26": "gxsQSbAh8EwEvnSRQvWGt5ntp8CLGDH7pW6njjdSQzxuuYryXr3V9orJt2YtACYkBVyfTQYzMFUvA51DqxA44nm"
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
