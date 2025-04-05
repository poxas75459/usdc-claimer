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
    "4294U2H4Nzu3wkwJ85bNafniwnX92HdPvBWCHdQ1sjkmntTV5dKhposayqF555PssHYKeYwbyjgaUhzZJuDvfBi3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KbMcbduJGdqFCU64NGD7VBhH9hZbZAoHpRqVN8rshTtAEcTHYoCb7uHmu49q9N5XDiHMr35fQEGFGzoPGBcg272",
  "key1": "4qyiv9Yz5rSXwahQcV3TAScEqUsTxwxCRBaZ6NaiRsoXQSWBcUcoAkbMV9ahd1QwVF6tBveaWSNhmLSmZmb6oF4H",
  "key2": "4T9pxEE9QePfn2xALWybfVSXaDFEj5txmcJQCf7RzibwGXkV5B7ND1EueH6aS6owCnAw8UGM6W2zMjf6BCbEbEtJ",
  "key3": "bT3F4QNugzeJ5fw2yeUhDhFyKFXBv7MjYiomUnmyhjbggs7mstudbTxMjUvBV7fCvjW2eopx7Ku46BB5cpvfHd2",
  "key4": "4qPWXkyMndbwhY9JscpKdWA5joHYoWVEurSgM3yVorcbU2CN8QBCAeUDVStU7BLmxWGpCg8AAmY5icYazsr7t1fh",
  "key5": "5YtMyxKZnZwWtf2dp85hDTeL1VKDKU5QHUauJEqH3GXkq1kfbkcV4rdjmgVCopTvYZdtff9TydCoSN5ii5D9mw4c",
  "key6": "4exvgf1DZKXf1nAcJk9gmVF23diRLjFQKuv4AHnCHXxvdXqhVStdDyfMJQKqSu2RpqkRxvd5wyjuxzE4U9rxSgbi",
  "key7": "5GfnVzAwR6QpJM5ZciFqNz3HP9MwpaNUvoWpg9vQMWzpHkuw8qKaHifvUzJWYC6Va9AkfA2uZ8R6FkhCmU1ok4E5",
  "key8": "4WbMfX7Cjze1grSc92xtBiXYJ8bek26cRATwPr2zunYSvqYAoSfgbKazKZhY5MBCeaynzfzTzyw8yY4rrbgqFuh9",
  "key9": "ZKqG1q9FvjsgrjxnzuJYuU7ukiVG1oWFPGiNykNzhY5FzkNcsqYrLcWgDY3LWRwxEd8HpmPWs7MCPznKi8cD21X",
  "key10": "1Luh46zGcUefpLcD4KQaWDigRNpWnFdWq5zSfEno1PUtEYkmapTnaRdi5RGV5pCtQNRSpyT8gAxeNCtMHR4p3G4",
  "key11": "2V76NMiWCoes1AndYTiNWmjN4xaYffN8QP4Ea1kJ3Lrcje7rXxBZH3DRSdo9pbKL3Xm77xneirztUwEXgi53pjbS",
  "key12": "5sPxWVCvAPsTqNmSj2KULros9JeHwdSZkQkzDeMRC7rrwCGe3Yz8XPUH4CUBrjWLsX2vptcPXWaq2LQXER1eJDyD",
  "key13": "5ycqSX5aDyb5xoE7aUDTiT2bge3o8DdzpygmHrLmR4QmsHndN98ibVW19FhYzqMdJPHB2KSudWXHCpAb36ab4u5m",
  "key14": "3KTPqwueRaWuvZ7m1RkYd687MBQ5eYCB3ByBXUta7kzCwWJd3tp1hjxycZp51jkiVYFuf93xuPChvan96FyQLeJH",
  "key15": "62t3qMDvFLbMfK1X7jNGX6m1PShuZW4ahg3X67oAjHbiPihZXuLcP9LktzidjScKcbdcGeaUWZhrDVHPYqp8Sb8W",
  "key16": "E89bJqv8MXb1adnJxyhPDpFaAGSLwLVK9aAy2v9snE1BW2dotpmhJufp8iD63JgzjbgvxmmUnfFKihnbg8yBeEV",
  "key17": "WAZbRbC3zYve4mULYPwz9rr9NxwArgFxBpvrGp74yNAefHHPrzVfFUd2JDNKKkNZDAY3HCWZuhwnxQsA3SyiN36",
  "key18": "5nmnNBA7EDjPbaymAuubqR37XqaWAgWZuTXLWVNTrQE7D6dQr7FmoUd3jeouaTrS6mGBgy8sKEvE9WKGtR3EySBU",
  "key19": "44r8S8XLa2zszp6YN22uQmG9BhrcnU1ST2b9rMe6fDh1e3sFE5QWgixCJWYZQysn9GfmoMawUj2kqPaSYsrh4Kou",
  "key20": "5152hE2CfgJLB1TzuDEhJiZQ3NCjkxiu3RCZByiiWba3xgD1y7icsef7tCgRAuoUe5dspNWQUD4Y9axqb1LDWmi9",
  "key21": "44Eh3uzKwgDXyEUdSExkKBtb3CtrrJ9SJJQXkrivpN1KRagezosZzfyDnM8CKHSAJCcZkCK985HqrDQo4NdbGJMP",
  "key22": "4fQd4YAdHakzXTQnt7s3QZpPVEwb79K36yMD2avvkq6SjJYNytJek3piZqwczyf6r4MkLbvnnrBK8LxDGA8ih3d4",
  "key23": "5wze8uZ8PtuGRbiYyLq5c67KaUv7JavM65xRHdF46sDNhg3gAJJ8MKksB8wjtEfoQ8tBSGRYHjYP5ctfQxY1NC5E",
  "key24": "4G3pZi7iTDGo4FhRxY9cF3gLxRHL9v2cE6i5HLZSqTzsj9VnwYaXcjYwhcGn9VkYmh3Z2gVQKC6eqEmPqdfTnWoc",
  "key25": "62tQX8QJS4KZ5xaRsvRWkpGMn6amSpNpNdc6tgfXeLPfbYg4Kt5gz381Vck614KrGoqsMNfdT67BmXxCjwgKvBXq",
  "key26": "4gdaa4SXJpCqNVodPkwSHkpCwJKMDDbJEpuE9RhdqkJCPL53rop1W7HJjLvyvZbcZ8kuL1C4ZCJ23vGpVoeq2NgQ"
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
