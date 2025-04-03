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
    "2cgSouGmvwdNLaeLMh53Qwfvqg3V4oyKgtVB7EURUUWSqAJG4CGo2sYeGnMp5CKsZWoQkAukdzmtSuH4WmRxBdw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DeZpSkiksshL5nVaYtywA9LAkaaBSDLopwm17btnLDCuJGNWjhW88Bnh2hszasnKNExvqgByQPpidNHPREe5hzc",
  "key1": "2gnSnogD95qBjSYXnhxmqphHtbSEzZaJFumsAbHn27hLhU29TjZbvMFXGAycfwYNAWQdDcHZx9oTMMb9DCXoozcH",
  "key2": "5jmWTYmq7YY9eEHXoDXbPNiSgR2yGrijVAKbxvAosBJV2xoNmRtLtn6wx7Pz3xj8dkjTg8uPensHPzVF3qjZinwy",
  "key3": "3GGPj2za1zjA8h2dgV6RGkDG8EaMteBxWctJL7niGGGjamFTCJSKo9Uj4LQwyJaWpAQATkcSnXAyfMsuoay9tAit",
  "key4": "o3ZZsrhksypfzEh1nfu7aLLRZZnhLAAddZnJRYcwzMqKbioXi5NHnFq4btPv9s6HEZ9Za2vvxCnBvz3oTHy6w93",
  "key5": "3hRVJ4TjuSNzfRB837d7w8dve1PCzhuDZ9yHiFmLr3m5ekvxSRxAWZcv1a8UUyybNWZC8kQdhM5xtjii23USCqq9",
  "key6": "UX6YpigsPXJ54zBs5VkRRgmBTEdiTpvMgycvP4fMhY7P7pLY9C9HbEpPBpMvzZNgJN3ooET9b2wwk63n5d8E4UY",
  "key7": "vkSnT6A53q92LJgVTAuxGYP6hrFXmuHgfrHy2adKqYDK5PzXyXkjmnqourY6ApxvQ4r59fz6XmmcK6k66NVKDZ1",
  "key8": "2haabFv5aerdFkDsNTejepi5Wv5QtSa6sk6EzdYogoPXBoQH2cokP4TngrpLssekTNXKatWYnhRDNqHPHZTyMtWg",
  "key9": "5THo2HgwbWJsgVuxYcojL3pwRk7vhXwHN3R1vvkYKvwzCrgwE3KQncK45pwZTg9hYMRqzpYwzb5C9EhXGcQ1w9Sp",
  "key10": "4zMKiBgPL2M5fV9BCEcSkzu37NFCvhNDcKmXNwdLeoPMCiUukgGdwigAFuXmw6yGWuK3WMBuVVx7dNfWFwHf76nG",
  "key11": "4EVEzqMjw54AmUMhjUzREm9S1aTWtHALDteSBW6XGbDtKHt5ZDPWPbuhNnwtFZd19KcfkXeTuFb9fK26CXaaDzep",
  "key12": "5Hebxq3247Uz7w9rGvinQrUMs8evgXqACC7wm1CMVn8dVTUidiRpHJv4RjE8vq8AUKrm1SJD9V1rPTBtubmJfDmh",
  "key13": "4KzGCfCLHzd47PfjeKEBVT4NUUBghJmeo7NGjp82jNYta2mShLof3dtBtuMTa27uyZqMLGELypoAk1p3zdowKZk5",
  "key14": "bjdRcnvMJgPRKwU2fsf6pDzZWxZKNAgA3J5b3iGpEFxtttxh133WCEzrx1Uvnk8YwEgixq5sfqkwAaY1M4H8Jvq",
  "key15": "4c3e49yVMNVykD3jhzLwAdzRr1YzgzvqizBBLKnrMLwX5BN3r7oyYamriPAaSABTq9X9q5vLHsnjWPRrgiMXm1yP",
  "key16": "3452wBwqQJQrGr5bLDi3AeFJ5cba6DuWYwkemm2hsCyYyqMNUBZVA1erytUS8X2o8kBp7FuUHiU5xxi4SA789GSR",
  "key17": "2pwEvfqWz3Rn3k32qTYtjahfzBkDPaw3SkEsR8UaDuGCUfv2g6ZAcrVHj5dWtYRdjMB6Ey6ssEW5wbXLxfsw4k5g",
  "key18": "4ocChQzA3pToghou6XLtHYqpF6N5VSa51oEyJ8NMy7f5QMipdxSFftxKSoD7UmCeNouJJZmgyP6g1omq5BocyXze",
  "key19": "1Z84gti8Y7NccLWz65LFejSpDj83z3FzFi6Dk37zTD9iiEiNpuyQG8Wgwb5Gi8xt3SDtTmeWyjUcnLmFTgRtUNk",
  "key20": "2JA7aHoKg7r6UqnGmDoKB8VQcamhihBmMq2ifbQ7H1n2JvkXdhHfpjEswLdZn5thpgC9e9KnKYJnS93Au7PY4Gsr",
  "key21": "5xMFwQHWTPoputn8VZZqC5bm2z1bnouwzikEJYV6HSnJes1KqURXZmUygT1uUDNeG7WmiordP14Ri3F49X7NGiWx",
  "key22": "e2yPB7EhgPkKxiwpKbevjPQnA1QGBdpMzWXHKb5vb1NXXRDZKC9ugMgGyQ7kbbEnq56WnykNvwaF3pRMTsnLmbp",
  "key23": "4gwo8ZfMzuGaXhiMFDhBgzoeJQW1i9sXf1nHfErGajEqfLwBzhxXdg7Tpw2jQM6XKKu1BaNdSgacCLsJbxSsuHip",
  "key24": "33hirSwRyNWauMvQjtbEs3WHdkJf2hFqMVcSwBKh6HW1yDM5K3r7STzVC3isbAZdQQiHPXjG3YsFyydUSWBUjEsG",
  "key25": "3CSKfornSD2xWcHaWikssFHMdj4juVHKDNNp5TV76gDZ68D8FhFp66SYf9d19WATDKjjqTCVCgJytL4ZeG8YrLNV",
  "key26": "3ezcoifzqVnVxS8AAMiDR7D15yjfrhL1MAButTsz8QFrT4TQdsAPtZkyDKp5Ta6DSHF864XRwxUJWAwyWHyrcpRY",
  "key27": "nVYLAwMdrGYG8HwKCPpiKonuF5TA9oy8KynLvCMv6qVogTUMecQCrFaZgw5j5bxvxBcBAHyN4mgRGezfZjHeKGN",
  "key28": "4RBpRquS7uwpNw6RinPAWVWPT1cqDYgxzHjBMjqq9NipWeeZwbD6wL5GBtS8EDwgPUM3y9aRiFmfwUSJxuDJSecy",
  "key29": "3G2hKFvB6L9yZ5D5z7nbXnJJ8E6NDMZQXee6ip3MUk74cR1pYXyJAYnJVUiCyjAoNntbx3KKk6qGCcZgfv1eaCbq",
  "key30": "V4tv1jxz4Bh64DRwKXVhuEMH5yNZXZSKmHQCAfGfcAWhw43QCfYKRHtLapEBP4dj1R2Zbi8bcxYU8USieArEkBy",
  "key31": "3KorhaaghsBAuaDwtSj5Nbp8BwmPtfPb7igPSztsWLs67smTwF8rqRyiAZJ8XDM7jsVoHGN67VV3gvhJK3BK5WmG",
  "key32": "5uChVKdGLRyPVb3gJL56tsvwQWSjDW2eWYsSRcQ5sUX3twEpbR3DZXfSRavgSp4y1SDAoMCAv4Q5qYkLfgBipvqU",
  "key33": "4bFx8CAVLT2FLD1JbiWuKX3txMsSsiTmeid7n24P6QgLWw2ifWRhojXHkdk3VyVRB6HRsp3nuWTFpRbXuywtmcHN",
  "key34": "3Qa2mCVKAjTgwvicTcAkc345myZRMcvmuvqqJ6YUKXoV9dakdu4x1skYt9xgVZPV5Tn1xzGSnGbWXhmnbaFiBx59",
  "key35": "5xqjZSk2fT5KNC9h2Mz17qMnyVdLdwSdpHVVqNbpdtRw8eVHitV9C326ybMR9ym69nT7KTa8RaeJcghegJRnNAX3",
  "key36": "m68ipGaruUDD3L8HXiYim9aeZieEoPgvczsqdc8wcN1ecuaegELV51duyVPUKXiVBAZQGtQvPeaiYTdeoW1UA2h",
  "key37": "2b2VFGxuH2Rta87Pbi2v48mk2oRnoDPwK4777Q4dEZm1j4fxPFCZ4gsDz3PKKEAFSTr5sxGBiNwQwXheRNcEEtDw",
  "key38": "56RjkcoJhgJRxADETU8JE3svoSd9cXmDkSi1yYgcZLxCsj6MLaLxxxbZmxu7Qj7YrmgGWd3dvsTWnzDPRwqWKjf1",
  "key39": "2CRNJaNptbMJYLJBpkncDoNqFfiRdnz87cHm4XqQ6SqWBAVZhSaqFKt5beRtWFN7wQUW4Y1oMiTSEEs1kFay474U",
  "key40": "4WFt5F2WfRAdKLSu7sbrFbGe3LErD3Y8mmeCJ8LUeGMfVhsET7haXsqUjenp6qf3X1PYu29huxdveqrN3DG1bDR5",
  "key41": "267nSWLCD4Cm1NqknERwyLNU7217mtbcC2UWCibD63KCTciVX8FKwmgpdAVkR588gRV6aYNciHGztQQZKTzd6ZAf",
  "key42": "5HZ7zSUNo8LUNRPAtoxP7uHFd1uPNvmEwLQnW12WtxZ4uguXoeiTD5rrmwMoonkaqfJGFNouYihH9QFN5LLBeMRy",
  "key43": "3ocKFWvcqnxUMymban3H3arq6WVdz49eDnZRgKRw3DpeYfDFgWfi59uW9siERUCxGQSkqFQwGcQJiEVxns8B6E4A",
  "key44": "2khMEm1Vov5AwpgnMLBtQWj3PGyR3iakUzwZH5gtk7GgZ3ET7dHHRKutns3rNBUoJVrLjNyQ61YsdCtwp6dsh3rA",
  "key45": "UquiF3yrL9ZcQbNkLdARUdK2JxwWAorYENQN15SwGiG2ocqfZUSnz9cmTnmjrCvogxe9t4jqkFMn57jQPZuhquq",
  "key46": "2qmjkF8CavShGLZjLn2sGFLW5uzt1W6Y5ZTV13DPvfAiVsxA3Z4DK3bvJodJbWZS6vebUGayj9SnFRcDk2ZMybLz"
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
