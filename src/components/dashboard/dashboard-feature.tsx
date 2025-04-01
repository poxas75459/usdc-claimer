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
    "3vQmGTPK7TspUDLe1pQJcRp9on9EL6gFLSfi4dZAkAm9UisUT3G4DQdRtMTuJnhDK4yQGk6HGj6cz4sXhWqmw66r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zdcozqFJ4BTKZG285yjKar6NCWkvMDAisVH5BPSMP6XYvTTPwMDJTvbM4pEVesGBEakNAk7Kn8FmTVanEzpiARW",
  "key1": "333hjyE3iYfDjGQFrEB3zs1ZFyNxyJKnWaEqvEXHe7dsaiFRjZxsUZGhis9HQHruoXsoZFG3dcr8HToU4zzMe6Y9",
  "key2": "5Y6XzwmRKfucsMrmJVaJeMYp852ndDq8XaxGc4g3qpVXoEuUKPtZuskTaHYqeqi8tapSnAhD4wsaCczmWuEDQ5nc",
  "key3": "zmwDW1rvDhYP66ibgBi1Th4jSSTy9SXrMY3DqcduJ4PeRBboV2eqbfC5CQbLGfRtMbZWiuwxRYfjEVZzHzDhmAh",
  "key4": "59LiqFbcM5ZP9yMHzWRa5Qrre8iCU4XKqcBf73trpbiC9VvVbCvyFJWRYyLytgM1sv1nPkUQsmU3CHBLaAPcEuum",
  "key5": "XibwJf4xRNwXthj5o5nztRjBUL8Kn32PeCzKtYjhr6yXbGByup6gyGdTu3PFxAHJBUtJwDuotBQGLXapZZrvJqD",
  "key6": "3PQdddt4j3F8SdhmaVCbWDbo3ZZiECuoNLyvkEGHZPSPQD2argrseBiu5UgykENw4y7yqvBVZcDQTH8kf2B7vU2x",
  "key7": "4UwGczLC4XvKKkWrKP5yZwUy6j4b75T2EEuWNpjkTzDoCywkhTAvuRFoDZ3gWxKprZ5ncAmPXbNfuAuUZwgZqpqE",
  "key8": "23EY3XULB1ekMHByFpStuhmw4e2xYpnxhFXYDzwGMRTH5xxEBGgmGviGqnjSabCVzU4AodAWjQm6ACiwbSrxJe8q",
  "key9": "4NDHFa5keLmxeacSwPLQjSConnfAs7bFyZUf6FJnb1MAoDt5k4bN3sNWFgeqkEgAiktCFqpy7PRFkg2pv68BZgDV",
  "key10": "49QD7JzTBK9u6MREjRENbA1eTinKTUZSff46GnsrJFJgFZwCUnRATU8CmpbQ73Nm3NL32BjBAFZKJfzp6LZ16scr",
  "key11": "4NSmkcA1zqXQ1ok2GkDtyrn9oNjh5suFQSBe52fcUUFM5F4AzqiVx4MwjKy1YTjwtNu4gwSSMijZpMYoNdmfKspw",
  "key12": "5fHmZ4UahEeQiLNvrf4s7n79AFNwb8guLU1EJoXBvbM3h1SH9GqLmT8dtGurioqo7KF98Dp3UoDb69xhXFrmgVBD",
  "key13": "4arETKE3RDA8iUCtisD7zR4XUuWxgh7CFL5f78DZm3vxc3dMhzvajd6WHEFHu1gTvbDcCFTcWsruWYD4z7YhowRu",
  "key14": "4MyPqg9ueXaJx7pJQxz4txWdLew4cbHN6HaqgFDMzGpeC7bzmxVKwnCUwdv9aVtSrMbJZFfs9SZK8PAGJ7tmDanJ",
  "key15": "2aQbhAPMjMTzb1oyjmKVM18K3L4NQfcCfmuo4ekaDXRaj3NBsZB2XEeU4rkoYE29f94Lk4k2BuEk5zTZKwFh1NRe",
  "key16": "2Axh2HnDzpxFTABCXrFa4wDaKNRio8FBdEtW87kGmc4dVYoJ5NfZWj72E5RJ5R3RtrXkiKU4xS41esmt1ugifxvu",
  "key17": "2uC5Ww5mNTQtCcSziiskUMWEpoPuYpfk8f6sKvU76aMFsztpirjBj5RoC9YatbqRtvwiTjm19fjZvhUdEUvBtj2w",
  "key18": "2Tz1Nq4iSCi5hcng8ARn45LQuSacTenEdYtdaFcoGMi74ubFviCJr4HiGvaRuv2KUqoBNSSB9RzEwGCzs8oAoT8s",
  "key19": "5aDQZx6wBADpDsZ4TCQuHvq2EKgBFEYjfCgARurYyDhBh3TtExJGAbshYVPn81AdvwWiEWA4b9T1TnwQC1ihtYoJ",
  "key20": "5tYTY15YaWLwEJzfbyQDrCQgDAT2vNxT4dvokEDMTnePpHLxrHmvc4gaUQRFdtF58SLqq5rYBHxmoEnvzzSL6fmQ",
  "key21": "3ApTno65d4L17UK1i3gwTptmiRnvyAb9BoCCwmZ91u6oeE9iwFSQBdh4dbERzSJfaP5vzrqPq5Qv26gBqfxVGtgF",
  "key22": "652bTo1ZucnW2o88y7mHPtWuBtGBmWZ3ddL3oR7GAzpRypG7CgdREz3U6FEeqaMyVKKCoUkfUdHyCqMW7Yxz4nwB",
  "key23": "3RuceJVkm8Xu1PLn92kVkbudeyXwULV5PnTQXmtEgPhe8e2WJcGWBcWDdUMg561LdjYQja8q2y67Th2ktUxnCCgR",
  "key24": "5QebmXK1yg7n3wBp5xY6fiwTDeiQMq5N8enJrDKwWBxZnfPZaAsd3rXQfV1JDgUtWQbAdLhW6yT4HEUduxrUpVpH",
  "key25": "614ZPQQqzpXBm2hs67YWWcLPW4mAaFgfrW7g4rrHAEX8mF8W94hwZZi13p1s8USaeSk5TkuHfWU4NC33dxuZsoDr",
  "key26": "3MK7aWKY53SWovarkbhSweFz7N2f6j4wL5H279TZZDZcRZUZefM8iXhFkj61U3iZdP631M4PLFpyExqN3GU5wey2",
  "key27": "4v9eL9CPN42rKGMyb3YrMopiyv29iS1rjpNpYuVUvVvp9t6UQQYBqYtSoknXtWi1EcYo4rYQNubHxwYF7HYBtdqs",
  "key28": "4hNkq3LqydQB8urhiA3aghQJvXZbSGstys8R5WkHPSg3P84gwb4QiQQSqiRvkRKeiAVCDk75yybqEZz6PQjmcbPv",
  "key29": "3JzcqBhaXaqBXbHXsJ8i72UMkGvD7o8Hqwa3Mn63w7V3RMuTXvGN31s3gTVfcZ2J2gS7AFijF54RARUqCzVKeWz3",
  "key30": "2wQNLNwikXituHKWdB43LAdN8vTbRLwrWXhf3FJHJvfYncQtd9R9dEiFP1wf7RkvNKh2oobmZKiwuvuwk33dU5iv",
  "key31": "4sszAze2rHVbiCP66c8GPuu1z53dBLWxp5Zz3qf389qUUiz4rofasSoCRUNKjcEQBcqVMoj1N381bX1PchDVtQio",
  "key32": "5ysENVui92XcwbCST633XKxAJqskfvs8fgj6ucQnitoEo46ENUPaNJBwvbvVVQo2WG4tU8NNJiRNSovrd88YPbLE",
  "key33": "gwKuL7HCLPkqQwcpCs9kW6azXpHZWC9awiUwjd6n8yMKyT2UZmA8wmMdDiN2M9i8LhcgGZwaZ3bAjb1XwfVbSbe",
  "key34": "3kY3M5Ywh6npKAGDE2Cz2s9xY8hxcBLksByjBRuu2zQNnh9vHBa4ytsTsxHeDYosgE9NhdRvLRPiGats9AVq7yK3",
  "key35": "5upuFkNzUumAZgVDPhLWi6J7Zi4X2NE9Y8qw59y9j9DKhyritq2XSQeNaiPmfQuPkJiQrSbEgbxqmKk9Y2vhvDXq",
  "key36": "51P4MZeQwyyxJ3bNBe4Y3SNBcPzBQnRCU7Z8MEvnENr1gxem6LDpRKGUXWv3yZbhDkSAa1bsUf42P2i9xArkDSpa",
  "key37": "3TgQNrzGuWYXNJC7AEn3wf3pfPaCiTh6ChaRyxZyXAk7X45qsMgnoDFWBqnaM8KNErcLJXsi4tRNrprBAtX15DBK"
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
