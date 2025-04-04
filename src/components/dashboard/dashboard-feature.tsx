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
    "58Eg8TfMR1epNT9V9Gw3k7eeS9stULgmAci8tgiPQGpUtjwcKmzPvpnDGUcvFFThSzteUCpmYK9PfvFQXQKRuauy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a32nbpncYpyCCvTTZ3aJ8b4BxGDAhJiu7XnDr3L4oJGrfHdnrGAXRjieKruCSRWkhyTrMxNCApBTGWWw7BKTuzw",
  "key1": "5nzR6JGEWg9PZE4kmXYQz2sfjUBzqo2LActbcqFn5E2hKaxp3qZZtH5BYWztu5TPASP7ajxakbUyuhtnP2CaLV9j",
  "key2": "2uYRFG8HoATEjyXQKcTxZ3zNBp9xueALNtA6P3cWtUDpPr8EZBd2yPEyfGpXPbuKsRMsHsiJiwsRRmuKHJAQogMi",
  "key3": "5qd21PeeJ7bD4FVi4gCN33i7NBoZ5fDPwC7goyvDyCmXiUAfzn973nf8vAWvYHG9FC4cE6rZSkjSsvfqdsGRwuhQ",
  "key4": "2QE1usQeUp4AW8TMrgPSht1TiiajS6PRo4hEqaCiKehJpssHtkRqUaBKvGGp2FfEyyBUTew83AP141qBGtVcQWqs",
  "key5": "3spwREbYG971zJWreV6eisDtrq9naBnayrfvzKKCufpciKYhYbgFBMwMZxj8BinJo3vE7sKw7YYA8SxTBTKZgzRM",
  "key6": "477gMCenXevHC41eqdBSEwCi5LWRPp3QTR8CaA9nAMN1VNiwrfVSefcS81kpUMGFSRBrBNKnDVnYqX9qk1Ff6Te8",
  "key7": "2YxmPNZYE4gh2ix1wVxe3thz2KAB3zMKM8aC1CFDxf3D1dhqCVhGj551e1HJd7RvZAsSnA6iB6t2Jp6JfppnLfcP",
  "key8": "2yZkfaBKNQXXvtLAgY58fYDFcMcfZpLkUxCcBtCdXxTE8qct6TwLS4uUXsRAZCuYyrZ2KxdNEtqgZdGTDLezx7CA",
  "key9": "4i6NudNYLWvfBC4WUrkpu9wVmKkRSomV17rWbLACRMnC4EsUWQ4ViSsPfy6k2JXdKDtB3DUtn879imE7wCnp1ub1",
  "key10": "3cmFa3K3Fsozi9DfVoEjUAn4WN2TXxpfBdWEpizyBmWusfsfkAy5ALmsSm6FHJFtiBS8dhHF7up8nFozgj2VrUcR",
  "key11": "3DYikrzWCLMUq5jqGuX54mPrv8hcDQsKxQk1WDJj558a482Pm9z2ZM3RVNYkkXb5VPynaWcE4TuFyJiKuWPVXRUf",
  "key12": "2MJP8e7zkAcQRXjPF3VeVDLEYuMR1ZJhgeshghVmgMcZVDDArh8zAdE9UsEFc5tvdHKfz8vRrnSvoRJbMH8PQiUL",
  "key13": "5LaZGCPR4XCkxMr2MMMCE7Lduk4b1rcWSLV5SvmCLa6SBv2FHZJz5JUQjgsj8KyNsHi2SztHS2J6arec2fHrpU1u",
  "key14": "26m9nFZAD1wxW1J1BrPnoHm9jbT4KPmbzV9ThWypuBso6r9pNfZm2oXjGtPrPgw7q4kadDJwFpfc7Rrwjxbfmswj",
  "key15": "3Fhp2V2RRiTLBb919emTLyQFLYgC8AweVFSDYSspkUTccm41ZDkthMjPbxbgoHGKvR27dmunoiDA37dAoSwdEaWE",
  "key16": "67Q64YXsK9PvfaKwHcak77UY3qe8V59kLELnEJ9XHwikVNDY2yGTqQ5VzWssSLc75nECmzX2HEhsNkiQiuNtx6bx",
  "key17": "2iSnhJvkxyz4H3iktPA3D9mLDsf9buRzmASHUCALnXtPjHKaDFjSm2B3cxEgTUrewSH7vgCN4g8v7qh9vWG3himf",
  "key18": "3k3TzbutgJhzE2hKEad6r1hqw2NZuFWJVxthveB3VkZc4g1MRdJx4qnNawQq3H2yDU8QwG9hqVU7fZa6WF4DXCzU",
  "key19": "4eH9CFC1V9Qu794swfdZunxFNtUxsJiMy7CbThdGf26KgDGYVKyRGBHZqoBRod5ohhFW1NKN4zVwPRbAonBNWPUU",
  "key20": "4bY7UNseA1JhWEAFY9hzaLmpBQSmVgV4JfjeuhEHbQp6LLfVRgmmaXnkHoeNmsNXXN4NGzfACcG7xxeisWsafdDY",
  "key21": "3vG93AcG2huw7Vo6iiSpWQqxvcib2VTL1ZAgH7Y86ZxmPFL6kta3tNvrKfHUcmzCVNnEjozPZbGD9ReV9x7XR5a2",
  "key22": "4t6zemkDDGkAk4CEk2xrBCMnwbUme5BojYUjaLQ8qJuCVHjGhKX1R84TenGz85ZdAYL1tUy2GwUopPBtNVhNgxNR",
  "key23": "46fFfeqYm4CYFwYdfx2anhxGqAmuYEW9o9cF7tGupaWDTuzQz9fs2qQZsXbksChpa6QUng4EXaQwH7rVoEhM1A4P",
  "key24": "2San9q8jX9xtyLr2jeFwSca23AyKSf5y8axHQCssG9Y9NC6zKyUwEG1rrKQHbajncvJbHhYHWcNC6j5NrAhAaZAD",
  "key25": "3GNBKBQm52RtdSFcdg5P52ZZkDQnvi93m6nCtofezXPd2EdYWLGnuiiZJ9WEayKday3r7BSzgcRUNbPjF4LgSPND",
  "key26": "5aWEqWLqtUrwh62DSAri81CJV5f8xssqwkm1fhSMyBnoiABZ7K1URQHDgJxmYiVEGFYR4a7ApaZe3ShQZtAuzW9s",
  "key27": "BuqG33qB3bkEe9kUnZmQZgt4HMiiBsy35AdstwgBL7hBdsnFG7eMZLxU6wGrA4vasjB7c3u2BuGZ5So5eb3AdkY",
  "key28": "4b5iJkxkFqBvaKJStaaJ4vqULhsR79w2uiFtTTJGF8HF7EoPzpa3MnHgpA1f98B1u6yQiWAezh18hTMXvBULZPQc",
  "key29": "5YsXZgQDebsgKwmTDwG87H3aP53H24LAubcE3zUK1ghCq2EFWewyA5F8S5PLDsnGuYepdcUWkt3dG3Fp3vbr9QvA",
  "key30": "4PMdbwqLSa4pszAUME995ejNzDKd6sC6L4NnNRQV7PiTvyn9d7WBD7C8FET2irr8zgJxrK1ZMjUGMhtWhvYZPXYa",
  "key31": "2tvyFvW7a54VnM5ihaKnHYdF79fr8CBUEtdyPYB1ub5xRubFQnn3tcQ4agGz9Wfp3n1E2iWuEgGP5ScVH91gyuVg",
  "key32": "4Gd4K7D1hsD4NociPuZneiNRy94XbNDE3GLW2biQoiYvRtRrDeqNra4o2UVvRKtuSwFAqaf1ZXBKznGwRdgnpRuF",
  "key33": "XyED8spmhPCfWhyggXA8GngBCNmMT5JSPXHnR1EGMcxECxg4xNUU3xCNaQafoxxRvBYNetKwfYiWsP9EtAqcucZ",
  "key34": "5WpVKRQtJhBsmmME46vZ9r8JX1WJvmi2JTMyGewAWYH2bUMSGM4P5vZKVmbXbV6inBJkmF6VGBss9F6kLbLbAiAx",
  "key35": "gAjcyyfMhMHCPCXaXMGkY7xPcNWMj9pACttWHw67o6bKRWoWgiXhuQ2NogqVH1touQxxbUzPYUbH6VWVKWzqEPN",
  "key36": "3g1L7ft9oFGMyoykDZwk4ccbu9Wz2d2MvFKNx54KYPEZuaBqa51esRm3S6hb2HSwC1uAngGxD3zRnzZD4Pxeenxp",
  "key37": "23uWD8FCAPvciGwFkbCf9zfVt76mCFYcz8w7eiYr7Dgwtq8rLE588DhL98qdfrCEuXrnuTYTBzNnABUM7nEfe5JG",
  "key38": "5ZWJETTcxfLhmLhpMng3xHwaArDgaMLjYU4WBr64Cj8gc11XwxJYR7bBGnDfuxiaE1yXHD69baN3sDcUBdcs7GHi"
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
