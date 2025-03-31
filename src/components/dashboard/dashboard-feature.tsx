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
    "2QehNT2Ut96MtiQnVHcCsiwGmWJMtuA3JnyvwWFZesARVHjGHgDL9nYMovnimHB817LzbPNqqaQFxXtVADCmD2g7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GcsHKvUck4okQQSH4zKnhTjHEvKXQmeDhpk6GF6Li6udfb1c6sP4eUQFhr4ThRNByz2Jy7nWU2S37vQ3Hg3RwTn",
  "key1": "3wuRa2bwZyQXWC5H3xGEvX6pEu7QtDKhbTGFuL7hY7a7c2mGF3xg2V1YKhX7EUM1E7WFnMoq9SDgumfibZuVugdP",
  "key2": "2AS9nExdrqhqqsXxThe8Zqthx3tcChDdKaAxCVXpE6cu9inc1dd3NNzSrxbExNtkKHV24jbGy878ro3a4GLFEVCP",
  "key3": "DFXSEmbenMkj5Pz3eSJxLmX6MBRLYyJ588dLJJPrkjywN5iRmv2Mw67Wrr621ys2qPYtLjHVJPdH7VrdHP7EZhQ",
  "key4": "2mjHM4FnN6Nm5KMPxWDm2sfPvdwd3tqKcN36dMVF6a5EK9e2CRuDF4g8B4NhEJM2uAJP2baaq9E4xwBJKYxkVQZu",
  "key5": "5EJVZ83WmW4eazAAc6BgPmswPnvqAVHSPVp43MtedA69Mk48Bh5T4GTsFbExdeTR5MbyFvMK6tR8ZYRd4Hf1sEHq",
  "key6": "5hBiwT4hZ2mpWKSurvt7YwkKxWvYYyRqq56cZZqvbkzfuNwMiNC6kGmwp4wyFN8YDG9YV3Q6ug9rJKwWgscZ54HY",
  "key7": "2PQvWm8P3aUrtLUgchnVY5YRUtzPqUTYrHKb9oeK9iiN4RmsZpYvUmG8UjgEg6rgDfhF9ma6HW8HHPu8LXkiXJJS",
  "key8": "Lqq48ciBa2YS9UPfdPLb7PeHDrenziKdg1cbyAP49HmShE74Lth3BdqEwqLXewAz3yjCc7ijVqASrjoRuAEcKg7",
  "key9": "56HE3hphdFgTCrWZTbjELr6SQNTGvZyf1Yt5QJdWEFyjMEEnfm5RXcdaTmeDmkFCu5VtL9LNeM2hLFbHtw6KSkou",
  "key10": "4jWeXp6Xj31JoDis4XJadUkdgtJqYnnKbyZoZME41KNahCZy8LBjFEYQvc8U96GBWDxXoBNxNwSgeysJBsvjkUGv",
  "key11": "5V37DEE4cy4ko4Y6z5RcTXsZ3HBnoC1U2k4cMnyjSx3M5nWsxgCA6qpfAT7ZWqB9J7rzyAGERkKL8HaavyCBWxfo",
  "key12": "ZtWNoeWTyyasNurTH5GhKbiQjQvz7hx4d6AiUCNvSA1tmvKmRVd1E3y8DRgBw7Lm4qk3NoCSedspuuLoGPcPJeH",
  "key13": "3eLp31VmiegTfdD9GMdsK7gjSPewHGr7gMpsMBg17AmaA4WxwB1DBk83Zh1iQyAexug7RNwSxBtv1cJE43iwYe1J",
  "key14": "2FMWu7x3iM9XVu5Cp47F9PdmR1EMda7cC4x6mMD71duFrRNwdLV7VDjdPu5bayvb3eLJ2zULnDzzC98u7pc46E6h",
  "key15": "4KT3nFAuRkREi9dkXMYXtXL1zdVsUMAHhHdrvCgAD8gWVeA82TbpgE6Xi9R6TmZ1yLFEQSa6duMbvjfxUf4LqYC6",
  "key16": "5iz225YAyjWbxRSeaLYQhfV1AmWSyY7EHBe42r2RNdYa7PuwgYPKjrtVuARt9MCoeqAm1A8mhPCrWWVvvaHN2ESC",
  "key17": "4iV3ywPhFr4reqrwkoFQkgahkHX1vRYnatMjK8HZUgrirzE4zdNSpc2bT9Sayn2ZdZ8D6n66BqQvk3sE2AWr6zE5",
  "key18": "3eneKB9icu9sdGe1b4mG8MwU89ZJS9YLLzugTwdqVDULTrCg5ch6Yei6HTCUQKQZtxrXCEBYgzi4DhQ38DHSNRZu",
  "key19": "5gaxjyJsmukh4MsDQ1digZtxSUQEeBwFneYyvxavQnTbfyrAVBy4q7McEmQmSHvXYoG8dpExrqx8pJLbEYgm4zWy",
  "key20": "VVxotv1xqWDjMNWJHWyDAy2THKJBCny2vEsamxenLq495sirvm6wNnDRsnL7PVjHsSQxWNK7Krkt9vRqGrPjoA4",
  "key21": "3wnAknaPJBGMd7ieFqz6HcriWaYtxqpJ1AvNcLKXcQ2YYZkmNanQh3ehqjpG6CJne1jumZYKFTzC1xLczvRwfBMu",
  "key22": "2dcFggLVCV3E6yegYe5bMgv2UTKsN8sJo7bFrWQntwaaSH88r7KY9DUrwXKkF7sZovLK7mMMn9GEZ9cr9Xdy8BmK",
  "key23": "3UEy3a48vMh81kLAGhtWWeGnQmhhsFEDgoqDrE31YDqFfQwc4PKYVe9WnrVZE3CrsHt2RmMgweG1jtbzmZj8d88T",
  "key24": "4UMEckiGAFcRvXm3LLC3bTQee6kNg8TigbJ2MQ1cBgikrDHkB7zE5xztuguVJppDEm5jGYuKeAbr5kVvejPq8TV4",
  "key25": "4Pcyhxzp9TB49ZRDataH9AFqgKJmTLfQpAFZz5iEWD7DdyDnWhMEbdDMTXNj1fAKtTEbtph2zHVJBb6QDcpFwtHB",
  "key26": "3e7pQQdz8tCHjuzwiibC1oHEE2FwoNHb23i1mRntREaaPUhK2taWBcPjk4LtKM2aJbPH7MHnuoWy6DzJfzGczPqW",
  "key27": "5jiM4ZYZ67eM2rTA3LLHquFspwHWxd6sBxvdHFHrvuXC67z47Di9V8zzRBz461KcpjYrRESNc8K6K9K8si38A9fo",
  "key28": "45xizXoDDqvjcjumEEABVh1nQ8SsXeXV1o7JgiRuMY2vGMvtPSVwddqxifcLCkTK4JEizcJwVGNTXxNtWaJgob5s",
  "key29": "3jbzgt2tr3G6QWa2CUcBnHD2e2C1yp2C9jTXDMWKnpbc2f8t1yCXwzZ2pD98VXpJroe7YjkGdSzFG3SKh1JntbWJ",
  "key30": "5sDLnbdikaiu1UseUfnp8Gj7FHAFbJNq3zD9wTBC2xCY278Tdjp2BG7afFfoeQitwTFqyU1PvCwYYu8TxyR7j3pr",
  "key31": "3JdDfnxyFbndqHsLQNu9KRNCxvVQfqM37smDcR4r5DZY8QvJmBARQFknEN8RvbgS1TdA4WXLaKfmJ9Sit26DoKU7",
  "key32": "2Eub2uKCBxF3A2z8K6Sp7zuCkcAJ8eW2Q1QMAWeeFATSesmTMmnR4pmzUe6AiCoojgd5wYJbnyZJYJMM5SZ66S2y"
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
