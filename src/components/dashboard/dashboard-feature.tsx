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
    "324kcG2R5F5kprRfYd4YV2CuTuhfQYAHDP5gXx6KmRkyrrm9D7Vy6XhGYgL1mJu7eBFyf6WgyArGUnzPxKr8mn5w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4F5VnJ7jT8mJwXs4db7kigpJAfVi1a4UufWqfFA4tAwtkyZ7gEmhrkwxdzRPUUb1GYLtJc7q2WxzAAfNaXHhaPj2",
  "key1": "2u9hDVr7Tyf4rUQCPgkdmv6QGmGztthLkGJZWSQy5c258FqY2ga1ckg6aM7PjJrtRjr11y9kXt3BVhaT22tCjvJe",
  "key2": "4bfpbXjhQbCTgwKLuo7F8SskKDihAhYCadB1gDAxmR1R4gQ7GzKF5GWHUeC6LHAHSkVabbkJqD7PZkSkjt6CMqRS",
  "key3": "5ptrAVYEZNdyWABnfwQcrYDTz1mdk8ZCV4ZLs8N8JUo26FTjFfQRyhBnLMjxbvdKgQuJkuhnXGY6MnoDnGFaP5Ra",
  "key4": "3oANZuQ4vCouRvTw4ia83soDPnbYPP47oQqjcDh8m3s1YvLUMMwCjYYkKfZ5nun1HTdL1bQadp2j5NMg8UvjoQBS",
  "key5": "63yLPZcm7LF6TPEhLBfPQ9S7HTmErADquzA8rasyYtZe6C53SNwDtncecoKDye7ysuPTnwvcB8LC4DD78DGunMmU",
  "key6": "qm6YMug1X3j6SreypTe3QmyZkrWfRBK8zEaUvmgC6dfftWjqoEVynJdYQfoChEGfBAgmCuNh6S31bDRovPvnp21",
  "key7": "5fcVaYqxHfNcorH5HUZuPhTBwpNaQopevzcytg9vtJPUdQLVPKqYx6FakzeE3LXw3dNauPhSciAaMbxrPtdgYGot",
  "key8": "KrNz8anuq6Jse8CP3Q1a7XWnXbn5ySSATSbVYsmYYRsyxmJK5zVLLS1QaemwrUayEkyK3Brh3ZCiDMJanTjMxAg",
  "key9": "4N5eLu9Gwvw4rPKbbsvKGDFj5s4dsfvFdvAuiPab1PB4pMnxprZpnojjFrNybExDHLiPHNHy58ZN18mUasoL4NiB",
  "key10": "2rZJyWxCU5merHZ18USjZa1ndVF81zdMvPX9b8k3VodDGwDM6m4QfsvZREAk5bHbWigefogJmobbXRfHi7ZfMfjC",
  "key11": "5TMXuN8G7ZsTM6eiKVDvzYfjvrWbsPmKZYDkoyJXC8V9oHj3giWi9XhTXoFCMf4jwE7mcGzv9YENty34gCAvmen7",
  "key12": "4CyZeymiVLZf55HJbwYKEYd2ZYJc5oTkKzvdnUD7AoabbXD1MDoAHYp4gZ7dGrNc7m9opNjrg4nYoBWSuSnNwStA",
  "key13": "Rpa6poE1RpFYdgCQGiv16M1TZCKGSEybCfGBaerfXg473v5wnTZ3ipqhqUSktx2E7AU7RCor72wub6MmBPcFqE3",
  "key14": "27chdGif3rHahYAerkcidtUxq75rnejQPPHoJ4yunVDkvLfhvPQL7Tvpux78ZK3E8TTcUz3dL41SznYQ4DXHG1Nq",
  "key15": "5fwx1djoisBR9niEmPWUTW4mDGE3AE2ZTYZbgsKYpQ8zmCPnRrZ4yGS2GbPgGF1ZAj5dJmm32pmfLxG9Y4SzKxh6",
  "key16": "4htuNaMQbHpeU4zHhjKPeiQJnkjPfxsbb5zy96zn86pgmBfMd2JPEs5eti8fYvQn6vTXEVfnhhUGDmLpfSMgfzWG",
  "key17": "5VvVmb9zjb2b9c3BcBQ7K3Soci2j4e9rderucQtDhJtLnDkGUefXU2dqzFUMGBCYdYJxjWrosLowj9vVoHGhZDJd",
  "key18": "4LgZrUw6KhJjV8vzW79zve3q9N9q8fpkpr8Ms8ENAReamJnMUokubzcWkysw9498WnByJKCTsMDn6HV26DpYzzHr",
  "key19": "5YEYebYkqpMBvxR6pQPHDZpr8ZErMV6B8xwwYv77tSnRxxSGvJY1bESqV7fKSnkvScMi6ZZEQL2pAQYcYhriPDdS",
  "key20": "3pZXevtGDWSJFavmJZYA8JVu44VrzCS8KZtChbC4j5CfqYStpaWJ31DMg2HzaitdLbpyJnEyFiErn1ooNQ3CcFBt",
  "key21": "5RcgpdcsbehcXEw3zBrb9bS6QS491fBgeyrX1iVj3xErLRM3TUdPKEJ2s3CH2fGWogvm5oHqG8SqLeD7JG96rASq",
  "key22": "4fJby24nQMQERNC8z9zPYzKevt3VWivwWSh2tpP8WdLE1QQwG16QPiWzSjrYwmkHMyDYibnTZ5qBcVv78Y6HnvXe",
  "key23": "5VMKv1Uqzoeeipb4y5PUXSL3F6fdTRbJDYnpLpkSKycFShGVgU8w88JzoQ1G3oeGpDXncJ3v9yNqWemvXZ6azATs",
  "key24": "y8GuMaVr5NTF9nAwovYaQxGt7weA3DZ2MEuLeZYqsD4iQU5977SpRp8rDtTVrWioGQBksXaeJWZs2NWYm3aYCe3",
  "key25": "3LbQfSVZyoKgbndnBnUbpxiXxaAScD31B53PVAjZtfxRen8A7uauk3QsJz8wrih5ayXPKMcTXNahkYPW7V9DUVd9",
  "key26": "2HkmPxuFevFm46rqyAPa7pcZRxr9voBEXM4jGyhBH7TbuppyYnaikPiYB2oJrRB17SNnoEyMEFDc7zJMbnfXH9vu",
  "key27": "3aHEJou2iaX51UuRaPEYXVw36vSLFC9Wi8VqUEmNd5Yav26p5hrJy82g5TLeLiac13VEdVxsSihJhpzXaJWndfcv",
  "key28": "2vJjP4i7U5T5qzCQZiQEiVPdJXVrFzX6PvxKqzEiEG6uVYhVqZC6Ne3RcfAH7DFonC9a9PjynCLpS77t4DugpWqJ",
  "key29": "5T9U7oN3dWNRJWa7asHkK3pMv78E9CGS6KQoG5oLhABi1hGsJ3yjsqZiH1CAr8BidfhoYjfshnUz1EwhWMzrq26P",
  "key30": "TGSJZ4XfK4N5M9MxAMoe3zBgBmSHPcxZA7izxqWGqBt8h3uvrkEWYmgLhbYx1ib9Jqy81zWToYjo2vaVA4iNEoq",
  "key31": "3nYSgiMte7YejfxKTpXWFcrddtjYqqmYC33nfHYRMqHphPD1j5W2hYSw4eCYKCzbX7Ne1XvWr9CLQdDkREcNEDFf",
  "key32": "5ff9MQHikZe2mK8jXPkGyLqk1AAhDXymFKEdN7p7uiaRZGHUZN5P4hSd4Hd5VK6C5pW3LV3CuAgjUUwQdpJn8rUr",
  "key33": "2ETiFitErC9UBSB3dXuW7mXgh4WmjLgfa26ZyPpUyXaYEsmNHDTyKSC5wh9Uk1hsxnxJixVSN93Pafi35eHM2sRX",
  "key34": "bVLHBdBFqrUCndMNGcyg333RvR4tQu3TFYoUB4NhYwdQKTqf2jQxXAvzLGxuV9LqiYfAJ5cHUq5aALe1LwvDRS9",
  "key35": "2QuLYTScGVVnyh1rF8iwevLgCCn9NhyqUNZzE5oYqCugVSmbZSsfQMAjrW9YVrU49w2qxh9wM2TZGLToUjqACWZi",
  "key36": "2UWwmQZoDG1upi84kCEj2ftvuvRfHFG7WgkaEbXBLFkNEsNa2yvTnmNZBaQy9ctnTLxUs8YCFrnZetMA94wXBsi1",
  "key37": "5eqtGhntHEPwN769EBpY1vg1Ywr59v1k2UhPN1UGHLeadbAzXq2t5oYqHeQBSqiyBuRr3peYizPENmgqNMf1V495",
  "key38": "4hksdAEKrAsDmpEov5uSKAv6P6XXy4Mc2Sdvd7WqX5vb89TmdZoyujcyEryKGb9hSsmDHgaXYtrzt628j88V6C46"
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
