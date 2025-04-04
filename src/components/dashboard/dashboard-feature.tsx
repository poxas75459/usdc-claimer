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
    "zZAHEDr5ZHaxEf6sPx5yxaJ6Nc6q6TEmLgaxQs2Mcbih9XGHfp5DzWd7r1EQhZ89Z7ZmjbrNzJ3nQWnYQVus87k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3j6ZcWsYMRVqc2whTggwsgmYku1Pm8Uzp7774i7MhWZuR3jDTJqdKNn4noe1i3jKJBQaikDc8gt9WYTisLYmzzHe",
  "key1": "hpS4RuzNWxBczsNsDqmdyQEZFptZruv6AMRjCKwTztWLHrk1yRJhRY3EkEa2Xun3taJCmCGtmrTZdc5qLc3XPmT",
  "key2": "2mp5hR2g4sry39d2NUfiqQ7z24hYoJCBc9UnjwuM4RgvYLSkEnmRQY4bEk4QvtKUuEx8BFW1Yt1UDiuLy5cKpHeJ",
  "key3": "5qBGZhTrQcrQfrWBikWPWu3YfSGtVZGaYjUQ43mw11hEMVTKAHAdky7Pz4Cs4JYUB7BvvXzDJXMWBiAPJftWuYKT",
  "key4": "295vx1ZndPpDPab5i1K5XqypazNtGaV14KT28Pu9YuhK3hjyRxXr78vbYRkp1XLmurDTHyC9XGt7oqujq5nkVii8",
  "key5": "cg6UHEUNrjrzq1DEoJQBDGjDFEvjKQjLJRVExJZ9LvqvVroZxBCF89ui1ShMsTBsSspufXQptvhCBL12VGhK5MD",
  "key6": "4A3TGQuveVpYpY1RxZV5nRxcNrePsdTg2QoDcb1TSWJYzNdLdKuLb38gqsdHDcyzcNeVACNDizMf2cLWsWHXQL2E",
  "key7": "3S5MmDuuwRqgqtJz9hKHGV9WwL7rRPQL8FgSnSQSvm4rgkkmmHeSoZAUQKs3GjNpgaaHNcsdedt2VyBmd9Jssmqn",
  "key8": "2BRiHpFMNnp5c8HCx3zLGZKjsSfNKiTeiE1p89hx4RFi3AWPDphWycME9aUzhRY6FUzNVgZe6dULssA7Sz5q1kJP",
  "key9": "4RzvpDwredPw6xJdeFyfpCn6rPKiUrBeRUMCrEFBNHp9rtL43zBbexJfdo4ukd1UAS9hqUfmm1eVcRvqHVPWWnp5",
  "key10": "24nU5zMNCq7R1G2ncPqGXGER6evoVadRYWHfqtDan6VRG9izFtLtGnfvieHdXoFvF1ZKKH1FDkPrbR9U6SMXXo3M",
  "key11": "514Yz5UcsCqwJ4Dkxr2dJaLym1H1vxwApSpAgKmNsrWU79toG38F2iswYiPH5xd6UwCxvKGbvSQ9jCCK9fSkPKdz",
  "key12": "5ttShBqbJ3ZsEYj4QDED8QDZnG7W3Rp9226HWe1HLj8iLaVhZRS6Z795UyhCrwSfwia1WnxxAVMbuAhFpv6Mx1L9",
  "key13": "4AC8xytyga4MBEvnfk5NUsiJVLdfMr5CPXmEKbxDbmo9uuRoCfMUVjmMNsYBa5qgPtampxch62sQt58Nm79B6bSg",
  "key14": "4Sb3homybhardn9x6FmNma3fBYBgvzRf1nizAzMuvRdP2a5Go3ToaiLgf93wmUDBF6ekg4uNiSfTv5jC7MaLAia",
  "key15": "417dMDjFZnUkyGCcRxAgFyrTqnQzMM9AweeNAkMfZfFNHm2gU3sRYUmykqeb5icGrRwGZFDyK7aJfQ1o7fres3ry",
  "key16": "3mFygL3hURLA1SGrf6PpzuYGBBuJJVB9x328JkeeBquJWo4pdTta7J529cjYA5J5awnx7YwZNppRNGH9htjFpBeE",
  "key17": "5KicExYXo8JkibnmgpCeACji78xLzGm7XQFQwPadh9WeEFHDchtuTSMz3zbMbdBaCrWyB2xf4yABWs5Cgckizaaj",
  "key18": "4k3DcZ6fxbAVGHj93c574nYSXGr4f1vwAEdwGuMGyWkXCJS4rdvKtVkmb3jiRURBmEA6SZWZQuRo8UwBfnoNEc2t",
  "key19": "2KaXg8nAQ5AhT6c5Dcm8BJbCBXMg673iY6t2qoKR4XRKkPZHsrDLUKu6nsbWjHCXHweBFhtWviGBQkHDpT9r65Yj",
  "key20": "3R4h79FPaeE5NAZQ9yBmKbHXvZgofZfAHbFFq1MnGLNTEfYGd6UCUvLr1dsXiv8CMezU9iZdXbs5BwrctxSgsum7",
  "key21": "UY3d86GzM24jZWvoKSzZXj8VzSCby6okGnwrJT8RZ6pMwHtBV7eJ7vDefaa3pWb9C3HbxJVMtofiXSWDb53XPJ5",
  "key22": "4WCQ1DH7emEHNTv16kV3u8aTMHYByJYnKvbjD4cuyJufQTGUEKzLsvVc5YV2nZtoNwwoqcXFzpqxS4ZjwYntS4is",
  "key23": "3Rt87EMkFiFJTU7hZjS8rZ9n5NiYFLQak7dzA347AEmTRmu7cnzjQMY8bqp25tZ125CN9DJ56ZrkUcUXQiQMmB1r",
  "key24": "4a2XFNftyCWKN891StewFBLSPnpPzdj2kswbPSKmqKEqUhqiT85Y1wdkMtXjKBMXn8xZ71qv39ufgPpnxt7SC98G"
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
