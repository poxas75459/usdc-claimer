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
    "4AZpqaPv5cNSLnPa64sB6EjH2e5qqDU584RcyRiGh9wuXTgy4uyjcV1xcPrw7sVSU6cXshuvdtfjvt7cyQTjNZ9d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Bjy5uTKD7ZCcF5FHYXoaVKViZW499xgXVHPv8nTSzSU9mbeRQpiNM2hzSL3tafbYkVzV6jzz2H6Po1Wm8KsgpdN",
  "key1": "2VxPTu8Zu3AnhFQh4xLuceg6UL9KS3nEMYNduod8UkHD44XR1R3FhyzvTrMpP1DfUoxW7iDD4yr5QjQbEfUaupND",
  "key2": "4bmCG8CWpLVmqNaSjbivztsErSGuLTtM5ioAHTf2C2Kf3SP7hrUGkSzs5jmnnSyziUW3Lt5dBB1kff7w3pqyqH4H",
  "key3": "GeGydXpWLKiXegT5dv21AxjtSYmfrRkmSYy3UYgb9dBQxpnipcu9wVRbj5qQepCFgnjni8D2tTDANXCebCRCHdn",
  "key4": "wsd9gDVedQnH84HRthtnS9xEmZycghTuxi4PT7RkcGtWGti3TGjUYZLrDxxj92bSu5it74g586JSd8yngcFKUgv",
  "key5": "2WHbR78aMK2e6AEYCADAJKhfKQWrqBpQxcuwzRWbsTmAn6Z97axZLQDPN2cU7tJfM6sKW91zuyL2p3Y7hToJiW5j",
  "key6": "38z5VB7skHwsAC6prssH2FZdbUq7NWarKS18TvjS45X53tfTJWLbyRXd9c6Q4VaBQrHknF53AMMDqEQCsQPdjN66",
  "key7": "5PrQtNbSh4dJA6kuBCnjmfTQqHX4QGCysVZCrV6mizu9vFqgu5r5ffRY2Ckj1PsftD1JqiptYHhknC9TbCy5yKyC",
  "key8": "2xZXvBkxdwGDs4138mToSmiRv9JDpobQVUiE3RPhqa9GW4Wv2x2YDawbWtE1mRFoQm5S4NjfE4z2HD8tat6er2PG",
  "key9": "33KM3R8pFWvSukKX5ddctTJQdJ8pkxs18S7tedkzhq85B9ayHFycg95VbDfptaGsVefNBndDXKrtZbSsEEGPvpGS",
  "key10": "4ft8Vr2HdSsA93xUtGWNCMNP4MTG6cZTJBPDYG7HNUuF15x7vRfALZYNPLik4JCV9YydgAK6gkLoNrZAJBEfXHZT",
  "key11": "5wHWj9DW9yaHTz7imSWkBxWfL5g51QER1UVzy2F2ethYS81bFYTYDaFiqNA6KfsiK77RHR8GSdVpCFWQ49Zhknpj",
  "key12": "64bgY4KuU9be9UpDE3wWZDeZr9UqDytzKXuRvreMPWPduzHMZushYYGWaeAN1mW9tQnt9stLHHgjq9ixsdXQBpg",
  "key13": "C7Ppa3ccLvXjYfjNsmZ2m5UYLuTVVFxGTzCXw8RjGz7HdYfJp5iCHryaJX2A33VMYrcckm1JiMTuVEhg6sJDPyL",
  "key14": "3dSXLDXKrD8GAxbBFFthrsvUoYEGHVS1ASVcfRds1DvFFhEbQ3Jjd9BkQbwYZKcktYmAAZGRf3EUQFugg6boVSXh",
  "key15": "2riosEkd1yZ9qG8qkMP1pkgFMaZadZL2nPMRro7GkjYMyqWy8g8GGWC5F86qWUwifLiWpA6iFC6jGzfwBy1g4yiP",
  "key16": "2rF8zVHRGSMxtNZhLXJPViqyJWYKcaPBNzCnUcwc2HN9JXvyiUNx6hxVs9ZZ9bbbNAMUVuDbQovQabdcTgXePbhi",
  "key17": "38D1mtLTLFeriZby3EpuJ957wmu2Qk6R66EZPHLHiXhcZW6hpHZewRbcm8v96GEr524s1GuMf52bZbP6txZGWVfH",
  "key18": "63KtUTmxV5JiCSQeeH64xmTZAZLusto5HXBJSkp5jLohRoUCvy5N5AyKhe7cV6T8PYrz6LqzHfJGtppDd1R3vj6L",
  "key19": "Qr1QWWGMAgWT2NoXSrP8nCoD8YxGrYp14Kb12jLdfMJFMWJnerXg5hanWzFzLuykR2obVR4Q35hKykN7ttBhNZM",
  "key20": "2WJFwNor5fTPFaghCXmEQtbX1LUcasbpvo2zZiFydH3rwUSdxkKnbddK6zgWKvRSrABvqWszvj3dNM3ae1cMcL8p",
  "key21": "3BhmpzcUpQ39b7M98kcvYnFnYV8eKzEZTZ4jB4emvu51LMUPwJZURLFEj26o6d7MeF8z5NsKayC3qrNmwXvPcGoZ",
  "key22": "57QLdcm3PUYdHFWESWs6Dv85d3EcJj1uYuHbHgL8abyJ68AZZ4Sh9knaniJVs2aG8gPR6BsGbVGX4TQcByptiA9S",
  "key23": "45Q6GJjDq1Eu6sRoQ54tqRE9FzdTfumnSp5xr7rZZLp4N1zue39f2sD5vPWh8thD4idq41EfebDko92aTduNhe2",
  "key24": "514qmjWQLLT1n2KrbZHGCwqPgZs7oAq1Eaere2B9zd3ETVAnXdNP7om5vF2TSrrmhLoQMrGKcncNuBU9JqTLPwew",
  "key25": "2VPvuN425WicTDp64LwAT4CyNevEQtn66y1yqmzpqpoQCPnT43bKHQT3d8oJFUDk3rXUf6uDsaoRPXxHzwpyqwqf",
  "key26": "W4rJvbe6k8XZWDo1ygYrx2Lv7iRT46iBLLnfNJM1E3gWG2LR7qkx9QbEHADjRntcdhBBaJU4fBfeq7xFBZMwyw2",
  "key27": "nr96L6hnuCasnC5KwJMXFGcJHMWN8SmQpreYYVz3mLu6VgiZ7bLq2PUKYcYiyEWYsdTKYiGNEmSVLgDNYbXZGpA",
  "key28": "3Bf6NSAHQLXhuWoXzyGwVzHWj9HZbdorU9Gr5U3LR8T3uEgHNaSoS6uCCTycFf5eJGw3av75s9DjetnEaPhd2a8m",
  "key29": "Zg5x8y5iCs1E8HcdcPc3h34FwGQsFpmgKYFeEYhXa5xUqzCTWDYbirZQRqs9v5eNHQeoposmsT8zRyt8SgwQcBz",
  "key30": "3RGQFeafCjV7huCeByYugfxYUJrazRFc3kugPS5A9u1oLxbxpMXtgbSvxJy1UayTmd72nFAkzLTLZogbsLoB4KKn",
  "key31": "2Stap8q8g36qzjzQkGJA8ygkUJ37DgUVepByxHDQfFWARk8r39qenCU1cSM4kSvGGF42A4Rs8YvtD3fmnrY1Bg3t",
  "key32": "3EnRdy7btNvhmAVVtnuWzqGEXgSK7V7ErFi1p95oxiqCQSUvDTuCrM2uCRm29UcwjDu56Xq8g79t6EjoFUHU9woi"
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
