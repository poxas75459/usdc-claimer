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
    "61wPNBypDd8ZZiPEc7vmpVZqt8KVdpRTx8XwiwL8xRxbhCYC4aS5uJxmYT7LnfZEn6Jj52Nzhs6GhYPYgNJBC8S6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gvtUDGBTXu9PaQzysyGpn3SoHicSEWhUKUTmdtj4cHD9P3bCtcdH37ZcyexvtL62sRpTz1DCzW5dXaFQDkv2hrw",
  "key1": "5egLPpV19EQk7VWZmEuyNxFrF7DgmKDh38U12dC2aNnsU1xQsYgnD6vRkDA7ZpgoD97qkxe2FT8YbdyETLzZEpLZ",
  "key2": "4qMioYZNucjYrryJNLTtnszuNUYM3j3eY2XZmDLWHB1rE73icqV12CeZWkQ8yYi4C2N6zza8W2NFdUUMLWUPVsAN",
  "key3": "7casDFVWeTe672iRCVUPnNcafXeM5P1gdYogiBqw9VK89KraymL656QKCQ8ZdEvKrBvLccAsaX8rfhQvTo4xRCA",
  "key4": "8VRTKWsSFdsxE8NUP2jGb5iJUywJcUFgjpRf4dpPPrbAHGKrcsdEtA7knsXCZDNtggYUzYGWm8MQvtXJE6Fssmb",
  "key5": "4KU7ig8PQeZefWxeptcqnMHSPnndvUvLFBeoqy6CXdg4ZFWt98vBZoJnfnnkJyJ8ZdLndRt5W44xbmQ1yr7Q5R2q",
  "key6": "23xjxsCbZQGdKJKvuzDPyTSKbBgzgANW88cE5L6JRHWd6cvSYWLeXrfLYGutGLPXEkRu2T9jzCTPGqF6fPumAfGL",
  "key7": "3qtJLsFA8Ampg17wACRu5mHs5AA8AwqJFBJ8UT8kdtE2nWG8Z882GqvBuFZnB92bMEy4x8DK3kpqVsYpMtL5m8D1",
  "key8": "V5TSKDfzFTv9uV78r77tWrkgeun6mGRwZ2UgKkC3gURAebTiriWxn7XcbxipjeCeg9cRVXXq8xvYpDjUZjKThbr",
  "key9": "4r85uxo6ua4M5xPcSMAZWzFTN8UNAwHmATG1Q45ED9j3w7Luj8jDDwYvLmKPR3YK3o9AAJTdS2mehcjdiAnoeZF4",
  "key10": "2aaPEBrKXczicngkBM5usioJyWW2RhFqma7X84WHKqH4aR8a7hpg4aM8fqarkGdjBaqvpZwgHdduui3CqhqHUKqy",
  "key11": "5BdFnSuC1KCduYBdSFAZwni8ntjUXCPfgB9EVhroFzu1PRe886K16pUKr82VuazMFW1ZtnZqYuRjG7sz5gCGcdNt",
  "key12": "3pbBpeyU76TgQsoaevY1f6yHgnAJWDoo2nDU8gx1ikdLMjP492fKLTLVhBDAw6af4NVtk9jSShhyQSr6VmqYX98u",
  "key13": "4Fc3W5RuqgyWSmGEcw3FKMWniJuSpzrVJBGoe3ui2pEt1df7wNf4BW8rzqqTG9BLamthUWSu9bez5UobXtr8tsD9",
  "key14": "588ZRdAwFsmZY3qSQi17mPw6faziP7HWGx3rBQs7rL7cBzhhfBBZ3v2pd6GF5CXzAPYRLzuAfnmyz2Wxi3ELf3PT",
  "key15": "4BiEZdS4zXMdCdXuocZ8oxqYfD2VgBrWeupPZd3FC9Qmdc3PUAsNuCNxA3XzgHRzW5EcxXNhnESM2hByi7QVGXjR",
  "key16": "2RPJrLJatjUJ9tox4JvMLHLtYf4A5G1V8qSyfz2j6YfDhQSywjyBQ7sDBJ2Kiw4hTetrACVh4bUgerGjf8oYiUxF",
  "key17": "3dYwwmPSjNxNy5B4H4sgVpJGueWmtVrqTF8xvp1TcStBQ4mxGFgaV3DKiW1v9E8Lfy4BgJv6QPKQvavdWoTFZUQa",
  "key18": "WKoDYB5QbkGzkgqZN8sPYx2CwTiBTJGS36Fyv7BJEwP87vBZiYGhRWHkvc7b5A6GRRKZ6XUGduMypzNHeB9W3hr",
  "key19": "3AYr8i7mibCspMtziTLcxdpM1D6HeYNBSEBfHaYbu9HKgWA27RDpbMY5RgNkXBDumQnNXfJXRFgxgZz5gYiE8DyR",
  "key20": "vupKo9RX5j5Awoojmz3FPz645NsKxJ7cjUi6YSyrqBVPxR54hAjsrkSV89NmA6DAryPhfRogHn87bR8wNeBzK6y",
  "key21": "3emuL51jUVrjePTark1RNd2d4bE6mZ5juYEVHDJ4WWtxFo9wxpVBX7kfM3QcP8k5gPrVaPEgHkQhq5dSVXKkcBXj",
  "key22": "2Th11gy5FmFJxDTLdxYnPX6cxw1ToxrbSMfd6b1JgnvwvCVAnXAjKGqfUQx6G7zPAHEc9wPwHDTZVAnxhGDLFLRd",
  "key23": "d9kPVGkT3RgLL7PkDxWS6eHFbYjEgK2QNjcrZyJqkmZFFDB21oJe92SmDT86PqkH5n682EF99LwUrZysx8t2Xa8",
  "key24": "4x4M83rhCTtMuvvHu8z7kaLZirkfFx84yuJJHguESuN8EdmhkSyGG774CrGFh9WcTSj92DkWskBucr9vi5WA8sY7",
  "key25": "3MXeJRrPGJU5V3qbMDWzQMxhsLx9VZ4ogUvSLnnhDp8Mpb5zex9dFjAYZF6QKM5QXic6YMJyAv7C9c7sfavnjjgY",
  "key26": "4spcDAkD841ChwYJWimTQQhWJjMbAozpDnBExkWEdKXdErK3cyNRcsftKtQGKJsZJXHyGDLwTqp85x8qZ2KaQgyZ",
  "key27": "3f96h87bHzYoATEFYnYDj111EZ9nD4XCZuHEy4Q8cwCdGThUmqWzRbWYji8onAwmAcuC8m3Q4MMrH6YmCUKvWECz",
  "key28": "VqVQWcwVpg4m4dPF2jZpwivknxmFmCiQvUxy7GBMwrVzpQzAzLMwf3fE8M7thRy5tuBnrwdNV4VvjY6UwKNQVks",
  "key29": "3VAgj9ChE4BcwuqCNGCiYqMmz2VhZh9oRNUXiQuWFGyqtAVbuPYPwbqZ3nAG9Rh4YYVTCgZJge56iNXUsBByBFAa",
  "key30": "3Lxch5bGCLw73kR4tSTukzgtonPv8xpUrL8h19nvR7tPGbmZq8E3BAe8pcYtRpxxDmGCpjh3zrj4bLeWqjMXVhY7",
  "key31": "2TP5Cp4Hr9XUXLq1dhXPQe894V9xRzxjdmKz6BUNkXcBfPP2QvPnxEqSDBwZxVpUyn3CLLyHLzcAv5jQH6KPBMGE",
  "key32": "tP9EdNfWrLobtE96C11kreXAfBqYtAVt25ZJQsBdrT4HvuMDWH2MHh6Vmtc9ZHct2RF2shENCBKXM1Xcb7Z4Soi",
  "key33": "2EbNr1AywbMsDjbaw5bEYggkyz4gUcAGbTFKNV775gvfSX1aa7YiXHyZRMAReup5ibgXeaW6t2ijvfC6rEQrvDLk",
  "key34": "3zaJDoja38FEed62wyLiX2TYm7KY9Scz3myZRsmaT5sCpEofteKf9yXaNUfZT9LUQhjuY4n3xyJv6oqRhygRunCe",
  "key35": "2poVz4gT4pXATygTfx7YHDW8ZXFSsUEkzK3GGoSCUaTi73T9D1KuoLtASFZeKLzoN7LCmw8Nk6k2jNrKigoBWiGN",
  "key36": "yoKP7sSG7BaCPzUQhHNcaDRxDUFKn3N4AekKi1Y25ryb9iTUanrGyVQHHKCz7RBFytyZc5KG6KCLDiGt2XpnUKf",
  "key37": "2z8VNfSgJR9vtn1mXdh4yq6tixNTh7V531mHhYUh7GEuwUTFXYTCcxCt6UffYzizBkJxzcQjzjJALHHiRsZEHzVu",
  "key38": "3UUk7U9X9JpYjHqgCcWRyd2Mwci2v72rtDwJeDuVzyhm5MxtrvmjcuwGQkNizWZXp9GUX3QjuKoLXoUnDntH44dk"
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
