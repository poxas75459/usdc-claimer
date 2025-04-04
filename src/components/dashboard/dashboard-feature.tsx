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
    "58c6P2djNsTAkGNfCJgpvQZbpVZHnhmFMHsKBrjksN4SQKuUDHeehP5WaqSqgVy2j8SMyvs2AEC9V38RWSp2a68w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Zros7TxFWsdtBM47VtLa3rKP4BwTYMfWfiiJNKkvG4VGJvjuJaR7FmhoHJ51xkCXyP4TH8ezgk3DrwjgnVaKVSj",
  "key1": "3yjd2R6uGVjnZmyEW1JDWVDUQsJsx6T87v2C82rnH29wesENHrTZqg5U4dMWarV79ufHkFpB9qvmqe92kvE8J7yx",
  "key2": "2DpN66NvJbxbbT2zskWuFuMfimzHwDrtTX2mADdYSfMdEd8iWGEpwUoJntkxfBAdKTM3J9KhaVoZGouW4qEFirto",
  "key3": "mbDK1V31N1VsbyLN2p96fjuXyTHUNK4S6ZMjF1AeWE6vMULcrzyjU88jiPP9LndGxa6idyJQMRS9KguveJFfNcT",
  "key4": "4HMsb5Kc1g5k2cioi3osrK4PWhHaBPGNBdu6HnGkhJauRY1VR1yNGJx4ujoxMmd6zRTcBXjDbhCDqjXdPNZ35WwM",
  "key5": "YKreDkxwW1V9bAYs9cbmTBjX5U1T94QqofSHkmtFRqpp4VSE1JDp5BFoA1z5iHfgo5J4jDaGfyLymHFSXuZpQY5",
  "key6": "PKv2xYFENc69XoQW2jje2PEdedrm1vEiqBxCkkx3QLKQMUpk6nbDYaMiEwZyUvmwyKbWjs9mjD1m1f5rFs6WNgu",
  "key7": "4YAXJuD99zxMnqe1SVKJin4tHemP8roHHaf8kaw3Nq4Xmayd528yu8yub9iiuJK2EVb7e1RTnAEVpuN7hNDygmni",
  "key8": "32obTPvhUp5s6x8iLUWXvd95pckBV6WjSmNJmKBQxkaKvFkv6uG2biVuSZ3c4K7RpA2HYZqM3JTfFuRnLMNoZhA8",
  "key9": "386tJFm9wJkrhm4SUPi6NJZr6eeD85VqALNUxfhCzWkzMyz9XKE7KigxQjYgTJmdFt6oBBhzJgPhDTiYUCvcizUA",
  "key10": "4TgULnH8RNHZAyDiNwYaSkFrCvfogtiEVPpu9BhzmrRumVRxpRHM7DRAth9Dor8rSyWm8DVn18TS3LSCo1ztyKMh",
  "key11": "4SViPoR7qphz1j2tMk5qPfCVKPxSdwqaCp2bvhE1Tio7rqWbMF11KqsucdEL5eMLGi5WrSFwWMPDPYggDcjAd3Fq",
  "key12": "4vNj6sEP4Byof52L11MPNCJjpErAGHrQoh9xmm5j8V1PNdtD3ccaCuZo5kt6rkx8Dd5vKep7KRcL76wsGzkmckoP",
  "key13": "5iGNZurxeqBsRx9y6tc5WoHachkrsP4aJBtwmh2giSM8oFr9tnMx1dAm5cTdFfSmHzRU9wSGkjW9TuyQYyAwfE54",
  "key14": "33bFF4e21SCCmhgzcKKr2xUgTmiduLVx6NiXrPX4UZTwpYsCaqzavKmRQwgYZ9izi19fPLr5o9Gj5RfzaVzKd9dr",
  "key15": "2tbesYZnvkoVMecyK7fiWinyddVrymSG7H62EhLSSf2NP4GY6sm41D8nDc1mRxYvxgY16eLfgc7c66ZADyoJqQBc",
  "key16": "Gynv9icHNKpzjqCJgCBhU6HNhLgxgLggwC8yWDq5W5F55vmUYh3PoNU4GhuY2piPQDfoeEa6HSAroEbgUqyFodp",
  "key17": "4MeTGCYbTaXwBffheBS47EpgM9rTM9zwWAtZh8xjkhKgDGSb7zD6VrXWY2svrPCbAPkX4dVSpHWULtQFZtFCSkJU",
  "key18": "2SrkKmTyn95Rf1y58VGa8uR7wjaPpXnMhcwAnsWFh7WwxNaSeHDTLu1dUYX5SpW5fkZRQndTUpWs4gMAgsFaxsCX",
  "key19": "aMCmJF5mXzaNEcdQVZ6KFNFwg3wb9MtAHZJpw1WGjcmZFe6s94Pji45eh8pqBrjop5PfXp6Zc4EUStbox3x5UoJ",
  "key20": "43JBM31wUTHU3bEEw3anFm7a2R2pLXA6nB8pJbV3cgpSrogot7GVQGECBDKTTkFzYGnx4Diqts6CB8p14EFyTp61",
  "key21": "5bVjBjmZjaeoTDcvod7JCgWpyb9RmXvWH78AE6mjK6yfWom5ugqG1UKSRBV6NSCJCUKoePqm7UiZx54zK9zzG28Q",
  "key22": "3iUFERxqQtddXJsFw6EzHHircjMGmQCN4ShxaVjZMLyVxybJqj3g8SyCSEBoXgFEFVaneFHE9UTeXGT6qsjg3fRC",
  "key23": "VRkKWRLUkMZstcnikswyswvzftxKdSD2e5NbhJNfgcrCeWu1myBmMdJ7CtSQxeqtPQUDjzx96wdU3pgSGYfrLrX",
  "key24": "3fdPYX2V42Cb3KsDepsL5XAVE71xBs79A2K2QB4Wh9qvrB2ZdgGNkkTpG795kub5rnLZG3rdYq8mN1oe4eJ2QkBa",
  "key25": "3vDKPqEuAUgMSNsZeLS8Esd7oYwXnbV2u7Got6YFxjrQUNZgF7xFnffkupfrMPaTcdmujHcGXAbAReiJTVLyX5vN",
  "key26": "535kpjcE5pbe65N8qu26Tfa9visz1ijKnnsyN6zyyYUbjgM3vnrWm56FuEu6HHHL5R1i8sNgWossVfoxzzr1ZFDy",
  "key27": "588Jp8g7Kq6MwxLpVMAkiqQUkMpYT2wgnygCYu2Qxep6dARs5yqx46gQnSvzKHqbkULKkrdKCdeoayxtak3nT3x4",
  "key28": "56HhimhUktqUeALHVhXwmBq7gCZLC6v6YAeKP3VXGXvu1t38x8a6hZRNG8CAo4H1Vb4NoE9BXkcJfS3rmgxFAkB9",
  "key29": "4bFf6H7UvD3oRE7K8YZbph8WnpDy3Nm2fkxur472H6XfpYRo79nHHoiH6rAYVYZSEr76dMXj8nQmNFk7kFvzLZv2",
  "key30": "2HjHKZpwejHoYXiCFG7WVrrQuNwPpizsF89ZRgcvuuPcYheDEP7KE5af641AfodArfsBEhh4NrGwqK9RLeSStJtv",
  "key31": "3LM8py5pteCAVS5Ce87Xh2TPf9retfJpMwbaLwhdhmFwJQQ2inMxVQJmJ6jvhCatRg2Tg3uwGrgZdgHsmXwkHoPp",
  "key32": "2JZ7Zq2mA2zGEXyZ29vDcP5JZ4nm5JKTbpumdDPMf427yRkhg14CCsmrYCCJcuFpHAQzdZmjgtCcormUSR9D6pWz",
  "key33": "3Hgnq6prjp6c5eA6RnKUAHecxMJKoPJPNnTn4x4ZciTjL55gsG6EWjkGyFrhwixhjhE8gpjDtqqf3SnJeN5nzCiR",
  "key34": "x6WxhBKTHenixFiRHCBvwHuEffBf9Wjf79shA6DZXnsHTNmvLS4gL5ZFvd55hC3e994tm4qFRpKy55kkiiKecbq",
  "key35": "2YHNaachUQaicBB9rExcMAzxWLcdTmwQZUU7mS1GjUQPwT6tevM1GxVMmC2e7cgvMXVP6JbEHZj1YarKgDsQELqG",
  "key36": "4Mzp19W81Vd4tJyat6tZfxgPkqw8NzruL7GYry9yQ92mqngSDw3pZMmgnoETxY2YxLk86SmrSn7zVuwRJxd2PYS5",
  "key37": "3w3qp7oa7mkfsqUEAMbWToGqj8tGCbJvJgUkfQQ8gc1nbLSfjUg5tAsnTtuWHpzWDu28AWNf6bY2YyTDrhRNYDPF",
  "key38": "3kbeLJQykRiQDqCGufrxMc7W5XG3rfkm2i629CibcKUFrQcbsya2vEGRrJ5TpxtcWb7SoWc5YFz5cqr5zxQpfSDu",
  "key39": "3aVfoHM3GVhj9edZJ79GSUVVw7mZHy6WZcKNfod3uETWENMBuhRVN6AAzaeahfZkJLqk9ZHpzAzTVywZ4cjZxv8Z",
  "key40": "2sgSiiHdBN4MSUJouaQ7LJxXSgDF9mXHmpUjee5SwBFxbQBfq9m1bjP3frcxWJSAviBqeuXcDWTPGdXknughC4qW",
  "key41": "5DxRTnsBZDRB2PheY52h9cS5m649gMLATgkbF1HmCLRdARNYTy77iHuawpeLorgwKNYtXMZhSgnQpiQmsgwxaA8g",
  "key42": "3Wi5EYZCNZe6VmNYCdmvgPR2dDUSprZMEK7nyDoqVaVi4Tg995dtL4w9QQxqF5cE5bFmf3gHWMikAg1rj4p2DuV1",
  "key43": "1YhNC7xiz48obDserU9bimsskauKSvMKN5bhLGfaR6nPTLTqv58JvEgjHQPWLPJwc8BqA4rU4DP3vpriemhKPcH",
  "key44": "4zS9KDF8ousjBMjtQNvPa9ocWNNpVkUFp6u7WvnJMxvrvoxdnxmGQnQAqBNa6fYC2DSVStH4u2XtNN84DrHRoTt7",
  "key45": "28CDNnBz3Nm5vcE4VLrXoEUqK8BnH6ek6dYX3jtzy8CFbXx2yxhfczkrF1jhbXj71tvkkUbmmaoa8Y2JQha8C68T"
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
