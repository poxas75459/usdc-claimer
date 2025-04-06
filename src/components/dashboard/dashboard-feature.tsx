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
    "CNwL6zrhy676AxjNapyTBwTcKiW6f3egTAt5W5Yzar9U6xta4REEXmuCV6ZmzHy5e51KqNkV91XAu9RZCwyXdvF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rfm4H2c9DGwL2ftX1gSTLBvfjVq3x7P8k7Ac7f6iosS7fX16Wnr4Paq4reLABduM7edNrWp3GLoUuPdrRuvX6g6",
  "key1": "3pUxBm6F6Kryw3tYfuVsUiQsnGkcRmaHtNZMUnAPUKoZ1jkramvfJ9tZ6S5V5gSbgRqSM2BSEkDEL25htn5tSEuU",
  "key2": "2PXh8YkxCdsydjKCWpKq4szfeus8NWAVZ7NPzQ4eZZkJuMgH23SA56Tk8j97qtXSyPxzg5cmyeL2FhGXzVM7SpFg",
  "key3": "4MyKfTsmF9qWYPvZiyZm98wvVMZJWk9PZdSSvWTT1bfiTs3HjPpLVdn7L2rUoAJ2kRGppRfCe9QvRvkNFxHtwpm8",
  "key4": "3MHQWuVyd3q6Z8Eu9ah9hssyeEcHiGcCGxS3dexADmQcnbDo6Tgp4tyzR4xHRQPqLTYzTVDPZrD4SEatb9g6w6w6",
  "key5": "2Wr5uK5xynheLF45iJikhyv69PGStTgNsHzfpeBx1WvS6EmivRyp1LHQgvgva5pz8UZmM7KgnRkk4ndJ5q9oWK1B",
  "key6": "2eya4Lat1qdzo2kDwmUaawejSNDAAYzFoAiF1y6zgvkC77aAKpUqLpoQ8XCQnvPt341xVwp9FrRDgfnkTN3KxhX4",
  "key7": "3QSn3WvkXXL2N7RcFZVunvuoR9grzyCF19CpdjrcZNSh9iP2bmGJCyZS5VxAJaLNiLzJrViGSxQXR9jQQnZQmDWV",
  "key8": "23jeVZ3DBHAwYTCuAVL5XXXW2k9atRwbuCfP32DfTkPDXv8KLqDziNGS4cLS3sH1xXhDG4Q7RwpJDdU3S8prmVKh",
  "key9": "3ozXWA7m76QVPWcF39nfq1LPgrhZxUgW7PKc4xLg8NZcwd3GZZKcpdmVcxZ5kMLTauWFiZHVKViRgxRHBRWQahLc",
  "key10": "j7qKhHKnF3AaSymsABdKgtuTWiWmsr2uvhWj5DivuUoEdDErw8hbvVUxhkc8FetMeEE32CwXCD72B2fAQEVNR2x",
  "key11": "4umMLXJq7USZGJ7tprkw9D1v8ERL4GUbK4h7eeumVRDinsNdCahwQo2zTsss9y9siaU3xvqCV8kiMi7R3XkNGxct",
  "key12": "3YFVYfnozCnSxWY9Tc63RZ37hZUDz2h8gtgsEXqWjCiUMAbedU2Q2LQcFpw2VjCfw69f4pC9TFUzK2JZ21Wmxi8d",
  "key13": "5Ccb4YKZD8hCt2poEde4d73kFEyhAMAhaZS9MGsUYbxPUhqnZMVU7eu7R1ZVqyBR6jgWytVkGabU8UUNvMvZLJe5",
  "key14": "66RQD4d2pa9VSV7wyWH2qNNYdeX5FW9UKCtcv4pYDgksZc9nh2QTvrxYPhf3erebWN1XcNV81E9wNsfZGE3EQDLG",
  "key15": "5LwjjSbG1DPaUbVNkNzL6xzzDu8qDp7vk4hXT2ugWFQbxdttz6jgh6cyrNAFvQr7yQBg6TuvzLMrSPjEKF79jDkg",
  "key16": "4uRXjLbgpR9qb5tGGfLYgQDjAgLhrTJRAh187Xdnn8d2ug9C9Dh656poCppPf9aQpmVSUdeUUWz2ubMqCMMEcnkm",
  "key17": "DTAgcU9nhskmRH13AcHwecs9hLcDFqnmtkpHNyYiP4ehMaE1rJJUbPXEVzCGy5utD5onVZP1GqLeN2X39RbsVXw",
  "key18": "3zTpMnL3KL1ZGPgEcayHZqnNSsp8LbwLKpz2fR1TzU4dE8zJ9eAHd2anrKTfUgoAEQffNustRUhvedsrTJJAyuNc",
  "key19": "5LM89nuyyjgATkVikJtMXCZ8AzyWK7DzRiayXg3VYa2ayXnQ9iA1APuRngq2bDG4oC3QdqYrU82vXdgCoLaF17t8",
  "key20": "5sheNnnCPwX3546zv4m7qe3Z6ST8Z8DD7VYnrMFwwfuWLy1zWCBBPB8vHHeQLwsU4kkZ7J4UL5THyrUUTxeSuzty",
  "key21": "2mAQ75FE5iTc1W2hhwcdKabQwC6Z8otJznnBP3ae8KdS2EDbzzjsDuqVj7ZxAkMoDJ9bauLFi8JD6vMSDN8XTmSe",
  "key22": "7V6AZGrkmfAqww3yshJRC5szLcQ1SxP5d73G9ygPt2b9pjHzbXx9U9vjNsxbtCngtZWvt7ghz89bCeMqhdLjG5x",
  "key23": "4QYS4AP9LKw3dF4XZKzuPnWjrXdXUKv1cKaMLm2m3GcUxXYy1fM64ZyBq3cnYmGvdnd5WxBLJW5gx5aLpnRVP3Ym",
  "key24": "E39g2rQXDSezqiWAj3zAU8D34Db2BobZSopZqLgPxohrfFXuanbcdgfftNpmh3ZG8xPf6BbcS6bhTqE2KnjVGhx",
  "key25": "22AG3pR9ZnN3zDsr81LCCjt3vFGbGRkUUeZcqgiq3dKF9LeCTZSV7QH5d9c2JDchVhPakdb9cFADuHWkQncvS6Do",
  "key26": "3ZKCXP8hSbL9pzuaZdzASa16xdRFrxCgGUm5ZMEBv343GyY621sksHkuGeK8vAjSKF9hsCqr2EjL96FXyxYtuuL9",
  "key27": "4bLKjtxbYjm3G5AE5TVRX1yi3fqe8RtfEqT12N9spP1nPEovDVVbey6sukfbmdNnVNSrZA4QMQV7H92WanuW6f3b",
  "key28": "5rH3HX7gGgtqRmjSxNQ96mzGkaBszjNpTiBmnU4aftZCWhXkYd6BnxuojbHLWpVkcgDACThv9R173XVDUsRcbu7e",
  "key29": "454J95S9SATQypftA65tp8g5AQJTtLgoMBSrQzWFGSCCNfoh7g6nMquWp9pqUckP9Q3srTJBsMCkbiK9sFG5inHg",
  "key30": "3jfVuAgoWL1on2ANpeLEkxwGff6uNcKvHES3339hLWyec6TALm66Lc11YS3BjFBoi6ZVdkx9MyErXHu5xscMXDE9",
  "key31": "5Z4KEWHfLKQNr64Lp9DxXC3kgBtYgnGLmt4ejNuviAUixRoDDGKxDGLZQo7U3nWpeRmj5EiBnzHjGuSfnk6xiL1u",
  "key32": "277FEo3KNmdEGG4RZHWL6DKR1hUmDyrXq65mQkEk4HkkMQ6WArDBKnCm68G88PSp6vMHCgQQTFXQon6XjwqJpE4y",
  "key33": "3hzimGAT1K5FwCsUnbddnro1M9cMnGigvJ2AzyNTx5DL3u4knVnEVKNZYxmVAZ2WGuLVoL33b8Tio6Di8tyJeQnJ",
  "key34": "2g7Cf1GPfMM2mC6J1QwvV3rEtv3ZH1dxzxP298gcavLa3QuSkBUcDG5Z9spdFyAjHFJ8hrB7kf339zyn3DkFL2U9",
  "key35": "3v6M8aoEfamxs7qweNvKUwMkuvHobxATm1qnv7dnpcxSzWUTNqPoBcwbvNjucg89jc6QbkqBda5XKaenh463sVGb"
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
