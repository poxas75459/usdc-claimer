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
    "FBNnq8tetuUgyo9t87JPxfHKXGuzoNpHq3CAw2C1Af2S3RgeDvwVk6Ybkrk6AzUYSH3quCeiXe2kfiDqdKf6UTs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Qw4DJWqtojnZBkdZVMck9XaEarcro1fAXavxc8KjD47bd7joMnUUUyWwNyCJCE1MXnQ1St5GBp8pRJhzALHFv8w",
  "key1": "5tBCHXAkH4tEufepozFuG7hVyvSSW169hgwe7h4zsmD89QTjuNpA6ct1kSZbtKNC8cZ2ykVKFKYs5e2w6o9FsDN2",
  "key2": "2PQ9jficNWyx8EsqMwusKqN7C126kL7jVT3Q3PydYiCMY2mVYWsfZhXgG8Hu8Q32QjtLm7mwyuwQdiwg6wQ7qJpU",
  "key3": "53nex3CLsJ9pujM9aSNmUNXJBNuWcQamNdrcCtMDgSyAi8aotwGGFBZGUHMkAtKnLowrxD4NACBEVjCyWVhYPiGR",
  "key4": "3tFpWsD39UAFwYCB3VWQAL56BeKVpqCwQQ6mYvLTSty92sBNU5BGPjEMT4Vqvm7sHBFf3gnH8BEJiK6PvyEWzYsM",
  "key5": "4fRafgUfTewtWZcKXGWVJgCd2LsmzoPNapY8gdZbVMeFcbdBsSSVztNduQAU5gY4jTig1qSRzirPUwEMRuYEUNRs",
  "key6": "fLj6ycRnWESM25uPdMRENQrnwScbq6UjD9t8rUrtiPwtwbYPzubdKhd65RitwcGK4DwCVHFEDeZVMrB2qBMeegL",
  "key7": "5DCnKLZbrZx5EG69fTc7yZbDZB2WsnKx4yJ7H8dsuPzvBvyTREoSmSerhok64bNY8cfxkhQL43h1PMKywgN37XfG",
  "key8": "5JyLCT49VdenD6k4xA4V36QGBMGsqBZuxRETtufao57BBAsGxnUdXNA99ZUBMQoe6MyWk4nUnkgTfqgLuWHavHdv",
  "key9": "2ujhzjF3nkupUxKv5onxmxDY46KPemRE5nxsbiQftwtscatgtstA3ZzmURKZn2hnrcgWEXomp42re45qAVy1hnbN",
  "key10": "2pbjK8fJx5M6voRj8QRPaBNysMEKJ3iwMxS2616HPA1fK6zMNdunkD1j4LmEyANvkzDiuz5zGd4MTVtf1ymEFtpP",
  "key11": "xFqBcETNa65tQ6FCWYYdy62axvxCDWvAdM9MHqgEeeHdmpeH6GfzeyQvGPvf6Xq786M9E3XX35L5U6SyvMcNrym",
  "key12": "PushWSr9tkajv1ULYEW7TnoW2AZQWJfCJ7cFEcSLvQuVRtCq56AcWYfBRt8zzxE3KiVGHarEr6BR9gM9efapiPm",
  "key13": "rQzPSxLxezsScbkps61YZx1SrFwJRWmZSSuLxCmsy8cdRauFSsE7M8XFdEYhZTT6EyMRE3SDqYg3CmqcniJmK9M",
  "key14": "5mK7YY2Cre2GFjz6buMSbxEGqFdG8Z1WcwXhoVqMJvmApv8BBr5Vk2Fo3vAoynLEcFzpUrCR6ajUisysQBfqwgev",
  "key15": "2uAmTdWLCVrT732531LYrUy3kW3Ecv3GhzQHGnp8JQeifg5SudMrzUBx4QpxGMbcUwWm1i3tjPR1SGszuUztqdVL",
  "key16": "4mejmQtpc2ZVUGKvTG34dnHsH5EZdeSBis6hHgtMWR2F2NHwjoxeYXu5bnrQDQ82Y73yeU8tNDfizZ35tEWHdVoe",
  "key17": "3oK7gnR8AcvVbHNLTmuP9jrTGHa2Q8FtH4BbXUNo6dwdEL7mYWbwhujzvAJxDiJSmCz3DA2rm6Y1dmhMZjBkx9oE",
  "key18": "2oHxzXaWcsvfmuMUEtwJ3m8QLHU7gT8iD6wPo3QNKA7EE9fZ4BVtJzi9NGJqs6kfy5yWC5FcNXS8vaSFdZr7DvwL",
  "key19": "5dHhVYAWoNhFyfYxs4ZSdUeJ6kJjTMxY7ZKx8W6VrvDHd9meacsEppMt5bEJaZasjogUxeRGBuX1UehW4W6hrs8o",
  "key20": "4LGjJESkSejEQzu5yTEAr6dACh4weZKMeviLZ6ozBAbbWtMUoc587wwoNDZLX4e3TSkg7QTKRX9NCdYCg6zTzv9F",
  "key21": "62bjfedJHv74U7juKRYeQRmZW6LGQ1yfHLHUNA4DFjfDt6T5eQ51yHPrpwx1MTBcUaYn7Y9twMEDQ7Lbct1vbSQG",
  "key22": "x6j9uQPykggFcsNitRx6orLMSqbB2sAZcFqmQ4zEgg55nXTL1WZa7wQo118QaH9PikaUCW7nFxMi5t3TmtUDViz",
  "key23": "5J39gmiABbybeUyJZBqJdoScGZAC7WJYDPNz5ywTLFbcpbrfLbZyRCqsSuzdVhoDJYjFcEDxv2mfiPsWL8duCCpw",
  "key24": "4xZECztQ3rJcSXWNYfVvYhaRyNLA8YGr8gMTYtd17BwvWPnsuZcjnSsNcdv6sFJqTyYpMQWvDjmaZgcX4oG8Khvd",
  "key25": "5VVFAEaTtYYbipfmixhJwjsrbHdjAc8MmRCAqxPaWGQoCus5MiozyhpSGmCGuxZJwRG6DLBXSXZmjcms4vbikDwt",
  "key26": "5S3NBT2AaEMR4AhpAwZdmwhsfUbfbGGQY32EwxrmPQhkdc6hzRDfgjCeLo6kS5mfArnvUy2MauqMN8ypysB8w85n",
  "key27": "5kXiQp2pvbb9UwCKPddJgcPCKjZWv4EbS7dCiSgT7faDsApV77RqkoKrcZ9gdKqjxn7pFNomVn6w1AQ2iCzg4wcK",
  "key28": "5nyN5KAm6Smjf5s53YhKYFpHx8GPmoWumDLrQZ25bwdVByPdLrvkF744AkeTbRf2G3xH5zBo6Lo66ZVN6ipaf3kk",
  "key29": "uV8utJym143zdhbcNfyc13hapBw5yqXoYt2hxur4L96okJ222B8NoNVDyNCHvJhhR1JgMhSvBpcpTgpL7fJxkUG",
  "key30": "2fX6cvwXNWZ8AiBTXoxVA4ZtcniWnFT1PDRCi5T4tVf7GrEoxGAzYpfYExDkAW7U5VBF1tzEeddNyvW7teKaMeC",
  "key31": "MAiMYyrFyRfTiJCVvo2A7yZQiM6WJajpqXYNeRBu8dH4m1eCn6PoF2V8NYTi9rF91ycyttPk7hCdQqG1LGrMvAD",
  "key32": "3bZ7Jqs7PRjJhDHUHxGZHZS3tq8eGaDN2ovo4LcSaFs2Wr6ssAFZ238zRaMtMSNsvPn2Bh5LN8e2QRt6cFW1k4t3",
  "key33": "62ehChK9gQdmTuQ7tD87SrLXb6txRs9o46kMMUZkhH1EtY7tFQ4ToHJ38TjZBkWsprdMvDSf8141gDyoPJ6YAGFE",
  "key34": "1ouQ5veiYXz8L36EMiEDfVFYc5oCP7vmkKsw23ZUXpspmtRiJE1fryzLPfDsSJwLmtUh9RBGqWxnj3hTq6VK472",
  "key35": "4SVgizKaKWQyvT6U2BL6AXLH1SWgWmjqJ8wPERZ8nwZPkT4ZH9rLSkHhK6i8MkyWf34QyxrcaYHzp7veoXEjLPxy"
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
