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
    "5qEWk6QCyhGXW8Jv2e8AEZUMZiwsBf6sWgmHjy93dgDqAtCvgc367C4gUuPKzZAv5Y1WrbdwteTVuYAyet9knQHJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jTync9sgjR7mxdvK6YfAG3oSZ1VXiipFmRoKsiKhUAFwmsqgg8jDk9Efj58uwrpcRnu5zostNBjyMckzDjRcc7T",
  "key1": "5bwSVMCF3NQmT7Q7BLsxis7Bue8Z9NjjEJv4wAMN2kGLfZwUDXpzic5hft2RMGhNZGtrpoFpBoTVSxje9E9b7JfT",
  "key2": "2qKRRNBqPHYQj5kBr1fM318SRg5FVkcQQAL1naAy27zsXchSTaLgatcNncKevFS8JXVh1a31K6cc1fFfwUv3tBMs",
  "key3": "2RRGXB6cYHqr9LxLAoWD1arQtuQgrLKNmzoiJNrZbM5MrbzE2ipGM3p5xPQZBqjGo3vW69MRcrUCMm5SUiKYX2e2",
  "key4": "6NW1hBG6qyPqfAoNPgRvwJjY5UtFLB97f4brg77dNS587PaFGwL2FntKP63HNyEJQmk4aD3Hp4DwwM6hahkwZCe",
  "key5": "3LAVDNU9LU5eWaqtv2jXskRdEB5J6bYvD1dPNCvDgQ36YfhxsHm73Gb7FhpXxBJVecG7YJABr99M8yxBhDdZBVJv",
  "key6": "5bpTmiQ2uLWXffqWfyvWGsoVrfXFwEzbjZGN5MBif6QiUrAE39joL98fG3srhchrHKAqqp8tWfeaZx9oKChMh6Sj",
  "key7": "2nj35UYMUmwhsnCHrX9P5kgPuLMfQtS2RkUJ8gYkBye3L96NgLDkKVPiySDx9RGYHW3UY9hMEgERytyNmtKLmXtJ",
  "key8": "2BYN6qbZvyrAyGjV3ypzGhQRWHMDkGjvPoeiXFnvD4c7jZdcfaxiwM5NTghvpa28CfoVeCU3a15AqEqo2yFHUocw",
  "key9": "59XvSz51FGJUYWrSYdDrfmMtYtqs171aj99BSqXLm7nvcWKKH6396LRddyAjRjVF8p14xd4jfU9NiZK9K1ZJQZrZ",
  "key10": "2EycqaNGckNbWjUfpHdc828woF57JgMfsQd4jQqnDmXkznhhaGcFGS4qPWTspTe1SkkK7AwTQPZ3EP2HoVH3ViF5",
  "key11": "4qG2WYHM5wdnhw4VwW85MBVxHPUc4vHNDMk3o4xLchm2u6JLG8TvSGM34pjXPUP2Shd8uMu3jExuQ7n2NK4Nkwp5",
  "key12": "3MfQCvHomETYYKicZAJLmi4yQivcyc15JEkYSgVHQozKvxSL9QbTWxzNxSmCp8oVAUptRTnhsCZAgje6qyb7j8Fe",
  "key13": "FbwSVTZwPjxGDeFekRg8vJyqNW7YYk3qsQ1hMN4FGPaD8eNJDkCvBzWfQu8ui6paKJJ8wV1N5nBCvCkDMV7MFPD",
  "key14": "2JxcALxb3FE4VpqtvDnfvo796VPKfcU9oY4PL4QxsuzRcZhxM4sPnk1A51U8ToAa83LkRexHGVsrNokDwcxcrr67",
  "key15": "4hhZRoJwDGBaHixuHLaNf1ukb9yotZkedWYjnCcriY4sg91gU8Eq1wjSYxVJF1EGjsiExNz367HY1Yd31RH7T8tX",
  "key16": "5J1GSDpSg5CK7s4Sj9WBrvE9ueyWmBBecG7iwuF7rJpWzDmZp8ze9YZmFawQxTtJ6tKak39wfZynnfn1WDrPh6Pq",
  "key17": "YUbYGHPpyDuf1p3bEh3h2BzdDXEWcfCV8SA7bHA8PSBpggaX35CcPAT4vVRKEojBwJrHq1AuR2WhqyxDiU24Xms",
  "key18": "5VHsbsFUGmdpbQ6VZKMjkZu412hAPz88YLdhsUF94KxUewiWQ7D5emhRHs4oYmThqYEC1AW6w59fy4HXzFboiuwN",
  "key19": "2FrJk8VHsswSA7qs9YfyP7Z7HQVutovTVCTZ8BwApW5FHBzBS8MMt1G9gG2SKNTWB4xcME5HW7goSgRy3xTGKqmu",
  "key20": "63kfST2n1kjMFrYmdNiebDgLZGBnQV7E6cXizGRMn1vrbUJWkcyhKHQtMNLAAKs3V2zre8CJiMMMd5tUAHreoHXF",
  "key21": "4KRVNarZ6i22GXJPYUKXZvHCQug6iDuE1wLpb8dwT8GrdrJ2y9ZgfYSVtJUTdQAXBN44frG1dwPhFrd4zLcWVyyM",
  "key22": "y9zPXAo9Bmj36MSw2e8rqEiUXF2XKv9zAv97MbmsUatJJGjmvvnrLM2dHQcj1VLK3p7LLroMdgnQqf2vzVMFsz7",
  "key23": "NbzSZ6debKXvPn5qFkd9ZE1KfiaagSbWqzNri76Nz8XZfhadY6bLvvqfPdCBwHwZNYbWWuEJ4w7bXqu7Nr3gx6F",
  "key24": "4cTpvY737gkofPmMVFK6s4ifxW7i2nQ3boxDb921p8F9KTMghKGibvcjaA2vHb6KCFditHPVww6qSx9xoMTinxBg",
  "key25": "4tJ2ZXcK1Z3tze98WxVE4oqZBfCAYoupcMbZc6YfY3KCV7ogS1Cmok58WqVjZchbGWey6zJ578VVpJzZW3jc55rS",
  "key26": "GgqUhkPiKwtLhCMMUcRV2NmUkac1VJVPeSGtgZ23FjSeNz9fv5FABLGtqgCGZn2gDwbtkH5Kh6wq5YUdqfp1hJU",
  "key27": "AkdJoqUW4z6TkTQnsXNiTPf2bLSbcowCoKkso3t5KZzxLm1AFqFbniL6P5N69n27386stpxGKe1i8w56UnsejJj",
  "key28": "5PoZp3reMi6tTRvQJHyw5Pb7Yn9foH8DRV1dBREsfhhDAMK8pGaVfLVapxa6n5cRTBk54kb5mR2s5Mbx1VPXDWqv"
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
