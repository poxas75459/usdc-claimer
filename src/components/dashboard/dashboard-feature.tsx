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
    "3Wi2YVcRJtLAsMVsyTRZWAAGWmmkeogDN5Mt55Qhp5a92CwAPNizXVWfPYW7rXSRrF24v8AJKT4zz4zaM8YybDKX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HhQJm2BDxMmxD5tAqqBimUcisPJUNo1AJQAki2EoT2Lm7X6wEua6p56ogMbW4hw51yr8aZHCen3RYcgcu6S6QSx",
  "key1": "5QhdA2d7vCy2pBLzCwscYSW1KUA3uXAqpuK5EbtJq6knGxwBhLTq2xGQznYzLYiiRHKrN6kPqFvPy6McnhVrPxNb",
  "key2": "27gSjMPsWe8RbFu8v9KhZmFYVZh766hJVqLEJeQ7jYeFWHFoVMtyaN3gXFBAhnvT9reySfrSNZWmWPj8899nzTrv",
  "key3": "6pqZRHYNtdBgmMCjoEeDqPtek93U6YKeBFSN3Eg6VgvjZjUnBsycFiSmtcg5fZkYL78fYvjxh2uFGsNtbDRKxzJ",
  "key4": "5fqvfpbU8EATEEbGyR3PBN6MfbnAM581QAQPk245s1MCJGNUXLqgu9r6eJqqLBDdbF9222T7CcXubVFrF6rpQ1cU",
  "key5": "5f4PAZyNGaP6oqNgHBMoE6kj2oqomrhsU8bjc16KejHJkWcVNByrFv9AV9PXn8PqBG13TnSUBrvaJVS7p4ZMYtEk",
  "key6": "5NaHfFcjLKNFQiGT2Jud9E23ktJRe1Ax17vkPPaUCcRWMU78g8ExbDUfLMJpxrrq6QFXdBaTVQwKFko5rkkQ6xTG",
  "key7": "HmcyuDwVegoC57VWmo9r34ruePmy76q9b3ApMuAmhC4rQeP3t4cQSLRMkTSH9dTkfNCRKgrEmp7DzRG1r1aeEXJ",
  "key8": "2WEFBrrPNoauHL9wJ2k5BA8iTBAGoLMDB2qZhKdTyp1LW7sn2jCHnkxsUTxeYFT9bXW2x9vs27SMci6de47gEdPB",
  "key9": "2RzAMBo7d8Cf6YD9LUVM9gcwtJxFNSvk9ZDJW9ALJRFwUDMHXcrZP8bZwifcGxe4aiygoYDYRnsv9m78GzC8fYwc",
  "key10": "2oWdVKtyD3sB18NAaFM1HbuPPYS5D7jvSA1YkeNoVsd3TvwGZVb9FLnktg1W36DcubWRkdQiBLyqT88HGicp6MQo",
  "key11": "3PcSoBCTs4KfVj9PXC4NdJamrZ7x2t98WckW9jH4EtgcFbysLNWHbchb5t3aKHwfE1kniEW79XA9PK8Bdc1NXLVr",
  "key12": "5U5txkAF3mDSqUihFqALpkScmaj4i8bkTKbPAvrMfB4bW5o31nsmvgX7appazA6rH2JV4xaPihSYqrvdf1ayotHT",
  "key13": "mxnYHTKMtgP7KNjLCg2Ynzd96EAjM4yH73YhbHHdyKbor6DbLVafHDcbswHe6MGb4RJdTV2ywEGosk5BPC8pnCw",
  "key14": "8NJToB2xjbLXdKu7bMqXo7fUUYF2ycfVgt73J1Xo5RFtcTzgPFnviHLeee5uhmhjpnWgk3WRx5hWceWsY7Z4NoF",
  "key15": "Kzxy32PCrVZHjZXbHS7Q7xM7myU5gWqrQb3mtHALNNVn1L4z2LDdevuR9J2Ya1SBiZ99GxX11oyGMzqF8Czq5AH",
  "key16": "3k7D6qh1xAn9L7EZZUstzrEJZZh1nKydr2AccvfkUXfirW9WJH1kxrAUNRPLNtoDkcMBcKLUfxxg9KuA6Y9ZarZT",
  "key17": "5bCuCJms56ki8D2TR2QBZSAV4yCi46sp6QdvVA2aj2WdDGPS82kTdX9dGhbmg7XuAoVKWdeG5xAASA44wpyspCFM",
  "key18": "43jdEwui5aLLD4owCURHSxwCTt8PptoN9T7vQwFoB2TW4ivMLAiWmBNMXxEMYggkfoVQQGXmdhjLB8W4TgvEmTVH",
  "key19": "5y78aU7gRX655QX64aaZZuMNLdTQc8EL61qHauiFGsqBDcpGKQiDseR7MfgBAyurUgxiPV8LPnJ7mQnKM34RMTT4",
  "key20": "qS3AgjtWJJvGNJgRGL1Ey9PMGi31ZWXp5iSgaknsiH1cgBGpa3zokSNLYczsxiTckWUrRivFDMgg1QfKJtL93Vh",
  "key21": "47bh1Vf13wZyP5GFf85xmCaUg2kSYJ3ouE7CVdVwYb9MHcRuX18PQevx8WXbdUr6DUefU5JWBjKFqGHSzDMLrjxz",
  "key22": "4Pf8kuv2mjvxjfGj1nzXf1mEsLoCM9Fj2J67fipxCTfata3LDykKkwDnafLscvVUiYiyivgj77PWTAf9mrKvtFqS",
  "key23": "2ZbJZv8e6eeXG4mMZsL3JJx6xbBDgR7S1uGvv4Sc6cyogvHpoQ7VTyYLDq4m6XDP1UMsSpEV5YuZRY1EigsTuUMs",
  "key24": "mArcErtYRkwWuiu3XVeKvnRtFVo326G1e842fMzCPQJQ4jdpAtmW8yT7YxJfAVLvDqAc3YcKsmxgabbiQjkKBhf",
  "key25": "5zjjeBEmuBDcCKUaMxdP63zAobAUYoUzcAxmjjw518qN27zyKwX796192i2QRHGa27EaneW14nHXppEHrQUvPdWT",
  "key26": "31yLG4roi8zCgrwReRJrc35kCYGbCsXjSeGRxsPVRNV9LfaNYPLTb6XPJtEgxHBmZtqQWRh3JEezSYxorfVdHnrb",
  "key27": "5A4W9XeLAPLtRQbESVEYwgz1UsFXnMYwAHHHbG59MXaXwSDiUpT824Y8BMjtTMLPtbDNn5jxtmdTktNHaoDsE13i",
  "key28": "3gDnWZD4SrXfCfkU1xuR2eH3J2TGgKDHJ7jJ9DDFdT94EDNc98ZhG4qyDPkK5mV8GbrnBysbJmkhwKi2HxSFCMqP",
  "key29": "iMuNazYyZ3Aysm277g4BxjLwNFdqndD58ZWvn6j8LVrhbNfN2CAbSBTov6S6wUofhwJg1jJ39KvPWKnrh9AK6vg",
  "key30": "48mvWABv2ArsWAkNbmCtUVNUaiMwPLyTD41Maa2QeHHsoyTxWzWeHF9siuhSTF4BErGDn5EQpWJyUoM2vk4sw4eS",
  "key31": "5AKJF65jQaKtguY7Tk8FuDrzPc2P3Vo1DYx4vKQSd6eCgRtTRCPnfYPLkMAJGJVpf7eAj3im314KLv1UQJ4MSpqA",
  "key32": "2HAHhVV6Lyb6fmYDC7XyWagNKzVGGhqztoPrT4Sy43mREqSCqAgqYbG6hEPwkZqfVeY6vL6dqfXdmuewxajZRGWb",
  "key33": "22ZTkou2d7aNJyECLNnASszHJr1mJz8ZVLnzBsosZrX1kQLfhjbh85f51P6D7egtpCQoYqYgC1YtWKQ5uUTPjyxT",
  "key34": "51XyUg3eny77JoVJpbrCM2ngpFMjBjBTzpfrJ1aQHjn8ETyJCEammjWBBBSC3PE5YJ2o3gjNcbo3AE58i5xVgrxF",
  "key35": "5pkEzVWrKRRqj8zGRXYAYnWzCLGWFzUwVgphZWXWukLRmsEvnd9CYC8TmNtEMiZHbSLSjGveEEMV3XgZ61uwHnTR",
  "key36": "2SHLXFTgwGUSa957gzVyEUZHFywqDVK24pjuWjhFhukAHJ65HMBjD1319haZnuN14eUV3XTBZhRRQe4M6Xki3M2M",
  "key37": "2ovUbCe81VAF3zjxVUtsmfMd6RxQYwS9rCPYnYJmxVabCHsmDSYN93qeT2oceqsk5BkisjiAS7r4pMTffCVrxtq8",
  "key38": "4vpkXW7trfc4ZV6mb6JL8xScMXq2s3x8dGn9G94DiigbgdxPb5E4R8Ch548JZ8Wcd2vUbQsV38UwrCCXc4NgRo1i",
  "key39": "2UaY8U5qpc95oprGG2rr2NtEouzhMuc2naX7KkZLxAne3hfUtzTqMbSACDQENNquqsBEJyzaGdcUrWi4taxLkKxH",
  "key40": "vdJirSumUtHrFGEsVyP33inrRZLEnbftRAL2vJXCjbtqFoQ95F7vASwMNX72BS3yDd76BLGTr4QsF7aSCDqUpBo",
  "key41": "5qjPWyPBZZt1Rd82GP3c2DeSfc9ka1zQbY7YcQbRFKUhhB8vKfxETr5esSrcbHDPEpXXsa6o5v18Gk9crzeMxnH9",
  "key42": "5descno8wPWhT4Qxbjy9mtv6AY7Pba5tzBQ5nsYtEcCtBuo7s11eA47wArHJHfhDNTdFYhDpUmpSUsSXyG2SUbtN",
  "key43": "41CaREzc4HPaBfWhDgEtAco8EDnatnzq9B8YwEfLbUK4mySmBF6p9wwMhZnQgsd6eGF7VYjq7AsFocuXoAEUncDF",
  "key44": "CkTUjPqyvgq8qBPVccFsXgowsvfGLuKB2us7ZiTgvaucCswZxA6oewCyusMapDKpC22naq4Da6qEu3dmtVETj3F"
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
