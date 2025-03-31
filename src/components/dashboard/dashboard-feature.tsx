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
    "2VVnTBVRFYUnKLNZs4V48Jw1d2TT879UoFXJpraBqKNE4KTmaL4CRk4xdWMZrLcPAo7DC8XY3Yx39CcbD1VpUQZE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zsitePiCR8JFENSAVmaLi215mGVMkcsDRyo5pZYZoRgbCVyyxwZzVnTNJGQYEa6sseH4y3gASVBsWXFHgqvV5QQ",
  "key1": "D7HqeAe3BrPAY3oSGWRCdJZtof99r4XiGPpcr7ar7Gbz3KyRmF363WNgL64Vo35ERh4ZGgruTaSZ7S6MejMwwJ5",
  "key2": "3H1qZMrDknrvLQQpugC3dBbPrxkyQVbfH5bbLEUnExmqjxbM9CAUbd6KAtsxpVR4AGFP8DyDVSGES9qq6aZDRAcs",
  "key3": "57tdAmw6QBtevwGfGSQki7rsN3vZZ1w75CNN5vnVu816SZEhdhMXGTvVe4rE2QgiHtFwAwrfqVqMQciDENEFHNSb",
  "key4": "5tBAqeq2xeEFz6tnoLdpuPuBH1WnQiQuJhoSDVTFeDziwNahZUmDBAGE3zkVxwT32YezkWbGshc4F3BXcK7RaS5p",
  "key5": "3xgrLAUg1ZnVVdpRhsUVvvTY3qoQT1ijCxj9HoNKty4UZbU4p7kc1mvsNL7EH6D9dmmTKcGbjsbpmH7HuTK3QTeb",
  "key6": "5nvtDDq4jEASztuni9TPU8qDp5Mh3RwRR4TMuzqTXbmfQ7dmRQ7rcquPmHtxcz4vUdzg9Txx5NaJUH1yvTnZ1zLX",
  "key7": "65zG5Mn5ia5YkftaqkQJgnXXM399YqBXwKGofbWNyUMBhtQNtF63BZw6XmMVVPKJcPmFbHJeLWD8nhr6QM4xL3bd",
  "key8": "4MmaMYstKnmda66UAF9XZfB4sJ6tzrRwi4R3yzGJEFU6XBUS8ZUdBMLeLrrydu1jAc1pTNPgqyoLdrcWYmKHB6ur",
  "key9": "2XFRaP3j7oPZgqedGZm9Zo7GtSr84jRiXvpwddA5LArfT5wSuLhtSNAKCLbwDnhvV8WRHEtE8A1UZMAtteMUeUWD",
  "key10": "LmdHMaEqFKA7JdwMMyMNBhZzHF6yBJPfqpHLyvZMzEy5HZ6zYmJWRVKQ76wTkyncHmyG2JYAMPpSU3UMQuM9kFp",
  "key11": "59qgDuc7Dhdktk34FhHxnPdyuSXwyJfZKEnAQXGELPMT7escDs3R3cUGiJ3ZxuDf2gXzJ5Kwkwf3qVVFV6uvNUg9",
  "key12": "fTcwkiKM6pp4Rn95zTXke91sJcwS4fbRZQuWkXfuLBEBPoMtgGR54J76UFThAxfX12Z9CWaSsLX7C5TMFKYRFXq",
  "key13": "2fUbdvwPD739bjZGWz8DdQMXJEEXVy66ctpDp3sqm8CWhHaNLwD5JDY2sQeKrcQZBxCpLnGJSYyyYxyX66GufoyJ",
  "key14": "15XMpuEAQmNpgPbLcSB7m6wnz1Z4EprTQEUE2tmxk3fvUKUW8D9pbif2GaDNtnQiWv1sbpLCGMR82gHaJi2qeXu",
  "key15": "5Ze63yWHPREid8Kja9SAi5bbCA7CU3heRWkEssHzr6KuQQKzHNwEt4gmm2fJq9jdFvQMUcPh7LXAxJinApqicNA7",
  "key16": "hjWuyfJYWpqijHHBGz4WMstR1CDpz9UE1uMqrxwS92fU87ai67dHe6eWZYSU1c3CRDaDp8jin9JtzVr5TJ29k29",
  "key17": "67EPqNjyoiz7o6RKWMUxr8zb2MFMbwAS1dW4T81CHCm4LxkN1uS2Hw3Gktqt8gYZ5uKcXv836YdazorKKmQSJLLZ",
  "key18": "5Cgtsgfoo9kCjTVwiXWFnJFQsYgJwuWwrwZBESXDxXGh1MKzyCkFJqMnr5TEAzNpKFVvaGGFpQ32RFxs9LpUYacA",
  "key19": "65CTzprkLUA9Fq5rLhdmnX9SJZ5q8zYLtQvtdMKCxPY9dSuJskfLS3YinYTRij3wmJF1jzBPdqdMAhHq4SyNxoqn",
  "key20": "4McUKEQ4xvnrSbSXzB1znnqxGNnBByTu8qifcS1dPLAHtpMzE5z3hAMhF3oPD8BMZQ6rUFmVSnfDTMWq3TKzQsTZ",
  "key21": "aGYQLQ4dY5dQst9DmDUZGJ5guSgCS2J2xeBBHrm6JcFCLhGT8ZyGYq3gpUquA2YfjH9UrEJ3LvoM1vRw3TE3Cke",
  "key22": "bHuM86Vth1E4V6vMnGUZQSNBJP4gY8WcWFhGzkwLB9KXxwpcGr4Nq4GA8JmaH6AZccJLMk6a4TTLPtNS8HwsXm1",
  "key23": "5sjUM9nbkqY7GqfbveJzJq12P3e4QPS2rjhmMMxyNvxkieCjmFXJEEcByvRw7mDiK77DjFSHi6DY3SKJVrot6WJZ",
  "key24": "5UWFgWLV115PT58wJ7cwVuy5cafmJaYTKKaYPftMjEW3JtFfE65tristeismJSaRJRcDyUkNWP2iQaQHcpKRJPvh",
  "key25": "496MMxbZ18RNTBh69uNbKDXkvhHL4ProkdHEEmCWiz9zv8icZ32y9fcHASXKnB4G2tzkUhmTXgYtuLCmEP7fRt2h",
  "key26": "3fPbWxJS7wUVb3S3s4ZQ3tKBp9phhAq24uPyqLUn7EZcsF9zjDvXzVAgqqGw2oxxuTCJdTJCvY2f7JdaKokAdB7R",
  "key27": "5KVFJGpapLAAVkwXnYENQGGesnZJcgtwZ6MPdg7qj7HdiyqFvJB91ujWm87kfbqqqtSFZbViK8eAp1BPztHrhXTL",
  "key28": "39FqJyHNe36feipErUffBowDft3zQLqbWnRZKFKRsBFFhtxnsNgevzZ3ziS9A2u6AZ2R1deXBYJpsE2thFbgDMpH",
  "key29": "4pc3z1A7iSKtQ9J87HYxJaJxqckCBTZkWSbBiZQXtWrhP8GbuzsYijhhixB8mEVCiYneEEGbzgFws9QhkQoGgy2F",
  "key30": "4XFbcFgCXFNZyp7gJ1KBw7siEEr6j9ddB3CV28Mcvakc6piWK3KdmH2XyFzBSVNm7ESQMBYPE5k17c851F1wKMiX",
  "key31": "4jGCqBxZvpWGiDC8NwotEs23S86Q5WEVXHtn4nN1bS2KjdVefJn3doEWnrBfq1sYF8mYwY9bpQgSNCgm7nxGQx5c",
  "key32": "34xMPmCk3caSeoq4yhoUGpYxt6YMvKG2SNrKdQLzNHMfwpe87ZZ8tpSviVK9ac3iQ6DLHXRquVveizG3LqCx9R29",
  "key33": "3vv8AQodjUGfnnmN5ejfLDjNz8wvJTwYX5nFRqVBdw9xiCrr5h1di6m3Q3e5w2Zeny2X1JxtcttVs7ZJhnAnQ6VE",
  "key34": "5uMsPzh2HPtrcE4hp5TiQnToprP1iSH93xoyRoPTUQWTMp9B1CCHFaFA3DYJdRJYtDj2kvpVoTpgDu7AbAFPq5re",
  "key35": "NYY2eMSTKSCV5Lb2bBzMavkPXV1S5SoAuuaraSPqYPQb5LHn5QHS1p1EpBSSs4bxpd6doLaxujckT5LGqLvnuh5",
  "key36": "EV8tFxiCA3nQQAfWduZgojDy1LxowijKb4aCvUAyUf3WkwzeT7N4JbfCvyhx5Ztz4uDXEfwJ9m1rHP4VjkDYtiN",
  "key37": "4Vehkhtenh3BTKNZF277g8m5BWS2qLcD3pMyuLips6RpeYZwMmikrsypq7DFryYwYYC4HDfWyU4gQKAwcCnrUmnD",
  "key38": "5F7Tqom7sZkDWCYCs9iEft8foUuHBzDdvug8Hs9CRto8b2KZiXXUEbnMMF2zwUKuDdPubXxZDMHDEUzARj1fLXnd",
  "key39": "3cFFnQ7cFb6MzQkYbb8JnuScqr7fnW4jVMcuCHYEgR7RH9sYhjpwuKSQYhjvGPv8kiBKKyL7sxRUtuqnMstMS21X",
  "key40": "3w6RnkAwvcpJMNDhhD9rBC6ankAFYV5m7FgXeD3PBH9eDK5UiGvM98HVjXeJJqyteyQLv7gBpvs5hguzB79qT5ca",
  "key41": "4XjhdaDiKGoZq5x6XFc2TDDK2gYt7tMao6rbBeGxHKeuV5idw6gW3fGUmNCMz4M2pjMBHMTzS1c5SvkK4cbXWgth",
  "key42": "3Gpd8UJg2RzR8KRKy4taa8u22ka9cYxnFLZ7Yv6RNPuXDLHNPQC6y3X99P89BvSpPDaWWMZj35xsGCFRcmphL1Kt",
  "key43": "4o2Csw6yd3X8ykCqK6gib3XUhnKow1bxF5DUFPxLybaUbW6QJ6ihd9DCkuHanfT1448xaZfrHfZ94pA7LRF866e7",
  "key44": "3N4kuxCJZnUaxWuxGc3KepJDaHacCQ6rP4GqxAsB4f43SJzet3pnKLHgt1okb4W3cUyE3DgACbLtCoVqc1Qp5Mzx"
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
