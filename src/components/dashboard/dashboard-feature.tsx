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
    "4WbSfLpMTPk74EqKh7f9nFS6RczhZkJ6pgohyGC6UjF4ogQ3ZkkL4VTN32LA3wKMFKicxVCCqPzE8MERuk4wFbpi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i9V3gnAkJNtqDvUxK15jKMaAZFvjDZAeexs2DyPMSjptNXiV6hyqYxtjTz1gcW52bnTpbvhKxySUU5F41wc2KVK",
  "key1": "3TszTk6dQh1GtKbkGW6TaMMyFFAv1Ct2iZrS3W6CPEpB9JUZiLDp623tW5GQVGd6N6NVKSDWNdk4LDnE8G2vhNiV",
  "key2": "5m4NmpqYZmUUcR9qyBXDAceDfmUBWxFpDQn4B8ixVwVDAaVXsT5SKjY46G9oAFNw1hX1fzzWxnr3itN7qLvj5tsP",
  "key3": "34BrPx82Kh1PMraLb48oQYzZ7FHQoivtL9BXSbQZHbgshencRtzQjJXbhhjJHb7veKxSP7rtzAFxMtwYNQjqa4zj",
  "key4": "6sFtBuCK93szzdM7U6TSzpF7y9P38GEZTqpy4HPKw9tDYWg69LpyUnpn67tvUxNbSPtVApubhCoAdXV7nkFqw3u",
  "key5": "3dEJsdqEbRZ2wf33cB3FjSkPJ4zcz7RLbhkFSTK1WML4yWof8L7sT8qz4aJcpEjRcRshNmo8ZdcNc2Bj4qJHsrmB",
  "key6": "EcymUeWoNe4CuJhqefqGdRXo9YxJ88cw5h6Zt5w3MTkV8YwhPMPedXrtEJjYH9BdVxdc2vxUcTfVXCepJaFUsrQ",
  "key7": "3GZuirdrW8A7jCuxXy2wc4WhxhbeeyQ2pyZu9MJEcTGsvnxcTeEujunWdj8ho1H9cyrQz92e3yBzeZUu4TVEgka2",
  "key8": "22ovy29uHmFZJttN1K2uSJN1D5EHw1nULd9n6W3yFZ9tWVPx41KybNroAyypCbVEQ4XReJiMuvSAZLvFMnVguSNW",
  "key9": "28FEWLqHY5uk7zw6YH7ME6Q568zfoKajifUSqddqgQykdhDEPqiaAzLoRzX5oyfTkg2J8Ejgp9JHAGwJcR1LRSDB",
  "key10": "31R1rrpEoVH5nU5WmzrhaX4G1VGZEjZ2J6Xzz9vHwzYm9jkMwF3fuZdBVbJDSjFiinbWezBwyN1PUi6MpwUN471K",
  "key11": "4KWccFYGCKx3HqxVuNMCAxQMfi6ov2svoG9xGX6fPGXc3joeuEwJEz79sgeBT43JZ4wCPVq2w9KCbH1RRyFETuA3",
  "key12": "5BVLorNqeDR1gffsdnuN3qXx1UTQwHhAR3qzrLgGCCMCBJxdpvTcVgCkhExoDNpaTGeQ8kF81q9KdGcc9DXvaYTH",
  "key13": "2KgiWHeHjs8qMCH9WDtdoDiBbij9xjC6RKAiVJyC1ZLeqgaQ9MagYxeHcQAA9mE3S7fVRsoijtsP7pijNvw7BhWz",
  "key14": "hGyLiUspz6zpDV4TNVzMerynGH4TUJnPSzXBbzQMXu7PwcJjGqxfaYX2GeD6nCm7d9K8hbMX9uEKNEgsHs9iJpf",
  "key15": "4SSPZqzLKCTkAnQLuDpGi5Tst5RGGq3yQqKRbiHw6GfQgBt3c32V1GwdPXEXMxuBfbqGEaFBvQJrim2C6VeTQgUj",
  "key16": "2qNnZKcN4BwcojcW432bqHFW3JyfMaBrhh7DPt4j5R8JKtYP3rARjioHwSjM1KSmhQEwxJCreFnYSHz8Fa5531UN",
  "key17": "frqbpQrZjRSFhfSHaduYqy4kVBgNb14nsudSxBacr9tMYVjx6HtLzASaprXe4eEwrDzxgmnVCfoXmncLxz5SPSr",
  "key18": "2hQT7LgFnz4xacZYRMaQNBzsoEzbWefAY217FeUG6TFnncJC4ZubdT9hYRkbgavoB2h6NBfKduqAbMVzmTZE786B",
  "key19": "3qLkJ34He6vXK4xRYsLnn6ooqj6LtgkKVK6eCARvGezJrgK2PQhJedDKP2pwX2ddYLuGdfebB9ZT4QUno66gMvQL",
  "key20": "58eD53PPmnZLRxdmjnvEJN7eyVRhJkkJrbyXHwQmw4z8mgbWj1LTbqEKLmR5NwBd7V2DaLMjeW7y1rqsfTTZ6wvh",
  "key21": "mkhzijb2dWbLDpYbbqstSVRxSwADpqfzDga1PeBGmVVYKCv3xUsghu9hios1zQGBxCRL3Qy5kZhp77kVyD17rEU",
  "key22": "5ducyH5aT8ngHjRyLmDT6WYdVn2ZXAToyruzXocRkqAcrFy8H7egzAzi8muCCu6V5mnyhEQ56vpuF1pPVzqQYFF4",
  "key23": "5vafGkuRDXzrt8VsM2GoacgyuFKuPxYJCz6g17inkM3vxCrrv7GDi5QKqSyjfkAC54C2NiWp7kbP1UgU1WZg5tz3",
  "key24": "2BCTeEHpRpbga6NTM9wDpmD4C3a3emiHeEkQDJLoRRCipV2kzCgeDW3UUHzcQ5zS6Y8eMdVLJBKrPjNw4SK215vu",
  "key25": "34dmNbdNQVc6auhoexyVfcQ4aXgiXjaUx1gL1uDyc79yVzFztoPaWNfG7AkKWauk8dPQNbm628EKrGZpt6pibszr"
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
