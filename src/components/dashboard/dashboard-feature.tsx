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
    "46ZeqwnayGXHxJuHTL2XvL7qcYXPdPBnFiBKKjYG7yETWNsYSZvX5TovRYrQmVZ6CNWKz3gnoMjMvHucm1x7LikC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kK1NYUeAFqDBtMjT3RxVnsBJn5qpcY6keBN9moGx5N9rZn7JsforxMsZGKr3vqprRWTA2uqMnweMDA5PByfcKHv",
  "key1": "2v3LNTx4Ng8i811TvnZXKT8grTRuEGb8z65fgsodYSZkK1F8Nm758dpBcvz26zafbVYgGxWnTWiMjQCVNacZZYWz",
  "key2": "4BPqyr43hxHcg6CRGGuaMYEcvH5y588sSnKP4SqKFAiYqWkf7qqPe2rKu9uYsVSaqwukfLWS2Tm64t7BKTQhdg1w",
  "key3": "3gjWncZgrS2BB7gBcW6rPHqiB4ckoTYvEXzzzpvMyRzpCNwcaxyvSqjoL2HxwGovHgFaTBnFQUiG8cAduPE1j4Kx",
  "key4": "3v9A9uN5A6QvMsehEWzecUHK5cNQwuoYwNjfpudwEnufWp7uJbH1GUnXvGa8y1dQSbzPW3F7h7r5fHQrbLm6Gfpb",
  "key5": "2bq2bXShy1YtxwbbQmVsvDrC4LBSP5aK7srvawjrwqNx7EZDooRfiwXXEREsswRZGa4L66BLmpKKkx3Bd9kYiD9C",
  "key6": "2wvz54x2KidnQRdR1VskecxV2V3Yh4mG8aAAUFHwP6aWRnFWNMtseGyS9BqG7J41ZTJejpRLTiRWDqe2apMoYc8k",
  "key7": "51DNc4wsM13s4gb49FQPCMFhFnhSXnY12goxtKd4AZr28RUodvvsxK2tfChmH8cUXqAKCD18SegLE3vbHgPsmVA6",
  "key8": "dD1EF6zTE1CLYQSoxSN7f2uGr7HZMnjk1BVURQ5pgsCVBdjpiwpDu3Djspsk8VSAzHueKPGRwEaLTz4je9Z5npV",
  "key9": "2dMEmeAQtLUuJAmSgozkbjhnXSrPn1d4iPxsQezx3pqRVcHPpoXUUWDdSWFKwaq3ctNQ8a2o7TcqMVyb6jLCohFb",
  "key10": "5hw5QRY6wcArWXiPsZ5SurTCPGAfMN3QD1MeaTRhAB72pfvwyi7eigGaTu61xwdk76m4KXEHSaBSkjNrGhmcaGMo",
  "key11": "3jvYG2PKuTJedgd8mZF2fY8Co4AvNbdFVoP9tdkBuADFU7T266S4hALYABkzuneC2vkd4hfHUrpbD4juNzx3mu5j",
  "key12": "2mk77QhSiVeGjBYM9RKRdE39C9kyvDyZ8vXWiHvRPbbLZvcKi1CWqReEZgjWMUCeta5oUuXjxMs8mPUAPpc22E42",
  "key13": "2DNijKPoUuWMnkLAFy4aHVQow6AfM4PtvnWnAwpgFF8XMVX4aPWZEVTj5ZJc7AEWKEMuJ2z5ZhoA9ide7eSWF3Qi",
  "key14": "45T7Qb7ZTQieyVd1zPn18cxwjihB3354yLnXDzYYfHzok3XKETmJVqcgDrhkgYGas8NDCQK2RqfgwwSo41AgpQJu",
  "key15": "539EMfSqTW7UerPPBv593EBBjKCtJWvAHCRNBpzMmeSXkscBzm4GryjghWA3Uwr7F4cYhi8NGGyvLrrf7KFjCCay",
  "key16": "25B8u2Gk3d21D1bNXta426bcMdzxmLHKVrctdf42Yh983pRGM5GtKBL1CMF3Lid77iunmCm3qQWqsJ4Qxntd1g3s",
  "key17": "2eYVAjeD1eNog32hUwx8aeHgai8sQ89D64Uy9icq6utVcBdeU6JCNWnRAqy8NqUiDNLeB36UNtWdzNv4fUPR14bC",
  "key18": "2hsdgQKX2AiwoxHZj37RfigPyKtFeijsapde7GH8XFbHrj1UaBX1eemWJqQHBw52tgfhMzVmGSsPTsnVA87Rtcxa",
  "key19": "5A2LFcEG5YRxgf2eHxT53EgCRDRcnh3ju7N21253N3BHV1y9WPzz2n8tGww8zE9dfmQ3bZHYWxuM8qfyP31PqbyL",
  "key20": "PyRuSrRv7g48J8gTziuA9mPanrpLYFqAaNFHdmg8B95NxgvH3iVZJhmDYsmcBiYBGu5vgS3NjLN9UbNHtPuHZjY",
  "key21": "5EdYTdHkC9qkyvE6QbLZPvXwDBJrf8F1unPvPkvMWcnJ9M8f3gj875hSLxLn5kCyv9Q3r9kucx6yPUWahUt7V8zW",
  "key22": "vpbWxvVT5SMFiM6VJGNmiPc91ArUquchQPswoTDdSieejcWNziUiMp5NbVeEbGGgwQ2q4uwyMiwUpEddMT9r7RG",
  "key23": "3f7wTsMeZAJWJdkXvm78ZEy16vdkEBBPnM8vzhuAH8898QxUc56fyGmrPYWCvtxWYNsmABG7TzhXqyhjzJJzd5hA",
  "key24": "25u3UWjJvBPvrmjewspy61GgDuKwP1xqvWEJpYepcpobuFpCFVKxNoTWb3UxFm39jxhegjijjdoZg72GxKNuAjcM",
  "key25": "4Tu8qU5c1hWiSUSTpvAzwNh6PsWEnwpupYqPjB5A6o8yd5wFiLpWbcDiNVYZxUHp6utLjkpUhRd86D5SJ84Qvdna",
  "key26": "3TXKHRe7PjZNafyw8tB9wsngV7skMmvrbZjfGVWUdfLGoyrowKdtF7yzKwQoWRWJr688FqezMnGihKCrwsr7ta1H",
  "key27": "3mV35deZtiQERbFfzCewWSeBWixGubgmngRGrcyJoHCPaaXRNDdZYhWoYAJdReB7UQ2uMQuKTUom4NbjoaRG6uTu",
  "key28": "NzhzzakDFiKBEFobr4wUqedWH858YrKPmgSDjziU6UE9vfkMD9XT4dkU2yGBy4Mpcjke3CVDn83qkAnaNwQFWjW",
  "key29": "yJba6SsNPbJDzquEBed5LqdRZZeqrxFP1tvQcbkfExJyCK5VXH6bAKZWAxM1ZkTmZjTgS2otQGqLmVHFmLk2BM4",
  "key30": "35pyys8TC8Mfrn11wqnAR3ayBhbh2oT8Nzp3vDcmSEPLewMtBKq5ijqTVpNdVREntGwSiDWupCchqbh7R8JUpMd7",
  "key31": "4z5Vh6D5K58rxvdvdhq3ytY6PYwrgSHfSQMuoyBSWZhQMaNpXztNuc7Cng5dkS6Jj7gb1uNc3wji8h5hJzjg7FHb",
  "key32": "2nDGra4sff8p5QyasNfH2fHikceq6UEGAfM472KDaE4rHKvSBXdznyUtXBD96Q135cy7fz2JeoaFRsup95jsUWFJ",
  "key33": "3q9hoWMtp2y7CHwiKj1vWmCyFTE63FpgrESqzgAh2xNcX31MM8ijv1RYCGf49GhH1y8C6GjiQoUmq5LkfLY2n2be",
  "key34": "5kiBvjmGCrHMAbGYETXLcVeeNNGpPgLZRd4V66asuBk6HiPn2JVAV8SC1ad1FuLS7Y9V6bq8rg1rcWJYpTacgvn",
  "key35": "5MGQj7WJu2ejRT4FziZcr5RD25sxsHaMXieXN7hH5n3YDPirkpsFu5PJp4ytiPggKDcivnqBiWhvhjgvoQbqMudU",
  "key36": "3erpBJNus3qQ9Db5R7yrCGnZL8HnncWFNvmV1wjGDmtfSbfRWMPDAs2uy1eNVAJxcvZRTqLhk3AJ7qsW7ZWNht5z",
  "key37": "5F3LiGDYXa4fjhqUcKPnPjdbiZm2SS1jzoJN2HMUyUk2RB6CUuvERuJugRiAkzWj4azwV4sJ95jdVr24Gnu3eNLz",
  "key38": "2rn4WRpmGjdzNeywcAkREzeEQADXRA2MQFrrwW371hCHp4Jz2vsN4koxpQeJPeZPVdHkovMh1AXNsZ3LeCc2LS2s",
  "key39": "3Kz7FVMN5FddUxdbWPN7jCLV37d54WdJ4ZeVHzdoozAwgY4yTSDLo3KEQGtEPh7A77aynhu5MbckTMHdPVn5X1N9",
  "key40": "3DEY7hY6Zjg2UN6KQvs23qDBJjCHk2Qn3APccF4zgvKFxQfqvmwzmaBed8iiAkvZ3d4oLGXVMCpAkpxUegJGzZ4w",
  "key41": "27SG3GqKmZDRoQB3dr8ugtFrxADkDssAzDFiAncNkkuzwVDy7F9WhLGrrDvhrra8SCZULmWah5C3eV8u4gS3tJU7",
  "key42": "Z2tz2wkHtwwR1iQLQyQvysnKGLnk6Z3chTHejVPnXNJVsAK5Xt8Hwi5ZSqfSBEAwa1nLBUhwxsdncAEbHAhtL7T",
  "key43": "462W3AgamxdWo2E39uYNrd1XmBP422L7yhBxJz5zSRi5jtujecuqYFTx4HB4p8fWzi7gUu2qudxbtwpTpw1oCzkW",
  "key44": "4T2HRx8nRSsHckJRAbY5mFPRd9BVbhY8KDx7ftsJyEeWEc6Zr4uXcnshaUH7k5tHntTYfSHmc6gyPVd5eFUdJsHT",
  "key45": "3CX3jWDPhE9UvVLf1kDU9ESrRQZPPipyfgjbHNBGzXqA17sZT55AGKZLB1u7fdxmMW1FNhNgXgQbn4E6j5VxA8PT",
  "key46": "3SmGuHjdM6MPYWeGtnjT6d5XZYHJZseStdRW9u6ZJ5rGd6q8MgtoWr9rNdWQNhtSM9N1SESUP6RM9dd71enHN7VP",
  "key47": "5FQCEFFtD58AsAQNULPRDKrd7cxiWCNkiWMN93YUCvqwQAJVfRPgvt8Vg4VJaKqu6Y4xz5JqZTRrBEJWVuXuKKeT"
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
