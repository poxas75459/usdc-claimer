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
    "hp55xnKy8kdSHpegEazc7Hq74EH4nLXCALhkZ8AWVGCak6aTmp9EAD4Vwdt7vh8r3eutz59AUWPEir3ZQRfCLf1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BQeWDp1CteE4dE2kGcTTiASDTBQhPBVA7mUNbAsnqTuVLh3uHfSQHRY6CtYXSiATbXpC3WsZhqC8jcoTpbjnLcc",
  "key1": "2i9rdwXxPKhHthYzGYRvKkhJ1rgKgV45RtnQK5RPdMJ6y611wmoTvLNz9ku9aSiaAgkSmqjxHJZ6JHm6agAgPCs6",
  "key2": "KsmSQ4JV96DYGpYVBQEaSox41TVqs6CT4JMvSkaJNY1PPVGiXYxcVJe9b13PnJRpXPBYtqD9D8KavcaAEDKUP6h",
  "key3": "5YLnJv4R7KFHzJThj3WMTtME3VRkybm17d94sAG6XFUqeH34ErU7qBqDoibxTGncz5Ctj7PhX318kmXus5BZSwRP",
  "key4": "5MEr4apkUWys2UMyL9kXbr23B5eMDjUmpMomYWgXhYqWJW6fS68M3cfW7ewtLU2MXjGWBsoBCd9DZvd5Jw2NGNaW",
  "key5": "4au6tq6RXi4B8CBHvHHeNPKJKofBy3u5Kt7bURYdZNbhjCsQw2kBbEpCxgcBvtxc2CfnF3sAaDxvFJ6UqdWNqpvV",
  "key6": "5SC8vWt2ess6xLgW2oZxS57tAzx8SqgnBpTGLb8wKwS28GTKNzzv36VZezMJNj9t8H4Yj3j22FtVkqxGHFjTwaQW",
  "key7": "2NcdZLhQcZ2wJXaVkKsaWzqcR8yufs8AVvSGCsYJ5AJUkDHnWtwKtNPykhzi5Gv1qxyaFzjK6aHtpZw5mYp4HkdQ",
  "key8": "3ewNDLS1Znp8FfzJdJ8pbwMcpQhTD1PkvKVnv2T9TWmdxKCySTig5xCF1X8Yce9GgcAz4fvJALRjhad8GZx98PVq",
  "key9": "p2toJ5q34vqr5L4uznzMqww2HZma8FntiKYBtKz7MCYZMLbHEZkmNJgEDuMT2r3UgQ5E7bjijMGypCsRrjJtFnN",
  "key10": "npVwFR8Gy4uz1QqMiiGTjkLwPCSe2FmAYaKtuTfaHeb8Bx1zBQLQ8mxQBB2ke3Lh4szVdoNVqvWtGSjRZmVLgHu",
  "key11": "2EKPktJLWafye3GkTUARpUpiy5eVYN42EkNP9HZ6LhGfDg9oQhZFh661mM3GpmpdqRTL6mAHsvAJ1ujpqkyKYBGE",
  "key12": "4SwpH4Gmg2YDxWoVKwJgHm2vGkJao2XakJ7jFCMdwYwdj8z15xVggWmW7NtC9DZgzczZAmtaZsW596KXGTbrjmuW",
  "key13": "VaQXvAe5GB7gv5NePe1gYYQBnLAypscxh1cRihVYuH2qgTwVPQowjiMu8B1SGiD4SKKafYSEbreb7bbUnyrPYZh",
  "key14": "5dEe3pBwdizyaSrGdEv3TNYPQGae1kwv97dHHkNWLSQaJYDk7bLKQfAQEKDo6inLPbTPjimEQ9m9AsUssFJiaAkX",
  "key15": "5aQaFegJUk9jWdF9PUpizoYQbH6Kfat1syacBgpf5JMCnuYJCJ8byGem3QWGzrWa5Q43svdq6WvTBHdzNrc2YFDs",
  "key16": "4X7Xu8M2t4yeDWBMpgttYMW2nX6JVmuc14HyLVNVDjrJheMckq6sxB1HzZNk7vAder22QMheTmUhKmxqnwmMw2GX",
  "key17": "2DGgeqp6dDUfACRetVjWKYh2hapuHu5tvjWU6zndZSChSaYEkbV7Kw734vpJuQTPjW9ure9fPXMaDr7sgUVjGFBJ",
  "key18": "2FTsdomkzTkodLexHDXak3JSjQEnCHU1QmBuFJomKikVrFvvnmwyLyzNBUi2k5rY31ZqqswHVgz73PHuxfHuDtmj",
  "key19": "3szohzy6RLBPEPo3q2tb46dBqx7aeqgFyQemCwkMxJ2aDxBs1abj9X7i6hvE8uyS8wwDHSCUMQWHRJ6RzpiWH3xp",
  "key20": "5XVBzpddXxum8z9WeGTWwYTJZ3Fw3CWkXjiGAH21rxez2UvH5Ur772s6yUgMhAcHPo9rKZrUcimvGR3WmbjV4o9y",
  "key21": "5pgzii7BwrWKGLY9dCyz5U9WnS1Gu22NgpUHfSFFst3FR3Yw8G3yRwWaVzeSAsVrUY43VqRAoAVAKUeJaZME4hMv",
  "key22": "5DkNKVKL9F6NKfY64AkFAooJ5rpub3EgnSHhiEVdMfaKifbPdotz9YZ7e4A9XWJ1EpXCkQatGw685ypS6JriHzwT",
  "key23": "66Pdu74W631cNuPFurj6ijqkipt9FRrPEtmixgEyoPWBjvFSCJf6MpqX9mPNpuVMrAGSvkivHX5aGpTSF1NzRRsU",
  "key24": "5wb9eptTpKBBuGf8LVqySvefxgLLkdxywcJvAxYJLrS21i6NPzpLN5NTJxjh9XphmzuTp82Jt1TxaqGeFwMPbfg9",
  "key25": "4xpUPyk6dVydCJ2hLKDBC1dZXpNUfVgiXP9RS4WBQaQpRfGBUBmhqtJDQVpzHoABMHX7VngLdivbkaVxMTGd5hjt",
  "key26": "48ZBRRYwHY6gEDJaaRJ5MzrqxPZAsxecr6Ajto5LXaSQhhH5VnLdCLWs7GhvW78Pf4Jz9hzyozum6ixQhxVVDWiY",
  "key27": "2bpg8DoMW96ZNzgDSRjoJDC47xDxDhk69X8d9T6kjnx87FxwwQ65WryQgU2Veo5fZoU1AGaqnVYoDvH9o8MYLCYp",
  "key28": "4RJsn3BGsQqXAFYcfiVQoev4QfC9L41er6LirzMUbpC6ugBmp17UT8Cw5g7YWeroXDrKCwDWuac2neAnWg7GAwLu",
  "key29": "3hFHNjwTKw5wq9HJ2xZfkdJ6mAEy3XGqKVBXCMwArsFpEPthSn6mzLBk7ZH3TdT7Fv4TxQJkZiNw3AUPGk2CtEy8",
  "key30": "kCQzBic5HWv2RPw3vf2spbAHK18qL6uWWRu357rG2XGZizUJyw5ri1E5VKjoT1BpeaZaJKUjD8zjf5jdxrM1L1F",
  "key31": "2SoXrRr8ZAiUUoPndAtvB8WZE7QtKWSMXa8E8qd9m5fps8Uc5VAKYPTaSuEm7XdW5ZGPJZjEGk9nK8ZgoCr68bKY",
  "key32": "2eTUFqTfMiLLpzs4AQPE1p6sbaGzBCHRCdruoUmMN5tZ1LUrqfiNHT4DuKT2Jq3n5pjQB5bTZyDy8EenuW1LrJXz",
  "key33": "3HQcqZmZgcrcyMdtdqxg7e6G94GuxNRipWRyvH5PnN8HPV2Wmu5T2bw8WCUgjdZbBmLJNDhKR91QxhnxHmTKWbhD",
  "key34": "316eRpkwHhtChP89ibh3YcvaS54b6Q6QDmAjEsSUrtBGqeXgm9qXh6nMNcnBqk6HsKDiGnA55sXSLDrgApuLUzQG"
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
