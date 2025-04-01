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
    "3bpbDtWpZVdL1oPCULttZPzwYqeeM8vPjMn8SwGhWnC54rfY98JqUf24WFisAdeU8uZWeCoLbFrVxi9T97R11EWr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fGSUab8P6Gh434Pi9jfYcAhWLvZuCwxL1fUsxY2TSu6BFWuE6zFDR7SSpqrEgWdQehB9hMvqRunabmHZXLjxtw6",
  "key1": "FS4pFKnCGMaFGbDN8g7LVKt4ffZinDT1qQ11niFpGftvMj3CtEY3Kbo8FFwBb14qTtvKvh3sWRNj3rFGu2F9B9B",
  "key2": "cTtBW2qRh5pXSZebnHD7FskEaqK3s76W5zmDDK5KaYUCxnRuVXpTKDbhxLFKmDVgBMFwoXEHXkqoCSeZU6g7hs7",
  "key3": "42hmMpwEYA2M2xnSmLYQqG3cVzu1imHM8mnC3mnfNfVPT1cpj8GMQCi8PJeKEihVXxcJ21AK16vbwUvXCBt4Tzp5",
  "key4": "3PC8VvGbtY4noEd3sK1JEp21fgg1WfS2EedX5nfzS8p6HMoZEokremUTUVtzRgengz2Hy6SUsqmoAwYsmxUzx1Ss",
  "key5": "3xu4s2sudNofgaxGRZrMmofGgtHmYQLUSckRxWK8A2xsjJi41GeZ8ogDZuN3r4q1htzn8v4NDvT7m2GybdyzuhX1",
  "key6": "HSucqmZnsvnKXZrKy8AwTWLWyCNdQNXUGdWSJ9hxjdBf698VLGJcBhhr1BESH5KRQsW2f7VscZZPBEdnc3TTmbe",
  "key7": "2g5es5KBWYwmtwG3JqE4wQQgst9j4RJEVb6XjQfzZe1hy4tDCVwj91BzkKcjzRN7iKykevNNW7McXkLkeoEsKogP",
  "key8": "5v5ixKWvQcQ22DkVVxCxTbhdxoko6JqW4Wb9E7fqUrjx6KHxAqa6T1536z2ZtSEqbeU954doeCwmozp8r8u8oFMF",
  "key9": "mGznY1P6PbnH7JJekTnc8KfP7pWVa7TFjNMZHXqD9TW6uwujNzEqg6QDZk3nXHZFB7FmGnfpLWi5f5jy3xn4yKx",
  "key10": "2Qn85gSVzxMme4uZNkmqC3QMiK4nejyELnt6NmasYeuGcEefsGPNqNWj2XSV24my7395GwDNJW47sYVeedUBb24W",
  "key11": "4jH66Mw786tvgJUEqiwvA1hc5m5S6f7pDFwcaGrYdg9WacaMBJqWpsLd7sf1ZZpLb25KMbQdoZWKnXoGc4Zi5CVh",
  "key12": "3j5oH9hfBb56xYydEi2LBvg1NcCD3hrLJ8GZKfT2fDh4KYQhjWq5U9daPeJ2nFDBrxrgDsaJ2owe8gMy3JbCULiv",
  "key13": "2Jb4Jbvqq8ceHpqAysRuTVLw6htNhQfN5Ys2FsY1MfnanRRQm5cW8i7SVUXBLxwSMyH34mEakHApMhsHn2DwWpjs",
  "key14": "47xjGeiZZuaiddHnjrTDHpXKyjNctr4Hi9QNqp5p5nJMxxJEqbBbzDLHV72EUDAVthQ7FY78GtTHyFRUjxttBk9F",
  "key15": "5K92NimrvymTxSUGyZYNizu1RCyHE44dWhXFZr8gxq9SWYWAxZ8B1oMc4GYtJETGVQJ7wHW5rLNtddVzTXwMWett",
  "key16": "5iUAodhuCkAaG4G8mryrTntyyqJaDHhXNdHEvbfH4RTaT4mJv3XfSk42DgbhDseoM5X93XUZjw2djhfZ7CXP71qs",
  "key17": "2dchDP2Pw6MnQJWcESHHzfVzKsxXGHynNkd1aygdUttGdcLH2wXuK7sxNP8b5ctETGzaVqkSk9T5LPBrco97Ekdn",
  "key18": "4JhqNjR8PudEf67WoD65Mztkxf4cC5QGDVCYjExJNd1tqqP7YDX1PN3hu41CXCuFdp9ouC3Piaa2G3t4LYp7g8tt",
  "key19": "t4PWLQm5Z9gcs1T7QdvLryn8YbchcFfSAngZdxB1onaPvNEoeQK9joctBSsG7wqjMB1joRNkQmApHKnqEx43oSC",
  "key20": "52CQ2g7xjkZj5bfxS3D6HKTZNH8Lvs7JerknwHf2YigYWWaHNJz6WonE4WuGDJ2zhppQS6yrjjnHudPeUYH8YpxL",
  "key21": "3gG9Mt6Usox1femcbCkALfHRvnE4J8n12bKxgx2YTNuwHmY1usEk4kd5c8nVhaBBRNACqyLMSS43yeLp7kzSkmqg",
  "key22": "4aNy3UEy7c4AYYsHmqSjvqsgVsHyfrGcYrajA2sGjRW6dK4KwKwXp7KZAbi7isTYCu74hYwV6rZcUJpMG17ZJfR2",
  "key23": "2WRuDdecVHG5Tnj3hKqjL2rF9SsVdwbFJbKFQUGrzK8cu1cNmrZkGauEHp4jSpmvjNcyuTyG641QLfvxT7DaTkgZ",
  "key24": "bMvTEqdeHBnVeJ4C56wSmG9wZWeRU4CZdV2P8eFixQSsCiwcvpwAjJwxuBxSTUh9EYDqDG9J76E41b2LCL44jou",
  "key25": "4yKJ9zF6cSLdK25hGxgiQZsy47Yg3tLuyumL6BoXRgNABktwUT41UeVdJPH7XjadgYDaLoqzUrTtL2krMXW42rNZ",
  "key26": "5FwTEwjLr8PAP5p6hvRRJFP72q6zv966Mp5LiCDtjnCYjKaMz8HrvvYsCAbz53LHhGK73uhGCDvQendYjVRH3tFn",
  "key27": "3C6kjvjM2FA7RAjtkf2Je9mNgk3npxBAG8JZ1SQLa2q79vAFP8ECSSDPuFfgjn23gxmY7E4z8zixk7Uh8YwFkeFs",
  "key28": "2vWokXnCzhf1gehdkwE5gLYAjtGApi91kPFfu8svBHu7kgyDg2v5N1jf281zFJ6u64Dc54VYegzx5XYYXKSzxhgc",
  "key29": "647MbuFsbevPFVzF5CTwrKnoPF8pJ7RBTY7KHXQLonDbxzqB6XrVVuVkb3hV2RGB1ncXYaYn1q3EiXf3VkSKjR6k",
  "key30": "3mZtYS2DR4r7m8HTz4UHzDbhXxe13gv9UZDcH9GcWWajby2HwNhHrUoH9XDBx5tkxJM39EnAJ9LJA7p8UPV7XmFa",
  "key31": "2L7N8rJeeQmr4Zr52CpYyhhfFT6XG9E8juMEK7z9txuWta55mnpiHKBC6aDkbZydXiJoTKKtjW8Qri2ZXRUiWD74",
  "key32": "4W6Qq1pRVEMXgBGA5jVk7UxSfko424cXj1oxonVZ8YsNaK8E2Mb31KjEqaukJTjAkatUUSxTqtdipAW8CxgwRCrC",
  "key33": "4JGrBz1N5Tq4YWQkSnnmrvW5vXbBBxXAMHG9pifbT9s4ibPxxyejVppumBPkN4z8MszMtMk6F8FtSZkdjx3t56cm",
  "key34": "4oVrBsajquSZUHLPUhmUPWmFqhLpp6UHgyNtmdYEKdY4hLY2fWMqTn4X8FAf5vxVtSHTEynXX8dG7hKJCs6qxEJe",
  "key35": "Vo5MiPVrAadqVGidwZXAX4gCi26BQRVfKLjn9HAL1faJzv5981vux8h3SH7cmYbVaNjUG4r3w87UjZA7jFG3UgL",
  "key36": "2yMCZLhWJ614RPYxKSxEensEDManMVmYvrdWJyZ93RvsuYZ2WrrDRZi2MeFwPRvYTGbLQ8giVRBgdWojUCTQbMNG",
  "key37": "ZxoUnSNFTZC2nmrdq4Yr8y1YxRTd1ShqZ289kswM9UtArQS7VjraBeACApRidjVwh7wZc9AXKn6LT8if9Zcz7hE"
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
