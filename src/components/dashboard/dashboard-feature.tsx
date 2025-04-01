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
    "2J4ASsHpWmbJKdAX7DVALEa3LAKSspVXyNUqh4KtnyWEnVoxfeM5mQCHajgX6gSDMAZEt1AAamnom4aYDcyi89ez"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F2tinJwY4hT8njjc1xxGZC9MEqetkkw6J3orvu6o16N3UPcRtbq8uE8zeHU7nTMLmWfRmiEzRdV9DjXPaUrPEkC",
  "key1": "5JfLD5i18hSrYQ1zRzZdGgEDJtePV2q287TahEBwCysXbrjmopDDvVq5WdNmSfVZJULiDn8aMw1wBkuQXcKGhvBs",
  "key2": "2JHg1waggxkKbqREWzrn3gcS7UPavFhT1gsPF5cSdx4khAc5sj8ExJEkJtu2csgYUWJmum1k5DN5pxbYZ7LLYKXw",
  "key3": "3SyTy2P3QTBXCYuDkeWeqJNDqzSk6bSWgcRCuAPhikmY5tccWwKa3BLK6rfGN5aq6dKySqo1YmrLYbioxCokhxSr",
  "key4": "5AAwD3d2xv8JTHwxYHyHh1T56AVA2JJr6FWPBkegmZZG58N6B7GyV93Qc6kQo5k4QivdB7nT8aLUREYNUJWvdYXM",
  "key5": "2ZvRSmcW1cbxGTUATw8b1tbXmkCeVJAzWocjTxRHiQEMY7F3BVrkkiqQ2njgQY3i8goff19zH5CGmaYsnuZh6gpv",
  "key6": "25AKE5N4eBzWvskkG3kZTzHiYBadBeGg4bMkBv1jfdy7iRPcnWSvvmn7VnnkpNTMyaN84yD8YpUqSqv8mAWgbKTd",
  "key7": "32eWC6VC3p7s8WJK3YrBA6Mmwn6iQPBdJWSvypyMCRh4ezkBZiaAoTpyfkM5VxwvrfcbRNzN1ES8uX3RsGvFGz1e",
  "key8": "3ZENfDFuFk29cV9x42dT3UU82zbm3Wc7XU5iY7PnoCFnaY1ZUT7RkeT7uUHZbCkBzBZj74dt1HaG7UdNUwcECjko",
  "key9": "5yGM8stCr3P8keRoYdj4HcyGSAjPcsVXzamsEftEUijbp4H6uRb97nnhzxVXVBGZmDHqtKbJUhrQy2gXqbodfXuo",
  "key10": "Z6VkaxH1axhrzBkxGoghDjuiK7MfycDourh8wfhzTfsqNkgJNQAK2Jb5zPLDyqRM7aYKYp5byYPmqzbPQ3vJ74W",
  "key11": "Zvcq7afgXu8Xbw9dD7ZVxii2WQKmyri9QwfKXyMRSEShoySEURyRZKTb3eu8HdLRhH1bug285pmRgS38ustz7zE",
  "key12": "aWL1AZmJK4zzLPYcUyMXtywV13eGztx1c34ptajiEF4RMPgrGu9yuNBKGT9ED7BUycDbvo2jwpFto5oooKbYhMi",
  "key13": "4Q3BogWwqchJaG3pJjkd5jLBX8ZBMxQ9Hedk1zYaKUnE5RTTJif6pV5jt3wfNwf1PuQZ6X5G2hX72MziwzvWXdFn",
  "key14": "5qhPfuVNpCHdWjwcPFKDeodsBiHmTwGhjYidoQ3oRvhCC8tkjK5BWQLuNUsXP5YN3uwH39qWvHPVjf61zUkJNvYJ",
  "key15": "4yWehAm5u539Wir9gzbzD6K1GDWQQmcYKWnjY9jiQ8KTvej69KrMCMmZ9qsvA2p82pABc7N5K4oSdWCABBUbmXYW",
  "key16": "5UtBrrawVC6yfBhQRUfr4tUY5yTBeWPYrFaY5FiRJJak3ZdHtE1aRyJMpPgTQU2kHo8xV2o5KosGtnVMCn8RCBH1",
  "key17": "XtSwAhAwhicvwGpvxHg9KiyAUU2QijPQhDQRX9w8eYJxTWEski4qnn145DDNve6fDGX7EgHFnQ8f1ohkJFaokbX",
  "key18": "2R8HhT4upMxGptXzgNaDCcEgdVqt321xAGhdZS1acXUi8kHV7HbcwxQhtHEjLN9s3h6wkQL6TD5jUTNqso8CiVGc",
  "key19": "B4YK2rXjtf8Eo4z6puHdHhZ8jr6BSVkpfXXauYusUwyt2A82HCBwmLugaJ9VQ3HXoY3PqBPJcFVcR1rU3frXXqv",
  "key20": "3rrwkZbQxb4uofCzJsfJNPx9MTgJ9xqSGnoYTf87nvCY8GiwZw2N7coVHpf9U2Cvfug1nJaxAeD8XStMCKi1brAx",
  "key21": "2sruCCMy7VUnE6n7jaJ89af86ddLJjzcs8enG3diNHrLLgnLBxz4jhXF3nmw9C8uKY9xEDMhkjQhPsxkwDghtVJK",
  "key22": "2ukeqiUweytF6pWnWcqp3ue6hen2GA58cKiqcQRDoMxb23ivwfeHTRSqMAhAmeN7HgLki9ytS7zVVUQWf5TFb376",
  "key23": "4uRXpsjgxfn3zoLitxxxjKQVsHSXuVgVLNqhkbPemEbDyFiJBhCiT59weaEXBAKcPseqmxqR9qFdA4UjFkZrNQ2C",
  "key24": "SEfDYENz7wbXsG53RSe87TExRKr4E1mGcwAZWbixXFtVDdYuSJiWJh5q8fuvVBxwSktVFLqE791pmyVTad2eg7w",
  "key25": "3bj8sa7ENmJ4ndgTNMDKkMxSMqaSRewtdiX163UAqs1jyC6cBHF5c5S8xgQdCx1faxJ9QrCDK5JSxWg4jgFYbkE6",
  "key26": "gxGivgSyHcTqsnvaTXgnd7YXe72JTwPEYAAxyJ2jKHo8pEfjURB2bt9XybLezoAdXg1JJes5ab7htmNsJYoHh7P",
  "key27": "fcLKKcFMeGXkvM3dhH4bTXkCMCEbDR3tqWVJ4uSyg7pCWmRW4G9wTtgggcumRtZdJYZigvRf27J8KJGmtJH71By",
  "key28": "4XUaLCvPiUXqKQx6ZT9nzrjnQwMqaZFt8HvAzGDVtp1c7sVo2TrrwRMyFTX8gofkYiKRx5bdx2iQzGCXp9C6MvY6",
  "key29": "5tB3n1ecM6Y6bxv9TJwddM5Jnapw5m4zkMUqNbNp9EXC3DuEdchqcSy59ZtKGDm8gZ1E1Jpfmo4UWEjk591dNVN2",
  "key30": "4784JQgKPkJcusLx5fVJ7Re3WzoxBDoiMCgEZDt6HKT43QX29BoZFqSrahnoogCZRoN6kcksXJi4knc36tFeTNRN",
  "key31": "48u5Couce1R58G3C5sHnhReJGRuXSJcFbgKkmwP8sWoqDN2VriPntZj6KKnQ3p2ouyyQdmBrAa1ET1wWAekx9ixA",
  "key32": "5hgRKw5LYXDvoL7KZx81U1qyTYUasUve4728GaSKJwWLYPcasf5S3bQ1HVWXsuGiL6ATfxWJjAg2XakxpPN1LEKP",
  "key33": "5CS3HGj87qikPvdwE54Eee9QshWW179FCSaprHywCvEb32cHGGfpy9bKuofogLxgLyboU1mhS6XMx9i1JCcnHuCH",
  "key34": "3Sqvf6xMUX1GzdTLA6J6ToCbLa3VrAr9XD8tKwwjtA8NjbPxu3bs69qyxu7Pnr7WjqXxyTUnJGdVi5sUEUS3omSP",
  "key35": "2TXA9w6Z2K9HfdJc1CFDKvcRTwfN8KQjHdWzj7bz7rDcANXNeBco26hLANcaKgCqE747ac363psDuAnJfbFVi9Vv",
  "key36": "558w7sRMsXb2bd3PF9ZLbntHTGT2RPpt8FMpftaR3LQQ4tEXrPVEuwtpLeAgiXgaqRG8rF8mFLKETEQ1HyeBFDBF",
  "key37": "2Uzt38G4cRcV87ambCNeo7K2CEmuercoBHCzS4aHreAFPfuPBgyPCaBV6EnCNufJiftUDDxEuTDPCs9eK2d9k59T",
  "key38": "2KAjh7i3FJtAzuN4SN4FYqNxRPGTPBcqoFC6rKbg1jy7awvmavMefbhWDsw8m2nGMdm85uZzn7mBd4FuEU21gtaH"
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
