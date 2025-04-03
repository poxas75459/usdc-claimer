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
    "5aNUi9cMZnUfHj7BjFZDum43rna4fttny8gR8RvNRgLK3mxZwy1b26NYWvLBbf34Z6nhDTvFLHbJJDReQCdiajWD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25XgUzL33Ek7Nv9FXnNjzSuKnH7v9pXtHKhn8i2bS4VJmFPzh1foT9hAg3shs6QG9fRw9BiUAtscjSKcpiKXNQTB",
  "key1": "67AFop8BpGoi6dvh89DwQV5szhS7vuYKCJoxkqhb6pKA1KobDDjm4Tvezc5ACsgh448GBfFLNPRd5tbwUkS9yxSa",
  "key2": "eeYS6WPxkabkZZZqteTc4TdUTNnMfPmc5xinFuN18E99HzGT68KKzMuv24frctrahxZqieEeU5KhtYCNNzmboAF",
  "key3": "4aWWBpZmeAYMZAXEu2a7WPS6WkieVmGEF6tSRtkrnZRRoL8axb8D17Jooc7AX18BYcLbJ3ynqPWSFRuzmsegGr9z",
  "key4": "5Hbd5xbow6h4mAhoLCohWeCjqwwHKU1RRqAcJMdi5Ux5fEXkyfhjvBu7GoqEW1MABjL3RBvUvYbDUGbS2gSuob7b",
  "key5": "3e4dBjCrxYBNezf7SEd6EiaRBFf7bLnozKXjouBjw4o6RCunwos4RzTbqZrC5yRu6KN3FQEhXw9o5ASg9YSPK6Ly",
  "key6": "6ezGcNsxhn6pZUumJpi4AwUQrsjwmyhZ8ytTgRaDsekL8BQbG6rLbaddWHu4L14GgqfTMoQ9yEumcwczZxN8VLa",
  "key7": "4HHJZdD4Tc77G7QBeDb3vo2wRUYPpehmHHQyhCRkviHBDW2cj2pWLEshEKvgoWhyHWn5oKWE5y2kdUyvdaErKF27",
  "key8": "TknJuUuwQKpsv8LoM82eNJvuAzdVgTeQFR7A7z6rYt2FNa9ALLXyfmnUUSfMEGLSmAdgfKaUXcTJ559q65VAkrn",
  "key9": "3UCxBSAp2A6QrYzDxQm2VfB4pQiQx6CXectt49NxcJZQfpbga1uWhzwpGDUQqwvsredNa4qRSSYwsAqksfMeCkeS",
  "key10": "63FUmxZ9PcAfEc7UixcNhyhrrWfEqysM1SWGkTA6MpqURu2yJG3p5BhqACk8jqScB1Ms5ShxcTGnbKzXoYHRBFpc",
  "key11": "3qyvUYPKWDPs8zcRMxPpDRs1h5SaN3QLfkc6xdi6VGkzSqgwSuTpnTf6Syb9kA3rUuccHtW2kM4HV6c3Z7LNmKfU",
  "key12": "5k1wFVkbEQpn8FGiPYsRSwPyXyfExFjFVphtfcDYGwi82HAGhFX3mBYPQRjoiFm7aDrrKugEMPaxQ1LBXP5DoWyT",
  "key13": "4SdhMnHvw1ouWhXKdRKXdYRUCb1V5GPo49hCLyv1KqK9UmBEzRtCnL62wivSoNCHZ1WKtjsXzXpCtXnLMGJHfqEk",
  "key14": "5SMd9BzNoXwEdiGrHMggxujWCRWNScEZsMVpWezKGhj2PD4WPvWXPTSZU3LWHAiK9F2NPdqpA72rPkeTenHvjYMS",
  "key15": "2xAu5NznG6wdbWgzxUgPhhKrdDzymx3MwKvkiLgChHBXw3xQmeMB8nqbxqavo8gPoGjuhVFmWku4q5d36qsYDr9p",
  "key16": "5ReDED7PWTQg8fuyVuNsVCnq377CV6ESfYutsq1v45DonFjP3zefuD9KNNdTRxuGWQDYH543e4QcqBRYSCT2Xczn",
  "key17": "51gLjuxj1mWJ2ydpUtEm2M2DzYCtkACA2wsAzjQTiH4bWTnn5H5bHDVaMhAtSWSUsemY5DiUbghk4ZUThG7fGXSf",
  "key18": "3Y1nqtPotuTNCaknv6Y9rxwdBXNjF74VHzKGHFgFDdnDRVYgZHK8P7W75KbRqRuvR79QfVMYk5JTeeVnLUXy9Vax",
  "key19": "CN5GSw329P42wqcJGqs4mRRT5kNfH9fkBMNqc88Sv4cqSqQmD8nVSBXbwGs6wdjhtBJxLg6RNGxGDXNL235SBgd",
  "key20": "58pgwi6vsHwRLNy8nJcWBGAMRZAf11X6YpWLky2QhowaphjQhrjFH9sMo5eDhmqLeZMr84wrDejWqF4Yi7n9jjn9",
  "key21": "5K59NMbpDHFxTRoymXwbpH9tMdmKN1zhcVUpNDeWtQpgXZnomMf38UKeUyZ8EyPojWjp8QkuXXtbKB5oXzL4BEmY",
  "key22": "3mTCKUmXtcabbE1WPtbhWuACMJWsLWWzNC3y7kg8gBcwjTqoWYhpL4USmct3JpkcJoArR2BMWRzrvVb836LKGxVT",
  "key23": "4SEvAPbZGmKoXWNJ9R4tDL8zAzwqYM8PRNx6m7WTo5tzYAvcatp6Pv4NR9SDd6SEXcXQN9iASDWJoueB31EyzJTN",
  "key24": "fXgeQupNTgrWF4bwXVFG33qXewovQn4cmzCxfDmoUgQg5pUckuPJuPhipNqgrskuu9T7RXAH5BzbJHg2UkoD9WK",
  "key25": "2Mvtw7UxMfbPyX8666zQFk3VzywJx3pSot3ZxVPu1zgSTE49WiP8qd5ZPtcxRrvqxzE3k26stS2yzj5LWbTq9RYz",
  "key26": "4cnDs4MXHfN4szYvgfy17qCTbN2rKGBnQMDYDB2Pp6eMzXEniKa4pecsB86xJQXMHxqszdFQc4Dr9pcFh4nGqr9y",
  "key27": "5m3CppSKhVyrKuvMPTZWkUVR3bKwBVZhAgGj4pXFYvTdkukMqvCkJzafhfjDx9uBBAkHAVx8xTS9AFgHTSWpv5mc",
  "key28": "4Z6bnTPdNHAbtksjoRHjmCgJjEJr8Kqv9dLuDKWXuAXhch2aPeMLpuckot7hCxEWFQBzjmPDYSN94CstrqJ9n231",
  "key29": "KPkPTXePjaWedKxaqQsQZcLHpSuzjfMV37Srx2Zvq3ati611Qt2TZTsTVZcVVfjkwmU28Wr5ZNGp93UKWXefQqc",
  "key30": "2mc7uGQzCc3tJW9LhYtTJWEEcVTdjRvbyvYeVcFXQChhF64PbHfHosCqresGvGAfjDLwWdVJczxWJZJb4SdrwNNm",
  "key31": "5d32WMvPvPT4KpsriDzzRCfhDz7GBkuCw64WWV8SkKxxZizAJBtY4Bar6x8pfhDGK45KmLWsH5kAa9EV1t2hMVdk",
  "key32": "39aJfLsNMbsuWEkSXJ8YbcTfP3avxSorP2vWEcCUJMc2NX3uhwW6MQSzRXiven1qzDa4CoXmU5PBBFYQNGoKTmJx",
  "key33": "5MUzNwu8osCWTF7T18CCz2dJ71fGnM8U1dMKeJz8HtioNgfcAFG444y3yjnWNREfcRzo53K1qdNU44uxv4j7Zrzh",
  "key34": "53pqyeH47EBrswuXZbAhfRNnVr76n7qyMb5KbnMDhDQFVJotm6bz7EEQbGvFNVMTMUg1aE7FWw2d5pn52yaU9pJt",
  "key35": "W3BVd5giGWzjMGtcP3jj9KVMgFEbyrsuNBrAqjS3uW7WirA9yVWG6wujBkFP6k5Prcs44iZLxuJqeAeAxeUNpzH",
  "key36": "3piPTaV53cpe5MjhiqybWSzrv4Q63EicWt8xq7uzvfNYo5HmjELPojBZjp2LcvzBZFjSbFxtbsaYKBSV696z1GgX",
  "key37": "2NXdZaTFb3YJHg3ua9N6bNto4BpC9NJNHq5mgwZFBNNYwowDoFJmfPvN9bGw9YRG8THZEz7qthUP3njdaHXjdak4",
  "key38": "5UBDfE7KRYEynA7Ptweggzod2YFyUwThdTfcqTtacJ3PQCfbDscojrkQJSu8H1pRX6RpgtQUN9e61r2xPWasHhBh",
  "key39": "5TzAq72BLSLdLQ2Aqa2ZnTcQ6eSP5t3ZtRE2RbvzT35ZXJojAkJHBzj4okYKCHDsi6vhLivuR49KtwyQLbCLuPmX",
  "key40": "3PhDjcsXTzcQpzRw5VWKpJX4LbwMkn3Kq4yBLMb6hwSPUAefxZDFPyC7ntK7ZfhLtAXhgWUtfgckHDyiU13bkc5G",
  "key41": "KcB61PpG4xzSuPNQFSF9sL4kBcdjiHuULy678No4VruYRUsVJx5DHNjnqq5kQZBRHukEoQ9Mi7f5pW9WAdLA3iv",
  "key42": "5oKb5YWNUNQZripCaeKKHT1afnzXCYKdcy4nknBTKaaowe3FmzYre2bexzqdMfiJabgaNMaJpDPgRYWTg45fYebq",
  "key43": "3mcibUqisSxwLQPRa13bWUTB8WJyk1gXiiGYf3MiymsW42akRiLv9gD7kkgzUGx5rkwhrFQThkVNN5RKSyEQEd1p",
  "key44": "2Txeq7QCesnfkjPy7wwLKDkV1mXBieq9abK32GedZ17y1hoQJbtCg9gScdSVFKZcLSP1aDpLAXVP8abv3kSg44tw"
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
