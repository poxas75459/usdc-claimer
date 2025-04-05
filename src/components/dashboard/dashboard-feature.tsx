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
    "3DBibeqEFdpphqphUA4awoGa7HBkUHn2gtV5Aom1NWsXtYnk2W9jeaUz2iKBw7zg1Gt57PuXNDkbZNfZoGS5WFZ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "f4D12de4jBLTdSVRpLRJ4v9XpfGYmtdQaGEjBiMxKH3ERCs9gqwBjKHBSHQGfkzUH3yoS3fgwLfeTG8Z1SbSz3Y",
  "key1": "48ay8xx2kbiZ3s5UDDvJfvrhbbaqdctDpi7nC73XhiYG4uqMQb9giU8Ti824quNQsxaocXmY4fBAyAd8EVeYtj6U",
  "key2": "ntm44RtD8LFvqoTbQT42741MZZqrqzhrMJuVJfKzN4DZXH5m1S2Dcsg3ZCYKvzJu3ry59gJWtbZqSae3NjXR2ZA",
  "key3": "5V2AnEhkAbHYSVhZ4i6jSsZpwX5vG225o4V4BvgZG7tBcxnZdBJygz7wJKc8hp1RFvtpFLV42J1zM2hhxFivogTq",
  "key4": "GeQy8PgkHZ1t31uAo5b8iGhssqsyw8e2cGNqiZZ8M7f3uXXetVXc8QKjdDbbaBP6ndQvULexePEZqonmJQQknpn",
  "key5": "57JU4wUfGY57hdHtCibZ1NBwTg12CECA3FngfJ8jVbKHi4YpqsRaL2h1PmYHVpfac4WJ4gkh4ppxAK2cswZT3Fnn",
  "key6": "7bXAcHms7RHo2fRkxN65pZqUpym1wwfWN7RYyvzmMJ3pbuiSWRYiNENKeg6NtyjUybqt1o92Gw7SVwf1LbTUXCu",
  "key7": "2C5kdV7FqFGJqTPiwXdQsZtQmemrsUSWnP2vPk4cr67EqBsFjADZHdWMH2M1Gh93y6Vkqe5HgXrPCKmpb4wz2EMC",
  "key8": "3zK6UDaaNoxMtKrBM4NCBf5a9stjqv2K4g9RqhYqzPASccuGSvDn1XJGuLB4xDieoFzP42cFEH18Q13MPK4THtv1",
  "key9": "2s2ovKWy3PJjR7nLVK4e9J3iofDyiLWxaKqeEGEckSVSMk3AECuveAfhifRik9vvCxcAB6GPHty8qR2u15YXXAbW",
  "key10": "34x8drdbMp6fvB2uoWJjNR27Rrv6HmoYtiKUvXmGBYCScqRJhHqXmAX2wr542FawdCZZXirHgUJNJRxjKDg4hvJv",
  "key11": "3wqrU9Woof6MS2uw4d8MNjUdwSbVidx4Tipx89Rm8PoC3wfBsPV8eTd2eKHUfgCjFxJJhMMAWy122mCm2CvDuZEh",
  "key12": "5q6zZRUy7cPzL5jxFfuYKWPyfyCS9QaD7gDVyyb5KcJ62LbZYWTi5HVF53jpgnFYT7evM5fjo551tfLz7Afx689m",
  "key13": "5t9BHeGHJ3vHVwdmFKnZxaQYeopBBHfLKtGapwJa6AgDpVt9AKJySDd1iR1ZxC52JjtTfC4cRSsJ8BP9anGc44J3",
  "key14": "4nYfrGGYurFjtCe3or36Jox4ij2hF3KZmiRU23KZ4X88u1LMeehRxFCzghAXjF7dqFv89f2hczoqi21grBRvSJx6",
  "key15": "4meZQWAk9FRUShARUc3KfpefH9rRMztwS5pckjc8QSgR2e6PRF35qqzJdjrig44BLD99kxWKrHHjD1H9FDFT9Bw6",
  "key16": "zx3qB6evGJok6uNzq97zBQboyuK4rzqgYzAXKpN9uXUTUKYJy2YH1Lycx4DNJ3XrzebygPg9cnLcGPvZAVhJzax",
  "key17": "BoMs5Q3GysfHtUhzcNiXh3GyQoQXyoAc1FKK26KEwoupRanDoNAeF56wwq6SL1vJnU13i5BfDddmxpo9ToE1rdt",
  "key18": "4zCxfPxDqNDGeaDtbzP44VfbhUSinRgLiQVTzJUhUXzN1ezmkqCEmoYrXxqjGT9BWXf8ME4QgujZxLF5TEkxxxqA",
  "key19": "uoWKb2ZgNqcKinxcUmXFdrAPvKszpvUcE6qHVWmUqv8X5sbGgTcA4XJrzK7Ad6J4rn62ZcFBEHq1idrPMmwNe8F",
  "key20": "5xFutTzErZApuCyMMWooAuxbsVRD79GwxqMqRaJvmsHVpRx5KP9Zk9L4d3eKRU1xoFaCw3kQVSa2aE8ZDQukvfxD",
  "key21": "wdHQyjN8qSQiXa47Q9Dm5dfHomhoAehwmhi7hrz2EKoyktKTYjBXJZCKQp1sdhf9H31zU1VP6tiTP9KGAgd34xW",
  "key22": "5nLRRomhngmhykyHDjLmBTJdPPCKgoxaBAe8BXSnj23Es5VSCXVpNdBtjavquhSE4AeNAFrsYAdUVX6srPfuwZVS",
  "key23": "4Dy96zqEE4F67iVXLWkWN3oMotSKFLh2veFzak1J7P7oa6SK9WsgpE4u8XhoPwsTx2L73Fz3RQLwxRqYX2DC5qBs",
  "key24": "3U8JHSyb29EAHhnvCdnbdyEzXCMEjPketcMjZtDBfmPufJ52qR6FKsA4CyqESDVMaC8Fb5m7gTGpdF1GTLTzjWp1",
  "key25": "5rtLegz17QYCBQ5x3spc6TRLyticPNH9Hs89PxigBPSqEx4Zw1h6WebFStHfxNjmDDMuTSX14en85BYx9wVTYvED",
  "key26": "22JLbdLqJf4sUBn2HpQt84yWPpctw2nmPZazUpHukjgfBBjYEDrNUbh3HGPhQQiTsneRbnaXyvPpqKvFCMGPoace",
  "key27": "3CYqwbA3rcNKmTF8gSL1gqrZg1khWfVioZM64PWuAGKUCFrGexh2cDHNwTXZijhLWUN4nR3SpYjg5fBAKhe7PJYK",
  "key28": "2eSY7kT62Sdkwht7gJY8Bpk3U8ADUhsgxi1pUNbYauNkDWBzxYvqgUCNAJqGw1JsU1F518AvP1eRTk9nv8evgwBF",
  "key29": "4XMY5b5ZT5Vqh9tBSJHoxNvoRWVDBTqyUHCNhpyepvGmvVNJWs2rEnBoHJHHmDMRaZr3pLuGarg4ao7Hdfqh8uxQ",
  "key30": "5gXr7eNxkc5A1Z2YdfPsK8Ychzetu7KdJZADZCxsnhgCHpGcczoyYBrgfBn9APGv7xjPfVSd839rWdrrHAzq28CJ",
  "key31": "4MaXvnyyeDKQjAKKGirJQbra7bniEbsqTTJUoWw3XikXi3pApiKjWH4puGUiD4tCjLjDL4dLxcMgUJQQJSUMNUiN",
  "key32": "5ZzsdDQW1AiFwCTuUqUFDyxnwAbJT5sNgyBabnrQrj4v4ZR9NKyyxYK4ao5z3LukNQZx8T1YPqEJZFSuPAPLHjkx",
  "key33": "3XnwKQAe6T55WUcDJRkGEsBJxQKHAv1zMjgxZRPnWRRnwFWaMBcKny1gYXGfG1vwCNLncRiYniLTEs1sfUSgndAy",
  "key34": "3Sqx6qFwmU8m22weJeB7LF2425rcutaek4jhkaNVKDbBRt3vVouwKPtWGBV7gWjUNFiPpk3hfzRUEUNSUqHWHbWN",
  "key35": "cghHH9DEkGaNGYjMhXGL9sXcV9VXdJpGmEVCUfry5mSzubXkU9SabKRvBbjtC4Tyx2PDPZmu84pKQDhiLXZ1bCY",
  "key36": "2Nx61wQWEZTw5ak4PWSGZsdeW9A1v7a8Z9t6xJr9GatwLJkLe46z63JNTFSVSvkPJFWM33cQ5G9tF4fwQHXJiVwG",
  "key37": "3U3cTqX976YT2UcYWMDseXSgvskM4yAA72fxzMV5mMXaoKtcGkbuy1WKSgpPGKvHEmHxYaQncQriJ2sWWCBUHfBX",
  "key38": "PctFQnXopkkpLTWR5DaQVLoWYEvYpZWRcRM3hKDtri4fBodYYS7GKLLkR8txBeZcQX4AAyx94VMzZs8fHPmngUJ",
  "key39": "2kNRHnmg23iEnyXi5kVawz7UW8xhvSM8u7THn7f4kDdikK39ePhVrPgXo71kwJfxz45jxZPKrxXiGuUh96Np5W8f",
  "key40": "2ZiEMsaKweRssrPseox7gLHhRvN3na9RhtePEuCuCrtByG1yh5uZnzhAkfr6qZyEqdNykennVb1LN39NckThvbQw"
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
