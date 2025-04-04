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
    "4oc3UEzXoMe7HUqYVZcTzVwoHzr26rNzzVe2eLUMrbzLJHYkafTXXqUUdg9yp7pPeiU6ZVxEiHkdeC96WSFP37oQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hP5pGNnQdKiEF6H3sLGQKSMCXYjU7ZmLPXuewCVaaMbnCPNEpZUPn6yYgDnqATrzcghyNPvqvxrPtuhRp9anDfW",
  "key1": "29udTjZDMoUNpvU4gny8k2kkv1p1ULngqGGZ9BH6NBWy4WZ9rRznMxr1g3wR6Dhq2r7w2mnUNrR1mRt4QEJjhVdc",
  "key2": "4FeFepU1zCo7s1YgTMwZqWnHY2FCH88RAtALLTrQAMhoA1i7gFn6kQS6SUVeXUnoUnDcfUbyS8HYG7M4wdJrruMR",
  "key3": "65jna2fUxrknKedXgoeJLEvUC6rwEcegkJw6WoMaFAEPPGR41ivaiPy7SGK3WXbE5xTeyQpdpKEVxaECK9iF7Z4P",
  "key4": "2gKS7YJ2igDfqedmQQUBoohVUmQjSssx1tYgrP7thHjw1b4QBq8xNabhtmY5gcWJboMn185ZMgdNjTuLFmEX61oH",
  "key5": "3pA8ypJKjHAYJpPJC44kxc7vGH6aUYsYCUNA1DbexYFxYEAPaVQgLu8qpp64FgHn8qk4fZVF7EbnLZLZxJKC1WDu",
  "key6": "3875siHEavXq3tyarVq1uJJ2o2ymjeF6nDSaMqNcZQRwkoouBudP1TFZhDy6JcuXQ7uMi2L6A376aYVuoDCk7ood",
  "key7": "3PrjcMFhD1hmGEAW8duK9nihhJztBhCTE2RiXYWCPhDFnEukv5b7pcznvHsTzdMsjvqQ8S3kVKpoZsxSDErQJ6Dh",
  "key8": "4a38CEXvYAZhfJPtRugnSwYs2np8judPjVu8rHQWHFN9cewi2h2kv43vVxaHHffX55D3YKLi7KFRf2hHzcQyHMSP",
  "key9": "5WhWzKcWAzvFX1mkuhLxz468n3t692iRxQagY77FFqDX796cHL7ospdQHfo47xRwpaWaD7bMarQSXs6HYv4sBcj6",
  "key10": "5HRFTorJeFSdLAYbbtCqBnGskD34bv4QELhSr1LL47MVNLKJoy1nkRBEjonc4EuuD5bUamC75hGAf8cHemoKTZbV",
  "key11": "2YK5QUJHxPSJESpJG8YxURiXBZZ9crNtTqHgKpYztPVyxU6Z5vW96EXjnobU4iskgEbaGNhorEg6caLpFWcfReqS",
  "key12": "5sgeGZhdxSmmpfn1y5RLMAUVWeQgBgMdywbmkTJMKDqnHysdrA8C7F9mEy7hSk9puomUA3KU9HGM2zoZmqHVRhd6",
  "key13": "2pypyJpED3woZPyFHMjFfrSYHQ4vAWu2mH1BNMKnUeewnfGm6SmX6vAk84Syyj95EZZpRMtJktzW32DtHVHCQmJ6",
  "key14": "3WNtephk4L2aLhNkMchWJXxqRLCn69oggTmv1ieo1PyY1qyw8M792qkCUUPHcRX7jMKmgqtDUCMFHVCi4aZ4Jdhm",
  "key15": "4XGxvPWx2EAxrBoFFJ6L7AD9KJwxDM1UQDygwpwpS8CWXCgLLbysfMkLVWCQ3sBuTFvyah4JkM6hNMMrLyJ4gCpH",
  "key16": "3HYxmAk44c3X3pDXe5nV4nvXmGpUtwckzuP4a6pJdtPhZvMQ2HLxEjXwnXb73w4UAyGkCx6txcgzxk9NzKH1zpvE",
  "key17": "4QYDWNcaVN85Za5ubYVE7evJVsHCmoHVSz5aEdB5vL7oibPTLiu5wpjxT8YoHPaLUMTyF55ZDREpX4H4ZyvR2UaL",
  "key18": "2e6fAdGvcASNFPAznnmU3THhNb34LhbGQsCxo8wmNSREGQSZSccWxh1kF5bdHmxxKbfB52JvGpvXQ5yVwH5kHgYf",
  "key19": "3GcSHVtNGmyjJ6yxqd2Qn5vUhPtTEEVoHNfyJuH4LmNqCcAuugENsW3GEfz1f26LQq2AG1s7eHeu9furygZJtrej",
  "key20": "V5KNMYoqkqwN2EJ744pDPA3goCwZpdMYT13wGtYx4SbkNnkn3tmQkPsHnxT1yHaKk89ZnXKuHLjAb19KPsYt9Av",
  "key21": "hXCpVRtuedQEDtVsnt6nR5WvP13jNzcgu2eMpHRDwJCbr21zbQDJv6X23DzRbhUVjYs9uru19qRxw42dQ2tCgFr",
  "key22": "3zKxcNgHosoAt141B5PZcZ2J9geGZfXUwnJS6xuAm6DU8ApeLwqbx7qavFNpY8dQxB2aAXHbw4FsuBXd1pRDkgfN",
  "key23": "4tXf7ycA35dW3Y6EAQHtm4xi3cD19W3RM1LPxbZkrSSiHhqLYPjpppwuN22ri8ZubowQuj6PojxGnFehKARFVE5C",
  "key24": "5pAWL79iDrNZwz1YCZ23hnxTVqHJLrGMMrAtCWbFz1sxPz5ny6FteWDzoNqjHqPMmY5ZaSPfmvszzSxCLbZTF2Eg",
  "key25": "ovDyfXJfDfRGmBWmGQG1FyjWzAcMnCwx8pKhpa9gwHVqX51LNS3b1LJdX31eHA6L1e6GGidWfmLmec1radeHo9b",
  "key26": "5yktQYvbmxGXPPviPLdKHUFaVUuByR4Ce1osabFtXStVacE2fYq8EScNdSFHBEGU7HExUGxcfRtYbbUsbRpHgAiS",
  "key27": "2dn3xNi8FKKYUkqN4GUT1qbvBrRUPKs8BziAB9gFvQZobYD4vpreg4i6tdXVgA12pNDz3ueJXWbD31b3VwKyYCLv",
  "key28": "5fKdy1n6HXE27kUwoPgFiG9fp8Z58T88hKufFh5zNCGh5peTMHYdYGA7BELtaM3RyT6fnJ24s2yn3RP8j6CbepZL",
  "key29": "5rk4Rz5A2NWYLBVUgNYUyB1CQjDwsTCwMxfAqyZkPgxqoTkUkCwTYWZjKKTbZ8omzyPJeQisGRGfaVTgFEKqZAer",
  "key30": "4teUcEPnCFyovh8DUqzdoMxpyw4GXcTy4xsDg5yJdR1GjXQGDEABtjK3Rb6HC28uy7oJLxG1g6JSXLTKiZDSFnS9",
  "key31": "4hJavhSvYkcvu8F6rt6ACEb5h5aA9daKQ1yctjJSwFNybdDNhhpEzAeZBPcE6UR8ZPL1qCrD471Ce6gd2ZQXGEsZ",
  "key32": "4LVs7Yw7cdXQBFuhMHFUMrP5c7VCbyPT9wqM9KBcGesdViG7N2b3QswCXytHyCS682XuJGPaCzBaqyqRZVRiUwtC",
  "key33": "4b6ijvaLDw7NWDNAeYMcu3qbJTQLTJ2jU1sJdwySDENVdBazgsAgykiCembZbfidp6Z4z6zwWZfAj3zESCiS38o4",
  "key34": "4v418maxdQgPu5j7wQjei4i5181EEWegPWjb9TEFbLC58GXQ5ctepZPiV6M8m9u9AVMHNLjxknWwjmwUJnxK5obA"
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
