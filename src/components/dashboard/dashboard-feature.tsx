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
    "4gKWDuZX8YkLu7t9UeB7xDYFSqQfNskhocWhLKJ1PrmCxPujjjqUMW96PemsTWQT3GRy1jqvH3BvGqSx69SVxADJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JTrVByPoYxs1RnD2nGthK4Eep5NUHQztrSUQg6dUaCxKXEUGAhRjNMa36m7Khd6Q3xSU1EKX6eSx5GZ6zaiFCs2",
  "key1": "UioSLnbLBxSTDhnbNBFb8VWBQM3yw7uFsLsCh4N8x7GKCtiErCLfynvYcNx73nEeqys3wMEcJRyBdWnMd2xsroA",
  "key2": "4exF1a99VTXok7Q41GRYeX8iFyd57pPbe6EyM3JWknkHXQ94VeC8ErK8Dd8Ggz9fpyXzENRpVc6BhZG11vTo7BLV",
  "key3": "55czAQbwWYFazxq9cEQWc87PaSJzP5segRWsNdTHMudg6FuwuH58R82Nf4V1LL9kxMp6WfBSNSYdpfHhdhJM65Sf",
  "key4": "2XP6HYd6UELZaeB2Kqe4mSVW1sxPdt9CGUpTCMwvg7ErJ1t8bU21w6awPPg8LahAcMfAG4qfbDcawiPvCRSVVHzX",
  "key5": "5JSAZ37CkAFDzyZYKYX3Qv7WSa564raXk9s2hk2DLV5iehzXqt1ZKsZtnN59yzJtp6ca5ezFLbHkKNpgqcy3LmRk",
  "key6": "2bgNiyRhsiBHfeDaPfPzroofY47HqBDQNHdXTpVFD9RdG4CQDCjyBtrynPTpAnYZP9C43j25CWkRLvTUJTfhmsEr",
  "key7": "4gKCUGTJpZ3Ty32BhrEAN5YTvRBV1wmXnw6ocu73fq6j1pmuedWmht4QTerhfwWiZmHBjANriYenUKWhCJ6VR4Af",
  "key8": "5uh1RMYFhkFj7EFG3sDot3XUpqgbWPUtbdwh5xQXxGT3zsdikPVjvdeoZc7kP2vAjGDewfwPCHeWEjLbYLkeacD2",
  "key9": "5coZVzRzuziHJhw9Sjkqdj8mKW9oJXrYJMnzNBm8Q3mCto1QA8cV6jUcBLR7pYVxZ7Y8HhCzF7evUEDLQR2pFMZX",
  "key10": "3KosHiHiuAP8ipDZNYVTM1cyGeHkinuFHaYa2gEv3WtgGXnuaKoQVdfmXBEPLCsQJsSd3f91UihAuQPgSmSDzu4V",
  "key11": "2zDbhXNF3hmJcHn3cMmB7unybfz6Z9FCgj2eYAKhTt4emBfguCKamEyaKahiPyaGH3zUCggUerBLPUAhqDoxA1eH",
  "key12": "658Qy2oCTceVJ21LwHjgXFNsZ6YNwv1FBwfXayiR4dAAhMjbriL6bDc8Ge5vhQEkR19rym1UFHVrugCC69wdb9zH",
  "key13": "oGZk1x2Twrvf535YKJPknJAk93hqodmUDYAeyAmF6PTyzEGuoHR2V7mPvPZW8RkdKQzVrVoi5tAmTrQYGyMsyEG",
  "key14": "4441mYajKkmWiUs1yWxs77ZtdAQtkBUqWwrkabRYfw3YXgeQwDY5nSngbKDKkxkmFCqx5DXZ4QCoSA4SRrYEqyWR",
  "key15": "3ExgyabfWFFzBXxDik4qcUdze98ZUeRxRbodoYtNkqVFFkqxKy5PSzEpwBP1NZsdJiVi1ejBLUqDX7iX3b4UpM5W",
  "key16": "48GJS6WXw17mG2xmFH8o7evFK957XG5Caa3NnJ1WbYEis9WWEuVf8FxwDZwCAxkrKj7xarM8n48FWQvVKX5MmvwF",
  "key17": "9xU4AyKkqxi3Ud1aXGHRm3DmgL6Fa6DMFvyRbPJq4s9bKTnySmp6Nd2w7hQAYgN1Vg5bC15NWi1fGHZtXm7on9K",
  "key18": "3HvucmyUsW6SJ9USjBouFqAZ6Pk35sgdSPnABj5kikMhYQuTRAGxw3pH7PBVQifSX67PVN9SJfLu5y5KeaUcj3uh",
  "key19": "4LEyNnhLskcZ9MwpCaJnQJJwJtS3wADf3aVpHzt4esmWiaKFE9qjnTp2aEUKyg8ZbjpaiFJi9uUoE2qjnigXaPMn",
  "key20": "3jMF26tFrtUqccjJUZDJz6ApKrYa2dJt4NVRjziAbeYy9PamuqhpN1yA1VpxPSq4mmn5623zrMgNHDKEWchF3bQ6",
  "key21": "3ATrn1NtxrtZBEserf4P9M1z8B3kpuYuePGj63Q4evZYWjBBLt8KaFozpPXXv4f52mwkv6eVqsdDfXUvKR1pdDRu",
  "key22": "22cCSJsaoifFvc1ncYv9CuCor886jHDMw9G8gi5bJ1SvBqKWaNihxGiAdZXteJokNAmhkDvVzE1mKRXuJLXmoaAF",
  "key23": "3tXCG3JXmaduWGVZaLqPesKCLrCDnYajMSJVKR77e7axe1AFjmJjYoUCHfRpfB29Ho83nBwxirC7KF1d3RAs2prC",
  "key24": "2gDxHjqH27z4BSoK9jWVyUNQRrUUNUkUAHhta75uVkZQiuaYpZUdNAGQ8NZqUjfRU8PMvD7Vvd3e7GLmgcEbT8iV"
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
