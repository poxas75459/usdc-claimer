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
    "2vQaxdKZuY6xyvRFNdrnSCpb8UkUyWrP8MAbYCG5edCdyAod7RvD9F2pmtcbU5uo1J4zRVXBiPLAtPd9Wop6eGPD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24WtZfFPthiJNoMmxwovxTjX3xvcn8mPAU74Chz553Wr4gog7FcScXnQQ7j93PDHT8dhaAMJvT6mme731SLD2Zxf",
  "key1": "4gPk81rq6aMUc7KBh6oGADrnW3C2VkE9JwdQ2TSutQRw2mvxy4DZeKxaxaU8UwWjuKZPLCKoE4KV1zCYzqPcDAmG",
  "key2": "5XeNSzkHjB2s5XM6gvSR7C9r78UazSUPZq2qKrP53rnoE5SW9gJcsWzF56YrnAKip4EpXaM7SCxitP1D1rA1DFyf",
  "key3": "3DTjJ2fhdAcKi3qcE2Prtpat5CEe3nawbKKjUSqVKEbbqDd14KL4wX5jQbe89oQnaPm5he4wNFgcv1JeGPtmduRW",
  "key4": "AyBznZE8ZGpGzt6PL42SGZnEVjHmKjdykKVG5yRCPKzqi6bPc7ZLMCGUdhjMvVxSTynYxDwHxveUdyNpQU3GnRp",
  "key5": "2eij8wmSfwJRLUNAkhKKq3HieYWBqecAQu5RqEL3iaa7Lb2D5Tntv5fEnUHpDRFKn9zRRjy1P3xcXpsmHdCKeBAf",
  "key6": "k9sdq16iwDDsX5PJZ4VWA433yYXpechXcQpMfrQ7AJXFBwqnLm2PN2kZY9zUYUXK5Tgv1fgNqSM1rjxbkk524Wf",
  "key7": "4pP1pndqq6zbV5ZvyqNnjVEpBY2gvrvhSaWJ6qerZjfFtyXKyj17mE78pa4M12yWjK8bPf6pKjUNi78pMCXoSjxG",
  "key8": "2fKTRJJW1q75WuTmBuwJGDBiwfuGhBuxUTdvaBjAbqaSHraw1tNWhdcrjimLeP4GxeX5c78NVSbyus4ZjUpm3Vk6",
  "key9": "3wQc3kLN8zD54xzwM1t3fEDGjHgt37XXsBDTycNzLprdW2tmfLyXsTwfrTFkh9qC8bgSu8ozm9drAY5GGMamk4yY",
  "key10": "2ZGct9qFE89Upq1w44fsM7ACjDJ7iftbCFdc7ZiXea1igZmh84S2UPaqXE8FZAMUwymZDG1VxoKHvqWghU1rTT9M",
  "key11": "2zJk8445FZ9EvYFHZgAHLAPAnC2WYjjxLB4iJooJfYPMVmmMZCFgLfru5pxH8PZs78YGSGmx4bzL518ankyVDSUH",
  "key12": "4yWdY8KnCfv78seufd4PGjFGjuiPavfwg1S7CBXUn5AjPtTQeC8AQbQUzN2X43SMrQmKFgpjgnL6LbKW7GX61bNJ",
  "key13": "39NSUyB7cd6GL3MUBAsMP64yX3GsrrET5GbaDCKHR57gUSswp4XUdAyq3k22Ai7ygR723dUykiPi6t6qj3W9WxJX",
  "key14": "5CXthywwZpk3Zs3oTHz86xwy9JmZ145kfV92WKqSPj2cgGEf4CHa8gJ7uMKgmADVmys5sDyZABafeuX4GBNRHXgC",
  "key15": "NLkzF4TbXrQD6kCnV85Hzue1NS5EbjRCxt94dvLpCL3W17WsFrEnLwWqUdo6gZETnwB23tEgKQUopQsQhcSm5hk",
  "key16": "5BEFMMwQJuU1akTkFnSts5XFC22PeCnC2Q4AMqCbqEYWE72tnmq8zj5LWfF7hArnDLWopqfuTNFUvpiKdZwGc3DH",
  "key17": "5HntYRUHiu2ArELEYcc7Z4d5Kvb6GYBWa7cYi2KmgiBM8ZUdU7MtPP4E1oZs62TerVAe8Eq8yv7mbwbuEcopSjAc",
  "key18": "2xwkGmUbpSNRqsCyWofxaG8pzs613SmMSNXZ9QugiLCKPXTMhzxJ4T46ZeYTfjkCFi9nxkvCTHWt65o1mLcM2ko2",
  "key19": "2so2VSYpxoHGVWQMAvfZZ97KQfZTGhowDcsgzs2JCTCU7pVY1JP3RuKvE4MtEUybB2J2eKdPCb4nMGJsrZGqJrMJ",
  "key20": "54neZydDEDSkys15rZCLDwZ36c3RrZnVASsCvfcDwD7UfppBumVmFj7J4ESj3b43cuU8YPWtzyFjYVp5ozP9b9wx",
  "key21": "5hGFpQvuBvMehoy9BFBqC4LG24Dsebb3LtHQcgPrchxeG32RK69AdVmJacbMcFpG3aXv3Sutvq2Cii2v1zBGL17M",
  "key22": "486Gv3Tg9ZPPvGSDovWSJXBww4LV3FMjnNhqdZFEVVyWfJZYu8QKfNhZuofE4shnVrXLrR1XnreeN39ELfw9fMVi",
  "key23": "5TE7h6Rq4pw1qFRwk7oM7KwRc9KKmEsakDayoFqTfQLQd8TkugS9Pdm48aGE7m2eVhNGFyc4EfRhzF1aduYtPh5f",
  "key24": "4M6xsZS6WvGmvDqj5dPvYCV6jug1HsNo6YUNZdVaFkvLRyL2yMjx5mNqjYzocaBWHYqrgJu9rFn5axaZQsqqoLtS",
  "key25": "5LJLqstc8qMWH3g6VEJG1n1SEvhNTmrF8s3K67SLHvqKrEGrwrWhUVrAFrS4THoJUqeZi5SQhYmbBKwtZBsvExZH",
  "key26": "42WDeuUYxG7S9g22XUnkAvbsvcBaG51K7nVevK6FusJPKSNaCDGsQkg5pcTm67FZK59RBuhpQvqLknKzueNSLQCL",
  "key27": "4c2NKdVRpr8matPTwfSKJixPgxFJsNaUxt1YsKz7Mt2objDs7FotbCd2ovMW5717a3trdMEhk46vRjHQLFWJehq3",
  "key28": "4JQe5StEi3RSCXoCkQupxJV4mwPS1hR2PQfpFW6x4mgBPnJaXNEoYKyvf6XGT82gperDAw61XrbXfRZVxnJWL9Sj",
  "key29": "67THLERjtf3NebYHwxXHwh13x7Q5NMB6qJXH8bAnNEuMhyg8wPcAnNqAwz1G4fCP6NS3KNzByEqwDPzYousRiYSA",
  "key30": "5eULgc3nwAc4nBxKYMz9zuHWHjqBaW84CFdiRpbkssca4EE8fZeAbjXZjAoDHMiDokkxvQxu6pkt77FM8UoqkZes",
  "key31": "3kYA4JWb8k1tNgFHUfh7i4JiPqmoKVK9ZC1CEQVMyyhaaoRvMggpcn98NV34MCMtmNe5Xt9ykGBLS8Ewr2tT4JVJ",
  "key32": "5fEwPrVxfnHtUYt8jiekKhXDZt7AgLNwBcsPBZkpNwkuE27LsCPVeqzJjcxwCXgMxJCvfMzyr5n9db62CFe1SSWy",
  "key33": "PagxRZGVTBnPvt2ZkoyEBLp9gvozV9ByT7LD1LvwNiaTWEeAc6Y1gTyeBkXnX4SgMXqFvBUbzB4RbW2kDEX65kd",
  "key34": "2EP8kd9iDtUhK1RDkdXmqERqyrwDjyeJM4SiMocbixNtbg5Sx2LNU9XHygfxQvq7QpJpFEifu4GJH7XcKYFzRJsK",
  "key35": "5Me81RCSWVc8anqjREu1PRwU4vs34p2ycmBimKGjRY1ehUjE9Hx3mXxLJCSgXTQtxZBnR5M3U8Vt9cpVBSHJwGWK",
  "key36": "4ELTdPjvBk7RykbWTdQ45vcibq7HtBh63mwrJUGJWL9yxqYxTAynHPCGfTocW1oruondtR9qJrNDGmuBb7dFwBoN",
  "key37": "3By6Y8jkecKGv6eksHsu2PF2vbiBLAZd1SUEJmC5go9yhKRTxiWF8PibFBdNVG4oWuvxKZ9ZHL4iTejzwiYNZHpE",
  "key38": "5webRiZkB7wwzT21gepgcYePZtrwduVqVTmpFeLjHFyFEtCzU1KAvpHYiRv7JFqJb9xGwRkFYkfybPwS1MJ5hbjo",
  "key39": "5X25nZ3G44VMETPFJy3NZ51L7FMkEbDQ7VNtf59cuSvKmsprs3LBhgDYsZZ5pcsMionr4P3qK7C62yfRD2e3fQwG"
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
