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
    "5pkeMDMDud8U6AB8yzZ1RGhmk6Wtexgckn3Vr4BdyTmokUy7Q7Vcn6uG6S5c4t88CJHPpmQEKHUx5NFxW1EqjoFM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QmFb2vAmRy2qThERztV8LdFjEjLCYbE4amrjraMH7LteNnjYKJ6HJzC88TV9XU5XW2cPfSsBtbr4WtHWDPw5HJc",
  "key1": "4ktnMNap73kRE9qMAtUPxPPCnAggW4YKPnjc7EZByBZ5MsdF44hfPXkmSwZjPQSYUBZjyZYRP9tDjYzSnpvZPfMN",
  "key2": "5rFxuitMnSVnJAyjYDk5sRSR1xUEgzBvkxzbUgvzvdAXYzVcsUMEns1w2nxNyjy41jQSfNgopjGYaYtviHEMvnWQ",
  "key3": "BjtSJkS6GUGEhoBjyAgKHKTByh3pJ3NG2igM8xFb4kN9pi2gY9F9seoMFWGX3TJEwFBJY65AnJ8BP1dbq9LzGUN",
  "key4": "2eWbvWHEVSfkZ1RYdavhVyHqGKDjwPr6Unq4LPQEiobb6rscu3CfuZYhSyZa94vXFYdWyUZGS46Jf5zuQSAFnvHJ",
  "key5": "HxQV5ecqURvADCEbwtdRrNBTDUEshwYjpJcGWEd8Hnjz6Q1SK21KyaL8fnXKbnKgEgpVECpDhP4KfPx1jYfhynt",
  "key6": "4bCoTNeDZTS5PwhaHw3qWFFYff13AWiEpnSBUeyuxx4Wf4iYM3ys1y3S3x4VAB2zvvRBD3P6ANZXwMuqX9ZTBYc",
  "key7": "47LAUjEmSuFRMHjAZuxqHoYBpDmTYVeoGuyJ7PreUvcFXGdmTA1f4ubRQLQi8tej5583kPp32XGBohLwAhv88nPf",
  "key8": "2FgyacBUNx9Aj1Ft95YGA4jJrw5bkfKtx9iwdgY8HaieMv7BeGn3h95uBKm7cFsAcTutTxJt3dnGtxAvFzXgyqXB",
  "key9": "28vfZfjuzSJ71MYNar6XAnSkTLvkwcctQXCHPmGqtqtHw6DsoVZyUgEnibH8tGNLqAmN3Lpg1PirsJQdooQJfCMv",
  "key10": "2g7vtDVrjA53XD2feZWMMzyhcjYJDJJQ1L3ETQPihyTKXrA7wPpLgy2Ci4kZj66uzvYL8S6dPZ38XtoCChKC1YHT",
  "key11": "5zhYWeXHpoRADeFDrUbuDTMR1vS44RTVv5WrakoBPXPCa4XD7veB4TfuXJ6TZAUvVXmcHTufDVNMCWCWwPuzBZNr",
  "key12": "2sPzoX4ZTVXuiC5dJgNKNGXgKQRkgnteuYrH8h4QfmZyuRvxyCm6ccRXfbX31Hfrutt1bK1uMQtmKu2DEQzGQtNC",
  "key13": "j4REVaT5gRJ1tUXdWnjZaBzEM8ALgQ7M3kGStMxSPtkLpnEegv8pmRqeGi7NsLWpztCSMWmc9j99ioRJ7aZpbTu",
  "key14": "2MtTz5uzr1oj9J3qrBDN4M1CvkPVB6z1Chkxcn5YyJ92kkivmWBemsfkADDYduUryNnLiWjiD2rAvtTKuShT86HM",
  "key15": "5kA6UvGxeyi9t5mY7AA1PthAivgUydJMC4E76aniaUnfSoaeaFpNBYHtVFiVfXs9Ft3uds1N8yiHbv2BEeBS5x4n",
  "key16": "64J29bod4AMtGnSmaxcRWgJraTmeaqvCVuRBL9HQvwEXEzCzTsXgWL8XjsiebSetUKMsyqPq9b4GJzYN3oys34AL",
  "key17": "EgS5fvpY3rKtcsXhNLQeQJ4U2W7FoWBut74RA4YuD1wonyfyPYPqWDYo5w5gGdbGbUcK29de15K1yvgFR1z4d4X",
  "key18": "5VzabnaJykeynUt9Q1sTVZRoQCUdDAH14zCbwvS822rJMirDYbiEDarXsC2xeVsXPRCmkiSNgfcHFPqxTeEjr4gd",
  "key19": "4KoF7t4e9rHMnapC91UiMWNezhgdfPhbnfhkqanJXQdaUoq3Fy27UtMU31U2xjQ63iUUKRJDq2aR6yyMQWryrCmA",
  "key20": "4rHH3dAPAXzZuyikDrPvAaZk5aaitL5wX52scyk7upBpxFcaTASc3g8r9TnmhyQcwYGxF3teqM7YkqJxu8pX6Jo",
  "key21": "1VPo6Va1mbAgGGjwwRzENbaYXHkLnz9vCjngztDhhnpmSubJT6VsJtFTQ3VG27UQYXTY4wBZE5iYGZNBbYKtQBD",
  "key22": "61aPeCta9GKu3Sra8Ur46R8WNiHpXPyd74h2CzWQFNTmfnLXtKVDLWYdkSS2FDZ1reCs4w1JXSJmMhCqpY8VuTwj",
  "key23": "4uXDrw2a9HDM82cPGXcGHLB46WVRv9gHvXATDAQgijPHpLAJ6XoXwgYq8Mpcd69gKeA1v1FRxPCozN9pJa3Kaoqp",
  "key24": "5FwA2vkqmX6EVh43hystuAWADqKsyTNdkRfR4b2EK24BxeXCLou59pbCg5dCwsd6vGo1tRehe2YGEwJqxW9q9FXm",
  "key25": "a2VBbLJEDgE7Nv4B9L9ynTQJwvs4QU7zEY3SBamXiyw7bSJt8AYPxuBfxDsUcj1GwUbBwbmM6bfo8853j27WHz9",
  "key26": "4d94a8zv8t9RyfRujHfTy4sbQPraJDzeGSpRB9yKwA9pVuX2mWvb58vJ45ThbRAvpQZ4oPidTWHmZYubuzVtk6cL",
  "key27": "4jDkU8vcHqufYQQ49BKjkxAE4qrGT9sJ2WQr3EE1obo3Q32yjsi3in6Fzgy2Wr51cHDmQHQDqhqjn3WDEqWW1G9M",
  "key28": "4eFmTzKadSBwLmhw9RoR7MuMmt3ZhNsKDctaco4tSoGcvepcBLAgLYJB7VHnpSqh7NE7uLuQ8oUfo85pPAEHrc8X",
  "key29": "3GvbFPpuvQ1CMBfHk5WqEEKXQcMMFimi465ByosfG2S6qNzZ7ZfxvQLXJi3PYPMvhxSPchnEc9vdEkDieLvgjwtU",
  "key30": "eNbuiopWDbVi9Yf3DMkw9v6F7mXk3YHQRTjueJRBZ2XmUH8fjyGBwi5Bu19tvepKPuyP8yHLqmKS9DpqTWBFW8j"
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
