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
    "4sFR9PSUEisyMxVrUnxsNhfAT1kj26ABKAVXcodN9fafUfy7NQbG9AX8CYLDrcdjJWwSZ848uzT8Jg1EMNbsuxNV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EqsHVCDX92zo3jScieHntcT2FsoM9cp9qmVZeVcNpPnQDsK8nfRqTPpJvFLaYUayDsVw13xyw4QfCr6NYVFL5to",
  "key1": "2spBm4UXWPq3rX7X7CnXpNDAtC9bzeyYLSkcqPk9QopsyWSA7zngqcNhM4Ws1M4mS6v7GEVTKEuHLHc4kNn47wfr",
  "key2": "2Y1ffgU2oAqbqpJLLWb7iz7otuJri6bVBm3RWiT8dtcqWhJtytdwB2rs1oUNbUPp3uN6AunAhzJXharEoN7kbHRu",
  "key3": "3iUHto2e4UWK7Wu4QjqgG3mLWhZkka22d2ntPYLzPVt7Hhqu7Gb9M4bNzgEGpXnEw2jWACPTGP7VKuAyNmDwZVMq",
  "key4": "5BVGb88ukGp6GXNL5vGy5PTgkkZsQXb1Hhe6YKre9d1dppJNg3JbQDxwW4y3b7xTMHSvFezhRXPZ2NJqmB4pcPog",
  "key5": "2dy9pZYbMVbvEi5TMYcB2LFNbJJtEURGdPATxtBGgGUBpYCVCJbtfRaRhfwmGu4MRUGuTRZ9gXJY7heasDtJWRPH",
  "key6": "xpV2j5HgP36zoHJJEaWBusTP8XVYnXCuceHPxJEXjcUr2WsPvL3X1oTHhWTUdhadGKbFLo7Yqu4xLDfejqokjML",
  "key7": "2BxUvEzyf22QJ7EeiPoQU8u3GEg8RyqwShJQuH9dyZdaAXr171YNHKj6L8VjWzsQYdM2hYRy5cEUb7fCMxku7k1C",
  "key8": "dT8g6DmTpomW7piBLhhYMrCNDuj2qEDEEp7pFZ6EGVHBbX9bSCCss4zbwfDi4wNdGqJFahkdSfUdQ6rocyaSaxx",
  "key9": "5qmLSXTdGTiXTdFmcgY84uSeBGTAHMsGr8crS5XmGANLZMetprhkRmE5rcFNtNK5LZRe4mmH1x5isbaFbhKdppTG",
  "key10": "WMCdjr87BJJEobpVzvzGkd53QcxKZMomGFdZq5XdFHXYc4HFhR8MiMeJCNa4v3ooSEnXostzqPVCgTJsH1ZbtiT",
  "key11": "2bvMnZBYcp3WN7d2daGeEVJSaY2EL8s2f24ApyE2RGaGZVrKbn5rySFS7UQEZDrjYP3PC8H75hfFqJovreZ2GLSm",
  "key12": "4gu73U2BYHt6V4VYWrWN7uyAeWTkAU3nkQnJQKMA8kLkm2CkF4zbq56tCC6eWFR1AvB3effcUqL9hW8jn2xrhjpN",
  "key13": "3BdKab2mrKQkFJqwy65HM6qvkF8Qd4k4Gr12Y4N7FHLPKBU7A5dw9G8FJumgQGfNR9eGLC1XyuEAx5YN5RcySgm8",
  "key14": "5j91wskzj3RTjTVYMVWLbJZLPABbmrmzWqKtm5Q2HSKYgApm7rqg8NXmcEEkTm62gTvs6K66sWXEYEzW6isuTQgj",
  "key15": "3oQM7Dj3uqgFKgvUNsT8nQ1ZFeeDWPvvvZJiWX61qQD7nAPhtJmbuHfCnYLFmkYARcbhYhtaDQemayfkWY1dWSR3",
  "key16": "3rJ4wxFbe2UwQ2YBEYr9TCJdxx6Sk95Gt2cHUAHaPKreHWLtRJnWKwkkZiDrMxqR4Bxbo6eqiBAhrPJVDxpgu1SH",
  "key17": "2tPe6uLUWi35ykEjMGGBL1VsXacKzQwasJr3SzVcS1umg3HQzjo6sNd2YDUbdX1T8Q91dUM5eK9wmED2SCrEAbfY",
  "key18": "5NXbFL4fLnELPKBpBccdRHE1s7gQpfMYohLNoPbWF8w7qgW9pHXHse8PfMnkbpCxU7wvEhnuhm6y8BSjWc1HHyvy",
  "key19": "3VTdAbp3LSSjPP9qydR2eodxEoV8qk9NMefdFdzguLmuQxwtCEeQn6DFxrJUxq3VGsSMLMAdtVLFnPeYpiRvWDS3",
  "key20": "4iUZtsyxixrz4sjaLiB81avJJrKicegxo2oAoTvbwYUUjxZwuYexwQzVQumt7dkqxEj1yshEpeRGJekmHtMJ4utW",
  "key21": "dGHSMywomgGf6UXSouUbCAFJSMKSMmXUmqm3nqHqCzfb82xUu91gTXxXP3dD6P3yyMppK5eqeGvJCJP5tRHjXPc",
  "key22": "sasBzQN375Ed93P9ymjooS1tZnrpFZaAeBn57o9JuKhhvyGDboKzKiyg1y2pmtjDCJ1YrqEkwY9R6ivBV5T9WC1",
  "key23": "3zXGSVkR7hfrLadmWxbvTPw3RsvwYakDZ9FYN2vmcJ3A1o1XhrAMy8XNn7PNoGXyLPnKVtWP7FTfGu98z6aMfBRM",
  "key24": "JSP7owwvihbx6nJhLfk4i5MTUugEJU1KVNvYoF8NJFxoK9wuZQ5QkgSp5nqzwqGDFBy3VEQoH7ozFJwhmiGYQVw",
  "key25": "3KW6XFsxUP2g52boMZYDXL2mUQ4VM1hMKKX4Ley29qenkV7vtPkfJY9mucW1i2CvBhSS7EqUxFZqZi4bvY65ps51",
  "key26": "467mVDgrdiHPR62ZACoj8828EVXutWKwygeR8wiQEoxtV3sAka96Hzxf48KcdQQZ86AtJnCj8Hx6bGj2fh1Ec9SZ",
  "key27": "1yokHYMsajaQHAZ3HbvoRGrfu9xuoUj9LrebaCcpXJ4r9txZrxYtfEkf8n2YpCVUsjajA9TyaBkXK3tb4Vh3jfp",
  "key28": "461iueimdoH6VhRQLun8AtvHZNwkPMJFK6qR9FMkgh5ySKKVnVDbPN4rTMaQxVeiAmw9PxrXVB2VGPWfFnxCpCgC",
  "key29": "2Nur1n3APruYsFDMcbzvMm7NmZjsuHQUahFWBkyDL44cwuUij2RH65JiAUTRDEnpiCtVPQNmbUFjb5Uk5TaUo3qu",
  "key30": "3vprkHKZGDmvCZKTQY5Ue2GcRAvyvinbKWMEsSRMKrACbypke8puvyxBNrZ1krcBXmsZFVQfxqFysNzKaRdx3pMf",
  "key31": "4ALkF3CHJcgnDCiP1zAPb3CthFzy2z7HRwMZbCVmPkv7Av2fGEdYyCZ2Gqo3JKVvE7PCWG1UeJzsysLuAftdxJfW",
  "key32": "5AQ7sS53c5ng5Jdkt8XCmYNjW166BbJaY7kqitAAouHmGsdinjKBRkEdYV5i8ENxyHaudsKme1QqdxdVXzQDPTA7",
  "key33": "3Mqi8tvBmzoopZUuXZenBZfWsaADDE7X1nHP5fkm7hKYezysZjtC8PmbBwuELMwuLVdYxh4FSxzzYMPVyPP3LBPh",
  "key34": "3WhcoWSQPbkYcGFwgaRhn46ywRvQRsFJjJLcpBqTGCJKU5zWRzAcNsS3ARaBcYJsW1Ujbhysm5HSdqyrgbbAmvXb",
  "key35": "SBrURBfLawxYpf8FXAwNygv284U38U9tTDzt7TSskE5Cou3SVkdqYs6N3SFmiYDPqgAPLeXxJUbcxZLva99g3ch"
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
