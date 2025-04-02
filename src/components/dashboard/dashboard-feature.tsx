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
    "5kSf6336rYsEzQ5iCJE9QmxXh98L9NHp2GpLxYxjNAUxMM85c6z4QYpjKWeWT6ZkmuMWzUA3MEjRu5822eUsq9jE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vPwmpDuqGUzxPBEysPDo4EuaUVn8B4mvCkHpm96NNVLnCSq1ZH4ut4GEy1qWMYhAYrD6WVS1imFzSgkDF4vmdjR",
  "key1": "29d4dXUYwU2nr8ezVDPFNeELQetLyGSGJqagDngpRz5iyHjDaaRhjwitHRgv6UYMWiW1wTcD1XZuiFbFTQ9U1dNJ",
  "key2": "3Kk5wvn8UfdAzHb43ZSAV4uByUnw3Qa3KuTCTYefsXDin1h2S2CLwRdjhUuUBaXSkpUrg2RqsfsgJ8Zp3XYRXVL6",
  "key3": "4r6zsA75wekRK92mYB7CBEAcsmUQZdHzjQGo4hdTPruSuWCAquhiY3RiDt9Ye6cm6WimeG7LvkNKe4WGbVamrgQS",
  "key4": "1VzFHhW9vjDZVf8NATLrdb55fKuUSutYBvt6DqJiY7k3NzMiLvbieTQR6iDLVMqbsXyRjGe9HkqDapt2EQjbNTE",
  "key5": "5Xs7ND4hHJjA2WMPXjz8jHQQmWWmnVP6KLN42RT1cqq6vjXcaA3WxZwoxeBEivGDhGRhKJRpSLPMMTj1TuYH914C",
  "key6": "2g7N9ZdWYdCFtUFR6ZvEsNW4FyQ63A29JBtSPJA41ftm331kXcSboDBjbcKUjoBgucJUnxaf8G33zcHDW8pwHwDB",
  "key7": "64krv6Phoi3FnW2hSmjKHeL2PiNTSzJ4QziR98g1GWpZp6MBD6gb7yVty8zskV9vywEEBF5vHLaz4jyoaT8W7N79",
  "key8": "FmZcaBxpDL5Yn9aegVd4mV6ZWf8gvQikoVS8YoJpkpFW9j647mAnnPrinQUFnWCVJJiHBz5Wfcir8ttXaFcgcd3",
  "key9": "3kgZCTa12BFAVAUE9P47Zv22vGXZ8dhwB22hr1PESfQ45aSrNxZTnNLKqxDBGY7M8a1F9TnqR6RUQr8UNSttbPn",
  "key10": "3KagDubZzEcjLFC6wHXyieATw9nfxMVPUHwwoatUDwn5rs2usmKo7FoKD1R4CTGhXttYa1Np1ABcQrXbCXY1GgBn",
  "key11": "5EqUmdF7mhNz9aLPXC2Tkf2c6zorKz437n8SjKUAdb3qptTnQdcxi2UME8a2bswWQVBtRWqiJSK9xwMewKo6U8HJ",
  "key12": "56pDcauyCftin74qGAwkaQ8XDreEVGbEcnHuJ7gGLjwiGim93t7n7DemxDK2yfwPkbiaQkhHHk81RdqoYLJzWUBX",
  "key13": "2bkWGCzPSjxk6uGMBMg1xNMExwN8JvhXS9Y6wEf9i6rqZiAdtBieM1DqF9Meb1yu7NaCjYBHpbkUD5MqgQocSAhY",
  "key14": "5N8kZ9X14hE4FhT2c7WfWkjjNUfjJisux4aWSnqJWrxzAV65UAHGU7WxxywtYkwtGu5mGsK6n98EL2S6kejwGVRP",
  "key15": "3vhFL1mdU7GsBY6s6X7zh6xQ3kAzta7s3CmCJ2KjhHRGCgtC52kdawBHx97P22Ee5UyTVU1R7bEzQvfarYNY5YVj",
  "key16": "3qX69XZet2dfEtEiG6fRmiTM7ZYEBheZDyq2br9GPayYnGuKwZbm2iw6xh1jukAdT9GGDwAAFQG31FkQdNUmjwX4",
  "key17": "ksGamVAD694owcWZSMDEASPjnpzd4WuxaQqDbS6HEwWcpSynirDugWmdcc2kxHnmMMr5fxfea3nA1GfTeTpb19W",
  "key18": "34HtdZH6gzyrtTRFcSuJwCsFjEgvQDy4yvbpcWaQPjuxVbCPpkqCbrA92exLbWGktvWndg19VNYChcoBNe4GH9By",
  "key19": "GdzfDcf4yYaRZdqqkvFq4xoHT9p3X4m9zfUAePzBxXpizydkyQe4j6ioxxmtCw4YbisQVq86Sq7h23f1jhxv2EV",
  "key20": "3sRFarZHNe87uU8mPWGbbp5RWP4uQMyrUPRxiAbhChKNxdfivKDZ2eYCnYsJPwuqZ7ujHZYnf1vCAbdy4eUvk3CQ",
  "key21": "24fH4wHkYk4v7VYHeBy6MjRR1Hf512uUHdzYoJXaQ6vD2FS1Hb7v7XSKqS8eQ5iKHJyigUz4iFDNLBTsuKUR4wa8",
  "key22": "5RgkPsWS5FJwFyh2Ezjkiomtqxv3CZM5WYHDpsVRHU8zQiLJPUGkfTUeWoDGLYBLKQ2MUpN48Wu3qSBrTCgNgTaz",
  "key23": "3niBFEbUxKsV3qLiReLUDdmScGbBtBHzt1DjpvqhekGNNENNUPBwYUaoWiwFfrNE4Y9e2t9NFEPC2opHu8cmK157",
  "key24": "3GWKWq6BtT6NTPHw3GU4NDX6M8ZF2cSVNuZEMbPDZvc4gq1R51HUFLv5uAVfeyn33kMN3saL2cH8LjD63aCb4284",
  "key25": "448o8H6ot2vyUotzDpPX8QMm7GESPcGU8iwZ9KoRLyLB4HXaV2i71HAinQe8T6GudX9bhCLUF6MkzNBgUH8y71m2",
  "key26": "3dDhcUEav7PS6hPEgwgcGjSxA5jLGcTEKWAZ5DyudhnM7fAuCSAXPmRy27CeBMZ1Ej1xoCtZN1P85Gb6VRNp428c",
  "key27": "h41Jd7Gn7saXhS9WV4yLZpSzfbymQVXuJby9nhbVAGjgjpeB4NE5gkyF2XZr3yeUb1ndfuB3A2onZtMgBTZ2zSv"
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
