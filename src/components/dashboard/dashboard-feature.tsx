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
    "5SUsJtS8UJi9TCaATYRR6NTXa8tw16pDcy6PpRHs7zQw3aAZYFrYiRp2TL86Qf1bG9ETK9ruCtQkapbVAp3p9mZ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rp5uSKSYZKnbfE7m5xQgvJwSDL4A54o1MA1d4gR39m8695RhWadGXyKgmRywhQAUDtyC8YZMnfeYXPa5iXJL2CP",
  "key1": "4Dcx65ihMZS9LjZFRGYe4wBpG7ZjUej6sgBJ3Ya65cTxqYZrvAiejBrwqtm9ujbPwrAA5mzUxxMz8sjekNXPgCTv",
  "key2": "4eRuH3jaGiLUaAnsE6JhVWEjEwJFF6sJQ9kwijZYN8MDDaoEdxgPRjJF9mAMkZsbbjNC4zAxWK71jtYagpkrTvv1",
  "key3": "wfHCkyLxcGHwjPBTvE7ezdWNecuy2PTnVV1xMneT4ZyKWuNkvnTWJ8Xp3e4Sv8oRv8Vw3ux7T1mUs7PajkV7gtw",
  "key4": "3BYawwQ9HzxPQ5ZvHygXawXdVGB2754SkoFQ89K8a3S9m3nuG6KCUuqGUnWrqUoSG48J2uCHbmVz2yMqD7H5jsTq",
  "key5": "4LiGnSaCndbGUPAugUpdJATdPHXHWZGuK4pH3nGG26VWxErrvKgoHYDWY4EMDJu5YUwJKACfPHkEcSrPUW1MszrE",
  "key6": "2dixETd1tUtdcTbR3NeJWewQysqB558LkQdkhGvBtd7WxhVRswxypnXSX3Dac4Db6D3BiLjUWkMvKVnuYhKfz7pZ",
  "key7": "3bBmei57V2BTty6mKLteHMmT5UMZEZ5rTkEnmLz2BzgQKvJXPzvMmWRWssskhRJaniDA9q47npNNWHPHm8QbZ6aa",
  "key8": "64nerW7j9TXPBjJZQpCUxNmw4YbxqvMbVbmPLrGXwPpoywCE46hj2J35yHD48cnMT8bog8KVk84kvBy5KSuGx7fB",
  "key9": "2qQp6u7CHccXEFY1aY9JCqxSPDjPmzp9MQy7YSv35G9jsweFbimsknbWGsApPuRcuvJ7PDC36tF29aABru7U4Z7z",
  "key10": "3fJb7CVr1uscu76xNbohemXsksg4VNpJvyjzD7nhMA5zGhhSDrxHiWQAfy34DB7iqJSkCdcyWyNBaMWtWVN3yXVa",
  "key11": "25mMSNDHwZxgczRRfePqCydKQbCxPAoD32UmytznYZMdvSBYYLCqZsxjPN7y4jv7t9eBoP6Rsb8ctHiwxz8n7jgK",
  "key12": "5q3aiQc1tHcjBEKfM1sfNnTQgpCbHph2KLnhRUFnDvkDELVTkVY6ii4VFgXbvkwvbxXbQx4zeaEwcmGtx8PZEzg3",
  "key13": "5hAA4WVWFb6GgtBZj1iHopgxcinPjPu4g6ajWn4sfKEvmHRpvTqZxNiLTwdnSQvQnp1UhdGePS4iLhNuHqmJMZq4",
  "key14": "5im739WmnPk8rytJKkKzGGAKphWgmt8STDsjBsRsFhpYTsb632UYLCh9MraukntGBbhSCFYrWqweAzHoKjyERTgh",
  "key15": "3Ajf6aeX16GFZYJJHsNiYhtrh8bCg48Cxbdz4xvv4D3riXdRkAr5aP8KjihVGjkUtC2oA7sEbXYcicxhuoRZA8UB",
  "key16": "4TSVnTktkTTWNfzEDViuPpjkf9DoW1w2x9Kbzpe3GpUD8LhJGehFvnc7iR6jkkNXB5qDfkDU53aLzvty51otg9wa",
  "key17": "3jKVBX86JLxBUbTpFRvuwBXtMkRzBT17i8Yr422LCBDbsh7GUyNR67oqFAkxd2PP1TQCk3rBawtPKgwMHn3ps4dm",
  "key18": "zpJctePjhrbMstsKK8CeRfbL9AhTAbfTtqXKLJW7Nsxfeotkqe168L5Q71Gu4qsujK7AibnKZz3b97q85zCqT8H",
  "key19": "qWsKSNMKxZgm1m1JJM9RujZBAdvccc7T5Pb3FcrRDN2t5p4w7ByarapLHmNw5g82cSe7rwZj2ywV17Ua7tj4eVW",
  "key20": "3Rrgf3WPZPabUEc1jmxp3ZQTfgojBuLyoeHErrWTSAm9RK9rydfQrfkVTZHPkeijBsQXzVFNTrf4goyCa54yBBLX",
  "key21": "4zC1gYqFJC5jTkXKBxb6vj7KEiPwvW4w89CME9jCCGRG8oaAUEKjtCajDD6ke2vUg2hw9a4zukR4j9Po1qmk1YeE",
  "key22": "5TdPCUwuQzot8Mm9KjaFXFzKKxfCx8Kfp5rzPN5aehBrFqGu9EVfLbDNcqAjzC7Q3yw5x6pJEboMRyTEiYDPBRYV",
  "key23": "5o86Y2CQFCcpPimA8rpYXpeQ7GN13TTc3LHAbTL4FpCfBiS3MwjGBP4YPay3muPqT77Cc6ssNoRwBwMmZDsrd6m4",
  "key24": "5Csx4M1Et7gR82tJzHf55f7eMroNYbWK2g8QPUGT389qLKe6gpqxkkZVZvzsQacqbXvqZhAZMh3ppY1MxTRrfWGY",
  "key25": "3BcWFJVPjPst81wU6KPf5iKJJLJCUToGSn6tYKyiQqJy7cBjjY1NC4KUFeXj2hLUD49CdZMzg56ZpCq5HLbSfccS",
  "key26": "5iHkoJJW2Jt5QVJT2vmMJGW7v32S8RyUyVhLKzfJZ5QjeiRYDPNZMx3wCV99sCNuR7PT9Bg7VYnZAhYM7x8VgLRd",
  "key27": "4niauTV5YMqr6MdfnBQMezMbDK4Ntf53CYLYcTjsGFTEVqcRbUvU15kWYaafGUyyMiXRb5cSktYoZXjZczefVa5",
  "key28": "2s3NHqD8D6NrDWhWmba2TJYirC2a8CbTTVE4afiYrzjaJ2wrWU1yYsGkm6iDsKv1RyNcgusUu36dRTJiuB94FzQ6",
  "key29": "3bZRcx1xr28xdeeY9xVghnP76hNjUczUE78h1jyh4NUmyABv5Rg3qzfP8Dw2SJA6rYCyQcojeLmtr1cXZS3uUAPh",
  "key30": "Goh5TaaJv7c7k4hJ5jCRvRz6j57xj4nt28uCZ8o4XwdW9a143YiqtVVjzTc8BDwfFPdnwaqdfSe3ytRhSMmNX4g",
  "key31": "3oqH2g9kbt8tLmnnHi6d1B31AU3L91DrfMKXHXwZq2rMs7fFUFYQ9JUaoXqqHf1Up9vg3AqdkbvkDGYc7Mw1u7id",
  "key32": "4z7w1EzH3uygDgQFQQFnaPbtfCDY32Xeb4B47Y4rTxff8zbCdzHviH6JRAmmgExavPq5c1ivFrZmDGGMYhRJLFFS",
  "key33": "2wzMXgc4kHMeGkpnvx782ToqpHBJ33sYTPjq2XrkRFSKKgsFWNtEoMwL7RGu8CfnJuAcx3TXbf1cznfvt1mDSG4Y",
  "key34": "2F3WbX3dkuPbqk3HMP1w5jz3oUTDL1b7LnfiRL3MCbZ9FeuYFwoCnWNKcgqpM8KLQpZ865v89YdQMfxnnJMuUzjG",
  "key35": "5CQnVfFKmU6Piaf5w2PN6zyi4Qmg9j6iLafWF6Th44GSwuaUBvRDmyYXkpMo8VjKXqqVKLgE34ZzpJsmtF1XFPM2",
  "key36": "3zo4y6vm33engunVAUjLsC8FPSTsEEHiXKFBPwtvHdj69Cgikm6eh9vTGNxkeK7Zx92HoXafKKqGdd2phPRfFbnS",
  "key37": "65c1bgS4i8SiFXRY9VfyG9Vk4puaFi9tASvaD5zNmsqLb4My8vyX9on1oeQpev5WQzkzn6NvrQRYqGFXwXYmjEVy",
  "key38": "4dCayoyp5i4Tb6cD2eARGt9ZbWBDjMHYVYYgApWqtbCppGiY9f3PtGbSPS3wou4XG3kuZ11vFvxxnJsjUw7haYbs",
  "key39": "3KNxk3M3mWzKT1UoEk5of4zaEiruBAE8PitYwqzqF16KFub3t3eH4aS7RFTghR1Sf8Kx1DGJGsiheZemtMHxwmFA",
  "key40": "Waxi19wSHMRtwHrFwT97ui19kK6B46D6xzpehAWnTHSWGZojEC7KcGEX7qsd9L9kq74NCDAVLw1rjeuqGCrjnU4",
  "key41": "66dw8GEvDEU7mYa6CyBRbQmAQMdUFUJVzTQjMG1JVDogefsrjSMR1zCQsxkJSVrE7kjC5FGgH6fj8YpGtJPcf2SU",
  "key42": "5zggBWkjtH44qeDFHwtaJuG8BTnt9vRckgkkPq5VtPr1Xz5Zzjkkqt84ptFSKSXuGPjx3w31zCTCQSi4JVUQ15Ur",
  "key43": "43JTRS7Lpvr9WU6WXHMPFd6CZcrNBv2un8xFphTcVbAmrQNKdAYU4bduWxbETpLNVKz3Qung93WK38Vb2kWnYh1d",
  "key44": "7QNegW2HWSgUXZs187XT7u4sUgEYBznc66ZLMJHTpqnctTfpgUpJsToLwWx6PJqxnB4qe1gRr9zneGQbZFn888d",
  "key45": "2qfGtt8xXLrzLiS65qGotNYFThEWpL55GRDkLA9xusBLd9YXT4tn6XQdjQDAiiPWJRG9JuTEp1Jy1P9AXGBiB54U",
  "key46": "4JTVcGdToT3CCcJyxMxbqeVJfNGogxaXMjp8qihDgs9fmDJDYNxYuj54Na5CZ77nPkmemeKKi4VpfFcXy4HM8fVv"
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
