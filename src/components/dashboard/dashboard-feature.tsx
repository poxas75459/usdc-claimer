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
    "4U7YRkYCRAm9dBUwJZ8LUxe7zy3AMu7NrZHGuR5Pqgwzp4mAL9fySujQAsHcnEh1EYi3EjEVFKrCuD7u54rAr2Xg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eoaVWA8T1myLSQJfUipDEy5kudZhkEP5XoLBhZgyXKPA3UjMcUutTbGXcYL9DcvnLgAiYjL74wsjGuyk3QwUvY9",
  "key1": "uVZZzGQWmiYsxjTovTHaD9G5ShSMQkWGFHQz7JWwpZ8LSEK1dNGY44LyvLqq5kpw91GMf5SP5eSC3z4FpcBbsDu",
  "key2": "m5jAuJgCPfkZXWp6bvYGxG7udhxvprNJ9VP4eVPre6KqTJSr2aksHEqGriu17kULRhfaBTpuk4SprzPnC5gyX2j",
  "key3": "2SQQuihd2gDZu3bqKwvtUMpqpdhYSf1vKMhVS34h4MY7svgaZX4vzPkghtfoceAWgRG1ZWbbNpH32d2zY6LtT4U8",
  "key4": "45omKV2FBduuVGqU64yqQUBX9xJ7Fu1Pk65EXpMHyENhqvSyQ36nqfPv8GVZ9KsiMNUyH46pGo3X57cYAtWWAanD",
  "key5": "5CJcxrhZix6ak1xcTxk8cpmbPeqCoBwcz7qeYCQFsQdEcHVeds9Mm8ixQpV7CACnLAwgqzRikHdCyLoD5EhYtWyE",
  "key6": "2AnBTef4MjeXMKxeN7ntK2p813RZNyHCT5zRMAvmTmHsPUSe7T5hrGSLyNTff9e2U9YiggLypWJhXCqVqVPCy2js",
  "key7": "4yC8ihD1DekBf1Dd3GeD5du9hogVriA1fbcMe2roPxe3V4KQtBkX33Wv3uEjdEx27Chcjx4X39nAwiKeEAYLiEro",
  "key8": "2VktWc2Q3iG9wtFPX3evj7xNLH8EB3HNf7Dj71xMBzMewYwBoVCn1Lv5UomcRDY2bhee4r7CoV476U7MjGHHWSb8",
  "key9": "M2yTLyaJkop6JqKs74C9EuBRWN8LoWZfdaSuw1ftdguU6Y3YnQs7yhK69r9KTaBMZAWwnWkkJ1ZUwswNWhoGQmZ",
  "key10": "3gh8pHaxr8AfXVQHN5YLNRYtb1RZ9QnF5c4VSLy82fK1fksRUoBm4xN4BaWNybPVLa125KYRRPCJYyhQiGkQjTVE",
  "key11": "3aG8bt9JpjW4pS1zNyBLvbc1DBZukBJ8N8CjozAD4yL5cCLBir13pmo7gNLSzN5ctRoB2AYmV3qeQTkQXcGgAcTb",
  "key12": "218imdcz7vDSzrnuguNWMiqUCwo8RVt8gGm1weSwocxfRdF9QMhJJXBsAquPmKfD1jXxiHa7j16d8GU1fg2u8mi5",
  "key13": "3t1XNmyKFK6At6JBxeJu1gBiDAeJEJw4vHHGtNkcad2jbN6mEJ32dSiuWr6YvGdQrFUeEBemGEB5dkEwQedQPgvr",
  "key14": "ryGYGC68EMcFvevQLiFqvRWwVDrWdYbaQuHqYuPB2vdccxjp3HPFRW1LDmZdTCekCReBqMhSf9fs6oWLYC4DoMg",
  "key15": "42aAH3bXCJvhFdgZRHpQPrHnQK55MagvqAWBnMpp4hMYhqrZiBKvGdsXtXz7BfZodNez576XZYK8tMsgYrgoqAWq",
  "key16": "Ai5hB7zUxHLaWPXoLcxHwBUbsCL9Vy4QK8nm1jG8HSyMgHKVxXxvmHrHcCtUFN7hyGxQ5GAjqcQPnYc6GjumxNR",
  "key17": "2oTjqRYFfyrfpjhXqEMXD47SfwbEFmg9uSewPsouZBAUqr8s6A9EJ812KhCtVE2odd86kdgiUGmqyW6555jxckQV",
  "key18": "HNqgoiEVYvxfyzzmjhLoFsVLAmnrcUUdE34kmWkHisjhKnfDWmme2H3igNyRdjbQhuzomgJ91WUASn3E8NyLsGc",
  "key19": "cEDaui9ibtrJetr4vuoFhqkzNQCQArG43RmYkFVG1Z951QxR9zFLG5mHBBqPxFf7x5g1XfTqnyjNuCfpdC8e7vJ",
  "key20": "5FhY5yij8LNiDnqLsLAdNRL1FipQJkQ34abDFfFeNjKcaZukpLBC7DcQ7KNQTBoRZNpv1SvaMruqHws3g8EpHBiP",
  "key21": "2up4R1nGmWZk7efEMajgnnsfHuFAC9uL2yw7yscFGxTznbshdTGsSMGw2KgvM76EsEt8yDDZZwBKCmRXd8rynMap",
  "key22": "nZCYSyfgypiBzjTZrksFF2PadsiQ8z1PWYG48YAD9JAEH17aZtCnhsqWYTJBJ9qgQfYEKbxtqYMYwaTT7969hdm",
  "key23": "3vmDRNmMhhcyAKq5ggsCkcS5p4p5naGVb2vN4G7G2RTT5Vo8PWMwFKQzuT6youBgFH7JuAxpVQCobEedDgs9mkTE",
  "key24": "55b4kWX3Bcz8faCjx55i9voB2aaKuVFyz3Ns3ZtWNPVg5XD8oLTJAQpA85V5uXvp1xH1ZDvyHCQ6xeZzKkqQksy7",
  "key25": "4HdrxPr4cUQ2AbbiYqU5krHJTUDtAzTUunLBHWmQHGdnn35y337pmXLZHcsgGcmpLwdxoK2aXJ5WxyVEUhJDCwpx",
  "key26": "eahL8KDrhy9TyXLBzSQX3bMoTrhyTUASYccrJCbaTnQw5ybDakwXPNV2HGgkBR1hcdj1xiNwACkzFaaM219o81Z",
  "key27": "5aaGTWrSfer4yqrRx9v44bQz1TQbGmRdSrQ7MD5kvpy37rQHFmQG9LxfJJP7Ay7aczpd4zEVFZjk6JftwbEBRMHw",
  "key28": "3wHY5x1ubtmTTkh2jCxHziRU5KaY2SCadp6C17bEWc9mbY14KsFanmBnjazoa3tmiTFoqeKfvBZ5thbRHn6yVgTF",
  "key29": "4pBMoUQ2czpecqHeDcrCBMLhguAmjco5cDmNanhcKuFEQJhNdzFmLP71QxFNNVrGZU6NJYcvjWsf5ejx69sPjvMF"
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
