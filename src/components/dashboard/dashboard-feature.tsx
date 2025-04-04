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
    "232PD6SPSx1WswxxT5So5esxcHnRcHuNWjyrih4h5kugLo3uLPL1N5cSzRkvVKF3E5S5DNvHeeoRrr8kjAtopjYP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BvFgruDndLWeNonA41Vf4cx7cDuHnjBMMXXtKe59jHzsbeTbS1GyNvGP4cxsPXvigBRkmMXMYHSLxi33LQBqhMH",
  "key1": "5hNNXPDqfy9ZmBzRWAAvQyzKVfcmSW4Lzt3DeqKuSEShBmiZwRVJv6biNwJyrWQoKQkzEHwFqkTuZRmNtU5VHmi4",
  "key2": "44dcX8e9MATdt8JR4cRbVmew9VTQnztpGWGsm5oWeWSSA2Ws6uS9x1HA9vsk7AB6hoV4Hk1dCVeRm5QSTHG6jf2j",
  "key3": "48tJonCJdgy6TARZg6WWUGkBDmFcAEfCeLMaSrEBcmnzPQNNU6zHQZtEVjxaZ868jJJJuN6YTmDSSefkVTz4oGVk",
  "key4": "5EgMMeQFybEpGm8XfwWe5HdMefW67bDhnBmtyoDv8dJSSATnbsdQXiRT8hrZrXkU5sRaaBwTQLp2HRE7X3dC3m5n",
  "key5": "5BruFasM5UNvBCeLsCUiCYShja4AiLi2KYsshXqmqjCT5L1fwKjtXTC2bwnNA55xN2aorrA34taMei9EDx85JWTW",
  "key6": "2Bj9RDQpqatEYCV6W6PNoaM2ZKee9r87fL9bunBuJtxBuHAEeN2a1vBG7RVfTiYrd7JNFTigA7i7hNVwRjAypWyF",
  "key7": "Ja4xfas8YSi9krmutKfwF8fcUWgNuLpbN9uemTgiTZerf2KUnPzYK49KZNBVbeUEGALYaKqqWeHoVT8G4VZiTz7",
  "key8": "3BSUKiEoF6gXbRSkd8DGUk6pLFXcEQMSCzc5LrwWctqJbpDPqqF7fV6VcvP3LgX9Dx7hZMiJKaaCrHBSGEqSCmGA",
  "key9": "31Z2uJ59tKEerBxJy3BB4GqMem6aQeptj3ioz2TPxvCWta2pFzi5RZLvu4YqcLSZ7j4UKSkL3PvR36ieBcEGAFy8",
  "key10": "5SCd1ev3meGoqh7RQXLPVjK4pWox46iUQWffj2aVCHZfFtthLUUSX3xJjSoXegfTPt1rfY59grd1bNan3gYMCXmh",
  "key11": "2c3Vcaaz4EYrXVHHSRMGSGhrs1hZFiDcEfVE7xGrzyfixHH6dTQ1hsBs9VCeVW37MSWm2dbj4hD7v3sGtcykxud2",
  "key12": "4Y6J3ZoJFeh5oSkhquVrVorBqvLJYyyMfGEfNgJKFSNsTecpuvSunmc98vGfyfjTAFxb6zwAPnDxrg7d9mSvfX35",
  "key13": "3JRqd4h4rFVJWMtebYQ5ZivhNXbD27YWs45uDngjKGXb7cRq1jrc9U6XtJWZeCTeCcJ9wu3R9u18q9KaneECNpW2",
  "key14": "22ViKdVnZjLRXBbXFtykd9cAedAvFjMAbGoent6xw2e6LWfWPVtLNcoAwntvPpfaRjuM4vG8ah6jcA1NFMkPegvL",
  "key15": "AHNMwZpwHibzdHVA96fiby4VXEv94xeMFwwnRmJJLy89kmRZeg9dkP7yRAKrC4Udzyj6w9EK1Yx9z6CaH9Q9ZgQ",
  "key16": "fmLc4AZ2abjN1y39rh9dkFGPGLUGQgYL8KnS4eDHMbJqG3xBdvRSQm9VUXDXPytZKow8SAqEQmN7ivedRUCGVGE",
  "key17": "54LQrgShBnqZ8tWuqm9eKYisTQcADsppinyddkdp6FdGr9Ttvq7mBNJqJtACzHFQSLGNqw1Eo1wvQXaCyEvDGSA5",
  "key18": "2wSzwkxuwkB8GQLyTftxhBmoVeCjjBnfSbcqkX4uyMWJicwq8AYygwvJQGvuDRUXkVuW6vLD7FzvJK1SnJWpW4rv",
  "key19": "2H1ukHkQHbN9QvTuQDS9NAEjrAMno4SdANs8hpdq9ahD7okeGmC9T9DXMyg7C6mejmAbnCkBpyGqygoK8fKYjfWW",
  "key20": "3ervuX9dJvxGRoXjDnxqwLR59FypsUFRp8kCNqPV4UaXNFn1ZHBCkK6iMt2S8khqJfZ6Ru7meZkdauSyPMKRHwJp",
  "key21": "jzVbovjfYSg2AB2WBU4WNfGRsr7nL9PfQXhfWuf3CoLwSWCqdcizUdoyYovbhL3D1vF5u487tGxSDNpNHoyDb2A",
  "key22": "56drqYgYe3HKPhyAzJBaidrHvJhBbdpt29kKrdUmT9s9JqYTpXJWaFmbz9n67QzQPv8zwFT5zsy5K6mKpg7ttFwN",
  "key23": "36fKZnUxm5yxUYqGyZqMKTtHLGhQ2sRNZnFRmHb3jVRxJnf76DSosBApPt5dS3FgTc1ZjFpKgpTZwpu5WF7KEMSi",
  "key24": "beVUyK1oYa9px9F6zAgg5Xid3q6h7gQ78mBKhvLu5mvSK6YzwsdYQic5Xt4pBrjhiNyKHPRGoRyNgmChX8rYxku",
  "key25": "4sWWR7fBPYhxtqvGLThP3tUHqxCntftDbKsQxr3ehASA6gVKBZ94ZmADPbmkZuihMiSJ9QqGH7fzuA2UB6SCEK2F",
  "key26": "64X1Uzb8GLSjhZkxMyavd6vajHdxEJb3rG65TJCupswHGxQMxEdm1T3XTtmNTwZrmUkiA3pnhDg3hVmWcJ91L6tm",
  "key27": "ZtBYxsidGepxpsDas6DPJGrXVs3dqJ5ZDoJVqEZoDH7W7AVezmM9PnSkx4rHM1QZp5kYmPJ4QJ1EXEGK8osPPvo",
  "key28": "3vtB92LQgVXxCNVQG4ZrQUcLD6Eco4LbwxEtAPxUSNWm2ExmgPAUD8LuRpEKsxZ5DLq2Lu5PMpREG5RBcvtw7gju",
  "key29": "4DP7Lh3N1MNvi4EKHKmUQuoo58ndm6J4yhPRGmYH9TzW5CHzKfJdqhvz7DZvgBmK5itY7ghcvp3KfGqBWv7gbSoA",
  "key30": "4gm7aGjsZ6edHnwaYsJqZidAnT2D57N6SBH9djsykTd9ybKSVrpso99QCc1CLQJ1ohQXTqwnuyJXDWPdUMUMnmQ9",
  "key31": "2x6yN7Yd6gaSYkjKq2Eb8NvnRztUpu2iLPsCXhXu45qWPtAUEdDtbqqcTU5hTuQ2aiKjHBsah19ecSSScKm8UnzG",
  "key32": "5hwu6WVSURvn2hEjS8jJcnwGsTWpoQG194gsa2ahUaXEyMqMxRtdCSBxAy5d4fQbw1sYxmUDDQP19MqNiJN8Zc6s",
  "key33": "4H1YuHwhtnaJf2Nfk1ZkD5vRjuRNKXenwxuMHh2uHa6EUQLBxcdZiy4WZEnKZiEmLVr9851SdJ2Ly28SFxG5Yz1A",
  "key34": "5jan56VyHUGUpV1Q7sfgNh9Jm9AY7MxtQN7scA3NdCcX2uV5VcKRTpgucMtwYjcpWipHcX3mGA7LnFRe5wtboxbw",
  "key35": "3LVjuShnrVzr4ieCE21AyDTjUw1Ym2RZQcr81XnkFTzRgpn9TWyTwNWUrCkzr5nfxydkbHHR3EVLwiCVtSEccAMi",
  "key36": "2BwV3FC3wZk1tozqXy9SA4nwmK729So7DPt8f1ptG37oKi7zsNXqq9JkmjS8zrGuAaqDnXZmWGrYYfxGkMkFd2nZ",
  "key37": "3ktyN8ijxULZvSyeiLdrViWjtdZUSrXMvRureJapUesNK3iBS31cYJJwnNfBNJM8EH7u5EpcnRdSeUJp2CiRvWcY",
  "key38": "3ZuroL9SVQnEJd7hL8nrZj2HZF78B1SqfZS1Y1ZoukxV4XdUpd2t8n6ByFNRMqQnq8oc4ZQuuVwcdZEMqGt3YWsS",
  "key39": "WXupV5S2btGxyM7r32oAjjvLbCCH3BrY6AkJPjmw75u2Ntui1byW9LzB8PWKkbE4HzAMWjetqbBeaZdEXVeK8HW",
  "key40": "5F3J4gB1J2a61naW8MhNaBNc6NLoCAjsbVudRwqwJ7nHHm9ECwUZcpR5KoHChNBag3rMwKMNbrfj5SXe28BwQXiV",
  "key41": "3YpnnH5THQ2DZhBEX4oVS57cPZwB3nUApqur3paQ8CzCzUuCHpNStMBUH2FEQhraXGzPVBVdxph9rPi6SA6dNFbB"
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
