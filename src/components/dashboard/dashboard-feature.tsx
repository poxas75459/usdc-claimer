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
    "3QRgvhS6zJomAZjsEfhjhbMnwB1poFFzaRDdAtFF63UBMbWr2h2mJxie3VgHtGZQwm98kgKdt3YLBtWYUxAopVwc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sMMompeokFp51F3y4XZSdZhM96Ft4Ynf7qb9UL4XcxkGP7c1VC4f8hefMNX27WrNB2tDzLKZztATvmgy115jygx",
  "key1": "31s8yQLNixJFmoPQgvgDHazsELE17fcCaZJgxjJw2PnFLLeMvnK5va4c7t9wKFjyuuEQqCWV7CaSToUsYezs9q5k",
  "key2": "53rb9XefBoX951yGp1sLSKXrW73mDyH8yTDAG4mymF51U47frdBQasuNopZKQJ7noBpbBfVCRegw8VZsW5assxX1",
  "key3": "HUmhVFjgu8GN8CfXStCmdmgcHaSL9gMikaBwCrDaJ3nNYLDYvc3X6EJ8iWnFCPFpDSwddxdjwojxq7rsUAnpwES",
  "key4": "5qb122kSEwqBxn8PQ72YbELZvEoZQJD1nxgZegeHdyFwBHoQaeknnxhzZcgY3hnysQVEFqR9oZiJvYz3wEAuaQqM",
  "key5": "2R4YHkwhgUbDnqNJ99DcZ4cWBmjPuhtJdPRpHzZUmFvAGEasJ6Vih4VFS7GnDUc3X8sEX715wZ21GdHee4f5UqQ4",
  "key6": "5WJn8nzwTA2GWGWF6XCGU1S9jNSFHGG6thkPz219at53nsWdTkpgYMMFjZC7LU3PwJjAv1W5Yr98S6D5iRo3PgtD",
  "key7": "2sdumbGVJejW5NM9iY55Sb8aLgCFYigtpYfXSwYX9iReY5Ak12yCYxF2n5wZH3nmr5HyTkTxNR6XzxPWZQSVCrQ4",
  "key8": "4LAwCzjDm29EUyTAuzDcdTZLrEF2yDwjbU1PF49kRbDMH5dcRFpTZvPg7XvdgPfQA8h5CPbmQV16FjTK2gtz62Rs",
  "key9": "2XXr7bHGTCXdEfwTSUHkgzUJp8MGjVKqqbHAeDPZStr2eYdV4xY1ZxiGBEWbPTpTxM2dudhp2BiFum6cvziM7gBe",
  "key10": "252Tt8m41ewWPUrzXQbHDCXo8kT1NpVun7tUYgAiLHSEQvLpQuVGZKpXY3afCXptJutCk6rQLx9Gw3XQSSyPhiJa",
  "key11": "5EnrN78troci8jcabiVB2XEhKXHn47gXpwoivfBV5xn93ZE1GD2JjrZSux8iymubkrsAa3t3Bhf7UF9z4taNAGhB",
  "key12": "43rTN7fTDp9GeeQ2veikZycR7WhakC4f8reBmy1jWm5QAGUWVZB4uaWyVZmZ1bFydiENYAX4w8DngFKudw7xdW8y",
  "key13": "2qSNUFPvDfjnmRswtwNHqVK7MCsKscpBJ3VPPewyERUtEGgeeDuNfpBjczWyxsijkV5Q1XqANMTGSyc6fYxHb1mW",
  "key14": "51QLm2zTsUp5N5YHKmTLfTAag455FQG6d3MRJx4MgLSzEH3taR88caYh8YwaVLisZxQS6Gr7VGkJWkS6gWczkHGu",
  "key15": "276VNfiZcmXuec3u5kJeaZ6zaTKwvVs1WER1nPwJhKRbDch8rNpjTEFGhTsvmw5icM2tNMHqXUxXG1fWqfj3XCGu",
  "key16": "4C4NaXSonSGef5gj1n996qqVUPE9NfbrZ1gRB3AF3u2LJUB8CJCgsFaTJvQFmxv6pYUjEYUqnARWwJpnSvJM5x8h",
  "key17": "3tvSqryD37oEuAyWH9fD8wYBLwBofDPVfn3X7KtD9v3t9N24DJwEY65kEv7Mghn119Nu2dFj9yBLqfctNUk5LXUB",
  "key18": "3EKpBjwXU4RRfJygq4WP61UzAGKZF1efxmht19kKJafSieFcu6fRnMtYGFBD1DpiL5CcfTCghAcqcEq5yNkgBPus",
  "key19": "5VcqDDqRTNWDeTBg2CndXbnKhg4topJLruXTpdvQWosvVvbTABvk3BZRJGcME2p2JwdC61QhFHar3XySyVGQ33hZ",
  "key20": "2WKjYDFbBrhdBmuZw9fDBS2kWaJTMG7tVsctvnjzSbpe5hHyzyEAnhM69jKkbi4TH2WTKbrJU9urUGYegFzmiC7f",
  "key21": "4bYYbWmvL1xXgLRZQGk8bovJFXFApt1tenYW9ighQMJ8mqBwX3oP3Pytsr9NZ5fUeaCm4GsPcTZryXHnGfY3U8NW",
  "key22": "81fvANftQk6cUZCGjq6bvB6kJUsmTBVWYcAcuK1VJMicxXQBKnrjKpjZz8HEFLkJCovbxB5RWYcYZyScYxDwJ73",
  "key23": "2PFfeKZUdkw6GEA35Smz7Ww4ShzBDzskogRGJSasSGpCr3axTE25gfzQckTZhgV7VbbLVwZR5EyCPGm77T2rQi57",
  "key24": "TQnFqj4Htqhzm8fng1BA1EMscVNZqqRifDAkmYBDWidBm7GVEv4VvusyAA2eFTBS24kwwqYKpyb3d1fovtu3QLK",
  "key25": "2nbPdNChGCp5fuupvhug87xDsJnpmr6CRedFp1PAzRStoZ2MYkWhckKRpo1TDiwiKqCnVJVjyMoSJAy2DxLFEK69",
  "key26": "3hsDwKxEBwQyTUttfnCscV3XusB1CrFEB7Ed7CrZogtLaopuUijgTpjoZkPJCTqzqxowsYDqdjebEwhH4MSXx4dL",
  "key27": "3XQHd8zhk8cqs5XxaYfhy2FhgoqMcaUNwsk3yD7bHZ7HNzoroSSArfux2zyidwX32SGKsSCk7NrfUjy8E4japiZ5",
  "key28": "5f6LNHjxjiQXm1Hip7Pn8AhoBafmHqBYWuRcS9MMJjQZK5nhuXhRdCvW6keQtDEbYpYWwDmykzm7bEQ8eGcNQu1N",
  "key29": "5dZV7fgbw6ns9n8hweJXByhK2ZZ19pw4vaRPHGFmPsJiFYdNAsYGqhNTPSEjBpZqycG31vkMNwLuZ2QJUPpJLESj",
  "key30": "3AU6yWC9L98YF9r13UEXYwSRC4mLugxFCxP6Y4v95sTQ3JeJeQXzSBNQuP5WhzKHKVkgwdmfbHJJmCs2k9i9R86n"
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
