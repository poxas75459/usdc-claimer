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
    "37wTtVZHFZbvrTmz7XXNUSm4ULEPJjCeaHeeSzQ8eab5AWqZT6PTtKAF59VBiEne3G1dz97WeBnHXBByvYZT31nm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EfJCoLBfpLgEYRrtC5oP4qVaqfndSWCXrxQPia77WbKkwTHAQBHkdb8PBnNiEv1GLTMT3XbzBxtkWKpDmuPC9Qy",
  "key1": "4gH8sEVXYS9mf8DfDx1R7AhCWTtYwUf8SYywBe91KoxCs1rWMaYWhTLCnaZm6h9PtdSpYHVzMifdstGd3hCNJ7gf",
  "key2": "2snwMM3wutCoM8s9ZJAJa8sCKua4uCGZJb7FrsmHbKpY9c1Dq5v97rjrUzvH4M4uJHLc8NCHVsu6yFF5w3YCQER8",
  "key3": "5BSQQ53UrVKXpMACRUrBoiLTba8mRRp6d5Xt5iB1t1iXD7VbYHqA8aJRTQaTH23jRxRWBJkGPJV7gcZ4CLQYtsEc",
  "key4": "3qteGe6NwPVgguwYkUjjhCQjm9SkGLm8s9rPmRjNYYiLjEXuVgFEQ8ZHKTzUw22KwjDD6GwGb2JejN4QQdKRKvao",
  "key5": "5GNGiexM66dfQU1n4qFVv85grv14Z8Qjd3E3RxBiya6iUJLMGodFeGfzN9pFv3XUhTtA8DukxNffK3WhHqaVtSDc",
  "key6": "2ja7KPVK3S4VS1ZXg21dSgEp2QXUa7XpFxFDRA1GtorssmVaADgQSHUE2F1izkUjon9hSr1e6Y5v6sHtYC43giMG",
  "key7": "3bZdBsAv3xJajBuKXWh3aB8Dq9Hmjd2JmSLV7yYGExSNFNMkybTyU6vanpJL99KN1357bJxWpMLeGoNWWtjXySbo",
  "key8": "5MRKNPbpo1zwDgs6AxjFZGEjQsB8GrpH7Mi9P5ohTfCzSjZGBiERwSTPhFWF1E9B8yyW7CMqxAesK2CRGZrmevaY",
  "key9": "S6j777Gr6mvoXwfyUJgqYHbDm6XyTAD6jHb6YmaryCpkAPHj2s3KNLAY7U6tn6GUexfbWCVKGFfnmfqSxbQUzuH",
  "key10": "5sBv84Jk9F4Ao8gqJez4FPcooNKSLkAM9Beb3MiMMULK1GM9VeCpjmi1tAc7fv2SqBP6e3WaaiLzxrJCAWU8ru4d",
  "key11": "2x9CmBeKKSDb5fgLP3LyZfFaV2FrTZ2UfhSAGPwSmZUtRAox3no21d8xYGiTAVvY82BXdMgGnA5YThrMD8oD5Rc3",
  "key12": "4E69bYhGjxBJxKz2XAb9BePYZJxGCPrp7LhHZgvz9z15LnMPbHkjHyUiBz6gnfZCoMBdtGkhVxj3NsHvzQ3aBHch",
  "key13": "4zZXSeyhgvc9MGdsmuQG7v6w6WChJprgMmQNnvzRTSGZhXSbHh5DsUKh3hL8VL8xwFVPbeYBs29jYb8QLiLemb4G",
  "key14": "2RifHaYFB7nk5azunPrc4MkeJHWTSrmHCfQYXZkhYDsbYuK3iNGHxrRrXjNFVyzkPC1fJjD8KdZL1TcueMuneU4s",
  "key15": "5i2qEQzaSzYi5DvAuzJqXYd7e1S3wFcsfGU6t92ikc66pH92SBvRYrqDHzcaETDsqn1yRbVnLKkrhVv4vhzjWP4n",
  "key16": "4DwYoJ2NqiMxWdoKk1gN8ZvWoosXoLbHie83cqSK8wxhq5q4m19uJCnRkqMCBrb2is7DwJfBWszwswpCWkeBQpxz",
  "key17": "4kUy3e1LzKS8F2E5uNBiidT6Rkt2hTjyuhUW8CWpxvDieZFKVpCYBQdTK6dhzJGC24A6tBJUxTU5qQS9whfDSNRT",
  "key18": "5Qc4oAeLy9uHBFGwiPcHFu2pDXcehJosskdttn4QXFup56ZaHBjHCgD2Na5S3cfizfACcJKBThV82d7qeFXopxc2",
  "key19": "29crKvCkHbqYSjKvzoh2dQuAGpgyyc1ipKLixL4A97dkKXhgjVcvNgt3tf119dtq3U8tzuKSpGT1Xf4B1F5dLqDT",
  "key20": "5qwzL9YF2t1RwmWvK3j3N6kG7Sc3729J8BjnWxHfQeRJcMPeZvRRJ55q9M4TfcSEcyaDcRLV8VuR5KiwqdjNbqye",
  "key21": "53qozQp7QCNXiDE38QMF7Q5pZzSfEU65q2Ut7e1tqkWpgW8nAYnJM2TW3grSu5Rtc25FjCgBZeWJUttdf8XgeeKv",
  "key22": "5A7cEZF8mraV8g8T2jfPzLRKUf8wFAizaeymNobkPrAHg7UU9Dc1HHxRT7dNRHVGmZZtKijANxNGtHmweQdZX7Ec",
  "key23": "67ThY2bR7vyowE9ck6hn19GEYRr8pfcJoas4ZMJNUUUHskpL6XuHgCLqqYzyn4vQ58nbbT1GNDGcJQoHC8gdFW3y",
  "key24": "4vP2yvRmzvTW7dqPGYCkmXBJhq2VkLNtVhTNBeWxY5TuBneRuNfefoc4TSA2xvAYvtvTA7LoMrEpxZWeS8N9cbYM",
  "key25": "4b8CpJDSpNBDjon9oAN1bWt6QUgQQh8rhGTMf6WpuP4hzKNz1CH2AzXGAVYMktcj2ew5tkxEFjEgpZZZJK1SHdzQ",
  "key26": "4poVBVkQeXpMocwob2SArg3EeDeph3rUbsy7SngStgeCF8hErz1wkb8BsxyVdPiXXk5jZeHcgq68nyzXtidDYjwJ"
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
