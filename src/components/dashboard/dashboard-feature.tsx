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
    "3L1KDXj3opxT8D1s9WZS9nfyhMhK1nP5ZEocQN6Nd7QmtRiUNcxBBYVSTiirR5kuSEUfYLdQ7sSN2w86otU4okQh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Hi2fiLkw1Xtf9UwUgb8rPMPKLKXL7b5CBxNbeZiVyZAkjRPG3JT8qNotztMGv1pPMVhEDpHFqq89H4jLyvExB1P",
  "key1": "3LXZL1SJHSRi9ua2XfLf6nk9BKBGTHrGd8i8ibQmL86Nqx58S5VZEonZjEMq44q47uFtHQ6sxQKXhNvARZ87nGPN",
  "key2": "2msu5XniDHgk1ziyj19mdk3NzsjGbKZvzDg4QJfhcBVr3SYC1BSsmQBgM6RDEjawuXcfRmAuH9WZusidSeUwPDyX",
  "key3": "3Ac76PbrZR1RmqMzKCyCSY6n8efr9PzTozXSNeHt1NqRhiuf4TSWSpfrQWmga6uGWUXmuv1qKWAKcNn6E3ZxBydy",
  "key4": "2m7NfTyMuMaQBV2Akw2BP8yL6YNFUZkf8cQEmsVnKX2ExAF8ayBQq5s15jmRzixeyzSEQvZhiRSZjNDLuTGGi9EC",
  "key5": "29jZBzVeYz4A6mJ5fvE8ZRtoMZCcRwQprhpduY1vPPgRqBD6KJHqjwL6zqqxLBpFouLeGoT1JFENjgZRJPxGzwzT",
  "key6": "2AvspJ6agdunY5CV4Kh8RGegTHZuLdLTSh7cmpraJ21DcB7FswCcanGjc1LA8jA5CT86Z8UTxCe6mbyqf1kNNFy8",
  "key7": "2YgC1ZFSDfQvQnPi6KHcf6C3m2qPhX98dTZzyWEKx8aoyZ1oDTvYdwfvjHmk8TRowB5E4go24qt6evF4ySWd35Je",
  "key8": "4MMX2rvLm6swLRBfLF8BTgS1VNxjZiAR6KMfSLwxGDCEDSFUUwRd3hQrpa6MPBTbHLCXh1zmAxSYw1e1bX8xSDr2",
  "key9": "TUSDvztTbFNDvm8K2ktUHKQgGdjT4jg4g2hTsKWEyrHoktcr91aDFSZNaWEPsAhcvr7PJkStUQQr8QLde9yeRhF",
  "key10": "63GKUqZtQmfKhM8Pd7PmE6J8E5NXwDSYAy8PT7dD8JsdiLjK8DzpyYmoGKAPu5JJKzK6rnXwuJESLZ3pjzrQXL95",
  "key11": "4KE67RY6HaExgk5Tvfo25o3htTXPNPKFLYbqvHQQa7uvLUfHJyhgkioum9deHrzcVGzHmXt8z2kAT5K6G3rY6DSH",
  "key12": "2bRZGoT9ZsnxmRbhCSPhWj5TzDipwEaKF3uNsUXHWDCgtPcgP8hRgLFiCSAkyrq4b1VrAp13PcZcEzxfX5CX3uF8",
  "key13": "2Ab483BjXvMPnEwacMVxFFe4dEZcZwyxbHhBkLatGpLLK8DJaCvvvVE3RpWEYAcoyNbuZ6eo9Ss5FGx5kWX8JLNC",
  "key14": "2bcCLbk72279ETqu1fM9QWN5c5EcSCP1F9aH5NVto4DJQjTqCwma58kbYACcHerFWHPwt1wRE8MtcSoHPdG92vb6",
  "key15": "4mEUeHf7ncV6w5xGr7SLggZDJZG3xuT32zY4Q7KYkmN8HX9Jyx188G2TBn8vqHqmmSv5STw9URoWnSQtUBSe71JS",
  "key16": "3rW3LDkwejCCte2m4XkdGJPZX7SFJQZtVsFuMSPN1TYXVsAjwyVgukQpu47HZxAu9qovVSGwhac9doT6Y6dVnw2G",
  "key17": "2VRM7VbNNqh45nPMZa4zi5qkJK1DKcRFqKpffcxRjJhEyoa2Hm3AYExiPDGKNMeFFxj2GykJAecNueWrodmTE3od",
  "key18": "4n1w1rhwnTAgiykx4U5QdKpSda8w6w3djs4zdmBGbRsyqdZXLorLscXEAc7mUWgKwZDW7Z1ceAgjyufFXiYHnukG",
  "key19": "2J1A6RhYW62fxR9bU9qNksGzs8QBMuePPD1KzzArqrB27zwBEuDVEGBMb6cm3dEGU3AogpyzFSqGCrjXyqZcBngx",
  "key20": "5kCaQWhATnxYbj26J9CFcbD4uHAiDXQozFjC19i5aD9YbA9ufCc3DNMciXFdXqpZu1VEEUGshhjKbKK8w6aL2oG5",
  "key21": "3Kv7saABmtMBiidAyvNLR9S5BDDZTE1UTjrL4DtfE3Jha9TfCvAvsuS2Hh5PnDhZv86ztPsMnLm57JvfyFi8fAHK",
  "key22": "52MWXp1bKuJZbp7Rk37bfZXoG8pt4PtPyWQqGST3NAwFtPiP9aGyxdApvhVjagwzseoXm8Ewaj1cqydKD1zYjVei",
  "key23": "XcUKb9ykG8MuWghjfqT1HQsxY4BRzB4BdHhr6g8MkeMtp3MBWMcccrKmAKPnTh4a83NWxheedwyGkpjmdmxKauY",
  "key24": "otoY2W3EpsPMHP7FSc9TYfJyghAkqfbT61KPPzeFZhbDsHk1yoUEr9wjKox3tdo3rfVLxXezgdLSENbJ2Js889Z",
  "key25": "5aMVn3YBKbuKfuoYUkrWWixiveAZ8tAnse8Tc3gakLNpHrfHTgLTvG2dqra66GNjTHnpxgPtX7fMfRvAwZZJLGK3",
  "key26": "4uG8nCqxu2nmTEosU7wgu3s1b7Je92XjGKBvNcHaPgjWGmRGqPVHkjsQBUuNiEhXAJBziGevR9DpU1AKdNzR3Dnq",
  "key27": "3Jkk8YZDpFi4GGXw9PuEpXdkSpE6s42ZQTWyXwSCoexqMDq484JhzBayqm9rzXbenRK1u3iFJQjqMiGfa7qCXgFw",
  "key28": "k4zHTeaa711LphxHMaeqebNn1y9xz3AcVsC9NiaTCp8c5QUkxRwxrEMioevKGqTtJWqJWY3qigCGyDymePGe5dr",
  "key29": "42SYd9uusV3UjbJybMdShh9DATSusu1oYzVnQT5jJ6JgEBU4w9f1nFiLGH7Jnrx4kuQKqfVbPhKZdUezqqi4evwR",
  "key30": "2F4NmYPQuETLRLJwNLPbrqeJLQNEMa9pirX29r7Ysz2CPpYgGYkCCEjF2dhAVvLepn8omFTPwPPYhkLTuUGrJWHo",
  "key31": "4ZyVZM5zXggVRLgvfrzSiCPa1AQyGq4LcH7SdA8nTGoaPMjNn5itjbo2VapxLNKroFtR3UhUzZJXNAbdP84xcfhj",
  "key32": "3w9eZt7tU92fNyjk3hKc929yY9Jojhirj9EHCE97BP3PeC11DYhwVhGhm5LtiYx76f7FTsha9mS2pdWpMxdUTNNf",
  "key33": "mSuRcQB6WcuoxgbdSG8Gou14upHSQYkTDNgxpz27gms3s7i7rCjKcWVQhbcGMQoA7bMaYQBKHRZpEAREN5gBgQW",
  "key34": "5ouNrmzjnDhY29otCNaFJKuKDZvuwjUDaNCx5TuYpbMVLPFJp94Y2n4SGzmdoXXLqUzsEnpXiScEWZ7dM8KQKywj",
  "key35": "2Vbx9QsePSgPQGH3Q8NuVXJsHwF38JV5jHZNkTSKCSvsNoUVDbTeSsZ7qzKasjAwejkY6PhnZTWQNq1jnJJ3jLZV",
  "key36": "3Mru8ZrRs7arWghgb4SrN2wHuTd1Dmj83jvgLwU9TkdDMhNFFoLpxaTyP7CoFVVvUbqpWWJ16Uw3AkYeWtV6bxEj",
  "key37": "4tPgT4nZs4FjJnmjNwSxA8LSSLpMgZrLiqsfRfsLCp9vKGyoduFx9zzxKyHYaBHaXrgPx7AUjC2CdTv3vzSzKF1p",
  "key38": "2oEPFQB8voxjENGWL1bkU864waCg1Kuu8KrG8AnwsRLJBCCPvar5FAgiHcN3T7qEz6bPCV4XzDpjGnSw7EMoJRfn",
  "key39": "55HgE37d4riuv2rHJXUdHXjctjERfqNXWyABV4Cv1JCejRtKLkAUseHF4DnZ7nsPJSK4n1BtbkDP7rQDobLXWV4H",
  "key40": "4nLsUFfHvp699Ke4tC6gvHvo4rnuWUKJohKSa8kxXoFSrXGEq9tBHDNnErENkTDZXrBfM6pDkVyx4b349f2SwMVp",
  "key41": "4QGVUSfhW7sB1JHEMgARGSfnARfQeg42NDqsVA6yWEJJGwHBFczNmGcvX2rLBYjYEhMB89AWZX6yoQS2qRLBLoqu",
  "key42": "2bCBL6eFZQdtEUSNifLKNntoevQzP9MSfNR3a718ntwdHfGxZ8gtX4gGDvAsK6jNbu4Yt4bWBVnmY1EjC9sqjwvj",
  "key43": "mNYBe4C1LSjdBBdeo66pfTgALqCKh8azu43wzPXqVb5XZiXXwRJg9ySnubxyezotaXnGDiJRUjdaVUNpFEDo8cF",
  "key44": "3tpYMazANkjGY83dVUFSuEerjn9ZKCwV6jESzq42WFVgobsJr3DtnFVewNNjCHBgFwyjaocHVxSPTM6K51Svsu7N"
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
