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
    "46ThVwmh9omsfVkNh8z8h44UnU3xLd7VfHU7622mTok2gkJKfGvsjHLJct6kCVABV6k8Uon4qK4CDZbdw2pvJ7xd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29g5AVxq8D36nHFc7ciwSptePDcsUiaA1KhwoVcXUzWhv1zZ3HSgkEaLvKcaMpRbrWinoWcoLNiqYP8DGqUBrwLK",
  "key1": "4YT5q6RaALGSRaL9ae9EQ8k43w9m13GDbCP29EF195zyYU7v47yrsDVRTF4RunXJFG6RXLjYvcFXYTTABBVUJjKT",
  "key2": "3QbEQRGdYRMpRu6rM51watNBxAAzvBrxDWKznB2V9wg5iXZ4v1TqcXPoESH3igvQSXPo6FKZPf6shzj83vzEteLy",
  "key3": "Ed56hFPCqwfyLJrPyGoXMAvfdicyP6JjGsBJAPSGB4CzAfKMzFxpbS7Jf54bYWkKnXpo1cygYCpxRTwH4k2WXoK",
  "key4": "2j7GGmYpKsaLQntbjmefjtxoGm7ngC5VSnpZjiJRbXgEMFn5yFDQuvsBnAAQaS3cuLUgXiSHRmxPmmU1tGhNM69S",
  "key5": "2LNPqXrtKDhA2uFZHTWTAXV5oj8jiCuvk2NNcSHRDeWkDHfL5tDJShA9PYvG7K9zaQfN1rGwpErbkvXRiE8BfS76",
  "key6": "nj8FFSTz6d1wR2BnKe71DBYsvaQk7JJyBsVxRqfv7BSz3rmsFJ5WHMMRrwGMpJMCyAQZnM4xz16nhyK63Qc6zoM",
  "key7": "2Xyat74VxB1TWuCZxgMDyoTQ7gtoFqaYBfa1GCbC3LJmk5qDXiMZFEuNQ6BSc6ySQnXstuu1UHErXWcWLQMHNWzW",
  "key8": "RmJm4CzJW3G358P1nmyBWcUnvpdq8pYwU3d7Tu1pzZYzjvkYzDuSeXYyZryuFzdqTbcsSGv8xTku7Q6DTwkm6W6",
  "key9": "3i1STnqPngbg6FCsZh7Lvm5JwjKWBuDFkPAF253y8CqEEnF329VwKUdf6jYgvsMyj7H2Ejf82UJiQ9qdGDvnXbe8",
  "key10": "5i9Ua5RAY3vtNowfkeksfv8cuCRAWBshuAFNKEvReJFfLyY4srSkcHs4bg3VRzA7hpxxLSiAhKTh2saFoMdijhfL",
  "key11": "3NGk7FRoMuxvQ6b2ZY6PH387FQzoSsXPeJEAeKJngxQUC4XT8iARW5iwkodzTRN4kmkvnd7V2KP1myiPqWmR8U1q",
  "key12": "3dXU6uFFBZRLXgYdkrKjjntPvGnzU9fwL3hweBTz5WLjoVg1gUbttr473PUzV4PrqVweZnLvDLj8F6DpNd5S1ftU",
  "key13": "273w5XpWSAisMpFH9sJNmU5FtzS1crMsCr22zCR1V9NExZfjqZDhcq6tD8W6865gWyJczjrnUsz61CH1knDSBG7V",
  "key14": "4gYKZcjuWxb6NNQcFZB8ahhuZ26tDC9o82GwKrG8eCw52bRNyYA1jt8VHBCifnN62vbrqjQ22e6i9nGF42LWu7kL",
  "key15": "641k19Y3xxXN9joMD1gz8fVguVoiGb3FwfwnV6WpwcBGPX3WR6egvDZXVjtAAdsgESHtSFtJvGCtNULDpovYD6Dr",
  "key16": "M3URommnTjd7aZZAqsPPUiMVz7uEs6QzShtbynwz9vEFP8McPWwCdQeo6ExScSCZja3dV7As8pFd5bvz5Zc3MGA",
  "key17": "4KwU5G3Wgv4t4w7V6pHTiEgpKUajpqKua6LF8Z8u3LoTLyWh4zQQAJQGhmrXAkaKoVCG9cKdKzB8UsXV5gUN1gyJ",
  "key18": "2vaomwozJio9Cy1KW7DHKJDLNP7SgLKsYALQnrtXqj1Lwpj8mcyM9tQSfiFCoTejkQBMuhsndHMKja5QMdt8wJPC",
  "key19": "3f5fZAZmkxVb1vtFEbVU86AXoZKSDaBegMBhM1vE8JoGjx6rKfksigmQ2iQ7kaqQ945Y7bEsKmbVhFudRt48xsYQ",
  "key20": "2YGQXqDq9D7YvNsqEiperjSfYTE38PuBj46yyN8ZeQf3Fey7itFCdswVTUCVFaUhXcWuxxAPw3bqiH6r1tnBDqx2",
  "key21": "2QfFDzHxvaLF43oJWtMTG5WgeDgoXqaW6D6ar7UuDD7gBDbR12hYhUfpvWzmiEfHKWXFjWQLAxxfxTuFeemzH3WM",
  "key22": "Xu1FoAW79WphFLdMmAyLdYeLPW6UwG28xpzk7Jz4ApBZfR6BaeLHohsLGURD9rGN8K6PfwmhnqHJxKRzdHxJkff",
  "key23": "XzcyoXufEHwqJuHLpEkwybwrpzH3aH2viAonVnt93GsmWUBrhY7iYDdWgY2s7zLyRiJzi2Xuuw9dWtV5KUF9LJT",
  "key24": "2e4dycFux8LxAqgS4K2oW85YZxbts3xzVZzcMyywWPZ66NQb5AnVZWoR7WAkWRzjJm18Ya8Rpti5AzVJnPAFUFDq",
  "key25": "47nq29kHhDfdSFGqxLQT5v3gdGLeCejKwtrzzLZ6vPniqdbLZowqzAn1yepSpS4p3n2iUbzrX2TmbqnFTFAkki15",
  "key26": "b7mBgYuSBG7it3MA1HUc1rBW1rRJrAAzp7afjWQ8D7oPKZKwKg42QHg8gfa1fWk7EYQGmqcXbLAQYoVCnWgeW4x",
  "key27": "47DPDGKdQNx2sAw2NnnABCN3r616JQW2czBmEy64kYm6VCD9BhYXcmZcHWEbUkD7UBqeHD2RrrTCeB1yME6Ugq33",
  "key28": "5MaEyRtBUfkT5Dxj8fXq6LVcGXoTpTEecDx916MzA3sGTgSMVdJ8LXuJtKAEgyPLsNyn3FE7wtKupY7yZ7TUADAd",
  "key29": "2NmLpaPFxobm81aoyqTVHoSD7a8CQfBVK6iRbQkGAiN8qTwtstmEx8wHiFnJaDdjiyLVeqEAxLSWeHUmCAsPs2RT",
  "key30": "RCQDjp4Wth9w4KgvkNLLPkXtc7wiNkiXDvsMiq1cue6znkDW9HEGzHgGK8CBWoXcPMZqfqEE7RM34VSMjn38PF5"
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
