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
    "5xjeTuSkUUMexr3pKuDZQUWGaGZH1viW1TgsJj5qsJacWYQocMf2xJixJm5GuhQoc1uqdgMFGy2QUsNPshGQ4MZT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iaXjExCn13WbZwskbYcKQc987hdFZRSSAhpFV1NWnMMgML4zHWhEn6QcdWgoQBggax9xTAFQGrNTZHSesK1tFhK",
  "key1": "5DWiofqfoX4k3XAFqSoaAQzDaLDeoYXosuYXHMvxGpxBCC3kDiTMHsk19HYcHTAQ9LGBM3xqeTVfoCVqgFsJiCT9",
  "key2": "5PBbDQc6WSNaKcdJDnknCb7xAbWDBJmU9Q4EwonXio22DKJbFcZcuWamVhBzMGhDqjdta7xTxdzttDGyhxdyXzNQ",
  "key3": "4e9EqXQW8QKA24knNSM6276u2FUbVwJ6Cmg9rS8CQADgZoEgMfuxt9tBSEcPpNWdq8cX67rWeE4EpxfebbG9v8o1",
  "key4": "2avgqzVRQQHXTf11jc4B2qyszPVSxEDBamgFWNKhJGU36qCgDrCqT4RozSEdYyJjKwB4iK7HJip6BtRGYtBeBNCW",
  "key5": "5DFR5YRT4jNgatqrxLkxkYVpwaXnWyuUQasE2Fr1GjQM7Yq9fNt3RLsSPMzqVeH9QaUiCdEnVe4bEAwj6EPWfwYh",
  "key6": "62H1B6q9G6Ev2UgrWeCC9tQ5cZBXCkFW1GWvRqLPSkA2uDG6WgmsmAhNxiJv9H9sgNinL2YQWRPQGugo6zZWNNX",
  "key7": "3x4TwoApPKTonmj1b647Mv6ozBvJMBLCH5UBFnmWvpfRKeUJLQpcYdLF2Pq5SS71SkWbvteddd3jhPnxNVAX3or",
  "key8": "2RY3F1xExLjr1Ls2ZcEMszQ4ubA4Z3TdXkezDjPDBL5gsnmh7ytk8hS9iQ7iwR7EY4LXrTwmyG2dpHwUg3wJ4SXH",
  "key9": "5d3ZuAsnBC3AEDA25v49GhJBKw5TUJtXu8tiqWoQou7EMUbr3jRiGWM4WkQadco3ufMPLuyFiMs3BJUEFa1p5Xso",
  "key10": "3ot4GeEDcoqUXdk2oQWjfyJ9qCTTVYiVJ27R2ZEZGcCnMtvp4z9wbPtJqC3nLD5kMqVWJTxUqULqkmyh1MPbVDVM",
  "key11": "28co33C26tM2FpcWH1ac2iy2Vfixiy1D5kpi4z5v41poaQE1CX5Nw9vYnctk6Q1AcNVF5kYGBsN38kz4yQicy9CU",
  "key12": "5JFWMKsUYGHGnXW8W2hbQK8UbBJsNR8VbxfmnmDd12sB21WSGccHAPzuoCwtDDQTnr9fTpX3sjii7iFMgQYxYwWi",
  "key13": "3G6BxM38h5YAi1U7ada8mJ5zoywG2TrypgxNMR7tunQ5wtwAQ9LvVfWbyVX8q2bFNwZa1xMcjyHQjppSkbg3QQRW",
  "key14": "MyA1tq3RoagxUH5z9FjpGHaZH4W94T4Dn6ZdqaJ6V72qhfNndEEJpN9sUhwQ9wnxoFJbXyd88MF9nHQDwrGQn1f",
  "key15": "47zg2XuR5cwP1DSeGFCz7svwtzzgwitZxcSx78TzFMNLNawVRHGpbtgSgx1WxAAWeY7ZtZMzoHonKxYN98HBhUBT",
  "key16": "2DAwcNxTt7kNPMDt6m7qaMktcFKhgWt5NzFfTJDPT9XeFJk2g9TTrDpxzTZYmbehg5EJCwC5jEcnfWXmYBVUanK2",
  "key17": "5Z5gKZwk7uBGDYdr9b6EpTPYPH1DikKUr2ht2UPJoM8WKXQQVrPV8BbPCbDcRRTw7nEFnSiYtwgZjJvsNiPSJLbP",
  "key18": "3R3ZyPiAUSHprLrdncHBqoTsgHcGGvS5XE38Ud6XWMb6NUUyQSfrKTcSUPdA6pkKFZ4jeR75GqYTjC2GLtCGvbQ6",
  "key19": "5gNkL6Hf1jFnPTVN3H5tuKiSbhEfbg8dAR3svfJq9wKhevyLWcLrv3T8ZHtWDGG25zCrPSY9Q9KdPfaxbS4rQ1Fv",
  "key20": "4cYycBFquKZ2z7JBq1uy4wwH3Uu4FQ29oWE2LxVLUAK7XHtrCoDFbaijgz6T7fABZMHd5RcXaBXna8Xkci7RiJxx",
  "key21": "621sJP7s5JWjeaVbHE4kDuEGbx2rk21mKCoGp7cTXi3Lp2cuDx49aaKoUFVsdhB1R8voJZgT4Nj3ypG2LT2Zh8aA",
  "key22": "4WQrNNVRajuEtKqc9PsEPmFH7Eqz8csPWBacA5GjcvWb3XduAAigF1B7FpRxjsumWZBwvudqHQ1bcEq7QEEB2PvZ",
  "key23": "M3fTuU3cYeuEvgQ49YYKsUjbfgpGcfkhP1HssHukAAWvWuDD4sDuddPkoEX7XRbBFimzarhn34Q6zF9buENTrgw",
  "key24": "4WgHZL9KwCfdzSZ72McEg6aN5icqxB6VqCNJTrd4uk5styi5ZYqNo3qF4LYjk4JChMsjjxiHGAvYqGUyhnogTCa8",
  "key25": "2x8vZFXzicyGpQotNedhqRBKofL5Nn8BuyejXYdFDwf7ZvRPzRV512GgqgL2b66k2ZM5gLNbUvQgkKAgTvrhDu7K",
  "key26": "77uBwnTetA8jrsKVm31VDni4aADf1hkjAcCWLmvjJWfaxZ3VohfSt1Lg2N6LvDVKcrZd9CBRvTWTDoofmikBxzg",
  "key27": "4yXnfw2ZGkH7XTMcSsjeLAQZBZyMS1J1vuCj1RwQPqDPV3mvuvCoKYAbV6KTKPJBcoGySEKRPsRz8sL4D4EYjYPn",
  "key28": "3nrreZmobkvwiCKJWRDrXw9KtXsZEdHM9kvSSYQmBh7oxxBdXMXajjpyHwg85RYfybok4NS94aHNzieqN4K9N9nw",
  "key29": "drcb993MFe1qqYFeDHefXNj2Rxe1GGeayWNeJ1tux3htnriTAXNrPDGPWfq5wzXbsmr8FdURpwdvgkANJMdZ7nN",
  "key30": "aa6Sn6FGWXh9SXtGs1Ls5Hgh4fCk7Kz7wxSH1HFqy1decwKsXVq5ApMERJByGGemfrpMxZ1SxLKsNnxNUrveifz",
  "key31": "3DA5nPpmn5tZZzMAfSsXXGPEvQx8pRkFW5edxDAYYjXEQbhzW9wrWGZBktN9MhWczrkvQqZYuNQxzUqBs4KQSju1",
  "key32": "3fQLQDVtXDuU68MavHzf8dqqwZz1kefXdt1MFqm7Cftkm3hVR6PPsmF82bxAZqYAZePwBaPFxPkqMGjH2F57Umyh",
  "key33": "2BpCvh1B5fMVsNrbL5u6dFZpoay5MbsB9opdsHpZgLKvkXS8uoEM4u4x6mKcAjoCqtcKBTVxc45Li35BW3LGVUp5",
  "key34": "5yutAJc1VH3rKuUFF9nuwXBjhG9WPv4mQjaNZrAJWB1UZLdAngCM8fwSNVTMXs2yPehBvYU2wq9NH9uabTWFpnor",
  "key35": "7vPdSmuBNnULRZjtncreAQzZSN5UK4zvnaE25B3EYeLrChvXsagVid3LtRSRBGx4xR8uL5qQZFEg4pYz96aeLAu",
  "key36": "5QPQBNpu2dzzgQWN9KfQmK6SfH3yMWsYEcQPrmqftGKuGgKMEWJr7mdFvNSwzmSsESpwa5xytor9eDvgo9qoj3qY",
  "key37": "3qY6KtctQ98fqb4bdm1GkB7CEjBUvYanhEB2H2e5CJgxYWUeox1cR4tyj5v9iFHnW5Lo2osgN94s9brVfgs8kHVi",
  "key38": "4RXRXjCQEZNjwWzTHkTwfCzmqGBowvmrxhJsrbwe3EHBGuFzziBKkcrmXTfEb8xmkTceVA6WDrqtdh7T9ug4MkFx",
  "key39": "5Zb7jtC2NK9rvrtsMA8vuCNSvNP3zBA54oUmoCaJX3zYWvzP2h2G7tFYzni4FcschXpEaGs2wq8brUwRrEXN79vk",
  "key40": "5RqhkmUPJYkH6AScMXfm5xZjmpSm1YNHbZgHn93te8Nwt1em72vKJBEifyV1wQJf53y6EE6eTkic9dFqk8JdoehF",
  "key41": "2Wps2vNmrH49cCZksw1VhMKMVFRtjjVA48dtcRahAJXWZaA8PKKEGGLRsv2vw8tB5QKGx4SyxRn4uqJYouDBVXEW",
  "key42": "4z9VRsWTxvctCHb5Fpydtr8siUsaYaE9tUeRYcEyBpcGc2nR9JHnfXnxYbAXSen8jF3fyAKiyk92bsWxYNBKRTYi",
  "key43": "3GC8dLTpE2gWgoqnDz9WctDdMATZiGLRxvrm2sJRgWKJri4DBLdp8ANuGA3kG9X792xm3uhMrRquJ2Z5nJMcKg1d",
  "key44": "4Yapb9PKFnyhQ7N91PbbE9xQPZ4voNxocvYGAZf9iaFDpi4MGYuqGNowvjiBaQYJZunecTe5225hF4AtH7bunKc2",
  "key45": "5WJQ2bLUQeXU6w8RbEjXRwr8VnYR97HaKsJ6oyxArMjLgmUX6TLEc5kxwfVCkDm78LyujeowcyY6rCmXLhDNzndQ",
  "key46": "43fG6W7sRqaRJHjsXSut7gqRutXn4JpGyGrgCEvwjUR7gULZicNR34drFGF2zaLwp2aWtiFFse3hFEuUWEqoABPy",
  "key47": "2a9Gksz7dgG2jxd5n9DwqHt9TBNRbNhxJPzYYgz2UFPLsmMduKoGyrRrMbqZWuCfQFhnRyoZZsxSvCEWDMdwRoNK",
  "key48": "63zY7sMS5e71jafbR3h5YckLi1f37VpCAFjuz9wLyRtGdX8adW3VEk9VtSzePwnNsVaZS7pWop4Y3g9jLserLHo5",
  "key49": "3WwWcFKn3YRqa5Cbyteo1v1jggZH2W4ASrU28ucZJ8qo2hQxdTwAfP1riCH7c4aCsNdHk8fn4Fia3rqbM5FyL2Wa"
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
