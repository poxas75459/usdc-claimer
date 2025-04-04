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
    "hCMXNQy4J12HaS9EPtzA3L185f7jf4fHBb3bmvyULbZJ8WHm3XYWhfJUXtNj9wR7fKoVGBEuCN4XUp42nMgRRAf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CYuHW7RHrrkLw3kaUP69iqp7pN3frZZp1UPxjLYPR8c86vKRUrpTBcATHvmc9hYUjLU3rw82W7a3DAM6pyv3t6A",
  "key1": "5gEDUFjKPdFwphCbYVWQk4DgCAuU71Qe7EhYRkdq4JVYLxCQbPnx4HVW9LXZU4Hq74THvMeCdgj3pDpFJ31UG8nu",
  "key2": "4mG7MghFCwEhsjBYRR3BfpWqDKwzR6Y4ZTW4SVKsixzuQDTjzPiwLEDzkGT8o8qGDACDCSzrRcLgKntqg3pEcD6q",
  "key3": "4cLP9JdpNuByAzmva7u7zHyFBgk8Y9qNcBXr7DnNozzNoHetQETVpHwgPhWHu4PPZGxd88fMnWer6SVHba81kVRV",
  "key4": "3iFJji7c2LGsRm6yYhdWRLVusewC1iWAZLRzGtYPpZ2rDzT8cmTogBWgFktDKeWpTgZXxFHFcA9qqL2T5un5EpE9",
  "key5": "61Q5kpRrD2j3DJVysSorSNaLQgEPvmThK1sXRnGdyauimEPJj57mUngp8KzrxsiAzaxobFSddf5gSPoSitoSmGcW",
  "key6": "5EUjeHFHayFE9BaiPhtv74wYZa5zEenvz4m5dwmnzoKM7jCXApeWUw8Mh6XvPNit9fH5tV2VBCvbEvEZY3hLfftf",
  "key7": "4UyHCYrAarBDoFmthS2XR6FMJjSQSGD4biZBV2KADmsHe795ykFx5RqnrZ9VAuj8jDeLAFDyq4a9Kh5AUJXzSvdv",
  "key8": "2saWjqnhLS3LwFuBVjX81XnqpNN8f5sL89Kgwmp5VYpuYpbXoxQh7K9Zz9ns2vfjS64FJ8mWKvn3cuNf3kaVZ1fL",
  "key9": "4YUaGaozbuLQahozy9NvLp8rKYX5hfnKQjSLu3YGtP2sbfHykizVJZ6mvC9NqftY5s7Ku3XFU84FP4LwUdonsmyT",
  "key10": "5riFjSvaFCmoNvjiNDM8bXfUWLVzpDCGTYsPkScmbDgmiFe3CmsD5GboiUjd6E1fLhAp2hrRdWm91SZ4kgidBcHa",
  "key11": "QpEPKr8x6b6CXeRkbPjNv5suoLkofp4jThTGw7tQMq8AvZHcet5PCD83gvmGi5WVjwchUpsHgDQKFTJTpm1ER2v",
  "key12": "489PRYisZRtzSh8ksf7etk4An2eeHPN6zUv2sXKsRLiQ5HK2uufnZf3nhm7do6E94Nnv54JxXgAtDenkw48jbY4v",
  "key13": "5WUBHYGQVRFtxDsjCMt1EY16WJWJJnDa4MHaXjk5QvKLrpFpwH4t5GkUzj9mprKVizHzkQuARf24Jb5LgRKc5fZP",
  "key14": "29eyE2DLNxjjw1MKK1rVEuMFR28npm3sG4YEceX58VBjxbn6x1jVyB7TNADLjmEvp1ZK4kdQVfWz2SpJ8k5YWocw",
  "key15": "511LjHnr8t2NqZR2dgwCzqGGa15NfbEZK2JuZf2w3F2ggMoQ5v8eN5nwaad9BrBXoW7b8VSo78JX8qtjhHYS3KrZ",
  "key16": "4VzkpuSndKYFJfkzpB549JA6kBLgNcakj7ExwNYtYZc1sZxj3GT62xo3FZ2XRux5D39SiEf5LKfJ9o23VsxRRHHN",
  "key17": "2qByVb2z8oB4qqmgmAuqbzFraqDxfgd9MYDzBEi4gFZtXJHma3C1TmWbTLdnFvKtBMpkhTsGETZsZHLqqfUEG9id",
  "key18": "45dsTers95vKYyB6TJvEb8VyRsMn9ghwndvXj2dYTNj9VbBpAWGL4VtJ1GPVhwZE2iBrNixyNJ8HdATn8AqW9tuy",
  "key19": "2JMdAiuEq4kD8aDPqJ4CwujBqtQGf2CKhDwtDCxA2ifohJMh2BiXag98By5fDChfenHTFdpF3AZ8obBjVtqcmDYo",
  "key20": "4FvTRivRd6KP4Zj6bMEndZ9GtS5ysmV9uahEH82C5CuH2kS5F3oTRY9KTUWnp8wuWd88j3YNYfJNcfRgoh4CEWpL",
  "key21": "3sPDsqDrmNxdYZLKgKEUXoyVu2W3Y9BfHFzDbxPyfj33JMTHj6ZBj5zKDFduLePvgz2gB8EVnTwH6Wp1ybxMAsSd",
  "key22": "5FL5eiD95PAevD4c8uoCZ6iwLp1Sa2fMeusRAVPvLUe4EixFbdWJGQXG9GMuVtrEvbacS9zMzJA5quyJWbZjhop7",
  "key23": "5WJxF3yUyZtnrivH1sxJhWA5dZpRMFxsxkrcUtnmcFqR9mwL6i3UQFrTcx6ZWVQAtodjZReoKVHWYtSradvpKUXW",
  "key24": "3gPkB1xKXeAXYn2cUfxZozCynEYHM9T16jUHy6z7JnMjSrDGSNKoDvrFiNTsEhJG9mRDEobXrnJ89EJdfnVy4Y8k",
  "key25": "3ZMFPtcgLd5tVb5mdxskzbienaF6AantqB1vQ3o3QtidEMSPtNuReKCrTKZu5RdV1nH2w3F1KBLK1fKY8fnRYhmp",
  "key26": "527YH7ZNQgoNv9e7Ks8JqQxWRSzK43DiPuWR6pZy7MKgZyVR4GfpYcgwLJjxvqgPNtASkZSgVF9QSPDenYEHtrnq",
  "key27": "ZZPC2ZaPHYL9q1YpRitUQQipRfVARMkX9Rs7x3SKc8g88CxDuqX5c6uCsiHZazd3Q57Kd75EFZpor9ehXSRfNsf",
  "key28": "4932N7oSVg15avNCrcy9x2aD994dcBZdmmH2zRbqm92fC3Wa6aBVgd3BLbGhdLDaYcarSg5pAbG45knnNFepq8b5",
  "key29": "3Uz8RRs6gbRZP6qCgbHDFaTDQd912nnKwL6qHP4rVQrZuA8NVBDPXehsjsaN2ff4nNPk8r5nBMhkKWRdBRYLzAb1",
  "key30": "2b1WebLEKReZxJhswAM98c6TAbeR79aZvb1PxhcWTbHJ3qTDqT51akjRue9zXeSA3nCvXpdA4EmRoP2hvzX3SZyG",
  "key31": "4qpb92pJHpWiRyBJfxfZm5kiXMsRutU7CncNebnAjSna1sh5EMmWhxqWAyNYSGkzKxW49mEmUo2eGHXM4DhnBqwB",
  "key32": "5Wp6JXZ7yu1nA8jtNHVTRQYGiRk9LmN5XrUKVCrFFj5BVTQ7MHX39b6T2UvXraNkDn8sMCYo281RgxtWH7XwUWQR",
  "key33": "2AUb5SKdFqrj2w4SCcYJ6ZjCbqLvu2r7MQkTHwuL7A8y59zb7pn7nhJGSZiqMbEUn6HDKmczVY74H4CXrVTccUMy",
  "key34": "23EQCgFjnkvhHamCEMsxD687y7y9dfS6KpB4d7X6i7SDwop8aZhrfYDmHVULo9cefK6X6F6CjRBbDBFmvLKRHCpi"
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
