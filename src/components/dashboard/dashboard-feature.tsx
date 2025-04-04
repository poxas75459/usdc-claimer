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
    "3kpQy8X7ii6jamk8w4KQT6sWR11aEtbsacuShEdbhYcCdypBRmdmgpaxVZwTrkFWvLw2pGFDnFfJehzwPdkqK9mz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q9EQCQsZQEARuNUU7YcGyp1Whfv75XwMik3B3rhJLskpTiH3WWdchmJjyngkQfUd5EfCbLXshP4X7gZossKVX3W",
  "key1": "2SVggBxmgQKn4YazzKseETT986iSbe5enLAjbaD4JPL31zyP8UqqsnFNiaEZkZnagEKgqCdbVjkPmCYrsQkSiE9k",
  "key2": "4xnTnSEW72szpUbfNoWXtFE4jtPMhdbQqGNqvrBt6JgAStNQKh5H4LE5cdKNe1xFNpJ2pbFjpfChbW7xbtkAsKYY",
  "key3": "5gdtjQzMQLVt5u1zeGvSMkCX87Pr1xBzWoyqu44tzhUjXYWShQpEJAiz5t1fLc5qjWE8bHmxKgoFxXDicv7Jdm9i",
  "key4": "49cGLNk5fqavQA991aCetsWuQEg4i6zmodUp9KE9Bt3fFNje9pRZ1458yzJvSfLBYSNncyZUikKiFra9JNyMeDKY",
  "key5": "phzSPRFwjugUCbVAXCvEdw3teUZdcSaMpGbT7ULgyUe7JP6VruXxYiL2aqk7dQ7tUXaVGnHX17Pdm5cGJbJZEWU",
  "key6": "5jyKVo2PqN4AFxo786gZSydw1yuBtUezjXyMKaXnWEgMUSkQriPA6o3cuVE6hHnfkqGsQcR7NpHv6LnXGfioVTue",
  "key7": "66TzQfSF8ZY8dTZJFh6bBVQArtkt8j5rDKvkzK8GNwuXBSZaZ2Taen7zTYoHyvPXQyjjLjQYpfVwefMVAe66ae51",
  "key8": "47X4K8kamD6fbvCTS97g6Cj8jUQim4HgEBQPPMsFJrZP3XeNtsg6fuJf34CDmccmHaJJQc2A78V14rAjaw997ykk",
  "key9": "5tatvhGeQijTSuKsKwhVgurMqwF2cV6imGYnwJECKJeLXwrRxEingbKEhPiKL31KEqkTAKyYwcWK5b4LRWzjjFhF",
  "key10": "2JmBr1Utu7VwKWCu3VWUHXUSPiqPTtEtvDeKP6XSfpCaGACSRXzWerFT5iBLCHx2nBjsxDxRxQuxbG7YMJqe66o9",
  "key11": "2KGvrLJRfRouDSuADFNyzEkVMD6B52NSjueovZqLwaneMsTywWZHvwcQFQvRZGfyQyt95RohoQsjmCWebEuifBqZ",
  "key12": "2eBimkfsEGMsnuKBLRv8hissw4ijf2viX8JdC3hQvDTeHKqpsZ2qF2yDuZLE74S2wPaFNo8LBeMYzSpdQEUPP4Yw",
  "key13": "49GEKv2dZyagwty8bpDYqPM4umxqbwkZNRDHcr6JtcuM4bR86c2s6xmUKqgr3DrsniSLge87XB1yw4h7VkZFaL8d",
  "key14": "2TMtHZqN9GevjN3TrtP9spTm3ALeaSHwpX1FH1auaA9u2quUoc14uFsuy9ARA49dZhsQm6iv7DKuJLRg7a1FumaA",
  "key15": "5GCBgkcS2XNcuMjkr4aHEMMa6KMbPRxnzBzWNbbxcLsZUKKo7p6idWeEAEdP12irecNqDtzQN8XJBHCEpeLcEZzn",
  "key16": "5mCULkiC4TQ1onawbjcC2PDDwDKbs6RieUk3N5ZYc8m3LjUcinn6RTDW4qa797tNobqBuYqR1AqJyLGzYdaFVgnc",
  "key17": "42bXTLXq9Mwio9rT6bFiq73D8WXuvH9XJwTMnaMKMYuNCjRUHiem3k9bD2kLcV83rUETWtZEEAF5Ghxz8gRziHki",
  "key18": "4cTFgBqqAQ1HC2fDQMvFJTa11bK8s8x98yWqAfqTfT4KSUwdFF9vrEzfyUNVecP2LYbvabChR67SJYZ4SMLpYRmM",
  "key19": "4Z2sbYsQoqoXV6yJ2FifRPvYwGMhUQvfy1zZDk2A8pJq2AdAfrpGCmpnbUaZ9Qsgsq8z1avXSFcxxFW1kHGT1g3h",
  "key20": "499a8nQ3wrUtY3Y756n1q3CMnfUtD66ZK9hY1HWjuaYu89rjFAqjYn8QMeNiazrQ7ArxgLofyXtFAnz5goPd8WEN",
  "key21": "57eMQzgzQvycmeigBbMxQ3P4adq9XaPMHxyuXPzgCRiHmTP6CXAoJ9aKMJnFSX5fDXjnCj7pwEhTK7JKDBYSWZR6",
  "key22": "31puoHo6x2YJ1RP4S75UQEZ6zUJtYsSEd8cfvbMzL6F9eyhCZh9SmpCSbDSsB4zcVoBsS4pfmLVZiDh9Jk2ZCPUt",
  "key23": "3833zbB7mz5xbCc5i2Y7WRiHXgoJfFDhTjCZrLt4ebQKATwpB6Qy3HATEQ9TYyxvf3ahttt9wovz8uF364aG8XFx",
  "key24": "674udvNMXLQeqZRGjC5x32yfm4qzNhmd9EAV5rmaGSSPgh9QxXcr6SDF9sMkMj2dfcVHWUrohisUvQwiETEpUJEW",
  "key25": "2uNDr5bhViMYS3ssFBpYUYmLa8Jwb9m7Xk9cSXQzxdpgv6SBeSg84mmLo3zno14JtM2xErAUJq6ovytFCWuN5H4v",
  "key26": "DZfJiLu73UaY9btGWTjmWvFUkcAgKokwbKhcCESvkhQtZyeP8Y7yak5SvihFCwTPe3DtDRXHni8mdw2ntND2Xpq",
  "key27": "x3Vk81x6mVDBKEZz7A8HjygHzQwMCWbN3gcThwy1DqBBngm9AEQCuExYbDbWxeCzX2XALReZCKhb1uesEJkuYAi",
  "key28": "5CEy1MFY5fopnatCfGvJhfw4J8sPwvEfA6pLoVMiX4P2GgcosDGmKsqJS8uCqhoopVjZUYXUAMFBoz2saKcHuuWC",
  "key29": "5Roj9SiBJjs6k8JmR6xYQs5ywaZ8xM9b9u3sRoR6LPHAJfthMzDZv3nq22bU6SAC7sRX2y4n1E39R943iAHprjDe",
  "key30": "5RgmyUic3SUwmA4FQcemDSbvhTEets6Evp39kN6vK7bHXaopUHXB63AiPWZBEv6fXQnwMM4A3ihFMJamqJVrXcrY",
  "key31": "2gmYCQ9ttqqHivruLH6fKZ9gHhsGmrg3QaUUafQf2rXHKHhJNDvnj3RCREgiVDyFEzYUbi4dBVujGGnKQVyx8DMv"
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
