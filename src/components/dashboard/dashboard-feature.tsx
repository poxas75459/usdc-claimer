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
    "4q8km2L6XjwthohW8bvUg5tk31TDzjyKvb8hscrH4ZE2U26WCc77f2un1fkP84qiRZe429rBmWhP3wNdPJYYdTKe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k7zWpgXe96bxG2Ury7fPhRkboGC6wvnDzmNR45qbidT5UUpJW4W1zaWWL1vFu1EkKtTYtS6x8c4B3hJ87rFFaPD",
  "key1": "4i4Jo1EhbdpZgvbmronb6E9cFj8Us5uDAk4YKbbckhYbbQTU78n1QXE6zAiRaJsGp1mn6ACgx2LpDXoJLUkn7G3C",
  "key2": "5E1P77uUFAicJ1Jfb3T2vanN3r9vWTYJTXQtJkTYJ9uePxmTSUAkegqcj2Ms1e4TebdiApPb9HnH9aYhBot6i2u",
  "key3": "49DZH6ueiXugavddyuPKTcB5ApA7GhGgan2js44uKmuY4rLyaDzZUh9FLtkuQaAzGTmLDkbxZ7AEF84TtCFHN7bJ",
  "key4": "3CbGPniESHtRW7CBUpmo2Mw7WsXU35j8WmvijzPp1CdrT5jU3YWkDJprEvjL1TpQgunKZdRsLDqsMVJ1KsMdKewQ",
  "key5": "72Zy3nf5Y7Xf669eF2ypPojiSQAo1UmCNRWwo1gnxz82Qszujhy79e5GxVXJxFfNgAwhe9TqTmdmm6wAg5LpJx8",
  "key6": "3KFMmNSwxAzYZcS6LrGJP2FXtxNym8C8XzQKp6B7aLeL2zYTGdg5WPUG4HNuEfWpBgDppWuS5fr1rFupSp9PsCfM",
  "key7": "3oLmLXgTxPQAPY3mjKp7xLbhkB3a78DKrkT7MWDN7GaTdYDUTz4phMgth3rLReLwmjYuxp2TcYMR8LgVZYECHqpG",
  "key8": "3oP3JUNaC4abm3BvvcEh1dSR17AR4UmMQy7uLxAgXA613BYsbJpRDG46ZMw6xQZmiS3K15EMjwUA4AWSpzz4pKPE",
  "key9": "6MPTSefuT21jsT6cmpG2ED74mrccQUsQLPCx2fc73vjwPX5c3hMAP2K4J7bqJCweQcMXEbH3DgChndqNNJ9JKvA",
  "key10": "5ngyH5eNiaHAg5aRuRvgssbMU952WoMEVfEe8huroDKZvv3tj4tkohQT9Dxto161rV3zhAqYYJwYq6NDSHyUxzP3",
  "key11": "4HaNvkPm1BD9uvg3jP1HFZVftdRPpCg478mpEt6nhCYEPCwVQWji24Kv4fp6ew14edXVH9m9QWMAut7WkcfyKKqZ",
  "key12": "3jUvm8cs6gHJQq3dChudEdmB5Snt5rvQkH8hFyPDoKEy7vT9vHppT8Lf1mDhwcdkHJZiRJGFH7rTGxejEQfXqJmo",
  "key13": "3Jr5myamikG4W1gu1Zptc5kYzNUPAoYE3amsStj3pRzE7ob9g2uFK4rLRCn8RF5PBykLhR26P2byKd5zYUW66kFG",
  "key14": "5HP5SNtGku2DaZBrf5LdE9aHRr73Yrp749nkbwaCNyXHZW8HQsWiUbgMUxtXzv59Ymtgy59RkhyeArnpe3xdFddi",
  "key15": "FTwRBN7T1xmxDsjn7gye1ZUCramZbyRrwUMiTGXcpxfugCgw3PVnnkrX6gpn6mHdZH6eRDzttNCEqLep2VPy9QV",
  "key16": "4iXhFnG6GBHE5v6sNS9yJDWV8kbQZRNPnGRKNSNc9SABgMmJHdjgKrVkMR3urtLHvVTkJ7ESKe8NpQp7a55vahKU",
  "key17": "2vvytHm2Cogmcq9FyZaqH5GC7wJEmqKnZNTcWYdxs7Q6TMFBxa5NNYDpFEssWySJpLQfEooMwK2bswhz4xBWdKz4",
  "key18": "2v9H4P265RAYV6jsRqidpNeo2Ezrw5ZgYcxpTm21XgkB8RzH1X7oZSmsjid3ZQDqDbyhU81BrQKTXdoLod7W67wv",
  "key19": "4efSpsM1srrn2XxqgH22LyS3f43tAyB7TkWYm8peuar4VLjDXyLGHzCUvqwhv5C34kt6EzyDB925CFBqavPBLExe",
  "key20": "5a5gWVA2mYUK2ytJYNfwBkM1VwzvPknxcSPoX58tdj3fRd9wLN5xmwe9CeC9ijhoxeQM7jULJrJQpmVFmHzLX9Xm",
  "key21": "27R58BXnVDJP1C1bMVkn1UyqG26gHeyteoqUbQJbowzcte65AGpTubGfPB3J8xWyXtZmqpGj2NZ1dUkGBz2rdAb1",
  "key22": "txAfDVZxpVSPF4fYveR7Xamf2Wfpvw8odADohjht14vMevgMxGPUgkbMoDfHKPa6Y87ZoJs2tY5zJSb7Peobrd2",
  "key23": "2dfWTDw7yGSBTb3NPPNfzjicdbBDU5Nm1zM8oMfMtrFCX3qhEhrPMcaUAJzCRYyxo36G1Tod66ofvP8hGYr7Zkvr",
  "key24": "4U8k4W55xBrj6cL53tUZkqeFTbQ1k9Eq8f9NffcQprvPTKLhqpvBCmVmeKswGTkJjHa6BtKy4xojPaxTVbCkwUqX",
  "key25": "5ETBqSfanevgmgWSNiTMcQT6j7Ppo4SJg4DYGmQ66uraD1rpwzpdTbKzbWqcQxkeKvTyxHWEhEKDbowaHrXD2QGV"
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
