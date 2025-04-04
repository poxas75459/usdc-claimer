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
    "3bmu9VSm1Kba4EDEWaEr7vFgZRe8LvGWaF46z6P17YVF3e4CLAyNrkqtWpQ1UwTHaETHPidnushBq6DCMt2vUWih"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "g1qa8Ui9Wqu3SEBpWgaVfzvX2JAdr3AfuQjkSbbxuYSM9WPoTWDtd7ypLTEb3GKFH1osegaEzvmukrcZ2CgjVSv",
  "key1": "4g6mHqTHgu9JH2cx2cmekL7FQEP6osYG3jamYpDH6zaVdCFJXN5YcV2XQf7Gqe7aSZBo53zxxNom3qtKv7jtwsP4",
  "key2": "3SXnQn2dPTYGLWVYWBvpEzWbXQeN7RANw7korP8K848zWU3kyAPUYorAzKVQeW4cULvemW9br2jbkVkXWzejmh15",
  "key3": "592AN45fh2SK3YxUUvRWZXoWrfMJF3GUtsScz873BQb52esNN2Sz2Q8T4V5mU3XNz2ci53kNQso4bMZzRLkw15Ms",
  "key4": "dbGq81zSTH5fNETWhF8fydjHUMoG3UhXuu2wBcfMRtWJfgb7ZrwuZyu1LYUuc94iBwMUkGJjmgjAJ5EenHpCcKM",
  "key5": "5EM5JhaGNAnQjjnby1PGsbSQzGBdnVF3sbUBhQ1PfBVPptmenbY1uzvzSzryvChStAoZHhGeT4dzxCCJaM78E1hu",
  "key6": "i2Dq5c4atUmhEaihGFrsP4SjApz18YUy3d8AvtzB9r8gWGrckbuJZAfhBagn7D6yq4SGBAijzwsVrnVkzeD4PS3",
  "key7": "z4CkvoE4dahZ5QnLu3Xuf8pfgeYtRdagAXX34EshM6EzBoP5VCjiryuBqVxnEauCZLuz2wRZbKPn3QC4ekG8PjP",
  "key8": "4hXvXKxi3Jyn9LK3xp3WjdxarsaXXck1pj4hdeoNpUdVjFfBA3Ya5NdTJwdTJT2tyhEYSGPV38AYcAfAEKcbFCkh",
  "key9": "5JjyRgMtuqUTtab42SUx8nJpS1LoCyupfsyiWRahHFCqLgj3HhYZRvi9se6A8RcpwipUgs7Kj8yiSYJ43BDwDAKc",
  "key10": "4zWWjKUhwm1TJtT9YUJdhAzE3AjjYGvmmFh7U5jKk3rfPk8yySZzDBSKr3sSXem9LXwqA6gYjLpyinW5trJDG6J6",
  "key11": "5oJoZhCHEmCMYee9qenujEoubUVZ4bSvGw3XHXCydWHHubR1TV5Ak793BtgddMmtpH2K3sxAXtT7hXjr3eTnNW1u",
  "key12": "5prVTCg1qecpB6i3T64ay23VuPEsPucFFdsAr85U73tUsHKV54iHe64S2KC5G8t8ruqpcgtZF79jLVc3zQhb3tdb",
  "key13": "5goBXg8URTEQF6dQMsWgp1BBVR4tdTfNYyLoimSTcPjryGC6xtKTJSXm58n2Qw9JWzkimcpsYmjaczVM4nCZXZJk",
  "key14": "2MXbzV6R7WDcoKGaDYAw7Ex4JZsSgjbSrVqBoMS1cfQwTynwEUs6PdXZrDxi9QUq1HDhyi7tQTrMfsjE9ZZGktM5",
  "key15": "5xdf3ckUPooPAwbQeYXrm7eD2Fzct5B5T6oBoros3ayfcVsK4TXY9gYz7cD716JmUi867XPAe61GGCPVi3qpDjQU",
  "key16": "2bCJBbSJw77cqDSUAerudkKCruEiSjgXJpX1GYQy463jggFm7cGb22n7gaNgnEBn8naQVv3PLKjTSZCMbrgmAvM8",
  "key17": "5AYMh3xzxUMse1PT8RHHf15YhcH9BhMJQovTir87aj8ySMHFBzi5BPKyjgfivwGpsQChJd8Mhk2khF8V1C7EPrPS",
  "key18": "3mScToYwqHTVamhTeLQiRFfHuYnsRCuYowi7g9AxGPgWADksGEows5HsHGKuTopspCUMCRpWV3QbAodb2GVQ1GZh",
  "key19": "Lm66DrBhY9oTWTL66eD59JrngAEKNY3HMsNddjwPDLMeznnEBgQQH8ZykWftCnznadX9kbJ82as2Mb4AzR6N1zo",
  "key20": "kvsAwQF9Lw5Mh5SVqRFpyZdyUsYyUewg21gK43x4qnwARVmKUyf9wTcKUKt96Dehr3BY46mJenGQfvxcEiUNC2M",
  "key21": "4RPhSWNXyYdQjvipxASaBSTnBGPWzpasuMY5YSzc6cWsPDKFhqjghba5aF5ajQR3QASdFkTN5JBNzw73gMi4cRM4",
  "key22": "2szKnzHq7uXt8KghvN1mt2nzFLvwkk76kLs7SybW2DcFJwp6wZgssfdnxA3KiJXjj9L7fCPoXZMz1kDoKvp6UVMT",
  "key23": "48UkvN6QEm9TFLKLWRTzjXmgm8yLuAUutrEnxKUrZbSFwCsMMxBtp9hbmjbHkXhVoRgQdWks1WB5ykXXWFxscBPk",
  "key24": "2BYtkziBscxAt9cCB3P1decpcteYHGpDqj9boSpwCrc2L4zNu4Bkhi2ZoyXex6kijxoJH8yVMVVRM6vhyWtzom1R",
  "key25": "YpXZRV7xVzSNeyKXDziTK2CrdCT3TtRtMBKqHxNVKsnmtwf4rKWZiX6Mx2U1JE2UkytU1ZWdrcBNME7dRSBsni7",
  "key26": "3Fp1yQpwQ49RfUz5rW74c9K5Q7PTMKNCLe5xoYBvWK4RrFc4A7J5Uja3Z4mDtFAMZX3m4CMs7f2qhcL7JxBNLQVr",
  "key27": "sxy2CoW3GvW6QZ8KWNx2TtYkEV3mSvnuEughcypeCDjGEmoqe53xSas7Sh47bVMf2DRtmHfE2ARfFy1kGz5Eoo4",
  "key28": "4PLdCwPGWNNdHHHjeCitEWoQZa1Proot75LEAmKbT15UuLLAw9K2f4mSm9KqLHJ7PJigNbHabapaLawWQ7K8QnxZ",
  "key29": "zrvEbbacBrCn92bdBGzHEtAvLP47M1fRRExKeLnRhjdojQSyffW1mEXn4shmpk2Z1GkaCPuxMGfhSMNLQKxBwxK",
  "key30": "2dJEN3EKJhVRo351N2togk7bRmtMLUkDdC9C86zzs4YG6BPme4fhvJraEdRS8aaFjvnfFSHXUhMrQQkvvEnQUdEY",
  "key31": "5KvTxUtenZov2rm19YPUu5JBGcS3dBYjqwXw7xmtLSi5xLD5e5Rk9kvWGcvfnwXKTJWBrjucsf2RRg18XCzRwBk7",
  "key32": "34JtBSTAc9aW1m2UUmghPpKB4QJMmLEo1aZ3QPsne13WB9yjBgVq15AKhnSEdTsX1toxfNTTd6PNVumxDRPj6WWQ",
  "key33": "4uNr2HtQ1YKmqfG8HtHhDz6pTMUPF2C56YgdghW7BdtVYZZJFLdwgjcCqCDWYsgtf3xe49q3mjpXT2s6mKbJmYw4",
  "key34": "3U3HanjoW8fYnP3ohjS2mXqGKNsXXhTdWZRBmHwcC3pGYU1QwWtKYTpEW3xfxqTrjzvgf7K2f7AvP8fS1Wsb4Tyi",
  "key35": "4uvprEVVfWTSTon79vqsf4bjB4FaENT1BW95ZdhpasTFUqKu9ogVBvkrUHGtFL8JRBYbf7ebyA7WEcrHF2qKxrc7",
  "key36": "5HLXuuFNsSZC86WR1whZ7zQJwyQ69LyNnKErRp3ptWPiNsVx1jdmCCs9UzWJjHioGmuhsQvtNXqJzSMDVGVKYdWh",
  "key37": "4kfpZ79XPAbuqdNBMaewmDm54fa3GCDJKQiaLGhesa6jKrGhVSUCAzpg2va6Fh252w1wfoGd6LnSRNTRqNSebCAC",
  "key38": "3rFvAC3CfFs3hxnmNSeo54P7aokzVdCV6b6pLTULDk6UqfmATnDMaEF1higPAJd6WgYkkGYUCwBEjD7xr9bAM8ak",
  "key39": "5FYBtuhFM7991bJgHEedWKo5uHqNbFDtEwknsVkDKPmkFJA4GFzV6eYSpngXgwh39iHJkgmXL3HNAz46B67Hf9wD",
  "key40": "5LyqvPJL8BqistgckQyvzMq2teayCrTakdXoFjMmKEmCeVrNTTG9UEA1P1MuhB4yKz9VuEMMm3LFppxb7v3NVvoH",
  "key41": "2L8jRc5JWcKgUGVsRLQZZg9ihe2oh4eayLezqERdpnngY4shXz7qtY1NehPK9sgLM4gKe4kqn7NCxp2M6mWTYwfP",
  "key42": "4ZERcRCDi1DzM8i8uKGmicyoMXDZLu8puxnxem684n2THsoKC23SAccZDZnWR2t5BcgUJs2kAfkscGTAsnSQvazG",
  "key43": "2FahMYwFTht3WaZ27sNxCVHWhyD2tt5WsDB2K2qqPBzyEneVAti4M41KpkKtyZhUqoKAUBArBNKJu5SW4UMcY4rA",
  "key44": "2KNVgFVWU6nqs8s9xK217ZFb3Etz6yaJbChcesfw6eXpHcmL9sSzxp7roy3pobi2LmSmrwdZfrsu9ehoTgbuzSUj",
  "key45": "2Q1M1h7WgLm5dvQsUEiJuffBo4q99mRrTR1uY7cgxKu4mc7JzjQT5ETCMh9pkjLFQqtCtDQTmGAXiYqNiUN5sDWz",
  "key46": "62inPxDY2pboPTeW3ZU298hsduDp71GLjegm72uqcy2uc5g9h6SXAEwxaXNBPizB93TbGjMFo2Qn5Wt9hPgHsVmJ",
  "key47": "2e5Mq77ud3aij1hMm2ehuRxz22v5en53Fjq5AzKN3nqPZRhqMjX4vxXgxi14Dz7rxtubaRLLtHC9GiMAtquRFKK6",
  "key48": "5PZbCudDJK5a52cPkepUBiGaA4xSeeTQ46DSi9GgWfbE4dNxiLSwnVExF1nreMqaZaTxDpxSUnK4Zj5qAZCj7ggA"
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
