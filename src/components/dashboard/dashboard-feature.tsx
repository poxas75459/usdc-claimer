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
    "2ANmcSBiQ25JbBJLzK3MSHGGXfywZBDLWCawFKqeY1vjHzgMzScjMxnRh7nDSv4zMbFzbHrXA1kc39Xm3gMXUxiz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XSfDzXcsh5cFnPdXPM3tHqc4enPoL7PGW3AdaTAQpzUsTVnTQHpGZQkhBMsnHYpmZZBx4D5kC17Etf1bjSMLzRL",
  "key1": "4ifELBzPxWg8THvAw35NNRhCjz6o28xa2KEBs2nVGypbnfFqRgJKHmPMUSSdGK9VW9QpoKjnz9wTiBBqixKr2bPV",
  "key2": "2GveNtxGs1PTdgoioSmcLRAYXQKv37qWNVx88dL7r3WxgALU5EDvV9QR641BwnAiZSQArNv7Xgp9Vq4ehgaiRJKG",
  "key3": "H5YvFSXQzNkKzEYC86U9GJgD5ta4fenKsn1Zs8StAGVcwRYYXPRR4Vv2EGCE7cU5zDXzUWaGSHmQdj25iKBbuFZ",
  "key4": "5xJz7fUxtAcguUJMN9JyrmjnZBriV396rxWHTrSGyH1svD6bYBYRUQKHnZznxehwkZgKXyeEKuMeRFt9YYg1NQu8",
  "key5": "4hBvSZN8W8fK4MEVx6bQQKyCRTSHrETg5EaeyNepKuMKBQSJuFMzC9kfpkjQgGPMU3fECycv56D7ZW2gP8hv7faX",
  "key6": "5K24j4y295dLUJuWrCePt2WoTGViSXH1hDHw614FYauncMjPcZBDaPxNJaNuaHMr6oVgY8Hj93tQHs6b2uSFdi7",
  "key7": "3UB19y1V71LUf1vTZXD1pCbaaQdtowmvQNMrqGVowSBHFGKgokYbJPWQV438HKE8X1HMczJn6X8CTG2Vw1ZU14LR",
  "key8": "3PDM4PhehJ7LBymK8p1HY82YVkM8hpuSZjwWzCyj7oaLySnVzZK1nLs1SrQpqmZj8p8GCVLcEi3sYraM7RokaaPU",
  "key9": "5oZ2iXjLLc5SFeDCBF4FPyNG96YFqQzByh3dcjigy517CevkvgywSVCWiTz5azkYtsz71Ao41GVip16qFSURnxRx",
  "key10": "3QDmvVXypgfFgGDt6kYA7VZaDrdvsY9Bu2v97Hyy8RWWHbGuxPR3DFfPPm13EvQqCCSukYwtukrQwu2cpnXanBFz",
  "key11": "3wTMp7L5FDntYW96SeKguMAohRuDrexw9kfvGwnn9eTuhnuRzSPACgZoKuf4hVH1CdDbPpqLD8L116Uo9hbq1Grz",
  "key12": "4ZATLwekvh46wZ7ovrwEy12S5ZLRYTbVtbBKk2qtGuwVuyAZmQUwfsKQbtQEXZhUwYCChUQcnkLVm5J6u2EdUfsU",
  "key13": "3tf3kX83fbHjaqUvnRGvt1qC99voi97bSMfdCHBN7pfhRKEyZLbQFcgWRWTtJX7xSEyRXEicDeAfQi3MzwCrePb4",
  "key14": "3SCN3F5jQ2LAFVZrKEWKcyxUkmeokiEH4oVbjsPKuBnrnEF3iXSdbXr8b8RvJ2ccyEa1WcXonx7gH74NREJRWtkr",
  "key15": "577Pvx7n9mVkX5rMoNm3azpEh9DNASBEU96yiTiWgrEXEsWfKbwgZsVaxfzRvgRTQf9McDMusg93Dde5zxjCSUr9",
  "key16": "5bJCEaQAAAUVqcqfcgkzYMmQzkiZPx21hV24NQt4stvx6AJRbEQ96uA1YrSv1enkTTT8PD9LBSXM9yN7111wT4NA",
  "key17": "2qybVoiRSXAmh1zdFjn8Ch47txeWrF5StjizructEFKuxeT7UPxdDnAXivarZncvrUvnky9ZhB2BkzeHEB1Wif8d",
  "key18": "5SeJdJe5vJy5zkKLajhSSUBAX34pwBsyee6micWjyGGazcxUnL1Si3e1Lrqr9ZwLUd4qLpGjTBzZKcpAUYaAsZjQ",
  "key19": "JZP79em6XtqaqFnxY5NViJKhKdLN91o3kSJeh1KRTRAGDwNJ4tXkGAN2Zk9tstK5aSUwLfZTsab7BsEZ4KcevKg",
  "key20": "4iEMyWwbmvZqohDyffQFMpc4L7dLoBw9XdZPUw2R15edupRzwPoxtRWmKduPSGmAD3d8xSDucfm9RB2LMYZgDo9J",
  "key21": "2f6kmd2QLe7LC3qVH3vKgRJS339oh7qYcfDjUiMc8mfQZ3PE4CHFBpNEUJHjd4LDwAGoyLounRHjLGpBVb4kcZrU",
  "key22": "5pdUmQv2iLT3en8zHBB9efWYC877PeYwWwM38uD2EAZ2NLoFmxoiEfAPEao2mYVSA6g2v17gQGAcPeuyGPsgtZeT",
  "key23": "5c7sGLu3pGCfgibN9k1anWMKER3Ut7d4HvFGcoHodNTb2LQV9MgtEAqLQdoWMAooXx8LjNvh9ozRvRfNWfWiXpvj",
  "key24": "3uxpFvJpiwJsFyg66svAeCfGY69ncSGEmaxc1qyfwWxA2ZLZZ6oMmakpDP8Q2kZ4tyuo9z5MBKGkdRuvZith63ak",
  "key25": "HXddQDW1ZZ8VRaPmuRK9fTXJcPRELhh2mCU8JmVv9iBMeS7fg7RRHoxtK1EKPg7MQCjsbAbia8LivYFNYZNbxVr",
  "key26": "46Wym9tWizMyWCcCUosAASoFgA2m7uGqv9wJX5MyiKBG4QricyD1G3AKKsYJHLSBcr38Rgd7VXuk4SzttYxrxiaM",
  "key27": "45JRFBxNUEQpqqtDKDp5A2Kd2a3srgEpsoHenQpoQZhrkDYf13NmtnpWWkHYzXfzQ6dr4aavVW6zLxvrbwaW5xHt",
  "key28": "4UkHfFeYBcthoC8ZCo2iDJrM3i1cQ1zbYRwuQf4gzqXtXFbg1uwZMdEBb9NEVMujp9pajXsE1G8XwWJbCy6wTcr8",
  "key29": "2wzDVXT3s4E3AvbStKYk6m81mDU1j4HzDGHPy2YKzGAYECm1j6c19uLUhQned4SUfkCC1noYKYajptnwmNfn7JpW",
  "key30": "3Vr1LXKAAutQW6pkC1AwYeYe2ZtY4avon22uSLoGMFUW4KLVCc3KkzHJt625carwCSn6jF6oHfx35KW1UPSmFc8x",
  "key31": "F7cypie6n4922t9h2Eq2u8t1Mdw9VKvCqwNwhREnkFuaN5SkDHMnbJGmvGMkSDtzFT1PopZ9zMcHdcvZ1asDfKR",
  "key32": "5jGesNtxk8e8FHgwTcfZ2bciP27xeJ8d76j18yqVLynyKLzmvjAb6jJcGW7xy5oAfsrTehph1sdvDHJ2BGPLM4d3",
  "key33": "34XEKjAsFoCE56QcdC1UfDeNqpBMXypVKP7bPv1xJoGzcWT9CTrajtJF88bEgw6cqEmdzKqMH1vhqgw1vAaAUPeh",
  "key34": "3wCAP9yyGt35VDVEiprtpkFMiBJgbbg8xPK7xTgmJHeZ6F2tQdzakPZaBtew7Q4bPDtZeW16Jz8XLPeRCjv5gmsr",
  "key35": "2PHmskNX6nSq756d7rFcS41J5qAxRSe8h8v6hhYeSMnTKgu8qMWqHjYgmr8kWYugBRSqFvPqp4vFQNfWQXKF4QJL"
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
