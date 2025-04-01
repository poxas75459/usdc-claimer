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
    "2E4P7zhuMeUigbkBszyhqmy8s7uTRQ1qHWzLitpvtQr5Dp21G8GuMFi54VfeLUPzMZzPArU7pkMjn8ATfW1ajtA2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SwDHS8Hr1nw3BUJniaksymkBTBuuDD94k1Szamw2xCSeDNKXVLp2gz9UHHJ1PJTU83BEmmhngLL9tFKmjyTh1rP",
  "key1": "3hJ5xD3FedVhWhuZ6TLCNzyf3xPhD4YH8aWb6YqJa8ujA8vL4jjs1HijNnD5zYnWveTFLK34zh7MHEbmWpWyjgxz",
  "key2": "35f4gy1uu9toPU9YudwmzCrs3NdbW2mHFgz6ZjkkdxjQyTJtcXRYGDD4cnqKS8S9sKJerpPsDqtgB4w22ThCVc7A",
  "key3": "5A2dsi851por8PHnTCUm5hRMVhso8tv3HLA382feEtyRiMkJ7uf8uF8QC8x4TkWLK97Hq7aBorn9bmKsFzBp7TY1",
  "key4": "yv6D3YM9s4Vj35TxsrEs4bs4xVRSELx1kiEhLLohs8aTf9A5YsodvZ9Z5BHan7AuvfaHZ9U2hRYVAztDuzTJrFn",
  "key5": "4wGJpLC5pVJpbj6tubz8YDPwQ8uKrxQzbE3bp2LVm5n6nKagT9ihnzuqrqrNW8sHtRbbnh6e5eziAQFsPzqg2LXV",
  "key6": "3uVM7BMfseh6bKVnC4BL9pzjnUfg12q7CrsYWeHnFBRNUQDZz2YXG5yyAFdugEU78XJS5DG7FiZW5K4J5ach14sd",
  "key7": "2bLeWWvP45rwvNc8jRHUZz4xw1pgyC2dFda4yikbXKvU9k5kEnj66yhjAvDCoxBveqA6BYuvgmN68UKRTezeHpqJ",
  "key8": "2jZfzBW6gTfc8fp3XWFtzUhqcBB7iQWwkRgoTyoJawdoX5NjmAzjjHt49AJfy9GGRRNXAtp1TafUPSk88k3P6pv7",
  "key9": "2MMLDJk6G19aWEA2pSzM4tTsN1XbASZBfiQaehfTPFMcLrjbvdV32rSM3tHWbhax8RUUD1rTNSjgiB9J4w4UtCof",
  "key10": "4823D6VaVU8tLkZhgKD8SeQbMu6hkVu6H9FYwDWFMB69BzYcgbvbTKGs44zDSHRNa7ZtACa7cAHwj8nzTf4KRiQp",
  "key11": "5ESEZ8qz2ajLAL2h6jipXb4Mx2wnTuLt31yuHDXYqzdPwVanXP2v16rSfPmchfqgDcEcByMobRcujSLm5MQw6HKp",
  "key12": "4ig6KTLDqFHMbRP1rnsYQipkshRwgbofgK4EvTcmfLi2H9ggPA8xUgC9zJYjX6vg8gJwxNbi7GJZ6tPxi7r8K7QL",
  "key13": "3nDG8tvRYBaKHtELpAMTkMm6qv27K5Frw662a9GpAm31pkQmPRChFd9sDrTHqs7mMkjGEqYb3PS989s6JGf1UfTc",
  "key14": "39sPmZjTq2Z861Jk8GPoQUh7Rpo6Jkzr7Y6KTsgF6rfHTh5jdf2B4yV2hSqRkbvAK2UVAXHEs3w4zzWUDQJS4ak4",
  "key15": "4c8oK2X12DuzBQFvqYZpS6BMs3UEiPKpjTHbAPaEnaUKUWoSy2SUq8CU51YhZFBypJib8FD7jBKvAicckqnNzCjn",
  "key16": "3vHgTNme45QK7qNAkSn9ZEBSUHhcdCwrpaa6qqdMpfnFSmGovpnWEUzr8xVkdJgfsQJTJF2qxkiiFLKzrZcuiWZy",
  "key17": "51sLGcQJnaEdvBcd9LmJ9kCyaXrE5MeLMHLaovgb5YetCWXS8GM7e13gubxJzbv8Nkh9TJsgkgUPb99FMw7QtZ7r",
  "key18": "2pR6afjPHznn2E9kuTnnLka1aSHi72vtyWwgndrcbrKmufaGkH7PgQ5ihJ7BtEcdMaoc8pMWghDcoYXPAx1ZPX6b",
  "key19": "2M7XHuE4cjYF7PDJmmVYBXiES7tiNsWf31S9AKyAGE7B8QVR71PgqUZaVth3wkhd4RCJsfMB67fj8ZKZhsWCr8di",
  "key20": "4dkwutoCDyjtZ637u8QyDUdwyaYYDtxmLZgRVpEUuAnuq6Yu6vTP2hm1PKUHRMuNiJLJsVFp6Ee2EKj8pXUw9aLr",
  "key21": "2h8ZXdP7xx8CyyQ6dYzN7b1VErTxcuPuyXAgCACAsksXTeBC9QG8cUC385WL6XfJrx6iKYo73kLe7n6DN9UfHcLZ",
  "key22": "379Bf3rjaAu8XG6xrQXBNbVPhgxKrbYF4e5vGMhGXk14q8KrVG7PFA6Nrq8NAbnYZTAB2XDeb5snkM9dNGW2ENex",
  "key23": "dBPm6zn5MwT3gXQSzPEaFu6XauLeypZUqcYX5uoi4bXmbEtybVrqcod6ACbdBDhLhNLP4omJJ2yvxtqFCfiaTvH",
  "key24": "3Smoci4ybPtMNWNB2vnvPAEPFUM8fDiiPqRsQisMkWE2sDVwCXb6mynyzpkmPdS2Xs3r3MxXrAmzc7MBtcJTAYaZ",
  "key25": "4phjuRY4jCqH1qaoiFahtHmvQpDtmXs8zc57yLPRMgXF3wa5GooRKRcv8YZ7S8V6HDLqeXSWwYtTVEgJ4usdMMHE",
  "key26": "2xNzrCXCCpcWfZBN9UcQMq49wsHn95aboYkKLUQmGgky6ytv6mniwtUqk7o2V5o4pjeey5nZSZdhAmRqPtT9PJqi",
  "key27": "NkUPD2Git4kc32kaFPZq58nfBJhyiPUCJgCQLQy97CKTBNv1yqiTvNdPcxfeMLRtGRHknyRkvb2Wx5EPnekubZg",
  "key28": "5tTxsy6cKoLCrMBvWieAQC1axJNvbo42rSvevuhWiU8CJZU9kVTyNNLqmhQfAm9XR9xW14XUzLq7jfoRrreLn3V9",
  "key29": "65ZZBdrZS5eznF14LczxpyFrWUnQV4zZjaCCJUh9wNL6Q4WZVryRvueyn2X3HyqnjyZUgoVdbHti3UuHSRYeJ596",
  "key30": "WgzH9fGxXcPBFT6LfQJXBuGRN6ACMzU3CekZrL8dofoSV1gijfo9X9Q68ur9xUywU2E5UFKLYpm4hpKx6TLa5TB",
  "key31": "3ioLDgNce58SEaNugGxQmVBt7t1zaT6HRc5v9StSomJ9oRqgM8NgLLp3wERwKeHaHF5v1hi8RRMHKr92fPYg8La9",
  "key32": "5ngqZSrsJmPq3Xs2uzeqYoLZMFmcxT3V9o49ix7GaBgxNGbt3UVTG5TLY8Yno99BhinqJBRGJLftX6VkfDddeQUU",
  "key33": "3GUd6mBnqNYNJVhyxAjTTKirYoEoycpifeq3evaK5oBrNVv1rJ3gsBLHL9NF2mAKQsWX2S9i7hFVY7XiXQc1EmhK"
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
