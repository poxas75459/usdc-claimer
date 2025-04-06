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
    "94zxNqtsHLtsrjYcGAo1Rsv6UD7YojHiVomEFvxVYfp52H17oW94nWZaJDVapy3zhcbLYiWQR3uePXFQpkHPMrd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37yoTwJSeUzYM2XYS1yim38iQHeRJJwroYv2xgpYARFhYZ2mxC2hpp2AksxAismw6uEi1HPCZCMsWccj1XkXLWYQ",
  "key1": "EJDCWej4BMu73LHc9QiXcsKgBhYqf8vRi7eeUxcz93PRGgffjM6sPs7N5CiZCNdkmSPQ4DM2Aprja9MpwaR1w7H",
  "key2": "4yijspt4feFTzXEden6L6K31aiUYMs3k2yVPDALxWHMeAqrNoVDHeuq4CZZuzvDJ4WsxWmisMACkWhku4dYAwNVi",
  "key3": "3h3Ebb7rMoU6vvaGqUKGfLnBgdFJ279ax156ggY2629LoRZQVXWwFnHuXGwgZtK6PqaJkjkDvzvjT9AqbpX7m8KL",
  "key4": "3d8h2YQoZUNNxfPeVgsUDhA3c731rqnRrXaehnrkCxEWtbpUkV1rhSaAPcZyzSp8GxG4TDA4uruXEr3zwdAFuzLV",
  "key5": "66yh7nG8Btz3bfcz2rqTquZgxu6vhti4ibvxLBy5rTu1YL9uP5eaVZtX5UD4BaHqq48mTLty2K4d5WiA8vGGPSKM",
  "key6": "NVPkud6EP9XQ9LMEHz7mPbyV9g4LbSNGRxL5SXXZ1ECese6d6b9hHCofvUkqhrQZxvCseMxLK8nvQc9KdYya6Uv",
  "key7": "46nU93qPSJF4RsEy5obS18rsztZSuLpkfuikqWx1WA9WnKxNRaHR6a1HqDsn4jJrZhnAkK47F3uLPHe51jAssxZA",
  "key8": "5mTg61cGQ5Sb1t8DrB8823vbaTNYbysU9tgMwdHThk3HUPd3jXmw7TmK198T8wdcMDeq49ujn4L58wEGV1aeRK7X",
  "key9": "2foT5Fz5J4nQMDEJpgywmGZaC1P4vhdNogbYzhJ3CgFq7fG3bMFUu6BKdkngKkFUnwtKX32huH28RkrS9XAhw5Mu",
  "key10": "2MvVBk527JUbFvcdPVhRf8ARurM4Sg3aNoR7iF7KkSMvmAaW1Q7tvDirPzptb2SrNQBACUBE4tZ1RHpRM1yZFsr9",
  "key11": "3SRy3BnqZcExpYjFP6SDBYsw28acC28zk8UXyyHfbU99JasmShhTdTJuMNQhHMgPGzXjKP5JrWyaFCQBrAMN7pKJ",
  "key12": "327tWaFZL1gmQtmgaht995znkA3aGxhUNdWDtu2DuuJCazBry3foJwBSmxGLS7UGYFPohsfA5NdW4ASwSMLcrKJ2",
  "key13": "2Waooi1XfqzDfv6Z6KvKrUZFLhFafHaEStYuVuQpSgAjvmT1i4LpiwHSKCF8Qyg5ZgyiDCoczRowRoN3Kzpemye7",
  "key14": "2VVCG4enseeetVj9mRWFobPcKSdmcjiMaMkKSKNU4iovvb1AczMPVUBQs9VjpStHhLWLE1x2YE9HhvkE2YgptAVB",
  "key15": "3RqGxxQn4VFhAnU8MmA4wKFKd2LVW3EuhFraYWV9o2ojGL9dRvHrTnp1DZH6ZouDUmBjoNZkjRQNjqnMZBpeWNtd",
  "key16": "4EEsQRDgowMeK2LtAUMVCTwJPPhJkDLY477P9fMZVxLR25urYqemPAD9df42JNK3TZTq9X1BBEMCeYvwmEbn271J",
  "key17": "2xudf5fr6sZtfCYzKXa5a82L4tctCW7W9CgDfihvwPhx9T4xbMvTe1rBPFA14B4VW4ezZjxUVrqgznYbKeaWq2jm",
  "key18": "2LzYztB7hKkVtHp7Ng9puqJpMh2r8mErXExboAsJGcChY59BfdQPLgg87nhqCGVgthnxK9qqiyjcKAgetadSh8Z6",
  "key19": "5rSucxfYKVt7Q4sZWiXURXwXXf6pSP3xrTDzTc7Rf2Gv6QLBQPKN7ntEDEc3bz8oy3B7txmaP5Ev3WJ1C96AFvuW",
  "key20": "2utUrbLKYs3VqjSu57csXYtE5gxhkAXEcnZMvb2fpDAX3f3Wfjwz5TBzFoViQAMd3zpYPzjQPqGGkNhDVdVWjdx9",
  "key21": "kwpe2BEeJkfbzwfiG9Hvgbu1sTYSUEUruTovzuJok1iBd3pgeMbo8kMHxypfBaaJv9HuqWvad6Vvu3tA9f3AHGR",
  "key22": "BK4ujZwR7TreUfN2ufXQT5wwBmW8du5P5VJw9HJ9ayFTPDh2rbqpZY7jCs7y6GLdJVzuAgoxjYEDmaCWrHSM93R",
  "key23": "5T1vbV5N8TbJaT8ToVNuSmK9hmT1m9JKgYJynbHde97zZyP3VyxtWpH5JwvwCfsidqBTRmW15ijBE3LwJgjrJLiF",
  "key24": "3LY1h9aZ8rfUFJZLiapbT9x7XGzE5oAebMxGgCy9yBwzn7PMvBubs7U9V9R855RSkr6j51GE9LKdx1QoxtZ8HqkS",
  "key25": "2C4CRD87Qp2WcyNh4x1ghj7dZbf2TXywwytyjvPLzRwbf1tahxtKdd12dF7boksFfWbGaQ1miJg5dsyvJzk2Vd5e",
  "key26": "32kQ7mHfxZjoVM1BCCmTMzYZ2mEfb1EWJ3LBK9u3UPBr5yh8KA9BcXwst1ViHbgrSjtrnNXbXFjUXFYBaeXXbRBJ",
  "key27": "HkPQanEzpbFjkqquQxEGhJYp4FD3vvTH1foTR1Wm3oCGbCfgfhEFngtsSDaubtYCU4DobXpscTx9jxi8zRudHPh",
  "key28": "FFC29QcaAVdWB16fXwCHuw9dxPXPnPgJaWWgou8kkUnEuwFLb4Xoq9kLUZsQEeNSRFHDwGyk4D1EjHuuTk2cbvv",
  "key29": "WZzMXp9byeRwVBuiuCD2rynVn93dn9G3hdgYKQ8k6ADumBCdFAS5Hzu7h7jP9ay3vWRu13eX2uWg1D3vdA4Zxnf",
  "key30": "1JqEdFtf8FiBk955b6gqyrKMsT7DoRNut9LahaTiwdP7R5zQf6eAzi5Z4nPLvsMfwGCFk14B8MyxCXeKwQ1uff6",
  "key31": "3kf7ompcjpP8EbcBJEKAhFQsjHsugyePndkDUMSVV35GwGcQHo7HgB9ePyH2nVbj3YUnH4wowe8o8EvzzdQjBu93",
  "key32": "DCm3HWdwPGDoTSYu4DmVQXfeG98y5bgoc2btqcFrzfJGyro3RDsgn5nD6KzP1pQCsHd5Lz8f1bQXS1zQacrKcpc",
  "key33": "26tkQdjFpotKPTAW1Q6wVsurZgjQaUzvZfu2kpAQevVaqnBWtRjAKoGXeRKsxf9tcmyvwQuARvKqsvchdWeHfmq7",
  "key34": "2TTppYmR9JW6pwJs1tAyQNwQPvmzWZzDGaEqkvWQTJdndLu66ee3cx7eM1UiEBaUnx2PGZqyB2otnJstWQe24fRT",
  "key35": "td6ZrFBH2ZfKFhUbhamxHZQoWfNMjazk23dAcXcsnhjsrFG9pqEcNUJWP47xRxu2zS8DreRZwxCLUNAJoXzKmEH",
  "key36": "3HVSZZjB8MTLRRxgaTpBuUTF6gMwVEPSLsQAfvX6nMRQzU6jCK65dgEb7SahtuwkUpHifV7urp3h3kSxuMbLd1LT",
  "key37": "5yj3bYqKgH3xUY34KmHxzgnJFoRXSWec3fd3piwVKZuHnsLNy4RUgFnCV4f1e3k6QDrgvhQm3HVodmCRwdjCpovu",
  "key38": "3N3MdjiJCGUUqEV4Ri5J9upXXYKQGhm2VuGUDP2efJN4FzUM2vW7SynWLcC9zALjNJGgm8kzFh7pzZhKKHhe9n2G",
  "key39": "39hJwtfPFptb3j7ZJtJAqQVT9HCyxH7XviujAXHwPQBQvexXcv3uFWvtaRQK4ZkeXS4ZZUtmiVfqkCXzisgmJKWR",
  "key40": "2k25PR5RZ5wB7fqDuebvYCJrE8yexunqS4CgdWrfsaW4xcCecZGy61AZ2yz3rqh2fy9M7EKeysMEM62uBjnjHQYW",
  "key41": "3pevTF6zRzQUSdUdPTCkRFprTtgofC1cPjYa2LAsq1NpvPJzKF9FdC638pqpFGKHK21814FBEfSuAqFKuR7Hvvdp",
  "key42": "4nBxQWpdnMGSp7rcXGWcUAre414e9HF6jDBNWhrfiCvXrrmiXoQ4mH71FcBxUsrrRyDDR54AP9m2MbpC78wu6NWE",
  "key43": "2tRriSbW29K1T4d4TgCFbRy9AVw9SideKDtuooiXmxfwEC516egnbFNJvyh1mcc8yowVSvarBGujUv4goqD4S4dz",
  "key44": "3tG2d6bz2dPz1kQPVwh8ZBMeBMjoz193348pjnA31D5hRbDTrz43diDgsPcHcRFTBizPoQCH2L53dDgHFKcFCJ8U",
  "key45": "WRDKeybgzUbJo2YHj5ZGujGCmKPwPkgcdXG7N2trS7Gi9Mx1sBpKADG3WjAwqqYnxTw21pymaiWmto61NeVG8oA",
  "key46": "5mc78JZBs13Aqbh8zWHb95QFMBFAssNvbkujUwT8jKm1JdxYh5niEuKNQz1nEK3BZFBHii44ZUadJqqaciUKBdYz",
  "key47": "4Z72VZ773xWmZbpLoVTMvjSCm5MvW6arqGM2YKTr1bGcgaieeMr5L64EpqFHJAFBeiJsXSyzJrDMKsXi9TS9uenY",
  "key48": "7pPZ3a5B7tsMMF9HSqoXQaosZsQTdUsQV1VZpa26JFqWvL2rpVpbJVr8X8oExyvkmKFPvNzUdxMxsMrCdsVSURx",
  "key49": "icu3n2jZH1tX6An4EiDVGP82RmK1NYeBR6GH6xvuy6RTCxLJQVZMQDSJzBJjojUfCAw2WjCPfY7yzUYKjdurQG7"
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
