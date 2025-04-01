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
    "4VXTp18oKfhuj83VMXBcT5cUmiRWhaZJMCyDR8TCD3aRof4gxp17mMh1zrVnMjf4TzSzquWJ5fuV66kU7EMNkvVQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2i5AG6mgp3iyba23sZUwVRHXefqNc6xWoTTGGukBSahdZBVDwHEQPpcPW6Ay4UYr9Zgrmrntf5hWjBXuugqi7SWe",
  "key1": "2AfoA8mWs6syuZTX7kZ8dJZCSdGqFMV65w1jBSZrpHAJmk5YMS2EvQMYErfSngY4jG1YxnuHj3B8ZWL7kEjoqD8S",
  "key2": "3R2wxr6yYiex8ivRnD2NvQisSBtZcrF6S3nvW5MQrPwe17TTxB7UZcUkG1Eoa6z71yzviWBh43Sxb1qoEdLt9UFM",
  "key3": "2HYeoUp3QnSXzbudHupvrNPUf2kCD4jjuQwjshFZ5aKGWDrUUwWLcocrKggqkmHuCfDwf2j1MvP2G4nf7TMeRFdF",
  "key4": "3m6bTVKjXNZZWh3DWeaWWRPvKHbjr3TKKe1Rpj62ftyxALLzTkdgQRw5SgqWNbMC8F6SbYDfCS9VB5Z4SxPa5V2B",
  "key5": "4HkBuqygnC9rvT4fU4PfHbhD4YHQAqjL3VUzfLsXRBnfVNyEVvknYzZfsGzbdzMoMLaRcVjzPmZbdrF7FnqziRLP",
  "key6": "2gVm1EvnyGKzppVqQBekd9yn6TsLrUsAcw3KsFCMr6FHvD8DbFgMs4yE7mojTmdvateNuqpyzvx1scihD1XAi7jF",
  "key7": "3AYJrehptUpDPKJfUw35xMVBBRfwsywUDxZVygfwb8UaqCbGap7Eo1tHtUf9V1CMJvXNM8Ui8U7EsMKPhbHqMCsP",
  "key8": "2gCcNmfy2385gFTJjdanf3wMqunNUfS8WBqjQvycdRasB6kkUuzY5LGFP8J8xBMaTeEHNfpTvD1G1ckZZnvMJm5d",
  "key9": "qyPdHxjmWqTZg9jvez1ke8iGam8XXveSiGFe96N491DkSXXLwUfBgCYYfumgTo4Rub6Z5EQjapL6DF3jUCGVNdH",
  "key10": "4HB4zkvfbaGktmdqd4zvwc8haPZ2rzgSjhjjF1XvePRKDhZZptRaLDRbDwQRLp1WnY23tyFhsGMfyGNpr3U9SqLT",
  "key11": "451qy6opgoQrKPBKxdGhLjZsD87GqJXkn6AHbtgifeiPhWDoE6ycbFBBF7dTK6UxFonD4ZxLJWE3X4HuHpda6bVX",
  "key12": "35iRGVKhBYNjgzw1ktPBEW4iTaqfkJpccrHwpHkcY9oHX66Zch5zb1CJbXDoHSb6zShwZ6iLmJC4eu9J2GC2Vjjg",
  "key13": "5P6FGD2Twsi1aw4W1R9sny1tVZXezmScrDLXWkNnqYF74BoUA8pGFQ782cDacS8A2geP9EkPbvywKayR42u2PXro",
  "key14": "4a7c7u5scZtHv9haL3SqdJmYmSwQf1r715aJQ9XnrQWZGAiM3Rd7YWhT6R1Tu81tJr7Jpexnny44rqfwQe1P3MQc",
  "key15": "SdNvJt3AAVDYMiNKj63TtE53m52ZHrtiAVnXhfNM5Qg4SC2PinBSjhvZrnBJSu9ofUFfZ42ZrF3Pv1rBvBQMq23",
  "key16": "3ryqPGDUbZF1V2gCWUZiaf6f6v4wYo24wn3QNUa9tAJsumEMYttomBZehZVVFfrq6npYf6nY1q2bySuhLboTWHST",
  "key17": "2zy6VjqQ7ockHp67ucuPfDACh97kQfsBUikwyFcE7cwePeP9UUpz56iEg2tCeSzsjMNnbuGa5TiWpwg7hSZj3Pxa",
  "key18": "5NAzHLhhimDeYCsbKwQdJmomTDv5ijP67KfgcnKNRwPB6iPExdt8vJXZuhbi5v573k2ViytfHG9X9YTdtoDYgAhb",
  "key19": "5wfVvJWDVVbcBcD7ZkY3yT7duBZmtePcSgvAiGL4b3Ee1xHMZrWje5m8yvhgeUwgN4n6kavSKt9g7HUSJuidWyQz",
  "key20": "uCtAaUsXzjMwL5xGDusPKPr5afYp91WSXoEjCkpfadXPD8rpjv7biHwpi5eqDLxBJxyAxXA635kjACPrEtr6idb",
  "key21": "4gqbndFTvTZ2TRRKwP7U6ezhMy6n4HVVwktUJr9QuX93MdSw4yJ9k3eNyKSgvUwseVpUTey59NKXaFaQKrwNWPuu",
  "key22": "5TRvaA8qd4FvjZZMxq7ujuyJC1K5F32zgjNfafnEagWsXEP3SsEouZsEcJdgsLRSdHRcHquGxDr7PdwpRU6mbkRL",
  "key23": "5gQyGWZXvLD4pUndSDCoMdm8ToFhMoo6X7V94T2KVjQ4zU7fcsK4iekRsLTR9D9D2d2fma2toFEyqfv8E1xLA67u",
  "key24": "3hphA2sYnwVydiU9rXJRLaUxLBvE85tn3ExPB2HAoGjMpkqAwTNNa3C865GZFEayuYc69hHy1kSQ2L7mYuowxC1e",
  "key25": "rdqEpDtq4EzHvd9wUvZbLGyShQBxpLfBkCTYN9m49j5j2vHvSejjK5XQ4hetbUFs6d2XecRfYa3Cm5Xk7v4jmw3",
  "key26": "2cGKUZNKxkSaY42ona3mREvkJDwv3dBXsny8zhzavQKYJoQBRr9afEVWeGkX3UCbMskwqQXTpGXsKpWhjMDg21FB",
  "key27": "2758vhEzfQU9w71ZMyS5yuLb1on5pZJvM5CmuGJ8nbbcpV5sU2Yn8uFiRVUxUXuL3JDdqhZ5GBm3NKcECe1w3DAu",
  "key28": "35KA9etgQ8SRhduL5rfxzfse6zAZBvqXXNN2PsFFrtz3r8T6KLSrQbyWBScyc35uAWv3w6FeTdTLsahDTtXYooec",
  "key29": "2Gy3sr9TRQ52Ex4tM8BJshAhTYqsNFFdor7BMXjLnrTSZ6ugSZsWrkit8vNmS9fo5GE5DmjDWUjzAQczxcrq5JnS",
  "key30": "49cewCLQZ4c4UJw5h3JqdR1zCTuWzzGGNA4mz6cM27FM9mmTqfLDrCsAhcvcbp2RcPTtLHQx1SS2q7zg9Hk8HbxV",
  "key31": "2nJNUfbSZQekya1Mbe4HT9t236VqCKB7syqSMB3UsgvwyYYLGqa9sLY1jDr5gdhjNQJUGoyUgje829fudaBepC72",
  "key32": "4RhtMxmGacfw5TTG7XVYXZ9i2XQqY7fZ8imkM1fZHBmRCdpW1DCaV41AXvbHZqLboyc2d9tgC6VqyyweaTFn5GdX",
  "key33": "A4s9D9eNGZwvKgP6apV1dAdX4LFskPpfNTQU66H7L5PcajegnZ1V94cz6ST2Q5xSag52PhkSp8s4nCAtcY3Ldxr",
  "key34": "pCqPmpKJFMtNJmLt17o7WBfekxE6UT5HZYCWJmrRQ1ZCiLn1Zg5ZNq3wZvJFcShYdnptoMMtgYPj5ETBbee52EH",
  "key35": "23MuGn79gjPy9Ha2CZgFvxaVVQ2FMu3vii45W5Z14mjB3M1bFfn26dra7cFYEEXekVjktBbnzmt8vYJBb562vd3z",
  "key36": "2GD56JoQJ2RWT31SrGKfguwjcmzCVZvyno72AJtyKwJB5JgBcVbp3UHuVmvv6nu7NbT8k62xQte7EL5pVAhNrgog",
  "key37": "4oDB59broopYxmE1XpAoFpGhhBttfZ1N7BciGUYUrutbcfDH33UJ9oB58jo2RGwmzVbeHkJ8uxictnwHo6BqE2NJ"
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
