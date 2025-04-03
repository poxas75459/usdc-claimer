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
    "ZSfFruYuzfd2gYqppN1pCN1zpsFS4YedPJ4StwB5VkFEDAnGuHuw2UoidmgLGCF2zUDjBsm6a8Qy5wQCTrVS1ig"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ski8YDVQZJYL6Z6xZGjXqEAsS3sJGdtMogTMw6i8Eb5dPN2MBuU2GwesNuJVsL26tFZhe7XarxPxX1nmanvE6sT",
  "key1": "49U266v7uA3n1LGp8tgSY2TvPUeqchz5wDGwhjRxtpBJsKsrKJLdMeHyZWkcsaFXiWdD4uvCQUPBL3K8oEwaHa8r",
  "key2": "3ftnjBFfTvjAfrcn6tPeaSf6dKRPURbmgoritczvxDZpnGvEWe3rFbHjfnRb6VAv1wRU8TaNeWU4ZEAVaaLm8r72",
  "key3": "3nN6DXt6yx7kKW5Djoi3DKvh4ywUnV3WuC4d66nT968LWdvQuyATRJLNvhgjVseJ19kRRma9gk4fJDC8Zzsyh5Zt",
  "key4": "5KCTwR5HopJKDntE9QwKHH5PV4wyLxCDS7scMniA6YGjxU6hGqFzvKZQQojtTS34Ko5Sa15Fo6JD9488iWnKbtdt",
  "key5": "43m9DLFH93trwi4mUpFLU7FbitU9CKkhbBs1WCjBdVk5AXDmKoXgYKviXA9qvAJ8ofwSnfw5qs7NXujCXNfst1Dk",
  "key6": "JS175wqpk9Guy77S4ndCWbMFrSFGptzXrjSThCVVRhePxua8Gq3V4i1PT4Y5cE2nEB5EmsCA15femfMM8HHNw7p",
  "key7": "3yjmj7YgXzpWSrHPNEFukruvEsTNAtUXKmjW3zZqsUghowqVurASesxUivrLFVBXtRWbeciL8gGtnDrKAWYHQ25m",
  "key8": "67FJXagRN9VCq2rA41qp1HqtsjDJKvFcaE8xEVShhhrdnDcxi6kJG2SKyKG8UQdxSEj99oampAiBgQm1gXR4qU1E",
  "key9": "5AqMW5SEoYkqqyiyPpLJRw9kV7eoSLMNiRD9xaWtPnyq9qXeep1ivRh1juHcThCS6Ycnr3bnaoYJ799mf2xZxKv5",
  "key10": "Cc7mbTfqLZKRxcxjgNc5ZjpEv7zitunNMCjwaZWMcGu28g1Ko3k14SuShvQVkEUKSLsd7FsNQYuHRyDsqmM4yiS",
  "key11": "2ft6iVzxgyA5Us77UWFde7j2HnrdPgxdo9pnJf5MpwwYLJPSqAnVzW1ct27npB7WSfeReeanKajyT9NhgXV56bpY",
  "key12": "2p6k3jt3hqHBQBMXcry3peMceVtwyna9J2dADmzrvzWMGLEpfYmaennoWuRtuahcaNdsLFU3mtZcEn7eBXLN4o6m",
  "key13": "5tve7B1qFN77GHGVbHPkSWyJu123cRVA2zTdxEwiPDEt1wPHyAxrBvUbrogfmpZ6HY7RBwYQpwLcwztoo6sZqPCV",
  "key14": "2HVzXoBGA3X8Rrbqxs9grT5PCKgDDUUxYXSLgVhz3gSQmxD3i5ADAe17mGSVYxQ4k2MmhF4bkS82PRCop4gC3b73",
  "key15": "pPNonHZHrCPDucMjo4jQkgQpDsQ3bAmPHf6eKRTj3uacmtWntp1sCAnhdSmwPgxbNhbXydjz2Egab4VWNaFW8MP",
  "key16": "4KUpj3aoZEsCUQhovsntBi9UeMEYnmx5W6nk8LyPcvoD2tiDYQjUJzhQEe5BGkEXSJTsP4VzkXZepasYVgF8chpT",
  "key17": "25H3gZ97ZEXpycdhyCXRYLptcU6bbKgZxqomJgTk25ZdGqpNPx13znMF9nETJyxTbb5RTRirb1pXg85dshBZ8NqS",
  "key18": "2orwxvkwgX35QMzYqzQ9YDYkzb5mrtCS69V4mRU4jtoB3sSAWE4D7hjY3UbKnFUGRR23LdPVswQVrV8SyYXASLW",
  "key19": "3AoVC7urnxt3nyFk28xG3npLN6Uaeb1LkupxKCEcvqeYNgEybtmBgzkozsKagdJWy7rA66HgiFdYvZxka8X8H9H2",
  "key20": "fCHgCVdMgJHo9XH5xmTW5CnGrMag9kxNNfiVLwGRaizZXDp3n29TsoV78eP65YqeYUgPaZcJHZ8PfLzbtay6oyo",
  "key21": "5Ci7r9wKAFXLUQ7FQ6SyzVXgo2bSFa4E8dfRaERps2YqPJEsf7CeC1L6YKjGn1qmoQ8spnieirTTH2P9UKasgG5f",
  "key22": "4f5CppyhB3zZp3wiGaYPJjXAjoNB82QxmR47h2T2LfX3cmmNvgMFU4mfvHq82vxZ8dmbpVAacTKdXGMwxf1me7XC",
  "key23": "2gBmGM2JMeyFWma2oC4UoLQyyKNLirFSJnQMjPJfbN4eZjViidmdXxmSCFxcYiJngcn8NUekAUUzeJvxboTAhKZg",
  "key24": "4L5tY6zRxKHpiy4d66S7sFVW4U5K19fZAqzV712dFg9CFVaDVLfkYG5x8iMEcYCKQfTnDWtzKSmW3c321EHMXypZ",
  "key25": "2aye6uJ5QbEr3C1VwJJwQRQ3jNP7Tjk1bwcQR9fvRVxmsJBPHL1H5ePNxMcCASA1B5TLFzWdaJHJQjbsxQK8rqX2",
  "key26": "3tBiCSvkmAcB1GgDzZwykH3mJTNnNuMax4rsW7keyGFe5RSqDcpdeMaeNHXGGx7krLvPZocXLtLaLkRqGSEwrTg8",
  "key27": "2GGmyqbKbJr5QqXutHcYTNrMcJU2nSAf1fkncZr8Xcu3J5rxXApRB81PYnUAYQdXiAdxMdHJQaeMaL7NVJrQDkPj",
  "key28": "5Zmk8DLckTR1q6KwoRHZfJd47qNSgyNQFn4ezFysvowDLHqYScMDE4tFTycNAezd6HFW8gBKrnu78X2aQZfQ5bVg",
  "key29": "5pGYj4wBKyannjYHhveBWsWtcsZDRoipxLxENmb32jJ2BbifSkTF8BdG8LvdNLvu6pvEuh2qyw4sDFxKa4tGKFpT",
  "key30": "616CjVB9DdZ5LLHLbPuwxbQJD2Yn1kAEKy5f18DTYqC9XyqbDj63Z7dHuDErukd5adfYL8Pa1hZxYQnyM59NHjvi",
  "key31": "1KQ4m4V8WQnFt33egGZ2QxhEHZkB5FbPCE4emEr519hSmSVtfTkHPYHcLis14EtWDPtaXpepPk2aiPswHGJ3ec",
  "key32": "1bRimhDkN15i7VJLGUyvMn6fNrB8oHqfZq23HcBwKe5x9rfF3ZeZ5NUofcq23y8JgFKviF1n5L95d4xJRXvfm3W",
  "key33": "gnWW2RnF1nZhPoumStidHzJLsu2GqtHSnvt9rmwPSu5Uve5WJAVZd71UAJRxuzzGsSukbSfjVFyd17U4jDVudMV",
  "key34": "4vyEc9m77J19x5yujmGTSEiTsjtpbNHSkq3LLeEnXjUNcSp6UHxhZGipiExzkscqBFssb2k6RpA68BQvQTDSEHrf",
  "key35": "498kfBnieMVdzMvmSSHQRnTVhtxCZieFKVoS4iMqnWPSScG1AAtZLonBktzSjtr8PYZt1GG3PL7EdtWC8QEi2hrY",
  "key36": "36WC54BudRVionUAaXeTxtmk1VnbgSNMLQtLGp6YRRCJ7SPA3AdFWFY6QVsETF7rscehYnYBojaE6uDvRsa5CcwP",
  "key37": "4xS4FtegpKf2bBTotS3AdM9sNCdiJiMbHWyEGs4FirgrrERMLnaV9rSZAcEpFbsv6RMC5mCMgGJBRgRXeEpcGfQE",
  "key38": "3Bqoow4RkSSPxcLrX6DJkzGmeQ43uDnBuoDJjLrrW77xK1wtnu1tXuDbkxAFUZhhYTdNZRD5xnLiTgbAmdgbyM7L",
  "key39": "2WqHByc97LbgSa2qhMkuni9CRWF6SANVy4ZfZNm38ViYTVVCqoQoAnuVxQL94HgpLXEtY5q5Dhki155bSSqVkZUA",
  "key40": "5D9jaCCjacTaKvoRgHRVfhfgJxQjT2vBzQvgebtTuK3s71r25pw1XkEHGLaajFrZ6oqiNryLDSWUwQt8Q1eP5zyh",
  "key41": "4FVioyjc7AJVJqdArAEtaW1TbvcVBWxoeyYXzKc1Dh4Jdaxg16yD4FhtHHGsGf4YME8x3AF76qsj8Wi8eX4X6uY3",
  "key42": "4hyzYo3QRBMPJ3L9LJTceSqMHHDYYs9vWpTLnTiMTaMs2TrPVRHFWeoXFoMpr8NUfTnadE9Afg49XrhAasvqJCmF",
  "key43": "5W3WYmKVUJTv3eQGT8g8Cg1T9i7nYMyz6qRpK9qrHxJrLDr98bCneQTERTb2CCdcuFZc7jvV4nNA1c4theV2U9xf",
  "key44": "5yYWHZQHNgzSkNL8Jxu33FvF8ofzpfKe9E8H1xGL5UY88e39w5SmgPXWVeKTv4FEzpjakMMXrVEQciAWNgyWJijw"
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
