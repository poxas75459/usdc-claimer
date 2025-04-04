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
    "4nNXPE3xBUu1gKRkqDZJQ7hM1S37ZcJmfNVn18QBtSjHWUoNst1jcEGWsECPTAmktZFKRy6FMz8uRnb4qNno73F8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A9HEoRkqyBWraxndRdHHP9HSsZjCGXPFnUHdRP8SKm37r7iiy3gLrfiEkMERxPkgs6j6EwmnfmdPs6UKMdpYHi7",
  "key1": "4A2jamRKxuT38BT3kWJd4UUoeXwvcb9BkaHVStTgrc7F2r3BmZZ98LtP5E6LasVqSeMN42QbEMSjxTcR53EMGs2N",
  "key2": "3sg6PUinyCpsSqMiVNEtQFnVoCFdigTSvVPtb8heva1tCVAiFfFC8B83iMx5ZDh2w5kesQWicS12jnJaoVBwkGQS",
  "key3": "3kLK7Y5Qvxv3Hz2cniyU39N123jLfd26T23WMuuq42uk3wrRE9VHGm4Juz6NYDv1u1q6dWnpEvGrz4aNckexPzXa",
  "key4": "23xvVJFgyFLc2Hj5Fnu7eNHuE5iiQTnbsfZjYquXp2SvDB7g6VP7FA2E75agy5ha38YNdsv4SULaEDUhEBq3n2Bs",
  "key5": "2ERUxykb5qdwkVsdUrPvJDHgmVXSFJQWMKqaZeyb4umh8wPTfcq7K5XUsWpbpZwmKLNuig3BDjp3v67pA31DE5v",
  "key6": "6A8GeoaSAfk1fPhtfhnUc5dVLgxVHaRs8wAgYrFecBA8RvMzJMDa1P67kMR8aCV5C8QrBxGJC3M54w8zQdCQuQw",
  "key7": "5m5joNhcjq6UPRbQojXT67mmGeQ1A6GP85mogkhhVaG8nKwCq6xVPxGMDECcQYY2CdiesFy9a8DUTxcBvz8NxS1y",
  "key8": "2RzTCr4i5evf2HaPNQnrfjbDhBDTcF42nhxC4WWUKAhDupseeSGwK2LRhbnjn1Bpm5SPSFySGwMhXj1x4FHYYxy5",
  "key9": "D3VVAfV7pqDfSPJoYvRNawYDBW3feEzEeNa7mu6Dj95TX2j84jQH39vdBDnS6Q1kAQByindLCrVWcTANzyHd9wS",
  "key10": "4YHisVP4kP7W32LE3QViPrMWVnFQhqnQGvfjmk5TJxEs7nMJoF12kFNxCcEVJKYkssavVPkQSryWqESe2TfksCBv",
  "key11": "4wiZotVhwmkYebYVuAo7sYcuA83iSCUNBPFJkZE88cVhtLc3VkfH4wvunb8tk1HkBHgPkSNAEA6TThS7TeciAUgz",
  "key12": "3Tr4K2JTDMTRjNizdmFfW2yfWWwgvUWREZfpcWM5Mv7HcFurD5oYtcGUZHJ8eNidAcJbPPg35jf95ksNPxPR3jze",
  "key13": "44XKFkh4hvZ5G4ruEeLrhdy9kSzHBNk1KeHXk6dQ629cRj2apGCDAKoqqEWy85rUyA3yhLh2Ze6QfDCNh65r3UkP",
  "key14": "22jxpQr6nvYmP4BopA2c97eT3J8gZkJHEu5mmXo9CdvLYZJg1r3LzPnrxLENXK6TZb7njMarp8KjZuL39GNZRTBt",
  "key15": "kFeLeqkcpb9ASjYaXxTF9ZqBgzgjc6pLULLBifQCozYvgPi5MvHAxJgYjfeNcidGFaoayGfcr8vGYLpGXohL5sb",
  "key16": "MpBjr2ZC8ysNKkzatPkguUP3g5p5rwRMgjBj9W9RSarmAbwzYmF4eUj5SBbsyH8qgYxESP5WYcfDeCMQgv3aEXk",
  "key17": "5J6YzWhkEwk57ogy4giLKVyTxFjkkhE6jNhvKd4KbFSdLt9bujBdJGkVMCr4eSYD5x6uZAxMmvtkmn7VaPTfyQ2V",
  "key18": "2Mgqoxjx6KgUTxEGz5bTrmstMNRUNG8je5pYA3b6Nt7P3q9y2HXvuF7MhUDNPjzS31cZfccgCgfou4TH1bSMpM2o",
  "key19": "3Eoo38oxzxjD9dPywHRLE2RFyuFTRZfdKPqn85FXcr8MDc2ML4hEoW6g1p3j8PwQ8yytXS54Sh5Qb16aw8p2t9aw",
  "key20": "2vvXZRkBQiToQzEY4tDYZTYekbZ4NmVNsjtYJMEnPf37TEiv4ut2jtHcFLLj8Vx3qw68fXiKRHfuEsugdhMf72fJ",
  "key21": "5dEYVtQvceeaJw95dX8w1np28w4Xzf9TGroaQkrLFzYCZdYkU5scWcYQQxwCLXn3J6mEaxsU2HCN53HoA4256NpW",
  "key22": "fxAXamKxwHNZNY2XzMdpvB47qspT3YSKHqa76QLxRNTmLkWLLuY9sYgbkdtWnFmGtYDkBLF2VSZgvb2h7mRFXaz",
  "key23": "5LMnFyTykPb6xVjiaomqQAsNTsQysFpFp9JRWNTEWFc7zCpLfhmqWYQc75rbRP9972YvCw9JM8qFQTpXC1HAFA3p",
  "key24": "nm3tAP9uAcYcy3xho8PBvqZc2vcCscg9wVjBK4e9YDmxpvqYbUaMkBhsnoznuTz6ic9zGXB54TzjzduBsV7JwPo",
  "key25": "67m4eR5hJuZarAjRWY1AU7VAp3maxJnoTdkzKR17wYwbprKKSKP7q7zGvcxRhNz6L4zcBD72xHSNhSdYBs5XB82f",
  "key26": "4EHZmFCs4Qj4ksSPcwUsHwNa5T51FkTKvDBCs7a3WZ8dsiKrkgLyU7uvHjTdGLzdKDyGbcuLaVigSom4K8VWezUW",
  "key27": "3hMDTzH5gsWWB1JoeYsNNnzydAQSJxzKdznHiVzkU887JrbzsKyD9H3C2896iUWkvyopnh2XPUoGdJW7XDDQnSpi",
  "key28": "5485xNAmiFi4P5hYjJ9wDp5HiNeXarZDNAm2eZ1rf8u8MVVAkVR37RhaNREDM8uXRU7tgNKyHonnSergYuPkZ6e5",
  "key29": "MAfbzPx9KX5V6aEiAgCVWyzJU9Y5pfhjWzXV6kLGeK58HeEqpW3H8aY4VtaxtDFHEJyghkkrGzDrVgLZLbFmxGo",
  "key30": "2mvD2DZ5svAF6jsJnjqrjM9DxFXVEJX79JqpRvEEw6WHCfhMebLCspuL2ZK9G6hqGMe3jg99SbBtJ78MYxjwLzSo",
  "key31": "3oLyu9zYXjGKuDdrTAEar5YhMC44CS4yy14p5jNnEcyzJA3Z3uJGzC3xnpJtJde9Lkjnfo6kpH9SZhiZiZDB8Z2s",
  "key32": "4TDrkR7vo3a71c4rYmoJdYiwWemYJ5p6jYs4b52sEmmeLSkeDkNTZzn3746uPo5Uu1eB59dUQgujuKwfvT1wcLKX",
  "key33": "3QdXqP8fmt6KmNAnxRcnrmfcraAJgebT2EEWZDTQi1bhA7jgrwgBGSBnjnuyKnufV4B8nh4da9RrsAY1HBZwCrCB",
  "key34": "5gGSf569wBBir8Bcc7bUQGFMnsUx3DLBzLRFN4ojeJJrLnEdUV3esDNRhruHYj8gp2ZS9weAxkcmjXKEveUAkJr3",
  "key35": "g7H5Sunk9zw5hBt2h3Uof1vXsdHASwsStA5rUDk32U4zfHoMETdHPE7sJNPTqHmUGw8n85eKPHYwMJ8LvEdy9YP",
  "key36": "4eFXPdbmtpNHmjwcr8NDvdFB2LByMzDkJxNF6ZdDt2QRDMrvec2uXC3vmnqUYGd7red36suUJbRHt2uHCaTt1h8S",
  "key37": "3Gn8qe4P8z1KGHayagWbD3fuKCL6CeG6SGtrHoXv5K8H6LZEv4kZJEACod3M3tT4efBUk8oRb8hTcefT65m5G2dd",
  "key38": "3j5YELKvYMm44okivXvaojTdZ9XjPtad8VhdsF8HqgfCGT17qtX66WcZ8ygqhf2sXQqzGKrQMdGBbDujuygNwcEa",
  "key39": "dj6zGEHiD7D5SvTWkdMe3ctFnQ68Mkf5vEAHmePxyVWeiogYXnS1nCWJ72caJ9AQTpgPoW5LNrn3NLWDCtV7iby",
  "key40": "2jtWbP6FhBV5M9JCegohtG1yvP6ZuWJgVyjkcENaD3jyD8Y5nKiJnVMu5gRPoZuEf72kAP8tYoB6rvg83Z3Ji25v",
  "key41": "5LmhBbuEQV7ir7q29qfFCBZHbDU13yEzF3xSdxd46pSkVX8DL4ZKTLXgosXBv1F76nCTSWcb2grPjHpp16ywEiL2",
  "key42": "3sYnhEDVZYdF5KyKSwJ3YzCUVB9fc47xFxPbep91rXhhMuZiGTSi3KQm35NQcCJFrpDNu9Ektk5FanGuXjCpbH8v",
  "key43": "3tfi2G5HiZfGpQ4537cX3zFFVgXrZsA6GsL4Z74av5RMZGsvSmqoHXvTYTcATB5UD1aJ8JUnz7s314b3D9DJy5ha",
  "key44": "PeQNrUxw7Ph2xRU9xm7RxR3ee2YWsFMV5nVVnXR9TJ7PPSejns4edENArHnuzpbuDguhvCvSA8CMCGLwYZUevxD",
  "key45": "5DUmJj7Hx63J5N4V2Xf5ocw5n6hBiViKv68SnJsM3Qx4ixdA4iuNoi9EjS3oy5F5RR6jQtBsCpCV4d4xDJtBxvjG",
  "key46": "5AHXThmuNWizALptNNcn93hHBDX1QyhhxSin73P9s5wqX7K1UepVAbNidMjKcUcCSvBqhS6PT26vcAxowpu5FGTt",
  "key47": "2JTrPHCSjD4Q7metYD6VCd8W3eVgGyN94WwBCeWpdiY5ZKXpD2aRQZdohFsFoSbLqUnQRwbcwS4LN6oE77ePLNSA",
  "key48": "5EoXP2TW6Ae1v3QbmMRae8T3Qm7YDp5GdtuooQsQXmV5JuxP7mKzS9zy1sR7uyM8d9Gj17vR35RernU3dM999ncw"
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
