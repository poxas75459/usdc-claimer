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
    "U7fHfXjnSUr5zhaqUMy8GdwGxqZoA6GJsX7Yv9zteUckKvKkCe3yBCdvy7sL5bP5erQLWRPmQwBTkRYCN7gM8mD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m7iJzucEvM481zUpp2b9oFC4btTz5gvAes595v3VyTQij33MF8XDFYYjKaoNpRUPLviVnxsBwbsQuSQvdM8eY2G",
  "key1": "BtFrMQXULLjfzZhRAHdVJ7hT5eocx3Dk8Ps2UEPSX2SzEmDFvZH7WTYDYYQo7Xzg81GvGE9HiPF1zbPKVgjALPn",
  "key2": "3Ah2V3mBRFfMRLgwD77A74xRsELfvuU9stzQyFJzfqYab2YGtpAGNcUmim39X59nHj9eNXXD2ZFvLwkH8wseZvgo",
  "key3": "fRE6A6FMgCrvReJ1anNfvReZSZvBm9UAmBFA4pHaXP5q1qDwR2KTxcRmTf2W7S6c6xbB9vWdtKsDdTwNS7k4ie3",
  "key4": "4tVtKmtxHesxuqcFzwbW1HTVtjwMCUs3fYdN9157guqMHpMbsXEBb2tDSrTNhF5SFfQkmu5cd1Yjk18WXTWxTJLJ",
  "key5": "3RWVbSdcoRixeRLK9VYKJV5UvrQxmuT7ZXSgWHeUt9zBK7v5XKm68bCxbHbKDkEDoWVygMbK3LUk6AB3fEESvHub",
  "key6": "2kYntnQ32zroNVRnxBEXLDpigpbsJRBBgBEu7R1PEpA5ZhZzVVWERyJQ4RLSuMwCoBExGKmxbKjNyb4wtAmaFzbs",
  "key7": "2gyBBjEo1adboAeC5HLTCjTLGBRjecgapmBW8xTA5CnNvCZhkVnqy2kk9SGdQnCVJUaUWdQd5oYamquG77FNj4iw",
  "key8": "112KK2eARzBLqBnCGdAecyswhoKByQATbq4Q3Lh5KeZEEP2duDgCBnSSnQffsULX4ewu2G8ja7JG9QL5ykajAEU",
  "key9": "4dKFfY1b1d5pqAkvU8rBo5nDSy3D9LbcjvvrkBAmFuxgehviTFNVVVqWwQsbfYEFYJgyB6HWV1uYoBDbDCNmAdVT",
  "key10": "3ezddW5KoiECbjCGZBKSF3GfFv8JgpQTPtSe3LgA5sqsXzYU1XhuX7Tn7xoUBAcML7yq2FP3BnBMqnFDQuAAf6Gv",
  "key11": "49ZewRFagFmhUr6hreRFJaAXKYQQRCGw2TmgcUAHmFi9zcw5r2zeaG4gWirsJo2LMcneeuZjFyZAPjDQjLasSx2f",
  "key12": "23vA24CEMnENvdbmG81UUzTYhFpvQ1qMwvkLqwaMdotkR3GjcgLgWeqichmTR69qDnfWTKYvr38eqWijHWLqXbtL",
  "key13": "5yeq5Cbz1WDGQ3TgEatCDi86sGvqcBxMhh3JkBW6U8sWGbAFrNWyixRggpugE28UbSNMgYQ4k16ScB7HzVbfETpG",
  "key14": "4ftKSkqtNX9244a9m51gPmDeGq24JYrRmqCexyw4kPjSMNWPyk8forMhKNd3T8eagQT1WYLGxBEte8AT8NMiZX9e",
  "key15": "rcdEFQjPmG99neWgDE2BEK4qdoYhz3SsKTJBMtRQX664aYpsj8pdBmqrTtC3LsWpmVo66WDBJQfdToQdsAKeg5W",
  "key16": "fqn8QRiZrreGHSaHyYymV4tD9r4GuhQG95DLAHF4A5zWoWo6nfeRQkpz6gBEgJgBv67dpFZeREDMiN98jTicVyU",
  "key17": "4apZ4HfbuH8Qpfm53kQpK8zoSCKq9mZQcvjuWGX5eJj4xnbfuPjSUfMYbQsHPereMgKic56a4qCQgQs6PrdjsBvr",
  "key18": "vXAmQC7AdtHtfBJtgGqwCqd3mQwxv9PbzcQt2vdWfLC5dzMwcezHaexL3qhYoCvp9czNtuVNAww9AeNVZjW6tox",
  "key19": "5icDam1CMEzJoQ8YsbxbQXP4CgJS1MFXqp2NFTYCgmPhWRcbBVsmiCNkmY7Vvq2GtN3ZJdQm1RDfNwmBhquYRkiG",
  "key20": "5mQjXsi8AHUQ6bcpKvVgaqaK3yX9swvhZsKMq9KcsN6FdYiawdWkXvgySj2MyTtZae2BKbCE4rYfagCmoEyVfnXk",
  "key21": "453XZtoVQry2mpe726DTohNYA1NeUFigL2kn2fv37UxfKYFSuhLQQ2vsKs65YZG4KmXWv8o8iV4U87KRc8Mz4P3D",
  "key22": "2ySY2bVE8hRNuvzbyq3NjiTGLwKRZxkZVsSSRR4QahzGUBy7BDyG7SwUmk8FY93ikurueWfesUc18bjKMwmxr8iW",
  "key23": "3anSFESRUVGSFnDKwVMir1QRVbXySiYjq8VYw4ikWJp4ZKTYbjx5e8JvFK4WiTC7wf6BNTWZoTihskcwNJcmrbP6",
  "key24": "5qBiCubhHUCg44siAWwCk65Hdw4wE8iTAMNcWP1gWrDkkAPmPPyon2Q5V9qzxyss7RknQmVvnipVTmaV6q7yMois",
  "key25": "4nXSbHoQABRU8G7YFWtUAAwQNSXqULT9RAwr2ejfRVop8EMdkRv1iySGEAh1jocm79xdtdeMBdUSaDwtmpNHT1k6",
  "key26": "5XRjLQLyuotpKrbtyfaBSPTtDzDsSr4WxBcA5jH6X73g2o5K3RqadM3jutxvzv12TAQ2Vxd1LeXJHCxiujr2YFGS",
  "key27": "31GijJfu3iUPpwQRsYdQ7uJ1Ak8DZao8bm24cppVq5kgytFm1Y1M7DZJUY1SgTwQdDPiv5df7HecdXZMubzBgZRV",
  "key28": "125kkj6iWwMwpr7VTN6K6SQBMdJbJ4hqmvdbHzt4qvrGQjAwaEybA4DDvzDzDDF7UzeFGSzkLNeeAT7sJsHbpCUS",
  "key29": "5M7quPeXqWPMkHUWUUWakEh3X41hji6iCMfvYhANxhvME3KfUDN28siwp5wcL9iU9wFnq8HNeo3mPFSme7qSF32C"
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
