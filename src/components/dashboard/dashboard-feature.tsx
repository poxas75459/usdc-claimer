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
    "skM2FJ81nvPYgqEnhmhLU2udfuH9XWtdx24L5EXLemE3K8vx2MrFWrUWNkqZtYkqcvix1BDvjkpBQ4AqN6zKf4h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sZaPu6RyQjhGbBazuwcTvdZ8wnaMRFrWV1aA7wQmRTEYcu2FXEqXh1qCM6Ggwac19duf9rH5Vv9ucdercCti99S",
  "key1": "2fbR3paENHy5gPsCXePhfi3R23svwbN9NpCyTaa19MjUzYxrJnGTtwxsXDCon5bCd6hWyBgzGqiSeWJiwbi79CNm",
  "key2": "3xNDxhsCPBa3jdw4AG4XeAponrWEpGuuLZFmbqgLWoVhVDzrsA2VquVuAqCQspKqFbi5GSrxCak57ZsxMqz5CBdB",
  "key3": "66GPWgFb2Z3YMeDErzmLo4Q1zgJdqJ6uWzqdnkzrzB24qf5Hosp2fa3u8HumzHUcGcKiVj5BPG43kMEVdxxoPQho",
  "key4": "665xpTeSmvKaDBygonyyGPiZ5aELG1z35y6ijsRYQapQMxGg6SocsWfzZwkTXPr1ZBfvJUszrLvK2dfD6upqEbjt",
  "key5": "2BUa8Z3SNAYp7X96XqMaQNCLhqdfa6wcm1pYdWE4bJ4yWArsKRZk5rMR9GjmUewQGAg4tkdtjS5WtG4b5aCrKUWu",
  "key6": "3Dz8SBsvrQ8QLt9zNykjpa82PyQkhbvRt466iBbipWC98uz4abKDhSVxcNSF6LCzha4F4TYvjzJJk8kfxEw2u4sY",
  "key7": "v43AdKoZ6S86JYZwfrFbVJTvQXy7oEAehzDEVkuyCTCBvtXTLekXXMjjPSV7DQAomV16EFnAkpHiCnxjAWFtb77",
  "key8": "3fphY5bQvpYNKbwAmXwfup1J3TXkZ7t4Z6iKMM79eRAywk7wmqHyadkXAjUiVPMc2yzekjhSJy8BxPMGqEtruNDv",
  "key9": "LtdaF2bFY9xcSNRFF4mkKEVocjaTqpjiAx66crqsdatEA8YBMqZEYWJ9raALNyqDL9RGhgb68BZjWs7fRiuxC3y",
  "key10": "2zboNNScCz7ztJGhWdEyzLit7t4NxYNCSiGb9PxLNe5MbP6yqCPm5bNpqjxLiNyDPVqcuhwAjsK5ARHbrr69C5hr",
  "key11": "2kWpFkpjNStKJ4UkieVhmcrZv1ub3bA9oMVFdy257ZE8FZtPsQiuZ82pp1MAjLcmzDmxifPevFtHgcazcgR7WaxG",
  "key12": "j6mghLnGNJoGbNix5zCrvgNPzxW1vaWpBdrJkaRJUPh8D4s8o48xwfyvBJXAYykJ62SWFcPJC1vhLfrrpe7weKb",
  "key13": "3yHQ7GGSHiRfyGHDA6bLrnRgSijWiXoRiQeJxp95PGRQLkA3guncyx4K9oAjFto4g9m5Srjwd6S95VfJ9ddHoUJY",
  "key14": "2Aish3mF3kmqcTr6GxDUEroieqMhx7BMhCFiTWJurWzhBGiPinA26GozaFJcxck52pWVQi8PDWVuRTcfiUb2e1cb",
  "key15": "2gD7ZhbnTw25RZd5TQ6B5AC8qseh7pECrkTFMxEBZXScg8cTRoVV1oAxMxRCBvFmRryvNa4F81XutVbg3HC6NdSh",
  "key16": "3xFYPmyCjwQAeq8nLkpuH5u1kup2WGSCPRBopPHwc9as55NKY58Qozys44ANx2QmitTUrxCP4P4xN6Z4ustXtLH1",
  "key17": "4wx4ATkANgDL49eZnbPDh1PdHYc2bTZdbaww4MHvCfvxYFtsEp1uh2cqS1dHEVz4ii6N24JARtoCrJkTtiNKcbU4",
  "key18": "24wGGdYqcTXVHefaCPFfhJF6NGTQHwr2jreYpM4fCeZ1UTiTA8S8o2hXCCrVDif8pxWzYGcVrJFscT3yQ8b6Wy9h",
  "key19": "2hAYfHyWtbSu9kA129qX5o2UuWQ7U89VW4kjFJDFzzRs8zS6kMMY5SntX1Xpsq6NEQ6ud9jAtvhkdLecvBRktndh",
  "key20": "4VHnM8enSF8eNaUDTKd5M6npnjG8bX4YVjd4ozkDeBfDHMAJhCNGXYjATvzv1za9D9HfXtEBMemRDuPKh2hS1GiP",
  "key21": "7o54fwfVSDBCFUpZxzDU7ZPz65teexLfizTypuEEJjoLhd1C8odKSM8uAhWickZVEFKnazKBxsqBD2WP98tpivL",
  "key22": "5JgNiXvRaD8zs37HgnLvmmfTix9fa6xCkWMBeucMvKAqBUcqJzbjMpnQjocvPsxHXedXkimLKFEWG4ztCGF6Rkm6",
  "key23": "21YJmB5hrxkL7SJ4yLYZuMA79aggh4MadUWy3TVd2tyUYXn615Q8ZBBckEtdbWVCuyZMed2G19atwGAatXuU259x",
  "key24": "2t24CWKJNEjXNb4mxzYq9WX6fJgdWVspAtKiQ8s9dssoeXVyYurtc3F8LFoivyvJc72Nm7WRXbEsW5Qwuqrsm8eW",
  "key25": "3yq5moJzdzE4qALefQe9USzVhpWkfNwT22YSGK8CoyzgFu5Rox8xUgvEhZBNvps3ctugAGpMXBZfx6WSKixV1vUg",
  "key26": "58PiG5ZXVuEUntfTRy1fUMHpRQt51JFXFpCV3aLDwBdVVLwgkGTprfdUNWqvXmk2tJBQ5ELeLh5uRoVaR14cxjrc",
  "key27": "3iZezS3e6bXDbs5eUkA3kBUDQj4nCXpacvrurHSrSWYw5CTyL5F7q1bLjRuCRNUVvVQNhDttC82rGCkKb6jLS9ri",
  "key28": "393A2M9YFDJ7DmKon7x8jYmi1EpKSM15wZoNGQ992TrDkLfxTSzMqm3tzccoxMs7g4yKqNbRMR7a5W5jbBDPSLFB",
  "key29": "2im411d6t1tE81uWeh66yPXgEKGw24UDb4y7FQofsrEPJJAMWkTif5wZwhxHFJfM13aAGYwQFpZN33mL8g7gknZG",
  "key30": "2E9iBg3A1gSmaFyPG73HM1LKNHztcvMBthUfBB95jdWgshr7StLC4UADRPz2rpBX3RTzyXJByKaQghkQY6iZcQnZ",
  "key31": "3f4Q2kaHwnk6hhzpcezV8eq2MymscFq3xBU9WQYdCUDkpCFqjo7K8wTJY2pCZPgsb4dmiSkdkPKp3bCXh9JSNy8z",
  "key32": "HuEngPSY7R3mvReRyNHYgqBLr1MtG75o5QRvKQsjgLmbL6zjPKqAmhP1e9g4PLdVKjyiEtYUN8mLJzVc9Qzs2st",
  "key33": "5CAyZz7odYHzAAZUqof1cn8P46EXPYo4AcQMdhuJhLQ8CysJ4p69idNV7TgX4oxMgGPiF4K9NimgHVFkU5b2Jjhf",
  "key34": "46aeg8HA2KjNKGYHPbvVSkeG7fRXiirgcH4w3SjjAuUj6AHrujzRJveJu6A78sGseJDcMfYCg2d5dsp9pFcqrYxh",
  "key35": "53i42eNcAd9YAKar66SFozhr4A6vCzuU1qvHNQBzKX2dmuvz846gBwADFCozuKX2XKZLFCdquvCCeXZ5J537SEVf",
  "key36": "3XzmR3Ztn1P9Z25G5ePvWS1JV3WMWXkCWFsMS9oBMHDAa3aUFwjfyuTxMUPYV3QaoqmcvExmRjg2UpdLKJNWvDYz",
  "key37": "497MsLxqwbzAJ1h5STMYyudpyQpQ1YFqPbx5XbARHamFBevyBpdoPrUDt4Nk2H5FTfaYb2CBW3o4kTfkx6bAfLYT",
  "key38": "4TysFMnbQXuQM2USwFbZ2DYWNncVw4KudGM82Q622rvSfYLtkgccd265HA3e8eirZFmz38RctprkAuDHZ48VQMDk",
  "key39": "vr2dVnW13R3skxyXwTEEqB8P9Wty4wetUPuceBYUNS3EVdodPYMayhNpQ9vu6CYZ6ooQ8C3pHX26BWkLjjfpmmy",
  "key40": "5xh1Zi3ZwhuvSHB19BCwRddPhbVRtzqFbV7ivf37GqifuK1ezkr2wEkAb6oUUh4AY4ge5d8hAndVoTpCSMyuVQqF",
  "key41": "2sZtyiLMuyvwbmJqABcBQzm4oSdpRsq85y8dF6ckatcp3SMpHVPRQ9cqsSNKAgMXb2mCSYeTwMBNBvgkKR255H1y",
  "key42": "5tKN6oSythu9qkGqwTtrtpaATdjoi2LNFpf1cRkFZiPp8tBothT5TPHyuTiexwYCywKxWzJUxbSxFYpiDcLzt2YD",
  "key43": "3cEY12whbS8271gZzLHEzKF6H39kxj1qPHizp9tNKnrJymB9ebrnDXpxPkZhoyebpNgaTb2cNaFvRThryZ66Lgn6",
  "key44": "2bs3Twvb8w4mgdXmHXAE7XhEf3SJU6tyg7ZK5DPzddiD9ePVgCSeAvgGfTtSzK3ziSatUYJ46W7A8YN1bZo5sGao",
  "key45": "f6ty8V2U4KSyfx3RFRBhr3zPWnWTZ9A8MvFtEvyBNkLSNAYLmsHXbuZMRXBAKjEWASvkYBScrce3TEE82c3QnnP",
  "key46": "5TaBfSuSqnjxC3V1dKftiE43gGEc2CZFQJX4EySQmtgfpfrqzXVeZ9NvoXY4XTEyz8Bx6RMbhmwsTQLdhiTR1ZUx",
  "key47": "2waAH6UMccpfYH6wiUnet9tfJFezaGzjUUnyNnG27asUiBsh7qjBDY6t5UfhKQVjiuC9ywozNU9LkFpsRvxr3VG",
  "key48": "BPeYqAfHkUvEnmXh8he7tytTqFcrNYJEMurXRKF27TLRrMUDVDvtd2WHXRGzQqwcLYC7LXHSE3TBW2JM2JVCggk"
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
