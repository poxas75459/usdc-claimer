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
    "5Zt3LyQva3yUQd9W9Ptx8PDhLuU6yPXA5yW3BWXhqKTf56xsjtHaeniAbR67maeTWAca6xmdhxnkkoNhdgWKk5TK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fhuVrrgwpqEBnPtpDjkoC9XBDhqVcTpMN7hQTx1H7sJrP9orUCqC4p65MbjB9YtfAnUUgK32k6tEWip6KBKVvfp",
  "key1": "41LvFqDXRq6RKzbXBci5D1pDPCqMK5JnYu3nzGMWwNAQEB9WqbqpHXDVN4MfRXKzoszzra5bEtAx6BWnTHxYfdmS",
  "key2": "3QMNRSSJJHjoYXgMzrN7D5prtZqAbniKnq5sR3Z6sYAzHT6TjcmxjLQ8CLKfUjnb1fBEtQ754q1VJjDWrFFaYdQy",
  "key3": "2ZqnmajZUsEnYxqHV3x6FBrVnc7H3fe4LBSHsqmS8F51yMACoHB1e522FBvocvceq5Zf9fvfBPt5mpemmyPys9ZA",
  "key4": "5hwKcN2o8Zna61opcJtq3ETzEf2jUSZ1xmVAvEqzXeBzpDwVJfY5CbhGmRpyYkEyp7xUjYcsxR7C4mUJYKJVLd9k",
  "key5": "26G1muWjgPBMjBhatwyYf8Yrg7U2nm5FPjt5iVaZpnPznKPpQgVXz4RgfKtw9UeXz6V9yzCE7NAUjPXPgBbmfaMM",
  "key6": "581VxyNq3t6d8adJRLgCZjWGFsqkBvyegCRcxrz1M6EeXZPFm4HBhrVKUFDsn5nUsEYNeQuEc9mZLiXD8QLMgBf3",
  "key7": "2LByKgpzDFBESWTHfD4QRhEdZsztGtcs6nEsmwUFD6HcWdi97e3CvCGUVDsfYEYNKiRWkouUWdzerEEet6fxYft4",
  "key8": "b58swan8g8ss1oiStp8sE4mtgMb8b6xvHkxjzUXQdin7NDPeCRwjWQ847QW6vmkkXBdUZwhtpdY2JLfMx6bhMzi",
  "key9": "4gdSBPYKmWgfLyhoGzF1UmwnamKFovGJHeia6jbToNc2y6Qqw4BViLndFFWqhrvTE6qJGLdUHwEFqmU9MYH4qnZn",
  "key10": "53SCK2YDMWNXy7uAhjBKt3ZL8BZV6EZLet3JKGhqYwG5LYFWfxUKcMVdMyRUTQNHV6TQoeWHwar7GRY2R8j8SFyD",
  "key11": "FZYRwit1cohC9NdtsN5yySV4dd8VFSirZTjRnL7puRkCxf2dHetgeetoyA7ZNCCptp1KeqMSgjRTD7STWyrDk4Z",
  "key12": "58okFkJSZddvWzaYZxW7EkoC2HzjxfPKeAsqyPmYemFMvrc7tLd95SWrkan9b3Q3FU5sfiMXz1zCoG3rJySn43LG",
  "key13": "32x5mqWdVKU1Qf3fDaZf3cPDbx14Z4exqrhgZzv9ftJnsyuE87FKFVvz3EvByo8r6br2QzFp6DJMrRtK16xKoEZo",
  "key14": "466VNRn7Yev9uMNbshRQWDJF49AqViMFsxiM3j5N9z2zwZsDy282eRxe7PXvSLpo8DXgmErCyrNkS5oqZAXZQMHp",
  "key15": "4CpqvBQWm1KabpfEbENudGsjR2K5C8Zrwj8ah4yvJq8FEDMjc9X5h4cGabYEctCJAKn9vV2ZbB5AZGizVWSz5xwk",
  "key16": "5tKQp33DR4b5UniuYNmz7iywSjQAJZ8Jb5Zbck8X5HHwb4kjp5sH6QDhsYeLdzBwFC8eNZQz5rmW4nCmZm2G2ZzG",
  "key17": "5U5V7R7CPKXVRGyfSobVUGGVGoqEyBtqAxA82CG2DX4tN7fKpdAXK9AGgqqsWuDbUkECTvD74sG692DBdaMqNkuT",
  "key18": "5xr97L7MU1FNLitYwbmbpLRWMjcDQA5hzqEJfavg6oQP8kdmbqpqh8QC3N4eq9fg2xsX9qYLgppDxkxnQq9aVbZv",
  "key19": "4riyGtAoiuet3cbbcfYDg77RQ4aaTrTox31WKKx2oGTS81aoqR3Gw8D3x3nFvcXtkBDRavNdLkUeifLh8taf19r9",
  "key20": "Go8dVkRjhuYXNx7PyFGqh9BnQXDQDRkjCmpSSea8QvXffsoPSQXW8o1CCcPnA92BsEAeFpE4wHpkJi59PQMEx2H",
  "key21": "hVornUo458Weoqxv8Ky515TgpAmrWHTiToZVHwS9NhYvgWw3DHru1PeVUQgfP5fgquvHVVSoARX3nHVoNcAmqpr",
  "key22": "3eyHrQBUTJbnXarNe6DPj99b4JX7WkMDJjhhAiTfUooxjdGfeJ1r46VhrCSYt7bkos9o2dCTuv69p6eS2puNRtro",
  "key23": "2HZcXWoTEVzQooXqYdhTuctotkTAd881MoWQQ49SVc8FYB4Sg4e7aFYgAyq5rj41BD8d6tphNhvombTCLmyFaBFw",
  "key24": "2psDjCFTv3Cof12XSHFRjrnLYFk5ig6v6xq6p9pgfAJngXPF7orRaQA1GQNQtcmB6rsSubtB94Ffsc1dbwg6WZTU",
  "key25": "rADubovkhW2DZBP3bWJC5uNDd32b5R7rkRz8k2Vg671mv8Agp4aGAeiKnbPufESEz7wyoV9wjcpVsfF9iXBGghc",
  "key26": "2TnGyyLY7yx7z1ZkSMcJYxynghQ6qBbVuuGxzie4HWDiF3pTqoYjZ7dcykwWzcaJoSsLVXDNemGiMRvxaoAYsFyn",
  "key27": "65L6wFewLbjgfX5UDmkFQKzvYPDdshGRwnRsBNTcCudSRksAPPcVPm92bD3FruFUuDb5zzokRLqbQFKpsftjk46L",
  "key28": "ZTYBJuvExLzo3WCqpev6ru3ibtvibu32E5QQAwNrNJJXHHNpzodpbP9GEbwCTMNWSt1RyxjnzHrGrPhLks8Rwvg"
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
