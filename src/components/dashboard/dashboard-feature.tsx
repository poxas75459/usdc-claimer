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
    "qFEQqbEbNeeKWcyRdmrjb9VMvHNBBLgzvtJy9h7Y58vKsN6VoUXA1FzdPVeWshKxqGex5cuiBCGD7CKNmRXKpUJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DeoAnfQYw88SQ1utYsyogqLCJo1LYrTsx4u86RSrkY8ZsRZGqWA1kRJ1vzx8uTXUUcrLw3VzZnSrc2nzK6fJcfh",
  "key1": "5GhYro5266GCgdvnPsuWAdhdGARM5vjW1EpedhDGaBortZZER74Yzc55bzd69T6ZSj6S47KpYDuoTgMT2JRptus6",
  "key2": "4AuDDNo1HRVstgEpZJ5tF2DhTPdRq4AaY6Sj3zLLqPcsBv7vkdV6mUyT5i4eVNbHbxnQQPDgPYfucJNWQk6YTWcd",
  "key3": "395dZi4iaV678NJQxXvyGK5RJNgBpugNFmQGJnQom74Bs9KmqtuPuK8ov51yuaKBhF2N7jKFjq1Ax1w4C8JHGLqU",
  "key4": "6WZmpd7szDfzdntu9rGyDmBdeGU6nwd8CVytJSRm7yxPFAyCuiJpo5Ae2YDKRUGgez9dxLSPHfkooBQuDDLJzEd",
  "key5": "2nhP8Uou9FseVfwjV8jSMExni4t447QerZFWFSURoF5M5JYD2xZgRdhCoFzGqZ4miCjy2MchDKHKNwHAkoDXnrEX",
  "key6": "3LfVL8JHVWfVsapgSY24bYiF6uy93nbyeeYgE6r5zw7wh59fa4RPJpECjjxfA8obrPXGRKmU25D9JsQmWy8XMaBj",
  "key7": "3vnG9i6ECYnhgm61wdf7opSr1vwiegT9WscCwKhwWvHdwVB9FhAS6Dto3AfvWtQuCa6HxKQVhWynDHmbwxeHQiSD",
  "key8": "26QZsbMuDqk9qwpoWQ8QjXK2MG2fVF6qfRyPNJz4bJjDZoSSByvbRqYCeGxKNBQAAipGhf9EXvG73FJH86autWtM",
  "key9": "MFZR2Se3WxG5BuhMkmHXxQkcaF5XW9BYG5GbkAKrgpSWet5xGkNewu3zjJNoQUJRV7wQenP5rCHHpGCQNLUZ7Ei",
  "key10": "5BVp9DWWyF3ugi9gTy5EoNuCs3JLQMJR1v3SzxtuwerYLbVygxr8ELNBtUpA7jVyXtFKZnRMCuuefc3YMLdd2oRD",
  "key11": "3aA11zf7RhPf1QUzbmbyzcM6yj1mfSJPAGwkBN89U43KiZq2PxDJDY5jS3ZtRaQoeXHJ1g2LsbCu3Y5HxR7QkmZM",
  "key12": "EwvZF2w9B2ojZsZ1Rwmk72umuw7C3AdLv7j6oZDMxU1k6EcEkaaznu5dGUodGCSfvSKqQqhW1xKGHgKcNdHCiUM",
  "key13": "i5DKMNrCVJZkwzs9XkafVqkf3gyZGnKwTb981TJ4B7uAqXYm9PVzHqppY9osAaF1Pz6zrtuBXNY2AwsCVqJxC9U",
  "key14": "5mmpqYsHubFC6Zpxduy1bBSjSgsd7XsZg2LewwC2Z3fUYCDNGgfmk1kgPHvovWBZfi4SE7s3tMNn4Rys9C2xwfkD",
  "key15": "2N72tEtQUJgQBaCHVbBBFDreThPt7otGzAGTVFsbDgBPBCgpHd7jANiJTuefQsQJuzk8kfwpXp2d5zaXfF9TN7T3",
  "key16": "2NWGoX3RaipfGMwZfqnrbLzLJiZkwH5Dxw3xH5eLwoC6yG4sN7k4cbH9tLoV9KA4bGAPCnJpQKUR41eJTLph7vsG",
  "key17": "5dUcQrpq19ot23tJ33inZ85uHifwBt4M7MRZCnvV7c78cii4gLmgqDHRXCp4BRPsryqTFwLvdWwSaQsojQhRMSzG",
  "key18": "4YUuYhTqJtM2kYQQNrX72h75WVNPVQELSQv1qxaUimAcJibun6J7PYSSAiAB5nV6rCbKT7KsHpeBa9Hn4jknjPQC",
  "key19": "3JqYGwofFSBRMcqR84aSCnUKVdmdqjARcQwPXU3LRX9AzMp93wUbKAETGekQF612dkvpcp7nwE1sBxYeGVedW85A",
  "key20": "34oCWTNGxn6ozyeLGZkfPZxBepc42k8d4BoygiEcf7ahuxB5QwdoFaZnZMCe6UX8SiMgctSNFPvY2rjD7w8kt5Gv",
  "key21": "3rXER2z5RykVAaLDETGGfko8rkig5JzC76zuFevyTKfqpAjMG6UQRFCVRfsSBBTDqfyh5wQRXdqXzz4pY3YfUqMX",
  "key22": "HfZ8LKCpUDUxCyipu1VxWxg5S42T8KgAqUW9CKy1XZBx6nquEKRAmEpnYU2evP8a4s9Ssj2BuxiwvPtNZdktHQY",
  "key23": "3aua2Z76Ua97LcZnEDyPDt297T7jjDnSpC8afVgsZMwv9u6tsHncVjztPZLjQN7fpb8tR7bPjWZroBja6QBXNXqd",
  "key24": "5Y29YhdtPTSgZbaDSFzdo9vK42rAZ8XGTTjjLC4dkKgXBCpXgcRGR6aUexisv7rCtWjt2QqbpVnn2MrfLDpNN3tf",
  "key25": "4Zmj7rDX9vKqb9SHfcVRjG9Vwzen8Zu512oT7vbzXM97UKSx6vM1oXQYEYWPc6z1c5prhxCdCXH86MBmv3D3BuRh",
  "key26": "s4kwYXZW3BWMfmb4FFgh8Js5LYdi84fwzsSh3LKpwmvfp3LHgpcFe71nxkmPSiFtgAu3JP7ZecPnhZeL3Zzq9Vs",
  "key27": "sVEkiocrdq1auQe56Ttm7QKjcneFkrJnwioNgkmeia2EsazjpzLRUASpXzJUbkKPokn7g2Fn2AUDxw9VoNHuiTj",
  "key28": "2A1nHagxkiJMkcGLykaMZNwraP4Jz2bUXRaQ3qNqABMFaEZhXgLt9vgm7sigv3YGfbYjnTLoc6G58fwRkUGhCtdw",
  "key29": "3xDzdPcmhgYg3GYLmijaW2L9dz7JynJ9egF5fKi4WHKm3KkxiRtgeynQzmtv7RsTXy1XGeD8cSpmVGiQQrxCFDrA"
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
