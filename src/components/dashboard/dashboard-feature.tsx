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
    "22bYeTARiNppikiQd2W3FXs3BXcTSdgsBahYwP9Y8RQMBLe3rEvopdP53ra8uPeMNxgbVVnivWEVNiQnVGhiYXr3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Guw2SXTFKTm3muYbxMmehLPQjNjefWzwqJsb5qUppgk2rUcWwrtQNfy1ixb38e46ujumLmCsYbB1E6jGV6Wxi3N",
  "key1": "4VKvutBCg357iNt3AA29H5kW8eQqnL9DvyfTiWr4UDuKntUSK4BdJwFGZU1iFcZYUweQQYr7ZhogWK4c5T8Lwqp1",
  "key2": "3siNbSQhp8QtnhBkacBDL3n5kFYmSpaQ5SkP7FP7afkbh6bLWQZ6dKMBUaYgQQgYTLURoo3B3rKFj6iqy19QeknR",
  "key3": "sWtW2nZdzQxjpq1WqgijKTy444n7xr3pmgHxGS8N7CggU6GXDKrxgCwA2CKBJkvaWX17egpojteey5oprSBozRk",
  "key4": "3xLRL7rezsSQp9dbypJVRKo7PnBEY7xkAoVDYVWZL9L1Jjfhz2Dd8iV1tsz6peuTTzqx5XiStgJgBsmVEaxAozuD",
  "key5": "4CNGnPjpE1QjkphY4wigqHQk3Q8yFm2sSTVNPjojuNDse3AaAEMjhqrwrdtuRX3G1vxbcWMyBcgKRDyHKxgaLLP3",
  "key6": "63HZJ3XJ9MSEzU7TWX1BHmkRLPJsXexk8nakAs9bj7NxhNZKBtb61W6p74sR9HMXm36QqB52zRTG5jXb9J4C1MTh",
  "key7": "3Yg7yoYzQjUJ9vcbpuqz1Snsx9mQhqHir2qSGjuudTAiQsi2h2ngM12VmXteFDnhxzgcq9FZf62ATJ4ZPamvAvor",
  "key8": "xhCPM2b4CymbnbeXRpSh4NVjodxc6LougkCrwNhXzzXf5G2AnFokFGuoz4fuAQ6PF4cETvJpoYMvTSkAaEukd1c",
  "key9": "3qWN9USuX7ZU69tUgiv5cwrBzMX83zqgsZF5YLbcEJix9qk34K8S4CWfF7rPayRVGmYzmVv15Uy5Y8eD2XMwVKMa",
  "key10": "669DNGpYM4FR3Esyt4usxk9QiUmqNwLjHEGpAniLGGW9EYdWyCHapNQVMsvYEcu17D43GienDvKBzq5UQCVYkqrd",
  "key11": "2XScWTUPNDLZGWKMVLPJrSoXM99qsYJiCqPDUR5tuK3yaHdkgkTLkgp4Rwct3bDf6BHKE2zMRn4wVgXYk8ZpA52q",
  "key12": "3SagEd5MrFtJRXvScy7jmrbbViaWgojY88s8QK7jH5TmxVcNiCyQu3fYquvpKKijn6k7ZLdH416JKfgNCYzD6w3R",
  "key13": "4hKVq7sdQmjbBhqRLNruxVUPHZoUVjdn1QeVbRqyqax9KZkdZ7b4p3K4kXTcjNgJKmwkD7Z16nwJVEn6QgXg3roW",
  "key14": "2QJ8y8hjmrcoxoPUxCTYTRcSR9FDc7F87SCaYbwFPWacwgkWZq1Tj17pwvtxVeR4hL7gzkWuRQN7YcsqTQtfqCRL",
  "key15": "3DeLwb1UhHhy4dLffWhkDDvbGdfmK6DKLuHYr7qFPnYNbafv5ywV9Nn9RV9JN8wrbAcMYWHDR7UHpnga9pGtgioH",
  "key16": "5cSpFL5xEogHFHRZKnPwvNPQAYuw2nfwpdnBzXbtepsqYSCTm8NYuhzSk5zUhqyUNTQcoqZ5o9UkYwbKT7nAxVyu",
  "key17": "3oHrDU9V3uE3DLprEPRTP9XPwJY3rHDYh5VJjM7BKj5V9eZq196pG9J8AneDwVdczasNdTxHneNDmjUKKdjZTj2u",
  "key18": "5t3agTLt5pVV1oY3yvGMHENdMJDCT8zjHDeYxDZtXrd74NNjD5swaVTup8XXiB2omfzXhzyidpgwS5dpyNE3KdkS",
  "key19": "557FphjNkXFY9ey6Mj2DjUNudZbWyB6xpo9esUj12c1DXy41opCB49ueppPzJFncgdJpVhceg1tJhcgR7Ezs9uaK",
  "key20": "5p9VQmKbmtMYfD5Ye2BTqtqCPryhmC4W6k84M8939vTwFseUQLMLAcTSZwZjGgB8qAPoppLC83s4ap3yuPqrG39Q",
  "key21": "3xJfngAPpRcTX8mKkyfJYqPqy7juA7ysNi9xSv3tckPC9egWLdLN24H8bMUYZFC1iy2uHby68bP6vv5KWWohJKRc",
  "key22": "3bdbgTyzUV9KD2ivEQBPKWvcotfkETjsFu5UwSXmhhrBobp2mRuXuFqRUVZCaX6a4WMWUbS78ZKCqpmQoXX1pYgb",
  "key23": "5RXNhE1jTS1UB17yWVvmzbLQhp4tU8s9xgFvagM6E3hLzcUt12AE8jQXrQmsq8nojok13VHuHvGhFpJLkeAQ2zAJ",
  "key24": "2ohHx7V66cAvxdtnaWSnAuoAe9NQJDdSQtHmvNggsPsijCfVBayMJy57xcaMHea35hgc4QKdZnBp8U1FDMXy44o",
  "key25": "3XFfkYuAuotC2KJjWPir1n8FrtbdPZxa8nNaRX77iWxYBpcFZsHaTvEUjhQ2LhwYNWoRJYwjevPrHrKfV6x2k9yr",
  "key26": "5HWYtdjNoxgjBkE94nCne19ovxpxJoRLgAJSYUBG7TopMp6yMcA52P89C8NZJh71dz7VUnmcQbkyQH76cHE71AcX",
  "key27": "y5nGNJpEWBVeFYM8A4rmfzruPVXJWCzvdpp6WgWkC8asHe5pCsj3CMMDgNYz1gdQDgpR4QBeikB8Am76v2rxT8V",
  "key28": "Hv13d7yz3c8qJ79C4BejCGVXEh4FfE1j1LZLimoWYc63XZnk6YVq7ingdGYNrWDAtP6PUJgdxaXZeuDDTJFahb2",
  "key29": "24ay7CiGovgrrrXVdsrD4LtSvzFKF4BXtY54skA41VxsLCzAx1zCcvhqtEVQpCChtHrSZNhCW1gs23KKLoygjBiE",
  "key30": "2SEAsRMjfm9aF4rhFVNvcpuBQBC8cUdCP4HJj4ja2mhddBRuzKbUXZQn7iRKKN1jCX6RrPzhAn2EPBH1A54Te7Sw",
  "key31": "cbGSEqb6qAYuFgkbptzjYA1KKf2MWtQk4fsLqG1par87aBK48psXjipk6UAYLyMi1wLg1eQcQLeanrYF4ctszg4",
  "key32": "4um6x21dRZ1mtKaFrSj7CcGEAbGod2rThSRYBMdzAihx69FwQZ8kteTmjhcDnAcarpjERaTyr9kTZgokRsXkq7GQ",
  "key33": "535ZUS8kCwBfsyzYK18v6ru37XmwB4eVZhiVB97BdseVHkNu9JV4PwodD976U3NqKVQWyTjymAqshjcA2xiHFtP6",
  "key34": "21P4dhf35iej6CPTR58N4BtMpMEUh9mojymfmLZTbaWL1zEsGKKbod1RqP2PryPwgbcQjwoyCZBWPUv25Er4QwV5",
  "key35": "2inLsZDrMsxTXLEUY3TiAhkHbAzdX5DE6QDDj2YUsQ4dPTQ5bjpAUzFqjoFyRzSKcdJXmMHnb6AKK2zafTwRBHKZ",
  "key36": "44yLP91LG2rZtEKd1qyGtwXrFr4gz8tHQHwwQNpCnMfzpuGBVm1NP8d83MLn5uvZ43Z44DYe4fsS9ivHXb8uVKyQ",
  "key37": "eupCmk9GrSG44qrp6QdnHy7ELMArLiETYm8FxTRxTtSMN5jb8NGNsm3e1Acs4WAV9b2oFj78Z3mdNu5odkt5dAE",
  "key38": "4TiE8YAg8smSK43bq1v4nzb5kzMEdnbFjfeRCci9gGo5Fut4hELZVe6SD91EUuJ4b76xw48htNw49b6PocntJCPH",
  "key39": "GYw6VfXQQ2J8jfPfToMme3na8fxntSGePNGyRvuikTzgPLK4fNNFYPFZJAUqXpKTtbGE6BgPsUtovXZPYaNHZwV",
  "key40": "2GWJnjpEDLYCRfsUS38kATeH4mhwGNY4pJGm1mpTQbe4PVhZUv28VpQpU6MxtGLwZfVoRYv9CiXdzmrkJjh9mJsb",
  "key41": "3R1xLKGYdVez8TAZCig5UR9So9xGVJEFxN3D9i2ACAZoAMAjn6Y5TwKMFRpG3BqX6cFzxTi45kQ4N2xSUUZxDDZE",
  "key42": "4uDLJNv6jRB4JBAGmkGqvmQjXGruZLVGjKN2xXT74xnH5deeLCVepxoRkuu4DWrybYdFcLG2Eq8RcsHAG6HLCucp",
  "key43": "42z7bHhn7E35La1E7NNPQDSEgL6xLrq4oEoiX1jnXf7SSNe2Z3zNc4H78w7q4pNMV8gzuv2S7WxWuMs8QBiaFToo",
  "key44": "3hY16An33UeUsG6KstQW4X62YXc6fxKNSr1gPhAc8wWEmiKWP6MYytbdo5EnmWXzPewzaR8n7os3ajdzXKPdEnq7",
  "key45": "3epJZxYXinoeY7ELvZogjv12vcERjfjXw9av2ftKYbQh1sNRWqfiCdvXkZn4ovzY98nrwnYgsWyQT36fZhi2Foes",
  "key46": "3RWNJ3p7BmbHb7u2AQbZAY2BJthzuvyhmzyJUytESrFqdb73wHSoJjxygCNte1pwVgng9zZxv2E4bJAxNgvtUEng",
  "key47": "4AqLyMb6HQtJUqKE2MT7W75mMf5E5LK7ktzSTGoxTfnAXWuYrqH4txVMgpiKHUTyshPa3M8KRsWxLQeKduZHFpp6",
  "key48": "4Nwzz2QmUE3oCVHeWgQokM4kVbJaBUAVcjWwTiSU5GAGJXqhrRgJXMEJ2CJLRMLocxwYvNXf3Mh6792iNRuTNqmY"
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
