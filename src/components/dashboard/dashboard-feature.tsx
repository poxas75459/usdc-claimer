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
    "3JWZiphWk47Q3K3VuYxJtfd7hAFBggjGhoESxWHegfrNSDypMSwB7E4qgKDQTS5npxsNp11xJWX9EKpwyZJFz5TG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46xWdRG8wUVKD2g5WhdbeK4Qc4ruJTRDPHJGVyZsW3M4NhmNS2fEbhqu8a2ZipSZ9LW25sKcRYcLV6RjQvJGzYfY",
  "key1": "4jkqg9X3A2zQ3kFZj8CNF8aJ26vrAsra1cEsw4RQ12c4oh89sfjiHGiLeAq9687nhuZYn4YvSY76woftX5EHJ7ZF",
  "key2": "2edXtSESt2E6AuoCopN2Goh3aYty1SbAp4KHnh6uMMQcxPVv51Y6nCkGiLmPwPWUrKh5a6MhHZnMUzS2JD5oEwNm",
  "key3": "4uE3qNPdoKGggz9pLcRDWhtMQWT6ZWWSccFbrfowxKDfPHVQ6UKzT5XzuWgjB6sgHxPt9rJqoRDwhenuKdgegK8V",
  "key4": "3HURKsmgRidAYkqpt1GwbHbXUgiQ92qhoa8CEEEA7EYxV8m4qMHLfuqr9QVcrBjTV32mANs6SexK9UeUXVKuqMY9",
  "key5": "TuyCk9xAFzzJY22hZ5vtTtbyyHiNDForbtw7RG2zXvYbYxqJNa1ZQEFuCQJonMNU27afXjXQhYaGZxznn8nxDra",
  "key6": "2CBi9frb5ZYhG6vLwKRRoKrmnzY933vjxEcFbraC5pXm4GNFfnZxaCpfT1kQ1AC3KThoeRU7xM4uKUyivjVvFKgg",
  "key7": "2mPFpV5RPpuamtiet6Vprrag8tEjNgSDwoJmsXkSGm9RRYBwaxJwqxoQecQkrRBHEKuVpH3v84bRzjSwEQy4feUZ",
  "key8": "5S3z3QoKC76qxcsQWVoXZehGZX5JDGiE7YoWiJcXU6KfPo8tA6Npbt4eSe9pMbhZqQ89B4i96P5pe3zWDZbQih6G",
  "key9": "3T69voS35EJuMG3nBEpNn7HPPpAFAYrWEJ2CJBTFBSGBq6zxmfz8WhGmu45XWbvK8ScZDyPtsuXwRCD96Fkoddy8",
  "key10": "4jTbrEggP3WDGVEPAF1z5q93UDwRqguTfHuo77fFYkC6tKfPeDjSqJiVN3Y5dEEZ3awB9DQrbJtLCFxQENppVpMf",
  "key11": "MamQA4DgJCXFE3BQzkLQAq5ntauguFJkkdV2Pm1D9G5fxcGTEbhNuwo6pvpiJ5k5mbqzvL4WaDfhCaNSGLrVS1d",
  "key12": "2uxSJqhRwDFAxT4FK3YjB7qfpgo2HBfRCi1K9QN4Ey2CGA4Q6yGcBTNgLeAPDbcr5RBDPyGiFUtuW1E7BDvqDoQM",
  "key13": "5H68w4LL2m2HCeRhWy4D68oBZnMiFg2LRHQoKiW23zYkuLuydLA2GeUhGdaTgJVPvemY3pAmD2at48kDCD4vg3mP",
  "key14": "2vpftA2mrBGcCnwmS6i7sqk5D7pVEFGnYij8zVLdC3vbe8zaapAZTSgYq6whfibGBWW9CXyfpBRiXkGNfemdu3bC",
  "key15": "27Nvd99SnVReuaJ6JYung3o1YTBRLRgHuZwhYk71UbVj47SybzVpwu1Lv6haoEHKjjdGTGVZkH6hgTN4XMdibnUy",
  "key16": "2hrJkNtQGxhXRkGHNkrwFXMXXPWo8nkT5PPZbBVL5HZFoZ36DU5frKNpWKH6aHn5U13TZCGk1ixhuGqb5sqJke4V",
  "key17": "29G1L7Ekjg678UFUm9oZ4kHDYNrJRZkt1MkJ1WL7yvcHDa5GrJfZdHDLAi6Fj1FxerEi5c3ftN4N6UrX3B3z2ZHM",
  "key18": "5GJYSHCUzj6ZpygwyGgBnc6g9QFQFkJ7jsMYTdaVmxQAjj1vmmfEefGszM6tnnfdNbT62ny6iMjsJHLxCNyMSYy8",
  "key19": "4sVtKC5EdLCkBrUMNBuPP14sh9BdKagfmf2j76DiyG56RTkqGgJbkrW5eXNFJTfia6QabtfoRwNjRLK1Fn1tEn9e",
  "key20": "4ijdZMWRU4w459xLaE18PfrWcRvmWub5T4PG3NNXBdtFLarmYZP1RvV5uoc4RmTLZr9nrDDnxowRAJcUifpgYdcX",
  "key21": "k7bD79br2DEFyuSs5rk8yKtn1QghpDxPAZ1KD6PFbCG7fiQCcdD7q12R5BQw8bLQkq1pWZjxBYqGhYeomVhMQ9g",
  "key22": "H7d6m8etVrDryAaZuSivtZwC6mX1pZP8GMhhCpXmhaC2fAGQzLZMyqMkbkgWvT7uLQr8YMVuHj5enhiVAgpR9Sa",
  "key23": "2KdN64kRWABaSUSHwjZ88isLKm2o3pX98VwAT3DFj4CVgem1H3P3SbQTyHKAcCNPDJ4v9jyQ7HvBH1kdZHb5WHXk",
  "key24": "4HWZHW9Qzp6hzWNhuA2R44xtJF5eZufAtjSUobA4z8xbzew3pCJs4DcJ8rD1w24GgYfzdGmH8fUcSQUWPBdp7Ghc",
  "key25": "4yxUyY282k5BsfnVwCLkZ7D5bf1vYe5q6VpUiHACE3ygm8ZNtMcVgDXW8GBNs1B76jgGzxM65Ywx1bf3dtvvKVHd",
  "key26": "24vMuwYp5S7J9ZBmKXZjq37t4pMy75rvGmQQB4r2SdcXWY3VvQsdcqvwDyT9Enrx2rX5mLgbPAmvujMpiiWtDkRN",
  "key27": "3T3yKZ5YrG8JA8Wrz4mtZxeJwDKJvo95NYYWnLmMru55eZrNy3QKEsptRuvTysfiSmVDgR9qc8Qmo5fFoW9JXSKZ",
  "key28": "5VMqSRmqHkGAyDkeezpwuvSRvNt5Y51ifza53z2tpNnDh8ibudJq2MwFpooYuD12vaJuV5JWWJF8PN37kmUoqQtB",
  "key29": "x8Tjw4uioa2z8Dqt154wAZrPZwzS6NNX7z45agPjJ4Le7Vum2WCLFBiFVoj5UBHEtB9sDbLai3pYQFR5ntMt38Q",
  "key30": "4bPr7jPq4dhXdywV2H26Quh5rCYEdJSnuVgDZTYwwyoFJooJZBGd8Pynz5rpgMyJqN2DMhkJ7uJacLfuB7WuYPqh",
  "key31": "p9wbPfC35u7nGYUq7cG2acMXHrdHUD4yhjxKLwSVni7TBg4ma4PHBdBmu6gedRW8bcfBKPLwcVHoBqDPjucDKU9",
  "key32": "yJwfciiB9g6MjDy71BcEYyRanKZpQC4Xbpsbs5PABvHD2BN2euNbDZ8tbygsgxr2YCzcVAV5iLoXv2ybpFD7UjZ",
  "key33": "2auVDMkGtKzHysB5U5qFYUjBSUzmJtWxrsKbWLt7XyYhcVbjLEpmBwNmFQ8ut6WoaDcZhVf1vVLwnc9wjgzs339a",
  "key34": "5WquqEUxWYZZ99aJ6S5re1iF7gU3S7HGfPzcfVs8bb8NuA9FJeNMCH1HskEUr6Y2H2vNDsLvFRMHAo6iNDcUAjmP",
  "key35": "4TdFFWK6aDdda71Zs3kmGFKVsmTKYFAgnozdnh53tnhE6E7qi3Zx973tDpbo4wG3aMBQwjQUjUkTqh461rsTGJj6",
  "key36": "4RfrfpeK5FvLhMn4Rr5QAH4EACVaUAPWXpMTt6N1i2hxD9FPNgx6X1E98NFaj7v691XahCrFW3FzBdsgr3XGkWQm",
  "key37": "3ynUjixHuNA56CDzQSF8zJqznmNiiNPD93fUrpAR2anJ2b1mJFq9kKeAZhSGHFtRpvXEGXBv3jCs7WoML8gXsTxx",
  "key38": "5CfHiKvdSd53fSK1QRAnhjYXZtynJBN1K5s4psYH3rXWRP2CFLbW6rXkV4ZGgh3ccDAMcZaTH3Y6DS7x4HfA4ywL",
  "key39": "3RSucbb84cpucL6JWUxXywPnGrWoqdcoUHryA9AvbaGSm3yJSHPF7nxhFLGcPjLyuzqQjj5iAgF7MPfJ3WA7tDj8",
  "key40": "3NhraCifrW3gBvSu8ADbuL2m8x6Ma9zVxz1iA1gLtMf1bhjYVRTbUy7HZCK1phrU8YXhAFuv34EpKSnA9fE9AxZc",
  "key41": "3rwW7nmceUw4DTrVkco9XVF1EToZk31ZGFdB5pc88Eun3UQE67wjVXtKZe2h5yamhvg885p7iW4M8i4oFVAj92q6",
  "key42": "ZDxkLgeVZcCAPkv9BA3gSUyVX68vzHHg1FwqF8QW3VBJ6NZXW6be3MvhmHK1xzg7Xobo1fsaB7JJMs7yNy2En8M",
  "key43": "26JmynsueiiLcCvRYbh46ZPRm7eGswhuXqN8FHCkCPP9up45bALNimKvv32LQzanDW5oCU1gErxXGp2xAHT868jd",
  "key44": "Qo5RhxVfN2ZgqjTEJvFCvGjfhGKadRYv6i7zDwfyKt5TQWinF2ynUNRyTZfwmQhjgLCwVpqUUDz94AEjmubnGYa",
  "key45": "2uBHwoK28yCMmDaBUZmQneTq52iFocg3oHN3855DGXxiCPCv1mdWLdwmbVMUQCbToCt842k4KvmYC1mb9AmejNvN",
  "key46": "2YhYQoAPsELuCNFqczkqhfvVhoxTz2nZ8PiVRDou89LT1P4dPAGCC6wdZEZRW8KeVeP84GfMk52i4UGkommbWb1q",
  "key47": "2guKRvigUfi8TCh1XiyLyfrxPRxdMR67zRbHpBvapWMNsyrsEApYdk8aoTHYcuN96SJQrxA53C8mLunUjXA8jWc9"
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
