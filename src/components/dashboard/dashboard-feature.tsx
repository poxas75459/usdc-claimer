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
    "3wqVfuveFu2cxUQr1CXzeAkbzoEpGXmRuZvkBGRMKuya7qecPaNxj8yqHeW3m3mkP1CJckNrWJ4NpzGga8UfyUW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CWSurG3F9D1B9PphgfBdtBU5XeQNBFHUxwi5fpT7gcGaywKEAXmLgEEcFFnzFS5zPZGjcQUckN5BfBpfL51SCPc",
  "key1": "RMJiaRNpQ8K6iYhJLLzdpzV1mRsKrpB9EgXaB7ntE2JYtSvZ96VdcCQNc634LBJPcdUbzqxUCp2k86WbW6NBL35",
  "key2": "5X7KzkDycUekjrYM8vaxjCHAQP3y36GVaFULN4TS1wce66D8xACwaoZMFRiwSZmBxWqRS8YQWxeHvK7Bs2piqzUZ",
  "key3": "5R4P29nWiMCJv83qdY8sUmDH4DHE1QmVR4NwSwb4koSEBb2VKBqLQucNas18RiCBT6viVQLc6qBaMoc1d6g18kCP",
  "key4": "4JdPXgvcP7RrnVQhHSeN2PBh1ckNrAuq7in2gxT47tz1Dkc7MrpJjy5pTQAaP6r5wJfbArq8jDMY5Rn7msmM47ze",
  "key5": "5Ntofp5r22dCjdCJTgBJwcwaDmEWiGBi63gTGAgXksxabbfRpGBsKYgQ4L2cNXF9VDxHWm7sauUF6cQ5BS7jQqB2",
  "key6": "44BE2oQGjP37mDFWq3GxxENUDwWyT6vB5LhHtdDU8ArZGvhACBUVtnaycgs7GJWx1Sd3V4PBuyjy62dw65ftMBwN",
  "key7": "2x6pctf1rP91AxvWr1yGKeoZuGn67hceoMsfH5FYPS9agNGQf8BVmy8bmjTzFFidkaJE2tNuFkngMcUv8oHo5KKG",
  "key8": "28NNRyANHo8JzjLkfL2ePqbmpaXEumeGWXS3AG68D3RK6gM9JCkwLZZQsmTicYzg8g1Shq1SbzvTdGkXfWshe3wX",
  "key9": "3EXGmX5LtPdCrpvobTEHrvWHC5Uj8Mmczq7AAfasXD14WVAQ93zfCU9nYj7CGPjXkXejiL3NSXnqZGzEt34W22dD",
  "key10": "3q8TnJBR36zYW9mhHCi2HN9TLNr6yfgkuSXdL9XWCbzM8mAVoiEWNZ6NKBUKK2MErFisSAHgxh5F6LikKyRSdtqS",
  "key11": "3nem9ReqM4yPqLApdNvfyHEGvoY1tfzSFQdx3tWARHivx4pyfTjdsWqf48T8b7wA66hKWzAMBavNEAhNaJHeZwth",
  "key12": "CvbdHR2ugKxP4Ld9ByVz6eMdUH4trSqYev9WzsEm8H7hGsQYjPJobzMMR9LRcFVu72nKiKjkR9zZvpCVDUA3XXk",
  "key13": "UWyhkM8Whv5tGfdLRDa2v4qN2tVi54tD91aBwYn3KSw1NzjZXNSFFz9BbPE63Fm3AY5QShsLb1SHUQG8e1E22S5",
  "key14": "62VwV4m5UEqoxH5sdmaQJS5CuqPTdNNTd2ZYH4YBtgzG1FPBk5prQxpSbRCjSfvW9TR8YttLsKRCLbhDq9hRse9j",
  "key15": "4GLjUi3e29ry5SdYRW639kk6L525Pz8rk2VdR8VYKRE4r3su9Ut77GNWNW2iZYUQZkURXdKsxMpuddVw5AMBx9Q3",
  "key16": "duqtDDLv4nMZFMq14mjhY23ZjmwYub1eeDdbXvmYq8vyoRufjhNVJ4h5mohNJMEJ7b57FeixzZykcVWvkQH4nJY",
  "key17": "2D3vb8byUg8cBmSgQXfCZDb2k3aPeJcajFdNSb6Xb3dxXuE7faoWKxPFQVbXe7XrgC1F5NNoBV13FQo6hQFRF8H2",
  "key18": "2ptsDyb4BzGakU4RT7noCGo2zRneQb7g5ZxihVBzoyVCmZ2KraLdYakbguPoRj7nhxySWz6KjQP3cuScmKPAAMdS",
  "key19": "35kbpfyvmCdGLT6TbEcH4GXzj7vKmQUSo1ms5FosfQyFynzuB6wnUENjiKhUbeSoL5vLLqH1msT8p2CTjavYP3eJ",
  "key20": "5VhLcNx4uJ9SorLu3eogWstepCCHGqFdWejgWTM74DnK7xLckYz2B49MrP9FmCt31VMuA8SqnxBdApovmD7qBZ3D",
  "key21": "4xseW6hhsKaTNg7vVL3n3phNeJLrmNVhto6TRwAGPBhjBBFVUwoSjxdEJNuxfkrH6EB6HErNSWUQWoa9M1Hz9bkx",
  "key22": "4WpjaeRtJZrCrMqEBM5y8rWP4F78D7mj2Fu1WDRSmyDiKJpu2tjD6jpVUrNToTUST6Q4JyHQky9TyEo9hAy79rbt",
  "key23": "47MjndSCu2zSzEVLjkAyMguXkhp9bECLtG7dURFoYXd9Vbw7nZR9QswuCDu2hGeoPArkUuEtDcHpc9VS3uEbFMNk",
  "key24": "43chxuydEx7UszgVtXHGKaXtwiKMQrXEBGDA39mfuWpn6XKeR53WbyXPeDWtqhrWXzjB9PEArXTEznB9g5Trui6K",
  "key25": "5UJCBL8RupNDn4wcEJ8SW5ZmLfhxpoLMtcv1Q9UxacMgvXuinKFcZf2q5T1sRfR9rfRHNJbZLxpyZwSTChmfvUKX",
  "key26": "4fazyzfNGuZBMgoQyGk3XyTZrCdjXRspGaUZsZnZPyooBQYpmzxi8ZFLBXyRRvP6eXYfB7EALFGBK7qegPg4Soak",
  "key27": "3wb96gLsR6FtpFDPwTr2Jzq9YRkgT9SiTWZhQioYkdW9Zy1hD7zCoT7yMRawX1ZDFDN6CAfpEEAzm2Q2dHubaYCG",
  "key28": "4VbHg1HjRwLb3dJ6ZtXn1o5eKuEcSvZJHFCrnm4h56bmihprg7uUTx3dtjbgUB6REFnFxhUraXpLEqfQEuY8R3an",
  "key29": "3VqW77z2WuP9zpXT23tSdgHMWtw29U9NGbi8xGoEqQAwu7vjhYyHVTV7dCL4dkwj1Fvr2UJ3uzgysedWfEX3j8cv",
  "key30": "4wvUFrJwWaLUcNH8fdnn49dGBB7vYfYFn5qssxS1SZyhKNqFFQnZPiJjbGizxRsCh8T1yfKW8SUPFAaPaVsve7oE",
  "key31": "55eBSvr7zB6t1Q6H419CmgETYNp6LPFCGfFkJV3wiwdBq8vsVNwLhwG3MFauiNiPtsS1Qfx9K1JNQsGH6FEEMwNh",
  "key32": "3rs5BTXGYPyTUr7uBKmjkcqrhtQAbpkztsxsALKfnFB7xn4VKFKzjLrpXT2pTQZQDcoadUx8XQiPQXefAC4hc94U",
  "key33": "4gKLtZ8MXwfH9YZ8kz6GbjKAUpK4R39FXuMKoK4uH9SrkGyshJkvFiQcSSd1c9hBR64SmK8EJbGj7H7JZhhBemxT",
  "key34": "59bLDuxXrricjW1Z2iDtBE2tyK9HMkSUf2MMvXv27ayvasvCnAKgQECZXkNKeA1u1aLrTZroHRXSSZeedijFdjsz",
  "key35": "5wK4kmTtTe5EuNbgcezUX4VAoXieG9BXeTH4sMY2MALDC3VJG8y8Panc8NNBofYE7EAo4946zeig7a42Gt4o3mXj"
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
