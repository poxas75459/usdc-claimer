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
    "2BdfHgUUHh6F4DUK59SyGFs4SswSWWEK9WGac6uYtECXYYhbTxiKoNbwiMT5BD4gaba4byV4mjk6citrnvDG19qw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xRXAnxB3s23Z7ovJ3KqdvngWxYsQyq8Y1JA6J1MJnzz3ynPmD1zZZQ93RmuTLFPbjBxC9b2ADS6j3DKTmDiQ74P",
  "key1": "2zwCBV4Hd1DFm786tJfvyEtukqi5dyVcdsNXHh3sz4CPaXkMzeKpe6mNBjxrn9zw7x7KmRDDar6G11PFNxc7CtAA",
  "key2": "3ye6ZbQiu36uJ73KJrvfKvRrKGnmmWJbUcbNiRrmdGov2TPP9T84E7Azm6LENUetypDkVHe7CXqB2Nw5GguxVcaR",
  "key3": "128hfUXgW3Vpti9Mn34G4ZcBcbAz3imDjmr1dLP7rW9eaGsMAXs3xnyW7UE1WnmY2WhBaN4heQ28Ku5qCvYgxE1g",
  "key4": "t5wToD5MJs2skt4c5CYByNuAVKV9Rdo893uQcpaTN9NDvah8kCHtkpkLVvwNJpjPPJLkd2nEXS9xBrNRARuU1PA",
  "key5": "3GjEWhcXnZ6YCL1CTPJmmq2gCHCDbxEA2v1r3GWd6L6trfCZcLop8cXsui3TwYk36B2p5QLWrQCZJDMNU4uEqgxR",
  "key6": "2VnbqknQeDV8paaPDakpbCdBTh3RcK1fy2qwEJYDTZrmzCqKPhgEYjMTdcDQ1hBFRXR31BY8vNuxpFy57b3ptbSA",
  "key7": "4bmxf5kT6tCJgjZAkmizxNDGyNWVPmZtXxvjfpqCAJp8fsZtUkMuQCpnW6oG8HJeusNg6xZK592WdM3NVVxjNJpW",
  "key8": "42z5ogAyQnwYER74ZwuJekoXzBYGGaXBr3jrLQb5FUWc9yp47fqMY327QEo6T17FchUnpsmGqdGyDVbakUbrEUxJ",
  "key9": "39o2mz5Xg9phuk8zF4hM6jpp6douuDtYvaaRnVErD2h92wYRQdVRkH3ECuZ62o8L2djw1N3sH2xL3FmzqiAegAw",
  "key10": "2vaSWHH6co4CXCxghvLRkDPYxSxLTHCDfmgnq8z1GPtUANgJ5zVBD8SwCm9tS9BNhfkAWLP43CuAKgiwchzuAdzG",
  "key11": "3ky8QfZcoTvDUgXwQfMsq7RK2hbybLeMSAdedkjf1RHzC94ZxWJJyeDLk2WxE8gDeNUbLnFK5mox6S6YKhRV5Pqa",
  "key12": "4xvFnbCdSubVQbmxZdfLnop12o74cLKkA9j3jMhLs56irvLpBh12qjCfTNWLp6epaTo73rQPW4krLkwLv9xQ9eSE",
  "key13": "4r7S4u6gQj8YRf2PQYDsYri4aY4JqaC4PoSM7bTSt4JQrEsHQKWJsFpnSUpbGtNwRixg5A3qBcrvUSZDmzxvXcGJ",
  "key14": "65Y5KDsTgKugfqrWGN2GSqzt7kBNJK5wKoYucn5d4S3yi9CxnVWia2AdxwGTHPJ2cK4iX7FgyQSYQQwwoA7kNWQv",
  "key15": "z6j69nMpiZzhV7P84y7NBMo9YNdwKhbfn3ozQw7WZwhtfEK7Su4ywj8gNcfMfoLBe6xqKdsNUkep1AmMWMPzDwD",
  "key16": "2oBBdMkU6WfHVbTAYLmymsa8mJHbkUG4XAcEFFyCNf57bgdtmbzQK5VwqsSpBPx7eiM7yZAEYxPES5df6YgfS3ev",
  "key17": "5gAWVjJsLAKrLXDQGt37SDVniJN2tbYAMREjVbDQFDo2KMneeASgHuJGQVy5uWZmjRhuoMPNGigTxCidWmqrMBMa",
  "key18": "21qCuFzs1uGeyEBe4jgX9vQrFQKeH835os6pJZ2VoaJ877m6NxeC51WVqksB5P3DDMvVyDvYvdP9bxtKjUhFjhXD",
  "key19": "3suszMaskxHofCaHMjncxmdTnHp5nxdZ9qLyQ48pKbLapNewowt8xsgcEpGWtysB9czRQtQLRy7YPSbxEdaboLjv",
  "key20": "2tXV82QHXnFAzzjr9g19gshYdeu2gnqGNwonvTH7vnscX6wwdRWy67ZYRsAxpg62VbG2NiomhiAPpDwR9u85QGa",
  "key21": "64MmSLXto4MX91dpPTjX7WkNdjPW2UZ3oPmFXhJmMvKkBNrboKfwwMW3FaSwdT7SCLQ9PRn2ZCw7jiAw5KVAzqm8",
  "key22": "5Eu9op5bXzmkJ894dB88U6vwREYF1BPpW4F9iUeWFdqpRnmsFhSDvJoubSkkAZxunNGccXfg4AEDnZfyQT1bXzmd",
  "key23": "3iwsg4gDECYVzaGN324aGUkE75jMFRtkDLxrTyXKNrjqnY491QjyuSrziu562WiZSBQAUeHhDfUR7dAtRrHt4haT",
  "key24": "64bM9mQX1Ntpw6S6sy7bsMbKwMXfnsN87Qp58voENvzZ1uhG1r7RsGRm96N2a7xpgzos9237MYZAWTWgdAcQ3Y3X",
  "key25": "LFxri7BNqN3F7vYqQq9hmuqccUrYCrNxEACTB452qnZ9DNfYmr4ZTrEF2mkzxVtyZpky8CzTsMRFaHEwRkWav4y",
  "key26": "tugPtzky93TQWjAAksJS67hz4MqR1WQs8Y2HroknCLFJzPsNV3grWzFhE6bRbpFyVeg3zVid7crp37eBeiXkJ2m",
  "key27": "3hPQBuzPh3WwXtNa6SRVfUfWsLisRqb5JUkgejto3PVDRu2Yme1sA2vU2zvCwrU4vzY3s1rKw9rfYqV16MnuePxS",
  "key28": "5rG4iQKPv5eZHZvwFJNeotNXvjUH6BCzR3SraumLDaDmMdrFSh9bushySP2ZeerQLqJQJtrNWZJEZksv6VPktfAD",
  "key29": "4BVHtnQGfRbZKBZyJ2yELuFboRE2SrE38fSruxtCL5kRVezw7DPR3kuJSoGSQ9dy7YsstHGpjb3xL7eDt27DXkLz",
  "key30": "fwe4BrG4LcQWzy4cGS5sLySobAJ2XU7y5BrhABJcaUccphGJb8uDZ8uV6vffKgDYQYtq6DrsX5JTG4T2Rib6WhT",
  "key31": "55dHc9mKMr9DgYnyXgtkZRnaU9BZ5bUv9LpxoLXie4DT3zEX83qSrQcrzYP8uwark5NoXhGmHNWx1YQv7nCeDgST",
  "key32": "5Q7vHbwTx7boHi24naeGT9zh7ZT58ZqqHFSeXDiPsX5wbdS5cTYLhsReRvN7kzQPojYgtVQ6hfqyYWVytxnHkEzZ",
  "key33": "5o27u6gsZ9HTNphqnQMzbpWDWdk7N3mRApAsx3WqYBxUPQ9H7tr6wT1bPauqm8cUVwx7YiwF2CgR5yWQ9kLn8USD",
  "key34": "53RkjMTmB11hqr19k3ZEJ8bcxMspRgthDXA3Jb51vcMnY1EFMgPi7mwHsFQ4DGFh8FjEaXvbQvYYuNHWL7ZdMvZD",
  "key35": "rRU35hUi9aZDTEWMnond2Tvuc4F1S2LPe3AH4pk1wkkjWh1fH5XTkTMq6KjknpokyCEYsrML8jBB8z4UzUjqcvx",
  "key36": "3kKQFtEp32LMKRH1UMhqwYSUE4KWdR5F11KjZKPPnYAzY2rVLSCPhBRByEXEj4R1RnSuce2SWjjTQfouMaBwev7D",
  "key37": "Yk3VKVvs91fJWcncYnEqAYZdV4dpnBKgKZtX3YP4G9EMLBUV46LAMKVrJQYHYmKMKUY76A9TVty4tCQe7Aj72QU",
  "key38": "5cjT4u2qLE2PFBjYSng6GW4DxB9AsUSJrSggNjeiRGhcuujMxkfFaA5hivJtd23MJHaF5ciu1u3B6Xx2rttiG21M"
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
