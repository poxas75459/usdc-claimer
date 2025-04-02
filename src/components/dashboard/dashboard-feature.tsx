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
    "2ygz4rnkUuebgNnJjkXxJEXRfQ6RRFsLcMKHrHhb97FoPB169eS6G9yGHcnqUbZuaU1BjQBhiJwfRbr8mkoSDpDS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DiYZMtzm5MSvvcNHYF8iyuKEoh9uGNe8y7WKfBy2hUQ6AvaLbbvV48g34kfg1am3KZGP4JJsZeNaSVjKxXwAftm",
  "key1": "3NwNir5HNxq5cmCehmAteGXr3G2iVM5cr1JkKuhPUbgUq9G2wQeQWbkG1839rPV55KdaVyMHLPZYR3mzhxUXpc94",
  "key2": "4FW5rZ7tiSudqfsow9A2UhxaA7X6r82k1gR1XUyLyvhZdpQ2kC2vd4aR1CA7W9hZhhvX2jZNwpLtWDfQtS7REsUd",
  "key3": "e3mR1136JwPpv39iuvMUP2ftdyj87XRAaRg1KL23DwhmxdpP7TMrNQqM3zmjWNLdVbgvXLurmwPGxAiiHRTBK4M",
  "key4": "5Kc1zY9u6ynSnKhrytmJiaReJgPNCCr8cD5RC9TzPdnN4rY7cLwJqFxi8g6nJFeauukfkatq3VgeEkZnPcuWA7cY",
  "key5": "3qaB5kUhUtPQPSHqx7FVNE6M8fw3TzRDkofFnkgX51jZNtPpg86mEX64fp4BfU8xazRrWEk9142FohxzrwzAag5A",
  "key6": "KiHK92Mn2X4DEjh4L5rq9oa17W2ajJohuXsdYb8MZW28HGG9j6iNYH5sLzf6MpaTUkfjSc2L4ErkPV6XyZ8Lhm1",
  "key7": "5JXpso7VWjKc1AfdQEMFBnbXbJTz72nj2JJQA8KiveCd5UEGDT4k5HcQUbEAsiyhqqgF256g8FCZwYMjm6wxwnvq",
  "key8": "5FzntnEdCLjyx94qZsXH14EBbmD9qkeDMwqCEaYvPCF3AvT8XAqrxQc1qNc21FJdo3rN5wzkAPFHhVTPHnPf2XEX",
  "key9": "e656eeqZsfJzpo2MryPRfH2hdF2HN1whPUpyfD4w2ZVYocPtxJRd9vbxZhUWTD2UbEALTBFP7X8H8SYep6bSksL",
  "key10": "5hhAjYwLZ5VNYHRkBumoKb9FJ7XnSBGbx5P4trMZ6fex4ocgxNCtuqVcb4UCsy2YGyc2djBJWYVqhiKxnE6JFiMZ",
  "key11": "3Qog9ym5UYLpSmP4zoUZYgit94d4tfE5Wb26RaAAUhDnjGZHRL1J7mTyZf51s6Hi5YkCGv4r5QvRHPZLyuBXdo6W",
  "key12": "aywTp4Puid1AU1z6tSxG98BYj2pvV2RAqwLv4EQf47VsAw1JjBBtw6FFsCEUocw1p5qvN7q9ErPjA2S6ajtF6Jx",
  "key13": "nSuYgMSeSAGUShHJY3u5aoKyrbdd4TBmYHuiqNseY1mXJCaw72ow8GVcrDXjVKLemU64YaFgsrpfmZS9xaX8t6j",
  "key14": "38uZanpzvmiNusEB2akouFF817WVLQCwNneFyaATqbjkGf2zkAyCaFaQsrSum4RhtgvwiuzaRym5MoEAQSANnpd",
  "key15": "5DKszzafXTeP3KGR8NgqD5XJgw2vtFKayJ4zEvzdW3uqup62to6VvRv9es57cmw1bdnC7PLa9cqhifAsEpppRJBD",
  "key16": "CJHxDgGbWiwiAnSegTe4cBsh8tDNLUKwLNxz5fKbEKkpANsHW7FXfvKowkPqwCSGX49pTE7LavZBBXRaKg6mzcs",
  "key17": "CYTnJhUXZ7mbhYDuzggiWrU3mFmWQ2gvQWbmjHiy4jdpP6Xgp4j4Xgp6yhgLfzRw2CHtiKdUzeKXaUEe5PjPbcd",
  "key18": "vYPDGLH2YSREA2hGDf1p8BDrQ21Y8by9A4ayL7n7Kwa3fqQpJdxDFpG8StHszkSyfYwiLSfzkAxCyvwq8vXTZix",
  "key19": "26PtmxYDuQ79yAKuF6TzJVkkvbyYYK8hxR7AvNSJ1n6vouw8nbhsvwPPWQavK4cHv1RL5miCX2Q9VU4qU39AweHF",
  "key20": "3qJg2d9VbB6vMhrFXJqqqMdvQfcEtRrqzBJocvGjYBX3WqXsgiaQeGRsvmyM82AYgpWRpEnk9UpYYkMWSUrupwKj",
  "key21": "9PqCvAY3TbUYfsMbCHJxo7LfniepnYvNYv94FtsdSnZw7iKEeZ1mZCxxPV7Ps6XqEEhrFuQbrN34QEssSRheuBX",
  "key22": "56dZahZphhHUpkBDcC9KV2RP3HDBXdqBqDenq3u19iTQZ9yGgq62tzDegYw9b93kor6WBWGJwfJ3TAPb3AYQ84Wt",
  "key23": "35ShRgsGT87PZ1afNKVyjQRdMwwsSWn2V38pDhTjktU3XufCUXxgdcSh9JQ1gkP8uqDCBwLu4ffNSQ9zDF7ds3Ut",
  "key24": "5Aij7n4wdQQNtWQMZLs9eUAi9cneVVteYJzsWeKSXBv5WsPT4TncZNwoRNhGr4NbotvkwLWMyCYH78KWjgvCqbtT",
  "key25": "3tUnAdQ9Uzt8PC1zEYExzr34nvjyv1z1VZsNezTw2AJcHbNMEK131CSm6DKUCZ3ZwqhBkW19vYyewPd7hrDdQ5o7",
  "key26": "2wx5FkLhYKeuEozXKsnRoGAbZPyn8DJpZo4URwYsM18MgvK1KDsCd8ivXtWAPJqB8iRwygHVPn3RZvgprEo7gg9r",
  "key27": "5aCSwMVstLbBB5Y7MEv1HLexEq4FBnJNxvA88wCynN435xVq9q8DH6RZ9tU4MYGZw6ZM2LcH69wqzoEb86Ddi7tz",
  "key28": "25yagaZxe2EBKDzku7H5fH4SyBqfVZYBEpeZHFF3GkqgJETHeNR98tHJ1TDdzY6SBLFRg7CojkQ8ZWobUiaVvP8s"
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
