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
    "5XQ6PGG2DjFrryuzWA8NtWHJaiKyJSSAMUrgGmcxqXChWi5ZoRbdB5jWEUhcuHzq9VVPZH1frcmDff1PuzH9b8WE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dNVvsJnJ1kSPpJnJeqjfziWxjcSZKt1PSnAycte9emCHRMDPytXQcSALM4DjgTiEvqP8msu8RcrQoGuYuwpfjQQ",
  "key1": "3Tgfbqi72GbzjwToWX1NGYhV3ZgHz5uypFwmi6wNtcQZbZEU3hKJRAXk6pYeLdGau7g4fcJ2xnLkJZz799dWm2hw",
  "key2": "5ymzt5NJ7Dxe8f3j61KAaKogZDtSJTGzYb841pfPBYo11SvfNvtL9DqErgGN2t2pBiQXaELLSStJcqN4ZCBLqwzx",
  "key3": "bu2QaZLj36B1QpqsZpg6WF3tNxTdU7rJe1BGxX2NcrAJuyDfu5YXn74KGcAJdJRiYPqvcPgXBAszaoVY3vbpz6r",
  "key4": "2pi76ycDUFdVo6FC4pcnSyduUgrBvaGroNusHxQH8E6uRHPTNDURNjLHD1ZshcFv5j63oZXGkaUcqx24jvTMkJoB",
  "key5": "dnDqp1C9AKxK9H7SkB9ULBCkrxHQgJh1PagQS3fLoA43385CfDnVT9t2FQHFaosz6EnZ7ZLJKHuKWyswiEZFd6E",
  "key6": "5TaAa7tQbD4SoM1fTYSwUcvxCB8ZyMCoyNM1ZWMHJCcSQfEmBfbcRgy2kJxFPtV6QHQQJs7fLXY1uNiXagkcG2V1",
  "key7": "5oxgHPYWm6ZnV1MJtrDEVjZ2FDtfFuky2Bpqncsors3DvoKt6vPnt6ErZcSU3QjrfZdg1PXfQWxQEMrrZNcnoMW8",
  "key8": "2fwuYkxLkVGv28XwMBQLiruhUhFCoYDULRiWHPKVeh7M9MQjtnznEeMdkAE4wiZjRKJyf5QzwRuhMnGeMciWeXjA",
  "key9": "3M8kNCecprLeqWcTkFaaFCg46tVidRFdB5zgvFVSV6EnZtBwvMgvxqXEK3DthCdk4wS4zUuCNn67TzQ4V6LM5mja",
  "key10": "kQaJerCa2d8sju4sRaJ3fszqhTxmGkj3137kAyN7DP1AGZ7Nt79Vzro9M9qxqUjzHfZG85hQd8xiPDNw5UpskNE",
  "key11": "5sBXcxbRhbMXNNTbMZLrESVBRXNP7qKDCTzNKhpAktpq8KaLeGwB9bHLb1daPeaCpbz4NaXtyisKbhf6h3n7FThu",
  "key12": "4RD41DnFBKbNpyQH283iCxqpHueXARgyrQSAf7TT8D647F17hYRhz4pUeHKsWYESWStKMwUNZqAT7yLhxhAwVH33",
  "key13": "64TidthbBJmRjvzbDEdpcTeHCUUD5gv4G1kXs8Y6iZ7H6DyMiwz5vT8XyLzcXDxCPCzfJuzWzaxhtPvJmBQe1XMX",
  "key14": "2tNQZUsRDZdF4LRP4TJVSgN1bTe3xgyNDT36Tctt2n36GJ6CX3nzcs7GPwnAqRqDd1ZienYdRKeQjX4T2d1uS8qe",
  "key15": "t96G4c42j5yjctHqk29YfN7ZaDnmHpeE1fdeQDj38DSV7WU8nRc3CXocTUFAPHWfJRBALj8syipd3xZGveJ373f",
  "key16": "53NFhTTiqFKb9e2VhM1n8aCsdBgpKzP3QT8GH5RrX6qWpyffvTcEa7MnyRDi7SNsfMVLjxsi9fxzCx181NPJLZaT",
  "key17": "ifPcnv3XtLg3tNgQNB8GUQ9U3L6Uxwu6dgfspnCMhRczU3hLFq3GeUYuhrzM7pcnH9o7U4FFDvkYtNDvdqRqe7d",
  "key18": "4AZsRdT2oPmBSQ31EMMBR3ZV793dNoMBaa7ukoE2rAvdQVip4fuR9cb9PZwgYXvYSxvshxKPbTNC8CLxTfkv4w3s",
  "key19": "3CRWqsv4Bb5HhMsvxPgkN6X4Uzdw62E5kAUCsoRUETAwhqpgcp5u6iuVqcSAGifN88b39siYRS1cpXtwxV6NtxNy",
  "key20": "5HbUQzFmXNyfFY8NbfKb7yfYRcXP6rC18UU8j5eoW5ysHC6Y2cPcyHSPhyX2ir3u2hJQBH7g7GiEJL528eh2TBH8",
  "key21": "41Fd1AoT6WXsf2gnCXZGbixw2BCr6GbDudZWh4vLh6DVAWE4cCsFZWV7BTKvA1YxxaU1swD1TqZQ48CQTf5aC8Rw",
  "key22": "2H8CvvodEV3AV7W8srHPVZcxyAcpvaHG8yhUBxpo96Ez6hs79EFy4ZfpxjSSNWErTBu6fxLbHxH3ehVCptpYV5yg",
  "key23": "EKx2zK7vNtKoLiZpr4fJESgauXQNqETUmkX6KuH2zWfpPg6dnnf9TXeG3tBZBqCgG8krvQmW6b6SsvPxctxWTTr",
  "key24": "W4jPpF8UWzR6EZgkhGw4Zu8PXffUbNkwRxdAS67s5r7vRoWz1fCFYjEWuTRv1YMu5A6oUXRB8pFxEATbSvTFCWe",
  "key25": "4Zv6oo13BtFywtKixGXR9PSKCYLENrMFbWBzEPufCKwPr5oqgWUkwSS3hbkX9CvTxMmaZikEmEHuhiTBW4KCkFeW",
  "key26": "3oD5rqs7W1uK4CmSj8g2KC9xaThqmXBZ6hJcAk9rVcfKPK6ug6Kw11jGzAvTcXsHZtDHBHVW1ZuAk5u5tobqRdY7",
  "key27": "5L9mL4XpVTab8dfB9y87FYyotoUQezrCzTb3Ztz8SBjPKnajZk1KLZM7V79aAewD6FdZXQgTzYbrQwFvWq8Nf3Hp",
  "key28": "3vyz47MZxxFmXDHEEaD6eSBfrHYVg7W4FRWiVfubc4CVbG1yy2rRzvYWRpf7HGZufeYqmjvhWfwkduLsh7yvDq9B",
  "key29": "2NCuQtH1QdJtwsjvV2RwEvTKMidbyBJ92LP128TBxAQ3Xtnnn54XUxXEUrUoADuFBPWRWRmfjv3dZ2kCB1N3GDr2",
  "key30": "27mKr68Z9pQ9kZG3ggs21e72VqThaxN62UtcKRATEZFDHJRnibga3ow2bXjh7TnQSM3GfNCY6s2T76b1wmHnbNLQ",
  "key31": "3rJhL69QJ4A7AbgtSsJd3a4dbHGKECW4jKcLo6XccXyrxvCJEQ9gajezoxYyYgF5vvanZpgoMvPY8fH7KwW5NVNB",
  "key32": "2Ym33JR8B5nBMMe67gKptnQMk4spS7UgjcsSvb3AsA22vfnwc62V5C6G9LNVfQLBiMMJZKts3BLkJw2mzeg4tnsD"
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
