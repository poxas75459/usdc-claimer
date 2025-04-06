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
    "iQngcQjZnrT7gGbMHJMV1LmWFqgLpNgBf6MDbSRDLXjKTpU3RLnwKMRNmeo7p5vmFN2Acz24jEfvJgEyD8Fj6xF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kSsdhkoCBXWdswdBmLUxWFjZodArae9tgtnHnwmc94GgQdK4HPw14FCe19QAtxQyM4f9GzghSW1tpEwF1uMZpht",
  "key1": "59YTHVu4siX5dAgc4VYgXhADdfk4RLPweCuKJ4PQcqZJMPA6GZBT3s9jL5wjggLXZcryYifmt26nuL8cmq4P96QM",
  "key2": "4Bw1XLCXAcNMszCd4SDkXSBpsQ3xS8TqeQZrxAxTDKknxxA1Mp4qSpNibjfKemePftYaNZFBtvnZd2Pwz6yhiFdJ",
  "key3": "bBddoWV2d2zBJCZa7pg7FLMc5KvLBdQW8sJ5ixYr9sn5xRyaqNWQDmiRXw3oMdPYcZKqFWmZkjZ5W6MqKK4aeFW",
  "key4": "2w4g669tKR1BPFbmsn8wuCRnUtAiUze9an3FC4DB2f2AFfzWMvog17ZmX1ZeVdmP9n8LajorTxVNCkEcWJWdqyN9",
  "key5": "J8UnSvqCHBufAtNqTDA9DnTgqp26Y8JDNPDPfx3SfXvHw6mLshMFijWFTEHuiFLkvXGY6MUWBdXmtCPHYDHp8bJ",
  "key6": "DRWtoApaR9aXXNpS4ncfob2gT1KH8cGA8X6mLTPphNSEktGn4AdmFGMXwhywDc2TXM5vBtKqckqH7timhGhKbRQ",
  "key7": "28H7N1xUxfHUKkWmBFHdom4YrHPXPGqG9K97ej6KsXNZZkWcTsf1WFoW7ceaUnUqzzVYqVc9LCSnvZ1HxvBS8eUG",
  "key8": "38TJ9C29z8W6afGMA9t4iS47Y3Mpr46xAKsgNoWJp97x2RvgRGX2N521M4g9N9VD3S8bTHVp41ESLux23KcpZkF1",
  "key9": "BEinK8N98gBEDgzqTS2qZ7cC6E9PBHGYz33Bc27aFtMwJeY97bnzMgbBXcJePow2Eq1ixUxND3EjBbQVcKxqcj6",
  "key10": "pgy1VmNvwEQe2LnKB9cMYsovUYyfHUzTqD1bWU1mmW6ehNj6Ca1LMR5DvN326aADCHKaQPmj91rTriNggVzFFD7",
  "key11": "2TrD2sdT3XTZ3EW6XVxz374udGH9iMxKoLw8v5Wrf8oSJFkPmz2VpTXrvfKYfaZwCSns8xMEkiKmLEN1mjtftkkR",
  "key12": "4iX2qhYeY3uTaeCPBZ4RJg8nKtFkNYYrGSVdNPKF2LBfWvKXfScEsjw956UxrWdZtUpNug19MqbDzhwsZc9P9wER",
  "key13": "5kKPFmS7m6hSquGBdN54RynoCyp2uq8BHtSCHkoFRRf67gphmZNUa1Y7wy3kBbXJDEPrUQRSBsqKDGbhReeGBZvw",
  "key14": "cqPoiKNmfqr6oaYTt4FAj5BP34Tw7WoDxP2XLm6ZXauC2KGTVL8kb6WDtiUskvhT3TD8SwxVi6R9M4Wth3kgDst",
  "key15": "24RcxnZXtwKwhyHAFD1kCpxyC85uoRNC5tk2XEyQZu2c4K5NZwLqFwW5kbH6xqjd47kN8mJK6WWmAJFQcFQVWCwr",
  "key16": "5mAQQ136R63cHPgaEqAbg3s3a7zemrU7YtPYFZDTWMNbu3gzZE9rqrpLDXURno43mwp8Z8vGfuVq9rPqnVgHeub",
  "key17": "5aK7SyiYkWvpTRrgYPussujEurrXE9JiHdK5TvRcKJMxcA2T8QdeehQBL3JMsCuZqPKYNEymMEWaJZV4XzdYkJLZ",
  "key18": "3uRJC7QKUDeWxQLnQ1FBcqjBbnzjwFvuEkeMj2mDS72YMUW7kKzbYTudRwvBfb6cT2T86s5t8hS8o3BQoeFKYE5L",
  "key19": "5RRdjDrF5k3fyxvKf3KHHhCvthJvaYkCMVWxA2bYnWLgv1uXDABZvcAuk8aogWJyvb5DM6F3BkSoGA7Vmtz94spd",
  "key20": "Z8Lc3NiviNQTK9HRbJQLqPCatjtV6pjhVvMjUGYASVwUsVvrccPFKdqLkV4BzcRbgNN4SaxMWdE8vyiihBdxRpm",
  "key21": "2HikNJAP2eeM1bUfS3tbiJYRWkssK6hh1pTh4GtW9gWZvbuBYvUkRZbqzQZLcPfkZTbu6y3fYF4AzBNxuQKFnrjg",
  "key22": "3BsdqpsABhC9fUfcRDjBx7L5QGVZaqPxEuX87QfRMs2XYsiuBW4qek6K4mRPvA8g6BdPqkue42mHg1yUaZCEiN9K",
  "key23": "2aE7eGNgSFJrHAoBXrmjr5FKKxCoMfq4EYwBJrkcwQWAaynL44CzHzfML7Wuj2AxZUqPSD5oPCHmdVDctZBUjtvz",
  "key24": "2nq4ytpoF7wKsz7iJ6dGJAVDnNYLiLrkc7dUArLEU6xr4kB5XF5fBjiGMEzN76JHxTYfeWWdjW7wy3RXQTpcAU3v",
  "key25": "267FiHAAAKS4Dh5RuYgiwx2BaXakAg19AmTZ5avMhZwXhSDgBUQJoQiKLdbhp1dTxeSWRX9n7DPTD9YD5YzsVMsq",
  "key26": "1YxSwVmYrWd4uudYGXaTEnnmSt2mQP3hGL7pUcjYqDEM7YxswZGJnQBzhLEj8ouPfAwddvh7BiHuDqem4dx31Tt",
  "key27": "4W9VRUsPPHQWEHW3kP2v3T1X2T7aoaSofxvBMtwDZ23v7dAvrYVASXiH56cvhvna99MgZosb7WibkFUahcqZea5d",
  "key28": "5obN93g2T4A6ioW3bKV5WnKEQNQW9UtEjJvsj3v8VawBPof5s5r55kyncrsbUKttM7erT78rPuGuhvUdsBdxPECK",
  "key29": "5JfsNra5HX8rRU2ox637eFamDc8HmCDeEzpsSUjpRoZW3egffzSzbg1PPMJRz3wcxq1QNAgoviPye9nSp4G4asv7",
  "key30": "2Ckx7sdoajTvtqDBKtPUYQQb1X9LfA7xZRA9hr2paQi17XsASfEnh5LSXJG1FnUfHRBYRF5637Va7e7xsF1L9hGF",
  "key31": "4ipNxyFGryxJes27qihz49fvTma1nYUBZfoo7m4HtVvNHunPDphHQhKhcesLqDs9xdkh7F5xmHEZAywosknsF4hD",
  "key32": "EAoxWvdUht8JHA67N5Vu3eUiUmKotocEZoxhi3TLLxZ9hBpVrhRBoTDWR9TMNFLgQn4Zd71ST38TJnB9Ej99BVv",
  "key33": "Dmew1D9g91sskiSuaFC2RtrbuhCrnuexpBTPAZGDZTFbHQYuD3M7erkET98EvbhNtp6s3nXCkgw4qPa2TgAgjUR",
  "key34": "2mtxaK3rGaahv5KFKkUnR3VPBowfhwTbFQnM1zsRT9H8DH8knKCthGbwjXS94n4PBSiboiKeF6fUbSMtY8QYVJmK",
  "key35": "4dRTbVuqLUEaYvecNuut55YHHt37y7eowZF6aY3XBcJVifEqkb3LftwdKCgVVdjQaun1E2Keybmrww9Vfd9JHHAt",
  "key36": "2hKVTBiRoBn57YQkWE7R3vhbJzFeLxyoFNDEoUcsYh9TpwzF1s4zxGnZed3EMysNBV16xRamvxM7xFXJcDq1Jth6",
  "key37": "4xXk8ggh9CQSRFxEHa9YMYSEVTgKHrtuTUzst7PYMHZbqLFST68hwXFuXK2Qw28WtfsLBNG6STXMeN3KQtLWuLp2",
  "key38": "AJUH8rkkGAixVo638ZwzUxQ86kpnxBFW8yUfJyLzNVe2hSqxKm4Vn3WnADjrA8sDJJEvBojPNXWDvCCStwEQ2Qr",
  "key39": "2aPYrNdvEGVjybguyhyjkSQ8q6p221nCnCQRbRVmKtrUtUTxEnRexuzaSGGPXREg45HM1NJHZE8oZj4r7g2rnTza",
  "key40": "5jh88H8oLWPaUKQBbjHsMdZv5gfvftqMoCPASxrCX2cpmEKJZPvWRvuH83AmpxcRbyWzHBG3zLZYF8rDQgdHWoGM"
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
