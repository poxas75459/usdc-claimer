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
    "2ziAj6Jywws8wc8f9nGW2K1W88bgxHFehH3n6U8D6mPZcV4EBRBkzgq9Sm3Z1rAnKnZBfQGe2vGvQpZwZwaAgr9d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vhFTwU7v4wBUcr7jMqwQMzYugzXZDCU92evRexFv4wEX7WyVqyTFtFW2rSJ5kup6JYT99M9WK1ZxrodTdvaEe4B",
  "key1": "ELnQBMvZZb9mQrivvtpb8UPqFNNxAiPk87wBLJ1PSXr1kgyN5WVoH3r8xCrVos2rJ3edZaQJbk1iJtVCXvCkhMu",
  "key2": "4yFpjBqdxagFet992WoKctZ53z2HiK3F1iKCcXfn2LHMgDTvcet3KXQDE5oicoX16bQHxMEzZWasUWyCSVV7EX1N",
  "key3": "3dvf5j1RtiNSNYsgKG4DUMWkXUqmEk39PF75S6s5YwxytHMs8c5GUfj7i22VbJrE1o4d5fYBjQ857ANDcx9tMy4n",
  "key4": "555Vvwtyk9hmaYo1yRY9LXUo6VEmHbPjJCKHNyMH6uNx2MPZFQ1zjT83aoTbZXwzjndLJjskddddoGfLxhCaUxQT",
  "key5": "5zhRLybpsiMYEyPS4bFsVp4v9iujkviFabwFKvaDUPcAj8YdjhDHt9Ac3zZhTtaKSSPqYnEYuE7yHuLu7A5Wpfgn",
  "key6": "2wN3wqXcHRNFUAbQSJy1LWrTHUrA3innwsHBha4WeddNBdgaXKxSzAyAeeybyxTK7iVLcSYd3jrbVYCrEzVQK429",
  "key7": "2hL6hVxdfRvhHvCXV5RsNWEUxm5TTWZZM1y9AkgkQpmEvoeyCY9TqtKRyjXFsAX4SkNJjXGqibxxLGHDwmQsZf2t",
  "key8": "4kzCwb4hRyZdxUPiW3QFWSqwGGHdQ1J7xFyj8HmabkDmQjr3L5uV7RXr1Vwx2sBLMoweYGdYTcasajk1MaWAobcJ",
  "key9": "6pzkZCDLdyaJnZ8WtiMqatZCHUWcgTZAHfXhjMoVgSFecqp8JMD6egFVhTppfQ6nj1EFG2EtwAxpWjCXFY4JFTp",
  "key10": "5y8zaDhEds2QCvqDqsEPXd5g1wpdCyijycqdXrPZFKECHjSjyPKt7BbnopgrVf4SbaMck7Xomxw241co1Z6d4872",
  "key11": "3qfvEDHthgaPiHtfFi17ukUEz4Rr8RrfE5VNQt6CsXyDUp8BDRk29JgMzWDkPASoTMD21SDFCpEg1xfUTNxFTrPc",
  "key12": "33R8tthvEYSaLtWBqVRAUG6wR6rjRLffQ5P1VySeVjem5nEgmbwCm6C7UgZqGXGfteHXzvFABAVphxcBAWy8zw87",
  "key13": "2VyDqREqa4FnX6BLgGqGL79PuG85hRCaUrZgkuKaYbPpad3z15hgVxenyCnQr5xWzDEckUYDutj32FRPCG8w2Dan",
  "key14": "4MatzHHrrZX28AAjNp6pEPZUBEgZJNZBVyzuxt97jD9wwv9o5n3sBjtysNCR5K66LK4twD8vVNBq56PvxqgpRxs5",
  "key15": "344dF8dRq27FCarmBSdkihRqngYhMwYwWtJ2w5hpqxnfZ9BFppP8FW2L7YqHuZivtPC171UoarzY5wdGSCbgBMri",
  "key16": "4SmqXg1uckSzMmLY2BXUPUvdWnZzihYenEPQVothaAdhYyxTgoQnwTpdxZheLLJF9W7qMSrDdLfkAKeJVQL78cVW",
  "key17": "2AccpxDFU7RfWaCcg2MJx3E2QkGAzgQm1bkRfXnqe55w5w9yg3Z5GPiSDrzUd947ygxqceQsVtAapKEg5DaeAnQ3",
  "key18": "53rmDqsDFEnTvmvas1ivVFf2Eb2YSBRTwkFFvH6CNv9RoZYZgDNxcp6B59dEpjGdzdaW6L9cjsg68jVvivfys1R7",
  "key19": "2LR8kx9cQKveFsLj6cvqRTxmQwg5qWJnpJAxVtpCbaHVQ3ApWwe6WKVhZvdt1NkKeo53vq1ptfLaZWqTVaznR5cE",
  "key20": "4GsqmjdWNJpLxar5JXdnhcPhjbhiG2tyqvL8r7TvKZxsRWVmyZFWmbaLHCyXPowdPuYG7g9i5wm5bmWERtPnCdtG",
  "key21": "2eAtS3pNKwnyMRdwrq8ch53VNguC9qVFZMZGSTGi7X6JLVtyEQ6cnUqFjyThyYt47zVau7uGZxohui8Bj1usSEVD",
  "key22": "5y5Ej4DapbYb7qoDHdXo5uZzHgvReYMQrGnFhwoR4zefYNsZTMpom3JKF67uwv2qVFAJnbAMnbM7ELasnSrYhaU",
  "key23": "Koh7bKFtqrB3RXTER49GWT5nT8Hqik45NydXfDFWCqF6wCgnBomCa2nFwnPg2pNy2keS9Sop1rcEPcZAQ7sdLpe",
  "key24": "Kx6h5XPKxhhq38fsER9hyhQraYU6PXbyy12SLPc7249xyze4ukhqJp6CbjC2Qq1RMqaEXuF3RRUwSjv8kpHCvcj",
  "key25": "uGYCKMsJ7TLBZ63daz5ERXTgDrYCTMRVWByUzgfddmrtn5KmiNtsUv2RRLTDQDAsGb3ojhqx9SiV6WzeUTGPKjq",
  "key26": "5FVj7NqQFttsaLVbtvNJYeM9kQBE5ci5bY6WQ58GVYV9RqiZBm8rB1WofKfDwbMT6J7bwZPd5aZmPhgu5WdYc8jm",
  "key27": "2AoHzfZPcXvY6hMU1eiPe62trdbVtoLxyxAXZEZmytgdfKG7Rhs5KfCnscfYEPXnUUBTekDHvrXpVTxefzUnfVfw",
  "key28": "5YbYB3GD121tU86Xx296hpJaq37MpKeLWx1n7oT1C2WCUNn4pLHpd9KBsC5jnbTKuXnsBVtGTsdDXgCVf5RUmDmt",
  "key29": "2qoQqxbNceky4Xg8WG36DV2NSTjc1xX47tfT6uF5zAfTcnbQ1vQPk7PZc5MhBXzH4fZBqqcyyuXsvZQXSq1oBEb5",
  "key30": "4dEX4zWPzXv3wLkYsBsTc3Y2adKHgaqytTHXrvCD6jM7g6SqLscFYtEUZiycCFY3n4Mq3hH69ZeuD75Mexb1tdti",
  "key31": "4CTs2GEQoM9zdJ6YzTWgZez7XwK1TYRTGsBJzCDxngj1zNeiGrgJyZLVtq145NZBj96i3YtkDkusaGwtg2BJZYi2",
  "key32": "3Cu9TrZTvCye7aHE3yQ5CnaTWkcmBFvLrUELZ7LgqxLf3khUzUVVpLt3N9MbpSYMjZbK2g6AXECi8dgwaewjYRNP",
  "key33": "4vkSfJ6xduGDXrVy5YkQ3wEaMZuWQKPQ81HadcphCNuz7kWbALXUPgKZhJZGwmv4sMH9g9UQTUVCTg78sK8RMnPt",
  "key34": "2RFHcCxkYcwoHXaMbppdzJyfceT6zWEf436cztzD7qZQEn8wczM3Yt42AWPer5jQHZVrpiqQekdc3MEZpQfxVxdb",
  "key35": "G8ZbCxc8E9qwppPrUkLHrp5E1g7s3gypcqLb45ZeSWeXoqk1J46JLr5xioxmtVqUdbZpViHhpEBFX15Z72abbGG",
  "key36": "53mvHUwBR9nsPUd9D9TbeiWDxSMP2fvUrPr3CMVMbsEVmrPVCPuUHzEKWVY6EycoJWTJ5V9TE5NCmzJvNwNgroSc",
  "key37": "3o6Fyxtsje4YAXvSfMUxFCgTbuGX7Db5QY5AzsyDpZ9FFCyErshbBfQzvkLkHzx2PGm1u4XLzWUCf1PwH42VdVUv",
  "key38": "pY19x5184MorQoJmxrEipZ6GVBH1UJsgBp2D3Y19LDBxyLpcZQ7ZCBTtJwaewnfKWGS2pNaMei728sgFgSnj3Fs"
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
