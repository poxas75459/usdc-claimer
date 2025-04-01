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
    "5w9Z85a1szdfQ197NHHKR54bSTg3QAKngSoGSX39EPKJfmx859wNQx3xjQxGkAvi2qzFPienHnDfrUSE18tQTwHK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mtSqguCtZm1V36tYPMDzA9Kxt2KZ4pbBysmWmb9yYQp7ypeTG6xt94mvnCaV8S9No18guuZwtpDCjWavEHqWp1E",
  "key1": "1fATPSQW6veK15owdCfjdQoaHmMXHx6Qduq914navZUcf3STR6faiYmnjzMHrBLnscZXQbERMwR5Cr3gQC1HnXo",
  "key2": "2VxCHbdgoteNgs7UqVUrLgmaAHexdJMhtQaAzMid2uREvRAPCxQAJHkFdpwYvS6GfiKfpTTwJSZqtrgNQRDESQxW",
  "key3": "3MVraGHSRK32JnzZNstopnrsqgr8tsAZWfYnLGbmUWpcWBQxEii2cvyycvwGidRwghy1GYtixdQT7uE3i4hYpg3c",
  "key4": "5sS6Y62ZTpHiGMx2zYEQ17c2qGad2TNADvaFyuzZge96gaqRkCeFkdBwvMziGQT3CUpBTutAoGK1TTGjH24XsEpg",
  "key5": "2QAX5hR6rAvanFcsde9ut1HGCsnaLgfrGBhAeeF8XPrGbhoRx5APN6wEezNZNMs76Yzj9rNHPQhWqds84Cshyx6k",
  "key6": "3CozukrSWYBzov9SnP8qckdY7uExqdUPcDMgaVu9A2fZqhgPJYgVD5AaJ9cESMz5v7VyqqLhXhUFDYDa3kJE3cBC",
  "key7": "2ctY32vQFiJ6RLfyfnnqL3nnSpnSeKXCwjQvkSMvf3oGcEKzLpGAv8eNzYFPXiqhab64XG3VdFbFMbxFoE21uVjS",
  "key8": "5TbU5fDZhStvNTewHKSaoGktc6k2wqJ4H4zPefvQhhQz5ccMz2TmdfDPhizwZ6L3ranyfbBbQ2CThaeCse5LqTFA",
  "key9": "4A44RWLgnX1HTBZLQ8jGn7nRo9LG87PfN7ZykG9w62FEumfQdhUHXjHxoJL1wtgrfmx2E5u3NLvmi7e7qg5xBM4o",
  "key10": "3br8HskyDZi8vs7xnrz3wHKZpDJg1SSVf11DECRMv3Apx2yUcuAVFAfS6b8FQX3fL1Hzn8AWHo4V7kMd3LwNgaHt",
  "key11": "49wXPPQL9e1njR4zUko31BbHQFLAhn2ES3ZMLqEw2oG8wfy6evq9DfoNrKZ79jq9pgBP4b3Wodvcpp6PEppGTFcz",
  "key12": "3UGYs7d3zf3ytp3AdVi4XS8GXkV4bvBTzmCQCTnMbm374YsSXwJDsF9WvTPa35cNjSBY9aCWDSx7HxcGPHHBh1zL",
  "key13": "3gta87k3k7Tb3MiZz1kYLbdV8MxjgxHpgm8x2jUeaHigbcHQ484RS4uaHgEeM5WZfDNYktcPK8sSwkH4ieyDEDg9",
  "key14": "VFi2eRUw9vEH28GQxyffbLm4J4ki4CnvnU2xgMUd9RbjaioLNbu6NTNvLRGvGW4eFmQkSVhb9RMGH7ytt7oVJQ6",
  "key15": "5XXBftbSx1Tvvv8vFeRPTWTB4BVPnBLm7G1Fr9n117tMxLiBpqKgP61DVJAEpm6YHbo3CsS82dhR8zzRysxVhZ2y",
  "key16": "211fWmnMhZB7Qt7RexeGHeWLspsfG2rfPrB8d8yPPwzMA3Q9VDRmjPUjvqHh7pQ7MrE1a893VGbow7QAtHLdnyGW",
  "key17": "3kLkid7ia5PGxoqavkigwevENYaTvjPmSS93VzeY8VQ1LN2PBiFGL2dpfZhU1ASQNzyto4Ksk2K2Zcrm9juGVjpE",
  "key18": "3KpEvAEiqGH9batq4sWeJcXSZNsFKZQrXZhh2EVgfGRuiywgFwLWxPSqfs6DHZ9qtyq5xxCjxJGz2XWdwstLD9wT",
  "key19": "3uQciqQxCW9uLR8N4SR51g282GhqU4ibubMSvyWncZJ2Cbtj8b3urGCTsLrNWn8sZz2JTHuETqgqZM1C6qNtRAbx",
  "key20": "MeipwGrDnLp6qN4pgnd5pPznXKQMPKgvwuWKK1AjME94aTWdPfhHe6t5QqpFKzBKgurxW484YUWikVATWisaf8p",
  "key21": "sJBRC7q9gAS79upJnaqgw56GsZfmozDxP11y1xUmnqE6rpbyD1v9NEBar1Jxmd1zLShePNEjoNuNzJp6GGFN6oA",
  "key22": "4Jq2bovid7vNkbgJeejxC14RNdMNKaDp8xx2jLACzP6mRCwVFna77yGCsjhE5mU23hpyQcMxMNMADUeH7ch3dBr2",
  "key23": "4hPDqUGfW8ry2YiyaAKRgdqoGUWv3yizbZ5oJiM5Ldf7LJEaLeDQSbQQ9P3fAzHraqKz9VDTMzpbC7GXtyoSNqJR",
  "key24": "5qv9MCmxCHPU69TRTDfrG3aGN6YqqoeUAC5r4trAr6nLg9QfSmEzgoo4fEiWsNTz2pHJRgE1mbB3P28Z6k9jLzz6",
  "key25": "2fJ25daWHW3Kcu4KjDQjuYdiDops4NgpX519Gb9Jk4KmgX28pFbie9YWGYC8E6KTqebVRdByBEAU12McLU6Lod2T",
  "key26": "28SQe8ajo43yB2fnZsDSVKcHJLH5XCJNa51LpZNhghcEGfMGoNEyZMmozLHQSvdUsH5YapfE7gRw7bwic7v1EeTN",
  "key27": "55qngqQYgBagK9u8Lj6eBLAgKJ4gppLFmQ63AwgwjJQNHPQUSwJVxgY2DwTzemfu2bTPDD5vx3id4aeXmLwbaLEf",
  "key28": "4K8whwTgnvB5NR59p78hfiTJVp4HFFtZLSvaobL35hQZeSpLC9Jkk5DHeR435eHboLjw4sxCE4bPfkkw55VVUuvw"
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
