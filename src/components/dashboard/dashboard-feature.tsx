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
    "2UC93PoLm7NvxAkZzETxv7svYH7skofbVjFP88WD3vdtiDXsDAizbQehfn93EwrV9y3XwMk3qTnqRNmH7mHgXeQe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2T8cFKsibEWQXYQTURraz253FhETkvGUVaccbyDAzY5NmUpVRz8BxwySq4ovetWXiByrzHgXz86kTuazb9hqPDYB",
  "key1": "52348uHiTEjddxtJF58BJiCua7Lwkhf9mgA47YGBYw4kwKap2BxyKtCJJ2CixW4WiRZGmdcQ3PnVCzfTyhmXtiv",
  "key2": "5gVdfZBQANg5tc3bUREDVGE9HXmNo3dTm9sqBTg4m7PjdKze1KiP3gQnoL8Q6CUbCeFZ3sa4dnS5C1quRjrCRut8",
  "key3": "6LePcEXCcDSaybrcPHoayEbwrgNkQeqE671EeKaSNKiePixRRuuhaKiZbY96sX8gAJd8uFodYSx4Zedv6FQYpVo",
  "key4": "4gnpTWbp89SG2P4Wtd7vhyPoJ7Hb2BChfW1Q5pVzoLCjwndN8vtW7yzAWLzMWX9jFAKnv3LPLrmvRvrmdZuVcGQp",
  "key5": "5dJ2CknquSFGb3CqpNeCc1X8jWB8s6q9B6mh1nBui8SiarnMtms3TEEGE9DLsYypnKCZ67Din46KSp6aEUVyPbPD",
  "key6": "QRwsmHwgCkvNYb23pYuMQsZd3Q3L38rtEJaDVaSH3kicc6nYDpxpsWudF2mwKDJKYchDtzPdZwks8Qqpc8z11P3",
  "key7": "3j8wQYmVU8a7rLnCdJHtjb8aZw6cURHXaWJg6SRuxBzp7zKi1sXsP8e2fhMqqzWDSbcSzXkuCVe5KFyv5D4z4UcY",
  "key8": "5z3pkBLhfGiXGUpu43U962yjcgBtBNPW4cXd3KQxSXLfsg9tV35PqvbNvwPTpc1CpXCNAESswnzS3SHjbZo9JM3d",
  "key9": "AGmheM25p8VkDtfwd2fmuWzLJniTKqBWNurW1197dF7Z8jiWgwZXDRvC1A2E1wpNngde4SxeQnnEVva8VWojE46",
  "key10": "3y8Vz97awjMDNnvzimG8wsU3UfYyphwfuUzKG9RVKRMF1GjZVgi8DcBtjJffdFXiGpRtXGmDWosWrGmiTAv3TJ42",
  "key11": "eDTN1C76j5WH83TSDHH8YeEDQVXakrNTQ7PWQCNDK8tEdf3HJS7cgPrgsGzUaiw71EBtzU8UAy5iTNyYQumtQb5",
  "key12": "2HE3PjYNtcGQ1JfpEtuA1RBqQs5cX8ncZ48qg6bZzjdKdKfywwQbuCvx7NsQ8fYCbKogTd9fzGy4HTUFoaQsD4VG",
  "key13": "3FNtJX2GAFbrADbBJjj1sMEBj34qv2wCbrUYxnZbxfn5enHeUWkB76bjE5UFn1FiKowP944xjkpiEc65DYtNkAwo",
  "key14": "4cavNYuzqZJCxCy8Ld5xWZZrYB1F6EfcubcDyoMbhf5BY3o8LeKMFWUL6kATCtS88YzgR7WvACWNB8JNB7Tf64zv",
  "key15": "5EPc76xBRnJZxWmHdvWbHpfP4Zusq6xhwnLF6GoaquxZLWkoZuc6VURaLDe3N2GnWpnRhyKmY6MorBsyrACW1Vmq",
  "key16": "5q3JWQc8maAhkG32txTynpjc9LXQEPEmh2JSuCKZEuJxJdoZhr8LavNoS1bKrmPQE8DwKoMLpWwqaZswRaxSxv7D",
  "key17": "bUvmJCqrpvsEzDjPFT2Bo549xsqqwNoHxr6hiq1F4KBn18WspY6WYpbEvLvGpW66X4xSGTWo8mdvf5qBKXE6TwE",
  "key18": "3aaBkVKtNmvWQnbRZpHUL1FE8Pqnvc9798hySexLAAAggKhccjje9hB7kzVaYaqqk8cbvZbBvWntuePs1EgbkqQH",
  "key19": "2axGu34re6Tuzb5myAJBdCSg92inTXA6vsX6vmk4F4863Gdz4bCAzbpuhwnUry1NzGh6t1GYUxHwipL5aKK3E5QC",
  "key20": "3squfGBhgzDVYTNHsJGiU6MVtTsQSX3E34rWsydDRAmkn2JJkamVukQbGtCXBiC18Kz7dpowJDygxVRZncSqqq6n",
  "key21": "4V3EAMt19iXfaokLXjfwuS4ez8WQsisHM1NK72fPhxdJt8EuuUh3GgfuxHzi7afcQbYWLGbSk7qh3tWfKtWZcYEm",
  "key22": "3o778fXurmZvV9EKRbZc5CDay1rJiMTxAdaPz5xgmtAQ7RVZL8gvpGkCNi8GbG86ZnyhbuUJLYg9bJDxxzticPLH",
  "key23": "QoBcNwn3T4SZDM4z2NNS6bJBjUagWkMdLMQmisRriqUsVUc1ND3YwWLepGm5wQ63mCmrrDMKMj8i2Kd9e5qBZ7W",
  "key24": "VguxSry18F2WWsjXsCJWfPtVQGzd2mdsWm631bW3VsHBimAAbHVL7GGLmoV3DbWTSyTcgkTppUH3dQ98uZzKS5m",
  "key25": "2SsrMQDHpKCmD8vP5k7W6984QjtYvRmWbkhxLcZqAvYGuLXHxnyJGLev7axZNarL3Z7eudR6qR5w8SRzMXTqr3Bf",
  "key26": "3UYcF337JrcggsVsW6z8eU9sLwggWRR1FF86z38m1KSfZ7352aLnf4JGWwiy4U1j9mKBEriGb4bHWAx2ErzdQmAd",
  "key27": "qvBdkqrcrguwL6V6W4n4DZMbtTsNE1LwXNnbr8jzrmKZX75hqJqALpGxtKBoMPnZE5EhMoSC9u7fZFWHZLXM7pa",
  "key28": "3u61RZt81sSaPekK86Y95jC8YykYNWYmWkAvLUys8UP9ndbHJg2dX1VEnUfSMHkvdKCdJNP96hQnqzpCLEsSKt1f",
  "key29": "5JC9nqqzc88tge5wZYihZMjus7eVL4YZyrRAxyVKeUcbRKvvoFrJ6qnbih1CKxLgWZvfaGL8KcGpiuXnqQkC5ajZ",
  "key30": "4EWZwYUuQBCnXhvAcmqRrZPz7RS5wFLAeWFafYbdvZK7F1mVwDMayaRnt44asp7cRPvfgzohgMENCd2x7jyCrAgB",
  "key31": "2nFeuL68SwFWuux45bEVkzjgJLkUNXcLxWLyKP1ognAKGUHkZevmSuYiENoCZE1tAZwTsb6PXZmQ3na6tGgTpMZg",
  "key32": "5F8XU7UarqdAPAm8SGhE65PLtinm9xyCfAvmmJRHoupctsCznLfgPMq8aLmUJLFAKCtcGEdmPDddawCwmDHLibgU",
  "key33": "2v9P58tNuqZJnLwq1Yk1t3b5RBbLXzatquvVpzg4XNCzvLkpAunLibSuxRfa6Rexdia9aifcnnbD3d8Gi4enRu5",
  "key34": "371KzHCJCJetZgYhNke68pvNswSwpQVkqzy6xP7duAUopfhWWtkjCuK13EXUC4Ss7fkibP3LZTcrqFHAuv45nFDg",
  "key35": "5C2xjiL8dYXkPrFB8eDGZXY6EXieJW1WWdjAdjZPGMPX4UuXroCUVtUv8TXvBni9zgjB3qkgphUq6Z4a9zdX4GMa",
  "key36": "2zWFyt8Q4yoA1AFeeCpLv2nWj3Q6Bo2Yw8qNMogj3J1iHEnaEJbEPcy7yiFVawkzmUcsqb6ie31ATRYqcbX3FJet",
  "key37": "47jSAfAwSPQQFu3zn1CBGHfo3nVKfs1WqN6pawj74Lqh23TXexJq48qLxNHPDvZqoznBu6gWLQ591L8YJ81hR3t9",
  "key38": "5GuiHc45aVs7QrGhEoKtN1EhEvB83gk67ze4XgCsWteqckqJ1PR6KkAF4m3oqfMksGppg72j6DbsTNsooVHPsfKL",
  "key39": "3DpxhRyQRePTicw4GTyPhMWQ1stTxt9Vap3DYSYUZxH9sZeqHNvzsbNfL2pzCcGyS2LTXnryR5FKpdd8nbmyBLbb",
  "key40": "52vxDRENdgRLsLQjSKikJ2yujfHwBMbsAzTD5i6DtMz8erjvbceYZr1UE6eB5xCpMKRZmopYMVLLb5w6jrQ8szsA",
  "key41": "2fXiKisTZ9b2VCTT1gYf5XtfgXDWgjsi21CQcYNE6Ak9p1D4fnRkkHhbrBRwJrVukszNrqY6hexBPMFiqTntjoSY"
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
