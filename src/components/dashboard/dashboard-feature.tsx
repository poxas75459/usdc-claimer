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
    "5wRaSmUfsuCWnHXNYZBaAe3dZH6nTxhAhwFuzxfbe4QAvoswHB1MsSTi3rtvSD4SgZw72jx4QF4nU9biZPiQES9N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53Sq69hvJpGTCAvHWfZL2jqpW8NZd4BG6SidAcx2qmYtfMqvVX16FhHTFDn9S8jMeXcHSRgArjC1dDzgPwXUzKVr",
  "key1": "5BCuQs2XBsWXYBtEui78idCdzgSBHGUscFuNXmNHCsMAWRg1i1HNUe7KQkabiCw988mmw4A2QU6TuKHeNCsjnzw8",
  "key2": "3YjotrCLnv3V5st9LFM2GxMPKzYVksdaUKvqNeubQrwNH1BZF5HigWesSzf9GcAwZLe8Ts2wZZhKYgKnSvoabeEe",
  "key3": "3okgMmWW4WpYYcSQPEYUYhzbnd94pY4iypqdNb654LnEeAdc2td1Y5bRarRK1hCQcdkvyT2q8mmxQMRjVG2NNUfV",
  "key4": "5kwbTYUfZHgEDvVWcjmkYXHNYRCY7fKQybAujdjhKga7faxc7t3Rj8JZWYvRw9FupNfkNNE11ihYHB3SMJsDH3Wf",
  "key5": "27CBMCM7FkEMArwYa4rbVa8kEnTCBrQPCMpzDDRA7SEJ6VwzAWzkxYpop4Bb836D3ABqLeJcwL1MibMTX88jxB5C",
  "key6": "38qNzoGmQmqChvjagWBCpac3yVKRAeDbFejWUm7QezjNLeJKZJhcXz1smxChuNGCgdewWUZKsC6o9ALq594gV63M",
  "key7": "MYppGhEynhKvmMNjBRwhzF4Nt1cwUpGk9hZusc2ojDb8wGtEQBT1JRNxvBZYdtcdiNeniqnhptGGJb6MG1pvHuc",
  "key8": "4PMiXCvA4N8cXCvc67hNpjrMqgsEUf9dntYjjrCnQixB5PsiXV8wCt18MZWRUd2ZUgbLLD64XSX38pXxStfYzLFg",
  "key9": "Jaf9Qfzo3SMLmnZgcdC2q4etBDTckqYgPABgP8TDyEF4K7fFombjZHWSB4erTDrfXNyQxigV7TX5ehh7wYiViwL",
  "key10": "4vdPwQoypfiqK6u2s1EXTPSwtDcmmbbF7eEgxCVu6j1HqZWB1eP986ctZm63Nmw7o2vNbmAp1prVyWv85arSGveU",
  "key11": "5dDGnMTFNUu9bXR4tWxo9BguHn7cjYP4qQgQbjFrRW7oFesrJDBrFA7nS3d8JxECwX9M2PR6SQUaEPX9tEWsjVwK",
  "key12": "2TFCQNkCXdmpPZoUWL7y5MUrY7H4VuRzoLzh4iTFNW2vc6rrahVhSnbe1MKiVoRkq5LtB2ynebBpkSt53yiZXfCC",
  "key13": "4cqKR5hAmU5wojygWmnuCBsE2kxvuVAN1TCurbBAKqW7edmaYCbW8EEBUkZnLTXaguvafpvDKjWbTwwpLCYzftXZ",
  "key14": "352YsJfD3oX5Y9EPt1eyz81MptYSEtHkjKsjnSZH6oDve7T3bPBx6j3CYT3hczS5y73adbieCeY3FYkEEua4ohd5",
  "key15": "5xTWNEBkeQXh7tPAjb6WVXXa3BMaC5CaVz1Cvo1Xjsh9zd85niboLwoB1ZAapqBtpZQfLdntyK7sagn9LXHZhiw5",
  "key16": "1ZdnnRzkkp1aLzwZbL1Nx8YshXgBE8bvL7aw7QBb87DuP6sJCL9vUhQouWEXRDuEKyoXj3XpkdTQNbLd56TKZS1",
  "key17": "3LzdWwKWygz86f2eVMpMkzuphFJJ5iMsZWGmS89us6mcG7f94kWtxhj4qPePsAXy28rSPZq8MBJxC59dv4K8XxXB",
  "key18": "3bBA4JU3nSUYkoJnuMSHgeiszRjatR2FGM61qCGLp2ZaVH7ERmw45jzP3TaGBNfJT5225VPa8QBxyAV5VsVSnQNC",
  "key19": "5M6rLjEh7Awc8D5NyKppWVTGL8fZ5PtEB7GmaJAw1ScF5brpEd4JzwfSZaBNX1gP7PUeQ3TvoEmcHuec3baLMJgr",
  "key20": "bUs7xEW3Rzyhw8ztwSXJHXXCQd2zNiqdJopeL5XNZB6hsa2tWBaCPhZsR5RbATmmKXbFtYWKnj13mYV9nro5AEA",
  "key21": "67Z13woFvtaWjKvtgunP4LZNLbkHQdaqJyP7UcRz75tgSZu4TZbv4NckBjJ4eTC1ZMc1UrEU3hLPxVt2Bw6jEXC8",
  "key22": "464ubnLuWFYuBPb6TmZjBC7qHpuWmfntmCz961dHVZWpfTwLW4AZ3UM8FEEpC5efyuDo6v8o4NrXC8dwV7kF433t",
  "key23": "2q39XtvSPGt5FaRuZZ95YsRrcq4wEFqRZk2oF2r3n5y9exd6xjVudPC5Vm7ca6nxr1x5d3q6dosSk8g5FffETnL1",
  "key24": "63CyRUpeJFcj3qq8MvZsj9as2i4u23AC7XGRyBH7QKKXw7EJvTygB4emDevutEQomYqCv2VbntpfDDT2rUNGDgfw",
  "key25": "356Mw7WuUMtyxKfwhHCV72QxLGEyoyieN7wY6Td6LKHGS5pPDYKwVR1itrFHnPTNy6eZ261TSW2MkgxX81UYU4nh",
  "key26": "LsVV684avouy1vLCuNvFp3TZ5qVFJEdqVTJ9d7oR6BVSkJNdwCAj6fmMa6KBHiUWEZHtsYjxLTf9GHiL6fprLPb",
  "key27": "KPGMgkCgBp4c9XdPUtvpYd64JUjegTqWmfGPtTSHVbTDySx154nD88qrwfxEQpni5QcGSmsTchXFsFn9rSDEYQF",
  "key28": "3Td7VVw3S6SXk9Ynrsk8aUK9X3ebE5DWLWkR7aW8k1MRE6DmaZBK4iq9z2ebHPqiUU6zvG5DNZGS2hA75cXEjttG",
  "key29": "3tVYSYJk27wSZnxn9BNZrmDtBKoDzLrccJYwMfTUkB9jbNiqne9YvmbhvLFdM2RoWypxZ6jQMzXAJq4d2o5Dm3JN",
  "key30": "pjS4yxeVaoPuSCgfqQ71op3oKLaJkWvtrm2cEzQKgTbcSQzuRZ2yf84xoiyGH1U6wJ85WrcJ5xqoPTLKFmTL2Xs",
  "key31": "3CUz3rMz2AHAuEa1fmpwjP22ZoWBWE7z3o7nUM7VRZKbP9k3XmKzZ8FRB8nuhRHFDRaAjsN5CDbArSUA6t2EqpAy",
  "key32": "5212N7J5ghUUUjCy96s8ZmyozWjRqZNiXeUPjKPfLXLcnaJZs5sgkjrk5drn1cmN3S8TZFdaWja2vxfFVqLXeU7n",
  "key33": "2S8m2GTUwZ6ZuyyQ3seg9i3AqMybex6tSNFCFNqu9CBcYyd4SjNayZtmqKUd7uRZvz5z6J75GozCsGJJNvSMWgzY"
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
