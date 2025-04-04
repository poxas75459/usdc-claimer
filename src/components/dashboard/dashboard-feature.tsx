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
    "2j8szmkcGbuBRMAaYZFSzxE4cUKYoRHJzPwxpRwL14evdgq7RhMWTTBe1gfAR2nXyX5T1riYcjp7ueSQxtE25BQf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w1cPaWPL8W7kuzgH7Tmw8rvMDX1gtN9y6yJ8qhdGSWK22raxQHmLxUgk1kFLgFCtA87eAH5neMEb24HeYJtE53B",
  "key1": "AFKjivVQuA3MUW2cP95RWDmd9j3VLd4cJ8ALbaSHkGQfr3dnicfVATGS8U6DxjNVtn3AWFMJQKxHMHv5bZfTySN",
  "key2": "5fJAkxASUNhnoq6va5sHb7Um4Xz3PFUK567HveUzxSM6SqazeY5uWbJzbQ7WmvrUaF5JGTLtwyUTEFZZkC2peLhV",
  "key3": "NbhLy6BdYovBUpnf6KLgpiH7Aq5if6x42QBhMPJed4JdiDEjcFknSPtPN4fWtoXg9YKLr4SvVvtqu2GEad5CUwT",
  "key4": "5qpXp4byLp8Hy6KkXVrtLB1qpm2RXC81Ae3kJX8PiyWmPxJJNqPBrYi3XoKNU4zeTBnYQa2TNrVDMYQy5L96CC5S",
  "key5": "PgMHq9c8jfDztPL8HpdXKpKK2pVfevCt8nFQuutCcfptN7W6wnhYf9S6SBX5ENaZYBceH9Nc3JVxeKVL7szEwGU",
  "key6": "5LD3vy3pdzE7SZaw2a6oeEvaPo29vuswGMxdKPW8wmU38bfGcrk3P13ZpiEPCT6AZDPUtQKKTPs5yeqAtpbqy128",
  "key7": "2MVsF4k8x9gVboeAmsixi9HLdjnYAyj5siAKqsZVZJhg6QuzQvP64FMPbJtZDocYJexXVri8Bigcpzgg6FvBnzH4",
  "key8": "4VzcAUoqoVFUXktzm2PKuzQKUqT4WNdC9MpCNGQEaPUp51qppbDjk3xa2jox7u9ozhuBvHCceqaZ2ZrDGH6B51f2",
  "key9": "4n1WqQCVf895YBf1sjyZmJCSJ8sUbbwZJxRnj5GBkxcXo7FF3HeEGDwteRyctnkdvcB2wgtdFfBWXe8R4CXhXVpU",
  "key10": "RmT69vaZbjAANtvJiJYi9Z5tce8AwoKtYGvPdiyA3GW7791EDphHG9NSihvN7xzQTXSMGv8EmQXSybuSUQSveLu",
  "key11": "5iRGU3DMa78JxJvfLQ4yJFoZcqXj8YnEdq6Xky4UU3gxkySfEBQxCUdusp9u9hXy41iYYTR4vRyW8mvugLRotkxx",
  "key12": "eZqVfkAbZjGfwc6ZvgxiMbfUsSXvhy8vLXtzTFwTjx4cNsPanAXSoZ3nwqmKzBmHbRnrsgdTwnjPJE8Gim8v2cJ",
  "key13": "4CsbnYyud5qmEJzqG3oJKysBvwzTUGgdNBj2CwPdybMir6ZWyTDA1MVq5AxxQnu29wfB8cxAWs3iaUdJ3T5X4tvw",
  "key14": "5VY8krN45dGWKJfxHQSxx3ZvKtVta6BEjCWT8fhHYG649Y6BsQQ8ABKZ3Kq4yh2pD7nwDh9R13zF9R8YMuboHGw2",
  "key15": "3rYL2sLyhLZ6kpM4ndkx3BQGKBC31PzWCzECspYNyWmEL3yt31pWcMs5MA9fVuQ3TgKMmar3SdBXMhk5E22Vah6t",
  "key16": "519jehHwvsEzgBhcCWmfWH22iCsiEqZSzNwsiGCTuVKf5DhQ7Nvy1bQudEfAHLXVAhnhzTgRdCEp3Mk3ZZm9LLoK",
  "key17": "4sTmn6qFQMNcgxTmTNDuzxSewNFB41sLcr9LrtGCB6o4qY8zdRhwnEfiBhLXuyobNzyDTed9LmXMzW3s4QpVnQ5A",
  "key18": "4Yc8nvAQPcnKSM5pn98Ua3sUkU9akEDTtHyGv3pEKnWYsnuvQE5EMcimZ8xCjPBN1M4Q3VNi5efNQ1urVGdq1JQ8",
  "key19": "4hGNYSizL1X2P2EgyonxaVbTS3kaPHgP2ofzWbH1m4AFbmi916ciCRyXWNGbXJ2GChYuLQmTci1eq9CiiFNeTswm",
  "key20": "4aJ5socskEXGSaDg5DezaWHxoEqxjpycVeQDjs4mT31yDPMwiK9RiaVKywCiqoV3rBMDMseR5CC5AUV454tXce3",
  "key21": "rkVdgYnedJrc3c9fYTCowVZzxAG9PSRWaCiN43tEHcjq7DNRTjNmYHMoD2TYGH4Fq7GabPVTZQeC4bRe6WmvdRj",
  "key22": "65fZcZrzrattAcNn1mzbFstdUac642zWh2kpoVNcw6pT9bqhjfwgQKXmjZQQZf4L7XmX9ymAvVDfu8fnxbypvTy2",
  "key23": "3osf4PHPF4GJaMToqbHiWEGXemiJuJM5oz2eQ7pVKJ53kpKG2ov88RGcEmRxpaEg8HUcCFrdBihqozwSoALqkAT3",
  "key24": "2k1nrXgmQWUQqXnMswyUhXKoiDZ6wPTDAZXpRiA5uGzXqo22hN8aSrLNBT5rhUtW2x5CPaeYCW9TLYt2ZFRMHvbu",
  "key25": "4sjoUimYkagVhaUBDWoPWVeoKN9fh3oLYZjnsuXmLgyUj5iffq9NVnuGsSJ7cT27cWLmgN3uJDopfAQvJ14Jhu6Q",
  "key26": "3Ny9b2N5YF9KeoAN5UJ3dyMAusEcwEmuhVnXLrnGZicgpAH5RCUeSEbc5W2NPfnHHm1AU8SN5f79BfagPRAkkAiE",
  "key27": "493ngCYdcxCbxwHL2fSthVGkmuyJJw4ukwLP15eep8tQ1h8pAdjmZmSyib4LPZWPAsXajiRjJY8xFarqk3WtTB14",
  "key28": "5kM31RmgpAXiNKS8FmkfekFFPcE3LXGRitVc9f7qXmFKusv6ZxDmG4kskd8tArgrRsWAY7dTpnCK6L2Xy5LdwjS1",
  "key29": "5yoabxMDfqXNJWrvu3GYQSNo8Z4dbSxMkca6pyeAgZU2HGWNNziH3dqFQ5AvdgPz3y8ckLuqb9thr2q5RaB8jk7n",
  "key30": "3FbYZkaJrZNF54of1D5EuKxsopQzSnbdrRQZqrG1xviTF512DRgSjnm3gzhB2MV4UwZjocPVaAfHCivHm2igDvGo",
  "key31": "p1YK3DNMA94HvKNbUCuDRWNchGaKjymLn8L1ydP2duVkQ9XVdNxT98RfuZUVQ425QFHWYN6jzN8f9pL9mLM1XxK",
  "key32": "4ECxfShR3Pe1YcWZbRSnwWBU6a76NhMRgnuR6anjFX5qVUHKDWnsQZtxAnbFErtvt91iAj7JF3yoC7wnVPKuqeSs"
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
