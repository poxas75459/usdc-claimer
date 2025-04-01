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
    "5dt6ZosJSt9PusggAH6AcNnf6nF14AP5GxWecM7qmWKeRTtiKGqnk51D18d9MKGYidqjps6cp4eRyLWx8UV94Xm2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zNZDozFs53C9ZTgVpb2zuVJiqa2gbkhpkmqpj9aer4wsT8fAiWg5qpsYps3sVStuLjxgc8DCBPZQq5jEk9ZzeDb",
  "key1": "pxqhStGvQ7A6RB9tZxycFZaDMCVgQJVBUfsRDyhKxWqQYzcj6pSqzESoY96o1yNghY6MLVpKXz3yDaxZ1H62rSA",
  "key2": "5CmUjx2yDuzufvJa4zgz1xK4yU2CWofdBeKSG7SWPGhruPAq6VLQNTLvZDr457cmnwnPNt3Vuch4LyBPrmFovNLp",
  "key3": "3PL2DRccQZWJPajtjKZnyyHYMtBRXojgx2zLB4PQeGZRat3qF5e9Tt248v7sLq69E2dV6dEzhUhNSLjzpgaYiQb3",
  "key4": "yCNrisdK5jUEPiHyvhw1zJftDbKnEjJTv3XVKRX5VNktcD1gvt7DSN1wM8vu7CvZrLsUBTiayDSUGrrgdUbEb7n",
  "key5": "s7HewBeCUBA4wwBp3b13yBLq7xVUtNrJhtTTRdECL57oK7PdVTBQg8vTRP7EDQNRhKp4MDnzc2rKaWqqENR7TM7",
  "key6": "yJjmvFbTvFGoyR4FVejEfPK45E3zpa4T1x7wGij8jPERoPWMnbaBaGJRfFBVCvdhfVdiEUttwq4ACXxVms4UEkC",
  "key7": "4kzivcqVFLqo6ZnuFSz1vxYsJCcZXCZvtVmqqHMSxU8CT7AGJJeCMMn7vCndT6oqkdxzueyUnANzHxMz1nC6VvhT",
  "key8": "5SQJXVAGeu48jDfgSSQbgyj6gjzDbSDjJ3qg7uEY34LVif8zif8ELv6jeUhYKnfZjyoRv7r9c6TkS2PerPWztqyE",
  "key9": "4Dvo7HmFA1vbtmFiaFJRsBtAWCEqaoyKRcsJBThJGfwYoLhXVd8N6wgqvwywTenjdLReENieWv1XrcZkArNhXdqJ",
  "key10": "5tddZG2vywcZYx7NC9Zgx24Snp9nWGHxVCcZ2QwaquYuaTR2AfrNmeoLF7V2rvfjSQ3c3i5F648M62FwZ5xk93qU",
  "key11": "8T985jnBdUS6NfLwGfCEQmxq2XemdK9LpwucEz7Hq67K3xS9JrmKNZKwSgz1DikwQSwWaecr4NGUpQUyHaEQLf2",
  "key12": "guG8J2fH1NngMxeykLsvnTtEBR8ZgBArpwYuPru2EJfT6jiYgVqosyGjU1FyaC11NEJts48GhDxpo2Hooa9R6bU",
  "key13": "2gBvjngcEBeVg1kxN1GMtpRRhfb2s6jia8ZJSmx2cHGM3Z7NpCGQDS7DzrgyXmheJF9871cDPU2mHMxHn4bbvuab",
  "key14": "53YKXryeND5VE9QcsTgNEHykk5nkPw4RhXM4QdwnwTLJDqEUCDm2P3CUx8S4w7u1hdZboFiHi5Kh95sHSjTFbQrz",
  "key15": "3eBHpjD3L8BZQRTotGrEU6Ru8P8HXenHb5J3r5t6dH7Mi4eCASJjtqneRr8HkJf98ksxBXGxhnx9Xz9BK6sUivzH",
  "key16": "1z8foP5ksXWo8T1iBmZ2uU1g8DeahkZPPvse9gCqSnyeFuXj1eWggCmiJyHvYHtmaMeMpZYNDEMgL5UXWDK3gm2",
  "key17": "ckAQsXLEtVPuM4Lg4oBuhfAxWZgbNgwVqWxkfrA1xGCdYkfv8xMq3ANiUcnpGjmQHLViWuNPRzmEev2PBqsLP5Y",
  "key18": "2TS5ijewexx95aSjXe7SpRP5Bm9J91oKGzWJC1n6rqJpCvST3UAMmNjqwLJAYdLwPKNPrSphe9f3zRiQqa3mz9mR",
  "key19": "3S4jn1rb8CY8p94wgKjB3ucTYcZxtQCWcd9QvzrJfJDeuS9KuU6TBe7dbVUeqEsSxoBKVbWxZPFTukQFyTcQwSAU",
  "key20": "3Cc1nNuNHq6dWHQdjzPyBtNaoch8kpQTBbU7cZL4ZfwGJ2D3rXAqGwQET11uVJsu46QNQTNMp4JgvsdQchfSL4CD",
  "key21": "4HbJ4KVa6jQXQcZ1ifppSgfAa9PQiMiD4vzrR9AVKX4o3Qu3tKuWbrVNWdKQeViXQGxQuWZXmDLnJEgtWosYzfVR",
  "key22": "5w5CPnxYpoaNmiXSvqagWg1Px18tJLWXPgwYDdEL9kQyhj9fWx7KXZg9AkgFZwSxShKmzYoJWk5TRWgGzTCQ8KyF",
  "key23": "4QqDyaHGeEE5J67wncAXhLYc7YK9wymKuxN7Fm2EbF5hrwauMyFTp5KHVsfaqbRcaQoPv3FcGpUvWV7EuYT2WEKE",
  "key24": "49MmayxQdLdVErQTgGjg8YB3yehfoADhkMHE6E18V9kHpaad4b6mhrhTU5Kq7oamejFek71DMf5WDXrUhD6CdRTp",
  "key25": "4ZFZSft8HYdRMwJJZAfp7GvHLwhyey6Rynx2YmSF6PXwAFzdVDZfdseckaLi4tQcvwdP2gNH861ApuzuZ5obEkcx",
  "key26": "3BkuiZVYpWw8ubTC5sis7Kmc5n4QUrsYfFDqjCNr6ATQknc26e87Pew7RHbieoFPguec6cgtSFCUc6VP5WKVoRXy",
  "key27": "48gX48AoDppUX8sgwQmQhe7zzmYDva27HSgrMsjtnsWXmGCfh5AUbEK763C42nB5MTpQwK6ctJi7i6HLwAJ31B3R",
  "key28": "4xxJEdHEiM7vaAH4rWrDArC2NLzTYoRjsHzPgWsrdTXzDCR3Xx5hMncxK2fBtnw6xvKDzknXfZw71KGhndcmgK4V",
  "key29": "4ZJGPEAQikSGfShovR6Xu8pJKvo3DNqoDCksms7ag7pHJp2CuQHMYGdHvmJi3n9UYbUxke4Pjt85xQ9SzWVxXvZD",
  "key30": "3dZzf2uVA85sUH6KJsZp7cxnYKnzFQxHk8MhzgF6ZT5HCr7kNf965XvtiduYD6y9BHAPRgvsHMpwjJhDe7drbaRn",
  "key31": "7dBgyUziFssqWECy3aBZ6YzKoJ4pLXBxbupmzgZw7HzTLNwApphKjHJcX4Rp3QqxcoKfETY9njGiCqzs9Lsz3hB"
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
