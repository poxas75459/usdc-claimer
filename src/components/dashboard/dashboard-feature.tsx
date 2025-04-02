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
    "3axnvkGszWwFu9X8KyAHHvhwPx2pvm8qmpoAWJcKGf3LXrfXbJkQSKW1FQGAX3RSCteRghoRfN1AUtvJraLcPtGB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dG7HYnmtg4Yi25UrpgUF11sj7dmbMC69HDEq1BmddEKaPm7WWDXWtWqXcF6EU2mjGwrTegv13z9sDCoT9LsCazs",
  "key1": "4wRPGJexwtxfKBmLiBPd8Tmq1TmGyH2DvNCW6Hwrctu45U6phTJhyszqD8YzCcuPbrTseQJszuW8kMyXFLcLHoPg",
  "key2": "4bNCcVTVoDwvcRfh62EEbrWQpDXzMcdbtf9a7GEu6ExgAsQqcCJd2wCJyaEV5m7cJSkMGXjjWv7cY74si9G8tJn9",
  "key3": "5gU6P8PLpehcSZY1dHwdk3r9hAjZgzr6DC7zx2L5sjUFRrNyE3GF2t69eruwxQsiKa6YJEwkiucinFKTir11t2Rv",
  "key4": "2XQPuLx8AP7Uf2ufHrRiB8YpexDGgrb8Vrx3gwNGZkMZY8YFdiz4nnboSYH66tmH8r3nC4pCsom7uuHaEyAfoGzc",
  "key5": "4TRGBwzZkErJZA8vNpxmMiiHnxr46XjzAXLhu6Zfod5kiwzsofLZL1qGr5CC684Yv22wXnLUmF7BPQwyqBLRmTPY",
  "key6": "61gGFjJob4ZXwxrxTCDmRmELNQnRkBQshq1YNQHvo7dgSi8HRbM1dnJA4wBJFpWdkRvSxR5mkmPNAVV17RedcL8o",
  "key7": "2kFKkPZ6pNxbQi9XV2QBzN2apvavbjeiq9cR3aa3nWC8477WAHBvbBbgB6QMGQEHtL9cZYzKzQ3ggedu68Znb5mT",
  "key8": "5SQyym58kafjNR3qTXrsbEQm2yujqDdjyAWTuMM1R5iY9dMvRCqt8wFKozxjgh6vowD3BCKnVQaY1fsMdzGMydWd",
  "key9": "BwWs9xDtkmRC94vswHewDWYVjyiELW7Tq8LMC9E4QYa6sEAcRLyDypw3wg9jaBA8zJSzDryJZdNuoFc5su9bztn",
  "key10": "szXqWpqhw6ukkiDmoTrQmHUU8CQ3J7unkTTFR484yfkDTihhD8L8QLSrzdbP6Yxnk1JZRfwJmkz6GnpqMD6Vysu",
  "key11": "3iEYaoddssxa2ksLH1WqC5FiAdtKC2dcXwVFHd2M3VfRpkKAKfoMFuyBctTpnnvLuhKeyq48rnBhz8r5ASLGf7Yo",
  "key12": "58HaTkHwVfbqTYDamV9MLkA6SMuFRrSnxEfqLdLgsco3NT2QLAMVZYoiKn9aPDT5FWmxD4dPHXSZbVwVUy32mASn",
  "key13": "5GrkYUhDNLqobugRiHGdJd7qmVGvNshNR4J3Te8webh3njwZ9EpjFb1r9ii5gGPEJGr4LxJ1KFXptSxXSEahvfgw",
  "key14": "5BKXNw2qHcmtrKDw65v8diTeV5YcBPBBDu5via8PmmVJAs41Asfonpu5G7PYncobLxL7hEh3pVLCrj4EXVVMnKCq",
  "key15": "3mcaJDnNYBzCd3Zd8uu5RcbccwUqEJH2zaQdfhrqyhi7hmf614epKS7HeLBso5xH79PKszWppFkcyXeSnamoJnRq",
  "key16": "RPK2msL6PyRdz8a3VJQeEcFzyr1Ez3MGwdrtY6FJWY9bsdYpRsp2NLuHpY6Sh8yoTFivJR7GQzDE29p2GU48DJc",
  "key17": "4yevdQw7Mcdy9YrRnjfzxHHwbtwkCuWM7ZMvXUFb2ppsgAX7PBxC1qmgp47b9PU9GPfQ547cbMhwAJKMRauKjSep",
  "key18": "4Mrgpzpdx4ZVyF2CRq5yU9dtRGKU4cWpYnprPv7Q3MRYTtuQd2XKVfKedhRXeamZjhv1h5LY3iMkVbCfL1Q43AVb",
  "key19": "5mUbA6J8LWsgzqmCoaboJjPoGzYPYADC6WWvB5vdFCHV7fqXjjWFjuHLJVZFG7a1MZvEQho8M5kFsriE7YAoit66",
  "key20": "4aNqGnx3knHyumFWA74iKqDLzQXkrJXCyKoyE3sTXjopCaknJugu4viU1DNbrJ2NJd8Gs7LjPu71bz9e2rMJuzCb",
  "key21": "2foAYgF7Pg6ax9VfwC6U6wdezi1XLxghdbmJGLL5DeXBGceKkXuLC63KCHsV7htXy3imio2qp23JeGDBSJXjUF1a",
  "key22": "2cZ11zm4jWzoCtYSBxfmfedgFcYZ7A5c41n6Do9uL1ufUJZKFxenMzdhd9nBLaKtTL76hcSQCMxZbUyFzwJYa8Nv",
  "key23": "2oR6v3RU5HgpcqRQuNqbVSTQLnHV3MJh532fAyRzDWm9mKPDcKCA2uKbHC3fc82QnYakxuovFVDT9eQ7gAMCkbru",
  "key24": "5mV6EjWsjg1nwUwBHXrD5TEjqMHUiwwiNe7RdUQX4TVzSUFQ4rb2Tj4CQmZrtuAbEHVEje9L7dhBQWsqYqBYpshM",
  "key25": "4DTgnbS1MJxDhyothfnkpsu8oTKXmypJn91qbxBcfCuGfdgaSvAo4d1bon1CunUHxgPULGDnPV216918JCCpso9Q",
  "key26": "37msV2TGUU8uuNex9C8F7Rqcv42tx2BsizpprY9ANNby1qtcMniemqrqHkf16CX6B6VR6P4ALYG3e8VBADvYTuQP",
  "key27": "44xs5RfMQw8pvGtx8xwjzrddd7n4jSgdKEpvCuG15ZSqU7nFpjsXcvDJcdjVhztSXXNUW3gPXoWSswQRwbK6etwt",
  "key28": "2ZjdRYY2H677zH9x7QetZu16EQ2PouaxM4SES18umBWzhQgx25cLN6YQ8Bzt3zzaWxi1JUFRzD6vyctrzM9eqKUU",
  "key29": "3J4xJbHptEn4nuGggT9pjLwmaBdTkmeAEKE7J4ouQr2qdyZGPFdZKgEUApWoFP5VAd5b7ebYoRXZpZRqRiMRgLgj",
  "key30": "3EvrPNwm6mHzPyCtT3LPDTcvz2ZMtqhhxX6bcCUBtW1rNVN6YprSx7KcFXZKypxWfV7G8Y4663a6eZzBWHNmJotj",
  "key31": "52CjQfket9xgjVYRgtTfadZDENeCGCJQXu7RVoxvMAMbuM479PhEaLGeZfxuRDB183EwkFBmKsjJCX6Y4d4LBsCS",
  "key32": "vwZTrtoai6pkzp7nby9LWCf6ZvNL9Vd1gzNhBcUVaoh6Z1J7pS2grdV1SoqUqLfhtDZhceUY3VpCaJfHmfu7cim",
  "key33": "48nbUZcwPyx17uWMYecY29JKbpBSjbD1Rx1cZJZMXCVdvnoifmcrZTcSd8MnBiYKYghX84cJspTHAXxMvoAZrMcK",
  "key34": "5oGufRNprBnJrVjinT4XhAdHE42sBxGm2DetYp317nEFz9HLVc6XbBFmLHnH3JVyAdwJtZhckV7ugmmN5wK8nK3y",
  "key35": "4CzgUjK9Pyku5Hka8kGgikRKTu88RuZTiguqAeTHe8BcoUd7DZf8yj7W4JBe8oop5wvyLNBSHcLTPbm1wLPEpS3c",
  "key36": "24k4WyeqU4LHVEeB3M8Q8RaM16mfDeusnhqALYFwCBTJa5kKgsahgWk2hvgDRAqJHRBTTA5uv9sf3bo3FKSE2a3i",
  "key37": "5nMNesHVnS2tufGBrnnHng9t5uZF6n5Xo8DhNKLMSJkVWPJkAhkMpv2Uuro5VLrF5mNZK4TCn6FZPLVPWZpjDStc",
  "key38": "4LMzBPkd3d9PQN6ns6NJWoALYY2VFoNGnv1JD3gn55cQMf7Q3vG9QPm29P7YAi28z6HV1fyhkJ9hpvLGc3Fk8geS",
  "key39": "BCrSWJVJotgN6gnDditERtAgKPgmJrbujBbvZdQnViPTGkZSFK1DQQeqSyphV2NiSjMnwLsgGZvMpJxL1atRwAz"
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
