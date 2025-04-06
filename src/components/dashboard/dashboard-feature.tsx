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
    "xsPxhJdmwcPent5ugJcefZdXYDbDEjihqYNe9nqQ2iSqzjbhGLZLAhNj8WjV2wGMuEtSY2X5GCQomJrDNZ5iqKq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EPbZetkzwzqrg4vogoBgnwFPwJuBdKuEC71QqHufp8eRfDWcXNE8wSaPBtJaasTAnWTsWCZZRfSoJ6pywKDQh8U",
  "key1": "2jr4LUyG9PTpw3vybYZuHS7vP1eVePPSrwskKzneYpN5VY2AuTzFdhw8oSGnRzaQbsFxCPfAgdpLdsFPkqwWxQX",
  "key2": "zRt8Qgopo4D6qD9XF5xJ5Gvc1VM61d5SsXLtuQXCpbFFBzc7j6XopexkDqu5RNhsppqTb9QJD6zVFqLTaeaYGdL",
  "key3": "4F2iuFdPXskwPaoUizLRLLzBHy8YmbPmDM5Cfa2UNA6mR4Bs74RunZ4LD2SYKfaw3bp9mDozpgdtKFTfAaDfu66d",
  "key4": "34ijvms4VeduZvGM9WD29u8tYU7iK1gV13uaX97wjgMBeSfqMa587d8Y2qS2s5vzbsckjsXqc6HZqmWZvSw4nf9i",
  "key5": "575vyo7eaJoAk4z3QEsMkV4TQ25sNH6pSjUvnnqJVM5sDHGZwsKpEZ4vzvLTdyArkFdN8EJcYbcwMp7Nf54spkrt",
  "key6": "4fCBsvtZJPxdm6CDB3uQuijcCKAv3qDfAnWCwoXRqQje3cyFEywtAWmj8cYXbWvALubFSRGiwTAYCFkoA7nNGa48",
  "key7": "53r4GLXftfFGhcqy362oMgFRfSkYkfbLPoAN7k22jW7BTtHCZMLWuqF1ECFocBTvmhyz4WqNEQxbNTkoEtMcRmgy",
  "key8": "4rNDAbQ2ueBR8uJbsGz7HPbfUApiEeQ1xHhJqYCjRsdHXBdBpmHCysAaDHhdax6cakB8ndRgGzM4G6dv5ZR4jAyS",
  "key9": "3UKHjQ7ew7xS4X1Dp9gLN7MUHUCGa6jvrWnTcWogL8Nbqz4Rg3cMxN5Zd16UbDdLk4kEdebm7mQS7M4hmH4GPBHC",
  "key10": "5jSE2WjVbVC82mhjRiLba3oGYaN3RszgFavQCVkbyT34DsLFqTWcXQEq9gT4ufR9R6CDrZN3UnbGe9x1v4tAJBzv",
  "key11": "4om7DBNzyqQzCn65bv6u6QYraJjnFmiqzQcG4BpjTyAdvsjGVmpdofFmgKjVxLJQjq8D2UBHe3C78zwqspwvaHix",
  "key12": "4QpFgHjKzdr8ud9D8bKupRtH9tjjtGLKQXmG8sw3HYbqrJnjwBUK1J4DaQtNWrc5yXFHr8qGK84UqRRUfgYSo1Eh",
  "key13": "578RSVj8jdYA4z6f3LFb6xbDzEEusaNbmujrwM6bjJy3ga3NKRZYmzq97AqB4i5QCbuqeh4SMTihsTjjtockLTAZ",
  "key14": "5zkqK7TmPbojkDSPYoATquUmpmUju6Gm71pXxw2nuh6P2Y2EArKayymbvvRZztjEGKMnwCKXvhF32irNUmxB5RbL",
  "key15": "5rDzZhGkkDhcFZMS6fbRgqJ8jJN9YTJsoQshbyZVpoc7YqiKv5xzkkLoS1KB74zgvBv9S2grp6TokRuEQy2ZEsR7",
  "key16": "25Kx4pWmXUUy7cXxFd8ABro4V49rnYX3SoEAkfpWNbty97D5wth2c6FosYrcjB6msj7yjPsPQ5Y8wXiiTQXuC4NZ",
  "key17": "2JsdUcg9by4ToVZf6PReWrNS359jEWknZVhALY2DdNPapHLuYcfGucGFveLGdr5kLLRt3PHhjLQX69AqnDQsrJ62",
  "key18": "3893qjCRu4W6GrxivCy5QpVUM3t1U8pyDQynqmVvumCJnEhRvwWGK1Sfkr685DAhVH9v2Dz54DJaA69wbkJq1Nqj",
  "key19": "3eeh9cz4zF5AB8Jfh4fXktWvfM4FC3zdxr2E5VbpyMEPLT4yHkLsyRw8Kk8Ka2wbvyFEAFNV5K57GHQpejiTYp6S",
  "key20": "ZNKeCb4U9P3fQZnpoESxNGiw71Au7yZSSb4kNdCRB7oZgFZdHr3ZLnp6MSkkWVqs9kJ9uZ1wNH22SVvrTycfKFM",
  "key21": "246Z4jbt8sV1mg5KjhwM24eVAbMKwAXwcLnKiBbzYpoLJnJSDPtDmKMNC9aFRJrPLNKkvy42sKmtxozKHd7nriXQ",
  "key22": "2fXLBuYoFghzRbWKuRy2BTu6Bkd79hUbQzmX2sTYBMTju8b3ivFgSee7QnT72UU9C1sAGYp4VFySUdXmwhvVswKG",
  "key23": "3DF1FGSsw1BKy1kiHY7YdpW2K74yai17vrYX56ymKCcWAiwBu4Dj8BseVHi8qKSwDG5NmCFcKspc3FrADjL4eirQ",
  "key24": "2pf2jz8DqHzwH5cEskyBgFTazYL5SNcqn6ey2BzBHR6V87k5uDL8qFu2c7PFWg8PZfmBFcBAPyk64LdfK3BefaMq",
  "key25": "4dtd4vYhKQ3p3D4B2hk6e1mXutC7sYaGRA3aaV1xjLhgRTe9ZSXfFGrsGSLr9HKJGDNBdnkpqXRWmX97WFpiDGX2",
  "key26": "3BjQgdcUEm5u71B88MRLw1enMdXLXuJ4785iiPVjE8NXJM9b36fXH3cANwVxgTspabxXht9zm2NBDd4d1wVPz5CM",
  "key27": "5vwBttzH8gWMbkVi3Z8PVMwjiQ2Xy5zF5SGQ5RzdrbrWKWJ3398ePLZNvAhn68pD5MsCN32JXDSR83q7JEFUx8dG",
  "key28": "4nfayjoZfunUKBDH32SUE6HNj1rUg7rGwZURhKZEnvQAijmKhvSBC1RJgd1hce2JomTMrLMyHFmAZoEXrLtiUpBg",
  "key29": "3CXS9RZoforatKwtCM8rZnsBNYnCGVNyZCMftyii2Qo5ZCo6M53Jof9iscH9T9ZAeSrzeJyJRsiQ41hhbatkb8JV",
  "key30": "DqBckdhPmESdWkQEQbQpMvbstbWt1UNjRu4No3JdvaC8oUah4TctSZFAi2gnmZyyLd8HsunSyn73NxLWnQm6AYB",
  "key31": "2ajr3FLHAM45FvkV7wfYkeDdNbZxDAE4q9U19ye7EsUbEWjELXpTEu87PUX6LubMg6rBbTgu3mFcdUrhhRjAsWrG",
  "key32": "3nk5mdmvC37LkvzEQQ7bQcpAbPEA4ihSuhjCRXBrprU3DkEzDYcZCYiiLR5H9GYTGKkgt8awynzi6hkQZJGkAepu",
  "key33": "3EkPqWzmyrGpDC18r8wpW7CFGGk6BF8KPstJ4t2iiKsxn3sFkQpX4bQaQKCsyYL6g8vYQafrw5fV2uUdX4VQLifJ",
  "key34": "2Xpcxo2xVzDUba86gvGYPbSPWk4ABgFez3eeoyAKfi8Kw6LGhrBNQgco8ZnaHcVccwtyFra5jakUYi1CvmccMJmd",
  "key35": "5UaEFkDDot17ohyBEYsaWfvyZu5CATdgxU44fg1eWxuPuX3WUwEVJzDDQvxDG57z9arrtkfsrFG81vB8fAwbmsiZ",
  "key36": "21PWRU8hdqkxPrUpXaQAXfAvmgYBittcXp3rhtN4YGxWBAjnuAZbVUu1yB7nZVUkLHm9CrRr9oCyWsRNN6dau5QJ",
  "key37": "2Epp63KLB2VGuuSX1D9g3wTWpXdSBzuh68jwrKKkZG4DkCageMBHWakkpkx8qtSRjGCvv2tqqxbZ2zFcUtbh2mLg"
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
