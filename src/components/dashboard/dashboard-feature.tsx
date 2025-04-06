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
    "2ohkEPAn9cG5bKWNApvH3UYAUF8E34QpqrvB2AAX46ui4dmEsMpwwXbPWJQhjY1N5vyxhozKBJM6WLidYVX7rjwp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rbBsztcA5FSwoyLQG3zPH1Cw3gp1D4QU5MJdyf6VwN3fESEoaYgiUf8bc51J4raPr4AWdzgUgjGW35DjUeNnDVT",
  "key1": "2XFxQrgFRgocz3ygP6UVvwAW77FMyBZh9wRbJcSASHfnETZgFh7Y8qeh44Bmjagi352PwAC6vU42uNbEGp7MbDUA",
  "key2": "3qkPGVB1xopT9wdqGcbudNnvmMHcUYQaF4wovV24Co2e8XW7FMhUdrLYkaWQBbLHtyZEJfvpsab9P8fd5M2TpZEM",
  "key3": "5s5KTFmDo8PUatztdYoebstgdeZ3Ks9AxDyf7PpWFToGJpZmbhBAquRVD83RP1qK73bwh9e2y8af3H5h8cD4fYYQ",
  "key4": "3UHaGNwbPeAy27fYxDfqQ6fjoSXBbVYViLLKWG7ybZC1pophayJ8WVjPhyGbwEJWzdEdBUBywEJjrhEEz49G6KzC",
  "key5": "3SCH5kQbiVrdFXfJvw9NQ14mLNJrgoGV37PbpsiEDK7eo5qbSrn5npjSBYtCfLc1Vjq2tUEnNMtaBdbbuWW68WaJ",
  "key6": "3yLmVbVAz65Asg7buLVPD3QCWgTmvq1Qikg2rsMfEccTuoQGzr9xGcQ1JoChppXsAMCV857RTkQgd9kF3dTgqi8o",
  "key7": "2vmeDBPUwV6mDUqfCqw9fFjsNaw3wD1yD7tZNU9hd5mFEpfuvrTCvQ4xbnhhGMVoVqAfTd8q6W84yrJVFpVByLN4",
  "key8": "2gAm5qwYjYUK7oF6oKz77qxGMyyZB1S4o7capuG8EBeUXMnXH371mYswnVNHn3ky69MwLqBA9R49ZXn9X1eZgHRt",
  "key9": "3sG3EF2hM9NgY3PBE5WvpbnPHuiZnmPXhRLkV4Z9NwSTcZvxp4vmGUCdpEbh4JmNhqLo8GrbMXbWZWSWconZzLGu",
  "key10": "2fBxe33afcWubDkUtGKixXP2cMS6oH9TUSUWze5uxHTgw9W7KpriTDZdUpNgsbUjEEMGjCdpU9vxfSe9WFWdoKqC",
  "key11": "3XEg5f2Lr13iPvgFWekdCV6mFKxgKx4XQdhB7CwSnXszYrd63M2retLKaGX4rDHWbt1sxeXoiepNCdiGdzCwhvBd",
  "key12": "2P9mAZwGFHmFuKq4i3j1DZGZM5xTm2vWx7u4p8oJJVjPHg3yL9HdDusAjLY3D42Jz4XxJQpRX1rHZSRagwUeSykH",
  "key13": "4drX1bYYw6HYuGhWbvs2ef3AspCke4thvkTa44DcU5kr6S4yktvdYqnXqwLAL4Fdgyg1WxNfkH8ceLDga6HTph9N",
  "key14": "3VMw8E9hUyV6QEwrbi6VDYgTZmbEPk511E9g1qVoV9X3v2xuUHZUeiusAb9wxtwcZfT7wMuqDtZBo7TApwKbUryB",
  "key15": "i98XFKe2dgoyLZRPhVyGNWC12VsxuPRqT8oKXBSqRdDfjRoea12MyqeWHEHn9pLyJLsPzs2cYCbMmXr3zVrgojq",
  "key16": "5gZ5rZeJrPAeX6PxF6ogtPV2MAMhrNruZFjSG4cRcQDDbZWSDNpzME5maRaeBvCqRbyTT8n6ff6Nek1xQtUf7Zg1",
  "key17": "3z4oM2VY732v3ir128oUAYAEkwuGvHM1Y45A2hXGTqWr8f3RUZo9yXifW452J8HFeXr8dD4FsSbTeUrzuMUEJieD",
  "key18": "4PtdGnBfhLRB7dAgHiT2fVEb9g3KcBoT8Lqqyst61YJBAbRUBP4x3qnn7XGCPV1n8B5aEL5vG4mFsTN3KU3VhAi8",
  "key19": "5sudogpZAvH7YqsuLhvzCWfzokkA3bRJP6Ky5vZQjq2btniUpAQvQsMJDtf4VydEoQ5UqWbppx2HyMPU6PvHbjKu",
  "key20": "5Vkze7bKz225EfDptSQwqZo2d1R9KpLdWaVrWphV6G8UUw1PMzZDUcbnu5ZB2DtYsYpzp9kpNdhRiN9uYBR6iXP3",
  "key21": "5CGEt56vEYHBP5wvUJBH3LiLAhqNysiPAa9hLCVABndLbPUzMsyjvrUebtpDcVYztwWrSvUcb1DcanTvKQTGcZXg",
  "key22": "G4rD5GeYWz5RuxF7qRiLqmoDd18B4jjSmYgPxm77WHED8Vcy4Q7LYDNsYYYBfoc6yfW78UsRsJH7eNSNUGfjXeW",
  "key23": "5SqK4S1agHU9KoMVykYfwb7qbreCPsVRSome2pH3mPMKJ9P4Nz7Nm4TEkWyLHPSUBLpJXVLWoXeCHTKqUmXJHGsj",
  "key24": "rAC6mefcy9mFqUfEA19HjAS776jzNnHKBqP2d9VPAFC815RSMtKwFPgon1a3qshJBv3qDTgkaTioqFy1QhMRrJg",
  "key25": "5qTqu3LZ7BNinD1sgntJkjpQZa3WVPN3NKNuYqgWrqXADHRaRRuKepUADdUFRkrW5V6WGXgurFHvLjocrrT1pYML",
  "key26": "4CbGuaYcPdo6skvgyYe61ZCSdUVLz343VHDUQNtyFtdQTN4nTfPXUa4w9Aa883VwESxQCoi1gCN47F2rULHR6AZs",
  "key27": "yKaa6KBWTifmDi96qTsu2J2LFBggzgA7SCBifoBzvgKxAFdW5QUswuDByHQQRHENcYAiYk4CcMEYJJmZRfJqc64",
  "key28": "nQuZCWSob33wkg8QPeofLTc2LegfE8diUfHdPimTjbP6J5u47hbJMhhGCrYeUtMcLf1eYxu4VWqR6zEwck4jywN",
  "key29": "5xfAiCfzXJQ7NMqHD3LdP9V2gMNZrLvMMpLjUiQcX2Xa6GxHQm9buWtiDuNuzeJgmKL36ccGYkPa6X1qAwXP8Yem",
  "key30": "5Dcim1QEvSoH21CerJZis56WdgVqRozqpioVv2ysDS2Coo2Kmf5psSvYjdYpH1rPAh4UBcbbmbMc9U1HfWCY4yr9",
  "key31": "4Dx7m9psbzvyMJXkFafHrXqyj4NXBx7gCs5NQMXhrZhvMmKFSfkcHrMUXehS7Gn8M4r9wtWPCG9j9gPVag1Nn9WR"
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
