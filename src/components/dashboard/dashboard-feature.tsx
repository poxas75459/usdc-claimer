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
    "3hUGar6F7qsdnFPiw6aBqe8L5YDUHvFEYzT6ZNMtQdJB8SYEHmftmzNrF7fnnpRae7GHRXmahJPKMFuRqbadGnVH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59CPJMAH1ZJY2V4oaC9EQggKYD5NpAPeyjMFJ4JtCyR5E6gXgtkMyn4yS9CyF9k67UGknKpCRc34dNAFJB5YGiBq",
  "key1": "2jCWnGFbTzPR5w1ujWtbV38bQZ7gdGv7F9bwfykmaQHGLVKGqx3u1mnVSnbwu5XVrjKgogiG4JuuAQ4Vw4Bk1HA1",
  "key2": "2cKW22a25svzwHtE4paKu9se1PzX5M1GAvUc7XP13jodf7pfmnnU19jpnpaQSrMZaSYpZfZXGtQ8FHa4JC4eSm2o",
  "key3": "czKfAocg9JLCqA4kgiGqgjeDkDMFbyDVxAwBroqQKnCQA23bgRvLM9eEK8LPctTA2sDrgKE8rtVYvUPJeXiFqZt",
  "key4": "5oS4hkaqMoEyQ9io7hBYZD78vM1hYbcD2W5tmTAPEZJ5YA5peQozSkWgLRtfyg7t6uv5FdMFrpfTVmLf6fEEo3h4",
  "key5": "29adTMtimgatyMLJnXEaoweLX7WJAyhAyYseA4cqNsxDLC7QxjA6GnNznku2LaBhVn6roU27zdUg1sYWiBYr7eYX",
  "key6": "2Wa6bsrtNB9ZX3waCNSFTqsSTFgju2UtunWtrG9tzmtovUEyb1sjxJcE8RCQFhEBQfuXezET7kQMCY8a4WLUxJ9P",
  "key7": "2sk9Vx6ErPnGuZVXBfhCAe9r4RST3MPsBaQ7A8ZxrupYk3RTpTnY3pTCFHoBZAH6PJmXTD2R5Ws9Hc5a8ytiVWKo",
  "key8": "56BYq7aF5p1d6LKerpXRJqQgqTUJGuqwLBLZD9bkC9d18cMVXKz4hiy8aepLdNPE7wKYSoippzjArwuj5hECv5rT",
  "key9": "4yKuuUdV5c8ouEGCr9LehfU72HKaaF2cqXULX9gWTu8rBawd8PqoQRP4et5WC25k9dbsdTsyySvx95996gxwsHmg",
  "key10": "2goaqqEA77zzKemAwqqiSwQpYxbURodZbpuZuqiHNJ2eRduXTtztpcHEYkg3ZBMtBedwyXEsjfbzbkV7AiuBX3u2",
  "key11": "3f7pwn5Y6Bty1VdW7GdM9eqmyMjuogQVXxcoixNCnU9DUA37qejVEsKPer3F89jQoMQUCUz6HVTfzMkT5VgzU1h1",
  "key12": "4nx5R3Euzbt4jv59RoXKSGuCTMQyABHNnb3pQYqNjfNYeQYBQsvgt6AhZ2puWttEHgRoqKz1fuvAAhVQSyHZEwvM",
  "key13": "g5kZN2ZBCjhuCzV5dvcg2LNdYLChkYSCx1H1haPaRmxuW5yEAPT5Tc4i7ocZLBYmixF1p16aDPiPRqRp1xkH842",
  "key14": "5iPgDgo6xhA7fLct6ACkLNkwQDVPgomNefs5orUSzgNWvvenqJcDR6GE27AoKMGtfKbwoj867e31SwhRuD2Tbxmc",
  "key15": "4cQGo2BHZyqP8KEDzLoKbSJpcQQ8idS68Jr3jBeiaCs4o92Peee2TnohFy2zttCbwGuTb39tsYCxQ9CR2qVe5v4U",
  "key16": "43Y6juRNfci5d2yMWsoV1FioDM9Z1qbQXMgt9Gk2fNeD2R7ioGrkXyAyfcXkRrEkzJk9AT31pv93eynNHx3jMvz8",
  "key17": "t5zYcdx1jDMaWYMp2ptQsX6oLzcSd9RZnv1mVPnLkUq9C9YvcfkL7UBhUkfuYZT1u8Sb2dQLxuR7zH3ZbjAU5yG",
  "key18": "5yrAeaDm1TDmkmcGFpfdJrk2gFbdLCXiotohQMJBuuSKyVvd9SagxNKmt9TnBaHEVwycJpGXNtXaHW7qA6nRr67D",
  "key19": "2BixGzPWhQvrQK4c2bkd5wqqGiZRCDegY8YJoDUaKJwPKuSELb6me8PCFw5TGwYsRGKpr1WnFZVom54uYNHj5kWF",
  "key20": "49G63QU4kSjAVwmEdpNx2VvsMfyRD9GPH8AVJizm8P1x2SZx1ZurDwKWUHWRBAEsm5qmPukUJLZjz1qqzfsnLk7x",
  "key21": "4AH1N1KMJgziyBgHp5V7TnD9ietygQFKQQ7tCPcLoPpgCGEA3rQmQZcC99tXfb79wDdqnKMGwq1uJbq7hGk2QgGa",
  "key22": "5UGb7hDxba4PKKmDLrNfU6cnVDuT27tU7jNwhj8DV1J81VdRE5NBBGUvWYwyJLmKX7oQNBX6q3Et65mPr1wQShsy",
  "key23": "4rrRHN4VDNxbdwmiP56mFGsKmtrkRm6bbsh84AFC6a5p4nohXGiuFpZGJdf68MJVZ3hzWBdF8KGRzvL4kWQBQfAA",
  "key24": "2UsJGsrLt9PLmiChcSew5aJ34xs8VjCA6RQYKFV5xdCQ2H3i9rc2ZmqmxbqA4P2hRiEEcQqVswGK3kWzUrdXQ1sz",
  "key25": "4c9NnYJAgPVUn2jTM1btoLp9JPxeqHPsff7fAecthuLwzSoKdXeyQx4rW1zyzs71TsBdxJMTZoUS5fNTfZxLow5S",
  "key26": "5bjJPDUcNLJn6MpxBcZoFywJcfdDBrbMARawLq9kTMEd1qrwPENiWQRmTPkkKbKDKES44C2cx5GynkRWMoqe97Nw",
  "key27": "3YKxqNSuHAgorrffHSS9peBpZkfTeCGt3MuUkq9GtKuai8ncdZcwtb4K9U83gNW4iq4SSnNKPcRDMAMWxJZgfqQP",
  "key28": "62JpFfP18AqKGZfYHRNYiKRnYQEi8JvhksZzqjEHJLrVkTq3yyqYrPs9ZaQGKh44ax6DYHxBoCNQE3ZL6TFnUwMo",
  "key29": "5QYdampW5ia8DL9sHJ9VLztQLfKg2cWE8j5zDVsdrFJfT9EAhmeHYRkVyQf1rKXkTpMcDqhJrawuCs3oyY8HstsU",
  "key30": "2vQjehfEoHXWyxSeTJg4LPKfQgNPm3YVYVLgCmuSRJh6YHoxdGo25s39gYxTz7cWasFqiwTniNNmUPLrcQZr7m7H",
  "key31": "7v7oecCGqV7cBhjhLCCkKZxATwUUZhEck7cpwjY74ByqwKY7oyh18R6X8CBW96UGzXTg8evVgXe8jSYptwbNd1G",
  "key32": "uFK9HbbGMwHCDw54eBy3fv4tdTtEME6eUdP29enCorVKaeovSsrTu3keMYr1LQLkKee28kEC1AfxTkpGt4UTKdg",
  "key33": "5iK2zxgmoWV7chuoFLMhmHkQ1gxxutaV9YagAct3kTgvt3SCwgdnvS8cbkEyXYTJJwfTebHmy2BnHbwJR4eW35nY",
  "key34": "2ujfGsPCAFUs5ptaYcFGXPCzkCLr2yW37pgiFN7SmXpEJRqBZS1GivkvgTbmk3KjRTZxphSk6DitQSyaZdg81E9h"
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
