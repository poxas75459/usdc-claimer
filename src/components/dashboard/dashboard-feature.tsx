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
    "5NkPMws8NjWkEymJdS6H6tD57Aj2Z2PiQdhBwQSi3ik4NixoRDHZEdBqCdQReXMECgJJxBLZRV4B1RYqektBbJrc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dwENvMJ2UMtCW2GNtpYRtnJCEU1uWLcrMHCgKygCaECWNJwqDQ3gUPp1BRjUNY7ucSc1N8mgpuU23fsbJqMKfGV",
  "key1": "3akPk5ZnQgmSwv1UaqqsorvSs8mfLnz63PiQgLoDd5gdi41UgKP7TzghxXtCL2pKEQzUi9EcsLVKGZP8jJFA3dqL",
  "key2": "5raft9Ft1TYMFsHciv8Xv2zREwQE6XGAma6MYhnHjihUVzrGMgojWTNZc8mbGts7suyLeyiq1QDhDCYDutafJcCZ",
  "key3": "4nnaaGpVizJexgGmhyW1df61jLcJ68LfZ9BQdo2MmVYCS9y6fVpcLDUy5T6KDyofq2jufH3MGKQhxyVcwEaS6iS9",
  "key4": "5UizyTcbrFKYPQx3EUZfmeY5k5vCKgTUU8bmiQrr62jFQw9o2ZDo2FPBw1U7qHszqzLg3CV9DSqPPBbQYADtgc3S",
  "key5": "2x8pnZuAWLLw2EjwYVXumpSSiqFcnPvQM7xBKgYh1eaSX1YcpQfoF1dgMurtDqCrQ1KCskeBZSf5YmVxmezLtQsx",
  "key6": "5vHbGyUYWQzjMU6MmQU65raa4w267Bb2R1UApmSMBwSGwDB4o1cTkbtKDEwy3Keh3xX6EDXr8nmkqaXiGorRv8w9",
  "key7": "H7hoo5ehkkT1YBfjTc8cYvMBsBXP4Nrqg838AZtymhKvHTx5uaNkLM52gaswVcuvoqD6J5krUNaiQXXjeVyoGgC",
  "key8": "YmtqZxmMbkLKfjrmhYRXYS31zYP6fRrb7KQDhdS18uYrtDHhuv3DtKEwbxyk1RHjaGA5xxTu11sMDtV7seUA2z6",
  "key9": "3yfsdpkYKkUAC4B1yPkLcrb1KTnFqLq5GabTAZ64zQtHNTDaJiweUty5cUzbqRmzYwN57e49BfoNkRKHiZB9bqZb",
  "key10": "3TkMRPcqvSrQ5DQCzLi7GmwSrhnVtbCx2vvT7UoZxJtm8cuC5Lt2hLhTg771J1HMyuEz9nzkpujiWTNhEkLuANwf",
  "key11": "47a8sgRD7YvJBbqMvwm9PQMeXqNcPcB7DveasBRPRPrb3T9RtDzuKQtTfo7oHS7hfyxiEx3SX5AePZ8JmTYiQHNM",
  "key12": "5pRMDNCgjaiipnwuU293HwEmpLuKm1GWUQ1aMbhX6X7GS59MzkLbTtkUKLng2ui1eGbg2n6DvvJTky9rBb2MJRD4",
  "key13": "4KD66rRrsCJErmpr6g7FLDmgBMSJ8QKZHbogroBUzo1R53qriBX4fW2wzGY55cHS4WUoFjEnJNS9gVtb1WR9aTDG",
  "key14": "3BqJdi3p9ZYFejnxKQ6n8pFq31LkJRJeyB7bQRFBSjAtzPjS9nmuWc4wWP1vmzWYc8tffpNXBaKF84XpxCL26WSS",
  "key15": "24gzoibYm5LgkNGYtzuRMGXNRtMDuMQRSziX9BnCD2FESyc8ThRWnc3yzbvJXrgKDtDyiu6MuVxj8hidE5LEEfZx",
  "key16": "4FURwM46eUULFuwwQnoeA15igkAsSrPopzSzFhfHMUe8R8jiFrgG9ZbfYETKecZqHJAANTjZX9XWBi4H6tUBcm1c",
  "key17": "33CSwqRxJrnt1Z6hqiqsww4HcZ8s9hBzf3Du8ieQB3P6WMiM1UTubFzcLbBArmDoYLkrg7RpceuxTAto7hkmA7xW",
  "key18": "5u5uZpTSk57ZXeiCdEYF62n2dQzgCmT3qreNCm72cvaWy1oahCfQWzKibpeoqNMyyyYabWUiSSpPmQivdfTUjHG9",
  "key19": "4bihgMWDsnRcrAuyR6C5tsaknezSSMov3puqYg2QawZFzp73mWnqoNWNHogFp5Tf2SV3d9GvfJfsjgvrLMzGRQUz",
  "key20": "5xC6BHSwaAYoU2pPkhfjw5Qf32QDFwPrvaHYdBnpvqs1puF7m6k9FDvig5JTL5HUaPMxrbFRwwXGCCBC8YEoRy2S",
  "key21": "gtzgsehMrv7oc88sHFKbc6EY6fBh6eNpTE3zNACcSze322kYk8pYUYmT5jNBUdDNU7H3Y54pxnbpEZbw7fhm1sA",
  "key22": "2fU5QD6vCrcRh74xz8VoeKJ73ohptjMqXDFGthCeowchDRwDvtG3P3GJoHoQ99gdE4Uvr2tFbQg8cWbWBwBvVg5i",
  "key23": "48LLABwqUxM8uAgpVoF86EAYHt9KZyXUtQK3KMmkuXZEFxTchyJFYQKmFC8CWdZQgGVJG2PhEVNVBKV6iW3w8YSU",
  "key24": "4GzLGqzMUTWbdjs9VkVM64Jm5mBh1m9PHjrgdnCmFUYG41vcijnZ5C5urZLQTJ75cHfA7moSdhLx9yhhL1KWeyZD",
  "key25": "4g67eu2G5U22j9WriYHMWKHP3vZY3VioFDqACijT55NzmjkKAQi1EsPvWj7zAjrqNPVhHiiPnYEQvBE5TEYrBDvk",
  "key26": "5FytUHcLFxEU66zkqMbibnfxHzi97TVKxdH5hwch7nimNz1inoXJV8xTyeqYUJH8Emj1iotLo6VX31yWUhiqvDnc",
  "key27": "4qsqy4YCNY1ozgx3VgBmiv9kXKtSd9bR1uwhCJEDtnW91Umx9MGAVU2GBRXLv7EpxNS2VMQAjPhUka45sfbpRELy",
  "key28": "2FRLhme5wkuZtKUFWx6KesTMGw7oykJHbVJTjXPRLzg1puNe7zakTj2QzEhxVP1dAxggqXZP3rANKxqoSkn5Xyff",
  "key29": "J7nwWrVHzV8drmVX3hn4zdoqZ1QMEXcGKatE1SFNUvCqKrRZQLvmEj9DgdYKim5Zc3csM6znFFQTz1tA2XrNhTK",
  "key30": "2FfctTp6fXjVqS6PDNkX185phVGy6QNqVMhA3EagTsFc6Fx3QJXcVtozh4LakF9kr8r2ZkGqzwiw2VZ6o9VVbavW",
  "key31": "6u9SjccGNv69WPzWp53x2GU3BbACrYFChBQmQjenzcx4M3phSUnV2TGUry4KxS6WLTNasRqHvzFzZT76J6qH6ec",
  "key32": "4crCgB3z5pGRWTa9y2Y4qmWqEHqaG5sdmBy6nMuTBaSxwQFZ2HLRJugC5V1X89N4PTzse4DqKRxghV2Z2Kn4Wuug",
  "key33": "35AeabK8Lks6J6eyVZdX4XekjBWKjRCPcAUUVnpksgjNh8EVwtpjyoyQs769qSFsHoXSad3YzNWCar1Sp8jdDbqN",
  "key34": "5H8JsgowhHywWJsnkw226zYCgHvADp2WCzjDRFwbpkohGxD5o9TGNvGdoemhfCuhCRaaoTHC2ZpVxLeCnoMWibBY"
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
