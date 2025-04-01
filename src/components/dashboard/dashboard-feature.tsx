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
    "2JVfSQ2YhdW4iSzvMAATYBoyBtP96E4vqTSs7CLRjL4prUNdQZ4XKABiPoGbAn53SJvCwuGptyK7Sp3T5VwLUACo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PZbotyszboV2XngJAzZRqfW4hGx5br3S3nS1PDCeL8D6mq9gv3jWrTgDaSCRvYGgkL3ER81QG7rrYrLgyiCJhWq",
  "key1": "4xqh2VCqKbR6WhijYjT6esbXKEZcLCTc2gwVk1WwEPLihuUb7KVFw6sdMufKG6xsTXsbyHqntPVTubexLQpjCTab",
  "key2": "3bjWchNSqxAT8QZhJfHYf3Lu1JDdedJpcEXoTBq543YnffCjJzqtpHCRG1wRao8XQg9juTd3qi3SjotvRgvJnvjR",
  "key3": "4MvXhHVLH4Y2eBFrn3LYpNuJzu8TxwdhRUMseK28Yszu93r8s9tw4eRLAopruoWoR68mnRnQEYQQUkoQyAxQzsD6",
  "key4": "2iRjfjoHzj4Zob1HgUQh6adPCFvRYZHqm4WB2txeGTLR4ccrdbJzu6R2Gye2CiLCe3jw21ei4M79Y4Zy1W8H5fby",
  "key5": "3Vf5w1UraG6mgbZVHHEX6JQehHVL498pPa6uJm6Crj6822U7Zh7cqneZGAhFCs9B6UMJcN6hojouGe1vK2BjwSDe",
  "key6": "26o3XL66jfUiwxRm9qY1JvaCvTJK3pJ3vkVjQLqVCKVkBy7Xa6tMs5RSGh3hcfX4Z7FBNJi8WVMuMQsnDMqQFpdX",
  "key7": "4hJNyvGHh37wpe3F5oRT6zADPDThCR2iLPZNhgAWY4STBZCyjGn7x8Xh4kimLAPpYDn1xzVHeACmTSouGycKJekK",
  "key8": "5WrCQ8ahqb4GsWwEzEUkySzdovDLPna7FAosCKTQSjSs4HmiDWgSyHVVbCgcvGN6TH3zsDj4ST9ouw8kX3QDq8eB",
  "key9": "3LLX33Hudoky3zzbXfHTihQQcZ2brZnjdr1rcpsKbGJmAEK5DFaTgkc1BCJWWAXwys5m95gXrpPZ9xutvHPNUvsZ",
  "key10": "hhGKZjJMaRF4W6M6BddXH6Wr4vYiycBMLXnDNGXhQmzHQEfAJ91nnMs3sxgXHj3WxWsxDn6qbJ9pnLWNeNbdn1q",
  "key11": "5Bo5BawATF5AeHEYNnMvf1YVVLuQsuht8GnJZXVwqpTn97C4DhXio6bvYBgNDArfYbMTb1riNaxT3BR8D53yPohF",
  "key12": "2zRSYKBCFHrww9NidPhbBzt24xk1Ts6rCF1CFHjXzwf4fUTcgsVJdHqE2W1eJkGwGpkAcuYDeBb6fUyEDd82DfBn",
  "key13": "eniUiTZ6RwL7wMBKnBGFtXsb7QupZYXb4SnUkZEFZKAsBraNTvw6r7UPx1VYm5YpVE5gzyKfqQQm5qPX6ExZpb5",
  "key14": "2hEyzBbXQfkuugkYMrsoGpJTqUgmCV76jyNM4xbJ3G12M45MnTC9DTX4sXcxo2KYwu9Fmi6fsqzkJwvZx1KQM4vm",
  "key15": "3zjeKuVQEfpGNeWBT4QpfLvtMnwnjUQLRraVqeNUyi4DFNtCHVzZSGZCSBSZaBfo4UHmdYYJbDZ9ZgeWxVv5uuug",
  "key16": "3Xc3BpKGLoUmDM21HkGkwgH1ofBcxfqY1V9PsBW8H7V2AvCXjxu6HpxK8zXF3Pv2yoLanCo2ckpXvd4WUtStsWdY",
  "key17": "ESkfNPqiB3GXGHQZkoS37PFycjndxkqu7jNsGZPYY44Z7LP5PayC82epuZENs5S58F9F1RD5cUNwnXiEhfJiE75",
  "key18": "3QRyhshVfr95fNU8RTL9wu3jwJGvn8NqCozm7JkDL3tvt6WpJzr7WZ3wysPr5UKPSLQRc3CEb9PG2cULQ1zwbUhN",
  "key19": "5FUgsEhL1cqEn2iAp1wZW6FAMCqps9q26wUXE7SNaH3nhjnNkRi3VsHw6ggu24YJUwdHjg5t8dUQinFnKccBBbyU",
  "key20": "4jDvzeFGJsqcf1fnZnbChXYdPQjREaEH4KwvYvVKKS4FPrTpUEEsHyDwdKoK2awGdxPFNHK1GoLx9oA7P1H4Ujc4",
  "key21": "4RL8VjyuYPQ8zjyy5kBkzRvPGne333vXGJeE8fcBnYzazxFgRfSAPTzS7idXV6kBU5mGUcAypPzRCUftYiJKrrsm",
  "key22": "2jDduXjgub4UpTT3AEqCj4W4q2c2o3c4QYWgWNsGxkL5eDx8ShGcPQvMbuYnHYFVnXNfPnJJabQrGSSD3tfiutDz",
  "key23": "5iiAt74acjdmhcNLhsyRwJexJreSBMX8v7weKJkqUjRopFMpCt4sJm5Ybe6RRtaV57xcaEYJ7NnFFK2tPrCakNDf",
  "key24": "2fHzEb7TQhZqRmZJZkNaoivsfFfmtntKYehnrAwN5iNpRJQi4H4k1iTa6ZzjAMHJioQ8kndMaE8duUcwWfYFY9sD",
  "key25": "2jYbNFxXGDXdx2DvwgmDzicCrU6U9hWz3gFUY85xQwPbLfDRxBKFv7fX5N8GZzS8xmbesY3phRucj7W1MkKuhtZL",
  "key26": "hr4MGdKsHLg7Yjf2irR24xvKjNf3MWpjEjBkQGJzKX4mGfpVEWnBCrKifoJzrXkuU3EvFVAXaj2iJyE3mYQwpZL"
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
