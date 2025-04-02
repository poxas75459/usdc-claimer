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
    "24kGxtDWzygDY4hPN2sEyd5HBhSSng99bqR19xayYuSnofqKMHfS3YR6iGizdn1dZ1RLdWWERAZtk2r6HZn9Kwrv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HykiqKvuM9AAtuDQzmZnsxCkfiTBzXGghMtsHFpZQagqoe1qpWMJ4oCiQ3X3e8u2V8wmKid7ajjsL9Nti1Gfcav",
  "key1": "4x7rmTGuw4En2cs448ZVzumA2uaKwQJDDhvG4ALtefxsLCWSbUiJut4PfQme2zPgjDgWK1Q4TznUdJkFTv8Hh5nX",
  "key2": "4if86H7vk3wj1ZmEmZuFNikdGWmSU4TnNGAos5QTsfVUAiadd4Q4NrLSfBpxv1SqTWDPGsZ1mvCqpxUxHxXngqdN",
  "key3": "4vEJtqFW6o7VW54nsJxFFFu2gBFomQJMh47ZfhJbpbKoXYSfuW9JTmUoumhKGDf6QYGz9FAJiBR1oqUuBLSu4mu5",
  "key4": "2mEVP7RM2HE3rAxR5pThEb5nswXQhxdfsiygftV6djwnzxaaKrMRSQCWeRyzAUsxJMTdVsQr5FG58uxdiPdgbCkF",
  "key5": "2bePEU7r82HdfMFVmMPEAEJfh4rReiMGMVNMh9SK2nAJsoJMf6ks5raEndCgmUhPMXpQHqfJuWse9FrYYeVjR7Lk",
  "key6": "2RpRkE8QZuJA1XtXk9SNE5qpvyF5U8gSELpzHsH7bUjJBUK8pdiw7cMqgEKtauAFPkWqeaLnoR6Hv9nyN68Np8JQ",
  "key7": "75TZohBaNZd1wWbDyk7b79GhrVt8tqbtWL2RwJzPnBzTaBzbseSXVKbAexvFPtbVfCRs7cL3P9beSq8wYSqh4kS",
  "key8": "5g3W8U8g7mkyBhH8Xb15Si4zpqWmDsMm1arzWYVykLfrKG1P2Zi7xrfSLyrkuUN6rAMxjw7VkpebqQHG2ZAkrRAj",
  "key9": "46nMWqY8mDAFLixfp2hjQpTT43h4C9jzxBAtAMRF5AoZWn8kPrvQ3avHXJF4i8GVgH57Q11VSdN1Dsnuaw7KXt2S",
  "key10": "2Npxo3x49qEZ1odKaAsrX8VYp9UqdQPtHCN9E1fNiA2YUBdDXp5axCpGtezLKZSFAfyntz2iwhZZafB6FfXNe9YZ",
  "key11": "VNLoYXNVZZmyyNuv2tBLHRVVeBJVz6EGb9kuewD8R5qw5MQG7TWG9fk3eYHuTTqecdKm8Ey8WM69SJxV5Gg9Uwq",
  "key12": "2ot8kM8xoqdCHXLou15cBW7jgtdfeyga8G6n64fEsfpwMz5NSXC2sS82cNbkLDsFCBFs7zDqk6jm3GUBUUacM71E",
  "key13": "2RHiSYAc7m73vwDS4v2QAs9YCwZYTr3cR8sawnQ3hF3LTT8d9CqnRcEvzD4HzzpofbeLPt9nyABzy4Wso65LGDPz",
  "key14": "5dPUeXh5x9eptLfQgoJxkjNG7Ann2pWtLQcbpwmi8qnrHVpeP6bqBUNUtBhAkwZY85zRaNdouVz2UQXFWD6VfSMS",
  "key15": "2Q13ge7RB8JLMw9U27ZDU7ZXman93FusZVqsjAnpoDYEjy3ZgGhnYnJfpSTT4Noq82RaDezvEER7CaCeYf25r6zr",
  "key16": "4ennEE3AyipXPL1uLADanUX9KvFQfWitK8ppfvZ7upmrZMmNykdtzEMiRXJwNpKazY9PYvwKdStdkWma234cHxKL",
  "key17": "46KFnwduXPeoWy9dqTMpFB8pLgHueWrsLuMjwYp885dnrtaNs9m5bNhMR3tpyWmA6XY1vNdguo13VPGtw8EWzUsL",
  "key18": "5iea48KEiZm3wb1yfBaMT1suzZb37jE282arUtMk564Bm2BuDRDbSueTP34JLJCUDUxMH7yjchephu5og3pm1b3T",
  "key19": "21siS3aHanwCxRNFpwXy36u35ejLoon6yAQXb8pruYH3AANs23ajGnJwenRPsur1tvMKiWemtMo3UnKsUivu8PkW",
  "key20": "3hz8Wgp7wZRyxoJFC8P1nDccdWjCyaMMN7D4CqeWzpj8tMFBngeH9XHWcgoQbiQsaJbGjUJZSgSJFJssN8dxRRXE",
  "key21": "4wmVSWKEY7szyfMUm5Yp1BSjfuYLUrnmE1EqHp9HQaihocxckR3zuaRQ5YDufN87J6r7iBbuZskNgrbEQxxaeZWZ",
  "key22": "5ZxRkDBnQZVu7EkRmMwjAtWYpUVR9u7DKPDw4pS9YN8v4AGYVr2BHAwLfkFeMjLFDukoxh6z4RUMWuPq8tDA2LHu",
  "key23": "2m5KJuCVpmQfLoZ4gNeAf7PdshrvSsP89GYKyqWmAZaebJxuKs7zqhkzNioksneXgwYaTCy1PkJ5buPxA9XwHkvN",
  "key24": "5e64kJeLjjnjCxs8W8ep4K8puLXExvJjtahBJo9SDcDmfbq1YP9Wotbjda7S1ePLGJapnNhs9m1jHeXWcLr6pezm",
  "key25": "42cWQMEGELMDFnnAsL4QTuGhYZHfbYweapGNvvNMSj33dYURAyG5CFmjRK9gaQts89gUr7JQHiU4WHsDKKTpiH1t",
  "key26": "4zfu8mF9RxiyBue53E5cq31Do5QL17p48aKe566YZdHqwv637BjEhrNiQJ6HqW4nrtGzmSeUDav9tqUbbHTWdSPc",
  "key27": "3GkvQvbbZz9uP92SxYAdX3623qPNaE5zbZ6B6FqJeRgDmyHNmT9wvdjEvHZCWaAPTAzD26KGHVJdMAPtyivuFMTD",
  "key28": "3zLHGaWuGhANSHVtxM2tduYXEw88TRnvZRvujvUxWH5sQQwDE92Bb2hRR1t6XneZWSJDrGF5R2zE2jxPgdNBgE5C",
  "key29": "63rZ9FnVpHu6gnaovLLTNXReWmrpteNJ3Lb3QqbGagzPcJmpgMXjSMjpsMkws2K5ERn3Z9qZ41WswCdSvH46bNmp",
  "key30": "674FuDUZwvMEKGjhYxD6TtLKowVt65jq3RMmJ4FvpxnQQ5hmYbReMiAea1SMcWHMTYxSkbfLkvpHNJKVKxEbPvev",
  "key31": "3qmMzXLw2PGhuVPbsFcuVZAXRXMRMjoj61Wzk46d2zdFDj1C4MrKLeqozoR2xvTKaN3RUEBzKUbzgfN2ZW3y9hqT",
  "key32": "4QfjBj6qCHVU3Am1q6K6ktHbrE6pAeviEonDJrAMRHNpF4jmr49ndVWPqYMf5mjC4EVVfiAX933rdoF32zLgifHD",
  "key33": "3LNnfKoXghnT13rxuVvUkdCeGBL6kgvGf3qpSKqnH8uJ5GkLM55XjMbNYn4gUb4Ch76Hqry79UnzAq56g5J9RueW",
  "key34": "3LUT4jXgo15iGeSnXyUK1uBXm2PzHUSXq9EgEpmJfPvCrcBG88mvt2192tMHK8dQ5wGFCrSYjca3o44mr9UabU2r",
  "key35": "fwvxWdUrnLTAddfeifqJGvJe6YSW7TmmnYRwGidSAQeJ2P26pHjNQXd3iJJExG4rvLdwLW1fPtRWWi8HbA7Vn9m",
  "key36": "2JdRtxTuzT6hEpyFNt4jrbuBh3e9i4bqRCN7FnEQN1Lso7XKuV33rkXwv8VkUBej8hrS42w6N4uTPEbemeRPUKSy",
  "key37": "3oAafqYKSmymAHoh9q8SE3oVHQFvzGLqaMCnKuHoV8uTo9tWQKbF1wbGMtPREPzgs9Fds5puQrEFYAVbXPvSJmNc",
  "key38": "41dA8t17CgfrZ9j1XYXqFPHiBmuoPAoivaU4zx8f3LqLpoeAZP3WPYcEhNeVfK5MyPYC5L852j8nW8ZjoHmH1gqp",
  "key39": "4NX12tWaxgDX81K5Uzruk3XTq89Wu8BXBn3UZo8m8eDPuA7Lh8LaKXeTwRg4UDeNRBxgVRMzSM2m7EorDDcjB1oo",
  "key40": "dsvicsAaD2kcSVcZT6uSyDGByniB1ciCmqjnkJi2GPyvPha7HWnpDPjhnAxMtwiykNLnmjagdFoEQDYaLXiih3n",
  "key41": "tfc8mj1JuZu2k75Wrh1AmSQnxv1gGcvqmUx7CE9Z1uSuaerRQcUvgRTz9PgcChHuusQbKUuDpum5jYiTbbsLuP1",
  "key42": "28ADqjWMTgpfZfWdyVTAwJyJPWBMsBCyRfk1DE1GHzWbJZRV9zo1Xw1DM2vUVrg6VEAzv1ckRFgegx7B7hNUzvHP",
  "key43": "4c7oFzyip5vt9b21vZGYSxCtdNC8diJs81Q8wpHTEMyGSBa1GHF1eXNkPbvAdHWqgWq1h5LGCRGL73iTCBP2VFj",
  "key44": "3eMf74AeNZhs6AsM5K12Y5UA11fGiPK4P5qbVqmuu31Jkwb7MQCPQyesAw6MYkQ31JYu2dm65RHbKsd6hpKZCgF4"
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
