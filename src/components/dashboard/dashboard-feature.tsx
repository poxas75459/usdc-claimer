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
    "EFUCr6D5NJ4XJdBSuhD9vcTEupMvdMAXrHRW7nrV3mKygoqLApubznZq9NkeakM1QSAU8anyXoHyPs3rkDQc8je"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3k7T2cW3stphNoHphwYP8LsA82UFssmWRXazs7xtUmSaYXaWPwEjbynQYy9X5Ux21HuvVa1iE3z6X7eSfJYT3oxB",
  "key1": "5TaTBXzKqmeyy7YCUm164oPpLvvsPgoPbpCiu59T1NezGnM7njeRbHoQaA9rLQyv5EmhAjf6ybUruJA6ZtK232sb",
  "key2": "4fqiinCSymcxfq5fHygny5horNNmWQ7eTGyamC6F3RYSDtHJXy7AfKXQQ5X4R3sUEs78oyuBPkb2wfojPf9WrrXi",
  "key3": "nNtmj6bJrjYBC4nLvtE2Tbbu4497LWdgNRAUqnbHYTC3hX6tWr7N8DdNbdFuCYSA6ppf4MKzth5XCqtqjCBtSLe",
  "key4": "5C5tYBQ8SPm5M6aeYemAZNnRr54pAKaCz3abBHdLZyottdLCpcvuWMUb4fLWtBq5g9zJPF6Q7yQ6iW2Qb2jnwpi3",
  "key5": "2zY9LeM1ktyDSbVYM1DDbJvHASc4HCEDcJ7NnmF6NK5bgAu4pTxNNLcqV6VV79Xw4oDxADiwaCR6ti1m5iPRpsjm",
  "key6": "2tvo3RkvTuqVHXLzTYSgW3CR9yXYEysRzLK5P3mbPpL28v1CsiKb45pE1HcuiPi6URHUKhYZ2ZKaFZSJCSDyXRFm",
  "key7": "337dGui83jQfDXtRr2XaMvXBPw77QneBF1wqGraiJB3w6wibNcEkaoXAMwRodepSPPKvkEidE2kG8DTDoFp7Horb",
  "key8": "4a6YhahNHQwc62ofT4CUgYphPZBG8TsFdnsBgBDwaCa6Sd7mJAJ4F3sm8zNvYht9oseWs9LGtJfzNLotEG7Y8Z3B",
  "key9": "3czfBiXGq8vzDWbnhk9TFifaajLuppFJHEUG7WNH1t2CTeH8vfo9iX6FTF1cmvhMEWbrejWqmt4RuisbyH55ZPBk",
  "key10": "2g4F1rKqV8KaGzs2ShHf5ibuTXpC7Vo4z9di9GTYbv5x4GsMV2qySfLB3qSpe8UYPDfaivHmPCzMRW3ayyJd47S3",
  "key11": "CauJH6g7T9EA36affv9BGj7tH5qXRB7QBjntqpUJo4gkbB18BJozRBFBC4U1VYCuHAxcYB8WE6EySHFA2kJ1nec",
  "key12": "3yXu1vqY5XTTnruNtZiCxfoNpXPkhiEDYB4yYauQCuUQcag2ZpZftCc6fkFMdw3HzfmPBHED41Y9vnFchjaVMti8",
  "key13": "3HKGV1xthyM9EJyFott2p9U8kqLaUN3PY4z4xz6jJBgWKfmfB32MN33fdjiRS1jMtCspRY63rF8SjcYBvji9ZaDJ",
  "key14": "34zcp3Qdm6Lcs7DPgKSZFPwQiaace9ZEWKtdP4AmfCsbwY89XgKnLU5vfSWm91p9d8915JBuajp76GN4u3qX5TQc",
  "key15": "vcPwRAQgn7iwf2jqGuhAB5qiHqwHKkEZvd57h6H9Kzo4a7srGJvRmYKvBF95fWUWcdhKXFzRHvHeoJN9omVywz2",
  "key16": "29qYx5ewSfqAeb8eoAaj5CpAn5cGqcNfFgtRhSGsYNtVBwtYgzVGmKsS6zVUNRMreyRnRC9RqebHgKAqdUd2K3Ne",
  "key17": "4i91gguABzqZDdELS9EgpEMf5f3jKMsU9yYHhoM9pGYSZn7nHHn7FRHnU5h469evmZjAVajYrQfaakPRQbfM9Fkn",
  "key18": "3ER4t5HF3uz3ea3gvcb3eFDaGCxgXHL3Vq39BWaCdESM6RQuuSJot9W7JQmFo5ETjDECpBZu99vf8CvssrgioMBQ",
  "key19": "3R5rbKR3DrDcXXK9NZmW85SmT7YRBGr6n1x8FsKmXpk3LJBDh8PnBcx4ZRFV9Z3y4WgcbdtWc1xqCrdxwEhcFeiN",
  "key20": "2nUNA2fKCcLeFNqCEJAiTpG5mg48Hxh61XRU5AcseXFTWG3fCEyLdGUVZD9CKfxFVk23J1bojkmZLCz1QWuUVqK",
  "key21": "4UGEa27Nwos8FZvdcx6HnC2m8nXzWWXP31xfLEddX4GK8y7ZVofQeCtfHbGuQv5K169SU4h7GYwMu939KmwrVcmc",
  "key22": "5MHzJivPn7jmrmpoyR5Df8Hh8cqgsPxTNh5ShtAahSJiUdcmV4KpbRoYQE8oen8FKKCoaVb5C7Ncq8gqMqRDgsG6",
  "key23": "47u94Uay7uEXBxq75qjTLYkWVYQpWJSxnNXMP4v3DBBomRssSnzEYC7VfVgA6jkvdiTAYEQEKcVnKT6E2AWdWCZc",
  "key24": "2dzummCE89B9Vxy9B9prWGedvM7dVqGEZG6cG1x72JvjsA24T3hezbXD5cSsb67yR6fatYgakXCe5yDP6v1sExU9",
  "key25": "75kY31asjqSGJChViNuwv5xHDp5vTTZGSa3rLkmc4MEZEvYLzNXRkQADCLyrGBB1Mm5o7kRRmFERasjzNfMHFv7",
  "key26": "58AARbgRP8X2fMunH3dvhFUEurmcj4phFXwk7aAUArcczPfuV6gP9EdPjWarR7rHEmwiGdmAx6parEbwaWFtTM9i",
  "key27": "5Fi8MM2bWW5AmBWoikENf1pgms7udV9wNcan9oLCGVrcezubZM8uNmPRCUcUynGwyiktCPcXHJM55zxky8bXVPZM",
  "key28": "Fxbf8bynEYccX6FsuYzZEDnHUUDViwWpuiHVycYHHEsrxWcjyNKHcXdDB7sc1LPt8kPFN3pecvPxVjN9RdQGdUw",
  "key29": "3UAnBR8kkEYZfUhPVCQeJyBAPEwmPVEXi6Vjz6DdfX8Skd9kZ2P6KKST33DmqiUdAGqZFp567PoHUooHYepeMMwD",
  "key30": "3p8ZExRGaJubqUsWcNFfkN5KVkWW4NDY6EvSunjt2mdDLCxnDnibR5VuaYxWTtvPSNcvveADXwC4eQyL4HMmWaba",
  "key31": "3cbtxEi89fKTgBd7vu3W7ANoGJ1HaCBiBUh5WYqNNqToP2BFfhpEjo3p7wCMJnQF6Fa2aB7DPnTtytH3F88mfm3p",
  "key32": "53egMNqDaFo2JnJp57xzCCLxfN5zS7JVB6QM6QacVFr74vRVmCDeUfFBTTwEJaAJyQHXswcMzv7832aqXwP5F5AQ",
  "key33": "3W3GR9x2FDxJafeCE4eS1ey18Bi2dtyP16XXrMBQTjhKTJeQ4Yfqn9GjMZ8Wf6j1SseQUd9QQiZZFFZNvYzPSpY",
  "key34": "28zFV2jamJ8qwSCoh8DGkkKvqvFiE8d889oTVLAMw3arTzQUfTWVR2fVb8KWjpeG36X8NgCkZgZUwyvkwmt4HgTt",
  "key35": "3eePFXjdvCzReBadHDy84eSiGchMhGDGbYiyX1SgZ29h1K5FRM4q6f1qy9jG8SqXtCyzZe4Nk5S1sGks3RQK4X5v",
  "key36": "mkD1DcSzxS8b2t7pXZwxQgnJDToSqvczyh9ehHwkJiDLdLpS2rCt3j5vNtuD4j6z53ENVJGF4tmbuEWTteFHYaU",
  "key37": "5rpW2dMWJRpDPEn8fFMwzzb3dXXTMo9LwZm7sSFCDdkh6zsHRXHDAd3SMCvwVJszT95yDKty52chngF9xq6WXNjp",
  "key38": "5U9UFgN3FKg4kTabjKkMxdpDqYUYT8sUQS7xvnyFfFYxCNZ1SySV9TW4g5qtyjHRQzQ7dsoLeZjBf9nnHfBCY7G5",
  "key39": "4nBTv8XRSX6MtuHYpRbZegnn5v7ofUeNj6FPuUzg91GQgWsCEzR1BxCMEnJjfmg8Ux5m5emns9CPLY54MCybzF84",
  "key40": "46kpW9tt7jBTvEEUSQodjFnjjYdPQiQBHM4SqHbUUMPZLVjNBZWLHLGMdkq98fh1iY9T2VTsZohuTMtBAYqXb47w",
  "key41": "4ZDYQz2paugHJP5femytpmECBcMGVkrRCvur4E92DuV9bu3Dffcxuwsj1QP1S47Unofp6naTpxJNxKJA5ftc62Ej",
  "key42": "4QGLU6bEcfpm3zA4SRptRAWG1o5Z6DEZSfmNRYF7P6hAAeaRQDrnp13azpVgkFMq1hDPV1GoXuZac9d6FzSWKG5z",
  "key43": "39NcLU7MQpX7fjnL2vwYMyfvFUMTJZw5Mpimh5u1Z1eDGWfChunpR7GFKqBxxF4FDmS9Fj1ovKvykEhzbPgwzK9D"
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
