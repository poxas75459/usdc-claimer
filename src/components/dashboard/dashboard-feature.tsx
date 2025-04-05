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
    "MdtkfXGaHADQn8YXfwJKf1EkrQxdzdBBGWGjp9TEEKfeLuTAU7RPrxxqgaKb8k9vyuMr1c1zWh3zxT71TGqvy2N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51uTFc2eyNYcYFPPaNHuxUh8nmffNKFjpRL9NRr4ju5LATWsnDV5H6SxVjHag7JQeEmnEeGhFevszbK5VvxNCNcN",
  "key1": "5z8oaPu9i3RPEugiKNRtYbGUakoLL8HLFLzv56yAa1mToHiZBppkr1ksDmZEj5jCs2cPcYJ4fyJJ8GwqhhmtQ12W",
  "key2": "4aNQ52US111L8Fux2bnkTXiieL2iMWThAQr2NXApooPxxKbfhtSsJFmDjvuupAyQCyACdGbs3mzH4FzH41WURPLz",
  "key3": "64n21LFG93GQDVij32RNsBFvrWM3CyZJmCxGWmSYqRLDJyMxRhgZF9DQNiiHKj97VFtwix2irZnkWY21wS6FwpMb",
  "key4": "S4NGTDYcrBzigSeZdXVHfaxBMvmaQcJWgBsC5rkS767NUbzquEhqShUZdTQBipREEEGEKBybbfYX7nHZNHwyqTG",
  "key5": "aEqfsGqiKLNGMcuyiEaPjjxgw78u7GHaaCJYrq498TFqi3QLXB3fs1HJGEuH73w8sSP6yofJRHgZYmUZh8ds7GM",
  "key6": "t93mpVFSmGuZKuksMjVGu6whiPQnmyBPoscLT8TZ1JAPP7Mnd8hdpQs7YCDJitRPgZdCcjzjFGYY1yMbu5qEX5x",
  "key7": "tQX3v8Kd74g8ioY9GCYAS5m9kKewDwn86fXwQYmpUsYQrPtxX6xHaYiCSSQ9tLAvSrQysTdGbu1iVSzbj1BzkBs",
  "key8": "3wyxzUR1dYdhQqk4qouRvcs3ZPuCLCUbeaKwkJWfLG29Pgs2ETvBAxwJ61tbADkAyVwzegiBJWbfgHJM3kQVDxZx",
  "key9": "2jdfK2zJYFwdeJGhdCQq2FBckH1mZJqrjLvEYzzRe9F6nFAQyNw3RKZGss1qY9GBVRmhXgQkoURXC6oveJ4KGnoR",
  "key10": "4tZx7DZbEQD48nD9cmSvWx8dYkwLPYGajxre8QVSEiVjRDPUCpPboeAXZquGUDDL7b6zKSoQycPbF6zYy7B2e3rK",
  "key11": "5oYcmPaQwJWwi6RbNWhqKy7b6j8fNg5EuJRvQPzdzTqzUZHx1pxE9mTZg5DkkDrmpgvFPymBdJi9jGWqYdqPbwJB",
  "key12": "V3niJCosJWbGv6LULvBudoUAEVQePvePxkZsmvz3tMQBJR1xGKjzaKKa8hr5DwGkAU46PBr8JNY4S11DmQt5jMF",
  "key13": "3nLEVc4z7wrRz21bzxprwfPDifp7DQn1CyKpimMYGBZ9TRPr9UqXoCcHPScTg5ejoy2TRimBuYA4Ad4ekdp1zzwo",
  "key14": "3jUN2Awq7qAmRtFdnpYxe5YJnHQfsUYEm8y5W9cuvNMMNrogLpLcYRtcrBw1gZU7hBHzYU7Sk9zKaRHwTHFz1x4q",
  "key15": "3e1pEu7yVcULRW37EBCyioDrtJRBXf1Uk6EkUmN7oZ9gu393asQXm1xztB5MoEXyD32KKv41sotyyn31gWaRxWCC",
  "key16": "iqRTvya9X7NvKLnYQP4mDCFjyi4SZYENGppZgsRxKc1owgD7F2rmt55QmcLfVvp9Hi8Xc5YDagjVYZw5fCde67J",
  "key17": "59vPLJzGNUtkBH3vnkMwqYXVkNStqJwuVbT8x7q9vGUoowogzX4CuPg8556wcpPp9oih9Zb6kxEoVmQuRoo8omGz",
  "key18": "nwavNS8Y885ReXATiViV1VvhcjEmAz5BVXMJigeQ2earPHvSMuSqcHLNXsQ6VHpv6WoQDD9TDyvTM7FrEzRZwAw",
  "key19": "5ZScBUh2NtVQ67mZ1FsDHyUH4c66weuZH7ChRNqv9fXhJtGeP89XMz7hmsydmTAQZPpEGMwJ4BcoorFYNKsopKhp",
  "key20": "4b9rdAZRuTLE6RXyA8d1YkJ5Rb8BAStNKrkFwgNGrJprBMEkh4WW7KV4jxPfHsY8NeFPDzYWtr4PWLumrafb9jvY",
  "key21": "57RNcahQVLucUgecn3uYkpKY2tLoq6ZMAG3UoxZuqjqHhyVD6pRmCMrDJqnXFqERoGRDf9KFXm3cfcg3wpbBTLWt",
  "key22": "63NKj2SJzf4u9t3FFfEsDqspRjVLv2ZHnBnFtCETVmTM7o5wSKn2o4LkVRCcivgQqK1GwaQpmowokjJCPmFSwNfV",
  "key23": "5DCcFmLRmWizNCTQNohWvZsyyuTpMQw6gQyhrrabf4d6bPc8Rj4a7Srnp7MAKEARdLkdsmYHLffds8qoycmX2Ncs",
  "key24": "AQnn1CANymbwgK5FMk6LUZEWPBx9u416DLDF36ksjvxpzUUdQ24ygnsAxgA71HMY8gSFk7g8p9XxpoNyPdh3khy",
  "key25": "5aPDP9wKLn7LHQ1YzHGvqnhk7xs5E71rMLnv8ihAhhQsH3RmWpELzwgy2vBhPctUzrWc2wm7NkusKMfF7mxuaDKp",
  "key26": "3cJfAadXPHJcsa3CD8jg8Vk31TjemFV2EHWzrg5Bv7hypzAfCAzo14WfgYT5GAHSZ27eiYm9CYesPSiRWiHVtYjB",
  "key27": "2nZCgtr8zwohn4LS3AEWqnTpXrqcfBVgjntsT6imUhT5x4kQ3aZT3t6rRVnx2B1n75bxiXKNj8Gre5A92gSLmBYa",
  "key28": "5MpckjmssALUgozXbqc7aWkybN2xS3diJCwN14UaUPjJdWjrmz5fhdbnZihcRJ1YyxjKKcrPVaD67g2TkC6yrN6K",
  "key29": "3mtAFXTAFDR7H6WssNVgdaS7pv1bA6pcM41ANPXRtN6WDjreTRuhcFp6Dxn2vmXBPNVWQ3ZQ8us5Rxpx9UZfQFcP",
  "key30": "s8TDr5FH3y6ABLQoyC4SghTmdST5DjphiBU6rGbBr4NXY9agkuPYoCUoBtnnuvJUEWzFbVhewsf4XsCcyqFJza7",
  "key31": "2dYnAoUBnhyCmbj1DMosGq1nJDXaTYLVAVmbKzbYm1BwnCZN8ePPSAWC41L4db5GsbMDnKN3vhCFpTPohi6VWWFD",
  "key32": "67WVEo6WHK493tHX4D87EEzKcwtUhao8rDa8e6XD1sQtrobQzzA55vimK8RY1yhFpipQDZwaBf8g2McmPnc32WvK"
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
