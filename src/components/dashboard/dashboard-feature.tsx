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
    "4gisvtEKrSmdNa4sP2Q6J4aysMHeEUB3bkqfZfwqHbVBeFwhZePBSK59gGFo3bLFtuzmJbGo5JiBsU8DoSEMt7tV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32ZpDd85JFn2VVJaJkzHbQU4cJkCXomEzofaXnLijjhdoc9Mo1fHXveMRcyTdkJFyxmdjEYTqZF41jephZLDoEKh",
  "key1": "43vK953YZ8jN1oeNuZEctZHvnVzvLqPnbuoKBrUZ8B4TADq59PNJe5nPvkjjkNMsYCErG2LJcSdkiewudv8kcoVK",
  "key2": "4csvHyMBpG6NvkYkCcXg8SDq7aavziugrJu2jpF97L9jLGLFV5eoBYspTovTv7Eegv4wDo2NpS1Jotqpn4yyjFZq",
  "key3": "3h9C8tWGPPmbxnH8cNYW7eUhSkAvrS1Q6LPBXwvdxHPG5waYYHK16K4KLDAtghs1ExrLhEkhMayPA6QFf33W6Aeb",
  "key4": "5Z4QkS7Wvf9FiidXdHN2LUs4FVLfmX7Dz8E88D5GVZfeJDXLNtW1p94wyqvCiyUKHRUdkWSS4GdhZYc26bs7FRCQ",
  "key5": "dpEk3PAUCjdaK9uao9zVb4cRPCptwYdMfvdFc5Any9qxRQZC4gVewcBD7oLC9QR23RFYxu3mugE2UUnmaEKeoE4",
  "key6": "4sTv5PHThMq452oQgj1j3hfBY4oSuPKtGsdTSbrzhytghZZvABVyzn8AvksZtbs3Kw2Z8VaK5DUfP6GMrcP6Tqnb",
  "key7": "3m6tq6wMDe5wTsjz2enpendANPcZTVDP2CZoXtXV6pAvfRGntLcCTnAdhE31GHmbGsD58d16E3YHxQVnxLAeFhZU",
  "key8": "6CnmLktLjMw1AHcKr4XsK5SHctxDxkpJSr3MpUFKFT65mUAwqErFzpy5Be1YoScrmRsiQmfZ6R66t84S2kroYTi",
  "key9": "3qm7Zdx4APwCwitqq1yNotMd3LhNSNv7oEPxgJoSA5Jot6LcpaxfUkwYeH1AZfDWvK5BAz8eJwyZj52miXktKYx6",
  "key10": "2p8BRm2N8M6QXGd9diQ2fb1n8uxrmcYyskyHQSMS6dnLShpk5jidotyfE8FKaYadjTwKCdzp23MDp5CfjTU3tH4z",
  "key11": "4rQrbGb46Ks53jHAmtiUxepsXabvpTQ9WHcg7FPEmnpyLgdJZzhoWNmAJzmPJHnzPWSB1ZyKR6QuZJWCzBTp2NAS",
  "key12": "67n3bPrKz8dwCgUgEfAwM7W6J8y1B6djPFDDSVQnioiTbLk5oRKTPwYFXbTKWJru5gRNCKy6qb53bYEZxKwH28ih",
  "key13": "3eodoG8imV4ui3vF1yuHdYCFteT1Ti8UXwgfqdFEJ8JdJYeAKUDW5GbpPJ8GPKn7oBSEaQhPcb3PnPGxTR1tQMmw",
  "key14": "3zTWFgcNU9DhdpJmHTmMLRj9gVuZkfrxv4yFPjHhmK5gqPTysyNQPLdQbNC6QpcWKMt3JXuejtMiNQQ49Vqg5P1K",
  "key15": "BxSR6kta2ZegHvpKTS6dK6R5w9cBTEwgKEQyYwocshSPUspj83W3FGc6waSxUMKCv8Txjygjzmxgriieqb9TzsK",
  "key16": "M2VZeQaAm9DL3iABcRGpPWSQzTjXbtUnqv2JCzuANZW8swGQEgrE6gnTUr2imj1ABc58izdePBN7q9Nhk2qafkk",
  "key17": "3KUFLcX8e6MbY99BCatmRTkyjB6VbuDUk4wTyio3gx9z73vziBpTrqQ4qdxCP6t1d5UtCvVEqbpDHwhuAsJH6TZv",
  "key18": "5XWp17d8UTjTLHCXNRSfD7wN46PPXuiHfXFFVrCyHeMYTfGiVfgX4mGGy95RBxXQNGsRvdk63TAJ3sRg9z6iNc9X",
  "key19": "2BoAJbQXFJstyCfHv1RdcTYigrV7FAQHdcuaDXmHWy7hMbbbCJjYkzyzVELaFJ5UgE2j4Q8N9B9Mb7yxjmoT4L65",
  "key20": "vMr1Hwrh14BxQ2UAQYcnEfDaHitYfKKtopZtqYj8usUhbsMLSbeEWsQJL6CiJ5paE4gPzETKZNz9bJVbBnhBmMk",
  "key21": "3BmyJYaHM5sCPP3mQxqvbVBzk9heRengZcXBbcyLB4jNq42L3nDCPcriDFZo3NCEMjG1kZLkUC9DCENFEeEydwJ4",
  "key22": "2N2bk1YqqmmMeiTgd7K1YKBJmqnZvE9qXom8FVJ7Bb3Fe3CfYLcomWEA61g1F1engrCMe7wQs8yoVLNwuve6nRMJ",
  "key23": "3FcKxA4U4cFMtPhyhZSbm2UCXzuzQRjv9weJ4XdkLuhZQH9gZBXjcRFbKTmdHayVSUAJkg2dyhUZQGv3LRXnWT6y",
  "key24": "4fwaJwgNYBhNnP7EWuJahU8kBeVJcctZbapXK4QbULejwAdwm3XVyx1n7Wy4Y2VzR8xePdiJibPRvrnUtUKeTB74",
  "key25": "2znxXAuY1vP4iDzY2SX3YMtA3rCNhELgnRtuGhdfkArS5Bm1MXSA5zFPjkoyAmDn5fKNCFXFn8nkpxYPMVwMNkrD",
  "key26": "5DY2YHE4xoYe39VSvnjtzrgo96fT21mvLFTVEAB9X6DPs3vekCLeJhqUmH8aANhUGfzaEFVbWU6sKs9iN8KxMWxn",
  "key27": "3C4zYtH327V5Qcma5M4aPcWXswDhYoyhvNMpWToaxAM6YchE4DidaoTJBDzn8pNcHGNk3ZF9JhsMbSGMDpcNpk8c",
  "key28": "5EXCCj3vavKbnsLhSBKJ8UqfHGngNtpGJQyDbH2dCk2ttMVZ7uGeWcbCo4D5XjVd4jJLhcpUXtKRwEeJxCnk4RLg",
  "key29": "2kt7EoeCedyEMS3Z1TKygBj2AuaL8r2Ue7vgXseKndxdVogsJGgUNwZdfYnWqE16gDKGNsV1T711X4qanXybtjU9",
  "key30": "2XpzdcBzuQQSFqHj5cZi5UeXCjQL8bTWGwQmbis7oJn2X6jVC2ZE5kfscBRdW234wyiYCC8dWzrbFdoir96gQnmT",
  "key31": "5x8SHqER8BK5dj81jw4Yn8qWgmHnvS661uhhqGBoYXmtRqPa7QBwv988ERYRhU1JbCN77edPRP5z9qxnCjBaPmTy",
  "key32": "4xxZHc4kNr5GWuANSLGxHMFR4qb5JgpoVDwKWEMDMQVm73vC7fiSrsR9W7Gq8BkwvfYsjz4hG9eV2URnTjmjf8rT"
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
