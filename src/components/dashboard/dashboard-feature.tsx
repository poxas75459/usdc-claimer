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
    "Xm2xNdCeSairkqS4YtrEUaWq61wPq8pRmgzDLXNPpukp8PMR82AbgUy8JQj1xyTeX31Fbzd2swuVShVwQfPScXA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XrLb4r6f2jmMQeSYsW1BBFG8wZexp5iyb6j5UJExCk5yJuwgRzzFQRd721uWUH1cPUZx5jk66ZY4j2Dg5d6kyQa",
  "key1": "5yy44kzw9oYbHsmpv7Hvk3TqTsTUnexXjgPFRsNjnvQtSitAEDPijyUEhHGTBYjeMKTv5i4XuQRUAVvrHaBrSRrU",
  "key2": "5m55xVYSUwaNwRXoGGRhhn4zGnkbrJqLcdQwr9oCYUontyqxKPdn1fW1QHwrkTQ1gcH4wAF2s26akTVDzNuEihug",
  "key3": "4wVpFhw31pqQ3UyiTqVhbNowXVuxZTgvxHoow6r48zP7VQxi4QivTJbUMA8reyKUy9MMhHRyzgoj5SmAzSZsULpd",
  "key4": "4ZfxNvoXYWXk6c4qQJiGyUwu8C95fRJS47cExuiNNSwyR3dNgb69dgRfwXxh247fFdjZKpuA9KJBFfgg9BaY63jz",
  "key5": "qnhgN8UAYSQuvxEpeMbZgs9sagEQZChp96JLuTArWc3tUWsSwym5RrjXCJSwXUfcRwFAXFPAjHwjfG5i7bVWmiU",
  "key6": "2hTxcDvQxm1bt1HquYnptZF2gUy9949p33Ww9fLSuCdKntSiNa4436XeBTZ8jvJY9AX3ikcmytrK2g5mnaoY4jgs",
  "key7": "2ssgxoYvGGhrRPXRtp6p44tQdkRH5rg2kTBGakyjmDnCmdFXjB8WxsQ7D6vkrLDb8y3F3FZKVLEsUpuD3PTHtx84",
  "key8": "22xUDoEqPgdyWh2oQWscUWf22d3h3BifLrgn8JHaxR8dds2faJDMLA2aPsToUiqCTCw6oVifwaPUTqco24UtEtXC",
  "key9": "Hj8B9J6vDi6EHUPczDkvxYM8rtTCfkF9tNVxDmXVffXWAo7z9VxfBhEUH5AMajBCmvQbmb1tFWqyABYeT6aXx4t",
  "key10": "5d8D5GJC3sJoJZEvmBCVuMj3CFrZnqo3AEmkKu3hYPMJe3GKBqEM46ry7UnSnXqhEKxGtWbAhZdkn8HTn1g1VoWY",
  "key11": "5avwo2MGeQr7YD7B9xUts4U8SFry1TPgF1oVxCQGv9Q95x7LMvz8tx6PC6UWgVwicoZ1bY77shAvG2yuQBegAKip",
  "key12": "2312e9FBEhdpHBkVgiZ8zrYc7pvYeEa6DqyntCQPbkHpuRWmZqz3yXLqDRfCQH9vUjmrQeYfrBP8gChNzsCKtPTW",
  "key13": "G2YApVjW5bp3usq6mM8yGuLESEuUAExfpwviLhATY3gXhcD2ByAxXCmBxud92qoeDC5Ur4qzSFCPfw6bTVuLYAn",
  "key14": "2CvkURGRf8e6AJPPwN2RES2VwMNwLU1EU1AsTU9qsFei2fQv4GEcJ5Y4FVVvZhxdcuuEnYh1UWT1GMtzvm335NS2",
  "key15": "5bhGa2iY4pbLB8PEu89iHNEXJFTaoD4ng78mAgwRFsBkdBAbmFabWSE8GaqetmwEnaW5oNBRdYokBCvxedXm9tGS",
  "key16": "2aLz7sUpajkuJQTTcaM3G9U9mEm1CaVnzMCmzwS8K9QoYQH7c1iA2ivTDfx1RNBKFBAcbav8okmehpYf8V2rgQXe",
  "key17": "2sfPLPWDW24KhwQwneZPbDFQKyEjzMKcMijxsrdk8tAJnxGgvHbLovskNQCTsbJgPAo3R19NSza8xxQiWx9AzFGW",
  "key18": "4rgHbm8vbwEYGkQaiM69HmsTK3ftF7z8daobWdmxpNW26J5ibjzCdyXXk2bALbFQ26ZntKf14Zu9rEQnKJnYSaHa",
  "key19": "5mprkp3sa9kzKqiccZKBCzngVdgob5A4qDrwzs52t4b3HvhbNoLGRUSw6TsiaEZtyPp3Nr7bqa2EiVj5w2utwSPL",
  "key20": "4p8k86LuhgZaPYQGpzpxUNp5v7XaZas2QnWrmDbgP3zdMEA8JBurvD4iQgz3QaeY79SExTsw4w536CQcTmSsu3KX",
  "key21": "2yVn2SppE1DgP68jS5Z3cKgnuRHLXUnCWno7DquAkwCdGMMYn9q6GEtvxNVmLLKVyDZiqghT28GFQ4gL6e9Rno8w",
  "key22": "ZfWBV9Jv1SFALX5PDNbcZiRLGMKMBusWZkWeKXua5CJdUqWQheGFanTY7aBxAzvYg9V76FRKCVGmPSsPtJWViyp",
  "key23": "U7sM86HpN3NR7ZM2uFXccZ543t7oF79wQH6cseN8K1J35xBEGTghfQWZ1x4WXY7xGFLmNANKTXv75rt1RqXoxtW",
  "key24": "5XMGTpu29xTwAXYfH4bfMzgxhzq32iKbWiWdRHniwThoYPB3UpXEARhizbC2jAf7AZmR9BfEN2n16efzp157qhM6",
  "key25": "65LEqDbgo9Q1JrvKnQgTroEkHQT63VCnKDkVsA8PcCa7zEqe6msEsyUDrQVNGf7rF5VRyVboh4NcG9vhLjZYvjPT",
  "key26": "2rE15wFZ6fQNRREsxvJP4vYLSt8sg2U9yWmLXaxwM3Xw8Fb92awgznfqPKJVn7VBsDNiKmH4TixxnK5gq32PKpEp",
  "key27": "5WQuZkMQz6T3e6c5oPPcbVboGcKDuKNpGYKByCdCrSsNTSTXmNYgTJfdp8yoH8wchdb8ZSsLGcBCEhZUB8eR68nh",
  "key28": "3w5RsxHMrLZrsvVxHhjX38dd3xetT4mKi8SbSa1Dpiyur7FT4S1SiuXDtUVpN3hhPtNBeEdnJdwwcAVNEEGherRM",
  "key29": "3cx212X9hxYATUGkpHYNnuTHUAraZ66hg3m6vpaJxfzcTqYkTRz2MYnjV8YGYer3HTgSdpUCvkTkixYDt8V78BxP",
  "key30": "2QRWQqtcJa1TV45rfdZ5QdeJiM3AYas2yXhMGhZz9tcQBpKV3fs4vkQH2xQQS9ELKpiDyX6YopCUz5Vp6JrxEQ36",
  "key31": "5uuaYT866AdpRKwErp8qwPddZviMoHpSfgiVz25X8qGPjsxg2Utowjx7VaXaLqcWwwJ9npXH7nq9fGfHVFsNXGBa",
  "key32": "3eKcD1So5fk72BTAgwVAZWbNiwVQGMk2gmmBL8aNdAyPT5pisKTN57HqCgeR45pHPoKavADPuNyeKPMDLqU3mSTJ",
  "key33": "3KrA5GUV6CghbQfVhStYwU9FvJ2XjMpQMmr2QnkUozihUtieKhsyKWVWbmRBiqrAze82jm6QH6NDnybsmH5S481D",
  "key34": "2hoWREzocB3xqpMPELts42s67KE8kAjXQ2f9rQUe6auin7jQ59bxGkFp8FCytJsEkzh3EpmdcUsVic2SvYqLm2cY",
  "key35": "3MW7LEhyr1K23RvjyPK5kpmsXVRxTFxD4GeWNqANXFCjUxF7y4UC8sjGAydf2tpAoKSesLdXxAEJkA6zQWr64qiF",
  "key36": "oU5nozGMrCLQSizUWRnmQunVNHQnN8icyfKMfwe3cEe1QFNvaPURLDM1oj5TxPobg4fCqCkEk1a2FYckZvcUref",
  "key37": "tRe6cjsaJy9wgADMnKhvMD3WpNErc2mGQzQqDEHiLP6EF9ZvKt95dMaHTCZhvaeJeppJWjP5Pt7jnyE8jeF7Brk",
  "key38": "5fvyWSdJDYFC63MNv2d4Bzf4t9fwjYbxAB7HSeKSUQ3gnfE17X6n2t5pJtLSCAcpPCKetzeyQwr4Zo82rJWR6W97",
  "key39": "cTvNQzaoEja2tWZ4Q1kLiL8p4NSXY8KUkuGsNvqtbLNj2d643hjiuX2TKAf485KvUG5DWwMTojLFoebzf94aq6E",
  "key40": "5ABRR22yzEd5q3H9PeyW5wwJ5QGyW4FjzHSYNR5ARENVKUVGckcD291thK9RGFT8tAzFnzYzzcTpVBryc8nbLEiZ",
  "key41": "5kWv1m7eK4RvGtRfQzQXKH8GrpEjcBFqc2wn6CZUpdeB6LduWAEAabhs8snnRdh6ESND7CEbkD2bA3Dn1A8Qu97e",
  "key42": "5J3MXxfRVmJNyHVUqtajpVgczEGU91Vbi1GxqCJpyrwaMjrdzMVpezJPUvu8XFaYcqMatYqZsKLi6ufkk5j18DaF",
  "key43": "4oAt4o8syopQbs46JUN62iSG8WBxKvkS1ezEGCv2LDUYQN4jFLj7YPyap3ihL59oJbVfR3Rhi6pZ2WgsLNFn7AsE",
  "key44": "5DG5biZWmoofLnLYtWsbzsbsq2rd8H3DTEdxeG7aJwupWEEqqt33NLCbct9DWfRFdHyDBiCBUhfSTRJae6tcr53Q",
  "key45": "45DwVPFKrX4Xoi1vgYYjwgi3zVGjXUMsfKQgytR74Xjak3wwbVdWucTG3Keso6upsCxRAe7JGNTDbm3PgAbqXEbK",
  "key46": "31f8GwMKF3dP7EUx2bgbPJYLcj7ZZ4kzaxEnK4thx7qCHMJGS5oTjwMkC8SuN7bZNa9t9nKu8CCH6HxMpnW1Z9Mg"
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
