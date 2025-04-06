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
    "WPH1ngUMmHVxJsgrNbThPGNkiEUF7tvwBK2855ka3ybFwTwL2rNYcdeTsYPPvgJVgkSq68wN4dVrJat8GCssei9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5W6htuzjpDaxx4KJvx57xjVg3TqRxuAThBhvz439wjuxC7pEAb1XAkYnsSczJGmLCQj8RYSFhi2toNHqkiC1bxLX",
  "key1": "5fe9LfUN8KvWELaDdygjfw3ptNg5HNm8d9zGLxzDY8GTi4stdopSEAHezN7Z4FMz9XhkM68dm6buvKJdzh85WMFF",
  "key2": "22ocABaNvBUbby1izAuKRvkNwaPjYZihxMpqZig16hq5VN4ysvCgDeg53ER4D3qDUU8ggE9eGifKrZvLtZZrzedM",
  "key3": "2m8YF79SMfcRppj18K6taWEi9xFuvFy3iZ8AQfJ7qCEi3fAovaKGdLdwnphiQAq1jXZkNe29DWEkGdYb4d7TQcSz",
  "key4": "561ZsuTKBXqQ2qjPn5zvao1FKUFV5b4T4z1wdrAeaVKzxdkvCLy1u9K6bYSgyWxDoyEs69yRemLBZiHNNvH8AW8M",
  "key5": "3TbaTQn7R5H3un5e5VJtRcM9b1B7d7E8ARkmtPcaLR6BbrPhLCYT7ETy6h3VFDHozQzZ8XiiQ2wyx97ErsWJ4bb8",
  "key6": "35ECMF42viYKgu9uMUs644QS6Kr4P9zEXWS1v8K7qfSfyhzDGQFKNf8o1jiUGpsKPqdryKV2B6rcZ3pKFWkmJHA",
  "key7": "3hf6RVCpDTqKU9DKs8tGP4LJHN8DSbcfdkAmCFCuaNSTzQAxCizq8TX7S1mzjWYqp6PY8JAHZxSThsojgGT9UKtK",
  "key8": "5tvSwFbgEBQrdf56ebJffJhYUDTBSdFBH7SFfFKxQjXHLQde4u6wob3jSdmuRZBqBehFBdyyKs98TriQg8krX9DK",
  "key9": "2cFfHAyWXWyfmE9vHqPGGYGTGYthccEsSEFE3yGGgesevWZzyS5RLzM4wW9UMsaz7VrrubPkLHMoL2uVy4Jg9gHT",
  "key10": "3JFYE6SJuFa2h3miSdpXg35AtXbZi2m8f2ms3eVoytP4jCe2Yg9wyD9oV9mCoE7MmabbR3YYvi4jX72cHyiU5iHa",
  "key11": "5tJ2V614JQmDfTz9YWzwy5pdG4cvpSe7G2GHyR3YecEirJiZGbcAZSjeC77pCqQiuvaYFLj9Kv1jfwkLUvnLUYWB",
  "key12": "2bc64dNHCfu7xpxZgNbLmRiyHD6AVofGEdD6zPgYHZPkrgCQSjvQAXbvLXt7pbekSG4c9x47a8SP32gsMgSJBrXp",
  "key13": "4VvuY7RLADtx9frK9aqbstNNsgm61Mhu5UxYJsnpQrbM3CEop6vpBKtUKw42fB6RGBehzKC7CffjodmdspYq7MyQ",
  "key14": "5n3z9Hkrw55jV82QyKykxsjkWgp3SLuBp9V9bdjgnjP3N4LCqoEnG1UniJorLuD4gqGfxwa4Q9uoT5qBwQdFt4KA",
  "key15": "2WEFvj3cz3FYhTgL9BMVgycAuDAH4sebdLHRgHWZCvbP9t5MQc2yG91VsTyncuue9g2X4omu4sqeknUCJP1DZaVY",
  "key16": "4Ze3VuT7T5MG2kk7ZphB3NE499XJahpfzDXuQ6KeWjmTnjUCQGvapsXoyeMNFvpB9zV11P9M5mtazpN9TZ7DWvgm",
  "key17": "SubaeUJaoMfk6JvcDyf4FMTWsjwgC1cfVvUTysme6yfi9JZ73P5BJfkttXuYz8nLq8gNrTuVUJ5tL6nrBTG6Azw",
  "key18": "29qTBJd7Bz1tjceYfHZ1QRgiSqvDFqCM2zLqPBfyvtzpbtWyJjyfnTXmphxrRu6c1MLrtzkTtiEujCShv1ar8XL6",
  "key19": "2E4wqQgfdv7bwrguheYCmm9cb1bvrX5Roo64FKRx2h6kPjpUmqWsXoXoEoTPMAzaP8iHGyC816VH36D1k8etmb5S",
  "key20": "5ZAn6fi73oxVs3uXEbpBfAdzDwbe84kZfkBDZYTqsMNkEMsDhPhin4UVgmF6mFH8j3Edfn3Jk5eDamGk3F3QwLMB",
  "key21": "3A59UpDptZJkTJFivvToobtm35Sk9jbRsz3SyonbTThQrb4QN9YH63sWCASQcCEcc6EXzyquydxtfYPkcwNZ6b6h",
  "key22": "4GmwXDLxwksvvXYZVdvTL1yRJSD95HCurJyMMuss4LDmxLTK857UxrF26zCHLS8zM6PXkMFrks1jRQVHquZLW6ZC",
  "key23": "2h9WxZuRhTGixPzvtAeaD7XtSDvpuaLzXeHJmA82L5obEbf6fcUwXAWTy17C2FtX2Cg66DuFJLwLW9JcHHtyZ5RX",
  "key24": "5KoXWZcqwzNMS9sRWwD1Bs2Wj8fhx8YvtZ9tpMJhW8UpFzyMR5bBDQC5RidH3G1AmTXhqYEgcdtBRZLsTSXNyiM7",
  "key25": "DcaTqJrHCRWfgSt5Bo3qGyvKh2mpC3rpwQnPjBeDqhMssQZatQg8X5tRXWNtXqNcaGrewhvk1zdPAz31nQWiss2",
  "key26": "4QTdeB4TV5TcifSnkEnfir9Yn4As5x6qhdgS5qmyTKbduVcHx1MGoinvMYZFQY49v5f9WuTy5d9sunV9FmeA1Uys",
  "key27": "2H1XNqSnqqBuBv2Qn9sJizo31cxy7VxnUdGt7rNVLgdC6VKF7fMFzBeyY15tjRnSvUUWu7K88Ts48iq3kPq7rva7",
  "key28": "4sWPFwRyWJ7DCoFBVBKXrCdToVR6L3f4fTJ1Xh6wG4Vvd58tbQ3MJgWa3MsjPm6YyMSrrgDhrrJTaxsPtXEXw4Ay",
  "key29": "3ykjaii8XQXtseYDeCcA5FvxkV599nsvasTAhH1aDp7AUx4YupihB2bTrdLP4pcu1XCqivoU9dfoyQs5bLqCeurm",
  "key30": "2QcCopVDrQrxskbifYxTa25NACj1UYbkeBciz7nTWq8r27wrF9Punk8WVVg1DMDcqJo6FHuLkDCkxD5P3qHwZzUS",
  "key31": "33mxQnGFuapxGKtkpkG84mDevN6s1LP4qMMdDACYzpm8EcWEKdmf2VzWLEb3sPX3QuwvouF1DLCxBCjEYkcQsRH2",
  "key32": "Cw1BsBi8BvKnzfyiex8sJZwzrQ4G7gLt65jU9bThUKpLU8w5SjZBp45gddoo1memQKu27iEBZqjFNamxmGtv5Mi",
  "key33": "eQdiYMBs8BmpTJeVzPAvoP7BNirfD3sCrFxnNGhfeiEYduyWtpU8XZ6FBhknkvcsv9nxrPcJF28BAMmK3nsfMk5",
  "key34": "3fEnJWEw9uVYjPe2fJ3VerTKh41eSxkd2dJoo8raDiPmSbtZFBvakbBTeNVwZZ334f6LktUDz35FBaQMzRr43FHm",
  "key35": "3YT2bt6VZ7Y9eHkusfEHSvdMk8qAh3WCrq8zyvmRSiG4743816A6az7Gp4a73rVVv8yVBgyxsEbATZKLCa4ArE1c",
  "key36": "62L72jta4Su9mw94Mknr9C6hfmxB2jTofzaEDZEbjqQKxvz5Y1zgn1C5fiTaC7jt89j9ehiQyR6QVDxGD5UyZivd",
  "key37": "2Q264wkTue7GBm26AuTMP38LUWB7QZfqNPzESKyfmFG6HVpmrtG3AnUDLhEzXwCWnhHbC7RAGVn8fbXdhFR1FDqw",
  "key38": "2WAwvChKCcjYTpCU3dbHZW8RkcDqDkqsmE6GEU2Cw9ZQxcFeAQxzokP3WwFK3ZuFUWQyDpS13zheei4TRB421NEc",
  "key39": "5Nx6MRtwDvegay16brN3cN2bEc5DfbrZoq7aADMEbpfxjdfvA2VFu5tupBAwwZXJtmbCtAZtHDgR4LF61WxHYwSN",
  "key40": "4TMFpchi8ayvZkQuHBznWoH3bRqjcbTuXwszguZhskuZaBXpYqZeQyMHL8dmd7c1L19M34AMqLh72JL4Vbk4rgrP",
  "key41": "4iqpKjyZ5fYapjRS8xzph25duhYUgDgSsVhv7yyzSqBWuRxz1pm4HVoMyBenYZijJA7goPhhSFCG2ac3o96VcuqD",
  "key42": "H4HMCW69L2NbBCfpcQoYcAJvGBfjD4WV2XZj2BteygUnVciWm6Z3Ar7AjnonaS9U5BpNmYb9VS7tRb7Ae5XhbRt",
  "key43": "45eLGmQszDB24KB7yUiuz7Zb38uDqy9XYxBzZXGrEVuw7KjuBTM5kXebY5mXwLbn5zM8e65iynH7BMuo5d4vQHNZ",
  "key44": "ZEopn6N35yDwzmQgY2TyGFaUU5J9pdihN9XSRY7gqRvjvXA7fZhC2VG1FAsbgx6DcrEaqX269k9344pjoWbzZ2M",
  "key45": "5aqv4zVgCxMRgMwdMntdttHjRnPE9rv6pTaMEkaQ1VfjnUaVsXdEs3FFXmDRnhLKmMULFUPhFsCyfKDDgNaPepqB",
  "key46": "3R7kcxBYfN5xeCVBGtuNjnrkCaQ5HtH8vnb5uGNaZPFQMVeDbXexXg9QU84yZaqUwQ5aPaZiq5Qs9YRHfw1tTTJu",
  "key47": "4zTpEVhMwhxt3KrkZ52kXvBVn7BjbsyaYKw1NPndLsHW1vSkCQ3nDKRx22d4QWCSkWGJNEMh4L7B2KU36L8vRSRV",
  "key48": "67R1XZiHHTa2RFbCNdov9mmtvgmiiSVrQUAzn1rRaXVDqz86EMuWMbYvR7Xhb1Fj1RXLEbwv5Rcg8LFCxaY4Tait"
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
