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
    "2sjuvUuh7eZdDG6o7CD43eXtG4EeMP7A1ME46hVNE2LLGK2oESuuDZxZZn4txAL1vi4Pi35zjcsWbPDemnsFhSGj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Urih3FrpU4FVuk6ZrjWsyFm34jX1Pi6J2jZ4x9oHrELRdGCjW429Gd4gf84ZUMxVCxPxkE8woXYYCaVV6Wq4ZSv",
  "key1": "5FYnLSXcMWXRzg7yUUB3w9mxZ8s8LjBrR3CXvkaxkvP6EqX31tRm92UGCJWrPtQLH3BxWY1KABkZxp2kSviKDGzu",
  "key2": "5EZK43fioKb4Ypt78BgA9vmXK2BjPBLT25kR5pT4zEpWonoQPDJxrCum2xGFqoNPsvn9huYA6FpzY3XkhYMjdFN7",
  "key3": "3EsY7k7TWiHGFXuNdMDt3vGzQprTKhpBhPhiHD46DpZrG7eVnKK1A8PotZnqVrJVYp6RdsG52qvEcfzgbk4yySrL",
  "key4": "4FbsVquCht33y79Z7vsBk8Mafi86uHre57coodKe62E2h1bfgdkqYvoaPLjq4neYF6DRgJ4k9kpVpqxkkMLJgx4t",
  "key5": "5sLnvW78runkQjJ2oPxiU2NVXBtTNhrhgvQs46M6FzaBjpfKYa2iwH55QRb8QfB5TsQc1WYooebL9mBibD33Hcjc",
  "key6": "5p5CwGvUjYthkZeKmBC7CCtxEMvJcUGzVWpw9qVmH7cukYNjxzifvxu1ACnZzY52G8GrgrmoEy7MB45ZDA2hJmbX",
  "key7": "YiD4TuAiENEysxrwg9KVwRes3xCFJaHrZU9u834XpkKqVv2NkcPgQXgLXiBoZn1ctjUfo6VfpP3GczRSAyEz86y",
  "key8": "3Yb9AQDpQHyUiATozbFxiYiLkWQ7RCX8fG6p1V3Yxivn9YaLokBNA9DBd6BSCmtqWxhET7GX5cUf3HNKKw4GnXX5",
  "key9": "5iH2BZvazgUKz37gjA35sux2wZ8KHxERtj2mZ7gc5BmGeXNdd5PBRHcAR5abRTkXk4p3vjyBw6GR9dVc3EqZEYb9",
  "key10": "3RSqrXvmShfnMc5Emx598RMbDgyD6AtAxCFg25E7RtuX6F8qT4TGULaFqd2iUEqJ9poojJMBahHpmBAnQX5QPGX5",
  "key11": "2UkRed6jtkXc2fmHsXQEcEQXUpuKV7XDjX4zBRiUB274TFToEZdnf8BuWXPrsJo2e4RCTse6nUrTmaxGyCinugqo",
  "key12": "5XiZ2PoZB5HuoL16XtXJXj6zTGmCqtTjuhP45D7VKzjjPdJQaUaYoUJng7uhd6GTFQVBjDFF67dFprudmDmZcVEj",
  "key13": "5s8cBpKfot6HF1SKxbjcwvEYWtAqANia6fdAMb9KRrXmjU4oVNQkDacHipLNpw1t1hd6UcqmGfC3CkgQ1uz6f8XD",
  "key14": "5sjpfaob8mXCMa764pN4NNbUPeAEZ4injHmBdYxGwoVdC18NbyM7ZqEibKvz3QaDyvreRgU7gMBvrfzWXKDDYGgi",
  "key15": "5RidQEjrvtXkKGd5za3hejQj1Rs154GaC7Zamemia4MagVJGSgAftGbZ2qvLWJSNM6HCV4xjwvbem6ec1BNRwMDb",
  "key16": "4SQeHYNgSwk32TwZpnqWMDZgAbN8efPkDMFujMiZySsrfNoNu7LVv4hHvzvXzmm5NrKx1ye7veqyDCKcvKhWtaEW",
  "key17": "f4apSrMPsKzb3coh7iprSgWXB464PVCy6E1ST8EBYWHeC63btyMc8QpG96sDEMrrqSoG77zJHh2SHJEJVQDZf1b",
  "key18": "5j1G3Cb6xrpLUBPLZaCFXBeYhzcAYftwWgZiSwuS6acVRYN1RKSRCCBZGubgBy64KdiFAqYaNpnKrH8iKtKccEDe",
  "key19": "2i4DhshYirzyV4MVkfzsdPpG1jcbsRh7G5Zs4caeGiRicgvmYn7ndipzTVsLz5eHGZyi5yZiFLNYhM1ZshJUz2vK",
  "key20": "4i8jB6ndyLEE9JxfsnJsbLyzGHeaWhXxsgNkfXoECAU9PNB5ipy8YCMGHTPL6d3ZxoVX8UVhT1vPPxxsvP9aKiMj",
  "key21": "4Ma89YJxeiyMr8nB3YVDZHoNt69vBzTkMW61BD9SB9dy3Kd7Myj3dBtgAJshfczvL2XhxziN1PxFsXs1qDuqmbSB",
  "key22": "4sHXe5homb5P4QzDRQQCSseQodymh7XoV68ueGGKeoLRaPPmQksx1m7kLRotjM9dgBxEzTrts7GnFDSHZ9GDYNS5",
  "key23": "tL77KyYV21ueaWWn5LFuUB56qMp8NUcBgkaENukt1rUwKkuS3G5mHgZdLEc2RZ71ik8D7fvsefJtwm16KQjHCnq",
  "key24": "3ohWKpsDiKtk9mnmiBxuSW1VaiYcfUTu1352gcJGihHa8ezB5zENqsQsnqPmpjRaB6VcwAz9Q9kzKDxDu97PvG81",
  "key25": "KqUWf6BszyVs2ErRedyfL5nbHk1En7RMMc2rCwVCtHwo2rjQCRAs3gU5xftsKKT2UPkvWjMqzy1dohtLYmmn6vL",
  "key26": "3tpZ675YGr6GeJKp2BtPNtXKQhHsHvVuASg71LULdacGeysgRFXJdZ3Fa1N8EWdNCXQvgtajf8WVrihgX9V3KG3Z",
  "key27": "5JHuNFCUrKCfgyNqissRX7P8ZAMN3iqJhdY8oU6aWsvC6FtWtnimQ6n5cyyeRdqQGxi6eiDBXo72GEg16vzkEsbS",
  "key28": "5wjm6tYs2G83hWM48VC7aJ6s1omkrYggbZLk5MKnyYXAnYgCFJ81QvLYk9VCiJBa1HxLzA7sQACY1bgSDMqztxse",
  "key29": "5V3nUiH4PbJfifNuSJvrvGq1wJd2EP1tgoS3W4Jo6Z1ikfehh6CXMMR7ENbbLefoHcW9VBaqyRMdBXYCFtaBraTd",
  "key30": "3NVbaaE6xDDxW3WfUsLRLPM6CQuYPDXZm8XNFjozSan1ac8M6BRZVUxNnPaNfejzudE6ULyuwKnezdZ2zLiNZKtH",
  "key31": "3TXYAy66CCXxki93HxXCN1xMN7mPtCMbfqR2jjhdSgYrE1mq1AF9t2d99sSaU9FUY34CojgiBt7TCUt6bdBs5YLs",
  "key32": "2m7oimVHgVEMxawUHxevodfJMbV7G5veETbJKFT8GM9bYdq8Yn2kyaZ7DDWtwinvxn17SQEyDZiwYFBBtFJuBQvZ",
  "key33": "5Hc2uu95ocuhhkVV1pnXRPTp2BENSbGrGHGE74rgffPhpfRpVrxLWPTwwHabWof1xWGG1GCjtMu3DKx7ZY2tHdUZ",
  "key34": "2NxDkiCisQy9cPoa1bDDkiiZ21SobudbVQYBsajW5YbyNvZu9xtGhDfNoH7UbHMhEqWL2JLfBHciV44pbPKYjCF9",
  "key35": "3bAiFbW9kZ93xXPweeBmqGxfdAYr9coJkKhzDH7emZcVekfDgpXuS75D8eVp4rAPf5r1zvUyBzWbjD8yCVw6wSqc",
  "key36": "rWM9m9pYvprgCxQGQJC7AsJVqQYeL7oWAbjekFWadLZtQJecmV2brouG5dpaoxNFXQuoAG6nmUpw13ZfoWAKUCx",
  "key37": "5sQBKEZD6r7Fwby2fgvRTTvgEWXBjzLLJKBy1xcnXhkcxTHDuAUUGiTjunn1Rv6k7iUArhB17u42YqcvzsMckmwk",
  "key38": "wPCLqYtmGDDCC4hWH8WsFBKcZ4s2oKmr4D2JyfBhSiuJreBLksDw7C7o8FogMxWYw9WwsuARe8jaVe4WpMv2vrG",
  "key39": "59uJsg2C1yDzKRittoyLQ3fan2eoTWcCBKpW3ugBJjemSvXyc7zc98gMS5Z4HaZoCHCMBNXcdtFjs43JTCgWpNAB",
  "key40": "3iov7hmaaLG6qhVgzeAwaKnTsSRQQXPwPhdXudJUxBuHVGwhcD7ih71E3TzUSuaCrJGcWBJrvt1nj6U1GbGAbcwZ",
  "key41": "4K51pLHZAyAudR4iBaAafnJkv3gyqaD67ADtnUfeFxYeuJeDqixKaRP8nmXywGm3FYmddx8gqppmJDZuwR2ZREfT",
  "key42": "4Tfkr9NknJC2FT82jcKAatECiBCqgq2sL7vu9tVkvKQyXZSUKZWQ9wnMvec33gY71fTxVjgq9RNQnhWNEeefbukb",
  "key43": "5feoLY3Pwqu5oC4Z6S12hco8LtTB1eUXihD2e7E7jjHjGBg1hsdXqBia2T2se8zjSM7PE8fjzWF9dWR9zSzpomG7",
  "key44": "3xoPXBYvUS2VSkMwB7MHZ5j7KxxuJGHXjgWDioiRKE62hVfi1P5n71XkTMj1jSkcVbvhxQGYBgf6MFjDdQ3Kfdsa",
  "key45": "5PpRcD6Fdij5gsE5RwEj7Z224fa8LK5HN1u86T95mmwtv283oQh5F54v9qb8sxBH1ETy1LEyXw8rVrtEJUngrdnQ",
  "key46": "2wFUDEVGdAJdCJ8DWSYn7BsiAvJid1J2nXLbPsJP6BHneGdhhjt7U3gafcoApBmePWmHgY8eKBUACG5NXnKfAXJM",
  "key47": "98oxVWhhb5uNB72Ct6wpprDWYPGpswT1KnvgMNfT9zJaPNZd5W3ctMCchcfb2k74fbKDhD2ENJxSDJrRQNq4VN9"
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
