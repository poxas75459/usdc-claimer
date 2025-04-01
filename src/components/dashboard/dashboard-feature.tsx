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
    "44dFc4pwYBWwLuQ8mepSJe3aJ1yYuwnw6Y3hbAGxSE92ZcduJaZcdT8MvAgRTchrw6yevf7Kh8BNgucqJ57hbvk8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5r9LzW4eRw6A3dHqsqUuRqYdPWrnGZByeVRHFeegywHAvZqXQcsHM4d33K6qwFuQxe6r4qxpCMhBzKjyB6rPTUqy",
  "key1": "cYQncDkSdqKQuCFbq6UWrQWGnbJXSNp2nZy5HgQsF533gh3o7Xv51V9Mc1G8GxFZ2pzutrxgnNJEZ8MDh4kCprD",
  "key2": "kK8Z2TjDKD188USZZPLW7J5fz9X8x4BattcqKP3okryWzzzDRKtfDjPZfV461imhvBJNBYPyA5oXmStNxmejiSa",
  "key3": "3SBqajujuSVPctEHUyEksN6iz5cDTizunLKY6eHPsktRCYsNsDgobmhqD474haGHh9fsAgUsa66ZpT5bF6952pC8",
  "key4": "3gdC9ebvbxUUD2oheCAL465Gwsj59MjfZy3W8a9YA7XLvnkgNzji6Gspdf5urfJeyNCeCVCuPayDpBcqdg8Dbp7W",
  "key5": "4tsGv9nZkuLrWFmaaNw4xaTdeHCf1eXdgxzZeGSMRALaLrwq4Gwn5QzZHP9HHRq96K2zPXCNKTwuAgub6CsUY78q",
  "key6": "2FRDyZLk5CcBvQPwZFaMcUmpt9mKMgF6RV3zoqY2CkLxwkQDB2SKyj9gx2Jtncgb5haR2ijcoDjwnVzGpKqQQyZE",
  "key7": "4H4MK5Newx2FgUxvrAW62nkyNYaTGNANMAa4S375dT3uXCThqiv2nFxNLk1g8HRvCgRLY4mabFMD6qAx8Frf1MtL",
  "key8": "4x231Cy9Nr8mRyZxyQyN498HmisEkU84B7eTCCvDTyFEjLed8aW8DmheiFV7PRaR5YnZgRzkZyyd5BAdvW2753Rj",
  "key9": "21Fba2GRgnSwDJCF2evTc8uLUdfDFtNrerJfnFzfhw6WKtBWZqfUYxSfmJ1p5GG4ZG5h9wHzqNb4PsdmKwH3tNpC",
  "key10": "NXpLqKkHFDgfEi3Qc7LtTFYM3aQZTybNJueHN9eS4SXyWP6pAazfLK1MWSeR19vc6rURhVvgBUmfUKAgroSgujE",
  "key11": "3zFgWikNkv3G2vFkdb9MjgSJkk7jY9jLX3vYoqAmStqYBUp6DKiUgjt8aRAoTk8Sp7PYKuS6uubQoWm7KvTA5mBd",
  "key12": "5sos9bwFoeeT4njfACj2Jh1dJdF44MscEFgUezxAXomwrqhDL4Zv7naSwRtueCDokRKB4JhnVfEHT59LtSJpAtW5",
  "key13": "4Ackvc2mVGo53w3XY9LWVrfPsKQHBz2RYVgHETUCfNGNd5CMMsKqVsRdZj9fuQtgxUe3b17T6hYvWrTFmd28HaVo",
  "key14": "FJFjwgWPxXEYrK8SmaLwquXLSVKh7rBXTyXa1WB4X2bd87xv991HxEjCfYJ7CjEkqZtULMPdqRtLcRS485uzPzm",
  "key15": "44Fn9DZm5ZufT3BGnrR4kVuPUjiD4euyGbjBvngNbsxdKcm6WCK1SV1UK9vdGyNetPCTEGXyGMkUVP1EPVPVYLZL",
  "key16": "TMQKbBg1wpXQKQ6H4pKYADfz3qEjZ5JyhLe7rApQXjsxmg8dmNWYUZyq5HtSnsPxPqPUewn1s9hvY5sLQk9mCKs",
  "key17": "29B8iKvBEgCYXHeZg85eBvHzfRygmnMNiHAGtxmZjhTJYmfN3Qgn93pfE8niksgci8w6VVdf79LUEGHsCBR5G5wH",
  "key18": "2k4WTCWoPFhSDwuXC8goP5LPdVWqmBz8P6ctp6fBxrctuujowgVDwNJaF1Y1xL2T2suEuSJ57D9fpMt7MBHCWFde",
  "key19": "ZqSgQJyB838iTaUdfum1K5mUviKppDtfe7Kz9umVL1eRFhJtDAyvCZ3S9HGpn4m2MuTc1ZCwf65mT5X6vFt4nQs",
  "key20": "4PAfuS7CqTkaSvkfaS3L9pbksbUSGApeAqJJfgJ66cw9PTR9ZBz1esD3xUs2xceFW3TxXa4JLqGLbktiq6MioUPt",
  "key21": "EUAqgduwzWFBBdWrfeTY4hqQog1NhWvgjPRmABtxaCBgM5S77uozJgkVrwYuLq5SF3F7ph3sTFRLUqRw5Tzk8hR",
  "key22": "5jAs5noeHnTCSNHyNiaUg2eSeGnk6EvZP3GBCaQoD6UJCcYKYKGwQcg8Xn4ywJEqbq45gLD9kHnpb4cKQPYesjpG",
  "key23": "5SnjBYv5fwaP2e8FTFAKS7hkJaiz9ukkMSPgRdADS73yPrzpEBorKq7ENTMGJNgqVwzwDhDLiFZkTYLrpyVLk27v",
  "key24": "2VFtRjRN5hLZB29u6wfbyK1kCrSMy6o1UoFzM16sSAnNRMhWBVUBX8VNhbq3dxAapnponrk7NJ9nLggm4EJ9uZdh",
  "key25": "5iorJERDnQHoYT1xM53yPfXhdUWx7Lxai8YvhJzCTjqsRjoF7Yq1SyoR9zdE4CjY1aPfEZUHAnmPUWp91PuZxCjn",
  "key26": "3wSbCSzkMDu4gZWeWE74q5dD99osHjbjFxvyFi9zrrdJDx74gKcwFouNY9Q4xNH99vJq8WuRBzoy7fduCzZrmHuG",
  "key27": "3WMP9BXUWWgqPvsRbPvjEGYNbuaLdsU8Gtb6X1ZY9BnhHD5P3JmWnUT5uMFEw2k72uqxKXVJ4pBTMKcWLtvuHYLf"
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
