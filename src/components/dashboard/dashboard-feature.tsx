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
    "3PE2UFkHtzPuev3MDixgkwCRx8FKeUNzc6R6HAw13cKwNUh7d3FHHGHrwf2WUm7DtBzyruEiJZWhSexFcuzX6WeK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5czTUHeWkf5iDAQjw6v7EAyfpB1C4uHMmY6rT6cRXeNLMcpfsThkvzynLBSjtz2AeZS5JhVA44S95DJ9Ub8EY4Y7",
  "key1": "2nknTMTXgwctisX7DWMz4GLLSMyeJ3FmJmYoYb9tkHhc1r2Zzewt6AyecNs7Wsok6LmXzHCDXHysSyXkwweakxmX",
  "key2": "2B423wH5ZnD3jDkMZhsLsJbsnNJakSdktp3MUCuV9SGqSWGNm4ZbJ83emPGDMUj8atG4AgH5GboGnSwoFJnZoBMf",
  "key3": "4GwPQko3h1DVbnXbqVo4hkZADp5zZWBhp9qVYW8XAdZ7fbs8eMddRy68XfKkrFNBgfv12DSZuQVgEcfDAHz3rBEy",
  "key4": "4fKB2QvELWz1F47axBgeDRXBQ8ynoGsrUDtcsqsF5KaPu2nBDYmhXLrMnE6o96Zq3qj2jeyjtr7WAWN5SsZGak7X",
  "key5": "4LtqHs8NjygbiYerjhR81gFBVJv9xJBnJpx3VuwGTwZDvUzSYEaYoaMovKCxnf6gCCiYc6Lp2eYWJdiRU44BTrBd",
  "key6": "39S1dJ74Y9HDgHv87SFsDHfxxePiEwHmP4T27QmTSnN8jXotnvPsk64rUNbQR7jKdopbU9VEc4vgSTqkdY8Ssxbd",
  "key7": "5zVh3iGRDgVc4WgrMzPnN2bB7nM5ZLwQJJbGWSzupueofQ9zRzDQbBeMZkZiGVZfDG6pQuocfqT2Fa2KLDdLH8JE",
  "key8": "4Pc7XFYTpgkx5Uir7h8t94FBzHzUjQgvFDQyetL8ZUQD4jsYYzFq8X4Qkvifni9dHQkiekrcCtNjrwMx8UrgRj4A",
  "key9": "4xEyPpENQwEWHjTnFnK6jKMXd7215i9C3puaHHD1rAdi6aecMCuqEjepNh7TUv3gAG8R1x6d9W8cWhinaWd7cCqu",
  "key10": "4yZY3YmATjGik762cCTT4uDaxwHKWa72XCv91u43wXdf6xHpMABpf8F618fyZMYUG5NuwXJjbU6JZAxR3Y2fY8Ay",
  "key11": "4LXbDCEpDEFzLXNTUFKVUULk2qkFcDb6UvH7VGkmzA6YAQnp5BFnqdh5wDd1V8NotEPfPC96pTD4VYWCBcoocuTZ",
  "key12": "2AKJJHLGiSBAaaFPPEjCRpR4YoiM6LuzhTYnWryRjwBdEFxK58oWahNTpMtCdt1hNHyA29DRA8skR7NbHvqfSGdM",
  "key13": "36oRA4GKyjBnMnjaA1PBDhBEM34hdMu7L2bdszRVtugNi8vqFpUZk6NjibWmUFAQFAf1ZtbqLH7wtXb1ZStxGAZg",
  "key14": "5vvifDHqZD6SnN297aD1WD9yDSUQbbYf4FA54uzvHkbUkYtMuRNPPQYtu6jBRPSoifm62jT8JKdDAuQ5HVrUZ1pi",
  "key15": "2VQDYX3ZweHZNeYCYGKtBtS7sNvqvJDzx2rjpRAkeCMBSZrkJ3wGZ3k59AUmMCUigUqfoptKhY77UWC5i1hwTE6T",
  "key16": "5dMJnULhnFmTWN6i9dBW6o4kM7yGwvWiTHqo5a5Z5NnQmjj1Dpip84TUxUEmxWkiVyqM1ozPvGDAEWqQJi4CbTWh",
  "key17": "3GcMWqfJbEZ513PJrwWr7vt7aj9cbqro566TrQZQmQnY1NdWh3q6tzFeKD1h94qP8DRALnediGkSF9TCBHKmMmJK",
  "key18": "4aBwSZajyp35Vnoo6cNB8Ve6WZJM9t7qrubj7B5tE7ceAW3VTbykECsY4NqqWFXvYuesK6iwGZNKm5wtqUeBTqQK",
  "key19": "5ncppBRQS6w5STnohnFYRBTsAKpEs8stDL5xJwUH1QjguRzow1NZhKowBi52ftWwvYeviS8ba1SXpizBoSdcExfL",
  "key20": "fzTJsSxAUaTefqz4rFxS2eWPof7XiUXpVWrZif3Pr4d9UzmmkaCagHLbqWwXGoq3AkTbXZe5VeDuGA89TJeBALC",
  "key21": "3UHkxn7eUssAtbHiBJHMQiu51btvLefEvs2DacUN5cYQSxyFbhY87H261Vw9Ap3k1r1o12sUa7ePpGV3WLa89DWJ",
  "key22": "3eMxAtRj7j2YXQSRbwSTQfxpyZQ49a8o2Umy1gFBx5Rsg4y3jfYxyBhHwgDkpFipGFfb8AeWVWxS2mu4Kee4PTfV",
  "key23": "2NY75F8knY8JLjLKpaZ6Qvo9Hx7c4PEUw8vCFanpKxnbS5bVaYEMciaMVScpc4XAzsaHnXtFCiVtsnof2RZnyyQX",
  "key24": "5FdPkRBvUDxXdqmhottPNJ7j947ZJFAkXLnBt5JhEQ7rat8e1hbT1WuQuMvTuHEkgZD6gVXN36w4Wv3aY2RzLosX",
  "key25": "3vM2KPNEUyAWZ7tcZwEc1Sc14Wmr6W9V6LTFyngcvadsHQGYWiBZH6tQfnKactBMUchSBRX9zPd3ZV776rK49mxg",
  "key26": "5Dgz1AXb9wpku4cAveMBsz4DiYvnQKyhAzg9RzS2iG1gKiRfAogvVEPB9Vq7iRQw1AbzTviuAfcoghZ8SVicq1iH",
  "key27": "t9kMDAHSj54XmAoUjEdwFP6E46CWJsgJRf5xVCBTyNiPF5xpSvXEJMFkEhjnTepFNKUdcGT93KXTU4QkbPRmq7H",
  "key28": "2YX3uaDThdN1jCMHhsXiAzVK1w5dMYW4hui3iSCTEDyP5XkHCYqDNitCz9D1RgPbb5MtDRu27twhwdoBPu1iVnec",
  "key29": "LXi9tXeYA1B9yDouePBJ5poHy2aK7Jexu1XLTrb6BhBEKrBySFz9U82Z3Eq4YAgYJyBrmcRxokbNB9JqtSJZ1sd",
  "key30": "ae1HqMjBKGHTGLqDpxckmHgQjAtSnDGRRwEnLVr8qUG2YPVB8dmj4ZduTGXgLMYEGUgT9fenhiP8LrmGrCf6prw",
  "key31": "3jFoZWaJFpTvnq9kwrHLFzeMmKe958vggP9YN658x68tFctoh16m29L1Rovck9Ezmgx4p4teK7EzamuhxWeTSRPS",
  "key32": "2CrUJZtABf4f6A9ko6zQd15hrVqzLdsFT9tWyUDfZymBt26qruLNV1LxXBKCgRUzz2hrMm6eK7abMZajHjx4dX4Z",
  "key33": "4NvCCtfWVQnmnYqYcWZ6JgeNdmDkie6cCGYnhY8F3Vna39hkP8V35yx5PHGuqRWNDKkFc75eaMjLq4Cht3njqhZj",
  "key34": "5MYUS51jKzme94JyKba8JrWyHSCdt5RdiQuhMSv63szSauyPz7RCeQ4G4SRuknH62CHGNVTufCzYUJbToLPs513v"
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
