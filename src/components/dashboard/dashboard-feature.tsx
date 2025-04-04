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
    "5aLeKjYaJEvt4z75N6PBsicUMUq24taWxL6wiTZkFc7eGvwnMknNR4QQ7pyAz1ZfSfPFSHtG54XdEsw8bd3o47ff"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57HK2b3LjX8ZuQEcvDbW9wRcC5dn1UuuzgW6K4ybZZXHfd97M2CeFcnQUBKxvgH7HGQfSGsj8Z21ZAbepopb8E1U",
  "key1": "hMWMPKeJzQymdB2xNXFB6FvKvFJCm1tPL8dn1tRZiF9gsyASCwzRxEKoAfvGUNK3VP6AXQsp6TJ23UUn6gw7UBg",
  "key2": "3ib8irX7TLrYBNbXGSoUrhj3a7LRe9ehicFbNbC2WbzELf44c55JqNwJHPXoWqomSNj9wXt9g5LEjbrAsegYq6Lh",
  "key3": "3yanq9qxfvAD9M6FXdSvpM6SDHXyvEQmNkkPvTuTyp1tGGPgA8dYyrBNtaAdekPPU2anPow1Vq23N1t924a5oaoe",
  "key4": "4r8n6QW6WwrJ4kFqVBJANovseYVXbng6jkLq3ArcJaH4EAgc2BKRnmFn5PRBzRN6RFvu4dRXjjaBeuFtdQygL1Li",
  "key5": "3Lvfj2GNM7SZXfNwPvvErCYpaRAm51EJhp4NqZXhL8DCRR5eyJCoSyMnHAD4p8TgQsvr2hQUYyTabPNNJAdKPqQq",
  "key6": "4PrdyVSzcCv5jFM8gvUnJpxtidTW5EwGQsiLBnMoyFC6QHVyKBmJ8XVEUxnZvhewAJvDuoE9BUjGg9F3XFYcH8gn",
  "key7": "2Y77eAoTdsRTWSvsYakLf7By1SgE3ogwkh5EjSHDw9ggigLQfpq281i2tQJ9k3T1iH3VjEsy2YAMor2SEhhPsThd",
  "key8": "2vJostCYaJN6CftY4fVwvtcHydgpXsX49WyMjuzJcJCac5xCL5QJ493Fu76Xou2rsjSHDNuh6kpQA8sd3RrNRMHP",
  "key9": "BQDpNRrHvNfo1zKqYXib2WTaSPxZb55KuqakR1aKk4f21bHBzVznMsx6vW1YFkBRTRCkzhgeySEQxi91j4scUZc",
  "key10": "3YxoGRP7pjyfwwWRgKZhNXgzQm3uAyGQyanuVNvGjfS3hE6uD65tLADqkxmw7UJSpWYFHb1gM2xNR1wztXtQVicb",
  "key11": "4DazLVMqVBxnFAMvnS759qwACqd765uFhxUYof1MWY1YxyL8EV8cZGuVWXvLQKCJfEhvYyFU8hfMD8GsqkFJ3V93",
  "key12": "36qWwW5u3TQ4QosbFuQRFZGCUpxGUboGoFFp5v9UrHGgw2o8oxkmji38mvMbqK9ZmPXyNn7ufmiprFVgNi6C2TvT",
  "key13": "3vfog3eokuJeWJsqyKsBvDpnmkbZ8GuwFkoarqwzR9nsE9cZDW2Wex3Ws5Ku6eQDxJhYxANpJN1WaKPmuRnAoB33",
  "key14": "5d6cTZboLfav68Zeco4giuQPGSBK5L4FgUGtUYaa8vemw9fLTWhhLiputsNMXhUBDgSb7Gzk2P7mjjyfT9Rnh2jm",
  "key15": "4cWoUhRocfQBcrMuCpctnK2x6Ygrk2zZssq8vf3Y8DTj8eFVtzy7DJdLikA5EtZpod3TSxjjF8cakrwSaViXwmUU",
  "key16": "UsmMkRuTJfew2JWTufm9gkHfPLgK8ZZwq1W92UyT4cjrohwMP6vpKGxdZxaX3p3W4SmsY1Uxbi6CTUDj6YnycJq",
  "key17": "6154KNiAPng9MVZkpppF3Y12FX2vTyexkSvEKek8m5Y3d82VnhdmfnVMeCHzDZdMJAiUntqw2V5CJndSweep34B6",
  "key18": "4NvVG8kAkKCVNsFCQTmpZjTX7HVNzjH4GXgNGwgu3yCDMfiQRQ4d7UwpDL39orVjsRHP2sMqP9NQAKyqYAE83ebM",
  "key19": "5TZHmxzUTqF4K5k3wJYPXV1ucMZfLX6V12dnTuEVTPDwq6xqURR9SX7ZCtLnWs9uK6WmTVajtsHV8St87NzsHTtJ",
  "key20": "4GVBah8BiL5TUij3XWJ3Qs6zbFr7Si1mvJPCfmuH4vgLRQbNnoZd3dakHJXX8dbpfeZqsccMLGixZcn8nTEJSbzU",
  "key21": "3WrosMcoaT5N3CiAMc5fKjGWb2jsQxVHeqjDKAAvdzkTqr1Wn4kWHzorQyL6JjBUY7qQHYGmqtkjehTdMYD5Ta4y",
  "key22": "4D7yXFfZFfb9U1EaGZxqwuSHqvtgnV1zZQMgYhkZiRGWbrpZq4sEZdJger1gAMBBMdY4ksuhgYVuporvRdk2HkST",
  "key23": "3mT7LpwbTgEu39Gsm1rDL2qwZJ5mN9jyYvrqWgGLDzu6ThQC6ik2UEKur3wJtzCNBAiU2sWF1wC7egG7Dkv16Jum",
  "key24": "29wV5d8SRt7UJ7ftmGvFcqhV4gQxACEWx1bxKvwLfsmwfZyLXqnhM66Z4a5PekvbtqcDYBZbKWbeZR23PfppKMw4",
  "key25": "33tLvoPUpLdA88LbEBnvLivqADayXf4UqQ5f6E9wvzmpYYu6f1PM5WFWARhNhaGnkhmaFBhD8pzS7hisyY3YScas",
  "key26": "sktz6h7cHKMR4LBHMu4pWZCsgFFB7gpQuf6UUtoBXwP5KVThBUUwVjeP3DKubZuaFYJaJgQt8NGt4LVr3HZoQYG",
  "key27": "v19rDHTx8mCheBQ8PwNKTjxEB2mqEx5rB3AQXzCQpQBbZAZyrsiNqn9S7zjJ75tP3BVvfmoqoAYUDpKhJgxE7Wv",
  "key28": "126Eoa2risj1sdaBtHHCtLXnwKmtsL2CjyWTcJuUnT96ErWxrh1BZECr6gqgAkgqQ8afLRArSsNErgUwwiBE5znV",
  "key29": "3benNc4YsztKbVRGsKgDVxF7EGed22sPNUBDnZq5AmiHQ1jo3G9X8AAseboyeH5YNNvEa6CrFb6n7TeuCfDAggBG",
  "key30": "2WUqXvgfw7mKG8yxFtGDZduaiHPH6BJETBVGwyvMiXX8RU2E6AkPxyV7ZzwpG3ZkrQKXUBWxc8cp7ZvsdFKZt7Wt",
  "key31": "YurmkowxAUYDHko1vo4v8bV8b4X82jsszL6EmuAUcYhq7QqLXtGk4XwJoRs2AqAhpViquTFRCzcspuJRen4JSZb"
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
