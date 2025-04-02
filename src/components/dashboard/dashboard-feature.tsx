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
    "QhbVcExXkLkXD31P2yNR9rnXBoWwTPrn7R2RWQqVgFvWTrDhdkaBUCKQHw4aDa6E4XqJrdmLSbKdoLPKqQCtV4z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NEsQkGgvMrpEpfpucKGJJ5U7B6imGdFjG4ggyb1aGiN2drhhFDdWYdoKK9Ry9a6XQgNTuy3oHjgsHtRBV6zu2p7",
  "key1": "D2U3NHcfAoYf7kkEE3hfkbGFxm44urqCXYSpwDK1axSktnq2XHHAyUpvP1mxHjZTYHVUESkZCaCHQun1gSyv3pr",
  "key2": "4cuKpY4BfDY3yx7Jq2bQRZFwBvE6oCJkPHxTT1UmE97dHuRPZeLKSx2HKpKJs8o9JNG6e1X7gmAPXkQaCKJgxWS4",
  "key3": "2qsYt7KG2gd4fnXDophfm38YwBVfAxLiumteH9pfHX9af4zi2dXXceRhq78kx2eyoFrPEmgVw6vkZXnWWhpBv31s",
  "key4": "67YPxQK2qv6GyBrfb4Y8yMfzLoQizy4FzDKUHySLwMBxVUYposgUPdahxkECUPk15oBjAhPUsMxXWSAihcNFRxFN",
  "key5": "DDipGURSg4vo4x7Bhy4hPEZXqrPzQbhM3jy4Cu1uNtBfc6tPtuWBX5FHoiSjgzyvteEBhFTYcyByLoTKp5cBH9N",
  "key6": "LJXAfZW5M3fmuHfr9QQMaFGHthtYVvU8vPkxML6nF8JyyiA4fegDZb38gxKjv5zunkeHJabGEzPHwfgVm1idarE",
  "key7": "YjczXwFr9UE1BEgKjXeXiaP9jyVX9N7WEz8s5ehj114tAA2xxMFxSxMTcXyybwsGUGACxKHqA1MUPjSd8PRh4x5",
  "key8": "SzVmBaRzPbrVfzQqyuauEJEAV4sdf19zZ57WHYF45MVN3TmTM3RBh8cZ9bSJ36eFcmy4YoWc4o7BzBWLrGUfp6p",
  "key9": "54Vr6zjUSPwBk3C19vnYX6RjmrJhBbMPQXg7C5PGHjYGk6xQLXCXt6uoTyukXZegoBSqYoMjk58wb8XkM7Pd9Ge9",
  "key10": "356LAZW2ribRRokP7mwTtDbK5dTUBGcx2CDjQ1cA5ZBa8Pb7632mu6kiwnKhME8yfAkFn8RXQxmSGE9p2xAfy6k4",
  "key11": "uLHuTTcmZaN4a2GYiwJaVUiDn1cvmPu75tiEvpHWu19fNCSdEhrtzD8Fp5EFXfEoEnAcmq1QBueQgwDqUFY4vVn",
  "key12": "3qknvVBwrQywzQg8xvZBJ5MoYZdBWK27jjVXa7NLNzruc9szZzQoNx5n453zRSq9xdNaEwHDYzsBT1qF9fAYGTGA",
  "key13": "2hgCnZMTEi1MDna4LmGGbmTqaeTU2uKkJLa2xdFrX8JkuMCucJ5eHVCi4xjVkuh1zezUksH69jbGLvKC6WdsBJ7J",
  "key14": "2SRAmKvKfy7HXAioyHykAp9aiLcukojt5GvxbfZAMpGUDqf9CBdnpCSpCEAEwe6b5outmYfM1VRWs74DNSZqLnxq",
  "key15": "7dXpnPY3XsAGjejYtWWgeHHRyNHDgZYPuwjWgFYeDXVjHc3WQCZ1vACXQHhdJg6wnSS6FQz75C1tZmtroEHqMWb",
  "key16": "35ReLxpcgH8gWuwQ3AcxTQHam2qLYj6B3YSoeeXmTeC6FmUeqR6GLp2gbwwdzXWcsB1bwVP4k652NtTKDsTsMPTE",
  "key17": "3mC9Hc5ymhML8JVJbrSJDdFcZALpemq4ToUvA5n937VNa9fsCjX63YEP2aBBNv3TD6QBKdf9AUH8ZgpZ8VygsCu8",
  "key18": "5x68zQhJzrfcBPa36JjU1zgxmmTHFvbW4LFQyECHi9XszLh4xPGWUSgpmhjkiRDtr1Ej2iAuimCA84TkuuKu3AJf",
  "key19": "4qXNo15EPnYAXokdwYZJAbG6vSnYyZpkGc3Uhe7m9nMWEhtoqKJEiSt8e8AZSFErjLgEcDrnuBCG6FPmHth9kdij",
  "key20": "5bYVg4V4nPj9cE8Sskj7K5rrt1JpbgcGrYCxDT3aET8PFsfS2LRdkMBxKuNGEY771PzXVG5XVr2A9hV4cPGARXkr",
  "key21": "38hEZeQNjuVDLH5WfTdUizHwTeXikbiATFSwUdoNeDC8YgptCbWsfXJdnB3o7H9JgAgjzYdp9offMtidmDXPSRBP",
  "key22": "3bT1wkBX7eksgUBxiYQw58TBVPvZ5uPubZgTWkmR45nxPghpZ3KzEZBjfQKqHizMDySbt8vbbhvoN5okk1KGzgdN",
  "key23": "3idw9kEWLeUuggKRqqoNb2EHjpmCvYSoKJMXaaDkBG1zwVFsyiC8CkBbMCaj31hxta65cK8ELCRXem1Xxmmz9Vw4",
  "key24": "3k8dw6SKdPEa9Qux83ihn3anKjMWXEyjBqzyMht7GDjeECQE6dw7Yyxw72bWGUL9pu3AB7Rj68p8g9eszgXS91Ey",
  "key25": "2YMBAEikd2S8cZyDT2LumcuXry9pg9VR1FBsGswjN5nzatXMFqKBTRXr8e1oMnrJwDRoSiEYN6YUYacBaaqg87n",
  "key26": "2K2jSLxTktK43DQNBdAygtQQ5r7sS7vu72uPTRhrfF5SRe7BUA3pk2pxtUiqsvECg77vdNB3C9US41ZdrH9LpzmE",
  "key27": "5wjEydbosAu9wXVWGm4RpKRau9y1TxfJGEQHHRh48UVdMRejRKkb3cniW5joG7EYueEqhLfDp1UZ8v9AxWyryDus",
  "key28": "4HBRBkfxhxW3c6m2fQXQWjCPWgJEn8uw2y1zWwNfZCv37QRMbyprv8qD3AyWUkpoZZiW8fzPHitd1fZN4tgBmAoa",
  "key29": "NQ5mHT4BoPbYKLWGXosbEcuPXLGK8aMDcKpUdjDA7hE4vNRx9D3yWW8r6wh3cqMEkov71w7uWvJ5YaUU83tFtpH",
  "key30": "5TsE8MBuBQNbXcuPzy1YMBe8WuMLshB29raR2HxVEvGfXteQQux2CNrzcyKanwJtXyEKSb3uCUeP2RbgQ6FHGpnM",
  "key31": "mBp9keciNs53m4zSeFxecH7y3tYA34Ear4Ww4VWTAP2aRPU5mPSXnSf7cNuV9vX2LZwtTq1k3pkzQP1rvHWNLjt",
  "key32": "5FHzhzq6eEJASmihpqsMHZUa9HGftk6wwfQGJWbo6jsmMpCkCtg9TkWatg6zt5skEvUakHjVdnWvAW6UQhMhR6JH",
  "key33": "5jE1wC4NR5kxak4NFmzd3xi9PBTHUu4CbXhcfh7yJcvyqsKegoBqMkWnoJus9q32thwDbr7zbf1pJBjff2C551j5",
  "key34": "2jKT7aqKQG7byy3aAdPHx7Rv3FQycELmU8wD7GBH7rpLEZbbQwwjkk5CeeYkzJp6PuahxysTr4RVfJzsfUTYEBF5",
  "key35": "5ni4HspKueweCWTQpycHhbnsrctppC9UCTeT1mFfGSx1vtuTnNZNcEgxvGWcD9bYXUH3bLtcxx18Q2fruwkVUmoC",
  "key36": "5cw4QhzAzc2vpkaW3srQGfbf2GtBRC4yFgM9ZYNtRD2zyp2YCBsje8Jf7KYhp45zFZB8Lpwg4Dy5ToGrzsmjWPN1",
  "key37": "3RHExx1jBwi8zCLmDy7R71eCdPxAqxQN43uNJYuyB52DcU4NfvNFk4BvxMUBsRyFAG4bc1EaDm6aD424VbnKrhnV",
  "key38": "DexopBqQhvSqDaSS6BSHB2GK3eZfuUEvF5bQvyq14wfA5YSSyy4EJYMdeWatQVW3dEVKnof6szEHByhzqy7mERU",
  "key39": "2xY4AdbYKgNoRV55YAtHUZF2uq7vgR6ERwXpG92KNNhxhiSuYJWS1pJUcxzK5UegRNdAqzx3fxMNwx6rhhCnMv1q",
  "key40": "p11zHrPRBmqNHmmuza29w3XUuBJ3UcoYUXr5nkCASPbDUfz1HoiCoWJCenZTyc9WpHy8s8Nik6KdfmgVzoBhV9T",
  "key41": "4EASZfcubMf5izUFLaQadM4CgVcCxu12Co4aTiNZn5gGtJwzwaE1cmZorky3N32s7pmp4DAiij6utGrdi5TPvh6B",
  "key42": "4xdVNfhNo328DhPRN24AKySk9VZFy3hiQGhLqtp6Zv5gzPnSdcpHaa8GCbt8htHzbDH7p11wXg2LLBd86Eyf5b5R",
  "key43": "3Si4rdmjskQ6XEjHAJ53K5jFzQphMkokh6iubunTVd9JLqtJcrPYwLdtNpk425dHuVfqoKS5uTrd6SGGSREYzAeR",
  "key44": "5g4j4YhsXQG7E3DBVmu6hF9y2iMF9qgjJs61XCeGsWXotDHNPLTrwDuAAi2RwVyetUa5tB7VzNdzgumDtbqSfxSv",
  "key45": "4hyRTxmovXPLcsUm9fM7ScZQNU6pVkeNN7t9SnFV6E6f5yCz7w25nZtrYqnhbNEGGJRah15FgnyBw63a6S6MYnw1",
  "key46": "AP6isc7628Qb6yHXmGF2q3Pixv6sUBkBNgVgUsWZiiJr4B9Xfumy98dCnvsvm4DpZFjL9oDeuygKnXEbATv5nbw",
  "key47": "4P9janMnZtUTEi96NLPsKtdmmFCz4tkR6X7AboL4QZsGJj3baxGMNLCcH2QfNtUTfoNsatsLdTvwPEcNmKhXgUx1",
  "key48": "5jAzzbjSMg6ZTHeYytXKhCAendUDPe6pikXGYjw8AMknCAK3FCYi52DoSikYbNksm7EnRetSv4HA99xWRdVv3ofh"
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
