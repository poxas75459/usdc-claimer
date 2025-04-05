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
    "4HvGPE2AeLGmANf3dLMLJbrMAK8wubWbj8zMWZdX2fXEmduagAHzKhPzNsiYfQiVsgBsFtmx6v7x9gnGmNAwHdE1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yW8M5G8NL6yfqG8LiXCx7C5vQNdEyeR33a8tZeNMJmfYDRuPonZL63K3j9FaLq4Q8T9xQW2umTVWVQb5WWb8QUt",
  "key1": "4pvMuvFeb4V8bPG5GZ2ZJ1Whth3nyQz49H8WpsMkJeRKfu8XiwGWGgGyhsGE9UmJ5M3XmK8xbbxULqi9BDkdWWYF",
  "key2": "2FGb8bRJFcoYbKBdYPVhY9tShxFeAy19Jz1tBvUXwb7rnFi8jVfviuCpLpeou8MUE1oYohfEQbWQrb81YvsPaDpE",
  "key3": "4bqmp3DsMNMYfcJxNfnogNjRfdeWVgmq951nYigJUmeEVP7dwojxo9ngkwU98W1DX4497iy3McQAXduJ5nLNDVje",
  "key4": "5YanpFWaXxnWV4wBNXZT7MAwnyHke16Gp2N8YWpZ8krL8Nv995zSSwwEJubc83jPSA3UdxFVKCRKk3vg7EJhd18R",
  "key5": "3unbBoFLorcoj4hkvy1SsDofpribmPRt5KfqNGFoAac4m2uv7asatbp9f7YQszdsbvE5RksroZGx9Rg3g1q2wNa",
  "key6": "VCiaiEAm81DJpr3pjivpvuDQpvDUmxRuaqFjhPMNmMLzYYc7YsAVy5gCrrv5yGzzJCMXYhGyUdXBmLf64A9yvkC",
  "key7": "3UTc1XGGGGkqzZ6qBaczmsihMbdMYx9LGe1ps7AvMGRr67efwnUz4wYN3SejNeTii4Gu6oZyb7yxNCjVSR4B9zMi",
  "key8": "sb4R5y9DbMH2VWF8zppxs61P3hrJWJJyFPk5jdxFDsSQ5BHcnwe2YxrUYW6yUDVT4GsW6z6BPTWPYzaFjzyVZbm",
  "key9": "5faV9Naw9ZpqP5jh8Kz8VR7UVL7DJLCe51WYSmAFFny42ZhMtTrDrdMWQZpLd3tMqdCkE1d1vo8BiAg89MPzfPY8",
  "key10": "34C3K9WHwK9aoEBn6N1jjmViQWgTbFobWpPwoHzUsJcc8Ney4Lkvkq3TdM9Kq89GnhpL8zTtZhrXmQUixc4ZGGKu",
  "key11": "3tnWw64jNUV5J2kdb7Gc5uwWFd4HFJYDQhcvch7RcwJSqfa1eZMcReUERVGfANM18DAaFDo6L1VpqttWZo7fFfiQ",
  "key12": "446P3X2h2eW4PzNhnvpWNsD7tgK7Bos5fpQGwThCNk3VX2y772tbJ6SdV7zQThmvFVzSuE2qygbWTBEiZ1sVT2WQ",
  "key13": "5CYo11foGUsrCwRyYMDtxTLZ4arto3s3cCsizyBPugwi5pXhkgz7VktbnsPDo5JGXE3HqTMAS17FyQqJdZE7fMvB",
  "key14": "aXf6yV1hJuhKoeWGTtbjqig5LiX2BWb9w8kpGLbQGxXbd4vbbJnBVm1JmahALeantHZ6utoC2mxYn2vd3Smyh4B",
  "key15": "5yJqfg7r9PxZr5zrTGZTHBV4S8buX4oqaQy1msTNGSyPDMWVYd9WXiUijBKXttVUShsaZygEts7pg17KtX5RTqF6",
  "key16": "5XagnaPEpkWWVM1PVPjGX7z1wPpXhSgp2ijB8QVPNGoTXevTDfBDL7Sfh6R6J8v9HmrHucNYK2YJG7YC8DsC51UH",
  "key17": "4mxffwKkZXWXkTZUZyGbghghDnUbPRaLVxerwUgKo3qJuNchNvyZdKYK2FbwGQj7KqmCyBu8QSMqytcDJxf17D7d",
  "key18": "2ghxhk4gKKN8bvCkLsMJVjdBd6pCpn4codHAdacWKW41XzSxQHVPop4jEEpzcmrqXEquWGBpdNUXvURg71EPZ61S",
  "key19": "AXdVb4ui3Pt6Q6Tnxh2gsCytDwptkN59xaShQi8SP16NadWZSSA1xXMJfWnJfWKE25YRde2VJCs7K3Qank7yP1o",
  "key20": "5DkdUSZkF8qg7stqhQcM6wWBTfGePL2EwTPXjdtVvebJD6FZ4t5KoeEvRovHFZ6eQ41r5dv7ffjndKDR7B5v7jUL",
  "key21": "4k9hg6EyUirzhpZuw6cWBhB54Tng8AKxGxrWWbk4mMMxkJDoQuWgbwfrVCBpxTKqPZfX8srwFsif8rBT8K949pfj",
  "key22": "51VjJhbJWfpAuxPodEE5tWFHZEQGJ5KYAiGcbCNKF5kdFCm2hDViLsJkhuwf4wFibp2Y4yMVjEniWzvYXfRgpAHU",
  "key23": "4bvKQwjSbcLA6cSdQeUNKWgdCE4FcpyYWrogysrKFy7xcGWBWaJGYxbh3zM1NeUix5KsUy3GK4xMzL5pyXo3UYY5",
  "key24": "2DvFStoguHrb7jUrThqcp5rqFwAymHnrgB994PYARVUEKc11YeWz5yp3xEQrLonq6cMSUYVeAoMHiQc9Fy1J9yWj",
  "key25": "2wBvvYFL2g7fJT5sewkADoaYhcXzBt7cmNhVFUQ5jJC2TygoQ8EwLJwULVhSAvKpbpZTEsb4dQTaDjCc7vmiagcm",
  "key26": "21rynfKDwxTJSaJwEVw1t62F7b5E1Wbh6rXcABRxWF31JimWd3Nzw4CydLBe8VYwhWvN6PK52rSGCLxhWnjeqPom",
  "key27": "47gcfsRwJWvLfp2juRMWowqjfXXpGmEQdctUPGEQ79zLkQwphUdwNuis3J4mK5At61kGbX7QWT6xSzzuyopELi5W",
  "key28": "9aBozQkcmLZAESpZQajbsyHaXbzQF8ng8mZPgwCDddmMQRbXyhDouqkdHaMRxt9n8WeERdjUUN6JWcpeuq62H4X",
  "key29": "5tSY1o65NZRz65iyLbXonNsQwk4wvGvXFR5d2f7VfzekF1Uv35EGfxnx53yZmrnrJvffxTfMbqBzpgLjyeUbH6iP",
  "key30": "2WNntAgpfZg51EBeEG6iFqin4MUQWMXh4ZcH6KbRTSSpf14jqCNerqnmAdvdCLhvWHPKWufChwQXLx893CRRpQ8Q",
  "key31": "2WiU9QojNSAHnq92nNasTHAjAL1Kp1GAASENHuab11xxjqJDDF7P2JhXHsHtTiPjcfGXchxcswzcWVcNhRcUz449",
  "key32": "4FXX5jj9Zd4j8iYUE6DgFy3tUfxiB8RvSkqDKBPwRVZYRWnbNzGaec4Bm62jyGRu4QjX6BTp4FHNAXeBmdZmmnR3",
  "key33": "3L4fUWorKMgnkDocXUddi36Zy8YMzWUmFa2mpeQCtRGfbLq34bBfbjeqwvwiBXo12i58KQzvgSzXdRdHvS7Q1N5c",
  "key34": "5f6yqKyF2zBJDrMzjtZmGnhZRQTEg8ax1vUENkRhpDW1LxoUhWx5UpP5iXSAeVW2PedT6XDs1gJsW6XiqJn3S3AC",
  "key35": "ghCVDAindQXR6FY286aLKVxiXQ7SoZZerDwRRcA1Cc6cXrrPDm1sqzF214MScNPdmYnvT2WqLg51d1o2w4CojcH",
  "key36": "3c7NJgcn4krPi43jnUG48myDQLmANsg6AWrLmqQAPawBF1wyYdVZ1PsaCJjzWhaRZxeZqnGXVfqgmopSmK3NZSJh",
  "key37": "5NjeGkcqoxxMZddomxLf3fKJ2Gz1TKQ4hKLtxgG1KPhTUijrjkszWdwzVvVFGFc2YyMo1k1DfxJsptzT8WNST2zo",
  "key38": "5oqQzcF4tUXJdQxEBWrBmdew4Ah5ZsBSHCtRw8Xq18ubFW7yNrrSpa2nFa3QUGuv47JxiW3P1CGktHPQePuW34XQ",
  "key39": "4ywVpJetDE2EjArK4DbsQtL9u9z9CAzkQnVRf934Q8ENCApoG6iVPLfibhkqmmZPzoxdxpdPsFzoR4DJ1X8dXnU6",
  "key40": "2JN4PJ1xGLSiwVdqaBweCb6Qkr66rUK51oFsE7isoWrXysRunF9LofPrP9UMs5niCqwigvCj8JE4DcRgnsp3CK3Z",
  "key41": "3JwRb9J2Duz4e4jfEbkW6er4mWzjSnZJ6g3NRmdezDHwkz9gYyLxvk3JJUx6TYLWF73viqfcu1MTogL733kKdSEL",
  "key42": "4Zm62NbGhAQtJNTAMxJ2AwsGmzeYZgdAw3bpKNkUbc4wFPzktCgtiihnPbKj1DJpbjwLq3nXpLM63nNgeLbirsuW",
  "key43": "3SZ3q9SrNvFzWdLoZxKP3M6ExqYwRuYLYv4XPUrihtPBJmWuViavb1zBJqSuk11TzGg3wvCJk8Sj1Djvto6AkDbs",
  "key44": "3DyfuYo2LegG7grrvR2uLBuezem8fzqUjNkUk6LWzeDAdSGAYTftQpFb3KoUmNZfRAMVVnGZh3bQfYV8PTSLKyeQ",
  "key45": "5LW3CHcmUoytq9adeQYUMzvMkELLQp6CwyFUcp2RK9TTictbSHfPdroywZbNJ3EtQHCnFriAMYDmDioAAwuQVzhg",
  "key46": "3i4h7jHwuTTBM6f5ZPm8CNQ5eGMJSpgm5ZFcTFupPGkt5KuacXLwYfahGzoUdD6zaBVUKrRrjYjjEHQawP4qzuXn",
  "key47": "wKCRmvvgJucjWMFprSgGNhRqgUG8YiioNbmfB5X9h1JRfcXvwhvhDVgV4gtqrVzDXdV6H9c8vCBnQXseC3XbMj6"
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
