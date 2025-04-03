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
    "44DKKCLLXJLwKptWxBC31Nh34gVovvN9vZF13dmw1mU8eAhfDa4q9RojdH8fJjuHpFXhsBMygAH4wBGNRgn4BhpT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zJyK5Pme338fG4dJMYzPa7CZQrHS5NWVHxrTjNqGgY9qp6n4hsczrWo2B1qMrT7wy4cvLWfu7ZzHZfP7ENB4MAZ",
  "key1": "4CXh1ojLzNGrbdj2h4N2uMcZqj8sHePZsEaa3AVgxHKHETBmzgwoCBuCqoihqvf3QH2c28PTMh7ew5gVmjkSD3oF",
  "key2": "5Ejb23UFTndPzPLSaac2kFjwJ5aCVKqbZWE5fFN6r4yk6zxE7LxCHoo85CJMhVz4X5cpjc4vq9ZZv68FxgEGQBs3",
  "key3": "65rihpnxV1xNWTH5Fq7AmAbkBeuZipQSzv1LQYhW6rAsoexHejnqEpmTdKp176nEQjgpSMggFQu2r8FhcyyXV6N9",
  "key4": "2oNk51pGpjDL7K6qf1GayQbFSyDSRU3zVrZbMgLX1v3b9CtgRY3RqTmjZo1RRviBwGYtbZtFzGa7hzfxpowwYpUC",
  "key5": "4UuBnbuysfRYZDCzgBZcoNS4NKfSHZMxHzmyeRXG1rGDVkkgYiyK5XvQrXco9ME7vkar9B8z4FcZP93zs7z6ULNU",
  "key6": "43DdpuNyy3pqxUvHuJCbwdnf8xbQ3nHRF5Gz7h27Sb92Ym8jXggrnPtvUbhCwsTRm14Ykm7mAfa69PTYd3bnpCM5",
  "key7": "RQch3THSbXm9rfsVafjBXXYJmMojyu6sBoE2DTDbXan1TuJPRM7UrsmRwtdhUpD35SUHpnLykR1qrLRWAGBxQbP",
  "key8": "5RWZ697mdRJKxfwr2Y3igiXjc2cvQHhrLKGayCbx66r3xUSvyXxJBN3qGF3oDXGF5JptVrPGT3Vpd1imUJPgrzdW",
  "key9": "4RNfKm6yLLQsR3QHBP6qoTUsqcZQaNq6DmehbMvgV47i6T5jfYreR87Shx1LRLXuPrfgH2qcPmZEbazsftksSsW2",
  "key10": "4SubaNVWjhM4YEeG7VGLZBGxaFGZyG5KGBpE4rypDPsPXonwPPPQ6rDYqdd5UKHwdHEew1VvNhSLDzQe1sLJLwnL",
  "key11": "3FrF32cbCmWWg871JxuqjBPFSBmiTvFzfbDnPnzqyv48Wh5f3MigMWYeG3pUqBNbMZ9xqowfTwt8tfQh5N56TvcW",
  "key12": "3zdM1ms3EPwAyLue8sYq5Eb2CtvG4FzksWPGLTWgrXJoM7WLKC4NJPo2qoQv6TQtFpXv2hnDstufBTJLTmBLzUJD",
  "key13": "51pgzezfRseZP1CXAMNzLLwK65oqVjbZTA3qmWsDcVfMkYRTvfWfnogWGZpMns5pwYchrdr5efBAXYM2hLj4ujTm",
  "key14": "4T5tJcGVpTsVbSoWDx3xj4WMjxXSMiLVE8HGsm4TYrwr58foCYPhxsYunMR5zZZD8QbnVsrUTptQ1boTLPghYCvr",
  "key15": "UTEkcA3XSVxq1W1kLfk9yPWPgBmrgYbKhZ8vvihM5ChGNH1p1i7RpE5Q8HWAQPAAQfojJsJXAwA5prR8m4RFdqR",
  "key16": "4M3NHcHUJBkCeXgVhbaXa4peUrjiAVMFnWSWs3t4ngdtYi2STFRbDtBB9iCobE4tz8XYQ9sFycdEAt4j7n6Lrdh",
  "key17": "5w4EJTk3wwyPeDY4npT43D68oivQL6yLU4bha6uvDCuZxbWmsCEX6mYgkEpgd8qGUFeo96VNkArhgfqJbtLoNQDF",
  "key18": "4NCjYzq3RD6adEw2JBgiJYynXga5sPji9qKpmZuFEkyGhMUXTwAsR4uR7zR3bUJau6cVemHceL26TYC8f4k1dMq4",
  "key19": "3Rstwyu55svLywnAs22R9WLbg8qCKHedfkLU5BU7ALEwyfkjAoyRrEYn5D7g5SFCKB7KTgQMR6b33nRd9kUDxjx7",
  "key20": "3FThSqHMSACVU6NaXwW9zS5hogfomew1TmUsmY4Y613WGjk1uY881WrvyqAFJ9h1PoQwWqzFbuCnk84FUsLGTLHf",
  "key21": "4GGsWRSFnPWbEyLtLQpyo2gqzsUznjSafmezU1dB3ib1sxwRoFQkD9hwjkBqNNvHM6pU4vaU79JgtFtbgEaXHhvF",
  "key22": "U493dt34nzCgL5iYE4Ppo2zuFjh5boCnFXwUTaKXfiffMCwbsnXKHiAfEZifhkypLSZWBTR4ezp1T6oW9XJxtcM",
  "key23": "4XLZTUjdE3AA9kxrEKSNTgC2L9LKa59B18rKCZreitCoKz1NF1PEgKrYiGKjcrXJrJHQfgB5PjeHvmWKBnB1THr4",
  "key24": "64UFmm4GKhrCFi34LyZis9iNK2E1RPcouQVcu7pikAWHsAVc4ZNVyg6mcNfWWk9zPhyJyZ7cREZhh15XDLMvLk34",
  "key25": "3xYPTGhF7N2V7npBjTMyXyz54Tkw641D1c26oTiuqLMvH4qkMooGhh2vLdtoVxXC2VCNpue2ZC8D4M8QR8fqsYAy",
  "key26": "4PtNG2gfBtHKv2Y4ukMMVhwGkQhUNruvtdue5dRsqsnCatYpUKJcRLSRjA7y5X6tHg4xFkX3dDKDsFyrtxXWGyxg",
  "key27": "5P3nG4RjZeakvK8FJ2EpW9zFj5u3QQQvrZBKkR5MFhbKSrmPoeyvpM9a7QSN9Pg4apV29d1Tgc3nFL8NitQayDZZ",
  "key28": "wZKyQeeJyhWaPyjBomphukJuxLtxm7kbzKgpzSoWPqEFvSDLHypAA3ZPgSiy6QNugDFzqQKCvXqKyHXMBsTTFym",
  "key29": "4exyQdMQNxaJwrgzDnhHRYuqqKvzMsqYas2HEWNEpiiNU9B2SefYEviGZ44wVSqdAhmKCCV2EvrFoQS499e1yVsg",
  "key30": "3T7DkntmVisuRrCCe9dTtPKgz2SavPvniaeRN5XykbzJqPqFoKFeyMr5epYXfQGTDQniDEruEy6TVPWMDZ42F2tC",
  "key31": "3EHDXd131GwXQ6FSs6Rmywqautp4DfyipP68tt7jxmia6jLRz27Uw5BZ8ihub3fpGKonAFt3JwfoyjgPwrso5Duw",
  "key32": "47CwUhP5Kv58P61nJCKcwjUpuUrJEBzjc7qjEo2ZgLUfxyZLdTC95Rfq235gf6WxBCCqJU3AoNZ7Nt43TQkFifwr",
  "key33": "41LnKAnTZX4XFq6h1wujQhVpPEtWhFihjuiyokWe5nienDVwfMZ8zQ8qVQi5YE6NpUorqkds53DsLwas5vkZgRwA"
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
