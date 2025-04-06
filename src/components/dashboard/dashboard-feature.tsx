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
    "3rEucvTvf1X9FNMQdGFdQ77stDWWjsE66ZW4R47vDgXnQV78s9pycbvGTsQe8hg4rnBKgHyuQe8wBQB6xqwTUdvg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3R58bJEpM1Fi8j4FiV8Z957AxRAV43a4bhqejC22yZMAGLhLSTJcBs7Bkg68UxtRHsDbTNvWc415brV7UjgfCuAt",
  "key1": "25G6N5KebEj4VQEtNgKHx818XX7Dqb8QFEaYGp51KTSQPeopAe7MYzeqWEsXZXTb1piarUv5QAkfGQqGgDZn5dtY",
  "key2": "4HNDuSe7frfdt2Cb6kWcLNwYn4nq39vqNRYBnqyihcYUQYGUDygqkuzSzpTkakf7ABSpPGWYZXFoKeJXPrLyh2DV",
  "key3": "3SX8HjUWn697hPoV6Jne7buVeC6KE4sX96keDq9ZKhQWqeYTEGXBBmycQXaRAGYCrKwsfw1FREkrbeiDz5a5zF2k",
  "key4": "5vmRyL5LxuGnHsx9riuf3vKNcSJ5qCiYQmioQnhSPEN3SwxGKDHd6uFuExzfyHmwkgAHbUjvJo6ZP8Y1fgE6xDr2",
  "key5": "5KAMRXhqRnKSvggEzb9f1rPfkeNSv8f1kUMgqq3zizGZhCrzDHGLouhgD5zWcqBH93ntftfqTmmNTY7dvHsmJTBR",
  "key6": "3ABqFR1aawN5LBC673QVSKVZgGN3bdY6QsXKWJKowsQGdk748ErKwnUponSyf1A1Ce219VNyxkzCBbrBzVpYqd4X",
  "key7": "2HCugGdFA1JuogVHYNCQwqqByaqVJGNVdw9AH1xu4Ncp7f1E2ZTxrGgdmVxARo8Fqugz2F24qaj4WvTiwmMBjqfh",
  "key8": "5GVy9uFds9JLTT7T5trdL8bmyw5mBDSBFBFVxLhH8Gbm2KQgzQzyciwcYectJaC1ymu9Z2kcW8P6qWf1oaivhr6E",
  "key9": "3KB5QSskZC2nhev4Haodrpwq4BfJtYju75u2nWpMQ5AaQrZNnSbRHUCHkzZS99u7sPFMLyAvBpqHPEt5tQRpSCti",
  "key10": "5WxTv5K4PbhkiG4FDpPG9Wy9Tt8AcwYXiEunoETRWeKxUxuVnVUUU8HdmVp2Bd5bJtbZwwH3WE5qqoP7WATyscDN",
  "key11": "2Kn3RTNDuEjHVzR9bUB51KXRzxXk8gFCwXKgdKwtfjEwHBukj4LpJFY9n2DiRudNuJEiCgYxPV49111gEEp8cvnq",
  "key12": "3fuYmoEL2e793rinZPm8cmWZRrimcCyaprVtDyPGgTHtTMnGL3t1AgyG1k1FA6sBEQnByG7nPDmQvXc1Lxe9t6zW",
  "key13": "4SzQqLvhdoK29LeySsSqJ5ssrW94JH2AxZT65bYeFAzh1NwbKYKDZSwAGzJbiewoDgSsbfPEFK9CUUsakJ5bNQuP",
  "key14": "5o17SHPBGTatXQentNxDrbqSZYGPLZ2GZkkXou5GwugrhLqDDFwMdrc1zm2nTGuF6FHBs6z7erAUatat3JFeqwbu",
  "key15": "517jd1UBeukxWXU4CkFffwSx2vrNvvavPydnNnSWammFu48dxt1vHrJrDAiZq8THHtEWkgAQvAWN7DMdkz3kkduV",
  "key16": "v3e9f7vtiqFaiQWhF7Pd6jUdYjDuYSTaSmGUFEJMGcqPJE1A9LGj3ws3hwkV5cyZx3Tz6FzQc1urz3cqT1GkCFL",
  "key17": "3kbmBDEEan1HQUZUayQJvomeMVRm5j7SV2zhUe7Q4NegRBB4tYJXENUtLoaUx9LRMFLd3Ld9zqiCiSfVVhVG3ht",
  "key18": "2VfCBngmCiCEsVqoUEaSGwsPaYEnr4zSo9XMsJJDjQC34Fe6KKDHFPsVCCWwoUuwq9uCKnbDYC2TLLXcssVBAL1",
  "key19": "mNSKEojYKdc2S2tYUemWpHxd3vajiVYwYbqurbKG11FjxJHQvfVw86QytHZBNoXfkkVNwusbYymvvva29wEPHGa",
  "key20": "52M41Xxbv82mwQCxRG7HMcShVYTJFBS5aDW7BUPAbDm8UPA9iA98qycz28FZYN722aFMFaEZXXyXyzRFc1BYBWeC",
  "key21": "5ozkzeaED8LbbnPci3dJJzLTyeCjArW2yBv5dAVs7gPDBVyWumib7nFMnJXo97zg49S9xm9Uya7bMkxDDvFBimhF",
  "key22": "3ajHcLrq2D1X68zrwjJrT2rkRwTaWYuq2rQBcYGShNd5ZQ6d2ZRSPZDtvN2smYkJZQhY2iA9R55Z4HBjRjP7YsEy",
  "key23": "3R3uro2PxysJZhsukLttgLkk6RXRSk5TNpzriDGq187E7Vd3kMCR4X8N9SGaPk2gi3rQXBjeLuaLu17v8oz9m9X9",
  "key24": "52fbZbm4GsjppCWDripYYqQLgGPJwFdkenatGwW6HoDyyUEpjsdskfeLDjXCNb59A9gV5otRNocrc4vwg4tem7kC",
  "key25": "4f9PB9WZbqPeLxRXbdN6AMaEq6ycNmziJm3A8L7wK41aW5KcKfzY3ra9EbqNm4Vkg1m6w2APQhdsUwR2JYX4Gt5t",
  "key26": "4GCPpfYRg5DKcRypsaQFVVBeZ2u8RKontMuSp2nACxouaeaUVMfnAwBn1JGBdAkZmXeHc8CHB7VARaDecjat56uS",
  "key27": "5ZP1QRpiLZmLYK9vxNRWiMQY2BcJsgpPYsktPncVhkw4s5B6NXFpVPVsJTh2JrVTWh8iHuqwRQRt5hjmjG3N4KU7",
  "key28": "4pxk8baRKVTcpLDGkgY6R9yuCGajD5VPSv8G4YSnfSwaJTuec4A5tCNutPJHm9sdsgRkveuFsiPHddDffMETM2RP",
  "key29": "8gADGhsyLa5ADnTqt8kWU6qfyfNA9ZZaWPsSPZZHnUtb1CnU8qaaT8RKvoubsc4zj1GTcQVjiajoKpc7zk21QjE",
  "key30": "2hafiDJRjmGTMix3aYWi9p1s8RSYtKFM8B5zTBhZR13TFg9KejhBsFwScd4vnvHM2yxGA2PkZfptVnZDHdv2EQ8A",
  "key31": "28Gkk2RsBKZtAU7R7oBn2QZbLwLqvnQkJmhPZnBgev1HZu1SHFebqxM5zoxgw4bEddDNNrvZ1gB9YrdLWx6Vg5zb",
  "key32": "YAe1BzSgRvEUNcRRWNHSxs2MM7SJncGbkfEzhnkyex8W5JtJwTdMHjfbcWZtGSxWKTSJwf5u28Zr4oojNmmw1pc",
  "key33": "3iQCmXKUBnqVpfUUMnouUUyvkT494WQJTpcKmz8GQcYqj5kMouKke39rPgdxBtdkbyxVtCUYY5qFLFzhxa1ecgge",
  "key34": "3wER1yK2MYhoSt5bMmZBzVXRHEAsc7iLcMELLt7cQXoFquCki9qaFgDXdELf3cvv7bNkycPBomJ9nmJhRTNodrcZ",
  "key35": "vjvhkg1dqd6KWz2xM9AE9u54F4WjPphkR99rR1e3rqE3QrHktRKabqNMvGQCtFMjzSszFVBJY2SndxDajVxnRES",
  "key36": "4kt3iPQ69JGCXG67sfVH2g6sVfVSAFow3MtRCajX5br5hWgKfdHJQA1y9vc9JYDFRH1BD7CM4u1qmEVNknw6X3yT",
  "key37": "486cM5bmNAc2PffAzF6YoD3GbokjmGceje8t87WPs3Nw4u7iGvVXSEuyvt4C5s7tFdP2f88VfB5C2GvfNpzLu6JE",
  "key38": "Fm5vb9ibxcNQLkKyJAdHn6pTepTADtfTuSALmj7GPppm2Gf957i7VDuRxrDfNGrHsqTdFGDLg7oLipRZGPQ5VWs"
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
