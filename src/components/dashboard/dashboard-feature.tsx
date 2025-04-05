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
    "2PCJBXkJEqcKWZZABJw5QCoRK3SLUYXjZWyfFDmX6L1mVStHMAp3iu1ct7bvvMDQpUhdwTLW5CrmFj9ifFnNes47"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FGtMmxrmYBaDphx5yiD6o24xPWt6NZdY2yWYVyWx74J1HXA3MSZ9qPtdNrDyNqjp4q15PVZDEGLmNr1hJLEQ986",
  "key1": "5RBEz2ZfKBeHqVZpqWRYxsDjNFv9T8f2hUFW9NZdESh6gPPhX9nGC3gFGmKEogkcGArsywhNct35frppLWsmRidr",
  "key2": "5tK81xTRkv3c6qVT3bmcBCyhgufqKJyZZFeG1pNxRTR5qYJUkMLTF6h7YPYvZ8tVKnzfhCAUwgtUUHSDC3Eh4Azr",
  "key3": "3cFgd3dy6zhqYWERFm87eK6AtB2sUUjY5b8jGvkHw1Ps74ajQouqUA6Zf2bL66uAnMHw2HFdEC8CyfP4v4C118MU",
  "key4": "2eTdZtrtRCy99PQnumhfetRwY5Hci8WmtpqpVNNGrL2C5TAGHve7UMh6c3LpQXnMYvoScEPYnhn4UGG2VADxU7Mu",
  "key5": "581tzMWimYMCHkFJEF3R1H7iQBshDE5Bv9pj4z7WcT6FNASkPRwj76J8ahQTh53LsiEpjFYQ3i6NdEXN31WcXgD3",
  "key6": "3aCAraxyUepkb7Xdejg33MUwEUzfbyFEMjJJX4Wz3Dzj11ChMtcpeMgr48w4TbXsaQUB6RvJ8VYJmaucQwwVZHHQ",
  "key7": "5A56GDdVcvSFYUnPy3FeJowYQCxQxGhzPoQiGDyaFBuWD29PMeEhSQvadEdi35vevN9sPK8DTv3buhyccXf1AhCN",
  "key8": "4coqveYsD9NWR5gVNDgTe69GNDdTdwVLGtxAPgq5vSUE67TEkK4YWxX1XxASvSXQBHEoFhmM2eSeMdDSrPKkSHJW",
  "key9": "5YrRP2BwuiUaTQQn8G4jWDgS2G1aT4BmNpCdK4hk25PKv9VbGRkKA6e2TRa4adDaYqNi8cLSCEcC8fFC52JrxnNf",
  "key10": "473uz2oRvgwezUEwLDECrHETH8sGUnBhwx5ax1TndwEsB3G8P8nSNVss1d4bAK5rBJVTPhet68EpEpLTpRjEUxGk",
  "key11": "677cerUdN17gQ8XYv1uZHKfh95F27gm4pmdPm1C57X8YgkGctNaczLnYXuFosgQ97CqfxSAxtqSh6pbew4SC23bp",
  "key12": "3h9ncT2NW2VczkQzYNayB2DB3JkJrjfUkKw5kQQjYQAY5TtBrBo1Ck1ioBEwpr3Ayrt8a7uJodkXYCB6vGbMbJku",
  "key13": "46SPcPMQ8Qqeedf3aKnAsGQQ498Hh9u61zQYYDH2Aw1VLe58kj4wYNjQvcBuwAUGBvXbK1F1F6ZPvuvYbZpsZwPT",
  "key14": "3YSekzYqEjHfygDynnb3b2mXx1UDc64JTq3bPyNFNyM7yFerQBSxoGb31jAH23sexpwpGodp4cz5EHJd46MZApRT",
  "key15": "4zVosmVxAxSNdK33k1vVG85sTH5PaoTYxcPSUE32ZctEenChYqT8Di8ZoyG7Tgg3z5hpyxskemAZZgKaTpYUExMr",
  "key16": "24xpFAPfiA4rCLmUuMFNV4CUDFZQa1L8h4anSAMRvzX7rhgcgiJbNB3m2k3YFo6YzPiJnqSXPmCfTrMf1VvGmbqa",
  "key17": "4QaVndWTrtEHaiRqeZGdr6WGykS4ivysSAajn5moGRcxFtjwEko35Vjei2MdYN8fmeg5p33RzhoZfPqebEwSLn4L",
  "key18": "58RfQtWn9JwohEhhNXBCTMQeZWpC3sWWBTejCCrV7YuT5VkZPUPQQJDZJLL5PmPcQ5FcWEjkxV9gJ7LsbvezghBE",
  "key19": "2obVjAD4yzMYPZRQvsfVmbMeDyPN2LVL6zpBZ4wsowL9Yync7nnz2kUBudeEDNfptiWAM1DSRUkGxNS8TZk4sCWV",
  "key20": "293JNJ7uYADBLqHZmuKByLM5QYraXNGKTGggZcFPWQ3x3fse5p9BpfMFGyYkkFf877D1nApxUfmd5mF1iKjj4m1z",
  "key21": "2ykVJYoxkVNXaS16nXbJuFpftdTeY4ZDGBceHss6yfh5n7F5sDm7zgi2DBdpbcT68ZjfJKUN7cntjFcRhG6TvDQ",
  "key22": "5XEsAyqgdQWiCxFu6eW5NPCjbceCkgdW7GeZPeUhCwyxtetfNiYHDkWM97h4EBhDHognmi9rjpjhvyScnXn4FWoW",
  "key23": "21DHfPFBqciL9hZPcL3BxbkftGGmYUFBXT7ew4KQPkrMf9EYqsgEkWeuPrRJgFCiQNPbB1SMcWq75NeFBSiL9uBK",
  "key24": "5kdm4YNcXVMbbhXqbCJWTpyYD92yxXz1pmVvaHjpTG5gufUboN6aj4R4sM7sBr13eDvYBMQvsmxZ4CEfVKTfcvxX",
  "key25": "5Z9J4aaHTfQZ82v2rderCydbQV7Dx5RJfBBtsLw2fy9r4RdvB7GWviLacEa4xurj3YbSbJt5gHDVZYV3TsM9Ex3N",
  "key26": "2dWXXUHUoSeARGESywQBBXJMrKCfw8DgxVu3Z5pkuJ4Yyp86LdXzWwo56GjXmcJKCZsZsNtU5szhMGLcdS7tA5sg",
  "key27": "fJMmoxecZyJAk8fCTeFqtWPq73UznkwZqD5WkKqX4q22ZUN2dmXWrDPUxDpXYcWNvvqfE36iYytE2PPZokb7xRi",
  "key28": "28ZKmd9JhMp72Snedatf9v11D9nxWkirTKmzMDTKou8Fa65f8tXm6VDiz6rXMDWbx93GXZ2UvuCqaNBkZZ3jEcy7",
  "key29": "5FxpSvqdG8dnrLYVdAfuHqNQNs7WjG76MBhZMupFdhyapiWBxTRjnyF6xA5mtW1R48mtF7f9FwmhdLqanf4wsdG8",
  "key30": "5d19tWfMcPqPy4GteV2DapVTScQ5CT5LmXVmo3fVWeFZMjFfXBdBkmgk5AHu9EynqHJsLYVW5M58PoUaJeFwmzt8",
  "key31": "p3xFdasuSU5YMG8q8yHxpiMp9hgptHFDaS7QBXHabudogULJYASWYXWfbEhXe7Zvngvcy2dwYYXqbEVNayqB3H5",
  "key32": "53vpx5DmHqEwMc1BzjiC8mcgorhTZtsS8PgBHBSo9uEAGxJFYczyVs8gpTigFQkvfYR6QZ4WTcRW6CaEHJNeLcfr",
  "key33": "36E2ca7c9F5J8qxEcoVGDpNa4Jkr12VgBiFddw5JAW4U9kLBaKPEPeUW9hs2jNHSUyMx6unPpaSTAEugV4Qhpz5F",
  "key34": "2jSFV3UdagRkRqcAaYdQHQo7RWdKxXmqtWQp9FM4vSCfC865TCbNgShYzWbp1iqRCNMaCoq7XqqYadGhYtno1HB2",
  "key35": "myjsMcqscsGaymu6Bz6b3BrHxSsAde1nccqbQLMp7oWGo1rjkedDmWQxKpodrDiLiBCCfC5X33k3o6uo9HA3dAu",
  "key36": "4FLZQ6j4XaW4ZHmKLpYTbvSffKj1yDhUhQ7RVAjV1pLxqECB6ANv8rBCjS8ActXXas4ZJeoS6jasGpURnKWYEHju",
  "key37": "3kbZ8QRXJf4zyv3s61k7ti5L72vDb2nYtoXyDx67zHVNQqDn9wU9Ad6joFZSFGe8dycgvoe8cbHQBwsp5Hz1uaHr",
  "key38": "3AaMDkh82DmhpVWvV2frxUYmBYkXP9Rktzn2YaK3HqtkVgnwWSkmJwvWufDNtU5VjCWnJbDgz7wjTdAWhGosRpWs",
  "key39": "4HFXpWhnXCKx6dTVtPZwR5aKVSbPzC4MfbCGgPRHd74uq4b8AnLFxHqDmBwgAZEWAC495i6we5WChitUnD2iVbkp",
  "key40": "5MYx89hwSLPXyDY9Qb1FeMBxXMyq5g2HmHoqG4xTYXb1iBxdDKtQ71gLbKzSY8Mu9eVKgx1e8aMKF3rNpdTa5vs9"
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
