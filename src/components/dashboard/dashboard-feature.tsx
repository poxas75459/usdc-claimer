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
    "5fWK9g74vaKop4ZLbw33Wy1tTpjscXhAVCh1vSVYa8iKCReZRFwKyrXw34miVyGHf7Bwuh3kSinPU4SRwt2iZhct"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CQAeaDoZgTkzhkpEn5SPW63ZqoxnCMB5BFz7Lsg4Ny3wW3MBzfgsY6BxViwKsNdPcGpuM8vKXv8WSvMvscujvVF",
  "key1": "3RnGX1pT1h1JvRgXDuLC3BePJ6RRP3BiH9eH4PgFqMXHf9ckPLtWBmsq3ZGNLbVTAG19GrNDvcbvBMRUbpfnywS6",
  "key2": "3s8CwBrXkrdT114dwNtfvUutcdBmijmpEXDCKSB9Pp7916RzsBs8hxPfQN6G5fFcZFtgF2ua6s6u3sycQBBpMXJB",
  "key3": "3rdZf1MsZxJ5jU465CJFMHJwzpU1QefKCwrudx6N4p6zs2tZNSMA1S7i2RvSZJfytv8VVg6uRWqQxCQ97ZUEpYU5",
  "key4": "28Xr529yKNf3EJkwB1tL9fgsFtXHS9J2oJEscn1unTGoanKaSjHURyPDcshiBwLyyKeU6yP6SWyuSfmV3CG9j7zQ",
  "key5": "5xebZ6GVDXfjSdEYtYwiSqkTPpNifr8bmjPULTLRL9xtVxiGNNupozHf2LvhW9F3a4ZGArTWQDvU8SjriVs9JtVw",
  "key6": "3cVS2fWorNStKBfd7vHgjDPWnc5ohHHnNSw5DytkGF8nYCu5oSiV4t1etNqJgbpEiLYpk4jv5pZNEi9fANR8m663",
  "key7": "z4GzgrsAQGfeUSNhMR1iCQoQgBvCxYGquxCzYgA1N4T7CejRXE2Yez9QMLfMMVvgDtSdA1w5aWhk2M3NqbHQLnv",
  "key8": "46qAznHtBUeHHTQwsKu2WL4nDFKBE84B76BTxcznF64ij6yiBk6tozcB9SftvGC92MxnTN7ffD2ra5sTd3D5JPkX",
  "key9": "4NEADvarQcEzNWh1bZMX5tbesKeTYCU567Q8q99iNJ3aworhqTiFFiCgbCqsBXVrXG3jaXHc5BWFLhUaYdvAg7uN",
  "key10": "5k3cyvbjwFnNiHQ8V5igryXtzJ2KBs5oo6DineZNC2LrPGqdniyzXePGaSArtm9CxtweiPtytK1L1mrvE4JnyK9P",
  "key11": "2zdd5BD9DaiZWgRHevADX8B7LebuVXKpXQG7kipVWg1yMdj12iMd86Z1yxuhvcCwcFrhqbNbZ8w8ojhKmb7H8XkJ",
  "key12": "62S8tYS1kRYqC8HevJwMYGbnjydCruDqeTQRbCRcLH1MXY9Ap9ZsA9YD2KPQzBkbSUnhxaUuY6pC5oTffTypmycV",
  "key13": "2zCuQw4KwgmzVDeXz7md4S4RbH4D4wnh5d9ydAo3WjT67ZmNhzkUUyoUe1gX9YAg2EfessK1JEKH6yGfoXZxMj4Q",
  "key14": "2TTqtY9pAiNMZrr4BbMQnuMcUdSJe1naTj1MvcWbSRTDbWgrn3YthUR9oPzZdeDKvoFD3dUSLirqmZceNCG9vJia",
  "key15": "4ksFDBCmZWB1Mno8ZxpwWMnrZzt5ygiQtXX1hHjq7eKrrKJJWcoXeWT4ADPbv7JvJcdbJwCxzfu1NevCd2brzwAy",
  "key16": "4WGQVXghsAHMESHRpGeEboYt7imSwEZsNkiBDNbfmTePkxZyHMzQca9CNeuHvw9bq1cTbM5BXJFL3VsfSLteTb9A",
  "key17": "2GJvDmrK3kCj194vj9Wb9NdG4GzAgpeSrzwyE1YoHWYm8NocJ38acqSDxCxQzJTaWHPLS5f1rrYgvshzYJrnLoDW",
  "key18": "5eHb8sS2Eq91YYEeT8wsoHKK4vxiCG44WkYRYa3vz3gSguGYWAMe3PfSmEXGGDzPqa3Q4BETX3xxPcFUtzgmNCFH",
  "key19": "2BRQP9aJc3RyrVchPQx1ggV2TuNZR3KHAvJ55hpbXWSS46oWuz9STR974LhGrGvTTvv89pSzUJQHdaa29YjGa6Gj",
  "key20": "3TA9i7Let43SKFXbxBPCfdSXvZiSn7eEfQwXG7Y7Pf98Q8AVZ4cm5Fn1o2MTUY8P3Z3XHx89MyPrHLqMGReeEzZd",
  "key21": "3q6JJjHKS7ZX59z5GhDw8oJLvwufnnP3BSoAtcHcWvUxcDqHvRCt5WA4q13RG4i9QC3pp2nxm4kHQxCcxStnyQNk",
  "key22": "58FLmgB3v4znLTqvPyabP31Wht2NcUGPJhq2NQWB2HfPhT37FUJaDw4pvAtnTjDyiLwX3t7UVAxcH3q6y36iqFxD",
  "key23": "3nrKts4KFM4osnhEb9o3z2N2gbA71yEa6mYULkfh5gKTSh6rBWhhk8DgWjW6SiXuNW4AgAXZFzmSUvgUyXtr92VM",
  "key24": "4j4chsrvSYm9r9FzYN6WRdCY6KiynoNh35hKqrM8mF1Ah6tu1onB4esLD4gGxt2fNTxtph3QkPcLgJdi1kjs2knz",
  "key25": "63ayVfgThbsCyeejyAsNTqKLhAtg6vkdTmDNzgpKx3PoeA2FpHD3nanYmR2ni9aDngefiBzZTE4bPDQGoMmZnBEa",
  "key26": "2SJcAP32kVkVfPB2uKo7ksT8r5PRhTekYC9kjNXYcHdAL5NYf9dwtyVDxpfiWNtrPi63pZ2YwDXmQUPRZfBBN7ck",
  "key27": "WCULd6cu2VipKKaUTfKmtS1nCszbEiZ47yYwiFDeS9NcmL6DmJcwE3Jc2v2J9ZYZzQTQ1853dh2JHcQvruKNJVV",
  "key28": "2dz9hYMBM6g8aiqycz3WMxE2n5T4JzygqarcuhzSCd5TxvaoRu9fyCq1bN1VLA1qh9hyEvToYuZdzNS9W6Q1JeVG",
  "key29": "2c1FQJRhtx1u3xYpyqi2tqiMzxx87Jpkk1BYCCy1rbSDw27empagW5oSKm5uaJBJ3CMFXisJ9hKGf4XKP5Edh47N",
  "key30": "4txVUuZsBtU3p4s4vNyyUkhiKe9xvKTmW7BVZDhBezhPu75RQJ2LtZx8iYdr7ZpuHdxtCfn2QZn1MgsExQcqG5MV",
  "key31": "5FCiqBy17V63b9AmGDKVrZDHC1v1fLUMeYYPsJtqjrB2Bk3vp4nRGmW1WT5S4MWhLsRuiqB51x4At1uXffev113W",
  "key32": "5G4QZm9DhXS1Mz2hxBWNGmSWGNkh1MyUZ2wA1Xubx43fKBs5RJ9AzaDy3K2hGN4aJqZydGNTbFPwmdaneWa86tvm"
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
