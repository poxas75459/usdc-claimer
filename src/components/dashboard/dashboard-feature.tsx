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
    "5AHhT2VXp526GgbCHcgWZr71Ls61ZDBwJikHqttbjG5mSveF5CBCwLj6poAq7V9pfddhWWiqgP5yjvtUH1X1ptf9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CibG1d9b7rnontH8GoDXrCLjWLSEvBM9KezLb9KCVTYpfkzKFGLqRDrgQYW6Lv8HYbUb9rWKT8sjw48EdCa4vHe",
  "key1": "2S1LaXGxeGnxjz41CwhLboxokZXt6DsNDV7FGwxFEpvS2xsX4UehYDRC8v81Yx8fNWTnF4MazHJKeAYrKMFn7BA4",
  "key2": "WWan6YXQbK7FHfcS3Ebn2KZ3JHqak7AB5xYmKyVX9oGpBmLiYuabVWLzwqFrNwvnmZDQcviZd5AAPgyUvRGyG1S",
  "key3": "29rQx8BWNNQoQ1Tjt1bXLY5PaqsVXmPHypZUPYLo7kFfo19Yxy2VkT8ochrrX8GcLSKPiA9rrGc9tPZJkpQLrwuj",
  "key4": "46B5xmGKiGjuwfS6LoSVjzaHYJ2HzzVQy2HeAbutkwnJYQXduf1R5pQPtpx9EKwbmgSQJii1iJCPLwAd7rG4ZaUT",
  "key5": "4hTNHKXvTmnSfUb2y4nHAn3f12vCNKhb1mMdk2cv7HV2b7o9dzKGDEAhyFYGMQMJvus1XAzwb7N56vQ49htfK7xv",
  "key6": "2wMczCfKSUx5eEixnvSrK3NSbCb6sGoqFt5nWdvG1sVaiSo8UtMnpY4ZHSAvyskj1w211EGDMje9ThrjxahAmMJY",
  "key7": "2wurPAAGfeFjwuovxPtPMZctQEeC1di8WGnfQeyvg1eUzkGwJCXcMMyHEnRaTNvHLSXSoSszwvYJmwQwZWE7Z1yZ",
  "key8": "3Tm2tAQctzXmiU5phiPEFddeinL8HfvT1yDK4STFeiTEtYhVW4gEc17FFe4WDhFEvSYREejghUmkrJSuKU1ZDi5k",
  "key9": "5P5c5JmTamiAaSSop3V5KcER2Ws4nci2rCWBgNC7zEuHzuCPXsM9HGrzn52YoLoS6Lcvf4xUha1vNhXjiiUtm79w",
  "key10": "4SeDFYcr3jF9AGDzG38UB8xeY5FuKiWPBCTj8479wFK3X25AzkPoTcVRLa3Dqzurp7iKWxspecmQYKCDKVs6ZjKZ",
  "key11": "63F55MQiXmpkAo8nKcJU71ACPhrkCsPzBvxC59UEc1QM1kdHkbsHbM3fwzpGo5E9x1bjuUMt6kEBQ827taZFatV",
  "key12": "43tiQpM9LTYhAZQzKPSpTwUwg7wDc7TZSYvi9sixHiFHPLwXZmT8BhTiyTS2xV6JKa2A3RvHfTfLw1nguz1zbMMp",
  "key13": "3FeVgQ2UEbUE2xbgaViKqqcfTyBFt1GHhn1T7Uat2FFTiGJxLJg84YxbeGNse4hhT8hZ7smAqaZigSkrrEuPqxbR",
  "key14": "39CqirMjokjYWevVtbvy5zhYKmsQgkAWKSBmeCWEpv51sEsGriGPqWJrkLZzeDsMwUc3rDwT7nPPyD2gmJqYauwz",
  "key15": "3DF1mkmBvbUE8MGuGxNhJCmMu9BLd33RS6ALY4SWZTnd4gkw6MdgeA7LByqbn1uksWCssZQt7bdH5g3A2RVaKzQq",
  "key16": "4vjtLNMd8AZ6FWB36LXGsA8893ZsXZL7f28vfirKCRsz39aGWv8JZFvBnMFWbnnVCt7fVwxBFik1oT4Hxj9tvaNn",
  "key17": "5Lqkot3gCFNcD5Yxi3g4TaNsfAUKifmhpiMRX66Q7pgpdwpr1CRiAJMqRT45NDXHDLzNWNq2LEHqFHCtW94zfzRr",
  "key18": "3PSGp14kdNJYSN2G46noaBDPqRuBQvFwa4rMViJ5kC1g736HTDPUi7GCSQFa1wZWfp77HnSjiGekPKEVXxJQtwYQ",
  "key19": "5jdcbd1PPY5BHzKdJGbZiUPxmQrhqeUxB1FcE4RC8B4akc8UQZ98yXC5ULxk27LWDc5cM9rYYMcAtncGJXC827dR",
  "key20": "kzhT1hqxbHNottvq5KmVzr3P9XpLE32fsDhkM4z5Rj3AHajyeHEjWgySmQQwgevZqvNvvobCf5WAHMnhhLBq1VE",
  "key21": "27Ehwd5PsRi4wWysMwvTzJ13UnxxBX2MNRm9SpVVnCC2EvpiNNrtLNkqvt8HNiyrtHQ9pz7Ph8r55rATpgFsoTRW",
  "key22": "4KQKUqYUUCC925eEBWRPxDaymFdhpiU7GjLR827c5nUDaPsKYcEwuboKRzWvCYuNEV5EQNaVPZFi5pRa75NiVMJ7",
  "key23": "49tJgRu3S8ZkmeCGmpCUh3pj8koyJYhU2rop7Tah3gAMFR2pLECQBWdTS5gyQWigEk3SSF1kjitSaEYFJtWsaAjM",
  "key24": "2JtGZ3xTDPz5HWsvVqF7zawrMTnKjUqjjzYQTE5BeS4Bp2VY29gQ9b1tBZnKrKc6ULxEJUv7TZezHuEshBB9gzFN",
  "key25": "5YyJjSNdLwroUTZMG9aFxtGr56nnzyToyn6Z8xHxPXF2EZNhKb55X9ptMu7Z7kBRL1vaKYHhhS6uVqHdwRqhPzSj",
  "key26": "5q8i1xenPTkoovfVP9HiGHsZ6EAZ2WjkZqfhV6cA6N5i56ni7Q5HBrtvGBiacC35nfhfBa4L7ZW74T5YCSyiYwSk",
  "key27": "5x4hpEGCoGabyFi6rSQczPCrEnUv76ZqoGZPyhfSaaArMopq8vauCfotFkPm6gHcfZ5BDZ6UXySKQLkVCeL2dwTH",
  "key28": "4uhVw3jxDkbwfgxNdbJpzR1crShDkE3E3pxcYyswrkq8CBZuaM48hoetPeZQ5QnoiEyBAk35CATXvPVfkSX4fqCY",
  "key29": "4tkzWhVaJsydXnE9B3vyb4b5ZH84R9fXizWYoYpFyKNPujMdzTszWTL1mbz38vEM7gGWGFse6zuA5gcKCKdSgxEf",
  "key30": "w3beHFAH8M61Wop5kbcfvTEXQRj6ES8vrvcFbAs7VAApqgtbFf7KadHcAKJHJ9jUHC7rB7d15Gx6LGqbeGpWfKM",
  "key31": "vKCjH1NY4gjAgezhkgTxDY9XVCDRKv3kmw7X7h34r9kGqbUYbDutyzVUEwKQUfnr3rmWeF3TprDpJkWosLHnqCo",
  "key32": "4SEs24P46o9hecJe6GGBEwhcJGbAxsypjWSNNLR7PetNYZVsSYAYnzdYj5YB2xLzLZJCe4Y2Na8jXZFmrJcseUn7",
  "key33": "cGqXHSDWR2ZVPErVCUa9seLWcMVQwinnBueRapGV2vqtbCpzBW92X2v7rj9FBVWx4ixf6GEcsoaRsrdiZ7TBhxk",
  "key34": "3yT82UF3oh7qW23e4fSubGJ91FMvy37VAYW5bjQD2GduVcLQXQxD1xYhzf343ASQAutbaeLUBAxMYxmXdoUhNkqZ",
  "key35": "nv5z6LGAXTVtxzaYWDrqywbnnLGnRyiifz2M219ok3Xry6Zh8sqEVL8XiuTVfqQYDdhWZVYvhWbZovUyeMhKJx4",
  "key36": "4FvygsjVH7uG4uC68gJjQMepjYcSDkfvmQEYxCFUZWQmqVGkM4x3QcoKKi6MPYkRvyDZGmEXg8PwHsQZWNh6CKFM",
  "key37": "4hHvgM18WP4j81kgvDRrRTnZcZYKj2kXW3o9CEG3gmjHaeSZ5ftK7p85jiaNJkQEM1PhKjr8fRK3EBPwaSfvWc7s",
  "key38": "66w3Km7JLqw6iLJXTD3NtL2KM459M34jKZv4jDcZ7V9YsFFjWbMBCtcZ2wekPx2Zro5CSPAEDcScyAKz7r26FHeL",
  "key39": "4mqq2crLpcmET9zfYZzqymrQiuA9vjKBsSQbd4gdPoUNzkBJnubQwQMMLtHGCS8iyxRbTpa8mF4urGkaQwknPf91",
  "key40": "5D7eeFSEPac9y46d1v9LrtV1GFywV93nKky36C4TdvKhtekEtHf6WTNKz4mWmhi2nvKFMGAZcG8NnUr8pbWPL39K"
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
