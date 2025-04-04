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
    "3pW4FUYuq81Q6bCtyZQuiEGDP9n2uZmTfCrVuQkXQjTgdwsrSZEyM85mweNHQwNWJC6wsfTNtWMSmZ2tW7ZEihCV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iXcM1UEiFbgbdi54nJ8MgnHrKPa6moAJbjeeojE59LBx6mj7uWkb55FdCVxGavCichxwypoD8F57soeRgM9kzPu",
  "key1": "5jv7ehYjcuAkaGsxsYNx3Giq4SQAPE23ugaW8jAh8hgbL8M3CqvwxT6g9FLDMubnn9RMViijYR8vT796j9tX6QZ3",
  "key2": "2scwaKoaPZ9u6gBtqqpbETQFJgGLCiL4eHd78ZBz7TBjc5anpqQxwCppTyPnCdfDfwDfZgznXMFLUvia7Svz7bTe",
  "key3": "ad5xxemz4gxt7u1acVi7pxeXa145cBSd5BQLBXbfk3pyhdRnfxG7SN8eb6F7SVW7vJ1NjVgU3UcTs5dJcU53UTj",
  "key4": "3dLpkzdYjVkcNfCoYU5npxK3bR5f91jrq9ss2pdxjHx51JfbXcV33yrYKvDoXpnA7xiYPYhbKFQHoTXvraw24NWK",
  "key5": "26F6TofiPvK4Nm2Vt3LgceMkMGTSGt2f3yBvnhZf5FNyMkywAmnBTC5b7Ycim8rJTpmm7zyziGb7o26ACkZpfFrB",
  "key6": "4CReK6kaftNwcmiHjFvtQQuongPeSuNh2ifVTAytegMZ9Q8frtud6oAYB398UY77ttjDmhtDP8nJ6bpehzVzmo32",
  "key7": "DP8bFkyZXjszUzRC7hLYBmx1MiBbb8BKAUgDHXcK8rSbP1ZbYkWEXVKKb4B3RwRavkywwfKVZzXoKkrrefZ7z5J",
  "key8": "394A4gvTaXeFb1pjrXs8xjk8tZUyQQNj5GFLYEBY2StLyVPGgraJgNf9aRtU58xdQz3Qe7AnbHA4akZkZ5cKBG1g",
  "key9": "2yCU9SFVbXr7C1jeNChtSJXnqogi4BXZt6my3TDTfrjfzp7cUjVXnmUGFYoceFD4scdCzeEYCxbTPg4NPtNFrp2G",
  "key10": "4UtgbNZeBdpSsQdos5uYBqok2DBjo7R61WwVYLbqXscbXovDnGn72dmtMXzgkBRCjACVZQaEEZTueKjeyg1NLWGN",
  "key11": "5mNjZrxdsCqceYQCYzM8VqptkxXpAnDd9zwSQ1XXfxJsAGx54FYLqjyvSqrdweDQEXzBeThHW3a8HpgcMPoqFSNV",
  "key12": "4jeycHX8shS5Cv1ZycDFLwMopurGX7iC54DchZC7LvUGe4R7bGmtNoo5AGVp7ag53itHVKJAsFnpds2LUkRJLKgv",
  "key13": "hyu7UsViS5qvT2qpnBwXj9h96WL81g1HvFpuR9Avp8ugwJtjmKSaBdzrhw1WaEt2eWtgoD5rYwb26gvUk4DJAg7",
  "key14": "u3sJmh5QM2GyW8oYqELKp6jwDfJmxndXchGgj2ch18N8KXSSiM7TQk1d7XL1HgKDossg17SiAxAJ1zpxpwnkXM5",
  "key15": "3whpiuHDUVhcuPQA1tHeaZoR4jP4QmgFktCFw2VBenV9rwYBqgbij3Sxkw7hqr2cpWUCwjfetEzcXbRQrQufmrTC",
  "key16": "5URfkKHuftEHGL7fdNiJ7Nk2iqLxEoBHqWEWHxLBR8zgqp3JVZgtA16PxEkbqn41N5L63LLow9qzWy9WqFDKDr3Y",
  "key17": "2SYQXkvBsEQohmwWgNw9R2jYfe2pYvurUPzHs4WYnfVttwJATnSMG9qQMtoUdUGpRB9xq52m9vSxvSdFrERxYKcW",
  "key18": "3h7yQxNHyag4hc6ejqBqupVzJ3p488RDghAq9zixBFY8Yvx2aeoN9QcV1r6cgC1FUwrdm4RqMa7ibgiGqnmbYZfv",
  "key19": "4HH1xfRg8CsjaVgPBf2rjA6jM2paLEeRF2MSwupSz8wM1RGM8eB6zFbxn6JPCDwPRPAVmzqyjwmvWaMZJh5mPL6B",
  "key20": "3yfhWjQpMcCohL9FUD8Es6WfPvi3B6xEw65Fn1fdDj5prZFQ9w5J6EDYYXAk93YoU4mGBHZfrMNjCxmekvQQxdmx",
  "key21": "4wrMTcMKhYz8PmZJwbuek4mrCcTAzpmXezmNjneAbr7Cb7Ye5e6vkmAFQoNTQqZbbBHsZoDAbCVG1Mq3UnRBqd2M",
  "key22": "5PiFL4xEy398AVaihEqDZikr5G6na8vHFJ3KK7VHcN43zKXPeMu7QKMQJfd7aST2A7Q2UyL6E7d2n3FxYEdfeiou",
  "key23": "5KgneMSLBsaedbr3bCgYyrc43dZCY9qNzBrg2CdfHtYXX5S5BLoLf3Za3RgLQRTdW9UUDdaCKGmurhTKjbzAtqyP",
  "key24": "9nLCbj8mUfrwcQDVTs5E9vCZWvUaqpvWJeor5X3X8w9fzjSeVGnU77bzFq3Wi3TDapsh9YTebBtHtLJnjdWQSUg",
  "key25": "3Qddm1zofSyWXh1NP6jS6NK4vgmHHJD8g7xbRQDmT1PcFMcE3N3MkLe5cpEEc9LT3CEzjx72RaGZbhvPGSh6HyGG",
  "key26": "jGt2DKWiuyGFrDVKDHx6mt3zhxceDCirQhED7DQsWUV8jFb9uNZ9PwVBkoM1n82KjkShvgyX1yGJs5gU8zun1Ao",
  "key27": "3piRhiJqMHpT4R6ttyJxvfo7obHKi5vbbBNVrUXLhYpp2DSrh6S6HNNBr5h6SEM6o5xjqmgECeuopqe2xcQgcMo5",
  "key28": "4xLc3u1zoWWypqtNgvDhsvn94H7e6r1ew9EuJL8kCQRXi5FVTvYaJpp8LkToEoiQimxfEorVwY4VJwfYuGPnvRo2",
  "key29": "2TtQWx7Vi2oetYrDKE53C11z7ecJwF6pg1ScLvk5Qi5RbVncYMoJCQ5UjBxBK4RQVSEzmFHPmussrn1YN29DtKaP",
  "key30": "3NMAm7iMZtcRLr1uJxqT6hHdyeGxdQvPhiGWfyw6WQPf5vEnyazJreKMRizjeGLXnbKya55oFod6xEEMsUFCCNCK",
  "key31": "4S6tGyv2QFr51qoELGqPMVrsGJbeNLmGP6X1UCLcfPvvFbJ2U3evnqgCpqwpM3efAT2uUY5Y7X8jjvnHdynMYdkV",
  "key32": "Y2j2TRcX7i9FXeDYMWNRZRzKJ5mf4oE4x8D7Z6VuN1E4Vgz491uPbtb3hqyd4V9NwThBtJEJwcur1LSp2BUv6Kq",
  "key33": "2nZqaaxviwFXJfrCwEqV4zRcvJ9AqJNYDaqo8gLVasSNsUXsYBsPBzKa5o8aXaVBYqpas8WN9nYSkWyyqTn6Yjq7",
  "key34": "3gdz2EtmLRoPKPzqc4HtS9UwhUvWu3oX9k1VeSKShtXBQWaipCYjTqwK3S4zx58mSncMb3UTnaEcHRs9LoWnmzoe",
  "key35": "5ZRCyHZAnFqMFRUnybcH8BJzMMnB5LMMwZZ5f749ycUFJXNA8YhjjnhRRuUpaGMT5CJGnBpbrDHedvM8MAaJXmPG",
  "key36": "xfqoYsKkDZz5fnbHohy7V1FKnn1J4dQp64pTBifc9ENXEW7R9H9VGDAaHSsHNXZfaCWJr6PkYnCS3rf4ZTVVChD",
  "key37": "465fLQbzLUe5Y7ejSscM8iBZV55h1h6b93jMvhWw11rnNLdhxAoiKUfMMkmJVwnRPwqY54rT5bY1nd6cWGUD1YT3"
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
