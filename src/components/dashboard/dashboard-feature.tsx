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
    "5oHiAp6oST9v9Z8mcuyk3UfNX34E7LdEajqKFKW8MJdxokt5rxKQMTEj546WUXcEKYAc2ycBBhfVYWWNpkpSEFbu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31D5fFC2rRvr2tTbFe1s4XP3gzwngJX5xZzc4RJjtitYrrRJaoCh5B2adjz2zM11CxnYJSqhWR137bCLPNTBgZuE",
  "key1": "3UyYHa3mH3EF3bwjsPaqCZw3LviLfCfDgr76ntbPNb7oG5GBds8ACykWYWhYt5rA8ErzAfQnXqbmqdZhu4BaXBsZ",
  "key2": "5Nwd8SmZvsx9mX8X9Urej5zZ6Sqy7SVCYCDP6FNyN7Mgff8uqXHgBqrTaf9B3u8CrgSvhdafjEJLVPeLFqU7hnbS",
  "key3": "4PdDAGqpGYN88BZCJcDmE3qURshQZShx7sjve2etUbqb3Et3NhWArY3XoGNbWg7xfrup72ErjrKCatx9RogQs11W",
  "key4": "2t49ejYuAXUBqckLwCoZee2yfMxeEk3mbu9T7sYEQ4WGSUimqjd3TTLZ4xajRuP5fzM8tEbJoxEv1FMiHkYaVRVp",
  "key5": "2qorYoyg87D2to7j1hUm9d3mWM15LBFqogZ2KbtQk1qTo4WHF6js5gFLeexP1eNiSedyW85L4qWNN5ffN6Gx74Ag",
  "key6": "qPuNPwsJXKJvka6vB9KxK8CwqwnVmv9GN437yPXUeNaLzcZYDVPPMbxJBHMN8P2Gc9XsVN4ZQT2TLxeVinyD2xr",
  "key7": "hdWbxmGJqHswp5EFcnDz6WYJxgNYMsPjgv55k1Zyk8UVtwaXyzSbS7DaBX83G8Pnv1JdzV37SQTQLfyYRkcK2bT",
  "key8": "22gXhFq4wvTdJQWKSKUC7YHPi5GD7cfHk1FyojERdjCGYKtwrhLHyFPNtuLHuSo89D7q3M8j53jvT6goNoGqxqaQ",
  "key9": "5Q8mJCC2bhbAxsziPSZMHD576u9CgeKX4T41zcx9J1jbUgHqNkZJvt3nnHwCbwygni4tZNQEyJRJj6zbXtrvk3J7",
  "key10": "4E3bGBthiQ4ufEPvAMNrS6bPe8uupxAgBWMEQnYHcaGHWmT1KoeXXcLkESmrAWipxLteDPheLgEvuBGhSAZjkvkc",
  "key11": "4M7yrn7gRe1Tuuo6xsVHXr41qheKu6k7GLoRysW6h8aJf13kcxnL2XmEWSTkUnFQdGjimgWa57MoB67X1dfn6fGh",
  "key12": "2oNTt9Jg34wJoHyGYWQb1jY17sv82Cu46uVxqGy71b4urSrvroksPvmi7YZcUsFXv13mBjCwx4CHs2QvdLnD7DHm",
  "key13": "4LFuXXcRKcxm5HZJX2QDgWWgiS8oWss5S8XgqbgrkGEA8oPqR1XjaddDbXtTMGagYn4kx541NWjKwnUQnEv6oqrC",
  "key14": "3gJfJPiQnKp5GopRH2oWo8msBTfdKu46WAv5akgcYfabyMZpJ8VwpCaGsok136VRvS8QqrrtVvsQ1sGVoBkSAxKH",
  "key15": "28yQnFgtqrrWTt4UirFUTrmmkCUrh4MHaBYrPDQBfdH3cU7kVwSp66GYmTrTJom7ychdNCxkYQVqgfSxtWnwNo7X",
  "key16": "4n1joHAhaQGu5wQoRHL6meD9Gc8f4Ckny539vxwYUCmJJdafWUjRucBVDckUegmAqEDJmrfFewJfzc2k2R1GM1ga",
  "key17": "M17L7TYJpbHaa7wDheCjD8zD8fMkX8sTPRnLMxKbk2jPezwdFQUsTtsxd3EkiHiP6ZzvzzLuPrRQkcpU6y2zLNT",
  "key18": "4GeLkn6GKMtQ8Zyy8Zb4Ga9ttzGkjVFHNyaPEtp6jQZs7DPxmAJSuKhoMkxeWuLytbj19QUX9A856LY84moVpFXK",
  "key19": "3YxEYEhmxjofXM6XgHrqvsdZ4CphKk5tSJ1nf96TZAJJwuqafUUgf1MbELSES45AKprSd7Q62UBiGGFjzGmHRFvt",
  "key20": "5FJZKs6sggNUB6UgtQaJZ3eeg8eLZ3d7iYPsZNVti2xrsFYKYbVEZU32iigwwtbdmJfAppQjUddzY8ZqvCXCzEsj",
  "key21": "2o33unDuM542QLRW69nuS7wUTEKCPn5uiVuac7ZAuZd9cnJnTHcRgFHzYfpReHGPPWrFys1Z6oFNME9KxvT9XpE",
  "key22": "ZRet1zqP1u575dCuZwnfnxpMLKGhXwpjWyCuwna2KaNNjQnT34MCYtbUAsoTGDcnw6ra76H9f72pFNc9AJPAvxg",
  "key23": "6LJ6NpHbDbxWVegrBcSAdZDE87aJJN7JFNkKFHfsKyYWWWcfzfiYuQ5qp6bwhgkigmWvfrS6hZYpUmepHhGM559",
  "key24": "5RjaMRjnh6qEZ11WgvWCBjBAKN4tXMTgwSL4wnv2M2KFng8EAK93nMkR13E9MZBMJswHEAowdFt5P8mGLqrm35Ji",
  "key25": "59is6TCwD2GD7sUJbmxLWPFXYBZQ6vc8bVviorAQdTeW5Vko1SJ69C4uuLjj7q141kuay5Khtf6RYjJtKdZgwPaN",
  "key26": "2r6jHQQWdS4CScaYXwUzx3BLEWnwKPJz5fYEP8b2mwMVUQ2rvzKEyvRo9Jf77sxpwwcZ766xifCuxJWQnhFD4fdZ",
  "key27": "61RoJ6GgS2DYdE7cX1CHZFSLcSjcjshMhWipQoS3h6AVu2JXZTP5TXF6rLTaUsrUvGEhPdZkN2SQ8vahED7kmrPs",
  "key28": "2bNTKRiDPs4x7WGQCyCNTtBgufFPoh7m84EyPTi3S71uou7xpnS5nMiKwsTv7HyMdUmVHHRzJdUovofdK8aEZowH",
  "key29": "49uoEsfybzqDrX8YGeT3pgpXcjRTnJGAQCXqg633EjHRonNzNDLTJkGZnXoxLh4AMx2nsbhxwWMA4zhag2QtRJsJ",
  "key30": "27F2kLpkSsa1L8x5w8LBYK91bhbeR5JFfmac3Mid78U3yCRvvAswDxqdeUqQrGhgqhmTCUCbV2K5xL14F1XDeSGu",
  "key31": "2VJAXeRPqGHUysmyW5RYj3M4yMkLwEKcuETArobhvFnVzeLHdUbdDJidY6ZKV9XuKfhFkEGytcPfDPWEUYrTbZcJ",
  "key32": "MCGf8e9RVSHLxEt6RUyzTHWYBZkqTCfWHxKRL5WQPzVxTPBdEfgbAVkEVofnu8qtUV3VJtUaToraLHBFscKK6aY",
  "key33": "3UDiMmBSyGJFrXBzf77EQbdSLhkXia4ABz37ozmGyX3QsswnzGZQZcd2256YcSfHsvEPgkwbWhMQWFacdkqZgNmD",
  "key34": "AavkMnSFaoRpqz18ra3qksjpJxabHBaGKL533BbR7oqgY2xYWrYUbRjuNqNWJ9oQdzoQw1bqNK49v2PFmdF3TMk",
  "key35": "25Sf86XPDgPodenMVXQyqthH66QEzwG4yQqqUJseWXvgG1PDEprTKYqNfkyzD2teLjLNdxznfNPoJudyvpfWLHEs",
  "key36": "5qCzfBBWYbt1YQbCURFwtGeANqwx3g3uzCAivFueEYS41UGqaBfkemCmmzDsQqga8AGZsAnhKRFNXHUWvvGRB7r9",
  "key37": "bvHbJjjV36bhert6FTJ7sZRnEbnHGYRmNd8L4dvz4pdckj9YMv1hFJCEiyRbo9XVns1YzPcwV5xwxhNFb4dGGCb",
  "key38": "3JGHiAVSCsP7dn8eDnwXkCDEjz7fCjghSDihkXdDpA2WzCPd6bEYGWRR8shbWQXkQ2EYmGHFpHH6PG1wxFgJdBo6",
  "key39": "3mGJVJieLNe5c5aANAvNp1CrZceGuUu81QmXHnH3mCbjERKGiH8dqAdtSd48t1sndvMj5tM2CXoBaLpvUnbWA7h6",
  "key40": "5ydnPumSYQ1zwSzxCaSa31wZ4PVCFbpJh6zaQDt8JA7f5kachTNmzYnxpYX2Yx3F4nTFDxMuU4pjYYKNav597TzZ",
  "key41": "4JZeZinAupzVXc1epHkuDXfJf3MYqyaepXr8Q7j2CyqU1a6cGyKtixgCSdLvxxNu9tKhKw4k1gaaVo2vTeANqe2b",
  "key42": "5Zn4ULc5UGUeKAk53QfGcDpn4mPWeijdmGCBeqvuUw2dZbyeyYvgkMk2R59pq9DHyC1ZrtsBjqq6xyYvFvm979gm",
  "key43": "2Ny5jJoicrKuTZoG25bAr7wMYoXmqmuYSAabs2422evbB9A8KhKh1NqYzwR7MiHAV1JPUAYTds6XQWWrLykD4RX6",
  "key44": "6g3baTc5x1LDKH16hBnSJafu3WKkz6p1rtBosyf1kpTCYJi799a12dKC3Pp4W23vuL265vTytVbg3RSSBFQzHL5",
  "key45": "w1AgTvorm9zVHqbsGQ1YewuzhfM4DLEMQKK6wbGnrzH1u1xoZWfgrTQDbtU2wHQLnvvVMFm6RmUycGankhBFpaL",
  "key46": "23FKnoqkD9CZY1bECsCVuKLN13gxk3qT7cnonCygkmw8kA42mViBz3fr5txkmG92porarSCYrJ1dCKN7bHyyAU5r",
  "key47": "4hT5ZbR9JGWJGk4HzhLinugGbB6LFYMzcQEaReLc9B7pLUAC9Wj8U35D8obJt3dnBr3LCMNdB8q37ZHhnhs3nsp4",
  "key48": "5y6274hhsvgKxNA1LRmNqZsmFcZKvj1ngjsZwfmsYvRB5yLJNRhgCuFZFPH5EnzZHyxymAfEXqXkBzsnsGeuCDuy"
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
