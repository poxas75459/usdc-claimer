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
    "kB8K3rYvdB9YMnuZdwbE8qbVs85NeEej3zzUxXRqPmdffbncHYhTs1uYqwATXLTo74An5QJ8NXfpdZB8tMxvHHi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WcTyUzevghMJLLm1VSncNo5xGmSznJUw7xQr7NDhmHG7PH7yqMWJJijfTCmGuQ6ycKNEYGV2pKbZ9XYPfjnxdtw",
  "key1": "58mn5Wxwr2J4fiAS68zbJv5mchmS73CiGGxc9sAJg4tEtzPRVebw92t5ZAaC95SjHAyqJ6xAj5gAqaWfkAnyfHVu",
  "key2": "5i4VV2tDypT9MFEk4xZiNXefCab2u997ysJA95xH2rUKCpZUnLMSVjc1p81FdEowHSr7YgEs2oqihAnqfpxyHJZA",
  "key3": "22UMaDSaKz5JMTfGCLjVnM631YbWKWbkY44qxFikq7JyqMHcZVWTN6XGi23ADYTJmVAqpGiEQnajGZnTBgN5KufR",
  "key4": "5XjMJqKgZigswyyWws59F9jcrwxKQFpddH88UAx79iL7DkvYiNoX6KDt2pyiGPQjhoSAHNfAPCuktMpbRipHLrLc",
  "key5": "2mY8x4vCCGGKAiq8g1hJ44vtgLhJ63Qb51nkRBHj8g51TCh1bqdv5EAf5tymkK13Y8uFRT5r9UhnHWsq5KeUXp5q",
  "key6": "4eaBQFGqxAAxbwJtfHoCFjwt1QwB9qcETnLbpMrubRsqjMt6xFSMgMBNatxRSdSJ319SawK5rgnQqn95n9aewZPS",
  "key7": "4KRw5mn2AQqAbyQvXaTBkToSLnzZt2WCt7DXpvSiReX5xdmmNezka8GakjwgRfTfAnnTzQ5GjnBkhydw9HzBKd2N",
  "key8": "2NkYpCFuPgjAUn34a5nPS7UhS5FzsRjwaZJ5HpSYKeVizTkL5fXLcHC7zrHoY77ZVEb3rNGHq3QFiXoLx2NVQSEg",
  "key9": "eLuimhaCqzMbEaCM1WAku2k97og7NWHR4ZcxBrvQDrLRcjeuDeHRWvhifitEDwYCiaR4P2DB5GmF6ixM18shH5Q",
  "key10": "5Tc1VnUH1WYbcgryMB5TvVgD11AUcoKRJzRbx5jZoGe8BTt2qmQWcuFt81ka8pAvbsTuSoJKgXDxrVsUDqMBZ3oK",
  "key11": "62Z42z56fDJqLM3RUX7UUNFYUPHCciazx8NPrQ3qD7FY74YE79bD2pwo4nAoXv84qJfysSPwT2eDu2tU6q2mNL3o",
  "key12": "5H8BKiU5qvpjxaE4kzF5fjecdqksHoh8JKdoBhNCkWpSQsfRMGGUQG4btgcdWrnzqgxU7NDvm8cx9jVJL2bmg3LZ",
  "key13": "eSbdUfrA7KTXMzTRqU2nvomR2one3GuDcJqnkqhD28LYuZHfhzPLjbZ3tgse19byMLU9MXjeUTFmJDVERPbV3JE",
  "key14": "65GDwyopcYbtxVpLn2CZshdPjrrWXybd2jJFXAA4Xki8MCmNrjS9Lx26agVANT27dz3n4hUZRiwYMFzFfVg23Dm8",
  "key15": "2R2eYTDADKQ75bMczcpSPqKxrCCdZiiUQPwYCCfr9Nr98wr2MKZkqGUCvSoiN9dtDbwt9J4UxuMMtiFgQF7Mbea",
  "key16": "3eyUj6zQp3m7xKFZqEGB8CEx5agnpPbL4EmcFDp3vx6kqdzPUSvrFXNteHSuErNCVVBJLKaZnWC7KbC6bYqoaq5h",
  "key17": "5g85HHUSWnHtYyGomthPWkEEu8JKjgdL96BnSebmFoaMVXZdguHm8nUDuL6g4wmPWBqh3iX5nUYekFHCSzk1eE6D",
  "key18": "42mFaaFhb9N3AUjcQnLkUAkPdbkGrrAAgGJWEFHHqivr2eAEm4C3m9f8wFeoijoqAwTAQKir6kZR1tJr3D4nnNUi",
  "key19": "4b22AUYwziRGAXMAXx2H9x1Aivdkk8mKwEc7mTHeeqBupYttUujsRwvN4i47xpkEDnTBAge87CUMpJ4CrmpPAvj8",
  "key20": "5P5vfjzw5WtRmUsEr9hMDcjwJg9XaNrUzwcQ6U1YaGZJKpsnwUjuM31wvfLMu8cSvUJrEzGavriqFiuDvmXwKcWW",
  "key21": "okFwLLRWfLw695nkn3FGPqXBeTJTKjwZG9DZJxiJECfFjYC3YUDqaZhVdokSrzHw78MnMiaMU7zdNeb9sVWkAGb",
  "key22": "5tntZnyaGERvTNGjJHVpWyBXvX3dPN3bVwHqbxLYKt3Amh9iM3JzsPbWbbE8zboXBm71yorQVRxDEnsDXTtmEyAk",
  "key23": "5BSKNE1Yv6HAaKHoRnQF8xQa7QKwrMT4hucXTaFBdsYeeRCkX9rk7uuBvtUyJFfuLNBN2sLPqr4xQj8Em815moS6",
  "key24": "9fQESmoWuAL3qN928pER4rE8qA5eFpfnhA3HsuEEXNtK9135NMBbnd5N3YuXwsunodogEcguFWKb6QBHBzPAzLj",
  "key25": "5Et2BXXK3kZC8FSeEV5Vb2pZ2T6NfheKC1ZCvaYtFmkifibq13nCUC55ii1f6iuUNVpLN6vG9y7Jk5rmd8XCSpT1",
  "key26": "5THdxT4nxuPPR2WGYnEwRJefZEHDC9ynYDEHVT6xhy1BTGKcL15BsEDEcC1u37GWCNMDa8MFvT6SGj5cRefrVadS",
  "key27": "4EkNhxcN5pDz7CMLuyYbMqe4e2ueA8Haq2cBtAPmtukdrRUwV81w94Nj1hgH3FCUsHvLEsvsJoHJbwyvrYLkK9cE",
  "key28": "4Mw2ygNuHHpi8mLGNkB34uAgDwM2fybhVSpUXB7P6V2aNDT7kEjavSB4gKySDFdwkThkpkspHA1qBYH3bZ2mKbwn",
  "key29": "38okzFkvJPE9NVdQQcBBVevcbU3qVwnoi68NQqxHK7nf26mZBq6SQwfj83rtYyyR8KeAMdf2KzduKPTVzPmn5fQg",
  "key30": "3FcWU6NoxrV4SWaDo4B5NSKsziBTmkGQrreuacUZ8FfxgKedZbjeTt7quds3m4aWoc3ZsvNFzWLDBrvLSoLAaQUy",
  "key31": "4FKCHrfBt6Gks1fKA4KcajJUCJt4gFiAj9ob3GcNLuhWVz71tSJTCynyxDoNKU7KvPMNjbSXZ5kRHF9mN2bLNEen",
  "key32": "63g5kZCcRu7oL8XHMoUyK8wkrfy34FobABgvwrmUo8UKhfzybFuXn8bBvBabk8W3iqMNLi1CA3oFUyBSFtgXqKcU",
  "key33": "5xiVtRfkSwxbBAN7GgT9Gh9H5TzLxESVXtLzwy3rokBEcTRYojdV27dM4HT66S8vdYyLr9kNZTcBwn4xBLG3gEeD",
  "key34": "2h4unb7ZueVH6jTVanSSbYHGenbR4gyrJskCX4frAsAEcweEnXnpuSWLNYSikchSwEdZsMoh1yMF3KxaW8L6zAQA",
  "key35": "2eRDuyQ5zUjz3y116t1McyrELu2qD5ZhyPvd5CTkf6e7T5CQ1iNB3Cndb34gk5zS92tDeDCL3ApsAbKPC8Go25Q3",
  "key36": "pAVpXGH3WjnbYJauL4JwxfNAuwHDfSSPyTADymMvtjCcR8jRjSv3EPVizSBeoE16GBBFJxZ6QSDxpRukdJCMq5x",
  "key37": "3nwbx3ih4zb5McLBncNLDXSDsAbbCrBnR4GuPEYisd6rpuVPz9cGCFyGreUFMSR4pVtjCt7jLQHpvNEPuJvdLMH4",
  "key38": "3ehcPJkYCX4fmoAvqaSdpPq86e7g8qDRkExP1L2D44BJXimRMnR7QqwZC5XBHNjQGucxHJVWrMEyY7jiRWXyqvZp",
  "key39": "2ULRrgVeXedbGzQme4VN59YxvFTscjMQkPtvyS5RYebD6NGvxz1oWeWDeBWmQ1sTgjHTn8fmvegzRLho5zrxy2kw",
  "key40": "5DUK64L2G2ZMTdh9tLZ3oNCG8GgdR866bXXo3X74y4W2sZeEMyAZGrJUyzHz5R6dtYKJRVdfJroxC6w8WT8j53gD",
  "key41": "3ZMvKpEtjdZBb8da8gnYtyDoTk9YHMRu4tVghxsEBA1KbK8aXhLZCKzZcZwBdtb9p3GtSgCMJCKTieNZxSgXuFWL"
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
