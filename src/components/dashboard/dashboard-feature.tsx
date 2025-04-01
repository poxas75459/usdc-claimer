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
    "4y1hvvaaGrJDhQpFvSqjTjW9hrhYrYR2Qx4M1pNP32Xse4uZXvRihg45f1wQZmgYXFz58foV8pgG3Mke24Zd5zes"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pouTBQMSvp7hdsh9vqjBH3sytx4f3ugb9XkmuJoLzN3Gtk1iwZT6AjMqPJGExsXXUwY3hyBNFY2xRVfkU2Lks4v",
  "key1": "gh9vXCqHyktxt89txp7aJGikRLFPWEVh7WpVDmVdWEZNrz4TusGZxoc8Syr8W6iz7YLJczRB7H98j6coAgVgtGm",
  "key2": "63dD8fP5nz9eNgziMk7WkWfYE5bFTM8kepG1fonntcYFBJd1ebKmHGeAqDGJKyvkboJcWmncwWsxSNviW5SQ66WC",
  "key3": "26z2wXMW3Tz9uhj6Hzpv7xLrNUtd5R5ShVBLYYU3c2Ubt7njN5vmPx99Hu6dr1xfBrzgJ2csxSsHGk9dnANeCpvB",
  "key4": "25wjufnoV8Hg6TKUAwi7oRpKp4pTn8M2TncmT8rkEgtavG8S5bDacKJcvTmtV6vChMKhaGSQKLTsL9KTAcEcVdUx",
  "key5": "2zmykeGNEJSbLooQMJwsjCt7pi3cEy23kr2rvqjKHpbm9msqm8ps74Wn3o2yAJoWp7CpqjBsHQ5EdrsuJjuUqo6C",
  "key6": "5VCxLY89mMYZoSpnzVJtynXBACpAPHw5Be5YvJ3d7kz53dZp7QCk5s22eDYCSLD66de8GSeUPKLQL8m6DzMCuCGr",
  "key7": "3H6XFTjKkkkFv9x3k8kA48sbAwVLmUBdcDjheyuaducsU9HjETyZEMAbgZEDjUSw2jgvqpH3GpBvFPnB9uuRhdRX",
  "key8": "22mZxfFBxc2uqDdFWptzXkrtCw5EtNbogMTwBKinaQyGsw77ov525DxoisGnBNLHKC7DAig73BaFeQefrKw3sj8A",
  "key9": "4jK1pjcBnoiUvxAPPomo2A1WsDM9w2fCSYzwELnCGcBpEZj7Qqs2zuo8NxfLYfgSwbPMMJXznHM1UoFVzEwwFmJn",
  "key10": "5UnBmtL9jqT2UyGQje4H5UWC1RPzstMbbr5TzNdizA4LBY8gmknsH35QhEjQPhkwWqKrp1F32WwSL4tJpmyNNUvq",
  "key11": "mDsNESS6hhEYGZ4NUcniyftQizbEtSd7JjFpmGaEsdt5N8rsGZWeyYa5TYeKLL6c4pfU4Hv2nCna9CJ7PqQug6u",
  "key12": "4J87qSRqVtahhiaM1NoBkHGxJ2q9rXEWQhNCtkfg3ZnN1Q3CbpaKQdJYqpUgx79yaLq1nfutdfEHwgY5HPQDfgwu",
  "key13": "5huPRX7rCz92w8YdFxomzM6aKDCnntbfhADFXo7ydZ7ZEhXSnHvSb5mTDuBPAQSrrnFU3MVjcQnd8mHeoY7Qigc8",
  "key14": "q6dQWmz4i6cHQ3dNs3NeeAM7S3x77sNp57CjEEGCWB7LDMsQV1jKyhyx57mADFEGHXbhheqbPsFG8oPfUJQjYAW",
  "key15": "tA1LVpdZbBbCgvzjDbZE5X9fmAXqbfuoAUdbMggbUhWMBnUTYngCEC3UkkFy7YxN5RsBhcuF9fpkV65V2nSAQu8",
  "key16": "5tX8oxeSD9QT6McyArXxcidqM7bhhbbRW2DMf4NQ2niuFLUCy2jDeHBE6CsSY65D18cTybQPoVwzXbiLHGtHJn5t",
  "key17": "2xe2MVSdVyWmXrWJN8yKixMbxEVKiEbk8C8wZxDqc7bDyi1XkDwUsERgSvuc1s5VTLWaYx21DHV1cFu8DkNY8jQP",
  "key18": "ZajNy2Q6s81CGJDpUmbcqLTzy5P5h8gVi1CQKng6N9aG8C6zd7snwtUw7Wwjzz5v8feB5n4AaQG843k3Dk6mSjQ",
  "key19": "5m8VhL7YuGu14B29dfU8GNqoL6sZQL5KqdxqtPSnc6uvPsz4kf6TPTkg3RynDDbHrmEgbbRXAk23RW8uiR3X1pZW",
  "key20": "2NEeLBEz4s2VGuF8jZAxz6mvsTzPZk94eUjUYmyeCwKS5jDZHpK7J4t5ZLGRnKxTKigCHxtw3SXfLaihE58sCXN1",
  "key21": "2wnh72X5DFAhsnyrhjWYSp3LubmPy4tFVq62iQwPtrCFY8PaiLQsUEPxSSJVQdVKui9WhQZcdQdb5ToM4fDBgCkK",
  "key22": "5AuvToVoi7nngXWHNgBvx2RYSdLVfLunRFhb2p3mWJXn4iY6EsUNBngRnTRaTKtBUys5bjkNkyLNFVjzXNouJPLC",
  "key23": "vYQ2ozqSZeBvkshC9MEX2RcNPFLZeifziC4XC6q7RNyVPCWaajjPYYhhQ8TMdgNVHgPpJ92khzJsse7kzmS4V1W",
  "key24": "2Z65rcNF4jHAVxBg5dxP5gRJ6REDr7EFBwL3XkAkZfuxZ9739UTM5XxfFAx7a7nFf6AotC16HMBRW3hqMSngXK31",
  "key25": "5L1CTCyZjjRmbcbkeNeLuRHLne2E6DGJAKAhNEwLPzD6NoMXTL289UgorVMQsPw8y7MhiFrK1xVdB63o9eTyNzXA",
  "key26": "2diF6X9acMyAHwvVeReCCdAwdT4ic6eL5M3wTfpFMHySRQq6MNEuRwzDxWn7KF5ffb49Q4JL3y2J2izaGsHMHVrV",
  "key27": "2sWZEHts2DPZFMquh8pfdQhZhYy8hBMmt2zPfhZ2gccxDkYobwDFGykdmbh1UZGgVj452AEZ59gWPF7LwE8xfzc9",
  "key28": "2NNGnmMEVsVVZEmiKNG1zJ6rk61rduW9GSmCMCTY8DJV1dRNASFAYjEqj8kM7u8dMwGEL1ihbZy8EE3TmaDU8JD6",
  "key29": "3i3tSvtjit2PTCDEdUesHFvZJC5bJSBd1VofbSvAn9YNEJbbarVYnBjtNAKh6mh7Pnxb1VurbkgL7UP71F3qp1Nh",
  "key30": "tgWpoGWbQKYjiik23AZZRxTabMoibKggFDmFKzLCU2tjxdq3EfRRoY4onVF4bNYnaMm72K3zoHpTYNxWzFKMrTi",
  "key31": "3EfVJK6oYWSZS377AGGo1S9fD6YNxW93aRgfhxDakcrNYJTSMaSVc9yYH3TpRz9wVZ4NbQ48YMNufXHYukFJmtq6",
  "key32": "2KyfgXqoPBD5qAHNjjdeZ6ETRM6KBD7wZXFKkwfMJ6csju7mhjdPppSQSSaJjmximHQN7xmgTAcDRY7g8rQapKDn",
  "key33": "4EVpSo5SNaNuhwiVnihxiVU1fGLTgYAzNetd3uCm67HhzZLnkBCSzJJk7djpfWSLg3BAYoFAgGep8wXdgwndbpvk",
  "key34": "VYgcfxwFsdvncgGxDKbGVkJWaQfPe3DAUcmrnmpXyfHjpqYhDAHLHY5ZXPhceaBfcKFvZcYBXTfc7BWax3Eac5m",
  "key35": "5ubu3k3LckSCBSDqZKpfQbbecpap5osSpww6MHuTd7Ujiuqn5kJibpZR3KYstUk8RuurWJpur8YwFyW6dbrT7cXn",
  "key36": "5CT8whhRMRVVa9nrtTd84jTbzfP9wbygn8TA4VYrktV1JnGfiKpREPb4zCJqoSpSinmVF4E8DCaJup1Y4f2A8vVp",
  "key37": "4KBPgC1yUHGBh4q9omJSvTQD8qo4S7eBCubjcvfquiXyxz1Fwydohmj7haEvbcRbsRFFZZYVWMxMMvZg6wTECXXT",
  "key38": "3cMMpiF3vA9YVnADsmd1dfJ2e4D4Dbh9aYRNQjyZBgJnUWJfQAhQPzgSViWKpDgzYCGzamHp6F2pjpyMATAu46pn",
  "key39": "457K9sZnZoXZRJLqpgmxKdWWYwuU6ZB8Qwe8Rkbu4M8nk81TWu5VhDC9XnnirJF3mJpAvF1xf6aVHEbo5Gi8Z2xH",
  "key40": "3rWYNWf44yCcxKjzGDNf1Y7S7SuvPq53YZ1qaSuJqCztWBwqE4QeYjDQngsv2XcCzgMYK9xrk3DV4Jhe6tn6Mpi3",
  "key41": "8oT5tEHXXmTzeSdC4Y2wQNYn6res5nyApt9xy6KQf5Seo3U8h1pdaCrWj3YzKUyjZdahCkkxiaqyyhHQSy2PPgM",
  "key42": "3SPHttkoXLFg6gijDma42Jfad361FPdKpaaFCbjj9xgo1ihr8ukztpxsn8N4SuzTKeet6eW3fjq6o1akrJd9mrYv"
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
