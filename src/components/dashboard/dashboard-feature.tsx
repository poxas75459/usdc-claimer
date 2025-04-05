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
    "3UZSdetgjgSazq5gkkwTRwLZYDB5gbDDKrYKKcep8YPtBTo75RgCFrUC2eZvS5jxraizwGvZef2CgbZ9BJcaXLnh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NfGJvfR3BpxCVR9rcivgf9YyXPzBFKes4Wkj1816WwU7L9PZBEx3MkfBDv6LaKzwWz1FUoYS89zz9Us27ES9miS",
  "key1": "4eXDkQekG4w39NwXk5UQj7FiiN7VhipF1d1woC4SoY7MT6j1z7xwCS8KPHRRMUnYgDCLL6RwWzsjbWEtRKiG6EsH",
  "key2": "4oPbTqvt63Fy984oRPwVgextYEXjiRdYwts1fHocyh41BpvJifWZV9zQuGSvRBxEGbgzUxvEaobZDdQkhQ7rTUzr",
  "key3": "V8TrTX76SFe7XecGr651QyPvDsuypoyUiJwck54PLrLfjFs7HyU6GwrfPLZp8FuNETSHJNNnwWegniSxdowPP7j",
  "key4": "3DufDbvwi3P33Fa9BjHHaJJWwyFGV7zxnSDU6316qSx3Xdpms8yu2dXTcbDacp9NAz8ZxqcTC7sCdWiqMqVzpPmV",
  "key5": "VP4gkoQWXEW8rCo8N7KMmBQsnAQuHyh4B2gwajxSCUh4SwAcr9WsmxsZKgXEdiz9iqSpfjwBEgHuXecRYth651Q",
  "key6": "5u4onFb7ipd6snjVWoJ6RutHc5ydZr75qX51mCEPWXtDnWk6gRSaJaoF5mG3H4gcBVQsfoBeQVXMwgLnyeDT9pRV",
  "key7": "3MNeiG3Nzi5ZuSvBFQR14rwJCzRhpEsTak5c5ndYqQMU6jfwzgA5vZ4y3iUi8J4m4dgEEVo6R3NANFN1Dk149dLH",
  "key8": "4QiWScGadGsqUZxMgH9maeqZgcmVhdNhQ2uGCDzsEdhvgkZ5jh89jSvZ1LGBREYWVfGs8mVqkeQEQge8fUFM2d5F",
  "key9": "2ABvsjFJbb1qm2dGRuJn5VJJFZVfQDN9iw7vyK3Lm7JsPgBepADz8twfPffoy7oz5JQmtZkp3L9JwWXGez1cvg5n",
  "key10": "47V4ydbUcVT7C5WQCE4J8m1hCmfkFitAN1gq2JW9aBq4cvrvzhHtC9qGd9SxYtkcTyCBBPP92UByjyhaMbQQx5DB",
  "key11": "3Jj1Rj7i8bdxJHTcdey78ykfwh7L9WorcKPRHzHpmW86KBcPLwtk6jvr2MgbzxgTYZXesoekK6juLMcbRCA1hX68",
  "key12": "3XJhdnmG7KtuSVPLFFTGXfPFiPGEFb7Sm7tp75c3nXAPr3mjyjzDZuU8rc6r325i1YEuUgb1qeYDxSz64BDqZuju",
  "key13": "4D2aGa2urMAqQhB4aBMq8fRzu22zboxaLSagCWo7armApyogYT2KTYNLEDf2wrNJXT65nWJJY4U1H5pKKSWviYQF",
  "key14": "67Qn6kdPm3ZVMthR9NkW8JbYF92HYMh5aviMXRvwUD4juyTSRVnvgxX2uKoX45cEFzBA4w9BwzpkEaSH5ADnZVAq",
  "key15": "3uparjKKhcDkqpmjwRAe9hF1rNoEMypdwx52nLKNuPReaek7wawYrGbcK1r65ftXjoV256u3dpzA7e8xLUgWKBJk",
  "key16": "3jWpS4CWf8yeN6Sawyq7oC93caRB2tbWAE9YT2GSBW8LshSfS23ZU3Wyv1vph19yBxyPZBck9i7DDC8qeoh6jyBT",
  "key17": "5F1WxpZbfxo2pxSRVW5tHn8xeEm2YXSB4ACx86Yc7GepfwnHXgxdur7nfo729houBLLg6oF8cK9DNvZZocmDjLzX",
  "key18": "2pLAGak448MqQN2uDa883B1pqzeaUaA88fMtLVQ7Eukbmwn4ZFVq7yN1Qo4ZdR3QZAP5BtQQU9mSn4iRnVdbgcWL",
  "key19": "UJaHLBHYWTYqLZwckCdopSvamKTLtw2HAyTMfA6CwAvntNZSRkhzsu34uUy28Jie6NKbEfQEKDRHDwGiERmMaWm",
  "key20": "3dpXNes43244TAc8keJZprRpeXgUm8172V9wZgVKMGNRZbjjxGzhcAwWinmeUzHPnsTdyDXLsmLZjeMdMagb8t15",
  "key21": "24R6jhMd9Ycb4mFqo9gf5nQeafwfTccQxu7zdfPRwMQzi8sSUGDWcHPFJj86qjbE525dte52Tr3VyBcaUmrhKq7N",
  "key22": "x7YEydy1R6ThggspfYiZsDx8jBcUgsx5Yk5mMK8R9VYsEeYoQvWYeQN7z3c9KAkxvDSiwxLRz1T4cYMaw5gek3g",
  "key23": "2GZ3YtyhKVvptPN6kwecsPKjsaKEF26WrEdzJFzsHcqTcQk6XG1nWLXHdoWBVG5VMmh7UuVy9LtQuDncxXF3bZVu",
  "key24": "3MS71nZipd8hQJMDYyGkcZD7yb7RAHRDo7UX2UGyrndNbkWzCG4HGiWC1gw8RTPmb56B16NVMGmL4xmrqanmGSHL",
  "key25": "4sNvC7cGa3dfSsQH8FGdkY8sGCnfMw9TcHLZ6i5BM3q6TckzcFNTfQh8inunxmo7ToWqGFSKhriLrK7mmxXr9SQ4",
  "key26": "3ww4iEYNth8hhtrx9vbzdZtCTwfmxqFgRSid2vxdiEA7wwqQETDa15SLTcJmfpWF5G9ZkXaMnKCXqrgy6aAnB6WR",
  "key27": "4fXpaUCwQqhcLwD1CSRuv6zbk3z1mZmMx8LMwft88WeEr9yTYvMRMqq8v1qHhahsnXRqGgSJHXLM2LXMqb2FphnA",
  "key28": "5Kk87cPkuFhz5GUnypyGhCnEJKzF86s2RhVAaRT8ZXawHMvqnekFSpS58E2hLVuh88Ge3CwK6ejLji69oFMLkx71",
  "key29": "cqLr2b6DyUk2QnamejQ1XScQ6Zb8mdrppNvdKcvowShtXx9VPFDKgV7756SoSd39GritgBUhXyh6WGzWmtmUTH5",
  "key30": "3a6N3cgLf6h4kXB2pZL7X99V4pos8JDYVp66oXYGfowcLWZcQjYTWEHgtLPqWwVNE7nTTMBvQkf3BNXJmB1ycrfu",
  "key31": "2CJMK1FVe17w4mUjhwMh4n88FfAwqsDDQ1uL7ZfDtTipqUWrA4DQETSQFPmMuPnMBDqkrSWnGpSWWsvfnLvAkhHV",
  "key32": "jnsfQGMcbkrcgYmgDXuuMVLLSPpe2y6e1QdXMChp8EsMuk6kznbXFR1MyKbVRoYQ5uaa1caxZdCqZ5xzUNCKS2V",
  "key33": "G3ahMF9Y3Jz4xjgYz8cPspP1BdfeK9cvsEek3d5oKwe1vkdEm2YoVvJ5ZfG92J4PAin5xvv9Ub3zU9M3KcdhSXR",
  "key34": "3uJcjJYCH3yMF67tYFFh9ceznMVMEBMgogEEqnaW1sh2WrMPfYd9e2SeTRQbG8rKHxkoMQe25x4HQamHt4bqGBvZ",
  "key35": "2uLegGbgEXUdf79U4DgRhM2jYBa3fFGibmdAPtB1NiCBdiLsdEs8Aj1jEniHx53oAV48kYh6Abmtrogdd8BNefCL",
  "key36": "BBE8YXnCQjEqjRJJ4rAwqbBPybZqzRzYkKci3W3EFGd4M2DFYyXcoPz94KMxS3v82NCaD9RmoSuyzvuzHB2S6f8",
  "key37": "ue1W3DifeqmV7WKFc2qBG5mBKd9X2jwohDXbj1uH88TkbAAK7hFEa6nisHeH816cNmqYRvxw1shb9AxhzBrLYWm",
  "key38": "5t1yknavYyQ1wj6VnQiACzoVjmQQD7CCkf3GwQFPEoaaSdW9sc8ezfcFbuk3hsvvn3zPEC8SCT9eeVZUGkiVuiEb",
  "key39": "2ZAfcHqShmPxKrcPfJ2VLZDXYNzGvnszfZDDxSLPvySam1Z58SwKfGew775sAyEkvX7PP7KETJKPYTCGySgakwfR",
  "key40": "5cGJJkmt63z9mdDyTq3wLUNRERmntjpXjVDmUfbQCp7NN3mLDy6XqZTY25cmc5tM8PSPpLhbP3sDd7ghwSwxLpnG",
  "key41": "32w1hweA52BKcDWSvbSTRRy7j6KgR9d2VUkFchoycHhDqdpFGsCThdQNGsitB9ZHntUPNM3uR9ANWBwLJk5inks",
  "key42": "3pU7po9JLjdX8wsBK2XKrhBtxbpCADBgwhncYsakC3BBeoD6GzEo2VEXuqVkGiaFyXARAasJJ8PnEqqiDvEukZS3"
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
