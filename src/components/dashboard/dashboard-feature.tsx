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
    "PkdMJwbnQEF47XKG9FfnHnnWYWyF6AGDySEc8AY1qqo9t64KTCGCP1CwkavVzdxhodUPSAuX5detTobgEtVEJH8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AFPaQVro2mNnKUMSzrPdzXVa1nD4qJ1PEiw7j7i8PMYeLmQ8AV7PoCXMbWwfBcfhA2AdoSN4QvrGK4rmqXJ8iYT",
  "key1": "ECiWgzkmJjHTkG5gJ3rB1ojt221BSZV2dzoSqtG9H2QzrF48qvtbYhZjhTnKMnqqYqrxdLPwWYPoSsjH6a7iAMa",
  "key2": "5vMTUdpVmbS4onA97Z5QqGdZVzeo32s7nKUzfbFjRPFMUC53RvywSxPx6Zbmz9EoQ1LEh6nD8dgiGmacoythEVzh",
  "key3": "2y2jSvBm4tStac9PffCiojhJyei3ZERrr71A7NvyksHbZmVqUEgC6bAgBpEsfArm6PyL3jExFdxcDkABDUdMRnm",
  "key4": "28zv1AjKrkbAap6P7XjX1T12attd4bMZZBMTGpEZx538kXWaG41KHUDdbx5ApqTKR9QBivXRiuNGTuxgWPRwqzr1",
  "key5": "56zj1wJEgszcFM8uC8C2BPNgq3ZdS8rZfPCeJf9tDcXK3RU5z9xBZ8ZthQmGYoAB9abnV1L37WFTy6BJc7MqQez3",
  "key6": "Z6LtqVTcHUjwWjcDGXhRSravYzcjpFiwccBrrcp3xWc3gTX8t4gHRr6ewLo1vNLL6DDGT8UCX4z6r8sJphjRjyQ",
  "key7": "3CQpZdApEUTVufehpwqVVe1AAvMT2v6drsiX5XuXQFPpNqUtBg1N2tEp7QxzNPyxJNzgF3BmZ4Z5V7g8R3HjaY93",
  "key8": "5tqTP4yEF28dPQUmJVtye7hwNqBc7Q3iHj9Zd47KtyU6sAxqPJztE344s6YoJF2ehJ6QjCqaqbA6YkjH7V34Y4N2",
  "key9": "uTyZ3UXY53mgxJ2EWB7aEgGjv3qkXGehMKa5U8dYWvBd9xtZXLLW9dahYNdz2vq5nxGnbB8abE57psAJ3WiLWhT",
  "key10": "3P1dnWkC3PjSgd2HYt2BEYdm3e58JaJbG1nux82pD6YtPYcWjiuYsrXEG9as8JwhqEqJUUwxD17KYMQWvHEK7dgR",
  "key11": "35nCwA1oEAJRHzeDPbQmLRsb6mwKS7RbvN4xZyY9vCESbmNjeSwxVjH9mVzXMt2jxVURQXCJtNQfa1dLRKyPCq9L",
  "key12": "BuX8Yw9HMCkz9ZPg5iQe9whUJKBEBaj6qUyLv7Pa6JD822dxCFerdnT6fmcjMKugpNqRctxu93ZWmQtmQRYpGxB",
  "key13": "5NFax3JmWxbMr7r57BxuyyLtCfY2ksxnRVfrXQB4wYQj6eZgaDWxbUWQ8ngs5vTtwXxvcK6ghPHQdk6GNqJ54ubY",
  "key14": "2cPLSNUMD9fNJoHYbet6hSirNf342mXwtbR2gnSMwHK1Ez4Mw7UDZgLWvUDZDpB3Ln9XuUEthfyXMoeYqxBHaiQ7",
  "key15": "5FKBVYFmy7SaDQd5ziqgo7xYixCYpxgRfwMGz7EcxswayGZcJWRkot2EqxdFWEHupYK5v3DxRCG21ehsNNfTNbWr",
  "key16": "nk34Q4gLrVbSvL2tR2AUrLy7KDVtpyXDjDWCK8SUQ8JipX2sJyErezcGQPTgrbYoB48j7vYQR5PgbM6cLF9wHr3",
  "key17": "4yM7BXE7HmGbjCfygnmvEcivrVTDuCDifYipuBPTubV5zfyBCHiiFJgb3GngJEpRfAQahckSSCJxNa5ZHsMJE6Z8",
  "key18": "5Xm1oG5tHyYZu2v9rWDchsZ8Rt5r4ZwDMKbJigjzSRqbwickMBtsn377ZQPmHSRPBESUhFuDcHEdUHZsBJwwQWeP",
  "key19": "2GHzYKc6wjTamqeem9Q5wnR5AaCjxTtMMgvNx553n2bSKzuNbChAdUNhJZMSxj59dA2nW4ZXhaZdz5QHw4JSzjWc",
  "key20": "3iSgL7NKvRB4rqjyrWHg1UfotMSSyDvXc69pkjn8U79VSCKmc2M4YvUnSEw2xL2q3VrD1TJzZBnAZQkr6ijNp7Q7",
  "key21": "j5S4TMbgx8RYAXuqhFgQ46NMqP1Rwh7QVFmbnxCLAxT9enTJc2e2rttKSWgKishEvjudPXDMnLSw2w5ThDg8MTK",
  "key22": "3kE68xHCJ5HpE9JYeiL2iBFdCJCfTHbsU8Z3eSA11ZedgbLmX5HBfikYiexfLe6y5Be3C93RxQjEWJEPWKbdyqEq",
  "key23": "2QCe1E9cJz5VzRkxkABfQe2AbWShKBxMpHPqqB2GZBELSv8ekjUyzP1y7h6BoEP7BRaQ3yVcMBz65m2jxNfrwtLc",
  "key24": "3Wf1acPVGUecLKGuiDmwU45YS2rDdTgQgQAtRNQtkxmHheqn2xKy41iFW8Caw5eCXSMrsbveE5cRK9HnPBFCEZq4",
  "key25": "4v5ACdc8wNFAtEYzam2NdnmvedW5kPVAHCCYovvJUbQT5BzJGKVTKJ8qiqs1jaerN7xE9FbhSvF1epVgRqxsHX54",
  "key26": "62crtG4qwkRrw2VMKWzCXUMFUv51xXdDfj7WyQKj3Z86SfBt6XF6eiSVKEg3W6h4tyjUXpjB5iTGptjzTxVYg5Y9",
  "key27": "5tb9QrTtC8mKmxPktLVxUHX767FsVqKYP2seVEWdzhzqgAwHYMA5EBiHZuJRsgUiwQKUH2DmUo9t4Gq4KrGdrUKB",
  "key28": "4jgqNMzuhn6x4geh9C9GAq1e271GWNfKMum28fD5PGj2oMcfCjkiiU7jiaR7srgqu39NYvqXZoGDGtKLgPuJJpSf",
  "key29": "2owUk8H6ebw7X1CJyzgC6aJ7XPw67xiMMdC9qmbEY5LKipmAbq6jUrGfZiMbUanYPXUBqDswPTwtkBBwzcxK39RS",
  "key30": "hk85fCRHfvgyojv1qnByv4KeUzqJ4m1crduYEqRQNfXZjWCHz3VzgqmW8nB6ekyeQWBvxYBU61Vcfd7Gwk99uDv",
  "key31": "2LGttjTggVwecKpz9zs7yspcfkydKQVQuDgZnpW1XsxPQnpsGSWheqWMJzi9pzPGK2ahKN9iWbeNogDjeAWTjvr6",
  "key32": "4prGaJxtckuTTRF7TsD3dTNYD8kvr1jf8vEjf6WSgx7eXiCrcxBnoEyEks6wESG8Spnm3EC3c8SBNa3Sd9Lex9ha",
  "key33": "G33MChHoVz379sFHbwZc23GEJf8EpG2d4Wez2XbMeWX93LUAdPAq3ZNqApET4bNnd8WmqwW5Z8qd54yzNC1uJET",
  "key34": "5REuszV8DR67x15RBmWVdacXppMorKGXD7Karbf7khsGTFNc6NjgALwdepBvLsK9oymyFiUZJuiZoa1npjQSjfgN",
  "key35": "3mfE1uxjcPpfPKJVx7VquR1GcQbh2eRtmJ6diLg1zPvdodDttKoP4ecQ51KUgRjPUeFPUw3xZeaUMk6HYmdU7r8e",
  "key36": "3JBk4ZsEn9GECoqYv4yELppNAa3WzjHYVz5o3YYPp2GNYPyuYhhPDH1XCZG2fo7kfEMN5vELh77mUW9u5LEDGuYk",
  "key37": "2ySJZSzvdF348VFHvV3PprBCEYQTzgxg7KtCCAgmG6ZQpTNVDcWxqJ9RdrndUXkbKSsADV2Mr1YQU5QjxxDPSvYj",
  "key38": "3o794GDePX6gxHZWd2rq2HYY8UiMYbAJakAA6oEC4nwNXhp9HduwupSgxoQ2wDwFDmVhrogFrbvViSHG26oftWcv",
  "key39": "4S6cSobWrsodzNpv3u4gnsWsrx9v3QisCJThQptquPk9SE791QVWVFwMi5zVndKN1SmDxZQtJLvb289UQZH7cRT4",
  "key40": "2oV1kZFseSvEMURQXA4w8mDTHojpuMPbmuf4JAs43Ak5Wjms9nxjZXt3REyj9edMvaapLvE7afTceovWoBzrQoGp",
  "key41": "3Fq81HhC7QCzfm94wULXvMqN7cy5DcehoWpsd8BxDSHW6qYiyFeSLqq6SVHtte3UU5mnVg91982Bn1HxMN2XcWwv",
  "key42": "5YxiJwmtneJYHaV4S55B59n92qHxLT7Auwujza37beDGZF4vWsA81y2XChzgjw8hTe62NEdSM1EVzUkNYFNT4Qhq",
  "key43": "2Xrm3EsvAEHUDzuwP4KGBW1ZUwHguaRQNCitjEAzV9D6ZCHuyrpUg7qQNhHujtrTdH7izjGEQzsJu74aupUApm2x",
  "key44": "cj4nHaJ8qgdt2oQPm98QeMUyPWCdBaJGQHN1zzSxHDikGtKNCGjwQ9S1tUJoFQ7rXgBZK1mEA1YXX7mutoMJTVg",
  "key45": "9odwYySqiP6TpMLTSUaPdVR8FWQjMFrysGe15mFoLGEs5u5HNgQbKS2nWSUGorksntFq5LE25bhCt7wznFGZZPR",
  "key46": "5rgpvCcAgR69B3KZ1d1CLpnqdgiKueFqeHgZshrDRZEvbNDMZdxD44vDWu5dsZ8dtHWGwWrJubYM5dgnJDFKMK2T",
  "key47": "aSH2aweK4bMV9XFj5FsWrFk3S29xYaHGCptHPJXmmvyQ2dzHccsxcGFpdZSzjuYhdCo9udbU6Gd7zGdUGxkQqWj"
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
