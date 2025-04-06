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
    "5bcsqwydjYtWyz1mKpJibJVQFHfd437UJ1F5ALK6gEVH7shps9fUD7nLnQygq3eaXWdKfw9MjDrP7toK1G5Zk82r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bG2RYtoquTSDtQuHKp57oCEk4VatCBa3Ppe7VpXUhrVRkNV2MhwbFQmixNndj679yBhQ7Ud1nshSBf9YJ1DvyLd",
  "key1": "GVa2pi8a4GitkPZpXPs68KDMBPzRaTHboTB3QpEiRWmMe8FGktTa3QLCxKVnWLn48UDtP3xnhun2mcSkMjqN5FS",
  "key2": "5Cktv5ww5AEUu9qTmK9KqCSLMHmW3gSGcyYY2JFTK6zzsjruTXbVxxuFX63pk1VPyFc8xeU5kqDEE5WsY8omUKmP",
  "key3": "2V1NxwdVxaBziZTZ5MHJurdMbjsgM1gBpm8be1TXLrTjXC8mzGZpXLw53tXbPvvuM8zzWoNiQnBhfKRcsDvAfyCn",
  "key4": "2uDcypW7FXvea53yWSFy8DBwxw8QTJR3ik1STpjDK7JU6KRuA8HH8RDHv9tppPwDDvQUDqSPTaJDc3xpiJimXA8W",
  "key5": "39KxU1LN6bbF5wS94epzJdUynGcVA3rjnp9NW868Pagmxvb3NhZs85knv1GAU5SwxbAwtfwnwAaRzk1CxmQAG6jT",
  "key6": "2JLUrwmpJJXUCehUecPHv5W5RJvKre7Ang9cmwm9ki5djsjbraHRBD4cNac6DZjb1Gbvq6wNYv5Futosa9tea1rY",
  "key7": "3qumUzioGG44fqfpn6TyiNGGUrzSVRfzLs7sMwGvXjfc7vhRJpvb5TEjkJkLgrFvKvabvGdiob223T2u5vESeSZk",
  "key8": "2t7CkZ15DHEkWk1wa45g6EuqBdo9j53sBn7MFis9ewPBT29QPmgyXzb3eL7pSTjdqw2MWYoBcz8Z9hhVDGLt1pUH",
  "key9": "5387YicvK1x7g51FMXiHSk3XUGo7c1WUnrM7zZ395VXFpxr9V3vp1peophBCbnuZuNc1bavJggBWvgaVJgQkcYqg",
  "key10": "583Su8BwKYQnKTMzui3tWccCX95VQFXKWhBfARKcDDMDriaff8oa6aGPHxvjn2tWTwkmGdy9WTpRoeYaEV6itcnX",
  "key11": "4yR1tsdDB58kFWuq2tRtrnKhBFQ3HojJ4i9ZbUaPDvrBf9RcotGS4rCrR3LbyKcjai9yzMaCM8FEBq2JufvUo2oL",
  "key12": "46VkBCTxcZCTwNyeZdRCBQvZwriWi7RFi8ENTzp31H3fvdBJRS8Meb5ETejJvGsFvyE8f1615whfUJoCwmRiJt44",
  "key13": "4dmJypZv1PWz8jcwP43aJH9JkwuBWNQwQjS7yJp1sDoxsfNJzueGs4LtzqhR8nmsHWgQWr5muigQaEfoPKwcn1yo",
  "key14": "3ehUWZNK7GPgRQndKvi6NyJTmmq2P7cacYks3uWpwBj97VRYkxPUDJSKQGhswVBXZVxbjLXzHBLCavv4usKhv1L9",
  "key15": "3ZCBcqXFuFdToxve2WKCB5DK5eicGTg2NNbUFwUTtGsMNoFoDZ6pNf6Dc284BobbUojoGg46ijsxitTbQwKFMYV5",
  "key16": "2pxcqjmyhyk3rtkZzNs2FpTqnZHgNtMKJeLDT9s99Ctfh7uykVsmqsUWgAuNM5jhV7oTEdi1FHrT2eoQo4WRpumM",
  "key17": "3woXkYgYatHVEAdoMt8xJ3T2U7zsmULCnj4Ae7REs7ga5tAuTHPJA3u5cmss4AZkRpLsGiueaUAjvwT9aaySBbCg",
  "key18": "5Fi1CNNzgRewy7F1vRkXtdQyUxxia7wYU5qW2WjNCFiZw5zW6pEvUTB9Nor34xoKATAGUG7awgDmk6NYS2uoVot",
  "key19": "2Z7c1hKfYV7fpgeBu6TYFaMnWq5MAFrFU6jTkMUUQLBhSwRqKahYRVenbseURo8uXmysWnwFjjoXqaL7Z3cgyg3p",
  "key20": "2H8s2RQ1jNUsRPfRfm4YvfA3vasTjCd5x9z7kjS8bNX8xHcbc7zvcX5LAiqVZStzSiHYSGGaX6LxskEQnYnAncCP",
  "key21": "Zixp9cRpXrB36RDpbu1Gr1PvkYfkHQtfYZcyvZxbBS1oxCRT3pcu9mnkvBpcrXrWpyPY2953GN4q1t3yrS7kEum",
  "key22": "4KbzLmLJwEAfqRHmCMtUY7qaPyW1w8JuVKQuAoiPN27BgsEbpHkLUp4Sk1PzMCLNVGoc5xTXeoK2Dj53x9Uoaump",
  "key23": "5JdkFHqRT4N93iFYXUQGuqead47SboCF5vnaAxBrP4NnDfqZrSPHt1ZAE29rPjoitNGWND2pCoLVVbm3MRHm92zk",
  "key24": "7PJasPBzHcVVWWGFGrbXFKuWsxWDjjyfTpQuDzchpddBFKV5R8AyeC9rN4mKxJzDagL3PB4y8pQjD3uyNagU5xn",
  "key25": "4EoW9ZDUVtn4drhXkd8WK4v1VjppV2jpFk2WScc3tQmsM1ufYaUBNPMoWsD2PpKstcUXaDE7DuWebca7wgKhJj8",
  "key26": "2Uzaqu4PXHUZxwsJp2MiaWNqsasKJcFhZUS6nuDMayuuLWUUYeGsTHWmy5QLAg19T6wPcCbo5mix5vh7jVfW8gqW",
  "key27": "4z31EX2EYc1GZLTRsTkWAnHUrRwwbHxzSfNp66f47m9N5xZU6Q1qptwtUubzMrstAwXUc8h55uSZrNLr3sF6AN3f",
  "key28": "3LG8YGgyJ1FGBeX2bwEo4uqF4rnnbUv9PSCbwQvBaHGLCWhJ3t6FSCBAUmCajMxm34nB14XYGUwadV8s4VdNJgA9",
  "key29": "3GrScrwfYep6gjXhNnDPGD9Z1XCsCoJf5AZCB9L6iFVNXB4hrw4B3AgQDv3DkC8yvrXqkWmfWMBBxZovT81pYFcs",
  "key30": "2q52HaiTyEGTrBd8tR2oBFkfPCV675NJNGLT66oXTDxTNaSeSmR3WtdmTvwkom4WZZhsEHWJ37JQqSYKSZ3rHHvM",
  "key31": "4sVYD7k3Uu1MMJ2hRezxWdKdpv2qQCkZEwJjCJNNq2C5YzbDqcHUXMsmit4WSw37vppsDjvDYQKj4MogAiymqKok",
  "key32": "3LFDGWmEoSNWa3vMiFfsqGvRg1mmEiBdJeekKJWuEK5Vmc5KLGMshjRS4rRDch9iVXfJ1CX7fg1qWnSmKM65A2LB",
  "key33": "3DqEJZGVLhe9GpDdURFmRTBV2DX9A64Ps7uMBF6oDzuyYMPcwpCWhktX1yj4yYBH7118izYAyWdZdRhb177QKbCX",
  "key34": "4pAsKBgqVRZbV4v9zNFsnAz9cDwJndtUbm5QRaYXmaajNV5UQBPpChFXb4awhCyAo6F9BNWZRpKtGQDduVLrhUQD",
  "key35": "NNEzQHqpsWSLAMfMC9k4i8K7kP6XFPE5RDhiZ4kwuLQKwMNbXiTc2LxkHZ86cUbHf2pV9TAAPCKUKXewhFpyY1o",
  "key36": "36YaLZNCJ7kSCYVzvyMqNCe7uLVoPLLiBYQmLjDjvgMyf3BTLHcyYoK9RobWUYQ5eQjZAHAg21tYMLfCrEAbTuE1",
  "key37": "7GjporKQe1zzUuWMQ2pBQSGw6oaPXyYQK6mFSpgcyCxLSKhJtcD4XJF5D6BYGG9QSDkhozBczo1HpkxnQwckjP3",
  "key38": "3bE5dRpfeKnw2HLvAMBp8Nc7NDCaogc1Xjwm65e43wq9sCtZqn1TzsMCQX8bSrtPrhm1ds3kZK6JAb8Kzpdcm6m2",
  "key39": "4eS5pxHaMdmrfGiAF5x2WFVCAdhLe8W9J74pGPArPvDgPmB9BuuFrf7kTPy1TmLZzgseQax7SzUUMYHb2ubxptF5",
  "key40": "GX5cEivYoSnJjxXxQgqhTTY1DPb75uRx9ePyksVaozHhAAxmtVYTdF75fenBcaZ4He3NFE6HbjZe1fA5gQyH7GK",
  "key41": "kVcgLXc4e54bf1LMLn4gd8Bx7DKsX7irx9xhF2BGcc97x7sqAY9bfNoacCXWUB6mSH1tw2z7epcr6ipx7XHnLDp",
  "key42": "4Qr5bMYRcCFqgG6ravBrKWW7wtth5Dv4LoLzeZDbQRLZTibVThoTmKwpw3zQG8aJHtBJUB6u8Z9NdTXixUdBUpPQ",
  "key43": "4EB4VQTU9ztVRkt6FgS9ZW2nEqewx5ccttZ7o7KUeY6xRtDy2mwY98hNYg4gGLE9GCboENJJZa2gMxGpUiCcKnFe",
  "key44": "2YngmJbNsLi4R9QP35NxxVnUQsUvxQTer3LpG2818WSb37VLUxdK4LXQQEV6ZsG3wxPqoNzfYiB8Yqn2jjf3s11Z"
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
