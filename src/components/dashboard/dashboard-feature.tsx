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
    "4ZmTbkjUvKsDcATcyqmDTMxtM7jtzZZ56Jo8o7orqdHjs7Y5zuv2ZtmSWDwaZWmmXqbjiU6idNQbgqPHcSVzpwsq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QMVHXh7xMj9R9e4cqjTwoXRSR9csczaQrrqpRLQbzoFDeThzc5wbB4DReu2LC5nZpcg1ZwxR2hZihSKL8dSUXnu",
  "key1": "2KjxHzpeZoqsjxhxpVpGqAqVBm9nkC9b3wMFwdJFi1YPGoahymSr54CmHkEHsUfVqrGDXVm4mnHitqbfNqgFCJNK",
  "key2": "4P3WvaanjKJPZWxrWidBnrinLp6xxptDX2rZuK7C3C16fkL8H19qEzae8JS6uLxDQie8vA69vv8Ws5XsP5PY7w2V",
  "key3": "26GhfUdVhQ9rPTaVV4aLSqGyeJHLNYV3jY2EvuMwVhHVCgNmwWPVEZsx5Ex9trjEQxtW9y3eSFF33NghqugC5NnU",
  "key4": "5iS5hWDwGGZxzYiuZ2bZTVSv2oqLRQqtycT9ZbVN8MDXU6rTuHjngKNCKqtcGsM3UUrePF72sAEwSk9Kt76tgd2U",
  "key5": "5Hq9GxjB8a7mozvCANvYR8TQMHLobTaKPRG6nrZUkT9pnJCz2g2smgwyXx11JcyvZH5Ysx4MLhPA2Y9Ribm9dybZ",
  "key6": "4VNKZNnLzTxU6eXhfSN4QMr83F4jeeRiJjLqZKfkjnCxj5YHZBqRdrf38jJM6AifvCEyiiE6zSJTYwy5CA8Lq6dB",
  "key7": "eHfpbxWbY8hXofWDS94SsJGP8S2wUia9JmGxmvF4Mt73dYKHUSnewNkPqD5es7JJ2GswGUCKo364RHWjDkMZm9R",
  "key8": "5SSXmUrofRFY1FE9nuLjykXmeTHsuYo2fk7W1VErQoRc26nUSeyXo5gTynRUs4n7jX1td5H498jNrjPpp1acGaPb",
  "key9": "c84jk6rBLZiBEaD5bJr67PECaaZpsYQzZVGJsqZNqG87QREHkyMNqwxpHuyyCciNiDQT8iARdfN5LRW7UL4q43j",
  "key10": "4WW1Ts6cAARtmt6vYKgPvgwQ8uzyAydTHqhG33GjJFbHP2UVXu1n1zj7wgTuqrJhGkQx7LSupA5aL9yC5VSvC8Ze",
  "key11": "spguUechgX1h6Lz2t5dXcs35NBsszMaVJMi2bXLMvBCh8TMEieV1D9XNPQ4si7keYeUMF6wJXSn6YLifgabyYe3",
  "key12": "5JZE7F5jAWsEyDnXUEfaAU9ac71rhYzJ8BMnb1MR32sx3YS2dCxjQRLAArKYqxyBjwDd9j6VQYNfZJaUhoyyJzqZ",
  "key13": "3Wd9PM7jYFFH2Gesde56yNzt4sRS8VcDSjCTMocsfgUDmm5iNXza7qGNNUujjLyeJv4Bqer2MYAYaEk5FYUqqX8c",
  "key14": "ctCo5LiefThfpPfrSV9iPcVYokTrfnH5iLsz8z75SmxnsJ19VX27qSmz95BWhgjPj4jXc4LFHRoJzwBMshEaY62",
  "key15": "rRZZoG6NSF99hD41KrN4BdEBjSKivrahSfaP1Xdoz6Tc9FgGVJ3kVZHvtxf1MfN9pGBCqYkh4PsF6dNjHM7Kg6i",
  "key16": "4MUaFxaUGBG9FAQymKj9JbUcfNuHD5hXDoGEPCuHYV9rJ9UEkVeY47HApCDMNi5UJHJ2F56TNeQfLEd5M1VedLoa",
  "key17": "5q34i1kTS2gnb1HuGdSCx8jpfWuwpjBUxAMmuE9xiAV1LbFBtsMr7sbWRndhZTPVC6RGmLy8Xea7NWtkxhsVtQf7",
  "key18": "2nWjcToAPDhnx73DB3EdnQDZgEoFNf2wXJktbf19tDNpad4JzNatjwm8gvUhB45vVv5odcJKpuQhFL7y1HBY5XLr",
  "key19": "3gbtmtk1Z1gN3Q5PyDJk6x5ckZN6inm8Q92nJiKTMNcqMsBjc7M7Hi6tnKWeZunVads9u3ny6HuPKUyQXPo5vHb5",
  "key20": "dSHNfYrccPR6kGZ6CMtMWCc8KwrYP5fTWrGAAuTWNiCufSRhxdJSnQrX4LMhYtL4dEEtZ1KEAwjfFj3qXkm18Qn",
  "key21": "4pQEvqu3k3LBacSbcRAGkjRRNQHMzsHPyoE1xdM4zWY1vwNWwzdrBcFj726Vhad8cqDSLjJ16bcqAomDeiQ9JnFR",
  "key22": "65MseQcj6Wwbo8prRz5ifokk5rj7Mm8fcocqycfiGhUEXPD9QX8oixnnj4gBiaBKRtNU6iapBGqx4NRSqCxUh8qr",
  "key23": "414phTFy6n3iruUfnimKNc1MeLdB2CrEMdNpkUADGK27JxaauETovjtih4wCjQaq7cd5xjWnevA3R4w5Ge6UG7cT",
  "key24": "2L1xXPuXK1WECZyg79mhzifnD8jedoM7LbcGcN3QrurriMidt6JYgq9xm9JM4Hqp4sVAzLUvW6Ha9BWVhVT9FsAQ",
  "key25": "2i3Ucad4VVNr6zB6WqYQ2NsDdfEJxwwn48Gzw4dTADLSyQdftAoQ8xtdJp72YCowfDgLDmLFYxyscM2r32HsNxTf",
  "key26": "3BsuA68TnPVpD2DqCPSQYdbQF9BFXdz97Bx9UqNjQf7MNoZZn81FkLth5tCvgA5NGugi8BuQSEWJ17WYCJ9UHaKX",
  "key27": "498XwnPN9EpsgEdZSwtoBc5rD36FSxw9xDsKM9kC7Gx7v6Qe5TXXvtgF5beWRYcYxQFptaZGoKZPDN7gcKJuXvNP"
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
