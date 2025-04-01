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
    "3W2esXfcFAxdXLbrbZ8R1J8a6v3ReDqfNDTUEocpa1wXaqsSJ9bK4C1gkHnEepKFcY7SXTHgBYUkFpoqukURBEaz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "463SgDsHAFTnsZ98RET5CdFQWt3fuijtjB4j15iJEQu46Y2a2EMVsAXMm1zrmFNJXpMvfkqfSKDfpHzvkEYD313S",
  "key1": "2eJUjpb9a7ZXZoLzvP76ySyGUfQg7CJQbzBKmJkb5YLJoCpZV6kb1JaA2ksAUr1UJx7XXapbzPwQ8Yd8U7knqjui",
  "key2": "2vW7FhHwr1Fa54Fcnei18hkqnRU48XMEpjjvfxuEqgA8FNDwTwHBGoi5FPEGQ7SR7Xk1boNm7u2sWy32i4BgZbAR",
  "key3": "36w9gGV2HrrAorjD2dLQ3g4n9fputxpZqGSRCRR196sfs5rARFPmW9hpBtri5f5WqysLS9ae4h66fLoTH4e2wNxN",
  "key4": "2DvpN91Yf5PW2KY8AaBdYJeRNrq6WJZT6urijqM9ZvP2nWRqcZhbKM8MHAS8qvdNqacYyTpK5jZMtDnd9AjGG2Yt",
  "key5": "3kvZmFQDu57Pw6dCAPoR29a86JUUc2hdFMw1gTRJ17fCrnofX5fTqQurEg8Ji1rrVY2ysc8Sxhku8j2pgwJWeB28",
  "key6": "4Lf1sutKmhTbL1871Z4pyirCkQwa7Ph9MUF65tp9Wj5Xs2WPCYa5BP1tBr55xcxQqtXhv22SdqdWkJyymGsGiKtV",
  "key7": "2qRbKdxfan1BA1TtaAnApqvJw9F98KbvY2X1ToSPgCD3pjdqXsEGJ4GoPQCaDRSZXWMfJ5yHZHTDYXsvQw6ru6Dh",
  "key8": "3Ww5j4gzoyytvgAYK53ugyzAeiRPbmX8DKv3bZkXcXH7tX1RD821uMmqTvWAcMzGLAZoBitCZWcjbq3EmiJr9FS8",
  "key9": "4eHb1oW6sM8jyBhy1qt7xTWrZAhWkQb9K5YwBYxBiVGEQahXL8YByRuoRkPh4KoGbEbBUpfxnTJteDUki259v6XY",
  "key10": "1hpnFrcBjChx5LhAKBPKia2RmPvPvBA1857P95WidphFp2zazAAbEpzGyTcNTrv1hwBoAdxcoYX6Hy5ooHVmdFZ",
  "key11": "4Xwg1XG5Dihj4R1JHyncdz3grASqguwAvPGDMMxjwiTcd2QfB5GeXQ2PP9ebkjtvzGMR1wpkHw7xeytJWgrZ6JR",
  "key12": "5qtjoGUpbfGd5Uc8TxpnxrXJKW2gJvWFUpvE1dqFzcgX6AR8L2yd1tC6VSm5vtZ1vnxsuMGppT5jPbZo4DiGg7i8",
  "key13": "48LB8NUkfBPCNJbhdtzLg6ut8LD8nBiQ7vBP3gppFmJYBE72RFGtNAosBdWuYV9bddwRJhxNemA7pcE5bcyppKTh",
  "key14": "5XZFWtUw6EJ8NCCEiDPbiMc3i9KLfFL2iih2LYBx7Zp34cQZJqAQCawXEYrb8X96csJGETnGjLHi3RU59uXXkv1",
  "key15": "2e7pSEV8E5m1h5pMxJmvxQdVnN5ghaEySSqwtaFQWJvFujkvLjcfpvthQ9s5u247GHwcgt2yvwDWv5agmgVCALGU",
  "key16": "HLNa5Zqk2hF6vvq5vWj5hoicEnSmzNsxsRcwGGBYbVYt8thd4KzL2nwj4bk8z17ZQ5k4d7b1TiScfdkP4kMt5i1",
  "key17": "5UY1qUGg6MpZmrAaC3MCvQLPD6K6GnyUYp2ZAZrGGg8fvx3xeU2nEJFppn61zYdRDMhYzBAzjsJDK8huUxqeamDU",
  "key18": "2C8DnnQQo9faifQGvWdeXxiLArowk6AQcgT8UdBJBrf3QWQaekGxVeHMa7Lqyb1mxN5TUQCozASwodToBa83zBd4",
  "key19": "sXq9q3Rnk1UbkXmeiqD6sUzAeXzjBPfZL7DqAgvXMQYLHVruxP3JZ3WHGVcG84nQ4LkFaiApHproCN56tDSgtHs",
  "key20": "5QarQLwWsvt1Sz1JLbHL5nSoqbZUjv1Zsma6rwX77P9p6Ge3P1f3wgPYwQBMCPeR2CAHg4TAxkhFsu8umVZNv24h",
  "key21": "5seeFg9Z9yUqHh58yoSvbCbaCpPXwZWQv27Kq1L4oeokM9aCUCuY1TyNEXVWJQNiLAiMv6Dxwfq7vSqwuqYvqwoK",
  "key22": "4T6v2kS4gPyPhdoeD8e3KFhPkkC8Q3iQ68LrnBSjoUSz7UVmarVhks5mGbtvbpF2rm6LNo7uyMercRFBaLgq3wSD",
  "key23": "3LDq1JwL1hYzkwCRwoj5GXuks2MJPLEAheU7RrZHCsug17kwjuopUDavCiT65eVJXHrJ7CNwxS4h96YeCAHRWtwh",
  "key24": "59AHxnPUxt3mCZeVWCZh9AQcz8aYYzAK2xtZ3wXE9MhvRjjjR5xN32vg7wef1VLiJ1YFPmVzpbBMyyhv3RwTkDX8",
  "key25": "3yUoquAKwkgvkdiDFUBJjcS9NRxMCcfGF6QE9VFfE4ueN4SyKcWB3ek3TFA6zYUWLFx32QWh37M2vMXVGxBj7P86",
  "key26": "5yX5n6ZokWjC2UvDGmbU13zgKNw2mNxxq3FkRByPLbHRNJ3EMUNvHmNHGMonPuJSVUByJbbDtepSW1J66HcNpMh7",
  "key27": "2MFNuSy2c3uMiBDXGyYsoc3LPGz9BkQiELKSYUsPfgUrK2jVSWiggXpyeeVtKrwjU1HM62bSDBJrvCMEmWE7LhYC",
  "key28": "38GrWKNuxWcpkr7i9kB3PHbpiiXzdQyqJDHqMpGYxRgBn6RZ682KhWw7As222Mfc5YqUUK8QkFD2knQakekPqPCG",
  "key29": "3uC199Vp8pEEazAh5n49cVmWshzoQHhK9A4Tgg6GkLs2RdvjCNoe8nVpaXgqRx1DGgYwiommpbyX743mAkofDihC",
  "key30": "2JuKDDvasSZBR6xxi2oKffvWxdbrbdEiaFdbnDh2MG9qGVkQ6U5z3zMvDUsK7By1PuVjX41AGx37es7WAE6F3Cae",
  "key31": "2Ro9pYFLWt5zD4y1RahUJvxkBjLBJSdJf83XZjd4pTWxZafg9YKudnPbubBsR9ba1tbcxnobMdn526pr1D7XLbep",
  "key32": "wbBa5HMmGmqa1phGYjD5HqTCVhjkgmUS1pL9EL9VBcF7iHtcjs5hsgBzFCHUwhsGTkakbZi1BDzSE242W6ZpfF9",
  "key33": "3XxSCueiygUk2wCc37vAz5dYawd6iFDH3b2yKQFfo5D5jJn8wf17fghVmNJB4rDpYL1bzkFsQCGAf4k8u1MNqsrL",
  "key34": "55brtiKUgYcRiYeDcqwbpg7jjqxib5RUTkcwPB9zQjWVFWJ81K7wbrSLUHMxhRxY1rWQZzfZScCoZC2VWdeAGSJc",
  "key35": "5ikLVBBkVtK1jCNJCwR1ZgfkzKvdFpZUhZkUxTmCmRq3GbZGwfqBqd7H5Qg5KyrxG4azrUrKuY71tK7GrG4LQ8YY",
  "key36": "29oMpxf5QUcGzZP3shYWQvEUgzY6RVqbExkkJiH9ZTFqTm4VDXVATc89fU2zvuaTeUzZViiPYfvYMUFzogveUk3N",
  "key37": "5EgJkH6EyjdAHYxRGD5t81d92M3NPV3yz1toZjdNNYtk1XBttzTs7p8MB9pDsRV2Tw1h7uPJf5bTXx7Pt9cqeYg5",
  "key38": "4oUXhhJQgZHW3MNKc9SU2GWwiiRXz2wY8kdcEsceSoBedKpxQizd7d8f8eXdXZGXGMtfeRig1VtL4xvLzbgdGnNa",
  "key39": "3MbXCu6grWn1gNRoncbqMfukP4pNTcWV57QEyxhsSea9x8SSoKaPy11L57vuxnkbBRsMxXpc1H6mCSjbei3kFrxh",
  "key40": "2qYC9H1wceGXJN556rY6pcvQhCAPdjX3tRmJdcT4rsLXV2dBJqrecGBY2BsurmwTiwJtoE7Fxe31TbNin2yRaFgm"
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
