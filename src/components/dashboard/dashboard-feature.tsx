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
    "x27qhkeWUDd6r9fdyRmJiXE2iwN6EGnF9rKqaSwTvhWzcXMUSx7Q5Mgt5s3AtvXZrdqrYbevByxit6kkF7KHn68"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CcpzBHWPpnycm3DAinxqd1rxQ6XpyAjvcSPdoptnMDr955zFrmr2HdeAaDTwmX2YZH6LFycC9eurG6XBGPqTEbt",
  "key1": "4tAknstpn5dsjSfjfga544ruSQoivfgG7K9sLkP3L35oj9k597mvyFf9roi2aPgQJwVMWUoFuFoQ9uUjRirAaK2U",
  "key2": "4EE9UKPWhoYzcEvhDepQedaMhjU85AJif4CAV6yAGNjh1zfEDnW2MAeM98LhVAMVeirK861qpdUdkhCB4j8BiebY",
  "key3": "3vzYtNLGT6VjQ6fndWpo59mokQwdWRJdxFubPcqVAqFjeK6fjSvHdNiWEEqpNFhs9GNJNpb56QS5KBnqy69ZKgLG",
  "key4": "5oJZwYgQJY3zNAwvcG2VS8ka62wwbe2jYc37yVUcwE9mAEgcdTiCX5xRgHJTjJk2cSwVezMFWHLkkdtYmsStQATB",
  "key5": "5cMBtV4R5H7GCASomdEUk8asWoGtVz37MHnYs8WLvf2reQTUP7udvBqSPEo2pK8Wt5br9kXFT3qwPCxDx22DbQQr",
  "key6": "4DFxMmtLNWjyyngBsJzfvF4zY1nZePgpi21DM5i4sMcL8d6gshKnaQzyhheJ7V5nEB5QGcYG34fKK3qKmfd1xvUx",
  "key7": "66ZQxmcrq3bA7GLtYkfwKmv1EhCvVZ9KwUJps64z7A326ysv8SQkmxWhF4Z5Lt5DCy768jA1fMbHCdNstZkNcu37",
  "key8": "3gsa33fsc7CKDtD6rMLRsqD4v2zmZjxXye1xtkj3Rz384rfAfB2vZZ1BiYHvZqvwhqCTMtAD1JLbQmu77fAMp5YG",
  "key9": "sN6wa7RhFKmxoxSVdd92HPQtYkGWfRZ3B3n1BLkx1ZTTEMvgmQzJ12SscyGozmvWkZpnKXiBdURHjNw4DMLYW8t",
  "key10": "4HfK49A3cTDcgVKDSNethd8xxxfHvfHGVPn2TKD9L6iUmHbQpDkkHytDRmzAhigMqpHAba9TSsk9VYhAjmqVCFmN",
  "key11": "36dEDEWHhFWDZ6y9JPXyx8nsc9MA8fw4RfFdM7LzJKWbEg7DWcZnoqu4ACJJuTNrveHedS1FQvdfXcd11xYPyPS5",
  "key12": "9rGgiGvW29WTN41mjLhzHZ4dkWDruGe38aqwiv749yspYKiJaZqDyaA2GcjVwrvJVaF4p9NBYVXLwa4LQMqo6uo",
  "key13": "4vCAHxM9J17BmjijhetQpCfqUYCb7GBwiPexxytQhn5txJDsMNmkqmMZTdDvwc1vx7uC4xtpV5PAMxhxkRrGWQrc",
  "key14": "38KozHZ87tSikNCvSz3n9BBk17rWhqN8qkyif7XQgq5CpEzKc2uMTpxNDmot4UHPUWTT5f3FSfQGLa4Me11hJMVe",
  "key15": "3TTEG7fx9nJoicQFDYDGMwgZKfi1Qf44o2s9zfs7SieFiZscMFun8kKXa3exbVgnenrrcr2tmfC37PCcoeaqZvfi",
  "key16": "2jSC63sU6eaD4D33GsbMBFfqqXAp3C6bLs2tzNQVzgRykcr8GUvj6bRqX5GrKYgN549B4f5pAJCHF2UrM6bbA5Um",
  "key17": "2rHkvgHSaayC5bSU49XHzsDnKENaKWx5oY5uCHWgaLPfgxMgzSf1cvcJHjYLL3FWmCaPpFTprUEPg277NqbEGyG8",
  "key18": "58D5eiCHG1SVQqyPFbC74zsQjEyXbH1NWYxqhWmXmgPeehXRtv9YXcPiDboh5bCXAdb9JJGWgcWbgDXv3VJtZfAi",
  "key19": "5peQnELNwdn8Tx3L775dLYMYP82WfHaAWjqb8tJFEWUjssENuwLhJcc2R5Jc7BdduuyguV2gRs8sg2rmeESZq8JB",
  "key20": "2VRqryhRxGrcxy1xcVFPdtJTuFLTUfgsWwbDXvHFQ2SEAGq3681pwPDgjW21abgauNUYfAurhD1aTHcacRPiZ7qt",
  "key21": "5DvGNkv6ddr9Uyd4PtoUXVPynh67UhF5nwmPSHqcgAbxmNHEQth3wFNGDMU74zuZv6NXVWrbawYVXQDyWNAiaJoC",
  "key22": "38ogSJPbvwGtqbq8kJpaN4UgSu3YwvXVwbigAKBYHNCr9Y8PDGfw6vYHzEwWA6BShEHqrPm1p3rwSYrAEYhXBuX2",
  "key23": "2NyfSgTH49FRamKDQisCNiD76y3djdN3Ud8WwqwQ7tBdvV2sbztLBo4PFke2tpEunoqePPx1KQrDxuDtvsGtKvD4",
  "key24": "32f4gkqraB1dL8aWWwT4C9EskAEuE7f6VECseQGoHYFjecsW39UHuoTsDTRZrgqSwQu6xEqBPRM5GxNoACeXgMVE",
  "key25": "LbqXth7wSG9dGsDUjrX8fY3rSiKHougH3DFtsFn1wpdL3FayFYNHWofEGinUGzdvN21ARMgizyQPmYXJL2VA79M",
  "key26": "2XhQJeTJRbUMtYAbAZc9YUutLhk7HWjqWeMVYPW8zMeGjtwcYuF5ZHTm3bpYpAdMJjneyBrrMuUbjXAoPEJkYVns",
  "key27": "29FCzoAhGJYEnnrvWDW5Hgcg5EU7mKjMEqHMoTnMaYGP1SXjRgqUobY152KHjX2An8EQe9j2nkYA33Ss8xV4Pjzf"
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
