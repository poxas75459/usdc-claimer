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
    "3Pvn8NUgnvEWQvJyQnRPDbbPww8kzrVPVSynt7RqjHQcQNWvBpWYegoUY3r2bQffnZR3Kg91d4CEDrR2HqjgJiEE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "x4Bjowjfd98PjMZUMQdu2LFwr2iSzYzuj9La39JuuQwVBhzUnAamY3oD9ui16AFovMcMZdavruoKKd6hqdLu1E7",
  "key1": "363sGh2hEqEofv6nzUMCmoDMgcMmYFNfbFwutahD6xD8gDDEwJacoL8y1UuZT5mPLRgap2pAF2nunjitnUatVQAR",
  "key2": "3Tm4ozdAJTRPZ321UP8mpPiZnuYdzthPPnzGVd4YusxsjVjCCD99UXcBjnGSuLgHSXDpVbXK4dMLNH6LYsuSpQwD",
  "key3": "2v1izwnhBvdVGcscmbHg9m8kLeWtVWwnaXg6c7RAYvtr7sWzxUqHm1VJZcutx2tZucKPny8B13ns9gn7ZQDcyTkX",
  "key4": "53zYvS3gud7TR3JqhESGMyMVzy9MNmWAKsERfJZtMbCu2fgZvf2a46v9KdCzNVKX61RrYb46xopvDLcrLPhnphmo",
  "key5": "4Jp6aSiBk8x6QVXJTnbmV3G4TjqNSLANJPZb1BRpZBncynN2wuQqvDxuQXMWiy4xGHVQLLPnaaZVCWyAU5peV6NP",
  "key6": "63CfQ1n56pHMVdryaU5zU2EHmxYpBjqhiGjnx5o6QymkF1o2VDYGnpSALZukQMYkrJ6KXjjMPXHfANCfoWuwvcE1",
  "key7": "5PMCug3X5BHjnQ7PkCCoifyFA611SYVobF78pHABHM9tTGJ5MK6jnfwJpUMELrneGpZahzDcgaDNCy68uXndtVwK",
  "key8": "3tEK2UD2KspRdFGRgVCMZR8nUdNUmS6zuxM5X8LrLDF4CV85hJcQLiaQmtkrXHChEgkcctaATMoTBMU7MGREfunZ",
  "key9": "2BpFfZ4NgN4ohzjTs9pwJrZn3ep6fzQCszTkzwRvHGW6agjytwSfe1zDYtiy8Sy9mTCerXF9YLNKMt8FZRPaTUUQ",
  "key10": "61J8xs3cE7K6gjWUa8nTjQacNBwQm7yrmv1MzoBdgT28RWLz3emnMaemsJXcoQxB6NK4EWaHF75XxDEEP9cseYep",
  "key11": "4YgraPoCGdFrcMvfgY5BLsz8SZ46Mcw6ZTXGuHaNaBGqPXpiK4kLM4zqjT5VQ9SrzGb1TvX5mB7pMag5VhbKWndK",
  "key12": "3wPV81ZeCYkc41b2jYR4pwFwRbiGNn7JjN83DKjSRp5B17HJUy6HGVrgSniLZpd7Biy1DsXQ5F5E5HoM3PUnQz3V",
  "key13": "5Werx5KZRGvcUqHmM414QjiaeKVV4pHtAMVGWbFnvwXD2nW9fmgdMyHiU7jXPtugjv52FbLW63ToEayVAL7Sbkhv",
  "key14": "3JUW5sC9wj2P34guL1jQJHX7x3rsp1nmAyWXhcwmat3KVQWRnFCf9DvhkejB79k8A7EagzYk2jJshMYu67x4hDqx",
  "key15": "yBAPNcQeCmycpg4N7xCk81rLzUkBkZU6fuUteENajdYPHciw4MiGiNeRgfA6sRwZKXNbHNyuo8ZWGqpRXh8JB6C",
  "key16": "41YJCoAET5o9AJCe2xYY6w77XTrSzh33Yf4f7o8V3ugne5UXGDzraBQnrpnCFaUeJYiH97HzTW4tyq9a9eecRCDZ",
  "key17": "5NuoW6eAXKBgtssMn3j2WtZn93jxsS5nh8TWLkg7YgC6jUERrVxmqeSp4d6S6EJXY24BFqWy4WyRBdNZSnZZggmk",
  "key18": "2VKw4uttY8hbhHTP4zSYNz5pNQsJNboVrPNtayizXxrfCgJS67C9yvEJDBDqAKBxR31TctXNsaHxGaTDHNxW4inK",
  "key19": "xv83PThZM8p5JSjb9m4ixF4z7Sfa64VKK2rHU6E5DS7XwqBRaHJTbi8iM4bfVLDZ5AoiTdpMwDS9ZBtCsSPzLQG",
  "key20": "2Z9Fb2Qrc2qDf6B4owhgWm1JDE29C4bEpiDr3w23ZE29jnayJSZEqCkV7PFRQ8VpWFV8nL6upFfMgKxH2JaKUPBD",
  "key21": "56FzchtKTNkuYaSjcEfuMjCFZ3BE2kknmn8WxESW8ucW5DFdNqM9GcYwMjrMNWB95tfdTRswDGXuzFKK1GxyRHy7",
  "key22": "2fEfNWD2hyEXhK9M883qRNAhWx17uKkgtQNcUvKzV77SNk2RdZLD3qQYkkQVa3253C1xRtuYjD4eSC4Li2igBrD",
  "key23": "3UDJ6qB4qUxu53FQ7EbjyyVM1XQnCPstxrcarNpdTf612AoJpxnwNtC7nfh1x2x7FfamuiRcVZHeZKhnLT9iBV8",
  "key24": "3L5KU1CCVKR3ebE9tik9WHLLx9Woq8upXsQt93DPwgEQTW8bGj6uDQSce4jeierorDsRNPEw7eBENxrZ18Aa2qTX",
  "key25": "8RSrZcv9vJcpTDHuATw4Q1eh4faqUhGbQR5TAygqiFUiLTgvuqFzWPUgp8wGyoVyFieQCb8b8RqPvW1CEvz63W5",
  "key26": "sGmQNtXRwJ9RRBsHR7ZhxwnWmArjPoAL1LSjNAx4CRvTBaWBPzysizvtUWvxnn6JjvA1absJujrTBsdpe3jbH37",
  "key27": "46copm5P82zjhFRn8NppHHTfUb8McqqWdGQiuxBp3mALJ72rU5hjRDHHKFxEqTpxK1vzTvfS68zxhNXw7wPX6tJj",
  "key28": "4qh5JPSYq3GBNTUQvSSxA61rhy599Bhj5zUQt53ozLkxk8chAYhL8e8kmDq1udLwAL3XFJvdCdxrLbC1f4vL8ZYW",
  "key29": "4Q8jjoW4V4ATR3qhit4mVGwd5njhTydDJvn8kjft1QJN9A1yHTXCB9JHtApHXejwUYRSXnDu75qL9e2ZVot1jSSw",
  "key30": "d2HzNaSFjz2keojgDZJQwpFtiZRpWFvCf4u5hCvNvTy3NDMZgSTH3qWbCyFsE635LgZjNp59KB5sdmpQS4Rko8X",
  "key31": "3QoGP8CsLSsFmu3XCEKUAM1BkCLTcENNDfS8JeTfd4VdohqK8HGhxauxSKkAHQLjHSgHjone8YyRyTeUfzE2DHT",
  "key32": "5qosLbPwzSQb4dTDdfgygs7HgAfQG3U9788qzsSoje7dDnvqsGVgrwZnsh8eWsJ7RABLzXQTqaRSou1kuiTGG2bz",
  "key33": "3hzvumrmtebRf7ebf7bR9od627Lrr5D9VCkf8QPN6Z1hpHeexHXJ5XGXiT8h61swDaEVMex2ZpaWVce6AF2y2cry",
  "key34": "3Aw6nU5cS3u8k8qaPUTF5xr8oJvoYkjfDGL7QLXfbKpTe9csgex3jL6WdemkifYJKFcp5jY8NNrirW2KDBEEYnYU",
  "key35": "5612dCF9oWvuWZAAWxnr2Z5Nu9temu9EhJY2PG9AYesEGeifJR7V3xV26ZEp5d7mPLhGkaKaNyhP6fCCu9f18QZp",
  "key36": "4HYixCT9kfchM5TmkbYeY26FckeW7bhXxbL13LTX52FQc3TejwP3oVCRM615q7btBxE4ZyeAgH1JMGsVf3UJGk1B",
  "key37": "5H61uJLzQybuiCiH3ZZUGXGYANZLi3yxDeLMNtVEXieUi44XT86umSjH1y9Dp9tYNcSWKPP9q5TAxdEu5orBKa9E",
  "key38": "4QM33RJUNZz1PzYyEDE6m5ZQhcwtBuTmTiEr3fVdVxSnzvjG5dqFt9q1f1BZFqXZkYfEePn1GUDxcZ7gjNjLM7wq",
  "key39": "49vEmjY7DMYs5i5Bkdk5AUzGxFzLFmYskjyMcnYiCxqM3bk6TfQj7FqdMeD7k7qZEnSLb46G92JKBeQivEeeT2KQ",
  "key40": "MwYdyT68SJLgcqCn8T6uQkksZWaZW5qvQ7VgaCbPbPJVChyZBzSTCY4BiNeLkJb3TNL2EtMrQekrdJKc1nysrLc",
  "key41": "2HLsuG4hjxUr8E2Fp1p8SaqfZxNy2KwVCJBfHfAUCDR2LtE3yWjngD1BpNZeBPFYNMwzqBCjG9ank7FeK4qhzHDZ",
  "key42": "5S8zWwpCLDvcw675YEoM5dfGJqkPAZbrcttjkoyCdXMutnt97rYvN5TbLiQzBhupfM9vuxhiJTAu3Q9H2Zsha33y",
  "key43": "cVoMDttKFrQqwJKVsMS9k3arvEmN1YsTpYFHWb9wCVoQYjLrCDjXp843qDAitH9B2hyvhVzVQdJSMqAe7eUmSNr"
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
