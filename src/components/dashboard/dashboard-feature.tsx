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
    "Grhn4mfpemKyVoTF1uFeDHGS2U1C9RuUvL7fsJgWf9oVRpNV12mSVYE7D66TDvDBdhyL3ec3HYnAqjmZtdmh283"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27P36qhCyULAKrFtRUcmKsJtWH48pKzAsKsZGawHoFTPe2geAcfk4E7LmibeYy7HkwVRxfy84wDK9nSzRWSjW1VC",
  "key1": "4e3MPgtKkd8LRkKudqUHSchYFj4oYddz2pGXjbfPAZnpPvAGU8JUaHeyGCP6wfKbn1emKDGkimwdDyMy9Q6Ca8BH",
  "key2": "K6QbJ3XmSmPWP2yBUB2kMaqT3TQfWGgsJbewryQ5vzPgLkuSX5Novb334fpDUZVqtPW9GJ2WA9Di8aJtoirvb23",
  "key3": "4XDfJkf6b4urHwVMzfNyWL6Q6k9kFUXCgswvjc6wkQfNQmJvKYvaaK839UasJwepuggZjAChPRepQg2NdVXPGWhU",
  "key4": "VtaKUGs5d8L7uaneMsP2xc2eb2kuLuRUiBJF56We5Hx3r1KrzukkFXuFuLiRLmCfuSNP2qhLt4A853ksrWLiKJW",
  "key5": "2Qpw1J6CiWjE4yQf52JLu75prz9xMHyTHZ46J8GLeLnyiiS8sncu15F4mEijTQeAbRRDkmooqr8ib5Ew7Ftqu35C",
  "key6": "2mKSgGaNCGjZMGVZVQfJYSwnQwYhTY1RgACkrqZUjWWjc8v6rbZWS2u1i5rhxDoQsrqu4MQXEEgXBhoFptJox4ZZ",
  "key7": "XjNY26RgcSwkmj5dmLCrchWHhUSR8MduVDQKCrTRPqzjZsuV6qL1Tg2TEoAqsX78ehuoJJ1LU3G9KixFN4TzCz8",
  "key8": "49UFEw3EDneLUWgavy7JFDBhAvQuwdBicQ8TVgf7q7MkGxbbGuvcSn5Bs2NRDyYW4rpxhQBp9rm8r4kzdtLXcmUP",
  "key9": "4h1TBEt4BoJ4BfWgvkgSuZY8HDNYhxfv7PgPtWLEH8zy9oPfedJABXRsgRES1wAuKMqNBcBgSYRpSQvVLtCP5CFs",
  "key10": "5S8LaREKr1Q4oos1L8ZLqrgUfZtNhWMHLLd6tFz3uqDqoBhSWEDBWWSyCbddqBu5fw9tpYuK8TjiH5Lez7GVZTFc",
  "key11": "3NjszRjtY8qwjwhM9dm87TN4grj7bpi2GmhLXvfYUL3RW7iKfgBvJK49qDT9yUFqUorXqeKoTbV8KTmmawzZkNYo",
  "key12": "3QVAiq1oN9HyPZXrQ8GLf4c132ePfWwAYnC9rg7eM5Qrw3x3YW7SMBSbYQG2tRzjKRJh4L2dV93eAiAiA5m8RuTy",
  "key13": "5k7qEFKtaGjaJF61bwwbzHK2JtwxETxJDnxdh3Kj4yHVG3jAFSwcy7wVVZfWgK2toKVdQK2SYat6kkQgUoc21Qod",
  "key14": "4RMHtcmi5hJuNNT7Es2qsDvPG5XVPyj77G7esuieQVJQkz9inrfPfswzsUCNTFw5iqzbKxY4xUyWaBj9egcVT2TL",
  "key15": "5ZcjHr1Q7cEZX2oD3Y4KDRe1FyNWdcnUidf2NY4Ro2givZiVFRKUEYxDoJcHTH7NHSDP84nosxQPCvx6RnQbpHQk",
  "key16": "3CVePKWE3fEuQJ5tuMxDriz1d9TatzCsDMpuLzbrJyHJxefZacLq77GrsKAM6CF17H6EHYD3JtQYsKWeptXfzntg",
  "key17": "4rPbdTqAqH1bpemaveXQJYrcBrF2oyJLFRqurwxsRXryC24LUuF2b4BsYxMpsVowuGZqab5Hnv3f78Y3MYDuzzwz",
  "key18": "4o8bKUo7zE1CtRwu1hhhTQq562RWdxQ7iw6mMEGukH8wVtJBBpgLdmfE8csi6E9JKfWd7gRbf2VbDdjqWFapKiGq",
  "key19": "AkvMkD5ieXPSBbrVBqgTkgbNjanmdcuoFkt4RqP9XAfhqr9u5e7pLduR3uLnBhMWE7npfzk92qF9RD6pbuoSnhK",
  "key20": "LfiyesDLzvJcvGCkrr6KHNLsKpWHC5tTRJE9bth6hbLiMMzRQJCYP6WgDgSospCDtUzzCHbbCDTmCUUvvnUownN",
  "key21": "HcXKc18LeegoUsfEbKBFBg2SrGJJYKimGT8TaTnNexnPS5QB6iw81iPpoJGFcr31npFZPucuAHhktQqwA4TkzcC",
  "key22": "2mt17f5pBKrY1uhjx2uVx4hDC8vTyYxQ79Fuz3uDXj8KmSySvWMMkzVodbN9F8G1BQicjKJnDZaffDYBkJM2N9p5",
  "key23": "wxeYiohzUefCG45i8eSjntbMTiDuwz8y71WqhHWXFXfnLvzESFWasjxcHsT8o2oN87HUGDU6Tu8XwmN8Gr6uvbA",
  "key24": "3L8UEsAF1JEoxQ3EUoomjuu21TqMVB73j8NwBqPFGPkSdwQCxHhvfvUiw38835g9gf8EvEQhWzRcSnShKqBbadS9",
  "key25": "2sGMHUrgM8nTQJpa7PS3Nv4EDYtJ3juRiSiwNKVZEVHDgWHv8BHjmU7TFReTY4yvXk7S26EYU5Y1nK6m5d6K91C9",
  "key26": "59AMEqFsYLbvCTcCDoXBadYkHw8Skv6gG7VEn9JKVPoAieP3fpyifhC1rtV7DDYkvDTd51cNsttPyqF1u4x71ndz",
  "key27": "47XSC5hyHUcgSfBheHPdfv2VZv6SpGzxfLWDX7A6BVhYw5omABSMVByunQa27kKhsgAznBbT94k8m75kpKDyFhTW",
  "key28": "VnKMAdf6LHtFyM1gkxmYqZjy18AKJKdjmQsq3MWB7dnkNEkE4fn8A2Mdd79cLXMHvNJdpgtdFkgeNP2cFjJFjRN",
  "key29": "5PwE7LeCGzGiwR2iQFWmVw1Ydo1Bjjr72AjLmTTbUbMaRp32JfgAWP6mcpXMEKNAg5tpcm9LqRvZEhLjXYXEVwZm",
  "key30": "dxLZHsx86hPPc2aFqR7CbAgLHBSyKA9MoU1wf4YFr3iiFcHXDf7NdH6BU4Gzj47pXKFvKmBPHCuqg8PdozFTK7m",
  "key31": "4sMrT73nGgMABHUEFkLjDLvxWjrgewHmUGr3oKNcs5SkFogeLqappvrKCxVHGauF4Ewzu584sw2T4mi3zcHhqvar",
  "key32": "3vAVfNxwY8wj7tsjfqkkDtYE9xXJxWDs1C6Y9JWK1veqvyKv4t1J9L7hDYSEm31XnrrePM5C6FosK2LQiS44ymp5",
  "key33": "3QCpojrzrBMvEgw7fmnU7U9MWPVHxW7wvE3VjgqwGmUvpeaLmJizzf5nqgvgzHNY6LWon8nYePRv26akJ2F7mw7F",
  "key34": "5EGckazbvPEnJ1z8Z4nvf2xBxrm9YKB24A8a9GNdsepzYSVN1erx6wPyFYUN1eTSaYTU9xjcTjesiRU7j195iRHe",
  "key35": "3wCWUSquJAYiU5pwB1SKQbjskqtpz3gKmUJmrt3LF7CdCF5WTWGDB2cyY8bxEzfiMLKBvYscx9kPPhTPQVywUQtg",
  "key36": "5SadhFxg9vEzkVCWukQHz2z2yc37QLAjF1Tiu9KZUShaEjhtnxoTPpTu99NxTFm4VsgYiFdjPajA7fRN57PJkXMp",
  "key37": "2bFyQVsSjhigBJYrUgPwJTj23Zz2YpicYn34C9tHtY5Q9xJBkoC3LqyrrfmhGgZMYPDBTN81BvkKYb69PGcR6WL8"
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
