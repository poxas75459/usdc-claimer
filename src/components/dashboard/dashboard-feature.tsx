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
    "yNpPvN3cXXyinUuvruTxFRDfnYq2kmAp8qiQBLVcYS1d4Fj9Ahe8noJyqSKRq4ndssqeLKhZPEgQUNtoEGmasJ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZDV3cAZydqpEUmTS4yeb9y984q5i4QTx43SHB1BVZQQ4hsatsioP31Ky92KDqtH4Drg8S82wDhG9w4DwyEozPfm",
  "key1": "R5ooNAj6xme9AmnmBKfawxY22fVfaM9R9ny6ahDsXP2koCky7UaeNTAMRZPpTQk8wpZ37q7UwkzVoBUQre8kV8U",
  "key2": "2CLzX2STSyvv2jctzuH44sFC3GsxGtQbpG27ghMLhmFgdJgfbgCG7nHCG7UCZeF6taLVZC3dpr5VoW1FyQseXTLC",
  "key3": "2WMF2592QaeDjUidFXXYWescfBqsebyfHJwMKWF2EPq5YsTMQakffg6qkWAFtSx484mbQ7QwR7gdcrjPV3epUaqb",
  "key4": "T7qmKt9C8HJM8KGgCm1QFknLgz2VJUVa72DrFzb7FRUP7x1L2pYU9YMCxTN17RmF9PDeJhLJXVkjepwSSBvpHNb",
  "key5": "yrrz58haYh8QThJyntUomMMTzLyZ41PZnVrRZ3A6jYgTFnEuj88TdhhMGhfaW5wL4A8xshLbTttg6ugXMarKBXz",
  "key6": "4Kf3DwcqpWokEEKGxS42E3RMtETStpRMd8xbTMfswsQpXRW9y28QbmYSPCnN1kjFbNu5JmzvBn1firn8oGPasRtn",
  "key7": "XEXBt1qFcePSVy8m1gPNSfqKuu35kJs6eZqVtPLceCVRvkmEDv5yUYJ9WWGXfxK7Pxv6D2SzWT5joKjDt8XrJex",
  "key8": "1HbADDQJzd82oAQcJnwtv1VmWp39wA16vZaoiY2wfHqxrRGkXtuLhT3XoFwHXy1xCeoSRJvtA3EeEnePL6BJfVi",
  "key9": "4awpCKSnk61BuAf1zehpufidWYTaDv9y7woHYaLLEaMePC81SctLSni7dcEy5B8qpCBpySCdccgWrDP76RfR2Lr",
  "key10": "3Dk51KG2ptZa32GX4rjJGP57aPs4jHqAos4r7CUGEWyZo1HZYcaCyD4qxEeZfBTdb5s5XkJ7jn8odf3bF52NGRTX",
  "key11": "iEsErG26iBZ13QBtNQL1aUpQ88yJBLJzdcsXvbuepe9u8ycgUc9bCSUU5EtdZPJY6e8Eqxro5GaSCAxLzq8GWV2",
  "key12": "31J1P6DYaVXpKR5LWZL6XWSXJXZw9aAFER7oG9geP9bQWkFTHxmzWYNCeA6zftTwNdVTP6A8yvyrnkUAtK4HXnXS",
  "key13": "pAXpabYRkh77aGJCdZP29bG4g47vTjn2mgLUYp7G7HHRxatmHT5dj7oKatA9zNg6J6gQSs7WbnSDD6mZuBXMcNw",
  "key14": "43K2f3ucWK2pQswi5N2s2tmNSCRRPJGtzEBDfRDVcws3DAPHhQ2otjRkPSyyxffc7K6FuaXcF5yiBm5vvtgotuFK",
  "key15": "1v1FEPDV2CKDuEEkuiuLAqD8wTPwKZBD3t8sBRyj67dHioGPLNb5igc3sBayhPXdX7iH672QStPyKQB5P8Xiy4t",
  "key16": "37MxbkHThfV8Qs36ZufFTgrU6o3MMKZzQteqHjps5SM2d8KtrEi1xFR93ZSoc7pLvFph9SEiZHSSqMv87FU5ypwx",
  "key17": "L67AWrtZnMqNfa4DvVDbZ1EkwRa4CiZ3XjkmqNn7z8nTABELaFaQc7rPjkvFzty1LbfTLsNAQeREAdrEsP1RuyF",
  "key18": "ogU6uytPKHbLEJYsQtS8hy3eTGfRTNnA77gVqhbnJfcBMFi3zXp93sTSESa7b5ddFg5yPt4TGSmNwetU8WGvBiy",
  "key19": "3uoKSjpiYf2RfhpWJZDktmQsi1XHaARC2vus7nawY4SYnz7YfGJGh43AmtgWiCgEZDgtysVKwyVUFfDa4p2qea31",
  "key20": "5dZwiaRXM2DGsjKDsbA818QbpnPcdr4XFWaH2vfDJ47bpaphVAUHqNTA3ohg6JMJzqWTAP7hBt4BVwGMUNsFZ6jG",
  "key21": "3Uz9wvXRWV6AzTe7CPPpRC6CKUrKfDr48aSQjMcNCb4bbBy5ofK98th8YThwpsbBzhFQkw5XUSdYJWCBqTsh9REW",
  "key22": "5AwJM6p9NrAnhqiWo6jPTbTmTFJCd8rBjiAbPtsornruKa9BWZiHEYKNM5t9WPHonKXvhg3NKNYyj8ckmM8joFAc",
  "key23": "4pJC7xFL5nZREeaYR7YpeHezbyR3xECypGjLVhUz2b5oEAvK5ck2FaDQzM53m65UEhSuCK6N6NxHNmcEWdSX4Lyc",
  "key24": "62z4vBEAYzvAVugJF5exniSXQybUQktK2wRP84bi3utuzKzMUwfA4MLsKhBDmX5Xd9h883qkYFqexPbUxMAvcDNN",
  "key25": "3pw7uFhwNXW3g8dxrH8C2k3aaKzqXjaq1a8QxwEXLM5MuDquhtDV1oBJAdhBDDBdD4YA33aqiiPLzU4Vw1wAxzBN",
  "key26": "w6qitmX9EZ3hZhQyFMrhvjTXoAe8fzG56Uy2a2XnwsrTjUcgpzznZzbUB5SBy3i9RchnkKNJEp4uxYrK3PEWejW",
  "key27": "2FpzBhc187wH1PnZ2qY86GXb238Vehrtt73RnabcmT9FYE8KNwKNerWmdEY2crsn4pBJZKfZx35rijpQpj2vVsVD"
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
