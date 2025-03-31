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
    "3xmFTsUk633agSKyvtTVDSVs8e5z4hmzXFE5jm4mFaqhNtCqYjTuTedEkAZR1Vf1JkLDDi42V9LB6kPaawEB9N6H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BD2z1KnUPUWywp1fX6EFDvknQgpuQrDy8ZMyi17fQmyWTKST7MdWUcJt5c87mCWYWKoUVqiHvNZBQ2RNnrGa5aR",
  "key1": "55HLLo7Ef9kDQzyAcYHTVhb5nybZffhvRW9JtQvAKssgmxY5iDbZzzXywLZxXiLZ6RAbqvfJ3egvkZzaSqL6yJeY",
  "key2": "2c23u7UccX4iEx9H6G5JW8yaJGN6Q8uR3q3mmzBjwRVcNLkYGT7UHPAM1i992GYGUGy3E3PokgDaczHThGprG2rk",
  "key3": "eK3oowgLHpUXCjwZDXPDrUbiWP4h2Ah24Dj49J9eAdCBCpHvxDLdZmjZ9n6DJ7D7A7k7fXqy3JfVgGoywtaohv2",
  "key4": "E7i3jmKLWqniWbrp3rWdiYgdpoh59N1ug7FZpfBJqgks3dgnnBfYgWiWo7TQ5GdEWRyD1zSh45LrDMxzedPx5fG",
  "key5": "mZsqZsxomLXH4LBJ9d2u9HXYboSZvChxbXBUhJxoyv4cHjTW7iErXU4hSnMvBYNS2E6J74y5nv7yDvoKxLijttQ",
  "key6": "5bynG5ZB6Y31xrcoZW6K3EchoqwWGN7hHqKxTV9M5TC3mJHo7CNbT9xW8JQKMzdrB7U64REBJM8qDCkeMufW5qbg",
  "key7": "4kyT7Aar86nscprC5y44Kkyjaq3X9B37qHUVyVo2LB4sWu526HdN34b8CbtBUYmMPiARVCtGMRx9yW3K13BkMxru",
  "key8": "7FymyrmmEb72cFeYp1avSpHPM3oaGyLfUesnxM4mKTzY8AFjN3b4i9kpFYipKiGnQiyosPbJAvyC7PF3dHmmJRy",
  "key9": "3uEUXkAdUoaFfJQfShVFx19bRYfGPw7RtTjQPzAwDze4JjhNdZW6owDJ3PLtKMGwu5KhY9u3QBaM85iiJbzkKJWJ",
  "key10": "5b8NhcvjBsv6mudAJfDGMjQru9r6mqfp3XUG9EWMnrSTK2CrGG8tpN8AznwBSm8oLNGJXyGgRtD6q9NSWuBEdToX",
  "key11": "3Wq4RA3eDFVCdKN5Vei3pNgJ8bDyHqjQGNZjZUTakk7j5nu1aVWb1QryBotDTjJUEBa2hJbtNLSwUDiWjh5wHQa9",
  "key12": "MJtEwWvFb1dBNCW5N67W1vocDvhhwdEWEoogi3UjTtLJx8e6ZLqdNxcXVMLqwrYG5QWxVP9RCvv1yb29C9esh5V",
  "key13": "3L4a1GqkHGGzMdPa2ggrpCCGzia582rX3JvWtcsYShKwsiEtig92WFwE7U2yjMCHvfXkdnPZEwNozUrDU3LMqXT6",
  "key14": "65ir4srWfpnRXd8yM66Gw5sfJ5DM1FjNiB328vnZiKc3TaGWchnzxUBjQnmURgpCiAQVd9nDgiyVLHWkePc1wRF6",
  "key15": "BVdJUsVtL4tcAcimt1x1ysxDybwu2JLsizP9CYqsEh8TZ8vEEAq5b3dh4YypGJUpSns4BjTxLAaQSzSNRmajQeP",
  "key16": "2hpNEwjM6e4pErCas2ExhNJ55nPQktTD45FfynAsutt2Hu6oThiGCnPZ7Zd1pWPWv5WqVvCd4U4QmKWrLPh3pp1w",
  "key17": "3QhgES81v7YRZxefHzBCEk84jkkDyiRyWVebwVa2885NLXL82LvmdztEc8ceDNtgD8yVEkiabYMhcDDCWJJDiqaK",
  "key18": "5KM4DpiamqEf1AxMRdFUCeYPoZqGZ2rTs5KUVt15NLhSZ4x1wKuuyMebhWMXE7W2BvP3CCfsY4Tbg3u7kCNewtws",
  "key19": "3RnGgJD9qxQ6QpHyzMyx7jYtQ3EHBfSfUDeZsL3TDhJP9PL8dizKmMyALgaxBZrstLh5Ld6FKKYKYSegZoNoKpZv",
  "key20": "4ERd1k1HHf9ngKAiG7CjBbHVuf4WizA4QeAtF11A74JPiosycQEELLuZMMRvtDSxPJj8faYHZiFQhWYoHonfAr4H",
  "key21": "4SkZYSbegnQ4BQ5oQLKx77sBBC7oEQHFfep68vLHyn52QRSN44eMCtUkgQZwZmGgkMHDSEyNtrdkDS1VwrxNWBbE",
  "key22": "5BiUj5fcJu5j1S1rbkZDEd2dokKvRXoCPk4NycGcGqfB5fuoQ283GHgb6CqMMMpucms54oghniimuuPvCMjaJNij",
  "key23": "2jDB4JKK7tyXrT87WcUof3ByKLzVFDU4f41fqCT5BGqTRDMv676dhPu4xmbAcugkjNgmGar7QuwdCeDxM5An2Wqn",
  "key24": "HqGV2hy8jjWTNCCK4EGjXCdm5ZSsRK5sMP3nJQWXsrY9pZRXDK45JkNbzPCAWigpeV9sdHSUeh916uoiML2Ujf4",
  "key25": "3miMNgU5y4vqZqgaiaj95NGrbRQPx6LDAs4TbW1Kditg5ksX42H9PPorQ97c8LvG5Eku3548hfeGK8tYwzgwKKMZ",
  "key26": "5TtPNKqwdvFdw75eemBZnokCGbtDZibiN6qejWdF9qbb8Npc4RtHEkv89xo2uyQFGFDFsrGYM4xjWVU7BpJemtGR",
  "key27": "4xiTBv22vuJS2msspwW97g1CpXQDBzwZjx5GWkrEE4Q88fWJyQb9AEY1UA7JjyKKj5rw6SLcHdBDfUeT3Ci25N7m",
  "key28": "2LRtp6jY1L1hs4BPCM9R2xgzZsqdNH3FwaDeAHENVnai3tDuGqCs9iV3EDVBXaXWFbQFwVmpvonVVdX7LkbLMwUi",
  "key29": "5Fuww4shjDBHMP2Kk25oaSMvikfHcHWqcYhcyKzHyYm5iuW78n4ydZMpVUPrF1iGKE2MXznCziAz9Vmy16Y2rNJa",
  "key30": "3n318bMfv9gSPNgovyJkgY2abXvzruWu7gVMxn7TGJLKJURn67iuL9APFGggt8QK9tjLNPxHu49wNpNX41fTcrXo",
  "key31": "4UrBT9AUfxfManmaYwZ8cvshaTgwJQFYb4G4jaXi8xqM8d2Q17xbRo62WiGoyPGGkx9E87stTFvrohLwXCGcY6kD",
  "key32": "2QLgf6Gnqv9siRMgETtU55Xt9Lhdb6DrRroteceUSdASEebhE7H519HyiZNjuc4qKoaQkzhTLo7NpuHddLnA24Am",
  "key33": "3brsvBB9EQWqzxbUFrjeZsas7m2kSQh7m84PKdhqL1VNyoF3n7FtWhGXEt9G9xmUZTXHksjXt1gFy1muRZv4wvPU",
  "key34": "64Qc3oWK5hbyrLXpBMNaog19QZhR4PKZZDK3snz7eSLvq5RMiAueS354QFWwbn2Fpz6cWv9G4uG3yNYtvSizjKnU",
  "key35": "25a59GYWHT8A7mNxskccgkpHpfDXFuBfwAqoHU8pDxSeiWF2dFekJFH7NA8qUqJv6FyNKVJNXuQnmWJXD5zXFbrJ",
  "key36": "2fpjjRBpjYFgw3az9KdyDvR1CbqdrNSeLpK78HypzZNqJCxqH7YA2beEYxiAG629RuEcatPReKASzEVVLwxdR72y",
  "key37": "658cjm4EoCRpgMzSaNKWfLsuYc8URdmfdPTLEybfheMNR7pDinTJ48925tMSS1jHwPtPF1fnGRUFnADEvt2piS3c",
  "key38": "3sH4M6vcf2o4MVN5xeyxoG2cnT8qio7c3S2rUchRUpBprVnUsuquoxzGAPG4yBunHHaugHbyXDktdLZ4uBz28kP7",
  "key39": "4xHmdBnX9xmhKnEyRgwRuRCwMywdUs5fyAFH62uYK2Q1irmQCYXWUg1EnTWpbtKUUJvemT2mG4NndrBpoziHCqjw",
  "key40": "5oFdkBgNVAg4hx8pDLf7mWTXzsRbhz4PVy2rECPAHRsfgH3uRBbHEbtAAuLJSeb7zB3ix6qmjMGbSJiYBVrRNkVN",
  "key41": "5hXtCpyBREmq39eY8S4ZzyHHe7fpZPBA6qFBTxWKDnHZED6JiJxZ5kPqCVfg43C9bthngDEj5LRDxUsXusHAfguz",
  "key42": "4N4q5vJsCmDwdYu4mcTHGnDdvu8ShYX52miGaVHwtNhyjcCGebJDvYXNt6XQ5KZSRKZy67y7cGsYp389nSPm5aD6",
  "key43": "2JX5wSnhMs28FtRVyUbukm2DhEapdbo4GPpX7KN362ZRoLcX2fy7Z4BpL9XHkHqd2DXfcaHB7LEaKk44nLSpMA5H",
  "key44": "2sDfnmpAqs77iz8dPmUBazkRScRKrxaB3jVeRGqgKshSz1U3DWTx6kFjKLCNATnnVrKRpbUVDQ3rr14vuxedMEW1",
  "key45": "4UtdDhRH7pdPGpzoJmW89Mk2LheQBByVEFsnHhhgBaEUG2JnyK2H6oaWdzcPjNnDkdhGdC64pWH2sGB4Yr1jh3my",
  "key46": "jNP37jsTBvc7P9Mhnw4Q8uxDcBnMYZo9STvLvGKe5Dqauuswh2zVFU2YkH4HfuESYv4w8jGa6eTdyUQ8rrCd6dD",
  "key47": "4eGJEUdaFNZLGtQQEZtc6ogs4qdew4FBFru2ZKs1Z3fr675HjWnMaMCiHJiBfHdySNfT2DJxepnHcydu7JYW3PWQ"
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
