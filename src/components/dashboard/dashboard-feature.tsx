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
    "2rEsYWLanvnWB3gfnqCyK9desxZUGg9mUVqSWXa5t6jSMNGfYMCd6v8Z3gpCR6F9s4B6BiMwnENywBUbRSVzVsiC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FTvDRHfRxwU928zYJjuS88PDvrEw2hKadeHNX3oe1A9xdpJ1wXudrKaCfS877Yr63o9zEd1y8VF6XvqpzLPwLCW",
  "key1": "5pqtdzhekebGdDu7Z7doWrMhGbXXbeqoA7Fuec79ryQaAPji33bWzaMrJDM6gMQpE6BLiriYGDcrcrrHtndvJvWu",
  "key2": "34eaQsHFbjDMbr7Ba212iA68RoYKT99gSb45fYE4hgAHdxxPaFNEcFhF2pJzUUAhsj2HDJ5w8JnxfrWVpV4SePnF",
  "key3": "5oDxsyYDQ9MhiAygHfgevKd9yyqyzreUEKyLAq14ZkzqnrTx1VAWtdxGwca1ixPuS5wbLkHFjD2ioFCEMbkcRaaE",
  "key4": "4qBxg5PBN5QBSnTdpDiMpqooNRtkS6QUNcJVJQiZqCfVBAxRksDcdTx6UoKn9VZQvTu4fY1RGkBqXsp6gQ6JhSjQ",
  "key5": "62NGjVrzinwu9Ssq88DC6p8AA3g1t9LLfVZwoKg3CHPMNFqbPhkK6aeXymwuWbTFtFJr5td2niXaePWYQjBvAvKM",
  "key6": "5DeF3u7Yon4YBftMTbiGAShWUhQytycF9HN9fNXDLK3TxuuW1LcZHZyX1vvWS4tjt932cdYvESvCSn7MVPK9C88V",
  "key7": "2Z9JiLDSnhh3KZKW1oXdCiTMFxmTHx1deZMsNR6uZpjHtSd2CfM7a8i1U4EnG9Vpt3J32EZ7sy6P3B2pM62WuTiy",
  "key8": "2m1M9gnGnPMQsKSyGDBHofYbQEFPk7tz26pdWyE983ZdDwoziWXMB5gSHKMnVKTxEQnjUCqvDuwotxaNVxYymyF1",
  "key9": "5Lxn81egNNby54jZfmqJKo1M2PQgavkC7HmVTDmebxWVoDbBVRzBwTAPpkWej2zVEeLfuqcTLVMSEvaZvPtARRq7",
  "key10": "3GyzWKuuee9biYaY2qdE82KmfkUFLfuQcEeeQdmYX9qnixhMYhQNA3uSC7uZM47khnjtKNRxJCKnYY3G3U8xXCm7",
  "key11": "4gMcfK2nsC3cnEAsWvFTfKckhjDCEhTHu6FXUbXyXdo7nnpYnXYHPpb7vvguUcfVhyjPKfA6KwjSEKJ5BZyFYbSH",
  "key12": "4rGnc3x5VVRHWDjwCsPip3n9VGJLsFtLojgJKdk4EX7SQ92hckUBCo42hWNaDmVag4t24g51kR8uAZgpXqnnpaU",
  "key13": "MdLwDS5dW7cMxkyXoouWULHroHU6HD8fJmrPKMbTSe7A5UEp9K1b1Z1BTmjRzQW7FEMAk9qdHtC4tbi8yUp5Kao",
  "key14": "2sD3J56Ry29HZytsmfNGH5XpoXYLwVy62GDr6YYZiDG2QQ2Bf9iVKn2Zv8jW3mWCpvT45YnRCksNzNNVkeV9n7h8",
  "key15": "5mSQ9SVwgaKzGZTGcBdwyxDic848Zmk7BuygkMwXTsQnqi122oVbLC3pjq6BiCSX9sFd7XnRfR8qJ199ayhLxV2x",
  "key16": "5cFg25jmoYxkCCiMgAwbrK4TRZS4jeHh97b6jhf6fKaiRgd2yxwFABrLgMkDwUsLzFJ5kxNCnfAKevNByw9ntH8S",
  "key17": "94Tf4eQinpcc5Rg4t7XvL2rNJTPhUp29aow6BeKX9Dc552MWnFmYiNNUm1tBJS9HnNkaG4iJJdZuHvwXVKtCkMU",
  "key18": "578KLWcZ5UZcXwrfV3xKdsD5QutiD5Tm5i1rkQ2HM2vqYMvcihjgebkywRnsfemKDo1YkmEmEcGLv3P1CgnfM4ZL",
  "key19": "4ze3JVYUFGXEzq1d6vLcvkjt8wy8ssBzB9QcDkH1F6fw4paL8nU7sGRL7kZLdXwpqFqHeTuMcZ2RWZksYmSECGvg",
  "key20": "pGNAbDen2VKtHKkCLDK7PAZAVUZcCkvMkNdDHWpezjo4k5iYB17RoND43sHHJgNqdXSFyWbkBqdwWJLqrkdqAGi",
  "key21": "5pKVjWoePsH2x2krvCLh2a42KevT6f3R15Upb4UjCzLJmjSRq9Rqd1qt9AVECrEXtiZDWvPGWqqXL6R6f4QbELU6",
  "key22": "3XG97fcSsqomieoXac99Cnvm5VBPTgvwdm2Lv2sQWcJr3RdtNfuv11Y4pcHXdYoRmGqMraLU5DSrZp9qdJCT7D7f",
  "key23": "3a6CY1voopEgA73YfYLtiA4JgCiDSFtFvxYqNBjjbeuRs6hBaxpZktD1JFk2iSiEyu45px5HTbVDeNs1oamKfcJ5",
  "key24": "4ZaM42tpqu9A28Urt5birkWk1DVNLaHXrcNJEJj7jFHTAJ8TAJTJvSNHodgV5gEYZ1EYBRjcSdF6htGiM4mMcKx2",
  "key25": "P1WACkSzP3kAAXWNaCJiJgBoMNdfNLwENoxG6uyAAMw3abmco3M9pdCY7QAuYxjTzankPkMuxAiEVAeSH8QoZFz"
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
