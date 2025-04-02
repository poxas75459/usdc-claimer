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
    "3yXadKK6GLZmZ6W1zsAraYsBuG2ztvvYBapqpu9jvj1zXMXSoRnU8k2xTXynam1hEqfx56q5rXZEdv2LgkbbKHzx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SA85uVrTZT6P2cmLZPwdVwDXJ9AXWywYXdpFXh9wDm2VDWEocoPjqkoDFA7TANppAUD3XiEFfY3wSYrjuErh7bi",
  "key1": "2q97hycy15vwDs2w6Rqv2Vo1X5h6HuzND25NtSg5EgqnXuW9784euNPzuHX6g9imMKyajE5HcBBtX5nAKfve64ST",
  "key2": "3WaYuvPXxcZ44AiXWJjYYywvyBu7zf4mgH2dxcnFhLEEqPUYFsEZArV1ZUkUuKPkxJpETDcbbGeku7DDamQxWmdP",
  "key3": "5eC7FfWpP3jCAZzdqax8s6s5n6dFRdsxaRs8E2i8SiR5bqY1P7HQk6fnCH59Z4hZYY7c39VCvqEHuQytRPPdMxqs",
  "key4": "4JcaG4oVXSU6RRc5wbLqWc4L2KVFY8mSiWtF8CSRvp4rbr42wphxUysQ1bUTPSvPcaiH8A55yBwFbhqyqV35vTwp",
  "key5": "4zDiBhPXGy5E16BdR67TZHirjGZRfxnVNiQE4HmmaYgWjHvYWaBeS2BdPmwAus5ii54b8xLeDJE8MpcK9RbsRcDq",
  "key6": "3pSHQ7WHEGpFxikT4SBjQCrb5UMzKkWMkg8hBMuHyz4ZLSzvm17AeD7zzE6AqgXnZKiHp35RMYLoudFyd84pWaJN",
  "key7": "3E8ukgqVU29Dg2mayymFi89EdzpJo3aBKNn5zCaMkTts4vKU9gNFo9Zk6S5jYHCHGCaJyQjsWpbEJEiqQtWCGimz",
  "key8": "5BUmeyzMNoWQhY7PQYjUU7hzq3fyPdFUoYg3ea2juZ9AR4vJuwGqkttXJmAia1ycqHVg9v8AAonJW3tUtGPL772F",
  "key9": "4mZ7fUK5hvVq28RD6TTrVL1gwhBp7reku3HonhS8FvLxKF5ZJQxeaZ12gPMBgMsQbaVKJhquoVYZ4d84Hc8ZFg91",
  "key10": "5M3LZYtQgEy29X6fJmcGNxrd3GJkc3xAhYuY3akwmjLMsKAAmmGGKep5SvRETTqHj3okFn4Tj2e2yuih6SmJaDjw",
  "key11": "1oSfucivWYAZ9ivb75em1m9UqUKAkMWS5kAHfw8mLBPGAEda5mNASS6aq9T3ntYyXESUivmEAq5brz8xSVYF1V1",
  "key12": "9XLnALR4Pca92fjtUBwNQxR9axsEsPdgvq4nJa4eTU6pDDb9evyVsruT3HQXNJ92vDZnhv3qsWjwZLSoLt4EuRp",
  "key13": "4UpUChCq5zpoCE1mSQv8NH6W8ekxZUU2QQodAXMUshXHNmoSkh7rNQpFm5dqKLg9F2CWCrdaEuAZrnE8NHYcv6Dg",
  "key14": "67drxojsHrej36XBtdHyuLkVeing6GN7i6zFk5YC16jgbtJYeCv9tDLcRwmFgE7cVbABE16juQQcLpL3dTX1MPfC",
  "key15": "3Qzje7QiCLtRtTx9JRM73tRZ5dhMmSszDNovorWmZRewBdX62iDuvro1vqbtLFXuePgb2ynikBJ699MExTaeFzei",
  "key16": "5uuS38NcV8b9xNmC2ojCEnL6uppmdLuEo1aw8Lpk7MTuqQxkTznuuNf3jvDzvPvua7U44CtKNeGrqENSi5sa5sTp",
  "key17": "QcccXG8optxVNMUcAGZH26ZYi2HpjXsLKTnBoU1bZyBEN2VfDEoZniBQCuxW3Pvshu7dF8aZ8CWDNdRX17ZG8Au",
  "key18": "2fpo8Zak6SoiZW3xh4sPoYPZrXQc6YXbuSJkNQbRNM6CZ6Lu1KJ2bWRaKSiMYdjxM1HTq9D9SgKroME9XoY7EaHv",
  "key19": "2HupBHnFTejZVrpGLYzVu3RSe9ZT9Efs9m1ijo1M5Fc7j5DTVSnPdDf6YHJX7uEfob2SgMcT6X8HD5T5PhmDBrx7",
  "key20": "3Uz2zmSyxF5CxMbpgLf7zRW8vJhZh3H9aR96FZVRUD4HRXchn9VLHypDCho12YpwNbRMz9kCLPCWJayrbRCL8jat",
  "key21": "4FmbwthFKpM444S5hEsMeZTUbxAvRU8QyPukiEtgrNBt7kjNgMmC4yqVz8cxoGo3FFnXJ4LCfZYBFxG4dfmZxQ4K",
  "key22": "5zfsXamUknGUTpi2LECmqcL66Xn6h6mNp47tivX6oFA1NeMgU1CU3CV5Mb96p5huTnZNT1oedWbvhhwFhDCsr6oG",
  "key23": "3Yg5Gi1jVs5QZmQ22B5Q6St7teSQYh7N8yLWTcMEaV3rNaVqDL77ndhiQLBXyB3QmPYp68cfAuGBEqeok5kowCkT",
  "key24": "DHa99REC3AmoewNma8a5tvm6W73b6bfVQsqC8z7Ax7AXgmtbp7QLUFQqKWy1mZDWFDUDV97QeToDEMx5FGexdcv",
  "key25": "2grGLquxAvZTW1ufLCQm9whq93eojnGG4SpG9gkwejPPqdR5eLNpnWDyYbs3YDfCh9MaR1EAXgkUEzew487ZQnh5",
  "key26": "568kg5AKtp8bwxLpXLehBASEEX6dvHEUN9jz2nutuo9Kzoot2ydWgmdpazAqoNK2nKNhJCKXL85yPWq2E75mKeAy",
  "key27": "2ZgjPAsGHXfPi9RYrUYxihyTrNDWMXfNV4qq6uZKk1JwiiKcn5ZUwNsCqVjYbcdZCjJ9EL53WnVKoMR8pYZCrTzy",
  "key28": "5N6UnuCteiUxjcv3jSyoBZEEJdxeiQVy3hfQAhNVt7eZZtE99XSDbZYNhSsHLe4dbTpnquo8CkjDkxM6PvV96Fxv",
  "key29": "5GHvejQrzCHtYdxf7P8Frw5TuCRutTeRnDYsPgMPjxYwTnbF2cq9CYLLY3aueJhWo9kGo4A4UXkHFXsyaiiZJEqG"
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
