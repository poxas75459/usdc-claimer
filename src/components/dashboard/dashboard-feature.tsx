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
    "4XQ6nXFz63mMBBc8k3wj9L8vCFnKqTmDZ8DY43YBAEcS1CmR76C7YahwVemLJ8T4gynuRUSe71bvU4wZihoyGNxD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cgWTvDK6cskgsRULtaR8Qhra2UU8sM3VsD23Ywnn8ibYGxrxfkMH47feW6Fd1ZgB9GJHueMyhfsVKjyhuTW8RWZ",
  "key1": "5casFbXG5Cnh1memvD76Ljgj1Grpe2oodc12PFpVKXDGHnRdN9M7hriuvqkiSWb7689LCa4rNcD82PuYtZLXZtTS",
  "key2": "c1su1uCxWifndyVk1oCZF78Qva9sucwqMBJCN3qi5tGHTdsACH33VVE4vAsrY5N6m4LbzZsNJPJAns3yGgYu5NK",
  "key3": "GD7PWJX9FpXPLhoUoTP11kztc8UUWRntWLh1MMXHRDRJCsw3NScZ3r6STxDAqMQaXZzCdsbkvWLyqhMfa3EZcsw",
  "key4": "43fA7pvoG4JghJTKmQaYAMkGPJCQJpxSWvT7Vu3zLBUJdtabFhSGvPMWBa9tXythDUdcR62HHGyKVfHTPfMPRHYj",
  "key5": "5Z2XWzMiKW3dKZbMg5jKnXh3jkJs4J9ywahkK2vn6HmawgGhUm3gFPFBZ6cxaw8NyD5pp2uXwmGdjtva5zrLyL9B",
  "key6": "5GQeLtb1w9r3PcQkZfmefwTMYQgdYut2Ki6K6mNXn62B4nUD8MS4jKZT3zyTA3qNAGooTVT8AZXS7R9TmsXHwasH",
  "key7": "65tfZqUPSSE93NsudUdRSqbQwyHJeiBbrexF5ee2BNnDqKjQYNkBMJumSNYkbAKG5y8FZX8nZrXYpBiH6r2mntBP",
  "key8": "3ZfWBgfzpUcjeyaASh1xw27YG1uF8XCfaMrnhmtTJd93UcGtuE29B97FCvnSvg8vh3TmD1dQLcm9bLukUFH66WmM",
  "key9": "4bstmsqHJpkqkMgsfXn2CQ8N8EHKxX6j8fLSRdjoKQeEDTGE9cJR9Low7kCh9DKRJ8ipEYymZzviK2nZcbXmD1rP",
  "key10": "4xyNFjsApsmNBgdP7RwEriuuVHKACKMdrjgQcMfRaRix2Ecj9a4oivUdSKih6JrnYNfw8Qc227e359CooqufGzk5",
  "key11": "2rLvezNi2adWmeVfuy6tddoakxBm8WcgVr8TcSzZ15v8pcxWRS2t79UUANmda5zYUxoG7ZWVbrS3DZ7gw7gj35NK",
  "key12": "3fa3H38PbGRdpGUCNf3Fm8mRZEkcRjc584fvgKzYDUceUh7u4vA9fMPSBaHo8oXgb4PfSaoVnrJUqxgu8MBoYNuQ",
  "key13": "5shkrfPfmvooqC5FgfR8Hk47JVCLYVkL6uFgUKP2G65oZ4wnqsvRYFfnxsLxYYJaXhzHQfniVFbfYNFQ13n6m2qQ",
  "key14": "2UT8K7RULiyhStsgDcCBd6qAN933Bxuzz6sLhdZz59dTCUNuzraBWeftUXSFCv2tY8PX7oborRa8VXJTCErGzrgR",
  "key15": "24JcW48rAGJFA6F9edqu8KzVNgTY2xarPdGNuzK2R65gUBqpLFp4jTgxyg19ZX8Cr6iguoz341f51N7zy5Y6W8LC",
  "key16": "3nZzf5DjSjuUCJEDkBrpyRACG3d3aEyo18wM7b5PLwSfDDm4LXa4sCyyarK43g3aR1MTkBjFSSoqFaj8DqLvN3Az",
  "key17": "4zm7kiuQ8fQvgyojk2uQ3xBwZYQio89w7vB36UJ84gNSHybYEVeBYSkX5xYJtrmFrLrZ6bDFyCkBYAb7r5J4ffPx",
  "key18": "3YZTKx1zq8Br12Wc6TVCM5Ra4bLRvv7XLTbtiVMQXBvgDW9xZuGYs7ci9q2zp3w2GwUv211TbgvzUNBoWZVuVQKS",
  "key19": "24baM3ooNtM8ebkhnhHog1YGFauRW87YhJzW9EQSVLXYYcTh7Ya5rjdDXBBo8DnhSFP7DABmJaCsv6kQRJrRYaAq",
  "key20": "2Q6CKTF2AD8uDQ1UGgG9MfHXmVNybidsqA8WPVqiAe57y7xAPLCA2baNuiQSvWMZQccuwfVo8dJNi9Ap7ZLoKYzG",
  "key21": "3rbvYUJsqTsXqyoSGZtMeJ3MrMYxa4A2DQVA6PEXgFD5pvUfV5Baiv4LAsLZki6B1k2snqdahiQQfrs9Dy9Kse7S",
  "key22": "4rVDpsnq8Nk9SwcZkPxRDGzZJKk26oBKDCYTdAjqZ1PsRCHUexQbsfQVC4QKjwJdxYN8CmbEfz3XzeKCXFbo8Ee5",
  "key23": "PZPtumomRdbmbVUB7xCWj8wHwZn5mqSGYQW2XTcAQCXpWnH7qeHQiUsvFzYsswajCzgBiDYtLzTynvYg1Zck85u",
  "key24": "4BS9TERCAUSekytiYuZitmvWrBihM7DJ3DzrxMzPzNRE6B2iGAZX9TQY8PGr3h5YPAhzwZQZZevd2Zb8bVL4Uckm",
  "key25": "51AUgLYt3WNDxmi3sNxGSbCeoqsdzZexFH8op8z14avwC2PecFfgSiR1CsutG481jmxfDujy9BGPvKTzaRUTCc5B",
  "key26": "4dMggFVn18vaLGwxq7b8rCeuDiFjcHVHev2SxTdMcVRQzEdyLpG2McaB55y6mRsZ53xW6cg9BxvWoJg14hwkJp68",
  "key27": "33C76RworeYT9URrMLVCjYWtRBmTo6YiQjMsAst74jTTYgLiUXpyphMe5Ts7e6F6JJzgZT8Kt18YxswXqi62iohq",
  "key28": "21tZHvo3o9eq6sASE4fXkQwgUuByF3iNFmjZHPq7cCNQYN5uyrJqzxTFwXWucvTW126ysssF6KQBHDbPU6GQS8P9",
  "key29": "5HjBuCQrEYVrUENXEbxedGYT4aUkRz4WnMTVi5W62e1kQ5MfYgVWENx51oSQdDF9yVN3GizqRdM61iaet2HejywF"
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
