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
    "2cgfFLmmYmankxU4jwDDNAYaR2HkLdVvA2pA8aDFdeCV3S86ek4Ru8kv9cNpWZMDjdcmQhp2G24e1H8zTaY5H5wF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kSmVvSW3XA7ax3cQBR8r1x2EUpWT7Heu5NNFUvub8D538q3VmGqmCUiJt6hqQnKVK5GQLHRKN2LTEpsd2khxnhP",
  "key1": "45ER5cBDgwuMWVxfUVvhc4eJWq6cYa99Krbe4RQkZFMorwfWwZdMJm5VWK7pVumHmcWKq8cEK6ntPXg3oEXiFFSy",
  "key2": "GBMjnrGDzop7CD9KoVvuvSLTyhWtjPDKWgt2cvBzCohtLercBff8mHS59K6vTwPvfJEBUvXNoU7xAZyAERL4BvS",
  "key3": "26VgY6En1nbF2LQh7b3wNjMr3rm2EBmDTA9BcU2hyJXyW7T2oiKgJf5k9i7WbpC2DgEvxQD6PpQbHCz8XVdD7fHa",
  "key4": "2KQDZBf15b18PcxaXhPF8KgrGE8Y3ihAiHNVBWXBweWWz7cBK41k5bqogTEZUz7hbUeTQsT1aBpaBSgtegXSTC3r",
  "key5": "2gd4g7vimPXrGe7dyW1FLE9uTpKYXDUnHNBzxaHmgVUuMTqbzwP7eFswpkb9j4ZTh5HmXaxQr6mjhUT7KDztoFrt",
  "key6": "5pE2BnbTnB7ntmVrUo3a51B1cihETPn9aM8tboaun6zFURVCMz6WemqRnsqvUeNv4y1d7k9MScg51vA2DJiXAh7L",
  "key7": "4Vwk8iGEfdHe9HTHEz7h62jXumrJ6dK7DnkA9zHgaD9coz4pQgBQscTyDZvUpj1GPiRLNLL7CHVHKSGNGsTpp7nW",
  "key8": "3AVhEPzccDeL6wha9Bp2u4oqCtoym9KQUNmNo5JeBqJN33cMLni8wBduMAoPZekT2AYnWoLta3URdZnTNUZ8JxP1",
  "key9": "3J35888b89NnV24XWqX9gdeL1UcwtxKJ8jhSKACsAogWmuJcShES6qA6bJVZkyts2utRbZ6itZdMpR1exsChtdb8",
  "key10": "5DyPY2UsKvACy5GXV772bBmoz6kbMVKfYFEzEQpCpB5uz6AoPgCTUB3eqmVPBskUanKYezZLRrWfTa79Kjn3vznc",
  "key11": "2tQcsbfbRYknxuUw3PG8uHFEeDTdBGHZAYJrpSaznWZbwdF6X5byQroeiHwAxD2X1ZFHVb2t6hpgeo5ejbFkw91H",
  "key12": "4LfRbjE6tZZgYSP1wYmBSzAPSN1HxfYqbXE8vpbMeFHpWmq8hvnAE8nDW972SQadE8r6VzLf8reZEStqgHaV3QAE",
  "key13": "5Mx3ncVJcY59hqb3h7QuVYUW2ZSimVcpAMkFCk2QFoLctTmGk5R4qeDuUu1HPnH6LiAGUriCJdJqGsDX1Tacviib",
  "key14": "5TGMLaXnCdYEXptS2YXSELT4Var32VdkwJRmpJtW7MsJXMbbQYvPfCAccdgUboR9RcH1SMRLDrKhVimAeMvMcPY8",
  "key15": "63qdVEbGy48TwByoAb4Xbh6yiha1tAEs22Mhb5etV7zWyvXbvwbFECf4ShMPhxxbYRwYyGW7JekxcYXJf12yq2ka",
  "key16": "3ZXijaCkdPdrqoiQtNnX64W9ntvGPw1yPNjCCz81Zo9fehkckGFR1ofe7pJG1HtEDyfYTwz1XF4nGQ8YzRfTkJV9",
  "key17": "2EP2NDrDbSHtXcvcXdfF93VHvzUTxvytbbDLUsMwvuS1jYEkFakyGJTRpqZVsVE897W48W9Xf1u1w4MmA9E4k843",
  "key18": "2Pti3H3ZDXjv6qAKNTric3qmj9Z2uv4vG6gJ8Q8Jf4YTvSK8WcfACzCgUCn1jMVCgpvkscVh3RAhjZYsBKz3bo4V",
  "key19": "294jUBiUi1yPtBerAonuLRrZuz6n1jybg44VVPg8EuYRP2AbYRjfVZbmG37anyUtG2N4BFHr4P5DKQ3s8VeBuRJR",
  "key20": "58FyPRiKBJWUshBYAJb9Z9bwB6GDFw5TFRduu8Wo2Pcg5EmdEgRpUaxqFTgX29RvDN2kQjRp17xBwxkRQdpfPRS",
  "key21": "5fuh2TwFWvkdY2HKkcgLDcDvBoyHYaADSTAgmndpy7E8PQiCbp4exi3cZB1n4ZhLgT85AXwYX4fYiLfgkXq49PNj",
  "key22": "je3jNUpJ6DnugXevHBMbEaPpdHnbTWRe3aXv9oQSFkKnymFTffanSRWbvL3WR3zKFBzcEgC3tf3Ma8SQ1TqgiKj",
  "key23": "ARCyGeu9phn5Z1s7W9sZNeTeYu6PGdowvD5iKTidrbhPnMfJDRVTPcmuAYNFhREJgqxRmzA1MBXGeqEaHk1vL4J",
  "key24": "4QQucab11K8MvKo5JiqoN36kmUjBXx9rp4pnrWEtgPD6NnpBaCs8Xrd5NkTcNasp8TtgwbzWsZPxzN3W9QxwJvZF",
  "key25": "4i2szckdaz8GHUSTCaQnj3VtywWEuTejCeBTfNDz1dGfqpWJmPYzJiNk2gtpoJN5FuScB4QEBF1NJuZa9Tnue6Jp",
  "key26": "39v6nfKxZpcxjyLWUNFwiriQHTqjHFtpfQARJFABkQKB6vydaJTAta1zCYkE855qAoaAbGKiMUfvLmPLccZ3xhjj",
  "key27": "2W6TEU6ceHiijtCrbezUZuoAvvh7tkbmbRPL7ZA19WC1AUy8JPh46veuNKaENfy4U6jkyJuafKvHaouctqfzsfJT",
  "key28": "3MjebKQpyb9RZ1chBxGbcSaUzugDaZEyVumUE3cu1cCNmficEA1AjS1RyyXqcjb3qY4eFyaPq221uxz2KZpVt4Kt",
  "key29": "3Kdcrba2qt3qAdFc4FPKth2pHSGaGn8U1fbaKGDfU5x9AcYLfskj3SD4gBxncaMUq8GC9Urj9zFSUrMH2LPEEzH3",
  "key30": "5yRNQvfBfbuJZWsWYBgiGqk2BzbdKL7VhwegwZVb5jRQvr6ZGvskhYYjSUX6cb6DPq6Go8x44LBPafH6HGoFQguq",
  "key31": "MRrVatQWKxtp2oPZfceS2P9T33QixcScfTwY993CyDsKqskVzg555T1QC77Fu8CnBZVixSKXxXAmXWHNisUdEAr"
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
