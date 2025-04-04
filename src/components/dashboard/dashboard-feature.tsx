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
    "4gvvHPX4hqbZvR6A9st7GA8DfYy9rKPCtST45y8svQeyK9M97NxvWavHveKYU6zQT2VPXMzebZgyqpQ5aoizAXT6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Dfpbj3AXaofbzMQNR5R7cPP7W941ZUhEKgJGvavjNcRcgwuTkZcfXKwPyZo125vjKjVv1HVwkVoEE9XBqkUNXm4",
  "key1": "2ybjuzPL8suHaqUgR4Nh4txQqjKoWEbQUXxhqHqXhajyRcGiSiswK7wPPnYziT59sJBX7fhduBWpSxfj5GDhEPAi",
  "key2": "UsGW62127DJ7y9it5uwNtHWscR6d7RqdYMLdppvkfXJqA9Ryra8VTEJDusT8Gm1KMAhZKaed25ZTALVBeh9JAts",
  "key3": "X6t2ir6wZXqniAEq2ZBfzDfVXrFPqnRmc2GjJArvDHp9eSAc1X8VHVUYVS8yQfPErh735ZW5BRP2vnq9hmfgbED",
  "key4": "5PPRP7dnyum6RzeQNLdsroud6ezBUzSZ9k8dEP464j5Gd87QZeHjczDhXXNYoRNh1UEkhfnkFC8UGLWfEwh8rpZB",
  "key5": "2yza1v9zr5iomA3pcAifWM8s9yBDGSBt4TY6Yt2oRPFZhzAx4WfycqsSzErjVXKwuKbwC9w89nA1nL14T3bXebYK",
  "key6": "5w4qPLraVPB2MpiD3y4QtKR8YWvAzZzxxbdxHxeyRuzDirUKantZ87cpqJXEjkJZQmUYocfA4jAnQoPjsbuubo2K",
  "key7": "27nfFHuN1URZRBdAcaGy1SkY9wrnQejMocMKJe9WNxxsTrJjdKdSZsSqdMehxMP71famtCzqw9UKFBa4ZqP2q1Gp",
  "key8": "pvxLsTnqeyB6WM4J8MRasQUyMdRfHzbzTnMQVZeaFg8yCLZiHX9mzzLrxJk5FVcnqa9LQdTiiDwN69GKEPKe5mm",
  "key9": "4qa82w1GxDNfW92dRcR4eJwBgAHZjaBukbiaKGT7NCHFw9CMBFETWTQMxFgaxQWmV2cFa9Zo4muBzkVysRWdfDpL",
  "key10": "2fv6DUJDVgPitxeuUVYxdy8tropfgtYC3LrCNTVsuCzhXDhJYxZdstzhPNvzoChUoM69RHV23f8351JMPKePRc2J",
  "key11": "4zNwjH9gLtdYk6j4ZBEcGPbworpWYMQQ2rsE76RaW2yJUjugNExMmnLBjBMuUgBNUYdCywRK3LSoxMu2k2NMiNuL",
  "key12": "2Zyre8WuMnNy5eR1hTK2qVuFDPztfGAaGc1Vh8wSu5L9M8JQVin1UhVX9S8o49ZcmJrsC2ArMSTcSGsFcoezPrf1",
  "key13": "3Xe46v3ebYTupXXYLyL537ZmUZQavJgc3x5suLBzPvZrekGaveAyDoy7BbdAL5aU6WbGN4tRmmrpd8DG5n9fYTKC",
  "key14": "2xUCB23KdmpJj1AzzdZfCdCBgt7u5Cji7dQZ31gBKy1aey7PkX8iPaUgQKhwepxYdXLdgkvynduDkhyyZwG4qhTA",
  "key15": "56uMgUqDNiNUf1vSDoQc7Sn7KUzxUrVkLfT7Mk6eJLWgQLvxKE8FkNYRXXB8oNthbvwNNG1F2K8SHsvjBN5TxD7r",
  "key16": "2u1jZF2cRNpE2qeMt1LsyaaL8HEBJJstkqH3VikaWHS6D86sBW9KkQcMeqmam81grRpZYHuad8qFta4d6bxErBdB",
  "key17": "2KCibw3w6pifQaKTpNebHQs3Z6LFVbJ1du5BJiFLg8pZckEnR81uEXrk3RvrLFFx45UJ3bJmP4HgRLpi9MTw67Wc",
  "key18": "2uWL7V9ZCSyVwNAWM9SqVkEbrnSCSJ9nZJxzHyCBHzYQZnj21m26XTb2vrpPKHCJWpsk8S2NneDZgaZvjrZzshEF",
  "key19": "5J8aam6zerXGXVTZKNCRdZHxLnFa7YQKjTdEmFVNkBhz6wsqNvRFoQ35wzTbarCVFbhPwpi3zFRdze1T8MkGQwRi",
  "key20": "TDgwGSXdv9ZXB2rDNgXZDCt5Ho8Z6Yh3NVdVyPEYGm4JCwTk6izd3bwYYSsoHV1mxc6axm9FEuFD7y9Ef9QKcNx",
  "key21": "2xbq12aKfDzV16LDwU5qjf2TmuUEApQiLztJuKPJx5aqot7sB6hb5bpT4JW7NW7f2o6EMtSsbvPFu3Nm1t9czESp",
  "key22": "LrMJ7MRdWPWyyLTTngC9StnsDhSH4j3LvPUQ3gtKMRypzgUi6CjgW8gPcNu7vxRW7NBCHmThwCX2LC3mTK7uJyf",
  "key23": "5jjXVtbKfxRf56yqM6ZvaP69na96Tfm1BvGtZSeJDdnnqvn197p9EMEq7XS4f8UnVdFsRHby7aAbBRC2dQTRjgTf",
  "key24": "5nUVHTJpTHLxwWTAeusnC8odg37JyZTBgfECDxoQjW9dv38kDMLfHyj6xSNoreNjYeCMXhUyBpVm74mp1dF1k7CG",
  "key25": "4ZKwYbKibU7hqkgFwz6hz8ti1JJuQ1p9XYSkfWPjMZzLs9ZsUd5ib93EBWhi4beEjEKE4SFmhyg3TUPnQ8Ucdk8W",
  "key26": "3vh9waP98TwCkTK4p2kSeMpS5nvLf1TebwY9DPFdTLQ7ndKc1cfyUg8Ygd5wi1n9TZGPeoYEKEYyHovis1A1Was2",
  "key27": "2SfJkrKwZMqagzib2cZTVBJvNXZPAEaAjhqvz5xdyrwL5PYpyFniThhaBP8feUoPFz4bNu7q3WS5fpPEGJhxm4R2",
  "key28": "3hcsYdM9czkVuJxGrGNBtiqTRiGHAs1xB3bMM1PJz55xpwdtKMD6AwPmsr4qGp3ZJ4tBbTupoaxJDWkgiVnsEav5",
  "key29": "4n37hdeysYavjwybc3MPXKy4dDa3L4ybFGDMenR3SjV82WiqSDKREGHyRjzm83D3tZR8p2QcwFJKTy4eeZ5sMg9A",
  "key30": "2hm3ATdq3RzJZtSQGQ2mTJCKek2WvSfszQz5E1W9Cn4N3TwqJeKZKrzjvc57chrqZhtGGKaFAkuWZmA5NHNrsUsW",
  "key31": "2NTwowm6L81vyo4xcKYSFYY7YFFf74Yn6iT6GFHghnMrvmMAEfQjnrW3qmm8Ak2VyYziVcuFcCseGSYADgJiyaVL",
  "key32": "2aubzPn6v3RiTGMAnqZSqxxH8wkqjktJzT5UNdQ1CAALWszcaaHis374QDUdDKFY4T5QrtLg3HsFsrDzQSEVcC1f",
  "key33": "2XtPB1us1VuE1VhUGshLitqUjpFPzTpXgxCUjhBZomNknhee7AVtjBUQRZHVRYur3s38foXapbiBWH9KwSAX9zv2",
  "key34": "5Jrk4betS4rLTrbZKD4XejfxhdEon69JNEFFgK6TiGypTo6eALUZLvCHifAYsq1ESSrzv335s641GA1bEuR9gehY",
  "key35": "15pUCBHhAqhdo2iM4GKvNWpU9EJ3QgXR7BEMfF219SttnaK3ZLkBtPuRq9C4Wgm3RA4e192QEYURKuMDyTcHq7A",
  "key36": "4K5QYiejT1uwKRzp1ETaVc7MWDDATZPJmkEhwUZuA1USSU3vDdLTMB5VRyiWitcq8bRqr8hL5EuTkAinPqDhh4C3",
  "key37": "ndV9VhzB65hjf8h2PtLYr4bVTTdC4WMbMGDTUQJtmnBhoUBS4oHGpkKHKEqueXvKE9NqwTrGVSDnv7odnYfijND",
  "key38": "Zxt1QX6ayV5s7rMU94twztEGo5sdZkdRepYunbV6QP4PEBGLNVpNG3fucMTrmdYWVFzwTdwGHRBsuin2RjT5Skp"
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
