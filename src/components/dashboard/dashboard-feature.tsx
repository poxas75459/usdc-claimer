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
    "2YUEkYCZB1aV2if7w7bJSAU6vuT75sSyvLvKhnEusM76AvKT8kmAHKDqmwo81QfsvqUozf5AoqbwFZz2FmZ94Sbi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yGgA3S7jmZqiRikaT5GamDK44V5NeRQbMgp8MNTuSdRHoC5dL7oBMNtVFY8hSGe7ytLFz82wFxYeeMfEhcLL8nb",
  "key1": "4dJg3FySXUtHCGnoyu91XoXxhF5ssYpGsabPmRoqCSg6W8W7qn6JhMBHbgauPb6wE5WCWGuQ3Ak7ZeCJokmjBecD",
  "key2": "25Wko7BcBeLhzCDZC891av3r4uBGzEPByURrBbP2qLoXxu9yxq4efDPKRP5B4TnywDnTqgbnGu8tKvudJLyJVwss",
  "key3": "2Uh9dwbPWjicWmDzGwCxgMA3qD85QunQsCr5GKHBFkBqMj8YMA8Ye2tuox16sbq672VCzunQ2fT4YTFrphSCVG9f",
  "key4": "2GVd6pbDnfsC1rVaSPzYnSw2mSKstDfXf1cz8f34N8ivMSV636znvRVcBN6RkktWomKMiaTtvyJuYZUF73nt5boj",
  "key5": "5AYbDVXYnrxgBPfjsfceq9F9vMQKztXhzaWjcQwcRENS2YGCnYFHpg97vHJiWFjHn7p47Wst1h2AM6YVxhc3MHwP",
  "key6": "28HSZ3nKy1h6uziUkUGveWrssYNqBi2pYzeciaKqGJJJCXr68R4h31X3QSKGzqaKFBoqWzHvHgEjtGLswk13EW8Y",
  "key7": "24MJzXszr1VCQMQ58VXmB7omkMf66pwn5rok6BAnixfr1u7tsyzDrnfGfEbgjcwLdAwhB4zz2W5WtiFi6Y78wZ6f",
  "key8": "5TFWuD5i6KEpUUScBMKoEEeaUFg7AmsWrjnmRdfzHfe82gXTujBbb1iQ4PNEov3RfS7A2WUS7vCrzuoG54BxN6YL",
  "key9": "55GVQDEzGq51ip3cTcVYBrtKhyDFhXc12v2S7BwH2ZcSE1JFCbmMP3Vjgu3SHccTryyDGwCjFHiKYdeRfG5QCdWU",
  "key10": "3f7eZsqo4ya2JBb7VMqUCKt5fHFrJ5BzcnrRr9hiVmTbdnUCU97prb26v5Gu7eZ7CpzNxNB9HPWiKfoxgPByyobj",
  "key11": "62mDez5PuaxHcQxqvUfGW1ZdvvRYmyjenzw1RzHPBfC6Hw4ccP9PwvkbeiD6vkKAmsbww8TMk6mUt67hpUsWf5YU",
  "key12": "rG9XSotUdz52Tp51HxXmcdiK1bF4rAxFSeBLQ4rSct2qaAkw8qHn85Q6bLV3cb32dxi4CFMinNgb9j1FiB6RsXX",
  "key13": "4x9wyv5JZzc13YvmULSTYY5i1znq3J1F9UYMbc3iVt2pKt3AJTyuxBzvNwodgh3hcKhrvgrYKJvW1AMegzMrGBiz",
  "key14": "5hxaWLCitipg2TA9f5ZAyxh5Up6PsYXBWm5FtEi2RVn8ggUYjoYG1aph5CM8HbGd5HthCiws3ECc5NdV3othpfuT",
  "key15": "2CxfK9jb4wyDbaGdosF2HsMg9wgD25sPEeQvgBmh5iRrRTP7i9jFTwuAsmbwFiC4s7jHMWsGuGqSAZbD3FC8X1KT",
  "key16": "5CSVqPfS1CaWDQx9qbiYchh8SHef6WBWw3EmT3xeTrSvb9NDoVVYmD22C6VpTbZVhbkX4iw3hv2H3YUERJpWdTvn",
  "key17": "jnj3JEuLLYEH2yg3DUccxT3PNKkwqNDG6bXcXCoiyMpeub3zyNmBqN1xFoW1g8YLUsAgKm9SkRaMvazUDzrDGCw",
  "key18": "2NUiNQ3ikys9GhNYKGMBjCSh75QvH8a8gRKStwZMpF6BwRF5BasgHjwhzsNWjsFRrBMWfE1pAMgQDmYqAAShxzF8",
  "key19": "4hmNT4t23TizVoVkhSRiBcgS4GakvxyRdDYpAm5J5S242ZYTbnrNnjybRMpGoXZySfx2JC5AbfT4aJPBLPNNaxns",
  "key20": "4T3i1na8erF3zbySjE7ssLUBFo7P4ZdUbwXrpuSGKXggUYJjbAdUTjT57cgFFisTceBxuEdrCTmTmNRSHgCiiNHf",
  "key21": "553YKmjSqyKcr7YZL9xk3HnwDYnGRqE6DuKvkYodb7JBEeEo7kojApULAjfjYgiqgLgXL5y4JCeXP2rgmBn5Hf8b",
  "key22": "prp1STaSVrSBLyuKhJr5Ctv5Evg5JvdRPjYacb8CALVNBa8e5g8MuUSqTGCnFkWHe4FkAhW6qWhxYVLdTeE9Wzj",
  "key23": "3eBU3DCroCu7eRWm4gYrUp6yPFJBp3RtsQa2e6mPKT22wuegcJ5xpWWS6RxHyJVXh8Eyrj3u65VYWrbBSREwmjLu",
  "key24": "9j5g7WtemA6VpgRSeAUFdugogMabeF4GWPw7oWiT1WEGteqUKPPvgt6kpmvSUVKoU5mGZBiyRyS1dKd7TNUFBUv",
  "key25": "5wzBdTPrTBkfXni9uSkPoT9SiS3FnFfLBkjm7aWfMMAFih8tqp2DaU2n5C6ynnzTuNQugvzohRR2Dc3KGVvDbpFV",
  "key26": "5GpWbQZ4hqMVmWjnkwLtpn4nH5AFUivSJJ63De2uaFFnc6HCLN3EziCzd18PtUEUJib88NEqey8QcjLcYopQcSiH",
  "key27": "4pE5dvvLrMw22EoPVd4kGzzAzWg6hNPFDXrsAGkRJFrJdhcWLybithuhyjACTWZBKgzdh99LwtnvmBEV6BWArR7M",
  "key28": "tMsLAKPzwGSmpZWH91SsJWjSu9KFrapcSRFjc2KdmsxCwNVktD8efcVEaHerFc4NegrxGzv33y8kf4cw8XQ2ZLE",
  "key29": "4L7KKxSc2NXehbUA2fP2BdArbihsHWP5ZxjvixWrNyjjSrt4GcnyxXiJbBXjc6Y2PdiSr8De4XUrdqy9irRzu6mg",
  "key30": "3T9bxQpD1BjZNGLuSxZPVgJhnarvTh2AAe5Tn94N4ufXP1a5WEzJGhMWNRnnRkztFc1Qrz7xabu3E5tiRLgjGjf6",
  "key31": "4w1mZHiHQiZZYk4MLpVP49FaySKcy2m4RFxS6q899SfboDKReLTxdjNwU6YapWWBt2LVLis8yVTussRG5thdqDhe",
  "key32": "5XDC5nyjYzAJAFxsaVXjMMbwBxFnjdHUvhS3P9WyMrrka5pVyhY73GfG1qwqxj4QFiMgV4fzymJBwxwB2Sgds46X",
  "key33": "icVZtFZTzs3GxzfWAx2wmnMyCFYHTZefSJVMS7DPeidChQGxa9rHhwG7dJK5qtVTp7qdAykoAWAHmcdqdNEfCK3"
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
