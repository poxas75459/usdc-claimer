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
    "5QS6AcYDGgqgM2KCNdQvt45HF2E5iFnYTWK62jCj2q9xpeyeJKVRs8LwPxm4dKcYbq8sTdv7TjM5585aG3Hi3ZzZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BBwN5P5VZzxADVoW18EQnZ25TdM7yKbHp8XCV2WsGTkdhDeexy1NAWYkTQd6a8vXTDHBtt4V8afq2MwtSZaV1hA",
  "key1": "4ZZcd7vh6diHixcuE536kvtNcxbTjB2xRL3DFVqALDLSRMSqz7oK9zwEF2LANjdnLrtaYs5RcTxqcM3fsrHxbiSE",
  "key2": "UHi8TUCYmcWK43G6T36YCXSeSyH6qWHXWKoHh1oxy9wmcSeWDTdY5D1Bkhz3Qngzqxku7d3c4xPsyh9nRaKVvTd",
  "key3": "4DgTG2wJY9yLZ9BQNZPPP3bzapQvKmeFDuA7eZDx1yU5S4VMoV3LfufeeuHXHHX1a4zvSDHNEQ9eC3GuJx6HkTUs",
  "key4": "Z8ycYDpnMPW6giG6Jm8HfSz3H66JgZvDKmRmtM7kPsykiXTbF6VGx2oonaDwBHJBWCYLRWPP73GvFga6jopGaER",
  "key5": "5GMa2fBc5tAoCU2fEAVfuSVMvQ5yw4XXkN8jbBftpe8PF9hkrLK2JP9YKr9sGnr7c6qnbdSG1RyJZd7pZBYcafoy",
  "key6": "2kA8gBHH9EreLmje5qkZjQXARYLCF1aJWTH8jjkd1czNrhhx5TPwvzWQMQQMxeWkK1aDrJqk9j7f6Z6D94r4oHYC",
  "key7": "o61ff9TpqE5Uz5sVU2USD9XFt9mqwk2XG6DrhBgd7xK7ahCgWWYaCoP8B349itBQrHdpX47WshVUguvtDE9y8oH",
  "key8": "4eD9uaFUSTE7qKouLF1XWL15D1kzeLF3oExsA1Zj4hYa41ouDq8JvSgCq3AwsX9zs5yCmr6GMTcPoU894vRg4f6h",
  "key9": "4pSQLbftYqgq9Ei6V6n83u4VFKiufZYLxP53qWpbupms3MbTHmDBqrUx7ML6w8p6nggejYGK6QuhMLp1nrWcKGwM",
  "key10": "3Wr8fsJDktizMkXkR6cn2zU1Y4uJQ8sxxYLf8D67wd8mS3NkdMH6ghvs1WkfkQUZkqMtJubWt2uYBXjt35jBm1Df",
  "key11": "3kgsPU8FCoTwdad8JQUpfRzCtCFGqSmaB1MFrHZd4xpFMytcnmFan4xaYCXU8NrYrs1w5Hqf362sntvL5MJJmVRV",
  "key12": "3rKRpjTrQDVKoP3HSAryChZH81CJhRRbsAN5ZpPVq9f1FWd57yjsMg5X2vV68bJpurJsFf2fikLDGRUWqdSmoJBb",
  "key13": "4rn9dptT622QXVnZwe39M1uAYXVECzi6vG4rkXwxSPL5iA9Efwtxhn1YQ26Jixf7ikib4eJgi1JU5UTSgDCuMiGu",
  "key14": "2iNocPTgoiq8F434tQMz79GxEeQrwQazMkDpofuBzJdRnVqnXDxeG9duvwkDwyCN5JYoV5LMEznLYWJ1FCcYD66p",
  "key15": "51ZqYufwSktCtyroJLcm2uPLBoT5VWqdMtyLh7MKcVTXXFahroSfkSPjFE36vSurJDxYoWZhfyoiGVmD3yuRqtz7",
  "key16": "2gt8garHsa7VKHxZ8YYNA1qjxSSvXTJAc8g95AhyPDyyRMVhtEXug6DbhJ1uPbT3fZLYYa6k5Xxu3yF4ae7ukERV",
  "key17": "2vey27xsJNu6CUcURFU4gDY56LJF7VUpREDHMb1aTJgGXGYT7EjnMe9WKGEEuqK6SfPJKkfS56Zppe6M3cBa6yow",
  "key18": "4kDkkEjsw6s9mzED53yDaSYvS98JWo3tZmfYx6wvPQabVgDLcEPhwPPCyiT8P9AZ9DQeLL2eJ2Ts6kUurBpGeY5t",
  "key19": "5EUSnQWV6k5JuzmWy9jhWL4Z43zWtkiLYe1sBYd5hjmKwzUwY3qEGAiieDcaLoJfXfWQ7X27KHgtLtzT2VdFxueu",
  "key20": "2EFUsH5nAbfqsR3PLQfL5GYiBuzGbx8yjP8EiwgK5w1Q5rmFbBRGKFWRuhHarX6kDZqftTNk4UUQAS9XXBP2H1L7",
  "key21": "4u9qFiRkzS9ybKZMt3FwCCEKRdQx3aeJtAWGCZkErpqN68874zSHhD4aZiG5ZkqJDsKjxdgDRar3Vp2XjtNz5stU",
  "key22": "4sG6RUWeLAXjJR5FMxscLjkCDHmVjQLSYaZomQtgx4nzNhW95hCtRLwxQ9hMkKJzxqyRbVAAjbzioR37fpSNUngP",
  "key23": "3WDyp7Yr2eb4MQr9VA8yWy5xkjvWuusyRFufJT5RavB4xydfdArHjfaYKheSJQmbTbYrTuUB6QPeFkU217WjMRvw",
  "key24": "3q786RnB9XXQfEf4vi7eQB9J29GDJoUrJ5tbfvckvhdsYvA6dUJz9cotpszY96UNw8J46Yf4Uey91urPfah4Ysk4",
  "key25": "4i1UA72hMxeBaVVLGP8qf1fZiqdKkYTs5MfMkZvFy9194UAUGKa6vM2SuqdHtZbNrfY8USbByJRpuVMSmVq1MAp",
  "key26": "66RWosBsakj8J2ZSoLfaPT3w1P4W1PdYo2NfqiLu1mZwrpJ5DBgXjmEukpC4kDu8v6KWGmXgYuqA2YzeneJ4KTyt",
  "key27": "3XzM98MfGn4wFYNErQa7dv2ywmieGdSfdw5w29ngVvBeyw5V8CD8456DdaFMG8RLr3Znbee8xqaWvYsG1YfhUcLM",
  "key28": "5B52bgNLQSbpoQHLAkcsJQmJQ8NA6Bd2N7XeECVJmghuS1D4UmzMDbE2suQbCeixZrDjNtvS5bFfmCfxqhaK4htZ",
  "key29": "2DzG9PPZx3y5p5cXWnyS5FkZmYMHPg4wc8UBcoYB2eDDZRe8mAUQmon9x8U5Q3ATvcUSkkFbaQxwMej8MEhWQqmA",
  "key30": "azk8j936h5ouHNHmMjtXUb44HZjBie4hHiLGanjhS6wLa59DR9zfgxpajHWUoHk3X7Aeg5KuswP3dJHFDu1Mvqp",
  "key31": "3TXZ1LyEf2GWz7gAwHDw5t7eZ9HfY4QTZXNTfnKBfdyaQugFNrwiYhiS2ehiyuiypA5cqsRHbuburfVASnpU5g5y",
  "key32": "SA7DyxLVZPfNQWt6QFUKzkfj2NJEcsQMw34tsw3Fqq3gcLkkikuFgisdCokHqKr8MhxP2FHxgTunCvZBxJLBBBs",
  "key33": "SLQGYVzmmGqmRFjWBRbD5hq6g5jTaxTKYaw9ebLdViL2REs41zjCxjtzXGsjkB8ZxndafQqZH36SWkiJEM7TkU7",
  "key34": "b9ypQ7ngLR1hyonaPk6BiCK5TpDUsZLv2Lr3tTH9ud59oMffebsM6cEckkU2WTpXSo2SKfmFf8wqZdPTGZsdc3S",
  "key35": "28e7QYhr2JM7GgBN5sooUMgPtdQ2UXZjZPN8B14Row5U7sAw9J6qnxFpjUkPFRf19Yo5qvTuWTEyNgaysA8wm9Lv",
  "key36": "3dhJVQ2jCy4iSRTuydqZVmwztnUKzXr28KcEmRA8UfdX4ccpwPeNdwtierJVvUoRuBPpk7k5XSrjWJDCeYU8f29g",
  "key37": "5ZoG4vPAdH6dgxmNThK1uZ6gcMV39bQuQCXWNo8VDV81uwXHx9bs45DZd8Y3w1KfDqtT2uMERZZ1EbKevy4mz6vE",
  "key38": "35apefQvPPi6vr5EAzpDXWVCew2L7CzY8pVjsiZr4N6xscp1RwrB62b58CoRchMtn9rdrR3xC8xFkoPPNeziKJXk",
  "key39": "4bV7inXuK5k6LRBEyJu352cvaD33VwvyXawMLW9LkapMg4SK4r48j8FDL85vkUpKq9CPxsMpmLKNiH12cocb9C1Y",
  "key40": "5MDWA5qaeQNnehPQ7ZD6yjuFVyAzKesqf3qKxJucKQY9mopeMszuFz3cgJ6xRXz9j6c6o95stgckQwWQdUa54Wmq",
  "key41": "MNUp5JBG9Xnitwt8gaz8DSqEmTQ3hMTtoUUbENbph16qwn4m3kpoZPavckstsfKdsVZ6UdkxyBVyDjMHu4Rqkrw",
  "key42": "32A5qtW5binJF4LnQ5znAFCFuYNJZH2t68KFSKTyJXK8K2bPAJURGnRXY8253Hz4ak4eKHosEvtG6ytGSKYYzeYR"
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
