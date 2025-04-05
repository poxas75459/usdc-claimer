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
    "3s13KVWZt6j1W7w6qq67rBvmhWT3uZEGB4ypYY9iF92kMrts14mcFndFYi5P9sphRLVG31HY9jXqsHx9bXvhes8H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FcCCnazNGtZrr3cWAnS3byhSrg9nT2WiYxRje3nkkWW6MYsfH8gLfhccQBXafUuY2bqu4r4op23xzbJY4evUa1n",
  "key1": "2TE58nF1kUVkbb2LsjyFHx6pQY9R4ZYQWAiitj7s6j8DvrAaySrPVrkJxd27KB62DXx5ZmhLcsC6yC2X9qpyriSn",
  "key2": "3FiM1k7Ht6vS5mBxWKcYw1FtxkLzT6i6mnVFhm8F555erAjC296X9F1Y1QNk9zYHbTgGTpgbTkkCSvc2qHwjvsbC",
  "key3": "2CbL7TkJPyFaXLWXoMR75apXJ77pDjAwnFnqeQ7Zfh61Yq8nG4eDEDcPyS4jz8FbNWqJHPtxCpxiLnYxcaCJvRzd",
  "key4": "34L2wH9HFxpUzcu14oK8Yd9NvLzYytmHuFD5jSSseVa3yzHsbRZCatRTsooUV8BrMwLd2NsKDGnBm3txAXXzrWhs",
  "key5": "38KH4qrUyWiKaLdgWHXL3zEVDRDRT7FiQmxJt9jtMhEWhN62twTe9qvWQsNToj8XXp72Pe1TkhZUa3XdEmGv4bji",
  "key6": "2FJMKY4AAsxVyVJDTP16DS4NDzVZxtDGFdqioKKVnNhdVSGyhsqwQyTNoapf6mRRGckMYoqz2jEUz9jN3grMB4rK",
  "key7": "2aWp3vabSanXsTsNLWzkPr4STh4q4dEbatJTZKtbBhJfFx75vm2tL8zZmUDWMfvGTD7YNg2GUffRcvpNMp8VpSb",
  "key8": "2VwYdyshpuHcdZbtsrwRwwtqk4oX6bePqZR4zKi7pQcvESqveBMsksD8pEobtBSpN8cWLG7PBao5XejKhC9xwDWW",
  "key9": "vxxmqaVzAovwwrarZNjvMNfZ5HYeZK7Dmqdi4TMU1GgBU3QyAyBGFHkSFgSqfrnq7EddtYPjYtEneob4J89vLWy",
  "key10": "32J1JSkgGGkrq6PohhhJ9ESEu9FawTq3paBMkvN8wLbHQDfQChEacns2o2Qx3qfCZjyUxTS16h2adQW6KgVhdvJQ",
  "key11": "2xU5CyJw2ckEvWh5v81X31XpGPsfkfgpQTNosD9FYBcN7wv4cbFmTddmnPeNgApk52TZWrmt6KoEYuSsoLp7YSDz",
  "key12": "63JSkuSDkfPrkvgeueJTL3BkC2GG43cxRGVcNUfEBRvH2k1Um4qrzCnms1RDwZQCewwDfkYZXnxMMsch7vsEpZxh",
  "key13": "2XTSChVVu5bVe37TRLrtgwhAwVuAaGT8bcvsA7RkTUuWamDGGjuFTgBVfK9j6N4HGtRyaQUygRAWu5cHnvvFfyEC",
  "key14": "53znzBPucTedQEz1Qsay6YPWjNQ577KVaVikhn5gLLXiHMycXLhidsAnwgQVk7FzvHd2tKxpubPjLrdnebgLpiAK",
  "key15": "4gEpYGmGoCw1DYoTCF6bb7poM466p7k5MUeJWDj4sbAxhAKBYixvMSmU7ZuLshheysvphnNoJwQEXYDTDeXPFM5R",
  "key16": "2TnipCug2fzC9Y81p27zPs4sZtkqiF81tcRofiuosMLyfysU6uCvLGpRWK6uTFtg7GxAaMQUCQzCYLsgEEHXTNeW",
  "key17": "5fTgayjV9SbRNN3ejXYrjuPNvtiCZRe4wzskZeWg3zkRhrJuBuvZD8jdJ3h79RbJk7c6Q7qyVXVX2LCm24JPrAq4",
  "key18": "Cx9iNCg5NDj6du9j1kRPuTEUeHWn8HF6jpQEi9ucaQ9qugJZjEPJz9nUYJLaTVm9Hyzb4ddGS3sBdseUzNY4qmH",
  "key19": "35GRVmq1RzkDWsthBz1BJzS1rSSFEmkjzyMh8qvZt6wyLa8MShTABqNtd1c8juHUozKJpo2TSPXoFFppct5N1Vbu",
  "key20": "2ah42W6omo5ctw7U7MJKv1EBvAdMcDfxda3gKtGdEC4wXGvcCDbHBsJ4zSXVpPftysLEniAXV34E99fhmpZuSPcS",
  "key21": "57CANajQACaZdbDmFKmzjgfNSU9UwLutvW88S6Pd3CmbfTJJRanrFT33ZP29Dv7ZV76tXAhy2EVsXx5ASv2gFJEa",
  "key22": "xCpCxPb8bJBEE5LKVjSCvp5espBkb86mELypFCr4rm6Aojt5rHnCvhVnTsawoQyagbF7hRmrmR4XhN8Zip2ZSbD",
  "key23": "5LDntTzcnuLeP6av7HbPg48etQUKAdksH9UkHg6H7saEFwkSxtmFM7PKUcnHYEhto7P9qJz8o64EqiWojcaVtmmZ",
  "key24": "4Nm3cXyx4f4dYPKBphxY12VdXjiAS4FEdiu5gGS7cnawZRbSbh7gKJt8VZGM9G8u62cHqFQy6Qd4FiiE4k5298xy",
  "key25": "4XfTqHG1f5j2KVRVQRNMmSnickM9XAaG5QGe7R1kShYN3wyy8PTvWKLZx5fTTareCxF1kSu3QorsLomWVp1qfoZj",
  "key26": "4JPtVyPYJhDFTNN7ATgjzjMZkzZwv8gQdVTiFXhK5H67tdd228CnkthwiHEfwuLAxGM15s6yBxM4fEZ3rEzpoKY5"
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
