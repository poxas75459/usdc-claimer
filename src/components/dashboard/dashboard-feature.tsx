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
    "ztT6rmPyHjSPtuTgcCnCeF1Tud6sXhQtcKtTwbbrCUGSxwQGkMMys8NnPqwwhD9LnbrsXvZrBCUEVp1TuCcG1aG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UU4ZMp9dXWDjZZeAqfYB6ht344nejdFBGrfRQrJJXSSaheN7Lqg5FchZUanmvwmPAUs1CqMGs4j1CZDDzUNbpog",
  "key1": "4j6ZqitUCRuYKYukw3GLQBArsTHo43wEAg9pMacfrsjXpwYsGCVTfWxEqU6VUdxnVkqyCfGVbbEimAr8Ddhy4SZT",
  "key2": "6Vzn3TWaMN3MD3ij74dJ9RvZokobtfvqmELaQ5xbyMTjtmCb953BVm8AJxPF7zSnFFQ53QxYdBFz9F5mppReBEg",
  "key3": "2rs3BLE5LnE4ZLunhYmM3vZ37iYRwsowujaAgS23e1DjsSGMqWR8iUKuo9xjroLj6Y6RHJkZrQbvxZ7xNUHPx4Ua",
  "key4": "2RXzuMsxxs3Qu8tVSTuFjaEvvSKuoE33J8PXQ8RGd5v5wDSfxrSi3ufuT5qre29RmRf3MZTFLBaLNL71rjk48Lus",
  "key5": "5JCzU97nMYnDQsUs6bRXQWu64J2xgbqxprncftexxHkx79JGiyPCMShhePCMSJSjHLouaWE5oABozjFV3RkLCEKH",
  "key6": "2o7Lm2XMKww6hU5zw1GjLm3QeTmethc1hvGumhoTpknZk1oyJ13XSFcGETEoLJ3Qn3BGZrPp4hB4e4gRm1TtVFiy",
  "key7": "5cQiJikgjiXbi6tNbcTyvbxzvLG47jGnsnQ3rvpDVxCnkUpZ75hS9ALqGbC1E14mGMhwNoE28sPspN4x6M16FuZ1",
  "key8": "Hki3PSSXXAC6XmXLGmoQXzAm1oUGGqKdxtwtyh2jZ2tNgtw9iYTG6CP9C2G5cvcyb78jeQBE8138Jc91F5XHZn2",
  "key9": "5fbaysjcDoJSRtWr4yb3hz7ciKEa5AuxLgE7y85XKVVwforEzEgtrPV5BpR2ZXab9EUJZdi98pE3QPwf6EYbqFhV",
  "key10": "4TazaEXr3hGH1q4hCM1ebPsCwjiG8hNep5akyTABhu1as9Lh8GzpKVEU4ERNnWzbm9ow17QycAMAkvtyehFcUYBT",
  "key11": "3GC5P3UEksFpAneqSxM1Ws9GcyjRBsLgNgvpFovpBxF6mU6ajmBbqkSLVot8AxSTggKqZ3bFvFUx5LpQQcR7jGZL",
  "key12": "5pn3kMqQbqF2NfT47zk7j94CpnsVCzLXtyW5CMJFXYxno58DyPrZr9kjyQCiXDMQ8FxxEL8xatbzSEo75K8ahvTX",
  "key13": "5abpyw8AsqCHz3GJKKQoHjypunL5zE7WodQLNGBRiUVXoBVPwpsBu2pqoZgSQDasKT61xqZXWtLJY3orjFVH5NCe",
  "key14": "5JV6DyqbTe5RNxgDRvisTHXh5EzzviGyCsEqZVZy4x3qQXdsqmaqiueJv5mg1w2aCJu3VwcF31FfxFpebvmmJPXa",
  "key15": "5XNTThQudxooxb5PUd3upDWWUif6Q1PZFge3kcwTRZdKQEFvPbGRV7AncF5TzibSz24CSuynyjKSs6tMKaTYUn9R",
  "key16": "3fS3AQSR3MTaXBxkiPDVjVvvyPhTjFnDaCuJA1ZGd1AfJnUMkLFPBcLzKW4RRGWrE8hPa8FMy4ziXYmCSqQhmhvM",
  "key17": "45eK4btXQhoneKc2PXiPfmJpSo5EBcuZJdAw6cPcWBCni3qhUyRAmRAs3ZiG9mHk8zpnukMBWQ8CY3yFVcuhjnXH",
  "key18": "2m5j5PUPcbs5cVP2XXSVNEMczqJr7DunAnaTJYJTyopVKeK4zX23Cw2CiZsg9QAUDvVbuYLN8uxHx6hXD29i9Ry6",
  "key19": "2TxYvBwRyYEPFhcuvt1HgQFk5edJSdJxbcNnDajPhwp23xKsaYnMXz836fKFBpVihwDoYSPQ66Rju4x6zdDhhofY",
  "key20": "52uc7EPpeFiYSwLdNG1qjtEaRtUmDNhbycym1pnjXFhqPHbNC7dPzxE2k2f4QxM9WpZBdHw6AWxWooHpJXApHQuo",
  "key21": "2BpcNHJMFHDPdkMhdxx79ue2CYK1yKnor8y9spkYNXPaxd7iUjRHnq7B1pECkhMJdierUq4BMVoCjCULtY2Gqvj",
  "key22": "S8Cx5pT48YHzQox264xUVVCnRUinxtN6JXUG2QNMJ5jiRSWG6YkMMRaHMs9CctUPixbm5scYQiSXG55uuCzFHAM",
  "key23": "4GBQ62j3WQ9mcRFiTLGXYYq1xzQX8JJ5uZagGTrdXZuA2Hs5xAQN8ecBPiG9b6NStfVMZDmKA5DPyGh4zV4ZByB3",
  "key24": "4o18bH7YYTfLiumwezwUpDQHxCa4Z3JpG6vRw8BQcSU3YQdbfSycfXLkBA6PiDm9RS52zwQXZzh6grx58mA83zGd",
  "key25": "3Lzz2vvjY7zSrQd23W8y7fgpnH9oRewXJhcxojmPmLaoDEUFWJAxbet6ytBvCxSiqRzCHpLQ4aiPGP6kuUt99iRb",
  "key26": "4CQ9fxdhs7WPH49vGhwRnUY9SD4QM92wsoEzeZP9uqA1r8vRKkXcALwj7EpXbtdGAKfZznxrQkh26DSsDhGnUtHT",
  "key27": "2UVhvDd3LQTRGbhPtKurCoxQRQvkNPun3A23Q989f6nuUwW2qtKoZrK6TxiaoQpJsqFFJEicXRFmTpNCbkrjCQ6P",
  "key28": "3eAjuvGrSFY8vE4wHMjd5tunxomLzTwYDZcB2bSFbFy1TW7u4kPJjRj9idc9PErNod6CbDWNCCMdvxhnyn4fRK82",
  "key29": "55Yye2zng5hEah4YuJR3chWDtB2CJQQ7amDvCVB3bjaPAho9UxnrGqLLYptVYMAt5GRLy2SKCaJPM8QgbaxdJeDs",
  "key30": "4dtrAbLjx7wNvCq6py2gCXzhoiaUYL6xDD4dHuYqA5oNLwv58zm8BKvLMWsyESifNtruz445i8mKjF8QYtsp4R6t",
  "key31": "3ei8bsEK4ULG2dfokuMimo28hgSdepRYLX2moSxU47qWpsZhV2ZtSE4KtxeQJfz1jxSQFVeKz16Y95nMXsna4m4j",
  "key32": "3485gyre9fC8fYBangNnK7QyYCdugaPRQXRs56TzptVWqcafRKVDcjUvMwkeNKbDaUwGjZndq9c6B7JJhs3geNWQ",
  "key33": "2TFVtrbQH4qdSWtD6xVgUbqHZL5RRvVxxLAmyMbXchUNPNCwxCR4sdyLxtFN6xzwijY1BdYTYexHg4URoqZQ55FS",
  "key34": "MDDr5x87QUBN1ymYhBwCwRb9UmjyRwRjTc7quAZ955NspmgSwZuJZSYSHbub8W7iUaVbv2w6uGjpzPHCctwxWVL",
  "key35": "3nCaXdybYLcddJuUhDhfhQQGBngZoSxnpBu6VW4BRhw1m28pJLpbdgoq4v138UTVLeuDPoQDMxEb9os9yLQ2gTTY",
  "key36": "4b8RCVCddkudZcU1imC2V598BDVSK9DVfunzMvwhWHsrPTKQ1wkZ3MQyxfpUk3LpYgAWqFsvSpCEN8ebdmmGD27e",
  "key37": "4V95dCPvPsAqDpjg4GcdnG9TLhqMwVse9TyENk6xDcBEUYnvwQvoFtULejXWGhXNKLkJ5SGjTHQZshmKccX7cePD",
  "key38": "5pAAGh4Pv8bS9eb6sStgmissivXL5mxmzxE2oSbY3kMPZf1btMbHF3BWRxX8djwVT6bVZUvqpEFrbm7DgP23K5C2",
  "key39": "5UAuD4YShcWdNMTgQfAzGnUnTg8Lj4roqT6L91XmqXQzkACW8WFVGNgmnJqcpZH9HGGowhnPseHPNzD44SGJgTxE",
  "key40": "4HsxCsT7fVZxetDvfKP7vxbx7YHzKXu9cgspBefHmMJdJSZnSUFgC4zL3q2jjpakEUZx8fcYftiTcu4rd5nHp8Xu",
  "key41": "5cmoroNBsCF29WmM7q5o3JnJXMAFhEnDy3WVnMx2S3z4hbdfD6DLR5LDcwRRAvcjqaBBuzAVyPFPKgM3P8Exh4XG",
  "key42": "3RJtRJcpAuggvnJVc2uK1UKgZQqCnkkuqQDYNys6kyHZVorAQPzdtuvRjKePckWsGjnMHnmrvGx4ji2N4JQpBCHk",
  "key43": "3o1ofWvqmY5nk6T1zY8rWcX62RSfeYadMdScKZkLKdFgG4k95qrqE6fib7t3vYfQREaKT7XBk3xqNo371ondShoi",
  "key44": "4YFBTMxyKfwfaUfiwqdMDGp22FHXGB5TkAb2vaBnwFu8LjW4Ep9GrYP6JLdEGNYjMjQU2Ukq4q4N7xkYPoz229AD",
  "key45": "3gd32qEvw5WWs4c3ybFMa5Pi3YnRheMLNRc41DFSDje4wWKje7N95GQTUxKBDZSGw8kJdho9urUmAG1FrPZTBqsH",
  "key46": "rKwqFhbDXtFuVAirixLaEs9SfCJpUjrqstKmdwNAKM8PBruVsFcy9U8MPVHfPk8hMtbntg7SHP9TTJeevVFBqEA",
  "key47": "L3KnbYh2Vv8icd8nm3EiJUBKxr3ykmvbWx9XNdugFFHZxE6hyTxbGGTjLhCngSzbFuemR5QJq2Er49zcLvB7Rgr",
  "key48": "33ydUzhEYDPKz1ZKUqfddwG9Mmavk9ab1qkyhzUQu6HxLyCEMXAv2h6mLDpKDbYJreLNswsXwTf8TZMJjHhd5Hgv",
  "key49": "SGxCQ8eCFBu19YAbfBRuv6dbib5xgmoeFuuzu9BCKJyGSWev11Lcyzq7C4GyyE7zjvJWhcwpYd6hw7sDmrCiGLr"
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
