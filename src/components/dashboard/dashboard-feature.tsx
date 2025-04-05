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
    "2TMsF4pUHMEBjnMFp6gq7ckuUdeD9zK2BBfoFD9mLVbcgxFpyzZqmY63sn6MPqTAfE3WgiUuooATWr44gzXTssUD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iVsZkFWMF2KWMgtNeB6RPJoJUk6JEGHuXSmUdyHAJQj7Yya8zba4wsPFUphcsSk3gALP44DQFfhbmjCYBc478pC",
  "key1": "4ioEGj2gTv5SJSnt8vF5TFAj2TsSWn1aSWVhPiWTMuJs5inkX1nJMP1G9kdi6MgL5YFgfnwP6s9WCZdpBR99tyUF",
  "key2": "3U9xSxeCmFxTbudbLDiMzeGLmSveYxWyywwfCt37KsTnYEyqG37QDFxtE8HwEFxgB1Z5XvQvsR3p29Cq8h2Mvcgy",
  "key3": "52NHZT8DX9omAygYh11VbFoPmsS8AzX5ngziYx3N7zGY1sm95NQWVBCnxKdmaNnUiXt7tb2jeoBQTM9qXYihjTDy",
  "key4": "2dFmB1CQ6F1Wsxe6LP7k9UhfENfGu8US3c8Qh56ha5d3pc3uiZNRLT1ZKsh8HXkHPjp94em1PgYxdLvPgSoumFG8",
  "key5": "4sEufkwiYyPXUHcWRHYVo3peDHnKx67ZkK3t6UJ9SNoHWoEysTCjsjGhAfeR8DH2PUSUFkt2dhFAMiJjTbZSAiMh",
  "key6": "3nsHJZL3z8uvYw7XcCHeisGLNDjx9n5fsHMDyxh6AEVt1kQYaJdas2J3G5vrFK2ay7TJMS8rjUnbNTGmDESK7CZN",
  "key7": "3bE82x9g5aAqtArPS9WHr1j4S6gHyCJcxFqmugcG244y8ruHKeyHawFFWy9kW2CKP1fspvriDSSnhEhyuMDvhbhx",
  "key8": "2FQc1xG7jXdF3jzRM3LtQcTT9DyRG3s19capUGB1UquknKkAcSQKD6cCQv2DKfZusccfskDbtf9RCQ6EgKkVepN8",
  "key9": "31K64iomZCc2uwztq5WH9otoN5PQjhRgP1vTrd64K8qNfYW4x3CeAHKz4n5N1VP8WvxVtm6pbpqgAEtMF1ax4pjW",
  "key10": "4jzxv4GoTJLEpniFCJ9sZTx5wTwqUJRtm1czwEo4VJW937QkffRm7c5y5fchD8JNgZgtDdH7BFhzX6xSy2Sh18fQ",
  "key11": "AFdggvftvfdZvriUzCa6fzRos45BcpAyQfKJ2Eg8i3UMupUz6HsixUic24oxUh63YUEBKX3vVX8fJiQktYRgnpp",
  "key12": "APSYpLn6nmCVgLuLUCxJymMDDf958cGg82yJtWo7PQb7n3X2dLpmH77hPSaC72vwJL8qL2QueE1LGd2r3hoCcZY",
  "key13": "tfPqJxPavKWEQfMUEiqyxPPng4LT8CrCaWGnjPxXf15boPQh75iGzdcjmyWk4DKe4DCcZT1PgnMUcYh4UFNBn2F",
  "key14": "3jnaQZdgFKYBnZWhWvBTVqV7GP4BmGEhR2AMSFVTnvddqXGpLUQW58gXnDxgLAgCC58MS5eBuAJKP8DZroGvCRRN",
  "key15": "oKmTTWKEs6Y71GYVTZaRVhfESNo1uu8dZ7DK8JXsUnMAps9P48zcrTkxFtwjn1BRhB9JT5MvLd8yWF1xoSwXHbd",
  "key16": "UmgBrr4isUD8Q7Efmta3ihvXk44nGVRH24C55viQX9NtX73p845pP1boxUcdXUPFW4f1tFsqRHwFY2wPPZ8hMWg",
  "key17": "4sJa8qfJTd7MJ2hB5xU6trf5xq8eqY48YQEmtR6mnrNhM1mqktQ1hwR4ephB4FBAfKSM2BUiecM2j1wKFaMDDoKn",
  "key18": "2aZT9S3TGfHgWnLMkWSHPzFUXvybsDScuo7Az8NE2HBPiWrQyzxkWLX8uYH1nGD23hBGVZ84bBthKdLjP4jXtehC",
  "key19": "LaKD9oxFVHX2g4FmibCcpuU5rvSDqvzxG4YKD46p8vKcxvAoMNUD4ENdtpEeNhUCjukDmTZrjiwvpTJW4XQKy6N",
  "key20": "njNQ5xiu6fyrFr6r5N9M7RTrZ3tugTkkV5oM7CTPVHcNRWbNLyCxtAs6v775odrfPSZ4CFmww99ndwzjT9E3UUm",
  "key21": "3xom4qXVvnPzrEvYBJTkXm1KKxPDdhiBVveJU6F5Gvqwyi3MjPDdnNB1SF4nzKHxzHuy7BGbZ5ZnnHnpLHktYhx6",
  "key22": "4rgi47MGEiLo2g47JtyS3P9zFuE5V7bnFJc5XTgMoJ82UDXv7pZPioiHNuzFf1kpkKP4SYp92X8WM5RtGb2K8K83",
  "key23": "2gZTTAVAJzrykbGKkHypS7Fqr8XLJ38obD6YA5uztev1P54TwYatAyf1WHH5hGAaXwyU1R4HRdvKu9h2o729xvAf",
  "key24": "2Ht2psrVHNZa5s3xcDhkQyvkWkULvMhhJZzieTYgdxGPw5uA17aSixhfJkDKsiQ9uvLbrZPcC8rxLRRRxAci4xFy",
  "key25": "3LMTcsKMPakehQg5UUuQLvLYWRLLxhow1gHx28cdZTs4cMMAN6mpgzbEhoU5YZ56JTftyc9rMQyNKDp6wmmKFJcL",
  "key26": "25wi75jT7gWwfjGA4NyUXkuxUWdLPozpwmDC67g3tiYu5tjnmSGkWgk22XWDT9ZfkcTFuPYYBLrbqUJoJr1GLMZz",
  "key27": "29CNmvtRGLARYnz6nppvX9d6cXCKDu17sN5RXx1695FzKvSmufx8XrBSNZ5tLhA5LiKJsoBQjujn74g8MV6FgFzr",
  "key28": "VaTQ4Y7hyUVY9HrP1TEuSd2uh4X9D3uctAzwUcAPmGNxR1GRZiUwskLWATzgd4oe6MfWdDGwpDgJPQnRte5K7N2",
  "key29": "UEaPpnoFHb6NW3Q4ap2HwYDhXEwromTAKaCQpPf3XftSieLZ2iFtNwCYphhX57A5fvPfxTKQd86cmWyCUZDRZWY",
  "key30": "3hBoCTFehn6HRjqhjN526uimnpsLSAQzCPvTYZKNeKhfg9JUwjR9greq8ZWTczqe1JzTZm79fmiQQMj4dXqqm5Hr",
  "key31": "x4TKNb4drHyZXTM4MnggCXrYkAV8zyXwgrZ65zqa5m2aScotvL7BgmCKhiwhSupRmbogEoMDXszfJFXkLV4t6BB",
  "key32": "5huVFjWfQT5MhFaqZfZ1qf1SSjDmqfSKWG2cWw9bUQSf5KxjVKZxy4m8w3jbG3KYAiYTFPQiRRfP1DAiDHq8Nhzb",
  "key33": "4qEsrcRuQ8Qcyd9MYyFxPp2ZiR5rNeamzu8QfCYidrmEfZyMTLUnSWwQ9WJLsik936bbFMUiRn87qsfeeEM7qtau",
  "key34": "3DA2VgsucEBgGcmhYqmhhgYRCjnP6VPHUFtK3vF81b3f8J3BSAYfgGyak5Ej6iZqtRFLvcDDrXTJYLZJk4ZnEmty",
  "key35": "zeUDCXke8LTTRh8sGyLmDBMRCJf5D8UTAWQX75cTmEso2NXRqPB8gDrbi9vjuKFZRtwHNTSWCc5VERgvRcE137A",
  "key36": "2UJFSGLooWAQoKW8krGTodWvAqrTENyyveAakhf2Jqr3c2Kocr7yVQzg3nepdqBfz1k2ytRJXioFvd8oGLKNn9do",
  "key37": "2zLmWJ6zFqgyyMC6dgttX4D3K2MVwm6XJzzDWoCRWyGsriNDaQ4LhCfgwwQL7MiTFRJApz7H8sheQXerL4BDK6Dh",
  "key38": "2mZUnbGUrAFp7EhmrAMUU1mmGxk5KQrjoEwNrbEBj2fFRD9iJpmsd1TH2orcP9xqRW85oP3qka1LYmDXG7djVpdX",
  "key39": "5tkJzZvL6dhviEywSnKKYEFBmwN7gkhJ7GmnCfEv8MfrywGRHam3DzMuqguqhehkKApVuT5475REp4ZZ5qNG1rpd",
  "key40": "3XhnkQRqGumZkJnXd558n9EMMBdX5tyaKih9KBrqZJodQG1zfyczUWMCWxCwiNKwPRKowXr29YbvaxiXKdFCTbFQ",
  "key41": "3BMCFjGuy7gTcc7J86nqiLWKwfEMzn27BqabC7VLJioDw1LEzYvBWDLqty6TyEisPQU4hw65MPp3VvvFHXN8i7Lf",
  "key42": "Vgd57eM2fWY3mPPC4beQqNW5KrHSeE951XJwbyq4dp2MiQaJ9NfdWEQR9Wd7SdapobKkFVB2Gbekk9P9yjfdU3u",
  "key43": "5f59xBGjMYkxyGcaPXwcNCDRW99fA1KmM2yhgGafvohqrpkRQP4Fd2DXUcmXNwvbzJUKvUhzdjSVGgd4iCAXRZ6M",
  "key44": "3omAz2JYyqDx7wvVLYeiBEU81fHc8eexopsT9cNVbpHhCnfrUXKJYw9112hYN2PxYQCaWJWiK5ZqwNPyN2V4N66G",
  "key45": "4hfgweJfXthybcRtNaqX8WgKWQj61x8ZG7wQqHjr4Afrhny1NgSFSVZxeSDhF3f4vLv9Nfj6Hz1M91SnZmaZKeSr",
  "key46": "3pjdSmhuritcq4kXFheXpwbECxfv8hw5wXYLJXiLWTeR2SpJQXB3mFAdcQnfv3kbkfoGxzgRL64ZTQ7bhpvsWWLy",
  "key47": "2K1AqGT54rLLfNRFf7ZJo8oeKGZ9QPPtmHmMmjdaLWvd87tAWjUw9gTS3bXZwTWBxrm48VgQMaDzLoPzDdwUoxpZ"
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
