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
    "2NEesavfSJ5HkcyGjwqFN6AKZEj1ADg4JceSo5Tm44mKsiXv4WDVBCdNbNTdPM7FyBroPmookmpCyeAi5ACXbjUZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pGGvtPe9pRfXW5vDT2mdbhM312F5x6oRZGDnHKioveLWs6o19CVifB83BtpB82vkxrxBSFbxnNgUc7dAh7QTaXP",
  "key1": "3P95K9LW92qN46pwV1Fitq3pKmLpkp7GaiXTmooJd5dGiDTt4S64ZQDXabNv6VqusgsNeUFCrQ4yCVfkYmyzaGRU",
  "key2": "3bAQzwynonyzJvkhxBgSYUHD96xZxtFk1dRSrXzsDT2nadAudFEmf34STsUyWk4kKK5rjasYQcMdYscCDu9Y72DF",
  "key3": "4SCRsR5xaPK8eP3BXRrH9DCMF8PVqagdPXTTnicmZxwfar7SDES6W7ciZHraUX9xE9r5JfiDGhdWTRe92vFSsxAs",
  "key4": "3kDasFt4359swLiQYCtGbo5Qi88b46P8orKZNK1g9gEhSPJDGAZdQfgqwFxzL2mjbXo5RHj55GXEKZcdEkKRR4Fh",
  "key5": "5SvSFixHv1vYSbNxL2tbZGjjPiJz4jjDPFzG5LFGYHLLZmE13xVQVsPZDp5AxsSxSiQUneohPGsMgQXBJCPp5PH3",
  "key6": "2r8SGm5DxMcAHpULzqqT6ncCgMzrTQeQZ2XLTUrPxxAqToKegEWAiGbsuXACW3NQvSdFKwWBDnXC9mxBdKDcYrVf",
  "key7": "4RRhJfoTTfXKMYR3nMPrG2uKSdZRZn949xK8hS3pc3BFNn2WbKYozfJmiR6zaPBvPVzB1dsdm1dnHBYzsfAGtTLB",
  "key8": "2GFDgr3MVKn4u1WxRE73T1CNYLabuQwmapbe3PcsKKZhgGknYRnJYcuPRvgpajy46azhqFQBC2PMjvasNjzQTEi4",
  "key9": "3RKzTheq89kLmieuSbSdyRAu2UagWXKSku8U4CnAi26Da5FjHWP6eZDYjjdFdu6vDTgfsb1BBZCnnXRjqqMo31hV",
  "key10": "4dJzZRfUUBLJDeRpqea777dqiwNAtvYQLngUdsoNFG4mcgSxDjoJpwMBSVaommCnFTZRQSfGwpk3DXskzEe9W99T",
  "key11": "5C4dy31HLh2th3YEWabgpoNvs7G7quddSWCi5FUboiE8uHTuWDLbxjRczd2BJTFjZNUfXyCeyfCznqcYn8WqVt7X",
  "key12": "4CEj8izTGEXvyMYQdngtvkFDK3q61LTvrsQkTpiXyaHZmSnGzKRaZ3GJGJ97N3RuBXRCAjHep8vqr2vZqGi1aYdg",
  "key13": "5yyNFJ2RJ6xngiK7mtVKpFD7qnfa3Z3ACGLjwRzXEXfftN7bC2eGwMKHyJZHWnbbd9F9y4XoB8brTnrYgpkY8vgA",
  "key14": "4drqzwN3HUoZBzGVUMdkTBXY5sGpovKHXAyHtTXsKn1BLFDysAUqXzjcucvacv6qCGjgSU4AkVtSjxTvL2L8eygZ",
  "key15": "64koLf3YRbKUPpYm8P9NZotXXFUviuuiTeijaCGwNa49JjcmJ331RnqfN6NfN3xkSEKzJY7yyK4zCAhmwiKgP1yH",
  "key16": "4DZ34TZzjopPNuVTuXETBX9bXKjtEGG84GqpdR8uUoujkkqcV6cAsTGMxbFaV7Vgq7KitHYsyNvri9FqW1mwZEAE",
  "key17": "zNBoTwFeZA45782s4QQJGtxTC74a5CfQh5Ru8PszLJcMERUXYQF94mALSaB8KRr3kPgD56b6hPQHe3pSPAAwFZM",
  "key18": "5J6Ts3LHyjHv2P2a1TzwDXdBUfA2BvJsXH6XQTfHqDU2LV7rqzn761kV7a3utVTTojSU7esnjMaCTGtpQP6o9UJJ",
  "key19": "4Kv67eExDkLKonPM94AjMjhcskYiZ5qgWJ9PH8XBtf5NmH7QUh9D6m8QyPxyY6CW5hDXzSLRswumpAmz4ZMp28pw",
  "key20": "5ZwSCqQ9LFKJJMRTAp83HnruCvH9U9PeSaxHuXGTWdbcqGqiZrD94UpX1fja2UX1WFZvFMn4kLe3SniX6mBM84VR",
  "key21": "2A8XDoFZ3ByaMiybHKyQV8Y5fbqYmFDZchNRXTBJ3XjoUUD5S2wbdpssABnJF5SJVVYehiHss6uBVGWCVyLm7v7x",
  "key22": "3EMHXJZY86P1cgSkxdreAwvdnvUQxhogyKdmokBpKnLBN39vfrpGyQvQahwhNdi3y4AQAgpiCtzjDNgLd5uYfHHT",
  "key23": "5vhZFmMekcntzqEqGjueMvR237arnNGnA24cnRxeSCRwquP383o71rWWPirAXWDAVV61q4FqQpXFpqNZQgfSQEJY",
  "key24": "3jTssBdBDpUkjyhRGSeeZX3KtVSW4B98c1THXTcer9Tnk5zMUwbwxSQfkepBZeB5nca2MP2zZqHYwR95UkUz7rSa",
  "key25": "3WGh3shYKQDv9rtYMXYTnviqiAvf4a7qXGSQPcikUd94FTnvLoWaGUHDfLiaKXbpzDoxcvu6W4jwAVsmtDAKDyRB",
  "key26": "58vhPQ7BHH2Hoo7NFhvV1JtEnc1STbmYd569KxhWyLxe5Bnbun4evCvk79h5gRJa8cJc7Gmj7B9wCueJ3faT8VHT",
  "key27": "3Wim7tkXE2y7CfCbeYzwDGkYxrLW7VQCJZt6FHNZLKpuuSGqCa3QLHC3wyxWT8XWrtnA5LyCNkj7PyiNV5cj1M6h",
  "key28": "4j7VbwKQm3KESXuSj8uVqeD6ezP2qufui9hYLvoSKd2RMjrZA5fcZkMky28a64f8GpFtR6BTjnoCLTHXRR43oq9Z",
  "key29": "3f3UyFEPmwwYyewk6gEhNJ64XucdLzfcFuk46ugimWrVXsFBxscZDLUTV8EFwzHApvBuXMYBwFDHLVq3NkoPboT",
  "key30": "3y1KjJLHcTnN9pafhe9sRJA14FzCanTa62oPjS48K13WVB1nbSVY5b5NJPbQ3EqTvKEi68CpGEPdxdDdFKE25Qqg",
  "key31": "4LuxXcCfa8r2oPASNYLQ8A4MAh62rruFKJQZnpknzhL5DmbdPQGq67S2eEa6SRCKPsLVaFoewSu5AaycThkJ2xXj",
  "key32": "YaQqxjE2cG1CqSosZ7rYyecbE47GMHjM2HcYf4f421LLiB5GdVypXHCEvDfXxG7rjcyZq3mxgQT74LeSruW6VCu",
  "key33": "54TTz6MnXKZKGdiEnxhz6xwdnrtZhyNbcaMG6CvWehXkrgsnojq6pmnCU5wuX3pJ8WmVgbDqTz8gKnv1w9qfThZH"
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
