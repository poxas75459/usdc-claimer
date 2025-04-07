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
    "BeNpeUAjsmJZFfoeDH5YQCmsNci6wpX9Mqza6zcxuuraiPqCaPzMcDj2cdj1M1bSYpqMKUGSc1tHhHPL5Ayyr7Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yfeu1sbRVAqT6jM1NGLFenhWsdDDPhTn8eiWTbKJk7KXGZvVHkg5EB7A341U8qzfcrjnoX97HyAzoahdRooZYXt",
  "key1": "3Z4vCtFS4kFpSnxNTr1M2c5bqgfC1XW5pGi1fHBEsKmCqDshj9zaUnSvBPGYz1qz9We9ghQszmVhkH23qgo437oQ",
  "key2": "5wTrmAoPiPEvsUSX4vGpKEnY4vuwosbxxCVeZrzAFJHdbxrVeEKp4PmF2gYS7m2x3DTQcr1esjYUbuCVB7uLDngL",
  "key3": "vDSMc8wXuXiEZRoJZeWqLWRwJbbWYxXXHqZyQREfNXomCS73H6bKi83C96ZSB7HgZCzivE4kRum24BiDXcegF6h",
  "key4": "5G9sXeLmeCqXED5jAzXZRKTkwFb2WZuFxhbjiv1KWWEYRo2msQsQVFEfyy6P1Wqo68Ye4Fg3aEEjf5qZgQk1f8JZ",
  "key5": "5yw2NYBK3b8n3K3JBfJQRems4Sgbug5dFCpcMjnXVg9DQXGzNKETbeJ9Z7gWUfe3S3bUyUzdXXov68ZBmy1B4eC7",
  "key6": "5JgUHHqCjsPD9EoBY3T93N13hgjnBKhAqURg2xGmfTFEHMgqBQi3PgtaY1dddmA9SVSMo6kjTQRPzZZvHTmmZSno",
  "key7": "3vNeFSxDovXTyzCsZAupLmtr3wBAMxSMKXsht1YEtdqpWkiSjSB769vvgoQnnMR1xBS6ZufT7HFGe6vXaPrH1wr9",
  "key8": "2BGsxKKHiQpCdZafhmcg7MtQDpuYWXBrHAMRovMr6sTUhoPF6gmV8b4GawZ7KCvW67bSv7r7WeGVJ5dpuX5VhgRm",
  "key9": "fa2Xp1Hd3HfCvU1KMf61ZEmkGHKUsMe6FR3GGnyA3k3Xp7YNfQEFhcNz8TUzAzmfEAwPyfXYdwTtiTmZa4RVtQN",
  "key10": "4QxzogacM6XEZ79sxjRwj2TAHvp1rmsCjeMTa7rPYroRQbU6K7iUXVUNTqMLEw4xiGy8eSnL2zJuHtDvBLZvhXS3",
  "key11": "7XDpSHebbogtehpqHNaocjvUoho2YE8YMaHfe2dkkXaTAdbEfJ1hq9ES8RGjH19by6AUbWDvGMsSXQRnLV4sP2R",
  "key12": "4EvfC5EYNpKz3dVx11GcxKpvq7KqwoZ2XpReNfpVLVt5RanKLHGyTmMSRyfY4JvLF7HnLqPrqQUMoT92JP1De2ev",
  "key13": "2VdApZeDnqMBS1Fi5gVjNb83nUiaPa4REyuz9vgpwPxA8ADn5kqMe1HHxVAeZsYwcWXErPp21fy2tHyz2PGyCYEG",
  "key14": "8VF4FRVimNyxNYf3HKvzjY4NYutCXAAt27qzo3VJ6uRmiBbQjv36GUKjkVtyos4p8noox2nFRi7HJJ2KhJdywML",
  "key15": "9mCH8FhrGviLpccjUxKPoukD5fSQjp7eEhG2xJwxXaLr5JwY8KgSVKyWJgfLiV3zdFgjvTLciXBFRbXUSKr4xqK",
  "key16": "4Z3Sig9oob52fywCQtdY4gQU13yxms83F27mEQw2rbuhmMZVECeUZspVaZk1YLoK5QNzXjfgNfcuGN77EYY8Y4Q5",
  "key17": "222Tw7i8mpQWQBzJhLDrza4dpGQj6vEJXyRnLdKwdrfERSN8z1DT1vUmKJAoCe2h3UhQ11fPNfRd9z4ymW5spKiQ",
  "key18": "5jmDV1FULTkoeHZFPy7dGT9YFVreM58LcA9JV9sEDTXPUmF4qNFXfM5nGFo7CLGCtjW8xmkVtWgqWRSdTTLYhoG8",
  "key19": "2YNdFwHPJ95oVaCdvYSpUYNMo62rnRVSYeNYqEqwGkuQYEU3JejB29PCNrMa69hd3YF4vuGEpzy5cx3oHvHXMWfb",
  "key20": "5viMZvyeZJMxTngVGdq2XCRgsnXdyc3z8edRoj3MSUTJbUVtwkCHqfHDJmnpvVEqpVEGBoQKFrDRRa84Pdkm6QMu",
  "key21": "GXdvqNT3J6yX4nFeWxtxgcr797pP1PgPNYhmLhd2s4r3PyHZRPx2ePixvnnXpMpkpk4EpjLwHFyNym8W3XfVmhm",
  "key22": "3Ecn4cn9qrL6zsF5Uz3zXes2sgGNsxEFUvJwnACC7S6CJ9dQdBubmJUw3tFbu1Qik9mjeRM3Te2PWwjWSD2MqX2",
  "key23": "dcSVTSpCXeBh9gsrmingfYKGKcPfTqJFgh3wRB89cnTCu1oC6MH4cD4fAS6tib1j73DqurU6pyAnikVHBqDLjC6",
  "key24": "3w5ntS1JJa8L23hHAoPjkHih9eb6pSfuBG4HueMdbwaqsqCXpTHUCG66pK56366SBMcHMR6dTWJ4nunxdyFwNXuu",
  "key25": "5UQbZjJf3VoqxneQ6CYdqw3KqmGGGGrJrpHpB1rvRMoPwcrW52ju6n7NvD19KfCMj5ZJorfrK86j9U2braUf58pa",
  "key26": "4hvURcXtfm7Lyjt9ScnsCk2J7WmmvdXivfMEVmAtdRmud84sFdPNJxXjZ5uBGqzpaS2XmPTyCKw16RwXYVXuHRNW",
  "key27": "67mMqxQivqDvpi9u5mxUeG8iyyjsiyXtQXK5aiGMihqGW9Swgqo5MSKNhbTGp1ZnZDH1dKHqtW2F7imq6a4U82gj",
  "key28": "4xpEzjWuejWA92JRMH6N7VZR6QRReZtHxeG8PadHBHw7q45of4fMMbqciUKXpXNj6oBS7vivyyCH6M9mjCQLqaVM",
  "key29": "55uvfzKxvB2J8XjDg1PXCjxmdFCUpfBjbMBbngtkkceab7rXsZqK3i3CGNbGZRaDgc7JCbPhS2QhaywSERaYtubc",
  "key30": "5RgW5WVqXCXjJUepSpcEFhFa2pZuMbYce3Zt7UjpYfQYmNaEzRTJzGqyASda3hRQEBi8qZLKUJpQjBKCJs9Nwb6y",
  "key31": "4g6BdqurzwzfcF1AoA4oMZUTfenvBmrzH7QmoEQDVrKZpTUkZeRCwUW61egeKAwnrWqpNfmqiARSa2XL6xbfEUCz",
  "key32": "3D1RSscxKwG4Af9bA4tsaP7B8ymHSVPJWpqJX8AwFhiz4WANR4tR9tvMY5Gd6ANUu8gZZnujQfSefkLsF8xoF13m",
  "key33": "5HCu41xFmCK3a2W81FEE2JKoiBp5V7M7pmjAQf9GUPAUZ7FYRHutiaR6MwrxDyVJsUvVHP77QkCMFRtDAvPcc16u",
  "key34": "4MooPAWCEC7cWgsB2fA1fXANeBPpqqgL2rZAFUPgnmv5T9orfdaWPTu8U9yioMnLRATqqzyHoSBB1vvQXNSNY4St",
  "key35": "2i2uHrwjhHH42ryXjWTwr921stPYsZf37WmLP7q37AxbXFoaM6z1igr1oGvC4e5iMDjgT2MdfxDDfiVhm15YMBKY",
  "key36": "5N5L7EKsogJiqnxchgR2BZfLfV8qiLJ7fm3hNcka4WjorJDrZnv1C7PkG5V2PjqQwy4Vb3DNF5SB9a6LSj6ymvVy",
  "key37": "3n9AyC3gWWjqAFqZm6PLizG8aaJFvVdMRxWGswHVTeCNZeUW4fafpe6vEyjZCKdhssKmSWkxxcBUyaxApiVPGudD"
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
