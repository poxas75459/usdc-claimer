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
    "3ssESudvtX8LM5qn6pJqixSuqBmGb5pv43maYCgFSgcTyrqo4HP73awWNmyPdUgdguNFFv1Y12LQaMaeriH87mak"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WE7pXXsDaCHHzBa7Ko3sjks38923Qy1XWwkDLC7WncU2QNyR7jvWdNfcWvKzdccXxLetJkBB5U7QLgyaQHBiu5h",
  "key1": "VGHXKmDyKrKReHz7r22NkMFaMZPi2XZMe6833VCG1VuruNvLGdMWFwwLkkw19JQHguRHmb5ASmXB73MAJwyQX59",
  "key2": "2czuNGxvgU8zMS3dNzLkownSULJndNgjTHwgRnwQ8NPHWjG1VazHWYQWY9AfeUcJ1B5HGqneJ6LpRyanY8Mxj6bj",
  "key3": "5ikSXkDXQVRfo422TYbFhZ6JKth2uKk2Vboxxujd4yvWucVrXUX8V1ksLQ3hKLi1MWSvNbCGXSmMDx4ygC7SgaHa",
  "key4": "29Pca5PHfs5npksG3XyS2iQc4R9TfUkcFtxp7tXpbtDYbyEkzGHs257ttFMbkEydeRTx2MnBUn3dWDpRb8BaToZd",
  "key5": "iounWKnKsuC5bhdCVaZ6hV15CTNHsC32j1FNFkEKJss446XNAzwXDcvEnWr1ehmhPkXG2rmiTKybgZNh3mY7jN4",
  "key6": "5iXJjgQbnoxq93Fr3J8eCDQVitnat6SrGPGhN4hajErmveqyJdoD2B2yLAWxUne8qXfUN5gyEa1HBmZcopCztJpP",
  "key7": "8qapjrrTjxBv7AedCM5DNCN2juWDpryfLSCFqBVA9c2D7tqY7urZ3JiSy9AZn9xGGBB8kksVCed6svN8BqmnLMS",
  "key8": "3G6kuQ6SosNbRj1Une7ec8qmsw1FszvvE8YDSnug8zg3sCeWbWtdxxGEkLWJmpKdBxQPtAFDJMEDfhgsHkrmMh4j",
  "key9": "SujLS5hWLvMCFzRwczRzJiMw9UXBJpYVzeEy8HjEmX1gymJnnsFuU5wAfxuAXWhgCnbonhpXRrXaiiCvZkBp9Cu",
  "key10": "2qNyRRWVM2qnabYKhCHotx11PBQsCrZCFZQevL1Dxp11z5QW2U8Xwh6WuNkDrk9pQdGmpEzExMbjmDk9mAkmLL36",
  "key11": "4Qvfge7V83MwKwicdjnxuh7k7GcDRNyRLxWK57VEyDdanC1YwAYQPJKuxRn3ZvNT65DsYojFFi7vyf8x66RbuJ2L",
  "key12": "3diXWBydSUFNeF4DYg23419gH2Q6mJK923bi7G8MhL8vGeAcaKnRNugHo1d6ZUKnWrbrW6SGAhHpqBAQQi8qy8sp",
  "key13": "5hFNYKcDR4fNckUTKmo9FHKnkp44GUhiiFeFdMYosihrR5cEZ6VeuBZmaYi4kznenkRahy6Drt8KxWKZZSQD4LFH",
  "key14": "5xM9G3zytWHjfWwbDbZyxg9wodRbv6eF7z5h9hGtZ2TaNYyLpFxdehNycKtcv7UoQE6pZ8SFCNvF4msC8WXqm3Kq",
  "key15": "5nc5TdPdZPAm6r3q5dNksH4jVizSvEGmVmyvvHP9LCqqZ14eyxX4fZgQbY6y4R3E8d7ygPLczzJJ6mUX7DMgkfgY",
  "key16": "2EFNrxJwNbUfHhkP16K7YnvoXpHMXKhF42XJGoLaNs5x2hS2xyjek4Bcr1tjTZwoT5ENHTA8QxRc9Qdr1Lbzmj2g",
  "key17": "3eEif1fabQFpxszrToTvsu5j3aSLTY3wLxz6cG6Zd92MCdeZXEBU2oV3YC1nEZ89pq9grUm58Gc6jRacw5yLDx7y",
  "key18": "R84zWX78GUkVWJs8NxXfGzXdobW1pS4Y57uPgfrruCJtWKQVTNrXZmwy6BAYQuEUHr6cGP9B1j1r1hkyQ5XBFbi",
  "key19": "2AfQ4YPNFB1HSaqta3BL59oxf2fXmghD97DVJzmybTCPDtuvvLZELy7Mhrp6ref549BKK25ejuccDA4vo71FkBE1",
  "key20": "7tu7Rh1yWMqu2QAGo1eYp9YBMxcaxA1u3kCRL86k3oSNfkCWRimsoXjc5b1xFdUL3QjCv1teV8oKQxmxi7E7Rje",
  "key21": "2dwjYGjfdeuXpT8aBPoLqJd7tSBF3fvAgmukRM5xoXnWNqgdt8QfC3gH8iHv1YSJ6yfhU3MkJgTEEDXr3HknALbn",
  "key22": "369Waa2p4xW48hBaeTusXxhwHggQPv69hDYfnJKhNVS3K72xK61fUVa3ZtWFuD7GiMB3aTYT8GATGZYpBiMbquq7",
  "key23": "9XN2mKroJgJV9scVGtm5tofMaebMEbPm1nDjRYFQSwE6TQk42FWNRB3GbgsYU4PFcyA4kEzXAKzCGYXRDnNaQam",
  "key24": "4qt8pqWC5J36aC8QaP7oCb1jgaNKCWJmaoyeUAhjMCEzUtMnZkz7kefMY6SVb6BmmXwuoEQJAvuEzact18QUpgTG",
  "key25": "4t3nWfbcbHNNbZvXU9NY5yLacjEtrbhhMK99Y6no192K4cZ9dTLLWuWoj3HhCiKoRF6u1DV9vZa5uuDuqjmj6DAB",
  "key26": "3XXiSyYtHfFMiUCouELyiL7sDKZ9xa45wG13bUTh8HzuVmhbZ6vemN9umTnFHFgg2mkxsiweDw9J6PEUQySApr4f"
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
