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
    "4YRFpBBVy6ECpqU1ruBaUb4aZh9PGn6TFYP19L5AEfgfLKmRarWnfZu8BNwR5ANWvBNB1zgXUBjBzrg8zSXm6RT5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FEDhUywCRPwSX7Pb1QXDbDLawMKKX8wN6jDRDJVxQfyRUbLKcTPTAmWbXRHi9y3SaQApS62oNdftmdgYXRrfQ8C",
  "key1": "FNHNQgXMF2hGLUs4YCsgrwJnkkTiLNWqav2hWWEiGK4bMLAcSGDL4mP2mF7CUmeoguKbwZapBdRHcgNj8wToiXi",
  "key2": "3sHTZPcBPccu4fob1rUethYRx3mFcYsjySpL6pmca2BPWaHAcyeeSXnhycNQCoaLm6rhHvKxrSn2uxUjXDJzmVdW",
  "key3": "4RCYk3Z1Rzj6He3c92T5rHTDV6KLZGp9oyJgq3HhfVLqBrnBMPoRgKGmxPQ7M6eoNGkYZwphxDo9g6pdqp5YWFwY",
  "key4": "2XAuDZ5rcbRNqpmw7dtcmxP14wZXBbrNQyeR8KRaMYaiZznPXcgtv2HJVWDQVayvrvfUcf24wVa7hQXtgzV7sEZf",
  "key5": "4uAkCLioXyYFqsK7KyHeowp8jZFW5ETeSK1bCqTCpjBZGCcaCTWJLhUZT2Gtxx1U5J9PHvg1uP56tVYb3P6pmwTK",
  "key6": "25uTQDCMzf7vdszsPwqSBdXGzmjQugySrsLuk2cmusrGyxhooZNyL1f1UxdhAXUmX3S7Zw5xoV28vaTmenszC5oT",
  "key7": "3GNSkQCi66ZSJbg42ezrhMTe9za1wibkhg9xou2TqyXtRubQha5nRsPvCsUUiXwRYDh7KUDHrxJfcdK69yEu3tCk",
  "key8": "3G15o6roWxBm2bqmzPkpR7ewCUK9mr9RjvcgbzyZZ77JexSEQZoaWc8bftKHAuZc7mEcsRiKxKUpht7cN6MyMn8W",
  "key9": "5nsJXAaKSBojKeebZ5PBNPmaov2CSxBAsKhGwCQocUkgEC1EzZHYvsXrFwx1x71V3JryNnG23AEm4HwRM9aLrHXT",
  "key10": "TLnjNBjnYAfUKLmX3UMdvTQNgH4Zm7e8fs1gAwh3caxKA22vuPdi2KHb7QmZrgLXiXPVwNaEw68XHuUkY4o4T7k",
  "key11": "31mWtz8vWcBhrt465628E8xAkdQdBtaAxVCDXzfS137H61f9wA8Gmb1ukVc8Q6NRexPRYftganUqGVJPzjG2Xkbe",
  "key12": "5DwQrqQTbo2JENN7pKNCqQhGSGVh8LvN2vEtTzdSB6K4DgJ7oanQ1cdNhFGvVKr29q3YWCBrhsVYVJQVibr7hrkx",
  "key13": "2HjqxTpXsCjtJ7noc4ZgoZ9ZZgP3BeC7ZgDhCb5bWEUFnqVbB3kuwWXoA3Si776a3XLene2H8Ys5porcDC3DLszh",
  "key14": "4iv7KG6BmJqKKTJsXK1furUsDGF7aMp8NDRhBTZwrBP6jRuy7ejBCdMuuCGhpzMWd3eE7RuLgJphnd5kRDg3Cbqw",
  "key15": "5sLZjRv8sWocV9cjbqdwRxfvqDf3WkhpETbKUoVgqWK3ZRai5NCKgkAWhZjyZqZzBfwsD7WxCpRXY8SmfEG3c6tf",
  "key16": "2ady1bQm2Vn7jJRd8fYfuuKXkV3FYWCgb3xSq7BoNmJm6j9S9MP1jLjfDZd8Wp6RSp5pfNdH3jAaWpxHgGd4pCQf",
  "key17": "4yszPex2GiYcCXsGa6RYECxKSPcdSBHcYPU6nCWxPyZrQUxqpb6WfgQXoZUEhTs2cewi3trnLJwmrMPV7dYtnCWe",
  "key18": "2Zrn5KR2FXkkdG5bDR31YRvDrmy1B9bqt7nhUzS9qXXvNa1RDh1q7rKNP3gzB7gTz9vjqkMYCucfW3PpFLrYDwTY",
  "key19": "4E6nGXbgczRHGo3HykVmfFqeGZLwQMMj8AxRpbJcsQ6HV9M1k97WxpWheh3k3UansrKHbEJbDfeMfpSWUfmpiHhC",
  "key20": "4HGzNHwjc1S5fLXbUNUSXPnY2JiecBVzMWbnzXBbcRB5Tpcw7ECXsRaohW2DL5r6BE9taKnUAEaAUj3YAdqUetM4",
  "key21": "5MbptsC9DSXE4jGFAhfBpCrTMh9rbsHSMaf4xc8fD4u7UrmvwpSH5fgDHjijWzMzCPJPpKq4XmkSmEeVhRgX4Tp7",
  "key22": "2GBnymevXwivjcW7Mj6FqaJ4FkMgUopvFjMseJZtBnhH7FFfQPL7gWshtbDSFTSAW33FcGx4HuXTjsqPqFpH4KX9",
  "key23": "3b5HRzjcXPc2xPpgVgtCQ6kPeuYdrwV9HngosF1eVWskFbB7rfhm4YAFKoVNaz3XSS7s3fkCghfxrtJLescaFJHc",
  "key24": "DFfoEFSYdES1wwKD8G5DyH9181zWHkP8EWJwymnGSobYEzAeqBL78Gy5WVELqQw9hg94nyzysfyrLfJqz6VGtTL",
  "key25": "Eyq5vHN136LM8Wzd6ZFgsKNxBhZjygegKjYYHHJ7qo1AUDjfge8WVKSmsbzAGnRxUUBKgC7tpWaGbs4Kvtd8U27",
  "key26": "4Px1njZi2e8sQuPnXgrZBRk4rnrsqvk3gs5mAD95ym1m6jQ8vm1FM8H8apADcRDnSKfcdQwZCDCm1TnbqwWdAsZH",
  "key27": "4au3tCakrmP7jtjLEqeGAgem3D5eKaz7hBcWbXsTeEC1YQmrc1YfDd3sqqj6b28p2ctx6g9ZytUCiGYknGS4j6Jo"
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
