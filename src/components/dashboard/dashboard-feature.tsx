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
    "3rmeqLvZwXREzb36Vj9vNKb86xs9ZTyNjiXgYM7H5XnTeJT1e4NM3JhrbPKREDKBRGXtk2DtXbR3ggBsgqNqihP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zPLMrA5KwJBDhGy9QkDGytWBUnT3NH9oruPD5sMxb2haQHso9PtbcXQJuzZBTH1xMGN4iwug1WgCY2ieYcjAur7",
  "key1": "2NcvkE4yLLpCUuAYWHdBVYDg9ndfZS6cw4FGvsH2YnC9Luua1GrzBx9TFq4iWBEnYK6PRCvs53smyinQLhc3cKLL",
  "key2": "ieZBhc1hLKzbN1TbuFG6RBn7wb1qtGVwdgWnCKZbh8n32rbUqw7TpdF14JUvVYPmMRgaJXZajYNFa7ThLgZfgi5",
  "key3": "3y7743GeKCank9ayrborcom5npY36AzuTzV9zU3CFeadNBj1Gsjz75VTig8BwECEGmVgrWY4Wu7MTo3L46NhUVQQ",
  "key4": "5J2n7igMjwCaKZdELU77b4sMMqcDEmgU6US1JBBdzEEcExQ5TBdMYHHaeJzqgcd3eyn47yYLcwyJsYVpTjG85FQX",
  "key5": "4aEs43j3WYov9W81urxaNNjEj7vucoqTVCPsvhUiwzrPKBLK214uHSPzimBPtezUuc1f97W2hMkHQbaXSHwEd8iN",
  "key6": "5z79RSjGufHczNxg5DMzvL5y7iwSqXejbJbZnbyLZn9QeJojj1nBuAjoPdj3dF1Y1nq28jJZ5qxo9Wqj4s8i6wrM",
  "key7": "5kY2nTxvHF9k4DBBv8NkjnYboS5kKoUnmnrcg3y3SFukWgEffn7wdMKE9BuYqEbVHwoohB5Y4LLpkEUMavQ8FXjm",
  "key8": "2wqTJH5WfhikJ8hy5JrN1xnc73TydQi29DbnXo5NgdkgNy9oTwpg9ZbdQiGrNH16DND368U4QaL8anZoopfJaSMM",
  "key9": "4rYVqNtHYYurfVqRWYo85rSHbHibYLq2rs3zv8rf1aG99iUUmJRHVHiHH7APHQ6sDdsYrXEYZMDH1CmvPrkKhBmP",
  "key10": "22wanYGacqoTmKBKf5748xpahUsGByWFBeRDDRgzWYFNmpBNUnj8qhysm1oCGzEhwfHSb2szcgQ4gkEizZyjrD84",
  "key11": "epyLrjCc2ZD1BC9SK1jHnUfb9NQRhMBXNhYdtmTtTYpvaohzZcYJ5wmZh2KL8zUutDLhkKQjkz5SPvCfP2HyFN3",
  "key12": "2LuFxZ1DsRz8FwjM3iLpUP5nxHq8LBX1Mt3s6b1AqE2TSMRnWppbfm1KTJwQ8mXTiR1aW18BWC6etCQiWGhiYdhm",
  "key13": "3ZXmxAzKShM7orU4y7kmLVb37uzgPz9Cr7foJBt1vjas3T4CT7N67asTafqWT7nk6K6Ssx4TxJF7cUoqFALz7otC",
  "key14": "5JTpSZDhNn3h3WgBdPGCLXFSXF61rV9FCtQwRbExEPvLGQra1tWdh3rUMqVKxhm6DikL6Bon13R8GGK3gt93kS9h",
  "key15": "3GiPddRj61acStdV1ah41fLDj5MeFWPPA24vhChsrb2v5MZRmakTCLeD35QXoRECzYB8LPY83kZX3JNSeZzuSeMt",
  "key16": "5MjKKMnTU3gHtCJZr5eXj5RCjaAW5w6FeJxsi7uCJTrQ3rnGArYDv1HRx3TMN19XkKHPHPRRxxUCf6Mzawi2NDEc",
  "key17": "5ZpMA8WWzBpPKgcBpCLab56pYPg4bQpTVfMQsZ1xr4rG7tweNDtwHDwSTxZZvwmABWEfqdCcUcsuRSHvgzsLp3Ba",
  "key18": "2EoinP1niWKY3rFDjWRj1cT9ncoFaUD5mhKLaGEYN5AoJ4WqX1ic7ZppwCegG5Scjsb2j2w5LzNoRKh7JgYLDk9z",
  "key19": "5K5FD2qxLVqQWpM93yfGS4s9qfZCYSDZgKcDpaJgzL9ndWUXLAbHEi9NRa6jjAWEVQSV6TWUdYsPK32fa5MuVvaX",
  "key20": "5U6VBdxtna4ggnt1hxmC13ebyxA4VBYcw5pM6XVpJpEQenQRwaPAMZrRo8Zu5KVGG7VwFw3egUN76t4zLr8ff7vA",
  "key21": "Qrb8vN3rSAmmsZCjoZ7DuBRPiYfGPWit1eFck2biiTwMWJkv9Dj6jS4PzDvwuTHkaFts38KgNyYA11rG8dASjk4",
  "key22": "52GNN7p6Yg2Sqhw2VEEv8CU8PiiTU9mZzQGoesJTdniZJ74CixQb1VHLiTJcsewE8mkyFygsQK242xwUay5GHq6D",
  "key23": "5oCu9jB33BztCp8gdagbLTgFAtbvf5AiKYiZs2WgymJE4zsfMfaco5c4rMXXRszmiw9jjsYbhNc2B1SRm8bYn7eC",
  "key24": "65FR94VFj4UqQT7UdpUVPNGgoHhZNJmXjiLxAmSBaDVRYamg1dkvgGr7n6HkkRxzGqzkETmX6F3KhpeASiyW4WAV",
  "key25": "59neQzF8dU19cMykBh5TwGPYUWG73wm7Se2DpRBWbpfKKrA8NyE6ertoEXuqHW1w52S7TauaF33yzqwXs8iyS5SZ",
  "key26": "56jNLbLTDymCW6et1yNDew6snFrY3zKRkvbyT423ryfFK86MhygiCR7WWJt2UzbWwNNKW3u7PcWbw2DC9EbPMpEp"
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
