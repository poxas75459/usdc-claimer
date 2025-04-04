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
    "4AojSgBba9fPSEHacaGyqFdYKGT2qNE586dJpbsLnkjUGkDNBojAvRnco4KcJNXMdy4t5FGE8XUBxLzASvNbehEp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BEG7mngPA3qNk8pXKqti3okguau4UnKRKmRapGAznEznpFV5UQdztETTJSEaTBQmWx9tqEX6prCnbUKAG7auHJL",
  "key1": "427kkKKEgJi6jLCgDG1GjmV1iKRRnP9HsbHUrotfN4YArfY1iCoTbXuUcCrhtF5wP7XhYepuV7Uij4FPuBqz74pq",
  "key2": "3CLrUyBX5PSwLfadetoH6QyGPT7nEK4qLqZcDjMjRxADpqFVAJtdB9Y36vfwm1K2YKmVTvjgW1ZYpcBJR4JTkRJ9",
  "key3": "3eMeU4ZbdnmeKcqcGsnSmu54yFyE6yK4JYBd3JE7TnCEf2peh5La1u2bTpEEva2JMToU5yVhPUDeWo52Eao1D1Cu",
  "key4": "4kCXKZZYv7AiriZuAZ42fm8Utr7h2Tr463a7FP6pGjHGSDVMWsNSg5rvT3th4aztVD812eePPzYUsSsPLc6A8NFB",
  "key5": "4coe8ZeBgWY44DEzPTwkmsHR2eedjfTpyBKvsRntSQYbCGWEb6h4YX4CcvVUB7mPpRg5XWyxdLraUXjUkmqJBQtJ",
  "key6": "PPGkrmbVFsHYLDpc56u679mTAqvBJ2P6PX7THfL4WM1UDHaCnbsECWeYW4TzdWeJh69ecPW5mYkzNxK6SfEfr6a",
  "key7": "3jprMfM2d2UZkp6Rd7decZZmmcCPZmq2rQbBcVrhuk7gxxAuHyUBUMXE368vRf6gnuR3TfQQfU1Uvo3aCyicHTBP",
  "key8": "3MeF7XZMzgRhf6wWAinLdnnQLsKNjXkpnK1KpyiWSUKWoBMat3Bc8oGvPmGZXtweegrEzRf5xSKXJfDMqmRhT5nv",
  "key9": "j3fmAm3DmsLvyNDadcBVzfRGKvtbzpF2FRX16mjXZt3mxjjbWtDCm1gdXu54evdFpKVFCoFvzZaRes23yqYvvZe",
  "key10": "4XTWuREGYeZuzSXuT2exZ1o9EPMcSNhBawgLALTjE7ax6ys91kuZhgfdbQajT6sti2Eg6tghsUL3ZEeus5TKjqZ2",
  "key11": "3jGpt52ngSfcVxP3wZiTToScADhYzkTpcqiggvtDf8G21ySK4UWAYSr2ghbXiB9hQsWurhXWUorqJMskG2gpunKo",
  "key12": "5Kau45WuAchZs9BUwMwLTnYk6bT9opEseQWiT7rhphHp81QseVckaZe6b7W3HgbRkxHrYipxDt9deBoKZQAmLR8L",
  "key13": "2t1xWkv8dHxEAEYc85WVH7A7wMQsaRy4TPW3tVPMGV1s7ZQfZqzy1qfG5afB2LzggoRdBevDZYesZVGAxbs7dXtM",
  "key14": "2QDiYwoAXFyKduFS3CHTKs6SV1NuBdMrTkCLnXypHqy2ndAcsoeucwUJ3unhQszL58Aj5nMLhkVSG3wiHj8rgLd2",
  "key15": "5Hzn7YrckobzMTCirfeDPXAK63YdBDEy1YiWTGJQGjZqsS9sTHXNzA1PTzmYu76ViHueYtPZ3D1WGVCStJ5tS6Hx",
  "key16": "3MtHF9zCuV7hW7i8WEfCxJLjFadWvMEsLSyUjvegzqDRsUhF6eY7dD7Xg9N9T3RHd4H5Lx4dF2XLV2pRRa5QC7w5",
  "key17": "XgoEe6cct3vYnmjefRsih5TBsR2n3tNG3xa5MJmCmBXAenJrpEdcr73fU12oDpfXgtwtCvaJw3BCLXYwmLeFdgP",
  "key18": "2JiR88oVmU8E25oBFBTadWfY9DmVrWnx1wF3EK8mcgGgFD2J2dkC3ymNJKqt6F9Q51yhNZzFM6aaonNpCqpcjCvE",
  "key19": "rGkJNMQZ8bmLycMet85JvGjpSqUiRbTAVfM7j8mYoCZuVJNPJdEF3K7Nv9w8BZg5sXPggAgATbhgZ6Gjg3o9aXU",
  "key20": "2dAECi26XxWaUZgej7xetKL3ngtMnUjTZiF2pWVrWnXLyrSfx2D5zweB4jAJRiAfYa3Az7mRhbtpQwWjVXgVEfRH",
  "key21": "n3xSoKmZn1fhwaP5Re3J8UJ7WsTD39oACYwmnKJZWgKoe4AP8oj8PtTdrXKvtT7t8FLFREmgFoK6mmuYotqArqQ",
  "key22": "3fErBEjQkFt83JdQNHp8vqcLvEUgdEvqQyaRTstSrKMmovpLfPGQzeZ9LDgnYPLDzspuToyu4ZfRPFJbpWLgjHLB",
  "key23": "4vAj6e7uE5KMhXnZgpRTtMzWCJcFkY2Rk6CdWTDZRQgiDSohSVKChH26WYxdWzohGCN6dJmexGBwFsHwAHApCXjC",
  "key24": "24RwvSttDTB3wMJ75ezEjh7eRL66ELd4uM4yPCfNKBPM7Kp2j6kZbijTWe2T14cP6ihAPQ5hJ81EwN7o2wrSfYJU"
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
