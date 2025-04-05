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
    "53ihZ8StsCbhHddyQAKmGFWtH1Vn7JaAVqCaZrcnirFe8WehhAZucggmUxTkZPQnXMbYu6ttxwgVNevqt2gCUDtz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZUdDvriTnqKxkqyr6YghtYMEqgUk7YPeCVPg6ZWE6VvwR2Gkn2w25KQwVPifZLt57LFVRuUrp1H5DgUKj1YnoRS",
  "key1": "2Vx2xbjXPrT2a66anNGCXi6JKjH9waeuFivtLyQpMwZ7RJWwpmqpuAp3SXvruoU3kv79o9FfnaNyZYPaX96ZTnVd",
  "key2": "4CWJG1cTKj2pHuF2AiYxPGsEe14Lg6g8y2A8SjQmfUYKnFi7vYAyfd44Rr3dZYHfSoKmCsN98d7Lt6xu14d1Ff1h",
  "key3": "Qc8mUuVyhNPaPBZmCQzWvPuC5bJe6yNcP7sLgDiaovEDquRVEkFo8KVrRojXT1yG8d3iY1svSuRpcp8w21qommS",
  "key4": "35NSGuPaa3gCfSRriU6jG5zJytoF2haPch59XyPon1xp1m9vNwjb6aDSE5fN1k787ekaD5Nxp5KrqHRDFpikJWxL",
  "key5": "3Bt3BG6HVy1DEgGMvWswLVuYYMMpFgtg1sj3i3C3rHQUERpkDabFTs8ByAdaRHmcyW96d6atJHTz9cGqNZSSKyX",
  "key6": "3fvb8eL4v89mtmfxXLRtrHM5fraeuy2B8gHaWF5v3YNvkMdSeuhcSa4KXPSj8TRLdx1zX7bQroYZFdxGLeGatDhV",
  "key7": "5Ve9SPWc6VLoqGmtoAwEfwFzG22whGZnoHt8Jb9ws4jqUA4PRV7PZ5TWM3AnHXtsEhXmCsNZU7YEuxpDdZ5LyMRg",
  "key8": "4YBX6rTX1FpHeYKJrHsQAEUc6TtMxJGRgr4eJEmGKJ1tHjLnxG7Pd61UMifTp8GEiVnc6xip2Bu2UyZt6XG8ogoP",
  "key9": "5CfoxZY3qEsg69q6MzN7UhhKXHJLeUyS2cAByMafRWS2jLhqf5toDAQyP3kjBk2F9MQMuejQd74pZW15jQuoht8r",
  "key10": "4DL92jgUtetywd51MmT14YLCoCsfiuxyKw75SW3JR1xYtERfRRMcVWX3kQyug6pkhir4W467urDMVLzv2L1F69sx",
  "key11": "AFDp4kG6qpih4BnaWqFumcDbEzeBSFa6ujR51eFhuZ8ntcU9kDDqXmCXdwPv4LoYrJ489gzRhnyD8zdT8jaJYGb",
  "key12": "fgPaazindXiwg3f6LPe51nwnYqkjnW2tXXHFy3sWi2W9tba2wJC2KU18N4V3ssyqtbrUG3zFmzRw4EZ22z9SpNP",
  "key13": "5z2fBJ1dV9f7P1B4xjQuL9BQ2Q7e7Vn2bYq7TjKqKqWVkY22ywmJwSALu28zPLw94ZMd6aFyg1XqsVCNeo5UyN7C",
  "key14": "5uhr4jZHy98kmrLho6x2YkXpayv4d8nmyyLndDb53cAMbA5nBw4q9x6gW1zJM2jDAPXLmZAmJndTokGufWVpy5PY",
  "key15": "5Lcw8VcBoySQ5PjRmDNF2pHpV9sVkiHWpQ6D92Te1DE9GbmWFZ4BcNi9qzD5J9hEUMKSHPA2zwSc1S4Dm6cCctLz",
  "key16": "5YWpKeKfxutqvyjtMoHasJ9QTUmWA71ZV2fpp6qvg5EvmsGEx4kSRiQ7tVPPAqqRzjLehRveyeRHYgAiVwxiqcbk",
  "key17": "67KB8xyN1D8gkY6MLQkBouhwtL8HDX1pfXm7JdaAJjKnGupxVMEMQ2PVqBGMrXWE6gBnVTL8qNj5LpxLMSPTG3a4",
  "key18": "3Bq57M8uYHRZvyETzqzL5FCsUPK8xNP5Be69Ha1115uQuits8GaoJ8GToC7u2BiYeSeQWjwYA4ZLgbARiUiY3dbx",
  "key19": "ia1DXQ4bjRDC8TgKycrafUVg9H18tarhTv4upDgzGDDjpc5JkigWvQUbchQespXYZ3Yb9k8ZJ3H1puJJyqTqKM1",
  "key20": "4XSZRQAZ2xD8uQvHqnH7Zc4icqGYy5rDMxbpxjnWPS87N3co9MU6P9PsGKac15GnTnjW3Z41zquSDn13eGUjpS5f",
  "key21": "2dssJRmwHLeWDqXo3EefZHNSwnFHuv7nn75TcKT6VDtCSiJpMmLXZ65keE4KpDLTfJ9LidMK6qonteSmwyLRr96a",
  "key22": "3gAgPZpGK3Bj7EZTVA8VvYkwGM2YD2E2dt8ArKsTmWjHUx8xUigh1qmphWFm6cR5YQRexjD3WnrUMzd9ynNzLJvc",
  "key23": "4kNEUT2bCWKDytUHH72zR1cdof72MbPch3GCBp4ZEdcaQoQ4PUA3Qi8dGEANWB7K7oQxckXi6YryFPuzDdy7xXZZ",
  "key24": "37exgZwV1Dz8r7S3EWVvBvp7dj8mFduJf7Q6tm3NWeiM1CePu95UsFmNmYuUjVh78hJT9a2rNC7pUv9R5eJ6NzQG",
  "key25": "4PJR76uLPxqb6oj27UR1AdxoeNF6cxGenCLfYUUXAZEjGqe5pmRg5LQFetVMNsxmEbLzD3yUn3riaenmrHRMEz77",
  "key26": "2zQExbCxJJFxM3ZvFs3yCPfNJK39pidUNyWZn6h7TQezBgr8MEcSZD6AqusTyqh7Ps9yyxRo4x6WbKeobCnpJUCs",
  "key27": "2Uo9j8whcDb5UMMGX6eCjZrRzUyu3Mi2XBqQLjYdm8fFydCiDKWWmNwfATsFrmhLYwHESdbWkYxdxMGfHYyZRg8f",
  "key28": "4pyEhDhHKmB2hdppAJzNc7tnYRJL1eW6SY5ibsqFZPSX23xYrmwS7F2KRvSn9ErDXtRv3PFKUAXoYxX1VbA4HVM5",
  "key29": "YEAjVB9VTZdS5rt1VSCeiNwPcmMhQFotpCAsFpFRwSyEnA5EUekEp5sdhMngixnfNWq7ibDMWLTdMzEzaSNAjUx",
  "key30": "4qnsPVxPkoDJHjKaRQY1KUyqjiX42atytvZc1zV6jMzhdJE6fd9yJQ5q4LANFwyzuW5PuRdrgH9ewHtqaiEYXB4Q",
  "key31": "2hTDQbD4a3XEDm5WBQd45aiQEPZqLdGwHbY2S2ui7Hvfpa3H9zMATVAAuvrhE3eMVfs6rUcUDGuLs1icC4U2Vve4"
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
