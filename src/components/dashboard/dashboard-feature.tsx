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
    "2guFWbapPf5ReL9wr24zWWTmsjoLTXVUQFKTuUK8AusJuo6YrWDfFXDPQWCRTQgC1tfpEEMsKpj89P9VXqWfJsdT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QQwuiiMjoZ46JKou1dVRRjJuqMom941bSkH77B1tz7tS2U8NSgJqSfGWWg8GMRKweAgsWurGLTPZF6fT9HAkBNx",
  "key1": "gNteQAe3LBWYossX5tTnT5Hg5WEKa4wpZkKJCVgDw8TrQVF4Kma1NMMBqt4jRKfRM8SgyXzDpxRnvfXqkha1xuK",
  "key2": "3N5zgLEAULTBdAYbCQ2VoznqnSdgp4DTfvXm7z7Kr85vUui2xELAm1rNr19BSfcrqi82b2mp78H3ZMw7ZGH8ZHm1",
  "key3": "r29BvzZjRAC6RpWcTRVFro1tBEiPfjvH8hnaHPtdvL7Enib6emvKB43xynDkETLjd8oznLUE97TMCdzPST7yXGF",
  "key4": "2adbVy2xV1ZNoyuiKBKRN2UyrmzcZ47yd85AWHcY1zwHkFAz1vQej4n32Ac9JGDiBRz2BomvkWaEovpt1nJ5zBnV",
  "key5": "2HSYtHvsosFRPyF48tT9hHCTWsJo1fSMMbVko3jHLAXvNybVdr6AUWAAC9ykCxoL6SWSJquUxBRyUVCDw2aRM7Tb",
  "key6": "NYsy6YDiPwsmtYuRnpYsJpFJHWY2sh15P8Tpr88jSS7AxHev33JVyLY2ffGdbzbY49Vquie54EHP7ftuBr21tFF",
  "key7": "37YxJi9zYRV38XCyAe7AXUktBcJ9oNsyPi53QuhqrWVuDTfc62Eq6hgrTNHrKtrv6vbRKgktQqP9kgaf7qDdyp77",
  "key8": "4o7uzB1AKqRWpD2rynGS2xPzKLPpajffFMRNng4h8MFkd8Lseh65Dtbfvuh3VV484NnWYSf2sgf3ez2iWFyDxobC",
  "key9": "33yb4BN2TPHfCh68qNSe5U4gX3Pr92cqAsco87tLGCFPQeK9KE5dqxGQQMHF5j9MDw8n2X9RxKE271QV3PhBZWBB",
  "key10": "5fTTidoJ6y3tJapHqqZ3ByLMEMsid7HV8HJumS18uLu4oazR9HW4tzzwsxRZmafmF2b2rpxq9BqczwMPCjoYFURR",
  "key11": "5gh41ZXry9qQnD4VHibVLEqszz2GD6KHuwidwvokFyWtU7d1uUqhLHab5P3rPgrk6AQfLvZwFkoEKUi4Zqu9HMEk",
  "key12": "W1BxqPmkMbm8Ky49sPbPRnikhZoTp6aFPpBwMVpZWXcQPXwGuiY4C3R7eihnYyNTNBcfQaVfWC62fhbSX3KwkSA",
  "key13": "2yqazJ37pCBeoo4vAYbCmEXKqcepPShJPSMw2SmXuw9HoVeALas5qa1YYpisxaXcy13zEWYYo6Kvmn9Vk9LffB41",
  "key14": "5pHpCc1NdxySCjAk4mbcbcf8t3J1tTo7CEGqtppV4mLQQKdsnVnNtQvbWKJhaoGDqhFDdyRyniRrLVsQxn1yRnXR",
  "key15": "YN7RYPbtP9T25gXCw5ucwy4hNZTh5XUSoaWb9j6ARRZSdHPgw92R2f6fkZiHs4wpBoJKAYJzLr8EMTUvqykPjFM",
  "key16": "4kTpSotM4VHaHVtLTBUos6DqTZ4Yzek78MyaSMkdDWb8tRu9QMdPxeM1hS2aHxkNcFpgzbPxnpXou9RPCNzGgXdL",
  "key17": "2XmmivU8GtzCQQhbLcyb8CjvEgZv3tgm5re891FKeqZhajQuXiGp8Pr63CiFrhQarF63ifB8Lv65XcQmg6umQyEF",
  "key18": "26dWFDvPCKnxd1beDDr94ZKVAw7EMurDzw65yVkF1zsm37bfByZYdp7NGCHwrYV3v9UaJ3N7py4y2v3Z5WYBTDoL",
  "key19": "4QTi69G1aj77FLvjFRnZLS3Zz3XcckQqW4cuVqVVejusBYeYDuMUij18kCbu6KkLpSFd81vtmR8oQhRycX2Qyrfv",
  "key20": "34B9XGQoNViu2pZYseaJg3Awz5k5A85P5uWTKnBDj6qfSLLiWsdesxkF27sTXkxrtNcsjWZv5NySB7xmXj2rXSfT",
  "key21": "4cCvLA5VxyYHS2gVCFfCgYf13qWBfVoiJCagk4CReu2FKyceTAgLS57cxZseLDuYmbtZVPY1pHaN8Fnaj7eTTzCT",
  "key22": "2UYmw1xDKVZEYiTmNR5pM3roosgPyk9qEKLcXwCt7uKrLR8JxK9zBh1433EFQ2M3oods8sCPRknV4RjJ9shpfMKs",
  "key23": "4piCwvrRNJQ1qChVuXSY6qPa93WpemnetM31C8EafpfR3x7ZbvPMXtL9fSJyodJrihWEDHcZjuM64bR1hKwoVg36",
  "key24": "4MHx37gLbZy23jQpmEEBTd2546X5t4estPBiBnZrbJdQcFfugRKVgwsNPyq73prP3jruFazBngJ6xKiZt8NDYcjQ",
  "key25": "3GaGQg8yKVhSfxFNwrQ1GLprmJ9gE4S5FapN2ZfMMVwcLksLKidiq73cPEAFxLHzKSBcfy5M4gGnUaAKRNSK3hM2",
  "key26": "4TjSDsqYFX8vDuPkHG18RdiA3v88YkNfKWsvd28tn5oHvAMLv8PcSwcQtHWpat7JeaU3LfdNv9UeUHams99bxjDZ",
  "key27": "5LnuxLu7oqoS7917KEVpALi26eCzX3VAf8oGC96H6n6oztBkdCQVzMh6EQW1XFXJMvQvtsrFUUxrjEZqJDTo9U47",
  "key28": "3iKLQBZXYFCUNe5d62kZQCtbDwKFEbvpVjhU6J3KWv5gcW5i8HwNiLjoeZV6s16RYxF495g1NKgW2TeD9jh5m1LD",
  "key29": "2MgauKN8uJPTwSUYSWdUxkupHFkyzd9cMhFxJ8WXv254qQ8stNFx9AuRWD8reDc3CQzEwWBboTJHQrsdkZ4Y6TkM",
  "key30": "HPkwjN2zzmiQF3ntvgVR1RDkmWh1MeSKwZDck3yeMm8dnkrhitNnAabY4MUpPuSp2G66Dq5SaRUDmfSefG4dC7g",
  "key31": "DyaWPQwDwfUunTdFecQQ4syENGnaT4K4Ao2iCKtoZhPLGj8RY74ckEdx9wjAgexYAn7iY3BXcZkPyJxT9pj8etg",
  "key32": "3LM1F9boJuBr8JNaA2UnbWF6M66YWMcEkTjKu5PEf8ABxaATt6eJiCyRCxpr4zuvWke3MxZcK3ZN5jhkLQZdqqRX",
  "key33": "2C7Djq2W2XkYf32ffguCsyRkHmDL25gBNfwyjXGrQbfYjnynAz8M9LLHBwE9XdxT6FB2Z4iV2hqJ3E9RwFvu14u",
  "key34": "4P3MwABSdjNRdH8pyRw197ZprNNGqzHpAomRJpScNQmxZJwXzYcTKbJPQeVJM7EQueySaxSEwKfRtuJ9PiQg8Wd1",
  "key35": "2iac2UVG99Y7VA1rE8DcnZ9EBPfwAvZq611XsvmKSeKP6TnV9vyDnogiZQ3PaPmVirVT54nUbe194wRraMsXe5XD",
  "key36": "5wQHS2GeCyz17h15yrUBS4fh7Z1iPjXhZWHzkbmvFMLHXsLGiHjXYXr1HWLnKpfHM21dKofQCMYKjfpGYKDbXaf3",
  "key37": "48PuPkg9DbmNkZHeLXrKmkt7LCAJZXmWbUKxxRPUr4FfaSn6xTzpUthZomTK86M58gPn18FbDBchUntXrGrLjK8Q",
  "key38": "2BEAAPTxut19xDczjQieVgeECk82EBBfXXevBcA5JynAKXitKXCJxHWJH91p65UHsaXvyYN2WEVmp51MjmBXXg7X",
  "key39": "3QxZ8q7ke7CzkEvfvsfzrT78L9Ua9iCN8qEpJwsiktYtxThuEsAcjkV1HiV5wtJUA8nhai38tn3dyi1LsqGmM6QK",
  "key40": "zGf2i9V4XQvfgwV72jWf6anW1srPvFMFBUnGqMSz6C2saAxXJCZoSfgYfE5WtSeGtBL71q4UUo96tJKbfwBMF67",
  "key41": "4JNbKg1KcZdM8byCw41wHxgvj1DGpmUMEop9ECxLL6PgVtSxmFGQAozrWGyHHHBhYqRnryV74ZUPLUusEEypc5Ey",
  "key42": "ge91pTahbikbqZCsPg1NGJrUW5hBunS4nWkLeWQHrNvgsxaZ7KZz6zZnx4RTfeTwPkjZQNUTmqVvpyqCzds3q68",
  "key43": "wJg1Zz7ereqHStRLZ9cNedjA2ehzASUMyvG9DFPcjnV7fjG8QaKDTW2KE5T6U5wspBoaKYNSytfpZXn43LVzEUV"
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
