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
    "4UioZPGxGkHnmPUw2tmFYLDbSgBRUaARtZvK21HHjpNqXh545UMziPZVRkqMWzusaTbD7z79g4fd9yvemPYrSJ6k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WBpzmoSQ7V1MjG9iCMQha2gzWUWXHbGFPirSWvBUxcFvSRAVhkZbheFLTVyhjzaPxpgJutp394x7ENaxN8B8QLh",
  "key1": "LCJD3E15DqzcBsquga6MuM9H6pBozyL342y3YLk1yHmgtVjtHsuN8vH8gdzwVqpbszrk2VL1LKtVPuC6BHtuiUf",
  "key2": "66JAvp19BY2UYnPx9RkRJxYGMow23EArpdQJzu6xohfhiiNahK3gSLowvaChNdCkPvHxhhqx2ZN4ENfC7sGuzT8W",
  "key3": "4jHG7tqrL18oc8oDvTtmALS11TRyoL217QnRXJx4pFc3XhbFZt247eDR6zgsFBvdCfPrRbt9BEzt2q8qa1bNTRNU",
  "key4": "3z8HJCtGf7CxezwnNDwur4WMVv6unsemVaeEyku5GgFBjyxrw2sFE1q4JVv8MkTos55jVGtxSnJxuXpGY3Zsi8yv",
  "key5": "3KY3C2fehd9Mj4SXQ2V1HH8qLgGguRK8tZJZZEaz5xJtojLvHk33Bi9KSPWVBBWdLcUto8HR1WGz6o8RonzCvc4f",
  "key6": "39YYKrKTHHLhoc2msEgSUb3djiYsCuNboUAuLftFDrv8vgkLW16exeFf45ZrV4EWsKDfdy8untGwUwi7LMEErRQc",
  "key7": "2MnajZyjRhWNso1NZ8kdvaPfuo8uhYpYEuFHc79DPNhTafm1pKs4QaM8KW5jHNVS4zKYy5dr32FNpeDk5xamAKTX",
  "key8": "5N2N9VmF41zXxCtjwKEp1VUqpY4PyC9gNpj8ttWPL2P1GSqkBiAGQ9R6DJaE9yUHbhTmNjCFH7sQcpC43yvDTaNK",
  "key9": "2oqCMu1cJTFid9nT2CPbA4xrxgAZ2XEL2zkeWPte9MN8KWJSkdssjiJY4SvH4DDQK4fTX3BMx8HeqthBwxdT61KB",
  "key10": "5fUB4vkAk7bWzgK5rHvG1YJng6FZa6EF6xvqZZjy8Vj2C2wak1rAsv2xnu1j3uZS9zqe7yS6oq7DQjnjj5iaqNCi",
  "key11": "3FVbcsNjcWYvrLZmptAzMwCDZa6yXjPRgHgua9YEFSUHJpqavDDUkxKka6bYNMMLteTG87oDsp1iNzzJXZSsC2cG",
  "key12": "JPnygcmE7gZ7xMw92FtZ5AsmYvzk5j22HsrXsUJvdWv33Ydh6ug3Y1Q3E2nAXpryUGPAKAQvK5FHnnhrKsDUndo",
  "key13": "4MMfeNExVqLpfKxUPoC4b6u2jeHFoJkhb3oydWVfcdxsny81r7E1ZAjqZbpaewi6vutsvPM8tq7CAHoe3sMHhZwz",
  "key14": "4cX7EZV28fW7SExptHLrQ6opS8Td9yydZHtBttyRkotVyCxZTMutD78LzkCm1aZkCHGaBTH4MUFEHWgcqSmzSgn3",
  "key15": "4ZN6RwE1y689KqJCDrjGaZGmSt45qXmPQqh5GggVf2WH27b19zYYUJ54udcjSQ1ekwUHgjybDTxCgLjAQCfzgt3P",
  "key16": "5DaLyzVPbpGWfGGr6NPK82ATa871ZXkjoXWL8bECf2FHNf2B8zAgZEabdUDg7Nte3AK9BLLHYRv6tFQbSCApybYb",
  "key17": "4q77nufGfw2aag4dhXKujrB3aHVVkq6M2RHxxPL89QFhmN2sPJvobUkQhaYTi6JH85MFnf1jFzHJyphMdUzesktA",
  "key18": "3q4Sj9KVKNKYQhRjNp4yQtgtvxHzF3GggNjaiJSeXsyW5gXmWuws4mbjsE2opu6p2UDB1So7227WKAVuZEQHWi4r",
  "key19": "3bDLnxRL3KRjtm4bqH6atP6q21miwdJ9RjvW2LxnFDJ92MXposZEMgyqLy628T955esv5BcyD1VJwxMM4vBkFJTp",
  "key20": "3zMrkFwzUeY91MwF2dRszeVdVqa1uEJbkt11zuesUmCBJBMtgt3U5qneWyPEHnspe9L9wbb56Cd964NzNBuzsgnZ",
  "key21": "2rHyJoejrSsLPrW9SDN3izG6jujGpT2jpSzvT29VBN5mMYxqpLJTm4BTVvFT7eTE7BMNDG2Sg8FKoUaMx1vu39yL",
  "key22": "9AMZXDjT7DSHABAjvodfNKbKrX6hARSvZhGn1um36XzeSdaJ1hxQNHguhJ8bgUxFa5UVNoXGzQp83WYqMmxZrA5",
  "key23": "3PzZntNYXZxBfh9FUsfNp7hQSdtTxmGTMbPjtTe7P8YtJdpSVJa91ZHu6GmyvPkQZZdCz6A18Us7mScCH6WViznb",
  "key24": "28GpazCv1Cv42oui4x1KMEUSyQgBD233uj2LoDh25c99BGe3LNV7YMUg6M4kh4rvZtRvZzr1KyWK8TT8pqKpGxc6",
  "key25": "5hmLEMA6YNAJFtniot68QSyQimDL6REF4KHmd8SLRVjxc353RS8QWCNe83YMo5zWQNw8SxwZ81XH4X4bjT9LsdDW",
  "key26": "2EGGddGUN6fx9VUwxKhzzhr9K9z6NHmBQsnjoYdJToRpF4DAyp78efw3qizKkUrSHsErpkk6KuQe7bMUWjBW6tvH",
  "key27": "3HPPTwacEmcoL4NNtSfnB4teaWnTTDmoEvcbk3aS349Xw5k3MvrQe4V113bhyHvv15z8UDmcLsMZJRRziEL85mwF",
  "key28": "5wFPho2AArWSkixHbDH8HzdczN1QBPkJRZm8dEg2SQ2Jd2e7HoBgmT8Qx6u43SaWQQ2nxABarm9BpnJC2VYg87XV",
  "key29": "4pur8Fd6nJHXQ41rn4udUbYdwb8zcY8C8CymtiDCeP7sRABy1Y659QXwvsXfhwcEJKSoveuKzLEi292d3YU8ERT8",
  "key30": "4Eqmh36Whr8UX73GEP7yZJoHHwKMT7ng3U9Ph3yCAtSD5ZkozSWYJRFgvp2s8AXkWMTvqUrFNd9ZvBA5oAhT24zj",
  "key31": "48XPpeYiSCB8AuFqPNbiB28AZtuD62ExLFvVmgMKXCoWj5nYJhMQazbjcYU6UcbuTtFmTcSLaqMekGu52AXd5uWu",
  "key32": "SH94i3vpYUgzNLNjtgSTSZxcQ6L2CJm6cM5NVvcD2eqpJyBtuPohseUBpdJYNF2AiN1tJT2FfyMEYn8B8VKrs31",
  "key33": "5UkvGuCfE6tJNNkW7ai8v5Pav98ALP3dvzSiv9wNNSFkyUtY5Wx8hi7guPXqWzjbUapAqzwgmkn8wCQu2FCZMurs",
  "key34": "3XYa2MoXRj8PsAaiHeK8LijJM2TawrkGMor2wqgL8WhLrA4FsCTLHy2DxhfEJWAVzxduJmPJowzBYZR4U2F21jVt",
  "key35": "m7hzM5GmJ3yswaQXphVGDkPeZcfDi8wb8GWbvKV4McgCFoxLpa8fXjYwQs8TriH6No3W1Ff461r395AdjjcUTic",
  "key36": "2QakJsF9UWGRHz9384P3NFVQf6jzpKmtL4vV29LzgpDgZMQLtbxkcCWJRJJpTyyqJbfczTxMGzKd3fjcEUSPVb8R"
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
