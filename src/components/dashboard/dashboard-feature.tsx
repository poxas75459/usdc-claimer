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
    "2y5zDx5iJs6hZduYsXG9CH6FNubAUZEPZQi7Gv3gLTxQwLwgo4rpasDsBwcGTtWSpLUakZQGsnmtfbA6KaAPMo16"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LQpHXgsds2Vw67XnRFN8VAymGwLxNY24Wd7nPWshJsBKJ6BCGQ8b1kQDH8csVy8Lozy6YvuK4m4vJXWSRgfpzGj",
  "key1": "5Tmfc1tjS9Lx86bm6cr88o8YA8U6iaYLaiPyoHZacGxUiwdYP4epSfnaKZFtgsvAX6Mb746Q3JAMtrJtRo8zWFuv",
  "key2": "UWx4L4nxxsA95deyiByBrMCa8k9Lgh3vgFfqT3AFZq2hRZjVJYwfPWrYwhsK58oXubimuCNQB2dQEuZcF4HenEh",
  "key3": "5rquCG7YdGG2rEuXzMpu5WPVCNb9kSHpdVpeMZBhoDXdmz8FiiXbB8mbUVC2kz2CL5kRsQvkJTvAJEGByPEgcP63",
  "key4": "27J8is4C1zDu41yg7pLqt4ELdf4fnoDbWeGEw4fHAKAxzNtCXBn9mLXfTHTixkj9hpgReCKLx7CPgBjxAxdhqvDX",
  "key5": "3W8m33jRiPjAdaHK8JsHth8kh5yxqP8PbkjDnTwTsUznpWw6Sq2W5ermDRP2mvqsegxDWakThcjVHJhhGpiPijsK",
  "key6": "5nhLtDuMm5TmfSdpNdM2dkPqGmx267sTNpvwHhNxHMoGrW1KqtHkAFwpwoJMZoNfVpPnPHoC6SDrr5fGZYQS3hVU",
  "key7": "2pwKj2GoNtX7WgfXrRvWU73UXnShLj8y2F6p3vgUBKYiu8YEzLF3AdLrpL6MrS2VqMa5rdNsKmVxs9gWaw34odCn",
  "key8": "5LM5EeRnWUKQR27bZHQmgtdCwFeiAheG1p5YZ8wvga3AsqdavNREkRHZLwgAtpJ9WWCmSM178SzJh63hS8wK43Jy",
  "key9": "5cuN1C2K6mGXZiPBBvXthWJXnuUnSkWtJPssUoa18pVmfKfB36XqpyDrjsFFL3bVWd1wjBDeZUgEdTLkn2cJNicq",
  "key10": "4Ngsre3VHfSbVsyXLCf124rSyoRQfWxNUmdMGhGHzBZiEKLnJ5h2Se9ybzNhrjuFnTkC1iZARdV6p3AY9BEnyFgW",
  "key11": "4TzkrAbmNwxyYctBouWPcL2csg2CNj1kRQsGwrby6NUvVmFAbRdM1pHcgLfKXitFnWt29A8oVNAKXzupo5HggirF",
  "key12": "5atSs3fneY4TmPP2wMpd8ADFSWB2bqXayDQM8HmSTwLVfWfMRejR5dZSvS7pTrMAhxExgPNQBMoLbJwaZ8RQS3cj",
  "key13": "3W8sQLLdGSo833gJxxfro2rXpJRwgxBdCjqDtjGPNXeKsT2YikfE54TkdDytBS9iDhvoKPL9373SqD41w7Xjb7ok",
  "key14": "35F8YyaST7aeDPXStDn7GUYPPpZWT3cLxHMWqdiQGewweDjy8K5LYtSazYugFznMQExnppiCUdkVXyVjZbGjUbos",
  "key15": "3qArNuNXTk4p1ZGzQYHwDyJhNgbxBjbULnPWP1AGLtD5PLpngEppiXHBn9vTNWmemMAkmVu9mszw4MViVrxgRqFR",
  "key16": "W2tPMHxqcdTjBKdrxrVwMoJFxLSfYGi39HiGjaqqwqU9mP4gVWG4cnbpppamWf6F1HvVxGYUJVa72Lx69vyJTmQ",
  "key17": "5FNsy5xWFA8SFydGSgJ8nEemSvaDMyB4N6FnjirKEhQLjTGYmk9bAohRtWgsP8VqGmVuNAEbBzJAAr9JsXi8E1xN",
  "key18": "4MdFjy48rP1rct6WJw2ZZKFJxaUga4u25mV2QDFeFZv7qcuMxK98Kjj7wytdhiGthYLiufC8vkX7fcrxRP9Bkoa1",
  "key19": "42vorEQHLcUbAjSECN9d73Nkuwq4tw6ZWXQ95mqYDCUnJuXHeCtPjTiDooUKesacTbB2oV4KbgtVQZu6VVjUy6TL",
  "key20": "2sawjUSVpGBEuPqedabhFRt9Lts3JF8xpEyLDW54jJbWhpxs8xdGbi5NN975P6U5aMu6SBMTEHNAQ8BdV2U8GrYf",
  "key21": "46tmSUzv7N6Zer53VAYcQRrTDoi78JeGS619VryCy17nBBh1Yuyrmdxp8D91njE88Spi2qE2vd1dRE6CSSsD9H6W",
  "key22": "4d7PUvGA28LvgFAfRPiFVvbJNtJHtV2gdAVvqfAwZaWTcgNYZoHgkpAfsCkA4KZWdDijTRV5JAyEVtaaZU9Cc7uV",
  "key23": "sj8epcVoF196gf94t64YBedfPmEKngrYC7nhzWKbb8PvQqgNceTh7L5fjuojWdM8Q2rX39Z7A549cP8iVMgeZK6",
  "key24": "25wETPTE5TbzPDwASX3CxpRCKG9jDhnMtVgArPqeqUttr9h67ETyn896ZNHfiDo7axiRBwYxV4adNzJEz8hxGHPd",
  "key25": "3PREjfisxeA6roxLpDQEYRbR8EE93tgRurKzEF2axmyWtegTnbMdjxxjWHgAmEzYuq3LLyYWvStEq7dLFjZSNM8b",
  "key26": "4X1tQkTD5mGdwrjwAu2uwaBogJrU7KeCMEQLHHvBWbkRoXbzZxUXoTMquLA9qEECkj1JyHdLRAULDCKu1PJ3vLZT",
  "key27": "41oBeYkPwAg4dum7LW4naW1muVCaTdu1xKnMprFEfk8S8DnZWX6sUj61Vh1MWtji7fZmoZXtXe9c4GfgbxKzctYS",
  "key28": "54u3iq9dMo5ebACpxMsWxQnbd8JW8yH9PvBVaqW79kDs1y9YR5YqVeLMn3q6YqzGrXZKwUatvoWX23BB4FAjRXEf",
  "key29": "1HXStzpXEVSjkWyPQWQmiRi33mNtaw6oBYnvCaD4bNDr6N2K711goky1W5sSLr6iAqMYfWXQLPRECYx3dTFvP5s"
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
