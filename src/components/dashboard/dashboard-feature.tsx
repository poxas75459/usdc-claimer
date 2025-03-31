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
    "eLfQKPjWGADS95uxpa3MaaYrKHViDYEBLHzxHqtfoGBQT2aMKPJG2qT9NNPdnFrcfbhgvvb46trmZBxxS33PEGX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66XpQ9TgsPcSPX5Tmfzi432qf2a1wHZg2FB2x8nTKGkTAFTBEBoQdWvRhJFxva4m5pvvxkwrU5EaPsXD9h5ahD1m",
  "key1": "2zhzRc64WeaH5aTV7bBbru2ojZBMkrgdodBct4R16kQiWV5DQnhkVSL6d1fX2VVjgS14wnwFNjZnjb8873TQByLD",
  "key2": "LKVF9sNs2TZ3cW5eNnEB8e9suZxeb8sfXGBe86rUnfePLFSRzDM1fss42N6KVvw3a9RYTLnWVbRvmtW2mRAusS8",
  "key3": "3DET186N2jRht9oQQ6kufKAzQA8ZaT2y25789Uz6UBbghBPKNazcfXwMbkCorrzZisvW4jNScePBY5bBJoqeU7x1",
  "key4": "48QV8hsxx8kunYgqmqGVFGs7osXNvU1L7M1jwvvLewTK6btuKYkucT6sjoshjKAbTMaqbSJz4dMudbB9RN59PChs",
  "key5": "5QvkokjVb5aHNXVz4CtABK9dTbGGK3vcwsZuaAiLdDmF63LaLA2hDj9UmvzXxUHFbMGjL4j1dtmUKWv1SPUcF9AA",
  "key6": "4s3fBHSiEiEgECeNkMe3r8XcFKjg9E4mVyQn1WnBK1E2esf23niDxijsCrTifvkCRXNfHfEFMP9xTxJvLtUeQyFA",
  "key7": "2TovTNh9cqR1gW3sEroy42P89RgX9R8fgg4TG76LqGgqKs3pjgXreBM7cdUpRvyXCCnxoHHg6ZGmZVB5BR8Mbyxp",
  "key8": "5kk73a695BZagrJK72HZLMMnKqGKeqpsHhfNQa6R6UpV358zo3xQLms8sokj1hkzTtHtcmDr7YiudvobTJirDNzB",
  "key9": "3BHdvyUr4He9cPo1jZjxXsCAcNTryyRttRhSXAMs9qt4hhKXUFQ1CBu5XBjjj8DnSFygLaZSujvQTmJszrJxGV7R",
  "key10": "2s3Q548DSGVNfHmVCPEdBLcvpP7SJDthQwBE7AxB85n6ZJxfsLSwMJD39oMnhzX15hS2qVQBGypCkJ67TnzzuwBA",
  "key11": "2EA9fhjRLUxCUJLWZAcGkvcHu4A5xDL2SuN3K2aX4X27h76vj81kE3Q4qaPdLxmJDtpEHd6AjP3wdUZxMZCTG7uB",
  "key12": "jXkRy96z3uX6er52dveRNSjdfW7wvQyHpoEVfyJn9H3yNWvZ776EWtpDrJKYvgtDG54ZZVXaTpudx7yLezkVyaQ",
  "key13": "3VruvBQoDtBpmCkWpKE7Z7mbQiU9AZJpab6G2NEhXVzva1JexpQKE1DtwcPKrgnn8hGBK5z6jLrdLfPMzckvyHWg",
  "key14": "4ZxL4yQdxrxa5o7iGwBS5yjwc1UMYdMF3phzowdk2p585BkZ8G7GUUBhSkMo4BcpYmRrG6aSW9Du3Cf1rxg94PkY",
  "key15": "bcsqV3gQHakCjCLk3NfGCB6DMTBZuQB1i2DpCCt5KEiQpupQX6dbk1og3VCDNJopbwsddihrq7gfngZaEBRiW6T",
  "key16": "4yiN7RJMjwj41M1RLS8YdYNNyyv232Bk12Qo5ec9aipwqihyf28gJKURS8CFiRLETPtMGAZd7FLLLhRjUFw4vtKT",
  "key17": "4smb6M6vD9FJZuh9BkjLUeopTjkrrQto9QjgXAZcLLM54kyqmW41Grc34DioZbQ6FLjCZY7T7J6SwSptismaF5ya",
  "key18": "ESKNZzLhj8Fc4TpZH9GHoFfqdjq4C68sUZGx5ZAncc8bXBNJGMm3cp4tKHwnRMsQp9fpatXyrteXspK2R4zYv6J",
  "key19": "x8yGDNmxb11fSLbhoNRk2Hsr9pqsLkSsWw3UdSHuxPQBuouAhC52wAUUzmGPEvE8yCn695PvsHGZTZxQFosGtif",
  "key20": "5LY65MBz16ZdYJY6w8ptWfBrJzmXXmc4gNmoeiJjh3S4ogja1dw2xhuH5aVT9U9nTZXu5xa9R3AuhKFGaGNss76d",
  "key21": "3nzeYM6kjHfhjnHq9Bn1E27t4paqXBzwpHDDrWcGGFWMbwqhw364KPjYAkqGckwQZct5szCCBg77J3hwjNZvbHaQ",
  "key22": "3FEigHeczwp7ipt5X9x3Fk6E37gsEgUDzajBCrj57ZxMvivjeBQem2h7uoMF3Lor28Uz1AJJtysnQzkGG4DebHB7",
  "key23": "3XKuUMqPehdRHmMiBBqztcKrLbwRLjdMbpaqk6UnRdscbwxuTFXSsfd4vZ5yTzus6UTCP8z4SDf9FempQWGQsUZF",
  "key24": "5BZBTrhVmMxb13jpCxYR3CcJsfjQ6JkoW2sG9N3pd8dtjPQ7NsjfCgASZinJNPBv3eSbKA4SmekupcxHX5UWmDJ3",
  "key25": "4GA6WbFYr1si9GChzBYJhBGGGqwHsfX4tzevL9eUWvrWoVGYtRFDfu2WbVJy8dbbA99GSgoEcKJsyTZ6YUS441vf",
  "key26": "3JXVChnehNsq3noxeGkkeSKwJwQ7wE9eaPo4n4tJYhi7QJp1TBj1MqpYumVpYGwa2hpWrsJ3jdX5zfVmt545qYVu",
  "key27": "4QQefTBwRrJem7SRVyQM4JrHXk26SP5T6umeGJEqNXnEiojNJjUmtmfs9EhaUD3gwtUCmpsXbqyrAGvFYsEGHGyk",
  "key28": "62zf3Ur8j3PMgJ2ZqJNEBserE4LmsVScznaqfgD4YMjXHRdDuizWajfpCYznSmebVFPGNoLKwbTGLKZJ4zXyT9xG",
  "key29": "2b7HUazj629YNmBVxg5gvXTBEmknyBPaSHeRF6KCHwvVJAZ4ZEZKEVgj3ohWhPEwxAMLPV7c3jFEB4wjSYtiyUXz",
  "key30": "3YXe2BG9AG9tU2Y5Ns2WrChfbv4sqcjNunQiCwMEvpTDBrNiA5BVpWBPMggWdoa4uJcNffZduJyn5dAejDxZj7qa",
  "key31": "53beCpxwQQWaHWEbGW1xxf8VCNKw3trLBmLKW8aEBjuasgiRqnAZwG3AavGagNTLzRTnPVFvgDGKZjnh2eYZ2UKJ",
  "key32": "4KHfGKsThxjzS3bFnHvYD1hoFXjWzk2dXu2joYm8j89m6BZni7LgN6t8Zs4w8VNH9tPRF5mcbzBFP6JN8XbQ7jkg",
  "key33": "2dQkZB6veuEFiV16FDo5SQ1sB5Ffk6PACSWiZGT3gFk1U64yHvaAX5WCbpmzyQaK8KsrhAdWSUJx5zFt3WaKZkRe",
  "key34": "9N54HakSz9jqwdK3FdMzxdMRyo6q4Nyy5JjcEFNb4ATQYUCj9ajdP8xmr8t3biwKa6nnru8cpbtc7Bw1V21Qvie",
  "key35": "2LE3u93jpzdBTypDKxwUNLBk8ZH9vJaQXZbkBWzX8EbKoiKBqidn82naemSKiGekof8btZqjdYyG5mjtTQoZqitX",
  "key36": "5owvKkGWToZi1kGvwdCJuZxkfmSg56rjwhDK3qnZkeV4DBHoatX3M47JXPj8iEzbWax6yfCApDRPWWt1pa77Hryx",
  "key37": "2SyCUcGLeA3qtGkn9vqgtYQnuyCddk51pRjnJCGe1ks5nfdZDcByvsLnJfK1V1QZL1NhxGwdVnaD2ecxAGRn94KE",
  "key38": "2pjyoxfADV7HwXwPd1NG3u67ZSpUdGT3UVERXAQpuxxj3mAgR8a3MPauvRHhNQ9FpiZDeGYhAkYdxRk4x5x8Vqkq",
  "key39": "353ypJ3264Rg3VGroSzo5PdcmEuQx2B8adrpos7d1ZmWujdcNMtDFZSE3RdakGFSrwniL53kzjWAwfbQMPv3WSAJ",
  "key40": "4itz8RiYcKCaHSsY9teDTWEquXTn371MbdrniDoW2cdPJbz3WPcZiQFk2Fc14ZHCYntepVCwKDWedrhHH44Ed6NC",
  "key41": "3JK3e2iwz1T6Y25dW6kBob7XNnuL2BCHb7Nm1BVTdiUbo7Dt6WdA7cmyetGxVE3iAbmRzVfusbzrbpLuyVJ2kByj",
  "key42": "4Pfknt7HHLS3XZQ3zBQPkSHHhn5jf8sNuNCP6DmmaxRQRGDx8gUMmXLi7mx85W7W4Q5vyDDHByTfZRMtqjSBp7Kc",
  "key43": "4j2Se2GvWTfR78XxgSxQWkeC9zaGjsF5jDYNZt3PoFKwB6FBdtzXYzWSYnW15PTyiZ4JR4wNR4hbidqTrJNHesX4",
  "key44": "5D7odyXDoq55MKcukPvF3hdXFyPHcKGpYjeygguKDEYtXhpMVF6M4V1T5WnQXEZXoqsNtaLFRo6QYndoYsDFBw3V",
  "key45": "yajAyue3X7wXyuDnz3vUKr4PcZ1Pj3HygUcWQ4YibhJ9fJoX1HzYUd9V2d3Kq9FyK2U2YzdLkkGR5g4JGHSUq3e",
  "key46": "5JmXCUpef4JRdBB9zUVbPtiQgkqYFU8sg3Rh6q4hw7qiQAyoXE9g4XSwkFy5U28iKMxZ7VycAT4H3aCL58omfQVX",
  "key47": "2r2PcuYJtc3cFwzXx8M22qqiBJUwjMByNbhnMzWwxsTd79w9qa9FQoXr9rBsgq42735Xhyh6nQUjYkwLifCtUeNy"
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
