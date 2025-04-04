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
    "TijRziWjEs9jeUR4oviRdRZGRVFpuMXweUB7Gjb1uFvmZDV4RQ4mAbrUkV1pnqwoZ7bUYSmgY12nzqL9XfLJyzA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yEXjYFRfo3QuoCJK4rJG1eBr3x8mXgVzYumT68GeSZJePVFnAmLRYDLBtTeJ5ZCPEcgQzP6qxhcJRfgm5Dem3NB",
  "key1": "28G6qHhyFDm7LmPo592RzbSA2UuMeaDRjk1Ru5u16nbwJkB1iR4wBACYUQ4gmpUcoyo9LMf1HWsqvCLyhMr6Kgp9",
  "key2": "3kHU13QfEakQqaszCPLfPTGX322cGx5Jbg8KcWMaJ9HHsfafCVXbsXz8Bkw1ZrPsrXmKMYUN3suEh23xgvFFMcdD",
  "key3": "5P2yrU2PUuiNiaysosSg1BYa6APDmeQY1Z71iuQzpPNJiqELTFeKjfYm9iy2yshmNY8TzRzfjzLRn35TbguspXbB",
  "key4": "2GB1Kek8GaeRWph4yseVWDCeSRURYhEWkywQ8thuyahaEgmEiyiRcnDiyFZEaSstptoBwB5GiB1tCsFizz6LK72A",
  "key5": "3i8JfNwC3MSdQbvTdQktbSVxUpdgGjMjtSVAL7wNBVqY6SUEWTyaPykuEe8sfAXijoccpcBvaY98SgXwB3TjPVpS",
  "key6": "4Nw3JMJ7DcaEdp681LDRnaxHeeNdPWtBgSpGhbFdFeLcU7wRH4TTv5zRAYwtASKEPE5kM8HcuwsQRomvCtj9167V",
  "key7": "3kgXUQpMWFD5Z3C6huF5c5SQam1XGBQhrod4JYyrksctRNHQsxGuXDHbuNLGyVqJ7rLqyyF2BKbqu8eJUbMSswwo",
  "key8": "3TyzawV1rryP1vCRSfMEkcfXvTxAy4cygwTaxA4wQkYFpoYAbJnFPd6T2Yniy36javvtpKeVCUmviESPZeSyfXbH",
  "key9": "3mGZs8tgGFacCdeDsFt7auYgH3untA5gyBgTytigCAV5RFpsGinjvz2u2Fw5TVaktcEqMTRbfJhLbzMDi8r3MGBC",
  "key10": "4mGQd3WaTMb6wpBHddLiMDrwAGVeRihJCy1sqKDqjU5dFwBZLYodABZtbhHiRDUfYfLgSq7EWGgPqy7fTjpUTfEi",
  "key11": "5TiVJWQraLdW5YB5SaANTutPYmfipYWQnynWYamiTSEveEwRCVWuqhxtHyy2ricMKzCCY6VFr41jwrLUYUb13u8f",
  "key12": "Y5GTqzwVhxjNoWzkArPbMThHHQpxB4bMER7CD6BkrdvpYKUJoNadF4aKx8b6HwvMqdGVaZ4F3jbbuDisfeTcq46",
  "key13": "2TftE2SzsKkmCxyAUT1x9Xmy1BvPvH22SjAgTkNWjNuWnbdfwwZXLzQu4N95whaxYX8q1MjDGz1jyr5Rr7M3JupC",
  "key14": "5uYHALB74osioGeH3XHcps2ABEwuWoAEEavifyaB3bG4y2CFotfjm3Ch4oHHMwfBET8Ufmqp9pfdZZAxCyDb7Nrb",
  "key15": "3Pi1jGtTueSvvzxAVuXgag5D7DdTsR48b9iToZcyiuXm8v3RYdiD3AnAz3ukVnChGsuBPFY67SHaRYRL3y82ZDMV",
  "key16": "3aBZLtpWjRWj11LNPLpALSu8GBHkqTDWmTHaaait4HyjDYKkCxZnhrpBKhyWUuPG98xjZ97CY4B7MbjVPq7mQT9L",
  "key17": "2ipgEz6662PfN3EhoRxDpYW8gog5QjJGjJhTccGBAoqDgkGLQHJ2ynDdCXLV4QT6BJcQGKrgGcYDjTBisk4HBWk1",
  "key18": "3BngB5fKUdz9eQ2S6y8HcLQZ2kAGC1bVo2nEeoVLRmwgRaDKLWH3Pzc2WKFdxEow6UiAPB8hBKkQYRhk5Eus9cQ2",
  "key19": "4aUob9NqQ1djXjuj3zsxuHWUStd5jTmbBBEN6zVYNbBTqfvPWXWDAU7nxvaAaZLvmfa6FR5L4PK2deT2CknoEa5X",
  "key20": "4HwmrPVX6nKvkp5ypbhK8XLoowSLJyekH4kcvgBthgpThhWWjbZJ7BnWgwyeEm8PH9Dwx4UxHFQ1LxjbemX1DsQY",
  "key21": "3uEmPxN2fWudu6Ye2kGayaX8WoSLoi2fzMFKNjyTxgZoxEyVMo2Q2QbqshycGauq5YgrU6Mz7T51hiECAiDdmZ8r",
  "key22": "2iarCEsEM2j4tiWZDsrMRp9UcHcdm83friahMGKriDo9SVzcuRL7vX6eKCAkBrpXoRHeE1kBSvaNHBKN1JcxzG1H",
  "key23": "5tcQpeLn7j8N2rfAGdUzCkyQDeRWsu4wS4jw7eqcodGm6xTcVkvEqr6zBV2vqkByDeajoDmNLEwsvdi3YiVYcqX4",
  "key24": "2bK6HWCbdzbAHYcDBUkM5PqXSxq9c97EZW8UjvFTWR8oxLg3rfQdy4MuMiMCibRAYsXMyAF4tyewJ1whCP7rwZgy",
  "key25": "2uFkzjQ6dsiFbADKTuXfEaPSvw4xXofvyTDSSHVf2Bi9frjgKrQNzq2Q2VdmpC3xVFdksKSsXTS1NhaLS2BKTGfc",
  "key26": "4LPChxinVMrLJVrSFCRJTe5mnUspLZ8aqmDccHnRrciAwi3qmHxDCozEMkqQUNL6yTLR4VmmddPCwF2mA9TujYkV",
  "key27": "3sgAmzfcHSZkiruHEHropH31C9QjVa5ib6QiA1s4nAdmsmNHcDDvbPixrVEcAjquWfXNDq6LR24YQZ8kVamUTLCW",
  "key28": "37EWNzjrshwScL9tMtSeF6GGLKYeiTReZ6TCcdWZ117gu7NJX5RLJxJCfCuL6b48m7zWX1pVZGxPGR2AmrMYZS2P",
  "key29": "2SxpnWMneGNv7iUB9MgifiydqBLZu91C77Hxhh7fDsKhdTnunoS3GYdtrrErGf22EKiGNGJJdvDQQTwZGVtUyrg7",
  "key30": "4h41XUhvfoiCZhWegMFcyuBGD4reCWT5H5nM8n6tkYBiJAcBXQMW3FwsbXBWALgJB4bkjXy7rE2PdramL3SFkDkM"
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
