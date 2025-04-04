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
    "63YNBD5EZuMgYStJ9Anoad9aSn9ovNSnqnfLQtmGP8gCvvkxwvbux3WGzywh5cMG7pXdgc81GtSYCqosKhm578NG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2h456s69no11ccXF37LinhjDptq5q9wxwGJCtNbUT43sGRCujipwc9eBDQ6tB2KcQ9sa1NEFanfq8eTJBJDdhg3E",
  "key1": "34AYpuPvf686enUvLfu3k6XSVApLdP3Udo8JEeUh358mJGwvcxMhXandZ5FdnH9siPCRDfyNsC3zAYwPksDDgG3h",
  "key2": "4BmyiWpR5rN8yTheBfm4JhY4Cah3bsn5by8bXekr3126YrYcjQkyyGsNXrouarUvxxZF3D2z77QW3STTpxCsubTc",
  "key3": "22EDrEhXFrbrf3BAkn88AfyRpPCvW6Ggy1DxkwKJhDXDJ15P36hVJXevdugv9A7NmyhP3erH9WKNxiwHU9ZBwbiz",
  "key4": "2FuSYyWqr9kGfSHXeBJxduVNdXMfjV5fJMyv7sDiKvUikhhnUhE6neZ5MkGG6Jpk4YDqzgBjVEwqopJTRDFxLzxJ",
  "key5": "5UEUt2o96ZjcgkqHjtmDV6x25t9LEw2BNLUj8VtCNzijtwmMzcea5RZK5edaYrpdtAJa191gbambyYoXuTviRsxr",
  "key6": "4HttD6GuXhe5AMnc7aq4ALHtDLok5xGt83dwwWCy2TtZBiNfudrDpLJwXhP6AcU6GMCtbcK8W5fpEpaLXaCv7VwS",
  "key7": "2fhFvaP1UcZPj1KmMwxATBE4aBPihHzyRte7TsxycwJxR2KH1ZwGPYJCM185FVkPccmAdswfm6o6xw6we8hhyA4t",
  "key8": "549gvxDZGHPLeNP6KJjnMA5kdQqumE93vWTYcgmjt2Sonrj37aTK2uHoyGrjVNVeoQAPpmFeg4JWeXJfupGZvZUK",
  "key9": "2xaAc4AhuPmEwLuJKqSuskEfNjeg8oQ2KhMdmbsSqkGM7knG9tREFpfXd6DfCcjVWjX6ALG4dzN1cBNFQ8jjGs7R",
  "key10": "3YeEnfaLzPknCk7kf3mQAYFiYWgKbRUN2WA9twyNpQwv7ht9Zs8665FKNBQrNKnppnbEwJxrD6cS2S3cuvbs4hL8",
  "key11": "2xUmaxysbYT7fJiJUpYAaXBSvLPfNgQd4Ecn34pdTrFM42Mfi2JLYVrthTnQRbp7EPdsYfc6sHZJHjjWFjB3WNmz",
  "key12": "4qxAmtFFDgWE3zAQL8UgPTHhdBgSC3DZe49vSRYZ86RQNrxX6qZmHjxDs1e5ZUpVK3jXTv17ahVjBW1K3n8FsYoS",
  "key13": "61v1RVjeVFERsWk75XXxaWZVpjtAxvB3uzzMf8xGJjVeU5R3x26FY6mUmj6orVFdrC2zPT8zBfXvz1HT44x51Y22",
  "key14": "3KpidScPqmLsP7C6g33itHSTcRzRDroFdmQFwH1JZpC5arLiS5jTCCBhjn8y69Vkk8Xm3niL8jcocDRssVFpA2TC",
  "key15": "AXoWzZdvRFQYcimXGPSVniDGsgEMTQvPSkipCF8atbATjwkZV87Hb6YSJ5mSq4pEhXjYz5V8Dgcw3VMud5hfjuR",
  "key16": "5mjor2srvitJqg3C6aj5qE3XHyNeQQZeFujDYE9WkmtyFakpCHVh9GuZ6n9MU62KQhdGVktNm16whBNf9SoMJsiW",
  "key17": "4DHk4MRH5Xtsxasyzi2aPRpD6H5tjsUdCTWi6154RqsT9ZEPoLNmeqyuvexWoGgzG7UTX9UCZa82UiNwfwrQvMoD",
  "key18": "3zRem7yqRcUcaAEdGrFgSWJ9psAhfy18dFXyxJZwLnR9q1jTxJsUY2m3TSTf1E7PbtNAKtYCzkvFT1rf2p8B4pXc",
  "key19": "2nzV8vh3XLg4uzhfV3ADtUiGaxvSKyk6fTB1zRPUc1xoZK3Sq2bty5JX7esiQiqpdiwAfpQUW7VsUP9LVATEVhQ9",
  "key20": "TxLko8gUxSWKjQc5YV73oyU7gTgZAMEGThjv8D1dYbmnXzzvt8B4A3dbkHcM5GszHmDYL8BCK2yMrRtjnNxYqZm",
  "key21": "2VXJBRJ4YGncf3LF9yt5fAKq6i61bkgGtEdzeaTHW9R9Hv4ioNs5ZruHQg1BTZ4XKGfu7CkyAGeCCXcgyFY7Q77Q",
  "key22": "VRK8c95qicwFmTEc2y17jSpPdSCiwBaZTqpVeZUtQenK44NQfGdydHr7E6r8Q7esUNbHvHFv7RHEoA5R1zC64Eo",
  "key23": "55eqBXuvP6833haHTpAKxcNmnJMiZZPfKMoWUJV8zKBauie2pTAGtf5KCpL7Y2wcvJW9pYv1r9hwazr6mtv1XuLE",
  "key24": "4tbYfvJubDoKWMFy86kjBah2fxDEAAgK4Rquk9ZbZiRde4BydQcJvzLzd41CpXi5YyLPcjGCyU7ouABRu2S5RYpT",
  "key25": "3bmHrDzeSHLakdUpPFPajZKrh7hoDomj1d41UkyBte7QgPD7MGqgn672TBk16ktRD4ZCQHLtdjPbvZS2jwWrCoGk",
  "key26": "RqEJeF2w7ofTYwMAYwmfatMSEtXY4QtyEjMpWCrN77A21tjB8kFmnRQpwUn5oQWR3iZmJNdA3zjsBKRNjcmKCU6",
  "key27": "5dM2w9Nr3ipqFJJNisRqwd1JNjyK8Mr7kkw8W7cZSU6hA9eAZUgQiUKTcS1NsPx2MjaFJ2QyfYi9NW6UZuGFdwo1"
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
