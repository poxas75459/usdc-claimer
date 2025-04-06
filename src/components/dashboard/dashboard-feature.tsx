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
    "hj9c9EXLXkDQv3kFvnmLqFthmVcZy9Dng6r9DC1NAnmZjG9iKaBPxNTmC2qniHTk5HJZ6VCod3V9gkFLm7UsFQE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AcdAzw7gLNEob7Wwh6Uz2c8cHTPGrmGioaxmoygK3PmiKnjEHwAwjL9tzu52XutjwVunLkKfzziHvo8sT6gvB5X",
  "key1": "3Hwqii52ut15XR69dm2BwPhV57qeRNb5bpLjXx63YTmvLP1cd2DkzuibmFkpp5fjYSnQ2vVXDSzRrZME8HkSVZSZ",
  "key2": "4u1ST1TuBeya1rnDaX7SWTx4EnNiViCHL2RzkEfmVGtpUNE42P3Dg4baEsq3T6vjSFvYgpDwJN9zpPGCrzv5YWka",
  "key3": "4it5Q4vpUXapiHtZ4vhJ8NXDJbpJzUzsQVBeJw9K4dmbWR3VDagXzL6zf8rH17ipqD4Y3XRE2vggQSyy2sfKF8Xb",
  "key4": "2LNME5nWEwX4j1P1dvjK4ADvwzUGuXsnc3YqyLJaNhBBiaUvHAxCEG8hzUwfFbEhBCdicnr4Mt65DzBjuF5QY6i",
  "key5": "5s7VUdt8oTm1jVHBL85i5B4Yq7p7KXrsc3FxnhD3KH49GfDiTgznt153gKASjk58BZKA28vk8Fzha8e5SGLQwcZX",
  "key6": "2oRpGnwN3GKsKVATDf5n7D3Kt5FgYikG1CioWAnYRSnPtCnB5ow1q4NX4Uyo12ntumj4EwdbMy92vtTqWrEcxpya",
  "key7": "5eA3xJNqS7jJhe2npjued5fgAVPw8CKs9hsG29C57LkMH242Nfbuq9MKdseiPPdUmBH4xVsATprmU1tPr6LiHyAG",
  "key8": "4xYiExhEPuomucpPpXgaL6gdVhRPVSxt93rNajHh8dV6PgEivEKqTuYvLv1j91VktgqfMWUcEWYcBSNjx9pyS6SE",
  "key9": "2gzKuTDwy914jB75eoU1Tv5aDtWnbUiK6aFgQVG8bsUdcEpshAeJs2h2VQ22hsSwdpY3gtoS8oWJRq3SVPxXkWnM",
  "key10": "46zHXi5eMQCMTt3Dc8zyjQdGhFj6NoYqktPGbhiaPcDcLkRa8RLc2zFcWoxkX7mC7ZVv56mtoDQicU9UzaAAkeQg",
  "key11": "42aNkg2Yn9NaH8EymuC8aYkLB6zbwJt4zfjavYQyTssbdfN3J1E1cTRbypZrEassYTEpiB3bGakx9oVprXzwo6aR",
  "key12": "VgT4JXKuCY4VYhxFaHzumcPSZCPFhoqLoBk58rjF3U5SH53MKXcQQ9qZft3ssNgtk97M5TrXLHhtvUnrqNiCRS5",
  "key13": "3T16vE4Pg8RePEfbg5na5UMCYTpipyEeJaPzMDcWV4nCUZjct9MyuhLHa6etwkNgELptUvTjLKhuH5jWvFKmx6v4",
  "key14": "HfGvSSrJxBVJGDTNSo1J9AitifPoUPnricqnT99wvrmaWasT1wM2yKcJyimNfkjmDhYCDuc4P6Q2WZ2mE9M2ZUU",
  "key15": "5R5LrT9cCwhfrTgCo1i7ZiYSEADyNeJqL18bjo4AtRATJj6ogHjuyec4GArnKhqXX8u7vTBZwa8iyHn83VNtMKFK",
  "key16": "5htARDzYHXKGVNGLWy23EgYmQDGbgvMEmsxj59oX3GMCvipTY1P3J9pc6hEwrUbuHsn8n6FKGe1c4c2v9hsMuyby",
  "key17": "4vpG5r1ukLMDDSNLcj2QNRUcWdjqXFsPPAtLESPV4oRUsbk9UGVgQdfAkqaAVW28bCdt1SBTq5PEXw1KsYgTEveZ",
  "key18": "5FaF7xmUyC2ds9qduwtxjui6Dmf1MRWgVLmesbydmC7A1GYqjPV2VXhpcE3FT9XDiYhFovcubunnh7hUMhLguJeB",
  "key19": "XKBCeYrtS3kCmKex4t28ksQkqwjyYrTpQSmfa95bRxkonGay2gLDAztoBmmxsfuwXSoKRb6YacyETxWVKZVeLAA",
  "key20": "kT5YMGMC3W3zfnj36uRwDzmii1iUtNA4gxW24oW8MbwBWmdo4ixCgG4pgQTHUuUsSXXPtsQNPwgJsiaq9xgD7vY",
  "key21": "418Eo8GmEdm2t1kxzGqCyAE6GPaoA3XKDDKYFVcLJqPjXhv7co5xdhjLy44GMnLMexusWCqGXTg3LEEKA6PrMFNB",
  "key22": "2Wn6Fzxkpzc2GGvuLMTzWmqFLguJJ1cjHSrCsaNihjkoUJe58GZc6za1H28TMFdDbd6z9j5YU1YJrJQEbFi8h31U",
  "key23": "3dUDn3Exs9VZgxDzA1WsiQb4f934tn2cC198kgnLjeq3UZyxg1vHB3uB5ApTfi8cikZ96j5kdSi4LQqyfiXTHEUz",
  "key24": "diKzwHcLhDVTB2JENKbWxw56LMKXkUgfFKTy3YBaVmoYZhsNvNTbYV85W3AnYczJtDywLkTeZgGmgoPHxpLnD3M",
  "key25": "2aU8fDUmGGXBmbA46BS9S4Agj36zBeVu6NGDtC9Lh79Vd5hk62Ed4XWjNFgWBJJYDMpGbwzXGDAWWT7jVXxJM1xS",
  "key26": "27pWeaFM3ckGDk2jrcRAg2UjxCWWG4y76WApUpGcRn4SqgvMxtKu34aB5FL1PtXYJYQHtJtDpCTNUK3Re8Zhxm2P",
  "key27": "5ApzdsiGzowfmWnkijjX6kYSmmVZyXDuLhQPBfjqEJAZB4P4VdvgYMbiSiXb7RMLNhrJfF7588FWNuzKygGRQwk6",
  "key28": "3CoUDTwYSENN32Vk144Fm64YpvUHUGhyCUqHUjWWVixNe9YpWDUVGcFwXuVpT9FiAvvGpeuWEndNvAnubrMqz4Vr",
  "key29": "4RnoGWzKHbKRxwWYFiuaKp1b7pWGrLakmiL42LAqTHtBJtqBjaag4AJD2SkXBpa8wZCQafWjx9VB2uNFebJ9d6fm",
  "key30": "68uiVpqZBrJPBsYkv4EgSxzkntnj6akzon3KH59UHNTx9a9gcSoKP6DT8yFTNH74HP6LNEAMxJ7CSdZwntXoLii",
  "key31": "2YdKpwi8Fdr1oVAXX7Ad1baTstaGRcmLw6qXUZbs6ABC6M2MuAtkp9MYKWp38MhtehWkL2rxVBGuCWa1zTYX57DC",
  "key32": "2FxMASxyeYyNzj97ZZvGS1qzig2EniMvBdX3v4BmvRAuor1Nh1nSJHpuFQbr6HLHFnEzFNH9M7fwfmgXZxLN8vLU",
  "key33": "5RiB1v55UmVjVge8AVmUFW3c4LVTaK9HYUyHRPr85mAKH2kobWoLrXKez7cmd8c1VGQyUbyhiT2SNh3xxXhHw46F",
  "key34": "4sAxHzGn9JncksY4R7pijUV6Ac5wZe6prvwmcMYN59HB56Vgbvaa6ijhmRkEbQmjUa8W3VJ3fEhrgbT3hMfo7bHA",
  "key35": "5mp82L1GGtPmvM9vikKb8gonuruki6hsjuhmRRNnvovpvVQdEUw6pj6nyyBoY7wWnmdpuFV7KWDJFtebj2ENnPdg",
  "key36": "5zK9ve74roNmhtLwj8VSgw7zDCzu3haBibbgKBUA7XJsN2oyw7u6G2SXnzmrABFExARsEipek5ur3Z2VSmBRahU6",
  "key37": "5SEZgg1N9f7pmSuvoCNajmRyq8xkpU64f5QrX4dYK3PiUTpcfvyonw6eACnKvGAcYbhi6CLQWcP8BjSrMNPGKTBK"
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
