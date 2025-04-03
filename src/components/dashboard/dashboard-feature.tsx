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
    "NGTyWwVJyTHaGxkjdUKUomGcariauJjoxSncsGNnZb1rVKoVg1UUTmqzPy1WNFxwrtKB7qYFi7gdbZ8JJyVvMrw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AbYTywZozpreP12vxFPNEQHSV5hX9EK1ofdUfEDxLYqEXgQhsRD17hjVUiBBQWvB9epZ2NQqcNNyevAcfu896SS",
  "key1": "26agmPT1aJzqLNoLpiva2DtryZWt2h7aGHpPzovRqpBzMnAuG7xKUtcgqSMy2TmygFNB1CMR875A7PoP9PomYHBD",
  "key2": "5x35qdxN2gknkx29vgJe5ToyTF4JwyCaJSKCE6uMiEJhmTeHR6W3jwygwp9qbcxAQvkwHM8oBcUyiSV8tZz3JDTt",
  "key3": "3CRZ1Zz7weFxPhh4dT86Gc7Acrkqffnk8RsftueBQboYedSc7RG1pVinYcQWNVJymZ1s41TACVxs6VSLFTEKiRuh",
  "key4": "3LsCNeFe1UTYGfSwHsbC49wbbnZeCL8QMRNvWWdSNhaJCsGWL2PDQmDNL5Si2jNKK9dnfqg2ZkcKcuBsyi2nNa5J",
  "key5": "4r1LLYvYhxCN5vUcKhyrkzyeKZXDpeAUxNnYPiZ7SWPBRfSVpbiEBXqvgZTXBNgDqp8Nx4p4VRZnSx1G579VgWvy",
  "key6": "WdJwCpHwwyrca554EExEqbq185oSAxoNwZudU2nKrbWMNn4b5KWi3U9vbW2C38q6yFnnyEMHoKC538ZjVogQzEK",
  "key7": "32iBfreb8FF2C4nEfkFbbh3quk7JUkYmE7NHr7DNxN2cfq6bqEX9SwPY8CWpFkNHFNuWUEmn8H3rVAtsU19oJ3uC",
  "key8": "3WZXc6ECAy6EXXb1k28NvR6stqD9D5LjTCmXT777hQ8H4SuxMB3cPMduNPtyA9xNHXMZC1EynLhtXUBU3i29oS4b",
  "key9": "3ksT6Hg54rCcyCyQWKVfe2Yvgxm7h3XDzVryvqvvvcRknVjYjSLFckAA48kvYCMuUhssEG1jENBNPifQDfgPEmVR",
  "key10": "2U7JDyRFS99Tx36xsUECaDa6cNHyd7czbPLEsetRfHfSkt2s9C8WAPTz4VNa5FPahAF6PzNpCrWbqDzDNXG9Bij1",
  "key11": "4dmgxzFtnHzphQVAt7sie2AEzcidwKDpi6ENQrAieT4KLyihydYXU327eQu9yCXVj81baUpmtARw8yro8EHGVfJu",
  "key12": "2UsHsUchPKVm2J7TaHqN6VYr8YzRKNYu8q18GbPr8fbWaPofL2ZuJjHT18yV41sqq7qiz38fZVqPvbgJxHJo4NkU",
  "key13": "3PhdZNC3cUMEVHnzKDLvj9yKC9pkeBAjXbD3bEjjzgfFjapmj6zEfSoZ5X7Q1ffBdweFrNw3gh3wm6yXsTS3EA98",
  "key14": "4fwdCdyKB2wSQ8NMt6izDGkcvtnWxwAbG7NCZzDycJZCQfL1sqW4YtmUUZH4bX7SD6Vwnzd6WVPfpDc5XJDJfx4h",
  "key15": "5U8Eqox68aDTACpdYsAkVYRrrjQ9cUrYXQHGtTMPER9eLiEwqQCAKhpLs1jpQftZ46xKGTWXZ4hKsydtzjUYFCEv",
  "key16": "2YaqbAyQP9gcujQK4eksHbhyh4FcZpsRsTJHCFNJH7roJbdCbAN5eVT4Rq4a5KaRRbZ2YpktubaPVRVkb2jvPEhv",
  "key17": "63fu6XsByQGHLtKsGqsLZwEN8yCVqHKhcnunNzEbVhvj8ukKznFQjsrQyheFcFuq4MyVXjEMbGQGHs2htNZ9Yav",
  "key18": "XgTded64ZwUZeioLzLVbQd57Xx7GRMwq3kYVKW3JXJoCZ55FpXzo6uH3WKfKsdGhJPoGP3GTHBMwc6tHXS2G8Ko",
  "key19": "62C1tXzcrRBFa9Mxqx13AzHWxNK8qzfMhizmBXdAveTqAKapY487hbBPheoFQiEGxZ3QheeKeQhZG2UywW6Lbd3J",
  "key20": "2ZhKrVSiaBowBDAkURs5whB6k99k9ViY1xWexsmpMctY48YcCnEkk2paTNdqTqSux9VLMJFkhsZpDby9q54gvha2",
  "key21": "3iJQRAJciF7ina95BSzRRKVrHfhtkWMp4wVyX7PjjrmkAR87m8vXnrk9RLJKn7yFE53iYR3LLRS6rePEDGhGxZsA",
  "key22": "3FtoM7KGgrNJV71GA8sGZ2QadpR6sHu5TSfJAeMhaE7Wa73UAWSVoEsPgDusq83TSF6keBeoRPgFupovGoxPs8Wk",
  "key23": "5kFi5BJTX9ERyGxMFvRw6LxGdsik94ic51nzaNVJzgGZ39gwv34f3VDEtBPguosrvT5gMspahyjxzXC95Anafe5t",
  "key24": "5KFRmQnZoxitisYuUJAjtn3s1dmegfnZnPKuakPcMwyYMesKVRn2G65hBmWUoDVbaegYYTiUmK9M5vjVc6MhNvKd",
  "key25": "5XdQiR3g34nMrG4nqkxQyiaRSdv56ahWrAcaRzzp8uZFL1pDAzRHj4kjMA7UFR9EurvMDaruE5jasYkCb3viByYt",
  "key26": "4JQ4j8KtqfDUn4Bxb1kcVttpEs7fADkfMXpEXdSKY2ZR6JM1554nVLAwqfaMGMrTxF7dkdANunAHq16jNb8ncAuo",
  "key27": "4yhiNoYpbsKKc6LmrtpysGjkqJtmTbxgLtTUHuVQGAH5qE91jiMchhKKeiCbtwC8svqZV55vHouN9C2qzP4xPqsF",
  "key28": "XdnKJiyf3V8ggd51FkEraxTEaWsBGo73MYY9PLQj6VHVBLdpGpNrr4E5hL5msubeMbbG3qGpSdAg8T7WqNtLBen",
  "key29": "4Tox9bk6MQhAMXArBipwHgD73DDocyd9bSp6p558ANecWg8CPWCDK8XKRqBpx1USTcECKLD6dnGypdWkBv1mypSw",
  "key30": "rgR1MczAY1VMFnhWmhrt4ff9YMGfQ8DP3PkZvXGhRCX3VZyWCCyT83kFJVqeTKSroMTvxpVT5d3QEiDSaEF4uWo",
  "key31": "3gwYksuEzA5XmvEH7dWcKaRaB8TL3WTpudeFyNtLVCR57aetbWwgV7ZVLBBGXrPkZ9oEok8e2zmpPfYxGwtap7Ti",
  "key32": "cuQHSXjjnLRYMnLjvW51seq4ZxqRQsq5oMNkHeAztgms4Ru5Kzx3dEE4iJakWbAV4MCqVFMniwHV4EZWwuxkdW6",
  "key33": "5f1tRHEYq2qtjYAfAB5q9AHdv8j1nQzuw8fdpdaUCRCjZtamaeu7c1xFMGdnJtgok5ywy1QLP5fHLDn3RAWJpmKN"
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
