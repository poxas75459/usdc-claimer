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
    "5hrr8aCFVq1GjxsNLg2d7aYLKHPLffKsAgFbCuHh8uLp59LJXD6RpeiQogUP79bnwYKVyMWLkxXN4K6NYzguUG4i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KW4MGxeZiUkQv5uiU99fRfHVhbM4Skc1rR7vCQGX1h7FaPHgdeAoPcWvvfBXc5PwCKmWQ3mxccEZnsGw2YRhfyT",
  "key1": "26oSz2wmmB1rPCkTWt5G2v2XYB1drfmpX3xBSryqjbsLFcpjUWiwwr8ijjGLetcivfu9VCv7ioWaUbeXm2TVX77m",
  "key2": "3ZhsyyyTyzNgKCnEyM6Ae7t7aA71Cbhu3Zw37W2qvPxoUcmYWmTmnE5GxmcigMF3qKXotR2x1n8cmCqGTgcr9Aqq",
  "key3": "3uurPgR6KbAi4yxRUX8tWeScdEg2fMto73YniuJrMrB6ECkKJwLgez87qBexYGphbhZW6Ski9KVz2UFpwasqKocn",
  "key4": "2oUdzF317vZUYAXLLzwBYcxzXWrCQ4j6RDnhEaupCLVLZ2eJvvAUKz12g1wFeZdv8NpM7KZrMhv26kVWTAUdsHjT",
  "key5": "kYxLD6Wx44wG768Y9bP5NaqoHhvJAj4cuRsvBu3osUaKESsDxkZFifv9RiqStisK4LjjRVMrrFazmo42Hx9SD3e",
  "key6": "3AHf39t9jGxbLcHoaPXuPwcV6rrdwwUKgCTP2cAfhkrKStSjgVqMdqQPeXPRtkqrNs5RGukoBHGBQjYs8funKkkb",
  "key7": "3AEsVXfD69AShE4ZZLNxzQsciDmfvGYxrFJWSA2KoYMeU5Y9tV71Heqq9JUosDgJxiiGi88iV1mxAzrBdvftzzvv",
  "key8": "vj6hne17GpDW5ag3DH8trHGrYt2a2hYTu4CH4hRMw61T4jdkbx9LUx5rTe7psWL4sYhCwehF25RSs7imBb9XZUw",
  "key9": "3fMwjj31YAei7wqUwdNVc7sqT5emzNPo2VkvgPJyqh1gQTbGGrmRFr6LXiDzSSg6JauUGz5Hi1NoMr2KCh94iWYh",
  "key10": "QmRirVEXPh8pxQZqXyq1JYRicbhJzt8RWpp5bgJyQQWwRJcgBxL2i8ntqrJtaoUEsR3Tm2MYh3xa1RfwgsNRRAX",
  "key11": "2uPcm7nEsdYhzPwCSgswF8sb6NW5wrqLFYbTNUuvEGFCFm5qHdv6nSMDn7FUErQxAiqr336aRZa4LeZgVxbLBHxS",
  "key12": "Ja36ipHwL3zh8BoL5t3kRNr1gNnvcnGGWEu21cXiFgqvjSnGbsV5mMXAn8KK1tWB2gxztPvF4VPm33r6o4zs2bt",
  "key13": "Ugz87EUP9b4rhW9jVNdP4s4X8mTUwoETZwNGc5PwARbTkb87T7Rhyet8eyFq1SDx19ipjtSCgXU5hfzawACxdAZ",
  "key14": "5o5sYpUccQm2KdSNasQZXHHxYHEfdUztyys5AE1KDg6kHkRB3JoGawPxtrTGqDg4EqPT1ddGR7AuyeKUAMrDTkXP",
  "key15": "4b8EG2xbAV2qGE6JxHwGugVPrL4oJRgas45CmpFVAukMTigmu1Vb6ynMk8HkJJMrKDnZMSzQfg6NECZjAoc4HyFq",
  "key16": "34iNDVj5fSks2YKcjRJRCq2zHfTh7qRDjECs8C8ieLTzKu3Uhpzy8B7QCk9C66EF49v4jzbq2yd3LDFArVMeMJEH",
  "key17": "5rHiHbkh28rXNuD4DC5TaMToxobBfTa6kftZPNDS8tQ9TmUgKjxZV1tNHomGsbFV2d7e7P4AxdBCCZg6HriyAfDK",
  "key18": "51hE14bs4dq37bcoiChmekV4WCREFxXcH7JtJxZz36k7ybs5HBBKomhSJLKDWkhCNj4KYMm5M2L7mHn9qXXhcjXw",
  "key19": "5SEM2rSVg2x1WK9bmU8L13uR1yyL4h1WgEhTJhyzXuk8bdtdbgn6ZGp4TeNDcABRktECMAhzecLvhRVUKHpvhFjL",
  "key20": "32FbyAXw6LAangaMeB5XjG5o836k24HTXN5FCMWLEJRAEKakMTdpDYJwWxAPkuwNDW2m7PnqWznyLMqiLFphuR64",
  "key21": "EYNf6QZvtzE8n7k8oSBXN81nJoUWK8d5X4UPEPt8oKUPHMkYnnWW4qcAMSFQ263ENhHvKwwMZu82o3U7rAzmDRK",
  "key22": "3MoVAYTgxiHPrE7ed6cygnLBJkeUHSUVHyiRc3t7YUymuCwsKetpaKDnP9nzugNkzrRyf2BMSCBPC9cpUvJPLHJa",
  "key23": "5SJAFmGWW5KujfESm6Rm6wsYZ5CX5q4g9KDaHpaR8bEZC7hbELwd7mLjPHFc53hoeLHJDbjAjyQnkDnb1avH31GU",
  "key24": "3ZSFmHShmzwaj8JQnry17cAzHnH7wHbtKDedcydYjwGpYqkWPUoWboLj8ekUKgXwVDw5wXRfkDhtiKbAsEYcZN8U",
  "key25": "5AG7eStZpjEscFCc8bge2AbKgD58kTPMZi7BUN8uiaRWBRuhQWDG7KwZptsrGES6k1r4LFKa761PTpTJVwtHpw7Z",
  "key26": "5vUyUo9jWgZVE3v48ArjiSzdv5Z1sLVL9Ghzmi9FvicQGz4y11tadCLHP5DuWUhKXkoG5PdRHsVjq7S32RQimBvs",
  "key27": "5vnNB4UgqseGSrUqDV5QdVujxyEYXvoUgNxaadd35MNwJstg4j4mH3LPk4pgtNuGZMSgmPpG7i7fsVdhaZsDmUT8",
  "key28": "4moDvpiGtijBUsjkHUMs3gW6DEchh87eJ6hMwbgV4ziA9WFGQV7afPMGPwsg67Z7npcD9VQ8iGhMM6nmVqPaZoas",
  "key29": "3qgkbKa2yzGL8Ppmv6ARnTd7TCswpFrNuDS3xRsnMWdME3eM5CQnWijBc2tAovQ4YGvGDE7P55B7ZwmPoay5QkE7",
  "key30": "WrhfmQzoQbta6sVVX5b6suE62tubmnRvmt11eF6HzoEWtPSQ3B7n4xRFztnHZpGoPmrbL43SapDorz6jQJYffPQ",
  "key31": "6C8ZxTAMUWtnXdQVucfjkanoFvGvmDhR4iGkzSPZ5PKowre6eJM4e67e746vD6o9BLGD8VKR3iZarTPGVqECeuh"
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
