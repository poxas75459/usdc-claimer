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
    "5E2Poirj6VE1jgtQQm4Rz9qLwwBZf79kihF9E1bFS14LVQ6uVYLWBovVvbSyxFdGHsqvnegzVgGF2vM5XYdSGYAg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DnTAvume25NmMUQiY32vjVgWhnKgidxQNgtbcwXjJ73HSbboavdhJFFieMP3w1jPiX8A5jkJueZu37tWf2Wvrda",
  "key1": "2n23dkiavTgPiaTAawHkgjPSBkKRpbNRRPv6hxpxGZAUmptJ3puByGqfiNdoX5Wr3gNLKVHYL7d5xD8ek1Nseh3w",
  "key2": "3ifNCsQKaPNWd6HxadzpdqSjSxrYmK4yRSLzAywBUs94LYpdb8wwn3xb7uqBYjgy2CLT4b9cxmH1Wa9EqRkndAuL",
  "key3": "4zFvqiHCg2ncRHc8pRE7BEA46pJbGMRknXBbre9jTWwDCiCE5wDQcBLEmYknGnqpEwPf1T1vY4jcvaC6VZYqWNYg",
  "key4": "5ACv2yLvkthSY2jwqAv8GZU3xwYTNBRnc4wG5wfX4A8jb6FhnqvJo9ZiSrZgKHuFThBaJSHfzDMTaWCyahgKbNfR",
  "key5": "5NYFmEDEbH2mvSXQkxLWMz4DaWoMsbNLfDjVxTtY4z7vqDcLeGkEH5MzST39jA1f2Vvq7B7diFZMUKtQcDyPDjxz",
  "key6": "5Y4hCNZ9iBsKEsZpPqVaChDHajXwDP2RPdrZQoyiyXGYLGumPnU3Qpa4WT8WKPcyv7xXcHbbCekywoEfKbyXc7M3",
  "key7": "4UCu1C5fQDyeeVtXKdwVJzR7BjWHnMFERQ45ijNqyx3qshiU6fs62VgYz6MxDcjWfovDdD39BS5nFkhw3fAzLSGs",
  "key8": "5CZ1TKVncpNUQ4PdqEaSb5QAq4oy7PNCFVDhqPVHTaUZJjkP6BbBgPBC9TMbhWRS14MCwVcMqQB91aPdPyhb1nXQ",
  "key9": "5DN8DBr8QN5EdND7BXcP1rsBUDiXWqRgHz1BKmG21L3hP1n7cQSva4NEn27KKFKfiF9v1PRbEz6ao7oEdda66frU",
  "key10": "5UcDpkGJGdxMgqUtjzw9HLH6HRv2VCFYmcg1fTBEnmk5E1UrVeXMCpbXuQvgftUvRyadPMtEcDtf7QdbahVNj5kW",
  "key11": "64uVMT2NRAEaAfwTDipqd8b3ZAjazHaBaWY1rAm5dKGtsmkbYXb2NP4E4y4zYRWRWmRRZU4hVXdxMkLkMDYFdcXR",
  "key12": "5K55o9TD9R2Yestg5maGFjx9LPr5ajmAX21gFjndyCz4DezsKyf8qKL3goBxFWDD8TbUkbUh8zfpikcFEvmQHd34",
  "key13": "tTLZdnAcnPPuCzFHveFn6gRMYZr7cKgbeJqRBBC4XDHFKbj5SgVorqE9JfPR5mikAAHYLpJukCr9m9is5Crwuvo",
  "key14": "3Juw5UJVf2WYgpdDQDuFuzsy373Rn9wMF3sRiNodYrueQ2QJPAVje7DMuRu7Yy1sL2i8BD5hs5S9DM13b5aPuTCr",
  "key15": "3KbfeN18WB33mPiHcWy2ehWGP73dUKbJGQPiAAJRvBpKUDWZJYmNxSWsLFZgTRCwbzP7muzqFHe51v8vDRq4EWY4",
  "key16": "u6UP98rAB5H1bqZnzTwYsqbKDdVqhMQLey6FN5x3xLheJGcnXFWk8rHi7nML9ibtY4y2zzptsDcbvn5z2jm7RbK",
  "key17": "36UReD6fEb6QoLFyc9Fmw6eDZAGA8bKuTfF8i7r214BKK4bh18jjEenHQZviqPtQvffMPA6v4yW6bSnzAXaWLPJL",
  "key18": "5Ennf9Xmxg2wsqBNPvQXyHFivkBhEXnTuKcuekGL2B2Gigwe1Mvc7xgCak8swwcevri1NWzSTaag3TLPiEDM9mdx",
  "key19": "2o5P3nvvGojtCmvVGx3kwUP1ixgrx47VvuucNvHL5y4fRyPTVcLbk7wDu5wkEMhRafL5Sf74scHeFnKSidEPZS2k",
  "key20": "4iwnSw3SEWqCuSaucVTcciGwDGFsBS6jsvf51n8u2DioKa6vVPDLiSiPtAf8cwz52qXQGTaY3ZVYvd2KqRfk6N1F",
  "key21": "22T7qwTanNToqkK3qJPxMnQ8dtgHzv2ueVVZ42ma4Yj6sBaEm497rhBnUtrenmuuN9WbCW9mBP8yGSrA3jnfeYbi",
  "key22": "5wwJ3PWGRfJSWLAs4yCfRoaJzrSeRUToxCsJdmSS1qaL1iaDpb8pDBxLffPkazMHNiciw1KhiG3C1AJxdxqqMnvU",
  "key23": "2EmYVdwVRXHR68X7gKUqGAh1SbgWnWbGkXUttM3e7HzYkiNc6YKpf78h2r34zPbhDoMCRuF7C1AiifddCCibeA1k",
  "key24": "5uqSefdghCG5q3RzfPQ86o8BKHKH183H4wgBpyPcgUQ1vR475i1WnDzNBYKaVUFKByj1oh3Er45Eac6Ma2M3gDUh",
  "key25": "5wQyauKiF4FAA4fxEAdqTLf4LgAs3GGJ6u4EcBkWiaALSxE2ei8U5SrSbmG24G6v4mmNq22jfqp4G2WmqmCSgxN",
  "key26": "4fsZi1iiyQxd4hAJvQqdGrR2bZZqyZeWvdybj99EFL7S7WEjxWJSiS3tBa2BoaHGD7DsYP9aVDz1JYGoR5nKpMdB",
  "key27": "4VsFxYXxqTcuv1Eks4oJxPwWBSdp2vrtP6qLByXbK3o7ZCryfbewPXEKskPTNPum3dytsP6dk7DNL3uzVHQyuEA2",
  "key28": "5ndUc3NNTYqsLuVUuUHenQEvPgHR6NamioS5QNwZtErJSYrGHCYbPVDHSfm11Sjj2eik44ffgjTvuYUzE6akRnkk",
  "key29": "oMNXhjx5DP5XujYVZ7BEfxdrMZSmSh7QTcX19rMPtepDQCkmnEtW2vXym2FRY5UWxt3HdHNUFQ6WcW3TipZdjbL",
  "key30": "5czXp15a2nxFTQMaSgyTSrdxuG6Ra6tqnEtiVoQXrAUBcpwraEwS7CfebZNH1vyBBgKraokacTez4woJgL3QdB7N",
  "key31": "36WArt8hUEHEB181paLH79wQr87qovh9eLWfXBTzkXpmeqJBpKxGxJR1GqsCpYsAnNqeAnR6Uw5C17AVC3UfkLWN",
  "key32": "3VDUZwmjmnjTgmjRJdVnvfwdGJMxcpnXWsXeyfTZ9V8kTkhXauaHEWcsNAYjPqc47XXX9PtYrPFWo29cfGoRkCeD",
  "key33": "3x1ATj3TGK1G1ULeipUtrc3EpAzjmJD4WU98E9caC8CTjo4pQAtygbApWZWjCJ3Nin8xwj9TvxptbbCZNQCUUcgs",
  "key34": "3yF6TboehzqJU77ra4ZwrBprGjurD2p8uKswzBDw8w5px3oYiFZUuRJTvTPtVZGqMYNxMwYPTwtR6Grn3XvQyved",
  "key35": "GPcr74fnZWMuC2xyppKcyfqpm5m4XSTJJD5oUDfBDTAJr3SioYicXDEM2qdgbZLnCnFqifCB474K1eDUtqcjjXz",
  "key36": "XYL6TPGoWPyVr7yrRXCEsxmnYfnpJ4J5tZBiMiJ3KcGVuzoNPrVobJuXNstdJPz585ANdSMTpg4itghD4u9J4HJ",
  "key37": "NP49YaBNDPXRVmUF1exWR55UPjz3HJ2r1rR5uGuyEh2WQ3DRQ2hkwpJLmvKuXUieXQe9insyPyqqP8fsB5m8gK2",
  "key38": "4cM4Qn8Cu5VkMYwadkYTe7VCUSTJA2Ag5th494CvWsKThySE4hwjNY78EqpoxpA4Cefn9dLgCUAk3j3DpmhYq9Jj",
  "key39": "5MpT77WtMgHGq1m2sR5nMNTFsC8h2zfdqoGn3xaPuZMGRoYZ7NUFbxGuTtesn6oHkeNevRu2SGSvGRR1qJyvUB7P",
  "key40": "3Ho6pnHdCf8Mr7EdPyVG4apzUZUJG9g8ojkCWxgfiVSgczs2LgM9Nbd1GUyhKQCH5ksyB68g9GwATMMyi9H2wWQn",
  "key41": "5ooRwgBCEqWDcLiqunNoxt22fbFu11x1EKLMgNiZSpctEhFr9F9Bn5Kyd8X4XDu9FfTdh1XBC63a2BZ7e1VuYim2",
  "key42": "4W6EWHw3zfVVNJZKp4JRiTVUpvQsBeinnDaSqronkqwh4aEmoeyFzcDajiGUKvCQwAZAMESgqXmTnbdD54dMDJwy",
  "key43": "2HR34dp9MQv6vYDLYZZAtFDVzdLgS82eCgUjkMEZYqUqBXB7AcyXmRZTf534VHerBsHvC6k8KaKAzzsiR2zxya5H",
  "key44": "5mnVj15Ua2Mw7VVr9L4pnDeMRbmDy222GpPw8q6gy34Cuey6cpKLmKsUVm5gQFWfqYFtw27NbhJDLDM8fzdGAwPj",
  "key45": "5voT9MwkhkSmckCBjnzatDBi19KBWLjMDUy4V2GpP3vEEuWgdDkkcZAFrd9gCVvzXJE8vM5tfUgAvYErW7jAxJB1",
  "key46": "3KeK2PzRZJj58jfRXNyJ3sq1ma2R7Cm2ceakapzDzi49UYVFnCbEHpD8L4dt1acVAM1Lzt5j5cFaNXaAGDq5BWz4",
  "key47": "4NbzHwduLBoTHXhUaVGjg5N744yJHerYFNUF1P3B3LhDWnxwJP2ieHKyy6DhSy1MK6PQAYVUyzXzEFygR31rQeqr"
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
