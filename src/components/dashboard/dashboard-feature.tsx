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
    "d1btgkRgxUwMo9wXytv2SM3BZEDjsxgS2cWb8xEKmmZFniAi8UTz3gr1jdMo5vMipDoZodCYymLTiwHzWENmaaC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fjFBsucY4ihEGsWFyyE9c7WY9i7SjRhWcSLyN7JSiz2ey8LJj3TDLekZP3UTHFmTeCttp4hrbVAfcEwuigUCHuK",
  "key1": "FaXXmFkyn1DZxyrbh7NzaNtY6xUJQwXqv2WSzkCke4aVwNk3WxfZcVDwhZstiQ3spthpehyacrT23r1mydzepzY",
  "key2": "678Lr3e3XXYY6FbC3jTKnkrcMhG51KP5FL6toYvHRyY41wXddna4fZUJmW83BnpuXu3py5Cp8tgkF3VfEy8YishS",
  "key3": "2xKHfrH3GWCPDRtjvTzzYUzxknud1FD3JXNi1w985erb8WbeWAiQbFQyYCPrN3oesq1iRsUCQb9sUveL3YC7Z7jd",
  "key4": "4cV8riZ8nV9W9gHwx5Y7TcoRAN6QxL2mUir8TvqiqYMhVYpawtR9LjifzCU6QGfXDMGQAnUa97txC1v2UxtmGcFR",
  "key5": "4bc2nydHABwzMes6xFc1QUwTSC4xEKcVkcwVJ3S2etvKu5kRqMoRZ4L3RYHSgv6LVe3AyN9eiU3Tj2GWv4F5n2J6",
  "key6": "2uvb3a6Xt9duwqxF1Q4cfbS91SwW2eoeZBYNFw6g6Zsi5n7Sy6xsZ7ERmVTetY7eukqAb8fHXUgAFFxjmmMkENRb",
  "key7": "2uhrPxhNS7r3dEqUhxWdGdrnb4P9CRgcwDfqB8wd9VnBGdPqwmY8oPiQCjnef6nmGFM57hE5QSaHQao5AAofsWNV",
  "key8": "R9mKP3kw3KhyAnDVfQcbtoFgJkvrgghKwHxmxNZqwHPoKXgFAuB43veGyZucZbCRkHkZeTsCGWZXjCya41r8yL5",
  "key9": "qpkxLNP1i4RgAV5wpN4Po1nYAVvpggKya7t2KkxycfLiueK4EW8yMCYdcatXwnM2QLM9DCRKScmVSu5dp1UEcBs",
  "key10": "N2wgmYqF7MuUxLKYzRjKKmT1rSCC8fwUu2SDVWXUCybgmSDETSU73FX5a58QX7rsRPiB1DTDnYeX7CfWSh9wdSV",
  "key11": "5WE3y3kjzFvTNDrPgLMK2za8RMdcY4ExnPUBFQKF5wUqgdQmT7jFZphze4BviziLCviuM6uHG4cDS1UgzTLbAGXU",
  "key12": "mp4QFnTuQ4jCNx4MadLTwrPKpXyGbBmwAjc72iqs3UwNtmp9SbWwSnvTSzdPzpiaaJgsTK1nX7WToVyJvgZYnyu",
  "key13": "WEjcXRpLVngL3e1RWvgGkvXyphnkVFoJ3qXQJm4foSiizx9WMHY21sWT1LcLqrzFdfEmhjyHW2DXEeiQN6eKCem",
  "key14": "4amZUXaoZXKiTsEuQoNHAH5t1ogLWBcAEKWE9wptGd7mfEZFbm3h3UxtXdVFKDh1Ac1s93UXoUBL1Uqry2mvK1Mn",
  "key15": "5Ds9RP47XfQDqSoiDdRyaL7dr4njau6Bp1Ebhfus7QxNBB9R6CfbMkgEn32eS8Fr5Fp4DBKn7Azj4DEqUxZwL81B",
  "key16": "5bjGeDUVGcYGDu6qg4eusLwfTk5ygNZKsxfF2A4GJSQ9nDFgj6P7zn6Cigoi9cj9yMwxUG3zNw8SS3xnwfUptFqN",
  "key17": "45wJ4vxkyn1jZvSkFpeRXcAcD5MK1sGqa1NYShgTtfVX3azRtCL4BdRnNWaLSaqxnGZx3sg7stSKzXHMJcdeGqmH",
  "key18": "3ZzDGSmd8Mz4r9XWefgXFLH1a5zHSgXAtcjoYzR8qFDu4DWBcPyttxY5Bk8fMXxJTUpftHDTRbekbsuCoSBLJqST",
  "key19": "cbBNi679BckwpP5k2SFRK3NtvHqxKaFL7zGHKMbxBeicXj8hiFsrJtBPMg9oRBvBquPdGCBYVZxzq7aR6sMtisx",
  "key20": "exgvzuAjuiV7sSKM7cFaAwE73ci8VfDKHUFcPVnQgNpZRBtfFu7Ye4su5EVfLrniU3jTQUCiEmNU3umBXLTbEVf",
  "key21": "3AoRHAxhXgBgf77VB3aitmaFBZaGUogf9DwVQFQSBSgRrj6UkcuHDbUxboqW2BmbCKucdj8KqdhcfqJJo26K3z8s",
  "key22": "4KdNaYSLasu8YZEoQ5LtvKZArNgcccuhUE3XqAHQftEwxB94w6MADTehJYaWWAhoNr2fBd7pkBb7d7cRXURRnUew",
  "key23": "5hmCTRnGh3vFMtUfyFFRuuVKPSRi4diSvVNWGcKjfaEW8og5t1HyVxUaPdpHaxusPRZ8vkUFJWCJtJraVefuCstB",
  "key24": "3h3zX899dvkyyRU6wB5Q9gu51z8ihR8b7cvbiaVWxhicbUPZLGtfPNoJpxZ9XPN8tyy8H4Hhrc939c9AYngBpTN5",
  "key25": "5aJDcYhaauXbUN5tkJEs4MpWuq6NUgaSEGC5BDu8Nfa6tFJzEUJdtE9mA5SyxzPwcYwgYFNkjBLCm3yLbqcXGXuK",
  "key26": "mCqesChjWerCdXdwTzg2qnjUELGyJJx3JDyECedi6j3Zz9kRbvA4ZTQfNs3py4ouVy8Qoxe1VkprASDsX8Yo4Px",
  "key27": "ngtUVt5xtJkN6o5oXoJVW29wmKWeV3DNbuEyBYRzaSzxJHG3MUQUKpCVrxpc4XbejURgXTxQdDAgxie9Z5uyHY7",
  "key28": "5JpCGshqPqAfz8ZTvD7Maa5XZ88MdcTm2itT3Bb7zthtAVqYEUdZBVr45MJteEKtSHSQqMFSNasWYaqd3KEo4Q2H",
  "key29": "2Y7H4PVk2BJz9eEqXfZpUXLeQmKEJ95UzVvhaynPjXFAFKRfjTkkgtBui8pCH16aPDBAgcTaW6wqEGQuXzo75JuV",
  "key30": "44MhhDNCCHZc4aMqhAccZhGruoCpAYhHTfFkmQX3osGQcjjZi6tU1e6LBL9tDbLLshehwVRS3hM9QEGJP8RvPCoN",
  "key31": "3ZNZtBirCtmwtQBMt6UnwuokBuPzDR4baG96YLgLZkTAxAqZW3fwETiA6WXeucJnXMoBDDkQxmVZvNWtpBiXxzNK",
  "key32": "5R7oiL2bHok9UvpYgS9cUQ7tEiqrGbxgHk647XG6WhCZqfqNi8eJaWcVyHptoVY5kGu6bHQVxqaCT3xNfd8QxXsa",
  "key33": "PXDUucg5GCw4MyxJZBdQr9ngghU3TnpEGEUU9itcMnRa3SD5Gdny8CD3M37QiAf1rp3c1742uPpS5pmcELnK6P1",
  "key34": "cHWvGmm8AfoyD3EKwEKVJ3HNUcP5mEzPYpvYEkKGUFsy1cYqTKcFjaGSybrKzP49Amuw3HSKNNjNk1cXFSM3KhT",
  "key35": "4sPtvDqyBJPxYpsNDkJ6dUqekFsJSBLvTtUNr58fksXZ4eSnGNREVTSQ9HSLox1QcnA4PXFtoc7Hbf42nZ4rJfyk"
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
