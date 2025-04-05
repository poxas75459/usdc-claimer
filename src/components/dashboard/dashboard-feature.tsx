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
    "4miDkSAWNn6ZQ68LPcHEJEVDxe5sM1CxspqpLfSNwRMUnajQMgw8frq63x9bPPrJj2utqxvyhJUm3AF5yF1gk22J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zELFrQDjyP1YWbL8wJqSbSfKLuaAsft3Wyw6mP6Fdkz8p6TkLNKXy1DVuScHRrQLZcaanpKWDaSCxWfFKMB8myx",
  "key1": "2ESqEyKURR1BXyAkR7RudLNYcuN3VBzKxaZDdM2enBUwmPMs21UbzVKDr1TtRQyJa4rYuX5Dy51kw6EUhuv2tDLT",
  "key2": "2PBR9Zrui6eM3bcXSYUbeJc4oyJPu17YAN3qekUksCr83uyvKhMZMfAYgwKyaKkTcsFaf2aRtfjM8Ddudefrrx2Q",
  "key3": "2fZjBUHXEqLNEAffZGctYVYqG69yJJQ5vcdVSJ7mkkyZ4cj6uXvRAFEhjcTHD56diRi6Mf6FdbspWrhgKwoBaFYY",
  "key4": "38QqHgEQkbfpAgXSYHqntZxPN13FpRe6it3M522GJjyhnwagTWbruHb6YQ65MgLiEzSjpf5ujESEL1PHeTeqJPU9",
  "key5": "9GkNDT8v2Y9vyFdYBKRnf48oHtsBhEvHivHAnhDQskHrpCCyWHUnzjpCF5eWbvfuHDKodYwqwScrX4k53BywLP7",
  "key6": "uvj3wNEfXgRJHGRLEhBUXCFzXKsAk8QhckKopFVQEfGy3JzkSKh3YCquTQ2XKo6Q8oczdXUpgbWrePu87sTFFWn",
  "key7": "5zo9MNZkstKLEKqkGdsNP6J3ahbi7D3CwLmkE3ceJhzNkYAGX1RGdEJbVD4oKwmgRhNg4LkGmu13hAKdTWvEE1u4",
  "key8": "5Jm8qpqvrT3P6YsAiRZDwAGJAiAnPR3gd6fpAFu1hckV2BYpwbwuEdj24bZy7cpb61YNouHz3zRde4Vt2wm1oLRe",
  "key9": "mtUDE5A6QsZgC4a8RpvUeCgZwUsmAX33sDHBtE6LQ1TdJymKM8WkrHjRPsmwZQiUjfWacBE6DezhnPm29jH8rQV",
  "key10": "oMT3CXHfo7bkSpgEtn4z7uz3FykF75WwQvzujsEJDh5VmcNAvfBpujaX4bGRtdnByfnXZoSyLwCcNWN8k9mBvUR",
  "key11": "CY1aSQEXJ4fLnpGAuKDNw1DnQmwZ23dNAkcb2bidSUegAfri752N3nj3aUMF4fu9YQEovf31dWJyBqLaLKJWJTt",
  "key12": "4M854R7buXwxAEzjGmZEqRgvJhz9VV6HQAu4YMb1NS997BW8vJfmnnEeuaWomsLm2QoyDXfJdvDrAQoXLcFFJMn7",
  "key13": "3q8jEfHLz5PfUSTsWttz4SeLXEmF49hrNJakLAm91DVaZqRgCrAisrhoy7DcfxKingC9W6dWv8FjChc9DAppWHFH",
  "key14": "4GHYUvE6CaWNqUmgn4iML5g39WQEcLCKGWeLEpjRtuZQb36RZCGJP76EKLcBz8HD3k4TEmJ22jSMSaZ68JHo6obR",
  "key15": "57TqAfJyHo6ZpSQVtz3oc6UNuff1VmA2BxjcQAtYwiHE6gm6Ca5nPtTrMdLHP24ygkmH4sb11QBTVifaKXx8TsxV",
  "key16": "pJMcagPCeqkqWoG4syrgbH49ttFLnNy6R28Wg83Fhjc3f1TUNMbod4h65UNsTqVWxW14X4iBQv5kFsHBafh94nW",
  "key17": "3AUHxQYCrP5ztvfUMp2SX65r1tTsnU5YCz266qx3drqNKF1QiZmRQBnzZgYipvppBPUptFHWP6UtSafCoNfEN2Rq",
  "key18": "4ksYh19MwjqLacPtvf9LJBAYY8pgoEHNXmpSrSJV2jYjQrGJXTfts9XwDSqppP2ixcoWpLEkiw8KZuqwudRuyX7k",
  "key19": "3zdpzruH9UtfNdy4chMFHJe2HEtHPKQjHQwDGyxrwBHxZigRqWBzXxknhmiyQW9pmJy4uTXaZsNzrMfuk81yZTxS",
  "key20": "2vJCT312tvoLCwoZn2Yms3PtgywQPjBp2WfwEAG1CYNLR2j6e47MPdvucJf1KWNFJKGv4QEZi7f3wY9pDDv6YwT1",
  "key21": "5HAWB4rkYQwJHnBqaH7Uva7x8JZoPZeFEmu63QyFUJkN6Yrfw3NYx1T7EHRKdaZnhvpzZgHDxtWSxE3G825m4PyS",
  "key22": "G8q1a1GBLpS5s3kep91Ks1pVGhtWcP6pFgRbcrk8pVNB5K7absLcrgjRy3ExutNNUk1U72uU6yPfgJgfYCzktmN",
  "key23": "21xAZDW7zPC73zEocfNHh5XLFb2CpkoE8wPmo1AQAn65wHkqyqV4hpFork3yys5ThRbPJRLe1sNHGSwxTTvfkkHX",
  "key24": "4YFX4JYfywVTtmU9S6b8upmAWLHoGbbX4PSdy6Q8pFGN9YscTwbN3bWNxXt5qrs3zqerAsZQiNkhNdSNe3kw44yM",
  "key25": "3ZxGvpVW81dRzYZpF5o4bjprNVoj4YHRFBkB72k1udEEaUSdjvxBwxT8tkhdv44DA2Cra2eEsFMgTEzCTNy2qdUc",
  "key26": "pHogndFT7v1BLMqq6HQJtEbyrc8nLDUho9mcFfJEcmiJLQWj5VAJWzFc5EXd23nby9AtHMXv39oUq4GWARErKq7",
  "key27": "351XeyfS5Mj3k1pqSyufW2ZsbCsfhZ7Jm2Qt1DbmQwRNpYT24TnT4fqfBdFpHbfWKRxmCwfGrhAAEzU6a5RCMSpH",
  "key28": "5w1RfMKkPvdXs4458yj9gTKq7qRiUqjH57YW2syh9wrEbRQsRaWoK41u1LG2A4uBNpD7q3nBLM6MLxbggKZYXr4N",
  "key29": "5pXbCp4vzfsquiy5LbfQmFuCnT5RUNGyTA3FHqc1DVAqCRSQfA12A7uPBSfERcYwdTHL6N1yuB4yAz42nue58ZuB",
  "key30": "5LgQLVxaV8rzdrke2phPnbrDQAd3dUttu2Mr5eWZWwZP2ZCkUTnDfRiiADLLqAvwg912XrR4VUugLqeTssi2Wjyj",
  "key31": "59qNmVgJb6467QfH4nrYgoaVvw6GMNeR9qvLzdxZjb6wHvCSZZugRV1xeZHmwWt1iSq5ymrUd5Cix8XCoWGWNh7W",
  "key32": "3hxJbRp5nWU9Z5RZ9jM4swbwHrgowKXZVQdeC4c59daoWCrn3wFyAFeeY7ksEC8Vx3JdZ2be14JJTYTUGCBtCZPb",
  "key33": "3nXegkXyH5P7zEqcmLUgehMZuB8EcyHn7H8uZsqGtFmt2JJriGUcDxbP3g7u7xhqs4TBKMbFH3nQkag6pxrkjRhx",
  "key34": "4sP39oWY9Tu8qWabL5nzG6R2nsu5CRosY9HRsfR2jfNZX7Fqpw4FnXWteUzqAtWSEdHecHDbzMii8UCw8Caxmz31",
  "key35": "4JLrJ1sEQdrfEdhtguHDF9eAKdLiFRa5X7REiWcn7eLYnt8YLbM5KbWrVZcJjKu3yGrvHN4gzsWPFjxL77ZmY1T7",
  "key36": "3rrZqXCLZNWx6ymB8ft8wZkzccr6sZntdb8zpkUJ68731BWLUE1arvB1yQaGBtF5uBcST1g2zEBcEiFgy5zL3LTj",
  "key37": "3yvhWNXdPihTLAWJeg4bavBxC5mdEGKVMMyAj8UYN3biH7sfKWu71FxpT9QpM3HQf5Xb3Du3tSs8xRSPHv3rZasg",
  "key38": "H94exJMFQeTbRYbXqQUY5udzTrLyfFAzdRiHZe9RzteYmTYs8PEhPqmqLdRsrmDom8Nse5yHDoZ74hnhKL6kaU7",
  "key39": "3upd2nJQs2KhhnKmYdh4BJm4sc45z1wwtenoEHBQhzXyhcNGUE2aTwgtXcuXaUK6JQH48qYyzL5bNxa9RQ4mQ1gm",
  "key40": "2UGXn4KYcVjnYQtvYbgzpDQ5aQ2Z2ZfhYrBjUK93hpqSoNCeeVaNLiB3dUe6fzSZhuovrYEwkErar9B954MAiX8B",
  "key41": "jvHRej3qK5YnCfher7f4EA9PNooYRiw3VbApa6mjiPqdWrN9zGYYmwBuTdpxCkGsjmJjrcWPLXYVW2eiK9fZAtx",
  "key42": "4C8tKvzfDtyjYoe2Zp1QPk2pjUP7qjdhT98KZzTvJxSAdKhYZzdrKKtsszDirnyvd5yh3xKE4vbn9G6Bwcx5BG8m",
  "key43": "4ad2VZwh3HWiyQmqeFYMZ1pVa1smWs4wZurML7cM5jqvsRDKZHz4sRedyKw4iSTpPZhsKkd4HcaffLSQW3monXCk",
  "key44": "6dxZ6YJu4MGYi4mCU4vD3WLhLy3QbDBSanKnZTSPEqYRzrvemuFmeMRc8JCuwGhRpatueuQD6A9SYL4hxQjjreg",
  "key45": "d6hXMGCYVvW7Gux4pntopxtaT5KGcjwk4oSWCztyGf1BW1GiBGnJk1Bg1YYrDBN4fEV3RtA5oEXkwuvVB14jyuF",
  "key46": "22utm6yFVnhvjf2LpVCVPU7ntr6UCyMpdxVYiMBRsYNcFvPskfSthGT5xC8KmASbm3kWyGg96PAF3TggqRnnpNAy",
  "key47": "4B2MPZou6RMBk2dajCmKjmR1xfKT7Ru3SUPNpahPp3GwpFzXLv45F3NdhsZuT5BXfTxP3xaWteZ3VgNRkFF3WaZa",
  "key48": "2QkgCag3ki9DoF7S8F4tZe5JTwNJ48Lsq6PbBmt5xbxNG8zco9cYsUBSJKeDHD4kiEx3Lohx4bQYotXUEzzemBNf"
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
