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
    "UypNMK7VKtq9T13ezWCJwiu6fHzzTJoL8pvQvWScNDTXxb54rFsE5y3Rj6Ma5hHMz2wSpwbuCE7U2RcFkvHkMcm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FovWMrRCCYyaGfnBz5LPmNXrRvJs1WnKREYJJgqJNJAGyiCNXREChqyfWEBBNj2eR5Ds7kQr4V7RrHtHJyqW8Uw",
  "key1": "5chm7dkTTEbySUBq6u1yySdyKnqGZ5xeRjTpmfYvxzA1vSdZbtdZ1HJMq29xuaxErtZ66j7n1bRRKYnUyYBWhsnW",
  "key2": "61fydB96N87AGLxNqKW8zXMoFsa524tmXB8fYWH3XFMfHD4Wcf8auB9JjQfcuwd8AHgoAHtQaPCCT9UyntrGndGG",
  "key3": "61CaBjaDDmqqpuBb83jo4QbKrzJHjZYhHewXzukJ2AmG3GWEt51foAtdMYi8HkcKBrA3LMRVgvxEpUFTfjNPwxQZ",
  "key4": "4REgsiTqwvQHTB9LJmsVjMjTaksQajhwLfxDu3FhQ84buHHdpRwLsCMeUumBY48xgCcwhUuSbBHp1nGZ7Aoh4pNT",
  "key5": "41wHYACD3svLcq9zrT4SXgLPEEP9hjBFK4WQTKcx8YKMgE2D3Q8TF3ds7fWFQY2AFhidPoCLZUbpDhreHS7Ra7JH",
  "key6": "51vzwaydyovoBwTan92fjh7ZNnTEN1cT9yaUsuPoTCdtXoMofzQgBdGVtTMPzhd1aAmpPHUkcRvDYxZ6wbRAd54N",
  "key7": "5oVvJPSwqdd9F1rxz7BN1ESCJG1r271Qrr4TjLZczeUcY3hzS5ooiJvgGxmA45vfTfKtdHsH8Hip1DoRZ7f9BrVF",
  "key8": "24SiRkNANsGMHLaXKGQX1ks8qh4mT6XMcpPf3DhQgpDF8chX3WMoxFeNfr9cLgXohRTTtzgFyZCffH6Gpwoxo4YY",
  "key9": "2SoZDJSXev6zosUN1KYgRu16JT9ZCPrxS4TR19wZFoWkBBnbisGXmwrP28rau7S1Mt4tUmXWMXo9DFvtcCKhBQDk",
  "key10": "5Pu27bqQQ3i4BqpZdh2WcN6ZuAe3RmD99zSrh66VkWBFq4seMUCnpwtDyXLeNVTDKDEXFBZN6DvBYCHZRzYhTDVd",
  "key11": "2brLmTBhesNRiRXgaaV2Wn3NdrahsYsTQxh6NtnwKSuBn1iGqJVoHwUz8Uy4zzQ3Yk8jvNCSjWBMqq5ZSfi44YCV",
  "key12": "52CdhDzqJvDarMzyNvHYGUxpX8k868rKRHrW1Xn6DJZ6sM4KjyQRiBrff3Jp4Z47PKxdXqrwKUnUKrbWDnkTCZQz",
  "key13": "2PmsQQtfUuCtVejyiaB4UZhVS7GeCnqfa9wtrjyXQfpigarGtEkuguG5gdmnLqN2Gi6wuauiuVECERbbPoJPMQfk",
  "key14": "5D58RxBWSAKaM5e5kNekVhYBhRmG2DacE2JbDnSSY8E8KrBxbZiFYcV8WWZv5uQEoDdRoiT1dSeRZ2gAZWT8fW9K",
  "key15": "2ZjzG6g8wytvhBEpgFRHZNRXkLzNRoqS9JqffzNJFNsM5W2aQhwuKATEMhR9zm9hxdHua7EVyQHhsQRsfMWWWgD",
  "key16": "2X72vZDxaoj4Ch6rAqbxNY14AV75cDebp3gRt4pX7Vue4nNJFY5YLU48q33LVWsg7KW6YP8F7kFxfPby4u22wM9f",
  "key17": "4UtP4opRDojwvGKkTNiVSvjx4yzXYGHBpP2FyuZsBEUrhPQrVGrQ2BrxCLwtxZrr6sE5MRR2q3uEZRmu5mioNcMj",
  "key18": "4JwD64vXJXwJJreFMoGevgMTkreS62HkPvmgFkhaxQCMYQ6NmUw5DoVA6HqmWUwtaHhASQo9TcM7fuYwLZLgUu7m",
  "key19": "5FWNmJizPSFwjj7pJzdAdS1BVaf3YaVzZmUifVuJpKFVLFiZiHADiBbt9f3mncMJSbQDBfKGskMgnLLKBkrcSAkF",
  "key20": "4ZQj9eQJxiV92CYBdk9LstngXedA6G82EMt2yo9VTh71PdqvETVyRADjkAVf7XDUEyEvgoEPGetsang8Mh7fAJVh",
  "key21": "3wAVxWT5AEuMWN9qg7we7V62pL8hjJcZxsegmKvwD63uSKftDkAUPx8PKaCHwgumZTLhve4gyTHZZXonDnpSPSdg",
  "key22": "VxBjszum5AnuryPhbE6hYhVx96MoCXq4L3YR5u1qRARTLZ1BobN4pmcEpsn3ngiiicdKWrgDSo9N45SJbEkaWMx",
  "key23": "qjnQagWkR6bR7Z7qxJdRrXnynWkTixAR4Vmr1KWfQSUqa9QwX4yvFEkFgW7Vj1DXCJdpWocVnWqCVYmXuY39qvD",
  "key24": "4MHFxVPNtAeCcDyFqrNsDj3zbursPpoFr7urdQD4FjWE2QfwcE8N7D7dRX8RZNWsdyXVy8rLRqztF8Kkju7tHhWz",
  "key25": "2L7xhHQK8Ubec3yzT36U616oujqgCbiurD1AUxFJyd8UvL9Zj9bzYFjqyp2dcyoVCKBmT9TeZMaSJx3NJTKohV8",
  "key26": "sSkuu9MACMQd2QhEw9bedCgo642Ve5nASxjTdM8n4RFmU7CUtdU59oHqALvSPf8h8PZfPhzz99BV9u7y4e9s5Q8",
  "key27": "2i8eTm67REcjDzfLy4rqDMugnP3Vrmd23GHA7sKL34t9LGkcWksg8o1RuKVtAhXx6Eq4n621RJ13rt5HECbjtTE2",
  "key28": "2iEkdWYTWce3HEs1ha1SR38TQnZmPTT6BGmowo8J5PTPLzmdBFEUESueR6r8VXwXaSi3DXrSUWDCVy5hDmx1AnKJ",
  "key29": "4NfztTFdk1wi8bX6jFWYcJZCHgXRNqcMKCzrKPDw7sKMuR9cDJZ77PQcdkSvHZ8LtZK3iGEV9mYebKH8Eqw1C5A7"
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
