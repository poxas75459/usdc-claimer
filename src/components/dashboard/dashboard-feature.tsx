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
    "3baXhgXWg8P1kCtu67p3MiCyca47o1zayt5WZhgc1ai63pw5XcNwDd2yjQbX3ywG8cxD9D9QjfDh9SPcJ8bxYscC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CTuvc9i3XVovmHbBDZz7Eo1FNMKemVhxSQ8P18pJ4W4RwAciy2eaYqzD1iYfd1QM4dDkPs3wm46yKB5SEyFB76C",
  "key1": "C9EWfSB1MgXhKygeNTm8KTauctEBfX7ZBeCynpzcpSsz5o5WWmu2fWffX9LfWCynSQw377y1G6HqNq4g3eZy78L",
  "key2": "3qG911YRMzXnKophxPVvHXtwd2ZUMPpi7TF8omkcnE9ENH6qV143QAS3cbvnMMeGo92Ug1FknP31FnLPHH3gjP48",
  "key3": "4QLDxkingonDhtuTgRkkB94Qc9h4b9pzcjUErVMjVsjpbvvUbmWHv6fjjRVU1kxFtQQyTfG3ubhkFLHA8R2fW6kA",
  "key4": "5uznia64UDEpZoD6D7jfXqNodmMQCT4fHaaMqhSbQeFvxSss779DrzpQsQbVUNdNE5aUkbM8pUiDDEgYmJcpdw8o",
  "key5": "3EwUZuvTR8inprQNtGH6dQ24Wo3FLs7yfeQHKvu5QtmcEAGeQxP2ctVe8ZFdctC7HFEMmRonRks7fWTFCS1Exx6o",
  "key6": "3MZfwjucBo8pCKPZXyyhLZSbsTgfQ8M4CAzv17rf4HsapCAeLBuHt18uAWyx4QogYMpPofLe9jJBt3PLheB234EQ",
  "key7": "3JyVx2AE4MmprTwXSqqciN4iszhNuwLN32uhuKeBrnLe4YgoJqztaz2czefPQLmi2B6Hdc5oRCpgwd3v3j9rbeCp",
  "key8": "5EMN6EDiYkUinSBg1Pf5P5BvbJQ41xmpVVnC7Zg3Q8kcxpi73mED4LxwxsQFbY2mLd2xTM3sVy5ujRnDQPtKUFeE",
  "key9": "66cFYsARBfMd867tyT8Bcu2VDEvczSD8aAACverLXSJ8PTLGRvJL4vNPoL9EHUs9EZrhvWDsqEybgAo7rDLcLUBu",
  "key10": "5NQxi6o45y3QiJQ8wMXYztbMaQtmrBqv37D7bGhYJ2uZf9uVmhGJxuPeymvrYEWrBkvzvCQ6RY5oDEuzabKyGc5x",
  "key11": "rJEM7gAETcYXXPRdTzfhCCqHfUjXtPCeMnCTAjUei4zaMvrtrnA114Z5Bu3T5pjXdNvQsVx3WgpcJnn5oyuiQ1L",
  "key12": "5QePFwRzAFcmh7TarPZLcG7SjMKTvmsaHVc5V9r4rhH2xJndBPjDk7XHw5R7dXJNsUXJZadSWYts4g78TMpPGt9u",
  "key13": "5ZDLC7BFfdfZMu3F2wio7sF7P9vpgrC3xYzqnAiqDZY6C8JfbGu5bJtAK5H33hQxbjZicp7b3DoWbwC6k17nwa6V",
  "key14": "4DZW4ByxWFo9q4MhMQ7HnmFG496oJ16YMKKo4ZHdMZaT37PaXZQvW6f4m9bkdgtm3d3pNvEntALYoqPpgVgj3JHs",
  "key15": "f6TnPPMGZVQuPPc8tjgy26sdf8iCs8dFLjogF7jooFWtXhqzYWqMzCaCgZKgYmjpwjnutzwuiqFCP2c6355EuJJ",
  "key16": "wSeV98F6KT1MZ6DLPgRqkm1D89ggsixhLYcMTSf1btKzBBBcvMrJy1YAdBMKR9PbXEdN7z8vHfjkkJp6MVp42sS",
  "key17": "5vnHkueghVCCG1QLB8FZhbaYah28iyH1jFVqHcmgpBV1WbeUyLi9Pu3AAvhT2WFmkkgpVFdYeTCQayYZwhTLgN1d",
  "key18": "398F2UgNP17256r1WPfMgpezPLxt2cLMS3CQk1kxkmLk877Qo6xoacpf5m7hc8EJmnbjoEhcsH3m2jZb4AhaaHgx",
  "key19": "3TvEjzCLLfi4Th1M9qQhmX2MSxdAgNqLvNnxwdcz5mPJjCWUkFCiueGTKV6Te6WU2URMusGCGv2fZ9k7L1MwBRw5",
  "key20": "5sQej41tVg8cpuqu7p2KArUGBCNKatLXg5twmvV5PyCKjSjqfUXA7xQdz582KFf6dj8DqPiXaDaxLVZHbXcTL3ak",
  "key21": "TQNuVqkFbnc5xkUhbNsx7PLBuRYxGnQtnzGLchpRtzBBKcxLHRSFnaejpxNjL37Hstz29UbU6N6uvUVDMjdfZTX",
  "key22": "5AXVwDxXG3PhRyzChZHv22bytRxx6musEgzCjKbej8kPXLRpXa7V85Lh5fx4xz6sXJuxq6aSwJJ2rnPWhzYJxPR5",
  "key23": "55QLsrYcexba2F6NMQTZMJR97fqC57ahVyuJWehi6nrBDXwDP1N2Qfk7XdkywAdj5MpBqC8G5eVPV6bxrDXLrd22",
  "key24": "3uW7LWQGNyxoVc8MDmK2Qg24QwdXKCZfGSvXdrarRW3fVz3ovZdoMQS4RepE5tS7nu1Mojicni66sg1D7NPMfNu5",
  "key25": "2zt29HAjbtLiMUaDY7CfSieEj79bzhUYWfq6AbLkKWfWZbK9GPfNuponK3Zi1mAgsfakSW9tPAz9kcXmDRZSLk3x",
  "key26": "4SQd6p7seJv4xa8yEmWyFPJop6UDFxa3HyAC1pM9LiYVBii1JUSANgnhCQvDwKH5FWJ8hgQcBhQdZvhp5jvqoDCw",
  "key27": "2yYJbf5pP9YUDzeKQrQwcNETD8cwQNu3yKUHaZdrmznmybrAhnW1Wpqrqth3ggomvo2k932gC4TVPsme4y627yg4",
  "key28": "3sQ4Ur561aTxAwFxywYniumAmb3FTodsx6sMYB4tMJyeDkvLBeaQAEnYJqQ1nw71gkhptpn7zzu7fsoezEff6qnp",
  "key29": "5jdWJgagFkFDdYD4ewB8x24o4dpGRzDXxwXxDsuoLdqVRZpxciKZEtrKTEsEFbNDcb5jqQ4anHRCSjvZwtsnZbn",
  "key30": "2aCDuFoaCh7hoLnCoBgPSUNch274fpGM4kyWWQKePr8Zg3Z2E7w63FcBJVx4RP9s6FyotjCqaght5vkgMisSYo1y",
  "key31": "5guv91xEN3BZRtd5j4zdggc8KszDp5urgpkbxCQxBBDSGZJUertHyMa1LMck4UGARow1ii9seDxzYypuzGqy1PpQ",
  "key32": "3HHPN9K39soE43ZhE3iyQJ5yeiwCuYEZRf8GPFP1dqKgqfFyURHmjkK1KMutwaiWEV7PVLax3JXGZJycdv9fs6u9",
  "key33": "3waCwM9wqmDUGkQT2LiM5DS1G3ccC6mxyNFjdAxfp8fxxQesEm7Uc5BcTXbKAuVnyK1HyoKsmq2afvEk17g1JmAe"
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
