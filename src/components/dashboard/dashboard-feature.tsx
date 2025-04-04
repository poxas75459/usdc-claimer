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
    "2cYsR3cg6jJUzgSMu1RMwf32wm9X8GsAUKVfihkeFN2sp1qAA57NQMyBbCuSX5maUH36e6GpMp2ALAQQFPd8e5E8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H1XHW4xp2VVvYK81tMMhPivVXjjxkMzoDSMywXGzmnhpdMkWgHZQamV4MmzYVufBPjPxMvPXa5WiPaXJ2Ypis4K",
  "key1": "5edsNnLoyphRWHJLeBuAE8yFzZwJfZ5VzTexWWeyohiwMXs3kSdTPzMoyXjSTPSxQbjav5HFMjkMsEAK2soQoUjD",
  "key2": "5L8S1QbxSTpaHWA9ghCJyqGVgQPDLuCAatbUWwEJi4iWqYaqtM84JrZYf4yHjVRHp4omaqspxK1nMLcUSkq6fAcr",
  "key3": "3LMeFqv4Bd8f4xNb2qbrZwc6BEXQHSCbHxmQWriYPvZR98Rhhg58xZSskFhyNxGL88bdkUK6vauhtUrNmZDjFMBk",
  "key4": "4QwuW2idVURAE2TLwNjKYHUu3DyuAwa4BQhchrpqdEB1cCrBQcww6VLzbpxzs6sL4SaS7oWVBrBKkiUNBXqyPmcP",
  "key5": "2UkzEXBxW3zeAScQ9X3Ly9RHN9HYeT4oe8QEc1yxN7X89GzGn8BHDus6Nen36tGqMJiXJyeiwrDgTXg6yHjYssi9",
  "key6": "4xb3n32gUgDjYfJmdpZH7wgwWMsD2phHRmz9xL2SZoVFormLWx8zwN5KnUs7EXcne4WnQWTw8wZWohWSc8TgL7BS",
  "key7": "2tw5G3SQc4HYZNynS4z1r6zYjxpcrcm2nCSbxThdViRUU4Ds7PXqQvRmE6p9VBhsPskGyhzyv3rc9DGirMsZKLL7",
  "key8": "4g6EBDtxmTJCrPbS2dvMp16ZJkTHtB63bKUmoj4WJ3Hjh5UNheb1szfG6cXfUKSBMYtAQEUE4ig2oFprBnQ5jzDs",
  "key9": "2NXtEdGNTxnE29sL33pYTgHoszDEmbKiy3LtcwQmWfP3jvrb1WhKBgn5wdVL1jad5WuMWaNcxUGu1CnEqevtfRTS",
  "key10": "4zb17WjVoQnNCEUsoehKfMSq9mirCq7DuGpEWgYR7CVb33BZYH4erpvcjbSYr1wK2UhnWfg66ER7gYC4G9htaZ4w",
  "key11": "5qGfbGikyj8FTt9FnwMmjsq8oKJ1xHBfeLnQc7qf8ipYZQXaHZnGk3GAdeUYtA3TFzst157Cj5h9ZiVyRmpj4wH3",
  "key12": "3wUEwB2JMPUTMckmSKUvMg3BtHqNpLFiNPoj2zYquDWpPRR34XPwixiwtUvDd4exsLRfZWoFqnSUkScJsrJFEXQq",
  "key13": "23nmk3LoCMxcjXepzWvHqt7aoq3LcBih1uGDwBDtswkQ92pa9JXudwAsbRyiUXV3j98534M1mknTkasVfMoS3ycx",
  "key14": "5ZXPWc6QbVz9EZYUzYGzRKKP5Z9zth8T5CmF8tYRyDkJCuhsKPA7qcLu7awiiMKF6bRHfsPDyUsSutPVG8iS6LpQ",
  "key15": "5sDMMgpMfgNndALqj2RwWsSRvVueHDf693VispXfHDa4yvaQCUfNwNdUwKbp8iNfcPHozzRZyT4o78E1XGSXQKiZ",
  "key16": "2shvJKjQaYX73k3QnAkKkgcLJ8Jaznmp6t7NW3LxCxckdLRcjKCZtUPR2rZyGE4MRFJnteSiV3nAAfhrYxEeE52m",
  "key17": "4KfndCVQ7tHGREMicEQU5dN3tPMrZKsPsSQaMjbKqhCZ5wrCoCRZAKYyt5iimGhzGuKZ1EqXkG38NJhphmkT2Uke",
  "key18": "4VeMAfftTpUEjatM93cZRr7gM7KM9H1he5pcYZkzqQ1QAsWs8J5Bq54vH3bYzaTetsnbgV2oSGEYAY6RNcSKTLbs",
  "key19": "mNKWjGxUx36z4QE9Fm8xw8juDnRCYcugKGUxAKfBRf3dj6oph8yYnaP7RztuGccFC91L5bXvTDqJJfGwsyGrTYk",
  "key20": "51fRKZA1y79ppj6CN8KwAmWyzRDn1wimcpMNn9aSQJqv7t5iTHK2qSBQuYUr8JSp13LonLSp7j7XLhu3cmY11wxx",
  "key21": "3BZC8eX2HvDcExYRADo7D9UM84voZ6feB4ScHswKM8LD9VHAkG734PBpJfmfAbCzRwzKHLMvCL22rGQa8AkGoPZb",
  "key22": "rcJBnGSqZwCV2y3A4TwPwPNbtpcsdgzL94Sj8JFsMouwhriA5FVuSDodzm8zA4DRk9Ge53CZTbh49XEYUZLtmAj",
  "key23": "33pRrexScCzTz5WTL9gNMWbwz36jxR42SxQc3avoy3LwWER5qrhatMP9a17BH19mkQmeiAgJgAyaBZZmPioGXpwN",
  "key24": "5uQ5Gg2W28ksuV2mJ7DKyvNojRdic6ujYrJHXiQ6VpbAECGnrjqooy9BnFgs2UmsK8frRQcoh9cCm3sX79m5qv7V",
  "key25": "221m9wyGjz5LFe4AniPmwT6tT1rEtDLjP5NoToiXrdD487ES5qSzvSSufX113VgZt7d9RmKVgDhJK16fvP88yJzd",
  "key26": "4neSB5v33EqMJ3E5fAgE6V8N3Ci4y7CHQknaMZ2cyDTyL6wQwS2aYKqWu9vTy7Gw6AtokiHkA7txLBq3HTt3nXJ4",
  "key27": "3hijhGsobV9SQhN591WjSNJeiDxqehmZ53LfXMJPZYuFJnCdjWBzeFJP8UT66qH3xsxehGwJHjqPDpHeMtnPKSP6",
  "key28": "Vcvsi2koMB77JGM7SZVu9ASnggWR7GaRUgPKm5C9S19RcMBYsCaaBgur8sc496E1AASkDJ228hYrck4k23eK1Re",
  "key29": "TaQrGU1oGVi1HJwKmWJnsMxrtCutLeKMFaCcju5AxhAf5WpovP1Z4sMHi2dPedw1Zkeyh99aV91uQZmiSYu1Rrg",
  "key30": "47C1vgsMx7o92u1tLYV2pmDob5zm6jMPbKSckoR2wR8jy5BBA5YcnWtQJhx98F7Pvfss7h6cQYP2Rry72rhTemaZ",
  "key31": "2W2CPFg29z2srJ8tnze1X3WWRKhnNhWsm9xDE9gKgpcCrEPgmiJ684Uc4nQTGPmqfhgKXnXpcShLJeqGqX1HLgNB",
  "key32": "3RhQKGFSNuRiPnbFgDrKh9g5inidkR9M89PFYHVaJztWyFhxQJ6Xqu224yNZn8Qd7uWuYWWXLHnki7736xo34PE7",
  "key33": "2fK1carBoZCS3xYVVfa87NkGK6ARCRLy7MkeTVDXAdyek7qgYWeSXkMvRcNjDgbak2Nwgq7JfLmVSVUFf69nh9SW",
  "key34": "3FyVwgZLp7ATQ7Ud5WLx8WAecZ6icLxSEdSDKZMBjPPKL3ekD56PHhYJQ4igFzbrpZvKa5oYPo6cd7BKKv1S3xrF",
  "key35": "5cDgwDpANbGzxxKRg4TE2CDFpV3v7t7Z6SCqtqRvE82u23Ah8kNtGCCzSbf4KX6YrvPtyCUBGojGqztsenfuZeEd",
  "key36": "3xkjfJRWNFs3AKJkHgrk9hzTWc76pPPVdfF1foAEzxYGTxBDq3vH2kpxVnqJDQL2jfjEfavWXJUH43jhQX1obD93",
  "key37": "9SXXXUFq4TtUbNTTZJpxDhcgM6L39cVqyYajNyM2moQKyfkFyknWdw2VB4MXT7QL7crftbbURfa7yxrEWjnVoBG",
  "key38": "KHxrStUYJ7RMBFjwmKXGEnU37diYCNQnpyDVLqtvzFX42v1deBBp1QPBxuR9TgxPSQ32jGV4StFCiCJAoMGJKhV",
  "key39": "22gRJMzmK2xuVfRKA1MeuEtSVj5CKFSZFxiMzqE6JNgEAhfVJNSox4PziGPmSHFABiFyBW5kSFBEn1z4vd5oNBMe",
  "key40": "fHB33Km5fByQ5aEtdFueVN7FRaRojApSwNbWoJPF577DLvW6HQQSf65tqPJ9PxLpfyhME1iuUVWqNzNmQnGuutb",
  "key41": "3hA2m3Mh5oXBZgZkngssFWZ9ZLUL9N4Qf3tL5UvcMCNdn3c7UmuvYGzESVasn3RpgfES1LWAneGnodRQtr4bRiH7",
  "key42": "3Jn6XqLocdqQvbKMEmmmvcARByqPgHHi7LMEYaUVsUPvaedoJEsNZroG6ehYCyco5fBcoocrXXaprYWvXuXJGLM5",
  "key43": "2xxXz7vbWxjRu5CtAaLuZTGZLjiSz6rvuoQWxygfrpwK4yEPXm9bFsTtj8XpyDcdE4cPxfDC4wrT8msEwfJEhSW6",
  "key44": "9VNSzPHGwpbKbT6SXX7KNZvBvhkM1Ue2VYfHgkqtKdR8kuZxXGd74UQwrApMARSsE5HNNQPf1jqnNYyxdysJKam",
  "key45": "21FwuyqvLYCerQxrRNANDZQo6tpjmuiX9kifChmB9Xano7jPYuZN69Q938gL2915FzU43Ven1TND6sHULuRTVBaK",
  "key46": "5oezZ1fmttnURCGVLbuEv3a59Mq9SqUQGs2nvczNYS9DYQHwXMyKj5khx2QWCbippwfd5b3LyN33DumKTisQtepV",
  "key47": "3goSsHuaUwE429FitUq9yAwTjCTr8UmBrVfj576FCGbFTNULFgcWaaH13iuYE9gghp6xa6CDJvdRyNeaeD4qMBBV",
  "key48": "gtHBqw5gH73rRCaVwyMBoLYhUscquuTXYojioQKvWJdKvrCwm3DaPRNC8M3SupHoZAznX1ELhLeFWRG5HctmH9k"
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
