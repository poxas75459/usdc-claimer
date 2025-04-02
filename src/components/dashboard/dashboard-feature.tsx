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
    "4RnrKyp5qwCNaWFyJQ6figpYAaC4yJbUo7Qo2HG6SxyHcBrgfm7t3shPMkkJHGRUjNHNrpTiAnfPsLe1mUorV2qv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62aAg1JC27SZecNh7gfHi7K6Z7SEAb819vUgcgZY4Ce3N6wBgZekFye74kaxMKvNqMxHQrMHpNwV3M5tQJb8zPcS",
  "key1": "5Umy1AbkiR3uVH2V6vLou9X9XHoFaCitgwdyS6W8u728Xh7zGrPaEgAyfYgKRcvrRDMzSE7b6Xp3D4JamVhPbYCY",
  "key2": "2zMRkxT3eQmGbgwuxbe8m84MYb58M94SMCPvinvcUvdrcvsagmEeQXmwk3uoREvdFXYYFazMWc4vwRzySmRyjp68",
  "key3": "5egcgq5XNBQ5WjqN5bkYLwSG7wz2SFfmr8HrH35nhPPYLwwYVepKhBGwosKJcmb9Z8miGdBRUh62VBAfan1gh5ee",
  "key4": "4cabhLPgjwfkbQYtXNVRvuWN4i9R59urRCYn9XLZba2DKQFsDSeNafxAQcMfsCMarKHYyPDFyrHxswsqZWar2YQZ",
  "key5": "2WDdsRaPABAGhrtwPLCwtaWSP3ZTc3wouXzLVBGFp8PtEp1vbEEvm7rh9TrqqMXAphT4PTqrH3n6y2Vj1JM4ysx2",
  "key6": "3jGnt5X4g7Ley72nuxZgthDF5WdYjQm39N4mzBBtCqipaUYmMQsBbaV92i9bY9sJg8Msm97CPN1WaQknZLTe52Z1",
  "key7": "4pobESrJTxHuv7fFX4zmYJWyDvqk6kFdHrhcvHhv6UEb5kVXafRNQF8BefMTu66TGtDfWEnHKaLoDY4PAwn7Njav",
  "key8": "5KanAP46fpVCrWYYvo2yPYeieR3SwVdixWmL1GDuXv3aoUjPzMcKFrM9yx1pPdAbkVri3YwishwP79U2LVWZTa9U",
  "key9": "59RpK6fCyr8rAusx6rX6mFH3Sta6nmraAN8rTpAxgMnHd82H7gV2ZHeN8o3QCZxPT4iNp2vFj7okgCjE8uzXShqA",
  "key10": "3SmjF2tWSK9JZr6HGyBK8ZyRDTn8WL6bfi9M2i46pNPTBnQMFWzVD67Pr4yYtiu33J1dnRSpbt7eH7Wm3QenYP3G",
  "key11": "2bCSNAmDd11omXhB7h1H3hgugYKzUmib7KVWmDnzjV1M8Y3NrpeZvbDDYDz4WrKvAP1FboxddEdLNds8H4PYFcJk",
  "key12": "3EYNG6i5UnBihe8Rw1k8GQtundWQ73HmVYyPZjX8fVZ9SjVGZncPFZCn4z4SbbbpanWfU6UcQNnEKj26quGtngCT",
  "key13": "B4Dmf3m87Ubjm7ZyH9GA34yV2yWGv83qJgaW31v8wUcAnAbxaLGBLyBSPX4gwD98wLH4PqyXKhpCdH3YfPjGFoR",
  "key14": "5odXV7p2K1xJ3RigqKQKkL8ZdpmYScU9S6s4cecUQPnMUiLMpnxzV1g4cFZJbh4zdZEYnZM6rjcMR26jB9H8wWuR",
  "key15": "2nKMUPViGSHrikpzoy7zEp5MMG4AtMWwKMfHZSc1bMmHBqqggWnXrDosJEHBMnYZRf75kcudo9qHXEmuDGM5qL6f",
  "key16": "Yc8kwMrHNrHVTYRkAZUbtxb31iZVEdwZ6wM9z36gFczkFjwYPM63B52SjpHFXdQKdMT5mWL1o5kLs6uM7cWKoRf",
  "key17": "36HMA2ew2FjymLmuJR54XRwpP2U28EGFbYzqUzZpVcrvUWuZfEtDTaiW9ns9UcWR4hy2Y21qUme8FCwRtqhMefKA",
  "key18": "5FuFgdnSUaiYTyontQbvHJQfc2LJ7dfE8Mu9iQpYLiovDQAVUYr2J41uPVm5TDW7jtVbFQXwSsmFeKNThbQNre5o",
  "key19": "4mwZQuXErFciFMxNhy4JhwxanU4vcfpfwdBY6FzTUnC6ppihUaZ5zXr4Qu2yvU962hDA4d1h98PkkJZxE3ThcsFj",
  "key20": "45Uw2U2n8Ac3Z6n8pWKpe9D7LYgaZWpSMf2ikUjdoE3dGcsa48xh4xtxjJwEeTMyKwoADCUML3CmEFy9UcmMf84N",
  "key21": "39imjk4C8h4HNqdxFscXZbZRQcajuEvqQkgEjzuP69ppYV9T3wzGBPTas4stsXPUTq7QucRJADDY8VB4Qbjdvqvm",
  "key22": "3u2DcQx57o6GbnkQHF7QAZohJr2uEVQQRLDVNT3xN9A2rb7TYFDV594vgwtTDGZ6qYxDvjmeQ4jrHEzJtjNqqCY1",
  "key23": "3T3XCy3bzt439KrX26ZXPD9gy3ryPBY1DjJ3iFzKzUCnHqy33UBDrTHN7a3CaUomwXBP656vzQzUZYxpUknuEZPw",
  "key24": "V2iiyqEq69Zz33uAVw5L2HNYqmsrGC5E1Srfv8h4d1CED7tXf9hWrceKtc7o89zdJob7uQGTRG3sX32UrcGswav",
  "key25": "zYNzkyjeDVTT4pwQdiZNNNewesXgdgYqEghqnFPTCDCzxjdMb9xsZmENvu53aq24XSjxdakjdAexBCc7NgyhCwU",
  "key26": "4HTfXrRL8zq2rBYS96KoCD9v1sQCMBKKMpReLcynFsyTnygz5e3nFobEtUBF5grW81B5gJ4vCisSBMG6WxBC4gao",
  "key27": "46Yo9f1DRGmSUDUqSW3RQLwTKM9LJ3tstFYx2efaxiadHuKduMRxuya9VCpT39H8xrv7jFqcAg3A4HesitUbw4Wv",
  "key28": "3i6Q4H4ANiUe7i37SXfFjQjgbF9BwLRM6x8bTgzZfhXoTWpH91TBUHfTMZ44tJGUrZ9fGVJAKJ8fibpaEsabU8pF",
  "key29": "3eHCBJAjqSM728fpCUiVzDXe62VVrXrNHpvVHkFu7nXXkzY2Zh9cFLqqhidZYuUeB711wjwH3ez3uMcLmovEFDQk",
  "key30": "2Cg1XBwizNrvUqFumaFrHCwXon2F2XW1vqu8LzBptP62omjDgBEuPeAs7sngMP2RaLsHiDrAuLD9F7JzTM9tEsKe",
  "key31": "37yc42SoeRih9w3yEp4uMRwpoiK2jXDq2ZoUgAeYq4CfeUzV4Y6eMBp8BdBCu35JhfKStCXLuXxHVdSw72XWLMNk",
  "key32": "63ahdfDZJxaqMGjwDHPb5SHsQrMUbSiQBmRB6aAcqv6Xjt6FY5XtAh4Di7P1D5p69DUVhkGSuDNsoCjiNbWKz7u7",
  "key33": "2gspwesJmarzrMFpfzkAZLbGQHiBr2vWqFeB84B34QQkBut8FK1bQYPv6SYWjd8ZqTcuviwpX5DfiDL2TptgGosP",
  "key34": "3sY6WoeXn8j6fF2eNtk49euQD34LrN9Nf82yogN7y8j2QkYpYbFBH7Xxm4VA1Mrx1qrzF1N8QyAhCnFNegtdYB6Y",
  "key35": "4oyfVH6sMLdr91uvtoRiGjbdS3Qa1s2YkJKsW4sf14P8pH3rA6XJgGyETE5kJsL3b4QLMqxw1F2zT6mX3y3GvUJj",
  "key36": "5XkLVX6NqtsnCkmRfyZb4sf2fTj3AJ9v1AT6hpGZVkZJAMjANuhQd4jkX9nToeuq21GHjEVpVs37Tq5qD3LsttWT",
  "key37": "5K6wfR2oJQKNUFTurWF67gPudtt5eB1u6jXNs2xWuJFLCVVtHiAiigZScCUV3hBeu9hbFbKGrq5P7dVp9qjiMgzs",
  "key38": "3vXm9ZBKqXFLMzx4LCi2b5Fdash5978N2BPsXBqZrN1pvu1fbztcjrSDwKNR6vcfo2R4Aqo79ZfXde5Rbe7R7Ksh",
  "key39": "41D291PDVZZvvg2xywys9grkM5QScGHMX6kGc2mWMZgRSmm9xRepcZ7rCiqrhNVCC9kVcDHeaM3fU9rmFkwG9aC",
  "key40": "2MNphdwNFxsPL61SELpVBZLVhB3W2asUwtHyVf7JWzc9GUjmAAcmBLbavTk2949U3xCk3rftsP8LwBPyqz6tjxvW",
  "key41": "4XBLfTfSNDJVNMjKZugBWx1Ff7zEy1iisymwn9rqYHbAskv2b5VibbZ8F2PymxYVGUe4dsZY9593f2JSnWDHbEXH",
  "key42": "279Z9UCvtK34c4UiPqGMfgJcqnZAmomThh9TRU99Ts1YtDKPeEjgwR2XeusPAPxEbk7kRtppukUiSWuGsTYCruLK",
  "key43": "66wPjQrQbjRaYMc1whF8VcvtNQT7vsWK4fcWuFu8QjavWa14W3u9gmzjgCWQWupXY8s4NFt1KkvECaPaEF3YAVsT",
  "key44": "5Q1ZHTYs1kUca1k6koc1GFjB5z4CYdCamuoiehBfRPaFgPz9soKjexJNrdLrCoEkjcM5Aj9otSykZETF4uGVh3Ck"
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
