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
    "5DWTAs8iZ2bd8rgrV63r4vwpfPJfcqnerVLSdKFk6BCzU9wRGKYXNhpWpKeMRV7DQDXy81Uj8MqgoLxZnjhkKnjm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SbnDe2JKzf4Ve1hYZMgLpxhpi48NfnQVXwcyvsdaRvmDyGy9mQwWJyajWfCNVaFvN7EVb7mFnVKfJ5791rzkiow",
  "key1": "3xhuXfnwFh3Pch3TVgJnC8gAmaJUZuoPAfzdRq8cye1vh4VKS5wR3zdcRgdaJWLUv7ks54YN7ghiGiySYeBrh2F",
  "key2": "SERiqSJZHkdM3KQJfnXmrc8znSjy1hiRfH9vhhcy7wgjKkUsa2NHoYaspGLgk9NuNd5nHNSiQ25Q9X2RudFyVs7",
  "key3": "37P9JsbJuC4aK7ZBkFVHS42KoiwgHJDm2AhHNUeXjwLNpf3T9T1ofDYBfohdU5FonyRemsCjkbdXcGvy9y4kbPmM",
  "key4": "4Hz9MbR3r25RAsVJpz5bD8KyMJF87GvFYFnPuET1wzzoZKU1CrpfG7mAS3mpnTn9UmbbmRAmde7cf8UqervpxLX3",
  "key5": "GVoSRPFo31MwGetBsZgER2cgQFwRJcbTSQMzThxDEUTbHxqBxeNsYZAczD3jLQjzEpujWVXS6D1N33zZctkhMeZ",
  "key6": "5mzf8AjDH89F62U37Az2cbNhsZoNVSW8rYLPp446YJwRKHZuQJef9WcDWwLYXLbgBbNS3vt9ATr27o8FP1cGW3K1",
  "key7": "2HpYeNwKULHyUcztcoa5V7QBqXHu2U5QKbKsUSohgfBiSCf3BpjypSvdkaAqY9rUektkbLBmxtyNsSbfrhdCuziM",
  "key8": "2D6FvkeXQTgKNWYrrJXuKh8tiLcNnDyJ7uhZyPstxZ2ZCmKb8XRg6NfdvTX3BNi9EzJcerCNE2GLXbX47qxphKPm",
  "key9": "4VXB96mjDF14Js6Zb3BEpqCuYLPMWpnLocvps2Lo57sJRVg3rwJvMvKd6KEMGzTv5ijYoHELxkm7h32Gdu9VEVtq",
  "key10": "5FVPYMyB4m9EzVSFSRHGEhLCmPKmuWTwEcssC2wwPbHAgPwrEp4ApfMVnMMuGRBhHqvASQoMtUsiaVqtXN5T8ajg",
  "key11": "tC7kuRiUs4QBScuw4hxwpg2EFgMcKMcBQXPf5WJoNcTdAUQPk4RyogbNaMU6rtua3RzSBxiG5m54K7gvhqGSr15",
  "key12": "5tR8hHWMYyeFqHhxsg1LRDHYwENXXgzcikD5N15hBLoFi1grGn35ywxs9n7F8Sw6EFzLUKWYZXtjpLc7hKCRHzVQ",
  "key13": "5vJFVXfuCt1o4nduufuiWszCDnMzAc7RKnbGdyk3pxysANWP2QTqZJAuatWV9fcHEtHEyzML9QdkfCXktcsm5YGE",
  "key14": "4MXaWWBoyB4xBqrHcpeWf9FYak3Eh72va1yxiBA4oLHNVpNLMZMZfWPgDFZyYQi4rmejFFtqvg5FiJ9THgXiRvgV",
  "key15": "4z6DpyTAoJLZLGb3H8rMNic5h5EwYgsm56drxHvtyedqW6m6dnEQfWpXMqNxe98q73m5FvFhQ3FCa5QqwKAyBkkc",
  "key16": "3KCH579RMd3h79Jj5rDMHks3rFT3f8eBe6DJpHPoC6VqvLY7Ks6gzVB6gCaH7s1JRgDhkMPXPgq7x4PGuKgQNt4e",
  "key17": "4p58xZpwq8SeShDFoHFrwAWzU9HS8zGEgd2TospUVtagJ8CjcxenZKzBGLpir6qvdsunxErhQdqQ9Xp1frsD3qET",
  "key18": "4ZhFFmkh7ZtUwsYw8mwp2XCBKsybUjPeWjzEsS8ygS8Cb3TZXsQrjKwoeRHPFbSJjLvmeibiFjrVyTqqutbQzDbr",
  "key19": "fVe656JFsEX1Fosa8PaonASWPSsYAieXNemfhhZk2m5ZiVRXxnXb8Va31oES43TKPzSkeZfSYiPkhBGZt5XzTEd",
  "key20": "MwQZjJvGCFfSmXzRjpQnzerBmnvgafGfE1qeLiqAG2UzDhyDtgwuBXojCfYLbZCUTgGuy3F6Jk9CtQ3rrPnxe2f",
  "key21": "315WJ3zc8bttFVJfJKXXUaMo78G6v3ZohxPzXuhEtYJJjE4ciLqWK6mWpdQPg1QV1QaNBAFtqGGzfkQovPj9Xm4k",
  "key22": "YFKYe6BUnNfUrYf5GxEb6WjmEPrzbR8PZDKXhHEoRvkcg6aTUiDWnjxy1NwNHWUNaX2pKxquyQ8KYKwKzy8tNwr",
  "key23": "34z6ho24RUoRTG22CRgJeoc7sS2sgKdo36RBTLUqHeoKKt6VoS7GAgXX8Uz8y8qbBnbdQebFs4h4B7U2gma5uSoY",
  "key24": "3cANGbfgvTN5ugePAccyrTMdcDVDpc39CVTEHARitN8ZMZKV7PSW8V2Q34KY8p4gFnPQUKBnkRr396EdRY2G8RqE",
  "key25": "csmah7gDXuyLKo5WNKhBTYe8sB8essMrXzsY464Uufcbsy3C451cWfPq1VmMfAuQPRCMCDQiqRA8wD9M7jL1zcm",
  "key26": "hc8QQogEJi7Q8HsitCx88inHhXhCe4MCe2wgxFZc3GHa7WjsdNnbEShJW5CA8rtY1apN9dULj2p46pctm7ZhaV7",
  "key27": "5XgHeLs5jmdD9nRD6W1j1Vwye4UQyKpcAkNAJiMLejwG9Xkn1UxeB8eyRMRzj7SdxYBNknwfejDgwzvPZXXbqSbi",
  "key28": "3mgCc2YrVyKogDHXKQvxe8ymrCJyF6ULQjJXXBhWBZ2KRR895Q6YSH5xnLZXvWZxUFeLHNf2gQkGLPWL9ri6bghD",
  "key29": "2zacJFZowevGD49kAXkw7zisT3tR2DcmAvFprVQ5b6hVwCeJYWne3fiqJcDHEaNP9EQiWQZmFFHiyF41hWkKeyBm",
  "key30": "mB5bnTPLpy97k5RuY3ichv9rbemqLJuGurM7u1xi3YGgwASNG1ARNBP4iT95ceR5R1P6RmYtiMsT3s23W53tF6g",
  "key31": "35XsgEJeeGi5skJ6PxrUkviq8UhMfoKHdQMW2x6TKvqZE9EGpsqqLR2ASMQMrEvvYzBwCHrwF1NqgowXKBjvXeXL",
  "key32": "3qNJLbZksuo8q4qnxR6Pu5XVN4eEmrZcuCT6gL2DX7Gt2qHyYhKYtBstqYgyHGqoV2fixnc2DtussoZoterTK7Vd",
  "key33": "Ck5VwAWKFKpCXmxEkZUtnfzS8CqPDz4S22dL4QBAX6N2YYrdHKMPHCt2yAz7WpgPZF5KvXG5c2hZDXiQKhPWKYH",
  "key34": "2dBQH5gRN3QfdH1H9wThuYmS5yqSCHgBsUWW7ELQaUxAMrjEhXedQd9Dn41pcjo2VtdHoUc7rssETx1XopJoyQLi",
  "key35": "289TjdFWNQDUGvKRNWo24Nv5hY3Aam9b9pxj47rvB6yc2VHqCtnefM1v7x45GnFqaF9f6LedW1pNNTSaPQNcZSGz"
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
