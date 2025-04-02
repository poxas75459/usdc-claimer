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
    "4Mqtrpz4AzL4RBpppr6bWcBAQ7qpLfCf7EYCfACQneVn4YxfgNrfkzRjGnNdk5MbB6QdtBojkebmsVYg8nk6C1FN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FkUwVPpZ1nHpnno9goWswFkv7JBvyit3fg7gRm4wtXUjDusgqaB6jBNdtgmZUC16L8cUYaFLcYqYdXCiwcRLk7K",
  "key1": "4RHBRiHCZYU8gmWZRPtf1RoWPBVfDwPeV4vETZn9x6bPBppFVCSjtLKcNwmqnpBTwBqUFqiVgFkHgFWeAg8Tuhs",
  "key2": "c6tqYJ7cpWsy8TyYezruzD7GxNhaW8nyu4BoLKMfyuZzPGp9wfXH6FSh3R9ECFguhAwg5GYcVjJWRiiUQgZ8zkW",
  "key3": "9BJbEDaRg7a1ov8Tepg2jk7anpxJ32GPtJ765uMwMzPaQzfXTDaboKXCfm64ac7axRvMxivmoHFtnSigXkTU2Yc",
  "key4": "63TwkN4ZGzCJAVbW5Do85Uoq8ZSTKWeT91hHp8g3EXDoAvECbbaB7J73Z7kG8DRDmQYjKkx8qVzfawYJg4j8sscG",
  "key5": "5wFPGaCSkB3RS6ikCCwPjap6XZ66z7x61RSMKvyQNkbuTZWgVVM8P8vZsjmAwgdL4qfRryxGGQmZKnSqvKQ6Xp1q",
  "key6": "2DHhipRajjsoRT5TMXMZ22VHFS1ZnohZ4Db67CYBL88QZ42WaN5B5XoH46R8HQtEHcf82J1RqH3HdhUZisFiNrga",
  "key7": "45H46jgL718h9GFFVt2erwZuPauzGvN14267gWK9Ab9H8AP6ap4voqCXm37oqTNWG2KQeTpJs1UwCA5sPEoY9gaT",
  "key8": "4J9u6RGQ2cZSbMaDTQT1yyJRBcPtSb5dhE32q22CTEzzeqecS4kA83x3oeYFSgpBXsP68YpxVnutGetZtvVqsDBZ",
  "key9": "44X8DXcydz8rZ7o1xXrzekdKryKMpT12xZysCRAvy4Sstn6NR3fn1FRaxjT2GRtDapvetRDj34riZcV6vG3UWpXA",
  "key10": "5sdgjTdd7WUy1WG7KwnvA6LzR59rfkdMbPfjBaBR8F2ZcovYnjEy4Pm2WVirJoiEPMi4mCvTdieBmbUSpJjQR1b5",
  "key11": "Jj69wkdMgLr6REKHGoQs7Ro9J78aSmFd8GGk6SGFXYE9DYuUNeqjGgyXpFVkK6Bi1YXbP4HvdKvSb3zPVRTGmsv",
  "key12": "64xePt3VPF54qgpNeJAv3W162Utd2Ln23AWMkeTmKmMn3iqSKZuC1pS3wx6bHiF67v72VoZGGPzxkt5ozVzTFeUk",
  "key13": "3a3FU3kcQhgQhgJYMSszjEqG7DFCA2B3nkYyVd8kGQFHCGx6BoPXDmeHvgJ7B5g7GB9sA3gCnRer1LLX7NMoGLjf",
  "key14": "51TXNFXqdnsDsTnqkTfxQhgPzJkBHnVtab78kttXdN57MJx4PEbo9tYvBvq51RFuNVxS4bYsafE8YRz5PTjea49C",
  "key15": "2aFQcM6hqLAvmYHk6Qa9jCfYszzodyDNs46Rund66W4VcL9JvCdKC2WDZxXHCU2cZLryNLQQD76L96wcRkzLQRSm",
  "key16": "5otviUaLSrH9Em6rUgx7bGciixz7FxyZu6qrBxUvdjtsCGTtq9f1b8iVZW56Na3MB4UGXGoq9b8jvjLWcPSLC1zE",
  "key17": "2LFCadqVWnxmL3tibxhNGdt1DK4jfRMPEDpjUgj9vXdKYjhWa5srgoGj6eN96Wi3nVFG1k9gTByQcBauw5c5qaoz",
  "key18": "4gkVrYULKNzYxjbnpTZQAUcqdeNrMBaDhuseg2frMmvFXrSc6PTNVJjLvMhBrkwTF6c3uyeDMe6QQMcQdQpk4zmC",
  "key19": "3bXzfoSMPfp9KskpWRTHh9enDBRz9BofHK7Vyq4qAsr9FiJxiHJqySJo1jS3NCAkuQeLjzYZk22H4J6VqpEveS2U",
  "key20": "WyHMGaXXW2ybJm7WukGF481xTDFz7Zis6dPYi7V6RkLev53hHgJMiXaMkkXa7RwMsJkxwxtkWLBfF5NVYV1mYt2",
  "key21": "5ZcBAgrJK4hX2uEircAoZtW8ZPZftdmp7Pd7oeLrMA6RMh9tcctDxrzJsavCnZANxAf4egwvcinxLsaX972ZnQAq",
  "key22": "3sniq2HRs6qNRde8qbGRxuFdHtDt3TtPC1nRB7Yimjk3fooHrtmJnY57dBTUBFegJVFLBYeTvAHErNAoxSMimf2T",
  "key23": "2zftrydMt1H1tfNi8ERbtz79UAcQVHKw8rSfv4A9k3Q5Hh2MufgAXLw1GfZ9VEBSJZuxPeQoenLyraRn9HNxaihr",
  "key24": "2Zzpqqk1D7WBxFDGdohn6h3nMDQQXFdddCRaKr6GPVwmzF2rSjQZCiPmuZ6QuK3BybP1ZKV1NLEGoDBViXxjKMWu",
  "key25": "QyCF3xP2vrZGX7f6bYZj5SMvMQhMihYXxBxek3umpzZTtdJ1Je5Nv8KaNL996idCocwcYNUV5erHFajoRxoFsnn",
  "key26": "CK9Mrr5ShgVJRBF7F5QiQVzjjeCXou4q1QVFwRPKLpP3vV5kZLmWoRqwfDJ67Qyr6hYJXhSbhxX85bWN8GawYGs",
  "key27": "GTzFyqdp6u1JzxtT4NSW9QJT1bgD4GasfkBQNN1p6GM6SvNQYWh3y6C9npEgunrUEbjBNc3QZj1LWvyCXha1Fcr",
  "key28": "2U6QjCnfUd8R6UJBXWystbgFWnrTXsRFPizNvCTPcrNDcsE4yt8WUBKtLwTX5QsAyQD9ghQ9FnG7w7W4CUjthBmD",
  "key29": "3Bimu4YYWKHMrLPsGTh7hcYxguYHS6j52pwic5nX3QEPSQWsyAofBrjwCs4yKN8QoZ48Fdao2kZXpAjtDdw5zKPU",
  "key30": "2qotiJTmkgrVNE2q8iydhSXaeWrccokAzf1Wezh7H3S4YfA835x3UzUdnAKH9pAJANSSC6oo61a56d6EcYrDByxZ",
  "key31": "mQv2e7Ui9qcj5HSat4d5bVS4gXnzFy229Cvg9zSBbwhEXjktkg4K4VB43g2a3i7z2vJrQRqkbGbt5Hstgk6vXJy",
  "key32": "2HNPnwLvtE5WyFNKdfn86diBfmunaQHkqVyaHif6xaPTBDRHaLr7i57Nc4g9L4qNHENYorAbF7ip9E1wZRUTtPV2",
  "key33": "3Nkn9k42DE6FDrJvrmDbTU6qciohXNQiXeWA1pwW6Q3rMZdZfUbY73QDJUFNFbCujLZaLsMRTw73FPRFtMV6Maxz",
  "key34": "2DHf9ECj8PXVU79A4zWKVQQ24jAGLZJysxppcfe7mH2o8TWVQRXTFanFFN1PXKUYfuwW3TSnCox3bxh77MZrJo1A",
  "key35": "5H8XaEZYNK7ojnuELuk3A73kRuoJddx2hrRUBxv91DEKVRh88pYoxhdyU7xUt1KR9kPiDvxVMysd7yqbzcCKAJbY",
  "key36": "4Hu9FZNU4NBoaMMgZZYPtbXyatmvgUpFZf9roRBqJfGAWdFv67YhZr8dCpuBXskbpvt1fM472nsbfRyzVrXvkdjD",
  "key37": "3BWwbErsjB6B6aHn7us3KvsuyGBNZF6jAYHT9EXqxhLQBEboDE9eyCYjkxArm6x6sfwpYNq2M1cjgxBsgwcymn79",
  "key38": "35iBu6HuaE2o3kEysJwWpNN7SpdD4M6kLtKuKKmxcQdaU6FjsH4Liv1w2XHLcXovUPVhC2oQkaTLdNW7Ee1AC1CN",
  "key39": "886UG6gtAuwGWuLL3VQVZydYYeLtM2QcQ5PDrFgD9Lrsehjztc94LxztZRzntrH1ZXvQHitjnrnyoSRKEiHszvZ",
  "key40": "WXs8PPFUBbJsfk38BFYuAgpSSjsBL13mFFhfupLhx5EqqHzUr1y8UmaJkXQ1XQaYKQS59aRugMUcvm9CXesdv88",
  "key41": "2NT1kEzyYbVkqazZkEMFahyjF8Ncn3cFUJiH8TKSMJhvhKbivLHtGRHmhmYGd6LfL5Yzxj65QDd9wJXU8CZL23Cf",
  "key42": "2bozjCiE1PTR1zyvfpkLXfCLRFY2u4qD2hyft5acgvNEpVE2uLAqbakPqxCFMpxE2xYPSJVukcqDqW9b9KnJqhh8",
  "key43": "4rJ5x351Z8CifHhH2fFx5ikm7hoyhYGHcE37E2AoHLdYBYhAkPawCNgDa7ZuSncjdrEeNPzVgNjof8fbrLZHLrk3",
  "key44": "wkYyjdqHG5GJRYu9jGA6Sf235896XBKZrcm3cZdujvySJ38tdTnwf1U3NZUxKuqAh1CVMsZLWV5Lp66AqAizR3K"
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
