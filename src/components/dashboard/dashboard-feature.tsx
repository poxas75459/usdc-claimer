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
    "4PaS5piAxjoC1dMMVNLek3WfzafdojFDyiLWGHaBiEQQW7t4RZQnW5MBqDFN9LmidX8CNXm6Lo3YrRTfjP1HwnGb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ySnD5nEUr1WGSytb4UwNxxG1fiGEyeCtCQ79rDjS3KgXSxjrC9deDiEEXYouy1akrYbtP5bvWrhRLb89WC63DeR",
  "key1": "2mKYgE813cm6xvJuNx12rGYL3DBh7dNFpzbt96YCJp5pnNibkrAmyyvtThZvEXJBA84MuvKUQEbGdkoETNgzyn6n",
  "key2": "2kAX99QbQ8V5G7jJAzpbN2tXeGQszWCGzqyoreNVDRGmVk3VjrXXaFACxmZJfGV4hTKEVm7B3BnfZrAQEce8XSsW",
  "key3": "52pZxX4duzTxVrdF2nPyd4hNqtuKtxAVMzsNL924AUXbgKeq8cgJjhgBtjMSVnGD824crf4gcFnKLAcBhQv7zB9S",
  "key4": "3SKxH9xT4B8P3kZqNocJwDfQwLpDWbaqETvNCXDzDXmg2joM9mabj1fiaeWvotQtyiJfJbCXLUrjNSY6KR5dUdcy",
  "key5": "5DpobzUmFu5BaGjC9zJcFKKLQqcgKmQR9Nh3x3JmvwizJCkY7fyPFdwmovj5kVCnwLB88WXZzrX9aSTU2WdMQq9w",
  "key6": "23aXpuYPBqFH2GSQNU3b2AZEfCKXdspctv1icnNcQhJdKUJG8AJ6kwPo552w7GD1irihkqaBRQ6PFvh7d5tQoAtW",
  "key7": "JwRMYCPAaP3XZa9ADw53di2FrtBSdjatqwdbre25s74dYoCG6Nky1ZZEhuVQzfkuLy8CEKQgEXwpcMxozu3mn4n",
  "key8": "9tf7tmNMtZnf4R2jmoFC9RfeQALcMvKRQCkfyAHbQPBFDPP7gMZRzkNVk6nw4jPBhKfBJLjQPmzyR1uByTSJhpi",
  "key9": "33hUgnQXHsghH6bCBfriv4dts5AK7DyBLbCdt5GZWVAat3dPFwVxCLa2SkaePxVfVMNjkyr3M3H1HzUyXHwuDw9h",
  "key10": "4rNFTqTbgwfBbvcRyxJ6BKfZ9Vv1w9YjRukHjZ51kdkf9sra3zZCb8L7EQDMjLHBLtjjFZ3Zx6myYEJY6yNPGXmT",
  "key11": "2HU5JXM36KkVEcpYcPArwavidcQkH5aGTARc5pSNVu2d9E32TboX7Nuuq4jTHBmXoqHW8vbvNvGsYJrBMdkYRRBK",
  "key12": "3jsHZuj8b5i2DGvpV2gi8GcsBn3iBFuMW4MU9WdCF8aGgwHQRyFzRGD5goMXqiFDaGkUfKorSELtMStViRkmNoPn",
  "key13": "wCA2yUcie9Cc98sFPZLR7nMUR9Q5thw4Jd17vmkRgEcyNHG66WDib6Gwvp5bNWqxAcFXB2hu8dx8nByWRtnG3JF",
  "key14": "23eaADEvNy2d8pg7tB3bbrZFqmmZbw33PSi7yNLeSeGkv67qorKPiX4xD6AGkxDMAUK8HLVZbnbM8PpHq2BexrAg",
  "key15": "5XuNP3kxyj9AD6sUVTJxuLNNLejVcwJgTWX7wMYwx5pXCQx9dFhsLg1Uppc1MDXFzBrB5kVcrXKvZ7TyhwTNEE1a",
  "key16": "4YF72GpjRVGcYD7EStey6mjp6RRBRZbgzm2rLDrLX5yW1iAGst2hoCD7vvj9gNJXGT9AqXMmTUN4sDe3VAnwg2bk",
  "key17": "59zRnVbGsnTSen6zEFVU9jiqAuBjoeyzAPhxLkbsH4n73Dmo3GhD6XeL9Axhs1LVrUJ6u6x7abQeFuFw6SeS1zEH",
  "key18": "33FDp7sF8NKpKQxYHYEeRNeosNRB5X8kuXx3kuB4nvDbWYu4kAHoRhX6X8YWx7UEYRP2xUD8GHXS1pwFtus9domV",
  "key19": "3XjTUgS9HLUMo3dx5B4nUWE2kaNHUpsdAmsNWCQv8UyhBSwzfreCTpkmer91YgKEXj7pEwo7d7GJKQCHXji9PAHS",
  "key20": "twh8sNu175zhfGZTg7M6NVXmZv7TuP9LjHJDHSpFWZht4L7XWvBXxtMvbPzqWGBnguoUNGg8K274SByHLGRp7QZ",
  "key21": "y8JPzmdZQ3VDiiUcKVMy8K8SKLYufNBSgApSBZMHTLA6Wf2oxLQfSBfkgF23z1JdVu9nu29cLrQEU9EK319xhzx",
  "key22": "5Q8fk52fNrGnMcJgEzSC5JEEHTQ62Qdmmd68fMvg8KTGyybb9ZrDg2GW4bFa6Kki3kEgyTAPhVYPY6AJBwKdncLj",
  "key23": "fAnu2QdM6t7f4QLQi2Ax9ZcNM5qkpxeJr6MhNqQfk3NjvmjmL1A8JuLPWEfvtTNUv4Fw8a2iL6oz5p7pt3pYMMY",
  "key24": "2HT5tA7A9Vo1axTEg3ggnruYEFYwiJ3FCvfjQZ7Whwfu5VwnATHbJ6M2FigVsKCWRMGauWmTpMi5e9rLpsbUeX1K",
  "key25": "3JMTcUuCs52AqawuBBa3exe7wWTqEX6bq644S5S1jpAYSBeNfu3nBs8bqrGdyeZqiZ9mKNMkoWzndSPRTgqrWu3T",
  "key26": "5YkvQXHPR3p2LJcuiuCqqd4abCwQbndJAmNykp1F61atpDarDQ4Fzjk6KtoL8dHTq7QenNSBapivWouoTWXZejvs",
  "key27": "1Wwo9Ek1wvqf7snqLURvtBtvpWgALXpN6GwRBAN2izwbUvTHfTyxT9Xh2fFYvYKECvLqG2hSL7oanEYitQfcEfw",
  "key28": "5bkN17wyHSK9WDs8bTWWqEnxTf9zyyWzMxPnkPcNGXePKLjJ9R55ZdwaVX9phqiBovKpT1v3VDXoH1gQ6devr4Zs",
  "key29": "448ZpvYesaK62MfpCnKtnabYdZX1dh6cYxrsie2gsreLWMNyQfdgHNh7C9DzNKoo9X3uS69hcp7zXaLsejsWBifH",
  "key30": "FghA76rHDqgp1JJVssqrVvoNh4oz8aFVkqNdvvJ2FKdAYwgync4RAABygGD1uZw83hfWuV5peKrwo8XG1faBXjz",
  "key31": "3mWDshva6tREgo41WedoCXa4UGw8u7mks7i3qnLJE9sbvGjupwcwUnF3eV1Jfxt2Cwxg9EpjkeT2y5Tx7eJfcVDy",
  "key32": "3xmvGkC4kXYmh9ix98PzRJyd5GPk81H686L6qCXS93U78z7XBdjicFv6EQMm3tggkrDrv4hS8CbTWhYT4JW8nrjv",
  "key33": "3rUr4PtvC8mkxwDfPbicb1KLuHrE2fen6Pkj8rER8T2NTTVUXYKkghSpHQRcjLan1jS5qmDpy9SusDNrCZoNNZu",
  "key34": "7TyipCo4r7zQ7EwCU26jdFodQ5pzWNUeoGLZDhgkrbJAq73jgfDa5Qed1rUaQwz6StKUSQXaNhFsq8UUAkkp1ZR",
  "key35": "4UC6LyYgcgwMeW1Av2fPGrsZohb7AQyjphgiGVNk4Ys4EWt2EDVVw4zgg31871Kf5ZswLvL5zNz1sSpUR55Jhhez",
  "key36": "5HFM4zdPtRb3hCHoKKgpS8S4eSFTcwZ2SpRGHkbUq6dvRepRQDMVQDXsqoJES4iGXfm1aXsFmUH7RU9BCZDCYtmw"
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
