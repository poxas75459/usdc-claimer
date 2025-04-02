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
    "5AoSc7ZrTFpWfLxEoj88Akrd9JN4yZ8po6QVeuiP9X7xZcm79P26MbaYi2WARwajr5M6SK9XehHJiNS23gvdx8wU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xuoXz5AwwKgZm2KAPX5FaWPQcdibu52wYc7eJwjeqXo3ozSHfcFMyDLwtuPojyTYjbTJMU6mCbB2AGtP7TEyKvq",
  "key1": "3nLWasfAwiurbcDL6d53XC1PVvdaVURV8hVP4VXiAZFgaUs5fduCyBS15AQdGvi3B7VceBkP4D6EuHWPkYVs1Juz",
  "key2": "FyRHyDk9qYeTbg5W4cngko9bK9WpRFyDvrVntgWhtfomTL7BqZUM2gJ2JxwqtndhetZVQGCJvGD1WaUj2mHEXpb",
  "key3": "4TLRqwFRNTSdg8xK3GHNFBtt9i6c7Xw1PExSyyyUotziLKJRCpu23dhZ6whQENdK6a4rwE3DQcjd77KKGx6r3cHG",
  "key4": "4mwXv9eVrgrXDayMV56o3UVFxeYBFvzjzVTkA4EUchfmmCU1NBsEiBZi4Mrfxo3UR5eVwKYqJ8wJkkP55h2VqGab",
  "key5": "62XE7sFd7JYUj1Wn2U4oJVwxmfxR8uSx9JqyzwHJDfkK27tJmzP4qGW8Xu6qB2QEgLAQsLGukQCx7U54FHtoDKPu",
  "key6": "qE2YwptSQEEFQoG7kP8yMQScpsZWGjuPpXwpnZitT6GBiFf9BBJDao3joeLfFBqJiPJp9aZKqtbG9wzcFrhHEkK",
  "key7": "cryv7GkUzVJBLXT1ELXKyL2WL22G3ago6TXfJKw1DhDzE88Fmd2vUKDq2Y5sNSA1km4qcTfFAhkzeWn5xYweaRx",
  "key8": "Fx4waQxFHjevAQD4fGFPK7uu62YxhAbGjc9JLNo8EuLFHbLTjkJi7iPNiUJkhNzPJgMSM3aVr1DCRHUZ6JDoTJH",
  "key9": "4yJZaKnkH1vNKqjCzBjQhnSAbv3xSeoR21agJjhnLFj3Dyba9QPW8dTw1qviwfFivtGXLkpADr39a47MSwMBzi82",
  "key10": "5YKpE9LbCU1mbjkYntd2LivgeHg6GmYQjfQx7oKU7FiDLj6iXVw5Z3m4Yo3BNiHG6LaPTEi5qQWBzkdna3vxwa2q",
  "key11": "N8iDTz987HbdJ67bnghcvuj9P3e4vegxCEUSVShY7PCB7EoiLhy2MASj3D3b81ghCpP6LMCra5PdNQDhNhvrndA",
  "key12": "53AqKBvbCM1nLeyqyKcnGKgf9yToMey2nYxHrdGGT3k2RB9mmFUCEV292xEaq3dDTR26cCYfmhyK4ZP62yLQD3Kb",
  "key13": "2qJU7Xoy8XKE3vVS69BBXwGrFLiChKSFfpXmRmpVARJRCapJZjguFzhC5FiWd6CVz4GWmi69Z6sXLUys77qis1bX",
  "key14": "3cXmEXB9y1sg4vVEmmuMsvaFExmJ1iRcR1Di7Fa1S82uZWv2EDWiypcsftVgLUC1VZmuzfuFk5C5V5ebyxuPTvRP",
  "key15": "2Q2zUnFNW5SQLLJ1wPTvDpajCWBhqHh6BaoArtPNVX9PCCLHDc3UMm8HwCqvaXhJWZfNnWoa29UyCVGuji5asrqr",
  "key16": "5NJbwSwgn1iRuSQs2F1YNttHDzTR2ZKaemUF4szkF3wCgRSENkw7aHUcRptfSKLyiGecKTWGhQSjTU9qyHaYka9x",
  "key17": "5Ah8N84pdCH4YNaKqW9wx2r41XdJFeavzmVwz9tjK8BpD87dQNQxyjrHkHGZKTEEsANGxbUfPGJw7frtx58aKbn7",
  "key18": "3XSUxba3Edf1PSsPLEwtchHSPNtGdSxxmPLvRpyrzg5TfSv5udGepsoWD5yN8DDN5UMpBd1DNrHvrhXktR9j9Gn3",
  "key19": "2YgNu85HLK5CfonE6dXHfPtW5xKtFYaUFFsNfq2tBm4uaYmiMpZ8ZWN4fG17gsbkEFd1MqCr578sDXsk2MwXLVaM",
  "key20": "3VtLy9iaJ8xHbzCgQkENuMfHQ3d7xXuBSAHexivnvGJQkf4Zep1EqKJR1nEspGJy5zpJJCbLJZdvkuYqStqqyZ96",
  "key21": "2JEmcEEfxbQBpCoptDxgebiqgWxAGeZ5ezxqpvM8batU8aH5n982sRFmzzmKq2k5CCuqHpecfyRULj7oKsixJWYg",
  "key22": "4KCeMs1nQvShUm7dkznPArpT5eT1MZQkZHGUijfouCmcRm41becqkAzZ2Z13ZX7gxotLfbt4ZTKpDcZ9SQhdiakP",
  "key23": "2ABAc5Xaw2ke3oE6pJLBVdx5V6bCJ3N6veFV3H1VqBq4tovWTt5Ct9mAJTsiHqh9uwLXxaubjRA5iP241NNYvVU2",
  "key24": "35qN3z3VK2cQjyd5Z5Y87XUZ4bdhbfZ3n5aDayRVocHjfkzjdiAoyRomeExRuJCBBSHzzr9hSuMXZvDZtx9aeWx6",
  "key25": "4kkaMaUmCbc72pFqWhy8mPYtUgaT66bPB5vYmrFycfHWLKhLEd55rvAATDBJFq9fGVaDk4T6Rw9vwYdHfsZfxu4A",
  "key26": "4tyP231aZJiYodxf6fbhCDvL88SBQVB4Q9mfBn9ZU5MKrgfBKemv27ek8gMUCKDDf1opwoHjdKFtAQ8DiYidJuMx",
  "key27": "3rNB2BqbSRHPCuUkQyg2YtiuBoXVSCYxZxLJeBBKKGyKePfuTh9W8jzo5yQ2QuhscSVN1TGx6j8WoSE6NJTB8ehb",
  "key28": "HeoovLgagoDhXR6TLUzSposGgeGzD28YriYfd9ZfbPqYj93nxssd7eEjezpnFQreTpzq2hg8oYmnviJa8vcCDyQ",
  "key29": "5csfLC1XBZ9Qmi1ebc51xDBgxBnkMcKGkkhbtsujtunJZiZ1mNRtKyC5Wb9Y3xtVxnCDSo8uKQigQPVEzprzkmdp",
  "key30": "29XTuCARcJW9MsdLnouQci144hnnJEWygz4f29o1MpX1JMtj4eGA7dpLZArqfkNKxrSnsa4151oVBHFiD6p1vcvL",
  "key31": "5mhrtxQnfmBvrwhX2dwxQcZnqsUF4HYsz9NzB87fTkDfEb4KYuJK2LEmHmLGQ9FbdmR1g6S6RAhUVKu6Y51AjSDD",
  "key32": "7wvpzZJAVb2f3rbFU2Yib2n2E9rdcV9583h9ch26LwVhPswsbQGif2Cufx3Z5w56QrLZEq7XrxaDsQLuQSeX9sK",
  "key33": "45UUAYkTox23Hc2Q86jL59VrsyKypUBXs4dsTSQ3yPwYeYHcFHoYmGdLj9VT6DFLZuMJuyuLnJXmMeTHNQPMdY8h",
  "key34": "qeS8UCQC6EaTH68SKzVtnKowF6MtbVxtgcABM3CHt1pnyGTFMjKpTPH77AG9uGZFRtquS8tmRBk6m5DoxGa3ihY",
  "key35": "4hKShcXtUC2TiphdTLJepg8DhUtR1yxiGBgTY75nMaAW3CHM3W1CWBunwVQibUFcpbCYjvUCdFYc4TQXKajDFrdL",
  "key36": "2y93eMH86iBAJ7g3ERxEQiqHmfpDHvfgCtUNbaHsTZtMNqzJytU9GDMYEN9AZV14xXK27oLimo5UxJBcJtdeJrZ2",
  "key37": "ckqQWEnmQtvoy1s5iTqGNcP8Q28zHidPeNd1zgJmdmxZQoMKpFWHU4pjmi26ra6RAJKifgYainqyo8Pgu9JfDVc",
  "key38": "2EEbxTnaGxUeahXyG5vLHXRxHKKHPXmCrTZScvxC2x1iW5P2fPg2WyZxMTfkimjZRwhrpAP5T2uRNUPAdbwfkGf3",
  "key39": "ecU3PjVJFT2ivzkmk4omSsNpRhxuMBKsz8UC25WJvxG7Z5SZauT1Ug96hvCa87XgYZRrVTC23Xx3fA3Vjt47myG",
  "key40": "Nw1r8pCXu1HhxBt6qGWzxS6P9sPVXakMAgpMW1tFWWwR1Wjmrs1pRxq6ppFwrMKNaLL1u4E6KZats2Qw9Wwnw8u",
  "key41": "mCnu4mNVP2cX2BQyq47JL1vS9b8Zt7qdR3BoqX6YXCrxwLqjtX5tNrqS2zAQJvS5JKkWzvGiX5C9tSwhvUXFpA1",
  "key42": "2KKpChuTwm8gNCANXrBjKTyvt3X122qm2LUeHaEFmcwzkjfN8TExjRuiQ3j5bGKDhkD9zXLBCeh5HWaK1Wr2Sk1E",
  "key43": "4nLkUUt9yXERZexYfhBPNM8khdH7G7u6BsBZPc64QtdRdF2RVExkFus7AaaKRZSZGe5p6DJemjo3cxa1JsNGqeB6",
  "key44": "3z2Uzm849VvivDhVK4HawrjFhCYDFXr3ZjPkd4Jj2fR9LMcX3U9vasjjbc1Tpxj9ZvdWHBWmKtZw6YSympmUYg2B",
  "key45": "2CFSLFxsGiGRDwfUJvdisEnJPRHwtTkrVQ2aBAFhRAfnLFPQ43ds9zFJxc4vaxfQcukCrGqtfMPbabRvr7cCz98e",
  "key46": "2ez5nqvx7nqQKPNX56XgstRgVKwaygdoM7ne5b4bXAi2xWDt2gGh3TyGRkp7RwHYsHyGTrzZ6mBiebrQDrEsDxmh",
  "key47": "5fGAqgxpMsoYFYQBcKkx95rgFMArjy7WrZcWj45vPhhnc3Eoqa5sqHHb3jseme14bbCYrdmruRgkLSzTtFUiWE8q",
  "key48": "23atdyHdAFgTXY2D9qRT5PYX3oAQgUDwNuvg2H4SGcqSdjf81V8KMcGg1R1E3MhGhYBdX2qfdvMdUsRdamux1Vqn"
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
