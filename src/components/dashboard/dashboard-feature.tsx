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
    "5qsm3dMZBTNkYTBpG6DWDVQaXCSQcWNqYN6aVUcSmgbBAJz32vDF8BdXhHHtj8h5KwneAkb4F3Xr5W8GtXhwjXic"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FSRGR2RzdBR5mzD4o6R1WPa5ThekkDCBTJpovcpYjhgAkvoJ9ngg76FG5KBNxjWLc1LQhikTPKXrEfcqeqxC3BP",
  "key1": "2pW8pZpbVqDNQ4JyqKhEVtD2WxGmoY3s7p6BSFvBrMSPoR1bX4BdCyD9B9CdBdqHBoMTVJSkHxRg8oykmKJM6JYd",
  "key2": "2hYWdfxqfUhEGjGQ2SJF2wBVRMFjkGYbAX7Q16xqW6fhLqurKZorffCymdaDUPGJv8CZt67mXRhXXyg4AJmj77HD",
  "key3": "4Rqjn2j4TyQWgEsZ3TkooCXRNyKFsj4NtRNb4zpruHYjg2cGFuYz855hmvRdZnb1y7eNYVThMAt7YEbh4ww4zBR9",
  "key4": "3Cv8CsNrPuRdzFs2yazg8NGGHf7zpZtLQkrEF1ahLVRpDGZeWj8GktrVDf2Zrs1q6TWHzARzZTCPL2Z3dcoBLFma",
  "key5": "5d7RRmsEyCAjNW6vXTUb2w9BN5zFrYY4qpd8JAnWy7f9ZPTrjMqqvGztURJDbi8FqvWezpwv4cZv2jht6PdCQaqH",
  "key6": "65zmwgQC59dBgYoZbStBFKi9hhFQbNxxeApQT4C5tP9LfmPxV26XFW2tHHL7bKudzuuHW8j8cnR1pZgQWrEQuind",
  "key7": "aqUZCJZYcVpwRhWPyaGw91dvhxjQ8wDxPhSUMpmX9VK6A4byNfEQ6FBd1kzSPP8SC693xuMpxC8p2bR1JGqiAth",
  "key8": "42pQ9HYaYnKYiYc72YDYm1HAMj64qh888z8JgH6NirsLhzCqd1w7jKPEt963tnyCaWPSHeRDUD8A1yW96E6tqbiZ",
  "key9": "4jqScBimeCbUi2g8bXrvuTvPnU8wzhkupjkFxwBW7fd8wS2EgjQxf11rMiwU1R6PScjSSdoqokf78JLzYsR9qdLU",
  "key10": "49VkCAa1t7xLgBrWiyZxie3SA6e9zHfywbyiR61ieeDPCymqptyoVaCRoPNgffZqjTpkUDw7Dn9bqwp2CKwsav1p",
  "key11": "4aAM5aZDZ1CLmZZttnBqBaX8a3fZZjTDJeb85LkSDuRwR488toWmDTJ9eMFo7XHqfniuzWd15PudeSxzYpFWGeyn",
  "key12": "4kqTptMk2wocq1NgWhvLXmyb1uY9xV9QfLGmFrveWRP9xtiKhtT7WREs9ew5VZ2jMXsKipSSb1EPx6T1VwERW446",
  "key13": "4dKfVKiAKph1gqwLJTpJ823A27qTyGgZgB2UsQ5yBXVnSskgadkiyh2wZ5va1iomgfvboVsk4ShQvBwpNHcQg7Nx",
  "key14": "4TKACf6eM34ssHeBjCUP2DbMWKGrqvokm9JbL9cyUZzG7g5dazU19uVGZd9fD1ewbXCDQCMWpmNV5NNoDoxeQrXu",
  "key15": "vbCxZExK1Xx1we6yjajxAGFAo3g3FkY1WoysGoyejg1ihHGB92fVUcHACpNQxGim1WNmHD5ZNxy1PmjP1qSkrNM",
  "key16": "CkKhB7QdNZtL9Mf5GwShY9FFeEsKyGnZAdZdbHxFDfoyzXHEecdSnPKzVNkXeQQMYy2Hq6RjhgiouBA11wQ92NA",
  "key17": "2ykMeQaeXA7GFpmPpoyUUb1fD5iRrdfLmXPfcBFaByi15sC3DKa7vixbLWAiJBHp5ERcCQdMTkWVGK7o1fvsqCA7",
  "key18": "21MNLgSZjn2SvuJSRFWLnJpWXPw6isCvphNhyi6y6gUmeZsd7QMBadmG9dzMxvMdb6MZLRudVeoND9yDWzsEtviP",
  "key19": "23Pmw1gVTSoKFJH3NfcJ1fvp75nwjBAdPB6mnpTZViPgEZwiFRWnkouBnxXCcqCw7WzDid9vK9qKKed8CzcjkR2d",
  "key20": "45LXTvi8QJzE3tGYw2nySeVR6Gvr8ZgGwnqwfnjQgkmnZYHx2peNaBfvX13n6LEUuoGvJvR4zYyPGVL6PNKKtGNC",
  "key21": "xfXedg9DhxZ6pjkVeszUbig8pUNnnYyDeMQWMBjayHQCHiy9B9MGyZyVLQBMx29E7nHJgh93nw9xq5ikhEkhBxn",
  "key22": "2bHxP9wsPSBpzaRxmaQQ3Uue22XZZmVbP5NCYeHQZ8j2HaL3bYf789L34qNAEAK28nJzxrti83WUvEnn5wh3KxSm",
  "key23": "2sRVjnYApD9cBVZZCgtzEjCYoqNfTK2uJfFpW8ugNxdwJawMdYwd3Vd66kg4VdseaW5Btp1GPg1BuQSBromgqGys",
  "key24": "3rkuotxBJEX3QQxpBkUP81x8j6H4BWMPomyviquJgX4v7dNns9SzxuzSd4fGHCtLmG6P6Jm9QaTtFtcoqRCb1XB",
  "key25": "NSp1Jh1wmiakKCfn9dU2eaZ6zQcMHkf4hawLMv7uSywJ35GwHE8bXEVfzep8T3AEAZTHh5MtzraR34jH61Br3DQ",
  "key26": "2jQgiKiBCG2US8uNuS28qnh1v96ZWkzvsGz4xsroJYtWP2ezXsqFRsJZqffHFXZETGg5hKre7xXprgMP7SQ1rZav",
  "key27": "5DPU2oG5edeZktZA4HDRpVad7JtirFo2xBR4ABwam2nm6BHfy31E7kHD5Erdui1PQCcVp5K4aYkWQZuHCTBRVpMf",
  "key28": "4HsZf65LqUitNR2U7SSMY4eVUNGZpg12CNscYHWxL42uzp7tj9am3gB99eqBXrzz68ETBigW3hJ2bhtBH6rTpCWm",
  "key29": "4U3JhKxfav8QttrYXGq8fuKCmP7YuxEon8LMvCxXWnfWswrgVV2wSaHx81XNdgReZZQ6XWLK9bnPp3EMUZjkHp6W",
  "key30": "5GTdtTH4ZEFk8Z8Qeb5p56cmesuqgQpkerf344BsLfF2r1wnGUTWpNUe5cG494AZepSCWPHMYHs3nSZVxUBpCSKo",
  "key31": "3qUxZ62GH2WbKB5F6NP43x2zpwArtkdLBrq4uwL6QZEG5ewhjTp4UCzW81dKTZZWfomRJiKDytbJThDtEZux5DYh",
  "key32": "ZgUL6tD9CDuZLEgWccM7evRX4csSiCLGYC5tDu6ob7BDZFwpMXSb4LbMSCP543RLee3EmdcUqavR6JCzeGgu3zN",
  "key33": "2iiAwKnTXZWGd8vJQCGhjupBMZxYPLvndY4RU46PD3XPFppa1gEKC99NkGTzrLsPXdfRmJe87pL6jW249ToJN99q",
  "key34": "2pg6nKYZpBpcYdrtqKr9bqTgLTGdGeeJDFym25MvbAz6jQ9SLXhBZyvn8DUt7TQPUeL7S8xXgSn4oJkAHd3KYnx6",
  "key35": "5M81PwAvT7ih15ML3jfya3Zbv1bE64Co8z3Y9fruFx7hQWbpAdbJbjoBVqWYKQm6TUwdtmAfqd2r8SEx8MME3rGJ",
  "key36": "4wT4X5wg9yJKgGedgSDmSexpym3drJQwjqnaXigFBbVGNWz2oSyxT2oUv2ci5eQW1wQZ8fq9rs7K15jSg9P9mYRi",
  "key37": "3j5DdFvAMmHYwV4JoGANJs3PfazeHAyd8hiZsRGzg25d1LWTer7cAU67pRjfE1AbDWyrsG3aUZuax3cMKgbUCb8o",
  "key38": "3s19TBN1HJEUqbBypUTpfPLo1AD4bDPfoCnwiiUj7f8fDfmDB83eFc1JmbtK3vbWkdtoqBCPFo6p7q2afRo7TRB3",
  "key39": "sLTWHbsk3b4doo9nTrE2iaudayiS1zR6iBESxf4PejmpZsdr69GXk4K8kqsJyib2Fk61QibyDG1KLPt5PGxMMED"
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
