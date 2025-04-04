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
    "4SRNC73H4YgL4HKXUdvX3zgXE1kAuGFWWBqnNQ2iFRJ5koYDGFJFQtfWqHJLcZfSub4MerS1H3NK5sQmocD19jRf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "q47ncicmDvimySm9sdPY9xeA3NmeGdJbEso3Nq7pR8Z7J7E8Nxu28U3A3MzKQEiYc27Y3Hucjqinwi44HdznMcL",
  "key1": "4CpT4BNeZ4sAMdYKfDY4PF9rgh3HYa3UL9zZJKFsfSFGxCYfY4foHfDXtdEbzjZjyuaMeTw9e1dcdvTa9hHYNFKq",
  "key2": "5f4YL8AoYUu8uhbtjk142VYJpC8XUqGxsQEBAzWPTSZPZwRhrFCGuJhYWnGCKqDGqreJM2MWQdPzBTJz5FqHqjFq",
  "key3": "2DuYLcVWtFrPuDjym6csaYTnQH7jFzGu33vjyPV2sKXyTDmX6h4qcYptNPdLL65si61ajtaM6gW98jsJRfF8Kmve",
  "key4": "5cev9AHJkomqtLR1kFVRKXmS4yzNEFBUeJWuVi8c5fkCQXUyGgrZXHdf1GsFt1aEkoxtBP7vwyqadg9vdBbngY1J",
  "key5": "3PBBeMPDsr1VY9DjvsBxRHcKqRfr8QP6ncehGEPS4xFMGWNqaQZXcDotgAmxm9vHGnXPmhByeN5cbcG1FZ2BcjXT",
  "key6": "4NvPr38tLfxFrJLmF1y78Xio8qUnw8x9cMQsbHgFswRQLAbUhTmgySiLxGm71yV1kJFdeKyoF7FR45KEbXFzk1vy",
  "key7": "D6ojfJQMcuLZ3R53oRBAyLBsXtLpFAZvQwBogSY5dqL8iQVfLAuiyqveKu95BJrE6RSCcFnw5gQ7YpgoG2tgcDz",
  "key8": "5VhTB1rCBCLGunDohAmpuxfX8md7rRq3uGSPxVfwQtXuEqKFqmAeA4AQ6X8KwT9SdqaioSNhLJpKAxoKxUJEuUBa",
  "key9": "3mF289hvcY7jEKWKgNPuFVaz2PLo8gm2iySAybfeH4Ss4RA7X4j6RfvWoiqi8y9UP5WU94B91iEvb2LrAhLqZsk7",
  "key10": "3CAcX4MEBf1k7rtv2tHLZ5Pcb2UGkdKGF6UvGKQCSfMjr7nX3n5ZQYcGpXyi43m9FcJF5LMuaV5hRXAMbsvSKR5u",
  "key11": "3GPQdGEmTNmGZFAtE68mHHCQqrsVdyc8JsLWgAWoax7oZVXmyMitz8cZGekGTNqBTtgdEYPpju74Hfo7zjCFMGyK",
  "key12": "6Tv1gTKSVFJbzzg4CatiYWWszfMjipy8aUEMrP9NmrdaQn3fiWKjNQJ5esUafxDpZ3YDyhcJ5fuvP8Htusu8xJu",
  "key13": "2vHXAuPzLWyg781TSdhUPZALEmZv3eEKX7n6RpPvFwK5KuhuW9cnwpPKTTtwNLBeXBxsroyAiUMundt5RZedez6H",
  "key14": "2QsbgppDZk2vuxc5rwXRWu7uupxGTaSKKDJX1z7q8KH1LdFceANBYADyosncrPXq3g79wnjGtn7AjCEgeNxpqDtY",
  "key15": "5tmYP4VZ4X5uFWTeFTzNr8Q1yborXAn11LsHKLb1EKiAEnid8M4UZnMFipujUcJREAEzb22ywWNjJhCiiiRR5Uj",
  "key16": "NVqJLdBLbtW6mhpQuGWAHjzu3v4x47SEDNSPkqBcSA88vGwtP61V67nQ25PmQGct72qwBXKo4R92pSDh5Jv5o2J",
  "key17": "bYwwJJdw6Uj9gMZHs6NW7A7U8Gu9HjDUkCgaQcXRG9wb7t4Y5ZXPGMerFhNmi78TP7VS3aZMyELdVNLZLoW7WA9",
  "key18": "61DY4JisrTZtZJ1ojyw2ZY3BRyMfpK3reSxmMSfhJoGnNk3cXMqC4SqdH1d7oAvwr5S4vjT1gTLARQ6wfKofb6UX",
  "key19": "4KQAt8aQ6s6iLWQxZgNFkX3Qye6VMNoaoTR5UPZCixB349BpoXi5LUpzzWWVwnBCuuaoEhkoqZJfw1PnH2txv4fh",
  "key20": "5376DY5V4iNsrAv75B96tuVYUKAd3nUMdF1KJ1yYQipud9FBy8Gf45QXAsYLadk8deDBVs46Y2wmgCPuozmQRWUW",
  "key21": "613R2s4PN1rVeXg2aVBBfcdqABKRJZTvqK1N4qPmaDoPx7tdkGZBFARZ77YoDkEBgJjz5v6PCJbHUPjPtrp5taoC",
  "key22": "3azDm4WGDEzU25g6M2GhiUxnpDzPWpathRcMYFkZYQKLaDwJM97rx15LHshRrBK2Dvte2HGBB36w4n6bzQeqWYxJ",
  "key23": "5UMxRFkajtMNNLFVcyiMpMBHM8NTPzPji3a9GDErEa1pxd4u42fRAyEttAZCcfK9TXumhNvdWwRimHyMANRKuyff",
  "key24": "4551yrEHrh4RqgnworfttgUESQoiHgXDPwq5rvK9pJ7Scq1nrtX4HF1EvWkH1wrxwxkAQFWJmDDcvW85W6rFnHcG",
  "key25": "bHg5WbAsAZ7txnJZ4yuVAeyXshXNNrbcJFxR5oQfRPStFiqBXKPbej1XC5Vs3kUGvcdoFdJQKJhgFspS8xS3Y1K",
  "key26": "2o6kVLr1WbcZCfYmbRxMDoNdH2KWP4ked2pJiu221YHhybCcat8HMU3QYbQMkcCPAsynNb1xGNFjwwE2MNPWCKQz",
  "key27": "2ekwGe9VfpR86aRSBbC63NXfuYwpwghYAQKd83kkbFzERBXgnJzZp9UPCDPzx2b4aHXioki5p7nsgL1Q2pLYXuun",
  "key28": "3Fd2vMQqsh8iUQxjBdR9QdFxwrbagSXNq4Z6woqGeAPfPwHmRKmE63vdxqcqmE4E75Gt6qxZQdedwbhLewa6ck7b",
  "key29": "66tXiAKBiULRJtjxChfWAMxnwf3ZjfjYAv5dPS39nTcSx1ESjd6SqNSUDbcUCPaVqGA58i3Ugo6nN8dMxsGAu69i",
  "key30": "2apZvy33pDaWDXU3MHNj31ipbMvoSngpzyY8UhCGWjyn54wJznBQFnEstXePum8XxreP4CMbijuyx2GjY9omWUjd",
  "key31": "2a1PX5ofEKifTeFiYjsFZGArP4xAcGnnCLs5V88STiaVWig1SK9ReFnUY3DFYLmazLpXCjEzrnjvcba8Pjv4RBrt",
  "key32": "bmXVDgo4Q8yiWX9b2j7C9JcnwdtY2Pf1bt99WsvCnA7u4uErW2oBVUvQjZXU13APpV4c9fS5EefqFfbcrdSn12c",
  "key33": "65QvvxQN1CKJCcAZhQZy3DTfVm3eyoevQuPTiEHNeuXArVqDZTLphPDcRxmKr8pmSETXfUPrapQWZbDVeb6NqsE9",
  "key34": "4LYfHboSzuHsbAwKhFY23tvaFWe6m5HmSTcicXUVPPeGhx4ZURpynRqQEPz4raWhw2s4sRSCaxf3A884hzsKW4Pp",
  "key35": "3jWW4MC83t1smXPEtnZqTMaCovrpedggGCgRvWHXMp6PTi9wJiKfXoNkRHMJCZ3qfD6EbbhXGMtZiJUSCnjDGaYZ",
  "key36": "62qSTSFJp3tTGJZA4w7rFz7ZHwF8qskhbX5Bbm22PVGpRPvW9n53sJt9ofqo78xtpygWug91jzYS7EMdaTtsDGFU",
  "key37": "5ARRtHv6dxKcD1H2EVk9zPsNjy6DfMKvuKViNETHEJpZgBePU7ftTGJzq4LexNvihqFBU7aNTSCAFuK3aNkSC2nf",
  "key38": "3hCh2brWm6JYnYKKnkFVdif3w5HZ8R1XFFqv7idqSEs513QgGEWbP9NEkPWRtDjkgrpy3VpYFMsJktHK8jF94fi5",
  "key39": "3Ln9RFVBDEosqEb1Lu3pUY4othR2DQKuCkdwswEt4RpZmarWnxdnG5nLY5Ur6Dc26mgPcfeGMhqsoqTn7rtshUVu",
  "key40": "4SydZz2ZUXXGccwCo6BwK65PdAyGUrXKL6na1ntmEXWoPBFFAgNza9LaxHdnLMz5gA8XkVSTWfMf3xDi6YRZj3sE",
  "key41": "4skWviX4E8knRY1waCRzkPDMUor52s8cL3kEch5rpwunKznSvou4NyCR2ATTQkYFqMFhsaSaKSvhDcPpsAGXvytx"
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
