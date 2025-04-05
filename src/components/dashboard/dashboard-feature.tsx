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
    "3hzBF3JV4B5T2w7TbTFTAeubU58sJT17vtgN1zYyGpFsi46zXHxYsmL8SKqPk72eYpspcjAJQt4CQXiMsUJokgnh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Becg4qJNH147PrVhqUkfZM72LJiRRjrBMqZ56PnRzf88mLWAcrQxnZB4NPj2U5Q1TCos4NL5dAAuwiyCtqhSNNc",
  "key1": "4UAa41jEh2334CSLEft1tqYXykDdByVRkVfomUn9yx4Lpg97YtsRmSvPMPoDWTnBktVJcN493VY4u8LGw5PjifWa",
  "key2": "3J5H9LG57qPuJ4PYtmJu9qHemxUwe8vHxXMbWK8AAhtSE4mfriJV4R2nfSBShqvkvQ1AVcQ1hPxFaNeDtCHoW1af",
  "key3": "3bEcLv3tRT5SvJrWaHMjyVqhUtEEk4vwYHHEspBRhsrJFv6vBDgqhbtgoefiwVEqdrMKjg7YDuP9zJ1ixaPZmQ7v",
  "key4": "2Vo2zckGfXHFgHFrRVFWgFJKG6vDYLAUggCLxaB2oGAN3q7q9Z8WDW8VdcunYknXjvteT7ntvhXJWtyP4U3Fu41i",
  "key5": "41hmTiBmMQo5rQ1Citoey47kCZ1cFe1Kb1La6FiiiJXwYHh8K6QsQEHDQbLZGMK6pSX7g4edEbYHhfKeZsJ7eBa8",
  "key6": "3nzPhjqGr2Lg6HtnaGdUsnSxjfwGzHFsVvJNSehQGvxesjLFScHg1MPHvjWNtwnTC3vk15rZLQqE6xEKAwSsTpXY",
  "key7": "kk9qN6FYKxT6CrJ19nXsbFcjsZEmuFALKrB7GKC3tp7rtnZsjp4pKhri53HKXHGuUzwAm75BGVAQ8T7gMyYzH5c",
  "key8": "345CxoK5APYaEzgWbn9XXEX1zn4T9wrhwtibYDDZdQAVwUbohRUdFP6kgHB7TKncUDi1nVjSSV75Muri6epueL3U",
  "key9": "eckxKFKVucokjBHJgNNcZjsckjXeGLDo8RDDY9DBXzYx5j8viop65cVGMqGLgPaDxmPjuAMHvz3rYCYVeYwaaKK",
  "key10": "4UxFNftreir7FSDCpnpTtVg4vdbz4jhT3rGJGiddacbVhZwtAULG6bzsLq41uZqb3PBjGgXBQmknD1vcWjTDrq1h",
  "key11": "513PSH6yfmj3z3zuSmdMTWoT5Qzv5C8CoXtXBFGVw2svLQqB4wTUrJDCcmrUKKzhcmqt41VZEMxdAuVVEMQ42JTE",
  "key12": "5WiY6BPk8HcEx19iNuJWqA71srwLjg8Ra6gyWm6kxRpUntswq2zLbeAz32EL8tNC8dKEX4TGvX4ZGHn6hdqrMe5s",
  "key13": "EbWZfNzV4PVti9MMArTr2wefJVKm4BJvhdEfcvHBHWHcsPooqAAfgW8dxo3PrZkJ8DBr4ove5T93uNQXs7Zvgqt",
  "key14": "29E8TbC2qUpJYe4P2hNSYwNUGj9mrHFfoXxhsHTY5XyxZYBb7BGG6dw3BcF8iUXipd8ciXV4ZwhcKHSDcxWrC2xU",
  "key15": "5CGkAPF8QeDNdBTEHFnoMd4Ebz3U4RRJjhAcNyhoBAR2j1DoNRr8w1qKh4b1C6KVqoride2CBAxLgomKvKas31DX",
  "key16": "47tQLuvYqmnCpEzzsvLuQ6FCHCrsQD2Eh2iRgdErW37Lc9NYjRm3PgyccG8eSXY2291RrssNtC86cVG5KYtGzmvU",
  "key17": "3Q28hihYLYU2SJFkGFj74iHKXCHAzZcebZxbUqSURiiUsJkHaGgwRCeJ46jhJtkny21gdBb7ZLToNrqboYpugn37",
  "key18": "3jmkwUcywuaei7VhezMsmQT38EGZKD8LFBqxtgF95AVzjcZnhAyXLmt6w4pZZyUsmYPnbq9aVTC1W6Vu8jgrhi6D",
  "key19": "31Foj17nZA1BzWbzRUBDBhA8f7kRJQsRMjB4iA2LsoFXXP6MnMgQGihAuQT8URdqeHb3hoqfcRW525joBuj3bAzK",
  "key20": "2YGXaaeQUdQV36T1Qj4NdpWyGDsN6oNAMbWgRLzCrzMCUquTmD2pxn1zqneoTZkjc2GNjnNQ2cV1HGyzveb9Scwm",
  "key21": "4SoeP1UztrazKrBZehdKLbeMRDz7i1GSxSdEy1Ny38YXUBT8wyydcJsWnGvB32n6UMP2JpqArR2bdg6biPKUpdzZ",
  "key22": "5BY44qSFieGybgwUAiYWfg9ee5kF46ytaSKiR7Zntptre82EjyyhBzX5qAQhWdm3xN1Fu4bFSVTxzZDCaQCgAmVd",
  "key23": "2NoHcYB2KdHrQwrFqsFPsuDg9Gpg4Paa6XrNZYrcj6DMR7bVvqqTbnKrYsvPbqtiuwWDb9vAnYTo4g4WpW9fJaMb",
  "key24": "5eV5Gjxogc4Qn3z9RURsVy9h4YnssbRDinGF7TN9jZvoACnCX3GqnQkqxJr4sYinZFKWAWTQQgb4qutMkrC14vZm",
  "key25": "4kJYcZCV9jGoaL832ihepQ7m4dfRYfeKjPyZ6xfXbt7eTNEbbPmE7bHhUbJh99XRbmcSTJ57h5iihFLesdf7NoAC",
  "key26": "3NtdQs9twadAbucXFW4rJ7AYSnVMCZez4zUvoRVkYxQLqQjLz1A2NcbNbiHrELYxJNe4W8o6Px59FtB8QzwG6VRb",
  "key27": "3UHaCdgMjUB4bkcZc5jKAVb6WJQbqXDHYssjxm4xSeJU9VWqHi3o4K73NdLJeZ62emyjnEw9K9GUMW9ZbqVxqyUZ",
  "key28": "4FwcLofjdTJzTiUTiFryxuKbxjEpidPbJtTJgPBvgR5xCbfxsUttqz2BbYbPKPkptTrr3jb6ed8uBwSRKGTXqfPs",
  "key29": "5CVrToNnsGvbSTVTEE7tnj6vUqk18NyWiqSWAAWDiHQUnsBdkpqPzNPfsUePkPXjHmgyTPjbjHGsQHAbuVtxafh6",
  "key30": "Czksv1YpkgSsNCYnJ23KZCkGmk6uVEbWnoPvZwHNwZu9YTgdBhDtERrQPYbSzy7aXyXTFZEdN3rVqLbh4JKSR3D",
  "key31": "2aFhV4E6NNc3TCC16u3CwukZPyJGA2rWs5iSDo59xdXiZwQVJ9r9zBBbTsYFh7fcepP9pfT3fjExSSXVrrJA94b",
  "key32": "3dMACcEWz8jrN93P651qPxQsUs7rSeauSvNepLHbRajuPRgWUtDAHgBC86KA4XdLn1wgSChWia8xNx3aRWMwJbtq",
  "key33": "KwnkbDeeLRZgCYdu9yXvzKWXdRNwaRyXVnfNzvF5ADiK5w6jNjHCTkwLZDnFPw9xhg8ZH1W7UkXy8KRtryojQZ1",
  "key34": "21BkQVBHhUkSV4r8dZPUdqzgHnkcL5k5Q7HPsBGWjgg3qG3vjMU3fzB6LLTCwWpH3RBRZzZXeR5j1fqPRjTNkVHy",
  "key35": "2whHw2y8jRHHkyakzfH1EjwjoKqgDGzVyXe8XjmBpStUdf9aChHcu8QMRo8tkqEcdS6k4ModHoeZ2VQQt1Kpikp3",
  "key36": "3Jpz5icyTDSXyVNx8WrJmttYVCxAtRCJftPETGCbgswWDoscWmB9kN8HXKLhGRG6iWEyfQpDAhT5L7jHtKfHkYjT"
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
