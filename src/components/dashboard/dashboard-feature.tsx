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
    "2YmBMvW9REkVxcm98tdV6L8SXUM8xKPJ1DMPkUhZWubWRLAFt6i2MXAUZa7uziYA3ZvMHqZJo5kw9YEiaKyaW44Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rCSgBcofiMik1c2Dyq2QZ4QtHHNBTThAP9tymMbRiFycQAU3QGm4bpdhEf2QFSgt8CGoHU5nyMyenN4gxmANi9B",
  "key1": "3uCHHYZ8Dz4qEZKToRLvGDWeh4TqzZPZ3tYaR5p12CbhYoo9nkfshfB8Wg5CAJPcWikCrDd9nAnShoLeiDs17D3m",
  "key2": "6cGfNFWNvbm72KQAAEx3ehUM9aCQo8aboUtBoeowz1GocRqAvPadHtBnDjxJDixSLyPVTxUrtrtkZFBymrwM2es",
  "key3": "2BQgXxDdugAbC4XAQRMxzpuQYdCfSQaEkqvGpjt12aADRD46jadAxNraubtFr1az8Js9pe3CotTfH7NjfTS6dXes",
  "key4": "5xJLmdMD1L4DNka5ch7vtEkfSjs3GzfTzHFobUCGR2eXu3woe7UeqvZpxyzZWgzQt2BxtuiD1sZE4yC4hNQ92a7S",
  "key5": "487Xb4RV7VVskh6La1dgkKzFp2UPCrBBCqad5UoESU1adSqbMidYojQjc4bykMS1JBkmJ8AXvjACSyYxS6z9xQiW",
  "key6": "49BnQJ1qLgyEpRBrpPB2zMnpjpwmZQqtmZ4yBNHVCA6xjCeJRbq7z2YWU5nMYyA5JPJULAC9MNaqS1wqyt9XHhbJ",
  "key7": "Pj66tnFxsiWmRNtnGSM566oUyr4bSdSdrC8FsKLdj7DAPJ4UJvbmbSdB5gJA5gyuck5WHp5PHC7Km8JGR7MYg65",
  "key8": "g3wrMZgc661GZQSdSrGjzX7YqKrbUeybVhrMp754Qrx2ZM77CABYCexcYVLdoh7kCqKL62LLRNqNZ7e9g5Sp6cp",
  "key9": "2ehs6HEdKHwnHk8GyjAehcZw7hpxj8365qY95WLzqku9tqWucMeSpSXUFs9rryNzeVNDR1WrSaEufPFjZws3b1Ws",
  "key10": "2wyKrCY4MrUKjLddxyER3RGx6AMfAK46YgF1R8gnCMVRj9DKyjnHaFYNKooA5eh2MSUhFDRvw5jdPP8sNBrdFhK7",
  "key11": "39cnUPU9d3NsGu9TtcDh7idqj8wvVkK2u7Figs3xKnMSq12o2giKkMJLHdPmoFVThiV76bS4ETdStCKaCs3PUzMG",
  "key12": "3g7UddLHur4BvqTM8iFbwbpKhL1g9ZQ42ygSRB4Bw6EBeMpBJRHb6wb9yUUuvDkc8B9qcmo7xaxKuCMcoyr42iSh",
  "key13": "5P2upmsaSasvhUSGycEt9kTJwnayRJ2LTTRfUedjK9ocqhNkosy4fkZTGimgYD6h5Pr1ebESyaZ54wRqNk5fZtcL",
  "key14": "41iEsNJKZtPkNQp5344aKSJVaZMAouv2ngqgbiewunQJEX9TrUhqMTWqtWmjeD3rv9mHtMcuaHQN9nxEWNzuJPwV",
  "key15": "4rvAZcucVAAwb4MN9FyTxfFWJkKGC25xoHR5bAueffA65Zz13wQxh4GAy8yCjY4MQGoEjyPcDf2UYHd9iHGNDXrQ",
  "key16": "4yXHp1YiVYPXZNsaAsvPF5KKbaatZB8RjR4VdB97Afe68zXVEmXzdj7BBKfsLAt4x8hTGy1kvtTwPGZr9F54xubF",
  "key17": "3MMVv4hxnBFmtzTyq1g3yeFQg3tGv3qid9i5dca4VfuEX8sWRMTYPZ4WgLvUoMnEHHJs9ASGpXAGDe31eHidNUaM",
  "key18": "3kAq6EyEdZjs3w45AKS2bXAxPc2z49LYdPS4UeiqPMiswTS12ptoCtqHBHHd6Gpf8ciAH9eUWfd7uXj8pHzXLs4p",
  "key19": "2oJh83mogVdsYWq7tfmBBVe6Q3hXtcTD66DBGgCSi6nmj4QQ4BLmqL1Lu1j4v1Jw9ocFuT4AbXmJkoQjjZk9rwss",
  "key20": "2dXKfgvwKtfsFXSpPQxQNa8KoyfxhkLg7Ca4xTREK9LbtfT5XLSz41WxhkVEoKPSawcjtsYMGzPZF2BPX6pWCNZK",
  "key21": "5RXRJErmspG77XTqMASc9pwoDWhADG8NYHpxELjE8RUP6ZZ8e1joSFUaDvKX5KpB7ieiWsRp64WKz8RRrXzStrLu",
  "key22": "4eyHwnfp454VakvvmtSZDPRxDe3TGdwwmozeRGiGhAMvz3kxTLUdtxFppRDcTdv3sRnkKmTkB1dpFfwRyCMqTRfL",
  "key23": "4NUMaVBxebFfpWu7sov35NDFFkz6FRJWftd5qyk4nViMUquusWmmdJRaJvoJkx9mYcK8CoRfJDN129TRfqsmdiCx",
  "key24": "HYnGTXHzByGgUcpnkptYrAs2ouyaepmn7NAHDFyE4TkWwR6qsKvuVPabpSuwRHLxXK7HQSqUfxndNPfvaq7pPWv",
  "key25": "5ALRNUZ8PZNRE5LGorWpwfB3Pz3ZFHk7qzmAEfemG15LW1QhR8Kyzrjd3XRYxKzfXL3LhqDXaYa9SB3WMSYQGqXo",
  "key26": "5vcQ9S6cGrms4xMuzzrrqbva2ysUCoMGVZuxnWyP5Jer7AkThFjzZXbVodcv6NRepVJTFGpsrgezPzvGUJNQ6kFE"
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
