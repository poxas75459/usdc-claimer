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
    "3CUHUPx8jTsLtMpik9is4ynPdF8sDr4ArVuFgiajALV8oXqaWGGNpTPXrUaJ3jrVNUdECGei6yvgsUXYGKMWBQjT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56TXozndJSorUggH5UqPd9bo6szCmFy8iaPoC47eq2vMtnKWwfoHDN1FZCqrmbcrzmkwgJhYdmf61ubzB83UPW5d",
  "key1": "bqwusaaYPf7iC5hvpYKeHssywzJdB9m6jNdeyZQiocjojyHfLiUGK8PJ3KeFDFgeDEKE2QnFhmeTAz5CXCuYYpA",
  "key2": "5RMYcM1TaVaLGCfATTuSA8H7UXBNMX3wW7EsHLMhyESJEtveSpMTqz6jaoyzEWcXw5ZHCun3L1SsMpXZ53PZFcHr",
  "key3": "46HDnPm819Zjv3yWZuYwz4n9GXZ5wnTkf39FjTnDGbamCiTv9ZCgURXUUePw2UM8Kd2ymA4D9hVKZXjZLc7nHZvX",
  "key4": "tgiuV3CdLC4EYNe6opdHSb4nqGdbcEhqjkzhD4QeSbmK5LxzvgntJVLEHnuCeUPUCSLdyFu93DecD3zDvAKq6JX",
  "key5": "3FLfUW5obyYtKJrZELx8mHEwcgSNjsRQ12aZcdVZnBzpttvfMtftyHXF6Jp2c1ZrABBqqvyYXohmrv1vVorF6pEB",
  "key6": "4K38y5aJnDZRBRd1WUF5QdFmLoKNZskYiofo1GEwxkE27N8RFkXnm1mnAfwWBdTX4sJnvmugJRQc5YyM5zsBuwQ7",
  "key7": "ZUfsv1UYN2CkDMZj6EB7Te9Uh4QSkfzbJYcuohrUiciWHyaPyJgtXQyCMhUFwnQnJ4oLMSNM7csuLfHAh1v3Zqd",
  "key8": "2ZJkCip5sy2HBMHim4LKsyGRPEipCMHEojvhTF468p5JJ4H2ohG1dwEsrBTnQJWM55X267xAK2wyvMjvrSNAg8Ta",
  "key9": "MivPbcDiiyPotwCgfK9jLxUDsSr49rQtS7DMCKkZyUoAyiK1iC8mmJgxM5X1Yqs7UNm9jN5Cf2GkhtJ6uNiVjys",
  "key10": "4cnfW1UoDfWvVo1eDEcDpLc1EsEKnuSmAiS5R4mGS5zKHvGRPRVZ7SdXyKaQJnJhH7PLvPfXctk8ac57N9W2FbWr",
  "key11": "47HZLUMfXJ9KBhAaeyYqiQ1aWcMChriFZuaJWGuG3gEMybaxf39gENrLiS5og6oMdRd4kFDHbexsrXa19dbjY1bz",
  "key12": "41rhaXajGe8FcCRJPemf5x3GFdL9rqXmHcwJbt3nRtcAu6mzYWdG87UPsthE4UjTtdBJ5GzbH2vyB9Ys2Benkn5g",
  "key13": "4x1upNMYEAMP75pSzqSDYGe6qbGicGFuNxrxgH9fWXPEf1HBqJVx8vF2ZGZkhojHhhn8vf8ku69QZz6r5CX9ypzW",
  "key14": "5FjKkiUz8tGSWK2y3Jvxb6MST4dnBcuyRyf3FngBKVLLVTgBDAQTvKsYAJXo8P6EDapdeSk58PZhL6otGDdTCgwU",
  "key15": "5LHWnv51N82i4zybFbbLyKekpVmXcX6UbSeyZZhwz74YoNhpJ5w9CoJiPao4is8qvt6F7DxAnkVqvfXJNSkAnNfY",
  "key16": "3RTLphZwDj9AEtbM9FbuQi9KD2MujjB3tFVbrQ7mByYYbawApgL7ypyCDyXZ5f7a5SRHRv7Kur5uoNcRwBMKi9v1",
  "key17": "5dWLP5pvPhhVWSng8dZi31FxRTpCw4GmepAk7LhEcQ2E4UfW1c8fQCDyv6Qbd4p9qmRvdyDAorNm5A1PvqjP4iRN",
  "key18": "KknhmPkgqxKJP4dN2RwrYm9Uf6aBuWA6EeW4Rrgy71BubKHdVim4uGnM8YLbxcWXzSUsjE9Yf1bVFjUUaD6zh4t",
  "key19": "ynrxHd9XeyF9E6E16nwHM1yYJPai8X2wpPjm43XRZLUwYHtaRJgGT2bqXBWRVWc3Ddf1fuo5FWNrSxHLdrN4UoL",
  "key20": "5W3yTsYjzNN33RBaSq9W6xuwRJDAjUtscLsrxeqRCrSTEmH5TXw7947NqnXHLLfNiPWFzoHHVStx5mYm59yPfYmo",
  "key21": "35UGu1y32GmzGq25Twv35KBNJoCvbt9wgS9RYj4XWDKUdnsbV1QfGVGiCMAyFzUhriFrhbStbBgESPB8xNGAekeE",
  "key22": "vH7YXHjZQh4pBwWUXeAFCN3H8LYqCLRahTBDF2AKhCSTGmxiEBwEp6pDoUEsPf7gt9qMQqjmdSWyEJgodaSrKM5",
  "key23": "2rhutCHuvsVVGvB3BC9G4N5RE1YMpg578uQrWJJL34FLuhQYXY3vQUs3CSGUdEDY4DD7FMSSLNmMyC2rRm3jY6gu",
  "key24": "588np2dRMmMHiEvNCkrwERMFdbb2E4CzZT1nZXLpxnMzVwBZJCcLpp8gypQ3345ZWJET6uPH92La4WxgTZCb8yf3",
  "key25": "3Guvtmxjes4WAcyCkCVFpKuEtQJcAm7mgD8MSpS3aZQVL2JyJnXGACp1Jr7xzm5qHhKzq1kT95e72E6g4WkPXx8E",
  "key26": "2aNAGaD5Ajb9Jj3QRwaYR98K7qZ4nGaYEgQxcxhE6RUyfYvNbAFU2xi6XYPqittkgNAGM1XgSQLpzLfEUY3z8Lej",
  "key27": "2ZiBAkvfr5EJDCrCrMqzBRfKZAo6stujPQ4PAvm9RGqbeVrmWXUiN1omEijAcjwNArAjHh3eGRtAUU3HoRkTi6iN",
  "key28": "4ShHuf1nMvEyyUUGP5KKBkTW7UnjXZXPMM9FWfN96mh2RZv1QfUo5dwyiaWLG5oqRswhe6rR69zMmt8K2Hcq3ZR7",
  "key29": "3YDR6fL6VNMFYohKtuKyB9ZtdEooky94Jqg3z3GE6RHFb5pAmT1fi37qjYJ1KjoNL4orAUiDPh58WNVAfwCiaiAH",
  "key30": "5Tn284iW6TaEj1vZnaENe2xPLkN9kw4G2C4TzcGkuzvNpCnkDX8D14qY3f6DB7fcJfgY4pt4hVxmJnwSwQrb57vb",
  "key31": "4TMm7YZENK3XJ5sTaQFHN2hiid1C4bpDfEFpB32fdJfmRCVtPRrVXcefXofDqwYCtPtmNhtLEFLMcTjfJPLUUN8V",
  "key32": "2GqnFubsH5j8hK4hSeYmiC8gvdHTTtZ1LVAPXLftmxX8Y1zLNkwicMG4LHkrR21LafjqbXzFMC5aSCLt4cDRiJ1j",
  "key33": "3GFnhzky5FPZRY71vfJtLDAR8Wi7iPgpVA5EHpdLAbxVvuyVWR5DC3sHvTiFntVvEQ8Ka2qWzBZjvDhCoSsiJJpi",
  "key34": "31RxaKosmZyRbPEGWCAfHBHNxF2U9CpmbHEPhvbZ2Qx3oVZqhTXKEUbAkcSjM3opJGnDGxYvG28nJJTENTbsigEP",
  "key35": "2NXbm9tHfy3Q1ZgpC5W4bFcPVAtuPCsMARXJLAsfzt6xg1aKMNveT4ae5hhPg5ighTkdqGwcfjaFZaJunLbocgfP",
  "key36": "5JEDTFuCgHdYHrMYfAhTFhXaPicKGVzG8dyKFivwDArQjqLo3YgUd42hsfyViYSh53ynXPVVBmDMC73evp2szhVL",
  "key37": "LX47wo8CqsSTYW4wz2kSruiQjsvySsHbbQzJpznixjGe1v8ZNDyrADmCnLqYvvAsvTNkjiWu18FfVr1vj13Ckvm",
  "key38": "2cB9Vw1Eg4cGv1SR7eNT35HzsFqM4E8gNX2fdVbwQo5RrKS3gnqGrA7uG5HxVaTt39ptj63oXigyHvtE4HdTXMJF",
  "key39": "2BNU3SaEUkKenXMnrVTbuep7vaMdCTpH6LuGeDZNfVFZv5Vz8JncjzF6p2N76VPeQvjdcCmYW71qgiiLGX22jJWd",
  "key40": "2n1fWMeQftQdCNrs11dYa9HhXqKjMbW2NQjzXsF4SMhRChPZV2VXREoF2X2csyYe2osgZLVkAxRgreB365y6zrsy",
  "key41": "5J79fh7t6R9bGqttpA9XpAbdJSeMsfBAApzGQjWAymN36bUcDQJGzjCKHhCxsehwFqkWUjcwkRkZLog6C1kc7v6X",
  "key42": "4RirDbce9kxe35c9LUxijKWMJn7NXHegLCXaYTXXPnADgMJida6L2SsW4kcTwqu5dUKV5UaDCQiwMDpuyw5fcdB"
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
