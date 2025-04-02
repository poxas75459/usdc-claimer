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
    "3aJ8EBgmSpn4GmX23rppsUTcR7xZRaLS89K2SMCoXw1wAmSQRzmcGmE4rex6fyZybsb1NxpZzosPsc4p1zkaQoyH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HvEXQGQBW3ZTWHmFugLcWGLmJStBwxK6PSiLmXzhykWwLUaQb11tY3MUs3jviX7x9PPGBJw2HZAVbhnkHR3JT2b",
  "key1": "2fJ97CkqpGe33q69PfAqX3YbFe3o2BDQotuCccHGo4dJrJff73BYrL4NzyqX2ySPP3NMK1LZhoHxbRGoW4wmoyvJ",
  "key2": "RBy5whCvKVeUZrmgRo7ZKNat8oqh44oKNhcQR2XgqwL7WWu7NrahyRLz6qB5ygPVLMQi6m4mDv8NwDPVYHpfPzv",
  "key3": "F2sBwWBDke7azNPQqwy4WArSPF4A7NQ3PSagQox9LLh3uWt4R2hWEgwHJsArkkVTrymsL3LWHJCDM3fWfZnWcgP",
  "key4": "26ArRoqtFBySbJVaHu8JhQuxCj3XeBkWEk41kZajxqj2s8ryEsKLJf4NM5y4osQG8FWutLZBTUXTVXVJsume6fuk",
  "key5": "5Y3VmWDXBSL8Pn7bgCwJzUDxpzq2SYvpseEfrfx6NPe6o5jsfcxsPKzXfzz5CyeUUeivsPoBk18wS5LbHFX7BsAF",
  "key6": "Z4SLG52G6qQ8yMvnJNqoKX5UGB6sNQrGHH8wWtM8UTvjY2A91NAqWy3r19ojGZsRm8pvJL8ZYHVWTaNuNLP6YkT",
  "key7": "vrA1txBu7EQfqUj68HBtBxe5jwvKrPRECXVB3KbXQmJ4yevZj54itoXQD3Xp259AR89NV9uEdAQ6XQXLPcoGA4u",
  "key8": "5EQ3fGuZfduSEEq5vua7ZNr47wecq1SsQy5diMjRx5XScGotjJGUNdoFPmjHxusnAchFKwvGLEYyi4FP4EUJJyjJ",
  "key9": "3nkVEA4s1YcnmA8vxpCa2jyBSTn6Xm2PyWJAyznx2dRMifGXW1SRRgFrgJ3T3pXE67GJpwWWvCGbmD8Mwdd1Y4vk",
  "key10": "4UFJm4MKwsM8pZZxMFAsBU3HNrjfHXFrzEeWswsDYXzUjmqqdhbfhEjsP9vWzruqq18DcCPhCAykvYvYGwQjBFvT",
  "key11": "4eceB7kBCcorwisH1EijWcrPqmYBRz5JCnaVEPYqV2UkAybf56991XNXvfWC17TMBXMmHTfY2LpizwRRsib7pJhg",
  "key12": "4GRoE7L6WxBuiwcEN8RVEPyGxALrV74gvqdx8E9iN8Rxt9VuGeanZhwn3pCqtpxfNYLZDswG5xCmpcNCjxBx5hjA",
  "key13": "CPAxdxYsqTjq5WrEEpG6CCvEotesdrKW2hVbMsh11CHr84LkwbGHLfj6Ln7S52mcNC5sUVb32BCJzBJHs1aoH3u",
  "key14": "4YxwSrSy4h3oCfS4eK1GyCa8TaFpvwbBSanABUqVaFVg4J12SqkX6yhaQEm31T6pW3ss3Feyxa4z7qcEdfaCcupG",
  "key15": "2NH6AJTET2eAfw8Rajq5TaHmq9Goce43L7QbdT1vsapsAmmSbd7HroaAHAyCFbNHQaVEiZrMg3ihPwQekojm7zs3",
  "key16": "4epFKym8imEyGuBeHgW4NZUvvd7agUXAzd3QgDVrBpg2GNxSg1sxAfTezN2iGagTtBxAUYXbDiNLRJykNo474NeZ",
  "key17": "5Rdq1U3jnX75xbLX3UzB8T8fUttUNfn9diBiaLfV6wc7J4QrNjqekuXPsYbDEbnDo2CzzkGziJzch9g9BT5MJpio",
  "key18": "2w6wy4w4VsLoQGBhwuG8D7bkycWK9t1TpRwLwF7TxniabWptLt6DCC4CiWg6ctyLTcW3AM3LEzkxSaYeNfYa2bMH",
  "key19": "5EdepbntXX85NznT9fYMTAwz636bBAb9KZBgJ4SugdgbpG1mYonxj662iQRCQnDJ5mRFSMVQJKRydXfNLTvz6WYT",
  "key20": "5F7ufCshfgkukEaVxRb2mNrAB7zbXPWTwH6pVUow4NQi41n2SUCztNvwZLRnyZGavdTWxEfkDFiWF6t2kPZhiYqg",
  "key21": "uk5Rb1sMGSWSkdnMr2URM2Yi8TdPnSHiZQrMn5mr2VxhotX4eg8Zh5HnTooJksnPpkp7ezXKWjksX1YXRMxPw84",
  "key22": "5yZ5PudiZXESqdFwpUViCtTSRmNz2LsPst8svQHPcZ698zyb5oAJ28YEQBikSmwsWkN1nNnMXgy1ZNpqYQxKwtjF",
  "key23": "4CHXoQmSAyx8P5zug5g7YQFcxKxSYQNuvaBjWPfh3rHY21hpcWqvNv9nNGeVuceWb2PYczfuim9yVMwWAKk433pb",
  "key24": "37WLyvnfH6MwYjPzN2RRr64xb9NwtmKNraqQtWekSRC1NPFgrZ7riWvaZN95ppLkApfktkxE2vLDiycGKypHUcRs",
  "key25": "PAF9kw6Sm9hV9chMgzHiqDszYNJaaGNzRD85kroN7ZHu1tmyGp5Yr1Hjv8UCnoViR9m62EJJaw9G6nCe4Dvu8cK",
  "key26": "15KSaXBbjBLevZ4qkQ4G3gz2RjvG3AJxcTMjtaGEgJfQ8Sts4ogCNVYa5c7GAeewebKFEVYirwbLpE7MEVPSqQY",
  "key27": "2ErwhkGZAoPSb8ECqazLofkoPxiZLzyZGNZMrqpG9gXXNJGp9xCCAqqBjucBDuzWrJXgkjjmWZsXqLFEmEDGGCLK",
  "key28": "4ga4bkAg9Qc596HJ9BH7sSV2JQEfNBKProyumxUgvFpBw7yyUsE5xCDxExy1XAK923EUL8Jda7fqwmdyKpdwtgzc",
  "key29": "4Wy1m8zgxgYAE2HFuKeaGd4DemLuJbeGQyRyQ8FPiCJgYYtQZhgXcdiQoGS3YoYPb3b1RfbgEHA2ZFSyqhMXkubV",
  "key30": "4AJip9hCfzJ13FJT9gsV8wWp4cm9mxADsc9bJ2LfiDUGcFzj6g5XJZGd73td6YGithN6Tx83wrR6mY3HafmnqAUh",
  "key31": "2GGd2QBxPPD1gc7B1n3GDWa7kXiyD5YQATwYGkRbjC8DsDQunSSGWrSBiaqaSx7fXfkCrTw3mxupxGkeB3sHEydb",
  "key32": "2UJB2pyLvv9FVkhnxe6wiMgz8J9TmpAzcEYonMrqWKUeoxdJwsMy72y5esZX1EuwFstHMQRAq6CmeCwm3vWaNJuE",
  "key33": "4prpJPuSn5fo7uz4GUm9wq83Whbq6ZTyDBaq4X1BVSC6oUboQtLBtsfURpC9k4VNAfnJpcRQrtdbG3qKH7yo8ovx",
  "key34": "2x9nRheipfbRLZrY7RtgsKrCNZEiQKzL58fb2Z7dJ8ySrqzWkJJWKPYCM4C9Qi7vkEDvzo3afukecRT8KjkFZQ8H"
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
