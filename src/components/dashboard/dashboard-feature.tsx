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
    "2oxbYMkGivW6KFjwMus22n59T9Axkw3iZ3imP9WocNRTR3ZnzDg6Ta5AnTZHQYz3Gi9nMpcgDAU2vjqGr1A1mp7u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49PAMkXYG3uCXRMTQ4E3u5ZKfDFJpTJgu8aJg9qZCcNpgWpf8YTL7RnJitGjnypkm3GAKzb8uo8LkqTutZC78q6P",
  "key1": "4EqWQ2waMzJDpRJcxsnyYqdJ3xXPygDz6nWNbfk8uUZNokqaV34WQ9SHGcCgSorCFpZXfYJ2wGZpezfWrWotvPiE",
  "key2": "2zyBtADNjJmWbChm9FvDsDFUo65DZJBPe1Viji557Pn6Ude6hp5Dp4DcDZdUjR6PL14ywBgrCVypA5b4xmiMmewb",
  "key3": "4E9KKHFCWu5gmgp9Cm2PFnVKqgwVxrzheXSo3nXYaEPXgJLy8UJYPSc2NiFa3RwC4e5inkEz8s26ZacrWJWBCkdf",
  "key4": "3ob7vEdFr9EgdGiC3QsC1bsYahm2qhtRtCTKpFgmQMxRwq1DYPRDQK6hwxKRpyLCVAoHmRdM7miSso9FLfzTiQz3",
  "key5": "2B2Fxt7JmnhuEpAV1jYNGuy6xw6cBLwwpnh8i59iykMmNCFa3xaQfhJx6imCvAAz7sYMbht4ZiK2dVnMJJWNrNfP",
  "key6": "32Qju3YyXfzP3xRMxHgTVvjNXLcXXvYj9FzD6KEACAc2dWuQNNzLZM1deVvLd7tpt7DU8p2Dv2joWWYpqfBczRNF",
  "key7": "5kHvzSmrVKaNLm3HcjAZnnXbPpBer31wG6UqHhsL6PpvVxjageX7LZpbwxFTiSdTTQvtCnS5dJSeuu7n9e6DQdPF",
  "key8": "45kZRCH1XF6mgFNCHjj1uqHHh8wNRX4P3px962MWVvius3xVSuCyaMgvqDGypBFRmjo6qPmVSo1tbYJpeWQrn9VM",
  "key9": "LVJLSQvnU7RWkxJ5k9v4ZW8pQ9mqa3171iRdChKG63oaXfraix74Mf5MMT1GPoQrbeeCMS1APmQgwQZ9CovnFr4",
  "key10": "36RRLF4C7FH91xGuiqmrSYpgfJYUY3rq6nKq3gqZymHoJrJu3pMn6we7E1yBL1bfgtjCeqAyTts6JoXDu8HgCxr8",
  "key11": "2WQo1Ra3jdAqXFisqHkkCbmaqgrLHsmp7fBGUtEPfcWto9ZgE8KfSvrMZERnV3DapGiUAXPuSjVVXDarsh1g7Xrm",
  "key12": "RGxY9sDJGNVxyv75hGuMFHUZa8uehZoiejPsCd9CnLutX1zCbw9r54SvPCG4HJzh7TYvi5mBGhEnuHq7E8sB6gX",
  "key13": "3NREiPhYFsM9xanpGXXMFiucE8W72tR3f9aAgfwXUHFKRubZk1ByxKcuyowDLfQv9kpdwyxJRijbL3FDVhJbA88z",
  "key14": "51RuFMyyj3HrKJAQBJVZnynKTTKm2SQVeNRqGtAec6vBYRhKB6qnmUGo17NsGt6jqFx757Jvs93T77BkBcavwsek",
  "key15": "2VR9QmbU4SYiwEN3sYT5A9EMCpowWBBq8eRBPZpVo5BCaNvuuaZy7biyjEtCfC52ihtSm7qzmoRrxfJMd7HYmnqf",
  "key16": "4JW9gE3exAp2opFFQZd8orFFFP82eyhoaUapfWtu8WGLkE4AT6BqbSWWywA79LSHis7QZtdnCVLqhxvFMQ2PWfeV",
  "key17": "4mK3rFKgapQJeBrAzt9Tr3uag7dBUmZvr1pWy4pwboRajh7EBJhsADBQjnbkq7imXxRhDDJ178dj3WxvttnhTyJX",
  "key18": "2XDQDsvQMFNem5cBY5BqaCuR1khYPinTk515RG1Q3RcGsrxBrPMrnhpowfjjBGw3H8CPdmpqiuZb9j9a4wpnAKLg",
  "key19": "2qeQgBRwJy1EFAtnymNm2mMsAKYUma8Qtc7AeZk29tdLoWdduVmKR3FArkxv8a3CtqnAcwcpEntMQw9BzQ8mGJ43",
  "key20": "3XHm3YYvf4x7GZtGPzYbor5fTZkzRkz18beFJZDrVQHGtou88jtzZaQpEzDcxg4ZQtbQodcLdSkSTFcMXvoaZtV",
  "key21": "4rjuWwr56XcvakT1Lir7DXbnfBhh65JpjrXeDKK3cgjAMsQZmcTjaqM8t9WSXvp85L661b2WDXGazMLqvG8oouVB",
  "key22": "5Sjd94XiyTqRXVP3AgZtNx6vfTAwa6HTsALTi1pUT3mKQxoEA4UtRX3GvSQvNyBNQUwYLCiT5vqy8pP5N8QPC3ko",
  "key23": "z6AYDyJa6WyaR9MAUV3P1acEM5oCaNLaTX5RQXiV7zS91ZmHvysZjYiJNcHSJqwgvsij4y75SDdPengev31mzbc",
  "key24": "3m7z7hetj5aXZfVBKnmWnHDVoaBUosjnp8mX3dMuvyDmKB5g9kw4VRaGhRUtX6ztfq8y4dLiNZgxWAxc6csjSNa3",
  "key25": "2rN4Pq6CWgQKKeaNprPLpKTCtLB1Un7gAYswNTY93gp27VU5EtiKvXUbQxJH9akpzKE5crKodivgmsLtV5UCfgC8",
  "key26": "64FwbLKULSzwYkn43KepPAydfc6k4iWcfa5v1tppU6Z61iWwmuBKGDZBYqnjia56UdeFYeu6i9Xzo1FkHRALtcRa",
  "key27": "2QXSz5ftNBFnPLzCS3Yu4tkTSRJcqZVFvUweyGtYNeceDkw4aiaezPJJxpgj9zobu79c4ZqhH4VZBRkyKbjSBnKe",
  "key28": "3GNxyK6acGnhWCNS1w8cekCWGe7q3ryZT3vUdosSs4HKWbdXkUf82R4uyr8cXosdSbvBW8Crdo4kbtUPLhyMgrnJ",
  "key29": "wqFqFT3GDTEDThiZEDZc4UWQGPwkYhwUriSHBBFKoPTckRBANFnVPAjV7ZHkYdXeebgRFLL2uN1wsFYupaVQLsZ",
  "key30": "99qdmNsieN8ybXrpMWvnePyRwbs2pLq1PNYWZdaoEsi9mAXo7zBeE6bb49siaNGTShDM4Lud8bkajWoJgQoqBLr",
  "key31": "2oqxjyVogc928X2HzoRa1MjBpvsMgWZfoQPq8i88YFEUVdqnJEFYSLDeE5CkZ4MUdKSMTwB5nxdLfg5pMf3vDjzi",
  "key32": "aN3W81xQztSevnrFxPo9bwnGj7qn5C74WahSuBd2mZUA7Th7L5fKUtNziqQ187SRHRoptF3WGyZbdbKz6KRdQUb",
  "key33": "5EHh2MJ83Q6tAZbBwosRWSHuf4nmh8ZY8DXuBj8v8kbL35tYAXN2ptFksAX8Gf96s72zJinyEoUDpXJuqPw25moY",
  "key34": "4yJnVtn6hzLiYxgbUTndDW47ciUjFuan4AVGH8aHmSLfuLSP4di3N1ybef4b9LuQJwaqXfe2rXecUAtkSS6bj1JE",
  "key35": "5HhGKaNYrTxQyHiDnn7iPjYvEcEEWo2XLgDr8HX9QqDDNLhP3KLmhrW4TLPxSeh1iYfeN97ZZWrLQ1pUxTF1spkk",
  "key36": "66qsFNG3b6tmmCMHsD49ydH1bUiVn3BQQtxXU7rjY7PVj3THgcb2zfXpGmxzczREJiU8ZVa5aLDDQrUs9Q9qGYoC",
  "key37": "2sJxuABa5WKqLiUWLse4raTac4vfweY47xuJ6PfxMCeeB1YKjj1fUd9uaf9z1b9TzzAvX1nAnKvor4NP7BJRu3Lh",
  "key38": "wDcpXeDhmMVrT9s7NvWELxzFdYfBbiDiSP4PMc1iV97bEL6Ddf7VXgFDEcMrabeUCoSoBH1E3FwjTUhLogrbnMv",
  "key39": "5CZRrYkwfGnQpJ477hoaxAAhQdkGTfTgJBwgL7gzQn61xxNymCzFWZLuAo3xQLHcDtcEmxybQ6XnTSW9Wr1afyMY",
  "key40": "267GQ5wm2mcwmWUMzhFKbmTmUNeiZmb4gTHuaXDnrPwMzBwY2vVGytBtWNHqkx66ys9nFqNiN2kWupegFxin1dU3"
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
