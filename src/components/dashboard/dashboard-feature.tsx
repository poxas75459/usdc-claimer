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
    "67S5vp5dAtWjifRijL7w8WjQ9ZSk8RuvvGqwoGJFjgx328c4M6rY4JXnS72wm7wTKCP2Zm8fsPTRh4E4KCUG9G3i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YTvRJevJPA1qNnJgX7DgeTYpVozejsYUv3au1uzcxcjaJjyjoZGs4RRkEoz2aDFE5XZaAibLjg5PJJ9YNjcJfGY",
  "key1": "2wsjq5aosSHc3AhCnMrkneRowEuKmy6kcxD7RohrYE9MFcYTe4A8PeXe2Sr9WLwAttP2LqMsV4B23wndquPJ29ef",
  "key2": "3K2Ci8Jk5rse1kkrpU7hQkVYRDn2YDAzRLN734hPrzLo6zTjKi1eUiPN7pHBL3FeERGR9W3teECETJLcz1ruVg8e",
  "key3": "3afSRy2gdQbSbud3ZF3meSMWZJVwVRAGSjQrkxQf1yzJtDHw2sdQACNL2DWWcA7rXnz4SpUzdGexq3ini2zpBdgg",
  "key4": "9GXMKALQ8sEMbLxrPc7bVjhMh1eyed5VBgK2X5axhnmxyyZajYoXGtNWntwGa4xB58cW6qbxRQDVSzW9DEQbk9g",
  "key5": "4aMdWjm6ht1APn3VhZER3M4PA8Hfc8jmNsGKY1sBwEEnacZLH8sYPAx7Tbm6WFZvtwuB4m3Sgcp1A76zfob56T3z",
  "key6": "2UC8BRTvLnjQZTvKincEUvkGyVLGab4BLvi2T1QyYfSiBChQ7zzXCVxfUrN7NtLCeasFJ6RKxYHKXL1AAX1Up2Km",
  "key7": "2bNh7V6H7HNn2gk8Wxa2xdXd2bKh3N63bqu5V2s2sr3FYeRRnKyndi9QoKNYMUkzY53pZs4e37aX7kw6t5XsxL8n",
  "key8": "3nVHggEVgQq311uzTqEnUbAAetBnHEmvnyfNd8KwsUMXuVjFMVXH7rL1N82f2v8MswvnsfCHpiBf6GE5UHrRMn23",
  "key9": "3YTN1FbMn3xNF5E4UJorc4PKHf4M6zPtdVgi585AZyQbauMgeBU64MJShNepAoTCoPCRSAjjUSXbgWt2awH7RZ3L",
  "key10": "4AVGFyrc7L31GTbU6T68QhW2NHN8k5XErWGeW2mw9PWJQ3bKrT2F1Qu9Z6g3mX9gCAJ1KshLTnwuvwMDpTCCWn82",
  "key11": "45bAaomHW8c6eNQp26aNZExpvGMVrTQ4jaQTVCTaUj2XgcE9zifxrWxjAnkeCA7fhx4cuhpFA7L2xB1YpQdPRskn",
  "key12": "36xUcsoApoRgqtLm1p3KpFWKy6FDD5Gpzf7YREaVN45KEkU1G78WA5Ms1EkRouUCmqGtXA5JAR9ej4wEaiMpj6wV",
  "key13": "3JX2L8gDmpgptzpcffVBqoAQRhqzhTW1NzzmTKJwPermSbBAVD4vUXrkHrD5G4n3ywyZweY6bXniFuchHzkRa4y9",
  "key14": "329q8Nn5jhHUsyrh1YtHHmEvkqRSe1U7hLdPbiqekzeNbd5nEf4c2aNeENW4zrUnMGy2TZ4aRkPkq1jC5GvhZVcQ",
  "key15": "5reRgyWovdxfJvXmyNnbR5oyeAPrG9m6YCwndnjxcQTW2d6yfBSmX3kARFJGBb7aTmR29aGmXXsjAakLpS79a3bo",
  "key16": "E6btP297ea4pM4Rg5zmx62cqQYstkYr3N19D1nqzwhmNEayyr4BCYCaLFFPWRYpgQQLHx6JWwXKrfFbY8x1mSpF",
  "key17": "rxT5eqK1apCFxhLM2Uic1UA8DB7bRTarq1NtNwrdkA15ydEmEdhd2vmeqmS9HmsDTvqypoxgFuLgnzGGLkTNzQ3",
  "key18": "5WdbRLrU2j1VxPWqHmL1sroW1pePpBER5LMeoMWuprNo69Quccn16tkgTvniXj8iZJm8qY9n9TCAzup9knBRT4Lr",
  "key19": "4xNEEkbgddQ7pszvdJD1Yf4hnLVHf5p9NMtq347zjVGF5MXX2rUWFygxq4fjqRS3t3jALVikisA6YLfmo7vy39g7",
  "key20": "2Wz2kgMu2c77rM2xeseP3eNVw1tdx69RH2nhDzccYKgR2gCNcNPB8vTDVWzAWER5huT7eFhRphxagCv8BKN1o1L9",
  "key21": "3b4z147ZHMUyvdTSKZhnQbTmkfeKSkCkG3ufp77TG9XGrzHFRGhyT4x2eHGBuQdYnx2ifAs8iirmwfSZAJrg2Bcu",
  "key22": "2chc7W3ZV9V3RsVLxbsLqEHMuSE7quvzSxW7GpELZW3xAQnSEy29vCNTh7K1kpPyuzdutgkCoDBriSFetQtmZxQx",
  "key23": "5TFLWEtk3iyEiv5RHQwbKAFwDqPcZsZcXY6jXLojaDcX5u7JFao926TAfsY5D2SATQA4ddf5XFvzBedWgSRWhjFb",
  "key24": "2WdyoZjvZ9LxigDTyUwNoDR9KHS9yzhxcmqB7GarzmfYpc365uRMeUHnff7FYdzG97gC3L62GDTwZSBv2vktavwb",
  "key25": "VgdVX9uV4ggy25XsBCTCgHfxTE6bgFRHV4bKwxcLA6vng4unAcQnDYvs6tKaGzu4XJWhNrzAHkwZkirJu31mhDE",
  "key26": "5YBkXFo7Fv5dgtUcsQ2zs8mJ8YQUCVjCwnRNKC9SXZhpNX93hoAyEggq7wZPWTtbQJyUQMNWGxSpgnDmB6BpTYPX",
  "key27": "3Ct6D9kcU5E1S2nt6ThFGd6TWFBv8ZACMKaUC43ourUNX7eHUSXbdcfNQADkCV738U1VhLcC3BXUDc6M2GviZbYv",
  "key28": "5CvqhgCVcJhZRTuBDwLSRtnhL4wud9szH1DLGLGWQoysY9aUhYK6NmWPn3srHuSbHX3evaJAed9VZVtbR9zrbBZU",
  "key29": "2zYGUM4SdjzkhHHBQrNc8WvXiy5evi4hByAe7Ue5du6vazDMUuzABpQ5YD4QY9f49Q6t8RwGzmhoLxA6pcnoaZNu",
  "key30": "3KznHyyvXGnGxyHb2WRzpJBnUmkPfzduFDdsKP4mA2TfvZyF5eVqG3RZ27PRseTcZLqanwqVjEhygcxMsZwe41sc",
  "key31": "41jMB7hCoXUkGSSHENcdswCyADWF5cifc7ciwyrz4f2bQQtatYswEF527jp6oBfBd1Z3fzcRXJ8Jqr54Lg2GUTFG",
  "key32": "2Wg3eNJDphQZoZ8F7wYkv8Z5nkrnuU1KYqeJLfN8sduxKeBRPW8tZZ16FaoszaFqFB2b7goMiTfeQkDEczWtScZs",
  "key33": "4GjYUQZPtCbZvWGs1C6dXdahykSPRdTXry9QtdBVQVLCY3U4aYXJ9B4y3q5GP8tq56cip6gRAv4SeZFN6pUgSFkG",
  "key34": "28d2oYyG422YtCMKAyw9teHERQzzo2qaq1aF3mku9aKTrqcCdjM5QFLkRbP9ncBYsLhuah2WQ7R4g626JWwpCGY8",
  "key35": "4QtJFTvF6yX5mftQtDpmFGjd5Kve4S6BTY4UUgYUpFYtNt3uq3ZCPBC7dMFaEukRpkQdaZhftFuyhMDsApmdmbPz",
  "key36": "5DU1BmrtP83g1e5s79ChvuCWKTvJcGRMzUQmN5oqBrK8nPtnas4PGQ871nCMSgE4ePn87rAr8pgR9ALHs1KC7oGX",
  "key37": "bTu2KiCqtQJZkK4wtG9fJ6Zrq5fZX3czzHNvgu5cwmSXjtENJe8aHh2EDwD9LzWPoV5NELyb92AQLJQ5UTMcoph",
  "key38": "2ddJxz7H7CN9L93FBiky5nSQ5YUBBjKcvYjTUkuKX7VbpJMpx5hrARGVozm4qysCbNzHPTmJfVmzuNSN6cbWrZqN",
  "key39": "4ZnXyoQTmTtfYrHE8F6jKQsqCuowpPXbVZNQaVEXE7tUvSjVqipcTDZNCNstT1mFranL1E1DoTAZyx6Wz6TJNy17",
  "key40": "2w1Z24HNbG2BjxL79Vy8FunQytS8nMpUicRbQC3VzyqwuzCWrjjrTPt4kZXXU2zYqifSFwnFcPBbPw6UF94dtjg9",
  "key41": "HEjmwGmRChfnMriSt9yEi9gmSpKRNcCxitzj9XMyxbPbU7uzVcB8xA3cB8HPDaouWBrZMW8SYBdShKdtnvQrBf5",
  "key42": "4EYroWxehFk6i4vjsDHnDy5pj8TqBw2ggnvDRdnUuSuRW4XiPSquzw3qi5NFLSnGuBnpC8Qto9x4PNzzKF8Aowcb",
  "key43": "7THNkhz3AjL5AxLSoZvdtUTwFfkxy7cgkN3Uw7jBu2vFJwgdcUAgTXKzG5B9wYpwKFGCM7zpdJwAVivwsrkm4pd",
  "key44": "5wmo49rzku2bcbSaRXihLKVLcVGFpeMVB3QyGRoJ7uMugRUUAT3JmzzcHGRErZELwkUGRxj5VcMYGbWxE4hTMdGg"
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
