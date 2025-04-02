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
    "5zFMUoyMfQM3FotDuKsEEhWPRS84JfRAPK4EKchLojAKMa5nMFD3i5q68cop5VRdBiJF6xwfV6C9qiMG3BGdtoki"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RFLyKkaPgikY7zB1viPDuQKU4AucUsB95KVJiPduevs955esUZcBGBqxrxqEjGv3MNtood275LxtP5viGGJjSmA",
  "key1": "4YF9u1jsbU7WaB455VhTPn4gKVszJVSgjCLCAzHeJCJoJD7PQh9CyVdrxnxCpprLBAyjRryrkq4Gj6JLjJ1Z79xu",
  "key2": "4E69FBqsULnVZpKQvpac2x9ze6yUJtDh6PmpXR9TnMfgD3V2jPW83nvMGoV4ycavCA16gUMfzdDEDx6fz6Mcoov9",
  "key3": "PhqefCiMC6YXG1JbiEbFvKDD5KhVJst8zHZ5vBBx3a4nM1b2s3ocnbhhHCfAuzBxkM6HMWFrBJBE2hDvx8QZKza",
  "key4": "2sbe9dCyczUq72XUnCEP9SDcGSbqQZ1AKAYEQo7j1T7Zoe9LtVkqGzaX9tKEvVTMkjcU5DCqvqL1wz56vpoKFCuB",
  "key5": "2yrahsaMfEiGQGuVWLKfZ4diLWbgZreEG5mV9ujn2smAxeHuNrhBgXkoXocJnESua6u2BErAobrh7bqNQMyVk8a1",
  "key6": "5xopAL3xtUZUQL81nBHgUrivWBo2yTQqpn9wHTk4NgCa2Q6sDKeHkh13Qvu81PAqSuoDUdqDNBRqdoymjEsSqvbv",
  "key7": "2utZRFzbidL1b1TPCkciX1RJtJ88xYuVV3yShSv3sbG28snzVyNUkRWrwzqG2RRq1zozCEG6q3gRVA2PrbD832RU",
  "key8": "4Thto8MTQJrdpJpnE9HAdvaEhfzMHidQamtA6WMLVh4SBoB8aB9rEFn2zZM9Go3vjTqDr796got8VeskeYMucfeo",
  "key9": "5pXyzEUAs5VM8JazTNE2HUuyRmUrNdjb6WDDHbQ6YVXQvVNtSfXTCrWT2RFBBcWm79nch9Mj6PUeehSmLng5XpXZ",
  "key10": "2HbUWJSGHNfaPkgBESga2ZzGNwTuLygiKUgiiXSsSYBksFT3TJ55RetfpdXEsEFVggB6raikexAEbEuQxcf6VhhM",
  "key11": "WSAgTog1daXZPPUmikipfceEBxktugDbJSM3wHd7xWo89MTqiuCEN553LkHYMB3RWRgHuLAfBqCCzAMWqruN2c3",
  "key12": "5DFNmx6UF8AEmPm81NffrXauxzgwoFVgwR3R5FN2VabyLYwgn3UPHMUo6MoJuR7mnRbsfQkfgX3hzLovzN6jVUka",
  "key13": "538iPQCDTWgivAnUM2m3cPEWW9Q3FpGdUqnEX5k7YQa3JUUgAqXHT5EjNBmPJYzRUoE9FrDM2GEUUwkGFwrdWDUr",
  "key14": "4sQ24LfFXX79RthswZa9cytd4VnDsAVVs31JkcXehM7wzM6xtyXUZbxi4DWRNCnfyWyFXNrYSqeFx7zNc1LPapE",
  "key15": "5PFfWmzWfsmLhb1CefozV6sNhxhrtao6dXFT4USwMmqHzWSFsXqbwypA2cVLgBd2SsdeNMyBHW1NQ5c2end9Dxi",
  "key16": "7cxGSNkaSyvX4djTM2y9ReCTWJ5K8KWYqiedeiBYPkPFGbCUiEYDZci9pdDW2uWSULFkM1sGnGCaR4fToJTsuww",
  "key17": "2GGWLcoNUwHWuTRFqKpAwNy7KYAs76F79j5mFUQG3qd6j6B2e3gV9jRYFLCh8XTaqYy5aaVTxKLnE5CVE2xYxf9P",
  "key18": "2bg8UHr8Ae12j2SkURWwuheAikpB9SYqLZZ2viVM7qgcEvYk63ctvqYCbKAxLZbqbuamxEwAsNSPJBTfaT6eCUkS",
  "key19": "3vt1f59kGNAsBLEPa7gv7fcQ4z1QV7pyyuGnEWETzygv2YYjYJgdgEjjf4h5HLq2fUu8MkxEJDoRDuDsmoJuKpL8",
  "key20": "3CQZP92u66CVP1MTtNzZzKMZrfeF7WKfoiLod4M2957Xf9TqTyMQemNBLAr6vYbZwbBeNjTsUiYmDTfxdu6mRL2u",
  "key21": "A9FJBYvVaXU9FcNdxuwEGkjvjD5SPCsXtdGyNaTdoaiACotJ3QprXa8BshjVkvhnP82248spbcgPNs4xUhBU9dG",
  "key22": "3JgDwGg6ocQsZKh984Zenvizjhvek5Mt7b6Snc3rXukThrpPSeJrNLwZUC7AhekjFL3DAxTL356dDAGNybiy3rpS",
  "key23": "4bhGjNgk2Qb9vFSqZmAVr6Tfuk3ghoFAV22adDiT2E7fADVCLDELVENRCyDKFzL9BSa2znCNX1HyUNyrRJGJaehK",
  "key24": "4u7jzm82e7zAg7ZWj7U6ayGVkckimyss43GtaD6QAqHbeNU3TUV9go1PPXQf2FVvNyQGxaAC1MrLddCqN71NL6Lr",
  "key25": "42Xh8Mqzgv7H5sKcsvmURKosD3wTEqQF8k32gByEituw1z5dC7dDQrtnpLRDfkJg6TDXqmWXbpsPqXddZp7uTmGb",
  "key26": "2FDwqHfDqBL3YnMJ7wJkNXRCf3VLqnGZKvNA8XEtZZ5HnWNjWRFE1uDG9HoQamfGepWSfBpN3FWrVfvVVFdZbjXq",
  "key27": "4JcQ8FGNnbuNHmxFZabM3QJubng7zGUTk53Aa9SnrmJUSidXyQFHCX3pVViMWXsTbgdB795adNVVkkDcS4peNijp",
  "key28": "2tJuKYffuKNKpJ7xJwv3n5ro2CE86kRDjCodAJSja8M94W3KM27DhxMfRHU8DWxbmuPVe3E5vJv3LH6DWx27dNDA",
  "key29": "2Vsf7Duw2zsiq9J21aPbaqRZ7qvh7DRx5Fa71MPTScAo17YUAEHZpWaB6BD2nBjAWmAVM9mjYLoBYfYcoWrhcwFq",
  "key30": "3uHZ56UNygKh9rVh2xV5933H58e4zJTEXftAhU9Pe7vELxnosm6u9vSRAnzkqfjr7rR8dSEYX7FTPwCXCmkzAQN7",
  "key31": "4uuYRJGNZiTHiyYCtow7jWvrq3V2mBN2Zg2WmEenvaKKPdLJKqaHksQyKGSD3j5ebjcv24mmKF6uvweJ6ABGymme",
  "key32": "HWEBL8XgqK2shGiouQSWYiL2WSCAj9KtbiypHKatAxyYGfbx5PmbQtMfAuJuKdgnZ12XoET8PAnsu61P2uMFRgC",
  "key33": "dZuEJaafCZaaeitMzoaAFK5z1k4PRSECMAZTHR3XY4NyqMbxZUCqq9PeLVmWXdpZuXLqBDcvtv6xXF5Wuvq4uav",
  "key34": "5KwUdPbapN8gTSjbFjkEwXpyVAiA7HxA3CEDzL6SYRstqVQeg64ycRHWTG6AZfqYHMLDpFuAmD95GhfLxVvThDH3",
  "key35": "2fKJV7E1pscK6DgZDDbhg8i3k9DHPPfnmYr933YfmLoVLYG84SSSY96dmsJPnQVQaWn34nqimMkZz2ATJzx66xH6",
  "key36": "5Cp3R8ukAG2b3i9cQAHohYTcWiGf2GLHYiZe2WE2ED2tWn2kGKqtq5qiLDBYUrh3u7hV2Er31L6hDM1HNuwhd5qX",
  "key37": "2KFMEp3UczyYTLi7YHaieRyqEavcSqW16aqty99zXJMn51eNhPgBLswy2bGNYsw1AtvujUaD3E4tkLEe1JqsSuf2",
  "key38": "J4x1baobYfcDzXDL6wDASa3iqbwSxPLAbvpLhnTr8kPk9nCRbnLL4HU4H9nTouJ4VSi7yKCSZnoMpn4pu2GS9uk",
  "key39": "gnvNzUHA8B7JuVoP97rXRLzWyjGQimmvvZNmrzuXv8XuETad9mJ6hg9LzmVJVdfqfnhCLyBxWsYx6Cd6jnn1wd6",
  "key40": "3qpFvDJRyqpCKPTe6eWZiyx1ethYhogJksmZQjH84Zwmpx1NMJ8RMfhPUG64BgqYajEtWicTu429QprdD2Dov76d",
  "key41": "5vCC61pSQ7RHj9o8LBKcLnyzADWBck8cyPbix2saE7mAzVBiehfVswsDbZG5RKppufQGZTnaaWeN2jhwFGfnoskt",
  "key42": "4rB8pYt752bHbKuzggdiQQqfyfAf7qvw2MaSi72QNTtfSfp22NfGxHLJHVvKAKSb4gmSERABWZNMhfTMJdY9qFVJ"
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
