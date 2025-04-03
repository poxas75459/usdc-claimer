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
    "4Ru6Vgk1t5XcQYXQARG26tcbcfTZ1jfD1kKVZhxizoFXeFQNK6f393hhBxocfqdimbUDo5kTVQBn5c2ir2jrD7MZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RBvmcq6AGJuGVozNR6HJiR2E1aJcNYuSnjPyDXEFv6Ey4d2SU8TS5Mi5RYa8wXSqgpSqsUy2WkA3jSgCrpQmAk9",
  "key1": "3unF1BPLVeSjBYJQxyjn26Uyjw9TZbFWk5HKV64MYMuWkEMxj91cNf3Hm7mELiWAoc3JJXgvE4vbNvx2CrwsrVud",
  "key2": "EH58jFJsKr5LoYKug85bQSZUD57VVY4ALAJ5J94yNh9nvvkSCfQS6HbYsTA6yM6MSuJXsj4FyhKT5K7oYmBjUyG",
  "key3": "VHVrvKWuvXUAVWGuPKQSPhEy58hxn7RD2zqkSwQJvMGzMWbTtzCHm187yUHwNqgz1sQ4mh1b54UvcNzSTqHKo7R",
  "key4": "41GcH4EPfy72gXKqLL3ZHWLxzMHCkhEXuDJcKQaQkNYPtJhXSZifM5yTgoyy766K65Pt8qXP8BKzxWXGicUWnvfF",
  "key5": "5psxjiWLwZkLq75TcnsSJJwS5igewrZ1maxaWMbycURpNZjYTMF6Z11gdQAmufix4fioULVPjdM1g3XojLBGTxs2",
  "key6": "2D5Srypzxt7qkie9o6UVExN592SYfasBGPz42nZf7tHQEN9xAxQ6CWrHjJhzX3zuoKYXMcnVytoyMd3kXXUCViL5",
  "key7": "4Qcvv3odzXJSc4q5NmZvE1wK4NUUoNiA9BqUiKYe6ng4KNxE1NpKZwv6KRafZWH9SjMVo7gAsU5jrxU8RfirqTgq",
  "key8": "34QHcXUAPWMHp3atnfw2Gwzc4XJ9kE37Hb8UAm1eUT6X5LktU7vWWx9GrpddCJrsiKuDWV1fR8PgAoENBNoxwR1B",
  "key9": "aLWPCfW1HmbMtMi1WpAKx6CL8N2TSeaB7dewAv3FoFAdCqXDDZGGG5QHoH8FmV1y2N7Kga5QKCKKnjKYVkhvp8h",
  "key10": "4ib9Sdz3vVBjmA4qPVDYn6B3xzupcHv5FEjMZDky1dQiwjtLRP8m9REmWSuNHMLHfsfpqJFVqiHrTHqbfSvH6KRy",
  "key11": "6MqSHJ6s92V3kK3vTAeBtFreuX7ixKW98pJpeyPTb3uZF9rvNEumNkxY9N9Zkmwt5TX2zu4LPjQ182F4KYdgKs7",
  "key12": "LHHFLUeiWP6FZfUkqRzapTf5FkTUfCdpKK1GMhursyPKEp2GpXHUj8ZbuCwDTRKAjkaAJy9z5oGmupJaXydcEZ2",
  "key13": "58vJxzWHSDDdiZxkA7t3S3zNoZGWpNFTLrcfWUwyG7NwiDeGkztPE5NkmANwTZ8Jn3DKPJVvrWUJzuFcLAqQea1Q",
  "key14": "3WWCrGoxtAYcw9ZFCL3nEGGp2twUhvGz9gy47Jkp3diizm3fs7bvjRHsa68d1omvR3BNr5ttdV4JrnAHVJUKzTHm",
  "key15": "35u3cgipjARcrzBufm2wkNQZgrGzc5npp6pnBFNgoXPf8wrrBihBPaFAEF4pbXXVPvektHFWPm944DHYFxGns2Lz",
  "key16": "31XjKkW72bg2xwcf8BGkiAUAykXARBnR9P2tvSr5oqQJ2MHbdNDZJDzdLWR1HjTWQ8i1qkAjnfwSWQf3GNDvdxEK",
  "key17": "4YvJoCJVtKjVCm4HfQ3TUDVgKcsWFpqYqMjv7hYragz8vZ3AF7JmVZq3RJG5scqhScwcaTVNmdHptqTeCTZVYqfC",
  "key18": "34iG4zrmrpiDqaUbTVMGBF5iqWBreb3k1CCrZS88qNdKEdM4yQZB49jqDWQHpg7WJZcZALRdT2NkEar34QxAdiHd",
  "key19": "4XcqVdVxtXVhgkeLJwUm3MddoHF4K2fmx8pRQNGPyjeNw9wqUhJaxzVkMV6zd7LzkM6xPm45cmCNHNA3B6JmhTBV",
  "key20": "4M6WAfWjJyjYAqJjKvUszZ1eghs296WABNEBtcNuAMWXviFJfkXkPNCvKB6dp2HwZXvfTB9vTnfAUCHKcPbaPYZR",
  "key21": "Bf8KJpTQ785vXgAS3bB7KzAcbyg554y1VmZdHsYWkMWRfeod9oWJ4cuM7vcSzKHUAPK1LkbYhjR9dWFyxs74jRm",
  "key22": "4YJEgHkaMxJBaZsfWHMkPe49RKm6Cj6d7ufXRFACkizPcZ721k9xU3rtjEvvVt6MACcFfkCqJnZ4ryn95nuJ4V7W",
  "key23": "4p57pthE33Hg3mEePVPRYSBHUvNscgLZrtfxFvJQjREmZTSYcbuBto9EsySzsXnzjnQwyPUioJKAX5h5cABAYxc1",
  "key24": "azGGs3h4FP93mTUXyg6AgbFKj1PU2bGK8AdEtFZjKFERbRsfUwkhH1jzbqcezDW5XBhB5bukb1XUPLh4rQFwypK",
  "key25": "3Cx8yaMgjpsQHupAo3ZEKUXTeQ9QwBNeiDVki5wYKNNyjQJLBCGZ2VQruLYPPWRw41DCVgYSheE6LozPnAPZf3WV",
  "key26": "2mJRPqW2sjhcHcZTaeQUt1jxxBDGhpveEQT7troh71xKux9jXiatu83weV2o441jdUyuS9GvgMEYGnuMN3DY4f9B",
  "key27": "53ur8dhENmpeRP3tvrYiPvERNbxYTqternveaShmii1ydb7epnb1NztTRFoY2RWVHkHMQA2YKj4Vry5pG7gBNQwt",
  "key28": "5PCiZsUzujb8L5Awe2sHRhMmr7KEC7FC1T7ibacX1o8eUUh33YCksf9LHT7QZRQ2hZNqLUE9DyGWfATtLfTS8ED6",
  "key29": "5xu96h23FSM3LmtJUWJ3EwV2bM5SURhtY2ffjJWjwiYs8HAEhWeS4T5EXcoap884MuwK3rGXotaQTnP7kPgkrEEf",
  "key30": "4jWFPpUfTguS2rgcAb22x9PvRKHZFQ4UmwaDASPMYUW52bJbk6Bh1ts646ogHNMrYuasUsCzJSpKQ7vMoWDRCYs8",
  "key31": "3BrSuSGSDBWq17nrspWCzbs3fjXZqtVN3z1vfRi4T7KbZ5j4yo3MYk2Qio8m1o8N1hpZpqGuWceBekRrPcXzWBCu",
  "key32": "5JoDz1jmcj7YyGtJWh36Hu7rjJx3Qa3NJYnrveo9S32TweyjLryVj8EXAWKCZfcTbb9dxaA9fTSkjMomJFbZFbcn",
  "key33": "5yGy74KSVLTxMQfhFFhUnLBxYicwPFfPirSQimriACCb7CMCG4ciJf6NDm8XUwDmS7TiBnaFeizAqTrJPpDW7eQS",
  "key34": "3Vrck1ziYyEt37FGSSewqJWWHjtqCuHCnbz7wuU8bFMSW5wrzHuYq8f4wgtP76doyr8GMF3xGDHY58WKPaZktEgs",
  "key35": "rdegEvRojXqFr2DgGgnMUWAtFr9DS5BBodXMRraHvJy6tZGp4PaYr8yeBtFbSg4AyKE8P249XN8GEByk2NPLXKw",
  "key36": "4NLv1UsHkZAxre3R9yNMfkKJMbQe4eMFSov1AkhYK7PdZpxtSk2NaxMkFWehPhVh184JRSsxt6E3KNHmwL6t4oWx",
  "key37": "8NQP1UMwtvFTf3M16NNM6CXKD9kN3bhf1Cc9tumVDQ6hmmT47d4GEfo2msSdvkmMYCC6XBb5QFZxA6SMocQGbJ3"
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
