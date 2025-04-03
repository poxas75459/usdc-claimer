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
    "5aFMG3cLhH7oYQZc878XzhGvbT5VuYR2Wa2Vpa1hjivYGDHC8W6isdaFxKjADbbbcgFNw2hJZMCvK1n6j8WFBYsM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vbQqQFpPimmLtF4wLznwvdZeda1reuEhT5Rw8scbLWGi2kABVgkZPxGsxYXCF9GRur8UfD6ZUJ3Tq4HzfyRifUc",
  "key1": "5WmK31oqEAMg9RjgYTW4yaQ1aZboUmcvzHbNiCD8qE9YfaRn2ZmhevmVA6ksj9TJyyE5MwicarZcMLJX1DhYK1u4",
  "key2": "n68pQZgz4j5dQiiVBwXbGCcDfGRBruwvT6TJN4tzWPsUJnkXR95euaBmj8VpnyLca1Kn4JM7x1D6ssMrTrWWSG5",
  "key3": "5NCLRyS8kMVk6uHTNJFnqY9rLc2uxEJMHY4mWyBT2pdNU81GEmFRtiWrD48vw3mz3VJ9idejatrRFUAgMzvVix2E",
  "key4": "2eGUFWW3un5dSuzh7VJZzZR4Lxvt6AP9Fj3jspPf3ttR2kzde9YxmNffz3tpm62kkW4XauxgzLEYYozS1VEk9QMH",
  "key5": "23Nj1qPcH2UKmmmTdnBPKy2GHKxSyffzdsavoTZaiEN73myBybZqjQKis5ZoYvRb8k1veQDoxUHvXiDJgnuvdEWR",
  "key6": "4Xx343udLZkib6NHcraPpuN2zHtEp1imjN23fbaJuxK4aW9YcjzVMLePWPQHzqSmFQFgSUEHghrXdbXrKmWnHRtn",
  "key7": "3g6nBDfbW2izUpfW6btXCiHHVLBNcp61iVJjA7xD4o57eqEkkJYcgAEUU7QP7aiJwJ8rhc7qY5ebEPJMjPhoLgMA",
  "key8": "5wAY9op3wGfTbSBqExcCTN4zWWtok8jDnZpRJ4JRi3Mqg1nmB6kwG12eAbZd6BxBa1FSQvaLfXfekuGPbH6hrgpk",
  "key9": "3UKb8Ckv1XvVdiMr4EqWQbz8zaRFMB3n2qgwASz4gQf8qRbNv6kEWeZm5nfxs1t8APjmd5HzwN1RZxNPYyTkZfed",
  "key10": "4JWKxJRojeJcRZRzS2TEdbHCqy29SBC7YT9By6VSnn4CHsUQC87vAWYC2MrDSVVYrgTNVxy2SrNUWNpK8NYdh1YZ",
  "key11": "NcaUJhLgSCPk9px3p1AThrHGVVgm9erWr7zCGx7qtCFN5oQwiBDJMPVraLi4dkkD5KBPMFZxPYvnTSFUxdwoGLm",
  "key12": "34v8d1wLMfHfqXhpdZsL6teXWB1UisLv4hBxDQyuSVJzN6cj9HiwJjir9kE2fyASn1RkfjE7k3gwWHCdRZ8qeazK",
  "key13": "2142JJx5tDMza2Wfz54ahtQnzVKVbDG8unfgATme9xmq5GqcCntAS4R6ZChHZGSL8krn8D564D2B8KyYuHU1wKTk",
  "key14": "5Fy8kFa9thpsmzZNZEpTsXMYhjTxwHqPmdLuHsDLB1a8sQe9mBTYspwi41Zn6UCPcaM3qg6yNMuQa5Ua8TgSKnyp",
  "key15": "4n7nY87YtkDDp1rMxJACDL9z4EWZassJmPvSFhXD5DmNhH7jDkBMY3XShqYAhfEFTfhxUgEQhuUBLjhryMVZDfPT",
  "key16": "636KCPjNceTTp7JcsPEhZrjaXL7nguV3uFAug8SnCE51B64ssnSTBZcs8gpVKjM1iRKhWFGoQnKKs2b8ZaS4jonD",
  "key17": "gmm59n5q4urXe26TVK5DEmPFtb2DuFhFfsHhaZWz6Sm6ggLTsisZn1xDrbhyhchGZPsfWQNDudpMs1dVfv1MFAP",
  "key18": "2udam5fSohi8WynAd5SyWag55LRLXKUmZg4QQJd19ZDSQGixAidzMPgbvSxbWoC8M732NNxAJBWmzEJXkmvgbbJm",
  "key19": "5LebNYADvUSfHLhEgopiCNtyWgwqyoB5nCodF7Heq1uSC9iryqGmqFHqqNfGoCxFGm3xwuC4pW9euShgqhENQb5g",
  "key20": "39NFrz8ECBY8gr1GfKherYF1664qQetVG7YWVcSr6ohvNgDWK9XZFEdD91nL8jhWBoTxAGJpM2VGhPjJpsmgPnJk",
  "key21": "qBTLuZh61EcEjYjn6rJ8ewAtgdfLeUpFPVrzYpSbj5WPPALmrvKWaWQw2CadHhByhqFgd83weDVm8VoEmtcAvSm",
  "key22": "5fbe6i2NUFRyiDUhfc5juDJAnrCAiCzuif8nEi5brbvLgmrZuCdB68KeXkBvzh8uocWUMpzAWCfoQHRg4MFDXkVr",
  "key23": "2bCLw6PfSK8vTRZBJRMsx8Ga8K53giuoFnDqugvDxRTGHhcX6dzVZ8bSU5v8SsHtZL2q7XLjUp96BfMhZJ3u1NFt",
  "key24": "4S9eM6pNiAykVCkmdii2FQDrTinh1quvJwR5FLkmrTXXeFA1W1v4LgAN3xnWBibERDa8TeMcVt2PQT56FRoBAoHn",
  "key25": "4HVsxizqxLJk1AvVaw8LhRhUdvC6gpxAiPfc31LRMT8t8US7QJpTVjuUC7zvVQ43cy37FjdfGzfEA1mWPqdXgWni"
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
