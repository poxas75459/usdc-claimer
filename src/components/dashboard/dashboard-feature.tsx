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
    "2p7rgCMLGhSzbSw12z7C6MxP1NL5uWga6Ld7R5nQRtkxE8cxGQJDVvQ94zVu314LRWBhvtu5d9djNJcig2BiZXM8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cC7Dw4ryWkgRnZJ4XNxbrC6k3xiQVa6JxZtywDTK9hV6N7E8iTpG8yni1K6KdxBYXMF9eCE5zv5Wo3j3D9yHn3Z",
  "key1": "2BuSQahTah3GUBDymS1boA8Sv27eK6xnBvkUDR3ecxLzkndEHm7RGuaVxrFx8FbFTq9hoP34K1Vd4MeqZApupf12",
  "key2": "WNsKeoqBVtRPzsf4xw48fooLYpuCdGk66PTA7edDYwMXSJC3e1oAsCfs9fyFFLAdJjsuL3ge5uD6HkZJwbTKLCq",
  "key3": "45gweeVbYXVDoSJJW6DXiEuF1dJPGaLESMVmMAzFPCGxRMRNS11Z3Wo5fSjx7xHLMETeR5DzGnENmE8CefsdxQDW",
  "key4": "23smXC9CFbvLterVSKoRV6iBw6tZkxT39vNWESaZQzEUt1GLrfF4HEA41xEPrTu8aNYS1rDEsnJBNHpoQcmtqBTf",
  "key5": "eaof2CcRtKDg6jci5h4c2opQKSWib5YtxxdHTq9Le1brkRxhwe9VMPfQbWkbGkd6o4kwfj1pw4NanX4q45Ykyxn",
  "key6": "2NvEcrHNpKtxaYNDSgRJB52Fo9GeR6K65RpSLRsP3zUkm492Xfns4hUwTsen27isSMEErzZMrvdTns5QpbJnBfZr",
  "key7": "4wPyzf7tx6W6F7usJfK9JAAbgSbpBy8AebEv6cNpdNVpaFxb9bX8zoBn5khQc7CWEbDXRukwdVhAZKADDLBo724T",
  "key8": "5EiuoB4dsxyiwTLUvimDrY1P9xoHzoZgqZHZUs8YQ9cptqu7XbMqERuiSAfMJwmb6RAtUFzfctLNUTc4Uh4kAUn7",
  "key9": "JfDq97bakFBK5GBrrtGztxhh5AHuJFFz4UwJMD1EwAMjs5R8f86UtAPetNh7UG5vfvyHJTu1kwMWtUiWVyYr15A",
  "key10": "37N6BsizbaNuKmz2WSfLPT86BrFPyb54yYQEruvcEeLj8BbfT9xmHYcjgkYBU3PkoZCaCU8iBC4MNXb8ngD4BZHQ",
  "key11": "5UhXLY8AL4qY28ZoXs1zMvYHnGxb14m7yf9sPiddM2ARZzTzk8QJVyDs7yZ6yXez6YHe9WzsBzdY4byEykXT1R5x",
  "key12": "4QT98i1AiEgEdqxYizJcF6775Z8NL94F1rEH1D9zZqgsj6PGfmM7pmApPGUTV5D346fyQ7HibTXLepHbXrAHxey2",
  "key13": "4E1D7RYVK9Hbkjbvb8REJzQxY4SYuKQ77Ec6Ns8xdMdMTkEVCNxtDTzRsBP4tjcUifuBsAhxgwDAXLHRb5Yz97gZ",
  "key14": "3teXmzpDZ3BcJW1wbCTuAY4SGRgcJMetLgDXbLSipG9TeahCxHHXmpAW2Tvyg4UZdQh9YyTUPnvXKGssBJqKKm4z",
  "key15": "5Sx8uT6KYEBXJe4JAcQGfqXQAspjmFidMCYhW7JXQ49cQxYUDgmif1AtB5KdAJCS5VVbhFCrP5WtvTWgWhGxeFb",
  "key16": "4DAj1dLFpxuvSHXdm2HyLN1o9TibuQAb7jjaB91VqV2Wsd4vGidF61TyBJu1xzvizSaHEJzTuZeu2HFPp73ZGtRS",
  "key17": "2vuK5ySWMgxUmrMJUyREFGpjssenaCJGtqyjuHPXsRNj5vDmVEx81fpQYo3CpMrJcqvtvDCqQ4MCyNnqFNXjgArk",
  "key18": "3rVZqFvdfhumpY4qizKpsF99roD54J5FPoP3oNTRp5c3AiW48ajjAVLM8SiQf8qCB2g7jna8odhEKBrrJzJVFuqF",
  "key19": "24ZbCf8YSvwG1m8u3mQd4A12gSmNHvEW5DazjcXVCCRuAMyJpYR4nJdWsKkxUnRKQLHv7uFarXHe2uWGRLT9b3gJ",
  "key20": "31mtp7q78ryyEDUg7ojXwSy3zhxteEbUWxNkWwVAvGMNuAExh1GvTGVZt6hRd6YGPWCEf2VbhSBTsJi1gqQaUWGP",
  "key21": "4GVM8PnUrvi9LJg9Cie9CjzrocXbp1BLmHa9UGyMrjhc8JhrsvpS5p6TZxMWCrrCcW1Zs7jR3gTriKu7qjhFu7ep",
  "key22": "5FMxjDKJsXwXJxSNk4smQt42Yu7Dp3gpV2hmUkhkKjEXRSSzDMKwcgnFd9gXvaTgdJeTM1wtP5mp2weafdFSh7dH",
  "key23": "3SPKcDZM1c3zEofdo5v5arksvAZPZGYo3fVkAW8n1H1qvdrj49oVNHe8N9m7ZhZV4GRAngCHi486wNfKVZxkWxmu",
  "key24": "2FgqLHwrjWSUKRc4Ku2uqpD9Cm5qY6MYFHZuUYArDtrcL8tnYo2QnMN3MZFUJ3zKN6hzsTRHD7VTHB8rNDPfYJFQ",
  "key25": "hvsV8UDJrtzk3xmo22TbBxRUkZkUvgHM1axTN5jm87ZQ7nFpYwHTefmfucwWiSoL5PsxXVbs2rSBVdKq8PEZLWH",
  "key26": "5QkV8qdnKEndNQzRVmL43GY629o6mV2k8NGVLvp1D9K4zbrk554pC4Du124mqpim4Uww2Su1d25gTzbLJidV1Vw2",
  "key27": "3sppV7jT2ep8DakWK9dyBZCo1NRwz3rywKr2j6AqM1Y3v6PzeMM2tFDwELkEiDK8XFacJG2cobbzRHeKNaxZoK6T",
  "key28": "2Kr5iJKLryGXq8jDnZz3FUrWGygFQTPcrgMk5aHq7UNHntrzZxtQf7qw5Sgd57KNia7of35di2GkjeUmSEMt6KW1",
  "key29": "2193Zk5XZ8exaqRaoRCNudnWQqAHS2D9bXxWBN5wLk4jMzgTDszbAjoYqzAANmfqbsfAMcq42V7p2LPjVBiWd3zo",
  "key30": "2x8KiXYYNJzh2SRWGYsqQ8wevCF3yyK1593zfXR4iAa19otvg7twNuxERAfZUSo6icsJpYZkTQwKsEee5Lyjeamr",
  "key31": "3xcPQPUbQTbXSaNGxB2RcaCuiqFkGK3Zh165WbJu1EUuVZVhbTq18P3nunHkogJe62qz2LjiFYGoj6SivkgRFR7F",
  "key32": "2VgFeVQWg9qJZBpkACuaTjPNWEBkx55CdVE5NPfurpinAiGRar4aJLuWj9N6mTenrDbSGeLbbEKqkS3P6TR9sQk5",
  "key33": "3VNd9eCLGAAvciSa1jc6DS8urhgCRcze2vNXpp4bzzYVdsUQW8KeisjHxxuoeGdPkmxz6HviNkd6jy4MuYZmXia4",
  "key34": "4pWUKrPWTaSHaAQh2enNzfWB9UG8spvFDgP5WWhukzEgKCSt6e3Hp3Kuag3ruXT2NvZCyKTMif51FBT5YPZyy3NZ",
  "key35": "4BKg4Xkik2Pg4qFg8MP7unDTLquhFxDY7j6yxMjKpno7Mq3ZzHZc3xaApwgStctbcFoYwvCU8h5aY1RjEFgZ2Syx"
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
