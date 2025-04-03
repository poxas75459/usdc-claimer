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
    "5EjWeL5rANMFSZTRsmqPjuGJBxS6QfsYNYpkLreJc6vYW48UUEt7KA8FzAkGCkaLFQVakPHUEBPzYaRoJeyw3ef"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PbyUaiDugM7UnXf5fc3zLcWXXrZj4VUgTcJG64Q5iJko7TfvrEUbnLXBtnL7kmjhKiTCmJXjwRtpEUgeyxiHpLq",
  "key1": "3Xtq5D7mNN75NXLkn7zh7e4a9VEphuntPoRLLdP7yvoLmsSYnrsJ1XYdAZmofw3VzoNhLgs1vGEfawm8uDAAaJ7M",
  "key2": "64JMTGXkJqqDoaZeqYvRVUBtRFHJW8EoD3RYxku8fChESG2HY9RQSB5nqPHaC58g5KjegAbmFDqsMA5DYV9nhtR5",
  "key3": "3haPx8hCxb1fLABjuk8EnbKhg1PFYo49BR1EFxcRdZm4quYkHqudDPeZbgnJzcpHxCYb7nFhcV4oCCxAjS14ufo4",
  "key4": "3oWVAdtfp8TvCgP6D4ULJm5CZ7vBwnRUQQRzEzHeVDxkfNVefbueHzBaDzsewkuCWFbY36F9AkLPrTQswrLpAG9B",
  "key5": "4dT6VpaNcKe5zG3XCZAWmKeAJFqDzspULMVcwBnhbfewBUTzxuu8svguMA2tZvJ8VAqyZA9pDM6ZWmpMkntqhwkj",
  "key6": "2wyAkcoWcUQq1PX1TWEhbj6bedejohBb2LmMD7m71kYeMVPMVVZ93MTnV7TYqULfZbxiKNxPaVeKHUFcNdSSubjF",
  "key7": "ngbt3hnCxU7euh2uB7RLLeU5N75SVfti1VLxiQrnaZaa6znZEbXNuELoQgEb7a8gwibSDfmGgkbwqhHMQ969S49",
  "key8": "uRZrR3rnz9M5sm2DY37mWMGQ4tjZTdWdHtgg7iMH6sWoPRAqTBcTZRMHWw7RPYNLZn16XusfQyrKMU2arqwr8u9",
  "key9": "5xCp5a8afBD86na6otjVvkFBe2LbDwubbfmaghyqchiB17Yh8569sddGQmgZSHo8oTqS4vvsTq5EdySw3Uy775ts",
  "key10": "2mGaid2JtBbUUVnJTNhpZoM5bcCNRv5SvY4u74FgjBPH7E4C4xorPuzoRXFmPEqpJf2bf2gHq9CpgiEiDo7Lk62g",
  "key11": "5qvKw5SyWBse8TNTfDCcqaj1H2EgYkU7Fk5NwgZLRkJ4WpQeCefFYXnewFdr44QSG8yKNvJHgmxiBzQQTswP36PW",
  "key12": "rVhioqCMkZuDQ7VWjMsLaRdncYte9S3CUU1UiyBejkDLze73nxXQ2YMUij9ooNzy9Sc98HhTqey99a49RVsJCMe",
  "key13": "5zyu2nbNfMgMJXKgUjraubZHtAHhJFz8TwRj2551jE5a7thvZVhp94pPBXZhZLLuHsCrZ8XkKxuqG42ryZCXgxVV",
  "key14": "25cjXBCRaWpZ1P1cojYVaMYyVjkW52rs17brCiDwrCgPjdohF1CqUpM5ojuCT2cbdoVWgexWkSVG9jUbsm3Lfvdh",
  "key15": "ZdoiJLNjHHp3Qqviq3ajmPFp1GmMTims1KEeq8d4jjv7kGSoEXrKTfW9UpcTqrBYo5UWf5yyLeyn4T13ymXxDNw",
  "key16": "2vEXn1eq14ZnFG8maUy39xpAskVJHWdHhiUSv8xnu3GJFYt7vuSXfoRFYj5vCvkTEEwCSMU4qWQVzDQUVvtPNaxx",
  "key17": "3AUWrTP8kb2DUaeLG7GewnC7fm6u67mEQRAnTSc6FD21PZvBm7HdP6UH9R8VKFzFneLeoi5omgnZ9RkwNPBWjhDZ",
  "key18": "622BWiJQbUrP6zd3i62dW3BCmkApgeGrXUBGxcQRYvZRtrmbrXNzRbvRtgD4DMMUmE1h9mVwoAg5KFNgSA3cMyNp",
  "key19": "4xNEFaAfUuyjqHsTXf4Fv4LxmRkcn23mSv6tRzDnoj9vAHx5py9vgu7ETfus82QQgyY5gHQ7sfSHvp3d4HspmDhv",
  "key20": "2hHuKHaJAdJ3aHYm79vkVYWYCCFv5Rv6Ce8uesf7yqagjGtiiG6AHE7B2nJqcu1VQ2fN5WjHvH6cGPjqjqzPEq88",
  "key21": "yabZ5AXVXJLnk5SQQja7TTWsp8nUoYWVJte3nzYxjYaUBZxooqGaNB4TUjD9mJvBeJyCzxShTfygxFykvwEBAJA",
  "key22": "3MK8skdwypRG2wFox6HpoiQvSntyYyjDTuXxsnwFH4iuYNzvpLq1kmL4aexxFgdgwjyumbvowwdVbagTBn1LECzP",
  "key23": "K5Y5Fh1HXsTP9LXmbHJs6N7j1Y7poikBHvmDAn24xdFD1KmUuyHCWyZLXv2Dai2ovcUse7rbVWvV7VcMTeeWsEw",
  "key24": "4Ze7XHRY7FEoH5bW3Nj88oWttEs1j7j7oeSszXrThNJuk6PVU21UWZsrrgkaE6v19CPYhDxUGJmJCfdnBizromJK",
  "key25": "5FdvYzqFF9Cdn9umAdMg51Q5W9F1TMrsTTY7XC6RA5qSUNe79co9eBzyptZR6qRYjfvi8MZgjDm7Sj4yMGHiSqA1",
  "key26": "3c1i3LbPWvULNwJwV4LeMYEYBNtT2LFZf3auUSnBLEEnka45NZk1wMCcgfGfofFdqyBKsWuAe3Ty6jE7dWqi6MTq",
  "key27": "5NCe4TfoqVv2owDWrzV9A83W4nUfvWKnW3KPHKxahQcfH2qTZe9ecHtWvwqRKS4ebNzxCGsvFJNe3HUxWBo5DUso",
  "key28": "2FA1oDstQ1a3Pp3araokE3GW6UNx4s2iikkjEAvdpFfzxUxYnwYJPgEiB6Ua89ubSgXeeMCnqwmSQjPRttC68ijm",
  "key29": "34ZyXb243Pv8aFa9wAezXG3aobWukWet8AwACYSb34k9t575Ya9fEYJ85j3q1YMdK4J3h5bazBYvneAbi2u5GyP5",
  "key30": "VVKNoir7e51yg3if6UnMNyxKfunU7gwSf445WC7W17iY5B8jhidUzrGJnYC8yzzDza2SzzvEfVpZL33aEFoyReM",
  "key31": "wANF7jojsi8GsMer7GKMhNhRiyN1vvcDQGEsdiVgTnidGH1e5EUZcDtmbHjUSaVTeV9eA6GWBmCnpG8mC5nCbut",
  "key32": "5xUJVYnbfAtGVouFxgFrXqPZYV2NSzWU8S8kfAKHt3GtaNx266nhPwLpmBWYRSwjLnbEQkroETqSD82c7UjPxk8z",
  "key33": "3qUVT8xBGvEfXABL8dZT4uqoWRzJK8iNSxE695mHCizNBiv8J3jMKzNNBkfkSUsjyKfcovAJZ4QJFHTY93LcAyVX",
  "key34": "2dBjBrrdjgukK8GMcHDdkcSChQJaLqXXugx8HvTQveopg86uAx7E3j2wNqnhJYwGjabMBFs5JPVCdkoBRt8rwuLo",
  "key35": "49eZVK1Y2kwYnh9yuueK5S73Z5XkY4VhFLP7zXTjUeqb3zVK1ueg1b9Ks8Q3sBADUqUZQG2n9LLJ7fgDvXvbPfAc",
  "key36": "2daAb5gpgqqJ5wN4AKKgj1rjw6wyPcpd2aVhgoD6gvuG6F9zxotY3m9fNAycg4rgJVKeqSJ3Sd7CewRwfyuZ4wsv",
  "key37": "3N8HDgqCuxeNwcb4SkGGMC6gj7RpMGBPAK7KvVX6h1ZqN4andq4NmwCLhTpbNoWGrKTcPRWMmTPVChzMEnMmt5dG",
  "key38": "2uowWBJkKyDWtrDLbZoiy8ckbpNiALhbUjqsWSUU3MhuVuHycw4XLZJdKvDLwyW43bNLRCTW3q1A5QsHWZqigCLR",
  "key39": "2gKVaPS85GdLZ8EAfEQGA7EaziLqiKUHpWNz7Syb1bMNa5gAv4d38vKLHbuzSkwTNs3GamcFwWaZtE1Rvfk9NWqm",
  "key40": "5PaAh3Uqv8fKmkjE8naJVLQKJkRHGQMKtGkDVpgpXQwNM5epcZHR3XwvgZjWHp4SS4PfwKGPZxBeKocT1PYmJqVA",
  "key41": "5gKn5mFuyutru1abfBJ2drKXK7aVApmeRRr3aSCmpx4oVvoPKW7tV6eJhJ7qp623nZLsRTesnKou1zmtBPJH5G3d",
  "key42": "67TYEYYFYqRvvjR7JvEKcacsegFejRKrGW35C5C42gcMYLoFLzfhczF3xc5CmjQBm1YtnybeXGjhR7tQEJ5MBzm2",
  "key43": "2t4ChNii7CNYxRMVPzAY5NggTR5cRc9dGQpRDcYYZ7nxgcCMapydfEfZRxeGchonHrgopwRMoXK4JXFK74SN8a1n",
  "key44": "3DUhNp1NAN5rVBqhh75PK1TiKhH5eFhR3RQZFF5PB9bvWY8gLruPE5uLzWicsdxm8kkPNxTJNF1kqEYDeKPvRiti",
  "key45": "4bfrH3t4J611LjGcnDzKi18VV9vPheDiXn7JohtVHbKYaUyjkeFaAHBoJQrgPQvFRg9nxzugMAVZwYNdh317Q17J",
  "key46": "2KPQCNKBL3A3FYN3JzShXfdwviAo4F9hCjRRho1YkA9ZE8fm6Euuv3CRRvaA22FeS4HX1BZXRcWnFj6i9fNGX7DQ",
  "key47": "5Q7PUzKBEourBAe2QZqC7EvRiWQ1hcaeTGgZAJ9HFVZXJjARGBGez84N9iGEZNSnshoGmf533zVgmg5E9c5GA7rg"
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
