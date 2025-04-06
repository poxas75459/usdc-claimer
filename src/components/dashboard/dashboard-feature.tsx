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
    "2jfypKPAbkHLVLM3WUX8JjBoUDbT148MRykK3W3p7LBVDeezsQa8r4JQ841Q3uwkqPa6y9qC81WqEvuFHnqF1ZDu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yXzjMrfykTw6VqpJ6rmJFqQj7NwrN7YyJtnti1itK6ksze8984aHQsM6zhSdL4BeZ1By5UVP9wyh8oy5Di3eBAv",
  "key1": "3mPQs2icVCqSUGyjDBMXSVwkywwaeEdsJxeGsDfEH2v35P3z9isq31o3FGbbrzpC2ibosFcjXG6Eb5Q3N3RZote6",
  "key2": "321sNQfoAVe8XRc8deKh1MXnBvruxDMkPAxdjcE2SQ2BGzyzsdMmMVf3hhBUCRyPBZcna8MQKyy2rU5fsBUT38jD",
  "key3": "4egzoRTtJyLm9bvf2cgPS9n8Gq26Zm9GFRjJ4CaxamgeZ5cNCnZKkV6xXGt9RRvfvmfEusEHUzdKz1Y7jbdVJzNH",
  "key4": "3Gpdsr2rFWkWkPgRfVZ6Hr1NPwZWtrdLuVP9LdyPxaPisEfi1HwkRwmyrvu5UZW4dXfEpUbRvuPNeGQpe6YP8zKb",
  "key5": "4krXEhQG8sqRYFPhJuRBNYBjvK957JaCh5vihHMLFGY6wrA4g2Vz3Ut5okMHjExy96gZvdeEX4pjiV6K8sDouU7t",
  "key6": "5dWwyWRoq8fzgoYSZNn7UK9Ts4uk1ofDombiFRivFgDzdQyNdinVL6YnZr8pjyK1FSc9ZLWF1SHd7jp8X99GTK2P",
  "key7": "aamgF8fqNqVeMKjD1wXLSh8EMQ8v7h9WkrtwiCd5jrvFRoWpvojKvofereN6zbz1n4vyQadM1ySGS1msnERBGxP",
  "key8": "56U2bup23Rkzo7xDsW4bpx8QmmfccUokcQGsrQwQMRV8bu2hvWfdCsYiF8gm69yRUy2CLJhWQMRwNg2znsS8y29i",
  "key9": "61s9g7t2BVVZykeLcTupjZ16swNcg7cfUHfVuu1az3V9nMQUb6YCU9d2GW58UZ6WTk1Y6V6tnnTKPNAESJswkHPz",
  "key10": "23egSwDnNvxz14bmHAkbGDLMndfjv53LzhQ1PXhaFaM3VHSBiT3wcin4SVGAwntpKNYUohVck2eZVbgepxQb2B3E",
  "key11": "2uAq2mj2k5fTmvToKyv8ra2qi7VBLyEdfq4cUHdVxXd3JYTATM7xqNiz9qSoS1dqtXLsRBPett3NfDzdd6FCjecW",
  "key12": "4RTGbufxycuKNrNfqRJfiiRe8GYEXCovMHKDeqvvDw2Ld7LcWXqXhr9rtZZxWWENBv5LqBHDAY9BTv7D1tfQmpvQ",
  "key13": "3FBCvkMF9uGuoWvhmFwX5iXwmgT84hMhV5eb56CvKEdYAa6KBUAp6Yf3hKK66SGdn2ZsxWjpeu33BYYvnoA1a3xE",
  "key14": "5WFLZgS9UsszuG241TyiHLyDb5jEkYuxQJkQeKMSRS1nzAkwe6LvntgKKfSaqeCfnoe6xpG61V2U8oFXTVoBwmie",
  "key15": "2TXHdSpJnqquhGUjrUkaAAuskLkQWcXk8pdC6aTcUwrHKBCuvr7ti169NucwTsqNxJgqkJ8FGHwouKvceVSXtfeQ",
  "key16": "7yvTtYkos6ekfyKs628o21UH4DwahgNcjAmmPzVYrBM1Pu9spZxdMek47Kgz2bCTd8uuh1wyVvDsdQCaeD9o2jH",
  "key17": "5k9cByg8Rv26cDTj3nNbWGMAfaEcaXbUgF7xzVUASD3qD8Rty3PMMo17ChRgiaW5rWukturU8BWdr4VmXsKqttZj",
  "key18": "59KuyM3Mipv7tc5gZhDWPNxaiNHpL17krSLvXnWx1Xd5HuYZKwoy2sXxXUfGYWya7kj3yR9TXMzarvkEP9Rrabpw",
  "key19": "2ij6CNGhve3azUAJMF6Ag3YuYX6fAMfygZcn4UjGinohp4CXBvZma7AqJQ3hpQsKX9bVNfgogw32P318VnPKuQTG",
  "key20": "QHKVP8YhSoBqxyX5iRzmE8Un78n1wdwsZjt5josHCH9Sewx3az7PVcQY8vQgWpBWmr79gDNZKHW8hoetx4h2uG4",
  "key21": "3B2otFVWzfCDEgek8RF4Ke73hRCCBtcLj1b7SGYhWCSG7sk7JEtNvuWYfHYoXSbz2JNt2cRsNKmYHrunR166xgbH",
  "key22": "2M7NVktgrFs79fKb4ymPBFWewfSuQu1RseXZURQEPvVRVmy9DR73jv7hYYK8YPBTjAQns1JTge83xJra1oJjwe7t",
  "key23": "5Dcrf7EWWxJAkMxwAoCVUkRvKPibZdmexyV4NopSawbsmHcZnHm1M1b544KN1bgn2Z32yZEDpmHoqzUsN8Ahbq5C",
  "key24": "3b6JgPYhdJxYof2VviHGsx8TgrWjdZQHRRNVESyirfuURzqDQi8TZN29cY7vsEDgypdxsCUFtogACV6DYKhafA9v",
  "key25": "2PRTuWDGpesMPrYibkVEAAzAqQNSKYVUoyXkxb4jrBKh4fNyNhWD78kTjrQkujJ55rAYkpJmtRAoDuHjo8CC4ivb",
  "key26": "cpzRGWkMSpuWmC1mTeGe8NG4GSEfuL941o4qGFgTrxWc33DSrpgskxwkdKsriSUNkVht11XC9WAoMYJh6msPo1g",
  "key27": "GJxrmS1WeUWsUtjwpDEFs2vxK9LpaC6vF8GoKP649H2AKBZUGZkuQ5cDg3paMquCDqAxRTKE1r1S68pMfLeXd96",
  "key28": "65o9zXhpwdAAGmGJh9uTiwox6Fn5hdjgWh69C1e8PMj6rEYDApLgi5jXKHkYQQeKmXwj4mbaxpjFNz8fHo1S58um",
  "key29": "3twe7PnLtDXZxyn97DjR2A2RLEvXRBZGFZVPLkWWRPyzcX4oUevmWxSscBHUiPYHNaMkrx25wovgGds4pAZYFcUs",
  "key30": "5jtVjPaUhVjQSfsMfqnGDhz61A4uZgW4oYNFpbJjPLaKPar7sdTZ46ed2NWNDiaGgUC7BQvKF38R6jdvx8SN2sCb",
  "key31": "2Xzz4kekiRAgMaNMjfNwgNrUC99r6a3GT49zbr8Tjf26voL81Wtsvgj9WFgrtGf3y6UjFMnrqV4K6t6qfWxq4k6N",
  "key32": "3WbG3wM8NZ7eoAV4SF2ESjfBPhLhg5AAWK9tKRdmJL5qhggWovDYtmrD97QqQWjMrcNLQCq7hL67zV3ynpLvQAZa",
  "key33": "4YaD64G4U4JFzMUUoeNntBydhj5DTJhn3zq3ChLjTfXk4Cchv5JZsnai4oTyLZYATqUbVgTm6qK4SfN13tPfbMMh",
  "key34": "2CGkYPWj7h9dHqftEjyMLK5bJa4SPVenAKX8d4J5ruh5XJeEPJqMjPKDqV95Rq7WfhQSrN2bu9R5EaEosrFYsFmh",
  "key35": "62uR6khrdbhzJbQqJpkqGsTHB7Vu9e7bBT1dDtKgvfhRWzuPueEQPuiJMdm2XGXngspyXhKHdsuzEDevHr6xfUYm",
  "key36": "AJBAso7DVFrN3RcBArTUv48nvuLe2jbChQyPQXEaPeB1PK39JcWNChPJU9VLWtLkjTTEqUUHUABrZHZKQkdE8DY",
  "key37": "2wyZSK7aK4fidf1CMMg16BT4Pj9ZSGvsLyzv9yV28u3hYH5sdrfHseu31p9SyDSWvg1pn7vs43iL5861LXZ5zAc4",
  "key38": "2dJxY17uvTjTcEy3zESDCww9xifU2rQ6rKLoFKS7Cwhuf66ZrWsa8KqKA7uccGrL6vsnDHYBix8dzzYhzEZvFhPm",
  "key39": "2ftXJbvtd3i7HK2SMpFqNgctf5HV2E2DmaLMePZer9HnVid7hK3uTwvPxjjiJBteaocQD7cHtMxaw5tp8sChSU4j",
  "key40": "4DJP4S1LKScHQfy1kqt9TRcNbMr7duSS8a7m52TBcRcr1sPCuxyabb1V9PeVCUqk2wirg7QwpvUYbcq8GfoHLnaE",
  "key41": "3DRd5qTPgtHyqkU26dHGPQevqPzQiSKKmoWEvGZakik6EKiP8v8MWjz3vuM3pZT4ELkjucgckRNb5bxRRUTJSSSC",
  "key42": "5BiTYuNk8qMgfits4Akj2XmAkcTzkBEHQn9VCTU4w99GDC71HrsuATVb2ykiqvbGcjMiLcyXm4xRp1N8pRqzdKAx",
  "key43": "5ktxS5mTzaST5zLXZEf3kvBoyUCWX8PchDetDqMDCDuTNbexmwYC49GKfps5Qx2LEyntCP8YXYERV2v9QWdH6W56",
  "key44": "2LQvATXsULpfU8jr2jHmeuLuV5968PRCKFznEzbTipyPV7JxUbRF96u9YSo5uqbeAGixFHNjjmG9W8UqrSYU9Woa",
  "key45": "3VpDfnTA27GF29z6KhMMF8XhJUytr1HAdjXWWBTvEDQJiA5Kaszp3cX92E2hQ9ginUcndmFVkSyWhksh1beMm65A",
  "key46": "5Q2hAnx8PTbSYgrwSYvd7QzEY19RLQnpChxmb3ZEafBRkmrCkMYs7c4WKDGyZHjyz2z7JZ699U9jHFi9YHwB9E4k",
  "key47": "4zNBRChd8NFzyffhyEMoiPCEqQ46G5W3mG6qsQxRdYNNxKX5ekisk4odZUEfpB2yJwg55RAsPCMCC3569Qpq9inC",
  "key48": "233wHkZQRRp1mo831kyULWdsrZFfhaF9JzPZzt6StzKjxBRgof26jwdoq6u273mhYCHZSYgSH6hKeDzMHzgP1amL",
  "key49": "3Wuvp3V1uVwkuvYBDiVKxBQmo2RP5ZCLuKeCqX49zkX2Swn6oPnSKTp6A7FWyECnYnRh8HAChPrCe6VdJvuWAukv"
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
