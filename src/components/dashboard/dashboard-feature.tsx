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
    "3hYEXt7zyvrwPTQVx5FZg1YWz9vezwDNg2bGHrpJgQgNJV7kGL2h2PXjEbXFXYmX8ikZcnp9W5BSaSAU4yioP3q5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tQzv4PbeCQ9NpE7Z4hUc57LSjuTZYqCwmPsodqwbEmNqiW6PEnmTjenu8JSzanFLvWY2gsBt4JSzBuwfob2SpwY",
  "key1": "5VUtKqkP2LNXnPyB8pUQujsE7ZL1gHjB3sFgiLZ8hezVYjaZLm2pYL9CBpfMhypvmoxmviVyyaCZDrVTy39M3PHn",
  "key2": "2jZ6zTmM1Ux1RtGW6ZrYSspYLLTatzXwtEz29Ac9y7Ed6xvnxu8vJziYJYzTVAvFuv7B2Hdjjjk5QkZTmEoJKzof",
  "key3": "464PEFPZigAVeheypCkorgzoyN9UYEfnWARvPGd7Dkckq5ZSsUyva8c9DQknWYM6fmJPSrLvJVjoMdn7Kt6RF7sW",
  "key4": "4tTjQc1qZRKH9TECg28YhtLknhhwEeeQbi8oWnJtUDB5Mz96UbyYCZWivbnUawEQNHn7fcMHnFVniEQwfCNaw7gN",
  "key5": "EvtdAAZ6ws1waHbJoiJ9mc3kQFyquizXERtktnuUhHg726whUtT2v2gJCGxGH94SbrZSNqWoRgctx8fsV1WzhsV",
  "key6": "1kNVUb9ZYbgDQCHmGeMqeeEypRLWV8ETpaZs5rf4Caw7ozDHBzHbpncUyVdX6wXz2XcRe2NhiDYkC3KGggUdEDY",
  "key7": "5BkKmxWZX7KAEK9yrZdqnMHRQ1AnzYk4nUWXdmtWqvNzB1bYYHsWg1dQJtRfGxvGsTkwKkhGCZKqeXfhRieQ7y2H",
  "key8": "MiLDCzZqnppEVM3a7Kr7jKv35caMjJPxxQLt6gyqtHmB26mftwQCu8qjnJ9bK36CFF96sFf6ekFUPhXyraKVwwE",
  "key9": "3atLZqhCXe13M2mJhCbMdeiYKPghBoS3Ywqxk5WfTukfnqSF5YfS1T7U5SuP4vAoacYkncsgHGdKuihvMjBdPbr2",
  "key10": "4yhWQxtdTwGWAP8SVkqDxfYv5rp6eoWC2XNk9VJ9u6wdCz8bG58Sgxw6JyTZWkKr82aqsUdKCUgkCdyBefQ6A5vf",
  "key11": "2GFU7zmbhLWBLi4Z5DMxpyuAENsKqnDeS7VaZah3NBcbRpC2fv9EYpmjb4u4vcnRGdjNJ5DCwz6c9GmVLyHDRX2U",
  "key12": "29UTjmjsuRPyoomsYTFJcPgW8ZbfAAaEikQu87amVNPsMM9g5JmSi13zYA682jiaoPrydUdJ4CNpHSEU8yz7orwa",
  "key13": "54K1Dr8pNNKN6HBP6csJFp3Kkc9qmotsymaGj4YXb44RSPctG4HgfRbzbVffcm7GzfEAma64BNaTBGKLxQKHkzX6",
  "key14": "1qAZitvHyVmXCatU83QaBWMUh3BYd1WVvK64ZVe8uunMNXFT4ogzmjHkFtoD541WZC8uw7pagiXDdvD4BpwgiH8",
  "key15": "3X5KW1wwi3t6Jw48mGC5JUDoyKm6fcYWDm51ePsefoXfGC7STnmgQTFQZe9RSF4ku689hp5Vmj9v1kUNTLfjdQCX",
  "key16": "5maZ3dTm68FSZJT8vSB3UXzPuJ3BSHppkWaWxKQrk9w2tjDkNzYiQD3yPnfdwiq4d23XEMxSoYhnyXk76mYaFBii",
  "key17": "44LZVqyoNnztWjUuQ33ZBYU8Zet2aBYRxQ4KKXo5fEf3xo5kCCADj2CrZKXcfyEKaMVNu31s52cNp8xtYcDLxBg6",
  "key18": "39gtgYEN3oTQZM6cL57fvW9d6E1N54fFzZTjQZQU4vqvtvxKVkQusBUGX8PFWk2vr3dAezUwYF7PuEvmGfCki1wC",
  "key19": "2fQ3qD3xgTqfjo5tPJsLGKH6wzEX6BDdK1EBY3dzcNn9xeBwxTgepGYmoRcFy675ZKLUjdgxBzUJ4Hh8kmnvuyih",
  "key20": "WeASv7ckMGpAhMjF6aivfJr8f5oH4kE4xuLdssdrMz2nxmJCTKTVXfZ8s85R9KKtzppPY2gooUcCDwJNzMW8jzH",
  "key21": "58S4iA6KLgtt61jJu6MG6pfreA2Yz81GNXxCGNCkALpsVsG6iArKX4mUZkrbdFzhSPiwvQqN7qArCKhYNVXi2TVm",
  "key22": "bBe3nB2sjZFdwDeUoJA1s6sEMPU5PLL6ytDPRx3J3L2W2G5aEtYVZacQW5rZ8ecHeSU8TD8LiSW5Yy7wNFPMYdb",
  "key23": "642HPxG1CYgc29TywGMqJZcm2yRC9hPy7ea7GQNfA8j8emVWdcVgMdQKP5Bvc6odnHxrDTkGMiEof6xGkPzRpZ3o",
  "key24": "8iTxwx4ygPGzo35Ae7QyEKBFkQrigd8MGi386oXZd1FVZV2cS2cCbBHkxPXnBnNuUqXLkiTchMAZyamGS8EWZtg",
  "key25": "2N52KzTHJrFdZzjXYeBGGgbqVeRaDuk8xv7P6986dUkdDEPwL8y3Rm9ChpYEZaYgJa4jEuv6tjuibVp6fqkkKh5P",
  "key26": "2kXa3KJy3ZmcNNHVXSggrvmBvDXGUQphfz2kxrKLCZPMqo5d1VjhEyNCiT53JKw4Tr9nFS3osJ8yNhHEtHSXLMF9",
  "key27": "4cTNg9xB8vnt9NfwMYw7qYdLsvzErfeqzAYZjxVoUfSayQPqeX3BQpCBrBvg2Rz7NpB2qe9ePHSrtq1aFNRDrYKT",
  "key28": "hSoX34XpyGYudHvNJEXgeX6rJKyN6xEPsR3KGVJhkqUxq2Hp4mAiG1KKjhgb81gYFjQiBJ7bQRWdDrXz2Xe35DK",
  "key29": "BEXZoNu6eDFbdF3fdjLbtgYpJ3qSvJ9odfsfpqjBkJGfT9VF9ZPNxfyEv4gzfsbP9f4kN7TEf1F4fHHUNykWKyL",
  "key30": "3oj5BCjKqSERYvpdaKoGx336wzix1jXX4hUwZ6wfYZfvmJ342vDa7NbKg44qGNzzBPt5LfRpwonseFCHf6zypsrE",
  "key31": "YYbobWKMbhg5n5T95BM8FsyVzDh86mzTpttsBSwQmjhUkjLhYmASjohFkdzV1uF7e8xVq2aq7rJFS8jKbnMeBnT",
  "key32": "25yYPNxQG5uucxxXyfCrpWA3y8oSsfDxeqq3U2KiYPionhKrnXW7DYqwLGEqtMign8nuQduzfRmf3XvfthfbKb3u",
  "key33": "2VQG9P7JZJ9xNXBX8jW2L1m5ZKsXtcxixjiMMKYeYGNrN8BMTUzi9Chrbk7uFf83RLmpNULxeDD3Hh9zhLLubYyy",
  "key34": "jqfPkjrjuWYFEKXgGBeNLqxh5PY3hnMkCgPJYzQkBuKQEnFZ5kzvVCaSt7Cjs7tuoBjd2YV2Z6VfTpzh8FheVmA",
  "key35": "3X1UNwuNYBVWPHH1hGTuGXZNJibpoU4L8PMzh7hryVM9VsKKhVCctaoZkk8QAtxopNdtTF4BPXSUaNRDYKbSkGuB"
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
