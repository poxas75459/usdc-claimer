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
    "3QvMTsNC6PxEGKHdj2EnYa515djhHZ1s1TzBtYEmW6tLMUDTLqZRKu7j9pqbP7MydjJqerwTMuU4uQq1otsMAcQn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xouZexBq4ckmDmyXA83jZNmx8MBWwsbDLkkkmKXzy1pxwMoZyWsDDHmiavfPe9QuVw3BHSxVC1BfGQW6kkWAwTu",
  "key1": "3rVmy2J4HefE9buQ688DvzmA2Mh63VBnZVyHijoNNrkCJwcgZ98Cs8F1DRkw1Pz6uZtR57xNnLQmetZCnYnHR5nD",
  "key2": "5sMoTvQou6PzvBx9EusuvbEyLf4FTxq6fRi5opQp9MPxz4hsiZoWDx2KX4Ahb4yXnF3jifc3eJ7bUo3rYbeLgPqL",
  "key3": "2ZdaTksTMqLw7t22jDkjnZUqeLgmm7YRnzZcHoLKbGSTo5shjeuhbP7HqEwuecspULzxdHEBNhNm8f2J1tdsY6nw",
  "key4": "Cg3osBQQx2QQTDEnC3L3XHA1NkfmnXbvPWzbTcthdb1FdaVoxz2vemdUCB9C3xeZ9SENLfmPZhyTQ73TySTCbm9",
  "key5": "5ZFUnZzsxEe7QGd9xfmaUH3eYQhDmFmcxPLEBv8eqmJJB6eyGhPeg7ba1LreKm4krxmc6R2MRFp1muW5Qf4KAPLp",
  "key6": "gzw4jisEuWzWas9XBrZM7Kecp7VRhC9QTB7ZCVUVbmwmgxbH8iLUYmrza3jBTQi3WySEccRNQ2S9naqnu2z6ipw",
  "key7": "4NNQ4vepUBZ3qE8FHcn9QSEzc495HcoD4rbbox2Uf5qs3jk91LCgFGiDKjNEN5LQWBfmd3BhSH3MowJvisxafZKv",
  "key8": "3yjBdcuJjWznkUH87Xy3kA35sfXrVbpix43cbHMqAwqShXT2V37PBhfLMJhzVUbJav1aFLEpbgoeANaX2mFnqH22",
  "key9": "3j7d5vLXRGbZkeyVasdJe6oxVXkXpteVby3f4C8zr4yBkhhR13RZorVsrQyrrv8icEPNBFauC5rmfL768nk1cKEw",
  "key10": "4XBRnfYb4gbNSXH6wnF1umCbfbF64Eq51hTtUPLNsPR5uyA8ejrHNzn6nA9P9fJoofGdGGLwf6ffrCBAgNpNcNMa",
  "key11": "2pGjoNUPWYx9CJuQCHUFrNcuUf8CQUXDnfCfQ3n88tju7nn2mLFnxbepVeKu9ogGnnRJqLd8m9D3rp7EsviN9vr5",
  "key12": "4zVoFfCSdMYWDAriHzRsjy1c6JJPTHdrRMShwVWRX6mewPqC66afzHpmhFFUPfNAEewzZFmm9mok77UJxHRGUocd",
  "key13": "hk9tnFWVdsdNuZJwp3YwEoKytRSjqg5UA4sVQRifGHK6H5vqCF18iEDKmBQA7gVGJQvxs4sT3kNdzRPyLX2U9E2",
  "key14": "cRQety8B71dc6df6FVrE12oE7z7xn7GFRTQPLW2MzgrLeibcfRhZWpheayaf3yTi3teooWWTrTq1iDU33Dw74Pj",
  "key15": "DMtKDGz9iV3SX3X6S9bmFg5BZ23fJrLW8G59MiznjpyU38ZUwo9QygmgcYuYyKY9ivp5qABJjR66iQt5VBZhJkQ",
  "key16": "4Hya9Vn1K3XCGCDjqBC65W8VRzX7dtSChoV4cyMDwBUg6xPvpSTJAfBHjPdVhgHAD3pRacb9FdKyQPyiYvY2n2ew",
  "key17": "5fLJVKLtQeiNSKYTebyeDALuB4bhdWbFzmpspnydtrZMdUQU7qGpGNFiMkh7Uoy2h6FEzzMVAewgC1817rmKQNor",
  "key18": "Qrhe15EkLKFcM4U3sHmzp3PuR9vHVG4Z7kkWTNWQfy35rWq6SW13ScuKFCnFt7oB4urrwf1RjotxEWZgjPdr9vk",
  "key19": "3gW3Svic3QNc6cgAwEbKwDH962GPXajkBTJ6vQ1MduAyRNTdMzXFZArMgntX4GNvmnBYcYXhyvyvQgZSWa8vLvkd",
  "key20": "2nrcctHuvDhZth9hsgujfwxk9NXywbhqdNKEWVxG3pHz1sK2be5G2WsY9aVG6xmYFkqk6gMYirAQQfUP41dnc6nW",
  "key21": "5Ugn6i4jt6SUBccv4pmpiwE6RyH94cFNKnYyUL7fLGGg8cuYeE6Pp8Paj8GKcsPb6V8q4ujpSNS1JN3pAyD4b11v",
  "key22": "2ZoQeu5hGBFBDSj9csFBe6Pmm4rC4rTv3WV6wEVsxXHNBqjxUPQu1zzTCK2vYxxq6uqeLvzMsZicuLrCv3cixCAt",
  "key23": "2THvHizMa5xNc2KUUxSKAPX6Mjj1MhLGJYG3tbDKvCbsYQxdWvTFJsPPzy2ge1Xs2qUz4myH59YwQNzwDYZ4QYPL",
  "key24": "56G7jCZFrAtr2hUHPJ6ZvhYZ2HyBedwQFA3cE9mnwu7jDzLrt3zC3MtkzKzs6yfCeGZcJaByqubzLJ7FDFp65dkn",
  "key25": "nT6km1zuhJKH3y5m3DWyTgLQEWdBeknjFGg2UxftyE3rW63nMqaxcU75vyoABd5yWCxoQbD84BFe7gjgVCYWWRR",
  "key26": "568v4EAmszYgTXa2iuWL2DbWpcsdkMAEktbeaRufaYGhfTao6QQ43phrk1kxiFEzHjw7oxStVDgFRuzvQcjxMN8v",
  "key27": "5DPBs6VrDMhWKmeBLhruCkmBH3NHThTdJNiwXyEjSGwDZFegNy8VyawvSdfoedqGb7ya67jvNG8NVAntuVEJWJyY",
  "key28": "4rVsmKHBWbKZEDWMM6zhsqu3WG3fGhSbCxQhAqDNcz6nV3dc6HAZn38YQtnE3c7zdsH3xMVtHpCbL1gHpfjov2KZ",
  "key29": "wiJgeTTWFu5Q9vj1L7eEwPShiMmw8GazpUMpJvUkVoW8mg2xjHEoMydn3F4EsvgAGW6S4kM2WbrpRrEDg2FevJC",
  "key30": "5cjnPD7SgcxAb5jVVGYv4GmkcBjiKYVNM7a1yCbm9VLis7ra7L96Yg5wh8TEBjmrsAgRrUiyzHB5b1CzF3V1Nbsp",
  "key31": "4js5ZYQ9NGYsB686f5iqG32un3MoSaNXspcbbyJTS43MFUZApvD1AW4LtopPM8n1Q4fQtw2tkDoV5cuCQvrnxpVB",
  "key32": "V7JQN3ttFo1yYmr9J753XVsKayiN6Y39gEyuGmHRMkVLFRt2xbYUhR8YLTiNYy4B658uPBL7CQX5UM83MetWVpn",
  "key33": "4rCaaKi1cZpHkbreNLRZ4ZLEJc7qGrSdRLNCq8MqPakWGMJ1ReftNQhH5Dina2CvSyUTBd3EBm52B1TWSBqidydS",
  "key34": "59L1HcdfLj3NoVSsCxCros3vhPjCr2xvP6DbgWUvbEkthswSfeSNNsi9puhcLJJxfzC51b44qjtNL3JJvrvymLt1",
  "key35": "deyDCJ41pMBZBgcmzpd3a2MCSRN9gNwm29r9gPAx9P3yAc56fT6WrAaMUGqDc279TJaf8VnoqyBuBtYu5uMpEYt",
  "key36": "66KGB9mc35QGngUMRxhGMaRwJicPCi4BpNJPwRGQfTdkMnjWzp61dHgmL8P8MwwahoZvu6PLVR4D4vWXhFnwMNTj",
  "key37": "5pxCG6uBLBuRztG44peJvv9XuDjK9vgT8iuJYoQAqEvP8Nq5qPpwE6cRQcxM3aGZRJguLAG1ppYEf8KrHs5WDiDH",
  "key38": "2Pd17Z1UhTULy3m1eG8etWufvWDib41NiDfgPnZ8KrM6Gj98m9YbJJsKgZh2hxwb9aups8rrpWWsKqyMHHEp46ub",
  "key39": "2hTi9s7wDgS5p4QLoDc45bFxqebA8gwqjSPR9LZz13ZhM359Edkn1NhMDSrQxwXsBDtJ7uEHwdsNVG7civAFLCJX",
  "key40": "4tJARdRM8PwH9hGoJ9PTzQ9ZAEafNeQ6arnc88KuDqtNNJoGcVVAkJrDjBaPMEHjcqmSUrdkzQcKca4D7DvZ5Pwy"
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
