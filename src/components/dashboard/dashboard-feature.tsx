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
    "5n8S65WM3WTjTbcTa59mkvTyNk483WwaaoxyymEco5txJvEHDoCo8dd4CTKsbLt1Ucj9Z2aQXEC3UkbveU56N5dj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YoKzniV2g6Hj7gPSbGFcDdZYFw3QkUChFM5x4iFbuac1X1YtrzKHghowhfVZ2VWuCnLKXZ3aJBQSw9n11r15FUu",
  "key1": "525BUz79qjpVGCrqGHT2qB4LR5tuu4a6Rj3HRrQYnKiKeUSbRQREnFwLZnB4hC6G26w7Wpas9aJGekic6cdA5ngA",
  "key2": "4dnqvKTNGZWxLMhcPh9fgngYcGAa7UeBQXyWmP4LJAyb4NecPatYoMtveGeytvq9wNhdAiwVhuNEd1o2cB6R9ZsC",
  "key3": "3k93vo6eKA8B58AQVRLE7fy19wctBkZ6chRNpMdkHivXtSjbuDm7emMi1XxSPkVwrHNKP5y3S9tHtL5f9XR84SKn",
  "key4": "y9c7uraDRLGNfYf376q3CtMp3WNnMc6C9U9yVZ6wSvTLNERUArmTy1Roa7i7UusNSbxaoGqCJyFYVcPX7SPyAgt",
  "key5": "2qQvQtUeu8J64nsaTS4cbpjfpJKMpShrbzFBqo88XEVHTvjAM15jsGvZ4V466vMEb6HPU9QCj2CsT4tGYGu3ouoj",
  "key6": "3wDNEMTBzZUzYVTYmHhFkX7TwLwPBXxPrpVMBFNYBnnUD2wcRZvysgN45i9qVPNkKLWBnaxXAvPUPfjy4Vr4yZRL",
  "key7": "5h9eRmPTwbVPUYdu8NQ1jBzpoYvdF6RCYgCRFiJBrfFWX9Pkmty7KZA4MuKehNNif9q8He2TsjpfWBmKbvS4yz1e",
  "key8": "55Y5mdWmyfAS3G2HAVEq2arRA3FPMMZohxSaAmGGMViodC7HTj8aVY9MUHdYTbmkpWtqVBoT19iz4j2vpcxC5Rxg",
  "key9": "CiNWZfixsbNPGkeCTpjPbAUeQhfo3L3Ys5xgKgjwrWS2kLoFrYR6PjhJKi2Y8CjEjhf8JC3txvawRPHg3PNXH7z",
  "key10": "47UhiBpWhxyC6vpChpU67rb9PWRSJVaxHsy4sup1FVwQjzzFo7XgwCFrTgZ1hJA2A8r7DeMcS1nCYonHcxwkpjwy",
  "key11": "5SV6iXebaTFhr5vx4fT256GCPXUsKnPryKSYNKSCWfpQxcSRrn9Ff5Dfz2a9B8pFQyGZKNrLZ3JQP4omUFGaS4UX",
  "key12": "34R6K6uH9izxMrFgymuKup3mDLvoJrvt7tDJNnE3XXxuFVZ2a69ZRurT8XgHTahaNnETT9bysGe4KvFmrS19RA46",
  "key13": "PA4bgu77sdAdMuvVJPueoMsHULuJ3B1y5dkn1Z1Cg7iKABpgTiSwU3vmsn1zgrtpZmepNbrk1NFppr6WmKdRRFV",
  "key14": "3EeB4HMKBXDDucaGvfG9j4s1YgY5rgJRkNTuD5AKJpQVnXYT3QPYqWqhomiT9qzC11WB9Ju3BpcfNAD5SQc8frKm",
  "key15": "3vLmw87MN73j75Jhuycfnw8Rfj2CKbVbvypcUY56tLLAdmtazuULDtiLeVx22zuPqC3P1SHv9Nyq9KzfHa6HhFQq",
  "key16": "4tEwtxE8nRjWs3wpZ8J9UcBdX7n5ueoZBzUZSLkbBj5pahdadGaDh9tDZvbMMRQhj7tFGiXsih8ndeSEuUtYxBEU",
  "key17": "331y46mKZiEMgknTwoWgDKodJQnP1bVuLPwNBt6YCQSHaPPT7iN3kft7Qn8aRYYanyk3e4NnVBZUH5CxxafqmqHd",
  "key18": "46s1a8h1GPNZ6qV1zVJrfweZ2f312wrbcYhxJEDtCxgcg62kXAEzaqrcYS8eyq1WasirgPPvbmH4sKtZKyCxa7Tm",
  "key19": "3MSRa9NKp3cuF4G3WwhFxqVQTzfQCLBLYRWLTdCqPen3rQZEAv6KVE8cJituacLwkgqDHbNKeF4SD5rSLMEnzb3d",
  "key20": "ci846k3rbVE2MUaEpon4qpnretNSmuQpj8mm1PT1vRmaR7uKFKYKmVrABQGwQhtx8xxrtAuhMYLdLgGhH5j8Jhz",
  "key21": "2SfQ5iQrAnxZxTFAVgAVVPSAJbgs6mCb7XhS4p4aJt8bFKV8WZeNhV9AXHHzD4ABu3jhcKwXvDEeRyhu4M5Qacjz",
  "key22": "5Dk9cFkKuDFDiafniKvVuPL7yXTD92DfxcGiZ5dEyoYWkQMd6dWtkesCFEQpkAK5pwygcic1VZ7AxsbEmXzoKueB",
  "key23": "2QG5rzXghiSYSxDCBrdheDzRY59qhZ8SLLhRKxhYy6NY9D1sup3nDQ4TtUfgQUcZG3hN2WbDiYoAYFwQH4ehvsa1",
  "key24": "3uDMEk6Dyh3seFb4thKzgTAPksaeN4vwwJxYrxTyqFESWexNwHWkYYGUsdRwQGQEH4jWspRcbpR66vo7MKt2KMt1",
  "key25": "3bJPUeuAJbbRWz3agVHRA4wTeHXuvnjyUBdyTCnpAaE6y3Cavrv86PLGxfZcSUt2j1gtW4E72X9C4ns9byXinq4a",
  "key26": "y2VtufSR74DH4PYVABCeTrJNmWXc6sUjBQu48AMUBf2Zamy25rKPbYwQh8UxtjZaHMBnsamxF1dvVodSQdzZu43",
  "key27": "bsxcDiQHNym25ZKHhBEptcWkqCpkenq7psafEJ6VQF2SPSbBKnkLmNmcYuejyHpiyrTMtBbhtytAbjfrYiVPbbB",
  "key28": "NWBXUX6CQAac1hJNK5Cu5ECbwAzHttJQQt8sNzYCzDpRf5W3HR9wTTra41iGt3VyWmLqKg3hxVU4eK2HHoxmPbQ",
  "key29": "2JPJwFMFUrtokXHzBGC4v2xFxG8yDN2yvndAiZ9Rt2J4fdmifGdXV7iyaKPr7K9SS9CY4tdmcwJqeXB5mgEGCTeE",
  "key30": "3VYV3b8hReBEMgbpPejwAQ8kcoZ6vKQpxAjCa1aMWMLFootBVjJGpoaqLnSQKKPcE6GJj5GqqbysdGzT1sNd3gZi",
  "key31": "mUMKLVN9gk5Qj9jXbyHfTUpYGYQVnFJyAb559Q6s1GHvci1ARFgWW19gSThos6ngZw617TjWRx91u1Jyt6tFpFc"
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
