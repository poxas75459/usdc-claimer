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
    "2bSrsDw99ycL38mZJk7BjWgXJ9DpU4tqtndF3UqL9dspxPLZ46tvzRQKV1q6BqRZKazV5XcWqjmjvTg3pYwMVyP7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32VdJH2Jr1wjjsx3Vs24etMZg7hjumQEPm5nsCM9WJ52qgkRQ2EMrbZtPy9fEJ3TGxkKLtCYotLA5WnpXKMpLuGE",
  "key1": "3NaGcZmgu9ASYWTr4Cyek3mzT9w55s3cYjqzZPSjTUGgphJWad7THzKhy43GXCW1Tk4qciQewTvzkVus3nuJcYX6",
  "key2": "4LW4Q447VGvMhTNipGMtgpQdKoNzv8Bt8TnFFE6ePhQgDrr2iYh19QbF5d8z2USx4Lstr9WFvG6FpzQz2myQ5H2G",
  "key3": "5FtipNAazb3ybRUKxCZ9XgRULjdJiW77Humgtsuz8oVwMoYmsqhfVJzfgYxZRXmTNh787WN5ReeteGGtgvfyouoK",
  "key4": "31V93sXVeJ7EjQ5USiHPTET8s1brqpXq6FQRRpyM6G4Rc6XyMcpvC6T16iAkeeydE4nCdMKJ2Xv5aQmowu8qiHFM",
  "key5": "xGhq3yA3fX1KtxjBWjJcQreTAKDFWjsRdgiYZwU39wQD83tc6yBsUEHYE4Nyvmu8EE2oPihZv5QdmmQhxy6PqAk",
  "key6": "2F5noakhwTsfKe6NHhmbv8eeLHnZWNr46VvE2GHTVyKPntgy9iU92jEyFmMtdbeR7qnJBHAyGLMv19t4vHZPzGa5",
  "key7": "5A6hsS75UhsdBxCpPAHufKsk8pkFaApCUx4HEUk1StYndpJbwkXUmH9uV6N1Bi1DoD94GMs9KtPTbfifitKYu1Sp",
  "key8": "4qkJ4H9A3RUU9pVya4PbKtfV2Pvs2GNidh5iVR5geai1KfyS1QbKpgp8BDwNy8BkhsLJgTzBsvTSWcEgnLx2sNS3",
  "key9": "5ELNb5S74cCRQqvdcdGnxzPf6ygZN1LPcJjQ9iHCJG84c5USBUN7UDAGLccM1TBBwGnt31DDuSugpfnU9JcnRuEX",
  "key10": "42oLPbipP5c5jJGhAxi8yFrGLa4mGC4XL3MtuKjXYuU6TkUey51S8Tw7crn8Hee9XYGp6JHho9h5ozfcZLNAbkRx",
  "key11": "5ZqSHxj7U9mhjpn1mT3fa7MKcrfUGZmvPbuw936DxRtETE9b4ZscmQzQkFc9BBzKCMbYpmsnz16gxhYo1CWvMcrr",
  "key12": "4KLL7YxZKRhMURWCASfVPdQJsYdEeEu7YCznatj1qtxLdxTBUbEADm49iT4ZVGxKEGwKCKfhDdcanBX8B7WvsssR",
  "key13": "5791ogcE1VGBWWupVA8Phu51dJyG4T57Byc5ZvibfziwQymo63RK7w9MKit6J2VxLDeZ5CXn4vZyj99y5MazKjDr",
  "key14": "doNu7QH5sN6rnWghGNq7xtkoHMmEH72NWShBHvkvkX4AoMVG7B6yw1LaezEKfJHgAsZnHafHLjTjzBnypePoFGA",
  "key15": "5HE6mod9vGqsNA3znWkHMRJhJA5UzPtoABaFxVL7f6Kk9wo34muoWfhGNHCJZPGijwWWrmBvkyBiB2VZp7vq9L1S",
  "key16": "2jtqN8a5JX4UsEuRXU94etc5ncZzns1WGf9wwnx8tvEovyCtQ3BmSRdGCQK3RVVTFkmTrooSDbnvA8GhJtKYxTNo",
  "key17": "2YNtn6uAC3L9ozv6uugFCVvoGLiqpZeP3zVvgHCBmcnxaByAFHb7mjsBZQmiE1MZB7F8pWFCJQb8pQcyvnRCGkJ8",
  "key18": "2vGD53JPyBZ8WfoC942isAgekvCMuLvyqpzojGqF67ASvm3u9C6M84Bw88kmXLh3CLxRUQUTkyDRbVWuwVqAqhTg",
  "key19": "3CsCquAtjToWCNtc4NKmfaF3ncbybMeUswF1ELLCP6YDDZAaP96dRmo5fiC59ugbNgDPSoNakT3zBC47assQczca",
  "key20": "66aqJogHxkJWkEFu7yss29krjUqNvfVJhZ9J3d7uqPtCKCnh7r33f8qyDtjG1C81GX9qJnJXaYcabEE42Ww3kjhc",
  "key21": "4VBjmUNuCV1svcHcdd7UfuWyZSMtSyK6MboCbrAoFU9WSqbcrZUmZ5p6RhtNguzes5JpU79mXiViKgm18vbaCcC6",
  "key22": "jo9LheazexGWExWRGWXXm71XvbmLuxFsQX2zSiaXQkiKNUbmMw7ti3kyHQc9erVZytoR1YVuujDHzjVVtA4hQh8",
  "key23": "3uwBegZ4XJJD4QAqPKLgJAy4pdwgHP6uFr2nH6VuM2pFXkXDPZpTXkqnVFY1nyhCtmg72rQuM2WYmBM7CsiyG7zk",
  "key24": "57oG5bQ2PA8Cb6rhikKuuiewBgM1v42jnLmsBRygiVSDocoS8p8jUbnwSa8oWo9NSLPhFbGRuaDSSVEc8ARXGd2X",
  "key25": "5kDSABHV9VEhfMNSizYyvcZbEvxqnvhi1PMrFUBv5JhFP8Lnw2S8G7fhZR6GdMfh14GvYqJedUBg2jL31juH79XL",
  "key26": "2eumrNd6xUv41kd7HWwBBy4kcxM1hHWnGFcjWkWLL7YGiQTGrJpaYrnS2AmhQXaEugHUz1wZRvLkBAhgyRzMzvLd",
  "key27": "4ab9ftgMCaQ7qgDEdXmafZYeWcZLU8PZERhTcVdCsfubWcki8WQTvrrZh5fBN6knTrLpyCTLaScXVUkmzQCz68N7",
  "key28": "33xqLQbPuVA7FQfTvZX2iFsD8fpP5K9JHxg8DRgiRSXijMgYjyEPbmGtnamg3KipB5bVCn748dRXQJzNfexr68yS",
  "key29": "3kc9gNbFEsvSw4QGPppZcdE9gLp2F2QFyroQeWqgeZpAnU2CocZTV15gvj6sQX5tyXxYQRohFf46x9eane2kNDnV",
  "key30": "MFdG5ZzcLvPnePupD8CU35yeLkqUQrXiUKYSyhCa1uvJE9uctUa6N1rQXtHRfvtCe5vE33E1F34CgRUrQQDmApM",
  "key31": "4jn3pJnJungdXQXj9cVxem1kEmW3ECkivCXZDdtikvbQKrcsbTaybouNWXioG2o1qKGdpQeuLZHrbwmsfs1WFFpL",
  "key32": "32Nbidxv7o2xhVfjUBJUweE6rKkmV5sD3JQtbqrAceVz1BXYApJJijbtijKkTk3XfS5GJUr95sodVb4d8srWahzH",
  "key33": "3ZycqLtBezATtf4qfEJRHGVZxJ8Mh5ZX4LGHo4327GdNrh7xhhz9qKTgViMz5psCp6TmZb1RqXmaJD3RhDBrYWpp",
  "key34": "3htUQsWqhxeK3VHYpkTCsKApw7sEweDF42u4TuRRbXsB6Dix6FbwkBfhHRb7K1R1rfo2cLAteZPxcsAUi7JEhvjK",
  "key35": "4jDq3UKqwBAygVpjyszcdzoGQtH6TytMgW49ZtPMfMUb2SgCzRoveQiJ9ZBuHi5AayFuJJimqHCMPWxNe3TyFoEa",
  "key36": "2ZzQApSZALFLFyiwjx196Ak1L66LahMNFo5noLwMA6dPVBSNGMMirUwFWJjpAn2QzB9dzXeihVJcRFq581yYjjkx",
  "key37": "3pB8SdwuuqEzH281LksnVujrvR1FmWdmiNsRRJfdDr8gDqFZJysJChW21zReixUtVjnY9Sxm6duWvRwFjr3YPJxM",
  "key38": "4jUMZvba3vEp17K6tDVaeFDWwhk1zKjJ1EMnAidRWF7bAvk3E3Em3i5PHTL47SzmcCwbYV7LYSrsCcRQNsmrYXP9",
  "key39": "51yLsZe5npaAofuaPotLeTjSgyqX6y85aEsSv2AuF5ywSUBiVybQLUQbajSB48bTAvDd5hXMAYYqZs8o4JrAwVf8",
  "key40": "2i3BVH1gQj2w1QncsWsG2fxKYuYiZtYRwwCjVo4SnV7X6kMn27ZFj1WL1d7gseAyMqreESEbNTtCiJdZYmt2Cj6b",
  "key41": "XmFFJJnSUQ73FzPoXKmXqrJYvtiWjcz3M7sWUMU73CBfGvEzm6SQERxMAegRj872aJZ2FJFR58RphBAzxJhc2fa",
  "key42": "4fMAwcqS3XAFYSHgNAkcH2rJiiW73ZV26kRJNffxi6wHKoKttyZiY7cHSdhw8WMs5NFtSj9mKDuHKUXpEyuwYsTk",
  "key43": "p3rbjRgTS2CKnMnuM8kXR7oy33vEN65oPjyReGsPvCFSzkdqTx6SHCthii1Rwc1atjmwtsBeR62AiKiXG57rF2M",
  "key44": "3VSuZ5A6KWLsvxvsYb7gRqKNhTxdvRG2PBPX3v52PpeLQGheyq3bJVVwA6JFbqkY7N3VHzeSpEMPyVHhaNsauY8e"
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
