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
    "4NqYCm9yJtJKJAdCMm6b4c7Gg2wQZjbZKSG7ua1GKh4aDroHXYEmgfqnKgksNYBv9ZMe8FW2TZdCBe2AQcMURqqY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Pv7Nh51DyruE6aTEVc4a5GnQpUbegEYENYSpx4RF4fzqYt6cPVjr57KJCLEYvmsSrC52XPDqdtXb2m8jCex9e22",
  "key1": "3Rt1QmJtQWcr5YdzpWdFBTZchxG4fJfiXyy27Bs7R8R6cyySLDxx8ceJeDMi9QfFNscxMrGE2kcLFx7kLRyvW6gE",
  "key2": "4zDujLHCSCTdcE9z33LP74rhJ5RSiA1vMWJ3oPE2v6AujxNP87ZHmF7uJnUhqwTLbes33CZ1aiaS6uvy7wxPt9Ns",
  "key3": "53npjCQnRRBMjBnPbzrvXj4Rzh1rMkpLzqSiMrrrExv1vnEuShqNufMuAa9L6Rbf3dMbZAw2UXAHyccqsysPSLz3",
  "key4": "47ZyUQjtDgvwuaE8uKqdybG5xwwbWLY2HxgqBCT9HwwrpDxS7jt6L6N3SPjhfYFAm1TX5581kH4K419mMjb2xNB8",
  "key5": "2ESkbr3zu2sS53sCFvvqqrvwb9ka2oXxQ6ZVCGSkzgVmbLxmV3MJWe4Z3eZBvsiwYTcB9qn1jJ8YGohNmV1Hw7dX",
  "key6": "3YLFgGqtKHjE8rW8V6XdFvePpZBdvEXRMSGtYrvtbaH91CR2pYDZpTP6FxcfqJz5XuigZQgKzR3o7othXYPE4BpP",
  "key7": "2oBepRiVhkbDWhbaytdRTYD2UgbcpGGQCKf7sgWqUhu3tT5fQVypYNepMSGv9UJATSFSASLWfRs9FNFfh8mFJXk7",
  "key8": "2HL1KjPL9pc8d1ZrXH4zi5aWSByLjbjHXQnczxY8bpzgwwQTLtrEVeXi4pvqTRbDw1Fbgd9pBTRsz8Fh5bvE6TyA",
  "key9": "5iLQeHckJXDz148psG32VbCK7jXscRuA89ZgaFrC4TnqGRefTVGFH8AbEghZsBxhGN1NJLWbZc3xWvzXgvqmYtxn",
  "key10": "4WVUDDfZ4KP19DC3t1gqWA9y5q6412qxYEfsEYUQ1tdEYXgNiYVvnxt7XvZCp1Ak9r9UyB18EHFYeMgQa1LVXgb9",
  "key11": "1oKHYMHaPdHo2XqjU7PXY46bz4hCv9oCtR1SGe2wYyK1gupYqSysWYFvCiYs7WmUtJEfWq1ZdNQYikSnsT6xRDZ",
  "key12": "zQFgJWh4arETKobLBHcbb2YBFhtQLE9n8NdF9nJK4dNVtLRgt1E1zcko91RCNgwWXFouEsnAdnhjeLELXkupsWT",
  "key13": "62gquhpqJdgZoptrDZ2KQYwKr4crBUYw1CeYRK1eYKWdJTToewuZzqKX7DPnhkKkwDAQGfKAxRVwggGQx42kyzBv",
  "key14": "n8tN6FyTtiBw5SiXKsw3Bm6twUp4YfAm6oTCATYboov3xvcfYLwFKMjXMfbciyHA4CZY3xa8pzdc6gA6yEYFKAD",
  "key15": "5mSwMjvSeNdCD54iS9WWQmXYUWG1TC77PvnD4PHbEkw1mdZPDcH6CZDnQtA1qhUpzEYkfeMuczz71FcYtpp2ewy3",
  "key16": "3iRz1KTsra4Ynr2zuVXTTWT2cTBfbst28LUopVq65pdW9Nnz49sst3D1MDfyPnd6dKbbLHFR9cews6yXcdJLjpKw",
  "key17": "3e922BmSjm3KSg9rofG23nvYTDBUXq8RZ7L3BGD3TY6yZxksk9SyrXJ3fHhBckMCHTWJoug6Ac4u7abW4ZHKwYwf",
  "key18": "2vgNZ6a2VjHft4MvJqr2QAwdkEXAeKamNvCv7o9TJaKJxZQxkGKYjuVfM1KDYqH935vy1tEHwwkBQLhbLPeMBeb2",
  "key19": "3TSPtE9J3vBTx97vxh6yf7vPJfj1Ja7Fj8Cz3Mr66x1RWtAWPjmfuj8oCaGWNJsaK4FLuXkvqKnbak7AB2nQhdYD",
  "key20": "ymjSJV8oHFNoBT9APGHVp7iDDvts3mCV8VWRQKTbEgNppwSob3HwPijq6cmVCMfn81eqdbKF1PuMSEofDGgH28u",
  "key21": "468XsDY7tFcu9q6ovJQN9C9z9SQrj1iBE3SWuU2Smg1PZoQruFGMJhpxTALx4p2Mu3GkKsgU18T6Aj4kybGbEM16",
  "key22": "2R5GuX3rjMpSHXNEHwrn4HWTTiQk88jWf5pNTX77r72S6dMuEXjeQT9KXjb2MN3sZcRdkj1BXLBpm61QGrXVB6uN",
  "key23": "38KTrjFvxh5yJXNKrALYr3JtA2nWaxndtS1EqD94FbuLbXk8qrq9etAZqcVqeuuTaNfNFyT7LzkpcpWLHndhAhwc",
  "key24": "3TW1LxdHvDwbjcJPnVeQ9rvJRbHbtewqoJ45qtW4q7z8UPFu1hfZMujuD3iHfMjnBoER3iBrdzCUEPMw45bTUneo",
  "key25": "oeRgmDncw4fmBrrXKtokXUoXdWugof5736XjsjZ7ozEpzSMAAq3yGizDwGtP9rVeNEu42BAusw2s6Wy7W5z8PrG",
  "key26": "28vNUFURHvNj6qfQvm5CnesSpPqTxAkQeWAm2YFWYa85VHSmkKjb2arkkLmntuKmw7m8iVSFSDPDzNqusjuNZJKn",
  "key27": "4Dz6ZZqfLyhVVGsK6RntmJZ4QyMxECoVZScKfzpsc7GdcDKEqEeuDYAevmgfbZ88jp1Jfgq9EaAt79yW8vqybjHh",
  "key28": "33Np2C42WR7jAEC3VbvxcxQRASbhEJg4qi28GLDjRZrBiiy1WePVm4pCqYFUXDimTQVRqgy2DoDCcFYd7hzfxYv1",
  "key29": "3C9am9CX5KFoarpnkaA5tz6xuMiMRd8xEt8Wn7KnywDRntxcmEvSpYVg7Rkgc9BVw7Hp45vPKDoAZ72f6BKKmPY2",
  "key30": "5CTtVg4CzdCbt71NxQmZtnKYSwvTFBvDYrLDMfzbv6iCrzCKDG3e4DBuaEJv9rYjfxxA7yKxaoFwTQVMLZzt96Qj",
  "key31": "3uaNZ8TwwZSq1kkNEGAeE6M61gxPtAR8vdYEMXBc9REzn1ecx2UGmHUHaPKzR932DgrLPh2WAio8rgJqW9txWKaM",
  "key32": "2K8exxbRq4KC5FTcaMBd6chQMCqZaX7JfZM3LaPL5jwRq35jeY5VqMdbiEic4d6c1f5bfT4wziTtU9pJXK7uZAi8",
  "key33": "4eHtRovKrys4fwYHPq6WzxzbvUWsVQoLi1DzhmUTGQu4cehsvYhpoHU1XDR79UZJFBJjSyYKfACnmk5Hr7PcNEFU"
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
