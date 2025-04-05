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
    "3YDFnW3oXZg1zcrYsoav2HvkdNc8KVzBRH2DjcFoFaDyfWfJQJQhBpS1kvuviyJStvku2nj7wwVHhfpP3Bx3VnGt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EGhJqjVUgiga1C3dVjx85MmNvUaDRgf4A8YZAY7iejf9wttF6FqoTmzaAvubiWuZ82wrGp6JSEmfJ2ggdinp4SK",
  "key1": "51TBrKm5GuaVL6jVGYAYY3G9gyampXwKWbcduQdQVY9AR63yw4UdVu8CSEUp2wkVp1rxZqn8xH3J1cNEr1Qy6tnQ",
  "key2": "2QfbE8SQh4JL3L2eGkSWVq7uxR2PimfH5SQnQrZXq1vZpjYzsgEWuE6yv5CtLErFCqATr1TTMvHvzuNpyM22UXr8",
  "key3": "543wMGnTCkUqTZBUTi5MMiHKhacBfGSEiCTccjYv5fZfXefSTKpStmaAJkxnuq8BrSQRyyJ2aszbjuJEcAtQDp9e",
  "key4": "52ATKei16ToXWCmLs1cdvpReysrMBebNeWHmdiAwTtBgMsrd5BELacRt5btZrLvE3FCcVZ8Gi67Q2k4aQHXC8WPL",
  "key5": "1c1VUrYbJu444TwuVZA2fuDVwufVo9n3i6GpHJpgyfYw69WVh2DdTQf7bzK85Bzh6KcDpDNLoXrAVd2iMfoLS49",
  "key6": "5nGH8SwGGyWna6HF4jPowgee9iLogTYBePCzx5KhVyJYQs6aceLvR9aC4P8jJunv2JJYa7jPGhEoFx9TfJ9z6VEq",
  "key7": "61Rt9a93HXQPwdTCWu2sdu1nGA5uEBTCVkBFuwBzcu6R6h29CVuEhaKQN1grG98AJfBhHc9EDsDP5CRSTd2fn31b",
  "key8": "5YDEnXZN5M81urBys49nGxG1L1aT6tvssZEy4AA5pZpy3N4PzsHsBfDXAaJoySLgNreARisCixsi5JuY1RiaWVL9",
  "key9": "5Ps8WngG57uUP7WdyxTKkXwEA1A8yE6GVyivsKJxJcNuvnMsmG7rqRcMYL4Fi6KnzAcxBSHP7gy3UtMqv1SZJNQB",
  "key10": "5KgodAFTtU9oyeFyoF81vMXT82H6KPVGKMrsWZm5JwdoH1r9LpfNERQjA5aMnUbQwuJpM3LfyeyEoTPnD9M23yY",
  "key11": "sAMcxY8F8EgvzUriK2A6CVSSBmYcrwDayZra9dia5pAFrnBW59UdVkgBVBqGnqFqgZ7oEuJi641Qi5gEfY3wW4r",
  "key12": "4gTZJmcAGoFBq2vFmhaiiPu5swh2U6oxVjUY4MnBQTN1qKfjmdqg65uuMMxxcuQ7zK9WdZnTaKu7arZH39QxXfxa",
  "key13": "3fP9wJan9SvkcQvePpkTYD7NVJaMcWMVbYpFSwiq97rpBStR1u9rzoxSzJ32XMEGB5vutiewCf63pp8FUT2dW7G9",
  "key14": "2xsE63MhpbKai3pDKkFaHyUV8xxYd4YFtHjuZgrZdsSThFV1vb4CC7kNBeK4phL9jr1L3dfSt6nTnRTGg8UGmKUa",
  "key15": "4goYDHTkj5jgfLBvBVfphk1xLg9hktvMS3T8wGWwpeffmt93rrAQMyNoFKiMo7r5VFRRbvTbNtpBkWVJvFM7pfUF",
  "key16": "4FHNvUoQAbJ26PeK7x89hBppooNhPDgttokCDcEutgq9xor3XLbqGzc1rQrngEKfQM919eHM8unciGhoLHZRw17L",
  "key17": "5XLuPEmDX2vT5eDrUA3BJo7sKVSMyrX4UK4XRcQwx8cJdvMFwmpfLLWMbQAtGroJNJkLEtWyg87YXfMFXcDUS4VK",
  "key18": "5P8y2ZQBjmMp5TB9uRALrqYW8r2J7PUL3PSN1ms8DGm3bTD4z5LfCt3SswXrGvSNSzDoyyanzWFNhTPwbbF5dV5J",
  "key19": "XGDELkxGYuJZfQT9ALZEfPv129KQ8u9YKoUoCueVTwzrWyYK3gAMwYWfP2UHSHBY4WQj9EGwYbxXLDi3Nphpfrg",
  "key20": "4Jb8Eo7epLFTPMwCgv9twHrK5xwWiBWe9mTvj4bA7FFVTQ5yxKDByBm9DM1MzSdsVZMMgrg76RboPY1KeKjtmgt4",
  "key21": "5S1GP9wghAFz2gqppyFhXmmjSkpyC3fmjBvzAWxmgvFq9SeNW2u74zyTgNvfGnhjsTwnGjqkyXkidCQdEYdEbabH",
  "key22": "tPotD34r5evGNUJ6PZSt9L9ymSD9LUNzSaEcskPGRf2QjiQ7mtkKMaPqMWSBAbxMPLVFLV33ccW8QtJd9ABkWV4",
  "key23": "4v9SACV4NfKtEBPQEKCb8ejFHRPdqvMUYwETaXw5SKbGNvqoViKNGRbzM3i4qoXBMnG6PGfu2YmxwWuVAEr1xFiU",
  "key24": "2EryeXnYcX2rwUEHYpb3FzyL4ntQ6w2Z7drrjULCtDJXyBPwQimbkFunyZQC9A8BBGDGVb13dBGq9kEJQEbg52p1",
  "key25": "9JHzBuJrVygRYeWALijR9cRyG4SwZsSR7KRh5ddcr1Pm99NeAMzNXdAaAr4nmwHTUNgC6vGXE7PyHwRMVtnuii5",
  "key26": "52wX1aHrk24H7pWFGsC5SkGU8nZFkHUwJYwx8MjVuTwVWBJuAy8fVJvyTG2K7PG49NnpCsdDMrqBE8iae3Et4dJs",
  "key27": "ULRsgwLeHVLwJ8bxJKeJXZyNYjannfZ4sJiH4wyGrfX375QtigQcvUz8gdUrpGbwTcBcaYCy49Szvbgjis8L2zZ"
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
