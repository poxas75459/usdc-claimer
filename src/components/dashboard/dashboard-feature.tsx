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
    "121MGNAYPgACiF9FMHxesiF1ekJqqbvN8Uginr5XRNgLZCQojLMXyZW5cYGNzTekTNDEVNVwjrPY2bUi3xzpiG7S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "N7GJsU1CmiZkS7ETRb86pCVRYFsc4BBKFnFrhUgJjEATB9s4QjckC9bG9yvCponefQif5Ww5aAtVRtyqoTi4mh2",
  "key1": "4Txc6tqpYjhMyVTUJLKrsx6Wkbh45FXAS8EYtfmN1S9jndMHU6JdmfEL8v7KYQybdaxkydURyEfjsecXQLwXXcqU",
  "key2": "5ucMnE8wfb6pnWrsuydWkghMNkvH25oNR3p4KBhD3sGGy7eH5Lyf3QaTieAYiV6bBqUAdUogrcPqLhsw3ZGMatys",
  "key3": "3P9PA7Ge5rqSY132Y4RuXGwPQEYNJaUkK3sJsFETp8pY429jkrnMgjh8iCXKWXQ4X5fub1zKVTwF7iRmQSx1fhTy",
  "key4": "3AdiwccCc4Teu44nTmf212XhtyvFN4gXWn7J4VnMauVxUtd1i1We7fwpNWm1q9SQKA7ASFAZWyPSy7WoLCrFL9se",
  "key5": "VU27fjdkXNqGrFpL8gLSFqX3gxm2T2787JCpD5Hz2vazQfv1Y4EcCZHT1nePUAUSg7KmhwirfL4evoYJ9nJehZd",
  "key6": "2getiLu5HxaZJk3Lu4p5Y3oYETkkTw8hAXv3se2SLYxBXQYRe6gxGK49ZjBEhFvKdr5MzUBtdK9MEYW7JXWncsE",
  "key7": "5HC88Mq9DCf6iMBw4yftyQC62bEJtHjg2Y9uVdTs5UVAoYgb3BFSXL6hzEmLBxvAFVcxyt62W7U6sdEEDm8g23XB",
  "key8": "35Eo9rrXkz8ZXvX9cag1QDvhRNZam8KVPRq6xRyjpP3oUo7oC3tnGQWRRw97BNK9z8rbbDkCFdMHcj3eqvq5Gs2b",
  "key9": "2aRhL2B95jVFvVBnMpzCN91QNvYgk75qwy9DrMV8LWQHWCpW5xLSVeTip42rSWinbjQjqCD7yws8ggNUNWdvcqBi",
  "key10": "5mA9GF2UoSWivvK7e9boZWQ5aKiQKrWMcLtBRLURNwQYpB96BETeU7rXrAj5NgeLdqCQRoBddGWqUJxdNhph9N3R",
  "key11": "zSro1QdP1gih1c4xwjCM2mSXHJGCRApsDT19ZfN1p8PthBRRj1jdrHnzmv3bhZSVA8FPU3LBoagRmMui45qZsDs",
  "key12": "45cghyFFkWRXgdfHuapBnV2hddTavnJjsjuxBBEjNfz3yTka4ayEYdDaVHt62REjU5pjqdLjvumrQXGs8n6SnLCN",
  "key13": "3iHJvsUyjRyvRUE64YvALYSJ73iQ4B6vXG45rfyeHQqfyoScJtFj8t8BGGaZJmimfWRE25zYQJjS7zm6oPfj6dtx",
  "key14": "33pjUhgeVobf281YjpAWY2uhe3Uz2YjX331DgGPj3Pmb1nvVQF8UHECfFocbavYZvrNvqnWNXHzQhhskZydMo9WA",
  "key15": "3Nt8axbpydAwPAFSBLySTibjGW6tvAQKGdiJaonhanq5tLsijtxAR1pL43cbg9bh96SMdA6A9xLp4JGpNxjeZL9z",
  "key16": "4BzPRhoy59cVGm8sTZMcdHoT4zZULwq5DCiZGpRsYsBkyXYWiwerFS9qhNfyXuyCjuGNhJF1sUYpM62mdaSAjebX",
  "key17": "58vdKFvav7StMbGqdNFbuoiumqRMzPgddu9xSMHoCJcB2RGfH9nCP84XF5z3rQJR9WqNDdPBbBA2EDkxpQvny7nT",
  "key18": "3zgePSNfJpU4pPgv4cBjDNsvZE8QvwdjrzUaGDu2CTCRuvDKsAqfLxFz33uonbt39HCyrUwXNCvbuaMdj8JLGC3u",
  "key19": "4mGPwnbzhKUZhyXjizLKCZLhsLxA1AYwPSqrBR3PXhnNzAUaPFJcQBx8iottjDSFAGKnUadAPq8AfqaEZinVyZpV",
  "key20": "5oA7Q5oR5cXJ5mLyg4fhXKjqp7FDEfwkQcV3TNBP37WuB5QUTsvi9gtM4v9et7mCGh5CGZSEU88F2zoqdGqawg94",
  "key21": "4hiTuUZXZGQ7a6f5RQMgq44F8busWxRgUrrZy6XrrcQczZDygKBBSgygv7Q1TDXzFtwNrzqS5qvx3xs2BNMoq84s",
  "key22": "4eQ6dqfTqPYkmP93uuh2pBPnHLGtqZwgww6QyuTMZKp6gcb2MxKppk3dVmMAFbEduE66KLFe4rSVxgkWYC5ZAPQt",
  "key23": "5tg7ZEMirsQebf5sJCk7FwyFLRt5B51yFfs7vDLndEAj6GWTYBZGNevDA2by8p9ToLD1vYwBXw368jvWkjP4vzMq",
  "key24": "67J8hZXJijyLrc6JjNAkupNBUnpA4XxsWFBQQkydCCQqwYQLss2cCBLDj4rEr1bVfAywBAaT8JVtMhpx8turda63"
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
