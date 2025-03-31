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
    "2oYpneD5ruwm68hevm2PmCS7N9g8dhoDahusGZehjir2mhaVX7qxfAMccvBGahCg3MjTK482bZsRn7JuJxoJRChS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kda4kbRhWiwmpNpABhHiUYKLfwechFt9625HTwKfW1Ca9zBSjbHxtVyHnHHZyNZ3BMF6VDZLjud6hLgHJhwwmCM",
  "key1": "66WABfUTpnG23AUAuZq8kAfnrbnc9K2bV2zAdaR8e9Zd4qyys3dcNCbWNudSy3xm6gmXBxtGivQbT2WsNLgrCLVy",
  "key2": "5SRFDNCsreEsCzcAVFugKPaWYKGvqvd3ea5vQrBA2vR9YAqqFS2StPC2dDJJ7iiFKon2Pu1EkScSGGcgtqGxbvop",
  "key3": "762JSA7uvxZmeBzGRjb1n5m3X3Lmq3kXQPy1kvuEW7Lbn3RQUmREZkxnGqMVrtZgks7Gka4kHvePC2dRDePU1xE",
  "key4": "36YzLsJS7Yfdad4S5QJPmNVkphe4evRCv7uKHNimmMN1XhyBF1BjPHTUHm589DWTBVU5MthnCB4qmbB1dVk2YYeE",
  "key5": "61yxbVzP19t2Lasrs8JnH5yGamAxQW324Wrbnq4GWSw9XYWVVpsQJ1c9bCXJPWL6oe4ST2XDFh9egmQinQeTU2xb",
  "key6": "3YH87Td3zDaEtzyZe985uKt3CNYoUS7LzPAEKTNGbuC2pSj4MPSsjPwZFjdZErnK24fXziVBG19skMdqJ4U54fPJ",
  "key7": "6zASjiZAUjHEMjjMbktfUzTPhimpsW585Va1XpAq8QSiqVjWuRFYWEiTrcoqvKbY3y3rmDM7k88UJY8GCdQrAFv",
  "key8": "3MFRBuKEUgfV69LJ6JXQz8uRjtvehMYWVDJ7cu6WoktU7QmmmpctactBSsPTX5y2Ev7tFxAi7QuK84BEEfXACNBC",
  "key9": "4wfFfFouk1iqSk3fUByfaA4tTLr9XzZJcNcZxhzHYtzHigcrFB5rFDNs7rj28xbZnrKc7wTCSLNqdxBjBntZebHb",
  "key10": "3CKvEJqTQD8W9mnfFWEnX2hRnVwWfVNkbQtAZZG3Jhuf4VroNs9fXSdodaW7EamRtuJ1MRxw2MtgnYzwWvDEWCkh",
  "key11": "fwA1t1D5HBQ8iXXRmBSxdguPDTenAP4A6KhtNMhytdZqoF22yAwWzFx2jzaHde29wGtQtFaxxACb1AFk4ZDybzc",
  "key12": "fdd8RbSQE2HokKufqsn3zTpJn9EzxXaaxXraY6NBbpxf8n7znjQFpyiCeiPxTE5wVNDamUQnE5vTBaFsiR4eBFZ",
  "key13": "a6CrUXJwXSNuVAHgDUaiBZVdGPLr1k4HFwddr7MF6rWZvyUUXLYaePMhs6ij5fYbR4A9gGKPAAfjqWSQebmrcm8",
  "key14": "bpbmyevGrZRfLq94k5e4vT8FByVSm325RP6HiLs27KYzrGXWg38q9DqjUD5FbLXwjmj56iUoXJhE4ScfVhUzjA1",
  "key15": "riqYNqkXLnMEqL8D5SXgCUgJG5FoQA2w6uZZdFJVm1pFibjpsLaN5P4Lu6CsLFAJZ3NVrBQof7kauUubGT7ekaF",
  "key16": "2kvncHBgNS4DQB9BE18MWRfdZwXUGJX89RJsEmBcA9xvoPBYFj6LGxGxvBquScmYZVgcvbpNVei7hm6QnUUhpM6S",
  "key17": "4UF34iDPbAC2hjSeZBCmYu8XtLS5tDDtz5ozjiRezKPs5YzzUaSeBqHZsKDG9UAUQkmFee3LuxLwUEZFc5foPU9T",
  "key18": "5q1cAAGqbR3eV5bvUWNWRgAxPcvDMQFu1WgBvN3KKQn7NjkHPXbq1QzAsiUvtaJyspetZnJwsamw3NRTxKFCojwy",
  "key19": "55hhub596uNesYkMvNZXwBRy4tD9RKm3XXJasDWfdVapKPoMBMYK2QkoJHKtdepfS9EHhnS7zU3ruc4jDfDpThE1",
  "key20": "491Mv3oaUfi3jzqTbxC9iZ473DCxNbWCLzg7dXfLvPWWN3xXTNQqYowy9vYmTLNn34Vorg9SkWr9nAFbHniJfCVL",
  "key21": "3kNJXsMyM4cQAy6ergixR4pWBzNvyekYyeoGaZu8a2x3vJ2jvqhbHN4KcpToCQq5tKseqqmiSGd1581m5M2agd95",
  "key22": "3CV7UsCavAQf5WpxnjATQ5BmjAWVBmFGAfjrVYL4zYzvYmgJLUT7SfFix525b12X2DAQzZZSvmc2uYREnbE7LYYB",
  "key23": "3L8Hvvgc9w3UDGGJQUezkwL8d69fozhBYkFbGMw7nTSaKTfUCVYHLGQeavEx63N1TwbH3fwBURQVTokCGoM1HFLG",
  "key24": "3vcxh82QNBff889F8sJfVZSvhNbe5vaKXyGVoK1gxBfZazvT3hUXTXUaheEuQVQ5btB4Cy6YZQFgLfjMJ5EPUZ4T",
  "key25": "2jBXq9a7bPRG9WTry3xGLSGt9dzW9zrWs69mi6YQD12wCEeLF8uJWudBEmAmzCatKj3FmpPKmR3etngrqyV3SF6M",
  "key26": "5A7n7hqKWeiYq1jPdME9r3ov6ckfzEdBV3MWzX6UmwMynwYPpDqE8MuJ1N6V8C5chHjsnYhpZzFvf3BFc2aCJaUH",
  "key27": "4Ji523jyrhn2kmPN2pABvZLqtU8zUA2WE69QjaLBueJ2wVb1T2YebC8rZM2xRBjKjyq3JzLVnsYwsNeuh9QfxxTP",
  "key28": "2rGiHhG2cem482bTrD53xX5QFMkVS9bmAxkZaz7XYJ7BAEsnwMJE5Jx13NbYF8HJrX7dBuWsRgjvGEc2XERbTA9t",
  "key29": "3B3UTeorh3GP7ZrMrJPrVvpbWHkADGpjteSo6D6gk9fuT9FMNdvoDWsmXqZ25xryQe7a4sMRKnbHJrsATz7dXKJn",
  "key30": "2tsop9txredYmzbkFCCP64Fd7Z5RZsS7dKTg49X8FrTZtCUfr5JLCM7QVJFHeML6FHVxF8VqMzX7RdDYtwuSQMqD",
  "key31": "5cqv29sGYkxFLcC4keH4CNQZgWbgdb6vZj6GkBFCujd14eqaHc2caFpDDctPnAix21DUjEAwfagw7o8aSojv7oyr",
  "key32": "2YEisDwDfp85tfY3pT67NftHHGHuWMkAVxyWFKQQxfmahxjgWEe24s8T4zGF1d3WJie92vtQstShrZLmgakK78VM",
  "key33": "39PL6AqAqGZ3cSB1f9B8EMeKvvwySBhpq7agSdZWjvADFB3484xN7qKk9wDovVgYEe5LCtgikdwQ8xCyPfSadx6B",
  "key34": "375EQy15jcDvUob4NtW2P8UA7cT4hWsuSHwnzenShcr2Hw6dcp8j15tG9LXFUZpNnxxqvnqLDUV8sy3yK95KXJjr",
  "key35": "5xTeYKF33s73AyhKnNLwbpfWCabGqu1vXdu2NxNQ7kbqmQV4V1qDEMosp3wjC5LzK5ok364rp9pKpuzJzEj8sRds",
  "key36": "PGSN6XBsCDzaS1p9c4v7rE9YYgxY3iVvAkACc7a8rCG4F5VUAgCKj3sVZSYhUdz7Kd4HaTrP8eDNHqkqkqsd11Q",
  "key37": "FBvYqjmysM6kT5Fznt8nYLTETqRgJGdXZJCcVWnBmNr7tsCSVZQZEZsYK16suDX7qarmRo8RrKz2a6yPhcFDA7A",
  "key38": "3yyFqXwGW9VSzE1DF5eZTbkVyHL7FYBFYFeoMViR6ejW3CiAY2qqwM89xBWzSKviat4TfrGJWJbhcpfLeiGXy2a8"
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
