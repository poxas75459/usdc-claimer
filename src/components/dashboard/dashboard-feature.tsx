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
    "3bhHprxb4Wx3rxt14HQcSe4EJSdnjg1hPgbzvJPLqQapjZT4fut9aUcQyXome83HrSXKkEED5VzAeu6jPSKPD4Pu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AamiAH9tqjFrhv2y4oE36GSdsR97DP1Dyu3xDobphzqJ5HtvWhr9eEm1XS6KauCJ4krpJZ2CMuBJrJRkaGuarmu",
  "key1": "5A49oWu78RbNKjnrzTrsyyGkC9pAHN4BcQZ95qZ3m5WKMeq3zkRgWjD6a5Ek2XSHXYZxtLfMN8vL6Gx6HfC7hMY3",
  "key2": "39wbjmxQzLrCCwZD72yGvzxtLMuJZKGt5xNcrZCvUwob3zTapD6p7ApacwaYrQGyKqSSWt1kVBJsY9sgc3Wt7j4U",
  "key3": "zQohbDPLsnukC21vV1fNC2KGM4bd6ewzsscwKA2XiyrckwWV84GJ9U1NTDUTKhMmFpMJxWrajhK9Y8uUyiizdZH",
  "key4": "5xJjMGys6Pp72djvVMwHLpscBaBrWJP5v58QUpNP5UJRcDYzZ6Aqc4UJiEKXfX5p2L1LkLcNvyA8qL2TaFK6akDa",
  "key5": "2nNCdjwnTuindUMYCTx1nSFnsZ52LUWRen7mJRvKCKGkoLiUqjQfephjJcSXYQPjwTZkx3YzaBEXVNS5pLqewj5S",
  "key6": "25M2NABMPzXyKJRF4CuUiqCv9J4xmZUdk5ZtupZFVdEUFwQQN3jRrKdN1dMLjMq1Z3LTJSyrv2GLB9Cr2bxd8PWc",
  "key7": "5vw3rwXez312JaBpyu2bPLjReXQcPoHfqwyTbrMU645eZjzZLq8w7HqykU3NpPQLWUwiiTVEiwFo1aRK2Nucin3F",
  "key8": "5WBpfvhRkJR7cEHiEuPYCZnqHZHSiJ2o5zcG64kux25uugN2YRq3qHwK7tX2v6McJLcd8cqPdGk3fsYUFkNcfFji",
  "key9": "4JWVVSTHhisnAw7ceZHMLS2Vzfo3p49KqzXsdWWJH3JjFRcAaXhyGpc7Uc5TF2nwaovADsnHc9X67NDVN8iWtJgY",
  "key10": "4o2g3jec9DNjar1JUpADgDVXJVuzAQXPHmueWNx4YA5Jp5isGXnFR7VfbjFDgqT8FqXPcwfT9f1ja2Yv3Wkis67J",
  "key11": "2Ypo92tHvEVnYR5mXaij8f1EgJ8bBDmWEV7eCo9HPH5YKEjFxuyebgb4TnwcWMrHhUVP4xGBLFeyY5kEZ3FCtaBZ",
  "key12": "4sdyqVhekqM7RiDuyBCRcv2Lej4fzW1oDZUVV3DawNYicduuSiZpqmZpQF6ipxQsuV71gEfrghxRAu3RMrPQTyYp",
  "key13": "5Mw6kBF3knr8CABiddsQTxPVfwfMjoecYQAUHTWeUC3vWpU1wBz5guC5TkNFQMPs4YN59UaxZEN5yWXUFMkcJmuV",
  "key14": "2Vf9LWkay1bdRgG38LjiPjMB2X2k7x1y78XjCkWoDArtfeVL5gHg2UvvQxS9iKf9aCiddj4joA5q7JZ1Jj5iWL3n",
  "key15": "AzeGJKGkykgoeZW4FrgEaww13nStXUXbKXgiMLXhjM31zd7R9XYgL7rQGBAxoWJPFUMD5GCwBpz2PEsQHs542C3",
  "key16": "5FAVWq2xtTyh6myEJEKtxNm8tobszMKmWPPrrCSwvRz1zXLPGCgBHuJ3VcTUWPWR4sy3hwbntc2HZgYsnVifbEcy",
  "key17": "5GiVkB3QPr46oA6zAtDaKaUyMFN2MFyj435djJhfTo8zTGbEvaC9AuJn8u96hw5g7hBzdoCsyWXC8VuARy5vJYZp",
  "key18": "4mo52a6CySMCxJeTJNXbTjSapX2S3VGHQZPgeDAw3c9tFfraT1sJXzaF3uY2vMfJPa7p5by1kRkEmJY7LbpebqWJ",
  "key19": "2mu5LVbZkFBNseWaVCF3mmHiRNJuXUFALkMg8ara4zi7WrgVV9D44wC1oPWSs8byPy8rD9eCazdu56WsJXUwYr1z",
  "key20": "4vSnJjKAzihPZDgq7qfrk1Hww6pY9coJhNL9QjCWhsdsmscEht533SwvnhwCSXetRbt3hzcs5vEUzWmQwBKkMzP7",
  "key21": "2yz9HSstLXxvCCTkS7g1jHRHVg6vJHBqvFhnRYv4aT1opMpr8V2bAvXPgYVAeiXmsEt4WqAaWSWSHg2zoBp6Nm81",
  "key22": "2M6iKf5pnDzt3YRTRP9bfm17oWobjihD32XDdrxpdNsPLirDk4aU1LejrxWAXe1MhwSE2Mpk8oLytai2daAasCFo",
  "key23": "5i7FfXt5dqjYSNnxAUAPhfJeeZ6byRj3h2xZeN7G9eAjiQsvQVJirDYmA8SJ28tMAnJa6cDxEJGGA58p6h7WPaTC",
  "key24": "45JiriQKRUm1wMywPbQt5acqgQoar3hQvzgkUgmKok7tKS1c4tDKxici7VzgWcujqQ9Q1ochjCaNoz3tWw752xRU",
  "key25": "Ykp3PQrCDmPn5ExfWPrXwXnNMZqHvZwi6v2yguJamS8jG4ByTDBR4CguSTKSBs9j31oVuqnmd5aKZowZRniBgXg"
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
