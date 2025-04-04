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
    "3U4Dirg27ewmV6uxS1Xu3YSRS4GJuMtDuQe2EjgCpgQuuxCcs3ryJrpvphJnjak2NbsQWeeGf89T1HiXEigRpNGV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f76iGLKB17gH6mekjTAXCEWGduSMtwjxx6DAN83CkK2XE8BoB3VpVmYVSq4o9PSEjTLneNY4enfgjegJEuL6cFz",
  "key1": "3fDjSmRcuJvxZ2PozYMzfGj3d7aok5dfQy92hyDk5ekUJSe4htzcrcrVBgJRSMq1SyYw9cwLxceTJ2hV4mdrbsPH",
  "key2": "SbEyri7rPh5PwDphQYFAFdiWJyn9mHFUMNQpjSHH3nwSQ5W2gAGhvUDD5eU9Dnn6dvNMNBTrg4Ri5vP3PbFS81V",
  "key3": "2dj9L8CYLxA1Pp9oFC9s1Ctt6cDmuzx8bgH1rbYiCSpmc293SJgDXine5dzSvj4U2nt22KPxbusz2TUCVTcCAx3N",
  "key4": "589k6kPxxVGCqoNvtn52kNyEV5XYwycqq9JfZmFRivYwVSotQyWFoNSYG44MU2xbFyL6gFi5b6PMX7FGv82kJasa",
  "key5": "VYAAHmXLZxgXCi98i99z1ZoqszN2ZeAoCUgeeaV2gUGhLywZ372nMMqj6FHdknE56xgk8X1ava7BtL4kUJKAHma",
  "key6": "3uAbnCZ2SmiVftRUNrU2X952aTEfUcueqDqRunvRiFQZ1J637MWLNw9saqHTDtMjRmaVebAx6HvdqANr9gB9BVLd",
  "key7": "H7vwfyDUPEGtqSq2gvj2wPhb4iZB5KqUWCfv6VGdjB7bzXexJn9Fh6B5Mz3zCdLt4JDZWWoUMKme5coRM8y8B3r",
  "key8": "4A6Z2bqJsL1cwurS2NVGmGjwwx5TSEcxqo7n1jTmtYtvit7oZfXLKx5UuHPtVYqiCMLss8UWr5SHsaAs6eJDHaxh",
  "key9": "2ktoU9aaHxGmJ8m69tEcvVXtH5UVQJFoBCFU3SGKzx4qNYEvAhKJ1ucwhZxAcAsFpJj5JThPNotPj1nUPh4iFCc6",
  "key10": "5PGqBDdguCsPh3pjQcPeotsH2qqPjp91ueVWJf1ZTuWscsZ18FwiDj9U9WRFVxXd85Gae8iLLM1bGHcHzb3PAEeY",
  "key11": "4WqnSQTno8ZaT9UHwynU85rmASdKddKsVSFfoxP2BGv3Mvpo7857pogfmArXp68bdC63ddJX3PmyL2eWhMsYNByN",
  "key12": "3evz2DWWWQhm8rAzWGMXyNCD2hJ5tCG1tM18bfYg27sfLNvbExmUSSQCFzqFjH11X7syYKQzETf83RQNi1TjyQMm",
  "key13": "XgcrE4GRET4dTcqo7eoWmpge3Gec6xQww1ogd8trdmJeiYdomEhSuR2eDFtNQGW8cd2xvFVsyBL6Hujn6zHQFDx",
  "key14": "2TPCKspyuAqCiZVPbp4BPMGG6uX4JeHHGAkUVaR6fJoB1xA8wVZ63d7RcGB4jNvhg28N5Pt2ZJh9Dmk3n2x7ENwv",
  "key15": "5PMDfcSDpAy8iVNwTxrTSVWrHF5sxdeLUMpYtVj1mtY3DUKLHfUSzA4Ho7wEQb2X52Kx2z1vh7corjLAHmjSqb5d",
  "key16": "3npz9iUnqqm9AdegrnfnUKNQ1UEvow5yaxsTnadk3sbbeg2jjEvbnvU7yzk6ymAum76QEka8SEnWDkWJYcFRBE7n",
  "key17": "2hFMWezn2sJPFez8sSKG3Ktj37GYLfRn2GG6ih4qakyaWPK4vz6Xv3UgxWmTcooiWxLKKkeL9r4Kw25AzYGEEVMC",
  "key18": "5ztCoKyBwdySEpqhF1EQBc6BXdTaVEhEfpGBQRdNjkGcUj6gakw6g8x8XSHnDw3Q8WyUvP4dyw792rQMXZEQ2LqL",
  "key19": "2JSzXGWhV7wwJWn47m6jkGvuWjU4xgMhXTW3Uzu7ivTG9d7UdWSobykzofRjif7ThYpEqFaxUxKjPwVJcoSMzuRM",
  "key20": "5dXffuwUq1Ebvu8cdznCmttpyUVQ1EEPyn6xUKFJcRPL5x4c5VLbkAQyCLKGh3LPgna5d7PQywYoManShW9SHGgf",
  "key21": "5eiWLGEoKEPcmY6VhCqH66Hvsf8MeHjsHYcELUG3XQFWCViqDbk8Vt5YHikyoHx7GDLPVePRMNDyN2FPtGQMBFHY",
  "key22": "2Vtw8mAEVGHxXXzTrRsYN8ew4mzMtk4aouYxK9fCbYM67fBdu5Wk6w6143xe5RmqtfHek6CuF1vEnpPARjnWZk7J",
  "key23": "3PW1Ma45iabAih6s7NLHzxCjhsByR6zhLDQxRrujybCDPsqGMwMR1GaWRNFP1HKpq2cvTATTPV57L9D27M8uaNgv",
  "key24": "545dsZAZaLYceJFFuNnmKkL7yLH4ZKJ77GV774XSCBgntGBtQMACbsgF5bgLHckWrbCSGZsi5EbE6iDFp4UoE69k",
  "key25": "32xBTsaGiXQnAYKp9HueSLYCG7ATe6oi81mNrhQEKab3m4zav8zMxfioj5b4HCYmX8YTEDRbWU4bWkjwvnzrZbiY",
  "key26": "c6tYrX5t72fUyH5PmYNUrcde9aDwDp6Z8dVc4QGZ5iV4MyquVqzCP6SSMCQAqQZK3vCC4KsczAS1KNNALPfFfsB",
  "key27": "3rpQEvtWTJeCucasaa43Bkxc53tB1AJPk6mxMtChY1eu8hciiF21UtPc93AfcmUECGtVHqXGEFYZj9iCtjdSDjct",
  "key28": "2KkEkuFVeKiRVdDBbngkBD4QUddfw7jvQmz7EfDV1a5BUjxgBNmxE4EVCDPwwXyWTm7y2XL1PnSPSPnCdTWX4p4k",
  "key29": "2u1Ph34HxnJY92n5A9WjgVjJvoRcsDCg6mBMrJXsf9ANUed3QvNUTkrv8ZPCYHP6KueVa5JazSCPxK7wKHyCeFBV",
  "key30": "3KHMv5F7Z8N6ab2KcdfCN3opkBWQetdA8Jmo9wg8nBFwgADr7xXumUq5k77yjCGr4i6Bx4Sz9kGVmgFZ5uBn9u2A",
  "key31": "5iRt48r1m6wB4ozhAUMEC1ZaSTHsK9SZwxYLhuWiZ5An3Pgy7G7jq5qztWsDeSqadHDfWoBjE7VADxUxs9Rt1pqa",
  "key32": "3nPZyjWTAPtKRVQXMBPWNFrWCMtqADhBr3mnXFKEcb176Y2eVQg35SF3w1urLpmyz47WSdh7Bdp8tF5YSwrmj2XX",
  "key33": "5RhKHjrb2zNCtKN3KwWibPBtKTqcoRNWWP17BwfTBxhTcQGKmHfMbWawtZH13CTnJoZmCxuVHy4pxpai2FK2yqTk",
  "key34": "Hz35LtEGC95jVsUZdSjkfUJbHe9HGRqABiEdVFNEDFgF2vbpLVfRbM8rCBfM8un5JJaJdeea19kRe4kjsMjAmVG",
  "key35": "5W666Cvsfbuom6VrpW16MWSCc7rpMkphiUshnpUwcfzRnDnyGApjhBJUZhtyeXVTfGNwEhUrxb8Cp7uSbWG6K3YT",
  "key36": "3vF9Km4hMcQrcqbzsjFsMikJBY6wicfAgikqT3ETWsn6CG2HDemujPeW1fHJz25kU4aGSb2PEQJ4EqQbmuwEatBh"
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
