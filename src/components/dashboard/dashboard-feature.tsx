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
    "47DDFciBrrhKgDanpce52B7UGASJ6ZjmPJQdfx6YhqN3LvbBHcgkR2BMJquCJ7ZfDu9Wj2fyEbTdzYzu95VWVSPH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PnDjkVWd2G7rjvfi9DqxjAGLShTFd3eaRv4qDi7viMGbGC2AUA74VD5NrpjU6ewmsVoxYCe8YVdHfxEVUu5W2Ry",
  "key1": "66ecsF4pyNPx6VMMYzDU9UkHVmEnEMaF1ZHYjSgXQ6mx7cXuQ9duuxvb18uNEott8Va9NLHQVbcxCXWngJ3gkS8H",
  "key2": "2DjC57th1kzwqHEfiiZGN4HuNtEcPoBk4aSkM5eL5pT7NEbUmvQtdQs6KL2Np6KjLb3WFKUuX3crS4zZBs6QucLx",
  "key3": "4f9BAFox4BDzF21ngTB8MAiCYuvNUe7WjHEFgVV7x7bRTnfP9F9k2LJ9DesnxNYeGxvB2EJhYTHW4xCffjTJDdeE",
  "key4": "5yMAg3KENrUf11bczQnSx3zg3QsnPxLD9qaHGyGCbpr4SvTgGoTZMm396m4XtwcLSHsGpuB6yzfGZgzEWkko1Lhx",
  "key5": "2USn9bq39ZYdjRCVhcFAHkJEQs4CoEkKXsJZf6HLArxCSVV6KDTJrUDhZJm835scc9UfCkSTLUdeTEByvbB8fd6C",
  "key6": "5oscPSNsGqd1aVsA9PnQSUB6t1pFAb2zBv49aemQKf15WNwuXTWJXG4R4WxDWpiziaHDeddEdKtdrXK4LYzYafos",
  "key7": "5a7wPjZFWVpAVsCyAwd2EYfLtdUvMqJnRyjUd6o7DDBf4ZJoApUVFuQ9WDYAksVCLG8e82bZSy9c1JgypqosJhMi",
  "key8": "5daGYSZXR8ZwM7dYXJGvAbad69FpPeATXjozx2kK6BsGd35ce8J7SSbm1BBN2X2amcYfCQ44ZhmjsciiAEZJiRgp",
  "key9": "5fQSb5BzmNSN7XYJK8GbR9DjC1zHSQGvPfomtEu8LbiuyXZ1W3WCoCeyZtiogEUyUvUmY2CEp1h7EQqTrDMnFpux",
  "key10": "32anAfNgRKHvEigG92TA8Rpd9QF4A72Caxtp8hE1S6zSf1xwYjQH5k9A7TENaboi37PPWqEkmzzVd7cQNyiK2red",
  "key11": "35mG2AHDapncZduNV2w2ExpWWWhkeT7mpoW7xC2gmDLZVCyxWZy6fKQHX3jUNfw2EJBRu9k1bsqDK9omTWLUg9ug",
  "key12": "3iHv4ze6YmJfiEbAQq2QuXq8cRo7sbR1cvssB7GaRxYNiCta6rH5aUKKqstTDZYS51gRwz6ucRgKXLL48uSud6Yj",
  "key13": "Au2tzvGCcgP8tLaTEcKZ1it1f2heRMqqgYB1N7DPS2SAXDjTm4TsxpWbQBNr6kNMAAjd2xuXMxwuv1U2CEk48ys",
  "key14": "t9ixGX1LoEgJjpRdUzTuuTbiN6HifXQ82wGcBEGmY2u6ymQ2PQMWVCtGCVMR19sG5qzU7U1pQNnHRHxihB8VXLw",
  "key15": "5SEpbMtPZPFSgWvpsSpWUpHDCh9JYinCE2G63YsAc5LKJZdArYcDLWV2yXZbb9wnZitHrr17qbRqoNZKQk6cD6jo",
  "key16": "8uDBB8kZvHaBcAiUVtQrxJKdwTyCJVZJTrx25mzgQimewpctcAu2cafWFuCh1LwsNycxpvkGq5SDW2pzteCWv9i",
  "key17": "33wypVrLLyZxawwSn89737VBdkQ1TYeCyyA6BnnaY8PkaCPuHkfFqq6CVXBZgHfiJeiJrS6bWL7zsnSg3s3jWLyQ",
  "key18": "4oactB2s6RpkznPp5qFbEsPTNJybxkEPobiWPEVGgvpaRbQ5ZrzKjfBZtbryu7NSXUesgA4Boj8dEibVi19VpymR",
  "key19": "36aXCPoeVgmiiSoDzMa5xBP4jSGozdodjqrcvFWDSH9pF2b6BSfwXLiaJwcQiRW2FVP8NyTJmfGqb4Sq9tMTYNnk",
  "key20": "3v5TMa8AwA7cpVCCw6oQ6N2EoPfFbwFxaoxbHMabnB2Qc56ZRJvn31r5ZXjCBmrZFTuVykZqa4hb6cAYG2ZkgRCz",
  "key21": "4daxAfzFH1dU1GiQrZqnVHLvJBFWYsQ1LZ7CyF11iPPjq2WWJnzxaHrDP9N9NwpRUfPeW1miLPaGFSKtKvC4AvKi",
  "key22": "2uiVfTub7x6njdiQ7GViXVXjQEbAVQyyMQCuQH439ZUFprYTBxyo3MEentSwBQntmPpGKR2DWYWmjjSbhQAkewJ2",
  "key23": "5wTPQGXdw9SD7tm5DxMdMYkGevYNgxF1DwMxSG8DR7W926hyCfLaLGn4qdRxsFbGZqFGvtRrMZi4cyvkDf1r61JE",
  "key24": "5mKPVHncgkZQ4DWgaAU6wD6xgFsuuboYvc8bPwTwnGFFmPDrGpQHbhFWvykVSvBHt5Z6TVcJxmNFhDqKheiYXFTd",
  "key25": "3YSQacezFSRvi44Rbeop16MDYhifrHAKqY3Ef7vMeJTSSoPy498qJ12JAdfNW1w5jHBwKki6zVgAsxwFj3rSAduX",
  "key26": "u5GGwZSD1N4NwarE3PupvNUA51f5xMmJQHnEohU5y2GJhEhWjHuQJBRSDQcN71eC6go145ceCGDhVtzhKRyTDAB",
  "key27": "4tiHSqo7dDcs8kNqrT2fhZBzKj3xvCbozM87JboyGKhDV1meYxemrawBQfUwg3gRUJst3zZJrGhzbdu2ZB2iiCvj",
  "key28": "66jxkqxUgob33HLkaRGg5JiRRRZ5jhsdSYwLNTqNHKiA8QZFrAftgqW7GfGe84FaYJ2tonzYrS5BdDd73Az9oZMT",
  "key29": "3AdGEmLTuzVXjz885JU5HYdhTQJgsJVXhLTvKXXwM2iXMxRDH1e2sHhUJsT9qsxPS4H9MF5faaxNkkEgJb1c4PeK",
  "key30": "3cRkEY71ezsZY9ZcpR8Q19wDHumunnrtyBjGyQjJxKEsiUCmhUNUwq1m1SUHoSZcuE6jvAPyG7LDAeyHCzhuTMLS",
  "key31": "5zetyLiQ2rDx48p2DcuDBvXx7ABQobuye2LBYJiS4PwNZdxuLA4e9UcFkU3XvWxnVPUNxo2BLhorgbuooqrFJ8a7",
  "key32": "4URdShZu7VhfFkEL7FjScXgtP8hdFwQyTNAaPSmCzUXN4XKg8S2Lq3gaRxVV9bFwcxSCqQ6KuqYCHLg2hc9Kshj",
  "key33": "3Ap28PNJMdM9ZgJJpWRbokMRgooonLfXj1NdW8CcdDAGdintuXvuU8xKzEmFBL6WfM99CNatd2D1envmBb4KLZAf",
  "key34": "4DoVwzef8DdKZ9z3YiURDhXVVtL7SX2ytww8u3tJ2czbCZ1V4oXSvKdZynTdLcWQCCkDb1W5P1ws6CBEE7WF8UBo",
  "key35": "VcbWG7SFCBGUJy45oZ1Wtgx9jxE4SE1aWTUPAoubpG7djfMP4Aj7qEYQ6xdTUYZEsxc5FGDdZc2xEunbKQCFhDv",
  "key36": "3qj5jctCmq6KrF77u497t4zFRHoqB2CEjJvjdsZKw6f75ttEPAANRsQMwfMHDxuUrAWf1z9iP3eZPX3QNzRkAcw1",
  "key37": "3P7Za4qe77jb2VpEXB6dXMgpUmby1nGrkUK1TfdrnqbQ2MEwqsspGU25ACfU9rTWfA8jwbeyEaAoKqUZB4uURkUQ",
  "key38": "48gxnpotuY6YBLNYLhAJx3dQB23Akzz6bDLA2njbEQoyZKM3TbPEUc9A2ZnsD7SeHMnBzTz4adMgFhQaD2CXodir",
  "key39": "QDfV3PHaKcU3iNP8ZQc9xcsihCwh4DPB5c2VvofeECaht8gxFjBm5zjqbRgDao36NpJj2Ktvg4UFQer9auSGStg",
  "key40": "2QPeNzs6oGuhHfgo7nbR8fdL8fGW7KA7oTts8z5crm59326XQvA6kF5gb7ZFW8RWdwXJJZWe2yk1o26t6LcZdSYW",
  "key41": "BJ9nB3Javxxz7Kb5atZxKjkPTYrkaokzKrBCAApqKnF3xsXsLLgv7h6y5iGfQF7BParWjfGkDMu1qtd9xMhpKMq",
  "key42": "5TpbdR5XJNQAyZGhfQP5aeSDtcJqHQwzqTNpi68VfVmJUFNJwQ3oWGzs6i9gYpbSP4Tt6FYsyE4qSGNBd97jEUko",
  "key43": "4CzedJmYoBvW7vYZV85SN3jZW1FCBqsa8QsKbBKPiR26jDtzjfk8JyCGJitb81DTSMcwFcUcdrVbN5Rj1JkkcVkB",
  "key44": "sFTmQHCy7ibUD8SmY7RhzFKQNMB77QLgssTxPBYvxACbyVXbaxFHjWFPbLiy6enyZvJDZaQuSRkBztvUkVPbAwZ",
  "key45": "2K6AagRw81RzZ1mzoezBPjZvWCmyU4zzPLrAbg8ScLJrVbTCEv2BSW9AdDdYheEn84TAm2nkUvKo7WMgWQtsyJRL",
  "key46": "yPB1i3cSxuB2AjQ8zawvRW5eCoEU1eqCpeKtXu7vcHWJYppoGAZAaEEMYAis78Wco8WcSyoWFWirmX3cYW8vzvh",
  "key47": "51s9qHdVSWNETiz73Xq2Cfbcs7aPK2Ex2n6siKYDN4Xv5bPdm7VZrMbtBH2PbKTY8vLmSktSnu4voWqZjACTTAjG"
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
