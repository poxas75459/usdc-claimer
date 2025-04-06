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
    "h2eJCRatFktBKynWv2pbKGUT6TGz4WK2vqw5LdCEQx4yqC7NSVd38sjWdfcivQsBsUX4s1vaRem7jqj6mqfzZtJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zKnxUNLvNLTjwXLajEVpG8pdHz2oLKSukEHAvmHaSHexbYXyJWP1iwiDBpxRb8hwQiqjaozRAAVTiwMC6ubzM9t",
  "key1": "5d6kpngExKVBaFm7Px3r7is6eNKGFopZoweUakw8CMEjM1nFPxkc4Ff6EsJpGQTDibnnQFS3VSPfBgiRGorms6dM",
  "key2": "ufwv9EB51ouA86KJFvNFp3Sc5bWcSrHsxbEEY4QHS91sucEVappeww18JdpLssYKuzjaM2T4ETki6zk6ryq9A74",
  "key3": "28hKzMkZXcrScDjb8Gfch6fBFVQAQPCadWQaZyngaBjdy4A6gThYp5mAKsVqsiF1GM7BEcoR8httcKpb9kdWVLPx",
  "key4": "2v23vXoEUDiUwuWviXNvhT35BvJZFuSTjiEGEnahfCh7B9o8mX6ponMBaZCkeJ2UiqW1XEZVqb82ZeBoLwqaP4UL",
  "key5": "2uQiTZJ9Age2yehfVygq1b8qc7cpSsVd2kiW8z67HMe8DFnA5Myyte8ygagRK2m6h1aXRjbvV5CfQCpSwA2S7qeb",
  "key6": "5kcJVfJeyPVT5UVfnLwZfkug1JwAQ4Er2mUUpkorn2Gjv3AFfQfsa4kFrZvB5eSoVi4JVrwo8umFqLmZ47SW7nWb",
  "key7": "4GaWFAsyZDJTZcG8QXEav59NsDaWc5fHPArJsU68nG8dyD7UCu8RnMbcZhuLfRsdWka63ePeeLedZB84DjRAySaQ",
  "key8": "3wRaRzhSdPmLdD5LPtG7dQMSwh6bHrmJqLP3dt9RbSf3rMLen2cREJpJQTPMYhoUi6CHNMsdpJm1qKp8gAid4ts4",
  "key9": "21dNKeiowfyr7GknrRV2ePVov4X5vsFcVWZndoyuu1opQksrU8bvvwPoMiMsWWj2MQHwVDRPC6ciavwGvSVwKtUK",
  "key10": "2wAHNB4iYAfzDPJ9RKeiiUCMXNTteeU66SHCWdLZJ4TuiqBTBRukKSvgtxLMoNrzdWm56PKkTznfgzwvLSwtBfXE",
  "key11": "qEeC12fPBUdxErxp9ew2ybidWmvny2hJ7t4NjzwHu2TMyR5NufAGB98mEqsvWMgPSok8VxAG7ZkoBwfjUM91kxz",
  "key12": "26V3q8XTzovwNjGtd4yaZvbHWuT6QHSvXc3xsAgDHRtHC1CPFpgD8TmVM2qEtpEJpxeG7zHk1sGV4pf2CNHxLwhi",
  "key13": "283xtTwb45GnoqHgvHck6hTzLp92ixz5WbZnaxcnpL99kSuZ2RWsoXeDZF7RaAz7fGMXiUkp7c6TxvhRx6dn5YZi",
  "key14": "5n38k4jWANj1ysT2tNDoVCztUyMBQ6Dxx6ec4oJNGVLUn6WRYcSgs86g1g2P6SnJP589QSdHQeL9Jdj5CgXbu4D7",
  "key15": "JNRUPZ6WGbm97XNuuh7uJKEJtJUQYWMG2qXKyayBLqMwDno7T4iBRw54g8p4UQ2gKWC4U24fUbNzR3uFnenYV4a",
  "key16": "4ec6Hc9TtG6KcnztpMWYDLkvX5msSyfunXuKxfJ3xu2n7uyUE76cPKYRke3v2nyhUU5fQasUbugwFz4GbBffYtm7",
  "key17": "54PL9RDy9bvAv4d6zLMzyPJsVRLoz9TahLLF6g1diUqSLDHKLHpw8HdZ6TyDrBTsWnCCfjh5cE7WtxSTySpNwEMU",
  "key18": "2ee1U7QtmGtiE3GZE5Nh5dEEXtGka8G3gt9Sy8XXDb45a3BztSTWuZwb8iPowyjsECww9GkHHi4PkMPM9hRyPfEd",
  "key19": "mLddLsH84wqz3ga1Kyh1xwGTReyW37fsZiQwBmFDZ6CjoXE64ujUa4yASp6GgFBgA7p6V9LoheQeiNtmJFkwkfL",
  "key20": "4sPDrAV8RWNeEUZqu682wuFTQcp6FsTstr7kAHHsexdccCStGfeoy9xB83G7KDxkWrR7QNAF2GEpxRsJF9KcdMdx",
  "key21": "41XSQHhrkGGd3o9habGWayQQmAK6RKCaV8mMvVat4CZhDgNYsFFUjuyqhi1e8SUmW2ZUWBv2hyvtWq2JZRHXByim",
  "key22": "4WpvGsH7cTsPk3jverGFJGdVaRN7s4BDsDPNAx3RcW2op4psnwem6kQyixXf83Abftd9Hbm4Fu44QQ4MCFA3gGS4",
  "key23": "5RApci2rbCJTXF1dLKgmei5FYefdVQ1uKVwwxhBzUnFgSUTmLoWXrQvsdMtD1fNSjgt6ebgz3DJfoDmnowuvFsoA",
  "key24": "3HYoNi4ci5jZm2tSGC1pXwhr6yFVeLYTh6FbSHU2AWxWjd9h1T7pcCDVvD1ffaKhQyGbszVL9Azxp65GyPfewagb",
  "key25": "2mWBMh4yvE98jVXWmEsWhb2Us7JvTgxeHiAsC8HNb7Brd558uEfvNKrBuhU1ZNmhWrSHRsffWxY6QRRA6q6W56jd",
  "key26": "5owTF6YMF1eQ4xWoS8UysQbyRQmiuqR3aG5LwpT6EmeNqZtHYXPkgwbumKgfe8p9Meeov1CcwoPrpTLoC7rNYHix",
  "key27": "4r2YnfgyZXhdKU66mE6viaYsTS6wYRcM9gyGs3E5De4B6whmdDbYDaDXALuZyyg9SSpghhtT6GEoLRf3JjoB5LNP",
  "key28": "5k8KF8CG2ikMaG3wfcgxtFBePzyVh3vL2Xyki5tgJJKSkyfvKRkab123H8AxCVFXr2RX55cWHNbmndW6ozeiNRdx",
  "key29": "21ybDsn9inz3JsFs3AkYwXJie8FYv2U9HMs7qXYsoGsLdDNDTeKM2fj1sDWjAwQA8MUhbPxXZejtqbXXPPgbm6jk",
  "key30": "Tv7rJR912iNk47D8SFbyWJYyCHqTV9JLnxEdf3ZHPa28TQNcKR92scuJRoiaFDKuZe4gSkPWAvZuxWwKguRmTRP",
  "key31": "4na5HCEWiYBdo7Efc8Axr85Uwgk7Qvpgd9DrecEWi9m4ptLmadkD8QvUBYRcCJ2BCbLPUKzH9ixtcf9z3jm5BLcn",
  "key32": "2Rvg6xMGKJHzABeKhRaTpcup99wNz6fbvt8t8eE9TR7aUfPiGrGfbCKrJwQC1BroDSAwaKqP1yyGQcwLanTd9ACz",
  "key33": "4dMtRuFbzH6Eiu5PxqDxSWoYfokUBboXejmpGc5163UtNmgiAy7bb2YoCDExrEdPxM3iKsikVy1kMxZH1Jt4F3pq",
  "key34": "3W8ZQABPPzTaufTDZ95cPQKp5Bu6XK1n1iK2ZxmGHQjYdB3LZz6pjeKJEZ9gyF1mZmgxVPzDRFKzDEsBCbk6rGco",
  "key35": "3x2tKk39bS5rmMY28vWfKMCiPoASE3CzQZSyQJRBkjBUivDudTZXjKzWHwFeHE9FfdXXpeYuHF6AfrQWVT1k2p67",
  "key36": "vYR4eDZ8VKHvR1FuaaWtTpXrtTx4mAkuv3B7XJ7u3ov8x4hXiWCSQCBi39MLnhQPYYTqxE22xJ2wAT3i24ZJy6x",
  "key37": "3Xuue1WStN5NBhGpE8CRAHMV3SmKtuHSD2tDwNtx5yFtUZCNRntpdcdvAD1gTcN2ctSRaVXEFY8iAaYEWd8pU78L",
  "key38": "4awFFnuTxDSFtxF7MZMJ5nL5du8faU5FkebeJmYzk8PTrM4Zhb3YabLECTihxUDKvjWjnrXbzNMdquDTDP2Nxt47",
  "key39": "5N4vN4MzkaH6hUeNPFUh7N8J2Mv9yfNiafRSnUFYhvtTA7LtkQXZAPRYU8Zh38vJnhVamAfHM1XCKUZ5Lrs8HfeD",
  "key40": "2KUfxw38rnVaqi9JqC2Pw2u2woPcPRgTKqkxt3K4LRA6f9SXSFU5Zrf4jYwBVHsZFxnwPUk45sG5Q8m181RY7Z8P",
  "key41": "33QN4EE7e3LcKiaAAxHxBVngNxWjWpGgB5Qi6DTAV25m2nMbXxjpmufb8LEQEiyhTJCZgsMjeqzHrJ7beV9iz7ca"
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
