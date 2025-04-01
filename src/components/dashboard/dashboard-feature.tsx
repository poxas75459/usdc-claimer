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
    "VAr62pXhHHzKHmj2ixnFWi5ZhbMpJni6BYfXwG1U7sdvyNktk5ou9yseyx5w25KT8tq3F79efQgJ9z3PvBPjVt8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YRra1CzXV8JWa1skSshRxnrsLw9vEVYxy3657FP6aqjfXKHn83Ps6geEC8WASvNQLtRS6bdjVEzcuXSptWG79Co",
  "key1": "4irEQWXqKRAoq37mP5HEYGbdks1D4PagnYWmmben5x73cG5wtwk7G6VejRMDykWUCU7cAGGCpKqohZMV9aa4aMAf",
  "key2": "332TKgeVmTinmV1y2y6SBcDDkds7J9pvqsj7HcVSSEsxXeHyUxqoAPs66j4QVsiJn8DYdLB7NFWqMkfsS4wsCWWU",
  "key3": "JfjEhJrFKjUhhGuXAyAurQBVGdVYGULpAgxhqedRdiwMif6fFvV9zFAkdL21pPSBRTSq4vGoAEZfjYiSCTPpamo",
  "key4": "aF6FJhZB4dh8xGgvE5XnHy2SD3tRQR41mLHqbNHXJSJZu6ZXktWv726BpGWGJgaBaPiL3BDfq5PMS1Q4HEfnVik",
  "key5": "4uckyYNVJPmp1QXghn6Rssyhr2jFCFLv5S11zSjTiTwqLGq4oFjWtNXvdKfbWP2YEALW3XHujRVPJwuywPxkwu63",
  "key6": "3bMM3griYepRpbdwib57h37ut2s2MozwEPTb5u53YYNrVNYWFPt8JmmJpSgDWgBvkjCw1nfFTqsV9QQfsASLqGw8",
  "key7": "48mpPRiWRo1vCcbit3h2E1wqZkKcdyrHFu2yGu6arQMyHEsxo37FhgSZPZCqmWf1QH6RuDCw98eR3LG4YdSzQHky",
  "key8": "2wCgXH7NDTv2d4tcaRa5p85u6KsKNWzrJgy9V8ciyUWP5yT83KVs3doeqKGDXm85A9kZAqFeqSCRMXfKuxoGtVm9",
  "key9": "5XozXgoFwQShuE7CrUnbAmGEVkbiuXwcuJdHxJcD9aTZ7Mr9pVgHYWSeGrYTW9MvwzACWJA9RVXnpvgnMb8dbFF7",
  "key10": "2NsQokJ6v8WHLedztAHLMfRxnvzqTCBE8f7vzbJ2LXucnDkVUfw3RL4qhfaFxySuk9c21TrnRbLAkv3iTSPvVRfR",
  "key11": "3Nww1iFfWkxWq2Vr7vz2Lx8gCd3FztfWQb52mRuqx9WDaQGJAMbRL2AicYv1tMkFEAojFmcDpVogS1EGLSHmsrb6",
  "key12": "538SauWbdrfybby4v42sknBw5JB4db2UxRPsTenFR1JQFnX4j3fugFcigh55D4pN8V5FAkrudbbgjk69YoLC5zeS",
  "key13": "5eQyKeYkg6eBwGuayWNV5Ht8Ds7bwHaMYsznLNDsJNLYy1waa48G13V77JWGZF2bjuemeMC69z17qH7nEVedihud",
  "key14": "3kVf5JdVUYPXiYtcQ4BoANevKidfaEpVM5Vnc3NaDUdkrKbvAWVuHK8942HSB96Ym2wNk7Qe1EReMZKVtE6emG9m",
  "key15": "4iyCz7T4aUygGpYCw1T32WopCN9mJFsysxib8GETNZxJ6fKmKRwv7KuMvfFFe3Ughr6CfjdDmpTAzQf94QjJZn11",
  "key16": "5uVy87e15k5dBNdmdhHCSA2dN4fqvc6p5zMY2VjcdAQtG2hLczKZMwvJ2jjuWoGauWED1QbabVEodfMDjp9JKCmp",
  "key17": "2dELVgQESD6D58ytAgBCx18LbuundyxiqFtLoDjovAw8bjBYuBy3bZjn7NWbTyZChKVpRCCXri1CZvKus91vVcvs",
  "key18": "3FjgDY2zdfPjXYF9e9USCzXDG5QSi8msPKQdAYqpQbQqGG7XKTPjUWV62bY4ZZYbMCaFjq4aFCFqtuYFvh1bfLg1",
  "key19": "3MxicSYdUK7d5jzB1ca4i2itqCYraZxfts4QcWkhCP97SyunvWe1xULiLJNdeEuZT95pFwMpGyUGTRuN1DkvHrEm",
  "key20": "foTaKYvZJeGZDfeeNzXMNG5NJVX73QvvAL3CZCqG5S7bhjt1ohh8Gi4t8aGae4Y1CMLSRFa3evrEF5fmNTGfq4e",
  "key21": "5NzdsR5tLdkmroqnFVHC9oUFykix7XmCNNPF7a3C9qoR4M9mBNyWVwcyCq9W6pb4XdPkKuu7vAsEJAgDMud59GHc",
  "key22": "2DoknaoytpiRLDyWh38Y93H7qAP7Tk8LMW21u79S6WuWL4LvU8Ux2b3UvUtoFQFMZFExKBttPMTV3knShKbMjA4",
  "key23": "3QDpMb1Ry9wKWpi2heKjYSqK2XiRGcrUCKWNVwpTtEap5uxretaJTV3pSgN5pHkP7aTZx3Xu13YZPfiTQVUbd3Y7",
  "key24": "5yVatB4Rw8YaJZXKExrcxnLTVrcLnActAzmoXackFevr2f5MDDHEAggRGzDFwVWeRB68zN4sr9HbRsxiuqKbwMGK",
  "key25": "5EGxSdhajGHHEMG5KHCUnHkAsifXikMxvSuxuNM3ru24iWjvDPxK8TSZoatRJ8JmxxvoV5JRMGuTKmreqmS9WZ9Z",
  "key26": "2iXDgiJ7heFEwuQ2md2wYXXrp5UX82sDTuWaqGenhJRWAj8hpb6gDDQuZmGmd7vsJFSu1hLv3wLbygup7KETRuSV"
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
