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
    "95YSJVtQTbsfLgL9A7E5svJ67wgbnP9nRDNU3Cth4BNX2xCHrfxTTvK9ivm9P4XU3JFEiPDThEyjoKriCCdHSYx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25wRKqu2mrkZmthK1jSJmNuU6AhPv6KQNzKWHFF5xscoy8sp1KPVYjQJSpDC8utQnnPNW1wGjGtmr8dxecJ6fikX",
  "key1": "4cFo1jci27YUsSCEZr8yi2Y8cGz8J3NHP6YNFaf3rqe6hfNBdzoLb67LzcPuxSvxcGnt9FzPwR9oQLVVWeqHYit1",
  "key2": "2zrP8ZNKeAtabycFT1dryQsyNk13RaqR5TUcS6PY77DiGFN9JCdDCYDFH9VLWvZQKBEvMZvKzyh6iEAwdd4t8Xid",
  "key3": "46MBfUzcxm2kaoZAt1eoNLnCn3mFLt3CmhcBw1musd7gKkmPWKCrrXzZzLJoAkAkJNdoRZxpEnyxU7AbPhiMfyJp",
  "key4": "2zb53fRYrV4qy1T2MFsPTjqJKGHfygCt31uP5J3YsNpKj8fxstWj7iJYLM8G7P7xjJu3QD887WYJ8AZu6SJseeTo",
  "key5": "5jm8Dr9mZJztR3Saiaq56MrK7gDNg8ZfeEpxFo8z24ouDYUJXBUdp8Dra6GKru7hYUEu9FJrKiPSzy749UaA9Fka",
  "key6": "2NYjTmTUmnfHez2deajNRWUBB9CQRVXhPt9kBfuQ981UoQ9y8URQUagQvDsKRbiRDss62c4qcvhSMStcDYhZ1vdr",
  "key7": "2MUPBzuNSmJR6eWiX6UgaEv3QraEhtw91wr9ibbG5iGap1T2iNUi611NpDFALHBE9gVwBkewntNtkKFyuTHZE1rx",
  "key8": "3xiENGKPnxu7KZLaDccziNQY3wSYBAYEcsexXY652yrezpS36SkxnfW6TUyJm1FaVPeWjM8ds4YEdjztLKFbb5Jr",
  "key9": "2CuH2FzB7aULwyjdPBeSgQm8yBvtMBGigXZFPbUeeEff4FZxXQ4zBgmqkH2xd6rsxWKc2PdNmvH8tAYdwFvz8LD8",
  "key10": "5vXvQGYMDo9RGBzR5qqG7TyUud8qQsNmzfQ8sBowbDBBqbu7tdmGU3NyxhC92pn3uNZTtRg727tTQYJ5W2CN3Ej1",
  "key11": "22yjXPC72jrp1QwFSmb27LmZmaoYi463p8stGUzRi1iuUoMxPjBiC6tCfFg3ge5ht4FtofgVVzx71JNKnPWg7aG2",
  "key12": "2Em3xnpHTgL5KRwtMQAMQgQDXwhXjjSxz6hKJoSpQK6FLBpzTEBYQPTxsB9PKQef9WTc1ybAykKKbv6kEa9UPAhh",
  "key13": "4p3GnZecQWP9wfWU7QvCiNEB6nWA2DsmS4BBqe3V9aEeXEHgao125NndU86VQNMRegG2J2iS3gj1EzouNRJGfXHX",
  "key14": "p5ULRXVCRNADqSZxFkMoNntuqbMnxngYoetWc6qbMjqGxMdnUs6v7twCyhRd87LrLSVzjdwjJGfnWfGLFhvsiTq",
  "key15": "2JEWW85YL3A23U2BoQJwmEWEKi52VCZtqmcWTg2B4zaZzM2QM89EShfTz1kQ6pNRYgt7mApyUxUegpyTBnBKtMUV",
  "key16": "hu2YgnGWSqZfAT5V8jzMjj9V7PBRbWLJxviVbSrggSikghP3QinRiagN5ijWAeFAFxKXBTTqnUW1AoHD84kwTzu",
  "key17": "4Y6tpuK4JrxonyTuBe9Z1zmhbXyvGde5jAnT9MDrZzxfALgWQjYsniGA89CuXa8AM7rsQrTBbdQ49c4N9MzessH3",
  "key18": "4BMn6HtJQgymoZdcLRt1L6ML6wzf2D9mQxDpPAPVKx2sHm2Fz8dUef6RJ2ptdQfGvjfmRx4hN9DVtgXUVseeBsBR",
  "key19": "37HZ5icmBkftj4DGfMH3o7X1anEPRA9WPJG4iBMwGcDPf2Ziv1UFATSz8G93SFWRvj9p3njxHUQgVdq5EDMqZEbY",
  "key20": "57EWLKuZ1wwrBTsYMwVhv9ZpUYXTXVbvb1nvMQufZXZ82qNsWfzDU3JEJ991xUhn5oRdkvp55d36SARXy97mRBkF",
  "key21": "3FGcckCAfJbHEtzvSCoA8myvHx3YDsKzkTQhA3Phhu1uaY8xzpyJZ4ifANZSujAcm3eYq2dHFkDVtu8NzkTxbqP9",
  "key22": "5yY1h5ZNHoK2cebf3ABs7ckFx5bkv2JTQbfzjj4C4GHv71Bi6TpKTVBLWgegmwnKuPrkP8zDQgCjkn3DWDNqMLDH",
  "key23": "3be7kPmfC3rCEqt4WfFytN41nZ511Tb8XDZtKib2VEsiYDPVCP1HfDqjkX1gmE1gZxAvqo8Toi1EyMnJGy3KuHi7",
  "key24": "3YSMcBKFuZLu8njWe8Rzg2EA5HVgX4pdbi76EFfyq7vBRNxEjfGyWi3ybPheJb3XJocGaL7Fc358wESyT1KnL5se",
  "key25": "522Z92yLVQquWTxypiHbKFuEZJCHBDFgAE7gPDFYMj7fJ5RPXCUTuLiTpRApTzx7bFoTkcAeYooNMxmaBRwiWnj4",
  "key26": "3Vju61Czje7Zjn3sNojonfJZh12gPH6uvwVBHGnHsnFWe6WPbDGXoS8TLoLCGT64p1HcypXdxwWuPuRqaVJruPZH",
  "key27": "2rsFxAbGGXjXnMjtCgLteEp6RmpmFUhNpiLGJBJpHYg78Kc5gqY93kb94kgVcg1ZdJ8TzLr9U6UYSCcfLCNRTboH",
  "key28": "57BtgnA66u2N7YtML2RGSYnmwZfptPsUVRS5R1tAyciWrE9RWPsTQe7EU87c5mwid9pLpJJrKJBeUur9VyQKTjw9",
  "key29": "4UvQMRaPsF2tdMCeUzyusLPq8je4x59Pmr3KrVmPg8XPJw3YrYZ29ARn7C2gshdNJpRNHjyuPkaF9aDHA9mhwarn",
  "key30": "4TJT7z4w8HLiTwTLc6VqSdL6grV9CgeKL7XQs5MqE1ZjrvaNZCqBR4aWLCQEVvuTdVjEc5ZTRRuQWUsoSBAZJ4oD",
  "key31": "uDo1CGJpyavHdE5Ma8Mw7LaD27uZB9kaY6kEMgWQC3CrAPLx12rhGFZLnDDXXENy64CoHFMs5KjKgmUpVWqVQjb",
  "key32": "21xFXPmXG5zyNJbi4ctBEZqEueJZkn8RiTUGDvVZKjJfYxPYtFjLwWFoee1MV21HTGuMqgLYU3umLFs6wEKFTgEG",
  "key33": "2xifsJVpSzbxgRQa4fJq4PbBWK8cs1eFfebRMZ2oGApFBanqWjGomDHzPSkgdZz2f4PuWhnmSkh3MFM5CX3ExEM6",
  "key34": "4e3XJJZfMD7nQjLa8JizWpZnWXLQaJRFMEyREaR2pWrSTcTQ2UcV2pdQAf617GVsQMpFQ6Nk8pa72rBynBc7mcgo",
  "key35": "8hPbqME5sQeb2uXB4HZ86dNj9kj3fXgHo92uL8jYtanubQdcJ7Az6ToC5ZqWUoyeHtSo6bBrFER9GX7g7RjuNA8",
  "key36": "2PnRhYAGuGw3W33moTqjxJMos71xTPrR4RYjVK8Mhcm3ymQ9cptpdRmXQijmczpgVKqVwvPTR3iM6pGfn7W9wvRR",
  "key37": "37vfvgpdWdzMvkLkjMhg8aUdGrKppyd78BXg5miNrmPveTtsAJc54vp3N47aRrXUxkvSv2bSqBq3fDphuon2vRHP",
  "key38": "47hQ5kCrfbXDUitFMQoTg7kjJhPr9nkopUWK9r7wMcZ4WaNydVuAsZbZXUjSpe34v5ED18NRFE6ZgsiLnNYogR3P",
  "key39": "2bSYrsF5fJBAiL2KahPb6xE3VPADVW9wYUcmm2XYa4EY48YCQSPktFeYKZohfhcrQ37VYrvy5ZC8SZowHuxrK64r",
  "key40": "NfeGcvhd8G9GBCan77gMY2Mta9H4DhR1EagrwVTFnFRkokTH8qV4mSwuid6QR8ZY43SQjKnqnsFLVic5asPX4zX",
  "key41": "5295V7k3ZppQKghDq6EDVdPfMFkRBMxw4ejwLqnDUgoWEt4K28wwyFTBaSKGD6BHVA3kNbFqa45rqLGAhGXn1eEN",
  "key42": "2vQtANAsC2mQiEoMpnaFSMdXh4jEqXMfe1LqSTpb3vTPdHA5q3AQvUziTpjyu89ofg2sRoBHZ29h7jVaSZFmXMEa",
  "key43": "4fZk4CivWaedZxg2atip5w1SkAWKEidBEHfrWQZYo1KvwLVcq6sHKsSHVcX6x7jdi2eTxq8JkiB2GVWGcqrss1s2",
  "key44": "o3gpn7Nam24N57UHzE5aVJRhQd1FNTMP2ohpeZGRL4dEPoev7J7fPyzzftzNBpWLkAQPQxkuy8FcJygw64423zm"
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
