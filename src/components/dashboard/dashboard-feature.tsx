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
    "5ukTZPGkqLhA2jFeZ48UuVPf36Fbv5uQ5aVhM2gUNs2bUmtMk4XijBGgFv2eT8QQJUAAYNbvB3ouN783PYju5Nx4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dox8oxUweiwKDYJyKq9BzdoAVoMtnHmBVUaCnQ3txoTbqHa4KafDUmFX7X43QghbsPR464ccCJqqymLaHRcAzGr",
  "key1": "3EcsLPA9N5kn2Y8drpg8CQEVRnsrWU6K3UGxHkPr1MpanTVPfL2T4HyFDieeoRzgXs5Bpwxw6h6eJY9qJxxYjpXz",
  "key2": "u5ExKa4rgAsj56AkLwzXVQPyUzdKhoMWuCFEiQytReS93hrX5byJUcYVigNasNSbrUpCZr3jsjVhCiahDkLbF6y",
  "key3": "5DauFG5Zq5mtF3wULq4BQjMuY5vV6g6hQY5iGpUtLb9GNjyhJFSXajCn2jqTv9ctfYCJ17ch48QVHT5EtWaP3JA1",
  "key4": "39xekdwHoy1abVYuSf9AoPGh7AJGSVr3WoN8QR6exD2pkWe8mxDc4Pg9fRckkwoqSe28KpjG4tDHjZgBQqPvXPa6",
  "key5": "2z9p9DoXxsGrKSEx9VrjQDcMC2SMkmnaagxZQ66sNZyVZYqz885Thv3gR7MC1MZQH4P5uTSE9W4bCdxTCXDeqouB",
  "key6": "fAmk8P3GYxnT8SKQ8n263MLXeAKTAiBSJAZNgbuLJUqHBLywc2aJXc8cA444GjrVyaeYbkyS37yHVuKBxV5pGVK",
  "key7": "47n6ybv5gtwdGi8BsC5ZpRN6ZwnNUtKDsaM1cgVisWKvSEZXe1yUCGExSR8u7qrxLJbMp6GUweneAjxi82fFktAF",
  "key8": "242Fwoy6SPw4fYroLHLGimyoch31bPkNExGdGUW1gjDjWEq6Wh2q9mZwAudDfEQdRVD2PLvzEAiRimpprJkcRVpR",
  "key9": "46x4Ek7Nsi7EwUzZaUP43FYXpVCHBJivGtmojgQVkv5hY2zdo4ycXNbfPTpYWME4YAeQ3jSuKkQVXaZdm3j58M9M",
  "key10": "4UQt7PrxERBAVDD3yofrsrCiqWnGLLh8pc9ptJE5DwYFtSzUP9Q8QTK4PGR8WngWvrLmRzDVdjr4SsybSiP4S7zh",
  "key11": "5HVkJKTDCmFN6V1wh9o9o8RTvfCxq2YhhbCwHt9QLvpL2cwkgm2G2tsMebCLN7MjRFjApbEcVJhGXjaMFwHR3Fiu",
  "key12": "5g8miRGgMUX8hKCXyu6QBgXr34fjFMRDr6umZMERBq2kLNkDsS3iYJcAfT8ADJNPaKMYRunaxzcF6wruKyK8xLJQ",
  "key13": "4ExXxDuAt5KQDfZYPqVqLTZCBZUr9ftEfAWaMt9aUG2ZEWWMxPWUEsiaLwe1xpcKPd2V9osoHCMVi4CANC2jnyDh",
  "key14": "5Wn8gSNV8DgjJCPvcdUkH3NkTV52JUTo4jZf2xS8MrcnS9o9Kb6nDdtq13JX5NxHWWvkwD2YBXt4orJSjsEX23YR",
  "key15": "2fHpp54b5SqHtoNXPZHdz7YVUZuSWRaF3h5p4mHqEMftspEmZsvUPPsDbn9WWJEYSD3JrtniwC3C778dMTZuwg8Y",
  "key16": "CJ6QjVF4X4tK9ZsaFibLAMz5AC17gEytxczPiMda1FU26NEXfY6NjrGSeqAdZFBQvc9BfQXGSnVriNaKCLC7uZG",
  "key17": "NW35869yojLDRjd16weRPigMfqt5XFL3PSHzvgjTzVCtRYTSQc2YfAGuVTgei2ytESGnwV5BkTYsA5jNX5Y6dML",
  "key18": "3EtLVNN1jSVhUAnyuoyYMSYG2XmWu44uzaMiuRYaMaokoBPcRyykTUMmKSyS63ReciGaTPcaLydFmymttBfRwbUh",
  "key19": "3zJXTMyr5jjcatiaweDE2urVrKuU1stzwzeauCN4hXY14o5Scr8pcvYarcG6Zz3Y85RuYonAJr2LAheCd8tN7U66",
  "key20": "5XZSrhq1DSNgBoVGDAcUk9TRqj1nTLgrmg3mvPwyspmecY62cBHdFVbvd39cZPoeBdDQHF9bWeUHxsmodnGEAT93",
  "key21": "3rLSvJbeGzgkGx1y3FBho2ypZGwPvFFxqqq96CqgXjJsaG2dAFHEPm26vzG9bFdhMZJxpNPeaNc8JcwZYM3ACPSL",
  "key22": "7yg7wV53pYdgPYBJeD4jDHa3idtdtfiowuTTHHTmHnntgTBnUfGbNRvT6URTxaPFiGm47m5p25WmNjk4o1pPnU3",
  "key23": "4M7nwjU47uaRWNT74GWjFKivv4ManjaGZCnBYxne917tJiTyGxdDWSt6E7jXN6nyLuyxukgXXUgRiWRQmGnvcWuY",
  "key24": "3ECzBpyZpeQUAiDP3CvcBsEjkBBTwRXmwLLN8ibYHxvceqFUTQ7Mhy8fCEbHFjMTp4urzsB4MRJL7qVg2ZrjLTXp",
  "key25": "4sPbT49BFu6rMKY7ZKZchXFoUiMNJR82XYjhmgHSfPZSgFLK2KnuEFNbR97Z2aXGh1NXTJ7bdnoQTCgZEx9nhNW5",
  "key26": "5HbyN3rfgEDpS5RHqriHm95ZQYZ5pxZXSSUSfLT1CgYvtgpw9b9WySFTG5L6chTHKuEtRnW7gUm9ARHYpPcRe2mk",
  "key27": "5FrSiS3xzsCpeMhzxcQ4NN9HnurCf9F7xdkkWzJofRxYXtsGS6eRZ72a1WqDvrEXaFVmiLxTReqerKW6HP3sXoEG",
  "key28": "8dz74DfL6VDrFdWnAthkXyLCLxFjdjwCnqKPEyztWZsKYXhNtATbRfBYCKpajPkFPkGPSmWqP8V7C5NU2HPPWM5",
  "key29": "HGYdmGDr319q1xowobhPkKnEMagAeq7Ms2XDYuZzNW3364u7zCD1yY2kWSQ1jzFGKvL8PynACYKugZzyu3C1M1W",
  "key30": "4MuSy2DLeGrqRVL5Nx1wk9YcHxdc3e7jZjzHZakADsg5czN25cAbo8FMMhqbsWPuXMKr1G7zTJpf4rz9qnfPWN6y"
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
