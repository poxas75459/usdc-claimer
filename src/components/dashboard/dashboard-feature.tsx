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
    "7ptFLuWwHhih4Yev1thKDxjMyLKHdrpQoeWsKmUEzQehwjdzDTWAoQnY9h6LGVMXxWpPr9KkLt9xV5t8qWwD8NR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65dp471spinvfwJQGZiwL1gxgYn9HX8aic17pypEnFSBPjcueWZw3gwoMR2PuoLyABGUez27ZSBtSEs53PCJcKuk",
  "key1": "5bZqad62Zz5DLQb88oTya74ZsRzPfsXbcc9a6W4ZpSNbLJ8vBwBPGo3B3Kj2voVcAVDSzRMgWcpR3Dr2jht3G6nQ",
  "key2": "2S3xm2Bar3xLeJka99UxwsDX5ZBZQPjpLmhs5RQPXjhnbsX3rtK4cf9hS6M8utDUYVenNdGGqwxsopXM1dW7s4jh",
  "key3": "4JKMCd4ceocrBPijSin22qLwPkiVkYXVkqCVTcUtNmouHemcuda32hz8AduQkK5pbZbHQFwPT34uMUpMXS773iGf",
  "key4": "3cKLmm1nB8hhhu1yNxdjjeXFm22BM7Y5qiutvviUaAyWEM8pLvwGwkYiab8UkiTMqhyXpuDjiPxWeZBk7Cs5Xdvn",
  "key5": "c8Kg7Ubx7275UcUaCLiu9paSaV6uWZdU7mAbJyNZerJ6eXbvNSd7pKzKX8D7KbkTJNRfg834wHAfoaZfDSMeBZC",
  "key6": "4VNqiAPP16syjQNjB4wP5y7YvC2BzatHHTn4sL8kaHSJRB8P5s8j2A8x9TXL75F9WyQt8DN8YCJjp1KdRbeMsgBi",
  "key7": "2xqMuoRJ1wVukaHCNReXg8KSryK1rKa6JAb9pQaqb7M9GSLjY7cCK4zJeTfQUBWMws9KQPqBhbut962tnDfCQVaH",
  "key8": "2vMSc6M7wQo5kdsfiQKk5uEJp21sYeqv3gJMU7nCkCKsMbscj5tpMdwvBqym3kZaCZcwehZc4fYxErtMTDggpYpa",
  "key9": "4r123hoLrw4zajyeJiXCwENJETxcJ3UHnN1ePcsS1nM1WShXuRMx587RvfyhwVH1bmzW76Lyc2pQJNANyq3ipswj",
  "key10": "4wdPerUs2LDfyTUkKbov5QPeAFT7q7vdN7SaWDWRrC6zRUzXBb2UPsTK9pLLgMBqVFTFSW8X8dUaioKaxL55Rm5t",
  "key11": "5thBf5yyo6kTTuoYgi4zoF3pRGfqEyViXoz1f2F44kUrkXS1nAwpZ4ToR91AieUrhUj7bDYTu1kpnPCUsExJdAxi",
  "key12": "4rQ2NxeMVBSj2rj6dW4CkPVpD1SHb2C4Z41TrWXENXWPZ5b5qC52AWXF1Sxmat8u8iZqkBAtt61S8ozB84qxAgYV",
  "key13": "67Bayv5tQdSxJAdSJh44wePXS8M2dFiPUpDszDhuQzBFthcd9WhVwxRH4AjVSGpqR7sVEA1zK3RMNwiHC8TEodEa",
  "key14": "62rw7FQhzdwPyRE3nZ1JUNaKaN4FPvuzVo7tCSuChjq1bzErEmNwMwRkR5U1BatMcF5a1KmvyFgBbFQ4ha9noaiF",
  "key15": "BJR9dkLGzF4iM2da4NDF2sZEJq9MXjtwUTwpoCydUaSp1PLo6QbRzWvpWATCQtm9S6Rebq2qLDEpZVkpDW8DACe",
  "key16": "49AGj3q4ZS4uLCkUeeicGCAcLfKfvAMdk1niZpEoMtt6QH5NAtEtLZe2cC5R5FU8A4YxzUvYcufbs54fn2GGjdzX",
  "key17": "33nRFbVjV4v8jHkm7T4M6JuXUZowNroiZNfd6LhiciUNP3XbJaobuzds483wiZSQXh61szYgH9DbjAABnHUZxxWM",
  "key18": "2G91NAFN8RPLB8uLAnevWsVkZEQqquHwVe5Y1m1yZ31wvrDeZRbc8boLWrnZuobzfKWNbNRuS8iZxusEhrfjEqHL",
  "key19": "5wuDTBWEDGPxW6d6qgFFR8FWA8TU52HSbZZiaerPxANiqZYvsH73rQkgLAXotKKktgAjU1YzL5rcKZPwUjvhyeXv",
  "key20": "2HDDxH7ZMpAdkZ1pXsqonw6drsrTdgBLfvAcR62BdZgGyvTYQTzV4pMLEq3ToyamVbriS14k9RjMJErbCg7prZTh",
  "key21": "5mPsBtey74bFfWP1wKA7DWr2xd88PW9wqzFTU3M6DKFfFheHhB5jD8m8ysst7EUX2JL2QYUt3itKzXVvcc3NZ669",
  "key22": "2frX7zDPdLPHkbsQZGh7kST7M5Jmw8FBauxFtCEQpbpQcReSocbjBd2963R3L7PRCepPgiahQA2rqr7dj7H6nUUF",
  "key23": "9wjk3C1a53LiJNun4znqUWDggdJyad27kJGD6gRzPcMyJ1tzuBNNVNc1BkGb4qBBb2er1METfBwrtSixB99Um6i",
  "key24": "22jyL3xbMsUZsagpm3mG614uLSWWSnw7PuRMmx3u9nWbuQNDut1f71kjPtFHXtXHgLfsGJyaajDtd1qFhRzXLn7R",
  "key25": "sHbRynB8xo93KUfXJ5nDuJEwpQ2Wc6RE7aA9tAQNXKVzXyrffuzpac89ApNUdDjKGh8twDcJpWZsA6vjXrxvMZR",
  "key26": "5K8YhtTtnYUZar4ry8cEZiC4pCxZpfW5mPm96TYyobuw1fx2WKnyyFszwro79g4PxUZMV1rwZsQz7Jm7W2L5j1Rn",
  "key27": "2kfVP3MuJFnrrwsvzxduHUDfRYpmAyM34C3ny6wGNdadkzWCAt6WxW9K64hE352i2YWiUVfzqdUkyYWseJjAFEiX",
  "key28": "4k9ciSsURMAWx3uadT7ux8ruPR4CvVcr14B2zBMDFCCbcVfoLvP1aV7EyrK85UAgWwBbvhv8QkQ7jfKveEZcZ1bv",
  "key29": "5VfE2fzmhga64iJ9AyWppwVbbthAuA4sUs5jraHcTpdtccDGy7UxMVgYz5fvyWNc3wgGLEGpUX2yVSNHbC6ip6Uq",
  "key30": "5zs22tR9d2HMH796EFpNrvS5Au5mWtHdfhEMcLpkv8S2AqLFb2drRcQw6KwQLSXYGjK2ErfRYyKaTQj9cdNb2w7F",
  "key31": "2C7Eq55PrSd99YXPRYur1kgADeXeq3g27Lz357QCW4kWrXaY3RPQm8W2PBWbJ2aVrx4amQ4LpCpEXHDXb5iaF8Xp"
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
