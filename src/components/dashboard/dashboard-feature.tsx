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
    "2f1VrWtPR5J5w9Z1kFbcsJapTf1Yt8Y15PYZCv4AoFGQjSCVGqGhcZZ7kJzne9U7TmAbo8bi2m1LBo3wg9z33kok"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aSET1W3WasKg4rVk8piRx59n2GvtgHVK87xaYHVufbAREpUZfjHtnjKvrar7jAUbtGZc8XBy33ErEHbXY432Ck1",
  "key1": "crpj7xGhP1ydgPrpULoyvf29rYVohfjv7BCRiKwAAhE2nL9UwXVCr6nf2eyxBxzYFZRh3WdbdcdnUVEGvwCSF3G",
  "key2": "28JNys6HUGET4qZD6ai97n2hUaaJjuoLeyY5CYH9HHXJMpL173LDPV6uEzneUXmrnqagkh637JdegFx2oxCDFoZa",
  "key3": "23GbPFjYdsbAxSYMQMHEVKJw4BNHjkb1ScUtTUSUDnHMR1sdY92xBvV515nc4MXcRUWvpgYUAyxCg5JAC3WQJ7zT",
  "key4": "tPjDH778RgzG8aLLHBV4EF73CjbYxzgB9UJJgQVKVN5ZHMWh6kioszBjhnDNXaDC6yfEm2ByqEybmdEBgakLHJW",
  "key5": "4mxxH7ftZcRcPto7hiRcYhT2cfEAVye4XufirfCCHpdBDSHsD7wVnypaZM5k936PQ6EvLY4zJP1jUk983NjtqEqE",
  "key6": "5MUMLqxNBnRSHfvkR8x8bgTdZJomCvpSeCvcsdovwHykmLHYCPixBNNLNyasUBjDdnvP77hqN8Gceazw8sJidqqA",
  "key7": "4HZoRHCA1ZLnMxmwRwBYaf9P6WodfJponHEivH3pHFSFs6nobmB1CW8ub5E88SE5gcf2xnPnjfNt6zEYzMs46zYo",
  "key8": "5HVVy73GNQaxGaiZUgr4xr3tnCyqkGM4XhaMUSodEVJmSZKmsxR6vv9nSRrhSVHurY9jw24XGYyPdY4PCWoJAhSY",
  "key9": "5AvBEk8NTp9YD8sG2pPSvxM5RnmKZwxmzGYemzAWqexCPSFjSvHkG55o7UEmG4sy3QNVUhf38TDnbRZ7b9em6RTk",
  "key10": "54qcJfVkiUmUpzSUHM4J5hxf9XyaHyjBmcAAvLoACCSYjmtGTZBbpoaN7QUBqbimibPUywrLfJXhTyr7JLAcY559",
  "key11": "2AnYtDEJQT3rz8L1oTWQdWC732nMCB31tRdN1GBkz7tLWgd2iRGxVmiEoxRardWyym7qe9YG1QnVFEJSZcxyz9Lz",
  "key12": "2n2PthiAqYux4v8zQ7YbC8CrqeU73HVBdWoExFwZQsNEmw5jNmfZugnPy4qZ9rTCwDuNWcEart8e6Yq631QosCMq",
  "key13": "2TumK82GJXYwSCq3gPy8qbkcNBi7VjdsBoEStXqeqxM5VFKCzkHWUegD2HheZz2uTyHXQ1NgqnG3UoPMKkjJDMLz",
  "key14": "2zUTXNmkJwh8kB99YRQXjUwVPWNRdcWCnLnxq1nsSc1LK2kSvmFAJ9Yq7KQEN44XAh9HhNUJzhfVu4nrME3aitNo",
  "key15": "2T1ed3seWKh4mKaRNogUdMNktBqz5s9Y8CvDFSKUjM8WXqGsLgbJySrL8VVHvs2RpweFiDT25WZY59CgU3ErUw8f",
  "key16": "54X5EqjbTGqU93RBAdHLmpvsxGoLHTzjmAeTfNKfFZMM928C6ijkLimkMGQ1eH4B4ELJ9HKgaaaynqHzuwEijp2B",
  "key17": "54n4h23RDMXoJ27dnKvvxZYAfzfJtMvm2ieHKW1dmGj8rYXC9Tntuxx5KTm36J6jyMib9GBjobyW3dGqGXgWSYUA",
  "key18": "49mt9qxuECSHzRbgpEaidroki6zjh3tUHVaVqfgpDpDUAEyiQJrJoxAANAYk63Uj3wSECy1eREUeB318PcXcHF4n",
  "key19": "38H4LGrPNzbTn12C7hDkCRCQ9fbLyUQXp7MtBbWsXxn7LYhy499kRXBfm8zZ7eWj5xKAk4tLnNWxgfenD8CQ54NW",
  "key20": "3jidhQUwwYVAC2RY2izmgSTGrL7ZQpWbc4EsiKaxg5kN4QBM2Z1b91ZurfxEyVWMeiJg7VEHN3EbGGTxdb1q5kdu",
  "key21": "2U5N4kDKWcmcE1ZQVhGpqnwy8eSdmrD2uWz8Vymu9deNsifu92gp2A396cGBrpmNPGNi3KrYddNXo3gi8xVCDoCe",
  "key22": "fkaHYKeFQMUFC8xv9n79YYGkt8AM7pBsi9B8x41ZK2khJCsYKRqYgi5QqURTeu66FLUacCMzkiuq1tZ87paZq3X",
  "key23": "29joPK6V6drLBDtWpJkSveGV9RY8tHtwh3rB1jmbYRiJfyLm7SQQqE6DLd3zxWPBErM6Uxae1emnL1PLJQjgUexP",
  "key24": "KPnCq7MznMxjkouC7JW5ySudiWKeQXirxhdQ8ZWpGjYHfJ4oBSur7P7BJy1d5LFpW78wPnb6JNqfw2XzFTJLwrx",
  "key25": "4v63J5AVqeRNUWyft1zBQgCSqtXFvokSsud3PgD1wkEoDr7MbbfPzBhF8dwU9PRXeL65Jkt47AQ27EC4e9gZrjh4",
  "key26": "Vf8u4CMqgPT9ttdxqkkeUtaj5BChBVkHPKroNfQfvU8KJ2KezFd5kCR8Y3aCCJodYT1fd4oEg7KFPUtAKt5LQMF",
  "key27": "7fW2oEgcHqUQHe78CCEoVQZQGRyxZDV2DGP7n85DeWVPV2XC5hKDzWMfQJtMdTXEMB3Kab9ReuKiB3UKTEuygbz"
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
