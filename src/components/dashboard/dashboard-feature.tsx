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
    "8xwJBTA6mjcKqHQoWTVN6UrEun8cuMMG56rKTRXaBZWFj14EjBMRXRwGFeS7sFxJSa5g55k4i5BKU18hbQ3xYEp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XUSMhWytB3Csh1oinkUh5HcnoVPo6pLBoDoMnxJam28fCQsLiejBQ7Z9pbtfZ9m1gF4TqCRU74Cukd6AV3C22qF",
  "key1": "3wBSdkVMh69N65crVVW6zpQR9Gcj8q2NCLMvdMB2KvVqy7LmUpgJtNjGvat5fNQCJt2kqeGjFwCARHy56PMQPRAt",
  "key2": "3aZAB4YxoQDErnpUGLounrVx7NMJCSMdUDpb4zzTksDeTENBmcNywmVeH2FkPQBSnUkpLnbrCdxxWXCLesgM9tQb",
  "key3": "5qe7hiHxmYmHdmzzdhv2xvyXov94WtLJetU2Cz3gw9LEFp9xRAaZr4G1SDKvhTv5hhRMgKx4Ar7zvN61JX29NKfg",
  "key4": "Are13aT9EuNWN8MjMBuoR52wSdEGYueaFd5FsDGybc8PTb9UpxSAbdbVVaKAphLNPMj5w4sbdQN3piokc95WVPN",
  "key5": "44WQvmSHtdjnMhH9pL6GnRm5Ad8Zm6hipj1hR2Kz5RZDFJFoK8AfTC9ggkHYacUR7RpwNTEZn2QJX5SPoyAgnUJM",
  "key6": "28DGSovLwBEd4vfG2gxZmNCoWmU1U9tiLZnQPU7cpJsfyo9JkJURc4xZja5of9V1CWoaPqn55ZpWY7GVXYQRaDjL",
  "key7": "5CFE7RercpjBLr7DVJQiBDFEVxaw19XwSG79zw1vJpBdwnWeAZuRQcW2F8KKcTX9YmMNm6XsGuc5EbpcHspyXAhy",
  "key8": "64pHZ2Ea9p43qApjVyEaYQL2YSpTjrboix6Unzk8aMWy1Yj98ueXxB1gvVX2V3xBLL9bCW8WtGEXa3RXSL2n4bM3",
  "key9": "3Pi8DBN1kBVkZJoHjXa8UoKStqmXF8ajgD3eFwUbLbx33jR6Fidm6T7hhhZnuN8xhEhhP5JW6qCCcoSg283pUxJS",
  "key10": "4KeZESAF3zndhjAqPTsegtefpff2fUixVNQxcb8WDvgEgzXk13kaH4YLYysNShEDgk1dNyYTERwtPcDtQsRZZ42N",
  "key11": "4AQARS6mxugH8qrfooX3YYuSvCkenDNY5EkJ4WmzduzGjxLHxUFpizeLAqTSEuCGLji3CSaFZSXnmvQv16H9myxQ",
  "key12": "2TYLHskCSMKrQd9dpF8NYiko8XhWPd1GwA2R3b76Nzzz8Kakwt3X68J5ZxnDPBiX5qfmrkpeLmZVxkCkcVLfNKe1",
  "key13": "3GwNycZD1QZkoihYPVCQZU7Wn15483yFN7zPtWrU1C1937TTLmXF1G2GisWRYtgjHf877sJ6KwMskqYgpNGH9uWd",
  "key14": "256iquNMVa6R6nbYGLYV5SMsTtGAwAYPHXgPbAadYLrVuPqagixyqvXvo4bWTzqt7vFc6Nz2pWKMLXfmrjFMhkzo",
  "key15": "2PVQEhPSGfGwLVrV9FoTDMWvGHNaMYEwSWZgL5xCrqkxDnRtnR4BWcVwTkNRkv9gAfD8N2PaNVwR5T8Ctpy121ua",
  "key16": "4hMaH311sbQf249k3YBi7FMnCJWHfZTwZ2ubLW9xrvkq6tfJWHwAiQHygaDvrhZsJNYtxxvZGiup8cvjHy5pBBSy",
  "key17": "3Lwi6EXv8zGFWip7WpUF9qVtaHJ5GWz9WVEo7thkmA4WQVWAcedK9DknTFHwcW7sExk6q15FFkHEz7SvZTRdX9Zs",
  "key18": "5aBxfa6QmXfBPiibQk6makLo31annFn6dSXaCXSMhb1QQKfA8m9xPezKwjh2Wq8qkMFxq88hQEiv6mjroW1QsYG5",
  "key19": "pVerZp6g6oqBZXk5eNVKCLASzrdG5t7CPRjxinFwRKcBcvCzPR5Ujyry4zXhKPzkR1LznpHypvdMvjVNupknzNa",
  "key20": "5rJ97dtaKobniEGeheEiXL7gsqxHbo6HSzxPrC6ek5KXuswpKiWffLAE5YUX1kB6S2GFJkgZMCdx77phxZPCiJrY",
  "key21": "2rR2YDhxvyKPSYWtyHRJLy5B2TYG7XGXKaz3qkRgqxYcVFshZC3yTdR2HLQZrzaLuiJurHjWPZd8B3Bc9mojE7rk",
  "key22": "42EzaEbjmXNGxaYENcUToEkXQpokVaSKnXbcWFh8rBvSwCnrruw4gD3TwUF9tWrpcbXwwYu6JpxrSEh9Q5kcZhrA",
  "key23": "4jDvozdcDJMX8j4rD6GcNnEDRxErjuYX9BtPnL2f1Lqp6mdovAvPu46WJj13ECSvhjDPTbnSVFLhNX78zyskgqxM",
  "key24": "2dmwEUquNJmdJTV4mcZ2DCWhogh5AhN6VVwJBKGPkNCL8xWSNbnCaCyTnEbsNtW9tX2E5aL3WhNRdsap8HR7cqzD",
  "key25": "5WPs4uDkSJu9Q47HrfToPws7XWoLaQNdzoHcUNRZHHBK87VcS4obHScwaKMS6HFzmXPiY7S9QH1ncUT4qfdouzbj",
  "key26": "2praN5ShN3HhxwypEmuHaRNvYGz4L9nJLCXLjJQUHHWU3JpSxjWQ3YCJhjvu3xajDc7Fj4zxcjEtJRvsB9zD9GR",
  "key27": "5UW1NgJ97PTVFRjqM2pQY8rLggAQt9JNrFHJcAdJAhXu9xQz7CJo1aFGF7dxCqDzVfQtxnmwijKtr24DM8ig5TRe",
  "key28": "4zzRNqLNqrCatLvVqPBsRjf6UrkxnKpydk3mb8fXF8Fc8C4b8yZMyPMo6uSKinSsQqPetKapKvuccuWmqbKyvmTo",
  "key29": "3g6aGh7YhT4BxtbY7CZeZn9CxJkKabLa1UVYa5U7btFqtLPHT8yh5Z8jBWPDGgdvW4QLw4gXG6QL5F7v5QcCc2ru",
  "key30": "3e5veyoCPw2c5brGTYcocTvSCjDJRvKAeGCgceSZXxQ6jGEbrvxbipz1PYCZRtrZfVXTnZ7USbHJZBgNUGGqUMXg",
  "key31": "5pdumS8NHwoFJ2u7YrMx1L6M4bFb5fq1vxwqLUMyambZ3vdkJi5FNJwbJyxSjsZBKcekvA23MHwGHwwuQ3Xr1zPQ",
  "key32": "3FgUzbQUm13tiWm8jzkcqx2xKavo54hLyBqomF7KX73Ro5avRQczwYff2LLAG3DxGzmwPSYUu8DpVFwBBPqFcs5t",
  "key33": "28GWWiRLaVFVd7hTSXnmcE22RSnN4p3W8D5466EGXCq51oQmPy8AXzCAAYtDkPn9wVBUCdXU9f6udhNByZDxq7KQ",
  "key34": "4YNXFiGDxLJiciQ78hCZujHJ3z8v4b1npFoHph8XENissr1izG24qGgzPaSFhJDqMvZSGqh8pDJcp348qohjVVcn",
  "key35": "2XS2pvbT9ZweEFCvfzFKdeWVoMSMVjWMMmBPKz86f72r6oFTyDi2BQNHsberHT9UzvyfmV3qfz3SBwTJX6oPabCS",
  "key36": "3drDpzi7nCrQeeFur3bs7wkczV6Wv6LV641MLr2G879ShiRJmLB8XvCCkzLy3zndKBWh6FWkNi9kXyWesBb6TEaX",
  "key37": "22Hp86erPWiEqZFXmR33nAvkA7eaEHWsfcRLQcVXa1Tduj7UozRBkKWMEw4Br1ygGHcnvxbAshTZ6YqLUsbwKW8M",
  "key38": "5MLmxrzZYJ53PFbnasxD85SSfb3mr9gekvRL8PbHqgsGMEYUkYjNNNPrVU9wJdGJcFJysqkee7cMv1LGK7F9d252"
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
