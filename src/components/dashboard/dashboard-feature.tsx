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
    "2vycSYwmiB7TwpN8LXDERijUbbfLNzUV9B3awhgKkaZ4xqtV6NVkvuvqiNDc6RYViqcLc9Ynnw96437K9L377Pbf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bEo8LfhVhFRaw1NVHYAVBfjRji4HiGUdF7hYtF95RREKqHXSiEUJ6sts39yELzxWsYLtWrjkVRCZDAfFyzp48hF",
  "key1": "b4HnNTypLxhLGCjGURCj3uSJECF4NmMALrLe69rSJZCK9D1j4GEuSzNqCQ2PSEqzVrnmJH7qwwRRhnsu6wrmg3X",
  "key2": "2mKowaiA73A7XfRVn8kTPeGdzw3sH8pMVASjDB1yJwKpXXZ8TQ2SarG3cNo4vrosVHXpSvW5YfTEXtfSTxd3gP2u",
  "key3": "e5i4P5so8xwXieCjxWTBuaeaeMKXLgUpXzTZ1f6YMMAojwM3f6k134W4chPC7zMVnEcCxpgnbUWLjUUgVBDHUWs",
  "key4": "K8yVNTKLX697jhmavaykFEtdHwjUDbCNjmvcQLwemdihD33UUXjHqYPoGVkoNHAicKKAQrmYDhuyf1rVXFgLnyR",
  "key5": "W9D29nbbM8XediH1D2QcQfed2EvJX7ETL9jLhpJPutTobvR2HE7e6TS1Y1bX4D156kgvLzSuS9bJtcJ9BGRS8Mm",
  "key6": "9BELHYipvPixRxacPz94R9Mfnjzds9dgBRFkpbpKTeD8g9VUa8W9yreBLMVhyy2x6eFgVtMTaXGL7os88epSPxP",
  "key7": "PE31c716PLXGxNLms3FJqGsc5P6JNhN2WUUbh7mTMnnFQhRZbnvwW5nqdTE9PYpy7b1Bncg5LNp2YmkmMNhRZ8m",
  "key8": "Kj8pY31MHWLhCQmtTBm5sn4uFYzwfC4aEzfL3gmeLTXoESTmZvwBy6xCdbaVNXPuamVGmYJtN7ZcRtctQxbBh7w",
  "key9": "4EehYfEW5qPAbs6zs7zwzZviPiPv8ks9tW9x397KCDKjzCewTQvznpsvE8NA7P8eCixJfp4fy3Sm8Ki1zGi8VUd6",
  "key10": "KsB85YDeAYWQ167V9LmiZupVdRC8tAuMZ4eTho54JbcyG3CCyh8oFTa4D3hzDzn5qVGDJSTg7WewUJUYAxQzVkZ",
  "key11": "sTtATYk2cY88FPbDjSvxKGniAnpcSiJT1qsTc7yWq9amTCNTYeWe2cDnwR4cmabptqQuaMZqUs4JWwaRnn5xGUw",
  "key12": "2xD3tqUe4SNd5NFDYtLfT8trbYdRPreUwQDeJGEN2fwYdNvR8qAC31HKArmY9XnTZeEj9PbRZZKV7N5bEjovhqWV",
  "key13": "vHWjQiSBYSpu75AhoSE4757i3aAo7UVsJu8mYvGQA6EDA7zE7Jh7JRYifBrEhwss21MnR7JsCG8HphKqX8VAWpy",
  "key14": "3DyVGPu2jcmMUwJk3hVYxnz7VTnUpsdfinqSC23KErWL2STptdcUDHGCfP4kQrCKwYhxX7Dr2Q8B3xtV48sprTxJ",
  "key15": "56kTvpQJqRpK8ALCq5qYpZU7skf4pzZkxtA7daqj2fFsKxs2mAkSv7qnuUay2Rzf6k5kGtKPhkUtHiUzbmkXh8Fu",
  "key16": "3NACN6SJB2Jm9KRzuDhbwkNrpVB4SuEX4Aa5mF7N7vA73M2Jdgd6eddeGCuRyGM3Fry4sCfAqJyqVDg1fvaFSAXd",
  "key17": "4xPL4zq947WgRFBZjvJ1SkgAHrWEKLrX5hyuqUtJfTfr4yqM4aDdsw8r52uuEmqhBfP5S7ah4zduTewsY1KqYP24",
  "key18": "23BTLZMpyagsWZhXd3DjFGXDJzkk22jYL8gFqw2Y1BpaKy8y8Ehe7WL6142KKAZV3E1XAq75npwXby8cFM7wmcs4",
  "key19": "4sReNVx44KHvb4GtFsoCzCGRMaFM67f1WJfNMvVSdMCUWPdmh2nY5t8gYSPVQen7zCDkA9NGkEE1FdpZMvGYyZju",
  "key20": "iGoMryxjxCYwetbJrQhumRNUCwaUpn1sz1ptUxwta7Xhk9huasmvGLsQzMU32kwc1xdngBvHSjCyFQg54JJBi9k",
  "key21": "3CMrKnT6f1Hdu4yPaqK3VBZn7aUYxd6gP4Xn4LwNxz3B1Fcw4m1H7Bi3rEo6KG1azNd688F4g3wzp6Ddk5uP7AaC",
  "key22": "rvd8wh6BPWzvyeum6NmwcwfDGHpbxc5t2uuiDdws1fjGFnXeXHEVrLDLQjXcA3bDdQQRxCk2dnpCxWJsHoAjLLG",
  "key23": "2mS2ZZEocM6P9Urc8toqKfwZJkv5YHMQYcDrpeQ4w3LxVd6XB7iZukTJVkUe8TEiiRLyF1xLTZg9EQSc2sL9wJzG",
  "key24": "4Ai5ukhM1nNbewaaPnsC7T8Mj4Nk3VMaVPoGva425vpx7GHitxiYDt1BPcq5C3C2Z3FaTgvNCeAwNCiq5NHyjFDH",
  "key25": "5ifmLvoyp24fwsDhiNa4kM4FAQhM9BGA42wovD52Gt5kqeyjHgS127HqMtV42TWFRPwcWex5NrbWfbsRTtf9aNo5",
  "key26": "5f4MHeqPmu5jZmBxrXzSvnqcHpMR65TQLJ6yrBtygm6C8acgk4EbLNtL4roNnfTvFpy43Esvs8hgNyYVi6KjqdZR",
  "key27": "2BcDGUo2K1Don8XvnJ7S4hgtV98SmrNcf6SGwCFpbY14U9ZSb8hP5nFyitaYQVowq7bEKvYEMpHZhmNhwHghGVU5",
  "key28": "4VgubHbqSWJpvq4unN21Jb8qeGbUVvuoafrAUKFERvjnPaknZrM8Rz9manx79YP3RamYxBRtTz1vB5ouug4yRQj4",
  "key29": "pZk5ZULXTSyPpTFPqkRsv45GgErJt3fngtJktAaE7KL23rZnUyufQVo8WmkhaFN7Y2AQ2Pw7Bj9vRQqfhEPEZem",
  "key30": "WwPEQUeBG1t9DwAPhWK772CzZHvLVYa2hcvsEcip5K19XMBiYp1ZChXX7V3qHMMZgdGxrunk5tuobBRBq2ozGG4"
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
