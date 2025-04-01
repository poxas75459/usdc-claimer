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
    "aX7EkdGiaBpCBk1gYdLtP5bya2pZiN9qrZZ6WkvmxsAbRpgtVadyTyWUjUUgNYRQUPqkw8jppiTWJrECgE4AkeK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bGdBWPj6NNSfG4yqEqCN36S1egfmHKRT2GPXEKLMuohs6uqy5PtQNwnumptdEmB8fQNgmxjPfareC3UwHn5GqV",
  "key1": "5Z5Az5AC3hp8LxYD5bX9M1d29yFeUjj8Ebrcqw1jBLVKyjqpDmXg5XJ8Q4vaGbjnJu7m5Huk1peh1dsMKjgfKBoU",
  "key2": "ZYRBGd4BMykefZ2j6JNkMLwFEwFPShwTiZfE38YZ5GNiZhDpC31yS8rLE8GbjsyucaR1YUrUyUhk1Xb5ayh5fSo",
  "key3": "5GrFxmzBUYgSDJAEFrqJ9huS79WLK7kPc9Agmuge3zBkdoFqQsUxhwxCtVRQkb82CbHhS3WXuZaEYRiupCcuZubA",
  "key4": "3geEA3TfbUvVdt1zXDb5jtEmevpDRdJH2hb7u6cByBKAiHcSjSKQ4FKCRsA7cYGmC5nmoP86bThqnXAecyLsDUkv",
  "key5": "57wZoaXuXCKTTMi6fjRQf2FJGV9HRWHWi3TT6n1TGHVWY3Fx3SiT4aZGeaFphYMBhsNJECaYyBiMmZjDQ8T2D3bJ",
  "key6": "3aqZKH6cFUaPJn1UqNt5tkHrAfAWhw4Ku25iCwHGxvCcn4V76Xvs2x7fH1xic3MDLg1qJ41AFR2ubdxBbiYBQAoq",
  "key7": "5Po97LwvhTGYeB5D7aVCuD7KKXXge87NJbhKvWDhvTmzLcwupqjpJx5tKYtWYMySFkTiE5uVVdcyXWryVvEprz1Z",
  "key8": "61s6mbwkKyrymB5LYHzDvMHeUqDP5ToF18HuiWGpyN4L9DvH4ytPquJtxfdjjYR8DXErd57BA2FGH9T4C9XiHcL7",
  "key9": "52UzAttJSLaQ63ioRkZMo9MdDSy8vBuoAQTxgE1zRwavKJ39836y6QafaftfTXdKMAikY3vnKwmTUCkqZAtpTmCp",
  "key10": "2B2VgwSTNj7EdYRvDeJutRyXmJLNdzeyf51NPm1HuUr8VzVP9kvhsWqRtpkEF7NHBMpfrcwiKG6ynzCTfeWGo51x",
  "key11": "4TYAtgSbVYaQaSQXbvDLB8jatCUpiGugbjmX2AxV6zHvSwo6YtQJQgmaz68Xf8DgY4cA5kowhKpLE4YbWtLMjJHp",
  "key12": "2ReUX1kJc2Uk7SCQq676wnUfhWvQMjyDZt863yGGHdj8cvjECFahMMydr72wnZb2dY6tmMhoNk2odrCUTSAHfsze",
  "key13": "9yxFXs77FDrLzEnBZJk7KP1N8JPR5MB6Mwc8zfY1fR5Bc8foW8mAi7u45WMTFdYBs6dzV21RKHEENd5NLMGjtHY",
  "key14": "443KSR4BR1jm28tJRpjCmpUYbwvrntut6gjoTjTWjHXsFYKqDb9GbcfLuas9HKgHou7mwLziBrzCwRi16yBzBQoN",
  "key15": "3hwg7nY1fc75M6H14njSx9SLCtgitmzz3gXeB9fZjFA9vFNHRCbhJHchVvpSRKcKNsypt8ueCeiirSo1ePArpeEa",
  "key16": "2ugup1WUAAuBDLtiNHfKp5D2NW5Mq9eXKzaLLv318rYsrYoNXNeCzbqp46HnwndQrcthFHxJ41jwzEzf3tRXZSnq",
  "key17": "2Nfm1xzEp2GZcF7o45TndauxjVAjJ32ZiDmYGxBAes24ur1vgvsEZ5biqy95Ku8wGhxZCVkwwSKWGqGCyPNS7ZEF",
  "key18": "236QwUyCxD9KHNT3aaan1z2naeoNNeZ7MHAwFtj8Ch64uQbJbYTgnw4RFFhbq8ThrGRLdipQtvSnvnKS2T2GsM2A",
  "key19": "67J4LA9uR7aCbmy8NXzxcu77eaWtrJqTqM449ADFsqGQJ3xKKjNEeFYMoqipW1ByaHhxWjZJFUStzEMoj1f7WSVT",
  "key20": "4WXKzuCHHn7viAzNgSpSoJM6WWkD2PBy73bc4547sT7UfYGGgDgx1Vw8Hr3VSTcRU195p5bqhvxXpgnKnbkf4NEq",
  "key21": "3WUyV7y9HJfFwx8x6C6VNQKcgtwcxJDWP5Uk43T6fRd9gmngch2pS7R8kxpQ46MqvihT9F8cMJbw9PVN2TUGPHFs",
  "key22": "esy3ifUo5zJpBWekxg925icpRF49yWUQ1FcobGCaXxmBs8jQ2wcjyb3iPzg1EDtzNP4z7fJbfFKL6yA3r4AMWpW",
  "key23": "3j2DUneAYMBYFvhNwfNMcfxq88nScmZ9sWtKMCi8koY7T9Bd84Y47GuPTAG5FFVR7Qvp5gMgy2g3WjrYQ6fdXS2i",
  "key24": "YpDTzqcBApiWXLccfPyZpLV1hhde9WKh7ztJLRxeYHxaMZZMz9fmTin8FtGRo9veEX1q3JyQLwpb1LHa8WSiRxM",
  "key25": "4e1hZRh27UHWd9teCh4nTqbmu8du8fvNHAdK432cwepE2gTeqf7KdMfpwWKPJuKKK5N33MeqUPCzKcfEAGzcVN5a",
  "key26": "H1x4tsGhnhL7Jfs66eJYUGRzfV8uA4rMHb9GVEk7qTpwroUn1WCsUnMtN8R9xv7xzoRDEDzioRtmqWUMGbg74q6",
  "key27": "3ZqNb8a6jg3hEsX5BozeQjgQvhCbR3EizgMDdUe8fLNw7ESHHhxoTLaUjZx7JXyp34K8Hn3bAdKJvrJxMaqt4uuH",
  "key28": "65GMB6xwm4PFA8YqgEYercoMv2Wzc1XWadEyttchobgJKGsoiKwPeQtMuEqgjWQeerST1ptrSebafssp6AkGPReC"
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
