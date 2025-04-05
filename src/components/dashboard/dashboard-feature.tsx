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
    "2j9hxobF6jYt4iasjf1prm3C8VaPUgDPtdMWwQsbH5zDNbYMNsQ6PFqkzHm7GdRYrckgBJJm9driQcieij1dtLds"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SXixbecHB3a5eJD8VrQLaJsLFm4aC2ijnTuzSkMaDoktL5wPAfy9hnREmhhEdjqXXJ8uj9nLwBatY3tWMpoxkoc",
  "key1": "2jHuyGGA4ijGXE79U199ezJ2pzB5ar9Gs5JLwrF4pVifptEPQdiT2ZSJmUbQyy2YqEKp8hnEncz7XZ8vuidatpM6",
  "key2": "3gzLo4KAxwMFqCoFxdQHnWsQajgagyVkpNcKT11xKZ1FgU93nbHkv1eRpCkcMWmfjLGHufgiBmKFEPtjPZDHi4tN",
  "key3": "2ZxScQu1DSMdghEhpRN1a64mtH1BEa2wVh1qHvxwtjYhBUxFhjbcAih4torwLUjqvBzvxNBqfRPvNw3HzCtd8vRx",
  "key4": "49EJf1KtfdcdmaoQbEm6PPxmjYaMYisxZLJGCvbddWmjo9kVkd1TXY94UTxxw8TNRMNy3uoTV2f9ewVYmmZNszc1",
  "key5": "2JQt7TdHpzhhgvmJoZdgUCHCaqTy8TkkxNTBvvDJKA9VyvJAJPTPRFQ4MjXKZENBwtZb3pvziVpwQTMtWN37E7p1",
  "key6": "3e5aCqwkZPeKSkZi24dPpuJnbX6PdNWCPd6RGsAiQr8VT5Cy7YoDSKRrGymLcJN78g1riYRqV6FforkSGHv4n9rn",
  "key7": "5XgWA6hZ2zrAdj5Cw2bYyCLqkw2ixcnfZjwWp4B4JKML4j3tQ3Tobb3bN9B41QMoLt4UKVKpa7puHriA1qTiM6DK",
  "key8": "5cy2rGC6erVnqrRsuyGqcqbG7iJ4A8snzvmyoaRrdtTNwLBN2TbfqFd9HWNfSM3Z62CSvrzEt9vDpB1Lqebj3nZA",
  "key9": "54SYd9R3AHTk241neZnWEWcVcbbSmLFkezb3gHpA8YX5TkdtvaViBybZnaQjaJJYbs7vEyC5hH9V9qAVpUCo3FXm",
  "key10": "4vwY8vGHmEDNTSDYewk2WLqm88ZEb4TzYDqeWYquAb2gvErgFNdnosqnFVQDVLfbPkm52kwYctuR6sygaJAzUkkx",
  "key11": "25VW2fGxAxdfg1GjZMQEXEcqkYvN2fAp8AMwBfGHXg7tSf3uNXzDGRwc49nXsyTP5oAXWvhzxq1LWxhnBGNALg8L",
  "key12": "5cumQJfRpEQZfbFutYnQgpDqogsu2ZKfi4gSPPYcfLCP7fS64wHQaNffZ1G5uiKUA8ivnipKMP582ybDng2E4Uw5",
  "key13": "2E4vGXhEU8fz2PECFu5hnNe6CPCSGf3ctQRxWLdskRZAdhbZPqRU3GvSavKRxjHkTMUJxKxDCz1ZAXkiLzqhhUry",
  "key14": "2bbzxjFf1FHrRdF4EPiYzw21ThpUP28KXd7zti66KZ2GhSdCn1GXhMoHYJxThGXSRnrgxcKXQhfGmEq1VvNUMjBq",
  "key15": "G3bqiJDqkZDsHVcyTJupQPpScP6v9a8FUGkR2V7acjy4i27g2Yovyhgw2PsFKVsetwndzvvpHjXU2s8uTiw2mUy",
  "key16": "3k4yRRE9FXJ4D4wo5JQjRbuEsMuUkxTKLkdUxE99theeb9wSqPSfiJVou4hvyRTzEAEJc8tRBVNpJstMPSTherko",
  "key17": "3b5D1gUY2JQfrsERWkNwXLKgzit2XXxk9SVpmHjpizswVHYz3ZY2xTtY5hQSL2LDZYYbFLH8mhPDqrXDi9Mo6q77",
  "key18": "3XpQv4dEHdA168ktW7MoPAXirszFRrt1E2TT9KrRTU6JmF2vqLE5eG3PanxeQwNbvrVY7iF48ev9qJkMyEHECdUT",
  "key19": "2kKuEyrsWzajx95mJaXGk7Uc7MhS6GqEWrJ7wKqm724UduF5fCpybpYZMw7VgLLdGo2NVmTHFzyhxnrR4tLqfmyE",
  "key20": "46S3GUdF8S66zxmNyRjXSZiYHdpVBG8xZosCCLf292u57CS4Qjau2UskqMJcx1TZoCFXtdB3sTk9zJucJNPJnqUF",
  "key21": "2JUQBmXWWoKygJoqni7F8w9YgBrGcSTd7ABDpUxRsu7ETTossb7dAgKHkqotMzzm6uTDchWGenjatiMY1pf77TNc",
  "key22": "qXv7fK7zAPKSxXD2XjjAhQxYYDvsN1yhL2UjPYFVTtYJXuwzg73iVzycAfMZdU7P1UT7seMEbrjKTFfrR5WEURZ",
  "key23": "2QFtNyCmXUZKkS3YHHiQfJB4mSWYSpu2b5tn1MSmdTQ5iXX4d7YHQ1i3URyQg13FLEC4T4WrEAV4RBJE7YuJx5B1",
  "key24": "5bt4BcmpgE2Heq1tTfZDav7nMkwmEa943NbFfHfM2izpjiqNHd8ox5AtHvkm5HKL8gL2h6GbBRwX7aCEyUWYCw2T",
  "key25": "4Z14EK3o6BLdxuq3dzh3KWJTnju9LiAnoCyxRrwq1fXUVF6PBjTJKfx3XppkNPsuvc4uPGfN6MJDHvngqiXezhZT",
  "key26": "5kkCE3w5VnhbNoZFYK7sevQFVRbo6KUTRBdKJQ9SavypvGSbzeS19PbknMi49dwBZEyePJDtZXfwjPwbfGcphREp",
  "key27": "3sW61dpJMtSkdgkDm2tSPDVG8Y4wR6yQn4jQfRi7of6BJsnaWZ5nMe6acatekPZctGxrV151MA7Pr4YBN4NLYATw",
  "key28": "4xgKEzHmHmML7FEhgYwqcpj6p1qB3hQn3qBs9gvz42E3KqAvTeuPmWcDjahbxs8A4DnXm3Yd8RL7U2QFdVisP6y2",
  "key29": "3Q8tahUhDrrjthySzBbqm8F5Psg1n1PDLYvgn11ThX9c7MJeSnt5MynTn7uAx6pUsWxDDDzUc9nXBMVp6KWbc4Ug",
  "key30": "Z98NsTaaorGcrouBWNDWmev8Aixy85xUswiyRoBWtEjVSjNHPshsrFu3yrMbE6vkRRwk7AQGPNxRgmtAUQ9Agzh",
  "key31": "32a5nE3UA3QjTi8QDByYWcxF6zXmttDQBAw75tK2YRN8LuL8QM1BanvbBnL2zTNeLgQcoLED7Qv9mrZs7jS3ceC2",
  "key32": "3SLPwYejQiJtFQPYNYEaFuHSrCd3bpDckXB9cSzbU3TvNbCEjeoEL2pWUkWSKXoM4a1b2Py5QT9kXiURkdMB7EX8",
  "key33": "4goArdoEqyktxsh5Xx52UfVR4wcrZrSA8asp2Tw242G1PNLjHwit7vJw5vjaXhU1aKwovoDJjksDegedxw1NvCwH",
  "key34": "55EkynJWTrJB8bqq3dWT5PJJ6zijDe7baxGFtv13fuFvua1YCUzypUnfdduSj1GAr6njxqdTGM8a9AZfr7yptDAC",
  "key35": "4XDbJaUkze1JnKWDxzAykP8qEh9cGHDUEeDQyhnFKUQzZkCqry9byHXgAuVSByAsFmCqcHigcQ7oxhhgqsAx5pHD",
  "key36": "3aTmh1LBpb3Haek4Li1crqbiP9ghVjt3Td3pYPUvTbz31VNvQEsZaru2hRG1V9LWi8rTjuKLgix1is3PBc2cxMRi",
  "key37": "9UiSK62rezm7YVPp5WcycUXvSfAgrZcsC1P3CDkpoUBR8FhjFyC9AAYUYsndojd14XYYRVxMc8J5HaSfFTfkhaY",
  "key38": "bdGc9gKoSgrj41aXmTysJBJiiEBAdaQJmr1r5zT4A8kbozfSiDRtpWsPZvBqjhBcEWdSVaBcJFbeAtDe8LMv6fL",
  "key39": "2D66m9JETAXUy6EFefpwfhNSEbinBtvHJ4B1j9pGivmBDdYTQMzVkKQg76yQn6BDw8nCpp21dvUrXJKGDHUabEd1",
  "key40": "5UsZqr5oukjy95YRa9CTsh5XNJsgUSxynE5zNiBgiRE4ZmWMgn8JisF6cqyPba4csiPQauBKKbSWW2omtQKzsL1D"
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
