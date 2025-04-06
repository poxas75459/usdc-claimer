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
    "3ahhFLHPRw3ADFYE3iYstThzLge2JmcVQuvhKpDtNs8e2q3TQQ9syWBjahydWXsPPP22YjEVLKhWgBcpp8SrFBLD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qj39mPdDvcigkSSKZJTwFdjzABPzYZ3BmNSkMp3tAFvFah1WCzvFDyoAJLAZPWbFw7KruSfyEkLbaN9VsRKCNFm",
  "key1": "3kCw629LQtm6vNR25rrLmDf1b5v7x4de5jteX5EmMGMgD8fA63co1w7K5aqAkXJ6dPLrr9J7wf4iJvQAEnjVeDHF",
  "key2": "541ka6C41pKf5qboEmV1cnEa5mize8dGXEPTp6JWcDe6HLDX35sB6mMJ6z3urJoUS3nS9vTnNqJfWfpYwGE8twuB",
  "key3": "2To29EtCKUqUesJ5UpLb4WC7rXmGrFnfBV2dR1SFdz5JLJvqqkkXvXdHTS7ZU4MTccN5C4tZVPt9kCwL3cAWzYjT",
  "key4": "4ptqJyWRUhZyeY5JeuSnAEL3DTs5tiHKgN8kjY9aeUWQxsNw2Atq4Bq2DVAY7XE3d7XCJ7kKUUJJiDMqyPk8YV1k",
  "key5": "3phVz6wq7cYtDtqpXaWnnWRk2i6dkzXkdfmqyKZeV5pBMwvxnGLrEYh6igVrFzjZhNtgRTwcWqBmyKSKeYJ4zu2z",
  "key6": "oJdvfFwNNviQkDFuc86r4GKB43ZtmCLF2vTQpKdy5EmU6fpjznvZMvAxdWNaewiSTuKQWxFUjE1wZu5MP2j1mgb",
  "key7": "2KWXwxywD9wtLQM9uAw2LWBDeUCpFYznKEK6qx3SZrec7rq8UBMyLwbG4DyL9RPYa8uxtx724rJBA5vy9VUYaH7F",
  "key8": "3TsXwETNq2QPfVA174tjxB1APQqS1Wk8xke9kGTqBqXUQohokvcQuQ8mSH1kNgizUnhxKUK8MVMbrq2n5tVqgQYU",
  "key9": "nwGAup243TWVEz6Ee9ydrGAUp9JsnGpTB3LKWSSv4NmF5rFBMWnknJNu7qWpbfvzy9SkxoT7ZBDED2U8qrjm7zz",
  "key10": "5WigiJ7t6a4BHepqXLXVk6qimJTm6YbD9EGtN8NN2ambbonKG9XoH26LnFM859FxzHcEbfuEee9R7yGW5L4BhGPP",
  "key11": "5foSG7UzinaZ4zkpoBokojVXWUSFo11JzksBcgctz4JZeY7oUCbbwDzBa7hL8X99hUCX6jJ1bfrUBKbQXZtiw1DH",
  "key12": "2pSkqnwZxYQpMZdMvi9KRyzZWgoJcYcJnJBgN3KSsWy6kNPR9pDjnYyURAgfrnAHgF2qJangP5NHLEvHo8mV6HfW",
  "key13": "cVia6vVtbvRjMnrWpDwF8tgcWPdRKeq4QJN5gzMvonn4WacnAD5mazEVCf7HCoWNotKGkisegTsTd67Aw3JXFzp",
  "key14": "HWeK3WUSkWhS4SqY7uSvz5BbSgmRdyAEm9BqUEdaBUpLthyjRa89mgY65qVahRVWD2rg5n6VvmJeKpYhKZAUWzn",
  "key15": "5aSt7MmB9Rcejg2uAZRLPbKokzy8vxmCccKn9KcjbTFtEPEdV4E5ntTgmL1TUh6kL2DPwqtSyQkBE8sZxTgUzFRJ",
  "key16": "VDc4E3ePhjYUzWQeXZNA57ffdrii9bLruu3RFv2uUm9n4GNm54oDMxthL4qPo8M2aeNkts6nUQzCUeENVtVMr2E",
  "key17": "5USHpnLvuaESu4U3rP3cwAqzzkaA2NKeZTQNM1XJR5yZXXaQ8iJzbZDAUiBNZ5U7qH81WAbMsWcJqqtTTCHbhypm",
  "key18": "2EiRA6idHDtGgdW6gkBbH81T8EyFhhFf54L47M6k5z66jPLe8v4zBpdV1hASUjndaSts4D5SK5nFF4iRk8d8cudi",
  "key19": "Bi1Hj3fwTqU2jiom52QmkfzE7VCw2Ur8BeRKvERS9fvoEMtRBquEWqvYSSKyLHoniQAEwTMjE9w1rKYUfuXbQR7",
  "key20": "3A3onK7qbqgxPspd2WJNXhJrCfyL6MsSrToVPbcRcQXsJtZ5oMFm3yertLhsybcJpR7jvNKhjmGeWeT4w372WdM1",
  "key21": "4e1SzC461eVE5ykBcS4Q1Sch8iDjfaSMbHjRXD4ZSPvufc3fmciGrFPfeUP8VwWsgLQcjRjq7A3R6WkqqSJoyfzY",
  "key22": "3u5eqyajtpyP1weFPtZUSvAzLDQWbR2fTYdnZHVHUc3d4jf4Pv9qaTuSYjVqmUHEXGEYeNn6LGwhbCcWRduXyi1e",
  "key23": "2gDZaseDTuoAKvkXviMyAJEbFtCjmkKWs3U3LBEfzrTnpLUak55swM8s8iXYkDJvWYoyL2HSU2MfJb8fBgwtrgXk",
  "key24": "2YDxwyK57UdM7S8CAWBBjurL75as1Y9QmbdwLDGMv4H4FJAhxUUWezVdewCNggmwXKpMboKrcXH3ZbZZwKM6ZhVC",
  "key25": "5cdvx8NjFP8JwZpjch7MEkr7Kk1PbqwBaQEYipNasHTt8e9Qk5EJUjSBgCzHKs8sRGQL4Dw6Gk9bLkKgQi5wxu6L",
  "key26": "4VWFSTCxAVCVqnkBC7KgSLtw1wRBXD3bV33EZVPeDY5MLWfrpRDGuwJ3d29oUbe693mTm3cBULHWhVgdtrTwfhnM",
  "key27": "3YAnMpXpi3r1uzSFgWzpY2rv9uwnTnG4jUAWwDH1sLsDknbeM9y4k8tdxKoPA9azKYSPZPzH8tXBaAa34mN54DFW",
  "key28": "2PphtKuVMsB3EpZmJhYQXnbk8ByvSkyB7pjfYh6sZk2AtxBRUiSRFvrDUHgVuaGYnBMEuDaQZ6jte9fRNzcsu4nV",
  "key29": "4xxgGL7bwjyuJXzhWrRamUqj4UfvAEQ7yDQi1demEqtCWjrkCtjAYRV4XpBVsezfmvxq1sqELZbfZcL7eRAzVYEz",
  "key30": "jrW9nGepKXDtchn4uApWs8Vw9Y38PZ3ZXaxHtvc8k1ncWVSjWvgS2tHtQ5Nef1zqKH1RstbbaefmPQzXohZNuoE",
  "key31": "iLP575HE91iXpWRsYM8Hgr5UKLXXK1tHp6uWqJPT9mhFh8PmjebLwufKcY6Bd1XyiNTBGpu8sTmnCuhjNY9gdBx",
  "key32": "5WHddmGu2cwSW5w7SbW5ACrnGakt1pjVqTjFLEdoD3xNKrBY8uPJH7vaqnqeLz41tuKqo8izCxr4g6EWnvXeYnRE",
  "key33": "4VYTksmsDqrauxhAtkz1r7VSVGhktxDet22mhPGHLJ9nojNeUtD9Poi7U5AfNWni4WE9EpJdTPpfBY3e7CLn47bY",
  "key34": "4kQKsuW32kHoMHWSoCm6fuS57D64NHPBFEoy97eZtbj3sYS98VfwMie3nszphs6gN7hKmyCguc6jDk2LJ4x5YRQs",
  "key35": "3rPsecf9aUTZreFSEV99TLHXGheLtSTyqZ4GUNJv87jLjBhFqCBx9wHPXFRk2Mhs51T7TJHEkTPao4v5kzVP31Hn",
  "key36": "4M9jBuYbNhg5AV7BToBx9JjZq1odTuYDR55hsohk87C4vcX2gfCxtfwqLTw6jinHawRERDVXm8RaqhPjtoLMp2PG",
  "key37": "57d6ivdJudnQ3KWP7c1PrHnEc73MbvHTmfk9p7jCoCdo2n6WyKV97oFxmKbotNdMV8TiT2mJ9iyvibVJ3YaKTtVJ",
  "key38": "5tZnVWk529RRwZKDNpxrvmayGxee4kNU54YepaQgVWsbayXhcD9aeCqnbtGxY7ittcd9WAKnJeq2Tajk9gqt39pZ"
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
