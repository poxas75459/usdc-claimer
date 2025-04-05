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
    "4cEoriVPecjeNNXBtmEQZrQtiUAC317ArxW4ZWhw9xx4Fgjx5n2LxRwCtZRkquBVx4YXi9SGX911BFKLBdTwgJt8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yAbA469CdHGMmQ9nLQxgiX2eBEgUaZVjvmCAAMkanWZTjm9L7KXbzfMaGz4uhYjKRFrpK36iVtUJB8VjHi9nDSx",
  "key1": "4TZa5EFCQco9ftY4cCPTtok4bCKywb7zCDXXDBonAgjrHn2UbLaCKhqPXvXtZRinL4eU66tNP3qHzD3Z7qXQkTzr",
  "key2": "27cpTLhjPGvkHwBPCBUdLQiLEGc95PMLcF3G9fqjMY4XGCELh8z7TFw25Q5GoCy14h3g8RgygmzEKBKsjqoobmy2",
  "key3": "3KMBJSsf8nE56zrRgrehZayDz8rCecTk4CxH6a5rDG9sfLHwdrCf26ghGfEMPV5BgnTb4jBh112Tdc8RpRMC4tBp",
  "key4": "5gvPxojHtYQADcV78aoscf4iEYiYevMmvNq6gDSVRyrn5uXy8b27etkzhuBC3wnBcG6xALwxPYDtPGAxBqeYLLkm",
  "key5": "2S6udUS7QwJYqhYqk2UVCapXeiUhVZRicaWWZX3pH2Daugjwb7HT1kyZADSmrVnaD1nGdACJFgiDrnoun5DfhVjh",
  "key6": "mbgcboxrTzEQ3gvC59uAh25CrLJ95LMoQZ88eUBHDsKZ2mtYxotLsCGMq1MCpXpuh46DRA88yHxdaC9NLCBQ8Ka",
  "key7": "3zrkN4JjiwQ3NChMaNY5RA7oRNquHcmAqJWrGYJwJd15BjTi7kS54nvpY9nfvcEb3HviPbaGueosGufNCMRowm1x",
  "key8": "63oCa7aAUg3qJPGrxssryrKR94Fkka8s3RHyJAdpWSgPks3TVAMeNbZszJ6tZwi5ncfPB6YockQX7aYJvyLSf1VV",
  "key9": "4F9346PKhuj41atuh4gpUFuJMHaV7fTQ86XUmJwQcCVX1Q7uu7Xs87WRPMPM8DKeuXDhTwNRAoYtxw3CZujjng8Z",
  "key10": "63nwLikxN7ZrbGhQQuiMuwVFWJN5j28iLxRH4vYSN5NKnTMd1XoNaJn9A2W7aTAVdeGn2kgr8QjUWXa5FwWU1ehB",
  "key11": "5yXnboQTzSznQt2Nm9Y6PVA3LBPupwdRMun75u4XEok6k3D893Y3fpLfvmQn6ZSVpDNe5YPtQvLwJw7Sk7vAs68z",
  "key12": "4hmDEexsuMfXpzeVKeqQnwDQ4JDbJuiPo7GbTDwmZUVseQuTRXKwbZ76DDj4NxiKKzmXJH5mXoxexk1u5kNqcqnH",
  "key13": "3rLvdSdivGFNHcYGXNBb1GkWwAADJZyBGmS8kRzksEZ6WqzCVj62np8dadey6uocMbHR2ceQduCjYb28dG2xVRwX",
  "key14": "676mXSCtqb3AdruoBLiZmYzRfxCaKQUGufWdKa1BBDD1pAyuTnfKiSVeCjebKTtdepaWfMWf3yxkNsgZApyj5ykj",
  "key15": "4SM4vZxcVzf3ntTBam6tgAdchwHrLW8rpD1AFsCpqD27WVCkF1RPBgUczmViry4qpH2xwwNmscxcHv6YwnpgJwZH",
  "key16": "5az9arvkhVbffvwZSGWXTJdqSEbe2EB1xRPBMR1CSP8T8znZedhcbT1ccDfRB7KmXkyKnnErmhjpwSdqH5LwyBSa",
  "key17": "35RPtbH8dynVHuqratwtKeAUehEjyiHbVDUQwViMf4ZvUHsz6d43yt4XeC9mFziZC367riSePKtcKndhiZ7r2Tju",
  "key18": "2P5TZ1mDsYJdtzuquizk3PQk82bvCstrJnRYSrGagGweLto2yfZbKdmSjFr1pQNttxh36NtK2DQAbMBhRBeUU6yz",
  "key19": "2Gv8BxGFe9UmtQa3RchpYPiKDwaycxtH7SrWU9BRnCChdYJiFtNfSZAXH2FDgwSz9AybKz5pCeH567hNnE7XzDLH",
  "key20": "37rziAZ2dE8SYGG9oHgxN5t1AoafMRpiUMtuCqqfRTJYSwYcnd8KQp5ViK1cn1FZJrzxyhjidpSkZt2UEtcNQnhu",
  "key21": "5Wfx3rN99w9rg87cXdCTbSUBxVMc7cTCJWkXC9NPn75PKJNuuSHTnHuUvbZcg2PtXYNAm2sSQ14pdxMpPLuFxg8S",
  "key22": "4CcB1sWEFy6NB1at3t6zBYz7LqjqbQNw4qDyWCXM8ccYv9bQqKuxN1yzkYVewF1wk5A7VCeCYQmws2Lmvp67T8jf",
  "key23": "5AnQhVMXr3niVNxppE1hyu24yyP4DVGQPzN3b4WQrQAKaGd82fRdzoAASAemYRD3tkQDytYfhaPqoBXwHJjbtNNq",
  "key24": "DbRkHUR6TFJYgH5iGzDVTrFMpnG93MjbanYm1KnFyq5MN2Vs63L7Xjk8HvSGYvvp4ECgxKoNFcoG7FGTqYzDaLY",
  "key25": "4em2hjmgtJ753JbJyayU5YDocQt3eyKMLcrjMoKJar7wuKJ7CY3xrc7TsXgux426cYdP6omwv2JNmMT9ZYyASdSj",
  "key26": "4131ZPieCRSFdMEducHVREejvs6bYXUAQFBqGuN4sonEfbycUmBkoNBzeXzJDm7Up1UUCRLASE4GUSGA693J5twm",
  "key27": "vapUvpbDrF7axEffzuSbNWhQ3RUfNsYAVuFATY8P9Gb76npbqcnr2oEMz9HA3fEMjwr1SNpTWF6zutT8C2q7ifC",
  "key28": "2QdWt9iwrocK1k7m6KVwY1NUC8dp94Mnztds4M4Buny3s9izTUdxJyNzFgfGFgRby82YcY1jN1h5TEwqnEZvxwjC",
  "key29": "4u88g9JE5ic8EcKJA2uC85VjRPHQ3pwVJKqUxwADKGDqzZTaCtUr6SGKb9Btv4FHNYcJrxton7jmYnqFndWoe1sH",
  "key30": "2dXzrZ8kaZEPjj3PhwdWKdVNuhi1FUAB6oyKYPjGu4GbMwvXoVjfYRWW2BYk8kKgCxtrhsBzmM7c4iVXqqevYGst",
  "key31": "45X5gW3m3E86YWQXNEvE5X6yS7cNMgP7UzeYtCxAPBVXLikWBLXRv6mcuKCSHEG5oUmxxtfqfgikByLYdHBvPhtp",
  "key32": "4Cvai8E13Nco8BnTr4X91z7ofT75LQXRnECDiJ1SsRsbcToaeFZtssKGRfo9g9GyRoMFmC4kSPLDYEULXHxDXwyY",
  "key33": "2Xq5uMLfbDLWvhschBKfVzofjr98qAduZRTDELGWfB1uDYMkwwSgWy3hqd5kBdyhJQCyaRnovgMs2x6AfqpFbuBa",
  "key34": "4w46rLHFf3iqSmruZNehpadBQs9a5F6kovtqnZdPPCqFezyZQxutxcB5AND4Nn6N7JfwrNmtzNk9xoUDjVBaFio6",
  "key35": "25YGsubSCtqo3Jts5rrapmoxNCw5wjR6My1dDS7SQBahDEJhFiWKYvvXAm6S4Vn5hY7dqqCibQc5m3cVszfpyExg",
  "key36": "4RXvSpPEgXrpJgKhSw3ujfdvy3weQ85G6DZmgTmJJFvS4YcNVTxBhtTWR2E3kzAFLmMvoVpb1rUx33Y9YMk79TXf",
  "key37": "5NVsDSNDnEAEf1vSD2ou8tCdUM7MhsS5U1dhdeiJU8DEhyKxRs8n4Tu5kRJuAuT8TuokJzSgKuCHAJ9cvDyA34eC"
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
