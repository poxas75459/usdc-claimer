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
    "4RzPkg5cHibzccBJuTQkWZ1wTK2T9zbCruusr1BkVGeoBe53uedPCjNrMbe27wKa34wxbCtRqn6KLJ6EpxksWYYQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3omNB3XSwgnxYcEPAtPQ1nBATDQv8VoSHpzbRZVJGyDFcXMDGXk3pe5NPBunAUDMWLD8MbQNHB322sSb9sZo9SuK",
  "key1": "5raLPMELQaLpA9Q3EBp1CAHRbmsDBgCe4r4xUVtgpujvoEv68Ft9QLmnNpyS6DZn6Z5MwCRpLSoS81tLEkSBJZTn",
  "key2": "5tsag9cf1gwFgTTwF46rFdrxsBdSGeRTU3yMfx4NCc3rVF2uVHXXevvQWKEuG3wyqnnb8C3JqgLHHNRdVajg3DCn",
  "key3": "7dnRZVgfTUeVbbf7FvEsq6kmLkNHQX2h4iN6qStAfyzCDZqTptwRYFgc73XsvcMxHRMtUacTTEEkP5LFwHm5XcT",
  "key4": "5zZHzqhW1PzRH1oKHG2FyebMedhGGWK9kwLdmzwHFNBhBfFmQVRZKRHnHKLi3XkUdH1BGS16dVKD4tdgLWrgnsFN",
  "key5": "5kVcCgDs5rYyxgpxLV6zKzc9ifCyyWcVa3NKiU31Bhd51ZCsRhzRqM2XX43LF2jD4eRRkj3jNTQGAhER5E3WXiLq",
  "key6": "3S76xcyMuAq8kaYBuXkBdvYkhkSUWe8DhDi4EE6PVFK8AJVmZcrxF2if33c3tqamiVy4CcNx7xXcnXUU2RAXM4rb",
  "key7": "3tFQyNLo2jXjirNNqgCGDpNXRPfqLSjVjmd4gVVgcDEoJQLxqRwoDMFZmfMoJWGLCcFQcHxmd93XwMR8aNX74Enf",
  "key8": "47fENFBQo5hUPQkWrgH7w5tAKv6cDJyJwv3xN6GJvXTG3y3pbw5T152Fa8HFdeKJiZ39QrkhFzkepLg2v2ntZDiq",
  "key9": "VKGgLcCZd9CXqck1Ap1288YSELFijR19jyAR9HBvabp5fqGDPd46aTeGtDybkJcUm5fsjkRmVTSWWJE3YndJT4B",
  "key10": "4svWH35AE3oFHaVynbSjSk54ScspZddozVaFfsFUGoTEKGp6PpyzN51wxsRAdUgaNJkwaxGmzAwaLDMkV9WRnciF",
  "key11": "Bem9xqcyeyqDmTfT8XtMn9845qN28bTQdfy5iL7trt5z6NErDxWNw6kwqpdfsCzGYekAyKa8GbT3ySXAkwFhPc1",
  "key12": "5GLBN2KzrJVnHRznZm5mezBmzdfzrrDqMihnVsP8LxXYG5EN9Ar43UGHZ84P8zW16sw86X7xn6q9h3mBQwaq4mcm",
  "key13": "5SbQnLNHc5XWvwfqdojHGvfBCAWbmGAtUko4xf3uiCXE8ksRLz3t8m41pS7N2fEKy8Zuyesgam6gfUPo7VE9seko",
  "key14": "5zQDzg745mPDkLStX8Xakg7FutMmsfHCghC2qgoZTEdMpCcVh2LNepD1ZMniGPtkHCHfTae9omQwfU4CgmhJS87p",
  "key15": "4F6L3xav6tvYTJjYmqr4FuHWVruq9LEjUcJNGryRgG2VUM6QAAD2uWfbdPJQSJAJniRC3nWuCHtUpG7dWRHz2Kj9",
  "key16": "4x2QvG8t6m7a6Kdxv471zqU5exszMGwbpqx1XXurudgPU91D265txodaiagkriWpXGRed9LQN1YXn3Js1WFpPmKG",
  "key17": "4rpeBNSomFuCz3PD25gqW7LrMjTF5XeqwwhgeUNggVgxQaaoTuhoXAjNkr3t8FLLvvbpXvuNxZu8CEmv7KDv7Vm8",
  "key18": "2oByvz29r37gmLh3Yak693LzX6FWb939FYFBbUd5HHCZWDbLNqBrYCtJhgoisReCxtJaTkG1ToTZ5PZzqskQYnXi",
  "key19": "4PpUi1PvUBW3g1TEWTWiWTckhWLCSQwwJqBibApHFHtkjjeqLAsfFAC9WyfGcbDEmjk19RZAUYcdZvJuXqRAuQHT",
  "key20": "eSdGkDySZMW6zBbFagEx5p768JW5SzH8rhNzJ4Z26AUVkNUvooHvij1V1CkVwM95ZxsqaKmDp8zF63EcZa9aMWL",
  "key21": "2ch1H7wpf2DLtEcwo2YVbwNm7Wej4F1PNKDpNYAewU4SvrabCap13dFSFiJZeor6bqtEFj4LEkFVCwTNGk1VLi7g",
  "key22": "AoMfWtAoyb73R8eddram5qS3tcrGF7QW8PcRjf1Qv66n6nJgePjGQJsya2JKaHGv5v2iMcig89e8axoY11SaGSm",
  "key23": "2TSGUneozLZAyDTsf4h5FKFonpUz3DyMjAfxfYzQXdPXun3LFELk2fhXV3cz4VphFtMCsyimU8kfnJNPnXN9JSe3",
  "key24": "3FNQgg2St64PZ6wcSh2yAHKvfNLd9FsXMv6MjjSBPF7una8qCRJMi4JZDYuPeJzpQBYG6CCficn4Pujvo3EcHNRj",
  "key25": "2TLv3M4JqPxx9APqBdsMJfcguTnQZ6kWiYv258zHESDL37VHW8ANZyYWnQhWmGzmCvokLgcskMdAJSepWSLHvrPC",
  "key26": "3Yy3mxordpyc72vsETHXwzkg1iHrkQG5b62AtqhDLgiRJqNT5GcuyNvHdmjtaAthfvF7sVSffiRhm42mcYWqjzTg",
  "key27": "4g5JFPCKdjN36ZAv3Mre9nk76kKYbjRvggVAmMJkeheRAkVgrDjMV8DgBgXmGqaoWbLhvBZ7oaE56YJZQdVbA8Fj"
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
