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
    "4LuGq6kaUKbNtbiCSnrfVXkyehmX8pAiaxsfoXZo6dFLPEzjDkSC5KhKdYr6geiRJyrJr2eMnNPj2h4Vy5dyTgqA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UHgdMq5xLsPFkcNkYKHdCQWu1n8c2ZMeuvkfQMmXdb8SazegM2Fb7yNP8rM5mLLknntG9JP1NzuF6t4Sh83AJ4X",
  "key1": "2dxYNC4C9AXmtrcBF3EboBCT8iQjyPxrQJysAaTc1f8QxK7SGDeQeWdKgGwy9mo6KhZtTGS12kzZi7R533Kdijpo",
  "key2": "5WJr9aN6UPBmkk1NByKEDW1W49PNMzVrAxgeAtSvmqN3t2wUs1uZfr7V9KRixi1oZGroXvEgC5qLFoCDK43MCL6Z",
  "key3": "3NNKanD2G4bTxYWGGoB9dWAouH3FkRQ5BKCwTR5xg7T79xCZDGetXxqFXgNBoQboStckTBwuVQ74bAqKaoa3ucUz",
  "key4": "654K8DZDrKZWnNENysLnbz8M9ePZjrzBzhWyugwgpcGbdFZ5Y67jiLiGc2ApQw6aN5rkC9Fe8gCZrULYQHvDbidt",
  "key5": "2bUQcW8i58oVuneSCdPpBNuwyWGMotAHVpyZVYKUtJ59Ayg6oJ3s3cq5V9FrAESKD2Rn9k9YGEfFYFfUqhubWj89",
  "key6": "4ivpwzuMMtGH9hWhHZX1qoGfPF1itHqo3rDnLjVrPdkRysiGZ5RDKQQz3tXKiVpUs5YkdjNPeEZ6HR8x4Af4vrm7",
  "key7": "3RWxgBn4S34XMV46jK49grbnRc1NcPyS166hzEAWEZW4kzsJKJRHGvhmp9ofpgVtMrLxgdgDWAAp3mvwUB16do8i",
  "key8": "pgPPvQakF7Dt2foJ16nV84QSyuEv6NdciAQByRouL3cm6QhPE2waT95m4jKTjfYJSyru6NRgaA7GnuCVBXKw5wM",
  "key9": "46jPJ7borxkFgGuQGmy1ZW8FZhXsmrpHSbY4h2QssQ4Nt9MGnLj7m42iz1h5XRPdWECTz8JGg5TgPZEjzLGvtYm7",
  "key10": "4LzsuxhN3dJvbHz9a5Mr1HEEndxfUgnf5eN46NasEboBRFiwAPEfS5Wj3S7PxNt1DtbBLiFeE9y6PUcwpFpWwKyV",
  "key11": "EpTcmuriLUUKCnktpusFEsAY46m3SKZg1Cq1ctuTaafPeAvRmRtfiz8TSkmoNN3dvac9MC5mEAWSk8mj7vF3NyD",
  "key12": "ktcXWpVJfSrcvFSKSj7DNodMTLZQ2Mof4uB5nxVP6EknBc3tcTnYn1jMRi4ZyJurTKdku1jbgU5jMtGAi9fS4R3",
  "key13": "5yvbLazJzs1QXFYfgi9L6iz1CNZEjW6GF3DrdAcEGkopuk3Em6xsnghL62GZ3XuczgvY6wHXPZxLfR1MUdVBmRXe",
  "key14": "fRLVupcd4ReujnJwZpGAABDwZU6grnunzYwkehPkszV53swMiyfPicm2tB4Jjx4BJVoctcvxRo9wAf5dCjBhMZd",
  "key15": "574jgnx7cb43sKVLzSw3ARXFsQA4JLv2Bnk55KyzShSmNYFnP3u8omyJfWPbJ61ecuRtWqV74dd8dT9TUNrCi1Ur",
  "key16": "3Wfmzehuekq5QXZEMdqz1aPR6SwoDKBo8iK5tgZPkja2x8YnWu88pWcsLwLJTeaqFxZoN7y6JpBkRKWThNAZiPrn",
  "key17": "kfVMz43puKDT6pjWVeeaC5Yw5vHdT8iWXYfp7yETRsuTAyPNe7KJKJVkq1wkZMVSjff1Jdks3kp92A2ixAGRnon",
  "key18": "4N8XkUmkzW9j3XNGKZSjaE6W7MvrHBnHhwh6kRo4bACZUKy21VZskqxNo3Guo6BRwjRkZ6NKH4tGuN4iKBibPi6J",
  "key19": "3dv4sHiFrQLKzR8dE8dk3nd4sNZc5qGrr7kUB4FemCBUeHxQXmgvazAh6duG1rCTCfpDUC9KCziwMZ32JbCZDvnA",
  "key20": "7TxCzp5zRVv6dybtMUGvEDaaYveKLuoA4b7PpBNk76s1JGyybudAwVfx7SdQvWAqcEv8aXrtFZ9QorpXLDNFdKh",
  "key21": "2CDuifz8msRa94rVN3CxhDduERMJkP3w6L7AHM9m4fFm46aZANsWMSBjMs39VMVvth7tsYTRssyJorVLhNMHRvfJ",
  "key22": "4wM5qU2ek3Q5fiPnX6obzNgdqLPhZWYTGGvjBTMoUKN97t2pm5eUSwroTKcJWuB1yyC95mjDtmEhtM1kvaGzVZXk",
  "key23": "2Qw1PhAEmCYRGr7VBefm4qFezNkiXW61cDg7zHMghaevDsF9LUQSFNQmz5txtBeFTzTiVvn34kPv3ZafGndZNBav",
  "key24": "2Bvcf1ZbaBZs5wN9y91RcwA88MBndbmNefzXYGd1m5pHrxE5Zekucg6RRAsoNzA19rhVVpahkxNom7CBnWwfR8sV",
  "key25": "32gHwSPmxddXt5cLqdiB6Qk7TYBrBwGWNzwBLtFLoQn2FMzzaS5gU1KH1RsmQdnGDJvX56LcwEqqXyjjbtYpQFsj",
  "key26": "GkVGxwx1VkyrmDWYMGYeJDsFHvDQFS3dtZKgh7GiEcMcXdgP34WHfN1utQC5v3pxTbDFeTy2u6ec8hLRAdJsaqu",
  "key27": "5HyodBeiNUR1cDpDYansDo6DuLJa1LFXv4mwBGnh99MtzHLEqPXRPaKAWaAu7iAtARDnCNLDp6HtShzsmUMT8t9K",
  "key28": "3TwhGkA6nEZv76zSM71YCgffyNDJLZ7LphyBWnAbECWiSJYGVCoYXfj1Dv1LS3eS8um85F82Spwc8nRMgLG6hFJ1",
  "key29": "5E2KoZfDwYRb3MjoBieQiPYYX2w796jLeG3FVY6pb8WcwzJv8Sf6rbT1ZKYM3m5d7uWLVKFpLttd2PLtaDHXjocx",
  "key30": "43Gbzbw2TNMQLTRyLNaqnRcoQrXKJ8RJEWjMpm1bZzGF8uYZibVjCY59nVhDZVXH7A3nVmjeV4YwoKpwCBvxfQSZ",
  "key31": "m3TyaebiuS1GZLsBRCcJGeUvSPBZssFHxfQP9HMZqh2LYRm9oB3YFBshnCgGwSknHyMuAiQLjBfqQ6LDN4TsDFJ",
  "key32": "3Ew2MqgAhzb6UPc5JyJcN6N6GZMqw3DAg5hzug2ng4krmydNsig8XQ4Y3gvnXkPLZdr27ukjXbenYPxXjEukBmYq",
  "key33": "23EiWuWfjzDtpLHSQ8bvyrwN5tXamt5h6v51gRKXizR9i1jbinu8xCMQx2wqzjSPiZcFc71UjR8DuYNRNLydBDK8",
  "key34": "66wH1R2oqMUa47rAKN647XzoexpL7nEzkYbc8FxcDngPa64RHdFc6WKVAuuXExaQPZjmu934Wk4oy7kjLconvzqv",
  "key35": "3QgyaBNL2CLYtiE9CrgGN3kajFZkU2m9boDLJDH8Ei5wvqLAYDMsBckQfiegFrRU2MEGJG5YqphztszrLYFCJmyz",
  "key36": "228iDMnMbCZHzVMQ7h51x5vx4JJWZk5CBjHcCvPGiTubqYDPDPbaQXSZbVGhhqdVt1NrcVEpbTBX27DreVVeTyz1",
  "key37": "dcPR5i7g6gCih6ffJKu16WhGvijZd2QMVwNL6cBBMHeUi7pLkHPwYubbMaVev1N2Vx5F9xw4qPLVkvWBirpwZnm",
  "key38": "2CUJrgUhBmPaU7PaF4UGJ7bJnVqoLHN2cntSo9JnuwxFE7nafMYJNNALc83iSX1ttG1Y9rCvcwaF7UVJwSzBYdjN",
  "key39": "5NgJutu1hcE29j5qTnUjnBLM4otBHWcCVnbJkgSq4LhV8DXzLng8z67hjZU4BiAWfbpgX2YFVCh3H4uabr4tyk68",
  "key40": "3HJRktWw7rjMPFdzf6ewS2zDksWRQ1AEbiEh4CfPFAXpqGNT561Uz9bQSnvjPUH9KV6yChoLSTWq8jXWXCM8MSD7",
  "key41": "3LZwhSN3bbp1kSHgbGqbParyZWfW4XtxnVg6i3kNKBFTbk2tCMNnK7PgpkEoJbXrDMD5AMEyX3YxwcVZozQqDw59",
  "key42": "3qALXGqmPkhDUGMKxk6BQsg5piRmW7SHBYiEqxZVcwfR6yuTvNHd7eGPYLGJqouoSQN3Eqt73ZeHLeKj9THn2U41",
  "key43": "4FwYEw6BTEfvjJGvnq6pT9nzNimgo7BBcgHkfZ3DfG8y54MqUzx7MkRCv8DmsJ75nVhXNyVficX9B8Y5C6UnX9G7",
  "key44": "aWakV8ajNyLc67YJLwPqGt9KuCTs5dw5TpCCQHC7YJGgnUqqhd31WNVjo7ZrP2HfuqJ5cjGEHwSicsLK1EK31Ti"
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
