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
    "3wNNuHRkaMxvF7d3dPoxzJcQGTBBJij6n1SCmhyk44wW2gga3tP5ugszCp49g8vuDbrX6TxHyPVxA4cZffKkqXXo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RSybEo71TLikqoWXXxKhpjkB9T35z25znbLKy6M9oAuJ9yYFaiRH8ZfAoQ2engADuo7MzmQMK9b56HfWbyTxZgN",
  "key1": "enxtEyjLMMCHnnAbc2Q3m4ttgaxshLsYCFqH8DFRxicgefMbA5etzR7W8PwAVXU1uFqaywYBAfmhKkHCsGB9MY3",
  "key2": "46VtNxZPQ84kUpaokBzdwmugEtGuC9wPC9sYSNZ8ezkKgW61YkwG4fqaom7HJCxk8G9NvT8aE4hfXpDzwkeMyKMb",
  "key3": "4uFVsbnZKFE4CWNSazGHnBRZnXxUyQAZWVCmfsnhYUcFzpygH6Pg1zSSqTDdNxkLFBzUaLvQujg88F4usYkqgSgc",
  "key4": "3nJk4jD3m5G9hiEY4dGyFHKSi9nL5sMb9cWjPppp4wXnYdAqcUpcyVmsjMAEmC85XgpwSv7WAAKN6T7mh9bwiv9Y",
  "key5": "5Wpm4VQXBcnygv9jLJw7ycio8PvEjQ2ENihvgYtWQ5o184p8ebW7tfmAWEK2Wrk3Cbrj9B5oXVmaf6p4aPgtqLhr",
  "key6": "2SajaaHaaYgzJBvymq2TcuMCgzS4iTbwBxDgUCkGkFfJdLMe9NvEABAJ4TiPBMuj3Whz2pkL63DcyhNpYnLSRC5M",
  "key7": "dQn2TN1hr6pCwY7DYpMsziTuGV2FZY25S98JxHfQ2JJNmexnZTfLwbQVqCRMz1RMtUyG27eZRZmJVVzuiK8rhma",
  "key8": "1293Eb6HnYaE8fpzrakDDFMUMZaxMb4dfmmUcFxzw6znbvzgF88NoWAJqdqhhqkm96sXRcXVRJwh28DerDiyyCZm",
  "key9": "38EVbeUUdjU1z5LDGcp5Sma6JVom5cqkGN7x3DT1Gc9FPw9vF9DvZujBBQAw6VvKmET4er5TbPLSmx2MjEGe8XZm",
  "key10": "2q6PMCX1Px6KuMS9pCQ5LrnaYr2h7jR9ykSRvxhyfu1Rk2egRoWemmz9FQFUduXk944T6uMqmu8c371LCnxxKHdB",
  "key11": "4JNftyYGkwF39YZFFpLvuHJRZuWPJj5tYoHvxbo18XA2BGD5a2AbojLDBCXH56c5SLM4qh7DK8jxJsWTu8yV7WkK",
  "key12": "5kqxQbBqUhsosvKALPD6JWhs43AVoQThGEFNHKwTnJfcWwWyU4rakwwyNwxsEzWm3TbZTXeDjTyKpQp2PSdLms6k",
  "key13": "2JuD3JCqfVsSWJ7qS8FNdSMcF2LY4axyNTEPpNzwAPX1gsZFj13tvXGjdjnhiRjEhGipapDuWKPEGREU4dm99FVC",
  "key14": "4ZkgMTFGppR1h3puCxTAMYMd4TQiPc1gHB9p3uuFR7ukJcHFxk2Bsb4wYownRu6WZ7mdavyHyio1C8JDm4KoDnku",
  "key15": "5DC5M7sDGNosmNwb8wEroz2faS3XviAXwWANv2aV7BsN4gq4tobxUQ891hUKSnXtGUWNNdu3zmThLxuNYsFMYgKd",
  "key16": "3LMxusRiKpTpv5iftptMhXv2SMtgRbt7mtnuhNtkU77WZQxVK6ECi3ev4AH7Px9oE5zn9caqVsc7wkkx5xoLjKqc",
  "key17": "oKa7XE4rvqMab2Rs4kYcWmWWuHdWYTFfFVjgN1KCBQ5usuATNdJcEf5QKdNs8Fq8K9FW3g8Ma1ZhAznaVT13q2Z",
  "key18": "eRrZLCeWmvHUBG4bDkuz9C8W5eF1j2A2fv3wJULtpNQFAJjciKZTHvA92ffmhdDPK9DSrLhcA22FScSToZSbsrQ",
  "key19": "3s9LEoRDRcfRecWQYHLApz87dkVRjotLVCfe9M8Swr4cK3nT73mESnUV14ZNod6QAxM8gQKuNeo54421vQQzHDze",
  "key20": "4XpNDba1YUrTzXmZiD2Nx5pB2tP2RZr1SPeYBwCzzTp2BTNRH4peC5f6fPf78k3Ah3wav6tRjMVcZCt9AFAVpDW5",
  "key21": "3o9cGa9J9vdAwchM3JyG6yA5UuHLPR5ZGNZLs9uXEw21WGhMN44z2J3hm8g64zmUej8Rzr8tZwACYHacNNPRsLzH",
  "key22": "4aoPjksd3YKJJMnLAdcWA91zpxbrSQiUzaTRQMTGVN8vaco2KDoNBq5MGCRcazABi2sSd5tKEVXAANdExmQzbScg",
  "key23": "4siUxFSaLWYLxS679by3s2aSheb8RUc54wCV5VcsMAPPLArphXX8aKobF2ByXZSrzcQoisXhCCh83wRMZB16yqJT",
  "key24": "3wJGfhTNDfLW9w4uqA7DfM793Amknh7DK9tZtkWXUPws2j59EEdijXMX6iLtR8SjgdQNs1Wi6ZgoqZJ6DtLqRQSe",
  "key25": "2G6q5XfJnYQfQh3dj2bxWvhkqKiRN2DxKuqcH3uLTw4pVEQ4kToKheSyz8wnUbguLgU7szhz3H7J3MUnv6cYbxKj",
  "key26": "NyeirNaz4xM1sDe2XydjhWBhZxuvMwyaagbqfBbumui1KgR9yzLcUaAq7HMPuPDNzY3UNL7mkWDcuPzsWkZ1K5J",
  "key27": "A17SLd7ELhBmjLvh4k8A5CFAZquAcQC66FscBSyL21YZr5Ty8fvrgy7T6PQg7VRFFJwGhX6LXa6LMSzimaYXD83",
  "key28": "CP7NM3XkZ8xPnwkYD51mv82AmZ6LLKyJE7UHgcHVJSmLPgS41Z9aEaXzjeMDt2iPRJHJobwcAxzK1mP9Z6FgKAt",
  "key29": "zCF6yjdJyqc6CSEFrfmB3JQcByAfThUGYW7dQPSCxWgqHZiPnGEw13JpAPEek9iS77WUbhJ96M6HoczBQ1nPiYj",
  "key30": "5NZfBYvSNKL4cAZv31yzE3UmcPVdhPJqV3XB7G5KJoecGZMYp3JvSeGuVMcqnxc4aWaSGPZSVKFaVyLJrTtcQ9fx",
  "key31": "krPcsqxUx3HATPvPfR6MVXq6ZR5Ar81DNBK2fM4e2bvXoRARVLYPBJauBXme6VKk1LdimZRkYZZ4qmQwsYduqKr",
  "key32": "3v4TLs9mJaHN1wxm6SFcCsKSK2v5MGKpvnZiFMh4jguZSvVJABjw8KhWEWf48EiZE9yKiR1LkMQxA86WR555y4zi",
  "key33": "3E22PRQHbHimfeviZxZBEh6Cx5pvDR7knhxAcvx6Ba8711JoPYbXibinGzXHo6twKZciG9p6UzhcbkeGbhHtz2fm",
  "key34": "2B9t265LgA6TvpQhjuWzko3YLG92DkMC5BJb8w3gazaNDpavyjfU9Zq4jpUs6t5xeFMJC38M287pkGHarcRnerpg",
  "key35": "2z3Lbw6L43tLq73QxBowV76BR5t7uCBfrDrJdsjH9gRvec5xhT9ahTjDNdQ6jVZRXhVjPrk4fJjbBLw21oXc3ohA",
  "key36": "4gcMtG8LCvTvWbQhmWeXyWkupRpGHLa9W7whL8H2PzBLwn48PRfd48itnHRq8s2BpzdxhMwbwDN9EV8jrtUTxc7T",
  "key37": "J8ZVNGjuddsby3o6Rw1twWvDZyBn61Xvg6Ci7B9gqZFUXYsrh3sTgmgGrh1zGkGjEZe8wGeT928mvuru9Uu5PC1",
  "key38": "5UWeRDpcQ3VF9wWXcgXNbccjvRY5xyPUXKs9RwWJL6VKn6MVoWwxM35wwS9RssutRnpiTB8mt97DbDpN29gjPLM",
  "key39": "55XCXArfZsMPxHYw3XqgBWzfq7vRF3qBpVDDMgXgBoFQomFssty4RRm5i8ETjNZtYEmJDimrW4LNrepNCaZih7PP",
  "key40": "3ZewURn8z3A5z9EcTc1L8nvEfxbG2FVcw28FCQ5TuMk8fdwfTUpXDfhM4kBQnEJubvmEnXYZG4igQ4e2DVJiRdg",
  "key41": "31rWRAerawrPAVn3uNB3L5pSdTazYL5v9g63QLT2A2kYBk5u38odRnquWrh3zh6FcJPHnkHXdwgBgHev9oYAVjAc",
  "key42": "2iNWNNDgFV6B2WWG7FCJ2cJNKAkJ9BfgRmpNuj5axBV51rWZdrkMsofJVAH5Zi5bsFmXKDbiA1f8AfbVYeM1XH7e",
  "key43": "4pusAS6DNTtzYks5kFp1AtGhBnjKYp1T2SMDABiE6eUS95pCcQ121bpFjUexSJFPszhxG25cw5W9SG4zo8LnApSD",
  "key44": "5JXGwwdyTNP2G7ca348X3UcZ4CvuTmsyN1wLcDaV8ddE3iJjvHQEDwRwJaDkataV8UXvYre5g3G6gcrwyeXUKVRD",
  "key45": "4XcXmuxWRoeKvQaLfnxCbhTAB9xAMqfCAS8yQfN8y53DWhq86QAtXgjyLTYsrTr7TRCRmJxmEs224K3MTuT5UkMm",
  "key46": "3Jv366Fv6MGcuBUxq3ZP9LTJNW3BPWKDxVnGE3N3bBir9r7K1xTMq1gCLwC8UeETd5Yam59vUE9HLwFMYtAmpche",
  "key47": "5iM3sUZWHfqhUfMGkmLwyEuLz7kCY66P8Jszirv52qmU2GZP44jU921MsnLwmgvdgFfv2LYKqhxJFeUjjELcx3dw",
  "key48": "4GZwJqYQBGaS587LxTAiYFv59TcWaZDKz8kSPEMsXtBqpG32QrHFAL97dXU2vDw2M6EFSM9yuqtbDPLp89DgqJsZ"
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
