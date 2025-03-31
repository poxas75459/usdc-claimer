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
    "5xMYg26WebaHzhvVxaFmfsanCqFdWw3CGyaDmCDnxUzmUfUKuBwfkQs29r5WYabEZMDoK8LNGti5j3kmEDTWUfeS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BTsvJhB1994JbcCo8rmzzWzthWX9KrnHRnZiDZx7k2MAh7D6H8wm5EQ5XD7KH8KtftyxKPJ4oRdXgicPXN1NQya",
  "key1": "4yDg4ZytzvoQagZDtq63fsxkchVm3V7RgcHurFfATV9NxdXKxRZfRrGM7EjFRCN8uBiDk13c1Qa9CCGSgKnxGaML",
  "key2": "61givbhjzw2HP5uwQe5aU74e79KST3HAPrc8z5tXYoQM3v7jyAmv2ayGArcmerDoqrcH6Xzo95s5899HrzeuJqjg",
  "key3": "ZBor4LGyWqLFkPCyPQGAzp5YSs68BP4xj33Wa1mJyvrDjUnGLizkukuS8EhnSKWw2Xt8pskoKPvBihwHyUtdgvN",
  "key4": "4esj3WYWh3TJeKfwMhwiR3UzoiiDE7nkBF5kwuLjMhPxUdfXvt26K1sR3X1HNbTGqXUmFwCgWHAceusaMpzVkYhg",
  "key5": "4jQsWb4DtmzdxckmqdzJFwzAj77rAtQmw2WSXxoHmzDRYYQZhPCz6p72gJ75Y7wPtKXsa6HV4z5WWpv5bzLEfReV",
  "key6": "3G7PCvGqPck9an8D1m3BXvJmHzadymqprpa3h3gScwtoy4D3p9NarSnQeXcasC7vPw9Zq9r2xr4TmVu5ePM3TvQ8",
  "key7": "5YhPF5376wfinYdyFR19BrQpb2cxkqCCcqvFwvVhtybhpLDMDEqcwjTircny9VNYHsP5tBPExDweeTT6zbq9fQyj",
  "key8": "3U4BNuP3GrzqTSYgk5EjuuqnX2H5F6tjB6Z353exp8xxbDiU35Uj3Wkcps1k1uerVduo1hRATmYB3gjtfWRvnphM",
  "key9": "4gGp6cycQoLa4eNgneFemotw54WeHCnoVviuyUiUxZh9i4gxUEL65VLV2cSfFhFncz19nErPKpHw7m4F5H8iDMSu",
  "key10": "2N2Nzv6nhBJUjnDyUEF6gjzTWhQT7nFhGca4WZcTZExe8LUFBRqmZiknZkboiVm7d3NFFL3UkWfyxEndZz9HcXrY",
  "key11": "ChwT34GRWTuDL6sgs8cHQWeyitGEt1VdaWZDt9S5dw3ea6JsYb9yroUAb9Q7GkQx1fEGJsiCSW428Pdokt4YD1n",
  "key12": "QeA3UjVtREWWKBRmHnVvbH7MzyCu4F5D1k2d7yQrzo5tZLDtmfWwNPuhTbsiwZce1cXq4Vus8cqXsHLBNygNTeE",
  "key13": "HyCXpotEhbGTz8eLaZxvzAxoUTjYXeX7ZCZBnMZXaGmPL7eUs6jrNWWbwAzbEAANwe4WxFaz4ydduH4uM5ZL8Sd",
  "key14": "d99BdgCNSRmR9o9T957oDHvFxdtvpRDKGt1NM2Tx6eMY4oqcaHvmmrJe9aHZCN6onimHe68AUjVRTRF8i2Q6swQ",
  "key15": "3KeQ8PYKQcH3wqWJth3fmFr4EgH8fPfBgw2MhkNHxguaxGKqCi5idiPxNdYCavZE9eKqSF6HYSTvUgPw9gU9DRaY",
  "key16": "zwX4Topn2RnKaDZbaHX3JThZ1kX65YR3HoWJxbR8TxjWcPqiX3q8nPgrrio4J4agz2H3FpPVyAnsaCfirZvirTm",
  "key17": "4qwoGZsmzkn21s7eNPMx6AC7v5it1hJvcCKvomPMht89yrd3Pdh1GTG9nv5AbX6SUsKdt2sxwSyKcNaDG8xdDmck",
  "key18": "5jGUMfYijjh6vV7qK3pfZ6QoUnGavxg4k2mhfiKNKmsao1DTBXjdEpjRfGac8AqGJ3AMWoHQCHRFahuqTCk52dGy",
  "key19": "6SKigzYqGoogV1MQNCJighq1ewuyDgyZ2bTrHY69r8h8Qgwo9KuEUCnZBAxiYH1SYdRHuQYgx9WTvrwvE9dwkiS",
  "key20": "2zJeND8hdkC3UpCuqjyM1qvfRniG1jChPnbqwnvnM2aaC9gk73SnvMNy1ac2vcTPrYmRoEmJqEi7Ue52pDUt2JiA",
  "key21": "Yij6kJ2V6Cek2TLDVbKEYc8x49GWADAU6ZbFCWhTUvwth6KRmwwFD1x6RgKknd2QjYQQVco6vYYQkyFd4YAvjXn",
  "key22": "4d7FyFxFBLpSE6LkhvVHzdJFunLsq2fd8KE54iH7C9UqrhcdmduvAJPiXXFfZoGvcEPGQNSuSVwF7rUFuhdB4rxZ",
  "key23": "3fWjxTMKwQfa9gxMz7j8ooR1g64kZxSjtadAvSa4ZjDk1hAV5rfnnAdPAG4NYh5o5BTB7TDisgsmA5r3EbGwdhu",
  "key24": "2RYmkomtCJAyqAMkFdxwiVc1UGyvUfLHf4wPX4u7pH1Vfni2ooKTEy64biVzt9ogwBKMWHXFkhjACLKQo34aXKr2",
  "key25": "3BUCSQ7vb9RX8JtXRej988QchtiHsA3sCK4JGpfnizxRSZrAL6ByGqGsLV6dTDdFm6fByH3ddzNq2QMPYdcYo58p",
  "key26": "43NctCJ7zdw1wmw4TS96Nv933qdZSqnUwY4635WrFBpAAtxgkjSFR9ZzUzYXDzLT5uy2mveEaQmFZMDKmuALqe5b",
  "key27": "66MVeAiZaTZRND589cWEZ1fnnVdYRgJ2XTNPbQaaQqzA73BD5qnu4CJLDx4gsKFNQhCYksxvw6HGbcwvc9ebm3iN",
  "key28": "3S4iCvP74c91XV5EvD8FtDdTW4UhqAt9pUxzf8Ksj8gXfhMTTXNWtd1Hz1uJjRa6EC6fGR43sXSRDsVSUswUXtgP",
  "key29": "3FsE1AUEGMghbv6XQ7FBhYpiFRpUuTpnEYF1xHqWpYJ9NzkmemZv1sJWVYj2iFXvKyyaxNbXeopE9NgHvCBrEwRU",
  "key30": "5MPpF3XUQUSNBWagwT6YdmqAZyUyzhJA2o8U9evbJk35WWDURcmqMG3DeTXLCAFtPQW6FHM6qgNrYkQyHsHM9dVE",
  "key31": "3FCCX1nvcvAiHQx5CBJbNLerNjYAqCdhWZstUh7BMM3SD5punyvxAumRBJJziA9RASfeKGZXn9A3sSEFpKjHLMkx",
  "key32": "23AQmRRPpmzw537ZEvaJk3WwL4SA2CozPKR6WkpK9N9n1K5EDsBT9uuDTVeYW6oBaEusDqxMBN5q68yFBqoUtE4A",
  "key33": "4WMmdRVqMGky9rEh6jt2jCZQ5TxBaagzjARoqoyVKVm8nrpTxVKHYfoRygr4auk94CHcg2weZDvew7f6qLbeUDbi",
  "key34": "2ge6MneM3ZingKjzB2EvNpKtVLqckqAPGbtqXH7hNjAyKUssrWWS1NKxNcHPco76iE9bc9AqoRCJ3mL1Jg5QzTWU",
  "key35": "28rxcSRn1iF9hcQhRpZvtWLNGoKBB9GPYGGsvetWjPRGv4m9fLKFv6QxHjX2LjVADuw4u47WraB14r37DXQv8ujY"
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
