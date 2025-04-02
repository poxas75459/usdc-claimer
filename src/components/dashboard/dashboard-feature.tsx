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
    "4n69Bj6o4jvvRKD2ZWX1RvrmESCgS7AMxzqhBXUP9jgNtQSBbYB2aDJxc4GM4nvCpyEYeWjLkbCKXvUppFDFNMsf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JYC57YBqmqJZqHR7zzrfFMHjdUvEMyottoq5bAh8cbEhFVtQuitt1KaqS2amxrmYE9GSZAJ8kSABNdz4t8sEdmC",
  "key1": "4UwhFbQ8dmuz53UJsnPZ27r4ANyMhmeySpVvqXXvhQT2NAmx6gRtSQ6AwJheY8uRtEGiRdiwWW6d5nGzS63APrJq",
  "key2": "2h91Fm3n1HJDfYkYznyNuERgKpfUybBNKNFQnfdU9KxQbKSU7vTNRTrUn5QA5y6LyJAPCMNv9bxZwYdRRMVYM4Eu",
  "key3": "5Fa2264qErzbge18jNf67dP7sh8apkkrWiKyXf7xFHQ9A5dtRw8xXmu2xrTwSk2MGSL2E8y1zFAatnM2FZvATUiR",
  "key4": "5iAUFgD3Jqm1wsX9F1GjT7oMWXvWUreETV9aMWT3KRVGECxBgKQYnmHjHcxboVmgEtoiL2hAQJq34nznKat1wbVt",
  "key5": "2NGynYRBCsByJvW3UrCUT7RoGvKKQ74AHUnopZGcKLoWCCbuQY4oEi1wUaxeHoiEWgsHUgGmbi9LDHVcP39uNYiv",
  "key6": "2RbDNMyuVmthx7bPqkytwnBa1USD7FKdUZHcEyMTeAsAUDFEhBQ2H5k1MNosKdDzcx1yv2y1qh4VNjVy8Nob48Yo",
  "key7": "3Pu2AouhFKk1HY42xJapjXkwrT3fJ92S7xNfcumAksU3AKuTAMfWaJFjeoWM5LokNTVTSpewtgsCVVAuyYv3a2Yw",
  "key8": "3S5P6YQTwosAG13DgxEDdoT3pMCVfAFnkNgLCFYMsUhmjsVkoKW861yNTihgUjA5d2j3qRy3yqbFxKnMbzFFt8X",
  "key9": "VC4dVA1iDA975phkP2Bnef7APg3QYDYHWdAUtN9hffnpkeN2gXNDrSS661Tn8xJ3TbRjgHpEpWT5fuQpW5zGS6f",
  "key10": "5CwUEjFQCQ5b7R6HavADmeLfBQrJtz67QGY2qCDFGRgdTyioFQomeeaVU3uRBTBTRupf1zeaM9bQxEN6nhrpp32f",
  "key11": "23cKg5zwMvfRG3jc3ADf1EgJ5GF1aw6pvukdH6M4giwyVz8J6FnCSgDXtZmAeZorf5W79CpWNxP5T5Rn3T26FKim",
  "key12": "3GghakjUhETeTwssN8R8CJMoNqvD4SqW2WH68z1n1P9QqxW7arowRrLUboxtMn58fhgmksa1mzhpxRicfwAWSZmB",
  "key13": "3NhkYMR3nyTZQZEX6Jpa8LrWYn8dMN8ax7HMhyvVVahrc3Vt63KPo8GLbWFhssirW9xxxgbGaHq4MNQoRS51cw8J",
  "key14": "33mGrqkySEXdVrPUwWXnf1djYMstt38KG65i1HV4UsAXr8WK9S84Lx9ZTeQ11yHsEBTMCcquMy4ZzTapLci2C5hq",
  "key15": "4KvvvcQpDWiwU2nEoyNvvwicDYsbcviM13FUKu7he7sFkU9qKd8hx5ZnKqcyky863SDjYtDmEarhfD4aMriZrrt1",
  "key16": "4JhVxYvvyxYt55Qj7xKNQQS2PE8ABduop7x8dQ1VfjsVY7RMnZaGt1HWJknGTqj1p94jW2tdjpKzLZSRXwrx2P38",
  "key17": "5ghQHfMk8fJUTmTDFGaXCpntK94zuRUbutTaMbm2BfjiEz8t7tyi5UtPxANJ6ZkNYAgNzQhFQdTUHyWHgxR4VVQa",
  "key18": "3RuZkKx38az4sgEZmrURtgmNKreCZhgtvULXGo4CUnVgxV6jzwzyCpuqBYHuNjvGMBNPtsg8srrs93wvp7Dz5Cys",
  "key19": "4nFzdSEM3H5nThCYPJup31mkUNAX6SDqHDJvdvYwdbGt4bFVxR69WYc7htmyQuXaAs9f7gEy8DVm3yNTskYczFnH",
  "key20": "56PxowJgj9kBqRwHz1PQ3sqm8o8qFKveatXAWZAwqCZ6LvUSrzfc4yd82W9mE5BrTEZREbcNF2MEFvfuBkjpfn7G",
  "key21": "3gviGyJ5yAiW2dqB8YbktgpBPG5PfkFXfz12U8s35B96BjsjfKSpr59uYrTrLJayH3CLJwWkUoToZPuGkdpjFQQm",
  "key22": "47x2HzXAYTZ9EhKTMVtgRfdkLJREcnNuvzKvyQ5j8wi5TnFow9grcgrtXSESJ5Xtxa5cgfqNGSd5THcQckLifwCb",
  "key23": "4bXFueUMs6XMRBvKGXQnUbHpGTA7df8QC4c7aAkAKnS4FJPLrZuPGC5QxSUboktyXCyEM55a2qPQyjeVsJDRySBp",
  "key24": "u5ZbuPo4qavF8NHtoBo77551imiZDWsHNep8vcHX2dyiERC9pF4sYKsksbFJtiDT5vND8eVL1ooPmWoBQNH6wtF",
  "key25": "ZqG9BUfwZx8wgFmYyYkam3Bx63eCitaapBnng3PyrrxVZCs7s3AwV9AEWCoZizofNzYWT9ZvRcyw7byXM5Pn9M1",
  "key26": "5bKxVwaXR9ZF998yE4s6Z7Bz1vyNUmCJ1mCAz433WfL9QJiZQpwLs41yAVHTmxccqudyF7PgueGdZ6VxrsSTrEQg",
  "key27": "4rpP1MkzmKffpVd6GEL6zFsABYUmX6GePcfWYhmCeXkmmhPZJRCg9fHLRWMn8A5KoWB55cxS9NHvfbjZ9VRgLEpf",
  "key28": "4uo7WrNpbbBEt51uKXasTTFxJhVeboiFv9Qu1mCPp5JbvnwR2umeWi1oNjEY779t4BPuFeCWiUk4K7RGzLboqQow",
  "key29": "2CG1dQgirT3fVSA68veAw6WP8KsmCXLiVL6Ui7UswvHee8xha8r2JFUXpvx93csLHn7uYwAfYdb4uYuw5Nb7Tyms",
  "key30": "2kfGc1dtfnvF9AooWG6HfwJqBG2wSDMVUqUjcs5qhuvipxwvo9HqWx2TczqAzFUAGvijtTmsH4G1af1m6ehgDFSF",
  "key31": "uMWPaeh9xVydojgFDWgNGd8qqmmf7Rvo1j9FSGqRs5ttfKx9LfDJq1QqHds6spDYwoHfH6ySHNVhHfLvjJeVrRY",
  "key32": "XLzP5uKzE2Yrp7y4KqHgsf77nBAqiDcsNJBbVhGMAxXZwFFVmHeNbPXYbBkysEW5aZEeLgFf2esi46oBa8UGHE3",
  "key33": "3913UihLiTo3vY8n55zawyis4QaQoLTB1p7RvouQjXhuVakr7aLN24VohPhE8JyzAHhChhyxxizmf5jyCgJar3Zt",
  "key34": "554jRpxXZrv7WUkoZbniLhwjUq35EYJeiSiLhBFYkCqvS9RqndEMEFKjXZakbUBJqPDEoTEVxVqbLZSnmzNhJfYe",
  "key35": "2cMQQajuSchQjkp4cCo1n85rQDf3zUaKqvpWiE5BKBYKMKXhqhduGmzMm2iBPHutMeWaBbAVp4iq3K9CCtBpgszk",
  "key36": "5tDXfDY9To8ng8ZrRmWQpzsYsWkgYFhRKWGcdYo3zu663eRcazSbfBufr3A7StgLG8wCtepF71pRcj6fNaNNmUvC",
  "key37": "4J3qZXrAVC7dhxRMeog8wkb4M1JG776GgigT4d6NTnkXGKCBCigCSgy27ki2SxenEc76VyNthqxHFizwu4M2MTyU"
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
